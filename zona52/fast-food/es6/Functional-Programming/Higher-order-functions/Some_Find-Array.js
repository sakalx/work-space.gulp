const
    coments = [
      { text: 'Love this', id: 23453 },
      { text: 'Super good', id: 55555 },
      { text: 'The Best', id: 02342 },
      { text: 'Nice, nice!', id: 12344 },
      { text: 'Better place', id: 34556 },
    ],
arr = [23, 12, 33],
    people = [
      { name: 'Erick', year: 1981 },
      { name: 'Lord', year: 2012 },
      { name: 'Tokin', year: 2003 },
    ];

//.prototype.some it will wind like filtr it wiil find all matches
const isAdult = people.some(x => {
  const currentYear = (new Date()).getFullYear();
  (currentYear - x.year >= 19)?
      console.log(x.name):
      console.warn('no one');
});

//.prototype.find it will return first founded item
let counter = 0;
const findIndexArr = arr.find(x => {
  counter++;
  (x === 23)?
      console.log(arr, x, counter):
      console.warn('no one');
});

const findComent = coments.find(x => {
  (x.id === 55555)?
      console.log(x.text):
      console.warn('no one');
});