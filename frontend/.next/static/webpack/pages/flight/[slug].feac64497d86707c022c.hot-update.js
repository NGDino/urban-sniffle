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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\FlightList\\index.js",
    _s = $RefreshSig$();




var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(function (theme) {
  return {
    root: {
      marginBottom: '70px'
    },
    wineName: {
      display: 'block'
    },
    table: {
      Width: '100%'
    }
  };
});

function wineData(name, amount) {
  return {
    name: name,
    amount: amount
  };
}

function FlightList(props) {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      moreInfo = _useState[0],
      setMoreInfo = _useState[1];

  var classes = useStyles();
  var wines = props.props;
  console.log('accordion props', wines);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Container, {
      className: classes.root,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        variant: "h4",
        align: "center",
        gutterBottom: true,
        children: "Bordeaux Flight"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, this), wines.map(function (wine, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
            variant: "h5",
            children: [wine.year, " ", wine.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
            variant: "subtitle2",
            children: wine.specialAttribute
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
            variant: "subtitle1",
            children: wine.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
            component: "div",
            children: [moreInfo == wine._id ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
              onClick: function onClick() {
                return setMoreInfo('');
              },
              children: "less Info"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 29
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
              onClick: function onClick() {
                return setMoreInfo(wine._id);
              },
              children: "More Info"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 29
            }, _this), moreInfo == wine._id && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                variant: "h6",
                children: "Additional Information:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                variant: "body1",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                  children: "Barrel Program"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 37
                }, _this), ": ", wine.wineMaking.barrelProgram]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableContainer, {
                component: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Paper,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableHead, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableRow, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                      children: "Stat"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 73,
                      columnNumber: 41
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                      align: "left",
                      children: "Amount"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 74,
                      columnNumber: 41
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                    columnNumber: 37
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 33
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableBody, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableRow, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                      align: "right",
                      children: "TA"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 79,
                      columnNumber: 45
                    }, _this)
                  }, 'TA', false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GbGlnaHRMaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJtYXJnaW5Cb3R0b20iLCJ3aW5lTmFtZSIsImRpc3BsYXkiLCJ0YWJsZSIsIldpZHRoIiwid2luZURhdGEiLCJuYW1lIiwiYW1vdW50IiwiRmxpZ2h0TGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJtb3JlSW5mbyIsInNldE1vcmVJbmZvIiwiY2xhc3NlcyIsIndpbmVzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIndpbmUiLCJpbmRleCIsInllYXIiLCJzcGVjaWFsQXR0cmlidXRlIiwiZGVzY3JpcHRpb24iLCJfaWQiLCJ3aW5lTWFraW5nIiwiYmFycmVsUHJvZ3JhbSIsIlBhcGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLDZEQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDckNDLFFBQUksRUFBQztBQUNEQyxrQkFBWSxFQUFDO0FBRFosS0FEZ0M7QUFJckNDLFlBQVEsRUFBRTtBQUNOQyxhQUFPLEVBQUU7QUFESCxLQUoyQjtBQU9yQ0MsU0FBSyxFQUFFO0FBQ0hDLFdBQUssRUFBRTtBQURKO0FBUDhCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQVlBLFNBQVNDLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCQyxNQUF4QixFQUErQjtBQUMzQixTQUFPO0FBQUNELFFBQUksRUFBSkEsSUFBRDtBQUFPQyxVQUFNLEVBQU5BO0FBQVAsR0FBUDtBQUNIOztBQUVjLFNBQVNDLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0xDLCtDQUFRLENBQUMsRUFBRCxDQURIO0FBQUEsTUFDOUJDLFFBRDhCO0FBQUEsTUFDcEJDLFdBRG9COztBQUd0QyxNQUFN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QVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFvRFAsT0FyREksQ0FKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUFrRUg7O0dBNUV1QmxCLFU7VUFHSlosUzs7O0tBSElZLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmxpZ2h0L1tzbHVnXS5mZWFjNjQ0OTdkODY3MDdjMDIyYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnR7Q29udGFpbmVyLCBUeXBvZ3JhcGh5LCBCb3gsIEJ1dHRvbiwgVGFibGUsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZUNvbnRhaW5lciwgVGFibGVIZWFkLCBUYWJsZVJvdywgUGFwZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgbWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDp7XG4gICAgICAgIG1hcmdpbkJvdHRvbTonNzBweCdcbiAgICB9LFxuICAgIHdpbmVOYW1lOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICAgIFdpZHRoOiAnMTAwJScsXG4gICAgfSxcbn0pKVxuXG5mdW5jdGlvbiB3aW5lRGF0YShuYW1lLCBhbW91bnQpe1xuICAgIHJldHVybiB7bmFtZSwgYW1vdW50fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGbGlnaHRMaXN0KHByb3BzKSB7XG4gICAgY29uc3QgWyBtb3JlSW5mbywgc2V0TW9yZUluZm9dID0gdXNlU3RhdGUoJycpO1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cblxuXG4gICAgY29uc3Qgd2luZXMgPSBwcm9wcy5wcm9wc1xuICAgIGNvbnNvbGUubG9nKCdhY2NvcmRpb24gcHJvcHMnLCB3aW5lcylcbiAgICBcbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIFxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQgPSdoNCcgYWxpZ249J2NlbnRlcicgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgICAgIEJvcmRlYXV4IEZsaWdodFxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAge3dpbmVzLm1hcCgod2luZSxpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2luZS55ZWFyfSB7d2luZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2luZS5zcGVjaWFsQXR0cmlidXRlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpbmUuZGVzY3JpcHRpb259IFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9J2RpdicgPlxuICAgICAgICAgICAgICAgICAgICAgICAge21vcmVJbmZvID09IHdpbmUuX2lkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9IHsoKSA9PiBzZXRNb3JlSW5mbygnJykgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVzcyBJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz0geygpID0+IHNldE1vcmVJbmZvKHdpbmUuX2lkKSB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3JlIEluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9yZUluZm8gPT0gd2luZS5faWQgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkaXRpb25hbCBJbmZvcm1hdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkJhcnJlbCBQcm9ncmFtPC9zdHJvbmc+OiB7d2luZS53aW5lTWFraW5nLmJhcnJlbFByb2dyYW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+U3RhdDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJsZWZ0XCI+QW1vdW50PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT0nVEEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPSdyaWdodCc+XG5UQVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgKSBcbiAgICAgICAgICAgIFxuICAgICAgICB9KX1cbiAgICAgICAgXG5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9