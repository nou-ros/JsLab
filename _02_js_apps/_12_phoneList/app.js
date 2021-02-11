//phone constractor
function Phone(name, number, email) {
  this.name = name;
  this.number = number;
  this.email = email;
}

//ui constractor
function UI() { }

//adding numbers

UI.prototype.addNumberToList = function (phone) {
  const list = document.getElementById("phone-list");

  // create tr element
  const row = document.createElement("tr");
  //insert cols
  row.innerHTML = `<td>${phone.name}</td>
  <td>${phone.number}</td>
  <td>${phone.email}</td>
  <td><a href="#" class="delete">X</a></td>`;

  list.appendChild(row);
};
//show alert
UI.prototype.showAlert = function (message, className) {
  // create div element
  const div = document.createElement("div");
  // add classes
  div.className = `alert ${className}`;
  //add TextNode
  div.appendChild(document.createTextNode(message));
  // get parent
  const container = document.querySelector(".container");
  // get form
  const form = document.querySelector("#phone-form");
  //insert alert
  container.insertBefore(div, form);

  //timing of the alert
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 2500);
};

UI.prototype.deleteNumbers = function (target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
};

UI.prototype.clearFields = function () {
  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
  document.getElementById("email").value = "";
};

//Event Listener for adding information
document.getElementById("phone-form").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value,
    number = document.getElementById("number").value,
    email = document.getElementById("email").value;
  // console.log(name, number, email);

  //object creation of book
  const phone = new Phone(name, number, email);
  // console.log(phone);

  //object creation of UI
  const ui = new UI();

  //validation
  if (name === "" || number === "" || email === "") {
    //error alert
    ui.showAlert("Please fill in all the fields", "error");
  } else {
    //add number to list
    ui.addNumberToList(phone);

    //successful insertion alert
    ui.showAlert("Number added to the list", "success");

    //clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

//Event listener for deleting information
document.getElementById("phone-list").addEventListener("click", function (e) {
  //creating object of UI
  const ui = new UI();

  // delete numbers
  ui.deleteNumbers(e.target);

  // number removed
  ui.showAlert("Number removed", "teal");
  e.preventDefault();
});
