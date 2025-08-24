// backend/dbms/db.js
const mongoose = require('mongoose');


const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/user-auth-db';

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log('MongoDB connected successfully.');
    } catch (err) {
        console.error('MongoDB connection failed:', err.message);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;