(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{606:function(e,t,a){"use strict";a.r(t);var r=a(165),n=a.n(r),c=a(273),l=a.n(c),o=a(164),i=a.n(o),s=a(545),u=a.n(s),f=a(517),m=a.n(f),p=a(2),d=a.n(p),b=a(360),g=a(272),h=a.n(g),v=a(1),y=a.n(v),k=a(242),_=a(216),O=a(238),j=a(177),w=a(511),P=a.n(w),E=a(84),S=a(75),M=a(149),C=a(283),x=a(343),R=a(319),A=a(320),N=a(43),T=a(344),F=a(342),D=a(85),H=a(27),V=a(513),B=a(525),L=a(544),z=a(558),J=a(17),I=a(523),U=a(618),W=a(29),q=a(607),G=a(573);function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(a,!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var X=function(e){var t=e.rules,a=e.filters,r=e.rulesFetchStatus,c=e.setFilters,o=e.fetchRules,s=e.addNotification,f=e.history,g=e.intl,h=Object(p.useState)([{title:g.formatMessage(W.a.description),transforms:[R.a]},{title:g.formatMessage(W.a.added),transforms:[R.a,Object(A.a)(15)]},{title:g.formatMessage(W.a.totalRisk),transforms:[R.a]},{title:g.formatMessage(W.a.systems),transforms:[R.a]},{title:d.a.createElement(d.a.Fragment,null,d.a.createElement(k.b,{size:"md"})," ",g.formatMessage(W.a.ansible)),transforms:[R.a],dataLabel:g.formatMessage(W.a.ansible)}]),v=m()(h,1)[0],y=Object(p.useState)([]),w=m()(y,2),S=w[0],D=w[1],H=Object(p.useState)({}),V=m()(H,2),K=V[0],X=V[1],Y=Object(p.useState)("-publish_date"),Z=m()(Y,2),$=Z[0],ee=Z[1],te=Object(p.useState)(a.impacting),ae=m()(te,2),re=ae[0],ne=ae[1],ce=Object(p.useState)(10),le=m()(ce,2),oe=le[0],ie=le[1],se=Object(p.useState)(0),ue=m()(se,2),fe=ue[0],me=ue[1],pe=Object(p.useState)(!0),de=m()(pe,2),be=de[0],ge=de[1],he=Object(p.useState)(""),ve=m()(he,2),ye=ve[0],ke=ve[1],_e=Object(p.useState)(""),Oe=m()(_e,2),je=Oe[0],we=Oe[1],Pe=Object(p.useState)(!1),Ee=m()(Pe,2),Se=Ee[0],Me=Ee[1],Ce=Object(p.useState)({}),xe=m()(Ce,2),Re=xe[0],Ae=xe[1],Ne=Object(q.a)(je,800),Te=t.meta?t.meta.count:0,Fe=function(e){return Object.assign.apply(Object,[{}].concat(u()(Object.entries(e).map((function(e){return Array.isArray(e[1])?i()({},e[0],e[1].join()):i()({},e[0],e[1])})))))},De=function(){o(Q({},Fe(a),{offset:0,limit:oe,impacting:re,sort:$}))},He=Object(p.useCallback)((function(e,t,a){var r="".concat("asc"===a?"":"-").concat({1:"description",2:"publish_date",3:"total_risk",4:"impacted_count",5:"playbook_count"}[t]);X({index:t,direction:a}),ee(r),me(0)}),[ee,X,me]),Ve=function(e){me(e*oe-oe)},Be=function(){var e=l()(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=S[t].rule,e.prev=1,!a.reports_shown){e.next=7;break}Ae(a),Me(!0),e.next=10;break;case 7:return e.next=9,z.a.delete("".concat(J.a,"/ack/").concat(a.rule_id,"/"));case 9:De();case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),s({variant:"danger",dismissable:!0,title:a.reports_shown?g.formatMessage(W.a.rulesTableHideReportsErrorDisabled):g.formatMessage(W.a.rulesTableHideReportsErrorEnabled),description:"".concat(e.t0)});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),Le=Object(p.useCallback)((function(){me(0)}),[]);Object(p.useEffect)((function(){if(f.location.search){var e=new URLSearchParams(f.location.search),t=Array.from(e).reduce((function(e,t){var a=m()(t,2),r=a[0],n=a[1];return Q({},e,i()({},r,"true"===n||"false"===n?JSON.parse(n):n.split(",")))}),{});t.reports_shown=void 0===t.reports_shown||"undefined"===t.reports_shown[0]?void 0:t.reports_shown,ne(t.impacting),c(Q({},t))}ge(!1)}),[]),Object(p.useEffect)((function(){var e=Object.keys(a).map((function(e){return"".concat(e,"=").concat(Array.isArray(a[e])?a[e].join():a[e])})).join("&");ke("?".concat(e)),f.replace({search:"?".concat(e)})}),[a,f]),Object(p.useEffect)((function(){be||o(Q({},Fe(a),{offset:fe,limit:oe,sort:$}))}),[o,be,a,oe,fe,$]),Object(p.useEffect)((function(){S.length||He(null,2,"desc")}),[He,S.length]),Object(p.useEffect)((function(){if(t.data)if(0===t.data.length)D([{cells:[{title:d.a.createElement(I.a,{icon:_.b,iconClass:"ansibleCheck",size:"sm",title:g.formatMessage(W.a.rulesTableNoRuleHitsTitle),text:a.reports_shown?g.formatMessage(W.a.rulesTableNoRuleHitsEnabledRulesBody):g.formatMessage(W.a.rulesTableNoRuleHitsAnyRulesBody)},a.reports_shown&&d.a.createElement(M.a,{variant:"link",style:{paddingTop:24},onClick:function(){c(Q({},a,{reports_shown:void 0})),Le()}},g.formatMessage(W.a.rulesTableNoRuleHitsAddDisabledButton))),props:{colSpan:5}}]}]);else{var e=t.data.flatMap((function(e,t){return[{isOpen:!1,rule:e,cells:[{title:d.a.createElement("span",{key:t},!e.reports_shown&&d.a.createElement(C.a,{isRead:!0},d.a.createElement(O.b,{size:"md"})," ",g.formatMessage(W.a.disabled)),d.a.createElement(E.Link,{key:t,to:"/rules/".concat(e.rule_id)}," ",e.description," "))},{title:d.a.createElement("div",{key:t},P()(e.publish_date).fromNow())},{title:d.a.createElement("div",{className:"pf-m-center",key:t,style:{verticalAlign:"top"}},d.a.createElement(b.Battery,{label:g.formatMessage(W.a.totalRisk),labelHidden:!0,severity:e.total_risk}))},{title:d.a.createElement("div",{key:t}," ",e.reports_shown?"".concat(e.impacted_systems_count.toLocaleString()):g.formatMessage(W.a.nA))},{title:d.a.createElement("div",{className:"pf-m-center ",key:t},e.playbook_count?d.a.createElement(j.b,{className:"ansibleCheck"}):g.formatMessage(W.a.no))}]},{parent:2*t,fullWidth:!0,cells:[{title:d.a.createElement(b.Main,{className:"pf-m-light"}," ",d.a.createElement(U.a,{rule:e}))}]}]}));D(e.asMutable())}}),[Le,a,t,c]),Object(p.useEffect)((function(){void 0===a.text?we(""):we(a.text)}),[a.text]),Object(p.useEffect)((function(){if(!be){var e=Q({},a),t=je.length?{text:je}:{};delete e.text,c(Q({},e,{},t))}}),[Ne]);var ze=function(e){var t=Q({},a);delete t[e],c(t)},Je=function(e,t){t.length>0?c(Q({},a,{},i()({},e,t))):ze(e)},Ie=["",{label:g.formatMessage(re?W.a.rulesTableActionShow:W.a.rulesTableActionHide),onClick:function(){return function(e){c(Q({},a,{impacting:e})),ne(e),me(0)}(!re)}}],Ue=[{label:g.formatMessage(W.a.description),filterValues:{key:"text-filter",onChange:function(e,t){return we(t)},value:je}},{label:J.c.total_risk.title,type:J.c.total_risk.type,id:J.c.total_risk.urlParam,value:"checkbox-".concat(J.c.total_risk.urlParam),filterValues:{key:"".concat(J.c.total_risk.urlParam,"-filter"),onChange:function(e,t){return Je(J.c.total_risk.urlParam,t)},value:a.total_risk,items:J.c.total_risk.values}},{label:J.c.res_risk.title,type:J.c.res_risk.type,id:J.c.res_risk.urlParam,value:"checkbox-".concat(J.c.res_risk.urlParam),filterValues:{key:"".concat(J.c.res_risk.urlParam,"-filter"),onChange:function(e,t){return Je(J.c.res_risk.urlParam,t)},value:a.res_risk,items:J.c.res_risk.values}},{label:J.c.impact.title,type:J.c.impact.type,id:J.c.impact.urlParam,value:"checkbox-".concat(J.c.impact.urlParam),filterValues:{key:"".concat(J.c.impact.urlParam,"-filter"),onChange:function(e,t){return Je(J.c.impact.urlParam,t)},value:a.impact,items:J.c.impact.values}},{label:J.c.likelihood.title,type:J.c.likelihood.type,id:J.c.likelihood.urlParam,value:"checkbox-".concat(J.c.likelihood.urlParam),filterValues:{key:"".concat(J.c.likelihood.urlParam,"-filter"),onChange:function(e,t){return Je(J.c.likelihood.urlParam,t)},value:a.likelihood,items:J.c.likelihood.values}},{label:J.c.category.title,type:J.c.category.type,id:J.c.category.urlParam,value:"checkbox-".concat(J.c.category.urlParam),filterValues:{key:"".concat(J.c.category.urlParam,"-filter"),onChange:function(e,t){return Je(J.c.category.urlParam,t)},value:a.category,items:J.c.category.values}},{label:J.c.reports_shown.title,type:J.c.reports_shown.type,id:J.c.reports_shown.urlParam,value:"radio-".concat(J.c.reports_shown.urlParam),filterValues:{key:"".concat(J.c.reports_shown.urlParam,"-filter"),onChange:function(e,t){return c(Q({},a,{reports_shown:"undefined"===(r=t)?void 0:r})),void me(0);var r},value:void 0===a.reports_shown?"undefined":"".concat(a.reports_shown),items:J.c.reports_shown.values}}],We={filters:function(){var e=Q({},a);delete e.text,delete e.impacting,delete e.reports_shown,delete e.topic;var t=Object.entries(e);return t.length>0?t.map((function(e){var t=J.c[e[0]],a=Array.isArray(e[1])?e[1].map((function(e){return{name:t.values.find((function(t){return t.value===String(e)})).label,value:e}})):[{name:t.values.find((function(t){return t.value===String(e[1])})).label,value:e[1]}];return{category:t.title,chips:a,urlParam:t.urlParam}})):[]}(),onDelete:function(e,t,r){r?c({impacting:!0,reports_shown:"true"}):t.map((function(e){var t=i()({},e.urlParam,a[e.urlParam].filter((function(t){return Number(t)!==Number(e.chips[0].value)})));t[e.urlParam].length>0?c(Q({},a,{},t)):ze(e.urlParam)}))}};return d.a.createElement(d.a.Fragment,null,d.a.createElement(G.a,{handleModalToggle:Me,isModalOpen:Se,rule:Re,afterDisableFn:De}),d.a.createElement(b.PrimaryToolbar,{pagination:{itemCount:Te,page:fe/oe+1,perPage:oe,onSetPage:function(e,t){Ve(t)},onPerPageSelect:function(e,t){ie(t)},isCompact:!1},exportConfig:{onSelect:function(e,t){return window.location="".concat(J.a,"/export/hits.").concat("json"===t?"json":"csv","/").concat(ye)}},actionsConfig:{actions:Ie},filterConfig:{items:Ue},activeFiltersConfig:We}),"fulfilled"===r&&d.a.createElement(N.b,{"aria-label":"rule-table",actionResolver:function(e,t){var a=t.rowIndex,r=S[a].rule?S[a].rule:null;return a%2==0&&r?r&&r.reports_shown?[{title:g.formatMessage(W.a.disableRule),onClick:function(e,t){return Be(t)}}]:[{title:g.formatMessage(W.a.enableRule),onClick:function(e,t){return Be(t)}}]:null},onCollapse:function(e,t,a){var r=u()(S);r[t]=Q({},r[t],{isOpen:a}),D(r)},sortBy:K,onSort:He,cells:v,rows:S},d.a.createElement(T.a,null),d.a.createElement(F.a,null)),"pending"===r&&d.a.createElement(B.a,null),"failed"===r&&d.a.createElement(L.a,{message:g.formatMessage(W.a.rulesTableFetchRulesError)}),d.a.createElement(b.TableToolbar,null,d.a.createElement(x.a,{itemCount:Te,perPage:oe,page:fe/oe+1,onSetPage:function(e,t){Ve(t)},widgetId:"pagination-options-menu-bottom",variant:x.b.bottom})))};X.propTypes={fetchRules:y.a.func,rulesFetchStatus:y.a.string,rules:y.a.object,filters:y.a.object,addNotification:y.a.func,setFilters:y.a.func,history:y.a.object,intl:y.a.any};t.default=Object(H.c)(h()(Object(S.connect)((function(e,t){return Q({rules:e.AdvisorStore.rules,rulesFetchStatus:e.AdvisorStore.rulesFetchStatus,filters:e.AdvisorStore.filters},t)}),(function(e){return{fetchRules:function(t){return e(V.c(t))},addNotification:function(t){return e(Object(D.addNotification)(t))},setFilters:function(t){return e(V.j(t))}}}))(X)))}}]);
//# sourceMappingURL=RulesTAble.js.map