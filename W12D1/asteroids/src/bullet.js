const MovingObject = require('./moving_object');
const Util = require('./utils');

const DEFAULTS = {
    COLOR: 'red',
    RADIUS: 5
}

function Bullet(args) {
  const options = {};
//   options.pos = args.pos;
//   options.pos = args.pos || args.game.randomPosition();
  options.color = DEFAULTS.COLOR;
  options.radius = DEFAULTS.RADIUS;
  options.vel = args.ship.vel
//   options.game = args.game;

  MovingObject.call(this, options);
}

Util.inherits(Bullet, MovingObject);

