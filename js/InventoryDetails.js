(window.webpackJsonp=window.webpackJsonp||[]).push([[9,13],{1602:function(e,r,t){"use strict";t.r(r);var n=t(93),a=t.n(n),o=t(92),i=t.n(o),c=t(159),u=t.n(c),l=t(158),s=t.n(l),f=(t(1603),t(232)),d=t(64),p=t(1604),b=t(0),m=t.n(b),g=t(63),v=t(577),y=t(485),_=t(545),h=t(1),O=t.n(h),j=t(193),w=t(177),S=t(160),E=t.n(S);function x(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function P(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?x(Object(t),!0).forEach((function(r){i()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var k=function(e){var r=e.entity,t=e.match,n=Object(b.useState)(),o=s()(n,2),i=o[0],c=o[1],l=Object(b.useState)(),h=s()(l,2),O=h[0],S=h[1],E=Object(g.useStore)(),x=function(){var e=u()(a.a.mark((function e(){var r,t,n,o,i,u,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.loadInventory({react:m.a,reactRouterDom:d,pfReactTable:f});case 2:r=e.sent,t=r.inventoryConnector,n=r.mergeWithDetail,o=r.INVENTORY_ACTION_TYPES,i=t(E),u=i.InventoryDetailHead,l=i.AppInfo,Object(w.getRegistry)().register(P({},n(Object(j.b)(o)))),c((function(){return u})),S((function(){return l}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.useEffect)((function(){x()}),[]),m.a.createElement(m.a.Fragment,null,m.a.createElement(_.PageHeader,{className:"pf-m-light ins-inventory-detail"},r&&m.a.createElement(v.a,{current:r.display_name||r.id,match:t}),i&&m.a.createElement(i,{hideBack:!0})),m.a.createElement(y.Main,null,m.a.createElement(p.Grid,{gutter:"md"},m.a.createElement(p.GridItem,{span:12},O&&m.a.createElement(O,null)))))};k.contextTypes={store:O.a.object},k.propTypes={history:O.a.object,entity:O.a.object,addAlert:O.a.func,match:O.a.any};r.default=E()(Object(g.connect)((function(e){var r=e.entityDetails,t=e.props;return P({entity:r&&r.entity},t)}),null)(k))},1603:function(e,r,t){var n=t(747);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=t(7)(n,a);n.locals&&(e.exports=n.locals),e.hot.accept(747,(function(){var r=t(747);if("string"==typeof r&&(r=[[e.i,r,""]]),!function(e,r){var t,n=0;for(t in e){if(!r||e[t]!==r[t])return!1;n++}for(t in r)n--;return 0===n}(n.locals,r.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(r)})),e.hot.dispose((function(){o()}))},1604:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(1605);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return n[e]}})}));var a=t(254);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return a[e]}})}))},1605:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Grid=void 0;var n=l(t(1)),a=function(e){if(e&&e.__esModule)return e;var r=u();if(r&&r.has(e))return r.get(e);var t={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(t,a,o):t[a]=e[a]}}t.default=e,r&&r.set(e,t);return t}(t(0)),o=l(t(268)),i=t(2),c=t(255);function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function f(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var t=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=function(e){var r=e.children,t=void 0===r?null:r,n=e.className,u=void 0===n?"":n,l=e.gutter,p=void 0===l?null:l,b=e.span,m=void 0===b?null:b,g=d(e,["children","className","gutter","span"]),v=[o.default.grid,m&&(0,i.getModifier)(o.default,"all_".concat(m,"Col"))];return Object.entries(c.DeviceSizes).forEach((function(e){var r=f(e,2),t=r[0],n=r[1],a=t,c=g[a];c&&v.push((0,i.getModifier)(o.default,"all_".concat(c,"ColOn").concat(n))),delete g[a]})),a.createElement("div",s({className:i.css.apply(void 0,v.concat([p&&o.default.modifiers.gutter,u]))},g),t)};r.Grid=p,p.propTypes={children:n.default.node,className:n.default.string,gutter:n.default.oneOf(["sm","md","lg"]),span:n.default.oneOf([1,2,3,4,5,6,7,8,9,10,11,12]),sm:n.default.oneOf([1,2,3,4,5,6,7,8,9,10,11,12]),md:n.default.oneOf([1,2,3,4,5,6,7,8,9,10,11,12]),lg:n.default.oneOf([1,2,3,4,5,6,7,8,9,10,11,12]),xl:n.default.oneOf([1,2,3,4,5,6,7,8,9,10,11,12]),xl2:n.default.oneOf([1,2,3,4,5,6,7,8,9,10,11,12])}},442:function(e,r,t){"use strict";t.d(r,"d",(function(){return f})),t.d(r,"b",(function(){return d})),t.d(r,"e",(function(){return p})),t.d(r,"k",(function(){return b})),t.d(r,"h",(function(){return m})),t.d(r,"i",(function(){return g})),t.d(r,"g",(function(){return v})),t.d(r,"f",(function(){return y})),t.d(r,"c",(function(){return _})),t.d(r,"j",(function(){return h})),t.d(r,"a",(function(){return O})),t.d(r,"l",(function(){return j})),t.d(r,"n",(function(){return w})),t.d(r,"m",(function(){return S})),t.d(r,"o",(function(){return E}));var n=t(93),a=t.n(n),o=t(159),i=t.n(o),c=t(4),u=t(447),l=function(){var e=i()(a.a.mark((function e(r,t,n){var o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return e.next=4,u.a.get(r,t,n);case 4:return o=e.sent,e.abrupt("return",o.data);case 6:case"end":return e.stop()}}),e)})));return function(r,t,n){return e.apply(this,arguments)}}(),s=function(){var e=i()(a.a.mark((function e(r,t,n){var o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return e.next=4,u.a.post(r,t,n);case 4:return o=e.sent,e.abrupt("return",o.data);case 6:case"end":return e.stop()}}),e)})));return function(r,t,n){return e.apply(this,arguments)}}(),f=function(e){return{type:c.RULES_FETCH,payload:l(c.RULES_FETCH_URL,{},e)}},d=function(e){return{type:c.RULE_FETCH,payload:l("".concat(c.RULES_FETCH_URL).concat(e.rule_id,"/"),{},e.tags&&{tags:e.tags})}},p=function(e){return{type:c.SYSTEM_FETCH,payload:l("".concat(c.RULES_FETCH_URL).concat(e.rule_id,"/systems/"),{},e.tags&&{tags:e.tags})}},b=function(e){return{type:c.FILTERS_SET,payload:e}},m=function(e){return{type:c.TOPICS_FETCH,payload:l(c.TOPICS_FETCH_URL,{},e)}},g=function(){return{type:c.TOPICS_FETCH,payload:l("".concat(c.TOPICS_FETCH_URL,"?show_disabled=true"))}},v=function(e){return{type:c.TOPIC_FETCH,payload:l("".concat(c.TOPICS_FETCH_URL).concat(e.topic_id,"/"))}},y=function(e){return{type:c.SYSTEMS_FETCH,payload:l(c.SYSTEMS_FETCH_URL,{},e)}},_=function(e){return{type:c.RULE_ACK_FETCH,payload:l("".concat(c.RULE_ACK_URL).concat(e.rule_id,"/"))}},h=function(e){return{type:c["".concat(e.type,"_ACK_SET")],payload:s(c["".concat(e.type,"_ACK_URL")],{},e.options)}},O=function(e){return{type:c.HOST_ACK_FETCH,payload:l("".concat(c.HOST_ACK_URL),{},e)}},j=function(e){return{type:c.FILTERS_SYSTEMS_SET,payload:e}},w=function(e){return{type:c.SELECTED_TAGS_SET,payload:e}},S=function(e){return{type:c.RULE_SET,payload:e}},E=function(e){return{type:c.SYSTEM_SET,payload:e}}},453:function(e,r,t){var n=t(472),a=t(473),o=t(234),i=t(474);e.exports=function(e){return n(e)||a(e)||o(e)||i()}},466:function(e,r,t){(e.exports=t(5)(!1)).push([e.i,".pf-c-breadcrumb{--pf-c-breadcrumb__item--FontSize: var(--pf-global--FontSize--sm);--pf-c-breadcrumb__item--FontWeight: var(--pf-global--FontWeight--semi-bold);--pf-c-breadcrumb__item--LineHeight: var(--pf-global--LineHeight--sm);--pf-c-breadcrumb__item--MarginRight: var(--pf-global--spacer--sm);--pf-c-breadcrumb__item-divider--Color: var(--pf-global--BorderColor--200);--pf-c-breadcrumb__item-divider--MarginLeft: var(--pf-global--spacer--sm);--pf-c-breadcrumb__item-divider--FontSize: var(--pf-global--FontSize--sm);--pf-c-breadcrumb__link--FontWeight: var(--pf-global--FontWeight--semi-bold);--pf-c-breadcrumb__link--m-current--Color: var(--pf-global--Color--100);--pf-c-breadcrumb__heading--FontSize: var(--pf-global--FontSize--sm);display:inline-flex}.pf-c-breadcrumb__list{display:flex;flex-wrap:wrap;align-items:center}.pf-c-breadcrumb__item{display:flex;align-items:center;font-size:var(--pf-c-breadcrumb__item--FontSize);font-weight:var(--pf-c-breadcrumb__item--FontWeight);line-height:var(--pf-c-breadcrumb__item--LineHeight);cursor:default}.pf-c-breadcrumb__item:not(:last-child){margin-right:var(--pf-c-breadcrumb__item--MarginRight)}.pf-c-breadcrumb__item-divider{margin-left:var(--pf-c-breadcrumb__item-divider--MarginLeft);font-size:var(--pf-c-breadcrumb__item-divider--FontSize);line-height:1;color:var(--pf-c-breadcrumb__item-divider--Color)}.pf-c-breadcrumb__link{font-size:inherit;font-weight:var(--pf-c-breadcrumb__link--FontWeight);line-height:inherit}.pf-c-breadcrumb__link.pf-m-current{cursor:default}.pf-c-breadcrumb__link.pf-m-current,.pf-c-breadcrumb__link.pf-m-current:hover,.pf-c-breadcrumb__link.pf-m-current.pf-m-hover{color:var(--pf-c-breadcrumb__link--m-current--Color);text-decoration:none}.pf-c-breadcrumb__heading{font-size:var(--pf-c-breadcrumb__heading--FontSize)}.pf-m-redhat-font .pf-c-breadcrumb{--pf-c-breadcrumb__link--FontWeight: var(--pf-global--FontWeight--normal);--pf-c-breadcrumb__item--FontWeight: var(--pf-global--FontWeight--normal)}\n",""])},472:function(e,r,t){var n=t(235);e.exports=function(e){if(Array.isArray(e))return n(e)}},473:function(e,r){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},474:function(e,r){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},486:function(e,r,t){"use strict";t.d(r,"d",(function(){return s})),t.d(r,"b",(function(){return f})),t.d(r,"c",(function(){return d})),t.d(r,"a",(function(){return p}));var n=t(92),a=t.n(n),o=t(158),i=t.n(o),c=t(453),u=t.n(c);function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var s=function(e,r){var t="?".concat(Object.keys(e).map((function(r){return"".concat(r,"=").concat(Array.isArray(e[r])?e[r].join():e[r])})).join("&"));return r&&r.replace({search:t}),t},f=function(e){return Object.assign.apply(Object,[{}].concat(u()(Object.entries(e).map((function(e){var r=i()(e,2),t=r[0],n=r[1];return Array.isArray(n)?("true"===n[0]||"false"===n[0])&&n.length>1?null:a()({},t,n.join()):a()({},t,n)})))))},d=function(e){var r=new URLSearchParams(e.location.search);return Array.from(r).reduce((function(e,r){var t=i()(r,2),n=t[0],o=t[1];return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e,a()({},n,"true"===o||"false"===o?JSON.parse(o):o.split(",")))}),{})},p=function(e){return e[0].toUpperCase()+e.substring(1)}},487:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t(579),r.default={breadcrumb:"pf-c-breadcrumb",breadcrumbList:"pf-c-breadcrumb__list",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbHeading:"pf-c-breadcrumb__heading",modifiers:{current:"pf-m-current",hover:"pf-m-hover",redhatFont:"pf-m-redhat-font"}}},577:function(e,r,t){"use strict";var n=t(92),a=t.n(n),o=t(158),i=t.n(o),c=t(442),u=t(0),l=t.n(u),s=t(578),f=t(580),d=t(64),p=t(1),b=t.n(p),m=t(486),g=t(63),v=t(15),y=t(10),_=t(160),h=t.n(_);function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var j=function(e){var r=e.current,t=e.fetchRule,n=e.match,a=e.ruleFetchStatus,o=e.rule,c=e.intl,p=Object(u.useState)([]),b=i()(p,2),g=b[0],v=b[1],_=Object(u.useState)(!1),h=i()(_,2),O=h[0],j=h[1],w=Object(u.useCallback)((function(){var e=[],r=n.url.split("/");e.push({title:Object(m.a)(r[1]),navigate:"/".concat(r[1])}),"recommendations"===r[1]&&r[1]+r[2]==="recommendationssystems"&&e.push({title:c.formatMessage(y.a.systems),navigate:"/recommendations/systems"}),void 0!==n.params.id&&void 0!==n.params.inventoryId&&e.push({title:o.description,navigate:"/".concat(n.url.split("/")[1],"/").concat(n.params.id)}),v(e)}),[c,n.params.id,n.params.inventoryId,n.url,o.description]);return Object(u.useEffect)((function(){var e=n.url.split("/");void 0!==n.params.inventoryId&&"systems"!==e[2]?t({rule_id:n.params.id}):w()}),[w,t,n.params.id,n.params.inventoryId,n.url]),Object(u.useEffect)((function(){"fulfilled"!==a||O||(j(!0),w())}),[w,a,O]),l.a.createElement(l.a.Fragment,null,("fulfilled"===a||g.length>0)&&l.a.createElement(s.Breadcrumb,null,g.map((function(e,r){return l.a.createElement(f.BreadcrumbItem,{key:r},l.a.createElement(d.Link,{to:e.navigate},e.title))})),l.a.createElement(f.BreadcrumbItem,{isActive:!0},r)),"pending"===a&&c.formatMessage(y.a.loading))};j.propTypes={current:b.a.string,fetchRule:b.a.func,match:b.a.object,rule:b.a.object,ruleFetchStatus:b.a.string,intl:b.a.any};r.a=Object(v.c)(h()(Object(g.connect)((function(e,r){return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){a()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({rule:e.AdvisorStore.rule,ruleFetchStatus:e.AdvisorStore.ruleFetchStatus},r)}),(function(e){return{fetchRule:function(r){return e(c.b(r))}}}))(j)))},578:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Breadcrumb=void 0;var n=l(t(1)),a=function(e){if(e&&e.__esModule)return e;var r=u();if(r&&r.has(e))return r.get(e);var t={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(t,a,o):t[a]=e[a]}}t.default=e,r&&r.set(e,t);return t}(t(0)),o=l(t(487)),i=t(2),c=t(41);function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function f(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=function(e){var r=e.children,t=void 0===r?null:r,n=e.className,c=void 0===n?"":n,u=e["aria-label"],l=void 0===u?"Breadcrumb":u,d=e.ouiaContext,p=void 0===d?null:d,b=e.ouiaId,m=void 0===b?null:b,g=f(e,["children","className","aria-label","ouiaContext","ouiaId"]);return a.createElement("nav",s({},g,{"aria-label":l,className:(0,i.css)(o.default.breadcrumb,c)},p.isOuia&&{"data-ouia-component-type":"Breadcrumb","data-ouia-component-id":m||p.ouiaId}),a.createElement("ol",{className:(0,i.css)(o.default.breadcrumbList)},t))};d.propTypes={children:n.default.node,className:n.default.string,"aria-label":n.default.string};var p=(0,c.withOuiaContext)(d);r.Breadcrumb=p},579:function(e,r,t){var n=t(466);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=t(7)(n,a);n.locals&&(e.exports=n.locals),e.hot.accept(466,(function(){var r=t(466);if("string"==typeof r&&(r=[[e.i,r,""]]),!function(e,r){var t,n=0;for(t in e){if(!r||e[t]!==r[t])return!1;n++}for(t in r)n--;return 0===n}(n.locals,r.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(r)})),e.hot.dispose((function(){o()}))},580:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.BreadcrumbItem=void 0;var n=l(t(1)),a=function(e){if(e&&e.__esModule)return e;var r=u();if(r&&r.has(e))return r.get(e);var t={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(t,a,o):t[a]=e[a]}}t.default=e,r&&r.set(e,t);return t}(t(0)),o=l(t(97)),i=l(t(487)),c=t(2);function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function f(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=function(e){var r=e.children,t=void 0===r?null:r,n=e.className,u=void 0===n?"":n,l=e.to,d=void 0===l?null:l,p=e.isActive,b=void 0!==p&&p,m=e.target,g=void 0===m?null:m,v=e.component,y=void 0===v?"a":v,_=f(e,["children","className","to","isActive","target","component"]),h=y;return a.createElement("li",s({},_,{className:(0,c.css)(i.default.breadcrumbItem,u)}),d&&a.createElement(h,{href:d,target:g,className:(0,c.css)(i.default.breadcrumbLink,b?(0,c.getModifier)(i.default,"current"):""),"aria-current":b?"page":void 0},t),!d&&a.createElement(a.Fragment,null,t),!b&&a.createElement("span",{className:(0,c.css)(i.default.breadcrumbItemDivider)},a.createElement(o.default,null)))};r.BreadcrumbItem=d,d.propTypes={children:n.default.node,className:n.default.string,to:n.default.string,isActive:n.default.bool,target:n.default.string,component:n.default.node}},747:function(e,r,t){(e.exports=t(5)(!1)).push([e.i,":root{--ins-color--orange: #ec7a08}.ins-empty-rule-cards div{text-align:center}.ins-c-rules-card .pf-c-card__header .pf-l-split__item:first-of-type{white-space:nowrap;margin-right:5px;margin-right:0.3125rem}.ins-c-rules-card .ins-l-icon-group__with-major{display:inline}.ins-c-rules-card .space-between{display:flex;justify-content:space-between}.ins-c-rules-card .pf-c-card__header div{font-weight:600}.ins-c-rules-card+.ins-c-rules-card{margin-top:var(--pf-global--spacer--xl)}.ins-c-rules-card a[disabled]{cursor:not-allowed;color:var(--pf-global--disabled-color--200)}.ins-c-rules-card a[disabled]:hover{text-decoration:none}.ins-c-inventory-advisor__card .ins-m-card__flat{box-shadow:none;border:1px solid #dcdcdc;border-radius:5px}.ins-c-inventory-advisor__card .pf-c-card__body svg{margin-right:5px;margin-right:0.3125rem}.ins-c-inventory-advisor__card pre{display:block;padding:10px;padding:0.59375rem;margin-top:5px;margin-top:0.3125rem;margin-bottom:10px;margin-bottom:0.625rem;color:#333;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}.ins-c-inventory-advisor__card pre code{white-space:pre-wrap}.ins-c-inventory-advisor__card ol{margin-top:10px;margin-top:0.625rem;margin-left:15px;margin-left:0.9375rem}.ins-c-inventory-advisor__card p+pre,.ins-c-inventory-advisor__card ul+pre{margin-bottom:20px;margin-bottom:1.25rem}.ins-c-inventory-advisor__card .pf-c-list{margin:5px 0px;margin:0.3125rem 0rem}.ins-c-inventory-advisor__card table{width:100%;margin-top:15px;margin-top:0.9375rem}.ins-c-inventory-advisor__card table tr{border-bottom:1px solid #ededed}.ins-c-inventory-advisor__card table th,.ins-c-inventory-advisor__card table td{padding:16px;padding:1rem}.ins-c-inventory-advisor__card table td{background:white !important}.ins-c-inventory-advisor__card table th{text-align:left !important}.batterySectionOverrides{margin-top:16px}.smallFontSizeOverride{font-size:var(--pf-global--FontSize--sm)}.successColorOverride{color:var(--pf-global--success-color--200)}.remediationButtonOverride{margin-top:-8px}.pf-c-check__label #battery_svg{height:1.25rem}.chartSpikeIconColor{color:var(--pf-global--primary-color--100)}.pf-c-clipboard-copy__group-copy{background-color:var(--pf-global--BackgroundColor--100)}.pf-l-stack{color:var(--pf-c-empty-state__body--Color)}.ins-c-insights__check{color:var(--pf-global--success-color--200)}.ins-c-background__default{color:var(--pf-global--BackgroundColor--100)}:root{--ins-color--orange: #ec7a08}button:focus{outline:none}section.ins-l-content{padding:var(--pf-global--spacer--lg)}section.ins-l-button-group{margin:24px 0px;margin:1.5rem 0rem}section.ins-l-button-group>*{display:inline}section.ins-l-button-group *+*{margin-left:5px;margin-left:0.3125rem}section.ins-l-icon-group *+*{margin-left:10px}section.ins-l-icon-group__with-major *+*{margin-left:7.5px}section.ins-l-icon-group__with-major .ins-battery:last-of-type{padding-left:15px;border-left:2px solid #eaeaea}section.ins-l-icon-group__with-major .ins-battery:last-of-type span.label{font-weight:500;margin:0 10px}\n",""])}}]);
//# sourceMappingURL=InventoryDetails.js.map