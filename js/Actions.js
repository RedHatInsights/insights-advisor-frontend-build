(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Actions"],{

/***/ "./src/SmartComponents/Actions/Actions.js":
/*!************************************************!*\
  !*** ./src/SmartComponents/Actions/Actions.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities/asyncComponent */ "./src/Utilities/asyncComponent.js");




var ActionsOverview = Object(_Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
  return __webpack_require__.e(/*! import() | ActionsOverview */ "ActionsOverview").then(__webpack_require__.bind(null, /*! ./ActionsOverview */ "./src/SmartComponents/Actions/ActionsOverview.js"));
});
var ViewActions = Object(_Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
  return __webpack_require__.e(/*! import() | ListActions */ "ListActions").then(__webpack_require__.bind(null, /*! ./ViewActions */ "./src/SmartComponents/Actions/ViewActions.js"));
});
var ListActions = Object(_Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
  return __webpack_require__.e(/*! import() | ListActions */ "ListActions").then(__webpack_require__.bind(null, /*! ./ListActions */ "./src/SmartComponents/Actions/ListActions.js"));
});

var Actions = function Actions() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/actions",
    component: ActionsOverview
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/actions/:type",
    component: ViewActions
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/actions/:type/:id",
    component: ListActions
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_2__["routerParams"])(Actions));

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/Actions.js.map