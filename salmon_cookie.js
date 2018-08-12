

var PioneerSquare = {
  minCustomerHr: 17,
  maxCustomerHr: 88,
  avgCustomerHr: 5.2,
  name: "Pioneer Square",
  storeCookies: [],
  storeHours: ["10am", "11am", "12pm","1pm", "2pm", "3pm", "4pm", "5pm"],
  randomNumber: function() {
    return Math.floor(Math.random() * (this.maxCustomerHr - this.minCustomerHr + 1 )) + this.minCustomerHr;
  },

  randomCookies: function(){
    return Math.floor(this.randomNumber() * this.avgCustomerHr);
  },

  numberCookies: function () {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.storeCookies.push(this.randomCookies());
    }
  },
 totalCookies: function (){
   var Total = 0;
   for (var i = 0; i < this.storeCookies.length; i++) {
     Total += this.storeCookies[i];
    }
    return Total;


 },

  displayCookies: function(){
    var el = document.getElementById('display-pioneer');
    el.innerHTML = "<h2>"+ this.name +"</h2>"
    el.innerHTML += "<ul>"
    for (var i = 0; i < this.storeHours.length; i++) {
      el.innerHTML += "<li>" + this.storeHours[i] + ": " + this.storeCookies[i] + " cookies</li>"
      }
    el.innerHTML += "</ul>"
    el.innerHTML += "<p>Total: " + this.totalCookies() + " cookies</p>";
  },



}





var PortlandAirport = {
  minCustomerHr: 6,
  maxCustomerHr: 24,
  avgCustomerHr: 1.2,
  name: "Portland Airport",
  storeCookies: [],
  storeHours: ["10am", "11am", "12pm","1pm", "2pm", "3pm", "4pm", "5pm"],
  randomNumber: function() {
    return Math.floor(Math.random() * (this.maxCustomerHr - this.minCustomerHr + 1 )) + this.minCustomerHr;
  },

  randomCookies: function(){
    return Math.floor(this.randomNumber() * this.avgCustomerHr);
  },

  numberCookies: function () {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.storeCookies.push(this.randomCookies());
    }
  },
  displayCookies: function(){
    var el = document.getElementById('display-airport');
    el.innerHTML = "<h2>" + this.name + "</h2>";
    el.innerHTML += "<ul>";
    for (var i = 0; i < this.storeHours.length; i++) {
      el.innerHTML += "<li>" + this.storeHours[i] + ": " + this.storeCookies[i] + " cookies</li>"
      }
  el.innerHTML += "</ul>"
  el.innerHTML += "<p>Total: " + this.totalCookies() + " cookies</p>";
  },
  totalCookies: function (){
 var Total = 0;
 for (var i = 0; i < this.storeCookies.length; i++) {
   Total += this.storeCookies[i];
 }
   return Total;

}
}

var WashingtonSquare = {
  minCustomerHr: 11,
  maxCustomerHr: 38,
  avgCustomerHr: 1.9,
  name: "Washington Square",
  storeCookies: [],
  storeHours: ["10am", "11am", "12pm","1pm", "2pm", "3pm", "4pm", "5pm"],
  randomNumber: function() {
    return Math.floor(Math.random() * (this.maxCustomerHr - this.minCustomerHr + 1 )) + this.minCustomerHr;
  },
  randomCookies: function(){
    return Math.floor(this.randomNumber() * this.avgCustomerHr);
  },

  numberCookies: function () {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.storeCookies.push(this.randomCookies());
    }
  },
  displayCookies: function(){
    var el = document.getElementById('display-washington');
    el.innerHTML = "<h2>"+ this.name +"</h2>"
    el.innerHTML += "<ul>"
    for (var i = 0; i < this.storeHours.length; i++) {
      el.innerHTML += "<li>" + this.storeHours[i] + ": " + this.storeCookies[i] + " cookies</li>"
      }
    el.innerHTML += "</ul>"
      el.innerHTML += "<p>Total: " + this.totalCookies() + " cookies</p>";
  },

  totalCookies: function (){
 var Total = 0;
 for (var i = 0; i < this.storeCookies.length; i++) {
   Total += this.storeCookies[i];
 }
   return Total;

 }
}

var Sellwood = {
  minCustomerHr: 20,
  maxCustomerHr: 48,
  avgCustomerHr: 3.3,
  name:"Sellwood",
  storeCookies: [],
  storeHours: ["10am", "11am", "12pm","1pm", "2pm", "3pm", "4pm", "5pm"],
  randomNumber: function() {
    return Math.floor(Math.random() * (this.maxCustomerHr - this.minCustomerHr + 1 )) + this.minCustomerHr;
  },
  randomCookies: function(){
    return Math.floor(this.randomNumber() * this.avgCustomerHr);
  },

  numberCookies: function () {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.storeCookies.push(this.randomCookies());
    }
  },
  displayCookies: function(){
    var el = document.getElementById('display-sellwood');
    el.innerHTML = "<h2>"+ this.name +"</h2>"
    el.innerHTML += "<ul>"
    for (var i = 0; i < this.storeHours.length; i++) {
      el.innerHTML += "<li>" + this.storeHours[i] + ": " + this.storeCookies[i] + " cookies</li>"
      }
    el.innerHTML += "</ul>"
    el.innerHTML += "<p>Total: " + this.totalCookies() + " cookies</p>";
  },

  totalCookies: function (){
 var Total = 0;
 for (var i = 0; i < this.storeCookies.length; i++) {
   Total += this.storeCookies[i];
 }
   return Total;

}
}

var PearlDistrict = {
  minCustomerHr: 3,
  maxCustomerHr: 24,
  avgCustomerHr: 2.6,
  name: "Pearl District",
  storeCookies: [],
  storeHours: ["10am", "11am", "12pm","1pm", "2pm", "3pm", "4pm", "5pm"],
  randomNumber: function() {
    return Math.floor(Math.random() * (this.maxCustomerHr - this.minCustomerHr + 1 )) + this.minCustomerHr;
  },
  randomCookies: function(){
    return Math.floor(this.randomNumber() * this.avgCustomerHr);
  },

  numberCookies: function () {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.storeCookies.push(this.randomCookies());
    }
  },
  displayCookies: function(){
    var el = document.getElementById('display-pearl');
    el.innerHTML = "<h2>"+ this.name +"</h2>"
    el.innerHTML += "<ul>"
    for (var i = 0; i < this.storeHours.length; i++) {
      el.innerHTML += "<li>" + this.storeHours[i] + ": " + this.storeCookies[i] + " cookies</li>"
      }
    el.innerHTML += "</ul>"
    el.innerHTML += "<p>Total: " + this.totalCookies() + " cookies</p>";

  },

  totalCookies: function (){
 var Total = 0;
 for (var i = 0; i < this.storeCookies.length; i++) {
   Total += this.storeCookies[i];
 }
   return Total;

}
}

//function runCookieStand(){
PioneerSquare.numberCookies();
 PioneerSquare.displayCookies();
PortlandAirport.numberCookies();
 PortlandAirport.displayCookies();
 WashingtonSquare.numberCookies();
 WashingtonSquare.displayCookies();
Sellwood.numberCookies();
 Sellwood.displayCookies();
 PearlDistrict.numberCookies();
 PearlDistrict.displayCookies();
 //};
