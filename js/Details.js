(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{514:function(e,t,n){(e.exports=n(5)(!1)).push([e.i,"nav.pf-c-breadcrumb ol {\n  padding-left: 0;\n  margin-left: 0;\n  margin-top: 0; }\n\nnav.pf-c-breadcrumb li {\n  text-transform: capitalize;\n  margin-top: 0; }\n",""])},528:function(e,t,n){"use strict";var r=n(238),o=n.n(r),a=n(518),i=n.n(a),s=n(2),u=n.n(s),l=n(102),c=n(259),p=n(260),d=n(237),f=n.n(d),m=n(75),h=n(515),b=n(1),y=n.n(b),v=(n(532),function(e){var t=Object(s.useState)([]),n=i()(t,2),r=n[0],o=n[1],a=Object(s.useState)(!1),d=i()(a,2),f=d[0],m=d[1],h=e.breadcrumbs,b=e.current,y=e.fetchRule,v=e.match,g=e.ruleFetchStatus,j=e.rule,S=Object(s.useCallback)(function(){var e,t=[];if(void 0!==v.params.type)if(void 0!==h[0])t.push(h[0]);else{var n=v.url.split("/")[1];t.push({title:n,navigate:"/".concat(n)})}if(void 0!==v.params.type&&void 0!==v.params.id&&"Rules"!==t[0].title){var r=(e=v.params.type).indexOf("-")>-1?"".concat(e.replace("-"," ")," Overview"):e;t.push({title:r,navigate:"".concat(t[0].navigate,"/").concat(v.params.type)})}if(void 0!==v.params.id&&void 0!==v.params.inventoryId){var a=j.description;void 0!==t[1]?t.push({title:a,navigate:"".concat(t[1].navigate,"/").concat(v.params.id)}):t.push({title:a,navigate:"/".concat(v.url.split("/")[1],"/").concat(v.params.type,"/").concat(v.params.id)})}o(t)},[h,v.params.id,v.params.inventoryId,v.params.type,v.url,j.description]);return Object(s.useEffect)(function(){void 0!==v.params.inventoryId?y({rule_id:v.params.id}):S()},[S,y,v.params.id,v.params.inventoryId]),Object(s.useEffect)(function(){"fulfilled"!==g||f||(m(!0),S())},[S,g,f]),u.a.createElement(u.a.Fragment,null,("fulfilled"===g||r.length>0)&&u.a.createElement(c.a,null,r.map(function(e,t){return u.a.createElement(p.a,{key:t},u.a.createElement(l.a,{to:e.navigate},e.title))}),u.a.createElement(p.a,{isActive:!0},b)),"pending"===g&&"Loading...")});v.propTypes={breadcrumbs:y.a.arrayOf(Object),current:y.a.string,fetchRule:y.a.func,match:y.a.object,rule:y.a.object,ruleFetchStatus:y.a.string};t.a=f()(Object(m.connect)(function(e,t){return o()({breadcrumbs:e.AdvisorStore.breadcrumbs,rule:e.AdvisorStore.rule,ruleFetchStatus:e.AdvisorStore.ruleFetchStatus},e,t)},function(e){return{fetchRule:function(t){return e(h.a(t))}}})(v))},532:function(e,t,n){var r=n(514);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(6)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(514,function(){var t=n(514);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)}),e.hot.dispose(function(){a()})},563:function(e,t,n){(e.exports=n(5)(!1)).push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\n.titlePaddingOverride {\n  padding-bottom: var(--pf-global--spacer--sm); }\n",""])},789:function(e,t,n){var r;window,r=function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/RemediationButton.js")}({"../../node_modules/@babel/runtime/helpers/assertThisInitialized.js":
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
/*! no static exports found */function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},"../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!**************************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},"../../node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!**************************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},"../../node_modules/@babel/runtime/helpers/inherits.js":
/*!********************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/inherits.js ***!
  \********************************************************************************************************************/
/*! no static exports found */function(e,t,n){var r=n(/*! ./setPrototypeOf */"../../node_modules/@babel/runtime/helpers/setPrototypeOf.js");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*********************************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!**********************************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}},"../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){var r=n(/*! ../helpers/typeof */"../../node_modules/@babel/runtime/helpers/typeof.js"),o=n(/*! ./assertThisInitialized */"../../node_modules/@babel/runtime/helpers/assertThisInitialized.js");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},"../../node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!**************************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},"../../node_modules/@babel/runtime/helpers/typeof.js":
/*!******************************************************************************************************************!*\
  !*** /home/khala/Documents/git/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/typeof.js ***!
  \******************************************************************************************************************/
/*! no static exports found */function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},"./src/RemediationButton.js":
/*!**********************************!*\
  !*** ./src/RemediationButton.js ***!
  \**********************************/
/*! no static exports found */function(e,t,n){"use strict";var r=n(/*! @babel/runtime/helpers/interopRequireWildcard */"../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n(/*! @babel/runtime/helpers/interopRequireDefault */"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(/*! @babel/runtime/helpers/classCallCheck */"../../node_modules/@babel/runtime/helpers/classCallCheck.js")),i=o(n(/*! @babel/runtime/helpers/createClass */"../../node_modules/@babel/runtime/helpers/createClass.js")),s=o(n(/*! @babel/runtime/helpers/possibleConstructorReturn */"../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=o(n(/*! @babel/runtime/helpers/getPrototypeOf */"../../node_modules/@babel/runtime/helpers/getPrototypeOf.js")),l=o(n(/*! @babel/runtime/helpers/assertThisInitialized */"../../node_modules/@babel/runtime/helpers/assertThisInitialized.js")),c=o(n(/*! @babel/runtime/helpers/inherits */"../../node_modules/@babel/runtime/helpers/inherits.js")),p=o(n(/*! @babel/runtime/helpers/defineProperty */"../../node_modules/@babel/runtime/helpers/defineProperty.js")),d=o(n(/*! react */"react")),f=r(n(/*! @patternfly/react-core */"@patternfly/react-core")),m=o(n(/*! prop-types */"prop-types"));var h=function(e){function t(e){var n;return(0,a.default)(this,t),n=(0,s.default)(this,(0,u.default)(t).call(this,e)),(0,p.default)((0,l.default)(n),"onClick",function(){Promise.resolve(n.props.dataProvider()).then(function(e){return n.state.remediations.openWizard(e)}).then(function(e){return e&&n.props.onRemediationCreated(e)})}),n.props=e,n.state={remediations:!1},n}return(0,c.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){var e=this;(insights.experimental&&insights.experimental.loadRemediations||insights.loadRemediations)({react:d.default,reactCore:f}).then(function(t){return e.setState({remediations:t})})}},{key:"render",value:function(){return d.default.createElement(d.default.Fragment,null,d.default.createElement(f.Button,{isDisabled:this.props.isDisabled||!1===this.state.remediations,onClick:this.onClick},this.props.children),this.state.remediations.RemediationWizard&&d.default.createElement(this.state.remediations.RemediationWizard,null))}}]),t}(d.default.Component);h.propTypes={isDisabled:m.default.bool,dataProvider:m.default.func.isRequired,onRemediationCreated:m.default.func,children:m.default.node},h.defaultProps={isDisabled:!1,onRemediationCreated:function(e){return e},children:"Remediate with Ansible"};var b=h;t.default=b},"@patternfly/react-core":
/*!***********************************************************************************************************************************************!*\
  !*** external {"commonjs":"@patternfly/react-core","commonjs2":"@patternfly/react-core","amd":"@patternfly/react-core","root":"PFReactCore"} ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */function(t,n){t.exports=e},"prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */function(e,n){e.exports=t},react:
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */function(e,t){e.exports=n}})},e.exports=r(n(147),n(1),n(2))},905:function(e,t,n){var r=n(563);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(6)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(563,function(){var t=n(563);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)}),e.hot.dispose(function(){a()})},997:function(e,t,n){"use strict";n.r(t);var r,o=n(238),a=n.n(o),i=n(148),s=n.n(i),u=n(239),l=n.n(u),c=n(106),p=n.n(c),d=n(107),f=n.n(d),m=n(108),h=n.n(m),b=n(109),y=n.n(b),v=n(110),g=n.n(v),j=n(2),S=n.n(j),_=n(237),O=n.n(_),x=n(789),R=n.n(x),w=n(346),E=n(75),P=n(1),C=n.n(P),k=n(252),I=n(528),D=n(87),F=n(515),T=n(527),A=n(605),M=n(606),z=n.n(M),N=n(84),W=n(147),q=n(12),H=n(347),L=n(242),B=n.n(L)()()(r=function(e){function t(){var e,n;p()(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=h()(this,(e=y()(t)).call.apply(e,[this].concat(o)))).state={Inventory:function(){return S.a.createElement(T.a,null)}},n.onRefresh=function(e){var t=e.page,r=e.per_page,o=n.props.items;n.setState({page:t,pageSize:r,items:z()(o.slice((t-1)*r,t*r))})},n}return g()(t,e),f()(t,[{key:"componentWillMount",value:function(){this.fetchInventory()}},{key:"fetchInventory",value:function(){var e=l()(s.a.mark(function e(){var t,n,r,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.items,e.next=3,insights.loadInventory({react:S.a,reactRouterDom:N,reactCore:W,reactIcons:q,pfReactTable:H});case 3:n=e.sent,r=n.inventoryConnector,o=n.mergeWithEntities,this.getRegistry().register(a()({},o())),this.setState({Inventory:r().InventoryTable,items:z()(t.slice(0,50)),page:1,total:t.length,pageSize:50});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.Inventory,n=e.items,r=e.page,o=e.total,a=e.pageSize;return S.a.createElement(t,{items:n,onRefresh:this.onRefresh,page:r,total:o,perPage:a},this.props.children)}}]),t}(S.a.Component))||r;B.propTypes={items:C.a.array,children:C.a.any};var J=B,U=n(607),G=(n(905),function(e){function t(){var e,n;p()(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=h()(this,(e=y()(t)).call.apply(e,[this].concat(o)))).state={kbaDetails:{},kbaDetailsLoading:!1},n.getSelectedItems=function(){return n.props.entities&&n.props.entities.loaded?n.props.entities.rows.filter(function(e){return e.selected}).map(function(e){return e.id}):[]},n.remediationDataProvider=function(){return{issues:[{id:"advisor:".concat(n.props.rule.rule_id),description:n.props.rule.description}],systems:n.getSelectedItems()}},n.onRemediationCreated=function(e){n.props.addNotification(e.getNotification())},n}return g()(t,e),f()(t,[{key:"componentDidMount",value:function(){var e=l()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:this.props.fetchRule({rule_id:this.props.match.params.id}),this.props.fetchSystem({rule_id:this.props.match.params.id});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.match,n=e.ruleFetchStatus,r=e.rule,o=e.systemFetchStatus,a=e.system;return S.a.createElement(S.a.Fragment,null,"fulfilled"===n&&S.a.createElement(S.a.Fragment,null,S.a.createElement(w.PageHeader,null,S.a.createElement(I.a,{current:r.description||"",match:t}),S.a.createElement(w.PageHeaderTitle,{title:r.description||""}),S.a.createElement("p",null,"Publish Date: ","".concat(new Date(r.publish_date).toLocaleDateString()))),S.a.createElement(w.Main,{className:"pf-m-light pf-u-pt-sm"},S.a.createElement(U.a,{rule:r}))),"pending"===n&&S.a.createElement(T.a,null),S.a.createElement(w.Main,null,S.a.createElement(S.a.Fragment,null,"fulfilled"===n&&S.a.createElement(S.a.Fragment,null,S.a.createElement(k.a,{headingLevel:"h3",size:"2xl",className:"titlePaddingOverride"}," Affected systems"),"fulfilled"===o&&S.a.createElement(J,{items:a.host_ids},r.playbook_count>0&&S.a.createElement(R.a,{isDisabled:0===this.getSelectedItems().length,dataProvider:this.remediationDataProvider,onRemediationCreated:this.onRemediationCreated})),"pending"===o&&S.a.createElement(T.a,null)),"pending"===n&&S.a.createElement(T.a,null),"failed"===n&&S.a.createElement(A.a,{message:"There was an error fetching rules list."}))))}}]),t}(j.Component));G.propTypes={match:C.a.any,fetchRule:C.a.func,ruleFetchStatus:C.a.string,rule:C.a.object,fetchSystem:C.a.func,systemFetchStatus:C.a.string,system:C.a.object,entities:C.a.any,addNotification:C.a.func.isRequired};t.default=O()(Object(E.connect)(function(e,t){return a()({rule:e.AdvisorStore.rule,ruleFetchStatus:e.AdvisorStore.ruleFetchStatus,system:e.AdvisorStore.system,systemFetchStatus:e.AdvisorStore.systemFetchStatus,entities:e.entities},e,t)},function(e){return{fetchRule:function(t){return e(F.a(t))},fetchSystem:function(t){return e(F.e(t))},addNotification:function(t){return e(Object(D.addNotification)(t))}}})(G))}}]);