(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1009:function(t,e,n){var r=n(1010),o=n(1011),a=n(530),i=Object.prototype.toString,s=o((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=i.call(e)),t[e]=n}),r(a));t.exports=s},1010:function(t,e){t.exports=function(t){return function(){return t}}},1011:function(t,e,n){var r=n(1012);t.exports=function(t,e){return function(n,o){return r(n,t,e(o),{})}}},1012:function(t,e,n){var r=n(1013);t.exports=function(t,e,n,o){return r(t,(function(t,r,a){e(o,n(t),r,a)})),o}},1013:function(t,e,n){var r=n(1014),o=n(536);t.exports=function(t,e){return t&&r(t,e,o)}},1014:function(t,e,n){var r=n(1015)();t.exports=r},1015:function(t,e){t.exports=function(t){return function(e,n,r){for(var o=-1,a=Object(e),i=r(e),s=i.length;s--;){var l=i[t?s:++o];if(!1===n(a[l],l,a))break}return e}}},1016:function(t,e,n){var r=n(615);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(7)(r,o);r.locals&&(t.exports=r.locals),t.hot.accept(615,(function(){var e=n(615);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var n,r=0;for(n in t){if(!e||t[n]!==e[n])return!1;r++}for(n in e)r--;return 0===r}(r.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(e)})),t.hot.dispose((function(){a()}))},1063:function(t,e,n){"use strict";n.r(e);var r=n(272),o=n.n(r),a=n(1009),i=n.n(a),s=n(2),l=n.n(s),c=n(1),u=n.n(c),f=n(319),p=n(320),d=n(27),m=n(15),b=n(107),v=n(29),g=(n(1016),Object(b.a)((function(){return n.e(19).then(n.bind(null,1049))}))),h=function(t){var e=t.reportsTotalRisk,n=t.rulesTotalRisk,r=t.intl,a=[],s=function(t,e){return Object.entries(t).map((function(t){var n=o()(t,2),s=n[0],c=n[1],u=i()(m.SEVERITY_MAP)[s],f=u.split("-")[0];if(c)return l.a.createElement(g,{key:"".concat(u,"-value"),riskName:f,name:m.TOTAL_RISK_LABEL[s],numIssues:c,affectedSystems:e[s]});a.push(r.formatMessage(v.a.summaryChartItemNoHits,{severity:m.TOTAL_RISK_LABEL[s]})+" ")}))}(n,e).reverse();return l.a.createElement(f.a,{style:{marginTop:18},"aria-label":"Rule hits by severity","widget-type":"InsightsSummaryChart"},s.filter(Boolean).length>0?l.a.createElement(l.a.Fragment,null,s,a.length>0&&l.a.createElement(p.a,{className:"disabled border-top"},l.a.createElement("p",null,a))):l.a.createElement("p",null,r.formatMessage(v.a.summaryChartNoHits)))};h.propTypes={rulesTotalRisk:u.a.object,reportsTotalRisk:u.a.object,intl:u.a.any},e.default=Object(d.c)(h)},530:function(t,e){t.exports=function(t){return t}},536:function(t,e,n){var r=n(543)(Object.keys,Object);t.exports=r},543:function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},615:function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".disabled{color:var(--pf-global--disabled-color--100)}.border-top{margin-top:var(--pf-global--spacer--md);padding-top:var(--pf-global--spacer--md);border-top:1px solid var(--pf-global--BorderColor--light-200);font-size:var(--pf-global--FontSize--sm)}.paddingLeftLabelOverride{padding-left:0px}.flexAlignOverride{align-items:center}\n",""])}}]);
//# sourceMappingURL=18.js.map