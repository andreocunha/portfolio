webpackHotUpdate_N_E("pages/projetos",{

/***/ "./src/pages/projetos.js":
/*!*******************************!*\
  !*** ./src/pages/projetos.js ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_cards_cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/cards/cards */ \"./src/components/cards/cards.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.css */ \"./src/pages/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\nvar _jsxFileName = \"/Users/andre/Documents/portfolio/src/pages/projetos.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Projetos(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      results = _useState[0],\n      setResults = _useState[1];\n\n  var listRepo = props.dados.map(function (repo) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_cards_cards__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      name: repo.name,\n      description: repo.description,\n      full_name: repo.full_name,\n      html_url: repo.html_url\n    }, repo.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }, _this);\n  });\n\n  function filterItems(query) {\n    return listRepo.filter(function (repo) {\n      return repo.props.name.toLowerCase().indexOf(query.toLowerCase()) > -1;\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-2643635011\" + \" \" + (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.container || \"\"),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"title\", {\n        className: \"jsx-2643635011\",\n        children: \"Projetos\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"link\", {\n        rel: \"shortcut icon\",\n        href: \"assets/favicon_projects.jpg\",\n        type: \"image/jpg\",\n        className: \"jsx-2643635011\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"meta\", {\n        name: \"google-site-verification\",\n        content: \"U6DsQMemxSJvuZTy72uJMzLlgFJuRpxq97C-DSQl624\",\n        className: \"jsx-2643635011\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n      placeholder: \"Pesquisar\",\n      onChange: /*#__PURE__*/function () {\n        var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n          var value;\n          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  value = e.currentTarget.value;\n                  setResults(filterItems(value));\n\n                case 2:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee);\n        }));\n\n        return function (_x) {\n          return _ref.apply(this, arguments);\n        };\n      }(),\n      className: \"jsx-2643635011\" + \" \" + (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.input || \"\")\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-2643635011\" + \" \" + (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.containerProjects || \"\"),\n      children: results !== '' ? results : listRepo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"2643635011\",\n      children: \"body{margin:0;padding:0;background:#396D47;background-image:url(\\\"/assets/background_projects.jpg\\\");background-size:cover;background-repeat:no-repeat;background-attachment:scroll;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZS9Eb2N1bWVudHMvcG9ydGZvbGlvL3NyYy9wYWdlcy9wcm9qZXRvcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRGlCLEFBRzhCLFNBQ0MsVUFDUyxtQkFDcUMsd0RBQ2xDLHNCQUNNLDRCQUNDLDZCQUNqQyIsImZpbGUiOiIvVXNlcnMvYW5kcmUvRG9jdW1lbnRzL3BvcnRmb2xpby9zcmMvcGFnZXMvcHJvamV0b3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGFwaSBmcm9tICcuLi9zZXJ2aWNlcy9hcGknO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJkcy9jYXJkcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5cbmZ1bmN0aW9uIFByb2pldG9zKHByb3BzKXtcbiAgICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZSgnJylcblxuICAgIGNvbnN0IGxpc3RSZXBvID0gKHByb3BzLmRhZG9zKS5tYXAoKHJlcG8pID0+XG4gICAgICAgIDxDYXJkIFxuICAgICAgICAgICAga2V5PXtyZXBvLmlkfSBcbiAgICAgICAgICAgIG5hbWU9e3JlcG8ubmFtZX0gXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17cmVwby5kZXNjcmlwdGlvbn0gXG4gICAgICAgICAgICBmdWxsX25hbWU9e3JlcG8uZnVsbF9uYW1lfVxuICAgICAgICAgICAgaHRtbF91cmw9e3JlcG8uaHRtbF91cmx9XG4gICAgICAgIC8+XG4gICAgKTtcbiAgICBcblxuICAgIGZ1bmN0aW9uIGZpbHRlckl0ZW1zKHF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiBsaXN0UmVwby5maWx0ZXIoZnVuY3Rpb24ocmVwbykge1xuICAgICAgICAgICAgcmV0dXJuIChyZXBvLnByb3BzLm5hbWUpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihxdWVyeS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5Qcm9qZXRvczwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCJhc3NldHMvZmF2aWNvbl9wcm9qZWN0cy5qcGdcIiB0eXBlPVwiaW1hZ2UvanBnXCIvPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJnb29nbGUtc2l0ZS12ZXJpZmljYXRpb25cIiBjb250ZW50PVwiVTZEc1FNZW14U0p2dVpUeTcydUpNekxsZ0ZKdVJweHE5N0MtRFNRbDYyNFwiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBlc3F1aXNhclwiIFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXthc3luYyAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSBlLmN1cnJlbnRUYXJnZXRcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0cyhmaWx0ZXJJdGVtcyh2YWx1ZSkpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lclByb2plY3RzfT5cbiAgICAgICAgICAgICAgICB7cmVzdWx0cyAhPT0gJycgPyByZXN1bHRzIDogbGlzdFJlcG99XG4gICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzOTZENDc7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvYmFja2dyb3VuZF9wcm9qZWN0cy5qcGdcIik7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCl7XG4gICAgbGV0IGRhZG9zID0ge31cblxuICAgIGF3YWl0IGFwaS5nZXQoJy91c2Vycy9hbmRyZW9jdW5oYS9yZXBvcz9wZXJfcGFnZT0xMDAnKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgZGFkb3MgPSByZXNwb25zZS5kYXRhXG4gICAgfSk7XG5cbiAgICByZXR1cm57XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBkYWRvc1xuICAgICAgICB9LFxuICAgICAgICByZXZhbGlkYXRlOiAxMFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamV0b3M7Il19 */\\n/*@ sourceURL=/Users/andre/Documents/portfolio/src/pages/projetos.js */\"\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Projetos, \"2zPHZxlcrpmZG8iaTN48MmQYHz0=\");\n\n_c = Projetos;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projetos);\n\nvar _c;\n\n$RefreshReg$(_c, \"Projetos\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2pldG9zLmpzP2NiMmIiXSwibmFtZXMiOlsiUHJvamV0b3MiLCJwcm9wcyIsInVzZVN0YXRlIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJsaXN0UmVwbyIsImRhZG9zIiwibWFwIiwicmVwbyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImZ1bGxfbmFtZSIsImh0bWxfdXJsIiwiaWQiLCJmaWx0ZXJJdGVtcyIsInF1ZXJ5IiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwic3R5bGVzIiwiY29udGFpbmVyIiwiZSIsInZhbHVlIiwiY3VycmVudFRhcmdldCIsImlucHV0IiwiY29udGFpbmVyUHJvamVjdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsRUFBRCxDQURsQjtBQUFBLE1BQ2JDLE9BRGE7QUFBQSxNQUNKQyxVQURJOztBQUdwQixNQUFNQyxRQUFRLEdBQUlKLEtBQUssQ0FBQ0ssS0FBUCxDQUFjQyxHQUFkLENBQWtCLFVBQUNDLElBQUQ7QUFBQSx3QkFDL0IscUVBQUMsK0RBQUQ7QUFFSSxVQUFJLEVBQUVBLElBQUksQ0FBQ0MsSUFGZjtBQUdJLGlCQUFXLEVBQUVELElBQUksQ0FBQ0UsV0FIdEI7QUFJSSxlQUFTLEVBQUVGLElBQUksQ0FBQ0csU0FKcEI7QUFLSSxjQUFRLEVBQUVILElBQUksQ0FBQ0k7QUFMbkIsT0FDU0osSUFBSSxDQUFDSyxFQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEK0I7QUFBQSxHQUFsQixDQUFqQjs7QUFXQSxXQUFTQyxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUN4QixXQUFPVixRQUFRLENBQUNXLE1BQVQsQ0FBZ0IsVUFBU1IsSUFBVCxFQUFlO0FBQ2xDLGFBQVFBLElBQUksQ0FBQ1AsS0FBTCxDQUFXUSxJQUFaLENBQWtCUSxXQUFsQixHQUFnQ0MsT0FBaEMsQ0FBd0NILEtBQUssQ0FBQ0UsV0FBTixFQUF4QyxJQUErRCxDQUFDLENBQXZFO0FBQ0gsS0FGTSxDQUFQO0FBSUg7O0FBRUQsc0JBQ0k7QUFBQSx5Q0FBZ0JFLHlEQUFNLENBQUNDLFNBQXZCO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFNLFdBQUcsRUFBQyxlQUFWO0FBQTBCLFlBQUksRUFBQyw2QkFBL0I7QUFBNkQsWUFBSSxFQUFDLFdBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSTtBQUFNLFlBQUksRUFBQywwQkFBWDtBQUFzQyxlQUFPLEVBQUMsNkNBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFPSTtBQUNJLGlCQUFXLEVBQUMsV0FEaEI7QUFFSSxjQUFRO0FBQUEsb01BQUUsaUJBQU9DLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VDLHVCQURGLEdBQ1lELENBQUMsQ0FBQ0UsYUFEZCxDQUNFRCxLQURGO0FBRU5sQiw0QkFBVSxDQUFDVSxXQUFXLENBQUNRLEtBQUQsQ0FBWixDQUFWOztBQUZNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGWjtBQUFBLDJDQU1lSCx5REFBTSxDQUFDSyxLQU50QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSixlQWVJO0FBQUEsMkNBQWdCTCx5REFBTSxDQUFDTSxpQkFBdkI7QUFBQSxnQkFDS3RCLE9BQU8sS0FBSyxFQUFaLEdBQWlCQSxPQUFqQixHQUEyQkU7QUFEaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUNIOztHQXhEUUwsUTs7S0FBQUEsUTs7QUEwRU1BLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3Byb2pldG9zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBhcGkgZnJvbSAnLi4vc2VydmljZXMvYXBpJztcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZHMvY2FyZHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuXG5mdW5jdGlvbiBQcm9qZXRvcyhwcm9wcyl7XG4gICAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoJycpXG5cbiAgICBjb25zdCBsaXN0UmVwbyA9IChwcm9wcy5kYWRvcykubWFwKChyZXBvKSA9PlxuICAgICAgICA8Q2FyZCBcbiAgICAgICAgICAgIGtleT17cmVwby5pZH0gXG4gICAgICAgICAgICBuYW1lPXtyZXBvLm5hbWV9IFxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3JlcG8uZGVzY3JpcHRpb259IFxuICAgICAgICAgICAgZnVsbF9uYW1lPXtyZXBvLmZ1bGxfbmFtZX1cbiAgICAgICAgICAgIGh0bWxfdXJsPXtyZXBvLmh0bWxfdXJsfVxuICAgICAgICAvPlxuICAgICk7XG4gICAgXG5cbiAgICBmdW5jdGlvbiBmaWx0ZXJJdGVtcyhxdWVyeSkge1xuICAgICAgICByZXR1cm4gbGlzdFJlcG8uZmlsdGVyKGZ1bmN0aW9uKHJlcG8pIHtcbiAgICAgICAgICAgIHJldHVybiAocmVwby5wcm9wcy5uYW1lKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnkudG9Mb3dlckNhc2UoKSkgPiAtMTtcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+UHJvamV0b3M8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiYXNzZXRzL2Zhdmljb25fcHJvamVjdHMuanBnXCIgdHlwZT1cImltYWdlL2pwZ1wiLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZ29vZ2xlLXNpdGUtdmVyaWZpY2F0aW9uXCIgY29udGVudD1cIlU2RHNRTWVteFNKdnVaVHk3MnVKTXpMbGdGSnVScHhxOTdDLURTUWw2MjRcIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQZXNxdWlzYXJcIiBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17YXN5bmMgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdHMoZmlsdGVySXRlbXModmFsdWUpKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJQcm9qZWN0c30+XG4gICAgICAgICAgICAgICAge3Jlc3VsdHMgIT09ICcnID8gcmVzdWx0cyA6IGxpc3RSZXBvfVxuICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzk2RDQ3O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2JhY2tncm91bmRfcHJvamVjdHMuanBnXCIpO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xuICAgIGxldCBkYWRvcyA9IHt9XG5cbiAgICBhd2FpdCBhcGkuZ2V0KCcvdXNlcnMvYW5kcmVvY3VuaGEvcmVwb3M/cGVyX3BhZ2U9MTAwJykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIGRhZG9zID0gcmVzcG9uc2UuZGF0YVxuICAgIH0pO1xuXG4gICAgcmV0dXJue1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZGFkb3NcbiAgICAgICAgfSxcbiAgICAgICAgcmV2YWxpZGF0ZTogMTBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2pldG9zOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/projetos.js\n");

/***/ })

})