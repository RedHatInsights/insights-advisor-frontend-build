(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[993],{40444:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>K});var s=r(96156),a=r(28481),n=r(57149),o=r(9942),i=r(59303),l=r(93264),c=r.n(l),u=r(97109),f=r(88931),m=r(76341),p=r(33739),d=r(46891),y=r(85061),g=r(92137),v=r(87757),h=r.n(v),b=r(3968),E=r(74093),S=r(45697),O=r.n(S),_=r(51634),Z=r(39080),w=r(87119),T=r(75442),P=r(23992),x=r(71712),M=r(32412),j=r(30893);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C=E.mM.create({bold:{fontWeight:P.default.value},link:{color:x.ZP.value},text:{marginTop:M.ZP.value},nameColumn:{width:"220px"},header:{fontSize:9,color:T.ZP.value,paddingLeft:Z.ZP.value,paddingBottom:_.ZP.value,paddingTop:w.ZP.value}}),D=function(e){var t=e.page,r=e.systems,s=e.intl,n=[{value:s.formatMessage(j.Z.name),style:C.nameColumn},{value:s.formatMessage(j.Z.recommendations),style:{width:"100px",textAlign:"center"}},{value:s.formatMessage(j.Z.critical),style:{width:"70px",textAlign:"center"}},{value:s.formatMessage(j.Z.important),style:{width:"70px",textAlign:"center"}},{value:s.formatMessage(j.Z.moderate),style:{width:"60px",textAlign:"center"}},{value:s.formatMessage(j.Z.low),style:{width:"90px",textAlign:"center"}},{value:s.formatMessage(j.Z.lastSeen),style:{marginLeft:"20px"}}],o=["hits","critical_hits","important_hits","moderate_hits","low_hits"],i=(0,y.Z)(r.map((function(e){var t=new Date(e.last_seen).toUTCString().split(" "),r=(0,a.Z)(t,5),s=r[1],n=r[2],i=r[3],l=r[4],u="".concat(s," ").concat(n," ").concat(i,", ").concat(l.split(":").slice(0,2).join(":")," UTC");return[c().createElement(E.xv,{key:e.system_uuid,style:C.nameColumn},c().createElement(E.rU,{style:C.link,src:"https://cloud.redhat.com/insights/advisor/systems/".concat(e.system_uuid,"/")},e.display_name))].concat((0,y.Z)(o.map((function(t){return s=(r={style:{width:"10px"},value:e[t]}).value,a=r.style,c().createElement(E.xv,{style:a},s);var r,s,a}))),[c().createElement(E.xv,{key:e.last_seen,style:{width:"100px"}},"".concat(u))])})));return c().createElement(c().Fragment,{key:t},c().createElement(b.sg,null,c().createElement(b.iA,{withHeader:!0,rows:[n.map((function(e){return r=(t=e).value,s=t.style,c().createElement(E.xv,{style:A(A(A({},s),C.header),C.bold)},r);var t,r,s}))].concat((0,y.Z)(i))})))};D.propTypes={systems:O().object,page:O().number,intl:O().any};var R=function(e){var t=e.systemsTotal,r=e.systems,s=e.filters,a=e.tags,n=e.intl;return delete s.offset,delete s.limit,c().createElement(c().Fragment,{key:"".concat(n.formatMessage(j.Z.insightsHeader),": ").concat(n.formatMessage(j.Z.systems))},c().createElement(E.xv,{key:"sys-count",style:C.text},n.formatMessage(j.Z.sysTableCount,{systems:c().createElement(E.xv,{key:"sys-count-count",style:C.bold},n.formatMessage(j.Z.execReportHeaderSystems,{systems:t}),t>1e3&&n.formatMessage(j.Z.dueTo))})),c().createElement(E.xv,{key:"sys-filters",style:C.text},n.formatMessage(j.Z.filtersApplied)),c().createElement(E.xv,{key:"sys-filters-values",style:C.bold},Object.entries(s).map((function(e){return c().createElement(E.xv,{key:e},"".concat(e[0],": ").concat(e[1],"     "))}))),c().createElement(E.xv,{key:"sys-tags",style:C.text},n.formatMessage(j.Z.tagsApplied)),c().createElement(E.xv,{key:"sys-tags-values",style:C.bold},a?decodeURIComponent(a):n.formatMessage(j.Z.noTags)),c().createElement(b.$0,{key:"systems",title:"Systems"},D({systems:r,intl:n})))};R.propTypes={systems:O().object,systemsTotal:O().number,filters:O().object,tags:O().array,intl:O().any};var I=r(71094),L=r(86896);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Y=function(e){var t=e.filters,r=(0,L.Z)(),s=(0,l.useState)(!1),n=(0,a.Z)(s,2),o=n[0],m=n[1],p=(0,f.useSelector)((function(e){return e.AdvisorStore.selectedTags})),d=(0,f.useSelector)((function(e){return e.AdvisorStore.workloads})),v=(0,f.useSelector)((function(e){return e.AdvisorStore.SID})),E=function(){var e=(0,g.Z)(h().mark((function e(){var s,a,n,o;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),s=p.length&&{tags:p},d&&(s=N(N({},s),(0,u.s0)(d,v))),e.next=5,I.Z.get("".concat(i.BASE_URL,"/export/systems/"),{},N(N({},t),s));case 5:return a=e.sent.data,n=R({systemsTotal:null==a?void 0:a.length,systems:a.slice(0,18),filters:t,tags:p,intl:r}),o=a.slice(18,982).reduce((function(e,t,r){var s=Math.floor(r/31);return!e[s]&&(e[s]=[]),e[s].push(t),e}),[]),m(!1),e.abrupt("return",[n].concat((0,y.Z)(o.map((function(e,t){return D({page:t,systems:e,intl:r})})))));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,l.useMemo)((function(){return c().createElement(b.o6,{groupName:r.formatMessage(j.Z.redHatInsights),allPagesHaveTitle:!1,label:o?r.formatMessage(j.Z.loading):r.formatMessage(j.Z.exportPdf),asyncFunction:E,buttonProps:N({variant:"",component:"button",className:"pf-c-dropdown__menu-item systemsPdfOverride"},o?{isDisabled:!0}:null),reportName:"".concat(r.formatMessage(j.Z.insightsHeader),":"),type:r.formatMessage(j.Z.systems),fileName:"Advisor_systems--".concat((new Date).toUTCString().replace(/ /g,"-"),".pdf"),size:[841.89,595.28]})}),[o])};Y.propTypes={filters:O().object,systemsCount:O().number};const G=Y;var H=r(40609),U=r(58921),V=r(67336),W=r(75989),B=r(16530),q=r(43707);function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const K=function(){var e,t,r,y,g=(0,L.Z)(),v=(0,f.useDispatch)(),h=(0,B.useLocation)().search,b=(0,f.useSelector)((function(e){return e.AdvisorStore.systems})),E=(0,f.useSelector)((function(e){return e.AdvisorStore.systemsFetchStatus})),S=(0,f.useSelector)((function(e){return e.AdvisorStore.filtersSystems})),O=(0,f.useSelector)((function(e){return e.AdvisorStore.selectedTags})),_=(0,f.useSelector)((function(e){return e.AdvisorStore.workloads})),Z=(0,f.useSelector)((function(e){return e.AdvisorStore.SID})),w=function(e){return v(n.aw(e))},T=(0,q.T)("advisor",i.PERMS.export).hasAccess,P=(0,l.useRef)(null),x=b.meta?b.meta.count:0,M=(0,l.useState)(S.display_name||""),k=(0,a.Z)(M,2),A=k[0],C=k[1],D=(0,H.Z)(A,i.DEBOUNCE_DELAY),R=(0,l.useState)(!0),I=(0,a.Z)(R,2),F=I[0],N=I[1],Y={0:"display_name",1:"hits",2:"critical_hits",3:"important_hits",4:"moderate_hits",5:"low_hits",6:"last_seen"},z=(0,l.useCallback)((function(){(0,u.Y4)(S,O);var e,t=O.length&&{tags:O};return _&&(t=J(J({},t),(0,u.s0)(_,Z))),e=J(J({},(0,u.qW)(S)),t),v(n.lc(e))}),[O,_,Z,S,v]),K=function(e){var t=J(J({},S),{},{offset:0});"text"===e&&C(""),delete t[e],"hits"===e&&void 0===t.hits&&(t.hits=["yes"]),w(t)},$=[{label:g.formatMessage(j.Z.name).toLowerCase(),filterValues:{key:"text-filter",onChange:function(e,t){return C(t)},value:A}},{label:i.SYSTEM_FILTER_CATEGORIES.hits.title.toLowerCase(),type:i.SYSTEM_FILTER_CATEGORIES.hits.type,id:i.SYSTEM_FILTER_CATEGORIES.hits.urlParam,value:"checkbox-".concat(i.SYSTEM_FILTER_CATEGORIES.hits.urlParam),filterValues:{key:"".concat(i.SYSTEM_FILTER_CATEGORIES.hits.urlParam,"-filter"),onChange:function(e,t){return function(e,t){"hits"===e&&t.length>1&&t.includes("yes")&&t.shift(),t.length>0?w(J(J({},S),{},{offset:0},(0,s.Z)({},e,t))):K(e)}(i.SYSTEM_FILTER_CATEGORIES.hits.urlParam,t)},value:S.hits,items:i.SYSTEM_FILTER_CATEGORIES.hits.values}}],Q={deleteTitle:g.formatMessage(j.Z.resetFilters),filters:(e=J({},S),e.hits&&e.hits.includes("yes")&&delete e.hits,delete e.sort,delete e.offset,delete e.limit,(0,u.yK)(e,i.SYSTEM_FILTER_CATEGORIES)),onDelete:function(e,t,r){r?(C(""),w({sort:S.sort,limit:S.limit,offset:S.offset,hits:["yes"]})):t.map((function(e){var t=(0,s.Z)({},e.urlParam,Array.isArray(S[e.urlParam])?S[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?w(J(J({},S),t)):K(e.urlParam)}))}};return(0,l.useEffect)((function(){void 0===S.display_name?C(""):C(S.display_name)}),[S.display_name]),(0,l.useEffect)((function(){if(!F&&"pending"!==E){var e=J({},S);delete e.display_name,w(J(J(J({},e),A.length?{display_name:A}:{}),{},{offset:0}))}}),[D]),(0,l.useEffect)((function(){if(h&&F){var e=(0,u.yG)();delete e.tags,void 0!==e.sort&&(e.sort=e.sort[0]),void 0!==e.display_name&&(e.display_name=e.display_name[0]),void 0===e.hits&&(e.hits=["all"]),void 0===e.offset?e.offset=0:e.offset=Number(e.offset[0]),void 0===e.limit?e.limit=20:e.limit=Number(e.limit[0]),w(J(J({},S),e))}else void 0!==S.limit&&void 0!==S.offset&&void 0!==S.hits||w(J(J({},S),{},{offset:0,limit:20,hits:["all"]}));N(!1)}),[]),(0,l.useEffect)((function(){!F&&"pending"!==E&&null!==O&&z()}),[z,F,S,O]),"failed"!==E?c().createElement(p.Z,{disableDefaultColumns:!0,tableProps:{isStickyHeader:!0,variant:o.TableVariant.compact},ref:P,items:("pending"!==E&&b&&b.data||[]).map((function(e){return J(J({},e),{},{id:e.system_uuid})})),isFullView:!0,sortBy:(r=Number(null===(t=Object.entries(Y))||void 0===t?void 0:t.find((function(e){return e[1]===S.sort||"-".concat(e[1])===S.sort}))[0]),y="-"===S.sort[0]?"desc":"asc",{index:r,key:6!==r?Y[r]:"updated",direction:y}),onSort:function(e){var t=e.index,r=e.direction,s="".concat("asc"===r?"":"-").concat(Y[t]);w(J(J({},S),{},{sort:s,offset:0}))},hasCheckbox:!1,page:S.offset/S.limit+1,total:x,isLoaded:"fulfilled"===E,perPage:Number(S.limit),onRefresh:function(e){if("fulfilled"===E){var t=S.offset,r=S.limit;e.page*e.per_page-e.per_page===t&&r===e.per_page||w(J(J({},S),{},{limit:e.per_page,offset:e.page*e.per_page-e.per_page}))}},filterConfig:{items:$},activeFiltersConfig:Q,exportConfig:{onSelect:function(e,t){return(0,U.Z)("systems",t,S,O,_,Z)},extraItems:[c().createElement("li",{key:"download-pd",role:"menuitem"},c().createElement(G,{filters:J({},(0,u.qW)(S))}))],isDisabled:!T,tooltipText:T?g.formatMessage(j.Z.exportData):g.formatMessage(j.Z.permsAction)},fallback:d.Z,onLoad:function(e){var t=e.mergeWithEntities,r=e.INVENTORY_ACTION_TYPES,s=[{title:g.formatMessage(j.Z.name),transforms:[o.sortable,o.cellWidth(80)],key:"display_name"},{title:g.formatMessage(j.Z.numberRuleHits),transforms:[o.sortable,o.wrappable],key:"hits"},{title:g.formatMessage(j.Z.critical),transforms:[o.sortable,o.wrappable],key:"critical_hits"},{title:g.formatMessage(j.Z.important),transforms:[o.sortable,o.wrappable],key:"important_hits"},{title:g.formatMessage(j.Z.moderate),transforms:[o.sortable,o.wrappable],key:"moderate_hits"},{title:g.formatMessage(j.Z.low),transforms:[o.sortable,o.wrappable],key:"low_hits"},{title:g.formatMessage(j.Z.lastSeen),transforms:[o.sortable,o.wrappable],key:"updated"}];(0,V.JH)().register(J({},t((0,W.Vy)([].concat(s),r))))}}):"failed"===E&&c().createElement(m.Z,{message:g.formatMessage(j.Z.systemTableFetchError)})}}}]);
//# sourceMappingURL=../sourcemaps/SystemsTable.7d4dd028d64b9163baae.js.map