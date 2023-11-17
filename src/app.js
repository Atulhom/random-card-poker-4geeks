/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pokerNumbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

let logos = ["♦", "♥", "♠", "♣"];

document.getElementById("generarBtn").addEventListener("click", function() {
  let indiceNumeroAleatorio = Math.floor(Math.random() * pokerNumbers.length);
  let numeroAleatorio = pokerNumbers[indiceNumeroAleatorio];

  let indiceLogosAleatorio = Math.floor(Math.random() * logos.length);
  let logoAleatorio = logos[indiceLogosAleatorio];

  document.getElementById("resultado-numero").innerHTML = numeroAleatorio;
  document.getElementById("resultado1-logo").innerHTML = logoAleatorio;
  document.getElementById("resultado2-logo").innerHTML = logoAleatorio;
  document.getElementById("resultado2-logo").style.transform = "rotate(180deg)";

  if (logoAleatorio === logos[0] || logoAleatorio == logos[1]) {
    document.getElementById("resultado1-logo").style.color = "#d00";
    document.getElementById("resultado2-logo").style.color = "#d00";
  } else {
    document.getElementById("resultado1-logo").style.color = "#17202A";
    document.getElementById("resultado2-logo").style.color = "#17202A";
  }
});
