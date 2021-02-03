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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.js\");\n/* harmony import */ var _components_cards_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cards/cards */ \"./src/components/cards/cards.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.css */ \"./src/pages/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/andre/Documents/portfolio/src/pages/projetos.js\";\n\n\n\n\n\nfunction Projetos(props) {\n  const {\n    0: results,\n    1: setResults\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const listRepo = props.dados.map(repo => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_cards_cards__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    name: repo.name,\n    description: repo.description,\n    full_name: repo.full_name,\n    html_url: repo.html_url\n  }, repo.id, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }, this));\n\n  function filterItems(query) {\n    return listRepo.filter(function (repo) {\n      return repo.props.name.toLowerCase().indexOf(query.toLowerCase()) > -1;\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      placeholder: \"Pesquisar\",\n      onChange: async e => {\n        const {\n          value\n        } = e.currentTarget;\n        setResults(filterItems(value));\n      },\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.containerProjects,\n      children: results !== '' ? results : listRepo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, this);\n}\n\nasync function getStaticProps() {\n  let dados = {};\n  await _services_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get('/users/andreocunha/repos?per_page=100').then(response => {\n    // console.log(response.data)\n    dados = response.data;\n  });\n  return {\n    props: {\n      dados\n    },\n    revalidate: 10\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projetos);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvamV0b3MuanM/Y2IyYiJdLCJuYW1lcyI6WyJQcm9qZXRvcyIsInByb3BzIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJ1c2VTdGF0ZSIsImxpc3RSZXBvIiwiZGFkb3MiLCJtYXAiLCJyZXBvIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiZnVsbF9uYW1lIiwiaHRtbF91cmwiLCJpZCIsImZpbHRlckl0ZW1zIiwicXVlcnkiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJzdHlsZXMiLCJjb250YWluZXIiLCJlIiwidmFsdWUiLCJjdXJyZW50VGFyZ2V0IiwiaW5wdXQiLCJjb250YWluZXJQcm9qZWN0cyIsImdldFN0YXRpY1Byb3BzIiwiYXBpIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInJldmFsaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXdCO0FBQ3BCLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQyxFQUFELENBQXRDO0FBRUEsUUFBTUMsUUFBUSxHQUFJSixLQUFLLENBQUNLLEtBQVAsQ0FBY0MsR0FBZCxDQUFtQkMsSUFBRCxpQkFDL0IscUVBQUMsK0RBQUQ7QUFFSSxRQUFJLEVBQUVBLElBQUksQ0FBQ0MsSUFGZjtBQUdJLGVBQVcsRUFBRUQsSUFBSSxDQUFDRSxXQUh0QjtBQUlJLGFBQVMsRUFBRUYsSUFBSSxDQUFDRyxTQUpwQjtBQUtJLFlBQVEsRUFBRUgsSUFBSSxDQUFDSTtBQUxuQixLQUNTSixJQUFJLENBQUNLLEVBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURhLENBQWpCOztBQVdBLFdBQVNDLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQ3hCLFdBQU9WLFFBQVEsQ0FBQ1csTUFBVCxDQUFnQixVQUFTUixJQUFULEVBQWU7QUFDbEMsYUFBUUEsSUFBSSxDQUFDUCxLQUFMLENBQVdRLElBQVosQ0FBa0JRLFdBQWxCLEdBQWdDQyxPQUFoQyxDQUF3Q0gsS0FBSyxDQUFDRSxXQUFOLEVBQXhDLElBQStELENBQUMsQ0FBdkU7QUFDSCxLQUZNLENBQVA7QUFJSDs7QUFFRCxzQkFDSTtBQUFLLGFBQVMsRUFBRUUseURBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDSTtBQUNJLGlCQUFXLEVBQUMsV0FEaEI7QUFFSSxjQUFRLEVBQUUsTUFBT0MsQ0FBUCxJQUFhO0FBQ25CLGNBQU07QUFBRUM7QUFBRixZQUFZRCxDQUFDLENBQUNFLGFBQXBCO0FBQ0FwQixrQkFBVSxDQUFDVyxXQUFXLENBQUNRLEtBQUQsQ0FBWixDQUFWO0FBQ0gsT0FMTDtBQU1JLGVBQVMsRUFBRUgseURBQU0sQ0FBQ0s7QUFOdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBU0k7QUFBSyxlQUFTLEVBQUVMLHlEQUFNLENBQUNNLGlCQUF2QjtBQUFBLGdCQUNLdkIsT0FBTyxLQUFLLEVBQVosR0FBaUJBLE9BQWpCLEdBQTJCRztBQURoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnQkg7O0FBRU0sZUFBZXFCLGNBQWYsR0FBK0I7QUFDbEMsTUFBSXBCLEtBQUssR0FBRyxFQUFaO0FBRUEsUUFBTXFCLHFEQUFHLENBQUNDLEdBQUosQ0FBUSx1Q0FBUixFQUFpREMsSUFBakQsQ0FBc0RDLFFBQVEsSUFBSTtBQUNwRTtBQUNBeEIsU0FBSyxHQUFHd0IsUUFBUSxDQUFDQyxJQUFqQjtBQUNILEdBSEssQ0FBTjtBQUtBLFNBQU07QUFDRjlCLFNBQUssRUFBRTtBQUNISztBQURHLEtBREw7QUFJRjBCLGNBQVUsRUFBRTtBQUpWLEdBQU47QUFNSDtBQUVjaEMsdUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvamV0b3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGFwaSBmcm9tICcuLi9zZXJ2aWNlcy9hcGknO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJkcy9jYXJkcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnXG5cblxuZnVuY3Rpb24gUHJvamV0b3MocHJvcHMpe1xuICAgIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgY29uc3QgbGlzdFJlcG8gPSAocHJvcHMuZGFkb3MpLm1hcCgocmVwbykgPT5cbiAgICAgICAgPENhcmQgXG4gICAgICAgICAgICBrZXk9e3JlcG8uaWR9IFxuICAgICAgICAgICAgbmFtZT17cmVwby5uYW1lfSBcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtyZXBvLmRlc2NyaXB0aW9ufSBcbiAgICAgICAgICAgIGZ1bGxfbmFtZT17cmVwby5mdWxsX25hbWV9XG4gICAgICAgICAgICBodG1sX3VybD17cmVwby5odG1sX3VybH1cbiAgICAgICAgLz5cbiAgICApO1xuICAgIFxuXG4gICAgZnVuY3Rpb24gZmlsdGVySXRlbXMocXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RSZXBvLmZpbHRlcihmdW5jdGlvbihyZXBvKSB7XG4gICAgICAgICAgICByZXR1cm4gKHJlcG8ucHJvcHMubmFtZSkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpID4gLTE7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGVzcXVpc2FyXCIgXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2FzeW5jIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUuY3VycmVudFRhcmdldFxuICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHRzKGZpbHRlckl0ZW1zKHZhbHVlKSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyUHJvamVjdHN9PlxuICAgICAgICAgICAgICAgIHtyZXN1bHRzICE9PSAnJyA/IHJlc3VsdHMgOiBsaXN0UmVwb31cbiAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCl7XG4gICAgbGV0IGRhZG9zID0ge31cblxuICAgIGF3YWl0IGFwaS5nZXQoJy91c2Vycy9hbmRyZW9jdW5oYS9yZXBvcz9wZXJfcGFnZT0xMDAnKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgZGFkb3MgPSByZXNwb25zZS5kYXRhXG4gICAgfSk7XG5cbiAgICByZXR1cm57XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBkYWRvc1xuICAgICAgICB9LFxuICAgICAgICByZXZhbGlkYXRlOiAxMFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamV0b3M7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/projetos.js\n");

/***/ }),

/***/ "./src/pages/styles.module.css":
/*!*************************************!*\
  !*** ./src/pages/styles.module.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"styles_container__3vha5\",\n\t\"containerProjects\": \"styles_containerProjects__2gcUR\",\n\t\"input\": \"styles_input__3bdO0\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc3R5bGVzLm1vZHVsZS5jc3M/NTk4ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvcGFnZXMvc3R5bGVzLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJzdHlsZXNfY29udGFpbmVyX18zdmhhNVwiLFxuXHRcImNvbnRhaW5lclByb2plY3RzXCI6IFwic3R5bGVzX2NvbnRhaW5lclByb2plY3RzX18yZ2NVUlwiLFxuXHRcImlucHV0XCI6IFwic3R5bGVzX2lucHV0X18zYmRPMFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/styles.module.css\n");

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

/***/ })

/******/ });