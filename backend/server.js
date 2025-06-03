const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/recruitmentApp')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Import routes
const candidatesRoute = require('./routes/candidates');

// Use routes
app.use('/api/candidates', candidatesRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
