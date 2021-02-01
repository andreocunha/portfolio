module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/tempo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/tempo.js":
/*!****************************!*\
  !*** ./src/pages/tempo.js ***!
  \****************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/andre/Documents/portfolio/src/pages/tempo.js\";\n\nfunction Tempo(props) {\n  const dynamicDate = new Date();\n  const dynamicDateString = dynamicDate.toGMTString();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [dynamicDateString, \" (din\\xE2mico)\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [props.staticDateString, \" (est\\xE1tico)\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, this);\n}\n\nasync function getStaticProps() {\n  const staticDate = new Date();\n  const staticDateString = staticDate.toGMTString();\n  return {\n    props: {\n      staticDateString\n    },\n    revalidate: 1\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tempo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdGVtcG8uanM/ZGYyZSJdLCJuYW1lcyI6WyJUZW1wbyIsInByb3BzIiwiZHluYW1pY0RhdGUiLCJEYXRlIiwiZHluYW1pY0RhdGVTdHJpbmciLCJ0b0dNVFN0cmluZyIsInN0YXRpY0RhdGVTdHJpbmciLCJnZXRTdGF0aWNQcm9wcyIsInN0YXRpY0RhdGUiLCJyZXZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXFCO0FBQ2pCLFFBQU1DLFdBQVcsR0FBRyxJQUFJQyxJQUFKLEVBQXBCO0FBQ0EsUUFBTUMsaUJBQWlCLEdBQUdGLFdBQVcsQ0FBQ0csV0FBWixFQUExQjtBQUVBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSxpQkFBTUQsaUJBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFBLGlCQUFNSCxLQUFLLENBQUNLLGdCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBTUg7O0FBRU0sZUFBZUMsY0FBZixHQUErQjtBQUNsQyxRQUFNQyxVQUFVLEdBQUcsSUFBSUwsSUFBSixFQUFuQjtBQUNBLFFBQU1HLGdCQUFnQixHQUFHRSxVQUFVLENBQUNILFdBQVgsRUFBekI7QUFFQSxTQUFNO0FBQ0ZKLFNBQUssRUFBRTtBQUNISztBQURHLEtBREw7QUFJRkcsY0FBVSxFQUFFO0FBSlYsR0FBTjtBQU1IO0FBRWNULG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3RlbXBvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gVGVtcG8ocHJvcHMpe1xuICAgIGNvbnN0IGR5bmFtaWNEYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBkeW5hbWljRGF0ZVN0cmluZyA9IGR5bmFtaWNEYXRlLnRvR01UU3RyaW5nKCk7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PntkeW5hbWljRGF0ZVN0cmluZ30gKGRpbsOibWljbyk8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+e3Byb3BzLnN0YXRpY0RhdGVTdHJpbmd9IChlc3TDoXRpY28pPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCl7XG4gICAgY29uc3Qgc3RhdGljRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3Qgc3RhdGljRGF0ZVN0cmluZyA9IHN0YXRpY0RhdGUudG9HTVRTdHJpbmcoKTtcblxuICAgIHJldHVybntcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHN0YXRpY0RhdGVTdHJpbmdcbiAgICAgICAgfSxcbiAgICAgICAgcmV2YWxpZGF0ZTogMVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVtcG87Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/tempo.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });