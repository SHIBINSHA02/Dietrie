// backend/server.js

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/authMiddleware');
const connectDB = require('./dbms/db'); // Import the new database connection file

const app = express();

// Connect to MongoDB
connectDB();

// Enable CORS for requests from http://localhost:5173
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());

app.use('/auth', authRoutes);

app.get('/home', authMiddleware, (req, res) => {
    res.json({ message: `Welcome ${req.user.username}, this is your dashboard.` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));