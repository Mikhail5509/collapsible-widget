/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ (() => {

eval("class Collapsible {\r\n  constructor(selector) {\r\n    this.container = document.querySelector(selector);\r\n    this.header = this.container.querySelector('.collapsible-header');\r\n    this.content = this.container.querySelector('.collapsible-content');\r\n\r\n    this.init();\r\n  }\r\n\r\n  init() {\r\n    this.header.addEventListener('click', () => {\r\n      const isOpen = this.content.classList.contains('open');\r\n\r\n      if (isOpen) {\r\n        this.content.classList.remove('open');\r\n      } else {\r\n        this.content.classList.add('open');\r\n      }\r\n    });\r\n  }\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  new Collapsible('.collapsible');\r\n});\r\n\n\n//# sourceURL=webpack://css/./app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app.js"]();
/******/ 	
/******/ })()
;