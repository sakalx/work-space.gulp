//promises

function applyForVisa(documents) {
  console.log('Обработка заявление....');
  let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      Math.random() > .5?
          resolve({}):
          reject('отказано по причене №234');
    },1000);
  });
return promise;
}

function getVisa(visa) {
  console.info('Виза получена');
  //переменую visa мы вернем для дальнейшей обработке в
  // bookHotel
  return new Promise(function(resolve, reject) {
    resolve(visa);
  });
}

function bookHotel(visa) {
  console.log(visa);
console.log('бронируем отель');
  // если нам надо передать ифоамацыю с bookHotel in buyTicket
  // то будем что то возращать к примеру пустой обэект

  /* можно не использовать конструктор new Promise
  * а вызвать метод .resolve у Promise и моментально
  * выполнить обещпние
  *  return Promise.resolve(visa);
  *  или моментально отколонить обещание использоя
  *  метод .reject у оюэкта Promise
  *  return Promise.reject('NO !!!')*/
  return new Promise(function(resolve, reject) {
    //resolve({})
    // or можем отклонить
    reject('нет мест')
  })
  // а buyTicket будем приниммать етот параметр
}
function buyTicket(booking) {
  console.log('бронь бла бла', booking);
console.log('Покупаем билет');

}

applyForVisa({})
//вызываем у обищения then которые принимает два параметры
//первый если вызиваемая функцыя applyVisa вернет true
//второе если не выполниться (ети параметры разделены запятой)
.then(getVisa
    /*  function(visa) {
     console.info('Виза получена');
     },
     function(reason) {
     console.error(reason)
     }*/
)
// планируем следущее дествие и отпраляем функцыю елси обешание будет выполнено
//наслучай ошибки сделаем одну функцыю использая метод .catch
    .then(bookHotel)
    .then(buyTicket)
    .catch(error => console.error(error))
//после метода catch можем продолжатьпоанировать действия;
// и ето будет выполнено в любом случае
.then(() => console.log('we still here'));