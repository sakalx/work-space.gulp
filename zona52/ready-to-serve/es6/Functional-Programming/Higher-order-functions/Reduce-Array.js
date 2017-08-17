'use strict';
// loop array and make amazing stuff with first and next element array

var orders = [{ number: 250 }, { number: 350 }, { number: 450 }, { number: 550 }, { number: 650 }];
//now better way
var totalNumberPro = orders.reduce(function (have, next) {
  return have + next.number;
}, 0 // first have = 0
);

console.log(totalNumberPro);

// basicly with fo loop
var totalNumber = 0;
for (var i = 0; i < orders.length; i++) {
  totalNumber += orders[i].number;
}
console.log(totalNumber);