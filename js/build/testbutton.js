/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CKEditorPlugins"] = factory();
	else
		root["CKEditorPlugins"] = root["CKEditorPlugins"] || {}, root["CKEditorPlugins"]["TestButton"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/ckeditor5_plugins/testButton/index.js":
/*!**************************************************!*\
  !*** ./js/ckeditor5_plugins/testButton/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_testbutton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/testbutton.js */ \"./js/ckeditor5_plugins/testButton/src/testbutton.js\");\n/* harmony import */ var _src_testbutton_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_testbutton_js__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_src_testbutton_js__WEBPACK_IMPORTED_MODULE_0___default()));\n\n\n//# sourceURL=webpack://CKEditorPlugins.TestButton/./js/ckeditor5_plugins/testButton/index.js?");

/***/ }),

/***/ "./js/ckeditor5_plugins/testButton/src/testbutton.js":
/*!***********************************************************!*\
  !*** ./js/ckeditor5_plugins/testButton/src/testbutton.js ***!
  \***********************************************************/
/***/ (() => {

eval("class TestButton extends window.CKEDITOR5.core.Plugin {\n  static get pluginName() {\n    return 'TestButton';\n  }\n\n  init() {\n    const editor = this.editor;\n\n    editor.ui.componentFactory.add('testbutton', locale => {\n      const view = new window.CKEDITOR5.ui.ButtonView(locale);\n      view.set({\n        label: 'Test Button',\n        tooltip: true,\n        withText: true\n      });\n      view.on('execute', () => {\n        console.log('✅ Test Button Clicked');\n      });\n      return view;\n    });\n  }\n}\n\nwindow.CKEditorPlugins = window.CKEditorPlugins || {};\nwindow.CKEditorPlugins.TestButton = TestButton;\n\n\n//# sourceURL=webpack://CKEditorPlugins.TestButton/./js/ckeditor5_plugins/testButton/src/testbutton.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/ckeditor5_plugins/testButton/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});