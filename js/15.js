(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1014:function(t,n,r){var e=r(1015),o=r(1016),a=r(543),i=Object.prototype.toString,u=o((function(t,n,r){null!=n&&"function"!=typeof n.toString&&(n=i.call(n)),t[n]=r}),e(a));t.exports=u},1015:function(t,n){t.exports=function(t){return function(){return t}}},1016:function(t,n,r){var e=r(1017);t.exports=function(t,n){return function(r,o){return e(r,t,n(o),{})}}},1017:function(t,n,r){var e=r(1018);t.exports=function(t,n,r,o){return e(t,(function(t,e,a){n(o,r(t),e,a)})),o}},1018:function(t,n,r){var e=r(1019),o=r(549);t.exports=function(t,n){return t&&e(t,n,o)}},1019:function(t,n,r){var e=r(1020)();t.exports=e},1020:function(t,n){t.exports=function(t){return function(n,r,e){for(var o=-1,a=Object(n),i=e(n),u=i.length;u--;){var c=i[t?u:++o];if(!1===r(a[c],c,a))break}return n}}},1021:function(t,n,r){var e=r(630);"string"==typeof e&&(e=[[t.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=r(5)(e,o);e.locals&&(t.exports=e.locals),t.hot.accept(630,(function(){var n=r(630);if("string"==typeof n&&(n=[[t.i,n,""]]),!function(t,n){var r,e=0;for(r in t){if(!n||t[r]!==n[r])return!1;e++}for(r in n)e--;return 0===e}(e.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(n)})),t.hot.dispose((function(){a()}))},1064:function(t,n,r){"use strict";r.r(n);var e=r(542),o=r.n(e),a=r(1014),i=r.n(a),u=r(2),c=r.n(u),s=r(1),l=r.n(s),f=r(314),p=r(315),m=r(31),b=r(20),v=r(115),d=r(531),g=(r(1021),Object(v.a)((function(){return r.e(16).then(r.bind(null,1052))}))),y=function(t){var n=t.reportsTotalRisk,r=t.rulesTotalRisk,e=t.intl,a=[],u=function(t,n){return Object.entries(t).map((function(t){var r=o()(t,2),u=r[0],s=r[1],l=i()(b.m)[u],f=l.split("-")[0];if(s)return c.a.createElement(g,{key:"".concat(l,"-value"),riskName:f,name:b.x[u],numIssues:s,affectedSystems:n[u]});a.push(e.formatMessage(d.a.summaryChartItemNoHits,{severity:b.x[u]})+" ")}))}(r,n).reverse();return c.a.createElement(f.a,{style:{marginTop:18},"aria-label":"Rule hits by severity","widget-type":"InsightsSummaryChart"},u.filter(Boolean).length>0?c.a.createElement(c.a.Fragment,null,u,a.length>0&&c.a.createElement(p.a,{className:"disabled border-top"},c.a.createElement("p",null,a))):c.a.createElement("p",null,e.formatMessage(d.a.summaryChartNoHits)))};y.propTypes={rulesTotalRisk:l.a.object,reportsTotalRisk:l.a.object,intl:l.a.any},n.default=Object(m.c)(y)},542:function(t,n,r){var e=r(561),o=r(562),a=r(563);t.exports=function(t,n){return e(t)||o(t,n)||a()}},543:function(t,n){t.exports=function(t){return t}},549:function(t,n,r){var e=r(557)(Object.keys,Object);t.exports=e},557:function(t,n){t.exports=function(t,n){return function(r){return t(n(r))}}},561:function(t,n){t.exports=function(t){if(Array.isArray(t))return t}},562:function(t,n){t.exports=function(t,n){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var r=[],e=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done)&&(r.push(i.value),!n||r.length!==n);e=!0);}catch(t){o=!0,a=t}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return r}}},563:function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},630:function(t,n,r){(t.exports=r(4)(!1)).push([t.i,":root {\n  --ins-color--orange: #ec7a08; }\n\n.disabled {\n  color: var(--pf-global--disabled-color--100); }\n\n.border-top {\n  margin-top: var(--pf-global--spacer--md);\n  padding-top: var(--pf-global--spacer--md);\n  border-top: 1px solid var(--pf-global--BorderColor--light-200);\n  font-size: var(--pf-global--FontSize--sm); }\n",""])}}]);