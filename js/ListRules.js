(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ListRules"],{

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = RulesCardSkeleton;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactCore = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");

__webpack_require__(/*! ../_Skeleton.scss */ "./src/PresentationalComponents/Skeletons/_Skeleton.scss");

__webpack_require__(/*! ../../RulesCard/_RulesCard.scss */ "./src/PresentationalComponents/RulesCard/_RulesCard.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This is the async skeleton loader for the rules card
 * When this is used, it will generate a fake rules card with blocks of highlighted
 * CSS to show information is loading.
 */

function RulesCardSkeleton(importComponent) {
    var RulesCardSkeleton = function (_Component) {
        (0, _inherits3.default)(RulesCardSkeleton, _Component);

        function RulesCardSkeleton(props) {
            (0, _classCallCheck3.default)(this, RulesCardSkeleton);

            var _this = (0, _possibleConstructorReturn3.default)(this, (RulesCardSkeleton.__proto__ || Object.getPrototypeOf(RulesCardSkeleton)).call(this, props));

            _this.state = {
                component: null
            };
            return _this;
        }

        (0, _createClass3.default)(RulesCardSkeleton, [{
            key: 'componentDidMount',
            value: function () {
                var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                    var _ref2, component;

                    return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return importComponent();

                                case 2:
                                    _ref2 = _context.sent;
                                    component = _ref2.default;


                                    this.setState({
                                        component: component
                                    });

                                case 5:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function componentDidMount() {
                    return _ref.apply(this, arguments);
                }

                return componentDidMount;
            }()
        }, {
            key: 'render',
            value: function render() {
                var C = this.state.component;

                return C ? _react2.default.createElement(C, this.props) : _react2.default.createElement(
                    _reactCore.Card,
                    { className: 'ins-c-rules-card ins-c-card__skeleton' },
                    _react2.default.createElement(
                        _reactCore.CardHeader,
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'skeleton skeleton-md' },
                            '\xA0'
                        )
                    ),
                    _react2.default.createElement(
                        _reactCore.CardBody,
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'skeleton skeleton-lg' },
                            '\xA0'
                        )
                    ),
                    _react2.default.createElement(
                        _reactCore.CardFooter,
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'skeleton skeleton-sm' },
                            '\xA0'
                        )
                    )
                );
            }
        }]);
        return RulesCardSkeleton;
    }(_react.Component);

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

var _insightsFrontendComponents = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AppActions = __webpack_require__(/*! ../../AppActions */ "./src/AppActions.js");

var AppActions = _interopRequireWildcard(_AppActions);

var _RulesCardSkeleton = __webpack_require__(/*! ../../PresentationalComponents/Skeletons/RulesCard/RulesCardSkeleton.js */ "./src/PresentationalComponents/Skeletons/RulesCard/RulesCardSkeleton.js");

var _RulesCardSkeleton2 = _interopRequireDefault(_RulesCardSkeleton);

var _Loading = __webpack_require__(/*! ../../PresentationalComponents/Loading/Loading */ "./src/PresentationalComponents/Loading/Loading.js");

var _Loading2 = _interopRequireDefault(_Loading);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RulesCard = (0, _RulesCardSkeleton2.default)(function () {
    return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(null, /*! ../../PresentationalComponents/RulesCard/RulesCard.js */ "./src/PresentationalComponents/RulesCard/RulesCard.js", 7));
});

var ListRules = function (_React$Component) {
    (0, _inherits3.default)(ListRules, _React$Component);

    function ListRules(props) {
        (0, _classCallCheck3.default)(this, ListRules);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ListRules.__proto__ || Object.getPrototypeOf(ListRules)).call(this, props));

        _this.state = {
            summary: '',
            itemsPerPage: 10,
            page: 1,
            cards: [],
            things: []
        };
        _this.limitCards = _this.limitCards.bind(_this);
        _this.setPage = _this.setPage.bind(_this);
        _this.setPerPage = _this.setPerPage.bind(_this);
        return _this;
    }

    // TODO: implement server supported pagination in this component, page_size 1000? wtf yo 😏


    (0, _createClass3.default)(ListRules, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchRules({ page_size: 1000 }); // eslint-disable-line camelcase
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var getRandomInt = function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max)) + 1;
            };

            if (this.props.rules !== prevProps.rules) {
                var rules = this.props.rules.results;
                var cards = [];
                rules.map(function (value, key) {
                    cards.push(_react2.default.createElement(RulesCard, {
                        key: key,
                        'widget-id': value,
                        ruleID: value.rule_id,
                        category: value.category.name,
                        description: value.description,
                        summary: value.summary_html
                        // TODO: random numbers gotta go once these attributes are present on api 😏
                        , impact: value.rec_impact || getRandomInt(4),
                        likelihood: value.rec_likelihood || getRandomInt(4),
                        totalRisk: value.resolution_risk || getRandomInt(4),
                        riskOfChange: value.risk_of_change || getRandomInt(4),
                        ansible: value.ansible,
                        hitCount: value.hitCount || getRandomInt(100)
                    }));
                });
                this.setState({ cards: cards });
            }
        }
    }, {
        key: 'setPage',
        value: function setPage(page) {
            this.setState((0, _extends3.default)({}, this.state, {
                page: page
            }));
        }
    }, {
        key: 'setPerPage',
        value: function setPerPage(amount) {
            this.setState((0, _extends3.default)({}, this.state, {
                itemsPerPage: amount
            }));
        }
    }, {
        key: 'limitCards',
        value: function limitCards() {
            var _state = this.state,
                page = _state.page,
                itemsPerPage = _state.itemsPerPage;

            var numberOfItems = this.state.cards.length;
            var lastPage = Math.ceil(numberOfItems / itemsPerPage);
            var lastIndex = page === lastPage ? numberOfItems : page * itemsPerPage;
            var firstIndex = page === 1 ? 0 : page * itemsPerPage - itemsPerPage;
            return this.state.cards.slice(firstIndex, lastIndex);
        }
    }, {
        key: 'render',
        value: function render() {
            var rulesFetchStatus = this.props.rulesFetchStatus;

            var cards = this.limitCards();
            return _react2.default.createElement(
                _insightsFrontendComponents.Main,
                null,
                rulesFetchStatus === 'fulfilled' && _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    cards,
                    _react2.default.createElement(_insightsFrontendComponents.Pagination, {
                        numberOfItems: this.state.cards.length,
                        onPerPageSelect: this.setPerPage,
                        page: this.state.page,
                        onSetPage: this.setPage,
                        itemsPerPage: this.state.itemsPerPage
                    })
                ),
                rulesFetchStatus === 'pending' && _react2.default.createElement(_Loading2.default, null)
            );
        }
    }]);
    return ListRules;
}(_react2.default.Component);

ListRules.displayName = 'list-rules';

ListRules.propTypes = {
    AdvisorStore: _propTypes2.default.object
};

ListRules.propTypes = {
    fetchRules: _propTypes2.default.func,
    rulesFetchStatus: _propTypes2.default.string,
    rules: _propTypes2.default.object
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return (0, _extends3.default)({
        rules: state.AdvisorStore.rules,
        rulesFetchStatus: state.AdvisorStore.rulesFetchStatus
    }, ownProps);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        fetchRules: function fetchRules(url) {
            return dispatch(AppActions.fetchRules(url));
        }
    };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ListRules));

/***/ }),

/***/ "./src/SmartComponents/Rules/ViewRule.js":
/*!***********************************************!*\
  !*** ./src/SmartComponents/Rules/ViewRule.js ***!
  \***********************************************/
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

var _reactCore = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");

var _insightsFrontendComponents = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");

__webpack_require__(/*! ../../PresentationalComponents/Skeletons/_Skeleton.scss */ "./src/PresentationalComponents/Skeletons/_Skeleton.scss");

__webpack_require__(/*! ../../PresentationalComponents/RulesCard/_RulesCard.scss */ "./src/PresentationalComponents/RulesCard/_RulesCard.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ViewRule = function ViewRule() {
    return _react2.default.createElement(
        _insightsFrontendComponents.Section,
        { type: 'content' },
        _react2.default.createElement(
            _reactCore.Card,
            { className: 'ins-c-rules-card ins-c-card__skeleton pf-t-light  pf-m-opaque-100' },
            _react2.default.createElement(
                _reactCore.CardHeader,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'skeleton skeleton-md' },
                    '\xA0'
                )
            ),
            _react2.default.createElement(
                _reactCore.CardBody,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'skeleton skeleton-lg' },
                    '\xA0'
                )
            ),
            _react2.default.createElement(
                _reactCore.CardFooter,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'skeleton skeleton-sm' },
                    '\xA0'
                )
            )
        ),
        _react2.default.createElement(
            _reactCore.Card,
            { className: 'ins-c-rules-card ins-c-card__skeleton pf-t-light  pf-m-opaque-100' },
            _react2.default.createElement(
                _reactCore.CardHeader,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'skeleton skeleton-md' },
                    '\xA0'
                )
            ),
            _react2.default.createElement(
                _reactCore.CardBody,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'skeleton skeleton-lg' },
                    '\xA0'
                )
            ),
            _react2.default.createElement(
                _reactCore.CardFooter,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'skeleton skeleton-sm' },
                    '\xA0'
                )
            )
        ),
        _react2.default.createElement(
            _reactCore.Card,
            { className: 'ins-c-rules-card ins-c-card__skeleton pf-t-light  pf-m-opaque-100' },
            _react2.default.createElement(
                _reactCore.CardHeader,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'skeleton skeleton-md' },
                    '\xA0'
                )
            ),
            _react2.default.createElement(
                _reactCore.CardBody,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'skeleton skeleton-lg' },
                    '\xA0'
                )
            ),
            _react2.default.createElement(
                _reactCore.CardFooter,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'skeleton skeleton-sm' },
                    '\xA0'
                )
            )
        ),
        _react2.default.createElement(
            _reactCore.Card,
            { className: 'ins-c-rules-card ins-c-card__skeleton pf-t-light  pf-m-opaque-100' },
            _react2.default.createElement(
                _reactCore.CardHeader,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'skeleton skeleton-md' },
                    '\xA0'
                )
            ),
            _react2.default.createElement(
                _reactCore.CardBody,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'skeleton skeleton-lg' },
                    '\xA0'
                )
            ),
            _react2.default.createElement(
                _reactCore.CardFooter,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'skeleton skeleton-sm' },
                    '\xA0'
                )
            )
        )
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