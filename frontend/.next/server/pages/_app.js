(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Nav/index.js":
/*!*********************************!*\
  !*** ./components/Nav/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Restore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Restore */ "@material-ui/icons/Restore");
/* harmony import */ var _material_ui_icons_Restore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Restore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ "@material-ui/icons/LocationOn");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\Nav\\index.js";







const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)({
  root: {
    width: '100%'
  }
});

const Nav = () => {
  const classes = useStyles();
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.AppBar, {
      position: "fixed",
      color: "primary",
      style: {
        top: "auto",
        bottom: 0
      },
      component: "footer",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.BottomNavigation, {
        value: value,
        onChange: (event, newValue) => {
          console.log(value);
          setValue(newValue);
          console.log(value);
        },
        showLabels: true,
        className: classes.root,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.BottomNavigationAction, {
          label: "Recents",
          icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Restore__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 67
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.BottomNavigationAction, {
          label: "Favorites",
          icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 69
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.BottomNavigationAction, {
          label: "Nearby",
          icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 66
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MyApp; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/theme */ "./src/theme.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav/index.js");

var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp(props) {
  const {
    Component,
    pageProps
  } = props;
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Cuda App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {
      theme: _src_theme__WEBPACK_IMPORTED_MODULE_6__.default,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
MyApp.propTypes = {
  Component: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().elementType.isRequired),
  pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired)
};

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createMuiTheme)({
  //cuda purple #554287
  pallette: {
    primary: {
      dark: '#291a59',
      main: '#554287',
      light: '#856db7'
    },
    secondary: {
      main: '#ab5c00'
    }
  } //cuda gold #ab5c00

});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/CssBaseline");;

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/styles");;

/***/ }),

/***/ "@material-ui/icons/Favorite":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Favorite" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Favorite");;

/***/ }),

/***/ "@material-ui/icons/LocationOn":
/*!************************************************!*\
  !*** external "@material-ui/icons/LocationOn" ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/LocationOn");;

/***/ }),

/***/ "@material-ui/icons/Restore":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Restore" ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Restore");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbXBvbmVudHMvTmF2L2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy90aGVtZS5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Mb2NhdGlvbk9uXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVzdG9yZVwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJ3aWR0aCIsIk5hdiIsImNsYXNzZXMiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJ0b3AiLCJib3R0b20iLCJldmVudCIsIm5ld1ZhbHVlIiwiY29uc29sZSIsImxvZyIsIk15QXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJSZWFjdCIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsInRoZW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiaXNSZXF1aXJlZCIsImNyZWF0ZU11aVRoZW1lIiwicGFsbGV0dGUiLCJwcmltYXJ5IiwiZGFyayIsIm1haW4iLCJsaWdodCIsInNlY29uZGFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDekJDLE1BQUksRUFBRTtBQUNGQyxTQUFLLEVBQUU7QUFETDtBQURtQixDQUFELENBQTVCOztBQU1BLE1BQU1DLEdBQUcsR0FBRyxNQUFNO0FBQ2QsUUFBTUMsT0FBTyxHQUFHTCxTQUFTLEVBQXpCO0FBQ0EsUUFBTTtBQUFBLE9BQUNNLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQywrQ0FBUSxDQUFDLENBQUQsQ0FBbEM7QUFFQSxzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLHFEQUFEO0FBQVEsY0FBUSxFQUFDLE9BQWpCO0FBQXlCLFdBQUssRUFBQyxTQUEvQjtBQUF5QyxXQUFLLEVBQUU7QUFBQ0MsV0FBRyxFQUFFLE1BQU47QUFBY0MsY0FBTSxFQUFFO0FBQXRCLE9BQWhEO0FBQTBFLGVBQVMsRUFBQyxRQUFwRjtBQUFBLDZCQUNJLDhEQUFDLCtEQUFEO0FBQ0EsYUFBSyxFQUFFSixLQURQO0FBRUEsZ0JBQVEsRUFBRSxDQUFDSyxLQUFELEVBQVFDLFFBQVIsS0FBcUI7QUFDM0JDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWVIsS0FBWjtBQUNBQyxrQkFBUSxDQUFDSyxRQUFELENBQVI7QUFDQUMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZUixLQUFaO0FBQ0gsU0FORDtBQU9BLGtCQUFVLE1BUFY7QUFRQSxpQkFBUyxFQUFFRCxPQUFPLENBQUNILElBUm5CO0FBQUEsZ0NBV0ksOERBQUMscUVBQUQ7QUFBd0IsZUFBSyxFQUFDLFNBQTlCO0FBQXdDLGNBQUksZUFBRSw4REFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWEosZUFZSSw4REFBQyxxRUFBRDtBQUF3QixlQUFLLEVBQUMsV0FBOUI7QUFBMEMsY0FBSSxlQUFFLDhEQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFaSixlQWFJLDhEQUFDLHFFQUFEO0FBQXdCLGVBQUssRUFBQyxRQUE5QjtBQUF1QyxjQUFJLGVBQUUsOERBQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUF3QkgsQ0E1QkQ7O0FBOEJBLCtEQUFlRSxHQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSWUsU0FBU1csS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ25DLFFBQU07QUFBRUMsYUFBRjtBQUFhQztBQUFiLE1BQTJCRixLQUFqQztBQUdBRyx3REFBQSxDQUFnQixNQUFNO0FBQ3BCO0FBQ0EsVUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQWxCOztBQUNBLFFBQUlGLFNBQUosRUFBZTtBQUNiQSxlQUFTLENBQUNHLGFBQVYsQ0FBd0JDLFdBQXhCLENBQW9DSixTQUFwQztBQUNEO0FBQ0YsR0FORCxFQU1HLEVBTkg7QUFRQSxzQkFDRSw4REFBQyx1REFBRDtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFLDhEQUFDLG1FQUFEO0FBQWUsV0FBSyxFQUFFSywrQ0FBdEI7QUFBQSw4QkFFRSw4REFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRSw4REFBQyxTQUFELG9CQUFlUCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEO0FBRURILEtBQUssQ0FBQ1csU0FBTixHQUFrQjtBQUNoQlQsV0FBUyxFQUFFVSwwRUFESztBQUVoQlQsV0FBUyxFQUFFUyxxRUFBMkJDO0FBRnRCLENBQWxCLEM7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBRUEsTUFBTUgsS0FBSyxHQUFHSSx3RUFBYyxDQUFDO0FBQ3pCO0FBQ0FDLFVBQVEsRUFBRTtBQUNOQyxXQUFPLEVBQUU7QUFDTEMsVUFBSSxFQUFFLFNBREQ7QUFFTEMsVUFBSSxFQUFDLFNBRkE7QUFHTEMsV0FBSyxFQUFFO0FBSEYsS0FESDtBQU1OQyxhQUFTLEVBQUU7QUFDUEYsVUFBSSxFQUFFO0FBREM7QUFOTCxHQUZlLENBWXpCOztBQVp5QixDQUFELENBQTVCO0FBZUEsK0RBQWVSLEtBQWYsRTs7Ozs7Ozs7Ozs7QUNqQkEsK0M7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7Qm90dG9tTmF2aWdhdGlvbiwgQm90dG9tTmF2aWdhdGlvbkFjdGlvbiwgQXBwQmFyfSAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IFJlc3RvcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZXN0b3JlJztcbmltcG9ydCBGYXZvcml0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlJztcbmltcG9ydCBMb2NhdGlvbk9uSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYXRpb25Pbic7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9LFxufSk7XG5cbmNvbnN0IE5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17e3RvcDogXCJhdXRvXCIsIGJvdHRvbTogMH19IGNvbXBvbmVudD0nZm9vdGVyJz5cbiAgICAgICAgICAgICAgICA8Qm90dG9tTmF2aWdhdGlvblxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHNob3dMYWJlbHNcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cbiAgICAgICAgICAgICAgICA+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb24gbGFiZWw9XCJSZWNlbnRzXCIgaWNvbj17PFJlc3RvcmVJY29uIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cIkZhdm9yaXRlc1wiIGljb249ezxGYXZvcml0ZUljb24gLz59IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGxhYmVsPVwiTmVhcmJ5XCIgaWNvbj17PExvY2F0aW9uT25JY29uIC8+fSAvPlxuICAgICAgICAgICAgICAgIDwvQm90dG9tTmF2aWdhdGlvbj5cblxuICAgICAgICAgICAgPC9BcHBCYXI+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3JjL3RoZW1lJztcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcChwcm9wcykge1xuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSBwcm9wcztcblxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXG4gICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzcy1zZXJ2ZXItc2lkZScpO1xuICAgIGlmIChqc3NTdHlsZXMpIHtcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGpzc1N0eWxlcyk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkN1ZGEgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIm1pbmltdW0tc2NhbGU9MSwgaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgey8qIENzc0Jhc2VsaW5lIGtpY2tzdGFydCBhbiBlbGVnYW50LCBjb25zaXN0ZW50LCBhbmQgc2ltcGxlIGJhc2VsaW5lIHRvIGJ1aWxkIHVwb24uICovfVxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+XG4gICAgICAgIDxOYXY+PC9OYXY+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cblxuTXlBcHAucHJvcFR5cGVzID0ge1xuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxuICBwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07IiwiaW1wb3J0IHtjcmVhdGVNdWlUaGVtZX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gICAgLy9jdWRhIHB1cnBsZSAjNTU0Mjg3XG4gICAgcGFsbGV0dGU6IHtcbiAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgICAgZGFyazogJyMyOTFhNTknLFxuICAgICAgICAgICAgbWFpbjonIzU1NDI4NycsXG4gICAgICAgICAgICBsaWdodDogJyM4NTZkYjcnXG4gICAgICAgIH0sXG4gICAgICAgIHNlY29uZGFyeToge1xuICAgICAgICAgICAgbWFpbjogJyNhYjVjMDAnXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9jdWRhIGdvbGQgI2FiNWMwMFxufSlcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0xvY2F0aW9uT25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9SZXN0b3JlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=