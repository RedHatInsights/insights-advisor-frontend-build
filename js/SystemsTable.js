(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1064:function(e,t,n){"use strict";var r=n(226),a=n.n(r),s=n(0);t.a=function(e,t){var n=Object(s.useState)(e),r=a()(n,2),c=r[0],i=r[1];return Object(s.useEffect)((function(){var n=setTimeout((function(){i(e)}),t);return function(){clearTimeout(n)}}),[t,e]),c}},1065:function(e,t,n){"use strict";var r=n(147),a=n.n(r),s=n(227),c=n.n(s),i=n(755),o=n(9),f=n(237),u=function(e){var t={date:(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc"};return"Insights-Advisor_".concat(e,"--").concat(t.date)},l=function(){var e=c()(a.a.mark((function e(t,n,r){var s,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("".concat(o.BASE_URL,"/export/").concat(t,".").concat("json"===n?"json":"csv").concat(r));case 3:s=e.sent,c="json"===n?JSON.stringify(s.data):s.data,Object(f.downloadFile)(c,u(t),n),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),"".concat(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n,r){return e.apply(this,arguments)}}();t.a=l},1614:function(e,t,n){"use strict";n.r(t);var r=n(147),a=n.n(r),s=n(227),c=n.n(s),i=n(105),o=n.n(i),f=n(226),u=n.n(f),l=n(756),p=n(148),m=n(256),d=n(257),b=n(106),y=n(0),g=n.n(y),O=n(91),j=n(824),h=n(839),v=n(781),w=n(1),S=n.n(w),_=n(51),P=n(1064),k=n(1065),E=n(236),T=n(20),x=n(12),D=n(228),N=n.n(D),M=n(235);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=function(e){var t,n,r,s=e.systemsFetchStatus,i=e.fetchSystems,f=e.systems,l=e.intl,w=e.filters,S=e.setFilters,_=e.selectedTags,T=Object(y.useRef)(null),D=Object(y.useState)(),N=u()(D,2),R=N[0],F=N[1],A=Object(O.useStore)(),I=f.meta?f.meta.count:0,J=Object(y.useState)(w.display_name||""),L=u()(J,2),U=L[0],B=L[1],V=Object(P.a)(U,800),Y=Object(y.useState)(!0),H=u()(Y,2),W=H[0],q=H[1],z={0:"display_name",1:"hits",2:"critical_hits",3:"important_hits",4:"moderate_hits",5:"low_hits",6:"last_seen"},G=Object(y.useCallback)((function(){var e=_.length&&{tags:_.join()};i(C(C({},w),e))}),[i,w,_]),K=[{label:l.formatMessage(x.a.name),filterValues:{key:"text-filter",onChange:function(e,t){return B(t)},value:U}}],Q={filters:U.length>0&&[{category:"Description",chips:[{name:U}]}]||[],onDelete:function(){return B("")}};return Object(y.useEffect)((function(){c()(a.a.mark((function e(){var t,n,r,s,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.loadInventory({react:g.a,reactRouterDom:b,pfReactTable:p});case 2:t=e.sent,n=t.inventoryConnector,r=t.mergeWithEntities,s=t.INVENTORY_ACTION_TYPES,Object(E.getRegistry)().register(C({},r(Object(M.c)([{title:l.formatMessage(x.a.name),transforms:[m.a],key:"display_name"},{title:l.formatMessage(x.a.numberRuleHits),transforms:[m.a,d.a(15)],key:"hits"},{title:l.formatMessage(x.a.critical),key:"critical_hits"},{title:l.formatMessage(x.a.important),key:"important_hits"},{title:l.formatMessage(x.a.moderate),key:"moderate_hits"},{title:l.formatMessage(x.a.low),key:"low_hits"},{title:l.formatMessage(x.a.lastSeen),transforms:[m.a],key:"updated"}],s)))),c=n(A),i=c.InventoryTable,F((function(){return i}));case 9:case"end":return e.stop()}}),e)})))()}),[l,A]),Object(y.useEffect)((function(){void 0===w.display_name?B(""):B(w.display_name)}),[w.display_name]),Object(y.useEffect)((function(){var e=C({},w);delete e.display_name,S(C(C(C({},e),U.length?{display_name:U}:{}),{},{offset:0}))}),[V]),Object(y.useEffect)((function(){if(window.location.search){var e=Object(j.c)();delete e.tags,void 0!==e.sort&&(e.sort=e.sort[0]),void 0!==e.display_name&&(e.display_name=e.display_name[0]),void 0===e.offset?e.offset=0:e.offset=Number(e.offset[0]),void 0===e.limit?e.limit=10:e.limit=Number(e.limit[0]),S(C(C({},w),e))}else void 0!==w.limit&&void 0!==w.offest||S(C(C({},w),{},{offset:0,limit:10}));q(!1)}),[]),Object(y.useEffect)((function(){Object(j.d)(w,_)}),[w,_]),Object(y.useEffect)((function(){!W&&"pending"!==s&&null!==_&&G()}),[G,W,w,_]),R?"failed"!==s?g.a.createElement(R,{ref:T,items:("pending"!==s&&f&&f.data||[]).map((function(e){return C(C({},e),{},{id:e.system_uuid})})),sortBy:(n=Number(Object.entries(z).find((function(e){return e[1]===w.sort||"-".concat(e[1])===w.sort}))[0]),r="-"===w.sort[0]?"desc":"asc",{index:n,key:6!==n?z[n]:"updated",direction:r}),onSort:function(e){var t=e.index,n=e.direction,r="".concat("asc"===n?"":"-").concat(z[t]);S(C(C({},w),{},{sort:r,offset:0}))},hasCheckbox:!1,page:w.offset/w.limit+1,total:I,isLoaded:"pending"!==s,perPage:Number(w.limit),onRefresh:function(e){if("fulfilled"===s){var t=w.offset,n=w.limit;e.page*e.per_page-e.per_page===t&&n===e.per_page||S(C(C({},w),{},{limit:e.per_page,offset:e.page*e.per_page-e.per_page}))}},filterConfig:{items:K},activeFiltersConfig:Q,exportConfig:(t={label:l.formatMessage(x.a.exportCsv)},o()(t,"label",l.formatMessage(x.a.exportJson)),o()(t,"onSelect",(function(e,t){return Object(k.a)("systems",t,Object(j.d)(w,_))})),t)}):"failed"===s&&g.a.createElement(h.a,{message:l.formatMessage(x.a.systemTableFetchError)}):g.a.createElement(v.a,null)};F.propTypes={fetchSystems:S.a.func,systemsFetchStatus:S.a.string,systems:S.a.object,addNotification:S.a.func,intl:S.a.any,filters:S.a.object,setFilters:S.a.func,selectedTags:S.a.array};t.default=Object(T.c)(N()(Object(O.connect)((function(e){var t=e.AdvisorStore;return{systems:t.systems,systemsFetchStatus:t.systemsFetchStatus,filters:t.filtersSystems,selectedTags:t.selectedTags}}),(function(e){return{fetchSystems:function(t){return e(l.f(t))},addNotification:function(t){return e(Object(_.addNotification)(t))},setFilters:function(t){return e(l.l(t))}}}))(F)))},824:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"a",(function(){return d}));var r=n(105),a=n.n(r),s=n(226),c=n.n(s),i=n(772),o=n.n(i);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function(e,t){var n=new URL(window.location),r="".concat(Object.keys(e).map((function(t){return"".concat(t,"=").concat(Array.isArray(e[t])?e[t].join():e[t])})).join("&")),a=new URLSearchParams(r);return null!==t&&t.length?a.set("tags",t.join()):a.delete("tags"),window.history.replaceState(null,null,"".concat(n.origin).concat(n.pathname,"?").concat(a.toString())),"?".concat(r)},p=function(e){return Object.assign.apply(Object,[{}].concat(o()(Object.entries(e).map((function(e){var t=c()(e,2),n=t[0],r=t[1];return Array.isArray(r)?("true"===r[0]||"false"===r[0])&&r.length>1?null:a()({},n,r.join()):a()({},n,r)})))))},m=function(){var e=new URLSearchParams(window.location.search);return Array.from(e).reduce((function(e,t){var n=c()(t,2),r=n[0],s=n[1];return u(u({},e),{},a()({},r,"true"===s||"false"===s?JSON.parse(s):s.split(",")))}),{})},d=function(e){return e[0].toUpperCase()+e.substring(1)}}}]);
//# sourceMappingURL=SystemsTable.js.map