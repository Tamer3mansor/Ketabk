const express = require("express");
const { signUp } = require("../controller/ketabk");
const { checkEmail, checkPassword } = require("../utiles/validator");
const route = express.Router();
route.get("/signUp", (req, res) => {
  res.render("signUp.ejs");
});
route.get("/", (req, res) => {
  res.render("index.ejs");
});
route.get("/about", (req, res) => {
  res.render("about.ejs");
});
route.get("/logIn", (req, res) => {
  res.render("logIn.ejs");
});
route.post("/signUp", signUp);
route.get("/Books", (req, res) => {
  res.render("logIn.ejs");
});

module.exports = route;
