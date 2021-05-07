(function() {
var exports = {};
exports.id = "pages/post/[slug]";
exports.ids = ["pages/post/[slug]"];
exports.modules = {

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ "@sanity/client");
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);
// client.js

/* harmony default export */ __webpack_exports__["default"] = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
  projectId: 'ids1pvkk',
  // you can find this in sanity.json
  dataset: 'production',
  // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data

}));

/***/ }),

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client */ "./client.js");

var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\pages\\post\\[slug].js";



const Post = props => {
  // const router = useRouter()
  const {
    name = 'Missing name',
    about = 'Missing about',
    flight = "missing Flight"
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("article", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: about
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      children: flight
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const {
    slug = ""
  } = context.query;
  return await _client__WEBPACK_IMPORTED_MODULE_2__.default.fetch(`
      *[_type == "winery" && slug.current == $slug][0]{name, about,  "flight" => flight->name}
    `, {
    slug
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@sanity/client");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/post/[slug].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NsaWVudC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL3Bvc3QvW3NsdWddLmpzIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiQHNhbml0eS9jbGllbnRcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwidXNlQ2RuIiwiUG9zdCIsInByb3BzIiwibmFtZSIsImFib3V0IiwiZmxpZ2h0IiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInNsdWciLCJxdWVyeSIsImNsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSwrREFBZUEscURBQVksQ0FBQztBQUMxQkMsV0FBUyxFQUFFLFVBRGU7QUFDSDtBQUN2QkMsU0FBTyxFQUFFLFlBRmlCO0FBRUg7QUFDdkJDLFFBQU0sRUFBRSxJQUhrQixDQUdiOztBQUhhLENBQUQsQ0FBM0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7O0FBRUEsTUFBTUMsSUFBSSxHQUFJQyxLQUFELElBQVc7QUFDcEI7QUFDQSxRQUFNO0FBQUVDLFFBQUksR0FBRyxjQUFUO0FBQXlCQyxTQUFLLEdBQUcsZUFBakM7QUFBa0RDLFVBQU0sR0FBRTtBQUExRCxNQUErRUgsS0FBckY7QUFFQSxzQkFFSTtBQUFBLDRCQUNJO0FBQUEsZ0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUEsZ0JBQUlDO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQUEsZ0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQVFILENBWkQ7O0FBY0FKLElBQUksQ0FBQ0ssZUFBTCxHQUF1QixnQkFBZUMsT0FBZixFQUF3QjtBQUMzQztBQUNBLFFBQU07QUFBRUMsUUFBSSxHQUFHO0FBQVQsTUFBZ0JELE9BQU8sQ0FBQ0UsS0FBOUI7QUFDQSxTQUFPLE1BQU1DLGtEQUFBLENBQWM7QUFDL0I7QUFDQSxLQUZpQixFQUVWO0FBQUNGO0FBQUQsR0FGVSxDQUFiO0FBR0gsQ0FORDs7QUFRQSwrREFBZVAsSUFBZixFOzs7Ozs7Ozs7OztBQ3pCQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9wb3N0L1tzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNsaWVudC5qc1xyXG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gJ0BzYW5pdHkvY2xpZW50J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2FuaXR5Q2xpZW50KHtcclxuICBwcm9qZWN0SWQ6ICdpZHMxcHZraycsIC8vIHlvdSBjYW4gZmluZCB0aGlzIGluIHNhbml0eS5qc29uXHJcbiAgZGF0YXNldDogJ3Byb2R1Y3Rpb24nLCAvLyBvciB0aGUgbmFtZSB5b3UgY2hvc2UgaW4gc3RlcCAxXHJcbiAgdXNlQ2RuOiB0cnVlIC8vIGBmYWxzZWAgaWYgeW91IHdhbnQgdG8gZW5zdXJlIGZyZXNoIGRhdGFcclxufSkiLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnXHJcblxyXG5jb25zdCBQb3N0ID0gKHByb3BzKSA9PiB7XHJcbiAgICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgeyBuYW1lID0gJ01pc3NpbmcgbmFtZScsIGFib3V0ID0gJ01pc3NpbmcgYWJvdXQnLCBmbGlnaHQgPVwibWlzc2luZyBGbGlnaHRcIiB9ID0gcHJvcHNcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgICA8aDE+e25hbWV9PC9oMT5cclxuICAgICAgICAgICAgPHA+e2Fib3V0fTwvcD5cclxuICAgICAgICAgICAgPGg0PntmbGlnaHR9PC9oND5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICApXHJcbn1cclxuXHJcblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oY29udGV4dCkge1xyXG4gICAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcclxuICAgIGNvbnN0IHsgc2x1ZyA9IFwiXCIgfSA9IGNvbnRleHQucXVlcnlcclxuICAgIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2goYFxyXG4gICAgICAqW190eXBlID09IFwid2luZXJ5XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXtuYW1lLCBhYm91dCwgIFwiZmxpZ2h0XCIgPT4gZmxpZ2h0LT5uYW1lfVxyXG4gICAgYCwge3NsdWd9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNhbml0eS9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=