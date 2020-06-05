(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1609:function(e,t,n){"use strict";n.r(t);var a=n(106),r=n.n(a),c=n(750),o=n(700),i=n(0),s=n.n(i),u=n(699),l=n(1),p=n.n(l),f=n(225),d=n.n(f),m=n(1601),y=n.n(m),E=n(255),g=n(31),S=n(296),T=n(295),h=n(702),_=n(107),v=n(783),C=n(819),b=n(321),O=n(336),L=n.n(O),F=n(715),j=n.n(F),w=n(152),H=n.n(w),R=n(92),U=n(20),M=n(12),P=n(227),x=n.n(P),k=function(e){var t=e.topics,n=e.topicsFetchStatus,a=e.intl,r=Object(i.useState)(""),c=d()(r,2),o=c[0],u=c[1],l=Object(i.useState)([{title:a.formatMessage(M.a.name),transforms:[E.a]},"",{title:a.formatMessage(M.a.featured),transforms:[E.a]},{title:a.formatMessage(M.a.affectedSystems),transforms:[E.a]}]),p=d()(l,1)[0],f=Object(i.useState)([]),m=d()(f,2),O=m[0],F=m[1],w=Object(i.useState)({index:2,direction:"desc"}),R=d()(w,2),U=R[0],P=R[1],x=function(e){return e.flatMap((function(e,t){return 0===o.length||e.name.toLowerCase().includes(o.toLowerCase())?[{topic:e,cells:[{title:s.a.createElement("span",{key:t},s.a.createElement(_.Link,{key:t,to:"/topics/".concat(e.slug)}," ",e.name," ")),props:{colSpan:2}},{title:s.a.createElement("span",{key:t}," ",e.featured&&s.a.createElement(h.Label,null," ",s.a.createElement(j.a,null)," ",a.formatMessage(M.a.featured))," ")},{title:s.a.createElement("span",{className:"pf-m-center",key:t}," ",e.impacted_systems_count,"                ")}]}]:[]}))},k=function(e,n,a){var r={0:y()(t,[function(e){return e.name}]),2:y()(t,[function(e){return e.featured}]),3:y()(t,[function(e){return e.impacted_systems_count}])},c=a===g.a.asc?r[n]:r[n].reverse();P({index:n,direction:a}),F(x(c))},A={filters:o.length?[{category:"Description",chips:[{name:o,value:o}]}]:[],onDelete:function(){u(""),P({})}};Object(i.useEffect)((function(){U.index?k(0,U.index,U.direction):F(x(t).asMutable())}),[t,o]);var I=[{label:a.formatMessage(M.a.name),filterValues:{key:"text-filter",onChange:function(e,t){u(t),P({})},value:o}}];return s.a.createElement(s.a.Fragment,null,""===n||"pending"===n&&s.a.createElement(v.a,null),"fulfilled"===n&&t.length>0&&s.a.createElement(s.a.Fragment,null,s.a.createElement(b.PrimaryToolbar,{filterConfig:{items:I},activeFiltersConfig:A}),s.a.createElement(g.b,{"aria-label":"topics-table",sortBy:U,onSort:k,cells:p,rows:O},s.a.createElement(S.a,null),s.a.createElement(T.a,null),0===O.length&&"pending"!==n&&F([{cells:[{title:s.a.createElement(C.a,{icon:L.a,title:a.formatMessage(M.a.noHitsTitle,{item:a.formatMessage(M.a.topics).toLowerCase()}),text:a.formatMessage(M.a.noHitsBody,{item:a.formatMessage(M.a.topics).toLowerCase()})}),props:{colSpan:4}}]}]))),"failed"===n||"rejected"===n||"fulfilled"===n&&0===t.length&&s.a.createElement(C.a,{icon:H.a,title:a.formatMessage(M.a.topicsListNotopicsTitle),text:a.formatMessage(M.a.topicsListNotopicsBody)}))};k.propTypes={topics:p.a.array,topicsFetchStatus:p.a.string,intl:p.a.any};var A=Object(U.c)(x()(Object(R.connect)((function(e){return{topics:e.AdvisorStore.topics,topicsFetchStatus:e.AdvisorStore.topicsFetchStatus}}),null)(k))),I=n(153);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var D=Object(I.a)((function(){return Promise.all([n.e(0),n.e(3),n.e(5),n.e(21),n.e(13)]).then(n.bind(null,1198))})),B=function(e){var t=e.fetchTopics,n=e.intl,a=e.selectedTags;return Object(i.useEffect)((function(){var e=null!==a&&a.length&&{tags:a.join()};t(e)}),[t,a]),s.a.createElement(s.a.Fragment,null,s.a.createElement(D,null),s.a.createElement(o.PageHeader,null,s.a.createElement(o.PageHeaderTitle,{title:n.formatMessage(M.a.topics)})),s.a.createElement(u.Main,null,s.a.createElement(A,null)))};B.displayName="list-topics",B.propTypes={fetchTopics:p.a.func,intl:p.a.any,selectedTags:p.a.array};t.default=Object(U.c)(x()(Object(R.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({selectedTags:e.AdvisorStore.selectedTags},t)}),(function(e){return{fetchTopics:function(t){return e(c.h(t))}}}))(B)))},749:function(e,t,n){"use strict";var a=n(871),r=n.n(a);t.a={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.a.get(e,{headers:t,params:n})},put:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.a.put(e,t,{headers:n})},post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.a.post(e,n,{headers:t})},delete:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.a.delete(e,t,{headers:n})}}},750:function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"e",(function(){return d})),n.d(t,"k",(function(){return m})),n.d(t,"h",(function(){return y})),n.d(t,"i",(function(){return E})),n.d(t,"g",(function(){return g})),n.d(t,"f",(function(){return S})),n.d(t,"c",(function(){return T})),n.d(t,"j",(function(){return h})),n.d(t,"a",(function(){return _})),n.d(t,"l",(function(){return v})),n.d(t,"n",(function(){return C})),n.d(t,"m",(function(){return b})),n.d(t,"o",(function(){return O}));var a=n(146),r=n.n(a),c=n(226),o=n.n(c),i=n(9),s=n(749),u=function(){var e=o()(r.a.mark((function e(t,n,a){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return e.next=4,s.a.get(t,n,a);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),l=function(){var e=o()(r.a.mark((function e(t,n,a){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return e.next=4,s.a.post(t,n,a);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),p=function(e){return{type:i.RULES_FETCH,payload:u(i.RULES_FETCH_URL,{},e)}},f=function(e){return{type:i.RULE_FETCH,payload:u("".concat(i.RULES_FETCH_URL).concat(e.rule_id,"/"),{},e.tags&&{tags:e.tags})}},d=function(e,t){return{type:i.SYSTEM_FETCH,payload:u("".concat(i.RULES_FETCH_URL).concat(encodeURI(e),"/systems"),{},t)}},m=function(e){return{type:i.FILTERS_SET,payload:e}},y=function(e){return{type:i.TOPICS_FETCH,payload:u(i.TOPICS_FETCH_URL,{},e)}},E=function(){return{type:i.TOPICS_FETCH,payload:u("".concat(i.TOPICS_FETCH_URL,"?show_disabled=true"))}},g=function(e){return{type:i.TOPIC_FETCH,payload:u("".concat(i.TOPICS_FETCH_URL).concat(e.topic_id,"/"))}},S=function(e){return{type:i.SYSTEMS_FETCH,payload:u(i.SYSTEMS_FETCH_URL,{},e)}},T=function(e){return{type:i.RULE_ACK_FETCH,payload:u("".concat(i.RULE_ACK_URL).concat(e.rule_id,"/"))}},h=function(e){return{type:i["".concat(e.type,"_ACK_SET")],payload:l(i["".concat(e.type,"_ACK_URL")],{},e.options)}},_=function(e){return{type:i.HOST_ACK_FETCH,payload:u("".concat(i.HOST_ACK_URL),{},e)}},v=function(e){return{type:i.FILTERS_SYSTEMS_SET,payload:e}},C=function(e){return{type:i.SELECTED_TAGS_SET,payload:e}},b=function(e){return{type:i.RULE_SET,payload:e}},O=function(e){return{type:i.SYSTEM_SET,payload:e}}},783:function(e,t,n){"use strict";var a=n(108),r=n(109),c=n(228),o=n(0),i=n.n(o);t.a=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(a.Card,null,i.a.createElement(r.CardBody,null,i.a.createElement(c.List,null))))}},819:function(e,t,n){"use strict";var a=n(229),r=n(317),c=n.n(r),o=n(230),i=n(318),s=n(1),u=n.n(s),l=n(0),p=n.n(l),f=n(110),d=function(e){var t=e.className,n=e.children,r=e.icon,c=e.iconClass,s=e.iconStyle,u=e.size,l=e.text,d=e.title,m=e.variant;return p.a.createElement(a.EmptyState,{className:t,variant:m},"none"!==r&&p.a.createElement(i.EmptyStateIcon,{className:c,style:s,icon:r,size:u}),p.a.createElement(f.Title,{headingLevel:"h5",size:"lg"},d),p.a.createElement(o.EmptyStateBody,{style:{marginBottom:"16px"}},l),n)};d.propTypes={children:u.a.any,icon:u.a.any,iconClass:u.a.any,iconStyle:u.a.any,size:u.a.string,text:u.a.any,title:u.a.string,variant:u.a.any,className:u.a.string},d.defaultProps={icon:c.a,title:"",variant:a.EmptyStateVariant.full,size:"md"},t.a=d}}]);
//# sourceMappingURL=TopicsList.js.map