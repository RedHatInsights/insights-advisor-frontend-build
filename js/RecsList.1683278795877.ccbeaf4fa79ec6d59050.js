(self["webpackChunkadvisor_frontend"] = self["webpackChunkadvisor_frontend"] || []).push([["RecsList"],{

/***/ "./src/PresentationalComponents/Cards/PathwayCard.js":
/*!***********************************************************!*\
  !*** ./src/PresentationalComponents/Cards/PathwayCard.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PathwayCard": () => (/* binding */ PathwayCard)
/* harmony export */ });
/* harmony import */ var _Pathways_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pathways.scss */ "./src/PresentationalComponents/Cards/Pathways.scss");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/index */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/Card.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/index */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardBody.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/index */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardFooter.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Text/Text.js */ "./node_modules/@patternfly/react-core/dist/esm/components/Text/Text.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/arrow-right-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/arrow-right-icon.js");
/* harmony import */ var _Labels_CategoryLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Labels/CategoryLabel */ "./src/PresentationalComponents/Labels/CategoryLabel.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Common_Common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/Common */ "./src/PresentationalComponents/Common/Common.js");
/* harmony import */ var _Labels_RuleLabels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Labels/RuleLabels */ "./src/PresentationalComponents/Labels/RuleLabels.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* eslint-disable react/prop-types */











var PathwayCard = function PathwayCard(_ref) {
  var name = _ref.name,
      categories = _ref.categories,
      impacted_systems_count = _ref.impacted_systems_count,
      description = _ref.description,
      has_incident = _ref.has_incident,
      reboot_required = _ref.reboot_required,
      slug = _ref.slug;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_8__.Card, {
    isFlat: true,
    isPlain: true,
    className: "adv-c-card-pathway adv__background--global-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_9__.CardBody, {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_10__.Text, {
    className: "pf-u-pb-sm pf-u-font-weight-bold"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Labels_CategoryLabel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: name,
    labelList: categories
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/recommendations/pathways/systems/".concat(slug),
    className: "pf-u-font-size-sm"
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_6__["default"].topicCardSystemsaffected, {
    systems: impacted_systems_count
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_9__.CardBody, {
    className: "body pf-u-font-size-sm"
  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_9__.CardBody, {
    className: "body pf-u-font-size-sm"
  }, has_incident && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Labels_RuleLabels__WEBPACK_IMPORTED_MODULE_5__["default"], {
    rule: {
      tags: 'incident'
    },
    isCompact: true
  }), ' ', (0,_Common_Common__WEBPACK_IMPORTED_MODULE_4__.RebootRequired)(reboot_required)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_11__.CardFooter, {
    className: "footer pf-u-font-size-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/recommendations/pathways/".concat(slug)
  }, "".concat(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_6__["default"].viewPathway), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_icons_dist_esm_icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_12__["default"], null))));
};

/***/ }),

/***/ "./src/PresentationalComponents/Common/Common.js":
/*!*******************************************************!*\
  !*** ./src/PresentationalComponents/Common/Common.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionTooltip": () => (/* binding */ QuestionTooltip),
/* harmony export */   "RebootRequired": () => (/* binding */ RebootRequired)
/* harmony export */ });
/* harmony import */ var _Common_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Common.scss */ "./src/PresentationalComponents/Common/_Common.scss");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Text_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Text/index */ "./node_modules/@patternfly/react-core/dist/esm/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Text_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Text/index */ "./node_modules/@patternfly/react-core/dist/esm/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tooltip___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tooltip/ */ "./node_modules/@patternfly/react-core/dist/esm/components/Tooltip/Tooltip.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/@formatjs/intl/lib/src/utils.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/provider.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_outlined_question_circle_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/outlined-question-circle-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/outlined-question-circle-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_power_off_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/power-off-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/power-off-icon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_tokens_dist_js_global_secondary_color_100__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-tokens/dist/js/global_secondary_color_100 */ "./node_modules/@patternfly/react-tokens/dist/js/global_secondary_color_100.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");
/* harmony import */ var _Utilities_intlHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities/intlHelper */ "./src/Utilities/intlHelper.js");










var cache = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.createIntlCache)();
var locale = navigator.language.slice(0, 2);
var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.createIntl)({
  locale: locale
}, cache);

var RebootRequired = function RebootRequired(reboot_required) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "adv-system-reboot-message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_icons_dist_esm_icons_power_off_icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: reboot_required ? 'adv-c-icon-reboot-required' : 'adv-c-icon-no-reboot-required'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Text_index__WEBPACK_IMPORTED_MODULE_7__.TextContent, {
    className: "adv-c-text-system-reboot-message pf-u-font-size-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Text_index__WEBPACK_IMPORTED_MODULE_8__.Text, {
    component: _patternfly_react_core_dist_esm_components_Text_index__WEBPACK_IMPORTED_MODULE_8__.TextVariants.p
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].systemReboot, {
    strong: function strong(str) {
      return (0,_Utilities_intlHelper__WEBPACK_IMPORTED_MODULE_3__.strong)(str);
    },
    status: reboot_required ? intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].is) : intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].isNot)
  }))));
};

var QuestionTooltip = function QuestionTooltip(text) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Tooltip___WEBPACK_IMPORTED_MODULE_9__.Tooltip, {
    key: text,
    position: _patternfly_react_core_dist_esm_components_Tooltip___WEBPACK_IMPORTED_MODULE_9__.TooltipPosition.right,
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, text)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    "aria-label": "Action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_icons_dist_esm_icons_outlined_question_circle_icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: _patternfly_react_tokens_dist_js_global_secondary_color_100__WEBPACK_IMPORTED_MODULE_11__.global_secondary_color_100.value
  })));
};



/***/ }),

/***/ "./src/PresentationalComponents/ExecutiveReport/Download.js":
/*!******************************************************************!*\
  !*** ./src/PresentationalComponents/ExecutiveReport/Download.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Download_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_Download.scss */ "./src/PresentationalComponents/ExecutiveReport/_Download.scss");
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../AppConstants */ "./src/AppConstants.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redhat_cloud_services_frontend_components_pdf_generator_dist_esm_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-pdf-generator/dist/esm/index */ "./node_modules/@redhat-cloud-services/frontend-components-pdf-generator/dist/esm/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications_redux_actions_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/redux/actions/notifications */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/redux/actions/notifications.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_export_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/export-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/export-icon.js");
/* harmony import */ var _Utilities_Api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Utilities/Api */ "./src/Utilities/Api.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }













var DownloadExecReport = function DownloadExecReport(_ref) {
  var isDisabled = _ref.isDisabled;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_11__["default"])();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var dataFetch = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
      var _yield$import, BuildExecReport, _yield$Promise$all, _yield$Promise$all2, statsSystems, statsReports, topActiveRec, report;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.next = 3;
              return Promise.all(/*! import() | BuildExecReport */[__webpack_require__.e("vendors-node_modules_react-pdf_renderer_lib_react-pdf_browser_es_js"), __webpack_require__.e("BuildExecReport")]).then(__webpack_require__.bind(__webpack_require__, /*! ./BuildExecReport */ "./src/PresentationalComponents/ExecutiveReport/BuildExecReport.js"));

            case 3:
              _yield$import = _context.sent;
              BuildExecReport = _yield$import.BuildExecReport;
              dispatch((0,_redhat_cloud_services_frontend_components_notifications_redux_actions_notifications__WEBPACK_IMPORTED_MODULE_7__.addNotification)(_AppConstants__WEBPACK_IMPORTED_MODULE_5__.exportNotifications.pending));
              _context.prev = 6;
              _context.t0 = Promise;
              _context.next = 10;
              return (0,_Utilities_Api__WEBPACK_IMPORTED_MODULE_8__.Get)(_AppConstants__WEBPACK_IMPORTED_MODULE_5__.STATS_SYSTEMS_FETCH_URL);

            case 10:
              _context.t1 = _context.sent.data;
              _context.next = 13;
              return (0,_Utilities_Api__WEBPACK_IMPORTED_MODULE_8__.Get)(_AppConstants__WEBPACK_IMPORTED_MODULE_5__.STATS_REPORTS_FETCH_URL);

            case 13:
              _context.t2 = _context.sent.data;
              _context.next = 16;
              return (0,_Utilities_Api__WEBPACK_IMPORTED_MODULE_8__.Get)(_AppConstants__WEBPACK_IMPORTED_MODULE_5__.RULES_FETCH_URL, {}, {
                limit: 3,
                sort: '-total_risk,-impacted_count',
                impacting: true
              });

            case 16:
              _context.t3 = _context.sent.data;
              _context.t4 = [_context.t1, _context.t2, _context.t3];
              _context.next = 20;
              return _context.t0.all.call(_context.t0, _context.t4);

            case 20:
              _yield$Promise$all = _context.sent;
              _yield$Promise$all2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_yield$Promise$all, 3);
              statsSystems = _yield$Promise$all2[0];
              statsReports = _yield$Promise$all2[1];
              topActiveRec = _yield$Promise$all2[2];
              report = BuildExecReport({
                statsReports: statsReports,
                statsSystems: statsSystems,
                topActiveRec: topActiveRec,
                intl: intl
              });
              setLoading(false);
              dispatch((0,_redhat_cloud_services_frontend_components_notifications_redux_actions_notifications__WEBPACK_IMPORTED_MODULE_7__.addNotification)(_AppConstants__WEBPACK_IMPORTED_MODULE_5__.exportNotifications.success));
              return _context.abrupt("return", [report]);

            case 31:
              _context.prev = 31;
              _context.t5 = _context["catch"](6);
              setLoading(false);
              dispatch((0,_redhat_cloud_services_frontend_components_notifications_redux_actions_notifications__WEBPACK_IMPORTED_MODULE_7__.addNotification)(_AppConstants__WEBPACK_IMPORTED_MODULE_5__.exportNotifications.error));
              return _context.abrupt("return", []);

            case 36:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 31]]);
    }));

    return function dataFetch() {
      return _ref2.apply(this, arguments);
    };
  }();

  console.log('heeloo');
  return (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_redhat_cloud_services_frontend_components_pdf_generator_dist_esm_index__WEBPACK_IMPORTED_MODULE_12__.DownloadButtonWrapper, {
      groupName: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_9__["default"].redHatInsights),
      label: loading ? intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_9__["default"].loading) : intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_9__["default"].downloadExecutiveLabel),
      asyncFunction: dataFetch,
      buttonProps: _objectSpread({
        variant: 'link',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_patternfly_react_icons_dist_esm_icons_export_icon__WEBPACK_IMPORTED_MODULE_13__["default"], {
          className: "iconOverride"
        }),
        component: 'a',
        className: 'downloadButtonOverride',
        isAriaDisabled: isDisabled
      }, loading ? {
        isDisabled: true
      } : null),
      type: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_9__["default"].insightsHeader),
      fileName: "Advisor-Executive-Report--".concat(new Date().toUTCString().replace(/ /g, '-'), ".pdf")
    });
  }, [loading]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DownloadExecReport);

/***/ }),

/***/ "./src/PresentationalComponents/PathwaysPanel/PathwaysPanel.js":
/*!*********************************************************************!*\
  !*** ./src/PresentationalComponents/PathwaysPanel/PathwaysPanel.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _PathwaysPanel_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_PathwaysPanel.scss */ "./src/PresentationalComponents/PathwaysPanel/_PathwaysPanel.scss");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/index */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/Card.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/index */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardHeader.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/index */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardTitle.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/index */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardExpandableContent.js");
/* harmony import */ var _patternfly_react_core_dist_esm_layouts_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/layouts/Grid/Grid.js */ "./node_modules/@patternfly/react-core/dist/esm/layouts/Grid/Grid.js");
/* harmony import */ var _patternfly_react_core_dist_esm_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/layouts/Grid/GridItem.js */ "./node_modules/@patternfly/react-core/dist/esm/layouts/Grid/GridItem.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../PresentationalComponents/Loading/Loading */ "./src/PresentationalComponents/Loading/Loading.js");
/* harmony import */ var _MessageState_MessageState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MessageState/MessageState */ "./src/PresentationalComponents/MessageState/MessageState.js");
/* harmony import */ var _Cards_PathwayCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Cards/PathwayCard */ "./src/PresentationalComponents/Cards/PathwayCard.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Title_Title__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/esm/components/Title/Title.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Services_Pathways__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Services/Pathways */ "./src/Services/Pathways.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Common_Tables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Common/Tables */ "./src/PresentationalComponents/Common/Tables.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

















var PathwaysPanel = function PathwaysPanel() {
  var _data$data, _data$data2, _data$data3;

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_12__["default"])();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(function (_ref) {
    var pathState = _ref.filters.pathState;
    return pathState;
  }),
      offset = _useSelector.offset;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(JSON.parse(localStorage.getItem('advisor_pathwayspanel_expanded') || 'true')),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var selectedTags = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(function (_ref2) {
    var filters = _ref2.filters;
    return filters.selectedTags;
  });
  var workloads = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(function (_ref3) {
    var filters = _ref3.filters;
    return filters.workloads;
  });
  var SID = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(function (_ref4) {
    var filters = _ref4.filters;
    return filters.SID;
  });

  var options = _objectSpread(_objectSpread({}, (selectedTags === null || selectedTags === void 0 ? void 0 : selectedTags.length) > 0 ? {
    tags: selectedTags.join(',')
  } : {}), workloads ? (0,_Common_Tables__WEBPACK_IMPORTED_MODULE_11__.workloadQueryBuilder)(workloads, SID) : {});

  var _useGetPathwaysQuery = (0,_Services_Pathways__WEBPACK_IMPORTED_MODULE_9__.useGetPathwaysQuery)(_objectSpread({
    sort: '-recommendation_level',
    offset: offset,
    limit: 3
  }, options)),
      data = _useGetPathwaysQuery.data,
      isLoading = _useGetPathwaysQuery.isLoading,
      isFetching = _useGetPathwaysQuery.isFetching,
      isError = _useGetPathwaysQuery.isError;

  return !isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_13__.Card, {
    className: "adv-c-card adv-c-card-pathways-panel",
    id: "adv-c-card-pathwayspanel",
    isExpanded: expanded
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_14__.CardHeader, {
    onExpand: function onExpand() {
      setExpanded(!expanded);
      localStorage.setItem('advisor_pathwayspanel_expanded', !expanded);
    },
    toggleButtonProps: {
      id: "ins-c-advisor__card-title--pathwayspanel-toggle-button",
      'aria-label': 'Details',
      'aria-labelledby': "ins-c-advisor__card-title--pathwayspanel toggle-button"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_15__.CardTitle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_components_Title_Title__WEBPACK_IMPORTED_MODULE_16__.Title, {
    headingLevel: "h2",
    size: "lg"
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].improveRecommended)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_17__.CardExpandableContent, null, isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], null) : !isError && (_data$data = data.data) !== null && _data$data !== void 0 && _data$data.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_layouts_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_18__.Grid, {
    md: ((_data$data2 = data.data) === null || _data$data2 === void 0 ? void 0 : _data$data2.length) === 1 ? 8 : ((_data$data3 = data.data) === null || _data$data3 === void 0 ? void 0 : _data$data3.length) === 2 ? 6 : 4,
    sm: 12
  }, data.data.map(function (pathway) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_19__.GridItem, {
      key: pathway.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Cards_PathwayCard__WEBPACK_IMPORTED_MODULE_6__.PathwayCard, pathway));
  })) : isError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_MessageState_MessageState__WEBPACK_IMPORTED_MODULE_5__["default"], {
    icon: 'none',
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].noPathwaysAvailable),
    text: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].pathwaysPanelsError)
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_MessageState_MessageState__WEBPACK_IMPORTED_MODULE_5__["default"], {
    icon: 'none',
    text: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].noPathways)
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], null);
};

PathwaysPanel.propTypes = {
  className: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PathwaysPanel);

/***/ }),

/***/ "./src/SmartComponents/Recs/List.js":
/*!******************************************!*\
  !*** ./src/SmartComponents/Recs/List.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeader.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeaderTitle.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tabs_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tabs/index */ "./node_modules/@patternfly/react-core/dist/esm/components/Tabs/Tabs.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tabs_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tabs/index */ "./node_modules/@patternfly/react-core/dist/esm/components/Tabs/Tab.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tabs_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tabs/index */ "./node_modules/@patternfly/react-core/dist/esm/components/Tabs/TabTitleText.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PresentationalComponents_ExecutiveReport_Download__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../PresentationalComponents/ExecutiveReport/Download */ "./src/PresentationalComponents/ExecutiveReport/Download.js");
/* harmony import */ var _PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../PresentationalComponents/Loading/Loading */ "./src/PresentationalComponents/Loading/Loading.js");
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../AppConstants */ "./src/AppConstants.js");
/* harmony import */ var _PresentationalComponents_Common_Common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../PresentationalComponents/Common/Common */ "./src/PresentationalComponents/Common/Common.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tooltip___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tooltip/ */ "./node_modules/@patternfly/react-core/dist/esm/components/Tooltip/Tooltip.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_RBACHook__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/RBACHook */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/esm/RBACHook/RBACHook.js");
/* harmony import */ var _PresentationalComponents_PathwaysPanel_PathwaysPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../PresentationalComponents/PathwaysPanel/PathwaysPanel */ "./src/PresentationalComponents/PathwaysPanel/PathwaysPanel.js");
/* harmony import */ var _PresentationalComponents_RulesTable_RulesTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../PresentationalComponents/RulesTable/RulesTable */ "./src/PresentationalComponents/RulesTable/RulesTable.js");















var PathwaysTable = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(function () {
  return __webpack_require__.e(/*! import() | PathwaysTable */ "PathwaysTable").then(__webpack_require__.bind(__webpack_require__, /*! ../../PresentationalComponents/PathwaysTable/PathwaysTable */ "./src/PresentationalComponents/PathwaysTable/PathwaysTable.js"));
});

var List = function List() {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__["default"])();

  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)(),
      pathname = _useLocation.pathname;

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();
  var permsExport = (0,_redhat_cloud_services_frontend_components_utilities_RBACHook__WEBPACK_IMPORTED_MODULE_11__.usePermissions)('advisor', _AppConstants__WEBPACK_IMPORTED_MODULE_5__.PERMS["export"]);
  document.title = intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].documentTitle, {
    subnav: _Messages__WEBPACK_IMPORTED_MODULE_7__["default"].recommendations.defaultMessage
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(pathname === '/recommendations/pathways' ? 1 : 0),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var changeTab = function changeTab(tab) {
    setActiveTab(tab);
    history.push(tab === 1 ? '/recommendations/pathways' : '/recommendations');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "adv-c-page-recommendations__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_13__["default"], {
    title: "".concat(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].insightsHeader), " ").concat(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].recommendations).toLowerCase())
  }), !permsExport.isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Tooltip___WEBPACK_IMPORTED_MODULE_14__.Tooltip, {
    trigger: !permsExport.hasAccess ? 'mouseenter' : '',
    content: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].permsAction)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_PresentationalComponents_ExecutiveReport_Download__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isDisabled: !permsExport.hasAccess
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
    className: "pf-l-page__main-section pf-c-page__main-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_PresentationalComponents_PathwaysPanel_PathwaysPanel__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Tabs_index__WEBPACK_IMPORTED_MODULE_15__.Tabs, {
    className: "adv__background--global-100",
    activeKey: activeTab,
    onSelect: function onSelect(_e, tab) {
      return changeTab(tab);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Tabs_index__WEBPACK_IMPORTED_MODULE_16__.Tab, {
    eventKey: 0,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Tabs_index__WEBPACK_IMPORTED_MODULE_17__.TabTitleText, null, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].recommendations))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_PresentationalComponents_RulesTable_RulesTable__WEBPACK_IMPORTED_MODULE_9__["default"], {
    isTabActive: activeTab === 0
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Tabs_index__WEBPACK_IMPORTED_MODULE_16__.Tab, {
    eventKey: 1,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Tabs_index__WEBPACK_IMPORTED_MODULE_17__.TabTitleText, null, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].pathways), ' ', (0,_PresentationalComponents_Common_Common__WEBPACK_IMPORTED_MODULE_6__.QuestionTooltip)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].recommendedPathways)))
  }, activeTab === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(PathwaysTable, {
    isTabActive: activeTab === 1
  }))))));
};

List.displayName = 'recommendations-list';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);

/***/ }),

/***/ "./src/PresentationalComponents/Cards/Pathways.scss":
/*!**********************************************************!*\
  !*** ./src/PresentationalComponents/Cards/Pathways.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/PresentationalComponents/Common/_Common.scss":
/*!**********************************************************!*\
  !*** ./src/PresentationalComponents/Common/_Common.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/PresentationalComponents/ExecutiveReport/_Download.scss":
/*!*********************************************************************!*\
  !*** ./src/PresentationalComponents/ExecutiveReport/_Download.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/PresentationalComponents/PathwaysPanel/_PathwaysPanel.scss":
/*!************************************************************************!*\
  !*** ./src/PresentationalComponents/PathwaysPanel/_PathwaysPanel.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "?95ee":
/*!*******************************!*\
  !*** ./content.css (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?9cc8":
/*!****************************!*\
  !*** ./menu.css (ignored) ***!
  \****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?3f59":
/*!***********************************!*\
  !*** ./tab-content.css (ignored) ***!
  \***********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?c79a":
/*!****************************!*\
  !*** ./tabs.css (ignored) ***!
  \****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?390a":
/*!****************************!*\
  !*** ./grid.css (ignored) ***!
  \****************************/
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
//# sourceMappingURL=../sourcemaps/RecsList.d58ab21665a89f4b001e0db157fdc695.js.map