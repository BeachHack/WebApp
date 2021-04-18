const { Schema } = require('mongoose');
const mongoose = require('../index.js');

const eventsSchema = mongoose.Schema({
  title: String,
  date: Date,
  location: Object,
  sport: String,
  description: String,
  attendees: { type: Array, default: [] },
});

module.exports.Event = mongoose.model('Room', eventsSchema);