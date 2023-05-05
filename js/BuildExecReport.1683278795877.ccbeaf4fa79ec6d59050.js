(self["webpackChunkadvisor_frontend"] = self["webpackChunkadvisor_frontend"] || []).push([["BuildExecReport"],{

/***/ "./src/PresentationalComponents/ExecutiveReport/BuildExecReport.js":
/*!*************************************************************************!*\
  !*** ./src/PresentationalComponents/ExecutiveReport/BuildExecReport.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuildExecReport": () => (/* binding */ BuildExecReport)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/truncate */ "./node_modules/lodash/truncate.js");
/* harmony import */ var lodash_truncate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_truncate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redhat_cloud_services_frontend_components_pdf_generator_dist_esm_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-pdf-generator/dist/esm/index */ "./node_modules/@redhat-cloud-services/frontend-components-pdf-generator/dist/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../AppConstants */ "./src/AppConstants.js");
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-pdf/renderer */ "./node_modules/@react-pdf/renderer/lib/react-pdf.browser.es.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");









var BuildExecReport = function BuildExecReport(_ref) {
  var statsSystems = _ref.statsSystems,
      statsReports = _ref.statsReports,
      topActiveRec = _ref.topActiveRec,
      intl = _ref.intl;

  var calcPercent = function calcPercent(value, total) {
    return Math.round(Number(value / total * 100));
  };

  var severityPie = [{
    x: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].critical),
    y: calcPercent(statsReports.total_risk[4], statsReports.total)
  }, {
    x: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].important),
    y: calcPercent(statsReports.total_risk[3], statsReports.total)
  }, {
    x: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].moderate),
    y: calcPercent(statsReports.total_risk[2], statsReports.total)
  }, {
    x: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].low),
    y: calcPercent(statsReports.total_risk[1], statsReports.total)
  }];
  var severityRows = [[intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].severity), intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].poundOfRecs)]].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Object.entries(statsReports.total_risk).map(function (_ref2) {
    var _ref3 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];

    return [_AppConstants__WEBPACK_IMPORTED_MODULE_5__.TOTAL_RISK_LABEL[key].props.children, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].recNumAndPercentage, {
      count: value,
      total: calcPercent(value, statsReports.total)
    })];
  }).reverse()));
  var categoryPie = [{
    x: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].availability),
    y: calcPercent(statsReports.category.Availability, statsReports.total)
  }, {
    x: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].performance),
    y: calcPercent(statsReports.category.Performance, statsReports.total)
  }, {
    x: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].security),
    y: calcPercent(statsReports.category.Security, statsReports.total)
  }, {
    x: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].stability),
    y: calcPercent(statsReports.category.Stability, statsReports.total)
  }];
  var categoryRows = [[intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].category), intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].poundOfRecs)]].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Object.entries(statsReports.category).map(function (_ref4) {
    var _ref5 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, 2),
        key = _ref5[0],
        value = _ref5[1];

    return [key, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].recNumAndPercentage, {
      count: value,
      total: calcPercent(value, statsReports.total)
    })];
  })));

  var rulesDesc = function rulesDesc(rule) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__.Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__.Text, {
      style: {
        fontWeight: 700
      }
    }, " ", rule.description), "\xA0", lodash_truncate__WEBPACK_IMPORTED_MODULE_2___default()(rule.summary, {
      length: 280
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
    key: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].insightsHeader)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_redhat_cloud_services_frontend_components_pdf_generator_dist_esm_index__WEBPACK_IMPORTED_MODULE_8__.Paragraph, null, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].execReportHeader, {
    systems: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__.Text, {
      style: {
        fontWeight: 700
      }
    }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].execReportHeaderSystems, {
      systems: statsSystems.total
    })),
    risks: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_6__.Text, {
      style: {
        fontWeight: 700
      }
    }, ' ', intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].execReportHeaderRisks, {
      risks: statsReports.total
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_redhat_cloud_services_frontend_components_pdf_generator_dist_esm_index__WEBPACK_IMPORTED_MODULE_8__.Section, {
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].severityHeader)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_redhat_cloud_services_frontend_components_pdf_generator_dist_esm_index__WEBPACK_IMPORTED_MODULE_8__.Column, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_redhat_cloud_services_frontend_components_pdf_generator_dist_esm_index__WEBPACK_IMPORTED_MODULE_8__.Table, {
    withHeader: true,
    rows: severityRows
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_redhat_cloud_services_frontend_components_pdf_generator_dist_esm_index__WEBPACK_IMPORTED_MODULE_8__.Column, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_redhat_cloud_services_frontend_components_pdf_generator_dist_esm_index__WEBPACK_IMPORTED_MODULE_8__.Chart, {
    chartType: "pie",
    subTitle: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].severityHeader),
    title: "100",
    data: severityPie,
    colorSchema: 'multi'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_redhat_cloud_services_frontend_components_pdf_generator_dist_esm_index__WEBPACK_IMPORTED_MODULE_8__.Section, {
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].categoryHeader)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_redhat_cloud_services_frontend_components_pdf_generator_dist_esm_index__WEBPACK_IMPORTED_MODULE_8__.Column, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_redhat_cloud_services_frontend_components_pdf_generator_dist_esm_index__WEBPACK_IMPORTED_MODULE_8__.Table, {
    withHeader: true,
    rows: categoryRows
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_redhat_cloud_services_frontend_components_pdf_generator_dist_esm_index__WEBPACK_IMPORTED_MODULE_8__.Column, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_redhat_cloud_services_frontend_components_pdf_generator_dist_esm_index__WEBPACK_IMPORTED_MODULE_8__.Chart, {
    chartType: "pie",
    subTitle: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].categoryHeader),
    title: "100",
    data: categoryPie
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_redhat_cloud_services_frontend_components_pdf_generator_dist_esm_index__WEBPACK_IMPORTED_MODULE_8__.Section, {
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].top3RulesHeader),
    withColumn: false
  }, topActiveRec.data.map(function (rule, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_redhat_cloud_services_frontend_components_pdf_generator_dist_esm_index__WEBPACK_IMPORTED_MODULE_8__.Panel, {
      key: key,
      description: rulesDesc(rule)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_redhat_cloud_services_frontend_components_pdf_generator_dist_esm_index__WEBPACK_IMPORTED_MODULE_8__.PanelItem, {
      title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].systemsExposed)
    }, "".concat(rule.impacted_systems_count)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_redhat_cloud_services_frontend_components_pdf_generator_dist_esm_index__WEBPACK_IMPORTED_MODULE_8__.PanelItem, {
      title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].totalRisk)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_redhat_cloud_services_frontend_components_pdf_generator_dist_esm_index__WEBPACK_IMPORTED_MODULE_8__.InsightsLabel, {
      variant: rule.total_risk
    })));
  })));
};
BuildExecReport.propTypes = {
  statsSystems: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  statsReports: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  topActiveRec: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  intl: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
};

/***/ }),

/***/ "./node_modules/lodash/_asciiSize.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_asciiSize.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js");

/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
var asciiSize = baseProperty('length');

module.exports = asciiSize;


/***/ }),

/***/ "./node_modules/lodash/_asciiToArray.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_asciiToArray.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),

/***/ "./node_modules/lodash/_castSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_castSlice.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSlice = __webpack_require__(/*! ./_baseSlice */ "./node_modules/lodash/_baseSlice.js");

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),

/***/ "./node_modules/lodash/_hasUnicode.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hasUnicode.js ***!
  \********************************************/
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),

/***/ "./node_modules/lodash/_stringSize.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stringSize.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var asciiSize = __webpack_require__(/*! ./_asciiSize */ "./node_modules/lodash/_asciiSize.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    unicodeSize = __webpack_require__(/*! ./_unicodeSize */ "./node_modules/lodash/_unicodeSize.js");

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return hasUnicode(string)
    ? unicodeSize(string)
    : asciiSize(string);
}

module.exports = stringSize;


/***/ }),

/***/ "./node_modules/lodash/_stringToArray.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_stringToArray.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var asciiToArray = __webpack_require__(/*! ./_asciiToArray */ "./node_modules/lodash/_asciiToArray.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    unicodeToArray = __webpack_require__(/*! ./_unicodeToArray */ "./node_modules/lodash/_unicodeToArray.js");

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),

/***/ "./node_modules/lodash/_unicodeSize.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_unicodeSize.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    ++result;
  }
  return result;
}

module.exports = unicodeSize;


/***/ }),

/***/ "./node_modules/lodash/_unicodeToArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_unicodeToArray.js ***!
  \************************************************/
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),

/***/ "./node_modules/lodash/truncate.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/truncate.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js"),
    castSlice = __webpack_require__(/*! ./_castSlice */ "./node_modules/lodash/_castSlice.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isRegExp = __webpack_require__(/*! ./isRegExp */ "./node_modules/lodash/isRegExp.js"),
    stringSize = __webpack_require__(/*! ./_stringSize */ "./node_modules/lodash/_stringSize.js"),
    stringToArray = __webpack_require__(/*! ./_stringToArray */ "./node_modules/lodash/_stringToArray.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/** Used as default options for `_.truncate`. */
var DEFAULT_TRUNC_LENGTH = 30,
    DEFAULT_TRUNC_OMISSION = '...';

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Truncates `string` if it's longer than the given maximum string length.
 * The last characters of the truncated string are replaced with the omission
 * string which defaults to "...".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to truncate.
 * @param {Object} [options={}] The options object.
 * @param {number} [options.length=30] The maximum string length.
 * @param {string} [options.omission='...'] The string to indicate text is omitted.
 * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
 * @returns {string} Returns the truncated string.
 * @example
 *
 * _.truncate('hi-diddly-ho there, neighborino');
 * // => 'hi-diddly-ho there, neighbo...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': ' '
 * });
 * // => 'hi-diddly-ho there,...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': /,? +/
 * });
 * // => 'hi-diddly-ho there...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'omission': ' [...]'
 * });
 * // => 'hi-diddly-ho there, neig [...]'
 */
function truncate(string, options) {
  var length = DEFAULT_TRUNC_LENGTH,
      omission = DEFAULT_TRUNC_OMISSION;

  if (isObject(options)) {
    var separator = 'separator' in options ? options.separator : separator;
    length = 'length' in options ? toInteger(options.length) : length;
    omission = 'omission' in options ? baseToString(options.omission) : omission;
  }
  string = toString(string);

  var strLength = string.length;
  if (hasUnicode(string)) {
    var strSymbols = stringToArray(string);
    strLength = strSymbols.length;
  }
  if (length >= strLength) {
    return string;
  }
  var end = length - stringSize(omission);
  if (end < 1) {
    return omission;
  }
  var result = strSymbols
    ? castSlice(strSymbols, 0, end).join('')
    : string.slice(0, end);

  if (separator === undefined) {
    return result + omission;
  }
  if (strSymbols) {
    end += (result.length - end);
  }
  if (isRegExp(separator)) {
    if (string.slice(end).search(separator)) {
      var match,
          substring = result;

      if (!separator.global) {
        separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
      }
      separator.lastIndex = 0;
      while ((match = separator.exec(substring))) {
        var newEnd = match.index;
      }
      result = result.slice(0, newEnd === undefined ? end : newEnd);
    }
  } else if (string.indexOf(baseToString(separator), end) != end) {
    var index = result.lastIndexOf(separator);
    if (index > -1) {
      result = result.slice(0, index);
    }
  }
  return result + omission;
}

module.exports = truncate;


/***/ }),

/***/ "?9157":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/BuildExecReport.23b9c654db28feb97fca98dbff287b62.js.map