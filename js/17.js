(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1023:function(t,n,r){var e=r(1024),o=r(1025),a=r(551),i=Object.prototype.toString,u=o((function(t,n,r){null!=n&&"function"!=typeof n.toString&&(n=i.call(n)),t[n]=r}),e(a));t.exports=u},1024:function(t,n){t.exports=function(t){return function(){return t}}},1025:function(t,n,r){var e=r(1026);t.exports=function(t,n){return function(r,o){return e(r,t,n(o),{})}}},1026:function(t,n,r){var e=r(1027);t.exports=function(t,n,r,o){return e(t,(function(t,e,a){n(o,r(t),e,a)})),o}},1027:function(t,n,r){var e=r(1028),o=r(559);t.exports=function(t,n){return t&&e(t,n,o)}},1028:function(t,n,r){var e=r(1029)();t.exports=e},1029:function(t,n){t.exports=function(t){return function(n,r,e){for(var o=-1,a=Object(n),i=e(n),u=i.length;u--;){var c=i[t?u:++o];if(!1===r(a[c],c,a))break}return n}}},1030:function(t,n,r){var e=r(641);"string"==typeof e&&(e=[[t.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=r(6)(e,o);e.locals&&(t.exports=e.locals),t.hot.accept(641,(function(){var n=r(641);if("string"==typeof n&&(n=[[t.i,n,""]]),!function(t,n){var r,e=0;for(r in t){if(!n||t[r]!==n[r])return!1;e++}for(r in n)e--;return 0===e}(e.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(n)})),t.hot.dispose((function(){a()}))},1074:function(t,n,r){"use strict";r.r(n);var e=r(543),o=r.n(e),a=r(1023),i=r.n(a),u=r(2),c=r.n(u),l=r(1),s=r.n(l),f=r(325),p=r(326),d=r(33),m=r(20),b=r(119),v=r(10),g=(r(1030),Object(b.a)((function(){return r.e(18).then(r.bind(null,1062))}))),y=function(t){var n=t.reportsTotalRisk,r=t.rulesTotalRisk,e=t.intl,a=[],u=function(t,n){return Object.entries(t).map((function(t){var r=o()(t,2),u=r[0],l=r[1],s=i()(m.m)[u],f=s.split("-")[0];if(l)return c.a.createElement(g,{key:"".concat(s,"-value"),riskName:f,name:m.z[u],numIssues:l,affectedSystems:n[u]});a.push(e.formatMessage(v.a.summaryChartItemNoHits,{severity:m.z[u]})+" ")}))}(r,n).reverse();return c.a.createElement(f.a,{style:{marginTop:18},"aria-label":"Rule hits by severity","widget-type":"InsightsSummaryChart"},u.filter(Boolean).length>0?c.a.createElement(c.a.Fragment,null,u,a.length>0&&c.a.createElement(p.a,{className:"disabled border-top"},c.a.createElement("p",null,a))):c.a.createElement("p",null,e.formatMessage(v.a.summaryChartNoHits)))};y.propTypes={rulesTotalRisk:s.a.object,reportsTotalRisk:s.a.object,intl:s.a.any},n.default=Object(d.c)(y)},543:function(t,n,r){var e=r(555),o=r(556),a=r(557);t.exports=function(t,n){return e(t)||o(t,n)||a()}},551:function(t,n){t.exports=function(t){return t}},555:function(t,n){t.exports=function(t){if(Array.isArray(t))return t}},556:function(t,n){t.exports=function(t,n){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var r=[],e=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done)&&(r.push(i.value),!n||r.length!==n);e=!0);}catch(t){o=!0,a=t}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return r}}},557:function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},559:function(t,n,r){var e=r(567)(Object.keys,Object);t.exports=e},567:function(t,n){t.exports=function(t,n){return function(r){return t(n(r))}}},641:function(t,n,r){(t.exports=r(4)(!1)).push([t.i,".disabled {\n  color: var(--pf-global--disabled-color--100); }\n\n.border-top {\n  margin-top: var(--pf-global--spacer--md);\n  padding-top: var(--pf-global--spacer--md);\n  border-top: 1px solid var(--pf-global--BorderColor--light-200);\n  font-size: var(--pf-global--FontSize--sm); }\n\n.paddingLeftLabelOverride {\n  padding-left: 0px; }\n\n.flexAlignOverride {\n  align-items: center; }\n",""])}}]);