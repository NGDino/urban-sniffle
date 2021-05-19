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
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sanity/image-url */ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client */ "./client.js");
/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! React */ "./node_modules/React/index.js");
/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(React__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\HomeBanner\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

//for easy images

 //materialUi components






function urlFor(source) {
  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_4___default()(_client__WEBPACK_IMPORTED_MODULE_2__.default).image(source);
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

  //state for menu
  // const [anchorEl, setAnchorEl] = useState(null);
  //destructure props
  var _props$props = props.props,
      name = _props$props.name,
      image = _props$props.image;
  console.log('homebanner', props);
  var classes = useStyles(); //event handlers to open menu for flights

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

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
      lineNumber: 70,
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
        lineNumber: 83,
        columnNumber: 21
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
        item: true,
        component: "h2",
        xs: 12,
        color: "#fff",
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 21
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
        item: true,
        xs: 12,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
          variant: "contained",
          color: "primary",
          "aria-controls": "simple-menu",
          "aria-haspopup": "true",
          onClick: handleClick,
          children: "Start Flight"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Menu, {
          id: "simple-menu",
          anchorEl: anchorEl,
          keepMounted: true,
          open: Boolean(anchorEl),
          onClose: handleClose,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {
            onClick: handleClose,
            children: "Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {
            onClick: handleClose,
            children: "My account"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {
            onClick: handleClose,
            children: "Logout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 9
  }, _this);
};

_s(HomeBanner, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lQmFubmVyL2luZGV4LmpzIl0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0Iiwid2lkdGgiLCJwb3NpdGlvbiIsImJvcmRlckJvdHRvbSIsImJvcmRlclJpZ2h0IiwidGV4dEJhY2tncm91bmQiLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwiYmFja0dyb3VuZENvbG9yIiwiYm9yZGVyIiwicGFkZGluZyIsImJhY2tkcm9wRmlsdGVyIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiSG9tZUJhbm5lciIsInByb3BzIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsInNldEFuY2hvckVsIiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlIiwiZmlyc3RJdGVtIiwiYW5jaG9yRWwiLCJCb29sZWFuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3JCLFNBQU9DLHdEQUFlLENBQUNDLDRDQUFELENBQWYsQ0FBd0JDLEtBQXhCLENBQThCSCxNQUE5QixDQUFQO0FBQ0gsQyxDQUVEOzs7QUFDQSxJQUFNSSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDckNDLFFBQUksRUFBRTtBQUNGQyxhQUFPLEVBQUUsTUFEUCxDQUVGOztBQUZFLEtBRCtCO0FBS3JDQyxjQUFVLEVBQUU7QUFDUkMsWUFBTSxFQUFFLEdBREE7QUFFUkMsV0FBSyxFQUFFLE9BRkM7QUFHUkMs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RUFBRUYsV0FMYjtBQUFBLGtDQU9JLDhEQUFDLHVEQUFEO0FBQVUsbUJBQU8sRUFBRUEsV0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEosZUFRSSw4REFBQyx1REFBRDtBQUFVLG1CQUFPLEVBQUVBLFdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJKLGVBU0ksOERBQUMsdURBQUQ7QUFBVSxtQkFBTyxFQUFFQSxXQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFtREgsQ0F6RUQ7O0dBQU1WLFU7VUFTY3JCLFM7OztLQVRkcUIsVTtBQTRFTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44Y2M4ZjMzZTU2NDc1ZDdiMTg2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9mb3IgZWFzeSBpbWFnZXNcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuLy9tYXRlcmlhbFVpIGNvbXBvbmVudHNcbmltcG9ydCB7Qm94LCBHcmlkLCBUeXBvZ3JhcGh5LCBCdXR0b24sIE1lbnUsIE1lbnVJdGVtfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50JztcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ1JlYWN0JztcblxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UpIHtcbiAgICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKVxufVxuXG4vL3N0eWxlc1xuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIC8vIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgICAgIHdpZHRoOiAnMTAwdncnLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnZG91YmxlIDE1cHggI2FiNWMwMCcsXG4gICAgICAgIGJvcmRlclJpZ2h0OiAnbm9uZSdcbiAgICAgICAgXG4gICAgfSxcbiAgICB0ZXh0QmFja2dyb3VuZDoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgd2lkdGg6ICc3MCUnLFxuICAgICAgICB0b3A6ICcyMnZoJyxcbiAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgICAgIGJhY2tHcm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICBib3JkZXI6ICcxMHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40KScsXG4gICAgICAgIHBhZGRpbmc6JzVweCA1cHggNXB4IDVweCcsXG4gICAgICAgIGJhY2tkcm9wRmlsdGVyOiAnYmx1cig2cHgpJyxcbiAgICAgICAgYm94U2hhZG93OiAncmdiYSgwLCAwLCAwLCAwLjU2KSAwcHggMjJweCA3MHB4IDRweCcsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzI1JSAxMCU7J1xuICAgIH0sXG5cbn0pKTtcblxuXG5jb25zdCBIb21lQmFubmVyID0gKHByb3BzKSA9PiB7XG4gICAgLy9zdGF0ZSBmb3IgbWVudVxuICAgIC8vIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICAvL2Rlc3RydWN0dXJlIHByb3BzXG4gICAgY29uc3Qge25hbWUsaW1hZ2V9ID0gcHJvcHMucHJvcHNcblxuICAgIGNvbnNvbGUubG9nKCdob21lYmFubmVyJywgcHJvcHMpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICAgIC8vZXZlbnQgaGFuZGxlcnMgdG8gb3BlbiBtZW51IGZvciBmbGlnaHRzXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICAgICAgc2V0QW5jaG9yRWwobnVsbCk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zb2xlLmxvZygnaG9tZWJhbm5lcicscHJvcHMpXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxCb3ggY29tcG9uZW50PSAnZGl2JyBkaXNwbGF5ID0gJ2Jsb2NrJyA+XG4gICAgICAgICAgICA8Qm94IFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tncm91bmR9XG4gICAgICAgICAgICBjb21wb25lbnQ9J2ltZydcbiAgICAgICAgICAgIHNyYyA9IHt1cmxGb3IoaW1hZ2UpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8R3JpZCBcbiAgICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9IHtjbGFzc2VzLnRleHRCYWNrZ3JvdW5kfVxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY29tcG9uZW50PSdoMycgeHM9ezEyfSBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maXJzdEl0ZW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlbGNvbWUgdG8gXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY29tcG9uZW50PSdoMicgeHM9ezEyfSBjb2xvciA9ICcjZmZmJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwic2ltcGxlLW1lbnVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IEZsaWdodFxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaW1wbGUtbWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5Qcm9maWxlPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9Pk15IGFjY291bnQ8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+TG9nb3V0PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgPC9Cb3g+XG5cbiAgICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSG9tZUJhbm5lciJdLCJzb3VyY2VSb290IjoiIn0=