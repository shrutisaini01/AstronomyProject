require("dotenv").config();
const express = require("express");
const axios = require("axios");
const path = require("path");
const cors = require("cors");


const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.static(path.join(__dirname)));

app.get("/astro", async (req, res) => {
  try {
    const response = await axios.get("https://api.nasa.gov/planetary/apod", {
      params: {
        api_key: process.env.KEY,
      },
    });
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("Error fetching data from NASA:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pr1.html"));
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
