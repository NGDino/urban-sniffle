self["webpackHotUpdate_N_E"]("pages/index",{

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
/* harmony import */ var react_card_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-card-carousel */ "./node_modules/react-card-carousel/build/index.js");
/* harmony import */ var react_card_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_card_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\Team\\index.js",
    _this = undefined,
    _s = $RefreshSig$();




var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex'
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
  };
});

var Team = function Team(props) {
  _s();

  var classes = useStyles();
  console.log('staff', props);

  var bull = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    className: classes.bullet,
    children: "\u2022"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 18
  }, _this);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
      container: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_HomeBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HomeBanner */ "./components/HomeBanner/index.js");
/* harmony import */ var _components_AboutSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AboutSection */ "./components/AboutSection/index.js");
/* harmony import */ var _components_Team__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Team */ "./components/Team/index.js");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! groq */ "./node_modules/groq/lib/groq.js");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../client */ "./client.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\pages\\index.js",
    _this = undefined;

function _templateObject() {
  var data = (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  *[_type == \"winery\"][0] {\n    name,\n    about,\n    image,\n    \"team\": staff[]-> {\n      name, \n      staffImage,\n      position,\n      favoriteWine,\n      description\n    },\n    \"flights\": flights[]->{\n      name,\n      slug\n    }\n  }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Index = function Index(props) {
  var winery = props.winery;
  var team = winery.team;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_HomeBanner__WEBPACK_IMPORTED_MODULE_4__.default, {
      props: winery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_AboutSection__WEBPACK_IMPORTED_MODULE_5__.default, {
      props: winery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Team__WEBPACK_IMPORTED_MODULE_6__.default, {
      props: team
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }, _this);
};

_c = Index;
Index.getInitialProps = /*#__PURE__*/(0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
  return D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _client__WEBPACK_IMPORTED_MODULE_8__.default.fetch(groq__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject()));

        case 2:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            winery: _context.t0
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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

/***/ "./node_modules/react-card-carousel/build/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-card-carousel/build/index.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.POSITION={PREV:"prev",NEXT:"next",CURRENT:"current",HIDDEN:"hidden"},t.ALIGNMENT={HORIZONTAL:"horizontal",VERTICAL:"vertical"},t.SPREAD={NARROW:"narrow",MEDIUM:"medium",WIDE:"wide"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),i=c(a),u=c(n(3)),l=n(6),s=n(0);function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.goTo=function(e){n.setState({current_index:Number(e)},n.props.afterChange)},n.next=function(){n._is_mounted&&n._cardOnClick(s.POSITION.NEXT)},n.prev=function(){return n._cardOnClick(s.POSITION.PREV)},n.getCurrentIndex=function(){return n.state.current_index},n._keydownEventListener=function(e){return 39===e.which?n.next():37===e.which?n.prev():void 0},n._autoplay=function(){if(n._is_mounted){var e=n.props.autoplay_speed,t=setInterval(n.next,e);n.setState({interval:t})}},n._resetInterval=function(){clearInterval(n.state.interval),n._autoplay()},n._getCardClass=function(e){var t=n.props.children,r=n.state.current_index;return null===r?s.POSITION.HIDDEN:e===r?s.POSITION.CURRENT:e===r+1||0===e&&r===i.default.Children.count(t)-1?s.POSITION.NEXT:e===r-1||e===i.default.Children.count(t)-1&&0===r?s.POSITION.PREV:s.POSITION.HIDDEN},n._cardOnClick=function(e){var t=n.props,r=t.children,o=t.autoplay,a=n.state.current_index;o&&n._resetInterval(),e===s.POSITION.NEXT?a===i.default.Children.count(r)-1?n.setState({current_index:0},n.props.afterChange):n.setState({current_index:a+1},n.props.afterChange):e===s.POSITION.PREV&&(0===a?n.setState({current_index:i.default.Children.count(r)-1},n.props.afterChange):n.setState({current_index:a-1},n.props.afterChange))},n.ChildComponents=function(){var e=n.props,t=e.alignment,o=e.spread,a=e.disable_box_shadow;return i.default.Children.map(n.props.children,(function(e,u){var s=n._getCardClass(u);return i.default.createElement("div",{key:u,onClick:function(){return n._cardOnClick(s)},style:r({},l.STYLES.CARD,{opacity:(0,l.getOpacity)(s),zIndex:(0,l.getZIndex)(s),transform:(0,l.getTransform)(s,t,o),boxShadow:(0,l.getBoxShadow)(s,t,a),cursor:(0,l.getCursor)(s,t)})},e)}))},n.state={current_index:e.disable_fade_in?e.initial_index:null,interval:null},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.initial_index,r=t.disable_keydown,o=t.disable_fade_in,a=t.autoplay;this._is_mounted=!0,o||setTimeout((function(){e.setState({current_index:n})}),.25),r||(document.onkeydown=this._keydownEventListener),a&&this._autoplay()}},{key:"componentWillUnmount",value:function(){this._is_mounted=!1,this.props.disable_keydown||(document.onkeydown=null)}},{key:"render",value:function(){return i.default.createElement("div",{style:l.STYLES.CONTAINER},i.default.createElement(this.ChildComponents,null))}}]),t}(a.Component);f.propTypes={alignment:u.default.oneOf([s.ALIGNMENT.HORIZONTAL,s.ALIGNMENT.VERTICAL]),spread:u.default.oneOf([s.SPREAD.NARROW,s.SPREAD.MEDIUM,s.SPREAD.WIDE]),initial_index:u.default.number,disable_keydown:u.default.bool,disable_box_shadow:u.default.bool,disable_fade_in:u.default.bool,autoplay:u.default.bool,autoplay_speed:u.default.number,afterChange:u.default.func},f.defaultProps={alignment:s.ALIGNMENT.HORIZONTAL,spread:s.SPREAD.MEDIUM,initial_index:0,disable_keydown:!1,disable_box_shadow:!1,disable_fade_in:!1,autoplay:!1,autoplay_speed:5e3,afterChange:function(){}},t.default=f},function(e,t){e.exports=__webpack_require__(/*! react */ "./node_modules/react/index.js")},function(e,t,n){e.exports=n(4)()},function(e,t,n){"use strict";var r=n(5);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.STYLES=void 0,t.getOpacity=function(e){return e===r.POSITION.HIDDEN?0:1},t.getZIndex=function(e){return e===r.POSITION.HIDDEN?0:e===r.POSITION.CURRENT?2:1},t.getTransform=function(e,t,n){var o=function(e){var t=void 0,n=void 0;e===r.SPREAD.MEDIUM?(t="-85%",n="-15%"):e===r.SPREAD.NARROW?(t="-75%",n="-25%"):e===r.SPREAD.WIDE&&(t="-95%",n="-5%");return{prev:t,next:n}}(n),a=o.prev,i=o.next;if(t===r.ALIGNMENT.HORIZONTAL){if(e===r.POSITION.PREV)return"translate("+a+", -50%) scale(0.82)";if(e===r.POSITION.NEXT)return"translate("+i+", -50%) scale(0.82)"}if(t===r.ALIGNMENT.VERTICAL){if(e===r.POSITION.PREV)return"translate(-50%, "+a+") scale(0.82)";if(e===r.POSITION.NEXT)return"translate(-50%, "+i+") scale(0.82)"}return e===r.POSITION.HIDDEN?"translate(-50%, -50%) scale(0.5)":"translate(-50%, -50%)"},t.getBoxShadow=function(e,t,n){if(!n&&e===r.POSITION.CURRENT){if(t===r.ALIGNMENT.HORIZONTAL)return"30px 0px 20px -20px rgba(0, 0, 0, .4), -30px 0px 20px -20px rgba(0, 0, 0, .4)";if(t===r.ALIGNMENT.VERTICAL)return"0px 30px 20px -20px rgba(0, 0, 0, .4), 0px -30px 20px -20px rgba(0, 0, 0, .4)"}return"unset"},t.getCursor=function(e,t){if(e===r.POSITION.NEXT){if(t===r.ALIGNMENT.HORIZONTAL)return"e-resize";if(t===r.ALIGNMENT.VERTICAL)return"s-resize"}if(e===r.POSITION.PREV){if(t===r.ALIGNMENT.HORIZONTAL)return"w-resize";if(t===r.ALIGNMENT.VERTICAL)return"n-resize"}return"unset"};var r=n(0);t.STYLES={CONTAINER:{positive:"relative",width:"100%",height:"100%",margin:0,padding:0},CARD:{position:"absolute",left:"50%",top:"50%",transition:"all 0.6s"}}}]);

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZWFtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWNhcmQtY2Fyb3VzZWwvYnVpbGQvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZENvbG9yIiwiYnVsbGV0IiwibWFyZ2luIiwidHJhbnNmb3JtIiwidGl0bGUiLCJmb250U2l6ZSIsInBvcyIsIm1hcmdpbkJvdHRvbSIsIlRlYW0iLCJwcm9wcyIsImNsYXNzZXMiLCJjb25zb2xlIiwibG9nIiwiYnVsbCIsIkluZGV4Iiwid2luZXJ5IiwidGVhbSIsImdldEluaXRpYWxQcm9wcyIsImNsaWVudCIsImdyb3EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBRXJDQyxRQUFJLEVBQUM7QUFDSEMsYUFBTyxFQUFFO0FBRE4sS0FGZ0M7QUFLckNDLGNBQVUsRUFBRTtBQUNSQyxxQkFBZSxFQUFFO0FBRFQsS0FMeUI7QUFRckNDLFVBQU0sRUFBRTtBQUNKO0FBQ0FDLFlBQU0sRUFBRSxPQUZKO0FBR0pDLGVBQVMsRUFBRTtBQUhQLEtBUjZCO0FBYW5DQyxTQUFLLEVBQUU7QUFDTEMsY0FBUSxFQUFFO0FBREwsS0FiNEI7QUFnQm5DQyxPQUFHLEVBQUU7QUFDSEMsa0JBQVksRUFBRTtBQURYO0FBaEI4QixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUF3QkEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3BCLE1BQU1DLE9BQU8sR0FBR2hCLFNBQVMsRUFB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QThELDRDQUE0QyxrQ0FBa0Msa0JBQWtCLHVCQUF1Qiw4QkFBOEIsOERBQThELDhEQUE4RCx5QkFBeUIsc0NBQXNDLHlCQUF5Qix5QkFBeUIsV0FBVyxnQkFBZ0IsMEpBQTBKLEVBQUUsSUFBSSxHQUFHLFVBQVUsbUVBQW1FLEdBQUcscUJBQXFCLDJIQUEySCwwQ0FBMEMsYUFBYSxtREFBbUQsc0VBQXNFLFlBQVkseUNBQXlDLCtGQUErRiw4Q0FBOEMsWUFBWSxnQkFBZ0IsRUFBRSwrRUFBK0UsRUFBRSw0Q0FBNEMsMkVBQTJFLEVBQUUsOEJBQThCLHNDQUFzQyx5QkFBeUIsc0RBQXNELEtBQUssY0FBYyxhQUFhLG1XQUFtVyxpQkFBaUIsNExBQTRMLGFBQWEsZUFBZSxVQUFVLG1CQUFPLENBQUMsNENBQU8sRUFBRSxpQkFBaUIsaUJBQWlCLGlCQUFpQixhQUFhLFdBQVcsY0FBYyxjQUFjLDJDQUEyQyx3QkFBd0IsVUFBVSxtTUFBbU0sc0NBQXNDLGFBQWEsU0FBUyxlQUFlLE9BQU8sMk1BQTJNLHdCQUF3QixpQkFBaUIsYUFBYSx5REFBeUQsaUJBQWlCLGFBQWEsc0NBQXNDLFNBQVMsMkNBQTJDLGlDQUFpQyx5QkFBeUIsMERBQTBELGdDQUFnQyxrQkFBa0Isc0JBQXNCLHNIQUFzSCxPQUFPLGVBQWUsc0JBQXNCLCtCQUErQixrRUFBa0Usa0VBQWtFLDZCQUE2QixrRUFBa0Usa0VBQWtFLHdGQUF3RixnQ0FBZ0MsK0JBQStCLG9IQUFvSCxrSEFBa0gsY0FBYywyQkFBMkIsd0JBQXdCLCtDQUErQyw2Q0FBNkMsd0JBQXdCLCtDQUErQyw2Q0FBNkMsZUFBZSxXQUFXLFVBQVUsV0FBVyxrRUFBa0UsT0FBTyxpRUFBaUUsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNTU0NGUzNGFhMWM1YTI4ZTQ3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge0JveCwgR3JpZCwgQ2FyZCwgQXZhdGFyLENhcmRBY3Rpb25zLCBDYXJkQ29udGVudCwgVHlwb2dyYXBoeSwgQnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBSZWFjdENhcmRDYXJvdXNlbCBmcm9tICdyZWFjdC1jYXJkLWNhcm91c2VsJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgXHJcbiAgICByb290OntcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM1NTQyODcnXHJcbiAgICB9LFxyXG4gICAgYnVsbGV0OiB7XHJcbiAgICAgICAgLy8gZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgbWFyZ2luOiAnMCAycHgnLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknLFxyXG4gICAgICB9LFxyXG4gICAgICB0aXRsZToge1xyXG4gICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgfSxcclxuICAgICAgcG9zOiB7XHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAxMixcclxuICAgICAgfSxcclxuXHJcbn0pKTtcclxuXHJcblxyXG5cclxuY29uc3QgVGVhbSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgICBjb25zb2xlLmxvZygnc3RhZmYnLCBwcm9wcylcclxuICAgIGNvbnN0IGJ1bGwgPSA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuYnVsbGV0fT7igKI8L3NwYW4+O1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcblxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZWFtOyIsImltcG9ydCBIb21lQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZUJhbm5lcic7XG5pbXBvcnQgQWJvdXRTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvQWJvdXRTZWN0aW9uJztcbmltcG9ydCBUZWFtIGZyb20gJy4uL2NvbXBvbmVudHMvVGVhbSc7XG5cblxuaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSc7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uL2NsaWVudCc7XG5cblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge3dpbmVyeX0gPSBwcm9wc1xuICBjb25zdCB0ZWFtID0gd2luZXJ5LnRlYW1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhvbWVCYW5uZXIgcHJvcHMgPSB7d2luZXJ5fS8+XG4gICAgICAgIDxBYm91dFNlY3Rpb24gcHJvcHMgPSB7d2luZXJ5fS8+XG4gICAgICAgIDxUZWFtIHByb3BzID0ge3RlYW19Lz5cbiAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xuICB3aW5lcnk6IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYFxuICAqW190eXBlID09IFwid2luZXJ5XCJdWzBdIHtcbiAgICBuYW1lLFxuICAgIGFib3V0LFxuICAgIGltYWdlLFxuICAgIFwidGVhbVwiOiBzdGFmZltdLT4ge1xuICAgICAgbmFtZSwgXG4gICAgICBzdGFmZkltYWdlLFxuICAgICAgcG9zaXRpb24sXG4gICAgICBmYXZvcml0ZVdpbmUsXG4gICAgICBkZXNjcmlwdGlvblxuICAgIH0sXG4gICAgXCJmbGlnaHRzXCI6IGZsaWdodHNbXS0+e1xuICAgICAgbmFtZSxcbiAgICAgIHNsdWdcbiAgICB9XG4gIH1cbiAgYClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIG4ocil7aWYodFtyXSlyZXR1cm4gdFtyXS5leHBvcnRzO3ZhciBvPXRbcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIG4ubT1lLG4uYz10LG4uZD1mdW5jdGlvbihlLHQscil7bi5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0OnJ9KX0sbi5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbihlLHQpe2lmKDEmdCYmKGU9bihlKSksOCZ0KXJldHVybiBlO2lmKDQmdCYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihyKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZ0JiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIG8gaW4gZSluLmQocixvLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfS5iaW5kKG51bGwsbykpO3JldHVybiByfSxuLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIG4uZCh0LFwiYVwiLHQpLHR9LG4ubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sbi5wPVwiXCIsbihuLnM9MSl9KFtmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dC5QT1NJVElPTj17UFJFVjpcInByZXZcIixORVhUOlwibmV4dFwiLENVUlJFTlQ6XCJjdXJyZW50XCIsSElEREVOOlwiaGlkZGVuXCJ9LHQuQUxJR05NRU5UPXtIT1JJWk9OVEFMOlwiaG9yaXpvbnRhbFwiLFZFUlRJQ0FMOlwidmVydGljYWxcIn0sdC5TUFJFQUQ9e05BUlJPVzpcIm5hcnJvd1wiLE1FRElVTTpcIm1lZGl1bVwiLFdJREU6XCJ3aWRlXCJ9fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgciBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLHIpJiYoZVtyXT1uW3JdKX1yZXR1cm4gZX0sbz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHI9dFtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fXJldHVybiBmdW5jdGlvbih0LG4scil7cmV0dXJuIG4mJmUodC5wcm90b3R5cGUsbiksciYmZSh0LHIpLHR9fSgpLGE9bigyKSxpPWMoYSksdT1jKG4oMykpLGw9big2KSxzPW4oMCk7ZnVuY3Rpb24gYyhlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19dmFyIGY9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChlKXshZnVuY3Rpb24oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLHQpO3ZhciBuPWZ1bmN0aW9uKGUsdCl7aWYoIWUpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiF0fHxcIm9iamVjdFwiIT10eXBlb2YgdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdD9lOnR9KHRoaXMsKHQuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YodCkpLmNhbGwodGhpcyxlKSk7cmV0dXJuIG4uZ29Ubz1mdW5jdGlvbihlKXtuLnNldFN0YXRlKHtjdXJyZW50X2luZGV4Ok51bWJlcihlKX0sbi5wcm9wcy5hZnRlckNoYW5nZSl9LG4ubmV4dD1mdW5jdGlvbigpe24uX2lzX21vdW50ZWQmJm4uX2NhcmRPbkNsaWNrKHMuUE9TSVRJT04uTkVYVCl9LG4ucHJldj1mdW5jdGlvbigpe3JldHVybiBuLl9jYXJkT25DbGljayhzLlBPU0lUSU9OLlBSRVYpfSxuLmdldEN1cnJlbnRJbmRleD1mdW5jdGlvbigpe3JldHVybiBuLnN0YXRlLmN1cnJlbnRfaW5kZXh9LG4uX2tleWRvd25FdmVudExpc3RlbmVyPWZ1bmN0aW9uKGUpe3JldHVybiAzOT09PWUud2hpY2g/bi5uZXh0KCk6Mzc9PT1lLndoaWNoP24ucHJldigpOnZvaWQgMH0sbi5fYXV0b3BsYXk9ZnVuY3Rpb24oKXtpZihuLl9pc19tb3VudGVkKXt2YXIgZT1uLnByb3BzLmF1dG9wbGF5X3NwZWVkLHQ9c2V0SW50ZXJ2YWwobi5uZXh0LGUpO24uc2V0U3RhdGUoe2ludGVydmFsOnR9KX19LG4uX3Jlc2V0SW50ZXJ2YWw9ZnVuY3Rpb24oKXtjbGVhckludGVydmFsKG4uc3RhdGUuaW50ZXJ2YWwpLG4uX2F1dG9wbGF5KCl9LG4uX2dldENhcmRDbGFzcz1mdW5jdGlvbihlKXt2YXIgdD1uLnByb3BzLmNoaWxkcmVuLHI9bi5zdGF0ZS5jdXJyZW50X2luZGV4O3JldHVybiBudWxsPT09cj9zLlBPU0lUSU9OLkhJRERFTjplPT09cj9zLlBPU0lUSU9OLkNVUlJFTlQ6ZT09PXIrMXx8MD09PWUmJnI9PT1pLmRlZmF1bHQuQ2hpbGRyZW4uY291bnQodCktMT9zLlBPU0lUSU9OLk5FWFQ6ZT09PXItMXx8ZT09PWkuZGVmYXVsdC5DaGlsZHJlbi5jb3VudCh0KS0xJiYwPT09cj9zLlBPU0lUSU9OLlBSRVY6cy5QT1NJVElPTi5ISURERU59LG4uX2NhcmRPbkNsaWNrPWZ1bmN0aW9uKGUpe3ZhciB0PW4ucHJvcHMscj10LmNoaWxkcmVuLG89dC5hdXRvcGxheSxhPW4uc3RhdGUuY3VycmVudF9pbmRleDtvJiZuLl9yZXNldEludGVydmFsKCksZT09PXMuUE9TSVRJT04uTkVYVD9hPT09aS5kZWZhdWx0LkNoaWxkcmVuLmNvdW50KHIpLTE/bi5zZXRTdGF0ZSh7Y3VycmVudF9pbmRleDowfSxuLnByb3BzLmFmdGVyQ2hhbmdlKTpuLnNldFN0YXRlKHtjdXJyZW50X2luZGV4OmErMX0sbi5wcm9wcy5hZnRlckNoYW5nZSk6ZT09PXMuUE9TSVRJT04uUFJFViYmKDA9PT1hP24uc2V0U3RhdGUoe2N1cnJlbnRfaW5kZXg6aS5kZWZhdWx0LkNoaWxkcmVuLmNvdW50KHIpLTF9LG4ucHJvcHMuYWZ0ZXJDaGFuZ2UpOm4uc2V0U3RhdGUoe2N1cnJlbnRfaW5kZXg6YS0xfSxuLnByb3BzLmFmdGVyQ2hhbmdlKSl9LG4uQ2hpbGRDb21wb25lbnRzPWZ1bmN0aW9uKCl7dmFyIGU9bi5wcm9wcyx0PWUuYWxpZ25tZW50LG89ZS5zcHJlYWQsYT1lLmRpc2FibGVfYm94X3NoYWRvdztyZXR1cm4gaS5kZWZhdWx0LkNoaWxkcmVuLm1hcChuLnByb3BzLmNoaWxkcmVuLChmdW5jdGlvbihlLHUpe3ZhciBzPW4uX2dldENhcmRDbGFzcyh1KTtyZXR1cm4gaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7a2V5OnUsb25DbGljazpmdW5jdGlvbigpe3JldHVybiBuLl9jYXJkT25DbGljayhzKX0sc3R5bGU6cih7fSxsLlNUWUxFUy5DQVJELHtvcGFjaXR5OigwLGwuZ2V0T3BhY2l0eSkocyksekluZGV4OigwLGwuZ2V0WkluZGV4KShzKSx0cmFuc2Zvcm06KDAsbC5nZXRUcmFuc2Zvcm0pKHMsdCxvKSxib3hTaGFkb3c6KDAsbC5nZXRCb3hTaGFkb3cpKHMsdCxhKSxjdXJzb3I6KDAsbC5nZXRDdXJzb3IpKHMsdCl9KX0sZSl9KSl9LG4uc3RhdGU9e2N1cnJlbnRfaW5kZXg6ZS5kaXNhYmxlX2ZhZGVfaW4/ZS5pbml0aWFsX2luZGV4Om51bGwsaW50ZXJ2YWw6bnVsbH0sbn1yZXR1cm4gZnVuY3Rpb24oZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZudWxsIT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2YgdCk7ZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0JiZ0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksdCYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YoZSx0KTplLl9fcHJvdG9fXz10KX0odCxlKSxvKHQsW3trZXk6XCJjb21wb25lbnREaWRNb3VudFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PXRoaXMucHJvcHMsbj10LmluaXRpYWxfaW5kZXgscj10LmRpc2FibGVfa2V5ZG93bixvPXQuZGlzYWJsZV9mYWRlX2luLGE9dC5hdXRvcGxheTt0aGlzLl9pc19tb3VudGVkPSEwLG98fHNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7ZS5zZXRTdGF0ZSh7Y3VycmVudF9pbmRleDpufSl9KSwuMjUpLHJ8fChkb2N1bWVudC5vbmtleWRvd249dGhpcy5fa2V5ZG93bkV2ZW50TGlzdGVuZXIpLGEmJnRoaXMuX2F1dG9wbGF5KCl9fSx7a2V5OlwiY29tcG9uZW50V2lsbFVubW91bnRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuX2lzX21vdW50ZWQ9ITEsdGhpcy5wcm9wcy5kaXNhYmxlX2tleWRvd258fChkb2N1bWVudC5vbmtleWRvd249bnVsbCl9fSx7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gaS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6bC5TVFlMRVMuQ09OVEFJTkVSfSxpLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh0aGlzLkNoaWxkQ29tcG9uZW50cyxudWxsKSl9fV0pLHR9KGEuQ29tcG9uZW50KTtmLnByb3BUeXBlcz17YWxpZ25tZW50OnUuZGVmYXVsdC5vbmVPZihbcy5BTElHTk1FTlQuSE9SSVpPTlRBTCxzLkFMSUdOTUVOVC5WRVJUSUNBTF0pLHNwcmVhZDp1LmRlZmF1bHQub25lT2YoW3MuU1BSRUFELk5BUlJPVyxzLlNQUkVBRC5NRURJVU0scy5TUFJFQUQuV0lERV0pLGluaXRpYWxfaW5kZXg6dS5kZWZhdWx0Lm51bWJlcixkaXNhYmxlX2tleWRvd246dS5kZWZhdWx0LmJvb2wsZGlzYWJsZV9ib3hfc2hhZG93OnUuZGVmYXVsdC5ib29sLGRpc2FibGVfZmFkZV9pbjp1LmRlZmF1bHQuYm9vbCxhdXRvcGxheTp1LmRlZmF1bHQuYm9vbCxhdXRvcGxheV9zcGVlZDp1LmRlZmF1bHQubnVtYmVyLGFmdGVyQ2hhbmdlOnUuZGVmYXVsdC5mdW5jfSxmLmRlZmF1bHRQcm9wcz17YWxpZ25tZW50OnMuQUxJR05NRU5ULkhPUklaT05UQUwsc3ByZWFkOnMuU1BSRUFELk1FRElVTSxpbml0aWFsX2luZGV4OjAsZGlzYWJsZV9rZXlkb3duOiExLGRpc2FibGVfYm94X3NoYWRvdzohMSxkaXNhYmxlX2ZhZGVfaW46ITEsYXV0b3BsYXk6ITEsYXV0b3BsYXlfc3BlZWQ6NWUzLGFmdGVyQ2hhbmdlOmZ1bmN0aW9uKCl7fX0sdC5kZWZhdWx0PWZ9LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPXJlcXVpcmUoXCJyZWFjdFwiKX0sZnVuY3Rpb24oZSx0LG4pe2UuZXhwb3J0cz1uKDQpKCl9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDUpO2Z1bmN0aW9uIG8oKXt9ZnVuY3Rpb24gYSgpe31hLnJlc2V0V2FybmluZ0NhY2hlPW8sZS5leHBvcnRzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQsbixvLGEsaSl7aWYoaSE9PXIpe3ZhciB1PW5ldyBFcnJvcihcIkNhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuIFVzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uIFJlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXNcIik7dGhyb3cgdS5uYW1lPVwiSW52YXJpYW50IFZpb2xhdGlvblwiLHV9fWZ1bmN0aW9uIHQoKXtyZXR1cm4gZX1lLmlzUmVxdWlyZWQ9ZTt2YXIgbj17YXJyYXk6ZSxib29sOmUsZnVuYzplLG51bWJlcjplLG9iamVjdDplLHN0cmluZzplLHN5bWJvbDplLGFueTplLGFycmF5T2Y6dCxlbGVtZW50OmUsZWxlbWVudFR5cGU6ZSxpbnN0YW5jZU9mOnQsbm9kZTplLG9iamVjdE9mOnQsb25lT2Y6dCxvbmVPZlR5cGU6dCxzaGFwZTp0LGV4YWN0OnQsY2hlY2tQcm9wVHlwZXM6YSxyZXNldFdhcm5pbmdDYWNoZTpvfTtyZXR1cm4gbi5Qcm9wVHlwZXM9bixufX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1cIlNFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEXCJ9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LlNUWUxFUz12b2lkIDAsdC5nZXRPcGFjaXR5PWZ1bmN0aW9uKGUpe3JldHVybiBlPT09ci5QT1NJVElPTi5ISURERU4/MDoxfSx0LmdldFpJbmRleD1mdW5jdGlvbihlKXtyZXR1cm4gZT09PXIuUE9TSVRJT04uSElEREVOPzA6ZT09PXIuUE9TSVRJT04uQ1VSUkVOVD8yOjF9LHQuZ2V0VHJhbnNmb3JtPWZ1bmN0aW9uKGUsdCxuKXt2YXIgbz1mdW5jdGlvbihlKXt2YXIgdD12b2lkIDAsbj12b2lkIDA7ZT09PXIuU1BSRUFELk1FRElVTT8odD1cIi04NSVcIixuPVwiLTE1JVwiKTplPT09ci5TUFJFQUQuTkFSUk9XPyh0PVwiLTc1JVwiLG49XCItMjUlXCIpOmU9PT1yLlNQUkVBRC5XSURFJiYodD1cIi05NSVcIixuPVwiLTUlXCIpO3JldHVybntwcmV2OnQsbmV4dDpufX0obiksYT1vLnByZXYsaT1vLm5leHQ7aWYodD09PXIuQUxJR05NRU5ULkhPUklaT05UQUwpe2lmKGU9PT1yLlBPU0lUSU9OLlBSRVYpcmV0dXJuXCJ0cmFuc2xhdGUoXCIrYStcIiwgLTUwJSkgc2NhbGUoMC44MilcIjtpZihlPT09ci5QT1NJVElPTi5ORVhUKXJldHVyblwidHJhbnNsYXRlKFwiK2krXCIsIC01MCUpIHNjYWxlKDAuODIpXCJ9aWYodD09PXIuQUxJR05NRU5ULlZFUlRJQ0FMKXtpZihlPT09ci5QT1NJVElPTi5QUkVWKXJldHVyblwidHJhbnNsYXRlKC01MCUsIFwiK2ErXCIpIHNjYWxlKDAuODIpXCI7aWYoZT09PXIuUE9TSVRJT04uTkVYVClyZXR1cm5cInRyYW5zbGF0ZSgtNTAlLCBcIitpK1wiKSBzY2FsZSgwLjgyKVwifXJldHVybiBlPT09ci5QT1NJVElPTi5ISURERU4/XCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC41KVwiOlwidHJhbnNsYXRlKC01MCUsIC01MCUpXCJ9LHQuZ2V0Qm94U2hhZG93PWZ1bmN0aW9uKGUsdCxuKXtpZighbiYmZT09PXIuUE9TSVRJT04uQ1VSUkVOVCl7aWYodD09PXIuQUxJR05NRU5ULkhPUklaT05UQUwpcmV0dXJuXCIzMHB4IDBweCAyMHB4IC0yMHB4IHJnYmEoMCwgMCwgMCwgLjQpLCAtMzBweCAwcHggMjBweCAtMjBweCByZ2JhKDAsIDAsIDAsIC40KVwiO2lmKHQ9PT1yLkFMSUdOTUVOVC5WRVJUSUNBTClyZXR1cm5cIjBweCAzMHB4IDIwcHggLTIwcHggcmdiYSgwLCAwLCAwLCAuNCksIDBweCAtMzBweCAyMHB4IC0yMHB4IHJnYmEoMCwgMCwgMCwgLjQpXCJ9cmV0dXJuXCJ1bnNldFwifSx0LmdldEN1cnNvcj1mdW5jdGlvbihlLHQpe2lmKGU9PT1yLlBPU0lUSU9OLk5FWFQpe2lmKHQ9PT1yLkFMSUdOTUVOVC5IT1JJWk9OVEFMKXJldHVyblwiZS1yZXNpemVcIjtpZih0PT09ci5BTElHTk1FTlQuVkVSVElDQUwpcmV0dXJuXCJzLXJlc2l6ZVwifWlmKGU9PT1yLlBPU0lUSU9OLlBSRVYpe2lmKHQ9PT1yLkFMSUdOTUVOVC5IT1JJWk9OVEFMKXJldHVyblwidy1yZXNpemVcIjtpZih0PT09ci5BTElHTk1FTlQuVkVSVElDQUwpcmV0dXJuXCJuLXJlc2l6ZVwifXJldHVyblwidW5zZXRcIn07dmFyIHI9bigwKTt0LlNUWUxFUz17Q09OVEFJTkVSOntwb3NpdGl2ZTpcInJlbGF0aXZlXCIsd2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwiLG1hcmdpbjowLHBhZGRpbmc6MH0sQ0FSRDp7cG9zaXRpb246XCJhYnNvbHV0ZVwiLGxlZnQ6XCI1MCVcIix0b3A6XCI1MCVcIix0cmFuc2l0aW9uOlwiYWxsIDAuNnNcIn19fV0pOyJdLCJzb3VyY2VSb290IjoiIn0=