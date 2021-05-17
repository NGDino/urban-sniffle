self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MyCarousel/index.js":
/*!****************************************!*\
  !*** ./components/MyCarousel/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-material-ui-carousel */ "./node_modules/react-material-ui-carousel/dist/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/image-url */ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client */ "./client.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\MyCarousel\\index.js",
    _s = $RefreshSig$();







var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1)
      }
    }
  };
});

function urlFor(source) {
  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default()(_client__WEBPACK_IMPORTED_MODULE_3__.default).image(source);
}

function MyCarousel(props) {
  _s();

  var _this = this;

  var members = props.props;
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2__.default, {
    autoPlay: false,
    animation: "slide",
    index: 0,
    children: members.map(function (member) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Paper, {
        className: classes.root,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Avatar, {
          alt: "picture of ".concat(member.name),
          src: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: member.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 26
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, this);
} // function Item(props)
// {
//     return (
//         <Grid item xs={12} component= {Card}>
//             <h2>{props.item.name}</h2>
//             <p>{props.item.description} cool beans</p>
//             <Button className="CheckButton">
//                 Check it out!
//             </Button>
//         </Grid>
//     )
// }


_s(MyCarousel, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = MyCarousel;
/* harmony default export */ __webpack_exports__["default"] = (MyCarousel);

var _c;

$RefreshReg$(_c, "MyCarousel");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcm91c2VsL2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwibWFyZ2luIiwic3BhY2luZyIsInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiTXlDYXJvdXNlbCIsInByb3BzIiwibWVtYmVycyIsImNsYXNzZXMiLCJtYXAiLCJtZW1iZXIiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsUUFBSSxFQUFFO0FBQ0ZDLGFBQU8sRUFBRSxNQURQO0FBRUYsZUFBUztBQUNMQyxjQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQ7QUFESDtBQUZQO0FBRCtCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQVNBLFNBQVNDLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3JCLFNBQU9DLHdEQUFlLENBQUNDLDRDQUFELENBQWYsQ0FBd0JDLEtBQXhCLENBQThCSCxNQUE5QixDQUFQO0FBQ0g7O0FBRUQsU0FBU0ksVUFBVCxDQUFvQkMsS0FBcEIsRUFBMEI7QUFBQTs7QUFBQTs7QUFDdEIsTUFBTUMsT0FBTyxHQUFHRCxLQUFLLENBQUNBLEtBQXRCO0FBRUEsTUFBTUUsT0FBTyxHQUFHZixTQUFTLEVBQXpCO0FBRUEsc0JBRUksOERBQUMsK0RBQUQ7QUFBVSxZQUFRLEVBQUUsS0FBcEI7QUFBMkIsYUFBUyxFQUFFLE9BQXRDO0FBQThDLFNBQUssRUFBSSxDQUF2RDtBQUFBLGNBRVFjLE9BQU8sQ0FBQ0UsR0FBUixDQUFhLFVBQUNDLE1BQUQ7QUFBQSwwQkFDVCw4REFBQyxvREFBRDtBQUFPLGlCQUFTLEVBQUVGLE9BQU8sQ0FBQ1osSUFBMUI7QUFBQSxnQ0FDSSw4REFBQyxxREFBRDtBQUFRLGFBQUcsdUJBQWtCYyxNQUFNLENBQUNDLElBQXpCLENBQVg7QUFBNEMsYUFBRztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUs7QUFBQSxvQkFBS0QsTUFBTSxDQUFDQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFM7QUFBQSxLQUFiO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZKO0FBY0gsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0dBbENTTixVO1VBR1daLFM7OztLQUhYWSxVO0FBb0NULCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIyZTAyNDNmZjgxMGIxMjYyODc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW1hdGVyaWFsLXVpLWNhcm91c2VsJ1xuaW1wb3J0IHsgUGFwZXIsIFR5cG9ncmFwaHksIEJ1dHRvbiwgR3JpZCwgQ2FyZCwgQXZhdGFyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQge21ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50JztcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgJyYgPiAqJzoge1xuICAgICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgICB9LFxuICAgIH1cbn0pKVxuXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xuICAgIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpXG59XG5cbmZ1bmN0aW9uIE15Q2Fyb3VzZWwocHJvcHMpe1xuICAgIGNvbnN0IG1lbWJlcnMgPSBwcm9wcy5wcm9wc1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICBcbiAgICAgICAgPENhcm91c2VsIGF1dG9QbGF5PXtmYWxzZX0gYW5pbWF0aW9uPSAnc2xpZGUnIGluZGV4ID0gezB9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1lbWJlcnMubWFwKCAobWVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIGFsdCA9IHtgcGljdHVyZSBvZiAke21lbWJlci5uYW1lfWB9IHNyYyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57bWVtYmVyLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICApIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICApXG59XG5cbi8vIGZ1bmN0aW9uIEl0ZW0ocHJvcHMpXG4vLyB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNvbXBvbmVudD0ge0NhcmR9PlxuLy8gICAgICAgICAgICAgPGgyPntwcm9wcy5pdGVtLm5hbWV9PC9oMj5cbi8vICAgICAgICAgICAgIDxwPntwcm9wcy5pdGVtLmRlc2NyaXB0aW9ufSBjb29sIGJlYW5zPC9wPlxuXG4vLyAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIkNoZWNrQnV0dG9uXCI+XG4vLyAgICAgICAgICAgICAgICAgQ2hlY2sgaXQgb3V0IVxuLy8gICAgICAgICAgICAgPC9CdXR0b24+XG4vLyAgICAgICAgIDwvR3JpZD5cblxuLy8gICAgIClcbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgTXlDYXJvdXNlbDtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9