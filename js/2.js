(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/PresentationalComponents/ConditionalLink/ConditionalLink.js":
/*!*************************************************************************!*\
  !*** ./src/PresentationalComponents/ConditionalLink/ConditionalLink.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

/**
 * This component conditionally wraps a child based on a condition
 * If the condition is true, then the component will wrap the child
 * If the condition is false, the component won't render, but the children will
 */

var ConditionalLink = function ConditionalLink(_ref) {
  var condition = _ref.condition,
      wrap = _ref.wrap,
      children = _ref.children;
  return condition ? wrap(children) : children;
};

ConditionalLink.propTypes = {
  condition: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any.isRequired,
  wrap: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ConditionalLink);

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/2.js.map