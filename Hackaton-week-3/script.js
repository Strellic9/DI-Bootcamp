var dealerSum = 0;
var playerSum = 0;

var dealerAceCount = 0;
var playerAceCount = 0;

var hidden;
var deck=[];

var canHit = true;

// window.onload = function () {
// }

document.getElementById('newgame').addEventListener('click', newGame);
document.getElementById('next').addEventListener('click', nextButton);


function newGame () {
    // document. location. reload();
    document.getElementById('player-cards').innerHTML='';
    document.getElementById('dealer-cards').innerHTML='';
    document.getElementById('dealer-sum').innerText = '';
    document.getElementById('player-sum').innerText = '';
    document.getElementById('results').innerText = '';
    buildDeck();
    shuffleDeck();
    startGame();
}

function nextButton () {

}

function buildDeck() {
    let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let types = ['C', 'D', 'H', 'S']

    for (let i=0; i < types.length; i++) {
        for (let j=0; j < values.length; j++) {
        deck.push(values[j]+'-'+types[i]);
        }
    }

}

function shuffleDeck() {
    for (let i=0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length) 
        let temp = deck[i];
        deck[i]=deck[j];
        deck[j]=temp;
    }
    console.log(deck);
}

function startGame() {
    
    let hiddenImg = document.createElement('img');
    hiddenImg.src = "./cards/BACK.png";
    document.getElementById('dealer-cards').append(hiddenImg)
    hidden = deck.pop();
    dealerSum += getValue(hidden);
    dealerAceCount += checkAce(hidden);

    while(dealerSum < 17) getCardDealer();
    console.log(hidden);
    console.log(dealerSum);

    for (let i=0; i<2; i++) getCardPlayer();
    document.getElementById('hit').addEventListener('click', hit);
    document.getElementById('stay').addEventListener('click', stay);

}


function getCardDealer () {
    let cardImg = document.createElement('img');
    let card = deck.pop();
    cardImg.src = './cards/'+card+'.png';
    dealerSum += getValue(card);
    dealerAceCount += checkAce(card);
    document.getElementById('dealer-cards').append(cardImg)
}

function getCardPlayer () {
    let cardImg = document.createElement('img');
    let card = deck.pop();
    cardImg.src = './cards/'+card+'.png';
    playerSum += getValue(card);
    playerAceCount += checkAce(card);
    document.getElementById('player-cards').append(cardImg)
}


function hit () {
    if (!canHit) {
        return;
    }
    getCardPlayer();

    if (reduceAce(playerSum, playerAceCount) >21) {
        canHit=false; 
    }
    console.log(playerSum)
    console.log(canHit);
}

function stay () {
    dealerSum = reduceAce (dealerSum, dealerAceCount);
    playerSum = reduceAce (playerSum, playerAceCount);

    canHit = false;
    document.getElementById('hidden').src = './cards/'+hidden+'.png';

    let message = '';
    if (playerSum > 21) {
        message = "you lose"
    } else if (dealerSum > 21) {
        message= 'you win'; 
    } else if (playerSum == dealerSum) {
        message = 'tie'
    } else if (playerSum < dealerSum) {
        message = 'you lose'
    } else if (playerSum > dealerSum) {
        message = 'you win'
    }

    document.getElementById('dealer-sum').innerText = dealerSum;
    document.getElementById('player-sum').innerText = playerSum;
    document.getElementById('results').innerText = message;
}

function reduceAce (playerSum, playerAceCount) {
    while (playerSum > 21 && playerAceCount > 0) {
        playerSum -= 10;
        playerAceCount -= 1;
    }
    return playerSum;
}



function getValue(card) {
    let data = card.split('-');
    let value = data[0];

    if (isNaN(value)) {
        if (value=='A') {
            return 11;
        }
        return 10;
    }
    return parseInt(value);
}

function checkAce (card) {
    if (card[0] == 'A') {
        return 1;
    }
    return 0;
}