const cards = [
    { name: "Two", suit: "Hearts", value: 2 },
    { name: "Two", suit: "Diamonds", value: 2 },
    { name: "Two", suit: "Clubs", value: 2 },
    { name: "Two", suit: "Spades", value: 2 },
    { name: "Three", suit: "Hearts", value: 3 },
    { name: "Three", suit: "Diamonds", value: 3 },
    { name: "Three", suit: "Clubs", value: 3 },
    { name: "Three", suit: "Spades", value: 3 },
    { name: "Four", suit: "Hearts", value: 4 },
    { name: "Four", suit: "Diamonds", value: 4 },
    { name: "Four", suit: "Clubs", value: 4 },
    { name: "Four", suit: "Spades", value: 4 },
    { name: "Five", suit: "Hearts", value: 5 },
    { name: "Five", suit: "Diamonds", value: 5 },
    { name: "Five", suit: "Clubs", value: 5 },
    { name: "Five", suit: "Spades", value: 5 },
    { name: "Six", suit: "Hearts", value: 6 },
    { name: "Six", suit: "Diamonds", value: 6 },
    { name: "Six", suit: "Clubs", value: 6 },
    { name: "Six", suit: "Spades", value: 6 },
    { name: "Seven", suit: "Hearts", value: 7 },
    { name: "Seven", suit: "Diamonds", value: 7 },
    { name: "Seven", suit: "Clubs", value: 7 },
    { name: "Seven", suit: "Spades", value: 7 },
    { name: "Eight", suit: "Hearts", value: 8 },
    { name: "Eight", suit: "Diamonds", value: 8 },
    { name: "Eight", suit: "Clubs", value: 8 },
    { name: "Eight", suit: "Spades", value: 8 },
    { name: "Nine", suit: "Hearts", value: 9 },
    { name: "Nine", suit: "Diamonds", value: 9 },
    { name: "Nine", suit: "Clubs", value: 9 },
    { name: "Nine", suit: "Spades", value: 9 },
    { name: "Ten", suit: "Hearts", value: 10 },
    { name: "Ten", suit: "Diamonds", value: 10 },
    { name: "Ten", suit: "Clubs", value: 10 },
    { name: "Ten", suit: "Spades", value: 10 },
    { name: "Jack", suit: "Hearts", value: 10 },
    { name: "Jack", suit: "Diamonds", value: 10 },
    { name: "Jack", suit: "Clubs", value: 10 },
    { name: "Jack", suit: "Spades", value: 10 },
    { name: "Queen", suit: "Hearts", value: 10 },
    { name: "Queen", suit: "Diamonds", value: 10 },
    { name: "Queen", suit: "Clubs", value: 10 },
    { name: "Queen", suit: "Spades", value: 10 },
    { name: "King", suit: "Hearts", value: 10 },
    { name: "King", suit: "Diamonds", value: 10 },
    { name: "King", suit: "Clubs", value: 10 },
    { name: "King", suit: "Spades", value: 10 },
    { name: "Ace", suit: "Hearts", value: 1 },
    { name: "Ace", suit: "Diamonds", value: 1 },
    { name: "Ace", suit: "Clubs", value: 1 },
    { name: "Ace", suit: "Spades", value: 1 }
]
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