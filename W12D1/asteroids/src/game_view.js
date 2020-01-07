GameView.MOVES = {
  up: [0, -1],
  down: [0, 1],
  left: [-1, 0],
  right: [1, 0]
};

function GameView(game, ctx) {
  this.game = game;
  this.ctx = ctx;
  this.ship = this.game.ship;
}

GameView.prototype.start = function() {
    this.bindKeyHandlers();
    this.run();
}

GameView.prototype.run = function() {
    // this.bindKeyHandlers();
    this.game.step();
    this.game.draw(this.ctx);
    setTimeout(this.run.bind(this), 5);
}

GameView.prototype.bindKeyHandlers = function() {
    Object.keys(GameView.MOVES).forEach( k => {
        // debugger;
        const impulse = GameView.MOVES[k];
    key(k, () => {
        // debugger;
        this.ship.power(impulse)
    });

  });
}

module.exports = GameView;