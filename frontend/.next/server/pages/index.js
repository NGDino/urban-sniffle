(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ "@sanity/client");
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);
// client.js

/* harmony default export */ __webpack_exports__["default"] = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
  projectId: 'ids1pvkk',
  // you can find this in sanity.json
  dataset: 'production',
  // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data

}));

/***/ }),

/***/ "./components/AboutSection/index.js":
/*!******************************************!*\
  !*** ./components/AboutSection/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\AboutSection\\index.js";


const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(theme => ({
  topMargin: {
    height: 303
  },
  about: {
    textAlign: 'justify',
    margin: '7px'
  }
}));

const AboutSection = props => {
  const {
    about
  } = props.props;
  console.log(about);
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
      className: classes.topMargin
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Container, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        variant: "subtitle1",
        className: classes.about,
        children: about
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AboutSection);

/***/ }),

/***/ "./components/HomeBanner/index.js":
/*!****************************************!*\
  !*** ./components/HomeBanner/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ "@sanity/image-url");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client */ "./client.js");

var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\HomeBanner\\index.js";
//for easy images
 //materialUi components





function urlFor(source) {
  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(_client__WEBPACK_IMPORTED_MODULE_4__.default).image(source);
} //styles


const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(theme => ({
  root: {
    display: 'flex' // width: '100%'

  },
  background: {
    height: 300,
    // width: '100vw',
    position: 'fixed',
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
}));

const HomeBanner = props => {
  const {
    name,
    image
  } = props.props;
  const classes = useStyles(); // console.log(name, image)

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
    component: "div",
    display: "block",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
      className: classes.background,
      component: "img",
      src: urlFor(image)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
      container: true,
      className: classes.textBackground,
      direction: "column",
      justify: "center",
      alignItems: "center",
      spacing: 1,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        item: true,
        component: "h3",
        xs: 12,
        className: classes.firstItem,
        children: "Welcome to"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        item: true,
        component: "h2",
        xs: 12,
        color: "#fff",
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        item: true,
        xs: 12,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "contained",
          color: "primary",
          children: "Start Flight"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (HomeBanner);

/***/ }),

/***/ "./components/Team/index.js":
/*!**********************************!*\
  !*** ./components/Team/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\Team\\index.js";


const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  background: {
    backgroundColor: '#554287'
  }
}));

const Team = props => {
  const classes = useStyles();
  console.log('staff', props);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
      container: true,
      className: classes.background,
      direction: "row",
      alignItems: "center",
      justify: "center" // make a card
      ,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        item: true,
        component: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Card,
        xs: 5,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Avatar, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Team);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_HomeBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HomeBanner */ "./components/HomeBanner/index.js");
/* harmony import */ var _components_AboutSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AboutSection */ "./components/AboutSection/index.js");
/* harmony import */ var _components_Team__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Team */ "./components/Team/index.js");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! groq */ "groq");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client */ "./client.js");

var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\pages\\index.js";






const Index = props => {
  const {
    winery
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HomeBanner__WEBPACK_IMPORTED_MODULE_1__.default, {
      props: winery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AboutSection__WEBPACK_IMPORTED_MODULE_2__.default, {
      props: winery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Team__WEBPACK_IMPORTED_MODULE_3__.default, {
      props: winery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }, undefined);
};

Index.getInitialProps = async () => ({
  winery: await _client__WEBPACK_IMPORTED_MODULE_5__.default.fetch((groq__WEBPACK_IMPORTED_MODULE_4___default())`
  *[_type == "winery"][0]
  `)
});

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/styles");;

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@sanity/client");;

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@sanity/image-url");;

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("groq");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NsaWVudC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbXBvbmVudHMvQWJvdXRTZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9Ib21lQmFubmVyL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9UZWFtL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAc2FuaXR5L2NsaWVudFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiQHNhbml0eS9pbWFnZS11cmxcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcImdyb3FcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsInByb2plY3RJZCIsImRhdGFzZXQiLCJ1c2VDZG4iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJ0b3BNYXJnaW4iLCJoZWlnaHQiLCJhYm91dCIsInRleHRBbGlnbiIsIm1hcmdpbiIsIkFib3V0U2VjdGlvbiIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJpbWFnZSIsInJvb3QiLCJkaXNwbGF5IiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyUmlnaHQiLCJ0ZXh0QmFja2dyb3VuZCIsIndpZHRoIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsImJhY2tHcm91bmRDb2xvciIsImJvcmRlciIsInBhZGRpbmciLCJiYWNrZHJvcEZpbHRlciIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsIkhvbWVCYW5uZXIiLCJuYW1lIiwiZmlyc3RJdGVtIiwic3BhY2luZyIsImJhY2tncm91bmRDb2xvciIsIlRlYW0iLCJDYXJkIiwiSW5kZXgiLCJ3aW5lcnkiLCJnZXRJbml0aWFsUHJvcHMiLCJncm9xIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLCtEQUFlQSxxREFBWSxDQUFDO0FBQzFCQyxXQUFTLEVBQUUsVUFEZTtBQUNIO0FBQ3ZCQyxTQUFPLEVBQUUsWUFGaUI7QUFFSDtBQUN2QkMsUUFBTSxFQUFFLElBSGtCLENBR2I7O0FBSGEsQ0FBRCxDQUEzQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFHQSxNQUFNQyxTQUFTLEdBQUdDLG9FQUFVLENBQUVDLEtBQUQsS0FBWTtBQUNyQ0MsV0FBUyxFQUFFO0FBQ1BDLFVBQU0sRUFBRTtBQURELEdBRDBCO0FBSXJDQyxPQUFLLEVBQUU7QUFDSEMsYUFBUyxFQUFDLFNBRFA7QUFFSEMsVUFBTSxFQUFFO0FBRkw7QUFKOEIsQ0FBWixDQUFELENBQTVCOztBQVVBLE1BQU1DLFlBQVksR0FBSUMsS0FBRCxJQUFXO0FBQzVCLFFBQU07QUFBQ0o7QUFBRCxNQUFVSSxLQUFLLENBQUNBLEtBQXRCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTixLQUFaO0FBQ0EsUUFBTU8sT0FBTyxHQUFHWixTQUFTLEVBQXpCO0FBRUEsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFLLGVBQVMsRUFBRVksT0FBTyxDQUFDVDtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUksOERBQUMsd0RBQUQ7QUFBQSw2QkFDSSw4REFBQyx5REFBRDtBQUFZLGVBQU8sRUFBRyxXQUF0QjtBQUFrQyxpQkFBUyxFQUFJUyxPQUFP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LEtBQUssR0FBSWpDLEtBQUQsSUFBVztBQUN2QixRQUFNO0FBQUNrQztBQUFELE1BQVdsQyxLQUFqQjtBQUNFLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsMkRBQUQ7QUFBWSxXQUFLLEVBQUlrQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsNkRBQUQ7QUFBYyxXQUFLLEVBQUlBO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRSw4REFBQyxxREFBRDtBQUFNLFdBQUssRUFBSUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBUUgsQ0FWRDs7QUFZQUQsS0FBSyxDQUFDRSxlQUFOLEdBQXdCLGFBQWE7QUFDbkNELFFBQU0sRUFBRSxNQUFNM0Isa0RBQUEsQ0FBYTZCLDZDQUFLO0FBQ2xDO0FBQ0EsR0FGZ0I7QUFEcUIsQ0FBYixDQUF4Qjs7QUFNQSwrREFBZUgsS0FBZixFOzs7Ozs7Ozs7OztBQzNCQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNsaWVudC5qc1xyXG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gJ0BzYW5pdHkvY2xpZW50J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2FuaXR5Q2xpZW50KHtcclxuICBwcm9qZWN0SWQ6ICdpZHMxcHZraycsIC8vIHlvdSBjYW4gZmluZCB0aGlzIGluIHNhbml0eS5qc29uXHJcbiAgZGF0YXNldDogJ3Byb2R1Y3Rpb24nLCAvLyBvciB0aGUgbmFtZSB5b3UgY2hvc2UgaW4gc3RlcCAxXHJcbiAgdXNlQ2RuOiB0cnVlIC8vIGBmYWxzZWAgaWYgeW91IHdhbnQgdG8gZW5zdXJlIGZyZXNoIGRhdGFcclxufSlcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7Qm94LCBDb250YWluZXIsIFR5cG9ncmFwaHl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHRvcE1hcmdpbjoge1xyXG4gICAgICAgIGhlaWdodDogMzAzLFxyXG4gICAgfSxcclxuICAgIGFib3V0OiB7XHJcbiAgICAgICAgdGV4dEFsaWduOidqdXN0aWZ5JyxcclxuICAgICAgICBtYXJnaW46ICc3cHgnXHJcbiAgICB9XHJcbn0pKVxyXG5cclxuY29uc3QgQWJvdXRTZWN0aW9uID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7YWJvdXR9ID0gcHJvcHMucHJvcHNcclxuICAgIGNvbnNvbGUubG9nKGFib3V0KVxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpIFxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMudG9wTWFyZ2lufS8+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50ID0gJ3N1YnRpdGxlMScgY2xhc3NOYW1lID0ge2NsYXNzZXMuYWJvdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHthYm91dH1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dFNlY3Rpb247IiwiLy9mb3IgZWFzeSBpbWFnZXNcclxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCc7XHJcblxyXG4vL21hdGVyaWFsVWkgY29tcG9uZW50c1xyXG5pbXBvcnQge0JveCwgR3JpZCwgVHlwb2dyYXBoeSwgQnV0dG9uLCBQYXBlcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnO1xyXG5cclxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UpIHtcclxuICAgIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpXHJcbn1cclxuXHJcbi8vc3R5bGVzXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAvLyB3aWR0aDogJzEwMCUnXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgIGhlaWdodDogMzAwLFxyXG4gICAgICAgIC8vIHdpZHRoOiAnMTAwdncnLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgIGJvcmRlckJvdHRvbTogJ2RvdWJsZSAxNXB4ICNhYjVjMDAnLFxyXG4gICAgICAgIGJvcmRlclJpZ2h0OiAnbm9uZSdcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICB0ZXh0QmFja2dyb3VuZDoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHdpZHRoOiAnNzAlJyxcclxuICAgICAgICB0b3A6ICcyMnZoJyxcclxuICAgICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gICAgICAgIGJhY2tHcm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgIGJvcmRlcjogJzEwcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpJyxcclxuICAgICAgICBwYWRkaW5nOic1cHggNXB4IDVweCA1cHgnLFxyXG4gICAgICAgIGJhY2tkcm9wRmlsdGVyOiAnYmx1cig2cHgpJyxcclxuICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDAuNTYpIDBweCAyMnB4IDcwcHggNHB4JyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICcyNSUgMTAlOydcclxuICAgIH0sXHJcblxyXG59KSk7XHJcblxyXG5cclxuY29uc3QgSG9tZUJhbm5lciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge25hbWUsaW1hZ2V9ID0gcHJvcHMucHJvcHNcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICAgIFxyXG4gICAgLy8gY29uc29sZS5sb2cobmFtZSwgaW1hZ2UpXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEJveCBjb21wb25lbnQ9ICdkaXYnIGRpc3BsYXkgPSAnYmxvY2snPlxyXG4gICAgICAgICAgICA8Qm94IFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2dyb3VuZH1cclxuICAgICAgICAgICAgY29tcG9uZW50PSdpbWcnXHJcbiAgICAgICAgICAgIHNyYyA9IHt1cmxGb3IoaW1hZ2UpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ge2NsYXNzZXMudGV4dEJhY2tncm91bmR9XHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezF9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjb21wb25lbnQ9J2gzJyB4cz17MTJ9IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpcnN0SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lIHRvIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjb21wb25lbnQ9J2gyJyB4cz17MTJ9IGNvbG9yID0gJyNmZmYnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnQgRmxpZ2h0XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZUJhbm5lciIsImltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtHcmlkLCBDYXJkLCBBdmF0YXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICcmID4gKic6IHtcclxuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzU1NDI4NydcclxuICAgIH1cclxuXHJcbn0pKTtcclxuXHJcbmNvbnN0IFRlYW0gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gICAgY29uc29sZS5sb2coJ3N0YWZmJywgcHJvcHMpXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPEdyaWQgXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBjbGFzc05hbWU9IHtjbGFzc2VzLmJhY2tncm91bmR9XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9ICdyb3cnXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXMgPSAnY2VudGVyJ1xyXG4gICAgICAgICAgICBqdXN0aWZ5PSdjZW50ZXInXHJcbiAgICAgICAgICAgIC8vIG1ha2UgYSBjYXJkXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHcmlkIFxyXG4gICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtDYXJkfVxyXG4gICAgICAgICAgICAgICAgeHMgPXs1fVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIGltYWdlIGF2YXRhciAgICovfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVhbTsiLCJpbXBvcnQgSG9tZUJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0hvbWVCYW5uZXInO1xuaW1wb3J0IEFib3V0U2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0Fib3V0U2VjdGlvbic7XG5pbXBvcnQgVGVhbSBmcm9tICcuLi9jb21wb25lbnRzL1RlYW0nO1xuXG5cbmltcG9ydCBncm9xIGZyb20gJ2dyb3EnO1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9jbGllbnQnO1xuXG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHt3aW5lcnl9ID0gcHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhvbWVCYW5uZXIgcHJvcHMgPSB7d2luZXJ5fS8+XG4gICAgICAgIDxBYm91dFNlY3Rpb24gcHJvcHMgPSB7d2luZXJ5fS8+XG4gICAgICAgIDxUZWFtIHByb3BzID0ge3dpbmVyeX0vPlxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICApXG59XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XG4gIHdpbmVyeTogYXdhaXQgY2xpZW50LmZldGNoKGdyb3FgXG4gICpbX3R5cGUgPT0gXCJ3aW5lcnlcIl1bMF1cbiAgYClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzYW5pdHkvY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2ltYWdlLXVybFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JvcVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9