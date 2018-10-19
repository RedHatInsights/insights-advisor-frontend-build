(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/PresentationalComponents/SummaryChartItem/SummaryChartItem.js":
/*!***************************************************************************!*\
  !*** ./src/PresentationalComponents/SummaryChartItem/SummaryChartItem.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SummaryChartItem_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SummaryChartItem.scss */ "./src/PresentationalComponents/SummaryChartItem/SummaryChartItem.scss");
/* harmony import */ var _SummaryChartItem_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SummaryChartItem_scss__WEBPACK_IMPORTED_MODULE_2__);




var SummaryChartItem = function SummaryChartItem(props) {
  var numIssues = props.numIssues;
  var percentage = (numIssues / props.totalIssues * 100).toFixed(1);
  var lowerCaseName = props.name.toLowerCase();
  var barWidth = {
    width: percentage + '%'
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    "widget-type": "InsightsSummaryChartItem",
    "widget-id": props.name
  }, numIssues > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "metrics"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, props.name, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "num"
  }, "(", percentage, "%)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress-bars"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'progress-bar progress-bar-' + lowerCaseName,
    style: barWidth
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bar"
  }))), numIssues === 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "no-errors"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-check-circle small-spacer green"
  }), "You have no issues of ", lowerCaseName, " severity"));
};

SummaryChartItem.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  totalIssues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  numIssues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SummaryChartItem);

/***/ }),

/***/ "./src/PresentationalComponents/SummaryChartItem/SummaryChartItem.scss":
/*!*****************************************************************************!*\
  !*** ./src/PresentationalComponents/SummaryChartItem/SummaryChartItem.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/1.js.map