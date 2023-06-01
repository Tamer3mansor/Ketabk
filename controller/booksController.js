const books = require("../models/books");
const logger = require("../logging/winstone");
let addBook = async (req, res) => {
  let { bookName, bookAuthor, bookDesc, bookLink } = req.body;
  try {
    let _book = await books.create({
      name: bookName,
      author: bookAuthor,
      description: bookDesc,
      buyLink: bookLink,
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
module.exports = {
  addBook,
  deleteBook,
  allBooks,
  userBooks,
};