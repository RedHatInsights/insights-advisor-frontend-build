(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{612:function(e,t,a){"use strict";a.r(t);var r=a(160),n=a.n(r),o=a(271),l=a.n(o),s=a(159),i=a.n(s),c=a(549),u=a.n(c),f=a(270),E=a.n(f),m=a(520),p=a(238),d=a(211),b=a(233),R=a(172),T=a(144),_=a(286),O=a(317),g=a(318),I=a(347),h=a(364),v=a(2),S=a.n(v),y=a(323),k=a(324),C=a(43),A=a(348),F=a(346),j=a(545),L=a(15),w=a(578),P=a(548),G=a(97),M=a(530),x=a(529),N=a(1),B=a.n(N),D=a(623),H=a(601),V=a(82),z=a(96),J=a(613),U=a(27),W=a(29),q=a(518),K=a.n(q),Q=a(269),X=a.n(Q);function Y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var $=function(e){var t=e.rules,a=e.filters,r=e.rulesFetchStatus,o=e.setFilters,s=e.fetchRules,c=e.addNotification,f=e.history,m=e.intl,N=Object(v.useState)([{title:m.formatMessage(W.a.description),transforms:[y.a]},{title:m.formatMessage(W.a.added),transforms:[y.a,Object(k.a)(15)]},{title:m.formatMessage(W.a.totalRisk),transforms:[y.a]},{title:m.formatMessage(W.a.systems),transforms:[y.a]},{title:S.a.createElement(S.a.Fragment,null,S.a.createElement(p.b,{size:"md"})," ",m.formatMessage(W.a.ansible)),transforms:[y.a],dataLabel:m.formatMessage(W.a.ansible)}]),B=E()(N,1)[0],V=Object(v.useState)([]),z=E()(V,2),U=z[0],q=z[1],Q=Object(v.useState)({}),X=E()(Q,2),Y=X[0],$=X[1],ee=Object(v.useState)(a.impacting),te=E()(ee,2),ae=te[0],re=te[1],ne=Object(v.useState)(10),oe=E()(ne,2),le=oe[0],se=oe[1],ie=Object(v.useState)(0),ce=E()(ie,2),ue=ce[0],fe=ce[1],Ee=Object(v.useState)(!0),me=E()(Ee,2),pe=me[0],de=me[1],be=Object(v.useState)(""),Re=E()(be,2),Te=Re[0],_e=Re[1],Oe=Object(v.useState)(""),ge=E()(Oe,2),Ie=ge[0],he=ge[1],ve=Object(v.useState)(!1),Se=E()(ve,2),ye=Se[0],ke=Se[1],Ce=Object(v.useState)({}),Ae=E()(Ce,2),Fe=Ae[0],je=Ae[1],Le=Object(v.useState)(!1),we=E()(Le,2),Pe=we[0],Ge=we[1],Me=Object(v.useState)({}),xe=E()(Me,2),Ne=xe[0],Be=xe[1],De=Object(J.a)(Ie,800),He=t.meta?t.meta.count:0,Ve={1:"description",2:"publish_date",3:"total_risk",4:"impacted_count",5:"playbook_count"},ze=function(e){return Object.assign.apply(Object,[{}].concat(u()(Object.entries(e).map((function(e){return Array.isArray(e[1])?i()({},e[0],e[1].join()):i()({},e[0],e[1])})))))},Je=function(){s(Z({},ze(a),{offset:0,limit:le,impacting:ae}))},Ue=function(e){fe(e*le-le)},We=function(){var e=l()(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=U[t].rule,e.prev=1,!a.reports_shown){e.next=7;break}je(a),ke(!0),e.next=10;break;case 7:return e.next=9,j.a.delete("".concat(L.BASE_URL,"/ack/").concat(a.rule_id,"/"));case 9:Je();case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),c({variant:"danger",dismissable:!0,title:a.reports_shown?m.formatMessage(W.a.rulesTableHideReportsErrorDisabled):m.formatMessage(W.a.rulesTableHideReportsErrorEnabled),description:"".concat(e.t0)});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),qe=Object(v.useCallback)((function(){fe(0)}),[]);Object(v.useEffect)((function(){if(f.location.search){var e=new URLSearchParams(f.location.search),t=Array.from(e).reduce((function(e,t){var a=E()(t,2),r=a[0],n=a[1];return Z({},e,i()({},r,"true"===n||"false"===n?JSON.parse(n):n.split(",")))}),{});t.reports_shown=void 0===t.reports_shown||"undefined"===t.reports_shown[0]?void 0:t.reports_shown,t.sort=void 0===t.sort?"-publish_date":t.sort[0],re(t.impacting),o(Z({},t))}de(!1)}),[]),Object(v.useEffect)((function(){var e=Object.keys(a).map((function(e){return"".concat(e,"=").concat(Array.isArray(a[e])?a[e].join():a[e])})).join("&");_e("?".concat(e)),f.replace({search:"?".concat(e)})}),[a,f]),Object(v.useEffect)((function(){pe||s(Z({},ze(a),{offset:ue,limit:le}))}),[s,pe,a,le,ue]),Object(v.useEffect)((function(){if(void 0!==a.sort){var e=Number(Object.entries(Ve).find((function(e){return e[1]===a.sort||"-".concat(e[1])===a.sort}))[0]),t="-"===a.sort[0]?"desc":"asc";$({index:e,direction:t})}}),[a,a.sort]),Object(v.useEffect)((function(){if(t.data)if(0===t.data.length)q([{cells:[{title:S.a.createElement(x.a,{icon:d.b,iconClass:"ansibleCheck",size:"sm",title:m.formatMessage(W.a.rulesTableNoRuleHitsTitle),text:a.reports_shown?m.formatMessage(W.a.rulesTableNoRuleHitsEnabledRulesBody):m.formatMessage(W.a.rulesTableNoRuleHitsAnyRulesBody)},a.reports_shown&&S.a.createElement(T.a,{variant:"link",style:{paddingTop:24},onClick:function(){o(Z({},a,{reports_shown:void 0})),qe()}},m.formatMessage(W.a.rulesTableNoRuleHitsAddDisabledButton))),props:{colSpan:5}}]}]);else{var e=t.data.flatMap((function(e,t){return[{isOpen:!1,rule:e,cells:[{title:S.a.createElement("span",{key:t},!e.reports_shown&&S.a.createElement(_.a,{isRead:!0},S.a.createElement(b.b,{size:"md"})," ",m.formatMessage(W.a.disabled)),S.a.createElement(G.Link,{key:t,to:"/rules/".concat(e.rule_id)}," ",e.description," "))},{title:S.a.createElement("div",{key:t},K()(e.publish_date).fromNow())},{title:S.a.createElement("div",{className:"pf-m-center",key:t,style:{verticalAlign:"top"}},S.a.createElement(h.Battery,{label:m.formatMessage(W.a.totalRisk),labelHidden:!0,severity:e.total_risk}))},{title:S.a.createElement("div",{key:t}," ",e.reports_shown?"".concat(e.impacted_systems_count.toLocaleString()):m.formatMessage(W.a.nA))},{title:S.a.createElement("div",{className:"pf-m-center ",key:t},e.playbook_count?S.a.createElement(R.b,{className:"ansibleCheck"}):m.formatMessage(W.a.no))}]},{parent:2*t,fullWidth:!0,cells:[{title:S.a.createElement(h.Main,{className:"pf-m-light"},S.a.createElement(O.a,{gutter:"md"},e.hosts_acked_count?S.a.createElement(g.a,null,S.a.createElement(b.b,{size:"sm"})," ",m.formatMessage(W.a.ruleIsDisabledForSystemsBody,{systems:e.hosts_acked_count}),"  ",S.a.createElement(T.a,{isInline:!0,variant:"link",onClick:function(){Be(e),Ge(!0)}},m.formatMessage(W.a.viewSystems))):S.a.createElement(S.a.Fragment,null),S.a.createElement(D.a,{rule:e})))}]}]}));q(e.asMutable())}}),[qe,a,t,o]),Object(v.useEffect)((function(){void 0===a.text?he(""):he(a.text)}),[a.text]),Object(v.useEffect)((function(){if(!pe){var e=Z({},a),t=Ie.length?{text:Ie}:{};delete e.text,o(Z({},e,{},t))}}),[De]);var Ke=function(e){var t=Z({},a);delete t[e],o(t)},Qe=function(e,t){t.length>0?o(Z({},a,{},i()({},e,t))):Ke(e)},Xe=["",{label:m.formatMessage(ae?W.a.rulesTableActionShow:W.a.rulesTableActionHide),onClick:function(){return function(e){o(Z({},a,{impacting:e})),re(e),fe(0)}(!ae)}}],Ye=[{label:m.formatMessage(W.a.description),filterValues:{key:"text-filter",onChange:function(e,t){return he(t)},value:Ie}},{label:L.FILTER_CATEGORIES.total_risk.title,type:L.FILTER_CATEGORIES.total_risk.type,id:L.FILTER_CATEGORIES.total_risk.urlParam,value:"checkbox-".concat(L.FILTER_CATEGORIES.total_risk.urlParam),filterValues:{key:"".concat(L.FILTER_CATEGORIES.total_risk.urlParam,"-filter"),onChange:function(e,t){return Qe(L.FILTER_CATEGORIES.total_risk.urlParam,t)},value:a.total_risk,items:L.FILTER_CATEGORIES.total_risk.values}},{label:L.FILTER_CATEGORIES.res_risk.title,type:L.FILTER_CATEGORIES.res_risk.type,id:L.FILTER_CATEGORIES.res_risk.urlParam,value:"checkbox-".concat(L.FILTER_CATEGORIES.res_risk.urlParam),filterValues:{key:"".concat(L.FILTER_CATEGORIES.res_risk.urlParam,"-filter"),onChange:function(e,t){return Qe(L.FILTER_CATEGORIES.res_risk.urlParam,t)},value:a.res_risk,items:L.FILTER_CATEGORIES.res_risk.values}},{label:L.FILTER_CATEGORIES.impact.title,type:L.FILTER_CATEGORIES.impact.type,id:L.FILTER_CATEGORIES.impact.urlParam,value:"checkbox-".concat(L.FILTER_CATEGORIES.impact.urlParam),filterValues:{key:"".concat(L.FILTER_CATEGORIES.impact.urlParam,"-filter"),onChange:function(e,t){return Qe(L.FILTER_CATEGORIES.impact.urlParam,t)},value:a.impact,items:L.FILTER_CATEGORIES.impact.values}},{label:L.FILTER_CATEGORIES.likelihood.title,type:L.FILTER_CATEGORIES.likelihood.type,id:L.FILTER_CATEGORIES.likelihood.urlParam,value:"checkbox-".concat(L.FILTER_CATEGORIES.likelihood.urlParam),filterValues:{key:"".concat(L.FILTER_CATEGORIES.likelihood.urlParam,"-filter"),onChange:function(e,t){return Qe(L.FILTER_CATEGORIES.likelihood.urlParam,t)},value:a.likelihood,items:L.FILTER_CATEGORIES.likelihood.values}},{label:L.FILTER_CATEGORIES.category.title,type:L.FILTER_CATEGORIES.category.type,id:L.FILTER_CATEGORIES.category.urlParam,value:"checkbox-".concat(L.FILTER_CATEGORIES.category.urlParam),filterValues:{key:"".concat(L.FILTER_CATEGORIES.category.urlParam,"-filter"),onChange:function(e,t){return Qe(L.FILTER_CATEGORIES.category.urlParam,t)},value:a.category,items:L.FILTER_CATEGORIES.category.values}},{label:L.FILTER_CATEGORIES.reports_shown.title,type:L.FILTER_CATEGORIES.reports_shown.type,id:L.FILTER_CATEGORIES.reports_shown.urlParam,value:"radio-".concat(L.FILTER_CATEGORIES.reports_shown.urlParam),filterValues:{key:"".concat(L.FILTER_CATEGORIES.reports_shown.urlParam,"-filter"),onChange:function(e,t){return o(Z({},a,{reports_shown:"undefined"===(r=t)?void 0:r})),void fe(0);var r},value:void 0===a.reports_shown?"undefined":"".concat(a.reports_shown),items:L.FILTER_CATEGORIES.reports_shown.values}}],Ze={filters:function(){var e=Z({},a);delete e.text,delete e.impacting,delete e.reports_shown,delete e.topic,delete e.sort;var t=Object.entries(e);return t.length>0?t.map((function(e){var t=L.FILTER_CATEGORIES[e[0]],a=Array.isArray(e[1])?e[1].map((function(e){return{name:t.values.find((function(t){return t.value===String(e)})).label,value:e}})):[{name:t.values.find((function(t){return t.value===String(e[1])})).label,value:e[1]}];return{category:t.title,chips:a,urlParam:t.urlParam}})):[]}(),onDelete:function(e,t,r){r?o({impacting:!0,reports_shown:"true"}):t.map((function(e){var t=i()({},e.urlParam,a[e.urlParam].filter((function(t){return Number(t)!==Number(e.chips[0].value)})));t[e.urlParam].length>0?o(Z({},a,{},t)):Ke(e.urlParam)}))}};return S.a.createElement(S.a.Fragment,null,Pe&&S.a.createElement(H.a,{handleModalToggle:function(e){return Ge(e)},isModalOpen:Pe,afterFn:function(){Je()},rule:Ne}),ye&&S.a.createElement(w.a,{handleModalToggle:ke,isModalOpen:ye,rule:Fe,afterFn:Je}),S.a.createElement(h.PrimaryToolbar,{pagination:{itemCount:He,page:ue/le+1,perPage:le,onSetPage:function(e,t){Ue(t)},onPerPageSelect:function(e,t){se(t)},isCompact:!1},exportConfig:{onSelect:function(e,t){return window.location="".concat(L.BASE_URL,"/export/hits.").concat("json"===t?"json":"csv","/").concat(Te)}},actionsConfig:{actions:Xe},filterConfig:{items:Ye},activeFiltersConfig:Ze}),"fulfilled"===r&&S.a.createElement(C.b,{"aria-label":"rule-table",actionResolver:function(e,t){var a=t.rowIndex,r=U[a].rule?U[a].rule:null;return a%2==0&&r?r&&r.reports_shown?[{title:m.formatMessage(W.a.disableRule),onClick:function(e,t){return We(t)}}]:[{title:m.formatMessage(W.a.enableRule),onClick:function(e,t){return We(t)}}]:null},onCollapse:function(e,t,a){var r=u()(U);r[t]=Z({},r[t],{isOpen:a}),q(r)},sortBy:Y,onSort:function(e,t,r){var n="".concat("asc"===r?"":"-").concat(Ve[t]);$({index:t,direction:r}),o(Z({},a,{sort:n})),fe(0)},cells:B,rows:U},S.a.createElement(A.a,null),S.a.createElement(F.a,null)),"pending"===r&&S.a.createElement(M.a,null),"failed"===r&&S.a.createElement(P.a,{message:m.formatMessage(W.a.rulesTableFetchRulesError)}),S.a.createElement(h.TableToolbar,null,S.a.createElement(I.a,{itemCount:He,perPage:le,page:ue/le+1,onSetPage:function(e,t){Ue(t)},widgetId:"pagination-options-menu-bottom",variant:I.b.bottom})))};$.propTypes={fetchRules:B.a.func,rulesFetchStatus:B.a.string,rules:B.a.object,filters:B.a.object,addNotification:B.a.func,setFilters:B.a.func,history:B.a.object,intl:B.a.any};t.default=Object(U.c)(X()(Object(z.connect)((function(e,t){return Z({rules:e.AdvisorStore.rules,rulesFetchStatus:e.AdvisorStore.rulesFetchStatus,filters:e.AdvisorStore.filters},t)}),(function(e){return{fetchRules:function(t){return e(m.d(t))},addNotification:function(t){return e(Object(V.addNotification)(t))},setFilters:function(t){return e(m.l(t))}}}))($)))}}]);
//# sourceMappingURL=RulesTAble.js.map