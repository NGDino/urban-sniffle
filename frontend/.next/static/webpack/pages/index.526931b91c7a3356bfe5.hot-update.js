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

  console.log('inside Item');
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
        alt: "picture of ".concat(member.name),
        src: urlFor(member.staffImage)
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
      children: member.name
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcm91c2VsL2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwibWFyZ2luIiwic3BhY2luZyIsIndpZHRoIiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwiaW1hZ2UiLCJNeUNhcm91c2VsIiwicHJvcHMiLCJtZW1iZXJzIiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJtYXAiLCJtZW1iZXIiLCJpIiwiSXRlbSIsIlBhcGVyIiwibmFtZSIsInN0YWZmSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsUUFBSSxFQUFFO0FBQ0ZDLGFBQU8sRUFBRSxNQURQO0FBRUYsZUFBUztBQUNMQyxjQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsQ0FESDtBQUVMQyxhQUFLLEVBQUU7QUFGRjtBQUZQO0FBRCtCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQVVBLFNBQVNDLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3JCLFNBQU9DLHdEQUFlLENBQUNDLDRDQUFELENBQWYsQ0FBd0JDLEtBQXhCLENBQThCSCxNQUE5QixDQUFQO0FBQ0g7O0FBRUQsU0FBU0ksVUFBVCxDQUFvQkMsS0FBcEIsRUFBMEI7QUFBQTs7QUFBQTs7QUFDdEIsTUFBTUMsT0FBTyxHQUFHRCxLQUFLLENBQUNBLEtBQXRCO0FBQ0FFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBRUEsTUFBTUcsT0FBTyxHQUFHbEIsU0FBUyxFQUF6QjtBQUVBO0FBQUE7QUFDSTtBQUNBLGtFQUFDLCtEQUFEO0FBQVUsY0FBUSxFQUFFLEtBQXBCO0FBQTJCLGVBQVMsRUFBRSxPQUF0QztBQUE4QyxXQUFLLEVBQUksQ0FBdkQ7QUFBQSxnQkFFUWUsT0FBTyxDQUFDSSxHQUFSLENBQWEsVUFBQ0MsTUFBRCxFQUFTQyxDQUFUO0FBQUEsNEJBQWUsOERBQUMsSUFBRDtBQUFjLGNBQUksRUFBRUQ7QUFBcEIsV0FBV0MsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFmO0FBQUEsT0FBYjtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQVFIOztHQWRRUixVO1VBSVdiLFM7OztLQUpYYSxVOztBQWdCVCxTQUFTUyxJQUFULENBQWNGLE1BQWQsRUFBcUI7QUFBQTs7QUFDakJKLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQSxNQUFNQyxPQUFPLEdBQUdsQixTQUFTLEVBQXpCO0FBRUEsc0JBQ0ksOERBQUMsbURBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsYUFBUyxFQUFJdUIsb0RBQTdCO0FBQW9DLGFBQVMsRUFBRUwsT0FBTyxDQUFDZixJQUF2RDtBQUE2RCxnQkFBWSxFQUFDLFFBQTFFO0FBQW1GLFdBQU8sRUFBRyxRQUE3RjtBQUFBLDRCQUNBLDhEQUFDLG1EQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFJLEVBQWpCO0FBQUEsNkJBQ0ksOERBQUMscURBQUQ7QUFBUSxXQUFHLHVCQUFrQmlCLE1BQU0sQ0FBQ0ksSUFBekIsQ0FBWDtBQUE0QyxXQUFHLEVBQUloQixNQUFNLENBQUNZLE1BQU0sQ0FBQ0ssVUFBUjtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBS0MsOERBQUMseURBQUQ7QUFBWSxhQUFPLEVBQUMsSUFBcEI7QUFBQSxnQkFBMEJMLE1BQU0sQ0FBQ0k7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUg7O0lBZFFGLEk7VUFFV3RCLFM7OztNQUZYc0IsSTtBQWdCVCwrREFBZVQsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MjY5MzFiOTFjN2EzMzU2YmZlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tYXRlcmlhbC11aS1jYXJvdXNlbCdcbmltcG9ydCB7IFBhcGVyLCBUeXBvZ3JhcGh5LCBCdXR0b24sIEdyaWQsIENhcmQsIEF2YXRhcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCc7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCc7XG5cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICcmID4gKic6IHtcbiAgICAgICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIH0sXG4gICAgfVxufSkpXG5cbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XG4gICAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcbn1cblxuZnVuY3Rpb24gTXlDYXJvdXNlbChwcm9wcyl7XG4gICAgY29uc3QgbWVtYmVycyA9IHByb3BzLnByb3BzXG4gICAgY29uc29sZS5sb2cobWVtYmVycylcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgLy8gPGRpdj48L2Rpdj5cbiAgICAgICAgPENhcm91c2VsIGF1dG9QbGF5PXtmYWxzZX0gYW5pbWF0aW9uPSAnc2xpZGUnIGluZGV4ID0gezB9PlxuICB7XG4gICAgICAgICAgICAgICAgbWVtYmVycy5tYXAoIChtZW1iZXIsIGkpID0+IDxJdGVtIGtleT17aX0gaXRlbT17bWVtYmVyfSAvPiApXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBJdGVtKG1lbWJlcil7XG4gICAgY29uc29sZS5sb2coJ2luc2lkZSBJdGVtJylcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBjb21wb25lbnQgPSB7UGFwZXJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBhbGlnbkNvbnRlbnQ9J2NlbnRlcicganVzdGlmeSA9ICdjZW50ZXInPlxuICAgICAgICA8R3JpZCBpdGVtIHhzID0gezEyfT5cbiAgICAgICAgICAgIDxBdmF0YXIgYWx0ID0ge2BwaWN0dXJlIG9mICR7bWVtYmVyLm5hbWV9YH0gc3JjID0ge3VybEZvcihtZW1iZXIuc3RhZmZJbWFnZSl9Lz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICBcbiAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1Jz57bWVtYmVyLm5hbWV9PC9UeXBvZ3JhcGh5PlxuICAgIDwvR3JpZD5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlDYXJvdXNlbDtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9