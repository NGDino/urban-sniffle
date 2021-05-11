self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/HomeBanner/index.js":
/*!****************************************!*\
  !*** ./components/HomeBanner/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetStaticPath": function() { return /* binding */ GetStaticPath; }
/* harmony export */ });
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
  var data = _ref.data;
  console.log('homebanner', data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
    component: "div" // className=''
    // backgroundImage ={}

  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, _this);
}; // const query = groq`*[_type == "winery" ][0]{
//     name,
//     image,
// }`


_c = HomeBanner;
var GetStaticPath = /*#__PURE__*/function () {
  var _ref2 = (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(pageContext) {
    var query, result;
    return D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Fetch data from external API
            query = '*[_type == "winery" ][0]';
            _context.next = 3;
            return _client__WEBPACK_IMPORTED_MODULE_4__.default.fetch(query);

          case 3:
            result = _context.sent;

            if (!(!result.result || !result.result.length)) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", {
              props: {
                posts: []
              }
            });

          case 8:
            return _context.abrupt("return", {
              props: {
                posts: result.result
              }
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function GetStaticPath(_x) {
    return _ref2.apply(this, arguments);
  };
}();
_c2 = GetStaticPath;
/* harmony default export */ __webpack_exports__["default"] = (HomeBanner);

var _c, _c2;

$RefreshReg$(_c, "HomeBanner");
$RefreshReg$(_c2, "GetStaticPath");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lQmFubmVyL2luZGV4LmpzIl0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiSG9tZUJhbm5lciIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiR2V0U3RhdGljUGF0aCIsInBhZ2VDb250ZXh0IiwicXVlcnkiLCJyZXN1bHQiLCJsZW5ndGgiLCJwcm9wcyIsInBvc3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0NBR0E7O0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUNyQixTQUFPQyx3REFBZSxDQUFDQyw0Q0FBRCxDQUFmLENBQXdCQyxLQUF4QixDQUE4QkgsTUFBOUIsQ0FBUDtBQUNILEMsQ0FFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUosSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBWTtBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTtBQUMzQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUF5QkYsSUFBekI7QUFFQSxzQkFDSSw4REFBQyxrREFBRDtBQUNBLGFBQVMsRUFBRyxLQURaLENBRUE7QUFDQTs7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFTSCxDQVpELEMsQ0FjQTtBQUNBO0FBQ0E7QUFDQTs7O0tBakJNRCxVO0FBbUJDLElBQU1JLGFBQWE7QUFBQSxnUkFBRyxpQkFBTUMsV0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDekI7QUFDTUMsaUJBRm1CLEdBRVgsMEJBRlc7QUFBQTtBQUFBLG1CQUdKUixrREFBQSxDQUFhUSxLQUFiLENBSEk7O0FBQUE7QUFHbkJDLGtCQUhtQjs7QUFBQSxrQkFLckIsQ0FBQ0EsTUFBTSxDQUFDQSxNQUFSLElBQWtCLENBQUNBLE1BQU0sQ0FBQ0EsTUFBUCxDQUFjQyxNQUxaO0FBQUE7QUFBQTtBQUFBOztBQUFBLDZDQU1kO0FBQ0hDLG1CQUFLLEVBQUU7QUFDSEMscUJBQUssRUFBRTtBQURKO0FBREosYUFOYzs7QUFBQTtBQUFBLDZDQVlWO0FBQ0hELG1CQUFLLEVBQUU7QUFDSEMscUJBQUssRUFBRUgsTUFBTSxDQUFDQTtBQURYO0FBREosYUFaVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFiSCxhQUFhO0FBQUE7QUFBQTtBQUFBLEdBQW5CO01BQU1BLGE7QUF1QmIsK0RBQWVKLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWNkYzM4ZjliNjBjMzA2NDNkY2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncm9xIGZyb20gJ2dyb3EnO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCc7XHJcblxyXG4vL2ZvciBlYXN5IGltYWdlc1xyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJztcclxuXHJcbi8vbWF0ZXJpYWxVaSBjb21wb25lbnRzXHJcbmltcG9ydCB7Qm94fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UpIHtcclxuICAgIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpXHJcbn1cclxuXHJcbi8vc3R5bGVzXHJcbiAgICAvLyBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIC8vICAgICByb290OiB7XHJcbiAgICAvLyAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIGJhY2tncm91bmQ6IHtcclxuICAgIC8vICAgICAgICAgYmFja2dyb3VuZEF0dGFjaG1lbnQ6IGZpeGVkLFxyXG4gICAgLy8gICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IHt9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSkpO1xyXG5cclxuY29uc3QgSG9tZUJhbm5lciA9ICh7ZGF0YX0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdob21lYmFubmVyJyxkYXRhKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Qm94IFxyXG4gICAgICAgIGNvbXBvbmVudCA9IFwiZGl2XCJcclxuICAgICAgICAvLyBjbGFzc05hbWU9JydcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kSW1hZ2UgPXt9XHJcbiAgICAgICAgPlxyXG5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuLy8gY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJ3aW5lcnlcIiBdWzBde1xyXG4vLyAgICAgbmFtZSxcclxuLy8gICAgIGltYWdlLFxyXG4vLyB9YFxyXG5cclxuZXhwb3J0IGNvbnN0IEdldFN0YXRpY1BhdGggPSBhc3luYyBwYWdlQ29udGV4dCA9PiB7XHJcbiAgICAvLyBGZXRjaCBkYXRhIGZyb20gZXh0ZXJuYWwgQVBJXHJcbiAgICBjb25zdCBxdWVyeSA9ICcqW190eXBlID09IFwid2luZXJ5XCIgXVswXSdcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSlcclxuXHJcbiAgICBpZiAoIXJlc3VsdC5yZXN1bHQgfHwgIXJlc3VsdC5yZXN1bHQubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgIHBvc3RzOiBbXSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RzOiByZXN1bHQucmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZUJhbm5lciJdLCJzb3VyY2VSb290IjoiIn0=