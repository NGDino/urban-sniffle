self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MyCarousel/index.js":
/*!****************************************!*\
  !*** ./components/MyCarousel/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-material-ui-carousel */ "./node_modules/react-material-ui-carousel/dist/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/image-url */ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client */ "./client.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\MyCarousel\\index.js",
    _s = $RefreshSig$();







var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        width: '100%'
      }
    }
  };
});

function urlFor(source) {
  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default()(_client__WEBPACK_IMPORTED_MODULE_3__.default).image(source);
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
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2__.default, {
      autoPlay: false,
      animation: "slide",
      index: 0,
      children: items.map(function (item, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
          item: item
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 41
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, this)
  );
}

_s(MyCarousel, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = MyCarousel;

function Item(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
    container: true,
    component: _material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Paper,
    className: classes.root,
    alignContent: "center",
    justify: "center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
      item: true,
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Avatar, {
        alt: "picture of ".concat(member.name),
        src: urlFor(member.staffImage)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
      variant: "h5",
      children: member.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 10
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, this);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcm91c2VsL2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwibWFyZ2luIiwic3BhY2luZyIsIndpZHRoIiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwiaW1hZ2UiLCJNeUNhcm91c2VsIiwicHJvcHMiLCJtZW1iZXJzIiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpIiwiSXRlbSIsIlBhcGVyIiwibWVtYmVyIiwibmFtZSIsInN0YWZmSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3JDQyxRQUFJLEVBQUU7QUFDRkMsYUFBTyxFQUFFLE1BRFA7QUFFRixlQUFTO0FBQ0xDLGNBQU0sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxDQURIO0FBRUxDLGFBQUssRUFBRTtBQUZGO0FBRlA7QUFEK0IsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBVUEsU0FBU0MsTUFBVCxDQUFpQkMsTUFBakIsRUFBeUI7QUFDckIsU0FBT0Msd0RBQWUsQ0FBQ0MsNENBQUQsQ0FBZixDQUF3QkMsS0FBeEIsQ0FBOEJILE1BQTlCLENBQVA7QUFDSDs7QUFFRCxTQUFTSSxVQUFULENBQW9CQyxLQUFwQixFQUEwQjtBQUFBOztBQUFBOztBQUN0QixNQUFNQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0EsS0FBdEI7QUFDQUUsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFFQSxNQUFNRyxPQUFPLEdBQUdsQixTQUFTLEVBQXpCO0FBRUE7QUFBQTtBQUNJO0FBQ0Esa0VBQUMsK0RBQUQ7QUFBVSxjQUFRLEVBQUUsS0FBcEI7QUFBMkIsZUFBUyxFQUFFLE9BQXRDO0FBQThDLFdBQUssRUFBSSxDQUF2RDtBQUFBLGdCQUVRbUIsS0FBSyxDQUFDQyxHQUFOLENBQVcsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsNEJBQWEsOERBQUMsSUFBRDtBQUFjLGNBQUksRUFBRUQ7QUFBcEIsV0FBV0MsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFiO0FBQUEsT0FBWDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQVFIOztHQWRRVCxVO1VBSVdiLFM7OztLQUpYYSxVOztBQWdCVCxTQUFTVSxJQUFULENBQWNULEtBQWQsRUFDQTtBQUNJLHNCQUNJLDhEQUFDLG1EQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLGFBQVMsRUFBSVUsb0RBQTdCO0FBQW9DLGFBQVMsRUFBRU4sT0FBTyxDQUFDZixJQUF2RDtBQUE2RCxnQkFBWSxFQUFDLFFBQTFFO0FBQW1GLFdBQU8sRUFBRyxRQUE3RjtBQUFBLDRCQUNBLDhEQUFDLG1EQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFJLEVBQWpCO0FBQUEsNkJBQ0ksOERBQUMscURBQUQ7QUFBUSxXQUFHLHVCQUFrQnNCLE1BQU0sQ0FBQ0MsSUFBekIsQ0FBWDtBQUE0QyxXQUFHLEVBQUlsQixNQUFNLENBQUNpQixNQUFNLENBQUNFLFVBQVI7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUtDLDhEQUFDLHlEQUFEO0FBQVksYUFBTyxFQUFDLElBQXBCO0FBQUEsZ0JBQTBCRixNQUFNLENBQUNDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVVIOztNQVpRSCxJO0FBY1QsK0RBQWVWLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjU2MTU4NGY3NjM5ZGZiZWE2OTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbWF0ZXJpYWwtdWktY2Fyb3VzZWwnXG5pbXBvcnQgeyBQYXBlciwgVHlwb2dyYXBoeSwgQnV0dG9uLCBHcmlkLCBDYXJkLCBBdmF0YXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAnJiA+IConOiB7XG4gICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICB9LFxuICAgIH1cbn0pKVxuXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xuICAgIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpXG59XG5cbmZ1bmN0aW9uIE15Q2Fyb3VzZWwocHJvcHMpe1xuICAgIGNvbnN0IG1lbWJlcnMgPSBwcm9wcy5wcm9wc1xuICAgIGNvbnNvbGUubG9nKG1lbWJlcnMpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICAgIHJldHVybiAoXG4gICAgICAgIC8vIDxkaXY+PC9kaXY+XG4gICAgICAgIDxDYXJvdXNlbCBhdXRvUGxheT17ZmFsc2V9IGFuaW1hdGlvbj0gJ3NsaWRlJyBpbmRleCA9IHswfT5cbiAge1xuICAgICAgICAgICAgICAgIGl0ZW1zLm1hcCggKGl0ZW0sIGkpID0+IDxJdGVtIGtleT17aX0gaXRlbT17aXRlbX0gLz4gKVxuICAgICAgICAgICAgfVxuICAgICAgICA8L0Nhcm91c2VsPlxuICAgIClcbn1cblxuZnVuY3Rpb24gSXRlbShwcm9wcylcbntcbiAgICByZXR1cm4gKFxuICAgICAgICA8R3JpZCBjb250YWluZXIgY29tcG9uZW50ID0ge1BhcGVyfSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gYWxpZ25Db250ZW50PSdjZW50ZXInIGp1c3RpZnkgPSAnY2VudGVyJz5cbiAgICAgICAgPEdyaWQgaXRlbSB4cyA9IHsxMn0+XG4gICAgICAgICAgICA8QXZhdGFyIGFsdCA9IHtgcGljdHVyZSBvZiAke21lbWJlci5uYW1lfWB9IHNyYyA9IHt1cmxGb3IobWVtYmVyLnN0YWZmSW1hZ2UpfS8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgXG4gICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNSc+e21lbWJlci5uYW1lfTwvVHlwb2dyYXBoeT5cbiAgICA8L0dyaWQ+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15Q2Fyb3VzZWw7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==