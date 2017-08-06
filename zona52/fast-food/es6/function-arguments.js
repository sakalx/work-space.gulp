function great(greating = 'hello', name = 'Friend') {
  console.log(`${greating} ${name}`)
}
// greating, name - arguments
//'hello', 'Friend' - аргументы по умолчанию если мы не передали никакие аргументы
great ('Hi', 'Bill');
great ();

// если мы не знаем сколько аргументов передаэьтся
function sum(...values) {
  console.log(values instanceof  Array);

  let sum = 0;
  values.forEach(function(value) {
    sum += value;
  });
  console.log(sum)
}

sum(5, 7, 2, 10);


//чтоб сложить все елементы масива можно использоваться reduce
function sum2(...values) {
 let reslt = values.reduce(function(preValue, currentValue) {
   return preValue + currentValue;
 });
console.log(reslt)
}
sum2(5, 7, 2, 12);