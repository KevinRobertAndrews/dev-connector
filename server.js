const express = require("express");
const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT || 5001;

// Connect Database
connectDB();

// Initialize Middleware
app.use(express.json({ extended: false }));

// Init Middleware
app.use(express.json({ exteded: false }));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/post", require("./routes/api/post"));
app.use("/api/profile", require("./routes/api/profile"));

// Listen
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
