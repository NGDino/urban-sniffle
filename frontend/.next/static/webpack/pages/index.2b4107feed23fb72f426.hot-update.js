self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@material-ui/icons/FiberManualRecord.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/icons/FiberManualRecord.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "8"
}), 'FiberManualRecord');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/NavigateBefore.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/icons/NavigateBefore.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), 'NavigateBefore');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/NavigateNext.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/icons/NavigateNext.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), 'NavigateNext');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/utils/createSvgIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/icons/utils/createSvgIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _utils.createSvgIcon;
  }
}));

var _utils = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");

/***/ }),

/***/ "./components/MyCarousel/index.js":
/*!****************************************!*\
  !*** ./components/MyCarousel/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-material-ui-carousel */ "./node_modules/react-material-ui-carousel/dist/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\MyCarousel\\index.js";




function MyCarousel(props) {
  var _this = this;

  var items = [{
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!"
  }, {
    name: "Random Name #2",
    description: "Hello World!"
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: items.map(function (item, i) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
        item: item
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 41
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

_c = MyCarousel;

function Item(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Paper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: props.item.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: props.item.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: "CheckButton",
      children: "Check it out!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, this);
}

_c2 = Item;
/* harmony default export */ __webpack_exports__["default"] = (MyCarousel);

var _c, _c2;

$RefreshReg$(_c, "MyCarousel");
$RefreshReg$(_c2, "Item");

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


/***/ }),

/***/ "./components/Team/index.js":
/*!**********************************!*\
  !*** ./components/Team/index.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _MyCarousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MyCarousel */ "./components/MyCarousel/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\Team\\index.js",
    _this = undefined,
    _s = $RefreshSig$();




var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(function (theme) {
  return {
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
  };
});

var Team = function Team(props) {
  _s();

  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
      container: true,
      className: classes.staffContainer,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
        item: true,
        component: _material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography,
        variant: "h3",
        className: classes.heading,
        children: "Meet our Team"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
        item: true,
        component: "div"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, _this);
};

_s(Team, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Team;
/* harmony default export */ __webpack_exports__["default"] = (Team);

var _c;

$RefreshReg$(_c, "Team");

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


/***/ }),

/***/ "./node_modules/auto-bind/index.js":
/*!*****************************************!*\
  !*** ./node_modules/auto-bind/index.js ***!
  \*****************************************/
/***/ (function(module) {

"use strict";


// Gets all non-builtin properties up the prototype chain
const getAllProperties = object => {
	const props = new Set();

	do {
		for (const key of Reflect.ownKeys(object)) {
			props.add([object, key]);
		}
	} while ((object = Reflect.getPrototypeOf(object)) && object !== Object.prototype);

	return props;
};

module.exports = (self, options) => {
	options = Object.assign({}, options);

	const filter = key => {
		const match = pattern => typeof pattern === 'string' ? key === pattern : pattern.test(key);

		if (options.include) {
			return options.include.some(match);
		}

		if (options.exclude) {
			return !options.exclude.some(match);
		}

		return true;
	};

	for (const [object, key] of getAllProperties(self.constructor.prototype)) {
		if (key === 'constructor' || !filter(key)) {
			continue;
		}

		const descriptor = Reflect.getOwnPropertyDescriptor(object, key);
		if (descriptor && typeof descriptor.value === 'function') {
			self[key] = self[key].bind(self);
		}
	}

	return self;
};

const excludedReactMethods = [
	'componentWillMount',
	'UNSAFE_componentWillMount',
	'render',
	'getSnapshotBeforeUpdate',
	'componentDidMount',
	'componentWillReceiveProps',
	'UNSAFE_componentWillReceiveProps',
	'shouldComponentUpdate',
	'componentWillUpdate',
	'UNSAFE_componentWillUpdate',
	'componentDidUpdate',
	'componentWillUnmount',
	'componentDidCatch',
	'setState',
	'forceUpdate'
];

module.exports.react = (self, options) => {
	options = Object.assign({}, options);
	options.exclude = (options.exclude || []).concat(excludedReactMethods);
	return module.exports(self, options);
};


/***/ }),

/***/ "./node_modules/react-material-ui-carousel/dist/components/Carousel.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-material-ui-carousel/dist/components/Carousel.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Fade = __webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/esm/Fade/index.js");

var _Fade2 = _interopRequireDefault(_Fade);

var _Slide = __webpack_require__(/*! @material-ui/core/Slide */ "./node_modules/@material-ui/core/esm/Slide/index.js");

var _Slide2 = _interopRequireDefault(_Slide);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _autoBind = __webpack_require__(/*! auto-bind */ "./node_modules/auto-bind/index.js");

var _autoBind2 = _interopRequireDefault(_autoBind);

var _FiberManualRecord = __webpack_require__(/*! @material-ui/icons/FiberManualRecord */ "./node_modules/@material-ui/icons/FiberManualRecord.js");

var _FiberManualRecord2 = _interopRequireDefault(_FiberManualRecord);

var _NavigateBefore = __webpack_require__(/*! @material-ui/icons/NavigateBefore */ "./node_modules/@material-ui/icons/NavigateBefore.js");

var _NavigateBefore2 = _interopRequireDefault(_NavigateBefore);

var _NavigateNext = __webpack_require__(/*! @material-ui/icons/NavigateNext */ "./node_modules/@material-ui/icons/NavigateNext.js");

var _NavigateNext2 = _interopRequireDefault(_NavigateNext);

var _reactSwipeable = __webpack_require__(/*! react-swipeable */ "./node_modules/react-swipeable/dist/react-swipeable.umd.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    root: {
        position: "relative",
        overflow: "hidden"
    },
    indicators: {
        width: "100%",
        marginTop: "10px",
        textAlign: "center"
    },
    indicator: {
        cursor: "pointer",
        transition: "200ms",
        padding: 0,
        color: "#afafaf",
        '&:hover': {
            color: "#1f1f1f"
        },
        '&:active': {
            color: "#1f1f1f"
        }
    },
    indicatorIcon: {
        fontSize: "15px"
    },
    active: {
        color: "#494949"
    },
    buttonWrapper: {
        position: "absolute",
        height: "100px",
        backgroundColor: "transparent",
        top: "calc(50% - 70px)",
        '&:hover': {
            '& $button': {
                backgroundColor: "black",
                filter: "brightness(120%)",
                opacity: "0.4"
            }
        }
    },
    fullHeightHoverWrapper: {
        height: "100%", // This is 100% - indicator height - indicator margin
        top: "0"
    },
    buttonVisible: {
        opacity: "1"
    },
    buttonHidden: {
        opacity: "0"
    },
    button: {
        margin: "0 10px",
        position: "relative",
        backgroundColor: "#494949",
        top: "calc(50% - 20px) !important",
        color: "white",
        fontSize: "30px",
        transition: "200ms",
        cursor: "pointer",
        '&:hover': {
            opacity: "0.6 !important"
        }
    },
    next: {
        right: 0
    },
    prev: {
        left: 0
    }
};

var sanitizeStyleProps = function sanitizeStyleProps(props) {
    return props !== undefined ? {
        style: props.style !== undefined ? props.style : {},
        className: props.className !== undefined ? props.className : ""
    } : { style: {}, className: "" };
};

var sanitizeProps = function sanitizeProps(props) {
    var animation = props.animation !== undefined ? props.animation : "fade";
    var timeout = props.timeout !== undefined ? props.timeout : animation === "fade" ? 500 : 200;

    return {
        className: props.className !== undefined ? props.className : "",
        children: props.children ? props.children : [],

        index: props.index !== undefined ? props.index : 0,
        strictIndexing: props.strictIndexing !== undefined ? props.strictIndexing : true,

        autoPlay: props.autoPlay !== undefined ? props.autoPlay : true,
        stopAutoPlayOnHover: props.stopAutoPlayOnHover !== undefined ? props.stopAutoPlayOnHover : true,
        interval: props.interval !== undefined ? props.interval : 4000,

        animation: animation,
        timeout: timeout,

        swipe: props.swipe !== undefined ? props.swipe : true,

        navButtonsAlwaysInvisible: props.navButtonsAlwaysInvisible !== undefined ? props.navButtonsAlwaysInvisible : false,
        navButtonsAlwaysVisible: props.navButtonsAlwaysVisible !== undefined ? props.navButtonsAlwaysVisible : false,
        cycleNavigation: props.cycleNavigation !== undefined ? props.cycleNavigation : true,
        fullHeightHover: props.fullHeightHover !== undefined ? props.fullHeightHover : true,
        navButtonsWrapperProps: sanitizeStyleProps(props.navButtonsWrapperProps),
        navButtonsProps: sanitizeStyleProps(props.navButtonsProps),
        NavButton: props.NavButton,

        NextIcon: props.NextIcon !== undefined ? props.NextIcon : _react2.default.createElement(_NavigateNext2.default, null),
        PrevIcon: props.PrevIcon !== undefined ? props.PrevIcon : _react2.default.createElement(_NavigateBefore2.default, null),

        indicators: props.indicators !== undefined ? props.indicators : true,
        indicatorContainerProps: sanitizeStyleProps(props.indicatorContainerProps),
        indicatorIconButtonProps: sanitizeStyleProps(props.indicatorIconButtonProps),
        activeIndicatorIconButtonProps: sanitizeStyleProps(props.activeIndicatorIconButtonProps),
        IndicatorIcon: props.IndicatorIcon,

        onChange: props.onChange !== undefined ? props.onChange : function () {},
        changeOnFirstRender: props.changeOnFirstRender !== undefined ? props.changeOnFirstRender : false,
        next: props.next !== undefined ? props.next : function () {},
        prev: props.prev !== undefined ? props.prev : function () {}

    };
};

var Carousel = function (_Component) {
    _inherits(Carousel, _Component);

    function Carousel(props) {
        _classCallCheck(this, Carousel);

        var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

        (0, _autoBind2.default)(_this);

        _this.state = {
            active: 0,
            prevActive: 0,
            displayed: 0
        };

        _this.timer = null;
        return _this;
    }

    _createClass(Carousel, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _sanitizeProps = sanitizeProps(this.props),
                index = _sanitizeProps.index,
                changeOnFirstRender = _sanitizeProps.changeOnFirstRender;

            this.setActive(index, undefined, changeOnFirstRender);

            this.start();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.stop();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            prevProps = sanitizeProps(prevProps);

            var _sanitizeProps2 = sanitizeProps(this.props),
                autoPlay = _sanitizeProps2.autoPlay,
                interval = _sanitizeProps2.interval,
                children = _sanitizeProps2.children,
                index = _sanitizeProps2.index;

            if (autoPlay !== prevProps.autoPlay || interval !== prevProps.interval) {
                this.reset();
            }

            if (children.length !== prevProps.children.length) {
                this.setActive(index);
            }

            if (prevProps.index !== index) {
                this.setActive(index);
            }
        }
    }, {
        key: 'stop',
        value: function stop() {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
        }
    }, {
        key: 'start',
        value: function start() {
            var _sanitizeProps3 = sanitizeProps(this.props),
                autoPlay = _sanitizeProps3.autoPlay,
                interval = _sanitizeProps3.interval;

            if (autoPlay) {
                this.timer = setInterval(this.next, interval);
            }
        }
    }, {
        key: 'reset',
        value: function reset() {
            var _sanitizeProps4 = sanitizeProps(this.props),
                autoPlay = _sanitizeProps4.autoPlay;

            this.stop();

            if (autoPlay) {
                this.start();
            }
        }
    }, {
        key: 'setActive',
        value: function setActive(index) {
            var _this2 = this;

            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
            var runCallbacks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            var _sanitizeProps5 = sanitizeProps(this.props),
                onChange = _sanitizeProps5.onChange,
                timeout = _sanitizeProps5.timeout,
                children = _sanitizeProps5.children,
                strictIndexing = _sanitizeProps5.strictIndexing;

            // if index is bigger than the children length, set it to be the last child (if strictIndexing)


            if (Array.isArray(children)) {
                if (strictIndexing && index > children.length - 1) index = children.length - 1;
                if (strictIndexing && index < 0) index = 0;
            } else {
                index = 0;
            }

            var prevActive = this.state.active;

            this.setState({
                active: index,
                prevActive: prevActive,
                displayed: prevActive
            }, this.reset);

            setTimeout(function () {
                _this2.setState({
                    displayed: index
                }, function () {
                    if (runCallbacks) {
                        // Call user defined callbacks
                        callback(index, prevActive);
                        onChange(index, prevActive);
                    }
                });
            }, timeout.exit ? timeout.exit : timeout);
        }
    }, {
        key: 'next',
        value: function next(event) {
            var _sanitizeProps6 = sanitizeProps(this.props),
                children = _sanitizeProps6.children,
                next = _sanitizeProps6.next,
                cycleNavigation = _sanitizeProps6.cycleNavigation;

            var nextActive = this.state.active + 1 > children.length - 1 ? cycleNavigation ? 0 : this.state.active : this.state.active + 1;

            this.setActive(nextActive, next);

            if (event) event.stopPropagation();
        }
    }, {
        key: 'prev',
        value: function prev(event) {
            var _sanitizeProps7 = sanitizeProps(this.props),
                children = _sanitizeProps7.children,
                prev = _sanitizeProps7.prev,
                cycleNavigation = _sanitizeProps7.cycleNavigation;

            var nextActive = this.state.active - 1 < 0 ? cycleNavigation ? children.length - 1 : this.state.active : this.state.active - 1;

            this.setActive(nextActive, prev);

            if (event) event.stopPropagation();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _sanitizeProps8 = sanitizeProps(this.props),
                children = _sanitizeProps8.children,
                className = _sanitizeProps8.className,
                stopAutoPlayOnHover = _sanitizeProps8.stopAutoPlayOnHover,
                animation = _sanitizeProps8.animation,
                timeout = _sanitizeProps8.timeout,
                swipe = _sanitizeProps8.swipe,
                navButtonsAlwaysInvisible = _sanitizeProps8.navButtonsAlwaysInvisible,
                navButtonsAlwaysVisible = _sanitizeProps8.navButtonsAlwaysVisible,
                cycleNavigation = _sanitizeProps8.cycleNavigation,
                fullHeightHover = _sanitizeProps8.fullHeightHover,
                navButtonsProps = _sanitizeProps8.navButtonsProps,
                navButtonsWrapperProps = _sanitizeProps8.navButtonsWrapperProps,
                NavButton = _sanitizeProps8.NavButton,
                NextIcon = _sanitizeProps8.NextIcon,
                PrevIcon = _sanitizeProps8.PrevIcon,
                indicators = _sanitizeProps8.indicators,
                indicatorContainerProps = _sanitizeProps8.indicatorContainerProps,
                indicatorIconButtonProps = _sanitizeProps8.indicatorIconButtonProps,
                activeIndicatorIconButtonProps = _sanitizeProps8.activeIndicatorIconButtonProps,
                IndicatorIcon = _sanitizeProps8.IndicatorIcon;

            var classes = this.props.classes;

            var buttonVisibilityClassValue = '' + (navButtonsAlwaysVisible ? classes.buttonVisible : classes.buttonHidden);
            var buttonCssClassValue = classes.button + ' ' + buttonVisibilityClassValue + ' ' + (fullHeightHover ? classes.fullHeightHoverButton : "") + ' ' + navButtonsProps.className;
            var buttonWrapperCssClassValue = classes.buttonWrapper + ' ' + (fullHeightHover ? classes.fullHeightHoverWrapper : "") + ' ' + navButtonsWrapperProps.className;

            var compareActiveDisplayed = function compareActiveDisplayed() {
                if (_this3.state.active === 0 && _this3.state.prevActive === children.length - 1) {
                    return false;
                }

                if (_this3.state.active === children.length - 1 && _this3.state.prevActive === 0) {
                    return true;
                }

                if (_this3.state.active > _this3.state.prevActive) {
                    return true;
                }

                return false;
            };

            var showButton = function showButton() {
                var next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

                if (cycleNavigation) return true;

                if (next && _this3.state.active + 1 > children.length - 1) return false;
                if (!next && _this3.state.active - 1 < 0) return false;

                return true;
            };

            return _react2.default.createElement(
                'div',
                {
                    className: classes.root + ' ' + (className ? className : ""),
                    onMouseOver: function onMouseOver() {
                        stopAutoPlayOnHover && _this3.stop();
                    },
                    onMouseOut: function onMouseOut() {
                        stopAutoPlayOnHover && _this3.reset();
                    }
                },
                Array.isArray(children) ? children.map(function (child, index) {
                    return _react2.default.createElement(CarouselItem, {
                        key: 'carousel-item' + index,
                        display: index === _this3.state.displayed ? true : false,
                        active: index === _this3.state.active ? true : false,
                        isNext: compareActiveDisplayed(),
                        child: child,
                        animation: animation,
                        timeout: timeout,
                        swipe: swipe,
                        next: _this3.next,
                        prev: _this3.prev
                    });
                }) : _react2.default.createElement(CarouselItem, {
                    key: 'carousel-item0',
                    display: true,
                    active: true,
                    child: children,
                    animation: animation,
                    timeout: timeout
                }),
                !navButtonsAlwaysInvisible && showButton(true) && _react2.default.createElement(
                    'div',
                    { className: buttonWrapperCssClassValue + ' ' + classes.next, style: navButtonsWrapperProps.style },
                    NavButton !== undefined ? NavButton({ onClick: this.next, className: buttonCssClassValue, style: navButtonsProps.style, next: true, prev: false }) : _react2.default.createElement(
                        _IconButton2.default,
                        { className: '' + buttonCssClassValue, onClick: this.next, 'aria-label': 'Next', style: navButtonsProps.style },
                        NextIcon
                    )
                ),
                !navButtonsAlwaysInvisible && showButton(false) && _react2.default.createElement(
                    'div',
                    { className: buttonWrapperCssClassValue + ' ' + classes.prev, style: navButtonsWrapperProps.style },
                    NavButton !== undefined ? NavButton({ onClick: this.prev, className: buttonCssClassValue, style: navButtonsProps.style, next: false, prev: true }) : _react2.default.createElement(
                        _IconButton2.default,
                        { className: '' + buttonCssClassValue, onClick: this.prev, 'aria-label': 'Previous', style: navButtonsProps.style },
                        PrevIcon
                    )
                ),
                indicators ? _react2.default.createElement(Indicators, {
                    classes: classes,
                    length: children.length,
                    active: this.state.active,
                    press: this.setActive,
                    indicatorContainerProps: indicatorContainerProps,
                    indicatorIconButtonProps: indicatorIconButtonProps,
                    activeIndicatorIconButtonProps: activeIndicatorIconButtonProps,
                    IndicatorIcon: IndicatorIcon
                }) : null
            );
        }
    }]);

    return Carousel;
}(_react.Component);

function CarouselItem(props) {
    var swipeHandlers = (0, _reactSwipeable.useSwipeable)({
        onSwipedLeft: function onSwipedLeft() {
            return props.next();
        },
        onSwipedRight: function onSwipedRight() {
            return props.prev();
        }
    });

    swipeHandlers = props.swipe ? swipeHandlers : {};

    return props.display ? _react2.default.createElement(
        'div',
        _extends({}, swipeHandlers, { className: 'CarouselItem' }),
        props.animation === "slide" ? _react2.default.createElement(
            _Slide2.default,
            { direction: props.active ? props.isNext ? "left" : "right" : props.isNext ? "right" : "left", 'in': props.active, timeout: props.timeout },
            _react2.default.createElement(
                'div',
                null,
                props.child
            )
        ) : _react2.default.createElement(
            _Fade2.default,
            { 'in': props.active, timeout: props.timeout },
            _react2.default.createElement(
                'div',
                null,
                props.child
            )
        )
    ) : null;
}

function Indicators(props) {
    var classes = props.classes;
    var IndicatorIcon = props.IndicatorIcon !== undefined ? props.IndicatorIcon : _react2.default.createElement(_FiberManualRecord2.default, {
        size: 'small',
        className: classes.indicatorIcon
    });

    var indicators = [];

    var _loop = function _loop(i) {
        var className = i === props.active ? classes.indicator + ' ' + props.indicatorIconButtonProps.className + ' ' + classes.active + ' ' + props.activeIndicatorIconButtonProps.className : classes.indicator + ' ' + props.indicatorIconButtonProps.className;

        var style = i === props.active ? Object.assign({}, props.indicatorIconButtonProps.style, props.activeIndicatorIconButtonProps.style) : props.indicatorIconButtonProps.style;

        var item = _react2.default.createElement(
            _IconButton2.default,
            {
                key: i,
                className: className,
                style: style,
                onClick: function onClick() {
                    props.press(i);
                },
                size: 'small'
            },
            IndicatorIcon
        );

        indicators.push(item);
    };

    for (var i = 0; i < props.length; i++) {
        _loop(i);
    }

    var wrapperStyle = props.indicatorContainerProps !== undefined ? props.indicatorContainerProps.style : undefined;
    var wrapperClassName = props.indicatorContainerProps !== undefined ? props.indicatorContainerProps.className : "";

    return _react2.default.createElement(
        'div',
        { className: classes.indicators + ' ' + wrapperClassName, style: wrapperStyle },
        indicators
    );
}

exports.default = (0, _styles.withStyles)(styles)(Carousel);

/***/ }),

/***/ "./node_modules/react-material-ui-carousel/dist/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-material-ui-carousel/dist/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _Carousel = __webpack_require__(/*! ./components/Carousel */ "./node_modules/react-material-ui-carousel/dist/components/Carousel.js");

var _Carousel2 = _interopRequireDefault(_Carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Carousel2.default;

/***/ }),

/***/ "./node_modules/react-swipeable/dist/react-swipeable.umd.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-swipeable/dist/react-swipeable.umd.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! react */ "./node_modules/react/index.js")) :
  0;
}(this, (function (exports, React) {
  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  var LEFT = "Left";
  var RIGHT = "Right";
  var UP = "Up";
  var DOWN = "Down";

  var defaultProps = {
    delta: 10,
    preventDefaultTouchmoveEvent: false,
    rotationAngle: 0,
    trackMouse: false,
    trackTouch: true
  };
  var initialState = {
    first: true,
    initial: [0, 0],
    start: 0,
    swiping: false,
    xy: [0, 0]
  };
  var mouseMove = "mousemove";
  var mouseUp = "mouseup";
  var touchEnd = "touchend";
  var touchMove = "touchmove";
  var touchStart = "touchstart";

  function getDirection(absX, absY, deltaX, deltaY) {
    if (absX > absY) {
      if (deltaX > 0) {
        return RIGHT;
      }

      return LEFT;
    } else if (deltaY > 0) {
      return DOWN;
    }

    return UP;
  }

  function rotateXYByAngle(pos, angle) {
    if (angle === 0) return pos;
    var angleInRadians = Math.PI / 180 * angle;
    var x = pos[0] * Math.cos(angleInRadians) + pos[1] * Math.sin(angleInRadians);
    var y = pos[1] * Math.cos(angleInRadians) - pos[0] * Math.sin(angleInRadians);
    return [x, y];
  }

  function getHandlers(set, handlerProps) {
    var onStart = function onStart(event) {
      // if more than a single touch don't track, for now...
      if (event && "touches" in event && event.touches.length > 1) return;
      set(function (state, props) {
        // setup mouse listeners on document to track swipe since swipe can leave container
        if (props.trackMouse) {
          document.addEventListener(mouseMove, onMove);
          document.addEventListener(mouseUp, onUp);
        }

        var _ref = "touches" in event ? event.touches[0] : event,
            clientX = _ref.clientX,
            clientY = _ref.clientY;

        var xy = rotateXYByAngle([clientX, clientY], props.rotationAngle);
        return _extends({}, state, initialState, {
          initial: [].concat(xy),
          xy: xy,
          start: event.timeStamp || 0
        });
      });
    };

    var onMove = function onMove(event) {
      set(function (state, props) {
        // Discount a swipe if additional touches are present after
        // a swipe has started.
        if ("touches" in event && event.touches.length > 1) {
          return state;
        }

        var _ref2 = "touches" in event ? event.touches[0] : event,
            clientX = _ref2.clientX,
            clientY = _ref2.clientY;

        var _rotateXYByAngle = rotateXYByAngle([clientX, clientY], props.rotationAngle),
            x = _rotateXYByAngle[0],
            y = _rotateXYByAngle[1];

        var deltaX = x - state.xy[0];
        var deltaY = y - state.xy[1];
        var absX = Math.abs(deltaX);
        var absY = Math.abs(deltaY);
        var time = (event.timeStamp || 0) - state.start;
        var velocity = Math.sqrt(absX * absX + absY * absY) / (time || 1);
        var vxvy = [deltaX / (time || 1), deltaY / (time || 1)]; // if swipe is under delta and we have not started to track a swipe: skip update

        if (absX < props.delta && absY < props.delta && !state.swiping) return state;
        var dir = getDirection(absX, absY, deltaX, deltaY);
        var eventData = {
          absX: absX,
          absY: absY,
          deltaX: deltaX,
          deltaY: deltaY,
          dir: dir,
          event: event,
          first: state.first,
          initial: state.initial,
          velocity: velocity,
          vxvy: vxvy
        }; // call onSwipeStart if present and is first swipe event

        eventData.first && props.onSwipeStart && props.onSwipeStart(eventData); // Call onSwiping if present

        props.onSwiping && props.onSwiping(eventData); // track if a swipe is cancelable(handler for swiping or swiped(dir) exists)
        // so we can call preventDefault if needed

        var cancelablePageSwipe = false;

        if (props.onSwiping || props.onSwiped || "onSwiped" + dir in props) {
          cancelablePageSwipe = true;
        }

        if (cancelablePageSwipe && props.preventDefaultTouchmoveEvent && props.trackTouch && event.cancelable) event.preventDefault();
        return _extends({}, state, {
          // first is now always false
          first: false,
          eventData: eventData,
          swiping: true
        });
      });
    };

    var onEnd = function onEnd(event) {
      set(function (state, props) {
        var eventData;

        if (state.swiping && state.eventData) {
          eventData = _extends({}, state.eventData, {
            event: event
          });
          props.onSwiped && props.onSwiped(eventData);
          var onSwipedDir = "onSwiped" + eventData.dir;

          if (onSwipedDir in props) {
            props[onSwipedDir](eventData);
          }
        } else {
          props.onTap && props.onTap({
            event: event
          });
        }

        return _extends({}, state, initialState, {
          eventData: eventData
        });
      });
    };

    var cleanUpMouse = function cleanUpMouse() {
      // safe to just call removeEventListener
      document.removeEventListener(mouseMove, onMove);
      document.removeEventListener(mouseUp, onUp);
    };

    var onUp = function onUp(e) {
      cleanUpMouse();
      onEnd(e);
    };
    /**
     * Switch of "passive" property for now.
     * When `preventDefaultTouchmoveEvent` is:
     * - true => { passive: false }
     * - false => { passive: true }
     *
     * Could take entire `addEventListener` options object as a param later?
     */


    var attachTouch = function attachTouch(el, passive) {
      var cleanup = function cleanup() {};

      if (el && el.addEventListener) {
        // attach touch event listeners and handlers
        var tls = [[touchStart, onStart], [touchMove, onMove], [touchEnd, onEnd]];
        tls.forEach(function (_ref3) {
          var e = _ref3[0],
              h = _ref3[1];
          return el.addEventListener(e, h, {
            passive: passive
          });
        }); // return properly scoped cleanup method for removing listeners, options not required

        cleanup = function cleanup() {
          return tls.forEach(function (_ref4) {
            var e = _ref4[0],
                h = _ref4[1];
            return el.removeEventListener(e, h);
          });
        };
      }

      return cleanup;
    };

    var onRef = function onRef(el) {
      // "inline" ref functions are called twice on render, once with null then again with DOM element
      // ignore null here
      if (el === null) return;
      set(function (state, props) {
        // if the same DOM el as previous just return state
        if (state.el === el) return state;
        var addState = {}; // if new DOM el clean up old DOM and reset cleanUpTouch

        if (state.el && state.el !== el && state.cleanUpTouch) {
          state.cleanUpTouch();
          addState.cleanUpTouch = undefined;
        } // only attach if we want to track touch


        if (props.trackTouch && el) {
          addState.cleanUpTouch = attachTouch(el, !props.preventDefaultTouchmoveEvent);
        } // store event attached DOM el for comparison, clean up, and re-attachment


        return _extends({}, state, {
          el: el
        }, addState);
      });
    }; // set ref callback to attach touch event listeners


    var output = {
      ref: onRef
    }; // if track mouse attach mouse down listener

    if (handlerProps.trackMouse) {
      output.onMouseDown = onStart;
    }

    return [output, attachTouch];
  }

  function updateTransientState(state, props, attachTouch) {
    var addState = {}; // clean up touch handlers if no longer tracking touches

    if (!props.trackTouch && state.cleanUpTouch) {
      state.cleanUpTouch();
      addState.cleanUpTouch = undefined;
    } else if (props.trackTouch && !state.cleanUpTouch) {
      // attach/re-attach touch handlers
      if (state.el) {
        addState.cleanUpTouch = attachTouch(state.el, !props.preventDefaultTouchmoveEvent);
      }
    }

    return _extends({}, state, addState);
  }

  function useSwipeable(options) {
    var trackMouse = options.trackMouse;
    var transientState = React.useRef(_extends({}, initialState));
    var transientProps = React.useRef(_extends({}, defaultProps));
    transientProps.current = _extends({}, defaultProps, options);

    var _React$useMemo = React.useMemo(function () {
      return getHandlers(function (stateSetter) {
        return transientState.current = stateSetter(transientState.current, transientProps.current);
      }, {
        trackMouse: trackMouse
      });
    }, [trackMouse]),
        handlers = _React$useMemo[0],
        attachTouch = _React$useMemo[1];

    transientState.current = updateTransientState(transientState.current, transientProps.current, attachTouch);
    return handlers;
  }

  exports.DOWN = DOWN;
  exports.LEFT = LEFT;
  exports.RIGHT = RIGHT;
  exports.UP = UP;
  exports.useSwipeable = useSwipeable;

})));
//# sourceMappingURL=react-swipeable.umd.js.map


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvaWNvbnMvRmliZXJNYW51YWxSZWNvcmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVCZWZvcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVOZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXlDYXJvdXNlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZWFtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXV0by1iaW5kL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtbWF0ZXJpYWwtdWktY2Fyb3VzZWwvZGlzdC9jb21wb25lbnRzL0Nhcm91c2VsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtbWF0ZXJpYWwtdWktY2Fyb3VzZWwvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN3aXBlYWJsZS9kaXN0L3JlYWN0LXN3aXBlYWJsZS51bWQuanMiXSwibmFtZXMiOlsiTXlDYXJvdXNlbCIsInByb3BzIiwiaXRlbXMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJtYXAiLCJpdGVtIiwiaSIsIkl0ZW0iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImJhY2tncm91bmRDb2xvciIsInN0YWZmQ29udGFpbmVyIiwiaGVhZGluZyIsInBvcyIsIm1hcmdpbkJvdHRvbSIsIlRlYW0iLCJjbGFzc2VzIiwiVHlwb2dyYXBoeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLHNGQUErQjs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUM7Ozs7Ozs7Ozs7QUN0REE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7Ozs7OztBQ2hCYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7O0FBRW5GLDhCQUE4QixtQkFBTyxDQUFDLHNIQUErQzs7QUFFckYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsZUFBZTs7QUFFZixvQ0FBb0MsbUJBQU8sQ0FBQyw0Q0FBTzs7QUFFbkQsNENBQTRDLG1CQUFPLENBQUMsdUZBQXVCOztBQUUzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsZUFBZSxZOzs7Ozs7Ozs7OztBQ3JCRjs7QUFF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QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQSxLQUFLLElBQUksVUFBVTtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdGQUFnRjtBQUNoRjtBQUNBLG9FQUFvRTtBQUNwRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUyxFQUFFOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0EsU0FBUzs7O0FBR1QsMEJBQTBCO0FBQzFCO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxNQUFNOzs7QUFHTjtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQsaURBQWlEO0FBQ2pELHdDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yYjQxMDdmZWVkMjNmYjcyZjQyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgY3g6IFwiMTJcIixcbiAgY3k6IFwiMTJcIixcbiAgcjogXCI4XCJcbn0pLCAnRmliZXJNYW51YWxSZWNvcmQnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE1LjQxIDcuNDFMMTQgNmwtNiA2IDYgNiAxLjQxLTEuNDFMMTAuODMgMTJ6XCJcbn0pLCAnTmF2aWdhdGVCZWZvcmUnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTEwIDZMOC41OSA3LjQxIDEzLjE3IDEybC00LjU4IDQuNTlMMTAgMThsNi02elwiXG59KSwgJ05hdmlnYXRlTmV4dCcpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlZmF1bHRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3V0aWxzLmNyZWF0ZVN2Z0ljb247XG4gIH1cbn0pO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3V0aWxzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbWF0ZXJpYWwtdWktY2Fyb3VzZWwnXG5pbXBvcnQgeyBQYXBlciwgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5cbmZ1bmN0aW9uIE15Q2Fyb3VzZWwocHJvcHMpXG57XG4gICAgdmFyIGl0ZW1zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlJhbmRvbSBOYW1lICMxXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJQcm9iYWJseSB0aGUgbW9zdCByYW5kb20gdGhpbmcgeW91IGhhdmUgZXZlciBzZWVuIVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiUmFuZG9tIE5hbWUgIzJcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkhlbGxvIFdvcmxkIVwiXG4gICAgICAgIH1cbiAgICBdXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2Fyb3VzZWw+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXRlbXMubWFwKCAoaXRlbSwgaSkgPT4gPEl0ZW0ga2V5PXtpfSBpdGVtPXtpdGVtfSAvPiApXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBJdGVtKHByb3BzKVxue1xuICAgIHJldHVybiAoXG4gICAgICAgIDxQYXBlcj5cbiAgICAgICAgICAgIDxoMj57cHJvcHMuaXRlbS5uYW1lfTwvaDI+XG4gICAgICAgICAgICA8cD57cHJvcHMuaXRlbS5kZXNjcmlwdGlvbn08L3A+XG5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiQ2hlY2tCdXR0b25cIj5cbiAgICAgICAgICAgICAgICBDaGVjayBpdCBvdXQhXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9QYXBlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15Q2Fyb3VzZWw7XG5cblxuIiwiaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtCb3gsIEdyaWQsIENhcmQsIEF2YXRhcixDYXJkQWN0aW9ucywgQ2FyZENvbnRlbnQsIFR5cG9ncmFwaHksIEJ1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IE15Q2Fyb3VzZWwgZnJvbSAnLi4vTXlDYXJvdXNlbCdcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgXG4gICAgcm9vdDp7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAvLyBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNTU0Mjg3J1xuXG4gICAgfSxcbiAgICBzdGFmZkNvbnRhaW5lcjoge1xuXG4gICAgfSxcbiAgICAgIGhlYWRpbmc6IHtcblxuICAgICAgICBcbiAgICAgIH0sXG4gICAgICBwb3M6IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiAxMixcbiAgICAgIH0sXG5cbn0pKTtcblxuXG5cblxuY29uc3QgVGVhbSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZSA9IHtjbGFzc2VzLnN0YWZmQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gY29tcG9uZW50PSB7VHlwb2dyYXBoeX0gdmFyaWFudCA9ICdoMycgY2xhc3NOYW1lPSB7Y2xhc3Nlcy5oZWFkaW5nfT5cbiAgICAgICAgICAgICAgTWVldCBvdXIgVGVhbVxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSBjb21wb25lbnQ9J2Rpdic+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlYW07IiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBHZXRzIGFsbCBub24tYnVpbHRpbiBwcm9wZXJ0aWVzIHVwIHRoZSBwcm90b3R5cGUgY2hhaW5cbmNvbnN0IGdldEFsbFByb3BlcnRpZXMgPSBvYmplY3QgPT4ge1xuXHRjb25zdCBwcm9wcyA9IG5ldyBTZXQoKTtcblxuXHRkbyB7XG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgUmVmbGVjdC5vd25LZXlzKG9iamVjdCkpIHtcblx0XHRcdHByb3BzLmFkZChbb2JqZWN0LCBrZXldKTtcblx0XHR9XG5cdH0gd2hpbGUgKChvYmplY3QgPSBSZWZsZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCkpICYmIG9iamVjdCAhPT0gT2JqZWN0LnByb3RvdHlwZSk7XG5cblx0cmV0dXJuIHByb3BzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSAoc2VsZiwgb3B0aW9ucykgPT4ge1xuXHRvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG5cblx0Y29uc3QgZmlsdGVyID0ga2V5ID0+IHtcblx0XHRjb25zdCBtYXRjaCA9IHBhdHRlcm4gPT4gdHlwZW9mIHBhdHRlcm4gPT09ICdzdHJpbmcnID8ga2V5ID09PSBwYXR0ZXJuIDogcGF0dGVybi50ZXN0KGtleSk7XG5cblx0XHRpZiAob3B0aW9ucy5pbmNsdWRlKSB7XG5cdFx0XHRyZXR1cm4gb3B0aW9ucy5pbmNsdWRlLnNvbWUobWF0Y2gpO1xuXHRcdH1cblxuXHRcdGlmIChvcHRpb25zLmV4Y2x1ZGUpIHtcblx0XHRcdHJldHVybiAhb3B0aW9ucy5leGNsdWRlLnNvbWUobWF0Y2gpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cdGZvciAoY29uc3QgW29iamVjdCwga2V5XSBvZiBnZXRBbGxQcm9wZXJ0aWVzKHNlbGYuY29uc3RydWN0b3IucHJvdG90eXBlKSkge1xuXHRcdGlmIChrZXkgPT09ICdjb25zdHJ1Y3RvcicgfHwgIWZpbHRlcihrZXkpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBrZXkpO1xuXHRcdGlmIChkZXNjcmlwdG9yICYmIHR5cGVvZiBkZXNjcmlwdG9yLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRzZWxmW2tleV0gPSBzZWxmW2tleV0uYmluZChzZWxmKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc2VsZjtcbn07XG5cbmNvbnN0IGV4Y2x1ZGVkUmVhY3RNZXRob2RzID0gW1xuXHQnY29tcG9uZW50V2lsbE1vdW50Jyxcblx0J1VOU0FGRV9jb21wb25lbnRXaWxsTW91bnQnLFxuXHQncmVuZGVyJyxcblx0J2dldFNuYXBzaG90QmVmb3JlVXBkYXRlJyxcblx0J2NvbXBvbmVudERpZE1vdW50Jyxcblx0J2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuXHQnVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuXHQnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcblx0J2NvbXBvbmVudFdpbGxVcGRhdGUnLFxuXHQnVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUnLFxuXHQnY29tcG9uZW50RGlkVXBkYXRlJyxcblx0J2NvbXBvbmVudFdpbGxVbm1vdW50Jyxcblx0J2NvbXBvbmVudERpZENhdGNoJyxcblx0J3NldFN0YXRlJyxcblx0J2ZvcmNlVXBkYXRlJ1xuXTtcblxubW9kdWxlLmV4cG9ydHMucmVhY3QgPSAoc2VsZiwgb3B0aW9ucykgPT4ge1xuXHRvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG5cdG9wdGlvbnMuZXhjbHVkZSA9IChvcHRpb25zLmV4Y2x1ZGUgfHwgW10pLmNvbmNhdChleGNsdWRlZFJlYWN0TWV0aG9kcyk7XG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cyhzZWxmLCBvcHRpb25zKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0ZhZGUgPSByZXF1aXJlKCdAbWF0ZXJpYWwtdWkvY29yZS9GYWRlJyk7XG5cbnZhciBfRmFkZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GYWRlKTtcblxudmFyIF9TbGlkZSA9IHJlcXVpcmUoJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlJyk7XG5cbnZhciBfU2xpZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2xpZGUpO1xuXG52YXIgX0ljb25CdXR0b24gPSByZXF1aXJlKCdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJyk7XG5cbnZhciBfSWNvbkJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JY29uQnV0dG9uKTtcblxudmFyIF9zdHlsZXMgPSByZXF1aXJlKCdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnKTtcblxudmFyIF9hdXRvQmluZCA9IHJlcXVpcmUoJ2F1dG8tYmluZCcpO1xuXG52YXIgX2F1dG9CaW5kMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F1dG9CaW5kKTtcblxudmFyIF9GaWJlck1hbnVhbFJlY29yZCA9IHJlcXVpcmUoJ0BtYXRlcmlhbC11aS9pY29ucy9GaWJlck1hbnVhbFJlY29yZCcpO1xuXG52YXIgX0ZpYmVyTWFudWFsUmVjb3JkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZpYmVyTWFudWFsUmVjb3JkKTtcblxudmFyIF9OYXZpZ2F0ZUJlZm9yZSA9IHJlcXVpcmUoJ0BtYXRlcmlhbC11aS9pY29ucy9OYXZpZ2F0ZUJlZm9yZScpO1xuXG52YXIgX05hdmlnYXRlQmVmb3JlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05hdmlnYXRlQmVmb3JlKTtcblxudmFyIF9OYXZpZ2F0ZU5leHQgPSByZXF1aXJlKCdAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVOZXh0Jyk7XG5cbnZhciBfTmF2aWdhdGVOZXh0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05hdmlnYXRlTmV4dCk7XG5cbnZhciBfcmVhY3RTd2lwZWFibGUgPSByZXF1aXJlKCdyZWFjdC1zd2lwZWFibGUnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgc3R5bGVzID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCJcbiAgICB9LFxuICAgIGluZGljYXRvcnM6IHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBtYXJnaW5Ub3A6IFwiMTBweFwiLFxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgICB9LFxuICAgIGluZGljYXRvcjoge1xuICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICB0cmFuc2l0aW9uOiBcIjIwMG1zXCIsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGNvbG9yOiBcIiNhZmFmYWZcIixcbiAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICBjb2xvcjogXCIjMWYxZjFmXCJcbiAgICAgICAgfSxcbiAgICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICAgICAgY29sb3I6IFwiIzFmMWYxZlwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGluZGljYXRvckljb246IHtcbiAgICAgICAgZm9udFNpemU6IFwiMTVweFwiXG4gICAgfSxcbiAgICBhY3RpdmU6IHtcbiAgICAgICAgY29sb3I6IFwiIzQ5NDk0OVwiXG4gICAgfSxcbiAgICBidXR0b25XcmFwcGVyOiB7XG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIGhlaWdodDogXCIxMDBweFwiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgdG9wOiBcImNhbGMoNTAlIC0gNzBweClcIixcbiAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICAnJiAkYnV0dG9uJzoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgIGZpbHRlcjogXCJicmlnaHRuZXNzKDEyMCUpXCIsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogXCIwLjRcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBmdWxsSGVpZ2h0SG92ZXJXcmFwcGVyOiB7XG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsIC8vIFRoaXMgaXMgMTAwJSAtIGluZGljYXRvciBoZWlnaHQgLSBpbmRpY2F0b3IgbWFyZ2luXG4gICAgICAgIHRvcDogXCIwXCJcbiAgICB9LFxuICAgIGJ1dHRvblZpc2libGU6IHtcbiAgICAgICAgb3BhY2l0eTogXCIxXCJcbiAgICB9LFxuICAgIGJ1dHRvbkhpZGRlbjoge1xuICAgICAgICBvcGFjaXR5OiBcIjBcIlxuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICAgIG1hcmdpbjogXCIwIDEwcHhcIixcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM0OTQ5NDlcIixcbiAgICAgICAgdG9wOiBcImNhbGMoNTAlIC0gMjBweCkgIWltcG9ydGFudFwiLFxuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICBmb250U2l6ZTogXCIzMHB4XCIsXG4gICAgICAgIHRyYW5zaXRpb246IFwiMjAwbXNcIixcbiAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICBvcGFjaXR5OiBcIjAuNiAhaW1wb3J0YW50XCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbmV4dDoge1xuICAgICAgICByaWdodDogMFxuICAgIH0sXG4gICAgcHJldjoge1xuICAgICAgICBsZWZ0OiAwXG4gICAgfVxufTtcblxudmFyIHNhbml0aXplU3R5bGVQcm9wcyA9IGZ1bmN0aW9uIHNhbml0aXplU3R5bGVQcm9wcyhwcm9wcykge1xuICAgIHJldHVybiBwcm9wcyAhPT0gdW5kZWZpbmVkID8ge1xuICAgICAgICBzdHlsZTogcHJvcHMuc3R5bGUgIT09IHVuZGVmaW5lZCA/IHByb3BzLnN0eWxlIDoge30sXG4gICAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lICE9PSB1bmRlZmluZWQgPyBwcm9wcy5jbGFzc05hbWUgOiBcIlwiXG4gICAgfSA6IHsgc3R5bGU6IHt9LCBjbGFzc05hbWU6IFwiXCIgfTtcbn07XG5cbnZhciBzYW5pdGl6ZVByb3BzID0gZnVuY3Rpb24gc2FuaXRpemVQcm9wcyhwcm9wcykge1xuICAgIHZhciBhbmltYXRpb24gPSBwcm9wcy5hbmltYXRpb24gIT09IHVuZGVmaW5lZCA/IHByb3BzLmFuaW1hdGlvbiA6IFwiZmFkZVwiO1xuICAgIHZhciB0aW1lb3V0ID0gcHJvcHMudGltZW91dCAhPT0gdW5kZWZpbmVkID8gcHJvcHMudGltZW91dCA6IGFuaW1hdGlvbiA9PT0gXCJmYWRlXCIgPyA1MDAgOiAyMDA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkID8gcHJvcHMuY2xhc3NOYW1lIDogXCJcIixcbiAgICAgICAgY2hpbGRyZW46IHByb3BzLmNoaWxkcmVuID8gcHJvcHMuY2hpbGRyZW4gOiBbXSxcblxuICAgICAgICBpbmRleDogcHJvcHMuaW5kZXggIT09IHVuZGVmaW5lZCA/IHByb3BzLmluZGV4IDogMCxcbiAgICAgICAgc3RyaWN0SW5kZXhpbmc6IHByb3BzLnN0cmljdEluZGV4aW5nICE9PSB1bmRlZmluZWQgPyBwcm9wcy5zdHJpY3RJbmRleGluZyA6IHRydWUsXG5cbiAgICAgICAgYXV0b1BsYXk6IHByb3BzLmF1dG9QbGF5ICE9PSB1bmRlZmluZWQgPyBwcm9wcy5hdXRvUGxheSA6IHRydWUsXG4gICAgICAgIHN0b3BBdXRvUGxheU9uSG92ZXI6IHByb3BzLnN0b3BBdXRvUGxheU9uSG92ZXIgIT09IHVuZGVmaW5lZCA/IHByb3BzLnN0b3BBdXRvUGxheU9uSG92ZXIgOiB0cnVlLFxuICAgICAgICBpbnRlcnZhbDogcHJvcHMuaW50ZXJ2YWwgIT09IHVuZGVmaW5lZCA/IHByb3BzLmludGVydmFsIDogNDAwMCxcblxuICAgICAgICBhbmltYXRpb246IGFuaW1hdGlvbixcbiAgICAgICAgdGltZW91dDogdGltZW91dCxcblxuICAgICAgICBzd2lwZTogcHJvcHMuc3dpcGUgIT09IHVuZGVmaW5lZCA/IHByb3BzLnN3aXBlIDogdHJ1ZSxcblxuICAgICAgICBuYXZCdXR0b25zQWx3YXlzSW52aXNpYmxlOiBwcm9wcy5uYXZCdXR0b25zQWx3YXlzSW52aXNpYmxlICE9PSB1bmRlZmluZWQgPyBwcm9wcy5uYXZCdXR0b25zQWx3YXlzSW52aXNpYmxlIDogZmFsc2UsXG4gICAgICAgIG5hdkJ1dHRvbnNBbHdheXNWaXNpYmxlOiBwcm9wcy5uYXZCdXR0b25zQWx3YXlzVmlzaWJsZSAhPT0gdW5kZWZpbmVkID8gcHJvcHMubmF2QnV0dG9uc0Fsd2F5c1Zpc2libGUgOiBmYWxzZSxcbiAgICAgICAgY3ljbGVOYXZpZ2F0aW9uOiBwcm9wcy5jeWNsZU5hdmlnYXRpb24gIT09IHVuZGVmaW5lZCA/IHByb3BzLmN5Y2xlTmF2aWdhdGlvbiA6IHRydWUsXG4gICAgICAgIGZ1bGxIZWlnaHRIb3ZlcjogcHJvcHMuZnVsbEhlaWdodEhvdmVyICE9PSB1bmRlZmluZWQgPyBwcm9wcy5mdWxsSGVpZ2h0SG92ZXIgOiB0cnVlLFxuICAgICAgICBuYXZCdXR0b25zV3JhcHBlclByb3BzOiBzYW5pdGl6ZVN0eWxlUHJvcHMocHJvcHMubmF2QnV0dG9uc1dyYXBwZXJQcm9wcyksXG4gICAgICAgIG5hdkJ1dHRvbnNQcm9wczogc2FuaXRpemVTdHlsZVByb3BzKHByb3BzLm5hdkJ1dHRvbnNQcm9wcyksXG4gICAgICAgIE5hdkJ1dHRvbjogcHJvcHMuTmF2QnV0dG9uLFxuXG4gICAgICAgIE5leHRJY29uOiBwcm9wcy5OZXh0SWNvbiAhPT0gdW5kZWZpbmVkID8gcHJvcHMuTmV4dEljb24gOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfTmF2aWdhdGVOZXh0Mi5kZWZhdWx0LCBudWxsKSxcbiAgICAgICAgUHJldkljb246IHByb3BzLlByZXZJY29uICE9PSB1bmRlZmluZWQgPyBwcm9wcy5QcmV2SWNvbiA6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9OYXZpZ2F0ZUJlZm9yZTIuZGVmYXVsdCwgbnVsbCksXG5cbiAgICAgICAgaW5kaWNhdG9yczogcHJvcHMuaW5kaWNhdG9ycyAhPT0gdW5kZWZpbmVkID8gcHJvcHMuaW5kaWNhdG9ycyA6IHRydWUsXG4gICAgICAgIGluZGljYXRvckNvbnRhaW5lclByb3BzOiBzYW5pdGl6ZVN0eWxlUHJvcHMocHJvcHMuaW5kaWNhdG9yQ29udGFpbmVyUHJvcHMpLFxuICAgICAgICBpbmRpY2F0b3JJY29uQnV0dG9uUHJvcHM6IHNhbml0aXplU3R5bGVQcm9wcyhwcm9wcy5pbmRpY2F0b3JJY29uQnV0dG9uUHJvcHMpLFxuICAgICAgICBhY3RpdmVJbmRpY2F0b3JJY29uQnV0dG9uUHJvcHM6IHNhbml0aXplU3R5bGVQcm9wcyhwcm9wcy5hY3RpdmVJbmRpY2F0b3JJY29uQnV0dG9uUHJvcHMpLFxuICAgICAgICBJbmRpY2F0b3JJY29uOiBwcm9wcy5JbmRpY2F0b3JJY29uLFxuXG4gICAgICAgIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSAhPT0gdW5kZWZpbmVkID8gcHJvcHMub25DaGFuZ2UgOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgY2hhbmdlT25GaXJzdFJlbmRlcjogcHJvcHMuY2hhbmdlT25GaXJzdFJlbmRlciAhPT0gdW5kZWZpbmVkID8gcHJvcHMuY2hhbmdlT25GaXJzdFJlbmRlciA6IGZhbHNlLFxuICAgICAgICBuZXh0OiBwcm9wcy5uZXh0ICE9PSB1bmRlZmluZWQgPyBwcm9wcy5uZXh0IDogZnVuY3Rpb24gKCkge30sXG4gICAgICAgIHByZXY6IHByb3BzLnByZXYgIT09IHVuZGVmaW5lZCA/IHByb3BzLnByZXYgOiBmdW5jdGlvbiAoKSB7fVxuXG4gICAgfTtcbn07XG5cbnZhciBDYXJvdXNlbCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKENhcm91c2VsLCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIENhcm91c2VsKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYXJvdXNlbCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENhcm91c2VsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2Fyb3VzZWwpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgKDAsIF9hdXRvQmluZDIuZGVmYXVsdCkoX3RoaXMpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aXZlOiAwLFxuICAgICAgICAgICAgcHJldkFjdGl2ZTogMCxcbiAgICAgICAgICAgIGRpc3BsYXllZDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIF90aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDYXJvdXNlbCwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICB2YXIgX3Nhbml0aXplUHJvcHMgPSBzYW5pdGl6ZVByb3BzKHRoaXMucHJvcHMpLFxuICAgICAgICAgICAgICAgIGluZGV4ID0gX3Nhbml0aXplUHJvcHMuaW5kZXgsXG4gICAgICAgICAgICAgICAgY2hhbmdlT25GaXJzdFJlbmRlciA9IF9zYW5pdGl6ZVByb3BzLmNoYW5nZU9uRmlyc3RSZW5kZXI7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKGluZGV4LCB1bmRlZmluZWQsIGNoYW5nZU9uRmlyc3RSZW5kZXIpO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgICAgIHByZXZQcm9wcyA9IHNhbml0aXplUHJvcHMocHJldlByb3BzKTtcblxuICAgICAgICAgICAgdmFyIF9zYW5pdGl6ZVByb3BzMiA9IHNhbml0aXplUHJvcHModGhpcy5wcm9wcyksXG4gICAgICAgICAgICAgICAgYXV0b1BsYXkgPSBfc2FuaXRpemVQcm9wczIuYXV0b1BsYXksXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWwgPSBfc2FuaXRpemVQcm9wczIuaW50ZXJ2YWwsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4gPSBfc2FuaXRpemVQcm9wczIuY2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgaW5kZXggPSBfc2FuaXRpemVQcm9wczIuaW5kZXg7XG5cbiAgICAgICAgICAgIGlmIChhdXRvUGxheSAhPT0gcHJldlByb3BzLmF1dG9QbGF5IHx8IGludGVydmFsICE9PSBwcmV2UHJvcHMuaW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGggIT09IHByZXZQcm9wcy5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZShpbmRleCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcmV2UHJvcHMuaW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUoaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzdG9wJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50aW1lcikge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3N0YXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICAgICAgdmFyIF9zYW5pdGl6ZVByb3BzMyA9IHNhbml0aXplUHJvcHModGhpcy5wcm9wcyksXG4gICAgICAgICAgICAgICAgYXV0b1BsYXkgPSBfc2FuaXRpemVQcm9wczMuYXV0b1BsYXksXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWwgPSBfc2FuaXRpemVQcm9wczMuaW50ZXJ2YWw7XG5cbiAgICAgICAgICAgIGlmIChhdXRvUGxheSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCh0aGlzLm5leHQsIGludGVydmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVzZXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgICAgICB2YXIgX3Nhbml0aXplUHJvcHM0ID0gc2FuaXRpemVQcm9wcyh0aGlzLnByb3BzKSxcbiAgICAgICAgICAgICAgICBhdXRvUGxheSA9IF9zYW5pdGl6ZVByb3BzNC5hdXRvUGxheTtcblxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG5cbiAgICAgICAgICAgIGlmIChhdXRvUGxheSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0QWN0aXZlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEFjdGl2ZShpbmRleCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICB2YXIgcnVuQ2FsbGJhY2tzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB0cnVlO1xuXG4gICAgICAgICAgICB2YXIgX3Nhbml0aXplUHJvcHM1ID0gc2FuaXRpemVQcm9wcyh0aGlzLnByb3BzKSxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IF9zYW5pdGl6ZVByb3BzNS5vbkNoYW5nZSxcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gX3Nhbml0aXplUHJvcHM1LnRpbWVvdXQsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4gPSBfc2FuaXRpemVQcm9wczUuY2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgc3RyaWN0SW5kZXhpbmcgPSBfc2FuaXRpemVQcm9wczUuc3RyaWN0SW5kZXhpbmc7XG5cbiAgICAgICAgICAgIC8vIGlmIGluZGV4IGlzIGJpZ2dlciB0aGFuIHRoZSBjaGlsZHJlbiBsZW5ndGgsIHNldCBpdCB0byBiZSB0aGUgbGFzdCBjaGlsZCAoaWYgc3RyaWN0SW5kZXhpbmcpXG5cblxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cmljdEluZGV4aW5nICYmIGluZGV4ID4gY2hpbGRyZW4ubGVuZ3RoIC0gMSkgaW5kZXggPSBjaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIGlmIChzdHJpY3RJbmRleGluZyAmJiBpbmRleCA8IDApIGluZGV4ID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcHJldkFjdGl2ZSA9IHRoaXMuc3RhdGUuYWN0aXZlO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3RpdmU6IGluZGV4LFxuICAgICAgICAgICAgICAgIHByZXZBY3RpdmU6IHByZXZBY3RpdmUsXG4gICAgICAgICAgICAgICAgZGlzcGxheWVkOiBwcmV2QWN0aXZlXG4gICAgICAgICAgICB9LCB0aGlzLnJlc2V0KTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheWVkOiBpbmRleFxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bkNhbGxiYWNrcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FsbCB1c2VyIGRlZmluZWQgY2FsbGJhY2tzXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhpbmRleCwgcHJldkFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZShpbmRleCwgcHJldkFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIHRpbWVvdXQuZXhpdCA/IHRpbWVvdXQuZXhpdCA6IHRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICduZXh0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG5leHQoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBfc2FuaXRpemVQcm9wczYgPSBzYW5pdGl6ZVByb3BzKHRoaXMucHJvcHMpLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gX3Nhbml0aXplUHJvcHM2LmNoaWxkcmVuLFxuICAgICAgICAgICAgICAgIG5leHQgPSBfc2FuaXRpemVQcm9wczYubmV4dCxcbiAgICAgICAgICAgICAgICBjeWNsZU5hdmlnYXRpb24gPSBfc2FuaXRpemVQcm9wczYuY3ljbGVOYXZpZ2F0aW9uO1xuXG4gICAgICAgICAgICB2YXIgbmV4dEFjdGl2ZSA9IHRoaXMuc3RhdGUuYWN0aXZlICsgMSA+IGNoaWxkcmVuLmxlbmd0aCAtIDEgPyBjeWNsZU5hdmlnYXRpb24gPyAwIDogdGhpcy5zdGF0ZS5hY3RpdmUgOiB0aGlzLnN0YXRlLmFjdGl2ZSArIDE7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKG5leHRBY3RpdmUsIG5leHQpO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQpIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwcmV2JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByZXYoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBfc2FuaXRpemVQcm9wczcgPSBzYW5pdGl6ZVByb3BzKHRoaXMucHJvcHMpLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gX3Nhbml0aXplUHJvcHM3LmNoaWxkcmVuLFxuICAgICAgICAgICAgICAgIHByZXYgPSBfc2FuaXRpemVQcm9wczcucHJldixcbiAgICAgICAgICAgICAgICBjeWNsZU5hdmlnYXRpb24gPSBfc2FuaXRpemVQcm9wczcuY3ljbGVOYXZpZ2F0aW9uO1xuXG4gICAgICAgICAgICB2YXIgbmV4dEFjdGl2ZSA9IHRoaXMuc3RhdGUuYWN0aXZlIC0gMSA8IDAgPyBjeWNsZU5hdmlnYXRpb24gPyBjaGlsZHJlbi5sZW5ndGggLSAxIDogdGhpcy5zdGF0ZS5hY3RpdmUgOiB0aGlzLnN0YXRlLmFjdGl2ZSAtIDE7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKG5leHRBY3RpdmUsIHByZXYpO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQpIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBfc2FuaXRpemVQcm9wczggPSBzYW5pdGl6ZVByb3BzKHRoaXMucHJvcHMpLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gX3Nhbml0aXplUHJvcHM4LmNoaWxkcmVuLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9zYW5pdGl6ZVByb3BzOC5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgc3RvcEF1dG9QbGF5T25Ib3ZlciA9IF9zYW5pdGl6ZVByb3BzOC5zdG9wQXV0b1BsYXlPbkhvdmVyLFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbiA9IF9zYW5pdGl6ZVByb3BzOC5hbmltYXRpb24sXG4gICAgICAgICAgICAgICAgdGltZW91dCA9IF9zYW5pdGl6ZVByb3BzOC50aW1lb3V0LFxuICAgICAgICAgICAgICAgIHN3aXBlID0gX3Nhbml0aXplUHJvcHM4LnN3aXBlLFxuICAgICAgICAgICAgICAgIG5hdkJ1dHRvbnNBbHdheXNJbnZpc2libGUgPSBfc2FuaXRpemVQcm9wczgubmF2QnV0dG9uc0Fsd2F5c0ludmlzaWJsZSxcbiAgICAgICAgICAgICAgICBuYXZCdXR0b25zQWx3YXlzVmlzaWJsZSA9IF9zYW5pdGl6ZVByb3BzOC5uYXZCdXR0b25zQWx3YXlzVmlzaWJsZSxcbiAgICAgICAgICAgICAgICBjeWNsZU5hdmlnYXRpb24gPSBfc2FuaXRpemVQcm9wczguY3ljbGVOYXZpZ2F0aW9uLFxuICAgICAgICAgICAgICAgIGZ1bGxIZWlnaHRIb3ZlciA9IF9zYW5pdGl6ZVByb3BzOC5mdWxsSGVpZ2h0SG92ZXIsXG4gICAgICAgICAgICAgICAgbmF2QnV0dG9uc1Byb3BzID0gX3Nhbml0aXplUHJvcHM4Lm5hdkJ1dHRvbnNQcm9wcyxcbiAgICAgICAgICAgICAgICBuYXZCdXR0b25zV3JhcHBlclByb3BzID0gX3Nhbml0aXplUHJvcHM4Lm5hdkJ1dHRvbnNXcmFwcGVyUHJvcHMsXG4gICAgICAgICAgICAgICAgTmF2QnV0dG9uID0gX3Nhbml0aXplUHJvcHM4Lk5hdkJ1dHRvbixcbiAgICAgICAgICAgICAgICBOZXh0SWNvbiA9IF9zYW5pdGl6ZVByb3BzOC5OZXh0SWNvbixcbiAgICAgICAgICAgICAgICBQcmV2SWNvbiA9IF9zYW5pdGl6ZVByb3BzOC5QcmV2SWNvbixcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3JzID0gX3Nhbml0aXplUHJvcHM4LmluZGljYXRvcnMsXG4gICAgICAgICAgICAgICAgaW5kaWNhdG9yQ29udGFpbmVyUHJvcHMgPSBfc2FuaXRpemVQcm9wczguaW5kaWNhdG9yQ29udGFpbmVyUHJvcHMsXG4gICAgICAgICAgICAgICAgaW5kaWNhdG9ySWNvbkJ1dHRvblByb3BzID0gX3Nhbml0aXplUHJvcHM4LmluZGljYXRvckljb25CdXR0b25Qcm9wcyxcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRpY2F0b3JJY29uQnV0dG9uUHJvcHMgPSBfc2FuaXRpemVQcm9wczguYWN0aXZlSW5kaWNhdG9ySWNvbkJ1dHRvblByb3BzLFxuICAgICAgICAgICAgICAgIEluZGljYXRvckljb24gPSBfc2FuaXRpemVQcm9wczguSW5kaWNhdG9ySWNvbjtcblxuICAgICAgICAgICAgdmFyIGNsYXNzZXMgPSB0aGlzLnByb3BzLmNsYXNzZXM7XG5cbiAgICAgICAgICAgIHZhciBidXR0b25WaXNpYmlsaXR5Q2xhc3NWYWx1ZSA9ICcnICsgKG5hdkJ1dHRvbnNBbHdheXNWaXNpYmxlID8gY2xhc3Nlcy5idXR0b25WaXNpYmxlIDogY2xhc3Nlcy5idXR0b25IaWRkZW4pO1xuICAgICAgICAgICAgdmFyIGJ1dHRvbkNzc0NsYXNzVmFsdWUgPSBjbGFzc2VzLmJ1dHRvbiArICcgJyArIGJ1dHRvblZpc2liaWxpdHlDbGFzc1ZhbHVlICsgJyAnICsgKGZ1bGxIZWlnaHRIb3ZlciA/IGNsYXNzZXMuZnVsbEhlaWdodEhvdmVyQnV0dG9uIDogXCJcIikgKyAnICcgKyBuYXZCdXR0b25zUHJvcHMuY2xhc3NOYW1lO1xuICAgICAgICAgICAgdmFyIGJ1dHRvbldyYXBwZXJDc3NDbGFzc1ZhbHVlID0gY2xhc3Nlcy5idXR0b25XcmFwcGVyICsgJyAnICsgKGZ1bGxIZWlnaHRIb3ZlciA/IGNsYXNzZXMuZnVsbEhlaWdodEhvdmVyV3JhcHBlciA6IFwiXCIpICsgJyAnICsgbmF2QnV0dG9uc1dyYXBwZXJQcm9wcy5jbGFzc05hbWU7XG5cbiAgICAgICAgICAgIHZhciBjb21wYXJlQWN0aXZlRGlzcGxheWVkID0gZnVuY3Rpb24gY29tcGFyZUFjdGl2ZURpc3BsYXllZCgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMzLnN0YXRlLmFjdGl2ZSA9PT0gMCAmJiBfdGhpczMuc3RhdGUucHJldkFjdGl2ZSA9PT0gY2hpbGRyZW4ubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF90aGlzMy5zdGF0ZS5hY3RpdmUgPT09IGNoaWxkcmVuLmxlbmd0aCAtIDEgJiYgX3RoaXMzLnN0YXRlLnByZXZBY3RpdmUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF90aGlzMy5zdGF0ZS5hY3RpdmUgPiBfdGhpczMuc3RhdGUucHJldkFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgc2hvd0J1dHRvbiA9IGZ1bmN0aW9uIHNob3dCdXR0b24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5leHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRydWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoY3ljbGVOYXZpZ2F0aW9uKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGlmIChuZXh0ICYmIF90aGlzMy5zdGF0ZS5hY3RpdmUgKyAxID4gY2hpbGRyZW4ubGVuZ3RoIC0gMSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICghbmV4dCAmJiBfdGhpczMuc3RhdGUuYWN0aXZlIC0gMSA8IDApIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnJvb3QgKyAnICcgKyAoY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogXCJcIiksXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyOiBmdW5jdGlvbiBvbk1vdXNlT3ZlcigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BBdXRvUGxheU9uSG92ZXIgJiYgX3RoaXMzLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU91dDogZnVuY3Rpb24gb25Nb3VzZU91dCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BBdXRvUGxheU9uSG92ZXIgJiYgX3RoaXMzLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENhcm91c2VsSXRlbSwge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnY2Fyb3VzZWwtaXRlbScgKyBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGluZGV4ID09PSBfdGhpczMuc3RhdGUuZGlzcGxheWVkID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBpbmRleCA9PT0gX3RoaXMzLnN0YXRlLmFjdGl2ZSA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTmV4dDogY29tcGFyZUFjdGl2ZURpc3BsYXllZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQ6IGNoaWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBhbmltYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiB0aW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGU6IHN3aXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogX3RoaXMzLm5leHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2OiBfdGhpczMucHJldlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KSA6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENhcm91c2VsSXRlbSwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6ICdjYXJvdXNlbC1pdGVtMCcsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQ6IGNoaWxkcmVuLFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGFuaW1hdGlvbixcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogdGltZW91dFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICFuYXZCdXR0b25zQWx3YXlzSW52aXNpYmxlICYmIHNob3dCdXR0b24odHJ1ZSkgJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogYnV0dG9uV3JhcHBlckNzc0NsYXNzVmFsdWUgKyAnICcgKyBjbGFzc2VzLm5leHQsIHN0eWxlOiBuYXZCdXR0b25zV3JhcHBlclByb3BzLnN0eWxlIH0sXG4gICAgICAgICAgICAgICAgICAgIE5hdkJ1dHRvbiAhPT0gdW5kZWZpbmVkID8gTmF2QnV0dG9uKHsgb25DbGljazogdGhpcy5uZXh0LCBjbGFzc05hbWU6IGJ1dHRvbkNzc0NsYXNzVmFsdWUsIHN0eWxlOiBuYXZCdXR0b25zUHJvcHMuc3R5bGUsIG5leHQ6IHRydWUsIHByZXY6IGZhbHNlIH0pIDogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBfSWNvbkJ1dHRvbjIuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnJyArIGJ1dHRvbkNzc0NsYXNzVmFsdWUsIG9uQ2xpY2s6IHRoaXMubmV4dCwgJ2FyaWEtbGFiZWwnOiAnTmV4dCcsIHN0eWxlOiBuYXZCdXR0b25zUHJvcHMuc3R5bGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIE5leHRJY29uXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICFuYXZCdXR0b25zQWx3YXlzSW52aXNpYmxlICYmIHNob3dCdXR0b24oZmFsc2UpICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IGJ1dHRvbldyYXBwZXJDc3NDbGFzc1ZhbHVlICsgJyAnICsgY2xhc3Nlcy5wcmV2LCBzdHlsZTogbmF2QnV0dG9uc1dyYXBwZXJQcm9wcy5zdHlsZSB9LFxuICAgICAgICAgICAgICAgICAgICBOYXZCdXR0b24gIT09IHVuZGVmaW5lZCA/IE5hdkJ1dHRvbih7IG9uQ2xpY2s6IHRoaXMucHJldiwgY2xhc3NOYW1lOiBidXR0b25Dc3NDbGFzc1ZhbHVlLCBzdHlsZTogbmF2QnV0dG9uc1Byb3BzLnN0eWxlLCBuZXh0OiBmYWxzZSwgcHJldjogdHJ1ZSB9KSA6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgX0ljb25CdXR0b24yLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJycgKyBidXR0b25Dc3NDbGFzc1ZhbHVlLCBvbkNsaWNrOiB0aGlzLnByZXYsICdhcmlhLWxhYmVsJzogJ1ByZXZpb3VzJywgc3R5bGU6IG5hdkJ1dHRvbnNQcm9wcy5zdHlsZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUHJldkljb25cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgaW5kaWNhdG9ycyA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEluZGljYXRvcnMsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogY2xhc3NlcyxcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiBjaGlsZHJlbi5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdGhpcy5zdGF0ZS5hY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgIHByZXNzOiB0aGlzLnNldEFjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yQ29udGFpbmVyUHJvcHM6IGluZGljYXRvckNvbnRhaW5lclByb3BzLFxuICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3JJY29uQnV0dG9uUHJvcHM6IGluZGljYXRvckljb25CdXR0b25Qcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlSW5kaWNhdG9ySWNvbkJ1dHRvblByb3BzOiBhY3RpdmVJbmRpY2F0b3JJY29uQnV0dG9uUHJvcHMsXG4gICAgICAgICAgICAgICAgICAgIEluZGljYXRvckljb246IEluZGljYXRvckljb25cbiAgICAgICAgICAgICAgICB9KSA6IG51bGxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ2Fyb3VzZWw7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5mdW5jdGlvbiBDYXJvdXNlbEl0ZW0ocHJvcHMpIHtcbiAgICB2YXIgc3dpcGVIYW5kbGVycyA9ICgwLCBfcmVhY3RTd2lwZWFibGUudXNlU3dpcGVhYmxlKSh7XG4gICAgICAgIG9uU3dpcGVkTGVmdDogZnVuY3Rpb24gb25Td2lwZWRMZWZ0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3BzLm5leHQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Td2lwZWRSaWdodDogZnVuY3Rpb24gb25Td2lwZWRSaWdodCgpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wcy5wcmV2KCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHN3aXBlSGFuZGxlcnMgPSBwcm9wcy5zd2lwZSA/IHN3aXBlSGFuZGxlcnMgOiB7fTtcblxuICAgIHJldHVybiBwcm9wcy5kaXNwbGF5ID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBfZXh0ZW5kcyh7fSwgc3dpcGVIYW5kbGVycywgeyBjbGFzc05hbWU6ICdDYXJvdXNlbEl0ZW0nIH0pLFxuICAgICAgICBwcm9wcy5hbmltYXRpb24gPT09IFwic2xpZGVcIiA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgX1NsaWRlMi5kZWZhdWx0LFxuICAgICAgICAgICAgeyBkaXJlY3Rpb246IHByb3BzLmFjdGl2ZSA/IHByb3BzLmlzTmV4dCA/IFwibGVmdFwiIDogXCJyaWdodFwiIDogcHJvcHMuaXNOZXh0ID8gXCJyaWdodFwiIDogXCJsZWZ0XCIsICdpbic6IHByb3BzLmFjdGl2ZSwgdGltZW91dDogcHJvcHMudGltZW91dCB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZFxuICAgICAgICAgICAgKVxuICAgICAgICApIDogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBfRmFkZTIuZGVmYXVsdCxcbiAgICAgICAgICAgIHsgJ2luJzogcHJvcHMuYWN0aXZlLCB0aW1lb3V0OiBwcm9wcy50aW1lb3V0IH0sXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICApIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gSW5kaWNhdG9ycyhwcm9wcykge1xuICAgIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcztcbiAgICB2YXIgSW5kaWNhdG9ySWNvbiA9IHByb3BzLkluZGljYXRvckljb24gIT09IHVuZGVmaW5lZCA/IHByb3BzLkluZGljYXRvckljb24gOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRmliZXJNYW51YWxSZWNvcmQyLmRlZmF1bHQsIHtcbiAgICAgICAgc2l6ZTogJ3NtYWxsJyxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLmluZGljYXRvckljb25cbiAgICB9KTtcblxuICAgIHZhciBpbmRpY2F0b3JzID0gW107XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpKSB7XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSBpID09PSBwcm9wcy5hY3RpdmUgPyBjbGFzc2VzLmluZGljYXRvciArICcgJyArIHByb3BzLmluZGljYXRvckljb25CdXR0b25Qcm9wcy5jbGFzc05hbWUgKyAnICcgKyBjbGFzc2VzLmFjdGl2ZSArICcgJyArIHByb3BzLmFjdGl2ZUluZGljYXRvckljb25CdXR0b25Qcm9wcy5jbGFzc05hbWUgOiBjbGFzc2VzLmluZGljYXRvciArICcgJyArIHByb3BzLmluZGljYXRvckljb25CdXR0b25Qcm9wcy5jbGFzc05hbWU7XG5cbiAgICAgICAgdmFyIHN0eWxlID0gaSA9PT0gcHJvcHMuYWN0aXZlID8gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMuaW5kaWNhdG9ySWNvbkJ1dHRvblByb3BzLnN0eWxlLCBwcm9wcy5hY3RpdmVJbmRpY2F0b3JJY29uQnV0dG9uUHJvcHMuc3R5bGUpIDogcHJvcHMuaW5kaWNhdG9ySWNvbkJ1dHRvblByb3BzLnN0eWxlO1xuXG4gICAgICAgIHZhciBpdGVtID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBfSWNvbkJ1dHRvbjIuZGVmYXVsdCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnByZXNzKGkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2l6ZTogJ3NtYWxsJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEluZGljYXRvckljb25cbiAgICAgICAgKTtcblxuICAgICAgICBpbmRpY2F0b3JzLnB1c2goaXRlbSk7XG4gICAgfTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgX2xvb3AoaSk7XG4gICAgfVxuXG4gICAgdmFyIHdyYXBwZXJTdHlsZSA9IHByb3BzLmluZGljYXRvckNvbnRhaW5lclByb3BzICE9PSB1bmRlZmluZWQgPyBwcm9wcy5pbmRpY2F0b3JDb250YWluZXJQcm9wcy5zdHlsZSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgd3JhcHBlckNsYXNzTmFtZSA9IHByb3BzLmluZGljYXRvckNvbnRhaW5lclByb3BzICE9PSB1bmRlZmluZWQgPyBwcm9wcy5pbmRpY2F0b3JDb250YWluZXJQcm9wcy5jbGFzc05hbWUgOiBcIlwiO1xuXG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6IGNsYXNzZXMuaW5kaWNhdG9ycyArICcgJyArIHdyYXBwZXJDbGFzc05hbWUsIHN0eWxlOiB3cmFwcGVyU3R5bGUgfSxcbiAgICAgICAgaW5kaWNhdG9yc1xuICAgICk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfc3R5bGVzLndpdGhTdHlsZXMpKHN0eWxlcykoQ2Fyb3VzZWwpOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9DYXJvdXNlbCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9DYXJvdXNlbCcpO1xuXG52YXIgX0Nhcm91c2VsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Nhcm91c2VsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX0Nhcm91c2VsMi5kZWZhdWx0OyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZSgncmVhY3QnKSkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJywgJ3JlYWN0J10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5zd2lwZWFibGUgPSB7fSwgZ2xvYmFsLnJlYWN0KSk7XG59KHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cywgUmVhY3QpIHtcbiAgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gICAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG5cbiAgICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHZhciBMRUZUID0gXCJMZWZ0XCI7XG4gIHZhciBSSUdIVCA9IFwiUmlnaHRcIjtcbiAgdmFyIFVQID0gXCJVcFwiO1xuICB2YXIgRE9XTiA9IFwiRG93blwiO1xuXG4gIHZhciBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGVsdGE6IDEwLFxuICAgIHByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQ6IGZhbHNlLFxuICAgIHJvdGF0aW9uQW5nbGU6IDAsXG4gICAgdHJhY2tNb3VzZTogZmFsc2UsXG4gICAgdHJhY2tUb3VjaDogdHJ1ZVxuICB9O1xuICB2YXIgaW5pdGlhbFN0YXRlID0ge1xuICAgIGZpcnN0OiB0cnVlLFxuICAgIGluaXRpYWw6IFswLCAwXSxcbiAgICBzdGFydDogMCxcbiAgICBzd2lwaW5nOiBmYWxzZSxcbiAgICB4eTogWzAsIDBdXG4gIH07XG4gIHZhciBtb3VzZU1vdmUgPSBcIm1vdXNlbW92ZVwiO1xuICB2YXIgbW91c2VVcCA9IFwibW91c2V1cFwiO1xuICB2YXIgdG91Y2hFbmQgPSBcInRvdWNoZW5kXCI7XG4gIHZhciB0b3VjaE1vdmUgPSBcInRvdWNobW92ZVwiO1xuICB2YXIgdG91Y2hTdGFydCA9IFwidG91Y2hzdGFydFwiO1xuXG4gIGZ1bmN0aW9uIGdldERpcmVjdGlvbihhYnNYLCBhYnNZLCBkZWx0YVgsIGRlbHRhWSkge1xuICAgIGlmIChhYnNYID4gYWJzWSkge1xuICAgICAgaWYgKGRlbHRhWCA+IDApIHtcbiAgICAgICAgcmV0dXJuIFJJR0hUO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gTEVGVDtcbiAgICB9IGVsc2UgaWYgKGRlbHRhWSA+IDApIHtcbiAgICAgIHJldHVybiBET1dOO1xuICAgIH1cblxuICAgIHJldHVybiBVUDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJvdGF0ZVhZQnlBbmdsZShwb3MsIGFuZ2xlKSB7XG4gICAgaWYgKGFuZ2xlID09PSAwKSByZXR1cm4gcG9zO1xuICAgIHZhciBhbmdsZUluUmFkaWFucyA9IE1hdGguUEkgLyAxODAgKiBhbmdsZTtcbiAgICB2YXIgeCA9IHBvc1swXSAqIE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKSArIHBvc1sxXSAqIE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICB2YXIgeSA9IHBvc1sxXSAqIE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKSAtIHBvc1swXSAqIE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICByZXR1cm4gW3gsIHldO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SGFuZGxlcnMoc2V0LCBoYW5kbGVyUHJvcHMpIHtcbiAgICB2YXIgb25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoZXZlbnQpIHtcbiAgICAgIC8vIGlmIG1vcmUgdGhhbiBhIHNpbmdsZSB0b3VjaCBkb24ndCB0cmFjaywgZm9yIG5vdy4uLlxuICAgICAgaWYgKGV2ZW50ICYmIFwidG91Y2hlc1wiIGluIGV2ZW50ICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSkgcmV0dXJuO1xuICAgICAgc2V0KGZ1bmN0aW9uIChzdGF0ZSwgcHJvcHMpIHtcbiAgICAgICAgLy8gc2V0dXAgbW91c2UgbGlzdGVuZXJzIG9uIGRvY3VtZW50IHRvIHRyYWNrIHN3aXBlIHNpbmNlIHN3aXBlIGNhbiBsZWF2ZSBjb250YWluZXJcbiAgICAgICAgaWYgKHByb3BzLnRyYWNrTW91c2UpIHtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlTW92ZSwgb25Nb3ZlKTtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlVXAsIG9uVXApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9yZWYgPSBcInRvdWNoZXNcIiBpbiBldmVudCA/IGV2ZW50LnRvdWNoZXNbMF0gOiBldmVudCxcbiAgICAgICAgICAgIGNsaWVudFggPSBfcmVmLmNsaWVudFgsXG4gICAgICAgICAgICBjbGllbnRZID0gX3JlZi5jbGllbnRZO1xuXG4gICAgICAgIHZhciB4eSA9IHJvdGF0ZVhZQnlBbmdsZShbY2xpZW50WCwgY2xpZW50WV0sIHByb3BzLnJvdGF0aW9uQW5nbGUpO1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCBpbml0aWFsU3RhdGUsIHtcbiAgICAgICAgICBpbml0aWFsOiBbXS5jb25jYXQoeHkpLFxuICAgICAgICAgIHh5OiB4eSxcbiAgICAgICAgICBzdGFydDogZXZlbnQudGltZVN0YW1wIHx8IDBcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIG9uTW92ZSA9IGZ1bmN0aW9uIG9uTW92ZShldmVudCkge1xuICAgICAgc2V0KGZ1bmN0aW9uIChzdGF0ZSwgcHJvcHMpIHtcbiAgICAgICAgLy8gRGlzY291bnQgYSBzd2lwZSBpZiBhZGRpdGlvbmFsIHRvdWNoZXMgYXJlIHByZXNlbnQgYWZ0ZXJcbiAgICAgICAgLy8gYSBzd2lwZSBoYXMgc3RhcnRlZC5cbiAgICAgICAgaWYgKFwidG91Y2hlc1wiIGluIGV2ZW50ICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfcmVmMiA9IFwidG91Y2hlc1wiIGluIGV2ZW50ID8gZXZlbnQudG91Y2hlc1swXSA6IGV2ZW50LFxuICAgICAgICAgICAgY2xpZW50WCA9IF9yZWYyLmNsaWVudFgsXG4gICAgICAgICAgICBjbGllbnRZID0gX3JlZjIuY2xpZW50WTtcblxuICAgICAgICB2YXIgX3JvdGF0ZVhZQnlBbmdsZSA9IHJvdGF0ZVhZQnlBbmdsZShbY2xpZW50WCwgY2xpZW50WV0sIHByb3BzLnJvdGF0aW9uQW5nbGUpLFxuICAgICAgICAgICAgeCA9IF9yb3RhdGVYWUJ5QW5nbGVbMF0sXG4gICAgICAgICAgICB5ID0gX3JvdGF0ZVhZQnlBbmdsZVsxXTtcblxuICAgICAgICB2YXIgZGVsdGFYID0geCAtIHN0YXRlLnh5WzBdO1xuICAgICAgICB2YXIgZGVsdGFZID0geSAtIHN0YXRlLnh5WzFdO1xuICAgICAgICB2YXIgYWJzWCA9IE1hdGguYWJzKGRlbHRhWCk7XG4gICAgICAgIHZhciBhYnNZID0gTWF0aC5hYnMoZGVsdGFZKTtcbiAgICAgICAgdmFyIHRpbWUgPSAoZXZlbnQudGltZVN0YW1wIHx8IDApIC0gc3RhdGUuc3RhcnQ7XG4gICAgICAgIHZhciB2ZWxvY2l0eSA9IE1hdGguc3FydChhYnNYICogYWJzWCArIGFic1kgKiBhYnNZKSAvICh0aW1lIHx8IDEpO1xuICAgICAgICB2YXIgdnh2eSA9IFtkZWx0YVggLyAodGltZSB8fCAxKSwgZGVsdGFZIC8gKHRpbWUgfHwgMSldOyAvLyBpZiBzd2lwZSBpcyB1bmRlciBkZWx0YSBhbmQgd2UgaGF2ZSBub3Qgc3RhcnRlZCB0byB0cmFjayBhIHN3aXBlOiBza2lwIHVwZGF0ZVxuXG4gICAgICAgIGlmIChhYnNYIDwgcHJvcHMuZGVsdGEgJiYgYWJzWSA8IHByb3BzLmRlbHRhICYmICFzdGF0ZS5zd2lwaW5nKSByZXR1cm4gc3RhdGU7XG4gICAgICAgIHZhciBkaXIgPSBnZXREaXJlY3Rpb24oYWJzWCwgYWJzWSwgZGVsdGFYLCBkZWx0YVkpO1xuICAgICAgICB2YXIgZXZlbnREYXRhID0ge1xuICAgICAgICAgIGFic1g6IGFic1gsXG4gICAgICAgICAgYWJzWTogYWJzWSxcbiAgICAgICAgICBkZWx0YVg6IGRlbHRhWCxcbiAgICAgICAgICBkZWx0YVk6IGRlbHRhWSxcbiAgICAgICAgICBkaXI6IGRpcixcbiAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgZmlyc3Q6IHN0YXRlLmZpcnN0LFxuICAgICAgICAgIGluaXRpYWw6IHN0YXRlLmluaXRpYWwsXG4gICAgICAgICAgdmVsb2NpdHk6IHZlbG9jaXR5LFxuICAgICAgICAgIHZ4dnk6IHZ4dnlcbiAgICAgICAgfTsgLy8gY2FsbCBvblN3aXBlU3RhcnQgaWYgcHJlc2VudCBhbmQgaXMgZmlyc3Qgc3dpcGUgZXZlbnRcblxuICAgICAgICBldmVudERhdGEuZmlyc3QgJiYgcHJvcHMub25Td2lwZVN0YXJ0ICYmIHByb3BzLm9uU3dpcGVTdGFydChldmVudERhdGEpOyAvLyBDYWxsIG9uU3dpcGluZyBpZiBwcmVzZW50XG5cbiAgICAgICAgcHJvcHMub25Td2lwaW5nICYmIHByb3BzLm9uU3dpcGluZyhldmVudERhdGEpOyAvLyB0cmFjayBpZiBhIHN3aXBlIGlzIGNhbmNlbGFibGUoaGFuZGxlciBmb3Igc3dpcGluZyBvciBzd2lwZWQoZGlyKSBleGlzdHMpXG4gICAgICAgIC8vIHNvIHdlIGNhbiBjYWxsIHByZXZlbnREZWZhdWx0IGlmIG5lZWRlZFxuXG4gICAgICAgIHZhciBjYW5jZWxhYmxlUGFnZVN3aXBlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHByb3BzLm9uU3dpcGluZyB8fCBwcm9wcy5vblN3aXBlZCB8fCBcIm9uU3dpcGVkXCIgKyBkaXIgaW4gcHJvcHMpIHtcbiAgICAgICAgICBjYW5jZWxhYmxlUGFnZVN3aXBlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYW5jZWxhYmxlUGFnZVN3aXBlICYmIHByb3BzLnByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQgJiYgcHJvcHMudHJhY2tUb3VjaCAmJiBldmVudC5jYW5jZWxhYmxlKSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgLy8gZmlyc3QgaXMgbm93IGFsd2F5cyBmYWxzZVxuICAgICAgICAgIGZpcnN0OiBmYWxzZSxcbiAgICAgICAgICBldmVudERhdGE6IGV2ZW50RGF0YSxcbiAgICAgICAgICBzd2lwaW5nOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBvbkVuZCA9IGZ1bmN0aW9uIG9uRW5kKGV2ZW50KSB7XG4gICAgICBzZXQoZnVuY3Rpb24gKHN0YXRlLCBwcm9wcykge1xuICAgICAgICB2YXIgZXZlbnREYXRhO1xuXG4gICAgICAgIGlmIChzdGF0ZS5zd2lwaW5nICYmIHN0YXRlLmV2ZW50RGF0YSkge1xuICAgICAgICAgIGV2ZW50RGF0YSA9IF9leHRlbmRzKHt9LCBzdGF0ZS5ldmVudERhdGEsIHtcbiAgICAgICAgICAgIGV2ZW50OiBldmVudFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHByb3BzLm9uU3dpcGVkICYmIHByb3BzLm9uU3dpcGVkKGV2ZW50RGF0YSk7XG4gICAgICAgICAgdmFyIG9uU3dpcGVkRGlyID0gXCJvblN3aXBlZFwiICsgZXZlbnREYXRhLmRpcjtcblxuICAgICAgICAgIGlmIChvblN3aXBlZERpciBpbiBwcm9wcykge1xuICAgICAgICAgICAgcHJvcHNbb25Td2lwZWREaXJdKGV2ZW50RGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzLm9uVGFwICYmIHByb3BzLm9uVGFwKHtcbiAgICAgICAgICAgIGV2ZW50OiBldmVudFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwgaW5pdGlhbFN0YXRlLCB7XG4gICAgICAgICAgZXZlbnREYXRhOiBldmVudERhdGFcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIGNsZWFuVXBNb3VzZSA9IGZ1bmN0aW9uIGNsZWFuVXBNb3VzZSgpIHtcbiAgICAgIC8vIHNhZmUgdG8ganVzdCBjYWxsIHJlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VNb3ZlLCBvbk1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZVVwLCBvblVwKTtcbiAgICB9O1xuXG4gICAgdmFyIG9uVXAgPSBmdW5jdGlvbiBvblVwKGUpIHtcbiAgICAgIGNsZWFuVXBNb3VzZSgpO1xuICAgICAgb25FbmQoZSk7XG4gICAgfTtcbiAgICAvKipcclxuICAgICAqIFN3aXRjaCBvZiBcInBhc3NpdmVcIiBwcm9wZXJ0eSBmb3Igbm93LlxyXG4gICAgICogV2hlbiBgcHJldmVudERlZmF1bHRUb3VjaG1vdmVFdmVudGAgaXM6XHJcbiAgICAgKiAtIHRydWUgPT4geyBwYXNzaXZlOiBmYWxzZSB9XHJcbiAgICAgKiAtIGZhbHNlID0+IHsgcGFzc2l2ZTogdHJ1ZSB9XHJcbiAgICAgKlxyXG4gICAgICogQ291bGQgdGFrZSBlbnRpcmUgYGFkZEV2ZW50TGlzdGVuZXJgIG9wdGlvbnMgb2JqZWN0IGFzIGEgcGFyYW0gbGF0ZXI/XHJcbiAgICAgKi9cblxuXG4gICAgdmFyIGF0dGFjaFRvdWNoID0gZnVuY3Rpb24gYXR0YWNoVG91Y2goZWwsIHBhc3NpdmUpIHtcbiAgICAgIHZhciBjbGVhbnVwID0gZnVuY3Rpb24gY2xlYW51cCgpIHt9O1xuXG4gICAgICBpZiAoZWwgJiYgZWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAvLyBhdHRhY2ggdG91Y2ggZXZlbnQgbGlzdGVuZXJzIGFuZCBoYW5kbGVyc1xuICAgICAgICB2YXIgdGxzID0gW1t0b3VjaFN0YXJ0LCBvblN0YXJ0XSwgW3RvdWNoTW92ZSwgb25Nb3ZlXSwgW3RvdWNoRW5kLCBvbkVuZF1dO1xuICAgICAgICB0bHMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgICAgICB2YXIgZSA9IF9yZWYzWzBdLFxuICAgICAgICAgICAgICBoID0gX3JlZjNbMV07XG4gICAgICAgICAgcmV0dXJuIGVsLmFkZEV2ZW50TGlzdGVuZXIoZSwgaCwge1xuICAgICAgICAgICAgcGFzc2l2ZTogcGFzc2l2ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTsgLy8gcmV0dXJuIHByb3Blcmx5IHNjb3BlZCBjbGVhbnVwIG1ldGhvZCBmb3IgcmVtb3ZpbmcgbGlzdGVuZXJzLCBvcHRpb25zIG5vdCByZXF1aXJlZFxuXG4gICAgICAgIGNsZWFudXAgPSBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgICAgIHJldHVybiB0bHMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjQpIHtcbiAgICAgICAgICAgIHZhciBlID0gX3JlZjRbMF0sXG4gICAgICAgICAgICAgICAgaCA9IF9yZWY0WzFdO1xuICAgICAgICAgICAgcmV0dXJuIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSwgaCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjbGVhbnVwO1xuICAgIH07XG5cbiAgICB2YXIgb25SZWYgPSBmdW5jdGlvbiBvblJlZihlbCkge1xuICAgICAgLy8gXCJpbmxpbmVcIiByZWYgZnVuY3Rpb25zIGFyZSBjYWxsZWQgdHdpY2Ugb24gcmVuZGVyLCBvbmNlIHdpdGggbnVsbCB0aGVuIGFnYWluIHdpdGggRE9NIGVsZW1lbnRcbiAgICAgIC8vIGlnbm9yZSBudWxsIGhlcmVcbiAgICAgIGlmIChlbCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgc2V0KGZ1bmN0aW9uIChzdGF0ZSwgcHJvcHMpIHtcbiAgICAgICAgLy8gaWYgdGhlIHNhbWUgRE9NIGVsIGFzIHByZXZpb3VzIGp1c3QgcmV0dXJuIHN0YXRlXG4gICAgICAgIGlmIChzdGF0ZS5lbCA9PT0gZWwpIHJldHVybiBzdGF0ZTtcbiAgICAgICAgdmFyIGFkZFN0YXRlID0ge307IC8vIGlmIG5ldyBET00gZWwgY2xlYW4gdXAgb2xkIERPTSBhbmQgcmVzZXQgY2xlYW5VcFRvdWNoXG5cbiAgICAgICAgaWYgKHN0YXRlLmVsICYmIHN0YXRlLmVsICE9PSBlbCAmJiBzdGF0ZS5jbGVhblVwVG91Y2gpIHtcbiAgICAgICAgICBzdGF0ZS5jbGVhblVwVG91Y2goKTtcbiAgICAgICAgICBhZGRTdGF0ZS5jbGVhblVwVG91Y2ggPSB1bmRlZmluZWQ7XG4gICAgICAgIH0gLy8gb25seSBhdHRhY2ggaWYgd2Ugd2FudCB0byB0cmFjayB0b3VjaFxuXG5cbiAgICAgICAgaWYgKHByb3BzLnRyYWNrVG91Y2ggJiYgZWwpIHtcbiAgICAgICAgICBhZGRTdGF0ZS5jbGVhblVwVG91Y2ggPSBhdHRhY2hUb3VjaChlbCwgIXByb3BzLnByZXZlbnREZWZhdWx0VG91Y2htb3ZlRXZlbnQpO1xuICAgICAgICB9IC8vIHN0b3JlIGV2ZW50IGF0dGFjaGVkIERPTSBlbCBmb3IgY29tcGFyaXNvbiwgY2xlYW4gdXAsIGFuZCByZS1hdHRhY2htZW50XG5cblxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgZWw6IGVsXG4gICAgICAgIH0sIGFkZFN0YXRlKTtcbiAgICAgIH0pO1xuICAgIH07IC8vIHNldCByZWYgY2FsbGJhY2sgdG8gYXR0YWNoIHRvdWNoIGV2ZW50IGxpc3RlbmVyc1xuXG5cbiAgICB2YXIgb3V0cHV0ID0ge1xuICAgICAgcmVmOiBvblJlZlxuICAgIH07IC8vIGlmIHRyYWNrIG1vdXNlIGF0dGFjaCBtb3VzZSBkb3duIGxpc3RlbmVyXG5cbiAgICBpZiAoaGFuZGxlclByb3BzLnRyYWNrTW91c2UpIHtcbiAgICAgIG91dHB1dC5vbk1vdXNlRG93biA9IG9uU3RhcnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtvdXRwdXQsIGF0dGFjaFRvdWNoXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRyYW5zaWVudFN0YXRlKHN0YXRlLCBwcm9wcywgYXR0YWNoVG91Y2gpIHtcbiAgICB2YXIgYWRkU3RhdGUgPSB7fTsgLy8gY2xlYW4gdXAgdG91Y2ggaGFuZGxlcnMgaWYgbm8gbG9uZ2VyIHRyYWNraW5nIHRvdWNoZXNcblxuICAgIGlmICghcHJvcHMudHJhY2tUb3VjaCAmJiBzdGF0ZS5jbGVhblVwVG91Y2gpIHtcbiAgICAgIHN0YXRlLmNsZWFuVXBUb3VjaCgpO1xuICAgICAgYWRkU3RhdGUuY2xlYW5VcFRvdWNoID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAocHJvcHMudHJhY2tUb3VjaCAmJiAhc3RhdGUuY2xlYW5VcFRvdWNoKSB7XG4gICAgICAvLyBhdHRhY2gvcmUtYXR0YWNoIHRvdWNoIGhhbmRsZXJzXG4gICAgICBpZiAoc3RhdGUuZWwpIHtcbiAgICAgICAgYWRkU3RhdGUuY2xlYW5VcFRvdWNoID0gYXR0YWNoVG91Y2goc3RhdGUuZWwsICFwcm9wcy5wcmV2ZW50RGVmYXVsdFRvdWNobW92ZUV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCBhZGRTdGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiB1c2VTd2lwZWFibGUob3B0aW9ucykge1xuICAgIHZhciB0cmFja01vdXNlID0gb3B0aW9ucy50cmFja01vdXNlO1xuICAgIHZhciB0cmFuc2llbnRTdGF0ZSA9IFJlYWN0LnVzZVJlZihfZXh0ZW5kcyh7fSwgaW5pdGlhbFN0YXRlKSk7XG4gICAgdmFyIHRyYW5zaWVudFByb3BzID0gUmVhY3QudXNlUmVmKF9leHRlbmRzKHt9LCBkZWZhdWx0UHJvcHMpKTtcbiAgICB0cmFuc2llbnRQcm9wcy5jdXJyZW50ID0gX2V4dGVuZHMoe30sIGRlZmF1bHRQcm9wcywgb3B0aW9ucyk7XG5cbiAgICB2YXIgX1JlYWN0JHVzZU1lbW8gPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnZXRIYW5kbGVycyhmdW5jdGlvbiAoc3RhdGVTZXR0ZXIpIHtcbiAgICAgICAgcmV0dXJuIHRyYW5zaWVudFN0YXRlLmN1cnJlbnQgPSBzdGF0ZVNldHRlcih0cmFuc2llbnRTdGF0ZS5jdXJyZW50LCB0cmFuc2llbnRQcm9wcy5jdXJyZW50KTtcbiAgICAgIH0sIHtcbiAgICAgICAgdHJhY2tNb3VzZTogdHJhY2tNb3VzZVxuICAgICAgfSk7XG4gICAgfSwgW3RyYWNrTW91c2VdKSxcbiAgICAgICAgaGFuZGxlcnMgPSBfUmVhY3QkdXNlTWVtb1swXSxcbiAgICAgICAgYXR0YWNoVG91Y2ggPSBfUmVhY3QkdXNlTWVtb1sxXTtcblxuICAgIHRyYW5zaWVudFN0YXRlLmN1cnJlbnQgPSB1cGRhdGVUcmFuc2llbnRTdGF0ZSh0cmFuc2llbnRTdGF0ZS5jdXJyZW50LCB0cmFuc2llbnRQcm9wcy5jdXJyZW50LCBhdHRhY2hUb3VjaCk7XG4gICAgcmV0dXJuIGhhbmRsZXJzO1xuICB9XG5cbiAgZXhwb3J0cy5ET1dOID0gRE9XTjtcbiAgZXhwb3J0cy5MRUZUID0gTEVGVDtcbiAgZXhwb3J0cy5SSUdIVCA9IFJJR0hUO1xuICBleHBvcnRzLlVQID0gVVA7XG4gIGV4cG9ydHMudXNlU3dpcGVhYmxlID0gdXNlU3dpcGVhYmxlO1xuXG59KSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3Qtc3dpcGVhYmxlLnVtZC5qcy5tYXBcbiJdLCJzb3VyY2VSb290IjoiIn0=