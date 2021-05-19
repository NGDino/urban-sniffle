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
      lineNumber: 72,
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
        lineNumber: 85,
        columnNumber: 21
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {
        item: true,
        component: "h2",
        xs: 12,
        color: "#fff",
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
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
          lineNumber: 92,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Menu, {
          id: "simple-menu",
          anchorEl: anchorEl,
          keepMounted: true,
          open: Boolean(anchorEl),
          onClose: handleClose,
          children: [flights.map(flight), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.MenuItem, {
            onClick: handleClose,
            children: "Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.MenuItem, {
            onClick: handleClose,
            children: "My account"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.MenuItem, {
            onClick: handleClose,
            children: "Logout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lQmFubmVyL2luZGV4LmpzIl0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0Iiwid2lkdGgiLCJwb3NpdGlvbiIsImJvcmRlckJvdHRvbSIsImJvcmRlclJpZ2h0IiwidGV4dEJhY2tncm91bmQiLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwiYmFja0dyb3VuZENvbG9yIiwiYm9yZGVyIiwicGFkZGluZyIsImJhY2tkcm9wRmlsdGVyIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiSG9tZUJhbm5lciIsInByb3BzIiwibmFtZSIsImZsaWdodHMiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsIlJlYWN0IiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJmaXJzdEl0ZW0iLCJCb29sZWFuIiwibWFwIiwiZmxpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFpQkMsTUFBakIsRUFBeUI7QUFDckIsU0FBT0Msd0RBQWUsQ0FBQ0MsNENBQUQsQ0FBZixDQUF3QkMsS0FBeEIsQ0FBOEJILE1BQTlCLENBQVA7QUFDSCxDLENBRUQ7OztBQUNBLElBQU1JLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsUUFBSSxFQUFFO0FBQ0ZDLGFBQU8sRUFBRSxNQURQLENBRUY7O0FBRkUsS0FEK0I7QUFLckNDLGNBQVUsRUFBRTtBQUNSQyxZQUFNLEVB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LGlCQURKLGVBV0ksOERBQUMsbURBQUQ7QUFDSSxZQUFFLEVBQUMsYUFEUDtBQUVJLGtCQUFRLEVBQUVGLFFBRmQ7QUFHSSxxQkFBVyxNQUhmO0FBSUksY0FBSSxFQUFFTyxPQUFPLENBQUNQLFFBQUQsQ0FKakI7QUFLSSxpQkFBTyxFQUFFSyxXQUxiO0FBQUEscUJBT0tWLE9BQU8sQ0FBQ2EsR0FBUixDQUFhQyxNQUFiLENBUEwsZUFRSSw4REFBQyx1REFBRDtBQUFVLG1CQUFPLEVBQUVKLFdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJKLGVBU0ksOERBQUMsdURBQUQ7QUFBVSxtQkFBTyxFQUFFQSxXQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFUSixlQVVJLDhEQUFDLHVEQUFEO0FBQVUsbUJBQU8sRUFBRUEsV0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBb0RILENBNUVEOztHQUFNYixVO1VBUWNyQixTOzs7S0FSZHFCLFU7QUErRU4sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGU1YjI4ZDc5M2EyZjQwOTgzZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vZm9yIGVhc3kgaW1hZ2VzXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8vbWF0ZXJpYWxVaSBjb21wb25lbnRzXG5pbXBvcnQge0JveCwgR3JpZCwgVHlwb2dyYXBoeSwgQnV0dG9uLCBNZW51LCBNZW51SXRlbX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xuICAgIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpXG59XG5cbi8vc3R5bGVzXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgLy8gd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgICAgd2lkdGg6ICcxMDB2dycsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBib3JkZXJCb3R0b206ICdkb3VibGUgMTVweCAjYWI1YzAwJyxcbiAgICAgICAgYm9yZGVyUmlnaHQ6ICdub25lJ1xuICAgICAgICBcbiAgICB9LFxuICAgIHRleHRCYWNrZ3JvdW5kOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB3aWR0aDogJzcwJScsXG4gICAgICAgIHRvcDogJzIydmgnLFxuICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICAgICAgYmFja0dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgIGJvcmRlcjogJzEwcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpJyxcbiAgICAgICAgcGFkZGluZzonNXB4IDVweCA1cHggNXB4JyxcbiAgICAgICAgYmFja2Ryb3BGaWx0ZXI6ICdibHVyKDZweCknLFxuICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDAuNTYpIDBweCAyMnB4IDcwcHggNHB4JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjUlIDEwJTsnXG4gICAgfSxcblxufSkpO1xuXG5cbmNvbnN0IEhvbWVCYW5uZXIgPSAocHJvcHMpID0+IHtcbiAgICAvL3N0YXRlIGZvciBtZW51XG5cbiAgICAvL2Rlc3RydWN0dXJlIHByb3BzXG4gICAgY29uc3Qge25hbWUsaW1hZ2UsIGZsaWdodHN9ID0gcHJvcHMucHJvcHNcblxuICAgIGNvbnNvbGUubG9nKCdob21lYmFubmVyIGZsaWdodHMnLCBmbGlnaHRzKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cbiAgICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuXG5cbiAgICAvL2V2ZW50IGhhbmRsZXJzIHRvIG9wZW4gbWVudSBmb3IgZmxpZ2h0c1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIHNldEFuY2hvckVsKG51bGwpO1xuICAgIH07XG4gICAgXG4gICAgY29uc29sZS5sb2coJ2hvbWViYW5uZXInLHByb3BzKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8Qm94IGNvbXBvbmVudD0gJ2RpdicgZGlzcGxheSA9ICdibG9jaycgPlxuICAgICAgICAgICAgPEJveCBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrZ3JvdW5kfVxuICAgICAgICAgICAgY29tcG9uZW50PSdpbWcnXG4gICAgICAgICAgICBzcmMgPSB7dXJsRm9yKGltYWdlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEdyaWQgXG4gICAgICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSB7Y2xhc3Nlcy50ZXh0QmFja2dyb3VuZH1cbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezF9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNvbXBvbmVudD0naDMnIHhzPXsxMn0gY2xhc3NOYW1lID0ge2NsYXNzZXMuZmlyc3RJdGVtfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lIHRvIFxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNvbXBvbmVudD0naDInIHhzPXsxMn0gY29sb3IgPSAnI2ZmZic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cInNpbXBsZS1tZW51XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydCBGbGlnaHRcblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2ltcGxlLW1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmbGlnaHRzLm1hcCgoZmxpZ2h0KSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5Qcm9maWxlPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9Pk15IGFjY291bnQ8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+TG9nb3V0PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgPC9Cb3g+XG5cbiAgICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSG9tZUJhbm5lciJdLCJzb3VyY2VSb290IjoiIn0=