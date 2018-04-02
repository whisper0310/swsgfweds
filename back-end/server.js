var express= require("express");
var app = express();
var restRouter = require("./routes/rest.js");
var mongoose = require("mongoose");
var config = require("./config.js");
var server = require('http').Server(app);
var io = require('socket.io')(server);

mongoose.connect(config.path);

// server.listen(80);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use("/api/v1", restRouter);

var UserController = require('./user/UserController');
app.use('/api/v1/auth', UserController);

// io.on('connection', function (socket) {
//     socket.emit('news', { hello: 'world' });
//     socket.on('my other event', function (data) {
//         console.log(data);
//     });
// });
// var cart={ recipes:[] };
// io.on('connection', function (socket) {
//
//     // socket.emit('news', { hello: 'world' });
//     socket.on('add', function (data) {
//         console.log(data);
//         cart.recipes.push(data);
//         cart.recipes.push(data);
//     });
//     socket.emit('cart', cart);
//
// });

app.listen(3000, function(){
  console.log("App started listening on port 3000");
});

