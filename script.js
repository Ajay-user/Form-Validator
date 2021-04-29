const form = document.getElementById("form");
const password1El = document.getElementById("password");
const password2El = document.getElementById("confirm-password");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let valid = false;
let passwordMatch = false;

const validateForm = () => {
  valid = form.checkValidity();
  if (!valid) {
    message.innerText = "Please enter all fields";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }

  if (password1El.value === password2El.value) {
    password1El.style.borderColor = "green";
    password2El.style.borderColor = "green";
    passwordMatch = true;
  } else {
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    message.innerText = "Please enter a matching password";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    passwordMatch = false;
    return;
  }

  if (valid && passwordMatch) {
    message.style.color = "green";
    message.innerText = "Successfully Registered";
    messageContainer.style.borderColor = "green";
  }
};

const storeFormData = () => {
  const data = {
    name: form.fullname.value,
    phone: form.phone.value,
    email: form.email.value,
    webURL: form.websiteURL.value,
    password: form.password.value,
  };
  console.log(data);
};

const processFormData = (e) => {
  e.preventDefault();
  // validate form
  validateForm();
  // store form data
  if (passwordMatch && valid) {
    storeFormData();
  }
};

// event listeners
form.addEventListener("submit", processFormData);
