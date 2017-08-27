//Constructor Function
var CookieStore = function (name, minCustomerHr, maxCustomerHr, avgCustomerHr) {
  this.name = name;
  this.minCustomerHr = minCustomerHr;
  this.maxCustomerHr = maxCustomerHr;
  this.avgCustomerHr = avgCustomerHr;
  this.storeHours = ["10am", "11am", "12pm","1pm", "2pm", "3pm", "4pm", "5pm"];
  this.storeCookies = [];
  this.total = 0;


  this.randomNumber =  function() {
    return Math.floor(Math.random() * (this.maxCustomerHr - this.minCustomerHr + 1 )) + this.minCustomerHr;
  };
  this.randomCookies = function(){
    var cookieNumber =  Math.floor(this.randomNumber() * this.avgCustomerHr);
    this.storeCookies.push(cookieNumber);
    this.total += cookieNumber;
  };

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

  for (var index = 0; index < branches.length; index++) {
    var tr = document.createElement("tr");
    tableBody.appendChild(tr);
    var td = document.createElement("td");
    td.innerText = branches[index].name;
    tr.appendChild(td);

    console.log(branches[index]);

    for (var timeindex = 0; timeindex < branches[index].storeHours.length + 1 ; timeindex++) {
      branches[index].randomCookies();
      tableBody.appendChild(tr);
      var td = document.createElement("td");
      td.innerText = branches[index].storeCookies[timeindex];
          tr.appendChild(td);

       }
       var totals = document.createElement("td")
       td.innerText = branches[index].total
       tr.appendChild(td);

    //loop through the hours.

       //tableBody.appendChild(roster[index].getcookiesTableRows());
     }
   }

buildCookiesTable();
