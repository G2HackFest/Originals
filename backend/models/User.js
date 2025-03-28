const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },
  verified: { type: Boolean, default: false },
  pocketmoney: { type: String, default: '0' }, 
  expenses: [{ 
    id: String,
    expenses: String, 
    date: Date,
  }],
  lastImageContent: { type: String, default: '' }, 
});

module.exports = mongoose.model('User', userSchema);