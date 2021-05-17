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
/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-material-ui-carousel */ "react-material-ui-carousel");
/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/image-url */ "@sanity/image-url");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../client */ "./client.js");

var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\MyCarousel\\index.js";






const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  }
}));

function urlFor(source) {
  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default()(_client__WEBPACK_IMPORTED_MODULE_6__.default).image(source);
}

function MyCarousel(props) {
  const members = props.props;
  console.log(members);
  const classes = useStyles();
  return (
    /*#__PURE__*/
    // <div></div>
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2___default()), {
      autoPlay: false,
      animation: "slide",
      index: 0,
      children: members.map((member, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
        item: member
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 45
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, this)
  );
}

function Item(member) {
  console.log('inside Item', member.item);
  const classes = useStyles();
  const image = urlFor(member.item.staffImage);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    container: true,
    component: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Paper,
    className: classes.root,
    alignItems: "center",
    justify: "center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
      item: true,
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Avatar, {
        className: classes.avatar,
        alt: `picture of ${member.item.name}`,
        src: image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
      item: true,
      xs: 12,
      component: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography,
      variant: "h5",
      children: member.item.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
      item: true,
      item: true,
      xs: 12,
      component: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography,
      variant: "subtitle1",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: member.item.position
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
      item: true,
      item: true,
      xs: 12,
      component: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography,
      variant: "subtitle1",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: "Favorite Wine:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, this), " ", member.item.favoriteWine]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, this);
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
    backgroundColor: '#554287',
    paddingBottom: '70px'
  },
  staffContainer: {},
  heading: {}
}));

const Team = props => {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
      container: true,
      className: classes.staffContainer,
      justify: "center",
      alignItems: "center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        item: true,
        component: _material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography,
        variant: "h4",
        className: classes.heading,
        children: "Meet our Team"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MyCarousel__WEBPACK_IMPORTED_MODULE_3__.default, {
        props: props.props
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
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

/***/ "react-material-ui-carousel":
/*!*********************************************!*\
  !*** external "react-material-ui-carousel" ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-material-ui-carousel");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NsaWVudC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbXBvbmVudHMvQWJvdXRTZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9Ib21lQmFubmVyL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9NeUNhcm91c2VsL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9UZWFtL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAc2FuaXR5L2NsaWVudFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiQHNhbml0eS9pbWFnZS11cmxcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcImdyb3FcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC1tYXRlcmlhbC11aS1jYXJvdXNlbFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwicHJvamVjdElkIiwiZGF0YXNldCIsInVzZUNkbiIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImFib3V0IiwidGV4dEFsaWduIiwibWFyZ2luIiwiQWJvdXRTZWN0aW9uIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwicm9vdCIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0Iiwid2lkdGgiLCJwb3NpdGlvbiIsImJvcmRlckJvdHRvbSIsImJvcmRlclJpZ2h0IiwidGV4dEJhY2tncm91bmQiLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwiYmFja0dyb3VuZENvbG9yIiwiYm9yZGVyIiwicGFkZGluZyIsImJhY2tkcm9wRmlsdGVyIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiSG9tZUJhbm5lciIsIm5hbWUiLCJmaXJzdEl0ZW0iLCJzcGFjaW5nIiwiYXZhdGFyIiwiTXlDYXJvdXNlbCIsIm1lbWJlcnMiLCJtYXAiLCJtZW1iZXIiLCJpIiwiSXRlbSIsIml0ZW0iLCJzdGFmZkltYWdlIiwiUGFwZXIiLCJUeXBvZ3JhcGh5IiwiZmF2b3JpdGVXaW5lIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZ0JvdHRvbSIsInN0YWZmQ29udGFpbmVyIiwiaGVhZGluZyIsIlRlYW0iLCJJbmRleCIsIndpbmVyeSIsInRlYW0iLCJnZXRJbml0aWFsUHJvcHMiLCJncm9xIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLCtEQUFlQSxxREFBWSxDQUFDO0FBQzFCQyxXQUFTLEVBQUUsVUFEZTtBQUNIO0FBQ3ZCQyxTQUFPLEVBQUUsWUFGaUI7QUFFSDtBQUN2QkMsUUFBTSxFQUFFLElBSGtCLENBR2I7O0FBSGEsQ0FBRCxDQUEzQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFHQSxNQUFNQyxTQUFTLEdBQUdDLG9FQUFVLENBQUVDLEtBQUQsS0FBWTtBQUNyQ0MsT0FBSyxFQUFFO0FBQ0hDLGFBQVMsRUFBQyxTQURQO0FBRUhDLFVBQU0sRUFBRTtBQUZMO0FBRDhCLENBQVosQ0FBRCxDQUE1Qjs7QUFPQSxNQUFNQyxZQUFZLEdBQUlDLEtBQUQsSUFBVztBQUM1QixRQUFNO0FBQUNKO0FBQUQsTUFBVUksS0FB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WEQ7O0FBYUFGLEtBQUssQ0FBQ0csZUFBTixHQUF3QixhQUFhO0FBQ25DRixRQUFNLEVBQUUsTUFBTTFDLGtEQUFBLENBQWE2Qyw2Q0FBSztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBakJnQjtBQURxQixDQUFiLENBQXhCOztBQXFCQSwrREFBZUosS0FBZixFOzs7Ozs7Ozs7OztBQzVDQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNsaWVudC5qc1xuaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tICdAc2FuaXR5L2NsaWVudCdcblxuZXhwb3J0IGRlZmF1bHQgc2FuaXR5Q2xpZW50KHtcbiAgcHJvamVjdElkOiAnaWRzMXB2a2snLCAvLyB5b3UgY2FuIGZpbmQgdGhpcyBpbiBzYW5pdHkuanNvblxuICBkYXRhc2V0OiAncHJvZHVjdGlvbicsIC8vIG9yIHRoZSBuYW1lIHlvdSBjaG9zZSBpbiBzdGVwIDFcbiAgdXNlQ2RuOiB0cnVlIC8vIGBmYWxzZWAgaWYgeW91IHdhbnQgdG8gZW5zdXJlIGZyZXNoIGRhdGFcbn0pXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7Qm94LCBDb250YWluZXIsIFR5cG9ncmFwaHl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICBhYm91dDoge1xuICAgICAgICB0ZXh0QWxpZ246J2p1c3RpZnknLFxuICAgICAgICBtYXJnaW46ICc3cHgnXG4gICAgfVxufSkpXG5cbmNvbnN0IEFib3V0U2VjdGlvbiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHthYm91dH0gPSBwcm9wcy5wcm9wc1xuICAgIGNvbnNvbGUubG9nKGFib3V0KVxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKSBcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQgPSAnc3VidGl0bGUxJyBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5hYm91dH0+XG4gICAgICAgICAgICAgICAgICAgIHthYm91dH1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0U2VjdGlvbjsiLCIvL2ZvciBlYXN5IGltYWdlc1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCc7XG5cbi8vbWF0ZXJpYWxVaSBjb21wb25lbnRzXG5pbXBvcnQge0JveCwgR3JpZCwgVHlwb2dyYXBoeSwgQnV0dG9uLCBQYXBlcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCc7XG5cbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XG4gICAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcbn1cblxuLy9zdHlsZXNcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAvLyB3aWR0aDogJzEwMCUnXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgIGhlaWdodDogMzAwLFxuICAgICAgICB3aWR0aDogJzEwMHZ3JyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJvcmRlckJvdHRvbTogJ2RvdWJsZSAxNXB4ICNhYjVjMDAnLFxuICAgICAgICBib3JkZXJSaWdodDogJ25vbmUnXG4gICAgICAgIFxuICAgIH0sXG4gICAgdGV4dEJhY2tncm91bmQ6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHdpZHRoOiAnNzAlJyxcbiAgICAgICAgdG9wOiAnMjJ2aCcsXG4gICAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgICAgICBiYWNrR3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgYm9yZGVyOiAnMTBweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCknLFxuICAgICAgICBwYWRkaW5nOic1cHggNXB4IDVweCA1cHgnLFxuICAgICAgICBiYWNrZHJvcEZpbHRlcjogJ2JsdXIoNnB4KScsXG4gICAgICAgIGJveFNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMC41NikgMHB4IDIycHggNzBweCA0cHgnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcyNSUgMTAlOydcbiAgICB9LFxuXG59KSk7XG5cblxuY29uc3QgSG9tZUJhbm5lciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHtuYW1lLGltYWdlfSA9IHByb3BzLnByb3BzXG4gICAgY29uc29sZS5sb2coJ2hvbWViYW5uZXInLCBwcm9wcylcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuICAgIFxuICAgIC8vIGNvbnNvbGUubG9nKG5hbWUsIGltYWdlKVxuICAgIHJldHVybihcbiAgICAgICAgPEJveCBjb21wb25lbnQ9ICdkaXYnIGRpc3BsYXkgPSAnYmxvY2snID5cbiAgICAgICAgICAgIDxCb3ggXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2dyb3VuZH1cbiAgICAgICAgICAgIGNvbXBvbmVudD0naW1nJ1xuICAgICAgICAgICAgc3JjID0ge3VybEZvcihpbWFnZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxHcmlkIFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ge2NsYXNzZXMudGV4dEJhY2tncm91bmR9XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBzcGFjaW5nPXsxfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjb21wb25lbnQ9J2gzJyB4cz17MTJ9IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpcnN0SXRlbX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2VsY29tZSB0byBcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjb21wb25lbnQ9J2gyJyB4cz17MTJ9IGNvbG9yID0gJyNmZmYnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnQgRmxpZ2h0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICA8L0JveD5cblxuICAgIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIb21lQmFubmVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tYXRlcmlhbC11aS1jYXJvdXNlbCdcbmltcG9ydCB7IFBhcGVyLCBUeXBvZ3JhcGh5LCBCdXR0b24sIEdyaWQsIENhcmQsIEF2YXRhcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCc7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCc7XG5cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICcmID4gKic6IHtcbiAgICAgICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGF2YXRhcjoge1xuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZygxMCksXG4gICAgICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygxMCksXG4gICAgICB9LFxufSkpXG5cbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XG4gICAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcbn1cblxuZnVuY3Rpb24gTXlDYXJvdXNlbChwcm9wcyl7XG4gICAgY29uc3QgbWVtYmVycyA9IHByb3BzLnByb3BzXG4gICAgY29uc29sZS5sb2cobWVtYmVycylcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgLy8gPGRpdj48L2Rpdj5cbiAgICAgICAgPENhcm91c2VsIGF1dG9QbGF5PXtmYWxzZX0gYW5pbWF0aW9uPSAnc2xpZGUnIGluZGV4ID0gezB9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1lbWJlcnMubWFwKCAobWVtYmVyLCBpKSA9PiA8SXRlbSBrZXk9e2l9IGl0ZW09e21lbWJlcn0gLz4gKVxuICAgICAgICAgICAgfVxuICAgICAgICA8L0Nhcm91c2VsPlxuICAgIClcbn1cblxuZnVuY3Rpb24gSXRlbShtZW1iZXIpe1xuICAgIGNvbnNvbGUubG9nKCdpbnNpZGUgSXRlbScsIG1lbWJlci5pdGVtKVxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuICAgIGNvbnN0ICBpbWFnZSA9IHVybEZvcihtZW1iZXIuaXRlbS5zdGFmZkltYWdlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGNvbXBvbmVudCA9IHtQYXBlcn0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IGFsaWduSXRlbXM9J2NlbnRlcicganVzdGlmeSA9ICdjZW50ZXInPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cyA9IHsxMn0gPlxuICAgICAgICAgICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0gYWx0ID0ge2BwaWN0dXJlIG9mICR7bWVtYmVyLml0ZW0ubmFtZX1gfSBzcmMgPSB7aW1hZ2V9Lz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjb21wb25lbnQgPXtUeXBvZ3JhcGh5fSB2YXJpYW50PSdoNSc+XG4gICAgICAgICAgICAgICAge21lbWJlci5pdGVtLm5hbWV9XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIGl0ZW0geHM9ezEyfSBjb21wb25lbnQgPSB7VHlwb2dyYXBoeX0gdmFyaWFudD0nc3VidGl0bGUxJz5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPnttZW1iZXIuaXRlbS5wb3NpdGlvbn08L3N0cm9uZz4gXG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIGl0ZW0geHM9ezEyfSBjb21wb25lbnQgPSB7VHlwb2dyYXBoeX0gdmFyaWFudD0nc3VidGl0bGUxJz5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPkZhdm9yaXRlIFdpbmU6PC9zdHJvbmc+IHttZW1iZXIuaXRlbS5mYXZvcml0ZVdpbmV9XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICBcbiAgICA8L0dyaWQ+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15Q2Fyb3VzZWw7XG5cblxuIiwiaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtCb3gsIEdyaWQsIENhcmQsIEF2YXRhcixDYXJkQWN0aW9ucywgQ2FyZENvbnRlbnQsIFR5cG9ncmFwaHksIEJ1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IE15Q2Fyb3VzZWwgZnJvbSAnLi4vTXlDYXJvdXNlbCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIFxuICAgIHJvb3Q6e1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgLy8gb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzU1NDI4NycsXG4gICAgICBwYWRkaW5nQm90dG9tOiAnNzBweCdcblxuICAgIH0sXG4gICAgc3RhZmZDb250YWluZXI6IHtcblxuICAgIH0sXG4gICAgICBoZWFkaW5nOiB7XG5cbiAgICAgICAgXG4gICAgICB9LFxuXG5cbn0pKTtcblxuXG5cblxuY29uc3QgVGVhbSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZSA9IHtjbGFzc2VzLnN0YWZmQ29udGFpbmVyfSBqdXN0aWZ5PSdjZW50ZXInIGFsaWduSXRlbXM9J2NlbnRlcic+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIGNvbXBvbmVudD0ge1R5cG9ncmFwaHl9IHZhcmlhbnQgPSAnaDQnIGNsYXNzTmFtZT0ge2NsYXNzZXMuaGVhZGluZ30+XG4gICAgICAgICAgICAgIE1lZXQgb3VyIFRlYW1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIHsvKiA8R3JpZCBpdGVtIGNvbXBvbmVudD0nZGl2Jz4gKi99XG4gICAgICAgICAgICAgIDxNeUNhcm91c2VsIHByb3BzID0ge3Byb3BzLnByb3BzfS8+XG4gICAgICAgICAgICB7LyogPC9HcmlkPiAqL31cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVhbTsiLCJpbXBvcnQgSG9tZUJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0hvbWVCYW5uZXInO1xuaW1wb3J0IEFib3V0U2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0Fib3V0U2VjdGlvbic7XG5pbXBvcnQgVGVhbSBmcm9tICcuLi9jb21wb25lbnRzL1RlYW0nO1xuXG5cbmltcG9ydCBncm9xIGZyb20gJ2dyb3EnO1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9jbGllbnQnO1xuXG5cblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge3dpbmVyeX0gPSBwcm9wc1xuICBjb25zdCB0ZWFtID0gd2luZXJ5LnRlYW1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhvbWVCYW5uZXIgcHJvcHMgPSB7d2luZXJ5fS8+XG4gICAgICAgIDxBYm91dFNlY3Rpb24gcHJvcHMgPSB7d2luZXJ5fS8+XG4gICAgICAgIDxUZWFtIHByb3BzID0ge3RlYW19Lz5cbiAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xuICB3aW5lcnk6IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYFxuICAqW190eXBlID09IFwid2luZXJ5XCJdWzBdIHtcbiAgICBuYW1lLFxuICAgIGFib3V0LFxuICAgIGltYWdlLFxuICAgIFwidGVhbVwiOiBzdGFmZltdLT4ge1xuICAgICAgbmFtZSwgXG4gICAgICBzdGFmZkltYWdlLFxuICAgICAgcG9zaXRpb24sXG4gICAgICBmYXZvcml0ZVdpbmUsXG4gICAgICBkZXNjcmlwdGlvblxuICAgIH0sXG4gICAgXCJmbGlnaHRzXCI6IGZsaWdodHNbXS0+e1xuICAgICAgbmFtZSxcbiAgICAgIHNsdWdcbiAgICB9XG4gIH1cbiAgYClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzYW5pdHkvY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2ltYWdlLXVybFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JvcVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1hdGVyaWFsLXVpLWNhcm91c2VsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=