(self["webpackChunkadvisor_frontend"] = self["webpackChunkadvisor_frontend"] || []).push([["src_PresentationalComponents_RulesTable_RulesTable_js"],{

/***/ "./src/PresentationalComponents/Modals/ViewHostAcks.js":
/*!*************************************************************!*\
  !*** ./src/PresentationalComponents/Modals/ViewHostAcks.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @patternfly/react-table/dist/esm */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Table.js");
/* harmony import */ var _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @patternfly/react-table/dist/esm */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Body.js");
/* harmony import */ var _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @patternfly/react-table/dist/esm */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Header.js");
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AppConstants */ "./src/AppConstants.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Button/Button */ "./node_modules/@patternfly/react-core/dist/esm/components/Button/Button.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_DateFormat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/DateFormat */ "./node_modules/@redhat-cloud-services/frontend-components/esm/DateFormat/DateFormat.js");
/* harmony import */ var _Utilities_Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Utilities/Api */ "./src/Utilities/Api.js");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Modal/Modal */ "./node_modules/@patternfly/react-core/dist/esm/components/Modal/Modal.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_outlined_bell_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/outlined-bell-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/outlined-bell-icon.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/ */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Services_Acks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Services/Acks */ "./src/Services/Acks.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");





















var ViewHostAcks = function ViewHostAcks(_ref) {
  var handleModalToggle = _ref.handleModalToggle,
      isModalOpen = _ref.isModalOpen,
      rule = _ref.rule,
      afterFn = _ref.afterFn;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_11__["default"])();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();

  var addNotification = function addNotification(data) {
    return dispatch((0,_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_8__.addNotification)(data));
  };

  var columns = [intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].systemName), intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].justificationNote), intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].dateDisabled), ''];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      rows = _useState2[0],
      setRows = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      unclean = _useState4[0],
      setUnclean = _useState4[1];

  var _useGetHostAcksQuery = (0,_Services_Acks__WEBPACK_IMPORTED_MODULE_10__.useGetHostAcksQuery)({
    rule_id: rule.rule_id,
    limit: rule.hosts_acked_count
  }),
      _useGetHostAcksQuery$ = _useGetHostAcksQuery.data,
      hostAcks = _useGetHostAcksQuery$ === void 0 ? [] : _useGetHostAcksQuery$,
      isFetching = _useGetHostAcksQuery.isFetching,
      isLoading = _useGetHostAcksQuery.isLoading,
      refetch = _useGetHostAcksQuery.refetch;

  var deleteAck = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(host) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0,_Utilities_Api__WEBPACK_IMPORTED_MODULE_5__.DeleteApi)("".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_4__.BASE_URL, "/hostack/").concat(host.id, "/"));

            case 3:
              refetch();
              setUnclean(true);
              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              handleModalToggle(false);
              addNotification({
                variant: 'danger',
                dismissable: true,
                title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].error),
                description: "".concat(_context.t0)
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function deleteAck(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var rows = hostAcks === null || hostAcks === void 0 ? void 0 : hostAcks.map(function (item) {
      return {
        cells: [item.display_name || item.system_uuid, item.justification || intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].none), {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_redhat_cloud_services_frontend_components_DateFormat__WEBPACK_IMPORTED_MODULE_12__["default"], {
            date: new Date(item.updated_at),
            type: "onlyDate"
          })
        }, {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_13__.Button, {
            key: item.system_uuid,
            isInline: true,
            variant: "link",
            onClick: function onClick() {
              return deleteAck(item);
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_icons_dist_esm_icons_outlined_bell_icon__WEBPACK_IMPORTED_MODULE_14__["default"], {
            size: "sm"
          }), " ".concat(intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].enable)))
        }]
      };
    });

    if (!isLoading && hostAcks.length === 0) {
      afterFn();
      handleModalToggle(false);
    }

    setRows(rows); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hostAcks]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_15__.Modal, {
    width: '75%',
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_7__["default"].hostAckModalTitle),
    isOpen: isModalOpen,
    onClose: function onClose() {
      unclean && afterFn();
      handleModalToggle(false);
    }
  }, !isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_16__.Table, {
    "aria-label": "host-ack-table",
    rows: rows,
    cells: columns
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_17__.TableHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_18__.TableBody, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_16__.Table, {
    "aria-label": "host-ack-table",
    rows: [{
      cells: [{
        props: {
          colSpan: 3
        },
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_19__.List, null)
      }]
    }],
    cells: columns
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_17__.TableHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_18__.TableBody, null)));
};

ViewHostAcks.propTypes = {
  isModalOpen: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  handleModalToggle: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  rule: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  afterFn: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)
};
ViewHostAcks.defaultProps = {
  isModalOpen: false,
  handleModalToggle: function handleModalToggle() {
    return undefined;
  },
  rule: {},
  afterFn: function afterFn() {
    return undefined;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewHostAcks);

/***/ }),

/***/ "./src/PresentationalComponents/RulesTable/Components/EmptyState.js":
/*!**************************************************************************!*\
  !*** ./src/PresentationalComponents/RulesTable/Components/EmptyState.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Button/Button.js */ "./node_modules/@patternfly/react-core/dist/esm/components/Button/Button.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_check_circle_icon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/check-circle-icon.js */ "./node_modules/@patternfly/react-icons/dist/esm/icons/check-circle-icon.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _MessageState_MessageState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../MessageState/MessageState */ "./src/PresentationalComponents/MessageState/MessageState.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./src/PresentationalComponents/RulesTable/helpers.js");








var EmptyState = function EmptyState(_ref) {
  var filters = _ref.filters,
      toggleRulesDisabled = _ref.toggleRulesDisabled;
  var message = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.messageMapping)()[filters.rule_status] || (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.messageMapping)()["default"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageState_MessageState__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: _patternfly_react_icons_dist_esm_icons_check_circle_icon_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    iconClass: "ansibleCheck",
    title: message.title,
    text: message.body
  }, filters.rule_status === 'enabled' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "link",
    style: {
      paddingTop: 24
    },
    onClick: function onClick() {
      return toggleRulesDisabled('all');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "rulestable.norulehits.adddisabledbutton"
  })));
};

EmptyState.propTypes = {
  filters: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  toggleRulesDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmptyState);

/***/ }),

/***/ "./src/PresentationalComponents/RulesTable/RulesTable.js":
/*!***************************************************************!*\
  !*** ./src/PresentationalComponents/RulesTable/RulesTable.js ***!
  \***************************************************************/
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
/* harmony import */ var _RulesTable_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_RulesTable.scss */ "./src/PresentationalComponents/RulesTable/_RulesTable.scss");
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../AppConstants */ "./src/AppConstants.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Pagination/Pagination */ "./node_modules/@patternfly/react-core/dist/esm/components/Pagination/Pagination.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_core_dist_esm_layouts_Stack_index__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/layouts/Stack/index */ "./node_modules/@patternfly/react-core/dist/esm/layouts/Stack/Stack.js");
/* harmony import */ var _patternfly_react_core_dist_esm_layouts_Stack_index__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/layouts/Stack/index */ "./node_modules/@patternfly/react-core/dist/esm/layouts/Stack/StackItem.js");
/* harmony import */ var _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @patternfly/react-table/dist/esm */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Table.js");
/* harmony import */ var _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @patternfly/react-table/dist/esm */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Body.js");
/* harmony import */ var _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @patternfly/react-table/dist/esm */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/Header.js");
/* harmony import */ var _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @patternfly/react-table/dist/esm */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/TableTypes.js");
/* harmony import */ var _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @patternfly/react-table/dist/esm */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/utils/decorators/cellWidth.js");
/* harmony import */ var _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @patternfly/react-table/dist/esm */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/utils/decorators/wrappable.js");
/* harmony import */ var _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @patternfly/react-table/dist/esm */ "./node_modules/@patternfly/react-table/dist/esm/components/Table/utils/decorators/sortable.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tooltip/Tooltip */ "./node_modules/@patternfly/react-core/dist/esm/components/Tooltip/Tooltip.js");
/* harmony import */ var _Common_Tables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Common/Tables */ "./src/PresentationalComponents/Common/Tables.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_ansibeTower_icon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/ansibeTower-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/ansibeTower-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_bell_slash_icon__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/bell-slash-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/bell-slash-icon.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Button/Button */ "./node_modules/@patternfly/react-core/dist/esm/components/Button/Button.js");
/* harmony import */ var _Labels_CategoryLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Labels/CategoryLabel */ "./src/PresentationalComponents/Labels/CategoryLabel.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_DateFormat__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/DateFormat */ "./node_modules/@redhat-cloud-services/frontend-components/esm/DateFormat/DateFormat.js");
/* harmony import */ var _Utilities_Api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Utilities/Api */ "./src/Utilities/Api.js");
/* harmony import */ var _Modals_DisableRule__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Modals/DisableRule */ "./src/PresentationalComponents/Modals/DisableRule.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_ErrorState__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/ErrorState */ "./node_modules/@redhat-cloud-services/frontend-components/esm/ErrorState/ErrorState.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_InsightsLabel__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/InsightsLabel */ "./node_modules/@redhat-cloud-services/frontend-components/esm/InsightsLabel/InsightsLabel.js");
/* harmony import */ var _PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../PresentationalComponents/Loading/Loading */ "./src/PresentationalComponents/Loading/Loading.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PrimaryToolbar */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PrimaryToolbar/PrimaryToolbar.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_advisor_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-advisor-components */ "./node_modules/@redhat-cloud-services/frontend-components-advisor-components/esm/index.js");
/* harmony import */ var _Labels_RuleLabels__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Labels/RuleLabels */ "./src/PresentationalComponents/Labels/RuleLabels.js");
/* harmony import */ var _PresentationalComponents_Modals_ViewHostAcks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../PresentationalComponents/Modals/ViewHostAcks */ "./src/PresentationalComponents/Modals/ViewHostAcks.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/ */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Utilities_Debounce__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../Utilities/Debounce */ "./src/Utilities/Debounce.js");
/* harmony import */ var _Common_DownloadHelper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../Common/DownloadHelper */ "./src/PresentationalComponents/Common/DownloadHelper.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");
/* harmony import */ var _Utilities_intlHelper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../Utilities/intlHelper */ "./src/Utilities/intlHelper.js");
/* harmony import */ var _Services_Filters__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../Services/Filters */ "./src/Services/Filters.js");
/* harmony import */ var _Services_Recs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../Services/Recs */ "./src/Services/Recs.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_RBACHook__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/RBACHook */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/esm/RBACHook/RBACHook.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./helpers */ "./src/PresentationalComponents/RulesTable/helpers.js");






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }












































var RulesTable = function RulesTable(_ref) {
  var _rules$meta, _ref8;

  var isTabActive = _ref.isTabActive;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_27__["default"])();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();

  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useLocation)(),
      search = _useLocation.search;

  var permsExport = (0,_redhat_cloud_services_frontend_components_utilities_RBACHook__WEBPACK_IMPORTED_MODULE_28__.usePermissions)('advisor', _AppConstants__WEBPACK_IMPORTED_MODULE_6__.PERMS["export"]).hasAccess;
  var permsDisableRec = (0,_redhat_cloud_services_frontend_components_utilities_RBACHook__WEBPACK_IMPORTED_MODULE_28__.usePermissions)('advisor', _AppConstants__WEBPACK_IMPORTED_MODULE_6__.PERMS.disableRec).hasAccess;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([{
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].name),
    transforms: [_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_29__.sortable, (0,_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_30__.cellWidth)(40)]
  }, {
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].modified),
    transforms: [_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_29__.sortable, _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_31__.fitContent]
  }, {
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].category),
    transforms: [_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_29__.sortable, _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_31__.fitContent]
  }, {
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].totalRisk),
    transforms: [_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_29__.sortable, _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_31__.fitContent]
  }, {
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].systems),
    transforms: [_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_29__.sortable, _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_31__.fitContent]
  }, {
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].remediation),
    transforms: [_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_29__.sortable, _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_31__.fitContent]
  }]),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 1),
      cols = _useState2[0];

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
  var filters = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(function (_ref5) {
    var filters = _ref5.filters;
    return filters.recState;
  });

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
      rows = _useState4[0],
      setRows = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)({}),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
      sortBy = _useState6[0],
      setSortBy = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(true),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState7, 2),
      filterBuilding = _useState8[0],
      setFilterBuilding = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)((filters === null || filters === void 0 ? void 0 : filters.text) || ''),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState9, 2),
      searchText = _useState10[0],
      setSearchText = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState11, 2),
      disableRuleOpen = _useState12[0],
      setDisableRuleOpen = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)({}),
      _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState13, 2),
      selectedRule = _useState14[0],
      setSelectedRule = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      _useState16 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState15, 2),
      viewSystemsModalOpen = _useState16[0],
      setViewSystemsModalOpen = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)({}),
      _useState18 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState17, 2),
      viewSystemsModalRule = _useState18[0],
      setViewSystemsModalRule = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      _useState20 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState19, 2),
      isAllExpanded = _useState20[0],
      setIsAllExpanded = _useState20[1];

  var addNotification = function addNotification(data) {
    return dispatch((0,_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_18__.addNotification)(data));
  };

  var setFilters = function setFilters(filters) {
    return dispatch((0,_Services_Filters__WEBPACK_IMPORTED_MODULE_23__.updateRecFilters)(filters));
  };

  var options = {};
  (selectedTags === null || selectedTags === void 0 ? void 0 : selectedTags.length) && (options = _objectSpread(_objectSpread({}, options), {
    tags: selectedTags.join(',')
  }));
  workloads && (options = _objectSpread(_objectSpread({}, options), (0,_Common_Tables__WEBPACK_IMPORTED_MODULE_9__.workloadQueryBuilder)(workloads, SID)));

  var _useGetRecsQuery = (0,_Services_Recs__WEBPACK_IMPORTED_MODULE_24__.useGetRecsQuery)(_objectSpread(_objectSpread({}, (0,_Common_Tables__WEBPACK_IMPORTED_MODULE_9__.filterFetchBuilder)(filters)), options)),
      _useGetRecsQuery$data = _useGetRecsQuery.data,
      rules = _useGetRecsQuery$data === void 0 ? [] : _useGetRecsQuery$data,
      isFetching = _useGetRecsQuery.isFetching,
      isLoading = _useGetRecsQuery.isLoading,
      isError = _useGetRecsQuery.isError,
      refetch = _useGetRecsQuery.refetch;

  var debouncedSearchText = (0,_Utilities_Debounce__WEBPACK_IMPORTED_MODULE_19__["default"])(searchText, _AppConstants__WEBPACK_IMPORTED_MODULE_6__.DEBOUNCE_DELAY);
  var results = (rules === null || rules === void 0 ? void 0 : (_rules$meta = rules.meta) === null || _rules$meta === void 0 ? void 0 : _rules$meta.count) || 0;
  var sortIndices = {
    1: 'description',
    2: 'publish_date',
    3: 'category',
    4: 'total_risk',
    5: 'impacted_count',
    6: 'playbook_count'
  };
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    if (!filterBuilding && selectedTags !== null) {
      (0,_Common_Tables__WEBPACK_IMPORTED_MODULE_9__.urlBuilder)(filters, selectedTags);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [filters, selectedTags, workloads, SID]);

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

  var toggleRulesDisabled = function toggleRulesDisabled(rule_status) {
    setFilters(_objectSpread(_objectSpread({}, filters), {}, {
      rule_status: rule_status,
      offset: 0
    }, rule_status !== 'enabled' && {
      impacting: ['false']
    }));
  };

  var handleOnCollapse = function handleOnCollapse(_e, rowId, isOpen) {
    var collapseRows = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(rows);

    collapseRows[rowId] = _objectSpread(_objectSpread({}, collapseRows[rowId]), {}, {
      isOpen: isOpen
    });
    setRows(collapseRows);
  };

  var hideReports = /*#__PURE__*/function () {
    var _ref6 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(rowId) {
      var rule;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              rule = rows[rowId].rule;
              _context.prev = 1;

              if (!(rule.rule_status === 'enabled')) {
                _context.next = 7;
                break;
              }

              setSelectedRule(rule);
              setDisableRuleOpen(true);
              _context.next = 17;
              break;

            case 7:
              _context.prev = 7;
              _context.next = 10;
              return (0,_Utilities_Api__WEBPACK_IMPORTED_MODULE_12__.DeleteApi)("".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.BASE_URL, "/ack/").concat(rule.rule_id, "/"));

            case 10:
              addNotification({
                variant: 'success',
                timeout: true,
                dismissable: true,
                title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].recSuccessfullyEnabled)
              });
              refetch();
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](7);
              addNotification({
                variant: 'danger',
                dismissable: true,
                title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].error),
                description: "".concat(_context.t0)
              });

            case 17:
              _context.next = 22;
              break;

            case 19:
              _context.prev = 19;
              _context.t1 = _context["catch"](1);
              addNotification({
                variant: 'danger',
                dismissable: true,
                title: rule.rule_status === 'enabled' ? intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].rulesTableHideReportsErrorDisabled) : intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].rulesTableHideReportsErrorEnabled),
                description: "".concat(_context.t1)
              });

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 19], [7, 14]]);
    }));

    return function hideReports(_x) {
      return _ref6.apply(this, arguments);
    };
  }();

  var actionResolver = function actionResolver(rowData, _ref7) {
    var rowIndex = _ref7.rowIndex;
    var rule = rows[rowIndex].rule ? rows[rowIndex].rule : null;

    if (rowIndex % 2 !== 0 || !rule) {
      return null;
    }

    return rule && rule.rule_status === 'enabled' ? [{
      title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].disableRule),
      onClick: function onClick(_event, rowId) {
        return hideReports(rowId);
      }
    }] : [{
      title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].enableRule),
      onClick: function onClick(_event, rowId) {
        return hideReports(rowId);
      }
    }];
  };

  var buildFilterChips = function buildFilterChips() {
    var localFilters = _objectSpread({}, filters);

    delete localFilters.topic;
    delete localFilters.sort;
    delete localFilters.offset;
    delete localFilters.limit;
    return (0,_Common_Tables__WEBPACK_IMPORTED_MODULE_9__.pruneFilters)(localFilters, _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES);
  }; // Builds table filters from url params


  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    if (isTabActive && search && filterBuilding) {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_26__.urlFilterBuilder)(sortIndices, setSearchText, setFilters, filters);
    }

    setFilterBuilding(false); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    var _Object$entries;

    var sortIndex = (_Object$entries = Object.entries(sortIndices)) === null || _Object$entries === void 0 ? void 0 : _Object$entries.find(function (item) {
      return item[1] === filters.sort || "-".concat(item[1]) === filters.sort;
    });

    if (filters.sort !== undefined && sortIndex) {
      var sortDirection = filters.sort[0] === '-' ? 'desc' : 'asc';
      setSortBy({
        index: Number(sortIndex[0]),
        direction: sortDirection
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [filters.sort]);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    if (rules.data) {
      if (rules.data.length === 0) {
        setRows((0,_helpers__WEBPACK_IMPORTED_MODULE_26__.emptyRows)(filters, toggleRulesDisabled));
      } else {
        var _rows = rules.data.flatMap(function (value, key) {
          return [{
            isOpen: isAllExpanded,
            rule: value,
            cells: [{
              title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("span", {
                key: key
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
                key: key,
                to: "/recommendations/".concat(value.rule_id)
              }, ' ', value.description, ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_Labels_RuleLabels__WEBPACK_IMPORTED_MODULE_16__["default"], {
                rule: value,
                isCompact: true
              }))
            }, {
              title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_redhat_cloud_services_frontend_components_DateFormat__WEBPACK_IMPORTED_MODULE_32__["default"], {
                key: key,
                date: value.publish_date,
                variant: "relative"
              })
            }, {
              title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_Labels_CategoryLabel__WEBPACK_IMPORTED_MODULE_11__["default"], {
                key: key,
                labelList: [value.category],
                isCompact: true
              })
            }, {
              title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
                key: key
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_patternfly_react_core_dist_esm_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_33__.Tooltip, {
                key: key,
                position: _patternfly_react_core_dist_esm_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_33__.TooltipPosition.bottom,
                content: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].rulesDetailsTotalRiskBody, {
                  risk: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.TOTAL_RISK_LABEL_LOWER[value.total_risk] || intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].undefined),
                  strong: function strong(str) {
                    return (0,_Utilities_intlHelper__WEBPACK_IMPORTED_MODULE_22__.strong)(str);
                  }
                })
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_redhat_cloud_services_frontend_components_InsightsLabel__WEBPACK_IMPORTED_MODULE_34__["default"], {
                value: value.total_risk,
                isCompact: true
              })))
            }, {
              title: value.rule_status === 'rhdisabled' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_patternfly_react_core_dist_esm_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_33__.Tooltip, {
                content: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].byEnabling, {
                  systems: value.impacted_systems_count
                })
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("span", null, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].nA))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
                key: key
              }, "".concat(value.impacted_systems_count.toLocaleString()))
            }, {
              title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("div", {
                className: "ins-c-center-text ",
                key: key
              }, value.playbook_count ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_patternfly_react_icons_dist_esm_icons_ansibeTower_icon__WEBPACK_IMPORTED_MODULE_35__["default"], {
                size: "sm"
              }), ' ', intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].playbook)) : intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].manual))
            }]
          }, {
            parent: key * 2,
            fullWidth: true,
            cells: [{
              title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement("section", {
                className: "pf-c-page__main-section pf-m-light"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_patternfly_react_core_dist_esm_layouts_Stack_index__WEBPACK_IMPORTED_MODULE_36__.Stack, {
                hasGutter: true
              }, value.hosts_acked_count ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_patternfly_react_core_dist_esm_layouts_Stack_index__WEBPACK_IMPORTED_MODULE_37__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_patternfly_react_icons_dist_esm_icons_bell_slash_icon__WEBPACK_IMPORTED_MODULE_38__["default"], {
                size: "sm"
              }), "\xA0", value.hosts_acked_count && !value.impacted_systems_count ? intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].ruleIsDisabledForAllSystems) : intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].ruleIsDisabledForSystemsBody, {
                systems: value.hosts_acked_count
              }), "\xA0", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_39__.Button, {
                isInline: true,
                variant: "link",
                ouiaId: "viewSystem",
                onClick: function onClick() {
                  setViewSystemsModalRule(value);
                  setViewSystemsModalOpen(true);
                }
              }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].viewSystems))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_redhat_cloud_services_frontend_components_advisor_components__WEBPACK_IMPORTED_MODULE_15__.RuleDetails, {
                messages: (0,_Utilities_intlHelper__WEBPACK_IMPORTED_MODULE_22__.formatMessages)(intl, _redhat_cloud_services_frontend_components_advisor_components__WEBPACK_IMPORTED_MODULE_15__.RuleDetailsMessagesKeys, (0,_Utilities_intlHelper__WEBPACK_IMPORTED_MODULE_22__.mapContentToValues)(intl, value)),
                product: _redhat_cloud_services_frontend_components_advisor_components__WEBPACK_IMPORTED_MODULE_15__.AdvisorProduct.rhel,
                rule: value,
                resolutionRisk: (0,_Common_Tables__WEBPACK_IMPORTED_MODULE_9__.ruleResolutionRisk)(value),
                resolutionRiskDesc: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.RISK_OF_CHANGE_DESC[(0,_Common_Tables__WEBPACK_IMPORTED_MODULE_9__.ruleResolutionRisk)(value)],
                isDetailsPage: false,
                showViewAffected: true,
                linkComponent: react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link,
                knowledgebaseUrl: value.node_id ? "https://access.redhat.com/node/".concat(value.node_id) : ''
              })))
            }]
          }];
        });

        setRows(_rows);
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [rules]);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
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
    }, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, param, values))) : removeFilterParam(param);
  };

  var filterConfigItems = [{
    label: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].name).toLowerCase(),
    filterValues: {
      key: 'text-filter',
      onChange: function onChange(_event, value) {
        return setSearchText(value);
      },
      value: searchText,
      placeholder: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].filterBy)
    }
  }, {
    label: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.total_risk.title,
    type: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.total_risk.type,
    id: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.total_risk.urlParam,
    value: "checkbox-".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.total_risk.urlParam),
    filterValues: {
      key: "".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.total_risk.urlParam, "-filter"),
      onChange: function onChange(_event, values) {
        return addFilterParam(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.total_risk.urlParam, values);
      },
      value: filters.total_risk,
      items: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.total_risk.values
    }
  }, {
    label: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.res_risk.title,
    type: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.res_risk.type,
    id: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.res_risk.urlParam,
    value: "checkbox-".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.res_risk.urlParam),
    filterValues: {
      key: "".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.res_risk.urlParam, "-filter"),
      onChange: function onChange(_event, values) {
        return addFilterParam(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.res_risk.urlParam, values);
      },
      value: filters.res_risk,
      items: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.res_risk.values
    }
  }, {
    label: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.impact.title,
    type: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.impact.type,
    id: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.impact.urlParam,
    value: "checkbox-".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.impact.urlParam),
    filterValues: {
      key: "".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.impact.urlParam, "-filter"),
      onChange: function onChange(_event, values) {
        return addFilterParam(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.impact.urlParam, values);
      },
      value: filters.impact,
      items: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.impact.values
    }
  }, {
    label: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.likelihood.title,
    type: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.likelihood.type,
    id: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.likelihood.urlParam,
    value: "checkbox-".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.likelihood.urlParam),
    filterValues: {
      key: "".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.likelihood.urlParam, "-filter"),
      onChange: function onChange(_event, values) {
        return addFilterParam(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.likelihood.urlParam, values);
      },
      value: filters.likelihood,
      items: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.likelihood.values
    }
  }, {
    label: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.category.title,
    type: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.category.type,
    id: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.category.urlParam,
    value: "checkbox-".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.category.urlParam),
    filterValues: {
      key: "".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.category.urlParam, "-filter"),
      onChange: function onChange(_event, values) {
        return addFilterParam(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.category.urlParam, values);
      },
      value: filters.category,
      items: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.category.values
    }
  }, {
    label: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.incident.title,
    type: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.incident.type,
    id: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.incident.urlParam,
    value: "checkbox-".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.incident.urlParam),
    filterValues: {
      key: "".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.incident.urlParam, "-filter"),
      onChange: function onChange(_event, values) {
        return addFilterParam(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.incident.urlParam, values);
      },
      value: filters.incident,
      items: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.incident.values
    }
  }, {
    label: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.has_playbook.title,
    type: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.has_playbook.type,
    id: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.has_playbook.urlParam,
    value: "checkbox-".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.has_playbook.urlParam),
    filterValues: {
      key: "".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.has_playbook.urlParam, "-filter"),
      onChange: function onChange(_event, values) {
        return addFilterParam(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.has_playbook.urlParam, values);
      },
      value: filters.has_playbook,
      items: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.has_playbook.values
    }
  }, {
    label: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.reboot.title,
    type: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.reboot.type,
    id: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.reboot.urlParam,
    value: "checkbox-".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.reboot.urlParam),
    filterValues: {
      key: "".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.reboot.urlParam, "-filter"),
      onChange: function onChange(_event, values) {
        return addFilterParam(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.reboot.urlParam, values);
      },
      value: filters.reboot,
      items: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.reboot.values
    }
  }, {
    label: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.rule_status.title,
    type: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.rule_status.type,
    id: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.rule_status.urlParam,
    value: "radio-".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.rule_status.urlParam),
    filterValues: {
      key: "".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.rule_status.urlParam, "-filter"),
      onChange: function onChange(_event, value) {
        return toggleRulesDisabled(value);
      },
      value: "".concat(filters.rule_status),
      items: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.rule_status.values
    }
  }, {
    label: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.impacting.title,
    type: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.impacting.type,
    id: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.impacting.urlParam,
    value: "checkbox-".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.impacting.urlParam),
    filterValues: {
      key: "".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.impacting.urlParam, "-filter"),
      onChange: function onChange(e, values) {
        return addFilterParam(_AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.impacting.urlParam, values);
      },
      value: filters.impacting,
      items: _AppConstants__WEBPACK_IMPORTED_MODULE_6__.FILTER_CATEGORIES.impacting.values
    }
  }];
  var activeFiltersConfig = {
    deleteTitle: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].resetFilters),
    filters: buildFilterChips(),
    showDeleteButton: true,
    onDelete: function onDelete(_event, itemsToRemove, isAll) {
      if (isAll) {
        setSearchText('');
        setFilters(_objectSpread(_objectSpread({}, filters.topic && {
          topic: filters.topic
        }), {}, {
          impacting: ['true'],
          rule_status: 'enabled',
          limit: filters.limit,
          offset: filters.offset,
          pathway: filters.pathway
        }));
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

  var afterViewSystemsFn = function afterViewSystemsFn() {
    refetch();
  };

  var onExpandAllClick = function onExpandAllClick(_e, isOpen) {
    var allRows = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(rows);

    setIsAllExpanded(isOpen);
    allRows.map(function (row, key) {
      if (Object.prototype.hasOwnProperty.call(row, 'isOpen')) {
        allRows[key] = _objectSpread(_objectSpread({}, row), {}, {
          isOpen: isOpen
        });
      }
    });
    setRows(allRows);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), null, viewSystemsModalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_PresentationalComponents_Modals_ViewHostAcks__WEBPACK_IMPORTED_MODULE_17__["default"], {
    handleModalToggle: function handleModalToggle(toggleModal) {
      return setViewSystemsModalOpen(toggleModal);
    },
    isModalOpen: viewSystemsModalOpen,
    afterFn: afterViewSystemsFn,
    rule: viewSystemsModalRule
  }), disableRuleOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_Modals_DisableRule__WEBPACK_IMPORTED_MODULE_13__["default"], {
    handleModalToggle: setDisableRuleOpen,
    isModalOpen: disableRuleOpen,
    rule: selectedRule,
    afterFn: refetch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_redhat_cloud_services_frontend_components_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_40__["default"], {
    expandAll: {
      isAllExpanded: isAllExpanded,
      onClick: onExpandAllClick
    },
    pagination: {
      itemCount: results,
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
    exportConfig: (_ref8 = {
      label: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].exportCsv)
    }, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref8, "label", intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].exportJson)), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref8, "onSelect", function onSelect(_e, fileType) {
      return (0,_Common_DownloadHelper__WEBPACK_IMPORTED_MODULE_20__["default"])('hits', fileType, filters, selectedTags, workloads, SID, dispatch);
    }), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref8, "isDisabled", !permsExport), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref8, "tooltipText", permsExport ? intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].exportData) : intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_21__["default"].permsAction)), _ref8),
    filterConfig: {
      items: filterConfigItems
    },
    activeFiltersConfig: activeFiltersConfig
  }), isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_14__["default"], null) : isError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_41__.Table, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_redhat_cloud_services_frontend_components_ErrorState__WEBPACK_IMPORTED_MODULE_42__["default"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_41__.Table, {
    "aria-label": 'rule-table',
    variant: _patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_43__.TableVariant.compact,
    actionResolver: actionResolver,
    onCollapse: handleOnCollapse,
    sortBy: sortBy,
    onSort: onSort,
    cells: cols,
    rows: rows,
    areActionsDisabled: function areActionsDisabled() {
      return !permsDisableRec;
    },
    isStickyHeader: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_44__.TableHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_patternfly_react_table_dist_esm__WEBPACK_IMPORTED_MODULE_45__.TableBody, {
    className: "pf-m-width-100"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_patternfly_react_core_dist_esm_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_46__.Pagination, {
    ouiaId: "page",
    itemCount: results,
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
    variant: _patternfly_react_core_dist_esm_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_46__.PaginationVariant.bottom
  }));
};

RulesTable.propTypes = {
  isTabActive: (prop_types__WEBPACK_IMPORTED_MODULE_25___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RulesTable);

/***/ }),

/***/ "./src/PresentationalComponents/RulesTable/helpers.js":
/*!************************************************************!*\
  !*** ./src/PresentationalComponents/RulesTable/helpers.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emptyRows": () => (/* binding */ emptyRows),
/* harmony export */   "messageMapping": () => (/* binding */ messageMapping),
/* harmony export */   "urlFilterBuilder": () => (/* binding */ urlFilterBuilder)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Text/Text.js */ "./node_modules/@patternfly/react-core/dist/esm/components/Text/Text.js");
/* harmony import */ var _Components_EmptyState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/EmptyState */ "./src/PresentationalComponents/RulesTable/Components/EmptyState.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _Common_Tables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/Tables */ "./src/PresentationalComponents/Common/Tables.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






var emptyRows = function emptyRows(filters, toggleRulesDisabled) {
  return [{
    cells: [{
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Components_EmptyState__WEBPACK_IMPORTED_MODULE_2__["default"], {
        filters: filters,
        toggleRulesDisabled: toggleRulesDisabled
      }),
      props: {
        colSpan: 6
      }
    }]
  }];
};
var messageMapping = function messageMapping() {
  var title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "rulestable.norulehits.title"
  });
  return {
    enabled: {
      title: title,
      body: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_5__.Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: "rulestable.norulehits.enabledrulesbody"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_5__.Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: "rulestable.norulehits.enabledrulesbodysecondline"
      })))
    },
    disabled: {
      title: title,
      body: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_5__.Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: "rulestable.norules.disabledrulesbody"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_5__.Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: "rulestable.norules.disabledrulesbodysecondline"
      })))
    },
    rhdisabled: {
      title: title,
      body: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_5__.Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: "rulestable.norules.redhatdisabledrulesbody"
      }))
    },
    "default": {
      title: title,
      body: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_5__.Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: "noRecommendations"
      }))
    }
  };
};
var urlFilterBuilder = function urlFilterBuilder(sortIndices, setSearchText, setFilters, filters) {
  var sortingValues = Object.values(sortIndices);
  var paramsObject = (0,_Common_Tables__WEBPACK_IMPORTED_MODULE_3__.paramParser)();
  delete paramsObject.tags;

  if (Array.isArray(paramsObject.sort)) {
    if (!(sortingValues !== null && sortingValues !== void 0 && sortingValues.includes(paramsObject.sort[0])) || !(sortingValues !== null && sortingValues !== void 0 && sortingValues.includes("-".concat(paramsObject.sort[0])))) {
      paramsObject.sort = '-total_risk';
    }
  } else if (!(sortingValues !== null && sortingValues !== void 0 && sortingValues.includes(paramsObject.sort))) {
    paramsObject.sort = '-total_risk';
  }

  paramsObject.text === undefined ? setSearchText('') : setSearchText(paramsObject.text);
  paramsObject.has_playbook !== undefined && !Array.isArray(paramsObject.has_playbook) && (paramsObject.has_playbook = ["".concat(paramsObject.has_playbook)]);
  paramsObject.incident !== undefined && !Array.isArray(paramsObject.incident) && (paramsObject.incident = ["".concat(paramsObject.incident)]);
  paramsObject.offset === undefined ? paramsObject.offset = 0 : paramsObject.offset = Number(paramsObject.offset[0]);
  paramsObject.limit === undefined ? paramsObject.limit = 20 : paramsObject.limit = Number(paramsObject.limit[0]);
  paramsObject.reboot !== undefined && !Array.isArray(paramsObject.reboot) && (paramsObject.reboot = ["".concat(paramsObject.reboot)]);
  paramsObject.impacting !== undefined && !Array.isArray(paramsObject.impacting) && (paramsObject.impacting = ["".concat(paramsObject.impacting)]);
  setFilters(_objectSpread(_objectSpread({}, filters), paramsObject));
};

/***/ }),

/***/ "./src/Utilities/Debounce.js":
/*!***********************************!*\
  !*** ./src/Utilities/Debounce.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Debounce = function Debounce(value, delay) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      debouncedValue = _useState2[0],
      setDebouncedValue = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var handler = setTimeout(function () {
      setDebouncedValue(value);
    }, delay);
    return function () {
      clearTimeout(handler);
    };
  }, [delay, value]);
  return debouncedValue;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Debounce);

/***/ }),

/***/ "./src/PresentationalComponents/RulesTable/_RulesTable.scss":
/*!******************************************************************!*\
  !*** ./src/PresentationalComponents/RulesTable/_RulesTable.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "?9d45":
/*!*******************************!*\
  !*** ./divider.css (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?9754":
/*!********************************!*\
  !*** ./dropdown.css (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?c5e4":
/*!***********************************!*\
  !*** ./inline-edit.css (ignored) ***!
  \***********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?709e":
/*!************************************!*\
  !*** ./options-menu.css (ignored) ***!
  \************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?7090":
/*!**********************************!*\
  !*** ./pagination.css (ignored) ***!
  \**********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?446c":
/*!**********************************!*\
  !*** ./table-grid.css (ignored) ***!
  \**********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?df0d":
/*!****************************************!*\
  !*** ./table-scrollable.css (ignored) ***!
  \****************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?2d3a":
/*!***************************************!*\
  !*** ./table-tree-view.css (ignored) ***!
  \***************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?2268":
/*!*****************************!*\
  !*** ./stack.css (ignored) ***!
  \*****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?5580":
/*!**************************************!*\
  !*** ./terminal-highlight (ignored) ***!
  \**************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?03fb":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?6197":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?b8cb":
/*!*******************************!*\
  !*** source-map-js (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?c717":
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/src_PresentationalComponents_RulesTable_RulesTable_js.1de3e5750b897ddb0fa7397d0d06b2bd.js.map