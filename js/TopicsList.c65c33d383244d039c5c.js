(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[641],{37468:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>L});var n=r(96156),a=r(57149),o=r(48716),s=r(39173),c=r(93264),l=r.n(c),i=r(86350),u=r(45697),f=r.n(u),m=r(28481),p=r(89734),d=r.n(p),g=r(94550),b=r(23218),Z=r(16530),y=r(46891),E=r(34702),v=r(57277),w=r(71070),S=r(47668),h=r(77669),M=r(30893),O=r(86896),k=r(88931);const T=function(){var e=(0,O.Z)(),t=(0,k.useSelector)((function(e){return e.AdvisorStore.topics})),r=(0,k.useSelector)((function(e){return e.AdvisorStore.topicsFetchStatus})),n=(0,c.useState)(""),a=(0,m.Z)(n,2),o=a[0],s=a[1],i=(0,c.useState)([{title:e.formatMessage(M.Z.name),transforms:[g.sortable]},"",{title:e.formatMessage(M.Z.featured),transforms:[g.sortable,g.wrappable]},{title:e.formatMessage(M.Z.affectedSystems),transforms:[g.sortable,g.wrappable]}]),u=(0,m.Z)(i,1)[0],f=(0,c.useState)([]),p=(0,m.Z)(f,2),T=p[0],j=p[1],C=(0,c.useState)({index:2,direction:"desc"}),D=(0,m.Z)(C,2),P=D[0],L=D[1],x=function(t){return t.flatMap((function(t,r){return 0===o.length||t.name.toLowerCase().includes(o.toLowerCase())?[{topic:t,cells:[{title:l().createElement("span",{key:r},l().createElement(Z.Link,{key:r,to:"/topics/".concat(t.slug)}," ",t.name," ")),props:{colSpan:2}},{title:l().createElement("span",{key:r}," ",t.featured&&l().createElement(b.Label,{color:"blue",icon:l().createElement(S.ZP,null)},e.formatMessage(M.Z.featured))," ")},{title:l().createElement("span",{className:"pf-m-center",key:r}," ",t.impacted_systems_count)}]}]:[]}))},_=function(e,r,n){var a={0:d()(t,[function(e){return e.name}]),2:d()(t,[function(e){return e.featured}]),3:d()(t,[function(e){return e.impacted_systems_count}])},o=n===g.SortByDirection.asc?a[r]:a[r].reverse();L({index:r,direction:n}),j(x(o))},B={filters:o.length?[{category:"Description",chips:[{name:o,value:o}]}]:[],onDelete:function(){s(""),L({})}};(0,c.useEffect)((function(){P.index?_(0,P.index,P.direction):j(x(t).asMutable())}),[t,o]);var F=[{label:e.formatMessage(M.Z.name).toLowerCase(),filterValues:{key:"text-filter",onChange:function(e,t){s(t),L({})},value:o}}];return l().createElement(l().Fragment,null,""===r||"pending"===r&&l().createElement(y.Z,null),"fulfilled"===r&&t.length>0&&l().createElement(l().Fragment,null,l().createElement(v.Z,{filterConfig:{items:F},activeFiltersConfig:B}),l().createElement(g.Table,{"aria-label":"topics-table",sortBy:P,onSort:_,cells:u,rows:T,ouiaId:"topicTable",isStickyHeader:!0},l().createElement(g.TableHeader,null),l().createElement(g.TableBody,null),0===T.length&&"pending"!==r&&j([{cells:[{title:l().createElement(E.Z,{icon:w.ZP,title:e.formatMessage(M.Z.noHitsTitle,{item:e.formatMessage(M.Z.topics).toLowerCase()}),text:e.formatMessage(M.Z.noHitsBody,{item:e.formatMessage(M.Z.topics).toLowerCase()})}),props:{colSpan:4}}]}]))),"failed"===r||"rejected"===r||"fulfilled"===r&&0===t.length&&l().createElement(E.Z,{icon:h.default,title:e.formatMessage(M.Z.topicsListNotopicsTitle),text:e.formatMessage(M.Z.topicsListNotopicsBody)}))};var j=r(97109);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=function(e){var t=e.fetchTopics,r=e.selectedTags,n=e.workloads,a=e.SID,u=(0,O.Z)();return document.title=u.formatMessage(M.Z.documentTitle,{subnav:M.Z.topics.defaultMessage}),(0,c.useEffect)((function(){var e=null!==r&&r.length&&{tags:r};n&&(e=D(D({},e),(0,j.s0)(n,a))),t(e)}),[t,r,n,a]),l().createElement(l().Fragment,null,l().createElement(o.Z,null,l().createElement(s.Z,{title:"".concat(u.formatMessage(M.Z.insightsHeader)," ").concat(u.formatMessage(M.Z.topics).toLowerCase())})),l().createElement(i.Z,null,l().createElement(T,null)))};P.displayName="list-topics",P.propTypes={fetchTopics:f().func,selectedTags:f().array,workloads:f().object,SID:f().object};const L=(0,k.connect)((function(e){var t=e.AdvisorStore,r=e.ownProps;return D({selectedTags:t.selectedTags,workloads:t.workloads,SID:t.SID},r)}),(function(e){return{fetchTopics:function(t){return e(a.Qq(t))}}}))(P)}}]);
//# sourceMappingURL=../sourcemaps/TopicsList.effef16e48394cfc0693.js.map