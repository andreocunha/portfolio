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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/projetos.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/cards/cards.js":
/*!***************************************!*\
  !*** ./src/components/cards/cards.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.css */ \"./src/components/cards/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/andre/Documents/portfolio/src/components/cards/cards.js\";\n\n\nfunction Card(props) {\n  const reloadSrc = e => {\n    e.target.src = \"assets/project.jpg\";\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: `https://raw.githubusercontent.com/${props.full_name}/master/exemplo.jpg`,\n      alt: \"Imagem do reposit\\xF3rio\",\n      style: {\n        width: '100%'\n      },\n      onError: reloadSrc\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.name,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n          children: props.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 45\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.description,\n        children: props.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.githubButtonArea,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: props.html_url,\n        target: \"_blank\",\n        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.githubButton,\n        children: \"GITHUB\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkcy9jYXJkcy5qcz81ZTcyIl0sIm5hbWVzIjpbIkNhcmQiLCJwcm9wcyIsInJlbG9hZFNyYyIsImUiLCJ0YXJnZXQiLCJzcmMiLCJzdHlsZXMiLCJjYXJkIiwiZnVsbF9uYW1lIiwid2lkdGgiLCJjb250YWluZXIiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJnaXRodWJCdXR0b25BcmVhIiwiaHRtbF91cmwiLCJnaXRodWJCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFDakIsUUFBTUMsU0FBUyxHQUFHQyxDQUFDLElBQUk7QUFDbkJBLEtBQUMsQ0FBQ0MsTUFBRixDQUFTQyxHQUFULEdBQWUsb0JBQWY7QUFDSCxHQUZEOztBQUlBLHNCQUNJO0FBQUssYUFBUyxFQUFFQyx5REFBTSxDQUFDQyxJQUF2QjtBQUFBLDRCQUNJO0FBQ0ksU0FBRyxFQUFHLHFDQUFvQ04sS0FBSyxDQUFDTyxTQUFVLHFCQUQ5RDtBQUVJLFNBQUcsRUFBQywwQkFGUjtBQUdJLFdBQUssRUFBRTtBQUFFQyxhQUFLLEVBQUU7QUFBVCxPQUhYO0FBSUksYUFBTyxFQUFFUDtBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVFJO0FBQUssZUFBUyxFQUFFSSx5REFBTSxDQUFDSSxTQUF2QjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBRUoseURBQU0sQ0FBQ0ssSUFBdEI7QUFBQSwrQkFBNEI7QUFBQSxvQkFBSVYsS0FBSyxDQUFDVTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBRyxpQkFBUyxFQUFFTCx5REFBTSxDQUFDTSxXQUFyQjtBQUFBLGtCQUFtQ1gsS0FBSyxDQUFDVztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkosZUFZSTtBQUFLLGVBQVMsRUFBRU4seURBQU0sQ0FBQ08sZ0JBQXZCO0FBQUEsNkJBQ0k7QUFBRyxZQUFJLEVBQUVaLEtBQUssQ0FBQ2EsUUFBZjtBQUF5QixjQUFNLEVBQUMsUUFBaEM7QUFBeUMsaUJBQVMsRUFBRVIseURBQU0sQ0FBQ1MsWUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtQkg7O0FBRWNmLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvY2FyZHMvY2FyZHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnXG5cbmZ1bmN0aW9uIENhcmQocHJvcHMpIHtcbiAgICBjb25zdCByZWxvYWRTcmMgPSBlID0+IHsgXG4gICAgICAgIGUudGFyZ2V0LnNyYyA9IFwiYXNzZXRzL3Byb2plY3QuanBnXCI7XG4gICAgfVxuICAgICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vJHtwcm9wcy5mdWxsX25hbWV9L21hc3Rlci9leGVtcGxvLmpwZ2B9XG4gICAgICAgICAgICAgICAgYWx0PVwiSW1hZ2VtIGRvIHJlcG9zaXTDs3Jpb1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICAgICAgICAgIG9uRXJyb3I9e3JlbG9hZFNyY31cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+PGI+e3Byb3BzLm5hbWV9PC9iPjwvaDQ+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259Pntwcm9wcy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2l0aHViQnV0dG9uQXJlYX0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17cHJvcHMuaHRtbF91cmx9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT17c3R5bGVzLmdpdGh1YkJ1dHRvbn0+R0lUSFVCPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/cards/cards.js\n");

/***/ }),

/***/ "./src/components/cards/styles.module.css":
/*!************************************************!*\
  !*** ./src/components/cards/styles.module.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"styles_card__2gucO\",\n\t\"container\": \"styles_container__JYMQQ\",\n\t\"name\": \"styles_name__2Et7U\",\n\t\"description\": \"styles_description__JH85g\",\n\t\"githubButtonArea\": \"styles_githubButtonArea__WpL3l\",\n\t\"githubButton\": \"styles_githubButton__SBcHV\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkcy9zdHlsZXMubW9kdWxlLmNzcz85Mjk3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2NhcmRzL3N0eWxlcy5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFwiOiBcInN0eWxlc19jYXJkX18yZ3VjT1wiLFxuXHRcImNvbnRhaW5lclwiOiBcInN0eWxlc19jb250YWluZXJfX0pZTVFRXCIsXG5cdFwibmFtZVwiOiBcInN0eWxlc19uYW1lX18yRXQ3VVwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwic3R5bGVzX2Rlc2NyaXB0aW9uX19KSDg1Z1wiLFxuXHRcImdpdGh1YkJ1dHRvbkFyZWFcIjogXCJzdHlsZXNfZ2l0aHViQnV0dG9uQXJlYV9fV3BMM2xcIixcblx0XCJnaXRodWJCdXR0b25cIjogXCJzdHlsZXNfZ2l0aHViQnV0dG9uX19TQmNIVlwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/cards/styles.module.css\n");

/***/ }),

/***/ "./src/pages/projetos.js":
/*!*******************************!*\
  !*** ./src/pages/projetos.js ***!
  \*******************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.js\");\n/* harmony import */ var _components_cards_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/cards/cards */ \"./src/components/cards/cards.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.css */ \"./src/pages/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/andre/Documents/portfolio/src/pages/projetos.js\";\n\n\n\n\n\n\n\nfunction Projetos(props) {\n  const {\n    0: results,\n    1: setResults\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('');\n  const listRepo = props.dados.map(repo => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_cards_cards__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    name: repo.name,\n    description: repo.description,\n    full_name: repo.full_name,\n    html_url: repo.html_url\n  }, repo.id, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 9\n  }, this));\n\n  function filterItems(query) {\n    return listRepo.filter(function (repo) {\n      return repo.props.name.toLowerCase().indexOf(query.toLowerCase()) > -1;\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-1392090186\" + \" \" + (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container || \"\"),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        className: \"jsx-1392090186\",\n        children: \"Projetos\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"shortcut icon\",\n        href: \"assets/favicon_projects.jpg\",\n        type: \"image/jpg\",\n        className: \"jsx-1392090186\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"google-site-verification\",\n        content: \"U6DsQMemxSJvuZTy72uJMzLlgFJuRpxq97C-DSQl624\",\n        className: \"jsx-1392090186\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      placeholder: \"Pesquisar\",\n      onChange: async e => {\n        const {\n          value\n        } = e.currentTarget;\n        setResults(filterItems(value));\n      },\n      className: \"jsx-1392090186\" + \" \" + (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.input || \"\")\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-1392090186\" + \" \" + (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.containerProjects || \"\"),\n      children: results !== '' ? results : listRepo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"1392090186\",\n      children: \"body{margin:0;padding:0;background:#396D47;background-image:url(\\\"/assets/background_projects.jpg\\\");background-size:cover;background-repeat:no-repeat;background-position:center;background-attachment:fixed;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZS9Eb2N1bWVudHMvcG9ydGZvbGlvL3NyYy9wYWdlcy9wcm9qZXRvcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRGlCLEFBRzhCLFNBQ0MsVUFDUyxtQkFDcUMsd0RBQ2xDLHNCQUNNLDRCQUNELDJCQUNDLDRCQUNoQyIsImZpbGUiOiIvVXNlcnMvYW5kcmUvRG9jdW1lbnRzL3BvcnRmb2xpby9zcmMvcGFnZXMvcHJvamV0b3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGFwaSBmcm9tICcuLi9zZXJ2aWNlcy9hcGknO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJkcy9jYXJkcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5cbmZ1bmN0aW9uIFByb2pldG9zKHByb3BzKXtcbiAgICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZSgnJylcblxuICAgIGNvbnN0IGxpc3RSZXBvID0gKHByb3BzLmRhZG9zKS5tYXAoKHJlcG8pID0+XG4gICAgICAgIDxDYXJkIFxuICAgICAgICAgICAga2V5PXtyZXBvLmlkfSBcbiAgICAgICAgICAgIG5hbWU9e3JlcG8ubmFtZX0gXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17cmVwby5kZXNjcmlwdGlvbn0gXG4gICAgICAgICAgICBmdWxsX25hbWU9e3JlcG8uZnVsbF9uYW1lfVxuICAgICAgICAgICAgaHRtbF91cmw9e3JlcG8uaHRtbF91cmx9XG4gICAgICAgIC8+XG4gICAgKTtcbiAgICBcblxuICAgIGZ1bmN0aW9uIGZpbHRlckl0ZW1zKHF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiBsaXN0UmVwby5maWx0ZXIoZnVuY3Rpb24ocmVwbykge1xuICAgICAgICAgICAgcmV0dXJuIChyZXBvLnByb3BzLm5hbWUpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihxdWVyeS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5Qcm9qZXRvczwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCJhc3NldHMvZmF2aWNvbl9wcm9qZWN0cy5qcGdcIiB0eXBlPVwiaW1hZ2UvanBnXCIvPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJnb29nbGUtc2l0ZS12ZXJpZmljYXRpb25cIiBjb250ZW50PVwiVTZEc1FNZW14U0p2dVpUeTcydUpNekxsZ0ZKdVJweHE5N0MtRFNRbDYyNFwiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBlc3F1aXNhclwiIFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXthc3luYyAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSBlLmN1cnJlbnRUYXJnZXRcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0cyhmaWx0ZXJJdGVtcyh2YWx1ZSkpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lclByb2plY3RzfT5cbiAgICAgICAgICAgICAgICB7cmVzdWx0cyAhPT0gJycgPyByZXN1bHRzIDogbGlzdFJlcG99XG4gICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzOTZENDc7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvYmFja2dyb3VuZF9wcm9qZWN0cy5qcGdcIik7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xuICAgIGxldCBkYWRvcyA9IHt9XG5cbiAgICBhd2FpdCBhcGkuZ2V0KCcvdXNlcnMvYW5kcmVvY3VuaGEvcmVwb3M/cGVyX3BhZ2U9MTAwJykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIGRhZG9zID0gcmVzcG9uc2UuZGF0YVxuICAgIH0pO1xuXG4gICAgcmV0dXJue1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZGFkb3NcbiAgICAgICAgfSxcbiAgICAgICAgcmV2YWxpZGF0ZTogMTBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2pldG9zOyJdfQ== */\\n/*@ sourceURL=/Users/andre/Documents/portfolio/src/pages/projetos.js */\"\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 9\n  }, this);\n}\n\nasync function getStaticProps() {\n  let dados = {};\n  await _services_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get('/users/andreocunha/repos?per_page=100').then(response => {\n    // console.log(response.data)\n    dados = response.data;\n  });\n  return {\n    props: {\n      dados\n    },\n    revalidate: 10\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projetos);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvamV0b3MuanM/Y2IyYiJdLCJuYW1lcyI6WyJQcm9qZXRvcyIsInByb3BzIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJ1c2VTdGF0ZSIsImxpc3RSZXBvIiwiZGFkb3MiLCJtYXAiLCJyZXBvIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiZnVsbF9uYW1lIiwiaHRtbF91cmwiLCJpZCIsImZpbHRlckl0ZW1zIiwicXVlcnkiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJzdHlsZXMiLCJjb250YWluZXIiLCJlIiwidmFsdWUiLCJjdXJyZW50VGFyZ2V0IiwiaW5wdXQiLCJjb250YWluZXJQcm9qZWN0cyIsImdldFN0YXRpY1Byb3BzIiwiYXBpIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInJldmFsaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF3QjtBQUNwQixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUMsRUFBRCxDQUF0QztBQUVBLFFBQU1DLFFBQVEsR0FBSUosS0FBSyxDQUFDSyxLQUFQLENBQWNDLEdBQWQsQ0FBbUJDLElBQUQsaUJBQy9CLHFFQUFDLCtEQUFEO0FBRUksUUFBSSxFQUFFQSxJQUFJLENBQUNDLElBRmY7QUFHSSxlQUFXLEVBQUVELElBQUksQ0FBQ0UsV0FIdEI7QUFJSSxhQUFTLEVBQUVGLElBQUksQ0FBQ0csU0FKcEI7QUFLSSxZQUFRLEVBQUVILElBQUksQ0FBQ0k7QUFMbkIsS0FDU0osSUFBSSxDQUFDSyxFQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEYSxDQUFqQjs7QUFXQSxXQUFTQyxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUN4QixXQUFPVixRQUFRLENBQUNXLE1BQVQsQ0FBZ0IsVUFBU1IsSUFBVCxFQUFlO0FBQ2xDLGFBQVFBLElBQUksQ0FBQ1AsS0FBTCxDQUFXUSxJQUFaLENBQWtCUSxXQUFsQixHQUFnQ0MsT0FBaEMsQ0FBd0NILEtBQUssQ0FBQ0UsV0FBTixFQUF4QyxJQUErRCxDQUFDLENBQXZFO0FBQ0gsS0FGTSxDQUFQO0FBSUg7O0FBRUQsc0JBQ0k7QUFBQSx5Q0FBZ0JFLHlEQUFNLENBQUNDLFNBQXZCO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFNLFdBQUcsRUFBQyxlQUFWO0FBQTBCLFlBQUksRUFBQyw2QkFBL0I7QUFBNkQsWUFBSSxFQUFDLFdBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSTtBQUFNLFlBQUksRUFBQywwQkFBWDtBQUFzQyxlQUFPLEVBQUMsNkNBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFPSTtBQUNJLGlCQUFXLEVBQUMsV0FEaEI7QUFFSSxjQUFRLEVBQUUsTUFBT0MsQ0FBUCxJQUFhO0FBQ25CLGNBQU07QUFBRUM7QUFBRixZQUFZRCxDQUFDLENBQUNFLGFBQXBCO0FBQ0FwQixrQkFBVSxDQUFDVyxXQUFXLENBQUNRLEtBQUQsQ0FBWixDQUFWO0FBQ0gsT0FMTDtBQUFBLDJDQU1lSCx5REFBTSxDQUFDSyxLQU50QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSixlQWVJO0FBQUEsMkNBQWdCTCx5REFBTSxDQUFDTSxpQkFBdkI7QUFBQSxnQkFDS3ZCLE9BQU8sS0FBSyxFQUFaLEdBQWlCQSxPQUFqQixHQUEyQkc7QUFEaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0NIOztBQUVNLGVBQWVxQixjQUFmLEdBQStCO0FBQ2xDLE1BQUlwQixLQUFLLEdBQUcsRUFBWjtBQUVBLFFBQU1xQixxREFBRyxDQUFDQyxHQUFKLENBQVEsdUNBQVIsRUFBaURDLElBQWpELENBQXNEQyxRQUFRLElBQUk7QUFDcEU7QUFDQXhCLFNBQUssR0FBR3dCLFFBQVEsQ0FBQ0MsSUFBakI7QUFDSCxHQUhLLENBQU47QUFLQSxTQUFNO0FBQ0Y5QixTQUFLLEVBQUU7QUFDSEs7QUFERyxLQURMO0FBSUYwQixjQUFVLEVBQUU7QUFKVixHQUFOO0FBTUg7QUFFY2hDLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3Byb2pldG9zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBhcGkgZnJvbSAnLi4vc2VydmljZXMvYXBpJztcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZHMvY2FyZHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuXG5mdW5jdGlvbiBQcm9qZXRvcyhwcm9wcyl7XG4gICAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoJycpXG5cbiAgICBjb25zdCBsaXN0UmVwbyA9IChwcm9wcy5kYWRvcykubWFwKChyZXBvKSA9PlxuICAgICAgICA8Q2FyZCBcbiAgICAgICAgICAgIGtleT17cmVwby5pZH0gXG4gICAgICAgICAgICBuYW1lPXtyZXBvLm5hbWV9IFxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3JlcG8uZGVzY3JpcHRpb259IFxuICAgICAgICAgICAgZnVsbF9uYW1lPXtyZXBvLmZ1bGxfbmFtZX1cbiAgICAgICAgICAgIGh0bWxfdXJsPXtyZXBvLmh0bWxfdXJsfVxuICAgICAgICAvPlxuICAgICk7XG4gICAgXG5cbiAgICBmdW5jdGlvbiBmaWx0ZXJJdGVtcyhxdWVyeSkge1xuICAgICAgICByZXR1cm4gbGlzdFJlcG8uZmlsdGVyKGZ1bmN0aW9uKHJlcG8pIHtcbiAgICAgICAgICAgIHJldHVybiAocmVwby5wcm9wcy5uYW1lKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnkudG9Mb3dlckNhc2UoKSkgPiAtMTtcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+UHJvamV0b3M8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiYXNzZXRzL2Zhdmljb25fcHJvamVjdHMuanBnXCIgdHlwZT1cImltYWdlL2pwZ1wiLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZ29vZ2xlLXNpdGUtdmVyaWZpY2F0aW9uXCIgY29udGVudD1cIlU2RHNRTWVteFNKdnVaVHk3MnVKTXpMbGdGSnVScHhxOTdDLURTUWw2MjRcIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQZXNxdWlzYXJcIiBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17YXN5bmMgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdHMoZmlsdGVySXRlbXModmFsdWUpKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJQcm9qZWN0c30+XG4gICAgICAgICAgICAgICAge3Jlc3VsdHMgIT09ICcnID8gcmVzdWx0cyA6IGxpc3RSZXBvfVxuICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzk2RDQ3O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2JhY2tncm91bmRfcHJvamVjdHMuanBnXCIpO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKXtcbiAgICBsZXQgZGFkb3MgPSB7fVxuXG4gICAgYXdhaXQgYXBpLmdldCgnL3VzZXJzL2FuZHJlb2N1bmhhL3JlcG9zP3Blcl9wYWdlPTEwMCcpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuICAgICAgICBkYWRvcyA9IHJlc3BvbnNlLmRhdGFcbiAgICB9KTtcblxuICAgIHJldHVybntcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGRhZG9zXG4gICAgICAgIH0sXG4gICAgICAgIHJldmFsaWRhdGU6IDEwXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZXRvczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/projetos.js\n");

/***/ }),

/***/ "./src/pages/styles.module.css":
/*!*************************************!*\
  !*** ./src/pages/styles.module.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"styles_container__3vha5\",\n\t\"containerProjects\": \"styles_containerProjects__2gcUR\",\n\t\"input\": \"styles_input__3bdO0\",\n\t\"mainContainer\": \"styles_mainContainer__aqj40\",\n\t\"cardPerfil\": \"styles_cardPerfil__1Bru9\",\n\t\"imgPerfil\": \"styles_imgPerfil__2nlrd\",\n\t\"buttonProjects\": \"styles_buttonProjects__jfX23\",\n\t\"animacaoBotao\": \"styles_animacaoBotao__2o8UU\",\n\t\"bgWrap\": \"styles_bgWrap__1hafM\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc3R5bGVzLm1vZHVsZS5jc3M/NTk4ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvcGFnZXMvc3R5bGVzLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJzdHlsZXNfY29udGFpbmVyX18zdmhhNVwiLFxuXHRcImNvbnRhaW5lclByb2plY3RzXCI6IFwic3R5bGVzX2NvbnRhaW5lclByb2plY3RzX18yZ2NVUlwiLFxuXHRcImlucHV0XCI6IFwic3R5bGVzX2lucHV0X18zYmRPMFwiLFxuXHRcIm1haW5Db250YWluZXJcIjogXCJzdHlsZXNfbWFpbkNvbnRhaW5lcl9fYXFqNDBcIixcblx0XCJjYXJkUGVyZmlsXCI6IFwic3R5bGVzX2NhcmRQZXJmaWxfXzFCcnU5XCIsXG5cdFwiaW1nUGVyZmlsXCI6IFwic3R5bGVzX2ltZ1BlcmZpbF9fMm5scmRcIixcblx0XCJidXR0b25Qcm9qZWN0c1wiOiBcInN0eWxlc19idXR0b25Qcm9qZWN0c19famZYMjNcIixcblx0XCJhbmltYWNhb0JvdGFvXCI6IFwic3R5bGVzX2FuaW1hY2FvQm90YW9fXzJvOFVVXCIsXG5cdFwiYmdXcmFwXCI6IFwic3R5bGVzX2JnV3JhcF9fMWhhZk1cIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/styles.module.css\n");

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });