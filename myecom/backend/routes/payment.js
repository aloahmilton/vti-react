const express = require("express");
const router = express.Router();
const axios = require("axios");

// Fapshi Credentials
const FAPSHI_API_USER = "55b0766f-76ea-4e88-ad94-4d979548b89a";
const FAPSHI_API_KEY = "FAK_775bfa38766e33e34bee8c17d5c0e09c";

router.post("/", async (req, res) => {
    const { amount } = req.body;

    if (!amount || isNaN(amount) || Number(amount) < 100) {
        return res.status(400).json({ error: "Invalid amount. Minimum 100 XAF is required." });
    }

    try {
        const payload = {
            amount: Number(amount),
            userId: "user_handwritten_store",
            externalId: `order_${Date.now()}`,
            message: "Purchase from MyStore"
        };

        const response = await axios.post("https://live.fapshi.com/initiate-pay", payload, {
            headers: {
                apiuser: FAPSHI_API_USER,
                apikey: FAPSHI_API_KEY,
                "Content-Type": "application/json"
            }
        });

        res.json({ response: response.data });
    } catch (error) {
        const errorMsg = error.response ? JSON.stringify(error.response.data) : error.message;
        process.stdout.write(`Payment Error detail: ${errorMsg}\n`);
        res.status(500).json({ error: "Payment failed", details: errorMsg });
    }
});

module.exports = router;
