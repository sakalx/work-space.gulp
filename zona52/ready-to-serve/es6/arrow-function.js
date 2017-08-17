'use strict';

function add(a, b) {
  return a + b;
}
//arrow function
var add2 = function add2(a, b) {
  return a + b;
};
console.log(add(2, 3), add2(2, 3));
//---------------------------------
function sqr(x) {
  return x * x;
}
//arrow function
var sgr2 = function sgr2(x) {
  return x * x;
};
console.log(sqr(3), sgr2(4));
//---------------------------------
var answer = function answer() {
  return 44;
};
var answer2 = function answer2() {
  return 44;
};
//arrow function
console.log(answer(), answer2());
//---------------------------------
var log = function log() {
  console.log('xxx');
};
//arrow function
var log2 = function log2() {
  return console.log('xxx2');
};
log();log2();
//---------------------------------
var multiply = function multiply(x, y) {
  var result = x * y;
  return result;
};
//arrow function
var multiply2 = function multiply2(x, y) {
  var result = x * y;
  return result;
};
console.log(multiply(3, 4), multiply2(4, 5));
//---------------------------------
var getPerson = function getPerson() {
  return {
    name: 'John'
  };
};
//arrow function
var getPerson2 = function getPerson2() {
  return { name: 'John2' };
};
console.log(getPerson(), getPerson2());
//---------------------------------
(function () {
  console.log('IIFE');
})();
//arrow function
(function () {
  return console.log('IIFE2');
})();
//---------------------------------
var numbers = [1, 2, 3, 4, 5];
var sum = 0;

numbers.forEach(function (num) {
  sum += num;
});
//arrow function
numbers.forEach(function (num) {
  return sum += num;
});
console.log(sum);
//---------------------------------
//map перебирает все елемнты масива и чет с ними делает
var square = numbers.map(function (n) {
  return n * n;
});
console.log(square);
//---------------------------------
var player = {
  name: 'Bob',
  greet: function greet() {
    var self = this;
    setTimeout(function () {
      console.log('hi my name is ' + self.name);
    }, 1000);
  }
};
player.greet();
//arrow function
var player2 = {
  name: 'Jeck',

  greet: function greet() {
    var _this = this;

    setTimeout(function () {
      return console.log('hi my name is ' + _this.name);
    }, 1000);
  }
};
player2.greet();
//---------------------------------