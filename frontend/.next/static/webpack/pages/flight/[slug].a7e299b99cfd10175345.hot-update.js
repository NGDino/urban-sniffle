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
        lineNumber: 34,
        columnNumber: 13
      }, this), wines.map(function (wine, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
            variant: "h5",
            children: [wine.year, " ", wine.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
            variant: "subtitle2",
            children: wine.specialAttribute
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
            variant: "subtitle1",
            children: wine.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
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
              lineNumber: 51,
              columnNumber: 29
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
              onClick: function onClick() {
                return setMoreInfo(wine._id);
              },
              children: "More Info"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, _this), moreInfo == wine._id && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                variant: "h6",
                children: "Additional Information:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                variant: "body1",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                  children: "Barrel Program"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 37
                }, _this), ": ", wine.wineMaking.barrelProgram]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableContainer, {
                component: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Paper,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Table, {
                  className: classes.table,
                  size: "small",
                  "aria-label": "a dense table",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Hidden, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 37
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableBody, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableRow, {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                        align: "right",
                        children: " TA "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 75,
                        columnNumber: 45
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                        align: "right",
                        children: [" ", wine.wineMaking.ta, " "]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 76,
                        columnNumber: 45
                      }, _this)]
                    }, 'TA', true, {
                      fileName: _jsxFileName,
                      lineNumber: 74,
                      columnNumber: 41
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableRow, {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                        align: "right",
                        children: " ALC "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 79,
                        columnNumber: 45
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                        align: "right",
                        children: [" ", wine.wineMaking.alc, " "]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 80,
                        columnNumber: 45
                      }, _this)]
                    }, 'TA', true, {
                      fileName: _jsxFileName,
                      lineNumber: 78,
                      columnNumber: 41
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableRow, {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                        align: "right",
                        children: " ph "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 83,
                        columnNumber: 45
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                        align: "right",
                        children: [" ", wine.wineMaking.ph, " "]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 84,
                        columnNumber: 45
                      }, _this)]
                    }, 'TA', true, {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 41
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                    columnNumber: 37
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GbGlnaHRMaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJtYXJnaW5Cb3R0b20iLCJ3aW5lTmFtZSIsImRpc3BsYXkiLCJ0YWJsZSIsIldpZHRoIiwiRmxpZ2h0TGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJtb3JlSW5mbyIsInNldE1vcmVJbmZvIiwiY2xhc3NlcyIsIndpbmVzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIndpbmUiLCJpbmRleCIsInllYXIiLCJuYW1lIiwic3BlY2lhbEF0dHJpYnV0ZSIsImRlc2NyaXB0aW9uIiwiX2lkIiwid2luZU1ha2luZyIsImJhcnJlbFByb2dyYW0iLCJQYXBlciIsInRhIiwiYWxjIiwicGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0MsNkRBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsUUFBSSxFQUFDO0FBQ0RDLGtCQUFZLEVBQUM7QUFEWixLQURnQztBQUlyQ0MsWUFBUSxFQUFFO0FBQ05DLGFBQU8sRUFBRTtBQURILEtBSjJCO0FBT3JDQyxTQUFLLEVBQUU7QUFDSEMsV0FBSyxFQUFFO0FBREo7QUFQOEIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFhZSxTQUFTQyxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUFBOztBQUFBOztBQUFBLGtCQUNMQywrQ0FBUSxDQUFDLEVBQUQsQ0FESDtBQUFBLE1BQzlCQyxRQUQ4QjtBQUFBLE1BQ3BCQyxXQURvQjs7QUFHdEMsTUFBTUMsT0FBTyxHQUFHZCxTQUFTLEVBQXpCO0FBSUEsTUFBTWUsS0FBSyxHQUFHTCxLQUFLLENBQUNBLEtBQXBCO0FBQ0FNLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCRixLQUEvQjtBQUVBLHNCQUNB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QTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFGSjtBQUFBLHVCQUFjLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFMSixlQVNJLDhEQUFDLHVEQUFEO0FBQUEsOENBQ0ksOERBQUMsd0RBQUQ7QUFBVyw2QkFBSyxFQUFDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURKLGVBRUksOERBQUMsd0RBQUQ7QUFBVyw2QkFBSyxFQUFDLE9BQWpCO0FBQUEsd0NBQTJCWCxJQUFJLENBQUNPLFVBQUwsQ0FBZ0JLLEVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFGSjtBQUFBLHVCQUFjLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQTJEUCxPQTVESSxDQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQXlFSDs7R0FuRnVCdEIsVTtVQUdKVCxTOzs7S0FISVMsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mbGlnaHQvW3NsdWddLmE3ZTI5OWI5OWNmZDEwMTc1MzQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydHtDb250YWluZXIsIFR5cG9ncmFwaHksIEJveCwgQnV0dG9uLCBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlQ29udGFpbmVyLCBUYWJsZUhlYWQsIFRhYmxlUm93LCBQYXBlciwgSGlkZGVufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7IG1ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6e1xuICAgICAgICBtYXJnaW5Cb3R0b206JzcwcHgnXG4gICAgfSxcbiAgICB3aW5lTmFtZToge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgICBXaWR0aDogJzEwMCUnLFxuICAgIH0sXG59KSlcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGbGlnaHRMaXN0KHByb3BzKSB7XG4gICAgY29uc3QgWyBtb3JlSW5mbywgc2V0TW9yZUluZm9dID0gdXNlU3RhdGUoJycpO1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cblxuXG4gICAgY29uc3Qgd2luZXMgPSBwcm9wcy5wcm9wc1xuICAgIGNvbnNvbGUubG9nKCdhY2NvcmRpb24gcHJvcHMnLCB3aW5lcylcbiAgICBcbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIFxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQgPSdoNCcgYWxpZ249J2NlbnRlcicgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgICAgIEJvcmRlYXV4IEZsaWdodFxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAge3dpbmVzLm1hcCgod2luZSxpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2luZS55ZWFyfSB7d2luZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2luZS5zcGVjaWFsQXR0cmlidXRlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpbmUuZGVzY3JpcHRpb259IFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9J2RpdicgPlxuICAgICAgICAgICAgICAgICAgICAgICAge21vcmVJbmZvID09IHdpbmUuX2lkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9IHsoKSA9PiBzZXRNb3JlSW5mbygnJykgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVzcyBJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz0geygpID0+IHNldE1vcmVJbmZvKHdpbmUuX2lkKSB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3JlIEluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9yZUluZm8gPT0gd2luZS5faWQgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkaXRpb25hbCBJbmZvcm1hdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkJhcnJlbCBQcm9ncmFtPC9zdHJvbmc+OiB7d2luZS53aW5lTWFraW5nLmJhcnJlbFByb2dyYW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBzaXplPVwic21hbGxcIiBhcmlhLWxhYmVsPVwiYSBkZW5zZSB0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhpZGRlbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PSdUQSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249J3JpZ2h0Jz4gVEEgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249J3JpZ2h0Jz4ge3dpbmUud2luZU1ha2luZy50YX0gPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PSdUQSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249J3JpZ2h0Jz4gQUxDIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPSdyaWdodCc+IHt3aW5lLndpbmVNYWtpbmcuYWxjfSA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9J1RBJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj0ncmlnaHQnPiBwaCA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj0ncmlnaHQnPiB7d2luZS53aW5lTWFraW5nLnBofSA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICkgXG4gICAgICAgICAgICBcbiAgICAgICAgfSl9XG4gICAgICAgIFxuXG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICAgICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==