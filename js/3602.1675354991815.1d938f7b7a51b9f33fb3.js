(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[3602],{81159:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Stack=void 0;const r=a(70655),l=r.__importStar(a(93264)),n=r.__importDefault(a(73976)),i=a(38296);t.Stack=e=>{var{hasGutter:t=!1,className:a="",children:o=null,component:s="div"}=e,c=r.__rest(e,["hasGutter","className","children","component"]);const u=s;return l.createElement(u,Object.assign({},c,{className:i.css(n.default.stack,t&&n.default.modifiers.gutter,a)}),o)},t.Stack.displayName="Stack"},34023:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StackItem=void 0;const r=a(70655),l=r.__importStar(a(93264)),n=r.__importDefault(a(73976)),i=a(38296);t.StackItem=e=>{var{isFilled:t=!1,className:a="",children:o=null}=e,s=r.__rest(e,["isFilled","className","children"]);return l.createElement("div",Object.assign({},s,{className:i.css(n.default.stackItem,t&&n.default.modifiers.fill,a)}),o)},t.StackItem.displayName="StackItem"},88292:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=a(70655);r.__exportStar(a(81159),t),r.__exportStar(a(34023),t)},61829:(e,t,a)=>{"use strict";t.Fs={name:"AnsibeTowerIcon",height:390,width:390,svgPath:"M402.6,214.7c0,103.9-84.2,188.1-188.1,188.1c-103.9,0-188.1-84.2-188.1-188.1  c0-103.9,84.2-188.1,188.1-188.1C318.4,26.6,402.6,110.8,402.6,214.7z M304.1,289.3l-74.9-180.2c-2.1-5.2-6.4-7.9-11.6-7.9c-5.2,0-9.8,2.8-11.9,7.9l-82.2,197.7h28.1l32.5-81.5  l97.1,78.4c3.9,3.2,6.7,4.6,10.4,4.6c7.3,0,13.7-5.5,13.7-13.4C305.4,293.6,305,291.5,304.1,289.3z M217.7,141.5l48.7,120.2  l-73.5-57.9L217.7,141.5z",yOffset:20,xOffset:20},t.Q2=a(35183).createIcon(t.Fs),t.ZP=t.Q2},73976:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r}),a(53519);const r={modifiers:{fill:"pf-m-fill",gutter:"pf-m-gutter"},stack:"pf-l-stack",stackItem:"pf-l-stack__item"}},65790:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>ie});var r=a(15861),l=a(42982),n=a(4942),i=a(70885),o=a(87757),s=a.n(o),c=a(59303),u=a(75662),m=a(13877),f=a(93264),d=a.n(f),p=a(88292),b=a(17855),g=a(76004),y=a(97109),v=a(28216),k=a(61829),h=a(84785),_=a(6202),P=a(52837),E=a(62410),W=a(71094),Z=a(44788),O=a(2443),S=a(90693),x=a(46891),M=a(7887),C=a(69069),w=a(87516),T=a(95358),j=a(71355),A=a(40609),D=a(58921),N=a(30893),F=a(28186),I=a(28672),R=a(75546),V=a(86896),B=a(43707),L=a(45697),z=a.n(L),G=a(22938),H=a(52017),U=a(70655),q=a(680);function K(e){var t=(0,V.Z)(),a=t.formatMessage,r=t.textComponent,l=void 0===r?f.Fragment:r,n=e.id,i=e.description,o=e.defaultMessage,s=e.values,c=e.children,u=e.tagName,m=void 0===u?l:u,d=a({id:n,description:i,defaultMessage:o},s,{ignoreTag:e.ignoreTag});return"function"==typeof c?c(Array.isArray(d)?d:[d]):m?f.createElement(m,null,f.Children.toArray(d)):f.createElement(f.Fragment,null,d)}K.displayName="FormattedMessage";var Q=f.memo(K,(function(e,t){var a=e.values,r=(0,U.__rest)(e,["values"]),l=t.values,n=(0,U.__rest)(t,["values"]);return(0,q.wU)(l,a)&&(0,q.wU)(r,n)}));Q.displayName="MemoizedFormattedMessage";const Y=Q;var J=a(34702),$=function(e){var t=e.filters,a=e.toggleRulesDisabled,r=ae()[t.rule_status]||ae().default;return d().createElement(J.Z,{icon:H.CheckCircleIcon,iconClass:"ansibleCheck",title:r.title,text:r.body},"enabled"===t.rule_status&&d().createElement(G.Button,{variant:"link",style:{paddingTop:24},onClick:function(){return a("all")}},d().createElement(Y,{id:"rulestable.norulehits.adddisabledbutton"})))};$.propTypes={filters:z().object,toggleRulesDisabled:z().func};const X=$;function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ae=function(){var e=d().createElement(Y,{id:"rulestable.norulehits.title"});return{enabled:{title:e,body:d().createElement(d().Fragment,null,d().createElement(G.Text,null,d().createElement(Y,{id:"rulestable.norulehits.enabledrulesbody"})),d().createElement(G.Text,null,d().createElement(Y,{id:"rulestable.norulehits.enabledrulesbodysecondline"})))},disabled:{title:e,body:d().createElement(d().Fragment,null,d().createElement(G.Text,null,d().createElement(Y,{id:"rulestable.norules.disabledrulesbody"})),d().createElement(G.Text,null,d().createElement(Y,{id:"rulestable.norules.disabledrulesbodysecondline"})))},rhdisabled:{title:e,body:d().createElement(G.Text,null,d().createElement(Y,{id:"rulestable.norules.redhatdisabledrulesbody"}))},default:{title:e,body:d().createElement(G.Text,null,d().createElement(Y,{id:"noRecommendations"}))}}};function re(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function le(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?re(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):re(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ne=function(e){var t,a,o=e.isTabActive,L=(0,V.Z)(),z=(0,v.useDispatch)(),G=(0,u.useLocation)().search,H=(0,B.TE)("advisor",c.Gd.export).hasAccess,U=(0,B.TE)("advisor",c.Gd.disableRec).hasAccess,q=(0,f.useState)([{title:L.formatMessage(N.Z.name),transforms:[b.sortable,(0,b.cellWidth)(40)]},{title:L.formatMessage(N.Z.modified),transforms:[b.sortable,b.fitContent]},{title:L.formatMessage(N.Z.category),transforms:[b.sortable,b.fitContent]},{title:L.formatMessage(N.Z.totalRisk),transforms:[b.sortable,b.fitContent]},{title:L.formatMessage(N.Z.systems),transforms:[b.sortable,b.fitContent]},{title:L.formatMessage(N.Z.remediation),transforms:[b.sortable,b.fitContent]}]),K=(0,i.Z)(q,1)[0],Q=(0,v.useSelector)((function(e){return e.filters.selectedTags})),Y=(0,v.useSelector)((function(e){return e.filters.workloads})),J=(0,v.useSelector)((function(e){return e.filters.SID})),$=(0,v.useSelector)((function(e){return e.filters.recState})),ee=(0,f.useState)([]),ae=(0,i.Z)(ee,2),re=ae[0],ne=ae[1],ie=(0,f.useState)({}),oe=(0,i.Z)(ie,2),se=oe[0],ce=oe[1],ue=(0,f.useState)(!0),me=(0,i.Z)(ue,2),fe=me[0],de=me[1],pe=(0,f.useState)((null==$?void 0:$.text)||""),be=(0,i.Z)(pe,2),ge=be[0],ye=be[1],ve=(0,f.useState)(!1),ke=(0,i.Z)(ve,2),he=ke[0],_e=ke[1],Pe=(0,f.useState)({}),Ee=(0,i.Z)(Pe,2),We=Ee[0],Ze=Ee[1],Oe=(0,f.useState)(!1),Se=(0,i.Z)(Oe,2),xe=Se[0],Me=Se[1],Ce=(0,f.useState)({}),we=(0,i.Z)(Ce,2),Te=we[0],je=we[1],Ae=(0,f.useState)(!1),De=(0,i.Z)(Ae,2),Ne=De[0],Fe=De[1],Ie=function(e){return z((0,j.addNotification)(e))},Re=function(e){return z((0,I.hb)(e))},Ve={};(null==Q?void 0:Q.length)&&(Ve=le(le({},Ve),{tags:Q.join(",")})),Y&&(Ve=le(le({},Ve),(0,y.s0)(Y,J)));var Be=(0,R.Bs)(le(le({},(0,y.qW)($)),Ve)),Le=Be.data,ze=void 0===Le?[]:Le,Ge=Be.isFetching,He=Be.isLoading,Ue=Be.isError,qe=Be.refetch,Ke=(0,A.Z)(ge,c.$x),Qe=(null==ze||null===(t=ze.meta)||void 0===t?void 0:t.count)||0,Ye={1:"description",2:"publish_date",3:"category",4:"total_risk",5:"impacted_count",6:"playbook_count"};(0,f.useEffect)((function(){fe||null===Q||(0,y.Y4)($,Q)}),[$,Q,Y,J]);var Je=function(e){var t=e*$.limit-$.limit;Re(le(le({},$),{},{offset:t}))},$e=function(e){Re(le(le({},$),{},{rule_status:e,offset:0},"enabled"!==e&&{impacting:["false"]}))},Xe=function(){var e=(0,r.Z)(s().mark((function e(t){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=re[t].rule,e.prev=1,"enabled"!==a.rule_status){e.next=7;break}Ze(a),_e(!0),e.next=17;break;case 7:return e.prev=7,e.next=10,(0,W.Sp)("".concat(c._n,"/ack/").concat(a.rule_id,"/"));case 10:Ie({variant:"success",timeout:!0,dismissable:!0,title:L.formatMessage(N.Z.recSuccessfullyEnabled)}),qe(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),Ie({variant:"danger",dismissable:!0,title:L.formatMessage(N.Z.error),description:"".concat(e.t0)});case 17:e.next=22;break;case 19:e.prev=19,e.t1=e.catch(1),Ie({variant:"danger",dismissable:!0,title:"enabled"===a.rule_status?L.formatMessage(N.Z.rulesTableHideReportsErrorDisabled):L.formatMessage(N.Z.rulesTableHideReportsErrorEnabled),description:"".concat(e.t1)});case 22:case"end":return e.stop()}}),e,null,[[1,19],[7,14]])})));return function(t){return e.apply(this,arguments)}}();(0,f.useEffect)((function(){o&&G&&fe&&function(e,t,a,r){var l=Object.values(e),n=(0,y.yG)();delete n.tags,Array.isArray(n.sort)?null!=l&&l.includes(n.sort[0])&&null!=l&&l.includes("-".concat(n.sort[0]))||(n.sort="-total_risk"):null!=l&&l.includes(n.sort)||(n.sort="-total_risk"),void 0===n.text?t(""):t(n.text),void 0!==n.has_playbook&&!Array.isArray(n.has_playbook)&&(n.has_playbook=["".concat(n.has_playbook)]),void 0!==n.incident&&!Array.isArray(n.incident)&&(n.incident=["".concat(n.incident)]),void 0===n.offset?n.offset=0:n.offset=Number(n.offset[0]),void 0===n.limit?n.limit=20:n.limit=Number(n.limit[0]),void 0!==n.reboot&&!Array.isArray(n.reboot)&&(n.reboot=["".concat(n.reboot)]),void 0!==n.impacting&&!Array.isArray(n.impacting)&&(n.impacting=["".concat(n.impacting)]),a(te(te({},r),n))}(Ye,ye,Re,$),de(!1)}),[]),(0,f.useEffect)((function(){var e,t=null===(e=Object.entries(Ye))||void 0===e?void 0:e.find((function(e){return e[1]===$.sort||"-".concat(e[1])===$.sort}));if(void 0!==$.sort&&t){var a="-"===$.sort[0]?"desc":"asc";ce({index:Number(t[0]),direction:a})}}),[$.sort]),(0,f.useEffect)((function(){if(ze.data)if(0===ze.data.length)ne(function(e,t){return[{cells:[{title:d().createElement(X,{filters:e,toggleRulesDisabled:t}),props:{colSpan:6}}]}]}($,$e));else{var e=ze.data.flatMap((function(e,t){return[{isOpen:Ne,rule:e,cells:[{title:d().createElement("span",{key:t},d().createElement(u.Link,{key:t,to:"/recommendations/".concat(e.rule_id)}," ",e.description," "),d().createElement(w.Z,{rule:e,isCompact:!0}))},{title:d().createElement(E.Z,{key:t,date:e.publish_date,variant:"relative"})},{title:d().createElement(P.Z,{key:t,labelList:[e.category],isCompact:!0})},{title:d().createElement("div",{key:t},d().createElement(g.Tooltip,{key:t,position:g.TooltipPosition.bottom,content:L.formatMessage(N.Z.rulesDetailsTotalRiskBody,{risk:c.Nq[e.total_risk]||L.formatMessage(N.Z.undefined),strong:function(e){return(0,F.fK)(e)}})},d().createElement(S.Z,{value:e.total_risk,isCompact:!0})))},{title:"rhdisabled"===e.rule_status?d().createElement(g.Tooltip,{content:L.formatMessage(N.Z.byEnabling,{systems:e.impacted_systems_count})},d().createElement("span",null,L.formatMessage(N.Z.nA))):d().createElement("div",{key:t},"".concat(e.impacted_systems_count.toLocaleString()))},{title:d().createElement("div",{className:"ins-c-center-text ",key:t},e.playbook_count?d().createElement("span",null,d().createElement(k.ZP,{size:"sm"})," ",L.formatMessage(N.Z.playbook)):L.formatMessage(N.Z.manual))}]},{parent:2*t,fullWidth:!0,cells:[{title:d().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section"},d().createElement(p.Stack,{hasGutter:!0},e.hosts_acked_count?d().createElement(p.StackItem,null,d().createElement(h.ZP,{size:"sm"})," ",e.hosts_acked_count&&!e.impacted_systems_count?L.formatMessage(N.Z.ruleIsDisabledForAllSystems):L.formatMessage(N.Z.ruleIsDisabledForSystemsBody,{systems:e.hosts_acked_count})," "," ",d().createElement(_.Button,{isInline:!0,variant:"link",ouiaId:"viewSystem",onClick:function(){je(e),Me(!0)}},L.formatMessage(N.Z.viewSystems))):d().createElement(d().Fragment,null),d().createElement(C.Ii,{messages:(0,F.k5)(L,C.TO,(0,F.jL)(L,e)),product:C.D1.rhel,rule:e,resolutionRisk:(0,y.EW)(e),resolutionRiskDesc:c.wY[(0,y.EW)(e)],isDetailsPage:!1,showViewAffected:!0,linkComponent:u.Link,knowledgebaseUrl:e.node_id?"https://access.redhat.com/node/".concat(e.node_id):""})))}]}]}));ne(e)}}),[ze]),(0,f.useEffect)((function(){if(!fe&&!He){var e=le({},$),t=ge.length?{text:ge}:{};delete e.text,Re(le(le(le({},e),t),{},{offset:0}))}}),[Ke]);var et,tt=function(e){var t=le(le({},$),{},{offset:0});"text"===e&&ye(""),delete t[e],Re(t)},at=function(e,t){t.length>0?Re(le(le({},$),{},{offset:0},(0,n.Z)({},e,t))):tt(e)},rt=[{label:L.formatMessage(N.Z.name).toLowerCase(),filterValues:{key:"text-filter",onChange:function(e,t){return ye(t)},value:ge,placeholder:L.formatMessage(N.Z.filterBy)}},{label:c.W2.total_risk.title,type:c.W2.total_risk.type,id:c.W2.total_risk.urlParam,value:"checkbox-".concat(c.W2.total_risk.urlParam),filterValues:{key:"".concat(c.W2.total_risk.urlParam,"-filter"),onChange:function(e,t){return at(c.W2.total_risk.urlParam,t)},value:$.total_risk,items:c.W2.total_risk.values}},{label:c.W2.res_risk.title,type:c.W2.res_risk.type,id:c.W2.res_risk.urlParam,value:"checkbox-".concat(c.W2.res_risk.urlParam),filterValues:{key:"".concat(c.W2.res_risk.urlParam,"-filter"),onChange:function(e,t){return at(c.W2.res_risk.urlParam,t)},value:$.res_risk,items:c.W2.res_risk.values}},{label:c.W2.impact.title,type:c.W2.impact.type,id:c.W2.impact.urlParam,value:"checkbox-".concat(c.W2.impact.urlParam),filterValues:{key:"".concat(c.W2.impact.urlParam,"-filter"),onChange:function(e,t){return at(c.W2.impact.urlParam,t)},value:$.impact,items:c.W2.impact.values}},{label:c.W2.likelihood.title,type:c.W2.likelihood.type,id:c.W2.likelihood.urlParam,value:"checkbox-".concat(c.W2.likelihood.urlParam),filterValues:{key:"".concat(c.W2.likelihood.urlParam,"-filter"),onChange:function(e,t){return at(c.W2.likelihood.urlParam,t)},value:$.likelihood,items:c.W2.likelihood.values}},{label:c.W2.category.title,type:c.W2.category.type,id:c.W2.category.urlParam,value:"checkbox-".concat(c.W2.category.urlParam),filterValues:{key:"".concat(c.W2.category.urlParam,"-filter"),onChange:function(e,t){return at(c.W2.category.urlParam,t)},value:$.category,items:c.W2.category.values}},{label:c.W2.incident.title,type:c.W2.incident.type,id:c.W2.incident.urlParam,value:"checkbox-".concat(c.W2.incident.urlParam),filterValues:{key:"".concat(c.W2.incident.urlParam,"-filter"),onChange:function(e,t){return at(c.W2.incident.urlParam,t)},value:$.incident,items:c.W2.incident.values}},{label:c.W2.has_playbook.title,type:c.W2.has_playbook.type,id:c.W2.has_playbook.urlParam,value:"checkbox-".concat(c.W2.has_playbook.urlParam),filterValues:{key:"".concat(c.W2.has_playbook.urlParam,"-filter"),onChange:function(e,t){return at(c.W2.has_playbook.urlParam,t)},value:$.has_playbook,items:c.W2.has_playbook.values}},{label:c.W2.reboot.title,type:c.W2.reboot.type,id:c.W2.reboot.urlParam,value:"checkbox-".concat(c.W2.reboot.urlParam),filterValues:{key:"".concat(c.W2.reboot.urlParam,"-filter"),onChange:function(e,t){return at(c.W2.reboot.urlParam,t)},value:$.reboot,items:c.W2.reboot.values}},{label:c.W2.rule_status.title,type:c.W2.rule_status.type,id:c.W2.rule_status.urlParam,value:"radio-".concat(c.W2.rule_status.urlParam),filterValues:{key:"".concat(c.W2.rule_status.urlParam,"-filter"),onChange:function(e,t){return $e(t)},value:"".concat($.rule_status),items:c.W2.rule_status.values}},{label:c.W2.impacting.title,type:c.W2.impacting.type,id:c.W2.impacting.urlParam,value:"checkbox-".concat(c.W2.impacting.urlParam),filterValues:{key:"".concat(c.W2.impacting.urlParam,"-filter"),onChange:function(e,t){return at(c.W2.impacting.urlParam,t)},value:$.impacting,items:c.W2.impacting.values}}],lt={deleteTitle:L.formatMessage(N.Z.resetFilters),filters:(et=le({},$),delete et.topic,delete et.sort,delete et.offset,delete et.limit,(0,y.yK)(et,c.W2)),showDeleteButton:!0,onDelete:function(e,t,a){a?(ye(""),Re(le(le({},$.topic&&{topic:$.topic}),{},{impacting:["true"],rule_status:"enabled",limit:$.limit,offset:$.offset,pathway:$.pathway}))):t.map((function(e){var t=(0,n.Z)({},e.urlParam,Array.isArray($[e.urlParam])?$[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?Re(le(le({},$),t)):tt(e.urlParam)}))}};return d().createElement(d().Fragment,null,xe&&d().createElement(T.Z,{handleModalToggle:function(e){return Me(e)},isModalOpen:xe,afterFn:function(){qe()},rule:Te}),he&&d().createElement(Z.Z,{handleModalToggle:_e,isModalOpen:he,rule:We,afterFn:qe}),d().createElement(M.Z,{expandAll:{isAllExpanded:Ne,onClick:function(e,t){var a=(0,l.Z)(re);Fe(t),a.map((function(e,r){Object.prototype.hasOwnProperty.call(e,"isOpen")&&(a[r]=le(le({},e),{},{isOpen:t}))})),ne(a)}},pagination:{itemCount:Qe,page:$.offset/$.limit+1,perPage:Number($.limit),onSetPage:function(e,t){Je(t)},onPerPageSelect:function(e,t){Re(le(le({},$),{},{limit:t,offset:0}))},isCompact:!0},exportConfig:(a={label:L.formatMessage(N.Z.exportCsv)},(0,n.Z)(a,"label",L.formatMessage(N.Z.exportJson)),(0,n.Z)(a,"onSelect",(function(e,t){return(0,D.Z)("hits",t,$,Q,Y,J,z)})),(0,n.Z)(a,"isDisabled",!H),(0,n.Z)(a,"tooltipText",H?L.formatMessage(N.Z.exportData):L.formatMessage(N.Z.permsAction)),a),filterConfig:{items:rt},activeFiltersConfig:lt}),Ge?d().createElement(x.Z,null):Ue?d().createElement(b.Table,null,d().createElement(O.Z,null)):d().createElement(b.Table,{"aria-label":"rule-table",variant:b.TableVariant.compact,actionResolver:function(e,t){var a=t.rowIndex,r=re[a].rule?re[a].rule:null;return a%2==0&&r?r&&"enabled"===r.rule_status?[{title:L.formatMessage(N.Z.disableRule),onClick:function(e,t){return Xe(t)}}]:[{title:L.formatMessage(N.Z.enableRule),onClick:function(e,t){return Xe(t)}}]:null},onCollapse:function(e,t,a){var r=(0,l.Z)(re);r[t]=le(le({},r[t]),{},{isOpen:a}),ne(r)},sortBy:se,onSort:function(e,t,a){var r="".concat("asc"===a?"":"-").concat(Ye[t]);ce({index:t,direction:a}),Re(le(le({},$),{},{sort:r,offset:0}))},cells:K,rows:re,areActionsDisabled:function(){return!U},isStickyHeader:!0},d().createElement(b.TableHeader,null),d().createElement(b.TableBody,null)),d().createElement(m.tl,{ouiaId:"page",itemCount:Qe,page:$.offset/$.limit+1,perPage:Number($.limit),onSetPage:function(e,t){Je(t)},onPerPageSelect:function(e,t){Re(le(le({},$),{},{limit:t,offset:0}))},widgetId:"pagination-options-menu-bottom",variant:m.aM.bottom}))};ne.propTypes={isTabActive:z().bool};const ie=ne},40609:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var r=a(70885),l=a(93264);const n=function(e,t){var a=(0,l.useState)(e),n=(0,r.Z)(a,2),i=n[0],o=n[1];return(0,l.useEffect)((function(){var a=setTimeout((function(){o(e)}),t);return function(){clearTimeout(a)}}),[t,e]),i}},28992:()=>{},93398:()=>{},46928:()=>{},53519:()=>{}}]);