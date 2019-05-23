(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Details"],{

/***/ "./node_modules/@redhat-cloud-services/frontend-components-remediations/RemediationButton.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components-remediations/RemediationButton.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"));
	else {}
})(window, function(__WEBPACK_EXTERNAL_MODULE__patternfly_react_core__, __WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/RemediationButton.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!*********************************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!**************************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/createClass.js":
/*!***********************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/createClass.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!**************************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!**************************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/inherits.js":
/*!********************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/inherits.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*********************************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!**********************************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!**************************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/typeof.js":
/*!******************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/typeof.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/RemediationButton.js":
/*!**********************************!*\
  !*** ./src/RemediationButton.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var ReactCore = _interopRequireWildcard(__webpack_require__(/*! @patternfly/react-core */ "@patternfly/react-core"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function getLoader() {
  return insights.experimental && insights.experimental.loadRemediations || insights.loadRemediations;
}

var RemediationButton =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(RemediationButton, _React$Component);

  function RemediationButton(props) {
    var _this;

    (0, _classCallCheck2.default)(this, RemediationButton);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RemediationButton).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onClick", function () {
      Promise.resolve(_this.props.dataProvider()).then(function (data) {
        return _this.state.remediations.openWizard(data);
      }).then(function (result) {
        return result && _this.props.onRemediationCreated(result);
      });
    });
    _this.props = props;
    _this.state = {
      remediations: false
    };
    return _this;
  }

  (0, _createClass2.default)(RemediationButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      getLoader()({
        react: _react.default,
        reactCore: ReactCore
      }).then(function (remediations) {
        return _this2.setState({
          remediations: remediations
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(ReactCore.Button, {
        isDisabled: this.props.isDisabled || this.state.remediations === false,
        onClick: this.onClick
      }, this.props.children), this.state.remediations.RemediationWizard && _react.default.createElement(this.state.remediations.RemediationWizard, null));
    }
  }]);
  return RemediationButton;
}(_react.default.Component);

RemediationButton.propTypes = {
  isDisabled: _propTypes.default.bool,
  dataProvider: _propTypes.default.func.isRequired,
  onRemediationCreated: _propTypes.default.func,
  children: _propTypes.default.node
};
RemediationButton.defaultProps = {
  isDisabled: false,
  onRemediationCreated: function onRemediationCreated(f) {
    return f;
  },
  children: 'Remediate with Ansible'
};
var _default = RemediationButton;
exports.default = _default;

/***/ }),

/***/ "@patternfly/react-core":
/*!***********************************************************************************************************************************************!*\
  !*** external {"commonjs":"@patternfly/react-core","commonjs2":"@patternfly/react-core","amd":"@patternfly/react-core","root":"PFReactCore"} ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__patternfly_react_core__;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});

/***/ }),

/***/ "./src/PresentationalComponents/Breadcrumbs/Breadcrumbs.js":
/*!*****************************************************************!*\
  !*** ./src/PresentationalComponents/Breadcrumbs/Breadcrumbs.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_files_RouterParams__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/files/RouterParams */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/files/RouterParams.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_files_RouterParams__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_utilities_files_RouterParams__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _AppActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../AppActions */ "./src/AppActions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _breadcrumbs_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_breadcrumbs.scss */ "./src/PresentationalComponents/Breadcrumbs/_breadcrumbs.scss");
/* harmony import */ var _breadcrumbs_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_breadcrumbs_scss__WEBPACK_IMPORTED_MODULE_15__);

















var Breadcrumbs =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Breadcrumbs, _React$Component);

  function Breadcrumbs() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Breadcrumbs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Breadcrumbs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "state", {
      items: [],
      ruleDescriptionLoaded: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "getReadableType", function (type) {
      return type.indexOf('-') > -1 ? "".concat(type.replace('-', ' '), " Overview") : type;
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Breadcrumbs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.match.params.inventoryId !== undefined) {
        this.props.fetchRule({
          rule_id: this.props.match.params.id
        }); // eslint-disable-line camelcase
      } else {
        this.buildBreadcrumbs();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.ruleFetchStatus === 'fulfilled' && !this.state.ruleDescriptionLoaded) {
        this.setState({
          ruleDescriptionLoaded: true
        });
        this.buildBreadcrumbs();
      }
    }
  }, {
    key: "buildBreadcrumbs",
    value: function buildBreadcrumbs() {
      var _this$props = this.props,
          breadcrumbs = _this$props.breadcrumbs,
          match = _this$props.match;
      var crumbs = []; // add overview/rules base breadcrumb

      if (match.params.type !== undefined) {
        if (breadcrumbs[0] !== undefined) {
          crumbs.push(breadcrumbs[0]);
        } else {
          var title = match.url.split('/')[1];
          crumbs.push({
            title: title,
            navigate: "/".concat(title)
          });
        }
      } // add :type breadcrumb (exception: Rules based breadcrumbs)


      if (match.params.type !== undefined && match.params.id !== undefined && crumbs[0].title !== 'Rules') {
        var _title = this.getReadableType(match.params.type);

        crumbs.push({
          title: _title,
          navigate: "".concat(crumbs[0].navigate, "/").concat(match.params.type)
        });
      } // add :id breadcrumb


      if (match.params.id !== undefined && match.params.inventoryId !== undefined) {
        var _title2 = this.props.rule.description;

        if (crumbs[1] !== undefined) {
          crumbs.push({
            title: _title2,
            navigate: "".concat(crumbs[1].navigate, "/").concat(match.params.id)
          });
        } else {
          // build breadcrumb from beginning if Rule-based
          crumbs.push({
            title: _title2,
            navigate: "/".concat(match.url.split('/')[1], "/").concat(match.params.type, "/").concat(match.params.id)
          });
        }
      }

      this.setState({
        items: crumbs
      });
    }
  }, {
    key: "render",
    value: function render() {
      var ruleFetchStatus = this.props.ruleFetchStatus;
      var items = this.state.items;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, (ruleFetchStatus === 'fulfilled' || items.length > 0) && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Breadcrumb"], null, items.map(function (oneLink, key) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbItem"], {
          key: key
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
          to: oneLink.navigate
        }, oneLink.title));
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbItem"], {
        isActive: true
      }, this.props.current)), ruleFetchStatus === 'pending' && 'Loading...');
    }
  }]);

  return Breadcrumbs;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

Breadcrumbs.propTypes = {
  breadcrumbs: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.arrayOf(Object),
  current: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.string,
  fetchRule: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.func,
  match: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.object,
  rule: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.object,
  ruleFetchStatus: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.string
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
    breadcrumbs: state.AdvisorStore.breadcrumbs,
    rule: state.AdvisorStore.rule,
    ruleFetchStatus: state.AdvisorStore.ruleFetchStatus
  }, state, ownProps);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchRule: function fetchRule(url) {
      return dispatch(_AppActions__WEBPACK_IMPORTED_MODULE_13__["fetchRule"](url));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (_redhat_cloud_services_frontend_components_utilities_files_RouterParams__WEBPACK_IMPORTED_MODULE_11___default()(Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapDispatchToProps)(Breadcrumbs)));

/***/ }),

/***/ "./src/PresentationalComponents/Breadcrumbs/_breadcrumbs.scss":
/*!********************************************************************!*\
  !*** ./src/PresentationalComponents/Breadcrumbs/_breadcrumbs.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/PresentationalComponents/Inventory/Inventory.js":
/*!*************************************************************!*\
  !*** ./src/PresentationalComponents/Inventory/Inventory.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_files_Registry__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/files/Registry */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/files/Registry.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_files_Registry__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_utilities_files_Registry__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../PresentationalComponents/Loading/Loading */ "./src/PresentationalComponents/Loading/Loading.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__);












var _dec, _class, _temp;









var Inventory = (_dec = _redhat_cloud_services_frontend_components_utilities_files_Registry__WEBPACK_IMPORTED_MODULE_16___default()(), _dec(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(Inventory, _React$Component);

  function Inventory() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Inventory);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Inventory)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this), "state", {
      Inventory: function Inventory() {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_17__["default"], null);
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this), "onRefresh", function (_ref) {
      var page = _ref.page,
          perPage = _ref.per_page;
      var items = _this.props.items;

      _this.setState({
        page: page,
        pageSize: perPage,
        items: _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(items.slice((page - 1) * perPage, page * perPage))
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Inventory, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.fetchInventory();
    }
  }, {
    key: "fetchInventory",
    value: function () {
      var _fetchInventory = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var items, _ref2, inventoryConnector, mergeWithEntities;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                items = this.props.items;
                _context.next = 3;
                return insights.loadInventory({
                  react: react__WEBPACK_IMPORTED_MODULE_11___default.a,
                  reactRouterDom: react_router_dom__WEBPACK_IMPORTED_MODULE_12__,
                  reactCore: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__,
                  reactIcons: _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_14__,
                  pfReactTable: _patternfly_react_table__WEBPACK_IMPORTED_MODULE_15__
                });

              case 3:
                _ref2 = _context.sent;
                inventoryConnector = _ref2.inventoryConnector;
                mergeWithEntities = _ref2.mergeWithEntities;
                this.getRegistry().register(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, mergeWithEntities()));
                this.setState({
                  Inventory: inventoryConnector().InventoryTable,
                  items: _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(items.slice(0, 50)),
                  page: 1,
                  total: items.length,
                  pageSize: 50
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchInventory() {
        return _fetchInventory.apply(this, arguments);
      }

      return fetchInventory;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          Inventory = _this$state.Inventory,
          items = _this$state.items,
          page = _this$state.page,
          total = _this$state.total,
          pageSize = _this$state.pageSize;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Inventory, {
        items: items,
        onRefresh: this.onRefresh,
        page: page,
        total: total,
        perPage: pageSize
      }, this.props.children);
    }
  }]);

  return Inventory;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component), _temp)) || _class);
Inventory.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.array,
  children: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (Inventory);

/***/ }),

/***/ "./src/SmartComponents/Overview/Details.js":
/*!*************************************************!*\
  !*** ./src/SmartComponents/Overview/Details.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_files_RouterParams__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/files/RouterParams */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/files/RouterParams.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_files_RouterParams__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_utilities_files_RouterParams__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redhat_cloud_services_frontend_components_remediations_RemediationButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-remediations/RemediationButton */ "./node_modules/@redhat-cloud-services/frontend-components-remediations/RemediationButton.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_remediations_RemediationButton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_remediations_RemediationButton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components */ "./node_modules/@redhat-cloud-services/frontend-components/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _PresentationalComponents_Breadcrumbs_Breadcrumbs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../PresentationalComponents/Breadcrumbs/Breadcrumbs */ "./src/PresentationalComponents/Breadcrumbs/Breadcrumbs.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_notifications__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _AppActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../AppActions */ "./src/AppActions.js");
/* harmony import */ var _PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../PresentationalComponents/Loading/Loading */ "./src/PresentationalComponents/Loading/Loading.js");
/* harmony import */ var _PresentationalComponents_Loading_Failed__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../PresentationalComponents/Loading/Failed */ "./src/PresentationalComponents/Loading/Failed.js");
/* harmony import */ var _PresentationalComponents_Inventory_Inventory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../PresentationalComponents/Inventory/Inventory */ "./src/PresentationalComponents/Inventory/Inventory.js");
/* harmony import */ var _PresentationalComponents_RuleDetails_RuleDetails__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../PresentationalComponents/RuleDetails/RuleDetails */ "./src/PresentationalComponents/RuleDetails/RuleDetails.js");
/* harmony import */ var _Details_scss__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Details.scss */ "./src/SmartComponents/Overview/Details.scss");
/* harmony import */ var _Details_scss__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_Details_scss__WEBPACK_IMPORTED_MODULE_24__);











/* eslint camelcase: 0 */
















var OverviewDetails =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(OverviewDetails, _Component);

  function OverviewDetails() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, OverviewDetails);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(OverviewDetails)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "state", {
      kbaDetails: {},
      kbaDetailsLoading: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "getSelectedItems", function () {
      if (!_this.props.entities || !_this.props.entities.loaded) {
        return [];
      }

      return _this.props.entities.rows.filter(function (entity) {
        return entity.selected;
      }).map(function (entity) {
        return entity.id;
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "remediationDataProvider", function () {
      return {
        issues: [{
          id: "advisor:".concat(_this.props.rule.rule_id),
          description: _this.props.rule.description
        }],
        systems: _this.getSelectedItems()
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "onRemediationCreated", function (result) {
      _this.props.addNotification(result.getNotification());
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(OverviewDetails, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return insights.chrome.auth.getUser();

              case 2:
                this.props.fetchRule({
                  rule_id: this.props.match.params.id
                });
                this.props.fetchSystem({
                  rule_id: this.props.match.params.id
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          match = _this$props.match,
          ruleFetchStatus = _this$props.ruleFetchStatus,
          rule = _this$props.rule,
          systemFetchStatus = _this$props.systemFetchStatus,
          system = _this$props.system;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, ruleFetchStatus === 'fulfilled' && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_13__["PageHeader"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_PresentationalComponents_Breadcrumbs_Breadcrumbs__WEBPACK_IMPORTED_MODULE_17__["default"], {
        current: rule.description || '',
        match: match
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_13__["PageHeaderTitle"], {
        title: rule.description || ''
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "Publish Date: ", "".concat(new Date(rule.publish_date).toLocaleDateString()))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_13__["Main"], {
        className: "pf-m-light pf-u-pt-sm"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_PresentationalComponents_RuleDetails_RuleDetails__WEBPACK_IMPORTED_MODULE_23__["default"], {
        rule: rule
      }))), ruleFetchStatus === 'pending' && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_20__["default"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_13__["Main"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, ruleFetchStatus === 'fulfilled' && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_16__["Title"], {
        headingLevel: "h3",
        size: "2xl",
        className: "titlePaddingOverride"
      }, " Affected systems"), systemFetchStatus === 'fulfilled' && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_PresentationalComponents_Inventory_Inventory__WEBPACK_IMPORTED_MODULE_22__["default"], {
        items: system.host_ids
      }, rule.playbook_count > 0 && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_redhat_cloud_services_frontend_components_remediations_RemediationButton__WEBPACK_IMPORTED_MODULE_12___default.a, {
        isDisabled: this.getSelectedItems().length === 0,
        dataProvider: this.remediationDataProvider,
        onRemediationCreated: this.onRemediationCreated
      })), systemFetchStatus === 'pending' && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_20__["default"], null)), ruleFetchStatus === 'pending' && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_20__["default"], null), ruleFetchStatus === 'failed' && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_PresentationalComponents_Loading_Failed__WEBPACK_IMPORTED_MODULE_21__["default"], {
        message: "There was an error fetching rules list."
      }))));
    }
  }]);

  return OverviewDetails;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

OverviewDetails.propTypes = {
  match: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.any,
  fetchRule: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.func,
  ruleFetchStatus: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.string,
  rule: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.object,
  fetchSystem: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.func,
  systemFetchStatus: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.string,
  system: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.object,
  entities: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.any,
  addNotification: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.func.isRequired
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
    rule: state.AdvisorStore.rule,
    ruleFetchStatus: state.AdvisorStore.ruleFetchStatus,
    system: state.AdvisorStore.system,
    systemFetchStatus: state.AdvisorStore.systemFetchStatus,
    entities: state.entities
  }, state, ownProps);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchRule: function fetchRule(url) {
      return dispatch(_AppActions__WEBPACK_IMPORTED_MODULE_19__["fetchRule"](url));
    },
    fetchSystem: function fetchSystem(url) {
      return dispatch(_AppActions__WEBPACK_IMPORTED_MODULE_19__["fetchSystem"](url));
    },
    addNotification: function addNotification(data) {
      return dispatch(Object(_redhat_cloud_services_frontend_components_notifications__WEBPACK_IMPORTED_MODULE_18__["addNotification"])(data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (_redhat_cloud_services_frontend_components_utilities_files_RouterParams__WEBPACK_IMPORTED_MODULE_11___default()(Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["connect"])(mapStateToProps, mapDispatchToProps)(OverviewDetails)));

/***/ }),

/***/ "./src/SmartComponents/Overview/Details.scss":
/*!***************************************************!*\
  !*** ./src/SmartComponents/Overview/Details.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/Details.js.map