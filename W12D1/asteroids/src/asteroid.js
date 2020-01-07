const Util = require('./utils');
const MovingObject = require('./moving_object');
const Ship = require('./ship') 

const DEFAULTS = {
  COLOR: 'blue',
  RADIUS: 10,
  LENGTH: 1
}

function Asteroid(args) {
  const options = args || {};
  options.color = DEFAULTS.COLOR;
  options.radius = DEFAULTS.RADIUS;
  options.vel = Util.randomVec(DEFAULTS.LENGTH);
  options.pos = args.pos || args.game.randomPosition();
  
  MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function(otherObject) {
  if (otherObject instanceof Ship) {
    alert("COLLISION");  
    otherObject.relocate();
  }
}

module.exports = Asteroid;