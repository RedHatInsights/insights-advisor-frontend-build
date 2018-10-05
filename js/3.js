(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/PresentationalComponents/RulesCard/RulesCard.js":
/*!*************************************************************!*\
  !*** ./src/PresentationalComponents/RulesCard/RulesCard.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _insightsFrontendComponents = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");

var _reactCore = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");

__webpack_require__(/*! ./_RulesCard.scss */ "./src/PresentationalComponents/RulesCard/_RulesCard.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        props = (0, _objectWithoutProperties3.default)(_ref, ['category', 'description', 'summary', 'ansible', 'impact', 'likelihood', 'totalRisk', 'riskOfChange', 'hitCount', 'ruleID', 'className']);


    var rulesCardClasses = (0, _classnames2.default)('ins-c-rules-card', 'pf-t-light', 'pf-m-opaque-100', className);

    var renderHitCount = void 0;
    if (hitCount > 0) {
        renderHitCount = _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/actions/' + category.toLowerCase() + '/' + ruleID,
                'aria-label': hitCount + ' impacted system' + (hitCount > 1 ? 's' : '') },
            ' View Impacted Systems (',
            hitCount,
            ') '
        );
    } else {
        renderHitCount = _react2.default.createElement(
            'a',
            { disabled: true, 'aria-label': 'No impacted systems' },
            ' View Impacted Systems (0) '
        );
    }

    return _react2.default.createElement(
        _reactCore.Card,
        (0, _extends3.default)({}, props, { className: rulesCardClasses, 'widget-type': 'InsightsRulesCard' }),
        _react2.default.createElement(
            _reactCore.CardHeader,
            null,
            _react2.default.createElement(
                _reactCore.Split,
                null,
                _react2.default.createElement(
                    _reactCore.SplitItem,
                    null,
                    ' ',
                    category,
                    ' > '
                ),
                _react2.default.createElement(
                    _reactCore.SplitItem,
                    { isMain: true },
                    ' ',
                    description,
                    ' '
                ),
                _react2.default.createElement(
                    _reactCore.SplitItem,
                    null,
                    _react2.default.createElement(_insightsFrontendComponents.Ansible, { unsupported: ansible })
                )
            )
        ),
        _react2.default.createElement(
            _reactCore.CardBody,
            null,
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: summary } })
        ),
        _react2.default.createElement(
            _reactCore.CardFooter,
            null,
            _react2.default.createElement(
                'div',
                { className: 'space-between' },
                _react2.default.createElement(
                    _insightsFrontendComponents.Section,
                    { type: 'icon-group__with-major' },
                    _react2.default.createElement(_insightsFrontendComponents.Battery, { label: 'Impact', severity: impact }),
                    _react2.default.createElement(_insightsFrontendComponents.Battery, { label: 'Likelihood', severity: likelihood }),
                    _react2.default.createElement(_insightsFrontendComponents.Battery, { label: 'Total Risk', severity: totalRisk }),
                    _react2.default.createElement(_insightsFrontendComponents.Battery, { label: 'Risk Of Change', severity: riskOfChange })
                ),
                {...renderHitCount}
            )
        )
    );
};

exports.default = RulesCard;


RulesCard.propTypes = {
    ruleID: _propTypes2.default.string,
    category: _propTypes2.default.string,
    description: _propTypes2.default.string,
    summary: _propTypes2.default.string,
    ansible: _propTypes2.default.number,
    impact: _propTypes2.default.number,
    likelihood: _propTypes2.default.number,
    totalRisk: _propTypes2.default.number,
    riskOfChange: _propTypes2.default.number,
    hitCount: _propTypes2.default.number,
    className: _propTypes2.default.string
};

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/3.js.map