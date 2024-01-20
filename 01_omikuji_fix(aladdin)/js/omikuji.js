"use strict";

window.addEventListener("DOMContentLoaded", function() {
  // Code to be executed when the page content is loaded

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
  $(function() {
    ScrollReveal().reveal("#btn1", { duration: 9000 });
  });

  
  setTimeout(function() {
    // Display a popup message after 5 seconds
    let popMessage = "ランプ を みがいてみよー";
    window.alert(popMessage);
  }, 5000);
}, false);



// Event listener for "おみくじ" button (btn1)
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function() {
  /*let n = Math.floor(Math.random() * 3);

  switch (n) {
    case 0:
      btn1.textContent = "Very Happy!!";
      btn1.style.color = "#FF0000";
      btn1.style.fontSize = "40px";
      break;
    case 1:
      btn1.textContent = "Happy!";
      btn1.style.color = "#FF0001";
      btn1.style.fontSize = "30px";
      break;
    case 2:
      btn1.textContent = "UnHappy...";
      btn1.style.color = "#261e1c";
      btn1.style.fontSize = "20px";
      break;
  }*/

  btn1.style.transition = "1s";

  let resultText = ["お金","内定","車","ハンバーグ","AIR FORCE 1"];
  let resultColor = ["#ff0000","#c71585","#ff1493","#ff69b4","#ff8c00"];
  let resultFontSize = ["55px", "50px", "45px", "35px"];
  let resultMaxSpeed = [8, 3, 8, 4, 8];
  let resultMaxSize = [100, 100, 80, 50, 90];
  let resultImage = ["img/1man.png", "img/naitei.png", "img/Cars.png","img/hamburger.png","img/airforce1.png"];
  let randomIndex = Math.floor(Math.random() * resultText.length);
  btn1.textContent = resultText[randomIndex];
  btn1.style.color = resultColor[randomIndex];
  btn1.style.fontSize = resultFontSize[randomIndex];

  // Stop snowfall
  $(document).snowfall("clear");

  // Enable snowfall effect using jQuery
  $(document).ready(function() {
    $(document).snowfall({
      maxSpeed: resultMaxSpeed[randomIndex],
      minSpeed: 1,
      maxSize: resultMaxSize[randomIndex],
      minSize: 1,
      image: resultImage[randomIndex]
    });
  });
}, false);
