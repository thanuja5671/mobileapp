"use strict";

// Code to be executed when the page content is loaded

  // Header text effect
window.addEventListener("DOMContentLoaded", function() {
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
  $(function() {
    ScrollReveal().reveal("#btn1", { duration: 9000 });
  });

  //Display a popup message after 5 seconds
  setTimeout(function() {
    let popMessage = "中に何があるのか！！　開けてみよ";
    window.alert(popMessage);
  }, 5000);
}, false);

let soundEndflag = "0"; // sound control
const btn1 = document.getElementById("btn1");
const omikujiText = document.getElementById("omikujiText");
btn1.addEventListener("click", function() {
  // sound control
  if (soundEndflag === "1") {
    soundControl("end", "");
  }

  btn1.style.transition = "1s";

  let resultText = ["ダイヤモンド", "金", "ラム 酒", "地図", "コンパス", "銃"];
  let resultColor = ["#61e2ff", "#e9ad03", "#796989", "#FF5733", "#ff8c00", "#800020"];
  let resultFontSize = ["40px", "110px", "70px", "80px", "60px", "120px"];
  let resultMaxSpeed = [20, 25, 12, 8, 16, 5];
  let resultMaxSize = [60, 70, 130, 160, 90, 170];
  let resultImage = ["img/diamond.png", "img/coin.png", "img/rum.png","img/map.png","img/compass.png","img/gun.png"];
  let resultSound = ["sound/omikuji_sound1.mp3","sound/coin dropping.mp3","sound/why always gone rum.mp3","sound/Mystery Sound Effect.mp3","sound/my_compass.mp3","sound/gun sound.mp3"];
  let n = Math.floor(Math.random() * resultText.length);
  omikujiText.textContent = resultText[n];
  omikujiText.style.color = resultColor[n];
  omikujiText.style.fontSize = resultFontSize[n];
  //sound control
  w_sound = resultSound[n];
  soundControl("start",w_sound);
  soundEndflag = "1";

  // Stop snowfall
  $(document).snowfall("clear");

  // Enable snowfall effect using jQuery
  $(document).ready(function() {
    $(document).snowfall({
      maxSpeed: resultMaxSpeed[n],
      minSpeed: 1,
      maxSize: resultMaxSize[n],
      minSize: 1,
      image: resultImage[n]
    });
  });
}, false);

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