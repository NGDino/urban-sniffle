self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MyCarousel/index.js":
/*!****************************************!*\
  !*** ./components/MyCarousel/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-material-ui-carousel */ "./node_modules/react-material-ui-carousel/dist/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\MyCarousel\\index.js";




function MyCarousel(props) {
  var _this = this;

  var items = [{
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!"
  }, {
    name: "Random Name #2",
    description: "Hello World!"
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: items.map(function (item, i) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
        item: true,
        xs: 12,
        component: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Card,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: props.item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [props.item.description, " cool beans"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
          className: "CheckButton",
          children: "Check it out!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
} // function Item(props)
// {
//     return (
//         <Grid item xs={12} component= {Card}>
//             <h2>{props.item.name}</h2>
//             <p>{props.item.description} cool beans</p>
//             <Button className="CheckButton">
//                 Check it out!
//             </Button>
//         </Grid>
//     )
// }


_c = MyCarousel;
/* harmony default export */ __webpack_exports__["default"] = (MyCarousel);

var _c;

$RefreshReg$(_c, "MyCarousel");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcm91c2VsL2luZGV4LmpzIl0sIm5hbWVzIjpbIk15Q2Fyb3VzZWwiLCJwcm9wcyIsIml0ZW1zIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibWFwIiwiaXRlbSIsImkiLCJDYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQ0E7QUFBQTs7QUFDSSxNQUFJQyxLQUFLLEdBQUcsQ0FDUjtBQUNJQyxRQUFJLEVBQUUsZ0JBRFY7QUFFSUMsZUFBVyxFQUFFO0FBRmpCLEdBRFEsRUFLUjtBQUNJRCxRQUFJLEVBQUUsZ0JBRFY7QUFFSUMsZUFBVyxFQUFFO0FBRmpCLEdBTFEsQ0FBWjtBQVdBLHNCQUNJLDhEQUFDLCtEQUFEO0FBQUEsY0FFUUYsS0FBSyxDQUFDRyxHQUFOLENBQVcsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsMEJBQ1AsOERBQUMsbURBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFtQixpQkFBUyxFQUFHQyxtREFBL0I7QUFBQSxnQ0FDQTtBQUFBLG9CQUFLUCxLQUFLLENBQUNLLElBQU4sQ0FBV0g7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxlQUVBO0FBQUEscUJBQUlGLEtBQUssQ0FBQ0ssSUFBTixDQUFXRixXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGQSxlQUlBLDhEQUFDLHFEQUFEO0FBQVEsbUJBQVMsRUFBQyxhQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETztBQUFBLEtBQVg7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnQkgsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0tBNUNTSixVO0FBOENULCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBiYTc3NzhhN2MwOTg5OWQwNzUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW1hdGVyaWFsLXVpLWNhcm91c2VsJ1xuaW1wb3J0IHsgUGFwZXIsIEJ1dHRvbiwgR3JpZCwgQ2FyZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5cbmZ1bmN0aW9uIE15Q2Fyb3VzZWwocHJvcHMpXG57XG4gICAgdmFyIGl0ZW1zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlJhbmRvbSBOYW1lICMxXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJQcm9iYWJseSB0aGUgbW9zdCByYW5kb20gdGhpbmcgeW91IGhhdmUgZXZlciBzZWVuIVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiUmFuZG9tIE5hbWUgIzJcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkhlbGxvIFdvcmxkIVwiXG4gICAgICAgIH1cbiAgICBdXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2Fyb3VzZWw+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXRlbXMubWFwKCAoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY29tcG9uZW50PSB7Q2FyZH0+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57cHJvcHMuaXRlbS5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwPntwcm9wcy5pdGVtLmRlc2NyaXB0aW9ufSBjb29sIGJlYW5zPC9wPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJDaGVja0J1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hlY2sgaXQgb3V0IVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgKSApXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgKVxufVxuXG4vLyBmdW5jdGlvbiBJdGVtKHByb3BzKVxuLy8ge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjb21wb25lbnQ9IHtDYXJkfT5cbi8vICAgICAgICAgICAgIDxoMj57cHJvcHMuaXRlbS5uYW1lfTwvaDI+XG4vLyAgICAgICAgICAgICA8cD57cHJvcHMuaXRlbS5kZXNjcmlwdGlvbn0gY29vbCBiZWFuczwvcD5cblxuLy8gICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJDaGVja0J1dHRvblwiPlxuLy8gICAgICAgICAgICAgICAgIENoZWNrIGl0IG91dCFcbi8vICAgICAgICAgICAgIDwvQnV0dG9uPlxuLy8gICAgICAgICA8L0dyaWQ+XG5cbi8vICAgICApXG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IE15Q2Fyb3VzZWw7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==