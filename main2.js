var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		document.getElementById('game-board');
		var cardElement = document.createElement('div');
		this.setAttribute('data-card', cards[i]);
		this.className = 'card';
		this.addEventListener('click', isTwoCards);
	}
	return cardElement;
}

function isMatch() {
	if (cardsInPlay[1] === cardsInPlay[2]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again");
	}
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}


// if (cardTwo !== cardFour) {
// 	alert("Sorry, try again");
// } else if (cardTwo === cardFour) {
// 	alert("You found a match!");
// };

// var createCards = function() {
// 	var gameBoard = document.getElementById('game-board');
// 	var divs = 
// 	for (var i = 0; i < cards; i++) {
// 		document.createElement('div');
// 		divs.className = 'card';
// 		gameBoard.appendChild(divs);
// 	}
// }

// createCards();