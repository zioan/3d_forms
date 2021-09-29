const signUpBtn = document.querySelector(".signup-btn");
const signInBtn = document.querySelector(".signin-btn");

const formsWrapper = document.querySelector(".forms-wrapper");

signUpBtn.addEventListener("click", (e) => {
  formsWrapper.classList.add("change");
  e.preventDefault();
});
signInBtn.addEventListener("click", (e) => {
  formsWrapper.classList.remove("change");
  e.preventDefault();
});
