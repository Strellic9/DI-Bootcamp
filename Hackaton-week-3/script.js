var ngCount = 0;

var dealerSum = 0;
var playerSum = 0;
var playerMoney = 1000;

var dealerAceCount = 0;
var playerAceCount = 0;

var hidden;
var deck=[];

var canHit = true;
var canStay = true;
var canNext = false;

var playerBalance = document.getElementById('player-balance');
let betInput = document.getElementById('bet');


document.getElementById('newgame').addEventListener('click', newGame);
document.getElementById('next').addEventListener('click', nextButton);


function newGame () {
    if (ngCount==0) {
        newGameInner ();
        ngCount++
        return;
    }
    let ng = confirm('Are you sure? Your bank will be 1000 again.')
    if (ng) {
        newGameInner ()
        ngCount++
    } else return;
}

function newGameInner () {
    nullValues();
    nullFields();
    buildDeck();
    shuffleDeck();
    startGame();
    playerMoney=1000;
    playerBalance.innerText = playerMoney;
}

function nextButton () {
    if (!canNext) {
        return;
    } else if (playerMoney==0) {
        alert('Your bank is zero. Out of the game!')
    } else if (playerMoney>5000) {
        alert('Casino throws you out for making too much! Consider that a win.')
    } else {
        nullValues();
        nullFields();
        buildDeck();
        shuffleDeck();
        startGame();
    }   
}

function nullValues () {
    dealerSum = 0;
    playerSum = 0;
    dealerAceCount = 0;
    playerAceCount = 0;
    hidden='';
    deck=[];
    canHit = true;
    canStay = true;
    canNext = false;
}

function nullFields () {
    document.getElementById('player-cards').innerHTML='';
    document.getElementById('dealer-cards').innerHTML='';
    document.getElementById('dealer-sum').innerHTML = '';
    document.getElementById('player-sum').innerHTML = '';
    document.getElementById('results').innerHTML = '';
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
    playerBalance.innerText = playerMoney;

    let hiddenImg = document.createElement('img');
    hiddenImg.src = "./cards/BACK.png";
    hiddenImg.id = 'hidden';
    document.getElementById('dealer-cards').append(hiddenImg)
    hidden = deck.pop();
    dealerSum += getValue(hidden);
    dealerAceCount += checkAce(hidden);
    // FIRST CARD FOR DEALER, HIDDEN

    getCardDealer(); // SECOND CARD FOR DEALER

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
    canNext = true;
    if (!canStay) {
        return;
    } 
    while (dealerSum < 17) {
       getCardDealer();
    }

    let bet = 0;
    let betV = parseInt(betInput.value);
    console.log('betV is',betV);

    if (betV>playerMoney) {
        alert('Bet size is more than your balance. Max possible bet taken')
        bet=playerMoney;
    } else bet=betV;
    console.log('bet is', bet);

    dealerSum = reduceAce (dealerSum, dealerAceCount);
    playerSum = reduceAce (playerSum, playerAceCount);

    canHit = false;
    document.getElementById('hidden').src = './cards/'+hidden+'.png';

    let message = '';
    
    if (playerSum > 21) {
        message = "Dealer wins!";
        playerMoney -= bet;
    } else if (dealerSum > 21) {
        message= 'You win!'; 
        playerMoney += bet;
    } else if (playerSum == dealerSum) {
        message = 'Tie'
    } else if (playerSum < dealerSum) {
        message = 'Dealer wins!'
        playerMoney -= bet;
    } else if (playerSum > dealerSum) {
        message = 'You win!'
        playerMoney += bet;
    }

    document.getElementById('dealer-sum').innerText = dealerSum;
    document.getElementById('player-sum').innerText = playerSum;
    document.getElementById('results').innerText = message;
    playerBalance.innerText = playerMoney;

    canStay = false;
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

