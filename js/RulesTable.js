(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{431:function(e,t,r){var a=r(462),n=r(463),o=r(464);e.exports=function(e){return a(e)||n(e)||o()}},462:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},463:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},464:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},465:function(e,t,r){(e.exports=r(6)(!1)).push([e.i,".pf-c-check__label #battery_svg{height:1.25rem}\n",""])},466:function(e,t,r){var a;window,a=function(e,t,r,a){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./src/Components/TableToolbar/index.js")}({"../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!*******************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},"../../node_modules/@babel/runtime/helpers/extends.js":
/*!************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/extends.js ***!
  \************************************************************************************************************/
/*! no static exports found */function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},r.apply(this,arguments)}e.exports=r},"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**************************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***************************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}},"../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!****************************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */function(e,t,r){var a=r(/*! ./objectWithoutPropertiesLoose */"../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");e.exports=function(e,t){if(null==e)return{};var r,n,o=a(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}},"../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}},"./src/Components/TableToolbar/TableToolbar.js":
/*!*****************************************************!*\
  !*** ./src/Components/TableToolbar/TableToolbar.js ***!
  \*****************************************************/
/*! no static exports found */function(e,t,r){"use strict";var a=r(/*! @babel/runtime/helpers/interopRequireWildcard */"../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),n=r(/*! @babel/runtime/helpers/interopRequireDefault */"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(/*! @babel/runtime/helpers/extends */"../../node_modules/@babel/runtime/helpers/extends.js")),l=n(r(/*! @babel/runtime/helpers/defineProperty */"../../node_modules/@babel/runtime/helpers/defineProperty.js")),i=n(r(/*! @babel/runtime/helpers/objectWithoutProperties */"../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=a(r(/*! react */"react")),c=n(r(/*! prop-types */"prop-types")),u=r(/*! @patternfly/react-core/dist/js/layouts/Toolbar/Toolbar.js */"@patternfly/react-core/dist/js/layouts/Toolbar/Toolbar.js"),f=n(r(/*! classnames */"classnames"));r(/*! ./TableToolbar.scss */"./src/Components/TableToolbar/TableToolbar.scss");var p=function(e){var t=e.isFooter,r=e.results,a=e.className,n=e.selected,c=e.children,p=(0,i.default)(e,["isFooter","results","className","selected","children"]),d=(0,f.default)("ins-c-table__toolbar",(0,l.default)({},"ins-m-footer",t),a);return s.default.createElement(s.Fragment,null,s.default.createElement(u.Toolbar,(0,o.default)({className:d},p)," ",c),(r>=0||n>=0)&&s.default.createElement("div",{className:"ins-c-table__toolbar-results"},r>=0&&s.default.createElement("span",{className:"ins-c-table__toolbar-results-count"}," ",function(e){return"".concat(e,e>1||e<1?" Results":" Result")}(r)," "),n>=0&&s.default.createElement("span",{className:"ins-c-table__toolbar-results-selected"}," ",n," Selected ")))},d=p;t.default=d,p.propTypes={isFooter:c.default.bool,results:c.default.number,children:c.default.any,className:c.default.string,selected:c.default.number},p.defaultProps={isFooter:!1}},"./src/Components/TableToolbar/TableToolbar.scss":
/*!*******************************************************!*\
  !*** ./src/Components/TableToolbar/TableToolbar.scss ***!
  \*******************************************************/
/*! no static exports found */function(e,t,r){},"./src/Components/TableToolbar/index.js":
/*!**********************************************!*\
  !*** ./src/Components/TableToolbar/index.js ***!
  \**********************************************/
/*! no static exports found */function(e,t,r){"use strict";var a=r(/*! @babel/runtime/helpers/interopRequireDefault */"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"TableToolbar",{enumerable:!0,get:function(){return n.default}});var n=a(r(/*! ./TableToolbar.js */"./src/Components/TableToolbar/TableToolbar.js"))},"@patternfly/react-core/dist/js/layouts/Toolbar/Toolbar.js":
/*!****************************************************************************!*\
  !*** external "@patternfly/react-core/dist/js/layouts/Toolbar/Toolbar.js" ***!
  \****************************************************************************/
/*! no static exports found */function(t,r){t.exports=e},classnames:
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */function(e,r){e.exports=t},"prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */function(e,t){e.exports=r},react:
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */function(e,t){e.exports=a}})},e.exports=a(r(467),r(27),r(1),r(0))},467:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Toolbar=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=function(e){if(e&&e.__esModule)return e;var t=i();if(t&&t.has(e))return t.get(e);var r={};if(null!=e){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=a?Object.getOwnPropertyDescriptor(e,n):null;o&&(o.get||o.set)?Object.defineProperty(r,n,o):r[n]=e[n]}}r.default=e,t&&t.set(e,r);return r}(r(0)),l=r(2);function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}r(230);var u=function(e){var t=e.children,r=void 0===t?null:t,a=e.className,n=void 0===a?null:a,i=c(e,["children","className"]);return o.createElement("div",s({},i,{className:(0,l.css)("pf-l-toolbar",n)}),r)};t.Toolbar=u,u.propTypes={children:n.default.node,className:n.default.string}},518:function(e,t,r){"use strict";r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return p}));var a=r(91),n=r.n(a),o=r(157),l=r.n(o),i=r(431),s=r.n(i);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var u=function(e,t){var r="?".concat(Object.keys(e).map((function(t){return"".concat(t,"=").concat(Array.isArray(e[t])?e[t].join():e[t])})).join("&"));return t&&t.replace({search:r}),r},f=function(e){return Object.assign.apply(Object,[{}].concat(s()(Object.entries(e).map((function(e){var t=l()(e,2),r=t[0],a=t[1];return Array.isArray(a)?("true"===a[0]||"false"===a[0])&&a.length>1?null:n()({},r,a.join()):n()({},r,a)})))))},p=function(e){var t=new URLSearchParams(e.location.search);return Array.from(t).reduce((function(e,t){var r=l()(t,2),a=r[0],o=r[1];return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,n()({},a,"true"===o||"false"===o?JSON.parse(o):o.split(",")))}),{})}},519:function(e,t,r){"use strict";var a=r(157),n=r.n(a),o=r(0);t.a=function(e,t){var r=Object(o.useState)(e),a=n()(r,2),l=a[0],i=a[1];return Object(o.useEffect)((function(){var r=setTimeout((function(){i(e)}),t);return function(){clearTimeout(r)}}),[t,e]),l}},682:function(e,t,r){"use strict";r.r(t);var a=r(92),n=r.n(a),o=r(158),l=r.n(o),i=r(431),s=r.n(i),c=r(91),u=r.n(c),f=r(157),p=r.n(f),d=(r(683),r(417)),m=r(5),b=r(93),E=r(0),y=r.n(E),O=r(229),T=r(204),_=r(205),v=r(22),g=r(208),h=r(207),R=r(61),j=r(518),I=r(421),S=r(238),P=r.n(S),k=r(52),A=r(471),C=r.n(A),F=r(30),L=r(165),w=r.n(L),G=r(98),x=r.n(G),M=r(438),N=r(477),D=r(435),B=r(60),V=r(436),H=r(432),W=r(437),q=r(517),z=r(1),J=r.n(z),U=r(524),K=r(520),Q=r(466),X=r(521),Y=r(38),Z=r(59),$=r(519),ee=r(12),te=r(10),re=r(159),ae=r.n(re);function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var le=function(e){var t=e.rules,r=e.filters,a=e.rulesFetchStatus,o=e.setFilters,i=e.fetchRules,c=e.addNotification,f=e.history,d=e.intl,S=e.selectedTags,A=Object(E.useState)([{title:d.formatMessage(te.a.description),transforms:[T.a]},{title:d.formatMessage(te.a.added),transforms:[T.a,Object(_.a)(15)]},{title:d.formatMessage(te.a.totalRisk),transforms:[T.a,Object(_.a)(15)]},{title:d.formatMessage(te.a.systems),transforms:[T.a]},{title:y.a.createElement(y.a.Fragment,null,y.a.createElement(P.a,{size:"md"})," ",d.formatMessage(te.a.ansible)),transforms:[T.a],dataLabel:d.formatMessage(te.a.ansible)}]),L=p()(A,1)[0],G=Object(E.useState)([]),z=p()(G,2),J=z[0],Y=z[1],Z=Object(E.useState)({}),ee=p()(Z,2),re=ee[0],ae=ee[1],ne=Object(E.useState)(r.impacting),le=p()(ne,2),ie=le[0],se=le[1],ce=Object(E.useState)(!0),ue=p()(ce,2),fe=ue[0],pe=ue[1],de=Object(E.useState)(""),me=p()(de,2),be=me[0],Ee=me[1],ye=Object(E.useState)(""),Oe=p()(ye,2),Te=Oe[0],_e=Oe[1],ve=Object(E.useState)(!1),ge=p()(ve,2),he=ge[0],Re=ge[1],je=Object(E.useState)({}),Ie=p()(je,2),Se=Ie[0],Pe=Ie[1],ke=Object(E.useState)(!1),Ae=p()(ke,2),Ce=Ae[0],Fe=Ae[1],Le=Object(E.useState)({}),we=p()(Le,2),Ge=we[0],xe=we[1],Me=Object($.a)(Te,800),Ne=t.meta?t.meta.count:0,De={1:"description",2:"publish_date",3:"total_risk",4:"impacted_count",5:"playbook_count"},Be=function(){var e=S.length&&{tags:S.join()};i(oe({},Object(j.a)(r),{offset:r.offset,limit:r.limit,impacting:ie},e))},Ve=function(e){var t=e*r.limit-r.limit;o(oe({},r,{offset:t}))},He=function(e){var t="undefined"===e?void 0:e;o(oe({},r,{reports_shown:t,offset:0},"true"!==t&&{impacting:!1})),"true"!==t&&se(!1)},We=function(){var e=l()(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=J[t].rule,e.prev=1,!r.reports_shown){e.next=7;break}Pe(r),Re(!0),e.next=10;break;case 7:return e.next=9,I.a.delete("".concat(m.BASE_URL,"/ack/").concat(r.rule_id,"/"));case 9:Be();case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),c({variant:"danger",dismissable:!0,title:r.reports_shown?d.formatMessage(te.a.rulesTableHideReportsErrorDisabled):d.formatMessage(te.a.rulesTableHideReportsErrorEnabled),description:"".concat(e.t0)});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();Object(E.useEffect)((function(){if(f.location.search){var e=Object(j.b)(f);e.reports_shown=void 0===e.reports_shown||"undefined"===e.reports_shown[0]?void 0:e.reports_shown,e.sort=void 0===e.sort?"-publish_date":e.sort[0],void 0!==e.has_playbook&&!Array.isArray(e.has_playbook)&&(e.has_playbook=["".concat(e.has_playbook)]),void 0!==e.incident&&!Array.isArray(e.incident)&&(e.incident=["".concat(e.incident)]),void 0===e.offset?e.offset=0:e.offset=Number(e.offset[0]),void 0===e.limit?e.limit=10:e.limit=Number(e.limit[0]),se(e.impacting),o(oe({},e))}pe(!1)}),[]),Object(E.useEffect)((function(){var e=Object(j.c)(r);Ee(e),f.replace({search:e})}),[r,f]),Object(E.useEffect)((function(){if(!fe){var e=S.length&&{tags:S.join()};r.limit||void 0===r.offest&&o(oe({},r,{offset:0,limit:10})),i(oe({},Object(j.a)(r),{offset:r.offset||0,limit:r.limit||10},e))}}),[i,fe,r,o,S]),Object(E.useEffect)((function(){if(void 0!==r.sort){var e=Number(Object.entries(De).find((function(e){return e[1]===r.sort||"-".concat(e[1])===r.sort}))[0]),t="-"===r.sort[0]?"desc":"asc";ae({index:e,direction:t})}}),[r,r.sort]),Object(E.useEffect)((function(){if(t.data)if(0===t.data.length)Y([{cells:[{title:y.a.createElement(W.a,{icon:x.a,iconClass:"ansibleCheck",size:"sm",title:d.formatMessage(te.a.rulesTableNoRuleHitsTitle),text:r.reports_shown?d.formatMessage(te.a.rulesTableNoRuleHitsEnabledRulesBody):d.formatMessage(te.a.rulesTableNoRuleHitsAnyRulesBody)},r.reports_shown&&y.a.createElement(F.Button,{variant:"link",style:{paddingTop:24},onClick:function(){return He("undefined")}},d.formatMessage(te.a.rulesTableNoRuleHitsAddDisabledButton))),props:{colSpan:5}}]}]);else{var e=t.data.flatMap((function(e,t){return[{isOpen:!1,rule:e,cells:[{title:y.a.createElement("span",{key:t},y.a.createElement(K.a,{rule:e}),y.a.createElement(B.Link,{key:t,to:"/recommendations/".concat(e.rule_id)}," ",e.description," "))},{title:y.a.createElement(M.DateFormat,{key:t,date:e.publish_date,variant:"relative"})},{title:y.a.createElement("div",{className:"pf-m-center",key:t},y.a.createElement(R.Tooltip,{key:t,position:R.TooltipPosition.bottom,content:d.formatMessage(te.a.rulesDetailsTotalriskBody,{likelihood:m.LIKELIHOOD_LABEL[e.likelihood]||d.formatMessage(te.a.undefined),impact:m.IMPACT_LABEL[e.impact.impact]||d.formatMessage(te.a.undefined),strong:function(e){return y.a.createElement("strong",null,e)}})},y.a.createElement(k.Battery,{label:m.TOTAL_RISK_LABEL[e.total_risk]||d.formatMessage(te.a.undefined),severity:e.total_risk})))},{title:y.a.createElement("div",{key:t}," ",e.reports_shown?"".concat(e.impacted_systems_count.toLocaleString()):d.formatMessage(te.a.nA))},{title:y.a.createElement("div",{className:"pf-m-center ",key:t},e.playbook_count?y.a.createElement(w.a,{className:"ansibleCheck"}):d.formatMessage(te.a.no))}]},{parent:2*t,fullWidth:!0,cells:[{title:y.a.createElement(H.Main,{className:"pf-m-light"},y.a.createElement(O.Stack,{gutter:"md"},e.hosts_acked_count?y.a.createElement(O.StackItem,null,y.a.createElement(C.a,{size:"sm"})," ",e.hosts_acked_count&&!e.impacted_systems_count?d.formatMessage(te.a.ruleIsDisabledForAllSystems):d.formatMessage(te.a.ruleIsDisabledForSystemsBody,{systems:e.hosts_acked_count}),"  ",y.a.createElement(F.Button,{isInline:!0,variant:"link",onClick:function(){xe(e),Fe(!0)}},d.formatMessage(te.a.viewSystems))):y.a.createElement(y.a.Fragment,null),y.a.createElement(U.a,{rule:e})))}]}]}));Y(e.asMutable())}}),[r,t,o]),Object(E.useEffect)((function(){void 0===r.text?_e(""):_e(r.text)}),[r.text]),Object(E.useEffect)((function(){if(!fe){var e=oe({},r),t=Te.length?{text:Te}:{};delete e.text,o(oe({},e,{},t))}}),[Me]);var qe=function(e){var t=oe({},r);delete t[e],o(t)},ze=function(e,t){t.length>0?o(oe({},r,{},u()({},e,t))):qe(e)},Je=["",{label:d.formatMessage(ie?te.a.rulesTableActionShow:te.a.rulesTableActionHide),onClick:function(){return function(e){o(oe({},r,{impacting:e,offset:0})),se(e)}(!ie)}}],Ue=[{label:d.formatMessage(te.a.description),filterValues:{key:"text-filter",onChange:function(e,t){return _e(t)},value:Te}},{label:m.FILTER_CATEGORIES.total_risk.title,type:m.FILTER_CATEGORIES.total_risk.type,id:m.FILTER_CATEGORIES.total_risk.urlParam,value:"checkbox-".concat(m.FILTER_CATEGORIES.total_risk.urlParam),filterValues:{key:"".concat(m.FILTER_CATEGORIES.total_risk.urlParam,"-filter"),onChange:function(e,t){return ze(m.FILTER_CATEGORIES.total_risk.urlParam,t)},value:r.total_risk,items:m.FILTER_CATEGORIES.total_risk.values}},{label:m.FILTER_CATEGORIES.res_risk.title,type:m.FILTER_CATEGORIES.res_risk.type,id:m.FILTER_CATEGORIES.res_risk.urlParam,value:"checkbox-".concat(m.FILTER_CATEGORIES.res_risk.urlParam),filterValues:{key:"".concat(m.FILTER_CATEGORIES.res_risk.urlParam,"-filter"),onChange:function(e,t){return ze(m.FILTER_CATEGORIES.res_risk.urlParam,t)},value:r.res_risk,items:m.FILTER_CATEGORIES.res_risk.values}},{label:m.FILTER_CATEGORIES.impact.title,type:m.FILTER_CATEGORIES.impact.type,id:m.FILTER_CATEGORIES.impact.urlParam,value:"checkbox-".concat(m.FILTER_CATEGORIES.impact.urlParam),filterValues:{key:"".concat(m.FILTER_CATEGORIES.impact.urlParam,"-filter"),onChange:function(e,t){return ze(m.FILTER_CATEGORIES.impact.urlParam,t)},value:r.impact,items:m.FILTER_CATEGORIES.impact.values}},{label:m.FILTER_CATEGORIES.likelihood.title,type:m.FILTER_CATEGORIES.likelihood.type,id:m.FILTER_CATEGORIES.likelihood.urlParam,value:"checkbox-".concat(m.FILTER_CATEGORIES.likelihood.urlParam),filterValues:{key:"".concat(m.FILTER_CATEGORIES.likelihood.urlParam,"-filter"),onChange:function(e,t){return ze(m.FILTER_CATEGORIES.likelihood.urlParam,t)},value:r.likelihood,items:m.FILTER_CATEGORIES.likelihood.values}},{label:m.FILTER_CATEGORIES.category.title,type:m.FILTER_CATEGORIES.category.type,id:m.FILTER_CATEGORIES.category.urlParam,value:"checkbox-".concat(m.FILTER_CATEGORIES.category.urlParam),filterValues:{key:"".concat(m.FILTER_CATEGORIES.category.urlParam,"-filter"),onChange:function(e,t){return ze(m.FILTER_CATEGORIES.category.urlParam,t)},value:r.category,items:m.FILTER_CATEGORIES.category.values}},{label:m.FILTER_CATEGORIES.incident.title,type:m.FILTER_CATEGORIES.incident.type,id:m.FILTER_CATEGORIES.incident.urlParam,value:"checkbox-".concat(m.FILTER_CATEGORIES.incident.urlParam),filterValues:{key:"".concat(m.FILTER_CATEGORIES.incident.urlParam,"-filter"),onChange:function(e,t){return ze(m.FILTER_CATEGORIES.incident.urlParam,t)},value:r.incident,items:m.FILTER_CATEGORIES.incident.values}},{label:m.FILTER_CATEGORIES.has_playbook.title,type:m.FILTER_CATEGORIES.has_playbook.type,id:m.FILTER_CATEGORIES.has_playbook.urlParam,value:"checkbox-".concat(m.FILTER_CATEGORIES.has_playbook.urlParam),filterValues:{key:"".concat(m.FILTER_CATEGORIES.has_playbook.urlParam,"-filter"),onChange:function(e,t){return ze(m.FILTER_CATEGORIES.has_playbook.urlParam,t)},value:r.has_playbook,items:m.FILTER_CATEGORIES.has_playbook.values}},{label:m.FILTER_CATEGORIES.reports_shown.title,type:m.FILTER_CATEGORIES.reports_shown.type,id:m.FILTER_CATEGORIES.reports_shown.urlParam,value:"radio-".concat(m.FILTER_CATEGORIES.reports_shown.urlParam),filterValues:{key:"".concat(m.FILTER_CATEGORIES.reports_shown.urlParam,"-filter"),onChange:function(e,t){return He(t)},value:void 0===r.reports_shown?"undefined":"".concat(r.reports_shown),items:m.FILTER_CATEGORIES.reports_shown.values}}],Ke={filters:function(){var e=oe({},r);delete e.impacting,delete e.topic,delete e.sort,delete e.offset,delete e.limit;var t=Object.entries(e);return t.length>0?t.map((function(e){if(m.FILTER_CATEGORIES[e[0]]){var t=m.FILTER_CATEGORIES[e[0]],r=Array.isArray(e[1])?e[1].map((function(e){var r=t.values.find((function(t){return t.value===String(e)}));return{name:r.text||r.label,value:e}})):[{name:t.values.find((function(t){return t.value===String(e[1])})).label,value:e[1]}];return{category:t.title,chips:r,urlParam:t.urlParam}}return{category:"Description",chips:[{name:e[1],value:e[1]}],urlParam:e[0]}})):[]}(),onDelete:function(e,t,a){a?o(oe({},r.topic&&{topic:r.topic},{impacting:!0,reports_shown:"true"})):t.map((function(e){var t=u()({},e.urlParam,Array.isArray(r[e.urlParam])?r[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?o(oe({},r,{},t)):qe(e.urlParam)}))}};return y.a.createElement(y.a.Fragment,null,Ce&&y.a.createElement(X.a,{handleModalToggle:function(e){return Fe(e)},isModalOpen:Ce,afterFn:function(){Be()},rule:Ge}),he&&y.a.createElement(N.a,{handleModalToggle:Re,isModalOpen:he,rule:Se,afterFn:Be}),y.a.createElement(q.PrimaryToolbar,{pagination:{itemCount:Ne,page:r.offset/r.limit+1,perPage:Number(r.limit),onSetPage:function(e,t){Ve(t)},onPerPageSelect:function(e,t){o(oe({},r,{limit:t,offset:0}))},isCompact:!1},exportConfig:{onSelect:function(e,t){return window.location="".concat(m.BASE_URL,"/export/hits.").concat("json"===t?"json":"csv","/").concat(be)},isDisabled:!ie},actionsConfig:{actions:Je},filterConfig:{items:Ue},activeFiltersConfig:Ke}),"fulfilled"===a&&y.a.createElement(v.b,{"aria-label":"rule-table",actionResolver:function(e,t){var r=t.rowIndex,a=J[r].rule?J[r].rule:null;return r%2==0&&a?a&&a.reports_shown?[{title:d.formatMessage(te.a.disableRule),onClick:function(e,t){return We(t)}}]:[{title:d.formatMessage(te.a.enableRule),onClick:function(e,t){return We(t)}}]:null},onCollapse:function(e,t,r){var a=s()(J);a[t]=oe({},a[t],{isOpen:r}),Y(a)},sortBy:re,onSort:function(e,t,a){var n="".concat("asc"===a?"":"-").concat(De[t]);ae({index:t,direction:a}),o(oe({},r,{sort:n,offset:0}))},cells:L,rows:J},y.a.createElement(g.a,null),y.a.createElement(h.a,null)),"pending"===a&&y.a.createElement(V.a,null),"failed"===a&&y.a.createElement(D.a,{message:d.formatMessage(te.a.rulesTableFetchRulesError)}),y.a.createElement(Q.TableToolbar,null,y.a.createElement(b.Pagination,{itemCount:Ne,page:r.offset/r.limit+1,perPage:Number(r.limit),onSetPage:function(e,t){Ve(t)},onPerPageSelect:function(e,t){o(oe({},r,{limit:t,offset:0}))},widgetId:"pagination-options-menu-bottom",variant:b.PaginationVariant.bottom})))};le.propTypes={fetchRules:J.a.func,rulesFetchStatus:J.a.string,rules:J.a.object,filters:J.a.object,addNotification:J.a.func,setFilters:J.a.func,history:J.a.object,intl:J.a.any,selectedTags:J.a.array};t.default=Object(ee.c)(ae()(Object(Z.connect)((function(e,t){return oe({rules:e.AdvisorStore.rules,rulesFetchStatus:e.AdvisorStore.rulesFetchStatus,filters:e.AdvisorStore.filters,selectedTags:e.AdvisorStore.selectedTags},t)}),(function(e){return{fetchRules:function(t){return e(d.d(t))},addNotification:function(t){return e(Object(Y.addNotification)(t))},setFilters:function(t){return e(d.k(t))}}}))(le)))},683:function(e,t,r){var a=r(465);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=r(8)(a,n);a.locals&&(e.exports=a.locals),e.hot.accept(465,(function(){var t=r(465);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,a=0;for(r in e){if(!t||e[r]!==t[r])return!1;a++}for(r in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))}}]);
//# sourceMappingURL=RulesTable.js.map