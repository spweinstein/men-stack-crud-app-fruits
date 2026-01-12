// Here is where we import modules
// We begin by loading Express

const express = require("express");
const logger = require("morgan");
const db = require("./db/connection");

db.on("connected", () => {
  console.log(`Connected to MongoDB ${db.name}`);

  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
});

// Instantiate express app
const app = express();

// Middlewares

app.use(logger("dev"));

// Routes

app.get("/", (req, res) => {
  res.render("index.ejs");
});
