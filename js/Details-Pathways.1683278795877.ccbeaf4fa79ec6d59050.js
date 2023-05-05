(self["webpackChunkadvisor_frontend"] = self["webpackChunkadvisor_frontend"] || []).push([["Details-Pathways"],{

/***/ "./src/PresentationalComponents/Cards/ResolutionCard.js":
/*!**************************************************************!*\
  !*** ./src/PresentationalComponents/Cards/ResolutionCard.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResolutionCard": () => (/* binding */ ResolutionCard)
/* harmony export */ });
/* harmony import */ var _Pathways_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pathways.scss */ "./src/PresentationalComponents/Cards/Pathways.scss");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/index */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/Card.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/index */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardTitle.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/index */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardBody.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_InsightsLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/InsightsLabel */ "./node_modules/@redhat-cloud-services/frontend-components/esm/InsightsLabel/InsightsLabel.js");
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../AppConstants */ "./src/AppConstants.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Common_Common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/Common */ "./src/PresentationalComponents/Common/Common.js");
/* harmony import */ var _Labels_RecommendationLevel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Labels/RecommendationLevel */ "./src/PresentationalComponents/Labels/RecommendationLevel.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* eslint-disable react/prop-types */









var ResolutionCard = function ResolutionCard(_ref) {
  var name = _ref.name,
      reboot_required = _ref.reboot_required,
      resolution_risk = _ref.resolution_risk,
      recommendation_level = _ref.recommendation_level;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_7__.Card, {
    isFlat: true,
    isPlain: true,
    className: "adv-c-card-pathway adv__background--global-100 pf-u-h-100 flex-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "flex-coloumn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_8__.CardTitle, null, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_5__["default"].resolution)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "flex-row "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "halfWidth"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "pf-u-font-weight-bold pf-u-font-size-sm pf-u-pl-lg"
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_5__["default"].remediation)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "pf-u-font-size-sm pf-u-pl-lg"
  }, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_9__.CardBody, {
    className: " pf-u-pl-xl halfWidth"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "pf-u-font-weight-bold pf-u-font-size-sm"
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_5__["default"].riskOfChange)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_InsightsLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
    text: _AppConstants__WEBPACK_IMPORTED_MODULE_1__.RISK_OF_CHANGE_LABEL[resolution_risk.risk],
    value: resolution_risk.risk,
    hideIcon: true,
    isCompact: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_9__.CardBody, {
    className: "body pf-u-font-size-sm"
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_5__["default"].staticRemediationDesc)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_9__.CardBody, {
    className: "body"
  }, (0,_Common_Common__WEBPACK_IMPORTED_MODULE_3__.RebootRequired)(reboot_required))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "pathwayRight pf-u-p-lg "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "pf-u-font-weight-bold pf-u-font-size-sm"
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_5__["default"].reclvl)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Labels_RecommendationLevel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    recLvl: recommendation_level
  }))));
};

/***/ }),

/***/ "./src/PresentationalComponents/Cards/TotalRiskCard.js":
/*!*************************************************************!*\
  !*** ./src/PresentationalComponents/Cards/TotalRiskCard.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TotalRiskCard": () => (/* binding */ TotalRiskCard)
/* harmony export */ });
/* harmony import */ var _Pathways_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pathways.scss */ "./src/PresentationalComponents/Cards/Pathways.scss");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/index */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/Card.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/index */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardTitle.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/index */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardBody.js");
/* harmony import */ var _patternfly_react_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-charts */ "./node_modules/@patternfly/react-charts/dist/esm/components/Chart/Chart.js");
/* harmony import */ var _patternfly_react_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-charts */ "./node_modules/@patternfly/react-charts/dist/esm/components/ChartVoronoiContainer/ChartVoronoiContainer.js");
/* harmony import */ var _patternfly_react_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-charts */ "./node_modules/@patternfly/react-charts/dist/esm/components/ChartAxis/ChartAxis.js");
/* harmony import */ var _patternfly_react_charts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-charts */ "./node_modules/@patternfly/react-charts/dist/esm/components/ChartGroup/ChartGroup.js");
/* harmony import */ var _patternfly_react_charts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-charts */ "./node_modules/@patternfly/react-charts/dist/esm/components/ChartBar/ChartBar.js");
/* harmony import */ var _patternfly_react_core_dist_esm_layouts_Grid_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/layouts/Grid/index */ "./node_modules/@patternfly/react-core/dist/esm/layouts/Grid/Grid.js");
/* harmony import */ var _patternfly_react_core_dist_esm_layouts_Grid_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/layouts/Grid/index */ "./node_modules/@patternfly/react-core/dist/esm/layouts/Grid/GridItem.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_tokens_dist_esm_chart_color_black_100__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @patternfly/react-tokens/dist/esm/chart_color_black_100 */ "./node_modules/@patternfly/react-tokens/dist/esm/chart_color_black_100.js");
/* harmony import */ var _patternfly_react_tokens_dist_esm_chart_color_gold_400__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @patternfly/react-tokens/dist/esm/chart_color_gold_400 */ "./node_modules/@patternfly/react-tokens/dist/esm/chart_color_gold_400.js");
/* harmony import */ var _patternfly_react_tokens_dist_esm_chart_color_orange_300__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @patternfly/react-tokens/dist/esm/chart_color_orange_300 */ "./node_modules/@patternfly/react-tokens/dist/esm/chart_color_orange_300.js");
/* harmony import */ var _patternfly_react_tokens_dist_esm_chart_color_red_100__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-tokens/dist/esm/chart_color_red_100 */ "./node_modules/@patternfly/react-tokens/dist/esm/chart_color_red_100.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");
/* harmony import */ var _Utilities_intlHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities/intlHelper */ "./src/Utilities/intlHelper.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* eslint-disable react/prop-types */












var TotalRiskCard = function TotalRiskCard(props) {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var impacted_systems_count = props.impacted_systems_count,
      incident_count = props.incident_count,
      categories = props.categories,
      critical_risk_count = props.critical_risk_count,
      high_risk_count = props.high_risk_count,
      medium_risk_count = props.medium_risk_count,
      low_risk_count = props.low_risk_count;

  var catString = function catString(cats) {
    var _cats$;

    return cats.length > 1 ? categories.map(function (cat) {
      return cat.name;
    }).join(', ') : (_cats$ = cats[0]) === null || _cats$ === void 0 ? void 0 : _cats$.name;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_5__.Card, {
    isFlat: true,
    isPlain: true,
    className: "adv-c-card-pathway adv__background--global-100 pf-u-h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_6__.CardTitle, null, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].totalRiskPathway)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Card_index__WEBPACK_IMPORTED_MODULE_7__.CardBody, {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_layouts_Grid_index__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    hasGutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_layouts_Grid_index__WEBPACK_IMPORTED_MODULE_9__.GridItem, {
    span: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_10__.Chart, {
    ariaDesc: "Total risk of recommendations",
    ariaTitle: "Total risk of recommendations",
    containerComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_11__.ChartVoronoiContainer, {
      labels: function labels(_ref) {
        var datum = _ref.datum;
        return "".concat(datum.name, ": ").concat(datum.y);
      },
      constrainToVisibleArea: true
    }),
    domainPadding: {
      x: [20, 15]
    },
    height: 150,
    width: 300,
    padding: {
      bottom: 30,
      left: 45,
      right: 10,
      top: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_12__.ChartAxis, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_12__.ChartAxis, {
    dependentAxis: true,
    showGrid: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_13__.ChartGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_charts__WEBPACK_IMPORTED_MODULE_14__.ChartBar, {
    barWidth: 16,
    style: {
      data: {
        fill: function fill(_ref2) {
          var datum = _ref2.datum;
          return datum.fill;
        }
      }
    },
    data: [{
      name: 'Critical',
      x: 'Critical',
      y: critical_risk_count,
      fill: _patternfly_react_tokens_dist_esm_chart_color_red_100__WEBPACK_IMPORTED_MODULE_15__["default"].value
    }, {
      name: 'Important',
      x: 'Important',
      y: high_risk_count,
      fill: _patternfly_react_tokens_dist_esm_chart_color_orange_300__WEBPACK_IMPORTED_MODULE_16__["default"].value
    }, {
      name: 'Moderate',
      x: 'Moderate',
      y: medium_risk_count,
      fill: _patternfly_react_tokens_dist_esm_chart_color_gold_400__WEBPACK_IMPORTED_MODULE_17__["default"].value
    }, {
      name: 'Low',
      x: 'Low',
      y: low_risk_count,
      fill: _patternfly_react_tokens_dist_esm_chart_color_black_100__WEBPACK_IMPORTED_MODULE_18__["default"].value
    }]
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_layouts_Grid_index__WEBPACK_IMPORTED_MODULE_9__.GridItem, {
    span: 6,
    className: "pf-u-font-size-sm"
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].thisPathway, {
    category: catString(categories),
    systems: impacted_systems_count,
    incidents: incident_count,
    strong: function strong(str) {
      return (0,_Utilities_intlHelper__WEBPACK_IMPORTED_MODULE_3__.strong)(str);
    }
  })))));
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

/***/ "./src/PresentationalComponents/Labels/RecommendationLevel.js":
/*!********************************************************************!*\
  !*** ./src/PresentationalComponents/Labels/RecommendationLevel.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecommendationLevel": () => (/* binding */ RecommendationLevel),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _patternfly_react_core_dist_esm_components_Label_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Label/index */ "./node_modules/@patternfly/react-core/dist/esm/components/Label/Label.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");





var RecommendationLevel = function RecommendationLevel(_ref) {
  var recLvl = _ref.recLvl,
      isCompact = _ref.isCompact;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__["default"])();

  var label = function label(text, recLvl, color) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Label_index__WEBPACK_IMPORTED_MODULE_4__.Label, {
      color: color,
      isCompact: true
    }, "".concat(text, " - ").concat(recLvl, "%"));
  };

  if (recLvl >= 80) {
    return label(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].high), recLvl, 'red', isCompact);
  } else if (recLvl < 80 && recLvl >= 50) {
    return label(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].medium), recLvl, 'orange', isCompact);
  } else {
    return label(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].low), recLvl, 'blue', isCompact);
  }
};
RecommendationLevel.propTypes = {
  props: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().array)
};
RecommendationLevel.defaultProps = {
  isCompact: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecommendationLevel);

/***/ }),

/***/ "./src/SmartComponents/Recs/DetailsPathways.js":
/*!*****************************************************!*\
  !*** ./src/SmartComponents/Recs/DetailsPathways.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Details_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Details.scss */ "./src/SmartComponents/Recs/Details.scss");
/* harmony import */ var _patternfly_react_core_dist_esm_layouts_Grid_index__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/layouts/Grid/index */ "./node_modules/@patternfly/react-core/dist/esm/layouts/Grid/Grid.js");
/* harmony import */ var _patternfly_react_core_dist_esm_layouts_Grid_index__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/layouts/Grid/index */ "./node_modules/@patternfly/react-core/dist/esm/layouts/Grid/GridItem.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeader.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeaderTitle.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PresentationalComponents_Cards_TotalRiskCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../PresentationalComponents/Cards/TotalRiskCard */ "./src/PresentationalComponents/Cards/TotalRiskCard.js");
/* harmony import */ var _PresentationalComponents_Cards_ResolutionCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../PresentationalComponents/Cards/ResolutionCard */ "./src/PresentationalComponents/Cards/ResolutionCard.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tabs_index__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tabs/index */ "./node_modules/@patternfly/react-core/dist/esm/components/Tabs/Tabs.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tabs_index__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tabs/index */ "./node_modules/@patternfly/react-core/dist/esm/components/Tabs/Tab.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tabs_index__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tabs/index */ "./node_modules/@patternfly/react-core/dist/esm/components/Tabs/TabTitleText.js");
/* harmony import */ var _Services_Filters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/Filters */ "./src/Services/Filters.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _PresentationalComponents_Breadcrumbs_Breadcrumbs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../PresentationalComponents/Breadcrumbs/Breadcrumbs */ "./src/PresentationalComponents/Breadcrumbs/Breadcrumbs.js");
/* harmony import */ var _PresentationalComponents_Labels_CategoryLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../PresentationalComponents/Labels/CategoryLabel */ "./src/PresentationalComponents/Labels/CategoryLabel.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_DateFormat__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/DateFormat */ "./node_modules/@redhat-cloud-services/frontend-components/esm/DateFormat/DateFormat.js");
/* harmony import */ var _PresentationalComponents_Inventory_Inventory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../PresentationalComponents/Inventory/Inventory */ "./src/PresentationalComponents/Inventory/Inventory.js");
/* harmony import */ var _PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../PresentationalComponents/Loading/Loading */ "./src/PresentationalComponents/Loading/Loading.js");
/* harmony import */ var _PresentationalComponents_Labels_RuleLabels__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../PresentationalComponents/Labels/RuleLabels */ "./src/PresentationalComponents/Labels/RuleLabels.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");
/* harmony import */ var _Services_Pathways__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Services/Pathways */ "./src/Services/Pathways.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _PresentationalComponents_Common_Tables__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../PresentationalComponents/Common/Tables */ "./src/PresentationalComponents/Common/Tables.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






















var RulesTable = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.lazy)(function () {
  return Promise.all(/*! import() | RulesTable */[__webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Dropdown_Dropdown_js-node_modu-0fdadf"), __webpack_require__.e("vendors-node_modules_patternfly_react-table_dist_esm_components_Table_Body_js-node_modules_pa-73b696"), __webpack_require__.e("vendors-node_modules_redhat-cloud-services_frontend-components_esm_PrimaryToolbar_PrimaryToolbar_js"), __webpack_require__.e("vendors-node_modules_buffer_index_js"), __webpack_require__.e("vendors-node_modules_redhat-cloud-services_frontend-components-advisor-components_esm_ReportD-02a3ca"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Pagination_Pagination_js-node_-ba9865"), __webpack_require__.e("vendors-node_modules_patternfly_react-icons_dist_esm_icons_bell-slash-icon_js-node_modules_pa-b3552a"), __webpack_require__.e("vendors-node_modules_redhat-cloud-services_frontend-components-advisor-components_esm_RebootR-e6ac21"), __webpack_require__.e("webpack_sharing_consume_default_patternfly_react-table_patternfly_react-table"), __webpack_require__.e("src_PresentationalComponents_RulesTable_RulesTable_js"), __webpack_require__.e("RulesTable")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../PresentationalComponents/RulesTable/RulesTable */ "./src/PresentationalComponents/RulesTable/RulesTable.js"));
});

var PathwayDetails = function PathwayDetails() {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_17__["default"])();
  var pathwayName = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useParams)().id;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  var selectedTags = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (_ref) {
    var filters = _ref.filters;
    return filters.selectedTags;
  });
  var workloads = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (_ref2) {
    var filters = _ref2.filters;
    return filters.workloads;
  });
  var SID = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (_ref3) {
    var filters = _ref3.filters;
    return filters.SID;
  });
  var recFilters = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (_ref4) {
    var filters = _ref4.filters;
    return filters.recState;
  });
  var sysFilters = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (_ref5) {
    var filters = _ref5.filters;
    return filters.sysState;
  });
  var options = {};
  (selectedTags === null || selectedTags === void 0 ? void 0 : selectedTags.length) && (options = _objectSpread(_objectSpread({}, options), {
    tags: selectedTags.join(',')
  }));
  workloads && (options = _objectSpread(_objectSpread({}, options), (0,_PresentationalComponents_Common_Tables__WEBPACK_IMPORTED_MODULE_16__.workloadQueryBuilder)(workloads, SID)));

  var _useGetPathwayQuery = (0,_Services_Pathways__WEBPACK_IMPORTED_MODULE_14__.useGetPathwayQuery)(_objectSpread(_objectSpread({}, options), {}, {
    slug: pathwayName
  })),
      _useGetPathwayQuery$d = _useGetPathwayQuery.data,
      pathway = _useGetPathwayQuery$d === void 0 ? {} : _useGetPathwayQuery$d,
      isFetching = _useGetPathwayQuery.isFetching;

  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useLocation)(),
      pathname = _useLocation.pathname;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(pathname.includes('/recommendations/pathways/systems/') ? 1 : 0),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var waitForElm = function waitForElm(selector) {
    return new Promise(function (resolve) {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }

      var observer = new MutationObserver(function () {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
        }
      });
    });
  };

  var scrollDown = function scrollDown() {
    if (pathname.includes('/recommendations/pathways/systems/')) {
      setTimeout(function () {
        waitForElm('#tablesContainer').then(function () {
          document.getElementById('tablesContainer').scrollIntoView({
            behavior: 'smooth'
          });
        });
      }, 5000);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var initiaRecFilters = _objectSpread({}, recFilters);

    var initiaSysFilters = _objectSpread({}, sysFilters);

    var defaultFilters = {
      pathway: pathwayName,
      limit: 20,
      offset: 0
    };
    dispatch((0,_Services_Filters__WEBPACK_IMPORTED_MODULE_6__.updateRecFilters)(_objectSpread(_objectSpread({}, defaultFilters), {}, {
      sort: 'category',
      impacting: true
    })));
    dispatch((0,_Services_Filters__WEBPACK_IMPORTED_MODULE_6__.updateSysFilters)(_objectSpread({}, defaultFilters)));
    scrollDown();
    return function () {
      dispatch((0,_Services_Filters__WEBPACK_IMPORTED_MODULE_6__.updateRecFilters)(initiaRecFilters));
      dispatch((0,_Services_Filters__WEBPACK_IMPORTED_MODULE_6__.updateSysFilters)(initiaSysFilters));
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_11__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_18__["default"], {
    className: "adv-c-page__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_PresentationalComponents_Breadcrumbs_Breadcrumbs__WEBPACK_IMPORTED_MODULE_8__["default"], {
    ouiaId: "override",
    current: pathway.name || ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_19__["default"], {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, pathway.name, pathway.has_incident && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_PresentationalComponents_Labels_RuleLabels__WEBPACK_IMPORTED_MODULE_12__["default"], {
      rule: {
        tags: 'incident'
      }
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
    className: "pf-u-mb-lg"
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_13__["default"].rulesDetailsModifieddate, {
    date: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_redhat_cloud_services_frontend_components_DateFormat__WEBPACK_IMPORTED_MODULE_20__["default"], {
      date: new Date(pathway.publish_date),
      type: "onlyDate"
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "pf-u-pl-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_PresentationalComponents_Labels_CategoryLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    labelList: pathway.categories
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
    className: "pf-u-mb-lg"
  }, pathway.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("section", {
    className: "pf-u-p-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_layouts_Grid_index__WEBPACK_IMPORTED_MODULE_21__.Grid, {
    hasGutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_layouts_Grid_index__WEBPACK_IMPORTED_MODULE_22__.GridItem, {
    sm: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_PresentationalComponents_Cards_TotalRiskCard__WEBPACK_IMPORTED_MODULE_4__.TotalRiskCard, pathway)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_layouts_Grid_index__WEBPACK_IMPORTED_MODULE_22__.GridItem, {
    sm: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_PresentationalComponents_Cards_ResolutionCard__WEBPACK_IMPORTED_MODULE_5__.ResolutionCard, pathway))))), isFetching && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_11__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("section", {
    className: "pf-u-px-lg pf-u-pb-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_components_Tabs_index__WEBPACK_IMPORTED_MODULE_23__.Tabs, {
    className: "adv__background--global-100",
    activeKey: activeTab,
    onSelect: function onSelect(_e, tab) {
      return setActiveTab(tab);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_components_Tabs_index__WEBPACK_IMPORTED_MODULE_24__.Tab, {
    eventKey: 0,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_components_Tabs_index__WEBPACK_IMPORTED_MODULE_25__.TabTitleText, null, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_13__["default"].recommendations))
  }, isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_11__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_11__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(RulesTable, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_components_Tabs_index__WEBPACK_IMPORTED_MODULE_24__.Tab, {
    eventKey: 1,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_components_Tabs_index__WEBPACK_IMPORTED_MODULE_25__.TabTitleText, null, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_13__["default"].systems))
  }, isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_11__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_11__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_PresentationalComponents_Inventory_Inventory__WEBPACK_IMPORTED_MODULE_10__["default"], {
    tableProps: {
      canSelectAll: false,
      isStickyHeader: true
    },
    pathway: pathway,
    selectedTags: selectedTags,
    workloads: workloads,
    SID: SID,
    showTags: true
  }))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PathwayDetails);

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

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/Details-Pathways.26f3a3fdd80f17d07e2432d39e99b8a8.js.map