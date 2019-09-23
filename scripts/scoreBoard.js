let scoreBoard = {
  yourScore: 0,
  displayScore: () => {
    score = game.scene.scenes[0].add.text(
      10,
      10,
      "score: " + scoreBoard.yourScore
    );
    score.depth = 20;
    score.color = "yellow";
  }
};
