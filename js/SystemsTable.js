(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1057:function(e,t,a){"use strict";a.r(t);var n=a(161),s=a.n(n),r=a(275),o=a.n(r),c=a(526),i=a(352),l=a(60),u=a(2),f=a.n(u),m=a(328),b=a(329),p=a(44),y=a(354),g=a(351),O=a(542),j=a(99),d=a(531),S=a(532),h=a(1),E=a.n(h),v=a(201),w=a(82),P=a(98),M=a(622),k=a(30),C=a(22),F=a(525),_=a.n(F),D=a(276),T=a.n(D);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var x=function(e){var t=e.systemsFetchStatus,a=e.fetchSystems,n=e.systems,s=e.intl,r=Object(u.useState)([{title:s.formatMessage(C.a.name),transforms:[m.a]},{title:s.formatMessage(C.a.numberRuleHits),transforms:[m.a,Object(b.a)(15)]},{title:s.formatMessage(C.a.lastSeen),transforms:[m.a]}]),c=o()(r,1)[0],h=Object(u.useState)([]),E=o()(h,2),w=E[0],P=E[1],k=Object(u.useState)({}),F=o()(k,2),D=F[0],T=F[1],N=Object(u.useState)("-last_seen"),x=o()(N,2),H=x[0],L=x[1],A=Object(u.useState)(10),B=o()(A,2),J=B[0],I=B[1],R=Object(u.useState)(0),V=o()(R,2),q=V[0],z=V[1],G=n.meta?n.meta.count:0,K=Object(u.useState)(""),Q=o()(K,2),U=Q[0],W=Q[1],X=Object(M.a)(U,800),Y=Object(u.useCallback)((function(e,t,a){var n="".concat("asc"===a?"":"-").concat({0:"display_name",1:"hits",2:"last_seen"}[t]);T({index:t,direction:a}),L(n),z(0)}),[L,T,z]),Z=function(e){z(e*J-J)},$=Object(u.useCallback)((function(){z(0)}),[]);Object(u.useEffect)((function(){a(U.length&&{display_name:U,sort:H})}),[X]),Object(u.useEffect)((function(){a({offset:q,limit:J,sort:H})}),[a,J,q,H]),Object(u.useEffect)((function(){!w.length&&Y(null,2,"desc")}),[Y,w.length]),Object(u.useEffect)((function(){if(n.data)if(n.meta.count){var e=n.data.flatMap((function(e,t){return[{isOpen:!1,system:e,cells:[{title:f.a.createElement(j.Link,{key:t,to:"/rules/systems/".concat(e.system_uuid)},e.display_name)},{title:f.a.createElement("div",{key:t}," ",e.hits)},{title:f.a.createElement("div",{key:t},_()(e.last_seen).fromNow())}]}]}));P(e.asMutable())}else P([{cells:[{title:f.a.createElement(S.a,{icon:v.b,title:s.formatMessage(C.a.noHitsTitle,{item:s.formatMessage(C.a.systems).toLowerCase()}),text:s.formatMessage(C.a.noHitsBody,{item:s.formatMessage(C.a.systems).toLowerCase()})}),props:{colSpan:5}}]}])}),[$,s,n]);var ee=[{label:s.formatMessage(C.a.name),filterValues:{key:"text-filter",onChange:function(e,t){return W(t)},value:U}}],te={filters:U.length>0&&[{category:"Description",chips:[{name:U}]}]||[],onDelete:function(){return W("")}};return f.a.createElement(f.a.Fragment,null,f.a.createElement(l.PrimaryToolbar,{pagination:{itemCount:G,page:q/J+1,perPage:J,onSetPage:function(e,t){Z(t)},onPerPageSelect:function(e,t){I(t)},isCompact:!1},filterConfig:{items:ee},activeFiltersConfig:te}),"fulfilled"===t&&f.a.createElement(p.b,{"aria-label":"rule-table",sortBy:D,onSort:Y,cells:c,rows:w},f.a.createElement(y.a,null),f.a.createElement(g.a,null)),"pending"===t&&f.a.createElement(d.a,null),"failed"===t&&f.a.createElement(O.a,{message:s.formatMessage(C.a.systemTableFetchError)}),f.a.createElement(l.TableToolbar,null,f.a.createElement(i.a,{itemCount:G,perPage:J,page:q/J+1,onSetPage:function(e,t){Z(t)},widgetId:"pagination-options-menu-bottom",variant:i.b.bottom})))};x.propTypes={fetchSystems:E.a.func,systemsFetchStatus:E.a.string,systems:E.a.object,addNotification:E.a.func,history:E.a.object,intl:E.a.any};t.default=Object(k.c)(T()(Object(P.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(Object(a),!0).forEach((function(t){s()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({systems:e.AdvisorStore.systems,systemsFetchStatus:e.AdvisorStore.systemsFetchStatus},t)}),(function(e){return{fetchSystems:function(t){return e(c.h(t))},addNotification:function(t){return e(Object(w.addNotification)(t))}}}))(x)))}}]);
//# sourceMappingURL=SystemsTable.js.map