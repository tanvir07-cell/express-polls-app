const express = require("express");

// morgan hocceh ekti middleware jeti ami install korechi:
const morgan = require("morgan");

// mongoose hocceh ekti orm jeti database er sathe relation staphon kore:
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 8000;

// app.use() diye direct middleware use kora laage:
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/create", (req, res) => {
  res.render("createPools");
});

// connect the database using mongoose orm:
mongoose
  .connect("mongodb://localhost:27017/test")

  .then(() => {
    app.listen(port, () => {
      console.log(`App is listening on the port :${port}`);
    });
  })
  .catch((e) => {
    console.log("Something went wrong", e);
  });
