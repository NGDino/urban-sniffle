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
      background: 'inherit',
      '&::before': {
        content: '',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        boxShadow: 'inset 0 0 2000px rgba(255, 255, 255, .5)',
        filter: 'blur(10px)',
        background: 'inherit'
      }
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
      lineNumber: 62,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
      container: true,
      className: classes.textBackground,
      justify: "center",
      alighnItems: "center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
        item: true,
        children: "Hello World"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lQmFubmVyL2luZGV4LmpzIl0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJ0ZXh0QmFja2dyb3VuZCIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJib3hTaGFkb3ciLCJmaWx0ZXIiLCJIb21lQmFubmVyIiwicHJvcHMiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBO0FBRUE7QUFHQTs7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUNyQixTQUFPQyx3REFBZSxDQUFDQyw0Q0FBRCxDQUFmLENBQXdCQyxLQUF4QixDQUE4QkgsTUFBOUIsQ0FBUDtBQUNILEMsQ0FFRDs7O0FBQ0EsSUFBTUksU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3JDQyxRQUFJLEVBQUU7QUFDRkMsYUFBTyxFQUFFO0FBRFAsS0FEK0I7QUFJckNDLGNBQVUsRUFBRTtBQUNSQyxZQUFNLEVBQUUsR0FEQTtBQUVSQyxjQUFRLEVBQUU7QUFGRixLQUp5QjtBQVVyQ0Msa0JBQWMsRUFBRTtBQUNaSCxnQkFBVSxFQUFFLFNBREE7QUFFWixtQkFBWTtBQUNSSSxlQUFPLEVBQUUsRUFERDtBQUVSRixnQkFBUSxFQUFFLFVBRkY7QUFHUkcsV0FBRyxFQUFFLENBSEc7QUFJUkMsWUFBSSxFQUFFLENBSkU7QUFLUkMsYUFBSyxFQUFFLENBTEM7QUFNUkMsY0FBTSxFQUFFLENBTkE7QUFPUkMsaUJBQVMsRUFBRSwwQ0FQSDtBQVFSQyxjQUFNLEVBQUUsWUFSQTtBQVNSVixrQkFBVSxFQUFFO0FBVEo7QUFGQTtBQVZxQixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUE0QkEsSUFBTVcsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEscUJBQ0xBLEtBQUssQ0FBQ0EsS0FERDtBQUFBLE1BQ25CQyxJQURtQixnQkFDbkJBLElBRG1CO0FBQUEsTUFDZG5CLEtBRGMsZ0JBQ2RBLEtBRGM7QUFFMUJvQixTQUFPLENBQUNDLEdBQVIsQ0FBWXJCLEtBQVo7QUFNQSxNQUFNc0IsT0FBTyxHQUFHckIsU0FBUyxFQUF6QixDQVIwQixDQVUxQjs7QUFDQSxzQkFDSSw4REFBQyxrREFBRDtBQUFLLGFBQVMsRUFBRSxLQUFoQjtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQ0EsZUFBUyxNQURUO0FBRUEsZUFBUyxFQUFFcUIsT0FBTyxDQUFDaEIsVUFGbkI7QUFHQSxlQUFTLEVBQUMsS0FIVjtBQUlBLFNBQUcsRUFBSVYsTUFBTSxDQUFDSSxLQUFEO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBT0ksOERBQUMsbURBQUQ7QUFDQSxlQUFTLE1BRFQ7QUFFQSxlQUFTLEVBQUdzQixPQUFPLENBQUNiLGNBRnBCO0FBR0EsYUFBTyxFQUFFLFFBSFQ7QUFJQSxpQkFBVyxFQUFHLFFBSmQ7QUFBQSw2QkFNSSw4REFBQyxtREFBRDtBQUFNLFlBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXVCSCxDQWxDRCxDLENBb0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQXhDTVEsVTtVQVFjaEIsUzs7O0tBUmRnQixVO0FBNENOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjcwOTFjNmM5ZTdmNmNkY2JmOWM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3JvcSBmcm9tICdncm9xJztcclxuLy8gaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnO1xyXG5cclxuLy9hcGkgZm9yIHF1ZXJpZXNcclxuXHJcblxyXG4vL2ZvciBlYXN5IGltYWdlc1xyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJztcclxuXHJcbi8vbWF0ZXJpYWxVaSBjb21wb25lbnRzXHJcbmltcG9ydCB7Qm94LCBHcmlkfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCc7XHJcbmltcG9ydCB3aW5lcnkgZnJvbSAnLi4vLi4vLi4vc2FuaXR5L3NjaGVtYXMvd2luZXJ5JztcclxuXHJcbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XHJcbiAgICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKVxyXG59XHJcblxyXG4vL3N0eWxlc1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgIGhlaWdodDogMzAwLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnXHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgIH0sXHJcbiAgICB0ZXh0QmFja2dyb3VuZDoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICdpbmhlcml0JyxcclxuICAgICAgICAnJjo6YmVmb3JlJzp7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICByaWdodDogMCxcclxuICAgICAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6ICdpbnNldCAwIDAgMjAwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpJyxcclxuICAgICAgICAgICAgZmlsdGVyOiAnYmx1cigxMHB4KScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdpbmhlcml0J1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG59KSk7XHJcblxyXG5cclxuY29uc3QgSG9tZUJhbm5lciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge25hbWUsaW1hZ2V9ID0gcHJvcHMucHJvcHNcclxuICAgIGNvbnNvbGUubG9nKGltYWdlKVxyXG5cclxuXHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgICBcclxuICAgIC8vIGNvbnNvbGUubG9nKG5hbWUsIGltYWdlKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxCb3ggY29tcG9uZW50PSAnZGl2Jz5cclxuICAgICAgICAgICAgPEJveCBcclxuICAgICAgICAgICAgY29udGFpbmVyIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2dyb3VuZH1cclxuICAgICAgICAgICAgY29tcG9uZW50PSdpbWcnXHJcbiAgICAgICAgICAgIHNyYyA9IHt1cmxGb3IoaW1hZ2UpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8R3JpZCBcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ge2NsYXNzZXMudGV4dEJhY2tncm91bmR9XHJcbiAgICAgICAgICAgIGp1c3RpZnk9ICdjZW50ZXInXHJcbiAgICAgICAgICAgIGFsaWdobkl0ZW1zID0gJ2NlbnRlcidcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICBIZWxsbyBXb3JsZFxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG4vLyBIb21lQmFubmVyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XHJcbi8vICAgICB3aW5lcnk6IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYFxyXG4vLyAgICAgKltfdHlwZSA9PSBcIndpbmVyeVwiXVxyXG4vLyAgICAgYClcclxuLy8gfSlcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZUJhbm5lciJdLCJzb3VyY2VSb290IjoiIn0=