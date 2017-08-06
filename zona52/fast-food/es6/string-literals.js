/* template literals или template strings - для работы с строками
* легко создать много строчтность не надо использовать \n для переноса на другую строку*/
function great(name) {
  console.log('Hello ' + name);   // es5
  console.log(`Hello ${name}`);   // es6
  console.log(`Hello ${name}`.toUpperCase())
}
great('Bill');

function creatEmail(to, from, subject, message) {
  console.log(`
    to: ${to}
    from: ${from}
    subject: ${subject}
    message: ${message}
  `);
}
creatEmail('jon@mail.ru', 'bill@mail.ru', 'important', 'read this');

function add(x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
  console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
}
add(5,7);
add('5','7');

let name = 'Bill';
console.log(`Hello ${name}`);
console.log(upperName`Hello ${name}`); //присваиваем тег

function upperName(literals, ...values) {
  console.log(literals, values);
  return literals[0] + values[0].toUpperCase();
}