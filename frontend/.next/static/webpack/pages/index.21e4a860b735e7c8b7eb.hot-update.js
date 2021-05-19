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
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/image-url */ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client */ "./client.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\HomeBanner\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

//for easy images

 //materialUi components






function urlFor(source) {
  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default()(_client__WEBPACK_IMPORTED_MODULE_3__.default).image(source);
} //styles


var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.makeStyles)(function (theme) {
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

  //state for menu
  //destructure props
  var _props$props = props.props,
      name = _props$props.name,
      image = _props$props.image,
      flights = _props$props.flights;
  console.log('homebanner flights', flights);
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default().useState(null),
      _React$useState2 = (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1]; //event handlers to open menu for flights


  var handleClick = function handleClick(event) {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  console.log('homebanner', props);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Box, {
    component: "div",
    display: "block",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Box, {
      className: classes.background,
      component: "img",
      src: urlFor(image)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {
      container: true,
      className: classes.textBackground,
      direction: "column",
      justify: "center",
      alignItems: "center",
      spacing: 1,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {
        item: true,
        component: "h3",
        xs: 12,
        className: classes.firstItem,
        children: "Welcome to"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 21
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {
        item: true,
        component: "h2",
        xs: 12,
        color: "#fff",
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 21
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {
        item: true,
        xs: 12,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Button, {
          variant: "contained",
          color: "primary",
          "aria-controls": "simple-menu",
          "aria-haspopup": "true",
          onClick: handleClick,
          children: "Start Flight"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Menu, {
          id: "simple-menu",
          anchorEl: anchorEl,
          keepMounted: true,
          open: Boolean(anchorEl),
          onClose: handleClose,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.MenuItem, {
            onClick: handleClose,
            primaryText: flights[0].name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 33
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 9
  }, _this);
};

_s(HomeBanner, "vXA32r6EXukv831dcFOknrOnVCE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lQmFubmVyL2luZGV4LmpzIl0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0Iiwid2lkdGgiLCJwb3NpdGlvbiIsImJvcmRlckJvdHRvbSIsImJvcmRlclJpZ2h0IiwidGV4dEJhY2tncm91bmQiLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwiYmFja0dyb3VuZENvbG9yIiwiYm9yZGVyIiwicGFkZGluZyIsImJhY2tkcm9wRmlsdGVyIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiSG9tZUJhbm5lciIsInByb3BzIiwibmFtZSIsImZsaWdodHMiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsIlJlYWN0IiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsImZpcnN0SXRlbSIsIkJvb2xlYW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUNyQixTQUFPQyx3REFBZSxDQUFDQyw0Q0FBRCxDQUFmLENBQXdCQyxLQUF4QixDQUE4QkgsTUFBOUIsQ0FBUDtBQUNILEMsQ0FFRDs7O0FBQ0EsSUFBTUksU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3JDQyxRQUFJLEVBQUU7QUFDRkMsYUFBTyxFQUFFLE1BRFAsQ0FFRjs7QUFGRSxLQUQrQjtBQUtyQ0MsY0FBVSxFQUFFO0FBQ1JDLFlBQU0s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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBWUksOERBQUMsbURBQUQ7QUFDSSxZQUFFLEVBQUMsYUFEUDtBQUVJLGtCQUFRLEVBQUVGLFFBRmQ7QUFHSSxxQkFBVyxNQUhmO0FBSUksY0FBSSxFQUFFUSxPQUFPLENBQUNSLFFBQUQsQ0FKakI7QUFLSSxpQkFBTyxFQUFFTSxXQUxiO0FBQUEsaUNBUVEsOERBQUMsdURBQUQ7QUFDQSxtQkFBTyxFQUFFQSxXQURUO0FBRUEsdUJBQVcsRUFBRVgsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXRDtBQUZ4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTBESCxDQXBGRDs7R0FBTUYsVTtVQVNjckIsUzs7O0tBVGRxQixVO0FBdUZOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIxZTRhODYwYjczNWU3YzhiN2ViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ZvciBlYXN5IGltYWdlc1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG4vL21hdGVyaWFsVWkgY29tcG9uZW50c1xuaW1wb3J0IHtCb3gsIEdyaWQsIFR5cG9ncmFwaHksIEJ1dHRvbiwgTWVudSwgTWVudUl0ZW19IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UpIHtcbiAgICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKVxufVxuXG4vL3N0eWxlc1xuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIC8vIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICAgIHdpZHRoOiAnMTAwdncnLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnZG91YmxlIDE1cHggI2FiNWMwMCcsXG4gICAgICAgIGJvcmRlclJpZ2h0OiAnbm9uZSdcbiAgICAgICAgXG4gICAgfSxcbiAgICB0ZXh0QmFja2dyb3VuZDoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgd2lkdGg6ICc3MCUnLFxuICAgICAgICB0b3A6ICcyMnZoJyxcbiAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgICAgIGJhY2tHcm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICBib3JkZXI6ICcxMHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40KScsXG4gICAgICAgIHBhZGRpbmc6JzVweCA1cHggNXB4IDVweCcsXG4gICAgICAgIGJhY2tkcm9wRmlsdGVyOiAnYmx1cig2cHgpJyxcbiAgICAgICAgYm94U2hhZG93OiAncmdiYSgwLCAwLCAwLCAwLjU2KSAwcHggMjJweCA3MHB4IDRweCcsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzI1JSAxMCU7J1xuICAgIH0sXG5cbn0pKTtcblxuXG5jb25zdCBIb21lQmFubmVyID0gKHByb3BzKSA9PiB7XG4gICAgLy9zdGF0ZSBmb3IgbWVudVxuXG4gICAgLy9kZXN0cnVjdHVyZSBwcm9wc1xuICAgIGNvbnN0IHtuYW1lLGltYWdlLCBmbGlnaHRzfSA9IHByb3BzLnByb3BzXG4gICAgXG5cbiAgICBjb25zb2xlLmxvZygnaG9tZWJhbm5lciBmbGlnaHRzJywgZmxpZ2h0cylcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gICAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuXG4gICAgLy9ldmVudCBoYW5kbGVycyB0byBvcGVuIG1lbnUgZm9yIGZsaWdodHNcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIHNldEFuY2hvckVsKG51bGwpO1xuICAgIH07XG4gICAgXG4gICAgY29uc29sZS5sb2coJ2hvbWViYW5uZXInLHByb3BzKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8Qm94IGNvbXBvbmVudD0gJ2RpdicgZGlzcGxheSA9ICdibG9jaycgPlxuICAgICAgICAgICAgPEJveCBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrZ3JvdW5kfVxuICAgICAgICAgICAgY29tcG9uZW50PSdpbWcnXG4gICAgICAgICAgICBzcmMgPSB7dXJsRm9yKGltYWdlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEdyaWQgXG4gICAgICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSB7Y2xhc3Nlcy50ZXh0QmFja2dyb3VuZH1cbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezF9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNvbXBvbmVudD0naDMnIHhzPXsxMn0gY2xhc3NOYW1lID0ge2NsYXNzZXMuZmlyc3RJdGVtfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lIHRvIFxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNvbXBvbmVudD0naDInIHhzPXsxMn0gY29sb3IgPSAnI2ZmZic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cInNpbXBsZS1tZW51XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydCBGbGlnaHRcblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2ltcGxlLW1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7ZmxpZ2h0cy5tYXAoKGZsaWdodCk9PnsgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlUZXh0PXtmbGlnaHRzWzBdLm5hbWV9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogfSl9ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIDwvQm94PlxuXG4gICAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVCYW5uZXIiXSwic291cmNlUm9vdCI6IiJ9