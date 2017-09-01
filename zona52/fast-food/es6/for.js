let brousers = ['Safari', 'Opera', 'Chrome', 'Firefox'];

// выводим наш масив  ето для обектов
for (let index in brousers) {
  console.log(brousers[index]);
}
//выводим наш масив с es6 использця for of ето для масивов
for (let brouser of brousers) {
  console.log(brouser);
}
