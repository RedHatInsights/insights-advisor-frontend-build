(self["webpackChunkadvisor_frontend"] = self["webpackChunkadvisor_frontend"] || []).push([["src_PresentationalComponents_Breadcrumbs_Breadcrumbs_js-src_PresentationalComponents_Inventor-7fe9b6"],{

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

/***/ "./src/PresentationalComponents/Inventory/Hooks/useBulkSelect/helpers.js":
/*!*******************************************************************************!*\
  !*** ./src/PresentationalComponents/Inventory/Hooks/useBulkSelect/helpers.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkCurrentPageSelected": () => (/* binding */ checkCurrentPageSelected),
/* harmony export */   "checkboxState": () => (/* binding */ checkboxState),
/* harmony export */   "compileTitle": () => (/* binding */ compileTitle),
/* harmony export */   "itemIds": () => (/* binding */ itemIds),
/* harmony export */   "selectItemTransformer": () => (/* binding */ selectItemTransformer),
/* harmony export */   "selectOrUnselect": () => (/* binding */ selectOrUnselect)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_Spinner_Spinner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Spinner/Spinner.js */ "./node_modules/@patternfly/react-core/dist/esm/components/Spinner/Spinner.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



var compileTitle = function compileTitle(itemsTotal, isLoading) {
  if (itemsTotal === 0 && !isLoading) {
    return null;
  } else if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Spinner_Spinner_js__WEBPACK_IMPORTED_MODULE_2__.Spinner, {
      size: "sm"
    }), "     ".concat(itemsTotal, " selected"));
  } else {
    return "".concat(itemsTotal, " selected");
  }
};
var checkboxState = function checkboxState(selectedItemsTotal, itemsTotal) {
  if (selectedItemsTotal === 0) {
    return false;
  } else if (selectedItemsTotal === itemsTotal) {
    return true;
  } else {
    return null;
  }
};
var selectOrUnselect = function selectOrUnselect(selected) {
  return selected ? 'Unselect' : 'Select';
};

var allItemsIncluded = function allItemsIncluded() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var selection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return (items === null || items === void 0 ? void 0 : items.filter(function (item) {
    return selection.includes(item);
  }).length) === items.length;
};

var checkCurrentPageSelected = function checkCurrentPageSelected() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var selectedItems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (selectedItems.length === 0) {
    return false;
  } else {
    return allItemsIncluded(items, selectedItems);
  }
};
var itemIds = function itemIds(items) {
  return items.map(function (_ref) {
    var itemId = _ref.itemId;
    return itemId;
  });
};
var selectItemTransformer = function selectItemTransformer(item) {
  var selectedIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return _objectSpread(_objectSpread({}, item), {}, {
    rowProps: {
      selected: selectedIds.includes(item.itemId)
    }
  });
};

/***/ }),

/***/ "./src/PresentationalComponents/Inventory/Hooks/useBulkSelect/index.js":
/*!*****************************************************************************!*\
  !*** ./src/PresentationalComponents/Inventory/Hooks/useBulkSelect/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _useBulkSelect__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _useBulkSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useBulkSelect */ "./src/PresentationalComponents/Inventory/Hooks/useBulkSelect/useBulkSelect.js");


/***/ }),

/***/ "./src/PresentationalComponents/Inventory/Hooks/useBulkSelect/useBulkSelect.js":
/*!*************************************************************************************!*\
  !*** ./src/PresentationalComponents/Inventory/Hooks/useBulkSelect/useBulkSelect.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _useSelectionManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useSelectionManager */ "./src/PresentationalComponents/Inventory/Hooks/useSelectionManager/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./src/PresentationalComponents/Inventory/Hooks/useBulkSelect/helpers.js");






/**
 * Provides properties for a Pattternfly (based) Table and Toolbar component to implement bulk selection
 *
 * @param {number} [total] Number to show as total count
 * @param {Function} [onSelect] function to call when a selection is made
 * @param {Array} [preselected] Array of itemIds selected when initialising
 * @param {Function} [itemIdsInTable] async function that returns an array of all item ids
 * @param {Function} [itemIdsOnPage] async function that returns an array of item ids visible on the page
 * @param {string} [identifies] Prop of the row containing the item ID
 * @returns {{ selectedIds , selectNone, tableProps }}
 */

var useBulkSelect = function useBulkSelect(_ref) {
  var _ref$total = _ref.total,
      total = _ref$total === void 0 ? 0 : _ref$total,
      onSelect = _ref.onSelect,
      preselected = _ref.preselected,
      itemIdsInTable = _ref.itemIdsInTable,
      itemIdsOnPage = _ref.itemIdsOnPage,
      _ref$identifier = _ref.identifier,
      identifier = _ref$identifier === void 0 ? 'id' : _ref$identifier,
      isLoading = _ref.isLoading;
  var enableBulkSelect = !!onSelect;

  var _useSelectionManager = (0,_useSelectionManager__WEBPACK_IMPORTED_MODULE_4__["default"])(preselected || []),
      selectedIds = _useSelectionManager.selection,
      set = _useSelectionManager.set,
      select = _useSelectionManager.select,
      deselect = _useSelectionManager.deselect,
      clear = _useSelectionManager.clear;

  var selectedIdsTotal = (selectedIds || []).length;
  var idsOnPage = itemIdsOnPage();
  var paginatedTotal = idsOnPage.length || total;
  var allSelected = selectedIdsTotal === total;
  var noneSelected = selectedIdsTotal === 0;
  var isDisabled = total === 0;
  var checked = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.checkboxState)(selectedIdsTotal, total);
  var title = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.compileTitle)(selectedIdsTotal, isLoading);

  var mergeArraysUniqly = function mergeArraysUniqly(arrayA, arrayB) {
    return Array.from(new Set([].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arrayA), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arrayB))));
  };

  var selectOne = function selectOne(_, selected, _key, row) {
    return selected ? select(row[identifier]) : deselect(row[identifier]);
  };

  var selectPage = function selectPage() {
    var selectedItems = (selectedIds === null || selectedIds === void 0 ? void 0 : selectedIds.length) > 0 ? mergeArraysUniqly(selectedIds, idsOnPage) : idsOnPage;
    select(selectedItems, undefined, true);
  };

  var selectAll = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var items;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return itemIdsInTable();

            case 2:
              items = _context.sent;

              if (allSelected) {
                clear();
              } else {
                set(items);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function selectAll() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    set(preselected); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(preselected)]);
  return enableBulkSelect ? {
    selectedIds: selectedIds,
    selectNone: function selectNone() {
      return clear();
    },
    tableProps: {
      onSelect: total > 0 ? selectOne : undefined,
      canSelectAll: false
    },
    toolbarProps: {
      bulkSelect: {
        toggleProps: title ? {
          children: [title]
        } : null,
        isDisabled: isDisabled,
        items: [{
          title: 'Select none',
          onClick: function onClick() {
            return clear();
          },
          props: {
            isDisabled: noneSelected
          }
        }].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(itemIdsOnPage ? [{
          title: "Select page (".concat(paginatedTotal, " items)"),
          onClick: selectPage
        }] : []), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(itemIdsInTable ? [{
          title: "".concat((0,_helpers__WEBPACK_IMPORTED_MODULE_5__.selectOrUnselect)(allSelected), " all (").concat(total, " items)"),
          onClick: selectAll
        }] : [])),
        checked: checked,
        onSelect: (selectedIds === null || selectedIds === void 0 ? void 0 : selectedIds.length) > 0 ? clear : selectAll
      }
    }
  } : {};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useBulkSelect);

/***/ }),

/***/ "./src/PresentationalComponents/Inventory/Hooks/useSelectionManager/index.js":
/*!***********************************************************************************!*\
  !*** ./src/PresentationalComponents/Inventory/Hooks/useSelectionManager/index.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _useSelectionManager__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _useSelectionManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useSelectionManager */ "./src/PresentationalComponents/Inventory/Hooks/useSelectionManager/useSelectionManager.js");


/***/ }),

/***/ "./src/PresentationalComponents/Inventory/Hooks/useSelectionManager/reducer.js":
/*!*************************************************************************************!*\
  !*** ./src/PresentationalComponents/Inventory/Hooks/useSelectionManager/reducer.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/uniq */ "./node_modules/lodash/uniq.js");
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_4__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




var selectionGroup = function selectionGroup(action) {
  return action.group || 'default';
};

var init = function init(withGroups) {
  return function (preselected) {
    return withGroups ? preselected || {} : {
      "default": preselected || []
    };
  };
};

var cleanEmpty = function cleanEmpty(state) {
  var newState = state;
  Object.entries(state).forEach(function (_ref) {
    var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (value === undefined) {
      delete newState[key];
    }
  });
  return newState;
};

var set = function set() {
  var _action$items;

  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var group = selectionGroup(action);
  return cleanEmpty(_objectSpread(_objectSpread({}, state), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, group, ((_action$items = action.items) === null || _action$items === void 0 ? void 0 : _action$items.length) > 0 || lodash_isObject__WEBPACK_IMPORTED_MODULE_3___default()(action.items) ? action.items : undefined)));
};

var select = function select() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var group = selectionGroup(action);
  return cleanEmpty(_objectSpread(_objectSpread({}, state), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, group, action.reset ? action === null || action === void 0 ? void 0 : action.items : lodash_uniq__WEBPACK_IMPORTED_MODULE_4___default()([action === null || action === void 0 ? void 0 : action.item].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state[group] || []))))));
};

var deselect = function deselect() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var group = selectionGroup(action);
  var items = (state[group] || []).filter(function (selectedItem) {
    return !action.item.includes(selectedItem);
  });
  return cleanEmpty(_objectSpread(_objectSpread({}, state), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, group, items.length === 0 ? undefined : items)));
};

var toggle = function toggle(state, action) {
  var group = selectionGroup(action);
  return (state[group] || []).includes(action.item) ? deselect(state, action) : select(state, action);
};

var reset = function reset(state, action) {
  return init(Object.prototype.hasOwnProperty.call(!state, 'default'))(action === null || action === void 0 ? void 0 : action.preselected);
};

var clear = function clear(state) {
  return init(Object.prototype.hasOwnProperty.call(!state, 'default'))();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (state, action) {
  return {
    set: set,
    select: select,
    deselect: deselect,
    toggle: toggle,
    reset: reset,
    clear: clear
  }[action.type](state, action);
});

/***/ }),

/***/ "./src/PresentationalComponents/Inventory/Hooks/useSelectionManager/useSelectionManager.js":
/*!*************************************************************************************************!*\
  !*** ./src/PresentationalComponents/Inventory/Hooks/useSelectionManager/useSelectionManager.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./src/PresentationalComponents/Inventory/Hooks/useSelectionManager/reducer.js");



/**
 * Provides a generic API to manage selection stats of one (default) or multiple groups of selections.
 *
 * @param {Array} preselected Array of items initially selected
 * @param {Object} [options] function to call when a selection is made
 */

var useSelectionManager = function useSelectionManager(preselected) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$withGroups = options.withGroups,
      withGroups = _options$withGroups === void 0 ? false : _options$withGroups;

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_2__["default"], preselected, (0,_reducer__WEBPACK_IMPORTED_MODULE_2__.init)(withGroups)),
      _useReducer2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useReducer, 2),
      selection = _useReducer2[0],
      dispatch = _useReducer2[1];

  var set = function set(items, group) {
    return dispatch({
      type: 'set',
      group: group,
      items: items
    });
  };

  var select = function select(item, group) {
    var useSet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return useSet ? set(item, group) : dispatch({
      type: 'select',
      group: group,
      item: item
    });
  };

  var deselect = function deselect(item, group) {
    var useSet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return useSet ? set(item, group) : dispatch({
      type: 'deselect',
      group: group,
      item: item
    });
  };

  var toggle = function toggle(item, group) {
    return dispatch({
      type: 'toggle',
      group: group,
      item: item
    });
  };

  var reset = function reset() {
    return dispatch({
      type: 'reset',
      preselected: preselected
    });
  };

  var clear = function clear() {
    return dispatch({
      type: 'clear'
    });
  };

  return {
    set: set,
    select: select,
    deselect: deselect,
    toggle: toggle,
    reset: reset,
    clear: clear,
    selection: withGroups ? selection : selection["default"]
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSelectionManager);

/***/ }),

/***/ "./src/PresentationalComponents/Inventory/Inventory.js":
/*!*************************************************************!*\
  !*** ./src/PresentationalComponents/Inventory/Inventory.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Inventory_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_Inventory.scss */ "./src/PresentationalComponents/Inventory/_Inventory.scss");
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../AppConstants */ "./src/AppConstants.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @patternfly/react-table/dist/esm */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/TableTypes.js");
/* harmony import */ var _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @patternfly/react-table/dist/esm */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/utils/decorators/sortable.js");
/* harmony import */ var _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @patternfly/react-table/dist/esm */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/utils/decorators/wrappable.js");
/* harmony import */ var _Common_Tables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Common/Tables */ "./src/PresentationalComponents/Common/Tables.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers */ "./src/PresentationalComponents/Inventory/helpers.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _PresentationalComponents_Modals_DisableRule__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../PresentationalComponents/Modals/DisableRule */ "./src/PresentationalComponents/Modals/DisableRule.js");
/* harmony import */ var _Utilities_Api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Utilities/Api */ "./src/Utilities/Api.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Inventory__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Inventory */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Inventory/InventoryTable.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _redhat_cloud_services_frontend_components_remediations_RemediationButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-remediations/RemediationButton */ "./node_modules/@redhat-cloud-services/frontend-components-remediations/esm/RemediationButton/index.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/ */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Store_AppReducer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../Store/AppReducer */ "./src/Store/AppReducer.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../Store */ "./src/Store/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _Common_DownloadHelper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../Common/DownloadHelper */ "./src/PresentationalComponents/Common/DownloadHelper.js");
/* harmony import */ var _Hooks_useBulkSelect__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Hooks/useBulkSelect */ "./src/PresentationalComponents/Inventory/Hooks/useBulkSelect/index.js");
/* harmony import */ var _scalprum_react_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @scalprum/react-core */ "webpack/sharing/consume/default/@scalprum/react-core/@scalprum/react-core?441a");
/* harmony import */ var _scalprum_react_core__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_scalprum_react_core__WEBPACK_IMPORTED_MODULE_23__);







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


























var Inventory = function Inventory(_ref) {
  var _entities$rows, _ref12;

  var tableProps = _ref.tableProps,
      rule = _ref.rule,
      afterDisableFn = _ref.afterDisableFn,
      pathway = _ref.pathway,
      selectedTags = _ref.selectedTags,
      workloads = _ref.workloads,
      SID = _ref.SID,
      permsExport = _ref.permsExport,
      exportTable = _ref.exportTable,
      showTags = _ref.showTags;
  var store = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useStore)();
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_24__["default"])();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)({
    limit: 20,
    offset: 0,
    sort: '-last_seen',
    name: ''
  }),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      filters = _useState2[0],
      setFilters = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
      fullFilters = _useState4[0],
      setFullFilters = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(0),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState5, 2),
      total = _useState6[0],
      setTotal = _useState6[1];

  var entities = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(function (_ref2) {
    var entities = _ref2.entities;
    return entities || {};
  });

  var addNotification = function addNotification(data) {
    return dispatch((0,_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_18__.addNotification)(data));
  };

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState7, 2),
      disableRuleModalOpen = _useState8[0],
      setDisableRuleModalOpen = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState9, 2),
      curPageIds = _useState10[0],
      setCurPageIds = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)({}),
      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState11, 2),
      pathwayRulesList = _useState12[0],
      setPathwayRulesList = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)({}),
      _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState13, 2),
      pathwayReportList = _useState14[0],
      setPathwayReportList = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(),
      _useState16 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState15, 2),
      isLoading = _useState16[0],
      setIsLoading = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      _useState18 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState17, 2),
      hasPathwayDetails = _useState18[0],
      setHasPathwayDetails = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(true),
      _useState20 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState19, 2),
      isRemediationButtonDisabled = _useState20[0],
      setIsRemediationButtonDisabled = _useState20[1]; //This value comes in from the backend as 0, or 1. To be consistent it is set to -1


  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(-1),
      _useState22 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState21, 2),
      rulesPlaybookCount = _useState22[0],
      setRulesPlaybookCount = _useState22[1];

  var _useLoadModule = (0,_scalprum_react_core__WEBPACK_IMPORTED_MODULE_23__.useLoadModule)({
    appName: 'inventory',
    scope: 'inventory',
    module: './OsFilterHelpers'
  }),
      _useLoadModule2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useLoadModule, 1),
      _useLoadModule2$ = _useLoadModule2[0];

  _useLoadModule2$ = _useLoadModule2$ === void 0 ? {} : _useLoadModule2$;
  var toGroupSelectionValue = _useLoadModule2$.toGroupSelectionValue,
      buildOSFilterConfig = _useLoadModule2$.buildOSFilterConfig;
  var operatingSystems = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(function (_ref3) {
    var entities = _ref3.entities;
    return (entities === null || entities === void 0 ? void 0 : entities.operatingSystems) || [];
  });

  var handleRefresh = function handleRefresh(options) {
    /* Rec table doesn't use the same sorting params as sys table, switching between the two results in the rec table blowing up cuz its trying to
    read the endpoint with incorrect sorting params, if we hold of on updating the sysable url params when using the this component in pathways, it
    solves this issue for the time being*/
    var name = options.name,
        display_name = options.display_name;

    var refreshedFilters = _objectSpread(_objectSpread(_objectSpread({}, options), name && {
      name: name
    }), display_name && {
      display_name: display_name
    });

    !pathway && (0,_Common_Tables__WEBPACK_IMPORTED_MODULE_9__.urlBuilder)(refreshedFilters, selectedTags);
  };

  var fetchSystems = (0,_helpers__WEBPACK_IMPORTED_MODULE_11__.getEntities)(handleRefresh, pathway, setCurPageIds, setTotal, selectedIds, setFullFilters, fullFilters, rule);

  var grabPageIds = function grabPageIds() {
    return curPageIds || [];
  };

  var _useBulkSelect = (0,_Hooks_useBulkSelect__WEBPACK_IMPORTED_MODULE_22__["default"])({
    total: total,
    onSelect: function onSelect() {},
    itemIdsInTable: (0,_helpers__WEBPACK_IMPORTED_MODULE_11__.allCurrentSystemIds)(fullFilters, total, rule, setIsLoading),
    itemIdsOnPage: grabPageIds,
    identitfier: 'system_uuid',
    isLoading: isLoading
  }),
      bulkSelectTableProps = _useBulkSelect.tableProps,
      toolbarProps = _useBulkSelect.toolbarProps,
      selectedIds = _useBulkSelect.selectedIds,
      selectNone = _useBulkSelect.selectNone; // Ensures rows are marked as selected, runs the check on remediation Status


  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    dispatch({
      type: 'SELECT_ENTITIES',
      payload: {
        selected: selectedIds
      }
    });
    checkRemediationButtonStatus(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIds]);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    if (pathway) {
      pathwayCheck();
    } else {
      rulesCheck();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);

  var rulesCheck = /*#__PURE__*/function () {
    var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee() {
      var _yield$Get, associatedRuleDetails;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(rulesPlaybookCount < 0)) {
                _context.next = 14;
                break;
              }

              _context.next = 3;
              return (0,_Utilities_Api__WEBPACK_IMPORTED_MODULE_14__.Get)("".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_7__.RULES_FETCH_URL).concat(encodeURI(rule.rule_id), "/"), {}, {
                name: filters.name
              });

            case 3:
              _context.t1 = _yield$Get = _context.sent;
              _context.t0 = _context.t1 === null;

              if (_context.t0) {
                _context.next = 7;
                break;
              }

              _context.t0 = _yield$Get === void 0;

            case 7:
              if (!_context.t0) {
                _context.next = 11;
                break;
              }

              _context.t2 = void 0;
              _context.next = 12;
              break;

            case 11:
              _context.t2 = _yield$Get.data.playbook_count;

            case 12:
              associatedRuleDetails = _context.t2;
              setRulesPlaybookCount(associatedRuleDetails);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function rulesCheck() {
      return _ref4.apply(this, arguments);
    };
  }();

  var pathwayCheck = /*#__PURE__*/function () {
    var _ref5 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee2() {
      var _yield$Get2, _yield$Get3, pathwayRules, pathwayReport;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (hasPathwayDetails) {
                _context2.next = 29;
                break;
              }

              if (!pathway) {
                _context2.next = 29;
                break;
              }

              _context2.next = 4;
              return (0,_Utilities_Api__WEBPACK_IMPORTED_MODULE_14__.Get)("".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_7__.BASE_URL, "/pathway/").concat(encodeURI(pathway.slug), "/rules/"), {}, {});

            case 4:
              _context2.t1 = _yield$Get2 = _context2.sent;
              _context2.t0 = _context2.t1 === null;

              if (_context2.t0) {
                _context2.next = 8;
                break;
              }

              _context2.t0 = _yield$Get2 === void 0;

            case 8:
              if (!_context2.t0) {
                _context2.next = 12;
                break;
              }

              _context2.t2 = void 0;
              _context2.next = 13;
              break;

            case 12:
              _context2.t2 = _yield$Get2.data.data;

            case 13:
              pathwayRules = _context2.t2;
              _context2.next = 16;
              return (0,_Utilities_Api__WEBPACK_IMPORTED_MODULE_14__.Get)("".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_7__.BASE_URL, "/pathway/").concat(encodeURI(pathway.slug), "/reports/"), {}, {});

            case 16:
              _context2.t4 = _yield$Get3 = _context2.sent;
              _context2.t3 = _context2.t4 === null;

              if (_context2.t3) {
                _context2.next = 20;
                break;
              }

              _context2.t3 = _yield$Get3 === void 0;

            case 20:
              if (!_context2.t3) {
                _context2.next = 24;
                break;
              }

              _context2.t5 = void 0;
              _context2.next = 25;
              break;

            case 24:
              _context2.t5 = _yield$Get3.data.rules;

            case 25:
              pathwayReport = _context2.t5;
              setHasPathwayDetails(true);
              setPathwayReportList(pathwayReport);
              setPathwayRulesList(pathwayRules);

            case 29:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function pathwayCheck() {
      return _ref5.apply(this, arguments);
    };
  }();

  var checkRemediationButtonStatus = function checkRemediationButtonStatus() {
    var playbookFound = false;
    var ruleKeys = Object.keys(pathwayReportList);

    if ((selectedIds === null || selectedIds === void 0 ? void 0 : selectedIds.length) <= 0 || selectedIds === undefined) {
      setIsRemediationButtonDisabled(true);
    } else if (pathway) {
      var _loop = function _loop(i) {
        var system = selectedIds[i];

        if (playbookFound) {
          return "break";
        }

        ruleKeys.forEach(function (rule) {
          //Grab the rule assosciated with that system
          if (pathwayReportList[rule].includes(system)) {
            var assosciatedRule = pathwayReportList[rule]; //find that associated rule in the pathwayRules endpoint, check for playbook

            var item = pathwayRulesList.find(function (report) {
              return report.rule_id = assosciatedRule;
            });

            if (item.resolution_set[0].has_playbook) {
              playbookFound = true;
              return setIsRemediationButtonDisabled(false);
            }
          }
        });
      };

      for (var i = 0; i < (selectedIds === null || selectedIds === void 0 ? void 0 : selectedIds.length); i++) {
        var _ret = _loop(i);

        if (_ret === "break") break;
      }
    } else {
      if (rulesPlaybookCount > 0 && (selectedIds === null || selectedIds === void 0 ? void 0 : selectedIds.length) > 0) {
        setIsRemediationButtonDisabled(false);
      }
    }
  };

  var remediationDataProvider = /*#__PURE__*/function () {
    var _ref6 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee3() {
      var _yield$Get4, _yield$Get5, pathways, systems, issues;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!pathway) {
                _context3.next = 30;
                break;
              }

              _context3.next = 3;
              return (0,_Utilities_Api__WEBPACK_IMPORTED_MODULE_14__.Get)("".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_7__.BASE_URL, "/pathway/").concat(encodeURI(pathway.slug), "/rules/"), {}, {});

            case 3:
              _context3.t1 = _yield$Get4 = _context3.sent;
              _context3.t0 = _context3.t1 === null;

              if (_context3.t0) {
                _context3.next = 7;
                break;
              }

              _context3.t0 = _yield$Get4 === void 0;

            case 7:
              if (!_context3.t0) {
                _context3.next = 11;
                break;
              }

              _context3.t2 = void 0;
              _context3.next = 12;
              break;

            case 11:
              _context3.t2 = _yield$Get4.data.data;

            case 12:
              pathways = _context3.t2;
              _context3.next = 15;
              return (0,_Utilities_Api__WEBPACK_IMPORTED_MODULE_14__.Get)("".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_7__.BASE_URL, "/pathway/").concat(encodeURI(pathway.slug), "/reports/"), {}, {});

            case 15:
              _context3.t4 = _yield$Get5 = _context3.sent;
              _context3.t3 = _context3.t4 === null;

              if (_context3.t3) {
                _context3.next = 19;
                break;
              }

              _context3.t3 = _yield$Get5 === void 0;

            case 19:
              if (!_context3.t3) {
                _context3.next = 23;
                break;
              }

              _context3.t5 = void 0;
              _context3.next = 24;
              break;

            case 23:
              _context3.t5 = _yield$Get5.data.rules;

            case 24:
              systems = _context3.t5;
              issues = [];
              pathways.forEach(function (rec) {
                var filteredSystems = [];
                systems[rec.rule_id].forEach(function (system) {
                  if (selectedIds.includes(system)) {
                    filteredSystems.push(system);
                  }
                });

                if (filteredSystems.length) {
                  issues.push({
                    id: "advisor:".concat(rec.rule_id),
                    description: rec.description,
                    systems: filteredSystems
                  });
                }
              });
              return _context3.abrupt("return", {
                issues: issues
              });

            case 30:
              return _context3.abrupt("return", {
                issues: [{
                  id: "advisor:".concat(rule.rule_id),
                  description: rule.description
                }],
                systems: selectedIds
              });

            case 31:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function remediationDataProvider() {
      return _ref6.apply(this, arguments);
    };
  }();

  var _onRemediationCreated = function onRemediationCreated(result) {
    selectNone();

    try {
      result.remediation && addNotification(result.getNotification());
    } catch (error) {
      addNotification({
        variant: 'danger',
        dismissable: true,
        title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_17__["default"].error),
        description: "".concat(error)
      });
    }
  };

  var handleModalToggle = function handleModalToggle(disableRuleModalOpen) {
    setDisableRuleModalOpen(disableRuleModalOpen);
  };

  var createColumns = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(function (defaultColumns) {
    var lastSeenColumn = defaultColumns.filter(function (_ref7) {
      var key = _ref7.key;
      return key === 'updated';
    });
    var displayName = defaultColumns.filter(function (_ref8) {
      var key = _ref8.key;
      return key === 'display_name';
    });
    var systemProfile = defaultColumns.filter(function (_ref9) {
      var key = _ref9.key;
      return key === 'system_profile';
    });
    var tags = defaultColumns.filter(function (_ref10) {
      var key = _ref10.key;
      return key === 'tags';
    });
    displayName = _objectSpread(_objectSpread({}, displayName[0]), {}, {
      transforms: [_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_25__.sortable, _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_26__.wrappable],
      props: {
        isStatic: true
      }
    }, rule ? {
      renderFunc: function renderFunc(name, id) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Link, {
          className: "pf-u-font-size-lg",
          to: "/recommendations/".concat(rule.rule_id, "/").concat(id, "?activeRule=true")
        }, name);
      }
    } : {});
    lastSeenColumn = _objectSpread(_objectSpread({}, lastSeenColumn[0]), {}, {
      transforms: [_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_25__.sortable, _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_26__.wrappable],
      props: {
        width: 20
      }
    });
    systemProfile = _objectSpread(_objectSpread({}, systemProfile[0]), {}, {
      transforms: [_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_26__.wrappable],
      props: {
        isStatic: true
      }
    });
    tags = _objectSpread({}, tags[0]);
    var columnList = [displayName, tags, systemProfile, lastSeenColumn]; // Add column for impacted_date which is relevant for the rec system details table, but not pathways system table

    if (!pathway) {
      var impacted_date = {
        key: 'impacted_date',
        title: 'First Impacted',
        sortKey: 'impacted_date',
        transforms: [_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_25__.sortable, _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_26__.wrappable],
        props: {
          width: 15
        },
        renderFunc: lastSeenColumn.renderFunc
      };
      columnList.push(impacted_date);
      lastSeenColumn.props.width = 15;
    }

    return columnList;
  }, [pathway, rule]);

  var removeFilterParam = function removeFilterParam(param) {
    var filter = _objectSpread(_objectSpread({}, filters), {}, {
      offset: 0
    });

    delete filter[param];
    setFilters(filter);
  };

  var addFilterParam = function addFilterParam(param, values) {
    var passValue = param === _AppConstants__WEBPACK_IMPORTED_MODULE_7__.SYSTEM_FILTER_CATEGORIES.rhel_version.urlParam ? Object.values(values || {}).flatMap(function (majorOsVersion) {
      return Object.keys(majorOsVersion);
    }) : values;
    passValue.length > 0 ? setFilters(_objectSpread(_objectSpread({}, filters), {}, {
      offset: 0
    }, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, param, passValue))) : removeFilterParam(param);
  };

  var filterConfigItems = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(buildOSFilterConfig ? [buildOSFilterConfig({
    label: _AppConstants__WEBPACK_IMPORTED_MODULE_7__.SYSTEM_FILTER_CATEGORIES.rhel_version.title.toLowerCase(),
    type: _AppConstants__WEBPACK_IMPORTED_MODULE_7__.SYSTEM_FILTER_CATEGORIES.rhel_version.type,
    id: _AppConstants__WEBPACK_IMPORTED_MODULE_7__.SYSTEM_FILTER_CATEGORIES.rhel_version.urlParam,
    value: toGroupSelectionValue(filters.rhel_version || []),
    onChange: function onChange(_e, value) {
      return addFilterParam(_AppConstants__WEBPACK_IMPORTED_MODULE_7__.SYSTEM_FILTER_CATEGORIES.rhel_version.urlParam, value);
    }
  }, operatingSystems)] : []);

  var buildFilterChips = function buildFilterChips() {
    var localFilters = _objectSpread({}, filters);

    delete localFilters.sort;
    delete localFilters.offset;
    delete localFilters.limit;
    return (0,_Common_Tables__WEBPACK_IMPORTED_MODULE_9__.pruneFilters)(localFilters, _AppConstants__WEBPACK_IMPORTED_MODULE_7__.SYSTEM_FILTER_CATEGORIES);
  };

  var activeFiltersConfig = {
    deleteTitle: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_17__["default"].resetFilters),
    filters: buildFilterChips(),
    onDelete: function onDelete(_e, itemsToRemove, isAll) {
      if (isAll) {
        setFilters({
          sort: filters.sort,
          limit: filters.limit,
          offset: filters.offset
        });
      } else {
        itemsToRemove.map(function (item) {
          var newFilter = (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, item.urlParam, Array.isArray(filters[item.urlParam]) ? filters[item.urlParam].filter(function (value) {
            return String(value) !== String(item.chips[0].value);
          }) : '');

          newFilter[item.urlParam].length > 0 ? setFilters(_objectSpread(_objectSpread({}, filters), newFilter)) : removeFilterParam(item.urlParam);
        });
      }
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null, disableRuleModalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_PresentationalComponents_Modals_DisableRule__WEBPACK_IMPORTED_MODULE_13__["default"], {
    handleModalToggle: handleModalToggle,
    isModalOpen: disableRuleModalOpen,
    rule: rule,
    afterFn: afterDisableFn,
    hosts: selectedIds
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_redhat_cloud_services_frontend_components_Inventory__WEBPACK_IMPORTED_MODULE_27__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: "tablesContainer",
    hasCheckbox: true,
    initialLoading: true,
    autoRefresh: true,
    hideFilters: {
      all: true,
      name: false,
      tags: !showTags
    },
    filterConfig: {
      items: filterConfigItems
    },
    activeFiltersConfig: activeFiltersConfig,
    columns: function columns(defaultColumns) {
      return createColumns(defaultColumns);
    },
    tableProps: _objectSpread(_objectSpread({
      variant: _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_28__.TableVariant.compact
    }, tableProps), bulkSelectTableProps),
    customFilters: {
      advisorFilters: filters,
      selectedTags: selectedTags,
      workloads: workloads,
      SID: SID
    },
    showTags: showTags,
    getEntities: fetchSystems,
    dedicatedAction: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_redhat_cloud_services_frontend_components_remediations_RemediationButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
      key: "remediation-button",
      isDisabled: isRemediationButtonDisabled,
      dataProvider: remediationDataProvider,
      onRemediationCreated: function onRemediationCreated(result) {
        return _onRemediationCreated(result);
      }
    }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_17__["default"].remediate)),
    actionsConfig: {
      actions: ['', {
        label: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_17__["default"].disableRuleForSystems),
        props: {
          isDisabled: (selectedIds || []).length === 0
        },
        onClick: function onClick() {
          return handleModalToggle(true);
        }
      }]
    }
  }, toolbarProps, {
    fallback: _scalprum_react_core__WEBPACK_IMPORTED_MODULE_23__.Spinner,
    onLoad: function onLoad(_ref11) {
      var mergeWithEntities = _ref11.mergeWithEntities,
          INVENTORY_ACTION_TYPES = _ref11.INVENTORY_ACTION_TYPES,
          mergeWithDetail = _ref11.mergeWithDetail;
      store.replaceReducer((0,_Store__WEBPACK_IMPORTED_MODULE_20__.updateReducers)(_objectSpread(_objectSpread({}, mergeWithEntities((0,_Store_AppReducer__WEBPACK_IMPORTED_MODULE_19__.systemReducer)([], INVENTORY_ACTION_TYPES), {
        page: Number(filters.offset / filters.limit + 1 || 1),
        perPage: Number(filters.limit || 20)
      })), mergeWithDetail())));
    },
    exportConfig: permsExport && (_ref12 = {
      label: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_17__["default"].exportCsv)
    }, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref12, "label", intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_17__["default"].exportJson)), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref12, "onSelect", function onSelect(_e, fileType) {
      return (0,_Common_DownloadHelper__WEBPACK_IMPORTED_MODULE_21__["default"])(exportTable, fileType, _objectSpread({
        rule_id: rule.rule_id
      }, filters), selectedTags, workloads, SID, dispatch);
    }), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref12, "isDisabled", !permsExport || (entities === null || entities === void 0 ? void 0 : (_entities$rows = entities.rows) === null || _entities$rows === void 0 ? void 0 : _entities$rows.length) === 0), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref12, "tooltipText", permsExport ? intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_17__["default"].exportData) : intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_17__["default"].permsAction)), _ref12)
  })));
};

Inventory.propTypes = {
  tableProps: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().any),
  rule: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().object),
  afterDisableFn: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().func),
  pathway: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().object),
  selectedTags: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().any),
  workloads: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().any),
  SID: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().any),
  permsExport: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().bool),
  exportTable: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().string),
  showTags: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inventory);

/***/ }),

/***/ "./src/PresentationalComponents/Inventory/helpers.js":
/*!***********************************************************!*\
  !*** ./src/PresentationalComponents/Inventory/helpers.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allCurrentSystemIds": () => (/* binding */ allCurrentSystemIds),
/* harmony export */   "getEntities": () => (/* binding */ getEntities),
/* harmony export */   "paginatedRequestHelper": () => (/* binding */ paginatedRequestHelper)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utilities_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Utilities/Api */ "./src/Utilities/Api.js");
/* harmony import */ var _Common_Tables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Common/Tables */ "./src/PresentationalComponents/Common/Tables.js");
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../AppConstants */ "./src/AppConstants.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helper */ "./src/PresentationalComponents/helper.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





/*This functions purpose is to grab the currently set filters, and return all associated systems for it.*/

var paginatedRequestHelper = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(_ref) {
    var _yield$Get, _yield$Get2;

    var per_page, page, advisorFilters, filters, workloads, SID, pathway, rule, selectedTags, sort, options;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            per_page = _ref.per_page, page = _ref.page, advisorFilters = _ref.advisorFilters, filters = _ref.filters, workloads = _ref.workloads, SID = _ref.SID, pathway = _ref.pathway, rule = _ref.rule, selectedTags = _ref.selectedTags, sort = _ref.sort;
            options = (0,_helper__WEBPACK_IMPORTED_MODULE_7__.createOptions)(advisorFilters, page, per_page, sort, pathway, filters, selectedTags, workloads, SID);

            if (!pathway) {
              _context.next = 17;
              break;
            }

            _context.next = 5;
            return (0,_Utilities_Api__WEBPACK_IMPORTED_MODULE_4__.Get)("".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.SYSTEMS_FETCH_URL), {}, _objectSpread(_objectSpread({}, options), {}, {
              pathway: pathway.slug
            }));

          case 5:
            _context.t2 = _yield$Get = _context.sent;
            _context.t1 = _context.t2 === null;

            if (_context.t1) {
              _context.next = 9;
              break;
            }

            _context.t1 = _yield$Get === void 0;

          case 9:
            if (!_context.t1) {
              _context.next = 13;
              break;
            }

            _context.t3 = void 0;
            _context.next = 14;
            break;

          case 13:
            _context.t3 = _yield$Get.data;

          case 14:
            _context.t0 = _context.t3;
            _context.next = 29;
            break;

          case 17:
            _context.next = 19;
            return (0,_Utilities_Api__WEBPACK_IMPORTED_MODULE_4__.Get)("".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.RULES_FETCH_URL).concat(encodeURI(rule.rule_id), "/systems_detail/"), {}, options);

          case 19:
            _context.t5 = _yield$Get2 = _context.sent;
            _context.t4 = _context.t5 === null;

            if (_context.t4) {
              _context.next = 23;
              break;
            }

            _context.t4 = _yield$Get2 === void 0;

          case 23:
            if (!_context.t4) {
              _context.next = 27;
              break;
            }

            _context.t6 = void 0;
            _context.next = 28;
            break;

          case 27:
            _context.t6 = _yield$Get2.data;

          case 28:
            _context.t0 = _context.t6;

          case 29:
            return _context.abrupt("return", _context.t0);

          case 30:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function paginatedRequestHelper(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var getEntities = function getEntities(handleRefresh, pathway, setCurPageIds, setTotal, selectedIds, setFullFilters, fullFilters, rule) {
  return /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(_items, config, showTags, defaultGetEntities) {
      var per_page, page, orderBy, orderDirection, advisorFilters, filters, workloads, SID, selectedTags, sort, options, allDetails, fetchedSystems, results;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              per_page = config.per_page, page = config.page, orderBy = config.orderBy, orderDirection = config.orderDirection, advisorFilters = config.advisorFilters, filters = config.filters, workloads = config.workloads, SID = config.SID, selectedTags = config.selectedTags; //operating_system is currently not supported, but will be down the line.

              sort = orderBy === 'operating_system' ? 'rhel_version' : "".concat(orderDirection === 'ASC' ? '' : '-').concat(orderBy === 'updated' ? 'last_seen' : orderBy);
              options = (0,_helper__WEBPACK_IMPORTED_MODULE_7__.createOptions)(advisorFilters, page, per_page, sort, pathway, filters, selectedTags, workloads, SID);
              handleRefresh(options);
              allDetails = _objectSpread(_objectSpread({}, config), {}, {
                pathway: pathway,
                handleRefresh: handleRefresh,
                rule: rule,
                sort: sort
              });
              setFullFilters(allDetails);
              _context2.next = 8;
              return paginatedRequestHelper(allDetails);

            case 8:
              fetchedSystems = _context2.sent;
              _context2.next = 11;
              return defaultGetEntities(fetchedSystems.data.map(function (system) {
                return system.system_uuid;
              }), {
                per_page: per_page,
                hasItems: true,
                fields: {
                  system_profile: ['operating_system']
                }
              }, showTags);

            case 11:
              results = _context2.sent;
              setCurPageIds(fetchedSystems.data.map(function (system) {
                return system.system_uuid;
              }));
              setTotal(fetchedSystems.meta.count);
              return _context2.abrupt("return", Promise.resolve({
                results: (0,_Common_Tables__WEBPACK_IMPORTED_MODULE_5__.mergeArraysByDiffKeys)(fetchedSystems.data, results.results).map(function (item) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    selected: selectedIds === null || selectedIds === void 0 ? void 0 : selectedIds.includes(item.id)
                  });
                }),
                total: fetchedSystems.meta.count
              }));

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2, _x3, _x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }();
};
/*Takes in the current filters, and keeps sending get request until there are no pages left*/

var fetchBatched = function fetchBatched(fetchFunction, total, filter) {
  var batchSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
  var rule = arguments.length > 4 ? arguments[4] : undefined;
  var pages = Math.ceil(total / batchSize) || 1;
  return Promise.all((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(new Array(pages)).map(function (_, pageIdx) {
    return fetchFunction(_objectSpread(_objectSpread({}, filter), {}, {
      page: pageIdx + 1,
      per_page: batchSize,
      rule: rule
    }));
  }));
};
/*Grabs all systemIds and maniupaltes the data into one large array of systems*/


var allCurrentSystemIds = function allCurrentSystemIds(fullFilters, total, rule, setIsLoading) {
  return /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3() {
    var results, merged;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            setIsLoading(true);
            _context3.next = 3;
            return fetchBatched(paginatedRequestHelper, total, fullFilters, 100, rule);

          case 3:
            _context3.next = 5;
            return _context3.sent.map(function (item) {
              return item.data;
            });

          case 5:
            results = _context3.sent;
            merged = [].concat.apply([], results).map(function (item) {
              return item.system_uuid;
            });
            setIsLoading(false);
            return _context3.abrupt("return", merged);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
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

/***/ "./src/PresentationalComponents/Inventory/_Inventory.scss":
/*!****************************************************************!*\
  !*** ./src/PresentationalComponents/Inventory/_Inventory.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/SmartComponents/Recs/Details.scss":
/*!***********************************************!*\
  !*** ./src/SmartComponents/Recs/Details.scss ***!
  \***********************************************/
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

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/src_PresentationalComponents_Breadcrumbs_Breadcrumbs_js-src_PresentationalComponents_Inventor-7fe9b6.2230791cc62c7cf97c9e040d3b8cf9f5.js.map