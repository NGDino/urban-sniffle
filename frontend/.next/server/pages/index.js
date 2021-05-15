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
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Container, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        variant: "subtitle1",
        className: classes.about,
        children: about
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
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
}));

const HomeBanner = props => {
  const {
    name,
    image
  } = props.props;
  console.log('homebanner', props);
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
      lineNumber: 53,
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
        lineNumber: 66,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        item: true,
        component: "h2",
        xs: 12,
        color: "#fff",
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
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
          lineNumber: 73,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (HomeBanner);

/***/ }),

/***/ "./components/MyCarousel/index.js":
/*!****************************************!*\
  !*** ./components/MyCarousel/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_card_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-card-carousel */ "react-card-carousel");
/* harmony import */ var react_card_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_card_carousel__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\MyCarousel\\index.js";



class MyCarousel extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static get CARD_STYLE() {
    return {
      height: '200px',
      width: '200px',
      paddingTop: '80px',
      textAlign: 'center',
      background: '#52C0F5',
      color: '#FFF',
      fontSize: '12px',
      textTransform: 'uppercase',
      borderRadius: '10px',
      bottom: '10px'
    };
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_card_carousel__WEBPACK_IMPORTED_MODULE_2___default()), {
      autoplay: true,
      autoplay_speed: 2500,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: MyCarousel.CARD_STYLE,
        children: "First Card"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: MyCarousel.CARD_STYLE,
        children: "Second Card"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: MyCarousel.CARD_STYLE,
        children: "Third Card"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: MyCarousel.CARD_STYLE,
        children: "Fourth Card"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: MyCarousel.CARD_STYLE,
        children: "Fifth Card"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyCarousel);

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
/* harmony import */ var _MyCarousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MyCarousel */ "./components/MyCarousel/index.js");

var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\Team\\index.js";



const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(theme => ({
  root: {
    display: 'flex',
    // overflow: 'hidden',
    backgroundColor: '#554287'
  },
  staffContainer: {},
  heading: {},
  pos: {
    marginBottom: 12
  }
}));

const Team = props => {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
      container: true,
      className: classes.staffContainer,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        item: true,
        component: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography,
        variant: "h3",
        className: classes.heading,
        children: "Meet our Team"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        item: true,
        component: "div",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MyCarousel__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
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
  const team = winery.team;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HomeBanner__WEBPACK_IMPORTED_MODULE_1__.default, {
      props: winery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AboutSection__WEBPACK_IMPORTED_MODULE_2__.default, {
      props: winery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Team__WEBPACK_IMPORTED_MODULE_3__.default, {
      props: team
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }, undefined);
};

Index.getInitialProps = async () => ({
  winery: await _client__WEBPACK_IMPORTED_MODULE_5__.default.fetch((groq__WEBPACK_IMPORTED_MODULE_4___default())`
  *[_type == "winery"][0] {
    name,
    about,
    image,
    "team": staff[]-> {
      name, 
      staffImage,
      position,
      favoriteWine,
      description
    },
    "flights": flights[]->{
      name,
      slug
    }
  }
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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-card-carousel":
/*!**************************************!*\
  !*** external "react-card-carousel" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-card-carousel");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NsaWVudC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbXBvbmVudHMvQWJvdXRTZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9Ib21lQmFubmVyL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9NeUNhcm91c2VsL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9UZWFtL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAc2FuaXR5L2NsaWVudFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiQHNhbml0eS9pbWFnZS11cmxcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcImdyb3FcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC1jYXJkLWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwidXNlQ2RuIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiYWJvdXQiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJBYm91dFNlY3Rpb24iLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwiaW1hZ2UiLCJyb290IiwiZGlzcGxheSIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJ3aWR0aCIsInBvc2l0aW9uIiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyUmlnaHQiLCJ0ZXh0QmFja2dyb3VuZCIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJiYWNrR3JvdW5kQ29sb3IiLCJib3JkZXIiLCJwYWRkaW5nIiwiYmFja2Ryb3BGaWx0ZXIiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJIb21lQmFubmVyIiwibmFtZSIsImZpcnN0SXRlbSIsIk15Q2Fyb3VzZWwiLCJDb21wb25lbnQiLCJDQVJEX1NUWUxFIiwicGFkZGluZ1RvcCIsImNvbG9yIiwiZm9udFNpemUiLCJ0ZXh0VHJhbnNmb3JtIiwiYm90dG9tIiwicmVuZGVyIiwiYmFja2dyb3VuZENvbG9yIiwic3RhZmZDb250YWluZXIiLCJoZWFkaW5nIiwicG9zIiwibWFyZ2luQm90dG9tIiwiVGVhbSIsIlR5cG9ncmFwaHkiLCJJbmRleCIsIndpbmVyeSIsInRlYW0iLCJnZXRJbml0aWFsUHJvcHMiLCJncm9xIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLCtEQUFlQSxxREFBWSxDQUFDO0FBQzFCQyxXQUFTLEVBQUUsVUFEZTtBQUNIO0FBQ3ZCQyxTQUFPLEVBQUUsWUFGaUI7QUFFSDtBQUN2QkMsUUFBTSxFQUFFLElBSGtCLENBR2I7O0FBSGEsQ0FBRCxDQUEzQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFHQSxNQUFNQyxTQUFTLEdBQUdDLG9FQUFVLENBQUVDLEtBQUQsS0FBWTtBQUNyQ0MsT0FBSyxFQUFFO0FBQ0hDLGFBQVMsRUFBQyxTQURQO0FBRUhDLFVBQU0sRUFBRTtBQUZMO0FBRDhCLENBQVosQ0FBRCxDQUE1Qjs7QUFPQSxNQUFNQyxZQUFZLEdBQUlDLEtBQUQsSUFBVztBQUM1QixRQUFNO0FBQUNKO0FBQUQsTUFBVUksS0FBSyxDQUFDQSxL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OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY2xpZW50LmpzXHJcbmltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSAnQHNhbml0eS9jbGllbnQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzYW5pdHlDbGllbnQoe1xyXG4gIHByb2plY3RJZDogJ2lkczFwdmtrJywgLy8geW91IGNhbiBmaW5kIHRoaXMgaW4gc2FuaXR5Lmpzb25cclxuICBkYXRhc2V0OiAncHJvZHVjdGlvbicsIC8vIG9yIHRoZSBuYW1lIHlvdSBjaG9zZSBpbiBzdGVwIDFcclxuICB1c2VDZG46IHRydWUgLy8gYGZhbHNlYCBpZiB5b3Ugd2FudCB0byBlbnN1cmUgZnJlc2ggZGF0YVxyXG59KVxyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtCb3gsIENvbnRhaW5lciwgVHlwb2dyYXBoeX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgYWJvdXQ6IHtcclxuICAgICAgICB0ZXh0QWxpZ246J2p1c3RpZnknLFxyXG4gICAgICAgIG1hcmdpbjogJzdweCdcclxuICAgIH1cclxufSkpXHJcblxyXG5jb25zdCBBYm91dFNlY3Rpb24gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHthYm91dH0gPSBwcm9wcy5wcm9wc1xyXG4gICAgY29uc29sZS5sb2coYWJvdXQpXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCkgXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudCA9ICdzdWJ0aXRsZTEnIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmFib3V0fT5cclxuICAgICAgICAgICAgICAgICAgICB7YWJvdXR9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRTZWN0aW9uOyIsIi8vZm9yIGVhc3kgaW1hZ2VzXHJcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xyXG5cclxuLy9tYXRlcmlhbFVpIGNvbXBvbmVudHNcclxuaW1wb3J0IHtCb3gsIEdyaWQsIFR5cG9ncmFwaHksIEJ1dHRvbiwgUGFwZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50JztcclxuXHJcbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XHJcbiAgICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKVxyXG59XHJcblxyXG4vL3N0eWxlc1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgLy8gd2lkdGg6ICcxMDAlJ1xyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICBoZWlnaHQ6IDMwMCxcclxuICAgICAgICB3aWR0aDogJzEwMHZ3JyxcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBib3JkZXJCb3R0b206ICdkb3VibGUgMTVweCAjYWI1YzAwJyxcclxuICAgICAgICBib3JkZXJSaWdodDogJ25vbmUnXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgdGV4dEJhY2tncm91bmQ6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB3aWR0aDogJzcwJScsXHJcbiAgICAgICAgdG9wOiAnMjJ2aCcsXHJcbiAgICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICAgICAgICBiYWNrR3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICBib3JkZXI6ICcxMHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40KScsXHJcbiAgICAgICAgcGFkZGluZzonNXB4IDVweCA1cHggNXB4JyxcclxuICAgICAgICBiYWNrZHJvcEZpbHRlcjogJ2JsdXIoNnB4KScsXHJcbiAgICAgICAgYm94U2hhZG93OiAncmdiYSgwLCAwLCAwLCAwLjU2KSAwcHggMjJweCA3MHB4IDRweCcsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjUlIDEwJTsnXHJcbiAgICB9LFxyXG5cclxufSkpO1xyXG5cclxuXHJcbmNvbnN0IEhvbWVCYW5uZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtuYW1lLGltYWdlfSA9IHByb3BzLnByb3BzXHJcbiAgICBjb25zb2xlLmxvZygnaG9tZWJhbm5lcicsIHByb3BzKVxyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gICAgXHJcbiAgICAvLyBjb25zb2xlLmxvZyhuYW1lLCBpbWFnZSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8Qm94IGNvbXBvbmVudD0gJ2RpdicgZGlzcGxheSA9ICdibG9jaycgPlxyXG4gICAgICAgICAgICA8Qm94IFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2dyb3VuZH1cclxuICAgICAgICAgICAgY29tcG9uZW50PSdpbWcnXHJcbiAgICAgICAgICAgIHNyYyA9IHt1cmxGb3IoaW1hZ2UpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ge2NsYXNzZXMudGV4dEJhY2tncm91bmR9XHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezF9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjb21wb25lbnQ9J2gzJyB4cz17MTJ9IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpcnN0SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lIHRvIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjb21wb25lbnQ9J2gyJyB4cz17MTJ9IGNvbG9yID0gJyNmZmYnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnQgRmxpZ2h0XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZUJhbm5lciIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdENhcmRDYXJvdXNlbCBmcm9tICdyZWFjdC1jYXJkLWNhcm91c2VsJztcclxuXHJcbmNsYXNzIE15Q2Fyb3VzZWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBzdGF0aWMgZ2V0IENBUkRfU1RZTEUoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBoZWlnaHQ6ICcyMDBweCcsXHJcbiAgICAgIHdpZHRoOiAnMjAwcHgnLFxyXG4gICAgICBwYWRkaW5nVG9wOiAnODBweCcsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGJhY2tncm91bmQ6ICcjNTJDMEY1JyxcclxuICAgICAgY29sb3I6ICcjRkZGJyxcclxuICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG4gICAgICBib3R0b206ICcxMHB4J1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdENhcmRDYXJvdXNlbCBhdXRvcGxheT17IHRydWUgfSBhdXRvcGxheV9zcGVlZD17IDI1MDAgfT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXsgTXlDYXJvdXNlbC5DQVJEX1NUWUxFIH0+XHJcbiAgICAgICAgICBGaXJzdCBDYXJkXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17IE15Q2Fyb3VzZWwuQ0FSRF9TVFlMRSB9PlxyXG4gICAgICAgICAgU2Vjb25kIENhcmRcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXsgTXlDYXJvdXNlbC5DQVJEX1NUWUxFIH0+XHJcbiAgICAgICAgICBUaGlyZCBDYXJkXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17IE15Q2Fyb3VzZWwuQ0FSRF9TVFlMRSB9PlxyXG4gICAgICAgICAgRm91cnRoIENhcmRcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXsgTXlDYXJvdXNlbC5DQVJEX1NUWUxFIH0+XHJcbiAgICAgICAgICBGaWZ0aCBDYXJkXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUmVhY3RDYXJkQ2Fyb3VzZWw+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlDYXJvdXNlbDtcclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtCb3gsIEdyaWQsIENhcmQsIEF2YXRhcixDYXJkQWN0aW9ucywgQ2FyZENvbnRlbnQsIFR5cG9ncmFwaHksIEJ1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgTXlDYXJvdXNlbCBmcm9tICcuLi9NeUNhcm91c2VsJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgXHJcbiAgICByb290OntcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAvLyBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM1NTQyODcnXHJcblxyXG4gICAgfSxcclxuICAgIHN0YWZmQ29udGFpbmVyOiB7XHJcblxyXG4gICAgfSxcclxuICAgICAgaGVhZGluZzoge1xyXG5cclxuICAgICAgICBcclxuICAgICAgfSxcclxuICAgICAgcG9zOiB7XHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAxMixcclxuICAgICAgfSxcclxuXHJcbn0pKTtcclxuXHJcblxyXG5cclxuY29uc3QgVGVhbSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5zdGFmZkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gY29tcG9uZW50PSB7VHlwb2dyYXBoeX0gdmFyaWFudCA9ICdoMycgY2xhc3NOYW1lPSB7Y2xhc3Nlcy5oZWFkaW5nfT5cclxuICAgICAgICAgICAgICBNZWV0IG91ciBUZWFtXHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBjb21wb25lbnQ9J2Rpdic+XHJcbiAgICAgICAgICAgICAgPE15Q2Fyb3VzZWwvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlYW07IiwiaW1wb3J0IEhvbWVCYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lQmFubmVyJztcbmltcG9ydCBBYm91dFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9BYm91dFNlY3Rpb24nO1xuaW1wb3J0IFRlYW0gZnJvbSAnLi4vY29tcG9uZW50cy9UZWFtJztcblxuXG5pbXBvcnQgZ3JvcSBmcm9tICdncm9xJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vY2xpZW50JztcblxuXG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHt3aW5lcnl9ID0gcHJvcHNcbiAgY29uc3QgdGVhbSA9IHdpbmVyeS50ZWFtXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIb21lQmFubmVyIHByb3BzID0ge3dpbmVyeX0vPlxuICAgICAgICA8QWJvdXRTZWN0aW9uIHByb3BzID0ge3dpbmVyeX0vPlxuICAgICAgICA8VGVhbSBwcm9wcyA9IHt0ZWFtfS8+XG4gICAgICBcbiAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4gKHtcbiAgd2luZXJ5OiBhd2FpdCBjbGllbnQuZmV0Y2goZ3JvcWBcbiAgKltfdHlwZSA9PSBcIndpbmVyeVwiXVswXSB7XG4gICAgbmFtZSxcbiAgICBhYm91dCxcbiAgICBpbWFnZSxcbiAgICBcInRlYW1cIjogc3RhZmZbXS0+IHtcbiAgICAgIG5hbWUsIFxuICAgICAgc3RhZmZJbWFnZSxcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgZmF2b3JpdGVXaW5lLFxuICAgICAgZGVzY3JpcHRpb25cbiAgICB9LFxuICAgIFwiZmxpZ2h0c1wiOiBmbGlnaHRzW10tPntcbiAgICAgIG5hbWUsXG4gICAgICBzbHVnXG4gICAgfVxuICB9XG4gIGApXG59KVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNhbml0eS9pbWFnZS11cmxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyb3FcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jYXJkLWNhcm91c2VsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=