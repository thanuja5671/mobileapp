"use strict";

window.addEventListener("DOMContentLoaded", function() {
  // Header text effect
  $("header").textillate({
    loop: false,
    minDisplayTime: 2000,
    initialDelay: 2000,
    autoStart: true,
    in: {
      effect: "fadeInLeftBig",
      delayScale: 1.5,
      delay: 50,
      sync: false,
      shuffle: true
    }
  });

  // Display "おみくじ" button (id="btn1") with a fading effect
  ScrollReveal().reveal("#btn1", { duration: 9000 });

  // Display a popup message after 5 seconds
  setTimeout(function() {
    let popMessage = "ホグワーツ魔法魔術学校の寮の組み分けテスト";
    window.alert(popMessage);
  }, 5000);
}, false);

let soundEndflag = "0"; // sound control

const btn1 = document.getElementById("btn1");
const omikujiText = document.getElementById("omikujiText");
const omikujiTextImage = document.getElementById("omikujiTextImage");

btn1.addEventListener("click", function() {
  // sound control
  if (soundEndflag === "1") {
    soundControl("end", "");
  }

  btn1.style.transition = "1s";

  let resultText = ["img/hufflepup.png","img/Ravenclaw.png","img/Gryffindoro.png","img/slytherin.png"];
  let resultMaxSpeed = [5, 5, 5, 5];
  let resultMaxSize = [100, 100, 100, 100];
  let resultImage = ["img/hufflepup_flag.png", "img/ravenclaw_flag.png", "img/gryffindor_flag.png","img/slytherin_flag.png"];
  let resultSound = ["sound/Hufflepuff.mp3","sound/Ravenclaw.mp3","sound/Gryffindor.mp3","sound/Slytherin.mp3"];
  
  let n = Math.floor(Math.random() * resultText.length);
  omikujiTextImage.src = resultText[n];
  omikujiTextImage.classList.add("omikujiPaper");
  omikujiTextImage.addEventListener("animationend", function() {
    omikujiTextImage.classList.remove("omikujiPaper");
  }, false);

  // sound control
  let w_sound = resultSound[n];
  soundControl("start", w_sound);
  soundEndflag = "1";

  // Stop snowfall
  $(document).snowfall("clear");

  // Enable snowfall effect using jQuery
  setTimeout(function() {
    $(document).ready(function() {
      $(document).snowfall({
        maxSpeed: resultMaxSpeed[n],
        minSpeed: 1,
        maxSize: resultMaxSize[n],
        minSize: 1,
        image: resultImage[n]
      });
    });
  }, 200);
}, false
);

//sound control
let w_sound
let music
function soundControl(status,w_sound){
  if(status === "start") {
    music = new Audio(w_sound);
    music.currentTime = 0;
    music.play();
  }else if(status === "end") {
    music.pause();
    music.currentTime = 0;
  }
}
