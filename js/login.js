let signInEmail = document.getElementById("loginEmail");
let signInPassword = document.getElementById("loginPass");
let loginAlert = document.getElementById("signInAlert");
let signInBtn = document.getElementById("loginBtn");

let users = JSON.parse(localStorage.getItem("user"));

signInBtn.addEventListener("click", function () {
  if (signInEmail.value === "" || signInPassword.value === "") {
    loginAlert.classList.remove("d-none");
    loginAlert.innerHTML =
      "Please complete all required inputs before proceeding.";
  } else {
    checkUser();
  }
});

function checkUser() {
  let userFound = false;
  for (let i = 0; i < users.length; i++) {
    if (
      signInEmail.value === users[i].email &&
      signInPassword.value === users[i].password
    ) {
      userFound = true;
      let name = users[i].name;
      localStorage.setItem("userName", name);
      location.href = "index.html";
      break;
    }
  }

  if (!userFound) {
    loginAlert.classList.remove("d-none");
    loginAlert.innerHTML = "Invalid email or password. Please try again.";
  }
}
