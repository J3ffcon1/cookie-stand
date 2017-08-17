var PioneerSquare = {
minCustomerHr: 17,
maxCustomerHr: 88,
avgCustomerHr: 5.2,
storeCookies: [],
storeHours: ["10am", "11am", "12pm","1pm", "2pm", "3pm", "4pm", "5pm"],
randomNumber: function() {
  return Math.floor(Math.random() * (this.maxCustomerHr - this.minCustomerHr + 1 )) + this.minCustomerHr;
},

randomCookies: function(){
  return (this.randomNumber() * this.avgCustomerHr);
},

numberCookies: function () {
  for (var i = 0; i < this.storeHours.length; i++) {
    this.storeCookies.push(this.randomCookies());
  }
},
displayCookies: function(){
  for (var i = 0; i < Pi.length; i++) {
    Pi[i]
  }

}



}

var PortlandAirport = {
minCustomerHr: 6,
maxCustomerHr: 24,
avgCustomerHr: 1.2,
storeHours: ["10am", "11am", "12pm","1pm", "2pm", "3pm", "4pm", "5pm"],
randomNumber: function() {
  return Math.floor(Math.random() * (this.maxCustomerHr - this.minCustomerHr + 1 )) + this.minCustomerHr;
}
}

var WashingtonSquare = {
minCustomerHr: 11,
maxCustomerHr: 38,
avgCustomerHr: 1.9,
storeHours: ["10am", "11am", "12pm","1pm", "2pm", "3pm", "4pm", "5pm"],
randomNumber: function() {
  return Math.floor(Math.random() * (this.maxCustomerHr - this.minCustomerHr + 1 )) + this.minCustomerHr;
}
}

var Sellwood = {
minCustomerHr: 20,
maxCustomerHr: 48,
avgCustomerHr: 3.3,
storeHours: ["10am", "11am", "12pm","1pm", "2pm", "3pm", "4pm", "5pm"],
randomNumber: function() {
  return Math.floor(Math.random() * (this.maxCustomerHr - this.minCustomerHr + 1 )) + this.minCustomerHr;
}
}

var PearlDistrict = {
minCustomerHr: 3,
maxCustomerHr: 24,
avgCustomerHr: 2.6,
storeHours: ["10am", "11am", "12pm","1pm", "2pm", "3pm", "4pm", "5pm"],
randomNumber: function() {
  return Math.floor(Math.random() * (this.maxCustomerHr - this.minCustomerHr + 1 )) + this.minCustomerHr;
}
}
