(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[3993],{40444:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>K});var s=r(96156),a=r(28481),n=(r(88777),r(57149)),o=r(59845),i=r(59303),l=r(93264),c=r.n(l),f=r(97109),u=r(77121),m=r(76341),p=r(33739),d=r(46891),y=r(85061),g=r(92137),v=r(87757),b=r.n(v),h=(r(86496),r(94627)),E=r(69891),S=r(45697),_=r.n(S),O=r(51634),A=r(39080),w=r(87119),Z=r(75442),x=r(23992),C=r(71712),P=r(32412),T=r(30893);function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=E.mM.create({bold:{fontWeight:x.default.value},link:{color:C.ZP.value},text:{marginTop:P.ZP.value},nameColumn:{width:"220px"},header:{fontSize:9,color:Z.ZP.value,paddingLeft:A.ZP.value,paddingBottom:O.ZP.value,paddingTop:w.ZP.value}}),D=function(e){var t=e.page,r=e.systems,s=e.intl,n=[{value:s.formatMessage(T.Z.name),style:j.nameColumn},{value:s.formatMessage(T.Z.recommendations),style:{width:"100px",textAlign:"center"}},{value:s.formatMessage(T.Z.critical),style:{width:"70px",textAlign:"center"}},{value:s.formatMessage(T.Z.important),style:{width:"70px",textAlign:"center"}},{value:s.formatMessage(T.Z.moderate),style:{width:"60px",textAlign:"center"}},{value:s.formatMessage(T.Z.low),style:{width:"90px",textAlign:"center"}},{value:s.formatMessage(T.Z.lastSeen),style:{marginLeft:"20px"}}],o=["hits","critical_hits","important_hits","moderate_hits","low_hits"],i=(0,y.Z)(r.map((function(e){var t=new Date(e.last_seen).toUTCString().split(" "),r=(0,a.Z)(t,5),s=r[1],n=r[2],i=r[3],l=r[4],f="".concat(s," ").concat(n," ").concat(i,", ").concat(l.split(":").slice(0,2).join(":")," UTC");return[c().createElement(E.xv,{key:e.system_uuid,style:j.nameColumn},c().createElement(E.rU,{style:j.link,src:"https://cloud.redhat.com/insights/advisor/systems/".concat(e.system_uuid,"/")},e.display_name))].concat((0,y.Z)(o.map((function(t){return s=(r={style:{width:"10px"},value:e[t]}).value,a=r.style,c().createElement(E.xv,{style:a},s);var r,s,a}))),[c().createElement(E.xv,{key:e.last_seen,style:{width:"100px"}},"".concat(f))])})));return c().createElement(c().Fragment,{key:t},c().createElement(h.sg,null,c().createElement(h.iA,{withHeader:!0,rows:[n.map((function(e){return r=(t=e).value,s=t.style,c().createElement(E.xv,{style:k(k(k({},s),j.header),j.bold)},r);var t,r,s}))].concat((0,y.Z)(i))})))};D.propTypes={systems:_().object,page:_().number,intl:_().any};var R=function(e){var t=e.systemsTotal,r=e.systems,s=e.filters,a=e.tags,n=e.intl;return delete s.offset,delete s.limit,c().createElement(c().Fragment,{key:"".concat(n.formatMessage(T.Z.insightsHeader),": ").concat(n.formatMessage(T.Z.systems))},c().createElement(E.xv,{key:"sys-count",style:j.text},n.formatMessage(T.Z.sysTableCount,{systems:c().createElement(E.xv,{key:"sys-count-count",style:j.bold},n.formatMessage(T.Z.execReportHeaderSystems,{systems:t}),t>1e3&&n.formatMessage(T.Z.dueTo))})),c().createElement(E.xv,{key:"sys-filters",style:j.text},n.formatMessage(T.Z.filtersApplied)),c().createElement(E.xv,{key:"sys-filters-values",style:j.bold},Object.entries(s).map((function(e){return c().createElement(E.xv,{key:e},"".concat(e[0],": ").concat(e[1],"     "))}))),c().createElement(E.xv,{key:"sys-tags",style:j.text},n.formatMessage(T.Z.tagsApplied)),c().createElement(E.xv,{key:"sys-tags-values",style:j.bold},a?decodeURIComponent(a):n.formatMessage(T.Z.noTags)),c().createElement(h.$0,{key:"systems",title:"Systems"},D({systems:r,intl:n})))};R.propTypes={systems:_().object,systemsTotal:_().number,filters:_().object,tags:_().array,intl:_().any};var I=r(71094),F=r(86896);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=function(e){var t=e.filters,r=(0,F.Z)(),s=(0,l.useState)(!1),n=(0,a.Z)(s,2),o=n[0],m=n[1],p=(0,u.useSelector)((function(e){return e.AdvisorStore.selectedTags})),d=(0,u.useSelector)((function(e){return e.AdvisorStore.workloads})),v=(0,u.useSelector)((function(e){return e.AdvisorStore.SID})),E=function(){var e=(0,g.Z)(b().mark((function e(){var s,a,n,o;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),s=p.length&&{tags:p},d&&(s=B(B({},s),(0,f.s0)(d,v))),e.next=5,I.Z.get("".concat(i.BASE_URL,"/export/systems/"),{},B(B({},t),s));case 5:return a=e.sent.data,n=R({systemsTotal:null==a?void 0:a.length,systems:a.slice(0,18),filters:t,tags:p,intl:r}),o=a.slice(18,982).reduce((function(e,t,r){var s=Math.floor(r/31);return!e[s]&&(e[s]=[]),e[s].push(t),e}),[]),m(!1),e.abrupt("return",[n].concat((0,y.Z)(o.map((function(e,t){return D({page:t,systems:e,intl:r})})))));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,l.useMemo)((function(){return c().createElement(h.o6,{groupName:r.formatMessage(T.Z.redHatInsights),allPagesHaveTitle:!1,label:o?r.formatMessage(T.Z.loading):r.formatMessage(T.Z.exportPdf),asyncFunction:E,buttonProps:B({variant:"",component:"button",className:"pf-c-dropdown__menu-item systemsPdfOverride"},o?{isDisabled:!0}:null),reportName:"".concat(r.formatMessage(T.Z.insightsHeader),":"),type:r.formatMessage(T.Z.systems),fileName:"Advisor_systems--".concat((new Date).toUTCString().replace(/ /g,"-"),".pdf"),size:[841.89,595.28]})}),[o])};N.propTypes={filters:_().object,systemsCount:_().number};const Y=N;var H=r(40609),G=r(58921),U=r(67336),z=r(75989),V=r(16530),W=r(43707);function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const K=function(){var e,t,r,y,g=(0,F.Z)(),v=(0,u.useDispatch)(),b=(0,V.useLocation)().search,h=(0,u.useSelector)((function(e){return e.AdvisorStore.systems})),E=(0,u.useSelector)((function(e){return e.AdvisorStore.systemsFetchStatus})),S=(0,u.useSelector)((function(e){return e.AdvisorStore.filtersSystems})),_=(0,u.useSelector)((function(e){return e.AdvisorStore.selectedTags})),O=(0,u.useSelector)((function(e){return e.AdvisorStore.workloads})),A=(0,u.useSelector)((function(e){return e.AdvisorStore.SID})),w=function(e){return v(n.aw(e))},Z=(0,W.T)("advisor",i.PERMS.export).hasAccess,x=(0,l.useRef)(null),C=h.meta?h.meta.count:0,P=(0,l.useState)(S.display_name||""),M=(0,a.Z)(P,2),k=M[0],j=M[1],D=(0,H.Z)(k,i.DEBOUNCE_DELAY),R=(0,l.useState)(!0),I=(0,a.Z)(R,2),L=I[0],B=I[1],N={0:"display_name",1:"hits",2:"critical_hits",3:"important_hits",4:"moderate_hits",5:"low_hits",6:"last_seen"},q=(0,l.useCallback)((function(){(0,f.Y4)(S,_);var e,t=_.length&&{tags:_};return O&&(t=J(J({},t),(0,f.s0)(O,A))),e=J(J({},(0,f.qW)(S)),t),v(n.lc(e))}),[_,O,A,S,v]),K=function(e){var t=J(J({},S),{},{offset:0});"text"===e&&j(""),delete t[e],"hits"===e&&void 0===t.hits&&(t.hits=["yes"]),w(t)},$=[{label:g.formatMessage(T.Z.name).toLowerCase(),filterValues:{key:"text-filter",onChange:function(e,t){return j(t)},value:k}},{label:i.SYSTEM_FILTER_CATEGORIES.hits.title,type:i.SYSTEM_FILTER_CATEGORIES.hits.type,id:i.SYSTEM_FILTER_CATEGORIES.hits.urlParam,value:"checkbox-".concat(i.SYSTEM_FILTER_CATEGORIES.hits.urlParam),filterValues:{key:"".concat(i.SYSTEM_FILTER_CATEGORIES.hits.urlParam,"-filter"),onChange:function(e,t){return function(e,t){"hits"===e&&t.length>1&&t.includes("yes")&&t.shift(),t.length>0?w(J(J({},S),{},{offset:0},(0,s.Z)({},e,t))):K(e)}(i.SYSTEM_FILTER_CATEGORIES.hits.urlParam,t)},value:S.hits,items:i.SYSTEM_FILTER_CATEGORIES.hits.values}}],Q={deleteTitle:g.formatMessage(T.Z.resetFilters),filters:(e=J({},S),e.hits&&e.hits.includes("yes")&&delete e.hits,delete e.sort,delete e.offset,delete e.limit,(0,f.yK)(e,i.SYSTEM_FILTER_CATEGORIES)),onDelete:function(e,t,r){r?(j(""),w({sort:S.sort,limit:S.limit,offset:S.offset,hits:["yes"]})):t.map((function(e){var t=(0,s.Z)({},e.urlParam,Array.isArray(S[e.urlParam])?S[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?w(J(J({},S),t)):K(e.urlParam)}))}};return(0,l.useEffect)((function(){void 0===S.display_name?j(""):j(S.display_name)}),[S.display_name]),(0,l.useEffect)((function(){if(!L&&"pending"!==E){var e=J({},S);delete e.display_name,w(J(J(J({},e),k.length?{display_name:k}:{}),{},{offset:0}))}}),[D]),(0,l.useEffect)((function(){if(b&&L){var e=(0,f.yG)();delete e.tags,void 0!==e.sort&&(e.sort=e.sort[0]),void 0!==e.display_name&&(e.display_name=e.display_name[0]),void 0===e.hits&&(e.hits=["all"]),void 0===e.offset?e.offset=0:e.offset=Number(e.offset[0]),void 0===e.limit?e.limit=10:e.limit=Number(e.limit[0]),w(J(J({},S),e))}else void 0!==S.limit&&void 0!==S.offset&&void 0!==S.hits||w(J(J({},S),{},{offset:0,limit:10,hits:["all"]}));B(!1)}),[]),(0,l.useEffect)((function(){!L&&"pending"!==E&&null!==_&&q()}),[q,L,S,_]),"failed"!==E?c().createElement(p.Z,{tableProps:{isStickyHeader:!0},ref:x,items:("pending"!==E&&h&&h.data||[]).map((function(e){return J(J({},e),{},{id:e.system_uuid})})),isFullView:!0,sortBy:(r=Number(null===(t=Object.entries(N))||void 0===t?void 0:t.find((function(e){return e[1]===S.sort||"-".concat(e[1])===S.sort}))[0]),y="-"===S.sort[0]?"desc":"asc",{index:r,key:6!==r?N[r]:"updated",direction:y}),onSort:function(e){var t=e.index,r=e.direction,s="".concat("asc"===r?"":"-").concat(N[t]);w(J(J({},S),{},{sort:s,offset:0}))},hasCheckbox:!1,page:S.offset/S.limit+1,total:C,isLoaded:"fulfilled"===E,perPage:Number(S.limit),onRefresh:function(e){if("fulfilled"===E){var t=S.offset,r=S.limit;e.page*e.per_page-e.per_page===t&&r===e.per_page||w(J(J({},S),{},{limit:e.per_page,offset:e.page*e.per_page-e.per_page}))}},filterConfig:{items:$},activeFiltersConfig:Q,exportConfig:{onSelect:function(e,t){return(0,G.Z)("systems",t,S,_,O,A)},extraItems:[c().createElement("li",{key:"download-pd",role:"menuitem"},c().createElement(Y,{filters:J({},(0,f.qW)(S))}))],isDisabled:!Z,tooltipText:Z?g.formatMessage(T.Z.exportData):g.formatMessage(T.Z.permsAction)},fallback:d.Z,onLoad:function(e){var t=e.mergeWithEntities,r=e.INVENTORY_ACTION_TYPES,s=[{title:g.formatMessage(T.Z.name),transforms:[o.sortable,o.cellWidth(80)],key:"display_name"},{title:g.formatMessage(T.Z.numberRuleHits),transforms:[o.sortable,o.wrappable],key:"hits"},{title:g.formatMessage(T.Z.critical),transforms:[o.sortable,o.wrappable],key:"critical_hits"},{title:g.formatMessage(T.Z.important),transforms:[o.sortable,o.wrappable],key:"important_hits"},{title:g.formatMessage(T.Z.moderate),transforms:[o.sortable,o.wrappable],key:"moderate_hits"},{title:g.formatMessage(T.Z.low),transforms:[o.sortable,o.wrappable],key:"low_hits"},{title:g.formatMessage(T.Z.lastSeen),transforms:[o.sortable,o.wrappable],key:"updated"}];(0,U.JH)().register(J({},t((0,z.Vy)([].concat(s),r))))}}):"failed"===E&&c().createElement(m.Z,{message:g.formatMessage(T.Z.systemTableFetchError)})}},8292:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(94015),a=r.n(s),n=r(23645),o=r.n(n)()(a());o.push([e.id,".advisor .systemsPdfOverride{text-align:left !important;border-radius:0 !important}\n","",{version:3,sources:["webpack://./src/PresentationalComponents/Export/_Export.scss"],names:[],mappings:"AAAA,6BACoB,0BAA0B,CAAC,0BAA0B",sourcesContent:[".advisor{\n.systemsPdfOverride{text-align:left !important;border-radius:0 !important}\n\n}"],sourceRoot:""}]);const i=o},71467:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(94015),a=r.n(s),n=r(23645),o=r.n(n)()(a());o.push([e.id,".advisor .pf-c-table__sort-indicator{margin-left:var(--pf-global--spacer--xs)}.advisor .pf-c-table th,.advisor td{padding-right:0px !important}.advisor .pf-c-table tr>:last-child{padding-left:var(--pf-global--spacer--xs)}.advisor .pf-c-table .pf-c-table__sort{min-width:initial}.advisor table.ins-c-entity-table.pf-c-table .ins-composed-col *{font-size:var(--pf-global--FontSize--md)}\n","",{version:3,sources:["webpack://./src/PresentationalComponents/SystemsTable/SystemsTable.scss"],names:[],mappings:"AAAA,qCAC4B,wCAAwC,CADpE,oCACuF,4BAA4B,CADnH,oCAC+I,yCAAyC,CADxL,uCACuN,iBAAiB,CADxO,iEACiS,wCAAwC",sourcesContent:[".advisor{\n.pf-c-table__sort-indicator{margin-left:var(--pf-global--spacer--xs)}.pf-c-table th,td{padding-right:0px !important}.pf-c-table tr>:last-child{padding-left:var(--pf-global--spacer--xs)}.pf-c-table .pf-c-table__sort{min-width:initial}table.ins-c-entity-table.pf-c-table .ins-composed-col *{font-size:var(--pf-global--FontSize--md)}\n\n}"],sourceRoot:""}]);const i=o},86496:(e,t,r)=>{"use strict";var s=r(93379),a=r.n(s),n=r(8292),o=a()(n.default,{insert:"head",singleton:!1});if(!n.default.locals||e.hot.invalidate){var i=n.default.locals;e.hot.accept(8292,(t=>{n=r(8292),function(e,t,r){if(!e&&t||e&&!t)return!1;var s;for(s in e)if(e[s]!==t[s])return!1;for(s in t)if(!e[s])return!1;return!0}(i,n.default.locals)?(i=n.default.locals,o(n.default)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),n.default.locals},88777:(e,t,r)=>{"use strict";var s=r(93379),a=r.n(s),n=r(71467),o=a()(n.default,{insert:"head",singleton:!1});if(!n.default.locals||e.hot.invalidate){var i=n.default.locals;e.hot.accept(71467,(t=>{n=r(71467),function(e,t,r){if(!e&&t||e&&!t)return!1;var s;for(s in e)if(e[s]!==t[s])return!1;for(s in t)if(!e[s])return!1;return!0}(i,n.default.locals)?(i=n.default.locals,o(n.default)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),n.default.locals}}]);
//# sourceMappingURL=../sourcemaps/SystemsTable.7c8faa9f36d86419c84f.js.map