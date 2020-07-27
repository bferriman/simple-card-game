const announceWinner = (scoreCard) => {
  // start by assuming first score is highest
  // use array in case multiple players tie for max
  let indicesOfMax = [0];

  // then compare remaining scores
  for (let i = 1; i < scoreCard.length; i++) {
    // if larger than current max score, replace existing indices
    if (scoreCard[i].score > scoreCard[indicesOfMax[0]].score) {
      indicesOfMax = [i];
    }
    // if tied with current max score, add to existing indices
    else if (scoreCard[i].score === scoreCard[indicesOfMax[0]].score) {
      indicesOfMax.push(i);
    }
  }

  // if a single player has highest score, print winner
  if (indicesOfMax.length === 1) {
    console.log(
      "The winner is " +
        scoreCard[indicesOfMax[0]].name +
        ", with a score of " +
        scoreCard[indicesOfMax[0]].score +
        "!"
    );
  } else {
    // if a tie, randomly select a winner from among those with highest score
    const randomWinnerIndex = Math.floor(Math.random() * indicesOfMax.length);
    console.log(
      "The winner is " +
        scoreCard[indicesOfMax[randomWinnerIndex]].name +
        ", with a score of " +
        scoreCard[indicesOfMax[randomWinnerIndex]].score +
        "!"
    );
  }
};

module.exports = { announceWinner };
