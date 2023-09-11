alert("Welcome to Excelexchange");

const About = document.getElementById("about");

About.addEventListener("click", () => {
  alert("You will read about the Developer here");
});

var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("doge");

var settings = {
  "async": true,
  "scrossDomain": true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  "method": "GET",
  "header": {}
}

$.ajax(settings).done(function (response){
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  doge.innerHTML = response.doge.usd;
});


const hamburgerIcon = document.getElementById("hamburger-icon");
const openMenu = document.getElementById("open-menu");


hamburgerIcon.addEventListener("click", () => {
  openMenu.classList.toggle("show-menu");
});

const closeicon = document.getElementById("close-icon");

closeicon.addEventListener("click", () => {
  openMenu.classList.remove("show-menu");
});