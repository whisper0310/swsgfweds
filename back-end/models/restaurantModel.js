var mongoose = require("mongoose");
var RestaurantSchema = new mongoose.Schema(
    {
      name:String,
      address:String
    }
);

module.exports = RestaurantSchema;