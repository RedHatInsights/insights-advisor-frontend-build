(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Rules"],{

/***/ "./src/PresentationalComponents/Rules/Rules.js":
/*!*****************************************************!*\
  !*** ./src/PresentationalComponents/Rules/Rules.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _insightsFrontendComponents = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _asyncComponent = __webpack_require__(/*! ../../Utilities/asyncComponent */ "./src/Utilities/asyncComponent.js");

var _asyncComponent2 = _interopRequireDefault(_asyncComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListRules = (0, _asyncComponent2.default)(function () {
    return __webpack_require__.e(/*! import() | ListRules */ "ListRules").then(__webpack_require__.t.bind(null, /*! ./ListRules */ "./src/PresentationalComponents/Rules/ListRules.js", 7));
});
var ViewRule = (0, _asyncComponent2.default)(function () {
    return __webpack_require__.e(/*! import() | ListRules */ "ListRules").then(__webpack_require__.t.bind(null, /*! ./ViewRule */ "./src/PresentationalComponents/Rules/ViewRule.js", 7));
});

var Rules = function Rules() {
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            _insightsFrontendComponents.PageHeader,
            null,
            _react2.default.createElement(_insightsFrontendComponents.PageHeaderTitle, { title: 'Rules' })
        ),
        _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/advisor/rules', component: ListRules }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/advisor/rules/:id', component: ViewRule })
        )
    );
};

exports.default = Rules;

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/Rules.js.map