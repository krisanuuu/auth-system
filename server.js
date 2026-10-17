
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Authentication routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("User Authentication System API is running!");
});

// Connect to MongoDB, then start server
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully!");

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });
