(window.webpackJsonp=window.webpackJsonp||[]).push([[13,10],{527:function(e,t,a){(e.exports=a(6)(!1)).push([e.i,"nav.pf-c-breadcrumb li{text-transform:capitalize}\n",""])},546:function(e,t,a){"use strict";var r=a(159),n=a.n(r),o=a(270),i=a.n(o),l=a(2),c=a.n(l),s=a(97),u=a(287),f=a(288),m=a(269),p=a.n(m),d=a(96),E=a(1),b=a.n(E),g=a(27),v=a(520),h=(a(547),a(29));function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var R=function(e){var t=e.current,a=e.fetchRule,r=e.match,n=e.ruleFetchStatus,o=e.rule,m=e.intl,p=Object(l.useState)([]),d=i()(p,2),E=d[0],b=d[1],g=Object(l.useState)(!1),v=i()(g,2),O=v[0],R=v[1],T=Object(l.useCallback)((function(){var e=[],t=r.url.split("/");e.push({title:t[1],navigate:"/".concat(t[1])}),"rules"===t[1]&&(t[1]+t[2]!=="rulessystems"?e.push({title:m.formatMessage(h.a.rules),navigate:"/rules"}):e.push({title:m.formatMessage(h.a.systems),navigate:"/rules/systems"})),void 0!==r.params.id&&void 0!==r.params.inventoryId&&e.push({title:o.description,navigate:"/".concat(r.url.split("/")[1],"/").concat(r.params.id)}),b(e)}),[m,r.params.id,r.params.inventoryId,r.url,o.description]);return Object(l.useEffect)((function(){var e=r.url.split("/");void 0!==r.params.inventoryId&&"systems"!==e[2]?a({rule_id:r.params.id}):T()}),[T,a,r.params.id,r.params.inventoryId,r.url]),Object(l.useEffect)((function(){"fulfilled"!==n||O||(R(!0),T())}),[T,n,O]),c.a.createElement(c.a.Fragment,null,("fulfilled"===n||E.length>0)&&c.a.createElement(u.a,null,E.map((function(e,t){return c.a.createElement(f.a,{key:t},c.a.createElement(s.Link,{to:e.navigate},e.title))})),c.a.createElement(f.a,{isActive:!0},t)),"pending"===n&&m.formatMessage(h.a.loading))};R.propTypes={current:b.a.string,fetchRule:b.a.func,match:b.a.object,rule:b.a.object,ruleFetchStatus:b.a.string,intl:b.a.any};t.a=Object(g.c)(p()(Object(d.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({rule:e.AdvisorStore.rule,ruleFetchStatus:e.AdvisorStore.ruleFetchStatus},t)}),(function(e){return{fetchRule:function(t){return e(v.b(t))}}}))(R)))},547:function(e,t,a){var r=a(527);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=a(7)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(527,(function(){var t=a(527);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},608:function(e,t,a){(e.exports=a(6)(!1)).push([e.i,":root{--ins-color--orange: #ec7a08}.pf-c-label.labelOverride{vertical-align:middle;margin-left:20px}.textOverride{margin-top:var(--pf-global--spacer--md)}\n",""])},609:function(e,t,a){"use strict";a.r(t);var r=a(160),n=a.n(r),o=a(271),i=a.n(o),l=a(159),c=a.n(l),s=a(549),u=a.n(s),f=a(270),m=a.n(f),p=a(520),d=a(238),E=a(211),b=a(233),g=a(172),v=a(144),h=a(286),O=a(347),R=a(364),T=a(2),y=a.n(T),_=a(323),S=a(324),I=a(43),j=a(348),k=a(346),F=a(545),A=a(14),C=a(576),w=a(548),P=a(97),L=a(531),G=a(529),x=a(1),M=a.n(x),N=a(620),D=a(82),H=a(96),B=a(610),V=a(27),z=a(29),J=a(518),U=a.n(J),W=a(269),q=a.n(W);function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var X=function(e){var t=e.rules,a=e.filters,r=e.rulesFetchStatus,o=e.setFilters,l=e.fetchRules,s=e.addNotification,f=e.history,p=e.intl,x=Object(T.useState)([{title:p.formatMessage(z.a.description),transforms:[_.a]},{title:p.formatMessage(z.a.added),transforms:[_.a,Object(S.a)(15)]},{title:p.formatMessage(z.a.totalRisk),transforms:[_.a]},{title:p.formatMessage(z.a.systems),transforms:[_.a]},{title:y.a.createElement(y.a.Fragment,null,y.a.createElement(d.b,{size:"md"})," ",p.formatMessage(z.a.ansible)),transforms:[_.a],dataLabel:p.formatMessage(z.a.ansible)}]),M=m()(x,1)[0],D=Object(T.useState)([]),H=m()(D,2),V=H[0],J=H[1],W=Object(T.useState)({}),q=m()(W,2),K=q[0],X=q[1],Y=Object(T.useState)(a.impacting),Z=m()(Y,2),$=Z[0],ee=Z[1],te=Object(T.useState)(10),ae=m()(te,2),re=ae[0],ne=ae[1],oe=Object(T.useState)(0),ie=m()(oe,2),le=ie[0],ce=ie[1],se=Object(T.useState)(!0),ue=m()(se,2),fe=ue[0],me=ue[1],pe=Object(T.useState)(""),de=m()(pe,2),Ee=de[0],be=de[1],ge=Object(T.useState)(""),ve=m()(ge,2),he=ve[0],Oe=ve[1],Re=Object(T.useState)(!1),Te=m()(Re,2),ye=Te[0],_e=Te[1],Se=Object(T.useState)({}),Ie=m()(Se,2),je=Ie[0],ke=Ie[1],Fe=Object(B.a)(he,800),Ae=t.meta?t.meta.count:0,Ce={1:"description",2:"publish_date",3:"total_risk",4:"impacted_count",5:"playbook_count"},we=function(e){return Object.assign.apply(Object,[{}].concat(u()(Object.entries(e).map((function(e){return Array.isArray(e[1])?c()({},e[0],e[1].join()):c()({},e[0],e[1])})))))},Pe=function(){l(Q({},we(a),{offset:0,limit:re,impacting:$}))},Le=function(e){ce(e*re-re)},Ge=function(){var e=i()(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=V[t].rule,e.prev=1,!a.reports_shown){e.next=7;break}ke(a),_e(!0),e.next=10;break;case 7:return e.next=9,F.a.delete("".concat(A.BASE_URL,"/ack/").concat(a.rule_id,"/"));case 9:Pe();case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),s({variant:"danger",dismissable:!0,title:a.reports_shown?p.formatMessage(z.a.rulesTableHideReportsErrorDisabled):p.formatMessage(z.a.rulesTableHideReportsErrorEnabled),description:"".concat(e.t0)});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),xe=Object(T.useCallback)((function(){ce(0)}),[]);Object(T.useEffect)((function(){if(f.location.search){var e=new URLSearchParams(f.location.search),t=Array.from(e).reduce((function(e,t){var a=m()(t,2),r=a[0],n=a[1];return Q({},e,c()({},r,"true"===n||"false"===n?JSON.parse(n):n.split(",")))}),{});t.reports_shown=void 0===t.reports_shown||"undefined"===t.reports_shown[0]?void 0:t.reports_shown,t.sort=void 0===t.sort?"-publish_date":t.sort[0],ee(t.impacting),o(Q({},t))}me(!1)}),[]),Object(T.useEffect)((function(){var e=Object.keys(a).map((function(e){return"".concat(e,"=").concat(Array.isArray(a[e])?a[e].join():a[e])})).join("&");be("?".concat(e)),f.replace({search:"?".concat(e)})}),[a,f]),Object(T.useEffect)((function(){fe||l(Q({},we(a),{offset:le,limit:re}))}),[l,fe,a,re,le]),Object(T.useEffect)((function(){if(void 0!==a.sort){var e=Number(Object.entries(Ce).find((function(e){return e[1]===a.sort||"-".concat(e[1])===a.sort}))[0]),t="-"===a.sort[0]?"desc":"asc";X({index:e,direction:t})}}),[a,a.sort]),Object(T.useEffect)((function(){if(t.data)if(0===t.data.length)J([{cells:[{title:y.a.createElement(G.a,{icon:E.b,iconClass:"ansibleCheck",size:"sm",title:p.formatMessage(z.a.rulesTableNoRuleHitsTitle),text:a.reports_shown?p.formatMessage(z.a.rulesTableNoRuleHitsEnabledRulesBody):p.formatMessage(z.a.rulesTableNoRuleHitsAnyRulesBody)},a.reports_shown&&y.a.createElement(v.a,{variant:"link",style:{paddingTop:24},onClick:function(){o(Q({},a,{reports_shown:void 0})),xe()}},p.formatMessage(z.a.rulesTableNoRuleHitsAddDisabledButton))),props:{colSpan:5}}]}]);else{var e=t.data.flatMap((function(e,t){return[{isOpen:!1,rule:e,cells:[{title:y.a.createElement("span",{key:t},!e.reports_shown&&y.a.createElement(h.a,{isRead:!0},y.a.createElement(b.b,{size:"md"})," ",p.formatMessage(z.a.disabled)),y.a.createElement(P.Link,{key:t,to:"/rules/".concat(e.rule_id)}," ",e.description," "))},{title:y.a.createElement("div",{key:t},U()(e.publish_date).fromNow())},{title:y.a.createElement("div",{className:"pf-m-center",key:t,style:{verticalAlign:"top"}},y.a.createElement(R.Battery,{label:p.formatMessage(z.a.totalRisk),labelHidden:!0,severity:e.total_risk}))},{title:y.a.createElement("div",{key:t}," ",e.reports_shown?"".concat(e.impacted_systems_count.toLocaleString()):p.formatMessage(z.a.nA))},{title:y.a.createElement("div",{className:"pf-m-center ",key:t},e.playbook_count?y.a.createElement(g.b,{className:"ansibleCheck"}):p.formatMessage(z.a.no))}]},{parent:2*t,fullWidth:!0,cells:[{title:y.a.createElement(R.Main,{className:"pf-m-light"}," ",y.a.createElement(N.a,{rule:e}))}]}]}));J(e.asMutable())}}),[xe,a,t,o]),Object(T.useEffect)((function(){void 0===a.text?Oe(""):Oe(a.text)}),[a.text]),Object(T.useEffect)((function(){if(!fe){var e=Q({},a),t=he.length?{text:he}:{};delete e.text,o(Q({},e,{},t))}}),[Fe]);var Me=function(e){var t=Q({},a);delete t[e],o(t)},Ne=function(e,t){t.length>0?o(Q({},a,{},c()({},e,t))):Me(e)},De=["",{label:p.formatMessage($?z.a.rulesTableActionShow:z.a.rulesTableActionHide),onClick:function(){return function(e){o(Q({},a,{impacting:e})),ee(e),ce(0)}(!$)}}],He=[{label:p.formatMessage(z.a.description),filterValues:{key:"text-filter",onChange:function(e,t){return Oe(t)},value:he}},{label:A.FILTER_CATEGORIES.total_risk.title,type:A.FILTER_CATEGORIES.total_risk.type,id:A.FILTER_CATEGORIES.total_risk.urlParam,value:"checkbox-".concat(A.FILTER_CATEGORIES.total_risk.urlParam),filterValues:{key:"".concat(A.FILTER_CATEGORIES.total_risk.urlParam,"-filter"),onChange:function(e,t){return Ne(A.FILTER_CATEGORIES.total_risk.urlParam,t)},value:a.total_risk,items:A.FILTER_CATEGORIES.total_risk.values}},{label:A.FILTER_CATEGORIES.res_risk.title,type:A.FILTER_CATEGORIES.res_risk.type,id:A.FILTER_CATEGORIES.res_risk.urlParam,value:"checkbox-".concat(A.FILTER_CATEGORIES.res_risk.urlParam),filterValues:{key:"".concat(A.FILTER_CATEGORIES.res_risk.urlParam,"-filter"),onChange:function(e,t){return Ne(A.FILTER_CATEGORIES.res_risk.urlParam,t)},value:a.res_risk,items:A.FILTER_CATEGORIES.res_risk.values}},{label:A.FILTER_CATEGORIES.impact.title,type:A.FILTER_CATEGORIES.impact.type,id:A.FILTER_CATEGORIES.impact.urlParam,value:"checkbox-".concat(A.FILTER_CATEGORIES.impact.urlParam),filterValues:{key:"".concat(A.FILTER_CATEGORIES.impact.urlParam,"-filter"),onChange:function(e,t){return Ne(A.FILTER_CATEGORIES.impact.urlParam,t)},value:a.impact,items:A.FILTER_CATEGORIES.impact.values}},{label:A.FILTER_CATEGORIES.likelihood.title,type:A.FILTER_CATEGORIES.likelihood.type,id:A.FILTER_CATEGORIES.likelihood.urlParam,value:"checkbox-".concat(A.FILTER_CATEGORIES.likelihood.urlParam),filterValues:{key:"".concat(A.FILTER_CATEGORIES.likelihood.urlParam,"-filter"),onChange:function(e,t){return Ne(A.FILTER_CATEGORIES.likelihood.urlParam,t)},value:a.likelihood,items:A.FILTER_CATEGORIES.likelihood.values}},{label:A.FILTER_CATEGORIES.category.title,type:A.FILTER_CATEGORIES.category.type,id:A.FILTER_CATEGORIES.category.urlParam,value:"checkbox-".concat(A.FILTER_CATEGORIES.category.urlParam),filterValues:{key:"".concat(A.FILTER_CATEGORIES.category.urlParam,"-filter"),onChange:function(e,t){return Ne(A.FILTER_CATEGORIES.category.urlParam,t)},value:a.category,items:A.FILTER_CATEGORIES.category.values}},{label:A.FILTER_CATEGORIES.reports_shown.title,type:A.FILTER_CATEGORIES.reports_shown.type,id:A.FILTER_CATEGORIES.reports_shown.urlParam,value:"radio-".concat(A.FILTER_CATEGORIES.reports_shown.urlParam),filterValues:{key:"".concat(A.FILTER_CATEGORIES.reports_shown.urlParam,"-filter"),onChange:function(e,t){return o(Q({},a,{reports_shown:"undefined"===(r=t)?void 0:r})),void ce(0);var r},value:void 0===a.reports_shown?"undefined":"".concat(a.reports_shown),items:A.FILTER_CATEGORIES.reports_shown.values}}],Be={filters:function(){var e=Q({},a);delete e.text,delete e.impacting,delete e.reports_shown,delete e.topic,delete e.sort;var t=Object.entries(e);return t.length>0?t.map((function(e){var t=A.FILTER_CATEGORIES[e[0]],a=Array.isArray(e[1])?e[1].map((function(e){return{name:t.values.find((function(t){return t.value===String(e)})).label,value:e}})):[{name:t.values.find((function(t){return t.value===String(e[1])})).label,value:e[1]}];return{category:t.title,chips:a,urlParam:t.urlParam}})):[]}(),onDelete:function(e,t,r){r?o({impacting:!0,reports_shown:"true"}):t.map((function(e){var t=c()({},e.urlParam,a[e.urlParam].filter((function(t){return Number(t)!==Number(e.chips[0].value)})));t[e.urlParam].length>0?o(Q({},a,{},t)):Me(e.urlParam)}))}};return y.a.createElement(y.a.Fragment,null,ye&&y.a.createElement(C.a,{handleModalToggle:_e,isModalOpen:ye,rule:je,afterFn:Pe}),y.a.createElement(R.PrimaryToolbar,{pagination:{itemCount:Ae,page:le/re+1,perPage:re,onSetPage:function(e,t){Le(t)},onPerPageSelect:function(e,t){ne(t)},isCompact:!1},exportConfig:{onSelect:function(e,t){return window.location="".concat(A.BASE_URL,"/export/hits.").concat("json"===t?"json":"csv","/").concat(Ee)}},actionsConfig:{actions:De},filterConfig:{items:He},activeFiltersConfig:Be}),"fulfilled"===r&&y.a.createElement(I.b,{"aria-label":"rule-table",actionResolver:function(e,t){var a=t.rowIndex,r=V[a].rule?V[a].rule:null;return a%2==0&&r?r&&r.reports_shown?[{title:p.formatMessage(z.a.disableRule),onClick:function(e,t){return Ge(t)}}]:[{title:p.formatMessage(z.a.enableRule),onClick:function(e,t){return Ge(t)}}]:null},onCollapse:function(e,t,a){var r=u()(V);r[t]=Q({},r[t],{isOpen:a}),J(r)},sortBy:K,onSort:function(e,t,r){var n="".concat("asc"===r?"":"-").concat(Ce[t]);X({index:t,direction:r}),o(Q({},a,{sort:n})),ce(0)},cells:M,rows:V},y.a.createElement(j.a,null),y.a.createElement(k.a,null)),"pending"===r&&y.a.createElement(L.a,null),"failed"===r&&y.a.createElement(w.a,{message:p.formatMessage(z.a.rulesTableFetchRulesError)}),y.a.createElement(R.TableToolbar,null,y.a.createElement(O.a,{itemCount:Ae,perPage:re,page:le/re+1,onSetPage:function(e,t){Le(t)},widgetId:"pagination-options-menu-bottom",variant:O.b.bottom})))};X.propTypes={fetchRules:M.a.func,rulesFetchStatus:M.a.string,rules:M.a.object,filters:M.a.object,addNotification:M.a.func,setFilters:M.a.func,history:M.a.object,intl:M.a.any};t.default=Object(V.c)(q()(Object(H.connect)((function(e,t){return Q({rules:e.AdvisorStore.rules,rulesFetchStatus:e.AdvisorStore.rulesFetchStatus,filters:e.AdvisorStore.filters},t)}),(function(e){return{fetchRules:function(t){return e(p.d(t))},addNotification:function(t){return e(Object(D.addNotification)(t))},setFilters:function(t){return e(p.l(t))}}}))(X)))},996:function(e,t,a){"use strict";a.r(t);a(997);var r=a(520),n=a(145),o=a(301),i=a(304),l=a(305),c=a(364),s=a(2),u=a.n(s),f=a(236),m=a(192),p=a(546),d=a(531),E=a(529),b=a(1),g=a.n(b),v=a(609),h=a(96),O=a(27),R=a(29),T=a(269),y=a.n(T),_=function(e){var t=e.match,a=e.fetchTopic,r=e.setFilters,b=e.topic,g=e.topicFetchStatus,h=e.intl,O=e.filters;return Object(s.useEffect)((function(){void 0===O.topic&&r({impacting:!0,reports_shown:"true",topic:t.params.id,sort:"-publish_date"})})),Object(s.useEffect)((function(){return a({topic_id:t.params.id}),function(){r({impacting:!0,reports_shown:"true",sort:"-publish_date"})}}),[a,t.params.id,r]),u.a.createElement(u.a.Fragment,null,u.a.createElement(c.PageHeader,null,u.a.createElement(p.a,{current:b.name,match:t}),"fulfilled"===g&&u.a.createElement(u.a.Fragment,null,u.a.createElement(n.a,{size:"2xl",className:"titleOverride"},b.name,b.featured&&u.a.createElement(o.a,{className:"labelOverride"},u.a.createElement(f.b,null),h.formatMessage(R.a.featured))),u.a.createElement(i.a,{className:"textOverride"},u.a.createElement(l.a,{component:l.b.p},u.a.createElement(c.Truncate,{text:b.description,length:600,expandText:h.formatMessage(R.a.readmore),collapseText:h.formatMessage(R.a.readless),inline:!0})))),""===g||"pending"===g&&u.a.createElement(d.a,null)),u.a.createElement(c.Main,null,u.a.createElement(u.a.Fragment,null,""===g||"pending"===g||"fulfilled"===g&&u.a.createElement(u.a.Fragment,null,u.a.createElement(n.a,{headingLevel:"h3",size:"2xl",className:"titlePaddingOverride"}," Rules"),O.topic&&u.a.createElement(v.default,null)),"failed"===g||"rejected"===g&&u.a.createElement(E.a,{icon:m.b,title:h.formatMessage(R.a.topicDetailslNodetailsTitle),text:h.formatMessage(R.a.topicDetailslNodetailsBody)}))))};_.propTypes={match:g.a.any,fetchTopic:g.a.func,topic:g.a.object,topicFetchStatus:g.a.string,setFilters:g.a.func,intl:g.a.any,filters:g.a.object};t.default=Object(O.c)(y()(Object(h.connect)((function(e){return{topic:e.AdvisorStore.topic,topicFetchStatus:e.AdvisorStore.topicFetchStatus,filters:e.AdvisorStore.filters}}),(function(e){return{fetchTopic:function(t){return e(r.i(t))},setFilters:function(t){return e(r.l(t))}}}))(_)))},997:function(e,t,a){var r=a(608);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=a(7)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(608,(function(){var t=a(608);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))}}]);
//# sourceMappingURL=TopicDetails.js.map