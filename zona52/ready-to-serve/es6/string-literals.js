'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', ''], ['Hello ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* template literals или template strings - для работы с строками
* легко создать много строчтность не надо использовать \n для переноса на другую строку*/
function great(name) {
  console.log('Hello ' + name); // es5
  console.log('Hello ' + name); // es6
  console.log(('Hello ' + name).toUpperCase());
}
great('Bill');

function creatEmail(to, from, subject, message) {
  console.log('\n    to: ' + to + '\n    from: ' + from + '\n    subject: ' + subject + '\n    message: ' + message + '\n  ');
}
creatEmail('jon@mail.ru', 'bill@mail.ru', 'important', 'read this');

function add(x, y) {
  console.log(x + ' + ' + y + ' = ' + (x + y));
  console.log(x + ' + ' + y + ' = ' + (parseInt(x) + parseInt(y)));
}
add(5, 7);
add('5', '7');

var name = 'Bill';
console.log('Hello ' + name);
console.log(upperName(_templateObject, name)); //присваиваем тег

function upperName(literals) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  console.log(literals, values);
  return literals[0] + values[0].toUpperCase();
}