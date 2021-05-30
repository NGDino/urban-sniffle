self["webpackHotUpdate_N_E"]("pages/flight/[slug]",{

/***/ "./components/FlightList/index.js":
/*!****************************************!*\
  !*** ./components/FlightList/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FlightList; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\FlightList\\index.js",
    _s = $RefreshSig$();




var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(function (theme) {
  return {
    root: {
      marginBottom: '70px'
    },
    wineName: {
      display: 'block'
    },
    table: {
      Width: '100%'
    }
  };
});

function wineData(name, amount) {
  return {
    name: name,
    amount: amount
  };
}

function FlightList(props) {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      moreInfo = _useState[0],
      setMoreInfo = _useState[1];

  var classes = useStyles();
  var wines = props.props;
  console.log('accordion props', wines);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Container, {
      className: classes.root,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        variant: "h4",
        align: "center",
        gutterBottom: true,
        children: "Bordeaux Flight"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, this), wines.map(function (wine, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
            variant: "h5",
            children: [wine.year, " ", wine.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
            variant: "subtitle2",
            children: wine.specialAttribute
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
            variant: "subtitle1",
            children: wine.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
            component: "div",
            children: [moreInfo == wine._id ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
              onClick: function onClick() {
                return setMoreInfo('');
              },
              children: "less Info"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 29
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
              onClick: function onClick() {
                return setMoreInfo(wine._id);
              },
              children: "More Info"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 29
            }, _this), moreInfo == wine._id && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                variant: "h6",
                children: "Additional Information:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                variant: "body1",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                  children: "Barrel Program"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 37
                }, _this), ": ", wine.wineMaking.barrelProgram]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

_s(FlightList, "FiLHxBrny9nh092Wh2Qco0+8DIg=", false, function () {
  return [useStyles];
});

_c = FlightList;

var _c;

$RefreshReg$(_c, "FlightList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GbGlnaHRMaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJtYXJnaW5Cb3R0b20iLCJ3aW5lTmFtZSIsImRpc3BsYXkiLCJ0YWJsZSIsIldpZHRoIiwid2luZURhdGEiLCJuYW1lIiwiYW1vdW50IiwiRmxpZ2h0TGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJtb3JlSW5mbyIsInNldE1vcmVJbmZvIiwiY2xhc3NlcyIsIndpbmVzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIndpbmUiLCJpbmRleCIsInllYXIiLCJzcGVjaWFsQXR0cmlidXRlIiwiZGVzY3JpcHRpb24iLCJfaWQiLCJ3aW5lTWFraW5nIiwiYmFycmVsUHJvZ3JhbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQyw2REFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3JDQyxRQUFJLEVBQUM7QUFDREMsa0JBQVksRUFBQztBQURaLEtBRGdDO0FBSXJDQyxZQUFRLEVBQUU7QUFDTkMsYUFBTyxFQUFFO0FBREgsS0FKMkI7QUFPckNDLFNBQUssRUFBRTtBQUNIQyxXQUFLLEVBQUU7QUFESjtBQVA4QixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUFZQSxTQUFTQyxRQUFULENBQWtCQyxJQUFsQixFQUF3QkMsTUFBeEIsRUFBK0I7QUFDM0IsU0FBTztBQUFDRCxRQUFJLEVBQUpBLElBQUQ7QUFBT0MsVUFBTSxFQUFOQTtBQUFQLEdBQVA7QUFDSDs7QUFFYyxTQUFTQyxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUFBOztBQUFBOztBQUFBLGtCQUNMQywrQ0FBUSxDQUFDLEVBQUQsQ0FESDtBQUFBLE1BQzlCQyxRQUQ4QjtBQUFBLE1BQ3BCQyxXQURvQjs7QUFHdEMsTUFBTUMsT0FBTyxHQUFHakIsU0FBUyxFQUF6QjtBQUlBLE1BQU1rQixLQUFLLEdBQUdMLEtBQUssQ0FBQ0EsS0FBcEI7QUFDQU0sU0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JGLEtBQS9CO0FBRUEsc0JBQ0E7QUFBQSwyQkFFSSw4REFBQyx3REFBRDtBQUFXLGVBQVMsRUFBRUQsT0FBTyxDQUFDZCxJQUE5QjtBQUFBLDhCQUNJLDhEQUFDLHlEQUFEO0FBQVksZUFBTyxFQUFFLElBQXJCO0FBQTBCLGFBQUssRUFBQyxRQUFoQztBQUF5QyxvQkFBWSxNQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBSUtlLEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUN2Qiw0QkFDSSw4REFBQyxrREFBRDtBQUFBLGtDQUNJLDhEQUFDLHlEQUFEO0FBQVksbUJBQU8sRUFBQyxJQUFwQjtBQUFBLHVCQUNLRCxJQUFJLENBQUNFLElBRFYsT0FDaUJGLElBQUksQ0FBQ1osSUFEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBSUksOERBQUMseURBQUQ7QUFBWSxtQkFBTyxFQUFDLFdBQXBCO0FBQUEsc0JBQ0tZLElBQUksQ0FBQ0c7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLGVBT0ksOERBQUMseURBQUQ7QUFBWSxtQkFBTyxFQUFDLFdBQXBCO0FBQUEsc0JBQ0tILElBQUksQ0FBQ0k7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBKLGVBVUksOERBQUMsa0RBQUQ7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSx1QkFDQ1gsUUFBUSxJQUFJTyxJQUFJLENBQUNLLEdBQWpCLGdCQUNHLDhEQUFDLHFEQUFEO0FBQVEscUJBQU8sRUFBRztBQUFBLHVCQUFNWCxXQUFXLENBQUMsRUFBRCxDQUFqQjtBQUFBLGVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURILGdCQUtHLDhEQUFDLHFEQUFEO0FBQVEscUJBQU8sRUFBRztBQUFBLHVCQUFNQSxXQUFXLENBQUNNLElBQUksQ0FBQ0ssR0FBTixDQUFqQjtBQUFBLGVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5KLEVBVUtaLFFBQVEsSUFBSU8sSUFBSSxDQUFDSyxHQUFqQixpQkFDRDtBQUFBLHNDQUNJLDhEQUFDLHlEQUFEO0FBQVksdUJBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUlJLDhEQUFDLHlEQUFEO0FBQVksdUJBQU8sRUFBQyxPQUFwQjtBQUFBLHdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLFFBQ3NDTCxJQUFJLENBQUNNLFVBQUwsQ0FBZ0JDLGFBRHREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQXFDUCxPQXRDSSxDQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQW1ESDs7R0E3RHVCakIsVTtVQUdKWixTOzs7S0FISVksVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mbGlnaHQvW3NsdWddLjQ1NTAyZTVlMzg1YTNhZjM4OWJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydHtDb250YWluZXIsIFR5cG9ncmFwaHksIEJveCwgQnV0dG9uLCBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlQ29udGFpbmVyLCBUYWJsZUhlYWQsIFRhYmxlUm93fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7IG1ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6e1xuICAgICAgICBtYXJnaW5Cb3R0b206JzcwcHgnXG4gICAgfSxcbiAgICB3aW5lTmFtZToge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgICBXaWR0aDogJzEwMCUnLFxuICAgIH0sXG59KSlcblxuZnVuY3Rpb24gd2luZURhdGEobmFtZSwgYW1vdW50KXtcbiAgICByZXR1cm4ge25hbWUsIGFtb3VudH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmxpZ2h0TGlzdChwcm9wcykge1xuICAgIGNvbnN0IFsgbW9yZUluZm8sIHNldE1vcmVJbmZvXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gICAgXG5cbiAgICBjb25zdCB3aW5lcyA9IHByb3BzLnByb3BzXG4gICAgY29uc29sZS5sb2coJ2FjY29yZGlvbiBwcm9wcycsIHdpbmVzKVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudCA9J2g0JyBhbGlnbj0nY2VudGVyJyBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICAgICAgQm9yZGVhdXggRmxpZ2h0XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICB7d2luZXMubWFwKCh3aW5lLGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3aW5lLnllYXJ9IHt3aW5lLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3aW5lLnNwZWNpYWxBdHRyaWJ1dGV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2luZS5kZXNjcmlwdGlvbn0gXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNvbXBvbmVudD0nZGl2JyA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9yZUluZm8gPT0gd2luZS5faWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz0geygpID0+IHNldE1vcmVJbmZvKCcnKSB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXNzIEluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPSB7KCkgPT4gc2V0TW9yZUluZm8od2luZS5faWQpIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vcmUgSW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb3JlSW5mbyA9PSB3aW5lLl9pZCAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRpdGlvbmFsIEluZm9ybWF0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+QmFycmVsIFByb2dyYW08L3N0cm9uZz46IHt3aW5lLndpbmVNYWtpbmcuYmFycmVsUHJvZ3JhbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgKSBcbiAgICAgICAgICAgIFxuICAgICAgICB9KX1cbiAgICAgICAgXG5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9