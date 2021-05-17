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

  var members = props.props;
  console.log(members);
  var items = [{
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!"
  }, {
    name: "Random Name #2",
    description: "Hello World! if i am longer do iwork better?"
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2__.default, {
    autoPlay: false,
    animation: "slide",
    index: 0,
    children: items.map(function (item) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Paper, {
        container: true,
        spacing: 2,
        alignItems: "center",
        justify: "center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
          item: true,
          xs: 8,
          component: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Card,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: item.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 26
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcm91c2VsL2luZGV4LmpzIl0sIm5hbWVzIjpbIk15Q2Fyb3VzZWwiLCJwcm9wcyIsIm1lbWJlcnMiLCJjb25zb2xlIiwibG9nIiwiaXRlbXMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJtYXAiLCJpdGVtIiwiQ2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEwQjtBQUFBOztBQUN0QixNQUFNQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0EsS0FBdEI7QUFDQUUsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFDQSxNQUFJRyxLQUFLLEdBQUcsQ0FDUjtBQUNJQyxRQUFJLEVBQUUsZ0JBRFY7QUFFSUMsZUFBVyxFQUFFO0FBRmpCLEdBRFEsRUFLUjtBQUNJRCxRQUFJLEVBQUUsZ0JBRFY7QUFFSUMsZUFBVyxFQUFFO0FBRmpCLEdBTFEsQ0FBWjtBQVdBLHNCQUNJLDhEQUFDLCtEQUFEO0FBQVUsWUFBUSxFQUFFLEtBQXBCO0FBQTJCLGFBQVMsRUFBRSxPQUF0QztBQUE4QyxTQUFLLEVBQUksQ0FBdkQ7QUFBQSxjQUVRRixLQUFLLENBQUNHLEdBQU4sQ0FBVyxVQUFDQyxJQUFEO0FBQUEsMEJBQ1AsOERBQUMsb0RBQUQ7QUFBTyxpQkFBUyxNQUFoQjtBQUFpQixlQUFPLEVBQUUsQ0FBMUI7QUFBNkIsa0JBQVUsRUFBQyxRQUF4QztBQUFpRCxlQUFPLEVBQUMsUUFBekQ7QUFBQSwrQkFDSSw4REFBQyxtREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxDQUFmO0FBQWtCLG1CQUFTLEVBQUdDLG1EQUE5QjtBQUFBLGlDQUNDO0FBQUEsc0JBQUtELElBQUksQ0FBQ0g7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETztBQUFBLEtBQVg7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFjSCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7S0EzQ1NOLFU7QUE2Q1QsK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWIzYTBiMTZmZjVmYmFmYjExY2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbWF0ZXJpYWwtdWktY2Fyb3VzZWwnXG5pbXBvcnQgeyBQYXBlciwgVHlwb2dyYXBoeSwgQnV0dG9uLCBHcmlkLCBDYXJkLCBBdmF0YXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuXG5mdW5jdGlvbiBNeUNhcm91c2VsKHByb3BzKXtcbiAgICBjb25zdCBtZW1iZXJzID0gcHJvcHMucHJvcHNcbiAgICBjb25zb2xlLmxvZyhtZW1iZXJzKVxuICAgIHZhciBpdGVtcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJSYW5kb20gTmFtZSAjMVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUHJvYmFibHkgdGhlIG1vc3QgcmFuZG9tIHRoaW5nIHlvdSBoYXZlIGV2ZXIgc2VlbiFcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlJhbmRvbSBOYW1lICMyXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJIZWxsbyBXb3JsZCEgaWYgaSBhbSBsb25nZXIgZG8gaXdvcmsgYmV0dGVyP1wiXG4gICAgICAgIH1cbiAgICBdXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2Fyb3VzZWwgYXV0b1BsYXk9e2ZhbHNlfSBhbmltYXRpb249ICdzbGlkZScgaW5kZXggPSB7MH0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXRlbXMubWFwKCAoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY29udGFpbmVyIHNwYWNpbmc9ezJ9IGFsaWduSXRlbXM9J2NlbnRlcicganVzdGlmeT0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezh9IGNvbXBvbmVudD0ge0NhcmR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57aXRlbS5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgKSApXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgKVxufVxuXG4vLyBmdW5jdGlvbiBJdGVtKHByb3BzKVxuLy8ge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjb21wb25lbnQ9IHtDYXJkfT5cbi8vICAgICAgICAgICAgIDxoMj57cHJvcHMuaXRlbS5uYW1lfTwvaDI+XG4vLyAgICAgICAgICAgICA8cD57cHJvcHMuaXRlbS5kZXNjcmlwdGlvbn0gY29vbCBiZWFuczwvcD5cblxuLy8gICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJDaGVja0J1dHRvblwiPlxuLy8gICAgICAgICAgICAgICAgIENoZWNrIGl0IG91dCFcbi8vICAgICAgICAgICAgIDwvQnV0dG9uPlxuLy8gICAgICAgICA8L0dyaWQ+XG5cbi8vICAgICApXG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IE15Q2Fyb3VzZWw7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==