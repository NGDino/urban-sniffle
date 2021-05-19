(function() {
var exports = {};
exports.id = "pages/flight/[slug]";
exports.ids = ["pages/flight/[slug]"];
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

/***/ "./pages/flight/[slug].js":
/*!********************************!*\
  !*** ./pages/flight/[slug].js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ "groq");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client */ "./client.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/image-url */ "@sanity/image-url");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\pages\\flight\\[slug].js";

 //for easy images



function urlFor(source) {
  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default()(_client__WEBPACK_IMPORTED_MODULE_2__.default).image(source);
}

const Post = props => {
  // const router = useRouter()
  console.log(props);
  const {
    name = 'Missing name',
    about = 'Missing about',
    image,
    _id,
    wines
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("article", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, undefined);
};

const query = (groq__WEBPACK_IMPORTED_MODULE_1___default())`
    *[_type == "flight" && slug.current == $slug][0]{
        _id,
        name,
        about,
        image,
        "wines":wine[]->{
        _id,
        name,
        year,
        slug,
        image,
        varietals,
        }
        
    
    }
`;

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  console.log('func works');
  const {
    slug = ""
  } = context.query;
  return await _client__WEBPACK_IMPORTED_MODULE_2__.default.fetch(query, {
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

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@sanity/image-url");;

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("groq");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/flight/[slug].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NsaWVudC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2ZsaWdodC9bc2x1Z10uanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAc2FuaXR5L2NsaWVudFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiQHNhbml0eS9pbWFnZS11cmxcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcImdyb3FcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsInByb2plY3RJZCIsImRhdGFzZXQiLCJ1c2VDZG4iLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJpbWFnZSIsIlBvc3QiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiYWJvdXQiLCJfaWQiLCJ3aW5lcyIsInF1ZXJ5IiwiZ3JvcSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLCtEQUFlQSxxREFBWSxDQUFDO0FBQzFCQyxXQUFTLEVBQUUsVUFEZTtBQUNIO0FBQ3ZCQyxTQUFPLEVBQUUsWUFGaUI7QUFFSDtBQUN2QkMsUUFBTSxFQUFFLElBSGtCLENBR2I7O0FBSGEsQ0FBRCxDQUEzQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtDQUdBOztBQUNBOztBQUVBLFNBQVNDLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3JCLFNBQU9DLHdEQUFlLENBQUNDLDRDQUFELENBQWYsQ0FBd0JDLEtBQXhCLENBQThCSCxNQUE5QixDQUFQO0FBQ0g7O0FBRUQsTUFBTUksSUFBSSxHQUFJQyxLQUFELElBQVc7QUFDcEI7QUFDSkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFFSSxRQUFNO0FBQ0ZHLFFBQUksR0FBRyxjQURMO0FBRUZDLFNBQUssR0FBRyxlQUZOO0FBR0ZOLFNBSEU7QUFJRk8sT0FKRTtBQUtGQztBQUxFLE1BTUZOLEtBTko7QUFRQSxzQkFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFNSCxDQWxCRDs7QUFvQkEsTUFBTU8sS0FBSyxHQUFHQyw2Q0FBSztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBakJBOztBQWtCQVQsSUFBSSxDQUFDVSxlQUFMLEdBQXVCLGdCQUFlQyxPQUFmLEVBQXdCO0FBQzNDO0FBQ0FULFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFDQSxRQUFNO0FBQUVTLFFBQUksR0FBRztBQUFULE1BQWdCRCxPQUFPLENBQUNILEtBQTlCO0FBQ0EsU0FBTyxNQUFNVixrREFBQSxDQUFhVSxLQUFiLEVBQW9CO0FBQUNJO0FBQUQsR0FBcEIsQ0FBYjtBQUNILENBTEQ7O0FBT0EsK0RBQWVaLElBQWYsRTs7Ozs7Ozs7Ozs7QUN2REEsNEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvZmxpZ2h0L1tzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNsaWVudC5qc1xuaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tICdAc2FuaXR5L2NsaWVudCdcblxuZXhwb3J0IGRlZmF1bHQgc2FuaXR5Q2xpZW50KHtcbiAgcHJvamVjdElkOiAnaWRzMXB2a2snLCAvLyB5b3UgY2FuIGZpbmQgdGhpcyBpbiBzYW5pdHkuanNvblxuICBkYXRhc2V0OiAncHJvZHVjdGlvbicsIC8vIG9yIHRoZSBuYW1lIHlvdSBjaG9zZSBpbiBzdGVwIDFcbiAgdXNlQ2RuOiB0cnVlIC8vIGBmYWxzZWAgaWYgeW91IHdhbnQgdG8gZW5zdXJlIGZyZXNoIGRhdGFcbn0pXG4iLCJpbXBvcnQgZ3JvcSBmcm9tICdncm9xJ1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnO1xuXG4vL2ZvciBlYXN5IGltYWdlc1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCc7XG5cbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XG4gICAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcbn1cblxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4ge1xuICAgIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5jb25zb2xlLmxvZyhwcm9wcylcbiAgICBcbiAgICBjb25zdCB7XG4gICAgICAgIG5hbWUgPSAnTWlzc2luZyBuYW1lJywgXG4gICAgICAgIGFib3V0ID0gJ01pc3NpbmcgYWJvdXQnLFxuICAgICAgICBpbWFnZSxcbiAgICAgICAgX2lkLFxuICAgICAgICB3aW5lcyxcbiAgICB9ID0gcHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICAgIFxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgXG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApXG59XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JvcWBcbiAgICAqW190eXBlID09IFwiZmxpZ2h0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXtcbiAgICAgICAgX2lkLFxuICAgICAgICBuYW1lLFxuICAgICAgICBhYm91dCxcbiAgICAgICAgaW1hZ2UsXG4gICAgICAgIFwid2luZXNcIjp3aW5lW10tPntcbiAgICAgICAgX2lkLFxuICAgICAgICBuYW1lLFxuICAgICAgICB5ZWFyLFxuICAgICAgICBzbHVnLFxuICAgICAgICBpbWFnZSxcbiAgICAgICAgdmFyaWV0YWxzLFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIFxuICAgIH1cbmBcblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oY29udGV4dCkge1xuICAgIC8vIEl0J3MgaW1wb3J0YW50IHRvIGRlZmF1bHQgdGhlIHNsdWcgc28gdGhhdCBpdCBkb2Vzbid0IHJldHVybiBcInVuZGVmaW5lZFwiXG4gICAgY29uc29sZS5sb2coJ2Z1bmMgd29ya3MnKVxuICAgIGNvbnN0IHsgc2x1ZyA9IFwiXCIgfSA9IGNvbnRleHQucXVlcnlcbiAgICByZXR1cm4gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5LCB7c2x1Z30pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3QiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNhbml0eS9pbWFnZS11cmxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyb3FcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==