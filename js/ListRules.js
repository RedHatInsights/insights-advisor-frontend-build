(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ListRules"],{

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

/***/ "./src/PresentationalComponents/RulesCard/_RulesCard.scss":
/*!****************************************************************!*\
  !*** ./src/PresentationalComponents/RulesCard/_RulesCard.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/PresentationalComponents/Skeletons/RulesCard/RulesCardSkeleton.js":
/*!*******************************************************************************!*\
  !*** ./src/PresentationalComponents/Skeletons/RulesCard/RulesCardSkeleton.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RulesCardSkeleton; });
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
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _Skeleton_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_Skeleton.scss */ "./src/PresentationalComponents/Skeletons/_Skeleton.scss");
/* harmony import */ var _Skeleton_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Skeleton_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _RulesCard_RulesCard_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../RulesCard/_RulesCard.scss */ "./src/PresentationalComponents/RulesCard/_RulesCard.scss");
/* harmony import */ var _RulesCard_RulesCard_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_RulesCard_RulesCard_scss__WEBPACK_IMPORTED_MODULE_10__);











/**
 * This is the async skeleton loader for the rules card
 * When this is used, it will generate a fake rules card with blocks of highlighted
 * CSS to show information is loading.
 */

function RulesCardSkeleton(importComponent) {
  var RulesCardSkeleton =
  /*#__PURE__*/
  function (_Component) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(RulesCardSkeleton, _Component);

    function RulesCardSkeleton(props) {
      var _this;

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, RulesCardSkeleton);

      _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(RulesCardSkeleton).call(this, props));
      _this.state = {
        component: null
      };
      return _this;
    }

    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(RulesCardSkeleton, [{
      key: "componentDidMount",
      value: function () {
        var _componentDidMount = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var _ref, component;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return importComponent();

                case 2:
                  _ref = _context.sent;
                  component = _ref.default;
                  this.setState({
                    component: component
                  });

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function componentDidMount() {
          return _componentDidMount.apply(this, arguments);
        };
      }()
    }, {
      key: "render",
      value: function render() {
        var C = this.state.component;
        return C ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(C, this.props) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Card"], {
          className: "ins-c-rules-card ins-c-card__skeleton"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "skeleton skeleton-md"
        }, "\xA0")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "skeleton skeleton-lg"
        }, "\xA0")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["CardFooter"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "skeleton skeleton-sm"
        }, "\xA0")));
      }
    }]);

    return RulesCardSkeleton;
  }(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

  return RulesCardSkeleton;
}

/***/ }),

/***/ "./src/PresentationalComponents/Skeletons/_Skeleton.scss":
/*!***************************************************************!*\
  !*** ./src/PresentationalComponents/Skeletons/_Skeleton.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/SmartComponents/Rules/ListRules.js":
/*!************************************************!*\
  !*** ./src/SmartComponents/Rules/ListRules.js ***!
  \************************************************/
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
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _AppActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../AppActions */ "./src/AppActions.js");
/* harmony import */ var _PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../PresentationalComponents/Loading/Loading */ "./src/PresentationalComponents/Loading/Loading.js");
/* harmony import */ var _PresentationalComponents_Skeletons_RulesCard_RulesCardSkeleton_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../PresentationalComponents/Skeletons/RulesCard/RulesCardSkeleton.js */ "./src/PresentationalComponents/Skeletons/RulesCard/RulesCardSkeleton.js");














var RulesCard = Object(_PresentationalComponents_Skeletons_RulesCard_RulesCardSkeleton_js__WEBPACK_IMPORTED_MODULE_13__["default"])(function () {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../../PresentationalComponents/RulesCard/RulesCard.js */ "./src/PresentationalComponents/RulesCard/RulesCard.js"));
});

var ListRules =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ListRules, _React$Component);

  function ListRules(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ListRules);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ListRules).call(this, props));
    _this.state = {
      summary: '',
      itemsPerPage: 10,
      page: 1,
      cards: []
    };
    _this.setPage = _this.setPage.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    _this.setPerPage = _this.setPerPage.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ListRules, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchRules({
        page_size: this.state.itemsPerPage
      }); // eslint-disable-line camelcase

      this.props.setBreadcrumbs([{
        title: 'Rules',
        navigate: '/rules'
      }]);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var getRandomInt = function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max)) + 1;
      };

      if (this.props.rules !== prevProps.rules) {
        var rules = this.props.rules.results;
        var cards = [];
        rules.map(function (value, key) {
          cards.push(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RulesCard, {
            key: key,
            "widget-id": value,
            ruleID: value.rule_id,
            category: value.category.name,
            description: value.description,
            summary: value.summary_html // TODO: random numbers gotta go once these attributes are present on api 😏
            ,
            impact: value.rec_impact || getRandomInt(4),
            likelihood: value.rec_likelihood || getRandomInt(4),
            totalRisk: value.resolution_risk || getRandomInt(4),
            riskOfChange: value.risk_of_change || getRandomInt(4),
            ansible: value.ansible,
            hitCount: value.hitCount || getRandomInt(100)
          }));
        });
        this.setState({
          cards: cards
        });
      }
    }
  }, {
    key: "setPage",
    value: function setPage(page) {
      this.setState(function () {
        return {
          page: page
        };
      });
      this.props.fetchRules({
        page: page,
        page_size: this.state.itemsPerPage
      }); // eslint-disable-line camelcase
    }
  }, {
    key: "setPerPage",
    value: function setPerPage(itemsPerPage) {
      this.setState(function () {
        return {
          itemsPerPage: itemsPerPage
        };
      });
      this.props.fetchRules({
        page_size: itemsPerPage
      }); // eslint-disable-line camelcase
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          rulesFetchStatus = _this$props.rulesFetchStatus,
          rules = _this$props.rules;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__["Main"], null, rulesFetchStatus === 'fulfilled' && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, this.state.cards, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__["Pagination"], {
        numberOfItems: rules.count,
        onPerPageSelect: this.setPerPage,
        page: this.state.page,
        onSetPage: this.setPage,
        itemsPerPage: this.state.itemsPerPage
      })), rulesFetchStatus === 'pending' && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_12__["default"], null));
    }
  }]);

  return ListRules;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

ListRules.displayName = 'list-rules';
ListRules.propTypes = {
  breadcrumbs: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array,
  fetchRules: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  rulesFetchStatus: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  rules: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  setBreadcrumbs: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
    breadcrumbs: state.AdvisorStore.breadcrumbs,
    rules: state.AdvisorStore.rules,
    rulesFetchStatus: state.AdvisorStore.rulesFetchStatus
  }, ownProps);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchRules: function fetchRules(url) {
      return dispatch(_AppActions__WEBPACK_IMPORTED_MODULE_11__["fetchRules"](url));
    },
    setBreadcrumbs: function setBreadcrumbs(obj) {
      return dispatch(_AppActions__WEBPACK_IMPORTED_MODULE_11__["setBreadcrumbs"](obj));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__["routerParams"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(ListRules)));

/***/ }),

/***/ "./src/SmartComponents/Rules/ViewRule.js":
/*!***********************************************!*\
  !*** ./src/SmartComponents/Rules/ViewRule.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PresentationalComponents_Skeletons_Skeleton_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../PresentationalComponents/Skeletons/_Skeleton.scss */ "./src/PresentationalComponents/Skeletons/_Skeleton.scss");
/* harmony import */ var _PresentationalComponents_Skeletons_Skeleton_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_PresentationalComponents_Skeletons_Skeleton_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PresentationalComponents_RulesCard_RulesCard_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../PresentationalComponents/RulesCard/_RulesCard.scss */ "./src/PresentationalComponents/RulesCard/_RulesCard.scss");
/* harmony import */ var _PresentationalComponents_RulesCard_RulesCard_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PresentationalComponents_RulesCard_RulesCard_scss__WEBPACK_IMPORTED_MODULE_5__);







var ViewRule = function ViewRule() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    type: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "ins-c-rules-card ins-c-card__skeleton pf-t-light  pf-m-opaque-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "skeleton skeleton-md"
  }, "\xA0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "skeleton skeleton-lg"
  }, "\xA0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["CardFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "skeleton skeleton-sm"
  }, "\xA0"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "ins-c-rules-card ins-c-card__skeleton pf-t-light  pf-m-opaque-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "skeleton skeleton-md"
  }, "\xA0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "skeleton skeleton-lg"
  }, "\xA0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["CardFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "skeleton skeleton-sm"
  }, "\xA0"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "ins-c-rules-card ins-c-card__skeleton pf-t-light  pf-m-opaque-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "skeleton skeleton-md"
  }, "\xA0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "skeleton skeleton-lg"
  }, "\xA0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["CardFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "skeleton skeleton-sm"
  }, "\xA0"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "ins-c-rules-card ins-c-card__skeleton pf-t-light  pf-m-opaque-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "skeleton skeleton-md"
  }, "\xA0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "skeleton skeleton-lg"
  }, "\xA0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["CardFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "skeleton skeleton-sm"
  }, "\xA0"))));
};

ViewRule.displayName = 'view-rule';
ViewRule.propTypes = {
  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (ViewRule);

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/ListRules.js.map