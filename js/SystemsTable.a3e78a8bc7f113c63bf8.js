(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[993],{40444:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>J});var s=r(92137),n=r(96156),a=r(28481),i=r(87757),o=r.n(i),l=r(57149),c=r(59303),u=r(93264),m=r.n(u),f=r(94550),p=r(97109),d=r(88931),y=r(71094),v=r(33739),E=r(16530),g=r(46891),S=r(83808),h=r(85061),b=r(3968),_=r(74093),T=r(45697),O=r.n(T),w=r(51634),I=r(39080),P=r(87119),Z=r(75442),M=r(23992),R=r(71712),A=r(32412),k=r(30893);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=_.mM.create({bold:{fontWeight:M.default.value},link:{color:R.ZP.value},text:{marginTop:A.ZP.value},nameColumn:{width:"220px"},header:{fontSize:9,color:Z.ZP.value,paddingLeft:I.ZP.value,paddingBottom:w.ZP.value,paddingTop:P.ZP.value}}),F=function(e){var t=e.page,r=e.systems,s=e.intl,n=[{value:s.formatMessage(k.Z.name),style:j.nameColumn},{value:s.formatMessage(k.Z.recommendations),style:{width:"100px",textAlign:"center"}},{value:s.formatMessage(k.Z.critical),style:{width:"70px",textAlign:"center"}},{value:s.formatMessage(k.Z.important),style:{width:"70px",textAlign:"center"}},{value:s.formatMessage(k.Z.moderate),style:{width:"60px",textAlign:"center"}},{value:s.formatMessage(k.Z.low),style:{width:"90px",textAlign:"center"}},{value:s.formatMessage(k.Z.lastSeen),style:{marginLeft:"20px"}}],i=["hits","critical_hits","important_hits","moderate_hits","low_hits"],o=(0,h.Z)(r.map((function(e){var t=new Date(e.last_seen).toUTCString().split(" "),r=(0,a.Z)(t,5),s=r[1],n=r[2],o=r[3],l=r[4],u="".concat(s," ").concat(n," ").concat(o,", ").concat(l.split(":").slice(0,2).join(":")," UTC");return[m().createElement(_.xv,{key:e.system_uuid,style:j.nameColumn},m().createElement(_.rU,{style:j.link,src:"".concat(c.BASE_URI,"/insights/advisor/systems/").concat(e.system_uuid,"/")},e.display_name))].concat((0,h.Z)(i.map((function(t){return s=(r={style:{width:"10px"},value:e[t]}).value,n=r.style,m().createElement(_.xv,{style:n},s);var r,s,n}))),[m().createElement(_.xv,{key:e.last_seen,style:{width:"100px"}},"".concat(u))])})));return m().createElement(m().Fragment,{key:t},m().createElement(b.sg,null,m().createElement(b.iA,{withHeader:!0,rows:[n.map((function(e){return r=(t=e).value,s=t.style,m().createElement(_.xv,{style:C(C(C({},s),j.header),j.bold)},r);var t,r,s}))].concat((0,h.Z)(o))})))};F.propTypes={systems:O().object,page:O().number,intl:O().any};var L=function(e){var t=e.systemsTotal,r=e.systems,s=e.filters,n=e.tags,a=e.intl;return delete s.offset,delete s.limit,m().createElement(m().Fragment,{key:"".concat(a.formatMessage(k.Z.insightsHeader),": ").concat(a.formatMessage(k.Z.systems))},m().createElement(_.xv,{key:"sys-count",style:j.text},a.formatMessage(k.Z.sysTableCount,{systems:m().createElement(_.xv,{key:"sys-count-count",style:j.bold},a.formatMessage(k.Z.execReportHeaderSystems,{systems:t}),t>1e3&&a.formatMessage(k.Z.dueTo))})),m().createElement(_.xv,{key:"sys-filters",style:j.text},a.formatMessage(k.Z.filtersApplied)),m().createElement(_.xv,{key:"sys-filters-values",style:j.bold},Object.entries(s).map((function(e){return m().createElement(_.xv,{key:e},"".concat(e[0],": ").concat(e[1],"     "))}))),m().createElement(_.xv,{key:"sys-tags",style:j.text},a.formatMessage(k.Z.tagsApplied)),m().createElement(_.xv,{key:"sys-tags-values",style:j.bold},n?decodeURIComponent(n):a.formatMessage(k.Z.noTags)),m().createElement(b.$0,{key:"systems",title:"Systems"},F({systems:r,intl:a})))};L.propTypes={systems:O().object,systemsTotal:O().number,filters:O().object,tags:O().array,intl:O().any};var Y=r(86896);function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=function(e){var t=e.filters,r=(0,Y.Z)(),n=(0,u.useState)(!1),i=(0,a.Z)(n,2),l=i[0],f=i[1],v=(0,d.useSelector)((function(e){return e.AdvisorStore.selectedTags})),E=(0,d.useSelector)((function(e){return e.AdvisorStore.workloads})),g=(0,d.useSelector)((function(e){return e.AdvisorStore.SID})),S=function(){var e=(0,s.Z)(o().mark((function e(){var s,n,a,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),s=v.length&&{tags:v},E&&(s=G(G({},s),(0,p.s0)(E,g))),e.next=5,y.Z.get("".concat(c.BASE_URL,"/export/systems/"),{},G(G({},t),s));case 5:return n=e.sent.data,a=L({systemsTotal:null==n?void 0:n.length,systems:n.slice(0,18),filters:t,tags:v,intl:r}),i=n.slice(18,982).reduce((function(e,t,r){var s=Math.floor(r/31);return!e[s]&&(e[s]=[]),e[s].push(t),e}),[]),f(!1),e.abrupt("return",[a].concat((0,h.Z)(i.map((function(e,t){return F({page:t,systems:e,intl:r})})))));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.useMemo)((function(){return m().createElement(b.o6,{groupName:r.formatMessage(k.Z.redHatInsights),allPagesHaveTitle:!1,label:l?r.formatMessage(k.Z.loading):r.formatMessage(k.Z.exportPdf),asyncFunction:S,buttonProps:G({variant:"",component:"button",className:"pf-c-dropdown__menu-item systemsPdfOverride"},l?{isDisabled:!0}:null),reportName:"".concat(r.formatMessage(k.Z.insightsHeader),":"),type:r.formatMessage(k.Z.systems),fileName:"Advisor_systems--".concat((new Date).toUTCString().replace(/ /g,"-"),".pdf"),size:[841.89,595.28]})}),[l])};N.propTypes={filters:O().object,systemsCount:O().number};const H=N;var U=r(58921),V=r(67336),B=r(75989),W=r(43707);function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const J=function(){var e,t=(0,Y.Z)(),r=(0,d.useDispatch)(),i=(0,E.useLocation)().search,h=(0,d.useSelector)((function(e){return e.AdvisorStore.filtersSystems})),b=(0,d.useSelector)((function(e){return e.AdvisorStore.selectedTags})),_=(0,d.useSelector)((function(e){return e.AdvisorStore.workloads})),T=(0,d.useSelector)((function(e){return e.AdvisorStore.SID})),O=function(e){return r(l.aw(e))},w=(0,W.T)("advisor",c.PERMS.export).hasAccess,I=(0,u.useState)(!0),P=(0,a.Z)(I,2),Z=P[0],M=P[1],R=[{title:t.formatMessage(k.Z.numberRuleHits),transforms:[f.sortable,f.wrappable],key:"hits"},{title:t.formatMessage(k.Z.critical),transforms:[f.sortable,f.wrappable],key:"critical_hits"},{title:t.formatMessage(k.Z.important),transforms:[f.sortable,f.wrappable],key:"important_hits"},{title:t.formatMessage(k.Z.moderate),transforms:[f.sortable,f.wrappable],key:"moderate_hits"},{title:t.formatMessage(k.Z.low),transforms:[f.sortable,f.wrappable],key:"low_hits"}],A=function(e){var t=q(q({},h),{},{offset:0});delete t[e],"hits"===e&&void 0===t.hits&&(t.hits=["yes"]),O(t)},x=function(e,t){"hits"===e&&t.length>1&&t.includes("yes")&&t.shift(),t.length>0?O(q(q({},h),{},{offset:0},(0,n.Z)({},e,t))):A(e)},C=[{label:c.SYSTEM_FILTER_CATEGORIES.hits.title.toLowerCase(),type:c.SYSTEM_FILTER_CATEGORIES.hits.type,id:c.SYSTEM_FILTER_CATEGORIES.hits.urlParam,value:"checkbox-".concat(c.SYSTEM_FILTER_CATEGORIES.hits.urlParam),filterValues:{key:"".concat(c.SYSTEM_FILTER_CATEGORIES.hits.urlParam,"-filter"),onChange:function(e,t){return x(c.SYSTEM_FILTER_CATEGORIES.hits.urlParam,t)},value:h.hits,items:c.SYSTEM_FILTER_CATEGORIES.hits.values}},{label:c.SYSTEM_FILTER_CATEGORIES.incident.title.toLowerCase(),type:c.SYSTEM_FILTER_CATEGORIES.incident.type,id:c.SYSTEM_FILTER_CATEGORIES.incident.urlParam,value:"checkbox-".concat(c.SYSTEM_FILTER_CATEGORIES.incident.urlParam),filterValues:{key:"".concat(c.SYSTEM_FILTER_CATEGORIES.incident.urlParam,"-filter"),onChange:function(e,t){x(c.SYSTEM_FILTER_CATEGORIES.incident.urlParam,t)},value:h.incident,items:c.SYSTEM_FILTER_CATEGORIES.incident.values}},{label:c.SYSTEM_FILTER_CATEGORIES.rhel_version.title.toLowerCase(),type:c.SYSTEM_FILTER_CATEGORIES.rhel_version.type,id:c.SYSTEM_FILTER_CATEGORIES.rhel_version.urlParam,value:"checkbox-".concat(c.SYSTEM_FILTER_CATEGORIES.rhel_version.urlParam),filterValues:{key:"".concat(c.SYSTEM_FILTER_CATEGORIES.rhel_version.urlParam,"-filter"),onChange:function(e,t){x(c.SYSTEM_FILTER_CATEGORIES.rhel_version.urlParam,t)},value:h.rhel_version,items:c.SYSTEM_FILTER_CATEGORIES.rhel_version.values}}],j={deleteTitle:t.formatMessage(k.Z.resetFilters),filters:(e=q({},h),e.hits&&e.hits.includes("yes")&&delete e.hits,delete e.sort,delete e.offset,delete e.limit,(0,p.yK)(e,c.SYSTEM_FILTER_CATEGORIES)),onDelete:function(e,t,r){r?O({sort:h.sort,limit:h.limit,offset:h.offset,hits:["yes"]}):t.map((function(e){var t=(0,n.Z)({},e.urlParam,Array.isArray(h[e.urlParam])?h[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?O(q(q({},h),t)):A(e.urlParam)}))}},F=function(e){var t=e.display_name,r=e.hits,s=q(q(q({},e),t&&{display_name:t}),r&&{hits:r});(0,p.Y4)(s,b)};return(0,u.useEffect)((function(){var e;if(i){var t=(0,p.yG)();delete t.tags,void 0!==t.sort&&(t.sort=t.sort[0]),void 0!==t.display_name&&(t.display_name=t.display_name[0]),void 0===t.hits&&(t.hits=["all"]),void 0===t.offset||isNaN(t.offset)?t.offset=0:t.offset=Number(t.offset[0]),void 0===t.limit||isNaN(t.limit)?t.limit=20:t.limit=Number(t.limit[0]),e=q(q({},h),t),void 0!==t.incident&&!Array.isArray(t.incident)&&(t.incident=["".concat(t.incident)]),O(e)}else void 0!==h.limit&&void 0!==h.offset&&void 0!==h.hits||(e=q(q({},h),{},{offset:0,limit:20,hits:["all"]}),O(e));M(!1),(0,p.Y4)(e,b)}),[]),!Z&&m().createElement(v.Z,{hideFilters:{all:!0,name:!1},initialLoading:!0,autoRefresh:!0,disableDefaultColumns:!0,customFilters:{advisorFilters:h,selectedTags:b,workloads:_,SID:T},columns:function(e){return function(e){var t=e.filter((function(e){return"updated"===e.key})),r=e.filter((function(e){return"display_name"===e.key})),s=e.filter((function(e){return"system_profile"===e.key}));return r=q(q({},r[0]),{},{transforms:[f.sortable,f.wrappable],props:{isStatic:!0},renderFunc:function(e,t,r){return m().createElement(m().Fragment,null,m().createElement(E.Link,{key:t,to:"/systems/".concat(r.system_uuid)},"".concat(r.display_name," ")),r.incident_hits>0&&m().createElement(S.Z,{rule:{tags:"incident"}}))}}),t=q(q({},t[0]),{},{transforms:[f.sortable,f.wrappable],props:{width:20}}),[r,s=q(q({},s[0]),{},{transforms:[f.wrappable]})].concat(R,[t])}(e)},onLoad:function(e){var t=e.mergeWithEntities,r=e.INVENTORY_ACTION_TYPES,s=e.mergeWithDetail;(0,V.JH)().register(q(q({},t((0,B.Vy)([],r),{page:Number(h.offset/h.limit+1||1),perPage:Number(h.limit||20)})),s()))},getEntities:function(){var e=(0,s.Z)(o().mark((function e(t,r,s,n){var a,i,l,u,m,f,d,v,E,g,S,h,b,_,T,O;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m=r.per_page,f=r.page,d=r.orderBy,v=r.orderDirection,E=r.advisorFilters,g=r.selectedTags,S=r.workloads,h=r.SID,b="".concat("ASC"===v?"":"-").concat("updated"===d?"last_seen":d),_=q(q(q(q(q({},E),{},{limit:m,offset:f*m-m,sort:b},r.filters.hostnameOrId&&{display_name:null==r||null===(a=r.filters)||void 0===a?void 0:a.hostnameOrId}),Array.isArray(E.incident)&&{incident:null==E||null===(i=E.incident)||void 0===i?void 0:i.join(",")}),Array.isArray(E.rhel_version)&&{rhel_version:null===(l=E.rhel_version)||void 0===l?void 0:l.join(",")}),g.length&&{tags:g}),S&&(_=q(q({},_),(0,p.s0)(S,h))),e.next=6,y.Z.get(c.SYSTEMS_FETCH_URL,{},_);case 6:if(e.t1=u=e.sent,e.t0=null===e.t1,e.t0){e.next=10;break}e.t0=void 0===u;case 10:if(!e.t0){e.next=14;break}e.t2=void 0,e.next=15;break;case 14:e.t2=u.data;case 15:return T=e.t2,F(_),e.next=19,n(T.data.map((function(e){return e.system_uuid})),{page:f,per_page:m,hasItems:!0,fields:{system_profile:["operating_system"]}},s);case 19:return O=e.sent,e.abrupt("return",Promise.resolve({results:(0,p.E9)(T.data,O.results),total:T.meta.count}));case 21:case"end":return e.stop()}}),e)})));return function(t,r,s,n){return e.apply(this,arguments)}}(),tableProps:{isStickyHeader:!0,variant:f.TableVariant.compact},isFullView:!0,hasCheckbox:!1,filterConfig:{items:C},activeFiltersConfig:j,exportConfig:{onSelect:function(e,t){return(0,U.Z)("systems",t,h,b,_,T)},extraItems:[m().createElement("li",{key:"download-pd",role:"menuitem"},m().createElement(H,{filters:q({},(0,p.qW)(h))}))],isDisabled:!w,tooltipText:w?t.formatMessage(k.Z.exportData):t.formatMessage(k.Z.permsAction)},fallback:g.Z})}}}]);
//# sourceMappingURL=../sourcemaps/SystemsTable.886ef54d19c3a19886fb.js.map