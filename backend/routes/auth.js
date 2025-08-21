// backend/router/auth.js
const express = require("express");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Load credentials
const credentialsPath = path.join(__dirname, "..", "user_credentials.json");
const credentials = JSON.parse(fs.readFileSync(credentialsPath, "utf8"));

// Secret key for JWT (in production use env variable)
const JWT_SECRET = "supersecretkey";

// @route   POST /auth/login
// @desc    Authenticate user and return JWT
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = credentials.users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  // Generate JWT Token
  const token = jwt.sign({ username: user.username }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ message: "Login successful", token });
});

module.exports = router;
