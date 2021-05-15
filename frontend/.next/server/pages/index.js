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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_card_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-card-carousel */ "react-card-carousel");
/* harmony import */ var react_card_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_card_carousel__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\MyCarousel\\index.js";




class MyCarousel extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static get CONTAINER_STYLE() {
    return {
      position: "",
      height: "",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle",
      bottom: '10px'
    };
  }

  static get CARD_STYLE() {
    return {
      height: "200px",
      width: "200px",
      paddingTop: "80px",
      textAlign: "center",
      background: "#52C0F5",
      color: "#FFF",
      fontFamily: "sans-serif",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "10px",
      boxSizing: "border-box"
    };
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: MyCarousel.CONTAINER_STYLE,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_card_carousel__WEBPACK_IMPORTED_MODULE_3___default()), {
        autoplay: true,
        autoplay_speed: 2500,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: MyCarousel.CARD_STYLE,
          children: "First Card"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: MyCarousel.CARD_STYLE,
          children: "Second Card"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: MyCarousel.CARD_STYLE,
          children: "Third Card"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: MyCarousel.CARD_STYLE,
          children: "Fourth Card"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: MyCarousel.CARD_STYLE,
          children: "Fifth Card"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
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

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NsaWVudC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbXBvbmVudHMvQWJvdXRTZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9Ib21lQmFubmVyL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9NeUNhcm91c2VsL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9UZWFtL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAc2FuaXR5L2NsaWVudFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiQHNhbml0eS9pbWFnZS11cmxcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcImdyb3FcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC1jYXJkLWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsInByb2plY3RJZCIsImRhdGFzZXQiLCJ1c2VDZG4iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJhYm91dCIsInRleHRBbGlnbiIsIm1hcmdpbiIsIkFib3V0U2VjdGlvbiIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJpbWFnZSIsInJvb3QiLCJkaXNwbGF5IiwiYmFja2dyb3VuZCIsImhlaWdodCIsIndpZHRoIiwicG9zaXRpb24iLCJib3JkZXJCb3R0b20iLCJib3JkZXJSaWdodCIsInRleHRCYWNrZ3JvdW5kIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsImJhY2tHcm91bmRDb2xvciIsImJvcmRlciIsInBhZGRpbmciLCJiYWNrZHJvcEZpbHRlciIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsIkhvbWVCYW5uZXIiLCJuYW1lIiwiZmlyc3RJdGVtIiwiTXlDYXJvdXNlbCIsIkNvbXBvbmVudCIsIkNPTlRBSU5FUl9TVFlMRSIsImZsZXgiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJib3R0b20iLCJDQVJEX1NUWUxFIiwicGFkZGluZ1RvcCIsImNvbG9yIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsImJveFNpemluZyIsInJlbmRlciIsImJhY2tncm91bmRDb2xvciIsInN0YWZmQ29udGFpbmVyIiwiaGVhZGluZyIsInBvcyIsIm1hcmdpbkJvdHRvbSIsIlRlYW0iLCJUeXBvZ3JhcGh5IiwiSW5kZXgiLCJ3aW5lcnkiLCJ0ZWFtIiwiZ2V0SW5pdGlhbFByb3BzIiwiZ3JvcSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSwrREFBZUEscURBQVksQ0FBQztBQUMxQkMsV0FBUyxFQUFFLFVBRGU7QUFDSDtBQUN2QkMsU0FBTyxFQUFFLFlBRmlCO0FBRUg7QUFDdkJDLFFBQU0sRUFBRSxJQUhrQixDQUdiOztBQUhhLENBQUQsQ0FBM0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBR0EsTUFBTUMsU0FBUyxHQUFHQyxvRUFBVSxDQUFFQyxLQUFELEtBQVk7QUFDckNDLE9BQUssRUFBRTtBQUNIQyxhQUFTLEVB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R0UsOERBQUMscURBQUQ7QUFBTSxXQUFLLEVBQUlDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVFILENBWEQ7O0FBYUFGLEtBQUssQ0FBQ0csZUFBTixHQUF3QixhQUFhO0FBQ25DRixRQUFNLEVBQUUsTUFBTTlDLGtEQUFBLENBQWFpRCw2Q0FBSztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBakJnQjtBQURxQixDQUFiLENBQXhCOztBQXFCQSwrREFBZUosS0FBZixFOzs7Ozs7Ozs7OztBQzVDQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNsaWVudC5qc1xyXG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gJ0BzYW5pdHkvY2xpZW50J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2FuaXR5Q2xpZW50KHtcclxuICBwcm9qZWN0SWQ6ICdpZHMxcHZraycsIC8vIHlvdSBjYW4gZmluZCB0aGlzIGluIHNhbml0eS5qc29uXHJcbiAgZGF0YXNldDogJ3Byb2R1Y3Rpb24nLCAvLyBvciB0aGUgbmFtZSB5b3UgY2hvc2UgaW4gc3RlcCAxXHJcbiAgdXNlQ2RuOiB0cnVlIC8vIGBmYWxzZWAgaWYgeW91IHdhbnQgdG8gZW5zdXJlIGZyZXNoIGRhdGFcclxufSlcclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7Qm94LCBDb250YWluZXIsIFR5cG9ncmFwaHl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIGFib3V0OiB7XHJcbiAgICAgICAgdGV4dEFsaWduOidqdXN0aWZ5JyxcclxuICAgICAgICBtYXJnaW46ICc3cHgnXHJcbiAgICB9XHJcbn0pKVxyXG5cclxuY29uc3QgQWJvdXRTZWN0aW9uID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7YWJvdXR9ID0gcHJvcHMucHJvcHNcclxuICAgIGNvbnNvbGUubG9nKGFib3V0KVxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpIFxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQgPSAnc3VidGl0bGUxJyBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5hYm91dH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2Fib3V0fVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0U2VjdGlvbjsiLCIvL2ZvciBlYXN5IGltYWdlc1xyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJztcclxuXHJcbi8vbWF0ZXJpYWxVaSBjb21wb25lbnRzXHJcbmltcG9ydCB7Qm94LCBHcmlkLCBUeXBvZ3JhcGh5LCBCdXR0b24sIFBhcGVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCc7XHJcblxyXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcclxufVxyXG5cclxuLy9zdHlsZXNcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIC8vIHdpZHRoOiAnMTAwJSdcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDAsXHJcbiAgICAgICAgd2lkdGg6ICcxMDB2dycsXHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnZG91YmxlIDE1cHggI2FiNWMwMCcsXHJcbiAgICAgICAgYm9yZGVyUmlnaHQ6ICdub25lJ1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIHRleHRCYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgd2lkdGg6ICc3MCUnLFxyXG4gICAgICAgIHRvcDogJzIydmgnLFxyXG4gICAgICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgICAgICAgYmFja0dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgYm9yZGVyOiAnMTBweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCknLFxyXG4gICAgICAgIHBhZGRpbmc6JzVweCA1cHggNXB4IDVweCcsXHJcbiAgICAgICAgYmFja2Ryb3BGaWx0ZXI6ICdibHVyKDZweCknLFxyXG4gICAgICAgIGJveFNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMC41NikgMHB4IDIycHggNzBweCA0cHgnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzI1JSAxMCU7J1xyXG4gICAgfSxcclxuXHJcbn0pKTtcclxuXHJcblxyXG5jb25zdCBIb21lQmFubmVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7bmFtZSxpbWFnZX0gPSBwcm9wcy5wcm9wc1xyXG4gICAgY29uc29sZS5sb2coJ2hvbWViYW5uZXInLCBwcm9wcylcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICAgIFxyXG4gICAgLy8gY29uc29sZS5sb2cobmFtZSwgaW1hZ2UpXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEJveCBjb21wb25lbnQ9ICdkaXYnIGRpc3BsYXkgPSAnYmxvY2snID5cclxuICAgICAgICAgICAgPEJveCBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tncm91bmR9XHJcbiAgICAgICAgICAgIGNvbXBvbmVudD0naW1nJ1xyXG4gICAgICAgICAgICBzcmMgPSB7dXJsRm9yKGltYWdlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxHcmlkIFxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9IHtjbGFzc2VzLnRleHRCYWNrZ3JvdW5kfVxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcclxuICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBzcGFjaW5nPXsxfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY29tcG9uZW50PSdoMycgeHM9ezEyfSBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5maXJzdEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2VsY29tZSB0byBcclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY29tcG9uZW50PSdoMicgeHM9ezEyfSBjb2xvciA9ICcjZmZmJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IEZsaWdodFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVCYW5uZXIiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBSZWFjdENhcmRDYXJvdXNlbCBmcm9tIFwicmVhY3QtY2FyZC1jYXJvdXNlbFwiO1xyXG5cclxuY2xhc3MgTXlDYXJvdXNlbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGdldCBDT05UQUlORVJfU1RZTEUoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwb3NpdGlvbjogXCJcIixcclxuICAgICAgaGVpZ2h0OiBcIlwiLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBmbGV4OiAxLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgYWxpZ25JdGVtczogXCJtaWRkbGVcIixcclxuICAgICAgYm90dG9tOiAnMTBweCdcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IENBUkRfU1RZTEUoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBoZWlnaHQ6IFwiMjAwcHhcIixcclxuICAgICAgd2lkdGg6IFwiMjAwcHhcIixcclxuICAgICAgcGFkZGluZ1RvcDogXCI4MHB4XCIsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgYmFja2dyb3VuZDogXCIjNTJDMEY1XCIsXHJcbiAgICAgIGNvbG9yOiBcIiNGRkZcIixcclxuICAgICAgZm9udEZhbWlseTogXCJzYW5zLXNlcmlmXCIsXHJcbiAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcclxuICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIlxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e015Q2Fyb3VzZWwuQ09OVEFJTkVSX1NUWUxFfT5cclxuICAgICAgICA8UmVhY3RDYXJkQ2Fyb3VzZWwgYXV0b3BsYXk9e3RydWV9IGF1dG9wbGF5X3NwZWVkPXsyNTAwfT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e015Q2Fyb3VzZWwuQ0FSRF9TVFlMRX0+Rmlyc3QgQ2FyZDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17TXlDYXJvdXNlbC5DQVJEX1NUWUxFfT5TZWNvbmQgQ2FyZDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17TXlDYXJvdXNlbC5DQVJEX1NUWUxFfT5UaGlyZCBDYXJkPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtNeUNhcm91c2VsLkNBUkRfU1RZTEV9PkZvdXJ0aCBDYXJkPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtNeUNhcm91c2VsLkNBUkRfU1RZTEV9PkZpZnRoIENhcmQ8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0Q2FyZENhcm91c2VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUNhcm91c2VsIiwiaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge0JveCwgR3JpZCwgQ2FyZCwgQXZhdGFyLENhcmRBY3Rpb25zLCBDYXJkQ29udGVudCwgVHlwb2dyYXBoeSwgQnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBNeUNhcm91c2VsIGZyb20gJy4uL015Q2Fyb3VzZWwnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICBcclxuICAgIHJvb3Q6e1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIC8vIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzU1NDI4NydcclxuXHJcbiAgICB9LFxyXG4gICAgc3RhZmZDb250YWluZXI6IHtcclxuXHJcbiAgICB9LFxyXG4gICAgICBoZWFkaW5nOiB7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICB9LFxyXG4gICAgICBwb3M6IHtcclxuICAgICAgICBtYXJnaW5Cb3R0b206IDEyLFxyXG4gICAgICB9LFxyXG5cclxufSkpO1xyXG5cclxuXHJcblxyXG5jb25zdCBUZWFtID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZSA9IHtjbGFzc2VzLnN0YWZmQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBjb21wb25lbnQ9IHtUeXBvZ3JhcGh5fSB2YXJpYW50ID0gJ2gzJyBjbGFzc05hbWU9IHtjbGFzc2VzLmhlYWRpbmd9PlxyXG4gICAgICAgICAgICAgIE1lZXQgb3VyIFRlYW1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIGNvbXBvbmVudD0nZGl2Jz5cclxuICAgICAgICAgICAgICA8TXlDYXJvdXNlbC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVhbTsiLCJpbXBvcnQgSG9tZUJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0hvbWVCYW5uZXInO1xuaW1wb3J0IEFib3V0U2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0Fib3V0U2VjdGlvbic7XG5pbXBvcnQgVGVhbSBmcm9tICcuLi9jb21wb25lbnRzL1RlYW0nO1xuXG5cbmltcG9ydCBncm9xIGZyb20gJ2dyb3EnO1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9jbGllbnQnO1xuXG5cblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge3dpbmVyeX0gPSBwcm9wc1xuICBjb25zdCB0ZWFtID0gd2luZXJ5LnRlYW1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhvbWVCYW5uZXIgcHJvcHMgPSB7d2luZXJ5fS8+XG4gICAgICAgIDxBYm91dFNlY3Rpb24gcHJvcHMgPSB7d2luZXJ5fS8+XG4gICAgICAgIDxUZWFtIHByb3BzID0ge3RlYW19Lz5cbiAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xuICB3aW5lcnk6IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYFxuICAqW190eXBlID09IFwid2luZXJ5XCJdWzBdIHtcbiAgICBuYW1lLFxuICAgIGFib3V0LFxuICAgIGltYWdlLFxuICAgIFwidGVhbVwiOiBzdGFmZltdLT4ge1xuICAgICAgbmFtZSwgXG4gICAgICBzdGFmZkltYWdlLFxuICAgICAgcG9zaXRpb24sXG4gICAgICBmYXZvcml0ZVdpbmUsXG4gICAgICBkZXNjcmlwdGlvblxuICAgIH0sXG4gICAgXCJmbGlnaHRzXCI6IGZsaWdodHNbXS0+e1xuICAgICAgbmFtZSxcbiAgICAgIHNsdWdcbiAgICB9XG4gIH1cbiAgYClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzYW5pdHkvY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2ltYWdlLXVybFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JvcVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNhcmQtY2Fyb3VzZWxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9