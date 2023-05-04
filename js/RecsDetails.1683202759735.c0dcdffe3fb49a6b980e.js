(self["webpackChunkadvisor_frontend"] = self["webpackChunkadvisor_frontend"] || []).push([["RecsDetails"],{

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

/***/ "./src/SmartComponents/Recs/Details.js":
/*!*********************************************!*\
  !*** ./src/SmartComponents/Recs/Details.js ***!
  \*********************************************/
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
/* harmony import */ var _Details_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Details.scss */ "./src/SmartComponents/Recs/Details.scss");
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AppConstants */ "./src/AppConstants.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/Card.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardHeader.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardBody.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardFooter.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_bell_slash_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/bell-slash-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/bell-slash-icon.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Button/Button */ "./node_modules/@patternfly/react-core/dist/esm/components/Button/Button.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_DateFormat__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/DateFormat */ "./node_modules/@redhat-cloud-services/frontend-components/esm/DateFormat/DateFormat.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Title_Title__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/esm/components/Title/Title.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_InvalidObject__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/InvalidObject */ "./node_modules/@redhat-cloud-services/frontend-components/esm/InvalidObject/InvalidObject.js");
/* harmony import */ var _PresentationalComponents_Inventory_Inventory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../PresentationalComponents/Inventory/Inventory */ "./src/PresentationalComponents/Inventory/Inventory.js");
/* harmony import */ var _PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../PresentationalComponents/Loading/Loading */ "./src/PresentationalComponents/Loading/Loading.js");
/* harmony import */ var _PresentationalComponents_MessageState_MessageState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../PresentationalComponents/MessageState/MessageState */ "./src/PresentationalComponents/MessageState/MessageState.js");
/* harmony import */ var _PresentationalComponents_Modals_DisableRule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../PresentationalComponents/Modals/DisableRule */ "./src/PresentationalComponents/Modals/DisableRule.js");
/* harmony import */ var _PresentationalComponents_Modals_ViewHostAcks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../PresentationalComponents/Modals/ViewHostAcks */ "./src/PresentationalComponents/Modals/ViewHostAcks.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/ */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_RBACHook__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/RBACHook */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/esm/RBACHook/RBACHook.js");
/* harmony import */ var _cveToRuleid_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../cveToRuleid.js */ "./src/cveToRuleid.js");
/* harmony import */ var _Services_Acks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../Services/Acks */ "./src/Services/Acks.js");
/* harmony import */ var _Services_Recs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../Services/Recs */ "./src/Services/Recs.js");
/* harmony import */ var _Services_Topics__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../Services/Topics */ "./src/Services/Topics.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./helpers */ "./src/SmartComponents/Recs/helpers.js");
/* harmony import */ var _DetailsRules__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./DetailsRules */ "./src/SmartComponents/Recs/DetailsRules.js");






























var OverviewDetails = function OverviewDetails() {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_21__["default"])();
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
  var ruleId = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useParams)().id;

  var addNotification = function addNotification(data) {
    return dispatch((0,_redhat_cloud_services_frontend_components_notifications___WEBPACK_IMPORTED_MODULE_14__.addNotification)(data));
  };

  var permsExport = (0,_redhat_cloud_services_frontend_components_utilities_RBACHook__WEBPACK_IMPORTED_MODULE_22__.usePermissions)('advisor', _AppConstants__WEBPACK_IMPORTED_MODULE_4__.PERMS["export"]).hasAccess;

  var _useGetRecQuery = (0,_Services_Recs__WEBPACK_IMPORTED_MODULE_17__.useGetRecQuery)({
    ruleId: ruleId
  }),
      _useGetRecQuery$data = _useGetRecQuery.data,
      rule = _useGetRecQuery$data === void 0 ? {} : _useGetRecQuery$data,
      isFetching = _useGetRecQuery.isFetching,
      isError = _useGetRecQuery.isError,
      refetch = _useGetRecQuery.refetch;

  var _useGetRecAcksQuery = (0,_Services_Acks__WEBPACK_IMPORTED_MODULE_16__.useGetRecAcksQuery)({
    ruleId: ruleId
  }),
      _useGetRecAcksQuery$d = _useGetRecAcksQuery.data,
      recAck = _useGetRecAcksQuery$d === void 0 ? {} : _useGetRecAcksQuery$d,
      recAckIsFetching = _useGetRecAcksQuery.isFetching,
      recAckRefetch = _useGetRecAcksQuery.refetch;

  var _useGetTopicsQuery = (0,_Services_Topics__WEBPACK_IMPORTED_MODULE_18__.useGetTopicsQuery)(),
      _useGetTopicsQuery$da = _useGetTopicsQuery.data,
      topics = _useGetTopicsQuery$da === void 0 ? [] : _useGetTopicsQuery$da,
      topicIsFetching = _useGetTopicsQuery.isFetching;

  var permsDisableRec = (0,_redhat_cloud_services_frontend_components_utilities_RBACHook__WEBPACK_IMPORTED_MODULE_22__.usePermissions)('advisor', _AppConstants__WEBPACK_IMPORTED_MODULE_4__.PERMS.disableRec).hasAccess;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      actionsDropdownOpen = _useState2[0],
      setActionsDropdownOpen = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      disableRuleModalOpen = _useState4[0],
      setDisableRuleModalOpen = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(undefined),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      host = _useState6[0],
      setHost = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      viewSystemsModalOpen = _useState8[0],
      setViewSystemsModalOpen = _useState8[1];

  var handleModalToggle = function handleModalToggle(disableRuleModalOpen) {
    var host = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    setDisableRuleModalOpen(disableRuleModalOpen);
    setHost(host);
  };

  var afterDisableFn = /*#__PURE__*/function () {
    var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setHost(undefined);
              refetch();
              recAckRefetch();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function afterDisableFn() {
      return _ref4.apply(this, arguments);
    };
  }();

  var actionResolver = function actionResolver() {
    return [{
      title: 'Disable recommendation for system',
      onClick: function onClick(event, rowIndex, item) {
        return handleModalToggle(true, item);
      }
    }];
  };

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    var isCVE = _cveToRuleid_js__WEBPACK_IMPORTED_MODULE_15__.cveToRuleid && _cveToRuleid_js__WEBPACK_IMPORTED_MODULE_15__.cveToRuleid.find(function (mapping) {
      return mapping.rule_id === ruleId;
    });

    if (isCVE) {
      window.location.href = "".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_4__.UI_BASE, "/vulnerability/cves/").concat(isCVE.cves[0].includes('CVE-') ? "".concat(isCVE.cves[0], "?security_rule=").concat(ruleId) : '');
    }

    if (rule !== null && rule !== void 0 && rule.description) {
      var subnav = "".concat(rule.description, " - ").concat(_Messages__WEBPACK_IMPORTED_MODULE_5__["default"].recommendations.defaultMessage);
      document.title = intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_5__["default"].documentTitle, {
        subnav: subnav
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null, !isFetching && !isError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null, viewSystemsModalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_PresentationalComponents_Modals_ViewHostAcks__WEBPACK_IMPORTED_MODULE_13__["default"], {
    handleModalToggle: function handleModalToggle(toggleModal) {
      return setViewSystemsModalOpen(toggleModal);
    },
    isModalOpen: viewSystemsModalOpen,
    afterFn: function afterFn() {
      return refetch();
    },
    rule: rule
  }), disableRuleModalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_PresentationalComponents_Modals_DisableRule__WEBPACK_IMPORTED_MODULE_12__["default"], {
    handleModalToggle: handleModalToggle,
    isModalOpen: disableRuleModalOpen,
    rule: rule,
    afterFn: afterDisableFn,
    host: host
  }), !isFetching && !topicIsFetching && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_DetailsRules__WEBPACK_IMPORTED_MODULE_20__.DetailsRules, {
    rule: rule,
    topics: topics,
    permsDisableRec: permsDisableRec,
    setActionsDropdownOpen: setActionsDropdownOpen,
    actionsDropdownOpen: actionsDropdownOpen,
    addNotification: addNotification,
    handleModalToggle: handleModalToggle,
    refetch: refetch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("section", {
    className: "pf-l-page__main-section pf-c-page__main-section"
  }, (rule.hosts_acked_count > 0 || rule.rule_status !== 'enabled') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_patternfly_react_core_dist_esm_components_Card__WEBPACK_IMPORTED_MODULE_23__.Card, {
    className: "adv-c-card-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_patternfly_react_core_dist_esm_components_Card__WEBPACK_IMPORTED_MODULE_24__.CardHeader, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_patternfly_react_core_dist_esm_components_Title_Title__WEBPACK_IMPORTED_MODULE_25__.Title, {
    headingLevel: "h4",
    size: "xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_patternfly_react_icons_dist_esm_icons_bell_slash_icon__WEBPACK_IMPORTED_MODULE_26__["default"], {
    size: "sm"
  }), "\xA0", intl.formatMessage(rule.hosts_acked_count > 0 && rule.rule_status === 'enabled' ? _Messages__WEBPACK_IMPORTED_MODULE_5__["default"].ruleIsDisabledForSystems : _Messages__WEBPACK_IMPORTED_MODULE_5__["default"].ruleIsDisabled))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_patternfly_react_core_dist_esm_components_Card__WEBPACK_IMPORTED_MODULE_27__.CardBody, {
    className: "adv-c-card__body"
  }, rule.hosts_acked_count > 0 && rule.rule_status === 'enabled' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_5__["default"].ruleIsDisabledForSystemsBody, {
    systems: rule.hosts_acked_count
  }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_28__.Button, {
    isInline: true,
    variant: "link",
    onClick: function onClick() {
      return setViewSystemsModalOpen(true);
    },
    ouiaId: "viewSystems"
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_5__["default"].viewSystems))) : !recAckIsFetching && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_5__["default"].ruleIsDisabledJustification), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("i", null, recAck.justification || intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_5__["default"].none)), recAck.updated_at && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("span", null, "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_redhat_cloud_services_frontend_components_DateFormat__WEBPACK_IMPORTED_MODULE_29__["default"], {
    date: new Date(recAck.updated_at),
    type: "onlyDate"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_patternfly_react_core_dist_esm_components_Card__WEBPACK_IMPORTED_MODULE_30__.CardFooter, null, rule.hosts_acked_count > 0 && rule.rule_status === 'enabled' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_28__.Button, {
    isInline: true,
    variant: "link",
    onClick: function onClick() {
      return (0,_helpers__WEBPACK_IMPORTED_MODULE_19__.bulkHostActions)({
        refetch: refetch,
        addNotification: addNotification,
        intl: intl,
        rule: rule
      });
    },
    ouiaId: "bulkHost"
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_5__["default"].enableRuleForSystems)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_28__.Button, {
    isInline: true,
    variant: "link",
    onClick: function onClick() {
      return (0,_helpers__WEBPACK_IMPORTED_MODULE_19__.enableRule)(rule, refetch, intl, addNotification, handleModalToggle);
    },
    ouiaId: "rule"
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_5__["default"].enableRule)))), rule.rule_status === 'enabled' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_patternfly_react_core_dist_esm_components_Title_Title__WEBPACK_IMPORTED_MODULE_25__.Title, {
    className: "pf-u-mb-lg",
    headingLevel: "h3",
    size: "2xl"
  }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_5__["default"].affectedSystems)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_PresentationalComponents_Inventory_Inventory__WEBPACK_IMPORTED_MODULE_9__["default"], {
    tableProps: {
      canSelectAll: false,
      actionResolver: actionResolver,
      isStickyHeader: true
    },
    rule: rule,
    afterDisableFn: afterDisableFn,
    selectedTags: selectedTags,
    workloads: workloads,
    SID: SID,
    permsExport: permsExport,
    exportTable: "systems",
    showTags: true
  })), rule.rule_status !== 'enabled' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_PresentationalComponents_MessageState_MessageState__WEBPACK_IMPORTED_MODULE_11__["default"], {
    icon: _patternfly_react_icons_dist_esm_icons_bell_slash_icon__WEBPACK_IMPORTED_MODULE_26__["default"],
    title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_5__["default"].ruleIsDisabled),
    text: recAck.justification ? intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_5__["default"].ruleIsDisabledBodyWithJustification, {
      reason: recAck.justification
    }) : intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_5__["default"].ruleIsDisabledBody)
  }))) : isError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_redhat_cloud_services_frontend_components_InvalidObject__WEBPACK_IMPORTED_MODULE_31__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_PresentationalComponents_Loading_Loading__WEBPACK_IMPORTED_MODULE_10__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverviewDetails);

/***/ }),

/***/ "./src/SmartComponents/Recs/DetailsRules.js":
/*!**************************************************!*\
  !*** ./src/SmartComponents/Recs/DetailsRules.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsRules": () => (/* binding */ DetailsRules)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Details_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Details.scss */ "./src/SmartComponents/Recs/Details.scss");
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../AppConstants */ "./src/AppConstants.js");
/* harmony import */ var _Utilities_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Utilities/Api */ "./src/Utilities/Api.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeader.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeaderTitle.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react?a005");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_caret_down_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/caret-down-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/caret-down-icon.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_DateFormat__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/DateFormat */ "./node_modules/@redhat-cloud-services/frontend-components/esm/DateFormat/DateFormat.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Dropdown/Dropdown */ "./node_modules/@patternfly/react-core/dist/esm/components/Dropdown/Dropdown.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Dropdown/DropdownItem */ "./node_modules/@patternfly/react-core/dist/esm/components/Dropdown/DropdownItem.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Dropdown_DropdownToggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Dropdown/DropdownToggle */ "./node_modules/@patternfly/react-core/dist/esm/components/Dropdown/DropdownToggle.js");
/* harmony import */ var _patternfly_react_core_dist_esm_layouts_Flex_Flex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/layouts/Flex/Flex */ "./node_modules/@patternfly/react-core/dist/esm/layouts/Flex/Flex.js");
/* harmony import */ var _patternfly_react_core_dist_esm_layouts_Flex_FlexItem__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/layouts/Flex/FlexItem */ "./node_modules/@patternfly/react-core/dist/esm/layouts/Flex/FlexItem.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tooltip/Tooltip */ "./node_modules/@patternfly/react-core/dist/esm/components/Tooltip/Tooltip.js");
/* harmony import */ var _PresentationalComponents_Breadcrumbs_Breadcrumbs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../PresentationalComponents/Breadcrumbs/Breadcrumbs */ "./src/PresentationalComponents/Breadcrumbs/Breadcrumbs.js");
/* harmony import */ var _PresentationalComponents_Labels_RuleLabels__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../PresentationalComponents/Labels/RuleLabels */ "./src/PresentationalComponents/Labels/RuleLabels.js");
/* harmony import */ var _PresentationalComponents_Labels_CategoryLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../PresentationalComponents/Labels/CategoryLabel */ "./src/PresentationalComponents/Labels/CategoryLabel.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_advisor_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-advisor-components */ "./node_modules/@redhat-cloud-services/frontend-components-advisor-components/esm/index.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");
/* harmony import */ var _Utilities_intlHelper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Utilities/intlHelper */ "./src/Utilities/intlHelper.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helpers */ "./src/SmartComponents/Recs/helpers.js");



/* eslint-disable react/prop-types */






















var DetailsRules = function DetailsRules(_ref) {
  var rule = _ref.rule,
      topics = _ref.topics,
      permsDisableRec = _ref.permsDisableRec,
      setActionsDropdownOpen = _ref.setActionsDropdownOpen,
      actionsDropdownOpen = _ref.actionsDropdownOpen,
      addNotification = _ref.addNotification,
      handleModalToggle = _ref.handleModalToggle,
      refetch = _ref.refetch;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_14__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: "adv-c-page__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_PresentationalComponents_Breadcrumbs_Breadcrumbs__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ouiaId: "override",
    current: rule.description || ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("section", {
    className: "pf-l-page__main-section pf-c-page__main-section pf-m-light pf-u-pt-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_redhat_cloud_services_frontend_components_advisor_components__WEBPACK_IMPORTED_MODULE_10__.RuleDetails, {
    messages: (0,_Utilities_intlHelper__WEBPACK_IMPORTED_MODULE_12__.formatMessages)(intl, _redhat_cloud_services_frontend_components_advisor_components__WEBPACK_IMPORTED_MODULE_10__.RuleDetailsMessagesKeys, (0,_Utilities_intlHelper__WEBPACK_IMPORTED_MODULE_12__.mapContentToValues)(intl, rule)),
    product: _redhat_cloud_services_frontend_components_advisor_components__WEBPACK_IMPORTED_MODULE_10__.AdvisorProduct.rhel,
    rule: rule,
    topics: topics,
    resolutionRisk: (0,_helpers__WEBPACK_IMPORTED_MODULE_13__.ruleResolutionRisk)(rule),
    resolutionRiskDesc: _AppConstants__WEBPACK_IMPORTED_MODULE_3__.RISK_OF_CHANGE_DESC[(0,_helpers__WEBPACK_IMPORTED_MODULE_13__.ruleResolutionRisk)(rule)],
    isDetailsPage: true,
    header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, rule.description, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_PresentationalComponents_Labels_RuleLabels__WEBPACK_IMPORTED_MODULE_8__["default"], {
        rule: rule
      }))
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", {
      className: "pf-u-mr-md"
    }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_11__["default"].rulesDetailsModifieddate, {
      date: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_redhat_cloud_services_frontend_components_DateFormat__WEBPACK_IMPORTED_MODULE_17__["default"], {
        date: new Date(rule.publish_date),
        type: "onlyDate"
      })
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_PresentationalComponents_Labels_CategoryLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
      labelList: [rule.category]
    }))),
    onVoteClick: /*#__PURE__*/function () {
      var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(ruleId, calculatedRating) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0,_Utilities_Api__WEBPACK_IMPORTED_MODULE_4__.Post)("".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_3__.BASE_URL, "/rating/"), {}, {
                  rule: ruleId,
                  rating: calculatedRating
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }(),
    knowledgebaseUrl: rule.node_id ? "https://access.redhat.com/node/".concat(rule.node_id) : '',
    linkComponent: react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_patternfly_react_core_dist_esm_layouts_Flex_Flex__WEBPACK_IMPORTED_MODULE_18__.Flex, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_patternfly_react_core_dist_esm_layouts_Flex_FlexItem__WEBPACK_IMPORTED_MODULE_19__.FlexItem, {
    align: {
      "default": 'alignRight'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_patternfly_react_core_dist_esm_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_20__.Tooltip, {
    trigger: !permsDisableRec ? 'mouseenter' : '',
    content: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_11__["default"].permsAction)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_patternfly_react_core_dist_esm_components_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_21__.Dropdown, {
    className: "adv-c-dropdown-details-actions",
    onSelect: function onSelect() {
      return setActionsDropdownOpen(!actionsDropdownOpen);
    },
    position: "right",
    ouiaId: "actions",
    toggle: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_patternfly_react_core_dist_esm_components_Dropdown_DropdownToggle__WEBPACK_IMPORTED_MODULE_22__.DropdownToggle, {
      isDisabled: !permsDisableRec,
      onToggle: function onToggle(actionsDropdownOpen) {
        return setActionsDropdownOpen(actionsDropdownOpen);
      },
      toggleIndicator: _patternfly_react_icons_dist_esm_icons_caret_down_icon__WEBPACK_IMPORTED_MODULE_23__["default"]
    }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_11__["default"].actions)),
    isOpen: actionsDropdownOpen,
    dropdownItems: rule && rule.rule_status === 'enabled' ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_patternfly_react_core_dist_esm_components_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_24__.DropdownItem, {
      key: "link",
      ouiaId: "disable",
      onClick: function onClick() {
        handleModalToggle(true);
      }
    }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_11__["default"].disableRule))] : [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_patternfly_react_core_dist_esm_components_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_24__.DropdownItem, {
      key: "link",
      ouiaId: "enable",
      onClick: function onClick() {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_13__.enableRule)(rule, refetch, intl, addNotification, handleModalToggle);
      }
    }, intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_11__["default"].enableRule))]
  })))))));
};

/***/ }),

/***/ "./src/SmartComponents/Recs/helpers.js":
/*!*********************************************!*\
  !*** ./src/SmartComponents/Recs/helpers.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bulkHostActions": () => (/* binding */ bulkHostActions),
/* harmony export */   "enableRule": () => (/* binding */ enableRule),
/* harmony export */   "ruleResolutionRisk": () => (/* binding */ ruleResolutionRisk)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AppConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../AppConstants */ "./src/AppConstants.js");
/* harmony import */ var _Utilities_Api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities/Api */ "./src/Utilities/Api.js");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Messages */ "./src/Messages.js");





var ruleResolutionRisk = function ruleResolutionRisk(rule) {
  var _rule$resolution_set;

  var resolution = rule === null || rule === void 0 ? void 0 : (_rule$resolution_set = rule.resolution_set) === null || _rule$resolution_set === void 0 ? void 0 : _rule$resolution_set.find(function (resolution) {
    return resolution.system_type === _AppConstants__WEBPACK_IMPORTED_MODULE_2__.SYSTEM_TYPES.rhel || _AppConstants__WEBPACK_IMPORTED_MODULE_2__.SYSTEM_TYPES.ocp;
  });
  return resolution ? resolution.resolution_risk.risk : undefined;
};
var enableRule = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(rule, refetch, intl, addNotification, handleModalToggle) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0,_Utilities_Api__WEBPACK_IMPORTED_MODULE_3__.DeleteApi)("".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_2__.BASE_URL, "/ack/").concat(rule.rule_id, "/"));

          case 3:
            addNotification({
              variant: 'success',
              timeout: true,
              dismissable: true,
              title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_4__["default"].recSuccessfullyEnabled)
            });
            refetch();
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            handleModalToggle(false);
            addNotification({
              variant: 'danger',
              dismissable: true,
              title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_4__["default"].error),
              description: "".concat(_context.t0)
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function enableRule(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();
var bulkHostActions = /*#__PURE__*/function () {
  var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(_ref2) {
    var refetch, addNotification, intl, rule, _hostAckResponse$data, hostAckResponse, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            refetch = _ref2.refetch, addNotification = _ref2.addNotification, intl = _ref2.intl, rule = _ref2.rule;
            _context2.prev = 1;
            _context2.next = 4;
            return (0,_Utilities_Api__WEBPACK_IMPORTED_MODULE_3__.Get)("".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_2__.BASE_URL, "/hostack/"), {}, {
              rule_id: rule.rule_id,
              limit: rule.hosts_acked_count
            });

          case 4:
            hostAckResponse = _context2.sent.data;
            data = {
              systems: hostAckResponse === null || hostAckResponse === void 0 ? void 0 : (_hostAckResponse$data = hostAckResponse.data) === null || _hostAckResponse$data === void 0 ? void 0 : _hostAckResponse$data.map(function (item) {
                return item.system_uuid;
              })
            };
            _context2.next = 8;
            return (0,_Utilities_Api__WEBPACK_IMPORTED_MODULE_3__.Post)("".concat(_AppConstants__WEBPACK_IMPORTED_MODULE_2__.BASE_URL, "/rule/").concat(rule.rule_id, "/unack_hosts/"), {}, data);

          case 8:
            refetch();
            addNotification({
              variant: 'success',
              timeout: true,
              dismissable: true,
              title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_4__["default"].recSuccessfullyEnabled)
            });
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](1);
            addNotification({
              variant: 'danger',
              dismissable: true,
              title: intl.formatMessage(_Messages__WEBPACK_IMPORTED_MODULE_4__["default"].error),
              description: "".concat(_context2.t0)
            });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 12]]);
  }));

  return function bulkHostActions(_x6) {
    return _ref3.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/cveToRuleid.js":
/*!****************************!*\
  !*** ./src/cveToRuleid.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cveToRuleid": () => (/* binding */ cveToRuleid)
/* harmony export */ });
var cveToRuleid = [{
  rule_id: 'CVE_2015_3456|VENOM_CVE_2015_3456',
  name: 'CVE-2015-3456: "VENOM" QEMU privilege escalation',
  description: 'CVE-2015-3456: "VENOM" QEMU privilege escalation',
  cves: ['CVE-2015-3456']
}, {
  rule_id: 'CVE_2015_5600|OPENSSH_CVE_2015_5600',
  name: 'CVE-2015-5600: OpenSSH vulnerable to password guessing attack',
  description: 'CVE-2015-5600: OpenSSH vulnerable to password guessing attack',
  cves: ['CVE-2015-5600']
}, {
  rule_id: 'CVE_2015_7181_2_3_nss_nspr|NSS_NSPR_CVE_2015_7181_2_3',
  name: 'CVE-2015-7181, CVE-2015-7182, CVE-2015-7183: NSS/NSPR privilege escalation',
  description: 'CVE-2015-7181, CVE-2015-7182, CVE-2015-7183: NSS/NSPR privilege escalation',
  cves: ['CVE-2015-7181', 'CVE-2015-7182', 'CVE-2015-7183']
}, {
  rule_id: 'CVE_2015_7501_commons_collections|COMMONS_COLLECTIONS_CVE_2015_7501_IN_USE',
  name: 'CVE-2015-7501: Java application server code execution',
  description: 'CVE-2015-7501: Java application server code execution',
  cves: ['CVE-2015-7501']
}, {
  rule_id: 'CVE_2015_7547_glibc|GLIBC_CVE_2015_7547',
  name: 'CVE-2015-7547: libresolv code execution',
  description: 'CVE-2015-7547: libresolv code execution',
  cves: ['CVE-2015-7547']
}, {
  rule_id: 'CVE_2016_0728_kernel|KERNEL_CVE-2016-0728',
  name: 'CVE-2016-0728: kernel privilege escalation in key management subsystem',
  description: 'CVE-2016-0728: kernel privilege escalation in key management subsystem',
  cves: ['CVE-2016-0728']
}, {
  rule_id: 'CVE_2016_0800_openssl_drown|OPENSSL_CVE_2016_0800_DROWN',
  name: 'CVE-2016-0800: "DROWN" OpenSSL session decryption',
  description: 'CVE-2016-0800: "DROWN" OpenSSL session decryption',
  cves: ['CVE-2016-0800']
}, {
  rule_id: 'CVE_2016_0800_openssl_drown|OPENSSL_CVE_2016_0800_DROWN_INT_LISTENING',
  name: 'CVE-2016-0800: "DROWN" OpenSSL session decryption',
  description: 'CVE-2016-0800: "DROWN" OpenSSL session decryption with listening processes',
  cves: ['CVE-2016-0800']
}, {
  rule_id: 'CVE_2016_0800_openssl_drown|OPENSSL_CVE_2016_0800_DROWN_LISTENING',
  name: 'CVE-2016-0800: "DROWN" OpenSSL session decryption',
  description: 'CVE-2016-0800: "DROWN" OpenSSL session decryption with externally available processes',
  cves: ['CVE-2016-0800']
}, {
  rule_id: 'CVE_2016_0800_openssl_drown|OPENSSL_CVE_2016_0800_DROWN_USED',
  name: 'CVE-2016-0800: "DROWN" OpenSSL session decryption',
  description: 'CVE-2016-0800: "DROWN" OpenSSL session decryption with running services',
  cves: ['CVE-2016-0800']
}, {
  rule_id: 'CVE_2016_0800_openssl_drown|OPENSSL_CVE_2016_0800_SPECIAL_DROWN',
  name: 'CVE-2016-0800: "DROWN" OpenSSL session decryption',
  description: 'CVE-2016-0800: "Special DROWN" OpenSSL very efficient session decryption',
  cves: ['CVE-2016-0800']
}, {
  rule_id: 'CVE_2016_0800_openssl_drown|OPENSSL_CVE_2016_0800_SPECIAL_DROWN_LISTEN',
  name: 'CVE-2016-0800: "DROWN" OpenSSL session decryption',
  description: 'CVE-2016-0800: "Special DROWN" OpenSSL very efficient session decryption with listening processes',
  cves: ['CVE-2016-0800']
}, {
  rule_id: 'CVE_2016_0800_openssl_drown|OPENSSL_CVE_2016_0800_SPECIAL_DROWN_URGENT',
  name: 'CVE-2016-0800: "DROWN" OpenSSL session decryption',
  description: 'CVE-2016-0800: "Special DROWN" OpenSSL very efficient session decryption with externally available processes',
  cves: ['CVE-2016-0800']
}, {
  rule_id: 'CVE_2016_0800_openssl_drown|OPENSSL_CVE_2016_0800_SPECIAL_DROWN_USED',
  name: 'CVE-2016-0800: "DROWN" OpenSSL session decryption',
  description: 'CVE-2016-0800: "Special DROWN" OpenSSL very efficient session decryption with running services',
  cves: ['CVE-2016-0800']
}, {
  rule_id: 'CVE_2016_2315_24_git|GIT_CVE_2016_2315_24',
  name: 'CVE-2016-2315, CVE-2016-2324: Git code execution via crafted packfile',
  description: 'CVE-2016-2315, CVE-2016-2324: Git code execution via crafted packfile',
  cves: ['CVE-2016-2315', 'CVE-2016-2324']
}, {
  rule_id: 'CVE_2016_2315_24_git|GIT_DAEMON_CVE_2016_2315_24',
  name: 'CVE-2016-2315, CVE-2016-2324: Git code execution via crafted packfile',
  description: 'CVE-2016-2315, CVE-2016-2324: Git daemon remote code execution via crafted packfile',
  cves: ['CVE-2016-2315', 'CVE-2016-2324']
}, {
  rule_id: 'CVE_2016_2776_bind|BIND_CVE_2016_2776',
  name: 'CVE-2016-2776: BIND denial of service via crafted DNS request',
  description: 'CVE-2016-2776: BIND denial of service via crafted DNS request',
  cves: ['CVE-2016-2776']
}, {
  rule_id: 'CVE_2016_3714_imagemagick|IMAGEMAGICK_CVE_2016_3714',
  name: 'CVE-2016-3714: ImageMagick code execution',
  description: 'CVE-2016-3714: ImageMagick code execution',
  cves: ['CVE-2016-3714']
}, {
  rule_id: 'CVE_2016_5195_kernel|KERNEL_CVE_2016_5195_2',
  name: 'CVE-2016-5195: kernel privilege escalation via permission bypass',
  description: 'CVE-2016-5195: kernel privilege escalation via permission bypass',
  cves: ['CVE-2016-5195']
}, {
  rule_id: 'CVE_2016_5696_kernel|KERNEL_CVE_2016_5696_URGENT',
  name: 'CVE-2016-5696: kernel man-in-the-middle via payload injection',
  description: 'CVE-2016-5696: kernel man-in-the-middle via payload injection',
  cves: ['CVE-2016-5696']
}, {
  rule_id: 'CVE_2016_5696_kernel|KERNEL_CVE_2016_5696_WARN_2',
  name: 'CVE-2016-5696: kernel man-in-the-middle via payload injection',
  description: 'CVE-2016-5696: kernel man-in-the-middle via payload injection with incomplete mitigation',
  cves: ['CVE-2016-5696']
}, {
  rule_id: 'CVE_2016_9962_docker|CVE_2015_9962_DOCKER_LESS_SEVERE_2',
  name: 'CVE-2016-9962: Docker privilege escalation via ptrace',
  description: 'CVE-2016-9962: Docker privilege escalation via ptrace',
  cves: ['CVE-2016-9962']
}, {
  rule_id: 'CVE_2016_9962_docker|CVE_2015_9962_DOCKER_MORE_SEVERE_2',
  name: 'CVE-2016-9962: Docker privilege escalation via ptrace',
  description: 'CVE-2016-9962: Docker efficient privilege escalation via ptrace with outdated package',
  cves: ['CVE-2016-9962']
}, {
  rule_id: 'CVE_2017_1000250_bluez|BLUEZ_CVE_2017_1000250',
  name: 'CVE-2017-1000250: bluez information disclosure',
  description: 'CVE-2017-1000250: bluez information disclosure',
  cves: ['CVE-2017-1000250']
}, {
  rule_id: 'CVE_2017_1000251_kernel_blueborne|KERNEL_CVE_2017_1000251_LOADED_DOS',
  name: 'CVE-2017-1000251: "Blueborne" kernel code execution',
  description: 'CVE-2017-1000251: "Blueborne" kernel denial of service with loaded modules',
  cves: ['CVE-2017-1000251']
}, {
  rule_id: 'CVE_2017_1000251_kernel_blueborne|KERNEL_CVE_2017_1000251_LOADED_RCE',
  name: 'CVE-2017-1000251: "Blueborne" kernel code execution',
  description: 'CVE-2017-1000251: "Blueborne" kernel code execution with loaded modules',
  cves: ['CVE-2017-1000251']
}, {
  rule_id: 'CVE_2017_1000251_kernel_blueborne|KERNEL_CVE_2017_1000251_POSSIBLE_DOS',
  name: 'CVE-2017-1000251: "Blueborne" kernel code execution',
  description: 'CVE-2017-1000251: "Blueborne" kernel denial of service',
  cves: ['CVE-2017-1000251']
}, {
  rule_id: 'CVE_2017_1000251_kernel_blueborne|KERNEL_CVE_2017_1000251_POSSIBLE_RCE',
  name: 'CVE-2017-1000251: "Blueborne" kernel code execution',
  description: 'CVE-2017-1000251: "Blueborne" kernel code execution',
  cves: ['CVE-2017-1000251']
}, {
  rule_id: 'CVE_2017_1000253_loadelf|KERNEL_CVE_2017_1000253_MITIGATION_INCOMPLETE',
  name: 'CVE-2017-1000253: kernel privilege escalation via SUID PIE binaries',
  description: 'CVE-2017-1000253: kernel privilege escalation via SUID PIE binaries with incomplete mitigation',
  cves: ['CVE-2017-1000253']
}, {
  rule_id: 'CVE_2017_1000253_loadelf|KERNEL_CVE_2017_1000253_VULNERABLE',
  name: 'CVE-2017-1000253: kernel privilege escalation via SUID PIE binaries',
  description: 'CVE-2017-1000253: kernel privilege escalation via SUID PIE binaries',
  cves: ['CVE-2017-1000253']
}, {
  rule_id: 'CVE_2017_1000366_glibc|CVE_2017_1000364_KERNEL_CVE_2017_1000366_GLIBC_EXPLOITABLE',
  name: 'CVE-2017-1000364, CVE-2017-1000366: kernel, glibc privilege escalation',
  description: 'CVE-2017-1000364, CVE-2017-1000366: kernel, glibc privilege escalation',
  cves: ['CVE-2017-1000364', 'CVE-2017-1000366']
}, {
  rule_id: 'CVE_2017_1000368_sudo|CVE_2017_1000368_SUDO_2',
  name: 'CVE-2017-1000368: sudo privilege escalation due to incomplete bugfix',
  description: 'CVE-2017-1000368: sudo privilege escalation due to incomplete bugfix',
  cves: ['CVE-2017-1000368']
}, {
  rule_id: 'CVE_2017_1000405_kernel|KERNEL_CVE_2017_1000405_VULNERABLE',
  name: 'CVE-2017-1000405: kernel memory corruption',
  description: 'CVE-2017-1000405: kernel memory corruption',
  cves: ['CVE-2017-1000405']
}, {
  rule_id: 'CVE_2017_12616_tomcat|TOMCAT_CVE_2017_12616_2',
  name: 'CVE-2017-12616: Tomcat information disclosure',
  description: 'CVE-2017-12616: Tomcat information disclosure',
  cves: ['CVE-2017-12616']
}, {
  rule_id: 'CVE_2017_12616_tomcat|TOMCAT_CVE_2017_12616_USED_2',
  name: 'CVE-2017-12616: Tomcat information disclosure',
  description: 'CVE-2017-12616: Tomcat information disclosure with running process',
  cves: ['CVE-2017-12616']
}, {
  rule_id: 'CVE_2017_13077_wpa_supplicant|CVE_2017_13077_ERROR',
  name: 'CVE-2017-13077: wpa_supplicant man-in-the-middle',
  description: 'CVE-2017-13077: wpa_supplicant man-in-the-middle with active wifi',
  cves: ['CVE-2017-13077']
}, {
  rule_id: 'CVE_2017_13077_wpa_supplicant|CVE_2017_13077_WARN',
  name: 'CVE-2017-13077: wpa_supplicant man-in-the-middle',
  description: 'CVE-2017-13077: wpa_supplicant man-in-the-middle',
  cves: ['CVE-2017-13077']
}, {
  rule_id: 'CVE_2017_14491_dnsmasq|CVE_2017_14491_ERROR',
  name: 'CVE-2017-14491: dnsmasq code execution',
  description: 'CVE-2017-14491: dnsmasq code execution with listening processes',
  cves: ['CVE-2017-14491']
}, {
  rule_id: 'CVE_2017_14491_dnsmasq|CVE_2017_14491_WARN',
  name: 'CVE-2017-14491: dnsmasq code execution',
  description: 'CVE-2017-14491: dnsmasq code execution',
  cves: ['CVE-2017-14491']
}, {
  rule_id: 'CVE_2017_2636_kernel|KERNEL_CVE_2017_2636',
  name: 'CVE-2017-2636: kernel privilege escalation',
  description: 'CVE-2017-2636: kernel privilege escalation',
  cves: ['CVE-2017-2636']
}, {
  rule_id: 'CVE_2017_5461_nss|CVE_2017_5461_NSS_2',
  name: 'CVE-2017-5461: NSS code execution',
  description: 'CVE-2017-5461: NSS code execution',
  cves: ['CVE-2017-5461']
}, {
  rule_id: 'CVE_2017_5715_cpu_virt|VIRT_CVE_2017_5715_CPU_3_DRACUTKERNEL',
  name: 'CVE-2017-5715: "Spectre" Virtualization side-channel',
  description: 'CVE-2017-5715: "Spectre" Virtualization side-channel in dracut and kernel',
  cves: ['CVE-2017-5715']
}, {
  rule_id: 'CVE_2017_5715_cpu_virt|VIRT_CVE_2017_5715_CPU_3_ONLYDRACUT',
  name: 'CVE-2017-5715: "Spectre" Virtualization side-channel',
  description: 'CVE-2017-5715: "Spectre" Virtualization side-channel in dracut',
  cves: ['CVE-2017-5715']
}, {
  rule_id: 'CVE_2017_5715_cpu_virt|VIRT_CVE_2017_5715_CPU_3_ONLYVIRT',
  name: 'CVE-2017-5715: "Spectre" Virtualization side-channel',
  description: 'CVE-2017-5715: "Spectre" Virtualization side-channel',
  cves: ['CVE-2017-5715']
}, {
  rule_id: 'CVE_2017_5715_cpu_virt|VIRT_CVE_2017_5715_CPU_3_VIRTKERNEL',
  name: 'CVE-2017-5715: "Spectre" Virtualization side-channel',
  description: 'CVE-2017-5715: "Spectre" Virtualization and kernel side-channel',
  cves: ['CVE-2017-5715']
}, {
  rule_id: 'CVE_2017_5753_4_cpu_kernel|KERNEL_CVE_2017_5753_4_CPU_ERROR_3',
  name: 'CVE-2017-5753, CVE-2017-5754: "Spectre/Meltdown" CPU side-channel',
  description: 'CVE-2017-5753, CVE-2017-5754: "Spectre/Meltdown" CPU side-channel',
  cves: ['CVE-2017-5753', 'CVE-2017-5754']
}, {
  rule_id: 'CVE_2017_6074_kernel|KERNEL_CVE_2017_6074',
  name: 'CVE-2017-6074: kernel privilege escalation via DCCP module',
  description: 'CVE-2017-6074: kernel privilege escalation via DCCP module',
  cves: ['CVE-2017-6074']
}, {
  rule_id: 'CVE_2017_7184_kernel|KERNEL_CVE_2017_7184_EXPLOITABLE_2',
  name: 'CVE-2017-7184: kernel privilege escalation via CAP_NET_ADMIN capability',
  description: 'CVE-2017-7184: kernel privilege escalation via CAP_NET_ADMIN capability',
  cves: ['CVE-2017-7184']
}, {
  rule_id: 'CVE_2017_7494_samba|SAMBA_CVE_2017_7494_2',
  name: 'CVE-2017-7494: Samba code execution via writeable share',
  description: 'CVE-2017-7494: Samba code execution via writeable share',
  cves: ['CVE-2017-7494']
}, {
  rule_id: 'CVE_2017_8779_rpc|CVE_2017_8779_BUG',
  name: 'CVE-2017-8779: "rpcbomb" rpcbind denial of service',
  description: 'CVE-2017-8779: "rpcbomb" rpcbind crash with certain versions',
  cves: ['CVE-2017-8779']
}, {
  rule_id: 'CVE_2017_8779_rpc|CVE_2017_8779_VULNERABLE',
  name: 'CVE-2017-8779: "rpcbomb" rpcbind denial of service',
  description: 'CVE-2017-8779: "rpcbomb" rpcbind denial of service',
  cves: ['CVE-2017-8779']
}, {
  rule_id: 'CVE_2017_8779_rpc|CVE_2017_8779_WARN',
  name: 'CVE-2017-8779: "rpcbomb" rpcbind denial of service',
  description: 'CVE-2017-8779: "rpcbomb" rpcbind memory leak',
  cves: ['CVE-2017-8779']
}, {
  rule_id: 'CVE_2018_1000115_memcached|CVE_2018_1000115',
  name: 'CVE-2018-1000115: memcached spoofed traffic amplification',
  description: 'CVE-2018-1000115: memcached spoofed traffic amplification',
  cves: ['CVE-2018-1000115']
}, {
  rule_id: 'CVE_2018_1002105_kubernetes|CVE_2018_1002105_KUBERNETES',
  name: 'CVE-2018-1002105: kubernetes privilege escalation',
  description: 'CVE-2018-1002105: kubernetes privilege escalation',
  cves: ['CVE-2018-1002105']
}, {
  rule_id: 'CVE_2018_1002105_kubernetes|CVE_2018_1002105_KUBERNETES_RUNNING',
  name: 'CVE-2018-1002105: kubernetes privilege escalation',
  description: 'CVE-2018-1002105: kubernetes privilege escalation with running service',
  cves: ['CVE-2018-1002105']
}, {
  rule_id: 'CVE_2018_1002105_kubernetes|CVE_2018_1002105_KUBERNETES_WONTFIX',
  name: 'CVE-2018-1002105: kubernetes privilege escalation',
  description: 'CVE-2018-1002105: kubernetes privilege escalation (no fix available for this version)',
  cves: ['CVE-2018-1002105']
}, {
  rule_id: 'CVE_2018_1002105_kubernetes|CVE_2018_1002105_KUBERNETES_WONTFIX_RUNNING',
  name: 'CVE-2018-1002105: kubernetes privilege escalation',
  description: 'CVE-2018-1002105: kubernetes privilege escalation with running service (no fix available for this version)',
  cves: ['CVE-2018-1002105']
}, {
  rule_id: 'CVE_2018_1102_ose_sti_builder|OSE_STI_BUILDER_CVE_2018_1102',
  name: 'CVE-2018-1102: OpenShift remote code execution via S2I build',
  description: 'CVE-2018-1102: OpenShift remote code execution via S2I build',
  cves: ['CVE-2018-1102']
}, {
  rule_id: 'CVE_2018_1111_dhcp|ERROR_CVE_2018_1111_DHCP_2',
  name: 'CVE-2018-1111: NetworkManager code execution',
  description: 'CVE-2018-1111: NetworkManager code execution with DHCP enabled',
  cves: ['CVE-2018-1111']
}, {
  rule_id: 'CVE_2018_1111_dhcp|WARN_CVE_2018_1111_DHCP_2',
  name: 'CVE-2018-1111: NetworkManager code execution',
  description: 'CVE-2018-1111: NetworkManager code execution',
  cves: ['CVE-2018-1111']
}, {
  rule_id: 'CVE_2018_1112_glusterfs|GLUSTERFS_CVE_2018_1112',
  name: 'CVE-2018-1112: glusterfs unrestricted access',
  description: 'CVE-2018-1112: glusterfs unrestricted access',
  cves: ['CVE-2018-1112']
}, {
  rule_id: 'CVE_2018_12130_cpu_kernel|CVE_2018_12130_CPU_KERNEL_BAD_CMDLINE',
  name: 'CVE-2018-12126, CVE-2018-12127, CVE-2018-12130, CVE-2019-11091: "MDS" CPU side-channel',
  description: 'CVE-2018-12126, CVE-2018-12127, CVE-2018-12130, CVE-2019-11091: "MDS" CPU side-channel mitigation disabled',
  cves: ['CVE-2018-12126', 'CVE-2018-12127', 'CVE-2018-12130', 'CVE-2019-11091']
}, {
  rule_id: 'CVE_2018_12130_cpu_kernel|CVE_2018_12130_CPU_KERNEL_NEED_UPDATE',
  name: 'CVE-2018-12126, CVE-2018-12127, CVE-2018-12130, CVE-2019-11091: "MDS" CPU side-channel',
  description: 'CVE-2018-12126, CVE-2018-12127, CVE-2018-12130, CVE-2019-11091: "MDS" CPU side-channel',
  cves: ['CVE-2018-12126', 'CVE-2018-12127', 'CVE-2018-12130', 'CVE-2019-11091']
}, {
  rule_id: 'CVE_2018_12130_cpu_kernel|CVE_2018_12130_CPU_KERNEL_VULNERABLE_2',
  name: 'CVE-2018-12126, CVE-2018-12127, CVE-2018-12130, CVE-2019-11091: "MDS" CPU side-channel',
  description: 'CVE-2018-12126, CVE-2018-12127, CVE-2018-12130, CVE-2019-11091: "MDS" CPU side-channel reported by kernel',
  cves: ['CVE-2018-12126', 'CVE-2018-12127', 'CVE-2018-12130', 'CVE-2019-11091']
}, {
  rule_id: 'CVE_2018_12207_cpu_kernel|CVE_2018_12207_CPU_KERNEL_CMDLINE',
  name: 'CVE-2018-12207: CPU systemwide denial of service',
  description: 'CVE-2018-12207: CPU systemwide denial of service mitigation disabled',
  cves: ['CVE-2018-12207']
}, {
  rule_id: 'CVE_2018_12207_cpu_kernel|CVE_2018_12207_CPU_KERNEL_FOR_SURE',
  name: 'CVE-2018-12207: CPU systemwide denial of service',
  description: 'CVE-2018-12207: CPU systemwide denial of service',
  cves: ['CVE-2018-12207']
}, {
  rule_id: 'CVE_2018_12207_cpu_kernel|CVE_2018_12207_CPU_KERNEL_FOR_SURE_CRITICAL',
  name: 'CVE-2018-12207: CPU systemwide denial of service',
  description: 'CVE-2018-12207: CPU systemwide denial of service with running hypervisor',
  cves: ['CVE-2018-12207']
}, {
  rule_id: 'CVE_2018_14634_kernel|CVE_2018_14634_2',
  name: 'CVE-2018-14634: kernel privilege escalation via SUID-root binary integer overflow',
  description: 'CVE-2018-14634: kernel privilege escalation via SUID-root binary integer overflow',
  cves: ['CVE-2018-14634']
}, {
  rule_id: 'CVE_2018_19788_polkit|CVE_2018_19788_POLKIT_UID_BAD',
  name: 'CVE-2018-19788: PolicyKit authentication bypass',
  description: 'CVE-2018-19788: PolicyKit authentication bypass with affected UID',
  cves: ['CVE-2018-19788']
}, {
  rule_id: 'CVE_2018_3620_cpu_kernel|CVE_2018_3620_CPU_KERNEL_BAD_CMDLINE',
  name: 'CVE-2018-3620: "L1TF" CPU side-channel',
  description: 'CVE-2018-3620: "L1TF" CPU side-channel mitigation disabled',
  cves: ['CVE-2018-3620']
}, {
  rule_id: 'CVE_2018_3620_cpu_kernel|CVE_2018_3620_CPU_KERNEL_NEED_UPDATE',
  name: 'CVE-2018-3620: "L1TF" CPU side-channel',
  description: 'CVE-2018-3620: "L1TF" CPU side-channel',
  cves: ['CVE-2018-3620']
}, {
  rule_id: 'CVE_2018_3620_cpu_kernel|CVE_2018_3620_CPU_KERNEL_VULNERABLE_4',
  name: 'CVE-2018-3620: "L1TF" CPU side-channel',
  description: 'CVE-2018-3620: "L1TF" CPU side-channel reported by kernel',
  cves: ['CVE-2018-3620']
}, {
  rule_id: 'CVE_2018_3639_cpu_kernel|CVE_2018_3639_CPU_BAD_CMDLINE_2',
  name: 'CVE-2018-3639: "SSBD" CPU side-channel',
  description: 'CVE-2018-3639: "SSBD" CPU side-channel mitigation disabled by command line',
  cves: ['CVE-2018-3639']
}, {
  rule_id: 'CVE_2018_3639_cpu_kernel|CVE_2018_3639_CPU_BAD_KERNEL_2',
  name: 'CVE-2018-3639: "SSBD" CPU side-channel',
  description: 'CVE-2018-3639: "SSBD" CPU side-channel',
  cves: ['CVE-2018-3639']
}, {
  rule_id: 'CVE_2018_3639_cpu_kernel|CVE_2018_3639_CPU_BAD_MICROCODE_2',
  name: 'CVE-2018-3639: "SSBD" CPU side-channel',
  description: 'CVE-2018-3639: "SSBD" CPU side-channel with outdated microcode',
  cves: ['CVE-2018-3639']
}, {
  rule_id: 'CVE_2018_8897_kernel_popss|KERNEL_CVE_2018_8897_VULNERABLE_2',
  name: 'CVE-2018-1087, CVE-2018-8897: "POPSS" kernel privilege escalation',
  description: 'CVE-2018-1087, CVE-2018-8897: "POPSS" kernel privilege escalation',
  cves: ['CVE-2018-1087', 'CVE-2018-8897']
}, {
  rule_id: 'CVE_2019_0155_gpu_kernel|CVE_2019_0155_GPU_KERNEL',
  name: 'CVE-2019-0154, CVE-2019-0155: i915 GPU privilege escalation',
  description: 'CVE-2019-0154, CVE-2019-0155: i915 GPU privilege escalation',
  cves: ['CVE-2019-0154', 'CVE-2019-0155']
}, {
  rule_id: 'CVE_2019_11135_cpu_taa|CVE_2019_11135_CPU_TAA_BADCMD',
  name: 'CVE-2019-11135: "TAA" kernel side-channel',
  description: 'CVE-2019-11135: "TAA" kernel side-channel mitigation disabled',
  cves: ['CVE-2019-11135']
}, {
  rule_id: 'CVE_2019_11135_cpu_taa|CVE_2019_11135_CPU_TAA_KERNEL',
  name: 'CVE-2019-11135: "TAA" kernel side-channel',
  description: 'CVE-2019-11135: "TAA" kernel side-channel',
  cves: ['CVE-2019-11135']
}, {
  rule_id: 'CVE_2019_11135_cpu_taa|CVE_2019_11135_CPU_TAA_UCODE',
  name: 'CVE-2019-11135: "TAA" kernel side-channel',
  description: 'CVE-2019-11135: "TAA" kernel side-channel mitigation incomplete',
  cves: ['CVE-2019-11135']
}, {
  rule_id: 'CVE_2019_1125_kernel|CVE_2019_1125_KERNEL_2',
  name: 'CVE-2019-1125: "SWAPGS" CPU side-channel',
  description: 'CVE-2019-1125: "SWAPGS" CPU side-channel',
  cves: ['CVE-2019-1125']
}, {
  rule_id: 'CVE_2019_1125_kernel|CVE_2019_1125_KERNEL_BAD_CMDLINE_2',
  name: 'CVE-2019-1125: "SWAPGS" CPU side-channel',
  description: 'CVE-2019-1125: "SWAPGS" CPU side-channel mitigation disabled',
  cves: ['CVE-2019-1125']
}, {
  rule_id: 'CVE_2019_11477_kernel|CVE_2019_11477_KERNEL',
  name: 'CVE-2019-11477, CVE-2019-11478, CVE-2019-11479: "Sack Panic" kernel denial of service',
  description: 'CVE-2019-11477, CVE-2019-11478, CVE-2019-11479: "Sack Panic" kernel denial of service',
  cves: ['CVE-2019-11477', 'CVE-2019-11478', 'CVE-2019-11479']
}, {
  rule_id: 'CVE_2019_14835_kernel|CVE_2019_14835_KERNEL_VULN_BAD',
  name: 'CVE-2019-14835: kernel privilege escalation during guest live migration',
  description: 'CVE-2019-14835: kernel privilege escalation during guest live migration with virtualization',
  cves: ['CVE-2019-14835']
}, {
  rule_id: 'CVE_2019_14835_kernel|CVE_2019_14835_KERNEL_VULN_NORMAL',
  name: 'CVE-2019-14835: kernel privilege escalation during guest live migration',
  description: 'CVE-2019-14835: kernel privilege escalation during guest live migration',
  cves: ['CVE-2019-14835']
}, {
  rule_id: 'CVE_2019_5736_runc|CVE_2019_5736_RUNC',
  name: 'CVE-2019-5736: runc privilege escalation',
  description: 'CVE-2019-5736: runc privilege escalation',
  cves: ['CVE-2019-5736']
}, {
  rule_id: 'CVEs_Top10_2015_flash_plugin|FLASH_CVES_TOP_10_2015',
  name: 'Top 10 exploited vulnerabilities in 2015',
  description: 'Top 10 exploited vulnerabilities in 2015',
  cves: ['Top 10 exploited vulnerabilities in 2015']
}, {
  rule_id: 'CVEs_Top10_2016_flash_plugin|FLASH_CVES_TOP_10_2016',
  name: 'Top 10 exploited vulnerabilities in 2016',
  description: 'Top 10 exploited vulnerabilities in 2016',
  cves: ['Top 10 exploited vulnerabilities in 2016']
}, {
  rule_id: 'CVEs_cgi_httpoxy|HTTPD_CVE_2016_5387_3',
  name: 'CVE-2016-5387: "HTTPoxy" httpd man-in-the-middle',
  description: 'CVE-2016-5387: "HTTPoxy" httpd man-in-the-middle',
  cves: ['CVE-2016-5387']
}, {
  rule_id: 'CVEs_cgi_httpoxy|HTTPD_CVE_2016_5387_URGENT_3',
  name: 'CVE-2016-5387: "HTTPoxy" httpd man-in-the-middle',
  description: 'CVE-2016-5387: "HTTPoxy" httpd man-in-the-middle with listening processes',
  cves: ['CVE-2016-5387']
}, {
  rule_id: 'CVEs_samba_badlock|SAMBA_CVE_2016_2118_CLIENT',
  name: 'CVE-2016-2118: "Badlock" Samba man-in-the-middle',
  description: 'CVE-2016-2118: "Badlock" Samba client man-in-the-middle',
  cves: ['CVE-2016-2118']
}, {
  rule_id: 'CVEs_samba_badlock|SAMBA_CVE_2016_2118_SERVER',
  name: 'CVE-2016-2118: "Badlock" Samba man-in-the-middle',
  description: 'CVE-2016-2118: "Badlock" Samba server man-in-the-middle',
  cves: ['CVE-2016-2118']
}, {
  rule_id: 'bash_injection|VULNERABLE_BASH_DETECTED',
  name: 'CVE-2014-6271, CVE-2014-7169: "Shellshock" Bash privilege escalation',
  description: 'CVE-2014-6271, CVE-2014-7169: "Shellshock" Bash privilege escalation',
  cves: ['CVE-2014-6271', 'CVE-2014-7169']
}, {
  rule_id: 'hardening_httpd_ssl_pci_dss_poodle|HTTPD_POODLE_4',
  name: 'Decreased security: httpd using deprecated TLS protocol',
  description: 'CVE-2014-3566: "POODLE" SSLv3 man-in-the-middle',
  cves: ['CVE-2014-3566']
}, {
  rule_id: 'heartbleed|HAS_HEARTBLEED',
  name: 'CVE-2014-0160: "Heartbleed" OpenSSL information disclosure',
  description: 'CVE-2014-0160: "Heartbleed" OpenSSL information disclosure',
  cves: ['CVE-2014-0160']
}, {
  rule_id: 'heartbleed|HEARTBLEED_ACCESSIBLE',
  name: 'CVE-2014-0160: "Heartbleed" OpenSSL information disclosure',
  description: 'CVE-2014-0160: "Heartbleed" OpenSSL with listening processes information disclosure',
  cves: ['CVE-2014-0160']
}, {
  rule_id: 'heartbleed|USING_HEARTBLEED_SO',
  name: 'CVE-2014-0160: "Heartbleed" OpenSSL information disclosure',
  description: 'CVE-2014-0160: "Heartbleed" OpenSSL with active processes information disclosure',
  cves: ['CVE-2014-0160']
}, {
  rule_id: 'vsftpd_poodle|VSFTPD_POODLE',
  name: 'CVE-2014-3566: "POODLE" vsftpd man-in-the-middle',
  description: 'CVE-2014-3566: "POODLE" vsftpd man-in-the-middle',
  cves: ['CVE-2014-3566']
}];

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

/***/ "?b57a":
/*!****************************!*\
  !*** ./flex.css (ignored) ***!
  \****************************/
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
//# sourceMappingURL=../sourcemaps/RecsDetails.0db4579aff3725df63e2f8ed67e13e37.js.map