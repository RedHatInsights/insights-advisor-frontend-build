(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1e3:function(e,t,r){"use strict";var n=r(129),a=r.n(n),c=r(267),i=r.n(c),o=r(846),u=r(0),l=r.n(u),s=r(799),p=r(800),f=r(130),b=r(13),O=r.n(b),d=r(905),v=r(67),m=r(26),y=r(12),g=r(269),j=r.n(g);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var w=function(e){var t=e.current,r=e.fetchRule,n=e.match,a=e.ruleFetchStatus,c=e.rule,o=e.intl,b=Object(u.useState)([]),O=i()(b,2),v=O[0],m=O[1],g=Object(u.useState)(!1),j=i()(g,2),h=j[0],w=j[1],P=Object(u.useCallback)((function(){var e=[],t=n.url.split("/");e.push({title:Object(d.a)(t[1]),navigate:"/".concat(t[1])}),void 0!==n.params.id&&void 0!==n.params.inventoryId&&e.push({title:c.description,navigate:"/".concat(n.url.split("/")[1],"/").concat(n.params.id)}),m(e)}),[o,n.params.id,n.params.inventoryId,n.url,c.description]);return Object(u.useEffect)((function(){var e=n.url.split("/");void 0!==n.params.inventoryId&&"systems"!==e[1]?r({rule_id:n.params.id}):P()}),[P,r,n.params.id,n.params.inventoryId,n.url]),Object(u.useEffect)((function(){"fulfilled"!==a||h||(w(!0),P())}),[P,a,h]),l.a.createElement(l.a.Fragment,null,("fulfilled"===a||v.length>0)&&l.a.createElement(s.Breadcrumb,null,v.map((function(e,t){return l.a.createElement(p.BreadcrumbItem,{key:t},l.a.createElement(f.Link,{to:e.navigate},e.title))})),l.a.createElement(p.BreadcrumbItem,{isActive:!0},t)),"pending"===a&&o.formatMessage(y.a.loading))};w.propTypes={current:O.a.string,fetchRule:O.a.func,match:O.a.object,rule:O.a.object,ruleFetchStatus:O.a.string,intl:O.a.any};t.a=Object(m.c)(j()(Object(v.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({rule:e.AdvisorStore.rule,ruleFetchStatus:e.AdvisorStore.ruleFetchStatus},t)}),(function(e){return{fetchRule:function(t){return e(o.b(t))}}}))(w)))},1394:function(e,t,r){"use strict";r.r(t);var n=r(181),a=r.n(n),c=r(129),i=r.n(c),o=r(268),u=r.n(o),l=r(267),s=r.n(l),p=(r(816),r(133)),f=r(130),b=r(67),O=r(817),d=r(0),v=r.n(d),m=r(1e3),y=r(789),g=r(790),j=r(13),h=r.n(j),w=r(276),P=r(277),S=r(269),E=r.n(S);function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=function(e){var t=e.entity,r=e.match,n=Object(d.useState)(),c=s()(n,2),i=c[0],o=c[1],l=Object(d.useState)(),j=s()(l,2),h=j[0],S=j[1],E=Object(b.useStore)(),D=function(){var e=u()(a.a.mark((function e(){var t,r,n,c,i,u,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.loadInventory({ReactRedux:b,react:v.a,reactRouterDom:f,pfReactTable:p});case 2:t=e.sent,r=t.inventoryConnector,n=t.mergeWithDetail,c=t.INVENTORY_ACTION_TYPES,i=r(E),u=i.InventoryDetailHead,l=i.AppInfo,Object(P.getRegistry)().register(A({},n(Object(w.a)(c)))),o((function(){return u})),S((function(){return l}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){D()}),[]),v.a.createElement(v.a.Fragment,null,v.a.createElement(g.PageHeader,{className:"pf-m-light ins-inventory-detail"},t&&v.a.createElement(m.a,{current:t.display_name||t.id,match:r}),i&&v.a.createElement(i,{hideBack:!0})),v.a.createElement(y.Main,null,v.a.createElement(O.Grid,{hasGutter:!0},v.a.createElement(O.GridItem,{span:12},h&&v.a.createElement(h,null)))))};I.contextTypes={store:h.a.object},I.propTypes={history:h.a.object,entity:h.a.object,addAlert:h.a.func,match:h.a.any};t.default=E()(Object(b.connect)((function(e){var t=e.entityDetails,r=e.props;return A({entity:t&&t.entity},r)}),null)(I))},843:function(e,t,r){"use strict";var n=r(958),a=r.n(n);t.a={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.a.get(e,{headers:t,params:r})},put:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.a.put(e,t,{headers:r})},post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.a.post(e,r,{headers:t})},delete:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a.a.delete(e,t,{headers:r})}}},905:function(e,t,r){"use strict";r.d(t,"e",(function(){return p})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return b})),r.d(t,"a",(function(){return O})),r.d(t,"d",(function(){return d}));var n=r(129),a=r.n(n),c=r(267),i=r.n(c),o=r(270),u=r.n(o);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e,t){var r=new URL(window.location),n="".concat(Object.keys(e).map((function(t){return"".concat(t,"=").concat(Array.isArray(e[t])?e[t].join():e[t])})).join("&")),a=new URLSearchParams(n);return null!==t&&t.length?a.set("tags",t.join()):a.delete("tags"),window.history.replaceState(null,null,"".concat(r.origin).concat(r.pathname,"?").concat(a.toString())),"?".concat(n)},f=function(e){return Object.assign.apply(Object,[{}].concat(u()(Object.entries(e).map((function(e){var t=i()(e,2),r=t[0],n=t[1];return Array.isArray(n)?("true"===n[0]||"false"===n[0])&&n.length>1?null:a()({},r,n.join()):a()({},r,n)})))))},b=function(){var e=new URLSearchParams(window.location.search);return Array.from(e).reduce((function(e,t){var r=i()(t,2),n=r[0],c=r[1];return s(s({},e),{},a()({},n,"true"===c||"false"===c?JSON.parse(c):c.split(",")))}),{})},O=function(e){return e[0].toUpperCase()+e.substring(1)},d=function(e,t){var r=Object.entries(e);return r.length>0?r.map((function(e){if(t[e[0]]){var r=t[e[0]],n=Array.isArray(e[1])?e[1].map((function(e){var t=r.values.find((function(t){return t.value===String(e)}));return t?{name:t.text||t.label,value:e}:{name:e,value:e}})):[{name:r.values.find((function(t){return t.value===String(e[1])})).label,value:e[1]}];return{category:O(r.title),chips:n,urlParam:r.urlParam}}return{category:"Name",chips:[{name:e[1],value:e[1]}],urlParam:e[0]}})):[]}}}]);
//# sourceMappingURL=InventoryDetails.js.map