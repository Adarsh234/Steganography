const express = require('express');
const multer = require('multer');
const auth = require('../middleware/authMiddleware');
const path = require('path');
const fs = require('fs');
const Image = require('../models/Images'); // Image model

const router = express.Router();

// Set up Multer for image uploading
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // Save images to "uploads/" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Image upload route (protected)
router.post('/upload', auth, upload.single('image'), async (req, res) => {
  const newImage = new Image({
    userId: req.user,  // User who uploaded the image
    filename: req.file.filename
  });

  await newImage.save();
  res.json({ message: 'Image uploaded successfully', image: newImage });
});

// Fetch images uploaded by the user
router.get('/my-images', auth, async (req, res) => {
  const images = await Image.find({ userId: req.user });
  res.json(images);
});

module.exports = router;
