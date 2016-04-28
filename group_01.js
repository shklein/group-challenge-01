var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];


var employees = [atticus, jem, boo, scout];

function findBonus(employee) {
var array = [];
var rating = employee[3];
var bonusPercent = 0;
var salary = parseInt(employee[2]);
var bonusAmount = 0;

    array[0] = employee[0];

    switch (rating) {
      case 3:
        bonusPercent = .04;
        break;
      case 4:
        bonusPercent = .06;
        break;
      case 5:
        bonusPercent = .1;
        break;
      default:
        bonusPercent = 0;
        break;
    }

    if(employee[1].length == 4){
      bonusPercent += .05;
    }

    if(employee[2] > 65000){
      bonusPercent -= .01;
    }

    if(bonusPercent > .13) {
      bonusPercent = .13;
    }

    array[1] = bonusPercent;

    bonusAmount = salary * bonusPercent;

    array[2] = salary + bonusAmount;

    array[3] = Math.round(bonusAmount);

    return array;
}


for (var i = 0; i<employees.length; i++){
  console.log(findBonus(employees[i]));
}
