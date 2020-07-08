module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/action.js":
/*!***************************!*\
  !*** ./actions/action.js ***!
  \***************************/
/*! exports provided: CHANGE_COUNT_DOWN_STATE, SET_RESULT_NAME, RESET_ALL_STATUS, changeCountDownState, resetAllStatus, setResultName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANGE_COUNT_DOWN_STATE\", function() { return CHANGE_COUNT_DOWN_STATE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_RESULT_NAME\", function() { return SET_RESULT_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RESET_ALL_STATUS\", function() { return RESET_ALL_STATUS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeCountDownState\", function() { return changeCountDownState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetAllStatus\", function() { return resetAllStatus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setResultName\", function() { return setResultName; });\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ \"redux-actions\");\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);\n // ------------------------------------\n// Constants\n// ------------------------------------\n\nconst CHANGE_COUNT_DOWN_STATE = \"CHANGE_COUNT_DOWN_STATE\";\nconst SET_RESULT_NAME = \"SET_RESULT_NAME\";\nconst RESET_ALL_STATUS = \"RESET_ALL_STATUS\"; // ------------------------------------\n// Actions\n// ------------------------------------\n\nconst changeCountDownState = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(CHANGE_COUNT_DOWN_STATE);\nconst resetAllStatus = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(RESET_ALL_STATUS);\nconst setResultName = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createAction\"])(SET_RESULT_NAME, resultName => ({\n  resultName\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2FjdGlvbi5qcz83YTUyIl0sIm5hbWVzIjpbIkNIQU5HRV9DT1VOVF9ET1dOX1NUQVRFIiwiU0VUX1JFU1VMVF9OQU1FIiwiUkVTRVRfQUxMX1NUQVRVUyIsImNoYW5nZUNvdW50RG93blN0YXRlIiwiY3JlYXRlQWN0aW9uIiwicmVzZXRBbGxTdGF0dXMiLCJzZXRSZXN1bHROYW1lIiwicmVzdWx0TmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBRUE7QUFDQTtBQUNBOztBQUNPLE1BQU1BLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekIsQyxDQUVQO0FBQ0E7QUFDQTs7QUFFTyxNQUFNQyxvQkFBb0IsR0FBR0Msa0VBQVksQ0FBQ0osdUJBQUQsQ0FBekM7QUFDQSxNQUFNSyxjQUFjLEdBQUdELGtFQUFZLENBQUNGLGdCQUFELENBQW5DO0FBQ0EsTUFBTUksYUFBYSxHQUFHRixrRUFBWSxDQUFDSCxlQUFELEVBQW1CTSxVQUFELEtBQWlCO0FBQzFFQTtBQUQwRSxDQUFqQixDQUFsQixDQUFsQyIsImZpbGUiOiIuL2FjdGlvbnMvYWN0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSBcInJlZHV4LWFjdGlvbnNcIjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDb25zdGFudHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGNvbnN0IENIQU5HRV9DT1VOVF9ET1dOX1NUQVRFID0gXCJDSEFOR0VfQ09VTlRfRE9XTl9TVEFURVwiO1xuZXhwb3J0IGNvbnN0IFNFVF9SRVNVTFRfTkFNRSA9IFwiU0VUX1JFU1VMVF9OQU1FXCI7XG5leHBvcnQgY29uc3QgUkVTRVRfQUxMX1NUQVRVUyA9IFwiUkVTRVRfQUxMX1NUQVRVU1wiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFjdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY29uc3QgY2hhbmdlQ291bnREb3duU3RhdGUgPSBjcmVhdGVBY3Rpb24oQ0hBTkdFX0NPVU5UX0RPV05fU1RBVEUpO1xuZXhwb3J0IGNvbnN0IHJlc2V0QWxsU3RhdHVzID0gY3JlYXRlQWN0aW9uKFJFU0VUX0FMTF9TVEFUVVMpO1xuZXhwb3J0IGNvbnN0IHNldFJlc3VsdE5hbWUgPSBjcmVhdGVBY3Rpb24oU0VUX1JFU1VMVF9OQU1FLCAocmVzdWx0TmFtZSkgPT4gKHtcbiAgcmVzdWx0TmFtZSxcbn0pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./actions/action.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"./store.js\");\nvar _jsxFileName = \"/Users/mikechen-mbp/Desktop/react_project/with-redux/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  const store = Object(_store__WEBPACK_IMPORTED_MODULE_2__[\"useStore\"])(pageProps.initialReduxState);\n  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"], {\n    store: store,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJ1c2VTdG9yZSIsImluaXRpYWxSZWR1eFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLEdBQVQsQ0FBYTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBYixFQUF1QztBQUNwRCxRQUFNQyxLQUFLLEdBQUdDLHVEQUFRLENBQUNGLFNBQVMsQ0FBQ0csaUJBQVgsQ0FBdEI7QUFFQSxTQUNFLE1BQUMsb0RBQUQ7QUFBVSxTQUFLLEVBQUVGLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQsZUFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FERjtBQUtEIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUocGFnZVByb3BzLmluaXRpYWxSZWR1eFN0YXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeStore\", function() { return initializeStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useStore\", function() { return useStore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/action */ \"./actions/action.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nlet store;\nconst nameList = [{\n  nameId: 1,\n  name: \"美國瑜\"\n}, {\n  nameId: 2,\n  name: \"泰國瑜\"\n}, {\n  nameId: 3,\n  name: \"蔡台語\"\n}, {\n  nameId: 4,\n  name: \"蔡日文\"\n}, {\n  nameId: 5,\n  name: \"李白\"\n}, {\n  nameId: 6,\n  name: \"李黑\"\n}, {\n  nameId: 7,\n  name: \"蘇東坡\"\n}, {\n  nameId: 8,\n  name: \"蘇西坡\"\n}, {\n  nameId: 9,\n  name: \"蘇北坡\"\n}];\nconst initialState = {\n  isCountDown: false,\n  resultName: \"\",\n  nameList: nameList\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _actions_action__WEBPACK_IMPORTED_MODULE_3__[\"RESET_ALL_STATUS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isCountDown: false,\n        resultName: \"\"\n      });\n\n    case _actions_action__WEBPACK_IMPORTED_MODULE_3__[\"SET_RESULT_NAME\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        resultName: action.payload.resultName\n      });\n\n    case _actions_action__WEBPACK_IMPORTED_MODULE_3__[\"CHANGE_COUNT_DOWN_STATE\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isCountDown: !state.isCountDown\n      });\n\n    default:\n      return state;\n  }\n};\n\nfunction initStore(preloadedState = initialState) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(reducer, preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])()));\n}\n\nconst initializeStore = preloadedState => {\n  var _store2;\n\n  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state\n  // with the current state in the store, and create a new store\n\n\n  if (preloadedState && store) {\n    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store\n\n    store = undefined;\n  } // For SSG and SSR always create a new store\n\n\n  if (true) return _store; // Create the store once in the client\n\n  if (!store) store = _store;\n  return _store;\n};\nfunction useStore(initialState) {\n  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => initializeStore(initialState), [initialState]);\n  return store;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS5qcz8wNTcxIl0sIm5hbWVzIjpbInN0b3JlIiwibmFtZUxpc3QiLCJuYW1lSWQiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwiaXNDb3VudERvd24iLCJyZXN1bHROYW1lIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlJFU0VUX0FMTF9TVEFUVVMiLCJTRVRfUkVTVUxUX05BTUUiLCJwYXlsb2FkIiwiQ0hBTkdFX0NPVU5UX0RPV05fU1RBVEUiLCJpbml0U3RvcmUiLCJwcmVsb2FkZWRTdGF0ZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsImluaXRpYWxpemVTdG9yZSIsIl9zdG9yZSIsImdldFN0YXRlIiwidW5kZWZpbmVkIiwidXNlU3RvcmUiLCJ1c2VNZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFNQSxJQUFJQSxLQUFKO0FBRUEsTUFBTUMsUUFBUSxHQUFHLENBQ2Y7QUFBRUMsUUFBTSxFQUFFLENBQVY7QUFBYUMsTUFBSSxFQUFFO0FBQW5CLENBRGUsRUFFZjtBQUFFRCxRQUFNLEVBQUUsQ0FBVjtBQUFhQyxNQUFJLEVBQUU7QUFBbkIsQ0FGZSxFQUdmO0FBQUVELFFBQU0sRUFBRSxDQUFWO0FBQWFDLE1BQUksRUFBRTtBQUFuQixDQUhlLEVBSWY7QUFBRUQsUUFBTSxFQUFFLENBQVY7QUFBYUMsTUFBSSxFQUFFO0FBQW5CLENBSmUsRUFLZjtBQUFFRCxRQUFNLEVBQUUsQ0FBVjtBQUFhQyxNQUFJLEVBQUU7QUFBbkIsQ0FMZSxFQU1mO0FBQUVELFFBQU0sRUFBRSxDQUFWO0FBQWFDLE1BQUksRUFBRTtBQUFuQixDQU5lLEVBT2Y7QUFBRUQsUUFBTSxFQUFFLENBQVY7QUFBYUMsTUFBSSxFQUFFO0FBQW5CLENBUGUsRUFRZjtBQUFFRCxRQUFNLEVBQUUsQ0FBVjtBQUFhQyxNQUFJLEVBQUU7QUFBbkIsQ0FSZSxFQVNmO0FBQUVELFFBQU0sRUFBRSxDQUFWO0FBQWFDLE1BQUksRUFBRTtBQUFuQixDQVRlLENBQWpCO0FBWUEsTUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxhQUFXLEVBQUUsS0FETTtBQUVuQkMsWUFBVSxFQUFFLEVBRk87QUFHbkJMLFVBQVEsRUFBRUE7QUFIUyxDQUFyQjs7QUFNQSxNQUFNTSxPQUFPLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHSixZQUFULEVBQXVCSyxNQUF2QixLQUFrQztBQUNoRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQyxnRUFBTDtBQUNFLDZDQUNLSCxLQURMO0FBRUVILG1CQUFXLEVBQUUsS0FGZjtBQUdFQyxrQkFBVSxFQUFFO0FBSGQ7O0FBS0YsU0FBS00sK0RBQUw7QUFDRSw2Q0FDS0osS0FETDtBQUVFRixrQkFBVSxFQUFFRyxNQUFNLENBQUNJLE9BQVAsQ0FBZVA7QUFGN0I7O0FBSUYsU0FBS1EsdUVBQUw7QUFDRSw2Q0FDS04sS0FETDtBQUVFSCxtQkFBVyxFQUFFLENBQUNHLEtBQUssQ0FBQ0g7QUFGdEI7O0FBSUY7QUFDRSxhQUFPRyxLQUFQO0FBbEJKO0FBb0JELENBckJEOztBQXVCQSxTQUFTTyxTQUFULENBQW1CQyxjQUFjLEdBQUdaLFlBQXBDLEVBQWtEO0FBQ2hELFNBQU9hLHlEQUFXLENBQ2hCVixPQURnQixFQUVoQlMsY0FGZ0IsRUFHaEJFLG9GQUFtQixDQUFDQyw2REFBZSxFQUFoQixDQUhILENBQWxCO0FBS0Q7O0FBRU0sTUFBTUMsZUFBZSxHQUFJSixjQUFELElBQW9CO0FBQUE7O0FBQ2pELE1BQUlLLE1BQU0sY0FBR3JCLEtBQUgsNkNBQVllLFNBQVMsQ0FBQ0MsY0FBRCxDQUEvQixDQURpRCxDQUdqRDtBQUNBOzs7QUFDQSxNQUFJQSxjQUFjLElBQUloQixLQUF0QixFQUE2QjtBQUMzQnFCLFVBQU0sR0FBR04sU0FBUyxpQ0FDYmYsS0FBSyxDQUFDc0IsUUFBTixFQURhLEdBRWJOLGNBRmEsRUFBbEIsQ0FEMkIsQ0FLM0I7O0FBQ0FoQixTQUFLLEdBQUd1QixTQUFSO0FBQ0QsR0FaZ0QsQ0FjakQ7OztBQUNBLFlBQW1DLE9BQU9GLE1BQVAsQ0FmYyxDQWdCakQ7O0FBQ0EsTUFBSSxDQUFDckIsS0FBTCxFQUFZQSxLQUFLLEdBQUdxQixNQUFSO0FBRVosU0FBT0EsTUFBUDtBQUNELENBcEJNO0FBc0JBLFNBQVNHLFFBQVQsQ0FBa0JwQixZQUFsQixFQUFnQztBQUNyQyxRQUFNSixLQUFLLEdBQUd5QixxREFBTyxDQUFDLE1BQU1MLGVBQWUsQ0FBQ2hCLFlBQUQsQ0FBdEIsRUFBc0MsQ0FBQ0EsWUFBRCxDQUF0QyxDQUFyQjtBQUNBLFNBQU9KLEtBQVA7QUFDRCIsImZpbGUiOiIuL3N0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcbmltcG9ydCB7XG4gIENIQU5HRV9DT1VOVF9ET1dOX1NUQVRFLFxuICBTRVRfUkVTVUxUX05BTUUsXG4gIFJFU0VUX0FMTF9TVEFUVVMsXG59IGZyb20gXCIuL2FjdGlvbnMvYWN0aW9uXCI7XG5cbmxldCBzdG9yZTtcblxuY29uc3QgbmFtZUxpc3QgPSBbXG4gIHsgbmFtZUlkOiAxLCBuYW1lOiBcIue+juWci+eRnFwiIH0sXG4gIHsgbmFtZUlkOiAyLCBuYW1lOiBcIuazsOWci+eRnFwiIH0sXG4gIHsgbmFtZUlkOiAzLCBuYW1lOiBcIuiUoeWPsOiqnlwiIH0sXG4gIHsgbmFtZUlkOiA0LCBuYW1lOiBcIuiUoeaXpeaWh1wiIH0sXG4gIHsgbmFtZUlkOiA1LCBuYW1lOiBcIuadjueZvVwiIH0sXG4gIHsgbmFtZUlkOiA2LCBuYW1lOiBcIuadjum7kVwiIH0sXG4gIHsgbmFtZUlkOiA3LCBuYW1lOiBcIuiYh+adseWdoVwiIH0sXG4gIHsgbmFtZUlkOiA4LCBuYW1lOiBcIuiYh+ilv+WdoVwiIH0sXG4gIHsgbmFtZUlkOiA5LCBuYW1lOiBcIuiYh+WMl+WdoVwiIH0sXG5dO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlzQ291bnREb3duOiBmYWxzZSxcbiAgcmVzdWx0TmFtZTogXCJcIixcbiAgbmFtZUxpc3Q6IG5hbWVMaXN0LFxufTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFU0VUX0FMTF9TVEFUVVM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNDb3VudERvd246IGZhbHNlLFxuICAgICAgICByZXN1bHROYW1lOiBcIlwiLFxuICAgICAgfTtcbiAgICBjYXNlIFNFVF9SRVNVTFRfTkFNRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZXN1bHROYW1lOiBhY3Rpb24ucGF5bG9hZC5yZXN1bHROYW1lLFxuICAgICAgfTtcbiAgICBjYXNlIENIQU5HRV9DT1VOVF9ET1dOX1NUQVRFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzQ291bnREb3duOiAhc3RhdGUuaXNDb3VudERvd24sXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSA9IGluaXRpYWxTdGF0ZSkge1xuICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgcmVkdWNlcixcbiAgICBwcmVsb2FkZWRTdGF0ZSxcbiAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSgpKVxuICApO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVN0b3JlID0gKHByZWxvYWRlZFN0YXRlKSA9PiB7XG4gIGxldCBfc3RvcmUgPSBzdG9yZSA/PyBpbml0U3RvcmUocHJlbG9hZGVkU3RhdGUpO1xuXG4gIC8vIEFmdGVyIG5hdmlnYXRpbmcgdG8gYSBwYWdlIHdpdGggYW4gaW5pdGlhbCBSZWR1eCBzdGF0ZSwgbWVyZ2UgdGhhdCBzdGF0ZVxuICAvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxuICBpZiAocHJlbG9hZGVkU3RhdGUgJiYgc3RvcmUpIHtcbiAgICBfc3RvcmUgPSBpbml0U3RvcmUoe1xuICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgIC4uLnByZWxvYWRlZFN0YXRlLFxuICAgIH0pO1xuICAgIC8vIFJlc2V0IHRoZSBjdXJyZW50IHN0b3JlXG4gICAgc3RvcmUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBzdG9yZVxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIF9zdG9yZTtcbiAgLy8gQ3JlYXRlIHRoZSBzdG9yZSBvbmNlIGluIHRoZSBjbGllbnRcbiAgaWYgKCFzdG9yZSkgc3RvcmUgPSBfc3RvcmU7XG5cbiAgcmV0dXJuIF9zdG9yZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdG9yZShpbml0aWFsU3RhdGUpIHtcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSk7XG4gIHJldHVybiBzdG9yZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-actions":
/*!********************************!*\
  !*** external "redux-actions" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-actions\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1hY3Rpb25zXCI/NjlmZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1hY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtYWN0aW9uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-actions\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ })

/******/ });