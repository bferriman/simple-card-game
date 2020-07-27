const Deck = require("./lib/Deck");
const Player = require("./lib/Player");
const utils = require("./lib/utils");

// create and shuffle the deck
const theDeck = new Deck();
theDeck.shuffle();

// create 2-6 players (number chosen randomly)
const players = [];

for (let i = 0; i < Math.floor(Math.random() * 5) + 2; i++) {
  players.push(new Player("Player " + (i + 1)));
}

// players draw up to five cards in hand, one at a time
for (let i = 0; i < 5; i++) {
  players.forEach((player) => {
    player.drawCard(theDeck);
  });
}

// create a score card with each player's name and score
const scoreCard = [];

players.forEach((player) => {
  scoreCard.push({
    name: player.name,
    score: player.getHandValue()
  });
});

// print all players hands
players.forEach((player) => {
  player.printCards();
});

// announce the winner!
utils.announceWinner(scoreCard);
