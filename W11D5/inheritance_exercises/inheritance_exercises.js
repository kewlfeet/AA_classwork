//////////////////////////// inherits /////////////////////////////

// class Surrogate{
//     constructor(superClass) {
//         this.prototype = superClass.prototype
//     }
// }

// Function.prototype.inherits = function(superClass) {
//     // console.log(this);
//     // console.log(superClass);
//     this.prototype = new Surrogate(superClass);
//     this.prototype.constructor = this;

// }


///////////////refactored using Object.create //////////////////////////////

// subClass.prototype = Object.create(superClass.prototype)
Function.prototype.inherits = function(superClass) {
    // console.log(this);
    // console.log(superClass);
    this.prototype = Object.create(superClass.prototype);
    this.prototype.constructor = this;

}

//////////////////////////testing //////////////////////////////////

function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

Ship.prototype.honk = function (){
    console.log("Honk! Honk!");
}

Asteroid.prototype.rotate = function() {
    console.log("Asteroid has rotated")
}

MovingObject.prototype.moveLeft =  function() {
    console.log("Object has moved left");
}

//////////////////////////// End Of Inherits /////////////////////////////////


























