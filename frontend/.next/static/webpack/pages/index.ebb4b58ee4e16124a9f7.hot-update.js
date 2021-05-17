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
      width: theme.spacing(7),
      height: theme.spacing(7)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcm91c2VsL2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwibWFyZ2luIiwic3BhY2luZyIsImF2YXRhciIsIndpZHRoIiwiaGVpZ2h0IiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwiaW1hZ2UiLCJNeUNhcm91c2VsIiwicHJvcHMiLCJtZW1iZXJzIiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJtYXAiLCJtZW1iZXIiLCJpIiwiSXRlbSIsIml0ZW0iLCJzdGFmZkltYWdlIiwiUGFwZXIiLCJuYW1lIiwiVHlwb2dyYXBoeSIsInBvc2l0aW9uIiwiZmF2b3JpdGVXaW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsUUFBSSxFQUFFO0FBQ0ZDLGFBQU8sRUFBRSxNQURQO0FBRUYsZUFBUztBQUNMQyxjQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQ7QUFESDtBQUZQLEtBRCtCO0FBT3JDQyxVQUFNLEVBQUU7QUFDSkMsV0FBSyxFQUFFTixLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLENBREg7QUFFSkcsWUFBTSxFQUFFUCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkO0FBRko7QUFQNkIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBYUEsU0FBU0ksTUFBVCxDQUFpQkMsTUFBakIsRUFBeUI7QUFDckIsU0FBT0Msd0RBQWUsQ0FBQ0MsNENBQUQsQ0FBZixDQUF3QkMsS0FBeEIsQ0FBOEJILE1BQTlCLENBQVA7QUFDSDs7QUFFRCxTQUFTSSxVQUFULENBQW9CQyxLQUFwQixFQUEwQjtBQUFBOztBQUFBOztBQUN0QixNQUFNQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0EsS0FBdEI7QUFDQUUsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFFQSxNQUFNRyxPQUFPLEdBQUdwQixTQUFTLEVBQXpCO0FBRUE7QUFBQTtBQUNJO0FBQ0Esa0VBQUMsK0RBQUQ7QUFBVSxjQUFRLEVBQUUsS0FBcEI7QUFBMkIsZUFBUyxFQUFFLE9BQXRDO0FBQThDLFdBQUssRUFBSSxDQUF2RDtBQUFBLGdCQUVRaUIsT0FBTyxDQUFDSSxHQUFSLENBQWEsVUFBQ0MsTUFBRCxFQUFTQyxDQUFUO0FBQUEsNEJBQWUsOERBQUMsSUFBRDtBQUFjLGNBQUksRUFBRUQ7QUFBcEIsV0FBV0MsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFmO0FBQUEsT0FBYjtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQVFIOztHQWRRUixVO1VBSVdmLFM7OztLQUpYZSxVOztBQWdCVCxTQUFTUyxJQUFULENBQWNGLE1BQWQsRUFBcUI7QUFBQTs7QUFBQTs7QUFDakJKLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJHLE1BQU0sQ0FBQ0csSUFBbEM7QUFDQSxNQUFNTCxPQUFPLEdBQUdwQixTQUFTLEVBQXpCO0FBQ0EsTUFBT2MsS0FBSyxHQUFHSixNQUFNLENBQUNZLE1BQU0sQ0FBQ0csSUFBUCxDQUFZQyxVQUFiLENBQXJCO0FBRUEsc0JBQ0ksOERBQUMsbURBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsYUFBUyxFQUFJQyxvREFBN0I7QUFBb0MsYUFBUyxFQUFFUCxPQUFPLENBQUNqQixJQUF2RDtBQUE2RCxjQUFVLEVBQUMsUUFBeEU7QUFBaUYsV0FBTyxFQUFHLFFBQTNGO0FBQUEsNEJBQ0ksOERBQUMsbURBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUksRUFBakI7QUFBQSw2QkFDSSw4REFBQyxxREFBRDtBQUFRLGlCQUFTLEVBQUVpQixPQUFPLENBQUNiLE1BQTNCO0FBQW1DLFdBQUcsdUJBQWtCZSxNQUFNLENBQUNHLElBQVAsQ0FBWUcsSUFBOUIsQ0FBdEM7QUFBNEUsV0FBRyxFQUFJZDtBQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUksOERBQUMsbURBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsRUFBZjtBQUFtQixlQUFTLEVBQUdlLHlEQUEvQjtBQUEyQyxhQUFPLEVBQUMsSUFBbkQ7QUFBQSxnQkFDS1AsTUFBTSxDQUFDRyxJQUFQLENBQVlHO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQU9JLDhEQUFDLG1EQUFEO0FBQU0sVUFBSTtBQUFWLDhTQUFvQixFQUFwQix5SkFBcUNDLHlEQUFyQyx1SkFBeUQsV0FBekQscUtBQ0k7QUFBQSxnQkFBU1AsTUFBTSxDQUFDRyxJQUFQLENBQVlLO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosZUFVSSw4REFBQyxtREFBRDtBQUFNLFVBQUk7QUFBViw4U0FBb0IsRUFBcEIseUpBQXFDRCx5REFBckMsdUpBQXlELFdBQXpELHNLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosT0FDcUNQLE1BQU0sQ0FBQ0csSUFBUCxDQUFZTSxZQURqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrQkg7O0lBdkJRUCxJO1VBRVd4QixTOzs7TUFGWHdCLEk7QUF5QlQsK0RBQWVULFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWJiNGI1OGVlNGUxNjEyNGE5ZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbWF0ZXJpYWwtdWktY2Fyb3VzZWwnXG5pbXBvcnQgeyBQYXBlciwgVHlwb2dyYXBoeSwgQnV0dG9uLCBHcmlkLCBDYXJkLCBBdmF0YXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAnJiA+IConOiB7XG4gICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBhdmF0YXI6IHtcbiAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXG4gICAgICAgIGhlaWdodDogdGhlbWUuc3BhY2luZyg3KSxcbiAgICAgIH0sXG59KSlcblxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UpIHtcbiAgICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKVxufVxuXG5mdW5jdGlvbiBNeUNhcm91c2VsKHByb3BzKXtcbiAgICBjb25zdCBtZW1iZXJzID0gcHJvcHMucHJvcHNcbiAgICBjb25zb2xlLmxvZyhtZW1iZXJzKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICAvLyA8ZGl2PjwvZGl2PlxuICAgICAgICA8Q2Fyb3VzZWwgYXV0b1BsYXk9e2ZhbHNlfSBhbmltYXRpb249ICdzbGlkZScgaW5kZXggPSB7MH0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWVtYmVycy5tYXAoIChtZW1iZXIsIGkpID0+IDxJdGVtIGtleT17aX0gaXRlbT17bWVtYmVyfSAvPiApXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBJdGVtKG1lbWJlcil7XG4gICAgY29uc29sZS5sb2coJ2luc2lkZSBJdGVtJywgbWVtYmVyLml0ZW0pXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gICAgY29uc3QgIGltYWdlID0gdXJsRm9yKG1lbWJlci5pdGVtLnN0YWZmSW1hZ2UpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8R3JpZCBjb250YWluZXIgY29tcG9uZW50ID0ge1BhcGVyfSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gYWxpZ25JdGVtcz0nY2VudGVyJyBqdXN0aWZ5ID0gJ2NlbnRlcic+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzID0gezEyfSA+XG4gICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfSBhbHQgPSB7YHBpY3R1cmUgb2YgJHttZW1iZXIuaXRlbS5uYW1lfWB9IHNyYyA9IHtpbWFnZX0vPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNvbXBvbmVudCA9e1R5cG9ncmFwaHl9IHZhcmlhbnQ9J2g1Jz5cbiAgICAgICAgICAgICAgICB7bWVtYmVyLml0ZW0ubmFtZX1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gaXRlbSB4cz17MTJ9IGNvbXBvbmVudCA9IHtUeXBvZ3JhcGh5fSB2YXJpYW50PSdzdWJ0aXRsZTEnPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+e21lbWJlci5pdGVtLnBvc2l0aW9ufTwvc3Ryb25nPiBcbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gaXRlbSB4cz17MTJ9IGNvbXBvbmVudCA9IHtUeXBvZ3JhcGh5fSB2YXJpYW50PSdzdWJ0aXRsZTEnPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+RmF2b3JpdGUgV2luZTo8L3N0cm9uZz4ge21lbWJlci5pdGVtLmZhdm9yaXRlV2luZX1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgIFxuICAgIDwvR3JpZD5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlDYXJvdXNlbDtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9