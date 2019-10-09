(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1060:function(e,t,r){"use strict";r.r(t);var n,o=r(161),a=r.n(o),i=r(162),s=r.n(i),l=r(274),c=r.n(l),u=r(111),p=r.n(u),f=r(112),d=r.n(f),m=r(113),b=r.n(m),h=r(114),y=r.n(h),v=r(115),g=r.n(v),O=r(2),j=r.n(O),S=r(273),E=r.n(S),P=r(845),_=r.n(P),w=r(368),x=r(79),k=r(1),R=r.n(k),C=r(283),D=r(320),I=r(319),M=r(567),T=r(87),A=r(31),F=r(239),z=r(27),N=r(535),W=r(539),q=r(569),L=r(570),B=r.n(L),H=r(86),J=r(160),U=r(13),Y=r(370),G=r(276);function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(r,!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var V=r.n(G)()()(n=function(e){function t(){var e,r;p()(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=b()(this,(e=y()(t)).call.apply(e,[this].concat(o)))).state={Inventory:function(){return j.a.createElement(W.a,null)}},r.onRefresh=function(e){var t=e.page,n=e.per_page,o=r.props.items;r.setState({page:t,pageSize:n,items:B()(o.slice((t-1)*n,t*n))})},r}var r;return g()(t,e),d()(t,[{key:"componentWillMount",value:function(){this.fetchInventory()}},{key:"fetchInventory",value:(r=c()(s.a.mark((function e(){var t,r,n,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.items,e.next=3,insights.loadInventory({react:j.a,reactRouterDom:H,reactCore:J,reactIcons:U,pfReactTable:Y});case 3:r=e.sent,n=r.inventoryConnector,o=r.mergeWithEntities,this.getRegistry().register(Q({},o())),this.setState({Inventory:n().InventoryTable,items:B()(t.slice(0,50)),page:1,total:t.length,pageSize:50});case 8:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"render",value:function(){var e=this.state,t=e.Inventory,r=e.items,n=e.page,o=e.total,a=e.pageSize,i=this.props,s=i.children,l=i.tableProps;return j.a.createElement(t,{items:r,onRefresh:this.onRefresh,page:n,total:o,perPage:a,tableProps:l},s)}}]),t}(j.a.Component))||n;V.propTypes={items:R.a.array,children:R.a.any,tableProps:R.a.any};var X=V,Z=r(646),$=r(534);r(979);function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var te=function(e){function t(){var e,r;p()(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=b()(this,(e=y()(t)).call.apply(e,[this].concat(o)))).state={kbaDetails:{},kbaDetailsLoading:!1,selected:!1,selectedEntities:0},r.getSelectedItems=function(){var e=r.props,t=e.entities,n=e.system;return t&&t.loaded?r.state.selectedEntities===n.host_ids.length?n.host_ids:t.rows.filter((function(e){return e.selected})).map((function(e){return e.id})):[]},r.remediationDataProvider=function(){return{issues:[{id:"advisor:".concat(r.props.rule.rule_id),description:r.props.rule.description}],systems:r.getSelectedItems()}},r.onRemediationCreated=function(e){r.props.addNotification(e.getNotification())},r.bulkOnClick=function(e,t){r.setState({selected:e,selectedEntities:t}),r.props.selectEntity({selected:e})},r}var r;return g()(t,e),d()(t,[{key:"componentDidMount",value:(r=c()(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.fetchRule({rule_id:this.props.match.params.id}),this.props.fetchSystem({rule_id:this.props.match.params.id}),this.props.fetchTopics(),this.setState({selectedEntities:this.getSelectedItems().length});case 4:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"componentDidUpdate",value:function(e){this.props!==e&&this.setState({selectedEntities:this.getSelectedItems().length})}},{key:"render",value:function(){var e=this,t=this.props,r=t.match,n=t.ruleFetchStatus,o=t.rule,a=t.systemFetchStatus,i=t.system,s=t.intl,l=t.entities,c=t.topics,u=this.state,p=u.selected,f=u.selectedEntities,d=[{title:s.formatMessage($.a.selectNone),onClick:function(){return e.bulkOnClick(!1,0)}},{title:s.formatMessage($.a.selectPage,{items:l&&l.count||0}),onClick:function(){return e.bulkOnClick(!0,l&&l.count||0)}},{title:s.formatMessage($.a.selectAll,{items:i&&i.host_ids&&i.host_ids.length||0}),onClick:function(){return e.bulkOnClick(!0,i&&i.host_ids&&i.host_ids.length||0)}}];return j.a.createElement(j.a.Fragment,null,"fulfilled"===n&&j.a.createElement(j.a.Fragment,null,j.a.createElement(w.PageHeader,null,j.a.createElement(M.a,{current:o.description||"",match:r}),j.a.createElement(w.PageHeaderTitle,{title:o.description||""}),j.a.createElement("p",null,s.formatMessage($.a.rulesDetailsPubishdate,{date:new Date(o.publish_date).toLocaleDateString()}))),j.a.createElement(w.Main,{className:"pf-m-light pf-u-pt-sm"},j.a.createElement(Z.a,{rule:o,topics:c}))),"pending"===n&&j.a.createElement(W.a,null),j.a.createElement(w.Main,null,j.a.createElement(j.a.Fragment,null,"fulfilled"===n&&j.a.createElement(j.a.Fragment,null,j.a.createElement(C.a,{headingLevel:"h3",size:"2xl",className:"titlePaddingOverride"},s.formatMessage($.a.affectedSystems)),"fulfilled"===a&&j.a.createElement(X,{tableProps:{canSelectAll:!1},items:i.host_ids},o.playbook_count>0&&j.a.createElement(D.a,null,j.a.createElement(I.a,{className:"pf-u-mr-sm"},j.a.createElement(w.BulkSelect,{count:f,items:d,checked:p})),j.a.createElement(I.a,null,j.a.createElement(_.a,{isDisabled:0===f,dataProvider:this.remediationDataProvider,onRemediationCreated:this.onRemediationCreated},j.a.createElement(F.b,{size:"sm",color:z.Md.value})," ",s.formatMessage($.a.remediate))))),"pending"===a&&j.a.createElement(W.a,null)),"pending"===n&&j.a.createElement(W.a,null),"failed"===n&&j.a.createElement(q.a,{message:s.formatMessage($.a.rulesTableFetchRulesError)}))))}}]),t}(O.Component);te.propTypes={match:R.a.any,fetchRule:R.a.func,ruleFetchStatus:R.a.string,rule:R.a.object,fetchSystem:R.a.func,systemFetchStatus:R.a.string,system:R.a.object,entities:R.a.any,addNotification:R.a.func.isRequired,intl:R.a.any,selectEntity:R.a.func,fetchTopics:R.a.func,topics:R.a.array};t.default=Object(A.c)(E()(Object(x.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(r,!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({rule:e.AdvisorStore.rule,ruleFetchStatus:e.AdvisorStore.ruleFetchStatus,system:e.AdvisorStore.system,systemFetchStatus:e.AdvisorStore.systemFetchStatus,entities:e.entities,topics:e.AdvisorStore.topics},e,{},t)}),(function(e){return{fetchRule:function(t){return e(N.a(t))},fetchSystem:function(t){return e(N.e(t))},addNotification:function(t){return e(Object(T.addNotification)(t))},selectEntity:function(t){return e({type:"SELECT_ENTITY",payload:t})},fetchTopics:function(){return e(N.h())}}}))(te)))},537:function(e,t){var r=Array.isArray;e.exports=r},539:function(e,t,r){"use strict";var n=r(2),o=r.n(n),a=r(293),i=r(294),s=r(369);t.a=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,null,o.a.createElement(i.a,null,o.a.createElement(s.List,null))))}},540:function(e,t,r){var n=r(550),o=r(551),a=r(552);e.exports=function(e,t){return n(e)||o(e,t)||a()}},545:function(e,t,r){(e.exports=r(4)(!1)).push([e.i,"nav.pf-c-breadcrumb ol {\n  padding-left: 0;\n  margin-left: 0;\n  margin-top: 0; }\n\nnav.pf-c-breadcrumb li {\n  text-transform: capitalize;\n  margin-top: 0; }\n",""])},550:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},551:function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw a}}return r}}},552:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},567:function(e,t,r){"use strict";var n=r(161),o=r.n(n),a=r(540),i=r.n(a),s=r(2),l=r.n(s),c=r(86),u=r(291),p=r(292),f=r(273),d=r.n(f),m=r(79),b=r(1),h=r.n(b),y=r(31),v=r(535),g=(r(568),r(534));function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var j=function(e){var t=e.breadcrumbs,r=e.current,n=e.fetchRule,o=e.match,a=e.ruleFetchStatus,f=e.rule,d=e.intl,m=Object(s.useState)([]),b=i()(m,2),h=b[0],y=b[1],v=Object(s.useState)(!1),O=i()(v,2),j=O[0],S=O[1],E=Object(s.useCallback)((function(){var e=[];if(void 0!==t[0])e.push(t[0]);else{var r=o.url.split("/")[1];e.push({title:r,navigate:"/".concat(r)})}if(void 0!==o.params.id&&void 0!==o.params.inventoryId){var n=f.description;e.push({title:n,navigate:"/".concat(o.url.split("/")[1],"/").concat(o.params.id)})}y(e)}),[t,o.params.id,o.params.inventoryId,o.url,f.description]);return Object(s.useEffect)((function(){var e=o.url.split("/")[1];void 0!==o.params.inventoryId&&"systems"!==e?n({rule_id:o.params.id}):E()}),[E,n,o.params.id,o.params.inventoryId]),Object(s.useEffect)((function(){"fulfilled"!==a||j||(S(!0),E())}),[E,a,j]),l.a.createElement(l.a.Fragment,null,("fulfilled"===a||h.length>0)&&l.a.createElement(u.a,null,h.map((function(e,t){return l.a.createElement(p.a,{key:t},l.a.createElement(c.Link,{to:e.navigate},e.title))})),l.a.createElement(p.a,{isActive:!0},r)),"pending"===a&&d.formatMessage(g.a.loading))};j.propTypes={breadcrumbs:h.a.arrayOf(Object),current:h.a.string,fetchRule:h.a.func,match:h.a.object,rule:h.a.object,ruleFetchStatus:h.a.string,intl:h.a.any};t.a=Object(y.c)(d()(Object(m.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(r,!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({breadcrumbs:e.AdvisorStore.breadcrumbs,rule:e.AdvisorStore.rule,ruleFetchStatus:e.AdvisorStore.ruleFetchStatus},e,{},t)}),(function(e){return{fetchRule:function(t){return e(v.a(t))}}}))(j)))},568:function(e,t,r){var n=r(545);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=r(5)(n,o);n.locals&&(e.exports=n.locals),e.hot.accept(545,(function(){var t=r(545);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)})),e.hot.dispose((function(){a()}))},569:function(e,t,r){"use strict";var n=r(2),o=r.n(n),a=r(293),i=r(295),s=r(294),l=r(237),c=r(1),u=r.n(c),p=function(e){var t=e.message;return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,{className:"ins-empty-rule-cards"},o.a.createElement(i.a,null,o.a.createElement(l.b,{size:"lg"})),o.a.createElement(s.a,null,t)))};t.a=p,p.propTypes={message:u.a.string}},621:function(e,t,r){(e.exports=r(4)(!1)).push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\n.titlePaddingOverride {\n  padding-bottom: var(--pf-global--spacer--sm); }\n",""])},845:function(e,t,r){var n;window,n=function(e,t,r){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./src/RemediationButton.js")}({"../../node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!*********************************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},"../../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!**************************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"../../node_modules/@babel/runtime/helpers/createClass.js":
/*!***********************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/createClass.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},"../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!**************************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},"../../node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!**************************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},"../../node_modules/@babel/runtime/helpers/inherits.js":
/*!********************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/inherits.js ***!
  \********************************************************************************************************************/
/*! no static exports found */function(e,t,r){var n=r(/*! ./setPrototypeOf */"../../node_modules/@babel/runtime/helpers/setPrototypeOf.js");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*********************************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!**********************************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}},"../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */function(e,t,r){var n=r(/*! ../helpers/typeof */"../../node_modules/@babel/runtime/helpers/typeof.js"),o=r(/*! ./assertThisInitialized */"../../node_modules/@babel/runtime/helpers/assertThisInitialized.js");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},"../../node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!**************************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},"../../node_modules/@babel/runtime/helpers/typeof.js":
/*!******************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/typeof.js ***!
  \******************************************************************************************************************/
/*! no static exports found */function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(t){return"function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?e.exports=n=function(e){return r(e)}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)},n(t)}e.exports=n},"./src/RemediationButton.js":
/*!**********************************!*\
  !*** ./src/RemediationButton.js ***!
  \**********************************/
/*! no static exports found */function(e,t,r){"use strict";var n=r(/*! @babel/runtime/helpers/interopRequireWildcard */"../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=r(/*! @babel/runtime/helpers/interopRequireDefault */"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(/*! @babel/runtime/helpers/classCallCheck */"../../node_modules/@babel/runtime/helpers/classCallCheck.js")),i=o(r(/*! @babel/runtime/helpers/createClass */"../../node_modules/@babel/runtime/helpers/createClass.js")),s=o(r(/*! @babel/runtime/helpers/possibleConstructorReturn */"../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),l=o(r(/*! @babel/runtime/helpers/getPrototypeOf */"../../node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=o(r(/*! @babel/runtime/helpers/assertThisInitialized */"../../node_modules/@babel/runtime/helpers/assertThisInitialized.js")),u=o(r(/*! @babel/runtime/helpers/inherits */"../../node_modules/@babel/runtime/helpers/inherits.js")),p=o(r(/*! @babel/runtime/helpers/defineProperty */"../../node_modules/@babel/runtime/helpers/defineProperty.js")),f=o(r(/*! react */"react")),d=n(r(/*! @patternfly/react-core */"@patternfly/react-core")),m=o(r(/*! prop-types */"prop-types")),b=function(e){function t(e){var r;return(0,a.default)(this,t),r=(0,s.default)(this,(0,l.default)(t).call(this,e)),(0,p.default)((0,c.default)(r),"onClick",(function(){Promise.resolve(r.props.dataProvider()).then((function(e){return r.state.remediations.openWizard(e)})).then((function(e){return e&&r.props.onRemediationCreated(e)}))})),r.props=e,r.state={remediations:!1},r}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){var e=this;(insights.experimental&&insights.experimental.loadRemediations||insights.loadRemediations)({react:f.default,reactCore:d}).then((function(t){return e.setState({remediations:t})}))}},{key:"render",value:function(){return f.default.createElement(f.default.Fragment,null,f.default.createElement(d.Button,{isDisabled:this.props.isDisabled||!1===this.state.remediations,onClick:this.onClick},this.props.children),this.state.remediations.RemediationWizard&&f.default.createElement(this.state.remediations.RemediationWizard,null))}}]),t}(f.default.Component);b.propTypes={isDisabled:m.default.bool,dataProvider:m.default.func.isRequired,onRemediationCreated:m.default.func,children:m.default.node},b.defaultProps={isDisabled:!1,onRemediationCreated:function(e){return e},children:"Remediate with Ansible"};var h=b;t.default=h},"@patternfly/react-core":
/*!***********************************************************************************************************************************************!*\
  !*** external {"commonjs":"@patternfly/react-core","commonjs2":"@patternfly/react-core","amd":"@patternfly/react-core","root":"PFReactCore"} ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */function(t,r){t.exports=e},"prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */function(e,r){e.exports=t},react:
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */function(e,t){e.exports=r}})},e.exports=n(r(160),r(1),r(2))},979:function(e,t,r){var n=r(621);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=r(5)(n,o);n.locals&&(e.exports=n.locals),e.hot.accept(621,(function(){var t=r(621);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)})),e.hot.dispose((function(){a()}))}}]);