const express = require("express");
const router = express.Router();

const {
  createShipment,
  getShipments,
  updateShipment,
} = require("../controllers/shipmentController");

// routes
router.post("/", createShipment);
router.get("/", getShipments);
router.put("/", updateShipment);

module.exports = router;