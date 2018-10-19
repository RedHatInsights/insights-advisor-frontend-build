(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ActionsOverview"],{

/***/ "./src/PresentationalComponents/Loading/Loading.js":
/*!*********************************************************!*\
  !*** ./src/PresentationalComponents/Loading/Loading.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Loading = function Loading() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, " Loading... ");
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./src/SmartComponents/Actions/ActionsOverview.js":
/*!********************************************************!*\
  !*** ./src/SmartComponents/Actions/ActionsOverview.js ***!
  \********************************************************/
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
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Utilities/asyncComponent */ "./src/Utilities/asyncComponent.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _AppActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../AppActions */ "./src/AppActions.js");
/* harmony import */ var _PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../PresentationalComponents/Loading/Loading */ "./src/PresentationalComponents/Loading/Loading.js");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_15__);
















var SummaryChart = Object(_Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../PresentationalComponents/SummaryChart/SummaryChart.js */ "./src/PresentationalComponents/SummaryChart/SummaryChart.js"));
});
var SummaryChartItem = Object(_Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../PresentationalComponents/SummaryChartItem/SummaryChartItem.js */ "./src/PresentationalComponents/SummaryChartItem/SummaryChartItem.js"));
});
var ConditionalLink = Object(_Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../PresentationalComponents/ConditionalLink/ConditionalLink.js */ "./src/PresentationalComponents/ConditionalLink/ConditionalLink.js"));
});
var sevNames = ['Low', 'Medium', 'High', 'Critical'];
var typeNames = ['Availability', 'Security', 'Stability', 'Performance'];
var typeLink = '/actions/';

var ActionsOverview =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ActionsOverview, _Component);

  function ActionsOverview(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ActionsOverview);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ActionsOverview).call(this, props));
    _this.state = {
      severity: [],
      total: 0,
      category: []
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ActionsOverview, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchStats();
      this.props.setBreadcrumbs([{
        title: 'Actions',
        navigate: '/actions'
      }]);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.stats !== prevProps.stats) {
        var rules = this.props.stats.rules;
        this.setState({
          severity: [rules.severity.Info, rules.severity.Warn, rules.severity.Error, rules.severity.Critical]
        });
        this.setState({
          category: [rules.category.Availability, rules.category.Security, rules.category.Stability, rules.category.Performance]
        });
        this.setState({
          total: rules.total
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var statsFetchStatus = this.props.statsFetchStatus;

      var renderDonut = function renderDonut(donutValues) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12__["Donut"], {
          key: "advisor-donut",
          values: donutValues,
          link: typeLink,
          totalLabel: "issues",
          identifier: "advisor-donut",
          withLegend: true
        });
      };

      ;
      var donutValues = [];
      var SummaryChartItems = [];
      this.state.severity.map(function (value, key) {
        SummaryChartItems.push(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ConditionalLink, {
          key: key,
          condition: value,
          wrap: function wrap(children) {
            return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
              to: "/actions/".concat(sevNames[key].toLowerCase(), "-risk")
            }, children);
          }
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SummaryChartItem, {
          name: sevNames[key],
          numIssues: value,
          totalIssues: _this2.state.total
        })));
      });
      this.state.category.map(function (value, key) {
        return donutValues.push([typeNames[key], value]);
      });
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12__["PageHeader"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12__["PageHeaderTitle"], {
        title: "Actions"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12__["Main"], null, statsFetchStatus === 'fulfilled' && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
        gutter: "md",
        xl: 4,
        sm: 6
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_11__["GridItem"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_11__["Card"], {
        className: "pf-t-light  pf-m-opaque-100"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_11__["CardHeader"], null, "Category Summary"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_11__["CardBody"], null, renderDonut(donutValues)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_11__["GridItem"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_11__["Card"], {
        className: "pf-t-light  pf-m-opaque-100"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_11__["CardHeader"], null, "Risk Summary"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_11__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SummaryChart, null, SummaryChartItems))))), statsFetchStatus === 'pending' && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_14__["default"], null)));
    }
  }]);

  return ActionsOverview;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

ActionsOverview.propTypes = {
  breadcrumbs: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array,
  fetchStats: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  setBreadcrumbs: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  statsFetchStatus: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  stats: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
    breadcrumbs: state.AdvisorStore.breadcrumbs,
    stats: state.AdvisorStore.stats,
    statsFetchStatus: state.AdvisorStore.statsFetchStatus
  }, ownProps);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchStats: function fetchStats(url) {
      return dispatch(_AppActions__WEBPACK_IMPORTED_MODULE_13__["fetchStats"](url));
    },
    setBreadcrumbs: function setBreadcrumbs(obj) {
      return dispatch(_AppActions__WEBPACK_IMPORTED_MODULE_13__["setBreadcrumbs"](obj));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_12__["routerParams"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(ActionsOverview)));

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/ActionsOverview.js.map