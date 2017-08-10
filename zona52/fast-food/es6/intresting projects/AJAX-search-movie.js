;(function() {
  'use strict';

  //what movie you looking
  const search = 'hitman',
      //APi
      url = `http://www.omdbapi.com/?apikey=57d13b99&s=${search}`,
      //Node Movies list
      moviList = document.getElementById('movies');


  //Render
  // add HTML node with movie
  const renderHtml = movie => {
    const img = document.createElement('img');
    img.src = movie.Poster;
    moviList.appendChild(img);
  };

  //add array movies for Rendering Html
  const addMovies = movies => {
    movies.Search.forEach(movie => renderHtml(movie));
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
  fetch(url).
      then(checkStatus).
      then(isJson => isJson.json()).
      then(addMovies).
      catch(err => console.error('x_x', err));
  //end AJAX
})();










