(window.webpackJsonp=window.webpackJsonp||[]).push([[19,4],{1006:function(e,t,n){"use strict";var a=n(1121),r=n.n(a);t.a={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.a.get(e,{headers:t,params:n})},put:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.a.put(e,t,{headers:n})},post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.a.post(e,n,{headers:t})},delete:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.a.delete(e,t,{headers:n})}}},1009:function(e,t,n){"use strict";n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return p})),n.d(t,"e",(function(){return d})),n.d(t,"k",(function(){return m})),n.d(t,"h",(function(){return y})),n.d(t,"i",(function(){return E})),n.d(t,"g",(function(){return g})),n.d(t,"f",(function(){return S})),n.d(t,"c",(function(){return T})),n.d(t,"j",(function(){return h})),n.d(t,"a",(function(){return _})),n.d(t,"l",(function(){return v})),n.d(t,"n",(function(){return C})),n.d(t,"m",(function(){return b})),n.d(t,"o",(function(){return O}));var a=n(271),r=n.n(a),c=n(425),o=n.n(c),i=n(18),s=n(1006),u=function(){var e=o()(r.a.mark((function e(t,n,a){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return e.next=4,s.a.get(t,n,a);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),l=function(){var e=o()(r.a.mark((function e(t,n,a){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return e.next=4,s.a.post(t,n,a);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),f=function(e){return{type:i.RULES_FETCH,payload:u(i.RULES_FETCH_URL,{},e)}},p=function(e){return{type:i.RULE_FETCH,payload:u("".concat(i.RULES_FETCH_URL).concat(e.rule_id,"/"),{},e.tags&&{tags:e.tags})}},d=function(e,t){return{type:i.SYSTEM_FETCH,payload:u("".concat(i.RULES_FETCH_URL).concat(encodeURI(e),"/systems"),{},t)}},m=function(e){return{type:i.FILTERS_SET,payload:e}},y=function(e){return{type:i.TOPICS_FETCH,payload:u(i.TOPICS_FETCH_URL,{},e)}},E=function(){return{type:i.TOPICS_FETCH,payload:u("".concat(i.TOPICS_FETCH_URL,"?show_disabled=true"))}},g=function(e){return{type:i.TOPIC_FETCH,payload:u("".concat(i.TOPICS_FETCH_URL).concat(e.topic_id,"/"))}},S=function(e){return{type:i.SYSTEMS_FETCH,payload:u(i.SYSTEMS_FETCH_URL,{},e)}},T=function(e){return{type:i.RULE_ACK_FETCH,payload:u("".concat(i.RULE_ACK_URL).concat(e.rule_id,"/"))}},h=function(e){return{type:i["".concat(e.type,"_ACK_SET")],payload:l(i["".concat(e.type,"_ACK_URL")],{},e.options)}},_=function(e){return{type:i.HOST_ACK_FETCH,payload:u("".concat(i.HOST_ACK_URL),{},e)}},v=function(e){return{type:i.FILTERS_SYSTEMS_SET,payload:e}},C=function(e){return{type:i.SELECTED_TAGS_SET,payload:e}},b=function(e){return{type:i.RULE_SET,payload:e}},O=function(e){return{type:i.SYSTEM_SET,payload:e}}},1030:function(e,t,n){"use strict";var a=n(272),r=n(273),c=n(428),o=n(0),i=n.n(o);t.a=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(a.Card,null,i.a.createElement(r.CardBody,null,i.a.createElement(c.List,null))))}},1068:function(e,t,n){"use strict";var a=n(430),r=n(557),c=n.n(r),o=n(431),i=n(558),s=n(8),u=n.n(s),l=n(0),f=n.n(l),p=n(274),d=function(e){var t=e.className,n=e.children,r=e.icon,c=e.iconClass,s=e.iconStyle,u=e.text,l=e.title,d=e.variant;return f.a.createElement(a.EmptyState,{className:t,variant:d},"none"!==r&&f.a.createElement(i.EmptyStateIcon,{className:c,style:s,icon:r}),f.a.createElement(p.Title,{headingLevel:"h5",size:"lg"},l),f.a.createElement(o.EmptyStateBody,{style:{marginBottom:"16px"}},u),n)};d.propTypes={children:u.a.any,icon:u.a.any,iconClass:u.a.any,iconStyle:u.a.any,text:u.a.any,title:u.a.string,variant:u.a.any,className:u.a.string},d.defaultProps={icon:c.a,title:"",variant:a.EmptyStateVariant.full},t.a=d},1863:function(e,t,n){"use strict";n.r(t);var a=n(211),r=n.n(a),c=n(1009),o=n(960),i=n(0),s=n.n(i),u=n(959),l=n(8),f=n.n(l),p=n(424),d=n.n(p),m=n(1853),y=n.n(m),E=n(466),g=n(137),S=n(73),T=n(507),h=n(505),_=n(276),v=n(212),C=n(1030),b=n(1068),O=n(561),L=n(134),F=n.n(L),j=n(436),w=n.n(j),H=n(97),M=n.n(H),R=n(132),U=n(50),P=n(19),x=n(426),k=n.n(x),A=function(e){var t=e.topics,n=e.topicsFetchStatus,a=e.intl,r=Object(i.useState)(""),c=d()(r,2),o=c[0],u=c[1],l=Object(i.useState)([{title:a.formatMessage(P.a.name),transforms:[E.a]},"",{title:a.formatMessage(P.a.featured),transforms:[E.a,g.e]},{title:a.formatMessage(P.a.affectedSystems),transforms:[E.a,g.e]}]),f=d()(l,1)[0],p=Object(i.useState)([]),m=d()(p,2),L=m[0],j=m[1],H=Object(i.useState)({index:2,direction:"desc"}),R=d()(H,2),U=R[0],x=R[1],k=function(e){return e.flatMap((function(e,t){return 0===o.length||e.name.toLowerCase().includes(o.toLowerCase())?[{topic:e,cells:[{title:s.a.createElement("span",{key:t},s.a.createElement(v.Link,{key:t,to:"/topics/".concat(e.slug)}," ",e.name," ")),props:{colSpan:2}},{title:s.a.createElement("span",{key:t}," ",e.featured&&s.a.createElement(_.Label,{color:"blue",icon:s.a.createElement(w.a,null)},a.formatMessage(P.a.featured))," ")},{title:s.a.createElement("span",{className:"pf-m-center",key:t}," ",e.impacted_systems_count,"                ")}]}]:[]}))},A=function(e,n,a){var r={0:y()(t,[function(e){return e.name}]),2:y()(t,[function(e){return e.featured}]),3:y()(t,[function(e){return e.impacted_systems_count}])},c=a===S.a.asc?r[n]:r[n].reverse();x({index:n,direction:a}),j(k(c))},I={filters:o.length?[{category:"Description",chips:[{name:o,value:o}]}]:[],onDelete:function(){u(""),x({})}};Object(i.useEffect)((function(){U.index?A(0,U.index,U.direction):j(k(t).asMutable())}),[t,o]);var N=[{label:a.formatMessage(P.a.name),filterValues:{key:"text-filter",onChange:function(e,t){u(t),x({})},value:o}}];return s.a.createElement(s.a.Fragment,null,""===n||"pending"===n&&s.a.createElement(C.a,null),"fulfilled"===n&&t.length>0&&s.a.createElement(s.a.Fragment,null,s.a.createElement(O.PrimaryToolbar,{filterConfig:{items:N},activeFiltersConfig:I}),s.a.createElement(S.b,{"aria-label":"topics-table",sortBy:U,onSort:A,cells:f,rows:L},s.a.createElement(T.a,null),s.a.createElement(h.a,null),0===L.length&&"pending"!==n&&j([{cells:[{title:s.a.createElement(b.a,{icon:F.a,title:a.formatMessage(P.a.noHitsTitle,{item:a.formatMessage(P.a.topics).toLowerCase()}),text:a.formatMessage(P.a.noHitsBody,{item:a.formatMessage(P.a.topics).toLowerCase()})}),props:{colSpan:4}}]}]))),"failed"===n||"rejected"===n||"fulfilled"===n&&0===t.length&&s.a.createElement(b.a,{icon:M.a,title:a.formatMessage(P.a.topicsListNotopicsTitle),text:a.formatMessage(P.a.topicsListNotopicsBody)}))};A.propTypes={topics:f.a.array,topicsFetchStatus:f.a.string,intl:f.a.any};var I=Object(U.c)(k()(Object(R.connect)((function(e){return{topics:e.AdvisorStore.topics,topicsFetchStatus:e.AdvisorStore.topicsFetchStatus}}),null)(A))),N=n(215);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var B=Object(N.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(5),n.e(23),n.e(15)]).then(n.bind(null,1360))})),K=function(e){var t=e.fetchTopics,n=e.intl,a=e.selectedTags;return Object(i.useEffect)((function(){var e=null!==a&&a.length&&{tags:a.join()};t(e)}),[t,a]),s.a.createElement(s.a.Fragment,null,s.a.createElement(B,null),s.a.createElement(o.PageHeader,null,s.a.createElement(o.PageHeaderTitle,{title:"".concat(n.formatMessage(P.a.insightsHeader)," ").concat(n.formatMessage(P.a.topics).toLowerCase())})),s.a.createElement(u.Main,null,s.a.createElement(I,null)))};K.displayName="list-topics",K.propTypes={fetchTopics:f.a.func,intl:f.a.any,selectedTags:f.a.array};t.default=Object(U.c)(k()(Object(R.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({selectedTags:e.AdvisorStore.selectedTags},t)}),(function(e){return{fetchTopics:function(t){return e(c.h(t))}}}))(K)))}}]);
//# sourceMappingURL=TopicsList.js.map