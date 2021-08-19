"use strict";(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[384],{69655:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Y});var r=a(15861),l=a(31193),n=a(4942),i=a(90099),o=a(87757),s=a.n(o),c=a(68961),u=a(59303),E=a(16530),m=a(13877),f=a(93264),d=a.n(f),T=a(88292),R=a(78247),p=a(76004),I=a(97109),_=a(88931),b=a(71094),S=a(61829),g=a(84785),y=a(6202),k=a(81731),v=a(35451),C=a(62410),A=a(44788),O=a(76341),h=a(78216),L=a(46891),F=a(86350),Z=a(34702),G=a(57277),P=a(87533),M=a(83808),x=a(95358),w=a(71355);var D=a(58921),N=a(30893),B=a(28186),j=a(86896),V=a(43707);function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function W(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const Y=function(){var e,t,a=(0,j.Z)(),o=(0,_.useDispatch)(),H=(0,E.useLocation)().search,Y=(0,V.T)("advisor",u.PERMS.export).hasAccess,K=(0,V.T)("advisor",u.PERMS.disableRec).hasAccess,U=(0,f.useState)([{title:a.formatMessage(N.Z.name),transforms:[R.sortable,(0,R.cellWidth)(40)]},{title:a.formatMessage(N.Z.added),transforms:[R.sortable,(0,R.cellWidth)(10)]},{title:a.formatMessage(N.Z.category),transforms:[R.sortable,(0,R.cellWidth)(10)]},{title:a.formatMessage(N.Z.totalRisk),transforms:[R.sortable,(0,R.cellWidth)(15)]},{title:a.formatMessage(N.Z.riskofchange),transforms:[R.sortable,(0,R.cellWidth)(15)]},{title:a.formatMessage(N.Z.systems),transforms:[R.sortable,(0,R.cellWidth)(15)]},{title:d().createElement(d().Fragment,null,d().createElement(S.ZP,{size:"md"})," ",a.formatMessage(N.Z.ansible)),transforms:[R.sortable,(0,R.cellWidth)(15),R.fitContent],dataLabel:a.formatMessage(N.Z.ansible)}]),q=(0,i.Z)(U,1)[0],z=(0,_.useSelector)((function(e){return e.AdvisorStore.rules})),J=(0,_.useSelector)((function(e){return e.AdvisorStore.rulesFetchStatus})),Q=(0,_.useSelector)((function(e){return e.AdvisorStore.filters})),X=(0,_.useSelector)((function(e){return e.AdvisorStore.selectedTags})),$=(0,_.useSelector)((function(e){return e.AdvisorStore.workloads})),ee=(0,_.useSelector)((function(e){return e.AdvisorStore.SID})),te=(0,f.useState)([]),ae=(0,i.Z)(te,2),re=ae[0],le=ae[1],ne=(0,f.useState)({}),ie=(0,i.Z)(ne,2),oe=ie[0],se=ie[1],ce=(0,f.useState)(!0),ue=(0,i.Z)(ce,2),Ee=ue[0],me=ue[1],fe=(0,f.useState)((null==Q?void 0:Q.text)||""),de=(0,i.Z)(fe,2),Te=de[0],Re=de[1],pe=(0,f.useState)(!1),Ie=(0,i.Z)(pe,2),_e=Ie[0],be=Ie[1],Se=(0,f.useState)({}),ge=(0,i.Z)(Se,2),ye=ge[0],ke=ge[1],ve=(0,f.useState)(!1),Ce=(0,i.Z)(ve,2),Ae=Ce[0],Oe=Ce[1],he=(0,f.useState)({}),Le=(0,i.Z)(he,2),Fe=Le[0],Ze=Le[1],Ge=(0,f.useState)(!1),Pe=(0,i.Z)(Ge,2),Me=Pe[0],xe=Pe[1],we=function(e){return o((0,w.wN)(e))},De=function(e){return o(c.rr(e))},Ne=function(e,t){var a=(0,f.useState)(e),r=(0,i.Z)(a,2),l=r[0],n=r[1];return(0,f.useEffect)((function(){var a=setTimeout((function(){n(e)}),t);return function(){clearTimeout(a)}}),[t,e]),l}(Te,u.DEBOUNCE_DELAY),Be=(null==z||null===(e=z.meta)||void 0===e?void 0:e.count)||0,je={1:"description",2:"publish_date",3:"category",4:"total_risk",5:"resolution_risk",6:"impacted_count",7:"playbook_count"},Ve=function(e){var t=e.resolution_set.find((function(e){return e.system_type===u.SYSTEM_TYPES.rhel||u.SYSTEM_TYPES.ocp}));return t?t.resolution_risk.risk:void 0},He=(0,f.useCallback)((function(){(0,I.Y4)(Q,X);var e=(null==X?void 0:X.length)&&{tags:X.map((function(e){return encodeURIComponent(e)}))};return $&&(e=W(W({},e),(0,I.s0)($,ee))),function(e,t){return o(c.j(e,t))}(e.tags?{}:W(W({},(0,I.qW)(Q)),e),e.tags&&(0,I.gs)(W(W({},(0,I.qW)(Q)),e)))}),[Q,X,$,ee,o]),We=function(e){var t=e*Q.limit-Q.limit;De(W(W({},Q),{},{offset:t}))},Ye=function(e){De(W(W({},Q),{},{rule_status:e,offset:0},"enabled"!==e&&{impacting:["false"]}))},Ke=function(){var e=(0,r.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=re[t].rule,e.prev=1,"enabled"!==r.rule_status){e.next=7;break}ke(r),be(!0),e.next=17;break;case 7:return e.prev=7,e.next=10,b.Z.delete("".concat(u.BASE_URL,"/ack/").concat(r.rule_id,"/"));case 10:we({variant:"success",timeout:!0,dismissable:!0,title:a.formatMessage(N.Z.recSuccessfullyEnabled)}),He(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),we({variant:"danger",dismissable:!0,title:a.formatMessage(N.Z.error),description:"".concat(e.t0)});case 17:e.next=22;break;case 19:e.prev=19,e.t1=e.catch(1),we({variant:"danger",dismissable:!0,title:"enabled"===r.rule_status?a.formatMessage(N.Z.rulesTableHideReportsErrorDisabled):a.formatMessage(N.Z.rulesTableHideReportsErrorEnabled),description:"".concat(e.t1)});case 22:case"end":return e.stop()}}),e,null,[[1,19],[7,14]])})));return function(t){return e.apply(this,arguments)}}(),Ue=function(e){switch(e){case"enabled":return N.Z.rulesTableNoRuleHitsEnabledRulesBody;case"disabled":return N.Z.rulesTableNoRuleHitsDisabledRulesBody;case"rhdisabled":return N.Z.rulesTableNoRuleHitsRedHatDisabledRulesBody;default:return N.Z.noRecommendations}};(0,f.useEffect)((function(){Ee||null===X||He()}),[He,Ee,Q,X]),(0,f.useEffect)((function(){if(H&&Ee){var e=(0,I.yG)();delete e.tags,void 0===e.text?Re(""):Re(e.text),e.sort=void 0===e.sort?"-total_risk":e.sort[0],void 0!==e.has_playbook&&!Array.isArray(e.has_playbook)&&(e.has_playbook=["".concat(e.has_playbook)]),void 0!==e.incident&&!Array.isArray(e.incident)&&(e.incident=["".concat(e.incident)]),void 0===e.offset?e.offset=0:e.offset=Number(e.offset[0]),void 0===e.limit?e.limit=20:e.limit=Number(e.limit[0]),void 0!==e.reboot&&!Array.isArray(e.reboot)&&(e.reboot=["".concat(e.reboot)]),void 0!==e.impacting&&!Array.isArray(e.impacting)&&(e.impacting=["".concat(e.impacting)]),De(W(W({},Q),e))}me(!1)}),[]),(0,f.useEffect)((function(){if(void 0!==Q.sort){var e=Number(Object.entries(je).find((function(e){return e[1]===Q.sort||"-".concat(e[1])===Q.sort}))[0]),t="-"===Q.sort[0]?"desc":"asc";se({index:e,direction:t})}}),[Q.sort]),(0,f.useEffect)((function(){if(z.data)if(0===z.data.length)le([{cells:[{title:d().createElement(Z.Z,{icon:v.default,iconClass:"ansibleCheck",title:a.formatMessage(N.Z.rulesTableNoRuleHitsTitle),text:a.formatMessage(Ue(Q.rule_status))},"enabled"===Q.rule_status&&d().createElement(y.Button,{variant:"link",style:{paddingTop:24},onClick:function(){return Ye("all")}},a.formatMessage(N.Z.rulesTableNoRuleHitsAddDisabledButton))),props:{colSpan:6}}]}]);else{var e=z.data.flatMap((function(e,t){return[{isOpen:Me,rule:e,cells:[{title:d().createElement("span",{key:t},d().createElement(E.Link,{key:t,to:"/recommendations/".concat(e.rule_id)}," ",e.description," "),d().createElement(M.Z,{rule:e}))},{title:d().createElement(C.Z,{key:t,date:e.publish_date,variant:"relative"})},{title:d().createElement(k.Z,{key:t,labelList:[e.category]})},{title:d().createElement("div",{key:t},d().createElement(p.Tooltip,{key:t,position:p.TooltipPosition.bottom,content:a.formatMessage(N.Z.rulesDetailsTotalriskBody,{risk:u.TOTAL_RISK_LABEL_LOWER[e.total_risk]||a.formatMessage(N.Z.undefined),strong:function(e){return(0,B.f)(e)}})},d().createElement(h.Z,{value:e.total_risk})))},{title:d().createElement("div",{key:t},d().createElement(h.Z,{text:u.RISK_OF_CHANGE_LABEL[Ve(e)],value:Ve(e),hideIcon:!0}),d().createElement("div",null))},{title:"rhdisabled"===e.rule_status?d().createElement(p.Tooltip,{content:a.formatMessage(N.Z.byEnabling,{systems:e.impacted_systems_count})},d().createElement("span",null,a.formatMessage(N.Z.nA))):d().createElement("div",{key:t},"".concat(e.impacted_systems_count.toLocaleString()))},{title:d().createElement("div",{className:"ins-c-center-text ",key:t},e.playbook_count?d().createElement(v.default,{className:"ansibleCheck"}):a.formatMessage(N.Z.no))}]},{parent:2*t,fullWidth:!0,cells:[{title:d().createElement(F.Z,{className:"pf-m-light"},d().createElement(T.Stack,{hasGutter:!0},e.hosts_acked_count?d().createElement(T.StackItem,null,d().createElement(g.ZP,{size:"sm"})," ",e.hosts_acked_count&&!e.impacted_systems_count?a.formatMessage(N.Z.ruleIsDisabledForAllSystems):a.formatMessage(N.Z.ruleIsDisabledForSystemsBody,{systems:e.hosts_acked_count})," "," ",d().createElement(y.Button,{isInline:!0,variant:"link",ouiaId:"viewSystem",onClick:function(){Ze(e),Oe(!0)}},a.formatMessage(N.Z.viewSystems))):d().createElement(d().Fragment,null),d().createElement(P.Z,{rule:e,resolutionRisk:Ve(e)})))}]}]}));le(e.asMutable())}}),[z]),(0,f.useEffect)((function(){if(!Ee&&"pending"!==J){var e=W({},Q),t=Te.length?{text:Te}:{};delete e.text,De(W(W(W({},e),t),{},{offset:0}))}}),[Ne]);var qe,ze=function(e){var t=W(W({},Q),{},{offset:0});"text"===e&&Re(""),delete t[e],De(t)},Je=function(e,t){t.length>0?De(W(W({},Q),{},{offset:0},(0,n.Z)({},e,t))):ze(e)},Qe=[{label:a.formatMessage(N.Z.name).toLowerCase(),filterValues:{key:"text-filter",onChange:function(e,t){return Re(t)},value:Te,placeholder:a.formatMessage(N.Z.filterBy)}},{label:u.FILTER_CATEGORIES.total_risk.title,type:u.FILTER_CATEGORIES.total_risk.type,id:u.FILTER_CATEGORIES.total_risk.urlParam,value:"checkbox-".concat(u.FILTER_CATEGORIES.total_risk.urlParam),filterValues:{key:"".concat(u.FILTER_CATEGORIES.total_risk.urlParam,"-filter"),onChange:function(e,t){return Je(u.FILTER_CATEGORIES.total_risk.urlParam,t)},value:Q.total_risk,items:u.FILTER_CATEGORIES.total_risk.values}},{label:u.FILTER_CATEGORIES.res_risk.title,type:u.FILTER_CATEGORIES.res_risk.type,id:u.FILTER_CATEGORIES.res_risk.urlParam,value:"checkbox-".concat(u.FILTER_CATEGORIES.res_risk.urlParam),filterValues:{key:"".concat(u.FILTER_CATEGORIES.res_risk.urlParam,"-filter"),onChange:function(e,t){return Je(u.FILTER_CATEGORIES.res_risk.urlParam,t)},value:Q.res_risk,items:u.FILTER_CATEGORIES.res_risk.values}},{label:u.FILTER_CATEGORIES.impact.title,type:u.FILTER_CATEGORIES.impact.type,id:u.FILTER_CATEGORIES.impact.urlParam,value:"checkbox-".concat(u.FILTER_CATEGORIES.impact.urlParam),filterValues:{key:"".concat(u.FILTER_CATEGORIES.impact.urlParam,"-filter"),onChange:function(e,t){return Je(u.FILTER_CATEGORIES.impact.urlParam,t)},value:Q.impact,items:u.FILTER_CATEGORIES.impact.values}},{label:u.FILTER_CATEGORIES.likelihood.title,type:u.FILTER_CATEGORIES.likelihood.type,id:u.FILTER_CATEGORIES.likelihood.urlParam,value:"checkbox-".concat(u.FILTER_CATEGORIES.likelihood.urlParam),filterValues:{key:"".concat(u.FILTER_CATEGORIES.likelihood.urlParam,"-filter"),onChange:function(e,t){return Je(u.FILTER_CATEGORIES.likelihood.urlParam,t)},value:Q.likelihood,items:u.FILTER_CATEGORIES.likelihood.values}},{label:u.FILTER_CATEGORIES.category.title,type:u.FILTER_CATEGORIES.category.type,id:u.FILTER_CATEGORIES.category.urlParam,value:"checkbox-".concat(u.FILTER_CATEGORIES.category.urlParam),filterValues:{key:"".concat(u.FILTER_CATEGORIES.category.urlParam,"-filter"),onChange:function(e,t){return Je(u.FILTER_CATEGORIES.category.urlParam,t)},value:Q.category,items:u.FILTER_CATEGORIES.category.values}},{label:u.FILTER_CATEGORIES.incident.title,type:u.FILTER_CATEGORIES.incident.type,id:u.FILTER_CATEGORIES.incident.urlParam,value:"checkbox-".concat(u.FILTER_CATEGORIES.incident.urlParam),filterValues:{key:"".concat(u.FILTER_CATEGORIES.incident.urlParam,"-filter"),onChange:function(e,t){return Je(u.FILTER_CATEGORIES.incident.urlParam,t)},value:Q.incident,items:u.FILTER_CATEGORIES.incident.values}},{label:u.FILTER_CATEGORIES.has_playbook.title,type:u.FILTER_CATEGORIES.has_playbook.type,id:u.FILTER_CATEGORIES.has_playbook.urlParam,value:"checkbox-".concat(u.FILTER_CATEGORIES.has_playbook.urlParam),filterValues:{key:"".concat(u.FILTER_CATEGORIES.has_playbook.urlParam,"-filter"),onChange:function(e,t){return Je(u.FILTER_CATEGORIES.has_playbook.urlParam,t)},value:Q.has_playbook,items:u.FILTER_CATEGORIES.has_playbook.values}},{label:u.FILTER_CATEGORIES.reboot.title,type:u.FILTER_CATEGORIES.reboot.type,id:u.FILTER_CATEGORIES.reboot.urlParam,value:"checkbox-".concat(u.FILTER_CATEGORIES.reboot.urlParam),filterValues:{key:"".concat(u.FILTER_CATEGORIES.reboot.urlParam,"-filter"),onChange:function(e,t){return Je(u.FILTER_CATEGORIES.reboot.urlParam,t)},value:Q.reboot,items:u.FILTER_CATEGORIES.reboot.values}},{label:u.FILTER_CATEGORIES.rule_status.title,type:u.FILTER_CATEGORIES.rule_status.type,id:u.FILTER_CATEGORIES.rule_status.urlParam,value:"radio-".concat(u.FILTER_CATEGORIES.rule_status.urlParam),filterValues:{key:"".concat(u.FILTER_CATEGORIES.rule_status.urlParam,"-filter"),onChange:function(e,t){return Ye(t)},value:"".concat(Q.rule_status),items:u.FILTER_CATEGORIES.rule_status.values}},{label:u.FILTER_CATEGORIES.impacting.title,type:u.FILTER_CATEGORIES.impacting.type,id:u.FILTER_CATEGORIES.impacting.urlParam,value:"checkbox-".concat(u.FILTER_CATEGORIES.impacting.urlParam),filterValues:{key:"".concat(u.FILTER_CATEGORIES.impacting.urlParam,"-filter"),onChange:function(e,t){return Je(u.FILTER_CATEGORIES.impacting.urlParam,t)},value:Q.impacting,items:u.FILTER_CATEGORIES.impacting.values}}],Xe={deleteTitle:a.formatMessage(N.Z.resetFilters),filters:(qe=W({},Q),delete qe.topic,delete qe.sort,delete qe.offset,delete qe.limit,(0,I.yK)(qe,u.FILTER_CATEGORIES)),onDelete:function(e,t,a){a?(Re(""),De(W(W({},Q.topic&&{topic:Q.topic}),{},{impacting:["true"],rule_status:"enabled",limit:Q.limit,offset:Q.offset}))):t.map((function(e){var t=(0,n.Z)({},e.urlParam,Array.isArray(Q[e.urlParam])?Q[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?De(W(W({},Q),t)):ze(e.urlParam)}))}};return d().createElement(d().Fragment,null,Ae&&d().createElement(x.Z,{handleModalToggle:function(e){return Oe(e)},isModalOpen:Ae,afterFn:function(){He()},rule:Fe}),_e&&d().createElement(A.Z,{handleModalToggle:be,isModalOpen:_e,rule:ye,afterFn:He}),d().createElement(G.Z,{expandAll:{isAllExpanded:Me,onClick:function(e,t){var a=(0,l.Z)(re);xe(t),a.map((function(e,r){Object.prototype.hasOwnProperty.call(e,"isOpen")&&(a[r]=W(W({},e),{},{isOpen:t}))})),le(a)}},pagination:{itemCount:Be,page:Q.offset/Q.limit+1,perPage:Number(Q.limit),onSetPage:function(e,t){We(t)},onPerPageSelect:function(e,t){De(W(W({},Q),{},{limit:t,offset:0}))},isCompact:!0},exportConfig:(t={label:a.formatMessage(N.Z.exportCsv)},(0,n.Z)(t,"label",a.formatMessage(N.Z.exportJson)),(0,n.Z)(t,"onSelect",(function(e,t){return(0,D.Z)("hits",t,Q,X,$,ee)})),(0,n.Z)(t,"isDisabled",!Y||!Q.impacting||Array.isArray(Q.impacting)&&!Q.impacting.every((function(e){return"true"===e}))),(0,n.Z)(t,"tooltipText",Y?a.formatMessage(N.Z.exportData):a.formatMessage(N.Z.permsAction)),t),filterConfig:{items:Qe},activeFiltersConfig:Xe}),"fulfilled"===J&&d().createElement(R.Table,{"aria-label":"rule-table",variant:R.TableVariant.compact,actionResolver:function(e,t){var r=t.rowIndex,l=re[r].rule?re[r].rule:null;return r%2==0&&l?l&&"enabled"===l.rule_status?[{title:a.formatMessage(N.Z.disableRule),onClick:function(e,t){return Ke(t)}}]:[{title:a.formatMessage(N.Z.enableRule),onClick:function(e,t){return Ke(t)}}]:null},onCollapse:function(e,t,a){var r=(0,l.Z)(re);r[t]=W(W({},r[t]),{},{isOpen:a}),le(r)},sortBy:oe,onSort:function(e,t,a){var r="".concat("asc"===a?"":"-").concat(je[t]);se({index:t,direction:a}),De(W(W({},Q),{},{sort:r,offset:0}))},cells:q,rows:re,areActionsDisabled:function(){return!K},isStickyHeader:!0},d().createElement(R.TableHeader,null),d().createElement(R.TableBody,null)),"pending"===J&&d().createElement(L.Z,null),"failed"===J&&d().createElement(O.Z,{message:a.formatMessage(N.Z.rulesTableFetchRulesError)}),d().createElement(m.tl,{ouiaId:"page",itemCount:Be,page:Q.offset/Q.limit+1,perPage:Number(Q.limit),onSetPage:function(e,t){We(t)},onPerPageSelect:function(e,t){De(W(W({},Q),{},{limit:t,offset:0}))},widgetId:"pagination-options-menu-bottom",variant:m.aM.bottom}))}}}]);
//# sourceMappingURL=../sourcemaps/RulesTable.1b0f74931d0e79eee0e4.js.map