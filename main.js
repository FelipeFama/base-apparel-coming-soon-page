const emailInput = document.querySelector(".email");
const errorMessage = document.querySelector(".error-message");
const errorIcon = document.querySelector(".icon-error");

const submitBtn = document.querySelector(".submit");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (emailInput.value.includes("./style.scss")) {
    errorMessage.style.display = "";
    errorIcon.style.display = "";
    setTimeout(() => {
      errorMessage.style.display = "none";
      errorIcon.style.display = "none";
    }, 2000);
  } else {
    errorMessage.style.display = "flex";
    errorIcon.style.display = "block";
    setTimeout(() => {
      errorMessage.style.display = "none";
      errorIcon.style.display = "none";
    }, 2000);
  }

});