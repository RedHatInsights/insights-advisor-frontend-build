(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[575],{97109:(e,t,n)=>{"use strict";n.d(t,{Y4:()=>s,qW:()=>u,yG:()=>d,kC:()=>m,yK:()=>p,s0:()=>f,E9:()=>h});var r=n(4942),a=n(29439),o=n(93433),l=n(35240);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=new URL(window.location),r="".concat(Object.keys(e).map((function(t){return"".concat(t,"=").concat(Array.isArray(e[t])?e[t].join():e[t])})).join("&")),a=new URLSearchParams(r);return"undefined"===a.get("reports_shown")&&a.delete("reports_shown"),null!=t&&t.length?a.set("tags",t):a.delete("tags"),window.history.replaceState(null,null,"".concat(n.origin).concat(n.pathname,"?").concat(a.toString()).concat(window.location.hash)),"?".concat(r)},u=function(e){return Object.assign.apply(Object,[{}].concat((0,o.Z)(Object.entries(e).map((function(e){var t=(0,a.Z)(e,2),n=t[0],o=t[1];return Array.isArray(o)?("true"===o[0]||"false"===o[0])&&o.length>1?null:(0,r.Z)({},n,o.join()):(0,r.Z)({},n,o)})))))},d=function(){var e=new URLSearchParams(window.location.search);return Array.from(e).reduce((function(e,t){var n=(0,a.Z)(t,2),o=n[0],l=n[1];return c(c({},e),{},(0,r.Z)({},o,"true"===l||"false"===l?JSON.parse(l):l.split(",")))}),{})},m=function(e){return e[0].toUpperCase()+e.substring(1)},p=function(e,t){var n=Object.entries(e);return n.length>0?n.reduce((function(e,n){if(t[n[0]]){var r=t[n[0]],a=Array.isArray(n[1])?n[1].map((function(e){var t=r.values.find((function(t){return t.value===String(e)}));return t?{name:t.text||t.label,value:e}:{name:e,value:e}})):[{name:r.values.find((function(e){return e.value===String(n[1])})).label,value:n[1]}];return[].concat((0,o.Z)(e),[{category:m(r.title),chips:a,urlParam:r.urlParam}])}return"text"===n[0]?[].concat((0,o.Z)(e),[{category:"Name",chips:[{name:n[1],value:n[1]}],urlParam:n[0]}]):e}),[]):[]},f=function(e,t){var n;return(0,l.h3)({system_profile:c(c({},(null==e||null===(n=e.SAP)||void 0===n?void 0:n.isSelected)&&{sap_system:!0}),(null==t?void 0:t.length)>0&&{sap_sids:t})},void 0,{arrayEnhancer:"contains"})},h=function(e,t){return e.map((function(e){return c(c({},t.find((function(t){return t.id===e.system_uuid&&t}))),e)}))}},87516:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(76004),a=n(23218),o=n(45697),l=n.n(o),i=n(93264),c=n.n(i),s=n(30893),u=n(86896),d=function(e){var t,n=e.rule,o=(0,u.Z)();return c().createElement(c().Fragment,null,-1!==(null==n||null===(t=n.tags)||void 0===t?void 0:t.search("incident"))&&c().createElement(r.Tooltip,{content:o.formatMessage(s.Z.incidentTooltip),position:r.TooltipPosition.right},c().createElement(a.Label,{color:"red",className:"incidentLabel"},o.formatMessage(s.Z.incident))),"disabled"===(null==n?void 0:n.rule_status)&&c().createElement(r.Tooltip,{content:o.formatMessage(s.Z.ruleIsDisabledTooltip),position:r.TooltipPosition.right},c().createElement(a.Label,{color:"gray"},o.formatMessage(s.Z.disabled))),"rhdisabled"===(null==n?void 0:n.rule_status)&&c().createElement(r.Tooltip,{content:o.formatMessage(s.Z.ruleIsDisabledTooltip),position:r.TooltipPosition.right},c().createElement(a.Label,{color:"gray"},o.formatMessage(s.Z.redhatDisabled))))};d.propTypes={rule:l().object};const m=d},34702:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(219),a=n(96733),o=n(74183),l=n(86728),i=n(45697),c=n.n(i),s=n(93264),u=n.n(s),d=n(34348),m=function(e){var t=e.className,n=e.children,a=e.icon,i=e.iconClass,c=e.iconStyle,s=e.text,m=e.title,p=e.variant;return u().createElement(r.ub,{className:t,variant:p},"none"!==a&&u().createElement(l.k,{className:i,style:c,icon:a}),u().createElement(d.Dx,{headingLevel:"h5",size:"lg"},m),u().createElement(o.B,{style:{marginBottom:"16px"}},s),n)};m.propTypes={children:c().any,icon:c().any,iconClass:c().any,iconStyle:c().any,text:c().any,title:c().string,variant:c().any,className:c().string},m.defaultProps={icon:a.ZP,title:"",variant:r.IQ.full};const p=m},31566:(e,t,n)=>{"use strict";n.d(t,{Z:()=>L});var r=n(45987),a=n(15861),o=n(4942),l=n(93433),i=n(29439),c=n(87757),s=n.n(c),u=n(70251),d=n(59303),m=n(84669),p=n(86896),f=n(29558),h=n(93264),g=n.n(h),y=n(27577),v=n(88931),b=n(62410),k=n(71094),E=n(78216),_=n(24561),Z=n(34702),S=n(66296),P=n(45697),O=n.n(P),w=n(98132),C=n(33033),j=n(87516),x=n(71355),T=n(97109),I=n(30893),W=["customItnl","intlProps"];function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(){var e=(0,p.Z)(),t=(0,v.useDispatch)(),n=(0,v.useSelector)((function(e){return e.entityDetails.entity})),r=(0,v.useSelector)((function(e){var t=e.systemProfileStore;return t?t.systemProfile:{}})),c=(0,v.useSelector)((function(e){return e.routerData})),f=(0,h.useState)("pending"),P=(0,i.Z)(f,2),O=P[0],W=P[1],D=(0,h.useState)([]),N=(0,i.Z)(D,2),R=N[0],L=N[1],M=(0,h.useState)([]),B=(0,i.Z)(M,2),F=B[0],V=B[1],H=(0,h.useState)([]),U=(0,i.Z)(H,2),z=U[0],G=U[1],X=(0,h.useState)({}),q=(0,i.Z)(X,2),K=q[0],Q=q[1],J=(0,h.useState)({}),Y=(0,i.Z)(J,2),$=Y[0],ee=Y[1],te=(0,h.useState)({}),ne=(0,i.Z)(te,2),re=ne[0],ae=ne[1],oe=(0,h.useState)(""),le=(0,i.Z)(oe,2),ie=le[0],ce=le[1],se=(0,h.useState)(!1),ue=(0,i.Z)(se,2),de=ue[0],me=ue[1],pe=(0,h.useState)(!1),fe=(0,i.Z)(pe,2),he=fe[0],ge=fe[1],ye=R?R.length/2:0,ve=r&&r.satellite_managed||!1,be=!re.show_satellite_hosts&&ve,ke=function(e){return e.filter((function(e){return e.selected}))},Ee=ke(R).filter((function(e){return e.resolution&&e.resolution.has_playbook})),_e=ke(R).length,Ze=R.filter((function(e){return e.resolution&&e.resolution.has_playbook})).length,Se=[{title:e.formatMessage(I.Z.topicAddEditDescription),transforms:[y.sortable]},{title:e.formatMessage(I.Z.added),transforms:[y.sortable,(0,y.cellWidth)(15)]},{title:e.formatMessage(I.Z.totalRisk),transforms:[y.sortable]},{title:g().createElement("span",null,u.AnsibeTowerIcon&&g().createElement(u.AnsibeTowerIcon,{size:"md"})," ",e.formatMessage(I.Z.ansible)),transforms:[y.sortable,y.fitContent],dataLabel:e.formatMessage(I.Z.ansible)}],Pe=[g().createElement(w.Z,{key:"remediation-button",isDisabled:0===Ee.length,dataProvider:function(){return We(Ee)},onRemediationCreated:function(e){return n=e.getNotification(),t((0,x.wN)(n));var n}},u.AnsibeTowerIcon&&g().createElement(u.AnsibeTowerIcon,{size:"sm",className:"ins-c-background__default"})," ","Remediate")],Oe=function(e){var t=(0,l.Z)(e),n=c&&void 0!==c.params?e.findIndex((function(e){return e.rule.rule_id===c.params.id})):-1,r=t.splice(n,1);return-1!==n?[r[0]].concat((0,l.Z)(t)):e},we=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],l=e.flatMap((function(e,l){var i=e.rule,c=e.resolution,s=Object.keys(t).length?t.filter((function(t){return t.id===e.rule.node_id}))[0]:{},p=r.filter((function(e,t){return t%2==0&&e.rule.rule_id===i.rule_id&&e})),f=!!p.length&&p[0].selected,h=r.length?!!p.length&&p[0].isOpen:0===l,y=[{rule:i,resolution:c,isOpen:h,selected:f,disableSelection:!c.has_playbook,cells:[{title:g().createElement("span",null,i.description," ",g().createElement(j.Z,{rule:i}))},{title:g().createElement("div",{key:l},g().createElement(b.Z,{date:i.publish_date,type:"relative",tooltipProps:{position:m.TooltipPosition.bottom}}))},{title:g().createElement("div",{key:l,style:{verticalAlign:"top"}},g().createElement(m.Tooltip,{key:l,position:m.TooltipPosition.bottom,content:g().createElement("span",null,"The ",g().createElement("strong",null,"likelihood")," that this will be a problem is ",d.FV[i.likelihood],". The"," ",g().createElement("strong",null,"impact")," of the problem would be  ",d.dz[i.impact.impact]," if it occurred.")},g().createElement(E.Z,{value:i.total_risk})))},{title:g().createElement("div",{className:"ins-c-center-text",key:l},c.has_playbook?g().createElement(u.CheckCircleIcon,{className:"successColorOverride"}):"No")}]},{parent:l,fullWidth:!0,cells:[{title:g().createElement(C.default,{key:"child-".concat(l),report:e,kbaDetail:s,kbaLoading:o})}]}],v=0===a.length||i.description.toLowerCase().includes(a.toLowerCase()),k=0===Object.keys(n).length||Object.keys(n).map((function(t){var r=n[t],a={has_playbook:e.resolution.has_playbook,publish_date:i.publish_date,total_risk:i.total_risk,category:d.kT[i.category.name.toLowerCase()]};return r.find((function(e){return String(e)===String(a[t])}))})).every((function(e){return e}));return v&&k?y:[]}));return l.forEach((function(e,t){return e.parent?e.parent=t-1:null})),l},Ce=function(e){me(e),L(we(F,z,$,R.map((function(t,n){return n%2==0&&t.resolution.has_playbook?A(A({},t),{},{selected:e}):t})),ie))},je={items:[{title:"Select none",onClick:function(){return Ce(!1)}},{title:"Select all",onClick:function(){return Ce(!0)}}],count:_e,checked:_e===Ze,onSelect:function(){return Ce(!de)}},xe={deleteTitle:e.formatMessage(I.Z.resetFilters),filters:function(e){var t=Object.entries(e),n=e&&t.length>0?t.map((function(e){var t=d.W2[e[0]],n=e[1].map((function(e){return{name:t.values.find((function(t){return t.value===String(e)})).label,value:e}}));return{category:(0,T.kC)(t.title),chips:n,urlParam:t.urlParam}})):[];return ie.length>0&&n.push({category:"Description",chips:[{name:ie,value:ie}]}),n}($),onDelete:function(e,t,n){n?(L(we(F,z,{},R,"")),ee({}),ce("")):t.map((function(e){"Description"===e.category?(L(we(F,z,$,R,"")),ce("")):Ie(e.urlParam,$[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})))}))}},Te=function(){var e=(0,a.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return e.rule.node_id})).filter((function(e){return e})),e.prev=1,e.next=4,(0,k.dX)("https://access.redhat.com/hydra/rest/search/kcs?q=id:(".concat(n.join(" OR "),")&fl=view_uri,id,publishedTitle&rows=").concat(n.length,"&redhat_client=$ADVISOR"),{},{credentials:"include"});case 4:r=e.sent.data.response.docs,G(r),L(we(t,r,$,R,ie)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0,"KBA fetch failed.");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),Ie=function(e,t){var n=t.length>0?A(A({},$),(0,o.Z)({},e,t)):function(e){var t=A({},$);return delete t[e],t}(e);L(we(F,z,n,R,ie)),ee(n)},We=function(e){var t=e.filter((function(e){return e.resolution&&e.resolution.has_playbook})).map((function(e){return{id:"advisor:".concat(e.rule.rule_id),description:e.rule.description}}));return!!t.length&&{issues:t,systems:[n.id]}},De=[{label:"description",filterValues:{key:"text-filter",onChange:function(e,t){return function(e){var t=we(F,z,$,R,e);ce(e),L(t)}(t)},value:ie}},{label:d.W2.total_risk.title,type:d.W2.total_risk.type,id:d.W2.total_risk.urlParam,value:"checkbox-".concat(d.W2.total_risk.urlParam),filterValues:{key:"".concat(d.W2.total_risk.urlParam,"-filter"),onChange:function(e,t){return Ie(d.W2.total_risk.urlParam,t)},value:$.total_risk,items:d.W2.total_risk.values}},{label:d.W2.category.title,type:d.W2.category.type,id:d.W2.category.urlParam,value:"checkbox-".concat(d.W2.category.urlParam),filterValues:{key:"".concat(d.W2.category.urlParam,"-filter"),onChange:function(e,t){return Ie(d.W2.category.urlParam,t)},value:$.category,items:d.W2.category.values}},{label:d.W2.has_playbook.title,type:d.W2.has_playbook.type,id:d.W2.has_playbook.urlParam,value:"checkbox-".concat(d.W2.has_playbook.urlParam),filterValues:{key:"".concat(d.W2.has_playbook.urlParam,"-filter"),onChange:function(e,t){return Ie(d.W2.has_playbook.urlParam,t)},value:$.has_playbook,items:d.W2.has_playbook.values}}];return(0,h.useEffect)((function(){!function(){var e=(0,a.Z)(s().mark((function e(){var t,r,a,o,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=Promise,e.next=4,(0,k.dX)("".concat(d._n,"/account_setting/"),{credentials:"include"});case 4:return e.t1=e.sent.data,e.next=7,(0,k.dX)("".concat(d._n,"/system/").concat(n.id,"/reports/"),{credentials:"include"});case 7:return e.t2=e.sent.data,e.t3=[e.t1,e.t2],e.next=11,e.t0.all.call(e.t0,e.t3);case 11:t=e.sent,r=(0,i.Z)(t,2),a=r[0],o=r[1],l=Oe(o),Te(l),L(we(l,{},$,R,ie,!0)),W("fulfilled"),V(l),ae(a),e.next=26;break;case 23:e.prev=23,e.t4=e.catch(0),W("failed");case 26:case"end":return e.stop()}}),e,null,[[0,23]])})));return function(){return e.apply(this,arguments)}}()()}),[]),g().createElement("div",{className:"ins-c-inventory-insights__overrides"},"pending"===O||"fulfilled"===O&&be||null===n.insights_id?g().createElement(h.Fragment,null):g().createElement(S.Z,{expandAll:{isAllExpanded:he,onClick:function(e,t){ge(t);var n=(0,l.Z)(R);n.map((function(e){Object.prototype.hasOwnProperty.call(e,"isOpen")&&(e.isOpen=t)})),L(n)}},actionsConfig:{actions:Pe},bulkSelect:je,filterConfig:{items:De},pagination:g().createElement(h.Fragment,null," ","".concat(ye,1===ye?" Recommendation":" Recommendations")," "),activeFiltersConfig:xe}),"pending"===O&&g().createElement(m.Card,null,g().createElement(m.CardBody,null,g().createElement(_.aV,null))),"fulfilled"===O&&(be?g().createElement(Z.Z,{icon:u.PficonSatelliteIcon,title:"Satellite managed system",text:g().createElement("span",{key:"satellite managed system"},'Insights results can not be displayed for this host, as the "Hide Satellite Managed Systems" setting has been enabled by an org admin.',g().createElement("br",null),"For more information on this setting and how to modify it,",g().createElement("a",{href:"https://access.redhat.com/solutions/4281761",rel:"noopener"}," ","Please visit this Knowledgebase article  ",g().createElement(u.ExternalLinkAltIcon,null)),".")}):F.length>0?g().createElement(h.Fragment,null,g().createElement(y.Table,{"aria-label":"report-table",onSelect:function(e,t,n){return L(we(F,z,$,R.map((function(e,r){return r===n?A(A({},e),{},{selected:t}):e})),ie))},onCollapse:function(e,t,n){var r=(0,l.Z)(R);r[t]=A(A({},r[t]),{},{isOpen:n}),L(r)},rows:R,cells:Se,sortBy:K,canSelectAll:!1,onSort:function(e,t,n){var r={1:"description",2:"publish_date",3:"total_risk",4:"has_playbook"},a=5===t?"resolution":"rule",o=function(e){return F.concat().sort((function(n,a){return n[e][r[t]]>a[e][r[t]]?1:a[e][r[t]]>n[e][r[t]]?-1:0}))},l=n===y.SortByDirection.asc?o(a):o(a).reverse();V(l),Q({index:t,direction:n}),L(we(l,z,$,R,ie))},variant:y.TableVariant.compact,isStickyHeader:!0},g().createElement(y.TableHeader,null),g().createElement(y.TableBody,null)),0===ye&&g().createElement(m.Card,null,g().createElement(m.CardBody,null,g().createElement(Z.Z,{title:"No matching recommendations found",text:"This filter criteria matches no recommendations. Try changing your filter settings."})))):null!==n.insights_id?g().createElement(m.Card,null,g().createElement(m.CardBody,null,g().createElement(Z.Z,{icon:u.CheckIcon,iconClass:"ins-c-insights__check",title:"No recommendations",text:"No known recommendations affect this system"}))):g().createElement(Z.Z,{iconClass:"chartSpikeIconColor",icon:u.ChartSpikeIcon,title:"Get started with Red Hat Insights",text:g().createElement(m.Bullseye,null,g().createElement(m.Stack,{hasGutter:!0},g().createElement(m.StackItem,null,"1. Install the client on the RHEL system.",g().createElement(m.ClipboardCopy,null,"yum install insights-client")),g().createElement(m.StackItem,null,"2. Register the system to Red Hat Insights.",g().createElement(m.ClipboardCopy,null,"insights-client --register"))))},g().createElement(m.Button,{component:"a",href:"https://access.redhat.com/products/red-hat-insights#getstarted",target:"_blank",variant:"primary"},"Getting started documentation"))),"failed"===O&&n&&g().createElement(m.Card,null,g().createElement(m.CardBody,null,g().createElement(Z.Z,{icon:u.TimesCircleIcon,title:"Error getting recommendations",text:n?"There was an error fetching recommendations for this entity. Refresh your page to try again.":"This entity can not be found or might no longer be registered to Red Hat Insights."}))))},R=function(e){var t=e.customItnl,n=e.intlProps,a=(0,r.Z)(e,W),o=t?f.Z:h.Fragment;return g().createElement(o,t&&A({locale:navigator.language.slice(0,2),messages:I.Z,onError:console.log},n),g().createElement(N,a))};const L=R;R.propTypes={customItnl:O().bool,intlProps:O().shape({locale:O().string,messages:O().array,onError:O().func})}},71094:(e,t,n)=>{"use strict";n.d(t,{Qi:()=>f,dX:()=>u,SO:()=>d,qb:()=>m,Sp:()=>p});var r=n(15861),a=n(87757),o=n.n(a),l=n(80129),i=n.n(l),c=n(9669),s=n.n(c),u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return s().get(e,{headers:t,params:n,paramsSerializer:function(e){return i().stringify(e,{arrayFormat:"repeat"})}})},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return s().post(e,n,{headers:t})},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return s().put(e,t,{headers:n})},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return s().delete(e,t,{headers:n})},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{baseUrl:""},t=e.baseUrl;return function(){var e=(0,r.Z)(o().mark((function e(n){var r,a,l,i,c,s,m,p,f;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.url,a=n.headers,l=n.options,i=n.search,c=n.method,e.next=3,insights.chrome.auth.getUser();case 3:if(void 0===c&&(c="get"),e.prev=4,"get"!==c){e.next=11;break}return e.next=8,u("".concat(t).concat(r,"?").concat(i?"".concat(i):""),a,l);case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=d("".concat(t).concat(r),a,l);case 12:return s=e.t0,e.abrupt("return",{data:s.data});case 16:return e.prev=16,e.t1=e.catch(4),f=e.t1,e.abrupt("return",{error:{status:null===(m=f.response)||void 0===m?void 0:m.status,data:null===(p=f.response)||void 0===p?void 0:p.data}});case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}()}},24654:()=>{}}]);
//# sourceMappingURL=../sourcemaps/575.613b3f6d0d8b0fe7cf2701d76c96cd06.js.map