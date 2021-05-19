self["webpackHotUpdate_N_E"]("pages/flight/[slug]",{

/***/ "./pages/flight/[slug].js":
/*!********************************!*\
  !*** ./pages/flight/[slug].js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! groq */ "./node_modules/groq/lib/groq.js");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../client */ "./client.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sanity/image-url */ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\pages\\flight\\[slug].js",
    _this = undefined;

function _templateObject() {
  var data = (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 //for easy images



function urlFor(source) {
  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default()(_client__WEBPACK_IMPORTED_MODULE_5__.default).image(source);
}

var Post = function Post(props) {
  // const router = useRouter()
  console.log('sluggy', props.name);
  var _props$name = props.name,
      name = _props$name === void 0 ? 'Missing name' : _props$name,
      _props$about = props.about,
      about = _props$about === void 0 ? 'Missing about' : _props$about,
      image = props.image,
      wines = props.wines;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("article", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
      children: about
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this), image && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
        src: urlFor(image).width(300).url()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, _this), wines && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("ul", {
      children: ["Which flight are you doing today?", wines.map(function (wine) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
          children: wine
        }, wine, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 40
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, _this);
};

_c = Post;
var query = groq__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());

Post.getInitialProps = /*#__PURE__*/function () {
  var _ref = (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(context) {
    var _context$query$slug, slug;

    return D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // It's important to default the slug so that it doesn't return "undefined"
            console.log('func works');
            _context$query$slug = context.query.slug, slug = _context$query$slug === void 0 ? "" : _context$query$slug;
            _context.next = 4;
            return _client__WEBPACK_IMPORTED_MODULE_5__.default.fetch(query, {
              slug: slug
            });

          case 4:
            return _context.abrupt("return", _context.sent);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmxpZ2h0L1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJpbWFnZSIsIlBvc3QiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiYWJvdXQiLCJ3aW5lcyIsIndpZHRoIiwidXJsIiwibWFwIiwid2luZSIsInF1ZXJ5IiwiZ3JvcSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUNyQixTQUFPQyx3REFBZSxDQUFDQyw0Q0FBRCxDQUFmLENBQXdCQyxLQUF4QixDQUE4QkgsTUFBOUIsQ0FBUDtBQUNIOztBQUVELElBQU1JLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUNwQjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCRixLQUFLLENBQUNHLElBQTVCO0FBRm9CLG9CQVNoQkgsS0FUZ0IsQ0FLaEJHLElBTGdCO0FBQUEsTUFLaEJBLElBTGdCLDRCQUtULGNBTFM7QUFBQSxxQkFTaEJILEtBVGdCLENBTWhCSSxLQU5nQjtBQUFBLE1BTWhCQSxLQU5nQiw2QkFNUixlQU5RO0FBQUEsTUFPaEJOLEtBUGdCLEdBU2hCRSxLQVRnQixDQU9oQkYsS0FQZ0I7QUFBQSxNQVFoQk8sS0FSZ0IsR0FTaEJMLEtBVGdCLENBUWhCSyxLQVJnQjtBQVdwQixzQkFFSTtBQUFBLDRCQUNJO0FBQUEsZ0JBQUtGO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBQSxnQkFBSUM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosRUFHS04sS0FBSyxpQkFDTjtBQUFBLDZCQUNJO0FBQ0ksV0FBRyxFQUFFSixNQUFNLENBQUNJLEtBQUQsQ0FBTixDQUNKUSxLQURJLENBQ0UsR0FERixFQUVKQyxHQUZJO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSixFQVlLRixLQUFLLGlCQUNGO0FBQUEsc0RBRUtBLEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSw0QkFBSTtBQUFBLG9CQUFnQkE7QUFBaEIsV0FBU0EsSUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFKO0FBQUEsT0FBZCxDQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKO0FBc0JILENBakNEOztLQUFNVixJO0FBbUNOLElBQU1XLEtBQUssR0FBR0MsMkNBQUgsbUJBQVg7O0FBR0FaLElBQUksQ0FBQ2EsZUFBTDtBQUFBLCtRQUF1QixpQkFBZUMsT0FBZjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CO0FBQ0FaLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBRm1CLGtDQUdHVyxPQUFPLENBQUNILEtBSFgsQ0FHWEksSUFIVyxFQUdYQSxJQUhXLG9DQUdKLEVBSEk7QUFBQTtBQUFBLG1CQUlOakIsa0RBQUEsQ0FBYWEsS0FBYixFQUFvQjtBQUFDSSxrQkFBSSxFQUFKQTtBQUFELGFBQXBCLENBSk07O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPQSwrREFBZWYsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mbGlnaHQvW3NsdWddLmFlYWYzZjNiYWJhZDBlOTNlNDUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3JvcSBmcm9tICdncm9xJ1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnO1xuXG4vL2ZvciBlYXN5IGltYWdlc1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCc7XG5cbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XG4gICAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcbn1cblxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4ge1xuICAgIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc29sZS5sb2coJ3NsdWdneScsIHByb3BzLm5hbWUpXG4gICAgXG4gICAgY29uc3Qge1xuICAgICAgICBuYW1lID0gJ01pc3NpbmcgbmFtZScsIFxuICAgICAgICBhYm91dCA9ICdNaXNzaW5nIGFib3V0JyxcbiAgICAgICAgaW1hZ2UsXG4gICAgICAgIHdpbmVzLFxuICAgIH0gPSBwcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgPGgxPntuYW1lfTwvaDE+XG4gICAgICAgICAgICA8cD57YWJvdXR9PC9wPlxuICAgICAgICAgICAge2ltYWdlICYmIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihpbWFnZSlcbiAgICAgICAgICAgICAgICAgICAgLndpZHRoKDMwMClcbiAgICAgICAgICAgICAgICAgICAgLnVybCgpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgICAgIHt3aW5lcyAmJiAoXG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICBXaGljaCBmbGlnaHQgYXJlIHlvdSBkb2luZyB0b2RheT9cbiAgICAgICAgICAgICAgICAgICAge3dpbmVzLm1hcCh3aW5lID0+IDxsaSBrZXk9e3dpbmV9Pnt3aW5lfTwvbGk+KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgIClcbn1cblxuY29uc3QgcXVlcnkgPSBncm9xYFxuXG5gXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxuICAgIGNvbnNvbGUubG9nKCdmdW5jIHdvcmtzJylcbiAgICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnF1ZXJ5XG4gICAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwge3NsdWd9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==