(window.webpackJsonp=window.webpackJsonp||[]).push([[12,10],{521:function(e,t,a){(e.exports=a(6)(!1)).push([e.i,"nav.pf-c-breadcrumb li{text-transform:capitalize}\n",""])},542:function(e,t,a){"use strict";var r=a(164),n=a.n(r),c=a(517),o=a.n(c),i=a(2),l=a.n(i),s=a(84),u=a(284),f=a(285),m=a(272),p=a.n(m),d=a(75),b=a(1),g=a.n(b),h=a(27),v=a(513),y=(a(543),a(29));function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var j=function(e){var t=e.current,a=e.fetchRule,r=e.match,n=e.ruleFetchStatus,c=e.rule,m=e.intl,p=Object(i.useState)([]),d=o()(p,2),b=d[0],g=d[1],h=Object(i.useState)(!1),v=o()(h,2),O=v[0],j=v[1],k=Object(i.useCallback)((function(){var e=[],t=r.url.split("/");e.push({title:t[1],navigate:"/".concat(t[1])}),"rules"===t[1]&&(t[1]+t[2]!=="rulessystems"?e.push({title:m.formatMessage(y.a.rules),navigate:"/rules"}):e.push({title:m.formatMessage(y.a.systems),navigate:"/rules/systems"})),void 0!==r.params.id&&void 0!==r.params.inventoryId&&e.push({title:c.description,navigate:"/".concat(r.url.split("/")[1],"/").concat(r.params.id)}),g(e)}),[m,r.params.id,r.params.inventoryId,r.url,c.description]);return Object(i.useEffect)((function(){var e=r.url.split("/");void 0!==r.params.inventoryId&&"systems"!==e[2]?a({rule_id:r.params.id}):k()}),[k,a,r.params.id,r.params.inventoryId,r.url]),Object(i.useEffect)((function(){"fulfilled"!==n||O||(j(!0),k())}),[k,n,O]),l.a.createElement(l.a.Fragment,null,("fulfilled"===n||b.length>0)&&l.a.createElement(u.a,null,b.map((function(e,t){return l.a.createElement(f.a,{key:t},l.a.createElement(s.Link,{to:e.navigate},e.title))})),l.a.createElement(f.a,{isActive:!0},t)),"pending"===n&&m.formatMessage(y.a.loading))};j.propTypes={current:g.a.string,fetchRule:g.a.func,match:g.a.object,rule:g.a.object,ruleFetchStatus:g.a.string,intl:g.a.any};t.a=Object(h.c)(p()(Object(d.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({rule:e.AdvisorStore.rule,ruleFetchStatus:e.AdvisorStore.ruleFetchStatus},t)}),(function(e){return{fetchRule:function(t){return e(v.a(t))}}}))(j)))},543:function(e,t,a){var r=a(521);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},c=a(7)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(521,(function(){var t=a(521);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");c(t)})),e.hot.dispose((function(){c()}))},606:function(e,t,a){"use strict";a.r(t);var r=a(165),n=a.n(r),c=a(273),o=a.n(c),i=a(164),l=a.n(i),s=a(545),u=a.n(s),f=a(517),m=a.n(f),p=a(2),d=a.n(p),b=a(360),g=a(272),h=a.n(g),v=a(1),y=a.n(v),O=a(242),j=a(216),k=a(238),E=a(177),w=a(511),P=a.n(w),_=a(84),S=a(75),x=a(149),M=a(283),F=a(343),C=a(319),R=a(320),T=a(43),A=a(344),N=a(342),D=a(85),H=a(27),I=a(513),V=a(525),z=a(544),B=a(558),L=a(17),J=a(523),U=a(618),W=a(29),q=a(607),G=a(573);function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(a,!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var X=function(e){var t=e.rules,a=e.filters,r=e.rulesFetchStatus,c=e.setFilters,i=e.fetchRules,s=e.addNotification,f=e.history,g=e.intl,h=Object(p.useState)([{title:g.formatMessage(W.a.description),transforms:[C.a]},{title:g.formatMessage(W.a.added),transforms:[C.a,Object(R.a)(15)]},{title:g.formatMessage(W.a.totalRisk),transforms:[C.a]},{title:g.formatMessage(W.a.systems),transforms:[C.a]},{title:d.a.createElement(d.a.Fragment,null,d.a.createElement(O.b,{size:"md"})," ",g.formatMessage(W.a.ansible)),transforms:[C.a],dataLabel:g.formatMessage(W.a.ansible)}]),v=m()(h,1)[0],y=Object(p.useState)([]),w=m()(y,2),S=w[0],D=w[1],H=Object(p.useState)({}),I=m()(H,2),K=I[0],X=I[1],Y=Object(p.useState)("-publish_date"),Z=m()(Y,2),$=Z[0],ee=Z[1],te=Object(p.useState)(a.impacting),ae=m()(te,2),re=ae[0],ne=ae[1],ce=Object(p.useState)(10),oe=m()(ce,2),ie=oe[0],le=oe[1],se=Object(p.useState)(0),ue=m()(se,2),fe=ue[0],me=ue[1],pe=Object(p.useState)(!0),de=m()(pe,2),be=de[0],ge=de[1],he=Object(p.useState)(""),ve=m()(he,2),ye=ve[0],Oe=ve[1],je=Object(p.useState)(""),ke=m()(je,2),Ee=ke[0],we=ke[1],Pe=Object(p.useState)(!1),_e=m()(Pe,2),Se=_e[0],xe=_e[1],Me=Object(p.useState)({}),Fe=m()(Me,2),Ce=Fe[0],Re=Fe[1],Te=Object(q.a)(Ee,800),Ae=t.meta?t.meta.count:0,Ne=function(e){return Object.assign.apply(Object,[{}].concat(u()(Object.entries(e).map((function(e){return Array.isArray(e[1])?l()({},e[0],e[1].join()):l()({},e[0],e[1])})))))},De=function(){i(Q({},Ne(a),{offset:0,limit:ie,impacting:re,sort:$}))},He=Object(p.useCallback)((function(e,t,a){var r="".concat("asc"===a?"":"-").concat({1:"description",2:"publish_date",3:"total_risk",4:"impacted_count",5:"playbook_count"}[t]);X({index:t,direction:a}),ee(r),me(0)}),[ee,X,me]),Ie=function(e){me(e*ie-ie)},Ve=function(){var e=o()(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=S[t].rule,e.prev=1,!a.reports_shown){e.next=7;break}Re(a),xe(!0),e.next=10;break;case 7:return e.next=9,B.a.delete("".concat(L.a,"/ack/").concat(a.rule_id,"/"));case 9:De();case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),s({variant:"danger",dismissable:!0,title:a.reports_shown?g.formatMessage(W.a.rulesTableHideReportsErrorDisabled):g.formatMessage(W.a.rulesTableHideReportsErrorEnabled),description:"".concat(e.t0)});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),ze=Object(p.useCallback)((function(){me(0)}),[]);Object(p.useEffect)((function(){if(f.location.search){var e=new URLSearchParams(f.location.search),t=Array.from(e).reduce((function(e,t){var a=m()(t,2),r=a[0],n=a[1];return Q({},e,l()({},r,"true"===n||"false"===n?JSON.parse(n):n.split(",")))}),{});t.reports_shown=void 0===t.reports_shown||"undefined"===t.reports_shown[0]?void 0:t.reports_shown,ne(t.impacting),c(Q({},t))}ge(!1)}),[]),Object(p.useEffect)((function(){var e=Object.keys(a).map((function(e){return"".concat(e,"=").concat(Array.isArray(a[e])?a[e].join():a[e])})).join("&");Oe("?".concat(e)),f.replace({search:"?".concat(e)})}),[a,f]),Object(p.useEffect)((function(){be||i(Q({},Ne(a),{offset:fe,limit:ie,sort:$}))}),[i,be,a,ie,fe,$]),Object(p.useEffect)((function(){S.length||He(null,2,"desc")}),[He,S.length]),Object(p.useEffect)((function(){if(t.data)if(0===t.data.length)D([{cells:[{title:d.a.createElement(J.a,{icon:j.b,iconClass:"ansibleCheck",size:"sm",title:g.formatMessage(W.a.rulesTableNoRuleHitsTitle),text:a.reports_shown?g.formatMessage(W.a.rulesTableNoRuleHitsEnabledRulesBody):g.formatMessage(W.a.rulesTableNoRuleHitsAnyRulesBody)},a.reports_shown&&d.a.createElement(x.a,{variant:"link",style:{paddingTop:24},onClick:function(){c(Q({},a,{reports_shown:void 0})),ze()}},g.formatMessage(W.a.rulesTableNoRuleHitsAddDisabledButton))),props:{colSpan:5}}]}]);else{var e=t.data.flatMap((function(e,t){return[{isOpen:!1,rule:e,cells:[{title:d.a.createElement("span",{key:t},!e.reports_shown&&d.a.createElement(M.a,{isRead:!0},d.a.createElement(k.b,{size:"md"})," ",g.formatMessage(W.a.disabled)),d.a.createElement(_.Link,{key:t,to:"/rules/".concat(e.rule_id)}," ",e.description," "))},{title:d.a.createElement("div",{key:t},P()(e.publish_date).fromNow())},{title:d.a.createElement("div",{className:"pf-m-center",key:t,style:{verticalAlign:"top"}},d.a.createElement(b.Battery,{label:g.formatMessage(W.a.totalRisk),labelHidden:!0,severity:e.total_risk}))},{title:d.a.createElement("div",{key:t}," ",e.reports_shown?"".concat(e.impacted_systems_count.toLocaleString()):g.formatMessage(W.a.nA))},{title:d.a.createElement("div",{className:"pf-m-center ",key:t},e.playbook_count?d.a.createElement(E.b,{className:"ansibleCheck"}):g.formatMessage(W.a.no))}]},{parent:2*t,fullWidth:!0,cells:[{title:d.a.createElement(b.Main,{className:"pf-m-light"}," ",d.a.createElement(U.a,{rule:e}))}]}]}));D(e.asMutable())}}),[ze,a,t,c]),Object(p.useEffect)((function(){void 0===a.text?we(""):we(a.text)}),[a.text]),Object(p.useEffect)((function(){if(!be){var e=Q({},a),t=Ee.length?{text:Ee}:{};delete e.text,c(Q({},e,{},t))}}),[Te]);var Be=function(e){var t=Q({},a);delete t[e],c(t)},Le=function(e,t){t.length>0?c(Q({},a,{},l()({},e,t))):Be(e)},Je=["",{label:g.formatMessage(re?W.a.rulesTableActionShow:W.a.rulesTableActionHide),onClick:function(){return function(e){c(Q({},a,{impacting:e})),ne(e),me(0)}(!re)}}],Ue=[{label:g.formatMessage(W.a.description),filterValues:{key:"text-filter",onChange:function(e,t){return we(t)},value:Ee}},{label:L.c.total_risk.title,type:L.c.total_risk.type,id:L.c.total_risk.urlParam,value:"checkbox-".concat(L.c.total_risk.urlParam),filterValues:{key:"".concat(L.c.total_risk.urlParam,"-filter"),onChange:function(e,t){return Le(L.c.total_risk.urlParam,t)},value:a.total_risk,items:L.c.total_risk.values}},{label:L.c.res_risk.title,type:L.c.res_risk.type,id:L.c.res_risk.urlParam,value:"checkbox-".concat(L.c.res_risk.urlParam),filterValues:{key:"".concat(L.c.res_risk.urlParam,"-filter"),onChange:function(e,t){return Le(L.c.res_risk.urlParam,t)},value:a.res_risk,items:L.c.res_risk.values}},{label:L.c.impact.title,type:L.c.impact.type,id:L.c.impact.urlParam,value:"checkbox-".concat(L.c.impact.urlParam),filterValues:{key:"".concat(L.c.impact.urlParam,"-filter"),onChange:function(e,t){return Le(L.c.impact.urlParam,t)},value:a.impact,items:L.c.impact.values}},{label:L.c.likelihood.title,type:L.c.likelihood.type,id:L.c.likelihood.urlParam,value:"checkbox-".concat(L.c.likelihood.urlParam),filterValues:{key:"".concat(L.c.likelihood.urlParam,"-filter"),onChange:function(e,t){return Le(L.c.likelihood.urlParam,t)},value:a.likelihood,items:L.c.likelihood.values}},{label:L.c.category.title,type:L.c.category.type,id:L.c.category.urlParam,value:"checkbox-".concat(L.c.category.urlParam),filterValues:{key:"".concat(L.c.category.urlParam,"-filter"),onChange:function(e,t){return Le(L.c.category.urlParam,t)},value:a.category,items:L.c.category.values}},{label:L.c.reports_shown.title,type:L.c.reports_shown.type,id:L.c.reports_shown.urlParam,value:"radio-".concat(L.c.reports_shown.urlParam),filterValues:{key:"".concat(L.c.reports_shown.urlParam,"-filter"),onChange:function(e,t){return c(Q({},a,{reports_shown:"undefined"===(r=t)?void 0:r})),void me(0);var r},value:void 0===a.reports_shown?"undefined":"".concat(a.reports_shown),items:L.c.reports_shown.values}}],We={filters:function(){var e=Q({},a);delete e.text,delete e.impacting,delete e.reports_shown,delete e.topic;var t=Object.entries(e);return t.length>0?t.map((function(e){var t=L.c[e[0]],a=Array.isArray(e[1])?e[1].map((function(e){return{name:t.values.find((function(t){return t.value===String(e)})).label,value:e}})):[{name:t.values.find((function(t){return t.value===String(e[1])})).label,value:e[1]}];return{category:t.title,chips:a,urlParam:t.urlParam}})):[]}(),onDelete:function(e,t,r){r?c({impacting:!0,reports_shown:"true"}):t.map((function(e){var t=l()({},e.urlParam,a[e.urlParam].filter((function(t){return Number(t)!==Number(e.chips[0].value)})));t[e.urlParam].length>0?c(Q({},a,{},t)):Be(e.urlParam)}))}};return d.a.createElement(d.a.Fragment,null,d.a.createElement(G.a,{handleModalToggle:xe,isModalOpen:Se,rule:Ce,afterDisableFn:De}),d.a.createElement(b.PrimaryToolbar,{pagination:{itemCount:Ae,page:fe/ie+1,perPage:ie,onSetPage:function(e,t){Ie(t)},onPerPageSelect:function(e,t){le(t)},isCompact:!1},exportConfig:{onSelect:function(e,t){return window.location="".concat(L.a,"/export/hits.").concat("json"===t?"json":"csv","/").concat(ye)}},actionsConfig:{actions:Je},filterConfig:{items:Ue},activeFiltersConfig:We}),"fulfilled"===r&&d.a.createElement(T.b,{"aria-label":"rule-table",actionResolver:function(e,t){var a=t.rowIndex,r=S[a].rule?S[a].rule:null;return a%2==0&&r?r&&r.reports_shown?[{title:g.formatMessage(W.a.disableRule),onClick:function(e,t){return Ve(t)}}]:[{title:g.formatMessage(W.a.enableRule),onClick:function(e,t){return Ve(t)}}]:null},onCollapse:function(e,t,a){var r=u()(S);r[t]=Q({},r[t],{isOpen:a}),D(r)},sortBy:K,onSort:He,cells:v,rows:S},d.a.createElement(A.a,null),d.a.createElement(N.a,null)),"pending"===r&&d.a.createElement(V.a,null),"failed"===r&&d.a.createElement(z.a,{message:g.formatMessage(W.a.rulesTableFetchRulesError)}),d.a.createElement(b.TableToolbar,null,d.a.createElement(F.a,{itemCount:Ae,perPage:ie,page:fe/ie+1,onSetPage:function(e,t){Ie(t)},widgetId:"pagination-options-menu-bottom",variant:F.b.bottom})))};X.propTypes={fetchRules:y.a.func,rulesFetchStatus:y.a.string,rules:y.a.object,filters:y.a.object,addNotification:y.a.func,setFilters:y.a.func,history:y.a.object,intl:y.a.any};t.default=Object(H.c)(h()(Object(S.connect)((function(e,t){return Q({rules:e.AdvisorStore.rules,rulesFetchStatus:e.AdvisorStore.rulesFetchStatus,filters:e.AdvisorStore.filters},t)}),(function(e){return{fetchRules:function(t){return e(I.c(t))},addNotification:function(t){return e(Object(D.addNotification)(t))},setFilters:function(t){return e(I.j(t))}}}))(X)))},608:function(e,t,a){(e.exports=a(6)(!1)).push([e.i,":root{--ins-color--orange: #ec7a08}.pf-c-label.labelOverride{vertical-align:middle;margin-left:20px}.textOverride{margin-top:var(--pf-global--spacer--md)}\n",""])},994:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),c=a(272),o=a.n(c),i=a(360),l=a(150),s=a(297),u=a(300),f=a(301),m=a(75),p=a(1),d=a.n(p),b=a(241),g=a(197),h=a(27),v=a(513),y=a(542),O=a(606),j=a(525),k=a(523),E=a(29),w=(a(996),function(e){var t=e.match,a=e.fetchTopic,c=e.setFilters,o=e.topic,m=e.topicFetchStatus,p=e.intl,d=e.filters;return Object(r.useEffect)((function(){void 0===d.topic&&c({impacting:!0,reports_shown:"true",topic:t.params.id})})),Object(r.useEffect)((function(){return a({topic_id:t.params.id}),function(){c({impacting:!0,reports_shown:"true"})}}),[a,t.params.id,c]),n.a.createElement(n.a.Fragment,null,n.a.createElement(i.PageHeader,null,n.a.createElement(y.a,{current:o.name,match:t}),"fulfilled"===m&&n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,{size:"2xl",className:"titleOverride"},o.name,o.featured&&n.a.createElement(s.a,{className:"labelOverride"},n.a.createElement(b.b,null),p.formatMessage(E.a.featured))),n.a.createElement(u.a,{className:"textOverride"},n.a.createElement(f.a,{component:f.b.p},n.a.createElement(i.Truncate,{text:o.description,length:600,expandText:p.formatMessage(E.a.readmore),collapseText:p.formatMessage(E.a.readless),inline:!0})))),""===m||"pending"===m&&n.a.createElement(j.a,null)),n.a.createElement(i.Main,null,n.a.createElement(n.a.Fragment,null,""===m||"pending"===m||"fulfilled"===m&&n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,{headingLevel:"h3",size:"2xl",className:"titlePaddingOverride"}," Rules"),d.topic&&n.a.createElement(O.default,null)),"failed"===m||"rejected"===m&&n.a.createElement(k.a,{icon:g.b,title:p.formatMessage(E.a.topicDetailslNodetailsTitle),text:p.formatMessage(E.a.topicDetailslNodetailsBody)}))))});w.propTypes={match:d.a.any,fetchTopic:d.a.func,topic:d.a.object,topicFetchStatus:d.a.string,setFilters:d.a.func,intl:d.a.any,filters:d.a.object};t.default=Object(h.c)(o()(Object(m.connect)((function(e){return{topic:e.AdvisorStore.topic,topicFetchStatus:e.AdvisorStore.topicFetchStatus,filters:e.AdvisorStore.filters}}),(function(e){return{fetchTopic:function(t){return e(v.h(t))},setFilters:function(t){return e(v.j(t))}}}))(w)))},996:function(e,t,a){var r=a(608);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},c=a(7)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(608,(function(){var t=a(608);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");c(t)})),e.hot.dispose((function(){c()}))}}]);
//# sourceMappingURL=TopicDetails.js.map