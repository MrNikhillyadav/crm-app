const mongoose = require('mongoose');

const Admin = new mongoose.Schema({
      name: String,
      email: {type : String, unique : true},
      password: String,
    });
  
  const AdminModel = mongoose.model('Admin',Admin);
  
  module.exports ={
      AdminModel,
  }