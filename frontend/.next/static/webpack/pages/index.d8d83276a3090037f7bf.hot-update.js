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
    alignItems: "center",
    justify: "center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
      item: true,
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Avatar, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUNhcm91c2VsL2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwibWFyZ2luIiwic3BhY2luZyIsImF2YXRhciIsImhlaWdodCIsInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiTXlDYXJvdXNlbCIsInByb3BzIiwibWVtYmVycyIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwibWFwIiwibWVtYmVyIiwiaSIsIkl0ZW0iLCJpdGVtIiwic3RhZmZJbWFnZSIsIlBhcGVyIiwibmFtZSIsIlR5cG9ncmFwaHkiLCJwb3NpdGlvbiIsImZhdm9yaXRlV2luZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3JDQyxRQUFJLEVBQUU7QUFDRkMsYUFBTyxFQUFFLE1BRFA7QUFFRixlQUFTO0FBQ0xDLGNBQU0sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZDtBQURILE9BRlA7QUFLRkMsWUFBTSxFQUFFO0FBQ0pDLGNBQU0sRUFBRTtBQURKO0FBTE47QUFEK0IsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBWUEsU0FBU0MsTUFBVCxDQUFpQkMsTUFBakIsRUFBeUI7QUFDckIsU0FBT0Msd0RBQWUsQ0FBQ0MsNENBQUQsQ0FBZixDQUF3QkMsS0FBeEIsQ0FBOEJILE1BQTlCLENBQVA7QUFDSDs7QUFFRCxTQUFTSSxVQUFULENBQW9CQyxLQUFwQixFQUEwQjtBQUFBOztBQUFBOztBQUN0QixNQUFNQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0EsS0FBdEI7QUFDQUUsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFFQSxNQUFNRyxPQUFPLEdBQUduQixTQUFTLEVBQXpCO0FBRUE7QUFBQTtBQUNJO0FBQ0Esa0VBQUMsK0RBQUQ7QUFBVSxjQUFRLEVBQUUsS0FBcEI7QUFBMkIsZUFBUyxFQUFFLE9BQXRDO0FBQThDLFdBQUssRUFBSSxDQUF2RDtBQUFBLGdCQUVRZ0IsT0FBTyxDQUFDSSxHQUFSLENBQWEsVUFBQ0MsTUFBRCxFQUFTQyxDQUFUO0FBQUEsNEJBQWUsOERBQUMsSUFBRDtBQUFjLGNBQUksRUFBRUQ7QUFBcEIsV0FBV0MsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFmO0FBQUEsT0FBYjtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQVFIOztHQWRRUixVO1VBSVdkLFM7OztLQUpYYyxVOztBQWdCVCxTQUFTUyxJQUFULENBQWNGLE1BQWQsRUFBcUI7QUFBQTs7QUFDakJKLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJHLE1BQU0sQ0FBQ0csSUFBbEM7QUFDQSxNQUFNTCxPQUFPLEdBQUduQixTQUFTLEVBQXpCO0FBQ0EsTUFBT2EsS0FBSyxHQUFHSixNQUFNLENBQUNZLE1BQU0sQ0FBQ0csSUFBUCxDQUFZQyxVQUFiLENBQXJCO0FBRUEsc0JBQ0ksOERBQUMsbURBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsYUFBUyxFQUFJQyxvREFBN0I7QUFBb0MsYUFBUyxFQUFFUCxPQUFPLENBQUNoQixJQUF2RDtBQUE2RCxjQUFVLEVBQUMsUUFBeEU7QUFBaUYsV0FBTyxFQUFHLFFBQTNGO0FBQUEsNEJBQ0ksOERBQUMsbURBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUksRUFBakI7QUFBQSw2QkFDSSw4REFBQyxxREFBRDtBQUFRLGlCQUFTLEVBQUVnQixPQUFPLENBQUNaLE1BQTNCO0FBQW1DLFdBQUcsdUJBQWtCYyxNQUFNLENBQUNHLElBQVAsQ0FBWUcsSUFBOUIsQ0FBdEM7QUFBNEUsV0FBRyxFQUFJZDtBQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUksOERBQUMsbURBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsRUFBZjtBQUFtQixlQUFTLEVBQUdlLHlEQUEvQjtBQUEyQyxhQUFPLEVBQUMsSUFBbkQ7QUFBQSxnQkFDS1AsTUFBTSxDQUFDRyxJQUFQLENBQVlHO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQU9JLDhEQUFDLG1EQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsZUFBUyxFQUFJQyx5REFBeEI7QUFBb0MsYUFBTyxFQUFDLFdBQTVDO0FBQUEsNkJBQ0k7QUFBQSxrQkFBU1AsTUFBTSxDQUFDRyxJQUFQLENBQVlLO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosZUFVSSw4REFBQyxtREFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLGVBQVMsRUFBSUQseURBQXhCO0FBQW9DLGFBQU8sRUFBQyxXQUE1QztBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosT0FDcUNQLE1BQU0sQ0FBQ0csSUFBUCxDQUFZTSxZQURqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWtCSDs7SUF2QlFQLEk7VUFFV3ZCLFM7OztNQUZYdUIsSTtBQXlCVCwrREFBZVQsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kOGQ4MzI3NmEzMDkwMDM3ZjdiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tYXRlcmlhbC11aS1jYXJvdXNlbCdcbmltcG9ydCB7IFBhcGVyLCBUeXBvZ3JhcGh5LCBCdXR0b24sIEdyaWQsIENhcmQsIEF2YXRhcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCc7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCc7XG5cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICcmID4gKic6IHtcbiAgICAgICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgICAgfSxcbiAgICAgICAgYXZhdGFyOiB7XG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDBweCcsXG4gICAgICAgICAgfSxcbiAgICB9XG59KSlcblxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UpIHtcbiAgICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKVxufVxuXG5mdW5jdGlvbiBNeUNhcm91c2VsKHByb3BzKXtcbiAgICBjb25zdCBtZW1iZXJzID0gcHJvcHMucHJvcHNcbiAgICBjb25zb2xlLmxvZyhtZW1iZXJzKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICAvLyA8ZGl2PjwvZGl2PlxuICAgICAgICA8Q2Fyb3VzZWwgYXV0b1BsYXk9e2ZhbHNlfSBhbmltYXRpb249ICdzbGlkZScgaW5kZXggPSB7MH0+XG4gIHtcbiAgICAgICAgICAgICAgICBtZW1iZXJzLm1hcCggKG1lbWJlciwgaSkgPT4gPEl0ZW0ga2V5PXtpfSBpdGVtPXttZW1iZXJ9IC8+IClcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEl0ZW0obWVtYmVyKXtcbiAgICBjb25zb2xlLmxvZygnaW5zaWRlIEl0ZW0nLCBtZW1iZXIuaXRlbSlcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcbiAgICBjb25zdCAgaW1hZ2UgPSB1cmxGb3IobWVtYmVyLml0ZW0uc3RhZmZJbWFnZSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBjb21wb25lbnQgPSB7UGFwZXJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBhbGlnbkl0ZW1zPSdjZW50ZXInIGp1c3RpZnkgPSAnY2VudGVyJz5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHMgPSB7MTJ9ID5cbiAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9IGFsdCA9IHtgcGljdHVyZSBvZiAke21lbWJlci5pdGVtLm5hbWV9YH0gc3JjID0ge2ltYWdlfS8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY29tcG9uZW50ID17VHlwb2dyYXBoeX0gdmFyaWFudD0naDUnPlxuICAgICAgICAgICAgICAgIHttZW1iZXIuaXRlbS5uYW1lfVxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSBjb21wb25lbnQgPSB7VHlwb2dyYXBoeX0gdmFyaWFudD0nc3VidGl0bGUxJz5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPnttZW1iZXIuaXRlbS5wb3NpdGlvbn08L3N0cm9uZz4gXG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIGNvbXBvbmVudCA9IHtUeXBvZ3JhcGh5fSB2YXJpYW50PSdzdWJ0aXRsZTEnPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+RmF2b3JpdGUgV2luZTo8L3N0cm9uZz4ge21lbWJlci5pdGVtLmZhdm9yaXRlV2luZX1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgIFxuICAgIDwvR3JpZD5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlDYXJvdXNlbDtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9