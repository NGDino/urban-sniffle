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
        margin: theme.spacing(1)
      },
      avatar: {
        height: '100px'
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

  console.log('inside Item', member.item);
  var classes = useStyles();
  var image = urlFor(member.item.staffImage);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
    container: true,
    component: _material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Paper,
    className: classes.root,
    alignContent: "center",
    justify: "center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
      item: true,
      xs: 12,
      alignContent: "center",
      className: classes.avatar,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Avatar, {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
      item: true,
      xs: 12,
      component: _material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography,
      variant: "h5",
      children: member.item.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
      item: true,
      component: _material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography,
      variant: "subtitle1",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: member.item.position
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
      item: true,
      component: _material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography,
      variant: "subtitle1",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: "Favorite Wine:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, this), " ", member.item.favoriteWine]
    }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcm91c2VsL2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwibWFyZ2luIiwic3BhY2luZyIsImF2YXRhciIsImhlaWdodCIsInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiTXlDYXJvdXNlbCIsInByb3BzIiwibWVtYmVycyIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwibWFwIiwibWVtYmVyIiwiaSIsIkl0ZW0iLCJpdGVtIiwic3RhZmZJbWFnZSIsIlBhcGVyIiwibmFtZSIsIlR5cG9ncmFwaHkiLCJwb3NpdGlvbiIsImZhdm9yaXRlV2luZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3JDQyxRQUFJLEVBQUU7QUFDRkMsYUFBTyxFQUFFLE1BRFA7QUFFRixlQUFTO0FBQ0xDLGNBQU0sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZDtBQURILE9BRlA7QUFLRkMsWUFBTSxFQUFFO0FBQ0pDLGNBQU0sRUFBRTtBQURKO0FBTE47QUFEK0IsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBWUEsU0FBU0MsTUFBVCxDQUFpQkMsTUFBakIsRUFBeUI7QUFDckIsU0FBT0Msd0RBQWUsQ0FBQ0MsNENBQUQsQ0FBZixDQUF3QkMsS0FBeEIsQ0FBOEJILE1BQTlCLENBQVA7QUFDSDs7QUFFRCxTQUFTSSxVQUFULENBQW9CQyxLQUFwQixFQUEwQjtBQUFBOztBQUFBOztBQUN0QixNQUFNQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0EsS0FBdEI7QUFDQUUsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFFQSxNQUFNRyxPQUFPLEdBQUduQixTQUFTLEVBQXpCO0FBRUE7QUFBQTtBQUNJO0FBQ0Esa0VBQUMsK0RBQUQ7QUFBVSxjQUFRLEVBQUUsS0FBcEI7QUFBMkIsZUFBUyxFQUFFLE9BQXRDO0FBQThDLFdBQUssRUFBSSxDQUF2RDtBQUFBLGdCQUVRZ0IsT0FBTyxDQUFDSSxHQUFSLENBQWEsVUFBQ0MsTUFBRCxFQUFTQyxDQUFUO0FBQUEsNEJBQWUsOERBQUMsSUFBRDtBQUFjLGNBQUksRUFBRUQ7QUFBcEIsV0FBV0MsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFmO0FBQUEsT0FBYjtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQVFIOztHQWRRUixVO1VBSVdkLFM7OztLQUpYYyxVOztBQWdCVCxTQUFTUyxJQUFULENBQWNGLE1BQWQsRUFBcUI7QUFBQTs7QUFDakJKLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJHLE1BQU0sQ0FBQ0csSUFBbEM7QUFDQSxNQUFNTCxPQUFPLEdBQUduQixTQUFTLEVBQXpCO0FBQ0EsTUFBT2EsS0FBSyxHQUFHSixNQUFNLENBQUNZLE1BQU0sQ0FBQ0csSUFBUCxDQUFZQyxVQUFiLENBQXJCO0FBRUEsc0JBQ0ksOERBQUMsbURBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsYUFBUyxFQUFJQyxvREFBN0I7QUFBb0MsYUFBUyxFQUFFUCxPQUFPLENBQUNoQixJQUF2RDtBQUE2RCxnQkFBWSxFQUFDLFFBQTFFO0FBQW1GLFdBQU8sRUFBRyxRQUE3RjtBQUFBLDRCQUNJLDhEQUFDLG1EQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFJLEVBQWpCO0FBQXFCLGtCQUFZLEVBQUMsUUFBbEM7QUFBMkMsZUFBUyxFQUFFZ0IsT0FBTyxDQUFDWixNQUE5RDtBQUFBLDZCQUNJLDhEQUFDLHFEQUFEO0FBQVMsV0FBRyx1QkFBa0JjLE1BQU0sQ0FBQ0csSUFBUCxDQUFZRyxJQUE5QixDQUFaO0FBQWtELFdBQUcsRUFBSWQ7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJLDhEQUFDLG1EQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFFLEVBQWY7QUFBbUIsZUFBUyxFQUFHZSx5REFBL0I7QUFBMkMsYUFBTyxFQUFDLElBQW5EO0FBQUEsZ0JBQ0tQLE1BQU0sQ0FBQ0csSUFBUCxDQUFZRztBQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFPSSw4REFBQyxtREFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLGVBQVMsRUFBSUMseURBQXhCO0FBQW9DLGFBQU8sRUFBQyxXQUE1QztBQUFBLDZCQUNJO0FBQUEsa0JBQVNQLE1BQU0sQ0FBQ0csSUFBUCxDQUFZSztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKLGVBVUksOERBQUMsbURBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxlQUFTLEVBQUlELHlEQUF4QjtBQUFvQyxhQUFPLEVBQUMsV0FBNUM7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLE9BQ3FDUCxNQUFNLENBQUNHLElBQVAsQ0FBWU0sWUFEakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrQkg7O0lBdkJRUCxJO1VBRVd2QixTOzs7TUFGWHVCLEk7QUF5QlQsK0RBQWVULFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWE1ZTYzYTNhZTQyZjNjY2Y0NzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbWF0ZXJpYWwtdWktY2Fyb3VzZWwnXG5pbXBvcnQgeyBQYXBlciwgVHlwb2dyYXBoeSwgQnV0dG9uLCBHcmlkLCBDYXJkLCBBdmF0YXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAnJiA+IConOiB7XG4gICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICAgIH0sXG4gICAgICAgIGF2YXRhcjoge1xuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgICAgICAgIH0sXG4gICAgfVxufSkpXG5cbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XG4gICAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcbn1cblxuZnVuY3Rpb24gTXlDYXJvdXNlbChwcm9wcyl7XG4gICAgY29uc3QgbWVtYmVycyA9IHByb3BzLnByb3BzXG4gICAgY29uc29sZS5sb2cobWVtYmVycylcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgLy8gPGRpdj48L2Rpdj5cbiAgICAgICAgPENhcm91c2VsIGF1dG9QbGF5PXtmYWxzZX0gYW5pbWF0aW9uPSAnc2xpZGUnIGluZGV4ID0gezB9PlxuICB7XG4gICAgICAgICAgICAgICAgbWVtYmVycy5tYXAoIChtZW1iZXIsIGkpID0+IDxJdGVtIGtleT17aX0gaXRlbT17bWVtYmVyfSAvPiApXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBJdGVtKG1lbWJlcil7XG4gICAgY29uc29sZS5sb2coJ2luc2lkZSBJdGVtJywgbWVtYmVyLml0ZW0pXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gICAgY29uc3QgIGltYWdlID0gdXJsRm9yKG1lbWJlci5pdGVtLnN0YWZmSW1hZ2UpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8R3JpZCBjb250YWluZXIgY29tcG9uZW50ID0ge1BhcGVyfSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gYWxpZ25Db250ZW50PSdjZW50ZXInIGp1c3RpZnkgPSAnY2VudGVyJz5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHMgPSB7MTJ9IGFsaWduQ29udGVudD0nY2VudGVyJyBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfT5cbiAgICAgICAgICAgICAgICA8QXZhdGFyICBhbHQgPSB7YHBpY3R1cmUgb2YgJHttZW1iZXIuaXRlbS5uYW1lfWB9IHNyYyA9IHtpbWFnZX0vPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNvbXBvbmVudCA9e1R5cG9ncmFwaHl9IHZhcmlhbnQ9J2g1Jz5cbiAgICAgICAgICAgICAgICB7bWVtYmVyLml0ZW0ubmFtZX1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gY29tcG9uZW50ID0ge1R5cG9ncmFwaHl9IHZhcmlhbnQ9J3N1YnRpdGxlMSc+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz57bWVtYmVyLml0ZW0ucG9zaXRpb259PC9zdHJvbmc+IFxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSBjb21wb25lbnQgPSB7VHlwb2dyYXBoeX0gdmFyaWFudD0nc3VidGl0bGUxJz5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPkZhdm9yaXRlIFdpbmU6PC9zdHJvbmc+IHttZW1iZXIuaXRlbS5mYXZvcml0ZVdpbmV9XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICBcbiAgICA8L0dyaWQ+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15Q2Fyb3VzZWw7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==