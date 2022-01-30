//init github
const github = new GitHub();
//init UI
const ui = new UI();

//Search input
const searchUser = document.getElementById("searchUser");

//Search input event listener
searchUser.addEventListener("keyup", e => {
  //Get intput text
  const userText = e.target.value;
  if (userText !== "") {
    //Make HTTP call
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        //show alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        //show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //Clear the profile

    ui.clearProfile();
  }
});
