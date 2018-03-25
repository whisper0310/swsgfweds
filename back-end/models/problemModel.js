var mongoose = require("mongoose");
var ProblemSchema = new mongoose.Schema(
    {
      id:Number,
      name:String,
      desc:String,
      difficulty:String
    }
);

// var problemModel = mongoose.model("ProblemModel",ProblemSchema);
module.exports = ProblemSchema;