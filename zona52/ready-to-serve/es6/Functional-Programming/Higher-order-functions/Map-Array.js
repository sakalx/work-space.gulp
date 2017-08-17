'use strict';
// loop array and creat new array

var animals = [{ name: 'Fluki', species: 'dog' }, { name: 'Fluki', species: 'cat' }, { name: 'Fluki', species: 'rabbit' }, { name: 'Fluki', species: 'dog' }, { name: 'Fluki', species: 'fish' }];
// better way
var amimalsNew2 = animals.map(function (unit) {
  return unit.species + 'Better';
});

console.log(amimalsNew2);

//with using loop
var amimalsNew = [];
for (var unit in animals) {
  amimalsNew.push(animals[unit].species);
}

console.log(amimalsNew);