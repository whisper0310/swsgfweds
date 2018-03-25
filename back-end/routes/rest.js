var express = require("express");
var router = express.Router();

var restaurantService = require("../services/restaurantService");

router.get("/restaurants", function(req, res){
  console.log(12)
  restaurantService.getRestaurants()
      .then(restaurants => res.json(restaurants));
});

router.get("/restaurants/:id", function(req, res){
  var id = req.params.id;
  restaurantService.getRestaurant(id)
      .then(restaurant => res.json(restaurant));
});


module.exports = router;