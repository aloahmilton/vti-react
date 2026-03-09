const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Import Routes
const productRoutes = require("./routes/products");
const paymentRoutes = require("./routes/payment");

// Use Routes
app.use("/api/products", productRoutes);
app.use("/pay", paymentRoutes);

app.listen(5000, () => {
    process.stdout.write("Backend ready on port 5000\n");
});

process.on('uncaughtException', (err) => {
    process.stdout.write(`Uncaught Error: ${err.message}\n`);
    process.exit(1);
});

process.on('unhandledRejection', (reason) => {
    process.stdout.write(`Unhandled Rejection: ${reason}\n`);
    process.exit(1);
});
