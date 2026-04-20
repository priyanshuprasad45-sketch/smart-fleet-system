const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://fleetuser:Fleet%4012345@cluster0.saytuh9.mongodb.net/fleetDB?appName=Cluster0");
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("DB Connection Error:", error);
  }
};

module.exports = connectDB;