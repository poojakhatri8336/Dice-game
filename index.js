let randomNumber1 = Math.floor(Math.random() * 6 ) +1;
var randomDiceImage1 = "images/dice"+randomNumber1+".png";

let randomNumber2 = Math.floor(Math.random() * 6 ) +1;
var randomDiceImage2 = "images/dice"+randomNumber2+".png";

document.querySelector(".dice .img1").setAttribute("src" , randomDiceImage1);
document.querySelector(".dice .img2").setAttribute("src" , randomDiceImage2);

// or we can do
// document.querySelectorAll("img")[0] or [1]

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins!!";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins!!";
}
else{
  document.querySelector("h1").innerHTML = "Draw!!";
}
