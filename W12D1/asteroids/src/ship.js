const MovingObject = require('./moving_object');
const Util = require('./utils');

const DEFAULTS = {
    COLOR: 'yellow',
    RADIUS: 15
}

function Ship(args) {
  const options = {};
//   options.pos = args.pos;
  options.pos = args.pos || args.game.randomPosition();
  options.color = DEFAULTS.COLOR;
  options.radius = DEFAULTS.RADIUS;
  options.vel = [0, 0];
  options.game = args.game;

  MovingObject.call(this, options);
}

Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition();
  this.vel = [0, 0];
}

Ship.prototype.power = function(impulse) {
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
}

Ship.prototype.fireBullet = function() {
    const bullet = new Bullet({ship: this});
    this.game.bullets.push(bullet);
}

module.exports = Ship;