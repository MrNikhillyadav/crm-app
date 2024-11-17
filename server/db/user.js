const mongoose = require('mongoose');
const {ObjectId} = mongoose.Types

const User = new mongoose.Schema({
      name: String,
      email: String,
      totalSpending: Number,
      visits: Number,
      lastVisit: Date,
    });
  
  const UserModel = mongoose.model('Users',User);
  
  module.exports ={
    UserModel,
  }