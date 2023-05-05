"use strict";
(self["webpackChunkadvisor_frontend"] = self["webpackChunkadvisor_frontend"] || []).push([["src_AppEntry_js-webpack_sharing_consume_default_scalprum_react-core_scalprum_react-core"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Services_Filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Services/Filters */ "./src/Services/Filters.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redhat_cloud_services_frontend_components_useChrome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/useChrome */ "./node_modules/@redhat-cloud-services/frontend-components/esm/useChrome/useChrome.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_lock_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/lock-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/lock-icon.js");
/* harmony import */ var _PresentationalComponents_MessageState_MessageState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PresentationalComponents/MessageState/MessageState */ "./src/PresentationalComponents/MessageState/MessageState.js");
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AppConstants */ "./src/AppConstants.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Routes */ "./src/Routes.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Messages */ "./src/Messages.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_RBACHook__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/RBACHook */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/esm/RBACHook/RBACHook.js");















var App = function App() {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__["default"])();

  var _useHistory = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useHistory)(),
      push = _useHistory.push;

  var permsViewRecs = (0,_redhat_cloud_services_frontend_components_utilities_RBACHook__WEBPACK_IMPORTED_MODULE_11__.usePermissions)('advisor', _AppConstants__WEBPACK_IMPORTED_MODULE_7__.PERMS.viewRecs);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  var chrome = (0,_redhat_cloud_services_frontend_components_useChrome__WEBPACK_IMPORTED_MODULE_12__["default"])();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var _chrome$globalFilterS;

    chrome.identifyApp('advisor');
    chrome === null || chrome === void 0 ? void 0 : (_chrome$globalFilterS = chrome.globalFilterScope) === null || _chrome$globalFilterS === void 0 ? void 0 : _chrome$globalFilterS.call(chrome, 'insights');

    if (chrome !== null && chrome !== void 0 && chrome.globalFilterScope) {
      chrome.on('GLOBAL_FILTER_UPDATE', function (_ref) {
        var _chrome$mapGlobalFilt;

        var data = _ref.data;

        var _ref2 = (chrome === null || chrome === void 0 ? void 0 : (_chrome$mapGlobalFilt = chrome.mapGlobalFilter) === null || _chrome$mapGlobalFilt === void 0 ? void 0 : _chrome$mapGlobalFilt.call(chrome, data, false, true)) || [],
            _ref3 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 3),
            workloads = _ref3[0],
            SID = _ref3[1],
            selectedTags = _ref3[2];

        (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.batch)(function () {
          dispatch((0,_Services_Filters__WEBPACK_IMPORTED_MODULE_4__.updateWorkloads)(workloads));
          dispatch((0,_Services_Filters__WEBPACK_IMPORTED_MODULE_4__.updateTags)(selectedTags));
          dispatch((0,_Services_Filters__WEBPACK_IMPORTED_MODULE_4__.updateSID)(SID));
        });
      });
    }

    var unregister = chrome.on('APP_NAVIGATION', function (event) {
      if (event.domEvent) {
        push("/".concat(event.navId));
      }
    });
    return function () {
      return unregister();
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return !(permsViewRecs !== null && permsViewRecs !== void 0 && permsViewRecs.isLoading) && (permsViewRecs !== null && permsViewRecs !== void 0 && permsViewRecs.hasAccess ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Routes__WEBPACK_IMPORTED_MODULE_8__.Routes, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_PresentationalComponents_MessageState_MessageState__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "large",
    icon: _patternfly_react_icons_dist_esm_icons_lock_icon__WEBPACK_IMPORTED_MODULE_13__["default"],
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_9__["default"].permsTitle),
    text: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_9__["default"].permsBody)
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/AppEntry.js":
/*!*************************!*\
  !*** ./src/AppEntry.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_translations_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-translations/index */ "./node_modules/@redhat-cloud-services/frontend-components-translations/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/ */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/helpers */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/esm/helpers/helpers.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Store */ "./src/Store/index.js");
/* harmony import */ var _locales_translations_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../locales/translations.json */ "./locales/translations.json");
/* eslint-disable no-console */










var AppEntry = function AppEntry() {
  var store = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function () {
    return (0,_Store__WEBPACK_IMPORTED_MODULE_6__.getStore)();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_redhat_cloud_services_frontend_components_translations_index__WEBPACK_IMPORTED_MODULE_1__.IntlProvider, {
    locale: navigator.language.slice(0, 2),
    messages: _locales_translations_json__WEBPACK_IMPORTED_MODULE_7__
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, {
    basename: (0,_redhat_cloud_services_frontend_components_utilities_helpers__WEBPACK_IMPORTED_MODULE_8__.getBaseName)(window.location.pathname)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_2__.NotificationsPortal, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_App__WEBPACK_IMPORTED_MODULE_0__["default"], null))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppEntry);

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Routes": () => (/* binding */ Routes)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _patternfly_react_core_dist_esm_layouts_Bullseye_Bullseye_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/layouts/Bullseye/Bullseye.js */ "./node_modules/@patternfly/react-core/dist/esm/layouts/Bullseye/Bullseye.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Spinner_Spinner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Spinner/Spinner.js */ "./node_modules/@patternfly/react-core/dist/esm/components/Spinner/Spinner.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_ErrorState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/ErrorState */ "./node_modules/@redhat-cloud-services/frontend-components/esm/ErrorState/ErrorState.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redhat_cloud_services_frontend_components_AsyncComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/AsyncComponent */ "./node_modules/@redhat-cloud-services/frontend-components/esm/AsyncComponent/index.js");








var RecsList = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.lazy)(function () {
  return Promise.all(/*! import() | RecsList */[__webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Button_Button_js-node_modules_-fad308"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Dropdown_Dropdown_js-node_modu-0fdadf"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_TextInput_TextInput_js"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Card_Card_js-node_modules_patt-735c5b"), __webpack_require__.e("vendors-node_modules_patternfly_react-table_dist_esm_components_Table_TableTypes_js-node_modu-3a0025"), __webpack_require__.e("vendors-node_modules_patternfly_react-table_dist_esm_components_Table_Body_js-node_modules_pa-73b696"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_helpers_FocusTrap_FocusTrap_js-node_modul-ac4de7"), __webpack_require__.e("vendors-node_modules_lodash__flatRest_js-node_modules_lodash__getAllKeysIn_js-node_modules_lo-b2eeaa"), __webpack_require__.e("vendors-node_modules_redhat-cloud-services_frontend-components_esm_PrimaryToolbar_PrimaryToolbar_js"), __webpack_require__.e("vendors-node_modules_buffer_index_js"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Checkbox_Checkbox_js-node_modu-3705d2"), __webpack_require__.e("vendors-node_modules_lodash__baseClone_js"), __webpack_require__.e("vendors-node_modules_redhat-cloud-services_frontend-components-advisor-components_esm_ReportD-02a3ca"), __webpack_require__.e("vendors-node_modules_patternfly_react-icons_dist_esm_icons_times-circle-icon_js-node_modules_-48e114"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Pagination_Pagination_js-node_-ba9865"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_layouts_Grid_Grid_js-node_modules_pattern-3a925a"), __webpack_require__.e("vendors-node_modules_redhat-cloud-services_frontend-components_esm_PageHeader_PageHeader_js-n-824a3a"), __webpack_require__.e("vendors-node_modules_patternfly_react-icons_dist_esm_icons_bell-slash-icon_js-node_modules_pa-b3552a"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Card_CardTitle_js-node_modules-bebd59"), __webpack_require__.e("vendors-node_modules_lodash_debounce_js-node_modules_lodash_uniq_js"), __webpack_require__.e("vendors-node_modules_d3-color_src_cubehelix_js-node_modules_d3-format_src_defaultLocale_js-no-72b1e7"), __webpack_require__.e("vendors-node_modules_lodash_mapValues_js-node_modules_util_util_js"), __webpack_require__.e("vendors-node_modules_redhat-cloud-services_frontend-components-advisor-components_esm_RebootR-e6ac21"), __webpack_require__.e("vendors-node_modules_redhat-cloud-services_frontend-components-pdf-generator_dist_esm_index_js"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Card_CardExpandableContent_js--49c7d7"), __webpack_require__.e("webpack_sharing_consume_default_patternfly_react-table_patternfly_react-table"), __webpack_require__.e("src_PresentationalComponents_Common_DownloadHelper_js-src_PresentationalComponents_Labels_Cat-762b8d"), __webpack_require__.e("src_PresentationalComponents_RulesTable_RulesTable_js"), __webpack_require__.e("webpack_sharing_consume_default_react_react-_1d1f"), __webpack_require__.e("webpack_sharing_consume_default_scalprum_react-core_scalprum_react-core-_cc69"), __webpack_require__.e("RecsList")]).then(__webpack_require__.bind(__webpack_require__, /*! ./SmartComponents/Recs/List */ "./src/SmartComponents/Recs/List.js"));
});
var RecsDetails = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.lazy)(function () {
  return Promise.all(/*! import() | RecsDetails */[__webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Button_Button_js-node_modules_-fad308"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Dropdown_Dropdown_js-node_modu-0fdadf"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_TextInput_TextInput_js"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Card_Card_js-node_modules_patt-735c5b"), __webpack_require__.e("vendors-node_modules_patternfly_react-table_dist_esm_components_Table_TableTypes_js-node_modu-3a0025"), __webpack_require__.e("vendors-node_modules_patternfly_react-table_dist_esm_components_Table_Body_js-node_modules_pa-73b696"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_helpers_FocusTrap_FocusTrap_js-node_modul-ac4de7"), __webpack_require__.e("vendors-node_modules_buffer_index_js"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Checkbox_Checkbox_js-node_modu-3705d2"), __webpack_require__.e("vendors-node_modules_redhat-cloud-services_frontend-components-advisor-components_esm_ReportD-02a3ca"), __webpack_require__.e("vendors-node_modules_patternfly_react-icons_dist_esm_icons_times-circle-icon_js-node_modules_-48e114"), __webpack_require__.e("vendors-node_modules_redhat-cloud-services_frontend-components_esm_PageHeader_PageHeader_js-n-824a3a"), __webpack_require__.e("vendors-node_modules_patternfly_react-icons_dist_esm_icons_bell-slash-icon_js-node_modules_pa-b3552a"), __webpack_require__.e("vendors-node_modules_lodash_debounce_js-node_modules_lodash_uniq_js"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Breadcrumb_Breadcrumb_js-node_-ff4d56"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Dropdown_DropdownToggle_js-nod-0b40d6"), __webpack_require__.e("webpack_sharing_consume_default_scalprum_react-core_scalprum_react-core-_441a"), __webpack_require__.e("src_PresentationalComponents_Common_DownloadHelper_js-src_PresentationalComponents_Labels_Cat-762b8d"), __webpack_require__.e("src_PresentationalComponents_Breadcrumbs_Breadcrumbs_js-src_PresentationalComponents_Inventor-7fe9b6"), __webpack_require__.e("RecsDetails")]).then(__webpack_require__.bind(__webpack_require__, /*! ./SmartComponents/Recs/Details */ "./src/SmartComponents/Recs/Details.js"));
});
var DetailsPathways = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.lazy)(function () {
  return Promise.all(/*! import() | Details-Pathways */[__webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Button_Button_js-node_modules_-fad308"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_TextInput_TextInput_js"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Card_Card_js-node_modules_patt-735c5b"), __webpack_require__.e("vendors-node_modules_patternfly_react-table_dist_esm_components_Table_TableTypes_js-node_modu-3a0025"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_helpers_FocusTrap_FocusTrap_js-node_modul-ac4de7"), __webpack_require__.e("vendors-node_modules_lodash__flatRest_js-node_modules_lodash__getAllKeysIn_js-node_modules_lo-b2eeaa"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Checkbox_Checkbox_js-node_modu-3705d2"), __webpack_require__.e("vendors-node_modules_lodash__baseClone_js"), __webpack_require__.e("vendors-node_modules_patternfly_react-icons_dist_esm_icons_times-circle-icon_js-node_modules_-48e114"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_layouts_Grid_Grid_js-node_modules_pattern-3a925a"), __webpack_require__.e("vendors-node_modules_redhat-cloud-services_frontend-components_esm_PageHeader_PageHeader_js-n-824a3a"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Card_CardTitle_js-node_modules-bebd59"), __webpack_require__.e("vendors-node_modules_lodash_debounce_js-node_modules_lodash_uniq_js"), __webpack_require__.e("vendors-node_modules_d3-color_src_cubehelix_js-node_modules_d3-format_src_defaultLocale_js-no-72b1e7"), __webpack_require__.e("vendors-node_modules_patternfly_react-charts_dist_esm_components_Chart_Chart_js-node_modules_-ab2ec3"), __webpack_require__.e("webpack_sharing_consume_default_scalprum_react-core_scalprum_react-core-_441a"), __webpack_require__.e("src_PresentationalComponents_Common_DownloadHelper_js-src_PresentationalComponents_Labels_Cat-762b8d"), __webpack_require__.e("src_PresentationalComponents_Breadcrumbs_Breadcrumbs_js-src_PresentationalComponents_Inventor-7fe9b6"), __webpack_require__.e("Details-Pathways")]).then(__webpack_require__.bind(__webpack_require__, /*! ./SmartComponents/Recs/DetailsPathways */ "./src/SmartComponents/Recs/DetailsPathways.js"));
});
var InventoryDetails = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.lazy)(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Button_Button_js-node_modules_-fad308"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Dropdown_Dropdown_js-node_modu-0fdadf"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_TextInput_TextInput_js"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Card_Card_js-node_modules_patt-735c5b"), __webpack_require__.e("vendors-node_modules_patternfly_react-table_dist_esm_components_Table_TableTypes_js-node_modu-3a0025"), __webpack_require__.e("vendors-node_modules_patternfly_react-table_dist_esm_components_Table_Body_js-node_modules_pa-73b696"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_helpers_FocusTrap_FocusTrap_js-node_modul-ac4de7"), __webpack_require__.e("vendors-node_modules_lodash__flatRest_js-node_modules_lodash__getAllKeysIn_js-node_modules_lo-b2eeaa"), __webpack_require__.e("vendors-node_modules_redhat-cloud-services_frontend-components_esm_PrimaryToolbar_PrimaryToolbar_js"), __webpack_require__.e("vendors-node_modules_buffer_index_js"), __webpack_require__.e("vendors-node_modules_lodash__baseClone_js"), __webpack_require__.e("vendors-node_modules_redhat-cloud-services_frontend-components-advisor-components_esm_ReportD-02a3ca"), __webpack_require__.e("vendors-node_modules_patternfly_react-icons_dist_esm_icons_times-circle-icon_js-node_modules_-48e114"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_layouts_Grid_Grid_js-node_modules_pattern-3a925a"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_ClipboardCopy_ClipboardCopy_js"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Breadcrumb_Breadcrumb_js-node_-bf753f"), __webpack_require__.e("webpack_sharing_consume_default_patternfly_react-table_patternfly_react-table"), __webpack_require__.e("webpack_sharing_consume_default_scalprum_react-core_scalprum_react-core-_441a"), __webpack_require__.e("src_SmartComponents_SystemAdvisor_SystemAdvisor_js-node_modules_redhat-cloud-services_fronten-e90d6e"), __webpack_require__.e("src_PresentationalComponents_Inventory_InventoryDetails_js-node_modules_redhat-cloud-services-97eeaa")]).then(__webpack_require__.bind(__webpack_require__, /*! ./PresentationalComponents/Inventory/InventoryDetails */ "./src/PresentationalComponents/Inventory/InventoryDetails.js"));
});
var SystemsList = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.lazy)(function () {
  return Promise.all(/*! import() | List */[__webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Button_Button_js-node_modules_-fad308"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Card_Card_js-node_modules_patt-735c5b"), __webpack_require__.e("vendors-node_modules_patternfly_react-table_dist_esm_components_Table_TableTypes_js-node_modu-3a0025"), __webpack_require__.e("vendors-node_modules_lodash__flatRest_js-node_modules_lodash__getAllKeysIn_js-node_modules_lo-b2eeaa"), __webpack_require__.e("vendors-node_modules_buffer_index_js"), __webpack_require__.e("vendors-node_modules_redhat-cloud-services_frontend-components_esm_PageHeader_PageHeader_js-n-824a3a"), __webpack_require__.e("vendors-node_modules_lodash_debounce_js-node_modules_lodash_uniq_js"), __webpack_require__.e("vendors-node_modules_d3-color_src_cubehelix_js-node_modules_d3-format_src_defaultLocale_js-no-72b1e7"), __webpack_require__.e("vendors-node_modules_lodash_mapValues_js-node_modules_util_util_js"), __webpack_require__.e("vendors-node_modules_redhat-cloud-services_frontend-components-pdf-generator_dist_esm_index_js"), __webpack_require__.e("vendors-node_modules_react-pdf_renderer_lib_react-pdf_browser_es_js"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Text_Text_js-node_modules_patt-97d803"), __webpack_require__.e("webpack_sharing_consume_default_scalprum_react-core_scalprum_react-core-_441a"), __webpack_require__.e("webpack_sharing_consume_default_react_react-_1d1f"), __webpack_require__.e("webpack_sharing_consume_default_scalprum_react-core_scalprum_react-core-_cc69"), __webpack_require__.e("List")]).then(__webpack_require__.bind(__webpack_require__, /*! ./SmartComponents/Systems/List */ "./src/SmartComponents/Systems/List.js"));
});
var TopicsList = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.lazy)(function () {
  return Promise.all(/*! import() | TopicsList */[__webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Button_Button_js-node_modules_-fad308"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Dropdown_Dropdown_js-node_modu-0fdadf"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Card_Card_js-node_modules_patt-735c5b"), __webpack_require__.e("vendors-node_modules_patternfly_react-table_dist_esm_components_Table_TableTypes_js-node_modu-3a0025"), __webpack_require__.e("vendors-node_modules_patternfly_react-table_dist_esm_components_Table_Body_js-node_modules_pa-73b696"), __webpack_require__.e("vendors-node_modules_lodash__flatRest_js-node_modules_lodash__getAllKeysIn_js-node_modules_lo-b2eeaa"), __webpack_require__.e("vendors-node_modules_redhat-cloud-services_frontend-components_esm_PrimaryToolbar_PrimaryToolbar_js"), __webpack_require__.e("vendors-node_modules_lodash__baseClone_js"), __webpack_require__.e("vendors-node_modules_redhat-cloud-services_frontend-components_esm_PageHeader_PageHeader_js-n-824a3a"), __webpack_require__.e("webpack_sharing_consume_default_patternfly_react-table_patternfly_react-table"), __webpack_require__.e("TopicsList")]).then(__webpack_require__.bind(__webpack_require__, /*! ./SmartComponents/Topics/List */ "./src/SmartComponents/Topics/List.js"));
});
var TopicDetails = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.lazy)(function () {
  return Promise.all(/*! import() | TopicDetails */[__webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Button_Button_js-node_modules_-fad308"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Dropdown_Dropdown_js-node_modu-0fdadf"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_TextInput_TextInput_js"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Card_Card_js-node_modules_patt-735c5b"), __webpack_require__.e("vendors-node_modules_patternfly_react-table_dist_esm_components_Table_TableTypes_js-node_modu-3a0025"), __webpack_require__.e("vendors-node_modules_patternfly_react-table_dist_esm_components_Table_Body_js-node_modules_pa-73b696"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_helpers_FocusTrap_FocusTrap_js-node_modul-ac4de7"), __webpack_require__.e("vendors-node_modules_lodash__flatRest_js-node_modules_lodash__getAllKeysIn_js-node_modules_lo-b2eeaa"), __webpack_require__.e("vendors-node_modules_redhat-cloud-services_frontend-components_esm_PrimaryToolbar_PrimaryToolbar_js"), __webpack_require__.e("vendors-node_modules_buffer_index_js"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Checkbox_Checkbox_js-node_modu-3705d2"), __webpack_require__.e("vendors-node_modules_lodash__baseClone_js"), __webpack_require__.e("vendors-node_modules_redhat-cloud-services_frontend-components-advisor-components_esm_ReportD-02a3ca"), __webpack_require__.e("vendors-node_modules_patternfly_react-icons_dist_esm_icons_times-circle-icon_js-node_modules_-48e114"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Pagination_Pagination_js-node_-ba9865"), __webpack_require__.e("vendors-node_modules_patternfly_react-icons_dist_esm_icons_bell-slash-icon_js-node_modules_pa-b3552a"), __webpack_require__.e("vendors-node_modules_redhat-cloud-services_frontend-components-advisor-components_esm_RebootR-e6ac21"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Breadcrumb_Breadcrumb_js-node_-0414ec"), __webpack_require__.e("webpack_sharing_consume_default_patternfly_react-table_patternfly_react-table"), __webpack_require__.e("src_PresentationalComponents_Common_DownloadHelper_js-src_PresentationalComponents_Labels_Cat-762b8d"), __webpack_require__.e("src_PresentationalComponents_RulesTable_RulesTable_js"), __webpack_require__.e("TopicDetails")]).then(__webpack_require__.bind(__webpack_require__, /*! ./SmartComponents/Topics/Details */ "./src/SmartComponents/Topics/Details.js"));
});
var TopicAdmin = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.lazy)(function () {
  return Promise.all(/*! import() | TopicAdmin */[__webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Button_Button_js-node_modules_-fad308"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Dropdown_Dropdown_js-node_modu-0fdadf"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_TextInput_TextInput_js"), __webpack_require__.e("vendors-node_modules_patternfly_react-table_dist_esm_components_Table_TableTypes_js-node_modu-3a0025"), __webpack_require__.e("vendors-node_modules_patternfly_react-table_dist_esm_components_Table_Body_js-node_modules_pa-73b696"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_helpers_FocusTrap_FocusTrap_js-node_modul-ac4de7"), __webpack_require__.e("vendors-node_modules_lodash__flatRest_js-node_modules_lodash__getAllKeysIn_js-node_modules_lo-b2eeaa"), __webpack_require__.e("vendors-node_modules_redhat-cloud-services_frontend-components_esm_PrimaryToolbar_PrimaryToolbar_js"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Checkbox_Checkbox_js-node_modu-3705d2"), __webpack_require__.e("vendors-node_modules_lodash__baseClone_js"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Card_CardBody_js-node_modules_-a83d48"), __webpack_require__.e("webpack_sharing_consume_default_patternfly_react-table_patternfly_react-table"), __webpack_require__.e("TopicAdmin")]).then(__webpack_require__.bind(__webpack_require__, /*! ./PresentationalComponents/TopicsAdminTable/TopicsAdminTable */ "./src/PresentationalComponents/TopicsAdminTable/TopicsAdminTable.js"));
});
var AdminProtectedRoute = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.lazy)(function () {
  return Promise.all(/*! import() | TopicAdmin */[__webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Button_Button_js-node_modules_-fad308"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Dropdown_Dropdown_js-node_modu-0fdadf"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_TextInput_TextInput_js"), __webpack_require__.e("vendors-node_modules_patternfly_react-table_dist_esm_components_Table_TableTypes_js-node_modu-3a0025"), __webpack_require__.e("vendors-node_modules_patternfly_react-table_dist_esm_components_Table_Body_js-node_modules_pa-73b696"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_helpers_FocusTrap_FocusTrap_js-node_modul-ac4de7"), __webpack_require__.e("vendors-node_modules_lodash__flatRest_js-node_modules_lodash__getAllKeysIn_js-node_modules_lo-b2eeaa"), __webpack_require__.e("vendors-node_modules_redhat-cloud-services_frontend-components_esm_PrimaryToolbar_PrimaryToolbar_js"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Checkbox_Checkbox_js-node_modu-3705d2"), __webpack_require__.e("vendors-node_modules_lodash__baseClone_js"), __webpack_require__.e("vendors-node_modules_patternfly_react-core_dist_esm_components_Card_CardBody_js-node_modules_-a83d48"), __webpack_require__.e("webpack_sharing_consume_default_patternfly_react-table_patternfly_react-table"), __webpack_require__.e("TopicAdmin")]).then(__webpack_require__.bind(__webpack_require__, /*! ./PresentationalComponents/TopicsAdminTable/TopicsAdminTable */ "./src/PresentationalComponents/TopicsAdminTable/TopicsAdminTable.js"));
});
var paths = [//Recommendations nav -> recommendations tab is active
{
  title: 'Recommendations',
  path: '/recommendations',
  component: RecsList
}, //Recommendations nav -> pathways tab is active
{
  title: 'Recommendations Pathways',
  path: '/recommendations/pathways',
  component: RecsList
}, //Pathway details =>  recommendations tab is active
{
  title: 'Pathway details',
  path: '/recommendations/pathways/:id',
  component: DetailsPathways
}, //Pathway details =>  systems tab is active
{
  title: 'Pathway details',
  path: '/recommendations/pathways/systems/:id',
  component: DetailsPathways
}, {
  title: 'Recommendation details',
  path: '/recommendations/:id',
  component: RecsDetails
}, {
  title: 'Inventory details',
  path: '/recommendations/:id/:inventoryId/',
  component: InventoryDetails
}, {
  title: 'Inventory details',
  path: '/recommendations/pathways/:id/:inventoryId/',
  component: InventoryDetails
}, {
  title: 'Systems',
  path: '/systems',
  component: SystemsList
}, {
  title: 'System detail',
  path: '/systems/:inventoryId/',
  component: InventoryDetails
}, {
  title: 'Topics',
  path: '/topics',
  component: TopicsList
}, {
  title: 'Topic details',
  path: '/topics/:id',
  component: TopicDetails
}];
var INVENTORY_TOTAL_FETCH_URL = '/api/inventory/v1/hosts';
var Routes = function Routes() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      hasSystems = _useState2[0],
      setHasSystems = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    try {
      axios__WEBPACK_IMPORTED_MODULE_1___default().get("".concat(INVENTORY_TOTAL_FETCH_URL, "?page=1&per_page=1")).then(function (_ref) {
        var data = _ref.data;
        setHasSystems(data.total > 0);
      });
    } catch (e) {
      console.log(e);
    }
  }, [hasSystems]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_layouts_Bullseye_Bullseye_js__WEBPACK_IMPORTED_MODULE_4__.Bullseye, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Spinner_Spinner_js__WEBPACK_IMPORTED_MODULE_5__.Spinner, {
      size: "xl"
    }))
  }, !hasSystems ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_layouts_Bullseye_Bullseye_js__WEBPACK_IMPORTED_MODULE_4__.Bullseye, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Spinner_Spinner_js__WEBPACK_IMPORTED_MODULE_5__.Spinner, {
      size: "xl"
    }))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_AsyncComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    appName: "dashboard",
    module: "./AppZeroState",
    scope: "dashboard",
    ErrorComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_ErrorState__WEBPACK_IMPORTED_MODULE_7__["default"], null),
    app: "Advisor"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Switch, null, paths.map(function (path) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
      key: path.title,
      path: path.path,
      exact: true,
      component: path.component,
      rootClass: path.rootClass
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(AdminProtectedRoute, {
    exact: true,
    path: "/topics/admin/manage",
    component: function component() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(TopicAdmin, null);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Redirect, {
    path: "*",
    to: "/recommendations"
  })));
};

/***/ }),

/***/ "./src/Services/Acks.js":
/*!******************************!*\
  !*** ./src/Services/Acks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Acks": () => (/* binding */ Acks),
/* harmony export */   "useGetHostAcksQuery": () => (/* binding */ useGetHostAcksQuery),
/* harmony export */   "useGetRecAcksQuery": () => (/* binding */ useGetRecAcksQuery),
/* harmony export */   "useSetAckMutation": () => (/* binding */ useSetAckMutation)
/* harmony export */ });
/* harmony import */ var _Utilities_Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utilities/Api */ "./src/Utilities/Api.js");
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AppConstants */ "./src/AppConstants.js");
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js");



var Acks = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__.createApi)({
  reducerPath: 'acks',
  baseQuery: (0,_Utilities_Api__WEBPACK_IMPORTED_MODULE_0__.AxiosBaseQuery)({
    baseUrl: _AppConstants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL
  }),
  endpoints: function endpoints(build) {
    return {
      getRecAcks: build.query({
        query: function query(options) {
          return {
            url: "/ack/".concat(options.ruleId, "/")
          };
        }
      }),
      getHostAcks: build.query({
        query: function query(options) {
          return {
            url: "/hostack/",
            options: options
          };
        },
        transformResponse: function transformResponse(response) {
          return response.data;
        }
      }),
      setAck: build.mutation({
        query: function query(options) {
          return {
            url: "".concat(options.type === 'RULE' ? '/ack/' : '/hostack/'),
            options: options.options,
            method: 'post'
          };
        }
      })
    };
  }
});
var useGetRecAcksQuery = Acks.useGetRecAcksQuery,
    useGetHostAcksQuery = Acks.useGetHostAcksQuery,
    useSetAckMutation = Acks.useSetAckMutation;


/***/ }),

/***/ "./src/Services/Filters.js":
/*!*********************************!*\
  !*** ./src/Services/Filters.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "updatePathFilters": () => (/* binding */ updatePathFilters),
/* harmony export */   "updateRecFilters": () => (/* binding */ updateRecFilters),
/* harmony export */   "updateSID": () => (/* binding */ updateSID),
/* harmony export */   "updateSysFilters": () => (/* binding */ updateSysFilters),
/* harmony export */   "updateTags": () => (/* binding */ updateTags),
/* harmony export */   "updateWorkloads": () => (/* binding */ updateWorkloads)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

var filtersInitialState = {
  recState: {
    impacting: ['true'],
    rule_status: 'enabled',
    sort: '-total_risk',
    limit: 20,
    offset: 0
  },
  pathState: {
    sort: '-recommendation_level',
    limit: 20,
    offset: 0
  },
  sysState: {
    sort: '-last_seen',
    limit: 20,
    offset: 0
  },
  selectedTags: [],
  workloads: {},
  SID: []
};
var filters = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    updateRecFilters: function updateRecFilters(state, action) {
      state.recState = action.payload;
    },
    updateSysFilters: function updateSysFilters(state, action) {
      state.sysState = action.payload;
    },
    updatePathFilters: function updatePathFilters(state, action) {
      state.pathState = action.payload;
    },
    updateTags: function updateTags(state, action) {
      state.selectedTags = action.payload;
    },
    updateWorkloads: function updateWorkloads(state, action) {
      state.workloads = action.payload;
    },
    updateSID: function updateSID(state, action) {
      state.SID = action.payload;
    }
  }
});
var _filters$actions = filters.actions,
    updateRecFilters = _filters$actions.updateRecFilters,
    updateSysFilters = _filters$actions.updateSysFilters,
    updatePathFilters = _filters$actions.updatePathFilters,
    updateTags = _filters$actions.updateTags,
    updateWorkloads = _filters$actions.updateWorkloads,
    updateSID = _filters$actions.updateSID;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filters.reducer);

/***/ }),

/***/ "./src/Services/Pathways.js":
/*!**********************************!*\
  !*** ./src/Services/Pathways.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pathways": () => (/* binding */ Pathways),
/* harmony export */   "useGetPathwayQuery": () => (/* binding */ useGetPathwayQuery),
/* harmony export */   "useGetPathwayRulesQuery": () => (/* binding */ useGetPathwayRulesQuery),
/* harmony export */   "useGetPathwaySystemsQuery": () => (/* binding */ useGetPathwaySystemsQuery),
/* harmony export */   "useGetPathwaysQuery": () => (/* binding */ useGetPathwaysQuery)
/* harmony export */ });
/* harmony import */ var _Utilities_Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utilities/Api */ "./src/Utilities/Api.js");
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AppConstants */ "./src/AppConstants.js");
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js");



var Pathways = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__.createApi)({
  reducerPath: 'pathways',
  baseQuery: (0,_Utilities_Api__WEBPACK_IMPORTED_MODULE_0__.AxiosBaseQuery)({
    baseUrl: _AppConstants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL
  }),
  keepUnusedDataFor: 5,
  endpoints: function endpoints(build) {
    return {
      getPathways: build.query({
        query: function query(options) {
          return {
            url: "/pathway/",
            options: options
          };
        }
      }),
      getPathway: build.query({
        query: function query(options) {
          return {
            url: "/pathway/".concat(options.slug, "/"),
            options: options
          };
        }
      }),
      getPathwayRules: build.query({
        query: function query(name) {
          return {
            url: "/pathway/".concat(name, "/rules/")
          };
        }
      }),
      getPathwaySystems: build.query({
        query: function query(name) {
          return {
            url: "/pathway/".concat(name, "/systems/")
          };
        }
      })
    };
  }
});
var useGetPathwaysQuery = Pathways.useGetPathwaysQuery,
    useGetPathwayQuery = Pathways.useGetPathwayQuery,
    useGetPathwayRulesQuery = Pathways.useGetPathwayRulesQuery,
    useGetPathwaySystemsQuery = Pathways.useGetPathwaySystemsQuery;


/***/ }),

/***/ "./src/Services/Recs.js":
/*!******************************!*\
  !*** ./src/Services/Recs.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Recs": () => (/* binding */ Recs),
/* harmony export */   "useGetRecQuery": () => (/* binding */ useGetRecQuery),
/* harmony export */   "useGetRecsQuery": () => (/* binding */ useGetRecsQuery),
/* harmony export */   "useGetRecsystemsQuery": () => (/* binding */ useGetRecsystemsQuery)
/* harmony export */ });
/* harmony import */ var _Utilities_Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utilities/Api */ "./src/Utilities/Api.js");
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AppConstants */ "./src/AppConstants.js");
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js");



var Recs = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__.createApi)({
  reducerPath: 'recs',
  baseQuery: (0,_Utilities_Api__WEBPACK_IMPORTED_MODULE_0__.AxiosBaseQuery)({
    baseUrl: _AppConstants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL
  }),
  keepUnusedDataFor: 5,
  endpoints: function endpoints(build) {
    return {
      getRecs: build.query({
        query: function query(options) {
          return {
            url: "/rule/",
            options: options
          };
        }
      }),
      getRec: build.query({
        query: function query(options) {
          return {
            url: "/rule/".concat(options.ruleId, "/"),
            options: options
          };
        }
      }),
      getRecSystems: build.query({
        query: function query(options, search) {
          return {
            url: "/rule/".concat(encodeURI(options.ruleId), "/systems/"),
            options: options,
            search: search
          };
        }
      })
    };
  }
});
var useGetRecsQuery = Recs.useGetRecsQuery,
    useGetRecQuery = Recs.useGetRecQuery,
    useGetRecsystemsQuery = Recs.useGetRecsystemsQuery;


/***/ }),

/***/ "./src/Services/Systems.js":
/*!*********************************!*\
  !*** ./src/Services/Systems.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Systems": () => (/* binding */ Systems),
/* harmony export */   "useGetSystemQuery": () => (/* binding */ useGetSystemQuery),
/* harmony export */   "useGetSystemsQuery": () => (/* binding */ useGetSystemsQuery),
/* harmony export */   "useLazygetSystemQuery": () => (/* binding */ useLazygetSystemQuery),
/* harmony export */   "useLazygetSystemsQuery": () => (/* binding */ useLazygetSystemsQuery)
/* harmony export */ });
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AppConstants */ "./src/AppConstants.js");
/* harmony import */ var _Utilities_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utilities/Api */ "./src/Utilities/Api.js");
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js");



var Systems = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__.createApi)({
  reducerPath: 'systems',
  baseQuery: (0,_Utilities_Api__WEBPACK_IMPORTED_MODULE_1__.AxiosBaseQuery)({
    baseUrl: _AppConstants__WEBPACK_IMPORTED_MODULE_0__.BASE_URL
  }),
  endpoints: function endpoints(build) {
    return {
      getSystems: build.query({
        query: function query(options) {
          return {
            url: "/system/",
            options: options
          };
        }
      }),
      getSystem: build.query({
        query: function query(ruleId, options, search) {
          return {
            url: "/rule/".concat(encodeURI(ruleId), "/systems/"),
            options: options,
            search: search
          };
        }
      })
    };
  }
});
var useGetSystemsQuery = Systems.useGetSystemsQuery,
    useLazygetSystemsQuery = Systems.useLazygetSystemsQuery,
    useGetSystemQuery = Systems.useGetSystemQuery,
    useLazygetSystemQuery = Systems.useLazygetSystemQuery;


/***/ }),

/***/ "./src/Services/Topics.js":
/*!********************************!*\
  !*** ./src/Services/Topics.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Topics": () => (/* binding */ Topics),
/* harmony export */   "useGetTopicQuery": () => (/* binding */ useGetTopicQuery),
/* harmony export */   "useGetTopicsAdminQuery": () => (/* binding */ useGetTopicsAdminQuery),
/* harmony export */   "useGetTopicsQuery": () => (/* binding */ useGetTopicsQuery)
/* harmony export */ });
/* harmony import */ var _Utilities_Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utilities/Api */ "./src/Utilities/Api.js");
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AppConstants */ "./src/AppConstants.js");
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js");



var Topics = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__.createApi)({
  reducerPath: 'topics',
  baseQuery: (0,_Utilities_Api__WEBPACK_IMPORTED_MODULE_0__.AxiosBaseQuery)({
    baseUrl: "".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL)
  }),
  endpoints: function endpoints(build) {
    return {
      getTopics: build.query({
        query: function query(options) {
          return {
            url: "/topic/",
            options: options
          };
        } // transformResponse: (response) => response.data,

      }),
      getTopicsAdmin: build.query({
        query: function query(options) {
          return {
            url: "/topic?show_disabled=true",
            options: options
          };
        }
      }),
      getTopic: build.query({
        query: function query(options) {
          return {
            url: "/topic/".concat(options.topicId, "/"),
            options: options
          };
        }
      })
    };
  }
});
var useGetTopicsQuery = Topics.useGetTopicsQuery,
    useGetTopicQuery = Topics.useGetTopicQuery,
    useGetTopicsAdminQuery = Topics.useGetTopicsAdminQuery;


/***/ }),

/***/ "./src/Store/AppReducer.js":
/*!*********************************!*\
  !*** ./src/Store/AppReducer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "entitiesDetailsReducer": () => (/* binding */ entitiesDetailsReducer),
/* harmony export */   "systemReducer": () => (/* binding */ systemReducer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/ReducerRegistry */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/esm/ReducerRegistry/ReducerRegistry.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


function systemReducer() {
  return (0,_redhat_cloud_services_frontend_components_utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_1__.applyReducerHash)((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, 'SELECT_ENTITIES', function SELECT_ENTITIES(state, _ref) {
    var selected = _ref.payload.selected;
    return _objectSpread(_objectSpread({}, state), {}, {
      rows: selectRows(state.rows, selected)
    });
  }));
}
function entitiesDetailsReducer(ActionTypes) {
  return (0,_redhat_cloud_services_frontend_components_utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_1__.applyReducerHash)((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(ActionTypes.LOAD_ENTITY, "_FULFILLED"), enableApplications), {});
}

function enableApplications(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    loaded: true
  });
}

var selectRows = function selectRows(rows) {
  var selected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return (rows || []).map(function (row) {
    return _objectSpread(_objectSpread({}, row), {}, {
      selected: selected.includes(row.id)
    });
  });
};

/***/ }),

/***/ "./src/Store/index.js":
/*!****************************!*\
  !*** ./src/Store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStore": () => (/* binding */ getStore),
/* harmony export */   "updateReducers": () => (/* binding */ updateReducers)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/node_modules/redux/es/redux.js");
/* harmony import */ var _AppReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppReducer */ "./src/Store/AppReducer.js");
/* harmony import */ var _Services_Acks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/Acks */ "./src/Services/Acks.js");
/* harmony import */ var _Services_Pathways__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/Pathways */ "./src/Services/Pathways.js");
/* harmony import */ var _Services_Recs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/Recs */ "./src/Services/Recs.js");
/* harmony import */ var _Services_Systems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/Systems */ "./src/Services/Systems.js");
/* harmony import */ var _Services_Topics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/Topics */ "./src/Services/Topics.js");
/* harmony import */ var _Services_Filters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/Filters */ "./src/Services/Filters.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/ */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/redux */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/esm/redux/index.js");
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux-promise-middleware */ "webpack/sharing/consume/default/redux-promise-middleware/redux-promise-middleware");
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(redux_promise_middleware__WEBPACK_IMPORTED_MODULE_11__);


var _reducer;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }













var env = 'development';
var production = env !== 'production';
var reducer = (_reducer = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_reducer, _Services_Pathways__WEBPACK_IMPORTED_MODULE_3__.Pathways.reducerPath, _Services_Pathways__WEBPACK_IMPORTED_MODULE_3__.Pathways.reducer), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_reducer, _Services_Recs__WEBPACK_IMPORTED_MODULE_4__.Recs.reducerPath, _Services_Recs__WEBPACK_IMPORTED_MODULE_4__.Recs.reducer), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_reducer, _Services_Topics__WEBPACK_IMPORTED_MODULE_6__.Topics.reducerPath, _Services_Topics__WEBPACK_IMPORTED_MODULE_6__.Topics.reducer), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_reducer, _Services_Systems__WEBPACK_IMPORTED_MODULE_5__.Systems.reducerPath, _Services_Systems__WEBPACK_IMPORTED_MODULE_5__.Systems.reducer), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_reducer, _Services_Acks__WEBPACK_IMPORTED_MODULE_2__.Acks.reducerPath, _Services_Acks__WEBPACK_IMPORTED_MODULE_2__.Acks.reducer), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_reducer, "filters", _Services_Filters__WEBPACK_IMPORTED_MODULE_7__["default"]), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_reducer, "notifications", _redhat_cloud_services_frontend_components_notifications_redux__WEBPACK_IMPORTED_MODULE_10__.notificationsReducer), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_reducer, "systemReducer", (0,_AppReducer__WEBPACK_IMPORTED_MODULE_1__.systemReducer)([], {})), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_reducer, "entitiesDetailsReducer", (0,_AppReducer__WEBPACK_IMPORTED_MODULE_1__.entitiesDetailsReducer)({})), _reducer);

var middleware = function middleware(getDefaultMiddleware) {
  return getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['LOAD_ENTITIES', 'LOAD_ENTITY', 'CLEAR_FILTERS', 'LOAD_ENTITY_FULFILLED']
    },
    immutableCheck: {
      ignoredPaths: ['entities']
    }
  }).concat((redux_promise_middleware__WEBPACK_IMPORTED_MODULE_11___default()), _Services_Pathways__WEBPACK_IMPORTED_MODULE_3__.Pathways.middleware, _Services_Recs__WEBPACK_IMPORTED_MODULE_4__.Recs.middleware, _Services_Systems__WEBPACK_IMPORTED_MODULE_5__.Systems.middleware, _Services_Topics__WEBPACK_IMPORTED_MODULE_6__.Topics.middleware, _Services_Acks__WEBPACK_IMPORTED_MODULE_2__.Acks.middleware, (0,_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_9__.notificationsMiddleware)({
    errorTitleKey: ['message'],
    errorDescriptionKey: ['response.data.detail']
  }), production && (redux_logger__WEBPACK_IMPORTED_MODULE_8___default()));
};

var getStore = function getStore() {
  return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_12__.configureStore)({
    reducer: reducer,
    middleware: middleware,
    devTools: production
  });
};

var updateReducers = function updateReducers() {
  var newReducers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_13__.combineReducers)(_objectSpread(_objectSpread({}, reducer), newReducers));
};



/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./locales/translations.json":
/*!***********************************!*\
  !*** ./locales/translations.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"actions":"Actions","adjustFilters":"Adjust your filters and try again.","affectedSystems":"Affected systems","all":"All","ansibleSupportNo":"Manual","ansibleSupportYes":"Ansible playbook","availability":"Availability","byEnabling":"By enabling this recommendation, it will impact {systems, plural, one {# system} other {# systems}}.","cancel":"Cancel","category":"Category","categoryHeader":"Recently identified recommendations by category","countMore":"{count} more","countMoreTags":"{count} more tags available","critical":"Critical","cveAlert":"As of April 20th, 2020, all CVE recommendations previously shown in recommendations have moved over to the Vulnerability section of Red Hat Insights which provides additional capabilities for enhanced CVE identification and remediation.","cveAlertTitle":"CVE recommendations relocated","dateDisabled":"Date disabled","deleteTopic":"Delete topic","description":"Description","disableRule":"Disable recommendation","disableRuleBody":"This recommendation will not be shown in reports and dashboards.","disableRuleForSystems":"Disable recommendation for selected systems","disableRuleSingleSystem":"Disable only for this system","disabled":"Disabled","documentTitle":"{subnav} - Advisor | Red Hat Insights","downloadExecutiveLabel":"Download executive report","dueTo":"- Due to browser limitations, showing the first 1000 systems","enable":"Enable","enableRule":"Enable recommendation","enableRuleForSystems":"Enable this recommendation for all systems","enabled":"Enabled","error":"Error","execReportHeader":"This report is an executive summary of recommendations that may impact your Red Hat Enterprise Linux servers. Red Hat Advisor service is analyzing {systems} and has identified {risks} that impact 1 or more of these systems.","execReportHeaderRisks":"{risks, plural, one {# Risk} other {# Risks}}","execReportHeaderSystems":"{systems, plural, one {# RHEL system} other {# RHEL systems}}","exportCsv":"Export to CSV","exportData":"Export data","exportJson":"Export to JSON","exportPdf":"Export to PDF","featured":"Featured","feedbackThankYou":"Thank you for your feedback!","filterBy":"Filter by name","filterTagsInModal":"Filter tags","filtersApplied":"Filters applied:","firstImpacted":"First impacted","high":"High","hostAckModalTitle":"Recommendation has been disabled for:","impact":"Impact","impactDescription":"The impact of the problem would be {level} if it occurred.","impactLevel":"{level} impact","important":"Important","improveRecommended":"Recommended Pathways","incident":"Incident","incidentRules":"Incident","incidentSystems":"Incident systems","incidentTooltip":"Indicates configurations that are currently affecting your systems","incidents":"Incidents","insightsHeader":"Advisor","installClient":"Install the client on the RHEL system.","introLearnMoreButton":"Learn more about Insights with self-guided onboarding tours in the Resource Center.","invalidPathname":"Invalid pathname","inventoryIdNotFound":"No system found in inventory for the given Advisor ID","is":"is","is not":"is not","justificationNote":"Justification note","knowledgebasearticle":"Knowledgebase article","label":"Label","lastSeen":"Last seen","learnMore":"Learn more","likelihood":"Likelihood","likelihoodDescription":"The likelihood that this will be a problem is {level}.","likelihoodLevel":"{level} likelihood","loading":"Loading...","low":"Low","manual":"Manual","medium":"Medium","moderate":"Moderate","modified":"Modified","nA":"N/A","name":"Name","no":"No","noPathways":"No pathways","noPathwaysAvailable":"No pathways available","noRecommendations":"None of your connected systems are affected by any known recommendations.","noResults":"No results found","noTags":"No tags","nohits.body":"The filter criteria matches no {item}. Try changing your filter settings.","nohits.title":"No matching {item} found","nonIncidentRules":"Non-incident","nonIncidentSystems":"Non-incident systems","none":"None","notAvailable":"N/A","notConnectedBody":"Activate the Insights client for this system to get started.","notConnectedButton":"Learn about the Insights client","notConnectedTitle":"This system is not yet connected to Insights","notRequired":"Not required","numberRuleHits":"Recommendations","oneOrMore":"1 or more","operatingSystem":"Operating system","os":"Os","overview":"Overview","overview.actioncall.title":"Get started with Red Hat Insights","overview.actioncallnosystems.action":"Getting started documentation","overview.actioncallnosystems.body":"With predictive analytics, avoid problems and unplanned <break> </break> downtime in your Red Hat environment. Red Hat Insights is <break> </break> included with your Red Hat Enterprise Linux subscription","overview.categorychart.title":"Recommendations by category","overview.connectsystems.action":"Learn how to connect a system to Insights","overview.connectsystems.body":"Connect at least 10 systems to get a better awareness of issues and optimizations identified across your infastructure","overview.connectsystems.title":"Connect your first systems","overview.deploy.action":"Download Ansible Playbook","overview.deploy.body":"Get more out of Insights with more systems. Quickly connect systems with <linkansible> Ansible </linkansible> or <linkpuppet> Puppet </linkpuppet>","overview.deploy.title":"Deploy Insights at scale","overview.remediate.action":"Get started with Insights and Ansible Playbooks","overview.remediate.body":"Easily generate an Ansible playbook to quickly and effectively remediate Insights findings","overview.remediate.title":"Remediate Insights findings with Ansible","overview.severitychart.title":"Recommendations by severity","overview.systemInventory.OK":"All systes are up to date","overview.systemInventory.Removed":"{systems, plural, one {# system} other {# systems}} to be removed","overview.systemInventory.stale":"{systems, plural, one {# stale system} other {# stale systems}}","overview.systemInventory.title":"System inventory","overviewchart.nohits":"Your connected systems have no categorized recommendations.","pathways":"Pathways","pathwaysName":"Name","pathwaysPanelError":"There was a problem processing the request. Please try again.","performance":"Performance","permsAction":"You do not have the required advisor permissions to perform this action","permsBody":"To view the content of this page, you must be granted permissions to use Advisor from your Organization Administrator.","permsTitle":"You do not have access to Advisor","playbook":"Playbook","poundOfRecs":"# of recommendations","readless":"Read less","readmore":"Read more","reboot":"Reboot","recNumAndPercentage":"{count} ({total}% of total)","recSuccessfullyDisabled":"Recommendation disabled","recSuccessfullyEnabled":"Recommendation enabled","reclvl":"Recommendation level","reclvldetails":"Indicates a recommendation\'s urgency on a scale of high (fix immediately) to low (fix when convenient). Recommendations levels are constantly re-calculated based on your infrastructure\'s number of applicable recommendations, associated risks and total number of impacted systems.","recommendation":"Recommendation","recommendations":"Recommendations","recommended":"Recommended","recommendedPathways":"Recommended pathways group multiple Advisor recommendations under common actions to power more efficient remediation.","redHatInsights":"Red Hat Insights","redhatDisabled":"Red Hat disabled","redhatDisabledRuleAlert":"We want you to focus on the more important risks to your systems. Red Hat disabled recommendations can be found under the Status filter.","redhatDisabledRuleAlertTitle":"Red Hat has proactively disabled certain low risk recommendations","registerSystem":"Register the system to Red Hat Insights.","remediate":"Remediate","remediation":"Remediation","required":"Required","resetFilters":"Reset filters","resolution":"Resolution","riskOfChange":"Risk of change","riskOfChangeLabel":"{level}","riskOfChangeText":"The risk of change is <strong>{ level }</strong>, because the change takes very little time to implement and there is minimal impact to system operations.","riskOfChangeTextFour":"The risk of change is <strong>high</strong>, because the change takes a significant amount of time and planning to execute, and will impact the system and business operations of the host due to downtime.","riskOfChangeTextOne":"The risk of change is <strong>very low</strong>, because the change takes very little time to implement and there is minimal impact to system operations.","riskOfChangeTextThree":"The risk of change is <strong>moderate</strong>, because the change will likely require an outage window.","riskOfChangeTextTwo":"The risk of change is <strong>low</strong>, because the change does not require that a system be taken offline.","rule":"Rule","ruleHelpful":"Is this recommendation helpful?","ruleIsDisabled":"Recommendation is disabled","ruleIsDisabledBody":"This recommendation was disabled and has no results.","ruleIsDisabledBodyWithJustification":"This recommendation has been disabled because {reason} and has no results.","ruleIsDisabledForAllSystems":"Recommendation is disabled for all systems","ruleIsDisabledForSystems":"Recommendation is disabled for some systems","ruleIsDisabledForSystemsBody":"Recommendation is disabled for {systems, plural, one {# system} other {# systems}}","ruleIsDisabledJustification":"This recommendation has been disabled for all systems for the following reason:","ruleIsDisabledTooltip":"Indicates this recommendation across all systems will not be shown in reports and dashboards.","rules":"Rules","rulesDetailsTotalRiskBody":"The total risk of this remediation is <strong>{risk}</strong>, based on the combination of likelihood and impact to remediate.","rulesdetails.modifieddate":"Modified date: {date}","rulestable.action.hide":"Hide recommendations with no impacted systems","rulestable.action.hideDisabled":"Hide disabled recommendations","rulestable.action.show":"Show recommendations with no impacted systems","rulestable.action.showDisabled":"Show disabled recommendations","rulestable.fetchrules.error":"There was an error fetching recommendations list.","rulestable.filter.inputtext":"Find a recommendation...","rulestable.hidereports.errorenabling":"Enabling reports failed","rulestable.norulehits.adddisabledbutton":"Include disabled recommendations","rulestable.norulehits.enabledrulesbody":"None of your connected systems are affected by enabled recommendations.","rulestable.norulehits.enabledrulesbodysecondline":"To find more recommendations, expand your filter settings to include all recommendations.","rulestable.norulehits.title":"No recommendations","rulestable.norules.disabledrulesbody":"We haven\'t detected any issues with your connected systems.","rulestable.norules.disabledrulesbodysecondline":"None of your connected systems are affected by enabled recommendations, and you currently have no disabled recommendations.","rulestable.norules.redhatdisabledrulesbody":"This recommendation was disabled proactively by Red Hat and has no results.","save":"Save","search":"Search","security":"Security","selectAll":"Select all ({items} items)","selectNone":"Select none (0 items)","selectPage":"Select page ({items} items)","severity":"Severity","severityHeader":"Identified recommendations by severity","stability":"Stability","staticRemediationDesc":"To fully remediate all recommendations, there may be additional steps needed.","status":"Status","summarychart.item":"{numIssues} {name} affecting {affectedSystems} {affectedSystems, plural, one {system} other {systems}}","summarychart.itemnohits":"No {severity} hits.","summarychart.nohits":"Your connected systems have no recommendations.","sysTableCount":"This report identified {systems}.","system":"System","systemName":"System name","systemReboot":"System reboot <strong>{ status }</strong> required.","systems":"Systems","systemsExposed":"Systems exposed","systemtable.fetch.error":"There was an error fetching systems","tag":"Tag","tagsApplied":"Tags applied:","thisPathway":"This pathway is expected to improve <strong>{category}</strong> on <strong>{systems, plural, one {# system} other {# systems}}</strong> and resolve <strong>{incidents, plural, one {# incident} other {# incidents}}</strong>.","title":"Title","topThreeRulesHeader":"Top 3 recommendations in your infrastructure","topicAddEditDescription":"Description","topicAddEditDescriptionHelperText":"Shown to users to describe the topic","topicAddEditDisabled":"Disabled (not visible)","topicAddEditEnabled":"Enabled (visible)","topicAddEditFeatureBox":"Feature this topic","topicAddEditLabelHelperText":"Recommendations tagged with this tag will be added to the topic","topicAdminCreate":"Create new topic","topicAdminEdit":"Edit topic","topicAdminTitle":"Topic - administration","topicRelatedToRule":"Topics related to this recommendation","topiccard.systemsaffected":"{systems, plural, one {# system} other {# systems}} affected","topicdetails.nodetails.body":"There exist no further details for this topic.","topicdetails.nodetails.title":"No details for topic","topics":"Topics","topicslist.nohits.body":"To continue, edit your filter settings and search again.","topicslist.notopics.body":"Either no topics presently exist or there is an issue presenting them.","topicslist.notopics.title":"No topics","topicslug":"Slug","total hits":"Total hits","totalRisk":"Total risk","totalRiskPathway":"Total risk of pathway","undefined":"Undefined","veryLow":"Very Low","viewAffectedSystems":"View {systems, plural, one {the affected system} other {# affected systems}}","viewPathway":"View pathway","viewSystems":"View systems","yes":"Yes"}');

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/src_AppEntry_js-webpack_sharing_consume_default_scalprum_react-core_scalprum_react-core.9f2de0a816828ad415f5ddc0d567bbbb.js.map