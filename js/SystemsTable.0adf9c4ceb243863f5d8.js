(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[993],{40444:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>q});var s=r(92137),a=r(96156),n=r(28481),o=r(87757),i=r.n(o),l=r(57149),c=r(59303),u=r(93264),f=r.n(u),m=r(94550),p=r(97109),y=r(88931),d=r(71094),g=r(33739),v=r(46891),b=r(85061),h=r(3968),E=r(74093),S=r(45697),O=r.n(S),w=r(51634),Z=r(39080),_=r(87119),T=r(75442),P=r(23992),x=r(71712),k=r(32412),M=r(30893);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C=E.mM.create({bold:{fontWeight:P.default.value},link:{color:x.ZP.value},text:{marginTop:k.ZP.value},nameColumn:{width:"220px"},header:{fontSize:9,color:T.ZP.value,paddingLeft:Z.ZP.value,paddingBottom:w.ZP.value,paddingTop:_.ZP.value}}),I=function(e){var t=e.page,r=e.systems,s=e.intl,a=[{value:s.formatMessage(M.Z.name),style:C.nameColumn},{value:s.formatMessage(M.Z.recommendations),style:{width:"100px",textAlign:"center"}},{value:s.formatMessage(M.Z.critical),style:{width:"70px",textAlign:"center"}},{value:s.formatMessage(M.Z.important),style:{width:"70px",textAlign:"center"}},{value:s.formatMessage(M.Z.moderate),style:{width:"60px",textAlign:"center"}},{value:s.formatMessage(M.Z.low),style:{width:"90px",textAlign:"center"}},{value:s.formatMessage(M.Z.lastSeen),style:{marginLeft:"20px"}}],o=["hits","critical_hits","important_hits","moderate_hits","low_hits"],i=(0,b.Z)(r.map((function(e){var t=new Date(e.last_seen).toUTCString().split(" "),r=(0,n.Z)(t,5),s=r[1],a=r[2],i=r[3],l=r[4],c="".concat(s," ").concat(a," ").concat(i,", ").concat(l.split(":").slice(0,2).join(":")," UTC");return[f().createElement(E.xv,{key:e.system_uuid,style:C.nameColumn},f().createElement(E.rU,{style:C.link,src:"https://cloud.redhat.com/insights/advisor/systems/".concat(e.system_uuid,"/")},e.display_name))].concat((0,b.Z)(o.map((function(t){return s=(r={style:{width:"10px"},value:e[t]}).value,a=r.style,f().createElement(E.xv,{style:a},s);var r,s,a}))),[f().createElement(E.xv,{key:e.last_seen,style:{width:"100px"}},"".concat(c))])})));return f().createElement(f().Fragment,{key:t},f().createElement(h.sg,null,f().createElement(h.iA,{withHeader:!0,rows:[a.map((function(e){return r=(t=e).value,s=t.style,f().createElement(E.xv,{style:A(A(A({},s),C.header),C.bold)},r);var t,r,s}))].concat((0,b.Z)(i))})))};I.propTypes={systems:O().object,page:O().number,intl:O().any};var D=function(e){var t=e.systemsTotal,r=e.systems,s=e.filters,a=e.tags,n=e.intl;return delete s.offset,delete s.limit,f().createElement(f().Fragment,{key:"".concat(n.formatMessage(M.Z.insightsHeader),": ").concat(n.formatMessage(M.Z.systems))},f().createElement(E.xv,{key:"sys-count",style:C.text},n.formatMessage(M.Z.sysTableCount,{systems:f().createElement(E.xv,{key:"sys-count-count",style:C.bold},n.formatMessage(M.Z.execReportHeaderSystems,{systems:t}),t>1e3&&n.formatMessage(M.Z.dueTo))})),f().createElement(E.xv,{key:"sys-filters",style:C.text},n.formatMessage(M.Z.filtersApplied)),f().createElement(E.xv,{key:"sys-filters-values",style:C.bold},Object.entries(s).map((function(e){return f().createElement(E.xv,{key:e},"".concat(e[0],": ").concat(e[1],"     "))}))),f().createElement(E.xv,{key:"sys-tags",style:C.text},n.formatMessage(M.Z.tagsApplied)),f().createElement(E.xv,{key:"sys-tags-values",style:C.bold},a?decodeURIComponent(a):n.formatMessage(M.Z.noTags)),f().createElement(h.$0,{key:"systems",title:"Systems"},I({systems:r,intl:n})))};D.propTypes={systems:O().object,systemsTotal:O().number,filters:O().object,tags:O().array,intl:O().any};var R=r(86896);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=function(e){var t=e.filters,r=(0,R.Z)(),a=(0,u.useState)(!1),o=(0,n.Z)(a,2),l=o[0],m=o[1],g=(0,y.useSelector)((function(e){return e.AdvisorStore.selectedTags})),v=(0,y.useSelector)((function(e){return e.AdvisorStore.workloads})),E=(0,y.useSelector)((function(e){return e.AdvisorStore.SID})),S=function(){var e=(0,s.Z)(i().mark((function e(){var s,a,n,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),s=g.length&&{tags:g},v&&(s=L(L({},s),(0,p.s0)(v,E))),e.next=5,d.Z.get("".concat(c.BASE_URL,"/export/systems/"),{},L(L({},t),s));case 5:return a=e.sent.data,n=D({systemsTotal:null==a?void 0:a.length,systems:a.slice(0,18),filters:t,tags:g,intl:r}),o=a.slice(18,982).reduce((function(e,t,r){var s=Math.floor(r/31);return!e[s]&&(e[s]=[]),e[s].push(t),e}),[]),m(!1),e.abrupt("return",[n].concat((0,b.Z)(o.map((function(e,t){return I({page:t,systems:e,intl:r})})))));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.useMemo)((function(){return f().createElement(h.o6,{groupName:r.formatMessage(M.Z.redHatInsights),allPagesHaveTitle:!1,label:l?r.formatMessage(M.Z.loading):r.formatMessage(M.Z.exportPdf),asyncFunction:S,buttonProps:L({variant:"",component:"button",className:"pf-c-dropdown__menu-item systemsPdfOverride"},l?{isDisabled:!0}:null),reportName:"".concat(r.formatMessage(M.Z.insightsHeader),":"),type:r.formatMessage(M.Z.systems),fileName:"Advisor_systems--".concat((new Date).toUTCString().replace(/ /g,"-"),".pdf"),size:[841.89,595.28]})}),[l])};N.propTypes={filters:O().object,systemsCount:O().number};const Y=N;var H=r(58921),G=r(67336),U=r(75989),V=r(16530),W=r(43707);function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const q=function(){var e,t=(0,R.Z)(),r=(0,y.useDispatch)(),o=(0,V.useLocation)().search,b=(0,y.useSelector)((function(e){return e.AdvisorStore.filtersSystems})),h=(0,y.useSelector)((function(e){return e.AdvisorStore.selectedTags})),E=(0,y.useSelector)((function(e){return e.AdvisorStore.workloads})),S=(0,y.useSelector)((function(e){return e.AdvisorStore.SID})),O=function(e){return r(l.aw(e))},w=(0,W.T)("advisor",c.PERMS.export).hasAccess,Z=(0,u.useState)(!0),_=(0,n.Z)(Z,2),T=_[0],P=_[1],x=[{title:t.formatMessage(M.Z.numberRuleHits),transforms:[m.sortable,m.wrappable],key:"hits"},{title:t.formatMessage(M.Z.critical),transforms:[m.sortable,m.wrappable],key:"critical_hits"},{title:t.formatMessage(M.Z.important),transforms:[m.sortable,m.wrappable],key:"important_hits"},{title:t.formatMessage(M.Z.moderate),transforms:[m.sortable,m.wrappable],key:"moderate_hits"},{title:t.formatMessage(M.Z.low),transforms:[m.sortable,m.wrappable],key:"low_hits"}],k=function(e){var t=z(z({},b),{},{offset:0});delete t[e],"hits"===e&&void 0===t.hits&&(t.hits=["yes"]),O(t)},j=[{label:c.SYSTEM_FILTER_CATEGORIES.hits.title.toLowerCase(),type:c.SYSTEM_FILTER_CATEGORIES.hits.type,id:c.SYSTEM_FILTER_CATEGORIES.hits.urlParam,value:"checkbox-".concat(c.SYSTEM_FILTER_CATEGORIES.hits.urlParam),filterValues:{key:"".concat(c.SYSTEM_FILTER_CATEGORIES.hits.urlParam,"-filter"),onChange:function(e,t){return function(e,t){"hits"===e&&t.length>1&&t.includes("yes")&&t.shift(),t.length>0?O(z(z({},b),{},{offset:0},(0,a.Z)({},e,t))):k(e)}(c.SYSTEM_FILTER_CATEGORIES.hits.urlParam,t)},value:b.hits,items:c.SYSTEM_FILTER_CATEGORIES.hits.values}}],A={deleteTitle:t.formatMessage(M.Z.resetFilters),filters:(e=z({},b),e.hits&&e.hits.includes("yes")&&delete e.hits,delete e.sort,delete e.offset,delete e.limit,(0,p.yK)(e,c.SYSTEM_FILTER_CATEGORIES)),onDelete:function(e,t,r){r?O({sort:b.sort,limit:b.limit,offset:b.offset,hits:["yes"]}):t.map((function(e){var t=(0,a.Z)({},e.urlParam,Array.isArray(b[e.urlParam])?b[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?O(z(z({},b),t)):k(e.urlParam)}))}},C=function(e){var t=e.limit,r=e.offset,s=e.sort,a=e.display_name,n=e.hits,o=z(z({limit:t,offset:r,sort:s},a&&{display_name:a}),n&&{hits:n});(0,p.Y4)(o,h)};return(0,u.useEffect)((function(){var e;if(o){var t=(0,p.yG)();delete t.tags,void 0!==t.sort&&(t.sort=t.sort[0]),void 0!==t.display_name&&(t.display_name=t.display_name[0]),void 0===t.hits&&(t.hits=["all"]),void 0===t.offset||isNaN(t.offset)?t.offset=0:t.offset=Number(t.offset[0]),void 0===t.limit||isNaN(t.limit)?t.limit=20:t.limit=Number(t.limit[0]),e=z(z({},b),t),O(e)}else void 0!==b.limit&&void 0!==b.offset&&void 0!==b.hits||(e=z(z({},b),{},{offset:0,limit:20,hits:["all"]}),O(e));P(!1),(0,p.Y4)(e,h)}),[]),!T&&f().createElement(g.Z,{hideFilters:{all:!0,name:!1},initialLoading:!0,autoRefresh:!0,disableDefaultColumns:!0,customFilters:{advisorFilters:b,selectedTags:h,workloads:E,SID:S},columns:function(e){return function(e){var t=e.filter((function(e){return"updated"===e.key})),r=e.filter((function(e){return"display_name"===e.key})),s=e.filter((function(e){return"system_profile"===e.key}));return r=z(z({},r[0]),{},{transforms:[m.sortable,m.wrappable],props:{isStatic:!0}}),t=z(z({},t[0]),{},{transforms:[m.sortable,m.wrappable],props:{width:20}}),[r,s=z(z({},s[0]),{},{transforms:[m.wrappable]})].concat(x,[t])}(e)},onLoad:function(e){var t=e.mergeWithEntities,r=e.INVENTORY_ACTION_TYPES,s=e.mergeWithDetail;(0,G.JH)().register(z(z({},t((0,U.Vy)([],r),{page:Number(b.offset/b.limit+1||1),perPage:Number(b.limit||20)})),s()))},getEntities:function(){var e=(0,s.Z)(i().mark((function e(t,r,s,a){var n,o,l,u,f,m,y,g,v,b,h,E,S,O;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=r.per_page,u=r.page,f=r.orderBy,m=r.orderDirection,y=r.advisorFilters,g=r.selectedTags,v=r.workloads,b=r.SID,h="".concat("ASC"===m?"":"-").concat("updated"===f?"last_seen":f),E=z(z(z({},y),{},{limit:l,offset:u*l-l,sort:h},r.filters.hostnameOrId&&{display_name:null==r||null===(n=r.filters)||void 0===n?void 0:n.hostnameOrId}),g.length&&{tags:g}),v&&(E=z(z({},E),(0,p.s0)(v,b))),e.next=6,d.Z.get(c.SYSTEMS_FETCH_URL,{},E);case 6:if(e.t1=o=e.sent,e.t0=null===e.t1,e.t0){e.next=10;break}e.t0=void 0===o;case 10:if(!e.t0){e.next=14;break}e.t2=void 0,e.next=15;break;case 14:e.t2=o.data;case 15:return S=e.t2,C(E),e.next=19,a(S.data.map((function(e){return e.system_uuid})),{page:u,per_page:l,hasItems:!0,fields:{system_profile:["operating_system"]}},s);case 19:return O=e.sent,e.abrupt("return",Promise.resolve({results:(0,p.E9)(S.data,O.results),total:S.meta.count}));case 21:case"end":return e.stop()}}),e)})));return function(t,r,s,a){return e.apply(this,arguments)}}(),tableProps:{isStickyHeader:!0,variant:m.TableVariant.compact},isFullView:!0,hasCheckbox:!1,filterConfig:{items:j},activeFiltersConfig:A,exportConfig:{onSelect:function(e,t){return(0,H.Z)("systems",t,b,h,E,S)},extraItems:[f().createElement("li",{key:"download-pd",role:"menuitem"},f().createElement(Y,{filters:z({},(0,p.qW)(b))}))],isDisabled:!w,tooltipText:w?t.formatMessage(M.Z.exportData):t.formatMessage(M.Z.permsAction)},fallback:v.Z})}}}]);
//# sourceMappingURL=../sourcemaps/SystemsTable.cfdd9b3afbf3b850eb3d.js.map