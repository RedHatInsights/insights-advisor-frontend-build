(window.webpackJsonp=window.webpackJsonp||[]).push([[13,10],{453:function(e,t,a){(e.exports=a(6)(!1)).push([e.i,".pf-c-check__label #battery_svg{height:1.25rem}\n",""])},463:function(e,t,a){"use strict";var r=a(155),n=a.n(r),o=a(258),i=a.n(o),s=a(434),l=a(276),c=a(277),u=a(2),f=a.n(u),m=a(98),p=a(1),d=a.n(p),E=a(97),b=a(30),g=a(22),h=a(259),O=a.n(h);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.charAt(0).toUpperCase()+e.toLowerCase().substr(1)},T=function(e){var t=e.current,a=e.fetchRule,r=e.match,n=e.ruleFetchStatus,o=e.rule,s=e.intl,p=Object(u.useState)([]),d=i()(p,2),E=d[0],b=d[1],h=Object(u.useState)(!1),O=i()(h,2),v=O[0],T=O[1],_=Object(u.useCallback)((function(){var e=[],t=r.url.split("/");e.push({title:y(t[1]),navigate:"/".concat(t[1])}),"rules"===t[1]&&(t[1]+t[2]!=="rulessystems"?e.push({title:s.formatMessage(g.a.rules),navigate:"/rules"}):e.push({title:s.formatMessage(g.a.systems),navigate:"/rules/systems"})),void 0!==r.params.id&&void 0!==r.params.inventoryId&&e.push({title:y(o.description),navigate:"/".concat(r.url.split("/")[1],"/").concat(r.params.id)}),b(e)}),[s,r.params.id,r.params.inventoryId,r.url,o.description]);return Object(u.useEffect)((function(){var e=r.url.split("/");void 0!==r.params.inventoryId&&"systems"!==e[2]?a({rule_id:r.params.id}):_()}),[_,a,r.params.id,r.params.inventoryId,r.url]),Object(u.useEffect)((function(){"fulfilled"!==n||v||(T(!0),_())}),[_,n,v]),f.a.createElement(f.a.Fragment,null,("fulfilled"===n||E.length>0)&&f.a.createElement(l.a,null,E.map((function(e,t){return f.a.createElement(c.a,{key:t},f.a.createElement(m.Link,{to:e.navigate},y(e.title)))})),f.a.createElement(c.a,{isActive:!0},y(t))),"pending"===n&&s.formatMessage(g.a.loading))};T.propTypes={current:d.a.string,fetchRule:d.a.func,match:d.a.object,rule:d.a.object,ruleFetchStatus:d.a.string,intl:d.a.any};t.a=Object(b.c)(O()(Object(E.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({rule:e.AdvisorStore.rule,ruleFetchStatus:e.AdvisorStore.ruleFetchStatus},t)}),(function(e){return{fetchRule:function(t){return e(s.b(t))}}}))(T)))},521:function(e,t,a){(e.exports=a(6)(!1)).push([e.i,":root{--ins-color--orange: #ec7a08}.pf-c-label.labelOverride{vertical-align:middle;margin-left:20px}.textOverride{margin-top:var(--pf-global--spacer--md)}\n",""])},522:function(e,t,a){"use strict";a.r(t);var r=a(156),n=a.n(r),o=a(260),i=a.n(o),s=a(155),l=a.n(s),c=a(523),u=a.n(c),f=a(258),m=a.n(f),p=(a(527),a(434)),d=a(15),E=a(236),b=a(207),g=a(230),h=a(167),O=a(139),v=a(275),y=a(137),T=a(306),_=a(307),R=a(318),S=a(59),I=a(2),j=a.n(I),A=a(310),k=a(311),F=a(44),C=a(320),L=a(317),w=a(447),P=a(478),M=a(449),G=a(98),x=a(440),N=a(441),D=a(1),B=a.n(D),H=a(541),V=a(513),z=a(82),U=a(97),J=a(528),K=a(30),W=a(22),q=a(433),Q=a.n(q),X=a(259),Y=a.n(X);function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ee=function(e){var t=e.rules,a=e.filters,r=e.rulesFetchStatus,o=e.setFilters,s=e.fetchRules,c=e.addNotification,f=e.history,p=e.intl,D=Object(I.useState)([{title:p.formatMessage(W.a.description),transforms:[A.a]},{title:p.formatMessage(W.a.added),transforms:[A.a,Object(k.a)(15)]},{title:p.formatMessage(W.a.totalRisk),transforms:[A.a,Object(k.a)(15)]},{title:p.formatMessage(W.a.systems),transforms:[A.a]},{title:j.a.createElement(j.a.Fragment,null,j.a.createElement(E.b,{size:"md"})," ",p.formatMessage(W.a.ansible)),transforms:[A.a],dataLabel:p.formatMessage(W.a.ansible)}]),B=m()(D,1)[0],z=Object(I.useState)([]),U=m()(z,2),K=U[0],q=U[1],X=Object(I.useState)({}),Y=m()(X,2),Z=Y[0],ee=Y[1],te=Object(I.useState)(a.impacting),ae=m()(te,2),re=ae[0],ne=ae[1],oe=Object(I.useState)(10),ie=m()(oe,2),se=ie[0],le=ie[1],ce=Object(I.useState)(0),ue=m()(ce,2),fe=ue[0],me=ue[1],pe=Object(I.useState)(!0),de=m()(pe,2),Ee=de[0],be=de[1],ge=Object(I.useState)(""),he=m()(ge,2),Oe=he[0],ve=he[1],ye=Object(I.useState)(""),Te=m()(ye,2),_e=Te[0],Re=Te[1],Se=Object(I.useState)(!1),Ie=m()(Se,2),je=Ie[0],Ae=Ie[1],ke=Object(I.useState)({}),Fe=m()(ke,2),Ce=Fe[0],Le=Fe[1],we=Object(I.useState)(!1),Pe=m()(we,2),Me=Pe[0],Ge=Pe[1],xe=Object(I.useState)({}),Ne=m()(xe,2),De=Ne[0],Be=Ne[1],He=Object(J.a)(_e,800),Ve=t.meta?t.meta.count:0,ze={1:"description",2:"publish_date",3:"total_risk",4:"impacted_count",5:"playbook_count"},Ue=function(e){return Object.assign.apply(Object,[{}].concat(u()(Object.entries(e).map((function(e){return Array.isArray(e[1])?l()({},e[0],e[1].join()):l()({},e[0],e[1])})))))},Je=function(){s($({},Ue(a),{offset:0,limit:se,impacting:re}))},Ke=function(e){me(e*se-se)},We=function(e){var t="undefined"===e?void 0:e;o($({},a,{reports_shown:t},"true"!==t&&{impacting:!1})),"true"!==t&&ne(!1),me(0)},qe=function(){var e=i()(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=K[t].rule,e.prev=1,!a.reports_shown){e.next=7;break}Le(a),Ae(!0),e.next=10;break;case 7:return e.next=9,w.a.delete("".concat(d.BASE_URL,"/ack/").concat(a.rule_id,"/"));case 9:Je();case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),c({variant:"danger",dismissable:!0,title:a.reports_shown?p.formatMessage(W.a.rulesTableHideReportsErrorDisabled):p.formatMessage(W.a.rulesTableHideReportsErrorEnabled),description:"".concat(e.t0)});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),Qe=Object(I.useCallback)((function(){me(0)}),[]);Object(I.useEffect)((function(){if(f.location.search){var e=new URLSearchParams(f.location.search),t=Array.from(e).reduce((function(e,t){var a=m()(t,2),r=a[0],n=a[1];return $({},e,l()({},r,"true"===n||"false"===n?JSON.parse(n):n.split(",")))}),{});t.reports_shown=void 0===t.reports_shown||"undefined"===t.reports_shown[0]?void 0:t.reports_shown,t.sort=void 0===t.sort?"-publish_date":t.sort[0],ne(t.impacting),o($({},t))}be(!1)}),[]),Object(I.useEffect)((function(){var e=Object.keys(a).map((function(e){return"".concat(e,"=").concat(Array.isArray(a[e])?a[e].join():a[e])})).join("&");ve("?".concat(e)),f.replace({search:"?".concat(e)})}),[a,f]),Object(I.useEffect)((function(){Ee||s($({},Ue(a),{offset:fe,limit:se}))}),[s,Ee,a,se,fe]),Object(I.useEffect)((function(){if(void 0!==a.sort){var e=Number(Object.entries(ze).find((function(e){return e[1]===a.sort||"-".concat(e[1])===a.sort}))[0]),t="-"===a.sort[0]?"desc":"asc";ee({index:e,direction:t})}}),[a,a.sort]),Object(I.useEffect)((function(){if(t.data)if(0===t.data.length)q([{cells:[{title:j.a.createElement(N.a,{icon:b.b,iconClass:"ansibleCheck",size:"sm",title:p.formatMessage(W.a.rulesTableNoRuleHitsTitle),text:a.reports_shown?p.formatMessage(W.a.rulesTableNoRuleHitsEnabledRulesBody):p.formatMessage(W.a.rulesTableNoRuleHitsAnyRulesBody)},a.reports_shown&&j.a.createElement(O.a,{variant:"link",style:{paddingTop:24},onClick:function(){We("undefined"),Qe()}},p.formatMessage(W.a.rulesTableNoRuleHitsAddDisabledButton))),props:{colSpan:5}}]}]);else{var e=t.data.flatMap((function(e,t){return[{isOpen:!1,rule:e,cells:[{title:j.a.createElement("span",{key:t},!e.reports_shown&&j.a.createElement(v.a,{isRead:!0},j.a.createElement(g.b,{size:"md"})," ",p.formatMessage(W.a.disabled)),j.a.createElement(G.Link,{key:t,to:"/rules/".concat(e.rule_id)}," ",e.description," "))},{title:j.a.createElement("div",{key:t},Q()(e.publish_date).fromNow())},{title:j.a.createElement("div",{className:"pf-m-center",key:t},j.a.createElement(y.a,{key:t,position:y.b.bottom,content:p.formatMessage(W.a.rulesDetailsTotalriskBody,{likelihood:d.LIKELIHOOD_LABEL[e.likelihood]||p.formatMessage(W.a.undefined),impact:d.IMPACT_LABEL[e.impact.impact]||p.formatMessage(W.a.undefined),strong:function(e){return j.a.createElement("strong",null,e)}})},j.a.createElement(S.Battery,{label:d.TOTAL_RISK_LABEL[e.total_risk]||p.formatMessage(W.a.undefined),severity:e.total_risk})))},{title:j.a.createElement("div",{key:t}," ",e.reports_shown?"".concat(e.impacted_systems_count.toLocaleString()):p.formatMessage(W.a.nA))},{title:j.a.createElement("div",{className:"pf-m-center ",key:t},e.playbook_count?j.a.createElement(h.b,{className:"ansibleCheck"}):p.formatMessage(W.a.no))}]},{parent:2*t,fullWidth:!0,cells:[{title:j.a.createElement(S.Main,{className:"pf-m-light"},j.a.createElement(T.a,{gutter:"md"},e.hosts_acked_count?j.a.createElement(_.a,null,j.a.createElement(g.b,{size:"sm"})," ",e.hosts_acked_count&&!e.impacted_systems_count?p.formatMessage(W.a.ruleIsDisabledForAllSystems):p.formatMessage(W.a.ruleIsDisabledForSystemsBody,{systems:e.hosts_acked_count}),"  ",j.a.createElement(O.a,{isInline:!0,variant:"link",onClick:function(){Be(e),Ge(!0)}},p.formatMessage(W.a.viewSystems))):j.a.createElement(j.a.Fragment,null),j.a.createElement(H.a,{rule:e})))}]}]}));q(e.asMutable())}}),[Qe,a,t,o]),Object(I.useEffect)((function(){void 0===a.text?Re(""):Re(a.text)}),[a.text]),Object(I.useEffect)((function(){if(!Ee){var e=$({},a),t=_e.length?{text:_e}:{};delete e.text,o($({},e,{},t))}}),[He]);var Xe=function(e){var t=$({},a);delete t[e],o(t)},Ye=function(e,t){t.length>0?o($({},a,{},l()({},e,t))):Xe(e)},Ze=["",{label:p.formatMessage(re?W.a.rulesTableActionShow:W.a.rulesTableActionHide),onClick:function(){return function(e){o($({},a,{impacting:e})),ne(e),me(0)}(!re)}}],$e=[{label:p.formatMessage(W.a.description),filterValues:{key:"text-filter",onChange:function(e,t){return Re(t)},value:_e}},{label:d.FILTER_CATEGORIES.total_risk.title,type:d.FILTER_CATEGORIES.total_risk.type,id:d.FILTER_CATEGORIES.total_risk.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.total_risk.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.total_risk.urlParam,"-filter"),onChange:function(e,t){return Ye(d.FILTER_CATEGORIES.total_risk.urlParam,t)},value:a.total_risk,items:d.FILTER_CATEGORIES.total_risk.values}},{label:d.FILTER_CATEGORIES.res_risk.title,type:d.FILTER_CATEGORIES.res_risk.type,id:d.FILTER_CATEGORIES.res_risk.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.res_risk.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.res_risk.urlParam,"-filter"),onChange:function(e,t){return Ye(d.FILTER_CATEGORIES.res_risk.urlParam,t)},value:a.res_risk,items:d.FILTER_CATEGORIES.res_risk.values}},{label:d.FILTER_CATEGORIES.impact.title,type:d.FILTER_CATEGORIES.impact.type,id:d.FILTER_CATEGORIES.impact.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.impact.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.impact.urlParam,"-filter"),onChange:function(e,t){return Ye(d.FILTER_CATEGORIES.impact.urlParam,t)},value:a.impact,items:d.FILTER_CATEGORIES.impact.values}},{label:d.FILTER_CATEGORIES.likelihood.title,type:d.FILTER_CATEGORIES.likelihood.type,id:d.FILTER_CATEGORIES.likelihood.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.likelihood.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.likelihood.urlParam,"-filter"),onChange:function(e,t){return Ye(d.FILTER_CATEGORIES.likelihood.urlParam,t)},value:a.likelihood,items:d.FILTER_CATEGORIES.likelihood.values}},{label:d.FILTER_CATEGORIES.category.title,type:d.FILTER_CATEGORIES.category.type,id:d.FILTER_CATEGORIES.category.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.category.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.category.urlParam,"-filter"),onChange:function(e,t){return Ye(d.FILTER_CATEGORIES.category.urlParam,t)},value:a.category,items:d.FILTER_CATEGORIES.category.values}},{label:d.FILTER_CATEGORIES.reports_shown.title,type:d.FILTER_CATEGORIES.reports_shown.type,id:d.FILTER_CATEGORIES.reports_shown.urlParam,value:"radio-".concat(d.FILTER_CATEGORIES.reports_shown.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.reports_shown.urlParam,"-filter"),onChange:function(e,t){return We(t)},value:void 0===a.reports_shown?"undefined":"".concat(a.reports_shown),items:d.FILTER_CATEGORIES.reports_shown.values}}],et={filters:function(){var e=$({},a);delete e.impacting,delete e.topic,delete e.sort;var t=Object.entries(e);return t.length>0?t.map((function(e){if(d.FILTER_CATEGORIES[e[0]]){var t=d.FILTER_CATEGORIES[e[0]],a=Array.isArray(e[1])?e[1].map((function(e){var a=t.values.find((function(t){return t.value===String(e)}));return{name:a.text||a.label,value:e}})):[{name:t.values.find((function(t){return t.value===String(e[1])})).label,value:e[1]}];return{category:t.title,chips:a,urlParam:t.urlParam}}return{category:"Description",chips:[{name:e[1],value:e[1]}],urlParam:e[0]}})):[]}(),onDelete:function(e,t,r){r?o($({},a.topic&&{topic:a.topic},{impacting:!0,reports_shown:"true"})):t.map((function(e){var t=l()({},e.urlParam,Array.isArray(a[e.urlParam])?a[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?o($({},a,{},t)):Xe(e.urlParam)}))}};return j.a.createElement(j.a.Fragment,null,Me&&j.a.createElement(V.a,{handleModalToggle:function(e){return Ge(e)},isModalOpen:Me,afterFn:function(){Je()},rule:De}),je&&j.a.createElement(P.a,{handleModalToggle:Ae,isModalOpen:je,rule:Ce,afterFn:Je}),j.a.createElement(S.PrimaryToolbar,{pagination:{itemCount:Ve,page:fe/se+1,perPage:se,onSetPage:function(e,t){Ke(t)},onPerPageSelect:function(e,t){le(t)},isCompact:!1},exportConfig:{onSelect:function(e,t){return window.location="".concat(d.BASE_URL,"/export/hits.").concat("json"===t?"json":"csv","/").concat(Oe)},isDisabled:!re},actionsConfig:{actions:Ze},filterConfig:{items:$e},activeFiltersConfig:et}),"fulfilled"===r&&j.a.createElement(F.b,{"aria-label":"rule-table",actionResolver:function(e,t){var a=t.rowIndex,r=K[a].rule?K[a].rule:null;return a%2==0&&r?r&&r.reports_shown?[{title:p.formatMessage(W.a.disableRule),onClick:function(e,t){return qe(t)}}]:[{title:p.formatMessage(W.a.enableRule),onClick:function(e,t){return qe(t)}}]:null},onCollapse:function(e,t,a){var r=u()(K);r[t]=$({},r[t],{isOpen:a}),q(r)},sortBy:Z,onSort:function(e,t,r){var n="".concat("asc"===r?"":"-").concat(ze[t]);ee({index:t,direction:r}),o($({},a,{sort:n})),me(0)},cells:B,rows:K},j.a.createElement(C.a,null),j.a.createElement(L.a,null)),"pending"===r&&j.a.createElement(x.a,null),"failed"===r&&j.a.createElement(M.a,{message:p.formatMessage(W.a.rulesTableFetchRulesError)}),j.a.createElement(S.TableToolbar,null,j.a.createElement(R.a,{itemCount:Ve,perPage:se,page:fe/se+1,onSetPage:function(e,t){Ke(t)},widgetId:"pagination-options-menu-bottom",variant:R.b.bottom})))};ee.propTypes={fetchRules:B.a.func,rulesFetchStatus:B.a.string,rules:B.a.object,filters:B.a.object,addNotification:B.a.func,setFilters:B.a.func,history:B.a.object,intl:B.a.any};t.default=Object(K.c)(Y()(Object(U.connect)((function(e,t){return $({rules:e.AdvisorStore.rules,rulesFetchStatus:e.AdvisorStore.rulesFetchStatus,filters:e.AdvisorStore.filters},t)}),(function(e){return{fetchRules:function(t){return e(p.d(t))},addNotification:function(t){return e(Object(z.addNotification)(t))},setFilters:function(t){return e(p.m(t))}}}))(ee)))},523:function(e,t,a){var r=a(524),n=a(525),o=a(526);e.exports=function(e){return r(e)||n(e)||o()}},524:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}},525:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},526:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},527:function(e,t,a){var r=a(453);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=a(7)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(453,(function(){var t=a(453);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},916:function(e,t,a){"use strict";a.r(t);a(917);var r=a(434),n=a(140),o=a(291),i=a(295),s=a(296),l=a(59),c=a(2),u=a.n(c),f=a(177),m=a(189),p=a(463),d=a(440),E=a(441),b=a(1),g=a.n(b),h=a(522),O=a(97),v=a(30),y=a(22),T=a(259),_=a.n(T),R=function(e){var t=e.match,a=e.fetchTopic,r=e.setFilters,b=e.topic,g=e.topicFetchStatus,O=e.intl,v=e.filters;return Object(c.useEffect)((function(){void 0===v.topic&&r({impacting:!0,reports_shown:"true",topic:t.params.id,sort:"-publish_date"})})),Object(c.useEffect)((function(){return a({topic_id:t.params.id}),function(){r({impacting:!0,reports_shown:"true",sort:"-publish_date"})}}),[a,t.params.id,r]),u.a.createElement(u.a.Fragment,null,u.a.createElement(l.PageHeader,null,u.a.createElement(p.a,{current:b.name,match:t}),"fulfilled"===g&&u.a.createElement(u.a.Fragment,null,u.a.createElement(n.a,{size:"2xl",className:"titleOverride"},b.name,b.featured&&u.a.createElement(o.a,{className:"labelOverride"},u.a.createElement(f.b,null),O.formatMessage(y.a.featured))),u.a.createElement(i.a,{className:"textOverride"},u.a.createElement(s.a,{component:s.b.p},u.a.createElement(l.Truncate,{text:b.description,length:600,expandText:O.formatMessage(y.a.readmore),collapseText:O.formatMessage(y.a.readless),inline:!0})))),""===g||"pending"===g&&u.a.createElement(d.a,null)),u.a.createElement(l.Main,null,u.a.createElement(u.a.Fragment,null,""===g||"pending"===g||"fulfilled"===g&&u.a.createElement(u.a.Fragment,null,u.a.createElement(n.a,{headingLevel:"h3",size:"2xl",className:"titlePaddingOverride"}," Rules"),v.topic&&u.a.createElement(h.default,null)),"failed"===g||"rejected"===g&&u.a.createElement(E.a,{icon:m.b,title:O.formatMessage(y.a.topicDetailslNodetailsTitle),text:O.formatMessage(y.a.topicDetailslNodetailsBody)}))))};R.propTypes={match:g.a.any,fetchTopic:g.a.func,topic:g.a.object,topicFetchStatus:g.a.string,setFilters:g.a.func,intl:g.a.any,filters:g.a.object};t.default=Object(v.c)(_()(Object(O.connect)((function(e){return{topic:e.AdvisorStore.topic,topicFetchStatus:e.AdvisorStore.topicFetchStatus,filters:e.AdvisorStore.filters}}),(function(e){return{fetchTopic:function(t){return e(r.i(t))},setFilters:function(t){return e(r.m(t))}}}))(R)))},917:function(e,t,a){var r=a(521);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=a(7)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(521,(function(){var t=a(521);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))}}]);
//# sourceMappingURL=TopicDetails.js.map