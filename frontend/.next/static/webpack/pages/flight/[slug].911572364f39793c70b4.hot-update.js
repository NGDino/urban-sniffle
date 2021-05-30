self["webpackHotUpdate_N_E"]("pages/flight/[slug]",{

/***/ "./components/TastingTools/index.js":
/*!******************************************!*\
  !*** ./components/TastingTools/index.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\TastingTools\\index.js",
    _this = undefined;

var TastingTools = function TastingTools() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Hello \uD83D\uDDFA"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, _this);
};

_c = TastingTools;
/* harmony default export */ __webpack_exports__["default"] = (TastingTools);

var _c;

$RefreshReg$(_c, "TastingTools");

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

/***/ "./pages/flight/[slug].js":
/*!********************************!*\
  !*** ./pages/flight/[slug].js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! groq */ "./node_modules/groq/lib/groq.js");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../client */ "./client.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-swipeable-views */ "./node_modules/react-swipeable-views/lib/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @sanity/image-url */ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_FlightList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/FlightList */ "./components/FlightList/index.js");
/* harmony import */ var _components_TastingTools__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/TastingTools */ "./components/TastingTools/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);







var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\pages\\flight\\[slug].js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n    *[_type == \"flight\" && slug.current == $slug][0]{\n        _id,\n        name,\n        about,\n        image,\n        \"wines\":wine[]->{\n        ...\n        }\n        \n    \n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







 //for easy images

 //components




function urlFor(source) {
  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_13___default()(_client__WEBPACK_IMPORTED_MODULE_7__.default).image(source);
}

function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      other = (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__.default)(props, ["children", "value", "index"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", _objectSpread(_objectSpread({
    role: "tabpanel",
    hidden: value !== index,
    id: "full-width-tabpanel-".concat(index),
    "aria-labelledby": "full-width-tab-".concat(index)
  }, other), {}, {
    children: value === index && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.Box, {
      p: 3,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.Typography, {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

_c = TabPanel;
TabPanel.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().node),
  index: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().any.isRequired),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().any.isRequired)
};

function a11yProps(index) {
  return {
    id: "full-width-tab-".concat(index),
    'aria-controls': "full-width-tabpanel-".concat(index)
  };
}

var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__.makeStyles)(function (theme) {
  return {
    root: {
      backgroundColor: theme.palette.background.paper,
      width: '100%'
    }
  };
});

var Post = function Post(props) {
  _s();

  // const router = useRouter()
  console.log(props);
  var _props$name = props.name,
      name = _props$name === void 0 ? 'Missing name' : _props$name,
      _props$about = props.about,
      about = _props$about === void 0 ? 'Missing about' : _props$about,
      image = props.image,
      _id = props._id,
      wines = props.wines;
  var classes = useStyles();
  var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__.useTheme)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(0),
      value = _useState[0],
      setValue = _useState[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  var handleChangeIndex = function handleChangeIndex(index) {
    setValue(index);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.AppBar, {
      position: "static",
      color: "default",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.Tabs, {
        value: value,
        onChange: handleChange,
        indicatorColor: "primary",
        textColor: "primary",
        variant: "fullWidth",
        "aria-label": "full width tabs example",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.Tab, _objectSpread({
          label: "Wines"
        }, a11yProps(0)), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.Tab, _objectSpread({
          label: "Tasting Tools"
        }, a11yProps(1)), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_swipeable_views__WEBPACK_IMPORTED_MODULE_10__.default, {
      axis: theme.direction === 'rtl' ? 'x-reverse' : 'x',
      index: value,
      onChangeIndex: handleChangeIndex,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(TabPanel, {
        value: value,
        index: 0,
        dir: theme.direction,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_FlightList__WEBPACK_IMPORTED_MODULE_11__.default, {
          props: wines
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(TabPanel, {
        value: value,
        index: 1,
        dir: theme.direction,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_TastingTools__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 9
  }, _this);
};

_s(Post, "XiKagzVFXgRowwwDg+e/VhBURoA=", false, function () {
  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__.useTheme];
});

_c2 = Post;
var query = groq__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());

Post.getInitialProps = /*#__PURE__*/function () {
  var _ref = (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(context) {
    var _context$query$slug, slug;

    return D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // It's important to default the slug so that it doesn't return "undefined"
            console.log('func works');
            _context$query$slug = context.query.slug, slug = _context$query$slug === void 0 ? "" : _context$query$slug;
            _context.next = 4;
            return _client__WEBPACK_IMPORTED_MODULE_7__.default.fetch(query, {
              slug: slug
            });

          case 4:
            return _context.abrupt("return", _context.sent);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c, _c2;

$RefreshReg$(_c, "TabPanel");
$RefreshReg$(_c2, "Post");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYXN0aW5nVG9vbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ZsaWdodC9bc2x1Z10uanMiXSwibmFtZXMiOlsiVGFzdGluZ1Rvb2xzIiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwiaW1hZ2UiLCJUYWJQYW5lbCIsInByb3BzIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsImluZGV4Iiwib3RoZXIiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJpc1JlcXVpcmVkIiwiYTExeVByb3BzIiwiaWQiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsIndpZHRoIiwiUG9zdCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiYWJvdXQiLCJfaWQiLCJ3aW5lcyIsImNsYXNzZXMiLCJ1c2VUaGVtZSIsInVzZVN0YXRlIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwiaGFuZGxlQ2hhbmdlSW5kZXgiLCJkaXJlY3Rpb24iLCJxdWVyeSIsImdyb3EiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0Iiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxHQUFFLFNBQWRBLFlBQWMsR0FBTTtBQUd0QixzQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBS0gsQ0FSRDs7S0FBTUEsWTtBQVVOLCtEQUFlQSxZQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBRUE7QUFD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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE2QkgsQ0FyREQ7O0dBQU1mLEk7VUFZY1QsUyxFQUNGaUIsK0Q7OztNQWJaUixJO0FBdUROLElBQU1nQixLQUFLLEdBQUdDLDJDQUFILG1CQUFYOztBQWFBakIsSUFBSSxDQUFDa0IsZUFBTDtBQUFBLCtRQUF1QixpQkFBZUMsT0FBZjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CO0FBQ0FsQixtQkFBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUZtQixrQ0FHR2lCLE9BQU8sQ0FBQ0gsS0FIWCxDQUdYSSxJQUhXLEVBR1hBLElBSFcsb0NBR0osRUFISTtBQUFBO0FBQUEsbUJBSU4xQyxrREFBQSxDQUFhc0MsS0FBYixFQUFvQjtBQUFDSSxrQkFBSSxFQUFKQTtBQUFELGFBQXBCLENBSk07O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPQSwrREFBZXBCLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmxpZ2h0L1tzbHVnXS45MTE1NzIzNjRmMzk3OTNjNzBiNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCBUYXN0aW5nVG9vbHM9ICgpID0+IHtcclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIEhlbGxvIPCfl7ogXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc3RpbmdUb29scztcclxuIiwiaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSdcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50JztcblxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFN3aXBlYWJsZVZpZXdzIGZyb20gJ3JlYWN0LXN3aXBlYWJsZS12aWV3cyc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCB7QXBwQmFyLCBUYWJzLCBUYWIsIFR5cG9ncmFwaHksIEJveH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG4vL2ZvciBlYXN5IGltYWdlc1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCc7XG5cbi8vY29tcG9uZW50c1xuaW1wb3J0IEZsaWdodExpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GbGlnaHRMaXN0JztcbmltcG9ydCBUYXN0aW5nVG9vbHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UYXN0aW5nVG9vbHMnXG5cbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XG4gICAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcbn1cblxuZnVuY3Rpb24gVGFiUGFuZWwocHJvcHMpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCB2YWx1ZSwgaW5kZXgsIC4uLm90aGVyIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgICBoaWRkZW49e3ZhbHVlICE9PSBpbmRleH1cbiAgICAgICAgaWQ9e2BmdWxsLXdpZHRoLXRhYnBhbmVsLSR7aW5kZXh9YH1cbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtgZnVsbC13aWR0aC10YWItJHtpbmRleH1gfVxuICAgICAgICB7Li4ub3RoZXJ9XG4gICAgPlxuICAgICAgICB7dmFsdWUgPT09IGluZGV4ICYmIChcbiAgICAgICAgICAgIDxCb3ggcD17M30+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e2NoaWxkcmVufTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgIDwvZGl2PlxuICAgICk7XG59XG5cblRhYlBhbmVsLnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgaW5kZXg6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxufTtcblxuZnVuY3Rpb24gYTExeVByb3BzKGluZGV4KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGBmdWxsLXdpZHRoLXRhYi0ke2luZGV4fWAsXG4gICAgICAgICdhcmlhLWNvbnRyb2xzJzogYGZ1bGwtd2lkdGgtdGFicGFuZWwtJHtpbmRleH1gLFxuICAgIH07XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbn0pKTtcblxuXG5jb25zdCBQb3N0ID0gKHByb3BzKSA9PiB7XG4gICAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbmNvbnNvbGUubG9nKHByb3BzKVxuICAgIFxuICAgIGNvbnN0IHtcbiAgICAgICAgbmFtZSA9ICdNaXNzaW5nIG5hbWUnLCBcbiAgICAgICAgYWJvdXQgPSAnTWlzc2luZyBhYm91dCcsXG4gICAgICAgIGltYWdlLFxuICAgICAgICBfaWQsXG4gICAgICAgIHdpbmVzLFxuICAgIH0gPSBwcm9wc1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xuICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUluZGV4ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIHNldFZhbHVlKGluZGV4KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY29sb3I9XCJkZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3JDb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZ1bGxXaWR0aFwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJmdWxsIHdpZHRoIHRhYnMgZXhhbXBsZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwiV2luZXNcIiB7Li4uYTExeVByb3BzKDApfSAvPlxuICAgICAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwiVGFzdGluZyBUb29sc1wiIHsuLi5hMTF5UHJvcHMoMSl9IC8+XG4gICAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgPC9BcHBCYXI+XG4gICAgICAgICAgICA8U3dpcGVhYmxlVmlld3NcbiAgICAgICAgICAgIGF4aXM9e3RoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAneC1yZXZlcnNlJyA6ICd4J31cbiAgICAgICAgICAgIGluZGV4PXt2YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlSW5kZXg9e2hhbmRsZUNoYW5nZUluZGV4fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXswfSBkaXI9e3RoZW1lLmRpcmVjdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxGbGlnaHRMaXN0IHByb3BzID0ge3dpbmVzfS8+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17MX0gZGlyPXt0aGVtZS5kaXJlY3Rpb259PlxuICAgICAgICAgICAgICAgICAgICA8VGFzdGluZ1Rvb2xzLz5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgPC9Td2lwZWFibGVWaWV3cz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBxdWVyeSA9IGdyb3FgXG4gICAgKltfdHlwZSA9PSBcImZsaWdodFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XG4gICAgICAgIF9pZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgYWJvdXQsXG4gICAgICAgIGltYWdlLFxuICAgICAgICBcIndpbmVzXCI6d2luZVtdLT57XG4gICAgICAgIC4uLlxuICAgICAgICB9XG4gICAgICAgIFxuICAgIFxuICAgIH1cbmBcblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oY29udGV4dCkge1xuICAgIC8vIEl0J3MgaW1wb3J0YW50IHRvIGRlZmF1bHQgdGhlIHNsdWcgc28gdGhhdCBpdCBkb2Vzbid0IHJldHVybiBcInVuZGVmaW5lZFwiXG4gICAgY29uc29sZS5sb2coJ2Z1bmMgd29ya3MnKVxuICAgIGNvbnN0IHsgc2x1ZyA9IFwiXCIgfSA9IGNvbnRleHQucXVlcnlcbiAgICByZXR1cm4gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5LCB7c2x1Z30pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9