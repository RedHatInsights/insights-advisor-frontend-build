(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1126:function(e,t,n){"use strict";var a=n(570),r=n(571),c=n(433),o=n(1),i=n.n(o);t.a=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(a.Card,null,i.a.createElement(r.CardBody,null,i.a.createElement(c.List,null))))}},1166:function(e,t,n){"use strict";var a=n(1047),r=n(1050),c=n.n(r),o=n(1049),i=n(1048),s=n(12),l=n.n(s),u=n(1),f=n.n(u),p=n(1042),m=function(e){var t=e.className,n=e.children,r=e.icon,c=e.iconClass,s=e.iconStyle,l=e.text,u=e.title,m=e.variant;return f.a.createElement(a.EmptyState,{className:t,variant:m},"none"!==r&&f.a.createElement(i.EmptyStateIcon,{className:c,style:s,icon:r}),f.a.createElement(p.Title,{headingLevel:"h5",size:"lg"},u),f.a.createElement(o.EmptyStateBody,{style:{marginBottom:"16px"}},l),n)};m.propTypes={children:l.a.any,icon:l.a.any,iconClass:l.a.any,iconStyle:l.a.any,text:l.a.any,title:l.a.string,variant:l.a.any,className:l.a.string},m.defaultProps={icon:c.a,title:"",variant:a.EmptyStateVariant.full},t.a=m},1170:function(e,t,n){"use strict";n.d(t,"e",(function(){return f})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return y})),n.d(t,"f",(function(){return b}));var a=n(236),r=n.n(a),c=n(428),o=n.n(c),i=n(431),s=n.n(i);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(e,t,n){var a=new URL(window.location),r="".concat(Object.keys(e).map((function(t){return"".concat(t,"=").concat(Array.isArray(e[t])?e[t].join():e[t])})).join("&")),c=new URLSearchParams(r);return"undefined"===c.get("reports_shown")&&c.delete("reports_shown"),"undefined"===c.get("rule_status")&&c.delete("rule_status"),(null==n?void 0:n.SAP)?c.set("sap_system",!0):c.delete("sap_system"),null!==t&&t.length?c.set("tags",t.join()):c.delete("tags"),window.history.replaceState(null,null,"".concat(a.origin).concat(a.pathname,"?").concat(c.toString())),"?".concat(r)},p=function(e){return Object.assign.apply(Object,[{}].concat(s()(Object.entries(e).map((function(e){var t=o()(e,2),n=t[0],a=t[1];return Array.isArray(a)?("true"===a[0]||"false"===a[0])&&a.length>1?null:r()({},n,a.join()):r()({},n,a)})))))},m=function(){var e=new URLSearchParams(window.location.search);return Array.from(e).reduce((function(e,t){var n=o()(t,2),a=n[0],c=n[1];return u(u({},e),{},r()({},a,"true"===c||"false"===c?JSON.parse(c):c.split(",")))}),{})},d=function(e){return Object.entries(e).reduce((function(e,t,n){var a=o()(t,2),r=a[0],c=a[1];return e+(0===n?"".concat(r,"=").concat(c):"&".concat(r,"=").concat(c))}),"")},y=function(e,t){var n=Object.entries(e);return n.length>0?n.reduce((function(e,n){if(t[n[0]]){var a=t[n[0]],r=Array.isArray(n[1])?n[1].map((function(e){var t=a.values.find((function(t){return t.value===String(e)}));return t?{name:t.text||t.label,value:e}:{name:e,value:e}})):[{name:a.values.find((function(e){return e.value===String(n[1])})).label,value:n[1]}];return[].concat(s()(e),[{category:(c=a.title,c[0].toUpperCase()+c.substring(1)),chips:r,urlParam:a.urlParam}])}return"text"===n[0]?[].concat(s()(e),[{category:"Name",chips:[{name:n[1],value:n[1]}],urlParam:n[0]}]):e;var c}),[]):[]},g={SAP:"sap_system"},b=function(e){return Object.entries(e).map((function(e){var t=o()(e,2),n=t[0],a=t[1];return g[n]&&!!a.isSelected&&r()({},"filter[system_profile][".concat(g[n],"]"),a.isSelected)}))[0]}},1892:function(e,t,n){"use strict";n.r(t);var a=n(236),r=n.n(a),c=n(307),o=n(1043),i=n(1),s=n.n(i),l=n(1041),u=n(12),f=n.n(u),p=n(428),m=n.n(p),d=n(1881),y=n.n(d),g=n(473),b=n(158),O=n(73),v=n(520),j=n(519),h=n(1045),w=n(211),E=n(1126),S=n(1166),P=n(1061),M=n(1062),k=n.n(M),T=n(583),L=n.n(T),C=n(442),x=n.n(C),A=n(105),_=n(58),D=n(22),F=n(432),N=n.n(F),B=function(e){var t=e.topics,n=e.topicsFetchStatus,a=e.intl,r=Object(i.useState)(""),c=m()(r,2),o=c[0],l=c[1],u=Object(i.useState)([{title:a.formatMessage(D.a.name),transforms:[g.a]},"",{title:a.formatMessage(D.a.featured),transforms:[g.a,b.e]},{title:a.formatMessage(D.a.affectedSystems),transforms:[g.a,b.e]}]),f=m()(u,1)[0],p=Object(i.useState)([]),d=m()(p,2),M=d[0],T=d[1],C=Object(i.useState)({index:2,direction:"desc"}),A=m()(C,2),_=A[0],F=A[1],N=function(e){return e.flatMap((function(e,t){return 0===o.length||e.name.toLowerCase().includes(o.toLowerCase())?[{topic:e,cells:[{title:s.a.createElement("span",{key:t},s.a.createElement(w.Link,{key:t,to:"/topics/".concat(e.slug)}," ",e.name," ")),props:{colSpan:2}},{title:s.a.createElement("span",{key:t}," ",e.featured&&s.a.createElement(h.Label,{color:"blue",icon:s.a.createElement(L.a,null)},a.formatMessage(D.a.featured))," ")},{title:s.a.createElement("span",{className:"pf-m-center",key:t}," ",e.impacted_systems_count,"                ")}]}]:[]}))},B=function(e,n,a){var r={0:y()(t,[function(e){return e.name}]),2:y()(t,[function(e){return e.featured}]),3:y()(t,[function(e){return e.impacted_systems_count}])},c=a===O.b.asc?r[n]:r[n].reverse();F({index:n,direction:a}),T(N(c))},H={filters:o.length?[{category:"Description",chips:[{name:o,value:o}]}]:[],onDelete:function(){l(""),F({})}};Object(i.useEffect)((function(){_.index?B(0,_.index,_.direction):T(N(t).asMutable())}),[t,o]);var U=[{label:a.formatMessage(D.a.name),filterValues:{key:"text-filter",onChange:function(e,t){l(t),F({})},value:o}}];return s.a.createElement(s.a.Fragment,null,""===n||"pending"===n&&s.a.createElement(E.a,null),"fulfilled"===n&&t.length>0&&s.a.createElement(s.a.Fragment,null,s.a.createElement(P.PrimaryToolbar,{filterConfig:{items:U},activeFiltersConfig:H}),s.a.createElement(O.c,{"aria-label":"topics-table",sortBy:_,onSort:B,cells:f,rows:M},s.a.createElement(v.a,null),s.a.createElement(j.a,null),0===M.length&&"pending"!==n&&T([{cells:[{title:s.a.createElement(S.a,{icon:k.a,title:a.formatMessage(D.a.noHitsTitle,{item:a.formatMessage(D.a.topics).toLowerCase()}),text:a.formatMessage(D.a.noHitsBody,{item:a.formatMessage(D.a.topics).toLowerCase()})}),props:{colSpan:4}}]}]))),"failed"===n||"rejected"===n||"fulfilled"===n&&0===t.length&&s.a.createElement(S.a,{icon:x.a,title:a.formatMessage(D.a.topicsListNotopicsTitle),text:a.formatMessage(D.a.topicsListNotopicsBody)}))};B.propTypes={topics:f.a.array,topicsFetchStatus:f.a.string,intl:f.a.any};var H=Object(_.c)(N()(Object(A.connect)((function(e){return{topics:e.AdvisorStore.topics,topicsFetchStatus:e.AdvisorStore.topicsFetchStatus}}),null)(B))),U=n(242),J=n(9),R=n(1170);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=Object(U.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(15)]).then(n.bind(null,1424))})),I=function(e){var t=e.fetchTopics,n=e.intl,a=e.selectedTags,r=e.workloads;return Object(i.useEffect)((function(){var e=null!==a&&a.length&&{tags:a.join()};r&&(e=z(z({},e),Object(R.f)(r))),t(e)}),[t,a,r]),s.a.createElement(s.a.Fragment,null,!Object(J.isGlobalFilter)()&&s.a.createElement(G,null),s.a.createElement(o.PageHeader,null,s.a.createElement(o.PageHeaderTitle,{title:"".concat(n.formatMessage(D.a.insightsHeader)," ").concat(n.formatMessage(D.a.topics).toLowerCase())})),s.a.createElement(l.Main,null,s.a.createElement(H,null)))};I.displayName="list-topics",I.propTypes={fetchTopics:f.a.func,intl:f.a.any,selectedTags:f.a.array,workloads:f.a.object};t.default=Object(_.c)(N()(Object(A.connect)((function(e){var t=e.AdvisorStore,n=e.ownProps;return z({selectedTags:t.selectedTags,workloads:t.workloads},n)}),(function(e){return{fetchTopics:function(t){return e(c.h(t))}}}))(I)))}}]);
//# sourceMappingURL=TopicsList.7ed7ec99fcdff4be25f9.js.map