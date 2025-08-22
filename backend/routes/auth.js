// backend/routes/auth.js

const express = require("express");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const router = express.Router();

// Load credentials
const credentialsPath = path.join(__dirname, "..", "user_credentials.json");
let credentials = JSON.parse(fs.readFileSync(credentialsPath, "utf8"));

// Secret key for JWT (use environment variable in production)
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// @route   POST /auth/signup
// @desc    Register a new user
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existingUser = credentials.users.find((u) => u.username === username);
  if (existingUser) {
    return res.status(400).json({ message: "Username already exists" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = {
    username,
    password: hashedPassword
  };
  credentials.users.push(newUser);

  fs.writeFileSync(credentialsPath, JSON.stringify(credentials, null, 2));

  res.status(201).json({ message: "User registered successfully" });
});

// @route   POST /auth/login
// @desc    Authenticate user and return JWT
router.post("/login", async (req, res) => {
  console.log(req.body); // Debug: Log incoming request body
  const { username, password } = req.body;

  const user = credentials.users.find((u) => u.username === username);

  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const token = jwt.sign({ username: user.username }, JWT_SECRET, {
    expiresIn: "1h"
  });

  res.json({ message: "Login successful", token });
});

module.exports = router;