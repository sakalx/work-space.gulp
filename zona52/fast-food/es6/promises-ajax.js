
;(function() {
  'use strict';
const moviList = document.getElementById('movies');

//Fn to add img on page
function addMovieToList(movie) {
  const img = document.createElement('img');
  img.src = movie.Poster;
  moviList.appendChild(img);
}

//Fn for AJAX reguest for get posters
function getData(url) {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
      if (xhr.status === 200) {
        let json = JSON.parse(xhr.response);
        console.log(json);
        resolve(json.Search);
      } else {
        reject(xhr.statusText);
      }
    };

    xhr.onerror = function() {
      reject(error);
    };

    xhr.send();
  });
}

// variable for URL Searchinng
let search = 'hitman';

//start parsing
// thx Mirozdrav for apikey!!!
getData(`http://www.omdbapi.com/?apikey=57d13b99&s=${search}`)
.then(movies =>
    movies.forEach(movie =>
        addMovieToList(movie)),
)
.catch(error => console.error(error));
})();




/* <= Remove it

//some testing with Promise.all & Promise.race
let batman = getData('http://www.omdbapi.com/?apikey=57d13b99&s=batman');
let superman = getData('http://www.omdbapi.com/?apikey=57d13b99&s=superman');

//проверим кто быстрее отработает
Promise.race([superman, batman])
.then(movies =>
    movies.forEach(movie =>
        addMovieToList(movie)),
)
.catch(error => console.error(error));

*/


<= Remove it

//some testing with Promise.all & Promise.race
function go(num) {
  return new Promise(function(resolve, reject) {
  const delay = Math.ceil(Math.random() * 3000);
    console.log(`обещанме №${num}, speed ${delay}`);
  setTimeout(() => {
    //если условия выполняеться дольше 2сек оклоняем обещание
    // и отпраляем его номер
    // иначе одобряем обещяние и отпраляем его номер
    delay > 2000?
        reject(`обещанме №${num} тормозит )`):
      resolve(`обещанме №${num} скорость ${delay}`);
  }, delay)
  });
}

const p1 = go(1),
    p2 = go(2),
    p3 = go(3);

//МЕТОД ALL для Promise !!!
//ели нам надо чтоб все три обещания выполнились
// используем метод all у Promise
//который дожидаеться выполнения всех обещаний
// и передадиммасив наших обещаний
Promise.all([p2, p1, p3])
    .then(value => console.log(value))
    //добавим метод отлова когда обещание отклогнено
    // и принимаем ошибку error (наш номер)
    .catch(error => console.error(error));

//МЕТОД RACE (гонка) для Promise !!!
//если нам неважно чтоб выполнялись все promisre
// а нужен результат самого первого самого быстрого )
//используем метод гонки race кто первый тоот и победил
Promise.race([p2, p1, p3])
.then(value => console.log(value))
//добавим метод отлова когда обещание отклогнено
// и принимаем ошибку error (наш номер)
    .catch(error => console.error(error));

*/





















