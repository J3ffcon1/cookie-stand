var PioneerSquare = {
minCustomerHr: 17,
maxCustomerHr: 88,
avgCustomerHr: 5.2,
randomNumber: function() {
  return Math.floor(Math.random() * (this.maxCustomerHr - this.minCustomerHr + 1 )) + this.minCustomerHr;
}
}

var PortlandAirport = {
minCustomerHr: 6,
maxCustomerHr: 24,
avgCustomerHr: 1.2,
randomNumber: function() {
  return Math.floor(Math.random() * (this.maxCustomerHr - this.minCustomerHr + 1 )) + this.minCustomerHr;
}
}

var WashingtonSquare = {
minCustomerHr: 11,
maxCustomerHr: 38,
avgCustomerHr: 1.9,
randomNumber: function() {
  return Math.floor(Math.random() * (this.maxCustomerHr - this.minCustomerHr + 1 )) + this.minCustomerHr;
}
}

var Sellwood = {
minCustomerHr: 20,
maxCustomerHr: 48,
avgCustomerHr: 3.3,
randomNumber: function() {
  return Math.floor(Math.random() * (this.maxCustomerHr - this.minCustomerHr + 1 )) + this.minCustomerHr;
}
}

var PearlDistrict = {
minCustomerHr: 3,
maxCustomerHr: 24,
avgCustomerHr: 2.6,
randomNumber: function() {
  return Math.floor(Math.random() * (this.maxCustomerHr - this.minCustomerHr + 1 )) + this.minCustomerHr;
}
}
