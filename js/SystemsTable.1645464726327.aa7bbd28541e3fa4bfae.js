"use strict";(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[3993],{71712:(e,t)=>{t.tK={name:"--pf-global--link--Color",value:"#2b9af3",var:"var(--pf-global--link--Color)"},t.ZP=t.tK},32412:(e,t)=>{t._p={name:"--pf-global--spacer--md",value:"1rem",var:"var(--pf-global--spacer--md)"},t.ZP=t._p},67265:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(93264),a=r.n(n);const s=function(e){var t=e.component,r=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["component"]);return(0,n.useEffect)((function(){console.error("Unable to load inventory component. Failed to load ".concat(t,"."),r)}),[]),a().createElement("div",null,a().createElement("h1",null,"Unable to load inventory component"),a().createElement("h2",null,"Failed to load ",t),a().createElement("code",null,"More info can be found in browser console output."))}},33739:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(93264),a=r.n(n),s=r(45697),o=r.n(s),i=r(54025),l=r(75662),c=r(28216),u=r(84669),f=r(67265),m=function(){return(m=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},p=function(e){var t=(0,l.useHistory)(),r=(0,c.useStore)();return a().createElement(n.Suspense,{fallback:e.fallback},a().createElement(i.ScalprumComponent,m({history:t,store:r,appName:"inventory",module:"./InventoryTable",scope:"inventory",ErrorComponent:a().createElement(f.Z,m({component:"InventoryDetailHead",history:t,store:r},e)),ref:e.innerRef},e)))};p.propTypes={fallback:o().node,innerRef:o().object};var d=a().forwardRef((function(e,t){return a().createElement(p,m({innerRef:t},e))}));d.propTypes={fallback:o().node},d.defaultProps={fallback:a().createElement(u.Bullseye,{className:"pf-u-p-lg"},a().createElement(u.Spinner,{size:"xl"}))};const y=d},58921:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(4942),a=r(15861),s=r(87757),o=r.n(s),i=r(53446),l=r(35240),c=r(59303),u=r(71094),f=r(97109);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t={date:(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc"};return"Insights-Advisor_".concat(e,"--").concat(t.date)};const y=function(){var e=(0,a.Z)(o().mark((function e(t,r,n,a,s,m,y,v){var g,b,h;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!y){e.next=5;break}g="json"===r?y:(o=y,[Object.keys(o[0])].concat(o).map((function(e){return Object.values(e).map((function(e){return"string"==typeof e?JSON.stringify(e):e})).toString()})).join("\n")),e.next=11;break;case 5:return b=(null==a?void 0:a.length)&&{tags:a},s&&(b=p(p({},b),(0,f.s0)(s,m))),v((0,i.addNotification)(c.LH.pending)),e.next=10,(0,u.dX)("".concat(c._n,"/export/").concat(t,".").concat("json"===r?"json":"csv"),{},p(p({},n),b)).then((function(e){return v((0,i.addNotification)(c.LH.success)),e})).catch((function(){return v((0,i.addNotification)(c.LH.error))}));case 10:g=e.sent.data;case 11:h="json"===r?JSON.stringify(g):g,(0,l.Sv)(h,d(t),r),e.next=18;break;case 15:throw e.prev=15,e.t0=e.catch(0),"".concat(e.t0);case 18:case"end":return e.stop()}var o}),e,null,[[0,15]])})));return function(t,r,n,a,s,o,i,l){return e.apply(this,arguments)}}()},17603:(e,t,r)=>{r.r(t),r.d(t,{default:()=>q});var n=r(15861),a=r(4942),s=r(70885),o=r(87757),i=r.n(o),l=r(59303),c=r(93264),u=r.n(c),f=r(27577),m=r(97109),p=r(28216),d=r(71094),y=r(33739),v=r(75662),g=r(46891),b=r(87516),h=r(42982),O=r(3968),w=r(74093),P=r(45697),j=r.n(P),k=r(51634),Z=r(39080),x=r(87119),E=r(75442),S=r(23992),_=r(71712),T=r(32412),D=r(30893);function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C=w.mM.create({bold:{fontWeight:S.default.value},link:{color:_.ZP.value},text:{marginTop:T.ZP.value},nameColumn:{width:"220px"},header:{fontSize:9,color:E.ZP.value,paddingLeft:Z.ZP.value,paddingBottom:k.ZP.value,paddingTop:x.ZP.value}}),A=function(e){var t=e.page,r=e.systems,n=e.intl,a=[{value:n.formatMessage(D.Z.name),style:C.nameColumn},{value:n.formatMessage(D.Z.recommendations),style:{width:"100px",textAlign:"center"}},{value:n.formatMessage(D.Z.critical),style:{width:"70px",textAlign:"center"}},{value:n.formatMessage(D.Z.important),style:{width:"70px",textAlign:"center"}},{value:n.formatMessage(D.Z.moderate),style:{width:"60px",textAlign:"center"}},{value:n.formatMessage(D.Z.low),style:{width:"90px",textAlign:"center"}},{value:n.formatMessage(D.Z.lastSeen),style:{marginLeft:"20px"}}],o=["hits","critical_hits","important_hits","moderate_hits","low_hits"],i=(0,h.Z)(r.map((function(e){var t=new Date(e.last_seen).toUTCString().split(" "),r=(0,s.Z)(t,5),n=r[1],a=r[2],i=r[3],c=r[4],f="".concat(n," ").concat(a," ").concat(i,", ").concat(c.split(":").slice(0,2).join(":")," UTC");return[u().createElement(w.xv,{key:e.system_uuid,style:C.nameColumn},u().createElement(w.rU,{style:C.link,src:"".concat(l.eR,"/insights/advisor/systems/").concat(e.system_uuid,"/")},e.display_name))].concat((0,h.Z)(o.map((function(t){return n=(r={style:{width:"10px"},value:e[t]}).value,a=r.style,u().createElement(w.xv,{style:a},n);var r,n,a}))),[u().createElement(w.xv,{key:e.last_seen,style:{width:"100px"}},"".concat(f))])})));return u().createElement(u().Fragment,{key:t},u().createElement(O.sg,null,u().createElement(O.iA,{withHeader:!0,rows:[a.map((function(e){return r=(t=e).value,n=t.style,u().createElement(w.xv,{style:U(U(U({},n),C.header),C.bold)},r);var t,r,n}))].concat((0,h.Z)(i))})))};A.propTypes={systems:j().object,page:j().number,intl:j().any};var N=function(e){var t=e.systemsTotal,r=e.systems,n=e.filters,a=e.tags,s=e.intl;return delete n.offset,delete n.limit,u().createElement(u().Fragment,{key:"".concat(s.formatMessage(D.Z.insightsHeader),": ").concat(s.formatMessage(D.Z.systems))},u().createElement(w.xv,{key:"sys-count",style:C.text},s.formatMessage(D.Z.sysTableCount,{systems:u().createElement(w.xv,{key:"sys-count-count",style:C.bold},s.formatMessage(D.Z.execReportHeaderSystems,{systems:t}),t>1e3&&s.formatMessage(D.Z.dueTo))})),u().createElement(w.xv,{key:"sys-filters",style:C.text},s.formatMessage(D.Z.filtersApplied)),u().createElement(w.xv,{key:"sys-filters-values",style:C.bold},Object.entries(n).map((function(e){return u().createElement(w.xv,{key:e},"".concat(e[0],": ").concat(e[1],"     "))}))),u().createElement(w.xv,{key:"sys-tags",style:C.text},s.formatMessage(D.Z.tagsApplied)),u().createElement(w.xv,{key:"sys-tags-values",style:C.bold},a?decodeURIComponent(a):s.formatMessage(D.Z.noTags)),u().createElement(O.$0,{key:"systems",title:"Systems"},A({systems:r,intl:s})))};N.propTypes={systems:j().object,systemsTotal:j().number,filters:j().object,tags:j().array,intl:j().any};var I=r(86896);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=function(e){var t=e.filters,r=(0,I.Z)(),a=(0,c.useState)(!1),o=(0,s.Z)(a,2),f=o[0],y=o[1],v=(0,p.useSelector)((function(e){return e.AdvisorStore.selectedTags})),g=(0,p.useSelector)((function(e){return e.AdvisorStore.workloads})),b=(0,p.useSelector)((function(e){return e.AdvisorStore.SID})),w=function(){var e=(0,n.Z)(i().mark((function e(){var n,a,s,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),n=(null==v?void 0:v.length)&&{tags:v},g&&(n=H(H({},n),(0,m.s0)(g,b))),e.next=5,(0,d.dX)("".concat(l._n,"/export/systems/"),{},H(H({},t),n));case 5:return a=e.sent.data,s=N({systemsTotal:null==a?void 0:a.length,systems:a.slice(0,18),filters:t,tags:v,intl:r}),o=a.slice(18,982).reduce((function(e,t,r){var n=Math.floor(r/31);return!e[n]&&(e[n]=[]),e[n].push(t),e}),[]),y(!1),e.abrupt("return",[s].concat((0,h.Z)(o.map((function(e,t){return A({page:t,systems:e,intl:r})})))));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,c.useMemo)((function(){return u().createElement(O.o6,{groupName:r.formatMessage(D.Z.redHatInsights),allPagesHaveTitle:!1,label:f?r.formatMessage(D.Z.loading):r.formatMessage(D.Z.exportPdf),asyncFunction:w,buttonProps:H({variant:"",component:"button",className:"pf-c-dropdown__menu-item systemsPdfOverride"},f?{isDisabled:!0}:null),reportName:"".concat(r.formatMessage(D.Z.insightsHeader),":"),type:r.formatMessage(D.Z.systems),fileName:"Advisor_systems--".concat((new Date).toUTCString().replace(/ /g,"-"),".pdf"),size:[841.89,595.28]})}),[f])};L.propTypes={filters:j().object,systemsCount:j().number};const R=L;var V=r(58921),B=r(46655),W=r(41131),z=r(28672),Y=r(43707),K=r(84669);const X=function(){return u().createElement(K.Bullseye,null,u().createElement(K.EmptyState,{variant:K.EmptyStateVariant.full},u().createElement(K.Title,{headingLevel:"h2",size:"lg",style:{fontWeight:"bold"}},"No matching systems found"),u().createElement(K.EmptyStateBody,null,u().createElement(K.TextContent,null,u().createElement(K.Text,{component:K.TextVariants.p},"To continue, edit your filter settings and search again.")))))};function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const q=function(){var e,t=(0,I.Z)(),r=(0,p.useDispatch)(),o=(0,p.useStore)(),h=(0,v.useLocation)().search,O=(0,p.useSelector)((function(e){return e.filters.selectedTags})),w=(0,p.useSelector)((function(e){return e.filters.workloads})),P=(0,p.useSelector)((function(e){return e.filters.SID})),j=(0,p.useSelector)((function(e){return e.filters.sysState})),k=function(e){return r((0,z.pu)(e))},Z=(0,Y.T)("advisor",l.Gd.export).hasAccess,x=(0,c.useState)(!0),E=(0,s.Z)(x,2),S=E[0],_=E[1],T=[{title:t.formatMessage(D.Z.numberRuleHits),transforms:[f.sortable,f.wrappable],key:"hits"},{title:t.formatMessage(D.Z.critical),transforms:[f.sortable,f.wrappable],key:"critical_hits"},{title:t.formatMessage(D.Z.important),transforms:[f.sortable,f.wrappable],key:"important_hits"},{title:t.formatMessage(D.Z.moderate),transforms:[f.sortable,f.wrappable],key:"moderate_hits"},{title:t.formatMessage(D.Z.low),transforms:[f.sortable,f.wrappable],key:"low_hits"}],M=function(e){var t=J(J({},j),{},{offset:0});delete t[e],"hits"===e&&void 0===t.hits&&(t.hits=["yes"]),k(t)},U=function(e,t){"hits"===e&&t.length>1&&t.includes("yes")&&t.shift(),t.length>0?k(J(J({},j),{},{offset:0},(0,a.Z)({},e,t))):M(e)},C=[{label:l.Ut.hits.title.toLowerCase(),type:l.Ut.hits.type,id:l.Ut.hits.urlParam,value:"checkbox-".concat(l.Ut.hits.urlParam),filterValues:{key:"".concat(l.Ut.hits.urlParam,"-filter"),onChange:function(e,t){return U(l.Ut.hits.urlParam,t)},value:j.hits,items:l.Ut.hits.values}},{label:l.Ut.incident.title.toLowerCase(),type:l.Ut.incident.type,id:l.Ut.incident.urlParam,value:"checkbox-".concat(l.Ut.incident.urlParam),filterValues:{key:"".concat(l.Ut.incident.urlParam,"-filter"),onChange:function(e,t){U(l.Ut.incident.urlParam,t)},value:j.incident,items:l.Ut.incident.values}},{label:l.Ut.rhel_version.title.toLowerCase(),type:l.Ut.rhel_version.type,id:l.Ut.rhel_version.urlParam,value:"checkbox-".concat(l.Ut.rhel_version.urlParam),filterValues:{key:"".concat(l.Ut.rhel_version.urlParam,"-filter"),onChange:function(e,t){U(l.Ut.rhel_version.urlParam,t)},value:j.rhel_version,items:l.Ut.rhel_version.values}}],A={deleteTitle:t.formatMessage(D.Z.resetFilters),filters:(e=J({},j),e.hits&&e.hits.includes("yes")&&delete e.hits,delete e.sort,delete e.offset,delete e.limit,(0,m.yK)(e,l.Ut)),onDelete:function(e,t,r){r?k({sort:j.sort,limit:j.limit,offset:j.offset,hits:["all"]}):t.map((function(e){var t=(0,a.Z)({},e.urlParam,Array.isArray(j[e.urlParam])?j[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?k(J(J({},j),t)):M(e.urlParam)}))}},N=function(e){var t=e.display_name,r=e.hits,n=J(J(J({},e),t&&{display_name:t}),r&&{hits:r});(0,m.Y4)(n,O)};return(0,c.useEffect)((function(){var e;if(h){var t=(0,m.yG)();delete t.tags,void 0!==t.sort&&(t.sort=t.sort[0]),void 0!==t.display_name&&(t.display_name=t.display_name[0]),void 0===t.hits&&(t.hits=["all"]),void 0===t.offset||isNaN(t.offset)?t.offset=0:t.offset=Number(t.offset[0]),void 0===t.limit||isNaN(t.limit)?t.limit=20:t.limit=Number(t.limit[0]),e=J(J({},j),t),void 0!==t.incident&&!Array.isArray(t.incident)&&(t.incident=["".concat(t.incident)]),k(e)}else void 0!==j.limit&&void 0!==j.offset&&void 0!==j.hits||(e=J(J({},j),{},{offset:0,limit:20,hits:["all"]}),k(e));_(!1),(0,m.Y4)(e,O)}),[]),!S&&u().createElement(y.Z,{hideFilters:{all:!0,name:!1},initialLoading:!0,autoRefresh:!0,disableDefaultColumns:!0,customFilters:{advisorFilters:j,selectedTags:O,workloads:w,SID:P},columns:function(e){return function(e){var t=e.filter((function(e){return"updated"===e.key})),r=e.filter((function(e){return"display_name"===e.key})),n=e.filter((function(e){return"system_profile"===e.key}));return r=J(J({},r[0]),{},{transforms:[f.sortable,f.wrappable],props:{isStatic:!0},renderFunc:function(e,t,r){return u().createElement(u().Fragment,null,u().createElement(v.Link,{key:t,to:"/systems/".concat(r.system_uuid)},"".concat(r.display_name," ")),r.incident_hits>0&&u().createElement(b.Z,{rule:{tags:"incident"}}))}}),t=J(J({},t[0]),{},{transforms:[f.sortable,f.wrappable],props:{width:20}}),[r,n=J(J({},n[0]),{},{transforms:[f.wrappable]})].concat(T,[t])}(e)},onLoad:function(e){var t=e.mergeWithEntities,r=e.INVENTORY_ACTION_TYPES,n=e.mergeWithDetail;o.replaceReducer((0,W.U)(J(J({},t((0,B.V)([],r),{page:Number(j.offset/j.limit+1||1),perPage:Number(j.limit||20)})),n())))},getEntities:function(){var e=(0,n.Z)(i().mark((function e(t,r,n,a){var s,o,c,u,f,p,y,v,g,b,h,O,w,P,j,k;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f=r.per_page,p=r.page,y=r.orderBy,v=r.orderDirection,g=r.advisorFilters,b=r.selectedTags,h=r.workloads,O=r.SID,w="".concat("ASC"===v?"":"-").concat("updated"===y?"last_seen":y),P=J(J(J(J(J({},g),{},{limit:f,offset:p*f-f,sort:w},r.filters.hostnameOrId&&{display_name:null==r||null===(s=r.filters)||void 0===s?void 0:s.hostnameOrId}),Array.isArray(g.incident)&&{incident:null==g||null===(o=g.incident)||void 0===o?void 0:o.join(",")}),Array.isArray(g.rhel_version)&&{rhel_version:null===(c=g.rhel_version)||void 0===c?void 0:c.join(",")}),(null==b?void 0:b.length)&&{tags:b}),h&&(P=J(J({},P),(0,m.s0)(h,O))),e.next=6,(0,d.dX)(l.Vo,{},P);case 6:if(e.t1=u=e.sent,e.t0=null===e.t1,e.t0){e.next=10;break}e.t0=void 0===u;case 10:if(!e.t0){e.next=14;break}e.t2=void 0,e.next=15;break;case 14:e.t2=u.data;case 15:return j=e.t2,N(P),e.next=19,a(j.data.map((function(e){return e.system_uuid})),{page:p,per_page:f,hasItems:!0,fields:{system_profile:["operating_system"]}},n);case 19:return k=e.sent,e.abrupt("return",Promise.resolve({results:(0,m.E9)(j.data,k.results),total:j.meta.count}));case 21:case"end":return e.stop()}}),e)})));return function(t,r,n,a){return e.apply(this,arguments)}}(),tableProps:{isStickyHeader:!0,variant:f.TableVariant.compact},isFullView:!0,hasCheckbox:!1,filterConfig:{items:C},activeFiltersConfig:A,noSystemsTable:X,exportConfig:{onSelect:function(e,t){return(0,V.Z)("systems",t,j,O,w,P,null,r)},extraItems:[u().createElement("li",{key:"download-pd",role:"menuitem"},u().createElement(R,{filters:J({},(0,m.qW)(j))}))],isDisabled:!Z,tooltipText:Z?t.formatMessage(D.Z.exportData):t.formatMessage(D.Z.permsAction)},fallback:g.Z})}}}]);
//# sourceMappingURL=../sourcemaps/SystemsTable.8699f81ad4448b34c3df5187e238d5a0.js.map