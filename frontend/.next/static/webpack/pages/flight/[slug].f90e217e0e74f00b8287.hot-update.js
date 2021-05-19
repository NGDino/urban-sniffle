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
  var data = (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n    *[_type == \"flight\" && slug.current == $slug][0]{\n        _id,\n        name,\n        about,\n        image,\n        \"wines\":wine[]->{\n        _id,\n        name,\n        year,\n        slug,\n        image,\n        varietals,\n        }\n        \n    \n    }\n"]);

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
  var name = props[0].name;
  console.log('sluggy', name); // const {
  //     name = 'Missing name', 
  //     about = 'Missing about',
  //     image,
  //     wines,
  // } = props

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("article", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmxpZ2h0L1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJpbWFnZSIsIlBvc3QiLCJwcm9wcyIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJncm9xIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3JCLFNBQU9DLHdEQUFlLENBQUNDLDRDQUFELENBQWYsQ0FBd0JDLEtBQXhCLENBQThCSCxNQUE5QixDQUFQO0FBQ0g7O0FBRUQsSUFBTUksSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQ3BCO0FBRG9CLE1BR2hCQyxJQUhnQixHQUtoQkQsS0FBSyxDQUFDLENBQUQsQ0FMVyxDQUdoQkMsSUFIZ0I7QUFNcEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JGLElBQXRCLEVBTm9CLENBUXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRko7QUFNSCxDQXJCRDs7S0FBTUYsSTtBQXVCTixJQUFNSyxLQUFLLEdBQUdDLDJDQUFILG1CQUFYOztBQWtCQU4sSUFBSSxDQUFDTyxlQUFMO0FBQUEsK1FBQXVCLGlCQUFlQyxPQUFmO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkI7QUFDQUwsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFGbUIsa0NBR0dJLE9BQU8sQ0FBQ0gsS0FIWCxDQUdYSSxJQUhXLEVBR1hBLElBSFcsb0NBR0osRUFISTtBQUFBO0FBQUEsbUJBSU5YLGtEQUFBLENBQWFPLEtBQWIsRUFBb0I7QUFBQ0ksa0JBQUksRUFBSkE7QUFBRCxhQUFwQixDQUpNOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBdkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT0EsK0RBQWVULElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmxpZ2h0L1tzbHVnXS5mOTBlMjE3ZTBlNzRmMDBiODI4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSdcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50JztcblxuLy9mb3IgZWFzeSBpbWFnZXNcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xuXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xuICAgIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpXG59XG5cbmNvbnN0IFBvc3QgPSAocHJvcHMpID0+IHtcbiAgICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgXG4gICAgfSA9IHByb3BzWzBdXG4gICAgY29uc29sZS5sb2coJ3NsdWdneScsIG5hbWUpXG4gICAgXG4gICAgLy8gY29uc3Qge1xuICAgIC8vICAgICBuYW1lID0gJ01pc3NpbmcgbmFtZScsIFxuICAgIC8vICAgICBhYm91dCA9ICdNaXNzaW5nIGFib3V0JyxcbiAgICAvLyAgICAgaW1hZ2UsXG4gICAgLy8gICAgIHdpbmVzLFxuICAgIC8vIH0gPSBwcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICBcbiAgICAgICAgPC9hcnRpY2xlPlxuICAgIClcbn1cblxuY29uc3QgcXVlcnkgPSBncm9xYFxuICAgICpbX3R5cGUgPT0gXCJmbGlnaHRcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xuICAgICAgICBfaWQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGFib3V0LFxuICAgICAgICBpbWFnZSxcbiAgICAgICAgXCJ3aW5lc1wiOndpbmVbXS0+e1xuICAgICAgICBfaWQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHllYXIsXG4gICAgICAgIHNsdWcsXG4gICAgICAgIGltYWdlLFxuICAgICAgICB2YXJpZXRhbHMsXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgXG4gICAgfVxuYFxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcbiAgICBjb25zb2xlLmxvZygnZnVuYyB3b3JrcycpXG4gICAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5xdWVyeVxuICAgIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnksIHtzbHVnfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJzb3VyY2VSb290IjoiIn0=