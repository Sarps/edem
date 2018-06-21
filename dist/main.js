/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/api-ai-javascript/es6/ApiAiClient.js":
/*!***********************************************************!*\
  !*** ./node_modules/api-ai-javascript/es6/ApiAiClient.js ***!
  \***********************************************************/
/*! exports provided: ApiAiConstants, ApiAiClient, IStreamClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiAiClient\", function() { return ApiAiClient; });\n/* harmony import */ var _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiAiConstants */ \"./node_modules/api-ai-javascript/es6/ApiAiConstants.js\");\n/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Errors */ \"./node_modules/api-ai-javascript/es6/Errors.js\");\n/* harmony import */ var _Request_EventRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Request/EventRequest */ \"./node_modules/api-ai-javascript/es6/Request/EventRequest.js\");\n/* harmony import */ var _Request_TextRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Request/TextRequest */ \"./node_modules/api-ai-javascript/es6/Request/TextRequest.js\");\n/* harmony import */ var _Interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Interfaces */ \"./node_modules/api-ai-javascript/es6/Interfaces.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"IStreamClient\", function() { return _Interfaces__WEBPACK_IMPORTED_MODULE_4__[\"IStreamClient\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ApiAiConstants\", function() { return _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__[\"ApiAiConstants\"]; });\n\n\n\n\n\n\n\nclass ApiAiClient {\n    constructor(options) {\n        if (!options || !options.accessToken) {\n            throw new _Errors__WEBPACK_IMPORTED_MODULE_1__[\"ApiAiClientConfigurationError\"](\"Access token is required for new ApiAi.Client instance\");\n        }\n        this.accessToken = options.accessToken;\n        this.apiLang = options.lang || _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__[\"ApiAiConstants\"].DEFAULT_CLIENT_LANG;\n        this.apiVersion = options.version || _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__[\"ApiAiConstants\"].DEFAULT_API_VERSION;\n        this.apiBaseUrl = options.baseUrl || _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__[\"ApiAiConstants\"].DEFAULT_BASE_URL;\n        this.sessionId = options.sessionId || this.guid();\n    }\n    textRequest(query, options = {}) {\n        if (!query) {\n            throw new _Errors__WEBPACK_IMPORTED_MODULE_1__[\"ApiAiClientConfigurationError\"](\"Query should not be empty\");\n        }\n        options.query = query;\n        return new _Request_TextRequest__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this, options).perform();\n    }\n    eventRequest(eventName, eventData = {}, options = {}) {\n        if (!eventName) {\n            throw new _Errors__WEBPACK_IMPORTED_MODULE_1__[\"ApiAiClientConfigurationError\"](\"Event name can not be empty\");\n        }\n        options.event = { name: eventName, data: eventData };\n        return new _Request_EventRequest__WEBPACK_IMPORTED_MODULE_2__[\"EventRequest\"](this, options).perform();\n    }\n    // @todo: implement local tts request\n    /*public ttsRequest(query) {\n        if (!query) {\n            throw new ApiAiClientConfigurationError(\"Query should not be empty\");\n        }\n        return new TTSRequest(this).makeTTSRequest(query);\n    }*/\n    /*public userEntitiesRequest(options: IRequestOptions = {}): UserEntitiesRequest {\n        return new UserEntitiesRequest(this, options);\n    }*/\n    getAccessToken() {\n        return this.accessToken;\n    }\n    getApiVersion() {\n        return (this.apiVersion) ? this.apiVersion : _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__[\"ApiAiConstants\"].DEFAULT_API_VERSION;\n    }\n    getApiLang() {\n        return (this.apiLang) ? this.apiLang : _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__[\"ApiAiConstants\"].DEFAULT_CLIENT_LANG;\n    }\n    getApiBaseUrl() {\n        return (this.apiBaseUrl) ? this.apiBaseUrl : _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__[\"ApiAiConstants\"].DEFAULT_BASE_URL;\n    }\n    setSessionId(sessionId) {\n        this.sessionId = sessionId;\n    }\n    getSessionId() {\n        return this.sessionId;\n    }\n    /**\n     * generates new random UUID\n     * @returns {string}\n     */\n    guid() {\n        const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);\n        return s4() + s4() + \"-\" + s4() + \"-\" + s4() + \"-\" +\n            s4() + \"-\" + s4() + s4() + s4();\n    }\n}\n\n\n//# sourceURL=webpack:///./node_modules/api-ai-javascript/es6/ApiAiClient.js?");

/***/ }),

/***/ "./node_modules/api-ai-javascript/es6/ApiAiConstants.js":
/*!**************************************************************!*\
  !*** ./node_modules/api-ai-javascript/es6/ApiAiConstants.js ***!
  \**************************************************************/
/*! exports provided: ApiAiConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiAiConstants\", function() { return ApiAiConstants; });\nvar ApiAiConstants;\n(function (ApiAiConstants) {\n    let AVAILABLE_LANGUAGES;\n    (function (AVAILABLE_LANGUAGES) {\n        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES[\"EN\"] = \"en\"] = \"EN\";\n        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES[\"DE\"] = \"de\"] = \"DE\";\n        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES[\"ES\"] = \"es\"] = \"ES\";\n        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES[\"PT_BR\"] = \"pt-BR\"] = \"PT_BR\";\n        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES[\"ZH_HK\"] = \"zh-HK\"] = \"ZH_HK\";\n        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES[\"ZH_CN\"] = \"zh-CN\"] = \"ZH_CN\";\n        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES[\"ZH_TW\"] = \"zh-TW\"] = \"ZH_TW\";\n        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES[\"NL\"] = \"nl\"] = \"NL\";\n        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES[\"FR\"] = \"fr\"] = \"FR\";\n        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES[\"IT\"] = \"it\"] = \"IT\";\n        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES[\"JA\"] = \"ja\"] = \"JA\";\n        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES[\"KO\"] = \"ko\"] = \"KO\";\n        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES[\"PT\"] = \"pt\"] = \"PT\";\n        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES[\"RU\"] = \"ru\"] = \"RU\";\n        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES[\"UK\"] = \"uk\"] = \"UK\";\n    })(AVAILABLE_LANGUAGES = ApiAiConstants.AVAILABLE_LANGUAGES || (ApiAiConstants.AVAILABLE_LANGUAGES = {}));\n    ApiAiConstants.VERSION = \"2.0.0-beta.20\";\n    ApiAiConstants.DEFAULT_BASE_URL = \"https://api.api.ai/v1/\";\n    ApiAiConstants.DEFAULT_API_VERSION = \"20150910\";\n    ApiAiConstants.DEFAULT_CLIENT_LANG = AVAILABLE_LANGUAGES.EN;\n})(ApiAiConstants || (ApiAiConstants = {}));\n\n\n//# sourceURL=webpack:///./node_modules/api-ai-javascript/es6/ApiAiConstants.js?");

/***/ }),

/***/ "./node_modules/api-ai-javascript/es6/Errors.js":
/*!******************************************************!*\
  !*** ./node_modules/api-ai-javascript/es6/Errors.js ***!
  \******************************************************/
/*! exports provided: ApiAiBaseError, ApiAiClientConfigurationError, ApiAiRequestError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiAiBaseError\", function() { return ApiAiBaseError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiAiClientConfigurationError\", function() { return ApiAiClientConfigurationError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ApiAiRequestError\", function() { return ApiAiRequestError; });\nclass ApiAiBaseError extends Error {\n    constructor(message) {\n        super(message);\n        this.message = message;\n        this.stack = new Error().stack;\n    }\n}\nclass ApiAiClientConfigurationError extends ApiAiBaseError {\n    constructor(message) {\n        super(message);\n        this.name = \"ApiAiClientConfigurationError\";\n    }\n}\nclass ApiAiRequestError extends ApiAiBaseError {\n    constructor(message, code = null) {\n        super(message);\n        this.message = message;\n        this.code = code;\n        this.name = \"ApiAiRequestError\";\n    }\n}\n\n\n//# sourceURL=webpack:///./node_modules/api-ai-javascript/es6/Errors.js?");

/***/ }),

/***/ "./node_modules/api-ai-javascript/es6/Interfaces.js":
/*!**********************************************************!*\
  !*** ./node_modules/api-ai-javascript/es6/Interfaces.js ***!
  \**********************************************************/
/*! exports provided: IStreamClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IStreamClient\", function() { return IStreamClient; });\nvar IStreamClient;\n(function (IStreamClient) {\n    let ERROR;\n    (function (ERROR) {\n        ERROR[ERROR[\"ERR_NETWORK\"] = 0] = \"ERR_NETWORK\";\n        ERROR[ERROR[\"ERR_AUDIO\"] = 1] = \"ERR_AUDIO\";\n        ERROR[ERROR[\"ERR_SERVER\"] = 2] = \"ERR_SERVER\";\n        ERROR[ERROR[\"ERR_CLIENT\"] = 3] = \"ERR_CLIENT\";\n    })(ERROR = IStreamClient.ERROR || (IStreamClient.ERROR = {}));\n    let EVENT;\n    (function (EVENT) {\n        EVENT[EVENT[\"MSG_WAITING_MICROPHONE\"] = 0] = \"MSG_WAITING_MICROPHONE\";\n        EVENT[EVENT[\"MSG_MEDIA_STREAM_CREATED\"] = 1] = \"MSG_MEDIA_STREAM_CREATED\";\n        EVENT[EVENT[\"MSG_INIT_RECORDER\"] = 2] = \"MSG_INIT_RECORDER\";\n        EVENT[EVENT[\"MSG_RECORDING\"] = 3] = \"MSG_RECORDING\";\n        EVENT[EVENT[\"MSG_SEND\"] = 4] = \"MSG_SEND\";\n        EVENT[EVENT[\"MSG_SEND_EMPTY\"] = 5] = \"MSG_SEND_EMPTY\";\n        EVENT[EVENT[\"MSG_SEND_EOS_OR_JSON\"] = 6] = \"MSG_SEND_EOS_OR_JSON\";\n        EVENT[EVENT[\"MSG_WEB_SOCKET\"] = 7] = \"MSG_WEB_SOCKET\";\n        EVENT[EVENT[\"MSG_WEB_SOCKET_OPEN\"] = 8] = \"MSG_WEB_SOCKET_OPEN\";\n        EVENT[EVENT[\"MSG_WEB_SOCKET_CLOSE\"] = 9] = \"MSG_WEB_SOCKET_CLOSE\";\n        EVENT[EVENT[\"MSG_STOP\"] = 10] = \"MSG_STOP\";\n        EVENT[EVENT[\"MSG_CONFIG_CHANGED\"] = 11] = \"MSG_CONFIG_CHANGED\";\n    })(EVENT = IStreamClient.EVENT || (IStreamClient.EVENT = {}));\n})(IStreamClient || (IStreamClient = {}));\n\n\n//# sourceURL=webpack:///./node_modules/api-ai-javascript/es6/Interfaces.js?");

/***/ }),

/***/ "./node_modules/api-ai-javascript/es6/Request/EventRequest.js":
/*!********************************************************************!*\
  !*** ./node_modules/api-ai-javascript/es6/Request/EventRequest.js ***!
  \********************************************************************/
/*! exports provided: EventRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventRequest\", function() { return EventRequest; });\n/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Request */ \"./node_modules/api-ai-javascript/es6/Request/Request.js\");\n\nclass EventRequest extends _Request__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n}\n\n\n//# sourceURL=webpack:///./node_modules/api-ai-javascript/es6/Request/EventRequest.js?");

/***/ }),

/***/ "./node_modules/api-ai-javascript/es6/Request/Request.js":
/*!***************************************************************!*\
  !*** ./node_modules/api-ai-javascript/es6/Request/Request.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Errors */ \"./node_modules/api-ai-javascript/es6/Errors.js\");\n/* harmony import */ var _XhrRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../XhrRequest */ \"./node_modules/api-ai-javascript/es6/XhrRequest.js\");\n\n\nclass Request {\n    constructor(apiAiClient, options) {\n        this.apiAiClient = apiAiClient;\n        this.options = options;\n        this.uri = this.apiAiClient.getApiBaseUrl() + \"query?v=\" + this.apiAiClient.getApiVersion();\n        this.requestMethod = _XhrRequest__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Method.POST;\n        this.headers = {\n            Authorization: \"Bearer \" + this.apiAiClient.getAccessToken(),\n        };\n        this.options.lang = this.apiAiClient.getApiLang();\n        this.options.sessionId = this.apiAiClient.getSessionId();\n    }\n    static handleSuccess(xhr) {\n        return Promise.resolve(JSON.parse(xhr.responseText));\n    }\n    static handleError(xhr) {\n        let error = new _Errors__WEBPACK_IMPORTED_MODULE_0__[\"ApiAiRequestError\"](null);\n        try {\n            const serverResponse = JSON.parse(xhr.responseText);\n            if (serverResponse.status && serverResponse.status.errorDetails) {\n                error = new _Errors__WEBPACK_IMPORTED_MODULE_0__[\"ApiAiRequestError\"](serverResponse.status.errorDetails, serverResponse.status.code);\n            }\n            else {\n                error = new _Errors__WEBPACK_IMPORTED_MODULE_0__[\"ApiAiRequestError\"](xhr.statusText, xhr.status);\n            }\n        }\n        catch (e) {\n            error = new _Errors__WEBPACK_IMPORTED_MODULE_0__[\"ApiAiRequestError\"](xhr.statusText, xhr.status);\n        }\n        return Promise.reject(error);\n    }\n    perform(overrideOptions = null) {\n        const options = overrideOptions ? overrideOptions : this.options;\n        return _XhrRequest__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ajax(this.requestMethod, this.uri, options, this.headers)\n            .then(Request.handleSuccess.bind(this))\n            .catch(Request.handleError.bind(this));\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Request);\n\n\n//# sourceURL=webpack:///./node_modules/api-ai-javascript/es6/Request/Request.js?");

/***/ }),

/***/ "./node_modules/api-ai-javascript/es6/Request/TextRequest.js":
/*!*******************************************************************!*\
  !*** ./node_modules/api-ai-javascript/es6/Request/TextRequest.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TextRequest; });\n/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Request */ \"./node_modules/api-ai-javascript/es6/Request/Request.js\");\n\nclass TextRequest extends _Request__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n}\n\n\n//# sourceURL=webpack:///./node_modules/api-ai-javascript/es6/Request/TextRequest.js?");

/***/ }),

/***/ "./node_modules/api-ai-javascript/es6/XhrRequest.js":
/*!**********************************************************!*\
  !*** ./node_modules/api-ai-javascript/es6/XhrRequest.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * quick ts implementation of example from\n * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise\n * with some minor improvements\n * @todo: test (?)\n * @todo: add node.js implementation with node's http inside. Just to make SDK cross-platform\n */\nclass XhrRequest {\n    // Method that performs the ajax request\n    static ajax(method, url, args = null, headers = null, options = {}) {\n        // Creating a promise\n        return new Promise((resolve, reject) => {\n            // Instantiates the XMLHttpRequest\n            const client = XhrRequest.createXMLHTTPObject();\n            let uri = url;\n            let payload = null;\n            // Add given payload to get request\n            if (args && (method === XhrRequest.Method.GET)) {\n                uri += \"?\";\n                let argcount = 0;\n                for (const key in args) {\n                    if (args.hasOwnProperty(key)) {\n                        if (argcount++) {\n                            uri += \"&\";\n                        }\n                        uri += encodeURIComponent(key) + \"=\" + encodeURIComponent(args[key]);\n                    }\n                }\n            }\n            else if (args) {\n                if (!headers) {\n                    headers = {};\n                }\n                headers[\"Content-Type\"] = \"application/json; charset=utf-8\";\n                payload = JSON.stringify(args);\n            }\n            for (const key in options) {\n                if (key in client) {\n                    client[key] = options[key];\n                }\n            }\n            // hack: method[method] is somewhat like .toString for enum Method\n            // should be made in normal way\n            client.open(XhrRequest.Method[method], uri, true);\n            // Add given headers\n            if (headers) {\n                for (const key in headers) {\n                    if (headers.hasOwnProperty(key)) {\n                        client.setRequestHeader(key, headers[key]);\n                    }\n                }\n            }\n            payload ? client.send(payload) : client.send();\n            client.onload = () => {\n                if (client.status >= 200 && client.status < 300) {\n                    // Performs the function \"resolve\" when this.status is equal to 2xx\n                    resolve(client);\n                }\n                else {\n                    // Performs the function \"reject\" when this.status is different than 2xx\n                    reject(client);\n                }\n            };\n            client.onerror = () => {\n                reject(client);\n            };\n        });\n    }\n    static get(url, payload = null, headers = null, options = {}) {\n        return XhrRequest.ajax(XhrRequest.Method.GET, url, payload, headers, options);\n    }\n    static post(url, payload = null, headers = null, options = {}) {\n        return XhrRequest.ajax(XhrRequest.Method.POST, url, payload, headers, options);\n    }\n    static put(url, payload = null, headers = null, options = {}) {\n        return XhrRequest.ajax(XhrRequest.Method.PUT, url, payload, headers, options);\n    }\n    static delete(url, payload = null, headers = null, options = {}) {\n        return XhrRequest.ajax(XhrRequest.Method.DELETE, url, payload, headers, options);\n    }\n    static createXMLHTTPObject() {\n        let xmlhttp = null;\n        for (const i of XhrRequest.XMLHttpFactories) {\n            try {\n                xmlhttp = i();\n            }\n            catch (e) {\n                continue;\n            }\n            break;\n        }\n        return xmlhttp;\n    }\n}\nXhrRequest.XMLHttpFactories = [\n    () => new XMLHttpRequest(),\n    () => new window[\"ActiveXObject\"](\"Msxml2.XMLHTTP\"),\n    () => new window[\"ActiveXObject\"](\"Msxml3.XMLHTTP\"),\n    () => new window[\"ActiveXObject\"](\"Microsoft.XMLHTTP\")\n];\n(function (XhrRequest) {\n    let Method;\n    (function (Method) {\n        Method[Method[\"GET\"] = \"GET\"] = \"GET\";\n        Method[Method[\"POST\"] = \"POST\"] = \"POST\";\n        Method[Method[\"PUT\"] = \"PUT\"] = \"PUT\";\n        Method[Method[\"DELETE\"] = \"DELETE\"] = \"DELETE\";\n    })(Method = XhrRequest.Method || (XhrRequest.Method = {}));\n})(XhrRequest || (XhrRequest = {}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (XhrRequest);\n\n\n//# sourceURL=webpack:///./node_modules/api-ai-javascript/es6/XhrRequest.js?");

/***/ }),

/***/ "./node_modules/api-ai-javascript/index.js":
/*!*************************************************!*\
  !*** ./node_modules/api-ai-javascript/index.js ***!
  \*************************************************/
/*! exports provided: ApiAiConstants, ApiAiClient, IStreamClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _es6_ApiAiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./es6/ApiAiClient */ \"./node_modules/api-ai-javascript/es6/ApiAiClient.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ApiAiConstants\", function() { return _es6_ApiAiClient__WEBPACK_IMPORTED_MODULE_0__[\"ApiAiConstants\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ApiAiClient\", function() { return _es6_ApiAiClient__WEBPACK_IMPORTED_MODULE_0__[\"ApiAiClient\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"IStreamClient\", function() { return _es6_ApiAiClient__WEBPACK_IMPORTED_MODULE_0__[\"IStreamClient\"]; });\n\n\n\n\n//# sourceURL=webpack:///./node_modules/api-ai-javascript/index.js?");

/***/ }),

/***/ "./src/js/apiai.js":
/*!*************************!*\
  !*** ./src/js/apiai.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var api_ai_javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api-ai-javascript */ \"./node_modules/api-ai-javascript/index.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n\r\n\tsendText: function(someText, cb, err) {\r\n\t\tclient.textRequest(someText)\r\n\t\t.then(cb).catch(err)\r\n\t},\r\n\r\n\tsendVoice: function() {\r\n\t\t\r\n\t}\r\n\t\r\n});\r\n\r\nconst client = new api_ai_javascript__WEBPACK_IMPORTED_MODULE_0__[\"ApiAiClient\"]({accessToken: 'dc8201bab1964115a84260bd03270e1c'});\n\n//# sourceURL=webpack:///./src/js/apiai.js?");

/***/ }),

/***/ "./src/js/content.js":
/*!***************************!*\
  !*** ./src/js/content.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nmodule.exports = {\r\n\r\n\tmaximize: function() {\r\n\t  document.getElementById(\"edem-bot\").classList.toggle('minimized');\r\n\t},\r\n\r\n\tspeak: function(someMsg) {\r\n\t\tmsg.text = someMsg;\r\n\t\twindow.speechSynthesis.speak(msg);\r\n\t}\r\n}\r\n\t\r\nvar msg = new SpeechSynthesisUtterance('Hello');\r\nmsg.rate = 1.4;\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/content.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.js */ \"./src/js/content.js\");\n/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_content_js__WEBPACK_IMPORTED_MODULE_0__);\nwindow.send = __webpack_require__(/*! ./apiai.js */ \"./src/js/apiai.js\").default;\r\n\r\n\r\nwindow.maximize = _content_js__WEBPACK_IMPORTED_MODULE_0__[\"maximize\"];\r\nwindow.chatbox = document.querySelector(\".body\");\r\n\r\nwindow.sendMessage = function(e) {\r\n\te.preventDefault && e.preventDefault();\r\n\tvar msg = e.target.message.value;\r\n\te.target.message.value = \"\";\r\n\taddPersonalMessage(msg, Date.now())\r\n\tsend.sendText(msg,\r\n\t\tfunction(response) {\r\n\t\t\tvar speech = response.result.fulfillment.speech;\r\n\t\t\tObject(_content_js__WEBPACK_IMPORTED_MODULE_0__[\"speak\"])(speech);\r\n\t\t\taddBotMessage(speech, response.timestamp);\r\n\t\t\tconsole.log(response);\r\n\t\t},\r\n\t\tfunction (err) {\r\n\t\t\tconsole.log(\"Error\", err)\r\n\t\t}\r\n\t)\r\n}\r\n\r\nfunction addPersonalMessage(msg, time) {\r\n\ttime = \"\";\r\n\tchatbox.innerHTML += \r\n\t\t'<div class=\"message message-personal\">'\r\n\t\t\t+ msg +\r\n\t\t\t'<div class=\"timestamp\">'+time+'</div>\\\r\n\t\t</div>';\r\n\tchatbox.scrollTop = chatbox.scrollHeight;\r\n}\r\n\r\nfunction addBotMessage(msg, time) {\r\n\ttime = \"\";\r\n\tchatbox.innerHTML += \r\n\t\t'<div class=\"message\">'\r\n\t\t\t+ msg +\r\n\t\t\t'<div class=\"timestamp\">'+time+'</div>\\\r\n\t\t</div>';\r\n\tchatbox.scrollTop = chatbox.scrollHeight;\r\n}\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });