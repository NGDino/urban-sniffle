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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\FlightList\\index.js";



const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(theme => ({
  root: {
    marginBottom: '70px'
  },
  wineName: {
    display: 'block'
  }
}));
function FlightList(props) {
  const {
    0: moreInfo,
    1: setMoreInfo
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const classes = useStyles();
  const wines = props.props;
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
        lineNumber: 31,
        columnNumber: 13
      }, this), wines.map((wine, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
            variant: "h5",
            children: [wine.year, " ", wine.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
            variant: "subtitle2",
            children: wine.specialAttribute
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
            variant: "subtitle1",
            children: wine.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
            component: "div",
            children: [moreInfo == wine._id ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
              onClick: () => setMoreInfo(''),
              children: "less Info"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 29
            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
              onClick: () => setMoreInfo(wine._id),
              children: "More Info"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 29
            }, this), moreInfo == wine._id && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
              variant: "body1",
              children: "Just when I thought I was out... they pull me back in. When they come... they come at what you love. Leave the gun. Take the cannoli. I have a sentimental weakness for my children and I spoil them, as you can see. They talk when they should listen. Very well. You want to do business with me. I will do business with you. Mr Corleone is Johnny Fontane's godfather. Now Italians regard that as a very close, a very sacred religious relationship. My father is no different than any powerful man, any man with power, like a president or senator. I don't feel I have to wipe everybody out, Tom. Just my enemies. I see you took the name of the town. What was your father's name? It's a Sicilian message. It means Luca Brasi sleeps with the fishes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
        description,
        specialAttribute,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NsaWVudC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbXBvbmVudHMvRmxpZ2h0TGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2ZsaWdodC9bc2x1Z10uanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAc2FuaXR5L2NsaWVudFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiQHNhbml0eS9pbWFnZS11cmxcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcImdyb3FcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC1zd2lwZWFibGUtdmlld3NcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsInByb2plY3RJZCIsImRhdGFzZXQiLCJ1c2VDZG4iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFyZ2luQm90dG9tIiwid2luZU5hbWUiLCJkaXNwbGF5IiwiRmxpZ2h0TGlzdCIsInByb3BzIiwibW9yZUluZm8iLCJzZXRNb3JlSW5mbyIsInVzZVN0YXRlIiwiY2xhc3NlcyIsIndpbmVzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIndpbmUiLCJpbmRleCIsInllYXIiLCJuYW1lIiwic3BlY2lhbEF0dHJpYnV0ZSIsImRlc2NyaXB0aW9uIiwiX2lkIiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwiaW1hZ2UiLCJUYWJQYW5lbCIsImNoaWxkcmVuIiwidmFsdWUiLCJvdGhlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImlzUmVxdWlyZWQiLCJhMTF5UHJvcHMiLCJpZCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJ3aWR0aCIsIlBvc3QiLCJhYm91dCIsInVzZVRoZW1lIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwiaGFuZGxlQ2hhbmdlSW5kZXgiLCJkaXJlY3Rpb24iLCJxdWVyeSIsImdyb3EiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0Iiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSwrREFBZUEscURBQVksQ0FBQztBQUMxQkMsV0FBUyxFQUFFLFVBRGU7QUFDSDtBQUN2QkMsU0FBTyxFQUFFLFlBRmlCO0FBRUg7QUFDdkJDLFFBQU0sRUFBRSxJQUhrQixDQUdiOztBQUhhLENBQUQsQ0FBM0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUVBO0FBQ0E7QUFHQSxNQUFNQyxTQUFTLEdBQUdDLDZEQUFVLENBQUVDLEtBQUQsS0FBWTtBQUNyQ0MsTUFBSSxFQUFDO0FBQ0RDLGdCQUFZLEVBQUM7QUFEWixHQURnQztBQUlyQ0MsVUFBUSxFQUFFO0FBQ05DLFdBQU8sRUFBRTtBQURIO0FBSjJCLENBQVosQ0FBRCxDQUE1QjtBQVdlLFNBQVNDLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQ3RDLFFBQU07QUFBQSxPQUFFQyxRQUFGO0FBQUEsT0FBWUM7QUFBWixNQUEyQkMsK0NBQVEsQ0FBQyxFQUFELENBQXpDO0FBRUEsUUFBTUMsT0FBTyxHQUFHWixTQUFTLEVBQXpCO0FBRUEsUUFBTWEsS0FBSyxHQUFHTCxLQUFLLENBQUNBLEtBQXBCO0FBQ0FNLFNBQU8sQ0FB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LEtBQUssQ0FBQ2lELFNBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQTZCSCxDQXJERDs7QUF1REEsTUFBTUMsS0FBSyxHQUFHQyw2Q0FBSztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQW5CQTs7QUFvQkFWLElBQUksQ0FBQ1csZUFBTCxHQUF1QixnQkFBZUMsT0FBZixFQUF3QjtBQUMzQztBQUNBekMsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUNBLFFBQU07QUFBRXlDLFFBQUksR0FBRztBQUFULE1BQWdCRCxPQUFPLENBQUNILEtBQTlCO0FBQ0EsU0FBTyxNQUFNekIsa0RBQUEsQ0FBYXlCLEtBQWIsRUFBb0I7QUFBQ0k7QUFBRCxHQUFwQixDQUFiO0FBQ0gsQ0FMRDs7QUFPQSwrREFBZWIsSUFBZixFOzs7Ozs7Ozs7OztBQzlJQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9mbGlnaHQvW3NsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY2xpZW50LmpzXG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gJ0BzYW5pdHkvY2xpZW50J1xuXG5leHBvcnQgZGVmYXVsdCBzYW5pdHlDbGllbnQoe1xuICBwcm9qZWN0SWQ6ICdpZHMxcHZraycsIC8vIHlvdSBjYW4gZmluZCB0aGlzIGluIHNhbml0eS5qc29uXG4gIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJywgLy8gb3IgdGhlIG5hbWUgeW91IGNob3NlIGluIHN0ZXAgMVxuICB1c2VDZG46IHRydWUgLy8gYGZhbHNlYCBpZiB5b3Ugd2FudCB0byBlbnN1cmUgZnJlc2ggZGF0YVxufSlcbiIsImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0e0NvbnRhaW5lciwgVHlwb2dyYXBoeSwgQm94LCBCdXR0b24sIEhpZGRlbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyBtYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICByb290OntcbiAgICAgICAgbWFyZ2luQm90dG9tOic3MHB4J1xuICAgIH0sXG4gICAgd2luZU5hbWU6IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIH1cbn0pKVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmxpZ2h0TGlzdChwcm9wcykge1xuICAgIGNvbnN0IFsgbW9yZUluZm8sIHNldE1vcmVJbmZvXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gICAgY29uc3Qgd2luZXMgPSBwcm9wcy5wcm9wc1xuICAgIGNvbnNvbGUubG9nKCdhY2NvcmRpb24gcHJvcHMnLCB3aW5lcylcblxuXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICBcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50ID0naDQnIGFsaWduPSdjZW50ZXInIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgICAgICBCb3JkZWF1eCBGbGlnaHRcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIHt3aW5lcy5tYXAoKHdpbmUsaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpbmUueWVhcn0ge3dpbmUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpbmUuc3BlY2lhbEF0dHJpYnV0ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3aW5lLmRlc2NyaXB0aW9ufSBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PSdkaXYnID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttb3JlSW5mbyA9PSB3aW5lLl9pZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPSB7KCkgPT4gc2V0TW9yZUluZm8oJycpIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlc3MgSW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9IHsoKSA9PiBzZXRNb3JlSW5mbyh3aW5lLl9pZCkgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9yZSBJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21vcmVJbmZvID09IHdpbmUuX2lkICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJyA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSnVzdCB3aGVuIEkgdGhvdWdodCBJIHdhcyBvdXQuLi4gdGhleSBwdWxsIG1lIGJhY2sgaW4uIFdoZW4gdGhleSBjb21lLi4uIHRoZXkgY29tZSBhdCB3aGF0IHlvdSBsb3ZlLiBMZWF2ZSB0aGUgZ3VuLiBUYWtlIHRoZSBjYW5ub2xpLiBJIGhhdmUgYSBzZW50aW1lbnRhbCB3ZWFrbmVzcyBmb3IgbXkgY2hpbGRyZW4gYW5kIEkgc3BvaWwgdGhlbSwgYXMgeW91IGNhbiBzZWUuIFRoZXkgdGFsayB3aGVuIHRoZXkgc2hvdWxkIGxpc3Rlbi4gVmVyeSB3ZWxsLiBZb3Ugd2FudCB0byBkbyBidXNpbmVzcyB3aXRoIG1lLiBJIHdpbGwgZG8gYnVzaW5lc3Mgd2l0aCB5b3UuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNciBDb3JsZW9uZSBpcyBKb2hubnkgRm9udGFuZSdzIGdvZGZhdGhlci4gTm93IEl0YWxpYW5zIHJlZ2FyZCB0aGF0IGFzIGEgdmVyeSBjbG9zZSwgYSB2ZXJ5IHNhY3JlZCByZWxpZ2lvdXMgcmVsYXRpb25zaGlwLiBNeSBmYXRoZXIgaXMgbm8gZGlmZmVyZW50IHRoYW4gYW55IHBvd2VyZnVsIG1hbiwgYW55IG1hbiB3aXRoIHBvd2VyLCBsaWtlIGEgcHJlc2lkZW50IG9yIHNlbmF0b3IuIEkgZG9uJ3QgZmVlbCBJIGhhdmUgdG8gd2lwZSBldmVyeWJvZHkgb3V0LCBUb20uIEp1c3QgbXkgZW5lbWllcy4gSSBzZWUgeW91IHRvb2sgdGhlIG5hbWUgb2YgdGhlIHRvd24uIFdoYXQgd2FzIHlvdXIgZmF0aGVyJ3MgbmFtZT8gSXQncyBhIFNpY2lsaWFuIG1lc3NhZ2UuIEl0IG1lYW5zIEx1Y2EgQnJhc2kgc2xlZXBzIHdpdGggdGhlIGZpc2hlc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICBcbiAgICAgICAgfSl9XG4gICAgICAgIFxuXG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICAgICk7XG59IiwiaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSdcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50JztcblxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFN3aXBlYWJsZVZpZXdzIGZyb20gJ3JlYWN0LXN3aXBlYWJsZS12aWV3cyc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCB7QXBwQmFyLCBUYWJzLCBUYWIsIFR5cG9ncmFwaHksIEJveH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG4vL2ZvciBlYXN5IGltYWdlc1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCc7XG5cbmltcG9ydCBGbGlnaHRMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRmxpZ2h0TGlzdCc7XG5cbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XG4gICAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcbn1cblxuZnVuY3Rpb24gVGFiUGFuZWwocHJvcHMpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCB2YWx1ZSwgaW5kZXgsIC4uLm90aGVyIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgICBoaWRkZW49e3ZhbHVlICE9PSBpbmRleH1cbiAgICAgICAgaWQ9e2BmdWxsLXdpZHRoLXRhYnBhbmVsLSR7aW5kZXh9YH1cbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtgZnVsbC13aWR0aC10YWItJHtpbmRleH1gfVxuICAgICAgICB7Li4ub3RoZXJ9XG4gICAgPlxuICAgICAgICB7dmFsdWUgPT09IGluZGV4ICYmIChcbiAgICAgICAgICAgIDxCb3ggcD17M30+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e2NoaWxkcmVufTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgIDwvZGl2PlxuICAgICk7XG59XG5cblRhYlBhbmVsLnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgaW5kZXg6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxufTtcblxuZnVuY3Rpb24gYTExeVByb3BzKGluZGV4KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGBmdWxsLXdpZHRoLXRhYi0ke2luZGV4fWAsXG4gICAgICAgICdhcmlhLWNvbnRyb2xzJzogYGZ1bGwtd2lkdGgtdGFicGFuZWwtJHtpbmRleH1gLFxuICAgIH07XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbn0pKTtcblxuXG5jb25zdCBQb3N0ID0gKHByb3BzKSA9PiB7XG4gICAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbmNvbnNvbGUubG9nKHByb3BzKVxuICAgIFxuICAgIGNvbnN0IHtcbiAgICAgICAgbmFtZSA9ICdNaXNzaW5nIG5hbWUnLCBcbiAgICAgICAgYWJvdXQgPSAnTWlzc2luZyBhYm91dCcsXG4gICAgICAgIGltYWdlLFxuICAgICAgICBfaWQsXG4gICAgICAgIHdpbmVzLFxuICAgIH0gPSBwcm9wc1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xuICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUluZGV4ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIHNldFZhbHVlKGluZGV4KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY29sb3I9XCJkZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3JDb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZ1bGxXaWR0aFwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJmdWxsIHdpZHRoIHRhYnMgZXhhbXBsZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwiV2luZXNcIiB7Li4uYTExeVByb3BzKDApfSAvPlxuICAgICAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwiVGFzdGluZyBUb29sc1wiIHsuLi5hMTF5UHJvcHMoMSl9IC8+XG4gICAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgPC9BcHBCYXI+XG4gICAgICAgICAgICA8U3dpcGVhYmxlVmlld3NcbiAgICAgICAgICAgIGF4aXM9e3RoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAneC1yZXZlcnNlJyA6ICd4J31cbiAgICAgICAgICAgIGluZGV4PXt2YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlSW5kZXg9e2hhbmRsZUNoYW5nZUluZGV4fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXswfSBkaXI9e3RoZW1lLmRpcmVjdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxGbGlnaHRMaXN0IHByb3BzID0ge3dpbmVzfS8+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17MX0gZGlyPXt0aGVtZS5kaXJlY3Rpb259PlxuICAgICAgICAgICAgICAgICAgICBJdGVtIFR3b1xuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICA8L1N3aXBlYWJsZVZpZXdzPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JvcWBcbiAgICAqW190eXBlID09IFwiZmxpZ2h0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXtcbiAgICAgICAgX2lkLFxuICAgICAgICBuYW1lLFxuICAgICAgICBhYm91dCxcbiAgICAgICAgaW1hZ2UsXG4gICAgICAgIFwid2luZXNcIjp3aW5lW10tPntcbiAgICAgICAgX2lkLFxuICAgICAgICBuYW1lLFxuICAgICAgICB5ZWFyLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgc3BlY2lhbEF0dHJpYnV0ZSxcbiAgICAgICAgc2x1ZyxcbiAgICAgICAgaW1hZ2UsXG4gICAgICAgIHZhcmlldGFscyxcbiAgICAgICAgfVxuICAgICAgICBcbiAgICBcbiAgICB9XG5gXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxuICAgIGNvbnNvbGUubG9nKCdmdW5jIHdvcmtzJylcbiAgICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnF1ZXJ5XG4gICAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwge3NsdWd9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNhbml0eS9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzYW5pdHkvaW1hZ2UtdXJsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncm9xXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3dpcGVhYmxlLXZpZXdzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=