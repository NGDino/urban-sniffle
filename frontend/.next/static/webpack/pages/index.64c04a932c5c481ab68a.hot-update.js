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
        width: '250px'
      },
      large: {
        width: theme.spacing(7),
        height: theme.spacing(7)
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
          lineNumber: 37,
          columnNumber: 45
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
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
        lineNumber: 50,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
      variant: "h5",
      children: member.item.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 10
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcm91c2VsL2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwibWFyZ2luIiwic3BhY2luZyIsIndpZHRoIiwibGFyZ2UiLCJoZWlnaHQiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJpbWFnZSIsIk15Q2Fyb3VzZWwiLCJwcm9wcyIsIm1lbWJlcnMiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsIm1hcCIsIm1lbWJlciIsImkiLCJJdGVtIiwiaXRlbSIsIlBhcGVyIiwibmFtZSIsInN0YWZmSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsUUFBSSxFQUFFO0FBQ0ZDLGFBQU8sRUFBRSxNQURQO0FBRUYsZUFBUztBQUNMQyxjQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsQ0FESDtBQUVMQyxhQUFLLEVBQUU7QUFGRixPQUZQO0FBTUZDLFdBQUssRUFBRTtBQUNIRCxhQUFLLEVBQUVMLEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsQ0FESjtBQUVIRyxjQUFNLEVBQUVQLEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQ7QUFGTDtBQU5MO0FBRCtCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQWNBLFNBQVNJLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3JCLFNBQU9DLHdEQUFlLENBQUNDLDRDQUFELENBQWYsQ0FBd0JDLEtBQXhCLENBQThCSCxNQUE5QixDQUFQO0FBQ0g7O0FBRUQsU0FBU0ksVUFBVCxDQUFvQkMsS0FBcEIsRUFBMEI7QUFBQTs7QUFBQTs7QUFDdEIsTUFBTUMsT0FBTyxHQUFHRCxLQUFLLENBQUNBLEtBQXRCO0FBQ0FFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBRUEsTUFBTUcsT0FBTyxHQUFHcEIsU0FBUyxFQUF6QjtBQUVBO0FBQUE7QUFDSTtBQUNBLGtFQUFDLCtEQUFEO0FBQVUsY0FBUSxFQUFFLEtBQXBCO0FBQTJCLGVBQVMsRUFBRSxPQUF0QztBQUE4QyxXQUFLLEVBQUksQ0FBdkQ7QUFBQSxnQkFFUWlCLE9BQU8sQ0FBQ0ksR0FBUixDQUFhLFVBQUNDLE1BQUQsRUFBU0MsQ0FBVDtBQUFBLDRCQUFlLDhEQUFDLElBQUQ7QUFBYyxjQUFJLEVBQUVEO0FBQXBCLFdBQVdDLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZjtBQUFBLE9BQWI7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFRSDs7R0FkUVIsVTtVQUlXZixTOzs7S0FKWGUsVTs7QUFnQlQsU0FBU1MsSUFBVCxDQUFjRixNQUFkLEVBQXFCO0FBQUE7O0FBQ2pCSixTQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCRyxNQUFNLENBQUNHLElBQWxDO0FBQ0EsTUFBTUwsT0FBTyxHQUFHcEIsU0FBUyxFQUF6QjtBQUVBLHNCQUNJLDhEQUFDLG1EQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLGFBQVMsRUFBSTBCLG9EQUE3QjtBQUFvQyxhQUFTLEVBQUVOLE9BQU8sQ0FBQ2pCLElBQXZEO0FBQTZELGdCQUFZLEVBQUMsUUFBMUU7QUFBbUYsV0FBTyxFQUFHLFFBQTdGO0FBQUEsNEJBQ0EsOERBQUMsbURBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUksRUFBakI7QUFBQSw2QkFDSSw4REFBQyxxREFBRDtBQUFRLFdBQUcsdUJBQWtCbUIsTUFBTSxDQUFDRyxJQUFQLENBQVlFLElBQTlCLENBQVg7QUFBaUQsV0FBRyxFQUFJakIsTUFBTSxDQUFDWSxNQUFNLENBQUNHLElBQVAsQ0FBWUcsVUFBYjtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBS0MsOERBQUMseURBQUQ7QUFBWSxhQUFPLEVBQUMsSUFBcEI7QUFBQSxnQkFBMEJOLE1BQU0sQ0FBQ0csSUFBUCxDQUFZRTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFVSDs7SUFkUUgsSTtVQUVXeEIsUzs7O01BRlh3QixJO0FBZ0JULCtEQUFlVCxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY0YzA0YTkzMmM1YzQ4MWFiNjhhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW1hdGVyaWFsLXVpLWNhcm91c2VsJ1xuaW1wb3J0IHsgUGFwZXIsIFR5cG9ncmFwaHksIEJ1dHRvbiwgR3JpZCwgQ2FyZCwgQXZhdGFyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQge21ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50JztcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgJyYgPiAqJzoge1xuICAgICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICAgIH0sXG4gICAgICAgIGxhcmdlOiB7XG4gICAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcbiAgICAgICAgICAgIGhlaWdodDogdGhlbWUuc3BhY2luZyg3KSxcbiAgICAgICAgICB9LFxuICAgIH1cbn0pKVxuXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xuICAgIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpXG59XG5cbmZ1bmN0aW9uIE15Q2Fyb3VzZWwocHJvcHMpe1xuICAgIGNvbnN0IG1lbWJlcnMgPSBwcm9wcy5wcm9wc1xuICAgIGNvbnNvbGUubG9nKG1lbWJlcnMpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICAgIHJldHVybiAoXG4gICAgICAgIC8vIDxkaXY+PC9kaXY+XG4gICAgICAgIDxDYXJvdXNlbCBhdXRvUGxheT17ZmFsc2V9IGFuaW1hdGlvbj0gJ3NsaWRlJyBpbmRleCA9IHswfT5cbiAge1xuICAgICAgICAgICAgICAgIG1lbWJlcnMubWFwKCAobWVtYmVyLCBpKSA9PiA8SXRlbSBrZXk9e2l9IGl0ZW09e21lbWJlcn0gLz4gKVxuICAgICAgICAgICAgfVxuICAgICAgICA8L0Nhcm91c2VsPlxuICAgIClcbn1cblxuZnVuY3Rpb24gSXRlbShtZW1iZXIpe1xuICAgIGNvbnNvbGUubG9nKCdpbnNpZGUgSXRlbScsIG1lbWJlci5pdGVtKVxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGNvbXBvbmVudCA9IHtQYXBlcn0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IGFsaWduQ29udGVudD0nY2VudGVyJyBqdXN0aWZ5ID0gJ2NlbnRlcic+XG4gICAgICAgIDxHcmlkIGl0ZW0geHMgPSB7MTJ9PlxuICAgICAgICAgICAgPEF2YXRhciBhbHQgPSB7YHBpY3R1cmUgb2YgJHttZW1iZXIuaXRlbS5uYW1lfWB9IHNyYyA9IHt1cmxGb3IobWVtYmVyLml0ZW0uc3RhZmZJbWFnZSl9Lz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICBcbiAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1Jz57bWVtYmVyLml0ZW0ubmFtZX08L1R5cG9ncmFwaHk+XG4gICAgPC9HcmlkPlxuXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUNhcm91c2VsO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=