const countDownFrom = num => {
if (num === -1)  return;
  console.log(num); // 10, 9, 8, .... 0
  countDownFrom(num-1);
  console.log(num); // 0, 1, 2, .... 10
};
countDownFrom(10);



const categoies = [
{ id: 'aniamals', parent: null },
{ id: 'mammals', parent: 'aniamals' },
{ id: 'cats', parent: 'mammals' },
{ id: 'dogs', parent: 'mammals' },
{ id: 'labrador', parent: 'dogs' },
{ id: 'buldog', parent: 'dogs' },
{ id: 'persian', parent: 'cats' },
{ id: 'siamese', parent: 'cats' }
];

const MakeTree = (categoies, parent) => {
let node = {};
const filtr = categoies.filter(unit => unit.parent === parent);
filtr.forEach(unit => node[unit.id] = MakeTree(categoies, unit.id) );
  return node;
};

console.log(
    JSON.stringify(
        MakeTree(categoies, null), null, 2
    )

);


/*
{
  amimals: {
    mammals: {
      dogs: {
        labrador: null
        buldog: null
      }
      cats: {
        persian: null
        siamese: null
      }
    }
  }
}
*/