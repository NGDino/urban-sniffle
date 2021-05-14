self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_HomeBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HomeBanner */ "./components/HomeBanner/index.js");
/* harmony import */ var _components_AboutSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AboutSection */ "./components/AboutSection/index.js");
/* harmony import */ var _components_Team__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Team */ "./components/Team/index.js");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! groq */ "./node_modules/groq/lib/groq.js");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../client */ "./client.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\pages\\index.js",
    _this = undefined;

function _templateObject() {
  var data = (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  *[_type == \"winery\"][0] {\n    name,\n    about,\n    image,\n    \"team\": staff[]-> {\n      name, \n      staffImage,\n      position,\n      favoriteWine,\n      description\n    },\n    \"flights\": flights[]->{\n      name,\n      slug\n    }\n  }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Index = function Index(props) {
  var winery = props.winery;
  console.log('props', winery.staff);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_HomeBanner__WEBPACK_IMPORTED_MODULE_4__.default, {
      props: winery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_AboutSection__WEBPACK_IMPORTED_MODULE_5__.default, {
      props: winery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Team__WEBPACK_IMPORTED_MODULE_6__.default, {
      props: winery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }, _this);
};

_c = Index;
Index.getInitialProps = /*#__PURE__*/(0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
  return D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _client__WEBPACK_IMPORTED_MODULE_8__.default.fetch(groq__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject()));

        case 2:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            winery: _context.t0
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsIndpbmVyeSIsImNvbnNvbGUiLCJsb2ciLCJzdGFmZiIsImdldEluaXRpYWxQcm9wcyIsImNsaWVudCIsImdyb3EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTs7QUFHQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNoQkMsTUFEZ0IsR0FDTkQsS0FETSxDQUNoQkMsTUFEZ0I7QUFFdkJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJGLE1BQU0sQ0FBQ0csS0FBNUI7QUFDRSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLDJEQUFEO0FBQVksV0FBSyxFQUFJSDtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyw2REFBRDtBQUFjLFdBQUssRUFBSUE7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0UsOERBQUMscURBQUQ7QUFBTSxXQUFLLEVBQUlBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBUUgsQ0FYRDs7S0FBTUYsSztBQWFOQSxLQUFLLENBQUNNLGVBQU4sa1JBQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNSQyxrREFBQSxDQUFhQywyQ0FBYixvQkFEUTs7QUFBQTtBQUFBO0FBQUE7QUFDdEJOLGtCQURzQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXhCO0FBcUJBLCtEQUFlRixLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmMwYTE2YmRkNzg0ODI0MWM4ZGEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSG9tZUJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0hvbWVCYW5uZXInO1xuaW1wb3J0IEFib3V0U2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0Fib3V0U2VjdGlvbic7XG5pbXBvcnQgVGVhbSBmcm9tICcuLi9jb21wb25lbnRzL1RlYW0nO1xuXG5cbmltcG9ydCBncm9xIGZyb20gJ2dyb3EnO1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9jbGllbnQnO1xuXG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHt3aW5lcnl9ID0gcHJvcHNcbiAgY29uc29sZS5sb2coJ3Byb3BzJywgd2luZXJ5LnN0YWZmKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SG9tZUJhbm5lciBwcm9wcyA9IHt3aW5lcnl9Lz5cbiAgICAgICAgPEFib3V0U2VjdGlvbiBwcm9wcyA9IHt3aW5lcnl9Lz5cbiAgICAgICAgPFRlYW0gcHJvcHMgPSB7d2luZXJ5fS8+XG4gICAgICBcbiAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4gKHtcbiAgd2luZXJ5OiBhd2FpdCBjbGllbnQuZmV0Y2goZ3JvcWBcbiAgKltfdHlwZSA9PSBcIndpbmVyeVwiXVswXSB7XG4gICAgbmFtZSxcbiAgICBhYm91dCxcbiAgICBpbWFnZSxcbiAgICBcInRlYW1cIjogc3RhZmZbXS0+IHtcbiAgICAgIG5hbWUsIFxuICAgICAgc3RhZmZJbWFnZSxcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgZmF2b3JpdGVXaW5lLFxuICAgICAgZGVzY3JpcHRpb25cbiAgICB9LFxuICAgIFwiZmxpZ2h0c1wiOiBmbGlnaHRzW10tPntcbiAgICAgIG5hbWUsXG4gICAgICBzbHVnXG4gICAgfVxuICB9XG4gIGApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9