const Card = require("./Card");

class Deck {
  constructor() {
    console.log("Building deck...");
    this.cards = [];
    //build standard 52 card deck
    for (let i = 2; i < 15; i++) {
      this.cards.push(new Card(i, "Hearts"));
      this.cards.push(new Card(i, "Diamonds"));
      this.cards.push(new Card(i, "Clubs"));
      this.cards.push(new Card(i, "Spades"));
    }
  }

  shuffle() {
    console.log("Shuffling...");
    //using Fisher Yates method
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  takeTop() {
    return this.cards.pop();
  }
}

module.exports = Deck;
