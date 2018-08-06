(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Actions"],{

/***/ "./src/SmartComponents/Actions/Actions.js":
/*!************************************************!*\
  !*** ./src/SmartComponents/Actions/Actions.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _asyncComponent = __webpack_require__(/*! ../../Utilities/asyncComponent */ "./src/Utilities/asyncComponent.js");

var _asyncComponent2 = _interopRequireDefault(_asyncComponent);

__webpack_require__(/*! ../../App.scss */ "./src/App.scss");

var _reactCore = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");

var _insightsFrontendComponents = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SummaryChart = (0, _asyncComponent2.default)(function () {
    return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ../../PresentationalComponents/SummaryChart/SummaryChart.js */ "./src/PresentationalComponents/SummaryChart/SummaryChart.js", 7));
});
var SummaryChartItem = (0, _asyncComponent2.default)(function () {
    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! ../../PresentationalComponents/SummaryChartItem/SummaryChartItem.js */ "./src/PresentationalComponents/SummaryChartItem/SummaryChartItem.js", 7));
});

var sevNames = ['Low', 'Medium', 'High', 'Critical'];

var Actions = function (_Component) {
    (0, _inherits3.default)(Actions, _Component);

    function Actions(props) {
        (0, _classCallCheck3.default)(this, Actions);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Actions.__proto__ || Object.getPrototypeOf(Actions)).call(this, props));

        _this.state = {
            severity: [],
            total: 0
        };
        return _this;
    }

    (0, _createClass3.default)(Actions, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // 1=INFO 2=WARN 3=ERROR 4=CRITICAL
            var response = {
                total: 9,
                severity: { info: 0, warn: 2, error: 3, critical: 4 },
                category: { Availability: 1, Security: 0, Stability: 1, Performance: 0 }
            };
            this.setState({ severity: [response.severity.info, response.severity.warn, response.severity.error, response.severity.critical] });
            this.setState({ total: response.total });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    _insightsFrontendComponents.PageHeader,
                    null,
                    _react2.default.createElement(_insightsFrontendComponents.PageHeaderTitle, { title: 'Actions' })
                ),
                _react2.default.createElement(
                    _insightsFrontendComponents.Section,
                    { type: 'content' },
                    _react2.default.createElement(
                        _reactCore.Grid,
                        { gutter: 'md' },
                        _react2.default.createElement(
                            _reactCore.GridItem,
                            { span: 4 },
                            'Donut'
                        ),
                        _react2.default.createElement(
                            _reactCore.GridItem,
                            { span: 4 },
                            _react2.default.createElement(
                                _reactCore.Card,
                                null,
                                _react2.default.createElement(
                                    _reactCore.CardHeader,
                                    null,
                                    'Risk Summary'
                                ),
                                _react2.default.createElement(
                                    _reactCore.CardBody,
                                    null,
                                    _react2.default.createElement(
                                        SummaryChart,
                                        null,
                                        _react2.default.createElement(SummaryChartItem, {
                                            name: sevNames[3],
                                            numIssues: this.state.severity[3],
                                            totalIssues: this.state.total }),
                                        _react2.default.createElement(SummaryChartItem, {
                                            name: sevNames[2],
                                            numIssues: this.state.severity[2],
                                            totalIssues: this.state.total }),
                                        _react2.default.createElement(SummaryChartItem, {
                                            name: sevNames[1],
                                            numIssues: this.state.severity[1],
                                            totalIssues: this.state.total }),
                                        _react2.default.createElement(SummaryChartItem, {
                                            name: sevNames[0],
                                            numIssues: this.state.severity[0],
                                            totalIssues: this.state.total })
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);
    return Actions;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Actions);

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/Actions.js.map