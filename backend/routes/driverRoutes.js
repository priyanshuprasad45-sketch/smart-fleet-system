const express = require("express");
const router = express.Router();

const { updateLocation, getDrivers } = require("../controllers/driverController");

// routes
router.post("/update-location", updateLocation);
router.get("/", getDrivers);

module.exports = router;