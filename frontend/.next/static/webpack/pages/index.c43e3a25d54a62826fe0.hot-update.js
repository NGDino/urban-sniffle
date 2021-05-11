self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/HomeBanner/index.js":
/*!****************************************!*\
  !*** ./components/HomeBanner/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! groq */ "./node_modules/groq/lib/groq.js");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client */ "./client.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/image-url */ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\HomeBanner\\index.js",
    _this = undefined;


 //for easy images

 //materialUi components




function urlFor(source) {
  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default()(_client__WEBPACK_IMPORTED_MODULE_4__.default).image(source);
} //styles
// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//     },
//     background: {
//         backgroundAttachment: fixed,
//         backgroundImage: {}
//     }
// }));


var HomeBanner = function HomeBanner(_ref) {
  var cudaRidge = _ref.cudaRidge;
  var query = '*[_type == "bike" && seats >= $minSeats] {name,  seats}';
  var params = {
    minSeats: 2
  };
  _client__WEBPACK_IMPORTED_MODULE_4__.default.fetch(query, params).then(function (bikes) {
    console.log('Bikes with more than one seat:');
    bikes.forEach(function (bike) {
      console.log("".concat(bike.name, " (").concat(bike.seats, " seats)"));
    });
  });
  console.log('homebanner', cudaRidge);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
    component: "div" // className=''
    // backgroundImage ={}

  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, _this);
};

_c = HomeBanner;

var query = HomeBanner.getInitialProps = /*#__PURE__*/(0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
  var params, CudaRidge;
  return D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // It's important to default the slug so that it doesn't return "undefined"
          params = {};
          _context.next = 3;
          return _client__WEBPACK_IMPORTED_MODULE_4__.default.fetch(query, params);

        case 3:
          CudaRidge = _context.sent;
          return _context.abrupt("return", CudaRidge);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));

/* harmony default export */ __webpack_exports__["default"] = (HomeBanner);

var _c;

$RefreshReg$(_c, "HomeBanner");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lQmFubmVyL2luZGV4LmpzIl0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiSG9tZUJhbm5lciIsImN1ZGFSaWRnZSIsInF1ZXJ5IiwicGFyYW1zIiwibWluU2VhdHMiLCJ0aGVuIiwiYmlrZXMiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsImJpa2UiLCJuYW1lIiwic2VhdHMiLCJnZXRJbml0aWFsUHJvcHMiLCJDdWRhUmlkZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3JCLFNBQU9DLHdEQUFlLENBQUNDLDRDQUFELENBQWYsQ0FBd0JDLEtBQXhCLENBQThCSCxNQUE5QixDQUFQO0FBQ0gsQyxDQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFSixJQUFNSSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFpQjtBQUFBLE1BQWZDLFNBQWUsUUFBZkEsU0FBZTtBQUNoQyxNQUFNQyxLQUFLLEdBQUcseURBQWQ7QUFDQSxNQUFNQyxNQUFNLEdBQUc7QUFBQ0MsWUFBUSxFQUFFO0FBQVgsR0FBZjtBQUVKTixvREFBQSxDQUFhSSxLQUFiLEVBQW9CQyxNQUFwQixFQUE0QkUsSUFBNUIsQ0FBaUMsVUFBQ0MsS0FBRCxFQUFXO0FBQzFDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxnQ0FBWjtBQUNBRixTQUFLLENBQUNHLE9BQU4sQ0FBYyxVQUFDQyxJQUFELEVBQVU7QUFDdEJILGFBQU8sQ0FBQ0MsR0FBUixXQUFlRSxJQUFJLENBQUNDLElBQXBCLGVBQTZCRCxJQUFJLENBQUNFLEtBQWxDO0FBQ0QsS0FGRDtBQUdELEdBTEQ7QUFNSUwsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUF5QlAsU0FBekI7QUFFQSxzQkFDSSw4REFBQyxrREFBRDtBQUNBLGFBQVMsRUFBRyxLQURaLENBRUE7QUFDQTs7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFTSCxDQXJCRDs7S0FBTUQsVTs7QUF1Qk4sSUFBTUUsS0FBSyxHQUNYRixVQUFVLENBQUNhLGVBQVgsa1JBQTZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN6QjtBQUNNVixnQkFGbUIsR0FFVixFQUZVO0FBQUE7QUFBQSxpQkFHREwsa0RBQUEsQ0FBYUksS0FBYixFQUFvQkMsTUFBcEIsQ0FIQzs7QUFBQTtBQUduQlcsbUJBSG1CO0FBQUEsMkNBSWxCQSxTQUprQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUE3QixFQURBOztBQVVBLCtEQUFlZCxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM0M2UzYTI1ZDU0YTYyODI2ZmUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3JvcSBmcm9tICdncm9xJztcclxuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnO1xyXG5cclxuLy9mb3IgZWFzeSBpbWFnZXNcclxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCc7XHJcblxyXG4vL21hdGVyaWFsVWkgY29tcG9uZW50c1xyXG5pbXBvcnQge0JveH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XHJcbiAgICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKVxyXG59XHJcblxyXG4vL3N0eWxlc1xyXG4gICAgLy8gY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICAvLyAgICAgcm9vdDoge1xyXG4gICAgLy8gICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAvLyAgICAgICAgIGJhY2tncm91bmRBdHRhY2htZW50OiBmaXhlZCxcclxuICAgIC8vICAgICAgICAgYmFja2dyb3VuZEltYWdlOiB7fVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pKTtcclxuXHJcbmNvbnN0IEhvbWVCYW5uZXIgPSAoe2N1ZGFSaWRnZX0pID0+IHtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gJypbX3R5cGUgPT0gXCJiaWtlXCIgJiYgc2VhdHMgPj0gJG1pblNlYXRzXSB7bmFtZSwgIHNlYXRzfSdcclxuICAgIGNvbnN0IHBhcmFtcyA9IHttaW5TZWF0czogMn1cclxuXHJcbmNsaWVudC5mZXRjaChxdWVyeSwgcGFyYW1zKS50aGVuKChiaWtlcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdCaWtlcyB3aXRoIG1vcmUgdGhhbiBvbmUgc2VhdDonKVxyXG4gIGJpa2VzLmZvckVhY2goKGJpa2UpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGAke2Jpa2UubmFtZX0gKCR7YmlrZS5zZWF0c30gc2VhdHMpYClcclxuICB9KVxyXG59KVxyXG4gICAgY29uc29sZS5sb2coJ2hvbWViYW5uZXInLGN1ZGFSaWRnZSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEJveCBcclxuICAgICAgICBjb21wb25lbnQgPSBcImRpdlwiXHJcbiAgICAgICAgLy8gY2xhc3NOYW1lPScnXHJcbiAgICAgICAgLy8gYmFja2dyb3VuZEltYWdlID17fVxyXG4gICAgICAgID5cclxuXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IHF1ZXJ5ID0gXHJcbkhvbWVCYW5uZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxyXG4gICAgY29uc3QgcGFyYW1zID0ge31cclxuICAgIGNvbnN0IEN1ZGFSaWRnZSA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwgcGFyYW1zKVxyXG4gICAgcmV0dXJuIEN1ZGFSaWRnZVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVCYW5uZXIiXSwic291cmNlUm9vdCI6IiJ9