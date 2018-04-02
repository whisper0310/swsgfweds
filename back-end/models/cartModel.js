var mongoose = require("mongoose");
var CartSchema = new mongoose.Schema(
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

module.exports = CartSchema;