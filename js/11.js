(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{638:function(e,r,n){(e.exports=n(165)(!1)).push([e.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\n.summary-chart a {\n  color: var(--pf-global--Color--100);\n  text-decoration: none; }\n\n.summary-chart li {\n  margin-bottom: 5px;\n  margin-bottom: 0.3125rem; }\n\n.metrics, .no-errors {\n  font-size: 13px;\n  font-size: 13px/var(--pf-global--FontSize--md)rem;\n  line-height: 18.2px;\n  line-height: 18.2px/var(--pf-global--FontSize--md)rem; }\n\n.progress-bars {\n  height: 20px;\n  position: relative; }\n\n.bar {\n  background-color: #d9d9d9;\n  border-radius: 8px;\n  height: 6px;\n  position: absolute;\n  top: 3px;\n  width: 100%; }\n\n.progress-bar {\n  border-radius: 8px;\n  height: 12px;\n  position: absolute;\n  z-index: 1; }\n\n.progress-bar-critical {\n  background-color: var(--pf-global--danger-color--100); }\n\n.progress-bar-high {\n  background-color: var(--ins-color--orange); }\n\n.progress-bar-medium {\n  background-color: var(--pf-global--warning-color--100); }\n\n.progress-bar-low {\n  background-color: var(--pf-global--success-color--100); }\n\n.small-spacer {\n  margin-right: var(--pf-global--spacer--xs); }\n\n.green {\n  color: var(--pf-global--success-color--100); }\n",""])},841:function(e,r,n){"use strict";n.r(r);var a=n(1),o=n.n(a),s=n(0),t=n.n(s),i=(n(842),function(e){var r=e.numIssues,n=(r/e.totalIssues*100).toFixed(1),a=e.name.toLowerCase(),s={width:n+"%"};return o.a.createElement("li",{"widget-type":"InsightsSummaryChartItem","widget-id":e.name},r>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"metrics"},o.a.createElement("strong",null,e.name," "),o.a.createElement("span",{className:"num"},"(",n,"%)")),o.a.createElement("div",{className:"progress-bars"},o.a.createElement("div",{className:"progress-bar progress-bar-"+a,style:s}),o.a.createElement("div",{className:"bar"}))),0===r&&o.a.createElement("div",{className:"no-errors"},o.a.createElement("i",{className:"fas fa-check-circle small-spacer green"}),"You have no issues of ",a," severity"))});i.propTypes={name:t.a.string.isRequired,totalIssues:t.a.number.isRequired,numIssues:t.a.number.isRequired},r.default=i},842:function(e,r,n){var a=n(638);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},s=n(341)(a,o);a.locals&&(e.exports=a.locals),e.hot.accept(638,function(){var r=n(638);if("string"==typeof r&&(r=[[e.i,r,""]]),!function(e,r){var n,a=0;for(n in e){if(!r||e[n]!==r[n])return!1;a++}for(n in r)a--;return 0===a}(a.locals,r.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");s(r)}),e.hot.dispose(function(){s()})}}]);
//# sourceMappingURL=../sourcemaps/11.js.map