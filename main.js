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

const playBtn = document.getElementById("play");
const audio = document.getElementById("audio");

// const duration = document.getElementById("audio").duration;

console.log(audio.duration);

let count = 0;

playBtn.addEventListener("click", (event) => {
  if (count == 0) {
    count = 1;
    audio.play();
    playBtn.innerHTML = '<i class="fa-solid fa-circle-stop"></i>';
  } else if (count == 1) {
    count = 0;
    audio.pause();
    audio.currentTime = 0;
    playBtn.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
  }
  // else if (count == 1 && audio != event.target) {
  //   count = 0;
  //   audio.pause();
  //   audio.currentTime = 0;
  //   playBtn.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
  // }
});
