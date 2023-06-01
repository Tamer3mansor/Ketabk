const express = require("express");
const body_parser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const connection = require("./dataBase/DB");
const router = require("./routes/route");
const { checkUser } = require("./utiles/verfiyToken");
//Middleware
app.use(express.json());
app.use(express.static("./public"));
app.use("/addBooks", express.static("./Books"));
app.use(body_parser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set("view engin", "ejs");
require("dotenv").config();
app.use("*", checkUser);
app.use("/", router);
app.listen(process.env.port, () => {
  try {
    connection.connectDB(process.env.url);
    console.log("app listen at port 8000");
  } catch (error) {
    console.log(error);
  }
});
