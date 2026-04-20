const Driver = require("../models/Driver");

// UPDATE LOCATION
exports.updateLocation = async (req, res) => {
  try {
    const { driverId, name, lat, lng } = req.body;

    const driver = await Driver.findOneAndUpdate(
      { driverId },
      {
        name,
        location: { lat, lng },
        lastUpdated: new Date(),
      },
      { upsert: true, new: true }
    );

    // emit socket event
    const io = req.app.get("io");
    io.emit("locationUpdate", driver);

    res.json(driver);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL DRIVERS
exports.getDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};