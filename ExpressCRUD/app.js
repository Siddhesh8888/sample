const express = require("express");
const app = express();
const bodyparser = require("body-parser");
var path = require("path");
var routes = require("./router/routers");

// //add middleware to parse request
app.use(bodyparser.urlencoded({ extended: false }));
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// //add url handler
// app.use("/", routes);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname, "public")));
//to find all static css and js folder
app.use("/css", express.static(path.resolve(__dirname, "public/css")));
app.use("/js", express.static(path.resolve(__dirname, "public/js")));
app.use("/image", express.static(path.resolve(__dirname, "public/images")));

app.use("/", routes);

//start server
app.listen(3002, function () {
  console.log("Server started on 3002 port!!");
});

module.exports = app;
