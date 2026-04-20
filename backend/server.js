const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const connectDB = require("./config/db");

const app = express();
const server = http.createServer(app);

app.use(express.json());

// connect database
connectDB();

app.get("/", (req, res) => {
  res.send("Smart Fleet Backend Running");
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});