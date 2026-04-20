const { io } = require("socket.io-client");

const socket = io("http://localhost:5000");

socket.on("connect", () => {
  console.log("Connected to server:", socket.id);
});

// listen for driver location updates
socket.on("locationUpdate", (data) => {
  console.log("📍 Location Update Received:");
  console.log(data);
});

// listen for shipment updates
socket.on("shipmentUpdate", (data) => {
  console.log("📦 Shipment Update Received:");
  console.log(data);
});