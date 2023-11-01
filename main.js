const togBtn = document.getElementById("toggle-button");
const navbar = document.querySelector(".navbar");

let openned = false;

togBtn.addEventListener("click", () => {
  if (openned == false) {
    navbar.classList.toggle("active");
    togBtn.style.rotate = "180deg";
    openned = true;
  } else if (openned === true) {
    navbar.classList.toggle("active");
    togBtn.style.rotate = "0deg";
    openned = false;
  }
});

// const header = document.querySelector("header");
// const sectionOne = document.querySelector("main");
