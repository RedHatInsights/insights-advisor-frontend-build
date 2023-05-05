"use strict";
(self["webpackChunkadvisor_frontend"] = self["webpackChunkadvisor_frontend"] || []).push([["PathwaysTable"],{

/***/ "./node_modules/@patternfly/react-icons/dist/esm/icons/search-icon.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@patternfly/react-icons/dist/esm/icons/search-icon.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchIcon": () => (/* binding */ SearchIcon),
/* harmony export */   "SearchIconConfig": () => (/* binding */ SearchIconConfig),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createIcon */ "./node_modules/@patternfly/react-icons/dist/esm/createIcon.js");


const SearchIconConfig = {
  name: 'SearchIcon',
  height: 512,
  width: 512,
  svgPath: 'M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z',
  yOffset: 0,
  xOffset: 0,
};

const SearchIcon = (0,_createIcon__WEBPACK_IMPORTED_MODULE_0__.createIcon)(SearchIconConfig);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchIcon);

/***/ }),

/***/ "./src/PresentationalComponents/Labels/RecommendationLevel.js":
/*!********************************************************************!*\
  !*** ./src/PresentationalComponents/Labels/RecommendationLevel.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/PresentationalComponents/PathwaysTable/PathwaysTable.js":
/*!*********************************************************************!*\
  !*** ./src/PresentationalComponents/PathwaysTable/PathwaysTable.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../AppConstants */ "./src/AppConstants.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Pagination/Pagination */ "./node_modules/@patternfly/react-core/dist/esm/components/Pagination/Pagination.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @patternfly/react-table/dist/esm */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Table.js");
/* harmony import */ var _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @patternfly/react-table/dist/esm */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Body.js");
/* harmony import */ var _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @patternfly/react-table/dist/esm */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Header.js");
/* harmony import */ var _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @patternfly/react-table/dist/esm */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/TableTypes.js");
/* harmony import */ var _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @patternfly/react-table/dist/esm */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/utils/decorators/cellWidth.js");
/* harmony import */ var _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @patternfly/react-table/dist/esm */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/utils/decorators/wrappable.js");
/* harmony import */ var _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @patternfly/react-table/dist/esm */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/utils/decorators/info.js");
/* harmony import */ var _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @patternfly/react-table/dist/esm */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/utils/decorators/sortable.js");
/* harmony import */ var _Common_Tables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Common/Tables */ "./src/PresentationalComponents/Common/Tables.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Labels_CategoryLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Labels/CategoryLabel */ "./src/PresentationalComponents/Labels/CategoryLabel.js");
/* harmony import */ var _Loading_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Loading/Loading */ "./src/PresentationalComponents/Loading/Loading.js");
/* harmony import */ var _MessageState_MessageState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../MessageState/MessageState */ "./src/PresentationalComponents/MessageState/MessageState.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PrimaryToolbar */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PrimaryToolbar/PrimaryToolbar.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_ErrorState__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/ErrorState */ "./node_modules/@redhat-cloud-services/frontend-components/esm/ErrorState/ErrorState.js");
/* harmony import */ var _Labels_RecommendationLevel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Labels/RecommendationLevel */ "./src/PresentationalComponents/Labels/RecommendationLevel.js");
/* harmony import */ var _Labels_RuleLabels__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Labels/RuleLabels */ "./src/PresentationalComponents/Labels/RuleLabels.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_search_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/search-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/search-icon.js");
/* harmony import */ var _Utilities_Debounce__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Utilities/Debounce */ "./src/Utilities/Debounce.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");
/* harmony import */ var _Services_Filters__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Services/Filters */ "./src/Services/Filters.js");
/* harmony import */ var _Services_Pathways__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../Services/Pathways */ "./src/Services/Pathways.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






























var PathwaysTable = function PathwaysTable(_ref) {
  var _pathways$meta, _pathways$meta2;

  var isTabActive = _ref.isTabActive;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_17__["default"])();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();

  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)(),
      search = _useLocation.search;

  var selectedTags = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (_ref2) {
    var filters = _ref2.filters;
    return filters.selectedTags;
  });
  var workloads = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (_ref3) {
    var filters = _ref3.filters;
    return filters.workloads;
  });
  var SID = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (_ref4) {
    var filters = _ref4.filters;
    return filters.SID;
  });
  var filters = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (_ref5) {
    var filters = _ref5.filters;
    return filters.pathState;
  });

  var setFilters = function setFilters(filters) {
    return dispatch((0,_Services_Filters__WEBPACK_IMPORTED_MODULE_14__.updatePathFilters)(filters));
  };

  var options = {};
  (selectedTags === null || selectedTags === void 0 ? void 0 : selectedTags.length) && (options = _objectSpread(_objectSpread({}, options), {
    tags: selectedTags.join(',')
  }));
  workloads && (options = _objectSpread(_objectSpread({}, options), (0,_Common_Tables__WEBPACK_IMPORTED_MODULE_5__.workloadQueryBuilder)(workloads, SID)));

  var _useGetPathwaysQuery = (0,_Services_Pathways__WEBPACK_IMPORTED_MODULE_15__.useGetPathwaysQuery)(_objectSpread(_objectSpread({}, (0,_Common_Tables__WEBPACK_IMPORTED_MODULE_5__.filterFetchBuilder)(filters)), options)),
      _useGetPathwaysQuery$ = _useGetPathwaysQuery.data,
      pathways = _useGetPathwaysQuery$ === void 0 ? [] : _useGetPathwaysQuery$,
      isFetching = _useGetPathwaysQuery.isFetching,
      isLoading = _useGetPathwaysQuery.isLoading,
      isError = _useGetPathwaysQuery.isError;

  var cols = [{
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_13__["default"].pathwaysName),
    transforms: [_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_18__.sortable, (0,_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_19__.cellWidth)(45)]
  }, {
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_13__["default"].category) // transforms: [sortable, cellWidth(15)],

  }, {
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_13__["default"].systems),
    transforms: [_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_18__.sortable, (0,_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_19__.cellWidth)(10)]
  }, {
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_13__["default"].reboot) // transforms: [sortable, cellWidth(10)],

  }, {
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_13__["default"].reclvl),
    transforms: [_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_18__.sortable, (0,_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_19__.cellWidth)(20), _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_20__.fitContent, (0,_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_21__.info)({
      tooltip: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_13__["default"].reclvldetails),
      tooltipProps: {
        isContentLeftAligned: true
      }
    })]
  }];
  var sortIndices = {
    0: 'name',
    // 1: 'category',
    2: 'impacted_systems_count',
    // 3: 'reboot_required',
    4: 'recommendation_level'
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      sortBy = _useState2[0],
      setSortBy = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      filterBuilding = _useState4[0],
      setFilterBuilding = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)((filters === null || filters === void 0 ? void 0 : filters.text) || ''),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      searchText = _useState6[0],
      setSearchText = _useState6[1];

  var debouncedSearchText = (0,_Utilities_Debounce__WEBPACK_IMPORTED_MODULE_12__["default"])(searchText, _AppConstants__WEBPACK_IMPORTED_MODULE_2__.DEBOUNCE_DELAY);

  var onSort = function onSort(_event, index, direction) {
    var orderParam = "".concat(direction === 'asc' ? '' : '-').concat(sortIndices[index]);
    setSortBy({
      index: index,
      direction: direction
    });
    setFilters(_objectSpread(_objectSpread({}, filters), {}, {
      sort: orderParam,
      offset: 0
    }));
  };

  var _onSetPage = function onSetPage(pageNumber) {
    var newOffset = pageNumber * filters.limit - filters.limit;
    setFilters(_objectSpread(_objectSpread({}, filters), {}, {
      offset: newOffset
    }));
  };

  var buildFilterChips = function buildFilterChips() {
    var localFilters = _objectSpread({}, filters);

    delete localFilters.sort;
    delete localFilters.offset;
    delete localFilters.limit;
    return (0,_Common_Tables__WEBPACK_IMPORTED_MODULE_5__.pruneFilters)(localFilters, _objectSpread(_objectSpread({}, _AppConstants__WEBPACK_IMPORTED_MODULE_2__.FILTER_CATEGORIES), _AppConstants__WEBPACK_IMPORTED_MODULE_2__.PATHWAYS_FILTER_CATEGORIES));
  };

  var rowBuilder = function rowBuilder(pathways) {
    return pathways.length === 0 ? [{
      cells: [{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_MessageState_MessageState__WEBPACK_IMPORTED_MODULE_9__["default"], {
          icon: _patternfly_react_icons_dist_esm_icons_search_icon__WEBPACK_IMPORTED_MODULE_22__["default"],
          title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_13__["default"].noResults),
          text: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_13__["default"].adjustFilters)
        }),
        props: {
          colSpan: 6
        }
      }]
    }] : pathways.flatMap(function (pathway, key) {
      return [{
        cells: [{
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
            key: key
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
            key: key,
            to: "/recommendations/pathways/".concat(pathway.slug)
          }, ' ', pathway.name, ' '), pathway.has_incident && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Labels_RuleLabels__WEBPACK_IMPORTED_MODULE_11__["default"], {
            rule: {
              tags: 'incident'
            },
            isCompact: true
          }))
        }, {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Labels_CategoryLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
            key: key,
            labelList: pathway.categories,
            isCompact: true
          })
        }, {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
            key: key
          }, "".concat(pathway.impacted_systems_count.toLocaleString()))
        }, {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
            key: key
          }, intl.formatMessage(pathway.reboot_required ? _Messages__WEBPACK_IMPORTED_MODULE_13__["default"].required : _Messages__WEBPACK_IMPORTED_MODULE_13__["default"].notRequired))
        }, {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Labels_RecommendationLevel__WEBPACK_IMPORTED_MODULE_10__["default"], {
            key: key,
            recLvl: pathway.recommendation_level
          })
        }]
      }];
    });
  };

  var removeFilterParam = function removeFilterParam(param) {
    var filter = _objectSpread(_objectSpread({}, filters), {}, {
      offset: 0
    });

    param === 'text' && setSearchText('');
    delete filter[param];
    setFilters(filter);
  };

  var addFilterParam = function addFilterParam(param, values) {
    values.length > 0 ? setFilters(_objectSpread(_objectSpread({}, filters), {}, {
      offset: 0
    }, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, param, values))) : removeFilterParam(param);
  };

  var filterConfigItems = [{
    label: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_13__["default"].name).toLowerCase(),
    filterValues: {
      key: 'text-filter',
      onChange: function onChange(_event, value) {
        return setSearchText(value);
      },
      value: searchText,
      placeholder: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_13__["default"].filterBy)
    }
  }, {
    label: _AppConstants__WEBPACK_IMPORTED_MODULE_2__.FILTER_CATEGORIES.category.title,
    type: _AppConstants__WEBPACK_IMPORTED_MODULE_2__.FILTER_CATEGORIES.category.type,
    id: _AppConstants__WEBPACK_IMPORTED_MODULE_2__.FILTER_CATEGORIES.category.urlParam,
    value: "checkbox-".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_2__.FILTER_CATEGORIES.category.urlParam),
    filterValues: {
      key: "".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_2__.FILTER_CATEGORIES.category.urlParam, "-filter"),
      onChange: function onChange(_event, values) {
        return addFilterParam(_AppConstants__WEBPACK_IMPORTED_MODULE_2__.FILTER_CATEGORIES.category.urlParam, values);
      },
      value: filters.category,
      items: _AppConstants__WEBPACK_IMPORTED_MODULE_2__.FILTER_CATEGORIES.category.values
    }
  }, {
    label: _AppConstants__WEBPACK_IMPORTED_MODULE_2__.PATHWAYS_FILTER_CATEGORIES.has_incident.title,
    type: _AppConstants__WEBPACK_IMPORTED_MODULE_2__.PATHWAYS_FILTER_CATEGORIES.has_incident.type,
    id: _AppConstants__WEBPACK_IMPORTED_MODULE_2__.PATHWAYS_FILTER_CATEGORIES.has_incident.urlParam,
    value: "checkbox-".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_2__.PATHWAYS_FILTER_CATEGORIES.has_incident.urlParam),
    filterValues: {
      key: "".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_2__.PATHWAYS_FILTER_CATEGORIES.has_incident.urlParam, "-filter"),
      onChange: function onChange(_event, values) {
        return addFilterParam(_AppConstants__WEBPACK_IMPORTED_MODULE_2__.PATHWAYS_FILTER_CATEGORIES.has_incident.urlParam, values);
      },
      value: filters.has_incident,
      items: _AppConstants__WEBPACK_IMPORTED_MODULE_2__.PATHWAYS_FILTER_CATEGORIES.has_incident.values
    }
  }, {
    label: _AppConstants__WEBPACK_IMPORTED_MODULE_2__.PATHWAYS_FILTER_CATEGORIES.reboot_required.title,
    type: _AppConstants__WEBPACK_IMPORTED_MODULE_2__.PATHWAYS_FILTER_CATEGORIES.reboot_required.type,
    id: _AppConstants__WEBPACK_IMPORTED_MODULE_2__.PATHWAYS_FILTER_CATEGORIES.reboot_required.urlParam,
    value: "checkbox-".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_2__.PATHWAYS_FILTER_CATEGORIES.reboot_required.urlParam),
    filterValues: {
      key: "".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_2__.PATHWAYS_FILTER_CATEGORIES.reboot_required.urlParam, "-filter"),
      onChange: function onChange(_event, values) {
        return addFilterParam(_AppConstants__WEBPACK_IMPORTED_MODULE_2__.PATHWAYS_FILTER_CATEGORIES.reboot_required.urlParam, values);
      },
      value: filters.reboot_required,
      items: _AppConstants__WEBPACK_IMPORTED_MODULE_2__.PATHWAYS_FILTER_CATEGORIES.reboot_required.values
    }
  }];
  var activeFiltersConfig = {
    deleteTitle: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_13__["default"].resetFilters),
    filters: buildFilterChips(),
    onDelete: function onDelete(_event, itemsToRemove, isAll) {
      if (isAll) {
        setSearchText('');
        setFilters({
          limit: filters.limit,
          offset: filters.offset
        });
      } else {
        itemsToRemove.map(function (item) {
          var newFilter = (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, item.urlParam, Array.isArray(filters[item.urlParam]) ? filters[item.urlParam].filter(function (value) {
            return String(value) !== String(item.chips[0].value);
          }) : '');

          newFilter[item.urlParam].length > 0 ? setFilters(_objectSpread(_objectSpread({}, filters), newFilter)) : removeFilterParam(item.urlParam);
        });
      }
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (!filterBuilding && selectedTags !== null) {
      (0,_Common_Tables__WEBPACK_IMPORTED_MODULE_5__.urlBuilder)(filters, selectedTags);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [filters, selectedTags, workloads, SID]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (isTabActive && search && filterBuilding) {
      var paramsObject = (0,_Common_Tables__WEBPACK_IMPORTED_MODULE_5__.paramParser)();
      delete paramsObject.tags;
      paramsObject.text === undefined ? setSearchText('') : setSearchText(paramsObject.text);
      paramsObject.sort = paramsObject.sort === undefined || !Object.values(sortIndices).includes(paramsObject === null || paramsObject === void 0 ? void 0 : paramsObject.sort[0]) ? '-impacted_systems_count' : paramsObject.sort[0];
      paramsObject.offset === undefined ? paramsObject.offset = 0 : paramsObject.offset = Number(paramsObject.offset[0]);
      paramsObject.limit === undefined ? paramsObject.limit = 20 : paramsObject.limit = Number(paramsObject.limit[0]);
      paramsObject.reboot_required !== undefined && !Array.isArray(paramsObject.reboot_required) && (paramsObject.reboot_required = ["".concat(paramsObject.reboot_required)]);
      setFilters(_objectSpread(_objectSpread({}, filters), paramsObject));
    }

    setFilterBuilding(false); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (filters.sort !== undefined && sortIndices) {
      var sortInput = filters.sort;
      var sortIndex = Number(Object.entries(sortIndices).find(function (item) {
        return item[1] === sortInput || "-".concat(item[1]) === sortInput;
      })[0]);
      var sortDirection = filters.sort[0] === '-' ? 'desc' : 'asc';
      setSortBy({
        index: sortIndex,
        direction: sortDirection
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [filters.sort]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (!filterBuilding && !isLoading) {
      var filter = _objectSpread({}, filters);

      var text = searchText.length ? {
        text: searchText
      } : {};
      delete filter.text;
      setFilters(_objectSpread(_objectSpread(_objectSpread({}, filter), text), {}, {
        offset: 0
      }));
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [debouncedSearchText]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_redhat_cloud_services_frontend_components_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_23__["default"], {
    pagination: {
      itemCount: (pathways === null || pathways === void 0 ? void 0 : (_pathways$meta = pathways.meta) === null || _pathways$meta === void 0 ? void 0 : _pathways$meta.count) || 0,
      page: filters.offset / filters.limit + 1,
      perPage: Number(filters.limit),
      onSetPage: function onSetPage(_event, page) {
        _onSetPage(page);
      },
      onPerPageSelect: function onPerPageSelect(_event, perPage) {
        setFilters(_objectSpread(_objectSpread({}, filters), {}, {
          limit: perPage,
          offset: 0
        }));
      },
      isCompact: true
    },
    filterConfig: {
      items: filterConfigItems
    },
    activeFiltersConfig: activeFiltersConfig
  }), isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Loading_Loading__WEBPACK_IMPORTED_MODULE_8__["default"], null) : isError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_24__.Table, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_redhat_cloud_services_frontend_components_ErrorState__WEBPACK_IMPORTED_MODULE_25__["default"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_24__.Table, {
    "aria-label": 'pathways-table',
    variant: _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_26__.TableVariant.compact,
    sortBy: sortBy,
    onSort: onSort,
    cells: cols,
    rows: rowBuilder(pathways === null || pathways === void 0 ? void 0 : pathways.data),
    isStickyHeader: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_27__.TableHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_28__.TableBody, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_patternfly_react_core_dist_esm_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_29__.Pagination, {
    ouiaId: "page",
    itemCount: (pathways === null || pathways === void 0 ? void 0 : (_pathways$meta2 = pathways.meta) === null || _pathways$meta2 === void 0 ? void 0 : _pathways$meta2.count) || 0,
    page: filters.offset / filters.limit + 1,
    perPage: Number(filters.limit),
    onSetPage: function onSetPage(_e, page) {
      _onSetPage(page);
    },
    onPerPageSelect: function onPerPageSelect(_e, perPage) {
      setFilters(_objectSpread(_objectSpread({}, filters), {}, {
        limit: perPage,
        offset: 0
      }));
    },
    widgetId: "pagination-options-menu-bottom",
    variant: _patternfly_react_core_dist_esm_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_29__.PaginationVariant.bottom
  }));
};

PathwaysTable.propTypes = {
  isTabActive: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PathwaysTable);

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/PathwaysTable.5c494618be3f850b2bb1260e06591988.js.map