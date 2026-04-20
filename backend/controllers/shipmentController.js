const Shipment = require("../models/Shipment");

// CREATE SHIPMENT
exports.createShipment = async (req, res) => {
  try {
    const shipment = await Shipment.create(req.body);
    res.json(shipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET SHIPMENTS
exports.getShipments = async (req, res) => {
  try {
    const shipments = await Shipment.find();
    res.json(shipments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE STATUS
exports.updateShipment = async (req, res) => {
  try {
    const { shipmentId, status } = req.body;

    const shipment = await Shipment.findOneAndUpdate(
      { shipmentId },
      { status },
      { new: true }
    );

    // optional socket
    const io = req.app.get("io");
    io.emit("shipmentUpdate", shipment);

    res.json(shipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};