(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1103:function(e,t,a){"use strict";var r=a(170),n=a.n(r),s=a(252),o=a.n(s),i=a(799),c=a(10),l=a(262),u=function(e){var t={date:(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc"};return"Insights-Advisor_".concat(e,"--").concat(t.date)},f=function(){var e=o()(n.a.mark((function e(t,a,r){var s,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("".concat(c.BASE_URL,"/export/").concat(t,".").concat("json"===a?"json":"csv").concat(r));case 3:s=e.sent,o="json"===a?JSON.stringify(s.data):s.data,Object(l.downloadFile)(o,u(t),a),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),"".concat(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a,r){return e.apply(this,arguments)}}();t.a=f},1247:function(e,t,a){(t=a(7)(!1)).push([e.i,".systemsPdfOverride{text-align:left !important;border-radius:0 !important}\n",""]),e.exports=t},1649:function(e,t,a){var r=a(1247);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},s=a(9)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(1247,(function(){var t=a(1247);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");s(t)})),e.hot.dispose((function(){s()}))},1650:function(e,t,a){"use strict";a.r(t);var r=a(170),n=a.n(r),s=a(252),o=a.n(s),i=a(121),c=a.n(i),l=a(251),u=a.n(l),f=a(802),m=a(100),p=a(286),y=a(287),d=a(125),g=a(122),b=a(10),h=a(0),v=a.n(h),O=a(861),j=a(868),E=a(823),S=a(17),w=a.n(S),_=a(254),T=a.n(_),P=(a(1649),a(751)),x=a(8),k=a(784),M=a.n(k),C=a(783),R=a.n(C),A=a(785),I=a.n(A),D=a(782),F=a.n(D),N=a(779),L=a.n(N),Y=a(780),U=a.n(Y),G=a(781),H=a.n(G),B=a(14);function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var V=x.i.create({bold:{fontWeight:L.a.value},link:{color:U.a.value},text:{marginTop:H.a.value},nameColumn:{width:"220px"},header:{fontSize:9,color:F.a.value,paddingLeft:R.a.value,paddingBottom:M.a.value,paddingTop:I.a.value}}),W=function(e){var t=e.page,a=e.systems,r=e.intl,n=[{value:r.formatMessage(B.a.name),style:V.nameColumn},{value:r.formatMessage(B.a.recommendations),style:{width:"100px",textAlign:"center"}},{value:r.formatMessage(B.a.critical),style:{width:"70px",textAlign:"center"}},{value:r.formatMessage(B.a.important),style:{width:"70px",textAlign:"center"}},{value:r.formatMessage(B.a.moderate),style:{width:"60px",textAlign:"center"}},{value:r.formatMessage(B.a.low),style:{width:"90px",textAlign:"center"}},{value:r.formatMessage(B.a.lastSeen),style:{marginLeft:"20px"}}],s=["hits","critical_hits","important_hits","moderate_hits","low_hits"],o=T()(a.map((function(e){var t=new Date(e.last_seen).toUTCString().split(" "),a=u()(t,5),r=a[1],n=a[2],o=a[3],i=a[4],c="".concat(r," ").concat(n," ").concat(o,", ").concat(i.split(":").slice(0,2).join(":")," UTC");return[v.a.createElement(x.j,{key:e.system_uuid,style:V.nameColumn},v.a.createElement(x.e,{style:V.link,src:"https://cloud.redhat.com/insights/advisor/systems/".concat(e.system_uuid,"/")},e.display_name))].concat(T()(s.map((function(t){return a={style:{width:"10px"},value:e[t]},r=a.value,n=a.style,v.a.createElement(x.j,{style:n},r);var a,r,n}))),[v.a.createElement(x.j,{key:e.last_seen,style:{width:"100px"}},"".concat(c))])})));return v.a.createElement(v.a.Fragment,{key:t},v.a.createElement(P.c,null,v.a.createElement(P.i,{withHeader:!0,rows:[n.map((function(e){return a=(t=e).value,r=t.style,v.a.createElement(x.j,{style:z(z(z({},r),V.header),V.bold)},a);var t,a,r}))].concat(T()(o))})))};W.propTypes={systems:w.a.object,page:w.a.number,intl:w.a.any};var q=function(e){var t=e.systemsTotal,a=e.systems,r=e.filters,n=e.tags,s=e.intl;return delete r.offset,delete r.limit,v.a.createElement(v.a.Fragment,{key:"".concat(s.formatMessage(B.a.insightsHeader),": ").concat(s.formatMessage(B.a.systems))},v.a.createElement(x.j,{key:"sys-count",style:V.text},s.formatMessage(B.a.sysTableCount,{systems:v.a.createElement(x.j,{key:"sys-count-count",style:V.bold},s.formatMessage(B.a.execReportHeaderSystems,{systems:t}))})),v.a.createElement(x.j,{key:"sys-filters",style:V.text},s.formatMessage(B.a.filtersApplied)),v.a.createElement(x.j,{key:"sys-filters-values",style:V.bold},Object.entries(r).map((function(e){return v.a.createElement(x.j,{key:e},"".concat(e[0],": ").concat(e[1],"     "))}))),v.a.createElement(x.j,{key:"sys-tags",style:V.text},s.formatMessage(B.a.tagsApplied)),v.a.createElement(x.j,{key:"sys-tags-values",style:V.bold},n?decodeURIComponent(n):s.formatMessage(B.a.noTags)),v.a.createElement(P.h,{key:"systems",title:"Systems"},W({systems:a,intl:s})))};q.propTypes={systems:w.a.object,systemsTotal:w.a.number,filters:w.a.object,tags:w.a.array,intl:w.a.any};var K=a(799),Q=a(271);function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var $=function(e){var t=e.filters,a=e.selectedTags,r=e.systemsCount,s=Object(Q.a)(),i=Object(h.useState)(!1),c=u()(i,2),l=c[0],f=c[1],m=function(){var e=o()(n.a.mark((function e(){var o,i,c,l,m,p;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),o=a.length&&{tags:a},e.t0=Promise,e.next=5,K.a.get(b.SYSTEMS_FETCH_URL,{},Z(Z(Z({},t),o),{},{limit:r}));case 5:return e.t1=e.sent.data,e.t2=[e.t1],e.next=9,e.t0.all.call(e.t0,e.t2);case 9:return i=e.sent,c=u()(i,1),l=c[0],m=q({systemsTotal:l.meta.count,systems:l.data.slice(0,18),filters:t,tags:a,intl:s}),p=l.data.slice(18,l.data.length).reduce((function(e,t,a){var r=Math.floor(a/26);return!e[r]&&(e[r]=[]),e[r].push(t),e}),[]),f(!1),e.abrupt("return",[m].concat(T()(p.map((function(e,t){return W({page:t,systems:e,intl:s})})))));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.useMemo)((function(){return v.a.createElement(P.d,{label:l?s.formatMessage(B.a.loading):s.formatMessage(B.a.exportPdf),asyncFunction:m,buttonProps:Z({variant:"",component:"button",className:"pf-c-dropdown__menu-item systemsPdfOverride"},l?{isDisabled:!0}:null),reportName:"".concat(s.formatMessage(B.a.insightsHeader),":"),type:s.formatMessage(B.a.systems),fileName:"Advisor_systems--".concat((new Date).toUTCString().replace(/ /g,"-"),".pdf"),size:[841.89,595.28]})}),[l])};$.propTypes={filters:w.a.object,selectedTags:w.a.string,systemsCount:w.a.number};var ee=$,te=a(63),ae=a(830),re=a(1103),ne=a(261),se=a(26),oe=a(253),ie=a.n(oe),ce=a(260);function le(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function ue(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?le(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):le(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var fe=function(e){var t,a,r,s=e.systemsFetchStatus,i=e.fetchSystems,l=e.systems,f=e.intl,S=e.filters,w=e.setFilters,_=e.selectedTags,T=Object(h.useRef)(null),P=Object(h.useState)(),x=u()(P,2),k=x[0],M=x[1],C=Object(m.useStore)(),R=l.meta?l.meta.count:0,A=Object(h.useState)(S.display_name||""),I=u()(A,2),D=I[0],F=I[1],N=Object(ae.a)(D,b.DEBOUNCE_DELAY),L=Object(h.useState)(!0),Y=u()(L,2),U=Y[0],G=Y[1],H={0:"display_name",1:"hits",2:"critical_hits",3:"important_hits",4:"moderate_hits",5:"low_hits",6:"last_seen"},J=Object(h.useCallback)((function(){var e=_.length&&{tags:_&&_.join()};i(ue(ue({},Object(O.b)(S)),e))}),[i,S,_]),z=function(e){var t=ue(ue({},S),{},{offset:0});"text"===e&&F(""),delete t[e],"hits"===e&&void 0===t.hits&&(t.hits=["yes"]),w(t)},V=[{label:f.formatMessage(B.a.name),filterValues:{key:"text-filter",onChange:function(e,t){return F(t)},value:D}},{label:b.SYSTEM_FILTER_CATEGORIES.hits.title,type:b.SYSTEM_FILTER_CATEGORIES.hits.type,id:b.SYSTEM_FILTER_CATEGORIES.hits.urlParam,value:"checkbox-".concat(b.SYSTEM_FILTER_CATEGORIES.hits.urlParam),filterValues:{key:"".concat(b.SYSTEM_FILTER_CATEGORIES.hits.urlParam,"-filter"),onChange:function(e,t){return function(e,t){"hits"===e&&t.length>1&&t.includes("yes")&&t.shift(),t.length>0?w(ue(ue({},S),{},{offset:0},c()({},e,t))):z(e)}(b.SYSTEM_FILTER_CATEGORIES.hits.urlParam,t)},value:S.hits,items:b.SYSTEM_FILTER_CATEGORIES.hits.values}}],W={filters:(t=ue({},S),t.hits&&t.hits.includes("yes")&&delete t.hits,delete t.sort,delete t.offset,delete t.limit,Object(O.d)(t,b.SYSTEM_FILTER_CATEGORIES)),onDelete:function(e,t,a){a?(F(""),w({sort:S.sort,limit:S.limit,offset:S.offset,hits:["yes"]})):t.map((function(e){var t=c()({},e.urlParam,Array.isArray(S[e.urlParam])?S[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?w(ue(ue({},S),t)):z(e.urlParam)}))}};return Object(h.useEffect)((function(){o()(n.a.mark((function e(){var t,a,r,s,o,i,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[{title:f.formatMessage(B.a.name),transforms:[p.a,y.a(80)],key:"display_name"},{title:f.formatMessage(B.a.numberRuleHits),transforms:[p.a,y.a(1)],key:"hits"},{title:f.formatMessage(B.a.critical),transforms:[p.a,y.a(1)],key:"critical_hits"},{title:f.formatMessage(B.a.important),transforms:[p.a,y.a(1)],key:"important_hits"},{title:f.formatMessage(B.a.moderate),transforms:[p.a,y.a(1)],key:"moderate_hits"},{title:f.formatMessage(B.a.low),transforms:[p.a,y.a(1)],key:"low_hits"},{title:f.formatMessage(B.a.lastSeen),transforms:[p.a,y.a(10)],key:"updated"}],e.next=3,insights.loadInventory({ReactRedux:m,react:v.a,reactRouterDom:g,pfReactTable:d});case 3:a=e.sent,r=a.inventoryConnector,s=a.mergeWithEntities,o=a.INVENTORY_ACTION_TYPES,Object(ne.getRegistry)().register(ue({},s(Object(ce.c)([].concat(t),o)))),i=r(C),c=i.InventoryTable,M((function(){return c}));case 10:case"end":return e.stop()}}),e)})))()}),[f,C]),Object(h.useEffect)((function(){void 0===S.display_name?F(""):F(S.display_name)}),[S.display_name]),Object(h.useEffect)((function(){if(!U&&"pending"!==s){var e=ue({},S);delete e.display_name,w(ue(ue(ue({},e),D.length?{display_name:D}:{}),{},{offset:0}))}}),[N]),Object(h.useEffect)((function(){if(window.location.search){var e=Object(O.c)();delete e.tags,void 0!==e.sort&&(e.sort=e.sort[0]),void 0!==e.display_name&&(e.display_name=e.display_name[0]),void 0===e.hits&&(e.hits=["yes"]),void 0===e.offset?e.offset=0:e.offset=Number(e.offset[0]),void 0===e.limit?e.limit=10:e.limit=Number(e.limit[0]),w(ue(ue({},S),e))}else void 0!==S.limit&&void 0!==S.offset&&void 0!==S.hits||w(ue(ue({},S),{},{offset:0,limit:10,hits:["yes"]}));G(!1)}),[]),Object(h.useEffect)((function(){Object(O.e)(S,_)}),[S,_]),Object(h.useEffect)((function(){!U&&"pending"!==s&&null!==_&&J()}),[J,U,S,_]),k?"failed"!==s?v.a.createElement(k,{ref:T,items:("pending"!==s&&l&&l.data||[]).map((function(e){return ue(ue({},e),{},{id:e.system_uuid})})),sortBy:(a=Number(Object.entries(H).find((function(e){return e[1]===S.sort||"-".concat(e[1])===S.sort}))[0]),r="-"===S.sort[0]?"desc":"asc",{index:a,key:6!==a?H[a]:"updated",direction:r}),onSort:function(e){var t=e.index,a=e.direction,r="".concat("asc"===a?"":"-").concat(H[t]);w(ue(ue({},S),{},{sort:r,offset:0}))},hasCheckbox:!1,page:S.offset/S.limit+1,total:R,isLoaded:"pending"!==s,perPage:Number(S.limit),onRefresh:function(e){if("fulfilled"===s){var t=S.offset,a=S.limit;e.page*e.per_page-e.per_page===t&&a===e.per_page||w(ue(ue({},S),{},{limit:e.per_page,offset:e.page*e.per_page-e.per_page}))}},filterConfig:{items:V},activeFiltersConfig:W,exportConfig:{onSelect:function(e,t){return Object(re.a)("systems",t,Object(O.e)(S,_))},extraItems:[v.a.createElement("li",{key:"download-pd",role:"menuitem"},v.a.createElement(ee,{filters:ue({},Object(O.b)(S)),selectedTags:_&&_.join(),systemsCount:l&&l.meta&&l.meta.count}))]}}):"failed"===s&&v.a.createElement(j.a,{message:f.formatMessage(B.a.systemTableFetchError)}):v.a.createElement(E.a,null)};fe.propTypes={fetchSystems:w.a.func,systemsFetchStatus:w.a.string,systems:w.a.object,addNotification:w.a.func,intl:w.a.any,filters:w.a.object,setFilters:w.a.func,selectedTags:w.a.array};t.default=Object(se.c)(ie()(Object(m.connect)((function(e){var t=e.AdvisorStore;return{systems:t.systems,systemsFetchStatus:t.systemsFetchStatus,filters:t.filtersSystems,selectedTags:t.selectedTags}}),(function(e){return{fetchSystems:function(t){return e(f.f(t))},addNotification:function(t){return e(Object(te.addNotification)(t))},setFilters:function(t){return e(f.l(t))}}}))(fe)))},861:function(e,t,a){"use strict";a.d(t,"e",(function(){return f})),a.d(t,"b",(function(){return m})),a.d(t,"c",(function(){return p})),a.d(t,"a",(function(){return y})),a.d(t,"d",(function(){return d}));var r=a(121),n=a.n(r),s=a(251),o=a.n(s),i=a(254),c=a.n(i);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f=function(e,t){var a=new URL(window.location),r="".concat(Object.keys(e).map((function(t){return"".concat(t,"=").concat(Array.isArray(e[t])?e[t].join():e[t])})).join("&")),n=new URLSearchParams(r);return null!==t&&t.length?n.set("tags",t.join()):n.delete("tags"),window.history.replaceState(null,null,"".concat(a.origin).concat(a.pathname,"?").concat(n.toString())),"?".concat(r)},m=function(e){return Object.assign.apply(Object,[{}].concat(c()(Object.entries(e).map((function(e){var t=o()(e,2),a=t[0],r=t[1];return Array.isArray(r)?("true"===r[0]||"false"===r[0])&&r.length>1?null:n()({},a,r.join()):n()({},a,r)})))))},p=function(){var e=new URLSearchParams(window.location.search);return Array.from(e).reduce((function(e,t){var a=o()(t,2),r=a[0],s=a[1];return u(u({},e),{},n()({},r,"true"===s||"false"===s?JSON.parse(s):s.split(",")))}),{})},y=function(e){return e[0].toUpperCase()+e.substring(1)},d=function(e,t){var a=Object.entries(e);return a.length>0?a.map((function(e){if(t[e[0]]){var a=t[e[0]],r=Array.isArray(e[1])?e[1].map((function(e){var t=a.values.find((function(t){return t.value===String(e)}));return t?{name:t.text||t.label,value:e}:{name:e,value:e}})):[{name:a.values.find((function(t){return t.value===String(e[1])})).label,value:e[1]}];return{category:y(a.title),chips:r,urlParam:a.urlParam}}return{category:"Name",chips:[{name:e[1],value:e[1]}],urlParam:e[0]}})):[]}},868:function(e,t,a){"use strict";var r=a(123),n=a(124),s=a(174),o=a(749),i=a.n(o),c=a(0),l=a.n(c),u=a(17),f=a.n(u),m=function(e){var t=e.message;return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.Card,{className:"ins-empty-rule-cards"},l.a.createElement(s.CardHeader,null,l.a.createElement(i.a,{size:"lg"})),l.a.createElement(n.CardBody,null,t)))};t.a=m,m.propTypes={message:f.a.string}}}]);
//# sourceMappingURL=SystemsTable.js.map