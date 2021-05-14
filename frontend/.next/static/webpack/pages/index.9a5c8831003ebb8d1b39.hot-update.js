self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Team/index.js":
/*!**********************************!*\
  !*** ./components/Team/index.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_card_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-card-carousel */ "./node_modules/react-card-carousel/build/index.js");
/* harmony import */ var react_card_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_card_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\Team\\index.js",
    _this = undefined,
    _s = $RefreshSig$();




var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1)
      }
    },
    background: {
      backgroundColor: '#554287'
    }
  };
});

var Team = function Team(props) {
  _s();

  var classes = useStyles();
  console.log('staff', props);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_card_carousel__WEBPACK_IMPORTED_MODULE_1___default()), {
      autoplay: true,
      autoplay_speed: 2500,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: MyCarousel.CARD_STYLE,
        children: "First Card"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: MyCarousel.CARD_STYLE,
        children: "Second Card"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: MyCarousel.CARD_STYLE,
        children: "Third Card"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: MyCarousel.CARD_STYLE,
        children: "Fourth Card"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: MyCarousel.CARD_STYLE,
        children: "Fifth Card"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, _this);
};

_s(Team, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Team;
/* harmony default export */ __webpack_exports__["default"] = (Team);

var _c;

$RefreshReg$(_c, "Team");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZWFtL2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwibWFyZ2luIiwic3BhY2luZyIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJUZWFtIiwicHJvcHMiLCJjbGFzc2VzIiwiY29uc29sZSIsImxvZyIsIk15Q2Fyb3VzZWwiLCJDQVJEX1NUWUxFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3JDQyxRQUFJLEVBQUU7QUFDRkMsYUFBTyxFQUFFLE1BRFA7QUFFRixlQUFTO0FBQ1RDLGNBQU0sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZDtBQURDO0FBRlAsS0FEK0I7QUFPckNDLGNBQVUsRUFBRTtBQUNSQyxxQkFBZSxFQUFFO0FBRFQ7QUFQeUIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBZUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3BCLE1BQU1DLE9BQU8sR0FBR1gsU0FBUyxFQUF6QjtBQUNBWSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCSCxLQUFyQjtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFHQyxPQUFPLENBQUNSLElBQXpCO0FBQUEsMkJBQ0ksOERBQUMsNERBQUQ7QUFBbUIsY0FBUSxFQUFHLElBQTlCO0FBQXFDLG9CQUFjLEVBQUcsSUFBdEQ7QUFBQSw4QkFDSTtBQUFLLGFBQUssRUFBR1csVUFBVSxDQUFDQyxVQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBSUk7QUFBSyxhQUFLLEVBQUdELFVBQVUsQ0FBQ0MsVUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSixlQU9JO0FBQUssYUFBSyxFQUFHRCxVQUFVLENBQUNDLFVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEosZUFVSTtBQUFLLGFBQUssRUFBR0QsVUFBVSxDQUFDQyxVQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZKLGVBYUk7QUFBSyxhQUFLLEVBQUdELFVBQVUsQ0FBQ0MsVUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUEwQkgsQ0E5QkQ7O0dBQU1OLEk7VUFDY1QsUzs7O0tBRGRTLEk7QUFnQ04sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWE1Yzg4MzEwMDNlYmI4ZDFiMzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtHcmlkLCBDYXJkLCBBdmF0YXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFJlYWN0Q2FyZENhcm91c2VsIGZyb20gJ3JlYWN0LWNhcmQtY2Fyb3VzZWwnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICcmID4gKic6IHtcclxuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzU1NDI4NydcclxuICAgIH1cclxuXHJcbn0pKTtcclxuXHJcblxyXG5cclxuY29uc3QgVGVhbSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgICBjb25zb2xlLmxvZygnc3RhZmYnLCBwcm9wcylcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8UmVhY3RDYXJkQ2Fyb3VzZWwgYXV0b3BsYXk9eyB0cnVlIH0gYXV0b3BsYXlfc3BlZWQ9eyAyNTAwIH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXsgTXlDYXJvdXNlbC5DQVJEX1NUWUxFIH0+XHJcbiAgICAgICAgICAgICAgICBGaXJzdCBDYXJkXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9eyBNeUNhcm91c2VsLkNBUkRfU1RZTEUgfT5cclxuICAgICAgICAgICAgICAgIFNlY29uZCBDYXJkXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9eyBNeUNhcm91c2VsLkNBUkRfU1RZTEUgfT5cclxuICAgICAgICAgICAgICAgIFRoaXJkIENhcmRcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17IE15Q2Fyb3VzZWwuQ0FSRF9TVFlMRSB9PlxyXG4gICAgICAgICAgICAgICAgRm91cnRoIENhcmRcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17IE15Q2Fyb3VzZWwuQ0FSRF9TVFlMRSB9PlxyXG4gICAgICAgICAgICAgICAgRmlmdGggQ2FyZFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUmVhY3RDYXJkQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxBdmF0YXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPiAqL31cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZWFtOyJdLCJzb3VyY2VSb290IjoiIn0=