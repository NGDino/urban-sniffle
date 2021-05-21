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

  var toggleMore = function toggleMore(id) {
    console.log(id);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        variant: "h4",
        children: "Bordeaux Flight"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, this), wines.map(function (wine, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
            variant: "h5",
            children: [wine.year, " ", wine.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
            variant: "subtitle1",
            children: wine.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
            component: "div",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Link, {
              onClick: toggleMore(wine._id),
              display: "block",
              children: "More Info"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 29
            }, _this), moreInfo == wine._id ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
              variant: "body1",
              children: "Just when I thought I was out... they pull me back in. When they come... they come at what you love. Leave the gun. Take the cannoli. I have a sentimental weakness for my children and I spoil them, as you can see. They talk when they should listen. Very well. You want to do business with me. I will do business with you. Mr Corleone is Johnny Fontane's godfather. Now Italians regard that as a very close, a very sacred religious relationship. My father is no different than any powerful man, any man with power, like a president or senator. I don't feel I have to wipe everybody out, Tom. Just my enemies. I see you took the name of the town. What was your father's name? It's a Sicilian message. It means Luca Brasi sleeps with the fishes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 30
            }, _this) : '']
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

_s(FlightList, "RX9j93h+Wtgfje//LJOgdnFvX7c=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GbGlnaHRMaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIndpbmVOYW1lIiwiZGlzcGxheSIsIkZsaWdodExpc3QiLCJwcm9wcyIsInVzZVN0YXRlIiwibW9yZUluZm8iLCJzZXRNb3JlSW5mbyIsImNsYXNzZXMiLCJ3aW5lcyIsImNvbnNvbGUiLCJsb2ciLCJ0b2dnbGVNb3JlIiwiaWQiLCJtYXAiLCJ3aW5lIiwiaW5kZXgiLCJ5ZWFyIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLDZEQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDckNDLFlBQVEsRUFBRTtBQUNOQyxhQUFPLEVBQUU7QUFESDtBQUQyQixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQVFlLFNBQVNDLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ05DLCtDQUFRLENBQUMsRUFBRCxDQURGO0FBQUEsTUFDL0JDLFFBRCtCO0FBQUEsTUFDckJDLFdBRHFCOztBQUd0QyxNQUFNQyxPQUFPLEdBQUdWLFNBQVMsRUFBekI7QUFFQSxNQUFNVyxLQUFLLEdBQUdMLEtBQUssQ0FBQ0EsS0FBcEI7QUFDQU0sU0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JGLEtBQS9COztBQUVBLE1BQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEVBQUQsRUFBUTtBQUN2QkgsV0FBTyxDQUFDQyxHQUFSLENBQVlFLEVBQVo7QUFFSCxHQUhEOztBQUlBLHNCQUNBO0FBQUEsMkJBRUksOERBQUMsd0RBQUQ7QUFBQSw4QkFDSSw4REFBQyx5REFBRDtBQUFZLGVBQU8sRUFBRSxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBSUtKLEtBQUssQ0FBQ0ssR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUN2Qiw0QkFDSSw4REFBQyxrREFBRDtBQUFBLGtDQUNJLDhEQUFDLHlEQUFEO0FBQVksbUJBQU8sRUFBQyxJQUFwQjtBQUFBLHVCQUNLRCxJQUFJLENBQUNFLElBRFYsT0FDaUJGLElBQUksQ0FBQ0csSUFEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBSUksOERBQUMseURBQUQ7QUFBWSxtQkFBTyxFQUFDLFdBQXBCO0FBQUEsc0JBQ0tILElBQUksQ0FBQ0k7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLGVBT0ksOERBQUMsa0RBQUQ7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxvQ0FDSSw4REFBQyxtREFBRDtBQUFNLHFCQUFPLEVBQUVQLFVBQVUsQ0FBQ0csSUFBSSxDQUFDSyxHQUFOLENBQXpCO0FBQXFDLHFCQUFPLEVBQUMsT0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosRUFJS2QsUUFBUSxJQUFJUyxJQUFJLENBQUNLLEdBQWpCLGdCQUNBLDhEQUFDLHlEQUFEO0FBQVkscUJBQU8sRUFBQyxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEQSxHQUtXLEVBVGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUF1QlAsT0F4QkksQ0FKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUFxQ0g7O0dBakR1QmpCLFU7VUFHSkwsUzs7O0tBSElLLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmxpZ2h0L1tzbHVnXS4wNmNmYzQwNTg4YWIzYzc4Mjk4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnR7Q29udGFpbmVyLCBUeXBvZ3JhcGh5LCBCb3gsIExpbmssIEhpZGRlbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyBtYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICB3aW5lTmFtZToge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfVxufSkpXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGbGlnaHRMaXN0KHByb3BzKSB7XG4gICAgY29uc3QgW21vcmVJbmZvLCBzZXRNb3JlSW5mb10gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICAgIGNvbnN0IHdpbmVzID0gcHJvcHMucHJvcHNcbiAgICBjb25zb2xlLmxvZygnYWNjb3JkaW9uIHByb3BzJywgd2luZXMpXG5cbiAgICBjb25zdCB0b2dnbGVNb3JlID0gKGlkKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGlkKVxuICAgICAgICBcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICBcbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQgPSdoNCc+XG4gICAgICAgICAgICAgICAgQm9yZGVhdXggRmxpZ2h0XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICB7d2luZXMubWFwKCh3aW5lLGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3aW5lLnllYXJ9IHt3aW5lLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3aW5lLmRlc2NyaXB0aW9ufSBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PSdkaXYnID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBvbkNsaWNrPXt0b2dnbGVNb3JlKHdpbmUuX2lkKX0gZGlzcGxheT0nYmxvY2snID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9yZSBJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb3JlSW5mbyA9PSB3aW5lLl9pZCA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MScgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKdXN0IHdoZW4gSSB0aG91Z2h0IEkgd2FzIG91dC4uLiB0aGV5IHB1bGwgbWUgYmFjayBpbi4gV2hlbiB0aGV5IGNvbWUuLi4gdGhleSBjb21lIGF0IHdoYXQgeW91IGxvdmUuIExlYXZlIHRoZSBndW4uIFRha2UgdGhlIGNhbm5vbGkuIEkgaGF2ZSBhIHNlbnRpbWVudGFsIHdlYWtuZXNzIGZvciBteSBjaGlsZHJlbiBhbmQgSSBzcG9pbCB0aGVtLCBhcyB5b3UgY2FuIHNlZS4gVGhleSB0YWxrIHdoZW4gdGhleSBzaG91bGQgbGlzdGVuLiBWZXJ5IHdlbGwuIFlvdSB3YW50IHRvIGRvIGJ1c2luZXNzIHdpdGggbWUuIEkgd2lsbCBkbyBidXNpbmVzcyB3aXRoIHlvdS5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1yIENvcmxlb25lIGlzIEpvaG5ueSBGb250YW5lJ3MgZ29kZmF0aGVyLiBOb3cgSXRhbGlhbnMgcmVnYXJkIHRoYXQgYXMgYSB2ZXJ5IGNsb3NlLCBhIHZlcnkgc2FjcmVkIHJlbGlnaW91cyByZWxhdGlvbnNoaXAuIE15IGZhdGhlciBpcyBubyBkaWZmZXJlbnQgdGhhbiBhbnkgcG93ZXJmdWwgbWFuLCBhbnkgbWFuIHdpdGggcG93ZXIsIGxpa2UgYSBwcmVzaWRlbnQgb3Igc2VuYXRvci4gSSBkb24ndCBmZWVsIEkgaGF2ZSB0byB3aXBlIGV2ZXJ5Ym9keSBvdXQsIFRvbS4gSnVzdCBteSBlbmVtaWVzLiBJIHNlZSB5b3UgdG9vayB0aGUgbmFtZSBvZiB0aGUgdG93bi4gV2hhdCB3YXMgeW91ciBmYXRoZXIncyBuYW1lPyBJdCdzIGEgU2ljaWxpYW4gbWVzc2FnZS4gSXQgbWVhbnMgTHVjYSBCcmFzaSBzbGVlcHMgd2l0aCB0aGUgZmlzaGVzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXG4gICAgICAgIH0pfVxuICAgICAgICBcblxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=