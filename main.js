const downBtn = document.getElementById("down-button");
const open = document.querySelector(".navbar");

let openned = false;

downBtn.addEventListener("click", () => {
  if (openned === false) {
    open.classList.toggle("active");
    downBtn.style.rotate = "180deg";
    openned = true;
  } else if (openned === true) {
    open.classList.toggle("active");
    downBtn.style.rotate = "0deg";
    openned = false;
  }
});
