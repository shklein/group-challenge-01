var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];


var employees = [atticus, jem, boo, scout];

var percentage = 0;
var basePlus = 0;
var total = 0;

function getSTI (employee) {
  //step 1: find STI percentage
  switch(employee[3]) {
    case 3:
      percentage = 0.04;
      break;
    case 4:
      percentage = 0.06;
      break;
    case 5:
      percentage = 0.10;
      break;
    default:
      percentage = 0;
  }
  //step 2: additional bonus parameters
  if (employee[1].length >= 4) {
    percentage += 0.05;
  }
  if (employee[2] > 65000) {
    percentage -= 0.01;
  }
  if (percentage > 0.13) {
    percentage = 0.12;
  }
