// Here is where we import modules
// We begin by loading Express

const express = require("express");
const logger = require("morgan");
const db = require("./db/connection");
const Fruit = require("./models/fruit.js");

db.on("connected", () => {
  console.log(`Connected to MongoDB ${db.name}`);

  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
});

// Instantiate express app
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

// Routes

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/fruits/new", (req, res) => {
  res.render("fruits/new.ejs");
});

app.post("/fruits", async (req, res) => {
  console.log(req.body);
  req.body.isReadyToEat = req.body.isReadyToEat === "on" ? true : false;
  await Fruit.create(req.body);
  //   res.send("You submitted a form");
  res.redirect("/fruits");
});

app.get("/fruits", async (req, res) => {
  // Find all fruits data from fruits collection in the DB
  const allFruits = await Fruit.find();
  console.log(allFruits);
  // Render HTML file with the data embedded
  res.render("fruits/index.ejs", {
    fruits: allFruits,
  });
  // res.send("Welcome to the index page - todo!");
});
