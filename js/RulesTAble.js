(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{648:function(e,t,a){"use strict";a.r(t);var r=a(167),n=a.n(r),l=a(280),o=a.n(l),c=a(572),s=a.n(c),i=a(166),u=a.n(i),f=a(542),m=a.n(f),p=a(584),b=a.n(p),d=a(2),h=a.n(d),g=a(371),v=a(279),O=a.n(v),y=a(1),E=a.n(y),j=a(244),w=a(218),k=a(180),S=a(246),P=a(536),F=a.n(P),x=a(88),_=a(81),C=a(288),M=a(296),T=a(355),R=a(305),A=a(19),N=a(306),D=a(291),H=a(302),B=a(330),I=a(331),J=a(46),L=a(356),z=a(354),U=a(89),W=a(33),q=a(537),G=a(541),K=a(571),Q=a(326),V=a(325),X=a(304),Y=a(267),Z=a(327),$=a(121),ee=a(20),te=a(637),ae=a(206),re=a(130),ne=a(303),le=a(150),oe=a(10);function ce(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var se=function(e){var t=e.filters,a=e.removeFilter,r=e.removeAllFilters,n=e.intl,l=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ce(a,!0).forEach((function(t){u()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ce(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t);delete l.text,delete l.impacting,delete l.reports_shown,delete l.topic;var o=Object.entries(l);return o.length>0&&h.a.createElement(h.a.Fragment,null,h.a.createElement(re.a,{withToolbar:!0,numChips:4},o.map((function(e){var t=ee.d.find((function(t){return t.urlParam===e[0]}));return h.a.createElement(ne.a,{key:e[0],categoryName:t.title},e[1].split(",").map((function(e){var r=t.values.find((function(t){return t.value===String(e)}));return h.a.createElement(le.a,{key:e,onClick:function(){return a(t.urlParam,r.value)}},r.label)})))}))),h.a.createElement(C.a,{variant:"link",onClick:function(){return r()}},n.formatMessage(oe.a.clearFilters)))};se.propTypes={filters:E.a.object,removeFilter:E.a.func,removeAllFilters:E.a.func,intl:E.a.any};var ie=Object(W.c)(se);function ue(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function fe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ue(a,!0).forEach((function(t){u()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ue(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var me=function(e){var t=e.children,a=e.searchPlaceholder,r=e.filters,n=e.hideCategories,l=e.setFilters,o=e.fetchAction,c=Object(d.useState)(""),s=m()(c,2),i=s[0],f=s[1],p=Object(te.a)(i,800),b=h.a.Children.toArray(t),v=b.pop(),O=function(e,t){var a=u()({},e,r[e].split(",").filter((function(e){return Number(e)!==Number(t)})).join(","));if(a[e].length)l(fe({},r,{},a)),o(fe({},r,{},a));else{var n=fe({},r);delete n[e],l(n),o(n)}};return Object(d.useEffect)((function(){f(r.text),void 0===r.text&&f("")}),[r.text]),Object(d.useEffect)((function(){var e=fe({},r),t=i.length?{text:i}:{};delete e.text,l(fe({},e,{},t)),o(fe({},e,{},t))}),[p]),h.a.createElement(h.a.Fragment,null,h.a.createElement(Q.a,null,h.a.createElement(V.a,{className:"pf-u-mr-xl"},h.a.createElement(X.a,null,h.a.createElement(Y.a,{name:"search-input","aria-label":"Search",id:"insights-search-input",type:"search",value:i,placeholder:a,onChange:f}),h.a.createElement(C.a,{variant:C.c.tertiary,"aria-label":"search button for search input"},h.a.createElement(ae.b,null)))),h.a.createElement(V.a,{className:"pf-u-mr-md"},h.a.createElement(g.FilterDropdown,{filters:r,addFilter:function(e,t,a){var n;switch(a){case"checkbox":n=r[e]?u()({},e,"".concat(r[e],",").concat(t)):u()({},e,t);break;case"radio":n=u()({},e,t)}l(fe({},r,{},n)),o(fe({},r,{},n))},removeFilter:O,hideCategories:n,filterCategories:ee.d})),h.a.Children.map(b,(function(e){return h.a.createElement(V.a,null," ",e," ")}))),h.a.createElement(Q.a,null,h.a.createElement(V.a,null,v)),h.a.createElement(Z.a,{"aria-label":"Filter Chips Section"},h.a.createElement(Q.a,null,h.a.createElement(V.a,null,h.a.createElement(ie,{filters:r,fetchAction:o,removeFilter:O,removeAllFilters:function(){var e={impacting:!0,reports_shown:!0};l(e),o(e)}})))))};me.propTypes={children:E.a.any,hideCategories:E.a.array,searchPlaceholder:E.a.string,filters:E.a.object,setFilters:E.a.func,fetchAction:E.a.func,results:E.a.number};var pe=O()(Object(_.connect)((function(e,t){return fe({filters:e.AdvisorStore.filters},t)}),(function(e){return Object($.a)({setFilters:function(e){return q.j(e)}},e)}))(me)),be=a(598),de=a(550),he=a(649);function ge(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function ve(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ge(a,!0).forEach((function(t){u()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ge(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Oe=function(e){var t=e.rules,a=e.filters,r=e.rulesFetchStatus,l=e.setFilters,c=e.fetchRules,i=e.addNotification,f=e.history,p=e.intl,v=Object(d.useState)([{title:p.formatMessage(oe.a.rule),transforms:[B.a]},{title:p.formatMessage(oe.a.added),transforms:[B.a,Object(I.a)(15)]},{title:p.formatMessage(oe.a.totalRisk),transforms:[B.a]},{title:p.formatMessage(oe.a.systems),transforms:[B.a]},{title:h.a.createElement(h.a.Fragment,null,h.a.createElement(j.b,{size:"md"})," ",p.formatMessage(oe.a.ansible)),transforms:[B.a],dataLabel:p.formatMessage(oe.a.ansible)}]),O=m()(v,1)[0],y=Object(d.useState)([]),E=m()(y,2),P=E[0],_=E[1],U=Object(d.useState)({}),W=m()(U,2),q=W[0],Q=W[1],V=Object(d.useState)("-publish_date"),X=m()(V,2),Y=X[0],Z=X[1],$=Object(d.useState)(a.impacting),te=m()($,2),ae=te[0],re=te[1],ne=Object(d.useState)(10),le=m()(ne,2),ce=le[0],se=le[1],ie=Object(d.useState)(0),ue=m()(ie,2),fe=ue[0],me=ue[1],ge=Object(d.useState)(!1),Oe=m()(ge,2),ye=Oe[0],Ee=Oe[1],je=Object(d.useState)(!0),we=m()(je,2),ke=we[0],Se=we[1],Pe=t.meta?t.meta.count:0,Fe=Object(d.useCallback)((function(e,t,a){var r="".concat("asc"===a?"":"-").concat({1:"description",2:"publish_date",3:"total_risk",4:"impacted_count",5:"playbook_count"}[t]);Q({index:t,direction:a}),Z(r),me(0)}),[Z,Q,me]),xe=function(e,t){me(t*ce-ce)},_e=function(e,t){se(t)},Ce=function(){var e=o()(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=P[t].rule,e.prev=1,!r.reports_shown){e.next=7;break}return e.next=5,be.a.post("".concat(ee.a,"/ack/"),{rule_id:r.rule_id});case 5:e.next=9;break;case 7:return e.next=9,be.a.delete("".concat(ee.a,"/ack/").concat(r.rule_id,"/"));case 9:c(ve({},a,{offset:0,limit:ce,impacting:ae,sort:Y})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),i({variant:"danger",dismissable:!0,title:r.reports_shown?p.formatMessage(oe.a.rulesTableHideReportsErrorDisabled):p.formatMessage(oe.a.rulesTableHideReportsErrorEnabled),description:p.formatMessage(oe.a.rulesTableHideReportsErrorBody,{ruleName:r.description})});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),Me=Object(d.useCallback)((function(){me(0)}),[]);Object(d.useEffect)((function(){if(f.location.search){var e=new URLSearchParams(f.location.search),t=Array.from(e).reduce((function(e,t){var a=m()(t,2),r=a[0],n=a[1];return ve({},e,u()({},r,"true"===n||"false"===n?JSON.parse(n):n))}),{}),a={};"undefined"===t.reports_shown&&(a={reports_shown:void 0}),re(t.impacting),l(ve({},t,{},a))}Se(!1)}),[]),Object(d.useEffect)((function(){var e=Object.keys(a).map((function(e){return e+"="+a[e]})).join("&");f.replace({search:"?".concat(e)})}),[a,f]),Object(d.useEffect)((function(){ke||c(ve({},a,{offset:fe,limit:ce,sort:Y}))}),[c,ke,a,ce,fe,Y]),Object(d.useEffect)((function(){P.length||Fe(null,2,"desc")}),[Fe,P.length]),Object(d.useEffect)((function(){if(t.data)if(0===t.data.length)_([{cells:[{title:h.a.createElement(de.a,{icon:w.b,iconClass:"ansibleCheck",size:"sm",title:p.formatMessage(oe.a.rulesTableNoRuleHitsTitle),text:a.reports_shown?p.formatMessage(oe.a.rulesTableNoRuleHitsEnabledRulesBody):p.formatMessage(oe.a.rulesTableNoRuleHitsAnyRulesBody)},a.reports_shown&&h.a.createElement(C.a,{variant:"link",style:{paddingTop:24},onClick:function(){l(ve({},a,{reports_shown:void 0})),Me()}},p.formatMessage(oe.a.rulesTableNoRuleHitsAddDisabledButton))),props:{colSpan:5}}]}]);else{var e=t.data.map((function(e,t){return[{isOpen:!1,rule:e,cells:[{title:e.reports_shown?h.a.createElement(x.Link,{key:t,to:"/rules/".concat(e.rule_id)},e.description):h.a.createElement("span",{key:t}," ",h.a.createElement(M.a,{isRead:!0},p.formatMessage(oe.a.disabled))," ",e.description)},{title:h.a.createElement("div",{key:t},F()(e.publish_date).fromNow())},{title:h.a.createElement("div",{className:"pf-m-center",key:t,style:{verticalAlign:"top"}},h.a.createElement(g.Battery,{label:p.formatMessage(oe.a.totalRisk),labelHidden:!0,severity:e.total_risk}))},{title:h.a.createElement("div",{key:t}," ",e.reports_shown?"".concat(e.impacted_systems_count.toLocaleString()):p.formatMessage(oe.a.nA))},{title:h.a.createElement("div",{className:"pf-m-center ",key:t},e.playbook_count?h.a.createElement(k.b,{className:"ansibleCheck"}):null)}]},{parent:2*t,fullWidth:!0,cells:[{title:h.a.createElement(g.Main,{className:"pf-m-light"}," ",h.a.createElement(he.a,{rule:e}))}]}]}));_(b()(e))}}),[Me,a,t,l]);var Te=function(e){return h.a.createElement(T.a,{itemCount:Pe,perPage:ce,page:fe/ce+1,onSetPage:xe,onPerPageSelect:_e,widgetId:"pagination-options-menu-".concat("bottom"===e?"bottom":"top"),variant:"bottom"===e?T.b.bottom:null})};return h.a.createElement(h.a.Fragment,null,h.a.createElement(g.TableToolbar,{style:{justifyContent:"space-between"}},h.a.createElement(pe,{fetchAction:Me,searchPlaceholder:p.formatMessage(oe.a.rulesTableFilterInputText),results:Pe},h.a.createElement(R.a,{position:A.d.left,toggle:h.a.createElement(N.a,{onToggle:function(e){Ee(e)}}),onSelect:function(){Ee(!1)},isOpen:ye,isPlain:!0,dropdownItems:[h.a.createElement(D.a,{value:"json",href:"".concat(ee.a,"/export/hits.json/"),key:"export json","aria-label":"export data json"},h.a.createElement(S.b,null)," ",p.formatMessage(oe.a.rulesTableActionExportJson)),h.a.createElement(D.a,{value:"csv",href:"".concat(ee.a,"/export/hits.csv/"),key:"export csv","aria-label":"export data csv"},h.a.createElement(S.b,null)," ",p.formatMessage(oe.a.rulesTableActionExportCsv))]}),h.a.createElement(H.a,{label:p.formatMessage(oe.a.rulesTableActionShowrulehits),isChecked:ae,onChange:function(e){l(ve({},a,{impacting:e})),re(e),me(0)},"aria-label":"InsightsRulesHideHits",id:"InsightsRulesHideHits"}),Te())),"fulfilled"===r&&h.a.createElement(J.b,{"aria-label":"rule-table",actionResolver:function(e,t){var a=t.rowIndex,r=P[a].rule?P[a].rule:null;return a%2==0&&r?r&&r.reports_shown?[{title:p.formatMessage(oe.a.disableRule),onClick:function(e,t){return Ce(t)}}]:[{title:p.formatMessage(oe.a.enableRule),onClick:function(e,t){return Ce(t)}}]:null},onCollapse:function(e,t,a){var r=s()(P);r[t]=ve({},r[t],{isOpen:a}),_(r)},sortBy:q,onSort:Fe,cells:O,rows:P},h.a.createElement(L.a,null),h.a.createElement(z.a,null)),"pending"===r&&h.a.createElement(G.a,null),"failed"===r&&h.a.createElement(K.a,{message:p.formatMessage(oe.a.rulesTableFetchRulesError)}),h.a.createElement(g.TableToolbar,null,Te("bottom")))};Oe.propTypes={fetchRules:E.a.func,rulesFetchStatus:E.a.string,rules:E.a.object,filters:E.a.object,addNotification:E.a.func,setFilters:E.a.func,history:E.a.object,intl:E.a.any};t.default=Object(W.c)(O()(Object(_.connect)((function(e,t){return ve({rules:e.AdvisorStore.rules,rulesFetchStatus:e.AdvisorStore.rulesFetchStatus,filters:e.AdvisorStore.filters},t)}),(function(e){return{fetchRules:function(t){return e(q.b(t))},addNotification:function(t){return e(Object(U.addNotification)(t))},setFilters:function(t){return e(q.j(t))}}}))(Oe)))}}]);