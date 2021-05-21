self["webpackHotUpdate_N_E"]("pages/flight/[slug]",{

/***/ "./components/FlightList/index.js":
/*!****************************************!*\
  !*** ./components/FlightList/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FlightList; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\FlightList\\index.js",
    _s = $RefreshSig$();




var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(function (theme) {
  return {
    wineName: {
      display: 'block'
    }
  };
});
function FlightList(props) {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      moreInfo = _useState[0],
      setMoreInfo = _useState[1];

  var classes = useStyles();
  var wines = props.props;
  console.log('accordion props', wines);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
        variant: "h4",
        children: "Bordeaux Flight"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, this), wines.map(function (wine, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
            variant: "h5",
            children: [wine.year, " ", wine.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
            variant: "subtitle1",
            children: wine.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
            component: "div",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
              onClick: function onClick() {
                return setMoreInfo = ((0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__.default)("setMoreInfo"), -wine._id);
              },
              children: "More Info"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, _this), moreInfo == wine._id && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
              variant: "body1",
              children: "Just when I thought I was out... they pull me back in. When they come... they come at what you love. Leave the gun. Take the cannoli. I have a sentimental weakness for my children and I spoil them, as you can see. They talk when they should listen. Very well. You want to do business with me. I will do business with you. Mr Corleone is Johnny Fontane's godfather. Now Italians regard that as a very close, a very sacred religious relationship. My father is no different than any powerful man, any man with power, like a president or senator. I don't feel I have to wipe everybody out, Tom. Just my enemies. I see you took the name of the town. What was your father's name? It's a Sicilian message. It means Luca Brasi sleeps with the fishes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

_s(FlightList, "FiLHxBrny9nh092Wh2Qco0+8DIg=", false, function () {
  return [useStyles];
});

_c = FlightList;

var _c;

$RefreshReg$(_c, "FlightList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GbGlnaHRMaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIndpbmVOYW1lIiwiZGlzcGxheSIsIkZsaWdodExpc3QiLCJwcm9wcyIsInVzZVN0YXRlIiwibW9yZUluZm8iLCJzZXRNb3JlSW5mbyIsImNsYXNzZXMiLCJ3aW5lcyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJ3aW5lIiwiaW5kZXgiLCJ5ZWFyIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0MsNkRBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsWUFBUSxFQUFFO0FBQ05DLGFBQU8sRUFBRTtBQURIO0FBRDJCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBUWUsU0FBU0MsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDTEMsK0NBQVEsQ0FBQyxFQUFELENBREg7QUFBQSxNQUM5QkMsUUFEOEI7QUFBQSxNQUNwQkMsV0FEb0I7O0FBR3RDLE1BQU1DLE9BQU8sR0FBR1YsU0FBUyxFQUF6QjtBQUVBLE1BQU1XLEtBQUssR0FBR0wsS0FBSyxDQUFDQSxLQUFwQjtBQUNBTSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkYsS0FBL0I7QUFHQSxzQkFDQTtBQUFBLDJCQUVJLDhEQUFDLHdEQUFEO0FBQUEsOEJBQ0ksOERBQUMseURBQUQ7QUFBWSxlQUFPLEVBQUUsSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUlLQSxLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDdkIsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSxrQ0FDSSw4REFBQyx5REFBRDtBQUFZLG1CQUFPLEVBQUMsSUFBcEI7QUFBQSx1QkFDS0QsSUFBSSxDQUFDRSxJQURWLE9BQ2lCRixJQUFJLENBQUNHLElBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUlJLDhEQUFDLHlEQUFEO0FBQVksbUJBQU8sRUFBQyxXQUFwQjtBQUFBLHNCQUNLSCxJQUFJLENBQUNJO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQU9JLDhEQUFDLGtEQUFEO0FBQUsscUJBQVMsRUFBQyxLQUFmO0FBQUEsb0NBQ0ksOERBQUMscURBQUQ7QUFBUSxxQkFBTyxFQUFFO0FBQUEsdUJBQUtWLFdBQVcsa0pBQUUsQ0FBRU0sSUFBSSxDQUFDSyxHQUFULENBQWhCO0FBQUEsZUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosRUFJS1osUUFBUSxJQUFJTyxJQUFJLENBQUNLLEdBQWpCLGlCQUNELDhEQUFDLHlEQUFEO0FBQVkscUJBQU8sRUFBQyxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBdUJQLE9BeEJJLENBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURBO0FBcUNIOztHQTlDdUJmLFU7VUFHSkwsUzs7O0tBSElLLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmxpZ2h0L1tzbHVnXS5kMWU5YTBjMjQ4MzkzMjk0MzhhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnR7Q29udGFpbmVyLCBUeXBvZ3JhcGh5LCBCb3gsIEJ1dHRvbiwgSGlkZGVufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7IG1ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHdpbmVOYW1lOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICB9XG59KSlcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZsaWdodExpc3QocHJvcHMpIHtcbiAgICBjb25zdCBbIG1vcmVJbmZvLCBzZXRNb3JlSW5mb10gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICAgIGNvbnN0IHdpbmVzID0gcHJvcHMucHJvcHNcbiAgICBjb25zb2xlLmxvZygnYWNjb3JkaW9uIHByb3BzJywgd2luZXMpXG5cblxuICAgIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50ID0naDQnPlxuICAgICAgICAgICAgICAgIEJvcmRlYXV4IEZsaWdodFxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAge3dpbmVzLm1hcCgod2luZSxpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2luZS55ZWFyfSB7d2luZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2luZS5kZXNjcmlwdGlvbn0gXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNvbXBvbmVudD0nZGl2JyA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+IHNldE1vcmVJbmZvID0tIHdpbmUuX2lkIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vcmUgSW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb3JlSW5mbyA9PSB3aW5lLl9pZCAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MScgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEp1c3Qgd2hlbiBJIHRob3VnaHQgSSB3YXMgb3V0Li4uIHRoZXkgcHVsbCBtZSBiYWNrIGluLiBXaGVuIHRoZXkgY29tZS4uLiB0aGV5IGNvbWUgYXQgd2hhdCB5b3UgbG92ZS4gTGVhdmUgdGhlIGd1bi4gVGFrZSB0aGUgY2Fubm9saS4gSSBoYXZlIGEgc2VudGltZW50YWwgd2Vha25lc3MgZm9yIG15IGNoaWxkcmVuIGFuZCBJIHNwb2lsIHRoZW0sIGFzIHlvdSBjYW4gc2VlLiBUaGV5IHRhbGsgd2hlbiB0aGV5IHNob3VsZCBsaXN0ZW4uIFZlcnkgd2VsbC4gWW91IHdhbnQgdG8gZG8gYnVzaW5lc3Mgd2l0aCBtZS4gSSB3aWxsIGRvIGJ1c2luZXNzIHdpdGggeW91LlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTXIgQ29ybGVvbmUgaXMgSm9obm55IEZvbnRhbmUncyBnb2RmYXRoZXIuIE5vdyBJdGFsaWFucyByZWdhcmQgdGhhdCBhcyBhIHZlcnkgY2xvc2UsIGEgdmVyeSBzYWNyZWQgcmVsaWdpb3VzIHJlbGF0aW9uc2hpcC4gTXkgZmF0aGVyIGlzIG5vIGRpZmZlcmVudCB0aGFuIGFueSBwb3dlcmZ1bCBtYW4sIGFueSBtYW4gd2l0aCBwb3dlciwgbGlrZSBhIHByZXNpZGVudCBvciBzZW5hdG9yLiBJIGRvbid0IGZlZWwgSSBoYXZlIHRvIHdpcGUgZXZlcnlib2R5IG91dCwgVG9tLiBKdXN0IG15IGVuZW1pZXMuIEkgc2VlIHlvdSB0b29rIHRoZSBuYW1lIG9mIHRoZSB0b3duLiBXaGF0IHdhcyB5b3VyIGZhdGhlcidzIG5hbWU/IEl0J3MgYSBTaWNpbGlhbiBtZXNzYWdlLiBJdCBtZWFucyBMdWNhIEJyYXNpIHNsZWVwcyB3aXRoIHRoZSBmaXNoZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXG4gICAgICAgIH0pfVxuICAgICAgICBcblxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=