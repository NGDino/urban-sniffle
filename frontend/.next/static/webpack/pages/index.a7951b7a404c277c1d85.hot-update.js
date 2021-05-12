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
    textBackground: {
      content: '',
      position: absolute,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }
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
      lineNumber: 55,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
      container: true,
      className: classes.textBackground,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
        item: true,
        children: "Hello World"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lQmFubmVyL2luZGV4LmpzIl0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJ0ZXh0QmFja2dyb3VuZCIsImNvbnRlbnQiLCJhYnNvbHV0ZSIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsIkhvbWVCYW5uZXIiLCJwcm9wcyIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7QUFFQTtBQUdBOztDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3JCLFNBQU9DLHdEQUFlLENBQUNDLDRDQUFELENBQWYsQ0FBd0JDLEtBQXhCLENBQThCSCxNQUE5QixDQUFQO0FBQ0gsQyxDQUVEOzs7QUFDQSxJQUFNSSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDckNDLFFBQUksRUFBRTtBQUNGQyxhQUFPLEVBQUU7QUFEUCxLQUQrQjtBQUlyQ0MsY0FBVSxFQUFFO0FBQ1JDLFlBQU0sRUFBRSxHQURBO0FBRVJDLGNBQVEsRUFBRTtBQUZGLEtBSnlCO0FBVXJDQyxrQkFBYyxFQUFFO0FBQ1pDLGFBQU8sRUFBRSxFQURHO0FBRVpGLGNBQVEsRUFBRUcsUUFGRTtBQUdaQyxTQUFHLEVBQUUsQ0FITztBQUlaQyxVQUFJLEVBQUUsQ0FKTTtBQUtaQyxXQUFLLEVBQUUsQ0FMSztBQU1aQyxZQUFNLEVBQUU7QUFOSTtBQVZxQixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUFxQkEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEscUJBQ0xBLEtBQUssQ0FBQ0EsS0FERDtBQUFBLE1BQ25CQyxJQURtQixnQkFDbkJBLElBRG1CO0FBQUEsTUFDZGxCLEtBRGMsZ0JBQ2RBLEtBRGM7QUFFMUJtQixTQUFPLENBQUNDLEdBQVIsQ0FBWXBCLEtBQVo7QUFNQSxNQUFNcUIsT0FBTyxHQUFHcEIsU0FBUyxFQUF6QixDQVIwQixDQVUxQjs7QUFDQSxzQkFDSSw4REFBQyxrREFBRDtBQUFLLGFBQVMsRUFBRSxLQUFoQjtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQ0EsZUFBUyxNQURUO0FBRUEsZUFBUyxFQUFFb0IsT0FBTyxDQUFDZixVQUZuQjtBQUdBLGVBQVMsRUFBQyxLQUhWO0FBSUEsU0FBRyxFQUFJVixNQUFNLENBQUNJLEtBQUQ7QUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFPSSw4REFBQyxtREFBRDtBQUNBLGVBQVMsTUFEVDtBQUVBLGVBQVMsRUFBR3FCLE9BQU8sQ0FBQ1osY0FGcEI7QUFBQSw2QkFJSSw4REFBQyxtREFBRDtBQUFNLFlBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXFCSCxDQWhDRCxDLENBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQXRDTU8sVTtVQVFjZixTOzs7S0FSZGUsVTtBQTBDTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hNzk1MWI3YTQwNGMyNzdjMWQ4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSc7XHJcbi8vIGltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50JztcclxuXHJcbi8vYXBpIGZvciBxdWVyaWVzXHJcblxyXG5cclxuLy9mb3IgZWFzeSBpbWFnZXNcclxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCc7XHJcblxyXG4vL21hdGVyaWFsVWkgY29tcG9uZW50c1xyXG5pbXBvcnQge0JveCwgR3JpZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnO1xyXG5pbXBvcnQgd2luZXJ5IGZyb20gJy4uLy4uLy4uL3Nhbml0eS9zY2hlbWFzL3dpbmVyeSc7XHJcblxyXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcclxufVxyXG5cclxuLy9zdHlsZXNcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICBoZWlnaHQ6IDMwMCxcclxuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJ1xyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICB9LFxyXG4gICAgdGV4dEJhY2tncm91bmQ6IHtcclxuICAgICAgICBjb250ZW50OiAnJyxcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgfVxyXG59KSk7XHJcblxyXG5cclxuY29uc3QgSG9tZUJhbm5lciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge25hbWUsaW1hZ2V9ID0gcHJvcHMucHJvcHNcclxuICAgIGNvbnNvbGUubG9nKGltYWdlKVxyXG5cclxuXHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgICBcclxuICAgIC8vIGNvbnNvbGUubG9nKG5hbWUsIGltYWdlKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxCb3ggY29tcG9uZW50PSAnZGl2Jz5cclxuICAgICAgICAgICAgPEJveCBcclxuICAgICAgICAgICAgY29udGFpbmVyIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2dyb3VuZH1cclxuICAgICAgICAgICAgY29tcG9uZW50PSdpbWcnXHJcbiAgICAgICAgICAgIHNyYyA9IHt1cmxGb3IoaW1hZ2UpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8R3JpZCBcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ge2NsYXNzZXMudGV4dEJhY2tncm91bmR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgSGVsbG8gV29ybGRcclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuLy8gSG9tZUJhbm5lci5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xyXG4vLyAgICAgd2luZXJ5OiBhd2FpdCBjbGllbnQuZmV0Y2goZ3JvcWBcclxuLy8gICAgICpbX3R5cGUgPT0gXCJ3aW5lcnlcIl1cclxuLy8gICAgIGApXHJcbi8vIH0pXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVCYW5uZXIiXSwic291cmNlUm9vdCI6IiJ9