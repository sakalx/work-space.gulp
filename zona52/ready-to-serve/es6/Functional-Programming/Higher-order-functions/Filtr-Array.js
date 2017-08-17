'use strict';
// filter array and creat new array

var animals = [{ name: 'Fluki', species: 'dog' }, { name: 'Fluki', species: 'cat' }, { name: 'Fluki', species: 'rabbit' }, { name: 'Fluki', species: 'dog' }, { name: 'Fluki', species: 'fish' }];

// better way
var findDogs = function findDogs(unit) {
  return unit.species === 'dog';
};
var dogs = animals.filter(findDogs);
//const dogs = animals.filter(unit => unit.species === 'dog');
console.log(dogs.le);

//with using loop
var dogsLoops = [];
for (var unit in animals) {
  if (animals[unit].species === 'dog') dogsLoops.push(animals[unit]);
}

console.log(dogsLoops);