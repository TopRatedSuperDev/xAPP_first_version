const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
name: String,
email: String,
password: String,
payValue: Number,
vipTime: Date,
});

const User = mongoose.model('User', userSchema);

module.exports = User;