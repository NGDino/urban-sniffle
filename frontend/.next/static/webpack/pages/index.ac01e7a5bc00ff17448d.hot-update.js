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
/* harmony import */ var react_card_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-card-carousel */ "./node_modules/react-card-carousel/build/index.js");
/* harmony import */ var react_card_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_card_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\Team\\index.js",
    _this = undefined,
    _s = $RefreshSig$();




var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1)
      }
    },
    background: {
      backgroundColor: '#554287'
    }
  };
});

var Team = function Team(props) {
  _s();

  var classes = useStyles();
  console.log('staff', props);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_card_carousel__WEBPACK_IMPORTED_MODULE_1___default()), {
      autoplay: true,
      autoplay_speed: 2500,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: MyCarousel.CARD_STYLE,
        children: "First Card"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: MyCarousel.CARD_STYLE,
        children: "Second Card"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: MyCarousel.CARD_STYLE,
        children: "Third Card"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: MyCarousel.CARD_STYLE,
        children: "Fourth Card"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: MyCarousel.CARD_STYLE,
        children: "Fifth Card"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
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

/***/ "./node_modules/react-card-carousel/build/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-card-carousel/build/index.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.POSITION={PREV:"prev",NEXT:"next",CURRENT:"current",HIDDEN:"hidden"},t.ALIGNMENT={HORIZONTAL:"horizontal",VERTICAL:"vertical"},t.SPREAD={NARROW:"narrow",MEDIUM:"medium",WIDE:"wide"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),i=c(a),u=c(n(3)),l=n(6),s=n(0);function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.goTo=function(e){n.setState({current_index:Number(e)},n.props.afterChange)},n.next=function(){n._is_mounted&&n._cardOnClick(s.POSITION.NEXT)},n.prev=function(){return n._cardOnClick(s.POSITION.PREV)},n.getCurrentIndex=function(){return n.state.current_index},n._keydownEventListener=function(e){return 39===e.which?n.next():37===e.which?n.prev():void 0},n._autoplay=function(){if(n._is_mounted){var e=n.props.autoplay_speed,t=setInterval(n.next,e);n.setState({interval:t})}},n._resetInterval=function(){clearInterval(n.state.interval),n._autoplay()},n._getCardClass=function(e){var t=n.props.children,r=n.state.current_index;return null===r?s.POSITION.HIDDEN:e===r?s.POSITION.CURRENT:e===r+1||0===e&&r===i.default.Children.count(t)-1?s.POSITION.NEXT:e===r-1||e===i.default.Children.count(t)-1&&0===r?s.POSITION.PREV:s.POSITION.HIDDEN},n._cardOnClick=function(e){var t=n.props,r=t.children,o=t.autoplay,a=n.state.current_index;o&&n._resetInterval(),e===s.POSITION.NEXT?a===i.default.Children.count(r)-1?n.setState({current_index:0},n.props.afterChange):n.setState({current_index:a+1},n.props.afterChange):e===s.POSITION.PREV&&(0===a?n.setState({current_index:i.default.Children.count(r)-1},n.props.afterChange):n.setState({current_index:a-1},n.props.afterChange))},n.ChildComponents=function(){var e=n.props,t=e.alignment,o=e.spread,a=e.disable_box_shadow;return i.default.Children.map(n.props.children,(function(e,u){var s=n._getCardClass(u);return i.default.createElement("div",{key:u,onClick:function(){return n._cardOnClick(s)},style:r({},l.STYLES.CARD,{opacity:(0,l.getOpacity)(s),zIndex:(0,l.getZIndex)(s),transform:(0,l.getTransform)(s,t,o),boxShadow:(0,l.getBoxShadow)(s,t,a),cursor:(0,l.getCursor)(s,t)})},e)}))},n.state={current_index:e.disable_fade_in?e.initial_index:null,interval:null},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.initial_index,r=t.disable_keydown,o=t.disable_fade_in,a=t.autoplay;this._is_mounted=!0,o||setTimeout((function(){e.setState({current_index:n})}),.25),r||(document.onkeydown=this._keydownEventListener),a&&this._autoplay()}},{key:"componentWillUnmount",value:function(){this._is_mounted=!1,this.props.disable_keydown||(document.onkeydown=null)}},{key:"render",value:function(){return i.default.createElement("div",{style:l.STYLES.CONTAINER},i.default.createElement(this.ChildComponents,null))}}]),t}(a.Component);f.propTypes={alignment:u.default.oneOf([s.ALIGNMENT.HORIZONTAL,s.ALIGNMENT.VERTICAL]),spread:u.default.oneOf([s.SPREAD.NARROW,s.SPREAD.MEDIUM,s.SPREAD.WIDE]),initial_index:u.default.number,disable_keydown:u.default.bool,disable_box_shadow:u.default.bool,disable_fade_in:u.default.bool,autoplay:u.default.bool,autoplay_speed:u.default.number,afterChange:u.default.func},f.defaultProps={alignment:s.ALIGNMENT.HORIZONTAL,spread:s.SPREAD.MEDIUM,initial_index:0,disable_keydown:!1,disable_box_shadow:!1,disable_fade_in:!1,autoplay:!1,autoplay_speed:5e3,afterChange:function(){}},t.default=f},function(e,t){e.exports=__webpack_require__(/*! react */ "./node_modules/react/index.js")},function(e,t,n){e.exports=n(4)()},function(e,t,n){"use strict";var r=n(5);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.STYLES=void 0,t.getOpacity=function(e){return e===r.POSITION.HIDDEN?0:1},t.getZIndex=function(e){return e===r.POSITION.HIDDEN?0:e===r.POSITION.CURRENT?2:1},t.getTransform=function(e,t,n){var o=function(e){var t=void 0,n=void 0;e===r.SPREAD.MEDIUM?(t="-85%",n="-15%"):e===r.SPREAD.NARROW?(t="-75%",n="-25%"):e===r.SPREAD.WIDE&&(t="-95%",n="-5%");return{prev:t,next:n}}(n),a=o.prev,i=o.next;if(t===r.ALIGNMENT.HORIZONTAL){if(e===r.POSITION.PREV)return"translate("+a+", -50%) scale(0.82)";if(e===r.POSITION.NEXT)return"translate("+i+", -50%) scale(0.82)"}if(t===r.ALIGNMENT.VERTICAL){if(e===r.POSITION.PREV)return"translate(-50%, "+a+") scale(0.82)";if(e===r.POSITION.NEXT)return"translate(-50%, "+i+") scale(0.82)"}return e===r.POSITION.HIDDEN?"translate(-50%, -50%) scale(0.5)":"translate(-50%, -50%)"},t.getBoxShadow=function(e,t,n){if(!n&&e===r.POSITION.CURRENT){if(t===r.ALIGNMENT.HORIZONTAL)return"30px 0px 20px -20px rgba(0, 0, 0, .4), -30px 0px 20px -20px rgba(0, 0, 0, .4)";if(t===r.ALIGNMENT.VERTICAL)return"0px 30px 20px -20px rgba(0, 0, 0, .4), 0px -30px 20px -20px rgba(0, 0, 0, .4)"}return"unset"},t.getCursor=function(e,t){if(e===r.POSITION.NEXT){if(t===r.ALIGNMENT.HORIZONTAL)return"e-resize";if(t===r.ALIGNMENT.VERTICAL)return"s-resize"}if(e===r.POSITION.PREV){if(t===r.ALIGNMENT.HORIZONTAL)return"w-resize";if(t===r.ALIGNMENT.VERTICAL)return"n-resize"}return"unset"};var r=n(0);t.STYLES={CONTAINER:{positive:"relative",width:"100%",height:"100%",margin:0,padding:0},CARD:{position:"absolute",left:"50%",top:"50%",transition:"all 0.6s"}}}]);

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZWFtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtY2FyZC1jYXJvdXNlbC9idWlsZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsIm1hcmdpbiIsInNwYWNpbmciLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZENvbG9yIiwiVGVhbSIsInByb3BzIiwiY2xhc3NlcyIsImNvbnNvbGUiLCJsb2ciLCJNeUNhcm91c2VsIiwiQ0FSRF9TVFlMRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsUUFBSSxFQUFFO0FBQ0ZDLGFBQU8sRUFBRSxNQURQO0FBRUYsZUFBUztBQUNUQyxjQUFNLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQ7QUFEQztBQUZQLEtBRCtCO0FBT3JDQyxjQUFVLEVBQUU7QUFDUkMscUJBQWUsRUFBRTtBQURUO0FBUHlCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQWFBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUNwQixNQUFNQyxPQUFPLEdBQUdYLFNBQVMsRUFBekI7QUFDQVksU0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkgsS0FBckI7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBR0MsT0FBTyxDQUFDUixJQUF6QjtBQUFBLDJCQUNJLDhEQUFDLDREQUFEO0FBQW1CLGNBQVEsRUFBRyxJQUE5QjtBQUFxQyxvQkFBYyxFQUFHLElBQXREO0FBQUEsOEJBQ0k7QUFBSyxhQUFLLEVBQUdXLFVBQVUsQ0FBQ0MsVUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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a0Usd0ZBQXdGLGdDQUFnQywrQkFBK0Isb0hBQW9ILGtIQUFrSCxjQUFjLDJCQUEyQix3QkFBd0IsK0NBQStDLDZDQUE2Qyx3QkFBd0IsK0NBQStDLDZDQUE2QyxlQUFlLFdBQVcsVUFBVSxXQUFXLGtFQUFrRSxPQUFPLGlFQUFpRSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFjMDFlN2E1YmMwMGZmMTc0NDhkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7R3JpZCwgQ2FyZCwgQXZhdGFyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBSZWFjdENhcmRDYXJvdXNlbCBmcm9tICdyZWFjdC1jYXJkLWNhcm91c2VsJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAnJiA+IConOiB7XHJcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM1NTQyODcnXHJcbiAgICB9XHJcblxyXG59KSk7XHJcblxyXG5jb25zdCBUZWFtID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICAgIGNvbnNvbGUubG9nKCdzdGFmZicsIHByb3BzKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxSZWFjdENhcmRDYXJvdXNlbCBhdXRvcGxheT17IHRydWUgfSBhdXRvcGxheV9zcGVlZD17IDI1MDAgfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9eyBNeUNhcm91c2VsLkNBUkRfU1RZTEUgfT5cclxuICAgICAgICAgICAgICAgIEZpcnN0IENhcmRcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17IE15Q2Fyb3VzZWwuQ0FSRF9TVFlMRSB9PlxyXG4gICAgICAgICAgICAgICAgU2Vjb25kIENhcmRcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17IE15Q2Fyb3VzZWwuQ0FSRF9TVFlMRSB9PlxyXG4gICAgICAgICAgICAgICAgVGhpcmQgQ2FyZFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXsgTXlDYXJvdXNlbC5DQVJEX1NUWUxFIH0+XHJcbiAgICAgICAgICAgICAgICBGb3VydGggQ2FyZFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXsgTXlDYXJvdXNlbC5DQVJEX1NUWUxFIH0+XHJcbiAgICAgICAgICAgICAgICBGaWZ0aCBDYXJkXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9SZWFjdENhcmRDYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPEF2YXRhcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+ICovfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlYW07IiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gbihyKXtpZih0W3JdKXJldHVybiB0W3JdLmV4cG9ydHM7dmFyIG89dFtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gbi5tPWUsbi5jPXQsbi5kPWZ1bmN0aW9uKGUsdCxyKXtuLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxuLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1uKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciByPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgbyBpbiBlKW4uZChyLG8sZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxvKSk7cmV0dXJuIHJ9LG4ubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gbi5kKHQsXCJhXCIsdCksdH0sbi5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxuLnA9XCJcIixuKG4ucz0xKX0oW2Z1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt0LlBPU0lUSU9OPXtQUkVWOlwicHJldlwiLE5FWFQ6XCJuZXh0XCIsQ1VSUkVOVDpcImN1cnJlbnRcIixISURERU46XCJoaWRkZW5cIn0sdC5BTElHTk1FTlQ9e0hPUklaT05UQUw6XCJob3Jpem9udGFsXCIsVkVSVElDQUw6XCJ2ZXJ0aWNhbFwifSx0LlNQUkVBRD17TkFSUk9XOlwibmFycm93XCIsTUVESVVNOlwibWVkaXVtXCIsV0lERTpcIndpZGVcIn19LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07Zm9yKHZhciByIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4scikmJihlW3JdPW5bcl0pfXJldHVybiBlfSxvPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgcj10W25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLmtleSxyKX19cmV0dXJuIGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gbiYmZSh0LnByb3RvdHlwZSxuKSxyJiZlKHQsciksdH19KCksYT1uKDIpLGk9YyhhKSx1PWMobigzKSksbD1uKDYpLHM9bigwKTtmdW5jdGlvbiBjKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX12YXIgZj1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KGUpeyFmdW5jdGlvbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsdCk7dmFyIG49ZnVuY3Rpb24oZSx0KXtpZighZSl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0P2U6dH0odGhpcywodC5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSkuY2FsbCh0aGlzLGUpKTtyZXR1cm4gbi5nb1RvPWZ1bmN0aW9uKGUpe24uc2V0U3RhdGUoe2N1cnJlbnRfaW5kZXg6TnVtYmVyKGUpfSxuLnByb3BzLmFmdGVyQ2hhbmdlKX0sbi5uZXh0PWZ1bmN0aW9uKCl7bi5faXNfbW91bnRlZCYmbi5fY2FyZE9uQ2xpY2socy5QT1NJVElPTi5ORVhUKX0sbi5wcmV2PWZ1bmN0aW9uKCl7cmV0dXJuIG4uX2NhcmRPbkNsaWNrKHMuUE9TSVRJT04uUFJFVil9LG4uZ2V0Q3VycmVudEluZGV4PWZ1bmN0aW9uKCl7cmV0dXJuIG4uc3RhdGUuY3VycmVudF9pbmRleH0sbi5fa2V5ZG93bkV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24oZSl7cmV0dXJuIDM5PT09ZS53aGljaD9uLm5leHQoKTozNz09PWUud2hpY2g/bi5wcmV2KCk6dm9pZCAwfSxuLl9hdXRvcGxheT1mdW5jdGlvbigpe2lmKG4uX2lzX21vdW50ZWQpe3ZhciBlPW4ucHJvcHMuYXV0b3BsYXlfc3BlZWQsdD1zZXRJbnRlcnZhbChuLm5leHQsZSk7bi5zZXRTdGF0ZSh7aW50ZXJ2YWw6dH0pfX0sbi5fcmVzZXRJbnRlcnZhbD1mdW5jdGlvbigpe2NsZWFySW50ZXJ2YWwobi5zdGF0ZS5pbnRlcnZhbCksbi5fYXV0b3BsYXkoKX0sbi5fZ2V0Q2FyZENsYXNzPWZ1bmN0aW9uKGUpe3ZhciB0PW4ucHJvcHMuY2hpbGRyZW4scj1uLnN0YXRlLmN1cnJlbnRfaW5kZXg7cmV0dXJuIG51bGw9PT1yP3MuUE9TSVRJT04uSElEREVOOmU9PT1yP3MuUE9TSVRJT04uQ1VSUkVOVDplPT09cisxfHwwPT09ZSYmcj09PWkuZGVmYXVsdC5DaGlsZHJlbi5jb3VudCh0KS0xP3MuUE9TSVRJT04uTkVYVDplPT09ci0xfHxlPT09aS5kZWZhdWx0LkNoaWxkcmVuLmNvdW50KHQpLTEmJjA9PT1yP3MuUE9TSVRJT04uUFJFVjpzLlBPU0lUSU9OLkhJRERFTn0sbi5fY2FyZE9uQ2xpY2s9ZnVuY3Rpb24oZSl7dmFyIHQ9bi5wcm9wcyxyPXQuY2hpbGRyZW4sbz10LmF1dG9wbGF5LGE9bi5zdGF0ZS5jdXJyZW50X2luZGV4O28mJm4uX3Jlc2V0SW50ZXJ2YWwoKSxlPT09cy5QT1NJVElPTi5ORVhUP2E9PT1pLmRlZmF1bHQuQ2hpbGRyZW4uY291bnQociktMT9uLnNldFN0YXRlKHtjdXJyZW50X2luZGV4OjB9LG4ucHJvcHMuYWZ0ZXJDaGFuZ2UpOm4uc2V0U3RhdGUoe2N1cnJlbnRfaW5kZXg6YSsxfSxuLnByb3BzLmFmdGVyQ2hhbmdlKTplPT09cy5QT1NJVElPTi5QUkVWJiYoMD09PWE/bi5zZXRTdGF0ZSh7Y3VycmVudF9pbmRleDppLmRlZmF1bHQuQ2hpbGRyZW4uY291bnQociktMX0sbi5wcm9wcy5hZnRlckNoYW5nZSk6bi5zZXRTdGF0ZSh7Y3VycmVudF9pbmRleDphLTF9LG4ucHJvcHMuYWZ0ZXJDaGFuZ2UpKX0sbi5DaGlsZENvbXBvbmVudHM9ZnVuY3Rpb24oKXt2YXIgZT1uLnByb3BzLHQ9ZS5hbGlnbm1lbnQsbz1lLnNwcmVhZCxhPWUuZGlzYWJsZV9ib3hfc2hhZG93O3JldHVybiBpLmRlZmF1bHQuQ2hpbGRyZW4ubWFwKG4ucHJvcHMuY2hpbGRyZW4sKGZ1bmN0aW9uKGUsdSl7dmFyIHM9bi5fZ2V0Q2FyZENsYXNzKHUpO3JldHVybiBpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtrZXk6dSxvbkNsaWNrOmZ1bmN0aW9uKCl7cmV0dXJuIG4uX2NhcmRPbkNsaWNrKHMpfSxzdHlsZTpyKHt9LGwuU1RZTEVTLkNBUkQse29wYWNpdHk6KDAsbC5nZXRPcGFjaXR5KShzKSx6SW5kZXg6KDAsbC5nZXRaSW5kZXgpKHMpLHRyYW5zZm9ybTooMCxsLmdldFRyYW5zZm9ybSkocyx0LG8pLGJveFNoYWRvdzooMCxsLmdldEJveFNoYWRvdykocyx0LGEpLGN1cnNvcjooMCxsLmdldEN1cnNvcikocyx0KX0pfSxlKX0pKX0sbi5zdGF0ZT17Y3VycmVudF9pbmRleDplLmRpc2FibGVfZmFkZV9pbj9lLmluaXRpYWxfaW5kZXg6bnVsbCxpbnRlcnZhbDpudWxsfSxufXJldHVybiBmdW5jdGlvbihlLHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJm51bGwhPT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiK3R5cGVvZiB0KTtlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQmJnQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6ZSxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSx0JiYoT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZihlLHQpOmUuX19wcm90b19fPXQpfSh0LGUpLG8odCxbe2tleTpcImNvbXBvbmVudERpZE1vdW50XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9dGhpcy5wcm9wcyxuPXQuaW5pdGlhbF9pbmRleCxyPXQuZGlzYWJsZV9rZXlkb3duLG89dC5kaXNhYmxlX2ZhZGVfaW4sYT10LmF1dG9wbGF5O3RoaXMuX2lzX21vdW50ZWQ9ITAsb3x8c2V0VGltZW91dCgoZnVuY3Rpb24oKXtlLnNldFN0YXRlKHtjdXJyZW50X2luZGV4Om59KX0pLC4yNSkscnx8KGRvY3VtZW50Lm9ua2V5ZG93bj10aGlzLl9rZXlkb3duRXZlbnRMaXN0ZW5lciksYSYmdGhpcy5fYXV0b3BsYXkoKX19LHtrZXk6XCJjb21wb25lbnRXaWxsVW5tb3VudFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5faXNfbW91bnRlZD0hMSx0aGlzLnByb3BzLmRpc2FibGVfa2V5ZG93bnx8KGRvY3VtZW50Lm9ua2V5ZG93bj1udWxsKX19LHtrZXk6XCJyZW5kZXJcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBpLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTpsLlNUWUxFUy5DT05UQUlORVJ9LGkuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHRoaXMuQ2hpbGRDb21wb25lbnRzLG51bGwpKX19XSksdH0oYS5Db21wb25lbnQpO2YucHJvcFR5cGVzPXthbGlnbm1lbnQ6dS5kZWZhdWx0Lm9uZU9mKFtzLkFMSUdOTUVOVC5IT1JJWk9OVEFMLHMuQUxJR05NRU5ULlZFUlRJQ0FMXSksc3ByZWFkOnUuZGVmYXVsdC5vbmVPZihbcy5TUFJFQUQuTkFSUk9XLHMuU1BSRUFELk1FRElVTSxzLlNQUkVBRC5XSURFXSksaW5pdGlhbF9pbmRleDp1LmRlZmF1bHQubnVtYmVyLGRpc2FibGVfa2V5ZG93bjp1LmRlZmF1bHQuYm9vbCxkaXNhYmxlX2JveF9zaGFkb3c6dS5kZWZhdWx0LmJvb2wsZGlzYWJsZV9mYWRlX2luOnUuZGVmYXVsdC5ib29sLGF1dG9wbGF5OnUuZGVmYXVsdC5ib29sLGF1dG9wbGF5X3NwZWVkOnUuZGVmYXVsdC5udW1iZXIsYWZ0ZXJDaGFuZ2U6dS5kZWZhdWx0LmZ1bmN9LGYuZGVmYXVsdFByb3BzPXthbGlnbm1lbnQ6cy5BTElHTk1FTlQuSE9SSVpPTlRBTCxzcHJlYWQ6cy5TUFJFQUQuTUVESVVNLGluaXRpYWxfaW5kZXg6MCxkaXNhYmxlX2tleWRvd246ITEsZGlzYWJsZV9ib3hfc2hhZG93OiExLGRpc2FibGVfZmFkZV9pbjohMSxhdXRvcGxheTohMSxhdXRvcGxheV9zcGVlZDo1ZTMsYWZ0ZXJDaGFuZ2U6ZnVuY3Rpb24oKXt9fSx0LmRlZmF1bHQ9Zn0sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9cmVxdWlyZShcInJlYWN0XCIpfSxmdW5jdGlvbihlLHQsbil7ZS5leHBvcnRzPW4oNCkoKX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oNSk7ZnVuY3Rpb24gbygpe31mdW5jdGlvbiBhKCl7fWEucmVzZXRXYXJuaW5nQ2FjaGU9byxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCxuLG8sYSxpKXtpZihpIT09cil7dmFyIHU9bmV3IEVycm9yKFwiQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlc1wiKTt0aHJvdyB1Lm5hbWU9XCJJbnZhcmlhbnQgVmlvbGF0aW9uXCIsdX19ZnVuY3Rpb24gdCgpe3JldHVybiBlfWUuaXNSZXF1aXJlZD1lO3ZhciBuPXthcnJheTplLGJvb2w6ZSxmdW5jOmUsbnVtYmVyOmUsb2JqZWN0OmUsc3RyaW5nOmUsc3ltYm9sOmUsYW55OmUsYXJyYXlPZjp0LGVsZW1lbnQ6ZSxlbGVtZW50VHlwZTplLGluc3RhbmNlT2Y6dCxub2RlOmUsb2JqZWN0T2Y6dCxvbmVPZjp0LG9uZU9mVHlwZTp0LHNoYXBlOnQsZXhhY3Q6dCxjaGVja1Byb3BUeXBlczphLHJlc2V0V2FybmluZ0NhY2hlOm99O3JldHVybiBuLlByb3BUeXBlcz1uLG59fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPVwiU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRURcIn0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuU1RZTEVTPXZvaWQgMCx0LmdldE9wYWNpdHk9ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1yLlBPU0lUSU9OLkhJRERFTj8wOjF9LHQuZ2V0WkluZGV4PWZ1bmN0aW9uKGUpe3JldHVybiBlPT09ci5QT1NJVElPTi5ISURERU4/MDplPT09ci5QT1NJVElPTi5DVVJSRU5UPzI6MX0sdC5nZXRUcmFuc2Zvcm09ZnVuY3Rpb24oZSx0LG4pe3ZhciBvPWZ1bmN0aW9uKGUpe3ZhciB0PXZvaWQgMCxuPXZvaWQgMDtlPT09ci5TUFJFQUQuTUVESVVNPyh0PVwiLTg1JVwiLG49XCItMTUlXCIpOmU9PT1yLlNQUkVBRC5OQVJST1c/KHQ9XCItNzUlXCIsbj1cIi0yNSVcIik6ZT09PXIuU1BSRUFELldJREUmJih0PVwiLTk1JVwiLG49XCItNSVcIik7cmV0dXJue3ByZXY6dCxuZXh0Om59fShuKSxhPW8ucHJldixpPW8ubmV4dDtpZih0PT09ci5BTElHTk1FTlQuSE9SSVpPTlRBTCl7aWYoZT09PXIuUE9TSVRJT04uUFJFVilyZXR1cm5cInRyYW5zbGF0ZShcIithK1wiLCAtNTAlKSBzY2FsZSgwLjgyKVwiO2lmKGU9PT1yLlBPU0lUSU9OLk5FWFQpcmV0dXJuXCJ0cmFuc2xhdGUoXCIraStcIiwgLTUwJSkgc2NhbGUoMC44MilcIn1pZih0PT09ci5BTElHTk1FTlQuVkVSVElDQUwpe2lmKGU9PT1yLlBPU0lUSU9OLlBSRVYpcmV0dXJuXCJ0cmFuc2xhdGUoLTUwJSwgXCIrYStcIikgc2NhbGUoMC44MilcIjtpZihlPT09ci5QT1NJVElPTi5ORVhUKXJldHVyblwidHJhbnNsYXRlKC01MCUsIFwiK2krXCIpIHNjYWxlKDAuODIpXCJ9cmV0dXJuIGU9PT1yLlBPU0lUSU9OLkhJRERFTj9cInRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjUpXCI6XCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIn0sdC5nZXRCb3hTaGFkb3c9ZnVuY3Rpb24oZSx0LG4pe2lmKCFuJiZlPT09ci5QT1NJVElPTi5DVVJSRU5UKXtpZih0PT09ci5BTElHTk1FTlQuSE9SSVpPTlRBTClyZXR1cm5cIjMwcHggMHB4IDIwcHggLTIwcHggcmdiYSgwLCAwLCAwLCAuNCksIC0zMHB4IDBweCAyMHB4IC0yMHB4IHJnYmEoMCwgMCwgMCwgLjQpXCI7aWYodD09PXIuQUxJR05NRU5ULlZFUlRJQ0FMKXJldHVyblwiMHB4IDMwcHggMjBweCAtMjBweCByZ2JhKDAsIDAsIDAsIC40KSwgMHB4IC0zMHB4IDIwcHggLTIwcHggcmdiYSgwLCAwLCAwLCAuNClcIn1yZXR1cm5cInVuc2V0XCJ9LHQuZ2V0Q3Vyc29yPWZ1bmN0aW9uKGUsdCl7aWYoZT09PXIuUE9TSVRJT04uTkVYVCl7aWYodD09PXIuQUxJR05NRU5ULkhPUklaT05UQUwpcmV0dXJuXCJlLXJlc2l6ZVwiO2lmKHQ9PT1yLkFMSUdOTUVOVC5WRVJUSUNBTClyZXR1cm5cInMtcmVzaXplXCJ9aWYoZT09PXIuUE9TSVRJT04uUFJFVil7aWYodD09PXIuQUxJR05NRU5ULkhPUklaT05UQUwpcmV0dXJuXCJ3LXJlc2l6ZVwiO2lmKHQ9PT1yLkFMSUdOTUVOVC5WRVJUSUNBTClyZXR1cm5cIm4tcmVzaXplXCJ9cmV0dXJuXCJ1bnNldFwifTt2YXIgcj1uKDApO3QuU1RZTEVTPXtDT05UQUlORVI6e3Bvc2l0aXZlOlwicmVsYXRpdmVcIix3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCIxMDAlXCIsbWFyZ2luOjAscGFkZGluZzowfSxDQVJEOntwb3NpdGlvbjpcImFic29sdXRlXCIsbGVmdDpcIjUwJVwiLHRvcDpcIjUwJVwiLHRyYW5zaXRpb246XCJhbGwgMC42c1wifX19XSk7Il0sInNvdXJjZVJvb3QiOiIifQ==