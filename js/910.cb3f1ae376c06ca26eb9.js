(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[910],{15910:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>D});var r=n(81253),a=n(92137),l=n(96156),o=n(85061),i=n(28481),s=n(87757),c=n.n(s),u=n(61179),m=n(59303),d=n(58788),f=n(86896),p=n(29558),E=n(93264),h=n.n(E),g=n(94550),y=n(88931),b=n(71094),_=n(62410),k=n(78216),v=n(24561),I=n(34702),T=n(57277),S=n(45697),C=n.n(S),R=n(84914),O=n(33033),Z=n(83808),A=n(71355),L=n(97109),P=n(30893),w=["customItnl","intlProps"];function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=function(){var e=(0,f.Z)(),t=(0,y.useDispatch)(),n=(0,y.useSelector)((function(e){return e.entityDetails.entity})),r=(0,y.useSelector)((function(e){var t=e.systemProfileStore;return t?t.systemProfile:{}})),s=(0,y.useSelector)((function(e){return e.routerData})),p=(0,E.useState)("pending"),S=(0,i.Z)(p,2),C=S[0],w=S[1],F=(0,E.useState)([]),x=(0,i.Z)(F,2),j=x[0],D=x[1],B=(0,E.useState)([]),N=(0,i.Z)(B,2),M=N[0],H=N[1],V=(0,E.useState)([]),K=(0,i.Z)(V,2),U=K[0],z=K[1],W=(0,E.useState)({}),q=(0,i.Z)(W,2),$=q[0],J=q[1],Q=(0,E.useState)({}),X=(0,i.Z)(Q,2),Y=X[0],ee=X[1],te=(0,E.useState)({}),ne=(0,i.Z)(te,2),re=ne[0],ae=ne[1],le=(0,E.useState)(""),oe=(0,i.Z)(le,2),ie=oe[0],se=oe[1],ce=(0,E.useState)(!1),ue=(0,i.Z)(ce,2),me=ue[0],de=ue[1],fe=(0,E.useState)(!1),pe=(0,i.Z)(fe,2),Ee=pe[0],he=pe[1],ge=j?j.length/2:0,ye=r&&r.satellite_managed||!1,be=!re.show_satellite_hosts&&ye,_e=function(e){return e.filter((function(e){return e.selected}))},ke=_e(j).filter((function(e){return e.resolution&&e.resolution.has_playbook})),ve=_e(j).length,Ie=j.filter((function(e){return e.resolution&&e.resolution.has_playbook})).length,Te=[{title:e.formatMessage(P.Z.topicAddEditDescription),transforms:[g.sortable]},{title:e.formatMessage(P.Z.added),transforms:[g.sortable,(0,g.cellWidth)(15)]},{title:e.formatMessage(P.Z.totalRisk),transforms:[g.sortable]},{title:h().createElement("span",null,u.AnsibeTowerIcon&&h().createElement(u.AnsibeTowerIcon,{size:"md"})," ",e.formatMessage(P.Z.ansible)),transforms:[g.sortable,g.fitContent],dataLabel:e.formatMessage(P.Z.ansible)}],Se=[h().createElement(R.Z,{key:"remediation-button",isDisabled:0===ke.length,dataProvider:function(){return we(ke)},onRemediationCreated:function(e){return n=e.getNotification(),t((0,A.wN)(n));var n}},u.AnsibeTowerIcon&&h().createElement(u.AnsibeTowerIcon,{size:"sm",className:"ins-c-background__default"})," ","Remediate")],Ce=function(e){var t=(0,o.Z)(e),n=s&&void 0!==s.params?e.findIndex((function(e){return e.rule.rule_id===s.params.id})):-1,r=t.splice(n,1);return-1!==n?[r[0]].concat((0,o.Z)(t)):e},Re=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",l=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=e.flatMap((function(e,o){var i=e.rule,s=e.resolution,c=Object.keys(t).length?t.filter((function(t){return t.id===e.rule.node_id}))[0]:{},f=r.filter((function(e,t){return t%2==0&&e.rule.rule_id===i.rule_id&&e})),p=!!f.length&&f[0].selected,E=r.length?!!f.length&&f[0].isOpen:0===o,g=[{rule:i,resolution:s,isOpen:E,selected:p,disableSelection:!s.has_playbook,cells:[{title:h().createElement("span",null,i.description," ",h().createElement(Z.Z,{rule:i}))},{title:h().createElement("div",{key:o},h().createElement(_.Z,{date:i.publish_date,type:"relative",tooltipProps:{position:d.TooltipPosition.bottom}}))},{title:h().createElement("div",{key:o,style:{verticalAlign:"top"}},h().createElement(d.Tooltip,{key:o,position:d.TooltipPosition.bottom,content:h().createElement("span",null,"The ",h().createElement("strong",null,"likelihood")," that this will be a problem is ",m.LIKELIHOOD_LABEL[i.likelihood],". The"," ",h().createElement("strong",null,"impact")," of the problem would be  ",m.IMPACT_LABEL[i.impact.impact]," if it occurred.")},h().createElement(k.Z,{value:i.total_risk})))},{title:h().createElement("div",{className:"ins-c-center-text",key:o},s.has_playbook?h().createElement(u.CheckCircleIcon,{className:"successColorOverride"}):"No")}]},{parent:o,fullWidth:!0,cells:[{title:h().createElement(O.default,{key:"child-".concat(o),report:e,kbaDetail:c,kbaLoading:l})}]}],y=0===a.length||i.description.toLowerCase().includes(a.toLowerCase()),b=0===Object.keys(n).length||Object.keys(n).map((function(t){var r=n[t],a={has_playbook:e.resolution.has_playbook,publish_date:i.publish_date,total_risk:i.total_risk,category:m.RULE_CATEGORIES[i.category.name.toLowerCase()]};return r.find((function(e){return String(e)===String(a[t])}))})).every((function(e){return e}));return y&&b?g:[]}));return o.forEach((function(e,t){return e.parent?e.parent=t-1:null})),o},Oe=function(e){de(e),D(Re(M,U,Y,j.map((function(t,n){return n%2==0&&t.resolution.has_playbook?G(G({},t),{},{selected:e}):t})),ie))},Ze={items:[{title:"Select none",onClick:function(){return Oe(!1)}},{title:"Select all",onClick:function(){return Oe(!0)}}],count:ve,checked:ve===Ie,onSelect:function(){return Oe(!me)}},Ae={deleteTitle:e.formatMessage(P.Z.resetFilters),filters:function(e){var t=Object.entries(e),n=e&&t.length>0?t.map((function(e){var t=m.FILTER_CATEGORIES[e[0]],n=e[1].map((function(e){return{name:t.values.find((function(t){return t.value===String(e)})).label,value:e}}));return{category:(0,L.kC)(t.title),chips:n,urlParam:t.urlParam}})):[];return ie.length>0&&n.push({category:"Description",chips:[{name:ie,value:ie}]}),n}(Y),onDelete:function(e,t,n){n?(D(Re(M,U,{},j,"")),ee({}),se("")):t.map((function(e){"Description"===e.category?(D(Re(M,U,Y,j,"")),se("")):Pe(e.urlParam,Y[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})))}))}},Le=function(){var e=(0,a.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return e.rule.node_id})).filter((function(e){return e})),e.prev=1,e.next=4,b.Z.get("https://access.redhat.com/hydra/rest/search/kcs?q=id:(".concat(n.join(" OR "),")&fl=view_uri,id,publishedTitle&rows=").concat(n.length,"&redhat_client=$ADVISOR"),{},{credentials:"include"});case 4:r=e.sent.data.response.docs,z(r),D(Re(t,r,Y,j,ie)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0,"KBA fetch failed.");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),Pe=function(e,t){var n=t.length>0?G(G({},Y),(0,l.Z)({},e,t)):function(e){var t=G({},Y);return delete t[e],t}(e);D(Re(M,U,n,j,ie)),ee(n)},we=function(e){var t=e.filter((function(e){return e.resolution&&e.resolution.has_playbook})).map((function(e){return{id:"advisor:".concat(e.rule.rule_id),description:e.rule.description}}));return!!t.length&&{issues:t,systems:[n.id]}},Fe=[{label:"description",filterValues:{key:"text-filter",onChange:function(e,t){return function(e){var t=Re(M,U,Y,j,e);se(e),D(t)}(t)},value:ie}},{label:m.FILTER_CATEGORIES.total_risk.title,type:m.FILTER_CATEGORIES.total_risk.type,id:m.FILTER_CATEGORIES.total_risk.urlParam,value:"checkbox-".concat(m.FILTER_CATEGORIES.total_risk.urlParam),filterValues:{key:"".concat(m.FILTER_CATEGORIES.total_risk.urlParam,"-filter"),onChange:function(e,t){return Pe(m.FILTER_CATEGORIES.total_risk.urlParam,t)},value:Y.total_risk,items:m.FILTER_CATEGORIES.total_risk.values}},{label:m.FILTER_CATEGORIES.category.title,type:m.FILTER_CATEGORIES.category.type,id:m.FILTER_CATEGORIES.category.urlParam,value:"checkbox-".concat(m.FILTER_CATEGORIES.category.urlParam),filterValues:{key:"".concat(m.FILTER_CATEGORIES.category.urlParam,"-filter"),onChange:function(e,t){return Pe(m.FILTER_CATEGORIES.category.urlParam,t)},value:Y.category,items:m.FILTER_CATEGORIES.category.values}},{label:m.FILTER_CATEGORIES.has_playbook.title,type:m.FILTER_CATEGORIES.has_playbook.type,id:m.FILTER_CATEGORIES.has_playbook.urlParam,value:"checkbox-".concat(m.FILTER_CATEGORIES.has_playbook.urlParam),filterValues:{key:"".concat(m.FILTER_CATEGORIES.has_playbook.urlParam,"-filter"),onChange:function(e,t){return Pe(m.FILTER_CATEGORIES.has_playbook.urlParam,t)},value:Y.has_playbook,items:m.FILTER_CATEGORIES.has_playbook.values}}];return(0,E.useEffect)((function(){!function(){var e=(0,a.Z)(c().mark((function e(){var t,r,a,l,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=Promise,e.next=4,b.Z.get("".concat(m.BASE_URL,"/account_setting/"),{credentials:"include"});case 4:return e.t1=e.sent.data,e.next=7,b.Z.get("".concat(m.BASE_URL,"/system/").concat(n.id,"/reports/"),{credentials:"include"});case 7:return e.t2=e.sent.data,e.t3=[e.t1,e.t2],e.next=11,e.t0.all.call(e.t0,e.t3);case 11:t=e.sent,r=(0,i.Z)(t,2),a=r[0],l=r[1],o=Ce(l),Le(o),D(Re(o,{},Y,j,ie,!0)),w("fulfilled"),H(o),ae(a),e.next=26;break;case 23:e.prev=23,e.t4=e.catch(0),w("failed");case 26:case"end":return e.stop()}}),e,null,[[0,23]])})));return function(){return e.apply(this,arguments)}}()()}),[]),h().createElement("div",{className:"ins-c-inventory-insights__overrides"},"pending"===C||"fulfilled"===C&&be||null===n.insights_id?h().createElement(E.Fragment,null):h().createElement(T.Z,{expandAll:{isAllExpanded:Ee,onClick:function(e,t){he(t);var n=(0,o.Z)(j);n.map((function(e){Object.prototype.hasOwnProperty.call(e,"isOpen")&&(e.isOpen=t)})),D(n)}},actionsConfig:{actions:Se},bulkSelect:Ze,filterConfig:{items:Fe},pagination:h().createElement(E.Fragment,null," ","".concat(ge,1===ge?" Recommendation":" Recommendations")," "),activeFiltersConfig:Ae}),"pending"===C&&h().createElement(d.Card,null,h().createElement(d.CardBody,null,h().createElement(v.aV,null))),"fulfilled"===C&&(be?h().createElement(I.Z,{icon:u.PficonSatelliteIcon,title:"Satellite managed system",text:h().createElement("span",{key:"satellite managed system"},'Insights results can not be displayed for this host, as the "Hide Satellite Managed Systems" setting has been enabled by an org admin.',h().createElement("br",null),"For more information on this setting and how to modify it,",h().createElement("a",{href:"https://access.redhat.com/solutions/4281761",rel:"noopener"}," ","Please visit this Knowledgebase article  ",h().createElement(u.ExternalLinkAltIcon,null)),".")}):M.length>0?h().createElement(E.Fragment,null,h().createElement(g.Table,{"aria-label":"report-table",onSelect:function(e,t,n){return D(Re(M,U,Y,j.map((function(e,r){return r===n?G(G({},e),{},{selected:t}):e})),ie))},onCollapse:function(e,t,n){var r=(0,o.Z)(j);r[t]=G(G({},r[t]),{},{isOpen:n}),D(r)},rows:j,cells:Te,sortBy:$,canSelectAll:!1,onSort:function(e,t,n){var r={1:"description",2:"publish_date",3:"total_risk",4:"has_playbook"},a=5===t?"resolution":"rule",l=function(e){return M.concat().sort((function(n,a){return n[e][r[t]]>a[e][r[t]]?1:a[e][r[t]]>n[e][r[t]]?-1:0}))},o=n===g.SortByDirection.asc?l(a):l(a).reverse();H(o),J({index:t,direction:n}),D(Re(o,U,Y,j,ie))},variant:g.TableVariant.compact,isStickyHeader:!0},h().createElement(g.TableHeader,null),h().createElement(g.TableBody,null)),0===ge&&h().createElement(d.Card,null,h().createElement(d.CardBody,null,h().createElement(I.Z,{title:"No matching recommendations found",text:"This filter criteria matches no recommendations. Try changing your filter settings."})))):null!==n.insights_id?h().createElement(d.Card,null,h().createElement(d.CardBody,null,h().createElement(I.Z,{icon:u.CheckIcon,iconClass:"ins-c-insights__check",title:"No recommendations",text:"No known recommendations affect this system"}))):h().createElement(I.Z,{iconClass:"chartSpikeIconColor",icon:u.ChartSpikeIcon,title:"Get started with Red Hat Insights",text:h().createElement(d.Bullseye,null,h().createElement(d.Stack,{hasGutter:!0},h().createElement(d.StackItem,null,"1. Install the client on the RHEL system.",h().createElement(d.ClipboardCopy,null,"yum install insights-client")),h().createElement(d.StackItem,null,"2. Register the system to Red Hat Insights.",h().createElement(d.ClipboardCopy,null,"insights-client --register"))))},h().createElement(d.Button,{component:"a",href:"https://access.redhat.com/products/red-hat-insights#getstarted",target:"_blank",variant:"primary"},"Getting started documentation"))),"failed"===C&&n&&h().createElement(d.Card,null,h().createElement(d.CardBody,null,h().createElement(I.Z,{icon:u.TimesCircleIcon,title:"Error getting recommendations",text:n?"There was an error fetching recommendations for this entity. Refresh your page to try again.":"This entity can not be found or might no longer be registered to Red Hat Insights."}))))},j=function(e){var t=e.customItnl,n=e.intlProps,a=(0,r.Z)(e,w),l=t?p.Z:E.Fragment;return h().createElement(l,t&&G({locale:navigator.language.slice(0,2),messages:P.Z,onError:console.log},n),h().createElement(x,a))};const D=j;j.propTypes={customItnl:C().bool,intlProps:C().shape({locale:C().string,messages:C().array,onError:C().func})}}}]);
//# sourceMappingURL=../sourcemaps/910.3c6bbfc091f22f54d66d.js.map