self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ "./node_modules/@sanity/client/lib/sanityClient.js");
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
// client.js

/* harmony default export */ __webpack_exports__["default"] = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
  projectId: 'ids1pvkk',
  // you can find this in sanity.json
  dataset: 'production',
  // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data

}));

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

/***/ "./components/HomeBanner/index.js":
/*!****************************************!*\
  !*** ./components/HomeBanner/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! groq */ "./node_modules/groq/lib/groq.js");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/image-url */ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client */ "./client.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\Coding work\\wine-app\\frontend\\components\\HomeBanner\\index.js",
    _this = undefined;

 // import client from '../../client';
//api for queries
//for easy images

 //materialUi components





function urlFor(source) {
  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default()(_client__WEBPACK_IMPORTED_MODULE_4__.default).image(source);
} //styles
// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//     },
//     background: {
//         backgroundAttachment: fixed,
//         backgroundImage: {}
//     }
// }));


var HomeBanner = function HomeBanner(_ref) {
  var cudaRidge = _ref.cudaRidge;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
    component: "div" // className=''
    // backgroundImage ={}

  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, _this);
};

_c = HomeBanner;
function getStaticProps() {
  return _getStaticProps.apply(this, arguments);
}

function _getStaticProps() {
  _getStaticProps = (0,D_Coding_work_wine_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var winery;
    return D_Coding_work_wine_app_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _client__WEBPACK_IMPORTED_MODULE_4__.default.fetch;

          case 2:
            winery = _context.sent;
            return _context.abrupt("return", {
              props: {
                winery: winery,
                preview: preview
              }
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getStaticProps.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (HomeBanner);

var _c;

$RefreshReg$(_c, "HomeBanner");

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

/***/ "./node_modules/@rexxars/eventsource-polyfill/src/eventsource.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@rexxars/eventsource-polyfill/src/eventsource.js ***!
  \***********************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * EventSource polyfill
 * Originally published by sc AmvTek srl (https://github.com/amvtek/EventSource) - devel@amvtek.com
 * Forked by Espen Hovlandsdal to fix a few issues + publish latest version
 */

;(function (root, factory) {
  /* global define */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else { var evsImportName; }
})(typeof self === 'undefined' ? this : self, function () {
  var EventSource = function (url, options) {
    if (!url || typeof url != 'string') {
      throw new SyntaxError('Not enough arguments')
    }

    this.URL = url
    this.setOptions(options)
    var evs = this
    setTimeout(function () {
      evs.poll()
    }, 0)
  }

  EventSource.prototype = {
    CONNECTING: 0,

    OPEN: 1,

    CLOSED: 2,

    defaultOptions: {
      loggingEnabled: false,

      loggingPrefix: 'eventsource',

      interval: 500, // milliseconds

      bufferSizeLimit: 256 * 1024, // bytes

      silentTimeout: 300000, // milliseconds

      getArgs: {
        evs_buffer_size_limit: 256 * 1024,
      },

      xhrHeaders: {
        Accept: 'text/event-stream',
        'Cache-Control': 'no-cache',
        'X-Requested-With': 'XMLHttpRequest',
      },
    },

    setOptions: function (options) {
      var defaults = this.defaultOptions
      var option

      // set all default options...
      for (option in defaults) {
        if (defaults.hasOwnProperty(option)) {
          this[option] = defaults[option]
        }
      }

      // override with what is in options
      for (option in options) {
        if (option in defaults && options.hasOwnProperty(option)) {
          this[option] = options[option]
        }
      }

      // if getArgs option is enabled
      // ensure evs_buffer_size_limit corresponds to bufferSizeLimit
      if (this.getArgs && this.bufferSizeLimit) {
        this.getArgs.evs_buffer_size_limit = this.bufferSizeLimit
      }

      // if console is not available, force loggingEnabled to false
      // eslint-disable-next-line no-console
      if (typeof console === 'undefined' || typeof console.log === 'undefined') {
        this.loggingEnabled = false
      }
    },

    log: function (message) {
      if (this.loggingEnabled) {
        // eslint-disable-next-line no-console
        console.log('[' + this.loggingPrefix + ']:' + message)
      }
    },

    poll: function () {
      try {
        if (this.readyState == this.CLOSED) {
          return
        }

        this.cleanup()
        this.readyState = this.CONNECTING
        this.cursor = 0
        this.cache = ''
        this._xhr = new this.XHR(this)
        this.resetNoActivityTimer()
      } catch (err) {
        // in an attempt to silence the errors
        this.log('There were errors inside the pool try-catch')
        this.dispatchEvent('error', {type: 'error', data: err.message})
      }
    },

    pollAgain: function (interval) {
      // schedule poll to be called after interval milliseconds
      var evs = this
      evs.readyState = evs.CONNECTING
      evs.dispatchEvent('error', {
        type: 'error',
        data: 'Reconnecting ',
      })
      this._pollTimer = setTimeout(function () {
        evs.poll()
      }, interval || 0)
    },

    cleanup: function () {
      this.log('evs cleaning up')

      if (this._pollTimer) {
        clearInterval(this._pollTimer)
        this._pollTimer = null
      }

      if (this._noActivityTimer) {
        clearInterval(this._noActivityTimer)
        this._noActivityTimer = null
      }

      if (this._xhr) {
        this._xhr.abort()
        this._xhr = null
      }
    },

    resetNoActivityTimer: function () {
      if (this.silentTimeout) {
        if (this._noActivityTimer) {
          clearInterval(this._noActivityTimer)
        }
        var evs = this
        this._noActivityTimer = setTimeout(function () {
          evs.log('Timeout! silentTImeout:' + evs.silentTimeout)
          evs.pollAgain()
        }, this.silentTimeout)
      }
    },

    close: function () {
      this.readyState = this.CLOSED
      this.log('Closing connection. readyState: ' + this.readyState)
      this.cleanup()
    },

    _onxhrdata: function () {
      var request = this._xhr

      if (request.isReady() && !request.hasError()) {
        // reset the timer, as we have activity
        this.resetNoActivityTimer()

        // move this EventSource to OPEN state...
        if (this.readyState == this.CONNECTING) {
          this.readyState = this.OPEN
          this.dispatchEvent('open', {type: 'open'})
        }

        var buffer = request.getBuffer()

        if (buffer.length > this.bufferSizeLimit) {
          this.log('buffer.length > this.bufferSizeLimit')
          this.pollAgain()
        }

        if (this.cursor == 0 && buffer.length > 0) {
          // skip byte order mark \uFEFF character if it starts the stream
          if (buffer.substring(0, 1) == '\uFEFF') {
            this.cursor = 1
          }
        }

        var lastMessageIndex = this.lastMessageIndex(buffer)
        if (lastMessageIndex[0] >= this.cursor) {
          var newcursor = lastMessageIndex[1]
          var toparse = buffer.substring(this.cursor, newcursor)
          this.parseStream(toparse)
          this.cursor = newcursor
        }

        // if request is finished, reopen the connection
        if (request.isDone()) {
          this.log('request.isDone(). reopening the connection')
          this.pollAgain(this.interval)
        }
      } else if (this.readyState !== this.CLOSED) {
        this.log('this.readyState !== this.CLOSED')
        this.pollAgain(this.interval)

        //MV: Unsure why an error was previously dispatched
      }
    },

    parseStream: function (chunk) {
      // normalize line separators (\r\n,\r,\n) to \n
      // remove white spaces that may precede \n
      chunk = this.cache + this.normalizeToLF(chunk)

      var events = chunk.split('\n\n')

      var i, j, eventType, datas, line, retry

      for (i = 0; i < events.length - 1; i++) {
        eventType = 'message'
        datas = []
        var parts = events[i].split('\n')

        for (j = 0; j < parts.length; j++) {
          line = this.trimWhiteSpace(parts[j])

          if (line.indexOf('event') == 0) {
            eventType = line.replace(/event:?\s*/, '')
          } else if (line.indexOf('retry') == 0) {
            retry = parseInt(line.replace(/retry:?\s*/, ''), 10)
            if (!isNaN(retry)) {
              this.interval = retry
            }
          } else if (line.indexOf('data') == 0) {
            datas.push(line.replace(/data:?\s*/, ''))
          } else if (line.indexOf('id:') == 0) {
            this.lastEventId = line.replace(/id:?\s*/, '')
          } else if (line.indexOf('id') == 0) {
            // this resets the id

            this.lastEventId = null
          }
        }

        if (datas.length && this.readyState != this.CLOSED) {
          // dispatch a new event
          var event = new MessageEvent(
            eventType,
            datas.join('\n'),
            typeof window !== 'undefined' && typeof window.location !== 'undefined'
              ? window.location.origin
              : null,
            this.lastEventId
          )
          this.dispatchEvent(eventType, event)
        }
      }

      this.cache = events[events.length - 1]
    },

    dispatchEvent: function (type, event) {
      var handlers = this['_' + type + 'Handlers']

      if (handlers) {
        for (var i = 0; i < handlers.length; i++) {
          handlers[i].call(this, event)
        }
      }

      if (this['on' + type]) {
        this['on' + type].call(this, event)
      }
    },

    addEventListener: function (type, handler) {
      if (!this['_' + type + 'Handlers']) {
        this['_' + type + 'Handlers'] = []
      }

      this['_' + type + 'Handlers'].push(handler)
    },

    removeEventListener: function (type, handler) {
      var handlers = this['_' + type + 'Handlers']
      if (!handlers) {
        return
      }
      for (var i = handlers.length - 1; i >= 0; --i) {
        if (handlers[i] === handler) {
          handlers.splice(i, 1)
          break
        }
      }
    },

    _pollTimer: null,

    _noactivityTimer: null,

    _xhr: null,

    lastEventId: null,

    cache: '',

    cursor: 0,

    onerror: null,

    onmessage: null,

    onopen: null,

    readyState: 0,

    // ===================================================================
    // helpers functions
    // those are attached to prototype to ease reuse and testing...

    urlWithParams: function (baseURL, params) {
      var encodedArgs = []

      if (params) {
        var key, urlarg
        var urlize = encodeURIComponent

        for (key in params) {
          if (params.hasOwnProperty(key)) {
            urlarg = urlize(key) + '=' + urlize(params[key])
            encodedArgs.push(urlarg)
          }
        }
      }

      if (encodedArgs.length > 0) {
        if (baseURL.indexOf('?') == -1) return baseURL + '?' + encodedArgs.join('&')
        return baseURL + '&' + encodedArgs.join('&')
      }
      return baseURL
    },

    lastMessageIndex: function (text) {
      var ln2 = text.lastIndexOf('\n\n')
      var lr2 = text.lastIndexOf('\r\r')
      var lrln2 = text.lastIndexOf('\r\n\r\n')

      if (lrln2 > Math.max(ln2, lr2)) {
        return [lrln2, lrln2 + 4]
      }
      return [Math.max(ln2, lr2), Math.max(ln2, lr2) + 2]
    },

    trimWhiteSpace: function (str) {
      // to remove whitespaces left and right of string

      var reTrim = /^(\s|\u00A0)+|(\s|\u00A0)+$/g
      return str.replace(reTrim, '')
    },

    normalizeToLF: function (str) {
      // replace \r and \r\n with \n
      return str.replace(/\r\n|\r/g, '\n')
    },
  }

  if (isOldIE()) {
    EventSource.isPolyfill = 'IE_8-9'

    // patch EventSource defaultOptions
    var defaults = EventSource.prototype.defaultOptions
    defaults.xhrHeaders = null // no headers will be sent
    defaults.getArgs.evs_preamble = 2048 + 8

    // EventSource will send request using Internet Explorer XDomainRequest
    EventSource.prototype.XHR = function (evs) {
      /* global XDomainRequest */
      var request = new XDomainRequest()
      this._request = request

      // set handlers
      request.onprogress = function () {
        request._ready = true
        evs._onxhrdata()
      }

      request.onload = function () {
        this._loaded = true
        evs._onxhrdata()
      }

      request.onerror = function () {
        this._failed = true
        evs.readyState = evs.CLOSED
        evs.dispatchEvent('error', {
          type: 'error',
          data: 'XDomainRequest error',
        })
      }

      request.ontimeout = function () {
        this._failed = true
        evs.readyState = evs.CLOSED
        evs.dispatchEvent('error', {
          type: 'error',
          data: 'XDomainRequest timed out',
        })
      }

      // XDomainRequest does not allow setting custom headers
      // If EventSource has enabled the use of GET arguments
      // we add parameters to URL so that server can adapt the stream...
      var reqGetArgs = {}
      if (evs.getArgs) {
        // copy evs.getArgs in reqGetArgs
        var defaultArgs = evs.getArgs
        for (var key in defaultArgs) {
          if (defaultArgs.hasOwnProperty(key)) {
            reqGetArgs[key] = defaultArgs[key]
          }
        }
        if (evs.lastEventId) {
          reqGetArgs.evs_last_event_id = evs.lastEventId
        }
      }
      // send the request

      request.open('GET', evs.urlWithParams(evs.URL, reqGetArgs))
      request.send()
    }

    EventSource.prototype.XHR.prototype = {
      useXDomainRequest: true,

      _request: null,

      _ready: false, // true when progress events are dispatched

      _loaded: false, // true when request has been loaded

      _failed: false, // true if when request is in error

      isReady: function () {
        return this._request._ready
      },

      isDone: function () {
        return this._request._loaded
      },

      hasError: function () {
        return this._request._failed
      },

      getBuffer: function () {
        var rv = ''
        try {
          rv = this._request.responseText || ''
        } catch (err) {
          // intentional noop
        }
        return rv
      },

      abort: function () {
        if (this._request) {
          this._request.abort()
        }
      },
    }
  } else {
    EventSource.isPolyfill = 'XHR'

    // EventSource will send request using XMLHttpRequest
    EventSource.prototype.XHR = function (evs) {
      var request = new XMLHttpRequest()
      this._request = request
      evs._xhr = this

      // set handlers
      request.onreadystatechange = function () {
        if (request.readyState > 1 && evs.readyState != evs.CLOSED) {
          if (request.status == 200 || (request.status >= 300 && request.status < 400)) {
            evs._onxhrdata()
          } else {
            request._failed = true
            evs.readyState = evs.CLOSED
            evs.dispatchEvent('error', {
              type: 'error',
              data: 'The server responded with ' + request.status,
            })
            evs.close()
          }
        }
      }

      request.onprogress = function () {
        // intentional noop
      }

      request.open('GET', evs.urlWithParams(evs.URL, evs.getArgs), true)

      var headers = evs.xhrHeaders // maybe null
      for (var header in headers) {
        if (headers.hasOwnProperty(header)) {
          request.setRequestHeader(header, headers[header])
        }
      }
      if (evs.lastEventId) {
        request.setRequestHeader('Last-Event-Id', evs.lastEventId)
      }

      request.send()
    }

    EventSource.prototype.XHR.prototype = {
      useXDomainRequest: false,

      _request: null,

      _failed: false, // true if we have had errors...

      isReady: function () {
        return this._request.readyState >= 2
      },

      isDone: function () {
        return this._request.readyState == 4
      },

      hasError: function () {
        return this._failed || this._request.status >= 400
      },

      getBuffer: function () {
        var rv = ''
        try {
          rv = this._request.responseText || ''
        } catch (err) {
          // intentional noop
        }
        return rv
      },

      abort: function () {
        if (this._request) {
          this._request.abort()
        }
      },
    }
  }

  function MessageEvent(type, data, origin, lastEventId) {
    this.bubbles = false
    this.cancelBubble = false
    this.cancelable = false
    this.data = data || null
    this.origin = origin || ''
    this.lastEventId = lastEventId || ''
    this.type = type || 'message'
  }

  function isOldIE() {
    //return true if we are in IE8 or IE9
    return Boolean(
      typeof window !== 'undefined' &&
        window.XDomainRequest &&
        window.XMLHttpRequest &&
        new XMLHttpRequest().responseType === undefined
    )
  }

  return EventSource
})


/***/ }),

/***/ "./node_modules/@sanity/client/lib/assets/assetsClient.js":
/*!****************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/assets/assetsClient.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var _require = __webpack_require__(/*! @sanity/observable/operators/map */ "./node_modules/@sanity/observable/operators/map.js"),
    map = _require.map;

var _require2 = __webpack_require__(/*! @sanity/observable/operators/filter */ "./node_modules/@sanity/observable/operators/filter.js"),
    filter = _require2.filter;

var queryString = __webpack_require__(/*! ../http/queryString */ "./node_modules/@sanity/client/lib/http/queryString.js");

var validators = __webpack_require__(/*! ../validators */ "./node_modules/@sanity/client/lib/validators.js");

function AssetsClient(client) {
  this.client = client;
}

function toDocument(body) {
  // todo: rewrite to just return body.document in a while
  var document = body.document;
  Object.defineProperty(document, 'document', {
    enumerable: false,
    get: function get() {
      // eslint-disable-next-line no-console
      console.warn('The promise returned from client.asset.upload(...) now resolves with the asset document');
      return document;
    }
  });
  return document;
}

function optionsFromFile(opts, file) {
  if (typeof window === 'undefined' || !(file instanceof window.File)) {
    return opts;
  }

  return assign({
    filename: opts.preserveFilename === false ? undefined : file.name,
    contentType: file.type
  }, opts);
}

assign(AssetsClient.prototype, {
  /**
   * Upload an asset
   *
   * @param  {String} assetType `image` or `file`
   * @param  {File|Blob|Buffer|ReadableStream} body File to upload
   * @param  {Object}  opts Options for the upload
   * @param  {Boolean} opts.preserveFilename Whether or not to preserve the original filename (default: true)
   * @param  {String}  opts.filename Filename for this file (optional)
   * @param  {Number}  opts.timeout  Milliseconds to wait before timing the request out (default: 0)
   * @param  {String}  opts.contentType Mime type of the file
   * @param  {Array}   opts.extract Array of metadata parts to extract from image.
   *                                 Possible values: `location`, `exif`, `image`, `palette`
   * @param  {String}  opts.label Label
   * @param  {String}  opts.title Title
   * @param  {String}  opts.description Description
   * @param  {String}  opts.creditLine The credit to person(s) and/or organization(s) required by the supplier of the image to be used when published
   * @param  {Object}  opts.source Source data (when the asset is from an external service)
   * @param  {String}  opts.source.id The (u)id of the asset within the source, i.e. 'i-f323r1E'
   *                                  Required if source is defined
   * @param  {String}  opts.source.name The name of the source, i.e. 'unsplash'
   *                                  Required if source is defined
   * @param  {String}  opts.source.url A url to where to find the asset, or get more info about it in the source
   *                                  Optional
   * @return {Promise} Resolves with the created asset document
   */
  upload: function upload(assetType, body) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    validators.validateAssetType(assetType); // If an empty array is given, explicitly set `none` to override API defaults

    var meta = opts.extract || undefined;

    if (meta && !meta.length) {
      meta = ['none'];
    }

    var dataset = validators.hasDataset(this.client.clientConfig);
    var assetEndpoint = assetType === 'image' ? 'images' : 'files';
    var options = optionsFromFile(opts, body);
    var label = options.label,
        title = options.title,
        description = options.description,
        creditLine = options.creditLine,
        filename = options.filename,
        source = options.source;
    var query = {
      label: label,
      title: title,
      description: description,
      filename: filename,
      meta: meta,
      creditLine: creditLine
    };

    if (source) {
      query.sourceId = source.id;
      query.sourceName = source.name;
      query.sourceUrl = source.url;
    }

    var observable = this.client._requestObservable({
      method: 'POST',
      timeout: options.timeout || 0,
      uri: "/assets/".concat(assetEndpoint, "/").concat(dataset),
      headers: options.contentType ? {
        'Content-Type': options.contentType
      } : {},
      query: query,
      body: body
    });

    return this.client.isPromiseAPI() ? observable.pipe(filter(function (event) {
      return event.type === 'response';
    }), map(function (event) {
      return toDocument(event.body);
    })).toPromise() : observable;
  },
  delete: function _delete(type, id) {
    // eslint-disable-next-line no-console
    console.warn('client.assets.delete() is deprecated, please use client.delete(<document-id>)');
    var docId = id || '';

    if (!/^(image|file)-/.test(docId)) {
      docId = "".concat(type, "-").concat(docId);
    } else if (type._id) {
      // We could be passing an entire asset document instead of an ID
      docId = type._id;
    }

    validators.hasDataset(this.client.clientConfig);
    return this.client.delete(docId);
  },
  getImageUrl: function getImageUrl(ref, query) {
    var id = ref._ref || ref;

    if (typeof id !== 'string') {
      throw new Error('getImageUrl() needs either an object with a _ref, or a string with an asset document ID');
    }

    if (!/^image-[A-Za-z0-9_]+-\d+x\d+-[a-z]{1,5}$/.test(id)) {
      throw new Error("Unsupported asset ID \"".concat(id, "\". URL generation only works for auto-generated IDs."));
    }

    var _id$split = id.split('-'),
        _id$split2 = _slicedToArray(_id$split, 4),
        assetId = _id$split2[1],
        size = _id$split2[2],
        format = _id$split2[3];

    validators.hasDataset(this.client.clientConfig);
    var _this$client$clientCo = this.client.clientConfig,
        projectId = _this$client$clientCo.projectId,
        dataset = _this$client$clientCo.dataset;
    var qs = query ? queryString(query) : '';
    return "https://cdn.sanity.io/images/".concat(projectId, "/").concat(dataset, "/").concat(assetId, "-").concat(size, ".").concat(format).concat(qs);
  }
});
module.exports = AssetsClient;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/auth/authClient.js":
/*!************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/auth/authClient.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

function AuthClient(client) {
  this.client = client;
}

assign(AuthClient.prototype, {
  getLoginProviders: function getLoginProviders() {
    return this.client.request({
      uri: '/auth/providers'
    });
  },
  logout: function logout() {
    return this.client.request({
      uri: '/auth/logout',
      method: 'POST'
    });
  }
});
module.exports = AuthClient;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/config.js":
/*!***************************************************!*\
  !*** ./node_modules/@sanity/client/lib/config.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var generateHelpUrl = __webpack_require__(/*! @sanity/generate-help-url */ "./node_modules/@sanity/generate-help-url/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var validate = __webpack_require__(/*! ./validators */ "./node_modules/@sanity/client/lib/validators.js");

var warnings = __webpack_require__(/*! ./warnings */ "./node_modules/@sanity/client/lib/warnings.js");

var defaultCdnHost = 'apicdn.sanity.io';
var defaultConfig = {
  apiHost: 'https://api.sanity.io',
  apiVersion: '1',
  useProjectHostname: true,
  gradientMode: false,
  isPromiseAPI: true
};
var LOCALHOSTS = ['localhost', '127.0.0.1', '0.0.0.0'];

var isLocal = function isLocal(host) {
  return LOCALHOSTS.indexOf(host) !== -1;
};

exports.defaultConfig = defaultConfig; // eslint-disable-next-line complexity

exports.initConfig = function (config, prevConfig) {
  var specifiedConfig = assign({}, prevConfig, config);

  if (!specifiedConfig.apiVersion) {
    warnings.printNoApiVersionSpecifiedWarning();
  }

  var newConfig = assign({}, defaultConfig, specifiedConfig);
  var gradientMode = newConfig.gradientMode;
  var projectBased = !gradientMode && newConfig.useProjectHostname;

  if (typeof Promise === 'undefined') {
    var helpUrl = generateHelpUrl('js-client-promise-polyfill');
    throw new Error("No native Promise-implementation found, polyfill needed - see ".concat(helpUrl));
  }

  if (gradientMode && !newConfig.namespace) {
    throw new Error('Configuration must contain `namespace` when running in gradient mode');
  }

  if (projectBased && !newConfig.projectId) {
    throw new Error('Configuration must contain `projectId`');
  }

  var isBrowser = typeof window !== 'undefined' && window.location && window.location.hostname;
  var isLocalhost = isBrowser && isLocal(window.location.hostname);

  if (isBrowser && isLocalhost && newConfig.token && newConfig.ignoreBrowserTokenWarning !== true) {
    warnings.printBrowserTokenWarning();
  } else if ((!isBrowser || isLocalhost) && newConfig.useCdn && newConfig.token) {
    warnings.printCdnTokenWarning();
  } else if (typeof newConfig.useCdn === 'undefined') {
    warnings.printCdnWarning();
  }

  if (projectBased) {
    validate.projectId(newConfig.projectId);
  }

  if (!gradientMode && newConfig.dataset) {
    validate.dataset(newConfig.dataset, newConfig.gradientMode);
  }

  newConfig.apiVersion = "".concat(newConfig.apiVersion).replace(/^v/, '');
  newConfig.isDefaultApi = newConfig.apiHost === defaultConfig.apiHost;
  newConfig.useCdn = Boolean(newConfig.useCdn) && !newConfig.token && !newConfig.withCredentials;
  exports.validateApiVersion(newConfig.apiVersion);

  if (newConfig.gradientMode) {
    newConfig.url = newConfig.apiHost;
    newConfig.cdnUrl = newConfig.apiHost;
  } else {
    var hostParts = newConfig.apiHost.split('://', 2);
    var protocol = hostParts[0];
    var host = hostParts[1];
    var cdnHost = newConfig.isDefaultApi ? defaultCdnHost : host;

    if (newConfig.useProjectHostname) {
      newConfig.url = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(host, "/v").concat(newConfig.apiVersion);
      newConfig.cdnUrl = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(cdnHost, "/v").concat(newConfig.apiVersion);
    } else {
      newConfig.url = "".concat(newConfig.apiHost, "/v").concat(newConfig.apiVersion);
      newConfig.cdnUrl = newConfig.url;
    }
  }

  return newConfig;
};

exports.validateApiVersion = function validateApiVersion(apiVersion) {
  if (apiVersion === '1' || apiVersion === 'X') {
    return;
  }

  var apiDate = new Date(apiVersion);
  var apiVersionValid = /^\d{4}-\d{2}-\d{2}$/.test(apiVersion) && apiDate instanceof Date && apiDate.getTime() > 0;

  if (!apiVersionValid) {
    throw new Error('Invalid API version string, expected `1` or date in format `YYYY-MM-DD`');
  }
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/data/dataMethods.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/data/dataMethods.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var _require = __webpack_require__(/*! @sanity/observable/operators/filter */ "./node_modules/@sanity/observable/operators/filter.js"),
    filter = _require.filter;

var _require2 = __webpack_require__(/*! @sanity/observable/operators/map */ "./node_modules/@sanity/observable/operators/map.js"),
    map = _require2.map;

var validators = __webpack_require__(/*! ../validators */ "./node_modules/@sanity/client/lib/validators.js");

var getSelection = __webpack_require__(/*! ../util/getSelection */ "./node_modules/@sanity/client/lib/util/getSelection.js");

var encodeQueryString = __webpack_require__(/*! ./encodeQueryString */ "./node_modules/@sanity/client/lib/data/encodeQueryString.js");

var Transaction = __webpack_require__(/*! ./transaction */ "./node_modules/@sanity/client/lib/data/transaction.js");

var Patch = __webpack_require__(/*! ./patch */ "./node_modules/@sanity/client/lib/data/patch.js");

var listen = __webpack_require__(/*! ./listen */ "./node_modules/@sanity/client/lib/data/listen.js");

var excludeFalsey = function excludeFalsey(param, defValue) {
  var value = typeof param === 'undefined' ? defValue : param;
  return param === false ? undefined : value;
};

var getMutationQuery = function getMutationQuery() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    returnIds: true,
    returnDocuments: excludeFalsey(options.returnDocuments, true),
    visibility: options.visibility || 'sync'
  };
};

var isResponse = function isResponse(event) {
  return event.type === 'response';
};

var getBody = function getBody(event) {
  return event.body;
};

var indexBy = function indexBy(docs, attr) {
  return docs.reduce(function (indexed, doc) {
    indexed[attr(doc)] = doc;
    return indexed;
  }, Object.create(null));
};

var toPromise = function toPromise(observable) {
  return observable.toPromise();
};

var getQuerySizeLimit = 11264;
module.exports = {
  listen: listen,
  getDataUrl: function getDataUrl(operation, path) {
    var config = this.clientConfig;
    var catalog = config.gradientMode ? config.namespace : validators.hasDataset(config);
    var baseUri = "/".concat(operation, "/").concat(catalog);
    var uri = path ? "".concat(baseUri, "/").concat(path) : baseUri;
    return (this.clientConfig.gradientMode ? uri : "/data".concat(uri)).replace(/\/($|\?)/, '$1');
  },
  fetch: function fetch(query, params) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var mapResponse = options.filterResponse === false ? function (res) {
      return res;
    } : function (res) {
      return res.result;
    };

    var observable = this._dataRequest('query', {
      query: query,
      params: params
    }, options).pipe(map(mapResponse));

    return this.isPromiseAPI() ? toPromise(observable) : observable;
  },
  getDocument: function getDocument(id) {
    var options = {
      uri: this.getDataUrl('doc', id),
      json: true
    };

    var observable = this._requestObservable(options).pipe(filter(isResponse), map(function (event) {
      return event.body.documents && event.body.documents[0];
    }));

    return this.isPromiseAPI() ? toPromise(observable) : observable;
  },
  getDocuments: function getDocuments(ids) {
    var options = {
      uri: this.getDataUrl('doc', ids.join(',')),
      json: true
    };

    var observable = this._requestObservable(options).pipe(filter(isResponse), map(function (event) {
      var indexed = indexBy(event.body.documents || [], function (doc) {
        return doc._id;
      });
      return ids.map(function (id) {
        return indexed[id] || null;
      });
    }));

    return this.isPromiseAPI() ? toPromise(observable) : observable;
  },
  create: function create(doc, options) {
    return this._create(doc, 'create', options);
  },
  createIfNotExists: function createIfNotExists(doc, options) {
    validators.requireDocumentId('createIfNotExists', doc);
    return this._create(doc, 'createIfNotExists', options);
  },
  createOrReplace: function createOrReplace(doc, options) {
    validators.requireDocumentId('createOrReplace', doc);
    return this._create(doc, 'createOrReplace', options);
  },
  patch: function patch(selector, operations) {
    return new Patch(selector, operations, this);
  },
  delete: function _delete(selection, options) {
    return this.dataRequest('mutate', {
      mutations: [{
        delete: getSelection(selection)
      }]
    }, options);
  },
  mutate: function mutate(mutations, options) {
    var mut = mutations instanceof Patch || mutations instanceof Transaction ? mutations.serialize() : mutations;
    var muts = Array.isArray(mut) ? mut : [mut];
    var transactionId = options && options.transactionId;
    return this.dataRequest('mutate', {
      mutations: muts,
      transactionId: transactionId
    }, options);
  },
  transaction: function transaction(operations) {
    return new Transaction(operations, this);
  },
  dataRequest: function dataRequest(endpoint, body) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var request = this._dataRequest(endpoint, body, options);

    return this.isPromiseAPI() ? toPromise(request) : request;
  },
  _dataRequest: function _dataRequest(endpoint, body) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var isMutation = endpoint === 'mutate'; // Check if the query string is within a configured threshold,
    // in which case we can use GET. Otherwise, use POST.

    var strQuery = !isMutation && encodeQueryString(body);
    var useGet = !isMutation && strQuery.length < getQuerySizeLimit;
    var stringQuery = useGet ? strQuery : '';
    var returnFirst = options.returnFirst;
    var timeout = options.timeout,
        token = options.token;
    var uri = this.getDataUrl(endpoint, stringQuery);
    var reqOptions = {
      method: useGet ? 'GET' : 'POST',
      uri: uri,
      json: true,
      body: useGet ? undefined : body,
      query: isMutation && getMutationQuery(options),
      timeout: timeout,
      token: token
    };
    return this._requestObservable(reqOptions).pipe(filter(isResponse), map(getBody), map(function (res) {
      if (!isMutation) {
        return res;
      } // Should we return documents?


      var results = res.results || [];

      if (options.returnDocuments) {
        return returnFirst ? results[0] && results[0].document : results.map(function (mut) {
          return mut.document;
        });
      } // Return a reduced subset


      var key = returnFirst ? 'documentId' : 'documentIds';
      var ids = returnFirst ? results[0] && results[0].id : results.map(function (mut) {
        return mut.id;
      });
      return _defineProperty({
        transactionId: res.transactionId,
        results: results
      }, key, ids);
    }));
  },
  _create: function _create(doc, op) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var mutation = _defineProperty({}, op, doc);

    var opts = assign({
      returnFirst: true,
      returnDocuments: true
    }, options);
    return this.dataRequest('mutate', {
      mutations: [mutation]
    }, opts);
  }
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/data/encodeQueryString.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/data/encodeQueryString.js ***!
  \*******************************************************************/
/***/ (function(module) {

"use strict";


var enc = encodeURIComponent;

module.exports = function (_ref) {
  var query = _ref.query,
      _ref$params = _ref.params,
      params = _ref$params === void 0 ? {} : _ref$params,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options;
  var base = "?query=".concat(enc(query));
  var qString = Object.keys(params).reduce(function (qs, param) {
    return "".concat(qs, "&").concat(enc("$".concat(param)), "=").concat(enc(JSON.stringify(params[param])));
  }, base);
  return Object.keys(options).reduce(function (qs, option) {
    // Only include the option if it is truthy
    return options[option] ? "".concat(qs, "&").concat(enc(option), "=").concat(enc(options[option])) : qs;
  }, qString);
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/data/listen.js":
/*!********************************************************!*\
  !*** ./node_modules/@sanity/client/lib/data/listen.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var Observable = __webpack_require__(/*! @sanity/observable/minimal */ "./node_modules/@sanity/observable/minimal.js");

var polyfilledEventSource = __webpack_require__(/*! @sanity/eventsource */ "./node_modules/@sanity/eventsource/browser.js");

var pick = __webpack_require__(/*! ../util/pick */ "./node_modules/@sanity/client/lib/util/pick.js");

var defaults = __webpack_require__(/*! ../util/defaults */ "./node_modules/@sanity/client/lib/util/defaults.js");

var encodeQueryString = __webpack_require__(/*! ./encodeQueryString */ "./node_modules/@sanity/client/lib/data/encodeQueryString.js");

var generateHelpUrl = __webpack_require__(/*! @sanity/generate-help-url */ "./node_modules/@sanity/generate-help-url/index.js");

var once = __webpack_require__(/*! ../util/once */ "./node_modules/@sanity/client/lib/util/once.js");

var tokenWarning = ['Using token with listeners is not supported in browsers. ', "For more info, see ".concat(generateHelpUrl('js-client-listener-tokens-browser'), ".")]; // eslint-disable-next-line no-console

var printTokenWarning = once(function () {
  return console.warn(tokenWarning.join(' '));
});
var isWindowEventSource = Boolean(typeof window !== 'undefined' && window.EventSource);
var EventSource = isWindowEventSource ? window.EventSource // Native browser EventSource
: polyfilledEventSource; // Node.js, IE etc

var possibleOptions = ['includePreviousRevision', 'includeResult', 'visibility', 'effectFormat'];
var defaultOptions = {
  includeResult: true
};

module.exports = function listen(query, params) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var options = defaults(opts, defaultOptions);
  var listenOpts = pick(options, possibleOptions);
  var qs = encodeQueryString({
    query: query,
    params: params,
    options: listenOpts
  });
  var _this$clientConfig = this.clientConfig,
      url = _this$clientConfig.url,
      token = _this$clientConfig.token,
      withCredentials = _this$clientConfig.withCredentials;
  var uri = "".concat(url).concat(this.getDataUrl('listen', qs));
  var listenFor = options.events ? options.events : ['mutation'];
  var shouldEmitReconnect = listenFor.indexOf('reconnect') !== -1;

  if (token && isWindowEventSource) {
    printTokenWarning();
  }

  var esOptions = {};

  if (token || withCredentials) {
    esOptions.withCredentials = true;
  }

  if (token) {
    esOptions.headers = {
      Authorization: "Bearer ".concat(token)
    };
  }

  return new Observable(function (observer) {
    var es = getEventSource();
    var reconnectTimer;
    var stopped = false;

    function onError() {
      if (stopped) {
        return;
      }

      emitReconnect(); // Allow event handlers of `emitReconnect` to cancel/close the reconnect attempt

      if (stopped) {
        return;
      } // Unless we've explicitly stopped the ES (in which case `stopped` should be true),
      // we should never be in a disconnected state. By default, EventSource will reconnect
      // automatically, in which case it sets readyState to `CONNECTING`, but in some cases
      // (like when a laptop lid is closed), it closes the connection. In these cases we need
      // to explicitly reconnect.


      if (es.readyState === EventSource.CLOSED) {
        unsubscribe();
        clearTimeout(reconnectTimer);
        reconnectTimer = setTimeout(open, 100);
      }
    }

    function onChannelError(err) {
      observer.error(cooerceError(err));
    }

    function onMessage(evt) {
      var event = parseEvent(evt);
      return event instanceof Error ? observer.error(event) : observer.next(event);
    }

    function onDisconnect(evt) {
      stopped = true;
      unsubscribe();
      observer.complete();
    }

    function unsubscribe() {
      es.removeEventListener('error', onError, false);
      es.removeEventListener('channelError', onChannelError, false);
      es.removeEventListener('disconnect', onDisconnect, false);
      listenFor.forEach(function (type) {
        return es.removeEventListener(type, onMessage, false);
      });
      es.close();
    }

    function emitReconnect() {
      if (shouldEmitReconnect) {
        observer.next({
          type: 'reconnect'
        });
      }
    }

    function getEventSource() {
      var evs = new EventSource(uri, esOptions);
      evs.addEventListener('error', onError, false);
      evs.addEventListener('channelError', onChannelError, false);
      evs.addEventListener('disconnect', onDisconnect, false);
      listenFor.forEach(function (type) {
        return evs.addEventListener(type, onMessage, false);
      });
      return evs;
    }

    function open() {
      es = getEventSource();
    }

    function stop() {
      stopped = true;
      unsubscribe();
    }

    return stop;
  });
};

function parseEvent(event) {
  try {
    var data = event.data && JSON.parse(event.data) || {};
    return assign({
      type: event.type
    }, data);
  } catch (err) {
    return err;
  }
}

function cooerceError(err) {
  if (err instanceof Error) {
    return err;
  }

  var evt = parseEvent(err);
  return evt instanceof Error ? evt : new Error(extractErrorMessage(evt));
}

function extractErrorMessage(err) {
  if (!err.error) {
    return err.message || 'Unknown listener error';
  }

  if (err.error.description) {
    return err.error.description;
  }

  return typeof err.error === 'string' ? err.error : JSON.stringify(err.error, null, 2);
}

/***/ }),

/***/ "./node_modules/@sanity/client/lib/data/patch.js":
/*!*******************************************************!*\
  !*** ./node_modules/@sanity/client/lib/data/patch.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var deepAssign = __webpack_require__(/*! deep-assign */ "./node_modules/deep-assign/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var getSelection = __webpack_require__(/*! ../util/getSelection */ "./node_modules/@sanity/client/lib/util/getSelection.js");

var validate = __webpack_require__(/*! ../validators */ "./node_modules/@sanity/client/lib/validators.js");

var validateObject = validate.validateObject;
var validateInsert = validate.validateInsert;

function Patch(selection) {
  var operations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var client = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  this.selection = selection;
  this.operations = assign({}, operations);
  this.client = client;
}

assign(Patch.prototype, {
  clone: function clone() {
    return new Patch(this.selection, assign({}, this.operations), this.client);
  },
  merge: function merge(props) {
    validateObject('merge', props);
    var stack = new Error().stack.toString().split('\n').filter(function (str) {
      return str.trim();
    }).slice(2);
    console.warn("The \"merge\" patch has been deprecated and will be removed in the future\n".concat(stack.join('\n')));
    return this._assign('merge', deepAssign(this.operations.merge || {}, props));
  },
  set: function set(props) {
    return this._assign('set', props);
  },
  diffMatchPatch: function diffMatchPatch(props) {
    validateObject('diffMatchPatch', props);
    return this._assign('diffMatchPatch', props);
  },
  unset: function unset(attrs) {
    if (!Array.isArray(attrs)) {
      throw new Error('unset(attrs) takes an array of attributes to unset, non-array given');
    }

    this.operations = assign({}, this.operations, {
      unset: attrs
    });
    return this;
  },
  setIfMissing: function setIfMissing(props) {
    return this._assign('setIfMissing', props);
  },
  replace: function replace(props) {
    validateObject('replace', props);
    return this._set('set', {
      $: props
    }); // eslint-disable-line id-length
  },
  inc: function inc(props) {
    return this._assign('inc', props);
  },
  dec: function dec(props) {
    return this._assign('dec', props);
  },
  insert: function insert(at, selector, items) {
    var _this$_assign;

    validateInsert(at, selector, items);
    return this._assign('insert', (_this$_assign = {}, _defineProperty(_this$_assign, at, selector), _defineProperty(_this$_assign, "items", items), _this$_assign));
  },
  append: function append(selector, items) {
    return this.insert('after', "".concat(selector, "[-1]"), items);
  },
  prepend: function prepend(selector, items) {
    return this.insert('before', "".concat(selector, "[0]"), items);
  },
  splice: function splice(selector, start, deleteCount, items) {
    // Negative indexes doesn't mean the same in Sanity as they do in JS;
    // -1 means "actually at the end of the array", which allows inserting
    // at the end of the array without knowing its length. We therefore have
    // to substract negative indexes by one to match JS. If you want Sanity-
    // behaviour, just use `insert('replace', selector, items)` directly
    var delAll = typeof deleteCount === 'undefined' || deleteCount === -1;
    var startIndex = start < 0 ? start - 1 : start;
    var delCount = delAll ? -1 : Math.max(0, start + deleteCount);
    var delRange = startIndex < 0 && delCount >= 0 ? '' : delCount;
    var rangeSelector = "".concat(selector, "[").concat(startIndex, ":").concat(delRange, "]");
    return this.insert('replace', rangeSelector, items || []);
  },
  ifRevisionId: function ifRevisionId(rev) {
    this.operations.ifRevisionID = rev;
    return this;
  },
  serialize: function serialize() {
    return assign(getSelection(this.selection), this.operations);
  },
  toJSON: function toJSON() {
    return this.serialize();
  },
  commit: function commit() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!this.client) {
      throw new Error('No `client` passed to patch, either provide one or pass the ' + 'patch to a clients `mutate()` method');
    }

    var returnFirst = typeof this.selection === 'string';
    var opts = assign({
      returnFirst: returnFirst,
      returnDocuments: true
    }, options);
    return this.client.mutate({
      patch: this.serialize()
    }, opts);
  },
  reset: function reset() {
    this.operations = {};
    return this;
  },
  _set: function _set(op, props) {
    return this._assign(op, props, false);
  },
  _assign: function _assign(op, props) {
    var merge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    validateObject(op, props);
    this.operations = assign({}, this.operations, _defineProperty({}, op, assign({}, merge && this.operations[op] || {}, props)));
    return this;
  }
});
module.exports = Patch;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/data/transaction.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/data/transaction.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var validators = __webpack_require__(/*! ../validators */ "./node_modules/@sanity/client/lib/validators.js");

var Patch = __webpack_require__(/*! ./patch */ "./node_modules/@sanity/client/lib/data/patch.js");

var defaultMutateOptions = {
  returnDocuments: false
};

function Transaction() {
  var operations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var client = arguments.length > 1 ? arguments[1] : undefined;
  var transactionId = arguments.length > 2 ? arguments[2] : undefined;
  this.trxId = transactionId;
  this.operations = operations;
  this.client = client;
}

assign(Transaction.prototype, {
  clone: function clone() {
    return new Transaction(this.operations.slice(0), this.client, this.trxId);
  },
  create: function create(doc) {
    validators.validateObject('create', doc);
    return this._add({
      create: doc
    });
  },
  createIfNotExists: function createIfNotExists(doc) {
    var op = 'createIfNotExists';
    validators.validateObject(op, doc);
    validators.requireDocumentId(op, doc);
    return this._add(_defineProperty({}, op, doc));
  },
  createOrReplace: function createOrReplace(doc) {
    var op = 'createOrReplace';
    validators.validateObject(op, doc);
    validators.requireDocumentId(op, doc);
    return this._add(_defineProperty({}, op, doc));
  },
  delete: function _delete(documentId) {
    validators.validateDocumentId('delete', documentId);
    return this._add({
      delete: {
        id: documentId
      }
    });
  },
  patch: function patch(documentId, patchOps) {
    var isBuilder = typeof patchOps === 'function';
    var isPatch = documentId instanceof Patch; // transaction.patch(client.patch('documentId').inc({visits: 1}))

    if (isPatch) {
      return this._add({
        patch: documentId.serialize()
      });
    } // patch => patch.inc({visits: 1}).set({foo: 'bar'})


    if (isBuilder) {
      var patch = patchOps(new Patch(documentId, {}, this.client));

      if (!(patch instanceof Patch)) {
        throw new Error('function passed to `patch()` must return the patch');
      }

      return this._add({
        patch: patch.serialize()
      });
    }

    return this._add({
      patch: assign({
        id: documentId
      }, patchOps)
    });
  },
  transactionId: function transactionId(id) {
    if (!id) {
      return this.trxId;
    }

    this.trxId = id;
    return this;
  },
  serialize: function serialize() {
    return this.operations.slice();
  },
  toJSON: function toJSON() {
    return this.serialize();
  },
  commit: function commit(options) {
    if (!this.client) {
      throw new Error('No `client` passed to transaction, either provide one or pass the ' + 'transaction to a clients `mutate()` method');
    }

    return this.client.mutate(this.serialize(), assign({
      transactionId: this.trxId
    }, defaultMutateOptions, options || {}));
  },
  reset: function reset() {
    this.operations = [];
    return this;
  },
  _add: function _add(mut) {
    this.operations.push(mut);
    return this;
  }
});
module.exports = Transaction;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/datasets/datasetsClient.js":
/*!********************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/datasets/datasetsClient.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var validate = __webpack_require__(/*! ../validators */ "./node_modules/@sanity/client/lib/validators.js");

function DatasetsClient(client) {
  this.request = client.request.bind(client);
}

assign(DatasetsClient.prototype, {
  create: function create(name, options) {
    return this._modify('PUT', name, options);
  },
  edit: function edit(name, options) {
    return this._modify('PATCH', name, options);
  },
  delete: function _delete(name) {
    return this._modify('DELETE', name);
  },
  list: function list() {
    return this.request({
      uri: '/datasets'
    });
  },
  _modify: function _modify(method, name, body) {
    validate.dataset(name);
    return this.request({
      method: method,
      uri: "/datasets/".concat(name),
      body: body
    });
  }
});
module.exports = DatasetsClient;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/http/browserMiddleware.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/http/browserMiddleware.js ***!
  \*******************************************************************/
/***/ (function(module) {

"use strict";


module.exports = [];

/***/ }),

/***/ "./node_modules/@sanity/client/lib/http/errors.js":
/*!********************************************************!*\
  !*** ./node_modules/@sanity/client/lib/http/errors.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var makeError = __webpack_require__(/*! make-error */ "./node_modules/make-error/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

function ClientError(res) {
  var props = extractErrorProps(res);
  ClientError.super.call(this, props.message);
  assign(this, props);
}

function ServerError(res) {
  var props = extractErrorProps(res);
  ServerError.super.call(this, props.message);
  assign(this, props);
}

function extractErrorProps(res) {
  var body = res.body;
  var props = {
    response: res,
    statusCode: res.statusCode,
    responseBody: stringifyBody(body, res)
  }; // API/Boom style errors ({statusCode, error, message})

  if (body.error && body.message) {
    props.message = "".concat(body.error, " - ").concat(body.message);
    return props;
  } // Query/database errors ({error: {description, other, arb, props}})


  if (body.error && body.error.description) {
    props.message = body.error.description;
    props.details = body.error;
    return props;
  } // Other, more arbitrary errors


  props.message = body.error || body.message || httpErrorMessage(res);
  return props;
}

function httpErrorMessage(res) {
  var statusMessage = res.statusMessage ? " ".concat(res.statusMessage) : '';
  return "".concat(res.method, "-request to ").concat(res.url, " resulted in HTTP ").concat(res.statusCode).concat(statusMessage);
}

function stringifyBody(body, res) {
  var contentType = (res.headers['content-type'] || '').toLowerCase();
  var isJson = contentType.indexOf('application/json') !== -1;
  return isJson ? JSON.stringify(body, null, 2) : body;
}

makeError(ClientError);
makeError(ServerError);
exports.ClientError = ClientError;
exports.ServerError = ServerError;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/http/queryString.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/http/queryString.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";


module.exports = function (params) {
  var qs = [];

  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      qs.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(params[key])));
    }
  }

  return qs.length > 0 ? "?".concat(qs.join('&')) : '';
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/http/request.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sanity/client/lib/http/request.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* eslint-disable no-empty-function, no-process-env */
var getIt = __webpack_require__(/*! get-it */ "./node_modules/get-it/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var observable = __webpack_require__(/*! get-it/lib/middleware/observable */ "./node_modules/get-it/lib/middleware/observable.js");

var jsonRequest = __webpack_require__(/*! get-it/lib/middleware/jsonRequest */ "./node_modules/get-it/lib/middleware/jsonRequest.js");

var jsonResponse = __webpack_require__(/*! get-it/lib/middleware/jsonResponse */ "./node_modules/get-it/lib/middleware/jsonResponse.js");

var progress = __webpack_require__(/*! get-it/lib/middleware/progress */ "./node_modules/get-it/lib/middleware/progress/index.js");

var Observable = __webpack_require__(/*! @sanity/observable/minimal */ "./node_modules/@sanity/observable/minimal.js");

var _require = __webpack_require__(/*! ./errors */ "./node_modules/@sanity/client/lib/http/errors.js"),
    ClientError = _require.ClientError,
    ServerError = _require.ServerError;

var httpError = {
  onResponse: function onResponse(res) {
    if (res.statusCode >= 500) {
      throw new ServerError(res);
    } else if (res.statusCode >= 400) {
      throw new ClientError(res);
    }

    return res;
  }
};
var printWarnings = {
  onResponse: function onResponse(res) {
    var warn = res.headers['x-sanity-warning'];
    var warnings = Array.isArray(warn) ? warn : [warn];
    warnings.filter(Boolean).forEach(function (msg) {
      return console.warn(msg);
    }); // eslint-disable-line no-console

    return res;
  }
}; // Environment-specific middleware.

var envSpecific = __webpack_require__(/*! ./nodeMiddleware */ "./node_modules/@sanity/client/lib/http/browserMiddleware.js");

var middleware = envSpecific.concat([printWarnings, jsonRequest(), jsonResponse(), progress(), httpError, observable({
  implementation: Observable
})]);
var request = getIt(middleware);

function httpRequest(options) {
  var requester = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : request;
  return requester(assign({
    maxRedirects: 0
  }, options));
}

httpRequest.defaultRequester = request;
httpRequest.ClientError = ClientError;
httpRequest.ServerError = ServerError;
module.exports = httpRequest;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/http/requestOptions.js":
/*!****************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/http/requestOptions.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var projectHeader = 'X-Sanity-Project-ID';

module.exports = function (config) {
  var overrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var headers = {};
  var token = overrides.token || config.token;

  if (token) {
    headers.Authorization = "Bearer ".concat(token);
  }

  if (!overrides.useGlobalApi && !config.useProjectHostname && config.projectId) {
    headers[projectHeader] = config.projectId;
  }

  var withCredentials = Boolean(typeof overrides.withCredentials === 'undefined' ? config.token || config.withCredentials : overrides.withCredentials);
  var timeout = typeof overrides.timeout === 'undefined' ? config.timeout : overrides.timeout;
  return assign({}, overrides, {
    headers: assign({}, headers, overrides.headers || {}),
    timeout: typeof timeout === 'undefined' ? 5 * 60 * 1000 : timeout,
    json: true,
    withCredentials: withCredentials
  });
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/projects/projectsClient.js":
/*!********************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/projects/projectsClient.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

function ProjectsClient(client) {
  this.client = client;
}

assign(ProjectsClient.prototype, {
  list: function list() {
    return this.client.request({
      uri: '/projects'
    });
  },
  getById: function getById(id) {
    return this.client.request({
      uri: "/projects/".concat(id)
    });
  }
});
module.exports = ProjectsClient;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/sanityClient.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sanity/client/lib/sanityClient.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var _require = __webpack_require__(/*! @sanity/observable/operators/filter */ "./node_modules/@sanity/observable/operators/filter.js"),
    filter = _require.filter;

var _require2 = __webpack_require__(/*! @sanity/observable/operators/map */ "./node_modules/@sanity/observable/operators/map.js"),
    map = _require2.map;

var Patch = __webpack_require__(/*! ./data/patch */ "./node_modules/@sanity/client/lib/data/patch.js");

var Transaction = __webpack_require__(/*! ./data/transaction */ "./node_modules/@sanity/client/lib/data/transaction.js");

var dataMethods = __webpack_require__(/*! ./data/dataMethods */ "./node_modules/@sanity/client/lib/data/dataMethods.js");

var DatasetsClient = __webpack_require__(/*! ./datasets/datasetsClient */ "./node_modules/@sanity/client/lib/datasets/datasetsClient.js");

var ProjectsClient = __webpack_require__(/*! ./projects/projectsClient */ "./node_modules/@sanity/client/lib/projects/projectsClient.js");

var AssetsClient = __webpack_require__(/*! ./assets/assetsClient */ "./node_modules/@sanity/client/lib/assets/assetsClient.js");

var UsersClient = __webpack_require__(/*! ./users/usersClient */ "./node_modules/@sanity/client/lib/users/usersClient.js");

var AuthClient = __webpack_require__(/*! ./auth/authClient */ "./node_modules/@sanity/client/lib/auth/authClient.js");

var httpRequest = __webpack_require__(/*! ./http/request */ "./node_modules/@sanity/client/lib/http/request.js");

var getRequestOptions = __webpack_require__(/*! ./http/requestOptions */ "./node_modules/@sanity/client/lib/http/requestOptions.js");

var _require3 = __webpack_require__(/*! ./config */ "./node_modules/@sanity/client/lib/config.js"),
    defaultConfig = _require3.defaultConfig,
    initConfig = _require3.initConfig;

var toPromise = function toPromise(observable) {
  return observable.toPromise();
};

function SanityClient() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultConfig;

  if (!(this instanceof SanityClient)) {
    return new SanityClient(config);
  }

  this.config(config);
  this.assets = new AssetsClient(this);
  this.datasets = new DatasetsClient(this);
  this.projects = new ProjectsClient(this);
  this.users = new UsersClient(this);
  this.auth = new AuthClient(this);

  if (this.clientConfig.isPromiseAPI) {
    var observableConfig = assign({}, this.clientConfig, {
      isPromiseAPI: false
    });
    this.observable = new SanityClient(observableConfig);
  }
}

assign(SanityClient.prototype, dataMethods);
assign(SanityClient.prototype, {
  clone: function clone() {
    return new SanityClient(this.config());
  },
  config: function config(newConfig) {
    if (typeof newConfig === 'undefined') {
      return assign({}, this.clientConfig);
    }

    if (this.observable) {
      var observableConfig = assign({}, newConfig, {
        isPromiseAPI: false
      });
      this.observable.config(observableConfig);
    }

    this.clientConfig = initConfig(newConfig, this.clientConfig || {});
    return this;
  },
  withConfig: function withConfig(newConfig) {
    return this.clone().config(newConfig);
  },
  getUrl: function getUrl(uri) {
    var canUseCdn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var base = canUseCdn ? this.clientConfig.cdnUrl : this.clientConfig.url;
    return "".concat(base, "/").concat(uri.replace(/^\//, ''));
  },
  isPromiseAPI: function isPromiseAPI() {
    return this.clientConfig.isPromiseAPI;
  },
  _requestObservable: function _requestObservable(options) {
    var uri = options.url || options.uri;
    var canUseCdn = this.clientConfig.useCdn && ['GET', 'HEAD'].indexOf(options.method || 'GET') >= 0 && uri.indexOf('/data/') === 0;
    var reqOptions = getRequestOptions(this.clientConfig, assign({}, options, {
      url: this.getUrl(uri, canUseCdn)
    }));
    return httpRequest(reqOptions, this.clientConfig.requester);
  },
  request: function request(options) {
    var observable = this._requestObservable(options).pipe(filter(function (event) {
      return event.type === 'response';
    }), map(function (event) {
      return event.body;
    }));

    return this.isPromiseAPI() ? toPromise(observable) : observable;
  }
});
SanityClient.Patch = Patch;
SanityClient.Transaction = Transaction;
SanityClient.ClientError = httpRequest.ClientError;
SanityClient.ServerError = httpRequest.ServerError;
SanityClient.requester = httpRequest.defaultRequester;
module.exports = SanityClient;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/users/usersClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/users/usersClient.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

function UsersClient(client) {
  this.client = client;
}

assign(UsersClient.prototype, {
  getById: function getById(id) {
    return this.client.request({
      uri: "/users/".concat(id)
    });
  }
});
module.exports = UsersClient;

/***/ }),

/***/ "./node_modules/@sanity/client/lib/util/defaults.js":
/*!**********************************************************!*\
  !*** ./node_modules/@sanity/client/lib/util/defaults.js ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";


module.exports = function (obj, defaults) {
  return Object.keys(defaults).concat(Object.keys(obj)).reduce(function (target, prop) {
    target[prop] = typeof obj[prop] === 'undefined' ? defaults[prop] : obj[prop];
    return target;
  }, {});
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/util/getSelection.js":
/*!**************************************************************!*\
  !*** ./node_modules/@sanity/client/lib/util/getSelection.js ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";


module.exports = function getSelection(sel) {
  if (typeof sel === 'string' || Array.isArray(sel)) {
    return {
      id: sel
    };
  }

  if (sel && sel.query) {
    return {
      query: sel.query
    };
  }

  var selectionOpts = ['* Document ID (<docId>)', '* Array of document IDs', '* Object containing `query`'].join('\n');
  throw new Error("Unknown selection - must be one of:\n\n".concat(selectionOpts));
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/util/once.js":
/*!******************************************************!*\
  !*** ./node_modules/@sanity/client/lib/util/once.js ***!
  \******************************************************/
/***/ (function(module) {

"use strict";


module.exports = function (fn) {
  var didCall = false;
  var returnValue;
  return function () {
    if (didCall) {
      return returnValue;
    }

    returnValue = fn.apply(void 0, arguments);
    didCall = true;
    return returnValue;
  };
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/util/pick.js":
/*!******************************************************!*\
  !*** ./node_modules/@sanity/client/lib/util/pick.js ***!
  \******************************************************/
/***/ (function(module) {

"use strict";


module.exports = function (obj, props) {
  return props.reduce(function (selection, prop) {
    if (typeof obj[prop] === 'undefined') {
      return selection;
    }

    selection[prop] = obj[prop];
    return selection;
  }, {});
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/validators.js":
/*!*******************************************************!*\
  !*** ./node_modules/@sanity/client/lib/validators.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var VALID_ASSET_TYPES = ['image', 'file'];
var VALID_INSERT_LOCATIONS = ['before', 'after', 'replace'];

exports.dataset = function (name) {
  if (!/^(~[a-z0-9]{1}[-\w]{0,25}|[a-z0-9]{1}[-\w]{0,19})$/.test(name)) {
    throw new Error('Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 20 characters');
  }
};

exports.projectId = function (id) {
  if (!/^[-a-z0-9]+$/i.test(id)) {
    throw new Error('`projectId` can only contain only a-z, 0-9 and dashes');
  }
};

exports.validateAssetType = function (type) {
  if (VALID_ASSET_TYPES.indexOf(type) === -1) {
    throw new Error("Invalid asset type: ".concat(type, ". Must be one of ").concat(VALID_ASSET_TYPES.join(', ')));
  }
};

exports.validateObject = function (op, val) {
  if (val === null || _typeof(val) !== 'object' || Array.isArray(val)) {
    throw new Error("".concat(op, "() takes an object of properties"));
  }
};

exports.requireDocumentId = function (op, doc) {
  if (!doc._id) {
    throw new Error("".concat(op, "() requires that the document contains an ID (\"_id\" property)"));
  }

  exports.validateDocumentId(op, doc._id);
};

exports.validateDocumentId = function (op, id) {
  if (typeof id !== 'string' || !/^[a-z0-9_.-]+$/i.test(id)) {
    throw new Error("".concat(op, "(): \"").concat(id, "\" is not a valid document ID"));
  }
};

exports.validateInsert = function (at, selector, items) {
  var signature = 'insert(at, selector, items)';

  if (VALID_INSERT_LOCATIONS.indexOf(at) === -1) {
    var valid = VALID_INSERT_LOCATIONS.map(function (loc) {
      return "\"".concat(loc, "\"");
    }).join(', ');
    throw new Error("".concat(signature, " takes an \"at\"-argument which is one of: ").concat(valid));
  }

  if (typeof selector !== 'string') {
    throw new Error("".concat(signature, " takes a \"selector\"-argument which must be a string"));
  }

  if (!Array.isArray(items)) {
    throw new Error("".concat(signature, " takes an \"items\"-argument which must be an array"));
  }
};

exports.hasDataset = function (config) {
  if (!config.gradientMode && !config.dataset) {
    throw new Error('`dataset` must be provided to perform queries');
  }

  return config.dataset || '';
};

/***/ }),

/***/ "./node_modules/@sanity/client/lib/warnings.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sanity/client/lib/warnings.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var generateHelpUrl = __webpack_require__(/*! @sanity/generate-help-url */ "./node_modules/@sanity/generate-help-url/index.js");

var once = __webpack_require__(/*! ./util/once */ "./node_modules/@sanity/client/lib/util/once.js");

var createWarningPrinter = function createWarningPrinter(message) {
  return (// eslint-disable-next-line no-console
    once(function () {
      var _console;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_console = console).warn.apply(_console, [message.join(' ')].concat(args));
    })
  );
};

exports.printCdnWarning = createWarningPrinter(['You are not using the Sanity CDN. That means your data is always fresh, but the CDN is faster and', "cheaper. Think about it! For more info, see ".concat(generateHelpUrl('js-client-cdn-configuration'), "."), 'To hide this warning, please set the `useCdn` option to either `true` or `false` when creating', 'the client.']);
exports.printBrowserTokenWarning = createWarningPrinter(['You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.', "See ".concat(generateHelpUrl('js-client-browser-token'), " for more information and how to hide this warning.")]);
exports.printCdnTokenWarning = createWarningPrinter(['You have set `useCdn` to `true` while also specifying a token. This is usually not what you', 'want. The CDN cannot be used with an authorization token, since private data cannot be cached.', "See ".concat(generateHelpUrl('js-client-usecdn-token'), " for more information.")]);
exports.printNoApiVersionSpecifiedWarning = createWarningPrinter(['Using the Sanity client without specifying an API version is deprecated.', "See ".concat(generateHelpUrl('js-client-api-version'))]);

/***/ }),

/***/ "./node_modules/@sanity/eventsource/browser.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sanity/eventsource/browser.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable no-var */
var evs = __webpack_require__(/*! @rexxars/eventsource-polyfill */ "./node_modules/@rexxars/eventsource-polyfill/src/eventsource.js")

module.exports = window.EventSource || evs.EventSource


/***/ }),

/***/ "./node_modules/@sanity/generate-help-url/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sanity/generate-help-url/index.js ***!
  \*********************************************************/
/***/ (function(module) {

var baseUrl = 'https://docs.sanity.io/help/'

module.exports = function generateHelpUrl(slug) {
  return baseUrl + slug
}


/***/ }),

/***/ "./node_modules/@sanity/observable/lib/SanityObservableMinimal.js":
/*!************************************************************************!*\
  !*** ./node_modules/@sanity/observable/lib/SanityObservableMinimal.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js"),
    Observable = _require.Observable;

var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var _require2 = __webpack_require__(/*! ../operators/map */ "./node_modules/@sanity/observable/operators/map.js"),
    map = _require2.map;

var _require3 = __webpack_require__(/*! ../operators/filter */ "./node_modules/@sanity/observable/operators/filter.js"),
    filter = _require3.filter;

var _require4 = __webpack_require__(/*! ../operators/reduce */ "./node_modules/@sanity/observable/operators/reduce.js"),
    reduce = _require4.reduce;
/*
 A minimal rxjs based observable that align as closely as possible with the current es-observable spec,
 without the static factory methods
 */


function SanityObservableMinimal() {
  Observable.apply(this, arguments); // eslint-disable-line prefer-rest-params
}

SanityObservableMinimal.prototype = Object.create(assign(Object.create(null), Observable.prototype));
Object.defineProperty(SanityObservableMinimal.prototype, 'constructor', {
  value: SanityObservableMinimal,
  enumerable: false,
  writable: true,
  configurable: true
});

SanityObservableMinimal.prototype.lift = function lift(operator) {
  var observable = new SanityObservableMinimal();
  observable.source = this;
  observable.operator = operator;
  return observable;
};

function createDeprecatedMemberOp(name, op) {
  var hasWarned = false;
  return function deprecatedOperator() {
    if (!hasWarned) {
      hasWarned = true;
      console.warn(new Error("Calling observable.".concat(name, "(...) is deprecated. Please use observable.pipe(").concat(name, "(...)) instead")));
    }

    return this.pipe(op.apply(this, arguments));
  };
}

SanityObservableMinimal.prototype.map = createDeprecatedMemberOp('map', map);
SanityObservableMinimal.prototype.filter = createDeprecatedMemberOp('filter', filter);
SanityObservableMinimal.prototype.reduce = createDeprecatedMemberOp('filter', reduce);
module.exports = SanityObservableMinimal;

/***/ }),

/***/ "./node_modules/@sanity/observable/minimal.js":
/*!****************************************************!*\
  !*** ./node_modules/@sanity/observable/minimal.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/SanityObservableMinimal */ "./node_modules/@sanity/observable/lib/SanityObservableMinimal.js")


/***/ }),

/***/ "./node_modules/@sanity/observable/operators/filter.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sanity/observable/operators/filter.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

exports.filter = __webpack_require__(/*! rxjs/internal/operators/filter */ "./node_modules/rxjs/internal/operators/filter.js").filter


/***/ }),

/***/ "./node_modules/@sanity/observable/operators/map.js":
/*!**********************************************************!*\
  !*** ./node_modules/@sanity/observable/operators/map.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

exports.map = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js").map


/***/ }),

/***/ "./node_modules/@sanity/observable/operators/reduce.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sanity/observable/operators/reduce.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

exports.reduce = __webpack_require__(/*! rxjs/internal/operators/reduce */ "./node_modules/rxjs/internal/operators/reduce.js").reduce


/***/ }),

/***/ "./node_modules/deep-assign/index.js":
/*!*******************************************!*\
  !*** ./node_modules/deep-assign/index.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isObj = __webpack_require__(/*! is-obj */ "./node_modules/is-obj/index.js");
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Sources cannot be null or undefined');
	}

	return Object(val);
}

function assignKey(to, from, key) {
	var val = from[key];

	if (val === undefined || val === null) {
		return;
	}

	if (hasOwnProperty.call(to, key)) {
		if (to[key] === undefined || to[key] === null) {
			throw new TypeError('Cannot convert undefined or null to object (' + key + ')');
		}
	}

	if (!hasOwnProperty.call(to, key) || !isObj(val)) {
		to[key] = val;
	} else {
		to[key] = assign(Object(to[key]), from[key]);
	}
}

function assign(to, from) {
	if (to === from) {
		return to;
	}

	from = Object(from);

	for (var key in from) {
		if (hasOwnProperty.call(from, key)) {
			assignKey(to, from, key);
		}
	}

	if (Object.getOwnPropertySymbols) {
		var symbols = Object.getOwnPropertySymbols(from);

		for (var i = 0; i < symbols.length; i++) {
			if (propIsEnumerable.call(from, symbols[i])) {
				assignKey(to, from, symbols[i]);
			}
		}
	}

	return to;
}

module.exports = function deepAssign(target) {
	target = toObject(target);

	for (var s = 1; s < arguments.length; s++) {
		assign(target, arguments[s]);
	}

	return target;
};


/***/ }),

/***/ "./node_modules/get-it/index.js":
/*!**************************************!*\
  !*** ./node_modules/get-it/index.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib-node */ "./node_modules/get-it/lib/index.js")


/***/ }),

/***/ "./node_modules/get-it/lib/index.js":
/*!******************************************!*\
  !*** ./node_modules/get-it/lib/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var pubsub = __webpack_require__(/*! nano-pubsub */ "./node_modules/nano-pubsub/index.js");
var middlewareReducer = __webpack_require__(/*! ./util/middlewareReducer */ "./node_modules/get-it/lib/util/middlewareReducer.js");
var processOptions = __webpack_require__(/*! ./middleware/defaultOptionsProcessor */ "./node_modules/get-it/lib/middleware/defaultOptionsProcessor.js");
var validateOptions = __webpack_require__(/*! ./middleware/defaultOptionsValidator */ "./node_modules/get-it/lib/middleware/defaultOptionsValidator.js");
var httpRequest = __webpack_require__(/*! ./request */ "./node_modules/get-it/lib/request/index.js"); // node-request in node, browser-request in browsers

var channelNames = ['request', 'response', 'progress', 'error', 'abort'];
var middlehooks = ['processOptions', 'validateOptions', 'interceptRequest', 'finalizeOptions', 'onRequest', 'onResponse', 'onError', 'onReturn', 'onHeaders'];

module.exports = function createRequester() {
  var initMiddleware = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var loadedMiddleware = [];
  var middleware = middlehooks.reduce(function (ware, name) {
    ware[name] = ware[name] || [];
    return ware;
  }, {
    processOptions: [processOptions],
    validateOptions: [validateOptions]
  });

  function request(opts) {
    var channels = channelNames.reduce(function (target, name) {
      target[name] = pubsub();
      return target;
    }, {});

    // Prepare a middleware reducer that can be reused throughout the lifecycle
    var applyMiddleware = middlewareReducer(middleware);

    // Parse the passed options
    var options = applyMiddleware('processOptions', opts);

    // Validate the options
    applyMiddleware('validateOptions', options);

    // Build a context object we can pass to child handlers
    var context = { options: options, channels: channels, applyMiddleware: applyMiddleware

      // We need to hold a reference to the current, ongoing request,
      // in order to allow cancellation. In the case of the retry middleware,
      // a new request might be triggered
    };var ongoingRequest = null;
    var unsubscribe = channels.request.subscribe(function (ctx) {
      // Let request adapters (node/browser) perform the actual request
      ongoingRequest = httpRequest(ctx, function (err, res) {
        return onResponse(err, res, ctx);
      });
    });

    // If we abort the request, prevent further requests from happening,
    // and be sure to cancel any ongoing request (obviously)
    channels.abort.subscribe(function () {
      unsubscribe();
      if (ongoingRequest) {
        ongoingRequest.abort();
      }
    });

    // See if any middleware wants to modify the return value - for instance
    // the promise or observable middlewares
    var returnValue = applyMiddleware('onReturn', channels, context);

    // If return value has been modified by a middleware, we expect the middleware
    // to publish on the 'request' channel. If it hasn't been modified, we want to
    // trigger it right away
    if (returnValue === channels) {
      channels.request.publish(context);
    }

    return returnValue;

    function onResponse(reqErr, res, ctx) {
      var error = reqErr;
      var response = res;

      // We're processing non-errors first, in case a middleware converts the
      // response into an error (for instance, status >= 400 == HttpError)
      if (!error) {
        try {
          response = applyMiddleware('onResponse', res, ctx);
        } catch (err) {
          response = null;
          error = err;
        }
      }

      // Apply error middleware - if middleware return the same (or a different) error,
      // publish as an error event. If we *don't* return an error, assume it has been handled
      error = error && applyMiddleware('onError', error, ctx);

      // Figure out if we should publish on error/response channels
      if (error) {
        channels.error.publish(error);
      } else if (response) {
        channels.response.publish(response);
      }
    }
  }

  request.use = function use(newMiddleware) {
    if (!newMiddleware) {
      throw new Error('Tried to add middleware that resolved to falsey value');
    }

    if (typeof newMiddleware === 'function') {
      throw new Error('Tried to add middleware that was a function. It probably expects you to pass options to it.');
    }

    if (newMiddleware.onReturn && middleware.onReturn.length > 0) {
      throw new Error('Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event');
    }

    middlehooks.forEach(function (key) {
      if (newMiddleware[key]) {
        middleware[key].push(newMiddleware[key]);
      }
    });

    loadedMiddleware.push(newMiddleware);
    return request;
  };

  request.clone = function clone() {
    return createRequester(loadedMiddleware);
  };

  initMiddleware.forEach(request.use);

  return request;
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/defaultOptionsProcessor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/defaultOptionsProcessor.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var urlParse = __webpack_require__(/*! url-parse */ "./node_modules/url-parse/index.js");

var isReactNative = typeof navigator === 'undefined' ? false : navigator.product === 'ReactNative';

var has = Object.prototype.hasOwnProperty;
var defaultOptions = { timeout: isReactNative ? 60000 : 120000 };

module.exports = function (opts) {
  var options = typeof opts === 'string' ? objectAssign({ url: opts }, defaultOptions) : objectAssign({}, defaultOptions, opts);

  // Parse URL into parts
  var url = urlParse(options.url, {}, // Don't use current browser location
  true // Parse query strings
  );

  // Normalize timeouts
  options.timeout = normalizeTimeout(options.timeout);

  // Shallow-merge (override) existing query params
  if (options.query) {
    url.query = objectAssign({}, url.query, removeUndefined(options.query));
  }

  // Implicit POST if we have not specified a method but have a body
  options.method = options.body && !options.method ? 'POST' : (options.method || 'GET').toUpperCase();

  // Stringify URL
  options.url = url.toString(stringifyQueryString);

  return options;
};

function stringifyQueryString(obj) {
  var pairs = [];
  for (var key in obj) {
    if (has.call(obj, key)) {
      push(key, obj[key]);
    }
  }

  return pairs.length ? pairs.join('&') : '';

  function push(key, val) {
    if (Array.isArray(val)) {
      val.forEach(function (item) {
        return push(key, item);
      });
    } else {
      pairs.push([key, val].map(encodeURIComponent).join('='));
    }
  }
}

function normalizeTimeout(time) {
  if (time === false || time === 0) {
    return false;
  }

  if (time.connect || time.socket) {
    return time;
  }

  var delay = Number(time);
  if (isNaN(delay)) {
    return normalizeTimeout(defaultOptions.timeout);
  }

  return { connect: delay, socket: delay };
}

function removeUndefined(obj) {
  var target = {};
  for (var key in obj) {
    if (obj[key] !== undefined) {
      target[key] = obj[key];
    }
  }
  return target;
}
//# sourceMappingURL=defaultOptionsProcessor.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/defaultOptionsValidator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/defaultOptionsValidator.js ***!
  \***********************************************************************/
/***/ (function(module) {

"use strict";


var validUrl = /^https?:\/\//i;

module.exports = function (options) {
  if (!validUrl.test(options.url)) {
    throw new Error("\"" + options.url + "\" is not a valid URL");
  }
};
//# sourceMappingURL=defaultOptionsValidator.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/jsonRequest.js":
/*!***********************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/jsonRequest.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var isPlainObject = __webpack_require__(/*! is-plain-object */ "./node_modules/is-plain-object/index.js");

var serializeTypes = ['boolean', 'string', 'number'];
var isBuffer = function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
};

module.exports = function () {
  return {
    processOptions: function processOptions(options) {
      var body = options.body;
      if (!body) {
        return options;
      }

      var isStream = typeof body.pipe === 'function';
      var shouldSerialize = !isStream && !isBuffer(body) && (serializeTypes.indexOf(typeof body === 'undefined' ? 'undefined' : _typeof(body)) !== -1 || Array.isArray(body) || isPlainObject(body));

      if (!shouldSerialize) {
        return options;
      }

      return objectAssign({}, options, {
        body: JSON.stringify(options.body),
        headers: objectAssign({}, options.headers, {
          'Content-Type': 'application/json'
        })
      });
    }
  };
};
//# sourceMappingURL=jsonRequest.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/jsonResponse.js":
/*!************************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/jsonResponse.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

module.exports = function (opts) {
  return {
    onResponse: function onResponse(response) {
      var contentType = response.headers['content-type'] || '';
      var shouldDecode = opts && opts.force || contentType.indexOf('application/json') !== -1;
      if (!response.body || !contentType || !shouldDecode) {
        return response;
      }

      return objectAssign({}, response, { body: tryParse(response.body) });
    },

    processOptions: function processOptions(options) {
      return objectAssign({}, options, {
        headers: objectAssign({ Accept: 'application/json' }, options.headers)
      });
    }
  };
};

function tryParse(body) {
  try {
    return JSON.parse(body);
  } catch (err) {
    err.message = 'Failed to parsed response body as JSON: ' + err.message;
    throw err;
  }
}
//# sourceMappingURL=jsonResponse.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/observable.js":
/*!**********************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/observable.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ../util/global */ "./node_modules/get-it/lib/util/global.js");
var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

module.exports = function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var Observable = opts.implementation || global.Observable;
  if (!Observable) {
    throw new Error('`Observable` is not available in global scope, and no implementation was passed');
  }

  return {
    onReturn: function onReturn(channels, context) {
      return new Observable(function (observer) {
        channels.error.subscribe(function (err) {
          return observer.error(err);
        });
        channels.progress.subscribe(function (event) {
          return observer.next(objectAssign({ type: 'progress' }, event));
        });
        channels.response.subscribe(function (response) {
          observer.next(objectAssign({ type: 'response' }, response));
          observer.complete();
        });

        channels.request.publish(context);
        return function () {
          return channels.abort.publish();
        };
      });
    }
  };
};
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/progress/browser-progress.js":
/*!*************************************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/progress/browser-progress.js ***!
  \*************************************************************************/
/***/ (function(module) {

"use strict";


module.exports = function () {
  return {
    onRequest: function onRequest(evt) {
      if (evt.adapter !== 'xhr') {
        return;
      }

      var xhr = evt.request;
      var context = evt.context;

      if ('upload' in xhr && 'onprogress' in xhr.upload) {
        xhr.upload.onprogress = handleProgress('upload');
      }

      if ('onprogress' in xhr) {
        xhr.onprogress = handleProgress('download');
      }

      function handleProgress(stage) {
        return function (event) {
          var percent = event.lengthComputable ? event.loaded / event.total * 100 : -1;
          context.channels.progress.publish({
            stage: stage,
            percent: percent,
            total: event.total,
            loaded: event.loaded,
            lengthComputable: event.lengthComputable
          });
        };
      }
    }
  };
};
//# sourceMappingURL=browser-progress.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/middleware/progress/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/get-it/lib/middleware/progress/index.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./node-progress */ "./node_modules/get-it/lib/middleware/progress/browser-progress.js");
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/request/browser-request.js":
/*!************************************************************!*\
  !*** ./node_modules/get-it/lib/request/browser-request.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* eslint max-depth: ["error", 4] */
var sameOrigin = __webpack_require__(/*! same-origin */ "./node_modules/same-origin/index.js");
var parseHeaders = __webpack_require__(/*! parse-headers */ "./node_modules/parse-headers/parse-headers.js");
var noop = function noop() {
  /* intentional noop */
};

var win = window;
var XmlHttpRequest = win.XMLHttpRequest || noop;
var hasXhr2 = 'withCredentials' in new XmlHttpRequest();
var XDomainRequest = hasXhr2 ? XmlHttpRequest : win.XDomainRequest;
var adapter = 'xhr';

module.exports = function (context, callback) {
  var opts = context.options;
  var options = context.applyMiddleware('finalizeOptions', opts);
  var timers = {};

  // Deep-checking window.location because of react native, where `location` doesn't exist
  var cors = win && win.location && !sameOrigin(win.location.href, options.url);

  // Allow middleware to inject a response, for instance in the case of caching or mocking
  var injectedResponse = context.applyMiddleware('interceptRequest', undefined, {
    adapter: adapter,
    context: context
  });

  // If middleware injected a response, treat it as we normally would and return it
  // Do note that the injected response has to be reduced to a cross-environment friendly response
  if (injectedResponse) {
    var cbTimer = setTimeout(callback, 0, null, injectedResponse);
    var cancel = function cancel() {
      return clearTimeout(cbTimer);
    };
    return { abort: cancel };
  }

  // We'll want to null out the request on success/failure
  var xhr = cors ? new XDomainRequest() : new XmlHttpRequest();

  var isXdr = win.XDomainRequest && xhr instanceof win.XDomainRequest;
  var headers = options.headers;

  // Request state
  var aborted = false;
  var loaded = false;
  var timedOut = false;

  // Apply event handlers
  xhr.onerror = onError;
  xhr.ontimeout = onError;
  xhr.onabort = function () {
    aborted = true;
  };

  // IE9 must have onprogress be set to a unique function
  xhr.onprogress = function () {
    /* intentional noop */
  };

  var loadEvent = isXdr ? 'onload' : 'onreadystatechange';
  xhr[loadEvent] = function () {
    // Prevent request from timing out
    resetTimers();

    if (aborted || xhr.readyState !== 4 && !isXdr) {
      return;
    }

    // Will be handled by onError
    if (xhr.status === 0) {
      return;
    }

    onLoad();
  };

  // @todo two last options to open() is username/password
  xhr.open(options.method, options.url, true // Always async
  );

  // Some options need to be applied after open
  xhr.withCredentials = !!options.withCredentials;

  // Set headers
  if (headers && xhr.setRequestHeader) {
    for (var key in headers) {
      if (headers.hasOwnProperty(key)) {
        xhr.setRequestHeader(key, headers[key]);
      }
    }
  } else if (headers && isXdr) {
    throw new Error('Headers cannot be set on an XDomainRequest object');
  }

  if (options.rawBody) {
    xhr.responseType = 'arraybuffer';
  }

  // Let middleware know we're about to do a request
  context.applyMiddleware('onRequest', { options: options, adapter: adapter, request: xhr, context: context });

  xhr.send(options.body || null);

  // Figure out which timeouts to use (if any)
  var delays = options.timeout;
  if (delays) {
    timers.connect = setTimeout(function () {
      return timeoutRequest('ETIMEDOUT');
    }, delays.connect);
  }

  return { abort: abort };

  function abort() {
    aborted = true;

    if (xhr) {
      xhr.abort();
    }
  }

  function timeoutRequest(code) {
    timedOut = true;
    xhr.abort();
    var error = new Error(code === 'ESOCKETTIMEDOUT' ? 'Socket timed out on request to ' + options.url : 'Connection timed out on request to ' + options.url);
    error.code = code;
    context.channels.error.publish(error);
  }

  function resetTimers() {
    if (!delays) {
      return;
    }

    stopTimers();
    timers.socket = setTimeout(function () {
      return timeoutRequest('ESOCKETTIMEDOUT');
    }, delays.socket);
  }

  function stopTimers() {
    // Only clear the connect timeout if we've got a connection
    if (aborted || xhr.readyState >= 2 && timers.connect) {
      clearTimeout(timers.connect);
    }

    if (timers.socket) {
      clearTimeout(timers.socket);
    }
  }

  function onError() {
    if (loaded) {
      return;
    }

    // Clean up
    stopTimers();
    loaded = true;
    xhr = null;

    // Annoyingly, details are extremely scarce and hidden from us.
    // We only really know that it is a network error
    var err = new Error('Network error while attempting to reach ' + options.url);
    err.isNetworkError = true;
    err.request = options;
    callback(err);
  }

  function reduceResponse() {
    var statusCode = xhr.status;
    var statusMessage = xhr.statusText;

    if (isXdr && statusCode === undefined) {
      // IE8 CORS GET successful response doesn't have a status field, but body is fine
      statusCode = 200;
    } else if (statusCode > 12000 && statusCode < 12156) {
      // Yet another IE quirk where it emits weird status codes on network errors
      // https://support.microsoft.com/en-us/kb/193625
      return onError();
    } else {
      // Another IE bug where HTTP 204 somehow ends up as 1223
      statusCode = xhr.status === 1223 ? 204 : xhr.status;
      statusMessage = xhr.status === 1223 ? 'No Content' : statusMessage;
    }

    return {
      body: xhr.response || xhr.responseText,
      url: options.url,
      method: options.method,
      headers: isXdr ? {} : parseHeaders(xhr.getAllResponseHeaders()),
      statusCode: statusCode,
      statusMessage: statusMessage
    };
  }

  function onLoad() {
    if (aborted || loaded || timedOut) {
      return;
    }

    if (xhr.status === 0) {
      onError(new Error('Unknown XHR error'));
      return;
    }

    // Prevent being called twice
    stopTimers();
    loaded = true;
    callback(null, reduceResponse());
  }
};
//# sourceMappingURL=browser-request.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/request/index.js":
/*!**************************************************!*\
  !*** ./node_modules/get-it/lib/request/index.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./node-request */ "./node_modules/get-it/lib/request/browser-request.js");
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/util/global.js":
/*!************************************************!*\
  !*** ./node_modules/get-it/lib/util/global.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* eslint-disable no-negated-condition */
if (typeof window !== 'undefined') {
  module.exports = window;
} else if (typeof __webpack_require__.g !== 'undefined') {
  module.exports = __webpack_require__.g;
} else if (typeof self !== 'undefined') {
  module.exports = self;
} else {
  module.exports = {};
}
//# sourceMappingURL=global.js.map

/***/ }),

/***/ "./node_modules/get-it/lib/util/middlewareReducer.js":
/*!***********************************************************!*\
  !*** ./node_modules/get-it/lib/util/middlewareReducer.js ***!
  \***********************************************************/
/***/ (function(module) {

"use strict";


module.exports = function (middleware) {
  var applyMiddleware = function applyMiddleware(hook, defaultValue) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    var bailEarly = hook === 'onError';

    var value = defaultValue;
    for (var i = 0; i < middleware[hook].length; i++) {
      var handler = middleware[hook][i];
      value = handler.apply(undefined, [value].concat(args));

      if (bailEarly && !value) {
        break;
      }
    }

    return value;
  };

  return applyMiddleware;
};
//# sourceMappingURL=middlewareReducer.js.map

/***/ }),

/***/ "./node_modules/is-obj/index.js":
/*!**************************************!*\
  !*** ./node_modules/is-obj/index.js ***!
  \**************************************/
/***/ (function(module) {

"use strict";

module.exports = function (x) {
	var type = typeof x;
	return x !== null && (type === 'object' || type === 'function');
};


/***/ }),

/***/ "./node_modules/is-plain-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-plain-object/index.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(/*! isobject */ "./node_modules/isobject/index.js");

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),

/***/ "./node_modules/isobject/index.js":
/*!****************************************!*\
  !*** ./node_modules/isobject/index.js ***!
  \****************************************/
/***/ (function(module) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),

/***/ "./node_modules/make-error/index.js":
/*!******************************************!*\
  !*** ./node_modules/make-error/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

"use strict";
// ISC @ Julien Fontanet



// ===================================================================

var construct = typeof Reflect !== "undefined" ? Reflect.construct : undefined;
var defineProperty = Object.defineProperty;

// -------------------------------------------------------------------

var captureStackTrace = Error.captureStackTrace;
if (captureStackTrace === undefined) {
  captureStackTrace = function captureStackTrace(error) {
    var container = new Error();

    defineProperty(error, "stack", {
      configurable: true,
      get: function getStack() {
        var stack = container.stack;

        // Replace property with value for faster future accesses.
        defineProperty(this, "stack", {
          configurable: true,
          value: stack,
          writable: true,
        });

        return stack;
      },
      set: function setStack(stack) {
        defineProperty(error, "stack", {
          configurable: true,
          value: stack,
          writable: true,
        });
      },
    });
  };
}

// -------------------------------------------------------------------

function BaseError(message) {
  if (message !== undefined) {
    defineProperty(this, "message", {
      configurable: true,
      value: message,
      writable: true,
    });
  }

  var cname = this.constructor.name;
  if (cname !== undefined && cname !== this.name) {
    defineProperty(this, "name", {
      configurable: true,
      value: cname,
      writable: true,
    });
  }

  captureStackTrace(this, this.constructor);
}

BaseError.prototype = Object.create(Error.prototype, {
  // See: https://github.com/JsCommunity/make-error/issues/4
  constructor: {
    configurable: true,
    value: BaseError,
    writable: true,
  },
});

// -------------------------------------------------------------------

// Sets the name of a function if possible (depends of the JS engine).
var setFunctionName = (function() {
  function setFunctionName(fn, name) {
    return defineProperty(fn, "name", {
      configurable: true,
      value: name,
    });
  }
  try {
    var f = function() {};
    setFunctionName(f, "foo");
    if (f.name === "foo") {
      return setFunctionName;
    }
  } catch (_) {}
})();

// -------------------------------------------------------------------

function makeError(constructor, super_) {
  if (super_ == null || super_ === Error) {
    super_ = BaseError;
  } else if (typeof super_ !== "function") {
    throw new TypeError("super_ should be a function");
  }

  var name;
  if (typeof constructor === "string") {
    name = constructor;
    constructor =
      construct !== undefined
        ? function() {
            return construct(super_, arguments, this.constructor);
          }
        : function() {
            super_.apply(this, arguments);
          };

    // If the name can be set, do it once and for all.
    if (setFunctionName !== undefined) {
      setFunctionName(constructor, name);
      name = undefined;
    }
  } else if (typeof constructor !== "function") {
    throw new TypeError("constructor should be either a string or a function");
  }

  // Also register the super constructor also as `constructor.super_` just
  // like Node's `util.inherits()`.
  //
  // eslint-disable-next-line dot-notation
  constructor.super_ = constructor["super"] = super_;

  var properties = {
    constructor: {
      configurable: true,
      value: constructor,
      writable: true,
    },
  };

  // If the name could not be set on the constructor, set it on the
  // prototype.
  if (name !== undefined) {
    properties.name = {
      configurable: true,
      value: name,
      writable: true,
    };
  }
  constructor.prototype = Object.create(super_.prototype, properties);

  return constructor;
}
exports = module.exports = makeError;
exports.BaseError = BaseError;


/***/ }),

/***/ "./node_modules/nano-pubsub/index.js":
/*!*******************************************!*\
  !*** ./node_modules/nano-pubsub/index.js ***!
  \*******************************************/
/***/ (function(module) {

module.exports = function Pubsub() {
  var subscribers = []
  return {
    subscribe: subscribe,
    publish: publish
  }
  function subscribe(subscriber) {
    subscribers.push(subscriber)
    return function unsubscribe() {
      var idx = subscribers.indexOf(subscriber)
      if (idx > -1) {
        subscribers.splice(idx, 1)
      }
    }
  }
  function publish() {
    for (var i = 0; i < subscribers.length; i++) {
      subscribers[i].apply(null, arguments)
    }
  }
}

/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var t,e=(t=__webpack_require__(/*! querystring */ "./node_modules/querystring/index.js"))&&"object"==typeof t&&"default"in t?t.default:t,o=/https?|ftp|gopher|file/;function r(t){"string"==typeof t&&(t=d(t));var r=function(t,e,o){var r=t.auth,a=t.hostname,s=t.protocol||"",p=t.pathname||"",n=t.hash||"",c=t.query||"",h=!1;r=r?encodeURIComponent(r).replace(/%3A/i,":")+"@":"",t.host?h=r+t.host:a&&(h=r+(~a.indexOf(":")?"["+a+"]":a),t.port&&(h+=":"+t.port)),c&&"object"==typeof c&&(c=e.encode(c));var l=t.search||c&&"?"+c||"";return s&&":"!==s.substr(-1)&&(s+=":"),t.slashes||(!s||o.test(s))&&!1!==h?(h="//"+(h||""),p&&"/"!==p[0]&&(p="/"+p)):h||(h=""),n&&"#"!==n[0]&&(n="#"+n),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:h,pathname:p=p.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:n}}(t,e,o);return""+r.protocol+r.host+r.pathname+r.search+r.hash}var a="http://",s="w.w",p=a+s,n=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,c=/https?|ftp|gopher|file/;function h(t,e){var o="string"==typeof t?d(t):t;t="object"==typeof t?r(t):t;var s=d(e),h="";o.protocol&&!o.slashes&&(h=o.protocol,t=t.replace(o.protocol,""),h+="/"===e[0]||"/"===t[0]?"/":""),h&&s.protocol&&(h="",s.slashes||(h=s.protocol,e=e.replace(s.protocol,"")));var l=t.match(n);l&&!s.protocol&&(t=t.substr((h=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(e)&&(h=h.slice(0,-1)));var i=new URL(t,p+"/"),u=new URL(e,i).toString().replace(p,""),f=s.protocol||o.protocol;return f+=o.slashes||s.slashes?"//":"",!h&&f?u=u.replace(a,f):h&&(u=u.replace(a,"")),c.test(u)||~e.indexOf(".")||"/"===t.slice(-1)||"/"===e.slice(-1)||"/"!==u.slice(-1)||(u=u.slice(0,-1)),h&&(u=h+("/"===u[0]?u.substr(1):u)),u}function l(){}l.prototype.parse=d,l.prototype.format=r,l.prototype.resolve=h,l.prototype.resolveObject=h;var i=/^https?|ftp|gopher|file/,u=/^(.*?)([#?].*)/,f=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(t,o,a){if(void 0===o&&(o=!1),void 0===a&&(a=!1),t&&"object"==typeof t&&t instanceof l)return t;var n=(t=t.trim()).match(u);t=n?n[1].replace(/\\/g,"/")+n[2]:t.replace(/\\/g,"/"),v.test(t)&&"/"!==t.slice(-1)&&(t+="/");var c=!/(^javascript)/.test(t)&&t.match(f),h=m.test(t),d="";c&&(i.test(c[1])||(d=c[1].toLowerCase(),t=""+c[2]+c[3]),c[2]||(h=!1,i.test(c[1])?(d=c[1],t=""+c[3]):t="//"+c[3]),3!==c[2].length&&1!==c[2].length||(d=c[1],t="/"+c[3]));var g,y=(n?n[1]:t).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),b=y&&y[1],C=new l,U="",j="";try{g=new URL(t)}catch(e){U=e,d||a||!/^\/\//.test(t)||/^\/\/.+[@.]/.test(t)||(j="/",t=t.substr(1));try{g=new URL(t,p)}catch(t){return C.protocol=d,C.href=d,C}}C.slashes=h&&!j,C.host=g.host===s?"":g.host,C.hostname=g.hostname===s?"":g.hostname.replace(/(\[|\])/g,""),C.protocol=U?d||null:g.protocol,C.search=g.search.replace(/\\/g,"%5C"),C.hash=g.hash.replace(/\\/g,"%5C");var w=t.split("#");!C.search&&~w[0].indexOf("?")&&(C.search="?"),C.hash||""!==w[1]||(C.hash="#"),C.query=o?e.decode(g.search.substr(1)):C.search.substr(1),C.pathname=j+(c?function(t){return t.replace(/['^|`]/g,function(t){return"%"+t.charCodeAt().toString(16).toUpperCase()}).replace(/((?:%[0-9A-F]{2})+)/g,function(t,e){try{return decodeURIComponent(e).split("").map(function(t){var e=t.charCodeAt();return e>256||/^[a-z0-9]$/i.test(t)?t:"%"+e.toString(16).toUpperCase()}).join("")}catch(t){return e}})}(g.pathname):g.pathname),"about:"===C.protocol&&"blank"===C.pathname&&(C.protocol="",C.pathname=""),U&&"/"!==t[0]&&(C.pathname=C.pathname.substr(1)),d&&!i.test(d)&&"/"!==t.slice(-1)&&"/"===C.pathname&&(C.pathname=""),C.path=C.pathname+C.search,C.auth=[g.username,g.password].map(decodeURIComponent).filter(Boolean).join(":"),C.port=g.port,b&&!C.host.endsWith(b)&&(C.host+=b,C.port=b.slice(1)),C.href=j?""+C.pathname+C.search+C.hash:r(C);var x=/^(file)/.test(C.href)?["host","hostname"]:[];return Object.keys(C).forEach(function(t){~x.indexOf(t)||(C[t]=C[t]||null)}),C}exports.parse=d,exports.format=r,exports.resolve=h,exports.resolveObject=function(t,e){return d(h(t,e))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/parse-headers/parse-headers.js":
/*!*****************************************************!*\
  !*** ./node_modules/parse-headers/parse-headers.js ***!
  \*****************************************************/
/***/ (function(module) {

var trim = function(string) {
  return string.replace(/^\s+|\s+$/g, '');
}
  , isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

module.exports = function (headers) {
  if (!headers)
    return {}

  var result = {}

  var headersArr = trim(headers).split('\n')

  for (var i = 0; i < headersArr.length; i++) {
    var row = headersArr[i]
    var index = row.indexOf(':')
    , key = trim(row.slice(0, index)).toLowerCase()
    , value = trim(row.slice(index + 1))

    if (typeof(result[key]) === 'undefined') {
      result[key] = value
    } else if (isArray(result[key])) {
      result[key].push(value)
    } else {
      result[key] = [ result[key], value ]
    }
  }

  return result
}


/***/ }),

/***/ "./node_modules/querystring/decode.js":
/*!********************************************!*\
  !*** ./node_modules/querystring/decode.js ***!
  \********************************************/
/***/ (function(module) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (Array.isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};


/***/ }),

/***/ "./node_modules/querystring/encode.js":
/*!********************************************!*\
  !*** ./node_modules/querystring/encode.js ***!
  \********************************************/
/***/ (function(module) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return Object.keys(obj).map(function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (Array.isArray(obj[k])) {
        return obj[k].map(function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).filter(Boolean).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};


/***/ }),

/***/ "./node_modules/querystring/index.js":
/*!*******************************************!*\
  !*** ./node_modules/querystring/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring/encode.js");


/***/ }),

/***/ "./node_modules/querystringify/index.js":
/*!**********************************************!*\
  !*** ./node_modules/querystringify/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */
function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}

/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */
function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?#&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //
    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encode(key);
      value = encode(value);

      //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //
      if (key === null || value === null) continue;
      pairs.push(key +'='+ value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),

/***/ "./node_modules/requires-port/index.js":
/*!*********************************************!*\
  !*** ./node_modules/requires-port/index.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),

/***/ "./node_modules/rxjs/internal/Observable.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Observable.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var canReportError_1 = __webpack_require__(/*! ./util/canReportError */ "./node_modules/rxjs/internal/util/canReportError.js");
var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/rxjs/internal/util/toSubscriber.js");
var observable_1 = __webpack_require__(/*! ./symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
var pipe_1 = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var Observable = (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError_1.canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observer.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscriber.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var Observer_1 = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/internal/Observer.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscription.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var isArray_1 = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isObject_1 = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            if (_ctorUnsubscribe) {
                this._unsubscribe = undefined;
            }
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/config.js":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/empty.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/empty.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
exports.EMPTY = new Observable_1.Observable(function (subscriber) { return subscriber.complete(); });
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
}
exports.empty = empty;
function emptyScheduled(scheduler) {
    return new Observable_1.Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/defaultIfEmpty.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/defaultIfEmpty.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function defaultIfEmpty(defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    return function (source) { return source.lift(new DefaultIfEmptyOperator(defaultValue)); };
}
exports.defaultIfEmpty = defaultIfEmpty;
var DefaultIfEmptyOperator = (function () {
    function DefaultIfEmptyOperator(defaultValue) {
        this.defaultValue = defaultValue;
    }
    DefaultIfEmptyOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
    };
    return DefaultIfEmptyOperator;
}());
var DefaultIfEmptySubscriber = (function (_super) {
    __extends(DefaultIfEmptySubscriber, _super);
    function DefaultIfEmptySubscriber(destination, defaultValue) {
        var _this = _super.call(this, destination) || this;
        _this.defaultValue = defaultValue;
        _this.isEmpty = true;
        return _this;
    }
    DefaultIfEmptySubscriber.prototype._next = function (value) {
        this.isEmpty = false;
        this.destination.next(value);
    };
    DefaultIfEmptySubscriber.prototype._complete = function () {
        if (this.isEmpty) {
            this.destination.next(this.defaultValue);
        }
        this.destination.complete();
    };
    return DefaultIfEmptySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=defaultIfEmpty.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/filter.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/filter.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
    };
}
exports.filter = filter;
var FilterOperator = (function () {
    function FilterOperator(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator;
}());
var FilterSubscriber = (function (_super) {
    __extends(FilterSubscriber, _super);
    function FilterSubscriber(destination, predicate, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.count = 0;
        return _this;
    }
    FilterSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.destination.next(value);
        }
    };
    return FilterSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/map.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/map.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
exports.map = map;
var MapOperator = (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());
exports.MapOperator = MapOperator;
var MapSubscriber = (function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/reduce.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/reduce.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var scan_1 = __webpack_require__(/*! ./scan */ "./node_modules/rxjs/internal/operators/scan.js");
var takeLast_1 = __webpack_require__(/*! ./takeLast */ "./node_modules/rxjs/internal/operators/takeLast.js");
var defaultIfEmpty_1 = __webpack_require__(/*! ./defaultIfEmpty */ "./node_modules/rxjs/internal/operators/defaultIfEmpty.js");
var pipe_1 = __webpack_require__(/*! ../util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
function reduce(accumulator, seed) {
    if (arguments.length >= 2) {
        return function reduceOperatorFunctionWithSeed(source) {
            return pipe_1.pipe(scan_1.scan(accumulator, seed), takeLast_1.takeLast(1), defaultIfEmpty_1.defaultIfEmpty(seed))(source);
        };
    }
    return function reduceOperatorFunction(source) {
        return pipe_1.pipe(scan_1.scan(function (acc, value, index) { return accumulator(acc, value, index + 1); }), takeLast_1.takeLast(1))(source);
    };
}
exports.reduce = reduce;
//# sourceMappingURL=reduce.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/scan.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/scan.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function scan(accumulator, seed) {
    var hasSeed = false;
    if (arguments.length >= 2) {
        hasSeed = true;
    }
    return function scanOperatorFunction(source) {
        return source.lift(new ScanOperator(accumulator, seed, hasSeed));
    };
}
exports.scan = scan;
var ScanOperator = (function () {
    function ScanOperator(accumulator, seed, hasSeed) {
        if (hasSeed === void 0) { hasSeed = false; }
        this.accumulator = accumulator;
        this.seed = seed;
        this.hasSeed = hasSeed;
    }
    ScanOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
    };
    return ScanOperator;
}());
var ScanSubscriber = (function (_super) {
    __extends(ScanSubscriber, _super);
    function ScanSubscriber(destination, accumulator, _seed, hasSeed) {
        var _this = _super.call(this, destination) || this;
        _this.accumulator = accumulator;
        _this._seed = _seed;
        _this.hasSeed = hasSeed;
        _this.index = 0;
        return _this;
    }
    Object.defineProperty(ScanSubscriber.prototype, "seed", {
        get: function () {
            return this._seed;
        },
        set: function (value) {
            this.hasSeed = true;
            this._seed = value;
        },
        enumerable: true,
        configurable: true
    });
    ScanSubscriber.prototype._next = function (value) {
        if (!this.hasSeed) {
            this.seed = value;
            this.destination.next(value);
        }
        else {
            return this._tryNext(value);
        }
    };
    ScanSubscriber.prototype._tryNext = function (value) {
        var index = this.index++;
        var result;
        try {
            result = this.accumulator(this.seed, value, index);
        }
        catch (err) {
            this.destination.error(err);
        }
        this.seed = result;
        this.destination.next(result);
    };
    return ScanSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=scan.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/takeLast.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/takeLast.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var ArgumentOutOfRangeError_1 = __webpack_require__(/*! ../util/ArgumentOutOfRangeError */ "./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js");
var empty_1 = __webpack_require__(/*! ../observable/empty */ "./node_modules/rxjs/internal/observable/empty.js");
function takeLast(count) {
    return function takeLastOperatorFunction(source) {
        if (count === 0) {
            return empty_1.empty();
        }
        else {
            return source.lift(new TakeLastOperator(count));
        }
    };
}
exports.takeLast = takeLast;
var TakeLastOperator = (function () {
    function TakeLastOperator(total) {
        this.total = total;
        if (this.total < 0) {
            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
        }
    }
    TakeLastOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
    };
    return TakeLastOperator;
}());
var TakeLastSubscriber = (function (_super) {
    __extends(TakeLastSubscriber, _super);
    function TakeLastSubscriber(destination, total) {
        var _this = _super.call(this, destination) || this;
        _this.total = total;
        _this.ring = new Array();
        _this.count = 0;
        return _this;
    }
    TakeLastSubscriber.prototype._next = function (value) {
        var ring = this.ring;
        var total = this.total;
        var count = this.count++;
        if (ring.length < total) {
            ring.push(value);
        }
        else {
            var index = count % total;
            ring[index] = value;
        }
    };
    TakeLastSubscriber.prototype._complete = function () {
        var destination = this.destination;
        var count = this.count;
        if (count > 0) {
            var total = this.count >= this.total ? this.total : this.count;
            var ring = this.ring;
            for (var i = 0; i < total; i++) {
                var idx = (count++) % total;
                destination.next(ring[idx]);
            }
        }
        destination.complete();
    };
    return TakeLastSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=takeLast.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/observable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.observable = (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rxSubscriber = (function () {
    return typeof Symbol === 'function'
        ? Symbol('rxSubscriber')
        : '@@rxSubscriber_' + Math.random();
})();
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var ArgumentOutOfRangeErrorImpl = (function () {
    function ArgumentOutOfRangeErrorImpl() {
        Error.call(this);
        this.message = 'argument out of range';
        this.name = 'ArgumentOutOfRangeError';
        return this;
    }
    ArgumentOutOfRangeErrorImpl.prototype = Object.create(Error.prototype);
    return ArgumentOutOfRangeErrorImpl;
})();
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var UnsubscriptionErrorImpl = (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/canReportError.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber_1.Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
exports.canReportError = canReportError;
//# sourceMappingURL=canReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/hostReportError.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/identity.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/identity.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function identity(x) {
    return x;
}
exports.identity = identity;
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isArray = (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function isObject(x) {
    return x !== null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/pipe.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/pipe.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var identity_1 = __webpack_require__(/*! ./identity */ "./node_modules/rxjs/internal/util/identity.js");
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity_1.identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/toSubscriber.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var Observer_1 = __webpack_require__(/*! ../Observer */ "./node_modules/rxjs/internal/Observer.js");
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ "./node_modules/same-origin/index.js":
/*!*******************************************!*\
  !*** ./node_modules/same-origin/index.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var url = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

module.exports = function(uri1, uri2, ieMode) {
    if (uri1 === uri2) {
        return true;
    }

    var url1 = url.parse(uri1, false, true);
    var url2 = url.parse(uri2, false, true);

    var url1Port = url1.port|0 || (url1.protocol === 'https' ? 443 : 80);
    var url2Port = url2.port|0 || (url2.protocol === 'https' ? 443 : 80);

    var match = {
        proto: url1.protocol === url2.protocol,
        hostname: url1.hostname === url2.hostname,
        port: url1Port === url2Port
    };

    return ((match.proto && match.hostname) && (match.port || ieMode));
};

/***/ }),

/***/ "./node_modules/url-parse/index.js":
/*!*****************************************!*\
  !*** ./node_modules/url-parse/index.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var required = __webpack_require__(/*! requires-port */ "./node_modules/requires-port/index.js")
  , qs = __webpack_require__(/*! querystringify */ "./node_modules/querystringify/index.js")
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:[\\/]+/
  , protocolre = /^([a-z][a-z0-9.+-]*:)?([\\/]{1,})?([\S\s]*)/i
  , whitespace = '[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]'
  , left = new RegExp('^'+ whitespace +'+');

/**
 * Trim a given string.
 *
 * @param {String} str String to trim.
 * @public
 */
function trimLeft(str) {
  return (str ? str : '').toString().replace(left, '');
}

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;
  else if (typeof __webpack_require__.g !== 'undefined') globalVar = __webpack_require__.g;
  else if (typeof self !== 'undefined') globalVar = self;
  else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  address = trimLeft(address);

  var match = protocolre.exec(address)
    , protocol = match[1] ? match[1].toLowerCase() : ''
    , slashes = !!(match[2] && match[2].length >= 2)
    , rest =  match[2] && match[2].length === 1 ? '/' + match[3] : match[3];

  return {
    protocol: protocol,
    slashes: slashes,
    rest: rest
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  if (relative === '') return base;

  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  address = trimLeft(address);

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // Default to a / for pathname if none exists. This normalizes the URL
  // to always have a /
  //
  if (url.pathname.charAt(0) !== '/' && url.hostname) {
    url.pathname = '/' + url.pathname;
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = qs;

module.exports = Url;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hvbWVCYW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AcmV4eGFycy9ldmVudHNvdXJjZS1wb2x5ZmlsbC9zcmMvZXZlbnRzb3VyY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvYXNzZXRzL2Fzc2V0c0NsaWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi9hdXRoL2F1dGhDbGllbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvY29uZmlnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL2RhdGEvZGF0YU1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvZGF0YS9lbmNvZGVRdWVyeVN0cmluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi9kYXRhL2xpc3Rlbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi9kYXRhL3BhdGNoLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL2RhdGEvdHJhbnNhY3Rpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvZGF0YXNldHMvZGF0YXNldHNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvaHR0cC9icm93c2VyTWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi9odHRwL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi9odHRwL3F1ZXJ5U3RyaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL2h0dHAvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi9odHRwL3JlcXVlc3RPcHRpb25zLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL3Byb2plY3RzL3Byb2plY3RzQ2xpZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL3Nhbml0eUNsaWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi91c2Vycy91c2Vyc0NsaWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi91dGlsL2RlZmF1bHRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL3V0aWwvZ2V0U2VsZWN0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9jbGllbnQvbGliL3V0aWwvb25jZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi91dGlsL3BpY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L2NsaWVudC9saWIvdmFsaWRhdG9ycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvY2xpZW50L2xpYi93YXJuaW5ncy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvZXZlbnRzb3VyY2UvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvZ2VuZXJhdGUtaGVscC11cmwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L29ic2VydmFibGUvbGliL1Nhbml0eU9ic2VydmFibGVNaW5pbWFsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9vYnNlcnZhYmxlL21pbmltYWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2FuaXR5L29ic2VydmFibGUvb3BlcmF0b3JzL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzYW5pdHkvb2JzZXJ2YWJsZS9vcGVyYXRvcnMvbWFwLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNhbml0eS9vYnNlcnZhYmxlL29wZXJhdG9ycy9yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9kZWVwLWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dldC1pdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dldC1pdC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9nZXQtaXQvbGliL21pZGRsZXdhcmUvZGVmYXVsdE9wdGlvbnNQcm9jZXNzb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9nZXQtaXQvbGliL21pZGRsZXdhcmUvZGVmYXVsdE9wdGlvbnNWYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9nZXQtaXQvbGliL21pZGRsZXdhcmUvanNvblJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9nZXQtaXQvbGliL21pZGRsZXdhcmUvanNvblJlc3BvbnNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ2V0LWl0L2xpYi9taWRkbGV3YXJlL29ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9nZXQtaXQvbGliL21pZGRsZXdhcmUvcHJvZ3Jlc3MvYnJvd3Nlci1wcm9ncmVzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dldC1pdC9saWIvbWlkZGxld2FyZS9wcm9ncmVzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2dldC1pdC9saWIvcmVxdWVzdC9icm93c2VyLXJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9nZXQtaXQvbGliL3JlcXVlc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9nZXQtaXQvbGliL3V0aWwvZ2xvYmFsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ2V0LWl0L2xpYi91dGlsL21pZGRsZXdhcmVSZWR1Y2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaXMtb2JqL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaXMtcGxhaW4tb2JqZWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaXNvYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYWtlLWVycm9yL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmFuby1wdWJzdWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uYXRpdmUtdXJsL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wYXJzZS1oZWFkZXJzL3BhcnNlLWhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5naWZ5L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVxdWlyZXMtcG9ydC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvT2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL1N1YnNjcmliZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL1N1YnNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvY29uZmlnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL2VtcHR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZGVmYXVsdElmRW1wdHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29wZXJhdG9ycy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29wZXJhdG9ycy9tYXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29wZXJhdG9ycy9yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL29wZXJhdG9ycy9zY2FuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvdGFrZUxhc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3N5bWJvbC9vYnNlcnZhYmxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC9zeW1ib2wvcnhTdWJzY3JpYmVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL0FyZ3VtZW50T3V0T2ZSYW5nZUVycm9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL1Vuc3Vic2NyaXB0aW9uRXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvY2FuUmVwb3J0RXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvaG9zdFJlcG9ydEVycm9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL2lkZW50aXR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yeGpzL2ludGVybmFsL3V0aWwvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3J4anMvaW50ZXJuYWwvdXRpbC9waXBlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcnhqcy9pbnRlcm5hbC91dGlsL3RvU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3NhbWUtb3JpZ2luL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdXJsLXBhcnNlL2luZGV4LmpzIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsInByb2plY3RJZCIsImRhdGFzZXQiLCJ1c2VDZG4iLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJpbWFnZSIsIkhvbWVCYW5uZXIiLCJjdWRhUmlkZ2UiLCJnZXRTdGF0aWNQcm9wcyIsIndpbmVyeSIsInByb3BzIiwicHJldmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSwrREFBZUEscURBQVksQ0FBQztBQUMxQkMsV0FBUyxFQUFFLFVBRGU7QUFDSDtBQUN2QkMsU0FBTyxFQUFFLFlBRmlCO0FBRUg7QUFDdkJDLFFBQU0sRUFBRSxJQUhrQixDQUdiOztBQUhhLENBQUQsQ0FBM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ0ZBO0FBRUE7QUFHQTs7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsTUFBVCxDQUFpQkMsTUFBakIsRUFBeUI7QUFDckIsU0FBT0Msd0RBQWUsQ0FBQ0MsNENBQUQsQ0FBZixDQUF3QkMsS0FBeEIsQ0FBOEJILE1BQTlCLENBQVA7QUFDSCxDLENBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVKLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWlCO0FBQUEsTUFBZkMsU0FBZSxRQUFmQSxTQUFlO0FBR2hDLHNCQUNJLDhEQUFDLGtEQUFEO0FBQ0EsYUFBUyxFQUFHLEtBRFosQ0FFQTtBQUNBOztBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FE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QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUMxa0JZOztBQUViLGlDQUFpQywySEFBMkg7O0FBRTVKLDZCQUE2QixrS0FBa0s7O0FBRS9MLGlEQUFpRCxnQkFBZ0IsZ0VBQWdFLHdEQUF3RCw2REFBNkQsc0RBQXNELGtIQUFrSDs7QUFFOVosc0NBQXNDLHVEQUF1RCx1Q0FBdUMsU0FBUyxPQUFPLGtCQUFrQixFQUFFLGFBQWE7O0FBRXJMLHdDQUF3QyxnRkFBZ0YsZUFBZSxlQUFlLGdCQUFnQixvQkFBb0IsTUFBTSwwQ0FBMEMsK0JBQStCLGFBQWEscUJBQXFCLG1DQUFtQyxFQUFFLEVBQUUsY0FBYyxXQUFXLFVBQVUsRUFBRSxVQUFVLE1BQU0saURBQWlELEVBQUUsVUFBVSxrQkFBa0IsRUFBRSxFQUFFLGFBQWE7O0FBRXZlLCtCQUErQixvQ0FBb0M7O0FBRW5FLGFBQWEsbUJBQU8sQ0FBQyxnRkFBZTs7QUFFcEMsZUFBZSxtQkFBTyxDQUFDLDRGQUFrQztBQUN6RDs7QUFFQSxnQkFBZ0IsbUJBQU8sQ0FBQyxrR0FBcUM7QUFDN0Q7O0FBRUEsa0JBQWtCLG1CQUFPLENBQUMsa0ZBQXFCOztBQUUvQyxpQkFBaUIsbUJBQU8sQ0FBQyxzRUFBZTs7QUFFeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsZ0NBQWdDO0FBQzlDLGNBQWMsT0FBTztBQUNyQixjQUFjLFFBQVE7QUFDdEIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxNQUFNO0FBQ3BCO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckI7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sS0FBSztBQUNaO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNkNBQTZDLElBQUk7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDhCOzs7Ozs7Ozs7OztBQzVLYTs7QUFFYixhQUFhLG1CQUFPLENBQUMsZ0ZBQWU7O0FBRXBDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0QsNEI7Ozs7Ozs7Ozs7O0FDckJhOztBQUViLHNCQUFzQixtQkFBTyxDQUFDLG9GQUEyQjs7QUFFekQsYUFBYSxtQkFBTyxDQUFDLGdGQUFlOztBQUVwQyxlQUFlLG1CQUFPLENBQUMscUVBQWM7O0FBRXJDLGVBQWUsbUJBQU8sQ0FBQyxpRUFBWTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsaUJBQWlCOztBQUV0QyxrQkFBa0I7QUFDbEIsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTs7QUFFM0M7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUMxR2E7O0FBRWIsMkNBQTJDLGtCQUFrQixrQ0FBa0MscUVBQXFFLEVBQUUsRUFBRSxPQUFPLGtCQUFrQixFQUFFLFlBQVk7O0FBRS9NLGFBQWEsbUJBQU8sQ0FBQyxnRkFBZTs7QUFFcEMsZUFBZSxtQkFBTyxDQUFDLGtHQUFxQztBQUM1RDs7QUFFQSxnQkFBZ0IsbUJBQU8sQ0FBQyw0RkFBa0M7QUFDMUQ7O0FBRUEsaUJBQWlCLG1CQUFPLENBQUMsc0VBQWU7O0FBRXhDLG1CQUFtQixtQkFBTyxDQUFDLG9GQUFzQjs7QUFFakQsd0JBQXdCLG1CQUFPLENBQUMsd0ZBQXFCOztBQUVyRCxrQkFBa0IsbUJBQU8sQ0FBQyw0RUFBZTs7QUFFekMsWUFBWSxtQkFBTyxDQUFDLGdFQUFTOztBQUU3QixhQUFhLG1CQUFPLENBQUMsa0VBQVU7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDJDQUEyQztBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUNsTmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRTs7Ozs7Ozs7Ozs7QUNsQmE7O0FBRWIsYUFBYSxtQkFBTyxDQUFDLGdGQUFlOztBQUVwQyxpQkFBaUIsbUJBQU8sQ0FBQyxnRkFBNEI7O0FBRXJELDRCQUE0QixtQkFBTyxDQUFDLDBFQUFxQjs7QUFFekQsV0FBVyxtQkFBTyxDQUFDLG9FQUFjOztBQUVqQyxlQUFlLG1CQUFPLENBQUMsNEVBQWtCOztBQUV6Qyx3QkFBd0IsbUJBQU8sQ0FBQyx3RkFBcUI7O0FBRXJELHNCQUFzQixtQkFBTyxDQUFDLG9GQUEyQjs7QUFFekQsV0FBVyxtQkFBTyxDQUFDLG9FQUFjOztBQUVqQywwS0FBMEs7O0FBRTFLO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCOztBQUV0QjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDcExhOztBQUViLDJDQUEyQyxrQkFBa0Isa0NBQWtDLHFFQUFxRSxFQUFFLEVBQUUsT0FBTyxrQkFBa0IsRUFBRSxZQUFZOztBQUUvTSxpQkFBaUIsbUJBQU8sQ0FBQyx3REFBYTs7QUFFdEMsYUFBYSxtQkFBTyxDQUFDLGdGQUFlOztBQUVwQyxtQkFBbUIsbUJBQU8sQ0FBQyxvRkFBc0I7O0FBRWpELGVBQWUsbUJBQU8sQ0FBQyxzRUFBZTs7QUFFdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUMsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsdUVBQXVFO0FBQ3ZFLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0I7QUFDL0I7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxQ0FBcUMsZUFBZSxvQ0FBb0M7QUFDdkg7QUFDQTtBQUNBLENBQUM7QUFDRCx1Qjs7Ozs7Ozs7Ozs7QUNwSWE7O0FBRWIsMkNBQTJDLGtCQUFrQixrQ0FBa0MscUVBQXFFLEVBQUUsRUFBRSxPQUFPLGtCQUFrQixFQUFFLFlBQVk7O0FBRS9NLGFBQWEsbUJBQU8sQ0FBQyxnRkFBZTs7QUFFcEMsaUJBQWlCLG1CQUFPLENBQUMsc0VBQWU7O0FBRXhDLFlBQVksbUJBQU8sQ0FBQyxnRUFBUzs7QUFFN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLDhDQUE4QyxzREFBc0QsVUFBVTs7QUFFOUc7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUssd0JBQXdCLFVBQVUsT0FBTyxXQUFXOzs7QUFHekQ7QUFDQSxtREFBbUQ7O0FBRW5EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHFDQUFxQztBQUMxQyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDZCOzs7Ozs7Ozs7OztBQ2xIYTs7QUFFYixhQUFhLG1CQUFPLENBQUMsZ0ZBQWU7O0FBRXBDLGVBQWUsbUJBQU8sQ0FBQyxzRUFBZTs7QUFFdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0QsZ0M7Ozs7Ozs7Ozs7O0FDbENhOztBQUViLG9COzs7Ozs7Ozs7OztBQ0ZhOztBQUViLGdCQUFnQixtQkFBTyxDQUFDLHNEQUFZOztBQUVwQyxhQUFhLG1CQUFPLENBQUMsZ0ZBQWU7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDRCQUE0QiwyQkFBMkI7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBLEdBQUcsNEJBQTRCLFFBQVEsZ0NBQWdDOzs7QUFHdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLG1CQUFtQixlOzs7Ozs7Ozs7OztBQ3pETjs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7OztBQ1phOztBQUViO0FBQ0EsWUFBWSxtQkFBTyxDQUFDLDhDQUFROztBQUU1QixhQUFhLG1CQUFPLENBQUMsZ0ZBQWU7O0FBRXBDLGlCQUFpQixtQkFBTyxDQUFDLDRGQUFrQzs7QUFFM0Qsa0JBQWtCLG1CQUFPLENBQUMsOEZBQW1DOztBQUU3RCxtQkFBbUIsbUJBQU8sQ0FBQyxnR0FBb0M7O0FBRS9ELGVBQWUsbUJBQU8sQ0FBQyw4RkFBZ0M7O0FBRXZELGlCQUFpQixtQkFBTyxDQUFDLGdGQUE0Qjs7QUFFckQsZUFBZSxtQkFBTyxDQUFDLGtFQUFVO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBLEVBQUU7O0FBRUYsa0JBQWtCLG1CQUFPLENBQUMscUZBQWtCOztBQUU1QztBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCOzs7Ozs7Ozs7OztBQzdEYTs7QUFFYixhQUFhLG1CQUFPLENBQUMsZ0ZBQWU7O0FBRXBDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixzQkFBc0Isa0NBQWtDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFOzs7Ozs7Ozs7OztBQzNCYTs7QUFFYixhQUFhLG1CQUFPLENBQUMsZ0ZBQWU7O0FBRXBDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNELGdDOzs7Ozs7Ozs7OztBQ3BCYTs7QUFFYixhQUFhLG1CQUFPLENBQUMsZ0ZBQWU7O0FBRXBDLGVBQWUsbUJBQU8sQ0FBQyxrR0FBcUM7QUFDNUQ7O0FBRUEsZ0JBQWdCLG1CQUFPLENBQUMsNEZBQWtDO0FBQzFEOztBQUVBLFlBQVksbUJBQU8sQ0FBQyxxRUFBYzs7QUFFbEMsa0JBQWtCLG1CQUFPLENBQUMsaUZBQW9COztBQUU5QyxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBb0I7O0FBRTlDLHFCQUFxQixtQkFBTyxDQUFDLCtGQUEyQjs7QUFFeEQscUJBQXFCLG1CQUFPLENBQUMsK0ZBQTJCOztBQUV4RCxtQkFBbUIsbUJBQU8sQ0FBQyx1RkFBdUI7O0FBRWxELGtCQUFrQixtQkFBTyxDQUFDLG1GQUFxQjs7QUFFL0MsaUJBQWlCLG1CQUFPLENBQUMsK0VBQW1COztBQUU1QyxrQkFBa0IsbUJBQU8sQ0FBQyx5RUFBZ0I7O0FBRTFDLHdCQUF3QixtQkFBTyxDQUFDLHVGQUF1Qjs7QUFFdkQsZ0JBQWdCLG1CQUFPLENBQUMsNkRBQVU7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUEscUVBQXFFO0FBQ3JFO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Qjs7Ozs7Ozs7Ozs7QUNsSGE7O0FBRWIsYUFBYSxtQkFBTyxDQUFDLGdGQUFlOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0QsNkI7Ozs7Ozs7Ozs7O0FDZmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLElBQUk7QUFDUCxFOzs7Ozs7Ozs7OztBQ1BhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQ2pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDZGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxJQUFJO0FBQ1AsRTs7Ozs7Ozs7Ozs7QUNYYTs7QUFFYix1QkFBdUIsMkJBQTJCLDJFQUEyRSxrQ0FBa0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLGtDQUFrQyw4SEFBOEgsR0FBRyxFQUFFLHFCQUFxQjs7QUFFeFg7QUFDQTs7QUFFQSxlQUFlO0FBQ2Ysb0JBQW9CLEVBQUUsTUFBTSxLQUFLLFVBQVUsRUFBRSxNQUFNLEtBQUs7QUFDeEQ7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUN0RWE7O0FBRWIsc0JBQXNCLG1CQUFPLENBQUMsb0ZBQTJCOztBQUV6RCxXQUFXLG1CQUFPLENBQUMsbUVBQWE7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlFQUF5RSxhQUFhO0FBQ3RGO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkIsZ0NBQWdDO0FBQ2hDLDRCQUE0QjtBQUM1Qix5Q0FBeUMsK0o7Ozs7Ozs7Ozs7QUN2QnpDO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLHNHQUErQjs7QUFFakQ7Ozs7Ozs7Ozs7O0FDSEE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKYTs7QUFFYixlQUFlLG1CQUFPLENBQUMsNEVBQTBCO0FBQ2pEOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxnRkFBZTs7QUFFcEMsZ0JBQWdCLG1CQUFPLENBQUMsNEVBQWtCO0FBQzFDOztBQUVBLGdCQUFnQixtQkFBTyxDQUFDLGtGQUFxQjtBQUM3Qzs7QUFFQSxnQkFBZ0IsbUJBQU8sQ0FBQyxrRkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDOzs7Ozs7Ozs7O0FDdkRBLDZJQUF5RDs7Ozs7Ozs7Ozs7QUNBekQscUlBQWlFOzs7Ozs7Ozs7OztBQ0FqRSx5SEFBd0Q7Ozs7Ozs7Ozs7O0FDQXhELHFJQUFpRTs7Ozs7Ozs7Ozs7O0FDQXBEO0FBQ2IsWUFBWSxtQkFBTyxDQUFDLDhDQUFRO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ25FQSw0RkFBc0M7Ozs7Ozs7Ozs7OztBQ0F6Qjs7QUFFYixhQUFhLG1CQUFPLENBQUMsd0RBQWE7QUFDbEMsd0JBQXdCLG1CQUFPLENBQUMscUZBQTBCO0FBQzFELHFCQUFxQixtQkFBTyxDQUFDLDZHQUFzQztBQUNuRSxzQkFBc0IsbUJBQU8sQ0FBQyw2R0FBc0M7QUFDcEUsa0JBQWtCLG1CQUFPLENBQUMsNkRBQVcsRUFBRTs7QUFFdkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1COztBQUVuQjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7OztBQ3JJYTs7QUFFYixtQkFBbUIsbUJBQU8sQ0FBQyxnRkFBZTtBQUMxQyxlQUFlLG1CQUFPLENBQUMsb0RBQVc7O0FBRWxDOztBQUVBO0FBQ0Esc0JBQXNCOztBQUV0QjtBQUNBLHlEQUF5RCxZQUFZLG1DQUFtQzs7QUFFeEc7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUQ7Ozs7Ozs7Ozs7O0FDbEZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRDs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYixvR0FBb0csbUJBQW1CLEVBQUUsbUJBQW1CLDhIQUE4SDs7QUFFMVEsbUJBQW1CLG1CQUFPLENBQUMsZ0ZBQWU7QUFDMUMsb0JBQW9CLG1CQUFPLENBQUMsZ0VBQWlCOztBQUU3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7QUFDNUI7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHVDOzs7Ozs7Ozs7OztBQ3BDYTs7QUFFYixtQkFBbUIsbUJBQU8sQ0FBQyxnRkFBZTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsYUFBYSxnQ0FBZ0M7QUFDekUsS0FBSzs7QUFFTDtBQUNBLDRCQUE0QjtBQUM1QiwrQkFBK0IsNkJBQTZCO0FBQzVELE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0M7Ozs7Ozs7Ozs7O0FDaENhOztBQUViLGFBQWEsbUJBQU8sQ0FBQyxnRUFBZ0I7QUFDckMsbUJBQW1CLG1CQUFPLENBQUMsZ0ZBQWU7O0FBRTFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDZDQUE2QyxtQkFBbUI7QUFDaEUsU0FBUztBQUNUO0FBQ0Esc0NBQXNDLG1CQUFtQjtBQUN6RDtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esc0M7Ozs7Ozs7Ozs7O0FDbkNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Qzs7Ozs7Ozs7Ozs7QUNuQ2E7O0FBRWIsZ0lBQTJDO0FBQzNDLGlDOzs7Ozs7Ozs7OztBQ0hhOztBQUViO0FBQ0EsaUJBQWlCLG1CQUFPLENBQUMsd0RBQWE7QUFDdEMsbUJBQW1CLG1CQUFPLENBQUMsb0VBQWU7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QyxxRUFBcUU7O0FBRTdHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsVUFBVTs7QUFFVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDOzs7Ozs7Ozs7OztBQ3ZOYTs7QUFFYixrSEFBMEM7QUFDMUMsaUM7Ozs7Ozs7Ozs7O0FDSGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxpQkFBaUIscUJBQU07QUFDeEIsbUJBQW1CLHFCQUFNO0FBQ3pCLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0Esa0M7Ozs7Ozs7Ozs7O0FDWmE7O0FBRWI7QUFDQTtBQUNBLHNGQUFzRixhQUFhO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxtQkFBbUIsNkJBQTZCO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkM7Ozs7Ozs7Ozs7O0FDekJhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYixlQUFlLG1CQUFPLENBQUMsa0RBQVU7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYQTs7QUFFYTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7Ozs7Ozs7OztBQ3RKakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7QUNwQkEsV0FBVyxtQkFBTyxDQUFDLHdEQUFhLDZFQUE2RSxjQUFjLDZCQUE2QixzQkFBc0IsNEZBQTRGLDZLQUE2Syw2QkFBNkIsaUxBQWlMLHlHQUF5RyxRQUFRLHNEQUFzRCx1R0FBdUcsZ0JBQWdCLGdDQUFnQyw0QkFBNEIsZ0JBQWdCLDhLQUE4SyxpQkFBaUIsZ0dBQWdHLHdGQUF3RixrT0FBa08sY0FBYywyRkFBMkYsMEVBQTBFLElBQUksNkRBQTZELElBQUksYUFBYSxrQkFBa0Isd0ZBQXdGLDRCQUE0Qiw2RkFBNkYsNERBQTRELHdLQUF3SywyRkFBMkYsSUFBSSxhQUFhLFNBQVMseUVBQXlFLElBQUksZUFBZSxTQUFTLGdDQUFnQyxxTkFBcU4sbUJBQW1CLG9LQUFvSyx1Q0FBdUMsb0RBQW9ELHlCQUF5QixFQUFFLG9CQUFvQixJQUFJLHVEQUF1RCxxQkFBcUIsdUVBQXVFLFdBQVcsU0FBUyxVQUFVLEVBQUUscWJBQXFiLG9EQUFvRCwwQ0FBMEMsaUNBQWlDLElBQUksYUFBYSxHQUFHLGNBQWMsR0FBRyxlQUFlLEdBQUcscUJBQXFCLGVBQWUsaUJBQWlCLENBQUMsV0FBVztBQUN2NEg7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvRGE7O0FBRWIsY0FBYyxHQUFHLDJGQUFtQztBQUNwRCxjQUFjLEdBQUcsK0ZBQXVDOzs7Ozs7Ozs7Ozs7QUNIM0M7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFlBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhOzs7Ozs7Ozs7Ozs7QUNySEE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JDYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCx1QkFBdUIsbUJBQU8sQ0FBQyxrRkFBdUI7QUFDdEQscUJBQXFCLG1CQUFPLENBQUMsOEVBQXFCO0FBQ2xELG1CQUFtQixtQkFBTyxDQUFDLDhFQUFxQjtBQUNoRCxhQUFhLG1CQUFPLENBQUMsOERBQWE7QUFDbEMsZUFBZSxtQkFBTyxDQUFDLHdEQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxrQkFBa0IsRUFBRSxrQkFBa0Isb0JBQW9CLEVBQUUsZUFBZSx1QkFBdUIsRUFBRTtBQUM5SSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0M7Ozs7Ozs7Ozs7O0FDcEhhO0FBQ2IsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELGVBQWUsbUJBQU8sQ0FBQyx3REFBVTtBQUNqQyx3QkFBd0IsbUJBQU8sQ0FBQyxvRkFBd0I7QUFDeEQsYUFBYTtBQUNiO0FBQ0EsNEJBQTRCLEVBQUU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMkJBQTJCO0FBQzNCO0FBQ0Esb0M7Ozs7Ozs7Ozs7O0FDakJhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELG1CQUFtQixtQkFBTyxDQUFDLDBFQUFtQjtBQUM5QyxpQkFBaUIsbUJBQU8sQ0FBQyw0REFBWTtBQUNyQyxxQkFBcUIsbUJBQU8sQ0FBQyxvRUFBZ0I7QUFDN0MscUJBQXFCLG1CQUFPLENBQUMsNEZBQWlDO0FBQzlELGVBQWUsbUJBQU8sQ0FBQyx3REFBVTtBQUNqQyx3QkFBd0IsbUJBQU8sQ0FBQyxvRkFBd0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLGFBQWE7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCw2Q0FBNkM7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsc0JBQXNCO0FBQ3RCLHNDOzs7Ozs7Ozs7OztBQ3JQYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxnQkFBZ0IsbUJBQU8sQ0FBQyxvRUFBZ0I7QUFDeEMsaUJBQWlCLG1CQUFPLENBQUMsc0VBQWlCO0FBQzFDLG1CQUFtQixtQkFBTyxDQUFDLDBFQUFtQjtBQUM5Qyw0QkFBNEIsbUJBQU8sQ0FBQyw0RkFBNEI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpQ0FBaUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Qsb0JBQW9CO0FBQ3BCO0FBQ0EsK0NBQStDLG1HQUFtRyxFQUFFO0FBQ3BKO0FBQ0Esd0M7Ozs7Ozs7Ozs7O0FDNUlhO0FBQ2IsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdEO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQzs7Ozs7Ozs7Ozs7QUNuQmE7QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsbUJBQW1CLG1CQUFPLENBQUMsaUVBQWU7QUFDMUMsYUFBYSxzREFBc0QsOEJBQThCLEVBQUU7QUFDbkc7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsOERBQThELHdDQUF3Qyw4QkFBOEIsRUFBRSxFQUFFLEVBQUU7QUFDMUk7QUFDQSxpQzs7Ozs7Ozs7Ozs7QUNYYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxtQkFBbUIsbUJBQU8sQ0FBQyxpRUFBZTtBQUMxQztBQUNBLGtDQUFrQyxxQkFBcUI7QUFDdkQsOEJBQThCLDhEQUE4RDtBQUM1RjtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDBDOzs7Ozs7Ozs7OztBQ2xEYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxtQkFBbUIsbUJBQU8sQ0FBQyxpRUFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGtDOzs7Ozs7Ozs7OztBQ3hEYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxtQkFBbUIsbUJBQU8sQ0FBQyxpRUFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELCtCOzs7Ozs7Ozs7OztBQzFEYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxhQUFhLG1CQUFPLENBQUMsOERBQVE7QUFDN0IsaUJBQWlCLG1CQUFPLENBQUMsc0VBQVk7QUFDckMsdUJBQXVCLG1CQUFPLENBQUMsa0ZBQWtCO0FBQ2pELGFBQWEsbUJBQU8sQ0FBQywrREFBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSwyQ0FBMkMsRUFBRTtBQUNsSDtBQUNBO0FBQ0EsY0FBYztBQUNkLGtDOzs7Ozs7Ozs7OztBQ2pCYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxtQkFBbUIsbUJBQU8sQ0FBQyxpRUFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLGlDQUFpQyxpQkFBaUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxnQzs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsbUJBQW1CLG1CQUFPLENBQUMsaUVBQWU7QUFDMUMsZ0NBQWdDLG1CQUFPLENBQUMscUdBQWlDO0FBQ3pFLGNBQWMsbUJBQU8sQ0FBQyw2RUFBcUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsV0FBVztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxvQzs7Ozs7Ozs7Ozs7QUM3RWE7QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0Qsa0JBQWtCLGlCQUFpQiw0RUFBNEUsRUFBRTtBQUNqSCxzQzs7Ozs7Ozs7Ozs7QUNIYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHNCQUFzQjtBQUN0Qix3Qzs7Ozs7Ozs7Ozs7QUNSYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsK0JBQStCO0FBQy9CLG1EOzs7Ozs7Ozs7OztBQ2JhO0FBQ2IsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0dBQXdHLHNDQUFzQyxFQUFFO0FBQ2hKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCwyQkFBMkI7QUFDM0IsK0M7Ozs7Ozs7Ozs7O0FDZmE7QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsbUJBQW1CLG1CQUFPLENBQUMsaUVBQWU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLDBDOzs7Ozs7Ozs7OztBQ25CYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RDtBQUNBLDRCQUE0QixXQUFXLEVBQUU7QUFDekM7QUFDQSx1QkFBdUI7QUFDdkIsMkM7Ozs7Ozs7Ozs7O0FDTmE7QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLG9DOzs7Ozs7Ozs7OztBQ05hO0FBQ2IsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELGVBQWUsaUJBQWlCLHdDQUF3QywwQ0FBMEMsRUFBRSxFQUFFLEVBQUU7QUFDeEgsbUM7Ozs7Ozs7Ozs7O0FDSGE7QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLHNDOzs7Ozs7Ozs7OztBQ05hO0FBQ2IsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixvQzs7Ozs7Ozs7Ozs7QUNOYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBWTtBQUNyQztBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQixFQUFFO0FBQ2xFO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsZ0M7Ozs7Ozs7Ozs7O0FDdkJhO0FBQ2IsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELG1CQUFtQixtQkFBTyxDQUFDLGlFQUFlO0FBQzFDLHFCQUFxQixtQkFBTyxDQUFDLG1GQUF3QjtBQUNyRCxpQkFBaUIsbUJBQU8sQ0FBQyw2REFBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLHdDOzs7Ozs7Ozs7OztBQ3BCYTs7QUFFYixVQUFVLG1CQUFPLENBQUMsb0RBQUs7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUN0QmE7O0FBRWIsZUFBZSxtQkFBTyxDQUFDLDREQUFlO0FBQ3RDLFNBQVMsbUJBQU8sQ0FBQyw4REFBZ0I7QUFDakM7QUFDQSwrQ0FBK0MsR0FBRztBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixxQkFBTSw4QkFBOEIscUJBQU07QUFDNUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHO0FBQ0gsc0NBQXNDO0FBQ3RDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsUUFBUTtBQUN0QixjQUFjLE9BQU87QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksZ0JBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLGNBQWM7QUFDekIsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHlCQUF5QjtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE1BQU07QUFDakIsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsYUFBYSxJQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsa0JBQWtCO0FBQ25DOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE0YjJhMWYwNzRjZjhlOTFiYTQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjbGllbnQuanNcclxuaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tICdAc2FuaXR5L2NsaWVudCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNhbml0eUNsaWVudCh7XHJcbiAgcHJvamVjdElkOiAnaWRzMXB2a2snLCAvLyB5b3UgY2FuIGZpbmQgdGhpcyBpbiBzYW5pdHkuanNvblxyXG4gIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJywgLy8gb3IgdGhlIG5hbWUgeW91IGNob3NlIGluIHN0ZXAgMVxyXG4gIHVzZUNkbjogdHJ1ZSAvLyBgZmFsc2VgIGlmIHlvdSB3YW50IHRvIGVuc3VyZSBmcmVzaCBkYXRhXHJcbn0pIiwiaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSc7XHJcbi8vIGltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50JztcclxuXHJcbi8vYXBpIGZvciBxdWVyaWVzXHJcblxyXG5cclxuLy9mb3IgZWFzeSBpbWFnZXNcclxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCc7XHJcblxyXG4vL21hdGVyaWFsVWkgY29tcG9uZW50c1xyXG5pbXBvcnQge0JveH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnO1xyXG5cclxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UpIHtcclxuICAgIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpXHJcbn1cclxuXHJcbi8vc3R5bGVzXHJcbiAgICAvLyBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIC8vICAgICByb290OiB7XHJcbiAgICAvLyAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIGJhY2tncm91bmQ6IHtcclxuICAgIC8vICAgICAgICAgYmFja2dyb3VuZEF0dGFjaG1lbnQ6IGZpeGVkLFxyXG4gICAgLy8gICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IHt9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSkpO1xyXG5cclxuY29uc3QgSG9tZUJhbm5lciA9ICh7Y3VkYVJpZGdlfSkgPT4ge1xyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEJveCBcclxuICAgICAgICBjb21wb25lbnQgPSBcImRpdlwiXHJcbiAgICAgICAgLy8gY2xhc3NOYW1lPScnXHJcbiAgICAgICAgLy8gYmFja2dyb3VuZEltYWdlID17fVxyXG4gICAgICAgID5cclxuXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIGNvbnN0IHdpbmVyeSA9IGF3YWl0IGNsaWVudC5mZXRjaFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczogeyB3aW5lcnksIHByZXZpZXcgfSxcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lQmFubmVyIiwiLypcbiAqIEV2ZW50U291cmNlIHBvbHlmaWxsXG4gKiBPcmlnaW5hbGx5IHB1Ymxpc2hlZCBieSBzYyBBbXZUZWsgc3JsIChodHRwczovL2dpdGh1Yi5jb20vYW12dGVrL0V2ZW50U291cmNlKSAtIGRldmVsQGFtdnRlay5jb21cbiAqIEZvcmtlZCBieSBFc3BlbiBIb3ZsYW5kc2RhbCB0byBmaXggYSBmZXcgaXNzdWVzICsgcHVibGlzaCBsYXRlc3QgdmVyc2lvblxuICovXG5cbjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgLyogZ2xvYmFsIGRlZmluZSAqL1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKFtdLCBmYWN0b3J5KVxuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKVxuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXG4gICAgaWYgKGdsb2JhbC5FdmVudFNvdXJjZSAmJiAhZ2xvYmFsLl9ldmVudFNvdXJjZUltcG9ydFByZWZpeCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIGV2c0ltcG9ydE5hbWUgPSAocm9vdC5fZXZlbnRTb3VyY2VJbXBvcnRQcmVmaXggfHwgJycpICsgJ0V2ZW50U291cmNlJ1xuICAgIHJvb3RbZXZzSW1wb3J0TmFtZV0gPSBmYWN0b3J5KClcbiAgfVxufSkodHlwZW9mIHNlbGYgPT09ICd1bmRlZmluZWQnID8gdGhpcyA6IHNlbGYsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIEV2ZW50U291cmNlID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICAgIGlmICghdXJsIHx8IHR5cGVvZiB1cmwgIT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignTm90IGVub3VnaCBhcmd1bWVudHMnKVxuICAgIH1cblxuICAgIHRoaXMuVVJMID0gdXJsXG4gICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpXG4gICAgdmFyIGV2cyA9IHRoaXNcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGV2cy5wb2xsKClcbiAgICB9LCAwKVxuICB9XG5cbiAgRXZlbnRTb3VyY2UucHJvdG90eXBlID0ge1xuICAgIENPTk5FQ1RJTkc6IDAsXG5cbiAgICBPUEVOOiAxLFxuXG4gICAgQ0xPU0VEOiAyLFxuXG4gICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgIGxvZ2dpbmdFbmFibGVkOiBmYWxzZSxcblxuICAgICAgbG9nZ2luZ1ByZWZpeDogJ2V2ZW50c291cmNlJyxcblxuICAgICAgaW50ZXJ2YWw6IDUwMCwgLy8gbWlsbGlzZWNvbmRzXG5cbiAgICAgIGJ1ZmZlclNpemVMaW1pdDogMjU2ICogMTAyNCwgLy8gYnl0ZXNcblxuICAgICAgc2lsZW50VGltZW91dDogMzAwMDAwLCAvLyBtaWxsaXNlY29uZHNcblxuICAgICAgZ2V0QXJnczoge1xuICAgICAgICBldnNfYnVmZmVyX3NpemVfbGltaXQ6IDI1NiAqIDEwMjQsXG4gICAgICB9LFxuXG4gICAgICB4aHJIZWFkZXJzOiB7XG4gICAgICAgIEFjY2VwdDogJ3RleHQvZXZlbnQtc3RyZWFtJyxcbiAgICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnLFxuICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBzZXRPcHRpb25zOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgdmFyIGRlZmF1bHRzID0gdGhpcy5kZWZhdWx0T3B0aW9uc1xuICAgICAgdmFyIG9wdGlvblxuXG4gICAgICAvLyBzZXQgYWxsIGRlZmF1bHQgb3B0aW9ucy4uLlxuICAgICAgZm9yIChvcHRpb24gaW4gZGVmYXVsdHMpIHtcbiAgICAgICAgaWYgKGRlZmF1bHRzLmhhc093blByb3BlcnR5KG9wdGlvbikpIHtcbiAgICAgICAgICB0aGlzW29wdGlvbl0gPSBkZWZhdWx0c1tvcHRpb25dXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gb3ZlcnJpZGUgd2l0aCB3aGF0IGlzIGluIG9wdGlvbnNcbiAgICAgIGZvciAob3B0aW9uIGluIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbiBpbiBkZWZhdWx0cyAmJiBvcHRpb25zLmhhc093blByb3BlcnR5KG9wdGlvbikpIHtcbiAgICAgICAgICB0aGlzW29wdGlvbl0gPSBvcHRpb25zW29wdGlvbl1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBpZiBnZXRBcmdzIG9wdGlvbiBpcyBlbmFibGVkXG4gICAgICAvLyBlbnN1cmUgZXZzX2J1ZmZlcl9zaXplX2xpbWl0IGNvcnJlc3BvbmRzIHRvIGJ1ZmZlclNpemVMaW1pdFxuICAgICAgaWYgKHRoaXMuZ2V0QXJncyAmJiB0aGlzLmJ1ZmZlclNpemVMaW1pdCkge1xuICAgICAgICB0aGlzLmdldEFyZ3MuZXZzX2J1ZmZlcl9zaXplX2xpbWl0ID0gdGhpcy5idWZmZXJTaXplTGltaXRcbiAgICAgIH1cblxuICAgICAgLy8gaWYgY29uc29sZSBpcyBub3QgYXZhaWxhYmxlLCBmb3JjZSBsb2dnaW5nRW5hYmxlZCB0byBmYWxzZVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGNvbnNvbGUubG9nID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmxvZ2dpbmdFbmFibGVkID0gZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbG9nOiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgaWYgKHRoaXMubG9nZ2luZ0VuYWJsZWQpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS5sb2coJ1snICsgdGhpcy5sb2dnaW5nUHJlZml4ICsgJ106JyArIG1lc3NhZ2UpXG4gICAgICB9XG4gICAgfSxcblxuICAgIHBvbGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gdGhpcy5DTE9TRUQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xlYW51cCgpXG4gICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IHRoaXMuQ09OTkVDVElOR1xuICAgICAgICB0aGlzLmN1cnNvciA9IDBcbiAgICAgICAgdGhpcy5jYWNoZSA9ICcnXG4gICAgICAgIHRoaXMuX3hociA9IG5ldyB0aGlzLlhIUih0aGlzKVxuICAgICAgICB0aGlzLnJlc2V0Tm9BY3Rpdml0eVRpbWVyKClcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBpbiBhbiBhdHRlbXB0IHRvIHNpbGVuY2UgdGhlIGVycm9yc1xuICAgICAgICB0aGlzLmxvZygnVGhlcmUgd2VyZSBlcnJvcnMgaW5zaWRlIHRoZSBwb29sIHRyeS1jYXRjaCcpXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnZXJyb3InLCB7dHlwZTogJ2Vycm9yJywgZGF0YTogZXJyLm1lc3NhZ2V9KVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBwb2xsQWdhaW46IGZ1bmN0aW9uIChpbnRlcnZhbCkge1xuICAgICAgLy8gc2NoZWR1bGUgcG9sbCB0byBiZSBjYWxsZWQgYWZ0ZXIgaW50ZXJ2YWwgbWlsbGlzZWNvbmRzXG4gICAgICB2YXIgZXZzID0gdGhpc1xuICAgICAgZXZzLnJlYWR5U3RhdGUgPSBldnMuQ09OTkVDVElOR1xuICAgICAgZXZzLmRpc3BhdGNoRXZlbnQoJ2Vycm9yJywge1xuICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICBkYXRhOiAnUmVjb25uZWN0aW5nICcsXG4gICAgICB9KVxuICAgICAgdGhpcy5fcG9sbFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGV2cy5wb2xsKClcbiAgICAgIH0sIGludGVydmFsIHx8IDApXG4gICAgfSxcblxuICAgIGNsZWFudXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMubG9nKCdldnMgY2xlYW5pbmcgdXAnKVxuXG4gICAgICBpZiAodGhpcy5fcG9sbFRpbWVyKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fcG9sbFRpbWVyKVxuICAgICAgICB0aGlzLl9wb2xsVGltZXIgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ub0FjdGl2aXR5VGltZXIpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9ub0FjdGl2aXR5VGltZXIpXG4gICAgICAgIHRoaXMuX25vQWN0aXZpdHlUaW1lciA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3hocikge1xuICAgICAgICB0aGlzLl94aHIuYWJvcnQoKVxuICAgICAgICB0aGlzLl94aHIgPSBudWxsXG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlc2V0Tm9BY3Rpdml0eVRpbWVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5zaWxlbnRUaW1lb3V0KSB7XG4gICAgICAgIGlmICh0aGlzLl9ub0FjdGl2aXR5VGltZXIpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX25vQWN0aXZpdHlUaW1lcilcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXZzID0gdGhpc1xuICAgICAgICB0aGlzLl9ub0FjdGl2aXR5VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBldnMubG9nKCdUaW1lb3V0ISBzaWxlbnRUSW1lb3V0OicgKyBldnMuc2lsZW50VGltZW91dClcbiAgICAgICAgICBldnMucG9sbEFnYWluKClcbiAgICAgICAgfSwgdGhpcy5zaWxlbnRUaW1lb3V0KVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBjbG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5yZWFkeVN0YXRlID0gdGhpcy5DTE9TRURcbiAgICAgIHRoaXMubG9nKCdDbG9zaW5nIGNvbm5lY3Rpb24uIHJlYWR5U3RhdGU6ICcgKyB0aGlzLnJlYWR5U3RhdGUpXG4gICAgICB0aGlzLmNsZWFudXAoKVxuICAgIH0sXG5cbiAgICBfb254aHJkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuX3hoclxuXG4gICAgICBpZiAocmVxdWVzdC5pc1JlYWR5KCkgJiYgIXJlcXVlc3QuaGFzRXJyb3IoKSkge1xuICAgICAgICAvLyByZXNldCB0aGUgdGltZXIsIGFzIHdlIGhhdmUgYWN0aXZpdHlcbiAgICAgICAgdGhpcy5yZXNldE5vQWN0aXZpdHlUaW1lcigpXG5cbiAgICAgICAgLy8gbW92ZSB0aGlzIEV2ZW50U291cmNlIHRvIE9QRU4gc3RhdGUuLi5cbiAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSB0aGlzLkNPTk5FQ1RJTkcpIHtcbiAgICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSB0aGlzLk9QRU5cbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29wZW4nLCB7dHlwZTogJ29wZW4nfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBidWZmZXIgPSByZXF1ZXN0LmdldEJ1ZmZlcigpXG5cbiAgICAgICAgaWYgKGJ1ZmZlci5sZW5ndGggPiB0aGlzLmJ1ZmZlclNpemVMaW1pdCkge1xuICAgICAgICAgIHRoaXMubG9nKCdidWZmZXIubGVuZ3RoID4gdGhpcy5idWZmZXJTaXplTGltaXQnKVxuICAgICAgICAgIHRoaXMucG9sbEFnYWluKClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1cnNvciA9PSAwICYmIGJ1ZmZlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy8gc2tpcCBieXRlIG9yZGVyIG1hcmsgXFx1RkVGRiBjaGFyYWN0ZXIgaWYgaXQgc3RhcnRzIHRoZSBzdHJlYW1cbiAgICAgICAgICBpZiAoYnVmZmVyLnN1YnN0cmluZygwLCAxKSA9PSAnXFx1RkVGRicpIHtcbiAgICAgICAgICAgIHRoaXMuY3Vyc29yID0gMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsYXN0TWVzc2FnZUluZGV4ID0gdGhpcy5sYXN0TWVzc2FnZUluZGV4KGJ1ZmZlcilcbiAgICAgICAgaWYgKGxhc3RNZXNzYWdlSW5kZXhbMF0gPj0gdGhpcy5jdXJzb3IpIHtcbiAgICAgICAgICB2YXIgbmV3Y3Vyc29yID0gbGFzdE1lc3NhZ2VJbmRleFsxXVxuICAgICAgICAgIHZhciB0b3BhcnNlID0gYnVmZmVyLnN1YnN0cmluZyh0aGlzLmN1cnNvciwgbmV3Y3Vyc29yKVxuICAgICAgICAgIHRoaXMucGFyc2VTdHJlYW0odG9wYXJzZSlcbiAgICAgICAgICB0aGlzLmN1cnNvciA9IG5ld2N1cnNvclxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgcmVxdWVzdCBpcyBmaW5pc2hlZCwgcmVvcGVuIHRoZSBjb25uZWN0aW9uXG4gICAgICAgIGlmIChyZXF1ZXN0LmlzRG9uZSgpKSB7XG4gICAgICAgICAgdGhpcy5sb2coJ3JlcXVlc3QuaXNEb25lKCkuIHJlb3BlbmluZyB0aGUgY29ubmVjdGlvbicpXG4gICAgICAgICAgdGhpcy5wb2xsQWdhaW4odGhpcy5pbnRlcnZhbClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnJlYWR5U3RhdGUgIT09IHRoaXMuQ0xPU0VEKSB7XG4gICAgICAgIHRoaXMubG9nKCd0aGlzLnJlYWR5U3RhdGUgIT09IHRoaXMuQ0xPU0VEJylcbiAgICAgICAgdGhpcy5wb2xsQWdhaW4odGhpcy5pbnRlcnZhbClcblxuICAgICAgICAvL01WOiBVbnN1cmUgd2h5IGFuIGVycm9yIHdhcyBwcmV2aW91c2x5IGRpc3BhdGNoZWRcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcGFyc2VTdHJlYW06IGZ1bmN0aW9uIChjaHVuaykge1xuICAgICAgLy8gbm9ybWFsaXplIGxpbmUgc2VwYXJhdG9ycyAoXFxyXFxuLFxccixcXG4pIHRvIFxcblxuICAgICAgLy8gcmVtb3ZlIHdoaXRlIHNwYWNlcyB0aGF0IG1heSBwcmVjZWRlIFxcblxuICAgICAgY2h1bmsgPSB0aGlzLmNhY2hlICsgdGhpcy5ub3JtYWxpemVUb0xGKGNodW5rKVxuXG4gICAgICB2YXIgZXZlbnRzID0gY2h1bmsuc3BsaXQoJ1xcblxcbicpXG5cbiAgICAgIHZhciBpLCBqLCBldmVudFR5cGUsIGRhdGFzLCBsaW5lLCByZXRyeVxuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICBldmVudFR5cGUgPSAnbWVzc2FnZSdcbiAgICAgICAgZGF0YXMgPSBbXVxuICAgICAgICB2YXIgcGFydHMgPSBldmVudHNbaV0uc3BsaXQoJ1xcbicpXG5cbiAgICAgICAgZm9yIChqID0gMDsgaiA8IHBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgbGluZSA9IHRoaXMudHJpbVdoaXRlU3BhY2UocGFydHNbal0pXG5cbiAgICAgICAgICBpZiAobGluZS5pbmRleE9mKCdldmVudCcpID09IDApIHtcbiAgICAgICAgICAgIGV2ZW50VHlwZSA9IGxpbmUucmVwbGFjZSgvZXZlbnQ6P1xccyovLCAnJylcbiAgICAgICAgICB9IGVsc2UgaWYgKGxpbmUuaW5kZXhPZigncmV0cnknKSA9PSAwKSB7XG4gICAgICAgICAgICByZXRyeSA9IHBhcnNlSW50KGxpbmUucmVwbGFjZSgvcmV0cnk6P1xccyovLCAnJyksIDEwKVxuICAgICAgICAgICAgaWYgKCFpc05hTihyZXRyeSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHJldHJ5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChsaW5lLmluZGV4T2YoJ2RhdGEnKSA9PSAwKSB7XG4gICAgICAgICAgICBkYXRhcy5wdXNoKGxpbmUucmVwbGFjZSgvZGF0YTo/XFxzKi8sICcnKSlcbiAgICAgICAgICB9IGVsc2UgaWYgKGxpbmUuaW5kZXhPZignaWQ6JykgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0RXZlbnRJZCA9IGxpbmUucmVwbGFjZSgvaWQ6P1xccyovLCAnJylcbiAgICAgICAgICB9IGVsc2UgaWYgKGxpbmUuaW5kZXhPZignaWQnKSA9PSAwKSB7XG4gICAgICAgICAgICAvLyB0aGlzIHJlc2V0cyB0aGUgaWRcblxuICAgICAgICAgICAgdGhpcy5sYXN0RXZlbnRJZCA9IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YXMubGVuZ3RoICYmIHRoaXMucmVhZHlTdGF0ZSAhPSB0aGlzLkNMT1NFRCkge1xuICAgICAgICAgIC8vIGRpc3BhdGNoIGEgbmV3IGV2ZW50XG4gICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IE1lc3NhZ2VFdmVudChcbiAgICAgICAgICAgIGV2ZW50VHlwZSxcbiAgICAgICAgICAgIGRhdGFzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5sb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgPyB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgIHRoaXMubGFzdEV2ZW50SWRcbiAgICAgICAgICApXG4gICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50VHlwZSwgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jYWNoZSA9IGV2ZW50c1tldmVudHMubGVuZ3RoIC0gMV1cbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24gKHR5cGUsIGV2ZW50KSB7XG4gICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzWydfJyArIHR5cGUgKyAnSGFuZGxlcnMnXVxuXG4gICAgICBpZiAoaGFuZGxlcnMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYW5kbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGhhbmRsZXJzW2ldLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXNbJ29uJyArIHR5cGVdKSB7XG4gICAgICAgIHRoaXNbJ29uJyArIHR5cGVdLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICh0eXBlLCBoYW5kbGVyKSB7XG4gICAgICBpZiAoIXRoaXNbJ18nICsgdHlwZSArICdIYW5kbGVycyddKSB7XG4gICAgICAgIHRoaXNbJ18nICsgdHlwZSArICdIYW5kbGVycyddID0gW11cbiAgICAgIH1cblxuICAgICAgdGhpc1snXycgKyB0eXBlICsgJ0hhbmRsZXJzJ10ucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAodHlwZSwgaGFuZGxlcikge1xuICAgICAgdmFyIGhhbmRsZXJzID0gdGhpc1snXycgKyB0eXBlICsgJ0hhbmRsZXJzJ11cbiAgICAgIGlmICghaGFuZGxlcnMpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gaGFuZGxlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgaWYgKGhhbmRsZXJzW2ldID09PSBoYW5kbGVyKSB7XG4gICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGksIDEpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBfcG9sbFRpbWVyOiBudWxsLFxuXG4gICAgX25vYWN0aXZpdHlUaW1lcjogbnVsbCxcblxuICAgIF94aHI6IG51bGwsXG5cbiAgICBsYXN0RXZlbnRJZDogbnVsbCxcblxuICAgIGNhY2hlOiAnJyxcblxuICAgIGN1cnNvcjogMCxcblxuICAgIG9uZXJyb3I6IG51bGwsXG5cbiAgICBvbm1lc3NhZ2U6IG51bGwsXG5cbiAgICBvbm9wZW46IG51bGwsXG5cbiAgICByZWFkeVN0YXRlOiAwLFxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIGhlbHBlcnMgZnVuY3Rpb25zXG4gICAgLy8gdGhvc2UgYXJlIGF0dGFjaGVkIHRvIHByb3RvdHlwZSB0byBlYXNlIHJldXNlIGFuZCB0ZXN0aW5nLi4uXG5cbiAgICB1cmxXaXRoUGFyYW1zOiBmdW5jdGlvbiAoYmFzZVVSTCwgcGFyYW1zKSB7XG4gICAgICB2YXIgZW5jb2RlZEFyZ3MgPSBbXVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIHZhciBrZXksIHVybGFyZ1xuICAgICAgICB2YXIgdXJsaXplID0gZW5jb2RlVVJJQ29tcG9uZW50XG5cbiAgICAgICAgZm9yIChrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICB1cmxhcmcgPSB1cmxpemUoa2V5KSArICc9JyArIHVybGl6ZShwYXJhbXNba2V5XSlcbiAgICAgICAgICAgIGVuY29kZWRBcmdzLnB1c2godXJsYXJnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZW5jb2RlZEFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoYmFzZVVSTC5pbmRleE9mKCc/JykgPT0gLTEpIHJldHVybiBiYXNlVVJMICsgJz8nICsgZW5jb2RlZEFyZ3Muam9pbignJicpXG4gICAgICAgIHJldHVybiBiYXNlVVJMICsgJyYnICsgZW5jb2RlZEFyZ3Muam9pbignJicpXG4gICAgICB9XG4gICAgICByZXR1cm4gYmFzZVVSTFxuICAgIH0sXG5cbiAgICBsYXN0TWVzc2FnZUluZGV4OiBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgdmFyIGxuMiA9IHRleHQubGFzdEluZGV4T2YoJ1xcblxcbicpXG4gICAgICB2YXIgbHIyID0gdGV4dC5sYXN0SW5kZXhPZignXFxyXFxyJylcbiAgICAgIHZhciBscmxuMiA9IHRleHQubGFzdEluZGV4T2YoJ1xcclxcblxcclxcbicpXG5cbiAgICAgIGlmIChscmxuMiA+IE1hdGgubWF4KGxuMiwgbHIyKSkge1xuICAgICAgICByZXR1cm4gW2xybG4yLCBscmxuMiArIDRdXG4gICAgICB9XG4gICAgICByZXR1cm4gW01hdGgubWF4KGxuMiwgbHIyKSwgTWF0aC5tYXgobG4yLCBscjIpICsgMl1cbiAgICB9LFxuXG4gICAgdHJpbVdoaXRlU3BhY2U6IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgIC8vIHRvIHJlbW92ZSB3aGl0ZXNwYWNlcyBsZWZ0IGFuZCByaWdodCBvZiBzdHJpbmdcblxuICAgICAgdmFyIHJlVHJpbSA9IC9eKFxcc3xcXHUwMEEwKSt8KFxcc3xcXHUwMEEwKSskL2dcbiAgICAgIHJldHVybiBzdHIucmVwbGFjZShyZVRyaW0sICcnKVxuICAgIH0sXG5cbiAgICBub3JtYWxpemVUb0xGOiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAvLyByZXBsYWNlIFxcciBhbmQgXFxyXFxuIHdpdGggXFxuXG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcclxcbnxcXHIvZywgJ1xcbicpXG4gICAgfSxcbiAgfVxuXG4gIGlmIChpc09sZElFKCkpIHtcbiAgICBFdmVudFNvdXJjZS5pc1BvbHlmaWxsID0gJ0lFXzgtOSdcblxuICAgIC8vIHBhdGNoIEV2ZW50U291cmNlIGRlZmF1bHRPcHRpb25zXG4gICAgdmFyIGRlZmF1bHRzID0gRXZlbnRTb3VyY2UucHJvdG90eXBlLmRlZmF1bHRPcHRpb25zXG4gICAgZGVmYXVsdHMueGhySGVhZGVycyA9IG51bGwgLy8gbm8gaGVhZGVycyB3aWxsIGJlIHNlbnRcbiAgICBkZWZhdWx0cy5nZXRBcmdzLmV2c19wcmVhbWJsZSA9IDIwNDggKyA4XG5cbiAgICAvLyBFdmVudFNvdXJjZSB3aWxsIHNlbmQgcmVxdWVzdCB1c2luZyBJbnRlcm5ldCBFeHBsb3JlciBYRG9tYWluUmVxdWVzdFxuICAgIEV2ZW50U291cmNlLnByb3RvdHlwZS5YSFIgPSBmdW5jdGlvbiAoZXZzKSB7XG4gICAgICAvKiBnbG9iYWwgWERvbWFpblJlcXVlc3QgKi9cbiAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFhEb21haW5SZXF1ZXN0KClcbiAgICAgIHRoaXMuX3JlcXVlc3QgPSByZXF1ZXN0XG5cbiAgICAgIC8vIHNldCBoYW5kbGVyc1xuICAgICAgcmVxdWVzdC5vbnByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXF1ZXN0Ll9yZWFkeSA9IHRydWVcbiAgICAgICAgZXZzLl9vbnhocmRhdGEoKVxuICAgICAgfVxuXG4gICAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fbG9hZGVkID0gdHJ1ZVxuICAgICAgICBldnMuX29ueGhyZGF0YSgpXG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fZmFpbGVkID0gdHJ1ZVxuICAgICAgICBldnMucmVhZHlTdGF0ZSA9IGV2cy5DTE9TRURcbiAgICAgICAgZXZzLmRpc3BhdGNoRXZlbnQoJ2Vycm9yJywge1xuICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgZGF0YTogJ1hEb21haW5SZXF1ZXN0IGVycm9yJyxcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2ZhaWxlZCA9IHRydWVcbiAgICAgICAgZXZzLnJlYWR5U3RhdGUgPSBldnMuQ0xPU0VEXG4gICAgICAgIGV2cy5kaXNwYXRjaEV2ZW50KCdlcnJvcicsIHtcbiAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgIGRhdGE6ICdYRG9tYWluUmVxdWVzdCB0aW1lZCBvdXQnLFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBYRG9tYWluUmVxdWVzdCBkb2VzIG5vdCBhbGxvdyBzZXR0aW5nIGN1c3RvbSBoZWFkZXJzXG4gICAgICAvLyBJZiBFdmVudFNvdXJjZSBoYXMgZW5hYmxlZCB0aGUgdXNlIG9mIEdFVCBhcmd1bWVudHNcbiAgICAgIC8vIHdlIGFkZCBwYXJhbWV0ZXJzIHRvIFVSTCBzbyB0aGF0IHNlcnZlciBjYW4gYWRhcHQgdGhlIHN0cmVhbS4uLlxuICAgICAgdmFyIHJlcUdldEFyZ3MgPSB7fVxuICAgICAgaWYgKGV2cy5nZXRBcmdzKSB7XG4gICAgICAgIC8vIGNvcHkgZXZzLmdldEFyZ3MgaW4gcmVxR2V0QXJnc1xuICAgICAgICB2YXIgZGVmYXVsdEFyZ3MgPSBldnMuZ2V0QXJnc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdEFyZ3MpIHtcbiAgICAgICAgICBpZiAoZGVmYXVsdEFyZ3MuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcmVxR2V0QXJnc1trZXldID0gZGVmYXVsdEFyZ3Nba2V5XVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZzLmxhc3RFdmVudElkKSB7XG4gICAgICAgICAgcmVxR2V0QXJncy5ldnNfbGFzdF9ldmVudF9pZCA9IGV2cy5sYXN0RXZlbnRJZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBzZW5kIHRoZSByZXF1ZXN0XG5cbiAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgZXZzLnVybFdpdGhQYXJhbXMoZXZzLlVSTCwgcmVxR2V0QXJncykpXG4gICAgICByZXF1ZXN0LnNlbmQoKVxuICAgIH1cblxuICAgIEV2ZW50U291cmNlLnByb3RvdHlwZS5YSFIucHJvdG90eXBlID0ge1xuICAgICAgdXNlWERvbWFpblJlcXVlc3Q6IHRydWUsXG5cbiAgICAgIF9yZXF1ZXN0OiBudWxsLFxuXG4gICAgICBfcmVhZHk6IGZhbHNlLCAvLyB0cnVlIHdoZW4gcHJvZ3Jlc3MgZXZlbnRzIGFyZSBkaXNwYXRjaGVkXG5cbiAgICAgIF9sb2FkZWQ6IGZhbHNlLCAvLyB0cnVlIHdoZW4gcmVxdWVzdCBoYXMgYmVlbiBsb2FkZWRcblxuICAgICAgX2ZhaWxlZDogZmFsc2UsIC8vIHRydWUgaWYgd2hlbiByZXF1ZXN0IGlzIGluIGVycm9yXG5cbiAgICAgIGlzUmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QuX3JlYWR5XG4gICAgICB9LFxuXG4gICAgICBpc0RvbmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QuX2xvYWRlZFxuICAgICAgfSxcblxuICAgICAgaGFzRXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QuX2ZhaWxlZFxuICAgICAgfSxcblxuICAgICAgZ2V0QnVmZmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBydiA9ICcnXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcnYgPSB0aGlzLl9yZXF1ZXN0LnJlc3BvbnNlVGV4dCB8fCAnJ1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyBpbnRlbnRpb25hbCBub29wXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJ2XG4gICAgICB9LFxuXG4gICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fcmVxdWVzdCkge1xuICAgICAgICAgIHRoaXMuX3JlcXVlc3QuYWJvcnQoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBFdmVudFNvdXJjZS5pc1BvbHlmaWxsID0gJ1hIUidcblxuICAgIC8vIEV2ZW50U291cmNlIHdpbGwgc2VuZCByZXF1ZXN0IHVzaW5nIFhNTEh0dHBSZXF1ZXN0XG4gICAgRXZlbnRTb3VyY2UucHJvdG90eXBlLlhIUiA9IGZ1bmN0aW9uIChldnMpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgICAgIHRoaXMuX3JlcXVlc3QgPSByZXF1ZXN0XG4gICAgICBldnMuX3hociA9IHRoaXNcblxuICAgICAgLy8gc2V0IGhhbmRsZXJzXG4gICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA+IDEgJiYgZXZzLnJlYWR5U3RhdGUgIT0gZXZzLkNMT1NFRCkge1xuICAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PSAyMDAgfHwgKHJlcXVlc3Quc3RhdHVzID49IDMwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDQwMCkpIHtcbiAgICAgICAgICAgIGV2cy5fb254aHJkYXRhKClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVxdWVzdC5fZmFpbGVkID0gdHJ1ZVxuICAgICAgICAgICAgZXZzLnJlYWR5U3RhdGUgPSBldnMuQ0xPU0VEXG4gICAgICAgICAgICBldnMuZGlzcGF0Y2hFdmVudCgnZXJyb3InLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgIGRhdGE6ICdUaGUgc2VydmVyIHJlc3BvbmRlZCB3aXRoICcgKyByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBldnMuY2xvc2UoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGludGVudGlvbmFsIG5vb3BcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCBldnMudXJsV2l0aFBhcmFtcyhldnMuVVJMLCBldnMuZ2V0QXJncyksIHRydWUpXG5cbiAgICAgIHZhciBoZWFkZXJzID0gZXZzLnhockhlYWRlcnMgLy8gbWF5YmUgbnVsbFxuICAgICAgZm9yICh2YXIgaGVhZGVyIGluIGhlYWRlcnMpIHtcbiAgICAgICAgaWYgKGhlYWRlcnMuaGFzT3duUHJvcGVydHkoaGVhZGVyKSkge1xuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihoZWFkZXIsIGhlYWRlcnNbaGVhZGVyXSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGV2cy5sYXN0RXZlbnRJZCkge1xuICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0xhc3QtRXZlbnQtSWQnLCBldnMubGFzdEV2ZW50SWQpXG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3Quc2VuZCgpXG4gICAgfVxuXG4gICAgRXZlbnRTb3VyY2UucHJvdG90eXBlLlhIUi5wcm90b3R5cGUgPSB7XG4gICAgICB1c2VYRG9tYWluUmVxdWVzdDogZmFsc2UsXG5cbiAgICAgIF9yZXF1ZXN0OiBudWxsLFxuXG4gICAgICBfZmFpbGVkOiBmYWxzZSwgLy8gdHJ1ZSBpZiB3ZSBoYXZlIGhhZCBlcnJvcnMuLi5cblxuICAgICAgaXNSZWFkeTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdC5yZWFkeVN0YXRlID49IDJcbiAgICAgIH0sXG5cbiAgICAgIGlzRG9uZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdC5yZWFkeVN0YXRlID09IDRcbiAgICAgIH0sXG5cbiAgICAgIGhhc0Vycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mYWlsZWQgfHwgdGhpcy5fcmVxdWVzdC5zdGF0dXMgPj0gNDAwXG4gICAgICB9LFxuXG4gICAgICBnZXRCdWZmZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJ2ID0gJydcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBydiA9IHRoaXMuX3JlcXVlc3QucmVzcG9uc2VUZXh0IHx8ICcnXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIGludGVudGlvbmFsIG5vb3BcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcnZcbiAgICAgIH0sXG5cbiAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9yZXF1ZXN0KSB7XG4gICAgICAgICAgdGhpcy5fcmVxdWVzdC5hYm9ydCgpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gTWVzc2FnZUV2ZW50KHR5cGUsIGRhdGEsIG9yaWdpbiwgbGFzdEV2ZW50SWQpIHtcbiAgICB0aGlzLmJ1YmJsZXMgPSBmYWxzZVxuICAgIHRoaXMuY2FuY2VsQnViYmxlID0gZmFsc2VcbiAgICB0aGlzLmNhbmNlbGFibGUgPSBmYWxzZVxuICAgIHRoaXMuZGF0YSA9IGRhdGEgfHwgbnVsbFxuICAgIHRoaXMub3JpZ2luID0gb3JpZ2luIHx8ICcnXG4gICAgdGhpcy5sYXN0RXZlbnRJZCA9IGxhc3RFdmVudElkIHx8ICcnXG4gICAgdGhpcy50eXBlID0gdHlwZSB8fCAnbWVzc2FnZSdcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gICAgLy9yZXR1cm4gdHJ1ZSBpZiB3ZSBhcmUgaW4gSUU4IG9yIElFOVxuICAgIHJldHVybiBCb29sZWFuKFxuICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgd2luZG93LlhEb21haW5SZXF1ZXN0ICYmXG4gICAgICAgIHdpbmRvdy5YTUxIdHRwUmVxdWVzdCAmJlxuICAgICAgICBuZXcgWE1MSHR0cFJlcXVlc3QoKS5yZXNwb25zZVR5cGUgPT09IHVuZGVmaW5lZFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBFdmVudFNvdXJjZVxufSlcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCdAc2FuaXR5L29ic2VydmFibGUvb3BlcmF0b3JzL21hcCcpLFxuICAgIG1hcCA9IF9yZXF1aXJlLm1hcDtcblxudmFyIF9yZXF1aXJlMiA9IHJlcXVpcmUoJ0BzYW5pdHkvb2JzZXJ2YWJsZS9vcGVyYXRvcnMvZmlsdGVyJyksXG4gICAgZmlsdGVyID0gX3JlcXVpcmUyLmZpbHRlcjtcblxudmFyIHF1ZXJ5U3RyaW5nID0gcmVxdWlyZSgnLi4vaHR0cC9xdWVyeVN0cmluZycpO1xuXG52YXIgdmFsaWRhdG9ycyA9IHJlcXVpcmUoJy4uL3ZhbGlkYXRvcnMnKTtcblxuZnVuY3Rpb24gQXNzZXRzQ2xpZW50KGNsaWVudCkge1xuICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbn1cblxuZnVuY3Rpb24gdG9Eb2N1bWVudChib2R5KSB7XG4gIC8vIHRvZG86IHJld3JpdGUgdG8ganVzdCByZXR1cm4gYm9keS5kb2N1bWVudCBpbiBhIHdoaWxlXG4gIHZhciBkb2N1bWVudCA9IGJvZHkuZG9jdW1lbnQ7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkb2N1bWVudCwgJ2RvY3VtZW50Jywge1xuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybignVGhlIHByb21pc2UgcmV0dXJuZWQgZnJvbSBjbGllbnQuYXNzZXQudXBsb2FkKC4uLikgbm93IHJlc29sdmVzIHdpdGggdGhlIGFzc2V0IGRvY3VtZW50Jyk7XG4gICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGRvY3VtZW50O1xufVxuXG5mdW5jdGlvbiBvcHRpb25zRnJvbUZpbGUob3B0cywgZmlsZSkge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIShmaWxlIGluc3RhbmNlb2Ygd2luZG93LkZpbGUpKSB7XG4gICAgcmV0dXJuIG9wdHM7XG4gIH1cblxuICByZXR1cm4gYXNzaWduKHtcbiAgICBmaWxlbmFtZTogb3B0cy5wcmVzZXJ2ZUZpbGVuYW1lID09PSBmYWxzZSA/IHVuZGVmaW5lZCA6IGZpbGUubmFtZSxcbiAgICBjb250ZW50VHlwZTogZmlsZS50eXBlXG4gIH0sIG9wdHMpO1xufVxuXG5hc3NpZ24oQXNzZXRzQ2xpZW50LnByb3RvdHlwZSwge1xuICAvKipcbiAgICogVXBsb2FkIGFuIGFzc2V0XG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gYXNzZXRUeXBlIGBpbWFnZWAgb3IgYGZpbGVgXG4gICAqIEBwYXJhbSAge0ZpbGV8QmxvYnxCdWZmZXJ8UmVhZGFibGVTdHJlYW19IGJvZHkgRmlsZSB0byB1cGxvYWRcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgb3B0cyBPcHRpb25zIGZvciB0aGUgdXBsb2FkXG4gICAqIEBwYXJhbSAge0Jvb2xlYW59IG9wdHMucHJlc2VydmVGaWxlbmFtZSBXaGV0aGVyIG9yIG5vdCB0byBwcmVzZXJ2ZSB0aGUgb3JpZ2luYWwgZmlsZW5hbWUgKGRlZmF1bHQ6IHRydWUpXG4gICAqIEBwYXJhbSAge1N0cmluZ30gIG9wdHMuZmlsZW5hbWUgRmlsZW5hbWUgZm9yIHRoaXMgZmlsZSAob3B0aW9uYWwpXG4gICAqIEBwYXJhbSAge051bWJlcn0gIG9wdHMudGltZW91dCAgTWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlIHRpbWluZyB0aGUgcmVxdWVzdCBvdXQgKGRlZmF1bHQ6IDApXG4gICAqIEBwYXJhbSAge1N0cmluZ30gIG9wdHMuY29udGVudFR5cGUgTWltZSB0eXBlIG9mIHRoZSBmaWxlXG4gICAqIEBwYXJhbSAge0FycmF5fSAgIG9wdHMuZXh0cmFjdCBBcnJheSBvZiBtZXRhZGF0YSBwYXJ0cyB0byBleHRyYWN0IGZyb20gaW1hZ2UuXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUG9zc2libGUgdmFsdWVzOiBgbG9jYXRpb25gLCBgZXhpZmAsIGBpbWFnZWAsIGBwYWxldHRlYFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBvcHRzLmxhYmVsIExhYmVsXG4gICAqIEBwYXJhbSAge1N0cmluZ30gIG9wdHMudGl0bGUgVGl0bGVcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgb3B0cy5kZXNjcmlwdGlvbiBEZXNjcmlwdGlvblxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBvcHRzLmNyZWRpdExpbmUgVGhlIGNyZWRpdCB0byBwZXJzb24ocykgYW5kL29yIG9yZ2FuaXphdGlvbihzKSByZXF1aXJlZCBieSB0aGUgc3VwcGxpZXIgb2YgdGhlIGltYWdlIHRvIGJlIHVzZWQgd2hlbiBwdWJsaXNoZWRcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgb3B0cy5zb3VyY2UgU291cmNlIGRhdGEgKHdoZW4gdGhlIGFzc2V0IGlzIGZyb20gYW4gZXh0ZXJuYWwgc2VydmljZSlcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgb3B0cy5zb3VyY2UuaWQgVGhlICh1KWlkIG9mIHRoZSBhc3NldCB3aXRoaW4gdGhlIHNvdXJjZSwgaS5lLiAnaS1mMzIzcjFFJ1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXF1aXJlZCBpZiBzb3VyY2UgaXMgZGVmaW5lZFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBvcHRzLnNvdXJjZS5uYW1lIFRoZSBuYW1lIG9mIHRoZSBzb3VyY2UsIGkuZS4gJ3Vuc3BsYXNoJ1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXF1aXJlZCBpZiBzb3VyY2UgaXMgZGVmaW5lZFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBvcHRzLnNvdXJjZS51cmwgQSB1cmwgdG8gd2hlcmUgdG8gZmluZCB0aGUgYXNzZXQsIG9yIGdldCBtb3JlIGluZm8gYWJvdXQgaXQgaW4gdGhlIHNvdXJjZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcHRpb25hbFxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBSZXNvbHZlcyB3aXRoIHRoZSBjcmVhdGVkIGFzc2V0IGRvY3VtZW50XG4gICAqL1xuICB1cGxvYWQ6IGZ1bmN0aW9uIHVwbG9hZChhc3NldFR5cGUsIGJvZHkpIHtcbiAgICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFsaWRhdG9ycy52YWxpZGF0ZUFzc2V0VHlwZShhc3NldFR5cGUpOyAvLyBJZiBhbiBlbXB0eSBhcnJheSBpcyBnaXZlbiwgZXhwbGljaXRseSBzZXQgYG5vbmVgIHRvIG92ZXJyaWRlIEFQSSBkZWZhdWx0c1xuXG4gICAgdmFyIG1ldGEgPSBvcHRzLmV4dHJhY3QgfHwgdW5kZWZpbmVkO1xuXG4gICAgaWYgKG1ldGEgJiYgIW1ldGEubGVuZ3RoKSB7XG4gICAgICBtZXRhID0gWydub25lJ107XG4gICAgfVxuXG4gICAgdmFyIGRhdGFzZXQgPSB2YWxpZGF0b3JzLmhhc0RhdGFzZXQodGhpcy5jbGllbnQuY2xpZW50Q29uZmlnKTtcbiAgICB2YXIgYXNzZXRFbmRwb2ludCA9IGFzc2V0VHlwZSA9PT0gJ2ltYWdlJyA/ICdpbWFnZXMnIDogJ2ZpbGVzJztcbiAgICB2YXIgb3B0aW9ucyA9IG9wdGlvbnNGcm9tRmlsZShvcHRzLCBib2R5KTtcbiAgICB2YXIgbGFiZWwgPSBvcHRpb25zLmxhYmVsLFxuICAgICAgICB0aXRsZSA9IG9wdGlvbnMudGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uID0gb3B0aW9ucy5kZXNjcmlwdGlvbixcbiAgICAgICAgY3JlZGl0TGluZSA9IG9wdGlvbnMuY3JlZGl0TGluZSxcbiAgICAgICAgZmlsZW5hbWUgPSBvcHRpb25zLmZpbGVuYW1lLFxuICAgICAgICBzb3VyY2UgPSBvcHRpb25zLnNvdXJjZTtcbiAgICB2YXIgcXVlcnkgPSB7XG4gICAgICBsYWJlbDogbGFiZWwsXG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBmaWxlbmFtZTogZmlsZW5hbWUsXG4gICAgICBtZXRhOiBtZXRhLFxuICAgICAgY3JlZGl0TGluZTogY3JlZGl0TGluZVxuICAgIH07XG5cbiAgICBpZiAoc291cmNlKSB7XG4gICAgICBxdWVyeS5zb3VyY2VJZCA9IHNvdXJjZS5pZDtcbiAgICAgIHF1ZXJ5LnNvdXJjZU5hbWUgPSBzb3VyY2UubmFtZTtcbiAgICAgIHF1ZXJ5LnNvdXJjZVVybCA9IHNvdXJjZS51cmw7XG4gICAgfVxuXG4gICAgdmFyIG9ic2VydmFibGUgPSB0aGlzLmNsaWVudC5fcmVxdWVzdE9ic2VydmFibGUoe1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB0aW1lb3V0OiBvcHRpb25zLnRpbWVvdXQgfHwgMCxcbiAgICAgIHVyaTogXCIvYXNzZXRzL1wiLmNvbmNhdChhc3NldEVuZHBvaW50LCBcIi9cIikuY29uY2F0KGRhdGFzZXQpLFxuICAgICAgaGVhZGVyczogb3B0aW9ucy5jb250ZW50VHlwZSA/IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6IG9wdGlvbnMuY29udGVudFR5cGVcbiAgICAgIH0gOiB7fSxcbiAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgIGJvZHk6IGJvZHlcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmNsaWVudC5pc1Byb21pc2VBUEkoKSA/IG9ic2VydmFibGUucGlwZShmaWx0ZXIoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gZXZlbnQudHlwZSA9PT0gJ3Jlc3BvbnNlJztcbiAgICB9KSwgbWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuIHRvRG9jdW1lbnQoZXZlbnQuYm9keSk7XG4gICAgfSkpLnRvUHJvbWlzZSgpIDogb2JzZXJ2YWJsZTtcbiAgfSxcbiAgZGVsZXRlOiBmdW5jdGlvbiBfZGVsZXRlKHR5cGUsIGlkKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oJ2NsaWVudC5hc3NldHMuZGVsZXRlKCkgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBjbGllbnQuZGVsZXRlKDxkb2N1bWVudC1pZD4pJyk7XG4gICAgdmFyIGRvY0lkID0gaWQgfHwgJyc7XG5cbiAgICBpZiAoIS9eKGltYWdlfGZpbGUpLS8udGVzdChkb2NJZCkpIHtcbiAgICAgIGRvY0lkID0gXCJcIi5jb25jYXQodHlwZSwgXCItXCIpLmNvbmNhdChkb2NJZCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLl9pZCkge1xuICAgICAgLy8gV2UgY291bGQgYmUgcGFzc2luZyBhbiBlbnRpcmUgYXNzZXQgZG9jdW1lbnQgaW5zdGVhZCBvZiBhbiBJRFxuICAgICAgZG9jSWQgPSB0eXBlLl9pZDtcbiAgICB9XG5cbiAgICB2YWxpZGF0b3JzLmhhc0RhdGFzZXQodGhpcy5jbGllbnQuY2xpZW50Q29uZmlnKTtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuZGVsZXRlKGRvY0lkKTtcbiAgfSxcbiAgZ2V0SW1hZ2VVcmw6IGZ1bmN0aW9uIGdldEltYWdlVXJsKHJlZiwgcXVlcnkpIHtcbiAgICB2YXIgaWQgPSByZWYuX3JlZiB8fCByZWY7XG5cbiAgICBpZiAodHlwZW9mIGlkICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdnZXRJbWFnZVVybCgpIG5lZWRzIGVpdGhlciBhbiBvYmplY3Qgd2l0aCBhIF9yZWYsIG9yIGEgc3RyaW5nIHdpdGggYW4gYXNzZXQgZG9jdW1lbnQgSUQnKTtcbiAgICB9XG5cbiAgICBpZiAoIS9eaW1hZ2UtW0EtWmEtejAtOV9dKy1cXGQreFxcZCstW2Etel17MSw1fSQvLnRlc3QoaWQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBhc3NldCBJRCBcXFwiXCIuY29uY2F0KGlkLCBcIlxcXCIuIFVSTCBnZW5lcmF0aW9uIG9ubHkgd29ya3MgZm9yIGF1dG8tZ2VuZXJhdGVkIElEcy5cIikpO1xuICAgIH1cblxuICAgIHZhciBfaWQkc3BsaXQgPSBpZC5zcGxpdCgnLScpLFxuICAgICAgICBfaWQkc3BsaXQyID0gX3NsaWNlZFRvQXJyYXkoX2lkJHNwbGl0LCA0KSxcbiAgICAgICAgYXNzZXRJZCA9IF9pZCRzcGxpdDJbMV0sXG4gICAgICAgIHNpemUgPSBfaWQkc3BsaXQyWzJdLFxuICAgICAgICBmb3JtYXQgPSBfaWQkc3BsaXQyWzNdO1xuXG4gICAgdmFsaWRhdG9ycy5oYXNEYXRhc2V0KHRoaXMuY2xpZW50LmNsaWVudENvbmZpZyk7XG4gICAgdmFyIF90aGlzJGNsaWVudCRjbGllbnRDbyA9IHRoaXMuY2xpZW50LmNsaWVudENvbmZpZyxcbiAgICAgICAgcHJvamVjdElkID0gX3RoaXMkY2xpZW50JGNsaWVudENvLnByb2plY3RJZCxcbiAgICAgICAgZGF0YXNldCA9IF90aGlzJGNsaWVudCRjbGllbnRDby5kYXRhc2V0O1xuICAgIHZhciBxcyA9IHF1ZXJ5ID8gcXVlcnlTdHJpbmcocXVlcnkpIDogJyc7XG4gICAgcmV0dXJuIFwiaHR0cHM6Ly9jZG4uc2FuaXR5LmlvL2ltYWdlcy9cIi5jb25jYXQocHJvamVjdElkLCBcIi9cIikuY29uY2F0KGRhdGFzZXQsIFwiL1wiKS5jb25jYXQoYXNzZXRJZCwgXCItXCIpLmNvbmNhdChzaXplLCBcIi5cIikuY29uY2F0KGZvcm1hdCkuY29uY2F0KHFzKTtcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IEFzc2V0c0NsaWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuZnVuY3Rpb24gQXV0aENsaWVudChjbGllbnQpIHtcbiAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG59XG5cbmFzc2lnbihBdXRoQ2xpZW50LnByb3RvdHlwZSwge1xuICBnZXRMb2dpblByb3ZpZGVyczogZnVuY3Rpb24gZ2V0TG9naW5Qcm92aWRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3Qoe1xuICAgICAgdXJpOiAnL2F1dGgvcHJvdmlkZXJzJ1xuICAgIH0pO1xuICB9LFxuICBsb2dvdXQ6IGZ1bmN0aW9uIGxvZ291dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucmVxdWVzdCh7XG4gICAgICB1cmk6ICcvYXV0aC9sb2dvdXQnLFxuICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICB9KTtcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IEF1dGhDbGllbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBnZW5lcmF0ZUhlbHBVcmwgPSByZXF1aXJlKCdAc2FuaXR5L2dlbmVyYXRlLWhlbHAtdXJsJyk7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vdmFsaWRhdG9ycycpO1xuXG52YXIgd2FybmluZ3MgPSByZXF1aXJlKCcuL3dhcm5pbmdzJyk7XG5cbnZhciBkZWZhdWx0Q2RuSG9zdCA9ICdhcGljZG4uc2FuaXR5LmlvJztcbnZhciBkZWZhdWx0Q29uZmlnID0ge1xuICBhcGlIb3N0OiAnaHR0cHM6Ly9hcGkuc2FuaXR5LmlvJyxcbiAgYXBpVmVyc2lvbjogJzEnLFxuICB1c2VQcm9qZWN0SG9zdG5hbWU6IHRydWUsXG4gIGdyYWRpZW50TW9kZTogZmFsc2UsXG4gIGlzUHJvbWlzZUFQSTogdHJ1ZVxufTtcbnZhciBMT0NBTEhPU1RTID0gWydsb2NhbGhvc3QnLCAnMTI3LjAuMC4xJywgJzAuMC4wLjAnXTtcblxudmFyIGlzTG9jYWwgPSBmdW5jdGlvbiBpc0xvY2FsKGhvc3QpIHtcbiAgcmV0dXJuIExPQ0FMSE9TVFMuaW5kZXhPZihob3N0KSAhPT0gLTE7XG59O1xuXG5leHBvcnRzLmRlZmF1bHRDb25maWcgPSBkZWZhdWx0Q29uZmlnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuXG5leHBvcnRzLmluaXRDb25maWcgPSBmdW5jdGlvbiAoY29uZmlnLCBwcmV2Q29uZmlnKSB7XG4gIHZhciBzcGVjaWZpZWRDb25maWcgPSBhc3NpZ24oe30sIHByZXZDb25maWcsIGNvbmZpZyk7XG5cbiAgaWYgKCFzcGVjaWZpZWRDb25maWcuYXBpVmVyc2lvbikge1xuICAgIHdhcm5pbmdzLnByaW50Tm9BcGlWZXJzaW9uU3BlY2lmaWVkV2FybmluZygpO1xuICB9XG5cbiAgdmFyIG5ld0NvbmZpZyA9IGFzc2lnbih7fSwgZGVmYXVsdENvbmZpZywgc3BlY2lmaWVkQ29uZmlnKTtcbiAgdmFyIGdyYWRpZW50TW9kZSA9IG5ld0NvbmZpZy5ncmFkaWVudE1vZGU7XG4gIHZhciBwcm9qZWN0QmFzZWQgPSAhZ3JhZGllbnRNb2RlICYmIG5ld0NvbmZpZy51c2VQcm9qZWN0SG9zdG5hbWU7XG5cbiAgaWYgKHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBoZWxwVXJsID0gZ2VuZXJhdGVIZWxwVXJsKCdqcy1jbGllbnQtcHJvbWlzZS1wb2x5ZmlsbCcpO1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vIG5hdGl2ZSBQcm9taXNlLWltcGxlbWVudGF0aW9uIGZvdW5kLCBwb2x5ZmlsbCBuZWVkZWQgLSBzZWUgXCIuY29uY2F0KGhlbHBVcmwpKTtcbiAgfVxuXG4gIGlmIChncmFkaWVudE1vZGUgJiYgIW5ld0NvbmZpZy5uYW1lc3BhY2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbmZpZ3VyYXRpb24gbXVzdCBjb250YWluIGBuYW1lc3BhY2VgIHdoZW4gcnVubmluZyBpbiBncmFkaWVudCBtb2RlJyk7XG4gIH1cblxuICBpZiAocHJvamVjdEJhc2VkICYmICFuZXdDb25maWcucHJvamVjdElkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb25maWd1cmF0aW9uIG11c3QgY29udGFpbiBgcHJvamVjdElkYCcpO1xuICB9XG5cbiAgdmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5sb2NhdGlvbiAmJiB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XG4gIHZhciBpc0xvY2FsaG9zdCA9IGlzQnJvd3NlciAmJiBpc0xvY2FsKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSk7XG5cbiAgaWYgKGlzQnJvd3NlciAmJiBpc0xvY2FsaG9zdCAmJiBuZXdDb25maWcudG9rZW4gJiYgbmV3Q29uZmlnLmlnbm9yZUJyb3dzZXJUb2tlbldhcm5pbmcgIT09IHRydWUpIHtcbiAgICB3YXJuaW5ncy5wcmludEJyb3dzZXJUb2tlbldhcm5pbmcoKTtcbiAgfSBlbHNlIGlmICgoIWlzQnJvd3NlciB8fCBpc0xvY2FsaG9zdCkgJiYgbmV3Q29uZmlnLnVzZUNkbiAmJiBuZXdDb25maWcudG9rZW4pIHtcbiAgICB3YXJuaW5ncy5wcmludENkblRva2VuV2FybmluZygpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBuZXdDb25maWcudXNlQ2RuID09PSAndW5kZWZpbmVkJykge1xuICAgIHdhcm5pbmdzLnByaW50Q2RuV2FybmluZygpO1xuICB9XG5cbiAgaWYgKHByb2plY3RCYXNlZCkge1xuICAgIHZhbGlkYXRlLnByb2plY3RJZChuZXdDb25maWcucHJvamVjdElkKTtcbiAgfVxuXG4gIGlmICghZ3JhZGllbnRNb2RlICYmIG5ld0NvbmZpZy5kYXRhc2V0KSB7XG4gICAgdmFsaWRhdGUuZGF0YXNldChuZXdDb25maWcuZGF0YXNldCwgbmV3Q29uZmlnLmdyYWRpZW50TW9kZSk7XG4gIH1cblxuICBuZXdDb25maWcuYXBpVmVyc2lvbiA9IFwiXCIuY29uY2F0KG5ld0NvbmZpZy5hcGlWZXJzaW9uKS5yZXBsYWNlKC9edi8sICcnKTtcbiAgbmV3Q29uZmlnLmlzRGVmYXVsdEFwaSA9IG5ld0NvbmZpZy5hcGlIb3N0ID09PSBkZWZhdWx0Q29uZmlnLmFwaUhvc3Q7XG4gIG5ld0NvbmZpZy51c2VDZG4gPSBCb29sZWFuKG5ld0NvbmZpZy51c2VDZG4pICYmICFuZXdDb25maWcudG9rZW4gJiYgIW5ld0NvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG4gIGV4cG9ydHMudmFsaWRhdGVBcGlWZXJzaW9uKG5ld0NvbmZpZy5hcGlWZXJzaW9uKTtcblxuICBpZiAobmV3Q29uZmlnLmdyYWRpZW50TW9kZSkge1xuICAgIG5ld0NvbmZpZy51cmwgPSBuZXdDb25maWcuYXBpSG9zdDtcbiAgICBuZXdDb25maWcuY2RuVXJsID0gbmV3Q29uZmlnLmFwaUhvc3Q7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGhvc3RQYXJ0cyA9IG5ld0NvbmZpZy5hcGlIb3N0LnNwbGl0KCc6Ly8nLCAyKTtcbiAgICB2YXIgcHJvdG9jb2wgPSBob3N0UGFydHNbMF07XG4gICAgdmFyIGhvc3QgPSBob3N0UGFydHNbMV07XG4gICAgdmFyIGNkbkhvc3QgPSBuZXdDb25maWcuaXNEZWZhdWx0QXBpID8gZGVmYXVsdENkbkhvc3QgOiBob3N0O1xuXG4gICAgaWYgKG5ld0NvbmZpZy51c2VQcm9qZWN0SG9zdG5hbWUpIHtcbiAgICAgIG5ld0NvbmZpZy51cmwgPSBcIlwiLmNvbmNhdChwcm90b2NvbCwgXCI6Ly9cIikuY29uY2F0KG5ld0NvbmZpZy5wcm9qZWN0SWQsIFwiLlwiKS5jb25jYXQoaG9zdCwgXCIvdlwiKS5jb25jYXQobmV3Q29uZmlnLmFwaVZlcnNpb24pO1xuICAgICAgbmV3Q29uZmlnLmNkblVybCA9IFwiXCIuY29uY2F0KHByb3RvY29sLCBcIjovL1wiKS5jb25jYXQobmV3Q29uZmlnLnByb2plY3RJZCwgXCIuXCIpLmNvbmNhdChjZG5Ib3N0LCBcIi92XCIpLmNvbmNhdChuZXdDb25maWcuYXBpVmVyc2lvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0NvbmZpZy51cmwgPSBcIlwiLmNvbmNhdChuZXdDb25maWcuYXBpSG9zdCwgXCIvdlwiKS5jb25jYXQobmV3Q29uZmlnLmFwaVZlcnNpb24pO1xuICAgICAgbmV3Q29uZmlnLmNkblVybCA9IG5ld0NvbmZpZy51cmw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0NvbmZpZztcbn07XG5cbmV4cG9ydHMudmFsaWRhdGVBcGlWZXJzaW9uID0gZnVuY3Rpb24gdmFsaWRhdGVBcGlWZXJzaW9uKGFwaVZlcnNpb24pIHtcbiAgaWYgKGFwaVZlcnNpb24gPT09ICcxJyB8fCBhcGlWZXJzaW9uID09PSAnWCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgYXBpRGF0ZSA9IG5ldyBEYXRlKGFwaVZlcnNpb24pO1xuICB2YXIgYXBpVmVyc2lvblZhbGlkID0gL15cXGR7NH0tXFxkezJ9LVxcZHsyfSQvLnRlc3QoYXBpVmVyc2lvbikgJiYgYXBpRGF0ZSBpbnN0YW5jZW9mIERhdGUgJiYgYXBpRGF0ZS5nZXRUaW1lKCkgPiAwO1xuXG4gIGlmICghYXBpVmVyc2lvblZhbGlkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEFQSSB2ZXJzaW9uIHN0cmluZywgZXhwZWN0ZWQgYDFgIG9yIGRhdGUgaW4gZm9ybWF0IGBZWVlZLU1NLUREYCcpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCdAc2FuaXR5L29ic2VydmFibGUvb3BlcmF0b3JzL2ZpbHRlcicpLFxuICAgIGZpbHRlciA9IF9yZXF1aXJlLmZpbHRlcjtcblxudmFyIF9yZXF1aXJlMiA9IHJlcXVpcmUoJ0BzYW5pdHkvb2JzZXJ2YWJsZS9vcGVyYXRvcnMvbWFwJyksXG4gICAgbWFwID0gX3JlcXVpcmUyLm1hcDtcblxudmFyIHZhbGlkYXRvcnMgPSByZXF1aXJlKCcuLi92YWxpZGF0b3JzJyk7XG5cbnZhciBnZXRTZWxlY3Rpb24gPSByZXF1aXJlKCcuLi91dGlsL2dldFNlbGVjdGlvbicpO1xuXG52YXIgZW5jb2RlUXVlcnlTdHJpbmcgPSByZXF1aXJlKCcuL2VuY29kZVF1ZXJ5U3RyaW5nJyk7XG5cbnZhciBUcmFuc2FjdGlvbiA9IHJlcXVpcmUoJy4vdHJhbnNhY3Rpb24nKTtcblxudmFyIFBhdGNoID0gcmVxdWlyZSgnLi9wYXRjaCcpO1xuXG52YXIgbGlzdGVuID0gcmVxdWlyZSgnLi9saXN0ZW4nKTtcblxudmFyIGV4Y2x1ZGVGYWxzZXkgPSBmdW5jdGlvbiBleGNsdWRlRmFsc2V5KHBhcmFtLCBkZWZWYWx1ZSkge1xuICB2YXIgdmFsdWUgPSB0eXBlb2YgcGFyYW0gPT09ICd1bmRlZmluZWQnID8gZGVmVmFsdWUgOiBwYXJhbTtcbiAgcmV0dXJuIHBhcmFtID09PSBmYWxzZSA/IHVuZGVmaW5lZCA6IHZhbHVlO1xufTtcblxudmFyIGdldE11dGF0aW9uUXVlcnkgPSBmdW5jdGlvbiBnZXRNdXRhdGlvblF1ZXJ5KCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHJldHVybiB7XG4gICAgcmV0dXJuSWRzOiB0cnVlLFxuICAgIHJldHVybkRvY3VtZW50czogZXhjbHVkZUZhbHNleShvcHRpb25zLnJldHVybkRvY3VtZW50cywgdHJ1ZSksXG4gICAgdmlzaWJpbGl0eTogb3B0aW9ucy52aXNpYmlsaXR5IHx8ICdzeW5jJ1xuICB9O1xufTtcblxudmFyIGlzUmVzcG9uc2UgPSBmdW5jdGlvbiBpc1Jlc3BvbnNlKGV2ZW50KSB7XG4gIHJldHVybiBldmVudC50eXBlID09PSAncmVzcG9uc2UnO1xufTtcblxudmFyIGdldEJvZHkgPSBmdW5jdGlvbiBnZXRCb2R5KGV2ZW50KSB7XG4gIHJldHVybiBldmVudC5ib2R5O1xufTtcblxudmFyIGluZGV4QnkgPSBmdW5jdGlvbiBpbmRleEJ5KGRvY3MsIGF0dHIpIHtcbiAgcmV0dXJuIGRvY3MucmVkdWNlKGZ1bmN0aW9uIChpbmRleGVkLCBkb2MpIHtcbiAgICBpbmRleGVkW2F0dHIoZG9jKV0gPSBkb2M7XG4gICAgcmV0dXJuIGluZGV4ZWQ7XG4gIH0sIE9iamVjdC5jcmVhdGUobnVsbCkpO1xufTtcblxudmFyIHRvUHJvbWlzZSA9IGZ1bmN0aW9uIHRvUHJvbWlzZShvYnNlcnZhYmxlKSB7XG4gIHJldHVybiBvYnNlcnZhYmxlLnRvUHJvbWlzZSgpO1xufTtcblxudmFyIGdldFF1ZXJ5U2l6ZUxpbWl0ID0gMTEyNjQ7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbGlzdGVuOiBsaXN0ZW4sXG4gIGdldERhdGFVcmw6IGZ1bmN0aW9uIGdldERhdGFVcmwob3BlcmF0aW9uLCBwYXRoKSB7XG4gICAgdmFyIGNvbmZpZyA9IHRoaXMuY2xpZW50Q29uZmlnO1xuICAgIHZhciBjYXRhbG9nID0gY29uZmlnLmdyYWRpZW50TW9kZSA/IGNvbmZpZy5uYW1lc3BhY2UgOiB2YWxpZGF0b3JzLmhhc0RhdGFzZXQoY29uZmlnKTtcbiAgICB2YXIgYmFzZVVyaSA9IFwiL1wiLmNvbmNhdChvcGVyYXRpb24sIFwiL1wiKS5jb25jYXQoY2F0YWxvZyk7XG4gICAgdmFyIHVyaSA9IHBhdGggPyBcIlwiLmNvbmNhdChiYXNlVXJpLCBcIi9cIikuY29uY2F0KHBhdGgpIDogYmFzZVVyaTtcbiAgICByZXR1cm4gKHRoaXMuY2xpZW50Q29uZmlnLmdyYWRpZW50TW9kZSA/IHVyaSA6IFwiL2RhdGFcIi5jb25jYXQodXJpKSkucmVwbGFjZSgvXFwvKCR8XFw/KS8sICckMScpO1xuICB9LFxuICBmZXRjaDogZnVuY3Rpb24gZmV0Y2gocXVlcnksIHBhcmFtcykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICB2YXIgbWFwUmVzcG9uc2UgPSBvcHRpb25zLmZpbHRlclJlc3BvbnNlID09PSBmYWxzZSA/IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSA6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIHJldHVybiByZXMucmVzdWx0O1xuICAgIH07XG5cbiAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaXMuX2RhdGFSZXF1ZXN0KCdxdWVyeScsIHtcbiAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgfSwgb3B0aW9ucykucGlwZShtYXAobWFwUmVzcG9uc2UpKTtcblxuICAgIHJldHVybiB0aGlzLmlzUHJvbWlzZUFQSSgpID8gdG9Qcm9taXNlKG9ic2VydmFibGUpIDogb2JzZXJ2YWJsZTtcbiAgfSxcbiAgZ2V0RG9jdW1lbnQ6IGZ1bmN0aW9uIGdldERvY3VtZW50KGlkKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICB1cmk6IHRoaXMuZ2V0RGF0YVVybCgnZG9jJywgaWQpLFxuICAgICAganNvbjogdHJ1ZVxuICAgIH07XG5cbiAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaXMuX3JlcXVlc3RPYnNlcnZhYmxlKG9wdGlvbnMpLnBpcGUoZmlsdGVyKGlzUmVzcG9uc2UpLCBtYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gZXZlbnQuYm9keS5kb2N1bWVudHMgJiYgZXZlbnQuYm9keS5kb2N1bWVudHNbMF07XG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIHRoaXMuaXNQcm9taXNlQVBJKCkgPyB0b1Byb21pc2Uob2JzZXJ2YWJsZSkgOiBvYnNlcnZhYmxlO1xuICB9LFxuICBnZXREb2N1bWVudHM6IGZ1bmN0aW9uIGdldERvY3VtZW50cyhpZHMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIHVyaTogdGhpcy5nZXREYXRhVXJsKCdkb2MnLCBpZHMuam9pbignLCcpKSxcbiAgICAgIGpzb246IHRydWVcbiAgICB9O1xuXG4gICAgdmFyIG9ic2VydmFibGUgPSB0aGlzLl9yZXF1ZXN0T2JzZXJ2YWJsZShvcHRpb25zKS5waXBlKGZpbHRlcihpc1Jlc3BvbnNlKSwgbWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGluZGV4ZWQgPSBpbmRleEJ5KGV2ZW50LmJvZHkuZG9jdW1lbnRzIHx8IFtdLCBmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgIHJldHVybiBkb2MuX2lkO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gaWRzLm1hcChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4ZWRbaWRdIHx8IG51bGw7XG4gICAgICB9KTtcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gdGhpcy5pc1Byb21pc2VBUEkoKSA/IHRvUHJvbWlzZShvYnNlcnZhYmxlKSA6IG9ic2VydmFibGU7XG4gIH0sXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKGRvYywgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGUoZG9jLCAnY3JlYXRlJywgb3B0aW9ucyk7XG4gIH0sXG4gIGNyZWF0ZUlmTm90RXhpc3RzOiBmdW5jdGlvbiBjcmVhdGVJZk5vdEV4aXN0cyhkb2MsIG9wdGlvbnMpIHtcbiAgICB2YWxpZGF0b3JzLnJlcXVpcmVEb2N1bWVudElkKCdjcmVhdGVJZk5vdEV4aXN0cycsIGRvYyk7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZShkb2MsICdjcmVhdGVJZk5vdEV4aXN0cycsIG9wdGlvbnMpO1xuICB9LFxuICBjcmVhdGVPclJlcGxhY2U6IGZ1bmN0aW9uIGNyZWF0ZU9yUmVwbGFjZShkb2MsIG9wdGlvbnMpIHtcbiAgICB2YWxpZGF0b3JzLnJlcXVpcmVEb2N1bWVudElkKCdjcmVhdGVPclJlcGxhY2UnLCBkb2MpO1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGUoZG9jLCAnY3JlYXRlT3JSZXBsYWNlJywgb3B0aW9ucyk7XG4gIH0sXG4gIHBhdGNoOiBmdW5jdGlvbiBwYXRjaChzZWxlY3Rvciwgb3BlcmF0aW9ucykge1xuICAgIHJldHVybiBuZXcgUGF0Y2goc2VsZWN0b3IsIG9wZXJhdGlvbnMsIHRoaXMpO1xuICB9LFxuICBkZWxldGU6IGZ1bmN0aW9uIF9kZWxldGUoc2VsZWN0aW9uLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVJlcXVlc3QoJ211dGF0ZScsIHtcbiAgICAgIG11dGF0aW9uczogW3tcbiAgICAgICAgZGVsZXRlOiBnZXRTZWxlY3Rpb24oc2VsZWN0aW9uKVxuICAgICAgfV1cbiAgICB9LCBvcHRpb25zKTtcbiAgfSxcbiAgbXV0YXRlOiBmdW5jdGlvbiBtdXRhdGUobXV0YXRpb25zLCBvcHRpb25zKSB7XG4gICAgdmFyIG11dCA9IG11dGF0aW9ucyBpbnN0YW5jZW9mIFBhdGNoIHx8IG11dGF0aW9ucyBpbnN0YW5jZW9mIFRyYW5zYWN0aW9uID8gbXV0YXRpb25zLnNlcmlhbGl6ZSgpIDogbXV0YXRpb25zO1xuICAgIHZhciBtdXRzID0gQXJyYXkuaXNBcnJheShtdXQpID8gbXV0IDogW211dF07XG4gICAgdmFyIHRyYW5zYWN0aW9uSWQgPSBvcHRpb25zICYmIG9wdGlvbnMudHJhbnNhY3Rpb25JZDtcbiAgICByZXR1cm4gdGhpcy5kYXRhUmVxdWVzdCgnbXV0YXRlJywge1xuICAgICAgbXV0YXRpb25zOiBtdXRzLFxuICAgICAgdHJhbnNhY3Rpb25JZDogdHJhbnNhY3Rpb25JZFxuICAgIH0sIG9wdGlvbnMpO1xuICB9LFxuICB0cmFuc2FjdGlvbjogZnVuY3Rpb24gdHJhbnNhY3Rpb24ob3BlcmF0aW9ucykge1xuICAgIHJldHVybiBuZXcgVHJhbnNhY3Rpb24ob3BlcmF0aW9ucywgdGhpcyk7XG4gIH0sXG4gIGRhdGFSZXF1ZXN0OiBmdW5jdGlvbiBkYXRhUmVxdWVzdChlbmRwb2ludCwgYm9keSkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICAgIHZhciByZXF1ZXN0ID0gdGhpcy5fZGF0YVJlcXVlc3QoZW5kcG9pbnQsIGJvZHksIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIHRoaXMuaXNQcm9taXNlQVBJKCkgPyB0b1Byb21pc2UocmVxdWVzdCkgOiByZXF1ZXN0O1xuICB9LFxuICBfZGF0YVJlcXVlc3Q6IGZ1bmN0aW9uIF9kYXRhUmVxdWVzdChlbmRwb2ludCwgYm9keSkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICB2YXIgaXNNdXRhdGlvbiA9IGVuZHBvaW50ID09PSAnbXV0YXRlJzsgLy8gQ2hlY2sgaWYgdGhlIHF1ZXJ5IHN0cmluZyBpcyB3aXRoaW4gYSBjb25maWd1cmVkIHRocmVzaG9sZCxcbiAgICAvLyBpbiB3aGljaCBjYXNlIHdlIGNhbiB1c2UgR0VULiBPdGhlcndpc2UsIHVzZSBQT1NULlxuXG4gICAgdmFyIHN0clF1ZXJ5ID0gIWlzTXV0YXRpb24gJiYgZW5jb2RlUXVlcnlTdHJpbmcoYm9keSk7XG4gICAgdmFyIHVzZUdldCA9ICFpc011dGF0aW9uICYmIHN0clF1ZXJ5Lmxlbmd0aCA8IGdldFF1ZXJ5U2l6ZUxpbWl0O1xuICAgIHZhciBzdHJpbmdRdWVyeSA9IHVzZUdldCA/IHN0clF1ZXJ5IDogJyc7XG4gICAgdmFyIHJldHVybkZpcnN0ID0gb3B0aW9ucy5yZXR1cm5GaXJzdDtcbiAgICB2YXIgdGltZW91dCA9IG9wdGlvbnMudGltZW91dCxcbiAgICAgICAgdG9rZW4gPSBvcHRpb25zLnRva2VuO1xuICAgIHZhciB1cmkgPSB0aGlzLmdldERhdGFVcmwoZW5kcG9pbnQsIHN0cmluZ1F1ZXJ5KTtcbiAgICB2YXIgcmVxT3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogdXNlR2V0ID8gJ0dFVCcgOiAnUE9TVCcsXG4gICAgICB1cmk6IHVyaSxcbiAgICAgIGpzb246IHRydWUsXG4gICAgICBib2R5OiB1c2VHZXQgPyB1bmRlZmluZWQgOiBib2R5LFxuICAgICAgcXVlcnk6IGlzTXV0YXRpb24gJiYgZ2V0TXV0YXRpb25RdWVyeShvcHRpb25zKSxcbiAgICAgIHRpbWVvdXQ6IHRpbWVvdXQsXG4gICAgICB0b2tlbjogdG9rZW5cbiAgICB9O1xuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0T2JzZXJ2YWJsZShyZXFPcHRpb25zKS5waXBlKGZpbHRlcihpc1Jlc3BvbnNlKSwgbWFwKGdldEJvZHkpLCBtYXAoZnVuY3Rpb24gKHJlcykge1xuICAgICAgaWYgKCFpc011dGF0aW9uKSB7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9IC8vIFNob3VsZCB3ZSByZXR1cm4gZG9jdW1lbnRzP1xuXG5cbiAgICAgIHZhciByZXN1bHRzID0gcmVzLnJlc3VsdHMgfHwgW107XG5cbiAgICAgIGlmIChvcHRpb25zLnJldHVybkRvY3VtZW50cykge1xuICAgICAgICByZXR1cm4gcmV0dXJuRmlyc3QgPyByZXN1bHRzWzBdICYmIHJlc3VsdHNbMF0uZG9jdW1lbnQgOiByZXN1bHRzLm1hcChmdW5jdGlvbiAobXV0KSB7XG4gICAgICAgICAgcmV0dXJuIG11dC5kb2N1bWVudDtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIFJldHVybiBhIHJlZHVjZWQgc3Vic2V0XG5cblxuICAgICAgdmFyIGtleSA9IHJldHVybkZpcnN0ID8gJ2RvY3VtZW50SWQnIDogJ2RvY3VtZW50SWRzJztcbiAgICAgIHZhciBpZHMgPSByZXR1cm5GaXJzdCA/IHJlc3VsdHNbMF0gJiYgcmVzdWx0c1swXS5pZCA6IHJlc3VsdHMubWFwKGZ1bmN0aW9uIChtdXQpIHtcbiAgICAgICAgcmV0dXJuIG11dC5pZDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7XG4gICAgICAgIHRyYW5zYWN0aW9uSWQ6IHJlcy50cmFuc2FjdGlvbklkLFxuICAgICAgICByZXN1bHRzOiByZXN1bHRzXG4gICAgICB9LCBrZXksIGlkcyk7XG4gICAgfSkpO1xuICB9LFxuICBfY3JlYXRlOiBmdW5jdGlvbiBfY3JlYXRlKGRvYywgb3ApIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgICB2YXIgbXV0YXRpb24gPSBfZGVmaW5lUHJvcGVydHkoe30sIG9wLCBkb2MpO1xuXG4gICAgdmFyIG9wdHMgPSBhc3NpZ24oe1xuICAgICAgcmV0dXJuRmlyc3Q6IHRydWUsXG4gICAgICByZXR1cm5Eb2N1bWVudHM6IHRydWVcbiAgICB9LCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcy5kYXRhUmVxdWVzdCgnbXV0YXRlJywge1xuICAgICAgbXV0YXRpb25zOiBbbXV0YXRpb25dXG4gICAgfSwgb3B0cyk7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBlbmMgPSBlbmNvZGVVUklDb21wb25lbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIHF1ZXJ5ID0gX3JlZi5xdWVyeSxcbiAgICAgIF9yZWYkcGFyYW1zID0gX3JlZi5wYXJhbXMsXG4gICAgICBwYXJhbXMgPSBfcmVmJHBhcmFtcyA9PT0gdm9pZCAwID8ge30gOiBfcmVmJHBhcmFtcyxcbiAgICAgIF9yZWYkb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgIG9wdGlvbnMgPSBfcmVmJG9wdGlvbnMgPT09IHZvaWQgMCA/IHt9IDogX3JlZiRvcHRpb25zO1xuICB2YXIgYmFzZSA9IFwiP3F1ZXJ5PVwiLmNvbmNhdChlbmMocXVlcnkpKTtcbiAgdmFyIHFTdHJpbmcgPSBPYmplY3Qua2V5cyhwYXJhbXMpLnJlZHVjZShmdW5jdGlvbiAocXMsIHBhcmFtKSB7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KHFzLCBcIiZcIikuY29uY2F0KGVuYyhcIiRcIi5jb25jYXQocGFyYW0pKSwgXCI9XCIpLmNvbmNhdChlbmMoSlNPTi5zdHJpbmdpZnkocGFyYW1zW3BhcmFtXSkpKTtcbiAgfSwgYmFzZSk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvcHRpb25zKS5yZWR1Y2UoZnVuY3Rpb24gKHFzLCBvcHRpb24pIHtcbiAgICAvLyBPbmx5IGluY2x1ZGUgdGhlIG9wdGlvbiBpZiBpdCBpcyB0cnV0aHlcbiAgICByZXR1cm4gb3B0aW9uc1tvcHRpb25dID8gXCJcIi5jb25jYXQocXMsIFwiJlwiKS5jb25jYXQoZW5jKG9wdGlvbiksIFwiPVwiKS5jb25jYXQoZW5jKG9wdGlvbnNbb3B0aW9uXSkpIDogcXM7XG4gIH0sIHFTdHJpbmcpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIE9ic2VydmFibGUgPSByZXF1aXJlKCdAc2FuaXR5L29ic2VydmFibGUvbWluaW1hbCcpO1xuXG52YXIgcG9seWZpbGxlZEV2ZW50U291cmNlID0gcmVxdWlyZSgnQHNhbml0eS9ldmVudHNvdXJjZScpO1xuXG52YXIgcGljayA9IHJlcXVpcmUoJy4uL3V0aWwvcGljaycpO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi91dGlsL2RlZmF1bHRzJyk7XG5cbnZhciBlbmNvZGVRdWVyeVN0cmluZyA9IHJlcXVpcmUoJy4vZW5jb2RlUXVlcnlTdHJpbmcnKTtcblxudmFyIGdlbmVyYXRlSGVscFVybCA9IHJlcXVpcmUoJ0BzYW5pdHkvZ2VuZXJhdGUtaGVscC11cmwnKTtcblxudmFyIG9uY2UgPSByZXF1aXJlKCcuLi91dGlsL29uY2UnKTtcblxudmFyIHRva2VuV2FybmluZyA9IFsnVXNpbmcgdG9rZW4gd2l0aCBsaXN0ZW5lcnMgaXMgbm90IHN1cHBvcnRlZCBpbiBicm93c2Vycy4gJywgXCJGb3IgbW9yZSBpbmZvLCBzZWUgXCIuY29uY2F0KGdlbmVyYXRlSGVscFVybCgnanMtY2xpZW50LWxpc3RlbmVyLXRva2Vucy1icm93c2VyJyksIFwiLlwiKV07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbnZhciBwcmludFRva2VuV2FybmluZyA9IG9uY2UoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY29uc29sZS53YXJuKHRva2VuV2FybmluZy5qb2luKCcgJykpO1xufSk7XG52YXIgaXNXaW5kb3dFdmVudFNvdXJjZSA9IEJvb2xlYW4odHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkV2ZW50U291cmNlKTtcbnZhciBFdmVudFNvdXJjZSA9IGlzV2luZG93RXZlbnRTb3VyY2UgPyB3aW5kb3cuRXZlbnRTb3VyY2UgLy8gTmF0aXZlIGJyb3dzZXIgRXZlbnRTb3VyY2VcbjogcG9seWZpbGxlZEV2ZW50U291cmNlOyAvLyBOb2RlLmpzLCBJRSBldGNcblxudmFyIHBvc3NpYmxlT3B0aW9ucyA9IFsnaW5jbHVkZVByZXZpb3VzUmV2aXNpb24nLCAnaW5jbHVkZVJlc3VsdCcsICd2aXNpYmlsaXR5JywgJ2VmZmVjdEZvcm1hdCddO1xudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICBpbmNsdWRlUmVzdWx0OiB0cnVlXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxpc3RlbihxdWVyeSwgcGFyYW1zKSB7XG4gIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgdmFyIG9wdGlvbnMgPSBkZWZhdWx0cyhvcHRzLCBkZWZhdWx0T3B0aW9ucyk7XG4gIHZhciBsaXN0ZW5PcHRzID0gcGljayhvcHRpb25zLCBwb3NzaWJsZU9wdGlvbnMpO1xuICB2YXIgcXMgPSBlbmNvZGVRdWVyeVN0cmluZyh7XG4gICAgcXVlcnk6IHF1ZXJ5LFxuICAgIHBhcmFtczogcGFyYW1zLFxuICAgIG9wdGlvbnM6IGxpc3Rlbk9wdHNcbiAgfSk7XG4gIHZhciBfdGhpcyRjbGllbnRDb25maWcgPSB0aGlzLmNsaWVudENvbmZpZyxcbiAgICAgIHVybCA9IF90aGlzJGNsaWVudENvbmZpZy51cmwsXG4gICAgICB0b2tlbiA9IF90aGlzJGNsaWVudENvbmZpZy50b2tlbixcbiAgICAgIHdpdGhDcmVkZW50aWFscyA9IF90aGlzJGNsaWVudENvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG4gIHZhciB1cmkgPSBcIlwiLmNvbmNhdCh1cmwpLmNvbmNhdCh0aGlzLmdldERhdGFVcmwoJ2xpc3RlbicsIHFzKSk7XG4gIHZhciBsaXN0ZW5Gb3IgPSBvcHRpb25zLmV2ZW50cyA/IG9wdGlvbnMuZXZlbnRzIDogWydtdXRhdGlvbiddO1xuICB2YXIgc2hvdWxkRW1pdFJlY29ubmVjdCA9IGxpc3RlbkZvci5pbmRleE9mKCdyZWNvbm5lY3QnKSAhPT0gLTE7XG5cbiAgaWYgKHRva2VuICYmIGlzV2luZG93RXZlbnRTb3VyY2UpIHtcbiAgICBwcmludFRva2VuV2FybmluZygpO1xuICB9XG5cbiAgdmFyIGVzT3B0aW9ucyA9IHt9O1xuXG4gIGlmICh0b2tlbiB8fCB3aXRoQ3JlZGVudGlhbHMpIHtcbiAgICBlc09wdGlvbnMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0b2tlbikge1xuICAgIGVzT3B0aW9ucy5oZWFkZXJzID0ge1xuICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIuY29uY2F0KHRva2VuKVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgdmFyIGVzID0gZ2V0RXZlbnRTb3VyY2UoKTtcbiAgICB2YXIgcmVjb25uZWN0VGltZXI7XG4gICAgdmFyIHN0b3BwZWQgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIG9uRXJyb3IoKSB7XG4gICAgICBpZiAoc3RvcHBlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGVtaXRSZWNvbm5lY3QoKTsgLy8gQWxsb3cgZXZlbnQgaGFuZGxlcnMgb2YgYGVtaXRSZWNvbm5lY3RgIHRvIGNhbmNlbC9jbG9zZSB0aGUgcmVjb25uZWN0IGF0dGVtcHRcblxuICAgICAgaWYgKHN0b3BwZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBVbmxlc3Mgd2UndmUgZXhwbGljaXRseSBzdG9wcGVkIHRoZSBFUyAoaW4gd2hpY2ggY2FzZSBgc3RvcHBlZGAgc2hvdWxkIGJlIHRydWUpLFxuICAgICAgLy8gd2Ugc2hvdWxkIG5ldmVyIGJlIGluIGEgZGlzY29ubmVjdGVkIHN0YXRlLiBCeSBkZWZhdWx0LCBFdmVudFNvdXJjZSB3aWxsIHJlY29ubmVjdFxuICAgICAgLy8gYXV0b21hdGljYWxseSwgaW4gd2hpY2ggY2FzZSBpdCBzZXRzIHJlYWR5U3RhdGUgdG8gYENPTk5FQ1RJTkdgLCBidXQgaW4gc29tZSBjYXNlc1xuICAgICAgLy8gKGxpa2Ugd2hlbiBhIGxhcHRvcCBsaWQgaXMgY2xvc2VkKSwgaXQgY2xvc2VzIHRoZSBjb25uZWN0aW9uLiBJbiB0aGVzZSBjYXNlcyB3ZSBuZWVkXG4gICAgICAvLyB0byBleHBsaWNpdGx5IHJlY29ubmVjdC5cblxuXG4gICAgICBpZiAoZXMucmVhZHlTdGF0ZSA9PT0gRXZlbnRTb3VyY2UuQ0xPU0VEKSB7XG4gICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIGNsZWFyVGltZW91dChyZWNvbm5lY3RUaW1lcik7XG4gICAgICAgIHJlY29ubmVjdFRpbWVyID0gc2V0VGltZW91dChvcGVuLCAxMDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ2hhbm5lbEVycm9yKGVycikge1xuICAgICAgb2JzZXJ2ZXIuZXJyb3IoY29vZXJjZUVycm9yKGVycikpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTWVzc2FnZShldnQpIHtcbiAgICAgIHZhciBldmVudCA9IHBhcnNlRXZlbnQoZXZ0KTtcbiAgICAgIHJldHVybiBldmVudCBpbnN0YW5jZW9mIEVycm9yID8gb2JzZXJ2ZXIuZXJyb3IoZXZlbnQpIDogb2JzZXJ2ZXIubmV4dChldmVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25EaXNjb25uZWN0KGV2dCkge1xuICAgICAgc3RvcHBlZCA9IHRydWU7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGVzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvciwgZmFsc2UpO1xuICAgICAgZXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbm5lbEVycm9yJywgb25DaGFubmVsRXJyb3IsIGZhbHNlKTtcbiAgICAgIGVzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Rpc2Nvbm5lY3QnLCBvbkRpc2Nvbm5lY3QsIGZhbHNlKTtcbiAgICAgIGxpc3RlbkZvci5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHJldHVybiBlcy5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIG9uTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgICBlcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVtaXRSZWNvbm5lY3QoKSB7XG4gICAgICBpZiAoc2hvdWxkRW1pdFJlY29ubmVjdCkge1xuICAgICAgICBvYnNlcnZlci5uZXh0KHtcbiAgICAgICAgICB0eXBlOiAncmVjb25uZWN0J1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFdmVudFNvdXJjZSgpIHtcbiAgICAgIHZhciBldnMgPSBuZXcgRXZlbnRTb3VyY2UodXJpLCBlc09wdGlvbnMpO1xuICAgICAgZXZzLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvciwgZmFsc2UpO1xuICAgICAgZXZzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5uZWxFcnJvcicsIG9uQ2hhbm5lbEVycm9yLCBmYWxzZSk7XG4gICAgICBldnMuYWRkRXZlbnRMaXN0ZW5lcignZGlzY29ubmVjdCcsIG9uRGlzY29ubmVjdCwgZmFsc2UpO1xuICAgICAgbGlzdGVuRm9yLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIGV2cy5hZGRFdmVudExpc3RlbmVyKHR5cGUsIG9uTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZXZzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgICBlcyA9IGdldEV2ZW50U291cmNlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHN0b3BwZWQgPSB0cnVlO1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RvcDtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBwYXJzZUV2ZW50KGV2ZW50KSB7XG4gIHRyeSB7XG4gICAgdmFyIGRhdGEgPSBldmVudC5kYXRhICYmIEpTT04ucGFyc2UoZXZlbnQuZGF0YSkgfHwge307XG4gICAgcmV0dXJuIGFzc2lnbih7XG4gICAgICB0eXBlOiBldmVudC50eXBlXG4gICAgfSwgZGF0YSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBlcnI7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29vZXJjZUVycm9yKGVycikge1xuICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICByZXR1cm4gZXJyO1xuICB9XG5cbiAgdmFyIGV2dCA9IHBhcnNlRXZlbnQoZXJyKTtcbiAgcmV0dXJuIGV2dCBpbnN0YW5jZW9mIEVycm9yID8gZXZ0IDogbmV3IEVycm9yKGV4dHJhY3RFcnJvck1lc3NhZ2UoZXZ0KSk7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RFcnJvck1lc3NhZ2UoZXJyKSB7XG4gIGlmICghZXJyLmVycm9yKSB7XG4gICAgcmV0dXJuIGVyci5tZXNzYWdlIHx8ICdVbmtub3duIGxpc3RlbmVyIGVycm9yJztcbiAgfVxuXG4gIGlmIChlcnIuZXJyb3IuZGVzY3JpcHRpb24pIHtcbiAgICByZXR1cm4gZXJyLmVycm9yLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiBlcnIuZXJyb3IgPT09ICdzdHJpbmcnID8gZXJyLmVycm9yIDogSlNPTi5zdHJpbmdpZnkoZXJyLmVycm9yLCBudWxsLCAyKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGRlZXBBc3NpZ24gPSByZXF1aXJlKCdkZWVwLWFzc2lnbicpO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgZ2V0U2VsZWN0aW9uID0gcmVxdWlyZSgnLi4vdXRpbC9nZXRTZWxlY3Rpb24nKTtcblxudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi4vdmFsaWRhdG9ycycpO1xuXG52YXIgdmFsaWRhdGVPYmplY3QgPSB2YWxpZGF0ZS52YWxpZGF0ZU9iamVjdDtcbnZhciB2YWxpZGF0ZUluc2VydCA9IHZhbGlkYXRlLnZhbGlkYXRlSW5zZXJ0O1xuXG5mdW5jdGlvbiBQYXRjaChzZWxlY3Rpb24pIHtcbiAgdmFyIG9wZXJhdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgY2xpZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuICB0aGlzLnNlbGVjdGlvbiA9IHNlbGVjdGlvbjtcbiAgdGhpcy5vcGVyYXRpb25zID0gYXNzaWduKHt9LCBvcGVyYXRpb25zKTtcbiAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG59XG5cbmFzc2lnbihQYXRjaC5wcm90b3R5cGUsIHtcbiAgY2xvbmU6IGZ1bmN0aW9uIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgUGF0Y2godGhpcy5zZWxlY3Rpb24sIGFzc2lnbih7fSwgdGhpcy5vcGVyYXRpb25zKSwgdGhpcy5jbGllbnQpO1xuICB9LFxuICBtZXJnZTogZnVuY3Rpb24gbWVyZ2UocHJvcHMpIHtcbiAgICB2YWxpZGF0ZU9iamVjdCgnbWVyZ2UnLCBwcm9wcyk7XG4gICAgdmFyIHN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2sudG9TdHJpbmcoKS5zcGxpdCgnXFxuJykuZmlsdGVyKGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgIHJldHVybiBzdHIudHJpbSgpO1xuICAgIH0pLnNsaWNlKDIpO1xuICAgIGNvbnNvbGUud2FybihcIlRoZSBcXFwibWVyZ2VcXFwiIHBhdGNoIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlXFxuXCIuY29uY2F0KHN0YWNrLmpvaW4oJ1xcbicpKSk7XG4gICAgcmV0dXJuIHRoaXMuX2Fzc2lnbignbWVyZ2UnLCBkZWVwQXNzaWduKHRoaXMub3BlcmF0aW9ucy5tZXJnZSB8fCB7fSwgcHJvcHMpKTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiBzZXQocHJvcHMpIHtcbiAgICByZXR1cm4gdGhpcy5fYXNzaWduKCdzZXQnLCBwcm9wcyk7XG4gIH0sXG4gIGRpZmZNYXRjaFBhdGNoOiBmdW5jdGlvbiBkaWZmTWF0Y2hQYXRjaChwcm9wcykge1xuICAgIHZhbGlkYXRlT2JqZWN0KCdkaWZmTWF0Y2hQYXRjaCcsIHByb3BzKTtcbiAgICByZXR1cm4gdGhpcy5fYXNzaWduKCdkaWZmTWF0Y2hQYXRjaCcsIHByb3BzKTtcbiAgfSxcbiAgdW5zZXQ6IGZ1bmN0aW9uIHVuc2V0KGF0dHJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGF0dHJzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnNldChhdHRycykgdGFrZXMgYW4gYXJyYXkgb2YgYXR0cmlidXRlcyB0byB1bnNldCwgbm9uLWFycmF5IGdpdmVuJyk7XG4gICAgfVxuXG4gICAgdGhpcy5vcGVyYXRpb25zID0gYXNzaWduKHt9LCB0aGlzLm9wZXJhdGlvbnMsIHtcbiAgICAgIHVuc2V0OiBhdHRyc1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBzZXRJZk1pc3Npbmc6IGZ1bmN0aW9uIHNldElmTWlzc2luZyhwcm9wcykge1xuICAgIHJldHVybiB0aGlzLl9hc3NpZ24oJ3NldElmTWlzc2luZycsIHByb3BzKTtcbiAgfSxcbiAgcmVwbGFjZTogZnVuY3Rpb24gcmVwbGFjZShwcm9wcykge1xuICAgIHZhbGlkYXRlT2JqZWN0KCdyZXBsYWNlJywgcHJvcHMpO1xuICAgIHJldHVybiB0aGlzLl9zZXQoJ3NldCcsIHtcbiAgICAgICQ6IHByb3BzXG4gICAgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaWQtbGVuZ3RoXG4gIH0sXG4gIGluYzogZnVuY3Rpb24gaW5jKHByb3BzKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Fzc2lnbignaW5jJywgcHJvcHMpO1xuICB9LFxuICBkZWM6IGZ1bmN0aW9uIGRlYyhwcm9wcykge1xuICAgIHJldHVybiB0aGlzLl9hc3NpZ24oJ2RlYycsIHByb3BzKTtcbiAgfSxcbiAgaW5zZXJ0OiBmdW5jdGlvbiBpbnNlcnQoYXQsIHNlbGVjdG9yLCBpdGVtcykge1xuICAgIHZhciBfdGhpcyRfYXNzaWduO1xuXG4gICAgdmFsaWRhdGVJbnNlcnQoYXQsIHNlbGVjdG9yLCBpdGVtcyk7XG4gICAgcmV0dXJuIHRoaXMuX2Fzc2lnbignaW5zZXJ0JywgKF90aGlzJF9hc3NpZ24gPSB7fSwgX2RlZmluZVByb3BlcnR5KF90aGlzJF9hc3NpZ24sIGF0LCBzZWxlY3RvciksIF9kZWZpbmVQcm9wZXJ0eShfdGhpcyRfYXNzaWduLCBcIml0ZW1zXCIsIGl0ZW1zKSwgX3RoaXMkX2Fzc2lnbikpO1xuICB9LFxuICBhcHBlbmQ6IGZ1bmN0aW9uIGFwcGVuZChzZWxlY3RvciwgaXRlbXMpIHtcbiAgICByZXR1cm4gdGhpcy5pbnNlcnQoJ2FmdGVyJywgXCJcIi5jb25jYXQoc2VsZWN0b3IsIFwiWy0xXVwiKSwgaXRlbXMpO1xuICB9LFxuICBwcmVwZW5kOiBmdW5jdGlvbiBwcmVwZW5kKHNlbGVjdG9yLCBpdGVtcykge1xuICAgIHJldHVybiB0aGlzLmluc2VydCgnYmVmb3JlJywgXCJcIi5jb25jYXQoc2VsZWN0b3IsIFwiWzBdXCIpLCBpdGVtcyk7XG4gIH0sXG4gIHNwbGljZTogZnVuY3Rpb24gc3BsaWNlKHNlbGVjdG9yLCBzdGFydCwgZGVsZXRlQ291bnQsIGl0ZW1zKSB7XG4gICAgLy8gTmVnYXRpdmUgaW5kZXhlcyBkb2Vzbid0IG1lYW4gdGhlIHNhbWUgaW4gU2FuaXR5IGFzIHRoZXkgZG8gaW4gSlM7XG4gICAgLy8gLTEgbWVhbnMgXCJhY3R1YWxseSBhdCB0aGUgZW5kIG9mIHRoZSBhcnJheVwiLCB3aGljaCBhbGxvd3MgaW5zZXJ0aW5nXG4gICAgLy8gYXQgdGhlIGVuZCBvZiB0aGUgYXJyYXkgd2l0aG91dCBrbm93aW5nIGl0cyBsZW5ndGguIFdlIHRoZXJlZm9yZSBoYXZlXG4gICAgLy8gdG8gc3Vic3RyYWN0IG5lZ2F0aXZlIGluZGV4ZXMgYnkgb25lIHRvIG1hdGNoIEpTLiBJZiB5b3Ugd2FudCBTYW5pdHktXG4gICAgLy8gYmVoYXZpb3VyLCBqdXN0IHVzZSBgaW5zZXJ0KCdyZXBsYWNlJywgc2VsZWN0b3IsIGl0ZW1zKWAgZGlyZWN0bHlcbiAgICB2YXIgZGVsQWxsID0gdHlwZW9mIGRlbGV0ZUNvdW50ID09PSAndW5kZWZpbmVkJyB8fCBkZWxldGVDb3VudCA9PT0gLTE7XG4gICAgdmFyIHN0YXJ0SW5kZXggPSBzdGFydCA8IDAgPyBzdGFydCAtIDEgOiBzdGFydDtcbiAgICB2YXIgZGVsQ291bnQgPSBkZWxBbGwgPyAtMSA6IE1hdGgubWF4KDAsIHN0YXJ0ICsgZGVsZXRlQ291bnQpO1xuICAgIHZhciBkZWxSYW5nZSA9IHN0YXJ0SW5kZXggPCAwICYmIGRlbENvdW50ID49IDAgPyAnJyA6IGRlbENvdW50O1xuICAgIHZhciByYW5nZVNlbGVjdG9yID0gXCJcIi5jb25jYXQoc2VsZWN0b3IsIFwiW1wiKS5jb25jYXQoc3RhcnRJbmRleCwgXCI6XCIpLmNvbmNhdChkZWxSYW5nZSwgXCJdXCIpO1xuICAgIHJldHVybiB0aGlzLmluc2VydCgncmVwbGFjZScsIHJhbmdlU2VsZWN0b3IsIGl0ZW1zIHx8IFtdKTtcbiAgfSxcbiAgaWZSZXZpc2lvbklkOiBmdW5jdGlvbiBpZlJldmlzaW9uSWQocmV2KSB7XG4gICAgdGhpcy5vcGVyYXRpb25zLmlmUmV2aXNpb25JRCA9IHJldjtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgc2VyaWFsaXplOiBmdW5jdGlvbiBzZXJpYWxpemUoKSB7XG4gICAgcmV0dXJuIGFzc2lnbihnZXRTZWxlY3Rpb24odGhpcy5zZWxlY3Rpb24pLCB0aGlzLm9wZXJhdGlvbnMpO1xuICB9LFxuICB0b0pTT046IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5zZXJpYWxpemUoKTtcbiAgfSxcbiAgY29tbWl0OiBmdW5jdGlvbiBjb21taXQoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgaWYgKCF0aGlzLmNsaWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBgY2xpZW50YCBwYXNzZWQgdG8gcGF0Y2gsIGVpdGhlciBwcm92aWRlIG9uZSBvciBwYXNzIHRoZSAnICsgJ3BhdGNoIHRvIGEgY2xpZW50cyBgbXV0YXRlKClgIG1ldGhvZCcpO1xuICAgIH1cblxuICAgIHZhciByZXR1cm5GaXJzdCA9IHR5cGVvZiB0aGlzLnNlbGVjdGlvbiA9PT0gJ3N0cmluZyc7XG4gICAgdmFyIG9wdHMgPSBhc3NpZ24oe1xuICAgICAgcmV0dXJuRmlyc3Q6IHJldHVybkZpcnN0LFxuICAgICAgcmV0dXJuRG9jdW1lbnRzOiB0cnVlXG4gICAgfSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50Lm11dGF0ZSh7XG4gICAgICBwYXRjaDogdGhpcy5zZXJpYWxpemUoKVxuICAgIH0sIG9wdHMpO1xuICB9LFxuICByZXNldDogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgdGhpcy5vcGVyYXRpb25zID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIF9zZXQ6IGZ1bmN0aW9uIF9zZXQob3AsIHByb3BzKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Fzc2lnbihvcCwgcHJvcHMsIGZhbHNlKTtcbiAgfSxcbiAgX2Fzc2lnbjogZnVuY3Rpb24gX2Fzc2lnbihvcCwgcHJvcHMpIHtcbiAgICB2YXIgbWVyZ2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHRydWU7XG4gICAgdmFsaWRhdGVPYmplY3Qob3AsIHByb3BzKTtcbiAgICB0aGlzLm9wZXJhdGlvbnMgPSBhc3NpZ24oe30sIHRoaXMub3BlcmF0aW9ucywgX2RlZmluZVByb3BlcnR5KHt9LCBvcCwgYXNzaWduKHt9LCBtZXJnZSAmJiB0aGlzLm9wZXJhdGlvbnNbb3BdIHx8IHt9LCBwcm9wcykpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IFBhdGNoOyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgdmFsaWRhdG9ycyA9IHJlcXVpcmUoJy4uL3ZhbGlkYXRvcnMnKTtcblxudmFyIFBhdGNoID0gcmVxdWlyZSgnLi9wYXRjaCcpO1xuXG52YXIgZGVmYXVsdE11dGF0ZU9wdGlvbnMgPSB7XG4gIHJldHVybkRvY3VtZW50czogZmFsc2Vcbn07XG5cbmZ1bmN0aW9uIFRyYW5zYWN0aW9uKCkge1xuICB2YXIgb3BlcmF0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogW107XG4gIHZhciBjbGllbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgdmFyIHRyYW5zYWN0aW9uSWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcbiAgdGhpcy50cnhJZCA9IHRyYW5zYWN0aW9uSWQ7XG4gIHRoaXMub3BlcmF0aW9ucyA9IG9wZXJhdGlvbnM7XG4gIHRoaXMuY2xpZW50ID0gY2xpZW50O1xufVxuXG5hc3NpZ24oVHJhbnNhY3Rpb24ucHJvdG90eXBlLCB7XG4gIGNsb25lOiBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFRyYW5zYWN0aW9uKHRoaXMub3BlcmF0aW9ucy5zbGljZSgwKSwgdGhpcy5jbGllbnQsIHRoaXMudHJ4SWQpO1xuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZShkb2MpIHtcbiAgICB2YWxpZGF0b3JzLnZhbGlkYXRlT2JqZWN0KCdjcmVhdGUnLCBkb2MpO1xuICAgIHJldHVybiB0aGlzLl9hZGQoe1xuICAgICAgY3JlYXRlOiBkb2NcbiAgICB9KTtcbiAgfSxcbiAgY3JlYXRlSWZOb3RFeGlzdHM6IGZ1bmN0aW9uIGNyZWF0ZUlmTm90RXhpc3RzKGRvYykge1xuICAgIHZhciBvcCA9ICdjcmVhdGVJZk5vdEV4aXN0cyc7XG4gICAgdmFsaWRhdG9ycy52YWxpZGF0ZU9iamVjdChvcCwgZG9jKTtcbiAgICB2YWxpZGF0b3JzLnJlcXVpcmVEb2N1bWVudElkKG9wLCBkb2MpO1xuICAgIHJldHVybiB0aGlzLl9hZGQoX2RlZmluZVByb3BlcnR5KHt9LCBvcCwgZG9jKSk7XG4gIH0sXG4gIGNyZWF0ZU9yUmVwbGFjZTogZnVuY3Rpb24gY3JlYXRlT3JSZXBsYWNlKGRvYykge1xuICAgIHZhciBvcCA9ICdjcmVhdGVPclJlcGxhY2UnO1xuICAgIHZhbGlkYXRvcnMudmFsaWRhdGVPYmplY3Qob3AsIGRvYyk7XG4gICAgdmFsaWRhdG9ycy5yZXF1aXJlRG9jdW1lbnRJZChvcCwgZG9jKTtcbiAgICByZXR1cm4gdGhpcy5fYWRkKF9kZWZpbmVQcm9wZXJ0eSh7fSwgb3AsIGRvYykpO1xuICB9LFxuICBkZWxldGU6IGZ1bmN0aW9uIF9kZWxldGUoZG9jdW1lbnRJZCkge1xuICAgIHZhbGlkYXRvcnMudmFsaWRhdGVEb2N1bWVudElkKCdkZWxldGUnLCBkb2N1bWVudElkKTtcbiAgICByZXR1cm4gdGhpcy5fYWRkKHtcbiAgICAgIGRlbGV0ZToge1xuICAgICAgICBpZDogZG9jdW1lbnRJZFxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBwYXRjaDogZnVuY3Rpb24gcGF0Y2goZG9jdW1lbnRJZCwgcGF0Y2hPcHMpIHtcbiAgICB2YXIgaXNCdWlsZGVyID0gdHlwZW9mIHBhdGNoT3BzID09PSAnZnVuY3Rpb24nO1xuICAgIHZhciBpc1BhdGNoID0gZG9jdW1lbnRJZCBpbnN0YW5jZW9mIFBhdGNoOyAvLyB0cmFuc2FjdGlvbi5wYXRjaChjbGllbnQucGF0Y2goJ2RvY3VtZW50SWQnKS5pbmMoe3Zpc2l0czogMX0pKVxuXG4gICAgaWYgKGlzUGF0Y2gpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hZGQoe1xuICAgICAgICBwYXRjaDogZG9jdW1lbnRJZC5zZXJpYWxpemUoKVxuICAgICAgfSk7XG4gICAgfSAvLyBwYXRjaCA9PiBwYXRjaC5pbmMoe3Zpc2l0czogMX0pLnNldCh7Zm9vOiAnYmFyJ30pXG5cblxuICAgIGlmIChpc0J1aWxkZXIpIHtcbiAgICAgIHZhciBwYXRjaCA9IHBhdGNoT3BzKG5ldyBQYXRjaChkb2N1bWVudElkLCB7fSwgdGhpcy5jbGllbnQpKTtcblxuICAgICAgaWYgKCEocGF0Y2ggaW5zdGFuY2VvZiBQYXRjaCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmdW5jdGlvbiBwYXNzZWQgdG8gYHBhdGNoKClgIG11c3QgcmV0dXJuIHRoZSBwYXRjaCcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fYWRkKHtcbiAgICAgICAgcGF0Y2g6IHBhdGNoLnNlcmlhbGl6ZSgpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fYWRkKHtcbiAgICAgIHBhdGNoOiBhc3NpZ24oe1xuICAgICAgICBpZDogZG9jdW1lbnRJZFxuICAgICAgfSwgcGF0Y2hPcHMpXG4gICAgfSk7XG4gIH0sXG4gIHRyYW5zYWN0aW9uSWQ6IGZ1bmN0aW9uIHRyYW5zYWN0aW9uSWQoaWQpIHtcbiAgICBpZiAoIWlkKSB7XG4gICAgICByZXR1cm4gdGhpcy50cnhJZDtcbiAgICB9XG5cbiAgICB0aGlzLnRyeElkID0gaWQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIHNlcmlhbGl6ZTogZnVuY3Rpb24gc2VyaWFsaXplKCkge1xuICAgIHJldHVybiB0aGlzLm9wZXJhdGlvbnMuc2xpY2UoKTtcbiAgfSxcbiAgdG9KU09OOiBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplKCk7XG4gIH0sXG4gIGNvbW1pdDogZnVuY3Rpb24gY29tbWl0KG9wdGlvbnMpIHtcbiAgICBpZiAoIXRoaXMuY2xpZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGBjbGllbnRgIHBhc3NlZCB0byB0cmFuc2FjdGlvbiwgZWl0aGVyIHByb3ZpZGUgb25lIG9yIHBhc3MgdGhlICcgKyAndHJhbnNhY3Rpb24gdG8gYSBjbGllbnRzIGBtdXRhdGUoKWAgbWV0aG9kJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2xpZW50Lm11dGF0ZSh0aGlzLnNlcmlhbGl6ZSgpLCBhc3NpZ24oe1xuICAgICAgdHJhbnNhY3Rpb25JZDogdGhpcy50cnhJZFxuICAgIH0sIGRlZmF1bHRNdXRhdGVPcHRpb25zLCBvcHRpb25zIHx8IHt9KSk7XG4gIH0sXG4gIHJlc2V0OiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICB0aGlzLm9wZXJhdGlvbnMgPSBbXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgX2FkZDogZnVuY3Rpb24gX2FkZChtdXQpIHtcbiAgICB0aGlzLm9wZXJhdGlvbnMucHVzaChtdXQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59KTtcbm1vZHVsZS5leHBvcnRzID0gVHJhbnNhY3Rpb247IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4uL3ZhbGlkYXRvcnMnKTtcblxuZnVuY3Rpb24gRGF0YXNldHNDbGllbnQoY2xpZW50KSB7XG4gIHRoaXMucmVxdWVzdCA9IGNsaWVudC5yZXF1ZXN0LmJpbmQoY2xpZW50KTtcbn1cblxuYXNzaWduKERhdGFzZXRzQ2xpZW50LnByb3RvdHlwZSwge1xuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZShuYW1lLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGlmeSgnUFVUJywgbmFtZSwgb3B0aW9ucyk7XG4gIH0sXG4gIGVkaXQ6IGZ1bmN0aW9uIGVkaXQobmFtZSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9tb2RpZnkoJ1BBVENIJywgbmFtZSwgb3B0aW9ucyk7XG4gIH0sXG4gIGRlbGV0ZTogZnVuY3Rpb24gX2RlbGV0ZShuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGlmeSgnREVMRVRFJywgbmFtZSk7XG4gIH0sXG4gIGxpc3Q6IGZ1bmN0aW9uIGxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XG4gICAgICB1cmk6ICcvZGF0YXNldHMnXG4gICAgfSk7XG4gIH0sXG4gIF9tb2RpZnk6IGZ1bmN0aW9uIF9tb2RpZnkobWV0aG9kLCBuYW1lLCBib2R5KSB7XG4gICAgdmFsaWRhdGUuZGF0YXNldChuYW1lKTtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJpOiBcIi9kYXRhc2V0cy9cIi5jb25jYXQobmFtZSksXG4gICAgICBib2R5OiBib2R5XG4gICAgfSk7XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBEYXRhc2V0c0NsaWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBbXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1ha2VFcnJvciA9IHJlcXVpcmUoJ21ha2UtZXJyb3InKTtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuZnVuY3Rpb24gQ2xpZW50RXJyb3IocmVzKSB7XG4gIHZhciBwcm9wcyA9IGV4dHJhY3RFcnJvclByb3BzKHJlcyk7XG4gIENsaWVudEVycm9yLnN1cGVyLmNhbGwodGhpcywgcHJvcHMubWVzc2FnZSk7XG4gIGFzc2lnbih0aGlzLCBwcm9wcyk7XG59XG5cbmZ1bmN0aW9uIFNlcnZlckVycm9yKHJlcykge1xuICB2YXIgcHJvcHMgPSBleHRyYWN0RXJyb3JQcm9wcyhyZXMpO1xuICBTZXJ2ZXJFcnJvci5zdXBlci5jYWxsKHRoaXMsIHByb3BzLm1lc3NhZ2UpO1xuICBhc3NpZ24odGhpcywgcHJvcHMpO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0RXJyb3JQcm9wcyhyZXMpIHtcbiAgdmFyIGJvZHkgPSByZXMuYm9keTtcbiAgdmFyIHByb3BzID0ge1xuICAgIHJlc3BvbnNlOiByZXMsXG4gICAgc3RhdHVzQ29kZTogcmVzLnN0YXR1c0NvZGUsXG4gICAgcmVzcG9uc2VCb2R5OiBzdHJpbmdpZnlCb2R5KGJvZHksIHJlcylcbiAgfTsgLy8gQVBJL0Jvb20gc3R5bGUgZXJyb3JzICh7c3RhdHVzQ29kZSwgZXJyb3IsIG1lc3NhZ2V9KVxuXG4gIGlmIChib2R5LmVycm9yICYmIGJvZHkubWVzc2FnZSkge1xuICAgIHByb3BzLm1lc3NhZ2UgPSBcIlwiLmNvbmNhdChib2R5LmVycm9yLCBcIiAtIFwiKS5jb25jYXQoYm9keS5tZXNzYWdlKTtcbiAgICByZXR1cm4gcHJvcHM7XG4gIH0gLy8gUXVlcnkvZGF0YWJhc2UgZXJyb3JzICh7ZXJyb3I6IHtkZXNjcmlwdGlvbiwgb3RoZXIsIGFyYiwgcHJvcHN9fSlcblxuXG4gIGlmIChib2R5LmVycm9yICYmIGJvZHkuZXJyb3IuZGVzY3JpcHRpb24pIHtcbiAgICBwcm9wcy5tZXNzYWdlID0gYm9keS5lcnJvci5kZXNjcmlwdGlvbjtcbiAgICBwcm9wcy5kZXRhaWxzID0gYm9keS5lcnJvcjtcbiAgICByZXR1cm4gcHJvcHM7XG4gIH0gLy8gT3RoZXIsIG1vcmUgYXJiaXRyYXJ5IGVycm9yc1xuXG5cbiAgcHJvcHMubWVzc2FnZSA9IGJvZHkuZXJyb3IgfHwgYm9keS5tZXNzYWdlIHx8IGh0dHBFcnJvck1lc3NhZ2UocmVzKTtcbiAgcmV0dXJuIHByb3BzO1xufVxuXG5mdW5jdGlvbiBodHRwRXJyb3JNZXNzYWdlKHJlcykge1xuICB2YXIgc3RhdHVzTWVzc2FnZSA9IHJlcy5zdGF0dXNNZXNzYWdlID8gXCIgXCIuY29uY2F0KHJlcy5zdGF0dXNNZXNzYWdlKSA6ICcnO1xuICByZXR1cm4gXCJcIi5jb25jYXQocmVzLm1ldGhvZCwgXCItcmVxdWVzdCB0byBcIikuY29uY2F0KHJlcy51cmwsIFwiIHJlc3VsdGVkIGluIEhUVFAgXCIpLmNvbmNhdChyZXMuc3RhdHVzQ29kZSkuY29uY2F0KHN0YXR1c01lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlCb2R5KGJvZHksIHJlcykge1xuICB2YXIgY29udGVudFR5cGUgPSAocmVzLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICB2YXIgaXNKc29uID0gY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24vanNvbicpICE9PSAtMTtcbiAgcmV0dXJuIGlzSnNvbiA/IEpTT04uc3RyaW5naWZ5KGJvZHksIG51bGwsIDIpIDogYm9keTtcbn1cblxubWFrZUVycm9yKENsaWVudEVycm9yKTtcbm1ha2VFcnJvcihTZXJ2ZXJFcnJvcik7XG5leHBvcnRzLkNsaWVudEVycm9yID0gQ2xpZW50RXJyb3I7XG5leHBvcnRzLlNlcnZlckVycm9yID0gU2VydmVyRXJyb3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICB2YXIgcXMgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gcGFyYW1zKSB7XG4gICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBxcy5wdXNoKFwiXCIuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudChrZXkpLCBcIj1cIikuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSkpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcXMubGVuZ3RoID4gMCA/IFwiP1wiLmNvbmNhdChxcy5qb2luKCcmJykpIDogJyc7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1lbXB0eS1mdW5jdGlvbiwgbm8tcHJvY2Vzcy1lbnYgKi9cbnZhciBnZXRJdCA9IHJlcXVpcmUoJ2dldC1pdCcpO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgb2JzZXJ2YWJsZSA9IHJlcXVpcmUoJ2dldC1pdC9saWIvbWlkZGxld2FyZS9vYnNlcnZhYmxlJyk7XG5cbnZhciBqc29uUmVxdWVzdCA9IHJlcXVpcmUoJ2dldC1pdC9saWIvbWlkZGxld2FyZS9qc29uUmVxdWVzdCcpO1xuXG52YXIganNvblJlc3BvbnNlID0gcmVxdWlyZSgnZ2V0LWl0L2xpYi9taWRkbGV3YXJlL2pzb25SZXNwb25zZScpO1xuXG52YXIgcHJvZ3Jlc3MgPSByZXF1aXJlKCdnZXQtaXQvbGliL21pZGRsZXdhcmUvcHJvZ3Jlc3MnKTtcblxudmFyIE9ic2VydmFibGUgPSByZXF1aXJlKCdAc2FuaXR5L29ic2VydmFibGUvbWluaW1hbCcpO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuL2Vycm9ycycpLFxuICAgIENsaWVudEVycm9yID0gX3JlcXVpcmUuQ2xpZW50RXJyb3IsXG4gICAgU2VydmVyRXJyb3IgPSBfcmVxdWlyZS5TZXJ2ZXJFcnJvcjtcblxudmFyIGh0dHBFcnJvciA9IHtcbiAgb25SZXNwb25zZTogZnVuY3Rpb24gb25SZXNwb25zZShyZXMpIHtcbiAgICBpZiAocmVzLnN0YXR1c0NvZGUgPj0gNTAwKSB7XG4gICAgICB0aHJvdyBuZXcgU2VydmVyRXJyb3IocmVzKTtcbiAgICB9IGVsc2UgaWYgKHJlcy5zdGF0dXNDb2RlID49IDQwMCkge1xuICAgICAgdGhyb3cgbmV3IENsaWVudEVycm9yKHJlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxufTtcbnZhciBwcmludFdhcm5pbmdzID0ge1xuICBvblJlc3BvbnNlOiBmdW5jdGlvbiBvblJlc3BvbnNlKHJlcykge1xuICAgIHZhciB3YXJuID0gcmVzLmhlYWRlcnNbJ3gtc2FuaXR5LXdhcm5pbmcnXTtcbiAgICB2YXIgd2FybmluZ3MgPSBBcnJheS5pc0FycmF5KHdhcm4pID8gd2FybiA6IFt3YXJuXTtcbiAgICB3YXJuaW5ncy5maWx0ZXIoQm9vbGVhbikuZm9yRWFjaChmdW5jdGlvbiAobXNnKSB7XG4gICAgICByZXR1cm4gY29uc29sZS53YXJuKG1zZyk7XG4gICAgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxufTsgLy8gRW52aXJvbm1lbnQtc3BlY2lmaWMgbWlkZGxld2FyZS5cblxudmFyIGVudlNwZWNpZmljID0gcmVxdWlyZSgnLi9ub2RlTWlkZGxld2FyZScpO1xuXG52YXIgbWlkZGxld2FyZSA9IGVudlNwZWNpZmljLmNvbmNhdChbcHJpbnRXYXJuaW5ncywganNvblJlcXVlc3QoKSwganNvblJlc3BvbnNlKCksIHByb2dyZXNzKCksIGh0dHBFcnJvciwgb2JzZXJ2YWJsZSh7XG4gIGltcGxlbWVudGF0aW9uOiBPYnNlcnZhYmxlXG59KV0pO1xudmFyIHJlcXVlc3QgPSBnZXRJdChtaWRkbGV3YXJlKTtcblxuZnVuY3Rpb24gaHR0cFJlcXVlc3Qob3B0aW9ucykge1xuICB2YXIgcmVxdWVzdGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiByZXF1ZXN0O1xuICByZXR1cm4gcmVxdWVzdGVyKGFzc2lnbih7XG4gICAgbWF4UmVkaXJlY3RzOiAwXG4gIH0sIG9wdGlvbnMpKTtcbn1cblxuaHR0cFJlcXVlc3QuZGVmYXVsdFJlcXVlc3RlciA9IHJlcXVlc3Q7XG5odHRwUmVxdWVzdC5DbGllbnRFcnJvciA9IENsaWVudEVycm9yO1xuaHR0cFJlcXVlc3QuU2VydmVyRXJyb3IgPSBTZXJ2ZXJFcnJvcjtcbm1vZHVsZS5leHBvcnRzID0gaHR0cFJlcXVlc3Q7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBwcm9qZWN0SGVhZGVyID0gJ1gtU2FuaXR5LVByb2plY3QtSUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgdmFyIG92ZXJyaWRlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBoZWFkZXJzID0ge307XG4gIHZhciB0b2tlbiA9IG92ZXJyaWRlcy50b2tlbiB8fCBjb25maWcudG9rZW47XG5cbiAgaWYgKHRva2VuKSB7XG4gICAgaGVhZGVycy5BdXRob3JpemF0aW9uID0gXCJCZWFyZXIgXCIuY29uY2F0KHRva2VuKTtcbiAgfVxuXG4gIGlmICghb3ZlcnJpZGVzLnVzZUdsb2JhbEFwaSAmJiAhY29uZmlnLnVzZVByb2plY3RIb3N0bmFtZSAmJiBjb25maWcucHJvamVjdElkKSB7XG4gICAgaGVhZGVyc1twcm9qZWN0SGVhZGVyXSA9IGNvbmZpZy5wcm9qZWN0SWQ7XG4gIH1cblxuICB2YXIgd2l0aENyZWRlbnRpYWxzID0gQm9vbGVhbih0eXBlb2Ygb3ZlcnJpZGVzLndpdGhDcmVkZW50aWFscyA9PT0gJ3VuZGVmaW5lZCcgPyBjb25maWcudG9rZW4gfHwgY29uZmlnLndpdGhDcmVkZW50aWFscyA6IG92ZXJyaWRlcy53aXRoQ3JlZGVudGlhbHMpO1xuICB2YXIgdGltZW91dCA9IHR5cGVvZiBvdmVycmlkZXMudGltZW91dCA9PT0gJ3VuZGVmaW5lZCcgPyBjb25maWcudGltZW91dCA6IG92ZXJyaWRlcy50aW1lb3V0O1xuICByZXR1cm4gYXNzaWduKHt9LCBvdmVycmlkZXMsIHtcbiAgICBoZWFkZXJzOiBhc3NpZ24oe30sIGhlYWRlcnMsIG92ZXJyaWRlcy5oZWFkZXJzIHx8IHt9KSxcbiAgICB0aW1lb3V0OiB0eXBlb2YgdGltZW91dCA9PT0gJ3VuZGVmaW5lZCcgPyA1ICogNjAgKiAxMDAwIDogdGltZW91dCxcbiAgICBqc29uOiB0cnVlLFxuICAgIHdpdGhDcmVkZW50aWFsczogd2l0aENyZWRlbnRpYWxzXG4gIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuZnVuY3Rpb24gUHJvamVjdHNDbGllbnQoY2xpZW50KSB7XG4gIHRoaXMuY2xpZW50ID0gY2xpZW50O1xufVxuXG5hc3NpZ24oUHJvamVjdHNDbGllbnQucHJvdG90eXBlLCB7XG4gIGxpc3Q6IGZ1bmN0aW9uIGxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3Qoe1xuICAgICAgdXJpOiAnL3Byb2plY3RzJ1xuICAgIH0pO1xuICB9LFxuICBnZXRCeUlkOiBmdW5jdGlvbiBnZXRCeUlkKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3Qoe1xuICAgICAgdXJpOiBcIi9wcm9qZWN0cy9cIi5jb25jYXQoaWQpXG4gICAgfSk7XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBQcm9qZWN0c0NsaWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnQHNhbml0eS9vYnNlcnZhYmxlL29wZXJhdG9ycy9maWx0ZXInKSxcbiAgICBmaWx0ZXIgPSBfcmVxdWlyZS5maWx0ZXI7XG5cbnZhciBfcmVxdWlyZTIgPSByZXF1aXJlKCdAc2FuaXR5L29ic2VydmFibGUvb3BlcmF0b3JzL21hcCcpLFxuICAgIG1hcCA9IF9yZXF1aXJlMi5tYXA7XG5cbnZhciBQYXRjaCA9IHJlcXVpcmUoJy4vZGF0YS9wYXRjaCcpO1xuXG52YXIgVHJhbnNhY3Rpb24gPSByZXF1aXJlKCcuL2RhdGEvdHJhbnNhY3Rpb24nKTtcblxudmFyIGRhdGFNZXRob2RzID0gcmVxdWlyZSgnLi9kYXRhL2RhdGFNZXRob2RzJyk7XG5cbnZhciBEYXRhc2V0c0NsaWVudCA9IHJlcXVpcmUoJy4vZGF0YXNldHMvZGF0YXNldHNDbGllbnQnKTtcblxudmFyIFByb2plY3RzQ2xpZW50ID0gcmVxdWlyZSgnLi9wcm9qZWN0cy9wcm9qZWN0c0NsaWVudCcpO1xuXG52YXIgQXNzZXRzQ2xpZW50ID0gcmVxdWlyZSgnLi9hc3NldHMvYXNzZXRzQ2xpZW50Jyk7XG5cbnZhciBVc2Vyc0NsaWVudCA9IHJlcXVpcmUoJy4vdXNlcnMvdXNlcnNDbGllbnQnKTtcblxudmFyIEF1dGhDbGllbnQgPSByZXF1aXJlKCcuL2F1dGgvYXV0aENsaWVudCcpO1xuXG52YXIgaHR0cFJlcXVlc3QgPSByZXF1aXJlKCcuL2h0dHAvcmVxdWVzdCcpO1xuXG52YXIgZ2V0UmVxdWVzdE9wdGlvbnMgPSByZXF1aXJlKCcuL2h0dHAvcmVxdWVzdE9wdGlvbnMnKTtcblxudmFyIF9yZXF1aXJlMyA9IHJlcXVpcmUoJy4vY29uZmlnJyksXG4gICAgZGVmYXVsdENvbmZpZyA9IF9yZXF1aXJlMy5kZWZhdWx0Q29uZmlnLFxuICAgIGluaXRDb25maWcgPSBfcmVxdWlyZTMuaW5pdENvbmZpZztcblxudmFyIHRvUHJvbWlzZSA9IGZ1bmN0aW9uIHRvUHJvbWlzZShvYnNlcnZhYmxlKSB7XG4gIHJldHVybiBvYnNlcnZhYmxlLnRvUHJvbWlzZSgpO1xufTtcblxuZnVuY3Rpb24gU2FuaXR5Q2xpZW50KCkge1xuICB2YXIgY29uZmlnID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBkZWZhdWx0Q29uZmlnO1xuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTYW5pdHlDbGllbnQpKSB7XG4gICAgcmV0dXJuIG5ldyBTYW5pdHlDbGllbnQoY29uZmlnKTtcbiAgfVxuXG4gIHRoaXMuY29uZmlnKGNvbmZpZyk7XG4gIHRoaXMuYXNzZXRzID0gbmV3IEFzc2V0c0NsaWVudCh0aGlzKTtcbiAgdGhpcy5kYXRhc2V0cyA9IG5ldyBEYXRhc2V0c0NsaWVudCh0aGlzKTtcbiAgdGhpcy5wcm9qZWN0cyA9IG5ldyBQcm9qZWN0c0NsaWVudCh0aGlzKTtcbiAgdGhpcy51c2VycyA9IG5ldyBVc2Vyc0NsaWVudCh0aGlzKTtcbiAgdGhpcy5hdXRoID0gbmV3IEF1dGhDbGllbnQodGhpcyk7XG5cbiAgaWYgKHRoaXMuY2xpZW50Q29uZmlnLmlzUHJvbWlzZUFQSSkge1xuICAgIHZhciBvYnNlcnZhYmxlQ29uZmlnID0gYXNzaWduKHt9LCB0aGlzLmNsaWVudENvbmZpZywge1xuICAgICAgaXNQcm9taXNlQVBJOiBmYWxzZVxuICAgIH0pO1xuICAgIHRoaXMub2JzZXJ2YWJsZSA9IG5ldyBTYW5pdHlDbGllbnQob2JzZXJ2YWJsZUNvbmZpZyk7XG4gIH1cbn1cblxuYXNzaWduKFNhbml0eUNsaWVudC5wcm90b3R5cGUsIGRhdGFNZXRob2RzKTtcbmFzc2lnbihTYW5pdHlDbGllbnQucHJvdG90eXBlLCB7XG4gIGNsb25lOiBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFNhbml0eUNsaWVudCh0aGlzLmNvbmZpZygpKTtcbiAgfSxcbiAgY29uZmlnOiBmdW5jdGlvbiBjb25maWcobmV3Q29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBuZXdDb25maWcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gYXNzaWduKHt9LCB0aGlzLmNsaWVudENvbmZpZyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub2JzZXJ2YWJsZSkge1xuICAgICAgdmFyIG9ic2VydmFibGVDb25maWcgPSBhc3NpZ24oe30sIG5ld0NvbmZpZywge1xuICAgICAgICBpc1Byb21pc2VBUEk6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIHRoaXMub2JzZXJ2YWJsZS5jb25maWcob2JzZXJ2YWJsZUNvbmZpZyk7XG4gICAgfVxuXG4gICAgdGhpcy5jbGllbnRDb25maWcgPSBpbml0Q29uZmlnKG5ld0NvbmZpZywgdGhpcy5jbGllbnRDb25maWcgfHwge30pO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICB3aXRoQ29uZmlnOiBmdW5jdGlvbiB3aXRoQ29uZmlnKG5ld0NvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkuY29uZmlnKG5ld0NvbmZpZyk7XG4gIH0sXG4gIGdldFVybDogZnVuY3Rpb24gZ2V0VXJsKHVyaSkge1xuICAgIHZhciBjYW5Vc2VDZG4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgIHZhciBiYXNlID0gY2FuVXNlQ2RuID8gdGhpcy5jbGllbnRDb25maWcuY2RuVXJsIDogdGhpcy5jbGllbnRDb25maWcudXJsO1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChiYXNlLCBcIi9cIikuY29uY2F0KHVyaS5yZXBsYWNlKC9eXFwvLywgJycpKTtcbiAgfSxcbiAgaXNQcm9taXNlQVBJOiBmdW5jdGlvbiBpc1Byb21pc2VBUEkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50Q29uZmlnLmlzUHJvbWlzZUFQSTtcbiAgfSxcbiAgX3JlcXVlc3RPYnNlcnZhYmxlOiBmdW5jdGlvbiBfcmVxdWVzdE9ic2VydmFibGUob3B0aW9ucykge1xuICAgIHZhciB1cmkgPSBvcHRpb25zLnVybCB8fCBvcHRpb25zLnVyaTtcbiAgICB2YXIgY2FuVXNlQ2RuID0gdGhpcy5jbGllbnRDb25maWcudXNlQ2RuICYmIFsnR0VUJywgJ0hFQUQnXS5pbmRleE9mKG9wdGlvbnMubWV0aG9kIHx8ICdHRVQnKSA+PSAwICYmIHVyaS5pbmRleE9mKCcvZGF0YS8nKSA9PT0gMDtcbiAgICB2YXIgcmVxT3B0aW9ucyA9IGdldFJlcXVlc3RPcHRpb25zKHRoaXMuY2xpZW50Q29uZmlnLCBhc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgIHVybDogdGhpcy5nZXRVcmwodXJpLCBjYW5Vc2VDZG4pXG4gICAgfSkpO1xuICAgIHJldHVybiBodHRwUmVxdWVzdChyZXFPcHRpb25zLCB0aGlzLmNsaWVudENvbmZpZy5yZXF1ZXN0ZXIpO1xuICB9LFxuICByZXF1ZXN0OiBmdW5jdGlvbiByZXF1ZXN0KG9wdGlvbnMpIHtcbiAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaXMuX3JlcXVlc3RPYnNlcnZhYmxlKG9wdGlvbnMpLnBpcGUoZmlsdGVyKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuIGV2ZW50LnR5cGUgPT09ICdyZXNwb25zZSc7XG4gICAgfSksIG1hcChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHJldHVybiBldmVudC5ib2R5O1xuICAgIH0pKTtcblxuICAgIHJldHVybiB0aGlzLmlzUHJvbWlzZUFQSSgpID8gdG9Qcm9taXNlKG9ic2VydmFibGUpIDogb2JzZXJ2YWJsZTtcbiAgfVxufSk7XG5TYW5pdHlDbGllbnQuUGF0Y2ggPSBQYXRjaDtcblNhbml0eUNsaWVudC5UcmFuc2FjdGlvbiA9IFRyYW5zYWN0aW9uO1xuU2FuaXR5Q2xpZW50LkNsaWVudEVycm9yID0gaHR0cFJlcXVlc3QuQ2xpZW50RXJyb3I7XG5TYW5pdHlDbGllbnQuU2VydmVyRXJyb3IgPSBodHRwUmVxdWVzdC5TZXJ2ZXJFcnJvcjtcblNhbml0eUNsaWVudC5yZXF1ZXN0ZXIgPSBodHRwUmVxdWVzdC5kZWZhdWx0UmVxdWVzdGVyO1xubW9kdWxlLmV4cG9ydHMgPSBTYW5pdHlDbGllbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbmZ1bmN0aW9uIFVzZXJzQ2xpZW50KGNsaWVudCkge1xuICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbn1cblxuYXNzaWduKFVzZXJzQ2xpZW50LnByb3RvdHlwZSwge1xuICBnZXRCeUlkOiBmdW5jdGlvbiBnZXRCeUlkKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnJlcXVlc3Qoe1xuICAgICAgdXJpOiBcIi91c2Vycy9cIi5jb25jYXQoaWQpXG4gICAgfSk7XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBVc2Vyc0NsaWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqLCBkZWZhdWx0cykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoZGVmYXVsdHMpLmNvbmNhdChPYmplY3Qua2V5cyhvYmopKS5yZWR1Y2UoZnVuY3Rpb24gKHRhcmdldCwgcHJvcCkge1xuICAgIHRhcmdldFtwcm9wXSA9IHR5cGVvZiBvYmpbcHJvcF0gPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdHNbcHJvcF0gOiBvYmpbcHJvcF07XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfSwge30pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRTZWxlY3Rpb24oc2VsKSB7XG4gIGlmICh0eXBlb2Ygc2VsID09PSAnc3RyaW5nJyB8fCBBcnJheS5pc0FycmF5KHNlbCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHNlbFxuICAgIH07XG4gIH1cblxuICBpZiAoc2VsICYmIHNlbC5xdWVyeSkge1xuICAgIHJldHVybiB7XG4gICAgICBxdWVyeTogc2VsLnF1ZXJ5XG4gICAgfTtcbiAgfVxuXG4gIHZhciBzZWxlY3Rpb25PcHRzID0gWycqIERvY3VtZW50IElEICg8ZG9jSWQ+KScsICcqIEFycmF5IG9mIGRvY3VtZW50IElEcycsICcqIE9iamVjdCBjb250YWluaW5nIGBxdWVyeWAnXS5qb2luKCdcXG4nKTtcbiAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBzZWxlY3Rpb24gLSBtdXN0IGJlIG9uZSBvZjpcXG5cXG5cIi5jb25jYXQoc2VsZWN0aW9uT3B0cykpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4pIHtcbiAgdmFyIGRpZENhbGwgPSBmYWxzZTtcbiAgdmFyIHJldHVyblZhbHVlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChkaWRDYWxsKSB7XG4gICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuVmFsdWUgPSBmbi5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgZGlkQ2FsbCA9IHRydWU7XG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqLCBwcm9wcykge1xuICByZXR1cm4gcHJvcHMucmVkdWNlKGZ1bmN0aW9uIChzZWxlY3Rpb24sIHByb3ApIHtcbiAgICBpZiAodHlwZW9mIG9ialtwcm9wXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBzZWxlY3Rpb247XG4gICAgfVxuXG4gICAgc2VsZWN0aW9uW3Byb3BdID0gb2JqW3Byb3BdO1xuICAgIHJldHVybiBzZWxlY3Rpb247XG4gIH0sIHt9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxudmFyIFZBTElEX0FTU0VUX1RZUEVTID0gWydpbWFnZScsICdmaWxlJ107XG52YXIgVkFMSURfSU5TRVJUX0xPQ0FUSU9OUyA9IFsnYmVmb3JlJywgJ2FmdGVyJywgJ3JlcGxhY2UnXTtcblxuZXhwb3J0cy5kYXRhc2V0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCEvXih+W2EtejAtOV17MX1bLVxcd117MCwyNX18W2EtejAtOV17MX1bLVxcd117MCwxOX0pJC8udGVzdChuYW1lKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRGF0YXNldHMgY2FuIG9ubHkgY29udGFpbiBsb3dlcmNhc2UgY2hhcmFjdGVycywgbnVtYmVycywgdW5kZXJzY29yZXMgYW5kIGRhc2hlcywgYW5kIHN0YXJ0IHdpdGggdGlsZGUsIGFuZCBiZSBtYXhpbXVtIDIwIGNoYXJhY3RlcnMnKTtcbiAgfVxufTtcblxuZXhwb3J0cy5wcm9qZWN0SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgaWYgKCEvXlstYS16MC05XSskL2kudGVzdChpZCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2Bwcm9qZWN0SWRgIGNhbiBvbmx5IGNvbnRhaW4gb25seSBhLXosIDAtOSBhbmQgZGFzaGVzJyk7XG4gIH1cbn07XG5cbmV4cG9ydHMudmFsaWRhdGVBc3NldFR5cGUgPSBmdW5jdGlvbiAodHlwZSkge1xuICBpZiAoVkFMSURfQVNTRVRfVFlQRVMuaW5kZXhPZih0eXBlKSA9PT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGFzc2V0IHR5cGU6IFwiLmNvbmNhdCh0eXBlLCBcIi4gTXVzdCBiZSBvbmUgb2YgXCIpLmNvbmNhdChWQUxJRF9BU1NFVF9UWVBFUy5qb2luKCcsICcpKSk7XG4gIH1cbn07XG5cbmV4cG9ydHMudmFsaWRhdGVPYmplY3QgPSBmdW5jdGlvbiAob3AsIHZhbCkge1xuICBpZiAodmFsID09PSBudWxsIHx8IF90eXBlb2YodmFsKSAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KG9wLCBcIigpIHRha2VzIGFuIG9iamVjdCBvZiBwcm9wZXJ0aWVzXCIpKTtcbiAgfVxufTtcblxuZXhwb3J0cy5yZXF1aXJlRG9jdW1lbnRJZCA9IGZ1bmN0aW9uIChvcCwgZG9jKSB7XG4gIGlmICghZG9jLl9pZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChvcCwgXCIoKSByZXF1aXJlcyB0aGF0IHRoZSBkb2N1bWVudCBjb250YWlucyBhbiBJRCAoXFxcIl9pZFxcXCIgcHJvcGVydHkpXCIpKTtcbiAgfVxuXG4gIGV4cG9ydHMudmFsaWRhdGVEb2N1bWVudElkKG9wLCBkb2MuX2lkKTtcbn07XG5cbmV4cG9ydHMudmFsaWRhdGVEb2N1bWVudElkID0gZnVuY3Rpb24gKG9wLCBpZCkge1xuICBpZiAodHlwZW9mIGlkICE9PSAnc3RyaW5nJyB8fCAhL15bYS16MC05Xy4tXSskL2kudGVzdChpZCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQob3AsIFwiKCk6IFxcXCJcIikuY29uY2F0KGlkLCBcIlxcXCIgaXMgbm90IGEgdmFsaWQgZG9jdW1lbnQgSURcIikpO1xuICB9XG59O1xuXG5leHBvcnRzLnZhbGlkYXRlSW5zZXJ0ID0gZnVuY3Rpb24gKGF0LCBzZWxlY3RvciwgaXRlbXMpIHtcbiAgdmFyIHNpZ25hdHVyZSA9ICdpbnNlcnQoYXQsIHNlbGVjdG9yLCBpdGVtcyknO1xuXG4gIGlmIChWQUxJRF9JTlNFUlRfTE9DQVRJT05TLmluZGV4T2YoYXQpID09PSAtMSkge1xuICAgIHZhciB2YWxpZCA9IFZBTElEX0lOU0VSVF9MT0NBVElPTlMubWFwKGZ1bmN0aW9uIChsb2MpIHtcbiAgICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQobG9jLCBcIlxcXCJcIik7XG4gICAgfSkuam9pbignLCAnKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQoc2lnbmF0dXJlLCBcIiB0YWtlcyBhbiBcXFwiYXRcXFwiLWFyZ3VtZW50IHdoaWNoIGlzIG9uZSBvZjogXCIpLmNvbmNhdCh2YWxpZCkpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQoc2lnbmF0dXJlLCBcIiB0YWtlcyBhIFxcXCJzZWxlY3RvclxcXCItYXJndW1lbnQgd2hpY2ggbXVzdCBiZSBhIHN0cmluZ1wiKSk7XG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KHNpZ25hdHVyZSwgXCIgdGFrZXMgYW4gXFxcIml0ZW1zXFxcIi1hcmd1bWVudCB3aGljaCBtdXN0IGJlIGFuIGFycmF5XCIpKTtcbiAgfVxufTtcblxuZXhwb3J0cy5oYXNEYXRhc2V0ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICBpZiAoIWNvbmZpZy5ncmFkaWVudE1vZGUgJiYgIWNvbmZpZy5kYXRhc2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdgZGF0YXNldGAgbXVzdCBiZSBwcm92aWRlZCB0byBwZXJmb3JtIHF1ZXJpZXMnKTtcbiAgfVxuXG4gIHJldHVybiBjb25maWcuZGF0YXNldCB8fCAnJztcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBnZW5lcmF0ZUhlbHBVcmwgPSByZXF1aXJlKCdAc2FuaXR5L2dlbmVyYXRlLWhlbHAtdXJsJyk7XG5cbnZhciBvbmNlID0gcmVxdWlyZSgnLi91dGlsL29uY2UnKTtcblxudmFyIGNyZWF0ZVdhcm5pbmdQcmludGVyID0gZnVuY3Rpb24gY3JlYXRlV2FybmluZ1ByaW50ZXIobWVzc2FnZSkge1xuICByZXR1cm4gKC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgb25jZShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2NvbnNvbGU7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKF9jb25zb2xlID0gY29uc29sZSkud2Fybi5hcHBseShfY29uc29sZSwgW21lc3NhZ2Uuam9pbignICcpXS5jb25jYXQoYXJncykpO1xuICAgIH0pXG4gICk7XG59O1xuXG5leHBvcnRzLnByaW50Q2RuV2FybmluZyA9IGNyZWF0ZVdhcm5pbmdQcmludGVyKFsnWW91IGFyZSBub3QgdXNpbmcgdGhlIFNhbml0eSBDRE4uIFRoYXQgbWVhbnMgeW91ciBkYXRhIGlzIGFsd2F5cyBmcmVzaCwgYnV0IHRoZSBDRE4gaXMgZmFzdGVyIGFuZCcsIFwiY2hlYXBlci4gVGhpbmsgYWJvdXQgaXQhIEZvciBtb3JlIGluZm8sIHNlZSBcIi5jb25jYXQoZ2VuZXJhdGVIZWxwVXJsKCdqcy1jbGllbnQtY2RuLWNvbmZpZ3VyYXRpb24nKSwgXCIuXCIpLCAnVG8gaGlkZSB0aGlzIHdhcm5pbmcsIHBsZWFzZSBzZXQgdGhlIGB1c2VDZG5gIG9wdGlvbiB0byBlaXRoZXIgYHRydWVgIG9yIGBmYWxzZWAgd2hlbiBjcmVhdGluZycsICd0aGUgY2xpZW50LiddKTtcbmV4cG9ydHMucHJpbnRCcm93c2VyVG9rZW5XYXJuaW5nID0gY3JlYXRlV2FybmluZ1ByaW50ZXIoWydZb3UgaGF2ZSBjb25maWd1cmVkIFNhbml0eSBjbGllbnQgdG8gdXNlIGEgdG9rZW4gaW4gdGhlIGJyb3dzZXIuIFRoaXMgbWF5IGNhdXNlIHVuaW50ZW50aW9uYWwgc2VjdXJpdHkgaXNzdWVzLicsIFwiU2VlIFwiLmNvbmNhdChnZW5lcmF0ZUhlbHBVcmwoJ2pzLWNsaWVudC1icm93c2VyLXRva2VuJyksIFwiIGZvciBtb3JlIGluZm9ybWF0aW9uIGFuZCBob3cgdG8gaGlkZSB0aGlzIHdhcm5pbmcuXCIpXSk7XG5leHBvcnRzLnByaW50Q2RuVG9rZW5XYXJuaW5nID0gY3JlYXRlV2FybmluZ1ByaW50ZXIoWydZb3UgaGF2ZSBzZXQgYHVzZUNkbmAgdG8gYHRydWVgIHdoaWxlIGFsc28gc3BlY2lmeWluZyBhIHRva2VuLiBUaGlzIGlzIHVzdWFsbHkgbm90IHdoYXQgeW91JywgJ3dhbnQuIFRoZSBDRE4gY2Fubm90IGJlIHVzZWQgd2l0aCBhbiBhdXRob3JpemF0aW9uIHRva2VuLCBzaW5jZSBwcml2YXRlIGRhdGEgY2Fubm90IGJlIGNhY2hlZC4nLCBcIlNlZSBcIi5jb25jYXQoZ2VuZXJhdGVIZWxwVXJsKCdqcy1jbGllbnQtdXNlY2RuLXRva2VuJyksIFwiIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiKV0pO1xuZXhwb3J0cy5wcmludE5vQXBpVmVyc2lvblNwZWNpZmllZFdhcm5pbmcgPSBjcmVhdGVXYXJuaW5nUHJpbnRlcihbJ1VzaW5nIHRoZSBTYW5pdHkgY2xpZW50IHdpdGhvdXQgc3BlY2lmeWluZyBhbiBBUEkgdmVyc2lvbiBpcyBkZXByZWNhdGVkLicsIFwiU2VlIFwiLmNvbmNhdChnZW5lcmF0ZUhlbHBVcmwoJ2pzLWNsaWVudC1hcGktdmVyc2lvbicpKV0pOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXZhciAqL1xudmFyIGV2cyA9IHJlcXVpcmUoJ0ByZXh4YXJzL2V2ZW50c291cmNlLXBvbHlmaWxsJylcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuRXZlbnRTb3VyY2UgfHwgZXZzLkV2ZW50U291cmNlXG4iLCJ2YXIgYmFzZVVybCA9ICdodHRwczovL2RvY3Muc2FuaXR5LmlvL2hlbHAvJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdlbmVyYXRlSGVscFVybChzbHVnKSB7XG4gIHJldHVybiBiYXNlVXJsICsgc2x1Z1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJ3J4anMvaW50ZXJuYWwvT2JzZXJ2YWJsZScpLFxuICAgIE9ic2VydmFibGUgPSBfcmVxdWlyZS5PYnNlcnZhYmxlO1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgX3JlcXVpcmUyID0gcmVxdWlyZSgnLi4vb3BlcmF0b3JzL21hcCcpLFxuICAgIG1hcCA9IF9yZXF1aXJlMi5tYXA7XG5cbnZhciBfcmVxdWlyZTMgPSByZXF1aXJlKCcuLi9vcGVyYXRvcnMvZmlsdGVyJyksXG4gICAgZmlsdGVyID0gX3JlcXVpcmUzLmZpbHRlcjtcblxudmFyIF9yZXF1aXJlNCA9IHJlcXVpcmUoJy4uL29wZXJhdG9ycy9yZWR1Y2UnKSxcbiAgICByZWR1Y2UgPSBfcmVxdWlyZTQucmVkdWNlO1xuLypcbiBBIG1pbmltYWwgcnhqcyBiYXNlZCBvYnNlcnZhYmxlIHRoYXQgYWxpZ24gYXMgY2xvc2VseSBhcyBwb3NzaWJsZSB3aXRoIHRoZSBjdXJyZW50IGVzLW9ic2VydmFibGUgc3BlYyxcbiB3aXRob3V0IHRoZSBzdGF0aWMgZmFjdG9yeSBtZXRob2RzXG4gKi9cblxuXG5mdW5jdGlvbiBTYW5pdHlPYnNlcnZhYmxlTWluaW1hbCgpIHtcbiAgT2JzZXJ2YWJsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xufVxuXG5TYW5pdHlPYnNlcnZhYmxlTWluaW1hbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGFzc2lnbihPYmplY3QuY3JlYXRlKG51bGwpLCBPYnNlcnZhYmxlLnByb3RvdHlwZSkpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNhbml0eU9ic2VydmFibGVNaW5pbWFsLnByb3RvdHlwZSwgJ2NvbnN0cnVjdG9yJywge1xuICB2YWx1ZTogU2FuaXR5T2JzZXJ2YWJsZU1pbmltYWwsXG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogdHJ1ZSxcbiAgY29uZmlndXJhYmxlOiB0cnVlXG59KTtcblxuU2FuaXR5T2JzZXJ2YWJsZU1pbmltYWwucHJvdG90eXBlLmxpZnQgPSBmdW5jdGlvbiBsaWZ0KG9wZXJhdG9yKSB7XG4gIHZhciBvYnNlcnZhYmxlID0gbmV3IFNhbml0eU9ic2VydmFibGVNaW5pbWFsKCk7XG4gIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgb2JzZXJ2YWJsZS5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICByZXR1cm4gb2JzZXJ2YWJsZTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZURlcHJlY2F0ZWRNZW1iZXJPcChuYW1lLCBvcCkge1xuICB2YXIgaGFzV2FybmVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiBkZXByZWNhdGVkT3BlcmF0b3IoKSB7XG4gICAgaWYgKCFoYXNXYXJuZWQpIHtcbiAgICAgIGhhc1dhcm5lZCA9IHRydWU7XG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKFwiQ2FsbGluZyBvYnNlcnZhYmxlLlwiLmNvbmNhdChuYW1lLCBcIiguLi4pIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2Ugb2JzZXJ2YWJsZS5waXBlKFwiKS5jb25jYXQobmFtZSwgXCIoLi4uKSkgaW5zdGVhZFwiKSkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnBpcGUob3AuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59XG5cblNhbml0eU9ic2VydmFibGVNaW5pbWFsLnByb3RvdHlwZS5tYXAgPSBjcmVhdGVEZXByZWNhdGVkTWVtYmVyT3AoJ21hcCcsIG1hcCk7XG5TYW5pdHlPYnNlcnZhYmxlTWluaW1hbC5wcm90b3R5cGUuZmlsdGVyID0gY3JlYXRlRGVwcmVjYXRlZE1lbWJlck9wKCdmaWx0ZXInLCBmaWx0ZXIpO1xuU2FuaXR5T2JzZXJ2YWJsZU1pbmltYWwucHJvdG90eXBlLnJlZHVjZSA9IGNyZWF0ZURlcHJlY2F0ZWRNZW1iZXJPcCgnZmlsdGVyJywgcmVkdWNlKTtcbm1vZHVsZS5leHBvcnRzID0gU2FuaXR5T2JzZXJ2YWJsZU1pbmltYWw7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9TYW5pdHlPYnNlcnZhYmxlTWluaW1hbCcpXG4iLCJleHBvcnRzLmZpbHRlciA9IHJlcXVpcmUoJ3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzL2ZpbHRlcicpLmZpbHRlclxuIiwiZXhwb3J0cy5tYXAgPSByZXF1aXJlKCdyeGpzL2ludGVybmFsL29wZXJhdG9ycy9tYXAnKS5tYXBcbiIsImV4cG9ydHMucmVkdWNlID0gcmVxdWlyZSgncnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvcmVkdWNlJykucmVkdWNlXG4iLCIndXNlIHN0cmljdCc7XG52YXIgaXNPYmogPSByZXF1aXJlKCdpcy1vYmonKTtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignU291cmNlcyBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gYXNzaWduS2V5KHRvLCBmcm9tLCBrZXkpIHtcblx0dmFyIHZhbCA9IGZyb21ba2V5XTtcblxuXHRpZiAodmFsID09PSB1bmRlZmluZWQgfHwgdmFsID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGhhc093blByb3BlcnR5LmNhbGwodG8sIGtleSkpIHtcblx0XHRpZiAodG9ba2V5XSA9PT0gdW5kZWZpbmVkIHx8IHRvW2tleV0gPT09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCAoJyArIGtleSArICcpJyk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKHRvLCBrZXkpIHx8ICFpc09iaih2YWwpKSB7XG5cdFx0dG9ba2V5XSA9IHZhbDtcblx0fSBlbHNlIHtcblx0XHR0b1trZXldID0gYXNzaWduKE9iamVjdCh0b1trZXldKSwgZnJvbVtrZXldKTtcblx0fVxufVxuXG5mdW5jdGlvbiBhc3NpZ24odG8sIGZyb20pIHtcblx0aWYgKHRvID09PSBmcm9tKSB7XG5cdFx0cmV0dXJuIHRvO1xuXHR9XG5cblx0ZnJvbSA9IE9iamVjdChmcm9tKTtcblxuXHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdGFzc2lnbktleSh0bywgZnJvbSwga2V5KTtcblx0XHR9XG5cdH1cblxuXHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRhc3NpZ25LZXkodG8sIGZyb20sIHN5bWJvbHNbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWVwQXNzaWduKHRhcmdldCkge1xuXHR0YXJnZXQgPSB0b09iamVjdCh0YXJnZXQpO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0YXNzaWduKHRhcmdldCwgYXJndW1lbnRzW3NdKTtcblx0fVxuXG5cdHJldHVybiB0YXJnZXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi1ub2RlJylcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHB1YnN1YiA9IHJlcXVpcmUoJ25hbm8tcHVic3ViJyk7XG52YXIgbWlkZGxld2FyZVJlZHVjZXIgPSByZXF1aXJlKCcuL3V0aWwvbWlkZGxld2FyZVJlZHVjZXInKTtcbnZhciBwcm9jZXNzT3B0aW9ucyA9IHJlcXVpcmUoJy4vbWlkZGxld2FyZS9kZWZhdWx0T3B0aW9uc1Byb2Nlc3NvcicpO1xudmFyIHZhbGlkYXRlT3B0aW9ucyA9IHJlcXVpcmUoJy4vbWlkZGxld2FyZS9kZWZhdWx0T3B0aW9uc1ZhbGlkYXRvcicpO1xudmFyIGh0dHBSZXF1ZXN0ID0gcmVxdWlyZSgnLi9yZXF1ZXN0Jyk7IC8vIG5vZGUtcmVxdWVzdCBpbiBub2RlLCBicm93c2VyLXJlcXVlc3QgaW4gYnJvd3NlcnNcblxudmFyIGNoYW5uZWxOYW1lcyA9IFsncmVxdWVzdCcsICdyZXNwb25zZScsICdwcm9ncmVzcycsICdlcnJvcicsICdhYm9ydCddO1xudmFyIG1pZGRsZWhvb2tzID0gWydwcm9jZXNzT3B0aW9ucycsICd2YWxpZGF0ZU9wdGlvbnMnLCAnaW50ZXJjZXB0UmVxdWVzdCcsICdmaW5hbGl6ZU9wdGlvbnMnLCAnb25SZXF1ZXN0JywgJ29uUmVzcG9uc2UnLCAnb25FcnJvcicsICdvblJldHVybicsICdvbkhlYWRlcnMnXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVSZXF1ZXN0ZXIoKSB7XG4gIHZhciBpbml0TWlkZGxld2FyZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogW107XG5cbiAgdmFyIGxvYWRlZE1pZGRsZXdhcmUgPSBbXTtcbiAgdmFyIG1pZGRsZXdhcmUgPSBtaWRkbGVob29rcy5yZWR1Y2UoZnVuY3Rpb24gKHdhcmUsIG5hbWUpIHtcbiAgICB3YXJlW25hbWVdID0gd2FyZVtuYW1lXSB8fCBbXTtcbiAgICByZXR1cm4gd2FyZTtcbiAgfSwge1xuICAgIHByb2Nlc3NPcHRpb25zOiBbcHJvY2Vzc09wdGlvbnNdLFxuICAgIHZhbGlkYXRlT3B0aW9uczogW3ZhbGlkYXRlT3B0aW9uc11cbiAgfSk7XG5cbiAgZnVuY3Rpb24gcmVxdWVzdChvcHRzKSB7XG4gICAgdmFyIGNoYW5uZWxzID0gY2hhbm5lbE5hbWVzLnJlZHVjZShmdW5jdGlvbiAodGFyZ2V0LCBuYW1lKSB7XG4gICAgICB0YXJnZXRbbmFtZV0gPSBwdWJzdWIoKTtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSwge30pO1xuXG4gICAgLy8gUHJlcGFyZSBhIG1pZGRsZXdhcmUgcmVkdWNlciB0aGF0IGNhbiBiZSByZXVzZWQgdGhyb3VnaG91dCB0aGUgbGlmZWN5Y2xlXG4gICAgdmFyIGFwcGx5TWlkZGxld2FyZSA9IG1pZGRsZXdhcmVSZWR1Y2VyKG1pZGRsZXdhcmUpO1xuXG4gICAgLy8gUGFyc2UgdGhlIHBhc3NlZCBvcHRpb25zXG4gICAgdmFyIG9wdGlvbnMgPSBhcHBseU1pZGRsZXdhcmUoJ3Byb2Nlc3NPcHRpb25zJywgb3B0cyk7XG5cbiAgICAvLyBWYWxpZGF0ZSB0aGUgb3B0aW9uc1xuICAgIGFwcGx5TWlkZGxld2FyZSgndmFsaWRhdGVPcHRpb25zJywgb3B0aW9ucyk7XG5cbiAgICAvLyBCdWlsZCBhIGNvbnRleHQgb2JqZWN0IHdlIGNhbiBwYXNzIHRvIGNoaWxkIGhhbmRsZXJzXG4gICAgdmFyIGNvbnRleHQgPSB7IG9wdGlvbnM6IG9wdGlvbnMsIGNoYW5uZWxzOiBjaGFubmVscywgYXBwbHlNaWRkbGV3YXJlOiBhcHBseU1pZGRsZXdhcmVcblxuICAgICAgLy8gV2UgbmVlZCB0byBob2xkIGEgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50LCBvbmdvaW5nIHJlcXVlc3QsXG4gICAgICAvLyBpbiBvcmRlciB0byBhbGxvdyBjYW5jZWxsYXRpb24uIEluIHRoZSBjYXNlIG9mIHRoZSByZXRyeSBtaWRkbGV3YXJlLFxuICAgICAgLy8gYSBuZXcgcmVxdWVzdCBtaWdodCBiZSB0cmlnZ2VyZWRcbiAgICB9O3ZhciBvbmdvaW5nUmVxdWVzdCA9IG51bGw7XG4gICAgdmFyIHVuc3Vic2NyaWJlID0gY2hhbm5lbHMucmVxdWVzdC5zdWJzY3JpYmUoZnVuY3Rpb24gKGN0eCkge1xuICAgICAgLy8gTGV0IHJlcXVlc3QgYWRhcHRlcnMgKG5vZGUvYnJvd3NlcikgcGVyZm9ybSB0aGUgYWN0dWFsIHJlcXVlc3RcbiAgICAgIG9uZ29pbmdSZXF1ZXN0ID0gaHR0cFJlcXVlc3QoY3R4LCBmdW5jdGlvbiAoZXJyLCByZXMpIHtcbiAgICAgICAgcmV0dXJuIG9uUmVzcG9uc2UoZXJyLCByZXMsIGN0eCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIElmIHdlIGFib3J0IHRoZSByZXF1ZXN0LCBwcmV2ZW50IGZ1cnRoZXIgcmVxdWVzdHMgZnJvbSBoYXBwZW5pbmcsXG4gICAgLy8gYW5kIGJlIHN1cmUgdG8gY2FuY2VsIGFueSBvbmdvaW5nIHJlcXVlc3QgKG9idmlvdXNseSlcbiAgICBjaGFubmVscy5hYm9ydC5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgIGlmIChvbmdvaW5nUmVxdWVzdCkge1xuICAgICAgICBvbmdvaW5nUmVxdWVzdC5hYm9ydCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gU2VlIGlmIGFueSBtaWRkbGV3YXJlIHdhbnRzIHRvIG1vZGlmeSB0aGUgcmV0dXJuIHZhbHVlIC0gZm9yIGluc3RhbmNlXG4gICAgLy8gdGhlIHByb21pc2Ugb3Igb2JzZXJ2YWJsZSBtaWRkbGV3YXJlc1xuICAgIHZhciByZXR1cm5WYWx1ZSA9IGFwcGx5TWlkZGxld2FyZSgnb25SZXR1cm4nLCBjaGFubmVscywgY29udGV4dCk7XG5cbiAgICAvLyBJZiByZXR1cm4gdmFsdWUgaGFzIGJlZW4gbW9kaWZpZWQgYnkgYSBtaWRkbGV3YXJlLCB3ZSBleHBlY3QgdGhlIG1pZGRsZXdhcmVcbiAgICAvLyB0byBwdWJsaXNoIG9uIHRoZSAncmVxdWVzdCcgY2hhbm5lbC4gSWYgaXQgaGFzbid0IGJlZW4gbW9kaWZpZWQsIHdlIHdhbnQgdG9cbiAgICAvLyB0cmlnZ2VyIGl0IHJpZ2h0IGF3YXlcbiAgICBpZiAocmV0dXJuVmFsdWUgPT09IGNoYW5uZWxzKSB7XG4gICAgICBjaGFubmVscy5yZXF1ZXN0LnB1Ymxpc2goY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuXG4gICAgZnVuY3Rpb24gb25SZXNwb25zZShyZXFFcnIsIHJlcywgY3R4KSB7XG4gICAgICB2YXIgZXJyb3IgPSByZXFFcnI7XG4gICAgICB2YXIgcmVzcG9uc2UgPSByZXM7XG5cbiAgICAgIC8vIFdlJ3JlIHByb2Nlc3Npbmcgbm9uLWVycm9ycyBmaXJzdCwgaW4gY2FzZSBhIG1pZGRsZXdhcmUgY29udmVydHMgdGhlXG4gICAgICAvLyByZXNwb25zZSBpbnRvIGFuIGVycm9yIChmb3IgaW5zdGFuY2UsIHN0YXR1cyA+PSA0MDAgPT0gSHR0cEVycm9yKVxuICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3BvbnNlID0gYXBwbHlNaWRkbGV3YXJlKCdvblJlc3BvbnNlJywgcmVzLCBjdHgpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXNwb25zZSA9IG51bGw7XG4gICAgICAgICAgZXJyb3IgPSBlcnI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQXBwbHkgZXJyb3IgbWlkZGxld2FyZSAtIGlmIG1pZGRsZXdhcmUgcmV0dXJuIHRoZSBzYW1lIChvciBhIGRpZmZlcmVudCkgZXJyb3IsXG4gICAgICAvLyBwdWJsaXNoIGFzIGFuIGVycm9yIGV2ZW50LiBJZiB3ZSAqZG9uJ3QqIHJldHVybiBhbiBlcnJvciwgYXNzdW1lIGl0IGhhcyBiZWVuIGhhbmRsZWRcbiAgICAgIGVycm9yID0gZXJyb3IgJiYgYXBwbHlNaWRkbGV3YXJlKCdvbkVycm9yJywgZXJyb3IsIGN0eCk7XG5cbiAgICAgIC8vIEZpZ3VyZSBvdXQgaWYgd2Ugc2hvdWxkIHB1Ymxpc2ggb24gZXJyb3IvcmVzcG9uc2UgY2hhbm5lbHNcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjaGFubmVscy5lcnJvci5wdWJsaXNoKGVycm9yKTtcbiAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgY2hhbm5lbHMucmVzcG9uc2UucHVibGlzaChyZXNwb25zZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVxdWVzdC51c2UgPSBmdW5jdGlvbiB1c2UobmV3TWlkZGxld2FyZSkge1xuICAgIGlmICghbmV3TWlkZGxld2FyZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcmllZCB0byBhZGQgbWlkZGxld2FyZSB0aGF0IHJlc29sdmVkIHRvIGZhbHNleSB2YWx1ZScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbmV3TWlkZGxld2FyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcmllZCB0byBhZGQgbWlkZGxld2FyZSB0aGF0IHdhcyBhIGZ1bmN0aW9uLiBJdCBwcm9iYWJseSBleHBlY3RzIHlvdSB0byBwYXNzIG9wdGlvbnMgdG8gaXQuJyk7XG4gICAgfVxuXG4gICAgaWYgKG5ld01pZGRsZXdhcmUub25SZXR1cm4gJiYgbWlkZGxld2FyZS5vblJldHVybi5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyaWVkIHRvIGFkZCBuZXcgbWlkZGxld2FyZSB3aXRoIGBvblJldHVybmAgaGFuZGxlciwgYnV0IGFub3RoZXIgaGFuZGxlciBoYXMgYWxyZWFkeSBiZWVuIHJlZ2lzdGVyZWQgZm9yIHRoaXMgZXZlbnQnKTtcbiAgICB9XG5cbiAgICBtaWRkbGVob29rcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmIChuZXdNaWRkbGV3YXJlW2tleV0pIHtcbiAgICAgICAgbWlkZGxld2FyZVtrZXldLnB1c2gobmV3TWlkZGxld2FyZVtrZXldKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxvYWRlZE1pZGRsZXdhcmUucHVzaChuZXdNaWRkbGV3YXJlKTtcbiAgICByZXR1cm4gcmVxdWVzdDtcbiAgfTtcblxuICByZXF1ZXN0LmNsb25lID0gZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVJlcXVlc3Rlcihsb2FkZWRNaWRkbGV3YXJlKTtcbiAgfTtcblxuICBpbml0TWlkZGxld2FyZS5mb3JFYWNoKHJlcXVlc3QudXNlKTtcblxuICByZXR1cm4gcmVxdWVzdDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgdXJsUGFyc2UgPSByZXF1aXJlKCd1cmwtcGFyc2UnKTtcblxudmFyIGlzUmVhY3ROYXRpdmUgPSB0eXBlb2YgbmF2aWdhdG9yID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZSc7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIGRlZmF1bHRPcHRpb25zID0geyB0aW1lb3V0OiBpc1JlYWN0TmF0aXZlID8gNjAwMDAgOiAxMjAwMDAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0cykge1xuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJyA/IG9iamVjdEFzc2lnbih7IHVybDogb3B0cyB9LCBkZWZhdWx0T3B0aW9ucykgOiBvYmplY3RBc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRzKTtcblxuICAvLyBQYXJzZSBVUkwgaW50byBwYXJ0c1xuICB2YXIgdXJsID0gdXJsUGFyc2Uob3B0aW9ucy51cmwsIHt9LCAvLyBEb24ndCB1c2UgY3VycmVudCBicm93c2VyIGxvY2F0aW9uXG4gIHRydWUgLy8gUGFyc2UgcXVlcnkgc3RyaW5nc1xuICApO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aW1lb3V0c1xuICBvcHRpb25zLnRpbWVvdXQgPSBub3JtYWxpemVUaW1lb3V0KG9wdGlvbnMudGltZW91dCk7XG5cbiAgLy8gU2hhbGxvdy1tZXJnZSAob3ZlcnJpZGUpIGV4aXN0aW5nIHF1ZXJ5IHBhcmFtc1xuICBpZiAob3B0aW9ucy5xdWVyeSkge1xuICAgIHVybC5xdWVyeSA9IG9iamVjdEFzc2lnbih7fSwgdXJsLnF1ZXJ5LCByZW1vdmVVbmRlZmluZWQob3B0aW9ucy5xdWVyeSkpO1xuICB9XG5cbiAgLy8gSW1wbGljaXQgUE9TVCBpZiB3ZSBoYXZlIG5vdCBzcGVjaWZpZWQgYSBtZXRob2QgYnV0IGhhdmUgYSBib2R5XG4gIG9wdGlvbnMubWV0aG9kID0gb3B0aW9ucy5ib2R5ICYmICFvcHRpb25zLm1ldGhvZCA/ICdQT1NUJyA6IChvcHRpb25zLm1ldGhvZCB8fCAnR0VUJykudG9VcHBlckNhc2UoKTtcblxuICAvLyBTdHJpbmdpZnkgVVJMXG4gIG9wdGlvbnMudXJsID0gdXJsLnRvU3RyaW5nKHN0cmluZ2lmeVF1ZXJ5U3RyaW5nKTtcblxuICByZXR1cm4gb3B0aW9ucztcbn07XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVF1ZXJ5U3RyaW5nKG9iaikge1xuICB2YXIgcGFpcnMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChoYXMuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHB1c2goa2V5LCBvYmpba2V5XSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhaXJzLmxlbmd0aCA/IHBhaXJzLmpvaW4oJyYnKSA6ICcnO1xuXG4gIGZ1bmN0aW9uIHB1c2goa2V5LCB2YWwpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICB2YWwuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gcHVzaChrZXksIGl0ZW0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsXS5tYXAoZW5jb2RlVVJJQ29tcG9uZW50KS5qb2luKCc9JykpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVUaW1lb3V0KHRpbWUpIHtcbiAgaWYgKHRpbWUgPT09IGZhbHNlIHx8IHRpbWUgPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodGltZS5jb25uZWN0IHx8IHRpbWUuc29ja2V0KSB7XG4gICAgcmV0dXJuIHRpbWU7XG4gIH1cblxuICB2YXIgZGVsYXkgPSBOdW1iZXIodGltZSk7XG4gIGlmIChpc05hTihkZWxheSkpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplVGltZW91dChkZWZhdWx0T3B0aW9ucy50aW1lb3V0KTtcbiAgfVxuXG4gIHJldHVybiB7IGNvbm5lY3Q6IGRlbGF5LCBzb2NrZXQ6IGRlbGF5IH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVVuZGVmaW5lZChvYmopIHtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKG9ialtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldFtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWZhdWx0T3B0aW9uc1Byb2Nlc3Nvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHZhbGlkVXJsID0gL15odHRwcz86XFwvXFwvL2k7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgaWYgKCF2YWxpZFVybC50ZXN0KG9wdGlvbnMudXJsKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlxcXCJcIiArIG9wdGlvbnMudXJsICsgXCJcXFwiIGlzIG5vdCBhIHZhbGlkIFVSTFwiKTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmF1bHRPcHRpb25zVmFsaWRhdG9yLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIGlzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdpcy1wbGFpbi1vYmplY3QnKTtcblxudmFyIHNlcmlhbGl6ZVR5cGVzID0gWydib29sZWFuJywgJ3N0cmluZycsICdudW1iZXInXTtcbnZhciBpc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHByb2Nlc3NPcHRpb25zOiBmdW5jdGlvbiBwcm9jZXNzT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keTtcbiAgICAgIGlmICghYm9keSkge1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgIH1cblxuICAgICAgdmFyIGlzU3RyZWFtID0gdHlwZW9mIGJvZHkucGlwZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIHZhciBzaG91bGRTZXJpYWxpemUgPSAhaXNTdHJlYW0gJiYgIWlzQnVmZmVyKGJvZHkpICYmIChzZXJpYWxpemVUeXBlcy5pbmRleE9mKHR5cGVvZiBib2R5ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihib2R5KSkgIT09IC0xIHx8IEFycmF5LmlzQXJyYXkoYm9keSkgfHwgaXNQbGFpbk9iamVjdChib2R5KSk7XG5cbiAgICAgIGlmICghc2hvdWxkU2VyaWFsaXplKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqZWN0QXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuYm9keSksXG4gICAgICAgIGhlYWRlcnM6IG9iamVjdEFzc2lnbih7fSwgb3B0aW9ucy5oZWFkZXJzLCB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWpzb25SZXF1ZXN0LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0cykge1xuICByZXR1cm4ge1xuICAgIG9uUmVzcG9uc2U6IGZ1bmN0aW9uIG9uUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICAgIHZhciBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddIHx8ICcnO1xuICAgICAgdmFyIHNob3VsZERlY29kZSA9IG9wdHMgJiYgb3B0cy5mb3JjZSB8fCBjb250ZW50VHlwZS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgIT09IC0xO1xuICAgICAgaWYgKCFyZXNwb25zZS5ib2R5IHx8ICFjb250ZW50VHlwZSB8fCAhc2hvdWxkRGVjb2RlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9iamVjdEFzc2lnbih7fSwgcmVzcG9uc2UsIHsgYm9keTogdHJ5UGFyc2UocmVzcG9uc2UuYm9keSkgfSk7XG4gICAgfSxcblxuICAgIHByb2Nlc3NPcHRpb25zOiBmdW5jdGlvbiBwcm9jZXNzT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICByZXR1cm4gb2JqZWN0QXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIGhlYWRlcnM6IG9iamVjdEFzc2lnbih7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nIH0sIG9wdGlvbnMuaGVhZGVycylcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn07XG5cbmZ1bmN0aW9uIHRyeVBhcnNlKGJvZHkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShib2R5KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZXJyLm1lc3NhZ2UgPSAnRmFpbGVkIHRvIHBhcnNlZCByZXNwb25zZSBib2R5IGFzIEpTT046ICcgKyBlcnIubWVzc2FnZTtcbiAgICB0aHJvdyBlcnI7XG4gIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWpzb25SZXNwb25zZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi91dGlsL2dsb2JhbCcpO1xudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICB2YXIgT2JzZXJ2YWJsZSA9IG9wdHMuaW1wbGVtZW50YXRpb24gfHwgZ2xvYmFsLk9ic2VydmFibGU7XG4gIGlmICghT2JzZXJ2YWJsZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignYE9ic2VydmFibGVgIGlzIG5vdCBhdmFpbGFibGUgaW4gZ2xvYmFsIHNjb3BlLCBhbmQgbm8gaW1wbGVtZW50YXRpb24gd2FzIHBhc3NlZCcpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvblJldHVybjogZnVuY3Rpb24gb25SZXR1cm4oY2hhbm5lbHMsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgY2hhbm5lbHMuZXJyb3Iuc3Vic2NyaWJlKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNoYW5uZWxzLnByb2dyZXNzLnN1YnNjcmliZShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXIubmV4dChvYmplY3RBc3NpZ24oeyB0eXBlOiAncHJvZ3Jlc3MnIH0sIGV2ZW50KSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjaGFubmVscy5yZXNwb25zZS5zdWJzY3JpYmUoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChvYmplY3RBc3NpZ24oeyB0eXBlOiAncmVzcG9uc2UnIH0sIHJlc3BvbnNlKSk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2hhbm5lbHMucmVxdWVzdC5wdWJsaXNoKGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjaGFubmVscy5hYm9ydC5wdWJsaXNoKCk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JzZXJ2YWJsZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIG9uUmVxdWVzdDogZnVuY3Rpb24gb25SZXF1ZXN0KGV2dCkge1xuICAgICAgaWYgKGV2dC5hZGFwdGVyICE9PSAneGhyJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB4aHIgPSBldnQucmVxdWVzdDtcbiAgICAgIHZhciBjb250ZXh0ID0gZXZ0LmNvbnRleHQ7XG5cbiAgICAgIGlmICgndXBsb2FkJyBpbiB4aHIgJiYgJ29ucHJvZ3Jlc3MnIGluIHhoci51cGxvYWQpIHtcbiAgICAgICAgeGhyLnVwbG9hZC5vbnByb2dyZXNzID0gaGFuZGxlUHJvZ3Jlc3MoJ3VwbG9hZCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoJ29ucHJvZ3Jlc3MnIGluIHhocikge1xuICAgICAgICB4aHIub25wcm9ncmVzcyA9IGhhbmRsZVByb2dyZXNzKCdkb3dubG9hZCcpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBoYW5kbGVQcm9ncmVzcyhzdGFnZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgdmFyIHBlcmNlbnQgPSBldmVudC5sZW5ndGhDb21wdXRhYmxlID8gZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwgKiAxMDAgOiAtMTtcbiAgICAgICAgICBjb250ZXh0LmNoYW5uZWxzLnByb2dyZXNzLnB1Ymxpc2goe1xuICAgICAgICAgICAgc3RhZ2U6IHN0YWdlLFxuICAgICAgICAgICAgcGVyY2VudDogcGVyY2VudCxcbiAgICAgICAgICAgIHRvdGFsOiBldmVudC50b3RhbCxcbiAgICAgICAgICAgIGxvYWRlZDogZXZlbnQubG9hZGVkLFxuICAgICAgICAgICAgbGVuZ3RoQ29tcHV0YWJsZTogZXZlbnQubGVuZ3RoQ29tcHV0YWJsZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1icm93c2VyLXByb2dyZXNzLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL25vZGUtcHJvZ3Jlc3MnKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxuLyogZXNsaW50IG1heC1kZXB0aDogW1wiZXJyb3JcIiwgNF0gKi9cbnZhciBzYW1lT3JpZ2luID0gcmVxdWlyZSgnc2FtZS1vcmlnaW4nKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCdwYXJzZS1oZWFkZXJzJyk7XG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7XG4gIC8qIGludGVudGlvbmFsIG5vb3AgKi9cbn07XG5cbnZhciB3aW4gPSB3aW5kb3c7XG52YXIgWG1sSHR0cFJlcXVlc3QgPSB3aW4uWE1MSHR0cFJlcXVlc3QgfHwgbm9vcDtcbnZhciBoYXNYaHIyID0gJ3dpdGhDcmVkZW50aWFscycgaW4gbmV3IFhtbEh0dHBSZXF1ZXN0KCk7XG52YXIgWERvbWFpblJlcXVlc3QgPSBoYXNYaHIyID8gWG1sSHR0cFJlcXVlc3QgOiB3aW4uWERvbWFpblJlcXVlc3Q7XG52YXIgYWRhcHRlciA9ICd4aHInO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjb250ZXh0LCBjYWxsYmFjaykge1xuICB2YXIgb3B0cyA9IGNvbnRleHQub3B0aW9ucztcbiAgdmFyIG9wdGlvbnMgPSBjb250ZXh0LmFwcGx5TWlkZGxld2FyZSgnZmluYWxpemVPcHRpb25zJywgb3B0cyk7XG4gIHZhciB0aW1lcnMgPSB7fTtcblxuICAvLyBEZWVwLWNoZWNraW5nIHdpbmRvdy5sb2NhdGlvbiBiZWNhdXNlIG9mIHJlYWN0IG5hdGl2ZSwgd2hlcmUgYGxvY2F0aW9uYCBkb2Vzbid0IGV4aXN0XG4gIHZhciBjb3JzID0gd2luICYmIHdpbi5sb2NhdGlvbiAmJiAhc2FtZU9yaWdpbih3aW4ubG9jYXRpb24uaHJlZiwgb3B0aW9ucy51cmwpO1xuXG4gIC8vIEFsbG93IG1pZGRsZXdhcmUgdG8gaW5qZWN0IGEgcmVzcG9uc2UsIGZvciBpbnN0YW5jZSBpbiB0aGUgY2FzZSBvZiBjYWNoaW5nIG9yIG1vY2tpbmdcbiAgdmFyIGluamVjdGVkUmVzcG9uc2UgPSBjb250ZXh0LmFwcGx5TWlkZGxld2FyZSgnaW50ZXJjZXB0UmVxdWVzdCcsIHVuZGVmaW5lZCwge1xuICAgIGFkYXB0ZXI6IGFkYXB0ZXIsXG4gICAgY29udGV4dDogY29udGV4dFxuICB9KTtcblxuICAvLyBJZiBtaWRkbGV3YXJlIGluamVjdGVkIGEgcmVzcG9uc2UsIHRyZWF0IGl0IGFzIHdlIG5vcm1hbGx5IHdvdWxkIGFuZCByZXR1cm4gaXRcbiAgLy8gRG8gbm90ZSB0aGF0IHRoZSBpbmplY3RlZCByZXNwb25zZSBoYXMgdG8gYmUgcmVkdWNlZCB0byBhIGNyb3NzLWVudmlyb25tZW50IGZyaWVuZGx5IHJlc3BvbnNlXG4gIGlmIChpbmplY3RlZFJlc3BvbnNlKSB7XG4gICAgdmFyIGNiVGltZXIgPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwLCBudWxsLCBpbmplY3RlZFJlc3BvbnNlKTtcbiAgICB2YXIgY2FuY2VsID0gZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChjYlRpbWVyKTtcbiAgICB9O1xuICAgIHJldHVybiB7IGFib3J0OiBjYW5jZWwgfTtcbiAgfVxuXG4gIC8vIFdlJ2xsIHdhbnQgdG8gbnVsbCBvdXQgdGhlIHJlcXVlc3Qgb24gc3VjY2Vzcy9mYWlsdXJlXG4gIHZhciB4aHIgPSBjb3JzID8gbmV3IFhEb21haW5SZXF1ZXN0KCkgOiBuZXcgWG1sSHR0cFJlcXVlc3QoKTtcblxuICB2YXIgaXNYZHIgPSB3aW4uWERvbWFpblJlcXVlc3QgJiYgeGhyIGluc3RhbmNlb2Ygd2luLlhEb21haW5SZXF1ZXN0O1xuICB2YXIgaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycztcblxuICAvLyBSZXF1ZXN0IHN0YXRlXG4gIHZhciBhYm9ydGVkID0gZmFsc2U7XG4gIHZhciBsb2FkZWQgPSBmYWxzZTtcbiAgdmFyIHRpbWVkT3V0ID0gZmFsc2U7XG5cbiAgLy8gQXBwbHkgZXZlbnQgaGFuZGxlcnNcbiAgeGhyLm9uZXJyb3IgPSBvbkVycm9yO1xuICB4aHIub250aW1lb3V0ID0gb25FcnJvcjtcbiAgeGhyLm9uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgYWJvcnRlZCA9IHRydWU7XG4gIH07XG5cbiAgLy8gSUU5IG11c3QgaGF2ZSBvbnByb2dyZXNzIGJlIHNldCB0byBhIHVuaXF1ZSBmdW5jdGlvblxuICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvKiBpbnRlbnRpb25hbCBub29wICovXG4gIH07XG5cbiAgdmFyIGxvYWRFdmVudCA9IGlzWGRyID8gJ29ubG9hZCcgOiAnb25yZWFkeXN0YXRlY2hhbmdlJztcbiAgeGhyW2xvYWRFdmVudF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUHJldmVudCByZXF1ZXN0IGZyb20gdGltaW5nIG91dFxuICAgIHJlc2V0VGltZXJzKCk7XG5cbiAgICBpZiAoYWJvcnRlZCB8fCB4aHIucmVhZHlTdGF0ZSAhPT0gNCAmJiAhaXNYZHIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBXaWxsIGJlIGhhbmRsZWQgYnkgb25FcnJvclxuICAgIGlmICh4aHIuc3RhdHVzID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb25Mb2FkKCk7XG4gIH07XG5cbiAgLy8gQHRvZG8gdHdvIGxhc3Qgb3B0aW9ucyB0byBvcGVuKCkgaXMgdXNlcm5hbWUvcGFzc3dvcmRcbiAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMudXJsLCB0cnVlIC8vIEFsd2F5cyBhc3luY1xuICApO1xuXG4gIC8vIFNvbWUgb3B0aW9ucyBuZWVkIHRvIGJlIGFwcGxpZWQgYWZ0ZXIgb3BlblxuICB4aHIud2l0aENyZWRlbnRpYWxzID0gISFvcHRpb25zLndpdGhDcmVkZW50aWFscztcblxuICAvLyBTZXQgaGVhZGVyc1xuICBpZiAoaGVhZGVycyAmJiB4aHIuc2V0UmVxdWVzdEhlYWRlcikge1xuICAgIGZvciAodmFyIGtleSBpbiBoZWFkZXJzKSB7XG4gICAgICBpZiAoaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgaGVhZGVyc1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaGVhZGVycyAmJiBpc1hkcikge1xuICAgIHRocm93IG5ldyBFcnJvcignSGVhZGVycyBjYW5ub3QgYmUgc2V0IG9uIGFuIFhEb21haW5SZXF1ZXN0IG9iamVjdCcpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMucmF3Qm9keSkge1xuICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICB9XG5cbiAgLy8gTGV0IG1pZGRsZXdhcmUga25vdyB3ZSdyZSBhYm91dCB0byBkbyBhIHJlcXVlc3RcbiAgY29udGV4dC5hcHBseU1pZGRsZXdhcmUoJ29uUmVxdWVzdCcsIHsgb3B0aW9uczogb3B0aW9ucywgYWRhcHRlcjogYWRhcHRlciwgcmVxdWVzdDogeGhyLCBjb250ZXh0OiBjb250ZXh0IH0pO1xuXG4gIHhoci5zZW5kKG9wdGlvbnMuYm9keSB8fCBudWxsKTtcblxuICAvLyBGaWd1cmUgb3V0IHdoaWNoIHRpbWVvdXRzIHRvIHVzZSAoaWYgYW55KVxuICB2YXIgZGVsYXlzID0gb3B0aW9ucy50aW1lb3V0O1xuICBpZiAoZGVsYXlzKSB7XG4gICAgdGltZXJzLmNvbm5lY3QgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aW1lb3V0UmVxdWVzdCgnRVRJTUVET1VUJyk7XG4gICAgfSwgZGVsYXlzLmNvbm5lY3QpO1xuICB9XG5cbiAgcmV0dXJuIHsgYWJvcnQ6IGFib3J0IH07XG5cbiAgZnVuY3Rpb24gYWJvcnQoKSB7XG4gICAgYWJvcnRlZCA9IHRydWU7XG5cbiAgICBpZiAoeGhyKSB7XG4gICAgICB4aHIuYWJvcnQoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lb3V0UmVxdWVzdChjb2RlKSB7XG4gICAgdGltZWRPdXQgPSB0cnVlO1xuICAgIHhoci5hYm9ydCgpO1xuICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihjb2RlID09PSAnRVNPQ0tFVFRJTUVET1VUJyA/ICdTb2NrZXQgdGltZWQgb3V0IG9uIHJlcXVlc3QgdG8gJyArIG9wdGlvbnMudXJsIDogJ0Nvbm5lY3Rpb24gdGltZWQgb3V0IG9uIHJlcXVlc3QgdG8gJyArIG9wdGlvbnMudXJsKTtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgICBjb250ZXh0LmNoYW5uZWxzLmVycm9yLnB1Ymxpc2goZXJyb3IpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUaW1lcnMoKSB7XG4gICAgaWYgKCFkZWxheXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdG9wVGltZXJzKCk7XG4gICAgdGltZXJzLnNvY2tldCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRpbWVvdXRSZXF1ZXN0KCdFU09DS0VUVElNRURPVVQnKTtcbiAgICB9LCBkZWxheXMuc29ja2V0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3BUaW1lcnMoKSB7XG4gICAgLy8gT25seSBjbGVhciB0aGUgY29ubmVjdCB0aW1lb3V0IGlmIHdlJ3ZlIGdvdCBhIGNvbm5lY3Rpb25cbiAgICBpZiAoYWJvcnRlZCB8fCB4aHIucmVhZHlTdGF0ZSA+PSAyICYmIHRpbWVycy5jb25uZWN0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJzLmNvbm5lY3QpO1xuICAgIH1cblxuICAgIGlmICh0aW1lcnMuc29ja2V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJzLnNvY2tldCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25FcnJvcigpIHtcbiAgICBpZiAobG9hZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2xlYW4gdXBcbiAgICBzdG9wVGltZXJzKCk7XG4gICAgbG9hZGVkID0gdHJ1ZTtcbiAgICB4aHIgPSBudWxsO1xuXG4gICAgLy8gQW5ub3lpbmdseSwgZGV0YWlscyBhcmUgZXh0cmVtZWx5IHNjYXJjZSBhbmQgaGlkZGVuIGZyb20gdXMuXG4gICAgLy8gV2Ugb25seSByZWFsbHkga25vdyB0aGF0IGl0IGlzIGEgbmV0d29yayBlcnJvclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ05ldHdvcmsgZXJyb3Igd2hpbGUgYXR0ZW1wdGluZyB0byByZWFjaCAnICsgb3B0aW9ucy51cmwpO1xuICAgIGVyci5pc05ldHdvcmtFcnJvciA9IHRydWU7XG4gICAgZXJyLnJlcXVlc3QgPSBvcHRpb25zO1xuICAgIGNhbGxiYWNrKGVycik7XG4gIH1cblxuICBmdW5jdGlvbiByZWR1Y2VSZXNwb25zZSgpIHtcbiAgICB2YXIgc3RhdHVzQ29kZSA9IHhoci5zdGF0dXM7XG4gICAgdmFyIHN0YXR1c01lc3NhZ2UgPSB4aHIuc3RhdHVzVGV4dDtcblxuICAgIGlmIChpc1hkciAmJiBzdGF0dXNDb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIElFOCBDT1JTIEdFVCBzdWNjZXNzZnVsIHJlc3BvbnNlIGRvZXNuJ3QgaGF2ZSBhIHN0YXR1cyBmaWVsZCwgYnV0IGJvZHkgaXMgZmluZVxuICAgICAgc3RhdHVzQ29kZSA9IDIwMDtcbiAgICB9IGVsc2UgaWYgKHN0YXR1c0NvZGUgPiAxMjAwMCAmJiBzdGF0dXNDb2RlIDwgMTIxNTYpIHtcbiAgICAgIC8vIFlldCBhbm90aGVyIElFIHF1aXJrIHdoZXJlIGl0IGVtaXRzIHdlaXJkIHN0YXR1cyBjb2RlcyBvbiBuZXR3b3JrIGVycm9yc1xuICAgICAgLy8gaHR0cHM6Ly9zdXBwb3J0Lm1pY3Jvc29mdC5jb20vZW4tdXMva2IvMTkzNjI1XG4gICAgICByZXR1cm4gb25FcnJvcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBbm90aGVyIElFIGJ1ZyB3aGVyZSBIVFRQIDIwNCBzb21laG93IGVuZHMgdXAgYXMgMTIyM1xuICAgICAgc3RhdHVzQ29kZSA9IHhoci5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiB4aHIuc3RhdHVzO1xuICAgICAgc3RhdHVzTWVzc2FnZSA9IHhoci5zdGF0dXMgPT09IDEyMjMgPyAnTm8gQ29udGVudCcgOiBzdGF0dXNNZXNzYWdlO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBib2R5OiB4aHIucmVzcG9uc2UgfHwgeGhyLnJlc3BvbnNlVGV4dCxcbiAgICAgIHVybDogb3B0aW9ucy51cmwsXG4gICAgICBtZXRob2Q6IG9wdGlvbnMubWV0aG9kLFxuICAgICAgaGVhZGVyczogaXNYZHIgPyB7fSA6IHBhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpLFxuICAgICAgc3RhdHVzQ29kZTogc3RhdHVzQ29kZSxcbiAgICAgIHN0YXR1c01lc3NhZ2U6IHN0YXR1c01lc3NhZ2VcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgIGlmIChhYm9ydGVkIHx8IGxvYWRlZCB8fCB0aW1lZE91dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh4aHIuc3RhdHVzID09PSAwKSB7XG4gICAgICBvbkVycm9yKG5ldyBFcnJvcignVW5rbm93biBYSFIgZXJyb3InKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUHJldmVudCBiZWluZyBjYWxsZWQgdHdpY2VcbiAgICBzdG9wVGltZXJzKCk7XG4gICAgbG9hZGVkID0gdHJ1ZTtcbiAgICBjYWxsYmFjayhudWxsLCByZWR1Y2VSZXNwb25zZSgpKTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJyb3dzZXItcmVxdWVzdC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9ub2RlLXJlcXVlc3QnKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxuLyogZXNsaW50LWRpc2FibGUgbm8tbmVnYXRlZC1jb25kaXRpb24gKi9cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHNlbGY7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHt9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2xvYmFsLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobWlkZGxld2FyZSkge1xuICB2YXIgYXBwbHlNaWRkbGV3YXJlID0gZnVuY3Rpb24gYXBwbHlNaWRkbGV3YXJlKGhvb2ssIGRlZmF1bHRWYWx1ZSkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGJhaWxFYXJseSA9IGhvb2sgPT09ICdvbkVycm9yJztcblxuICAgIHZhciB2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1pZGRsZXdhcmVbaG9va10ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBoYW5kbGVyID0gbWlkZGxld2FyZVtob29rXVtpXTtcbiAgICAgIHZhbHVlID0gaGFuZGxlci5hcHBseSh1bmRlZmluZWQsIFt2YWx1ZV0uY29uY2F0KGFyZ3MpKTtcblxuICAgICAgaWYgKGJhaWxFYXJseSAmJiAhdmFsdWUpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIHJldHVybiBhcHBseU1pZGRsZXdhcmU7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWlkZGxld2FyZVJlZHVjZXIuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoeCkge1xuXHR2YXIgdHlwZSA9IHR5cGVvZiB4O1xuXHRyZXR1cm4geCAhPT0gbnVsbCAmJiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJyk7XG59O1xuIiwiLyohXG4gKiBpcy1wbGFpbi1vYmplY3QgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLXBsYWluLW9iamVjdD5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNywgSm9uIFNjaGxpbmtlcnQuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCdpc29iamVjdCcpO1xuXG5mdW5jdGlvbiBpc09iamVjdE9iamVjdChvKSB7XG4gIHJldHVybiBpc09iamVjdChvKSA9PT0gdHJ1ZVxuICAgICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvKSB7XG4gIHZhciBjdG9yLHByb3Q7XG5cbiAgaWYgKGlzT2JqZWN0T2JqZWN0KG8pID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIGhhcyBtb2RpZmllZCBjb25zdHJ1Y3RvclxuICBjdG9yID0gby5jb25zdHJ1Y3RvcjtcbiAgaWYgKHR5cGVvZiBjdG9yICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgaGFzIG1vZGlmaWVkIHByb3RvdHlwZVxuICBwcm90ID0gY3Rvci5wcm90b3R5cGU7XG4gIGlmIChpc09iamVjdE9iamVjdChwcm90KSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiBjb25zdHJ1Y3RvciBkb2VzIG5vdCBoYXZlIGFuIE9iamVjdC1zcGVjaWZpYyBtZXRob2RcbiAgaWYgKHByb3QuaGFzT3duUHJvcGVydHkoJ2lzUHJvdG90eXBlT2YnKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBNb3N0IGxpa2VseSBhIHBsYWluIE9iamVjdFxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvKiFcbiAqIGlzb2JqZWN0IDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pc29iamVjdD5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNywgSm9uIFNjaGxpbmtlcnQuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgQXJyYXkuaXNBcnJheSh2YWwpID09PSBmYWxzZTtcbn07XG4iLCIvLyBJU0MgQCBKdWxpZW4gRm9udGFuZXRcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGNvbnN0cnVjdCA9IHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiID8gUmVmbGVjdC5jb25zdHJ1Y3QgOiB1bmRlZmluZWQ7XG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIGNhcHR1cmVTdGFja1RyYWNlID0gRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2U7XG5pZiAoY2FwdHVyZVN0YWNrVHJhY2UgPT09IHVuZGVmaW5lZCkge1xuICBjYXB0dXJlU3RhY2tUcmFjZSA9IGZ1bmN0aW9uIGNhcHR1cmVTdGFja1RyYWNlKGVycm9yKSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IG5ldyBFcnJvcigpO1xuXG4gICAgZGVmaW5lUHJvcGVydHkoZXJyb3IsIFwic3RhY2tcIiwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXRTdGFjaygpIHtcbiAgICAgICAgdmFyIHN0YWNrID0gY29udGFpbmVyLnN0YWNrO1xuXG4gICAgICAgIC8vIFJlcGxhY2UgcHJvcGVydHkgd2l0aCB2YWx1ZSBmb3IgZmFzdGVyIGZ1dHVyZSBhY2Nlc3Nlcy5cbiAgICAgICAgZGVmaW5lUHJvcGVydHkodGhpcywgXCJzdGFja1wiLCB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIHZhbHVlOiBzdGFjayxcbiAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHN0YWNrO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0U3RhY2soc3RhY2spIHtcbiAgICAgICAgZGVmaW5lUHJvcGVydHkoZXJyb3IsIFwic3RhY2tcIiwge1xuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZTogc3RhY2ssXG4gICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBCYXNlRXJyb3IobWVzc2FnZSkge1xuICBpZiAobWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZGVmaW5lUHJvcGVydHkodGhpcywgXCJtZXNzYWdlXCIsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBtZXNzYWdlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICB2YXIgY25hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChjbmFtZSAhPT0gdW5kZWZpbmVkICYmIGNuYW1lICE9PSB0aGlzLm5hbWUpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm5hbWVcIiwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGNuYW1lLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBjYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbn1cblxuQmFzZUVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlLCB7XG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL0pzQ29tbXVuaXR5L21ha2UtZXJyb3IvaXNzdWVzLzRcbiAgY29uc3RydWN0b3I6IHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6IEJhc2VFcnJvcixcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgfSxcbn0pO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFNldHMgdGhlIG5hbWUgb2YgYSBmdW5jdGlvbiBpZiBwb3NzaWJsZSAoZGVwZW5kcyBvZiB0aGUgSlMgZW5naW5lKS5cbnZhciBzZXRGdW5jdGlvbk5hbWUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNldEZ1bmN0aW9uTmFtZShmbiwgbmFtZSkge1xuICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmbiwgXCJuYW1lXCIsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBuYW1lLFxuICAgIH0pO1xuICB9XG4gIHRyeSB7XG4gICAgdmFyIGYgPSBmdW5jdGlvbigpIHt9O1xuICAgIHNldEZ1bmN0aW9uTmFtZShmLCBcImZvb1wiKTtcbiAgICBpZiAoZi5uYW1lID09PSBcImZvb1wiKSB7XG4gICAgICByZXR1cm4gc2V0RnVuY3Rpb25OYW1lO1xuICAgIH1cbiAgfSBjYXRjaCAoXykge31cbn0pKCk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gbWFrZUVycm9yKGNvbnN0cnVjdG9yLCBzdXBlcl8pIHtcbiAgaWYgKHN1cGVyXyA9PSBudWxsIHx8IHN1cGVyXyA9PT0gRXJyb3IpIHtcbiAgICBzdXBlcl8gPSBCYXNlRXJyb3I7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHN1cGVyXyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcInN1cGVyXyBzaG91bGQgYmUgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHZhciBuYW1lO1xuICBpZiAodHlwZW9mIGNvbnN0cnVjdG9yID09PSBcInN0cmluZ1wiKSB7XG4gICAgbmFtZSA9IGNvbnN0cnVjdG9yO1xuICAgIGNvbnN0cnVjdG9yID1cbiAgICAgIGNvbnN0cnVjdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc3RydWN0KHN1cGVyXywgYXJndW1lbnRzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzdXBlcl8uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB9O1xuXG4gICAgLy8gSWYgdGhlIG5hbWUgY2FuIGJlIHNldCwgZG8gaXQgb25jZSBhbmQgZm9yIGFsbC5cbiAgICBpZiAoc2V0RnVuY3Rpb25OYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldEZ1bmN0aW9uTmFtZShjb25zdHJ1Y3RvciwgbmFtZSk7XG4gICAgICBuYW1lID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgY29uc3RydWN0b3IgIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJjb25zdHJ1Y3RvciBzaG91bGQgYmUgZWl0aGVyIGEgc3RyaW5nIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICAvLyBBbHNvIHJlZ2lzdGVyIHRoZSBzdXBlciBjb25zdHJ1Y3RvciBhbHNvIGFzIGBjb25zdHJ1Y3Rvci5zdXBlcl9gIGp1c3RcbiAgLy8gbGlrZSBOb2RlJ3MgYHV0aWwuaW5oZXJpdHMoKWAuXG4gIC8vXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkb3Qtbm90YXRpb25cbiAgY29uc3RydWN0b3Iuc3VwZXJfID0gY29uc3RydWN0b3JbXCJzdXBlclwiXSA9IHN1cGVyXztcblxuICB2YXIgcHJvcGVydGllcyA9IHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGNvbnN0cnVjdG9yLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgfSxcbiAgfTtcblxuICAvLyBJZiB0aGUgbmFtZSBjb3VsZCBub3QgYmUgc2V0IG9uIHRoZSBjb25zdHJ1Y3Rvciwgc2V0IGl0IG9uIHRoZVxuICAvLyBwcm90b3R5cGUuXG4gIGlmIChuYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICBwcm9wZXJ0aWVzLm5hbWUgPSB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogbmFtZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIH07XG4gIH1cbiAgY29uc3RydWN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlcl8ucHJvdG90eXBlLCBwcm9wZXJ0aWVzKTtcblxuICByZXR1cm4gY29uc3RydWN0b3I7XG59XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBtYWtlRXJyb3I7XG5leHBvcnRzLkJhc2VFcnJvciA9IEJhc2VFcnJvcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gUHVic3ViKCkge1xuICB2YXIgc3Vic2NyaWJlcnMgPSBbXVxuICByZXR1cm4ge1xuICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgIHB1Ymxpc2g6IHB1Ymxpc2hcbiAgfVxuICBmdW5jdGlvbiBzdWJzY3JpYmUoc3Vic2NyaWJlcikge1xuICAgIHN1YnNjcmliZXJzLnB1c2goc3Vic2NyaWJlcilcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICB2YXIgaWR4ID0gc3Vic2NyaWJlcnMuaW5kZXhPZihzdWJzY3JpYmVyKVxuICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgIHN1YnNjcmliZXJzLnNwbGljZShpZHgsIDEpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHB1Ymxpc2goKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzY3JpYmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgc3Vic2NyaWJlcnNbaV0uYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgIH1cbiAgfVxufSIsInZhciB0LGU9KHQ9cmVxdWlyZShcInF1ZXJ5c3RyaW5nXCIpKSYmXCJvYmplY3RcIj09dHlwZW9mIHQmJlwiZGVmYXVsdFwiaW4gdD90LmRlZmF1bHQ6dCxvPS9odHRwcz98ZnRwfGdvcGhlcnxmaWxlLztmdW5jdGlvbiByKHQpe1wic3RyaW5nXCI9PXR5cGVvZiB0JiYodD1kKHQpKTt2YXIgcj1mdW5jdGlvbih0LGUsbyl7dmFyIHI9dC5hdXRoLGE9dC5ob3N0bmFtZSxzPXQucHJvdG9jb2x8fFwiXCIscD10LnBhdGhuYW1lfHxcIlwiLG49dC5oYXNofHxcIlwiLGM9dC5xdWVyeXx8XCJcIixoPSExO3I9cj9lbmNvZGVVUklDb21wb25lbnQocikucmVwbGFjZSgvJTNBL2ksXCI6XCIpK1wiQFwiOlwiXCIsdC5ob3N0P2g9cit0Lmhvc3Q6YSYmKGg9cisofmEuaW5kZXhPZihcIjpcIik/XCJbXCIrYStcIl1cIjphKSx0LnBvcnQmJihoKz1cIjpcIit0LnBvcnQpKSxjJiZcIm9iamVjdFwiPT10eXBlb2YgYyYmKGM9ZS5lbmNvZGUoYykpO3ZhciBsPXQuc2VhcmNofHxjJiZcIj9cIitjfHxcIlwiO3JldHVybiBzJiZcIjpcIiE9PXMuc3Vic3RyKC0xKSYmKHMrPVwiOlwiKSx0LnNsYXNoZXN8fCghc3x8by50ZXN0KHMpKSYmITEhPT1oPyhoPVwiLy9cIisoaHx8XCJcIikscCYmXCIvXCIhPT1wWzBdJiYocD1cIi9cIitwKSk6aHx8KGg9XCJcIiksbiYmXCIjXCIhPT1uWzBdJiYobj1cIiNcIituKSxsJiZcIj9cIiE9PWxbMF0mJihsPVwiP1wiK2wpLHtwcm90b2NvbDpzLGhvc3Q6aCxwYXRobmFtZTpwPXAucmVwbGFjZSgvWz8jXS9nLGVuY29kZVVSSUNvbXBvbmVudCksc2VhcmNoOmw9bC5yZXBsYWNlKFwiI1wiLFwiJTIzXCIpLGhhc2g6bn19KHQsZSxvKTtyZXR1cm5cIlwiK3IucHJvdG9jb2wrci5ob3N0K3IucGF0aG5hbWUrci5zZWFyY2grci5oYXNofXZhciBhPVwiaHR0cDovL1wiLHM9XCJ3LndcIixwPWErcyxuPS9eKFthLXowLTkuKy1dKjpcXC9cXC9cXC8pKFthLXowLTkuKy1dOlxcLyopPy9pLGM9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIGgodCxlKXt2YXIgbz1cInN0cmluZ1wiPT10eXBlb2YgdD9kKHQpOnQ7dD1cIm9iamVjdFwiPT10eXBlb2YgdD9yKHQpOnQ7dmFyIHM9ZChlKSxoPVwiXCI7by5wcm90b2NvbCYmIW8uc2xhc2hlcyYmKGg9by5wcm90b2NvbCx0PXQucmVwbGFjZShvLnByb3RvY29sLFwiXCIpLGgrPVwiL1wiPT09ZVswXXx8XCIvXCI9PT10WzBdP1wiL1wiOlwiXCIpLGgmJnMucHJvdG9jb2wmJihoPVwiXCIscy5zbGFzaGVzfHwoaD1zLnByb3RvY29sLGU9ZS5yZXBsYWNlKHMucHJvdG9jb2wsXCJcIikpKTt2YXIgbD10Lm1hdGNoKG4pO2wmJiFzLnByb3RvY29sJiYodD10LnN1YnN0cigoaD1sWzFdKyhsWzJdfHxcIlwiKSkubGVuZ3RoKSwvXlxcL1xcL1teL10vLnRlc3QoZSkmJihoPWguc2xpY2UoMCwtMSkpKTt2YXIgaT1uZXcgVVJMKHQscCtcIi9cIiksdT1uZXcgVVJMKGUsaSkudG9TdHJpbmcoKS5yZXBsYWNlKHAsXCJcIiksZj1zLnByb3RvY29sfHxvLnByb3RvY29sO3JldHVybiBmKz1vLnNsYXNoZXN8fHMuc2xhc2hlcz9cIi8vXCI6XCJcIiwhaCYmZj91PXUucmVwbGFjZShhLGYpOmgmJih1PXUucmVwbGFjZShhLFwiXCIpKSxjLnRlc3QodSl8fH5lLmluZGV4T2YoXCIuXCIpfHxcIi9cIj09PXQuc2xpY2UoLTEpfHxcIi9cIj09PWUuc2xpY2UoLTEpfHxcIi9cIiE9PXUuc2xpY2UoLTEpfHwodT11LnNsaWNlKDAsLTEpKSxoJiYodT1oKyhcIi9cIj09PXVbMF0/dS5zdWJzdHIoMSk6dSkpLHV9ZnVuY3Rpb24gbCgpe31sLnByb3RvdHlwZS5wYXJzZT1kLGwucHJvdG90eXBlLmZvcm1hdD1yLGwucHJvdG90eXBlLnJlc29sdmU9aCxsLnByb3RvdHlwZS5yZXNvbHZlT2JqZWN0PWg7dmFyIGk9L15odHRwcz98ZnRwfGdvcGhlcnxmaWxlLyx1PS9eKC4qPykoWyM/XS4qKS8sZj0vXihbYS16MC05ListXSo6KShcXC97MCwzfSkoLiopL2ksbT0vXihbYS16MC05ListXSo6KT9cXC9cXC9cXC8qL2ksdj0vXihbYS16MC05ListXSo6KShcXC97MCwyfSlcXFsoLiopXFxdJC9pO2Z1bmN0aW9uIGQodCxvLGEpe2lmKHZvaWQgMD09PW8mJihvPSExKSx2b2lkIDA9PT1hJiYoYT0hMSksdCYmXCJvYmplY3RcIj09dHlwZW9mIHQmJnQgaW5zdGFuY2VvZiBsKXJldHVybiB0O3ZhciBuPSh0PXQudHJpbSgpKS5tYXRjaCh1KTt0PW4/blsxXS5yZXBsYWNlKC9cXFxcL2csXCIvXCIpK25bMl06dC5yZXBsYWNlKC9cXFxcL2csXCIvXCIpLHYudGVzdCh0KSYmXCIvXCIhPT10LnNsaWNlKC0xKSYmKHQrPVwiL1wiKTt2YXIgYz0hLyheamF2YXNjcmlwdCkvLnRlc3QodCkmJnQubWF0Y2goZiksaD1tLnRlc3QodCksZD1cIlwiO2MmJihpLnRlc3QoY1sxXSl8fChkPWNbMV0udG9Mb3dlckNhc2UoKSx0PVwiXCIrY1syXStjWzNdKSxjWzJdfHwoaD0hMSxpLnRlc3QoY1sxXSk/KGQ9Y1sxXSx0PVwiXCIrY1szXSk6dD1cIi8vXCIrY1szXSksMyE9PWNbMl0ubGVuZ3RoJiYxIT09Y1syXS5sZW5ndGh8fChkPWNbMV0sdD1cIi9cIitjWzNdKSk7dmFyIGcseT0obj9uWzFdOnQpLm1hdGNoKC9eaHR0cHM/OlxcL1xcL1teL10rKDpbMC05XSspKD89XFwvfCQpLyksYj15JiZ5WzFdLEM9bmV3IGwsVT1cIlwiLGo9XCJcIjt0cnl7Zz1uZXcgVVJMKHQpfWNhdGNoKGUpe1U9ZSxkfHxhfHwhL15cXC9cXC8vLnRlc3QodCl8fC9eXFwvXFwvLitbQC5dLy50ZXN0KHQpfHwoaj1cIi9cIix0PXQuc3Vic3RyKDEpKTt0cnl7Zz1uZXcgVVJMKHQscCl9Y2F0Y2godCl7cmV0dXJuIEMucHJvdG9jb2w9ZCxDLmhyZWY9ZCxDfX1DLnNsYXNoZXM9aCYmIWosQy5ob3N0PWcuaG9zdD09PXM/XCJcIjpnLmhvc3QsQy5ob3N0bmFtZT1nLmhvc3RuYW1lPT09cz9cIlwiOmcuaG9zdG5hbWUucmVwbGFjZSgvKFxcW3xcXF0pL2csXCJcIiksQy5wcm90b2NvbD1VP2R8fG51bGw6Zy5wcm90b2NvbCxDLnNlYXJjaD1nLnNlYXJjaC5yZXBsYWNlKC9cXFxcL2csXCIlNUNcIiksQy5oYXNoPWcuaGFzaC5yZXBsYWNlKC9cXFxcL2csXCIlNUNcIik7dmFyIHc9dC5zcGxpdChcIiNcIik7IUMuc2VhcmNoJiZ+d1swXS5pbmRleE9mKFwiP1wiKSYmKEMuc2VhcmNoPVwiP1wiKSxDLmhhc2h8fFwiXCIhPT13WzFdfHwoQy5oYXNoPVwiI1wiKSxDLnF1ZXJ5PW8/ZS5kZWNvZGUoZy5zZWFyY2guc3Vic3RyKDEpKTpDLnNlYXJjaC5zdWJzdHIoMSksQy5wYXRobmFtZT1qKyhjP2Z1bmN0aW9uKHQpe3JldHVybiB0LnJlcGxhY2UoL1snXnxgXS9nLGZ1bmN0aW9uKHQpe3JldHVyblwiJVwiK3QuY2hhckNvZGVBdCgpLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpfSkucmVwbGFjZSgvKCg/OiVbMC05QS1GXXsyfSkrKS9nLGZ1bmN0aW9uKHQsZSl7dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQoZSkuc3BsaXQoXCJcIikubWFwKGZ1bmN0aW9uKHQpe3ZhciBlPXQuY2hhckNvZGVBdCgpO3JldHVybiBlPjI1Nnx8L15bYS16MC05XSQvaS50ZXN0KHQpP3Q6XCIlXCIrZS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKX0pLmpvaW4oXCJcIil9Y2F0Y2godCl7cmV0dXJuIGV9fSl9KGcucGF0aG5hbWUpOmcucGF0aG5hbWUpLFwiYWJvdXQ6XCI9PT1DLnByb3RvY29sJiZcImJsYW5rXCI9PT1DLnBhdGhuYW1lJiYoQy5wcm90b2NvbD1cIlwiLEMucGF0aG5hbWU9XCJcIiksVSYmXCIvXCIhPT10WzBdJiYoQy5wYXRobmFtZT1DLnBhdGhuYW1lLnN1YnN0cigxKSksZCYmIWkudGVzdChkKSYmXCIvXCIhPT10LnNsaWNlKC0xKSYmXCIvXCI9PT1DLnBhdGhuYW1lJiYoQy5wYXRobmFtZT1cIlwiKSxDLnBhdGg9Qy5wYXRobmFtZStDLnNlYXJjaCxDLmF1dGg9W2cudXNlcm5hbWUsZy5wYXNzd29yZF0ubWFwKGRlY29kZVVSSUNvbXBvbmVudCkuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCI6XCIpLEMucG9ydD1nLnBvcnQsYiYmIUMuaG9zdC5lbmRzV2l0aChiKSYmKEMuaG9zdCs9YixDLnBvcnQ9Yi5zbGljZSgxKSksQy5ocmVmPWo/XCJcIitDLnBhdGhuYW1lK0Muc2VhcmNoK0MuaGFzaDpyKEMpO3ZhciB4PS9eKGZpbGUpLy50ZXN0KEMuaHJlZik/W1wiaG9zdFwiLFwiaG9zdG5hbWVcIl06W107cmV0dXJuIE9iamVjdC5rZXlzKEMpLmZvckVhY2goZnVuY3Rpb24odCl7fnguaW5kZXhPZih0KXx8KENbdF09Q1t0XXx8bnVsbCl9KSxDfWV4cG9ydHMucGFyc2U9ZCxleHBvcnRzLmZvcm1hdD1yLGV4cG9ydHMucmVzb2x2ZT1oLGV4cG9ydHMucmVzb2x2ZU9iamVjdD1mdW5jdGlvbih0LGUpe3JldHVybiBkKGgodCxlKSl9LGV4cG9ydHMuVXJsPWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsInZhciB0cmltID0gZnVuY3Rpb24oc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xufVxuICAsIGlzQXJyYXkgPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGhlYWRlcnMpIHtcbiAgaWYgKCFoZWFkZXJzKVxuICAgIHJldHVybiB7fVxuXG4gIHZhciByZXN1bHQgPSB7fVxuXG4gIHZhciBoZWFkZXJzQXJyID0gdHJpbShoZWFkZXJzKS5zcGxpdCgnXFxuJylcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGhlYWRlcnNBcnIubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcm93ID0gaGVhZGVyc0FycltpXVxuICAgIHZhciBpbmRleCA9IHJvdy5pbmRleE9mKCc6JylcbiAgICAsIGtleSA9IHRyaW0ocm93LnNsaWNlKDAsIGluZGV4KSkudG9Mb3dlckNhc2UoKVxuICAgICwgdmFsdWUgPSB0cmltKHJvdy5zbGljZShpbmRleCArIDEpKVxuXG4gICAgaWYgKHR5cGVvZihyZXN1bHRba2V5XSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHJlc3VsdFtrZXldKSkge1xuICAgICAgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSBbIHJlc3VsdFtrZXldLCB2YWx1ZSBdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxuLy8gSWYgb2JqLmhhc093blByb3BlcnR5IGhhcyBiZWVuIG92ZXJyaWRkZW4sIHRoZW4gY2FsbGluZ1xuLy8gb2JqLmhhc093blByb3BlcnR5KHByb3ApIHdpbGwgYnJlYWsuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb3llbnQvbm9kZS9pc3N1ZXMvMTcwN1xuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihxcywgc2VwLCBlcSwgb3B0aW9ucykge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgdmFyIG9iaiA9IHt9O1xuXG4gIGlmICh0eXBlb2YgcXMgIT09ICdzdHJpbmcnIHx8IHFzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICB2YXIgcmVnZXhwID0gL1xcKy9nO1xuICBxcyA9IHFzLnNwbGl0KHNlcCk7XG5cbiAgdmFyIG1heEtleXMgPSAxMDAwO1xuICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5tYXhLZXlzID09PSAnbnVtYmVyJykge1xuICAgIG1heEtleXMgPSBvcHRpb25zLm1heEtleXM7XG4gIH1cblxuICB2YXIgbGVuID0gcXMubGVuZ3RoO1xuICAvLyBtYXhLZXlzIDw9IDAgbWVhbnMgdGhhdCB3ZSBzaG91bGQgbm90IGxpbWl0IGtleXMgY291bnRcbiAgaWYgKG1heEtleXMgPiAwICYmIGxlbiA+IG1heEtleXMpIHtcbiAgICBsZW4gPSBtYXhLZXlzO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciB4ID0gcXNbaV0ucmVwbGFjZShyZWdleHAsICclMjAnKSxcbiAgICAgICAgaWR4ID0geC5pbmRleE9mKGVxKSxcbiAgICAgICAga3N0ciwgdnN0ciwgaywgdjtcblxuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAga3N0ciA9IHguc3Vic3RyKDAsIGlkeCk7XG4gICAgICB2c3RyID0geC5zdWJzdHIoaWR4ICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtzdHIgPSB4O1xuICAgICAgdnN0ciA9ICcnO1xuICAgIH1cblxuICAgIGsgPSBkZWNvZGVVUklDb21wb25lbnQoa3N0cik7XG4gICAgdiA9IGRlY29kZVVSSUNvbXBvbmVudCh2c3RyKTtcblxuICAgIGlmICghaGFzT3duUHJvcGVydHkob2JqLCBrKSkge1xuICAgICAgb2JqW2tdID0gdjtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgb2JqW2tdLnB1c2godik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrXSA9IFtvYmpba10sIHZdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHN0cmluZ2lmeVByaW1pdGl2ZSA9IGZ1bmN0aW9uKHYpIHtcbiAgc3dpdGNoICh0eXBlb2Ygdikge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICByZXR1cm4gdjtcblxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgcmV0dXJuIHYgPyAndHJ1ZScgOiAnZmFsc2UnO1xuXG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIHJldHVybiBpc0Zpbml0ZSh2KSA/IHYgOiAnJztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqLCBzZXAsIGVxLCBuYW1lKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgb2JqID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uKGspIHtcbiAgICAgIHZhciBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUoaykpICsgZXE7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIHJldHVybiBvYmpba10ubWFwKGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICByZXR1cm4ga3MgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKHYpKTtcbiAgICAgICAgfSkuam9pbihzZXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmpba10pKTtcbiAgICAgIH1cbiAgICB9KS5maWx0ZXIoQm9vbGVhbikuam9pbihzZXApO1xuXG4gIH1cblxuICBpZiAoIW5hbWUpIHJldHVybiAnJztcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUobmFtZSkpICsgZXEgK1xuICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmopKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuZGVjb2RlID0gZXhwb3J0cy5wYXJzZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG5leHBvcnRzLmVuY29kZSA9IGV4cG9ydHMuc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgLCB1bmRlZjtcblxuLyoqXG4gKiBEZWNvZGUgYSBVUkkgZW5jb2RlZCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBVUkkgZW5jb2RlZCBzdHJpbmcuXG4gKiBAcmV0dXJucyB7U3RyaW5nfE51bGx9IFRoZSBkZWNvZGVkIHN0cmluZy5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBkZWNvZGUoaW5wdXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGlucHV0LnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQXR0ZW1wdHMgdG8gZW5jb2RlIGEgZ2l2ZW4gaW5wdXQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBzdHJpbmcgdGhhdCBuZWVkcyB0byBiZSBlbmNvZGVkLlxuICogQHJldHVybnMge1N0cmluZ3xOdWxsfSBUaGUgZW5jb2RlZCBzdHJpbmcuXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZW5jb2RlKGlucHV0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChpbnB1dCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIFNpbXBsZSBxdWVyeSBzdHJpbmcgcGFyc2VyLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBxdWVyeSBUaGUgcXVlcnkgc3RyaW5nIHRoYXQgbmVlZHMgdG8gYmUgcGFyc2VkLlxuICogQHJldHVybnMge09iamVjdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIHF1ZXJ5c3RyaW5nKHF1ZXJ5KSB7XG4gIHZhciBwYXJzZXIgPSAvKFtePT8jJl0rKT0/KFteJl0qKS9nXG4gICAgLCByZXN1bHQgPSB7fVxuICAgICwgcGFydDtcblxuICB3aGlsZSAocGFydCA9IHBhcnNlci5leGVjKHF1ZXJ5KSkge1xuICAgIHZhciBrZXkgPSBkZWNvZGUocGFydFsxXSlcbiAgICAgICwgdmFsdWUgPSBkZWNvZGUocGFydFsyXSk7XG5cbiAgICAvL1xuICAgIC8vIFByZXZlbnQgb3ZlcnJpZGluZyBvZiBleGlzdGluZyBwcm9wZXJ0aWVzLiBUaGlzIGVuc3VyZXMgdGhhdCBidWlsZC1pblxuICAgIC8vIG1ldGhvZHMgbGlrZSBgdG9TdHJpbmdgIG9yIF9fcHJvdG9fXyBhcmUgbm90IG92ZXJyaWRlbiBieSBtYWxpY2lvdXNcbiAgICAvLyBxdWVyeXN0cmluZ3MuXG4gICAgLy9cbiAgICAvLyBJbiB0aGUgY2FzZSBpZiBmYWlsZWQgZGVjb2RpbmcsIHdlIHdhbnQgdG8gb21pdCB0aGUga2V5L3ZhbHVlIHBhaXJzXG4gICAgLy8gZnJvbSB0aGUgcmVzdWx0LlxuICAgIC8vXG4gICAgaWYgKGtleSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCBrZXkgaW4gcmVzdWx0KSBjb250aW51ZTtcbiAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm0gYSBxdWVyeSBzdHJpbmcgdG8gYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogT2JqZWN0IHRoYXQgc2hvdWxkIGJlIHRyYW5zZm9ybWVkLlxuICogQHBhcmFtIHtTdHJpbmd9IHByZWZpeCBPcHRpb25hbCBwcmVmaXguXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gcXVlcnlzdHJpbmdpZnkob2JqLCBwcmVmaXgpIHtcbiAgcHJlZml4ID0gcHJlZml4IHx8ICcnO1xuXG4gIHZhciBwYWlycyA9IFtdXG4gICAgLCB2YWx1ZVxuICAgICwga2V5O1xuXG4gIC8vXG4gIC8vIE9wdGlvbmFsbHkgcHJlZml4IHdpdGggYSAnPycgaWYgbmVlZGVkXG4gIC8vXG4gIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIHByZWZpeCkgcHJlZml4ID0gJz8nO1xuXG4gIGZvciAoa2V5IGluIG9iaikge1xuICAgIGlmIChoYXMuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhbHVlID0gb2JqW2tleV07XG5cbiAgICAgIC8vXG4gICAgICAvLyBFZGdlIGNhc2VzIHdoZXJlIHdlIGFjdHVhbGx5IHdhbnQgdG8gZW5jb2RlIHRoZSB2YWx1ZSB0byBhbiBlbXB0eVxuICAgICAgLy8gc3RyaW5nIGluc3RlYWQgb2YgdGhlIHN0cmluZ2lmaWVkIHZhbHVlLlxuICAgICAgLy9cbiAgICAgIGlmICghdmFsdWUgJiYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZiB8fCBpc05hTih2YWx1ZSkpKSB7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGtleSA9IGVuY29kZShrZXkpO1xuICAgICAgdmFsdWUgPSBlbmNvZGUodmFsdWUpO1xuXG4gICAgICAvL1xuICAgICAgLy8gSWYgd2UgZmFpbGVkIHRvIGVuY29kZSB0aGUgc3RyaW5ncywgd2Ugc2hvdWxkIGJhaWwgb3V0IGFzIHdlIGRvbid0XG4gICAgICAvLyB3YW50IHRvIGFkZCBpbnZhbGlkIHN0cmluZ3MgdG8gdGhlIHF1ZXJ5LlxuICAgICAgLy9cbiAgICAgIGlmIChrZXkgPT09IG51bGwgfHwgdmFsdWUgPT09IG51bGwpIGNvbnRpbnVlO1xuICAgICAgcGFpcnMucHVzaChrZXkgKyc9JysgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYWlycy5sZW5ndGggPyBwcmVmaXggKyBwYWlycy5qb2luKCcmJykgOiAnJztcbn1cblxuLy9cbi8vIEV4cG9zZSB0aGUgbW9kdWxlLlxuLy9cbmV4cG9ydHMuc3RyaW5naWZ5ID0gcXVlcnlzdHJpbmdpZnk7XG5leHBvcnRzLnBhcnNlID0gcXVlcnlzdHJpbmc7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2hlY2sgaWYgd2UncmUgcmVxdWlyZWQgdG8gYWRkIGEgcG9ydCBudW1iZXIuXG4gKlxuICogQHNlZSBodHRwczovL3VybC5zcGVjLndoYXR3Zy5vcmcvI2RlZmF1bHQtcG9ydFxuICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBwb3J0IFBvcnQgbnVtYmVyIHdlIG5lZWQgdG8gY2hlY2tcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm90b2NvbCBQcm90b2NvbCB3ZSBuZWVkIHRvIGNoZWNrIGFnYWluc3QuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gSXMgaXQgYSBkZWZhdWx0IHBvcnQgZm9yIHRoZSBnaXZlbiBwcm90b2NvbFxuICogQGFwaSBwcml2YXRlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVxdWlyZWQocG9ydCwgcHJvdG9jb2wpIHtcbiAgcHJvdG9jb2wgPSBwcm90b2NvbC5zcGxpdCgnOicpWzBdO1xuICBwb3J0ID0gK3BvcnQ7XG5cbiAgaWYgKCFwb3J0KSByZXR1cm4gZmFsc2U7XG5cbiAgc3dpdGNoIChwcm90b2NvbCkge1xuICAgIGNhc2UgJ2h0dHAnOlxuICAgIGNhc2UgJ3dzJzpcbiAgICByZXR1cm4gcG9ydCAhPT0gODA7XG5cbiAgICBjYXNlICdodHRwcyc6XG4gICAgY2FzZSAnd3NzJzpcbiAgICByZXR1cm4gcG9ydCAhPT0gNDQzO1xuXG4gICAgY2FzZSAnZnRwJzpcbiAgICByZXR1cm4gcG9ydCAhPT0gMjE7XG5cbiAgICBjYXNlICdnb3BoZXInOlxuICAgIHJldHVybiBwb3J0ICE9PSA3MDtcblxuICAgIGNhc2UgJ2ZpbGUnOlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBwb3J0ICE9PSAwO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNhblJlcG9ydEVycm9yXzEgPSByZXF1aXJlKFwiLi91dGlsL2NhblJlcG9ydEVycm9yXCIpO1xudmFyIHRvU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4vdXRpbC90b1N1YnNjcmliZXJcIik7XG52YXIgb2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4vc3ltYm9sL29ic2VydmFibGVcIik7XG52YXIgcGlwZV8xID0gcmVxdWlyZShcIi4vdXRpbC9waXBlXCIpO1xudmFyIGNvbmZpZ18xID0gcmVxdWlyZShcIi4vY29uZmlnXCIpO1xudmFyIE9ic2VydmFibGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGUoc3Vic2NyaWJlKSB7XG4gICAgICAgIHRoaXMuX2lzU2NhbGFyID0gZmFsc2U7XG4gICAgICAgIGlmIChzdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5saWZ0ID0gZnVuY3Rpb24gKG9wZXJhdG9yKSB7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGUoKTtcbiAgICAgICAgb2JzZXJ2YWJsZS5zb3VyY2UgPSB0aGlzO1xuICAgICAgICBvYnNlcnZhYmxlLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIG9wZXJhdG9yID0gdGhpcy5vcGVyYXRvcjtcbiAgICAgICAgdmFyIHNpbmsgPSB0b1N1YnNjcmliZXJfMS50b1N1YnNjcmliZXIob2JzZXJ2ZXJPck5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG4gICAgICAgIGlmIChvcGVyYXRvcikge1xuICAgICAgICAgICAgc2luay5hZGQob3BlcmF0b3IuY2FsbChzaW5rLCB0aGlzLnNvdXJjZSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2luay5hZGQodGhpcy5zb3VyY2UgfHwgKGNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nICYmICFzaW5rLnN5bmNFcnJvclRocm93YWJsZSkgP1xuICAgICAgICAgICAgICAgIHRoaXMuX3N1YnNjcmliZShzaW5rKSA6XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJ5U3Vic2NyaWJlKHNpbmspKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgIGlmIChzaW5rLnN5bmNFcnJvclRocm93YWJsZSkge1xuICAgICAgICAgICAgICAgIHNpbmsuc3luY0Vycm9yVGhyb3dhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHNpbmsuc3luY0Vycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IHNpbmsuc3luY0Vycm9yVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaW5rO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuX3RyeVN1YnNjcmliZSA9IGZ1bmN0aW9uIChzaW5rKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3Vic2NyaWJlKHNpbmspO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgICAgIHNpbmsuc3luY0Vycm9yVGhyb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaW5rLnN5bmNFcnJvclZhbHVlID0gZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhblJlcG9ydEVycm9yXzEuY2FuUmVwb3J0RXJyb3Ioc2luaykpIHtcbiAgICAgICAgICAgICAgICBzaW5rLmVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChuZXh0LCBwcm9taXNlQ3Rvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBwcm9taXNlQ3RvciA9IGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yKTtcbiAgICAgICAgcmV0dXJuIG5ldyBwcm9taXNlQ3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uO1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0gX3RoaXMuc3Vic2NyaWJlKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHJlamVjdCwgcmVzb2x2ZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSB0aGlzLnNvdXJjZTtcbiAgICAgICAgcmV0dXJuIHNvdXJjZSAmJiBzb3VyY2Uuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGVbb2JzZXJ2YWJsZV8xLm9ic2VydmFibGVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnBpcGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcGVyYXRpb25zID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBvcGVyYXRpb25zW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wZXJhdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGlwZV8xLnBpcGVGcm9tQXJyYXkob3BlcmF0aW9ucykodGhpcyk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS50b1Byb21pc2UgPSBmdW5jdGlvbiAocHJvbWlzZUN0b3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcHJvbWlzZUN0b3IgPSBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcik7XG4gICAgICAgIHJldHVybiBuZXcgcHJvbWlzZUN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAgICAgX3RoaXMuc3Vic2NyaWJlKGZ1bmN0aW9uICh4KSB7IHJldHVybiB2YWx1ZSA9IHg7IH0sIGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIHJlamVjdChlcnIpOyB9LCBmdW5jdGlvbiAoKSB7IHJldHVybiByZXNvbHZlKHZhbHVlKTsgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5jcmVhdGUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlKSB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShzdWJzY3JpYmUpO1xuICAgIH07XG4gICAgcmV0dXJuIE9ic2VydmFibGU7XG59KCkpO1xuZXhwb3J0cy5PYnNlcnZhYmxlID0gT2JzZXJ2YWJsZTtcbmZ1bmN0aW9uIGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yKSB7XG4gICAgaWYgKCFwcm9taXNlQ3Rvcikge1xuICAgICAgICBwcm9taXNlQ3RvciA9IGNvbmZpZ18xLmNvbmZpZy5Qcm9taXNlIHx8IFByb21pc2U7XG4gICAgfVxuICAgIGlmICghcHJvbWlzZUN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBQcm9taXNlIGltcGwgZm91bmQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2VDdG9yO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T2JzZXJ2YWJsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKTtcbnZhciBob3N0UmVwb3J0RXJyb3JfMSA9IHJlcXVpcmUoXCIuL3V0aWwvaG9zdFJlcG9ydEVycm9yXCIpO1xuZXhwb3J0cy5lbXB0eSA9IHtcbiAgICBjbG9zZWQ6IHRydWUsXG4gICAgbmV4dDogZnVuY3Rpb24gKHZhbHVlKSB7IH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKGNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBob3N0UmVwb3J0RXJyb3JfMS5ob3N0UmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHsgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU9ic2VydmVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpc0Z1bmN0aW9uXzEgPSByZXF1aXJlKFwiLi91dGlsL2lzRnVuY3Rpb25cIik7XG52YXIgT2JzZXJ2ZXJfMSA9IHJlcXVpcmUoXCIuL09ic2VydmVyXCIpO1xudmFyIFN1YnNjcmlwdGlvbl8xID0gcmVxdWlyZShcIi4vU3Vic2NyaXB0aW9uXCIpO1xudmFyIHJ4U3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL2ludGVybmFsL3N5bWJvbC9yeFN1YnNjcmliZXJcIik7XG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi9jb25maWdcIik7XG52YXIgaG9zdFJlcG9ydEVycm9yXzEgPSByZXF1aXJlKFwiLi91dGlsL2hvc3RSZXBvcnRFcnJvclwiKTtcbnZhciBTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdWJzY3JpYmVyKGRlc3RpbmF0aW9uT3JOZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3luY0Vycm9yVmFsdWUgPSBudWxsO1xuICAgICAgICBfdGhpcy5zeW5jRXJyb3JUaHJvd24gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuc3luY0Vycm9yVGhyb3dhYmxlID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IE9ic2VydmVyXzEuZW1wdHk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYgKCFkZXN0aW5hdGlvbk9yTmV4dCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IE9ic2VydmVyXzEuZW1wdHk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRlc3RpbmF0aW9uT3JOZXh0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb25Pck5leHQgaW5zdGFuY2VvZiBTdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zeW5jRXJyb3JUaHJvd2FibGUgPSBkZXN0aW5hdGlvbk9yTmV4dC5zeW5jRXJyb3JUaHJvd2FibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uT3JOZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25Pck5leHQuYWRkKF90aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnN5bmNFcnJvclRocm93YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBTYWZlU3Vic2NyaWJlcihfdGhpcywgZGVzdGluYXRpb25Pck5leHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgX3RoaXMuc3luY0Vycm9yVGhyb3dhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBTYWZlU3Vic2NyaWJlcihfdGhpcywgZGVzdGluYXRpb25Pck5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZVtyeFN1YnNjcmliZXJfMS5yeFN1YnNjcmliZXJdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcbiAgICBTdWJzY3JpYmVyLmNyZWF0ZSA9IGZ1bmN0aW9uIChuZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIHN1YnNjcmliZXIgPSBuZXcgU3Vic2NyaWJlcihuZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICBzdWJzY3JpYmVyLnN5bmNFcnJvclRocm93YWJsZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlcjtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5fbmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51bnN1YnNjcmliZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLl9lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX3Vuc3Vic2NyaWJlQW5kUmVjeWNsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9wYXJlbnRPclBhcmVudHMgPSB0aGlzLl9wYXJlbnRPclBhcmVudHM7XG4gICAgICAgIHRoaXMuX3BhcmVudE9yUGFyZW50cyA9IG51bGw7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcGFyZW50T3JQYXJlbnRzID0gX3BhcmVudE9yUGFyZW50cztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICByZXR1cm4gU3Vic2NyaWJlcjtcbn0oU3Vic2NyaXB0aW9uXzEuU3Vic2NyaXB0aW9uKSk7XG5leHBvcnRzLlN1YnNjcmliZXIgPSBTdWJzY3JpYmVyO1xudmFyIFNhZmVTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2FmZVN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2FmZVN1YnNjcmliZXIoX3BhcmVudFN1YnNjcmliZXIsIG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3BhcmVudFN1YnNjcmliZXIgPSBfcGFyZW50U3Vic2NyaWJlcjtcbiAgICAgICAgdmFyIG5leHQ7XG4gICAgICAgIHZhciBjb250ZXh0ID0gX3RoaXM7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uXzEuaXNGdW5jdGlvbihvYnNlcnZlck9yTmV4dCkpIHtcbiAgICAgICAgICAgIG5leHQgPSBvYnNlcnZlck9yTmV4dDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvYnNlcnZlck9yTmV4dCkge1xuICAgICAgICAgICAgbmV4dCA9IG9ic2VydmVyT3JOZXh0Lm5leHQ7XG4gICAgICAgICAgICBlcnJvciA9IG9ic2VydmVyT3JOZXh0LmVycm9yO1xuICAgICAgICAgICAgY29tcGxldGUgPSBvYnNlcnZlck9yTmV4dC5jb21wbGV0ZTtcbiAgICAgICAgICAgIGlmIChvYnNlcnZlck9yTmV4dCAhPT0gT2JzZXJ2ZXJfMS5lbXB0eSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQgPSBPYmplY3QuY3JlYXRlKG9ic2VydmVyT3JOZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbl8xLmlzRnVuY3Rpb24oY29udGV4dC51bnN1YnNjcmliZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRkKGNvbnRleHQudW5zdWJzY3JpYmUuYmluZChjb250ZXh0KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRleHQudW5zdWJzY3JpYmUgPSBfdGhpcy51bnN1YnNjcmliZS5iaW5kKF90aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIF90aGlzLl9uZXh0ID0gbmV4dDtcbiAgICAgICAgX3RoaXMuX2Vycm9yID0gZXJyb3I7XG4gICAgICAgIF90aGlzLl9jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQgJiYgdGhpcy5fbmV4dCkge1xuICAgICAgICAgICAgdmFyIF9wYXJlbnRTdWJzY3JpYmVyID0gdGhpcy5fcGFyZW50U3Vic2NyaWJlcjtcbiAgICAgICAgICAgIGlmICghY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcgfHwgIV9wYXJlbnRTdWJzY3JpYmVyLnN5bmNFcnJvclRocm93YWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX190cnlPclVuc3ViKHRoaXMuX25leHQsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX190cnlPclNldEVycm9yKF9wYXJlbnRTdWJzY3JpYmVyLCB0aGlzLl9uZXh0LCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdmFyIF9wYXJlbnRTdWJzY3JpYmVyID0gdGhpcy5fcGFyZW50U3Vic2NyaWJlcjtcbiAgICAgICAgICAgIHZhciB1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nID0gY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmc7XG4gICAgICAgICAgICBpZiAodGhpcy5fZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcgfHwgIV9wYXJlbnRTdWJzY3JpYmVyLnN5bmNFcnJvclRocm93YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fdHJ5T3JVbnN1Yih0aGlzLl9lcnJvciwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yU2V0RXJyb3IoX3BhcmVudFN1YnNjcmliZXIsIHRoaXMuX2Vycm9yLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIV9wYXJlbnRTdWJzY3JpYmVyLnN5bmNFcnJvclRocm93YWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhvc3RSZXBvcnRFcnJvcl8xLmhvc3RSZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgX3BhcmVudFN1YnNjcmliZXIuc3luY0Vycm9yVmFsdWUgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgIF9wYXJlbnRTdWJzY3JpYmVyLnN5bmNFcnJvclRocm93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBob3N0UmVwb3J0RXJyb3JfMS5ob3N0UmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHZhciBfcGFyZW50U3Vic2NyaWJlciA9IHRoaXMuX3BhcmVudFN1YnNjcmliZXI7XG4gICAgICAgICAgICBpZiAodGhpcy5fY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgd3JhcHBlZENvbXBsZXRlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX2NvbXBsZXRlLmNhbGwoX3RoaXMuX2NvbnRleHQpOyB9O1xuICAgICAgICAgICAgICAgIGlmICghY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcgfHwgIV9wYXJlbnRTdWJzY3JpYmVyLnN5bmNFcnJvclRocm93YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fdHJ5T3JVbnN1Yih3cmFwcGVkQ29tcGxldGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fdHJ5T3JTZXRFcnJvcihfcGFyZW50U3Vic2NyaWJlciwgd3JhcHBlZENvbXBsZXRlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLl9fdHJ5T3JVbnN1YiA9IGZ1bmN0aW9uIChmbiwgdmFsdWUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcy5fY29udGV4dCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIGlmIChjb25maWdfMS5jb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGhvc3RSZXBvcnRFcnJvcl8xLmhvc3RSZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUuX190cnlPclNldEVycm9yID0gZnVuY3Rpb24gKHBhcmVudCwgZm4sIHZhbHVlKSB7XG4gICAgICAgIGlmICghY29uZmlnXzEuY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYmFkIGNhbGwnKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLl9jb250ZXh0LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgaWYgKGNvbmZpZ18xLmNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LnN5bmNFcnJvclZhbHVlID0gZXJyO1xuICAgICAgICAgICAgICAgIHBhcmVudC5zeW5jRXJyb3JUaHJvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaG9zdFJlcG9ydEVycm9yXzEuaG9zdFJlcG9ydEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLl91bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9wYXJlbnRTdWJzY3JpYmVyID0gdGhpcy5fcGFyZW50U3Vic2NyaWJlcjtcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3BhcmVudFN1YnNjcmliZXIgPSBudWxsO1xuICAgICAgICBfcGFyZW50U3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIFNhZmVTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyKSk7XG5leHBvcnRzLlNhZmVTdWJzY3JpYmVyID0gU2FmZVN1YnNjcmliZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJzY3JpYmVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGlzQXJyYXlfMSA9IHJlcXVpcmUoXCIuL3V0aWwvaXNBcnJheVwiKTtcbnZhciBpc09iamVjdF8xID0gcmVxdWlyZShcIi4vdXRpbC9pc09iamVjdFwiKTtcbnZhciBpc0Z1bmN0aW9uXzEgPSByZXF1aXJlKFwiLi91dGlsL2lzRnVuY3Rpb25cIik7XG52YXIgVW5zdWJzY3JpcHRpb25FcnJvcl8xID0gcmVxdWlyZShcIi4vdXRpbC9VbnN1YnNjcmlwdGlvbkVycm9yXCIpO1xudmFyIFN1YnNjcmlwdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3Vic2NyaXB0aW9uKHVuc3Vic2NyaWJlKSB7XG4gICAgICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3BhcmVudE9yUGFyZW50cyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBudWxsO1xuICAgICAgICBpZiAodW5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIHRoaXMuX2N0b3JVbnN1YnNjcmliZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl91bnN1YnNjcmliZSA9IHVuc3Vic2NyaWJlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlcnJvcnM7XG4gICAgICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIF9wYXJlbnRPclBhcmVudHMgPSBfYS5fcGFyZW50T3JQYXJlbnRzLCBfY3RvclVuc3Vic2NyaWJlID0gX2EuX2N0b3JVbnN1YnNjcmliZSwgX3Vuc3Vic2NyaWJlID0gX2EuX3Vuc3Vic2NyaWJlLCBfc3Vic2NyaXB0aW9ucyA9IF9hLl9zdWJzY3JpcHRpb25zO1xuICAgICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3BhcmVudE9yUGFyZW50cyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBudWxsO1xuICAgICAgICBpZiAoX3BhcmVudE9yUGFyZW50cyBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgX3BhcmVudE9yUGFyZW50cy5yZW1vdmUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX3BhcmVudE9yUGFyZW50cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IF9wYXJlbnRPclBhcmVudHMubGVuZ3RoOyArK2luZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudF8xID0gX3BhcmVudE9yUGFyZW50c1tpbmRleF07XG4gICAgICAgICAgICAgICAgcGFyZW50XzEucmVtb3ZlKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uXzEuaXNGdW5jdGlvbihfdW5zdWJzY3JpYmUpKSB7XG4gICAgICAgICAgICBpZiAoX2N0b3JVbnN1YnNjcmliZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBfdW5zdWJzY3JpYmUuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JzID0gZSBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3JfMS5VbnN1YnNjcmlwdGlvbkVycm9yID8gZmxhdHRlblVuc3Vic2NyaXB0aW9uRXJyb3JzKGUuZXJyb3JzKSA6IFtlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBcnJheV8xLmlzQXJyYXkoX3N1YnNjcmlwdGlvbnMpKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIHZhciBsZW4gPSBfc3Vic2NyaXB0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoKytpbmRleCA8IGxlbikge1xuICAgICAgICAgICAgICAgIHZhciBzdWIgPSBfc3Vic2NyaXB0aW9uc1tpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGlzT2JqZWN0XzEuaXNPYmplY3Qoc3ViKSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycyA9IGVycm9ycyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvcl8xLlVuc3Vic2NyaXB0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KGZsYXR0ZW5VbnN1YnNjcmlwdGlvbkVycm9ycyhlLmVycm9ycykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFVuc3Vic2NyaXB0aW9uRXJyb3JfMS5VbnN1YnNjcmlwdGlvbkVycm9yKGVycm9ycyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRlYXJkb3duKSB7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSB0ZWFyZG93bjtcbiAgICAgICAgaWYgKCF0ZWFyZG93bikge1xuICAgICAgICAgICAgcmV0dXJuIFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHR5cGVvZiB0ZWFyZG93bikge1xuICAgICAgICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24odGVhcmRvd24pO1xuICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaXB0aW9uID09PSB0aGlzIHx8IHN1YnNjcmlwdGlvbi5jbG9zZWQgfHwgdHlwZW9mIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIShzdWJzY3JpcHRpb24gaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0bXAgPSBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLl9zdWJzY3JpcHRpb25zID0gW3RtcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5yZWNvZ25pemVkIHRlYXJkb3duICcgKyB0ZWFyZG93biArICcgYWRkZWQgdG8gU3Vic2NyaXB0aW9uLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBfcGFyZW50T3JQYXJlbnRzID0gc3Vic2NyaXB0aW9uLl9wYXJlbnRPclBhcmVudHM7XG4gICAgICAgIGlmIChfcGFyZW50T3JQYXJlbnRzID09PSBudWxsKSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24uX3BhcmVudE9yUGFyZW50cyA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX3BhcmVudE9yUGFyZW50cyBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgaWYgKF9wYXJlbnRPclBhcmVudHMgPT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLl9wYXJlbnRPclBhcmVudHMgPSBbX3BhcmVudE9yUGFyZW50cywgdGhpc107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoX3BhcmVudE9yUGFyZW50cy5pbmRleE9mKHRoaXMpID09PSAtMSkge1xuICAgICAgICAgICAgX3BhcmVudE9yUGFyZW50cy5wdXNoKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3Vic2NyaXB0aW9ucyA9IHRoaXMuX3N1YnNjcmlwdGlvbnM7XG4gICAgICAgIGlmIChzdWJzY3JpcHRpb25zID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zID0gW3N1YnNjcmlwdGlvbl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb25zLnB1c2goc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb25zID0gdGhpcy5fc3Vic2NyaXB0aW9ucztcbiAgICAgICAgaWYgKHN1YnNjcmlwdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb25JbmRleCA9IHN1YnNjcmlwdGlvbnMuaW5kZXhPZihzdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbkluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbnMuc3BsaWNlKHN1YnNjcmlwdGlvbkluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLkVNUFRZID0gKGZ1bmN0aW9uIChlbXB0eSkge1xuICAgICAgICBlbXB0eS5jbG9zZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZW1wdHk7XG4gICAgfShuZXcgU3Vic2NyaXB0aW9uKCkpKTtcbiAgICByZXR1cm4gU3Vic2NyaXB0aW9uO1xufSgpKTtcbmV4cG9ydHMuU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uO1xuZnVuY3Rpb24gZmxhdHRlblVuc3Vic2NyaXB0aW9uRXJyb3JzKGVycm9ycykge1xuICAgIHJldHVybiBlcnJvcnMucmVkdWNlKGZ1bmN0aW9uIChlcnJzLCBlcnIpIHsgcmV0dXJuIGVycnMuY29uY2F0KChlcnIgaW5zdGFuY2VvZiBVbnN1YnNjcmlwdGlvbkVycm9yXzEuVW5zdWJzY3JpcHRpb25FcnJvcikgPyBlcnIuZXJyb3JzIDogZXJyKTsgfSwgW10pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3Vic2NyaXB0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIF9lbmFibGVfc3VwZXJfZ3Jvc3NfbW9kZV90aGF0X3dpbGxfY2F1c2VfYmFkX3RoaW5ncyA9IGZhbHNlO1xuZXhwb3J0cy5jb25maWcgPSB7XG4gICAgUHJvbWlzZTogdW5kZWZpbmVkLFxuICAgIHNldCB1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0RFUFJFQ0FURUQhIFJ4SlMgd2FzIHNldCB0byB1c2UgZGVwcmVjYXRlZCBzeW5jaHJvbm91cyBlcnJvciBoYW5kbGluZyBiZWhhdmlvciBieSBjb2RlIGF0OiBcXG4nICsgZXJyb3Iuc3RhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKF9lbmFibGVfc3VwZXJfZ3Jvc3NfbW9kZV90aGF0X3dpbGxfY2F1c2VfYmFkX3RoaW5ncykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1J4SlM6IEJhY2sgdG8gYSBiZXR0ZXIgZXJyb3IgYmVoYXZpb3IuIFRoYW5rIHlvdS4gPDMnKTtcbiAgICAgICAgfVxuICAgICAgICBfZW5hYmxlX3N1cGVyX2dyb3NzX21vZGVfdGhhdF93aWxsX2NhdXNlX2JhZF90aGluZ3MgPSB2YWx1ZTtcbiAgICB9LFxuICAgIGdldCB1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKCkge1xuICAgICAgICByZXR1cm4gX2VuYWJsZV9zdXBlcl9ncm9zc19tb2RlX3RoYXRfd2lsbF9jYXVzZV9iYWRfdGhpbmdzO1xuICAgIH0sXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uZmlnLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoXCIuLi9PYnNlcnZhYmxlXCIpO1xuZXhwb3J0cy5FTVBUWSA9IG5ldyBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikgeyByZXR1cm4gc3Vic2NyaWJlci5jb21wbGV0ZSgpOyB9KTtcbmZ1bmN0aW9uIGVtcHR5KHNjaGVkdWxlcikge1xuICAgIHJldHVybiBzY2hlZHVsZXIgPyBlbXB0eVNjaGVkdWxlZChzY2hlZHVsZXIpIDogZXhwb3J0cy5FTVBUWTtcbn1cbmV4cG9ydHMuZW1wdHkgPSBlbXB0eTtcbmZ1bmN0aW9uIGVtcHR5U2NoZWR1bGVkKHNjaGVkdWxlcikge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHsgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7IH0pOyB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVtcHR5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vU3Vic2NyaWJlclwiKTtcbmZ1bmN0aW9uIGRlZmF1bHRJZkVtcHR5KGRlZmF1bHRWYWx1ZSkge1xuICAgIGlmIChkZWZhdWx0VmFsdWUgPT09IHZvaWQgMCkgeyBkZWZhdWx0VmFsdWUgPSBudWxsOyB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzb3VyY2UpIHsgcmV0dXJuIHNvdXJjZS5saWZ0KG5ldyBEZWZhdWx0SWZFbXB0eU9wZXJhdG9yKGRlZmF1bHRWYWx1ZSkpOyB9O1xufVxuZXhwb3J0cy5kZWZhdWx0SWZFbXB0eSA9IGRlZmF1bHRJZkVtcHR5O1xudmFyIERlZmF1bHRJZkVtcHR5T3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERlZmF1bHRJZkVtcHR5T3BlcmF0b3IoZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBEZWZhdWx0SWZFbXB0eU9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXcgRGVmYXVsdElmRW1wdHlTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMuZGVmYXVsdFZhbHVlKSk7XG4gICAgfTtcbiAgICByZXR1cm4gRGVmYXVsdElmRW1wdHlPcGVyYXRvcjtcbn0oKSk7XG52YXIgRGVmYXVsdElmRW1wdHlTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRGVmYXVsdElmRW1wdHlTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERlZmF1bHRJZkVtcHR5U3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgICAgIF90aGlzLmlzRW1wdHkgPSB0cnVlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIERlZmF1bHRJZkVtcHR5U3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5pc0VtcHR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh2YWx1ZSk7XG4gICAgfTtcbiAgICBEZWZhdWx0SWZFbXB0eVN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbXB0eSkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHRoaXMuZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gRGVmYXVsdElmRW1wdHlTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVmYXVsdElmRW1wdHkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9TdWJzY3JpYmVyXCIpO1xuZnVuY3Rpb24gZmlsdGVyKHByZWRpY2F0ZSwgdGhpc0FyZykge1xuICAgIHJldHVybiBmdW5jdGlvbiBmaWx0ZXJPcGVyYXRvckZ1bmN0aW9uKHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLmxpZnQobmV3IEZpbHRlck9wZXJhdG9yKHByZWRpY2F0ZSwgdGhpc0FyZykpO1xuICAgIH07XG59XG5leHBvcnRzLmZpbHRlciA9IGZpbHRlcjtcbnZhciBGaWx0ZXJPcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRmlsdGVyT3BlcmF0b3IocHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gICAgICAgIHRoaXMucHJlZGljYXRlID0gcHJlZGljYXRlO1xuICAgICAgICB0aGlzLnRoaXNBcmcgPSB0aGlzQXJnO1xuICAgIH1cbiAgICBGaWx0ZXJPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IEZpbHRlclN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5wcmVkaWNhdGUsIHRoaXMudGhpc0FyZykpO1xuICAgIH07XG4gICAgcmV0dXJuIEZpbHRlck9wZXJhdG9yO1xufSgpKTtcbnZhciBGaWx0ZXJTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRmlsdGVyU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGaWx0ZXJTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBwcmVkaWNhdGUsIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnByZWRpY2F0ZSA9IHByZWRpY2F0ZTtcbiAgICAgICAgX3RoaXMudGhpc0FyZyA9IHRoaXNBcmc7XG4gICAgICAgIF90aGlzLmNvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBGaWx0ZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5wcmVkaWNhdGUuY2FsbCh0aGlzLnRoaXNBcmcsIHZhbHVlLCB0aGlzLmNvdW50KyspO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gRmlsdGVyU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcl8xLlN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZpbHRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgU3Vic2NyaWJlcl8xID0gcmVxdWlyZShcIi4uL1N1YnNjcmliZXJcIik7XG5mdW5jdGlvbiBtYXAocHJvamVjdCwgdGhpc0FyZykge1xuICAgIHJldHVybiBmdW5jdGlvbiBtYXBPcGVyYXRpb24oc291cmNlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvamVjdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgaXMgbm90IGEgZnVuY3Rpb24uIEFyZSB5b3UgbG9va2luZyBmb3IgYG1hcFRvKClgPycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzb3VyY2UubGlmdChuZXcgTWFwT3BlcmF0b3IocHJvamVjdCwgdGhpc0FyZykpO1xuICAgIH07XG59XG5leHBvcnRzLm1hcCA9IG1hcDtcbnZhciBNYXBPcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFwT3BlcmF0b3IocHJvamVjdCwgdGhpc0FyZykge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLnRoaXNBcmcgPSB0aGlzQXJnO1xuICAgIH1cbiAgICBNYXBPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IE1hcFN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5wcm9qZWN0LCB0aGlzLnRoaXNBcmcpKTtcbiAgICB9O1xuICAgIHJldHVybiBNYXBPcGVyYXRvcjtcbn0oKSk7XG5leHBvcnRzLk1hcE9wZXJhdG9yID0gTWFwT3BlcmF0b3I7XG52YXIgTWFwU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1hcFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTWFwU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgcHJvamVjdCwgdGhpc0FyZykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIF90aGlzLmNvdW50ID0gMDtcbiAgICAgICAgX3RoaXMudGhpc0FyZyA9IHRoaXNBcmcgfHwgX3RoaXM7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTWFwU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucHJvamVjdC5jYWxsKHRoaXMudGhpc0FyZywgdmFsdWUsIHRoaXMuY291bnQrKyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChyZXN1bHQpO1xuICAgIH07XG4gICAgcmV0dXJuIE1hcFN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXAuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgc2Nhbl8xID0gcmVxdWlyZShcIi4vc2NhblwiKTtcbnZhciB0YWtlTGFzdF8xID0gcmVxdWlyZShcIi4vdGFrZUxhc3RcIik7XG52YXIgZGVmYXVsdElmRW1wdHlfMSA9IHJlcXVpcmUoXCIuL2RlZmF1bHRJZkVtcHR5XCIpO1xudmFyIHBpcGVfMSA9IHJlcXVpcmUoXCIuLi91dGlsL3BpcGVcIik7XG5mdW5jdGlvbiByZWR1Y2UoYWNjdW11bGF0b3IsIHNlZWQpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiByZWR1Y2VPcGVyYXRvckZ1bmN0aW9uV2l0aFNlZWQoc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcGlwZV8xLnBpcGUoc2Nhbl8xLnNjYW4oYWNjdW11bGF0b3IsIHNlZWQpLCB0YWtlTGFzdF8xLnRha2VMYXN0KDEpLCBkZWZhdWx0SWZFbXB0eV8xLmRlZmF1bHRJZkVtcHR5KHNlZWQpKShzb3VyY2UpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gcmVkdWNlT3BlcmF0b3JGdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHBpcGVfMS5waXBlKHNjYW5fMS5zY2FuKGZ1bmN0aW9uIChhY2MsIHZhbHVlLCBpbmRleCkgeyByZXR1cm4gYWNjdW11bGF0b3IoYWNjLCB2YWx1ZSwgaW5kZXggKyAxKTsgfSksIHRha2VMYXN0XzEudGFrZUxhc3QoMSkpKHNvdXJjZSk7XG4gICAgfTtcbn1cbmV4cG9ydHMucmVkdWNlID0gcmVkdWNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVkdWNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vU3Vic2NyaWJlclwiKTtcbmZ1bmN0aW9uIHNjYW4oYWNjdW11bGF0b3IsIHNlZWQpIHtcbiAgICB2YXIgaGFzU2VlZCA9IGZhbHNlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDIpIHtcbiAgICAgICAgaGFzU2VlZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiBzY2FuT3BlcmF0b3JGdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5saWZ0KG5ldyBTY2FuT3BlcmF0b3IoYWNjdW11bGF0b3IsIHNlZWQsIGhhc1NlZWQpKTtcbiAgICB9O1xufVxuZXhwb3J0cy5zY2FuID0gc2NhbjtcbnZhciBTY2FuT3BlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNjYW5PcGVyYXRvcihhY2N1bXVsYXRvciwgc2VlZCwgaGFzU2VlZCkge1xuICAgICAgICBpZiAoaGFzU2VlZCA9PT0gdm9pZCAwKSB7IGhhc1NlZWQgPSBmYWxzZTsgfVxuICAgICAgICB0aGlzLmFjY3VtdWxhdG9yID0gYWNjdW11bGF0b3I7XG4gICAgICAgIHRoaXMuc2VlZCA9IHNlZWQ7XG4gICAgICAgIHRoaXMuaGFzU2VlZCA9IGhhc1NlZWQ7XG4gICAgfVxuICAgIFNjYW5PcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IFNjYW5TdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMuYWNjdW11bGF0b3IsIHRoaXMuc2VlZCwgdGhpcy5oYXNTZWVkKSk7XG4gICAgfTtcbiAgICByZXR1cm4gU2Nhbk9wZXJhdG9yO1xufSgpKTtcbnZhciBTY2FuU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNjYW5TdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNjYW5TdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBhY2N1bXVsYXRvciwgX3NlZWQsIGhhc1NlZWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmFjY3VtdWxhdG9yID0gYWNjdW11bGF0b3I7XG4gICAgICAgIF90aGlzLl9zZWVkID0gX3NlZWQ7XG4gICAgICAgIF90aGlzLmhhc1NlZWQgPSBoYXNTZWVkO1xuICAgICAgICBfdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNjYW5TdWJzY3JpYmVyLnByb3RvdHlwZSwgXCJzZWVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2VlZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzU2VlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9zZWVkID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFNjYW5TdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuaGFzU2VlZCkge1xuICAgICAgICAgICAgdGhpcy5zZWVkID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyeU5leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTY2FuU3Vic2NyaWJlci5wcm90b3R5cGUuX3RyeU5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleCsrO1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5hY2N1bXVsYXRvcih0aGlzLnNlZWQsIHZhbHVlLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VlZCA9IHJlc3VsdDtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHJlc3VsdCk7XG4gICAgfTtcbiAgICByZXR1cm4gU2NhblN1YnNjcmliZXI7XG59KFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2FuLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vU3Vic2NyaWJlclwiKTtcbnZhciBBcmd1bWVudE91dE9mUmFuZ2VFcnJvcl8xID0gcmVxdWlyZShcIi4uL3V0aWwvQXJndW1lbnRPdXRPZlJhbmdlRXJyb3JcIik7XG52YXIgZW1wdHlfMSA9IHJlcXVpcmUoXCIuLi9vYnNlcnZhYmxlL2VtcHR5XCIpO1xuZnVuY3Rpb24gdGFrZUxhc3QoY291bnQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gdGFrZUxhc3RPcGVyYXRvckZ1bmN0aW9uKHNvdXJjZSkge1xuICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBlbXB0eV8xLmVtcHR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc291cmNlLmxpZnQobmV3IFRha2VMYXN0T3BlcmF0b3IoY291bnQpKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLnRha2VMYXN0ID0gdGFrZUxhc3Q7XG52YXIgVGFrZUxhc3RPcGVyYXRvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGFrZUxhc3RPcGVyYXRvcih0b3RhbCkge1xuICAgICAgICB0aGlzLnRvdGFsID0gdG90YWw7XG4gICAgICAgIGlmICh0aGlzLnRvdGFsIDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9yXzEuQXJndW1lbnRPdXRPZlJhbmdlRXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVGFrZUxhc3RPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IFRha2VMYXN0U3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLnRvdGFsKSk7XG4gICAgfTtcbiAgICByZXR1cm4gVGFrZUxhc3RPcGVyYXRvcjtcbn0oKSk7XG52YXIgVGFrZUxhc3RTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVGFrZUxhc3RTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRha2VMYXN0U3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgdG90YWwpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnRvdGFsID0gdG90YWw7XG4gICAgICAgIF90aGlzLnJpbmcgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgX3RoaXMuY291bnQgPSAwO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFRha2VMYXN0U3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHJpbmcgPSB0aGlzLnJpbmc7XG4gICAgICAgIHZhciB0b3RhbCA9IHRoaXMudG90YWw7XG4gICAgICAgIHZhciBjb3VudCA9IHRoaXMuY291bnQrKztcbiAgICAgICAgaWYgKHJpbmcubGVuZ3RoIDwgdG90YWwpIHtcbiAgICAgICAgICAgIHJpbmcucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBjb3VudCAlIHRvdGFsO1xuICAgICAgICAgICAgcmluZ1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVGFrZUxhc3RTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG4gICAgICAgIHZhciBjb3VudCA9IHRoaXMuY291bnQ7XG4gICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICAgIHZhciB0b3RhbCA9IHRoaXMuY291bnQgPj0gdGhpcy50b3RhbCA/IHRoaXMudG90YWwgOiB0aGlzLmNvdW50O1xuICAgICAgICAgICAgdmFyIHJpbmcgPSB0aGlzLnJpbmc7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvdGFsOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaWR4ID0gKGNvdW50KyspICUgdG90YWw7XG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24ubmV4dChyaW5nW2lkeF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gVGFrZUxhc3RTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGFrZUxhc3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm9ic2VydmFibGUgPSAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wub2JzZXJ2YWJsZSB8fCAnQEBvYnNlcnZhYmxlJzsgfSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9ic2VydmFibGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJ4U3Vic2NyaWJlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBTeW1ib2woJ3J4U3Vic2NyaWJlcicpXG4gICAgICAgIDogJ0BAcnhTdWJzY3JpYmVyXycgKyBNYXRoLnJhbmRvbSgpO1xufSkoKTtcbmV4cG9ydHMuJCRyeFN1YnNjcmliZXIgPSBleHBvcnRzLnJ4U3Vic2NyaWJlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJ4U3Vic2NyaWJlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBcmd1bWVudE91dE9mUmFuZ2VFcnJvckltcGwgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9ySW1wbCgpIHtcbiAgICAgICAgRXJyb3IuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gJ2FyZ3VtZW50IG91dCBvZiByYW5nZSc7XG4gICAgICAgIHRoaXMubmFtZSA9ICdBcmd1bWVudE91dE9mUmFuZ2VFcnJvcic7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBBcmd1bWVudE91dE9mUmFuZ2VFcnJvckltcGwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICAgIHJldHVybiBBcmd1bWVudE91dE9mUmFuZ2VFcnJvckltcGw7XG59KSgpO1xuZXhwb3J0cy5Bcmd1bWVudE91dE9mUmFuZ2VFcnJvciA9IEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9ySW1wbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFyZ3VtZW50T3V0T2ZSYW5nZUVycm9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFVuc3Vic2NyaXB0aW9uRXJyb3JJbXBsID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBVbnN1YnNjcmlwdGlvbkVycm9ySW1wbChlcnJvcnMpIHtcbiAgICAgICAgRXJyb3IuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gZXJyb3JzID9cbiAgICAgICAgICAgIGVycm9ycy5sZW5ndGggKyBcIiBlcnJvcnMgb2NjdXJyZWQgZHVyaW5nIHVuc3Vic2NyaXB0aW9uOlxcblwiICsgZXJyb3JzLm1hcChmdW5jdGlvbiAoZXJyLCBpKSB7IHJldHVybiBpICsgMSArIFwiKSBcIiArIGVyci50b1N0cmluZygpOyB9KS5qb2luKCdcXG4gICcpIDogJyc7XG4gICAgICAgIHRoaXMubmFtZSA9ICdVbnN1YnNjcmlwdGlvbkVycm9yJztcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBVbnN1YnNjcmlwdGlvbkVycm9ySW1wbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG4gICAgcmV0dXJuIFVuc3Vic2NyaXB0aW9uRXJyb3JJbXBsO1xufSkoKTtcbmV4cG9ydHMuVW5zdWJzY3JpcHRpb25FcnJvciA9IFVuc3Vic2NyaXB0aW9uRXJyb3JJbXBsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VW5zdWJzY3JpcHRpb25FcnJvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vU3Vic2NyaWJlclwiKTtcbmZ1bmN0aW9uIGNhblJlcG9ydEVycm9yKG9ic2VydmVyKSB7XG4gICAgd2hpbGUgKG9ic2VydmVyKSB7XG4gICAgICAgIHZhciBfYSA9IG9ic2VydmVyLCBjbG9zZWRfMSA9IF9hLmNsb3NlZCwgZGVzdGluYXRpb24gPSBfYS5kZXN0aW5hdGlvbiwgaXNTdG9wcGVkID0gX2EuaXNTdG9wcGVkO1xuICAgICAgICBpZiAoY2xvc2VkXzEgfHwgaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVzdGluYXRpb24gJiYgZGVzdGluYXRpb24gaW5zdGFuY2VvZiBTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikge1xuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydHMuY2FuUmVwb3J0RXJyb3IgPSBjYW5SZXBvcnRFcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNhblJlcG9ydEVycm9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gaG9zdFJlcG9ydEVycm9yKGVycikge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyB0aHJvdyBlcnI7IH0sIDApO1xufVxuZXhwb3J0cy5ob3N0UmVwb3J0RXJyb3IgPSBob3N0UmVwb3J0RXJyb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ob3N0UmVwb3J0RXJyb3IuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBpZGVudGl0eSh4KSB7XG4gICAgcmV0dXJuIHg7XG59XG5leHBvcnRzLmlkZW50aXR5ID0gaWRlbnRpdHk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pZGVudGl0eS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaXNBcnJheSA9IChmdW5jdGlvbiAoKSB7IHJldHVybiBBcnJheS5pc0FycmF5IHx8IChmdW5jdGlvbiAoeCkgeyByZXR1cm4geCAmJiB0eXBlb2YgeC5sZW5ndGggPT09ICdudW1iZXInOyB9KTsgfSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzQXJyYXkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNGdW5jdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGlzT2JqZWN0KHgpIHtcbiAgICByZXR1cm4geCAhPT0gbnVsbCAmJiB0eXBlb2YgeCA9PT0gJ29iamVjdCc7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc09iamVjdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBpZGVudGl0eV8xID0gcmVxdWlyZShcIi4vaWRlbnRpdHlcIik7XG5mdW5jdGlvbiBwaXBlKCkge1xuICAgIHZhciBmbnMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBmbnNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcmV0dXJuIHBpcGVGcm9tQXJyYXkoZm5zKTtcbn1cbmV4cG9ydHMucGlwZSA9IHBpcGU7XG5mdW5jdGlvbiBwaXBlRnJvbUFycmF5KGZucykge1xuICAgIGlmIChmbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBpZGVudGl0eV8xLmlkZW50aXR5O1xuICAgIH1cbiAgICBpZiAoZm5zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gZm5zWzBdO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gcGlwZWQoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGZucy5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGZuKSB7IHJldHVybiBmbihwcmV2KTsgfSwgaW5wdXQpO1xuICAgIH07XG59XG5leHBvcnRzLnBpcGVGcm9tQXJyYXkgPSBwaXBlRnJvbUFycmF5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGlwZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTdWJzY3JpYmVyXzEgPSByZXF1aXJlKFwiLi4vU3Vic2NyaWJlclwiKTtcbnZhciByeFN1YnNjcmliZXJfMSA9IHJlcXVpcmUoXCIuLi9zeW1ib2wvcnhTdWJzY3JpYmVyXCIpO1xudmFyIE9ic2VydmVyXzEgPSByZXF1aXJlKFwiLi4vT2JzZXJ2ZXJcIik7XG5mdW5jdGlvbiB0b1N1YnNjcmliZXIobmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgIGlmIChuZXh0T3JPYnNlcnZlcikge1xuICAgICAgICBpZiAobmV4dE9yT2JzZXJ2ZXIgaW5zdGFuY2VvZiBTdWJzY3JpYmVyXzEuU3Vic2NyaWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIG5leHRPck9ic2VydmVyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXh0T3JPYnNlcnZlcltyeFN1YnNjcmliZXJfMS5yeFN1YnNjcmliZXJdKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dE9yT2JzZXJ2ZXJbcnhTdWJzY3JpYmVyXzEucnhTdWJzY3JpYmVyXSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghbmV4dE9yT2JzZXJ2ZXIgJiYgIWVycm9yICYmICFjb21wbGV0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKE9ic2VydmVyXzEuZW1wdHkpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFN1YnNjcmliZXJfMS5TdWJzY3JpYmVyKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpO1xufVxuZXhwb3J0cy50b1N1YnNjcmliZXIgPSB0b1N1YnNjcmliZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10b1N1YnNjcmliZXIuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXJsID0gcmVxdWlyZSgndXJsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXJpMSwgdXJpMiwgaWVNb2RlKSB7XG4gICAgaWYgKHVyaTEgPT09IHVyaTIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHVybDEgPSB1cmwucGFyc2UodXJpMSwgZmFsc2UsIHRydWUpO1xuICAgIHZhciB1cmwyID0gdXJsLnBhcnNlKHVyaTIsIGZhbHNlLCB0cnVlKTtcblxuICAgIHZhciB1cmwxUG9ydCA9IHVybDEucG9ydHwwIHx8ICh1cmwxLnByb3RvY29sID09PSAnaHR0cHMnID8gNDQzIDogODApO1xuICAgIHZhciB1cmwyUG9ydCA9IHVybDIucG9ydHwwIHx8ICh1cmwyLnByb3RvY29sID09PSAnaHR0cHMnID8gNDQzIDogODApO1xuXG4gICAgdmFyIG1hdGNoID0ge1xuICAgICAgICBwcm90bzogdXJsMS5wcm90b2NvbCA9PT0gdXJsMi5wcm90b2NvbCxcbiAgICAgICAgaG9zdG5hbWU6IHVybDEuaG9zdG5hbWUgPT09IHVybDIuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IHVybDFQb3J0ID09PSB1cmwyUG9ydFxuICAgIH07XG5cbiAgICByZXR1cm4gKChtYXRjaC5wcm90byAmJiBtYXRjaC5ob3N0bmFtZSkgJiYgKG1hdGNoLnBvcnQgfHwgaWVNb2RlKSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlcXVpcmVkID0gcmVxdWlyZSgncmVxdWlyZXMtcG9ydCcpXG4gICwgcXMgPSByZXF1aXJlKCdxdWVyeXN0cmluZ2lmeScpXG4gICwgc2xhc2hlcyA9IC9eW0EtWmEtel1bQS1aYS16MC05Ky0uXSo6W1xcXFwvXSsvXG4gICwgcHJvdG9jb2xyZSA9IC9eKFthLXpdW2EtejAtOS4rLV0qOik/KFtcXFxcL117MSx9KT8oW1xcU1xcc10qKS9pXG4gICwgd2hpdGVzcGFjZSA9ICdbXFxcXHgwOVxcXFx4MEFcXFxceDBCXFxcXHgwQ1xcXFx4MERcXFxceDIwXFxcXHhBMFxcXFx1MTY4MFxcXFx1MTgwRVxcXFx1MjAwMFxcXFx1MjAwMVxcXFx1MjAwMlxcXFx1MjAwM1xcXFx1MjAwNFxcXFx1MjAwNVxcXFx1MjAwNlxcXFx1MjAwN1xcXFx1MjAwOFxcXFx1MjAwOVxcXFx1MjAwQVxcXFx1MjAyRlxcXFx1MjA1RlxcXFx1MzAwMFxcXFx1MjAyOFxcXFx1MjAyOVxcXFx1RkVGRl0nXG4gICwgbGVmdCA9IG5ldyBSZWdFeHAoJ14nKyB3aGl0ZXNwYWNlICsnKycpO1xuXG4vKipcbiAqIFRyaW0gYSBnaXZlbiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBTdHJpbmcgdG8gdHJpbS5cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gdHJpbUxlZnQoc3RyKSB7XG4gIHJldHVybiAoc3RyID8gc3RyIDogJycpLnRvU3RyaW5nKCkucmVwbGFjZShsZWZ0LCAnJyk7XG59XG5cbi8qKlxuICogVGhlc2UgYXJlIHRoZSBwYXJzZSBydWxlcyBmb3IgdGhlIFVSTCBwYXJzZXIsIGl0IGluZm9ybXMgdGhlIHBhcnNlclxuICogYWJvdXQ6XG4gKlxuICogMC4gVGhlIGNoYXIgaXQgTmVlZHMgdG8gcGFyc2UsIGlmIGl0J3MgYSBzdHJpbmcgaXQgc2hvdWxkIGJlIGRvbmUgdXNpbmdcbiAqICAgIGluZGV4T2YsIFJlZ0V4cCB1c2luZyBleGVjIGFuZCBOYU4gbWVhbnMgc2V0IGFzIGN1cnJlbnQgdmFsdWUuXG4gKiAxLiBUaGUgcHJvcGVydHkgd2Ugc2hvdWxkIHNldCB3aGVuIHBhcnNpbmcgdGhpcyB2YWx1ZS5cbiAqIDIuIEluZGljYXRpb24gaWYgaXQncyBiYWNrd2FyZHMgb3IgZm9yd2FyZCBwYXJzaW5nLCB3aGVuIHNldCBhcyBudW1iZXIgaXQnc1xuICogICAgdGhlIHZhbHVlIG9mIGV4dHJhIGNoYXJzIHRoYXQgc2hvdWxkIGJlIHNwbGl0IG9mZi5cbiAqIDMuIEluaGVyaXQgZnJvbSBsb2NhdGlvbiBpZiBub24gZXhpc3RpbmcgaW4gdGhlIHBhcnNlci5cbiAqIDQuIGB0b0xvd2VyQ2FzZWAgdGhlIHJlc3VsdGluZyB2YWx1ZS5cbiAqL1xudmFyIHJ1bGVzID0gW1xuICBbJyMnLCAnaGFzaCddLCAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgZnJvbSB0aGUgYmFjay5cbiAgWyc/JywgJ3F1ZXJ5J10sICAgICAgICAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IGZyb20gdGhlIGJhY2suXG4gIGZ1bmN0aW9uIHNhbml0aXplKGFkZHJlc3MpIHsgICAgICAgICAgLy8gU2FuaXRpemUgd2hhdCBpcyBsZWZ0IG9mIHRoZSBhZGRyZXNzXG4gICAgcmV0dXJuIGFkZHJlc3MucmVwbGFjZSgnXFxcXCcsICcvJyk7XG4gIH0sXG4gIFsnLycsICdwYXRobmFtZSddLCAgICAgICAgICAgICAgICAgICAgLy8gRXh0cmFjdCBmcm9tIHRoZSBiYWNrLlxuICBbJ0AnLCAnYXV0aCcsIDFdLCAgICAgICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgZnJvbSB0aGUgZnJvbnQuXG4gIFtOYU4sICdob3N0JywgdW5kZWZpbmVkLCAxLCAxXSwgICAgICAgLy8gU2V0IGxlZnQgb3ZlciB2YWx1ZS5cbiAgWy86KFxcZCspJC8sICdwb3J0JywgdW5kZWZpbmVkLCAxXSwgICAgLy8gUmVnRXhwIHRoZSBiYWNrLlxuICBbTmFOLCAnaG9zdG5hbWUnLCB1bmRlZmluZWQsIDEsIDFdICAgIC8vIFNldCBsZWZ0IG92ZXIuXG5dO1xuXG4vKipcbiAqIFRoZXNlIHByb3BlcnRpZXMgc2hvdWxkIG5vdCBiZSBjb3BpZWQgb3IgaW5oZXJpdGVkIGZyb20uIFRoaXMgaXMgb25seSBuZWVkZWRcbiAqIGZvciBhbGwgbm9uIGJsb2IgVVJMJ3MgYXMgYSBibG9iIFVSTCBkb2VzIG5vdCBpbmNsdWRlIGEgaGFzaCwgb25seSB0aGVcbiAqIG9yaWdpbi5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xudmFyIGlnbm9yZSA9IHsgaGFzaDogMSwgcXVlcnk6IDEgfTtcblxuLyoqXG4gKiBUaGUgbG9jYXRpb24gb2JqZWN0IGRpZmZlcnMgd2hlbiB5b3VyIGNvZGUgaXMgbG9hZGVkIHRocm91Z2ggYSBub3JtYWwgcGFnZSxcbiAqIFdvcmtlciBvciB0aHJvdWdoIGEgd29ya2VyIHVzaW5nIGEgYmxvYi4gQW5kIHdpdGggdGhlIGJsb2JibGUgYmVnaW5zIHRoZVxuICogdHJvdWJsZSBhcyB0aGUgbG9jYXRpb24gb2JqZWN0IHdpbGwgY29udGFpbiB0aGUgVVJMIG9mIHRoZSBibG9iLCBub3QgdGhlXG4gKiBsb2NhdGlvbiBvZiB0aGUgcGFnZSB3aGVyZSBvdXIgY29kZSBpcyBsb2FkZWQgaW4uIFRoZSBhY3R1YWwgb3JpZ2luIGlzXG4gKiBlbmNvZGVkIGluIHRoZSBgcGF0aG5hbWVgIHNvIHdlIGNhbiB0aGFua2Z1bGx5IGdlbmVyYXRlIGEgZ29vZCBcImRlZmF1bHRcIlxuICogbG9jYXRpb24gZnJvbSBpdCBzbyB3ZSBjYW4gZ2VuZXJhdGUgcHJvcGVyIHJlbGF0aXZlIFVSTCdzIGFnYWluLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbG9jIE9wdGlvbmFsIGRlZmF1bHQgbG9jYXRpb24gb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gbG9sY2F0aW9uIG9iamVjdC5cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gbG9sY2F0aW9uKGxvYykge1xuICB2YXIgZ2xvYmFsVmFyO1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgZ2xvYmFsVmFyID0gd2luZG93O1xuICBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykgZ2xvYmFsVmFyID0gZ2xvYmFsO1xuICBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIGdsb2JhbFZhciA9IHNlbGY7XG4gIGVsc2UgZ2xvYmFsVmFyID0ge307XG5cbiAgdmFyIGxvY2F0aW9uID0gZ2xvYmFsVmFyLmxvY2F0aW9uIHx8IHt9O1xuICBsb2MgPSBsb2MgfHwgbG9jYXRpb247XG5cbiAgdmFyIGZpbmFsZGVzdGluYXRpb24gPSB7fVxuICAgICwgdHlwZSA9IHR5cGVvZiBsb2NcbiAgICAsIGtleTtcblxuICBpZiAoJ2Jsb2I6JyA9PT0gbG9jLnByb3RvY29sKSB7XG4gICAgZmluYWxkZXN0aW5hdGlvbiA9IG5ldyBVcmwodW5lc2NhcGUobG9jLnBhdGhuYW1lKSwge30pO1xuICB9IGVsc2UgaWYgKCdzdHJpbmcnID09PSB0eXBlKSB7XG4gICAgZmluYWxkZXN0aW5hdGlvbiA9IG5ldyBVcmwobG9jLCB7fSk7XG4gICAgZm9yIChrZXkgaW4gaWdub3JlKSBkZWxldGUgZmluYWxkZXN0aW5hdGlvbltrZXldO1xuICB9IGVsc2UgaWYgKCdvYmplY3QnID09PSB0eXBlKSB7XG4gICAgZm9yIChrZXkgaW4gbG9jKSB7XG4gICAgICBpZiAoa2V5IGluIGlnbm9yZSkgY29udGludWU7XG4gICAgICBmaW5hbGRlc3RpbmF0aW9uW2tleV0gPSBsb2Nba2V5XTtcbiAgICB9XG5cbiAgICBpZiAoZmluYWxkZXN0aW5hdGlvbi5zbGFzaGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZpbmFsZGVzdGluYXRpb24uc2xhc2hlcyA9IHNsYXNoZXMudGVzdChsb2MuaHJlZik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbmFsZGVzdGluYXRpb247XG59XG5cbi8qKlxuICogQHR5cGVkZWYgUHJvdG9jb2xFeHRyYWN0XG4gKiBAdHlwZSBPYmplY3RcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBwcm90b2NvbCBQcm90b2NvbCBtYXRjaGVkIGluIHRoZSBVUkwsIGluIGxvd2VyY2FzZS5cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gc2xhc2hlcyBgdHJ1ZWAgaWYgcHJvdG9jb2wgaXMgZm9sbG93ZWQgYnkgXCIvL1wiLCBlbHNlIGBmYWxzZWAuXG4gKiBAcHJvcGVydHkge1N0cmluZ30gcmVzdCBSZXN0IG9mIHRoZSBVUkwgdGhhdCBpcyBub3QgcGFydCBvZiB0aGUgcHJvdG9jb2wuXG4gKi9cblxuLyoqXG4gKiBFeHRyYWN0IHByb3RvY29sIGluZm9ybWF0aW9uIGZyb20gYSBVUkwgd2l0aC93aXRob3V0IGRvdWJsZSBzbGFzaCAoXCIvL1wiKS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYWRkcmVzcyBVUkwgd2Ugd2FudCB0byBleHRyYWN0IGZyb20uXG4gKiBAcmV0dXJuIHtQcm90b2NvbEV4dHJhY3R9IEV4dHJhY3RlZCBpbmZvcm1hdGlvbi5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGV4dHJhY3RQcm90b2NvbChhZGRyZXNzKSB7XG4gIGFkZHJlc3MgPSB0cmltTGVmdChhZGRyZXNzKTtcblxuICB2YXIgbWF0Y2ggPSBwcm90b2NvbHJlLmV4ZWMoYWRkcmVzcylcbiAgICAsIHByb3RvY29sID0gbWF0Y2hbMV0gPyBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpIDogJydcbiAgICAsIHNsYXNoZXMgPSAhIShtYXRjaFsyXSAmJiBtYXRjaFsyXS5sZW5ndGggPj0gMilcbiAgICAsIHJlc3QgPSAgbWF0Y2hbMl0gJiYgbWF0Y2hbMl0ubGVuZ3RoID09PSAxID8gJy8nICsgbWF0Y2hbM10gOiBtYXRjaFszXTtcblxuICByZXR1cm4ge1xuICAgIHByb3RvY29sOiBwcm90b2NvbCxcbiAgICBzbGFzaGVzOiBzbGFzaGVzLFxuICAgIHJlc3Q6IHJlc3RcbiAgfTtcbn1cblxuLyoqXG4gKiBSZXNvbHZlIGEgcmVsYXRpdmUgVVJMIHBhdGhuYW1lIGFnYWluc3QgYSBiYXNlIFVSTCBwYXRobmFtZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVsYXRpdmUgUGF0aG5hbWUgb2YgdGhlIHJlbGF0aXZlIFVSTC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBiYXNlIFBhdGhuYW1lIG9mIHRoZSBiYXNlIFVSTC5cbiAqIEByZXR1cm4ge1N0cmluZ30gUmVzb2x2ZWQgcGF0aG5hbWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZXNvbHZlKHJlbGF0aXZlLCBiYXNlKSB7XG4gIGlmIChyZWxhdGl2ZSA9PT0gJycpIHJldHVybiBiYXNlO1xuXG4gIHZhciBwYXRoID0gKGJhc2UgfHwgJy8nKS5zcGxpdCgnLycpLnNsaWNlKDAsIC0xKS5jb25jYXQocmVsYXRpdmUuc3BsaXQoJy8nKSlcbiAgICAsIGkgPSBwYXRoLmxlbmd0aFxuICAgICwgbGFzdCA9IHBhdGhbaSAtIDFdXG4gICAgLCB1bnNoaWZ0ID0gZmFsc2VcbiAgICAsIHVwID0gMDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgaWYgKHBhdGhbaV0gPT09ICcuJykge1xuICAgICAgcGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChwYXRoW2ldID09PSAnLi4nKSB7XG4gICAgICBwYXRoLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgaWYgKGkgPT09IDApIHVuc2hpZnQgPSB0cnVlO1xuICAgICAgcGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIGlmICh1bnNoaWZ0KSBwYXRoLnVuc2hpZnQoJycpO1xuICBpZiAobGFzdCA9PT0gJy4nIHx8IGxhc3QgPT09ICcuLicpIHBhdGgucHVzaCgnJyk7XG5cbiAgcmV0dXJuIHBhdGguam9pbignLycpO1xufVxuXG4vKipcbiAqIFRoZSBhY3R1YWwgVVJMIGluc3RhbmNlLiBJbnN0ZWFkIG9mIHJldHVybmluZyBhbiBvYmplY3Qgd2UndmUgb3B0ZWQtaW4gdG9cbiAqIGNyZWF0ZSBhbiBhY3R1YWwgY29uc3RydWN0b3IgYXMgaXQncyBtdWNoIG1vcmUgbWVtb3J5IGVmZmljaWVudCBhbmRcbiAqIGZhc3RlciBhbmQgaXQgcGxlYXNlcyBteSBPQ0QuXG4gKlxuICogSXQgaXMgd29ydGggbm90aW5nIHRoYXQgd2Ugc2hvdWxkIG5vdCB1c2UgYFVSTGAgYXMgY2xhc3MgbmFtZSB0byBwcmV2ZW50XG4gKiBjbGFzaGVzIHdpdGggdGhlIGdsb2JhbCBVUkwgaW5zdGFuY2UgdGhhdCBnb3QgaW50cm9kdWNlZCBpbiBicm93c2Vycy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSBhZGRyZXNzIFVSTCB3ZSB3YW50IHRvIHBhcnNlLlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBbbG9jYXRpb25dIExvY2F0aW9uIGRlZmF1bHRzIGZvciByZWxhdGl2ZSBwYXRocy5cbiAqIEBwYXJhbSB7Qm9vbGVhbnxGdW5jdGlvbn0gW3BhcnNlcl0gUGFyc2VyIGZvciB0aGUgcXVlcnkgc3RyaW5nLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gVXJsKGFkZHJlc3MsIGxvY2F0aW9uLCBwYXJzZXIpIHtcbiAgYWRkcmVzcyA9IHRyaW1MZWZ0KGFkZHJlc3MpO1xuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBVcmwpKSB7XG4gICAgcmV0dXJuIG5ldyBVcmwoYWRkcmVzcywgbG9jYXRpb24sIHBhcnNlcik7XG4gIH1cblxuICB2YXIgcmVsYXRpdmUsIGV4dHJhY3RlZCwgcGFyc2UsIGluc3RydWN0aW9uLCBpbmRleCwga2V5XG4gICAgLCBpbnN0cnVjdGlvbnMgPSBydWxlcy5zbGljZSgpXG4gICAgLCB0eXBlID0gdHlwZW9mIGxvY2F0aW9uXG4gICAgLCB1cmwgPSB0aGlzXG4gICAgLCBpID0gMDtcblxuICAvL1xuICAvLyBUaGUgZm9sbG93aW5nIGlmIHN0YXRlbWVudHMgYWxsb3dzIHRoaXMgbW9kdWxlIHR3byBoYXZlIGNvbXBhdGliaWxpdHkgd2l0aFxuICAvLyAyIGRpZmZlcmVudCBBUEk6XG4gIC8vXG4gIC8vIDEuIE5vZGUuanMncyBgdXJsLnBhcnNlYCBhcGkgd2hpY2ggYWNjZXB0cyBhIFVSTCwgYm9vbGVhbiBhcyBhcmd1bWVudHNcbiAgLy8gICAgd2hlcmUgdGhlIGJvb2xlYW4gaW5kaWNhdGVzIHRoYXQgdGhlIHF1ZXJ5IHN0cmluZyBzaG91bGQgYWxzbyBiZSBwYXJzZWQuXG4gIC8vXG4gIC8vIDIuIFRoZSBgVVJMYCBpbnRlcmZhY2Ugb2YgdGhlIGJyb3dzZXIgd2hpY2ggYWNjZXB0cyBhIFVSTCwgb2JqZWN0IGFzXG4gIC8vICAgIGFyZ3VtZW50cy4gVGhlIHN1cHBsaWVkIG9iamVjdCB3aWxsIGJlIHVzZWQgYXMgZGVmYXVsdCB2YWx1ZXMgLyBmYWxsLWJhY2tcbiAgLy8gICAgZm9yIHJlbGF0aXZlIHBhdGhzLlxuICAvL1xuICBpZiAoJ29iamVjdCcgIT09IHR5cGUgJiYgJ3N0cmluZycgIT09IHR5cGUpIHtcbiAgICBwYXJzZXIgPSBsb2NhdGlvbjtcbiAgICBsb2NhdGlvbiA9IG51bGw7XG4gIH1cblxuICBpZiAocGFyc2VyICYmICdmdW5jdGlvbicgIT09IHR5cGVvZiBwYXJzZXIpIHBhcnNlciA9IHFzLnBhcnNlO1xuXG4gIGxvY2F0aW9uID0gbG9sY2F0aW9uKGxvY2F0aW9uKTtcblxuICAvL1xuICAvLyBFeHRyYWN0IHByb3RvY29sIGluZm9ybWF0aW9uIGJlZm9yZSBydW5uaW5nIHRoZSBpbnN0cnVjdGlvbnMuXG4gIC8vXG4gIGV4dHJhY3RlZCA9IGV4dHJhY3RQcm90b2NvbChhZGRyZXNzIHx8ICcnKTtcbiAgcmVsYXRpdmUgPSAhZXh0cmFjdGVkLnByb3RvY29sICYmICFleHRyYWN0ZWQuc2xhc2hlcztcbiAgdXJsLnNsYXNoZXMgPSBleHRyYWN0ZWQuc2xhc2hlcyB8fCByZWxhdGl2ZSAmJiBsb2NhdGlvbi5zbGFzaGVzO1xuICB1cmwucHJvdG9jb2wgPSBleHRyYWN0ZWQucHJvdG9jb2wgfHwgbG9jYXRpb24ucHJvdG9jb2wgfHwgJyc7XG4gIGFkZHJlc3MgPSBleHRyYWN0ZWQucmVzdDtcblxuICAvL1xuICAvLyBXaGVuIHRoZSBhdXRob3JpdHkgY29tcG9uZW50IGlzIGFic2VudCB0aGUgVVJMIHN0YXJ0cyB3aXRoIGEgcGF0aFxuICAvLyBjb21wb25lbnQuXG4gIC8vXG4gIGlmICghZXh0cmFjdGVkLnNsYXNoZXMpIGluc3RydWN0aW9uc1szXSA9IFsvKC4qKS8sICdwYXRobmFtZSddO1xuXG4gIGZvciAoOyBpIDwgaW5zdHJ1Y3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgaW5zdHJ1Y3Rpb24gPSBpbnN0cnVjdGlvbnNbaV07XG5cbiAgICBpZiAodHlwZW9mIGluc3RydWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhZGRyZXNzID0gaW5zdHJ1Y3Rpb24oYWRkcmVzcyk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBwYXJzZSA9IGluc3RydWN0aW9uWzBdO1xuICAgIGtleSA9IGluc3RydWN0aW9uWzFdO1xuXG4gICAgaWYgKHBhcnNlICE9PSBwYXJzZSkge1xuICAgICAgdXJsW2tleV0gPSBhZGRyZXNzO1xuICAgIH0gZWxzZSBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiBwYXJzZSkge1xuICAgICAgaWYgKH4oaW5kZXggPSBhZGRyZXNzLmluZGV4T2YocGFyc2UpKSkge1xuICAgICAgICBpZiAoJ251bWJlcicgPT09IHR5cGVvZiBpbnN0cnVjdGlvblsyXSkge1xuICAgICAgICAgIHVybFtrZXldID0gYWRkcmVzcy5zbGljZSgwLCBpbmRleCk7XG4gICAgICAgICAgYWRkcmVzcyA9IGFkZHJlc3Muc2xpY2UoaW5kZXggKyBpbnN0cnVjdGlvblsyXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdXJsW2tleV0gPSBhZGRyZXNzLnNsaWNlKGluZGV4KTtcbiAgICAgICAgICBhZGRyZXNzID0gYWRkcmVzcy5zbGljZSgwLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKChpbmRleCA9IHBhcnNlLmV4ZWMoYWRkcmVzcykpKSB7XG4gICAgICB1cmxba2V5XSA9IGluZGV4WzFdO1xuICAgICAgYWRkcmVzcyA9IGFkZHJlc3Muc2xpY2UoMCwgaW5kZXguaW5kZXgpO1xuICAgIH1cblxuICAgIHVybFtrZXldID0gdXJsW2tleV0gfHwgKFxuICAgICAgcmVsYXRpdmUgJiYgaW5zdHJ1Y3Rpb25bM10gPyBsb2NhdGlvbltrZXldIHx8ICcnIDogJydcbiAgICApO1xuXG4gICAgLy9cbiAgICAvLyBIb3N0bmFtZSwgaG9zdCBhbmQgcHJvdG9jb2wgc2hvdWxkIGJlIGxvd2VyY2FzZWQgc28gdGhleSBjYW4gYmUgdXNlZCB0b1xuICAgIC8vIGNyZWF0ZSBhIHByb3BlciBgb3JpZ2luYC5cbiAgICAvL1xuICAgIGlmIChpbnN0cnVjdGlvbls0XSkgdXJsW2tleV0gPSB1cmxba2V5XS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgLy9cbiAgLy8gQWxzbyBwYXJzZSB0aGUgc3VwcGxpZWQgcXVlcnkgc3RyaW5nIGluIHRvIGFuIG9iamVjdC4gSWYgd2UncmUgc3VwcGxpZWRcbiAgLy8gd2l0aCBhIGN1c3RvbSBwYXJzZXIgYXMgZnVuY3Rpb24gdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCBidWlsZC1pblxuICAvLyBwYXJzZXIuXG4gIC8vXG4gIGlmIChwYXJzZXIpIHVybC5xdWVyeSA9IHBhcnNlcih1cmwucXVlcnkpO1xuXG4gIC8vXG4gIC8vIElmIHRoZSBVUkwgaXMgcmVsYXRpdmUsIHJlc29sdmUgdGhlIHBhdGhuYW1lIGFnYWluc3QgdGhlIGJhc2UgVVJMLlxuICAvL1xuICBpZiAoXG4gICAgICByZWxhdGl2ZVxuICAgICYmIGxvY2F0aW9uLnNsYXNoZXNcbiAgICAmJiB1cmwucGF0aG5hbWUuY2hhckF0KDApICE9PSAnLydcbiAgICAmJiAodXJsLnBhdGhuYW1lICE9PSAnJyB8fCBsb2NhdGlvbi5wYXRobmFtZSAhPT0gJycpXG4gICkge1xuICAgIHVybC5wYXRobmFtZSA9IHJlc29sdmUodXJsLnBhdGhuYW1lLCBsb2NhdGlvbi5wYXRobmFtZSk7XG4gIH1cblxuICAvL1xuICAvLyBEZWZhdWx0IHRvIGEgLyBmb3IgcGF0aG5hbWUgaWYgbm9uZSBleGlzdHMuIFRoaXMgbm9ybWFsaXplcyB0aGUgVVJMXG4gIC8vIHRvIGFsd2F5cyBoYXZlIGEgL1xuICAvL1xuICBpZiAodXJsLnBhdGhuYW1lLmNoYXJBdCgwKSAhPT0gJy8nICYmIHVybC5ob3N0bmFtZSkge1xuICAgIHVybC5wYXRobmFtZSA9ICcvJyArIHVybC5wYXRobmFtZTtcbiAgfVxuXG4gIC8vXG4gIC8vIFdlIHNob3VsZCBub3QgYWRkIHBvcnQgbnVtYmVycyBpZiB0aGV5IGFyZSBhbHJlYWR5IHRoZSBkZWZhdWx0IHBvcnQgbnVtYmVyXG4gIC8vIGZvciBhIGdpdmVuIHByb3RvY29sLiBBcyB0aGUgaG9zdCBhbHNvIGNvbnRhaW5zIHRoZSBwb3J0IG51bWJlciB3ZSdyZSBnb2luZ1xuICAvLyBvdmVycmlkZSBpdCB3aXRoIHRoZSBob3N0bmFtZSB3aGljaCBjb250YWlucyBubyBwb3J0IG51bWJlci5cbiAgLy9cbiAgaWYgKCFyZXF1aXJlZCh1cmwucG9ydCwgdXJsLnByb3RvY29sKSkge1xuICAgIHVybC5ob3N0ID0gdXJsLmhvc3RuYW1lO1xuICAgIHVybC5wb3J0ID0gJyc7XG4gIH1cblxuICAvL1xuICAvLyBQYXJzZSBkb3duIHRoZSBgYXV0aGAgZm9yIHRoZSB1c2VybmFtZSBhbmQgcGFzc3dvcmQuXG4gIC8vXG4gIHVybC51c2VybmFtZSA9IHVybC5wYXNzd29yZCA9ICcnO1xuICBpZiAodXJsLmF1dGgpIHtcbiAgICBpbnN0cnVjdGlvbiA9IHVybC5hdXRoLnNwbGl0KCc6Jyk7XG4gICAgdXJsLnVzZXJuYW1lID0gaW5zdHJ1Y3Rpb25bMF0gfHwgJyc7XG4gICAgdXJsLnBhc3N3b3JkID0gaW5zdHJ1Y3Rpb25bMV0gfHwgJyc7XG4gIH1cblxuICB1cmwub3JpZ2luID0gdXJsLnByb3RvY29sICYmIHVybC5ob3N0ICYmIHVybC5wcm90b2NvbCAhPT0gJ2ZpbGU6J1xuICAgID8gdXJsLnByb3RvY29sICsnLy8nKyB1cmwuaG9zdFxuICAgIDogJ251bGwnO1xuXG4gIC8vXG4gIC8vIFRoZSBocmVmIGlzIGp1c3QgdGhlIGNvbXBpbGVkIHJlc3VsdC5cbiAgLy9cbiAgdXJsLmhyZWYgPSB1cmwudG9TdHJpbmcoKTtcbn1cblxuLyoqXG4gKiBUaGlzIGlzIGNvbnZlbmllbmNlIG1ldGhvZCBmb3IgY2hhbmdpbmcgcHJvcGVydGllcyBpbiB0aGUgVVJMIGluc3RhbmNlIHRvXG4gKiBpbnN1cmUgdGhhdCB0aGV5IGFsbCBwcm9wYWdhdGUgY29ycmVjdGx5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJ0ICAgICAgICAgIFByb3BlcnR5IHdlIG5lZWQgdG8gYWRqdXN0LlxuICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgICAgICAgICAgVGhlIG5ld2x5IGFzc2lnbmVkIHZhbHVlLlxuICogQHBhcmFtIHtCb29sZWFufEZ1bmN0aW9ufSBmbiAgV2hlbiBzZXR0aW5nIHRoZSBxdWVyeSwgaXQgd2lsbCBiZSB0aGUgZnVuY3Rpb25cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZWQgdG8gcGFyc2UgdGhlIHF1ZXJ5LlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hlbiBzZXR0aW5nIHRoZSBwcm90b2NvbCwgZG91YmxlIHNsYXNoIHdpbGwgYmVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWQgZnJvbSB0aGUgZmluYWwgdXJsIGlmIGl0IGlzIHRydWUuXG4gKiBAcmV0dXJucyB7VVJMfSBVUkwgaW5zdGFuY2UgZm9yIGNoYWluaW5nLlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBzZXQocGFydCwgdmFsdWUsIGZuKSB7XG4gIHZhciB1cmwgPSB0aGlzO1xuXG4gIHN3aXRjaCAocGFydCkge1xuICAgIGNhc2UgJ3F1ZXJ5JzpcbiAgICAgIGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mIHZhbHVlICYmIHZhbHVlLmxlbmd0aCkge1xuICAgICAgICB2YWx1ZSA9IChmbiB8fCBxcy5wYXJzZSkodmFsdWUpO1xuICAgICAgfVxuXG4gICAgICB1cmxbcGFydF0gPSB2YWx1ZTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncG9ydCc6XG4gICAgICB1cmxbcGFydF0gPSB2YWx1ZTtcblxuICAgICAgaWYgKCFyZXF1aXJlZCh2YWx1ZSwgdXJsLnByb3RvY29sKSkge1xuICAgICAgICB1cmwuaG9zdCA9IHVybC5ob3N0bmFtZTtcbiAgICAgICAgdXJsW3BhcnRdID0gJyc7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICAgIHVybC5ob3N0ID0gdXJsLmhvc3RuYW1lICsnOicrIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2hvc3RuYW1lJzpcbiAgICAgIHVybFtwYXJ0XSA9IHZhbHVlO1xuXG4gICAgICBpZiAodXJsLnBvcnQpIHZhbHVlICs9ICc6JysgdXJsLnBvcnQ7XG4gICAgICB1cmwuaG9zdCA9IHZhbHVlO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdob3N0JzpcbiAgICAgIHVybFtwYXJ0XSA9IHZhbHVlO1xuXG4gICAgICBpZiAoLzpcXGQrJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnOicpO1xuICAgICAgICB1cmwucG9ydCA9IHZhbHVlLnBvcCgpO1xuICAgICAgICB1cmwuaG9zdG5hbWUgPSB2YWx1ZS5qb2luKCc6Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cmwuaG9zdG5hbWUgPSB2YWx1ZTtcbiAgICAgICAgdXJsLnBvcnQgPSAnJztcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdwcm90b2NvbCc6XG4gICAgICB1cmwucHJvdG9jb2wgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdXJsLnNsYXNoZXMgPSAhZm47XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3BhdGhuYW1lJzpcbiAgICBjYXNlICdoYXNoJzpcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB2YXIgY2hhciA9IHBhcnQgPT09ICdwYXRobmFtZScgPyAnLycgOiAnIyc7XG4gICAgICAgIHVybFtwYXJ0XSA9IHZhbHVlLmNoYXJBdCgwKSAhPT0gY2hhciA/IGNoYXIgKyB2YWx1ZSA6IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXJsW3BhcnRdID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB1cmxbcGFydF0gPSB2YWx1ZTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaW5zID0gcnVsZXNbaV07XG5cbiAgICBpZiAoaW5zWzRdKSB1cmxbaW5zWzFdXSA9IHVybFtpbnNbMV1dLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICB1cmwub3JpZ2luID0gdXJsLnByb3RvY29sICYmIHVybC5ob3N0ICYmIHVybC5wcm90b2NvbCAhPT0gJ2ZpbGU6J1xuICAgID8gdXJsLnByb3RvY29sICsnLy8nKyB1cmwuaG9zdFxuICAgIDogJ251bGwnO1xuXG4gIHVybC5ocmVmID0gdXJsLnRvU3RyaW5nKCk7XG5cbiAgcmV0dXJuIHVybDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIHByb3BlcnRpZXMgYmFjayBpbiB0byBhIHZhbGlkIGFuZCBmdWxsIFVSTCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5naWZ5IE9wdGlvbmFsIHF1ZXJ5IHN0cmluZ2lmeSBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IENvbXBpbGVkIHZlcnNpb24gb2YgdGhlIFVSTC5cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcoc3RyaW5naWZ5KSB7XG4gIGlmICghc3RyaW5naWZ5IHx8ICdmdW5jdGlvbicgIT09IHR5cGVvZiBzdHJpbmdpZnkpIHN0cmluZ2lmeSA9IHFzLnN0cmluZ2lmeTtcblxuICB2YXIgcXVlcnlcbiAgICAsIHVybCA9IHRoaXNcbiAgICAsIHByb3RvY29sID0gdXJsLnByb3RvY29sO1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5jaGFyQXQocHJvdG9jb2wubGVuZ3RoIC0gMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonO1xuXG4gIHZhciByZXN1bHQgPSBwcm90b2NvbCArICh1cmwuc2xhc2hlcyA/ICcvLycgOiAnJyk7XG5cbiAgaWYgKHVybC51c2VybmFtZSkge1xuICAgIHJlc3VsdCArPSB1cmwudXNlcm5hbWU7XG4gICAgaWYgKHVybC5wYXNzd29yZCkgcmVzdWx0ICs9ICc6JysgdXJsLnBhc3N3b3JkO1xuICAgIHJlc3VsdCArPSAnQCc7XG4gIH1cblxuICByZXN1bHQgKz0gdXJsLmhvc3QgKyB1cmwucGF0aG5hbWU7XG5cbiAgcXVlcnkgPSAnb2JqZWN0JyA9PT0gdHlwZW9mIHVybC5xdWVyeSA/IHN0cmluZ2lmeSh1cmwucXVlcnkpIDogdXJsLnF1ZXJ5O1xuICBpZiAocXVlcnkpIHJlc3VsdCArPSAnPycgIT09IHF1ZXJ5LmNoYXJBdCgwKSA/ICc/JysgcXVlcnkgOiBxdWVyeTtcblxuICBpZiAodXJsLmhhc2gpIHJlc3VsdCArPSB1cmwuaGFzaDtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5VcmwucHJvdG90eXBlID0geyBzZXQ6IHNldCwgdG9TdHJpbmc6IHRvU3RyaW5nIH07XG5cbi8vXG4vLyBFeHBvc2UgdGhlIFVSTCBwYXJzZXIgYW5kIHNvbWUgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRoYXQgbWlnaHQgYmUgdXNlZnVsIGZvclxuLy8gb3RoZXJzIG9yIHRlc3RpbmcuXG4vL1xuVXJsLmV4dHJhY3RQcm90b2NvbCA9IGV4dHJhY3RQcm90b2NvbDtcblVybC5sb2NhdGlvbiA9IGxvbGNhdGlvbjtcblVybC50cmltTGVmdCA9IHRyaW1MZWZ0O1xuVXJsLnFzID0gcXM7XG5cbm1vZHVsZS5leHBvcnRzID0gVXJsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==