const mongoose = require('mongoose');

const VIPTimeSchema = new mongoose.Schema({
name: String,
payValue: Number,
VIPtime: Date,
});

const VIPTime = mongoose.model('VIPTime', VIPTimeSchema);

module.exports = VIPTime;