(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1062:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),r=a(1),i=a.n(r),c=a(373),u=a(288),l=a(326),m=a(323),o=a(324),d=a(279),f=a.n(d),p=a(81),y=a(33),b=a(539),g=a(20),w=a(10),h=function(e){var t=e.numIssues,a=e.name,n=e.riskName,r=e.affectedSystems,i=e.setFilters,d=e.history,f=e.intl,p=function(){var e="".concat(g.m["".concat(n,"-risk")]);i({total_risk:e,reports_shown:!0,impacting:!0}),d.push("/rules")},y=function(e){return s.a.createElement(u.a,{className:"paddingLeftLabelOverride",variant:"link",onClick:p},e)};return s.a.createElement(l.a,{"widget-type":"InsightsSummaryChartItem","widget-id":a},s.a.createElement(m.a,{className:"flexAlignOverride"},s.a.createElement(o.a,null,y(s.a.createElement(c.Battery,{label:n,severity:n,labelHidden:!0}))),s.a.createElement(o.a,null,y(f.formatMessage(w.a.summaryChartItem,{numIssues:t,name:a,affectedSystems:r})))))};h.propTypes={affectedSystems:i.a.number.isRequired,name:i.a.string.isRequired,numIssues:i.a.number.isRequired,riskName:i.a.string.isRequired,history:i.a.object,setFilters:i.a.func,intl:i.a.any};t.default=Object(y.c)(f()(Object(p.connect)(null,(function(e){return{setFilters:function(t){return e(b.j(t))}}}))(h)))}}]);