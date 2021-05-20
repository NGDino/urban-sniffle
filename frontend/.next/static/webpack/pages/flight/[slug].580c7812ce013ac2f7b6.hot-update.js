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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Accordion */ "./node_modules/@material-ui/core/esm/Accordion/index.js");
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AccordionSummary */ "./node_modules/@material-ui/core/esm/AccordionSummary/index.js");
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AccordionDetails */ "./node_modules/@material-ui/core/esm/AccordionDetails/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\FlightList\\index.js",
    _s = $RefreshSig$();







var useStyes = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStles)({
  wineName: {
    display: display
  }
});
var Accordion = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.withStyles)({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
})(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3__.default);
var AccordionSummary = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.withStyles)({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56
    }
  },
  content: {
    '&$expanded': {
      margin: '12px 0'
    }
  },
  expanded: {}
})(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4__.default);
var AccordionDetails = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.withStyles)(function (theme) {
  return {
    root: {
      padding: theme.spacing(2)
    }
  };
})(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_5__.default);
function FlightList(props) {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      expanded = _useState[0],
      setExpanded = _useState[1];

  var classes = useStyles();
  var wines = props.props;
  console.log('accordion props', wines);

  var handleChange = function handleChange(panel) {
    return function (event, newExpanded) {
      setExpanded(newExpanded ? panel : false);
    };
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: wines.map(function (wine, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Accordion, {
        square: true,
        expanded: expanded === "panel1_".concat(index),
        onChange: handleChange("panel1_".concat(index)),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccordionSummary, {
          "aria-controls": "panel1d-content",
          id: "panel1d-header",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
            className: classes.wineName,
            variant: "h5",
            component: "h2",
            gutterBottom: true,
            children: [wine.year, " ", wine.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
            variant: "p",
            children: wine.varietals
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccordionDetails, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, this);
}

_s(FlightList, "s2e7FqJiCRwaEYcT86ir77KoAq8=", true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GbGlnaHRMaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWVzIiwibWFrZVN0bGVzIiwid2luZU5hbWUiLCJkaXNwbGF5IiwiQWNjb3JkaW9uIiwid2l0aFN0eWxlcyIsInJvb3QiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJib3JkZXJCb3R0b20iLCJtYXJnaW4iLCJleHBhbmRlZCIsIk11aUFjY29yZGlvbiIsIkFjY29yZGlvblN1bW1hcnkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJtaW5IZWlnaHQiLCJjb250ZW50IiwiTXVpQWNjb3JkaW9uU3VtbWFyeSIsIkFjY29yZGlvbkRldGFpbHMiLCJ0aGVtZSIsInBhZGRpbmciLCJzcGFjaW5nIiwiTXVpQWNjb3JkaW9uRGV0YWlscyIsIkZsaWdodExpc3QiLCJwcm9wcyIsInVzZVN0YXRlIiwic2V0RXhwYW5kZWQiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwid2luZXMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwicGFuZWwiLCJldmVudCIsIm5ld0V4cGFuZGVkIiwibWFwIiwid2luZSIsImluZGV4IiwieWVhciIsIm5hbWUiLCJ2YXJpZXRhbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLG1FQUFTLENBQUM7QUFDdkJDLFVBQVEsRUFBRTtBQUNOQyxXQUFPLEVBQVBBO0FBRE07QUFEYSxDQUFELENBQTFCO0FBTUEsSUFBTUMsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUU7QUFDRkMsVUFBTSxFQUFFLCtCQUROO0FBRUZDLGFBQVMsRUFBRSxNQUZUO0FBR0YsMEJBQXNCO0FBQ3RCQyxrQkFBWSxFQUFFO0FBRFEsS0FIcEI7QUFNRixnQkFBWTtBQUNaTixhQUFPLEVBQUU7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dWddLjU4MGM3ODEyY2UwMTNhYzJmN2I2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdGxlcywgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBNdWlBY2NvcmRpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uJztcclxuaW1wb3J0IE11aUFjY29yZGlvblN1bW1hcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uU3VtbWFyeSc7XHJcbmltcG9ydCBNdWlBY2NvcmRpb25EZXRhaWxzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvbkRldGFpbHMnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHllcyA9IG1ha2VTdGxlcyh7XHJcbiAgICB3aW5lTmFtZToge1xyXG4gICAgICAgIGRpc3BsYXlcclxuICAgIH1cclxufSlcclxuXHJcbmNvbnN0IEFjY29yZGlvbiA9IHdpdGhTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xMjUpJyxcclxuICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcclxuICAgICAgICAnJjpub3QoOmxhc3QtY2hpbGQpJzoge1xyXG4gICAgICAgIGJvcmRlckJvdHRvbTogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmOmJlZm9yZSc6IHtcclxuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJiRleHBhbmRlZCc6IHtcclxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGV4cGFuZGVkOiB7fSxcclxufSkoTXVpQWNjb3JkaW9uKTtcclxuXHJcbmNvbnN0IEFjY29yZGlvblN1bW1hcnkgPSB3aXRoU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIC4wMyknLFxyXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xMjUpJyxcclxuICAgICAgICBtYXJnaW5Cb3R0b206IC0xLFxyXG4gICAgICAgIG1pbkhlaWdodDogNTYsXHJcbiAgICAgICAgJyYkZXhwYW5kZWQnOiB7XHJcbiAgICAgICAgbWluSGVpZ2h0OiA1NixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAnJiRleHBhbmRlZCc6IHtcclxuICAgICAgICBtYXJnaW46ICcxMnB4IDAnLFxyXG4gICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXhwYW5kZWQ6IHt9LFxyXG59KShNdWlBY2NvcmRpb25TdW1tYXJ5KTtcclxuXHJcbmNvbnN0IEFjY29yZGlvbkRldGFpbHMgPSB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgfSxcclxufSkpKE11aUFjY29yZGlvbkRldGFpbHMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmxpZ2h0TGlzdChwcm9wcykge1xyXG4gICAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcblxyXG4gICAgY29uc3Qgd2luZXMgPSBwcm9wcy5wcm9wc1xyXG4gICAgY29uc29sZS5sb2coJ2FjY29yZGlvbiBwcm9wcycsIHdpbmVzKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChwYW5lbCkgPT4gKGV2ZW50LCBuZXdFeHBhbmRlZCkgPT4ge1xyXG4gICAgICAgIHNldEV4cGFuZGVkKG5ld0V4cGFuZGVkID8gcGFuZWwgOiBmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2luZXMubWFwKCh3aW5lLCBpbmRleCApPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24gc3F1YXJlIGV4cGFuZGVkPXtleHBhbmRlZCA9PT0gYHBhbmVsMV8ke2luZGV4fWB9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoYHBhbmVsMV8ke2luZGV4fWApfT5cclxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeSBhcmlhLWNvbnRyb2xzPVwicGFuZWwxZC1jb250ZW50XCIgaWQ9XCJwYW5lbDFkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy53aW5lTmFtZX0gdmFyaWFudD0naDUnIGNvbXBvbmVudD1cImgyXCIgZ3V0dGVyQm90dG9tID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3dpbmUueWVhcn0ge3dpbmUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0ncCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt3aW5lLnZhcmlldGFsc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFN1c3BlbmRpc3NlIG1hbGVzdWFkYSBsYWN1cyBleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l0IGFtZXQgYmxhbmRpdCBsZW8gbG9ib3J0aXMgZWdldC4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gU3VzcGVuZGlzc2UgbWFsZXN1YWRhIGxhY3VzIGV4LCBzaXQgYW1ldCBibGFuZGl0IGxlbyBsb2JvcnRpcyBlZ2V0LlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB7LyogPEFjY29yZGlvbiBzcXVhcmUgZXhwYW5kZWQ9e2V4cGFuZGVkID09PSAncGFuZWwyJ30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGFuZWwyJyl9PlxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeSBhcmlhLWNvbnRyb2xzPVwicGFuZWwyZC1jb250ZW50XCIgaWQ9XCJwYW5lbDJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5Db2xsYXBzaWJsZSBHcm91cCBJdGVtICMyPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFN1c3BlbmRpc3NlIG1hbGVzdWFkYSBsYWN1cyBleCxcclxuICAgICAgICAgICAgICAgIHNpdCBhbWV0IGJsYW5kaXQgbGVvIGxvYm9ydGlzIGVnZXQuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nXHJcbiAgICAgICAgICAgICAgICBlbGl0LiBTdXNwZW5kaXNzZSBtYWxlc3VhZGEgbGFjdXMgZXgsIHNpdCBhbWV0IGJsYW5kaXQgbGVvIGxvYm9ydGlzIGVnZXQuXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICAgIDxBY2NvcmRpb24gc3F1YXJlIGV4cGFuZGVkPXtleHBhbmRlZCA9PT0gJ3BhbmVsMyd9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3BhbmVsMycpfT5cclxuICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnkgYXJpYS1jb250cm9scz1cInBhbmVsM2QtY29udGVudFwiIGlkPVwicGFuZWwzZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHk+Q29sbGFwc2libGUgR3JvdXAgSXRlbSAjMzwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb25TdW1tYXJ5PlxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTdXNwZW5kaXNzZSBtYWxlc3VhZGEgbGFjdXMgZXgsXHJcbiAgICAgICAgICAgICAgICBzaXQgYW1ldCBibGFuZGl0IGxlbyBsb2JvcnRpcyBlZ2V0LiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZ1xyXG4gICAgICAgICAgICAgICAgZWxpdC4gU3VzcGVuZGlzc2UgbWFsZXN1YWRhIGxhY3VzIGV4LCBzaXQgYW1ldCBibGFuZGl0IGxlbyBsb2JvcnRpcyBlZ2V0LlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICA8L0FjY29yZGlvbj4gKi99XHJcbiAgICA8L2Rpdj5cclxuKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=