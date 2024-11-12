let signUpName = document.getElementById("regName");
let signUpEmail = document.getElementById("regEmail");
let signUpPassword = document.getElementById("regPassword");
let alertName = document.getElementById("nameAlert");
let alertEmail = document.getElementById("emailAlert");
let alertPassword = document.getElementById("passAlert");
let formError = document.getElementById("formError");

let users = [];

if (localStorage.getItem("user") != null) {
  users = JSON.parse(localStorage.getItem("user"));
} else {
  users = [];
}

console.log(users);

function addUser() {
  const isEmailExists = users.some((user) => user.email === signUpEmail.value);

  if (isEmailExists) {
    alertEmail.classList.remove("d-none");
    alertEmail.innerHTML = "Email already exists!";
    signUpEmail.classList.add("is-invalid");
    formError.classList.add("d-none");
  } else if (validName() && validEmail() && validPassword()) {
    const user = {
      name: signUpName.value,
      email: signUpEmail.value,
      password: signUpPassword.value,
    };

    users.push(user);
    location.href = "login.html";
    localStorage.setItem("user", JSON.stringify(users));
  } else {
    formError.classList.remove("d-none");
  }
}

signUpName.addEventListener("change", validName);

function validName() {
  const namePattern = /^[A-Z][a-zA-Z]{2,12}$/;

  if (signUpName.value === "") {
    signUpName.classList.add("is-invalid");
    signUpName.classList.remove("is-valid");
    alertName.classList.remove("d-none");
    alertName.innerHTML = "Name is Required!";
    return false;
  } else if (namePattern.test(signUpName.value) === true) {
    signUpName.classList.add("is-valid");
    signUpName.classList.remove("is-invalid");
    alertName.classList.add("d-none");
    formError.classList.add("d-none");

    return true;
  } else {
    signUpName.classList.add("is-invalid");
    signUpName.classList.remove("is-valid");
    alertName.classList.remove("d-none");
    return false;
  }
}

signUpEmail.addEventListener("change", validEmail);

function validEmail() {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (signUpEmail.value === "") {
    signUpName.classList.add("is-invalid");
    signUpName.classList.remove("is-valid");
    alertEmail.classList.remove("d-none");
    alertEmail.innerHTML = "Email is Required!";
    return false;
  } else if (emailPattern.test(signUpEmail.value) === true) {
    signUpEmail.classList.add("is-valid");
    signUpEmail.classList.remove("is-invalid");
    alertEmail.classList.add("d-none");
    formError.classList.add("d-none");

    return true;
  } else {
    signUpEmail.classList.add("is-invalid");
    signUpEmail.classList.remove("is-valid");
    alertEmail.classList.remove("d-none");
    return false;
  }
}

signUpPassword.addEventListener("change", validPassword);

function validPassword() {
  const passwordPattern = /^[A-Z][0-9]+$/;

  if (signUpPassword.value === "") {
    signUpPassword.classList.add("is-invalid");
    signUpPassword.classList.remove("is-valid");
    alertPassword.classList.remove("d-none");
    alertPassword.innerHTML = "Password is Required!";
    return false;
  } else if (passwordPattern.test(signUpPassword.value) === true) {
    signUpPassword.classList.add("is-valid");
    signUpPassword.classList.remove("is-invalid");
    alertPassword.classList.add("d-none");
    formError.classList.add("d-none");

    return true;
  } else {
    signUpPassword.classList.add("is-invalid");
    signUpPassword.classList.remove("is-valid");
    alertPassword.classList.remove("d-none");
    return false;
  }
}
