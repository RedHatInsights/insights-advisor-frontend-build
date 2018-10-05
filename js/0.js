(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/PresentationalComponents/SummaryChart/SummaryChart.js":
/*!*******************************************************************!*\
  !*** ./src/PresentationalComponents/SummaryChart/SummaryChart.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SummaryChart = function SummaryChart(props) {
    return _react2.default.createElement(
        'div',
        { className: 'summary-chart', 'widget-type': 'InsightsSummaryChart' },
        _react2.default.createElement(
            'ul',
            null,
            ' ',
            props.children,
            ' '
        )
    );
};

SummaryChart.propTypes = {
    children: _propTypes2.default.array
};

exports.default = SummaryChart;

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/0.js.map