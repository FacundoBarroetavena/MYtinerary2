var mongoose = require('mongoose');

var citySchema = new mongoose.Schema({
    name: String,
    country: String,
    image: String,
    title: String
  });
  
  var City = mongoose.model('City', citySchema);
  
  // var newCity = new City({ name: 'AAAKOAKAOKAKOA', country: 'JAKSJDAKSD' });
  // console.log(newCity.name, newCity.country);
  
  // newCity.save(function (err, newCity) {
  //   if (err) return console.error(err);
  //   console.log("Guarde una ciudad en la DB!", newCity.name, newCity.country);
  // });
  
  module.exports = City;