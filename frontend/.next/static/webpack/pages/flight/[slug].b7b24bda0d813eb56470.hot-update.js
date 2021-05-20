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
            lineNumber: 67,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
            variant: "p",
            children: wine.varietals
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccordionDetails, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GbGlnaHRMaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIkFjY29yZGlvbiIsIndpdGhTdHlsZXMiLCJyb290IiwiYm9yZGVyIiwiYm94U2hhZG93IiwiYm9yZGVyQm90dG9tIiwiZGlzcGxheSIsIm1hcmdpbiIsImV4cGFuZGVkIiwiTXVpQWNjb3JkaW9uIiwiQWNjb3JkaW9uU3VtbWFyeSIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbkJvdHRvbSIsIm1pbkhlaWdodCIsImNvbnRlbnQiLCJNdWlBY2NvcmRpb25TdW1tYXJ5IiwiQWNjb3JkaW9uRGV0YWlscyIsInRoZW1lIiwicGFkZGluZyIsInNwYWNpbmciLCJNdWlBY2NvcmRpb25EZXRhaWxzIiwiRmxpZ2h0TGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJzZXRFeHBhbmRlZCIsIndpbmVzIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsInBhbmVsIiwiZXZlbnQiLCJuZXdFeHBhbmRlZCIsIm1hcCIsIndpbmUiLCJpbmRleCIsImNsYXNzZXMiLCJ3aW5lTmFtZSIsInllYXIiLCJuYW1lIiwidmFyaWV0YWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUU7QUFDRkMsVUFBTSxFQUFFLCtCQUROO0FBRUZDLGFBQVMsRUFBRSxNQUZUO0FBR0YsMEJBQXNCO0FBQ3RCQyxrQkFBWSxFQUFFO0FBRFEsS0FIcEI7QUFNRixnQkFBWTtBQUNaQyxhQUFPLEVBQUU7QUFERyxLQU5WO0FBU0Ysa0JBQWM7QUFDZEMsWUFBTSxFQUFFO0FBRE07QUFUWixHQURtQjtBQWN6QkMsVUFBUSxFQUFFO0FBZGUsQ0FBRCxDQUFWLENBZWZDLGdFQWZlLENBQWxCO0FBaUJBLElBQU1DLGdCQUFnQixHQUFHVCxvRUFBVSxDQUFDO0FBQ2hDQyxNQUFJLEVBQUU7QUFDRlMsbUJBQWUsRUFBRSxvQkFEZjtBQUVGTixnQkFBWSxFQUFFLCtCQUZaO0FBR0ZPLGdCQUFZLEVBQUUsQ0FBQyxDQUhiO0FBSUZDLGFBQVMsRUFBRSxFQUpUO0FBS0Ysa0JBQWM7QUFDZEEsZUFBUyxFQUFFO0FBREc7QUFMWixHQUQwQjtBQVVoQ0MsU0FBTyxFQUFFO0FBQ0wsa0JBQWM7QUFDZFAsWUFBTSxFQUFFO0FBRE07QUFEVCxHQVZ1QjtBQWdCaENDLFVBQVEsRUFBRTtBQWhCc0IsQ0FBRCxDQUFWLENBaUJ0Qk8sdUVBakJzQixDQUF6QjtBQW1CQSxJQUFNQyxnQkFBZ0IsR0FBR2Ysb0VBQVUsQ0FBQyxVQUFDZ0IsS0FBRDtBQUFBLFNBQVk7QUFDNUNmLFFBQUksRUFBRTtBQUNGZ0IsYUFBTyxFQUFFRCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkO0FBRFA7QUFEc0MsR0FBWjtBQUFBLENBQUQsQ0FBVixDQUlyQkMsdUVBSnFCLENBQXpCO0FBTWUsU0FBU0MsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDTkMsK0NBQVEsQ0FBQyxFQUFELENBREY7QUFBQSxNQUMvQmYsUUFEK0I7QUFBQSxNQUNyQmdCLFdBRHFCOztBQUd0QyxNQUFNQyxLQUFLLEdBQUdILEtBQUssQ0FBQ0EsS0FBcEI7QUFDQUksU0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JGLEtBQS9COztBQUVBLE1BQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQ7QUFBQSxXQUFXLFVBQUNDLEtBQUQsRUFBUUMsV0FBUixFQUF3QjtBQUNwRFAsaUJBQVcsQ0FBQ08sV0FBVyxHQUFHRixLQUFILEdBQVcsS0FBdkIsQ0FBWDtBQUNILEtBRm9CO0FBQUEsR0FBckI7O0FBSUEsc0JBQ0E7QUFBQSxjQUVRSixLQUFLLENBQUNPLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDdkIsMEJBQ0ksOERBQUMsU0FBRDtBQUFXLGNBQU0sTUFBakI7QUFBa0IsZ0JBQVEsRUFBRTFCLFFBQVEsc0JBQWUwQixLQUFmLENBQXBDO0FBQTRELGdCQUFRLEVBQUVOLFlBQVksa0JBQVdNLEtBQVgsRUFBbEY7QUFBQSxnQ0FDQSw4REFBQyxnQkFBRDtBQUFrQiwyQkFBYyxpQkFBaEM7QUFBa0QsWUFBRSxFQUFDLGdCQUFyRDtBQUFBLGtDQUNBLDhEQUFDLHlEQUFEO0FBQVkscUJBQVMsRUFBRUMsT0FBTyxDQUFDQyxRQUEvQjtBQUF5QyxtQkFBTyxFQUFDLElBQWpEO0FBQXNELHFCQUFTLEVBQUMsSUFBaEU7QUFBcUUsd0JBQVksTUFBakY7QUFBQSx1QkFDS0gsSUFBSSxDQUFDSSxJQURWLE9BQ2lCSixJQUFJLENBQUNLLElBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQSxlQUlBLDhEQUFDLHlEQUFEO0FBQVksbUJBQU8sRUFBQyxHQUFwQjtBQUFBLHNCQUNLTCxJQUFJLENBQUNNO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZUFTQSw4REFBQyxnQkFBRDtBQUFBLGlDQUNBLDhEQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQW9CSCxLQXJCRDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQXFESDs7R0EvRHVCbEIsVTs7S0FBQUEsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mbGlnaHQvW3NsdWddLmI3YjI0YmRhMGQ4MTNlYjU2NDcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgTXVpQWNjb3JkaW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvbic7XHJcbmltcG9ydCBNdWlBY2NvcmRpb25TdW1tYXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvblN1bW1hcnknO1xyXG5pbXBvcnQgTXVpQWNjb3JkaW9uRGV0YWlscyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25EZXRhaWxzJztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuY29uc3QgQWNjb3JkaW9uID0gd2l0aFN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyNSknLFxyXG4gICAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxyXG4gICAgICAgICcmOm5vdCg6bGFzdC1jaGlsZCknOiB7XHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyY6YmVmb3JlJzoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmJGV4cGFuZGVkJzoge1xyXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXhwYW5kZWQ6IHt9LFxyXG59KShNdWlBY2NvcmRpb24pO1xyXG5cclxuY29uc3QgQWNjb3JkaW9uU3VtbWFyeSA9IHdpdGhTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgLjAzKScsXHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyNSknLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogLTEsXHJcbiAgICAgICAgbWluSGVpZ2h0OiA1NixcclxuICAgICAgICAnJiRleHBhbmRlZCc6IHtcclxuICAgICAgICBtaW5IZWlnaHQ6IDU2LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY29udGVudDoge1xyXG4gICAgICAgICcmJGV4cGFuZGVkJzoge1xyXG4gICAgICAgIG1hcmdpbjogJzEycHggMCcsXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBleHBhbmRlZDoge30sXHJcbn0pKE11aUFjY29yZGlvblN1bW1hcnkpO1xyXG5cclxuY29uc3QgQWNjb3JkaW9uRGV0YWlscyA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB9LFxyXG59KSkoTXVpQWNjb3JkaW9uRGV0YWlscyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGbGlnaHRMaXN0KHByb3BzKSB7XHJcbiAgICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCB3aW5lcyA9IHByb3BzLnByb3BzXHJcbiAgICBjb25zb2xlLmxvZygnYWNjb3JkaW9uIHByb3BzJywgd2luZXMpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHBhbmVsKSA9PiAoZXZlbnQsIG5ld0V4cGFuZGVkKSA9PiB7XHJcbiAgICAgICAgc2V0RXhwYW5kZWQobmV3RXhwYW5kZWQgPyBwYW5lbCA6IGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aW5lcy5tYXAoKHdpbmUsIGluZGV4ICk9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbiBzcXVhcmUgZXhwYW5kZWQ9e2V4cGFuZGVkID09PSBgcGFuZWwxXyR7aW5kZXh9YH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZShgcGFuZWwxXyR7aW5kZXh9YCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5IGFyaWEtY29udHJvbHM9XCJwYW5lbDFkLWNvbnRlbnRcIiBpZD1cInBhbmVsMWQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLndpbmVOYW1lfSB2YXJpYW50PSdoNScgY29tcG9uZW50PVwiaDJcIiBndXR0ZXJCb3R0b20gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7d2luZS55ZWFyfSB7d2luZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3dpbmUudmFyaWV0YWxzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cclxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU3VzcGVuZGlzc2UgbWFsZXN1YWRhIGxhY3VzIGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXQgYW1ldCBibGFuZGl0IGxlbyBsb2JvcnRpcyBlZ2V0LiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGl0LiBTdXNwZW5kaXNzZSBtYWxlc3VhZGEgbGFjdXMgZXgsIHNpdCBhbWV0IGJsYW5kaXQgbGVvIGxvYm9ydGlzIGVnZXQuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHsvKiA8QWNjb3JkaW9uIHNxdWFyZSBleHBhbmRlZD17ZXhwYW5kZWQgPT09ICdwYW5lbDInfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwYW5lbDInKX0+XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5IGFyaWEtY29udHJvbHM9XCJwYW5lbDJkLWNvbnRlbnRcIiBpZD1cInBhbmVsMmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkNvbGxhcHNpYmxlIEdyb3VwIEl0ZW0gIzI8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cclxuICAgICAgICAgICAgPEFjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU3VzcGVuZGlzc2UgbWFsZXN1YWRhIGxhY3VzIGV4LFxyXG4gICAgICAgICAgICAgICAgc2l0IGFtZXQgYmxhbmRpdCBsZW8gbG9ib3J0aXMgZWdldC4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmdcclxuICAgICAgICAgICAgICAgIGVsaXQuIFN1c3BlbmRpc3NlIG1hbGVzdWFkYSBsYWN1cyBleCwgc2l0IGFtZXQgYmxhbmRpdCBsZW8gbG9ib3J0aXMgZWdldC5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgPEFjY29yZGlvbiBzcXVhcmUgZXhwYW5kZWQ9e2V4cGFuZGVkID09PSAncGFuZWwzJ30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGFuZWwzJyl9PlxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeSBhcmlhLWNvbnRyb2xzPVwicGFuZWwzZC1jb250ZW50XCIgaWQ9XCJwYW5lbDNkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5Db2xsYXBzaWJsZSBHcm91cCBJdGVtICMzPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFN1c3BlbmRpc3NlIG1hbGVzdWFkYSBsYWN1cyBleCxcclxuICAgICAgICAgICAgICAgIHNpdCBhbWV0IGJsYW5kaXQgbGVvIGxvYm9ydGlzIGVnZXQuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nXHJcbiAgICAgICAgICAgICAgICBlbGl0LiBTdXNwZW5kaXNzZSBtYWxlc3VhZGEgbGFjdXMgZXgsIHNpdCBhbWV0IGJsYW5kaXQgbGVvIGxvYm9ydGlzIGVnZXQuXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgIDwvQWNjb3JkaW9uPiAqL31cclxuICAgIDwvZGl2PlxyXG4pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==