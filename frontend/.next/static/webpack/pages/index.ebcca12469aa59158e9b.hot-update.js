self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/HomeBanner/index.js":
/*!****************************************!*\
  !*** ./components/HomeBanner/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sanity/image-url */ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client */ "./client.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\HomeBanner\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

//for easy images

 //materialUi components





function urlFor(source) {
  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_4___default()(_client__WEBPACK_IMPORTED_MODULE_3__.default).image(source);
} //styles


var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex' // width: '100%'

    },
    background: {
      height: 300,
      width: '100vw',
      position: 'relative',
      borderBottom: 'double 15px #ab5c00',
      borderRight: 'none'
    },
    textBackground: {
      position: 'absolute',
      width: '70%',
      top: '22vh',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backGroundColor: '#fff',
      border: '10px solid rgba(0, 0, 0, 0.4)',
      padding: '5px 5px 5px 5px',
      backdropFilter: 'blur(6px)',
      boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',
      borderRadius: '25% 10%;'
    }
  };
});

var HomeBanner = function HomeBanner(props) {
  _s();

  var _useState = useState(null),
      _useState2 = (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var _props$props = props.props,
      name = _props$props.name,
      image = _props$props.image;
  console.log('homebanner', props);
  var classes = useStyles();
  console.log('homebanner', props);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
    component: "div",
    display: "block",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
      className: classes.background,
      component: "img",
      src: urlFor(image)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
      container: true,
      className: classes.textBackground,
      direction: "column",
      justify: "center",
      alignItems: "center",
      spacing: 1,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
        item: true,
        component: "h3",
        xs: 12,
        className: classes.firstItem,
        children: "Welcome to"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
        item: true,
        component: "h2",
        xs: 12,
        color: "#fff",
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
        item: true,
        xs: 12,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
          variant: "contained",
          color: "primary",
          children: "Start Flight"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 9
  }, _this);
};

_s(HomeBanner, "rR4YbuwDsNH7kIPxRuzEnRkbEdw=", false, function () {
  return [useStyles];
});

_c = HomeBanner;
/* harmony default export */ __webpack_exports__["default"] = (HomeBanner);

var _c;

$RefreshReg$(_c, "HomeBanner");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lQmFubmVyL2luZGV4LmpzIl0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0Iiwid2lkdGgiLCJwb3NpdGlvbiIsImJvcmRlckJvdHRvbSIsImJvcmRlclJpZ2h0IiwidGV4dEJhY2tncm91bmQiLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwiYmFja0dyb3VuZENvbG9yIiwiYm9yZGVyIiwicGFkZGluZyIsImJhY2tkcm9wRmlsdGVyIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiSG9tZUJhbm5lciIsInByb3BzIiwidXNlU3RhdGUiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwiZmlyc3RJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUNyQixTQUFPQyx3REFBZSxDQUFDQyw0Q0FBRCxDQUFmLENBQXdCQyxLQUF4QixDQUE4QkgsTUFBOUIsQ0FBUDtBQUNILEMsQ0FFRDs7O0FBQ0EsSUFBTUksU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3JDQyxRQUFJLEVBQUU7QUFDRkMsYUFBTyxFQUFFLE1BRFAsQ0FFRjs7QUFGRSxLQUQrQjtBQUtyQ0MsY0FBVSxFQUFFO0FBQ1JDLFlBQU0sRUFBRSxHQURBO0FBRVJDLFdBQUssRUFBRSxPQUZDO0FBR1JDLGNBQVEsRUFBRSxVQUhGO0FBSVJDLGtCQUFZLEVBQUUscUJBSk47QUFLUkMsaUJBQVcsRUFBRTtBQUxMLEtBTHlCO0FBYXJDQyxrQkFBYyxFQUFFO0FBQ1pILGNBQVEsRUFBRSxVQURFO0FBRVpELFdBQUssRUFBRSxLQUZLO0FBR1pLLFNBQUcsRUFBRSxNQUhPO0FBSVpDLFVBQUksRUFBRSxLQUpNO0FBS1pDLGVBQVMsRUFBRSx1QkFMQztBQU1aQyxxQkFBZSxFQUFFLE1BTkw7QUFPWkMsWUFBTSxFQUFFLCtCQVBJO0FBUVpDLGFBQU8sRUFBQyxpQkFSSTtBQVNaQyxvQkFBYyxFQUFFLFdBVEo7QUFVWkMsZUFBUyxFQUFFLHVDQVZDO0FBV1pDLGtCQUFZLEVBQUU7QUFYRjtBQWJxQixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUE4QkEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ01DLFFBQVEsQ0FBQyxJQUFELENBRGQ7QUFBQTtBQUFBLE1BQ25CQyxRQURtQjtBQUFBLE1BQ1RDLFdBRFM7O0FBQUEscUJBRUxILEtBQUssQ0FBQ0EsS0FGRDtBQUFBLE1BRW5CSSxJQUZtQixnQkFFbkJBLElBRm1CO0FBQUEsTUFFZDNCLEtBRmMsZ0JBRWRBLEtBRmM7QUFHMUI0QixTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCTixLQUExQjtBQUVBLE1BQU1PLE9BQU8sR0FBRzdCLFNBQVMsRUFBekI7QUFFQTJCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBeUJOLEtBQXpCO0FBQ0Esc0JBQ0ksOERBQUMsa0RBQUQ7QUFBSyxhQUFTLEVBQUUsS0FBaEI7QUFBc0IsV0FBTyxFQUFHLE9BQWhDO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFDQSxlQUFTLEVBQUVPLE9BQU8sQ0FBQ3hCLFVBRG5CO0FBRUEsZUFBUyxFQUFDLEtBRlY7QUFHQSxTQUFHLEVBQUlWLE1BQU0sQ0FBQ0ksS0FBRDtBQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU1RLDhEQUFDLG1EQUFEO0FBQ0EsZUFBUyxNQURUO0FBRUEsZUFBUyxFQUFHOEIsT0FBTyxDQUFDbEIsY0FGcEI7QUFHQSxlQUFTLEVBQUMsUUFIVjtBQUlBLGFBQU8sRUFBQyxRQUpSO0FBS0EsZ0JBQVUsRUFBQyxRQUxYO0FBTUEsYUFBTyxFQUFFLENBTlQ7QUFBQSw4QkFRSSw4REFBQyxtREFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLGlCQUFTLEVBQUMsSUFBckI7QUFBMEIsVUFBRSxFQUFFLEVBQTlCO0FBQWtDLGlCQUFTLEVBQUlrQixPQUFPLENBQUNDLFNBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkosZUFXSSw4REFBQyxtREFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLGlCQUFTLEVBQUMsSUFBckI7QUFBMEIsVUFBRSxFQUFFLEVBQTlCO0FBQWtDLGFBQUssRUFBRyxNQUExQztBQUFBLGtCQUNTSjtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYSixlQWNJLDhEQUFDLG1EQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsVUFBRSxFQUFFLEVBQWY7QUFBQSwrQkFDSSw4REFBQyxxREFBRDtBQUNJLGlCQUFPLEVBQUMsV0FEWjtBQUVJLGVBQUssRUFBQyxTQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBcUNILENBN0NEOztHQUFNTCxVO1VBS2NyQixTOzs7S0FMZHFCLFU7QUFnRE4sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWJjY2ExMjQ2OWFhNTkxNThlOWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vZm9yIGVhc3kgaW1hZ2VzXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8vbWF0ZXJpYWxVaSBjb21wb25lbnRzXG5pbXBvcnQge0JveCwgR3JpZCwgVHlwb2dyYXBoeSwgQnV0dG9uLCBNZW51LCBNZW51SXRlbX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCc7XG5cbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XG4gICAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcbn1cblxuLy9zdHlsZXNcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAvLyB3aWR0aDogJzEwMCUnXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgIGhlaWdodDogMzAwLFxuICAgICAgICB3aWR0aDogJzEwMHZ3JyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJvcmRlckJvdHRvbTogJ2RvdWJsZSAxNXB4ICNhYjVjMDAnLFxuICAgICAgICBib3JkZXJSaWdodDogJ25vbmUnXG4gICAgICAgIFxuICAgIH0sXG4gICAgdGV4dEJhY2tncm91bmQ6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHdpZHRoOiAnNzAlJyxcbiAgICAgICAgdG9wOiAnMjJ2aCcsXG4gICAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgICAgICBiYWNrR3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgYm9yZGVyOiAnMTBweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCknLFxuICAgICAgICBwYWRkaW5nOic1cHggNXB4IDVweCA1cHgnLFxuICAgICAgICBiYWNrZHJvcEZpbHRlcjogJ2JsdXIoNnB4KScsXG4gICAgICAgIGJveFNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMC41NikgMHB4IDIycHggNzBweCA0cHgnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcyNSUgMTAlOydcbiAgICB9LFxuXG59KSk7XG5cblxuY29uc3QgSG9tZUJhbm5lciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3Qge25hbWUsaW1hZ2V9ID0gcHJvcHMucHJvcHNcbiAgICBjb25zb2xlLmxvZygnaG9tZWJhbm5lcicsIHByb3BzKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gICAgXG4gICAgY29uc29sZS5sb2coJ2hvbWViYW5uZXInLHByb3BzKVxuICAgIHJldHVybihcbiAgICAgICAgPEJveCBjb21wb25lbnQ9ICdkaXYnIGRpc3BsYXkgPSAnYmxvY2snID5cbiAgICAgICAgICAgIDxCb3ggXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2dyb3VuZH1cbiAgICAgICAgICAgIGNvbXBvbmVudD0naW1nJ1xuICAgICAgICAgICAgc3JjID0ge3VybEZvcihpbWFnZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxHcmlkIFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ge2NsYXNzZXMudGV4dEJhY2tncm91bmR9XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBzcGFjaW5nPXsxfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjb21wb25lbnQ9J2gzJyB4cz17MTJ9IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpcnN0SXRlbX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2VsY29tZSB0byBcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjb21wb25lbnQ9J2gyJyB4cz17MTJ9IGNvbG9yID0gJyNmZmYnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IEZsaWdodFxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgPC9Cb3g+XG5cbiAgICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSG9tZUJhbm5lciJdLCJzb3VyY2VSb290IjoiIn0=