const express = require("express");
const path = require("path");
const { tokenVerification } = require("../utiles/verfiyToken");
const { signUp, logIn, logOut } = require("../controller/ketabk");
const multer = require("multer");
const route = express.Router();
const {
  addBook,
  deleteBook,
  allBooks,
  userBooks,
  download,
} = require("../controller/booksController");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "d:/program/web/java_script/Node/my_project/ketabk/Books");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage: storage });

route.get("/", (req, res) => {
  res.render("index.ejs");
});
route.get("/signUp", (req, res) => {
  res.render("signUp.ejs");
});
route.get("/logOut", logOut);
route.get("/about", (req, res) => {
  res.render("about.ejs");
});
route.get("/logIn", (req, res) => {
  res.render("logIn.ejs");
});
route.get("/books", tokenVerification, (req, res) => {
  res.render("books.ejs");
});
route.get("/adminPage", tokenVerification, (req, res) => {
  res.render("adminPage.ejs");
});
route.get("/addBooks", (req, res) => {
  res.render("addBooks.ejs");
});
route.get("/deleteBooks", (req, res) => {
  res.render("deleteBooks.ejs");
});
// route.get("/download_book", (req, res) => {
//   res.send({ msg: "downloading now ...." });
// });
route.get("/ourBooks", tokenVerification, userBooks);
route.get("/adminBooks", allBooks);
route.post("/addBooks", upload.single("pdf"), addBook);
route.post("/deleteBooks", deleteBook);
route.post("/signUp", signUp);
route.post("/logIn", logIn);
route.get("/download_book", download);
route.get("/globalSearch", (req,res)=>{
  res.render('globalSearch.ejs')
});

module.exports = route;
