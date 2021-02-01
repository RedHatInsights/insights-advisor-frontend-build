(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[7641],{43147:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>B});var r=n(59713),a=n.n(r),o=n(64169),s=n(48716),c=n(39173),l=n(97522),i=n.n(l),u=n(86350),f=n(45697),p=n.n(f),m=n(63038),d=n.n(m),g=n(89734),b=n.n(g),y=n(83984),Z=n(23218),E=n(55399),h=n(82141),v=n(75824),S=n(57277),w=n(48794),M=n(47668),O=n(77669),T=n(86588),k=n(74806),j=n(18623),P=n(36873),D=function(e){var t=e.topics,n=e.topicsFetchStatus,r=e.intl,a=(0,l.useState)(""),o=d()(a,2),s=o[0],c=o[1],u=(0,l.useState)([{title:r.formatMessage(j.Z.name),transforms:[y.sortable]},"",{title:r.formatMessage(j.Z.featured),transforms:[y.sortable,y.wrappable]},{title:r.formatMessage(j.Z.affectedSystems),transforms:[y.sortable,y.wrappable]}]),f=d()(u,1)[0],p=(0,l.useState)([]),m=d()(p,2),g=m[0],T=m[1],k=(0,l.useState)({index:2,direction:"desc"}),P=d()(k,2),D=P[0],C=P[1],F=function(e){return e.flatMap((function(e,t){return 0===s.length||e.name.toLowerCase().includes(s.toLowerCase())?[{topic:e,cells:[{title:i().createElement("span",{key:t},i().createElement(E.Link,{key:t,to:"/topics/".concat(e.slug)}," ",e.name," ")),props:{colSpan:2}},{title:i().createElement("span",{key:t}," ",e.featured&&i().createElement(Z._,{color:"blue",icon:i().createElement(M.ZP,null)},r.formatMessage(j.Z.featured))," ")},{title:i().createElement("span",{className:"pf-m-center",key:t}," ",e.impacted_systems_count,"                ")}]}]:[]}))},L=function(e,n,r){var a={0:b()(t,[function(e){return e.name}]),2:b()(t,[function(e){return e.featured}]),3:b()(t,[function(e){return e.impacted_systems_count}])},o=r===y.SortByDirection.asc?a[n]:a[n].reverse();C({index:n,direction:r}),T(F(o))},x={filters:s.length?[{category:"Description",chips:[{name:s,value:s}]}]:[],onDelete:function(){c(""),C({})}};(0,l.useEffect)((function(){D.index?L(0,D.index,D.direction):T(F(t).asMutable())}),[t,s]);var _=[{label:r.formatMessage(j.Z.name),filterValues:{key:"text-filter",onChange:function(e,t){c(t),C({})},value:s}}];return i().createElement(i().Fragment,null,""===n||"pending"===n&&i().createElement(h.Z,null),"fulfilled"===n&&t.length>0&&i().createElement(i().Fragment,null,i().createElement(S.Z,{filterConfig:{items:_},activeFiltersConfig:x}),i().createElement(y.Table,{"aria-label":"topics-table",sortBy:D,onSort:L,cells:f,rows:g,ouiaId:"topicTable"},i().createElement(y.TableHeader,null),i().createElement(y.TableBody,null),0===g.length&&"pending"!==n&&T([{cells:[{title:i().createElement(v.Z,{icon:w.ZP,title:r.formatMessage(j.Z.noHitsTitle,{item:r.formatMessage(j.Z.topics).toLowerCase()}),text:r.formatMessage(j.Z.noHitsBody,{item:r.formatMessage(j.Z.topics).toLowerCase()})}),props:{colSpan:4}}]}]))),"failed"===n||"rejected"===n||"fulfilled"===n&&0===t.length&&i().createElement(v.Z,{icon:O.ZP,title:r.formatMessage(j.Z.topicsListNotopicsTitle),text:r.formatMessage(j.Z.topicsListNotopicsBody)}))};D.propTypes={topics:p().array,topicsFetchStatus:p().string,intl:p().any};const C=(0,k.ZP)((0,P.Z)((0,T.connect)((function(e){return{topics:e.AdvisorStore.topics,topicsFetchStatus:e.AdvisorStore.topicsFetchStatus}}),null)(D)));var F=n(26042);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){var t=e.fetchTopics,n=e.intl,r=e.selectedTags,a=e.workloads,o=e.SID;return document.title=n.formatMessage(j.Z.documentTitle,{subnav:j.Z.topics.defaultMessage}),(0,l.useEffect)((function(){var e=null!==r&&r.length&&{tags:r};a&&(e=x(x({},e),(0,F.s0)(a,o))),t(e)}),[t,r,a,o]),i().createElement(i().Fragment,null,i().createElement(s.Z,null,i().createElement(c.Z,{title:"".concat(n.formatMessage(j.Z.insightsHeader)," ").concat(n.formatMessage(j.Z.topics).toLowerCase())})),i().createElement(u.Z,null,i().createElement(C,null)))};_.displayName="list-topics",_.propTypes={fetchTopics:p().func,intl:p().any,selectedTags:p().array,workloads:p().object,SID:p().object};const B=(0,k.ZP)((0,P.Z)((0,T.connect)((function(e){var t=e.AdvisorStore,n=e.ownProps;return x({selectedTags:t.selectedTags,workloads:t.workloads,SID:t.SID},n)}),(function(e){return{fetchTopics:function(t){return e(o.Qq(t))}}}))(_)))}}]);
//# sourceMappingURL=TopicsList.3c851a24fe87d7675d50.js.map