(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{507:function(e,t,n){(e.exports=n(6)(!1)).push([e.i,"nav.pf-c-breadcrumb ol {\n  padding-left: 0;\n  margin-left: 0;\n  margin-top: 0; }\n\nnav.pf-c-breadcrumb li {\n  text-transform: capitalize;\n  margin-top: 0; }\n",""])},519:function(e,t,n){"use strict";var r=n(190),o=n.n(r),a=n(69),i=n.n(a),s=n(70),u=n.n(s),l=n(71),c=n.n(l),p=n(72),d=n.n(p),f=n(299),m=n.n(f),h=n(73),b=n.n(h),y=n(106),v=n.n(y),g=n(2),S=n.n(g),j=n(67),_=n(215),O=n(216),R=n(191),x=n.n(R),w=n(46),P=n(511),E=n(1),C=n.n(E),k=(n(520),function(e){function t(){var e,n;i()(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=c()(this,(e=d()(t)).call.apply(e,[this].concat(o))),v()(m()(n),"state",{items:[],ruleDescriptionLoaded:!1}),v()(m()(n),"getReadableType",function(e){return e.indexOf("-")>-1?"".concat(e.replace("-"," ")," Overview"):e}),n}return b()(t,e),u()(t,[{key:"componentDidMount",value:function(){void 0!==this.props.match.params.inventoryId?this.props.fetchRule({rule_id:this.props.match.params.id}):this.buildBreadcrumbs()}},{key:"componentDidUpdate",value:function(){"fulfilled"!==this.props.ruleFetchStatus||this.state.ruleDescriptionLoaded||(this.setState({ruleDescriptionLoaded:!0}),this.buildBreadcrumbs())}},{key:"buildBreadcrumbs",value:function(){var e=this.props,t=e.breadcrumbs,n=e.match,r=[];if(void 0!==n.params.type)if(void 0!==t[0])r.push(t[0]);else{var o=n.url.split("/")[1];r.push({title:o,navigate:"/".concat(o)})}if(void 0!==n.params.type&&void 0!==n.params.id&&"Rules"!==r[0].title){var a=this.getReadableType(n.params.type);r.push({title:a,navigate:"".concat(r[0].navigate,"/").concat(n.params.type)})}if(void 0!==n.params.id&&void 0!==n.params.inventoryId){var i=this.props.rule.description;void 0!==r[1]?r.push({title:i,navigate:"".concat(r[1].navigate,"/").concat(n.params.id)}):r.push({title:i,navigate:"/".concat(n.url.split("/")[1],"/").concat(n.params.type,"/").concat(n.params.id)})}this.setState({items:r})}},{key:"render",value:function(){var e=this.props.ruleFetchStatus,t=this.state.items;return S.a.createElement(S.a.Fragment,null,("fulfilled"===e||t.length>0)&&S.a.createElement(_.a,null,t.map(function(e,t){return S.a.createElement(O.a,{key:t},S.a.createElement(j.a,{to:e.navigate},e.title))}),S.a.createElement(O.a,{isActive:!0},this.props.current)),"pending"===e&&"Loading...")}}]),t}(S.a.Component));k.propTypes={breadcrumbs:C.a.arrayOf(Object),current:C.a.string,fetchRule:C.a.func,match:C.a.object,rule:C.a.object,ruleFetchStatus:C.a.string};t.a=x()(Object(w.connect)(function(e,t){return o()({breadcrumbs:e.AdvisorStore.breadcrumbs,rule:e.AdvisorStore.rule,ruleFetchStatus:e.AdvisorStore.ruleFetchStatus},e,t)},function(e){return{fetchRule:function(t){return e(P.a(t))}}})(k))},520:function(e,t,n){var r=n(507);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(7)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(507,function(){var t=n(507);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)}),e.hot.dispose(function(){a()})},547:function(e,t,n){(e.exports=n(6)(!1)).push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\n.titlePaddingOverride {\n  padding-bottom: var(--pf-global--spacer--sm); }\n",""])},752:function(e,t,n){var r;window,r=function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/RemediationButton.js")}({"../../node_modules/@babel/runtime/helpers/assertThisInitialized.js":
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
/*! no static exports found */function(e,t){e.exports=n}})},e.exports=r(n(27),n(1),n(2))},867:function(e,t,n){var r=n(547);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(7)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(547,function(){var t=n(547);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)}),e.hot.dispose(function(){a()})},934:function(e,t,n){"use strict";n.r(t);var r,o=n(190),a=n.n(o),i=n(107),s=n.n(i),u=n(192),l=n.n(u),c=n(69),p=n.n(c),d=n(70),f=n.n(d),m=n(71),h=n.n(m),b=n(72),y=n.n(b),v=n(299),g=n.n(v),S=n(73),j=n.n(S),_=n(106),O=n.n(_),R=n(2),x=n.n(R),w=n(191),P=n.n(w),E=n(752),C=n.n(E),k=n(300),D=n(46),F=n(1),I=n.n(F),T=n(208),A=n(519),M=n(54),z=n(511),L=n(518),N=n(573),W=n(574),q=n.n(W),B=n(51),H=n(27),J=n(12),U=n(312),G=n(198),K=n.n(G)()()(r=function(e){function t(){var e,n;p()(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=h()(this,(e=y()(t)).call.apply(e,[this].concat(o))),O()(g()(n),"state",{Inventory:function(){return x.a.createElement(L.a,null)}}),O()(g()(n),"onRefresh",function(e){var t=e.page,r=e.per_page,o=n.props.items;n.setState({page:t,pageSize:r,items:q()(o.slice((t-1)*r,t*r))})}),n}return j()(t,e),f()(t,[{key:"componentWillMount",value:function(){this.fetchInventory()}},{key:"fetchInventory",value:function(){var e=l()(s.a.mark(function e(){var t,n,r,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.items,e.next=3,insights.loadInventory({react:x.a,reactRouterDom:B,reactCore:H,reactIcons:J,pfReactTable:U});case 3:n=e.sent,r=n.inventoryConnector,o=n.mergeWithEntities,this.getRegistry().register(a()({},o())),this.setState({Inventory:r().InventoryTable,items:q()(t.slice(0,50)),page:1,total:t.length,pageSize:50});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.Inventory,n=e.items,r=e.page,o=e.total,a=e.pageSize;return x.a.createElement(t,{items:n,onRefresh:this.onRefresh,page:r,total:o,perPage:a},this.props.children)}}]),t}(x.a.Component))||r;K.propTypes={items:I.a.array,children:I.a.any};var Q=K,V=n(575),X=(n(867),function(e){function t(){var e,n;p()(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=h()(this,(e=y()(t)).call.apply(e,[this].concat(o))),O()(g()(n),"state",{kbaDetails:{},kbaDetailsLoading:!1}),O()(g()(n),"getSelectedItems",function(){return n.props.entities&&n.props.entities.loaded?n.props.entities.rows.filter(function(e){return e.selected}).map(function(e){return e.id}):[]}),O()(g()(n),"remediationDataProvider",function(){return{issues:[{id:"advisor:".concat(n.props.rule.rule_id),description:n.props.rule.description}],systems:n.getSelectedItems()}}),O()(g()(n),"onRemediationCreated",function(e){n.props.addNotification(e.getNotification())}),n}return j()(t,e),f()(t,[{key:"componentDidMount",value:function(){var e=l()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:this.props.fetchRule({rule_id:this.props.match.params.id}),this.props.fetchSystem({rule_id:this.props.match.params.id});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.match,n=e.ruleFetchStatus,r=e.rule,o=e.systemFetchStatus,a=e.system;return x.a.createElement(x.a.Fragment,null,"fulfilled"===n&&x.a.createElement(x.a.Fragment,null,x.a.createElement(k.PageHeader,null,x.a.createElement(A.a,{current:r.description||"",match:t}),x.a.createElement(k.PageHeaderTitle,{title:r.description||""}),x.a.createElement("p",null,"Publish Date: ","".concat(new Date(r.publish_date).toLocaleDateString()))),x.a.createElement(k.Main,{className:"pf-m-light pf-u-pt-sm"},x.a.createElement(V.a,{rule:r}))),"pending"===n&&x.a.createElement(L.a,null),x.a.createElement(k.Main,null,x.a.createElement(x.a.Fragment,null,"fulfilled"===n&&x.a.createElement(x.a.Fragment,null,x.a.createElement(T.a,{headingLevel:"h3",size:"2xl",className:"titlePaddingOverride"}," Affected systems"),"fulfilled"===o&&x.a.createElement(Q,{items:a.host_ids},r.playbook_count>0&&x.a.createElement(C.a,{isDisabled:0===this.getSelectedItems().length,dataProvider:this.remediationDataProvider,onRemediationCreated:this.onRemediationCreated})),"pending"===o&&x.a.createElement(L.a,null)),"pending"===n&&x.a.createElement(L.a,null),"failed"===n&&x.a.createElement(N.a,{message:"There was an error fetching rules list."}))))}}]),t}(R.Component));X.propTypes={match:I.a.any,fetchRule:I.a.func,ruleFetchStatus:I.a.string,rule:I.a.object,fetchSystem:I.a.func,systemFetchStatus:I.a.string,system:I.a.object,entities:I.a.any,addNotification:I.a.func.isRequired};t.default=P()(Object(D.connect)(function(e,t){return a()({rule:e.AdvisorStore.rule,ruleFetchStatus:e.AdvisorStore.ruleFetchStatus,system:e.AdvisorStore.system,systemFetchStatus:e.AdvisorStore.systemFetchStatus,entities:e.entities},e,t)},function(e){return{fetchRule:function(t){return e(z.a(t))},fetchSystem:function(t){return e(z.e(t))},addNotification:function(t){return e(Object(M.addNotification)(t))}}})(X))}}]);
//# sourceMappingURL=../sourcemaps/Details.js.map