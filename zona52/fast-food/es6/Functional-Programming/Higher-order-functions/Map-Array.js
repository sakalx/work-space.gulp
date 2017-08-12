'use strict';
// loop array and creat new array
const animals = [
  {name: 'Fluki', species: 'dog'},
  {name: 'Fluki', species: 'cat'},
  {name: 'Fluki', species: 'rabbit'},
  {name: 'Fluki', species: 'dog'},
  {name: 'Fluki', species: 'fish'}
];
// better way
const amimalsNew2 = animals.map(unit =>
    unit.species + 'Better'
);

console.log(amimalsNew2);

//with using loop
const amimalsNew = [];
for (let unit in animals) {
  amimalsNew.push(animals[unit].species)
}

console.log(amimalsNew);