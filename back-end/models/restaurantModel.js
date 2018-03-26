var mongoose = require("mongoose");

var RestaurantSchema = new mongoose.Schema(
    {
      name:String,
      address:String,
        recipes:[{
          type:mongoose.Schema.ObjectId,
          ref:'Recipe'
        }]
    }
);

module.exports = RestaurantSchema;