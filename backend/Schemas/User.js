var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    image: String,
    email: String,
    firstName: String,
    lastName: String,
    country: String
  });
  
  var User = mongoose.model('User', userSchema);
  
  module.exports = User;