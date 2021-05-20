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

  var wines = props.props;
  console.log('accordion props', wines);

  var handleChange = function handleChange(panel) {
    return function (event, newExpanded) {
      setExpanded(newExpanded ? panel : false);
    };
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: wines.map(function (wine) {
      /*#__PURE__*/
      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Accordion, {
        square: true,
        expanded: expanded === 'panel1',
        onChange: handleChange('panel1'),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccordionSummary, {
          "aria-controls": "panel1d-content",
          id: "panel1d-header",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
            children: "Collapsible Group Item #1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccordionDetails, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, this);
}

_s(FlightList, "jYPfnzZRzqlNeeAvc8qpjGfK9tU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GbGlnaHRMaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIkFjY29yZGlvbiIsIndpdGhTdHlsZXMiLCJyb290IiwiYm9yZGVyIiwiYm94U2hhZG93IiwiYm9yZGVyQm90dG9tIiwiZGlzcGxheSIsIm1hcmdpbiIsImV4cGFuZGVkIiwiTXVpQWNjb3JkaW9uIiwiQWNjb3JkaW9uU3VtbWFyeSIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbkJvdHRvbSIsIm1pbkhlaWdodCIsImNvbnRlbnQiLCJNdWlBY2NvcmRpb25TdW1tYXJ5IiwiQWNjb3JkaW9uRGV0YWlscyIsInRoZW1lIiwicGFkZGluZyIsInNwYWNpbmciLCJNdWlBY2NvcmRpb25EZXRhaWxzIiwiRmxpZ2h0TGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJzZXRFeHBhbmRlZCIsIndpbmVzIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsInBhbmVsIiwiZXZlbnQiLCJuZXdFeHBhbmRlZCIsIm1hcCIsIndpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDekJDLE1BQUksRUFBRTtBQUNGQyxVQUFNLEVBQUUsK0JBRE47QUFFRkMsYUFBUyxFQUFFLE1BRlQ7QUFHRiwwQkFBc0I7QUFDdEJDLGtCQUFZLEVBQUU7QUFEUSxLQUhwQjtBQU1GLGdCQUFZO0FBQ1pDLGFBQU8sRUFBRTtBQURHLEtBTlY7QUFTRixrQkFBYztBQUNkQyxZQUFNLEVBQUU7QUFETTtBQVRaLEdBRG1CO0FBY3pCQyxVQUFRLEVBQUU7QUFkZSxDQUFELENBQVYsQ0FlZkMsZ0VBZmUsQ0FBbEI7QUFpQkEsSUFBTUMsZ0JBQWdCLEdBQUdULG9FQUFVLENBQUM7QUFDaENDLE1BQUksRUFBRTtBQUNGUyxtQkFBZSxFQUFFLG9CQURmO0FBRUZOLGdCQUFZLEVBQUUsK0JBRlo7QUFHRk8sZ0JBQVksRUFBRSxDQUFDLENBSGI7QUFJRkMsYUFBUyxFQUFFLEVBSlQ7QUFLRixrQkFBYztBQUNkQSxlQUFTLEVBQUU7QUFERztBQUxaLEdBRDBCO0FBVWhDQyxTQUFPLEVBQUU7QUFDTCxrQkFBYztBQUNkUCxZQUFNLEVBQUU7QUFETTtBQURULEdBVnVCO0FBZWhDQyxVQUFRLEVBQUU7QUFmc0IsQ0FBRCxDQUFWLENBZ0J0Qk8sdUVBaEJzQixDQUF6QjtBQWtCQSxJQUFNQyxnQkFBZ0IsR0FBR2Ysb0VBQVUsQ0FBQyxVQUFDZ0IsS0FBRDtBQUFBLFNBQVk7QUFDNUNmLFFBQUksRUFBRTtBQUNGZ0IsYUFBTyxFQUFFRCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkO0FBRFA7QUFEc0MsR0FBWjtBQUFBLENBQUQsQ0FBVixDQUlyQkMsdUVBSnFCLENBQXpCO0FBTWUsU0FBU0MsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDTkMsK0NBQVEsQ0FBQyxFQUFELENBREY7QUFBQSxNQUMvQmYsUUFEK0I7QUFBQSxNQUNyQmdCLFdBRHFCOztBQUd0QyxNQUFNQyxLQUFLLEdBQUdILEtBQUssQ0FBQ0EsS0FBcEI7QUFDQUksU0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JGLEtBQS9COztBQUVBLE1BQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQ7QUFBQSxXQUFXLFVBQUNDLEtBQUQsRUFBUUMsV0FBUixFQUF3QjtBQUNwRFAsaUJBQVcsQ0FBQ08sV0FBVyxHQUFHRixLQUFILEdBQVcsS0FBdkIsQ0FBWDtBQUNILEtBRm9CO0FBQUEsR0FBckI7O0FBSUEsc0JBQ0E7QUFBQSxjQUVRSixLQUFLLENBQUNPLEdBQU4sQ0FBVSxVQUFBQyxJQUFJLEVBQUk7QUFDVjtBQUFBLG9FQUFDLFNBQUQ7QUFBVyxjQUFNLE1BQWpCO0FBQWtCLGdCQUFRLEVBQUV6QixRQUFRLEtBQUssUUFBekM7QUFBbUQsZ0JBQVEsRUFBRW9CLFlBQVksQ0FBQyxRQUFELENBQXpFO0FBQUEsZ0NBQ0osOERBQUMsZ0JBQUQ7QUFBa0IsMkJBQWMsaUJBQWhDO0FBQWtELFlBQUUsRUFBQyxnQkFBckQ7QUFBQSxpQ0FDQSw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREksZUFJSiw4REFBQyxnQkFBRDtBQUFBLGlDQUNBLDhEQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZUCxLQWJEO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURBO0FBNkNIOztHQXZEdUJQLFU7O0tBQUFBLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmxpZ2h0L1tzbHVnXS5lODRlYTI2NDI4Mzk4YTFjMTkxZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IE11aUFjY29yZGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb24nO1xyXG5pbXBvcnQgTXVpQWNjb3JkaW9uU3VtbWFyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25TdW1tYXJ5JztcclxuaW1wb3J0IE11aUFjY29yZGlvbkRldGFpbHMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uRGV0YWlscyc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmNvbnN0IEFjY29yZGlvbiA9IHdpdGhTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xMjUpJyxcclxuICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcclxuICAgICAgICAnJjpub3QoOmxhc3QtY2hpbGQpJzoge1xyXG4gICAgICAgIGJvcmRlckJvdHRvbTogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmOmJlZm9yZSc6IHtcclxuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJiRleHBhbmRlZCc6IHtcclxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGV4cGFuZGVkOiB7fSxcclxufSkoTXVpQWNjb3JkaW9uKTtcclxuXHJcbmNvbnN0IEFjY29yZGlvblN1bW1hcnkgPSB3aXRoU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIC4wMyknLFxyXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xMjUpJyxcclxuICAgICAgICBtYXJnaW5Cb3R0b206IC0xLFxyXG4gICAgICAgIG1pbkhlaWdodDogNTYsXHJcbiAgICAgICAgJyYkZXhwYW5kZWQnOiB7XHJcbiAgICAgICAgbWluSGVpZ2h0OiA1NixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAnJiRleHBhbmRlZCc6IHtcclxuICAgICAgICBtYXJnaW46ICcxMnB4IDAnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXhwYW5kZWQ6IHt9LFxyXG59KShNdWlBY2NvcmRpb25TdW1tYXJ5KTtcclxuXHJcbmNvbnN0IEFjY29yZGlvbkRldGFpbHMgPSB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgfSxcclxufSkpKE11aUFjY29yZGlvbkRldGFpbHMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmxpZ2h0TGlzdChwcm9wcykge1xyXG4gICAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3Qgd2luZXMgPSBwcm9wcy5wcm9wc1xyXG4gICAgY29uc29sZS5sb2coJ2FjY29yZGlvbiBwcm9wcycsIHdpbmVzKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChwYW5lbCkgPT4gKGV2ZW50LCBuZXdFeHBhbmRlZCkgPT4ge1xyXG4gICAgICAgIHNldEV4cGFuZGVkKG5ld0V4cGFuZGVkID8gcGFuZWwgOiBmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2luZXMubWFwKHdpbmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24gc3F1YXJlIGV4cGFuZGVkPXtleHBhbmRlZCA9PT0gJ3BhbmVsMSd9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3BhbmVsMScpfT5cclxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5IGFyaWEtY29udHJvbHM9XCJwYW5lbDFkLWNvbnRlbnRcIiBpZD1cInBhbmVsMWQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5Db2xsYXBzaWJsZSBHcm91cCBJdGVtICMxPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9BY2NvcmRpb25TdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTdXNwZW5kaXNzZSBtYWxlc3VhZGEgbGFjdXMgZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l0IGFtZXQgYmxhbmRpdCBsZW8gbG9ib3J0aXMgZWdldC4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmdcclxuICAgICAgICAgICAgICAgICAgICBlbGl0LiBTdXNwZW5kaXNzZSBtYWxlc3VhZGEgbGFjdXMgZXgsIHNpdCBhbWV0IGJsYW5kaXQgbGVvIGxvYm9ydGlzIGVnZXQuXHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB7LyogPEFjY29yZGlvbiBzcXVhcmUgZXhwYW5kZWQ9e2V4cGFuZGVkID09PSAncGFuZWwyJ30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGFuZWwyJyl9PlxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeSBhcmlhLWNvbnRyb2xzPVwicGFuZWwyZC1jb250ZW50XCIgaWQ9XCJwYW5lbDJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5Db2xsYXBzaWJsZSBHcm91cCBJdGVtICMyPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFN1c3BlbmRpc3NlIG1hbGVzdWFkYSBsYWN1cyBleCxcclxuICAgICAgICAgICAgICAgIHNpdCBhbWV0IGJsYW5kaXQgbGVvIGxvYm9ydGlzIGVnZXQuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nXHJcbiAgICAgICAgICAgICAgICBlbGl0LiBTdXNwZW5kaXNzZSBtYWxlc3VhZGEgbGFjdXMgZXgsIHNpdCBhbWV0IGJsYW5kaXQgbGVvIGxvYm9ydGlzIGVnZXQuXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICAgIDxBY2NvcmRpb24gc3F1YXJlIGV4cGFuZGVkPXtleHBhbmRlZCA9PT0gJ3BhbmVsMyd9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3BhbmVsMycpfT5cclxuICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnkgYXJpYS1jb250cm9scz1cInBhbmVsM2QtY29udGVudFwiIGlkPVwicGFuZWwzZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHk+Q29sbGFwc2libGUgR3JvdXAgSXRlbSAjMzwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb25TdW1tYXJ5PlxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTdXNwZW5kaXNzZSBtYWxlc3VhZGEgbGFjdXMgZXgsXHJcbiAgICAgICAgICAgICAgICBzaXQgYW1ldCBibGFuZGl0IGxlbyBsb2JvcnRpcyBlZ2V0LiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZ1xyXG4gICAgICAgICAgICAgICAgZWxpdC4gU3VzcGVuZGlzc2UgbWFsZXN1YWRhIGxhY3VzIGV4LCBzaXQgYW1ldCBibGFuZGl0IGxlbyBsb2JvcnRpcyBlZ2V0LlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICA8L0FjY29yZGlvbj4gKi99XHJcbiAgICA8L2Rpdj5cclxuKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=