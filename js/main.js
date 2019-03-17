console.log('Up and running!');

// cards array
var cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: 'images/queen-of-hearts.png'
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: 'images/queen-of-diamonds.png'	
},
{
rank: 'king',
suit: 'hearts',
cardImage: 'images/king-of-hearts.png'
}, 
{
rank: 'king',
suit: 'diamonds',
cardImage: 'images/king-of-diamonds.png'	
} 

];

//the clicked cards will come in this empty array
var cardsInPlay = [];


var checkForMatch = function(){
	var score = 0;
	if (cardsInPlay[0]===cardsInPlay[1]){
		alert('Yo! You found a match');
		score = score+5;
	} else{
		alert('sorry! try again');
		score = score-2;
	}
	//console.log(score);
	//document.getElementById("scoreValue").value = score;
};



var flipCard = function(){
	//created cardId variable data-id attribute
	var cardId = this.getAttribute('data-id');
	//push rank property in cardsInPlay array
	cardsInPlay.push(cards[cardId].rank);
	//flip the clicked card
	this.setAttribute('src', cards[cardId].cardImage);
	console.log(cardId+ " " + cards[cardId].cardImage);
	if(cardsInPlay.length === 2){
	checkForMatch();
	};
};



var createBoard = function(){
	
for(var i=0; i<cards.length; i++){
	//create new element 'img' and add attributes 'src' and 'data-id' with values
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
	//event listener 'click' is added
	cardElement.addEventListener('click', flipCard);
	//cardElement 'img' is added in the Id 'game-board'
	document.getElementById('game-board').appendChild(cardElement);
	

}

};

//shuffle function is added to randomize cards
function shuffle(arra1) {
    var ctr = arra1.length;
    var temp;
    var index;

    // While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
cards = shuffle(cards);
createBoard();



//reload the page when click on the reset button

function reloadFunction(){
	//location.reload();
	document.getElementById("game-board").reset();
};

