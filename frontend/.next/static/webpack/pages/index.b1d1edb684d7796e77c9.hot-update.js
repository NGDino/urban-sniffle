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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
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
      backgroundColor: '#554287',
      paddingBottom: '9999px',
      marginBottom: '-9999px'
    },
    staffContainer: {
      minHeight: '100%'
    },
    bullet: {
      // display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)'
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    }
  };
});

var Team = function Team(props) {
  _s();

  var classes = useStyles();
  console.log('staff', props);

  var bull = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    className: classes.bullet,
    children: "\u2022"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 18
  }, _this);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
      container: true,
      className: classes.staffContainer,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
        item: true,
        component: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography,
        variant: "h3",
        children: "Meet our Team"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZWFtL2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpbkJvdHRvbSIsInN0YWZmQ29udGFpbmVyIiwibWluSGVpZ2h0IiwiYnVsbGV0IiwibWFyZ2luIiwidHJhbnNmb3JtIiwidGl0bGUiLCJmb250U2l6ZSIsInBvcyIsIlRlYW0iLCJwcm9wcyIsImNsYXNzZXMiLCJjb25zb2xlIiwibG9nIiwiYnVsbCIsIlR5cG9ncmFwaHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBRXJDQyxRQUFJLEVBQUM7QUFDSEMsYUFBTyxFQUFFLE1BRE47QUFFSEMscUJBQWUsRUFBRSxTQUZkO0FBR0hDLG1CQUFhLEVBQUUsUUFIWjtBQUlIQyxrQkFBWSxFQUFFO0FBSlgsS0FGZ0M7QUFRckNDLGtCQUFjLEVBQUU7QUFDZEMsZUFBUyxFQUFFO0FBREcsS0FScUI7QUFXckNDLFVBQU0sRUFBRTtBQUNKO0FBQ0FDLFlBQU0sRUFBRSxPQUZKO0FBR0pDLGVBQVMsRUFBRTtBQUhQLEtBWDZCO0FBZ0JuQ0MsU0FBSyxFQUFFO0FBQ0xDLGNBQVEsRUFBRTtBQURMLEtBaEI0QjtBQW1CbkNDLE9BQUcsRUFBRTtBQUNIUixrQkFBWSxFQUFFO0FBRFg7QUFuQjhCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQTJCQSxJQUFNUyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDcEIsTUFBTUMsT0FBTyxHQUFHbEIsU0FBUyxFQUF6QjtBQUNBbUIsU0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkgsS0FBckI7O0FBQ0EsTUFBTUksSUFBSSxnQkFBRztBQUFNLGFBQVMsRUFBRUgsT0FBTyxDQUFDUixNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFiOztBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFHUSxPQUFPLENBQUNmLElBQXpCO0FBQUEsMkJBQ0UsOERBQUMsbURBQUQ7QUFBTSxlQUFTLE1BQWY7QUFBZ0IsZUFBUyxFQUFJZSxPQUFPLENBQUNWLGNBQXJDO0FBQUEsNkJBQ0UsOERBQUMsbURBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxpQkFBUyxFQUFHYyx5REFBdkI7QUFBbUMsZUFBTyxFQUFHLElBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVNILENBZEQ7O0dBQU1OLEk7VUFDY2hCLFM7OztLQURkZ0IsSTtBQWdCTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMWQxZWRiNjg0ZDc3OTZlNzdjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge0JveCwgR3JpZCwgQ2FyZCwgQXZhdGFyLENhcmRBY3Rpb25zLCBDYXJkQ29udGVudCwgVHlwb2dyYXBoeSwgQnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBSZWFjdENhcmRDYXJvdXNlbCBmcm9tICdyZWFjdC1jYXJkLWNhcm91c2VsJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgXHJcbiAgICByb290OntcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNTU0Mjg3JyxcclxuICAgICAgcGFkZGluZ0JvdHRvbTogJzk5OTlweCcsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogJy05OTk5cHgnXHJcbiAgICB9LFxyXG4gICAgc3RhZmZDb250YWluZXI6IHtcclxuICAgICAgbWluSGVpZ2h0OiAnMTAwJSdcclxuICAgIH0sXHJcbiAgICBidWxsZXQ6IHtcclxuICAgICAgICAvLyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICBtYXJnaW46ICcwIDJweCcsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICB9LFxyXG4gICAgICBwb3M6IHtcclxuICAgICAgICBtYXJnaW5Cb3R0b206IDEyLFxyXG4gICAgICB9LFxyXG5cclxufSkpO1xyXG5cclxuXHJcblxyXG5jb25zdCBUZWFtID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICAgIGNvbnNvbGUubG9nKCdzdGFmZicsIHByb3BzKVxyXG4gICAgY29uc3QgYnVsbCA9IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5idWxsZXR9PuKAojwvc3Bhbj47XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5zdGFmZkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gY29tcG9uZW50PSB7VHlwb2dyYXBoeX0gdmFyaWFudCA9ICdoMyc+XHJcbiAgICAgICAgICAgICAgTWVldCBvdXIgVGVhbVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlYW07Il0sInNvdXJjZVJvb3QiOiIifQ==