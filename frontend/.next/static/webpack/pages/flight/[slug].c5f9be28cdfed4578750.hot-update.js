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

  var toggleMore = function toggleMore(id, event) {
    event.preventDefault();
    console.log(id);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        variant: "h4",
        children: "Bordeaux Flight"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }, this), wines.map(function (wine, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
            variant: "h5",
            children: [wine.year, " ", wine.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
            variant: "subtitle1",
            children: wine.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
            component: "div",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Link, {
              onClick: toggleMore(wine._id),
              display: "block",
              children: "More Info"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, _this), moreInfo == wine._id ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
              variant: "body1",
              children: "Just when I thought I was out... they pull me back in. When they come... they come at what you love. Leave the gun. Take the cannoli. I have a sentimental weakness for my children and I spoil them, as you can see. They talk when they should listen. Very well. You want to do business with me. I will do business with you. Mr Corleone is Johnny Fontane's godfather. Now Italians regard that as a very close, a very sacred religious relationship. My father is no different than any powerful man, any man with power, like a president or senator. I don't feel I have to wipe everybody out, Tom. Just my enemies. I see you took the name of the town. What was your father's name? It's a Sicilian message. It means Luca Brasi sleeps with the fishes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 29
            }, _this) : '']
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GbGlnaHRMaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIndpbmVOYW1lIiwiZGlzcGxheSIsIkZsaWdodExpc3QiLCJwcm9wcyIsInVzZVN0YXRlIiwibW9yZUluZm8iLCJzZXRNb3JlSW5mbyIsImNsYXNzZXMiLCJ3aW5lcyIsImNvbnNvbGUiLCJsb2ciLCJ0b2dnbGVNb3JlIiwiaWQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibWFwIiwid2luZSIsImluZGV4IiwieWVhciIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQyw2REFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3JDQyxZQUFRLEVBQUU7QUFDTkMsYUFBTyxFQUFFO0FBREg7QUFEMkIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFRZSxTQUFTQyxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUFBOztBQUFBOztBQUFBLGtCQUNOQywrQ0FBUSxDQUFDLEVBQUQsQ0FERjtBQUFBLE1BQy9CQyxRQUQrQjtBQUFBLE1BQ3JCQyxXQURxQjs7QUFHdEMsTUFBTUMsT0FBTyxHQUFHVixTQUFTLEVBQXpCO0FBRUEsTUFBTVcsS0FBSyxHQUFHTCxLQUFLLENBQUNBLEtBQXBCO0FBQ0FNLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCRixLQUEvQjs7QUFFQSxNQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxFQUFELEVBQUtDLEtBQUwsRUFBZTtBQUM5QkEsU0FBSyxDQUFDQyxjQUFOO0FBQ0FMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRSxFQUFaO0FBRUgsR0FKRDs7QUFLQSxzQkFDQTtBQUFBLDJCQUVJLDhEQUFDLHdEQUFEO0FBQUEsOEJBQ0ksOERBQUMseURBQUQ7QUFBWSxlQUFPLEVBQUUsSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUlLSixLQUFLLENBQUNPLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDdkIsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSxrQ0FDSSw4REFBQyx5REFBRDtBQUFZLG1CQUFPLEVBQUMsSUFBcEI7QUFBQSx1QkFDS0QsSUFBSSxDQUFDRSxJQURWLE9BQ2lCRixJQUFJLENBQUNHLElBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUlJLDhEQUFDLHlEQUFEO0FBQVksbUJBQU8sRUFBQyxXQUFwQjtBQUFBLHNCQUNLSCxJQUFJLENBQUNJO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQU9JLDhEQUFDLGtEQUFEO0FBQUsscUJBQVMsRUFBQyxLQUFmO0FBQUEsb0NBQ0ksOERBQUMsbURBQUQ7QUFBTSxxQkFBTyxFQUFFVCxVQUFVLENBQUNLLElBQUksQ0FBQ0ssR0FBTixDQUF6QjtBQUFxQyxxQkFBTyxFQUFDLE9BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLEVBSUtoQixRQUFRLElBQUlXLElBQUksQ0FBQ0ssR0FBakIsZ0JBQ0QsOERBQUMseURBQUQ7QUFBWSxxQkFBTyxFQUFDLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURDLEdBS1csRUFUaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQXVCUCxPQXhCSSxDQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQXFDSDs7R0FsRHVCbkIsVTtVQUdKTCxTOzs7S0FISUssVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mbGlnaHQvW3NsdWddLmM1ZjliZTI4Y2RmZWQ0NTc4NzUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydHtDb250YWluZXIsIFR5cG9ncmFwaHksIEJveCwgTGluaywgSGlkZGVufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7IG1ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHdpbmVOYW1lOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICB9XG59KSlcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZsaWdodExpc3QocHJvcHMpIHtcbiAgICBjb25zdCBbbW9yZUluZm8sIHNldE1vcmVJbmZvXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gICAgY29uc3Qgd2luZXMgPSBwcm9wcy5wcm9wc1xuICAgIGNvbnNvbGUubG9nKCdhY2NvcmRpb24gcHJvcHMnLCB3aW5lcylcblxuICAgIGNvbnN0IHRvZ2dsZU1vcmUgPSAoaWQsIGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc29sZS5sb2coaWQpXG4gICAgICAgIFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudCA9J2g0Jz5cbiAgICAgICAgICAgICAgICBCb3JkZWF1eCBGbGlnaHRcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIHt3aW5lcy5tYXAoKHdpbmUsaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpbmUueWVhcn0ge3dpbmUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpbmUuZGVzY3JpcHRpb259IFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9J2RpdicgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIG9uQ2xpY2s9e3RvZ2dsZU1vcmUod2luZS5faWQpfSBkaXNwbGF5PSdibG9jaycgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3JlIEluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21vcmVJbmZvID09IHdpbmUuX2lkID8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBKdXN0IHdoZW4gSSB0aG91Z2h0IEkgd2FzIG91dC4uLiB0aGV5IHB1bGwgbWUgYmFjayBpbi4gV2hlbiB0aGV5IGNvbWUuLi4gdGhleSBjb21lIGF0IHdoYXQgeW91IGxvdmUuIExlYXZlIHRoZSBndW4uIFRha2UgdGhlIGNhbm5vbGkuIEkgaGF2ZSBhIHNlbnRpbWVudGFsIHdlYWtuZXNzIGZvciBteSBjaGlsZHJlbiBhbmQgSSBzcG9pbCB0aGVtLCBhcyB5b3UgY2FuIHNlZS4gVGhleSB0YWxrIHdoZW4gdGhleSBzaG91bGQgbGlzdGVuLiBWZXJ5IHdlbGwuIFlvdSB3YW50IHRvIGRvIGJ1c2luZXNzIHdpdGggbWUuIEkgd2lsbCBkbyBidXNpbmVzcyB3aXRoIHlvdS5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1yIENvcmxlb25lIGlzIEpvaG5ueSBGb250YW5lJ3MgZ29kZmF0aGVyLiBOb3cgSXRhbGlhbnMgcmVnYXJkIHRoYXQgYXMgYSB2ZXJ5IGNsb3NlLCBhIHZlcnkgc2FjcmVkIHJlbGlnaW91cyByZWxhdGlvbnNoaXAuIE15IGZhdGhlciBpcyBubyBkaWZmZXJlbnQgdGhhbiBhbnkgcG93ZXJmdWwgbWFuLCBhbnkgbWFuIHdpdGggcG93ZXIsIGxpa2UgYSBwcmVzaWRlbnQgb3Igc2VuYXRvci4gSSBkb24ndCBmZWVsIEkgaGF2ZSB0byB3aXBlIGV2ZXJ5Ym9keSBvdXQsIFRvbS4gSnVzdCBteSBlbmVtaWVzLiBJIHNlZSB5b3UgdG9vayB0aGUgbmFtZSBvZiB0aGUgdG93bi4gV2hhdCB3YXMgeW91ciBmYXRoZXIncyBuYW1lPyBJdCdzIGEgU2ljaWxpYW4gbWVzc2FnZS4gSXQgbWVhbnMgTHVjYSBCcmFzaSBzbGVlcHMgd2l0aCB0aGUgZmlzaGVzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+IDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXG4gICAgICAgIH0pfVxuICAgICAgICBcblxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=