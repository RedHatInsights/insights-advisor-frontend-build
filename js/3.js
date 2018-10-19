(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./src/PresentationalComponents/RulesCard/RulesCard.js":
/*!*************************************************************!*\
  !*** ./src/PresentationalComponents/RulesCard/RulesCard.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _RulesCard_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_RulesCard.scss */ "./src/PresentationalComponents/RulesCard/_RulesCard.scss");
/* harmony import */ var _RulesCard_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_RulesCard_scss__WEBPACK_IMPORTED_MODULE_8__);









/**
 * This is the card that displays information for the rules as well as links to the proper
 * url of systems impacted under that rule (if there are systems)
 */

var RulesCard = function RulesCard(_ref) {
  var category = _ref.category,
      description = _ref.description,
      summary = _ref.summary,
      ansible = _ref.ansible,
      impact = _ref.impact,
      likelihood = _ref.likelihood,
      totalRisk = _ref.totalRisk,
      riskOfChange = _ref.riskOfChange,
      hitCount = _ref.hitCount,
      ruleID = _ref.ruleID,
      className = _ref.className,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["category", "description", "summary", "ansible", "impact", "likelihood", "totalRisk", "riskOfChange", "hitCount", "ruleID", "className"]);

  var rulesCardClasses = classnames__WEBPACK_IMPORTED_MODULE_5___default()('ins-c-rules-card', 'pf-t-light', 'pf-m-opaque-100', className);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Card"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    className: rulesCardClasses,
    "widget-type": "InsightsRulesCard"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Split"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["SplitItem"], null, " ", category, " > "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["SplitItem"], {
    isMain: true
  }, " ", description, " "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["SplitItem"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_6__["Ansible"], {
    unsupported: ansible
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: summary
    }
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["CardFooter"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "space-between"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_6__["Section"], {
    type: "icon-group__with-major"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_6__["Battery"], {
    label: "Impact",
    severity: impact
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_6__["Battery"], {
    label: "Likelihood",
    severity: likelihood
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_6__["Battery"], {
    label: "Total Risk",
    severity: totalRisk
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_6__["Battery"], {
    label: "Risk Of Change",
    severity: riskOfChange
  })), hitCount > 0 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/actions/".concat(category.toLowerCase(), "/").concat(ruleID),
    "aria-label": "".concat(hitCount, " impacted system").concat(hitCount > 1 ? 's' : '')
  }, " View Impacted Systems (", hitCount, ") "), hitCount <= 0 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    disabled: true,
    "aria-label": "No impacted systems"
  }, " View Impacted Systems (0) "))));
};

/* harmony default export */ __webpack_exports__["default"] = (RulesCard);
RulesCard.propTypes = {
  ruleID: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  category: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  summary: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  ansible: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  impact: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  likelihood: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  totalRisk: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  riskOfChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  hitCount: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/3.js.map