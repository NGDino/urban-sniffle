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
          lineNumber: 96,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.Tab, _objectSpread({
          label: "Tasting Tools"
        }, a11yProps(1)), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
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
          lineNumber: 106,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(TabPanel, {
        value: value,
        index: 1,
        dir: theme.direction,
        children: "Item Two"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmxpZ2h0L1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJpbWFnZSIsIlRhYlBhbmVsIiwicHJvcHMiLCJjaGlsZHJlbiIsInZhbHVlIiwiaW5kZXgiLCJvdGhlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImlzUmVxdWlyZWQiLCJhMTF5UHJvcHMiLCJpZCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwid2lkdGgiLCJQb3N0IiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJhYm91dCIsIl9pZCIsIndpbmVzIiwiY2xhc3NlcyIsInVzZVRoZW1lIiwidXNlU3RhdGUiLCJzZXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJoYW5kbGVDaGFuZ2VJbmRleCIsImRpcmVjdGlvbiIsInF1ZXJ5IiwiZ3JvcSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Q0FJQTs7QUFDQTtBQUVBOztBQUVBLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3JCLFNBQU9DLHlEQUFlLENBQUNDLDRDQUFELENBQWYsQ0FBd0JDLEtBQXhCLENBQThCSCxNQUE5QixDQUFQO0FBQ0g7O0FBRUQsU0FBU0ksUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQSxNQUNiQyxRQURhLEdBQ3dCRCxLQUR4QixDQUNiQyxRQURhO0FBQUEsTUFDSEMsS0FERyxHQUN3QkYsS0FEeEIsQ0FDSEUsS0FERztBQUFBLE1BQ0lDLEtBREos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QUFGbUIsa0NBR0dpQixPQUFPLENBQUNILEtBSFgsQ0FHWEksSUFIVyxFQUdYQSxJQUhXLG9DQUdKLEVBSEk7QUFBQTtBQUFBLG1CQUlOMUMsa0RBQUEsQ0FBYXNDLEtBQWIsRUFBb0I7QUFBQ0ksa0JBQUksRUFBSkE7QUFBRCxhQUFwQixDQUpNOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBdkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT0EsK0RBQWVwQixJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZsaWdodC9bc2x1Z10uMDhiYzhmMGI3ZjM3OTJjMzBiYmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncm9xIGZyb20gJ2dyb3EnXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCc7XG5cbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBTd2lwZWFibGVWaWV3cyBmcm9tICdyZWFjdC1zd2lwZWFibGUtdmlld3MnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbXBvcnQge0FwcEJhciwgVGFicywgVGFiLCBUeXBvZ3JhcGh5LCBCb3h9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuLy9mb3IgZWFzeSBpbWFnZXNcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xuXG5pbXBvcnQgRmxpZ2h0TGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZsaWdodExpc3QnO1xuXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xuICAgIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpXG59XG5cbmZ1bmN0aW9uIFRhYlBhbmVsKHByb3BzKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgdmFsdWUsIGluZGV4LCAuLi5vdGhlciB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgICAgaGlkZGVuPXt2YWx1ZSAhPT0gaW5kZXh9XG4gICAgICAgIGlkPXtgZnVsbC13aWR0aC10YWJwYW5lbC0ke2luZGV4fWB9XG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT17YGZ1bGwtd2lkdGgtdGFiLSR7aW5kZXh9YH1cbiAgICAgICAgey4uLm90aGVyfVxuICAgID5cbiAgICAgICAge3ZhbHVlID09PSBpbmRleCAmJiAoXG4gICAgICAgICAgICA8Qm94IHA9ezN9PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5UYWJQYW5lbC5wcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGluZGV4OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbn07XG5cbmZ1bmN0aW9uIGExMXlQcm9wcyhpbmRleCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBgZnVsbC13aWR0aC10YWItJHtpbmRleH1gLFxuICAgICAgICAnYXJpYS1jb250cm9scyc6IGBmdWxsLXdpZHRoLXRhYnBhbmVsLSR7aW5kZXh9YCxcbiAgICB9O1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0sXG59KSk7XG5cblxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4ge1xuICAgIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5jb25zb2xlLmxvZyhwcm9wcylcbiAgICBcbiAgICBjb25zdCB7XG4gICAgICAgIG5hbWUgPSAnTWlzc2luZyBuYW1lJywgXG4gICAgICAgIGFib3V0ID0gJ01pc3NpbmcgYWJvdXQnLFxuICAgICAgICBpbWFnZSxcbiAgICAgICAgX2lkLFxuICAgICAgICB3aW5lcyxcbiAgICB9ID0gcHJvcHNcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcbiAgICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VJbmRleCA9IChpbmRleCkgPT4ge1xuICAgICAgICBzZXRWYWx1ZShpbmRleCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNvbG9yPVwiZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yQ29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmdWxsV2lkdGhcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiZnVsbCB3aWR0aCB0YWJzIGV4YW1wbGVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIldpbmVzXCIgey4uLmExMXlQcm9wcygwKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIlRhc3RpbmcgVG9vbHNcIiB7Li4uYTExeVByb3BzKDEpfSAvPlxuICAgICAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgIDwvQXBwQmFyPlxuICAgICAgICAgICAgPFN3aXBlYWJsZVZpZXdzXG4gICAgICAgICAgICBheGlzPXt0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gJ3gtcmV2ZXJzZScgOiAneCd9XG4gICAgICAgICAgICBpbmRleD17dmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZUluZGV4PXtoYW5kbGVDaGFuZ2VJbmRleH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17MH0gZGlyPXt0aGVtZS5kaXJlY3Rpb259PlxuICAgICAgICAgICAgICAgICAgICA8RmxpZ2h0TGlzdCBwcm9wcyA9IHt3aW5lc30vPlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezF9IGRpcj17dGhlbWUuZGlyZWN0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgSXRlbSBUd29cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgPC9Td2lwZWFibGVWaWV3cz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBxdWVyeSA9IGdyb3FgXG4gICAgKltfdHlwZSA9PSBcImZsaWdodFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XG4gICAgICAgIF9pZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgYWJvdXQsXG4gICAgICAgIGltYWdlLFxuICAgICAgICBcIndpbmVzXCI6d2luZVtdLT57XG4gICAgICAgIC4uLlxuICAgICAgICB9XG4gICAgICAgIFxuICAgIFxuICAgIH1cbmBcblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oY29udGV4dCkge1xuICAgIC8vIEl0J3MgaW1wb3J0YW50IHRvIGRlZmF1bHQgdGhlIHNsdWcgc28gdGhhdCBpdCBkb2Vzbid0IHJldHVybiBcInVuZGVmaW5lZFwiXG4gICAgY29uc29sZS5sb2coJ2Z1bmMgd29ya3MnKVxuICAgIGNvbnN0IHsgc2x1ZyA9IFwiXCIgfSA9IGNvbnRleHQucXVlcnlcbiAgICByZXR1cm4gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5LCB7c2x1Z30pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9