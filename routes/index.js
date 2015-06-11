var express = require('express');
var router = express.Router();
var calculate = require('../public/javascripts/functions.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Another Air Travel Calculator' });
});

router.post('/', function(req, res, next) {
  var departureCity = req.body.departure_city
  console.log(departureCity);
  var arrivalCity = req.body.arrival_city
  console.log(arrivalCity);
  var bags = req.body.bags
  console.log(bags);
  var flightClass = req.body.class
  console.log(flightClass);
  var wifi = req.body.wifi
  console.log(wifi);
  var discount = req.body.discount
  console.log(discount);
  console.log(calculate(departureCity, arrivalCity, bags, flightClass, wifi, discount));
  res.render('index', { total: calculate(departureCity, arrivalCity, bags, flightClass, wifi, discount), });
});

module.exports = router;
