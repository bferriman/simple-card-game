const Deck = require("./Deck");

const suitValues = {
  Hearts: 1,
  Diamonds: 2,
  Clubs: 3,
  Spades: 4
};

class Player {
  constructor(name) {
    if (!name || !name instanceof String) {
      throw new Error("name missing or of invalid type");
    }
    this.name = name;
    this.hand = [];
  }

  drawCard(deck) {
    if (!deck instanceof Deck) {
      throw new Error("argument must be of type Deck");
    }
    if (this.hand.length < 5) {
      this.hand.push(deck.takeTop());
      this.sortHand();
    }
  }

  sortHand() {
    this.hand.sort((a, b) => {
      if (suitValues[a.suit] - suitValues[b.suit] !== 0) {
        return suitValues[a.suit] - suitValues[b.suit];
      } else {
        return a.points - b.points;
      }
    });
  }

  getHandValue() {
    let handValue = 0;
    this.hand.forEach((card) => {
      handValue += card.points;
    });
    return handValue;
  }

  printCards() {
    console.log(this.name + "'s hand:");
    this.hand.forEach((card, i) => {
      console.log("Card " + (i + 1) + ": " + card.rank + " of " + card.suit);
    });
  }
}

module.exports = Player;
