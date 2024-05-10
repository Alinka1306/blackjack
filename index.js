let cards = []; // ordered list of items
let sum = 0;

let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
    name: "Alina",
    chips: 145,
    sayHello: function() {
        console.log("Hello!");
    }
}


let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame();
}
function renderGame() {
    cardsEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i ++) {
        cardsEl.textContent += cards[i] + " ";
    }
    
    sumEl.textContent = "Sum: " + sum;
    if(sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if(sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if(isAlive && !hasBlackJack) {
        let card = getRandomCard();
        cards.push(card); // add to the end of array
        sum += card;
        renderGame();
    }
}

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard === 1) {
        randomCard = 11;
    } else if(randomCard >= 11 && randomCard <= 13) {
        randomCard = 10;
    }
    return randomCard;
}

// function rollDice() {
//     return Math.floor(Math.random() * 6) + 1;
// }
