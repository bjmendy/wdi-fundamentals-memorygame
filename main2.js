var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
var cards = 4

// if (cardTwo !== cardFour) {
// 	alert("Sorry, try again");
// } else if (cardTwo === cardFour) {
// 	alert("You found a match!");
// };

var createCards = function() {
	var gameBoard = document.getElementById('game-board');
	var divs = 
	for (var i = 0; i < cards; i++) {
		document.createElement('div');
		divs.className = 'card';
		gameBoard.appendChild(divs);
	}
}

createCards();