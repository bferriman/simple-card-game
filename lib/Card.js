class Card {
  constructor(rank, suit) {
    if (!rank) {
      throw new Error("missing rank");
    }
    if (!suit) {
      throw new Error("missing suit");
    }

    switch (rank) {
      case 2:
        this.rank = "Two";
        this.points = 2;
        break;
      case 3:
        this.rank = "Three";
        this.points = 3;
        break;
      case 4:
        this.rank = "Four";
        this.points = 4;
        break;
      case 5:
        this.rank = "Five";
        this.points = 5;
        break;
      case 6:
        this.rank = "Six";
        this.points = 6;
        break;
      case 7:
        this.rank = "Seven";
        this.points = 7;
        break;
      case 8:
        this.rank = "Eight";
        this.points = 8;
        break;
      case 9:
        this.rank = "Nine";
        this.points = 9;
        break;
      case 10:
        this.rank = "Ten";
        this.points = 10;
        break;
      case 11:
        this.rank = "Jack";
        this.points = 10;
        break;
      case 12:
        this.rank = "Queen";
        this.points = 10;
        break;
      case 13:
        this.rank = "King";
        this.points = 10;
        break;
      case 14:
        this.rank = "Ace";
        this.points = 15;
        break;
      default:
        throw new Error("Invalid rank");
    }

    switch (suit) {
      case "Hearts":
        this.suit = "Hearts";
        break;
      case "Diamonds":
        this.suit = "Diamonds";
        break;
      case "Clubs":
        this.suit = "Clubs";
        break;
      case "Spades":
        this.suit = "Spades";
        break;
      default:
        throw new Error("Invalid suit");
    }
  }
}

module.exports = Card;
