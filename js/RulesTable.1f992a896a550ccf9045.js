(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[384],{69655:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>W});var r=a(92137),l=a(85061),n=a(96156),i=a(28481),o=a(87757),s=a.n(o),c=a(57149),u=a(59303),E=a(16530),m=a(13877),f=a(93264),d=a.n(f),T=a(88292),R=a(94550),I=a(76004),_=a(97109),p=a(88931),b=a(71094),S=a(61829),g=a(84785),y=a(6202),v=a(35451),k=a(62410),C=a(44788),A=a(76341),O=a(78216),h=a(46891),L=a(86350),F=a(34702),G=a(57277),Z=a(87533),P=a(83808),M=a(95358),x=a(71355);var w=a(58921),D=a(30893),N=a(28186),B=a(86896),j=a(43707);function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const W=function(){var e,t,a=(0,B.Z)(),o=(0,p.useDispatch)(),V=(0,E.useLocation)().search,W=(0,j.T)("advisor",u.PERMS.export).hasAccess,Y=(0,j.T)("advisor",u.PERMS.disableRec).hasAccess,K=(0,f.useState)([{title:a.formatMessage(D.Z.name),transforms:[R.sortable,(0,R.cellWidth)(45)]},{title:a.formatMessage(D.Z.added),transforms:[R.sortable,(0,R.cellWidth)(15)]},{title:a.formatMessage(D.Z.totalRisk),transforms:[R.sortable,(0,R.cellWidth)(15)]},{title:a.formatMessage(D.Z.riskofchange),transforms:[R.sortable,(0,R.cellWidth)(15)]},{title:a.formatMessage(D.Z.systems),transforms:[R.sortable,(0,R.cellWidth)(15)]},{title:d().createElement(d().Fragment,null,d().createElement(S.ZP,{size:"md"})," ",a.formatMessage(D.Z.ansible)),transforms:[R.sortable,(0,R.cellWidth)(15),R.fitContent],dataLabel:a.formatMessage(D.Z.ansible)}]),U=(0,i.Z)(K,1)[0],q=(0,p.useSelector)((function(e){return e.AdvisorStore.rules})),z=(0,p.useSelector)((function(e){return e.AdvisorStore.rulesFetchStatus})),J=(0,p.useSelector)((function(e){return e.AdvisorStore.filters})),Q=(0,p.useSelector)((function(e){return e.AdvisorStore.selectedTags})),X=(0,p.useSelector)((function(e){return e.AdvisorStore.workloads})),$=(0,p.useSelector)((function(e){return e.AdvisorStore.SID})),ee=(0,f.useState)([]),te=(0,i.Z)(ee,2),ae=te[0],re=te[1],le=(0,f.useState)({}),ne=(0,i.Z)(le,2),ie=ne[0],oe=ne[1],se=(0,f.useState)(!0),ce=(0,i.Z)(se,2),ue=ce[0],Ee=ce[1],me=(0,f.useState)((null==J?void 0:J.text)||""),fe=(0,i.Z)(me,2),de=fe[0],Te=fe[1],Re=(0,f.useState)(!1),Ie=(0,i.Z)(Re,2),_e=Ie[0],pe=Ie[1],be=(0,f.useState)({}),Se=(0,i.Z)(be,2),ge=Se[0],ye=Se[1],ve=(0,f.useState)(!1),ke=(0,i.Z)(ve,2),Ce=ke[0],Ae=ke[1],Oe=(0,f.useState)({}),he=(0,i.Z)(Oe,2),Le=he[0],Fe=he[1],Ge=function(e){return o((0,x.wN)(e))},Ze=function(e){return o(c.rr(e))},Pe=function(e,t){var a=(0,f.useState)(e),r=(0,i.Z)(a,2),l=r[0],n=r[1];return(0,f.useEffect)((function(){var a=setTimeout((function(){n(e)}),t);return function(){clearTimeout(a)}}),[t,e]),l}(de,u.DEBOUNCE_DELAY),Me=(null==q||null===(e=q.meta)||void 0===e?void 0:e.count)||0,xe={1:"description",2:"publish_date",3:"total_risk",4:"resolution_risk",5:"impacted_count",6:"playbook_count"},we=function(e){var t=e.resolution_set.find((function(e){return e.system_type===u.SYSTEM_TYPES.rhel||u.SYSTEM_TYPES.ocp}));return t?t.resolution_risk.risk:void 0},De=(0,f.useCallback)((function(){(0,_.Y4)(J,Q);var e=(null==Q?void 0:Q.length)&&{tags:Q.map((function(e){return encodeURIComponent(e)}))};return X&&(e=H(H({},e),(0,_.s0)(X,$))),function(e,t){return o(c.j(e,t))}(e.tags?{}:H(H({},(0,_.qW)(J)),e),e.tags&&(0,_.gs)(H(H({},(0,_.qW)(J)),e)))}),[J,Q,X,$,o]),Ne=function(e){var t=e*J.limit-J.limit;Ze(H(H({},J),{},{offset:t}))},Be=function(e){Ze(H(H({},J),{},{rule_status:e,offset:0},"enabled"!==e&&{impacting:["false"]}))},je=function(){var e=(0,r.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=ae[t].rule,e.prev=1,"enabled"!==r.rule_status){e.next=7;break}ye(r),pe(!0),e.next=17;break;case 7:return e.prev=7,e.next=10,b.Z.delete("".concat(u.BASE_URL,"/ack/").concat(r.rule_id,"/"));case 10:Ge({variant:"success",timeout:!0,dismissable:!0,title:a.formatMessage(D.Z.recSuccessfullyEnabled)}),De(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),Ge({variant:"danger",dismissable:!0,title:a.formatMessage(D.Z.error),description:"".concat(e.t0)});case 17:e.next=22;break;case 19:e.prev=19,e.t1=e.catch(1),Ge({variant:"danger",dismissable:!0,title:"enabled"===r.rule_status?a.formatMessage(D.Z.rulesTableHideReportsErrorDisabled):a.formatMessage(D.Z.rulesTableHideReportsErrorEnabled),description:"".concat(e.t1)});case 22:case"end":return e.stop()}}),e,null,[[1,19],[7,14]])})));return function(t){return e.apply(this,arguments)}}(),Ve=function(e){switch(e){case"enabled":return D.Z.rulesTableNoRuleHitsEnabledRulesBody;case"disabled":return D.Z.rulesTableNoRuleHitsDisabledRulesBody;case"rhdisabled":return D.Z.rulesTableNoRuleHitsRedHatDisabledRulesBody;default:return D.Z.noRecommendations}};(0,f.useEffect)((function(){ue||null===Q||De()}),[De,ue,J,Q]),(0,f.useEffect)((function(){if(V&&ue){var e=(0,_.yG)();delete e.tags,void 0===e.text?Te(""):Te(e.text),e.sort=void 0===e.sort?"-total_risk":e.sort[0],void 0!==e.has_playbook&&!Array.isArray(e.has_playbook)&&(e.has_playbook=["".concat(e.has_playbook)]),void 0!==e.incident&&!Array.isArray(e.incident)&&(e.incident=["".concat(e.incident)]),void 0===e.offset?e.offset=0:e.offset=Number(e.offset[0]),void 0===e.limit?e.limit=20:e.limit=Number(e.limit[0]),void 0!==e.reboot&&!Array.isArray(e.reboot)&&(e.reboot=["".concat(e.reboot)]),void 0!==e.impacting&&!Array.isArray(e.impacting)&&(e.impacting=["".concat(e.impacting)]),Ze(H(H({},J),e))}Ee(!1)}),[]),(0,f.useEffect)((function(){if(void 0!==J.sort){var e=Number(Object.entries(xe).find((function(e){return e[1]===J.sort||"-".concat(e[1])===J.sort}))[0]),t="-"===J.sort[0]?"desc":"asc";oe({index:e,direction:t})}}),[J.sort]),(0,f.useEffect)((function(){if(q.data)if(0===q.data.length)re([{cells:[{title:d().createElement(F.Z,{icon:v.default,iconClass:"ansibleCheck",title:a.formatMessage(D.Z.rulesTableNoRuleHitsTitle),text:a.formatMessage(Ve(J.rule_status))},"enabled"===J.rule_status&&d().createElement(y.Button,{variant:"link",style:{paddingTop:24},onClick:function(){return Be("all")}},a.formatMessage(D.Z.rulesTableNoRuleHitsAddDisabledButton))),props:{colSpan:6}}]}]);else{var e=q.data.flatMap((function(e,t){return[{isOpen:!1,rule:e,cells:[{title:d().createElement("span",{key:t},d().createElement(E.Link,{key:t,to:"/recommendations/".concat(e.rule_id)}," ",e.description," "),d().createElement(P.Z,{rule:e}))},{title:d().createElement(k.Z,{key:t,date:e.publish_date,variant:"relative"})},{title:d().createElement("div",{key:t},d().createElement(I.Tooltip,{key:t,position:I.TooltipPosition.bottom,content:a.formatMessage(D.Z.rulesDetailsTotalriskBody,{risk:u.TOTAL_RISK_LABEL_LOWER[e.total_risk]||a.formatMessage(D.Z.undefined),strong:function(e){return(0,N.f)(e)}})},d().createElement(O.Z,{value:e.total_risk})))},{title:d().createElement("div",{key:t},d().createElement(O.Z,{text:u.RISK_OF_CHANGE_LABEL[we(e)],value:we(e),hideIcon:!0}),d().createElement("div",null))},{title:"rhdisabled"===e.rule_status?d().createElement(I.Tooltip,{content:a.formatMessage(D.Z.byEnabling,{systems:e.impacted_systems_count})},d().createElement("span",null,a.formatMessage(D.Z.nA))):d().createElement("div",{key:t},"".concat(e.impacted_systems_count.toLocaleString()))},{title:d().createElement("div",{className:"ins-c-center-text ",key:t},e.playbook_count?d().createElement(v.default,{className:"ansibleCheck"}):a.formatMessage(D.Z.no))}]},{parent:2*t,fullWidth:!0,cells:[{title:d().createElement(L.Z,{className:"pf-m-light"},d().createElement(T.Stack,{hasGutter:!0},e.hosts_acked_count?d().createElement(T.StackItem,null,d().createElement(g.ZP,{size:"sm"})," ",e.hosts_acked_count&&!e.impacted_systems_count?a.formatMessage(D.Z.ruleIsDisabledForAllSystems):a.formatMessage(D.Z.ruleIsDisabledForSystemsBody,{systems:e.hosts_acked_count})," "," ",d().createElement(y.Button,{isInline:!0,variant:"link",ouiaId:"viewSystem",onClick:function(){Fe(e),Ae(!0)}},a.formatMessage(D.Z.viewSystems))):d().createElement(d().Fragment,null),d().createElement(Z.Z,{rule:e,resolutionRisk:we(e)})))}]}]}));re(e.asMutable())}}),[q]),(0,f.useEffect)((function(){if(!ue&&"pending"!==z){var e=H({},J),t=de.length?{text:de}:{};delete e.text,Ze(H(H(H({},e),t),{},{offset:0}))}}),[Pe]);var He,We=function(e){var t=H(H({},J),{},{offset:0});"text"===e&&Te(""),delete t[e],Ze(t)},Ye=function(e,t){t.length>0?Ze(H(H({},J),{},{offset:0},(0,n.Z)({},e,t))):We(e)},Ke=[{label:a.formatMessage(D.Z.name).toLowerCase(),filterValues:{key:"text-filter",onChange:function(e,t){return Te(t)},value:de,placeholder:a.formatMessage(D.Z.filterBy)}},{label:u.FILTER_CATEGORIES.total_risk.title,type:u.FILTER_CATEGORIES.total_risk.type,id:u.FILTER_CATEGORIES.total_risk.urlParam,value:"checkbox-".concat(u.FILTER_CATEGORIES.total_risk.urlParam),filterValues:{key:"".concat(u.FILTER_CATEGORIES.total_risk.urlParam,"-filter"),onChange:function(e,t){return Ye(u.FILTER_CATEGORIES.total_risk.urlParam,t)},value:J.total_risk,items:u.FILTER_CATEGORIES.total_risk.values}},{label:u.FILTER_CATEGORIES.res_risk.title,type:u.FILTER_CATEGORIES.res_risk.type,id:u.FILTER_CATEGORIES.res_risk.urlParam,value:"checkbox-".concat(u.FILTER_CATEGORIES.res_risk.urlParam),filterValues:{key:"".concat(u.FILTER_CATEGORIES.res_risk.urlParam,"-filter"),onChange:function(e,t){return Ye(u.FILTER_CATEGORIES.res_risk.urlParam,t)},value:J.res_risk,items:u.FILTER_CATEGORIES.res_risk.values}},{label:u.FILTER_CATEGORIES.impact.title,type:u.FILTER_CATEGORIES.impact.type,id:u.FILTER_CATEGORIES.impact.urlParam,value:"checkbox-".concat(u.FILTER_CATEGORIES.impact.urlParam),filterValues:{key:"".concat(u.FILTER_CATEGORIES.impact.urlParam,"-filter"),onChange:function(e,t){return Ye(u.FILTER_CATEGORIES.impact.urlParam,t)},value:J.impact,items:u.FILTER_CATEGORIES.impact.values}},{label:u.FILTER_CATEGORIES.likelihood.title,type:u.FILTER_CATEGORIES.likelihood.type,id:u.FILTER_CATEGORIES.likelihood.urlParam,value:"checkbox-".concat(u.FILTER_CATEGORIES.likelihood.urlParam),filterValues:{key:"".concat(u.FILTER_CATEGORIES.likelihood.urlParam,"-filter"),onChange:function(e,t){return Ye(u.FILTER_CATEGORIES.likelihood.urlParam,t)},value:J.likelihood,items:u.FILTER_CATEGORIES.likelihood.values}},{label:u.FILTER_CATEGORIES.category.title,type:u.FILTER_CATEGORIES.category.type,id:u.FILTER_CATEGORIES.category.urlParam,value:"checkbox-".concat(u.FILTER_CATEGORIES.category.urlParam),filterValues:{key:"".concat(u.FILTER_CATEGORIES.category.urlParam,"-filter"),onChange:function(e,t){return Ye(u.FILTER_CATEGORIES.category.urlParam,t)},value:J.category,items:u.FILTER_CATEGORIES.category.values}},{label:u.FILTER_CATEGORIES.incident.title,type:u.FILTER_CATEGORIES.incident.type,id:u.FILTER_CATEGORIES.incident.urlParam,value:"checkbox-".concat(u.FILTER_CATEGORIES.incident.urlParam),filterValues:{key:"".concat(u.FILTER_CATEGORIES.incident.urlParam,"-filter"),onChange:function(e,t){return Ye(u.FILTER_CATEGORIES.incident.urlParam,t)},value:J.incident,items:u.FILTER_CATEGORIES.incident.values}},{label:u.FILTER_CATEGORIES.has_playbook.title,type:u.FILTER_CATEGORIES.has_playbook.type,id:u.FILTER_CATEGORIES.has_playbook.urlParam,value:"checkbox-".concat(u.FILTER_CATEGORIES.has_playbook.urlParam),filterValues:{key:"".concat(u.FILTER_CATEGORIES.has_playbook.urlParam,"-filter"),onChange:function(e,t){return Ye(u.FILTER_CATEGORIES.has_playbook.urlParam,t)},value:J.has_playbook,items:u.FILTER_CATEGORIES.has_playbook.values}},{label:u.FILTER_CATEGORIES.reboot.title,type:u.FILTER_CATEGORIES.reboot.type,id:u.FILTER_CATEGORIES.reboot.urlParam,value:"checkbox-".concat(u.FILTER_CATEGORIES.reboot.urlParam),filterValues:{key:"".concat(u.FILTER_CATEGORIES.reboot.urlParam,"-filter"),onChange:function(e,t){return Ye(u.FILTER_CATEGORIES.reboot.urlParam,t)},value:J.reboot,items:u.FILTER_CATEGORIES.reboot.values}},{label:u.FILTER_CATEGORIES.rule_status.title,type:u.FILTER_CATEGORIES.rule_status.type,id:u.FILTER_CATEGORIES.rule_status.urlParam,value:"radio-".concat(u.FILTER_CATEGORIES.rule_status.urlParam),filterValues:{key:"".concat(u.FILTER_CATEGORIES.rule_status.urlParam,"-filter"),onChange:function(e,t){return Be(t)},value:"".concat(J.rule_status),items:u.FILTER_CATEGORIES.rule_status.values}},{label:u.FILTER_CATEGORIES.impacting.title,type:u.FILTER_CATEGORIES.impacting.type,id:u.FILTER_CATEGORIES.impacting.urlParam,value:"checkbox-".concat(u.FILTER_CATEGORIES.impacting.urlParam),filterValues:{key:"".concat(u.FILTER_CATEGORIES.impacting.urlParam,"-filter"),onChange:function(e,t){return Ye(u.FILTER_CATEGORIES.impacting.urlParam,t)},value:J.impacting,items:u.FILTER_CATEGORIES.impacting.values}}],Ue={deleteTitle:a.formatMessage(D.Z.resetFilters),filters:(He=H({},J),delete He.topic,delete He.sort,delete He.offset,delete He.limit,(0,_.yK)(He,u.FILTER_CATEGORIES)),onDelete:function(e,t,a){a?(Te(""),Ze(H(H({},J.topic&&{topic:J.topic}),{},{impacting:["true"],rule_status:"enabled",limit:J.limit,offset:J.offset}))):t.map((function(e){var t=(0,n.Z)({},e.urlParam,Array.isArray(J[e.urlParam])?J[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?Ze(H(H({},J),t)):We(e.urlParam)}))}};return d().createElement(d().Fragment,null,Ce&&d().createElement(M.Z,{handleModalToggle:function(e){return Ae(e)},isModalOpen:Ce,afterFn:function(){De()},rule:Le}),_e&&d().createElement(C.Z,{handleModalToggle:pe,isModalOpen:_e,rule:ge,afterFn:De}),d().createElement(G.Z,{pagination:{itemCount:Me,page:J.offset/J.limit+1,perPage:Number(J.limit),onSetPage:function(e,t){Ne(t)},onPerPageSelect:function(e,t){Ze(H(H({},J),{},{limit:t,offset:0}))},isCompact:!0},exportConfig:(t={label:a.formatMessage(D.Z.exportCsv)},(0,n.Z)(t,"label",a.formatMessage(D.Z.exportJson)),(0,n.Z)(t,"onSelect",(function(e,t){return(0,w.Z)("hits",t,J,Q,X,$)})),(0,n.Z)(t,"isDisabled",!W||!J.impacting||Array.isArray(J.impacting)&&!J.impacting.every((function(e){return"true"===e}))),(0,n.Z)(t,"tooltipText",W?a.formatMessage(D.Z.exportData):a.formatMessage(D.Z.permsAction)),t),filterConfig:{items:Ke},activeFiltersConfig:Ue}),"fulfilled"===z&&d().createElement(R.Table,{"aria-label":"rule-table",variant:R.TableVariant.compact,actionResolver:function(e,t){var r=t.rowIndex,l=ae[r].rule?ae[r].rule:null;return r%2==0&&l?l&&"enabled"===l.rule_status?[{title:a.formatMessage(D.Z.disableRule),onClick:function(e,t){return je(t)}}]:[{title:a.formatMessage(D.Z.enableRule),onClick:function(e,t){return je(t)}}]:null},onCollapse:function(e,t,a){var r=(0,l.Z)(ae);r[t]=H(H({},r[t]),{},{isOpen:a}),re(r)},sortBy:ie,onSort:function(e,t,a){var r="".concat("asc"===a?"":"-").concat(xe[t]);oe({index:t,direction:a}),Ze(H(H({},J),{},{sort:r,offset:0}))},cells:U,rows:ae,areActionsDisabled:function(){return!Y},isStickyHeader:!0},d().createElement(R.TableHeader,null),d().createElement(R.TableBody,null)),"pending"===z&&d().createElement(h.Z,null),"failed"===z&&d().createElement(A.Z,{message:a.formatMessage(D.Z.rulesTableFetchRulesError)}),d().createElement(m.tl,{ouiaId:"page",itemCount:Me,page:J.offset/J.limit+1,perPage:Number(J.limit),onSetPage:function(e,t){Ne(t)},onPerPageSelect:function(e,t){Ze(H(H({},J),{},{limit:t,offset:0}))},widgetId:"pagination-options-menu-bottom",variant:m.aM.bottom}))}}}]);
//# sourceMappingURL=../sourcemaps/RulesTable.dcea0e4bac0c04cd8bba.js.map