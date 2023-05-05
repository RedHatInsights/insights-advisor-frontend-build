(self["webpackChunkadvisor_frontend"] = self["webpackChunkadvisor_frontend"] || []).push([["TopicDetails"],{

/***/ "./src/PresentationalComponents/Breadcrumbs/Breadcrumbs.js":
/*!*****************************************************************!*\
  !*** ./src/PresentationalComponents/Breadcrumbs/Breadcrumbs.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Breadcrumb/Breadcrumb */ "./node_modules/@patternfly/react-core/dist/esm/components/Breadcrumb/Breadcrumb.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Breadcrumb/BreadcrumbItem */ "./node_modules/@patternfly/react-core/dist/esm/components/Breadcrumb/BreadcrumbItem.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");
/* harmony import */ var _Services_Recs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/Recs */ "./src/Services/Recs.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");











var Breadcrumbs = function Breadcrumbs(_ref) {
  var _useLocation$pathname;

  var current = _ref.current;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var location = (_useLocation$pathname = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)().pathname) === null || _useLocation$pathname === void 0 ? void 0 : _useLocation$pathname.split('/');

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var skip = !(location[1] === 'recommendations' && location.length === 4) || location[2] === 'pathways';

  var _useGetRecQuery = (0,_Services_Recs__WEBPACK_IMPORTED_MODULE_5__.useGetRecQuery)({
    ruleId: location[2]
  }, {
    skip: skip
  }),
      data = _useGetRecQuery.data,
      isFetching = _useGetRecQuery.isFetching;

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var buildBreadcrumbs = function buildBreadcrumbs() {
      var crumbs = []; // add base

      crumbs.push({
        title: "".concat(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_4__["default"].insightsHeader), " ").concat(location[1]),
        navigate: "/".concat(location[1])
      }); // if applicable, add :id breadcrumb

      if (!skip) {
        crumbs.push({
          title: data === null || data === void 0 ? void 0 : data.description,
          navigate: "/".concat(location[1], "/").concat(location[2])
        });
      }

      if (location[2] === 'pathways') {
        crumbs = [{
          title: 'Advisor pathways',
          navigate: '/recommendations/pathways'
        }];
      }

      setItems(crumbs);
    };

    buildBreadcrumbs(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, !isFetching && items.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_7__.Breadcrumb, {
    ouiaId: "detail"
  }, items.map(function (oneLink, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_8__.BreadcrumbItem, {
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: oneLink.navigate
    }, oneLink.title));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_8__.BreadcrumbItem, {
    isActive: true
  }, current)) : intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_4__["default"].loading));
};

Breadcrumbs.propTypes = {
  current: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumbs);

/***/ }),

/***/ "./src/SmartComponents/Topics/Details.js":
/*!***********************************************!*\
  !*** ./src/SmartComponents/Topics/Details.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Details_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Details.scss */ "./src/SmartComponents/Topics/_Details.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/esm/components/Text/Text.js");
/* harmony import */ var _PresentationalComponents_Breadcrumbs_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../PresentationalComponents/Breadcrumbs/Breadcrumbs */ "./src/PresentationalComponents/Breadcrumbs/Breadcrumbs.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Label_Label__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Label/Label */ "./node_modules/@patternfly/react-core/dist/esm/components/Label/Label.js");
/* harmony import */ var _PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../PresentationalComponents/Loading/Loading */ "./src/PresentationalComponents/Loading/Loading.js");
/* harmony import */ var _PresentationalComponents_MessageState_MessageState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../PresentationalComponents/MessageState/MessageState */ "./src/PresentationalComponents/MessageState/MessageState.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeader.js");
/* harmony import */ var _PresentationalComponents_RulesTable_RulesTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../PresentationalComponents/RulesTable/RulesTable */ "./src/PresentationalComponents/RulesTable/RulesTable.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_star_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/star-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/star-icon.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Text/TextContent */ "./node_modules/@patternfly/react-core/dist/esm/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_times_circle_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/times-circle-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/times-circle-icon.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Title_Title__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/esm/components/Title/Title.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Truncate__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Truncate */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Truncate/Truncate.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");
/* harmony import */ var _Services_Filters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Services/Filters */ "./src/Services/Filters.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Services_Topics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Services/Topics */ "./src/Services/Topics.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _PresentationalComponents_Common_Tables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../PresentationalComponents/Common/Tables */ "./src/PresentationalComponents/Common/Tables.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
























var Details = function Details() {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_13__["default"])();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
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
  var recFilters = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (_ref4) {
    var filters = _ref4.filters;
    return filters.recState;
  });
  var topicId = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useParams)().id;
  var options = (selectedTags === null || selectedTags === void 0 ? void 0 : selectedTags.length) && {
    tags: selectedTags
  };
  workloads && (options = _objectSpread(_objectSpread({}, options), (0,_PresentationalComponents_Common_Tables__WEBPACK_IMPORTED_MODULE_12__.workloadQueryBuilder)(workloads, SID)));

  var _useGetTopicQuery = (0,_Services_Topics__WEBPACK_IMPORTED_MODULE_10__.useGetTopicQuery)(_objectSpread(_objectSpread({}, options), {
    topicId: topicId
  })),
      _useGetTopicQuery$dat = _useGetTopicQuery.data,
      topic = _useGetTopicQuery$dat === void 0 ? {} : _useGetTopicQuery$dat,
      isLoading = _useGetTopicQuery.isLoading,
      isFetching = _useGetTopicQuery.isFetching,
      isError = _useGetTopicQuery.isError;

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var initiaRecFilters = _objectSpread({}, recFilters);

    dispatch((0,_Services_Filters__WEBPACK_IMPORTED_MODULE_8__.updateRecFilters)({
      impacting: true,
      rule_status: 'enabled',
      topic: topicId,
      sort: "-total_risk",
      limit: 10,
      offset: 0
    }));
    return function () {
      return dispatch((0,_Services_Filters__WEBPACK_IMPORTED_MODULE_8__.updateRecFilters)(initiaRecFilters));
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (topic && topic.name) {
      var subnav = "".concat(topic.name, " - ").concat(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].topics.defaultMessage);
      document.title = intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].documentTitle, {
        subnav: subnav
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [topic]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_14__["default"], null, (topic === null || topic === void 0 ? void 0 : topic.name) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_PresentationalComponents_Breadcrumbs_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__["default"], {
    current: topic === null || topic === void 0 ? void 0 : topic.name,
    ouiaId: "details"
  }), !isFetching && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Title_Title__WEBPACK_IMPORTED_MODULE_15__.Title, {
    headingLevel: "h3",
    size: "2xl",
    className: "pf-u-mb-lg"
  }, topic.name, topic.featured && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Label_Label__WEBPACK_IMPORTED_MODULE_16__.Label, {
    color: "blue",
    className: "adv-c-label pf-m-compact",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_icons_dist_esm_icons_star_icon__WEBPACK_IMPORTED_MODULE_17__["default"], null)
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].featured))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_18__.TextContent, {
    className: "pf-u-mt-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_19__.Text, {
    component: _patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_19__.TextVariants.p
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_Truncate__WEBPACK_IMPORTED_MODULE_20__["default"], {
    text: topic.description,
    length: 600,
    expandText: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].readmore),
    collapseText: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].readless),
    inline: true
  })))), isFetching || isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", {
    className: "pf-l-page__main-section pf-c-page__main-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, !isError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Title_Title__WEBPACK_IMPORTED_MODULE_15__.Title, {
    headingLevel: "h3",
    size: "2xl",
    className: "pf-u-mb-lg"
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].recommendations)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_PresentationalComponents_RulesTable_RulesTable__WEBPACK_IMPORTED_MODULE_6__["default"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_PresentationalComponents_MessageState_MessageState__WEBPACK_IMPORTED_MODULE_5__["default"], {
    icon: _patternfly_react_icons_dist_esm_icons_times_circle_icon__WEBPACK_IMPORTED_MODULE_21__["default"],
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].topicDetailslNodetailsTitle),
    text: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].topicDetailslNodetailsBody)
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Details);

/***/ }),

/***/ "./src/SmartComponents/Topics/_Details.scss":
/*!**************************************************!*\
  !*** ./src/SmartComponents/Topics/_Details.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "?50cd":
/*!**********************************!*\
  !*** ./breadcrumb.css (ignored) ***!
  \**********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?95ee":
/*!*******************************!*\
  !*** ./content.css (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/TopicDetails.96245481c3c340b3fc9797f50e1840ad.js.map