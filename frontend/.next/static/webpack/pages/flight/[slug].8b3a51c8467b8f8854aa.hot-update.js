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
  var data = (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n    *[_type == \"flight\" && _id == 'e5f28563-e04b-4505-ba14-38af4b6bb599']{\n        _id,\n        name,\n        about,\n        image,\n        \"wines\":wine[]->{\n        _id,\n        name,\n        year,\n        slug,\n        image,\n        varietals,\n        }\n        \n    \n    }\n"]);

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
  var _props$0$console$log = props[0].console.log('sluggy', name),
      name = _props$0$console$log.name; // const {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmxpZ2h0L1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJpbWFnZSIsIlBvc3QiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwicXVlcnkiLCJncm9xIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3JCLFNBQU9DLHdEQUFlLENBQUNDLDRDQUFELENBQWYsQ0FBd0JDLEtBQXhCLENBQThCSCxNQUE5QixDQUFQO0FBQ0g7O0FBRUQsSUFBTUksSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQ3BCO0FBRG9CLDZCQUtoQkEsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUNKQyxPQURJLENBQ0lDLEdBREosQ0FDUSxRQURSLEVBQ2tCQyxJQURsQixDQUxnQjtBQUFBLE1BR2hCQSxJQUhnQix3QkFHaEJBLElBSGdCLEVBUXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsc0JBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKO0FBTUgsQ0FyQkQ7O0tBQU1KLEk7QUF1Qk4sSUFBTUssS0FBSyxHQUFHQywyQ0FBSCxtQkFBWDs7QUFrQkFOLElBQUksQ0FBQ08sZUFBTDtBQUFBLCtRQUF1QixpQkFBZUMsT0FBZjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CO0FBQ0FOLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBRm1CLGtDQUdHSyxPQUFPLENBQUNILEtBSFgsQ0FHWEksSUFIVyxFQUdYQSxJQUhXLG9DQUdKLEVBSEk7QUFBQTtBQUFBLG1CQUlOWCxrREFBQSxDQUFhTyxLQUFiLEVBQW9CO0FBQUNJLGtCQUFJLEVBQUpBO0FBQUQsYUFBcEIsQ0FKTTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXZCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU9BLCtEQUFlVCxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZsaWdodC9bc2x1Z10uOGIzYTUxYzg0NjdiOGY4ODU0YWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncm9xIGZyb20gJ2dyb3EnXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCc7XG5cbi8vZm9yIGVhc3kgaW1hZ2VzXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJztcblxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UpIHtcbiAgICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKVxufVxuXG5jb25zdCBQb3N0ID0gKHByb3BzKSA9PiB7XG4gICAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCB7XG4gICAgICAgIG5hbWUsXG5cbiAgICB9ID0gcHJvcHNbMF0uXG4gICAgY29uc29sZS5sb2coJ3NsdWdneScsIG5hbWUpXG4gICAgXG4gICAgLy8gY29uc3Qge1xuICAgIC8vICAgICBuYW1lID0gJ01pc3NpbmcgbmFtZScsIFxuICAgIC8vICAgICBhYm91dCA9ICdNaXNzaW5nIGFib3V0JyxcbiAgICAvLyAgICAgaW1hZ2UsXG4gICAgLy8gICAgIHdpbmVzLFxuICAgIC8vIH0gPSBwcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICBcbiAgICAgICAgPC9hcnRpY2xlPlxuICAgIClcbn1cblxuY29uc3QgcXVlcnkgPSBncm9xYFxuICAgICpbX3R5cGUgPT0gXCJmbGlnaHRcIiAmJiBfaWQgPT0gJ2U1ZjI4NTYzLWUwNGItNDUwNS1iYTE0LTM4YWY0YjZiYjU5OSdde1xuICAgICAgICBfaWQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGFib3V0LFxuICAgICAgICBpbWFnZSxcbiAgICAgICAgXCJ3aW5lc1wiOndpbmVbXS0+e1xuICAgICAgICBfaWQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHllYXIsXG4gICAgICAgIHNsdWcsXG4gICAgICAgIGltYWdlLFxuICAgICAgICB2YXJpZXRhbHMsXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgXG4gICAgfVxuYFxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcbiAgICBjb25zb2xlLmxvZygnZnVuYyB3b3JrcycpXG4gICAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5xdWVyeVxuICAgIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnksIHtzbHVnfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJzb3VyY2VSb290IjoiIn0=