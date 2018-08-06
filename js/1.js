(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/PresentationalComponents/SummaryChartItem/SummaryChartItem.js":
/*!***************************************************************************!*\
  !*** ./src/PresentationalComponents/SummaryChartItem/SummaryChartItem.js ***!
  \***************************************************************************/
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

__webpack_require__(/*! ./SummaryChartItem.scss */ "./src/PresentationalComponents/SummaryChartItem/SummaryChartItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SummaryChartItem = function SummaryChartItem(props) {
    var numIssues = props.numIssues;
    var percentage = (numIssues / props.totalIssues * 100).toFixed(1);
    var lowerCaseName = props.name.toLowerCase();

    return _react2.default.createElement(
        'li',
        null,
        numIssues > 0 && _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                'div',
                { className: 'metrics' },
                _react2.default.createElement(
                    'strong',
                    null,
                    props.name,
                    ' '
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'num' },
                    '(',
                    percentage,
                    '%)'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'progress-bars' },
                _react2.default.createElement('div', {
                    className: 'progress-bar progress-bar-' + lowerCaseName,
                    style: { width: percentage + '%' }
                }),
                _react2.default.createElement('div', { className: 'bar' })
            )
        ),
        numIssues === 0 && _react2.default.createElement(
            'div',
            { className: 'no-errors' },
            _react2.default.createElement('i', { className: 'fas fa-check-circle small-spacer green' }),
            'You have no issues of ',
            lowerCaseName,
            ' severity'
        )
    );
};

SummaryChartItem.propTypes = {
    name: _propTypes2.default.string.isRequired,
    totalIssues: _propTypes2.default.number.isRequired,
    numIssues: _propTypes2.default.number.isRequired
};

exports.default = SummaryChartItem;

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