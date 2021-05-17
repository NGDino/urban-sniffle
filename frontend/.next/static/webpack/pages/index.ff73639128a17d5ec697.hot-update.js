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
    description: "Hello World! if i am longer do iwork better?"
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2__.default, {
    autoPlay: false,
    animation: "slide",
    children: items.map(function (item) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
        container: true,
        spacing: 2,
        alignItems: "center",
        justify: "center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
          item: true,
          xs: 8,
          component: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Card,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: item.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: [item.description, " cool beans"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: "CheckButton",
            children: "Check it out!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 26
        }, _this)
      }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcm91c2VsL2luZGV4LmpzIl0sIm5hbWVzIjpbIk15Q2Fyb3VzZWwiLCJwcm9wcyIsIml0ZW1zIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibWFwIiwiaXRlbSIsIkNhcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsS0FBcEIsRUFDQTtBQUFBOztBQUNJLE1BQUlDLEtBQUssR0FBRyxDQUNSO0FBQ0lDLFFBQUksRUFBRSxnQkFEVjtBQUVJQyxlQUFXLEVBQUU7QUFGakIsR0FEUSxFQUtSO0FBQ0lELFFBQUksRUFBRSxnQkFEVjtBQUVJQyxlQUFXLEVBQUU7QUFGakIsR0FMUSxDQUFaO0FBV0Esc0JBQ0ksOERBQUMsK0RBQUQ7QUFBVSxZQUFRLEVBQUUsS0FBcEI7QUFBMkIsYUFBUyxFQUFFLE9BQXRDO0FBQUEsY0FFUUYsS0FBSyxDQUFDRyxHQUFOLENBQVcsVUFBQ0MsSUFBRDtBQUFBLDBCQUNQLDhEQUFDLG1EQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixlQUFPLEVBQUUsQ0FBekI7QUFBNEIsa0JBQVUsRUFBQyxRQUF2QztBQUFnRCxlQUFPLEVBQUMsUUFBeEQ7QUFBQSwrQkFDSyw4REFBQyxtREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxDQUFmO0FBQWtCLG1CQUFTLEVBQUdDLG1EQUE5QjtBQUFBLGtDQUNHO0FBQUEsc0JBQUtELElBQUksQ0FBQ0g7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURILGVBRUc7QUFBQSx1QkFBSUcsSUFBSSxDQUFDRixXQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSCxlQUlHLDhEQUFDLHFEQUFEO0FBQVEscUJBQVMsRUFBQyxhQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRE87QUFBQSxLQUFYO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUJILEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztLQS9DU0osVTtBQWlEVCwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mZjczNjM5MTI4YTE3ZDVlYzY5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tYXRlcmlhbC11aS1jYXJvdXNlbCdcbmltcG9ydCB7IFBhcGVyLCBCdXR0b24sIEdyaWQsIENhcmQsIEF2YXRhcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5cbmZ1bmN0aW9uIE15Q2Fyb3VzZWwocHJvcHMpXG57XG4gICAgdmFyIGl0ZW1zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlJhbmRvbSBOYW1lICMxXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJQcm9iYWJseSB0aGUgbW9zdCByYW5kb20gdGhpbmcgeW91IGhhdmUgZXZlciBzZWVuIVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiUmFuZG9tIE5hbWUgIzJcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkhlbGxvIFdvcmxkISBpZiBpIGFtIGxvbmdlciBkbyBpd29yayBiZXR0ZXI/XCJcbiAgICAgICAgfVxuICAgIF1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJvdXNlbCBhdXRvUGxheT17ZmFsc2V9IGFuaW1hdGlvbj0gJ3NsaWRlJz5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5tYXAoIChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBhbGlnbkl0ZW1zPSdjZW50ZXInIGp1c3RpZnk9J2NlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OH0gY29tcG9uZW50PSB7Q2FyZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntpdGVtLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5kZXNjcmlwdGlvbn0gY29vbCBiZWFuczwvcD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIkNoZWNrQnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoZWNrIGl0IG91dCFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICkgKVxuICAgICAgICAgICAgfVxuICAgICAgICA8L0Nhcm91c2VsPlxuICAgIClcbn1cblxuLy8gZnVuY3Rpb24gSXRlbShwcm9wcylcbi8vIHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY29tcG9uZW50PSB7Q2FyZH0+XG4vLyAgICAgICAgICAgICA8aDI+e3Byb3BzLml0ZW0ubmFtZX08L2gyPlxuLy8gICAgICAgICAgICAgPHA+e3Byb3BzLml0ZW0uZGVzY3JpcHRpb259IGNvb2wgYmVhbnM8L3A+XG5cbi8vICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiQ2hlY2tCdXR0b25cIj5cbi8vICAgICAgICAgICAgICAgICBDaGVjayBpdCBvdXQhXG4vLyAgICAgICAgICAgICA8L0J1dHRvbj5cbi8vICAgICAgICAgPC9HcmlkPlxuXG4vLyAgICAgKVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBNeUNhcm91c2VsO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=