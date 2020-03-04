(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1093:function(e,t,a){"use strict";a.r(t);var r=a(91),n=a.n(r),o=a(415),l=a(449),c=a(1),i=a.n(c),s=a(435),f=a(0),u=a.n(f),p=a(157),d=a.n(p),m=a(848),b=a.n(m),g=a(204),v=a(22),y=a(208),O=a(207),h=a(489),j=a(60),P=a(432),S=a(433),w=a(558),E=a(240),M=a.n(E),C=a(557),k=a.n(C),x=a(100),T=a.n(x),_=a(59),F=a(12),L=a(10),B=a(158),z=a.n(B),D=function(e){var t=e.topics,a=e.topicsFetchStatus,r=e.intl,n=Object(c.useState)(""),o=d()(n,2),l=o[0],s=o[1],f=Object(c.useState)([{title:r.formatMessage(L.a.name),transforms:[g.a]},"",{title:r.formatMessage(L.a.featured),transforms:[g.a]},{title:r.formatMessage(L.a.affectedSystems),transforms:[g.a]}]),u=d()(f,1)[0],p=Object(c.useState)([]),m=d()(p,2),E=m[0],C=m[1],x=Object(c.useState)({index:2,direction:"desc"}),_=d()(x,2),F=_[0],B=_[1],z=function(e){return e.flatMap((function(e,t){return 0===l.length||e.name.toLowerCase().includes(l.toLowerCase())?[{topic:e,cells:[{title:i.a.createElement("span",{key:t},i.a.createElement(j.Link,{key:t,to:"/topics/".concat(e.slug,"/")}," ",e.name," ")),props:{colSpan:2}},{title:i.a.createElement("span",{key:t}," ",e.featured&&i.a.createElement(h.Label,null," ",i.a.createElement(k.a,null)," ",r.formatMessage(L.a.featured))," ")},{title:i.a.createElement("span",{className:"pf-m-center",key:t}," ",e.impacted_systems_count,"                ")}]}]:[]}))},D=function(e,a,r){var n={0:b()(t,[function(e){return e.name}]),2:b()(t,[function(e){return e.featured}]),3:b()(t,[function(e){return e.impacted_systems_count}])},o=r===v.a.asc?n[a]:n[a].reverse();B({index:a,direction:r}),C(z(o))},N={filters:l.length?[{category:"Description",chips:[{name:l,value:l}]}]:[],onDelete:function(){s(""),B({})}};Object(c.useEffect)((function(){F.index?D(0,F.index,F.direction):C(z(t).asMutable())}),[t,l]);var R=[{label:r.formatMessage(L.a.name),filterValues:{key:"text-filter",onChange:function(e,t){s(t),B({})},value:l}}];return i.a.createElement(i.a.Fragment,null,""===a||"pending"===a&&i.a.createElement(P.a,null),"fulfilled"===a&&t.length>0&&i.a.createElement(i.a.Fragment,null,i.a.createElement(w.PrimaryToolbar,{filterConfig:{items:R},activeFiltersConfig:N}),i.a.createElement(v.b,{"aria-label":"topics-table",sortBy:F,onSort:D,cells:u,rows:E},i.a.createElement(y.a,null),i.a.createElement(O.a,null),0===E.length&&"pending"!==a&&C([{cells:[{title:i.a.createElement(S.a,{icon:M.a,title:r.formatMessage(L.a.noHitsTitle,{item:r.formatMessage(L.a.topics).toLowerCase()}),text:r.formatMessage(L.a.noHitsBody,{item:r.formatMessage(L.a.topics).toLowerCase()})}),props:{colSpan:4}}]}]))),"failed"===a||"rejected"===a||"fulfilled"===a&&0===t.length&&i.a.createElement(S.a,{icon:T.a,title:r.formatMessage(L.a.topicsListNotopicsTitle),text:r.formatMessage(L.a.topicsListNotopicsBody)}))};D.propTypes={topics:u.a.array,topicsFetchStatus:u.a.string,intl:u.a.any};var N=Object(F.c)(z()(Object(_.connect)((function(e){return{topics:e.AdvisorStore.topics,topicsFetchStatus:e.AdvisorStore.topicsFetchStatus}}),null)(D))),R=a(63);function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var I=Object(R.a)((function(){return Promise.all([a.e(0),a.e(2),a.e(5)]).then(a.bind(null,1091))})),A=function(e){var t=e.fetchTopics,a=e.intl,r=e.selectedTags;return Object(c.useEffect)((function(){var e=r.length&&{tags:r.join()};t(e)}),[t,r]),i.a.createElement(i.a.Fragment,null,i.a.createElement(I,null),i.a.createElement(l.PageHeader,null,i.a.createElement(l.PageHeaderTitle,{title:a.formatMessage(L.a.topics)})),i.a.createElement(s.Main,null,i.a.createElement(N,null)))};A.displayName="list-topics",A.propTypes={fetchTopics:u.a.func,intl:u.a.any,selectedTags:u.a.array};t.default=Object(F.c)(z()(Object(_.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({selectedTags:e.AdvisorStore.selectedTags},t)}),(function(e){return{fetchTopics:function(t){return e(o.k(t))}}}))(A)))},431:function(e,t,a){(e.exports=a(6)(!1)).push([e.i,".pf-c-label{--pf-c-label--PaddingTop: var(--pf-global--spacer--xs);--pf-c-label--PaddingRight: var(--pf-global--spacer--sm);--pf-c-label--PaddingBottom: var(--pf-global--spacer--xs);--pf-c-label--PaddingLeft: var(--pf-global--spacer--sm);--pf-c-label--BorderRadius: var(--pf-global--BorderRadius--sm);--pf-c-label--BackgroundColor: var(--pf-global--primary-color--100);--pf-c-label--Color: var(--pf-global--Color--light-100);--pf-c-label--FontSize: var(--pf-global--FontSize--sm);--pf-c-label--m-compact--FontSize: var(--pf-global--FontSize--xs);display:inline-block;padding:var(--pf-c-label--PaddingTop) var(--pf-c-label--PaddingRight) var(--pf-c-label--PaddingBottom) var(--pf-c-label--PaddingLeft);font-size:var(--pf-c-label--FontSize);color:var(--pf-c-label--Color);text-align:center;white-space:nowrap;background-color:var(--pf-c-label--BackgroundColor);border-radius:var(--pf-c-label--BorderRadius)}.pf-c-label.pf-m-compact{--pf-c-label--FontSize: var(--pf-c-label--m-compact--FontSize)}\n",""])},489:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Label=void 0;var r=i(a(0)),n=function(e){if(e&&e.__esModule)return e;var t=c();if(t&&t.has(e))return t.get(e);var a={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=r?Object.getOwnPropertyDescriptor(e,n):null;o&&(o.get||o.set)?Object.defineProperty(a,n,o):a[n]=e[n]}}a.default=e,t&&t.set(e,a);return a}(a(1)),o=i(a(553)),l=a(2);function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function i(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=function(e){var t=e.children,a=e.className,r=void 0===a?"":a,c=e.isCompact,i=void 0!==c&&c,u=f(e,["children","className","isCompact"]);return n.createElement("span",s({},u,{className:(0,l.css)(o.default.label,r,i&&o.default.modifiers.compact)}),t)};t.Label=u,u.propTypes={children:r.default.node.isRequired,className:r.default.string,isCompact:r.default.bool}},553:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a(554),t.default={label:"pf-c-label",modifiers:{compact:"pf-m-compact"}}},554:function(e,t,a){var r=a(431);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=a(8)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(431,(function(){var t=a(431);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},557:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.StarIconConfig=void 0;var r,n=(r=a(7))&&r.__esModule?r:{default:r};var o={name:"StarIcon",height:512,width:576,svgPath:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z",yOffset:"",xOffset:"",transform:""};t.StarIconConfig=o;var l=(0,n.default)(o);t.default=l},848:function(e,t,a){var r=a(770),n=a(772),o=a(445),l=a(573),c=o((function(e,t){if(null==e)return[];var a=t.length;return a>1&&l(e,t[0],t[1])?t=[]:a>2&&l(t[0],t[1],t[2])&&(t=[t[0]]),n(e,r(t,1),[])}));e.exports=c}}]);
//# sourceMappingURL=TopicsList.js.map