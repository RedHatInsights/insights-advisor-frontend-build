(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[910],{15910:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>j});var r=n(81253),a=n(92137),l=n(96156),o=n(85061),i=n(28481),s=n(87757),c=n.n(s),u=n(10538),m=n(59303),d=n(25136),f=n(86896),p=n(29558),h=n(93264),E=n.n(h),g=n(9942),y=n(88931),b=n(71094),_=n(62410),k=n(78216),v=n(24561),I=n(34702),C=n(57277),T=n(45697),S=n.n(T),R=n(84914),O=n(33033),Z=n(71355),A=n(97109),L=n(30893),P=["customItnl","intlProps"];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=function(){var e=(0,f.Z)(),t=(0,y.useDispatch)(),n=(0,y.useSelector)((function(e){return e.entityDetails.entity})),r=(0,y.useSelector)((function(e){var t=e.systemProfileStore;return t?t.systemProfile:{}})),s=(0,y.useSelector)((function(e){return e.routerData})),p=(0,h.useState)("pending"),T=(0,i.Z)(p,2),S=T[0],P=T[1],w=(0,h.useState)([]),G=(0,i.Z)(w,2),x=G[0],j=G[1],D=(0,h.useState)([]),B=(0,i.Z)(D,2),N=B[0],M=B[1],H=(0,h.useState)([]),V=(0,i.Z)(H,2),K=V[0],U=V[1],z=(0,h.useState)({}),W=(0,i.Z)(z,2),q=W[0],$=W[1],J=(0,h.useState)({}),Q=(0,i.Z)(J,2),X=Q[0],Y=Q[1],ee=(0,h.useState)({}),te=(0,i.Z)(ee,2),ne=te[0],re=te[1],ae=(0,h.useState)(""),le=(0,i.Z)(ae,2),oe=le[0],ie=le[1],se=(0,h.useState)(!1),ce=(0,i.Z)(se,2),ue=ce[0],me=ce[1],de=x?x.length/2:0,fe=r&&r.satellite_managed||!1,pe=!ne.show_satellite_hosts&&fe,he=function(e){return e.filter((function(e){return e.selected}))},Ee=he(x).filter((function(e){return e.resolution&&e.resolution.has_playbook})),ge=he(x).length,ye=x.filter((function(e){return e.resolution&&e.resolution.has_playbook})).length,be=[{title:e.formatMessage(L.Z.topicAddEditDescription),transforms:[g.sortable]},{title:e.formatMessage(L.Z.added),transforms:[g.sortable,(0,g.cellWidth)(15)]},{title:e.formatMessage(L.Z.totalRisk),transforms:[g.sortable]},{title:E().createElement("span",null,u.AnsibeTowerIcon&&E().createElement(u.AnsibeTowerIcon,{size:"md"})," ",e.formatMessage(L.Z.ansible)),transforms:[g.sortable,g.fitContent],dataLabel:e.formatMessage(L.Z.ansible)}],_e=function(e){var t="insights-expand-all"===e,n=(0,o.Z)(x);n.map((function(e,n){Object.prototype.hasOwnProperty.call(e,"isOpen")&&(e.isOpen=t,t&&Ie(null,n,t))})),j(n)},ke=[E().createElement(R.Z,{key:"remediation-button",isDisabled:0===Ee.length,dataProvider:function(){return Ae(Ee)},onRemediationCreated:function(e){return n=e.getNotification(),t((0,Z.wN)(n));var n}},u.AnsibeTowerIcon&&E().createElement(u.AnsibeTowerIcon,{size:"sm",className:"ins-c-background__default"})," ","Remediate"),{label:"Collapse all",onClick:function(){return _e("insights-collapse-all")}},{label:"Expand all",onClick:function(){return _e("insights-expand-all")}}],ve=function(e){var t=(0,o.Z)(e),n=s&&void 0!==s.params?e.findIndex((function(e){return e.rule.rule_id===s.params.id})):-1,r=t.splice(n,1);return-1!==n?[r[0]].concat((0,o.Z)(t)):e},Ie=function(e,t,n){var r=(0,o.Z)(x);r[t]=F(F({},r[t]),{},{isOpen:n}),j(r)},Ce=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",l=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=e.flatMap((function(e,o){var i=e.rule,s=e.resolution,c=Object.keys(t).length?t.filter((function(t){return t.id===e.rule.node_id}))[0]:{},f=r.filter((function(e,t){return t%2==0&&e.rule.rule_id===i.rule_id&&e})),p=!!f.length&&f[0].selected,h=r.length?!!f.length&&f[0].isOpen:0===o,g=[{rule:i,resolution:s,isOpen:h,selected:p,disableSelection:!s.has_playbook,cells:[{title:E().createElement("div",null," ",i.description)},{title:E().createElement("div",{key:o},E().createElement(_.Z,{date:i.publish_date,type:"relative",tooltipProps:{position:d.TooltipPosition.bottom}}))},{title:E().createElement("div",{key:o,style:{verticalAlign:"top"}},E().createElement(d.Tooltip,{key:o,position:d.TooltipPosition.bottom,content:E().createElement("span",null,"The ",E().createElement("strong",null,"likelihood")," that this will be a problem is ",m.LIKELIHOOD_LABEL[i.likelihood],". The"," ",E().createElement("strong",null,"impact")," of the problem would be  ",m.IMPACT_LABEL[i.impact.impact]," if it occurred.")},E().createElement(k.Z,{value:i.total_risk})))},{title:E().createElement("div",{className:"ins-c-center-text",key:o},s.has_playbook?E().createElement(u.CheckCircleIcon,{className:"successColorOverride"}):"No")}]},{parent:o,fullWidth:!0,cells:[{title:E().createElement(O.default,{key:"child-".concat(o),report:e,kbaDetail:c,kbaLoading:l})}]}],y=0===a.length||i.description.toLowerCase().includes(a.toLowerCase()),b=0===Object.keys(n).length||Object.keys(n).map((function(t){var r=n[t],a={has_playbook:e.resolution.has_playbook,publish_date:i.publish_date,total_risk:i.total_risk,category:m.RULE_CATEGORIES[i.category.name.toLowerCase()]};return r.find((function(e){return String(e)===String(a[t])}))})).every((function(e){return e}));return y&&b?g:[]}));return o.forEach((function(e,t){return e.parent?e.parent=t-1:null})),o},Te=function(e){me(e),j(Ce(N,K,X,x.map((function(t,n){return n%2==0&&t.resolution.has_playbook?F(F({},t),{},{selected:e}):t})),oe))},Se={items:[{title:"Select none",onClick:function(){return Te(!1)}},{title:"Select all",onClick:function(){return Te(!0)}}],count:ge,checked:ge===ye,onSelect:function(){return Te(!ue)}},Re={deleteTitle:e.formatMessage(L.Z.resetFilters),filters:function(e){var t=Object.entries(e),n=e&&t.length>0?t.map((function(e){var t=m.FILTER_CATEGORIES[e[0]],n=e[1].map((function(e){return{name:t.values.find((function(t){return t.value===String(e)})).label,value:e}}));return{category:(0,A.kC)(t.title),chips:n,urlParam:t.urlParam}})):[];return oe.length>0&&n.push({category:"Description",chips:[{name:oe,value:oe}]}),n}(X),onDelete:function(e,t,n){n?(j(Ce(N,K,{},x,"")),Y({}),ie("")):t.map((function(e){"Description"===e.category?(j(Ce(N,K,X,x,"")),ie("")):Ze(e.urlParam,X[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})))}))}},Oe=function(){var e=(0,a.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return e.rule.node_id})).filter((function(e){return e})),e.prev=1,e.next=4,b.Z.get("https://access.redhat.com/hydra/rest/search/kcs?q=id:(".concat(n.join(" OR "),")&fl=view_uri,id,publishedTitle&rows=").concat(n.length,"&redhat_client=$ADVISOR"),{},{credentials:"include"});case 4:r=e.sent.data.response.docs,U(r),j(Ce(t,r,X,x,oe)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0,"KBA fetch failed.");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),Ze=function(e,t){var n=t.length>0?F(F({},X),(0,l.Z)({},e,t)):function(e){var t=F({},X);return delete t[e],t}(e);j(Ce(N,K,n,x,oe)),Y(n)},Ae=function(e){var t=e.filter((function(e){return e.resolution&&e.resolution.has_playbook})).map((function(e){return{id:"advisor:".concat(e.rule.rule_id),description:e.rule.description}}));return!!t.length&&{issues:t,systems:[n.id]}},Le=[{label:"description",filterValues:{key:"text-filter",onChange:function(e,t){return function(e){var t=Ce(N,K,X,x,e);ie(e),j(t)}(t)},value:oe}},{label:m.FILTER_CATEGORIES.total_risk.title,type:m.FILTER_CATEGORIES.total_risk.type,id:m.FILTER_CATEGORIES.total_risk.urlParam,value:"checkbox-".concat(m.FILTER_CATEGORIES.total_risk.urlParam),filterValues:{key:"".concat(m.FILTER_CATEGORIES.total_risk.urlParam,"-filter"),onChange:function(e,t){return Ze(m.FILTER_CATEGORIES.total_risk.urlParam,t)},value:X.total_risk,items:m.FILTER_CATEGORIES.total_risk.values}},{label:m.FILTER_CATEGORIES.category.title,type:m.FILTER_CATEGORIES.category.type,id:m.FILTER_CATEGORIES.category.urlParam,value:"checkbox-".concat(m.FILTER_CATEGORIES.category.urlParam),filterValues:{key:"".concat(m.FILTER_CATEGORIES.category.urlParam,"-filter"),onChange:function(e,t){return Ze(m.FILTER_CATEGORIES.category.urlParam,t)},value:X.category,items:m.FILTER_CATEGORIES.category.values}},{label:m.FILTER_CATEGORIES.has_playbook.title,type:m.FILTER_CATEGORIES.has_playbook.type,id:m.FILTER_CATEGORIES.has_playbook.urlParam,value:"checkbox-".concat(m.FILTER_CATEGORIES.has_playbook.urlParam),filterValues:{key:"".concat(m.FILTER_CATEGORIES.has_playbook.urlParam,"-filter"),onChange:function(e,t){return Ze(m.FILTER_CATEGORIES.has_playbook.urlParam,t)},value:X.has_playbook,items:m.FILTER_CATEGORIES.has_playbook.values}}];return(0,h.useEffect)((function(){!function(){var e=(0,a.Z)(c().mark((function e(){var t,r,a,l,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=Promise,e.next=4,b.Z.get("".concat(m.BASE_URL,"/account_setting/"),{credentials:"include"});case 4:return e.t1=e.sent.data,e.next=7,b.Z.get("".concat(m.BASE_URL,"/system/").concat(n.id,"/reports/"),{credentials:"include"});case 7:return e.t2=e.sent.data,e.t3=[e.t1,e.t2],e.next=11,e.t0.all.call(e.t0,e.t3);case 11:t=e.sent,r=(0,i.Z)(t,2),a=r[0],l=r[1],o=ve(l),Oe(o),j(Ce(o,{},X,x,oe,!0)),P("fulfilled"),M(o),re(a),e.next=26;break;case 23:e.prev=23,e.t4=e.catch(0),P("failed");case 26:case"end":return e.stop()}}),e,null,[[0,23]])})));return function(){return e.apply(this,arguments)}}()()}),[]),E().createElement("div",{className:"ins-c-inventory-insights__overrides"},"pending"===S||"fulfilled"===S&&pe||null===n.insights_id?E().createElement(h.Fragment,null):E().createElement(C.Z,{actionsConfig:{actions:ke},bulkSelect:Se,filterConfig:{items:Le},pagination:E().createElement(E().Fragment,null," ","".concat(de,1===de?" Recommendation":" Recommendations")," "),activeFiltersConfig:Re}),"pending"===S&&E().createElement(d.Card,null,E().createElement(d.CardBody,null,E().createElement(v.aV,null))),"fulfilled"===S&&(pe?E().createElement(I.Z,{icon:u.PficonSatelliteIcon,title:"Satellite managed system",text:E().createElement("span",{key:"satellite managed system"},'Insights results can not be displayed for this host, as the "Hide Satellite Managed Systems" setting has been enabled by an org admin.',E().createElement("br",null),"For more information on this setting and how to modify it,",E().createElement("a",{href:"https://access.redhat.com/solutions/4281761",rel:"noopener"}," ","Please visit this Knowledgebase article  ",E().createElement(u.ExternalLinkAltIcon,null)),".")}):N.length>0?E().createElement(h.Fragment,null,E().createElement(g.Table,{"aria-label":"report-table",onSelect:function(e,t,n){return j(Ce(N,K,X,x.map((function(e,r){return r===n?F(F({},e),{},{selected:t}):e})),oe))},onCollapse:Ie,rows:x,cells:be,sortBy:q,canSelectAll:!1,onSort:function(e,t,n){var r={1:"description",2:"publish_date",3:"total_risk",4:"has_playbook"},a=5===t?"resolution":"rule",l=function(e){return N.concat().sort((function(n,a){return n[e][r[t]]>a[e][r[t]]?1:a[e][r[t]]>n[e][r[t]]?-1:0}))},o=n===g.SortByDirection.asc?l(a):l(a).reverse();M(o),$({index:t,direction:n}),j(Ce(o,K,X,x,oe))},isStickyHeader:!0},E().createElement(g.TableHeader,null),E().createElement(g.TableBody,null)),0===de&&E().createElement(d.Card,null,E().createElement(d.CardBody,null,E().createElement(I.Z,{title:"No matching recommendations found",text:"This filter criteria matches no recommendations. Try changing your filter settings."})))):null!==n.insights_id?E().createElement(d.Card,null,E().createElement(d.CardBody,null,E().createElement(I.Z,{icon:u.CheckIcon,iconClass:"ins-c-insights__check",title:"No recommendations",text:"No known recommendations affect this system"}))):E().createElement(I.Z,{iconClass:"chartSpikeIconColor",icon:u.ChartSpikeIcon,title:"Get started with Red Hat Insights",text:E().createElement(d.Bullseye,null,E().createElement(d.Stack,{hasGutter:!0},E().createElement(d.StackItem,null,"1. Install the client on the RHEL system.",E().createElement(d.ClipboardCopy,null,"yum install insights-client")),E().createElement(d.StackItem,null,"2. Register the system to Red Hat Insights.",E().createElement(d.ClipboardCopy,null,"insights-client --register"))))},E().createElement(d.Button,{component:"a",href:"https://access.redhat.com/products/red-hat-insights#getstarted",target:"_blank",variant:"primary"},"Getting started documentation"))),"failed"===S&&n&&E().createElement(d.Card,null,E().createElement(d.CardBody,null,E().createElement(I.Z,{icon:u.TimesCircleIcon,title:"Error getting recommendations",text:n?"There was an error fetching recommendations for this entity. Refresh your page to try again.":"This entity can not be found or might no longer be registered to Red Hat Insights."}))))},x=function(e){var t=e.customItnl,n=e.intlProps,a=(0,r.Z)(e,P),l=t?p.Z:h.Fragment;return E().createElement(l,t&&F({locale:navigator.language.slice(0,2),messages:L.Z,onError:console.log},n),E().createElement(G,a))};const j=x;x.propTypes={customItnl:S().bool,intlProps:S().shape({locale:S().string,messages:S().array,onError:S().func})}}}]);
//# sourceMappingURL=../sourcemaps/910.e20d40461acdd3c07bbf.js.map