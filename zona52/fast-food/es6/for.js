let brousers = ['Safari', 'Opera', 'Chrome', 'Firefox'];

// выводим наш масив
for (let index in brousers) {
  console.log(brousers[index])
}
//выводим наш масив с es6 использця for of
for (let brouser of brousers) {
  console.log(brouser);
}
