(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1012:function(t,e,n){var r=n(1013),o=n(1014),a=n(532),i=Object.prototype.toString,s=o((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=i.call(e)),t[e]=n}),r(a));t.exports=s},1013:function(t,e){t.exports=function(t){return function(){return t}}},1014:function(t,e,n){var r=n(1015);t.exports=function(t,e){return function(n,o){return r(n,t,e(o),{})}}},1015:function(t,e,n){var r=n(1016);t.exports=function(t,e,n,o){return r(t,(function(t,r,a){e(o,n(t),r,a)})),o}},1016:function(t,e,n){var r=n(1017),o=n(537);t.exports=function(t,e){return t&&r(t,e,o)}},1017:function(t,e,n){var r=n(1018)();t.exports=r},1018:function(t,e){t.exports=function(t){return function(e,n,r){for(var o=-1,a=Object(e),i=r(e),s=i.length;s--;){var l=i[t?s:++o];if(!1===n(a[l],l,a))break}return e}}},1019:function(t,e,n){var r=n(619);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(7)(r,o);r.locals&&(t.exports=r.locals),t.hot.accept(619,(function(){var e=n(619);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var n,r=0;for(n in t){if(!e||t[n]!==e[n])return!1;r++}for(n in e)r--;return 0===r}(r.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(e)})),t.hot.dispose((function(){a()}))},1066:function(t,e,n){"use strict";n.r(e);var r=n(273),o=n.n(r),a=n(1012),i=n.n(a),s=(n(1019),n(15)),l=n(320),c=n(321),u=n(1),f=n.n(u),p=n(2),d=n.n(p),m=n(109),b=n(30),v=n(21),g=Object(m.a)((function(){return n.e(19).then(n.bind(null,1052))})),h=function(t){var e=t.reportsTotalRisk,n=t.rulesTotalRisk,r=t.intl,a=[],u=function(t,e){return Object.entries(t).map((function(t){var n=o()(t,2),l=n[0],c=n[1],u=i()(s.SEVERITY_MAP)[l],f=u.split("-")[0],p=s.TOTAL_RISK_LABEL[l].props&&s.TOTAL_RISK_LABEL[l].props.children||"";if(c)return d.a.createElement(g,{key:"".concat(u,"-value"),riskName:f,name:p,numIssues:c,affectedSystems:e[l]});a.push(r.formatMessage(v.a.summaryChartItemNoHits,{severity:p})+" ")}))}(n,e).reverse();return d.a.createElement(l.a,{style:{marginTop:18},"aria-label":"Rule hits by severity","widget-type":"InsightsSummaryChart"},u.filter(Boolean).length>0?d.a.createElement(d.a.Fragment,null,u,a.length>0&&d.a.createElement(c.a,{className:"disabled border-top"},d.a.createElement("p",null,a))):d.a.createElement("p",null,r.formatMessage(v.a.summaryChartNoHits)))};h.propTypes={rulesTotalRisk:f.a.object,reportsTotalRisk:f.a.object,intl:f.a.any},e.default=Object(b.c)(h)},532:function(t,e){t.exports=function(t){return t}},537:function(t,e,n){var r=n(546)(Object.keys,Object);t.exports=r},546:function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},619:function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".disabled{color:var(--pf-global--disabled-color--100)}.border-top{margin-top:var(--pf-global--spacer--md);padding-top:var(--pf-global--spacer--md);border-top:1px solid var(--pf-global--BorderColor--light-200);font-size:var(--pf-global--FontSize--sm)}.paddingLeftLabelOverride{padding-left:0px}.flexAlignOverride{align-items:center}\n",""])}}]);
//# sourceMappingURL=18.js.map