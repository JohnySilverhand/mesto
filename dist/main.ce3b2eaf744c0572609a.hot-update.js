"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatemesto"]("main",{

/***/ "./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&reconnect=10":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&reconnect=10 ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("var __resourceQuery = \"?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&reconnect=10\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/log.js */ \"./node_modules/webpack/hot/log.js\");\n/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/stripAnsi.js */ \"./node_modules/webpack-dev-server/client/utils/stripAnsi.js\");\n/* harmony import */ var _utils_parseURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/parseURL.js */ \"./node_modules/webpack-dev-server/client/utils/parseURL.js\");\n/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socket.js */ \"./node_modules/webpack-dev-server/client/socket.js\");\n/* harmony import */ var _overlay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay.js */ \"./node_modules/webpack-dev-server/client/overlay.js\");\n/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/log.js */ \"./node_modules/webpack-dev-server/client/utils/log.js\");\n/* harmony import */ var _utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/sendMessage.js */ \"./node_modules/webpack-dev-server/client/utils/sendMessage.js\");\n/* harmony import */ var _utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/reloadApp.js */ \"./node_modules/webpack-dev-server/client/utils/reloadApp.js\");\n/* harmony import */ var _utils_createSocketURL_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/createSocketURL.js */ \"./node_modules/webpack-dev-server/client/utils/createSocketURL.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n/* global __resourceQuery, __webpack_hash__ */\n/// <reference types=\"webpack/module\" />\n\n\n\n\n\n\n\n\n\n/**\r\n * @typedef {Object} Options\r\n * @property {boolean} hot\r\n * @property {boolean} liveReload\r\n * @property {boolean} progress\r\n * @property {boolean | { warnings?: boolean, errors?: boolean, trustedTypesPolicyName?: string }} overlay\r\n * @property {string} [logging]\r\n * @property {number} [reconnect]\r\n */\n\n/**\r\n * @typedef {Object} Status\r\n * @property {boolean} isUnloading\r\n * @property {string} currentHash\r\n * @property {string} [previousHash]\r\n */\n\n/**\r\n * @type {Status}\r\n */\n\nvar status = {\n  isUnloading: false,\n  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement\n  // eslint-disable-next-line camelcase\n  currentHash:  true ? __webpack_require__.h() : 0\n};\n/** @type {Options} */\n\nvar options = {\n  hot: false,\n  liveReload: false,\n  progress: false,\n  overlay: false\n};\nvar parsedResourceQuery = (0,_utils_parseURL_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(__resourceQuery);\n\nif (parsedResourceQuery.hot === \"true\") {\n  options.hot = true;\n  _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(\"Hot Module Replacement enabled.\");\n}\n\nif (parsedResourceQuery[\"live-reload\"] === \"true\") {\n  options.liveReload = true;\n  _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(\"Live Reloading enabled.\");\n}\n\nif (parsedResourceQuery.logging) {\n  options.logging = parsedResourceQuery.logging;\n}\n\nif (typeof parsedResourceQuery.reconnect !== \"undefined\") {\n  options.reconnect = Number(parsedResourceQuery.reconnect);\n}\n/**\r\n * @param {string} level\r\n */\n\n\nfunction setAllLogLevel(level) {\n  // This is needed because the HMR logger operate separately from dev server logger\n  webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default().setLogLevel(level === \"verbose\" || level === \"log\" ? \"info\" : level);\n  (0,_utils_log_js__WEBPACK_IMPORTED_MODULE_5__.setLogLevel)(level);\n}\n\nif (options.logging) {\n  setAllLogLevel(options.logging);\n}\n\nself.addEventListener(\"beforeunload\", function () {\n  status.isUnloading = true;\n});\nvar onSocketMessage = {\n  hot: function hot() {\n    if (parsedResourceQuery.hot === \"false\") {\n      return;\n    }\n\n    options.hot = true;\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(\"Hot Module Replacement enabled.\");\n  },\n  liveReload: function liveReload() {\n    if (parsedResourceQuery[\"live-reload\"] === \"false\") {\n      return;\n    }\n\n    options.liveReload = true;\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(\"Live Reloading enabled.\");\n  },\n  invalid: function invalid() {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(\"App updated. Recompiling...\"); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.\n\n    if (options.overlay) {\n      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();\n    }\n\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"Invalid\");\n  },\n\n  /**\r\n   * @param {string} hash\r\n   */\n  hash: function hash(_hash) {\n    status.previousHash = status.currentHash;\n    status.currentHash = _hash;\n  },\n  logging: setAllLogLevel,\n\n  /**\r\n   * @param {boolean} value\r\n   */\n  overlay: function overlay(value) {\n    if (typeof document === \"undefined\") {\n      return;\n    }\n\n    options.overlay = value;\n  },\n\n  /**\r\n   * @param {number} value\r\n   */\n  reconnect: function reconnect(value) {\n    if (parsedResourceQuery.reconnect === \"false\") {\n      return;\n    }\n\n    options.reconnect = value;\n  },\n\n  /**\r\n   * @param {boolean} value\r\n   */\n  progress: function progress(value) {\n    options.progress = value;\n  },\n\n  /**\r\n   * @param {{ pluginName?: string, percent: number, msg: string }} data\r\n   */\n  \"progress-update\": function progressUpdate(data) {\n    if (options.progress) {\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(\"\".concat(data.pluginName ? \"[\".concat(data.pluginName, \"] \") : \"\").concat(data.percent, \"% - \").concat(data.msg, \".\"));\n    }\n\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"Progress\", data);\n  },\n  \"still-ok\": function stillOk() {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(\"Nothing changed.\");\n\n    if (options.overlay) {\n      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();\n    }\n\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"StillOk\");\n  },\n  ok: function ok() {\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"Ok\");\n\n    if (options.overlay) {\n      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();\n    }\n\n    (0,_utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(options, status);\n  },\n  // TODO: remove in v5 in favor of 'static-changed'\n\n  /**\r\n   * @param {string} file\r\n   */\n  \"content-changed\": function contentChanged(file) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(\"\".concat(file ? \"\\\"\".concat(file, \"\\\"\") : \"Content\", \" from static directory was changed. Reloading...\"));\n    self.location.reload();\n  },\n\n  /**\r\n   * @param {string} file\r\n   */\n  \"static-changed\": function staticChanged(file) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(\"\".concat(file ? \"\\\"\".concat(file, \"\\\"\") : \"Content\", \" from static directory was changed. Reloading...\"));\n    self.location.reload();\n  },\n\n  /**\r\n   * @param {Error[]} warnings\r\n   * @param {any} params\r\n   */\n  warnings: function warnings(_warnings, params) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn(\"Warnings while compiling.\");\n\n    var printableWarnings = _warnings.map(function (error) {\n      var _formatProblem = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.formatProblem)(\"warning\", error),\n          header = _formatProblem.header,\n          body = _formatProblem.body;\n\n      return \"\".concat(header, \"\\n\").concat((0,_utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(body));\n    });\n\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"Warnings\", printableWarnings);\n\n    for (var i = 0; i < printableWarnings.length; i++) {\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn(printableWarnings[i]);\n    }\n\n    var needShowOverlayForWarnings = typeof options.overlay === \"boolean\" ? options.overlay : options.overlay && options.overlay.warnings;\n\n    if (needShowOverlayForWarnings) {\n      var trustedTypesPolicyName = _typeof(options.overlay) === \"object\" && options.overlay.trustedTypesPolicyName;\n      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.show)(\"warning\", _warnings, trustedTypesPolicyName || null);\n    }\n\n    if (params && params.preventReloading) {\n      return;\n    }\n\n    (0,_utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(options, status);\n  },\n\n  /**\r\n   * @param {Error[]} errors\r\n   */\n  errors: function errors(_errors) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(\"Errors while compiling. Reload prevented.\");\n\n    var printableErrors = _errors.map(function (error) {\n      var _formatProblem2 = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.formatProblem)(\"error\", error),\n          header = _formatProblem2.header,\n          body = _formatProblem2.body;\n\n      return \"\".concat(header, \"\\n\").concat((0,_utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(body));\n    });\n\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"Errors\", printableErrors);\n\n    for (var i = 0; i < printableErrors.length; i++) {\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(printableErrors[i]);\n    }\n\n    var needShowOverlayForErrors = typeof options.overlay === \"boolean\" ? options.overlay : options.overlay && options.overlay.errors;\n\n    if (needShowOverlayForErrors) {\n      var trustedTypesPolicyName = _typeof(options.overlay) === \"object\" && options.overlay.trustedTypesPolicyName;\n      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.show)(\"error\", _errors, trustedTypesPolicyName || null);\n    }\n  },\n\n  /**\r\n   * @param {Error} error\r\n   */\n  error: function error(_error) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(_error);\n  },\n  close: function close() {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(\"Disconnected!\");\n\n    if (options.overlay) {\n      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();\n    }\n\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"Close\");\n  }\n};\nvar socketURL = (0,_utils_createSocketURL_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(parsedResourceQuery);\n(0,_socket_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(socketURL, onSocketMessage, options.reconnect);\n\n//# sourceURL=webpack://mesto/./node_modules/webpack-dev-server/client/index.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay.js":
/*!***********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatProblem\": () => (/* binding */ formatProblem),\n/* harmony export */   \"hide\": () => (/* binding */ hide),\n/* harmony export */   \"show\": () => (/* binding */ show)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'ansi-html-community'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-entities */ \"./node_modules/html-entities/lib/index.js\");\n/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_entities__WEBPACK_IMPORTED_MODULE_1__);\n// The error overlay is inspired (and mostly copied) from Create React App (https://github.com/facebookincubator/create-react-app)\n// They, in turn, got inspired by webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware).\n\n\nvar colors = {\n  reset: [\"transparent\", \"transparent\"],\n  black: \"181818\",\n  red: \"E36049\",\n  green: \"B3CB74\",\n  yellow: \"FFD080\",\n  blue: \"7CAFC2\",\n  magenta: \"7FACCA\",\n  cyan: \"C3C2EF\",\n  lightgrey: \"EBE7E3\",\n  darkgrey: \"6D7891\"\n};\n/** @type {HTMLIFrameElement | null | undefined} */\n\nvar iframeContainerElement;\n/** @type {HTMLDivElement | null | undefined} */\n\nvar containerElement;\n/** @type {Array<(element: HTMLDivElement) => void>} */\n\nvar onLoadQueue = [];\n/** @type {TrustedTypePolicy | undefined} */\n\nvar overlayTrustedTypesPolicy;\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'ansi-html-community'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(colors);\n/**\r\n * @param {string | null} trustedTypesPolicyName\r\n */\n\nfunction createContainer(trustedTypesPolicyName) {\n  // Enable Trusted Types if they are available in the current browser.\n  if (window.trustedTypes) {\n    overlayTrustedTypesPolicy = window.trustedTypes.createPolicy(trustedTypesPolicyName || \"webpack-dev-server#overlay\", {\n      createHTML: function createHTML(value) {\n        return value;\n      }\n    });\n  }\n\n  iframeContainerElement = document.createElement(\"iframe\");\n  iframeContainerElement.id = \"webpack-dev-server-client-overlay\";\n  iframeContainerElement.src = \"about:blank\";\n  iframeContainerElement.style.position = \"fixed\";\n  iframeContainerElement.style.left = 0;\n  iframeContainerElement.style.top = 0;\n  iframeContainerElement.style.right = 0;\n  iframeContainerElement.style.bottom = 0;\n  iframeContainerElement.style.width = \"100vw\";\n  iframeContainerElement.style.height = \"100vh\";\n  iframeContainerElement.style.border = \"none\";\n  iframeContainerElement.style.zIndex = 9999999999;\n\n  iframeContainerElement.onload = function () {\n    containerElement =\n    /** @type {Document} */\n\n    /** @type {HTMLIFrameElement} */\n    iframeContainerElement.contentDocument.createElement(\"div\");\n    containerElement.id = \"webpack-dev-server-client-overlay-div\";\n    containerElement.style.position = \"fixed\";\n    containerElement.style.boxSizing = \"border-box\";\n    containerElement.style.left = 0;\n    containerElement.style.top = 0;\n    containerElement.style.right = 0;\n    containerElement.style.bottom = 0;\n    containerElement.style.width = \"100vw\";\n    containerElement.style.height = \"100vh\";\n    containerElement.style.backgroundColor = \"rgba(0, 0, 0, 0.85)\";\n    containerElement.style.color = \"#E8E8E8\";\n    containerElement.style.fontFamily = \"Menlo, Consolas, monospace\";\n    containerElement.style.fontSize = \"large\";\n    containerElement.style.padding = \"2rem\";\n    containerElement.style.lineHeight = \"1.2\";\n    containerElement.style.whiteSpace = \"pre-wrap\";\n    containerElement.style.overflow = \"auto\";\n    var headerElement = document.createElement(\"span\");\n    headerElement.innerText = \"Compiled with problems:\";\n    var closeButtonElement = document.createElement(\"button\");\n    closeButtonElement.innerText = \"X\";\n    closeButtonElement.style.background = \"transparent\";\n    closeButtonElement.style.border = \"none\";\n    closeButtonElement.style.fontSize = \"20px\";\n    closeButtonElement.style.fontWeight = \"bold\";\n    closeButtonElement.style.color = \"white\";\n    closeButtonElement.style.cursor = \"pointer\";\n    closeButtonElement.style.cssFloat = \"right\"; // @ts-ignore\n\n    closeButtonElement.style.styleFloat = \"right\";\n    closeButtonElement.addEventListener(\"click\", function () {\n      hide();\n    });\n    containerElement.appendChild(headerElement);\n    containerElement.appendChild(closeButtonElement);\n    containerElement.appendChild(document.createElement(\"br\"));\n    containerElement.appendChild(document.createElement(\"br\"));\n    /** @type {Document} */\n\n    /** @type {HTMLIFrameElement} */\n\n    iframeContainerElement.contentDocument.body.appendChild(containerElement);\n    onLoadQueue.forEach(function (onLoad) {\n      onLoad(\n      /** @type {HTMLDivElement} */\n      containerElement);\n    });\n    onLoadQueue = [];\n    /** @type {HTMLIFrameElement} */\n\n    iframeContainerElement.onload = null;\n  };\n\n  document.body.appendChild(iframeContainerElement);\n}\n/**\r\n * @param {(element: HTMLDivElement) => void} callback\r\n * @param {string | null} trustedTypesPolicyName\r\n */\n\n\nfunction ensureOverlayExists(callback, trustedTypesPolicyName) {\n  if (containerElement) {\n    // Everything is ready, call the callback right away.\n    callback(containerElement);\n    return;\n  }\n\n  onLoadQueue.push(callback);\n\n  if (iframeContainerElement) {\n    return;\n  }\n\n  createContainer(trustedTypesPolicyName);\n} // Successful compilation.\n\n\nfunction hide() {\n  if (!iframeContainerElement) {\n    return;\n  } // Clean up and reset internal state.\n\n\n  document.body.removeChild(iframeContainerElement);\n  iframeContainerElement = null;\n  containerElement = null;\n}\n/**\r\n * @param {string} type\r\n * @param {string  | { file?: string, moduleName?: string, loc?: string, message?: string }} item\r\n * @returns {{ header: string, body: string }}\r\n */\n\n\nfunction formatProblem(type, item) {\n  var header = type === \"warning\" ? \"WARNING\" : \"ERROR\";\n  var body = \"\";\n\n  if (typeof item === \"string\") {\n    body += item;\n  } else {\n    var file = item.file || \"\"; // eslint-disable-next-line no-nested-ternary\n\n    var moduleName = item.moduleName ? item.moduleName.indexOf(\"!\") !== -1 ? \"\".concat(item.moduleName.replace(/^(\\s|\\S)*!/, \"\"), \" (\").concat(item.moduleName, \")\") : \"\".concat(item.moduleName) : \"\";\n    var loc = item.loc;\n    header += \"\".concat(moduleName || file ? \" in \".concat(moduleName ? \"\".concat(moduleName).concat(file ? \" (\".concat(file, \")\") : \"\") : file).concat(loc ? \" \".concat(loc) : \"\") : \"\");\n    body += item.message || \"\";\n  }\n\n  return {\n    header: header,\n    body: body\n  };\n} // Compilation with errors (e.g. syntax error or missing modules).\n\n/**\r\n * @param {string} type\r\n * @param {Array<string  | { file?: string, moduleName?: string, loc?: string, message?: string }>} messages\r\n * @param {string | null} trustedTypesPolicyName\r\n */\n\n\nfunction show(type, messages, trustedTypesPolicyName) {\n  ensureOverlayExists(function () {\n    messages.forEach(function (message) {\n      var entryElement = document.createElement(\"div\");\n      var typeElement = document.createElement(\"span\");\n\n      var _formatProblem = formatProblem(type, message),\n          header = _formatProblem.header,\n          body = _formatProblem.body;\n\n      typeElement.innerText = header;\n      typeElement.style.color = \"#\".concat(colors.red); // Make it look similar to our terminal.\n\n      var text = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'ansi-html-community'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())((0,html_entities__WEBPACK_IMPORTED_MODULE_1__.encode)(body));\n      var messageTextNode = document.createElement(\"div\");\n      messageTextNode.innerHTML = overlayTrustedTypesPolicy ? overlayTrustedTypesPolicy.createHTML(text) : text;\n      entryElement.appendChild(typeElement);\n      entryElement.appendChild(document.createElement(\"br\"));\n      entryElement.appendChild(document.createElement(\"br\"));\n      entryElement.appendChild(messageTextNode);\n      entryElement.appendChild(document.createElement(\"br\"));\n      entryElement.appendChild(document.createElement(\"br\"));\n      /** @type {HTMLDivElement} */\n\n      containerElement.appendChild(entryElement);\n    });\n  }, trustedTypesPolicyName);\n}\n\n\n\n//# sourceURL=webpack://mesto/./node_modules/webpack-dev-server/client/overlay.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/reloadApp.js":
/*!*******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/reloadApp.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/emitter.js */ \"./node_modules/webpack/hot/emitter.js\");\n/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log.js */ \"./node_modules/webpack-dev-server/client/utils/log.js\");\n\n\n/** @typedef {import(\"../index\").Options} Options\r\n/** @typedef {import(\"../index\").Status} Status\r\n\r\n/**\r\n * @param {Options} options\r\n * @param {Status} status\r\n */\n\nfunction reloadApp(_ref, status) {\n  var hot = _ref.hot,\n      liveReload = _ref.liveReload;\n\n  if (status.isUnloading) {\n    return;\n  }\n\n  var currentHash = status.currentHash,\n      previousHash = status.previousHash;\n  var isInitial = currentHash.indexOf(\n  /** @type {string} */\n  previousHash) >= 0;\n\n  if (isInitial) {\n    return;\n  }\n  /**\r\n   * @param {Window} rootWindow\r\n   * @param {number} intervalId\r\n   */\n\n\n  function applyReload(rootWindow, intervalId) {\n    clearInterval(intervalId);\n    _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info(\"App updated. Reloading...\");\n    rootWindow.location.reload();\n  }\n\n  var search = self.location.search.toLowerCase();\n  var allowToHot = search.indexOf(\"webpack-dev-server-hot=false\") === -1;\n  var allowToLiveReload = search.indexOf(\"webpack-dev-server-live-reload=false\") === -1;\n\n  if (hot && allowToHot) {\n    _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info(\"App hot update...\");\n    webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default().emit(\"webpackHotUpdate\", status.currentHash);\n\n    if (typeof self !== \"undefined\" && self.window) {\n      // broadcast update to window\n      self.postMessage(\"webpackHotUpdate\".concat(status.currentHash), \"*\");\n    }\n  } // allow refreshing the page only if liveReload isn't disabled\n  else if (liveReload && allowToLiveReload) {\n    var rootWindow = self; // use parent window for reload (in case we're in an iframe with no valid src)\n\n    var intervalId = self.setInterval(function () {\n      if (rootWindow.location.protocol !== \"about:\") {\n        // reload immediately if protocol is valid\n        applyReload(rootWindow, intervalId);\n      } else {\n        rootWindow = rootWindow.parent;\n\n        if (rootWindow.parent === rootWindow) {\n          // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways\n          applyReload(rootWindow, intervalId);\n        }\n      }\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reloadApp);\n\n//# sourceURL=webpack://mesto/./node_modules/webpack-dev-server/client/utils/reloadApp.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("22a6ad5784ff30816f15")
/******/ })();
/******/ 
/******/ }
);