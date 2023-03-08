(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[7343],{87516:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(76004),o=n(23218),a=n(45697),i=n.n(a),l=n(93264),c=n.n(l),s=n(30893),u=n(86896),d=function(e){var t,n=e.rule,a=e.isCompact,i=e.noMargin,l=(0,u.Z)();return c().createElement(c().Fragment,null,-1!==(null==n||null===(t=n.tags)||void 0===t?void 0:t.search("incident"))&&c().createElement(r.Tooltip,{content:l.formatMessage(s.Z.incidentTooltip),position:r.TooltipPosition.right},c().createElement(o.Label,{color:"red",className:i?null:"adv-c-label-incident",isCompact:a},l.formatMessage(s.Z.incident))),"disabled"===(null==n?void 0:n.rule_status)&&c().createElement(r.Tooltip,{content:l.formatMessage(s.Z.ruleIsDisabledTooltip),position:r.TooltipPosition.right},c().createElement(o.Label,{color:"gray",isCompact:a},l.formatMessage(s.Z.disabled))),"rhdisabled"===(null==n?void 0:n.rule_status)&&c().createElement(r.Tooltip,{content:l.formatMessage(s.Z.ruleIsDisabledTooltip),position:r.TooltipPosition.right},c().createElement(o.Label,{color:"gray",isCompact:a},l.formatMessage(s.Z.redhatDisabled))))};d.propTypes={rule:i().object,isCompact:i().bool,noMargin:i().bool},d.defaultProps={isCompact:!0};const p=d},47197:(e,t,n)=>{"use strict";n.d(t,{Z:()=>z});var r=n(87462),o=n(15861),a=n(4942),i=n(42982),l=n(70885),c=n(87757),s=n.n(c),u=n(59303),d=n(22938),p=n(86896),f=n(93264),m=n.n(f),h=n(17855),g=n(28216),y=n(71094),b=n(24561),v=n(7887),k=n(45697),E=n.n(k),_=n(98132),Z=n(71355),C=n(97109),O=n(30893),P=n(87135),w=n(27361),S=n.n(w),T=n(16712),j=n(90693),D=n(62410),x=n(87516),M=n(27330),W=n(52017),I=n(34702),R=function(){return m().createElement(d.Bullseye,null,m().createElement(I.Z,{title:"No matching recommendations found",text:"To continue, edit your filter settings and search again."}))},B=function(){return m().createElement(d.Bullseye,null,m().createElement(I.Z,{icon:W.CheckIcon,iconClass:"ins-c-insights__check",title:"No recommendations",text:"No known recommendations affect this system"}))},A=function(){return m().createElement(I.Z,{iconClass:"chartSpikeIconColor",icon:W.ChartSpikeIcon,title:"Get started with Red Hat Insights",text:m().createElement(d.Bullseye,null,m().createElement(d.Stack,{hasGutter:!0},m().createElement(d.StackItem,null,"1. Install the client on the RHEL system.",m().createElement(d.ClipboardCopy,null,"yum install insights-client")),m().createElement(d.StackItem,null,"2. Register the system to Red Hat Insights.",m().createElement(d.ClipboardCopy,null,"insights-client --register"))))},m().createElement(d.Button,{component:"a",href:"https://access.redhat.com/products/red-hat-insights#getstarted",target:"_blank",variant:"primary"},"Getting started documentation"))},L=function(e){var t=e.entity;return m().createElement(d.Bullseye,null,m().createElement(I.Z,{icon:W.TimesCircleIcon,title:"Error getting recommendations",text:t?"There was an error fetching recommendations for this entity. Refresh your page to try again.":"This entity can not be found or might no longer be registered to Red Hat Insights."}))};L.propTypes={entity:E().object};var N=n(75662);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q=function(e){var t=e.entity,n=e.inventoryId,r=(0,p.Z)(),c=(0,f.useRef)({rowCount:0}),k=(0,g.useDispatch)(),E=function(e){return k((0,Z.addNotification)(e))},w=(0,g.useSelector)((function(e){return e.routerData})),W=(0,f.useState)("pending"),I=(0,l.Z)(W,2),V=I[0],H=I[1],q=(0,f.useState)([]),z=(0,l.Z)(q,2),X=z[0],K=z[1],$=(0,f.useState)([]),J=(0,l.Z)($,2),Q=J[0],U=J[1],Y=(0,f.useState)([]),ee=(0,l.Z)(Y,2),te=ee[0],ne=ee[1],re=(0,f.useState)({}),oe=(0,l.Z)(re,2),ae=oe[0],ie=oe[1],le=(0,f.useState)({}),ce=(0,l.Z)(le,2),se=ce[0],ue=ce[1],de=(0,f.useState)(""),pe=(0,l.Z)(de,2),fe=pe[0],me=pe[1],he=(0,f.useState)(!1),ge=(0,l.Z)(he,2),ye=ge[0],be=ge[1],ve=(0,f.useState)(!1),ke=(0,l.Z)(ve,2),Ee=ke[0],_e=ke[1],Ze=function(e){return e.filter((function(e){return e.selected}))},Ce=Ze(X).filter((function(e){var t;return null===(t=e.resolution)||void 0===t?void 0:t.has_playbook})),Oe=Ze(X).length,Pe=X.filter((function(e){var t;return null===(t=e.resolution)||void 0===t?void 0:t.has_playbook})).length,we=function(e){return[{title:e.formatMessage(O.Z.topicAddEditDescription),transforms:[h.sortable]},{title:e.formatMessage(O.Z.modified),transforms:[h.sortable,h.fitContent]},{title:e.formatMessage(O.Z.firstImpacted),transforms:[h.sortable,h.fitContent]},{title:e.formatMessage(O.Z.totalRisk),transforms:[h.sortable,h.fitContent]},{title:e.formatMessage(O.Z.remediation),transforms:[h.sortable,h.fitContent]}]}(r),Se=[m().createElement(_.Z,{key:"remediation-button",isDisabled:0===Ce.length,dataProvider:function(){return Re(Ce)},onRemediationCreated:function(e){return function(e){De(!1);try{e.remediation&&E(e.getNotification())}catch(e){E({variant:"danger",dismissable:!0,title:r.formatMessage(O.Z.error),description:"".concat(e)})}}(e)}},r.formatMessage(O.Z.remediate))],Te=function(e){var t=(0,i.Z)(e),n=w&&void 0!==w.params?e.findIndex((function(e){return e.rule.rule_id===w.params.id})):-1,r=t.splice(n,1);return-1!==n?[r[0]].concat((0,i.Z)(t)):e},je=function(e,t,n,r){var o,a=null===(o=(0,N.useLocation)().pathname)||void 0===o?void 0:o.split("/");return(0,f.useCallback)((function(o,i,l,c){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",p=arguments.length>5&&void 0!==arguments[5]&&arguments[5],f=arguments.length>6&&void 0!==arguments[6]&&arguments[6],h=o,g=window.location.href.indexOf("activeRule")>-1;if(g&&f){var y=a[2];h.sort((function(e,t){return e.rule.rule_id===y?-1:t.rule.rule_id===y?1:0}))}else f&&h.sort((function(e,t){return e.rule.total_risk>t.rule.total_risk?-1:t.rule.total_risk>e.rule.total_risk?1:0}));var b=h.flatMap((function(t,n){var r=t.rule,o=t.resolution,a=Object.keys(i).length?i.filter((function(e){return e.id===t.rule.node_id}))[0]:{},h=c.find((function(e){var t;return(null==e||null===(t=e.rule)||void 0===t?void 0:t.rule_id)===r.rule_id})),y=null==h?void 0:h.selected,b=(null==h?void 0:h.isOpen)||g&&f&&0===n,v=[{rule:r,resolution:o,isOpen:o?b:void 0,selected:y,disableSelection:!o||!o.has_playbook,cells:[{title:m().createElement("span",null,r.description," ",m().createElement(x.Z,{rule:r}))},{title:m().createElement("span",null,m().createElement(D.Z,{date:r.publish_date,type:"relative",tooltipProps:{position:d.TooltipPosition.bottom}}))},{title:m().createElement("div",{key:n},m().createElement(D.Z,{date:t.impacted_date,type:"relative",tooltipProps:{position:d.TooltipPosition.bottom}}))},{title:m().createElement("div",{key:n,style:{verticalAlign:"top"}},m().createElement(d.Tooltip,{key:n,position:d.TooltipPosition.bottom,content:m().createElement("span",null,"The ",m().createElement("strong",null,"likelihood")," that this will be a problem is ",u.FV[r.likelihood],". The"," ",m().createElement("strong",null,"impact")," of the problem would be  ",u.dz[r.impact.impact]," if it occurred.")},m().createElement(j.Z,{value:r.total_risk,isCompact:!0})))},{title:m().createElement("div",{className:"ins-c-center-text",key:n},null===o?e.formatMessage(O.Z.notAvailable):null!=o&&o.has_playbook?m().createElement("span",null,m().createElement(T.ZP,{size:"sm"})," ",e.formatMessage(O.Z.playbook)):e.formatMessage(O.Z.manual))}]},o&&{parent:n,fullWidth:!0,cells:[{title:m().createElement(M.G,{key:"child-".concat(n),report:F(F({},t),{},{resolution:t.resolution.resolution}),kbaDetail:a,kbaLoading:p})}]}],k=0===s.length||r.description.toLowerCase().includes(s.toLowerCase()),E=0===Object.keys(l).length||Object.keys(l).map((function(e){var n,o=l[e],a={has_playbook:null===(n=t.resolution)||void 0===n?void 0:n.has_playbook,publish_date:r.publish_date,total_risk:r.total_risk,category:u.kT[r.category.name.toLowerCase()]};return o.find((function(t){return String(t)===String(a[e])}))})).every((function(e){return e}));return k&&E?v.filter((function(e){return null!==e})):[]}));if(b.forEach((function(e,t){return e.parent?e.parent=t-1:null})),t.current.rowCount=o.length,o.length<1||b.length<1){var v=0===b.length&&R||(null==n?void 0:n.insights_id)&&B||A;return[{heightAuto:!0,cells:[{props:{colSpan:5},title:m().createElement(v,null)}]}]}return"failed"===r?[{heightAuto:!0,cells:[{props:{colSpan:5},title:m().createElement(L,{entity:n})}]}]:b}),[n,r])}(r,c,t,V),De=function(e){be(e),K(je(Q,te,se,X.map((function(t,n){return n%2==0&&t.resolution.has_playbook?G(G({},t),{},{selected:e}):t})),fe))},xe={items:[{title:"Select none",onClick:function(){return De(!1)}},{title:"Select all",onClick:function(){return De(!0)}}],count:Oe,checked:Oe===c.current.rowCount?1:Oe>0||Pe!==c.current.rowCount?null:0,onSelect:function(){return De(!ye)}},Me={deleteTitle:r.formatMessage(O.Z.resetFilters),filters:function(e){var t=Object.entries(e),n=e&&t.length>0?t.map((function(e){var t=u.W2[e[0]],n=e[1].map((function(e){return{name:t.values.find((function(t){return t.value===String(e)})).label,value:e}}));return{category:(0,C.kC)(t.title),chips:n,urlParam:t.urlParam}})):[];return fe.length>0&&n.push({category:"Description",chips:[{name:fe,value:fe}]}),n}(se),onDelete:function(e,t,n){n?(K(je(Q,te,{},X,"")),ue({}),me("")):t.map((function(e){"Description"===e.category?(K(je(Q,te,se,X,"")),me("")):Ie(e.urlParam,se[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})))}))}},We=function(){var e=(0,o.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return e.rule.node_id})).filter((function(e){return e})),e.prev=1,e.next=4,(0,y.dX)("https://access.redhat.com/hydra/rest/search/kcs?q=id:(".concat(n.join(" OR "),")&fl=view_uri,id,publishedTitle&redhat_client=$ADVISOR"),{},{credentials:"include"});case 4:r=e.sent.data.response.docs,ne(r),K(je(t,r,se,X,fe,!1,!0)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0,"KBA fetch failed.");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),Ie=function(e,t){var n=t.length>0?G(G({},se),(0,a.Z)({},e,t)):function(e){var t=G({},se);return delete t[e],t}(e);K(je(Q,te,n,X,fe)),ue(n)},Re=function(e){return(0,f.useCallback)((function(t){var n=t.filter((function(e){var t;return null===(t=e.resolution)||void 0===t?void 0:t.has_playbook})).map((function(e){return{id:"advisor:".concat(e.rule.rule_id),description:e.rule.description}}));return!!n.length&&{issues:n,systems:[e]}}),[e])}(n),Be=function(e,t,n,r){return[{label:"description",filterValues:{key:"text-filter",onChange:function(e,t){return n(t)},value:t}},{label:u.W2.total_risk.title,type:u.W2.total_risk.type,id:u.W2.total_risk.urlParam,value:"checkbox-".concat(u.W2.total_risk.urlParam),filterValues:{key:"".concat(u.W2.total_risk.urlParam,"-filter"),onChange:function(e,t){return r(u.W2.total_risk.urlParam,t)},value:e.total_risk,items:u.W2.total_risk.values}},{label:u.W2.category.title,type:u.W2.category.type,id:u.W2.category.urlParam,value:"checkbox-".concat(u.W2.category.urlParam),filterValues:{key:"".concat(u.W2.category.urlParam,"-filter"),onChange:function(e,t){return r(u.W2.category.urlParam,t)},value:e.category,items:u.W2.category.values}},{label:u.W2.has_playbook.title,type:u.W2.has_playbook.type,id:u.W2.has_playbook.urlParam,value:"checkbox-".concat(u.W2.has_playbook.urlParam),filterValues:{key:"".concat(u.W2.has_playbook.urlParam,"-filter"),onChange:function(e,t){return r(u.W2.has_playbook.urlParam,t)},value:e.has_playbook,items:u.W2.has_playbook.values}}]}(se,fe,(function(e){var t=je(Q,te,se,X,e);me(e),K(t)}),Ie);return(0,f.useEffect)((function(){var e=function(){var e=(0,o.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,y.dX)("".concat(u._n,"/system/").concat(n,"/reports/"),{credentials:"include"});case 3:t=e.sent,r=Te(t.data),We(r),K(je(r,{},se,X,fe,!0)),H("fulfilled"),U(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),H("failed");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),"fulfilled"===V&&null===(null==t?void 0:t.insights_id)?m().createElement(P.Z,{titleText:r.formatMessage(O.Z.notConnectedTitle),bodyText:r.formatMessage(O.Z.notConnectedBody),buttonText:r.formatMessage(O.Z.notConnectedButton)}):m().createElement("div",{className:"ins-c-inventory-insights__overrides"},"pending"===V||null===(null==t?void 0:t.insights_id)?m().createElement(f.Fragment,null):m().createElement(v.Z,{expandAll:{isAllExpanded:Ee,onClick:function(e,t){_e(t);var n=(0,i.Z)(X);n.map((function(e){Object.prototype.hasOwnProperty.call(e,"isOpen")&&(e.isOpen=t)})),K(n)}},actionsConfig:{actions:Se},bulkSelect:xe,filterConfig:{items:Be},pagination:m().createElement(f.Fragment,null," ","".concat(c.current.rowCount," ").concat(1===c.current.rowCount?"Recommendation":"Recommendations")," "),activeFiltersConfig:Me}),"pending"===V&&m().createElement(d.Card,null,m().createElement(d.CardBody,null,m().createElement(b.aV,null))),"fulfilled"===V&&m().createElement(f.Fragment,null,m().createElement(h.Table,{id:"system-advisor-report-table","aria-label":"report-table",onSelect:!(1===X.length&&X[0].heightAuto)&&function(e,t,n){return K(je(Q,te,se,X.map((function(e,r){return r===n?G(G({},e),{},{selected:t}):e})),fe))},onCollapse:function(e,t,n){var r=(0,i.Z)(X);r[t]=G(G({},r[t]),{},{isOpen:n}),K(r)},rows:X,cells:we,sortBy:ae,canSelectAll:!1,onSort:function(e,t,n){var r={2:"rule.description",3:"rule.publish_date",4:"impacted_date",5:"rule.total_risk",6:"resolution.has_playbook"},o=n===h.SortByDirection.asc?1:-1,a=Q.concat().sort((function(e,n){var a=S()(e,r[t]),i=S()(n,r[t]);return 3!==t&&4!==t||(a=new Date(a),i=new Date(i)),a>i?o:i>a?-o:0}));U(a),ie({index:t,direction:n}),K(je(a,te,se,X,fe))},variant:h.TableVariant.compact,isStickyHeader:!0},m().createElement(h.TableHeader,null),m().createElement(h.TableBody,null))))};q.propTypes={entity:E().shape({insights_id:E().string,id:E().string}),inventoryId:E().string.isRequired};const z=function(e){var t=(0,r.Z)({},e),n=(0,g.useSelector)((function(e){return e.entityDetails.entity}));return m().createElement(q,(0,r.Z)({},t,{entity:n}))}},11452:()=>{},34946:()=>{},21064:()=>{},82014:()=>{},66822:()=>{},49854:()=>{},87234:()=>{},22868:()=>{},14777:()=>{},99830:()=>{},70209:()=>{},87414:()=>{}}]);
//# sourceMappingURL=../sourcemaps/7343.a3f68dd7da005db50e442dc269322fa3.js.map