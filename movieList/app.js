// define UI variables
const form = document.querySelector("#movie-form");
const movieList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-movies");
const filter = document.querySelector("#filter");
const movieInput = document.querySelector("#movie");

//load all event listeners
loadEventListeners();

//load all event listeners
function loadEventListeners() {
  //DOM Load event
  document.addEventListener("DOMContentLoaded", getMovies);
  //add movie event
  form.addEventListener("submit", addMovie);
  //remove movie event
  movieList.addEventListener("click", removeMovie);
  // clear movie event
  clearBtn.addEventListener("click", clearMovie);
  //filter movies event
  filter.addEventListener("keyup", filterMovies);
}

//get movies from local storage
function getMovies() {
  let movies;
  if (localStorage.getItem("movies") === null) {
    movies = [];
  } else {
    movies = JSON.parse(localStorage.getItem("movies"));
  }
  movies.forEach(function(movie) {
    // create li element
    const li = document.createElement("li");
    //add class for li element
    li.className = "collection-item";
    //create text node and append to the li
    li.appendChild(document.createTextNode(movie));
    //create new link element
    const link = document.createElement("a");
    //add class to the link element
    link.className = "delete-item secondary-content";
    //add icon html
    link.innerHTML = '<i class = "fa fa-remove"></i>';
    //appen the link to li
    li.appendChild(link);

    //append the li to the ul
    movieList.appendChild(li);
  });
}

//add movie
function addMovie(e) {
  if (movieInput.value === "") {
    alert("Add a movie");
  } else {
    // create li element
    const li = document.createElement("li");
    //add class for li element
    li.className = "collection-item";
    //create text node and append to the li
    li.appendChild(document.createTextNode(movieInput.value));
    //create new link element
    const link = document.createElement("a");
    //add class to the link element
    link.className = "delete-item secondary-content";
    //add icon html
    link.innerHTML = '<i class = "fa fa-remove"></i>';
    //append the link to li
    li.appendChild(link);

    //append the li to the ul
    movieList.appendChild(li);

    //store in local storage
    storeMovieInLocalStorage(movieInput.value);

    //clear input
    movieInput.value = "";
  }

  e.preventDefault();
}

function storeMovieInLocalStorage(movie) {
  let movies;
  if (localStorage.getItem("movies") === null) {
    movies = [];
  } else {
    movies = JSON.parse(localStorage.getItem("movies"));
  }
  movies.push(movie);
  localStorage.setItem("movies", JSON.stringify(movies));
}

//Remove movie
function removeMovie(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();

      //remove form Local storage
      removeMovieFromLocalStorage(e.target.parentElement.parentElement);
    }
    alert("one movie removed");
  }
}

function removeMovieFromLocalStorage(movieItem) {
  // console.log(movieItem);
  let movies;
  if (localStorage.getItem("movies") === null) {
    movies = [];
  } else {
    movies = JSON.parse(localStorage.getItem("movies"));
  }
  movies.forEach(function(movie, index) {
    if (movieItem.textContent === movie) {
      movies.splice(index, 1);
    }
  });

  localStorage.setItem("movies", JSON.stringify(movies));
}

//clear movies
function clearMovie() {
  // movieList.innerHTML = "";

  //faster
  while (movieList.firstChild) {
    movieList.removeChild(movieList.firstChild);
  }
  // https://jsperf.com/innerhtml-vs-removechild/47

  //clear movies from local storage
  clearMoviesFromLocalStorage();
}
// Clear Movies from LS
function clearMoviesFromLocalStorage() {
  localStorage.clear();
}

//filter movies
function filterMovies(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function(movie) {
    const item = movie.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      movie.style.display = "block";
    } else {
      movie.style.display = "none";
    }
  });

  // console.log(text);
}
