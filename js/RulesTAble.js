(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{454:function(e,t,a){(e.exports=a(6)(!1)).push([e.i,".pf-c-check__label #battery_svg{height:1.25rem}\n",""])},524:function(e,t,a){"use strict";a.r(t);var r=a(156),n=a.n(r),o=a(260),i=a.n(o),s=a(155),l=a.n(s),c=a(525),u=a.n(c),f=a(258),m=a.n(f),E=(a(529),a(434)),p=a(15),d=a(236),b=a(207),_=a(230),g=a(167),R=a(139),T=a(275),O=a(137),h=a(306),I=a(307),y=a(316),v=a(59),S=a(2),k=a.n(S),A=a(310),C=a(311),F=a(44),L=a(318),j=a(315),w=a(448),P=a(480),G=a(450),M=a(98),x=a(440),N=a(441),D=a(1),B=a.n(D),H=a(543),V=a(515),z=a(82),J=a(97),U=a(530),K=a(30),W=a(22),q=a(433),Q=a.n(q),X=a(259),Y=a.n(X);function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ee=function(e){var t=e.rules,a=e.filters,r=e.rulesFetchStatus,o=e.setFilters,s=e.fetchRules,c=e.addNotification,f=e.history,E=e.intl,D=Object(S.useState)([{title:E.formatMessage(W.a.description),transforms:[A.a]},{title:E.formatMessage(W.a.added),transforms:[A.a,Object(C.a)(15)]},{title:E.formatMessage(W.a.totalRisk),transforms:[A.a,Object(C.a)(15)]},{title:E.formatMessage(W.a.systems),transforms:[A.a]},{title:k.a.createElement(k.a.Fragment,null,k.a.createElement(d.b,{size:"md"})," ",E.formatMessage(W.a.ansible)),transforms:[A.a],dataLabel:E.formatMessage(W.a.ansible)}]),B=m()(D,1)[0],z=Object(S.useState)([]),J=m()(z,2),K=J[0],q=J[1],X=Object(S.useState)({}),Y=m()(X,2),Z=Y[0],ee=Y[1],te=Object(S.useState)(a.impacting),ae=m()(te,2),re=ae[0],ne=ae[1],oe=Object(S.useState)(10),ie=m()(oe,2),se=ie[0],le=ie[1],ce=Object(S.useState)(0),ue=m()(ce,2),fe=ue[0],me=ue[1],Ee=Object(S.useState)(!0),pe=m()(Ee,2),de=pe[0],be=pe[1],_e=Object(S.useState)(""),ge=m()(_e,2),Re=ge[0],Te=ge[1],Oe=Object(S.useState)(""),he=m()(Oe,2),Ie=he[0],ye=he[1],ve=Object(S.useState)(!1),Se=m()(ve,2),ke=Se[0],Ae=Se[1],Ce=Object(S.useState)({}),Fe=m()(Ce,2),Le=Fe[0],je=Fe[1],we=Object(S.useState)(!1),Pe=m()(we,2),Ge=Pe[0],Me=Pe[1],xe=Object(S.useState)({}),Ne=m()(xe,2),De=Ne[0],Be=Ne[1],He=Object(U.a)(Ie,800),Ve=t.meta?t.meta.count:0,ze={1:"description",2:"publish_date",3:"total_risk",4:"impacted_count",5:"playbook_count"},Je=function(e){return Object.assign.apply(Object,[{}].concat(u()(Object.entries(e).map((function(e){return Array.isArray(e[1])?l()({},e[0],e[1].join()):l()({},e[0],e[1])})))))},Ue=function(){s($({},Je(a),{offset:0,limit:se,impacting:re}))},Ke=function(e){me(e*se-se)},We=function(e){var t="undefined"===e?void 0:e;o($({},a,{reports_shown:t},"true"!==t&&{impacting:!1})),"true"!==t&&ne(!1),me(0)},qe=function(){var e=i()(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=K[t].rule,e.prev=1,!a.reports_shown){e.next=7;break}je(a),Ae(!0),e.next=10;break;case 7:return e.next=9,w.a.delete("".concat(p.BASE_URL,"/ack/").concat(a.rule_id,"/"));case 9:Ue();case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),c({variant:"danger",dismissable:!0,title:a.reports_shown?E.formatMessage(W.a.rulesTableHideReportsErrorDisabled):E.formatMessage(W.a.rulesTableHideReportsErrorEnabled),description:"".concat(e.t0)});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),Qe=Object(S.useCallback)((function(){me(0)}),[]);Object(S.useEffect)((function(){if(f.location.search){var e=new URLSearchParams(f.location.search),t=Array.from(e).reduce((function(e,t){var a=m()(t,2),r=a[0],n=a[1];return $({},e,l()({},r,"true"===n||"false"===n?JSON.parse(n):n.split(",")))}),{});t.reports_shown=void 0===t.reports_shown||"undefined"===t.reports_shown[0]?void 0:t.reports_shown,t.sort=void 0===t.sort?"-publish_date":t.sort[0],ne(t.impacting),o($({},t))}be(!1)}),[]),Object(S.useEffect)((function(){var e=Object.keys(a).map((function(e){return"".concat(e,"=").concat(Array.isArray(a[e])?a[e].join():a[e])})).join("&");Te("?".concat(e)),f.replace({search:"?".concat(e)})}),[a,f]),Object(S.useEffect)((function(){de||s($({},Je(a),{offset:fe,limit:se}))}),[s,de,a,se,fe]),Object(S.useEffect)((function(){if(void 0!==a.sort){var e=Number(Object.entries(ze).find((function(e){return e[1]===a.sort||"-".concat(e[1])===a.sort}))[0]),t="-"===a.sort[0]?"desc":"asc";ee({index:e,direction:t})}}),[a,a.sort]),Object(S.useEffect)((function(){if(t.data)if(0===t.data.length)q([{cells:[{title:k.a.createElement(N.a,{icon:b.b,iconClass:"ansibleCheck",size:"sm",title:E.formatMessage(W.a.rulesTableNoRuleHitsTitle),text:a.reports_shown?E.formatMessage(W.a.rulesTableNoRuleHitsEnabledRulesBody):E.formatMessage(W.a.rulesTableNoRuleHitsAnyRulesBody)},a.reports_shown&&k.a.createElement(R.a,{variant:"link",style:{paddingTop:24},onClick:function(){We("undefined"),Qe()}},E.formatMessage(W.a.rulesTableNoRuleHitsAddDisabledButton))),props:{colSpan:5}}]}]);else{var e=t.data.flatMap((function(e,t){return[{isOpen:!1,rule:e,cells:[{title:k.a.createElement("span",{key:t},!e.reports_shown&&k.a.createElement(T.a,{isRead:!0},k.a.createElement(_.b,{size:"md"})," ",E.formatMessage(W.a.disabled)),k.a.createElement(M.Link,{key:t,to:"/rules/".concat(e.rule_id)}," ",e.description," "))},{title:k.a.createElement("div",{key:t},Q()(e.publish_date).fromNow())},{title:k.a.createElement("div",{className:"pf-m-center",key:t},k.a.createElement(O.a,{key:t,position:O.b.bottom,content:E.formatMessage(W.a.rulesDetailsTotalriskBody,{likelihood:p.LIKELIHOOD_LABEL[e.likelihood]||E.formatMessage(W.a.undefined),impact:p.IMPACT_LABEL[e.impact.impact]||E.formatMessage(W.a.undefined),strong:function(e){return k.a.createElement("strong",null,e)}})},k.a.createElement(v.Battery,{label:p.TOTAL_RISK_LABEL[e.total_risk]||E.formatMessage(W.a.undefined),severity:e.total_risk})))},{title:k.a.createElement("div",{key:t}," ",e.reports_shown?"".concat(e.impacted_systems_count.toLocaleString()):E.formatMessage(W.a.nA))},{title:k.a.createElement("div",{className:"pf-m-center ",key:t},e.playbook_count?k.a.createElement(g.b,{className:"ansibleCheck"}):E.formatMessage(W.a.no))}]},{parent:2*t,fullWidth:!0,cells:[{title:k.a.createElement(v.Main,{className:"pf-m-light"},k.a.createElement(h.a,{gutter:"md"},e.hosts_acked_count?k.a.createElement(I.a,null,k.a.createElement(_.b,{size:"sm"})," ",e.hosts_acked_count&&!e.impacted_systems_count?E.formatMessage(W.a.ruleIsDisabledForAllSystems):E.formatMessage(W.a.ruleIsDisabledForSystemsBody,{systems:e.hosts_acked_count}),"  ",k.a.createElement(R.a,{isInline:!0,variant:"link",onClick:function(){Be(e),Me(!0)}},E.formatMessage(W.a.viewSystems))):k.a.createElement(k.a.Fragment,null),k.a.createElement(H.a,{rule:e})))}]}]}));q(e.asMutable())}}),[Qe,a,t,o]),Object(S.useEffect)((function(){void 0===a.text?ye(""):ye(a.text)}),[a.text]),Object(S.useEffect)((function(){if(!de){var e=$({},a),t=Ie.length?{text:Ie}:{};delete e.text,o($({},e,{},t))}}),[He]);var Xe=function(e){var t=$({},a);delete t[e],o(t)},Ye=function(e,t){t.length>0?o($({},a,{},l()({},e,t))):Xe(e)},Ze=["",{label:E.formatMessage(re?W.a.rulesTableActionShow:W.a.rulesTableActionHide),onClick:function(){return function(e){o($({},a,{impacting:e})),ne(e),me(0)}(!re)}}],$e=[{label:E.formatMessage(W.a.description),filterValues:{key:"text-filter",onChange:function(e,t){return ye(t)},value:Ie}},{label:p.FILTER_CATEGORIES.total_risk.title,type:p.FILTER_CATEGORIES.total_risk.type,id:p.FILTER_CATEGORIES.total_risk.urlParam,value:"checkbox-".concat(p.FILTER_CATEGORIES.total_risk.urlParam),filterValues:{key:"".concat(p.FILTER_CATEGORIES.total_risk.urlParam,"-filter"),onChange:function(e,t){return Ye(p.FILTER_CATEGORIES.total_risk.urlParam,t)},value:a.total_risk,items:p.FILTER_CATEGORIES.total_risk.values}},{label:p.FILTER_CATEGORIES.res_risk.title,type:p.FILTER_CATEGORIES.res_risk.type,id:p.FILTER_CATEGORIES.res_risk.urlParam,value:"checkbox-".concat(p.FILTER_CATEGORIES.res_risk.urlParam),filterValues:{key:"".concat(p.FILTER_CATEGORIES.res_risk.urlParam,"-filter"),onChange:function(e,t){return Ye(p.FILTER_CATEGORIES.res_risk.urlParam,t)},value:a.res_risk,items:p.FILTER_CATEGORIES.res_risk.values}},{label:p.FILTER_CATEGORIES.impact.title,type:p.FILTER_CATEGORIES.impact.type,id:p.FILTER_CATEGORIES.impact.urlParam,value:"checkbox-".concat(p.FILTER_CATEGORIES.impact.urlParam),filterValues:{key:"".concat(p.FILTER_CATEGORIES.impact.urlParam,"-filter"),onChange:function(e,t){return Ye(p.FILTER_CATEGORIES.impact.urlParam,t)},value:a.impact,items:p.FILTER_CATEGORIES.impact.values}},{label:p.FILTER_CATEGORIES.likelihood.title,type:p.FILTER_CATEGORIES.likelihood.type,id:p.FILTER_CATEGORIES.likelihood.urlParam,value:"checkbox-".concat(p.FILTER_CATEGORIES.likelihood.urlParam),filterValues:{key:"".concat(p.FILTER_CATEGORIES.likelihood.urlParam,"-filter"),onChange:function(e,t){return Ye(p.FILTER_CATEGORIES.likelihood.urlParam,t)},value:a.likelihood,items:p.FILTER_CATEGORIES.likelihood.values}},{label:p.FILTER_CATEGORIES.category.title,type:p.FILTER_CATEGORIES.category.type,id:p.FILTER_CATEGORIES.category.urlParam,value:"checkbox-".concat(p.FILTER_CATEGORIES.category.urlParam),filterValues:{key:"".concat(p.FILTER_CATEGORIES.category.urlParam,"-filter"),onChange:function(e,t){return Ye(p.FILTER_CATEGORIES.category.urlParam,t)},value:a.category,items:p.FILTER_CATEGORIES.category.values}},{label:p.FILTER_CATEGORIES.reports_shown.title,type:p.FILTER_CATEGORIES.reports_shown.type,id:p.FILTER_CATEGORIES.reports_shown.urlParam,value:"radio-".concat(p.FILTER_CATEGORIES.reports_shown.urlParam),filterValues:{key:"".concat(p.FILTER_CATEGORIES.reports_shown.urlParam,"-filter"),onChange:function(e,t){return We(t)},value:void 0===a.reports_shown?"undefined":"".concat(a.reports_shown),items:p.FILTER_CATEGORIES.reports_shown.values}}],et={filters:function(){var e=$({},a);delete e.impacting,delete e.reports_shown,delete e.topic,delete e.sort;var t=Object.entries(e);return t.length>0?t.map((function(e){if(p.FILTER_CATEGORIES[e[0]]){var t=p.FILTER_CATEGORIES[e[0]],a=Array.isArray(e[1])?e[1].map((function(e){var a=t.values.find((function(t){return t.value===String(e)}));return{name:a.text||a.label,value:e}})):[{name:t.values.find((function(t){return t.value===String(e[1])})).label,value:e[1]}];return{category:t.title,chips:a,urlParam:t.urlParam}}return{category:"Description",chips:[{name:e[1],value:e[1]}],urlParam:e[0]}})):[]}(),onDelete:function(e,t,r){r?o($({},a.topic&&{topic:a.topic},{impacting:!0,reports_shown:"true"})):t.map((function(e){var t=l()({},e.urlParam,Array.isArray(a[e.urlParam])?a[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?o($({},a,{},t)):Xe(e.urlParam)}))}};return k.a.createElement(k.a.Fragment,null,Ge&&k.a.createElement(V.a,{handleModalToggle:function(e){return Me(e)},isModalOpen:Ge,afterFn:function(){Ue()},rule:De}),ke&&k.a.createElement(P.a,{handleModalToggle:Ae,isModalOpen:ke,rule:Le,afterFn:Ue}),k.a.createElement(v.PrimaryToolbar,{pagination:{itemCount:Ve,page:fe/se+1,perPage:se,onSetPage:function(e,t){Ke(t)},onPerPageSelect:function(e,t){le(t)},isCompact:!1},exportConfig:{onSelect:function(e,t){return window.location="".concat(p.BASE_URL,"/export/hits.").concat("json"===t?"json":"csv","/").concat(Re)},isDisabled:!re},actionsConfig:{actions:Ze},filterConfig:{items:$e},activeFiltersConfig:et}),"fulfilled"===r&&k.a.createElement(F.b,{"aria-label":"rule-table",actionResolver:function(e,t){var a=t.rowIndex,r=K[a].rule?K[a].rule:null;return a%2==0&&r?r&&r.reports_shown?[{title:E.formatMessage(W.a.disableRule),onClick:function(e,t){return qe(t)}}]:[{title:E.formatMessage(W.a.enableRule),onClick:function(e,t){return qe(t)}}]:null},onCollapse:function(e,t,a){var r=u()(K);r[t]=$({},r[t],{isOpen:a}),q(r)},sortBy:Z,onSort:function(e,t,r){var n="".concat("asc"===r?"":"-").concat(ze[t]);ee({index:t,direction:r}),o($({},a,{sort:n})),me(0)},cells:B,rows:K},k.a.createElement(L.a,null),k.a.createElement(j.a,null)),"pending"===r&&k.a.createElement(x.a,null),"failed"===r&&k.a.createElement(G.a,{message:E.formatMessage(W.a.rulesTableFetchRulesError)}),k.a.createElement(v.TableToolbar,null,k.a.createElement(y.a,{itemCount:Ve,perPage:se,page:fe/se+1,onSetPage:function(e,t){Ke(t)},widgetId:"pagination-options-menu-bottom",variant:y.b.bottom})))};ee.propTypes={fetchRules:B.a.func,rulesFetchStatus:B.a.string,rules:B.a.object,filters:B.a.object,addNotification:B.a.func,setFilters:B.a.func,history:B.a.object,intl:B.a.any};t.default=Object(K.c)(Y()(Object(J.connect)((function(e,t){return $({rules:e.AdvisorStore.rules,rulesFetchStatus:e.AdvisorStore.rulesFetchStatus,filters:e.AdvisorStore.filters},t)}),(function(e){return{fetchRules:function(t){return e(E.d(t))},addNotification:function(t){return e(Object(z.addNotification)(t))},setFilters:function(t){return e(E.m(t))}}}))(ee)))},525:function(e,t,a){var r=a(526),n=a(527),o=a(528);e.exports=function(e){return r(e)||n(e)||o()}},526:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}},527:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},528:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},529:function(e,t,a){var r=a(454);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=a(7)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(454,(function(){var t=a(454);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))}}]);
//# sourceMappingURL=RulesTAble.js.map