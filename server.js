const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up storage for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to handle journal entries
app.post('/journal', (req, res) => {
  const { entry } = req.body;
  // Here you would typically save the entry to a database
  res.status(201).json({ message: 'Journal entry created', entry });
});

// Endpoint to upload images
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  res.status(201).json({ message: 'Image uploaded successfully', filePath: `uploads/${req.file.filename}` });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
