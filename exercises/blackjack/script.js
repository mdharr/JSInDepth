const names = ["Two", "Three", "Four", "Five", "Six", 
               "Seven", "Eight", "Nine", "Ten", "Jack",
               "Queen", "King", "Ace"]
const suits = ["Hearts", "Clubs", "Diamonds", "Spades"]

const cards = [...generateCards(names, suits)]
const deck = [...cards]
const playerHand = []
const dealerHand = []

const tempDeck = shuffle(deck)
playerHand.push(drawCard(tempDeck))
dealerHand.push(drawCard(tempDeck))
playerHand.push(drawCard(tempDeck))
dealerHand.push(drawCard(tempDeck))

console.log("------- GAME START -------")
console.log("Starting player hand: ", playerHand.map(card => `${card.name} of ${card.suit}`))
console.log("Starting player score: ", checkScore(playerHand))
console.log("Starting dealer hand: ", dealerHand.map(card => `${card.name} of ${card.suit}`))
console.log("Starting dealer score: ", checkScore(dealerHand))

while (true) {
    const playerScore = checkScore(playerHand);
    const dealerScore = checkScore(dealerHand);

    if (playerScore === 21) {
        break;
    } else if (dealerScore === 21) {
        break;
    } else if (playerScore > 21) {
        console.log("Player Busts!");
        break;
    } else if (dealerScore > 21) {
        console.log("Dealer Busts!");
        break;
    }

    if (playerScore <= 17) {
        playerHand.push(drawCard(tempDeck));
        console.log("Player draws a card");
    }

    if (dealerScore <= 17) {
        dealerHand.push(drawCard(tempDeck));
        console.log("Dealer draws a card");
    }

    if (playerScore > 17 && dealerScore > 17) {
        break;
    }
}

console.log("Final player hand: ", playerHand.map(card => `${card.name} of ${card.suit}`))
console.log("Final player score: ", checkScore(playerHand))
console.log("Final dealer hand: ", dealerHand.map(card => `${card.name} of ${card.suit}`))
console.log("Final dealer score: ", checkScore(dealerHand))
console.log(checkWinConditions(playerHand, dealerHand))
console.log("------- ROUND OVER -------")

function generateCards(names, suits) {
    const deck = []
    for(const name of names) {
        for(const suit of suits) {
            deck.push({ name: name, suit: suit, value: determineValue(name) });
        }
    }
    return deck
}

function shuffle(deck) {
    let tempDeck = [...deck]
    for(let i = 0; i < tempDeck.length; i++) {
        let temp = tempDeck[i]
        let r = Math.floor(Math.random() * tempDeck.length)
        tempDeck[i] = tempDeck[r]
        tempDeck[r] = temp
    }
    return tempDeck
}

function drawCard(deck) {
    return deck.pop()
}

function checkScore(hand) {
    const score = hand.reduce((total, card) => {
        let cardValue;
        if (card.name === 'Ace') {
            cardValue = (total + 11) <= 21 ? 11 : 1;
        } else {
            cardValue = card.value;
        }

        return total + cardValue;
    }, 0);

    return score;
}

function checkWinConditions(playerHand, dealerHand) {
    const playerScore = checkScore(playerHand)
    const dealerScore = checkScore(dealerHand)

    if(playerScore > 21 && dealerScore > 21) {
        return 'Both Bust!'
    } else if (playerScore > 21) {
        return 'Dealer Wins!'
    } else if (dealerScore > 21) {
        return 'Player Wins!'
    } else if (playerScore > dealerScore) {
        return 'Player Wins!'
    } else if (playerScore < dealerScore) {
        return 'Dealer Wins!'
    } else {
        return 'Draw'
    }
}

function determineValue(name) {
    switch (name) {
        case "Two":
            return 2;
        case "Three":
            return 3;
        case "Four":
            return 4;
        case "Five":
            return 5;
        case "Six":
            return 6;
        case "Seven":
            return 7;
        case "Eight":
            return 8;
        case "Nine":
            return 9;
        case "Ten":
        case "Jack":
        case "Queen":
        case "King":
            return 10;
        case "Ace":
            return 1;
        default:
            return undefined;
    }
}