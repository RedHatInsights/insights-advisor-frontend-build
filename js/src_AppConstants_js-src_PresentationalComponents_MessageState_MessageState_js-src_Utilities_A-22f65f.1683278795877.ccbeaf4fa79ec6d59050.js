(self["webpackChunkadvisor_frontend"] = self["webpackChunkadvisor_frontend"] || []).push([["src_AppConstants_js-src_PresentationalComponents_MessageState_MessageState_js-src_Utilities_A-22f65f"],{

/***/ "./src/AppConstants.js":
/*!*****************************!*\
  !*** ./src/AppConstants.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_URI": () => (/* binding */ BASE_URI),
/* harmony export */   "BASE_URL": () => (/* binding */ BASE_URL),
/* harmony export */   "DEBOUNCE_DELAY": () => (/* binding */ DEBOUNCE_DELAY),
/* harmony export */   "FILTER_CATEGORIES": () => (/* binding */ FILTER_CATEGORIES),
/* harmony export */   "IMPACT_LABEL": () => (/* binding */ IMPACT_LABEL),
/* harmony export */   "IMPACT_LABEL_LOWER": () => (/* binding */ IMPACT_LABEL_LOWER),
/* harmony export */   "LIKELIHOOD_LABEL": () => (/* binding */ LIKELIHOOD_LABEL),
/* harmony export */   "LIKELIHOOD_LABEL_LOWER": () => (/* binding */ LIKELIHOOD_LABEL_LOWER),
/* harmony export */   "PATHWAYS_FILTER_CATEGORIES": () => (/* binding */ PATHWAYS_FILTER_CATEGORIES),
/* harmony export */   "PERMS": () => (/* binding */ PERMS),
/* harmony export */   "RISK_OF_CHANGE_DESC": () => (/* binding */ RISK_OF_CHANGE_DESC),
/* harmony export */   "RISK_OF_CHANGE_LABEL": () => (/* binding */ RISK_OF_CHANGE_LABEL),
/* harmony export */   "RULES_FETCH_URL": () => (/* binding */ RULES_FETCH_URL),
/* harmony export */   "RULE_CATEGORIES": () => (/* binding */ RULE_CATEGORIES),
/* harmony export */   "SEVERITY_MAP": () => (/* binding */ SEVERITY_MAP),
/* harmony export */   "STATS_REPORTS_FETCH_URL": () => (/* binding */ STATS_REPORTS_FETCH_URL),
/* harmony export */   "STATS_SYSTEMS_FETCH_URL": () => (/* binding */ STATS_SYSTEMS_FETCH_URL),
/* harmony export */   "SYSTEMS_FETCH_URL": () => (/* binding */ SYSTEMS_FETCH_URL),
/* harmony export */   "SYSTEM_FILTER_CATEGORIES": () => (/* binding */ SYSTEM_FILTER_CATEGORIES),
/* harmony export */   "SYSTEM_TYPES": () => (/* binding */ SYSTEM_TYPES),
/* harmony export */   "TOTAL_RISK_LABEL": () => (/* binding */ TOTAL_RISK_LABEL),
/* harmony export */   "TOTAL_RISK_LABEL_LOWER": () => (/* binding */ TOTAL_RISK_LABEL_LOWER),
/* harmony export */   "UI_BASE": () => (/* binding */ UI_BASE),
/* harmony export */   "exportNotifications": () => (/* binding */ exportNotifications)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/@formatjs/intl/lib/src/utils.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/provider.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-translations/ */ "./node_modules/@redhat-cloud-services/frontend-components-translations/esm/index.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Messages */ "./src/Messages.js");
/* harmony import */ var _Utilities_intlHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utilities/intlHelper */ "./src/Utilities/intlHelper.js");


/* eslint-disable max-len */




var cache = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.createIntlCache)();
var locale = navigator.language.slice(0, 2);
var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.createIntl)({
  locale: locale
}, cache);
var intlSettings = {
  locale: locale
};
var BASE_URI = document.baseURI;
var BASE_URL = '/api/insights/v1';
var UI_BASE = './insights';
var DEBOUNCE_DELAY = 600;
var RULES_FETCH_URL = "".concat(BASE_URL, "/rule/");
var STATS_SYSTEMS_FETCH_URL = "".concat(BASE_URL, "/stats/systems/");
var STATS_REPORTS_FETCH_URL = "".concat(BASE_URL, "/stats/reports/");
var SYSTEMS_FETCH_URL = "".concat(BASE_URL, "/system/");
var SYSTEM_TYPES = {
  rhel: 105,
  ocp: 325
};
var RULE_CATEGORIES = {
  availability: 1,
  security: 2,
  stability: 3,
  performance: 4
};
var SEVERITY_MAP = {
  'critical-risk': 4,
  'high-risk': 3,
  'medium-risk': 2,
  'low-risk': 1
};
var RISK_OF_CHANGE_DESC = {
  1: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].riskOfChangeTextOne, {
    strong: function strong(str) {
      return (0,_Utilities_intlHelper__WEBPACK_IMPORTED_MODULE_3__.strong)(str);
    }
  }), intlSettings),
  2: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].riskOfChangeTextTwo, {
    strong: function strong(str) {
      return (0,_Utilities_intlHelper__WEBPACK_IMPORTED_MODULE_3__.strong)(str);
    }
  }), intlSettings),
  3: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].riskOfChangeTextThree, {
    strong: function strong(str) {
      return (0,_Utilities_intlHelper__WEBPACK_IMPORTED_MODULE_3__.strong)(str);
    }
  }), intlSettings),
  4: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].riskOfChangeTextFour, {
    strong: function strong(str) {
      return (0,_Utilities_intlHelper__WEBPACK_IMPORTED_MODULE_3__.strong)(str);
    }
  }), intlSettings)
};
var IMPACT_LABEL = {
  1: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].low), intlSettings),
  2: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].medium), intlSettings),
  3: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].high), intlSettings),
  4: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].critical), intlSettings)
};
var IMPACT_LABEL_LOWER = {
  1: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].low).toLowerCase(), intlSettings),
  2: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].medium).toLowerCase(), intlSettings),
  3: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].high).toLowerCase(), intlSettings),
  4: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].critical).toLowerCase(), intlSettings)
};
var LIKELIHOOD_LABEL = {
  1: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].low), intlSettings),
  2: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].medium), intlSettings),
  3: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].high), intlSettings),
  4: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].critical), intlSettings)
};
var LIKELIHOOD_LABEL_LOWER = {
  1: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].low).toLowerCase(), intlSettings),
  2: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].medium).toLowerCase(), intlSettings),
  3: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].high).toLowerCase(), intlSettings),
  4: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].critical).toLowerCase(), intlSettings)
};
var RISK_OF_CHANGE_LABEL = {
  1: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].veryLow), intlSettings),
  2: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].low), intlSettings),
  3: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].moderate), intlSettings),
  4: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].high), intlSettings)
};
var TOTAL_RISK_LABEL = {
  1: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].low), intlSettings),
  2: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].moderate), intlSettings),
  3: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].important), intlSettings),
  4: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].critical), intlSettings)
};
var TOTAL_RISK_LABEL_LOWER = {
  1: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].low).toLowerCase(), intlSettings),
  2: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].moderate).toLowerCase(), intlSettings),
  3: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].important).toLowerCase(), intlSettings),
  4: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].critical).toLowerCase(), intlSettings)
};
var PATHWAYS_FILTER_CATEGORIES = {
  has_incident: {
    type: 'checkbox',
    title: 'incidents',
    urlParam: 'has_incident',
    values: [{
      label: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].incidentRules), intlSettings),
      value: 'true'
    }, {
      label: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].nonIncidentRules), intlSettings),
      value: 'false'
    }]
  },
  reboot_required: {
    type: 'checkbox',
    title: 'reboot required',
    urlParam: 'reboot_required',
    values: [{
      label: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].required), intlSettings),
      text: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].required), intlSettings),
      value: 'true'
    }, {
      label: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].notRequired), intlSettings),
      text: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].notRequired), intlSettings),
      value: 'false'
    }]
  }
};
var FILTER_CATEGORIES = {
  total_risk: {
    type: 'checkbox',
    title: 'total risk',
    urlParam: 'total_risk',
    values: [{
      label: TOTAL_RISK_LABEL[4],
      value: '4'
    }, {
      label: TOTAL_RISK_LABEL[3],
      value: '3'
    }, {
      label: TOTAL_RISK_LABEL[2],
      value: '2'
    }, {
      label: TOTAL_RISK_LABEL[1],
      value: '1'
    }]
  },
  res_risk: {
    type: 'checkbox',
    title: 'risk of change',
    urlParam: 'res_risk',
    values: [{
      label: RISK_OF_CHANGE_LABEL[4],
      value: '4'
    }, {
      label: RISK_OF_CHANGE_LABEL[3],
      value: '3'
    }, {
      label: RISK_OF_CHANGE_LABEL[2],
      value: '2'
    }, {
      label: RISK_OF_CHANGE_LABEL[1],
      value: '1'
    }]
  },
  impact: {
    type: 'checkbox',
    title: 'impact',
    urlParam: 'impact',
    values: [{
      label: IMPACT_LABEL[4],
      value: '4'
    }, {
      label: IMPACT_LABEL[3],
      value: '3'
    }, {
      label: IMPACT_LABEL[2],
      value: '2'
    }, {
      label: IMPACT_LABEL[1],
      value: '1'
    }]
  },
  likelihood: {
    type: 'checkbox',
    title: 'likelihood',
    urlParam: 'likelihood',
    values: [{
      label: LIKELIHOOD_LABEL[4],
      value: '4'
    }, {
      label: LIKELIHOOD_LABEL[3],
      value: '3'
    }, {
      label: LIKELIHOOD_LABEL[2],
      value: '2'
    }, {
      label: LIKELIHOOD_LABEL[1],
      value: '1'
    }]
  },
  category: {
    type: 'checkbox',
    title: 'category',
    urlParam: 'category',
    values: [{
      label: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].availability), intlSettings),
      value: "".concat(RULE_CATEGORIES.availability)
    }, {
      label: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].performance), intlSettings),
      value: "".concat(RULE_CATEGORIES.performance)
    }, {
      label: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].stability), intlSettings),
      value: "".concat(RULE_CATEGORIES.stability)
    }, {
      label: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].security), intlSettings),
      value: "".concat(RULE_CATEGORIES.security)
    }]
  },
  incident: {
    type: 'checkbox',
    title: 'incidents',
    urlParam: 'incident',
    values: [{
      label: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].incidentRules), intlSettings),
      value: 'true'
    }, {
      label: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].nonIncidentRules), intlSettings),
      value: 'false'
    }]
  },
  has_playbook: {
    type: 'checkbox',
    title: 'remediation',
    urlParam: 'has_playbook',
    values: [{
      label: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].ansibleSupportYes), intlSettings),
      value: 'true'
    }, {
      label: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].ansibleSupportNo), intlSettings),
      value: 'false'
    }]
  },
  reboot: {
    type: 'checkbox',
    title: 'reboot required',
    urlParam: 'reboot',
    values: [{
      label: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].required), intlSettings),
      text: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].required), intlSettings),
      value: 'true'
    }, {
      label: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].notRequired), intlSettings),
      text: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].notRequired), intlSettings),
      value: 'false'
    }]
  },
  rule_status: {
    type: 'radio',
    title: 'status',
    urlParam: 'rule_status',
    values: [{
      label: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].all), intlSettings),
      value: 'all'
    }, {
      label: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].enabled), intlSettings),
      value: 'enabled'
    }, {
      label: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].disabled), intlSettings),
      value: 'disabled'
    }, {
      label: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].redhatDisabled), intlSettings),
      value: 'rhdisabled'
    }]
  },
  impacting: {
    type: 'checkbox',
    title: 'systems impacted',
    urlParam: 'impacting',
    values: [{
      label: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].oneOrMore), intlSettings),
      text: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].oneOrMore), intlSettings),
      value: 'true'
    }, {
      label: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].none), intlSettings),
      text: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].none), intlSettings),
      value: 'false'
    }]
  }
};
var SYSTEM_FILTER_CATEGORIES = {
  hits: {
    type: 'checkbox',
    title: 'Total Risk',
    urlParam: 'hits',
    values: [{
      label: 'All systems',
      text: 'All systems',
      value: 'all'
    }].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(FILTER_CATEGORIES.total_risk.values))
  },
  incident: {
    type: 'checkbox',
    title: 'Incidents',
    urlParam: 'incident',
    values: [{
      label: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].incidentSystems), intlSettings),
      value: 'true'
    }, {
      label: (0,_redhat_cloud_services_frontend_components_translations___WEBPACK_IMPORTED_MODULE_1__.intlHelper)(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].nonIncidentSystems), intlSettings),
      value: 'false'
    }]
  },
  rhel_version: {
    type: 'checkbox',
    title: 'Operating system',
    urlParam: 'rhel_version'
  }
};
var PERMS = {
  "export": ['advisor:*:*', 'advisor:exports:read'],
  disableRec: ['advisor:*:*', 'advisor:disable-recommendations:write'],
  viewRecs: ['advisor:*:*', 'advisor:recommendation-results:read']
};
var exportNotifications = {
  pending: {
    title: "Preparing export. Once complete, your download will start automatically.",
    variant: 'info'
  },
  success: {
    title: "Downloading export",
    variant: 'success'
  },
  error: {
    title: 'Couldn’t download export. Reinitiate this export to try again.',
    variant: 'danger',
    autoDismiss: false
  }
};

/***/ }),

/***/ "./src/Messages.js":
/*!*************************!*\
  !*** ./src/Messages.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* eslint-disable max-len */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  documentTitle: {
    id: 'documentTitle',
    description: 'The title of the page as it appears in the browser tab',
    defaultMessage: '{subnav} - Advisor | Red Hat Insights'
  },
  rules: {
    id: 'rules',
    description: 'Used as a title',
    defaultMessage: 'Rules'
  },
  redHatInsights: {
    id: 'redHatInsights',
    description: 'Used as a title',
    defaultMessage: 'Red Hat Insights'
  },
  recommendation: {
    id: 'recommendation',
    description: 'Recommendation',
    defaultMessage: 'Recommendation'
  },
  recommendations: {
    id: 'recommendations',
    description: 'Used as a title',
    defaultMessage: 'Recommendations'
  },
  modified: {
    id: 'modified',
    description: 'Recommendation table column title',
    defaultMessage: 'Modified'
  },
  rule: {
    id: 'rule',
    description: 'Recommendation table column title',
    defaultMessage: 'Rule'
  },
  totalRisk: {
    id: 'totalRisk',
    description: 'Recommendation table column title, recommendationdetails label',
    defaultMessage: 'Total risk'
  },
  systems: {
    id: 'systems',
    description: 'Systems title used in recommendation table column and systems tab header',
    defaultMessage: 'Systems'
  },
  system: {
    id: 'system',
    description: 'System',
    defaultMessage: 'System'
  },
  systemsExposed: {
    id: 'systemsExposed',
    description: 'Systems title used in exec report',
    defaultMessage: 'Systems exposed'
  },
  remediation: {
    id: 'remediation',
    description: 'Remediation table column title',
    defaultMessage: 'Remediation'
  },
  playbook: {
    id: 'playbook',
    description: 'Remediation/Playbook table cell text',
    defaultMessage: 'Playbook'
  },
  manual: {
    id: 'manual',
    description: 'Maunal table cell text',
    defaultMessage: 'Manual'
  },
  notAvailable: {
    id: 'notAvailable',
    description: 'Not availabl table cell text',
    defaultMessage: 'N/A'
  },
  rulesTableHideReportsErrorEnabled: {
    id: 'rulestable.hidereports.errorenabling',
    description: 'Recommendation table, hide reports action, error for enabling reporting on a recommendation',
    defaultMessage: 'Enabling reports failed'
  },
  disableRule: {
    id: 'disableRule',
    description: 'Recommendation table, action text for disabling reporting of a recommendation',
    defaultMessage: 'Disable recommendation'
  },
  disableRuleForSystems: {
    id: 'disableRuleForSystems',
    description: 'Recommendationdetail system table, action text for disabling reporting of a recommendationfor a system',
    defaultMessage: 'Disable recommendation for selected systems'
  },
  disableRuleBody: {
    id: 'disableRuleBody',
    description: 'Explaining the action of disabling a recommendation',
    defaultMessage: "This recommendation will not be shown in reports and dashboards."
  },
  disableRuleSingleSystem: {
    id: 'disableRuleSingleSystem',
    description: 'Explaining the action of disabling a recommendationfor a single system',
    defaultMessage: 'Disable only for this system'
  },
  ruleIsDisabled: {
    id: 'ruleIsDisabled',
    description: 'Exclaiming that the recommendationis disabled',
    defaultMessage: 'Recommendation is disabled'
  },
  recSuccessfullyDisabled: {
    id: 'recSuccessfullyDisabled',
    description: 'Explaining that the rec was disabled successfully',
    defaultMessage: 'Recommendation disabled'
  },
  recSuccessfullyEnabled: {
    id: 'recSuccessfullyEnabled',
    description: 'Explaining that the rule was enabled successfully',
    defaultMessage: 'Recommendation enabled'
  },
  ruleIsDisabledTooltip: {
    id: 'ruleIsDisabledTooltip',
    description: 'Disabled badge tooltip explaining the meaning of a disabled recommendation',
    defaultMessage: 'Indicates this recommendation across all systems will not be shown in reports and dashboards.'
  },
  ruleIsDisabledBody: {
    id: 'ruleIsDisabledBody',
    description: 'Explaining that the recommendations disabled',
    defaultMessage: 'This recommendation was disabled and has no results.'
  },
  ruleIsDisabledBodyWithJustification: {
    id: 'ruleIsDisabledBodyWithJustification',
    description: 'Explaining that the recommendationis disabled',
    defaultMessage: 'This recommendation has been disabled because {reason} and has no results.'
  },
  ruleIsDisabledJustification: {
    id: 'ruleIsDisabledJustification',
    description: 'Explaining that the recommendationis disabled with following justification',
    defaultMessage: 'This recommendation has been disabled for all systems for the following reason: '
  },
  ruleIsDisabledForSystems: {
    id: 'ruleIsDisabledForSystems',
    description: 'Exclaiming that the recommendationis disabled for systems',
    defaultMessage: 'Recommendation is disabled for some systems'
  },
  ruleIsDisabledForAllSystems: {
    id: 'ruleIsDisabledForAllSystems',
    description: 'Exclaiming that the recommendationis disabled for all systems',
    defaultMessage: 'Recommendation is disabled for all systems'
  },
  ruleIsDisabledForSystemsBody: {
    id: 'ruleIsDisabledForSystemsBody',
    description: 'Exclaiming that the recommendationis disabled for systems (system count)',
    defaultMessage: 'Recommendation is disabled for {systems, plural, one {# system} other {# systems}}'
  },
  enableRuleForSystems: {
    id: 'enableRuleForSystems',
    description: 'Enable this recommendationfor all systems',
    defaultMessage: 'Enable this recommendation for all systems'
  },
  viewSystems: {
    id: 'viewSystems',
    description: 'View systems',
    defaultMessage: 'View systems'
  },
  justificationNote: {
    id: 'justificationNote',
    description: 'Justification note',
    defaultMessage: 'Justification note'
  },
  enableRule: {
    id: 'enableRule',
    description: 'Recommendation table, action text for enabling reporting of a recommendation',
    defaultMessage: 'Enable recommendation'
  },
  rulesTableNoRuleHitsTitle: {
    id: 'rulestable.norulehits.title',
    description: 'Recommendation table, no recommendations message, title',
    defaultMessage: 'No recommendations'
  },
  rulesTableNoRuleHitsEnabledRulesBody: {
    id: 'rulestable.norulehits.enabledrulesbody',
    description: 'Recommendation table, no recommendations message for enabled rules, body',
    defaultMessage: 'None of your connected systems are affected by enabled recommendations.'
  },
  rulesTableNoRuleHitsEnabledRulesBodySecondLine: {
    id: 'rulestable.norulehits.enabledrulesbodysecondline',
    description: 'Recommendation table, no recommendations message for enabled rules, body second line',
    defaultMessage: 'To find more recommendations, expand your filter settings to include all recommendations.'
  },
  noRecommendations: {
    id: 'noRecommendations',
    description: 'Recommendation table, no recommendations message for any known rules, body',
    defaultMessage: 'None of your connected systems are affected by any known recommendations.'
  },
  rulesTableNoRuleHitsDisabledRulesBody: {
    id: 'rulestable.norules.disabledrulesbody',
    description: 'Recommendation table, no recommendations message for any disabled rules, body',
    defaultMessage: "We haven't detected any issues with your connected systems."
  },
  rulesTableNoRuleHitsDisabledRulesBodySecondLine: {
    id: 'rulestable.norules.disabledrulesbodysecondline',
    description: 'Recommendation table, no recommendations message for any disabled rules, body second line',
    defaultMessage: 'None of your connected systems are affected by enabled recommendations, and you currently have no disabled recommendations.'
  },
  rulesTableNoRuleHitsRedHatDisabledRulesBody: {
    id: 'rulestable.norules.redhatdisabledrulesbody',
    description: 'Recommendation table, no recommendations message for any Red Hat disabled rules, body',
    defaultMessage: 'This recommendation was disabled proactively by Red Hat and has no results.'
  },
  rulesTableNoRuleHitsAddDisabledButton: {
    id: 'rulestable.norulehits.adddisabledbutton',
    description: 'Recommendation table, no recommendations message for any enabled rules, include disabled recommendations button',
    defaultMessage: 'Include disabled recommendations'
  },
  disabled: {
    id: 'disabled',
    description: 'Disabled',
    defaultMessage: 'Disabled'
  },
  redhatDisabled: {
    id: 'redhatDisabled',
    description: 'Red Hat disabled',
    defaultMessage: 'Red Hat disabled'
  },
  nA: {
    id: 'nA',
    description: 'Abreviated as N/A, text equivelent, not applicable',
    defaultMessage: 'N/A'
  },
  rulesTableFilterInputText: {
    id: 'rulestable.filter.inputtext',
    description: 'Search text placeholder for recommendation table',
    defaultMessage: 'Find a recommendation...'
  },
  exportData: {
    id: 'exportData',
    description: 'Describes function of export icon',
    defaultMessage: 'Export data'
  },
  exportJson: {
    id: 'exportJson',
    description: 'Button text to export/download recommendation table data as json',
    defaultMessage: 'Export to JSON'
  },
  exportCsv: {
    id: 'exportCsv',
    description: 'Button text to export/download recommendation table data as csv',
    defaultMessage: 'Export to CSV'
  },
  exportPdf: {
    id: 'exportPdf',
    description: 'Button text to export/download data as pdf',
    defaultMessage: 'Export to PDF'
  },
  rulesTableActionShow: {
    id: 'rulestable.action.show',
    description: 'Label for action show all recommendationsincluding those that affect systems',
    defaultMessage: 'Show recommendations with no impacted systems'
  },
  rulesTableActionHide: {
    id: 'rulestable.action.hide',
    description: 'Label for action show only recommendationsthat affect systems',
    defaultMessage: 'Hide recommendations with no impacted systems'
  },
  rulesTableActionShowDisabled: {
    id: 'rulestable.action.showDisabled',
    description: 'Label for action show all recommendationsincluding those that are disabled',
    defaultMessage: 'Show disabled recommendations'
  },
  rulesTableActionHideDisabled: {
    id: 'rulestable.action.hideDisabled',
    description: 'Label for action show only recommendationsthat are enabled',
    defaultMessage: 'Hide disabled recommendations'
  },
  rulesTableFetchRulesError: {
    id: 'rulestable.fetchrules.error',
    description: 'Recommendation table, fetch rules, error message',
    defaultMessage: 'There was an error fetching recommendations list.'
  },
  loading: {
    id: 'loading',
    description: 'Loading text',
    defaultMessage: 'Loading...'
  },
  summaryChartNoHits: {
    id: 'summarychart.nohits',
    description: 'The no hits text for the summary chart',
    defaultMessage: 'Your connected systems have no recommendations.'
  },
  summaryChartItem: {
    id: 'summarychart.item',
    description: 'Text for each summary chart item of varying severity',
    defaultMessage: '{numIssues} {name} affecting {affectedSystems} {affectedSystems, plural, one {system} other {systems}}'
  },
  summaryChartItemNoHits: {
    id: 'summarychart.itemnohits',
    description: 'Text for each summary chart item of varying severity that has no hits',
    defaultMessage: 'No {severity} hits.'
  },
  overviewChartNoHits: {
    id: 'overviewchart.nohits',
    description: 'The no hits text for the overview chart',
    defaultMessage: 'Your connected systems have no categorized recommendations.'
  },
  totalHits: {
    id: 'total hits',
    description: 'The total hits label for the overview donut chart',
    defaultMessage: 'Total hits'
  },
  resetFilters: {
    id: 'resetFilters',
    description: 'Filter action, reset all filter chips',
    defaultMessage: 'Reset filters'
  },
  filterBy: {
    id: 'filterBy',
    description: 'Filter by name',
    defaultMessage: 'Filter by name'
  },
  filterTagsInModal: {
    id: 'filterTagsInModal',
    description: 'Filter text input, for ManageTags Modal',
    defaultMessage: 'Filter tags'
  },
  knowledgebaseArticle: {
    id: 'knowledgebasearticle',
    description: 'Knowledgebase article',
    defaultMessage: 'Knowledgebase article'
  },
  riskOfChange: {
    id: 'riskOfChange',
    description: 'Risk of Change',
    defaultMessage: 'Risk of change'
  },
  rulesDetailsTotalRiskBody: {
    id: 'rulesDetailsTotalRiskBody',
    description: 'Text explaining the total risk value of this recommendation',
    defaultMessage: "The total risk of this remediation is <strong>{risk}</strong>,\n                        based on the combination of likelihood and impact to remediate."
  },
  undefined: {
    id: 'undefined',
    description: 'Undefined',
    defaultMessage: 'Undefined'
  },
  learnMore: {
    id: 'learnMore',
    description: 'Topic card, link to topic details page',
    defaultMessage: 'Learn more'
  },
  countMore: {
    id: 'countMore',
    description: 'Accepts a count of items, appends the text more',
    defaultMessage: '{count} more'
  },
  countMoreTags: {
    id: 'countMoreTags',
    description: 'Accepts a count of additional taks available',
    defaultMessage: '{count} more tags available'
  },
  recommended: {
    id: 'recommended',
    description: 'Recommended',
    defaultMessage: 'Recommended'
  },
  featured: {
    id: 'featured',
    description: 'Featured',
    defaultMessage: 'Featured'
  },
  status: {
    id: 'status',
    description: 'Status',
    defaultMessage: 'Status'
  },
  label: {
    id: 'label',
    description: 'Label',
    defaultMessage: 'Label'
  },
  topicCardSystemsaffected: {
    id: 'topiccard.systemsaffected',
    description: 'Topic card, systems affected text',
    defaultMessage: '{systems, plural, one {# system} other {# systems}} affected'
  },
  overview: {
    id: 'overview',
    description: 'Overview',
    defaultMessage: 'Overview'
  },
  overviewCategoryChartTitle: {
    id: 'overview.categorychart.title',
    description: 'Overview Category donut chart title',
    defaultMessage: 'Recommendations by category'
  },
  overviewSeverityChartTitle: {
    id: 'overview.severitychart.title',
    description: 'Overview severity chart title',
    defaultMessage: 'Recommendations by severity'
  },
  overviewSystemInventory: {
    id: 'overview.systemInventory.title',
    description: 'Overview system inventory chart title',
    defaultMessage: 'System inventory'
  },
  overviewSystemInventoryStale: {
    id: 'overview.systemInventory.stale',
    description: 'Overview system inventory chart stale systems',
    defaultMessage: '{systems, plural, one {# stale system} other {# stale systems}}'
  },
  overviewSystemInventoryRemoved: {
    id: 'overview.systemInventory.Removed',
    description: 'Overview system inventory chart systems to be removed',
    defaultMessage: '{systems, plural, one {# system} other {# systems}} to be removed'
  },
  overviewSystemInventoryOK: {
    id: 'overview.systemInventory.OK',
    description: 'Overview system inventory chart systems OK',
    defaultMessage: 'All systes are up to date'
  },
  overviewActioncallTitle: {
    id: 'overview.actioncall.title',
    description: 'Overview, call to action title',
    defaultMessage: 'Get started with Red Hat Insights'
  },
  overviewConnectsystemsTitle: {
    id: 'overview.connectsystems.title',
    description: 'Overview, title for connecting first systems',
    defaultMessage: 'Connect your first systems'
  },
  overviewConnectsystemsBody: {
    id: 'overview.connectsystems.body',
    description: 'Overview, body for connecting first systems',
    defaultMessage: 'Connect at least 10 systems to get a better awareness of issues and optimizations identified across your infastructure'
  },
  overviewConnectsystemsAction: {
    id: 'overview.connectsystems.action',
    description: 'Overview, action link for connecting first systems',
    defaultMessage: "Learn how to connect a system to Insights"
  },
  overviewRemediateTitle: {
    id: 'overview.remediate.title',
    description: 'Overview, title for remediate',
    defaultMessage: 'Remediate Insights findings with Ansible'
  },
  overviewRemediateBody: {
    id: 'overview.remediate.body',
    description: 'Overview, body for remediate',
    defaultMessage: "Easily generate an Ansible playbook to\n        quickly and effectively remediate Insights findings"
  },
  overviewRemediateAction: {
    id: 'overview.remediate.action',
    description: 'Overview, action link for remediate',
    defaultMessage: 'Get started with Insights and Ansible Playbooks'
  },
  overviewDeployTitle: {
    id: 'overview.deploy.title',
    description: 'Overview, title for deploy',
    defaultMessage: 'Deploy Insights at scale'
  },
  overviewDeployBody: {
    id: 'overview.deploy.body',
    description: 'Overview, body for deploy',
    defaultMessage: "Get more out of Insights with more systems.\n        Quickly connect systems with <linkansible> Ansible </linkansible>\n        or <linkpuppet> Puppet </linkpuppet>"
  },
  overviewDeployAction: {
    id: 'overview.deploy.action',
    description: 'Overview, action link for deploy',
    defaultMessage: 'Download Ansible Playbook'
  },
  overviewActionCallNoSystemsBody: {
    id: 'overview.actioncallnosystems.body',
    description: 'Overview, action call body when there are no systems',
    defaultMessage: "With predictive analytics, avoid problems and unplanned <break> </break>\n        downtime in your Red Hat environment. Red Hat Insights is <break> </break>\n        included with your Red Hat Enterprise Linux subscription"
  },
  overviewActionCallNoSystemsAction: {
    id: 'overview.actioncallnosystems.action',
    description: 'Overview, action call link for when there are no systems',
    defaultMessage: 'Getting started documentation'
  },
  installClient: {
    id: 'installClient',
    description: 'Install the client on the RHEL system',
    defaultMessage: 'Install the client on the RHEL system.'
  },
  registerSystem: {
    id: 'registerSystem',
    description: 'Register the system to Red Hat Insights',
    defaultMessage: 'Register the system to Red Hat Insights.'
  },
  rulesDetailsModifieddate: {
    id: 'rulesdetails.modifieddate',
    description: 'Recommendationsdetails, modified date',
    defaultMessage: 'Modified date: {date}'
  },
  affectedSystems: {
    id: 'affectedSystems',
    description: 'Affected systems',
    defaultMessage: 'Affected systems'
  },
  readmore: {
    id: 'readmore',
    description: 'Read more',
    defaultMessage: 'Read more'
  },
  readless: {
    id: 'readless',
    description: 'Read less',
    defaultMessage: 'Read less'
  },
  deleteTopic: {
    id: 'deleteTopic',
    description: 'Used for Button in Edit Topic Modal',
    defaultMessage: 'Delete topic'
  },
  topicDetailslNodetailsTitle: {
    id: 'topicdetails.nodetails.title',
    description: 'Topic details, title when none are present or exist',
    defaultMessage: 'No details for topic'
  },
  topicDetailslNodetailsBody: {
    id: 'topicdetails.nodetails.body',
    description: 'Topic details, body when none are present or exist',
    defaultMessage: 'There exist no further details for this topic.'
  },
  title: {
    id: 'title',
    description: 'Used in the topics admin table title column, identifying display title of a topic',
    defaultMessage: 'Title'
  },
  tag: {
    id: 'tag',
    description: 'Used in the topics admin table tag column, identifying display tag for a topic',
    defaultMessage: 'Tag'
  },
  topicAddEditDescription: {
    id: 'topicAddEditDescription',
    description: 'description header for TopicAddEdit Modal',
    defaultMessage: 'Description'
  },
  topicAddEditDescriptionHelperText: {
    id: 'topicAddEditDescriptionHelperText',
    description: 'helper text for description text area on TopicAddEdit Modal',
    defaultMessage: 'Shown to users to describe the topic'
  },
  topicAddEditDisabled: {
    id: 'topicAddEditDisabled',
    description: 'Disabled label in TopicAddEdit radio buttons',
    defaultMessage: 'Disabled (not visible)'
  },
  topicAddEditEnabled: {
    id: 'topicAddEditEnabled',
    description: 'Enabled label in TopicAddEdit radio buttons',
    defaultMessage: 'Enabled (visible)'
  },
  topicAddEditFeatureBox: {
    id: 'topicAddEditFeatureBox',
    description: 'label for feature checkbox in TopicAddEdit Modal',
    defaultMessage: 'Feature this topic'
  },
  topicAddEditTagHelperText: {
    id: 'topicAddEditLabelHelperText',
    description: 'helper text for tag text input in TopicAddEdit Modal',
    defaultMessage: 'Recommendations tagged with this tag will be added to the topic'
  },
  topicAdminCreate: {
    id: 'topicAdminCreate',
    description: 'Create Label',
    defaultMessage: 'Create new topic'
  },
  topicAdminEdit: {
    id: 'topicAdminEdit',
    description: 'Edit Label',
    defaultMessage: 'Edit topic'
  },
  topicAdminTitle: {
    id: 'topicAdminTitle',
    description: 'The title for the Topic Admin page',
    defaultMessage: 'Topic - administration'
  },
  topics: {
    id: 'topics',
    description: 'Topics Title',
    defaultMessage: 'Topics'
  },
  topicSlug: {
    id: 'topicslug',
    description: 'Used in the topics admin table slug column, identifying display slug for a topic',
    defaultMessage: 'Slug'
  },
  topicsListNotopicsTitle: {
    id: 'topicslist.notopics.title',
    description: 'Topics list, no topics title',
    defaultMessage: 'No topics'
  },
  topicsListNotopicsBody: {
    id: 'topicslist.notopics.body',
    description: 'Topics list, no topics body',
    defaultMessage: 'Either no topics presently exist or there is an issue presenting them.'
  },
  topicsListNoHitsBody: {
    id: 'topicslist.nohits.body',
    description: 'Topics list, no topics body',
    defaultMessage: 'To continue, edit your filter settings and search again.'
  },
  remediate: {
    id: 'remediate',
    description: 'Remediate',
    defaultMessage: 'Remediate'
  },
  selectAll: {
    id: 'selectAll',
    description: 'Action, Bulk select all items in a table with number',
    defaultMessage: 'Select all ({items} items)'
  },
  selectPage: {
    id: 'selectPage',
    description: 'Action, Bulk select all visible items in table, with number',
    defaultMessage: 'Select page ({items} items)'
  },
  selectNone: {
    id: 'selectNone',
    description: 'Action, Bulk deselect all',
    defaultMessage: 'Select none (0 items)'
  },
  topicRelatedToRule: {
    id: 'topicRelatedToRule',
    description: 'Identifying the list of topics that include this recommendation',
    defaultMessage: 'Topics related to this recommendation'
  },
  name: {
    id: 'name',
    description: 'Used in the system table title column, identifying display name of a system',
    defaultMessage: 'Name'
  },
  numberRuleHits: {
    id: 'numberRuleHits',
    description: 'Used in the system table title column, number of recommendations per system',
    defaultMessage: 'Recommendations'
  },
  lastSeen: {
    id: 'lastSeen',
    description: 'Used in the system table title column, the last time a system has checked in',
    defaultMessage: 'Last seen'
  },
  noTags: {
    id: 'noTags',
    description: 'No tags message, title',
    defaultMessage: 'No tags'
  },
  noHitsTitle: {
    id: 'nohits.title',
    description: 'No hits message, title',
    defaultMessage: 'No matching {item} found'
  },
  noHitsBody: {
    id: 'nohits.body',
    description: 'No hits messags, body',
    defaultMessage: 'The filter criteria matches no {item}. Try changing your filter settings.'
  },
  search: {
    id: 'search',
    description: 'Commonly used in text input search fields ',
    defaultMessage: 'Search'
  },
  systemTableFetchError: {
    id: 'systemtable.fetch.error',
    description: 'System table, fetch , error message',
    defaultMessage: 'There was an error fetching systems'
  },
  low: {
    id: 'low',
    description: 'Filter value',
    defaultMessage: 'Low'
  },
  moderate: {
    id: 'moderate',
    description: 'Filter value',
    defaultMessage: 'Moderate'
  },
  important: {
    id: 'important',
    description: 'Filter value',
    defaultMessage: 'Important'
  },
  critical: {
    id: 'critical',
    description: 'Filter value',
    defaultMessage: 'Critical'
  },
  veryLow: {
    id: 'veryLow',
    description: 'Filter value',
    defaultMessage: 'Very Low'
  },
  medium: {
    id: 'medium',
    description: 'Filter value',
    defaultMessage: 'Medium'
  },
  high: {
    id: 'high',
    description: 'Filter value',
    defaultMessage: 'High'
  },
  availability: {
    id: 'availability',
    description: 'Filter value',
    defaultMessage: 'Availability'
  },
  performance: {
    id: 'performance',
    description: 'Filter value',
    defaultMessage: 'Performance'
  },
  stability: {
    id: 'stability',
    description: 'Filter value',
    defaultMessage: 'Stability'
  },
  security: {
    id: 'security',
    description: 'Filter value',
    defaultMessage: 'Security'
  },
  enabled: {
    id: 'enabled',
    description: 'Filter value',
    defaultMessage: 'Enabled'
  },
  impact: {
    id: 'impact',
    description: 'Filter title',
    defaultMessage: 'Impact'
  },
  impactLevel: {
    id: 'impactLevel',
    description: 'Describes the impact level of a rule',
    defaultMessage: '{level} impact'
  },
  impactDescription: {
    id: 'impactDescription',
    description: 'Used in the SeverityLine tooltip to describe the impact of a rule',
    defaultMessage: 'The impact of the problem would be {level} if it occurred.'
  },
  category: {
    id: 'category',
    description: 'Filter title',
    defaultMessage: 'Category'
  },
  likelihood: {
    id: 'likelihood',
    description: 'Filter title',
    defaultMessage: 'Likelihood'
  },
  likelihoodLevel: {
    id: 'likelihoodLevel',
    description: 'Describes the likelihood of a rule',
    defaultMessage: '{level} likelihood'
  },
  likelihoodDescription: {
    id: 'likelihoodDescription',
    description: 'Used in the SeverityLine tooltip to describe the likelihood of a rule',
    defaultMessage: 'The likelihood that this will be a problem is {level}.'
  },
  riskOfChangeText: {
    id: 'riskOfChangeText',
    description: 'Risk of change text',
    defaultMessage: 'The risk of change is <strong>{ level }</strong>, because the change takes very little time to implement and there is minimal impact to system operations.'
  },
  riskOfChangeLabel: {
    id: 'riskOfChangeLabel',
    defaultMessage: '{level}'
  },
  riskOfChangeTextOne: {
    id: 'riskOfChangeTextOne',
    description: 'Risk of change text explaining a value one',
    defaultMessage: 'The risk of change is <strong>very low</strong>, because the change takes very little time to implement and there is minimal impact to system operations.'
  },
  riskOfChangeTextTwo: {
    id: 'riskOfChangeTextTwo',
    description: 'Risk of change text explaining a value two',
    defaultMessage: 'The risk of change is <strong>low</strong>, because the change does not require that a system be taken offline.'
  },
  riskOfChangeTextThree: {
    id: 'riskOfChangeTextThree',
    description: 'Risk of change text explaining a value three',
    defaultMessage: 'The risk of change is <strong>moderate</strong>, because the change will likely require an outage window.'
  },
  riskOfChangeTextFour: {
    id: 'riskOfChangeTextFour',
    description: 'Risk of change text explaining a value four',
    defaultMessage: "The risk of change is <strong>high</strong>, because the change takes a significant amount of time and planning to execute, and will impact the system and business operations of the host due to downtime."
  },
  no: {
    id: 'no',
    description: 'Used to signal no ansible playbook',
    defaultMessage: "No"
  },
  description: {
    id: 'description',
    description: 'Description',
    defaultMessage: "Description"
  },
  save: {
    id: 'save',
    description: 'Save',
    defaultMessage: "Save"
  },
  cancel: {
    id: 'cancel',
    description: 'Cancel',
    defaultMessage: "Cancel"
  },
  none: {
    id: 'none',
    description: 'None',
    defaultMessage: "None"
  },
  is: {
    id: 'is',
    description: 'is',
    defaultMessage: 'is'
  },
  isNot: {
    id: 'is not',
    description: 'is not',
    defaultMessage: 'is not'
  },
  dateDisabled: {
    id: 'dateDisabled',
    description: 'Date disabled',
    defaultMessage: 'Date disabled'
  },
  hostAckModalTitle: {
    id: 'hostAckModalTitle',
    description: 'Title for host ack table modal',
    defaultMessage: 'Recommendation has been disabled for:'
  },
  systemName: {
    id: 'systemName',
    description: 'System name',
    defaultMessage: 'System name'
  },
  systemReboot: {
    id: 'systemReboot',
    description: 'Says remediation does requires system reboot',
    defaultMessage: 'System reboot <strong>{ status }</strong> required.'
  },
  enable: {
    id: 'enable',
    description: 'Enable',
    defaultMessage: 'Enable'
  },
  error: {
    id: 'error',
    description: 'Error',
    defaultMessage: 'Error'
  },
  viewAffectedSystems: {
    id: 'viewAffectedSystems',
    description: 'Link text to view all hosts that are affected by a recommendation',
    defaultMessage: 'View {systems, plural, one {the affected system} other {# affected systems}}'
  },
  ruleHelpful: {
    id: 'ruleHelpful',
    description: 'Asking the user if they find a recommendation helpful',
    defaultMessage: 'Is this recommendation helpful?'
  },
  feedbackThankYou: {
    id: 'feedbackThankYou',
    description: 'Thanking user for feedback',
    defaultMessage: 'Thank you for your feedback!'
  },
  all: {
    id: 'all',
    description: 'All',
    defaultMessage: 'All'
  },
  os: {
    id: 'os',
    description: 'Operating system',
    defaultMessage: 'Os'
  },
  operatingSystem: {
    id: 'operatingSystem',
    description: 'Operating system',
    defaultMessage: 'Operating system'
  },
  incidentRules: {
    id: 'incidentRules',
    description: 'Pathways with incidents',
    defaultMessage: 'Incident'
  },
  nonIncidentRules: {
    id: 'nonIncidentRules',
    description: 'Pathways with no incidents',
    defaultMessage: 'Non-incident'
  },
  incidentSystems: {
    id: 'incidentSystems',
    description: 'Systems with incidents',
    defaultMessage: 'Incident systems'
  },
  nonIncidentSystems: {
    id: 'nonIncidentSystems',
    description: 'Systems with no incidents',
    defaultMessage: 'Non-incident systems'
  },
  incidents: {
    id: 'incidents',
    description: 'Incidents',
    defaultMessage: 'Incidents'
  },
  incident: {
    id: 'incident',
    description: 'Incident',
    defaultMessage: 'Incident'
  },
  incidentTooltip: {
    id: 'incidentTooltip',
    description: 'Incident badge tooltip text',
    defaultMessage: 'Indicates configurations that are currently affecting your systems'
  },
  cveAlert: {
    id: 'cveAlert',
    description: 'Cve alert body',
    defaultMessage: 'As of April 20th, 2020, all CVE recommendations previously shown in recommendations have moved over to the Vulnerability section of Red Hat Insights which provides additional capabilities for enhanced CVE identification and remediation.'
  },
  cveAlertTitle: {
    id: 'cveAlertTitle',
    description: 'Cve alert title',
    defaultMessage: 'CVE recommendations relocated'
  },
  downloadExecutiveLabel: {
    id: 'downloadExecutiveLabel',
    description: 'Label given to link for downloading exec report',
    defaultMessage: 'Download executive report'
  },
  insightsHeader: {
    id: 'insightsHeader',
    description: 'Type value for Executive Reports Download Button',
    defaultMessage: 'Advisor'
  },
  execReportHeader: {
    id: 'execReportHeader',
    description: 'Header in the Executive Report describing the number of systems and risk analyzed',
    defaultMessage: "This report is an executive summary of recommendations that may impact your Red Hat Enterprise Linux servers. Red Hat Advisor service is analyzing {systems} and has identified {risks} that impact 1 or more of these systems."
  },
  execReportHeaderSystems: {
    id: 'execReportHeaderSystems',
    description: 'System part of the exec report header',
    defaultMessage: '{systems, plural, one {# RHEL system} other {# RHEL systems}}'
  },
  execReportHeaderRisks: {
    id: 'execReportHeaderRisks',
    description: 'Risk part of the exec report header',
    defaultMessage: '{risks, plural, one {# Risk} other {# Risks}}'
  },
  sysTableCount: {
    id: 'sysTableCount',
    description: 'Systable pdf report',
    defaultMessage: 'This report identified {systems}.'
  },
  filtersApplied: {
    id: 'filtersApplied',
    description: 'Systable pdf report',
    defaultMessage: 'Filters applied:'
  },
  tagsApplied: {
    id: 'tagsApplied',
    description: 'Systable pdf report',
    defaultMessage: 'Tags applied:'
  },
  recNumAndPercentage: {
    id: 'recNumAndPercentage',
    description: 'Given number and total displays percentage',
    defaultMessage: '{count} ({total}% of total)'
  },
  severity: {
    id: 'severity',
    description: 'Severity',
    defaultMessage: 'Severity'
  },
  severityHeader: {
    id: 'severityHeader',
    description: 'Header for Severity Section of Exec Report',
    defaultMessage: 'Identified recommendations by severity'
  },
  categoryHeader: {
    id: 'categoryHeader',
    description: 'Header for Category Section of Exec Report',
    defaultMessage: 'Recently identified recommendations by category'
  },
  top3RulesHeader: {
    id: 'topThreeRulesHeader',
    description: 'Header for Top 3 section of Exec Report',
    defaultMessage: 'Top 3 recommendations in your infrastructure'
  },
  poundOfRecs: {
    id: 'poundOfRecs',
    description: '# of recommendations',
    defaultMessage: '# of recommendations'
  },
  redhatDisabledRuleAlert: {
    id: 'redhatDisabledRuleAlert',
    description: 'Red Hat disabled rule alert body',
    defaultMessage: 'We want you to focus on the more important risks to your systems.  Red Hat disabled recommendations can be found under the Status filter.'
  },
  redhatDisabledRuleAlertTitle: {
    id: 'redhatDisabledRuleAlertTitle',
    description: 'Red Hat disabled rule alert title',
    defaultMessage: 'Red Hat has proactively disabled certain low risk recommendations'
  },
  inventoryIdNotFound: {
    id: 'inventoryIdNotFound',
    description: 'Thrown as error when classic id does not correspond to an inventory id',
    defaultMessage: 'No system found in inventory for the given Advisor ID'
  },
  invalidPathname: {
    id: 'invalidPathname',
    description: 'Message thrown when classic redirect receives invalid path',
    defaultMessage: 'Invalid pathname'
  },
  permsTitle: {
    id: 'permsTitle',
    description: 'You do not have access to Advisor',
    defaultMessage: 'You do not have access to Advisor'
  },
  permsBody: {
    id: 'permsBody',
    description: 'To view the content',
    defaultMessage: 'To view the content of this page, you must be granted permissions to use Advisor from your Organization Administrator.'
  },
  permsAction: {
    id: 'permsAction',
    description: 'You do not have the required advisor permissions to perform this action',
    defaultMessage: 'You do not have the required advisor permissions to perform this action'
  },
  oneOrMore: {
    id: 'oneOrMore',
    description: '1 or more',
    defaultMessage: '1 or more'
  },
  ansibleSupportYes: {
    id: 'ansibleSupportYes',
    description: 'Ansible playbook',
    defaultMessage: 'Ansible playbook'
  },
  ansibleSupportNo: {
    id: 'ansibleSupportNo',
    description: 'Manual',
    defaultMessage: 'Manual'
  },
  yes: {
    id: 'yes',
    description: 'yes',
    defaultMessage: 'Yes'
  },
  actions: {
    id: 'actions',
    description: 'actions',
    defaultMessage: 'Actions'
  },
  dueTo: {
    id: 'dueTo',
    description: 'Due to browser limitations, showing the first 1000 systems',
    defaultMessage: ' - Due to browser limitations, showing the first 1000 systems'
  },
  byEnabling: {
    id: 'byEnabling',
    description: 'By enabling this recommendation',
    defaultMessage: 'By enabling this recommendation, it will impact {systems, plural, one {# system} other {# systems}}.'
  },
  required: {
    id: 'required',
    description: 'Required',
    defaultMessage: 'Required'
  },
  notRequired: {
    id: 'notRequired',
    description: 'Not required',
    defaultMessage: 'Not required'
  },
  pathways: {
    id: 'pathways',
    description: 'pathways',
    defaultMessage: 'Pathways'
  },
  pathwaysName: {
    id: 'pathwaysName',
    description: 'Column title for pathway name in pathways table',
    defaultMessage: 'Name'
  },
  recommendedPathways: {
    id: 'recommendedPathways',
    description: 'Recommended pathways group multiple Advisor',
    defaultMessage: 'Recommended pathways group multiple Advisor recommendations under common actions to power more efficient remediation.'
  },
  improveRecommended: {
    id: 'improveRecommended',
    description: 'Recommended Pathways',
    defaultMessage: 'Recommended Pathways'
  },
  viewPathway: {
    id: 'viewPathway',
    description: 'View pathway',
    defaultMessage: 'View pathway'
  },
  noPathways: {
    id: 'noPathways',
    description: 'No pathways',
    defaultMessage: 'No pathways'
  },
  noPathwaysAvailable: {
    id: 'noPathwaysAvailable',
    description: 'No Pathways available',
    defaultMessage: 'No pathways available'
  },
  pathwaysPanelsError: {
    id: 'pathwaysPanelError',
    description: 'There was a problem processing the request. Please try again.',
    defaultMessage: 'There was a problem processing the request. Please try again.'
  },
  reboot: {
    id: 'reboot',
    description: 'Reboot',
    defaultMessage: 'Reboot'
  },
  reclvl: {
    id: 'reclvl',
    description: 'Recommendation level',
    defaultMessage: 'Recommendation level'
  },
  reclvldetails: {
    id: 'reclvldetails',
    description: 'Recommendation level explination',
    defaultMessage: "Indicates a recommendation's urgency on a scale of high (fix immediately) to low (fix when convenient). Recommendations levels are constantly re-calculated based on your infrastructure's number of applicable recommendations, associated risks and total number of impacted systems."
  },
  noResults: {
    id: 'noResults',
    description: 'No results found',
    defaultMessage: 'No results found'
  },
  adjustFilters: {
    id: 'adjustFilters',
    description: 'Adjust your filters and try again.',
    defaultMessage: 'Adjust your filters and try again.'
  },
  totalRiskPathway: {
    id: 'totalRiskPathway',
    description: 'Total risk of pathway',
    defaultMessage: 'Total risk of pathway'
  },
  resolution: {
    id: 'resolution',
    description: 'Resolution',
    defaultMessage: 'Resolution'
  },
  thisPathway: {
    id: 'thisPathway',
    description: 'By enabling this recommendation',
    defaultMessage: 'This pathway is expected to improve <strong>{category}</strong> on <strong>{systems, plural, one {# system} other {# systems}}</strong> and resolve <strong>{incidents, plural, one {# incident} other {# incidents}}</strong>.'
  },
  introLearnMoreButton: {
    id: 'introLearnMoreButton',
    description: 'App intro label',
    defaultMessage: 'Learn more about Insights with self-guided onboarding tours in the Resource Center.'
  },
  notConnectedTitle: {
    id: 'notConnectedTitle',
    description: 'Not Connected title text',
    defaultMessage: 'This system is not yet connected to Insights'
  },
  notConnectedBody: {
    id: 'notConnectedBody',
    description: 'Not Connected body text',
    defaultMessage: 'Activate the Insights client for this system to get started.'
  },
  notConnectedButton: {
    id: 'notConnectedButton',
    description: 'Not Connected button text',
    defaultMessage: 'Learn about the Insights client'
  },
  staticRemediationDesc: {
    id: 'staticRemediationDesc',
    description: 'static remediation description',
    defaultMessage: ' To fully remediate all recommendations, there may be additional steps needed.'
  },
  firstImpacted: {
    id: 'firstImpacted',
    description: 'First impacted',
    defaultMessage: 'First impacted'
  }
}));

/***/ }),

/***/ "./src/PresentationalComponents/Common/Tables.js":
/*!*******************************************************!*\
  !*** ./src/PresentationalComponents/Common/Tables.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildTagFilter": () => (/* binding */ buildTagFilter),
/* harmony export */   "capitalize": () => (/* binding */ capitalize),
/* harmony export */   "filterFetchBuilder": () => (/* binding */ filterFetchBuilder),
/* harmony export */   "mergeArraysByDiffKeys": () => (/* binding */ mergeArraysByDiffKeys),
/* harmony export */   "paramParser": () => (/* binding */ paramParser),
/* harmony export */   "pruneFilters": () => (/* binding */ pruneFilters),
/* harmony export */   "ruleResolutionRisk": () => (/* binding */ ruleResolutionRisk),
/* harmony export */   "urlBuilder": () => (/* binding */ urlBuilder),
/* harmony export */   "workloadQueryBuilder": () => (/* binding */ workloadQueryBuilder)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/helpers */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/esm/helpers/helpers.js");
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../AppConstants */ "./src/AppConstants.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


 // Builds returns url params from table filters, pushes to url if history object is passed

var urlBuilder = function urlBuilder() {
  var _filters$tags;

  var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = new URL(window.location);
  var queryString = "".concat(Object.keys(filters).map(function (key) {
    return "".concat(key, "=").concat(Array.isArray(filters[key]) ? filters[key].join() : filters[key]);
  }).join('&'));
  var params = new URLSearchParams(queryString); //Removes invalid 'undefined' url param value and duplicate pathway param

  params.get('reports_shown') === 'undefined' && params["delete"]('reports_shown');
  params.get('pathway') && params["delete"]('pathway');
  filters !== null && filters !== void 0 && (_filters$tags = filters.tags) !== null && _filters$tags !== void 0 && _filters$tags.length ? params.set('tags', filters.tags) : params["delete"]('tags');
  window.history.replaceState(null, null, "".concat(url.origin).concat(url.pathname, "?").concat(params.toString()).concat(window.location.hash));
  return "?".concat(queryString);
};
var buildTagFilter = function buildTagFilter(tagFilters) {
  var tagsApiFilter = tagFilters ? {
    tags: tagFilters.flatMap(function (tagFilter) {
      return tagFilter.values.map(function (tag) {
        return "".concat(encodeURIComponent(tagFilter.key), "/").concat(encodeURIComponent(tag.tagKey), "=").concat(encodeURIComponent(tag.value));
      });
    })
  } : {};
  return _objectSpread({}, tagsApiFilter);
}; // transforms array of strings -> comma seperated strings, required by advisor api

var filterFetchBuilder = function filterFetchBuilder(filters) {
  return Object.assign.apply(Object, [{}].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Object.entries(filters).map(function (_ref) {
    var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
        filterName = _ref2[0],
        filterValue = _ref2[1];

    return Array.isArray(filterValue) ? (filterValue[0] === 'true' || filterValue[0] === 'false') && filterValue.length > 1 ? null : (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, filterName, filterValue.join()) : (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, filterName, filterValue);
  }))));
}; // parses url params for use in table/filter chips

var paramParser = function paramParser() {
  var searchParams = new URLSearchParams(window.location.search);
  return Array.from(searchParams).reduce(function (acc, _ref5) {
    var _ref6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, 2),
        key = _ref6[0],
        value = _ref6[1];

    return _objectSpread(_objectSpread({}, acc), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, key, value === 'true' || value === 'false' ? JSON.parse(value) : value.split(',')));
  }, {});
}; // capitalizes text string

var capitalize = function capitalize(string) {
  return string[0].toUpperCase() + string.substring(1);
};
var pruneFilters = function pruneFilters(localFilters, filterCategories) {
  var prunedFilters = Object.entries(localFilters);
  return prunedFilters.length > 0 ? prunedFilters.reduce(function (arr, item) {
    if (filterCategories[item[0]]) {
      var category = filterCategories[item[0]];
      var chips = Array.isArray(item[1]) ? item[1].map(function (value) {
        if (item[0] === _AppConstants__WEBPACK_IMPORTED_MODULE_3__.SYSTEM_FILTER_CATEGORIES.rhel_version.urlParam) {
          return {
            name: "RHEL ".concat(value),
            value: value
          };
        } else {
          var selectedCategoryValue = category.values.find(function (values) {
            return values.value === String(value);
          });
          return selectedCategoryValue ? {
            name: selectedCategoryValue.text || selectedCategoryValue.label,
            value: value
          } : {
            name: value,
            value: value
          };
        }
      }) : [{
        name: category.values.find(function (values) {
          return values.value === String(item[1]);
        }).label,
        value: item[1]
      }];
      return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr), [{
        category: capitalize(category.title),
        chips: chips,
        urlParam: category.urlParam
      }]);
    } else if (item[0] === 'text') {
      return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr), [{
        category: 'Name',
        chips: [{
          name: item[1],
          value: item[1]
        }],
        urlParam: item[0]
      }]);
    } else {
      return arr;
    }
  }, []) : [];
}; // builds workload query filter

var workloadQueryBuilder = function workloadQueryBuilder(workloads, SID) {
  var _workloads$SAP, _workloads$AnsibleAu, _workloads$Microsoft;

  return (0,_redhat_cloud_services_frontend_components_utilities_helpers__WEBPACK_IMPORTED_MODULE_4__.generateFilter)({
    system_profile: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (workloads === null || workloads === void 0 ? void 0 : (_workloads$SAP = workloads.SAP) === null || _workloads$SAP === void 0 ? void 0 : _workloads$SAP.isSelected) && {
      sap_system: true
    }), (workloads === null || workloads === void 0 ? void 0 : (_workloads$AnsibleAu = workloads['Ansible Automation Platform']) === null || _workloads$AnsibleAu === void 0 ? void 0 : _workloads$AnsibleAu.isSelected) && {
      ansible: {
        not_nil: true
      }
    }), (workloads === null || workloads === void 0 ? void 0 : (_workloads$Microsoft = workloads['Microsoft SQL']) === null || _workloads$Microsoft === void 0 ? void 0 : _workloads$Microsoft.isSelected) && {
      mssql: {
        not_nil: true
      }
    }), (SID === null || SID === void 0 ? void 0 : SID.length) > 0 && {
      sap_sids: SID
    })
  }, undefined, {
    arrayEnhancer: 'contains'
  });
}; // merges two array objects by different key names

var mergeArraysByDiffKeys = function mergeArraysByDiffKeys(advSystems, invSystems) {
  return advSystems.map(function (advSys) {
    return _objectSpread(_objectSpread({}, invSystems.find(function (invSys) {
      return invSys['id'] === advSys['system_uuid'] && invSys;
    })), advSys);
  });
};
var ruleResolutionRisk = function ruleResolutionRisk(rule) {
  var resolution = rule.resolution_set.find(function (resolution) {
    return resolution.system_type === _AppConstants__WEBPACK_IMPORTED_MODULE_3__.SYSTEM_TYPES.rhel || _AppConstants__WEBPACK_IMPORTED_MODULE_3__.SYSTEM_TYPES.ocp;
  });
  return resolution ? resolution.resolution_risk.risk : undefined;
};

/***/ }),

/***/ "./src/PresentationalComponents/MessageState/MessageState.js":
/*!*******************************************************************!*\
  !*** ./src/PresentationalComponents/MessageState/MessageState.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _patternfly_react_core_dist_esm_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/EmptyState/EmptyState */ "./node_modules/@patternfly/react-core/dist/esm/components/EmptyState/EmptyState.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_cubes_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/cubes-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/cubes-icon.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/EmptyState/EmptyStateBody */ "./node_modules/@patternfly/react-core/dist/esm/components/EmptyState/EmptyStateBody.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/EmptyState/EmptyStateIcon */ "./node_modules/@patternfly/react-core/dist/esm/components/EmptyState/EmptyStateIcon.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_Title_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/esm/components/Title/Title.js");








var MessageState = function MessageState(_ref) {
  var className = _ref.className,
      children = _ref.children,
      icon = _ref.icon,
      iconClass = _ref.iconClass,
      iconStyle = _ref.iconStyle,
      text = _ref.text,
      title = _ref.title,
      variant = _ref.variant;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_2__.EmptyState, {
    className: className,
    variant: variant
  }, icon !== 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_3__.EmptyStateIcon, {
    className: iconClass,
    style: iconStyle,
    icon: icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Title_Title__WEBPACK_IMPORTED_MODULE_4__.Title, {
    headingLevel: "h5",
    size: "lg"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_5__.EmptyStateBody, {
    style: {
      marginBottom: '16px'
    }
  }, text), children);
};

MessageState.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().any),
  icon: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().any),
  iconClass: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().any),
  iconStyle: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().any),
  text: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().any),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  variant: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().any),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
};
MessageState.defaultProps = {
  icon: _patternfly_react_icons_dist_esm_icons_cubes_icon__WEBPACK_IMPORTED_MODULE_6__["default"],
  title: '',
  variant: _patternfly_react_core_dist_esm_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_2__.EmptyStateVariant.full
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageState);

/***/ }),

/***/ "./src/Utilities/Api.js":
/*!******************************!*\
  !*** ./src/Utilities/Api.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AxiosBaseQuery": () => (/* binding */ AxiosBaseQuery),
/* harmony export */   "DeleteApi": () => (/* binding */ DeleteApi),
/* harmony export */   "Get": () => (/* binding */ Get),
/* harmony export */   "Post": () => (/* binding */ Post),
/* harmony export */   "Put": () => (/* binding */ Put)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);





var Get = function Get(url) {
  var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return axios__WEBPACK_IMPORTED_MODULE_3___default().get(url, {
    headers: headers,
    params: params,
    paramsSerializer: function paramsSerializer(params) {
      return qs__WEBPACK_IMPORTED_MODULE_2___default().stringify(params, {
        arrayFormat: 'repeat'
      });
    }
  });
};

var Post = function Post(url) {
  var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return axios__WEBPACK_IMPORTED_MODULE_3___default().post(url, data, {
    headers: headers
  });
};

var Put = function Put(url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return axios__WEBPACK_IMPORTED_MODULE_3___default().put(url, data, {
    headers: headers
  });
};

var DeleteApi = function DeleteApi(url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return axios__WEBPACK_IMPORTED_MODULE_3___default()["delete"](url, data, {
    headers: headers
  });
};

var AxiosBaseQuery = function AxiosBaseQuery() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    baseUrl: ''
  },
      baseUrl = _ref.baseUrl;

  return /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(_ref2) {
      var url, headers, options, search, method, result, _err$response, _err$response2, err;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = _ref2.url, headers = _ref2.headers, options = _ref2.options, search = _ref2.search, method = _ref2.method;
              method === undefined && (method = 'get');
              _context.prev = 2;

              if (!(method === 'get')) {
                _context.next = 9;
                break;
              }

              _context.next = 6;
              return Get("".concat(baseUrl).concat(url, "?").concat(search ? "".concat(search) : ""), headers, options);

            case 6:
              _context.t0 = _context.sent;
              _context.next = 10;
              break;

            case 9:
              _context.t0 = Post("".concat(baseUrl).concat(url), headers, options);

            case 10:
              result = _context.t0;
              return _context.abrupt("return", {
                data: result.data
              });

            case 14:
              _context.prev = 14;
              _context.t1 = _context["catch"](2);
              err = _context.t1;
              return _context.abrupt("return", {
                error: {
                  status: (_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.status,
                  data: (_err$response2 = err.response) === null || _err$response2 === void 0 ? void 0 : _err$response2.data
                }
              });

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 14]]);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }();
};



/***/ }),

/***/ "./src/Utilities/intlHelper.js":
/*!*************************************!*\
  !*** ./src/Utilities/intlHelper.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatMessages": () => (/* binding */ formatMessages),
/* harmony export */   "mapContentToValues": () => (/* binding */ mapContentToValues),
/* harmony export */   "strong": () => (/* binding */ _strong)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AppConstants */ "./src/AppConstants.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Messages */ "./src/Messages.js");
/* harmony import */ var _PresentationalComponents_Common_Tables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PresentationalComponents/Common/Tables */ "./src/PresentationalComponents/Common/Tables.js");





var _strong = function strong(str) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, str);
}; // takes `messageIds` list and formats the messages using `values`



var formatMessages = function formatMessages(intl, messageIds, values) {
  return Object.fromEntries(messageIds.map(function (id) {
    return [id, _Messages__WEBPACK_IMPORTED_MODULE_2__["default"][id] ? intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"][id], values[id]) : ''];
  }));
};
var mapContentToValues = function mapContentToValues(intl, rule) {
  var _rule$impact, _rule$impact2;

  return {
    viewAffectedSystems: {
      systems: rule.impacted_systems_count
    },
    impactLevel: {
      level: _AppConstants__WEBPACK_IMPORTED_MODULE_1__.IMPACT_LABEL[(_rule$impact = rule.impact) === null || _rule$impact === void 0 ? void 0 : _rule$impact.impact]
    },
    impactDescription: {
      level: _AppConstants__WEBPACK_IMPORTED_MODULE_1__.IMPACT_LABEL_LOWER[(_rule$impact2 = rule.impact) === null || _rule$impact2 === void 0 ? void 0 : _rule$impact2.impact]
    },
    rulesDetailsTotalRiskBody: {
      risk: _AppConstants__WEBPACK_IMPORTED_MODULE_1__.TOTAL_RISK_LABEL_LOWER[rule.total_risk] || intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].undefined),
      strong: _strong
    },
    likelihoodLevel: {
      level: _AppConstants__WEBPACK_IMPORTED_MODULE_1__.LIKELIHOOD_LABEL[rule.likelihood]
    },
    likelihoodDescription: {
      level: _AppConstants__WEBPACK_IMPORTED_MODULE_1__.LIKELIHOOD_LABEL_LOWER[rule.likelihood]
    },
    systemReboot: {
      strong: function strong(str) {
        return _strong(str);
      },
      status: rule.reboot_required ? intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].is) : intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].isNot)
    },
    riskOfChangeText: {
      strong: function strong(str) {
        return _strong(str);
      },
      level: _AppConstants__WEBPACK_IMPORTED_MODULE_1__.RISK_OF_CHANGE_LABEL[(0,_PresentationalComponents_Common_Tables__WEBPACK_IMPORTED_MODULE_3__.ruleResolutionRisk)(rule)]
    },
    riskOfChangeLabel: {
      level: _AppConstants__WEBPACK_IMPORTED_MODULE_1__.RISK_OF_CHANGE_LABEL[(0,_PresentationalComponents_Common_Tables__WEBPACK_IMPORTED_MODULE_3__.ruleResolutionRisk)(rule)]
    }
  };
};

/***/ }),

/***/ "?45d7":
/*!***********************************!*\
  !*** ./empty-state.css (ignored) ***!
  \***********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?650f":
/*!*******************************!*\
  !*** ./spinner.css (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?3eb2":
/*!*****************************!*\
  !*** ./title.css (ignored) ***!
  \*****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?2fb3":
/*!********************************!*\
  !*** ./bullseye.css (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/src_AppConstants_js-src_PresentationalComponents_MessageState_MessageState_js-src_Utilities_A-22f65f.eb79bf2d471b0affabcd0630d7c83706.js.map