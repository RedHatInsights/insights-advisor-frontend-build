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

/***/ "./src/SmartComponents/Actions/ListActions.js":
/*!****************************************************!*\
  !*** ./src/SmartComponents/Actions/ListActions.js ***!
  \****************************************************/
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

var _sortBy2 = __webpack_require__(/*! lodash/sortBy */ "./node_modules/lodash/sortBy.js");

var _sortBy3 = _interopRequireDefault(_sortBy2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _insightsFrontendComponents = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");

var _reactCore = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");

var _reactTimeago = __webpack_require__(/*! react-timeago */ "./node_modules/react-timeago/lib/index.js");

var _reactTimeago2 = _interopRequireDefault(_reactTimeago);

__webpack_require__(/*! ./_actions.scss */ "./src/SmartComponents/Actions/_actions.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListActions = function (_Component) {
    (0, _inherits3.default)(ListActions, _Component);

    function ListActions(props) {
        (0, _classCallCheck3.default)(this, ListActions);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ListActions.__proto__ || Object.getPrototypeOf(ListActions)).call(this, props));

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
        _this.onSortChange = _this.onSortChange.bind(_this);
        _this.toggleCol = _this.toggleCol.bind(_this);
        _this.limitRows = _this.limitRows.bind(_this);
        _this.setPage = _this.setPage.bind(_this);
        _this.setPerPage = _this.setPerPage.bind(_this);
        _this.parseProductCode = _this.parseProductCode.bind(_this);
        _this.onSearch = _this.onSearch.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(ListActions, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var response = this.props.AdvisorStore.mediumRiskRules;
            document.getElementById('root').classList.add('actions__list');

            var rule = response.rules.find(function (obj) {
                return obj.rule_id === _this2.props.match.params.id;
            });
            this.setState({ rule: rule });

            var response2 = this.props.AdvisorStore.impactedSystems;
            var rows = [];
            for (var i = 0; i < response2.length; i++) {
                rows.push({ cells: [this.parseProductCode(response2[i].product_code), response2[i].hostname === '' ? response2[i].system_id : response2[i].hostname, _react2.default.createElement(_reactTimeago2.default, { key: i, date: response2[i].created_at })] });
            }

            this.setState({ unfilteredRows: rows });
            this.setState({ rows: rows });
        }
    }, {
        key: 'componentDidUnMount',
        value: function componentDidUnMount() {
            document.getElementById('root').classList.remove('actions__list');
        }
    }, {
        key: 'onSearch',
        value: function onSearch(value) {
            var lowerCaseValue = value.toLowerCase();
            var rows = this.state.unfilteredRows.filter(function (row) {
                return row.cells[0].toLowerCase().indexOf(lowerCaseValue) !== -1 || row.cells[1].toLowerCase().indexOf(lowerCaseValue) !== -1;
            });
            this.setState((0, _extends3.default)({}, this.state, {
                rows: rows
            }));
        }
    }, {
        key: 'parseProductCode',
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
        key: 'toggleCol',
        value: function toggleCol(_event, key, selected) {
            var _state = this.state,
                rows = _state.rows,
                page = _state.page,
                itemsPerPage = _state.itemsPerPage;

            var firstIndex = page === 1 ? 0 : page * itemsPerPage - itemsPerPage;
            rows[firstIndex + key].selected = selected;
            this.setState((0, _extends3.default)({}, this.state, {
                rows: rows
            }));
        }
    }, {
        key: 'onSortChange',
        value: function onSortChange(_event, key, direction) {
            var sortedRows = (0, _sortBy3.default)(this.state.rows, [function (e) {
                return e.cells[key];
            }]);
            this.setState((0, _extends3.default)({}, this.state, {
                rows: _insightsFrontendComponents.SortDirection.up === direction ? sortedRows : sortedRows.reverse(),
                sortBy: {
                    index: key,
                    direction: direction
                }
            }));
        }
    }, {
        key: 'limitRows',
        value: function limitRows() {
            var _state2 = this.state,
                page = _state2.page,
                itemsPerPage = _state2.itemsPerPage;

            var numberOfItems = this.state.rows.length;
            var lastPage = Math.ceil(numberOfItems / itemsPerPage);
            var lastIndex = page === lastPage ? numberOfItems : page * itemsPerPage;
            var firstIndex = page === 1 ? 0 : page * itemsPerPage - itemsPerPage;

            switch (this.state.rows.length === 0) {
                case true:
                    this.setState((0, _extends3.default)({}, this.state, {
                        rows: [{ cells: ['No Results'] }]
                    }));
                    break;
                default:
                    return this.state.rows.slice(firstIndex, lastIndex);
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
        key: 'render',
        value: function render() {
            var rows = this.limitRows();

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    _insightsFrontendComponents.PageHeader,
                    null,
                    _react2.default.createElement(_insightsFrontendComponents.PageHeaderTitle, { title: this.state.rule.description })
                ),
                _react2.default.createElement(
                    _insightsFrontendComponents.Main,
                    { className: 'actions__list' },
                    _react2.default.createElement(
                        _reactCore.Stack,
                        { gutter: 'md' },
                        _react2.default.createElement(
                            _reactCore.StackItem,
                            null,
                            _react2.default.createElement(
                                _reactCore.Grid,
                                { gutter: 'md' },
                                _react2.default.createElement(
                                    _reactCore.GridItem,
                                    { md: 8, sm: 12 },
                                    _react2.default.createElement('div', { className: 'actions__description', dangerouslySetInnerHTML: { __html: this.state.rule.summary_html } })
                                ),
                                _react2.default.createElement(
                                    _reactCore.GridItem,
                                    { md: 4, sm: 12 },
                                    _react2.default.createElement(
                                        _reactCore.Grid,
                                        { gutter: 'sm', className: 'actions__detail' },
                                        _react2.default.createElement(
                                            _reactCore.GridItem,
                                            { sm: 12, md: 12 },
                                            ' ',
                                            _react2.default.createElement(_insightsFrontendComponents.Ansible, { unsupported: this.state.rule.ansible }),
                                            ' '
                                        ),
                                        _react2.default.createElement(
                                            _reactCore.GridItem,
                                            { sm: 8, md: 12 },
                                            _react2.default.createElement(
                                                _reactCore.Grid,
                                                { className: 'ins-l-icon-group__vertical', sm: 4, md: 12 },
                                                _react2.default.createElement(
                                                    _reactCore.GridItem,
                                                    null,
                                                    ' ',
                                                    _react2.default.createElement(_insightsFrontendComponents.Battery, { label: 'Impact', severity: this.state.rule.rec_impact }),
                                                    ' '
                                                ),
                                                _react2.default.createElement(
                                                    _reactCore.GridItem,
                                                    null,
                                                    ' ',
                                                    _react2.default.createElement(_insightsFrontendComponents.Battery, { label: 'Likelihood', severity: this.state.rule.rec_likelihood }),
                                                    ' '
                                                ),
                                                _react2.default.createElement(
                                                    _reactCore.GridItem,
                                                    null,
                                                    ' ',
                                                    _react2.default.createElement(_insightsFrontendComponents.Battery, { label: 'Total Risk', severity: this.state.rule.resolution_risk }),
                                                    ' '
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            _reactCore.GridItem,
                                            { sm: 4, md: 12 },
                                            _react2.default.createElement(_insightsFrontendComponents.Battery, { label: 'Risk Of Change', severity: 3 })
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactCore.StackItem,
                            null,
                            _react2.default.createElement(_insightsFrontendComponents.SimpleTableFilter, { onFilterChange: this.onSearch, placeholder: 'Find a system', buttonTitle: 'Search' })
                        ),
                        _react2.default.createElement(
                            _reactCore.StackItem,
                            null,
                            _react2.default.createElement(_insightsFrontendComponents.Table, {
                                className: 'impacted-systems-table',
                                onItemSelect: this.toggleCol,
                                hasCheckbox: true,
                                header: this.state.cols,
                                sortBy: this.state.sortBy,
                                rows: rows,
                                onSort: this.onSortChange,
                                footer: _react2.default.createElement(_insightsFrontendComponents.Pagination, {
                                    numberOfItems: this.state.rows.length,
                                    onPerPageSelect: this.setPerPage,
                                    page: this.state.page,
                                    onSetPage: this.setPage,
                                    itemsPerPage: this.state.itemsPerPage
                                })
                            })
                        )
                    )
                )
            );
        }
    }]);
    return ListActions;
}(_react.Component);

ListActions.propTypes = {
    match: _propTypes2.default.any,
    AdvisorStore: _propTypes2.default.object
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return (0, _extends3.default)({}, state, ownProps);
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(ListActions));

/***/ }),

/***/ "./src/SmartComponents/Actions/ViewActions.js":
/*!****************************************************!*\
  !*** ./src/SmartComponents/Actions/ViewActions.js ***!
  \****************************************************/
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

var _sortBy2 = __webpack_require__(/*! lodash/sortBy */ "./node_modules/lodash/sortBy.js");

var _sortBy3 = _interopRequireDefault(_sortBy2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _insightsFrontendComponents = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");

var _reactCore = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");

var _AppActions = __webpack_require__(/*! ../../AppActions */ "./src/AppActions.js");

var AppActions = _interopRequireWildcard(_AppActions);

var _Loading = __webpack_require__(/*! ../../PresentationalComponents/Loading/Loading */ "./src/PresentationalComponents/Loading/Loading.js");

var _Loading2 = _interopRequireDefault(_Loading);

__webpack_require__(/*! ./_actions.scss */ "./src/SmartComponents/Actions/_actions.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ViewActions = function (_Component) {
    (0, _inherits3.default)(ViewActions, _Component);

    function ViewActions(props) {
        (0, _classCallCheck3.default)(this, ViewActions);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ViewActions.__proto__ || Object.getPrototypeOf(ViewActions)).call(this, props));

        _this.state = {
            summary: '',
            cols: ['Rule', 'Likelihood', 'Impact', 'Total Risk', 'Systems', 'Ansible'],
            rows: [],
            sortBy: {},
            itemsPerPage: 10,
            page: 1,
            things: []
        };
        _this.onSortChange = _this.onSortChange.bind(_this);
        _this.toggleCol = _this.toggleCol.bind(_this);
        _this.limitRows = _this.limitRows.bind(_this);
        _this.setPage = _this.setPage.bind(_this);
        _this.setPerPage = _this.setPerPage.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(ViewActions, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.getElementById('root').classList.add('actions__view');
            // TODO: implement server supported pagination in this component, page_size 1000? wtf yo 😏
            // TODO: filtering based on route will also be done here, but waiting for api...
            this.props.fetchRules({ page_size: 1000 }); // eslint-disable-line camelcase
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var _this2 = this;

            var getRandomInt = function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max)) + 1;
            };

            if (this.props.rules !== prevProps.rules) {
                var rules = this.props.rules.results;
                this.setState({ summary: this.props.rules.summary });

                var rows = [];
                rules.map(function (value, key) {
                    rows.push({
                        cells: [_react2.default.createElement(
                            _reactRouterDom.Link,
                            {
                                key: key,
                                to: '/actions/' + _this2.props.match.params.type + '/' + value.rule_id
                            },
                            value.description
                        ), _react2.default.createElement(_insightsFrontendComponents.Battery, {
                            key: key,
                            label: 'Likelihood',
                            labelHidden: true,
                            severity: value.rec_likelihood || getRandomInt(4)
                        }), _react2.default.createElement(_insightsFrontendComponents.Battery, {
                            key: key,
                            label: 'Impact',
                            labelHidden: true,
                            severity: value.rec_impact || getRandomInt(4)
                        }), _react2.default.createElement(_insightsFrontendComponents.Battery, {
                            key: key,
                            label: 'Total Risk',
                            labelHidden: true,
                            severity: value.resolution_risk || getRandomInt(4)
                        }), _react2.default.createElement(
                            'div',
                            { key: key },
                            value.hitCount || getRandomInt(100)
                        ), _react2.default.createElement(_insightsFrontendComponents.Ansible, {
                            key: key,
                            unsupported: value.ansible
                        })]
                    });
                });

                this.setState({ rows: rows });
            }
        }
    }, {
        key: 'toggleCol',
        value: function toggleCol(_event, key, selected) {
            var _state = this.state,
                rows = _state.rows,
                page = _state.page,
                itemsPerPage = _state.itemsPerPage;

            var firstIndex = page === 1 ? 0 : page * itemsPerPage - itemsPerPage;
            rows[firstIndex + key].selected = selected;
            this.setState((0, _extends3.default)({}, this.state, {
                rows: rows
            }));
        }
    }, {
        key: 'onSortChange',
        value: function onSortChange(_event, key, direction) {
            var sortedRows = (0, _sortBy3.default)(this.state.rows, [function (e) {
                return e.cells[key];
            }]);
            this.setState((0, _extends3.default)({}, this.state, {
                rows: _insightsFrontendComponents.SortDirection.up === direction ? sortedRows : sortedRows.reverse(),
                sortBy: {
                    index: key,
                    direction: direction
                }
            }));
        }
    }, {
        key: 'limitRows',
        value: function limitRows() {
            var _state2 = this.state,
                page = _state2.page,
                itemsPerPage = _state2.itemsPerPage;

            var numberOfItems = this.state.rows.length;
            var lastPage = Math.ceil(numberOfItems / itemsPerPage);
            var lastIndex = page === lastPage ? numberOfItems : page * itemsPerPage;
            var firstIndex = page === 1 ? 0 : page * itemsPerPage - itemsPerPage;
            return this.state.rows.slice(firstIndex, lastIndex);
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
        key: 'parseUrlTitle',
        value: function parseUrlTitle() {
            var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            var parsedTitle = title.split('-');
            return parsedTitle.length > 1 ? parsedTitle[0] + ' ' + parsedTitle[1] + ' Actions' : '' + parsedTitle;
        }
    }, {
        key: 'render',
        value: function render() {
            var rulesFetchStatus = this.props.rulesFetchStatus;

            var rows = this.limitRows();
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    _insightsFrontendComponents.PageHeader,
                    null,
                    _react2.default.createElement(_insightsFrontendComponents.PageHeaderTitle, {
                        className: 'actions__view--title',
                        title: this.parseUrlTitle(this.props.match.params.type)
                    })
                ),
                _react2.default.createElement(
                    _insightsFrontendComponents.Main,
                    null,
                    _react2.default.createElement(
                        _reactCore.Stack,
                        { gutter: 'md' },
                        _react2.default.createElement(
                            _reactCore.StackItem,
                            null,
                            _react2.default.createElement(
                                'p',
                                null,
                                this.state.summary
                            )
                        ),
                        _react2.default.createElement(
                            _reactCore.StackItem,
                            { className: 'advisor-l-actions__filters' },
                            'Filters'
                        ),
                        rulesFetchStatus === 'fulfilled' && _react2.default.createElement(
                            _reactCore.StackItem,
                            { className: 'advisor-l-actions__table' },
                            _react2.default.createElement(_insightsFrontendComponents.Table, {
                                className: 'rules-table',
                                onItemSelect: this.toggleCol,
                                hasCheckbox: false,
                                header: this.state.cols,
                                sortBy: this.state.sortBy,
                                rows: rows,
                                onSort: this.onSortChange,
                                footer: _react2.default.createElement(_insightsFrontendComponents.Pagination, {
                                    numberOfItems: this.state.rows.length,
                                    onPerPageSelect: this.setPerPage,
                                    page: this.state.page,
                                    onSetPage: this.setPage,
                                    itemsPerPage: this.state.itemsPerPage
                                })
                            })
                        ),
                        rulesFetchStatus === 'pending' && _react2.default.createElement(_Loading2.default, null)
                    )
                )
            );
        }
    }]);
    return ViewActions;
}(_react.Component);

ViewActions.propTypes = {
    match: _propTypes2.default.any,
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

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ViewActions));

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