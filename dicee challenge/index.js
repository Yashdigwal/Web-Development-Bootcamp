
var randomNumber1 = (Math.random() * 6) + 1; //randomNumber1=(randomNumber1*6)+1
randomNumber1=Math.floor(randomNumber1);
var randomDice = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImage = "images/" + randomDice; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage);

//Second image
var randomNumber2 = (Math.random() * 6) + 1;
randomNumber2=Math.floor(randomNumber2);
var randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);


//winner
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
