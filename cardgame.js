const Deck = require("./lib/Deck");
// const Player = require("./lib/Player");

const myDeck = new Deck();
console.log(myDeck.cards);
console.log("shuffling...");
myDeck.shuffle();
console.log(myDeck.cards);
