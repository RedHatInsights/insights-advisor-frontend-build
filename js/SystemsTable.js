(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1070:function(e,t,a){"use strict";var r=a(272),n=a(273),s=a(432),o=a(957),i=a.n(o),c=a(0),l=a.n(c),u=a(8),f=a.n(u),m=function(e){var t=e.message;return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.Card,{className:"ins-empty-rule-cards"},l.a.createElement(s.CardHeader,null,l.a.createElement(i.a,{size:"lg"})),l.a.createElement(n.CardBody,null,t)))};t.a=m,m.propTypes={message:f.a.string}},1306:function(e,t,a){"use strict";a.d(t,"d",(function(){return f})),a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return p})),a.d(t,"c",(function(){return y}));var r=a(211),n=a.n(r),s=a(424),o=a.n(s),i=a(427),c=a.n(i);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f=function(e,t){var a=new URL(window.location),r="".concat(Object.keys(e).map((function(t){return"".concat(t,"=").concat(Array.isArray(e[t])?e[t].join():e[t])})).join("&")),n=new URLSearchParams(r);return null!==t&&t.length?n.set("tags",t.join()):n.delete("tags"),window.history.replaceState(null,null,"".concat(a.origin).concat(a.pathname,"?").concat(n.toString())),"?".concat(r)},m=function(e){return Object.assign.apply(Object,[{}].concat(c()(Object.entries(e).map((function(e){var t=o()(e,2),a=t[0],r=t[1];return Array.isArray(r)?("true"===r[0]||"false"===r[0])&&r.length>1?null:n()({},a,r.join()):n()({},a,r)})))))},p=function(){var e=new URLSearchParams(window.location.search);return Array.from(e).reduce((function(e,t){var a=o()(t,2),r=a[0],s=a[1];return u(u({},e),{},n()({},r,"true"===s||"false"===s?JSON.parse(s):s.split(",")))}),{})},y=function(e,t){var a=Object.entries(e);return a.length>0?a.map((function(e){if(t[e[0]]){var a=t[e[0]],r=Array.isArray(e[1])?e[1].map((function(e){var t=a.values.find((function(t){return t.value===String(e)}));return t?{name:t.text||t.label,value:e}:{name:e,value:e}})):[{name:a.values.find((function(t){return t.value===String(e[1])})).label,value:e[1]}];return{category:(n=a.title,n[0].toUpperCase()+n.substring(1)),chips:r,urlParam:a.urlParam}}return{category:"Name",chips:[{name:e[1],value:e[1]}],urlParam:e[0]};var n})):[]}},1307:function(e,t,a){"use strict";var r=a(271),n=a.n(r),s=a(425),o=a.n(s),i=a(1002),c=a(18),l=a(438),u=function(e){var t={date:(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc"};return"Insights-Advisor_".concat(e,"--").concat(t.date)},f=function(){var e=o()(n.a.mark((function e(t,a,r){var s,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("".concat(c.BASE_URL,"/export/").concat(t,".").concat("json"===a?"json":"csv").concat(r));case 3:s=e.sent,o="json"===a?JSON.stringify(s.data):s.data,Object(l.downloadFile)(o,u(t),a),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),"".concat(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a,r){return e.apply(this,arguments)}}();t.a=f},1452:function(e,t,a){(t=a(4)(!1)).push([e.i,".pf-c-table__sort-indicator{margin-left:var(--pf-global--spacer--xs)}.pf-c-table th,td{padding-right:0px !important}.pf-c-table tr>:last-child{padding-left:var(--pf-global--spacer--xs)}.pf-c-table .pf-c-table__sort{min-width:initial}\n",""]),e.exports=t},1453:function(e,t,a){(t=a(4)(!1)).push([e.i,".systemsPdfOverride{text-align:left !important;border-radius:0 !important}\n",""]),e.exports=t},1854:function(e,t,a){var r=a(1452);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},s=a(6)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(1452,(function(){var t=a(1452);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");s(t)})),e.hot.dispose((function(){s()}))},1855:function(e,t,a){var r=a(1453);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},s=a(6)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(1453,(function(){var t=a(1453);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");s(t)})),e.hot.dispose((function(){s()}))},1856:function(e,t,a){"use strict";a.r(t);var r=a(271),n=a.n(r),s=a(425),o=a.n(s),i=a(211),c=a.n(i),l=a(424),u=a.n(l),f=(a(1854),a(1005)),m=a(131),p=a(462),y=a(463),d=a(136),g=a(213),b=a(212),h=a(18),v=a(0),O=a.n(v),j=a(1306),E=a(1070),S=a(1027),w=a(8),_=a.n(w),T=a(427),P=a.n(T),x=(a(1855),a(959)),M=a(13),k=a(483),C=a.n(k),R=a(482),A=a.n(R),I=a(484),D=a.n(I),F=a(481),N=a.n(F),L=a(565),Y=a.n(L),U=a(987),H=a.n(U),G=a(988),B=a.n(G),J=a(19);function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function V(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var W=M.i.create({bold:{fontWeight:Y.a.value},link:{color:H.a.value},text:{marginTop:B.a.value},nameColumn:{width:"220px"},header:{fontSize:9,color:N.a.value,paddingLeft:A.a.value,paddingBottom:C.a.value,paddingTop:D.a.value}}),q=function(e){var t=e.page,a=e.systems,r=e.intl,n=[{value:r.formatMessage(J.a.name),style:W.nameColumn},{value:r.formatMessage(J.a.recommendations),style:{width:"100px",textAlign:"center"}},{value:r.formatMessage(J.a.critical),style:{width:"70px",textAlign:"center"}},{value:r.formatMessage(J.a.important),style:{width:"70px",textAlign:"center"}},{value:r.formatMessage(J.a.moderate),style:{width:"60px",textAlign:"center"}},{value:r.formatMessage(J.a.low),style:{width:"90px",textAlign:"center"}},{value:r.formatMessage(J.a.lastSeen),style:{marginLeft:"20px"}}],s=["hits","critical_hits","important_hits","moderate_hits","low_hits"],o=P()(a.map((function(e){var t=new Date(e.last_seen).toUTCString().split(" "),a=u()(t,5),r=a[1],n=a[2],o=a[3],i=a[4],c="".concat(r," ").concat(n," ").concat(o,", ").concat(i.split(":").slice(0,2).join(":")," UTC");return[O.a.createElement(M.j,{key:e.system_uuid,style:W.nameColumn},O.a.createElement(M.e,{style:W.link,src:"https://cloud.redhat.com/insights/advisor/systems/".concat(e.system_uuid,"/")},e.display_name))].concat(P()(s.map((function(t){return a={style:{width:"10px"},value:e[t]},r=a.value,n=a.style,O.a.createElement(M.j,{style:n},r);var a,r,n}))),[O.a.createElement(M.j,{key:e.last_seen,style:{width:"100px"}},"".concat(c))])})));return O.a.createElement(O.a.Fragment,{key:t},O.a.createElement(x.b,null,O.a.createElement(x.i,{withHeader:!0,rows:[n.map((function(e){return a=(t=e).value,r=t.style,O.a.createElement(M.j,{style:V(V(V({},r),W.header),W.bold)},a);var t,a,r}))].concat(P()(o))})))};q.propTypes={systems:_.a.object,page:_.a.number,intl:_.a.any};var K=function(e){var t=e.systemsTotal,a=e.systems,r=e.filters,n=e.tags,s=e.intl;return delete r.offset,delete r.limit,O.a.createElement(O.a.Fragment,{key:"".concat(s.formatMessage(J.a.insightsHeader),": ").concat(s.formatMessage(J.a.systems))},O.a.createElement(M.j,{key:"sys-count",style:W.text},s.formatMessage(J.a.sysTableCount,{systems:O.a.createElement(M.j,{key:"sys-count-count",style:W.bold},s.formatMessage(J.a.execReportHeaderSystems,{systems:t}))})),O.a.createElement(M.j,{key:"sys-filters",style:W.text},s.formatMessage(J.a.filtersApplied)),O.a.createElement(M.j,{key:"sys-filters-values",style:W.bold},Object.entries(r).map((function(e){return O.a.createElement(M.j,{key:e},"".concat(e[0],": ").concat(e[1],"     "))}))),O.a.createElement(M.j,{key:"sys-tags",style:W.text},s.formatMessage(J.a.tagsApplied)),O.a.createElement(M.j,{key:"sys-tags-values",style:W.bold},n?decodeURIComponent(n):s.formatMessage(J.a.noTags)),O.a.createElement(x.h,{key:"systems",title:"Systems"},q({systems:a,intl:s})))};K.propTypes={systems:_.a.object,systemsTotal:_.a.number,filters:_.a.object,tags:_.a.array,intl:_.a.any};var Q=a(1002),X=a(447);function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ee=function(e){var t=e.filters,a=e.selectedTags,r=e.systemsCount,s=Object(X.a)(),i=Object(v.useState)(!1),c=u()(i,2),l=c[0],f=c[1],m=function(){var e=o()(n.a.mark((function e(){var o,i,c,l,m,p;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),o=a.length&&{tags:a},e.t0=Promise,e.next=5,Q.a.get(h.SYSTEMS_FETCH_URL,{},$($($({},t),o),{},{limit:r}));case 5:return e.t1=e.sent.data,e.t2=[e.t1],e.next=9,e.t0.all.call(e.t0,e.t2);case 9:return i=e.sent,c=u()(i,1),l=c[0],m=K({systemsTotal:l.meta.count,systems:l.data.slice(0,18),filters:t,tags:a,intl:s}),p=l.data.slice(18,l.data.length).reduce((function(e,t,a){var r=Math.floor(a/31);return!e[r]&&(e[r]=[]),e[r].push(t),e}),[]),f(!1),e.abrupt("return",[m].concat(P()(p.map((function(e,t){return q({page:t,systems:e,intl:s})})))));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.useMemo)((function(){return O.a.createElement(x.c,{allPagesHaveTitle:!1,label:l?s.formatMessage(J.a.loading):s.formatMessage(J.a.exportPdf),asyncFunction:m,buttonProps:$({variant:"",component:"button",className:"pf-c-dropdown__menu-item systemsPdfOverride"},l?{isDisabled:!0}:null),reportName:"".concat(s.formatMessage(J.a.insightsHeader),":"),type:s.formatMessage(J.a.systems),fileName:"Advisor_systems--".concat((new Date).toUTCString().replace(/ /g,"-"),".pdf"),size:[841.89,595.28]})}),[l])};ee.propTypes={filters:_.a.object,selectedTags:_.a.string,systemsCount:_.a.number};var te=ee,ae=a(132),re=a(1033),ne=a(1307),se=a(437),oe=a(50),ie=a(966),ce=a(426),le=a.n(ce),ue=a(435);function fe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function me(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):fe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var pe=function(e){var t,a,r,s=e.systemsFetchStatus,i=e.fetchSystems,l=e.systems,f=e.intl,w=e.filters,_=e.setFilters,T=e.selectedTags,P=Object(v.useRef)(null),x=Object(v.useState)(),M=u()(x,2),k=M[0],C=M[1],R=Object(m.useStore)(),A=l.meta?l.meta.count:0,I=Object(v.useState)(w.display_name||""),D=u()(I,2),F=D[0],N=D[1],L=Object(re.a)(F,h.DEBOUNCE_DELAY),Y=Object(v.useState)(!0),U=u()(Y,2),H=U[0],G=U[1],B={0:"display_name",1:"hits",2:"critical_hits",3:"important_hits",4:"moderate_hits",5:"low_hits",6:"last_seen"},z=Object(v.useCallback)((function(){var e=T.length&&{tags:T&&T.join()};i(me(me({},Object(j.a)(w)),e))}),[i,w,T]),V=function(e){var t=me(me({},w),{},{offset:0});"text"===e&&N(""),delete t[e],"hits"===e&&void 0===t.hits&&(t.hits=["yes"]),_(t)},W=[{label:f.formatMessage(J.a.name),filterValues:{key:"text-filter",onChange:function(e,t){return N(t)},value:F}},{label:h.SYSTEM_FILTER_CATEGORIES.hits.title,type:h.SYSTEM_FILTER_CATEGORIES.hits.type,id:h.SYSTEM_FILTER_CATEGORIES.hits.urlParam,value:"checkbox-".concat(h.SYSTEM_FILTER_CATEGORIES.hits.urlParam),filterValues:{key:"".concat(h.SYSTEM_FILTER_CATEGORIES.hits.urlParam,"-filter"),onChange:function(e,t){return function(e,t){"hits"===e&&t.length>1&&t.includes("yes")&&t.shift(),t.length>0?_(me(me({},w),{},{offset:0},c()({},e,t))):V(e)}(h.SYSTEM_FILTER_CATEGORIES.hits.urlParam,t)},value:w.hits,items:h.SYSTEM_FILTER_CATEGORIES.hits.values}}],q={filters:(t=me({},w),t.hits&&t.hits.includes("yes")&&delete t.hits,delete t.sort,delete t.offset,delete t.limit,Object(j.c)(t,h.SYSTEM_FILTER_CATEGORIES)),onDelete:function(e,t,a){a?(N(""),_({sort:w.sort,limit:w.limit,offset:w.offset,hits:["yes"]})):t.map((function(e){var t=c()({},e.urlParam,Array.isArray(w[e.urlParam])?w[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?_(me(me({},w),t)):V(e.urlParam)}))}};return Object(v.useEffect)((function(){o()(n.a.mark((function e(){var t,a,r,s,o,i,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[{title:f.formatMessage(J.a.name),transforms:[p.a,y.a(80)],key:"display_name"},{title:f.formatMessage(J.a.numberRuleHits),transforms:[p.a,d.e],key:"hits"},{title:f.formatMessage(J.a.critical),transforms:[p.a,d.e],key:"critical_hits"},{title:f.formatMessage(J.a.important),transforms:[p.a,d.e],key:"important_hits"},{title:f.formatMessage(J.a.moderate),transforms:[p.a,d.e],key:"moderate_hits"},{title:f.formatMessage(J.a.low),transforms:[p.a,d.e],key:"low_hits"},{title:f.formatMessage(J.a.lastSeen),transforms:[p.a,d.e],key:"updated"}],e.next=3,insights.loadInventory({ReactRedux:m,react:O.a,reactRouterDom:b,pfReactTable:g,pfReact:ie.reactCore});case 3:a=e.sent,r=a.inventoryConnector,s=a.mergeWithEntities,o=a.INVENTORY_ACTION_TYPES,Object(se.getRegistry)().register(me({},s(Object(ue.c)([].concat(t),o)))),i=r(R),c=i.InventoryTable,C((function(){return c}));case 10:case"end":return e.stop()}}),e)})))()}),[f,R]),Object(v.useEffect)((function(){void 0===w.display_name?N(""):N(w.display_name)}),[w.display_name]),Object(v.useEffect)((function(){if(!H&&"pending"!==s){var e=me({},w);delete e.display_name,_(me(me(me({},e),F.length?{display_name:F}:{}),{},{offset:0}))}}),[L]),Object(v.useEffect)((function(){if(window.location.search){var e=Object(j.b)();delete e.tags,void 0!==e.sort&&(e.sort=e.sort[0]),void 0!==e.display_name&&(e.display_name=e.display_name[0]),void 0===e.hits&&(e.hits=["yes"]),void 0===e.offset?e.offset=0:e.offset=Number(e.offset[0]),void 0===e.limit?e.limit=10:e.limit=Number(e.limit[0]),_(me(me({},w),e))}else void 0!==w.limit&&void 0!==w.offset&&void 0!==w.hits||_(me(me({},w),{},{offset:0,limit:10,hits:["yes"]}));G(!1)}),[]),Object(v.useEffect)((function(){Object(j.d)(w,T)}),[w,T]),Object(v.useEffect)((function(){!H&&"pending"!==s&&null!==T&&z()}),[z,H,w,T]),k?"failed"!==s?O.a.createElement(k,{ref:P,items:("pending"!==s&&l&&l.data||[]).map((function(e){return me(me({},e),{},{id:e.system_uuid})})),sortBy:(a=Number(Object.entries(B).find((function(e){return e[1]===w.sort||"-".concat(e[1])===w.sort}))[0]),r="-"===w.sort[0]?"desc":"asc",{index:a,key:6!==a?B[a]:"updated",direction:r}),onSort:function(e){var t=e.index,a=e.direction,r="".concat("asc"===a?"":"-").concat(B[t]);_(me(me({},w),{},{sort:r,offset:0}))},hasCheckbox:!1,page:w.offset/w.limit+1,total:A,isLoaded:"pending"!==s,perPage:Number(w.limit),onRefresh:function(e){if("fulfilled"===s){var t=w.offset,a=w.limit;e.page*e.per_page-e.per_page===t&&a===e.per_page||_(me(me({},w),{},{limit:e.per_page,offset:e.page*e.per_page-e.per_page}))}},filterConfig:{items:W},activeFiltersConfig:q,exportConfig:{onSelect:function(e,t){return Object(ne.a)("systems",t,Object(j.d)(w,T))},extraItems:[O.a.createElement("li",{key:"download-pd",role:"menuitem"},O.a.createElement(te,{filters:me({},Object(j.a)(w)),selectedTags:T&&T.join(),systemsCount:l&&l.meta&&l.meta.count}))]}}):"failed"===s&&O.a.createElement(E.a,{message:f.formatMessage(J.a.systemTableFetchError)}):O.a.createElement(S.a,null)};pe.propTypes={fetchSystems:_.a.func,systemsFetchStatus:_.a.string,systems:_.a.object,addNotification:_.a.func,intl:_.a.any,filters:_.a.object,setFilters:_.a.func,selectedTags:_.a.array};t.default=Object(oe.c)(le()(Object(m.connect)((function(e){var t=e.AdvisorStore;return{systems:t.systems,systemsFetchStatus:t.systemsFetchStatus,filters:t.filtersSystems,selectedTags:t.selectedTags}}),(function(e){return{fetchSystems:function(t){return e(f.f(t))},addNotification:function(t){return e(Object(ae.addNotification)(t))},setFilters:function(t){return e(f.l(t))}}}))(pe)))}}]);
//# sourceMappingURL=SystemsTable.js.map