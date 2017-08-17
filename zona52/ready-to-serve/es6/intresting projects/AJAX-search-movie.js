'use strict';

;
(function () {
  'use strict';

  //what movie you looking

  var search = document.getElementById('search'),
      resultList = document.getElementById('foundList'),
      moviList = document.getElementById('movies');

  //Delete pre-elements
  var removeEl = function removeEl() {
    while (moviList.firstChild) {
      moviList.removeChild(moviList.firstChild);
    }
    while (resultList.firstChild) {
      resultList.removeChild(resultList.firstChild);
    }
  };

  //Rendering
  // add HTML node with movie
  var renderHtml = function renderHtml(movie) {
    var img = document.createElement('img');
    img.src = movie.Poster;
    moviList.appendChild(img);

    var li = document.createElement('li');
    li.innerHTML = movie.Title + ' <b>' + movie.Year + '</b>';
    resultList.appendChild(li);
  };

  var searchMovie = function searchMovie(movies) {
    movies.Search.forEach(function (movies) {
      return renderHtml(movies);
    });
  };
  //End Render

  //AJAX
  //check status request
  var checkStatus = function checkStatus(response) {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  };

  //now make fetch
  var searching = function searching(s) {
    if (s.target.value.length > 3) {
      removeEl();
      var url = 'https://www.omdbapi.com/?apikey=57d13b99&s=' + search.value;
      fetch(url).then(checkStatus).then(function (isJson) {
        return isJson.json();
      }).then(searchMovie).catch(function (err) {
        return console.error('x_x', err);
      });
    }
  };

  //Listener
  search.addEventListener('keyup', searching);
})();