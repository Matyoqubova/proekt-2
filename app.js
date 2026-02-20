// alert("Salom JS")
const date = new Date();
const doc = document.getElementById("soat");
const docum = document.getElementById("sana");

let sana = date.getDate();
let haftaIndex = date.getDay();
let haftaKuni = [
  "yakshanba",
  "Dushanba",
  "Seshanba",
  "Chorshanba",
  "Payshanba",
  "Juma",
  "Shanba",
];
let oy = [
  "Yanvar",
  "Fev",
  "Mart",
  "Apr",
  "May",
  "Iyn",
  "Iyl",
  "Avg",
  "Sen",
  "Noy",
  "Dek",
];
let yil = date.getFullYear();

let soat = date.getHours();
let millisekund = date.getMilliseconds();
let minut = date.getMinutes();
let sekund = date.getSeconds();

let text = `${sana}. ${oy[0]}. ${yil}.${haftaKuni[haftaIndex]}`;
let texttt = `${soat}:${minut}:${sekund}:${millisekund}`;
console.log(text);
console.log(texttt);

let inner = (doc.innerHTML = texttt);
let inner2 = (docum.innerHTML = text);


let bodyElement =document.body;
bodyElement.style.background = "linear-gradient(155deg, gold,blue,green)";


function onBottonClik() {
  console.log("on Clik");
  
}
function onbuttondown() {
  console.log("on down");
  
}
function onButtonup() {
  console.log("on up");
  
}
function onButtonOut() {
  
}
function onButtonOver() {
  console.log("on over");
  
}

function red() {
  let doc = document.getElementById("box")
  doc.style.backgroundColor = "red"
}
function yellow() {
  let doc = document.getElementById("box")
  doc.style.backgroundColor = "yellow"
}
function black() {
  let doc = document.getElementById("box")
  doc.style.backgroundColor = "black"
}
function blue() {
  let doc = document.getElementById("box")
  doc.style.backgroundColor = "blue"
}