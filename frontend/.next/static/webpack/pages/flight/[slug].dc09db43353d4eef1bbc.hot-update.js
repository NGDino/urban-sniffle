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
  var data = (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n    *[_type == \"flight\" && name == \"Standard tasting flight\"]{\n        _id,\n        name,\n        about,\n        image,\n        \"wines\":wine[]->{\n        _id,\n        name,\n        year,\n        slug,\n        image,\n        varietals,\n        }\n        \n    \n    }\n"]);

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
  console.log('sluggy', props.name); // const {
  //     name = 'Missing name', 
  //     about = 'Missing about',
  //     image,
  //     wines,
  // } = props

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmxpZ2h0L1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJpbWFnZSIsIlBvc3QiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiYWJvdXQiLCJ3aWR0aCIsInVybCIsIndpbmVzIiwibWFwIiwid2luZSIsInF1ZXJ5IiwiZ3JvcSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUNyQixTQUFPQyx3REFBZSxDQUFDQyw0Q0FBRCxDQUFmLENBQXdCQyxLQUF4QixDQUE4QkgsTUFBOUIsQ0FBUDtBQUNIOztBQUVELElBQU1JLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUNwQjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCRixLQUFLLENBQUNHLElBQTVCLEVBRm9CLENBSXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFFSTtBQUFBLDRCQUNJO0FBQUEsZ0JBQUtBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBQSxnQkFBSUM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosRUFHS04sS0FBSyxpQkFDTjtBQUFBLDZCQUNJO0FBQ0ksV0FBRyxFQUFFSixNQUFNLENBQUNJLEtBQUQsQ0FBTixDQUNKTyxLQURJLENBQ0UsR0FERixFQUVKQyxHQUZJO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSixFQVlLQyxLQUFLLGlCQUNGO0FBQUEsc0RBRUtBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSw0QkFBSTtBQUFBLG9CQUFnQkE7QUFBaEIsV0FBU0EsSUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFKO0FBQUEsT0FBZCxDQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKO0FBc0JILENBakNEOztLQUFNVixJO0FBbUNOLElBQU1XLEtBQUssR0FBR0MsMkNBQUgsbUJBQVg7O0FBa0JBWixJQUFJLENBQUNhLGVBQUw7QUFBQSwrUUFBdUIsaUJBQWVDLE9BQWY7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQjtBQUNBWixtQkFBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUZtQixrQ0FHR1csT0FBTyxDQUFDSCxLQUhYLENBR1hJLElBSFcsRUFHWEEsSUFIVyxvQ0FHSixFQUhJO0FBQUE7QUFBQSxtQkFJTmpCLGtEQUFBLENBQWFhLEtBQWIsRUFBb0I7QUFBQ0ksa0JBQUksRUFBSkE7QUFBRCxhQUFwQixDQUpNOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBdkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT0EsK0RBQWVmLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmxpZ2h0L1tzbHVnXS5kYzA5ZGI0MzM1M2Q0ZWVmMWJiYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSdcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50JztcblxuLy9mb3IgZWFzeSBpbWFnZXNcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xuXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xuICAgIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpXG59XG5cbmNvbnN0IFBvc3QgPSAocHJvcHMpID0+IHtcbiAgICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnNvbGUubG9nKCdzbHVnZ3knLCBwcm9wcy5uYW1lKVxuICAgIFxuICAgIC8vIGNvbnN0IHtcbiAgICAvLyAgICAgbmFtZSA9ICdNaXNzaW5nIG5hbWUnLCBcbiAgICAvLyAgICAgYWJvdXQgPSAnTWlzc2luZyBhYm91dCcsXG4gICAgLy8gICAgIGltYWdlLFxuICAgIC8vICAgICB3aW5lcyxcbiAgICAvLyB9ID0gcHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICAgIFxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgIDxoMT57bmFtZX08L2gxPlxuICAgICAgICAgICAgPHA+e2Fib3V0fTwvcD5cbiAgICAgICAgICAgIHtpbWFnZSAmJiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IoaW1hZ2UpXG4gICAgICAgICAgICAgICAgICAgIC53aWR0aCgzMDApXG4gICAgICAgICAgICAgICAgICAgIC51cmwoKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgICAgICB7d2luZXMgJiYgKFxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgV2hpY2ggZmxpZ2h0IGFyZSB5b3UgZG9pbmcgdG9kYXk/XG4gICAgICAgICAgICAgICAgICAgIHt3aW5lcy5tYXAod2luZSA9PiA8bGkga2V5PXt3aW5lfT57d2luZX08L2xpPil9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApXG59XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JvcWBcbiAgICAqW190eXBlID09IFwiZmxpZ2h0XCIgJiYgbmFtZSA9PSBcIlN0YW5kYXJkIHRhc3RpbmcgZmxpZ2h0XCJde1xuICAgICAgICBfaWQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGFib3V0LFxuICAgICAgICBpbWFnZSxcbiAgICAgICAgXCJ3aW5lc1wiOndpbmVbXS0+e1xuICAgICAgICBfaWQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHllYXIsXG4gICAgICAgIHNsdWcsXG4gICAgICAgIGltYWdlLFxuICAgICAgICB2YXJpZXRhbHMsXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgXG4gICAgfVxuYFxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcbiAgICBjb25zb2xlLmxvZygnZnVuYyB3b3JrcycpXG4gICAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5xdWVyeVxuICAgIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnksIHtzbHVnfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJzb3VyY2VSb290IjoiIn0=