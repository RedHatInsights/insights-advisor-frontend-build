(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ListActions"],{

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/_baseMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_baseOrderBy.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseOrderBy.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseMap = __webpack_require__(/*! ./_baseMap */ "./node_modules/lodash/_baseMap.js"),
    baseSortBy = __webpack_require__(/*! ./_baseSortBy */ "./node_modules/lodash/_baseSortBy.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    compareMultiple = __webpack_require__(/*! ./_compareMultiple */ "./node_modules/lodash/_compareMultiple.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  var index = -1;
  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),

/***/ "./node_modules/lodash/_baseSortBy.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseSortBy.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_compareAscending.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_compareAscending.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),

/***/ "./node_modules/lodash/_compareMultiple.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_compareMultiple.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var compareAscending = __webpack_require__(/*! ./_compareAscending */ "./node_modules/lodash/_compareAscending.js");

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),

/***/ "./node_modules/lodash/sortBy.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/sortBy.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js"),
    baseOrderBy = __webpack_require__(/*! ./_baseOrderBy */ "./node_modules/lodash/_baseOrderBy.js"),
    baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

module.exports = sortBy;


/***/ }),

/***/ "./node_modules/react-timeago/lib/dateParser.js":
/*!******************************************************!*\
  !*** ./node_modules/react-timeago/lib/dateParser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dateParser;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function dateParser(date) {
  var parsed = new Date(date);
  if (!Number.isNaN(parsed.valueOf())) {
    return parsed;
  }

  var parts = String(date).match(/\d+/g);
  if (parts == null || parts.length <= 2) {
    return parsed;
  } else {
    var _parts$map = parts.map(function (x) {
      return parseInt(x);
    }),
        _parts$map2 = _toArray(_parts$map),
        firstP = _parts$map2[0],
        secondP = _parts$map2[1],
        restPs = _parts$map2.slice(2);

    var correctedParts = [firstP, secondP - 1].concat(_toConsumableArray(restPs));
    var isoDate = new Date(Date.UTC.apply(Date, _toConsumableArray(correctedParts)));
    return isoDate;
  }
}

/***/ }),

/***/ "./node_modules/react-timeago/lib/defaultFormatter.js":
/*!************************************************************!*\
  !*** ./node_modules/react-timeago/lib/defaultFormatter.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaultFormatter;
function defaultFormatter(value, unit, suffix) {
  if (value !== 1) {
    unit += 's';
  }
  return value + ' ' + unit + ' ' + suffix;
}

/***/ }),

/***/ "./node_modules/react-timeago/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-timeago/lib/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _defaultFormatter = __webpack_require__(/*! ./defaultFormatter */ "./node_modules/react-timeago/lib/defaultFormatter.js");

var _defaultFormatter2 = _interopRequireDefault(_defaultFormatter);

var _dateParser = __webpack_require__(/*! ./dateParser */ "./node_modules/react-timeago/lib/dateParser.js");

var _dateParser2 = _interopRequireDefault(_dateParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = React.Component;


// Just some simple constants for readability
var MINUTE = 60;
var HOUR = MINUTE * 60;
var DAY = HOUR * 24;
var WEEK = DAY * 7;
var MONTH = DAY * 30;
var YEAR = DAY * 365;

var TimeAgo = function (_Component) {
  _inherits(TimeAgo, _Component);

  function TimeAgo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TimeAgo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TimeAgo.__proto__ || Object.getPrototypeOf(TimeAgo)).call.apply(_ref, [this].concat(args))), _this), _this.isStillMounted = false, _this.tick = function (refresh) {
      if (!_this.isStillMounted || !_this.props.live) {
        return;
      }

      var then = (0, _dateParser2.default)(_this.props.date).valueOf();
      if (!then) {
        console.warn('[react-timeago] Invalid Date provided');
        return;
      }

      var now = _this.props.now();
      var seconds = Math.round(Math.abs(now - then) / 1000);

      var unboundPeriod = seconds < MINUTE ? 1000 : seconds < HOUR ? 1000 * MINUTE : seconds < DAY ? 1000 * HOUR : 0;
      var period = Math.min(Math.max(unboundPeriod, _this.props.minPeriod * 1000), _this.props.maxPeriod * 1000);

      if (period) {
        _this.timeoutId = setTimeout(_this.tick, period);
      }

      if (!refresh) {
        _this.forceUpdate();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TimeAgo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.isStillMounted = true;
      if (this.props.live) {
        this.tick(true);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(lastProps) {
      if (this.props.live !== lastProps.live || this.props.date !== lastProps.date) {
        if (!this.props.live && this.timeoutId) {
          clearTimeout(this.timeoutId);
        }
        this.tick();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.isStillMounted = false;
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = undefined;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      /* eslint-disable no-unused-vars */
      var _props = this.props,
          date = _props.date,
          formatter = _props.formatter,
          Komponent = _props.component,
          live = _props.live,
          minPeriod = _props.minPeriod,
          maxPeriod = _props.maxPeriod,
          title = _props.title,
          now = _props.now,
          passDownProps = _objectWithoutProperties(_props, ['date', 'formatter', 'component', 'live', 'minPeriod', 'maxPeriod', 'title', 'now']);
      /* eslint-enable no-unused-vars */


      var then = (0, _dateParser2.default)(date).valueOf();
      if (!then) {
        return null;
      }
      var timeNow = now();
      var seconds = Math.round(Math.abs(timeNow - then) / 1000);
      var suffix = then < timeNow ? 'ago' : 'from now';

      var _ref2 = seconds < MINUTE ? [Math.round(seconds), 'second'] : seconds < HOUR ? [Math.round(seconds / MINUTE), 'minute'] : seconds < DAY ? [Math.round(seconds / HOUR), 'hour'] : seconds < WEEK ? [Math.round(seconds / DAY), 'day'] : seconds < MONTH ? [Math.round(seconds / WEEK), 'week'] : seconds < YEAR ? [Math.round(seconds / MONTH), 'month'] : [Math.round(seconds / YEAR), 'year'],
          _ref3 = _slicedToArray(_ref2, 2),
          value = _ref3[0],
          unit = _ref3[1];

      var passDownTitle = typeof title === 'undefined' ? typeof date === 'string' ? date : (0, _dateParser2.default)(date).toISOString().substr(0, 16).replace('T', ' ') : title;

      var spreadProps = Komponent === 'time' ? Object.assign({}, passDownProps, {
        dateTime: (0, _dateParser2.default)(date).toISOString()
      }) : passDownProps;

      var nextFormatter = _defaultFormatter2.default.bind(null, value, unit, suffix);

      return React.createElement(
        Komponent,
        _extends({}, spreadProps, { title: passDownTitle }),
        this.props.formatter(value, unit, suffix, then, nextFormatter)
      );
    }
  }]);

  return TimeAgo;
}(Component);

TimeAgo.displayName = 'TimeAgo';
TimeAgo.defaultProps = {
  live: true,
  component: 'time',
  minPeriod: 0,
  maxPeriod: Infinity,
  formatter: _defaultFormatter2.default,
  now: function now() {
    return Date.now();
  }
};
exports.default = TimeAgo;

/***/ }),

/***/ "./src/Helpers/breadcrumbs.js":
/*!************************************!*\
  !*** ./src/Helpers/breadcrumbs.js ***!
  \************************************/
/*! exports provided: onNavigate, parseBreadcrumbs, buildBreadcrumbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNavigate", function() { return onNavigate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseBreadcrumbs", function() { return parseBreadcrumbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildBreadcrumbs", function() { return buildBreadcrumbs; });
function onNavigate(_event, _item, key) {
  history.go(-key);
}
function parseBreadcrumbs(breadcrumbs, params, hops) {
  if (breadcrumbs[0].navigate === '/rules') {
    return breadcrumbs;
  } else {
    var crumbs = [];

    if (hops >= 1) {
      crumbs.push({
        title: breadcrumbs[0].title,
        navigate: breadcrumbs[0].navigate
      });
    }

    if (hops === 2) {
      crumbs.push({
        title: params.type.replace('-', ' '),
        navigate: breadcrumbs[0].navigate + '/' + params.type
      });
    }

    return crumbs;
  }
}
function buildBreadcrumbs(match, hops) {
  var breadcrumbs = [];
  breadcrumbs.push({
    title: match.path.split('/')[1],
    navigate: '/' + match.path.split('/')[1]
  });
  return parseBreadcrumbs(breadcrumbs, match.params, hops);
}

/***/ }),

/***/ "./src/PresentationalComponents/Loading/Loading.js":
/*!*********************************************************!*\
  !*** ./src/PresentationalComponents/Loading/Loading.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Loading = function Loading() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, " Loading... ");
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./src/SmartComponents/Actions/ListActions.js":
/*!****************************************************!*\
  !*** ./src/SmartComponents/Actions/ListActions.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/sortBy */ "./node_modules/lodash/sortBy.js");
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var react_timeago__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-timeago */ "./node_modules/react-timeago/lib/index.js");
/* harmony import */ var react_timeago__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_timeago__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Helpers_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Helpers/breadcrumbs.js */ "./src/Helpers/breadcrumbs.js");
/* harmony import */ var _actions_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_actions.scss */ "./src/SmartComponents/Actions/_actions.scss");
/* harmony import */ var _actions_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_actions_scss__WEBPACK_IMPORTED_MODULE_15__);


















var ListActions =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ListActions, _Component);

  function ListActions(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ListActions);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ListActions).call(this, props));
    _this.state = {
      cols: ['Type', 'Name', 'Reported'],
      unfilteredRows: [],
      rows: [],
      rule: {
        description: ''
      },
      sortBy: {},
      itemsPerPage: 10,
      page: 1
    };
    _this.onSortChange = _this.onSortChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    _this.toggleCol = _this.toggleCol.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    _this.limitRows = _this.limitRows.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    _this.setPage = _this.setPage.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    _this.setPerPage = _this.setPerPage.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    _this.parseProductCode = _this.parseProductCode.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    _this.onSearch = _this.onSearch.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ListActions, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var response = this.props.AdvisorStore.mediumRiskRules;
      document.getElementById('root').classList.add('actions__list');
      var rule = response.rules.find(function (obj) {
        return obj.rule_id === _this2.props.match.params.id;
      });
      this.setState({
        rule: rule
      });
      var response2 = this.props.AdvisorStore.impactedSystems;
      var rows = [];

      for (var i = 0; i < response2.length; i++) {
        rows.push({
          cells: [this.parseProductCode(response2[i].product_code), response2[i].hostname === '' ? response2[i].system_id : response2[i].hostname, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_timeago__WEBPACK_IMPORTED_MODULE_13___default.a, {
            key: i,
            date: response2[i].created_at
          })]
        });
      }

      this.setState({
        unfilteredRows: rows
      });
      this.setState({
        rows: rows
      });
    }
  }, {
    key: "componentDidUnMount",
    value: function componentDidUnMount() {
      document.getElementById('root').classList.remove('actions__list');
    }
  }, {
    key: "onSearch",
    value: function onSearch(value) {
      var lowerCaseValue = value.toLowerCase();
      var rows = this.state.unfilteredRows.filter(function (row) {
        return row.cells[0].toLowerCase().indexOf(lowerCaseValue) !== -1 || row.cells[1].toLowerCase().indexOf(lowerCaseValue) !== -1;
      });
      this.setState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, this.state, {
        rows: rows
      }));
    }
  }, {
    key: "parseProductCode",
    value: function parseProductCode(productCode) {
      var productName = '';

      switch (productCode) {
        case 'rhel':
          productName = 'RHEL Server';
          break;

        default:
          productName = 'Undefined';
      }

      return productName;
    }
  }, {
    key: "toggleCol",
    value: function toggleCol(_event, key, selected) {
      var _this$state = this.state,
          rows = _this$state.rows,
          page = _this$state.page,
          itemsPerPage = _this$state.itemsPerPage;
      var firstIndex = page === 1 ? 0 : page * itemsPerPage - itemsPerPage;
      rows[firstIndex + key].selected = selected;
      this.setState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, this.state, {
        rows: rows
      }));
    }
  }, {
    key: "onSortChange",
    value: function onSortChange(_event, key, direction) {
      var sortedRows = lodash_sortBy__WEBPACK_IMPORTED_MODULE_7___default()(this.state.rows, [function (e) {
        return e.cells[key];
      }]);

      this.setState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, this.state, {
        rows: _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["SortDirection"].up === direction ? sortedRows : sortedRows.reverse(),
        sortBy: {
          index: key,
          direction: direction
        }
      }));
    }
  }, {
    key: "limitRows",
    value: function limitRows() {
      var _this$state2 = this.state,
          page = _this$state2.page,
          itemsPerPage = _this$state2.itemsPerPage;
      var numberOfItems = this.state.rows.length;
      var lastPage = Math.ceil(numberOfItems / itemsPerPage);
      var lastIndex = page === lastPage ? numberOfItems : page * itemsPerPage;
      var firstIndex = page === 1 ? 0 : page * itemsPerPage - itemsPerPage;

      switch (this.state.rows.length === 0) {
        case true:
          this.setState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, this.state, {
            rows: [{
              cells: ['No Results']
            }]
          }));
          break;

        default:
          return this.state.rows.slice(firstIndex, lastIndex);
      }
    }
  }, {
    key: "setPage",
    value: function setPage(page) {
      this.setState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, this.state, {
        page: page
      }));
    }
  }, {
    key: "setPerPage",
    value: function setPerPage(amount) {
      this.setState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, this.state, {
        itemsPerPage: amount
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var breadcrumbs = this.props.breadcrumbs;
      var rows = this.limitRows();
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["Breadcrumbs"], {
        current: this.state.rule.description,
        items: breadcrumbs[0] !== undefined ? Object(_Helpers_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_14__["parseBreadcrumbs"])(breadcrumbs, this.props.match.params, 2) : Object(_Helpers_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_14__["buildBreadcrumbs"])(this.props.match, 2),
        onNavigate: _Helpers_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_14__["onNavigate"]
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["PageHeader"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["PageHeaderTitle"], {
        title: this.state.rule.description
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["Main"], {
        className: "actions__list"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["Stack"], {
        gutter: "md"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
        gutter: "md"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["GridItem"], {
        md: 8,
        sm: 12
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "actions__description",
        dangerouslySetInnerHTML: {
          __html: this.state.rule.summary_html
        }
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["GridItem"], {
        md: 4,
        sm: 12
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
        gutter: "sm",
        className: "actions__detail"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["GridItem"], {
        sm: 12,
        md: 12
      }, " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["Ansible"], {
        unsupported: this.state.rule.ansible
      }), " "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["GridItem"], {
        sm: 8,
        md: 12
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
        className: "ins-l-icon-group__vertical",
        sm: 4,
        md: 12
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["GridItem"], null, " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["Battery"], {
        label: "Impact",
        severity: this.state.rule.rec_impact
      }), " "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["GridItem"], null, " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["Battery"], {
        label: "Likelihood",
        severity: this.state.rule.rec_likelihood
      }), " "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["GridItem"], null, " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["Battery"], {
        label: "Total Risk",
        severity: this.state.rule.resolution_risk
      }), " "))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["GridItem"], {
        sm: 4,
        md: 12
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["Battery"], {
        label: "Risk Of Change",
        severity: 3
      })))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["SimpleTableFilter"], {
        onFilterChange: this.onSearch,
        placeholder: "Find a system",
        buttonTitle: "Search"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["Table"], {
        className: "impacted-systems-table",
        onItemSelect: this.toggleCol,
        hasCheckbox: true,
        header: this.state.cols,
        sortBy: this.state.sortBy,
        rows: rows,
        onSort: this.onSortChange,
        footer: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["Pagination"], {
          numberOfItems: this.state.rows.length,
          onPerPageSelect: this.setPerPage,
          page: this.state.page,
          onSetPage: this.setPage,
          itemsPerPage: this.state.itemsPerPage
        })
      })))));
    }
  }]);

  return ListActions;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

ListActions.propTypes = {
  breadcrumbs: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.array,
  match: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.any,
  AdvisorStore: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
    breadcrumbs: state.AdvisorStore.breadcrumbs
  }, state, ownProps);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_9__["routerParams"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps)(ListActions)));

/***/ }),

/***/ "./src/SmartComponents/Actions/ViewActions.js":
/*!****************************************************!*\
  !*** ./src/SmartComponents/Actions/ViewActions.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/sortBy */ "./node_modules/lodash/sortBy.js");
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _AppActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../AppActions */ "./src/AppActions.js");
/* harmony import */ var _PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../PresentationalComponents/Loading/Loading */ "./src/PresentationalComponents/Loading/Loading.js");
/* harmony import */ var _Helpers_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../Helpers/breadcrumbs.js */ "./src/Helpers/breadcrumbs.js");
/* harmony import */ var _actions_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_actions.scss */ "./src/SmartComponents/Actions/_actions.scss");
/* harmony import */ var _actions_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_actions_scss__WEBPACK_IMPORTED_MODULE_17__);




















var ViewActions =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ViewActions, _Component);

  function ViewActions(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ViewActions);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ViewActions).call(this, props));
    _this.state = {
      summary: '',
      cols: ['Rule', 'Likelihood', 'Impact', 'Total Risk', 'Systems', 'Ansible'],
      rows: [],
      sortBy: {},
      itemsPerPage: 10,
      page: 1,
      things: []
    };
    _this.onSortChange = _this.onSortChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    _this.toggleCol = _this.toggleCol.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    _this.setPage = _this.setPage.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    _this.setPerPage = _this.setPerPage.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ViewActions, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.getElementById('root').classList.add('actions__view'); // TODO: filtering based on route will also be done here, but waiting for api...

      this.props.fetchRules({
        page_size: this.state.itemsPerPage
      }); // eslint-disable-line camelcase
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      var getRandomInt = function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max)) + 1;
      };

      if (this.props.rules !== prevProps.rules) {
        var rules = this.props.rules.results;
        this.setState({
          summary: this.props.rules.summary
        });
        var rows = [];
        rules.map(function (value, key) {
          rows.push({
            cells: [react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
              key: key,
              to: "/actions/".concat(_this2.props.match.params.type, "/").concat(value.rule_id)
            }, value.description), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__["Battery"], {
              key: key,
              label: "Likelihood",
              labelHidden: true,
              severity: value.rec_likelihood || getRandomInt(4)
            }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__["Battery"], {
              key: key,
              label: "Impact",
              labelHidden: true,
              severity: value.rec_impact || getRandomInt(4)
            }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__["Battery"], {
              key: key,
              label: "Total Risk",
              labelHidden: true,
              severity: value.resolution_risk || getRandomInt(4)
            }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
              key: key
            }, value.hitCount || getRandomInt(100)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__["Ansible"], {
              key: key,
              unsupported: value.ansible
            })]
          });
        });
        this.setState({
          rows: rows
        });
      }
    }
  }, {
    key: "toggleCol",
    value: function toggleCol(_event, key, selected) {
      var _this$state = this.state,
          rows = _this$state.rows,
          page = _this$state.page,
          itemsPerPage = _this$state.itemsPerPage;
      var firstIndex = page === 1 ? 0 : page * itemsPerPage - itemsPerPage;
      rows[firstIndex + key].selected = selected;
      this.setState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, this.state, {
        rows: rows
      }));
    }
  }, {
    key: "onSortChange",
    value: function onSortChange(_event, key, direction) {
      var sortedRows = lodash_sortBy__WEBPACK_IMPORTED_MODULE_7___default()(this.state.rows, [function (e) {
        return e.cells[key];
      }]);

      this.setState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, this.state, {
        rows: _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__["SortDirection"].up === direction ? sortedRows : sortedRows.reverse(),
        sortBy: {
          index: key,
          direction: direction
        }
      }));
    }
  }, {
    key: "setPage",
    value: function setPage(page) {
      this.setState(function () {
        return {
          page: page
        };
      });
      this.props.fetchRules({
        page: page,
        page_size: this.state.itemsPerPage
      }); // eslint-disable-line camelcase
    }
  }, {
    key: "setPerPage",
    value: function setPerPage(itemsPerPage) {
      this.setState(function () {
        return {
          itemsPerPage: itemsPerPage
        };
      });
      this.props.fetchRules({
        page_size: itemsPerPage
      }); // eslint-disable-line camelcase
    }
  }, {
    key: "parseUrlTitle",
    value: function parseUrlTitle() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var parsedTitle = title.split('-');
      return parsedTitle.length > 1 ? "".concat(parsedTitle[0], " ").concat(parsedTitle[1], " Actions") : "".concat(parsedTitle);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          rulesFetchStatus = _this$props.rulesFetchStatus,
          rules = _this$props.rules,
          breadcrumbs = _this$props.breadcrumbs;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__["Breadcrumbs"], {
        current: this.parseUrlTitle(this.props.match.params.type),
        items: breadcrumbs[0] !== undefined ? breadcrumbs : Object(_Helpers_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_16__["buildBreadcrumbs"])(this.props.match, 1),
        onNavigate: _Helpers_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_16__["onNavigate"]
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__["PageHeader"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__["PageHeaderTitle"], {
        className: "actions__view--title",
        title: this.parseUrlTitle(this.props.match.params.type)
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__["Main"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["Stack"], {
        gutter: "md"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, this.state.summary)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["StackItem"], {
        className: "advisor-l-actions__filters"
      }, "Filters"), rulesFetchStatus === 'fulfilled' && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["StackItem"], {
        className: "advisor-l-actions__table"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__["Table"], {
        className: "rules-table",
        onItemSelect: this.toggleCol,
        hasCheckbox: false,
        header: this.state.cols,
        sortBy: this.state.sortBy,
        rows: this.state.rows,
        onSort: this.onSortChange,
        footer: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__["Pagination"], {
          numberOfItems: rules.count,
          onPerPageSelect: this.setPerPage,
          page: this.state.page,
          onSetPage: this.setPage,
          itemsPerPage: this.state.itemsPerPage
        })
      })), rulesFetchStatus === 'pending' && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_15__["default"], null))));
    }
  }]);

  return ViewActions;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

ViewActions.propTypes = {
  breadcrumbs: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.array,
  fetchRules: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  match: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.any,
  rulesFetchStatus: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
  rules: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
    breadcrumbs: state.AdvisorStore.breadcrumbs,
    rules: state.AdvisorStore.rules,
    rulesFetchStatus: state.AdvisorStore.rulesFetchStatus
  }, ownProps);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchRules: function fetchRules(url) {
      return dispatch(_AppActions__WEBPACK_IMPORTED_MODULE_14__["fetchRules"](url));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__["routerParams"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapDispatchToProps)(ViewActions)));

/***/ }),

/***/ "./src/SmartComponents/Actions/_actions.scss":
/*!***************************************************!*\
  !*** ./src/SmartComponents/Actions/_actions.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/ListActions.js.map