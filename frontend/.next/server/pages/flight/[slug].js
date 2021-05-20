(function() {
var exports = {};
exports.id = "pages/flight/[slug]";
exports.ids = ["pages/flight/[slug]"];
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

/***/ "./components/FlightList/index.js":
/*!****************************************!*\
  !*** ./components/FlightList/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FlightList; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Accordion */ "@material-ui/core/Accordion");
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AccordionSummary */ "@material-ui/core/AccordionSummary");
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AccordionDetails */ "@material-ui/core/AccordionDetails");
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\FlightList\\index.js";






const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(theme => ({
  wineName: {
    display: 'block'
  }
}));
const Accordion = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.withStyles)({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
})((_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_3___default()));
const AccordionSummary = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.withStyles)({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56
    }
  },
  content: {
    '&$expanded': {
      margin: '12px 0'
    }
  },
  expanded: {}
})((_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_4___default()));
const AccordionDetails = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.withStyles)(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))((_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_5___default()));
function FlightList(props) {
  const {
    0: expanded,
    1: setExpanded
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const classes = useStyles();
  const wines = props.props;
  console.log('accordion props', wines);

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: wines.map((wine, index) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Accordion, {
        square: true,
        expanded: expanded === `panel1_${index}`,
        onChange: handleChange(`panel1_${index}`),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccordionSummary, {
          "aria-controls": "panel1d-content",
          id: "panel1d-header",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
            className: classes.wineName,
            variant: "h5",
            component: "h2",
            gutterBottom: true,
            children: [wine.year, " ", wine.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
            variant: "p",
            children: wine.varietals
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccordionDetails, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 21
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/flight/[slug].js":
/*!********************************!*\
  !*** ./pages/flight/[slug].js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ "groq");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client */ "./client.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-swipeable-views */ "react-swipeable-views");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sanity/image-url */ "@sanity/image-url");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_FlightList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/FlightList */ "./components/FlightList/index.js");

var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\pages\\flight\\[slug].js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







 //for easy images




function urlFor(source) {
  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_8___default()(_client__WEBPACK_IMPORTED_MODULE_2__.default).image(source);
}

function TabPanel(props) {
  const {
    children,
    value,
    index
  } = props,
        other = _objectWithoutProperties(props, ["children", "value", "index"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({
    role: "tabpanel",
    hidden: value !== index,
    id: `full-width-tabpanel-${index}`,
    "aria-labelledby": `full-width-tab-${index}`
  }, other), {}, {
    children: value === index && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Box, {
      p: 3,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

TabPanel.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),
  index: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any.isRequired),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any.isRequired)
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.makeStyles)(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%'
  }
}));

const Post = props => {
  // const router = useRouter()
  console.log(props);
  const {
    name = 'Missing name',
    about = 'Missing about',
    image,
    _id,
    wines
  } = props;
  const classes = useStyles();
  const theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.useTheme)();
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.AppBar, {
      position: "static",
      color: "default",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Tabs, {
        value: value,
        onChange: handleChange,
        indicatorColor: "primary",
        textColor: "primary",
        variant: "fullWidth",
        "aria-label": "full width tabs example",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Tab, _objectSpread({
          label: "Wines"
        }, a11yProps(0)), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Tab, _objectSpread({
          label: "Tasting Tools"
        }, a11yProps(1)), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_swipeable_views__WEBPACK_IMPORTED_MODULE_5___default()), {
      axis: theme.direction === 'rtl' ? 'x-reverse' : 'x',
      index: value,
      onChangeIndex: handleChangeIndex,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabPanel, {
        value: value,
        index: 0,
        dir: theme.direction,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FlightList__WEBPACK_IMPORTED_MODULE_9__.default, {
          props: wines
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabPanel, {
        value: value,
        index: 1,
        dir: theme.direction,
        children: "Item Two"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 9
  }, undefined);
};

const query = (groq__WEBPACK_IMPORTED_MODULE_1___default())`
    *[_type == "flight" && slug.current == $slug][0]{
        _id,
        name,
        about,
        image,
        "wines":wine[]->{
        _id,
        name,
        year,
        slug,
        image,
        varietals,
        }
        
    
    }
`;

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  console.log('func works');
  const {
    slug = ""
  } = context.query;
  return await _client__WEBPACK_IMPORTED_MODULE_2__.default.fetch(query, {
    slug
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ "@material-ui/core/Accordion":
/*!**********************************************!*\
  !*** external "@material-ui/core/Accordion" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Accordion");;

/***/ }),

/***/ "@material-ui/core/AccordionDetails":
/*!*****************************************************!*\
  !*** external "@material-ui/core/AccordionDetails" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/AccordionDetails");;

/***/ }),

/***/ "@material-ui/core/AccordionSummary":
/*!*****************************************************!*\
  !*** external "@material-ui/core/AccordionSummary" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/AccordionSummary");;

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

/***/ "react-swipeable-views":
/*!****************************************!*\
  !*** external "react-swipeable-views" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-swipeable-views");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/flight/[slug].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NsaWVudC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbXBvbmVudHMvRmxpZ2h0TGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2ZsaWdodC9bc2x1Z10uanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25EZXRhaWxzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25TdW1tYXJ5XCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIkBzYW5pdHkvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAc2FuaXR5L2ltYWdlLXVybFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiZ3JvcVwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0LXN3aXBlYWJsZS12aWV3c1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwicHJvamVjdElkIiwiZGF0YXNldCIsInVzZUNkbiIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIndpbmVOYW1lIiwiZGlzcGxheSIsIkFjY29yZGlvbiIsIndpdGhTdHlsZXMiLCJyb290IiwiYm9yZGVyIiwiYm94U2hhZG93IiwiYm9yZGVyQm90dG9tIiwibWFyZ2luIiwiZXhwYW5kZWQiLCJNdWlBY2NvcmRpb24iLCJBY2NvcmRpb25TdW1tYXJ5IiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luQm90dG9tIiwibWluSGVpZ2h0IiwiY29udGVudCIsIk11aUFjY29yZGlvblN1bW1hcnkiLCJBY2NvcmRpb25EZXRhaWxzIiwicGFkZGluZyIsInNwYWNpbmciLCJNdWlBY2NvcmRpb25EZXRhaWxzIiwiRmxpZ2h0TGlzdCIsInByb3BzIiwic2V0RXhwYW5kZWQiLCJ1c2VTdGF0ZSIsImNsYXNzZXMiLCJ3aW5lcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJwYW5lbCIsImV2ZW50IiwibmV3RXhwYW5kZWQiLCJtYXAiLCJ3aW5lIiwiaW5kZXgiLCJ5ZWFyIiwibmFtZSIsInZhcmlldGFscyIsInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiVGFiUGFuZWwiLCJjaGlsZHJlbiIsInZhbHVlIiwib3RoZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJpc1JlcXVpcmVkIiwiYTExeVByb3BzIiwiaWQiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwid2lkdGgiLCJQb3N0IiwiYWJvdXQiLCJfaWQiLCJ1c2VUaGVtZSIsInNldFZhbHVlIiwibmV3VmFsdWUiLCJoYW5kbGVDaGFuZ2VJbmRleCIsImRpcmVjdGlvbiIsInF1ZXJ5IiwiZ3JvcSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLCtEQUFlQSxxREFBWSxDQUFDO0FBQzFCQyxXQUFTLEVBQUUsVUFEZTtBQUNIO0FBQ3ZCQyxTQUFPLEVBQUUsWUFGaUI7QUFFSDtBQUN2QkMsUUFBTSxFQUFF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LEVBQUUvQyxLQUFLLENBQUNpRSxTQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUE2QkgsQ0FyREQ7O0FBdURBLE1BQU1DLEtBQUssR0FBR0MsNkNBQUs7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWpCQTs7QUFrQkFULElBQUksQ0FBQ1UsZUFBTCxHQUF1QixnQkFBZUMsT0FBZixFQUF3QjtBQUMzQztBQUNBekMsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUNBLFFBQU07QUFBRXlDLFFBQUksR0FBRztBQUFULE1BQWdCRCxPQUFPLENBQUNILEtBQTlCO0FBQ0EsU0FBTyxNQUFNdkIsa0RBQUEsQ0FBYXVCLEtBQWIsRUFBb0I7QUFBQ0k7QUFBRCxHQUFwQixDQUFiO0FBQ0gsQ0FMRDs7QUFPQSwrREFBZVosSUFBZixFOzs7Ozs7Ozs7OztBQzVJQSwrQzs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9mbGlnaHQvW3NsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY2xpZW50LmpzXG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gJ0BzYW5pdHkvY2xpZW50J1xuXG5leHBvcnQgZGVmYXVsdCBzYW5pdHlDbGllbnQoe1xuICBwcm9qZWN0SWQ6ICdpZHMxcHZraycsIC8vIHlvdSBjYW4gZmluZCB0aGlzIGluIHNhbml0eS5qc29uXG4gIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJywgLy8gb3IgdGhlIG5hbWUgeW91IGNob3NlIGluIHN0ZXAgMVxuICB1c2VDZG46IHRydWUgLy8gYGZhbHNlYCBpZiB5b3Ugd2FudCB0byBlbnN1cmUgZnJlc2ggZGF0YVxufSlcbiIsImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBNdWlBY2NvcmRpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uJztcclxuaW1wb3J0IE11aUFjY29yZGlvblN1bW1hcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uU3VtbWFyeSc7XHJcbmltcG9ydCBNdWlBY2NvcmRpb25EZXRhaWxzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvbkRldGFpbHMnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHdpbmVOYW1lOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xyXG4gICAgfVxyXG59KSlcclxuXHJcbmNvbnN0IEFjY29yZGlvbiA9IHdpdGhTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xMjUpJyxcclxuICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcclxuICAgICAgICAnJjpub3QoOmxhc3QtY2hpbGQpJzoge1xyXG4gICAgICAgIGJvcmRlckJvdHRvbTogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmOmJlZm9yZSc6IHtcclxuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJiRleHBhbmRlZCc6IHtcclxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGV4cGFuZGVkOiB7fSxcclxufSkoTXVpQWNjb3JkaW9uKTtcclxuXHJcbmNvbnN0IEFjY29yZGlvblN1bW1hcnkgPSB3aXRoU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIC4wMyknLFxyXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xMjUpJyxcclxuICAgICAgICBtYXJnaW5Cb3R0b206IC0xLFxyXG4gICAgICAgIG1pbkhlaWdodDogNTYsXHJcbiAgICAgICAgJyYkZXhwYW5kZWQnOiB7XHJcbiAgICAgICAgbWluSGVpZ2h0OiA1NixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAnJiRleHBhbmRlZCc6IHtcclxuICAgICAgICBtYXJnaW46ICcxMnB4IDAnLFxyXG4gICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXhwYW5kZWQ6IHt9LFxyXG59KShNdWlBY2NvcmRpb25TdW1tYXJ5KTtcclxuXHJcbmNvbnN0IEFjY29yZGlvbkRldGFpbHMgPSB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgfSxcclxufSkpKE11aUFjY29yZGlvbkRldGFpbHMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmxpZ2h0TGlzdChwcm9wcykge1xyXG4gICAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcblxyXG4gICAgY29uc3Qgd2luZXMgPSBwcm9wcy5wcm9wc1xyXG4gICAgY29uc29sZS5sb2coJ2FjY29yZGlvbiBwcm9wcycsIHdpbmVzKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChwYW5lbCkgPT4gKGV2ZW50LCBuZXdFeHBhbmRlZCkgPT4ge1xyXG4gICAgICAgIHNldEV4cGFuZGVkKG5ld0V4cGFuZGVkID8gcGFuZWwgOiBmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2luZXMubWFwKCh3aW5lLCBpbmRleCApPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24gc3F1YXJlIGV4cGFuZGVkPXtleHBhbmRlZCA9PT0gYHBhbmVsMV8ke2luZGV4fWB9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoYHBhbmVsMV8ke2luZGV4fWApfT5cclxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeSBhcmlhLWNvbnRyb2xzPVwicGFuZWwxZC1jb250ZW50XCIgaWQ9XCJwYW5lbDFkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy53aW5lTmFtZX0gdmFyaWFudD0naDUnIGNvbXBvbmVudD1cImgyXCIgZ3V0dGVyQm90dG9tID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3dpbmUueWVhcn0ge3dpbmUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0ncCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt3aW5lLnZhcmlldGFsc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFN1c3BlbmRpc3NlIG1hbGVzdWFkYSBsYWN1cyBleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l0IGFtZXQgYmxhbmRpdCBsZW8gbG9ib3J0aXMgZWdldC4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gU3VzcGVuZGlzc2UgbWFsZXN1YWRhIGxhY3VzIGV4LCBzaXQgYW1ldCBibGFuZGl0IGxlbyBsb2JvcnRpcyBlZ2V0LlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB7LyogPEFjY29yZGlvbiBzcXVhcmUgZXhwYW5kZWQ9e2V4cGFuZGVkID09PSAncGFuZWwyJ30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGFuZWwyJyl9PlxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeSBhcmlhLWNvbnRyb2xzPVwicGFuZWwyZC1jb250ZW50XCIgaWQ9XCJwYW5lbDJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5Db2xsYXBzaWJsZSBHcm91cCBJdGVtICMyPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFN1c3BlbmRpc3NlIG1hbGVzdWFkYSBsYWN1cyBleCxcclxuICAgICAgICAgICAgICAgIHNpdCBhbWV0IGJsYW5kaXQgbGVvIGxvYm9ydGlzIGVnZXQuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nXHJcbiAgICAgICAgICAgICAgICBlbGl0LiBTdXNwZW5kaXNzZSBtYWxlc3VhZGEgbGFjdXMgZXgsIHNpdCBhbWV0IGJsYW5kaXQgbGVvIGxvYm9ydGlzIGVnZXQuXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICAgIDxBY2NvcmRpb24gc3F1YXJlIGV4cGFuZGVkPXtleHBhbmRlZCA9PT0gJ3BhbmVsMyd9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3BhbmVsMycpfT5cclxuICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnkgYXJpYS1jb250cm9scz1cInBhbmVsM2QtY29udGVudFwiIGlkPVwicGFuZWwzZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHk+Q29sbGFwc2libGUgR3JvdXAgSXRlbSAjMzwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb25TdW1tYXJ5PlxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTdXNwZW5kaXNzZSBtYWxlc3VhZGEgbGFjdXMgZXgsXHJcbiAgICAgICAgICAgICAgICBzaXQgYW1ldCBibGFuZGl0IGxlbyBsb2JvcnRpcyBlZ2V0LiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZ1xyXG4gICAgICAgICAgICAgICAgZWxpdC4gU3VzcGVuZGlzc2UgbWFsZXN1YWRhIGxhY3VzIGV4LCBzaXQgYW1ldCBibGFuZGl0IGxlbyBsb2JvcnRpcyBlZ2V0LlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICA8L0FjY29yZGlvbj4gKi99XHJcbiAgICA8L2Rpdj5cclxuKTtcclxufSIsImltcG9ydCBncm9xIGZyb20gJ2dyb3EnXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCc7XG5cbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBTd2lwZWFibGVWaWV3cyBmcm9tICdyZWFjdC1zd2lwZWFibGUtdmlld3MnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbXBvcnQge0FwcEJhciwgVGFicywgVGFiLCBUeXBvZ3JhcGh5LCBCb3h9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuLy9mb3IgZWFzeSBpbWFnZXNcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xuXG5pbXBvcnQgRmxpZ2h0TGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZsaWdodExpc3QnO1xuXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xuICAgIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpXG59XG5cbmZ1bmN0aW9uIFRhYlBhbmVsKHByb3BzKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgdmFsdWUsIGluZGV4LCAuLi5vdGhlciB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgICAgaGlkZGVuPXt2YWx1ZSAhPT0gaW5kZXh9XG4gICAgICAgIGlkPXtgZnVsbC13aWR0aC10YWJwYW5lbC0ke2luZGV4fWB9XG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT17YGZ1bGwtd2lkdGgtdGFiLSR7aW5kZXh9YH1cbiAgICAgICAgey4uLm90aGVyfVxuICAgID5cbiAgICAgICAge3ZhbHVlID09PSBpbmRleCAmJiAoXG4gICAgICAgICAgICA8Qm94IHA9ezN9PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5UYWJQYW5lbC5wcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGluZGV4OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbn07XG5cbmZ1bmN0aW9uIGExMXlQcm9wcyhpbmRleCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBgZnVsbC13aWR0aC10YWItJHtpbmRleH1gLFxuICAgICAgICAnYXJpYS1jb250cm9scyc6IGBmdWxsLXdpZHRoLXRhYnBhbmVsLSR7aW5kZXh9YCxcbiAgICB9O1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0sXG59KSk7XG5cblxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4ge1xuICAgIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5jb25zb2xlLmxvZyhwcm9wcylcbiAgICBcbiAgICBjb25zdCB7XG4gICAgICAgIG5hbWUgPSAnTWlzc2luZyBuYW1lJywgXG4gICAgICAgIGFib3V0ID0gJ01pc3NpbmcgYWJvdXQnLFxuICAgICAgICBpbWFnZSxcbiAgICAgICAgX2lkLFxuICAgICAgICB3aW5lcyxcbiAgICB9ID0gcHJvcHNcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcbiAgICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VJbmRleCA9IChpbmRleCkgPT4ge1xuICAgICAgICBzZXRWYWx1ZShpbmRleCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNvbG9yPVwiZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yQ29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmdWxsV2lkdGhcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiZnVsbCB3aWR0aCB0YWJzIGV4YW1wbGVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIldpbmVzXCIgey4uLmExMXlQcm9wcygwKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIlRhc3RpbmcgVG9vbHNcIiB7Li4uYTExeVByb3BzKDEpfSAvPlxuICAgICAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgIDwvQXBwQmFyPlxuICAgICAgICAgICAgPFN3aXBlYWJsZVZpZXdzXG4gICAgICAgICAgICBheGlzPXt0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gJ3gtcmV2ZXJzZScgOiAneCd9XG4gICAgICAgICAgICBpbmRleD17dmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZUluZGV4PXtoYW5kbGVDaGFuZ2VJbmRleH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17MH0gZGlyPXt0aGVtZS5kaXJlY3Rpb259PlxuICAgICAgICAgICAgICAgICAgICA8RmxpZ2h0TGlzdCBwcm9wcyA9IHt3aW5lc30vPlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezF9IGRpcj17dGhlbWUuZGlyZWN0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgSXRlbSBUd29cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgPC9Td2lwZWFibGVWaWV3cz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBxdWVyeSA9IGdyb3FgXG4gICAgKltfdHlwZSA9PSBcImZsaWdodFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XG4gICAgICAgIF9pZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgYWJvdXQsXG4gICAgICAgIGltYWdlLFxuICAgICAgICBcIndpbmVzXCI6d2luZVtdLT57XG4gICAgICAgIF9pZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgeWVhcixcbiAgICAgICAgc2x1ZyxcbiAgICAgICAgaW1hZ2UsXG4gICAgICAgIHZhcmlldGFscyxcbiAgICAgICAgfVxuICAgICAgICBcbiAgICBcbiAgICB9XG5gXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxuICAgIGNvbnNvbGUubG9nKCdmdW5jIHdvcmtzJylcbiAgICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnF1ZXJ5XG4gICAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwge3NsdWd9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uRGV0YWlsc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uU3VtbWFyeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNhbml0eS9pbWFnZS11cmxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyb3FcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zd2lwZWFibGUtdmlld3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==