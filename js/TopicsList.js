(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1072:function(e,t,a){"use strict";a.r(t);var r=a(415),n=a(497),l=a(1),o=a.n(l),c=a(460),i=a(0),s=a.n(i),f=a(156),u=a.n(f),p=a(839),d=a.n(p),m=a(203),b=a(22),g=a(207),v=a(206),y=a(495),h=a(59),O=a(458),S=a(459),j=a(689),E=a(237),M=a.n(E),w=a(688),P=a.n(w),C=a(98),x=a.n(C),_=a(58),k=a(12),F=a(10),L=a(158),T=a.n(L),B=function(e){var t=e.topics,a=e.topicsFetchStatus,r=e.intl,n=Object(l.useState)(""),c=u()(n,2),i=c[0],s=c[1],f=Object(l.useState)([{title:r.formatMessage(F.a.name),transforms:[m.a]},"",{title:r.formatMessage(F.a.featured),transforms:[m.a]},{title:r.formatMessage(F.a.affectedSystems),transforms:[m.a]}]),p=u()(f,1)[0],E=Object(l.useState)([]),w=u()(E,2),C=w[0],_=w[1],k=Object(l.useState)({index:2,direction:"desc"}),L=u()(k,2),T=L[0],B=L[1],z=function(e){return e.flatMap((function(e,t){return 0===i.length||e.name.toLowerCase().includes(i.toLowerCase())?[{topic:e,cells:[{title:o.a.createElement("span",{key:t},o.a.createElement(h.Link,{key:t,to:"/topics/".concat(e.slug,"/")}," ",e.name," ")),props:{colSpan:2}},{title:o.a.createElement("span",{key:t}," ",e.featured&&o.a.createElement(y.Label,null," ",o.a.createElement(P.a,null)," ",r.formatMessage(F.a.featured))," ")},{title:o.a.createElement("span",{className:"pf-m-center",key:t}," ",e.impacted_systems_count,"                ")}]}]:[]}))},N=function(e,a,r){var n={0:d()(t,[function(e){return e.name}]),2:d()(t,[function(e){return e.featured}]),3:d()(t,[function(e){return e.impacted_systems_count}])},l=r===b.a.asc?n[a]:n[a].reverse();B({index:a,direction:r}),_(z(l))},R={filters:i.length?[{category:"Description",chips:[{name:i,value:i}]}]:[],onDelete:function(){s(""),B({})}};Object(l.useEffect)((function(){T.index?N(0,T.index,T.direction):_(z(t).asMutable())}),[t,i]);var H=[{label:r.formatMessage(F.a.name),filterValues:{key:"text-filter",onChange:function(e,t){s(t),B({})},value:i}}];return o.a.createElement(o.a.Fragment,null,""===a||"pending"===a&&o.a.createElement(O.a,null),"fulfilled"===a&&t.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement(j.PrimaryToolbar,{filterConfig:{items:H},activeFiltersConfig:R}),o.a.createElement(b.b,{"aria-label":"topics-table",sortBy:T,onSort:N,cells:p,rows:C},o.a.createElement(g.a,null),o.a.createElement(v.a,null),0===C.length&&"pending"!==a&&_([{cells:[{title:o.a.createElement(S.a,{icon:M.a,title:r.formatMessage(F.a.noHitsTitle,{item:r.formatMessage(F.a.topics).toLowerCase()}),text:r.formatMessage(F.a.noHitsBody,{item:r.formatMessage(F.a.topics).toLowerCase()})}),props:{colSpan:4}}]}]))),"failed"===a||"rejected"===a||"fulfilled"===a&&0===t.length&&o.a.createElement(S.a,{icon:x.a,title:r.formatMessage(F.a.topicsListNotopicsTitle),text:r.formatMessage(F.a.topicsListNotopicsBody)}))};B.propTypes={topics:s.a.array,topicsFetchStatus:s.a.string,intl:s.a.any};var z=Object(k.c)(T()(Object(_.connect)((function(e){return{topics:e.AdvisorStore.topics,topicsFetchStatus:e.AdvisorStore.topicsFetchStatus}}),null)(B))),N=function(e){var t=e.fetchTopics,a=e.intl;return Object(l.useEffect)((function(){t()}),[t]),o.a.createElement(o.a.Fragment,null,o.a.createElement(n.PageHeader,null,o.a.createElement(n.PageHeaderTitle,{title:a.formatMessage(F.a.topics)})),o.a.createElement(c.Main,null,o.a.createElement(z,null)))};N.displayName="list-topics",N.propTypes={fetchTopics:s.a.func,intl:s.a.any};t.default=Object(k.c)(T()(Object(_.connect)(null,(function(e){return{fetchTopics:function(){return e(r.j())}}}))(N)))},423:function(e,t,a){(e.exports=a(5)(!1)).push([e.i,".pf-c-label{--pf-c-label--PaddingTop: var(--pf-global--spacer--xs);--pf-c-label--PaddingRight: var(--pf-global--spacer--sm);--pf-c-label--PaddingBottom: var(--pf-global--spacer--xs);--pf-c-label--PaddingLeft: var(--pf-global--spacer--sm);--pf-c-label--BorderRadius: var(--pf-global--BorderRadius--sm);--pf-c-label--BackgroundColor: var(--pf-global--primary-color--100);--pf-c-label--Color: var(--pf-global--Color--light-100);--pf-c-label--FontSize: var(--pf-global--FontSize--sm);--pf-c-label--m-compact--FontSize: var(--pf-global--FontSize--xs);display:inline-block;padding:var(--pf-c-label--PaddingTop) var(--pf-c-label--PaddingRight) var(--pf-c-label--PaddingBottom) var(--pf-c-label--PaddingLeft);font-size:var(--pf-c-label--FontSize);color:var(--pf-c-label--Color);text-align:center;white-space:nowrap;background-color:var(--pf-c-label--BackgroundColor);border-radius:var(--pf-c-label--BorderRadius)}.pf-c-label.pf-m-compact{--pf-c-label--FontSize: var(--pf-c-label--m-compact--FontSize)}\n",""])},495:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Label=void 0;var r=i(a(0)),n=function(e){if(e&&e.__esModule)return e;var t=c();if(t&&t.has(e))return t.get(e);var a={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var l=r?Object.getOwnPropertyDescriptor(e,n):null;l&&(l.get||l.set)?Object.defineProperty(a,n,l):a[n]=e[n]}}a.default=e,t&&t.set(e,a);return a}(a(1)),l=i(a(501)),o=a(2);function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function i(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=function(e){var t=e.children,a=e.className,r=void 0===a?"":a,c=e.isCompact,i=void 0!==c&&c,u=f(e,["children","className","isCompact"]);return n.createElement("span",s({},u,{className:(0,o.css)(l.default.label,r,i&&l.default.modifiers.compact)}),t)};t.Label=u,u.propTypes={children:r.default.node.isRequired,className:r.default.string,isCompact:r.default.bool}},501:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a(502),t.default={label:"pf-c-label",modifiers:{compact:"pf-m-compact"}}},502:function(e,t,a){var r=a(423);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},l=a(7)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(423,(function(){var t=a(423);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");l(t)})),e.hot.dispose((function(){l()}))},688:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.StarIconConfig=void 0;var r,n=(r=a(6))&&r.__esModule?r:{default:r};var l={name:"StarIcon",height:512,width:576,svgPath:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z",yOffset:"",xOffset:"",transform:""};t.StarIconConfig=l;var o=(0,n.default)(l);t.default=o},839:function(e,t,a){var r=a(764),n=a(766),l=a(455),o=a(705),c=l((function(e,t){if(null==e)return[];var a=t.length;return a>1&&o(e,t[0],t[1])?t=[]:a>2&&o(t[0],t[1],t[2])&&(t=[t[0]]),n(e,r(t,1),[])}));e.exports=c}}]);
//# sourceMappingURL=TopicsList.js.map