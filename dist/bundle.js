/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayLoadingGif\": () => /* binding */ displayLoadingGif,\n/* harmony export */   \"displayWeather\": () => /* binding */ displayWeather\n/* harmony export */ });\nfunction displayLoadingGif(content) {\n  if (document.querySelector('#loading')) {\n    return null;\n  }\n  const loading = document.createElement('img');\n  loading.src = '../src/loading.gif';\n  loading.id = 'loading';\n  content.appendChild(loading);\n  return true;\n}\n\nfunction displayWeather(data, content) {\n  const location = document.createElement('p');\n  location.textContent = `${data.city}, ${data.country}`;\n  const temp = document.createElement('p');\n  temp.textContent = `${data.temp}K`;\n  const icon = document.createElement('div');\n  icon.innerHTML = `\n    <img src='http://openweathermap.org/img/wn/${data.weather.icon}@2x.png'>\n    <p>${data.weather.description}</p>\n  `;\n  content.innerHTML = '';\n  content.appendChild(location);\n  content.appendChild(temp);\n  content.appendChild(icon);\n}\n\n\n//# sourceURL=webpack://weather-app/./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-api */ \"./src/weather-api.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n\n\n\nconst apiKey = '3f4751a98d27d8f410e99e9589eaf508';\nconst content = document.getElementById('content');\nconst form = document.forms[0];\n\nform.addEventListener('submit', async e => {\n  e.preventDefault();\n  const city = document.getElementById('city').value;\n  (0,_display__WEBPACK_IMPORTED_MODULE_1__.displayLoadingGif)(content);\n  const data = await (0,_weather_api__WEBPACK_IMPORTED_MODULE_0__.default)(city, apiKey);\n  (0,_display__WEBPACK_IMPORTED_MODULE_1__.displayWeather)(data, content);\n  form.reset();\n});\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather-api.js":
/*!****************************!*\
  !*** ./src/weather-api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ formattedWeatherData\n/* harmony export */ });\nasync function getWeatherData(location, apiKey) {\n  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`;\n  const data = await fetch(endpoint);\n  const weatherData = await data.json();\n  return weatherData;\n}\n\nasync function formattedWeatherData(location, apiKey) {\n  const data = await getWeatherData(location, apiKey);\n  return {\n    temp: data.main.temp,\n    city: data.name,\n    country: data.sys.country,\n    weather: { icon: data.weather[0].icon, description: data.weather[0].description },\n  };\n}\n\n//# sourceURL=webpack://weather-app/./src/weather-api.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;