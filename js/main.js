console.log("Up and Running!!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

console.log(cards);

// console.log("User flipped " + cards[0]);
// console.log("User flipped " + cards[1]);

var cardOne = cards[0];
cardsInPlay.push(cardOne);

console.log("User flipped " + cardsInPlay[0]);

var cardTwo = cards[1];
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardsInPlay[1]);

if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}