window.onload = (e) => {
  let container = document.querySelector(".container");
  let email = document.querySelector("#email");
  let message = document.querySelector(".message");
  let button = document.querySelector("#submit");
  let failText = document.querySelector("#validationFail");
  let emailReplace = document.querySelector("#emailPlaceholder");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // To auto focus at initial state
  email.focus();

  email.addEventListener("change", function (e) {
    failText.classList.add("hide");
    email.style.border = "1px solid black";
    email.style.backgroundColor = 'transparent';
    email.style.color = '#000';

  });

  button.addEventListener("click", function (e) {
    e.preventDefault();
    if (!emailRegex.test(email.value)) {
      email.style.border = "1px solid red";
      failText.classList.toggle("hide");
      email.style.backgroundColor = 'rgba(245, 117, 117, 0.358)';
      email.style.color = 'rgba(255, 6, 6, 0.911)';
      return;
    }
    emailReplace.textContent = email.value;
    container.style.visibility = "hidden";
    message.classList.toggle("hide");
  });
  document
    .querySelector("#dimiss-button")
    .addEventListener("click", function (e) {
      message.classList.toggle("hide");
      container.style.visibility = "visible";
      email.value = "";
      email.focus();
    });
};
