(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{425:function(t,e){t.exports=function(t){return t}},500:function(t,e,n){var r=n(506)(Object.keys,Object);t.exports=r},506:function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},700:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".disabled{color:var(--pf-global--disabled-color--100)}.border-top{margin-top:var(--pf-global--spacer--md);padding-top:var(--pf-global--spacer--md);border-top:1px solid var(--pf-global--BorderColor--light-200);font-size:var(--pf-global--FontSize--sm)}.paddingLeftLabelOverride{padding-left:0px}.flexAlignOverride{align-items:center}\n",""])},830:function(t,e,n){var r=n(831),o=n(832),a=n(425),i=Object.prototype.toString,s=o((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=i.call(e)),t[e]=n}),r(a));t.exports=s},831:function(t,e){t.exports=function(t){return function(){return t}}},832:function(t,e,n){var r=n(833);t.exports=function(t,e){return function(n,o){return r(n,t,e(o),{})}}},833:function(t,e,n){var r=n(834);t.exports=function(t,e,n,o){return r(t,(function(t,r,a){e(o,n(t),r,a)})),o}},834:function(t,e,n){var r=n(835),o=n(500);t.exports=function(t,e){return t&&r(t,e,o)}},835:function(t,e,n){var r=n(836)();t.exports=r},836:function(t,e){t.exports=function(t){return function(e,n,r){for(var o=-1,a=Object(e),i=r(e),s=i.length;s--;){var c=i[t?s:++o];if(!1===n(a[c],c,a))break}return e}}},837:function(t,e,n){var r=n(700);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(7)(r,o);r.locals&&(t.exports=r.locals),t.hot.accept(700,(function(){var e=n(700);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var n,r=0;for(n in t){if(!e||t[n]!==e[n])return!1;r++}for(n in e)r--;return 0===r}(r.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(e)})),t.hot.dispose((function(){a()}))},891:function(t,e,n){"use strict";n.r(e);var r=n(156),o=n.n(r),a=n(830),i=n.n(a),s=(n(837),n(8)),c=n(457),l=n(1),u=n.n(l),f=n(0),p=n.n(f),d=n(60),m=n(12),b=n(10),v=Object(d.a)((function(){return n.e(22).then(n.bind(null,876))})),g=function(t){var e=t.reportsTotalRisk,n=t.rulesTotalRisk,r=t.intl,a=[],l=function(t,e){return Object.entries(t).map((function(t){var n=o()(t,2),c=n[0],l=n[1],u=i()(s.SEVERITY_MAP)[c],f=u.split("-")[0],d=s.TOTAL_RISK_LABEL[c].props&&s.TOTAL_RISK_LABEL[c].props.children||"";if(l)return p.a.createElement(v,{key:"".concat(u,"-value"),riskName:f,name:d,numIssues:l,affectedSystems:e[c]});a.push(p.a.createElement("span",{id:"".concat(d)},r.formatMessage(b.a.summaryChartItemNoHits,{severity:d})+" "))}))}(n,e).reverse();return p.a.createElement(c.Stack,{style:{marginTop:18},"aria-label":"Rule hits by severity","widget-type":"InsightsSummaryChart"},l.filter(Boolean).length>0?p.a.createElement(p.a.Fragment,null,l,a.length>0&&p.a.createElement(c.StackItem,{className:"disabled border-top"},p.a.createElement("p",null,a))):p.a.createElement("p",null,r.formatMessage(b.a.summaryChartNoHits)))};g.propTypes={rulesTotalRisk:u.a.object,reportsTotalRisk:u.a.object,intl:u.a.any},e.default=Object(m.c)(g)}}]);
//# sourceMappingURL=21.js.map