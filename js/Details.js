(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{500:function(e,t,r){(e.exports=r(5)(!1)).push([e.i,"nav.pf-c-breadcrumb ol {\n  padding-left: 0;\n  margin-left: 0;\n  margin-top: 0; }\n\nnav.pf-c-breadcrumb li {\n  text-transform: capitalize;\n  margin-top: 0; }\n",""])},551:function(e,t,r){"use strict";var n=r(141),o=r.n(n),i=r(497),a=r.n(i),s=r(2),u=r.n(s),c=r(93),l=r(255),p=r(256),f=r(233),d=r.n(f),m=r(68),b=r(1),h=r.n(b),y=r(495);r(552);function v(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}var g=function(e){var t=Object(s.useState)([]),r=a()(t,2),n=r[0],o=r[1],i=Object(s.useState)(!1),f=a()(i,2),d=f[0],m=f[1],b=e.breadcrumbs,h=e.current,y=e.fetchRule,v=e.match,g=e.ruleFetchStatus,O=e.rule,j=Object(s.useCallback)(function(){var e=[];if(void 0!==b[0])e.push(b[0]);else{var t=v.url.split("/")[1];e.push({title:t,navigate:"/".concat(t)})}if(void 0!==v.params.id&&void 0!==v.params.inventoryId){var r=O.description;e.push({title:r,navigate:"/".concat(v.url.split("/")[1],"/").concat(v.params.id)})}o(e)},[b,v.params.id,v.params.inventoryId,v.url,O.description]);return Object(s.useEffect)(function(){void 0!==v.params.inventoryId?y({rule_id:v.params.id}):j()},[j,y,v.params.id,v.params.inventoryId]),Object(s.useEffect)(function(){"fulfilled"!==g||d||(m(!0),j())},[j,g,d]),u.a.createElement(u.a.Fragment,null,("fulfilled"===g||n.length>0)&&u.a.createElement(l.a,null,n.map(function(e,t){return u.a.createElement(p.a,{key:t},u.a.createElement(c.a,{to:e.navigate},e.title))}),u.a.createElement(p.a,{isActive:!0},h)),"pending"===g&&"Loading...")};g.propTypes={breadcrumbs:h.a.arrayOf(Object),current:h.a.string,fetchRule:h.a.func,match:h.a.object,rule:h.a.object,ruleFetchStatus:h.a.string};t.a=d()(Object(m.connect)(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(r,!0).forEach(function(t){o()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({breadcrumbs:e.AdvisorStore.breadcrumbs,rule:e.AdvisorStore.rule,ruleFetchStatus:e.AdvisorStore.ruleFetchStatus},e,{},t)},function(e){return{fetchRule:function(t){return e(y.a(t))}}})(g))},552:function(e,t,r){var n=r(500);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},i=r(6)(n,o);n.locals&&(e.exports=n.locals),e.hot.accept(500,function(){var t=r(500);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)}),e.hot.dispose(function(){i()})},553:function(e,t,r){(e.exports=r(5)(!1)).push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\n.titlePaddingOverride {\n  padding-bottom: var(--pf-global--spacer--sm); }\n",""])},889:function(e,t,r){var n;window,n=function(e,t,r){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./src/RemediationButton.js")}({"../../node_modules/@babel/runtime/helpers/assertThisInitialized.js":
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
/*! no static exports found */function(e,t,r){"use strict";var n=r(/*! @babel/runtime/helpers/interopRequireWildcard */"../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=r(/*! @babel/runtime/helpers/interopRequireDefault */"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(r(/*! @babel/runtime/helpers/classCallCheck */"../../node_modules/@babel/runtime/helpers/classCallCheck.js")),a=o(r(/*! @babel/runtime/helpers/createClass */"../../node_modules/@babel/runtime/helpers/createClass.js")),s=o(r(/*! @babel/runtime/helpers/possibleConstructorReturn */"../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=o(r(/*! @babel/runtime/helpers/getPrototypeOf */"../../node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=o(r(/*! @babel/runtime/helpers/assertThisInitialized */"../../node_modules/@babel/runtime/helpers/assertThisInitialized.js")),l=o(r(/*! @babel/runtime/helpers/inherits */"../../node_modules/@babel/runtime/helpers/inherits.js")),p=o(r(/*! @babel/runtime/helpers/defineProperty */"../../node_modules/@babel/runtime/helpers/defineProperty.js")),f=o(r(/*! react */"react")),d=n(r(/*! @patternfly/react-core */"@patternfly/react-core")),m=o(r(/*! prop-types */"prop-types"));var b=function(e){function t(e){var r;return(0,i.default)(this,t),r=(0,s.default)(this,(0,u.default)(t).call(this,e)),(0,p.default)((0,c.default)(r),"onClick",function(){Promise.resolve(r.props.dataProvider()).then(function(e){return r.state.remediations.openWizard(e)}).then(function(e){return e&&r.props.onRemediationCreated(e)})}),r.props=e,r.state={remediations:!1},r}return(0,l.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){var e=this;(insights.experimental&&insights.experimental.loadRemediations||insights.loadRemediations)({react:f.default,reactCore:d}).then(function(t){return e.setState({remediations:t})})}},{key:"render",value:function(){return f.default.createElement(f.default.Fragment,null,f.default.createElement(d.Button,{isDisabled:this.props.isDisabled||!1===this.state.remediations,onClick:this.onClick},this.props.children),this.state.remediations.RemediationWizard&&f.default.createElement(this.state.remediations.RemediationWizard,null))}}]),t}(f.default.Component);b.propTypes={isDisabled:m.default.bool,dataProvider:m.default.func.isRequired,onRemediationCreated:m.default.func,children:m.default.node},b.defaultProps={isDisabled:!1,onRemediationCreated:function(e){return e},children:"Remediate with Ansible"};var h=b;t.default=h},"@patternfly/react-core":
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
/*! no static exports found */function(e,t){e.exports=r}})},e.exports=n(r(50),r(1),r(2))},890:function(e,t,r){var n=r(553);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},i=r(6)(n,o);n.locals&&(e.exports=n.locals),e.hot.accept(553,function(){var t=r(553);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)}),e.hot.dispose(function(){i()})},970:function(e,t,r){"use strict";r.r(t);var n,o=r(141),i=r.n(o),a=r(142),s=r.n(a),u=r(234),c=r.n(u),l=r(98),p=r.n(l),f=r(99),d=r.n(f),m=r(100),b=r.n(m),h=r(101),y=r.n(h),v=r(102),g=r.n(v),O=r(2),j=r.n(O),P=r(233),S=r.n(P),w=r(889),_=r.n(w),E=r(335),x=r(68),R=r(1),D=r.n(R),C=r(245),k=r(551),I=r(79),F=r(495),T=r(509),A=r(715),M=r(587),z=r.n(M),N=r(75),W=r(50),q=r(10),H=r(336),L=r(237);function B(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(r,!0).forEach(function(t){i()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var U=r.n(L)()()(n=function(e){function t(){var e,r;p()(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(r=b()(this,(e=y()(t)).call.apply(e,[this].concat(o)))).state={Inventory:function(){return j.a.createElement(T.a,null)}},r.onRefresh=function(e){var t=e.page,n=e.per_page,o=r.props.items;r.setState({page:t,pageSize:n,items:z()(o.slice((t-1)*n,t*n))})},r}var r;return g()(t,e),d()(t,[{key:"componentWillMount",value:function(){this.fetchInventory()}},{key:"fetchInventory",value:(r=c()(s.a.mark(function e(){var t,r,n,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.items,e.next=3,insights.loadInventory({react:j.a,reactRouterDom:N,reactCore:W,reactIcons:q,pfReactTable:H});case 3:r=e.sent,n=r.inventoryConnector,o=r.mergeWithEntities,this.getRegistry().register(J({},o())),this.setState({Inventory:n().InventoryTable,items:z()(t.slice(0,50)),page:1,total:t.length,pageSize:50});case 8:case"end":return e.stop()}},e,this)})),function(){return r.apply(this,arguments)})},{key:"render",value:function(){var e=this.state,t=e.Inventory,r=e.items,n=e.page,o=e.total,i=e.pageSize;return j.a.createElement(t,{items:r,onRefresh:this.onRefresh,page:n,total:o,perPage:i},this.props.children)}}]),t}(j.a.Component))||n;U.propTypes={items:D.a.array,children:D.a.any};var G=U,K=r(716);r(890);function Q(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}var V=function(e){function t(){var e,r;p()(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(r=b()(this,(e=y()(t)).call.apply(e,[this].concat(o)))).state={kbaDetails:{},kbaDetailsLoading:!1},r.getSelectedItems=function(){return r.props.entities&&r.props.entities.loaded?r.props.entities.rows.filter(function(e){return e.selected}).map(function(e){return e.id}):[]},r.remediationDataProvider=function(){return{issues:[{id:"advisor:".concat(r.props.rule.rule_id),description:r.props.rule.description}],systems:r.getSelectedItems()}},r.onRemediationCreated=function(e){r.props.addNotification(e.getNotification())},r}var r;return g()(t,e),d()(t,[{key:"componentDidMount",value:(r=c()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:this.props.fetchRule({rule_id:this.props.match.params.id}),this.props.fetchSystem({rule_id:this.props.match.params.id});case 4:case"end":return e.stop()}},e,this)})),function(){return r.apply(this,arguments)})},{key:"render",value:function(){var e=this.props,t=e.match,r=e.ruleFetchStatus,n=e.rule,o=e.systemFetchStatus,i=e.system;return j.a.createElement(j.a.Fragment,null,"fulfilled"===r&&j.a.createElement(j.a.Fragment,null,j.a.createElement(E.PageHeader,null,j.a.createElement(k.a,{current:n.description||"",match:t}),j.a.createElement(E.PageHeaderTitle,{title:n.description||""}),j.a.createElement("p",null,"Publish Date: ","".concat(new Date(n.publish_date).toLocaleDateString()))),j.a.createElement(E.Main,{className:"pf-m-light pf-u-pt-sm"},j.a.createElement(K.a,{rule:n}))),"pending"===r&&j.a.createElement(T.a,null),j.a.createElement(E.Main,null,j.a.createElement(j.a.Fragment,null,"fulfilled"===r&&j.a.createElement(j.a.Fragment,null,j.a.createElement(C.a,{headingLevel:"h3",size:"2xl",className:"titlePaddingOverride"}," Affected systems"),"fulfilled"===o&&j.a.createElement(G,{items:i.host_ids},n.playbook_count>0&&j.a.createElement(_.a,{isDisabled:0===this.getSelectedItems().length,dataProvider:this.remediationDataProvider,onRemediationCreated:this.onRemediationCreated})),"pending"===o&&j.a.createElement(T.a,null)),"pending"===r&&j.a.createElement(T.a,null),"failed"===r&&j.a.createElement(A.a,{message:"There was an error fetching rules list."}))))}}]),t}(O.Component);V.propTypes={match:D.a.any,fetchRule:D.a.func,ruleFetchStatus:D.a.string,rule:D.a.object,fetchSystem:D.a.func,systemFetchStatus:D.a.string,system:D.a.object,entities:D.a.any,addNotification:D.a.func.isRequired};t.default=S()(Object(x.connect)(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(r,!0).forEach(function(t){i()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({rule:e.AdvisorStore.rule,ruleFetchStatus:e.AdvisorStore.ruleFetchStatus,system:e.AdvisorStore.system,systemFetchStatus:e.AdvisorStore.systemFetchStatus,entities:e.entities},e,{},t)},function(e){return{fetchRule:function(t){return e(F.a(t))},fetchSystem:function(t){return e(F.e(t))},addNotification:function(t){return e(Object(I.addNotification)(t))}}})(V))}}]);