module.exports = function(departureCity, arrivalCity, bags, flightClass, wifi, discount){

    if (departureCity === arrivalCity) {
        price = 0;
    } else if (departureCity === "chicago" && arrivalCity === "newyork") {
        price = 250;
    } else if (departureCity === "chicago" && arrivalCity === "losangeles") {
        price = 350;
    } else if (departureCity === "newyork" && arrivalCity === "chicago") {
        price = 250;
    } else if (departureCity === "newyork" && arrivalCity === "losangeles") {
        price = 545;
    } else if (departureCity === "losangeles" && arrivalCity === "chicago") {
        price = 350;
    } else if (departureCity === "losangeles" && arrivalCity === "newyork") {
        price = 545;
    } else {
        price = 0;
    }

    if (price > 0) {
      if (wifi === true) {
        wifiCost = 12
      } else {
        wifiCost = 0
      }

      if (discount === "10OFF") {
        discountCost = .9
      } else if (discount === "20OFF") {
        discountCost = .8
      } else {
        discountCost = 1
      }

    return (parseInt(price) + parseInt(bags) + parseInt(flightClass) + parseInt(wifiCost)) * (discountCost)
  };
  };
