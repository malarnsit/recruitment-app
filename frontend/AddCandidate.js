const express = require('express');
const router = express.Router();
const Candidate = require('../models/Candidate'); // Adjust the path if necessary
router.get('/', async (req, res) => {
  try {
    const candidates = await Candidate.find();  // Check if the query is correct
    console.log(candidates); // Log candidates to ensure data is being fetched
    res.json(candidates);
  } catch (err) {
    console.error("Error fetching candidates:", err);
    res.status(500).send('Error fetching candidates');
  }
});

module.exports = router;
