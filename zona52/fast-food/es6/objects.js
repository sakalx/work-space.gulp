let firstName = 'Jeck',
    lastName = 'Daniels',
    email = 'jdaniels@gmail.com';

//создаем обект person в которов его свойства равны переменым
let person = {
/* firstName: firstName,
  lastName: lastName,
  email: email
  или можно так : */
  firstName,
  lastName,
  email,
  //создаем метод для обекта person
  /*sayHello: function() {
    console.log(`hi my name is ${this.firstName} ${this.lastName}`)
  }*/
  //создаем метод для обекта person es6
  sayHello() {
    console.log(`hi my name is ${this.firstName} ${this.lastName}`)
},
  //get && set es6
  get fullName() {
    return this.firstName + ' ' + this.lastName
  },
  set fullName(value) {
    this.firstName = value
  }
};

//Get && Set
Object.defineProperty(person, 'fullName', {
  get: function() {
    return this.firstName + ' ' + this.lastName
  },
  set: function(value) {
      this.firstName = value
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
let property = 'firstName';
person[property];

//можно обявить ето прямо в обэкте
person = {
  [property]: 'Bill'
};

//пример
function creatCar(property, value) {
  //es5
/*  var car = {};
      car[property] = value;
       return car;*/
  //es6
  return {
    [property]: value,
    //также мы можем теперь добавить суфикс к названию свойства
  ['_' + property]: value,
    // также можем использовать другие методы к примеру toUpperCase
    [property.toUpperCase()]: value,
    //или создать новый метод
    ['get' + property]() {
        return this[property];
  }

  };
}

console.log(creatCar('idCar', 2));