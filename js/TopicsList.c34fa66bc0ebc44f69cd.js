(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[641],{37468:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>_});var r=n(96156),a=n(57149),o=n(48716),s=n(39173),c=n(93264),l=n.n(c),i=n(86350),u=n(45697),f=n.n(u),m=n(28481),p=n(89734),d=n.n(p),g=n(94550),b=n(23218),Z=n(16530),y=n(46891),E=n(34702),v=n(57277),w=n(48794),S=n(47668),h=n(77669),M=n(30893),O=n(86896),k=n(88931);const T=function(){var e=(0,O.Z)(),t=(0,k.useSelector)((function(e){return e.AdvisorStore.topics})),n=(0,k.useSelector)((function(e){return e.AdvisorStore.topicsFetchStatus})),r=(0,c.useState)(""),a=(0,m.Z)(r,2),o=a[0],s=a[1],i=(0,c.useState)([{title:e.formatMessage(M.Z.name),transforms:[g.sortable]},"",{title:e.formatMessage(M.Z.featured),transforms:[g.sortable,g.wrappable]},{title:e.formatMessage(M.Z.affectedSystems),transforms:[g.sortable,g.wrappable]}]),u=(0,m.Z)(i,1)[0],f=(0,c.useState)([]),p=(0,m.Z)(f,2),T=p[0],j=p[1],P=(0,c.useState)({index:2,direction:"desc"}),C=(0,m.Z)(P,2),D=C[0],L=C[1],x=function(t){return t.flatMap((function(t,n){return 0===o.length||t.name.toLowerCase().includes(o.toLowerCase())?[{topic:t,cells:[{title:l().createElement("span",{key:n},l().createElement(Z.Link,{key:n,to:"/topics/".concat(t.slug)}," ",t.name," ")),props:{colSpan:2}},{title:l().createElement("span",{key:n}," ",t.featured&&l().createElement(b._,{color:"blue",icon:l().createElement(S.ZP,null)},e.formatMessage(M.Z.featured))," ")},{title:l().createElement("span",{className:"pf-m-center",key:n}," ",t.impacted_systems_count)}]}]:[]}))},_=function(e,n,r){var a={0:d()(t,[function(e){return e.name}]),2:d()(t,[function(e){return e.featured}]),3:d()(t,[function(e){return e.impacted_systems_count}])},o=r===g.SortByDirection.asc?a[n]:a[n].reverse();L({index:n,direction:r}),j(x(o))},B={filters:o.length?[{category:"Description",chips:[{name:o,value:o}]}]:[],onDelete:function(){s(""),L({})}};(0,c.useEffect)((function(){D.index?_(0,D.index,D.direction):j(x(t).asMutable())}),[t,o]);var F=[{label:e.formatMessage(M.Z.name).toLowerCase(),filterValues:{key:"text-filter",onChange:function(e,t){s(t),L({})},value:o}}];return l().createElement(l().Fragment,null,""===n||"pending"===n&&l().createElement(y.Z,null),"fulfilled"===n&&t.length>0&&l().createElement(l().Fragment,null,l().createElement(v.Z,{filterConfig:{items:F},activeFiltersConfig:B}),l().createElement(g.Table,{"aria-label":"topics-table",sortBy:D,onSort:_,cells:u,rows:T,ouiaId:"topicTable",isStickyHeader:!0},l().createElement(g.TableHeader,null),l().createElement(g.TableBody,null),0===T.length&&"pending"!==n&&j([{cells:[{title:l().createElement(E.Z,{icon:w.ZP,title:e.formatMessage(M.Z.noHitsTitle,{item:e.formatMessage(M.Z.topics).toLowerCase()}),text:e.formatMessage(M.Z.noHitsBody,{item:e.formatMessage(M.Z.topics).toLowerCase()})}),props:{colSpan:4}}]}]))),"failed"===n||"rejected"===n||"fulfilled"===n&&0===t.length&&l().createElement(E.Z,{icon:h.ZP,title:e.formatMessage(M.Z.topicsListNotopicsTitle),text:e.formatMessage(M.Z.topicsListNotopicsBody)}))};var j=n(74806),P=n(36873),C=n(97109);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=function(e){var t=e.fetchTopics,n=e.intl,r=e.selectedTags,a=e.workloads,u=e.SID;return document.title=n.formatMessage(M.Z.documentTitle,{subnav:M.Z.topics.defaultMessage}),(0,c.useEffect)((function(){var e=null!==r&&r.length&&{tags:r};a&&(e=L(L({},e),(0,C.s0)(a,u))),t(e)}),[t,r,a,u]),l().createElement(l().Fragment,null,l().createElement(o.Z,null,l().createElement(s.Z,{title:"".concat(n.formatMessage(M.Z.insightsHeader)," ").concat(n.formatMessage(M.Z.topics).toLowerCase())})),l().createElement(i.Z,null,l().createElement(T,null)))};x.displayName="list-topics",x.propTypes={fetchTopics:f().func,intl:f().any,selectedTags:f().array,workloads:f().object,SID:f().object};const _=(0,j.ZP)((0,P.Z)((0,k.connect)((function(e){var t=e.AdvisorStore,n=e.ownProps;return L({selectedTags:t.selectedTags,workloads:t.workloads,SID:t.SID},n)}),(function(e){return{fetchTopics:function(t){return e(a.Qq(t))}}}))(x)))}}]);
//# sourceMappingURL=../sourcemaps/TopicsList.ec038fb4051e356a19a4.js.map