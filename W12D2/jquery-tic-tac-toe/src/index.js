const View = require("./ttt-view")// require appropriate file
const Game = require("../../tic-tac-toe-node-solution/game")// require appropriate file

  $(() => {
    // Your code here

    const $figure = $("figure.ttt")

    const game = new Game();

    const view = new View(game, $figure)
    
  });
