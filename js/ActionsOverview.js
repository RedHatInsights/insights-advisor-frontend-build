(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ActionsOverview"],{

/***/ "./src/PresentationalComponents/Loading/Loading.js":
/*!*********************************************************!*\
  !*** ./src/PresentationalComponents/Loading/Loading.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function Loading() {
  return _react2.default.createElement(
    'div',
    null,
    ' Loading... '
  );
};

exports.default = Loading;

/***/ }),

/***/ "./src/SmartComponents/Actions/ActionsOverview.js":
/*!********************************************************!*\
  !*** ./src/SmartComponents/Actions/ActionsOverview.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

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

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactCore = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");

var _insightsFrontendComponents = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");

var _AppActions = __webpack_require__(/*! ../../AppActions */ "./src/AppActions.js");

var AppActions = _interopRequireWildcard(_AppActions);

var _Loading = __webpack_require__(/*! ../../PresentationalComponents/Loading/Loading */ "./src/PresentationalComponents/Loading/Loading.js");

var _Loading2 = _interopRequireDefault(_Loading);

__webpack_require__(/*! ../../App.scss */ "./src/App.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SummaryChart = (0, _asyncComponent2.default)(function () {
    return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ../../PresentationalComponents/SummaryChart/SummaryChart.js */ "./src/PresentationalComponents/SummaryChart/SummaryChart.js", 7));
});
var SummaryChartItem = (0, _asyncComponent2.default)(function () {
    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! ../../PresentationalComponents/SummaryChartItem/SummaryChartItem.js */ "./src/PresentationalComponents/SummaryChartItem/SummaryChartItem.js", 7));
});
var ConditionalLink = (0, _asyncComponent2.default)(function () {
    return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! ../../PresentationalComponents/ConditionalLink/ConditionalLink.js */ "./src/PresentationalComponents/ConditionalLink/ConditionalLink.js", 7));
});

var sevNames = ['Low', 'Medium', 'High', 'Critical'];
var typeNames = ['Availability', 'Security', 'Stability', 'Performance'];
var typeLink = '/actions/';

var ActionsOverview = function (_Component) {
    (0, _inherits3.default)(ActionsOverview, _Component);

    function ActionsOverview(props) {
        (0, _classCallCheck3.default)(this, ActionsOverview);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ActionsOverview.__proto__ || Object.getPrototypeOf(ActionsOverview)).call(this, props));

        _this.state = {
            severity: [],
            total: 0,
            category: []
        };
        return _this;
    }

    (0, _createClass3.default)(ActionsOverview, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchStats();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (this.props.stats !== prevProps.stats) {
                var rules = this.props.stats.rules;
                this.setState({ severity: [rules.severity.Info, rules.severity.Warn, rules.severity.Error, rules.severity.Critical] });
                this.setState({
                    category: [rules.category.Availability, rules.category.Security, rules.category.Stability, rules.category.Performance]
                });
                this.setState({ total: rules.total });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var statsFetchStatus = this.props.statsFetchStatus;

            var renderDonut = function renderDonut(donutValues) {
                return _react2.default.createElement(_insightsFrontendComponents.Donut, { key: 'advisor-donut', values: donutValues, link: typeLink, totalLabel: 'issues', identifier: 'advisor-donut', withLegend: true });
            };;
            var donutValues = [];
            var SummaryChartItems = [];

            this.state.severity.map(function (value, key) {
                SummaryChartItems.push(_react2.default.createElement(
                    ConditionalLink,
                    {
                        key: key,
                        condition: value,
                        wrap: function wrap(children) {
                            return _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/actions/' + sevNames[key].toLowerCase() + '-risk' },
                                children
                            );
                        } },
                    _react2.default.createElement(SummaryChartItem, {
                        name: sevNames[key],
                        numIssues: value,
                        totalIssues: _this2.state.total })
                ));
            });

            this.state.category.map(function (value, key) {
                return donutValues.push([typeNames[key], value]);
            });

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    _insightsFrontendComponents.PageHeader,
                    null,
                    _react2.default.createElement(_insightsFrontendComponents.PageHeaderTitle, { title: 'Actions' })
                ),
                _react2.default.createElement(
                    _insightsFrontendComponents.Main,
                    null,
                    statsFetchStatus === 'fulfilled' && _react2.default.createElement(
                        _reactCore.Grid,
                        { gutter: 'md', xl: 4, sm: 6 },
                        _react2.default.createElement(
                            _reactCore.GridItem,
                            null,
                            _react2.default.createElement(
                                _reactCore.Card,
                                { className: 'pf-t-light  pf-m-opaque-100' },
                                _react2.default.createElement(
                                    _reactCore.CardHeader,
                                    null,
                                    'Category Summary'
                                ),
                                _react2.default.createElement(
                                    _reactCore.CardBody,
                                    null,
                                    renderDonut(donutValues)
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactCore.GridItem,
                            null,
                            _react2.default.createElement(
                                _reactCore.Card,
                                { className: 'pf-t-light  pf-m-opaque-100' },
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
                                        SummaryChartItems
                                    )
                                )
                            )
                        )
                    ),
                    statsFetchStatus === 'pending' && _react2.default.createElement(_Loading2.default, null)
                )
            );
        }
    }]);
    return ActionsOverview;
}(_react.Component);

ActionsOverview.propTypes = {
    fetchStats: _propTypes2.default.func,
    statsFetchStatus: _propTypes2.default.string,
    stats: _propTypes2.default.object
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return (0, _extends3.default)({
        stats: state.AdvisorStore.stats,
        statsFetchStatus: state.AdvisorStore.statsFetchStatus
    }, ownProps);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        fetchStats: function fetchStats(url) {
            return dispatch(AppActions.fetchStats(url));
        }
    };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ActionsOverview));

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/ActionsOverview.js.map