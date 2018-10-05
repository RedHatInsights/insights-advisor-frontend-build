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

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _asyncComponent = __webpack_require__(/*! ../../Utilities/asyncComponent */ "./src/Utilities/asyncComponent.js");

var _asyncComponent2 = _interopRequireDefault(_asyncComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionsOverview = (0, _asyncComponent2.default)(function () {
    return __webpack_require__.e(/*! import() | ActionsOverview */ "ActionsOverview").then(__webpack_require__.t.bind(null, /*! ./ActionsOverview */ "./src/SmartComponents/Actions/ActionsOverview.js", 7));
});
var ViewActions = (0, _asyncComponent2.default)(function () {
    return __webpack_require__.e(/*! import() | ListActions */ "ListActions").then(__webpack_require__.t.bind(null, /*! ./ViewActions */ "./src/SmartComponents/Actions/ViewActions.js", 7));
});
var ListActions = (0, _asyncComponent2.default)(function () {
    return __webpack_require__.e(/*! import() | ListActions */ "ListActions").then(__webpack_require__.t.bind(null, /*! ./ListActions */ "./src/SmartComponents/Actions/ListActions.js", 7));
});

var Actions = function Actions() {
    return _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/actions', component: ActionsOverview }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/actions/:type', component: ViewActions }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/actions/:type/:id', component: ListActions })
    );
};

exports.default = (0, _reactRouterDom.withRouter)(Actions);

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/Actions.js.map