(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1041:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),r=a(1),i=a.n(r),u=a(364),c=a(279),m=a(314),l=a(311),o=a(312),f=a(271),d=a.n(f),p=a(76),y=a(31),g=a(533),b=a(21),h=a(529),w=function(e){var t=e.numIssues,a=e.name,n=e.riskName,r=e.affectedSystems,i=e.setFilters,f=e.history,d=e.intl,p=function(){var e="".concat(b.m["".concat(n,"-risk")]);i({total_risk:e,reports_shown:!0,impacting:!0}),f.push("/rules")},y=function(e){return s.a.createElement(c.a,{variant:"link",onClick:p},e)};return s.a.createElement(m.a,{"widget-type":"InsightsSummaryChartItem","widget-id":a},s.a.createElement(l.a,{style:{alignItems:"flex-end"}},s.a.createElement(o.a,{className:"pf-u-pr-md"},y(s.a.createElement(u.Battery,{label:n,severity:n,labelHidden:!0}))),s.a.createElement(o.a,{className:"pf-u-text-align-right pf-u-pl-sm"},y(d.formatMessage(h.a.summaryChartItem,{numIssues:t,name:a,affectedSystems:r})))))};w.propTypes={affectedSystems:i.a.number.isRequired,name:i.a.string.isRequired,numIssues:i.a.number.isRequired,riskName:i.a.string.isRequired,history:i.a.object,setFilters:i.a.func,intl:i.a.any};t.default=Object(y.c)(d()(Object(p.connect)(null,(function(e){return{setFilters:function(t){return e(g.i(t))}}}))(w)))}}]);