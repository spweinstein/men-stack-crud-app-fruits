const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
  isReadyToEat: Boolean,
  name: String,
});

module.exports = mongoose.model("Fruit", fruitSchema);
