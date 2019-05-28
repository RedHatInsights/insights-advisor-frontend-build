(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Overview"],{

/***/ "./src/SmartComponents/Overview/Dashboard.js":
/*!***************************************************!*\
  !*** ./src/SmartComponents/Overview/Dashboard.js ***!
  \***************************************************/
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
/* harmony import */ var _Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Utilities/asyncComponent */ "./src/Utilities/asyncComponent.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components */ "./node_modules/@redhat-cloud-services/frontend-components/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_files_RouterParams__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/files/RouterParams */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/files/RouterParams.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_files_RouterParams__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_utilities_files_RouterParams__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @patternfly/react-tokens */ "./node_modules/@patternfly/react-tokens/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _AppActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../AppActions */ "./src/AppActions.js");
/* harmony import */ var _PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../PresentationalComponents/Loading/Loading */ "./src/PresentationalComponents/Loading/Loading.js");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _PresentationalComponents_MessageState_MessageState__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../PresentationalComponents/MessageState/MessageState */ "./src/PresentationalComponents/MessageState/MessageState.js");
/* harmony import */ var _AppSvgs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../AppSvgs */ "./src/AppSvgs.js");
/* harmony import */ var _Dashboard_scss__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Dashboard.scss */ "./src/SmartComponents/Overview/Dashboard.scss");
/* harmony import */ var _Dashboard_scss__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_Dashboard_scss__WEBPACK_IMPORTED_MODULE_24__);











/* eslint camelcase: 0 */















var SummaryChart = Object(_Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_11__["default"])(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../PresentationalComponents/Charts/SummaryChart/SummaryChart */ "./src/PresentationalComponents/Charts/SummaryChart/SummaryChart.js"));
});
var OverviewDonut = Object(_Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_11__["default"])(function () {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../PresentationalComponents/Charts/OverviewDonut */ "./src/PresentationalComponents/Charts/OverviewDonut.js"));
});

var OverviewDashboard =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(OverviewDashboard, _Component);

  function OverviewDashboard() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, OverviewDashboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(OverviewDashboard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this), "state", {
      total: -1,
      category: []
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(OverviewDashboard, [{
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
                this.props.fetchStatsRules();
                this.props.fetchStatsSystems();
                this.props.setBreadcrumbs([{
                  title: 'Overview',
                  navigate: '/overview'
                }]);

              case 5:
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
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.statsRules !== prevProps.statsRules) {
        var rules = this.props.statsRules;
        this.setState({
          category: [rules.category.Availability, rules.category.Stability, rules.category.Performance, rules.category.Security]
        });
        this.setState({
          total: rules.total
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          statsRulesFetchStatus = _this$props.statsRulesFetchStatus,
          statsSystemsFetchStatus = _this$props.statsSystemsFetchStatus,
          statsRules = _this$props.statsRules,
          statsSystems = _this$props.statsSystems;
      var _this$state = this.state,
          category = _this$state.category,
          total = _this$state.total;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_15__["PageHeader"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_15__["PageHeaderTitle"], {
        title: "Overview"
      })), total !== 0 ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_15__["Main"], {
        className: "pf-m-light mainPaddingOverride ins-test"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Level"], {
        className: "levelAlignOverride"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["LevelItem"], {
        className: "levelItemPaddingOverride"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Title"], {
        size: "lg",
        headingLevel: "h3"
      }, "Rule hits by severity"), statsRulesFetchStatus === 'fulfilled' && statsSystemsFetchStatus === 'fulfilled' ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(SummaryChart, {
        rulesTotalRisk: statsRules.total_risk,
        reportsTotalRisk: statsSystems.total_risk
      }) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_20__["default"], null)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["LevelItem"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Title"], {
        size: "lg",
        headingLevel: "h3"
      }, "Rule hits by category"), statsRulesFetchStatus === 'fulfilled' ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(OverviewDonut, {
        category: category,
        className: "pf-u-mt-md"
      }) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_20__["default"], null)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["LevelItem"], null, "\xA0"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_15__["Main"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_15__["Main"], {
        className: "pf-m-light"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Title"], {
        size: "2xl",
        headingLevel: "h1"
      }, "Get started with Red Hat Insights"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Level"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["LevelItem"], {
        style: {
          maxWidth: '400px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_PresentationalComponents_MessageState_MessageState__WEBPACK_IMPORTED_MODULE_22__["default"], {
        iconStyle: {
          color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_17__["global_Color_100"].value
        },
        icon: function icon() {
          return _AppSvgs__WEBPACK_IMPORTED_MODULE_23__["SERVER_STACK_ICON"];
        },
        title: "Connect your first systems",
        text: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          key: "1"
        }, "Connect at least 10 systems to get a better", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "awareness of issues and optimizations", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "identified across your infastructure")
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        component: "a",
        href: "https://access.redhat.com/products/red-hat-insights#getstarted",
        target: "_blank",
        variant: "link"
      }, "Learn how to connect a system to insights"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["LevelItem"], {
        style: {
          maxWidth: '400px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_PresentationalComponents_MessageState_MessageState__WEBPACK_IMPORTED_MODULE_22__["default"], {
        iconStyle: {
          color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_17__["global_Color_100"].value
        },
        icon: function icon() {
          return _AppSvgs__WEBPACK_IMPORTED_MODULE_23__["ANSIBLE_MARK_ICON"];
        },
        title: "Remediate Insights findings with Ansible",
        text: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          key: "1"
        }, "Easily generate an Ansible playbook to", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "quickly and effectively remediate Insights ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), " findings")
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        component: "a",
        href: "https://cloud.redhat.com/insights/remediations",
        target: "_blank",
        variant: "link"
      }, "Get started with Insights and Ansible Playbooks"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["LevelItem"], {
        style: {
          maxWidth: '400px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_PresentationalComponents_MessageState_MessageState__WEBPACK_IMPORTED_MODULE_22__["default"], {
        iconStyle: {
          color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_17__["global_Color_100"].value
        },
        icon: function icon() {
          return _AppSvgs__WEBPACK_IMPORTED_MODULE_23__["GLOBAL_ECONSYSTEM_ICON"];
        },
        title: "Deploy Insights at scale",
        text: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          key: "1"
        }, "Get more out of Insights with more systems.", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "Quickly connect systems with ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          rel: "noopener noreferrer",
          target: "_blank",
          href: "https://galaxy.ansible.com/redhatinsights/insights-client"
        }, "Ansible"), " ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), " or", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          rel: "noopener noreferrer",
          target: "_blank",
          href: "https://forge.puppetlabs.com/lphiri/access_insights_client"
        }, " Puppet"))
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        component: "a",
        href: "https://galaxy.ansible.com/redhatinsights/insights-client",
        target: "_blank",
        variant: "secondary"
      }, "Download Ansible Playbook"))))))) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_15__["Main"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_PresentationalComponents_MessageState_MessageState__WEBPACK_IMPORTED_MODULE_22__["default"], {
        iconStyle: {
          color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_17__["global_primary_color_100"].value
        },
        icon: _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_18__["ChartSpikeIcon"],
        title: "Get started with Red Hat Insights",
        text: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          key: "1"
        }, "With predictive analytics, avoid problems and unplanned", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "downtime in your Red Hat environment. Red Hat Insights is", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), "included with your Red Hat Enterprise Linux subscription")
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        component: "a",
        href: "https://access.redhat.com/insights/getting-started/",
        target: "_blank",
        variant: "primary"
      }, "Get started"))));
    }
  }]);

  return OverviewDashboard;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

OverviewDashboard.propTypes = {
  match: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object,
  breadcrumbs: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.array,
  setBreadcrumbs: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func,
  statsRulesFetchStatus: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
  statsRules: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object,
  fetchStatsRules: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func,
  statsSystemsFetchStatus: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
  statsSystems: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object,
  fetchStatsSystems: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
    breadcrumbs: state.AdvisorStore.breadcrumbs,
    statsRules: state.AdvisorStore.statsRules,
    statsRulesFetchStatus: state.AdvisorStore.statsRulesFetchStatus,
    statsSystems: state.AdvisorStore.statsSystems,
    statsSystemsFetchStatus: state.AdvisorStore.statsSystemsFetchStatus
  }, ownProps);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchStatsRules: function fetchStatsRules(url) {
      return dispatch(_AppActions__WEBPACK_IMPORTED_MODULE_19__["fetchStatsRules"](url));
    },
    fetchStatsSystems: function fetchStatsSystems(url) {
      return dispatch(_AppActions__WEBPACK_IMPORTED_MODULE_19__["fetchStatsSystems"](url));
    },
    setBreadcrumbs: function setBreadcrumbs(obj) {
      return dispatch(_AppActions__WEBPACK_IMPORTED_MODULE_19__["setBreadcrumbs"](obj));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (_redhat_cloud_services_frontend_components_utilities_files_RouterParams__WEBPACK_IMPORTED_MODULE_16___default()(Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(mapStateToProps, mapDispatchToProps)(OverviewDashboard)));

/***/ }),

/***/ "./src/SmartComponents/Overview/Dashboard.scss":
/*!*****************************************************!*\
  !*** ./src/SmartComponents/Overview/Dashboard.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/SmartComponents/Overview/Overview.js":
/*!**************************************************!*\
  !*** ./src/SmartComponents/Overview/Overview.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_files_RouterParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/files/RouterParams */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/files/RouterParams.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_files_RouterParams__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_utilities_files_RouterParams__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities/asyncComponent */ "./src/Utilities/asyncComponent.js");




var OverviewDashboard = Object(_Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./Dashboard */ "./src/SmartComponents/Overview/Dashboard.js"));
});
var Details = Object(_Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
  return Promise.all(/*! import() | Details */[__webpack_require__.e("Details~ListRules~Lists"), __webpack_require__.e("Details")]).then(__webpack_require__.bind(null, /*! ./Details */ "./src/SmartComponents/Overview/Details.js"));
});
var List = Object(_Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
  return Promise.all(/*! import() | Lists */[__webpack_require__.e("Details~ListRules~Lists"), __webpack_require__.e("ListRules~Lists"), __webpack_require__.e("Lists")]).then(__webpack_require__.bind(null, /*! ./List */ "./src/SmartComponents/Overview/List.js"));
});
var InventoryDetails = Object(_Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
  return __webpack_require__.e(/*! import() | InventoryDetails */ "InventoryDetails").then(__webpack_require__.bind(null, /*! ../../PresentationalComponents/Inventory/InventoryDetails */ "./src/PresentationalComponents/Inventory/InventoryDetails.js"));
});

var Overview = function Overview() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/overview",
    component: OverviewDashboard
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/overview/:type",
    component: List
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/overview/by_id/:id",
    component: Details
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/overview/:type/:id",
    component: Details
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/overview/by_id/:id/:inventoryId/",
    component: InventoryDetails
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/overview/:type/:id/:inventoryId/",
    component: InventoryDetails
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (_redhat_cloud_services_frontend_components_utilities_files_RouterParams__WEBPACK_IMPORTED_MODULE_2___default()(Overview));

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/Overview.js.map