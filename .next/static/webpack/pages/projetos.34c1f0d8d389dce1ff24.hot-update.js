webpackHotUpdate_N_E("pages/projetos",{

/***/ "./src/pages/projetos.js":
/*!*******************************!*\
  !*** ./src/pages/projetos.js ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_cards_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/cards/cards */ \"./src/components/cards/cards.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.css */ \"./src/pages/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _jsxFileName = \"/Users/andre/Documents/portfolio/src/pages/projetos.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Projetos(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      results = _useState[0],\n      setResults = _useState[1];\n\n  var listRepo = props.dados.map(function (repo) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_cards_cards__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      name: repo.name,\n      description: repo.description,\n      full_name: repo.full_name,\n      html_url: repo.html_url\n    }, repo.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }, _this);\n  });\n\n  function filterItems(query) {\n    return listRepo.filter(function (repo) {\n      return repo.props.name.toLowerCase().indexOf(query.toLowerCase()) > -1;\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n      placeholder: \"Pesquisar\",\n      onChange: /*#__PURE__*/function () {\n        var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n          var value;\n          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  value = e.currentTarget.value;\n                  setResults(filterItems(value));\n\n                case 2:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee);\n        }));\n\n        return function (_x) {\n          return _ref.apply(this, arguments);\n        };\n      }()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.containerProjects,\n      children: results !== '' ? results : listRepo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Projetos, \"2zPHZxlcrpmZG8iaTN48MmQYHz0=\");\n\n_c = Projetos;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projetos);\n\nvar _c;\n\n$RefreshReg$(_c, \"Projetos\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2pldG9zLmpzP2NiMmIiXSwibmFtZXMiOlsiUHJvamV0b3MiLCJwcm9wcyIsInVzZVN0YXRlIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJsaXN0UmVwbyIsImRhZG9zIiwibWFwIiwicmVwbyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImZ1bGxfbmFtZSIsImh0bWxfdXJsIiwiaWQiLCJmaWx0ZXJJdGVtcyIsInF1ZXJ5IiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwic3R5bGVzIiwiY29udGFpbmVyIiwiZSIsInZhbHVlIiwiY3VycmVudFRhcmdldCIsImNvbnRhaW5lclByb2plY3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUdBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsRUFBRCxDQURsQjtBQUFBLE1BQ2JDLE9BRGE7QUFBQSxNQUNKQyxVQURJOztBQUdwQixNQUFNQyxRQUFRLEdBQUlKLEtBQUssQ0FBQ0ssS0FBUCxDQUFjQyxHQUFkLENBQWtCLFVBQUNDLElBQUQ7QUFBQSx3QkFDL0IscUVBQUMsK0RBQUQ7QUFFSSxVQUFJLEVBQUVBLElBQUksQ0FBQ0MsSUFGZjtBQUdJLGlCQUFXLEVBQUVELElBQUksQ0FBQ0UsV0FIdEI7QUFJSSxlQUFTLEVBQUVGLElBQUksQ0FBQ0csU0FKcEI7QUFLSSxjQUFRLEVBQUVILElBQUksQ0FBQ0k7QUFMbkIsT0FDU0osSUFBSSxDQUFDSyxFQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEK0I7QUFBQSxHQUFsQixDQUFqQjs7QUFXQSxXQUFTQyxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUN4QixXQUFPVixRQUFRLENBQUNXLE1BQVQsQ0FBZ0IsVUFBU1IsSUFBVCxFQUFlO0FBQ2xDLGFBQVFBLElBQUksQ0FBQ1AsS0FBTCxDQUFXUSxJQUFaLENBQWtCUSxXQUFsQixHQUFnQ0MsT0FBaEMsQ0FBd0NILEtBQUssQ0FBQ0UsV0FBTixFQUF4QyxJQUErRCxDQUFDLENBQXZFO0FBQ0gsS0FGTSxDQUFQO0FBSUg7O0FBRUQsc0JBQ0k7QUFBSyxhQUFTLEVBQUVFLHlEQUFNLENBQUNDLFNBQXZCO0FBQUEsNEJBQ0k7QUFDSSxpQkFBVyxFQUFDLFdBRGhCO0FBRUksY0FBUTtBQUFBLG9NQUFFLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQyx1QkFERixHQUNZRCxDQUFDLENBQUNFLGFBRGQsQ0FDRUQsS0FERjtBQUVObEIsNEJBQVUsQ0FBQ1UsV0FBVyxDQUFDUSxLQUFELENBQVosQ0FBVjs7QUFGTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBUUk7QUFBSyxlQUFTLEVBQUVILHlEQUFNLENBQUNLLGlCQUF2QjtBQUFBLGdCQUNLckIsT0FBTyxLQUFLLEVBQVosR0FBaUJBLE9BQWpCLEdBQTJCRTtBQURoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFlSDs7R0FwQ1FMLFE7O0tBQUFBLFE7O0FBc0RNQSx1RUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9wcm9qZXRvcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXBpIGZyb20gJy4uL3NlcnZpY2VzL2FwaSc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2NhcmRzL2NhcmRzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcydcblxuXG5mdW5jdGlvbiBQcm9qZXRvcyhwcm9wcyl7XG4gICAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoJycpXG5cbiAgICBjb25zdCBsaXN0UmVwbyA9IChwcm9wcy5kYWRvcykubWFwKChyZXBvKSA9PlxuICAgICAgICA8Q2FyZCBcbiAgICAgICAgICAgIGtleT17cmVwby5pZH0gXG4gICAgICAgICAgICBuYW1lPXtyZXBvLm5hbWV9IFxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3JlcG8uZGVzY3JpcHRpb259IFxuICAgICAgICAgICAgZnVsbF9uYW1lPXtyZXBvLmZ1bGxfbmFtZX1cbiAgICAgICAgICAgIGh0bWxfdXJsPXtyZXBvLmh0bWxfdXJsfVxuICAgICAgICAvPlxuICAgICk7XG4gICAgXG5cbiAgICBmdW5jdGlvbiBmaWx0ZXJJdGVtcyhxdWVyeSkge1xuICAgICAgICByZXR1cm4gbGlzdFJlcG8uZmlsdGVyKGZ1bmN0aW9uKHJlcG8pIHtcbiAgICAgICAgICAgIHJldHVybiAocmVwby5wcm9wcy5uYW1lKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnkudG9Mb3dlckNhc2UoKSkgPiAtMTtcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQZXNxdWlzYXJcIiBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17YXN5bmMgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdHMoZmlsdGVySXRlbXModmFsdWUpKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJQcm9qZWN0c30+XG4gICAgICAgICAgICAgICAge3Jlc3VsdHMgIT09ICcnID8gcmVzdWx0cyA6IGxpc3RSZXBvfVxuICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKXtcbiAgICBsZXQgZGFkb3MgPSB7fVxuXG4gICAgYXdhaXQgYXBpLmdldCgnL3VzZXJzL2FuZHJlb2N1bmhhL3JlcG9zP3Blcl9wYWdlPTEwMCcpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuICAgICAgICBkYWRvcyA9IHJlc3BvbnNlLmRhdGFcbiAgICB9KTtcblxuICAgIHJldHVybntcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGRhZG9zXG4gICAgICAgIH0sXG4gICAgICAgIHJldmFsaWRhdGU6IDEwXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZXRvczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/projetos.js\n");

/***/ })

})