(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{510:function(n,t,r){var o=r(190)(Object.keys,Object);n.exports=o},520:function(n,t){n.exports=function(n){return n}},547:function(n,t,r){(n.exports=r(6)(!1)).push([n.i,":root {\n  --ins-color--orange: #ec7a08; }\n\n.disabled {\n  color: var(--pf-global--disabled-color--100); }\n\n.border-top {\n  margin-top: var(--pf-global--spacer--md);\n  padding-top: var(--pf-global--spacer--md);\n  border-top: 1px solid var(--pf-global--BorderColor--light-200);\n  font-size: var(--pf-global--FontSize--sm); }\n",""])},716:function(n,t){n.exports=function(){return!1}},871:function(n,t,r){"use strict";r.r(t);var o=r(872),e=r.n(o),i=r(876),a=r.n(i),u=r(881),c=r.n(u),s=r(2),l=r.n(s),f=r(1),p=r.n(f),v=r(238),d=r(239),m=r(18),b=r(105),h=(r(889),Object(b.a)(function(){return r.e(13).then(r.bind(null,935))})),g=function(n){var t,r,o=[],i=(t=n.rulesTotalRisk,r=n.reportsTotalRisk,Object.entries(t).map(function(n){var t=e()(n,2),i=t[0],u=t[1],s=a()(m.m)[i],f=c()(s.split("-")[0]);if(u)return l.a.createElement(h,{key:"".concat(s,"-value"),riskName:s,name:f,numIssues:u,affectedSystems:r[i]});o.push("No ".concat(f.toLocaleLowerCase()," hits. "))})).reverse();return l.a.createElement(v.a,{style:{marginTop:18},"aria-label":"Rule hits by severity","widget-type":"InsightsSummaryChart"},i.filter(Boolean).length>0?l.a.createElement(l.a.Fragment,null,i,o.length>0&&l.a.createElement(d.a,{className:"disabled border-top"},l.a.createElement("p",null,o))):l.a.createElement("p",null,"Your connected systems have no rule hits."))};g.propTypes={rulesTotalRisk:p.a.object,reportsTotalRisk:p.a.object},t.default=g},872:function(n,t,r){var o=r(873),e=r(874),i=r(875);n.exports=function(n,t){return o(n)||e(n,t)||i()}},873:function(n,t){n.exports=function(n){if(Array.isArray(n))return n}},874:function(n,t){n.exports=function(n,t){var r=[],o=!0,e=!1,i=void 0;try{for(var a,u=n[Symbol.iterator]();!(o=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);o=!0);}catch(n){e=!0,i=n}finally{try{o||null==u.return||u.return()}finally{if(e)throw i}}return r}},875:function(n,t){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},876:function(n,t,r){var o=r(877),e=r(878),i=r(298),a=Object.prototype.toString,u=e(function(n,t,r){null!=t&&"function"!=typeof t.toString&&(t=a.call(t)),n[t]=r},o(i));n.exports=u},877:function(n,t){n.exports=function(n){return function(){return n}}},878:function(n,t,r){var o=r(879);n.exports=function(n,t){return function(r,e){return o(r,n,t(e),{})}}},879:function(n,t,r){var o=r(880);n.exports=function(n,t,r,e){return o(n,function(n,o,i){t(e,r(n),o,i)}),e}},880:function(n,t,r){var o=r(310),e=r(510);n.exports=function(n,t){return n&&o(n,t,e)}},881:function(n,t,r){var o=r(520),e=r(882);n.exports=function(n){return e(o(n).toLowerCase())}},882:function(n,t,r){var o=r(883)("toUpperCase");n.exports=o},883:function(n,t,r){var o=r(884),e=r(716),i=r(886),a=r(520);n.exports=function(n){return function(t){t=a(t);var r=e(t)?i(t):void 0,u=r?r[0]:t.charAt(0),c=r?o(r,1).join(""):t.slice(1);return u[n]()+c}}},884:function(n,t,r){var o=r(885);n.exports=function(n,t,r){var e=n.length;return r=void 0===r?e:r,!t&&r>=e?n:o(n,t,r)}},885:function(n,t){n.exports=function(n,t,r){var o=-1,e=n.length;t<0&&(t=-t>e?0:e+t),(r=r>e?e:r)<0&&(r+=e),e=t>r?0:r-t>>>0,t>>>=0;for(var i=Array(e);++o<e;)i[o]=n[o+t];return i}},886:function(n,t,r){var o=r(887),e=r(716),i=r(888);n.exports=function(n){return e(n)?i(n):o(n)}},887:function(n,t){n.exports=function(n){return n.split("")}},888:function(n,t){n.exports=function(n){return n.split("")}},889:function(n,t,r){var o=r(547);"string"==typeof o&&(o=[[n.i,o,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0},i=r(7)(o,e);o.locals&&(n.exports=o.locals),n.hot.accept(547,function(){var t=r(547);if("string"==typeof t&&(t=[[n.i,t,""]]),!function(n,t){var r,o=0;for(r in n){if(!t||n[r]!==t[r])return!1;o++}for(r in t)o--;return 0===o}(o.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)}),n.hot.dispose(function(){i()})}}]);
//# sourceMappingURL=../sourcemaps/12.js.map