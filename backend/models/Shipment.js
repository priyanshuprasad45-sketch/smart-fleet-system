const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema({
  shipmentId: String,
  driverId: String,
  status: {
    type: String,
    enum: ["pending", "in_transit", "delivered"],
  },
});

module.exports = mongoose.model("Shipment", shipmentSchema);