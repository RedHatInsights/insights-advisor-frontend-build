(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/PresentationalComponents/ConditionalLink/ConditionalLink.js":
/*!*************************************************************************!*\
  !*** ./src/PresentationalComponents/ConditionalLink/ConditionalLink.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  condition: _propTypes2.default.any.isRequired,
  wrap: _propTypes2.default.any.isRequired,
  children: _propTypes2.default.any.isRequired
};

exports.default = ConditionalLink;

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/2.js.map