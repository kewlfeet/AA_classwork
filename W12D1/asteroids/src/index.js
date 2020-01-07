// const MovingObject = require("./moving_object.js")
// const Asteroid = require('./asteroid');
const Game = require('./game');
const GameView = require('./game_view');

// window.MovingObject = MovingObject;

window.addEventListener("DOMContentLoaded", event => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");

    const game = new Game();
    new GameView(game, ctx).start();
    // const mo = new MovingObject({
    //     pos: [30, 30],
    //     vel: [10, 10],
    //     radius: 5,
    //     color: "#00FF00"
    // });
    // mo.draw(ctx);

    // const asteroid = new Asteroid({ pos: [50, 50] });
    // asteroid.draw(ctx);
})

// console.log("Webpack is working!")

