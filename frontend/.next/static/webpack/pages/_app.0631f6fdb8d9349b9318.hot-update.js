self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Nav/index.js":
/*!*********************************!*\
  !*** ./components/Nav/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Restore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Restore */ "./node_modules/@material-ui/icons/Restore.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ "./node_modules/@material-ui/icons/LocationOn.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\Nav\\index.js",
    _this = undefined,
    _s = $RefreshSig$();








var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)({
  root: {
    width: '100%'
  }
});

var Nav = function Nav() {
  _s();

  var classes = useStyles();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      value = _useState[0],
      setValue = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.AppBar, {
      position: "fixed",
      color: "primary",
      style: {
        top: "auto",
        bottom: 0
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.BottomNavigation, {
        value: value,
        onChange: function onChange(event, newValue) {
          console.log(value);
          setValue(newValue);
          console.log(value);
        },
        showLabels: true,
        className: classes.root,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.BottomNavigationAction, {
          label: "Recents",
          icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Restore__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 67
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.BottomNavigationAction, {
          label: "Favorites",
          icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 69
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.BottomNavigationAction, {
          label: "Nearby",
          icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 66
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, _this);
};

_s(Nav, "BDkWVlEh8+DaKPHysXJ2gpEmtFI=", false, function () {
  return [useStyles];
});

_c = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c;

$RefreshReg$(_c, "Nav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJ3aWR0aCIsIk5hdiIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ0b3AiLCJib3R0b20iLCJldmVudCIsIm5ld1ZhbHVlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUN6QkMsTUFBSSxFQUFFO0FBQ0ZDLFNBQUssRUFBRTtBQURMO0FBRG1CLENBQUQsQ0FBNUI7O0FBTUEsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUNkLE1BQU1DLE9BQU8sR0FBR0wsU0FBUyxFQUF6Qjs7QUFEYyxrQkFFWU0sK0NBQVEsQ0FBQyxDQUFELENBRnBCO0FBQUEsTUFFUEMsS0FGTztBQUFBLE1BRUFDLFFBRkE7O0FBSWQsc0JBQ0k7QUFBQSwyQkFDSSw4REFBQyxxREFBRDtBQUFRLGNBQVEsRUFBQyxPQUFqQjtBQUF5QixXQUFLLEVBQUMsU0FBL0I7QUFBeUMsV0FBSyxFQUFFO0FBQUNDLFdBQUcsRUFBRSxNQUFOO0FBQWNDLGNBQU0sRUFBRTtBQUF0QixPQUFoRDtBQUFBLDZCQUNJLDhEQUFDLCtEQUFEO0FBQ0EsYUFBSyxFQUFFSCxLQURQO0FBRUEsZ0JBQVEsRUFBRSxrQkFBQ0ksS0FBRCxFQUFRQyxRQUFSLEVBQXFCO0FBQzNCQyxpQkFBTyxDQUFDQyxHQUFSLENBQVlQLEtBQVo7QUFDQUMsa0JBQVEsQ0FBQ0ksUUFBRCxDQUFSO0FBQ0FDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWVAsS0FBWjtBQUNILFNBTkQ7QUFPQSxrQkFBVSxNQVBWO0FBUUEsaUJBQVMsRUFBRUYsT0FBTyxDQUFDSCxJQVJuQjtBQUFBLGdDQVdJLDhEQUFDLHFFQUFEO0FBQXdCLGVBQUssRUFBQyxTQUE5QjtBQUF3QyxjQUFJLGVBQUUsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhKLGVBWUksOERBQUMscUVBQUQ7QUFBd0IsZUFBSyxFQUFDLFdBQTlCO0FBQTBDLGNBQUksZUFBRSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkosZUFhSSw4REFBQyxxRUFBRDtBQUF3QixlQUFLLEVBQUMsUUFBOUI7QUFBdUMsY0FBSSxlQUFFLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBdUJILENBM0JEOztHQUFNRSxHO1VBQ2NKLFM7OztLQURkSSxHO0FBNkJOLCtEQUFlQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDYzMWY2ZmRiOGQ5MzQ5YjkzMTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7Qm90dG9tTmF2aWdhdGlvbiwgQm90dG9tTmF2aWdhdGlvbkFjdGlvbiwgQXBwQmFyfSAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUmVzdG9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Jlc3RvcmUnO1xyXG5pbXBvcnQgRmF2b3JpdGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZSc7XHJcbmltcG9ydCBMb2NhdGlvbk9uSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYXRpb25Pbic7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5jb25zdCBOYXYgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImZpeGVkXCIgY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3t0b3A6IFwiYXV0b1wiLCBib3R0b206IDB9fT5cclxuICAgICAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzaG93TGFiZWxzXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cIlJlY2VudHNcIiBpY29uPXs8UmVzdG9yZUljb24gLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb24gbGFiZWw9XCJGYXZvcml0ZXNcIiBpY29uPXs8RmF2b3JpdGVJY29uIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGxhYmVsPVwiTmVhcmJ5XCIgaWNvbj17PExvY2F0aW9uT25JY29uIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3R0b21OYXZpZ2F0aW9uPlxyXG4gICAgICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7Il0sInNvdXJjZVJvb3QiOiIifQ==