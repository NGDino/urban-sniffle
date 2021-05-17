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
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();







var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        width: '300'
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
      children: members.map(function (member, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
          item: member
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 45
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

function Item(member) {
  _s2();

  console.log('inside Item', member.item);
  var classes = useStyles();
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
        alt: "picture of ".concat(member.item.name),
        src: urlFor(member.item.staffImage)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
      variant: "h5",
      children: member.item.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 10
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcm91c2VsL2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwibWFyZ2luIiwic3BhY2luZyIsIndpZHRoIiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwiaW1hZ2UiLCJNeUNhcm91c2VsIiwicHJvcHMiLCJtZW1iZXJzIiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJtYXAiLCJtZW1iZXIiLCJpIiwiSXRlbSIsIml0ZW0iLCJQYXBlciIsIm5hbWUiLCJzdGFmZkltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDckNDLFFBQUksRUFBRTtBQUNGQyxhQUFPLEVBQUUsTUFEUDtBQUVGLGVBQVM7QUFDTEMsY0FBTSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLENBREg7QUFFTEMsYUFBSyxFQUFFO0FBRkY7QUFGUDtBQUQrQixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUFVQSxTQUFTQyxNQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUNyQixTQUFPQyx3REFBZSxDQUFDQyw0Q0FBRCxDQUFmLENBQXdCQyxLQUF4QixDQUE4QkgsTUFBOUIsQ0FBUDtBQUNIOztBQUVELFNBQVNJLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTBCO0FBQUE7O0FBQUE7O0FBQ3RCLE1BQU1DLE9BQU8sR0FBR0QsS0FBSyxDQUFDQSxLQUF0QjtBQUNBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUVBLE1BQU1HLE9BQU8sR0FBR2xCLFNBQVMsRUFBekI7QUFFQTtBQUFBO0FBQ0k7QUFDQSxrRUFBQywrREFBRDtBQUFVLGNBQVEsRUFBRSxLQUFwQjtBQUEyQixlQUFTLEVBQUUsT0FBdEM7QUFBOEMsV0FBSyxFQUFJLENBQXZEO0FBQUEsZ0JBRVFlLE9BQU8sQ0FBQ0ksR0FBUixDQUFhLFVBQUNDLE1BQUQsRUFBU0MsQ0FBVDtBQUFBLDRCQUFlLDhEQUFDLElBQUQ7QUFBYyxjQUFJLEVBQUVEO0FBQXBCLFdBQVdDLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZjtBQUFBLE9BQWI7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFRSDs7R0FkUVIsVTtVQUlXYixTOzs7S0FKWGEsVTs7QUFnQlQsU0FBU1MsSUFBVCxDQUFjRixNQUFkLEVBQXFCO0FBQUE7O0FBQ2pCSixTQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCRyxNQUFNLENBQUNHLElBQWxDO0FBQ0EsTUFBTUwsT0FBTyxHQUFHbEIsU0FBUyxFQUF6QjtBQUVBLHNCQUNJLDhEQUFDLG1EQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLGFBQVMsRUFBSXdCLG9EQUE3QjtBQUFvQyxhQUFTLEVBQUVOLE9BQU8sQ0FBQ2YsSUFBdkQ7QUFBNkQsZ0JBQVksRUFBQyxRQUExRTtBQUFtRixXQUFPLEVBQUcsUUFBN0Y7QUFBQSw0QkFDQSw4REFBQyxtREFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBSSxFQUFqQjtBQUFBLDZCQUNJLDhEQUFDLHFEQUFEO0FBQVEsV0FBRyx1QkFBa0JpQixNQUFNLENBQUNHLElBQVAsQ0FBWUUsSUFBOUIsQ0FBWDtBQUFpRCxXQUFHLEVBQUlqQixNQUFNLENBQUNZLE1BQU0sQ0FBQ0csSUFBUCxDQUFZRyxVQUFiO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFLQyw4REFBQyx5REFBRDtBQUFZLGFBQU8sRUFBQyxJQUFwQjtBQUFBLGdCQUEwQk4sTUFBTSxDQUFDRyxJQUFQLENBQVlFO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVVIOztJQWRRSCxJO1VBRVd0QixTOzs7TUFGWHNCLEk7QUFnQlQsK0RBQWVULFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWY1MzRiYjNiNTJhNDZhMWFjZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbWF0ZXJpYWwtdWktY2Fyb3VzZWwnXG5pbXBvcnQgeyBQYXBlciwgVHlwb2dyYXBoeSwgQnV0dG9uLCBHcmlkLCBDYXJkLCBBdmF0YXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAnJiA+IConOiB7XG4gICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICAgICAgICB3aWR0aDogJzMwMCcsXG4gICAgICAgIH0sXG4gICAgfVxufSkpXG5cbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XG4gICAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcbn1cblxuZnVuY3Rpb24gTXlDYXJvdXNlbChwcm9wcyl7XG4gICAgY29uc3QgbWVtYmVycyA9IHByb3BzLnByb3BzXG4gICAgY29uc29sZS5sb2cobWVtYmVycylcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgLy8gPGRpdj48L2Rpdj5cbiAgICAgICAgPENhcm91c2VsIGF1dG9QbGF5PXtmYWxzZX0gYW5pbWF0aW9uPSAnc2xpZGUnIGluZGV4ID0gezB9PlxuICB7XG4gICAgICAgICAgICAgICAgbWVtYmVycy5tYXAoIChtZW1iZXIsIGkpID0+IDxJdGVtIGtleT17aX0gaXRlbT17bWVtYmVyfSAvPiApXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBJdGVtKG1lbWJlcil7XG4gICAgY29uc29sZS5sb2coJ2luc2lkZSBJdGVtJywgbWVtYmVyLml0ZW0pXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8R3JpZCBjb250YWluZXIgY29tcG9uZW50ID0ge1BhcGVyfSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gYWxpZ25Db250ZW50PSdjZW50ZXInIGp1c3RpZnkgPSAnY2VudGVyJz5cbiAgICAgICAgPEdyaWQgaXRlbSB4cyA9IHsxMn0+XG4gICAgICAgICAgICA8QXZhdGFyIGFsdCA9IHtgcGljdHVyZSBvZiAke21lbWJlci5pdGVtLm5hbWV9YH0gc3JjID0ge3VybEZvcihtZW1iZXIuaXRlbS5zdGFmZkltYWdlKX0vPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIFxuICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnPnttZW1iZXIuaXRlbS5uYW1lfTwvVHlwb2dyYXBoeT5cbiAgICA8L0dyaWQ+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15Q2Fyb3VzZWw7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==