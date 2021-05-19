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
  console.log('sluggy', props[0]); // const {
  //     name = 'Missing name', 
  //     about = 'Missing about',
  //     image,
  //     wines,
  // } = props

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("article", {}, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmxpZ2h0L1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJpbWFnZSIsIlBvc3QiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsImdyb3EiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0Iiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFpQkMsTUFBakIsRUFBeUI7QUFDckIsU0FBT0Msd0RBQWUsQ0FBQ0MsNENBQUQsQ0FBZixDQUF3QkMsS0FBeEIsQ0FBOEJILE1BQTlCLENBQVA7QUFDSDs7QUFFRCxJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFDcEI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkYsS0FBSyxDQUFDLENBQUQsQ0FBM0IsRUFGb0IsQ0FJcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGSjtBQU1ILENBakJEOztLQUFNRCxJO0FBbUJOLElBQU1JLEtBQUssR0FBR0MsMkNBQUgsbUJBQVg7O0FBa0JBTCxJQUFJLENBQUNNLGVBQUw7QUFBQSwrUUFBdUIsaUJBQWVDLE9BQWY7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQjtBQUNBTCxtQkFBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUZtQixrQ0FHR0ksT0FBTyxDQUFDSCxLQUhYLENBR1hJLElBSFcsRUFHWEEsSUFIVyxvQ0FHSixFQUhJO0FBQUE7QUFBQSxtQkFJTlYsa0RBQUEsQ0FBYU0sS0FBYixFQUFvQjtBQUFDSSxrQkFBSSxFQUFKQTtBQUFELGFBQXBCLENBSk07O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPQSwrREFBZVIsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mbGlnaHQvW3NsdWddLjg1NzdlOWUzMjI1ZmI2Mzk3ZWEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3JvcSBmcm9tICdncm9xJ1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnO1xuXG4vL2ZvciBlYXN5IGltYWdlc1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCc7XG5cbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XG4gICAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcbn1cblxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4ge1xuICAgIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc29sZS5sb2coJ3NsdWdneScsIHByb3BzWzBdKVxuICAgIFxuICAgIC8vIGNvbnN0IHtcbiAgICAvLyAgICAgbmFtZSA9ICdNaXNzaW5nIG5hbWUnLCBcbiAgICAvLyAgICAgYWJvdXQgPSAnTWlzc2luZyBhYm91dCcsXG4gICAgLy8gICAgIGltYWdlLFxuICAgIC8vICAgICB3aW5lcyxcbiAgICAvLyB9ID0gcHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICAgIFxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgXG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApXG59XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JvcWBcbiAgICAqW190eXBlID09IFwiZmxpZ2h0XCIgJiYgX2lkID09ICdlNWYyODU2My1lMDRiLTQ1MDUtYmExNC0zOGFmNGI2YmI1OTknXXtcbiAgICAgICAgX2lkLFxuICAgICAgICBuYW1lLFxuICAgICAgICBhYm91dCxcbiAgICAgICAgaW1hZ2UsXG4gICAgICAgIFwid2luZXNcIjp3aW5lW10tPntcbiAgICAgICAgX2lkLFxuICAgICAgICBuYW1lLFxuICAgICAgICB5ZWFyLFxuICAgICAgICBzbHVnLFxuICAgICAgICBpbWFnZSxcbiAgICAgICAgdmFyaWV0YWxzLFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIFxuICAgIH1cbmBcblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oY29udGV4dCkge1xuICAgIC8vIEl0J3MgaW1wb3J0YW50IHRvIGRlZmF1bHQgdGhlIHNsdWcgc28gdGhhdCBpdCBkb2Vzbid0IHJldHVybiBcInVuZGVmaW5lZFwiXG4gICAgY29uc29sZS5sb2coJ2Z1bmMgd29ya3MnKVxuICAgIGNvbnN0IHsgc2x1ZyA9IFwiXCIgfSA9IGNvbnRleHQucXVlcnlcbiAgICByZXR1cm4gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5LCB7c2x1Z30pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9