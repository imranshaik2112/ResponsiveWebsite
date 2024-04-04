let dropdown = document.querySelector(".dropdown");
let menu = document.querySelector("#menu");
let home = document.querySelector("#home");
let open = document.querySelector(".open");
let close = document.querySelector(".close");

menu.addEventListener("click", () => {
  dropdown.classList.toggle("dropdown1");
  dropdown.style.backdropFilter = `blur(10px)`;
});

open.addEventListener("click", () => {
  open.style.display = "none";
  close.style.display = "block";
  dropdown.style.display = "block";
});
close.addEventListener("click", () => {
  open.style.display = "block";
  close.style.display = "none";
  dropdown.style.display = "none";
});
function validateForm() {
  var fnameInput = document.getElementById("fname");
  var lnameInput = document.getElementById("lname");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");

  var fnameError = document.getElementById("fnameError");
  var lnameError = document.getElementById("lnameError");
  var emailError = document.getElementById("emailError");
  var messageError = document.getElementById("messageError");

  fnameError.textContent = "";
  lnameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  var isValid = true;

  if (fnameInput.value.trim() === "") {
    fnameError.textContent = "First name is required";
    isValid = false;
  }

  if (lnameInput.value.trim() === "") {
    lnameError.textContent = "Last name is required";
    isValid = false;
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    emailError.textContent = "Invalid email address";
    isValid = false;
  }

  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required";
    isValid = false;
  }

  return isValid;
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

let dropdownLinks = document.querySelectorAll(".dropdownLink");

dropdownLinks.forEach((link) => {
  link.addEventListener("click", () => {
    dropdown.style.display = "none";
    close.style.display = "none";
    open.style.display = "block";
  });
});
