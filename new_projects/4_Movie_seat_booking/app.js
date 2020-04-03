//1 selecting movie seats
//2 save data to local storage
//3 populate UI with saved data

// 1.1
const container = document.querySelector(".container");
// as there are multiple seats that's why querySelectorAll
//selecting all the unoccupied seats in the row.
const seats = document.querySelectorAll(".row .seat:not(.occupied)");

const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

// we will convert the movieSelect.value to integer, using either parseInt or only + sign
let ticketPrice = +movieSelect.value;

// console.log(typeof (ticketPrice));

//3.1
populateUI();

//1.3 update total and count
function updateSelectedCount() {
  // selecting all the selected seats
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  // console.log(selectedSeats);

  // 2.1
  //copy selected seats into an array
  //passing the selected seats(selected seats are node list) as spread operator
  const selectedSeatsIndex = [...selectedSeats];
  //Map through that array selectedSeatsIndex
  const seatsIndex = selectedSeatsIndex.map(seat =>
    //return the index of the selected seats
    // console.log([...seats].indexOf(seat));
    [...seats].indexOf(seat)
  );

  //2.2
  // saving seatsIndex array in localStorage,
  //to setitem in localstorage we must stringify them
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  // to know the length of nodeList (part of 1.3)
  const selectedSeatsCount = selectedSeats.length;
  // console.log(selectedSeatsCount);

  count.innerText = selectedSeatsCount;
  total.innerText = ticketPrice * selectedSeatsCount;
}

// 2.3 Save selected movie index and price in the localstorage
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("SelectedMovieIndex", movieIndex);
  localStorage.setItem("SelectedMoviePrice", moviePrice);
}

//3.2
// Get data from localstorage and poplate UI
function populateUI() {
  //pulling out the selected seats from local storage using getItem
  //To fetch Json data from localStorage as an array, we must use JSON.parse .
  const selectedSeats = localStorage.getItem("selectedSeats");
  //   console.log(selectedSeats);

  // Checking to see if there are any seats
  //null check to see something is in localStorage, also checking that the array is not 0
  if (selectedSeats != null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      //   as indexOf gives -1 if a value is not there
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const SelectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (SelectedMovieIndex != null) {
    movieSelect.selectedIndex = SelectedMovieIndex;
  }
}

//1.4 movie select event
// select list fires off change event
movieSelect.addEventListener("change", e => {
  //changing the price value
  ticketPrice = +e.target.value;
  // console.log(ticketPrice);

  // 2.3 selecting movie index & it's value for sending it in setMovieData function
  // console.log(e.target.selectedIndex, e.target.value);
  setMovieData(e.target.selectedIndex, e.target.value);

  //part of 1.4
  updateSelectedCount();
});

//1.2 seat click event
container.addEventListener("click", e => {
  // console.log(e.target);

  // to select only seats from the container class by adding && clause we are ensuring that occupied seats are not selected
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    // console.log(e.target);
    // as we can both select and unselect a class that's why toggle
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});

// 3.3 Initial count and total set
updateSelectedCount();
