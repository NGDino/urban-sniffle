self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MyCarousel/index.js":
/*!****************************************!*\
  !*** ./components/MyCarousel/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-material-ui-carousel */ "./node_modules/react-material-ui-carousel/dist/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sanity/image-url */ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client */ "./client.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\MyCarousel\\index.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();







var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1)
      }
    },
    avatar: {
      width: theme.spacing(10),
      height: theme.spacing()
    }
  };
});

function urlFor(source) {
  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default()(_client__WEBPACK_IMPORTED_MODULE_4__.default).image(source);
}

function MyCarousel(props) {
  _s();

  var _this = this;

  var members = props.props;
  console.log(members);
  var classes = useStyles();
  return (
    /*#__PURE__*/
    // <div></div>
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_3__.default, {
      autoPlay: false,
      animation: "slide",
      index: 0,
      children: members.map(function (member, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Item, {
          item: member
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 45
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, this)
  );
}

_s(MyCarousel, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = MyCarousel;

function Item(member) {
  _s2();

  var _jsxDEV2, _jsxDEV3;

  console.log('inside Item', member.item);
  var classes = useStyles();
  var image = urlFor(member.item.staffImage);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {
    container: true,
    component: _material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Paper,
    className: classes.root,
    alignItems: "center",
    justify: "center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {
      item: true,
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Avatar, {
        className: classes.avatar,
        alt: "picture of ".concat(member.item.name),
        src: image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {
      item: true,
      xs: 12,
      component: _material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography,
      variant: "h5",
      children: member.item.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, (_jsxDEV2 = {
      item: true
    }, (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "item", true), (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "xs", 12), (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "component", _material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography), (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "variant", "subtitle1"), (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "children", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("strong", {
      children: member.item.position
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }, this)), _jsxDEV2), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, (_jsxDEV3 = {
      item: true
    }, (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV3, "item", true), (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV3, "xs", 12), (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV3, "component", _material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography), (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV3, "variant", "subtitle1"), (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV3, "children", [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("strong", {
      children: "Favorite Wine:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }, this), " ", member.item.favoriteWine]), _jsxDEV3), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, this);
}

_s2(Item, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c2 = Item;
/* harmony default export */ __webpack_exports__["default"] = (MyCarousel);

var _c, _c2;

$RefreshReg$(_c, "MyCarousel");
$RefreshReg$(_c2, "Item");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcm91c2VsL2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwibWFyZ2luIiwic3BhY2luZyIsImF2YXRhciIsIndpZHRoIiwiaGVpZ2h0IiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwiaW1hZ2UiLCJNeUNhcm91c2VsIiwicHJvcHMiLCJtZW1iZXJzIiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJtYXAiLCJtZW1iZXIiLCJpIiwiSXRlbSIsIml0ZW0iLCJzdGFmZkltYWdlIiwiUGFwZXIiLCJuYW1lIiwiVHlwb2dyYXBoeSIsInBvc2l0aW9uIiwiZmF2b3JpdGVXaW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsUUFBSSxFQUFFO0FBQ0ZDLGFBQU8sRUFBRSxNQURQO0FBRUYsZUFBUztBQUNMQyxjQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQ7QUFESDtBQUZQLEtBRCtCO0FBT3JDQyxVQUFNLEVBQUU7QUFDSkMsV0FBSyxFQUFFTixLQUFLLENBQUNJLE9BQU4sQ0FBYyxFQUFkLENBREg7QUFFSkcsWUFBTSxFQUFFUCxLQUFLLENBQUNJLE9BQU47QUFGSjtBQVA2QixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUFhQSxTQUFTSSxNQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUNyQixTQUFPQyx3REFBZSxDQUFDQyw0Q0FBRCxDQUFmLENBQXdCQyxLQUF4QixDQUE4QkgsTUFBOUIsQ0FBUDtBQUNIOztBQUVELFNBQVNJLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTBCO0FBQUE7O0FBQUE7O0FBQ3RCLE1BQU1DLE9BQU8sR0FBR0QsS0FBSyxDQUFDQSxLQUF0QjtBQUNBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUVBLE1BQU1HLE9BQU8sR0FBR3BCLFNBQVMsRUFBekI7QUFFQTtBQUFBO0FBQ0k7QUFDQSxrRUFBQywrREFBRDtBQUFVLGNBQVEsRUFBRSxLQUFwQjtBQUEyQixlQUFTLEVBQUUsT0FBdEM7QUFBOEMsV0FBSyxFQUFJLENBQXZEO0FBQUEsZ0JBRVFpQixPQUFPLENBQUNJLEdBQVIsQ0FBYSxVQUFDQyxNQUFELEVBQVNDLENBQVQ7QUFBQSw0QkFBZSw4REFBQyxJQUFEO0FBQWMsY0FBSSxFQUFFRDtBQUFwQixXQUFXQyxDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWY7QUFBQSxPQUFiO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBUUg7O0dBZFFSLFU7VUFJV2YsUzs7O0tBSlhlLFU7O0FBZ0JULFNBQVNTLElBQVQsQ0FBY0YsTUFBZCxFQUFxQjtBQUFBOztBQUFBOztBQUNqQkosU0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQkcsTUFBTSxDQUFDRyxJQUFsQztBQUNBLE1BQU1MLE9BQU8sR0FBR3BCLFNBQVMsRUFBekI7QUFDQSxNQUFPYyxLQUFLLEdBQUdKLE1BQU0sQ0FBQ1ksTUFBTSxDQUFDRyxJQUFQLENBQVlDLFVBQWIsQ0FBckI7QUFFQSxzQkFDSSw4REFBQyxtREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixhQUFTLEVBQUlDLG9EQUE3QjtBQUFvQyxhQUFTLEVBQUVQLE9BQU8sQ0FBQ2pCLElBQXZEO0FBQTZELGNBQVUsRUFBQyxRQUF4RTtBQUFpRixXQUFPLEVBQUcsUUFBM0Y7QUFBQSw0QkFDSSw4REFBQyxtREFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBSSxFQUFqQjtBQUFBLDZCQUNJLDhEQUFDLHFEQUFEO0FBQVEsaUJBQVMsRUFBRWlCLE9BQU8sQ0FBQ2IsTUFBM0I7QUFBbUMsV0FBRyx1QkFBa0JlLE1BQU0sQ0FBQ0csSUFBUCxDQUFZRyxJQUE5QixDQUF0QztBQUE0RSxXQUFHLEVBQUlkO0FBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFJSSw4REFBQyxtREFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxFQUFmO0FBQW1CLGVBQVMsRUFBR2UseURBQS9CO0FBQTJDLGFBQU8sRUFBQyxJQUFuRDtBQUFBLGdCQUNLUCxNQUFNLENBQUNHLElBQVAsQ0FBWUc7QUFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKLGVBT0ksOERBQUMsbURBQUQ7QUFBTSxVQUFJO0FBQVYsOFNBQW9CLEVBQXBCLHlKQUFxQ0MseURBQXJDLHVKQUF5RCxXQUF6RCxxS0FDSTtBQUFBLGdCQUFTUCxNQUFNLENBQUNHLElBQVAsQ0FBWUs7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSixlQVVJLDhEQUFDLG1EQUFEO0FBQU0sVUFBSTtBQUFWLDhTQUFvQixFQUFwQix5SkFBcUNELHlEQUFyQyx1SkFBeUQsV0FBekQsc0tBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixPQUNxQ1AsTUFBTSxDQUFDRyxJQUFQLENBQVlNLFlBRGpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWtCSDs7SUF2QlFQLEk7VUFFV3hCLFM7OztNQUZYd0IsSTtBQXlCVCwrREFBZVQsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNzE3M2RhMjczNWM4MjcyOTRlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tYXRlcmlhbC11aS1jYXJvdXNlbCdcbmltcG9ydCB7IFBhcGVyLCBUeXBvZ3JhcGh5LCBCdXR0b24sIEdyaWQsIENhcmQsIEF2YXRhcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCc7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCc7XG5cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICcmID4gKic6IHtcbiAgICAgICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGF2YXRhcjoge1xuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZygxMCksXG4gICAgICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygpLFxuICAgICAgfSxcbn0pKVxuXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xuICAgIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpXG59XG5cbmZ1bmN0aW9uIE15Q2Fyb3VzZWwocHJvcHMpe1xuICAgIGNvbnN0IG1lbWJlcnMgPSBwcm9wcy5wcm9wc1xuICAgIGNvbnNvbGUubG9nKG1lbWJlcnMpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICAgIHJldHVybiAoXG4gICAgICAgIC8vIDxkaXY+PC9kaXY+XG4gICAgICAgIDxDYXJvdXNlbCBhdXRvUGxheT17ZmFsc2V9IGFuaW1hdGlvbj0gJ3NsaWRlJyBpbmRleCA9IHswfT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZW1iZXJzLm1hcCggKG1lbWJlciwgaSkgPT4gPEl0ZW0ga2V5PXtpfSBpdGVtPXttZW1iZXJ9IC8+IClcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEl0ZW0obWVtYmVyKXtcbiAgICBjb25zb2xlLmxvZygnaW5zaWRlIEl0ZW0nLCBtZW1iZXIuaXRlbSlcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcbiAgICBjb25zdCAgaW1hZ2UgPSB1cmxGb3IobWVtYmVyLml0ZW0uc3RhZmZJbWFnZSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBjb21wb25lbnQgPSB7UGFwZXJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBhbGlnbkl0ZW1zPSdjZW50ZXInIGp1c3RpZnkgPSAnY2VudGVyJz5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHMgPSB7MTJ9ID5cbiAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9IGFsdCA9IHtgcGljdHVyZSBvZiAke21lbWJlci5pdGVtLm5hbWV9YH0gc3JjID0ge2ltYWdlfS8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY29tcG9uZW50ID17VHlwb2dyYXBoeX0gdmFyaWFudD0naDUnPlxuICAgICAgICAgICAgICAgIHttZW1iZXIuaXRlbS5uYW1lfVxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSBpdGVtIHhzPXsxMn0gY29tcG9uZW50ID0ge1R5cG9ncmFwaHl9IHZhcmlhbnQ9J3N1YnRpdGxlMSc+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz57bWVtYmVyLml0ZW0ucG9zaXRpb259PC9zdHJvbmc+IFxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSBpdGVtIHhzPXsxMn0gY29tcG9uZW50ID0ge1R5cG9ncmFwaHl9IHZhcmlhbnQ9J3N1YnRpdGxlMSc+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5GYXZvcml0ZSBXaW5lOjwvc3Ryb25nPiB7bWVtYmVyLml0ZW0uZmF2b3JpdGVXaW5lfVxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgXG4gICAgPC9HcmlkPlxuXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUNhcm91c2VsO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=