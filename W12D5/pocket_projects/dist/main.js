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

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\nconst clockElement = document.getElementById(\"clock\");\n\nclass Clock {\n    constructor() {\n        // 1. Create a Date object.\n        const currentTime = new Date();\n        \n        // 2. Store the hour, minute, and second.\n        this.hours = currentTime.getHours();\n        this.minutes = currentTime.getMinutes();\n        this.seconds = currentTime.getSeconds();\n        \n        // 3. Call printTime.\n        Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(this.printTime(), clockElement);\n        \n        // 4. Schedule the tick at 1 second intervals.\n        setInterval(this._tick.bind(this), 1000);\n    }\n    \n    printTime() {\n        // Format the time in HH:MM:SS\n        const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n\n        Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(timeString, clockElement);\n\n        // Use console.log to print it.\n        // console.log(timeString);\n        return timeString;\n    }\n    \n    _tick() {\n        // 1. Increment the time by one second.\n        this._incrementSeconds();\n        \n        // 2. Call printTime.\n        this.printTime();\n    }\n    \n    _incrementSeconds() {\n        // 1. Increment the time by one second.\n        this.seconds += 1;\n        if (this.seconds === 60) {\n            this.seconds = 0;\n            this._incrementMinutes();\n        }\n    }\n    \n    _incrementMinutes() {\n        this.minutes += 1;\n        if (this.minutes === 60) {\n            this.minutes = 0;\n            this._incrementHours();\n        }\n    }\n    \n    _incrementHours() {\n        this.hours = (this.hours + 1) % 24;\n    }\n}\n\nconst clock = new Clock();\n\n\n// http://127.0.0.1:5500/pocket_projects/dist/index.html\n// htmlGenerator(clock.printTime())\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\n\nconst dogLinkCreator =  function(dogs) {\n\n  const dogLinks = [];\n  const dogNames = Object.keys(dogs);\n\n  dogNames.forEach((dog) => {\n    const anchor = document.createElement(\"a\");\n    anchor.innerHTML = dog;\n    anchor.href = dogs[dog];\n\n    const list = document.createElement(\"li\");\n    list.className = \"dog-link\";\n    list.appendChild(anchor);\n    dogLinks.push(list);\n  }); \n  return dogLinks\n};\n\n\nconst attachDogLinks = function() {\n  const dogLinks = dogLinkCreator(dogs);\n  const unorderdL = document.querySelectorAll(\".drop-down-dog-list\");\n  Array.from(unorderdL).forEach((ul)=>{\n    dogLinks.forEach((dog)=> {\n      ul.appendChild(dog)\n    })\n  });\n};\n\nattachDogLinks();\n\nconst handleEnter = function() {\n  const dogLinks = document.querySelectorAll(\".dog-link\");\n\n  dogLinks.forEach( link => {\n    // link.classList.add(\"open\");\n    link.className = link.className + ' open'\n    // debugger;\n  });\n};\n\nconst handleLeave = function() {\n  const dogLinks = document.querySelectorAll(\".dog-link\")\n\n  dogLinks.forEach( link => {\n    link.classList.remove(\"open\");\n  });\n};\n\nconst dropNav = document.querySelector(\".drop-down-dog-nav\");\n\ndropNav.addEventListener(\"mouseenter\", handleEnter);\ndropNav.addEventListener(\"mouseleave\", handleLeave);\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n// const partyHeader = document.getElementById('party');\n\n// warmUp('Vanilla DOM manipulation', partyHeader);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst todos = JSON.parse(localStorage.getItem(\"todos\")) || [];\nconst addTodos = document.querySelector(\".add-todo-form\");\nconst todoList = document.querySelector(\".todos\");\n\nconst addTodo = function (event) {\n    event.preventDefault();\n    const todoInput = document.querySelector(\"[name=add-todo]\").value;\n    const todo = {todoInput, done: false};\n    todos.push(todo);\n    populateList();\n    localStorage.setItem(\"todos\", JSON.stringify(todos));\n    \n    event.currentTarget.reset();\n}\n\nconst populateList = function() {\n    todoList.innerHTML = \"\";\n    todos.forEach((todo, index)=> {\n        const li = document.createElement(\"li\");\n        const label = document.createElement(\"label\")\n        label.innerHTML = todo[\"todoInput\"];\n        const inputT = document.createElement(\"input\");\n        inputT.setAttribute(\"type\", \"checkbox\")\n        inputT.checked = todo[\"done\"]\n        inputT.className = \"checkbox\"\n        inputT.setAttribute(\"index\", index)\n        li.appendChild(inputT);\n        li.appendChild(label);\n        todoList.appendChild(li);\n        \n    })\n}\n\npopulateList();\naddTodos.addEventListener(\"submit\", addTodo);\n\nchecks = document.querySelectorAll(\".checkbox\");\n\nconst clickCB = function(event) {\n    const check = event.target\n    const todo = todos;\n    if (check.className === \"checkbox\") {\n        checked = todos[check.getAttribute(\"index\")].done\n        if (checked === true){\n            checked = false\n        } else {\n            checked = true\n        }\n        todos[check.getAttribute(\"index\")].done = checked;\n    } else {\n        return;\n    }\n    localStorage.setItem(\"todos\", JSON.stringify(todos));\n    populateList();\n}\n        \ntodoList.addEventListener(\"click\", clickCB);\n\n            \n            \n            \n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n    Array.from(htmlElement.children).forEach(child => {\n        htmlElement.removeChild(child)\n    });\n    let para = document.createElement(\"p\");\n    para.innerHTML = string;\n    htmlElement.appendChild(para);\n    \n};\n\n// htmlGenerator('Party Time.', partyHeader);\nhtmlGenerator('Welcome To The Pocket Project Marathon!', partyHeader);\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });