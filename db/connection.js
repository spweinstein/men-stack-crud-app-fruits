const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.set("returnOriginal", false); // When doing find/update methods, this will return the new, updated object instead of the old version of the object

// Connect to database
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("disconnected", () => {
  console.log(`Disconnected from MongoDB ${db.name}`);
});

module.exports = mongoose.connection;
