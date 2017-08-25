//Constructor Function
var CookieStore = function (name, minCustomerHr, maxCustomerHr, avgCustomerHr) {
  this.name = name;
  this.minCustomerHr = minCustomerHr;
  this.maxCustomerHr = maxCustomerHr;
  this.avgCustomerHr = avgCustomerHr;
  this.storeHours = ["10am", "11am", "12pm","1pm", "2pm", "3pm", "4pm", "5pm"];
  this.storeCookies = [];


  this.randomNumber =  function() {
    return Math.floor(Math.random() * (this.maxCustomerHr - this.minCustomerHr + 1 )) + this.minCustomerHr;
  };
  this.randomCookies = function(){
    return Math.floor(this.randomNumber() * this.avgCustomerHr);
  },
  this.numberCookies = function () {
    for (var i = 0; i < this.storeHours.length; i++) {
      this.storeCookies.push(this.randomCookies());
    }
  }
  this.totalCookies = function (){
    var Total = 0;
    for (var i = 0; i < this.storeCookies.length; i++) {
      Total += this.storeCookies[i];
       }
       return Total;

     }
}


var pioneer = new CookieStore("Pioneer Square", 17, 88, 5.2);
var airport = new CookieStore("Portland airport", 6, 24, 1.2);
var washington = new CookieStore("Washington Square", 11, 38, 1.9);
var sellwood = new CookieStore("Sellwood", 20, 48, 3.3);
var pearl = new CookieStore("Pearl District", 3, 24, 2.6);
var branches = [pioneer, airport, washington, sellwood, pearl];


console.log(branches);
console.log(pioneer);





function buildCookiesTable() {
  var tableBody = document.getElementById("table-body");
  var row = document.createElement("tr");
  var header = document.createElement("th");
  header.innerText = "branch";
  row.appendChild(header);
  tableBody.appendChild(row);

  for (var index = 0; index < branches.length; index++) {
    var tr = document.createElement("tr");
    tableBody.appendChild(tr);
    var td = document.createElement("td");
    td.innerText = branches[index].name;
    tr.appendChild(td);

    console.log(branches[index]);

      for (var times = 0; times < branches[index].storeHours.length; times++) {
        // var hours = document.createElement()

      }

    //loop through the hours.

      // tableBody.appendChild(roster[index].getcookiesTableRows());
     }
}
buildCookiesTable();
  // this.cookiesTableRows = function() {
  //   var row = document.createElement("tr");
  //   var nameCell = document.createElement("td");
  //   nameCell.innerText = this.name;
  //   row.appendChild(nameCell);
  //   var phoneCell = document.createElement("td");
  //   phoneCell.innerText = this.phone;
  //   row.appendChild(phoneCell);
  //   var emailCell = document.createElement("td");
  //   emailCell.innerText = this.email;
  //   row.appendChild(emailCell);
  //   return row;
  // }
