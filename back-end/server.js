var express= require("express");
var app = express();
var restRouter = require("./routes/rest.js");
var mongoose = require("mongoose");

mongoose.connect("mongodb://root:admin@ds163796.mlab.com:63796/eat");


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use("/api/v1", restRouter);
app.listen(3000, function(){
  console.log("App started listening on port 3000");
});
