'use strict';
// filter array and creat new array
const animals = [
  {name: 'Fluki', species: 'dog'},
  {name: 'Fluki', species: 'cat'},
  {name: 'Fluki', species: 'rabbit'},
  {name: 'Fluki', species: 'dog'},
  {name: 'Fluki', species: 'fish'}
];
// better way

const findDogs = unit => unit.species === 'dog';
const dogs = animals.filter(findDogs);
//const dogs = animals.filter(unit => unit.species === 'dog');
console.log(dogs);

//with using loop
const dogsLoops = [];
for (let unit in animals) {
  if (animals[unit].species === 'dog')
    dogsLoops.push(animals[unit]);
}

console.log(dogsLoops);



