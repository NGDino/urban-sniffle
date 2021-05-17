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
      height: '100px'
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
          lineNumber: 35,
          columnNumber: 45
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
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
        lineNumber: 49,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {
      item: true,
      xs: 12,
      component: _material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography,
      variant: "h5",
      children: member.item.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, (_jsxDEV2 = {
      item: true
    }, (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "item", true), (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "xs", 12), (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "component", _material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography), (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "variant", "subtitle1"), (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "children", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("strong", {
      children: member.item.position
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }, this)), _jsxDEV2), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, (_jsxDEV3 = {
      item: true
    }, (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV3, "item", true), (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV3, "xs", 12), (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV3, "component", _material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography), (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV3, "variant", "subtitle1"), (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV3, "children", [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("strong", {
      children: "Favorite Wine:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }, this), " ", member.item.favoriteWine]), _jsxDEV3), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcm91c2VsL2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwibWFyZ2luIiwic3BhY2luZyIsImF2YXRhciIsImhlaWdodCIsInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiTXlDYXJvdXNlbCIsInByb3BzIiwibWVtYmVycyIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwibWFwIiwibWVtYmVyIiwiaSIsIkl0ZW0iLCJpdGVtIiwic3RhZmZJbWFnZSIsIlBhcGVyIiwibmFtZSIsIlR5cG9ncmFwaHkiLCJwb3NpdGlvbiIsImZhdm9yaXRlV2luZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDckNDLFFBQUksRUFBRTtBQUNGQyxhQUFPLEVBQUUsTUFEUDtBQUVGLGVBQVM7QUFDTEMsY0FBTSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkO0FBREg7QUFGUCxLQUQrQjtBQU9yQ0MsVUFBTSxFQUFFO0FBQ0pDLFlBQU0sRUFBRTtBQURKO0FBUDZCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQVlBLFNBQVNDLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3JCLFNBQU9DLHdEQUFlLENBQUNDLDRDQUFELENBQWYsQ0FBd0JDLEtBQXhCLENBQThCSCxNQUE5QixDQUFQO0FBQ0g7O0FBRUQsU0FBU0ksVUFBVCxDQUFvQkMsS0FBcEIsRUFBMEI7QUFBQTs7QUFBQTs7QUFDdEIsTUFBTUMsT0FBTyxHQUFHRCxLQUFLLENBQUNBLEtBQXRCO0FBQ0FFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBRUEsTUFBTUcsT0FBTyxHQUFHbkIsU0FBUyxFQUF6QjtBQUVBO0FBQUE7QUFDSTtBQUNBLGtFQUFDLCtEQUFEO0FBQVUsY0FBUSxFQUFFLEtBQXBCO0FBQTJCLGVBQVMsRUFBRSxPQUF0QztBQUE4QyxXQUFLLEVBQUksQ0FBdkQ7QUFBQSxnQkFFUWdCLE9BQU8sQ0FBQ0ksR0FBUixDQUFhLFVBQUNDLE1BQUQsRUFBU0MsQ0FBVDtBQUFBLDRCQUFlLDhEQUFDLElBQUQ7QUFBYyxjQUFJLEVBQUVEO0FBQXBCLFdBQVdDLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZjtBQUFBLE9BQWI7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFRSDs7R0FkUVIsVTtVQUlXZCxTOzs7S0FKWGMsVTs7QUFnQlQsU0FBU1MsSUFBVCxDQUFjRixNQUFkLEVBQXFCO0FBQUE7O0FBQUE7O0FBQ2pCSixTQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCRyxNQUFNLENBQUNHLElBQWxDO0FBQ0EsTUFBTUwsT0FBTyxHQUFHbkIsU0FBUyxFQUF6QjtBQUNBLE1BQU9hLEtBQUssR0FBR0osTUFBTSxDQUFDWSxNQUFNLENBQUNHLElBQVAsQ0FBWUMsVUFBYixDQUFyQjtBQUVBLHNCQUNJLDhEQUFDLG1EQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLGFBQVMsRUFBSUMsb0RBQTdCO0FBQW9DLGFBQVMsRUFBRVAsT0FBTyxDQUFDaEIsSUFBdkQ7QUFBNkQsY0FBVSxFQUFDLFFBQXhFO0FBQWlGLFdBQU8sRUFBRyxRQUEzRjtBQUFBLDRCQUNJLDhEQUFDLG1EQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFJLEVBQWpCO0FBQUEsNkJBQ0ksOERBQUMscURBQUQ7QUFBUSxpQkFBUyxFQUFFZ0IsT0FBTyxDQUFDWixNQUEzQjtBQUFtQyxXQUFHLHVCQUFrQmMsTUFBTSxDQUFDRyxJQUFQLENBQVlHLElBQTlCLENBQXRDO0FBQTRFLFdBQUcsRUFBSWQ7QUFBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJLDhEQUFDLG1EQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFFLEVBQWY7QUFBbUIsZUFBUyxFQUFHZSx5REFBL0I7QUFBMkMsYUFBTyxFQUFDLElBQW5EO0FBQUEsZ0JBQ0tQLE1BQU0sQ0FBQ0csSUFBUCxDQUFZRztBQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFPSSw4REFBQyxtREFBRDtBQUFNLFVBQUk7QUFBViw4U0FBb0IsRUFBcEIseUpBQXFDQyx5REFBckMsdUpBQXlELFdBQXpELHFLQUNJO0FBQUEsZ0JBQVNQLE1BQU0sQ0FBQ0csSUFBUCxDQUFZSztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKLGVBVUksOERBQUMsbURBQUQ7QUFBTSxVQUFJO0FBQVYsOFNBQW9CLEVBQXBCLHlKQUFxQ0QseURBQXJDLHVKQUF5RCxXQUF6RCxzS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLE9BQ3FDUCxNQUFNLENBQUNHLElBQVAsQ0FBWU0sWUFEakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0JIOztJQXZCUVAsSTtVQUVXdkIsUzs7O01BRlh1QixJO0FBeUJULCtEQUFlVCxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdiNDM2MmFlMDMxMGUyYTcyZWUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW1hdGVyaWFsLXVpLWNhcm91c2VsJ1xuaW1wb3J0IHsgUGFwZXIsIFR5cG9ncmFwaHksIEJ1dHRvbiwgR3JpZCwgQ2FyZCwgQXZhdGFyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQge21ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50JztcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgJyYgPiAqJzoge1xuICAgICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgYXZhdGFyOiB7XG4gICAgICAgIGhlaWdodDogJzEwMHB4JyxcbiAgICAgIH0sXG59KSlcblxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UpIHtcbiAgICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKVxufVxuXG5mdW5jdGlvbiBNeUNhcm91c2VsKHByb3BzKXtcbiAgICBjb25zdCBtZW1iZXJzID0gcHJvcHMucHJvcHNcbiAgICBjb25zb2xlLmxvZyhtZW1iZXJzKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICAvLyA8ZGl2PjwvZGl2PlxuICAgICAgICA8Q2Fyb3VzZWwgYXV0b1BsYXk9e2ZhbHNlfSBhbmltYXRpb249ICdzbGlkZScgaW5kZXggPSB7MH0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWVtYmVycy5tYXAoIChtZW1iZXIsIGkpID0+IDxJdGVtIGtleT17aX0gaXRlbT17bWVtYmVyfSAvPiApXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBJdGVtKG1lbWJlcil7XG4gICAgY29uc29sZS5sb2coJ2luc2lkZSBJdGVtJywgbWVtYmVyLml0ZW0pXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gICAgY29uc3QgIGltYWdlID0gdXJsRm9yKG1lbWJlci5pdGVtLnN0YWZmSW1hZ2UpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8R3JpZCBjb250YWluZXIgY29tcG9uZW50ID0ge1BhcGVyfSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gYWxpZ25JdGVtcz0nY2VudGVyJyBqdXN0aWZ5ID0gJ2NlbnRlcic+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzID0gezEyfSA+XG4gICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfSBhbHQgPSB7YHBpY3R1cmUgb2YgJHttZW1iZXIuaXRlbS5uYW1lfWB9IHNyYyA9IHtpbWFnZX0vPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNvbXBvbmVudCA9e1R5cG9ncmFwaHl9IHZhcmlhbnQ9J2g1Jz5cbiAgICAgICAgICAgICAgICB7bWVtYmVyLml0ZW0ubmFtZX1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gaXRlbSB4cz17MTJ9IGNvbXBvbmVudCA9IHtUeXBvZ3JhcGh5fSB2YXJpYW50PSdzdWJ0aXRsZTEnPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+e21lbWJlci5pdGVtLnBvc2l0aW9ufTwvc3Ryb25nPiBcbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gaXRlbSB4cz17MTJ9IGNvbXBvbmVudCA9IHtUeXBvZ3JhcGh5fSB2YXJpYW50PSdzdWJ0aXRsZTEnPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+RmF2b3JpdGUgV2luZTo8L3N0cm9uZz4ge21lbWJlci5pdGVtLmZhdm9yaXRlV2luZX1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgIFxuICAgIDwvR3JpZD5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlDYXJvdXNlbDtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9