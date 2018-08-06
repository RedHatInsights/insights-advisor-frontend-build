(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ListRules"],{

/***/ "./src/PresentationalComponents/Rules/ListRules.js":
/*!*********************************************************!*\
  !*** ./src/PresentationalComponents/Rules/ListRules.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _insightsFrontendComponents = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListRules = function ListRules() {
    return _react2.default.createElement(
        _insightsFrontendComponents.Section,
        { type: 'content' },
        _react2.default.createElement(
            'h1',
            null,
            ' Rule List '
        )
    );
};

ListRules.displayName = 'list-rules';

exports.default = ListRules;

/***/ }),

/***/ "./src/PresentationalComponents/Rules/ViewRule.js":
/*!********************************************************!*\
  !*** ./src/PresentationalComponents/Rules/ViewRule.js ***!
  \********************************************************/
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

var ViewRule = function ViewRule(props) {
    return _react2.default.createElement(
        'h1',
        null,
        'Rule ',
        props.match.params.id
    );
};

ViewRule.displayName = 'view-rule';

ViewRule.propTypes = {
    match: _propTypes2.default.object
};

exports.default = ViewRule;

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/ListRules.js.map