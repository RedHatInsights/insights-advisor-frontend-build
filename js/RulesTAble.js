(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{609:function(e,t,a){"use strict";a.r(t);var r=a(160),n=a.n(r),o=a(271),l=a.n(o),i=a(159),s=a.n(i),c=a(549),u=a.n(c),f=a(270),E=a.n(f),m=a(520),p=a(238),d=a(211),b=a(233),R=a(172),T=a(144),_=a(286),O=a(347),I=a(364),g=a(2),h=a.n(g),v=a(323),S=a(324),y=a(43),k=a(348),C=a(346),A=a(545),F=a(14),j=a(576),L=a(548),w=a(97),P=a(531),G=a(529),M=a(1),x=a.n(M),N=a(620),H=a(82),B=a(96),D=a(610),V=a(27),z=a(29),J=a(518),U=a.n(J),W=a(269),q=a.n(W);function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(Object(a),!0).forEach((function(t){s()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var X=function(e){var t=e.rules,a=e.filters,r=e.rulesFetchStatus,o=e.setFilters,i=e.fetchRules,c=e.addNotification,f=e.history,m=e.intl,M=Object(g.useState)([{title:m.formatMessage(z.a.description),transforms:[v.a]},{title:m.formatMessage(z.a.added),transforms:[v.a,Object(S.a)(15)]},{title:m.formatMessage(z.a.totalRisk),transforms:[v.a]},{title:m.formatMessage(z.a.systems),transforms:[v.a]},{title:h.a.createElement(h.a.Fragment,null,h.a.createElement(p.b,{size:"md"})," ",m.formatMessage(z.a.ansible)),transforms:[v.a],dataLabel:m.formatMessage(z.a.ansible)}]),x=E()(M,1)[0],H=Object(g.useState)([]),B=E()(H,2),V=B[0],J=B[1],W=Object(g.useState)({}),q=E()(W,2),K=q[0],X=q[1],Y=Object(g.useState)(a.impacting),Z=E()(Y,2),$=Z[0],ee=Z[1],te=Object(g.useState)(10),ae=E()(te,2),re=ae[0],ne=ae[1],oe=Object(g.useState)(0),le=E()(oe,2),ie=le[0],se=le[1],ce=Object(g.useState)(!0),ue=E()(ce,2),fe=ue[0],Ee=ue[1],me=Object(g.useState)(""),pe=E()(me,2),de=pe[0],be=pe[1],Re=Object(g.useState)(""),Te=E()(Re,2),_e=Te[0],Oe=Te[1],Ie=Object(g.useState)(!1),ge=E()(Ie,2),he=ge[0],ve=ge[1],Se=Object(g.useState)({}),ye=E()(Se,2),ke=ye[0],Ce=ye[1],Ae=Object(D.a)(_e,800),Fe=t.meta?t.meta.count:0,je={1:"description",2:"publish_date",3:"total_risk",4:"impacted_count",5:"playbook_count"},Le=function(e){return Object.assign.apply(Object,[{}].concat(u()(Object.entries(e).map((function(e){return Array.isArray(e[1])?s()({},e[0],e[1].join()):s()({},e[0],e[1])})))))},we=function(){i(Q({},Le(a),{offset:0,limit:re,impacting:$}))},Pe=function(e){se(e*re-re)},Ge=function(){var e=l()(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=V[t].rule,e.prev=1,!a.reports_shown){e.next=7;break}Ce(a),ve(!0),e.next=10;break;case 7:return e.next=9,A.a.delete("".concat(F.BASE_URL,"/ack/").concat(a.rule_id,"/"));case 9:we();case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),c({variant:"danger",dismissable:!0,title:a.reports_shown?m.formatMessage(z.a.rulesTableHideReportsErrorDisabled):m.formatMessage(z.a.rulesTableHideReportsErrorEnabled),description:"".concat(e.t0)});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),Me=Object(g.useCallback)((function(){se(0)}),[]);Object(g.useEffect)((function(){if(f.location.search){var e=new URLSearchParams(f.location.search),t=Array.from(e).reduce((function(e,t){var a=E()(t,2),r=a[0],n=a[1];return Q({},e,s()({},r,"true"===n||"false"===n?JSON.parse(n):n.split(",")))}),{});t.reports_shown=void 0===t.reports_shown||"undefined"===t.reports_shown[0]?void 0:t.reports_shown,t.sort=void 0===t.sort?"-publish_date":t.sort[0],ee(t.impacting),o(Q({},t))}Ee(!1)}),[]),Object(g.useEffect)((function(){var e=Object.keys(a).map((function(e){return"".concat(e,"=").concat(Array.isArray(a[e])?a[e].join():a[e])})).join("&");be("?".concat(e)),f.replace({search:"?".concat(e)})}),[a,f]),Object(g.useEffect)((function(){fe||i(Q({},Le(a),{offset:ie,limit:re}))}),[i,fe,a,re,ie]),Object(g.useEffect)((function(){if(void 0!==a.sort){var e=Number(Object.entries(je).find((function(e){return e[1]===a.sort||"-".concat(e[1])===a.sort}))[0]),t="-"===a.sort[0]?"desc":"asc";X({index:e,direction:t})}}),[a,a.sort]),Object(g.useEffect)((function(){if(t.data)if(0===t.data.length)J([{cells:[{title:h.a.createElement(G.a,{icon:d.b,iconClass:"ansibleCheck",size:"sm",title:m.formatMessage(z.a.rulesTableNoRuleHitsTitle),text:a.reports_shown?m.formatMessage(z.a.rulesTableNoRuleHitsEnabledRulesBody):m.formatMessage(z.a.rulesTableNoRuleHitsAnyRulesBody)},a.reports_shown&&h.a.createElement(T.a,{variant:"link",style:{paddingTop:24},onClick:function(){o(Q({},a,{reports_shown:void 0})),Me()}},m.formatMessage(z.a.rulesTableNoRuleHitsAddDisabledButton))),props:{colSpan:5}}]}]);else{var e=t.data.flatMap((function(e,t){return[{isOpen:!1,rule:e,cells:[{title:h.a.createElement("span",{key:t},!e.reports_shown&&h.a.createElement(_.a,{isRead:!0},h.a.createElement(b.b,{size:"md"})," ",m.formatMessage(z.a.disabled)),h.a.createElement(w.Link,{key:t,to:"/rules/".concat(e.rule_id)}," ",e.description," "))},{title:h.a.createElement("div",{key:t},U()(e.publish_date).fromNow())},{title:h.a.createElement("div",{className:"pf-m-center",key:t,style:{verticalAlign:"top"}},h.a.createElement(I.Battery,{label:m.formatMessage(z.a.totalRisk),labelHidden:!0,severity:e.total_risk}))},{title:h.a.createElement("div",{key:t}," ",e.reports_shown?"".concat(e.impacted_systems_count.toLocaleString()):m.formatMessage(z.a.nA))},{title:h.a.createElement("div",{className:"pf-m-center ",key:t},e.playbook_count?h.a.createElement(R.b,{className:"ansibleCheck"}):m.formatMessage(z.a.no))}]},{parent:2*t,fullWidth:!0,cells:[{title:h.a.createElement(I.Main,{className:"pf-m-light"}," ",h.a.createElement(N.a,{rule:e}))}]}]}));J(e.asMutable())}}),[Me,a,t,o]),Object(g.useEffect)((function(){void 0===a.text?Oe(""):Oe(a.text)}),[a.text]),Object(g.useEffect)((function(){if(!fe){var e=Q({},a),t=_e.length?{text:_e}:{};delete e.text,o(Q({},e,{},t))}}),[Ae]);var xe=function(e){var t=Q({},a);delete t[e],o(t)},Ne=function(e,t){t.length>0?o(Q({},a,{},s()({},e,t))):xe(e)},He=["",{label:m.formatMessage($?z.a.rulesTableActionShow:z.a.rulesTableActionHide),onClick:function(){return function(e){o(Q({},a,{impacting:e})),ee(e),se(0)}(!$)}}],Be=[{label:m.formatMessage(z.a.description),filterValues:{key:"text-filter",onChange:function(e,t){return Oe(t)},value:_e}},{label:F.FILTER_CATEGORIES.total_risk.title,type:F.FILTER_CATEGORIES.total_risk.type,id:F.FILTER_CATEGORIES.total_risk.urlParam,value:"checkbox-".concat(F.FILTER_CATEGORIES.total_risk.urlParam),filterValues:{key:"".concat(F.FILTER_CATEGORIES.total_risk.urlParam,"-filter"),onChange:function(e,t){return Ne(F.FILTER_CATEGORIES.total_risk.urlParam,t)},value:a.total_risk,items:F.FILTER_CATEGORIES.total_risk.values}},{label:F.FILTER_CATEGORIES.res_risk.title,type:F.FILTER_CATEGORIES.res_risk.type,id:F.FILTER_CATEGORIES.res_risk.urlParam,value:"checkbox-".concat(F.FILTER_CATEGORIES.res_risk.urlParam),filterValues:{key:"".concat(F.FILTER_CATEGORIES.res_risk.urlParam,"-filter"),onChange:function(e,t){return Ne(F.FILTER_CATEGORIES.res_risk.urlParam,t)},value:a.res_risk,items:F.FILTER_CATEGORIES.res_risk.values}},{label:F.FILTER_CATEGORIES.impact.title,type:F.FILTER_CATEGORIES.impact.type,id:F.FILTER_CATEGORIES.impact.urlParam,value:"checkbox-".concat(F.FILTER_CATEGORIES.impact.urlParam),filterValues:{key:"".concat(F.FILTER_CATEGORIES.impact.urlParam,"-filter"),onChange:function(e,t){return Ne(F.FILTER_CATEGORIES.impact.urlParam,t)},value:a.impact,items:F.FILTER_CATEGORIES.impact.values}},{label:F.FILTER_CATEGORIES.likelihood.title,type:F.FILTER_CATEGORIES.likelihood.type,id:F.FILTER_CATEGORIES.likelihood.urlParam,value:"checkbox-".concat(F.FILTER_CATEGORIES.likelihood.urlParam),filterValues:{key:"".concat(F.FILTER_CATEGORIES.likelihood.urlParam,"-filter"),onChange:function(e,t){return Ne(F.FILTER_CATEGORIES.likelihood.urlParam,t)},value:a.likelihood,items:F.FILTER_CATEGORIES.likelihood.values}},{label:F.FILTER_CATEGORIES.category.title,type:F.FILTER_CATEGORIES.category.type,id:F.FILTER_CATEGORIES.category.urlParam,value:"checkbox-".concat(F.FILTER_CATEGORIES.category.urlParam),filterValues:{key:"".concat(F.FILTER_CATEGORIES.category.urlParam,"-filter"),onChange:function(e,t){return Ne(F.FILTER_CATEGORIES.category.urlParam,t)},value:a.category,items:F.FILTER_CATEGORIES.category.values}},{label:F.FILTER_CATEGORIES.reports_shown.title,type:F.FILTER_CATEGORIES.reports_shown.type,id:F.FILTER_CATEGORIES.reports_shown.urlParam,value:"radio-".concat(F.FILTER_CATEGORIES.reports_shown.urlParam),filterValues:{key:"".concat(F.FILTER_CATEGORIES.reports_shown.urlParam,"-filter"),onChange:function(e,t){return o(Q({},a,{reports_shown:"undefined"===(r=t)?void 0:r})),void se(0);var r},value:void 0===a.reports_shown?"undefined":"".concat(a.reports_shown),items:F.FILTER_CATEGORIES.reports_shown.values}}],De={filters:function(){var e=Q({},a);delete e.text,delete e.impacting,delete e.reports_shown,delete e.topic,delete e.sort;var t=Object.entries(e);return t.length>0?t.map((function(e){var t=F.FILTER_CATEGORIES[e[0]],a=Array.isArray(e[1])?e[1].map((function(e){return{name:t.values.find((function(t){return t.value===String(e)})).label,value:e}})):[{name:t.values.find((function(t){return t.value===String(e[1])})).label,value:e[1]}];return{category:t.title,chips:a,urlParam:t.urlParam}})):[]}(),onDelete:function(e,t,r){r?o({impacting:!0,reports_shown:"true"}):t.map((function(e){var t=s()({},e.urlParam,a[e.urlParam].filter((function(t){return Number(t)!==Number(e.chips[0].value)})));t[e.urlParam].length>0?o(Q({},a,{},t)):xe(e.urlParam)}))}};return h.a.createElement(h.a.Fragment,null,he&&h.a.createElement(j.a,{handleModalToggle:ve,isModalOpen:he,rule:ke,afterFn:we}),h.a.createElement(I.PrimaryToolbar,{pagination:{itemCount:Fe,page:ie/re+1,perPage:re,onSetPage:function(e,t){Pe(t)},onPerPageSelect:function(e,t){ne(t)},isCompact:!1},exportConfig:{onSelect:function(e,t){return window.location="".concat(F.BASE_URL,"/export/hits.").concat("json"===t?"json":"csv","/").concat(de)}},actionsConfig:{actions:He},filterConfig:{items:Be},activeFiltersConfig:De}),"fulfilled"===r&&h.a.createElement(y.b,{"aria-label":"rule-table",actionResolver:function(e,t){var a=t.rowIndex,r=V[a].rule?V[a].rule:null;return a%2==0&&r?r&&r.reports_shown?[{title:m.formatMessage(z.a.disableRule),onClick:function(e,t){return Ge(t)}}]:[{title:m.formatMessage(z.a.enableRule),onClick:function(e,t){return Ge(t)}}]:null},onCollapse:function(e,t,a){var r=u()(V);r[t]=Q({},r[t],{isOpen:a}),J(r)},sortBy:K,onSort:function(e,t,r){var n="".concat("asc"===r?"":"-").concat(je[t]);X({index:t,direction:r}),o(Q({},a,{sort:n})),se(0)},cells:x,rows:V},h.a.createElement(k.a,null),h.a.createElement(C.a,null)),"pending"===r&&h.a.createElement(P.a,null),"failed"===r&&h.a.createElement(L.a,{message:m.formatMessage(z.a.rulesTableFetchRulesError)}),h.a.createElement(I.TableToolbar,null,h.a.createElement(O.a,{itemCount:Fe,perPage:re,page:ie/re+1,onSetPage:function(e,t){Pe(t)},widgetId:"pagination-options-menu-bottom",variant:O.b.bottom})))};X.propTypes={fetchRules:x.a.func,rulesFetchStatus:x.a.string,rules:x.a.object,filters:x.a.object,addNotification:x.a.func,setFilters:x.a.func,history:x.a.object,intl:x.a.any};t.default=Object(V.c)(q()(Object(B.connect)((function(e,t){return Q({rules:e.AdvisorStore.rules,rulesFetchStatus:e.AdvisorStore.rulesFetchStatus,filters:e.AdvisorStore.filters},t)}),(function(e){return{fetchRules:function(t){return e(m.d(t))},addNotification:function(t){return e(Object(H.addNotification)(t))},setFilters:function(t){return e(m.l(t))}}}))(X)))}}]);
//# sourceMappingURL=RulesTAble.js.map