const mongoose = require("mongoose");
const { mongoUri } = require("./index");

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  await mongoose.connect(mongoUri);
  console.log("MongoDB connected");
};

module.exports = connectDB;
