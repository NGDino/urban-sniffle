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
    // width: '100vw',
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
/* harmony import */ var react_card_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-card-carousel */ "react-card-carousel");
/* harmony import */ var react_card_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_card_carousel__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\Team\\index.js";



const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(theme => ({
  spacer: {
    height: 303,
    display: 'block'
  },
  background: {
    backgroundColor: '#554287'
  },
  bullet: {
    // display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}));

const Team = props => {
  const classes = useStyles();
  console.log('staff', props);

  const bull = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    className: classes.bullet,
    children: "\u2022"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 18
  }, undefined);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
      container: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_card_carousel__WEBPACK_IMPORTED_MODULE_3___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Card, {
          className: classes.root,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.CardContent, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
              className: classes.title,
              color: "textSecondary",
              gutterBottom: true,
              children: "Word of the Day"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 9
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
              variant: "h5",
              component: "h2",
              children: ["be", bull, "nev", bull, "o", bull, "lent"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 9
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
              className: classes.pos,
              color: "textSecondary",
              children: "adjective"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 9
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
              variant: "body2",
              component: "p",
              children: ["well meaning and kindly.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 11
              }, undefined), '"a benevolent smile"']
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 9
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.CardActions, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
              size: "small",
              children: "Learn More"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Card, {
          className: classes.root,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.CardContent, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
              className: classes.title,
              color: "textSecondary",
              gutterBottom: true,
              children: "Word of the Day"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 9
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
              variant: "h5",
              component: "h2",
              children: ["be", bull, "nev", bull, "o", bull, "lent"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 9
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
              className: classes.pos,
              color: "textSecondary",
              children: "adjective"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 9
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
              variant: "body2",
              component: "p",
              children: ["well meaning and kindly.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 11
              }, undefined), '"a benevolent smile"']
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 9
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.CardActions, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
              size: "small",
              children: "Learn More"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 5
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Card, {
          className: classes.root,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.CardContent, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
              className: classes.title,
              color: "textSecondary",
              gutterBottom: true,
              children: "Word of the Day"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 9
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
              variant: "h5",
              component: "h2",
              children: ["be", bull, "nev", bull, "o", bull, "lent"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 9
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
              className: classes.pos,
              color: "textSecondary",
              children: "adjective"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 9
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
              variant: "body2",
              component: "p",
              children: ["well meaning and kindly.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 11
              }, undefined), '"a benevolent smile"']
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 9
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 7
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.CardActions, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
              size: "small",
              children: "Learn More"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 5
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
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
      lineNumber: 15,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AboutSection__WEBPACK_IMPORTED_MODULE_2__.default, {
      props: winery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Team__WEBPACK_IMPORTED_MODULE_3__.default, {
      props: team
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NsaWVudC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbXBvbmVudHMvQWJvdXRTZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9Ib21lQmFubmVyL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9UZWFtL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAc2FuaXR5L2NsaWVudFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiQHNhbml0eS9pbWFnZS11cmxcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcImdyb3FcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0LWNhcmQtY2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsInByb2plY3RJZCIsImRhdGFzZXQiLCJ1c2VDZG4iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJhYm91dCIsInRleHRBbGlnbiIsIm1hcmdpbiIsIkFib3V0U2VjdGlvbiIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJpbWFnZSIsInJvb3QiLCJkaXNwbGF5IiwiYmFja2dyb3VuZCIsImhlaWdodCIsInBvc2l0aW9uIiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyUmlnaHQiLCJ0ZXh0QmFja2dyb3VuZCIsIndpZHRoIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsImJhY2tHcm91bmRDb2xvciIsImJvcmRlciIsInBhZGRpbmciLCJiYWNrZHJvcEZpbHRlciIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsIkhvbWVCYW5uZXIiLCJuYW1lIiwiZmlyc3RJdGVtIiwic3BhY2VyIiwiYmFja2dyb3VuZENvbG9yIiwiYnVsbGV0IiwidGl0bGUiLCJmb250U2l6ZSIsInBvcyIsIm1hcmdpbkJvdHRvbSIsIlRlYW0iLCJidWxsIiwiSW5kZXgiLCJ3aW5lcnkiLCJ0ZWFtIiwiZ2V0SW5pdGlhbFByb3BzIiwiZ3JvcSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSwrREFBZUEscURBQVksQ0FBQztBQUMxQkMsV0FBUyxFQUFFLFVBRGU7QUFDSDtBQUN2QkMsU0FBTyxFQUFFLFlBRmlCO0FBRUg7QUFDdkJDLFFBQU0sRUFBRSxJQUhrQixDQUdiOztBQUhhLENBQUQsQ0FBM0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBR0EsTUFBTUMsU0FBUyxHQUFHQyxvRUFBVSxDQUFFQyxLQUFELEtBQVk7QUFDckNDLE9BQUssRUFBRTtBQUNIQyxhQUFTLEVBQUMsU0FEUDtBQUVIQyxVQUFNLEVBQUU7QUFGTDtBQUQ4QixDQUFaLENBQUQsQ0FBNUI7O0FBT0EsTUFBTUMsWUFBWSxHQUFJQyxLQUFELElBQVc7QUFDNUIsUUFBTTtBQUFDSjtBQUFELE1BQVVJLEtBQUssQ0FBQ0EsS0FBdEI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlOLEtBQVo7QUFDQSxRQUFNTyxPQUFPLEdBQUdWLFNBQVMsRUFBekI7QUFFQSxzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLHdEQUFEO0FBQUEsNkJBQ0ksOERBQUMseURBQUQ7QUFBWSxlQUFPLEVBQUcsV0FBdEI7QUFBa0MsaUJBQVMsRUFBSVUsT0FBTyxDQUFDUCxLQUF2RDtBQUFBLGtCQUNL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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBUUgsQ0FYRDs7QUFhQUYsS0FBSyxDQUFDRyxlQUFOLEdBQXdCLGFBQWE7QUFDbkNGLFFBQU0sRUFBRSxNQUFNakMsa0RBQUEsQ0FBYW9DLDZDQUFLO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FqQmdCO0FBRHFCLENBQWIsQ0FBeEI7O0FBcUJBLCtEQUFlSixLQUFmLEU7Ozs7Ozs7Ozs7O0FDM0NBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY2xpZW50LmpzXHJcbmltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSAnQHNhbml0eS9jbGllbnQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzYW5pdHlDbGllbnQoe1xyXG4gIHByb2plY3RJZDogJ2lkczFwdmtrJywgLy8geW91IGNhbiBmaW5kIHRoaXMgaW4gc2FuaXR5Lmpzb25cclxuICBkYXRhc2V0OiAncHJvZHVjdGlvbicsIC8vIG9yIHRoZSBuYW1lIHlvdSBjaG9zZSBpbiBzdGVwIDFcclxuICB1c2VDZG46IHRydWUgLy8gYGZhbHNlYCBpZiB5b3Ugd2FudCB0byBlbnN1cmUgZnJlc2ggZGF0YVxyXG59KVxyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtCb3gsIENvbnRhaW5lciwgVHlwb2dyYXBoeX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgYWJvdXQ6IHtcclxuICAgICAgICB0ZXh0QWxpZ246J2p1c3RpZnknLFxyXG4gICAgICAgIG1hcmdpbjogJzdweCdcclxuICAgIH1cclxufSkpXHJcblxyXG5jb25zdCBBYm91dFNlY3Rpb24gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHthYm91dH0gPSBwcm9wcy5wcm9wc1xyXG4gICAgY29uc29sZS5sb2coYWJvdXQpXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCkgXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudCA9ICdzdWJ0aXRsZTEnIGNsYXNzTmFtZSA9IHtjbGFzc2VzLmFib3V0fT5cclxuICAgICAgICAgICAgICAgICAgICB7YWJvdXR9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRTZWN0aW9uOyIsIi8vZm9yIGVhc3kgaW1hZ2VzXHJcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xyXG5cclxuLy9tYXRlcmlhbFVpIGNvbXBvbmVudHNcclxuaW1wb3J0IHtCb3gsIEdyaWQsIFR5cG9ncmFwaHksIEJ1dHRvbiwgUGFwZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50JztcclxuXHJcbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XHJcbiAgICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKVxyXG59XHJcblxyXG4vL3N0eWxlc1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgLy8gd2lkdGg6ICcxMDAlJ1xyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICBoZWlnaHQ6IDMwMCxcclxuICAgICAgICAvLyB3aWR0aDogJzEwMHZ3JyxcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBib3JkZXJCb3R0b206ICdkb3VibGUgMTVweCAjYWI1YzAwJyxcclxuICAgICAgICBib3JkZXJSaWdodDogJ25vbmUnXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgdGV4dEJhY2tncm91bmQ6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB3aWR0aDogJzcwJScsXHJcbiAgICAgICAgdG9wOiAnMjJ2aCcsXHJcbiAgICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICAgICAgICBiYWNrR3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICBib3JkZXI6ICcxMHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40KScsXHJcbiAgICAgICAgcGFkZGluZzonNXB4IDVweCA1cHggNXB4JyxcclxuICAgICAgICBiYWNrZHJvcEZpbHRlcjogJ2JsdXIoNnB4KScsXHJcbiAgICAgICAgYm94U2hhZG93OiAncmdiYSgwLCAwLCAwLCAwLjU2KSAwcHggMjJweCA3MHB4IDRweCcsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjUlIDEwJTsnXHJcbiAgICB9LFxyXG5cclxufSkpO1xyXG5cclxuXHJcbmNvbnN0IEhvbWVCYW5uZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtuYW1lLGltYWdlfSA9IHByb3BzLnByb3BzXHJcbiAgICBjb25zb2xlLmxvZygnaG9tZWJhbm5lcicsIHByb3BzKVxyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gICAgXHJcbiAgICAvLyBjb25zb2xlLmxvZyhuYW1lLCBpbWFnZSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8Qm94IGNvbXBvbmVudD0gJ2RpdicgZGlzcGxheSA9ICdibG9jaycgPlxyXG4gICAgICAgICAgICA8Qm94IFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2dyb3VuZH1cclxuICAgICAgICAgICAgY29tcG9uZW50PSdpbWcnXHJcbiAgICAgICAgICAgIHNyYyA9IHt1cmxGb3IoaW1hZ2UpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ge2NsYXNzZXMudGV4dEJhY2tncm91bmR9XHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezF9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjb21wb25lbnQ9J2gzJyB4cz17MTJ9IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmZpcnN0SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lIHRvIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjb21wb25lbnQ9J2gyJyB4cz17MTJ9IGNvbG9yID0gJyNmZmYnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnQgRmxpZ2h0XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZUJhbm5lciIsImltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtCb3gsIEdyaWQsIENhcmQsIEF2YXRhcixDYXJkQWN0aW9ucywgQ2FyZENvbnRlbnQsIFR5cG9ncmFwaHksIEJ1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUmVhY3RDYXJkQ2Fyb3VzZWwgZnJvbSAncmVhY3QtY2FyZC1jYXJvdXNlbCc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIFxyXG4gICAgc3BhY2VyOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDMsXHJcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNTU0Mjg3J1xyXG4gICAgfSxcclxuICAgIGJ1bGxldDoge1xyXG4gICAgICAgIC8vIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgIG1hcmdpbjogJzAgMnB4JyxcclxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyxcclxuICAgICAgfSxcclxuICAgICAgdGl0bGU6IHtcclxuICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgIH0sXHJcbiAgICAgIHBvczoge1xyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMTIsXHJcbiAgICAgIH0sXHJcblxyXG59KSk7XHJcblxyXG5cclxuXHJcbmNvbnN0IFRlYW0gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gICAgY29uc29sZS5sb2coJ3N0YWZmJywgcHJvcHMpXHJcbiAgICBjb25zdCBidWxsID0gPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1bGxldH0+4oCiPC9zcGFuPjtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxSZWFjdENhcmRDYXJvdXNlbCAgPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgIFdvcmQgb2YgdGhlIERheVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgYmV7YnVsbH1uZXZ7YnVsbH1ve2J1bGx9bGVudFxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucG9zfSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cclxuICAgICAgICAgIGFkamVjdGl2ZVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb21wb25lbnQ9XCJwXCI+XHJcbiAgICAgICAgICB3ZWxsIG1lYW5pbmcgYW5kIGtpbmRseS5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgeydcImEgYmVuZXZvbGVudCBzbWlsZVwiJ31cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiPkxlYXJuIE1vcmU8L0J1dHRvbj5cclxuICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgIDwvQ2FyZD5cclxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgV29yZCBvZiB0aGUgRGF5XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICBiZXtidWxsfW5ldntidWxsfW97YnVsbH1sZW50XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5wb3N9IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgYWRqZWN0aXZlXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgIHdlbGwgbWVhbmluZyBhbmQga2luZGx5LlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICB7J1wiYSBiZW5ldm9sZW50IHNtaWxlXCInfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPENhcmRBY3Rpb25zPlxyXG4gICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCI+TGVhcm4gTW9yZTwvQnV0dG9uPlxyXG4gICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgPC9DYXJkPlxyXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICBXb3JkIG9mIHRoZSBEYXlcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgIGJle2J1bGx9bmV2e2J1bGx9b3tidWxsfWxlbnRcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnBvc30gY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICBhZGplY3RpdmVcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgd2VsbCBtZWFuaW5nIGFuZCBraW5kbHkuXHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIHsnXCJhIGJlbmV2b2xlbnQgc21pbGVcIid9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICA8Q2FyZEFjdGlvbnM+XHJcbiAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIj5MZWFybiBNb3JlPC9CdXR0b24+XHJcbiAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICA8L0NhcmQ+XHJcblxyXG4gICAgPC9SZWFjdENhcmRDYXJvdXNlbD5cclxuXHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB7LyogPFJlYWN0Q2FyZENhcm91c2VsIGF1dG9wbGF5PXsgdHJ1ZSB9IGF1dG9wbGF5X3NwZWVkPXsgMjUwMCB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17IE15Q2Fyb3VzZWwuQ0FSRF9TVFlMRSB9PlxyXG4gICAgICAgICAgICAgICAgRmlyc3QgQ2FyZFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXsgTXlDYXJvdXNlbC5DQVJEX1NUWUxFIH0+XHJcbiAgICAgICAgICAgICAgICBTZWNvbmQgQ2FyZFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXsgTXlDYXJvdXNlbC5DQVJEX1NUWUxFIH0+XHJcbiAgICAgICAgICAgICAgICBUaGlyZCBDYXJkXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9eyBNeUNhcm91c2VsLkNBUkRfU1RZTEUgfT5cclxuICAgICAgICAgICAgICAgIEZvdXJ0aCBDYXJkXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9eyBNeUNhcm91c2VsLkNBUkRfU1RZTEUgfT5cclxuICAgICAgICAgICAgICAgIEZpZnRoIENhcmRcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1JlYWN0Q2FyZENhcm91c2VsPiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogPEF2YXRhcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+ICovfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlYW07IiwiaW1wb3J0IEhvbWVCYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lQmFubmVyJztcbmltcG9ydCBBYm91dFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9BYm91dFNlY3Rpb24nO1xuaW1wb3J0IFRlYW0gZnJvbSAnLi4vY29tcG9uZW50cy9UZWFtJztcblxuXG5pbXBvcnQgZ3JvcSBmcm9tICdncm9xJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vY2xpZW50JztcblxuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7d2luZXJ5fSA9IHByb3BzXG4gIGNvbnN0IHRlYW0gPSB3aW5lcnkudGVhbVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SG9tZUJhbm5lciBwcm9wcyA9IHt3aW5lcnl9Lz5cbiAgICAgICAgPEFib3V0U2VjdGlvbiBwcm9wcyA9IHt3aW5lcnl9Lz5cbiAgICAgICAgPFRlYW0gcHJvcHMgPSB7dGVhbX0vPlxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICApXG59XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XG4gIHdpbmVyeTogYXdhaXQgY2xpZW50LmZldGNoKGdyb3FgXG4gICpbX3R5cGUgPT0gXCJ3aW5lcnlcIl1bMF0ge1xuICAgIG5hbWUsXG4gICAgYWJvdXQsXG4gICAgaW1hZ2UsXG4gICAgXCJ0ZWFtXCI6IHN0YWZmW10tPiB7XG4gICAgICBuYW1lLCBcbiAgICAgIHN0YWZmSW1hZ2UsXG4gICAgICBwb3NpdGlvbixcbiAgICAgIGZhdm9yaXRlV2luZSxcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgfSxcbiAgICBcImZsaWdodHNcIjogZmxpZ2h0c1tdLT57XG4gICAgICBuYW1lLFxuICAgICAgc2x1Z1xuICAgIH1cbiAgfVxuICBgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNhbml0eS9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzYW5pdHkvaW1hZ2UtdXJsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncm9xXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jYXJkLWNhcm91c2VsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=