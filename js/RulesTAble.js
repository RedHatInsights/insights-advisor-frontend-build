(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{625:function(e,t,a){"use strict";a.r(t);var r=a(163),n=a.n(r),o=a(271),l=a.n(o),i=a(162),s=a.n(i),c=a(560),u=a.n(c),f=a(534),d=a.n(f),m=a(572),p=a.n(m),b=a(2),g=a.n(b),h=a(359),v=a(270),y=a.n(v),k=a(1),_=a.n(k),j=a(240),O=a(215),w=a(176),E=a(524),P=a.n(E),S=a(88),C=a(81),M=a(279),x=a(287),R=a(343),N=a(318),A=a(319),T=a(46),F=a(344),H=a(342),D=a(89),V=a(31),B=a(527),L=a(530),J=a(559),z=a(586),I=a(18),U=a(538),W=a(637),q=a(33),G=a(626);function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(a,!0).forEach((function(t){s()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var X=function(e){var t=e.rules,a=e.filters,r=e.rulesFetchStatus,o=e.setFilters,i=e.fetchRules,c=e.addNotification,f=e.history,m=e.intl,v=Object(b.useState)([{title:m.formatMessage(q.a.description),transforms:[N.a]},{title:m.formatMessage(q.a.added),transforms:[N.a,Object(A.a)(15)]},{title:m.formatMessage(q.a.totalRisk),transforms:[N.a]},{title:m.formatMessage(q.a.systems),transforms:[N.a]},{title:g.a.createElement(g.a.Fragment,null,g.a.createElement(j.b,{size:"md"})," ",m.formatMessage(q.a.ansible)),transforms:[N.a],dataLabel:m.formatMessage(q.a.ansible)}]),y=d()(v,1)[0],k=Object(b.useState)([]),_=d()(k,2),E=_[0],C=_[1],D=Object(b.useState)({}),V=d()(D,2),B=V[0],K=V[1],X=Object(b.useState)("-publish_date"),Y=d()(X,2),Z=Y[0],$=Y[1],ee=Object(b.useState)(a.impacting),te=d()(ee,2),ae=te[0],re=te[1],ne=Object(b.useState)(10),oe=d()(ne,2),le=oe[0],ie=oe[1],se=Object(b.useState)(0),ce=d()(se,2),ue=ce[0],fe=ce[1],de=Object(b.useState)(!0),me=d()(de,2),pe=me[0],be=me[1],ge=Object(b.useState)(""),he=d()(ge,2),ve=he[0],ye=he[1],ke=Object(b.useState)(""),_e=d()(ke,2),je=_e[0],Oe=_e[1],we=Object(G.a)(je,800),Ee=t.meta?t.meta.count:0,Pe=function(e){return Object.assign.apply(Object,[{}].concat(u()(Object.entries(e).map((function(e){return Array.isArray(e[1])?s()({},e[0],e[1].join()):s()({},e[0],e[1])})))))},Se=Object(b.useCallback)((function(e,t,a){var r="".concat("asc"===a?"":"-").concat({1:"description",2:"publish_date",3:"total_risk",4:"impacted_count",5:"playbook_count"}[t]);K({index:t,direction:a}),$(r),fe(0)}),[$,K,fe]),Ce=function(e){fe(e*le-le)},Me=function(){var e=l()(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=E[t].rule,e.prev=1,!r.reports_shown){e.next=7;break}return e.next=5,z.a.post("".concat(I.a,"/ack/"),{rule_id:r.rule_id});case 5:e.next=9;break;case 7:return e.next=9,z.a.delete("".concat(I.a,"/ack/").concat(r.rule_id,"/"));case 9:i(Q({},Pe(a),{offset:0,limit:le,impacting:ae,sort:Z})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),c({variant:"danger",dismissable:!0,title:r.reports_shown?m.formatMessage(q.a.rulesTableHideReportsErrorDisabled):m.formatMessage(q.a.rulesTableHideReportsErrorEnabled),description:m.formatMessage(q.a.rulesTableHideReportsErrorBody,{ruleName:r.description})});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),xe=Object(b.useCallback)((function(){fe(0)}),[]);Object(b.useEffect)((function(){if(f.location.search){var e=new URLSearchParams(f.location.search),t=Array.from(e).reduce((function(e,t){var a=d()(t,2),r=a[0],n=a[1];return Q({},e,s()({},r,"true"===n||"false"===n?JSON.parse(n):n.split(",")))}),{});t.reports_shown=void 0===t.reports_shown||"undefined"===t.reports_shown[0]?void 0:t.reports_shown,re(t.impacting),o(Q({},t))}be(!1)}),[]),Object(b.useEffect)((function(){var e=Object.keys(a).map((function(e){return"".concat(e,"=").concat(Array.isArray(a[e])?a[e].join():a[e])})).join("&");ye("?".concat(e)),f.replace({search:"?".concat(e)})}),[a,f]),Object(b.useEffect)((function(){pe||i(Q({},Pe(a),{offset:ue,limit:le,sort:Z}))}),[i,pe,a,le,ue,Z]),Object(b.useEffect)((function(){E.length||Se(null,2,"desc")}),[Se,E.length]),Object(b.useEffect)((function(){if(t.data)if(0===t.data.length)C([{cells:[{title:g.a.createElement(U.a,{icon:O.b,iconClass:"ansibleCheck",size:"sm",title:m.formatMessage(q.a.rulesTableNoRuleHitsTitle),text:a.reports_shown?m.formatMessage(q.a.rulesTableNoRuleHitsEnabledRulesBody):m.formatMessage(q.a.rulesTableNoRuleHitsAnyRulesBody)},a.reports_shown&&g.a.createElement(M.a,{variant:"link",style:{paddingTop:24},onClick:function(){o(Q({},a,{reports_shown:void 0})),xe()}},m.formatMessage(q.a.rulesTableNoRuleHitsAddDisabledButton))),props:{colSpan:5}}]}]);else{var e=t.data.map((function(e,t){return[{isOpen:!1,rule:e,cells:[{title:e.reports_shown?g.a.createElement(S.Link,{key:t,to:"/rules/".concat(e.rule_id)},e.description):g.a.createElement("span",{key:t}," ",g.a.createElement(x.a,{isRead:!0},m.formatMessage(q.a.disabled))," ",e.description)},{title:g.a.createElement("div",{key:t},P()(e.publish_date).fromNow())},{title:g.a.createElement("div",{className:"pf-m-center",key:t,style:{verticalAlign:"top"}},g.a.createElement(h.Battery,{label:m.formatMessage(q.a.totalRisk),labelHidden:!0,severity:e.total_risk}))},{title:g.a.createElement("div",{key:t}," ",e.reports_shown?"".concat(e.impacted_systems_count.toLocaleString()):m.formatMessage(q.a.nA))},{title:g.a.createElement("div",{className:"pf-m-center ",key:t},e.playbook_count?g.a.createElement(w.b,{className:"ansibleCheck"}):m.formatMessage(q.a.no))}]},{parent:2*t,fullWidth:!0,cells:[{title:g.a.createElement(h.Main,{className:"pf-m-light"}," ",g.a.createElement(W.a,{rule:e}))}]}]}));C(p()(e))}}),[xe,a,t,o]),Object(b.useEffect)((function(){void 0===a.text?Oe(""):Oe(a.text)}),[a.text]),Object(b.useEffect)((function(){if(!pe){var e=Q({},a),t=je.length?{text:je}:{};delete e.text,o(Q({},e,{},t))}}),[we]);var Re=function(e){var t=Q({},a);delete t[e],o(t)},Ne=function(e,t){t.length>0?o(Q({},a,{},s()({},e,t))):Re(e)},Ae=["",{label:m.formatMessage(ae?q.a.rulesTableActionShow:q.a.rulesTableActionHide),onClick:function(){return function(e){o(Q({},a,{impacting:e})),re(e),fe(0)}(!ae)}}],Te=[{label:m.formatMessage(q.a.description),filterValues:{onChange:function(e,t){return Oe(t)},value:je}},{label:I.d.total_risk.title,type:I.d.total_risk.type,id:I.d.total_risk.urlParam,value:"checkbox-".concat(I.d.total_risk.urlParam),filterValues:{onChange:function(e,t){return Ne(I.d.total_risk.urlParam,t)},value:a.total_risk,items:I.d.total_risk.values}},{label:I.d.res_risk.title,type:I.d.res_risk.type,id:I.d.res_risk.urlParam,value:"checkbox-".concat(I.d.res_risk.urlParam),filterValues:{onChange:function(e,t){return Ne(I.d.res_risk.urlParam,t)},value:a.res_risk,items:I.d.res_risk.values}},{label:I.d.impact.title,type:I.d.impact.type,id:I.d.impact.urlParam,value:"checkbox-".concat(I.d.impact.urlParam),filterValues:{onChange:function(e,t){return Ne(I.d.impact.urlParam,t)},value:a.impact,items:I.d.impact.values}},{label:I.d.likelihood.title,type:I.d.likelihood.type,id:I.d.likelihood.urlParam,value:"checkbox-".concat(I.d.likelihood.urlParam),filterValues:{onChange:function(e,t){return Ne(I.d.likelihood.urlParam,t)},value:a.likelihood,items:I.d.likelihood.values}},{label:I.d.category.title,type:I.d.category.type,id:I.d.category.urlParam,value:"checkbox-".concat(I.d.category.urlParam),filterValues:{onChange:function(e,t){return Ne(I.d.category.urlParam,t)},value:a.category,items:I.d.category.values}},{label:I.d.reports_shown.title,type:I.d.reports_shown.type,id:I.d.reports_shown.urlParam,value:"radio-".concat(I.d.reports_shown.urlParam),filterValues:{onChange:function(e,t){return o(Q({},a,{reports_shown:"undefined"===(r=t)?void 0:r})),void fe(0);var r},value:void 0===a.reports_shown?"undefined":"".concat(a.reports_shown),items:I.d.reports_shown.values}}],Fe={filters:function(){var e=Q({},a);delete e.text,delete e.impacting,delete e.reports_shown,delete e.topic;var t=Object.entries(e);return t.length>0?t.map((function(e){var t=I.d[e[0]],a=Array.isArray(e[1])?e[1].map((function(e){return{name:t.values.find((function(t){return t.value===String(e)})).label,value:e}})):[{name:t.values.find((function(t){return t.value===String(e[1])})).label,value:e[1]}];return{category:t.title,chips:a,urlParam:t.urlParam}})):[]}(),onDelete:function(e,t,r){r?o({impacting:!0,reports_shown:"true"}):t.map((function(e){var t=s()({},e.urlParam,a[e.urlParam].filter((function(t){return Number(t)!==Number(e.chips[0].value)})));t[e.urlParam].length>0?o(Q({},a,{},t)):Re(e.urlParam)}))}};return g.a.createElement(g.a.Fragment,null,g.a.createElement(h.PrimaryToolbar,{pagination:{itemCount:Ee,page:ue/le+1,perPage:le,onSetPage:function(e,t){Ce(t)},onPerPageSelect:function(e,t){ie(t)},isCompact:!1},exportConfig:{onSelect:function(e,t){return window.location="".concat(I.a,"/export/hits.").concat("json"===t?"json":"csv","/").concat(ve)}},actionsConfig:{actions:Ae},filterConfig:{items:Te},activeFiltersConfig:Fe}),"fulfilled"===r&&g.a.createElement(T.b,{"aria-label":"rule-table",actionResolver:function(e,t){var a=t.rowIndex,r=E[a].rule?E[a].rule:null;return a%2==0&&r?r&&r.reports_shown?[{title:m.formatMessage(q.a.disableRule),onClick:function(e,t){return Me(t)}}]:[{title:m.formatMessage(q.a.enableRule),onClick:function(e,t){return Me(t)}}]:null},onCollapse:function(e,t,a){var r=u()(E);r[t]=Q({},r[t],{isOpen:a}),C(r)},sortBy:B,onSort:Se,cells:y,rows:E},g.a.createElement(F.a,null),g.a.createElement(H.a,null)),"pending"===r&&g.a.createElement(L.a,null),"failed"===r&&g.a.createElement(J.a,{message:m.formatMessage(q.a.rulesTableFetchRulesError)}),g.a.createElement(h.TableToolbar,null,g.a.createElement(R.a,{itemCount:Ee,perPage:le,page:ue/le+1,onSetPage:function(e,t){Ce(t)},widgetId:"pagination-options-menu-bottom",variant:R.b.bottom})))};X.propTypes={fetchRules:_.a.func,rulesFetchStatus:_.a.string,rules:_.a.object,filters:_.a.object,addNotification:_.a.func,setFilters:_.a.func,history:_.a.object,intl:_.a.any};t.default=Object(V.c)(y()(Object(C.connect)((function(e,t){return Q({rules:e.AdvisorStore.rules,rulesFetchStatus:e.AdvisorStore.rulesFetchStatus,filters:e.AdvisorStore.filters},t)}),(function(e){return{fetchRules:function(t){return e(B.b(t))},addNotification:function(t){return e(Object(D.addNotification)(t))},setFilters:function(t){return e(B.j(t))}}}))(X)))}}]);