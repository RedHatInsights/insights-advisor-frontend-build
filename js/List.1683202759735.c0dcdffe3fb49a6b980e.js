(self["webpackChunkadvisor_frontend"] = self["webpackChunkadvisor_frontend"] || []).push([["List"],{

/***/ "./src/PresentationalComponents/Common/DownloadHelper.js":
/*!***************************************************************!*\
  !*** ./src/PresentationalComponents/Common/DownloadHelper.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications_redux_actions_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/redux/actions/notifications */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/redux/actions/notifications.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/helpers */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/esm/helpers/helpers.js");
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AppConstants */ "./src/AppConstants.js");
/* harmony import */ var _Utilities_Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Utilities/Api */ "./src/Utilities/Api.js");
/* harmony import */ var _Common_Tables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Common/Tables */ "./src/PresentationalComponents/Common/Tables.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







var fileName = function fileName(exportTable) {
  var defaultParams = {
    date: new Date().toISOString().replace(/[T:]/g, '-').split('.')[0] + '-utc'
  };
  return "Insights-Advisor_".concat(exportTable, "--").concat(defaultParams.date);
};

var downloadHelper = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(exportTable, format, filters, selectedTags, workloads, SID, dispatch) {
    var options, data, formattedData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            options = (selectedTags === null || selectedTags === void 0 ? void 0 : selectedTags.length) && {
              tags: selectedTags
            };
            workloads && (options = _objectSpread(_objectSpread({}, options), (0,_Common_Tables__WEBPACK_IMPORTED_MODULE_6__.workloadQueryBuilder)(workloads, SID)));
            dispatch((0,_redhat_cloud_services_frontend_components_notifications_redux_actions_notifications__WEBPACK_IMPORTED_MODULE_3__.addNotification)(_AppConstants__WEBPACK_IMPORTED_MODULE_4__.exportNotifications.pending));
            _context.next = 6;
            return (0,_Utilities_Api__WEBPACK_IMPORTED_MODULE_5__.Get)("".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_4__.BASE_URL, "/export/").concat(exportTable, ".").concat(format === 'json' ? 'json' : 'csv'), {}, _objectSpread(_objectSpread({}, filters), options)).then(function (result) {
              dispatch((0,_redhat_cloud_services_frontend_components_notifications_redux_actions_notifications__WEBPACK_IMPORTED_MODULE_3__.addNotification)(_AppConstants__WEBPACK_IMPORTED_MODULE_4__.exportNotifications.success));
              return result;
            })["catch"](function () {
              return dispatch((0,_redhat_cloud_services_frontend_components_notifications_redux_actions_notifications__WEBPACK_IMPORTED_MODULE_3__.addNotification)(_AppConstants__WEBPACK_IMPORTED_MODULE_4__.exportNotifications.error));
            });

          case 6:
            data = _context.sent.data;
            formattedData = format === 'json' ? JSON.stringify(data) : data;
            (0,_redhat_cloud_services_frontend_components_utilities_helpers__WEBPACK_IMPORTED_MODULE_7__.downloadFile)(formattedData, fileName(exportTable), format);
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            throw "".concat(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function downloadHelper(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (downloadHelper);

/***/ }),

/***/ "./src/PresentationalComponents/Export/SystemsPdf.js":
/*!***********************************************************!*\
  !*** ./src/PresentationalComponents/Export/SystemsPdf.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Export_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_Export.scss */ "./src/PresentationalComponents/Export/_Export.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _SystemsPdfBuild__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SystemsPdfBuild */ "./src/PresentationalComponents/Export/SystemsPdfBuild.js");
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../AppConstants */ "./src/AppConstants.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_pdf_generator_dist_esm_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-pdf-generator/dist/esm/index */ "./node_modules/@redhat-cloud-services/frontend-components-pdf-generator/dist/esm/index.js");
/* harmony import */ var _Utilities_Api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Utilities/Api */ "./src/Utilities/Api.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Common_Tables__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Common/Tables */ "./src/PresentationalComponents/Common/Tables.js");






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }













var SystemsPdf = function SystemsPdf(_ref) {
  var filters = _ref.filters;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_14__["default"])();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var selectedTags = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(function (_ref2) {
    var AdvisorStore = _ref2.AdvisorStore;
    return AdvisorStore === null || AdvisorStore === void 0 ? void 0 : AdvisorStore.selectedTags;
  });
  var workloads = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(function (_ref3) {
    var AdvisorStore = _ref3.AdvisorStore;
    return AdvisorStore === null || AdvisorStore === void 0 ? void 0 : AdvisorStore.workloads;
  });
  var SID = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(function (_ref4) {
    var AdvisorStore = _ref4.AdvisorStore;
    return AdvisorStore === null || AdvisorStore === void 0 ? void 0 : AdvisorStore.SID;
  });

  var dataFetch = /*#__PURE__*/function () {
    var _ref5 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
      var options, systems, firstPage, otherPages;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              options = (selectedTags === null || selectedTags === void 0 ? void 0 : selectedTags.length) && {
                tags: selectedTags
              };
              workloads && (options = _objectSpread(_objectSpread({}, options), (0,_Common_Tables__WEBPACK_IMPORTED_MODULE_13__.workloadQueryBuilder)(workloads, SID)));
              _context.next = 5;
              return (0,_Utilities_Api__WEBPACK_IMPORTED_MODULE_9__.Get)("".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_8__.BASE_URL, "/export/systems/"), {}, _objectSpread(_objectSpread({}, filters), options));

            case 5:
              systems = _context.sent.data;
              firstPage = (0,_SystemsPdfBuild__WEBPACK_IMPORTED_MODULE_7__.leadPage)({
                systemsTotal: systems === null || systems === void 0 ? void 0 : systems.length,
                systems: systems.slice(0, 18),
                filters: filters,
                tags: selectedTags,
                intl: intl
              });
              otherPages = systems.slice(18, 982).reduce(function (resultArray, item, index) {
                var chunkIndex = Math.floor(index / 31);
                !resultArray[chunkIndex] && (resultArray[chunkIndex] = []);
                resultArray[chunkIndex].push(item);
                return resultArray;
              }, []);
              setLoading(false);
              return _context.abrupt("return", [firstPage].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(otherPages.map(function (pageSystems, index) {
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_SystemsPdfBuild__WEBPACK_IMPORTED_MODULE_7__.TablePage, {
                  key: index,
                  page: index,
                  systems: pageSystems,
                  intl: intl
                });
              }))));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function dataFetch() {
      return _ref5.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_redhat_cloud_services_frontend_components_pdf_generator_dist_esm_index__WEBPACK_IMPORTED_MODULE_15__.DownloadButton, {
    groupName: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_11__["default"].redHatInsights),
    allPagesHaveTitle: false,
    label: loading ? intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_11__["default"].loading) : intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_11__["default"].exportPdf),
    asyncFunction: dataFetch,
    buttonProps: _objectSpread({
      variant: '',
      component: 'button',
      className: 'pf-c-dropdown__menu-item adv-c-dropdown-systems-pdf__menu-item'
    }, loading ? {
      isDisabled: true
    } : null),
    reportName: "".concat(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_11__["default"].insightsHeader), ":"),
    type: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_11__["default"].systems),
    fileName: "Advisor_systems--".concat(new Date().toUTCString().replace(/ /g, '-'), ".pdf"),
    size: [841.89, 595.28]
  });
};

SystemsPdf.propTypes = {
  filters: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),
  systemsCount: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SystemsPdf);

/***/ }),

/***/ "./src/PresentationalComponents/Export/SystemsPdfBuild.js":
/*!****************************************************************!*\
  !*** ./src/PresentationalComponents/Export/SystemsPdfBuild.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablePage": () => (/* binding */ TablePage),
/* harmony export */   "leadPage": () => (/* binding */ leadPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_pdf_generator_dist_esm_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-pdf-generator/dist/esm/index */ "./node_modules/@redhat-cloud-services/frontend-components-pdf-generator/dist/esm/index.js");
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-pdf/renderer */ "./node_modules/@react-pdf/renderer/lib/react-pdf.browser.es.js");
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AppConstants */ "./src/AppConstants.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_tokens_dist_esm_c_table_m_compact_cell_PaddingBottom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-tokens/dist/esm/c_table_m_compact_cell_PaddingBottom */ "./node_modules/@patternfly/react-tokens/dist/esm/c_table_m_compact_cell_PaddingBottom.js");
/* harmony import */ var _patternfly_react_tokens_dist_esm_c_table_m_compact_cell_PaddingLeft__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-tokens/dist/esm/c_table_m_compact_cell_PaddingLeft */ "./node_modules/@patternfly/react-tokens/dist/esm/c_table_m_compact_cell_PaddingLeft.js");
/* harmony import */ var _patternfly_react_tokens_dist_esm_c_table_m_compact_cell_PaddingTop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-tokens/dist/esm/c_table_m_compact_cell_PaddingTop */ "./node_modules/@patternfly/react-tokens/dist/esm/c_table_m_compact_cell_PaddingTop.js");
/* harmony import */ var _patternfly_react_tokens_dist_esm_chart_global_Fill_Color_700__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-tokens/dist/esm/chart_global_Fill_Color_700 */ "./node_modules/@patternfly/react-tokens/dist/esm/chart_global_Fill_Color_700.js");
/* harmony import */ var _patternfly_react_tokens_dist_esm_global_FontWeight_bold__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-tokens/dist/esm/global_FontWeight_bold */ "./node_modules/@patternfly/react-tokens/dist/esm/global_FontWeight_bold.js");
/* harmony import */ var _patternfly_react_tokens_dist_esm_global_link_Color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-tokens/dist/esm/global_link_Color */ "./node_modules/@patternfly/react-tokens/dist/esm/global_link_Color.js");
/* harmony import */ var _patternfly_react_tokens_dist_esm_global_spacer_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-tokens/dist/esm/global_spacer_md */ "./node_modules/@patternfly/react-tokens/dist/esm/global_spacer_md.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/* eslint-disable react/prop-types */













var styles = _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_3__.StyleSheet.create({
  bold: {
    fontWeight: _patternfly_react_tokens_dist_esm_global_FontWeight_bold__WEBPACK_IMPORTED_MODULE_8__["default"].value
  },
  link: {
    color: _patternfly_react_tokens_dist_esm_global_link_Color__WEBPACK_IMPORTED_MODULE_9__["default"].value
  },
  text: {
    marginTop: _patternfly_react_tokens_dist_esm_global_spacer_md__WEBPACK_IMPORTED_MODULE_10__["default"].value
  },
  nameColumn: {
    width: '220px'
  },
  header: {
    fontSize: 9,
    color: _patternfly_react_tokens_dist_esm_chart_global_Fill_Color_700__WEBPACK_IMPORTED_MODULE_11__["default"].value,
    paddingLeft: _patternfly_react_tokens_dist_esm_c_table_m_compact_cell_PaddingLeft__WEBPACK_IMPORTED_MODULE_12__["default"].value,
    paddingBottom: _patternfly_react_tokens_dist_esm_c_table_m_compact_cell_PaddingBottom__WEBPACK_IMPORTED_MODULE_13__["default"].value,
    paddingTop: _patternfly_react_tokens_dist_esm_c_table_m_compact_cell_PaddingTop__WEBPACK_IMPORTED_MODULE_14__["default"].value
  }
});
var TablePage = function TablePage(_ref) {
  var page = _ref.page,
      systems = _ref.systems,
      intl = _ref.intl;
  var header = [{
    value: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].name),
    style: styles.nameColumn
  }, {
    value: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].recommendations),
    style: {
      width: '100px',
      textAlign: 'center'
    }
  }, {
    value: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].critical),
    style: {
      width: '70px',
      textAlign: 'center'
    }
  }, {
    value: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].important),
    style: {
      width: '70px',
      textAlign: 'center'
    }
  }, {
    value: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].moderate),
    style: {
      width: '60px',
      textAlign: 'center'
    }
  }, {
    value: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].low),
    style: {
      width: '90px',
      textAlign: 'center'
    }
  }, {
    value: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].lastSeen),
    style: {
      marginLeft: '20px'
    }
  }];
  var hitColumns = ['hits', 'critical_hits', 'important_hits', 'moderate_hits', 'low_hits'];

  var headerBuilder = function headerBuilder(_ref2) {
    var value = _ref2.value,
        style = _ref2.style;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_3__.Text, {
      style: _objectSpread(_objectSpread(_objectSpread({}, style), styles.header), styles.bold)
    }, value);
  };

  var rowBuilder = function rowBuilder(_ref3) {
    var value = _ref3.value,
        style = _ref3.style;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_3__.Text, {
      style: style
    }, value);
  };

  var rows = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(systems.map(function (system) {
    var _Date$toUTCString$spl = new Date(system.last_seen).toUTCString().split(' '),
        _Date$toUTCString$spl2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_Date$toUTCString$spl, 5),
        date = _Date$toUTCString$spl2[1],
        month = _Date$toUTCString$spl2[2],
        year = _Date$toUTCString$spl2[3],
        time = _Date$toUTCString$spl2[4];

    var sysDate = "".concat(date, " ").concat(month, " ").concat(year, ", ").concat(time.split(':').slice(0, 2).join(':'), " UTC");
    return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_3__.Text, {
      key: system.system_uuid,
      style: styles.nameColumn
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_3__.Link, {
      style: styles.link,
      src: "".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_4__.BASE_URI, "/insights/advisor/systems/").concat(system.system_uuid, "/")
    }, system.display_name))].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(hitColumns.map(function (item) {
      return rowBuilder({
        style: {
          width: '10px'
        },
        value: system[item]
      });
    })), [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_3__.Text, {
      key: system.last_seen,
      style: {
        width: '100px'
      }
    }, "".concat(sysDate))]);
  }));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), {
    key: page
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_redhat_cloud_services_frontend_components_pdf_generator_dist_esm_index__WEBPACK_IMPORTED_MODULE_15__.Column, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_redhat_cloud_services_frontend_components_pdf_generator_dist_esm_index__WEBPACK_IMPORTED_MODULE_15__.Table, {
    withHeader: true,
    rows: [header.map(function (item) {
      return headerBuilder(item);
    })].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(rows))
  })));
};
TablePage.propTypes = {
  systems: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  page: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number),
  intl: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().any)
};
var leadPage = function leadPage(_ref4) {
  var systemsTotal = _ref4.systemsTotal,
      systems = _ref4.systems,
      filters = _ref4.filters,
      tags = _ref4.tags,
      intl = _ref4.intl;
  delete filters.offset;
  delete filters.limit;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), {
    key: "".concat(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].insightsHeader), ": ").concat(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].systems))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_3__.Text, {
    key: "sys-count",
    style: styles.text
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].sysTableCount, {
    systems: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_3__.Text, {
      key: "sys-count-count",
      style: styles.bold
    }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].execReportHeaderSystems, {
      systems: systemsTotal
    }), systemsTotal > 1000 && intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].dueTo))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_3__.Text, {
    key: "sys-filters",
    style: styles.text
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].filtersApplied)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_3__.Text, {
    key: "sys-filters-values",
    style: styles.bold
  }, Object.entries(filters).map(function (value) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_3__.Text, {
      key: value
    }, "".concat(value[0], ": ").concat(value[1], "     "));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_3__.Text, {
    key: "sys-tags",
    style: styles.text
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].tagsApplied)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_3__.Text, {
    key: "sys-tags-values",
    style: styles.bold
  }, tags ? decodeURIComponent(tags) : intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].noTags)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_redhat_cloud_services_frontend_components_pdf_generator_dist_esm_index__WEBPACK_IMPORTED_MODULE_15__.Section, {
    key: "systems",
    title: "Systems"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(TablePage, {
    systems: systems,
    intl: intl
  })));
};
leadPage.propTypes = {
  systems: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  systemsTotal: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number),
  filters: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  tags: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().array),
  intl: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().any)
};

/***/ }),

/***/ "./src/PresentationalComponents/Labels/RuleLabels.js":
/*!***********************************************************!*\
  !*** ./src/PresentationalComponents/Labels/RuleLabels.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RuleLabels_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_RuleLabels.scss */ "./src/PresentationalComponents/Labels/_RuleLabels.scss");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tooltip/Tooltip */ "./node_modules/@patternfly/react-core/dist/esm/components/Tooltip/Tooltip.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Label_Label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Label/Label */ "./node_modules/@patternfly/react-core/dist/esm/components/Label/Label.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");








var RuleLabels = function RuleLabels(_ref) {
  var _rule$tags;

  var rule = _ref.rule,
      isCompact = _ref.isCompact,
      noMargin = _ref.noMargin;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, (rule === null || rule === void 0 ? void 0 : (_rule$tags = rule.tags) === null || _rule$tags === void 0 ? void 0 : _rule$tags.search('incident')) !== -1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
    content: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_3__["default"].incidentTooltip),
    position: _patternfly_react_core_dist_esm_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_5__.TooltipPosition.right
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Label_Label__WEBPACK_IMPORTED_MODULE_6__.Label, {
    color: "red",
    className: noMargin ? null : 'adv-c-label-incident',
    isCompact: isCompact
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_3__["default"].incident))), (rule === null || rule === void 0 ? void 0 : rule.rule_status) === 'disabled' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
    content: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_3__["default"].ruleIsDisabledTooltip),
    position: _patternfly_react_core_dist_esm_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_5__.TooltipPosition.right
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Label_Label__WEBPACK_IMPORTED_MODULE_6__.Label, {
    color: "gray",
    isCompact: isCompact
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_3__["default"].disabled))), (rule === null || rule === void 0 ? void 0 : rule.rule_status) === 'rhdisabled' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
    content: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_3__["default"].ruleIsDisabledTooltip),
    position: _patternfly_react_core_dist_esm_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_5__.TooltipPosition.right
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Label_Label__WEBPACK_IMPORTED_MODULE_6__.Label, {
    color: "gray",
    isCompact: isCompact
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_3__["default"].redhatDisabled))));
};

RuleLabels.propTypes = {
  rule: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  isCompact: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  noMargin: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
RuleLabels.defaultProps = {
  isCompact: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RuleLabels);

/***/ }),

/***/ "./src/PresentationalComponents/Loading/Loading.js":
/*!*********************************************************!*\
  !*** ./src/PresentationalComponents/Loading/Loading.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/Card */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/Card.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/CardBody */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardBody.js");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);





var Loading = function Loading() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Card_Card__WEBPACK_IMPORTED_MODULE_1__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_2__.CardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_3__.List, null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);

/***/ }),

/***/ "./src/PresentationalComponents/SystemsTable/Components/NoSystemsTable.js":
/*!********************************************************************************!*\
  !*** ./src/PresentationalComponents/SystemsTable/Components/NoSystemsTable.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_EmptyState_EmptyStateBody_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/EmptyState/EmptyStateBody.js */ "./node_modules/@patternfly/react-core/dist/esm/components/EmptyState/EmptyStateBody.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_EmptyState_EmptyState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/EmptyState/EmptyState.js */ "./node_modules/@patternfly/react-core/dist/esm/components/EmptyState/EmptyState.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Text/Text.js */ "./node_modules/@patternfly/react-core/dist/esm/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Text_TextContent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Text/TextContent.js */ "./node_modules/@patternfly/react-core/dist/esm/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Title_Title_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Title/Title.js */ "./node_modules/@patternfly/react-core/dist/esm/components/Title/Title.js");
/* harmony import */ var _patternfly_react_core_dist_esm_layouts_Bullseye_Bullseye_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/layouts/Bullseye/Bullseye.js */ "./node_modules/@patternfly/react-core/dist/esm/layouts/Bullseye/Bullseye.js");










var NoSystemsTable = function NoSystemsTable() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_layouts_Bullseye_Bullseye_js__WEBPACK_IMPORTED_MODULE_1__.Bullseye, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_EmptyState_EmptyState_js__WEBPACK_IMPORTED_MODULE_2__.EmptyState, {
    variant: _patternfly_react_core_dist_esm_components_EmptyState_EmptyState_js__WEBPACK_IMPORTED_MODULE_2__.EmptyStateVariant.full
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Title_Title_js__WEBPACK_IMPORTED_MODULE_3__.Title, {
    headingLevel: "h2",
    size: "lg"
  }, "No matching systems found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_EmptyState_EmptyStateBody_js__WEBPACK_IMPORTED_MODULE_4__.EmptyStateBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Text_TextContent_js__WEBPACK_IMPORTED_MODULE_5__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_6__.Text, {
    component: _patternfly_react_core_dist_esm_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_6__.TextVariants.p
  }, "To continue, edit your filter settings and search again.")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoSystemsTable);

/***/ }),

/***/ "./src/PresentationalComponents/SystemsTable/SystemsTable.js":
/*!*******************************************************************!*\
  !*** ./src/PresentationalComponents/SystemsTable/SystemsTable.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SystemsTable_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SystemsTable.scss */ "./src/PresentationalComponents/SystemsTable/SystemsTable.scss");
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../AppConstants */ "./src/AppConstants.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @patternfly/react-table/dist/esm */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/TableTypes.js");
/* harmony import */ var _Common_Tables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Common/Tables */ "./src/PresentationalComponents/Common/Tables.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Utilities_Api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Utilities/Api */ "./src/Utilities/Api.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Inventory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Inventory */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Inventory/InventoryTable.js");
/* harmony import */ var _Loading_Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Loading/Loading */ "./src/PresentationalComponents/Loading/Loading.js");
/* harmony import */ var _Export_SystemsPdf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Export/SystemsPdf */ "./src/PresentationalComponents/Export/SystemsPdf.js");
/* harmony import */ var _Common_DownloadHelper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Common/DownloadHelper */ "./src/PresentationalComponents/Common/DownloadHelper.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");
/* harmony import */ var _Store_AppReducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../Store/AppReducer */ "./src/Store/AppReducer.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../Store */ "./src/Store/index.js");
/* harmony import */ var _Services_Filters__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../Services/Filters */ "./src/Services/Filters.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_RBACHook__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/RBACHook */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/esm/RBACHook/RBACHook.js");
/* harmony import */ var _Components_NoSystemsTable__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Components/NoSystemsTable */ "./src/PresentationalComponents/SystemsTable/Components/NoSystemsTable.js");
/* harmony import */ var _scalprum_react_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @scalprum/react-core */ "webpack/sharing/consume/default/@scalprum/react-core/@scalprum/react-core?441a");
/* harmony import */ var _scalprum_react_core__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_scalprum_react_core__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _SystemsTableAssets__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./SystemsTableAssets */ "./src/PresentationalComponents/SystemsTable/SystemsTableAssets.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../helper */ "./src/PresentationalComponents/helper.js");






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

























var SystemsTable = function SystemsTable() {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_23__["default"])();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
  var store = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useStore)();

  var _useLoadModule = (0,_scalprum_react_core__WEBPACK_IMPORTED_MODULE_20__.useLoadModule)({
    appName: 'inventory',
    scope: 'inventory',
    module: './OsFilterHelpers'
  }),
      _useLoadModule2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useLoadModule, 1),
      _useLoadModule2$ = _useLoadModule2[0];

  _useLoadModule2$ = _useLoadModule2$ === void 0 ? {} : _useLoadModule2$;
  var toGroupSelectionValue = _useLoadModule2$.toGroupSelectionValue,
      buildOSFilterConfig = _useLoadModule2$.buildOSFilterConfig;

  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_18__.useLocation)(),
      search = _useLocation.search;

  var selectedTags = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (_ref) {
    var filters = _ref.filters;
    return filters.selectedTags;
  });
  var workloads = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (_ref2) {
    var filters = _ref2.filters;
    return filters.workloads;
  });
  var SID = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (_ref3) {
    var filters = _ref3.filters;
    return filters.SID;
  });
  var filters = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (_ref4) {
    var filters = _ref4.filters;
    return filters.sysState;
  });
  var operatingSystems = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (_ref5) {
    var entities = _ref5.entities;
    return (entities === null || entities === void 0 ? void 0 : entities.operatingSystems) || [];
  });

  var setFilters = function setFilters(filters) {
    return dispatch((0,_Services_Filters__WEBPACK_IMPORTED_MODULE_17__.updateSysFilters)(filters));
  };

  var permsExport = (0,_redhat_cloud_services_frontend_components_utilities_RBACHook__WEBPACK_IMPORTED_MODULE_24__.usePermissions)('advisor', _AppConstants__WEBPACK_IMPORTED_MODULE_6__.PERMS["export"]).hasAccess;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(true),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      filterBuilding = _useState2[0],
      setFilterBuilding = _useState2[1];

  var removeFilterParam = function removeFilterParam(param) {
    var filter = _objectSpread(_objectSpread({}, filters), {}, {
      offset: 0
    });

    delete filter[param];
    param === 'hits' && filter.hits === undefined && (filter.hits = ['yes']);
    setFilters(filter);
  };

  var addFilterParam = function addFilterParam(param, values) {
    // remove 'yes' from the hits filter if the user chooses any other filters (its always the first item)
    param === 'hits' && values.length > 1 && values.includes('yes') && values.shift();
    var passValue = param === _AppConstants__WEBPACK_IMPORTED_MODULE_6__.SYSTEM_FILTER_CATEGORIES.rhel_version.urlParam ? Object.values(values || {}).flatMap(function (majorOsVersion) {
      return Object.keys(majorOsVersion);
    }) : values;
    passValue.length > 0 ? setFilters(_objectSpread(_objectSpread({}, filters), {}, {
      offset: 0
    }, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, param, passValue))) : removeFilterParam(param);
  };

  var filterConfigItems = [{
    label: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.SYSTEM_FILTER_CATEGORIES.hits.title.toLowerCase(),
    type: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.SYSTEM_FILTER_CATEGORIES.hits.type,
    id: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.SYSTEM_FILTER_CATEGORIES.hits.urlParam,
    value: "checkbox-".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.SYSTEM_FILTER_CATEGORIES.hits.urlParam),
    filterValues: {
      key: "".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.SYSTEM_FILTER_CATEGORIES.hits.urlParam, "-filter"),
      onChange: function onChange(_e, values) {
        return addFilterParam(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.SYSTEM_FILTER_CATEGORIES.hits.urlParam, values);
      },
      value: filters.hits,
      items: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.SYSTEM_FILTER_CATEGORIES.hits.values
    }
  }, {
    label: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.SYSTEM_FILTER_CATEGORIES.incident.title.toLowerCase(),
    type: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.SYSTEM_FILTER_CATEGORIES.incident.type,
    id: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.SYSTEM_FILTER_CATEGORIES.incident.urlParam,
    value: "checkbox-".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.SYSTEM_FILTER_CATEGORIES.incident.urlParam),
    filterValues: {
      key: "".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.SYSTEM_FILTER_CATEGORIES.incident.urlParam, "-filter"),
      onChange: function onChange(_e, values) {
        addFilterParam(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.SYSTEM_FILTER_CATEGORIES.incident.urlParam, values);
      },
      value: filters.incident,
      items: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.SYSTEM_FILTER_CATEGORIES.incident.values
    }
  }].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(buildOSFilterConfig ? [buildOSFilterConfig({
    label: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.SYSTEM_FILTER_CATEGORIES.rhel_version.title.toLowerCase(),
    type: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.SYSTEM_FILTER_CATEGORIES.rhel_version.type,
    id: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.SYSTEM_FILTER_CATEGORIES.rhel_version.urlParam,
    value: toGroupSelectionValue(filters.rhel_version || []),
    onChange: function onChange(_e, value) {
      return addFilterParam(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.SYSTEM_FILTER_CATEGORIES.rhel_version.urlParam, value);
    }
  }, operatingSystems)] : []));

  var buildFilterChips = function buildFilterChips() {
    var localFilters = _objectSpread({}, filters);

    localFilters.hits && localFilters.hits.includes('yes') && delete localFilters.hits;
    delete localFilters.sort;
    delete localFilters.offset;
    delete localFilters.limit;
    return (0,_Common_Tables__WEBPACK_IMPORTED_MODULE_8__.pruneFilters)(localFilters, _AppConstants__WEBPACK_IMPORTED_MODULE_6__.SYSTEM_FILTER_CATEGORIES);
  };

  var activeFiltersConfig = {
    deleteTitle: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_14__["default"].resetFilters),
    filters: buildFilterChips(),
    onDelete: function onDelete(event, itemsToRemove, isAll) {
      if (isAll) {
        setFilters({
          sort: filters.sort,
          limit: filters.limit,
          offset: filters.offset,
          hits: ['all'],
          tags: selectedTags
        });
      } else {
        itemsToRemove.map(function (item) {
          var newFilter = (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, item.urlParam, Array.isArray(filters[item.urlParam]) ? filters[item.urlParam].filter(function (value) {
            return String(value) !== String(item.chips[0].value);
          }) : '');

          newFilter[item.urlParam].length > 0 ? setFilters(_objectSpread(_objectSpread({}, filters), newFilter)) : removeFilterParam(item.urlParam);
        });
      }
    }
  };

  var handleRefresh = function handleRefresh(options) {
    var display_name = options.display_name,
        hits = options.hits;

    var refreshedFilters = _objectSpread(_objectSpread(_objectSpread({}, options), display_name && {
      display_name: display_name
    }), hits && {
      hits: hits
    });

    (0,_Common_Tables__WEBPACK_IMPORTED_MODULE_8__.urlBuilder)(refreshedFilters, selectedTags);
  };

  var columns = (0,_SystemsTableAssets__WEBPACK_IMPORTED_MODULE_21__.systemsTableColumns)(intl);

  var createColumns = function createColumns(defaultColumns) {
    var mappedColumns = columns.map(function (column) {
      var correspondingColumn = defaultColumns.find(function (defaultColumn) {
        return defaultColumn.key === column.key;
      });
      return _objectSpread(_objectSpread({}, column), correspondingColumn);
    });
    return mappedColumns;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    var combinedFilters;

    if (search) {
      var paramsObject = (0,_Common_Tables__WEBPACK_IMPORTED_MODULE_8__.paramParser)();
      paramsObject.tags = selectedTags;
      paramsObject.sort !== undefined && (paramsObject.sort = paramsObject.sort[0]);
      paramsObject.display_name !== undefined && (paramsObject.display_name = paramsObject.display_name[0]);
      paramsObject.hits === undefined && (paramsObject.hits = ['all']);
      paramsObject.offset === undefined || isNaN(paramsObject.offset) ? paramsObject.offset = 0 : paramsObject.offset = Number(paramsObject.offset[0]);
      paramsObject.limit === undefined || isNaN(paramsObject.limit) ? paramsObject.limit = 20 : paramsObject.limit = Number(paramsObject.limit[0]);
      combinedFilters = _objectSpread(_objectSpread({}, filters), paramsObject);
      paramsObject.incident !== undefined && !Array.isArray(paramsObject.incident) && (paramsObject.incident = ["".concat(paramsObject.incident)]);
      setFilters(combinedFilters);
    } else if (filters.limit === undefined || filters.offset === undefined || filters.hits === undefined) {
      combinedFilters = _objectSpread(_objectSpread({}, filters), {}, {
        offset: 0,
        limit: 20,
        hits: ['all'],
        tags: selectedTags
      });
      setFilters(combinedFilters);
    }

    setFilterBuilding(false);
    (0,_Common_Tables__WEBPACK_IMPORTED_MODULE_8__.urlBuilder)(combinedFilters, selectedTags); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTags]);
  return !filterBuilding && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_redhat_cloud_services_frontend_components_Inventory__WEBPACK_IMPORTED_MODULE_25__["default"], {
    hideFilters: {
      all: true,
      name: false,
      tags: false
    },
    initialLoading: true,
    autoRefresh: true,
    showTags: true,
    disableDefaultColumns: true,
    customFilters: {
      advisorFilters: filters,
      workloads: workloads,
      SID: SID,
      selectedTags: selectedTags
    },
    columns: function columns(defaultColumns) {
      return createColumns(defaultColumns);
    },
    onLoad: function onLoad(_ref6) {
      var mergeWithEntities = _ref6.mergeWithEntities,
          INVENTORY_ACTION_TYPES = _ref6.INVENTORY_ACTION_TYPES,
          mergeWithDetail = _ref6.mergeWithDetail;
      store.replaceReducer((0,_Store__WEBPACK_IMPORTED_MODULE_16__.updateReducers)(_objectSpread(_objectSpread({}, mergeWithEntities((0,_Store_AppReducer__WEBPACK_IMPORTED_MODULE_15__.systemReducer)([], INVENTORY_ACTION_TYPES), {
        page: Number(filters.offset / filters.limit + 1 || 1),
        perPage: Number(filters.limit || 20)
      })), mergeWithDetail())));
    },
    getEntities: /*#__PURE__*/function () {
      var _ref7 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(_items, config, showTags, defaultGetEntities) {
        var _yield$Get;

        var per_page, page, orderBy, orderDirection, advisorFilters, filters, workloads, SID, sort, options, fetchedSystems, results;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                per_page = config.per_page, page = config.page, orderBy = config.orderBy, orderDirection = config.orderDirection, advisorFilters = config.advisorFilters, filters = config.filters, workloads = config.workloads, SID = config.SID;
                sort = "".concat(orderDirection === 'ASC' ? '' : '-').concat(orderBy === 'updated' && 'last_seen' || orderBy === 'operating_system' && 'rhel_version' || orderBy);
                options = (0,_helper__WEBPACK_IMPORTED_MODULE_22__.createOptions)(advisorFilters, page, per_page, sort, null, filters, selectedTags, workloads, SID, true);
                _context.next = 5;
                return (0,_Utilities_Api__WEBPACK_IMPORTED_MODULE_10__.Get)(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.SYSTEMS_FETCH_URL, {}, options);

              case 5:
                _context.t1 = _yield$Get = _context.sent;
                _context.t0 = _context.t1 === null;

                if (_context.t0) {
                  _context.next = 9;
                  break;
                }

                _context.t0 = _yield$Get === void 0;

              case 9:
                if (!_context.t0) {
                  _context.next = 13;
                  break;
                }

                _context.t2 = void 0;
                _context.next = 14;
                break;

              case 13:
                _context.t2 = _yield$Get.data;

              case 14:
                fetchedSystems = _context.t2;
                handleRefresh(options);
                _context.next = 18;
                return defaultGetEntities(fetchedSystems.data.map(function (system) {
                  return system.system_uuid;
                }), {
                  per_page: per_page,
                  hasItems: true,
                  fields: {
                    system_profile: ['operating_system']
                  }
                }, showTags);

              case 18:
                results = _context.sent;
                return _context.abrupt("return", Promise.resolve({
                  results: (0,_Common_Tables__WEBPACK_IMPORTED_MODULE_8__.mergeArraysByDiffKeys)(fetchedSystems.data, results.results),
                  total: fetchedSystems.meta.count
                }));

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3, _x4) {
        return _ref7.apply(this, arguments);
      };
    }(),
    tableProps: {
      isStickyHeader: true,
      variant: _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_26__.TableVariant.compact
    },
    isFullView: true,
    hasCheckbox: false,
    filterConfig: {
      items: filterConfigItems
    },
    activeFiltersConfig: activeFiltersConfig,
    noSystemsTable: _Components_NoSystemsTable__WEBPACK_IMPORTED_MODULE_19__["default"],
    exportConfig: {
      onSelect: function onSelect(_e, fileType) {
        return (0,_Common_DownloadHelper__WEBPACK_IMPORTED_MODULE_13__["default"])('systems', fileType, filters, selectedTags, workloads, SID, dispatch);
      },
      extraItems: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("li", {
        key: "download-pd",
        role: "menuitem"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_Export_SystemsPdf__WEBPACK_IMPORTED_MODULE_12__["default"], {
        filters: _objectSpread({}, (0,_Common_Tables__WEBPACK_IMPORTED_MODULE_8__.filterFetchBuilder)(filters))
      }))],
      isDisabled: !permsExport,
      tooltipText: permsExport ? intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_14__["default"].exportData) : intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_14__["default"].permsAction)
    },
    fallback: _Loading_Loading__WEBPACK_IMPORTED_MODULE_11__["default"]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SystemsTable);

/***/ }),

/***/ "./src/PresentationalComponents/SystemsTable/SystemsTableAssets.js":
/*!*************************************************************************!*\
  !*** ./src/PresentationalComponents/SystemsTable/SystemsTableAssets.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "systemsTableColumns": () => (/* binding */ systemsTableColumns)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-table/dist/esm */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/utils/decorators/sortable.js");
/* harmony import */ var _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-table/dist/esm */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/utils/decorators/wrappable.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");
/* harmony import */ var _Labels_RuleLabels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Labels/RuleLabels */ "./src/PresentationalComponents/Labels/RuleLabels.js");






var systemsTableColumns = function systemsTableColumns(intl) {
  return [{
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].name),
    key: 'display_name',
    transforms: [_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_4__.sortable, _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_5__.wrappable],
    props: {
      isStatic: true
    },
    renderFunc: function renderFunc(_data, _id, system) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
        key: _id,
        to: "/systems/".concat(system.system_uuid)
      }, "".concat(system.display_name, " ")), system.incident_hits > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Labels_RuleLabels__WEBPACK_IMPORTED_MODULE_3__["default"], {
        rule: {
          tags: 'incident'
        }
      }));
    }
  }, {
    key: 'tags'
  }, {
    key: 'system_profile',
    transforms: [_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_4__.sortable, _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_5__.wrappable]
  }, {
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].numberRuleHits),
    transforms: [_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_4__.sortable, _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_5__.wrappable],
    key: 'hits'
  }, {
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].critical),
    transforms: [_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_4__.sortable, _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_5__.wrappable],
    key: 'critical_hits'
  }, {
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].important),
    transforms: [_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_4__.sortable, _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_5__.wrappable],
    key: 'important_hits'
  }, {
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].moderate),
    transforms: [_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_4__.sortable, _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_5__.wrappable],
    key: 'moderate_hits'
  }, {
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].low),
    transforms: [_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_4__.sortable, _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_5__.wrappable],
    key: 'low_hits'
  }, {
    key: 'updated',
    transforms: [_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_4__.sortable, _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_5__.wrappable],
    props: {
      width: 20
    }
  }];
};

/***/ }),

/***/ "./src/PresentationalComponents/helper.js":
/*!************************************************!*\
  !*** ./src/PresentationalComponents/helper.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOptions": () => (/* binding */ createOptions),
/* harmony export */   "sortTopics": () => (/* binding */ sortTopics)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/orderBy */ "./node_modules/lodash/orderBy.js");
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Common_Tables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Common/Tables */ "./src/PresentationalComponents/Common/Tables.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var createOptions = function createOptions(advisorFilters, page, per_page, sort, pathway, filters, selectedTags, workloads, SID, systemsPage) {
  var _advisorFilters$rhel_, _filters$tagFilters;

  var options = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, advisorFilters), {}, {
    limit: per_page,
    offset: page * per_page - per_page,
    sort: sort
  }, (filters === null || filters === void 0 ? void 0 : filters.hostnameOrId) && !pathway && !systemsPage && {
    name: filters === null || filters === void 0 ? void 0 : filters.hostnameOrId
  }), (filters === null || filters === void 0 ? void 0 : filters.hostnameOrId) && !pathway && systemsPage && {
    display_name: filters === null || filters === void 0 ? void 0 : filters.hostnameOrId
  }), filters.hostnameOrId && pathway && {
    display_name: filters === null || filters === void 0 ? void 0 : filters.hostnameOrId
  }), advisorFilters.rhel_version && {
    rhel_version: (_advisorFilters$rhel_ = advisorFilters.rhel_version) === null || _advisorFilters$rhel_ === void 0 ? void 0 : _advisorFilters$rhel_.join(',')
  }), ((_filters$tagFilters = filters.tagFilters) === null || _filters$tagFilters === void 0 ? void 0 : _filters$tagFilters.length) && (0,_Common_Tables__WEBPACK_IMPORTED_MODULE_2__.buildTagFilter)(filters.tagFilters)), workloads ? (0,_Common_Tables__WEBPACK_IMPORTED_MODULE_2__.workloadQueryBuilder)(workloads, SID) : {}), (selectedTags === null || selectedTags === void 0 ? void 0 : selectedTags.length) > 0 ? {
    tags: selectedTags.join(',')
  } : {});

  return options;
};
var sortTopics = function sortTopics(data, index, direction) {
  var sortingName = '';
  index === 0 ? sortingName = 'name' : index === 2 ? sortingName = 'featured' : sortingName = 'impacted_systems_count';
  return lodash_orderBy__WEBPACK_IMPORTED_MODULE_1___default()(data, [function (result) {
    return result[sortingName];
  }], direction);
};

/***/ }),

/***/ "./src/SmartComponents/Systems/List.js":
/*!*********************************************!*\
  !*** ./src/SmartComponents/Systems/List.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeader.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeaderTitle.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PresentationalComponents_SystemsTable_SystemsTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../PresentationalComponents/SystemsTable/SystemsTable */ "./src/PresentationalComponents/SystemsTable/SystemsTable.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");






var List = function List() {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__["default"])();
  document.title = intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].documentTitle, {
    subnav: _Messages__WEBPACK_IMPORTED_MODULE_2__["default"].systems.defaultMessage
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "".concat(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].insightsHeader), " ").concat(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].systems).toLowerCase())
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "pf-l-page__main-section pf-c-page__main-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PresentationalComponents_SystemsTable_SystemsTable__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
};

List.displayName = 'systems-list';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);

/***/ }),

/***/ "./src/PresentationalComponents/Export/_Export.scss":
/*!**********************************************************!*\
  !*** ./src/PresentationalComponents/Export/_Export.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/PresentationalComponents/Labels/_RuleLabels.scss":
/*!**************************************************************!*\
  !*** ./src/PresentationalComponents/Labels/_RuleLabels.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/PresentationalComponents/SystemsTable/SystemsTable.scss":
/*!*********************************************************************!*\
  !*** ./src/PresentationalComponents/SystemsTable/SystemsTable.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "?e6c7":
/*!***************************************************************************!*\
  !*** @patternfly/react-styles/css/components/Popper/Popper.css (ignored) ***!
  \***************************************************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?cf22":
/*!*****************************!*\
  !*** ./badge.css (ignored) ***!
  \*****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?d031":
/*!******************************!*\
  !*** ./button.css (ignored) ***!
  \******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?7560":
/*!****************************!*\
  !*** ./card.css (ignored) ***!
  \****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?95ee":
/*!*******************************!*\
  !*** ./content.css (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?f492":
/*!***********************************!*\
  !*** ./label-group.css (ignored) ***!
  \***********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?10e7":
/*!*****************************!*\
  !*** ./label.css (ignored) ***!
  \*****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?0f3c":
/*!*****************************!*\
  !*** ./table.css (ignored) ***!
  \*****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?afff":
/*!*******************************!*\
  !*** ./tooltip.css (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?9157":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?5438":
/*!*******************************!*\
  !*** ./extend-node (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?5997":
/*!***************************!*\
  !*** ./streams (ignored) ***!
  \***************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?ed1b":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?d17e":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/List.f2ce28993f2c393e3031f88e190d0ace.js.map