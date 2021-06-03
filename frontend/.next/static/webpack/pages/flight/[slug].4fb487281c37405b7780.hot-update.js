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
      // position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      marginBottom: '70px'
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
        style: {
          position: 'fixed'
        },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GbGlnaHRMaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJwYWRkaW5nQm90dG9tIiwid2luZU5hbWUiLCJkaXNwbGF5IiwidGFibGUiLCJXaWR0aCIsIm1vcmVJbmZvIiwiZmFiIiwiYm90dG9tIiwic3BhY2luZyIsInJpZ2h0IiwibWFyZ2luQm90dG9tIiwiRmxpZ2h0TGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJzZXRNb3JlSW5mbyIsImNsYXNzZXMiLCJ3aW5lcyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJ3aW5lIiwiaW5kZXgiLCJ5ZWFyIiwibmFtZSIsInNwZWNpYWxBdHRyaWJ1dGUiLCJkZXNjcmlwdGlvbiIsIl9pZCIsIndpbmVNYWtpbmciLCJiYXJyZWxQcm9ncmFtIiwiUGFwZXIiLCJ0YSIsImFsYyIsInBoIiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0MsNkRBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsUUFBSSxFQUFDO0FBQ0RDLG1CQUFhLEVBQUM7QUFEYixLQURnQztBQUlyQ0MsWUFBUSxFQUFFO0FBQ05DLGFBQU8sRUFBRTtBQURILEtBSjJCO0FBT3JDQyxTQUFLLEVBQUU7QUFDSEMsV0FBSyxFQUFFO0FBREosS0FQOEI7QUFVckNDLFlBQVEsRUFBRTtBQUNOTCxtQkFBYSxFQUFDO0FBRFIsS0FWMkI7QUFhckNNLE9BQUcsRUFBRTtBQUNEO0FBQ0FDLFlBQU0sRUFBRVQsS0FBSyxDQUFDVSxPQUFOLENBQWMsQ0FBZCxDQUZQO0FBR0RDLFdBQUssRUFBRVgsS0FBSyxDQUFDVSxPQUFOLENBQWMsQ0FBZCxDQUhOO0FBSURFLGtCQUFZLEVBQUM7QUFKWjtBQWJnQyxHQUFaO0FBQUEs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QUFBLDJCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUErRFAsT0FoRUksQ0FKTCxlQXFFQSw4REFBQyxrREFBRDtBQUFLLGFBQUssRUFBQyxXQUFYO0FBQXVCLHNCQUFXLE1BQWxDO0FBQXlDLGlCQUFTLEVBQUVqQixPQUFPLENBQUNULEdBQTVEO0FBQWlFLGFBQUssRUFBRTtBQUFDMkIsa0JBQVEsRUFBRTtBQUFYLFNBQXhFO0FBQUEsK0JBQ0ksOERBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURBO0FBK0VIOztHQXpGdUJ0QixVO1VBR0pmLFM7OztLQUhJZSxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZsaWdodC9bc2x1Z10uNGZiNDg3MjgxYzM3NDA1Yjc3ODAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0e0NvbnRhaW5lciwgVHlwb2dyYXBoeSwgQm94LCBCdXR0b24sIFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgVGFibGVDb250YWluZXIsIFRhYmxlSGVhZCwgVGFibGVSb3csIFBhcGVyLCBIaWRkZW4sIEZhYn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IEVkaXRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FZGl0JztcbmltcG9ydCB7IG1ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6e1xuICAgICAgICBwYWRkaW5nQm90dG9tOic3MHB4J1xuICAgIH0sXG4gICAgd2luZU5hbWU6IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgICAgV2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICAgIG1vcmVJbmZvOiB7XG4gICAgICAgIHBhZGRpbmdCb3R0b206JzMuMmVtJ1xuICAgIH0sXG4gICAgZmFiOiB7XG4gICAgICAgIC8vIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICBib3R0b206IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICAgIHJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgICBtYXJnaW5Cb3R0b206JzcwcHgnLFxuICAgIH1cbn0pKVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZsaWdodExpc3QocHJvcHMpIHtcbiAgICBjb25zdCBbIG1vcmVJbmZvLCBzZXRNb3JlSW5mb10gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuXG5cbiAgICBjb25zdCB3aW5lcyA9IHByb3BzLnByb3BzXG4gICAgY29uc29sZS5sb2coJ2FjY29yZGlvbiBwcm9wcycsIHdpbmVzKVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudCA9J2g0JyBhbGlnbj0nY2VudGVyJyBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICAgICAgQm9yZGVhdXggRmxpZ2h0XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICB7d2luZXMubWFwKCh3aW5lLGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3aW5lLnllYXJ9IHt3aW5lLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3aW5lLnNwZWNpYWxBdHRyaWJ1dGV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2luZS5kZXNjcmlwdGlvbn0gXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNvbXBvbmVudD0nZGl2JyA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21vcmVJbmZvID09IHdpbmUuX2lkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPSB7KCkgPT4gc2V0TW9yZUluZm8oJycpIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXNzIEluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPSB7KCkgPT4gc2V0TW9yZUluZm8od2luZS5faWQpIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3JlIEluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb3JlSW5mbyA9PSB3aW5lLl9pZCAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3JlSW5mb30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZGl0aW9uYWwgSW5mb3JtYXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5CYXJyZWwgUHJvZ3JhbTwvc3Ryb25nPjoge3dpbmUud2luZU1ha2luZy5iYXJyZWxQcm9ncmFtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0gc2l6ZT1cInNtYWxsXCIgYXJpYS1sYWJlbD1cImEgZGVuc2UgdGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIaWRkZW4geHNVcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5TdGF0PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImxlZnRcIj5BbW91bnQ8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PSd0YSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249J3JpZ2h0Jz4gVEEgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249J3JpZ2h0Jz4ge3dpbmUud2luZU1ha2luZy50YX0gPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PSdhbGMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPSdyaWdodCc+IEFMQyA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj0ncmlnaHQnPiB7d2luZS53aW5lTWFraW5nLmFsY30gPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PSdwaCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249J3JpZ2h0Jz4gcGggPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249J3JpZ2h0Jz4ge3dpbmUud2luZU1ha2luZy5waH0gPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICApIFxuICAgICAgICAgICAgXG4gICAgICAgIH0pfVxuICAgICAgICA8RmFiIGNvbG9yPVwic2Vjb25kYXJ5XCIgYXJpYS1sYWJlbD1cImVkaXRcIiBjbGFzc05hbWU9e2NsYXNzZXMuZmFifSBzdHlsZT17e3Bvc2l0aW9uOiAnZml4ZWQnfX0+XG4gICAgICAgICAgICA8RWRpdEljb24gLz5cbiAgICAgICAgPC9GYWI+XG5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9