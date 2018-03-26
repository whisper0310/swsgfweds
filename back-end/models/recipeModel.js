var mongoose = require("mongoose");
var RecipeSchema = new mongoose.Schema(
    {
      name:String,
      price:Number
    }
);

module.exports = RecipeSchema;