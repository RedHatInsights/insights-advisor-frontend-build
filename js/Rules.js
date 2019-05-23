(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Rules"],{

/***/ "./src/SmartComponents/Rules/Rules.js":
/*!********************************************!*\
  !*** ./src/SmartComponents/Rules/Rules.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components */ "./node_modules/@redhat-cloud-services/frontend-components/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities/asyncComponent */ "./src/Utilities/asyncComponent.js");




var ListRules = Object(_Utilities_asyncComponent__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
  return Promise.all(/*! import() | ListRules */[__webpack_require__.e("Details~ListRules~Lists"), __webpack_require__.e("ListRules~Lists"), __webpack_require__.e("ListRules~Overview"), __webpack_require__.e("ListRules")]).then(__webpack_require__.bind(null, /*! ./ListRules */ "./src/SmartComponents/Rules/ListRules.js"));
});

var Rules = function Rules() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_1__["PageHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_redhat_cloud_services_frontend_components__WEBPACK_IMPORTED_MODULE_1__["PageHeaderTitle"], {
    title: "Rules"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/rules",
    component: ListRules
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Rules);

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/Rules.js.map