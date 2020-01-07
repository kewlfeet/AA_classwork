
  // moving_object.js
function MovingObject(options) {
    // your code
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
}

MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);
    ctx.fill();

}

MovingObject.prototype.move = function() {
    this.pos = [this.pos[0]+this.vel[0], this.pos[1] + this.vel[1]];
    // debugger;
    this.pos = this.game.wrap(this.pos);
}

MovingObject.prototype.isCollidedWith = function(otherObject) {
    const dist = Math.sqrt((this.pos[0] - otherObject.pos[0]) ** 2 + (this.pos[1] - otherObject.pos[1]) ** 2);
    return dist < (this.radius+otherObject.radius);
}

MovingObject.prototype.collideWith = function(otherObject) {
}

module.exports = MovingObject;