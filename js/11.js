(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{967:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),r=n(1),i=n.n(r),c=n(335),u=n(215),l=n(281),m=n(278),o=n(279),f=n(233),p=n.n(f),d=n(68),g=n(495),y=n(24),w=function(e){var t=e.numIssues,n=e.name,a=e.riskName,r=function(){var t="".concat(y.m["".concat(a,"-risk")]);e.setFilters({total_risk:t,reports_shown:!0,impacting:!0}),e.history.push("/rules")},i=function(e){return s.a.createElement(u.a,{variant:"link",onClick:r},e)};return s.a.createElement(l.a,{"widget-type":"InsightsSummaryChartItem","widget-id":n},s.a.createElement(m.a,{style:{alignItems:"flex-end"}},s.a.createElement(o.a,{className:"pf-u-pr-md"},i(s.a.createElement(c.Battery,{label:a,severity:a,labelHidden:!0}))),s.a.createElement(o.a,{className:"pf-u-text-align-right pf-u-pl-sm"},i("".concat(t," ").concat(n," affecting ").concat(e.affectedSystems.toLocaleString()," systems")))))};w.propTypes={affectedSystems:i.a.number.isRequired,name:i.a.string.isRequired,numIssues:i.a.number.isRequired,riskName:i.a.string.isRequired,history:i.a.object,setFilters:i.a.func};t.default=p()(Object(d.connect)(null,function(e){return{setFilters:function(t){return e(g.g(t))}}})(w))}}]);