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
        lineNumber: 30,
        columnNumber: 13
      }, this), wines.map(function (wine, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
            variant: "h5",
            children: [wine.year, " ", wine.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
            variant: "subtitle2",
            children: wine.specialAttribute
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
            variant: "subtitle1",
            children: wine.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
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
              lineNumber: 47,
              columnNumber: 29
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
              onClick: function onClick() {
                return setMoreInfo(wine._id);
              },
              children: "More Info"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 29
            }, _this), moreInfo == wine._id && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GbGlnaHRMaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJtYXJnaW5Cb3R0b20iLCJ3aW5lTmFtZSIsImRpc3BsYXkiLCJGbGlnaHRMaXN0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsIm1vcmVJbmZvIiwic2V0TW9yZUluZm8iLCJjbGFzc2VzIiwid2luZXMiLCJjb25zb2xlIiwibG9nIiwibWFwIiwid2luZSIsImluZGV4IiwieWVhciIsIm5hbWUiLCJzcGVjaWFsQXR0cmlidXRlIiwiZGVzY3JpcHRpb24iLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0MsNkRBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsUUFBSSxFQUFDO0FBQ0RDLGtCQUFZLEVBQUM7QUFEWixLQURnQztBQUlyQ0MsWUFBUSxFQUFFO0FBQ05DLGFBQU8sRUFBRTtBQURIO0FBSjJCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBV2UsU0FBU0MsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDTEMsK0NBQVEsQ0FBQyxFQUFELENBREg7QUFBQSxNQUM5QkMsUUFEOEI7QUFBQSxNQUNwQkMsV0FEb0I7O0FBR3RDLE1BQU1DLE9BQU8sR0FBR1osU0FBUyxFQUF6QjtBQUVBLE1BQU1hLEtBQUssR0FBR0wsS0FBSyxDQUFDQSxLQUFwQjtBQUNBTSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkYsS0FBL0I7QUFFQSxzQkFDQTtBQUFBLDJCQUVJLDhEQUFDLHdEQUFEO0FBQVcsZUFBUyxFQUFFRCxPQUFPLENBQUNULElBQTlCO0FBQUEsOEJBQ0ksOERBQUMseURBQUQ7QUFBWSxlQUFPLEVBQUUsSUFBckI7QUFBMEIsYUFBSyxFQUFDLFFBQWhDO0FBQXlDLG9CQUFZLE1BQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosRUFJS1UsS0FBSyxDQUFDRyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ3ZCLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsa0NBQ0ksOERBQUMseURBQUQ7QUFBWSxtQkFBTyxFQUFDLElBQXBCO0FBQUEsdUJBQ0tELElBQUksQ0FBQ0UsSUFEVixPQUNpQkYsSUFBSSxDQUFDRyxJQUR0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFJSSw4REFBQyx5REFBRDtBQUFZLG1CQUFPLEVBQUMsV0FBcEI7QUFBQSxzQkFDS0gsSUFBSSxDQUFDSTtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkosZUFPSSw4REFBQyx5REFBRDtBQUFZLG1CQUFPLEVBQUMsV0FBcEI7QUFBQSxzQkFDS0osSUFBSSxDQUFDSztBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEosZUFVSSw4REFBQyxrREFBRDtBQUFLLHFCQUFTLEVBQUMsS0FBZjtBQUFBLHVCQUNDWixRQUFRLElBQUlPLElBQUksQ0FBQ00sR0FBakIsZ0JBQ0csOERBQUMscURBQUQ7QUFBUSxxQkFBTyxFQUFHO0FBQUEsdUJBQU1aLFdBQVcsQ0FBQyxFQUFELENBQWpCO0FBQUEsZUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREgsZ0JBS0csOERBQUMscURBQUQ7QUFBUSxxQkFBTyxFQUFHO0FBQUEsdUJBQU1BLFdBQVcsQ0FBQ00sSUFBSSxDQUFDTSxHQUFOLENBQWpCO0FBQUEsZUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkosRUFVS2IsUUFBUSxJQUFJTyxJQUFJLENBQUNNLEdBQWpCLGlCQUNEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQStCUCxPQWhDSSxDQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQTZDSDs7R0FyRHVCaEIsVTtVQUdKUCxTOzs7S0FISU8sVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mbGlnaHQvW3NsdWddLjgxOTk0NDkxOWQ5NGNhZjU3OWJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydHtDb250YWluZXIsIFR5cG9ncmFwaHksIEJveCwgQnV0dG9uLCBIaWRkZW59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgbWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDp7XG4gICAgICAgIG1hcmdpbkJvdHRvbTonNzBweCdcbiAgICB9LFxuICAgIHdpbmVOYW1lOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICB9XG59KSlcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZsaWdodExpc3QocHJvcHMpIHtcbiAgICBjb25zdCBbIG1vcmVJbmZvLCBzZXRNb3JlSW5mb10gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICAgIGNvbnN0IHdpbmVzID0gcHJvcHMucHJvcHNcbiAgICBjb25zb2xlLmxvZygnYWNjb3JkaW9uIHByb3BzJywgd2luZXMpXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICBcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50ID0naDQnIGFsaWduPSdjZW50ZXInIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgICAgICBCb3JkZWF1eCBGbGlnaHRcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIHt3aW5lcy5tYXAoKHdpbmUsaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpbmUueWVhcn0ge3dpbmUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpbmUuc3BlY2lhbEF0dHJpYnV0ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3aW5lLmRlc2NyaXB0aW9ufSBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PSdkaXYnID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttb3JlSW5mbyA9PSB3aW5lLl9pZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPSB7KCkgPT4gc2V0TW9yZUluZm8oJycpIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlc3MgSW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9IHsoKSA9PiBzZXRNb3JlSW5mbyh3aW5lLl9pZCkgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9yZSBJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21vcmVJbmZvID09IHdpbmUuX2lkICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICApIFxuICAgICAgICAgICAgXG4gICAgICAgIH0pfVxuICAgICAgICBcblxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=