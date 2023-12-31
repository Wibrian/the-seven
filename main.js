const togBtn = document.getElementById("toggle-button");
const navbar = document.querySelector(".navbar");
const navbarResponsive = document.querySelector(".navbar-responsive");

let openned = false;

togBtn.addEventListener("click", () => {
  if (openned == false) {
    navbar.classList.toggle("active");
    togBtn.style.rotate = "180deg";
    openned = true;
  } else {
    navbar.classList.toggle("active");
    togBtn.style.rotate = "0deg";
    openned = false;
  }
});

const outClick = document.querySelector("main");

outClick.addEventListener("click", () => {
  if (openned == true) {
    navbar.classList.toggle("active");
    togBtn.style.rotate = "0deg";
    openned = false;
  }
});

const section = document.querySelector("main");
const sectionFooter = document.querySelector("footer");
const btnHeight = navbarResponsive.querySelector("button");
let child = navbar.querySelectorAll("a");

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navbar.classList.add("add-shadow");
      navbarResponsive.classList.add("add-shadow-responsive");
      btnHeight.classList.add("scrolled");
      navbar.style.top = "50px";
      Array.from(child).forEach((item) => item.classList.add("scrolled"));
    } else {
      navbar.classList.remove("add-shadow");
      navbarResponsive.classList.remove("add-shadow-responsive");
      btnHeight.classList.remove("scrolled");
      navbar.style.top = "70px";
      Array.from(child).forEach((item) => item.classList.remove("scrolled"));
    }
  });
});

observer.observe(section);
