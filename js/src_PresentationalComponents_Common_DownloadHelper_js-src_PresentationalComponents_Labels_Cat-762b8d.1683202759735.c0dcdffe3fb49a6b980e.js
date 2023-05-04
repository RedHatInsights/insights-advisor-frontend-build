(self["webpackChunkadvisor_frontend"] = self["webpackChunkadvisor_frontend"] || []).push([["src_PresentationalComponents_Common_DownloadHelper_js-src_PresentationalComponents_Labels_Cat-762b8d"],{

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

/***/ "./src/PresentationalComponents/Labels/CategoryLabel.js":
/*!**************************************************************!*\
  !*** ./src/PresentationalComponents/Labels/CategoryLabel.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_automation_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/automation-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/automation-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_cube_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/cube-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/cube-icon.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_LabelGroup_LabelGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/LabelGroup/LabelGroup */ "./node_modules/@patternfly/react-core/dist/esm/components/LabelGroup/LabelGroup.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_lock_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/lock-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/lock-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_port_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/port-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/port-icon.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _LabelIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LabelIcon */ "./src/PresentationalComponents/Labels/LabelIcon.js");
/* eslint-disable react/jsx-key */











var CategoryLabel = function CategoryLabel(_ref) {
  var labelList = _ref.labelList;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var sortedFrequency = function sortedFrequency(arr) {
    return Object.entries(arr.reduce(function (acc, curr) {
      return acc[curr] = (acc[curr] || 0) + 1, acc;
    }, {})).sort(function (a, b) {
      return b[1] - a[1];
    });
  };

  var sortedFrequencyList = sortedFrequency(labelList.map(function (label) {
    return label.id;
  }));

  var labels = function labels(id) {
    return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_LabelIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_icons_dist_esm_icons_automation_icon__WEBPACK_IMPORTED_MODULE_5__["default"], null),
      text: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].availability)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_LabelIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_icons_dist_esm_icons_lock_icon__WEBPACK_IMPORTED_MODULE_6__["default"], null),
      text: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].security)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_LabelIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_icons_dist_esm_icons_cube_icon__WEBPACK_IMPORTED_MODULE_7__["default"], null),
      text: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].stability)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_LabelIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_icons_dist_esm_icons_port_icon__WEBPACK_IMPORTED_MODULE_8__["default"], null),
      text: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_2__["default"].performance)
    })][id];
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_LabelGroup_LabelGroup__WEBPACK_IMPORTED_MODULE_9__.LabelGroup, {
    numLabels: 1,
    isCompact: true
  }, sortedFrequencyList.map(function (id) {
    return labels(Number(id[0] - 1));
  }));
};

CategoryLabel.propTypes = {
  labelList: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().array),
  isCompact: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool)
};
CategoryLabel.defaultProps = {
  isCompact: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryLabel);

/***/ }),

/***/ "./src/PresentationalComponents/Labels/LabelIcon.js":
/*!**********************************************************!*\
  !*** ./src/PresentationalComponents/Labels/LabelIcon.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _patternfly_react_core_dist_esm_components_Label_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Label/index */ "./node_modules/@patternfly/react-core/dist/esm/components/Label/Label.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);




var LabelIcon = function LabelIcon(_ref) {
  var icon = _ref.icon,
      text = _ref.text;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Label_index__WEBPACK_IMPORTED_MODULE_2__.Label, {
    icon: icon,
    variant: "outline",
    color: "blue",
    isCompact: true
  }, text);
};

LabelIcon.propTypes = {
  icon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  text: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LabelIcon);

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

/***/ "./src/PresentationalComponents/Modals/DisableRule.js":
/*!************************************************************!*\
  !*** ./src/PresentationalComponents/Modals/DisableRule.js ***!
  \************************************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../AppConstants */ "./src/AppConstants.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Button/Button */ "./node_modules/@patternfly/react-core/dist/esm/components/Button/Button.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Checkbox/Checkbox */ "./node_modules/@patternfly/react-core/dist/esm/components/Checkbox/Checkbox.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Form_Form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Form/Form */ "./node_modules/@patternfly/react-core/dist/esm/components/Form/Form.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Form_FormGroup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Form/FormGroup */ "./node_modules/@patternfly/react-core/dist/esm/components/Form/FormGroup.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Modal/Modal */ "./node_modules/@patternfly/react-core/dist/esm/components/Modal/Modal.js");
/* harmony import */ var _Utilities_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Utilities/Api */ "./src/Utilities/Api.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_TextInput_TextInput__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/TextInput/TextInput */ "./node_modules/@patternfly/react-core/dist/esm/components/TextInput/TextInput.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/ */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _Services_Acks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Services/Acks */ "./src/Services/Acks.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


















var DisableRule = function DisableRule(_ref) {
  var handleModalToggle = _ref.handleModalToggle,
      isModalOpen = _ref.isModalOpen,
      host = _ref.host,
      hosts = _ref.hosts,
      rule = _ref.rule,
      afterFn = _ref.afterFn;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_12__["default"])();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();

  var notification = function notification(data) {
    return dispatch((0,_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_8__.addNotification)(data));
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      justification = _useState2[0],
      setJustificaton = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(host !== undefined || hosts.length > 0),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      singleSystem = _useState4[0],
      setSingleSystem = _useState4[1];

  var _useSetAckMutation = (0,_Services_Acks__WEBPACK_IMPORTED_MODULE_11__.useSetAckMutation)(),
      _useSetAckMutation2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useSetAckMutation, 1),
      setAck = _useSetAckMutation2[0];

  var bulkHostActions = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = {
                systems: hosts,
                justification: justification
              };
              _context.prev = 1;
              _context.next = 4;
              return (0,_Utilities_Api__WEBPACK_IMPORTED_MODULE_6__.Post)("".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_5__.BASE_URL, "/rule/").concat(rule.rule_id, "/ack_hosts/"), {}, data);

            case 4:
              !singleSystem && notification({
                variant: 'success',
                dismissable: true,
                timeout: true,
                title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_9__["default"].recSuccessfullyDisabled)
              });
              afterFn && afterFn();
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              notification({
                variant: 'danger',
                dismissable: true,
                title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_9__["default"].error),
                description: "".concat(_context.t0)
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));

    return function bulkHostActions() {
      return _ref2.apply(this, arguments);
    };
  }();

  var disableRule = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
      var options;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(rule.rule_status === 'enabled' && !hosts.length)) {
                _context2.next = 15;
                break;
              }

              options = singleSystem ? {
                type: 'HOST',
                options: {
                  rule: rule.rule_id,
                  system_uuid: host.id,
                  justification: justification
                }
              } : {
                type: 'RULE',
                options: _objectSpread({
                  rule_id: rule.rule_id
                }, justification && {
                  justification: justification
                })
              };
              _context2.prev = 2;
              _context2.next = 5;
              return setAck(options).unwrap();

            case 5:
              notification({
                variant: 'success',
                timeout: true,
                dismissable: true,
                title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_9__["default"].recSuccessfullyDisabled)
              });
              setJustificaton('');
              afterFn && afterFn();
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](2);
              notification({
                variant: 'danger',
                dismissable: true,
                title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_9__["default"].error),
                description: "".concat(_context2.t0)
              });

            case 13:
              _context2.next = 16;
              break;

            case 15:
              bulkHostActions();

            case 16:
              handleModalToggle(false);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 10]]);
    }));

    return function disableRule() {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_esm_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_13__.Modal, {
    variant: "small",
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_9__["default"].disableRule),
    isOpen: isModalOpen,
    onClose: function onClose() {
      handleModalToggle(false);
      setJustificaton('');
    },
    actions: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_14__.Button, {
      key: "confirm",
      variant: "primary",
      onClick: function onClick() {
        return disableRule();
      },
      ouiaId: "confirm"
    }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_9__["default"].save)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_14__.Button, {
      key: "cancel",
      variant: "link",
      onClick: function onClick() {
        handleModalToggle(false);
        setJustificaton('');
      },
      ouiaId: "cancel"
    }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_9__["default"].cancel))]
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_9__["default"].disableRuleBody), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_esm_components_Form_Form__WEBPACK_IMPORTED_MODULE_15__.Form, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_esm_components_Form_FormGroup__WEBPACK_IMPORTED_MODULE_16__.FormGroup, {
    fieldId: "blank-form"
  }), (host !== undefined || hosts.length > 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_esm_components_Form_FormGroup__WEBPACK_IMPORTED_MODULE_16__.FormGroup, {
    fieldId: "disable-rule-one-system"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_esm_components_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_17__.Checkbox, {
    isChecked: singleSystem,
    onChange: function onChange() {
      setSingleSystem(!singleSystem);
    },
    label: hosts.length ? intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_9__["default"].disableRuleForSystems) : intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_9__["default"].disableRuleSingleSystem),
    id: "disable-rule-one-system",
    name: "disable-rule-one-system"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_esm_components_Form_FormGroup__WEBPACK_IMPORTED_MODULE_16__.FormGroup, {
    label: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_9__["default"].justificationNote),
    fieldId: "disable-rule-justification"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_esm_components_TextInput_TextInput__WEBPACK_IMPORTED_MODULE_18__.TextInput, {
    type: "text",
    id: "disable-rule-justification",
    "aria-describedby": "disable-rule-justification",
    value: justification,
    onChange: function onChange(text) {
      return setJustificaton(text);
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === 'Enter' && (e.preventDefault(), disableRule());
    }
  }))));
};

DisableRule.propTypes = {
  isModalOpen: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  host: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  handleModalToggle: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  rule: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  afterFn: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  hosts: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().array)
};
DisableRule.defaultProps = {
  isModalOpen: false,
  handleModalToggle: function handleModalToggle() {
    return undefined;
  },
  system: undefined,
  rule: {},
  afterFn: function afterFn() {
    return undefined;
  },
  host: undefined,
  hosts: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisableRule);

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

/***/ "?e6c7":
/*!***************************************************************************!*\
  !*** @patternfly/react-styles/css/components/Popper/Popper.css (ignored) ***!
  \***************************************************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?1dc3":
/*!********************************!*\
  !*** ./backdrop.css (ignored) ***!
  \********************************/
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

/***/ "?3421":
/*!*****************************!*\
  !*** ./check.css (ignored) ***!
  \*****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?ad5f":
/*!************************************!*\
  !*** ./form-control.css (ignored) ***!
  \************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?1525":
/*!****************************!*\
  !*** ./form.css (ignored) ***!
  \****************************/
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

/***/ "?20e5":
/*!*********************************!*\
  !*** ./modal-box.css (ignored) ***!
  \*********************************/
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

/***/ "?7c61":
/*!*************************************!*\
  !*** ./accessibility.css (ignored) ***!
  \*************************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/src_PresentationalComponents_Common_DownloadHelper_js-src_PresentationalComponents_Labels_Cat-762b8d.07089e2596db3a551c82681bc4802de4.js.map