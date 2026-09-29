const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/lokasi", async (req, res) => {
    const kota = req.query.kota; 
    const apiKey = "ZLyVxcONML3i372bgtrb"; 
    const url = `https://api.maptiler.com/geocoding/${kota}.json?key=${apiKey}`;

    try {
        const response = await axios.get(url);
        const data = response.data;
