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
    children: [wines.map(wine), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Accordion, {
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
          lineNumber: 66,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccordionDetails, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
          children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GbGlnaHRMaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIkFjY29yZGlvbiIsIndpdGhTdHlsZXMiLCJyb290IiwiYm9yZGVyIiwiYm94U2hhZG93IiwiYm9yZGVyQm90dG9tIiwiZGlzcGxheSIsIm1hcmdpbiIsImV4cGFuZGVkIiwiTXVpQWNjb3JkaW9uIiwiQWNjb3JkaW9uU3VtbWFyeSIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbkJvdHRvbSIsIm1pbkhlaWdodCIsImNvbnRlbnQiLCJNdWlBY2NvcmRpb25TdW1tYXJ5IiwiQWNjb3JkaW9uRGV0YWlscyIsInRoZW1lIiwicGFkZGluZyIsInNwYWNpbmciLCJNdWlBY2NvcmRpb25EZXRhaWxzIiwiRmxpZ2h0TGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJzZXRFeHBhbmRlZCIsIndpbmVzIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsInBhbmVsIiwiZXZlbnQiLCJuZXdFeHBhbmRlZCIsIm1hcCIsIndpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDekJDLE1BQUksRUFBRTtBQUNGQyxVQUFNLEVBQUUsK0JBRE47QUFFRkMsYUFBUyxFQUFFLE1BRlQ7QUFHRiwwQkFBc0I7QUFDdEJDLGtCQUFZLEVBQUU7QUFEUSxLQUhwQjtBQU1GLGdCQUFZO0FBQ1pDLGFBQU8sRUFBRTtBQURHLEtBTlY7QUFTRixrQkFBYztBQUNkQyxZQUFNLEVBQUU7QUFETTtBQVRaLEdBRG1CO0FBY3pCQyxVQUFRLEVBQUU7QUFkZSxDQUFELENBQVYsQ0FlZkMsZ0VBZmUsQ0FBbEI7QUFpQkEsSUFBTUMsZ0JBQWdCLEdBQUdULG9FQUFVLENBQUM7QUFDaENDLE1BQUksRUFBRTtBQUNGUyxtQkFBZSxFQUFFLG9CQURmO0FBRUZOLGdCQUFZLEVBQUUsK0JBRlo7QUFHRk8sZ0JBQVksRUFBRSxDQUFDLENBSGI7QUFJRkMsYUFBUyxFQUFFLEVBSlQ7QUFLRixrQkFBYztBQUNkQSxlQUFTLEVBQUU7QUFERztBQUxaLEdBRDBCO0FBVWhDQyxTQUFPLEVBQUU7QUFDTCxrQkFBYztBQUNkUCxZQUFNLEVBQUU7QUFETTtBQURULEdBVnVCO0FBZWhDQyxVQUFRLEVBQUU7QUFmc0IsQ0FBRCxDQUFWLENBZ0J0Qk8sdUVBaEJzQixDQUF6QjtBQWtCQSxJQUFNQyxnQkFBZ0IsR0FBR2Ysb0VBQVUsQ0FBQyxVQUFDZ0IsS0FBRDtBQUFBLFNBQVk7QUFDNUNmLFFBQUksRUFBRTtBQUNGZ0IsYUFBTyxFQUFFRCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkO0FBRFA7QUFEc0MsR0FBWjtBQUFBLENBQUQsQ0FBVixDQUlyQkMsdUVBSnFCLENBQXpCO0FBTWUsU0FBU0MsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFBQTs7QUFBQSxrQkFDTkMsK0NBQVEsQ0FBQyxFQUFELENBREY7QUFBQSxNQUMvQmYsUUFEK0I7QUFBQSxNQUNyQmdCLFdBRHFCOztBQUd0QyxNQUFNQyxLQUFLLEdBQUdILEtBQUssQ0FBQ0EsS0FBcEI7QUFDQUksU0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JGLEtBQS9COztBQUVBLE1BQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQ7QUFBQSxXQUFXLFVBQUNDLEtBQUQsRUFBUUMsV0FBUixFQUF3QjtBQUNwRFAsaUJBQVcsQ0FBQ08sV0FBVyxHQUFHRixLQUFILEdBQVcsS0FBdkIsQ0FBWDtBQUNILEtBRm9CO0FBQUEsR0FBckI7O0FBSUEsc0JBQ0E7QUFBQSxlQUVRSixLQUFLLENBQUNPLEdBQU4sQ0FBVUMsSUFBVixDQUZSLGVBSUksOERBQUMsU0FBRDtBQUFXLFlBQU0sTUFBakI7QUFBa0IsY0FBUSxFQUFFekIsUUFBUSxLQUFLLFFBQXpDO0FBQW1ELGNBQVEsRUFBRW9CLFlBQVksQ0FBQyxRQUFELENBQXpFO0FBQUEsOEJBQ0ksOERBQUMsZ0JBQUQ7QUFBa0IseUJBQWMsaUJBQWhDO0FBQWtELFVBQUUsRUFBQyxnQkFBckQ7QUFBQSwrQkFDQSw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJLDhEQUFDLGdCQUFEO0FBQUEsK0JBQ0EsOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUEyQ0g7O0dBckR1QlAsVTs7S0FBQUEsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mbGlnaHQvW3NsdWddLmYzMTQ0NDg5MjBmZTU4NTI4M2M3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgTXVpQWNjb3JkaW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvbic7XHJcbmltcG9ydCBNdWlBY2NvcmRpb25TdW1tYXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvblN1bW1hcnknO1xyXG5pbXBvcnQgTXVpQWNjb3JkaW9uRGV0YWlscyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25EZXRhaWxzJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgQWNjb3JkaW9uID0gd2l0aFN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyNSknLFxyXG4gICAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxyXG4gICAgICAgICcmOm5vdCg6bGFzdC1jaGlsZCknOiB7XHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyY6YmVmb3JlJzoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmJGV4cGFuZGVkJzoge1xyXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXhwYW5kZWQ6IHt9LFxyXG59KShNdWlBY2NvcmRpb24pO1xyXG5cclxuY29uc3QgQWNjb3JkaW9uU3VtbWFyeSA9IHdpdGhTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgLjAzKScsXHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyNSknLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogLTEsXHJcbiAgICAgICAgbWluSGVpZ2h0OiA1NixcclxuICAgICAgICAnJiRleHBhbmRlZCc6IHtcclxuICAgICAgICBtaW5IZWlnaHQ6IDU2LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY29udGVudDoge1xyXG4gICAgICAgICcmJGV4cGFuZGVkJzoge1xyXG4gICAgICAgIG1hcmdpbjogJzEycHggMCcsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBleHBhbmRlZDoge30sXHJcbn0pKE11aUFjY29yZGlvblN1bW1hcnkpO1xyXG5cclxuY29uc3QgQWNjb3JkaW9uRGV0YWlscyA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB9LFxyXG59KSkoTXVpQWNjb3JkaW9uRGV0YWlscyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGbGlnaHRMaXN0KHByb3BzKSB7XHJcbiAgICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCB3aW5lcyA9IHByb3BzLnByb3BzXHJcbiAgICBjb25zb2xlLmxvZygnYWNjb3JkaW9uIHByb3BzJywgd2luZXMpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHBhbmVsKSA9PiAoZXZlbnQsIG5ld0V4cGFuZGVkKSA9PiB7XHJcbiAgICAgICAgc2V0RXhwYW5kZWQobmV3RXhwYW5kZWQgPyBwYW5lbCA6IGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aW5lcy5tYXAod2luZSApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxBY2NvcmRpb24gc3F1YXJlIGV4cGFuZGVkPXtleHBhbmRlZCA9PT0gJ3BhbmVsMSd9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3BhbmVsMScpfT5cclxuICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnkgYXJpYS1jb250cm9scz1cInBhbmVsMWQtY29udGVudFwiIGlkPVwicGFuZWwxZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHk+Q29sbGFwc2libGUgR3JvdXAgSXRlbSAjMTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb25TdW1tYXJ5PlxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTdXNwZW5kaXNzZSBtYWxlc3VhZGEgbGFjdXMgZXgsXHJcbiAgICAgICAgICAgICAgICBzaXQgYW1ldCBibGFuZGl0IGxlbyBsb2JvcnRpcyBlZ2V0LiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZ1xyXG4gICAgICAgICAgICAgICAgZWxpdC4gU3VzcGVuZGlzc2UgbWFsZXN1YWRhIGxhY3VzIGV4LCBzaXQgYW1ldCBibGFuZGl0IGxlbyBsb2JvcnRpcyBlZ2V0LlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICB7LyogPEFjY29yZGlvbiBzcXVhcmUgZXhwYW5kZWQ9e2V4cGFuZGVkID09PSAncGFuZWwyJ30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGFuZWwyJyl9PlxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeSBhcmlhLWNvbnRyb2xzPVwicGFuZWwyZC1jb250ZW50XCIgaWQ9XCJwYW5lbDJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5Db2xsYXBzaWJsZSBHcm91cCBJdGVtICMyPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFN1c3BlbmRpc3NlIG1hbGVzdWFkYSBsYWN1cyBleCxcclxuICAgICAgICAgICAgICAgIHNpdCBhbWV0IGJsYW5kaXQgbGVvIGxvYm9ydGlzIGVnZXQuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nXHJcbiAgICAgICAgICAgICAgICBlbGl0LiBTdXNwZW5kaXNzZSBtYWxlc3VhZGEgbGFjdXMgZXgsIHNpdCBhbWV0IGJsYW5kaXQgbGVvIGxvYm9ydGlzIGVnZXQuXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICAgIDxBY2NvcmRpb24gc3F1YXJlIGV4cGFuZGVkPXtleHBhbmRlZCA9PT0gJ3BhbmVsMyd9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3BhbmVsMycpfT5cclxuICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnkgYXJpYS1jb250cm9scz1cInBhbmVsM2QtY29udGVudFwiIGlkPVwicGFuZWwzZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHk+Q29sbGFwc2libGUgR3JvdXAgSXRlbSAjMzwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb25TdW1tYXJ5PlxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTdXNwZW5kaXNzZSBtYWxlc3VhZGEgbGFjdXMgZXgsXHJcbiAgICAgICAgICAgICAgICBzaXQgYW1ldCBibGFuZGl0IGxlbyBsb2JvcnRpcyBlZ2V0LiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZ1xyXG4gICAgICAgICAgICAgICAgZWxpdC4gU3VzcGVuZGlzc2UgbWFsZXN1YWRhIGxhY3VzIGV4LCBzaXQgYW1ldCBibGFuZGl0IGxlbyBsb2JvcnRpcyBlZ2V0LlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICA8L0FjY29yZGlvbj4gKi99XHJcbiAgICA8L2Rpdj5cclxuKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=