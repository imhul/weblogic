const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  ip: String,
  regDate: Date
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
