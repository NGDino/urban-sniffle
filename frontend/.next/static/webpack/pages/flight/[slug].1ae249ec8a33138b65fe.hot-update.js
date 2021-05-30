self["webpackHotUpdate_N_E"]("pages/flight/[slug]",{

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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @sanity/image-url */ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_FlightList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/FlightList */ "./components/FlightList/index.js");
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
  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_12___default()(_client__WEBPACK_IMPORTED_MODULE_7__.default).image(source);
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
    children: value === index && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.Box, {
      p: 3,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.Typography, {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
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

var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__.makeStyles)(function (theme) {
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
  var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__.useTheme)();

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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.AppBar, {
      position: "static",
      color: "default",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.Tabs, {
        value: value,
        onChange: handleChange,
        indicatorColor: "primary",
        textColor: "primary",
        variant: "fullWidth",
        "aria-label": "full width tabs example",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.Tab, _objectSpread({
          label: "Wines"
        }, a11yProps(0)), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.Tab, _objectSpread({
          label: "Tasting Tools"
        }, a11yProps(1)), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
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
          lineNumber: 107,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(TabPanel, {
        value: value,
        index: 1,
        dir: theme.direction,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(TastingTools, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 9
  }, _this);
};

_s(Post, "XiKagzVFXgRowwwDg+e/VhBURoA=", false, function () {
  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__.useTheme];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmxpZ2h0L1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJpbWFnZSIsIlRhYlBhbmVsIiwicHJvcHMiLCJjaGlsZHJlbiIsInZhbHVlIiwiaW5kZXgiLCJvdGhlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImlzUmVxdWlyZWQiLCJhMTF5UHJvcHMiLCJpZCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwid2lkdGgiLCJQb3N0IiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJhYm91dCIsIl9pZCIsIndpbmVzIiwiY2xhc3NlcyIsInVzZVRoZW1lIiwidXNlU3RhdGUiLCJzZXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJoYW5kbGVDaGFuZ2VJbmRleCIsImRpcmVjdGlvbiIsInF1ZXJ5IiwiZ3JvcSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Q0FJQTs7Q0FHQTs7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUNyQixTQUFPQyx5REFBZSxDQUFDQyw0Q0FBRCxDQUFmLENBQXdCQyxLQUF4QixDQUE4QkgsTUFBOUIsQ0FBUDtBQUNIOztBQUVELFNBQVNJLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUEsTUFDYkMsUUFEYSxHQUN3QkQsS0FEeEIsQ0FDYkMsUUFEYTtBQUFBLE1BQ0hDLEtBREcsR0FDd0JGLEtBRHhCLENBQ0hFLEtBREc7QUFBQSxNQUNJQyxLQURK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Q25CO0FBQ0FsQixtQkFBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUZtQixrQ0FHR2lCLE9BQU8sQ0FBQ0gsS0FIWCxDQUdYSSxJQUhXLEVBR1hBLElBSFcsb0NBR0osRUFISTtBQUFBO0FBQUEsbUJBSU4xQyxrREFBQSxDQUFhc0MsS0FBYixFQUFvQjtBQUFDSSxrQkFBSSxFQUFKQTtBQUFELGFBQXBCLENBSk07O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPQSwrREFBZXBCLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmxpZ2h0L1tzbHVnXS4xYWUyNDllYzhhMzMxMzhiNjVmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSdcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50JztcblxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFN3aXBlYWJsZVZpZXdzIGZyb20gJ3JlYWN0LXN3aXBlYWJsZS12aWV3cyc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCB7QXBwQmFyLCBUYWJzLCBUYWIsIFR5cG9ncmFwaHksIEJveH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG4vL2ZvciBlYXN5IGltYWdlc1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCc7XG5cbi8vY29tcG9uZW50c1xuaW1wb3J0IEZsaWdodExpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GbGlnaHRMaXN0JztcblxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UpIHtcbiAgICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKVxufVxuXG5mdW5jdGlvbiBUYWJQYW5lbChwcm9wcykge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHZhbHVlLCBpbmRleCwgLi4ub3RoZXIgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICAgIGhpZGRlbj17dmFsdWUgIT09IGluZGV4fVxuICAgICAgICBpZD17YGZ1bGwtd2lkdGgtdGFicGFuZWwtJHtpbmRleH1gfVxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9e2BmdWxsLXdpZHRoLXRhYi0ke2luZGV4fWB9XG4gICAgICAgIHsuLi5vdGhlcn1cbiAgICA+XG4gICAgICAgIHt2YWx1ZSA9PT0gaW5kZXggJiYgKFxuICAgICAgICAgICAgPEJveCBwPXszfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT57Y2hpbGRyZW59PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgPC9kaXY+XG4gICAgKTtcbn1cblxuVGFiUGFuZWwucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBpbmRleDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG59O1xuXG5mdW5jdGlvbiBhMTF5UHJvcHMoaW5kZXgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpZDogYGZ1bGwtd2lkdGgtdGFiLSR7aW5kZXh9YCxcbiAgICAgICAgJ2FyaWEtY29udHJvbHMnOiBgZnVsbC13aWR0aC10YWJwYW5lbC0ke2luZGV4fWAsXG4gICAgfTtcbn1cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9LFxufSkpO1xuXG5cbmNvbnN0IFBvc3QgPSAocHJvcHMpID0+IHtcbiAgICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuY29uc29sZS5sb2cocHJvcHMpXG4gICAgXG4gICAgY29uc3Qge1xuICAgICAgICBuYW1lID0gJ01pc3NpbmcgbmFtZScsIFxuICAgICAgICBhYm91dCA9ICdNaXNzaW5nIGFib3V0JyxcbiAgICAgICAgaW1hZ2UsXG4gICAgICAgIF9pZCxcbiAgICAgICAgd2luZXMsXG4gICAgfSA9IHByb3BzXG5cbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMCk7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlSW5kZXggPSAoaW5kZXgpID0+IHtcbiAgICAgICAgc2V0VmFsdWUoaW5kZXgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjb2xvcj1cImRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGluZGljYXRvckNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZnVsbFdpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImZ1bGwgd2lkdGggdGFicyBleGFtcGxlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJXaW5lc1wiIHsuLi5hMTF5UHJvcHMoMCl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJUYXN0aW5nIFRvb2xzXCIgey4uLmExMXlQcm9wcygxKX0gLz5cbiAgICAgICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICAgICA8L0FwcEJhcj5cbiAgICAgICAgICAgIDxTd2lwZWFibGVWaWV3c1xuICAgICAgICAgICAgYXhpcz17dGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/ICd4LXJldmVyc2UnIDogJ3gnfVxuICAgICAgICAgICAgaW5kZXg9e3ZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2VJbmRleD17aGFuZGxlQ2hhbmdlSW5kZXh9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezB9IGRpcj17dGhlbWUuZGlyZWN0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgPEZsaWdodExpc3QgcHJvcHMgPSB7d2luZXN9Lz5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXsxfSBkaXI9e3RoZW1lLmRpcmVjdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxUYXN0aW5nVG9vbHMvPlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICA8L1N3aXBlYWJsZVZpZXdzPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JvcWBcbiAgICAqW190eXBlID09IFwiZmxpZ2h0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXtcbiAgICAgICAgX2lkLFxuICAgICAgICBuYW1lLFxuICAgICAgICBhYm91dCxcbiAgICAgICAgaW1hZ2UsXG4gICAgICAgIFwid2luZXNcIjp3aW5lW10tPntcbiAgICAgICAgLi4uXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgXG4gICAgfVxuYFxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcbiAgICBjb25zb2xlLmxvZygnZnVuYyB3b3JrcycpXG4gICAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5xdWVyeVxuICAgIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnksIHtzbHVnfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJzb3VyY2VSb290IjoiIn0=