var mongoose = require('mongoose');
RestaurantSchema = require("../models/restaurantModel");

Restaurant = mongoose.model("Restaurant",RestaurantSchema);

var getRestaurants = function(){
  return new Promise((resolve, reject) => {
    Restaurant.find({}, function (err, restaurants){
      if (err){
        reject(err);
      }
      console.log(restaurants);
      resolve(restaurants);
    })
  });
};

var getRestaurant = function(id){
  console.log(id)
  return new Promise((resolve, reject) => {
    Restaurant.findOne({_id:id}, function (err, restaurant){
    if (err){
      reject(err);
    }
    resolve(restaurant);
  })
});
};
module.exports = {
  getRestaurants: getRestaurants,
  getRestaurant: getRestaurant
};

