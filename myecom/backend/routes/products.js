const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
    try {
        const productsPath = path.join(__dirname, "../products.json");
        const productsData = fs.readFileSync(productsPath, "utf8");
        res.json(JSON.parse(productsData));
    } catch (error) {
        res.status(500).json({ error: "Failed to load products" });
    }
});

module.exports = router;
