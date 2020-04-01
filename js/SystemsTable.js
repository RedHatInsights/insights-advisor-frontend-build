(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{438:function(e,t,n){var r=n(470),o=n(471),a=n(232),i=n(472);e.exports=function(e){return r(e)||o(e)||a(e)||i()}},444:function(e,t,n){"use strict";var r=n(162),o=n(163),a=n(230),i=n(447),s=n.n(i),l=n(0),u=n.n(l),c=n(1),f=n.n(c),d=function(e){var t=e.message;return u.a.createElement(u.a.Fragment,null,u.a.createElement(r.Card,{className:"ins-empty-rule-cards"},u.a.createElement(a.CardHeader,null,u.a.createElement(s.a,{size:"lg"})),u.a.createElement(o.CardBody,null,t)))};t.a=d,d.propTypes={message:f.a.string}},446:function(e,t,n){var r;window,r=function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/Components/DateFormat/index.js")}({"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**************************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"./src/Components/DateFormat/DateFormat.js":
/*!*************************************************!*\
  !*** ./src/Components/DateFormat/DateFormat.js ***!
  \*************************************************/
/*! no static exports found */function(e,t,n){"use strict";var r=n(/*! @babel/runtime/helpers/interopRequireDefault */"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var o=r(n(/*! react */"react")),a=r(n(/*! prop-types */"prop-types")),i=n(/*! ./helper */"./src/Components/DateFormat/helper.js");function s(e){var t=e.date,n=e.type,r=void 0===n?"relative":n,a=e.extraTitle,s=t instanceof Date?t:new Date(t),l="Invalid Date"===s.toString()?"invalid":r;return o.default.createElement(o.default.Fragment,null,(0,i.dateByType)(l,a)(s))}s.propTypes={date:a.default.oneOfType([a.default.instanceOf(Date),a.default.string,a.default.number]),type:a.default.oneOf(["exact","onlyDate","relative"]),extraTitle:a.default.string}},"./src/Components/DateFormat/helper.js":
/*!*********************************************!*\
  !*** ./src/Components/DateFormat/helper.js ***!
  \*********************************************/
/*! no static exports found */function(e,t,n){"use strict";var r=n(/*! @babel/runtime/helpers/interopRequireDefault */"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.dateByType=t.dateStringByType=t.addTooltip=void 0;var o=r(n(/*! react */"react")),a=n(/*! @patternfly/react-core/dist/js/components/Tooltip/Tooltip.js */"@patternfly/react-core/dist/js/components/Tooltip/Tooltip.js"),i=864e5,s=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},l=[{rightBound:1/0,description:function(e){return s(Math.round(e/31536e6),"year")}},{rightBound:31536e6,description:function(e){return s(Math.round(e/2592e6),"month")}},{rightBound:2592e6,description:function(e){return s(Math.round(e/i),"day")}},{rightBound:i,description:function(e){return s(Math.round(e/36e5),"hour")}},{rightBound:36e5,description:function(e){return s(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],u=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},c=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return o.default.createElement(a.Tooltip,{content:o.default.createElement("div",null,n,e)},t)};t.addTooltip=c;var f=function(e){return{exact:function(e){return u(e)+" UTC"},onlyDate:function(e){return u(e).slice(0,-6)},relative:function(e){return l.reduce((function(t,n){return n.rightBound>Date.now()-e?n.description(Date.now()-e):t}),u(e))},invalid:function(){return"Invalid Date"}}[e]};t.dateStringByType=f,t.dateByType=function(e,t){return{exact:function(t){return f(e)(t)},onlyDate:function(t){return f(e)(t)},relative:function(n){return c(f("exact")(n),o.default.createElement("span",null,f(e)(n)),t)},invalid:function(){return"Invalid Date"}}[e]}},"./src/Components/DateFormat/index.js":
/*!********************************************!*\
  !*** ./src/Components/DateFormat/index.js ***!
  \********************************************/
/*! no static exports found */function(e,t,n){"use strict";var r=n(/*! @babel/runtime/helpers/interopRequireDefault */"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DateFormat",{enumerable:!0,get:function(){return o.default}});var o=r(n(/*! ./DateFormat */"./src/Components/DateFormat/DateFormat.js"))},"@patternfly/react-core/dist/js/components/Tooltip/Tooltip.js":
/*!*******************************************************************************!*\
  !*** external "@patternfly/react-core/dist/js/components/Tooltip/Tooltip.js" ***!
  \*******************************************************************************/
/*! no static exports found */function(t,n){t.exports=e},"prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */function(e,n){e.exports=t},react:
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */function(e,t){e.exports=n}})},e.exports=r(n(65),n(1),n(0))},447:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.FrownOpenIconConfig=void 0;var r,o=(r=n(6))&&r.__esModule?r:{default:r};var a={name:"FrownOpenIcon",height:512,width:496,svgPath:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM136 208c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm187.3 183.3c-31.2-9.6-59.4-15.3-75.3-15.3s-44.1 5.7-75.3 15.3c-11.5 3.5-22.5-6.3-20.5-18.1 7-40 60.1-61.2 95.8-61.2s88.8 21.3 95.8 61.2c2 11.9-9.1 21.6-20.5 18.1zM328 240c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z",yOffset:"",xOffset:"",transform:""};t.FrownOpenIconConfig=a;var i=(0,o.default)(a);t.default=i},470:function(e,t,n){var r=n(233);e.exports=function(e){if(Array.isArray(e))return r(e)}},471:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},472:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},474:function(e,t,n){var r;window,r=function(e,t,n,r){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/Components/TableToolbar/index.js")}({"../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!*******************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},"../../node_modules/@babel/runtime/helpers/extends.js":
/*!************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/extends.js ***!
  \************************************************************************************************************/
/*! no static exports found */function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**************************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***************************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}},"../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!****************************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */function(e,t,n){var r=n(/*! ./objectWithoutPropertiesLoose */"../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},"../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},"./src/Components/TableToolbar/TableToolbar.js":
/*!*****************************************************!*\
  !*** ./src/Components/TableToolbar/TableToolbar.js ***!
  \*****************************************************/
/*! no static exports found */function(e,t,n){"use strict";var r=n(/*! @babel/runtime/helpers/interopRequireWildcard */"../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n(/*! @babel/runtime/helpers/interopRequireDefault */"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(/*! @babel/runtime/helpers/extends */"../../node_modules/@babel/runtime/helpers/extends.js")),i=o(n(/*! @babel/runtime/helpers/defineProperty */"../../node_modules/@babel/runtime/helpers/defineProperty.js")),s=o(n(/*! @babel/runtime/helpers/objectWithoutProperties */"../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=r(n(/*! react */"react")),u=o(n(/*! prop-types */"prop-types")),c=n(/*! @patternfly/react-core/dist/js/layouts/Toolbar/Toolbar.js */"@patternfly/react-core/dist/js/layouts/Toolbar/Toolbar.js"),f=o(n(/*! classnames */"classnames"));n(/*! ./TableToolbar.scss */"./src/Components/TableToolbar/TableToolbar.scss");var d=function(e){var t=e.isFooter,n=e.results,r=e.className,o=e.selected,u=e.children,d=(0,s.default)(e,["isFooter","results","className","selected","children"]),p=(0,f.default)("ins-c-table__toolbar",(0,i.default)({},"ins-m-footer",t),r);return l.default.createElement(l.Fragment,null,l.default.createElement(c.Toolbar,(0,a.default)({className:p},d)," ",u),(n>=0||o>=0)&&l.default.createElement("div",{className:"ins-c-table__toolbar-results"},n>=0&&l.default.createElement("span",{className:"ins-c-table__toolbar-results-count"}," ",function(e){return"".concat(e,e>1||e<1?" Results":" Result")}(n)," "),o>=0&&l.default.createElement("span",{className:"ins-c-table__toolbar-results-selected"}," ",o," Selected ")))},p=d;t.default=p,d.propTypes={isFooter:u.default.bool,results:u.default.number,children:u.default.any,className:u.default.string,selected:u.default.number},d.defaultProps={isFooter:!1}},"./src/Components/TableToolbar/TableToolbar.scss":
/*!*******************************************************!*\
  !*** ./src/Components/TableToolbar/TableToolbar.scss ***!
  \*******************************************************/
/*! no static exports found */function(e,t,n){},"./src/Components/TableToolbar/index.js":
/*!**********************************************!*\
  !*** ./src/Components/TableToolbar/index.js ***!
  \**********************************************/
/*! no static exports found */function(e,t,n){"use strict";var r=n(/*! @babel/runtime/helpers/interopRequireDefault */"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"TableToolbar",{enumerable:!0,get:function(){return o.default}});var o=r(n(/*! ./TableToolbar.js */"./src/Components/TableToolbar/TableToolbar.js"))},"@patternfly/react-core/dist/js/layouts/Toolbar/Toolbar.js":
/*!****************************************************************************!*\
  !*** external "@patternfly/react-core/dist/js/layouts/Toolbar/Toolbar.js" ***!
  \****************************************************************************/
/*! no static exports found */function(t,n){t.exports=e},classnames:
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */function(e,n){e.exports=t},"prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */function(e,t){e.exports=n},react:
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */function(e,t){e.exports=r}})},e.exports=r(n(475),n(28),n(1),n(0))},475:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Toolbar=void 0;var r,o=(r=n(1))&&r.__esModule?r:{default:r},a=function(e){if(e&&e.__esModule)return e;var t=s();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}}n.default=e,t&&t.set(e,n);return n}(n(0)),i=n(2);function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n(236);var c=function(e){var t=e.children,n=void 0===t?null:t,r=e.className,o=void 0===r?null:r,s=u(e,["children","className"]);return a.createElement("div",l({},s,{className:(0,i.css)("pf-l-toolbar",o)}),n)};t.Toolbar=c,c.propTypes={children:o.default.node,className:o.default.string}},526:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n(93),o=n.n(r),a=n(159),i=n.n(a),s=n(438),l=n.n(s);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var c=function(e,t){var n="?".concat(Object.keys(e).map((function(t){return"".concat(t,"=").concat(Array.isArray(e[t])?e[t].join():e[t])})).join("&"));return t&&t.replace({search:n}),n},f=function(e){return Object.assign.apply(Object,[{}].concat(l()(Object.entries(e).map((function(e){var t=i()(e,2),n=t[0],r=t[1];return Array.isArray(r)?("true"===r[0]||"false"===r[0])&&r.length>1?null:o()({},n,r.join()):o()({},n,r)})))))},d=function(e){var t=new URLSearchParams(e.location.search);return Array.from(t).reduce((function(e,t){var n=i()(t,2),r=n[0],a=n[1];return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,o()({},r,"true"===a||"false"===a?JSON.parse(a):a.split(",")))}),{})}},527:function(e,t,n){"use strict";var r=n(159),o=n.n(r),a=n(0);t.a=function(e,t){var n=Object(a.useState)(e),r=o()(n,2),i=r[0],s=r[1];return Object(a.useEffect)((function(){var n=setTimeout((function(){s(e)}),t);return function(){clearTimeout(n)}}),[t,e]),i}},822:function(e,t,n){"use strict";n.r(t);var r=n(93),o=n.n(r),a=n(159),i=n.n(a),s=n(425),l=n(95),u=n(0),c=n.n(u),f=n(203),d=n(204),p=n(23),m=n(207),b=n(206),y=n(526),j=n(823),v=n(446),g=n(444),O=n(64),h=n(429),_=n(445),P=n(525),T=n(1),x=n.n(T),w=n(244),D=n.n(w),S=n(474),E=n(44),M=n(63),C=n(527),F=n(15),N=n(10),I=n(161),W=n.n(I);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(e){var t=e.systemsFetchStatus,n=e.fetchSystems,r=e.systems,o=e.intl,a=e.filters,s=e.setFilters,T=e.history,x=e.selectedTags,w=Object(u.useState)([{title:o.formatMessage(N.a.name),transforms:[f.a]},{title:o.formatMessage(N.a.numberRuleHits),transforms:[f.a,Object(d.a)(15)]},{title:o.formatMessage(N.a.lastSeen),transforms:[f.a]}]),E=i()(w,1)[0],M=Object(u.useState)([]),F=i()(M,2),I=F[0],W=F[1],k=Object(u.useState)({}),B=i()(k,2),q=B[0],A=B[1],L=r.meta?r.meta.count:0,z=Object(u.useState)(a.display_name||""),H=i()(z,2),J=H[0],U=H[1],V=Object(C.a)(J,800),G=Object(u.useState)(!0),K=i()(G,2),Q=K[0],X=K[1],Y={0:"display_name",1:"hits",2:"last_seen"},Z=function(e){var t=e*a.limit-a.limit;s(R({},a,{offset:t}))};Object(u.useEffect)((function(){void 0===a.display_name?U(""):U(a.display_name)}),[a.display_name]),Object(u.useEffect)((function(){var e=R({},a),t=J.length?{display_name:J}:{};delete e.display_name,s(R({},e,{},t))}),[V]),Object(u.useEffect)((function(){if(T.location.search){var e=Object(y.b)(T);void 0!==e.sort&&(e.sort=e.sort[0]),void 0!==e.display_name&&(e.display_name=e.display_name[0]),void 0===e.offset?e.offset=0:e.offset=Number(e.offset[0]),void 0===e.limit?e.limit=10:e.limit=Number(e.limit[0]),s(R({},e))}else void 0!==a.limit&&void 0!==a.offest||s(R({},a,{offset:0,limit:10}));X(!1)}),[]),Object(u.useEffect)((function(){Object(y.c)(a,T)}),[a,T]),Object(u.useEffect)((function(){if(!Q&&void 0!==a.sort){var e=Number(Object.entries(Y).find((function(e){return e[1]===a.sort||"-".concat(e[1])===a.sort}))[0]),t="-"===a.sort[0]?"desc":"asc";A({index:e,direction:t})}}),[a.sort]),Object(u.useEffect)((function(){if(!Q){var e=x.length&&{tags:x.join()};n(R({offset:a.offset,limit:a.limit},a,{},e))}}),[n,a,Q,s,x]),Object(u.useEffect)((function(){if(r.data)if(r.meta.count){var e=r.data.flatMap((function(e,t){return[{isOpen:!1,system:e,cells:[{title:c.a.createElement(O.Link,{key:t,to:"/recommendations/systems/".concat(e.system_uuid)},e.display_name)},{title:c.a.createElement("div",{key:t}," ",e.hits)},{title:e.stale_at?c.a.createElement(j.CullingInformation,{stale:e.stale_at},c.a.createElement(v.DateFormat,{key:t,date:e.last_seen,variant:"relative"})):c.a.createElement(v.DateFormat,{key:t,date:e.last_seen,variant:"relative"})}]}]}));W(e.asMutable())}else W([{cells:[{title:c.a.createElement(_.a,{icon:D.a,title:o.formatMessage(N.a.noHitsTitle,{item:o.formatMessage(N.a.systems).toLowerCase()}),text:o.formatMessage(N.a.noHitsBody,{item:o.formatMessage(N.a.systems).toLowerCase()})}),props:{colSpan:5}}]}])}),[o,r]);var $=[{label:o.formatMessage(N.a.name),filterValues:{key:"text-filter",onChange:function(e,t){return U(t)},value:J}}],ee={filters:J.length>0&&[{category:"Description",chips:[{name:J}]}]||[],onDelete:function(){return U("")}};return c.a.createElement(c.a.Fragment,null,c.a.createElement(P.PrimaryToolbar,{pagination:{itemCount:L,page:a.offset/a.limit+1,perPage:Number(a.limit),onSetPage:function(e,t){Z(t)},onPerPageSelect:function(e,t){s(R({},a,{limit:t,offset:0}))},isCompact:!1},filterConfig:{items:$},activeFiltersConfig:ee}),"fulfilled"===t&&c.a.createElement(p.b,{"aria-label":"rule-table",sortBy:q,onSort:function(e,t,n){var r="".concat("asc"===n?"":"-").concat(Y[t]);A({index:t,direction:n}),s(R({},a,{sort:r,offset:0}))},cells:E,rows:I},c.a.createElement(m.a,null),c.a.createElement(b.a,null)),"pending"===t&&c.a.createElement(h.a,null),"failed"===t&&c.a.createElement(g.a,{message:o.formatMessage(N.a.systemTableFetchError)}),c.a.createElement(S.TableToolbar,null,c.a.createElement(l.Pagination,{itemCount:L,perPage:Number(a.limit),page:a.offset/a.limit+1,onSetPage:function(e,t){Z(t)},onPerPageSelect:function(e,t){s(R({},a,{limit:t,offset:0}))},widgetId:"pagination-options-menu-bottom",variant:l.PaginationVariant.bottom})))};B.propTypes={fetchSystems:x.a.func,systemsFetchStatus:x.a.string,systems:x.a.object,addNotification:x.a.func,history:x.a.object,intl:x.a.any,filters:x.a.object,setFilters:x.a.func,selectedTags:x.a.array};t.default=Object(F.c)(W()(Object(M.connect)((function(e,t){return R({systems:e.AdvisorStore.systems,systemsFetchStatus:e.AdvisorStore.systemsFetchStatus,filters:e.AdvisorStore.filtersSystems,selectedTags:e.AdvisorStore.selectedTags},t)}),(function(e){return{fetchSystems:function(t){return e(s.f(t))},addNotification:function(t){return e(Object(E.addNotification)(t))},setFilters:function(t){return e(s.l(t))}}}))(B)))},823:function(e,t,n){var r;window,r=function(e,t,n,r,o,a){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/Components/CullingInfo/index.js")}({"../../node_modules/@babel/runtime/helpers/extends.js":
/*!************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/extends.js ***!
  \************************************************************************************************************/
/*! no static exports found */function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**************************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!****************************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */function(e,t,n){var r=n(/*! ./objectWithoutPropertiesLoose */"../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},"../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},"./src/Components/CullingInfo/CullingInformation.js":
/*!**********************************************************!*\
  !*** ./src/Components/CullingInfo/CullingInformation.js ***!
  \**********************************************************/
/*! no static exports found */function(e,t,n){"use strict";var r=n(/*! @babel/runtime/helpers/interopRequireDefault */"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(/*! @babel/runtime/helpers/extends */"../../node_modules/@babel/runtime/helpers/extends.js")),a=r(n(/*! @babel/runtime/helpers/objectWithoutProperties */"../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=r(n(/*! react */"react")),s=r(n(/*! prop-types */"prop-types")),l=r(n(/*! @patternfly/react-icons/dist/js/icons/exclamation-triangle-icon */"@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon")),u=r(n(/*! @patternfly/react-icons/dist/js/icons/exclamation-circle-icon */"@patternfly/react-icons/dist/js/icons/exclamation-circle-icon")),c=n(/*! @patternfly/react-core/dist/js/components/Tooltip/Tooltip */"@patternfly/react-core/dist/js/components/Tooltip/Tooltip"),f=r(n(/*! classnames */"classnames"));n(/*! ./CullingInformation.scss */"./src/Components/CullingInfo/CullingInformation.scss");var d=function(e){var t=e.culled,n=(e.className,e.staleWarning),r=e.stale,s=e.currDate,d=e.children,p=e.render,m=(0,a.default)(e,["culled","className","staleWarning","stale","currDate","children","render"]);if(new Date(s)-new Date(r)<0)return p?p({msg:""}):d;var b=function(e,t,n){var r=new Date(e),o=n-new Date(t),a=Math.ceil((r-n)/864e5);return o>=0&&a<=1?{isError:!0,msg:"This system is scheduled for removal from inventory within 24 hours"}:{isWarn:o>=0,msg:"This system will be removed from the inventory in ".concat(a," days")}}(t,n,s),y=b.isWarn,j=b.isError,v=b.msg;return p?i.default.createElement("span",{className:(0,f.default)({"ins-c-inventory__culling-warning":y,"ins-c-inventory__culling-danger":j})},y&&i.default.createElement(l.default,null),j&&i.default.createElement(u.default,null),p({msg:v})):i.default.createElement(i.default.Fragment,null,i.default.createElement(c.Tooltip,(0,o.default)({},m,{content:v,position:"bottom"}),i.default.createElement("span",{className:(0,f.default)({"ins-c-inventory__culling-warning":y,"ins-c-inventory__culling-danger":j})},j&&i.default.createElement(u.default,null),y&&i.default.createElement(l.default,null),d)))};d.propTypes={culled:s.default.oneOfType([s.default.string,s.default.number,s.default.instanceOf(Date)]),staleWarning:s.default.oneOfType([s.default.string,s.default.number,s.default.instanceOf(Date)]),stale:s.default.oneOfType([s.default.string,s.default.number,s.default.instanceOf(Date)]),currDate:s.default.oneOfType([s.default.string,s.default.number,s.default.instanceOf(Date)]),render:s.default.func},d.defaultProps={culled:new Date(0),staleWarning:new Date(0),currDate:new Date};var p=d;t.default=p},"./src/Components/CullingInfo/CullingInformation.scss":
/*!************************************************************!*\
  !*** ./src/Components/CullingInfo/CullingInformation.scss ***!
  \************************************************************/
/*! no static exports found */function(e,t,n){},"./src/Components/CullingInfo/index.js":
/*!*********************************************!*\
  !*** ./src/Components/CullingInfo/index.js ***!
  \*********************************************/
/*! no static exports found */function(e,t,n){"use strict";var r=n(/*! @babel/runtime/helpers/interopRequireDefault */"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"CullingInformation",{enumerable:!0,get:function(){return o.default}});var o=r(n(/*! ./CullingInformation */"./src/Components/CullingInfo/CullingInformation.js"))},"@patternfly/react-core/dist/js/components/Tooltip/Tooltip":
/*!****************************************************************************!*\
  !*** external "@patternfly/react-core/dist/js/components/Tooltip/Tooltip" ***!
  \****************************************************************************/
/*! no static exports found */function(e,t){e.exports=r},"@patternfly/react-icons/dist/js/icons/exclamation-circle-icon":
/*!********************************************************************************!*\
  !*** external "@patternfly/react-icons/dist/js/icons/exclamation-circle-icon" ***!
  \********************************************************************************/
/*! no static exports found */function(e,t){e.exports=n},"@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon":
/*!**********************************************************************************!*\
  !*** external "@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon" ***!
  \**********************************************************************************/
/*! no static exports found */function(e,n){e.exports=t},classnames:
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */function(e,t){e.exports=o},"prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */function(e,t){e.exports=a},react:
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */function(t,n){t.exports=e}})},e.exports=r(n(0),n(257),n(256),n(65),n(28),n(1))}}]);
//# sourceMappingURL=SystemsTable.js.map