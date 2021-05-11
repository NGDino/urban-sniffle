self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/HomeBanner/index.js":
/*!****************************************!*\
  !*** ./components/HomeBanner/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! groq */ "./node_modules/groq/lib/groq.js");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../client */ "./client.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sanity/image-url */ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\HomeBanner\\index.js",
    _this = undefined;

function _templateObject() {
  var data = (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["*[_type == \"winery\" ]"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 //for easy images

 //materialUi components




function urlFor(source) {
  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default()(_client__WEBPACK_IMPORTED_MODULE_5__.default).image(source);
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
  var query = groq__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
  var params = {};
  _client__WEBPACK_IMPORTED_MODULE_5__.default.fetch(query).then(function (winery) {
    var cudaRidge = winery.json;
    console.log('winery found', cudaRidge);
  });
  console.log('homebanner', cudaRidge);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Box, {
    component: "div" // className=''
    // backgroundImage ={}

  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }, _this);
};

_c = HomeBanner;
function getStaticProps(_x) {
  return _getStaticProps.apply(this, arguments);
}

function _getStaticProps() {
  _getStaticProps = (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_ref2) {
    var _ref2$preview, preview, wineries;

    return D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref2$preview = _ref2.preview, preview = _ref2$preview === void 0 ? false : _ref2$preview;
            _context.next = 3;
            return getWineryForHome(preview);

          case 3:
            wineries = _context.sent;
            return _context.abrupt("return", {
              props: {
                wineries: wineries,
                preview: preview
              }
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getStaticProps.apply(this, arguments);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lQmFubmVyL2luZGV4LmpzIl0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiSG9tZUJhbm5lciIsImN1ZGFSaWRnZSIsInF1ZXJ5IiwiZ3JvcSIsInBhcmFtcyIsInRoZW4iLCJ3aW5lcnkiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRpY1Byb3BzIiwicHJldmlldyIsImdldFdpbmVyeUZvckhvbWUiLCJ3aW5lcmllcyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0NBR0E7O0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUNyQixTQUFPQyx3REFBZSxDQUFDQyw0Q0FBRCxDQUFmLENBQXdCQyxLQUF4QixDQUE4QkgsTUFBOUIsQ0FBUDtBQUNILEMsQ0FFRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUosSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBaUI7QUFBQSxNQUFmQyxTQUFlLFFBQWZBLFNBQWU7QUFDaEMsTUFBTUMsS0FBSyxHQUFHQywyQ0FBSCxtQkFBWDtBQUNBLE1BQU1DLE1BQU0sR0FBRyxFQUFmO0FBRUpOLG9EQUFBLENBQWFJLEtBQWIsRUFBb0JHLElBQXBCLENBQXlCLFVBQUNDLE1BQUQsRUFBWTtBQUNqQyxRQUFNTCxTQUFTLEdBQUdLLE1BQU0sQ0FBQ0MsSUFBekI7QUFDRkMsV0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUEyQlIsU0FBM0I7QUFFRCxHQUpEO0FBS0lPLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBeUJSLFNBQXpCO0FBRUEsc0JBQ0ksOERBQUMsa0RBQUQ7QUFDQSxhQUFTLEVBQUcsS0FEWixDQUVBO0FBQ0E7O0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBU0gsQ0FwQkQ7O0tBQU1ELFU7QUFzQkMsU0FBZVUsY0FBdEI7QUFBQTtBQUFBOzs7c1JBQU87QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFnQ0MsT0FBaEMsRUFBZ0NBLE9BQWhDLDhCQUEwQyxLQUExQztBQUFBO0FBQUEsbUJBQ29CQyxnQkFBZ0IsQ0FBQ0QsT0FBRCxDQURwQzs7QUFBQTtBQUNHRSxvQkFESDtBQUFBLDZDQUVJO0FBQ0hDLG1CQUFLLEVBQUU7QUFBRUQsd0JBQVEsRUFBUkEsUUFBRjtBQUFZRix1QkFBTyxFQUFQQTtBQUFaO0FBREosYUFGSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBU1AsK0RBQWVYLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODg2MjZjYzA3ODllZThhYTg4NTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncm9xIGZyb20gJ2dyb3EnO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCc7XHJcblxyXG4vL2ZvciBlYXN5IGltYWdlc1xyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJztcclxuXHJcbi8vbWF0ZXJpYWxVaSBjb21wb25lbnRzXHJcbmltcG9ydCB7Qm94fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UpIHtcclxuICAgIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpXHJcbn1cclxuXHJcbi8vc3R5bGVzXHJcbiAgICAvLyBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIC8vICAgICByb290OiB7XHJcbiAgICAvLyAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIGJhY2tncm91bmQ6IHtcclxuICAgIC8vICAgICAgICAgYmFja2dyb3VuZEF0dGFjaG1lbnQ6IGZpeGVkLFxyXG4gICAgLy8gICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IHt9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSkpO1xyXG5cclxuY29uc3QgSG9tZUJhbm5lciA9ICh7Y3VkYVJpZGdlfSkgPT4ge1xyXG4gICAgY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJ3aW5lcnlcIiBdYFxyXG4gICAgY29uc3QgcGFyYW1zID0ge31cclxuXHJcbmNsaWVudC5mZXRjaChxdWVyeSkudGhlbigod2luZXJ5KSA9PiB7XHJcbiAgICBjb25zdCBjdWRhUmlkZ2UgPSB3aW5lcnkuanNvblxyXG4gIGNvbnNvbGUubG9nKCd3aW5lcnkgZm91bmQnLGN1ZGFSaWRnZSlcclxuICBcclxufSlcclxuICAgIGNvbnNvbGUubG9nKCdob21lYmFubmVyJyxjdWRhUmlkZ2UpXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxCb3ggXHJcbiAgICAgICAgY29tcG9uZW50ID0gXCJkaXZcIlxyXG4gICAgICAgIC8vIGNsYXNzTmFtZT0nJ1xyXG4gICAgICAgIC8vIGJhY2tncm91bmRJbWFnZSA9e31cclxuICAgICAgICA+XHJcblxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwcmV2aWV3ID0gZmFsc2UgfSkge1xyXG4gICAgY29uc3Qgd2luZXJpZXMgPSBhd2FpdCBnZXRXaW5lcnlGb3JIb21lKHByZXZpZXcpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7IHdpbmVyaWVzLCBwcmV2aWV3IH0sXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lQmFubmVyIl0sInNvdXJjZVJvb3QiOiIifQ==