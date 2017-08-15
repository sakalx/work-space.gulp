'use strict';
// loop array and make amazing stuff with first and next element array
const orders = [
  { number: 250 },
  { number: 350 },
  { number: 450 },
  { number: 550 },
  { number: 650 },
];
//now better way
const totalNumberPro = orders.reduce(
    (have, next) => have + next.number, 0 // first have = 0
);

console.log(totalNumberPro);

// basicly with fo loop
let totalNumber = 0;
for (let i = 0; i < orders.length; i++) {
  totalNumber += orders[i].number
}
console.log(totalNumber);
