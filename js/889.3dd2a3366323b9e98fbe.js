(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[889,910,33],{33033:(e,t,n)=>{"use strict";n.d(t,{default:()=>r.Z});var r=n(42544)},15910:(e,t,n)=>{"use strict";n.d(t,{default:()=>j});var r=n(81253),a=n(92137),l=n(96156),o=n(85061),i=n(28481),s=n(87757),c=n.n(s),u=n(10538),m=n(59303),d=n(25136),f=n(86896),p=n(29558),E=n(93264),h=n.n(E),g=n(9942),y=n(88931),b=n(71094),_=n(62410),k=n(78216),v=n(24561),I=n(34702),S=n(57277),T=n(45697),C=n.n(T),R=n(84914),O=n(33033),Z=n(71355),L=n(97109),P=n(30893),A=["customItnl","intlProps"];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=function(){var e=(0,f.Z)(),t=(0,y.useDispatch)(),n=(0,y.useSelector)((function(e){return e.entityDetails.entity})),r=(0,y.useSelector)((function(e){var t=e.systemProfileStore;return t?t.systemProfile:{}})),s=(0,y.useSelector)((function(e){return e.routerData})),p=(0,E.useState)("pending"),T=(0,i.Z)(p,2),C=T[0],A=T[1],w=(0,E.useState)([]),G=(0,i.Z)(w,2),x=G[0],j=G[1],B=(0,E.useState)([]),D=(0,i.Z)(B,2),N=D[0],M=D[1],H=(0,E.useState)([]),V=(0,i.Z)(H,2),K=V[0],U=V[1],q=(0,E.useState)({}),z=(0,i.Z)(q,2),W=z[0],J=z[1],$=(0,E.useState)({}),Q=(0,i.Z)($,2),X=Q[0],Y=Q[1],ee=(0,E.useState)({}),te=(0,i.Z)(ee,2),ne=te[0],re=te[1],ae=(0,E.useState)(""),le=(0,i.Z)(ae,2),oe=le[0],ie=le[1],se=(0,E.useState)(!1),ce=(0,i.Z)(se,2),ue=ce[0],me=ce[1],de=x?x.length/2:0,fe=r&&r.satellite_managed||!1,pe=!ne.show_satellite_hosts&&fe,Ee=function(e){return e.filter((function(e){return e.selected}))},he=Ee(x).filter((function(e){return e.resolution&&e.resolution.has_playbook})),ge=Ee(x).length,ye=x.filter((function(e){return e.resolution&&e.resolution.has_playbook})).length,be=[{title:e.formatMessage(P.Z.topicAddEditDescription),transforms:[g.sortable]},{title:e.formatMessage(P.Z.added),transforms:[g.sortable,(0,g.cellWidth)(15)]},{title:e.formatMessage(P.Z.totalRisk),transforms:[g.sortable]},{title:h().createElement("span",null,u.AnsibeTowerIcon&&h().createElement(u.AnsibeTowerIcon,{size:"md"})," ",e.formatMessage(P.Z.ansible)),transforms:[g.sortable,g.fitContent],dataLabel:e.formatMessage(P.Z.ansible)}],_e=function(e){var t="insights-expand-all"===e,n=(0,o.Z)(x);n.map((function(e,n){Object.prototype.hasOwnProperty.call(e,"isOpen")&&(e.isOpen=t,t&&Ie(null,n,t))})),j(n)},ke=[h().createElement(R.Z,{key:"remediation-button",isDisabled:0===he.length,dataProvider:function(){return Le(he)},onRemediationCreated:function(e){return n=e.getNotification(),t((0,Z.wN)(n));var n}},u.AnsibeTowerIcon&&h().createElement(u.AnsibeTowerIcon,{size:"sm",className:"ins-c-background__default"})," ","Remediate"),{label:"Collapse all",onClick:function(){return _e("insights-collapse-all")}},{label:"Expand all",onClick:function(){return _e("insights-expand-all")}}],ve=function(e){var t=(0,o.Z)(e),n=s&&void 0!==s.params?e.findIndex((function(e){return e.rule.rule_id===s.params.id})):-1,r=t.splice(n,1);return-1!==n?[r[0]].concat((0,o.Z)(t)):e},Ie=function(e,t,n){var r=(0,o.Z)(x);r[t]=F(F({},r[t]),{},{isOpen:n}),j(r)},Se=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",l=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=e.flatMap((function(e,o){var i=e.rule,s=e.resolution,c=Object.keys(t).length?t.filter((function(t){return t.id===e.rule.node_id}))[0]:{},f=r.filter((function(e,t){return t%2==0&&e.rule.rule_id===i.rule_id&&e})),p=!!f.length&&f[0].selected,E=r.length?!!f.length&&f[0].isOpen:0===o,g=[{rule:i,resolution:s,isOpen:E,selected:p,disableSelection:!s.has_playbook,cells:[{title:h().createElement("div",null," ",i.description)},{title:h().createElement("div",{key:o},h().createElement(_.Z,{date:i.publish_date,type:"relative",tooltipProps:{position:d.TooltipPosition.bottom}}))},{title:h().createElement("div",{key:o,style:{verticalAlign:"top"}},h().createElement(d.Tooltip,{key:o,position:d.TooltipPosition.bottom,content:h().createElement("span",null,"The ",h().createElement("strong",null,"likelihood")," that this will be a problem is ",m.LIKELIHOOD_LABEL[i.likelihood],". The"," ",h().createElement("strong",null,"impact")," of the problem would be  ",m.IMPACT_LABEL[i.impact.impact]," if it occurred.")},h().createElement(k.Z,{value:i.total_risk})))},{title:h().createElement("div",{className:"ins-c-center-text",key:o},s.has_playbook?h().createElement(u.CheckCircleIcon,{className:"successColorOverride"}):"No")}]},{parent:o,fullWidth:!0,cells:[{title:h().createElement(O.default,{key:"child-".concat(o),report:e,kbaDetail:c,kbaLoading:l})}]}],y=0===a.length||i.description.toLowerCase().includes(a.toLowerCase()),b=0===Object.keys(n).length||Object.keys(n).map((function(t){var r=n[t],a={has_playbook:e.resolution.has_playbook,publish_date:i.publish_date,total_risk:i.total_risk,category:m.RULE_CATEGORIES[i.category.name.toLowerCase()]};return r.find((function(e){return String(e)===String(a[t])}))})).every((function(e){return e}));return y&&b?g:[]}));return o.forEach((function(e,t){return e.parent?e.parent=t-1:null})),o},Te=function(e){me(e),j(Se(N,K,X,x.map((function(t,n){return n%2==0&&t.resolution.has_playbook?F(F({},t),{},{selected:e}):t})),oe))},Ce={items:[{title:"Select none",onClick:function(){return Te(!1)}},{title:"Select all",onClick:function(){return Te(!0)}}],count:ge,checked:ge===ye,onSelect:function(){return Te(!ue)}},Re={deleteTitle:e.formatMessage(P.Z.resetFilters),filters:function(e){var t=Object.entries(e),n=e&&t.length>0?t.map((function(e){var t=m.FILTER_CATEGORIES[e[0]],n=e[1].map((function(e){return{name:t.values.find((function(t){return t.value===String(e)})).label,value:e}}));return{category:(0,L.kC)(t.title),chips:n,urlParam:t.urlParam}})):[];return oe.length>0&&n.push({category:"Description",chips:[{name:oe,value:oe}]}),n}(X),onDelete:function(e,t,n){n?(j(Se(N,K,{},x,"")),Y({}),ie("")):t.map((function(e){"Description"===e.category?(j(Se(N,K,X,x,"")),ie("")):Ze(e.urlParam,X[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})))}))}},Oe=function(){var e=(0,a.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return e.rule.node_id})).filter((function(e){return e})),e.prev=1,e.next=4,b.Z.get("https://access.redhat.com/hydra/rest/search/kcs?q=id:(".concat(n.join(" OR "),")&fl=view_uri,id,publishedTitle&rows=").concat(n.length,"&redhat_client=$ADVISOR"),{},{credentials:"include"});case 4:r=e.sent.data.response.docs,U(r),j(Se(t,r,X,x,oe)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0,"KBA fetch failed.");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),Ze=function(e,t){var n=t.length>0?F(F({},X),(0,l.Z)({},e,t)):function(e){var t=F({},X);return delete t[e],t}(e);j(Se(N,K,n,x,oe)),Y(n)},Le=function(e){var t=e.filter((function(e){return e.resolution&&e.resolution.has_playbook})).map((function(e){return{id:"advisor:".concat(e.rule.rule_id),description:e.rule.description}}));return!!t.length&&{issues:t,systems:[n.id]}},Pe=[{label:"description",filterValues:{key:"text-filter",onChange:function(e,t){return function(e){var t=Se(N,K,X,x,e);ie(e),j(t)}(t)},value:oe}},{label:m.FILTER_CATEGORIES.total_risk.title,type:m.FILTER_CATEGORIES.total_risk.type,id:m.FILTER_CATEGORIES.total_risk.urlParam,value:"checkbox-".concat(m.FILTER_CATEGORIES.total_risk.urlParam),filterValues:{key:"".concat(m.FILTER_CATEGORIES.total_risk.urlParam,"-filter"),onChange:function(e,t){return Ze(m.FILTER_CATEGORIES.total_risk.urlParam,t)},value:X.total_risk,items:m.FILTER_CATEGORIES.total_risk.values}},{label:m.FILTER_CATEGORIES.category.title,type:m.FILTER_CATEGORIES.category.type,id:m.FILTER_CATEGORIES.category.urlParam,value:"checkbox-".concat(m.FILTER_CATEGORIES.category.urlParam),filterValues:{key:"".concat(m.FILTER_CATEGORIES.category.urlParam,"-filter"),onChange:function(e,t){return Ze(m.FILTER_CATEGORIES.category.urlParam,t)},value:X.category,items:m.FILTER_CATEGORIES.category.values}},{label:m.FILTER_CATEGORIES.has_playbook.title,type:m.FILTER_CATEGORIES.has_playbook.type,id:m.FILTER_CATEGORIES.has_playbook.urlParam,value:"checkbox-".concat(m.FILTER_CATEGORIES.has_playbook.urlParam),filterValues:{key:"".concat(m.FILTER_CATEGORIES.has_playbook.urlParam,"-filter"),onChange:function(e,t){return Ze(m.FILTER_CATEGORIES.has_playbook.urlParam,t)},value:X.has_playbook,items:m.FILTER_CATEGORIES.has_playbook.values}}];return(0,E.useEffect)((function(){!function(){var e=(0,a.Z)(c().mark((function e(){var t,r,a,l,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=Promise,e.next=4,b.Z.get("".concat(m.BASE_URL,"/account_setting/"),{credentials:"include"});case 4:return e.t1=e.sent.data,e.next=7,b.Z.get("".concat(m.BASE_URL,"/system/").concat(n.id,"/reports/"),{credentials:"include"});case 7:return e.t2=e.sent.data,e.t3=[e.t1,e.t2],e.next=11,e.t0.all.call(e.t0,e.t3);case 11:t=e.sent,r=(0,i.Z)(t,2),a=r[0],l=r[1],o=ve(l),Oe(o),j(Se(o,{},X,x,oe,!0)),A("fulfilled"),M(o),re(a),e.next=26;break;case 23:e.prev=23,e.t4=e.catch(0),A("failed");case 26:case"end":return e.stop()}}),e,null,[[0,23]])})));return function(){return e.apply(this,arguments)}}()()}),[]),h().createElement("div",{className:"ins-c-inventory-insights__overrides"},"pending"===C||"fulfilled"===C&&pe||null===n.insights_id?h().createElement(E.Fragment,null):h().createElement(S.Z,{actionsConfig:{actions:ke},bulkSelect:Ce,filterConfig:{items:Pe},pagination:h().createElement(h().Fragment,null," ","".concat(de,1===de?" Recommendation":" Recommendations")," "),activeFiltersConfig:Re}),"pending"===C&&h().createElement(d.Card,null,h().createElement(d.CardBody,null,h().createElement(v.aV,null))),"fulfilled"===C&&(pe?h().createElement(I.Z,{icon:u.PficonSatelliteIcon,title:"Satellite managed system",text:h().createElement("span",{key:"satellite managed system"},'Insights results can not be displayed for this host, as the "Hide Satellite Managed Systems" setting has been enabled by an org admin.',h().createElement("br",null),"For more information on this setting and how to modify it,",h().createElement("a",{href:"https://access.redhat.com/solutions/4281761",rel:"noopener"}," ","Please visit this Knowledgebase article  ",h().createElement(u.ExternalLinkAltIcon,null)),".")}):N.length>0?h().createElement(E.Fragment,null,h().createElement(g.Table,{"aria-label":"report-table",onSelect:function(e,t,n){return j(Se(N,K,X,x.map((function(e,r){return r===n?F(F({},e),{},{selected:t}):e})),oe))},onCollapse:Ie,rows:x,cells:be,sortBy:W,canSelectAll:!1,onSort:function(e,t,n){var r={1:"description",2:"publish_date",3:"total_risk",4:"has_playbook"},a=5===t?"resolution":"rule",l=function(e){return N.concat().sort((function(n,a){return n[e][r[t]]>a[e][r[t]]?1:a[e][r[t]]>n[e][r[t]]?-1:0}))},o=n===g.SortByDirection.asc?l(a):l(a).reverse();M(o),J({index:t,direction:n}),j(Se(o,K,X,x,oe))},isStickyHeader:!0},h().createElement(g.TableHeader,null),h().createElement(g.TableBody,null)),0===de&&h().createElement(d.Card,null,h().createElement(d.CardBody,null,h().createElement(I.Z,{title:"No matching recommendations found",text:"This filter criteria matches no recommendations. Try changing your filter settings."})))):null!==n.insights_id?h().createElement(d.Card,null,h().createElement(d.CardBody,null,h().createElement(I.Z,{icon:u.CheckIcon,iconClass:"ins-c-insights__check",title:"No recommendations",text:"No known recommendations affect this system"}))):h().createElement(I.Z,{iconClass:"chartSpikeIconColor",icon:u.ChartSpikeIcon,title:"Get started with Red Hat Insights",text:h().createElement(d.Bullseye,null,h().createElement(d.Stack,{hasGutter:!0},h().createElement(d.StackItem,null,"1. Install the client on the RHEL system.",h().createElement(d.ClipboardCopy,null,"yum install insights-client")),h().createElement(d.StackItem,null,"2. Register the system to Red Hat Insights.",h().createElement(d.ClipboardCopy,null,"insights-client --register"))))},h().createElement(d.Button,{component:"a",href:"https://access.redhat.com/products/red-hat-insights#getstarted",target:"_blank",variant:"primary"},"Getting started documentation"))),"failed"===C&&n&&h().createElement(d.Card,null,h().createElement(d.CardBody,null,h().createElement(I.Z,{icon:u.TimesCircleIcon,title:"Error getting recommendations",text:n?"There was an error fetching recommendations for this entity. Refresh your page to try again.":"This entity can not be found or might no longer be registered to Red Hat Insights."}))))},x=function(e){var t=e.customItnl,n=e.intlProps,a=(0,r.Z)(e,A),l=t?p.Z:E.Fragment;return h().createElement(l,t&&F({locale:navigator.language.slice(0,2),messages:P.Z,onError:console.log},n),h().createElement(G,a))};const j=x;x.propTypes={customItnl:C().bool,intlProps:C().shape({locale:C().string,messages:C().array,onError:C().func})}},36491:(e,t,n)=>{"use strict";n.r(t);var r=n(93264),a=n.n(r),l=n(3644),o=n.n(l),i=n(87999),s=n(16354),c=n(71355),u=n(45697),m=n.n(u),d=n(88931),f=n(16530),p=n(35240),E=n(61380),h=n(94500),g=n.n(h),y=n(31806),b=function(e){var t=e.useLogger;return a().createElement(s.Pj,{locale:navigator.language.slice(0,2),messages:y,onError:console.log},a().createElement(d.Provider,{store:(t?(0,E.S1)(g()):(0,E.S1)()).getStore()},a().createElement(f.BrowserRouter,{basename:(0,p.eb)(window.location.pathname)},a().createElement(a().Fragment,null,a().createElement(c.qJ,null),a().createElement(i.Z,null)))))};b.propTypes={useLogger:m().bool},b.defaultProps={useLogger:!1};const _=b;o().render(a().createElement(_,null),document.getElementById("root"))}}]);
//# sourceMappingURL=../sourcemaps/889.8d55466c37c19491f9c0.js.map