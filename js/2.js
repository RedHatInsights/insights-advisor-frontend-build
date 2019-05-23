(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/PresentationalComponents/Charts/SummaryChart/SummaryChartItem.js":
/*!******************************************************************************!*\
  !*** ./src/PresentationalComponents/Charts/SummaryChart/SummaryChartItem.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components */ "./node_modules/@redhat-cloud-services/frontend-components/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");






var SummaryChartItem = function SummaryChartItem(props) {
  var numIssues = props.numIssues,
      name = props.name,
      riskName = props.riskName;

  var returnLink = function returnLink(children) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/overview/".concat(riskName)
    }, " ", children, " ");
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["StackItem"], {
    "widget-type": "InsightsSummaryChartItem",
    "widget-id": name
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["Split"], {
    style: {
      alignItems: 'flex-end'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["SplitItem"], {
    className: "pf-u-pr-md"
  }, returnLink(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_3__["Battery"], {
    label: riskName,
    severity: name.toLowerCase(),
    labelHidden: true
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_4__["SplitItem"], {
    className: "pf-u-text-align-right pf-u-pl-sm"
  }, returnLink("".concat(numIssues, " ").concat(name, " affecting ").concat(props.affectedSystems, " systems")))));
};

SummaryChartItem.propTypes = {
  affectedSystems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  numIssues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  riskName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SummaryChartItem);

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/2.js.map