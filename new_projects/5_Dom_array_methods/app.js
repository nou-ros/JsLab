// 1.1
const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

// variable to store all the user information
let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

//fetch random user and add money
// fetching with async await
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  // console.log(data);
  const user = data.results[0];
  // console.log(user);

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };

  // console.log(newUser);
  //1.1
  addData(newUser);
}

//3.2 Double money
function doubleMoney() {
  data = data.map(user => {
    // spread operator to copy the same user
    return { ...user, money: user.money * 2 };
  });

  // console.log(data);

  updateDOM();
}

// 4.2 sort by richest
function sortByRichest() {
  // in order sort we must send compare functions -> check mozilla mdn
  data.sort(
    (a, b) =>
      // descending b-a and ascending will be a-b
      b.money - a.money
  );

  updateDOM();
}

// 5.2 filter only millionares
function showMillionares() {
  data = data.filter(user => user.money > 1000000);

  updateDOM();
}

// 6.2 calculate the total wealth
function calculateWealth() {
  // as we start from 0
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);

  // console.log(formatMoney(wealth));
  const wealthEl = document.createElement("div");
  wealthEl.innerHTML = `<h3>Total wealth: <strong>${formatMoney(
    wealth
  )}<\strong><\h3>`;

  main.appendChild(wealthEl);
}

//Add new obj to data arr
function addData(obj) {
  data.push(obj);

  //2 output users -> forEach()
  // 2.1
  updateDOM();
}

//Update DOM
// providing default value the data array
function updateDOM(providedData = data) {
  //clear main div
  // 2.2
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";

  providedData.forEach(item => {
    // creating a div
    const element = document.createElement("div");
    element.classList.add("person");
    // element.innerHTML = `<strong>${item.name}</strong> ${item.money}`;
    // updated after 2.3
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    // appending a new child in the parent main
    main.appendChild(element);
  });
}

//2.3
// format number as money
// https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

//2.4
// event listeners
addUserBtn.addEventListener("click", getRandomUser);

//3.1-> map
doubleBtn.addEventListener("click", doubleMoney);

// 4.1-> sort
sortBtn.addEventListener("click", sortByRichest);

// 5.1 -> filter
showMillionairesBtn.addEventListener("click", showMillionares);

// 6.1 -> reduce
calculateWealthBtn.addEventListener("click", calculateWealth);
