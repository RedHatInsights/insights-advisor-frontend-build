(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1033:function(t,n,r){"use strict";r.r(n);var e=r(506),o=r.n(e),a=r(981),i=r.n(a),u=r(2),c=r.n(u),l=r(1),s=r.n(l),f=r(298),p=r(299),d=r(27),m=r(18),b=r(107),v=r(29),g=(r(988),Object(b.a)((function(){return r.e(18).then(r.bind(null,1021))}))),y=function(t){var n=t.reportsTotalRisk,r=t.rulesTotalRisk,e=t.intl,a=[],u=function(t,n){return Object.entries(t).map((function(t){var r=o()(t,2),u=r[0],l=r[1],s=i()(m.m)[u],f=s.split("-")[0];if(l)return c.a.createElement(g,{key:"".concat(s,"-value"),riskName:f,name:m.z[u],numIssues:l,affectedSystems:n[u]});a.push(e.formatMessage(v.a.summaryChartItemNoHits,{severity:m.z[u]})+" ")}))}(r,n).reverse();return c.a.createElement(f.a,{style:{marginTop:18},"aria-label":"Rule hits by severity","widget-type":"InsightsSummaryChart"},u.filter(Boolean).length>0?c.a.createElement(c.a.Fragment,null,u,a.length>0&&c.a.createElement(p.a,{className:"disabled border-top"},c.a.createElement("p",null,a))):c.a.createElement("p",null,e.formatMessage(v.a.summaryChartNoHits)))};y.propTypes={rulesTotalRisk:s.a.object,reportsTotalRisk:s.a.object,intl:s.a.any},n.default=Object(d.c)(y)},506:function(t,n,r){var e=r(513),o=r(514),a=r(515);t.exports=function(t,n){return e(t)||o(t,n)||a()}},509:function(t,n){t.exports=function(t){return t}},513:function(t,n){t.exports=function(t){if(Array.isArray(t))return t}},514:function(t,n){t.exports=function(t,n){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var r=[],e=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(e=(i=u.next()).done)&&(r.push(i.value),!n||r.length!==n);e=!0);}catch(t){o=!0,a=t}finally{try{e||null==u.return||u.return()}finally{if(o)throw a}}return r}}},515:function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},517:function(t,n,r){var e=r(525)(Object.keys,Object);t.exports=e},525:function(t,n){t.exports=function(t,n){return function(r){return t(n(r))}}},593:function(t,n,r){(t.exports=r(6)(!1)).push([t.i,".disabled{color:var(--pf-global--disabled-color--100)}.border-top{margin-top:var(--pf-global--spacer--md);padding-top:var(--pf-global--spacer--md);border-top:1px solid var(--pf-global--BorderColor--light-200);font-size:var(--pf-global--FontSize--sm)}.paddingLeftLabelOverride{padding-left:0px}.flexAlignOverride{align-items:center}\n",""])},981:function(t,n,r){var e=r(982),o=r(983),a=r(509),i=Object.prototype.toString,u=o((function(t,n,r){null!=n&&"function"!=typeof n.toString&&(n=i.call(n)),t[n]=r}),e(a));t.exports=u},982:function(t,n){t.exports=function(t){return function(){return t}}},983:function(t,n,r){var e=r(984);t.exports=function(t,n){return function(r,o){return e(r,t,n(o),{})}}},984:function(t,n,r){var e=r(985);t.exports=function(t,n,r,o){return e(t,(function(t,e,a){n(o,r(t),e,a)})),o}},985:function(t,n,r){var e=r(986),o=r(517);t.exports=function(t,n){return t&&e(t,n,o)}},986:function(t,n,r){var e=r(987)();t.exports=e},987:function(t,n){t.exports=function(t){return function(n,r,e){for(var o=-1,a=Object(n),i=e(n),u=i.length;u--;){var c=i[t?u:++o];if(!1===r(a[c],c,a))break}return n}}},988:function(t,n,r){var e=r(593);"string"==typeof e&&(e=[[t.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=r(7)(e,o);e.locals&&(t.exports=e.locals),t.hot.accept(593,(function(){var n=r(593);if("string"==typeof n&&(n=[[t.i,n,""]]),!function(t,n){var r,e=0;for(r in t){if(!n||t[r]!==n[r])return!1;e++}for(r in n)e--;return 0===e}(e.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(n)})),t.hot.dispose((function(){a()}))}}]);
//# sourceMappingURL=17.js.map