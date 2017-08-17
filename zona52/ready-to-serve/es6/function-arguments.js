'use strict';

function great() {
  var greating = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'hello';
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Friend';

  console.log(greating + ' ' + name);
}
// greating, name - arguments
//'hello', 'Friend' - аргументы по умолчанию если мы не передали никакие аргументы
great('Hi', 'Bill');
great();

// если мы не знаем сколько аргументов передаэьтся
function sum() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  console.log(values instanceof Array);

  var sum = 0;
  values.forEach(function (value) {
    sum += value;
  });
  console.log(sum);
}

sum(5, 7, 2, 10);

//чтоб сложить все елементы масива можно использоваться reduce
function sum2() {
  for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    values[_key2] = arguments[_key2];
  }

  var reslt = values.reduce(function (preValue, currentValue) {
    return preValue + currentValue;
  });
  console.log(reslt);
}
sum2(5, 7, 2, 12);