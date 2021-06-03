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
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\FlightList\\index.js",
    _s = $RefreshSig$();





var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(function (theme) {
  return {
    root: {
      paddingBottom: '70px'
    },
    wineName: {
      display: 'block'
    },
    table: {
      Width: '100%'
    },
    moreInfo: {
      paddingBottom: '3.2em'
    },
    fab: {
      margin: theme.spacing.unit,
      // You might not need this now
      position: "fixed",
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 3
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
        lineNumber: 44,
        columnNumber: 13
      }, this), wines.map(function (wine, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
            variant: "h5",
            children: [wine.year, " ", wine.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
            variant: "subtitle2",
            children: wine.specialAttribute
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
            variant: "subtitle1",
            children: wine.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
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
              lineNumber: 61,
              columnNumber: 33
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
              onClick: function onClick() {
                return setMoreInfo(wine._id);
              },
              children: "More Info"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 33
            }, _this), moreInfo == wine._id && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: classes.moreInfo,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                variant: "h6",
                children: "Additional Information:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                variant: "body1",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                  children: "Barrel Program"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 37
                }, _this), ": ", wine.wineMaking.barrelProgram]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableContainer, {
                component: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Paper,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Table, {
                  className: classes.table,
                  size: "small",
                  "aria-label": "a dense table",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Hidden, {
                    xsUp: true,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableHead, {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableRow, {
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                          children: "Stat"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 82,
                          columnNumber: 41
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                          align: "left",
                          children: "Amount"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 83,
                          columnNumber: 41
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 81,
                        columnNumber: 37
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 80,
                      columnNumber: 37
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 37
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableBody, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableRow, {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                        align: "right",
                        children: " TA "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 90,
                        columnNumber: 45
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                        align: "right",
                        children: [" ", wine.wineMaking.ta, " "]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 91,
                        columnNumber: 45
                      }, _this)]
                    }, 'ta', true, {
                      fileName: _jsxFileName,
                      lineNumber: 89,
                      columnNumber: 41
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableRow, {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                        align: "right",
                        children: " ALC "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 94,
                        columnNumber: 45
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                        align: "right",
                        children: [" ", wine.wineMaking.alc, " "]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 95,
                        columnNumber: 45
                      }, _this)]
                    }, 'alc', true, {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                      columnNumber: 41
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableRow, {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                        align: "right",
                        children: " ph "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 98,
                        columnNumber: 45
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                        align: "right",
                        children: [" ", wine.wineMaking.ph, " "]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 99,
                        columnNumber: 45
                      }, _this)]
                    }, 'ph', true, {
                      fileName: _jsxFileName,
                      lineNumber: 97,
                      columnNumber: 41
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 37
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, _this);
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Fab, {
        color: "secondary",
        "aria-label": "edit",
        className: classes.fab,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GbGlnaHRMaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJwYWRkaW5nQm90dG9tIiwid2luZU5hbWUiLCJkaXNwbGF5IiwidGFibGUiLCJXaWR0aCIsIm1vcmVJbmZvIiwiZmFiIiwibWFyZ2luIiwic3BhY2luZyIsInVuaXQiLCJwb3NpdGlvbiIsImJvdHRvbSIsInJpZ2h0IiwiRmxpZ2h0TGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJzZXRNb3JlSW5mbyIsImNsYXNzZXMiLCJ3aW5lcyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJ3aW5lIiwiaW5kZXgiLCJ5ZWFyIiwibmFtZSIsInNwZWNpYWxBdHRyaWJ1dGUiLCJkZXNjcmlwdGlvbiIsIl9pZCIsIndpbmVNYWtpbmciLCJiYXJyZWxQcm9ncmFtIiwiUGFwZXIiLCJ0YSIsImFsYyIsInBoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLDZEQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDckNDLFFBQUksRUFBQztBQUNEQyxtQkFBYSxFQUFDO0FBRGIsS0FEZ0M7QUFJckNDLFlBQVEsRUFBRTtBQUNOQyxhQUFPLEVBQUU7QUFESCxLQUoyQjtBQU9yQ0MsU0FBSyxFQUFFO0FBQ0hDLFdBQUssRUFBRTtBQURKLEtBUDhCO0FBVXJDQyxZQUFRLEVBQUU7QUFDTkwsbUJBQWEsRUFBQztBQURSLEtBVjJCO0FBYXJDTSxPQUFHLEVBQUU7QUFDREMsWUFBTSxFQUFFVCxLQUFLLENBQUNVLE9BQU4sQ0FBY0MsSUFEckI7QUFDMkI7QUFDaENDLGNBQVEsRUFBRSxPQUZMO0FBR0xDLFlBQU0sRUFBRWIsS0FBSyxDQUFDVSxPQUFOLENBQWNDLElBQWQsR0FBcUIsQ0FIeEI7QUFJTEcsV0FB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Rko7QUFBQSx1QkFBYyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUErRFAsT0FoRUksQ0FKTCxlQXFFQSw4REFBQyxrREFBRDtBQUFLLGFBQUssRUFBQyxXQUFYO0FBQXVCLHNCQUFXLE1BQWxDO0FBQXlDLGlCQUFTLEVBQUVqQixPQUFPLENBQUNYLEdBQTVEO0FBQUEsK0JBQ0ksOERBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURBO0FBK0VIOztHQXpGdUJPLFU7VUFHSmpCLFM7OztLQUhJaUIsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mbGlnaHQvW3NsdWddLmNjMWM2NWIzYTliMGJlM2QyMTg0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydHtDb250YWluZXIsIFR5cG9ncmFwaHksIEJveCwgQnV0dG9uLCBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlQ29udGFpbmVyLCBUYWJsZUhlYWQsIFRhYmxlUm93LCBQYXBlciwgSGlkZGVuLCBGYWJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBFZGl0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRWRpdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICByb290OntcbiAgICAgICAgcGFkZGluZ0JvdHRvbTonNzBweCdcbiAgICB9LFxuICAgIHdpbmVOYW1lOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICAgIFdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgICBtb3JlSW5mbzoge1xuICAgICAgICBwYWRkaW5nQm90dG9tOiczLjJlbSdcbiAgICB9LFxuICAgIGZhYjoge1xuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcudW5pdCwgLy8gWW91IG1pZ2h0IG5vdCBuZWVkIHRoaXMgbm93XG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICBib3R0b206IHRoZW1lLnNwYWNpbmcudW5pdCAqIDIsXG4gICAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDNcbiAgICB9XG59KSlcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGbGlnaHRMaXN0KHByb3BzKSB7XG4gICAgY29uc3QgWyBtb3JlSW5mbywgc2V0TW9yZUluZm9dID0gdXNlU3RhdGUoJycpO1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cblxuXG4gICAgY29uc3Qgd2luZXMgPSBwcm9wcy5wcm9wc1xuICAgIGNvbnNvbGUubG9nKCdhY2NvcmRpb24gcHJvcHMnLCB3aW5lcylcbiAgICBcbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIFxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQgPSdoNCcgYWxpZ249J2NlbnRlcicgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgICAgIEJvcmRlYXV4IEZsaWdodFxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAge3dpbmVzLm1hcCgod2luZSxpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2luZS55ZWFyfSB7d2luZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2luZS5zcGVjaWFsQXR0cmlidXRlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpbmUuZGVzY3JpcHRpb259IFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9J2RpdicgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb3JlSW5mbyA9PSB3aW5lLl9pZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz0geygpID0+IHNldE1vcmVJbmZvKCcnKSB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVzcyBJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz0geygpID0+IHNldE1vcmVJbmZvKHdpbmUuX2lkKSB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9yZSBJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9yZUluZm8gPT0gd2luZS5faWQgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubW9yZUluZm99PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRpdGlvbmFsIEluZm9ybWF0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+QmFycmVsIFByb2dyYW08L3N0cm9uZz46IHt3aW5lLndpbmVNYWtpbmcuYmFycmVsUHJvZ3JhbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9IHNpemU9XCJzbWFsbFwiIGFyaWEtbGFiZWw9XCJhIGRlbnNlIHRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGlkZGVuIHhzVXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+U3RhdDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJsZWZ0XCI+QW1vdW50PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT0ndGEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPSdyaWdodCc+IFRBIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPSdyaWdodCc+IHt3aW5lLndpbmVNYWtpbmcudGF9IDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT0nYWxjJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj0ncmlnaHQnPiBBTEMgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249J3JpZ2h0Jz4ge3dpbmUud2luZU1ha2luZy5hbGN9IDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT0ncGgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPSdyaWdodCc+IHBoIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPSdyaWdodCc+IHt3aW5lLndpbmVNYWtpbmcucGh9IDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgKSBcbiAgICAgICAgICAgIFxuICAgICAgICB9KX1cbiAgICAgICAgPEZhYiBjb2xvcj1cInNlY29uZGFyeVwiIGFyaWEtbGFiZWw9XCJlZGl0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZhYn0gPlxuICAgICAgICAgICAgPEVkaXRJY29uIC8+XG4gICAgICAgIDwvRmFiPlxuXG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICAgICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==