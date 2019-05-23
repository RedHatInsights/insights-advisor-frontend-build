(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Lists"],{

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

/***/ "./src/SmartComponents/Overview/List.js":
/*!**********************************************!*\
  !*** ./src/SmartComponents/Overview/List.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components */ "./node_modules/@redhat-cloud-services/frontend-components/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _PresentationalComponents_Breadcrumbs_Breadcrumbs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../PresentationalComponents/Breadcrumbs/Breadcrumbs */ "./src/PresentationalComponents/Breadcrumbs/Breadcrumbs.js");
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../AppConstants */ "./src/AppConstants.js");
/* harmony import */ var _PresentationalComponents_RulesTable_RulesTable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../PresentationalComponents/RulesTable/RulesTable */ "./src/PresentationalComponents/RulesTable/RulesTable.js");










/* eslint camelcase: 0 */








var OverviewList =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(OverviewList, _Component);

  function OverviewList() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, OverviewList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(OverviewList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "state", {
      urlFilters: {},
      impacting: true
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), "parseUrlTitle", function () {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var parsedTitle = title.split('-');
      return parsedTitle.length > 1 ? "".concat(Object(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["capitalize"])(parsedTitle[0]), " ").concat(Object(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["capitalize"])(parsedTitle[1]), " Actions") : "".concat(Object(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["capitalize"])(parsedTitle[0]));
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(OverviewList, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var totalRisk;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.props.match.params.type.includes('-risk')) {
                  totalRisk = _AppConstants__WEBPACK_IMPORTED_MODULE_14__["SEVERITY_MAP"][this.props.match.params.type];
                  this.setState({
                    urlFilters: {
                      total_risk: "".concat(totalRisk)
                    }
                  });
                } else {
                  this.setState({
                    urlFilters: {
                      category: "".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_14__["RULE_CATEGORIES"][this.props.match.params.type])
                    }
                  });
                }

              case 1:
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
      var _this$state = this.state,
          urlFilters = _this$state.urlFilters,
          impacting = _this$state.impacting;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_10__["PageHeader"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_PresentationalComponents_Breadcrumbs_Breadcrumbs__WEBPACK_IMPORTED_MODULE_13__["default"], {
        current: this.parseUrlTitle(this.props.match.params.type),
        match: this.props.match
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_10__["PageHeaderTitle"], {
        title: this.parseUrlTitle(this.props.match.params.type)
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_PresentationalComponents_RulesTable_RulesTable__WEBPACK_IMPORTED_MODULE_15__["default"], {
        impacting: impacting,
        externalFilters: urlFilters
      }));
    }
  }]);

  return OverviewList;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

OverviewList.propTypes = {
  match: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (OverviewList);

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/Lists.js.map