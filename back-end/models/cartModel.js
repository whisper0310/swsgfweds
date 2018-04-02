var mongoose = require("mongoose");
var RecipeSchema = new mongoose.Schema(
    {
      user:{
          type:mongoose.Schema.ObjectId,
          ref:'User'
      },
      //total:Number,
        recipes:[{
            type:mongoose.Schema.ObjectId,
            ref:'Recipe'
        }]
    }
);

module.exports = RecipeSchema;