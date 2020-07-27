const Card = require("./Card");

class Deck {
  constructor() {
    this.cards = [];
    for (let i = 2; i < 15; i++) {
      this.cards.push(new Card(i, "Hearts"));
      this.cards.push(new Card(i, "Diamonds"));
      this.cards.push(new Card(i, "Clubs"));
      this.cards.push(new Card(i, "Spades"));
    }
  }
}

module.exports = Deck;
