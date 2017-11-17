//console.log("Up and Running!!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

var flipCard = function(cardId) {
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2) {
		checkForMatch();
		cardsInPlay = []
	}
}

flipCard(0);
flipCard(2);


//console.log(cards);

// console.log("User flipped " + cards[0]);
// console.log("User flipped " + cards[1]);


//console.log("User flipped " + cardsInPlay[0]);



//console.log("User flipped " + cardsInPlay[1]);

/*if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}*/