(window.webpackJsonp=window.webpackJsonp||[]).push([[13,10],{526:function(e,t,a){(e.exports=a(6)(!1)).push([e.i,"nav.pf-c-breadcrumb li{text-transform:capitalize}\n",""])},545:function(e,t,a){"use strict";var r=a(159),n=a.n(r),o=a(270),i=a.n(o),l=a(2),c=a.n(l),s=a(97),u=a(287),f=a(288),m=a(269),p=a.n(m),E=a(96),d=a(1),b=a.n(d),g=a(27),h=a(519),O=(a(546),a(29));function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var R=function(e){var t=e.current,a=e.fetchRule,r=e.match,n=e.ruleFetchStatus,o=e.rule,m=e.intl,p=Object(l.useState)([]),E=i()(p,2),d=E[0],b=E[1],g=Object(l.useState)(!1),h=i()(g,2),v=h[0],R=h[1],T=Object(l.useCallback)((function(){var e=[],t=r.url.split("/");e.push({title:t[1],navigate:"/".concat(t[1])}),"rules"===t[1]&&(t[1]+t[2]!=="rulessystems"?e.push({title:m.formatMessage(O.a.rules),navigate:"/rules"}):e.push({title:m.formatMessage(O.a.systems),navigate:"/rules/systems"})),void 0!==r.params.id&&void 0!==r.params.inventoryId&&e.push({title:o.description,navigate:"/".concat(r.url.split("/")[1],"/").concat(r.params.id)}),b(e)}),[m,r.params.id,r.params.inventoryId,r.url,o.description]);return Object(l.useEffect)((function(){var e=r.url.split("/");void 0!==r.params.inventoryId&&"systems"!==e[2]?a({rule_id:r.params.id}):T()}),[T,a,r.params.id,r.params.inventoryId,r.url]),Object(l.useEffect)((function(){"fulfilled"!==n||v||(R(!0),T())}),[T,n,v]),c.a.createElement(c.a.Fragment,null,("fulfilled"===n||d.length>0)&&c.a.createElement(u.a,null,d.map((function(e,t){return c.a.createElement(f.a,{key:t},c.a.createElement(s.Link,{to:e.navigate},e.title))})),c.a.createElement(f.a,{isActive:!0},t)),"pending"===n&&m.formatMessage(O.a.loading))};R.propTypes={current:b.a.string,fetchRule:b.a.func,match:b.a.object,rule:b.a.object,ruleFetchStatus:b.a.string,intl:b.a.any};t.a=Object(g.c)(p()(Object(E.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({rule:e.AdvisorStore.rule,ruleFetchStatus:e.AdvisorStore.ruleFetchStatus},t)}),(function(e){return{fetchRule:function(t){return e(h.b(t))}}}))(R)))},546:function(e,t,a){var r=a(526);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=a(7)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(526,(function(){var t=a(526);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},608:function(e,t,a){"use strict";a.r(t);var r=a(160),n=a.n(r),o=a(271),i=a.n(o),l=a(159),c=a.n(l),s=a(548),u=a.n(s),f=a(270),m=a.n(f),p=a(519),E=a(238),d=a(211),b=a(233),g=a(172),h=a(144),O=a(286),v=a(346),R=a(363),T=a(2),y=a.n(T),_=a(322),S=a(323),I=a(43),j=a(347),k=a(345),F=a(544),C=a(14),A=a(575),w=a(547),P=a(97),L=a(530),G=a(528),x=a(1),M=a.n(x),N=a(620),D=a(82),H=a(96),B=a(609),V=a(27),z=a(29),J=a(517),U=a.n(J),W=a(269),q=a.n(W);function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var X=function(e){var t=e.rules,a=e.filters,r=e.rulesFetchStatus,o=e.setFilters,l=e.fetchRules,s=e.addNotification,f=e.history,p=e.intl,x=Object(T.useState)([{title:p.formatMessage(z.a.description),transforms:[_.a]},{title:p.formatMessage(z.a.added),transforms:[_.a,Object(S.a)(15)]},{title:p.formatMessage(z.a.totalRisk),transforms:[_.a]},{title:p.formatMessage(z.a.systems),transforms:[_.a]},{title:y.a.createElement(y.a.Fragment,null,y.a.createElement(E.b,{size:"md"})," ",p.formatMessage(z.a.ansible)),transforms:[_.a],dataLabel:p.formatMessage(z.a.ansible)}]),M=m()(x,1)[0],D=Object(T.useState)([]),H=m()(D,2),V=H[0],J=H[1],W=Object(T.useState)({}),q=m()(W,2),K=q[0],X=q[1],Y=Object(T.useState)("-publish_date"),Z=m()(Y,2),$=Z[0],ee=Z[1],te=Object(T.useState)(a.impacting),ae=m()(te,2),re=ae[0],ne=ae[1],oe=Object(T.useState)(10),ie=m()(oe,2),le=ie[0],ce=ie[1],se=Object(T.useState)(0),ue=m()(se,2),fe=ue[0],me=ue[1],pe=Object(T.useState)(!0),Ee=m()(pe,2),de=Ee[0],be=Ee[1],ge=Object(T.useState)(""),he=m()(ge,2),Oe=he[0],ve=he[1],Re=Object(T.useState)(""),Te=m()(Re,2),ye=Te[0],_e=Te[1],Se=Object(T.useState)(!1),Ie=m()(Se,2),je=Ie[0],ke=Ie[1],Fe=Object(T.useState)({}),Ce=m()(Fe,2),Ae=Ce[0],we=Ce[1],Pe=Object(B.a)(ye,800),Le=t.meta?t.meta.count:0,Ge=function(e){return Object.assign.apply(Object,[{}].concat(u()(Object.entries(e).map((function(e){return Array.isArray(e[1])?c()({},e[0],e[1].join()):c()({},e[0],e[1])})))))},xe=function(){l(Q({},Ge(a),{offset:0,limit:le,impacting:re,sort:$}))},Me=Object(T.useCallback)((function(e,t,a){var r="".concat("asc"===a?"":"-").concat({1:"description",2:"publish_date",3:"total_risk",4:"impacted_count",5:"playbook_count"}[t]);X({index:t,direction:a}),ee(r),me(0)}),[ee,X,me]),Ne=function(e){me(e*le-le)},De=function(){var e=i()(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=V[t].rule,e.prev=1,!a.reports_shown){e.next=7;break}we(a),ke(!0),e.next=10;break;case 7:return e.next=9,F.a.delete("".concat(C.BASE_URL,"/ack/").concat(a.rule_id,"/"));case 9:xe();case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),s({variant:"danger",dismissable:!0,title:a.reports_shown?p.formatMessage(z.a.rulesTableHideReportsErrorDisabled):p.formatMessage(z.a.rulesTableHideReportsErrorEnabled),description:"".concat(e.t0)});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),He=Object(T.useCallback)((function(){me(0)}),[]);Object(T.useEffect)((function(){if(f.location.search){var e=new URLSearchParams(f.location.search),t=Array.from(e).reduce((function(e,t){var a=m()(t,2),r=a[0],n=a[1];return Q({},e,c()({},r,"true"===n||"false"===n?JSON.parse(n):n.split(",")))}),{});t.reports_shown=void 0===t.reports_shown||"undefined"===t.reports_shown[0]?void 0:t.reports_shown,ne(t.impacting),o(Q({},t))}be(!1)}),[]),Object(T.useEffect)((function(){var e=Object.keys(a).map((function(e){return"".concat(e,"=").concat(Array.isArray(a[e])?a[e].join():a[e])})).join("&");ve("?".concat(e)),f.replace({search:"?".concat(e)})}),[a,f]),Object(T.useEffect)((function(){de||l(Q({},Ge(a),{offset:fe,limit:le,sort:$}))}),[l,de,a,le,fe,$]),Object(T.useEffect)((function(){V.length||Me(null,2,"desc")}),[Me,V.length]),Object(T.useEffect)((function(){if(t.data)if(0===t.data.length)J([{cells:[{title:y.a.createElement(G.a,{icon:d.b,iconClass:"ansibleCheck",size:"sm",title:p.formatMessage(z.a.rulesTableNoRuleHitsTitle),text:a.reports_shown?p.formatMessage(z.a.rulesTableNoRuleHitsEnabledRulesBody):p.formatMessage(z.a.rulesTableNoRuleHitsAnyRulesBody)},a.reports_shown&&y.a.createElement(h.a,{variant:"link",style:{paddingTop:24},onClick:function(){o(Q({},a,{reports_shown:void 0})),He()}},p.formatMessage(z.a.rulesTableNoRuleHitsAddDisabledButton))),props:{colSpan:5}}]}]);else{var e=t.data.flatMap((function(e,t){return[{isOpen:!1,rule:e,cells:[{title:y.a.createElement("span",{key:t},!e.reports_shown&&y.a.createElement(O.a,{isRead:!0},y.a.createElement(b.b,{size:"md"})," ",p.formatMessage(z.a.disabled)),y.a.createElement(P.Link,{key:t,to:"/rules/".concat(e.rule_id)}," ",e.description," "))},{title:y.a.createElement("div",{key:t},U()(e.publish_date).fromNow())},{title:y.a.createElement("div",{className:"pf-m-center",key:t,style:{verticalAlign:"top"}},y.a.createElement(R.Battery,{label:p.formatMessage(z.a.totalRisk),labelHidden:!0,severity:e.total_risk}))},{title:y.a.createElement("div",{key:t}," ",e.reports_shown?"".concat(e.impacted_systems_count.toLocaleString()):p.formatMessage(z.a.nA))},{title:y.a.createElement("div",{className:"pf-m-center ",key:t},e.playbook_count?y.a.createElement(g.b,{className:"ansibleCheck"}):p.formatMessage(z.a.no))}]},{parent:2*t,fullWidth:!0,cells:[{title:y.a.createElement(R.Main,{className:"pf-m-light"}," ",y.a.createElement(N.a,{rule:e}))}]}]}));J(e.asMutable())}}),[He,a,t,o]),Object(T.useEffect)((function(){void 0===a.text?_e(""):_e(a.text)}),[a.text]),Object(T.useEffect)((function(){if(!de){var e=Q({},a),t=ye.length?{text:ye}:{};delete e.text,o(Q({},e,{},t))}}),[Pe]);var Be=function(e){var t=Q({},a);delete t[e],o(t)},Ve=function(e,t){t.length>0?o(Q({},a,{},c()({},e,t))):Be(e)},ze=["",{label:p.formatMessage(re?z.a.rulesTableActionShow:z.a.rulesTableActionHide),onClick:function(){return function(e){o(Q({},a,{impacting:e})),ne(e),me(0)}(!re)}}],Je=[{label:p.formatMessage(z.a.description),filterValues:{key:"text-filter",onChange:function(e,t){return _e(t)},value:ye}},{label:C.FILTER_CATEGORIES.total_risk.title,type:C.FILTER_CATEGORIES.total_risk.type,id:C.FILTER_CATEGORIES.total_risk.urlParam,value:"checkbox-".concat(C.FILTER_CATEGORIES.total_risk.urlParam),filterValues:{key:"".concat(C.FILTER_CATEGORIES.total_risk.urlParam,"-filter"),onChange:function(e,t){return Ve(C.FILTER_CATEGORIES.total_risk.urlParam,t)},value:a.total_risk,items:C.FILTER_CATEGORIES.total_risk.values}},{label:C.FILTER_CATEGORIES.res_risk.title,type:C.FILTER_CATEGORIES.res_risk.type,id:C.FILTER_CATEGORIES.res_risk.urlParam,value:"checkbox-".concat(C.FILTER_CATEGORIES.res_risk.urlParam),filterValues:{key:"".concat(C.FILTER_CATEGORIES.res_risk.urlParam,"-filter"),onChange:function(e,t){return Ve(C.FILTER_CATEGORIES.res_risk.urlParam,t)},value:a.res_risk,items:C.FILTER_CATEGORIES.res_risk.values}},{label:C.FILTER_CATEGORIES.impact.title,type:C.FILTER_CATEGORIES.impact.type,id:C.FILTER_CATEGORIES.impact.urlParam,value:"checkbox-".concat(C.FILTER_CATEGORIES.impact.urlParam),filterValues:{key:"".concat(C.FILTER_CATEGORIES.impact.urlParam,"-filter"),onChange:function(e,t){return Ve(C.FILTER_CATEGORIES.impact.urlParam,t)},value:a.impact,items:C.FILTER_CATEGORIES.impact.values}},{label:C.FILTER_CATEGORIES.likelihood.title,type:C.FILTER_CATEGORIES.likelihood.type,id:C.FILTER_CATEGORIES.likelihood.urlParam,value:"checkbox-".concat(C.FILTER_CATEGORIES.likelihood.urlParam),filterValues:{key:"".concat(C.FILTER_CATEGORIES.likelihood.urlParam,"-filter"),onChange:function(e,t){return Ve(C.FILTER_CATEGORIES.likelihood.urlParam,t)},value:a.likelihood,items:C.FILTER_CATEGORIES.likelihood.values}},{label:C.FILTER_CATEGORIES.category.title,type:C.FILTER_CATEGORIES.category.type,id:C.FILTER_CATEGORIES.category.urlParam,value:"checkbox-".concat(C.FILTER_CATEGORIES.category.urlParam),filterValues:{key:"".concat(C.FILTER_CATEGORIES.category.urlParam,"-filter"),onChange:function(e,t){return Ve(C.FILTER_CATEGORIES.category.urlParam,t)},value:a.category,items:C.FILTER_CATEGORIES.category.values}},{label:C.FILTER_CATEGORIES.reports_shown.title,type:C.FILTER_CATEGORIES.reports_shown.type,id:C.FILTER_CATEGORIES.reports_shown.urlParam,value:"radio-".concat(C.FILTER_CATEGORIES.reports_shown.urlParam),filterValues:{key:"".concat(C.FILTER_CATEGORIES.reports_shown.urlParam,"-filter"),onChange:function(e,t){return o(Q({},a,{reports_shown:"undefined"===(r=t)?void 0:r})),void me(0);var r},value:void 0===a.reports_shown?"undefined":"".concat(a.reports_shown),items:C.FILTER_CATEGORIES.reports_shown.values}}],Ue={filters:function(){var e=Q({},a);delete e.text,delete e.impacting,delete e.reports_shown,delete e.topic;var t=Object.entries(e);return t.length>0?t.map((function(e){var t=C.FILTER_CATEGORIES[e[0]],a=Array.isArray(e[1])?e[1].map((function(e){return{name:t.values.find((function(t){return t.value===String(e)})).label,value:e}})):[{name:t.values.find((function(t){return t.value===String(e[1])})).label,value:e[1]}];return{category:t.title,chips:a,urlParam:t.urlParam}})):[]}(),onDelete:function(e,t,r){r?o({impacting:!0,reports_shown:"true"}):t.map((function(e){var t=c()({},e.urlParam,a[e.urlParam].filter((function(t){return Number(t)!==Number(e.chips[0].value)})));t[e.urlParam].length>0?o(Q({},a,{},t)):Be(e.urlParam)}))}};return y.a.createElement(y.a.Fragment,null,je&&y.a.createElement(A.a,{handleModalToggle:ke,isModalOpen:je,rule:Ae,afterFn:xe}),y.a.createElement(R.PrimaryToolbar,{pagination:{itemCount:Le,page:fe/le+1,perPage:le,onSetPage:function(e,t){Ne(t)},onPerPageSelect:function(e,t){ce(t)},isCompact:!1},exportConfig:{onSelect:function(e,t){return window.location="".concat(C.BASE_URL,"/export/hits.").concat("json"===t?"json":"csv","/").concat(Oe)}},actionsConfig:{actions:ze},filterConfig:{items:Je},activeFiltersConfig:Ue}),"fulfilled"===r&&y.a.createElement(I.b,{"aria-label":"rule-table",actionResolver:function(e,t){var a=t.rowIndex,r=V[a].rule?V[a].rule:null;return a%2==0&&r?r&&r.reports_shown?[{title:p.formatMessage(z.a.disableRule),onClick:function(e,t){return De(t)}}]:[{title:p.formatMessage(z.a.enableRule),onClick:function(e,t){return De(t)}}]:null},onCollapse:function(e,t,a){var r=u()(V);r[t]=Q({},r[t],{isOpen:a}),J(r)},sortBy:K,onSort:Me,cells:M,rows:V},y.a.createElement(j.a,null),y.a.createElement(k.a,null)),"pending"===r&&y.a.createElement(L.a,null),"failed"===r&&y.a.createElement(w.a,{message:p.formatMessage(z.a.rulesTableFetchRulesError)}),y.a.createElement(R.TableToolbar,null,y.a.createElement(v.a,{itemCount:Le,perPage:le,page:fe/le+1,onSetPage:function(e,t){Ne(t)},widgetId:"pagination-options-menu-bottom",variant:v.b.bottom})))};X.propTypes={fetchRules:M.a.func,rulesFetchStatus:M.a.string,rules:M.a.object,filters:M.a.object,addNotification:M.a.func,setFilters:M.a.func,history:M.a.object,intl:M.a.any};t.default=Object(V.c)(q()(Object(H.connect)((function(e,t){return Q({rules:e.AdvisorStore.rules,rulesFetchStatus:e.AdvisorStore.rulesFetchStatus,filters:e.AdvisorStore.filters},t)}),(function(e){return{fetchRules:function(t){return e(p.d(t))},addNotification:function(t){return e(Object(D.addNotification)(t))},setFilters:function(t){return e(p.l(t))}}}))(X)))},610:function(e,t,a){(e.exports=a(6)(!1)).push([e.i,":root{--ins-color--orange: #ec7a08}.pf-c-label.labelOverride{vertical-align:middle;margin-left:20px}.textOverride{margin-top:var(--pf-global--spacer--md)}\n",""])},996:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),o=a(269),i=a.n(o),l=a(363),c=a(145),s=a(300),u=a(303),f=a(304),m=a(96),p=a(1),E=a.n(p),d=a(236),b=a(192),g=a(27),h=a(519),O=a(545),v=a(608),R=a(530),T=a(528),y=a(29),_=(a(998),function(e){var t=e.match,a=e.fetchTopic,o=e.setFilters,i=e.topic,m=e.topicFetchStatus,p=e.intl,E=e.filters;return Object(r.useEffect)((function(){void 0===E.topic&&o({impacting:!0,reports_shown:"true",topic:t.params.id})})),Object(r.useEffect)((function(){return a({topic_id:t.params.id}),function(){o({impacting:!0,reports_shown:"true"})}}),[a,t.params.id,o]),n.a.createElement(n.a.Fragment,null,n.a.createElement(l.PageHeader,null,n.a.createElement(O.a,{current:i.name,match:t}),"fulfilled"===m&&n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{size:"2xl",className:"titleOverride"},i.name,i.featured&&n.a.createElement(s.a,{className:"labelOverride"},n.a.createElement(d.b,null),p.formatMessage(y.a.featured))),n.a.createElement(u.a,{className:"textOverride"},n.a.createElement(f.a,{component:f.b.p},n.a.createElement(l.Truncate,{text:i.description,length:600,expandText:p.formatMessage(y.a.readmore),collapseText:p.formatMessage(y.a.readless),inline:!0})))),""===m||"pending"===m&&n.a.createElement(R.a,null)),n.a.createElement(l.Main,null,n.a.createElement(n.a.Fragment,null,""===m||"pending"===m||"fulfilled"===m&&n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{headingLevel:"h3",size:"2xl",className:"titlePaddingOverride"}," Rules"),E.topic&&n.a.createElement(v.default,null)),"failed"===m||"rejected"===m&&n.a.createElement(T.a,{icon:b.b,title:p.formatMessage(y.a.topicDetailslNodetailsTitle),text:p.formatMessage(y.a.topicDetailslNodetailsBody)}))))});_.propTypes={match:E.a.any,fetchTopic:E.a.func,topic:E.a.object,topicFetchStatus:E.a.string,setFilters:E.a.func,intl:E.a.any,filters:E.a.object};t.default=Object(g.c)(i()(Object(m.connect)((function(e){return{topic:e.AdvisorStore.topic,topicFetchStatus:e.AdvisorStore.topicFetchStatus,filters:e.AdvisorStore.filters}}),(function(e){return{fetchTopic:function(t){return e(h.i(t))},setFilters:function(t){return e(h.l(t))}}}))(_)))},998:function(e,t,a){var r=a(610);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=a(7)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(610,(function(){var t=a(610);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))}}]);
//# sourceMappingURL=TopicDetails.js.map