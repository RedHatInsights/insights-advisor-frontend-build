(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1826:function(e,t,a){"use strict";a.r(t);var n=a(209),r=a.n(n),c=a(392),o=a(953),s=a(0),i=a.n(s),l=a(952),u=a(9),f=a.n(u),p=a(391),m=a.n(p),g=a(1815),d=a.n(g),b=a(438),y=a(138),O=a(75),j=a(477),E=a(476),h=a(215),v=a(211),w=a(1023),S=a(1057),M=a(527),T=a(133),P=a.n(T),k=a(403),F=a.n(k),L=a(98),C=a.n(L),x=a(104),D=a(50),H=a(19),N=a(394),_=a.n(N),A=function(e){var t=e.topics,a=e.topicsFetchStatus,n=e.intl,r=Object(s.useState)(""),c=m()(r,2),o=c[0],l=c[1],u=Object(s.useState)([{title:n.formatMessage(H.a.name),transforms:[b.a]},"",{title:n.formatMessage(H.a.featured),transforms:[b.a,y.e]},{title:n.formatMessage(H.a.affectedSystems),transforms:[b.a,y.e]}]),f=m()(u,1)[0],p=Object(s.useState)([]),g=m()(p,2),T=g[0],k=g[1],L=Object(s.useState)({index:2,direction:"desc"}),x=m()(L,2),D=x[0],N=x[1],_=function(e){return e.flatMap((function(e,t){return 0===o.length||e.name.toLowerCase().includes(o.toLowerCase())?[{topic:e,cells:[{title:i.a.createElement("span",{key:t},i.a.createElement(v.Link,{key:t,to:"/topics/".concat(e.slug)}," ",e.name," ")),props:{colSpan:2}},{title:i.a.createElement("span",{key:t}," ",e.featured&&i.a.createElement(h.Label,{color:"blue",icon:i.a.createElement(F.a,null)},n.formatMessage(H.a.featured))," ")},{title:i.a.createElement("span",{className:"pf-m-center",key:t}," ",e.impacted_systems_count,"                ")}]}]:[]}))},A=function(e,a,n){var r={0:d()(t,[function(e){return e.name}]),2:d()(t,[function(e){return e.featured}]),3:d()(t,[function(e){return e.impacted_systems_count}])},c=n===O.a.asc?r[a]:r[a].reverse();N({index:a,direction:n}),k(_(c))},B={filters:o.length?[{category:"Description",chips:[{name:o,value:o}]}]:[],onDelete:function(){l(""),N({})}};Object(s.useEffect)((function(){D.index?A(0,D.index,D.direction):k(_(t).asMutable())}),[t,o]);var J=[{label:n.formatMessage(H.a.name),filterValues:{key:"text-filter",onChange:function(e,t){l(t),N({})},value:o}}];return i.a.createElement(i.a.Fragment,null,""===a||"pending"===a&&i.a.createElement(w.a,null),"fulfilled"===a&&t.length>0&&i.a.createElement(i.a.Fragment,null,i.a.createElement(M.PrimaryToolbar,{filterConfig:{items:J},activeFiltersConfig:B}),i.a.createElement(O.b,{"aria-label":"topics-table",sortBy:D,onSort:A,cells:f,rows:T},i.a.createElement(j.a,null),i.a.createElement(E.a,null),0===T.length&&"pending"!==a&&k([{cells:[{title:i.a.createElement(S.a,{icon:P.a,title:n.formatMessage(H.a.noHitsTitle,{item:n.formatMessage(H.a.topics).toLowerCase()}),text:n.formatMessage(H.a.noHitsBody,{item:n.formatMessage(H.a.topics).toLowerCase()})}),props:{colSpan:4}}]}]))),"failed"===a||"rejected"===a||"fulfilled"===a&&0===t.length&&i.a.createElement(S.a,{icon:C.a,title:n.formatMessage(H.a.topicsListNotopicsTitle),text:n.formatMessage(H.a.topicsListNotopicsBody)}))};A.propTypes={topics:f.a.array,topicsFetchStatus:f.a.string,intl:f.a.any};var B=Object(D.c)(_()(Object(x.connect)((function(e){return{topics:e.AdvisorStore.topics,topicsFetchStatus:e.AdvisorStore.topicsFetchStatus}}),null)(A))),J=a(218),G=a(5);function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var q=Object(J.a)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(6),a.e(16)]).then(a.bind(null,1346))})),z=function(e){var t=e.fetchTopics,a=e.intl,n=e.selectedTags;return Object(s.useEffect)((function(){var e=null!==n&&n.length&&{tags:n.join()};t(e)}),[t,n]),i.a.createElement(i.a.Fragment,null,!Object(G.isGlobalFilter)()&&i.a.createElement(q,null),i.a.createElement(o.PageHeader,null,i.a.createElement(o.PageHeaderTitle,{title:"".concat(a.formatMessage(H.a.insightsHeader)," ").concat(a.formatMessage(H.a.topics).toLowerCase())})),i.a.createElement(l.Main,null,i.a.createElement(B,null)))};z.displayName="list-topics",z.propTypes={fetchTopics:f.a.func,intl:f.a.any,selectedTags:f.a.array};t.default=Object(D.c)(_()(Object(x.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({selectedTags:e.AdvisorStore.selectedTags},t)}),(function(e){return{fetchTopics:function(t){return e(c.h(t))}}}))(z)))}}]);
//# sourceMappingURL=TopicsList.js.map