const express = require('express');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

// Protected encode route
router.post('/encode', protect, (req, res) => {
  const { message, image } = req.body;
  // Add your encoding logic here
  res.json({ encodedImage: "image_with_message" });
});

// Protected decode route
router.post('/decode', protect, (req, res) => {
  const { image } = req.body;
  // Add your decoding logic here
  res.json({ message: "decoded_message" });
});

module.exports = router;
