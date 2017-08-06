'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var firstName = 'Jeck',
    lastName = 'Daniels',
    email = 'jdaniels@gmail.com';

//создаем обект person в которов его свойства равны переменым
var person = {
  /* firstName: firstName,
    lastName: lastName,
    email: email
    или можно так : */
  firstName: firstName,
  lastName: lastName,
  email: email,
  //создаем метод для обекта person
  /*sayHello: function() {
    console.log(`hi my name is ${this.firstName} ${this.lastName}`)
  }*/
  //создаем метод для обекта person es6
  sayHello: function sayHello() {
    console.log('hi my name is ' + this.firstName + ' ' + this.lastName);
  },

  //get && set es6
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  set fullName(value) {
    this.firstName = value;
  }
};

//Get && Set
Object.defineProperty(person, 'fullName', {
  get: function get() {
    return this.firstName + ' ' + this.lastName;
  },
  set: function set(value) {
    this.firstName = value;
  }
});

console.log(person);
//вызиваем метод у обэкта person
person.sayHello();

//чтоб добраться до свойства или метода обэкта
//person.firstName;
//or
//persone['firstName'];
//or
var property = 'firstName';
person[property];

//можно обявить ето прямо в обэкте
person = _defineProperty({}, property, 'Bill');

//пример
function creatCar(property, value) {
  var _ref;

  //es5
  /*  var car = {};
        car[property] = value;
         return car;*/
  //es6
  return _ref = {}, _defineProperty(_ref, property, value), _defineProperty(_ref, '_' + property, value), _defineProperty(_ref, property.toUpperCase(), value), _defineProperty(_ref, 'get' + property, function () {
    return this[property];
  }), _ref;
}

console.log(creatCar('idCar', 2));