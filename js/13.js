(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{995:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),r=a(1),i=a.n(r),c=a(346),u=a(250),o=a(289),l=a(286),m=a(287),f=a(237),p=a.n(f),d=a(75),g=a(515),w=a(30),y=function(e){var t=e.numIssues,a=e.name,n=e.riskName,r=function(){var t="".concat(w.m[n]);e.setFilters({total_risk:t,reports_shown:!0,impacting:!0}),e.history.push("/overview/".concat(n))},i=function(e){return s.a.createElement(u.a,{variant:"link",onClick:r},e)};return s.a.createElement(o.a,{"widget-type":"InsightsSummaryChartItem","widget-id":a},s.a.createElement(l.a,{style:{alignItems:"flex-end"}},s.a.createElement(m.a,{className:"pf-u-pr-md"},i(s.a.createElement(c.Battery,{label:n,severity:a.toLowerCase(),labelHidden:!0}))),s.a.createElement(m.a,{className:"pf-u-text-align-right pf-u-pl-sm"},i("".concat(t," ").concat(a," affecting ").concat(e.affectedSystems.toLocaleString()," systems")))))};y.propTypes={affectedSystems:i.a.number.isRequired,name:i.a.string.isRequired,numIssues:i.a.number.isRequired,riskName:i.a.string.isRequired,history:i.a.object,setFilters:i.a.func};t.default=p()(Object(d.connect)(null,function(e){return{setFilters:function(t){return e(g.g(t))}}})(y))}}]);