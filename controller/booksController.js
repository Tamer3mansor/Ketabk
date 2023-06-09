const books = require("../models/books");
const logger = require("../logging/winstone");
const path = require("path");
let addBook = async (req, res) => {
  console.log(req.body);
  let { name, author, link, desc } = req.body;
  let { filename } = req.file;
  try {
    let _book = await books.create({
      name,
      author,
      buyLink: link,
      description: desc,
      pdf: filename,
    });
    if (_book) {
      res.status(200).send({ msg: "success" });
    }
  } catch (error) {
    logger.error("system crashed try again ");
    res.status(400).send({ msg: "Wrong" });
  }
};
let deleteBook = async (req, res) => {
  let { id } = req.body;
  try {
    let _removed = await books.findOneAndDelete({ _id: id });
    console.log(_removed);
    if (_removed) {
      res.status(200).send({ msg: "done" });
    } else {
      logger.error("wrong id try again");
      res.status(500).send({ msg: "id wrong" });
    }
  } catch (error) {
    logger.error("system crashed try again ");
    res.status(400).send({ msg: "try again " });
  }
};
let allBooks = async (req, res) => {
  try {
    let allBooks = await books.find({});
    console.log(allBooks);
    res.render("AdminBooks.ejs", { Books: allBooks });
  } catch (error) {
    logger.error("system crashed try again ");
    res.status(400).send("allBooks");
  }
};
let userBooks = async (req, res) => {
  try {
    let allBooks = await books.find({});
    res.render("ourBooks.ejs", { Books: allBooks });
  } catch (error) {
    logger.error("system crashed try again ");
    res.status(400).json({ msg: "try agin" });
  }
};
let download = async (req, res) => {
  var str = req.url;
  var arr = str.split("path=");
  var value = arr.pop();
  try {
    let filePATH = path.join(__dirname + `/../Books/${value}`);

    if (!fs.existsSync(filePATH)) {
      res.send("File doest not exist");
    }

    let result = await res.download(filePATH, value, (error) => {
      if (error) {
        console.log("error", error);
        res.status(500).send(error);
      }
    });
    if (result) {
      res.status(200).send("ok");
    }
  } catch (error) {
    res.send(error);
  }
};
module.exports = {
  addBook,
  deleteBook,
  allBooks,
  userBooks,
  download,
};
