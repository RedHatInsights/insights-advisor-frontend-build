(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(160);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})}));var a=n(161);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})}))},879:function(e,t,n){"use strict";n.r(t);var r=n(415),a=n(508),s=n(48),i=n(29),u=n(1),c=n.n(u),l=n(0),o=n.n(l),m=n(8),f=n(245),d=n(56),p=n(12),b=n(10),y=n(156),g=n.n(y),k=function(e){var t=e.numIssues,n=e.name,r=e.riskName,u=e.affectedSystems,c=e.setFilters,l=e.history,d=e.intl,p=function(){var e="".concat(m.SEVERITY_MAP["".concat(r,"-risk")]);c({total_risk:[e],reports_shown:"true",impacting:!0}),l.push("/rules")},y=function(e){return o.a.createElement(i.Button,{className:"paddingLeftLabelOverride",variant:"link",onClick:p},e)};return o.a.createElement(f.StackItem,{"widget-type":"InsightsSummaryChartItem","widget-id":n},o.a.createElement(a.Split,{className:"flexAlignOverride"},o.a.createElement(a.SplitItem,null,y(o.a.createElement(s.Battery,{label:r,severity:r,labelHidden:!0}))),o.a.createElement(a.SplitItem,null,y(d.formatMessage(b.a.summaryChartItem,{numIssues:t,name:n,affectedSystems:u})))))};k.propTypes={affectedSystems:c.a.number.isRequired,name:c.a.string.isRequired,numIssues:c.a.number.isRequired,riskName:c.a.string.isRequired,history:c.a.object,setFilters:c.a.func,intl:c.a.any};t.default=Object(p.c)(g()(Object(d.connect)(null,(function(e){return{setFilters:function(t){return e(r.m(t))}}}))(k)))}}]);
//# sourceMappingURL=22.js.map