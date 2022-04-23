require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8001;

// body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// mongoose
const Contact = require("./db/contact");

// ejs
const ejs = require("ejs");
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  var myData = new Contact(req.body);
  myData
    .save()
    .then(() => {
      res.send("This item has been saved to the database ");
    })
    .catch(() => {
      res.status(400).send("Item is not saved");
    });
});

app.listen(port, () => {
  console.log(`The application started successfully on ${port}`);
});
