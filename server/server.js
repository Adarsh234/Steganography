const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

// Initialize express app
const app = express();

// Load environment variables from .env file
dotenv.config();

app.use(cors());

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb+srv://adarsh:adarshsharma01@userauthentication.m6itr.mongodb.net/?retryWrites=true&w=majority&appName=UserAuthentication", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Serve static files from the React app (client build folder)
app.use(express.static(path.join(__dirname, '../build')));

// Import your routes
const authRoutes = require('./routes/auth');
const imageRoutes = require('./routes/images');

// API Routes
app.use('/auth', authRoutes); // For login, register
app.use('/images', imageRoutes); // For image processing routes (encode, decode)

// Fallback route to serve the React frontend for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
