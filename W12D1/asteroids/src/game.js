const Asteroid = require('./asteroid');
const Ship = require('./ship');

Game.DIM_X = 700;
Game.DIM_Y = 700;
Game.NUM_ASTEROIDS = 4;
Game.BG_COLOR = '#5AB9E8';

function Game() {
  this.asteroids = [];
  this.bullets = [];
  this.ship = new Ship({ game: this });
  this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    const asteroid = new Asteroid({ game: this });
    this.asteroids.push(asteroid);
  }
}

Game.prototype.randomPosition = function() {
  const x = Math.floor(Math.random() * Game.DIM_X);
  const y = Math.floor(Math.random() * Game.DIM_Y);
  return [x, y];
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  ctx.fillStyle = Game.BG_COLOR;
  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
  const objects = this.allObjects();
  for (let i = 0; i < objects.length; i++) {
    objects[i].draw(ctx);
  }
}

Game.prototype.moveObjects = function() {
  const objects = this.allObjects();
//   debugger;
  for (let i = 0; i < objects.length; i++) {
    objects[i].move();
    // objects[i].move.bind(null);
  }
}

Game.prototype.wrap = function(pos) {
    return [this.wrappedCoord(pos[0], Game.DIM_X), this.wrappedCoord(pos[1], Game.DIM_Y)];
}

Game.prototype.wrappedCoord = function(coord, max) {
    if (coord < 0) {
        return max + (coord % max);
    } else if (coord > max) {
        return coord % max;
    } else {
        return coord;
    }
}

Game.prototype.checkCollisions = function() {
  const objects = this.allObjects();
  for (let i = 0; i < objects.length; i++) {
      for (let j = i+1; j < objects.length; j++) {
          if (objects[i].isCollidedWith(objects[j])) {
              objects[i].collideWith(objects[j])
          }
      }
  }
}

Game.prototype.step = function() {
    // debugger;
    this.moveObjects();
    this.checkCollisions();

}

Game.prototype.remove = function(asteroid) {
    this.asteroids.splice(this.asteroids.indexOf(asteroid), 1);
}

Game.prototype.allObjects = function() {
  return this.asteroids.concat([this.ship]);
}

module.exports = Game;