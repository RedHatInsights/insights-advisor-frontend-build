(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{207:function(n,t){n.exports=function(n){return n}},208:function(n,t,r){var o=r(218)(Object.keys,Object);n.exports=o},218:function(n,t){n.exports=function(n,t){return function(r){return n(t(r))}}},227:function(n,t){n.exports=function(n){return n}},285:function(n,t,r){var o=r(286)();n.exports=o},286:function(n,t){n.exports=function(n){return function(t,r,o){for(var e=-1,i=Object(t),u=o(t),a=u.length;a--;){var c=u[n?a:++e];if(!1===r(i[c],c,i))break}return t}}},299:function(n,t,r){(n.exports=r(80)(!1)).push([n.i,":root {\n  --ins-color--orange: #ec7a08; }\n\n.disabled {\n  color: var(--pf-global--disabled-color--100); }\n\n.border-top {\n  margin-top: var(--pf-global--spacer--md);\n  padding-top: var(--pf-global--spacer--md);\n  border-top: 1px solid var(--pf-global--BorderColor--light-200);\n  font-size: var(--pf-global--FontSize--sm); }\n",""])},368:function(n,t){n.exports=function(){return!1}},626:function(n,t,r){"use strict";r.r(t);var o=r(627),e=r.n(o),i=r(631),u=r.n(i),a=r(636),c=r.n(a),s=r(2),f=r.n(s),l=r(1),p=r.n(l),v=r(127),d=r(128),b=r(22),m=r(81),x=(r(644),Object(m.a)(function(){return r.e(13).then(r.bind(null,684))})),h=function(n){var t,r,o=[],i=(t=n.totalRisk,r=n.totalIssues,Object.entries(t).map(function(n){var t=e()(n,2),i=t[0],a=t[1],s=u()(b.m)[i],l=c()(s.split("-")[0]);if(a)return f.a.createElement(x,{key:"".concat(s,"-value"),riskName:s,name:l,numIssues:a,affectedSystems:r});o.push("No ".concat(l.toLocaleLowerCase()," hits."))})).reverse();return f.a.createElement(v.a,{style:{marginTop:18},"aria-label":"Rule hits by severity","widget-type":"InsightsSummaryChart"},i.filter(Boolean).length?f.a.createElement(f.a.Fragment,null,i,o.length&&f.a.createElement(d.a,{className:"disabled border-top"},f.a.createElement("p",null,o))):f.a.createElement("p",null,"Your connected systems have no rule hits."))};h.propTypes={totalRisk:p.a.object,totalIssues:p.a.number},t.default=h},627:function(n,t,r){var o=r(628),e=r(629),i=r(630);n.exports=function(n,t){return o(n)||e(n,t)||i()}},628:function(n,t){n.exports=function(n){if(Array.isArray(n))return n}},629:function(n,t){n.exports=function(n,t){var r=[],o=!0,e=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(o=(u=a.next()).done)&&(r.push(u.value),!t||r.length!==t);o=!0);}catch(n){e=!0,i=n}finally{try{o||null==a.return||a.return()}finally{if(e)throw i}}return r}},630:function(n,t){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},631:function(n,t,r){var o=r(632),e=r(633),i=r(207),u=Object.prototype.toString,a=e(function(n,t,r){null!=t&&"function"!=typeof t.toString&&(t=u.call(t)),n[t]=r},o(i));n.exports=a},632:function(n,t){n.exports=function(n){return function(){return n}}},633:function(n,t,r){var o=r(634);n.exports=function(n,t){return function(r,e){return o(r,n,t(e),{})}}},634:function(n,t,r){var o=r(635);n.exports=function(n,t,r,e){return o(n,function(n,o,i){t(e,r(n),o,i)}),e}},635:function(n,t,r){var o=r(285),e=r(208);n.exports=function(n,t){return n&&o(n,t,e)}},636:function(n,t,r){var o=r(227),e=r(637);n.exports=function(n){return e(o(n).toLowerCase())}},637:function(n,t,r){var o=r(638)("toUpperCase");n.exports=o},638:function(n,t,r){var o=r(639),e=r(368),i=r(641),u=r(227);n.exports=function(n){return function(t){t=u(t);var r=e(t)?i(t):void 0,a=r?r[0]:t.charAt(0),c=r?o(r,1).join(""):t.slice(1);return a[n]()+c}}},639:function(n,t,r){var o=r(640);n.exports=function(n,t,r){var e=n.length;return r=void 0===r?e:r,!t&&r>=e?n:o(n,t,r)}},640:function(n,t){n.exports=function(n,t,r){var o=-1,e=n.length;t<0&&(t=-t>e?0:e+t),(r=r>e?e:r)<0&&(r+=e),e=t>r?0:r-t>>>0,t>>>=0;for(var i=Array(e);++o<e;)i[o]=n[o+t];return i}},641:function(n,t,r){var o=r(642),e=r(368),i=r(643);n.exports=function(n){return e(n)?i(n):o(n)}},642:function(n,t){n.exports=function(n){return n.split("")}},643:function(n,t){n.exports=function(n){return n.split("")}},644:function(n,t,r){var o=r(299);"string"==typeof o&&(o=[[n.i,o,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0},i=r(160)(o,e);o.locals&&(n.exports=o.locals),n.hot.accept(299,function(){var t=r(299);if("string"==typeof t&&(t=[[n.i,t,""]]),!function(n,t){var r,o=0;for(r in n){if(!t||n[r]!==t[r])return!1;o++}for(r in t)o--;return 0===o}(o.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)}),n.hot.dispose(function(){i()})}}]);
//# sourceMappingURL=../sourcemaps/12.js.map