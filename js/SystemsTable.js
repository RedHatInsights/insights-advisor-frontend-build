(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1059:function(e,t,r){"use strict";r.d(t,"e",(function(){return f})),r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return p})),r.d(t,"a",(function(){return d})),r.d(t,"d",(function(){return y}));var a=r(196),n=r.n(a),s=r(364),o=r.n(s),i=r(368),c=r.n(i);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e,t){var r=new URL(window.location),a="".concat(Object.keys(e).map((function(t){return"".concat(t,"=").concat(Array.isArray(e[t])?e[t].join():e[t])})).join("&")),n=new URLSearchParams(a);return"undefined"===n.get("reports_shown")&&n.delete("reports_shown"),null!==t&&t.length?n.set("tags",t.join()):n.delete("tags"),window.history.replaceState(null,null,"".concat(r.origin).concat(r.pathname,"?").concat(n.toString())),"?".concat(a)},m=function(e){return Object.assign.apply(Object,[{}].concat(c()(Object.entries(e).map((function(e){var t=o()(e,2),r=t[0],a=t[1];return Array.isArray(a)?("true"===a[0]||"false"===a[0])&&a.length>1?null:n()({},r,a.join()):n()({},r,a)})))))},p=function(){var e=new URLSearchParams(window.location.search);return Array.from(e).reduce((function(e,t){var r=o()(t,2),a=r[0],s=r[1];return u(u({},e),{},n()({},a,"true"===s||"false"===s?JSON.parse(s):s.split(",")))}),{})},d=function(e){return Object.entries(e).reduce((function(e,t,r){var a=o()(t,2),n=a[0],s=a[1];return e+(0===r?"".concat(n,"=").concat(s):"&".concat(n,"=").concat(s))}),"")},y=function(e,t){var r=Object.entries(e);return r.length>0?r.map((function(e){if(t[e[0]]){var r=t[e[0]],a=Array.isArray(e[1])?e[1].map((function(e){var t=r.values.find((function(t){return t.value===String(e)}));return t?{name:t.text||t.label,value:e}:{name:e,value:e}})):[{name:r.values.find((function(t){return t.value===String(e[1])})).label,value:e[1]}];return{category:(n=r.title,n[0].toUpperCase()+n.substring(1)),chips:a,urlParam:r.urlParam}}return{category:"Name",chips:[{name:e[1],value:e[1]}],urlParam:e[0]};var n})):[]}},1249:function(e,t,r){"use strict";var a=r(104),n=r.n(a),s=r(172),o=r.n(s),i=r(197),c=r(7),l=r(375),u=function(e){var t={date:(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc"};return"Insights-Advisor_".concat(e,"--").concat(t.date)},f=function(){var e=o()(n.a.mark((function e(t,r,a){var s,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("".concat(c.BASE_URL,"/export/").concat(t,".").concat("json"===r?"json":"csv").concat(a));case 3:s=e.sent,o="json"===r?JSON.stringify(s.data):s.data,Object(l.downloadFile)(o,u(t),r),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),"".concat(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r,a){return e.apply(this,arguments)}}();t.a=f},1397:function(e,t,r){(t=r(6)(!1)).push([e.i,".pf-c-table__sort-indicator{margin-left:var(--pf-global--spacer--xs)}.pf-c-table th,td{padding-right:0px !important}.pf-c-table tr>:last-child{padding-left:var(--pf-global--spacer--xs)}.pf-c-table .pf-c-table__sort{min-width:initial}table.ins-c-entity-table.pf-c-table .ins-composed-col *{font-size:var(--pf-global--FontSize--md)}\n",""]),e.exports=t},1398:function(e,t,r){(t=r(6)(!1)).push([e.i,".systemsPdfOverride{text-align:left !important;border-radius:0 !important}\n",""]),e.exports=t},1777:function(e,t,r){var a=r(1397);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},s=r(8)(a,n);a.locals&&(e.exports=a.locals),e.hot.accept(1397,(function(){var t=r(1397);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,a=0;for(r in e){if(!t||e[r]!==t[r])return!1;a++}for(r in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");s(t)})),e.hot.dispose((function(){s()}))},1778:function(e,t,r){var a=r(1398);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},s=r(8)(a,n);a.locals&&(e.exports=a.locals),e.hot.accept(1398,(function(){var t=r(1398);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,a=0;for(r in e){if(!t||e[r]!==t[r])return!1;a++}for(r in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");s(t)})),e.hot.dispose((function(){s()}))},1779:function(e,t,r){"use strict";r.r(t);var a=r(104),n=r.n(a),s=r(172),o=r.n(s),i=r(196),c=r.n(i),l=r(364),u=r.n(l),f=(r(1777),r(365)),m=r(93),p=r(396),d=r(411),y=r(129),g=r(174),b=r(173),h=r(7),v=r(1),O=r.n(v),j=r(1059),E=r(1023),S=r(968),w=r(10),_=r.n(w),T=r(368),P=r.n(T),x=(r(1778),r(901)),M=r(14),k=r(414),R=r.n(k),C=r(413),A=r.n(C),I=r(415),D=r.n(I),F=r(412),L=r.n(F),N=r(496),Y=r.n(N),U=r(940),H=r.n(U),G=r(941),z=r.n(G),B=r(18);function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var W=M.i.create({bold:{fontWeight:Y.a.value},link:{color:H.a.value},text:{marginTop:z.a.value},nameColumn:{width:"220px"},header:{fontSize:9,color:L.a.value,paddingLeft:A.a.value,paddingBottom:R.a.value,paddingTop:D.a.value}}),q=function(e){var t=e.page,r=e.systems,a=e.intl,n=[{value:a.formatMessage(B.a.name),style:W.nameColumn},{value:a.formatMessage(B.a.recommendations),style:{width:"100px",textAlign:"center"}},{value:a.formatMessage(B.a.critical),style:{width:"70px",textAlign:"center"}},{value:a.formatMessage(B.a.important),style:{width:"70px",textAlign:"center"}},{value:a.formatMessage(B.a.moderate),style:{width:"60px",textAlign:"center"}},{value:a.formatMessage(B.a.low),style:{width:"90px",textAlign:"center"}},{value:a.formatMessage(B.a.lastSeen),style:{marginLeft:"20px"}}],s=["hits","critical_hits","important_hits","moderate_hits","low_hits"],o=P()(r.map((function(e){var t=new Date(e.last_seen).toUTCString().split(" "),r=u()(t,5),a=r[1],n=r[2],o=r[3],i=r[4],c="".concat(a," ").concat(n," ").concat(o,", ").concat(i.split(":").slice(0,2).join(":")," UTC");return[O.a.createElement(M.j,{key:e.system_uuid,style:W.nameColumn},O.a.createElement(M.e,{style:W.link,src:"https://cloud.redhat.com/insights/advisor/systems/".concat(e.system_uuid,"/")},e.display_name))].concat(P()(s.map((function(t){return r={style:{width:"10px"},value:e[t]},a=r.value,n=r.style,O.a.createElement(M.j,{style:n},a);var r,a,n}))),[O.a.createElement(M.j,{key:e.last_seen,style:{width:"100px"}},"".concat(c))])})));return O.a.createElement(O.a.Fragment,{key:t},O.a.createElement(x.b,null,O.a.createElement(x.i,{withHeader:!0,rows:[n.map((function(e){return r=(t=e).value,a=t.style,O.a.createElement(M.j,{style:V(V(V({},a),W.header),W.bold)},r);var t,r,a}))].concat(P()(o))})))};q.propTypes={systems:_.a.object,page:_.a.number,intl:_.a.any};var K=function(e){var t=e.systemsTotal,r=e.systems,a=e.filters,n=e.tags,s=e.intl;return delete a.offset,delete a.limit,O.a.createElement(O.a.Fragment,{key:"".concat(s.formatMessage(B.a.insightsHeader),": ").concat(s.formatMessage(B.a.systems))},O.a.createElement(M.j,{key:"sys-count",style:W.text},s.formatMessage(B.a.sysTableCount,{systems:O.a.createElement(M.j,{key:"sys-count-count",style:W.bold},s.formatMessage(B.a.execReportHeaderSystems,{systems:t}))})),O.a.createElement(M.j,{key:"sys-filters",style:W.text},s.formatMessage(B.a.filtersApplied)),O.a.createElement(M.j,{key:"sys-filters-values",style:W.bold},Object.entries(a).map((function(e){return O.a.createElement(M.j,{key:e},"".concat(e[0],": ").concat(e[1],"     "))}))),O.a.createElement(M.j,{key:"sys-tags",style:W.text},s.formatMessage(B.a.tagsApplied)),O.a.createElement(M.j,{key:"sys-tags-values",style:W.bold},n?decodeURIComponent(n):s.formatMessage(B.a.noTags)),O.a.createElement(x.h,{key:"systems",title:"Systems"},q({systems:r,intl:s})))};K.propTypes={systems:_.a.object,systemsTotal:_.a.number,filters:_.a.object,tags:_.a.array,intl:_.a.any};var Q=r(197),X=r(383);function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ee=function(e){var t=e.filters,r=e.selectedTags,a=e.systemsCount,s=Object(X.a)(),i=Object(v.useState)(!1),c=u()(i,2),l=c[0],f=c[1],m=function(){var e=o()(n.a.mark((function e(){var o,i,c,l,m,p;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),o=r.length&&{tags:r},e.t0=Promise,e.next=5,Q.a.get(h.SYSTEMS_FETCH_URL,{},$($($({},t),o),{},{limit:a}));case 5:return e.t1=e.sent.data,e.t2=[e.t1],e.next=9,e.t0.all.call(e.t0,e.t2);case 9:return i=e.sent,c=u()(i,1),l=c[0],m=K({systemsTotal:l.meta.count,systems:l.data.slice(0,18),filters:t,tags:r,intl:s}),p=l.data.slice(18,l.data.length).reduce((function(e,t,r){var a=Math.floor(r/31);return!e[a]&&(e[a]=[]),e[a].push(t),e}),[]),f(!1),e.abrupt("return",[m].concat(P()(p.map((function(e,t){return q({page:t,systems:e,intl:s})})))));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.useMemo)((function(){return O.a.createElement(x.c,{allPagesHaveTitle:!1,label:l?s.formatMessage(B.a.loading):s.formatMessage(B.a.exportPdf),asyncFunction:m,buttonProps:$({variant:"",component:"button",className:"pf-c-dropdown__menu-item systemsPdfOverride"},l?{isDisabled:!0}:null),reportName:"".concat(s.formatMessage(B.a.insightsHeader),":"),type:s.formatMessage(B.a.systems),fileName:"Advisor_systems--".concat((new Date).toUTCString().replace(/ /g,"-"),".pdf"),size:[841.89,595.28]})}),[l])};ee.propTypes={filters:_.a.object,selectedTags:_.a.string,systemsCount:_.a.number};var te=ee,re=r(125),ae=r(981),ne=r(1249),se=r(374),oe=r(48),ie=r(913),ce=r(367),le=r.n(ce),ue=r(373);function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function me(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var pe=function(e){var t,r,a,s=e.systemsFetchStatus,i=e.fetchSystems,l=e.systems,f=e.intl,w=e.filters,_=e.setFilters,T=e.selectedTags,P=Object(v.useRef)(null),x=Object(v.useState)(),M=u()(x,2),k=M[0],R=M[1],C=Object(m.useStore)(),A=l.meta?l.meta.count:0,I=Object(v.useState)(w.display_name||""),D=u()(I,2),F=D[0],L=D[1],N=Object(ae.a)(F,h.DEBOUNCE_DELAY),Y=Object(v.useState)(!0),U=u()(Y,2),H=U[0],G=U[1],z={0:"display_name",1:"hits",2:"critical_hits",3:"important_hits",4:"moderate_hits",5:"low_hits",6:"last_seen"},J=Object(v.useCallback)((function(){var e=T.length&&{tags:T&&T.join()};i(me(me({},Object(j.b)(w)),e))}),[i,w,T]),V=function(e){var t=me(me({},w),{},{offset:0});"text"===e&&L(""),delete t[e],"hits"===e&&void 0===t.hits&&(t.hits=["yes"]),_(t)},W=[{label:f.formatMessage(B.a.name),filterValues:{key:"text-filter",onChange:function(e,t){return L(t)},value:F}},{label:h.SYSTEM_FILTER_CATEGORIES.hits.title,type:h.SYSTEM_FILTER_CATEGORIES.hits.type,id:h.SYSTEM_FILTER_CATEGORIES.hits.urlParam,value:"checkbox-".concat(h.SYSTEM_FILTER_CATEGORIES.hits.urlParam),filterValues:{key:"".concat(h.SYSTEM_FILTER_CATEGORIES.hits.urlParam,"-filter"),onChange:function(e,t){return function(e,t){"hits"===e&&t.length>1&&t.includes("yes")&&t.shift(),t.length>0?_(me(me({},w),{},{offset:0},c()({},e,t))):V(e)}(h.SYSTEM_FILTER_CATEGORIES.hits.urlParam,t)},value:w.hits,items:h.SYSTEM_FILTER_CATEGORIES.hits.values}}],q={filters:(t=me({},w),t.hits&&t.hits.includes("yes")&&delete t.hits,delete t.sort,delete t.offset,delete t.limit,Object(j.d)(t,h.SYSTEM_FILTER_CATEGORIES)),onDelete:function(e,t,r){r?(L(""),_({sort:w.sort,limit:w.limit,offset:w.offset,hits:["yes"]})):t.map((function(e){var t=c()({},e.urlParam,Array.isArray(w[e.urlParam])?w[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?_(me(me({},w),t)):V(e.urlParam)}))}};return Object(v.useEffect)((function(){o()(n.a.mark((function e(){var t,r,a,s,o,i,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[{title:f.formatMessage(B.a.name),transforms:[p.a,d.a(80)],key:"display_name"},{title:f.formatMessage(B.a.numberRuleHits),transforms:[p.a,y.e],key:"hits"},{title:f.formatMessage(B.a.critical),transforms:[p.a,y.e],key:"critical_hits"},{title:f.formatMessage(B.a.important),transforms:[p.a,y.e],key:"important_hits"},{title:f.formatMessage(B.a.moderate),transforms:[p.a,y.e],key:"moderate_hits"},{title:f.formatMessage(B.a.low),transforms:[p.a,y.e],key:"low_hits"},{title:f.formatMessage(B.a.lastSeen),transforms:[p.a,y.e],key:"updated"}],e.next=3,insights.loadInventory({ReactRedux:m,react:O.a,reactRouterDom:b,pfReactTable:g,pfReact:ie.reactCore});case 3:r=e.sent,a=r.inventoryConnector,s=r.mergeWithEntities,o=r.INVENTORY_ACTION_TYPES,Object(se.getRegistry)().register(me({},s(Object(ue.c)([].concat(t),o)))),i=a(C),c=i.InventoryTable,R((function(){return c}));case 10:case"end":return e.stop()}}),e)})))()}),[f,C]),Object(v.useEffect)((function(){void 0===w.display_name?L(""):L(w.display_name)}),[w.display_name]),Object(v.useEffect)((function(){if(!H&&"pending"!==s){var e=me({},w);delete e.display_name,_(me(me(me({},e),F.length?{display_name:F}:{}),{},{offset:0}))}}),[N]),Object(v.useEffect)((function(){if(window.location.search){var e=Object(j.c)();delete e.tags,void 0!==e.sort&&(e.sort=e.sort[0]),void 0!==e.display_name&&(e.display_name=e.display_name[0]),void 0===e.hits&&(e.hits=["yes"]),void 0===e.offset?e.offset=0:e.offset=Number(e.offset[0]),void 0===e.limit?e.limit=10:e.limit=Number(e.limit[0]),_(me(me({},w),e))}else void 0!==w.limit&&void 0!==w.offset&&void 0!==w.hits||_(me(me({},w),{},{offset:0,limit:10,hits:["yes"]}));G(!1)}),[]),Object(v.useEffect)((function(){Object(j.e)(w,T)}),[w,T]),Object(v.useEffect)((function(){!H&&"pending"!==s&&null!==T&&J()}),[J,H,w,T]),k?"failed"!==s?O.a.createElement(k,{ref:P,items:("pending"!==s&&l&&l.data||[]).map((function(e){return me(me({},e),{},{id:e.system_uuid})})),sortBy:(r=Number(Object.entries(z).find((function(e){return e[1]===w.sort||"-".concat(e[1])===w.sort}))[0]),a="-"===w.sort[0]?"desc":"asc",{index:r,key:6!==r?z[r]:"updated",direction:a}),onSort:function(e){var t=e.index,r=e.direction,a="".concat("asc"===r?"":"-").concat(z[t]);_(me(me({},w),{},{sort:a,offset:0}))},hasCheckbox:!1,page:w.offset/w.limit+1,total:A,isLoaded:"pending"!==s,perPage:Number(w.limit),onRefresh:function(e){if("fulfilled"===s){var t=w.offset,r=w.limit;e.page*e.per_page-e.per_page===t&&r===e.per_page||_(me(me({},w),{},{limit:e.per_page,offset:e.page*e.per_page-e.per_page}))}},filterConfig:{items:W},activeFiltersConfig:q,exportConfig:{onSelect:function(e,t){return Object(ne.a)("systems",t,Object(j.e)(w,T))},extraItems:[O.a.createElement("li",{key:"download-pd",role:"menuitem"},O.a.createElement(te,{filters:me({},Object(j.b)(w)),selectedTags:T&&T.join(),systemsCount:l&&l.meta&&l.meta.count}))]}}):"failed"===s&&O.a.createElement(E.a,{message:f.formatMessage(B.a.systemTableFetchError)}):O.a.createElement(S.a,null)};pe.propTypes={fetchSystems:_.a.func,systemsFetchStatus:_.a.string,systems:_.a.object,addNotification:_.a.func,intl:_.a.any,filters:_.a.object,setFilters:_.a.func,selectedTags:_.a.array};t.default=Object(oe.c)(le()(Object(m.connect)((function(e){var t=e.AdvisorStore;return{systems:t.systems,systemsFetchStatus:t.systemsFetchStatus,filters:t.filtersSystems,selectedTags:t.selectedTags}}),(function(e){return{fetchSystems:function(t){return e(f.f(t))},addNotification:function(t){return e(Object(re.addNotification)(t))},setFilters:function(t){return e(f.l(t))}}}))(pe)))}}]);
//# sourceMappingURL=SystemsTable.js.map