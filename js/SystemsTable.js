(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{505:function(e,t,a){"use strict";var n=a(157),s=a(158),r=a(229),i=a(684),o=a.n(i),c=a(0),l=a.n(c),f=a(1),m=a.n(f),u=function(e){var t=e.message;return l.a.createElement(l.a.Fragment,null,l.a.createElement(n.Card,{className:"ins-empty-rule-cards"},l.a.createElement(r.CardHeader,null,l.a.createElement(o.a,{size:"lg"})),l.a.createElement(s.CardBody,null,t)))};t.a=u,u.propTypes={message:m.a.string}},684:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.FrownOpenIconConfig=void 0;var n,s=(n=a(6))&&n.__esModule?n:{default:n};var r={name:"FrownOpenIcon",height:512,width:496,svgPath:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM136 208c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm187.3 183.3c-31.2-9.6-59.4-15.3-75.3-15.3s-44.1 5.7-75.3 15.3c-11.5 3.5-22.5-6.3-20.5-18.1 7-40 60.1-61.2 95.8-61.2s88.8 21.3 95.8 61.2c2 11.9-9.1 21.6-20.5 18.1zM328 240c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z",yOffset:"",xOffset:"",transform:""};t.FrownOpenIconConfig=r;var i=(0,s.default)(r);t.default=i},876:function(e,t,a){"use strict";a.r(t);var n=a(89),s=a.n(n),r=a(154),i=a.n(r),o=a(413),c=a(92),l=a(0),f=a.n(l),m=a(200),u=a(201),d=a(21),b=a(206),p=a(205),y=a(674),g=a(463),O=a(505),v=a(57),j=a(456),E=a(457),h=a(662),S=a(1),P=a.n(S),w=a(236),_=a.n(w),M=a(508),F=a(36),C=a(56),N=a(675),k=a(12),D=a(10),T=a(156),x=a.n(T);function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(Object(a),!0).forEach((function(t){s()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var I=function(e){var t=e.systemsFetchStatus,a=e.fetchSystems,n=e.systems,s=e.intl,r=e.filters,o=e.setFilters,S=e.history,P=Object(l.useState)([{title:s.formatMessage(D.a.name),transforms:[m.a]},{title:s.formatMessage(D.a.numberRuleHits),transforms:[m.a,Object(u.a)(15)]},{title:s.formatMessage(D.a.lastSeen),transforms:[m.a]}]),w=i()(P,1)[0],F=Object(l.useState)([]),C=i()(F,2),k=C[0],T=C[1],x=Object(l.useState)({}),z=i()(x,2),I=z[0],A=z[1],B=n.meta?n.meta.count:0,L=Object(l.useState)(r.display_name||""),J=i()(L,2),V=J[0],R=J[1],q=Object(N.a)(V,800),G=Object(l.useState)(!0),K=i()(G,2),Q=K[0],U=K[1],W={0:"display_name",1:"hits",2:"last_seen"},X=function(e){var t=e*r.limit-r.limit;o(H({},r,{offset:t}))};Object(l.useEffect)((function(){void 0===r.display_name?R(""):R(r.display_name)}),[r.display_name]),Object(l.useEffect)((function(){var e=H({},r),t=V.length?{display_name:V}:{};delete e.display_name,o(H({},e,{},t))}),[q]),Object(l.useEffect)((function(){if(S.location.search){var e=Object(y.b)(S);void 0!==e.sort&&(e.sort=e.sort[0]),void 0!==e.display_name&&(e.display_name=e.display_name[0]),void 0===e.offset?e.offset=0:e.offset=Number(e.offset[0]),void 0===e.limit?e.limit=10:e.limit=Number(e.limit[0]),o(H({},e))}U(!1)}),[]),Object(l.useEffect)((function(){Object(y.c)(r,S)}),[r,S]),Object(l.useEffect)((function(){if(void 0!==r.sort){var e=Number(Object.entries(W).find((function(e){return e[1]===r.sort||"-".concat(e[1])===r.sort}))[0]),t="-"===r.sort[0]?"desc":"asc";A({index:e,direction:t})}}),[r.sort]),Object(l.useEffect)((function(){Q||(r.limit||void 0===r.offest&&o(H({},r,{offset:0,limit:10})),a(H({offset:r.offset,limit:r.limit},r)))}),[a,r,Q,o]),Object(l.useEffect)((function(){if(n.data)if(n.meta.count){var e=n.data.flatMap((function(e,t){return[{isOpen:!1,system:e,cells:[{title:f.a.createElement(v.Link,{key:t,to:"/rules/systems/".concat(e.system_uuid)},e.display_name)},{title:f.a.createElement("div",{key:t}," ",e.hits)},{title:f.a.createElement(g.DateFormat,{key:t,date:e.last_seen,variant:"relative"})}]}]}));T(e.asMutable())}else T([{cells:[{title:f.a.createElement(E.a,{icon:_.a,title:s.formatMessage(D.a.noHitsTitle,{item:s.formatMessage(D.a.systems).toLowerCase()}),text:s.formatMessage(D.a.noHitsBody,{item:s.formatMessage(D.a.systems).toLowerCase()})}),props:{colSpan:5}}]}])}),[s,n]);var Y=[{label:s.formatMessage(D.a.name),filterValues:{key:"text-filter",onChange:function(e,t){return R(t)},value:V}}],Z={filters:V.length>0&&[{category:"Description",chips:[{name:V}]}]||[],onDelete:function(){return R("")}};return f.a.createElement(f.a.Fragment,null,f.a.createElement(h.PrimaryToolbar,{pagination:{itemCount:B,page:r.offset/r.limit+1,perPage:Number(r.limit),onSetPage:function(e,t){X(t)},onPerPageSelect:function(e,t){o(H({},r,{limit:t,offset:0}))},isCompact:!1},filterConfig:{items:Y},activeFiltersConfig:Z}),"fulfilled"===t&&f.a.createElement(d.b,{"aria-label":"rule-table",sortBy:I,onSort:function(e,t,a){var n="".concat("asc"===a?"":"-").concat(W[t]);A({index:t,direction:a}),o(H({},r,{sort:n,offset:0}))},cells:w,rows:k},f.a.createElement(b.a,null),f.a.createElement(p.a,null)),"pending"===t&&f.a.createElement(j.a,null),"failed"===t&&f.a.createElement(O.a,{message:s.formatMessage(D.a.systemTableFetchError)}),f.a.createElement(M.TableToolbar,null,f.a.createElement(c.Pagination,{itemCount:B,perPage:Number(r.limit),page:r.offset/r.limit+1,onSetPage:function(e,t){X(t)},onPerPageSelect:function(e,t){o(H({},r,{limit:t,offset:0}))},widgetId:"pagination-options-menu-bottom",variant:c.PaginationVariant.bottom})))};I.propTypes={fetchSystems:P.a.func,systemsFetchStatus:P.a.string,systems:P.a.object,addNotification:P.a.func,history:P.a.object,intl:P.a.any,filters:P.a.object,setFilters:P.a.func};t.default=Object(k.c)(x()(Object(C.connect)((function(e,t){return H({systems:e.AdvisorStore.systems,systemsFetchStatus:e.AdvisorStore.systemsFetchStatus,filters:e.AdvisorStore.filtersSystems},t)}),(function(e){return{fetchSystems:function(t){return e(o.h(t))},addNotification:function(t){return e(Object(F.addNotification)(t))},setFilters:function(t){return e(o.n(t))}}}))(I)))}}]);
//# sourceMappingURL=SystemsTable.js.map