(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[889,910,33],{33033:(e,t,n)=>{"use strict";n.d(t,{default:()=>r.Z});var r=n(42544)},15910:(e,t,n)=>{"use strict";n.d(t,{default:()=>j});var r=n(81253),a=n(92137),l=n(96156),o=n(85061),i=n(28481),s=n(87757),c=n.n(s),u=n(93179),m=n(59303),d=n(90847),f=n(93264),p=n.n(f),E=n(74057),h=n(88931),g=n(71094),y=n(64107),b=n(90693),k=n(24561),_=n(34702),v=n(81790),I=n(49953),T=n(33033),S=n(71355),C=n(97109),R=n(30893),O=n(45697),Z=n.n(O),L=n(86896),P=n(29558),A=["customItnl","intlProps"];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=function(){var e=(0,L.Z)(),t=(0,h.useDispatch)(),n=(0,h.useSelector)((function(e){return e.entityDetails.entity})),r=(0,h.useSelector)((function(e){var t=e.systemProfileStore;return t?t.systemProfile:{}})),s=(0,h.useSelector)((function(e){return e.routerData})),O=(0,f.useState)("pending"),Z=(0,i.Z)(O,2),P=Z[0],A=Z[1],w=(0,f.useState)([]),x=(0,i.Z)(w,2),G=x[0],j=x[1],D=(0,f.useState)([]),B=(0,i.Z)(D,2),N=B[0],M=B[1],H=(0,f.useState)([]),V=(0,i.Z)(H,2),K=V[0],U=V[1],q=(0,f.useState)({}),z=(0,i.Z)(q,2),W=z[0],J=z[1],$=(0,f.useState)({}),Q=(0,i.Z)($,2),X=Q[0],Y=Q[1],ee=(0,f.useState)({}),te=(0,i.Z)(ee,2),ne=te[0],re=te[1],ae=(0,f.useState)(""),le=(0,i.Z)(ae,2),oe=le[0],ie=le[1],se=(0,f.useState)(!1),ce=(0,i.Z)(se,2),ue=ce[0],me=ce[1],de=G?G.length/2:0,fe=r&&r.satellite_managed||!1,pe=!ne.show_satellite_hosts&&fe,Ee=function(e){return e.filter((function(e){return e.selected}))},he=Ee(G).filter((function(e){return e.resolution&&e.resolution.has_playbook})),ge=Ee(G).length,ye=G.filter((function(e){return e.resolution&&e.resolution.has_playbook})).length,be=[{title:""},{title:e.formatMessage(R.Z.topicAddEditDescription),transforms:[E.sortable]},{title:e.formatMessage(R.Z.added),transforms:[E.sortable,(0,E.cellWidth)(15)]},{title:e.formatMessage(R.Z.totalRisk),transforms:[E.sortable]},{title:p().createElement("span",null,u.AnsibeTowerIcon&&p().createElement(u.AnsibeTowerIcon,{size:"md"})," ",e.formatMessage(R.Z.ansible)),transforms:[E.sortable,E.fitContent],dataLabel:e.formatMessage(R.Z.ansible)}],ke=function(e){var t="insights-expand-all"===e,n=(0,o.Z)(G);n.map((function(e,n){Object.prototype.hasOwnProperty.call(e,"isOpen")&&(e.isOpen=t,t&&Ie(null,n,t))})),j(n)},_e=[p().createElement(I.Z,{key:"remediation-button",isDisabled:0===he.length,dataProvider:function(){return Pe(he)},onRemediationCreated:function(e){return n=e.getNotification(),t((0,S.wN)(n));var n}},u.AnsibeTowerIcon&&p().createElement(u.AnsibeTowerIcon,{size:"sm",className:"ins-c-background__default"})," ","Remediate"),{label:"Collapse all",onClick:function(){return ke("insights-collapse-all")}},{label:"Expand all",onClick:function(){return ke("insights-expand-all")}}],ve=function(e){var t=(0,o.Z)(e),n=s&&void 0!==s.params?e.findIndex((function(e){return e.rule.rule_id===s.params.id})):-1,r=t.splice(n,1);return-1!==n?[r[0]].concat((0,o.Z)(t)):e},Ie=function(e,t,n){var r=(0,o.Z)(G);r[t]=F(F({},r[t]),{},{isOpen:n}),j(r)},Te=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",l=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=e.flatMap((function(e,o){var i=e.rule,s=e.resolution,c=Object.keys(t).length?t.filter((function(t){return t.id===e.rule.node_id}))[0]:{},f=r.filter((function(e,t){return t%2==0&&e.rule.rule_id===i.rule_id&&e})),E=!!f.length&&f[0].selected,h=r.length?!!f.length&&f[0].isOpen:0===o,g=[{rule:i,resolution:s,isOpen:h,selected:E,cells:[{title:p().createElement("div",null,s.has_playbook?p().createElement("input",{"aria-label":"select-checkbox",type:"checkbox",checked:!!E,onChange:function(e){return Le(e,!E,i)},className:"pf-c-check"}):"")},{title:p().createElement("div",null," ",i.description)},{title:p().createElement("div",{key:o},p().createElement(y.Z,{date:i.publish_date,type:"relative",tooltipProps:{position:d.TooltipPosition.bottom}}))},{title:p().createElement("div",{key:o,style:{verticalAlign:"top"}},p().createElement(d.Tooltip,{key:o,position:d.TooltipPosition.bottom,content:p().createElement("span",null,"The ",p().createElement("strong",null,"likelihood")," that this will be a problem is ",m.LIKELIHOOD_LABEL[i.likelihood],". The"," ",p().createElement("strong",null,"impact")," of the problem would be  ",m.IMPACT_LABEL[i.impact.impact]," if it occurred.")},p().createElement(b.Z,{value:i.total_risk})))},{title:p().createElement("div",{className:"ins-c-center-text",key:o},s.has_playbook?p().createElement(u.CheckCircleIcon,{className:"successColorOverride"}):"No")}]},{parent:o,fullWidth:!0,cells:[{title:p().createElement(T.default,{key:"child-".concat(o),report:e,kbaDetail:c,kbaLoading:l})}]}],k=0===a.length||i.description.toLowerCase().includes(a.toLowerCase()),_=0===Object.keys(n).length||Object.keys(n).map((function(t){var r=n[t],a={has_playbook:e.resolution.has_playbook,publish_date:i.publish_date,total_risk:i.total_risk,category:m.RULE_CATEGORIES[i.category.name.toLowerCase()]};return r.find((function(e){return String(e)===String(a[t])}))})).every((function(e){return e}));return k&&_?g:[]}));return o.forEach((function(e,t){return e.parent?e.parent=t-1:null})),o},Se=function(e){me(e),j(Te(N,K,X,G.map((function(t,n){return n%2==0&&t.resolution.has_playbook?F(F({},t),{},{selected:e}):t})),oe))},Ce={items:[{title:"Select none",onClick:function(){return Se(!1)}},{title:"Select all",onClick:function(){return Se(!0)}}],count:ge,checked:ge===ye,onSelect:function(){return Se(!ue)}},Re={deleteTitle:e.formatMessage(R.Z.resetFilters),filters:function(e){var t=Object.entries(e),n=e&&t.length>0?t.map((function(e){var t=m.FILTER_CATEGORIES[e[0]],n=e[1].map((function(e){return{name:t.values.find((function(t){return t.value===String(e)})).label,value:e}}));return{category:(0,C.kC)(t.title),chips:n,urlParam:t.urlParam}})):[];return oe.length>0&&n.push({category:"Description",chips:[{name:oe,value:oe}]}),n}(X),onDelete:function(e,t,n){n?(j(Te(N,K,{},G,"")),Y({}),ie("")):t.map((function(e){"Description"===e.category?(j(Te(N,K,X,G,"")),ie("")):Ze(e.urlParam,X[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})))}))}},Oe=function(){var e=(0,a.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return e.rule.node_id})).filter((function(e){return e})),e.prev=1,e.next=4,g.Z.get("https://access.redhat.com/hydra/rest/search/kcs?q=id:(".concat(n.join(" OR "),")&fl=view_uri,id,publishedTitle&rows=").concat(n.length,"&redhat_client=$ADVISOR"),{},{credentials:"include"});case 4:r=e.sent.data.response.docs,U(r),j(Te(t,r,X,G,oe)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0,"KBA fetch failed.");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),Ze=function(e,t){var n=t.length>0?F(F({},X),(0,l.Z)({},e,t)):function(e){var t=F({},X);return delete t[e],t}(e);j(Te(N,K,n,G,oe)),Y(n)},Le=function(e,t,n){j(Te(N,K,X,G.map((function(e){return e.rule&&e.rule.rule_id===n.rule_id?F(F({},e),{},{selected:t}):F({},e)})),oe))},Pe=function(e){var t=e.filter((function(e){return e.resolution&&e.resolution.has_playbook})).map((function(e){return{id:"advisor:".concat(e.rule.rule_id),description:e.rule.description}}));return!!t.length&&{issues:t,systems:[n.id]}},Ae=[{label:"description",filterValues:{key:"text-filter",onChange:function(e,t){return function(e){var t=Te(N,K,X,G,e);ie(e),j(t)}(t)},value:oe}},{label:m.FILTER_CATEGORIES.total_risk.title,type:m.FILTER_CATEGORIES.total_risk.type,id:m.FILTER_CATEGORIES.total_risk.urlParam,value:"checkbox-".concat(m.FILTER_CATEGORIES.total_risk.urlParam),filterValues:{key:"".concat(m.FILTER_CATEGORIES.total_risk.urlParam,"-filter"),onChange:function(e,t){return Ze(m.FILTER_CATEGORIES.total_risk.urlParam,t)},value:X.total_risk,items:m.FILTER_CATEGORIES.total_risk.values}},{label:m.FILTER_CATEGORIES.category.title,type:m.FILTER_CATEGORIES.category.type,id:m.FILTER_CATEGORIES.category.urlParam,value:"checkbox-".concat(m.FILTER_CATEGORIES.category.urlParam),filterValues:{key:"".concat(m.FILTER_CATEGORIES.category.urlParam,"-filter"),onChange:function(e,t){return Ze(m.FILTER_CATEGORIES.category.urlParam,t)},value:X.category,items:m.FILTER_CATEGORIES.category.values}},{label:m.FILTER_CATEGORIES.has_playbook.title,type:m.FILTER_CATEGORIES.has_playbook.type,id:m.FILTER_CATEGORIES.has_playbook.urlParam,value:"checkbox-".concat(m.FILTER_CATEGORIES.has_playbook.urlParam),filterValues:{key:"".concat(m.FILTER_CATEGORIES.has_playbook.urlParam,"-filter"),onChange:function(e,t){return Ze(m.FILTER_CATEGORIES.has_playbook.urlParam,t)},value:X.has_playbook,items:m.FILTER_CATEGORIES.has_playbook.values}}];return(0,f.useEffect)((function(){!function(){var e=(0,a.Z)(c().mark((function e(){var t,r,a,l,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=Promise,e.next=4,g.Z.get("".concat(m.BASE_URL,"/account_setting/"),{credentials:"include"});case 4:return e.t1=e.sent.data,e.next=7,g.Z.get("".concat(m.BASE_URL,"/system/").concat(n.id,"/reports/"),{credentials:"include"});case 7:return e.t2=e.sent.data,e.t3=[e.t1,e.t2],e.next=11,e.t0.all.call(e.t0,e.t3);case 11:t=e.sent,r=(0,i.Z)(t,2),a=r[0],l=r[1],o=ve(l),Oe(o),j(Te(o,{},X,G,oe,!0)),A("fulfilled"),M(o),re(a),e.next=26;break;case 23:e.prev=23,e.t4=e.catch(0),A("failed");case 26:case"end":return e.stop()}}),e,null,[[0,23]])})));return function(){return e.apply(this,arguments)}}()()}),[]),p().createElement("div",{className:"ins-c-inventory-insights__overrides"},"pending"===P||"fulfilled"===P&&pe||null===n.insights_id?p().createElement(f.Fragment,null):p().createElement(v.Z,{actionsConfig:{actions:_e},bulkSelect:Ce,filterConfig:{items:Ae},pagination:p().createElement(p().Fragment,null," ","".concat(de,1===de?" Recommendation":" Recommendations")," "),activeFiltersConfig:Re}),"pending"===P&&p().createElement(d.Card,null,p().createElement(d.CardBody,null,p().createElement(k.aV,null))),"fulfilled"===P&&(pe?p().createElement(_.Z,{icon:u.PficonSatelliteIcon,title:"Satellite managed system",text:p().createElement("span",{key:"satellite managed system"},'Insights results can not be displayed for this host, as the "Hide Satellite Managed Systems" setting has been enabled by an org admin.',p().createElement("br",null),"For more information on this setting and how to modify it,",p().createElement("a",{href:"https://access.redhat.com/solutions/4281761",rel:"noopener"}," ","Please visit this Knowledgebase article  ",p().createElement(u.ExternalLinkAltIcon,null)),".")}):N.length>0?p().createElement(f.Fragment,null,p().createElement(E.Table,{"aria-label":"rule-table",onCollapse:Ie,rows:G,cells:be,sortBy:W,canSelectAll:!1,onSort:function(e,t,n){var r={2:"description",3:"publish_date",4:"total_risk",5:"has_playbook"},a=5===t?"resolution":"rule",l=function(e){return N.concat().sort((function(n,a){return n[e][r[t]]>a[e][r[t]]?1:a[e][r[t]]>n[e][r[t]]?-1:0}))},o=n===E.SortByDirection.asc?l(a):l(a).reverse();M(o),J({index:t,direction:n}),j(Te(o,K,X,G,oe))},isStickyHeader:!0},p().createElement(E.TableHeader,null),p().createElement(E.TableBody,null)),0===de&&p().createElement(d.Card,null,p().createElement(d.CardBody,null,p().createElement(_.Z,{title:"No matching recommendations found",text:"This filter criteria matches no recommendations. Try changing your filter settings."})))):null!==n.insights_id?p().createElement(d.Card,null,p().createElement(d.CardBody,null,p().createElement(_.Z,{icon:u.CheckIcon,iconClass:"ins-c-insights__check",title:"No recommendations",text:"No known recommendations affect this system"}))):p().createElement(_.Z,{iconClass:"chartSpikeIconColor",icon:u.ChartSpikeIcon,title:"Get started with Red Hat Insights",text:p().createElement(d.Bullseye,null,p().createElement(d.Stack,{hasGutter:!0},p().createElement(d.StackItem,null,"1. Install the client on the RHEL system.",p().createElement(d.ClipboardCopy,null,"yum install insights-client")),p().createElement(d.StackItem,null,"2. Register the system to Red Hat Insights.",p().createElement(d.ClipboardCopy,null,"insights-client --register"))))},p().createElement(d.Button,{component:"a",href:"https://access.redhat.com/products/red-hat-insights#getstarted",target:"_blank",variant:"primary"},"Getting started documentation"))),"failed"===P&&n&&p().createElement(_.Z,{icon:u.TimesCircleIcon,title:"Error getting recommendations",text:n?"There was an error fetching recommendations for this entity. Refresh your page to try again.":"This entity can not be found or might no longer be registered to Red Hat Insights."}))},G=function(e){var t=e.customItnl,n=e.intlProps,a=(0,r.Z)(e,A),l=t?P.Z:f.Fragment;return p().createElement(l,t&&F({locale:navigator.language.slice(0,2),messages:R.Z,onError:console.log},n),p().createElement(x,a))};const j=G;G.propTypes={customItnl:Z().bool,intlProps:Z().shape({locale:Z().string,messages:Z().array,onError:Z().func})}},36491:(e,t,n)=>{"use strict";n.r(t);var r=n(93264),a=n.n(r),l=n(3644),o=n.n(l),i=n(87999),s=n(16354),c=n(71355),u=n(45697),m=n.n(u),d=n(88931),f=n(16530),p=n(35240),E=n(61380),h=n(94500),g=n.n(h),y=n(31806),b=function(e){var t=e.useLogger;return a().createElement(s.Pj,{locale:navigator.language.slice(0,2),messages:y,onError:console.log},a().createElement(d.Provider,{store:(t?(0,E.S1)(g()):(0,E.S1)()).getStore()},a().createElement(f.BrowserRouter,{basename:(0,p.eb)(window.location.pathname)},a().createElement(a().Fragment,null,a().createElement(c.qJ,null),a().createElement(i.Z,null)))))};b.propTypes={useLogger:m().bool},b.defaultProps={useLogger:!1};const k=b;o().render(a().createElement(k,null),document.getElementById("root"))}}]);
//# sourceMappingURL=../sourcemaps/889.8a295c6330cf3f049e36.js.map