;
(function() {
  'use strict';

  //what movie you looking
  const
      search = document.getElementById('search'),
      resultList = document.getElementById('foundList'),
      moviList = document.getElementById('movies');


//Delete pre-elements
  const removeEl = () => {
    while (moviList.firstChild) {
      moviList.removeChild(moviList.firstChild);
    }
    while (resultList.firstChild) {
      resultList.removeChild(resultList.firstChild);
    }
  };

  //Rendering
  // add HTML node with movie
  const renderHtml = movie => {
    const img = document.createElement('img');
    img.src = movie.Poster;
    moviList.appendChild(img);

    const li = document.createElement('li');
    li.innerHTML = `${movie.Title} <b>${movie.Year}</b>`;
    resultList.appendChild(li);
  };

  const searchMovie = movies => {
    movies.Search.forEach(movies => renderHtml(movies));
  };
  //End Render

  //AJAX
  //check status request
  const checkStatus = response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  };

//now make fetch
  const searching = (s) => {
    if (s.target.value.length > 3) {
      removeEl();
      let url = `https://www.omdbapi.com/?apikey=57d13b99&s=${search.value}`;
      fetch(url).
          then(checkStatus).
          then(isJson => isJson.json()).
          then(searchMovie).
          catch(err => console.error('x_x', err));
    }
  } ;

  //Listener
  search.addEventListener('keyup', searching);
})();





