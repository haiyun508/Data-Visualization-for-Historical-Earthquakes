// var dateFrom = "2/5/2013";
//         var dateTo = "02/09/2013";
//         var dateCheck = "02/07/2013";

//         var d1 = dateFrom.split("/");
//         var d2 = dateTo.split("/");
//         var c = dateCheck.split("/");

//         var from = new Date(d1[2], parseInt(d1[1])-1, d1[0]);  // -1 because months are from 0 to 11
//         var to   = new Date(d2[2], parseInt(d2[1])-1, d2[0]);
//         var check = new Date(c[2], parseInt(c[1])-1, c[0]);


var dateElement1 = "1/2/1965";
var dateElement2 = "1/5/1965"
var earthquakeDate = "1/4/1965";
var d1 = dateElement1.split("/");
var d2 = dateElement2.split("/");
var c = earthquakeDate.split("/");
console.log(d1)

var from = new Date(parseInt(d1[2]), parseInt(d1[0]) - 1, parseInt(d1[1]));  // -1 because months are from 0 to 11
var to = new Date(parseInt(d2[2]), parseInt(d2[0]) - 1, parseInt(d2[1]));
var check = new Date(parseInt(c[2]), parseInt(c[0]) - 1, parseInt(c[1]));
console.log(to)

console.log(d1)
console.log(from)
console.log(check > from && check < to)
