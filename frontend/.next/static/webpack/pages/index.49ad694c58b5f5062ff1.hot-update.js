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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\MyCarousel\\index.js";




function MyCarousel(props) {
  var _this = this;

  var items = [{
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!"
  }, {
    name: "Random Name #2",
    description: "Hello World!"
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: items.map(function (item, i) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
        item: item
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 41
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

_c = MyCarousel;

function Item(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    item: true,
    xs: 12,
    component: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Card,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: props.item.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [props.item.description, " cool beans"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: "CheckButton",
      children: "Check it out!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcm91c2VsL2luZGV4LmpzIl0sIm5hbWVzIjpbIk15Q2Fyb3VzZWwiLCJwcm9wcyIsIml0ZW1zIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibWFwIiwiaXRlbSIsImkiLCJJdGVtIiwiQ2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUNBO0FBQUE7O0FBQ0ksTUFBSUMsS0FBSyxHQUFHLENBQ1I7QUFDSUMsUUFBSSxFQUFFLGdCQURWO0FBRUlDLGVBQVcsRUFBRTtBQUZqQixHQURRLEVBS1I7QUFDSUQsUUFBSSxFQUFFLGdCQURWO0FBRUlDLGVBQVcsRUFBRTtBQUZqQixHQUxRLENBQVo7QUFXQSxzQkFDSSw4REFBQywrREFBRDtBQUFBLGNBRVFGLEtBQUssQ0FBQ0csR0FBTixDQUFXLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLDBCQUFhLDhEQUFDLElBQUQ7QUFBYyxZQUFJLEVBQUVEO0FBQXBCLFNBQVdDLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFiO0FBQUEsS0FBWDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU9IOztLQXBCUVAsVTs7QUFzQlQsU0FBU1EsSUFBVCxDQUFjUCxLQUFkLEVBQ0E7QUFDSSxzQkFDSSw4REFBQyxtREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLGFBQVMsRUFBR1EsbURBQS9CO0FBQUEsNEJBQ2dCO0FBQUEsZ0JBQUtSLEtBQUssQ0FBQ0ssSUFBTixDQUFXSDtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRGhCLGVBRUk7QUFBQSxpQkFBSUYsS0FBSyxDQUFDSyxJQUFOLENBQVdGLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFJSSw4REFBQyxxREFBRDtBQUFRLGVBQVMsRUFBQyxhQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBYUg7O01BZlFJLEk7QUFpQlQsK0RBQWVSLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDlhZDY5NGM1OGI1ZjUwNjJmZjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbWF0ZXJpYWwtdWktY2Fyb3VzZWwnXG5pbXBvcnQgeyBQYXBlciwgQnV0dG9uLCBHcmlkLCBDYXJkfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcblxuZnVuY3Rpb24gTXlDYXJvdXNlbChwcm9wcylcbntcbiAgICB2YXIgaXRlbXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiUmFuZG9tIE5hbWUgIzFcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlByb2JhYmx5IHRoZSBtb3N0IHJhbmRvbSB0aGluZyB5b3UgaGF2ZSBldmVyIHNlZW4hXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJSYW5kb20gTmFtZSAjMlwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiSGVsbG8gV29ybGQhXCJcbiAgICAgICAgfVxuICAgIF1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJvdXNlbD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5tYXAoIChpdGVtLCBpKSA9PiA8SXRlbSBrZXk9e2l9IGl0ZW09e2l0ZW19IC8+IClcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEl0ZW0ocHJvcHMpXG57XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNvbXBvbmVudD0ge0NhcmR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntwcm9wcy5pdGVtLm5hbWV9PC9oMj5cbiAgICAgICAgICAgIDxwPntwcm9wcy5pdGVtLmRlc2NyaXB0aW9ufSBjb29sIGJlYW5zPC9wPlxuXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIkNoZWNrQnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgQ2hlY2sgaXQgb3V0IVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvR3JpZD5cblxuICAgIClcblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15Q2Fyb3VzZWw7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==