const checker = require("../RPS");

describe("whoWon", function () {
  test("returns tie if bother players are the same", function () {
    let output = checker.whoWon("rock", "rock");
    expect(output).toEqual("TIE!");
  });

  test("returns player 2 wins when player 2 has paper and player 1 has rock", function () {
    let output = checker.whoWon("rock", "paper");
    expect(output).toEqual("Player 2 wins!");
  });

  test("returns player 2 wins when player 2 has scissors and player 1 has paper", function () {
    let output = checker.whoWon("paper", "scissors");
    expect(output).toEqual("Player 2 wins!");
  });

  test("returns player 2 wins when player 2 has rock and player 1 has scissors", function () {
    let output = checker.whoWon("scissors", "rock");
    expect(output).toEqual("Player 2 wins!");
  });

  test("returns player 1 wins when player 2 has rock and player 1 has paper", function () {
    let output = checker.whoWon("paper", "rock");
    expect(output).toEqual("Player 1 wins!");
  });
});
