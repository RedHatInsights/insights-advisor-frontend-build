(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1655:function(t,e,n){"use strict";n.r(e);var r=n(95),a=n.n(r),c=n(166),o=n.n(c),s=n(68),i=n.n(s),u=n(165),f=n.n(u),l=n(451),p=n(238),d=n(212),y=n(213),m=n(69),g=n(0),O=n.n(g),b=n(67),_=n(496),E=n(514),S=n(477),j=n(1),v=n.n(j),h=n(46),T=n(595),C=n(177),w=n(14),F=n(10),R=n(167),P=n.n(R),L=n(180);function U(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?U(Object(n),!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var k=function(t){var e,n,r=t.systemsFetchStatus,c=t.fetchSystems,s=t.systems,i=t.intl,u=t.filters,l=t.setFilters,j=t.selectedTags,v=Object(g.useRef)(null),h=Object(g.useState)(),w=f()(h,2),R=w[0],P=w[1],U=Object(b.useStore)(),k=s.meta?s.meta.count:0,I=Object(g.useState)(u.display_name||""),M=f()(I,2),A=M[0],x=M[1],D=Object(T.a)(A,800),N=Object(g.useState)(!0),Y=f()(N,2),K=Y[0],z=Y[1],J={0:"display_name",1:"hits",2:"last_seen"},B=Object(g.useCallback)((function(){var t=j.length&&{tags:j.join()};c(H(H({},u),t))}),[c,u,j]),V=[{label:i.formatMessage(F.a.name),filterValues:{key:"text-filter",onChange:function(t,e){return x(e)},value:A}}],G={filters:A.length>0&&[{category:"Description",chips:[{name:A}]}]||[],onDelete:function(){return x("")}};return Object(g.useEffect)((function(){o()(a.a.mark((function t(){var e,n,r,c,o,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,insights.loadInventory({react:O.a,reactRouterDom:m,pfReactTable:p});case 2:e=t.sent,n=e.inventoryConnector,r=e.mergeWithEntities,c=e.INVENTORY_ACTION_TYPES,Object(C.getRegistry)().register(H({},r(Object(L.c)([{title:i.formatMessage(F.a.name),transforms:[d.a],key:"display_name"},{title:i.formatMessage(F.a.numberRuleHits),transforms:[d.a,y.a(15)],key:"hits"},{title:i.formatMessage(F.a.lastSeen),transforms:[d.a],key:"updated"}],c)))),o=n(U),s=o.InventoryTable,P((function(){return s}));case 9:case"end":return t.stop()}}),t)})))()}),[i,U]),Object(g.useEffect)((function(){void 0===u.display_name?x(""):x(u.display_name)}),[u.display_name]),Object(g.useEffect)((function(){var t=H({},u);delete t.display_name,l(H(H(H({},t),A.length?{display_name:A}:{}),{},{offset:0}))}),[D]),Object(g.useEffect)((function(){if(window.location.search){var t=Object(_.c)();delete t.tags,void 0!==t.sort&&(t.sort=t.sort[0]),void 0!==t.display_name&&(t.display_name=t.display_name[0]),void 0===t.offset?t.offset=0:t.offset=Number(t.offset[0]),void 0===t.limit?t.limit=10:t.limit=Number(t.limit[0]),l(H({},t))}else void 0!==u.limit&&void 0!==u.offest||l(H(H({},u),{},{offset:0,limit:10}));z(!1)}),[]),Object(g.useEffect)((function(){Object(_.d)(u,j)}),[u,j]),Object(g.useEffect)((function(){!K&&"pending"!==r&&B()}),[B,K,u,j]),R?"failed"!==r?O.a.createElement(R,{ref:v,items:("pending"!==r&&s&&s.data||[]).map((function(t){return H(H({},t),{},{id:t.system_uuid})})),sortBy:(e=Number(Object.entries(J).find((function(t){return t[1]===u.sort||"-".concat(t[1])===u.sort}))[0]),n="-"===u.sort[0]?"desc":"asc",{index:e,key:2!==e?J[e]:"updated",direction:n}),onSort:function(t){var e=t.index,n=t.direction,r="".concat("asc"===n?"":"-").concat(J[e]);l(H(H({},u),{},{sort:r,offset:0}))},hasCheckbox:!1,page:u.offset/u.limit+1,total:k,isLoaded:"pending"!==r,perPage:Number(u.limit),onRefresh:function(t){if("fulfilled"===r){var e=u.offset,n=u.limit;t.page*t.per_page-t.per_page===e&&n===t.per_page||l(H(H({},u),{},{limit:t.per_page,offset:t.page*t.per_page-t.per_page}))}},filterConfig:{items:V},activeFiltersConfig:G}):"failed"===r&&O.a.createElement(E.a,{message:i.formatMessage(F.a.systemTableFetchError)}):O.a.createElement(S.a,null)};k.propTypes={fetchSystems:v.a.func,systemsFetchStatus:v.a.string,systems:v.a.object,addNotification:v.a.func,intl:v.a.any,filters:v.a.object,setFilters:v.a.func,selectedTags:v.a.array};e.default=Object(w.c)(P()(Object(b.connect)((function(t){var e=t.AdvisorStore;return{systems:e.systems,systemsFetchStatus:e.systemsFetchStatus,filters:e.filtersSystems,selectedTags:e.selectedTags}}),(function(t){return{fetchSystems:function(e){return t(l.f(e))},addNotification:function(e){return t(Object(h.addNotification)(e))},setFilters:function(e){return t(l.l(e))}}}))(k)))},451:function(t,e,n){"use strict";n.d(e,"d",(function(){return l})),n.d(e,"b",(function(){return p})),n.d(e,"e",(function(){return d})),n.d(e,"k",(function(){return y})),n.d(e,"h",(function(){return m})),n.d(e,"i",(function(){return g})),n.d(e,"g",(function(){return O})),n.d(e,"f",(function(){return b})),n.d(e,"c",(function(){return _})),n.d(e,"j",(function(){return E})),n.d(e,"a",(function(){return S})),n.d(e,"l",(function(){return j})),n.d(e,"n",(function(){return v})),n.d(e,"m",(function(){return h})),n.d(e,"o",(function(){return T}));var r=n(95),a=n.n(r),c=n(166),o=n.n(c),s=n(4),i=n(456),u=function(){var t=o()(a.a.mark((function t(e,n,r){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,insights.chrome.auth.getUser();case 2:return t.next=4,i.a.get(e,n,r);case 4:return c=t.sent,t.abrupt("return",c.data);case 6:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),f=function(){var t=o()(a.a.mark((function t(e,n,r){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,insights.chrome.auth.getUser();case 2:return t.next=4,i.a.post(e,n,r);case 4:return c=t.sent,t.abrupt("return",c.data);case 6:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),l=function(t){return{type:s.RULES_FETCH,payload:u(s.RULES_FETCH_URL,{},t)}},p=function(t){return{type:s.RULE_FETCH,payload:u("".concat(s.RULES_FETCH_URL).concat(t.rule_id,"/"),{},t.tags&&{tags:t.tags})}},d=function(t){return{type:s.SYSTEM_FETCH,payload:u("".concat(s.RULES_FETCH_URL).concat(t.rule_id,"/systems/"),{},t.tags&&{tags:t.tags})}},y=function(t){return{type:s.FILTERS_SET,payload:t}},m=function(t){return{type:s.TOPICS_FETCH,payload:u(s.TOPICS_FETCH_URL,{},t)}},g=function(){return{type:s.TOPICS_FETCH,payload:u("".concat(s.TOPICS_FETCH_URL,"?show_disabled=true"))}},O=function(t){return{type:s.TOPIC_FETCH,payload:u("".concat(s.TOPICS_FETCH_URL).concat(t.topic_id,"/"))}},b=function(t){return{type:s.SYSTEMS_FETCH,payload:u(s.SYSTEMS_FETCH_URL,{},t)}},_=function(t){return{type:s.RULE_ACK_FETCH,payload:u("".concat(s.RULE_ACK_URL).concat(t.rule_id,"/"))}},E=function(t){return{type:s["".concat(t.type,"_ACK_SET")],payload:f(s["".concat(t.type,"_ACK_URL")],{},t.options)}},S=function(t){return{type:s.HOST_ACK_FETCH,payload:u("".concat(s.HOST_ACK_URL),{},t)}},j=function(t){return{type:s.FILTERS_SYSTEMS_SET,payload:t}},v=function(t){return{type:s.SELECTED_TAGS_SET,payload:t}},h=function(t){return{type:s.RULE_SET,payload:t}},T=function(t){return{type:s.SYSTEM_SET,payload:t}}},496:function(t,e,n){"use strict";n.d(e,"d",(function(){return l})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return y}));var r=n(68),a=n.n(r),c=n(165),o=n.n(c),s=n(462),i=n.n(s);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=function(t,e){var n=new URL(window.location),r="?".concat(Object.keys(t).map((function(e){return"".concat(e,"=").concat(Array.isArray(t[e])?t[e].join():t[e])})).join("&")),a=new URLSearchParams(r);return e.length?a.set("tags",e.join()):a.delete("tags"),window.history.replaceState(null,null,"".concat(n.origin).concat(n.pathname,"?").concat(a.toString())),"?".concat(r)},p=function(t){return Object.assign.apply(Object,[{}].concat(i()(Object.entries(t).map((function(t){var e=o()(t,2),n=e[0],r=e[1];return Array.isArray(r)?("true"===r[0]||"false"===r[0])&&r.length>1?null:a()({},n,r.join()):a()({},n,r)})))))},d=function(){var t=new URLSearchParams(window.location.search);return Array.from(t).reduce((function(t,e){var n=o()(e,2),r=n[0],c=n[1];return f(f({},t),{},a()({},r,"true"===c||"false"===c?JSON.parse(c):c.split(",")))}),{})},y=function(t){return t[0].toUpperCase()+t.substring(1)}},514:function(t,e,n){"use strict";var r=n(168),a=n(169),c=n(242),o=n(589),s=n.n(o),i=n(0),u=n.n(i),f=n(1),l=n.n(f),p=function(t){var e=t.message;return u.a.createElement(u.a.Fragment,null,u.a.createElement(r.Card,{className:"ins-empty-rule-cards"},u.a.createElement(c.CardHeader,null,u.a.createElement(s.a,{size:"lg"})),u.a.createElement(a.CardBody,null,e)))};e.a=p,p.propTypes={message:l.a.string}},589:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.FrownOpenIconConfig=void 0;var r,a=(r=n(7))&&r.__esModule?r:{default:r};var c={name:"FrownOpenIcon",height:512,width:496,svgPath:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM136 208c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm187.3 183.3c-31.2-9.6-59.4-15.3-75.3-15.3s-44.1 5.7-75.3 15.3c-11.5 3.5-22.5-6.3-20.5-18.1 7-40 60.1-61.2 95.8-61.2s88.8 21.3 95.8 61.2c2 11.9-9.1 21.6-20.5 18.1zM328 240c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z",yOffset:"",xOffset:"",transform:""};e.FrownOpenIconConfig=c;var o=(0,a.default)(c);e.default=o},595:function(t,e,n){"use strict";var r=n(165),a=n.n(r),c=n(0);e.a=function(t,e){var n=Object(c.useState)(t),r=a()(n,2),o=r[0],s=r[1];return Object(c.useEffect)((function(){var n=setTimeout((function(){s(t)}),e);return function(){clearTimeout(n)}}),[e,t]),o}}}]);
//# sourceMappingURL=SystemsTable.js.map