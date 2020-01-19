const express = require("express");
const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT || 5001;

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ exteded: false }));

// Routes
app.get("/", (req, res) => res.send("API Running"));

// Listen
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
