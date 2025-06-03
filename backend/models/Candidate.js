const mongoose = require('mongoose');
const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  applicationStatus: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('Candidate', candidateSchema);
