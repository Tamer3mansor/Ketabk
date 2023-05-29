const express = require("express");
const { tokenVerification } = require("../utiles/verfiyToken");
const { signUp, logIn, logOut } = require("../controller/ketabk");
const {
  addBook,
  deleteBook,
  allBooks,
  userBooks,
} = require("../controller/booksController");
const route = express.Router();
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
route.get("/ourBooks", userBooks);
route.get("/adminPage", tokenVerification, (req, res) => {
  res.render("adminPage.ejs");
});
route.get("/addBooks", (req, res) => {
  res.render("addBooks.ejs");
});
route.get("/deleteBooks", (req, res) => {
  res.render("deleteBooks.ejs");
});
route.get("/adminBooks", allBooks);
route.post("/addBooks", addBook);
route.post("/deleteBooks", deleteBook);
route.post("/signUp", signUp);
route.post("/logIn", logIn);

module.exports = route;
