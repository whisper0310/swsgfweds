// var problems = [
//   {
//     id:1,
//     name:'123',
//     difficulty:"",
//     desc:''
//
//   },
//   {
//     id:2,
//     name:'3445',
//     difficulty:"",
//     desc:''
//   }
// ];
var mongoose = require('mongoose');
ProblemSchema = require("../models/problemModel");

Problem = mongoose.model("Problem",ProblemSchema);

var getProblems = function(){
  return new Promise((resolve, reject) => {
    Problem.find({}, function (err, problems){
      console.log("345")
      if (err){
        reject(err);
      }
      console.log(problems);
      resolve(problems);
    })
  });
}

var getProblem = function(id){
  return new Promise((resolve, reject) => {
    ProblemModel.findOne({id:id}, function (err, problems){
    if (err){
      reject(err);
    }
    resolve(problems);
  })
});
}
module.exports = {
  getProblems: getProblems,
  getProblem: getProblem
};

