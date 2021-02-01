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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.js\");\n\nvar _jsxFileName = \"/Users/andre/Documents/portfolio/src/pages/tempo.js\";\n// import React, { useEffect } from 'react';\n\n\nfunction Tempo(props) {\n  const dynamicDate = new Date();\n  const dynamicDateString = dynamicDate.toGMTString();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [dynamicDateString, \" (din\\xE2mico)\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [props.staticDateString, \" (est\\xE1tico)\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [props.dados.name, \" (dados)\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        alt: \"imagem perfil\",\n        src: props.dados.avatar_url\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, this);\n}\n\nasync function getStaticProps() {\n  const staticDate = new Date();\n  const staticDateString = staticDate.toGMTString();\n  let dados = {};\n  await _services_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get('/users/andreocunha').then(response => {\n    // console.log(response.data)\n    dados = response.data;\n  });\n  return {\n    props: {\n      staticDateString,\n      dados\n    },\n    revalidate: 1\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tempo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdGVtcG8uanM/ZGYyZSJdLCJuYW1lcyI6WyJUZW1wbyIsInByb3BzIiwiZHluYW1pY0RhdGUiLCJEYXRlIiwiZHluYW1pY0RhdGVTdHJpbmciLCJ0b0dNVFN0cmluZyIsInN0YXRpY0RhdGVTdHJpbmciLCJkYWRvcyIsIm5hbWUiLCJhdmF0YXJfdXJsIiwiZ2V0U3RhdGljUHJvcHMiLCJzdGF0aWNEYXRlIiwiYXBpIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInJldmFsaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFxQjtBQUNqQixRQUFNQyxXQUFXLEdBQUcsSUFBSUMsSUFBSixFQUFwQjtBQUNBLFFBQU1DLGlCQUFpQixHQUFHRixXQUFXLENBQUNHLFdBQVosRUFBMUI7QUFFQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUEsaUJBQU1ELGlCQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQSxpQkFBTUgsS0FBSyxDQUFDSyxnQkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJO0FBQUEsaUJBQU1MLEtBQUssQ0FBQ00sS0FBTixDQUFZQyxJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQUlJO0FBQUEsNkJBQ0k7QUFBSyxXQUFHLEVBQUMsZUFBVDtBQUF5QixXQUFHLEVBQUVQLEtBQUssQ0FBQ00sS0FBTixDQUFZRTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUg7O0FBRU0sZUFBZUMsY0FBZixHQUErQjtBQUNsQyxRQUFNQyxVQUFVLEdBQUcsSUFBSVIsSUFBSixFQUFuQjtBQUNBLFFBQU1HLGdCQUFnQixHQUFHSyxVQUFVLENBQUNOLFdBQVgsRUFBekI7QUFDQSxNQUFJRSxLQUFLLEdBQUcsRUFBWjtBQUVBLFFBQU1LLHFEQUFHLENBQUNDLEdBQUosQ0FBUSxvQkFBUixFQUE4QkMsSUFBOUIsQ0FBbUNDLFFBQVEsSUFBSTtBQUNqRDtBQUNBUixTQUFLLEdBQUdRLFFBQVEsQ0FBQ0MsSUFBakI7QUFDSCxHQUhLLENBQU47QUFNQSxTQUFNO0FBQ0ZmLFNBQUssRUFBRTtBQUNISyxzQkFERztBQUVIQztBQUZHLEtBREw7QUFLRlUsY0FBVSxFQUFFO0FBTFYsR0FBTjtBQU9IO0FBRWNqQixvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy90ZW1wby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXBpIGZyb20gJy4uL3NlcnZpY2VzL2FwaSc7XG5cbmZ1bmN0aW9uIFRlbXBvKHByb3BzKXtcbiAgICBjb25zdCBkeW5hbWljRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZHluYW1pY0RhdGVTdHJpbmcgPSBkeW5hbWljRGF0ZS50b0dNVFN0cmluZygpO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj57ZHluYW1pY0RhdGVTdHJpbmd9IChkaW7Dom1pY28pPC9kaXY+XG4gICAgICAgICAgICA8ZGl2Pntwcm9wcy5zdGF0aWNEYXRlU3RyaW5nfSAoZXN0w6F0aWNvKTwvZGl2PlxuICAgICAgICAgICAgPGRpdj57cHJvcHMuZGFkb3MubmFtZX0gKGRhZG9zKTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW1nIGFsdD1cImltYWdlbSBwZXJmaWxcIiBzcmM9e3Byb3BzLmRhZG9zLmF2YXRhcl91cmx9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xuICAgIGNvbnN0IHN0YXRpY0RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHN0YXRpY0RhdGVTdHJpbmcgPSBzdGF0aWNEYXRlLnRvR01UU3RyaW5nKCk7XG4gICAgbGV0IGRhZG9zID0ge31cblxuICAgIGF3YWl0IGFwaS5nZXQoJy91c2Vycy9hbmRyZW9jdW5oYScpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuICAgICAgICBkYWRvcyA9IHJlc3BvbnNlLmRhdGFcbiAgICB9KTtcbiAgICBcblxuICAgIHJldHVybntcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHN0YXRpY0RhdGVTdHJpbmcsXG4gICAgICAgICAgICBkYWRvc1xuICAgICAgICB9LFxuICAgICAgICByZXZhbGlkYXRlOiAxXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZW1wbzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/tempo.js\n");

/***/ }),

/***/ "./src/services/api.js":
/*!*****************************!*\
  !*** ./src/services/api.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: 'https://api.github.com'\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (api);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvYXBpLmpzPzc0MjQiXSwibmFtZXMiOlsiYXBpIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLEdBQUcsR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQ3RCQyxTQUFPLEVBQUU7QUFEYSxDQUFiLENBQVo7QUFJZUgsa0VBQWYiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgIGJhc2VVUkw6ICdodHRwczovL2FwaS5naXRodWIuY29tJ1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/api.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

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