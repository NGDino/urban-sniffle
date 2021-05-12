self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/HomeBanner/index.js":
/*!****************************************!*\
  !*** ./components/HomeBanner/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ "./node_modules/groq/lib/groq.js");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sanity/image-url */ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client */ "./client.js");
/* harmony import */ var _sanity_schemas_winery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../sanity/schemas/winery */ "../sanity/schemas/winery.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\HomeBanner\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

 // import client from '../../client';
//api for queries
//for easy images

 //materialUi components






function urlFor(source) {
  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_4___default()(_client__WEBPACK_IMPORTED_MODULE_2__.default).image(source);
} //styles


var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex'
    },
    background: {
      height: 300,
      position: 'fixed'
    },
    textBackground: {}
  };
});

var HomeBanner = function HomeBanner(props) {
  _s();

  var _props$props = props.props,
      name = _props$props.name,
      image = _props$props.image;
  console.log(image);
  var classes = useStyles(); // console.log(name, image)

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
    component: "div",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
      container: true,
      className: classes.background,
      component: "img",
      src: urlFor(image)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
      container: true,
      className: classes.textBackground,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
        item: true,
        children: "Hello World"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 9
  }, _this);
}; // HomeBanner.getInitialProps = async () => ({
//     winery: await client.fetch(groq`
//     *[_type == "winery"]
//     `)
// })


_s(HomeBanner, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = HomeBanner;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lQmFubmVyL2luZGV4LmpzIl0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJ0ZXh0QmFja2dyb3VuZCIsIkhvbWVCYW5uZXIiLCJwcm9wcyIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7QUFFQTtBQUdBOztDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3JCLFNBQU9DLHdEQUFlLENBQUNDLDRDQUFELENBQWYsQ0FBd0JDLEtBQXhCLENBQThCSCxNQUE5QixDQUFQO0FBQ0gsQyxDQUVEOzs7QUFDQSxJQUFNSSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDckNDLFFBQUksRUFBRTtBQUNGQyxhQUFPLEVBQUU7QUFEUCxLQUQrQjtBQUlyQ0MsY0FBVSxFQUFFO0FBQ1JDLFlBQU0sRUFBRSxHQURBO0FBRVJDLGNBQVEsRUFBRTtBQUZGLEtBSnlCO0FBVXJDQyxrQkFBYyxFQUFFO0FBVnFCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQWdCQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxxQkFDTEEsS0FBSyxDQUFDQSxLQUREO0FBQUEsTUFDbkJDLElBRG1CLGdCQUNuQkEsSUFEbUI7QUFBQSxNQUNkWixLQURjLGdCQUNkQSxLQURjO0FBRTFCYSxTQUFPLENBQUNDLEdBQVIsQ0FBWWQsS0FBWjtBQU1BLE1BQU1lLE9BQU8sR0FBR2QsU0FBUyxFQUF6QixDQVIwQixDQVUxQjs7QUFDQSxzQkFDSSw4REFBQyxrREFBRDtBQUFLLGFBQVMsRUFBRSxLQUFoQjtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQ0EsZUFBUyxNQURUO0FBRUEsZUFBUyxFQUFFYyxPQUFPLENBQUNULFVBRm5CO0FBR0EsZUFBUyxFQUFDLEtBSFY7QUFJQSxTQUFHLEVBQUlWLE1BQU0sQ0FBQ0ksS0FBRDtBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU9JLDhEQUFDLG1EQUFEO0FBQ0EsZUFBUyxNQURUO0FBRUEsZUFBUyxFQUFHZSxPQUFPLENBQUNOLGNBRnBCO0FBQUEsNkJBSUksOERBQUMsbURBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxQkgsQ0FoQ0QsQyxDQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0F0Q01DLFU7VUFRY1QsUzs7O0tBUmRTLFU7QUEwQ04sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWEzOTkyN2YyYmY5YWVkMjgzNDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncm9xIGZyb20gJ2dyb3EnO1xyXG4vLyBpbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCc7XHJcblxyXG4vL2FwaSBmb3IgcXVlcmllc1xyXG5cclxuXHJcbi8vZm9yIGVhc3kgaW1hZ2VzXHJcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xyXG5cclxuLy9tYXRlcmlhbFVpIGNvbXBvbmVudHNcclxuaW1wb3J0IHtCb3gsIEdyaWR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50JztcclxuaW1wb3J0IHdpbmVyeSBmcm9tICcuLi8uLi8uLi9zYW5pdHkvc2NoZW1hcy93aW5lcnknO1xyXG5cclxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UpIHtcclxuICAgIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpXHJcbn1cclxuXHJcbi8vc3R5bGVzXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDAsXHJcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCdcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgfSxcclxuICAgIHRleHRCYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0pKTtcclxuXHJcblxyXG5jb25zdCBIb21lQmFubmVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7bmFtZSxpbWFnZX0gPSBwcm9wcy5wcm9wc1xyXG4gICAgY29uc29sZS5sb2coaW1hZ2UpXHJcblxyXG5cclxuXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICAgIFxyXG4gICAgLy8gY29uc29sZS5sb2cobmFtZSwgaW1hZ2UpXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEJveCBjb21wb25lbnQ9ICdkaXYnPlxyXG4gICAgICAgICAgICA8Qm94IFxyXG4gICAgICAgICAgICBjb250YWluZXIgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrZ3JvdW5kfVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9J2ltZydcclxuICAgICAgICAgICAgc3JjID0ge3VybEZvcihpbWFnZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxHcmlkIFxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSB7Y2xhc3Nlcy50ZXh0QmFja2dyb3VuZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICBIZWxsbyBXb3JsZFxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG4vLyBIb21lQmFubmVyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XHJcbi8vICAgICB3aW5lcnk6IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYFxyXG4vLyAgICAgKltfdHlwZSA9PSBcIndpbmVyeVwiXVxyXG4vLyAgICAgYClcclxuLy8gfSlcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZUJhbm5lciJdLCJzb3VyY2VSb290IjoiIn0=