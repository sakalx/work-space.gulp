function add(a,b) {
  return (a+b);
}
//arrow function
let add2 = (a, b) => a + b;
console.log(add(2, 3), add2(2, 3));
//---------------------------------
function sqr(x) {
  return x * x;
}
//arrow function
let sgr2 = x => x * x;
console.log(sqr(3),  sgr2(4));
//---------------------------------
let answer = function() {
  return 44;
};
let answer2 = () => 44;
//arrow function
console.log(answer(),  answer2());
//---------------------------------
let log = function() {
  console.log('xxx');
};
//arrow function
let log2 = () => console.log('xxx2');
log(); log2();
//---------------------------------
let multiply = function(x, y) {
  let result = x * y;
  return result;
};
//arrow function
let multiply2 = (x, y) => {
  let result = x *y;
  return result;
};
console.log(multiply(3, 4), multiply2(4, 5));
//---------------------------------
let getPerson = function() {
  return {
    name: 'John'
  };
};
//arrow function
let getPerson2 = () => ({name: 'John2'});
console.log(getPerson(), getPerson2());
//---------------------------------
(function() {
  console.log('IIFE');
})();
//arrow function
(() => console.log('IIFE2'))();
//---------------------------------
let numbers = [1, 2, 3, 4, 5];
let sum = 0;

numbers.forEach(function(num) {
  sum += num;
});
//arrow function
numbers.forEach(num => sum += num);
console.log(sum);
//---------------------------------
//map перебирает все елемнты масива и чет с ними делает
let square = numbers.map(n => n * n);
console.log(square);
//---------------------------------
let player = {
  name: 'Bob',
  greet: function() {
    let self = this;
    setTimeout(function() {
      console.log(`hi my name is ${self.name}`)
    }, 1000);
  }
};
player.greet();
//arrow function
let player2 = {
  name: 'Jeck',

  greet:  function(){
    setTimeout(() => console.log(`hi my name is ${this.name}`),1000)
  }
};
player2.greet();
//---------------------------------







































