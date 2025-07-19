const mongoose = require('mongoose');

const DownloadSchema = new mongoose.Schema({
  email: String,
  token: String,
  expiresAt: Date,
});

module.exports = mongoose.model('Download', DownloadSchema);
