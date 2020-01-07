/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\") \n\nconst DEFAULTS = {\n  COLOR: 'blue',\n  RADIUS: 10,\n  LENGTH: 1\n}\n\nfunction Asteroid(args) {\n  const options = args || {};\n  options.color = DEFAULTS.COLOR;\n  options.radius = DEFAULTS.RADIUS;\n  options.vel = Util.randomVec(DEFAULTS.LENGTH);\n  options.pos = args.pos || args.game.randomPosition();\n  \n  MovingObject.call(this, options);\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.collideWith = function(otherObject) {\n  if (otherObject instanceof Ship) {\n    alert(\"COLLISION\");  \n    otherObject.relocate();\n  }\n}\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nGame.DIM_X = 700;\nGame.DIM_Y = 700;\nGame.NUM_ASTEROIDS = 4;\nGame.BG_COLOR = '#5AB9E8';\n\nfunction Game() {\n  this.asteroids = [];\n  this.bullets = [];\n  this.ship = new Ship({ game: this });\n  this.addAsteroids();\n}\n\nGame.prototype.addAsteroids = function() {\n  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n    const asteroid = new Asteroid({ game: this });\n    this.asteroids.push(asteroid);\n  }\n}\n\nGame.prototype.randomPosition = function() {\n  const x = Math.floor(Math.random() * Game.DIM_X);\n  const y = Math.floor(Math.random() * Game.DIM_Y);\n  return [x, y];\n}\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  ctx.fillStyle = Game.BG_COLOR;\n  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  const objects = this.allObjects();\n  for (let i = 0; i < objects.length; i++) {\n    objects[i].draw(ctx);\n  }\n}\n\nGame.prototype.moveObjects = function() {\n  const objects = this.allObjects();\n//   debugger;\n  for (let i = 0; i < objects.length; i++) {\n    objects[i].move();\n    // objects[i].move.bind(null);\n  }\n}\n\nGame.prototype.wrap = function(pos) {\n    return [this.wrappedCoord(pos[0], Game.DIM_X), this.wrappedCoord(pos[1], Game.DIM_Y)];\n}\n\nGame.prototype.wrappedCoord = function(coord, max) {\n    if (coord < 0) {\n        return max + (coord % max);\n    } else if (coord > max) {\n        return coord % max;\n    } else {\n        return coord;\n    }\n}\n\nGame.prototype.checkCollisions = function() {\n  const objects = this.allObjects();\n  for (let i = 0; i < objects.length; i++) {\n      for (let j = i+1; j < objects.length; j++) {\n          if (objects[i].isCollidedWith(objects[j])) {\n              objects[i].collideWith(objects[j])\n          }\n      }\n  }\n}\n\nGame.prototype.step = function() {\n    // debugger;\n    this.moveObjects();\n    this.checkCollisions();\n\n}\n\nGame.prototype.remove = function(asteroid) {\n    this.asteroids.splice(this.asteroids.indexOf(asteroid), 1);\n}\n\nGame.prototype.allObjects = function() {\n  return this.asteroids.concat([this.ship]);\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("GameView.MOVES = {\n  up: [0, -1],\n  down: [0, 1],\n  left: [-1, 0],\n  right: [1, 0]\n};\n\nfunction GameView(game, ctx) {\n  this.game = game;\n  this.ctx = ctx;\n  this.ship = this.game.ship;\n}\n\nGameView.prototype.start = function() {\n    this.bindKeyHandlers();\n    this.run();\n}\n\nGameView.prototype.run = function() {\n    // this.bindKeyHandlers();\n    this.game.step();\n    this.game.draw(this.ctx);\n    setTimeout(this.run.bind(this), 5);\n}\n\nGameView.prototype.bindKeyHandlers = function() {\n    Object.keys(GameView.MOVES).forEach( k => {\n        // debugger;\n        const impulse = GameView.MOVES[k];\n    key(k, () => {\n        // debugger;\n        this.ship.power(impulse)\n    });\n\n  });\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const MovingObject = require(\"./moving_object.js\")\n// const Asteroid = require('./asteroid');\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n// window.MovingObject = MovingObject;\n\nwindow.addEventListener(\"DOMContentLoaded\", event => {\n    const canvas = document.getElementById(\"game-canvas\");\n    const ctx = canvas.getContext(\"2d\");\n\n    const game = new Game();\n    new GameView(game, ctx).start();\n    // const mo = new MovingObject({\n    //     pos: [30, 30],\n    //     vel: [10, 10],\n    //     radius: 5,\n    //     color: \"#00FF00\"\n    // });\n    // mo.draw(ctx);\n\n    // const asteroid = new Asteroid({ pos: [50, 50] });\n    // asteroid.draw(ctx);\n})\n\n// console.log(\"Webpack is working!\")\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n  // moving_object.js\nfunction MovingObject(options) {\n    // your code\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n    this.game = options.game;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);\n    ctx.fill();\n\n}\n\nMovingObject.prototype.move = function() {\n    this.pos = [this.pos[0]+this.vel[0], this.pos[1] + this.vel[1]];\n    // debugger;\n    this.pos = this.game.wrap(this.pos);\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n    const dist = Math.sqrt((this.pos[0] - otherObject.pos[0]) ** 2 + (this.pos[1] - otherObject.pos[1]) ** 2);\n    return dist < (this.radius+otherObject.radius);\n}\n\nMovingObject.prototype.collideWith = function(otherObject) {\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nconst DEFAULTS = {\n    COLOR: 'yellow',\n    RADIUS: 15\n}\n\nfunction Ship(args) {\n  const options = {};\n//   options.pos = args.pos;\n  options.pos = args.pos || args.game.randomPosition();\n  options.color = DEFAULTS.COLOR;\n  options.radius = DEFAULTS.RADIUS;\n  options.vel = [0, 0];\n  options.game = args.game;\n\n  MovingObject.call(this, options);\n}\n\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.relocate = function() {\n  this.pos = this.game.randomPosition();\n  this.vel = [0, 0];\n}\n\nShip.prototype.power = function(impulse) {\n  this.vel[0] += impulse[0];\n  this.vel[1] += impulse[1];\n}\n\nShip.prototype.fireBullet = function() {\n    const bullet = new Bullet({ship: this});\n    this.game.bullets.push(bullet);\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    childClass.prototype = Object.create(parentClass.prototype);\n    childClass.prototype.constructor = childClass;\n  },\n\n  // Return a randomly oriented vector with the given length.\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });