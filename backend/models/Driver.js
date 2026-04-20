const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
  driverId: String,
  name: String,
  location: {
    lat: Number,
    lng: Number,
  },
  lastUpdated: Date,
});

module.exports = mongoose.model("Driver", driverSchema);