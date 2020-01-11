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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor (array) {\n    this.htmlElements = array;\n  }\n\n  html(innerHTML) {\n    if (innerHTML === undefined) {\n      return this.htmlElements[0].innerHTML;\n    } else {\n      this.htmlElements.forEach(element => {\n        element.innerHTML = innerHTML;\n      });\n      return this;\n    }\n  }\n\n  empty() {\n      this.htmlElements.forEach(el => {\n          el.innerHTML = \"\";\n      });\n  }\n\n  append(arg) {\n    if (arg instanceof DOMNodeCollection) {\n      this.htmlElements.forEach(element1 => {\n        arg.htmlElements.forEach(element2 => {\n          element1.innerHTML = element1.innerHTML.concat(element2.outerHTML);\n        })\n      });\n    } else if (typeof(arg) === \"string\"){\n      this.htmlElements.forEach(element => {\n        element.innerHTML = element.innerHTML.concat(arg);\n      });\n    } else if (arg instanceof HTMLElement) {\n      this.htmlElements.forEach(element => {\n        element.innerHTML = element.innerHTML.concat(arg.outerHTML);\n      });\n    }\n    return this;\n  }\n\n  attr(name, value) {\n    if (value === undefined) {\n      // debugger;\n      return this.htmlElements[0].getAttribute(name);\n    }\n  }\n\n  addClass(className) {\n    this.htmlElements.forEach(element => {\n      const currentClass = element.getAttribute('class');\n      if (currentClass === null) {\n        element.setAttribute('class', `${className}`);\n      } else {\n        element.setAttribute('class', `${currentClass} ${className}`);\n      }\n    });\n    return this;\n  }\n\n  removeClass(className) {\n    this.htmlElements.forEach(element => {\n      // const currentClass = element.getAttribute('class');\n      element.classList.remove(className);\n    })\n    return this;\n  }\n\n  children() { \n    let allChildren = [];\n    this.htmlElements.forEach(parent => {\n      let children = parent.children;\n      Array.from(children).forEach((c)=> {\n        if (!allChildren.includes(c)) {\n          allChildren.push(c);\n        }\n      });\n      // allChildren = allChildren.concat(Array.from(children));\n    });\n    return new DOMNodeCollection(allChildren);\n  }\n\n  parent() {\n    let allParents = [];\n    this.htmlElements.forEach(child => {\n      let parent = child.parentElement;\n      // debugger;\n      if (!allParents.includes(parent)) {\n        allParents.push(parent);\n      }\n    });\n    return new DOMNodeCollection(allParents);\n  }\n\n  find() {\n    \n  }\n\n}\n\n\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nconst $l = function(arg) {\n    if (typeof(arg) === \"string\") {\n        const nodeList = document.querySelectorAll(arg);\n        return new DOMNodeCollection(Array.from(nodeList));\n    } else if (arg instanceof HTMLElement) {\n        // debugger;\n        return new DOMNodeCollection([arg]);\n    }\n}\nwindow.$l = $l;\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });