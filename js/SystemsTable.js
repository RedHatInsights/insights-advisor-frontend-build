(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1037:function(e,t,a){"use strict";a.r(t);var n=a(159),s=a.n(n),r=a(268),c=a.n(r),o=a(2),i=a.n(o),l=a(361),u=a(267),f=a.n(u),m=a(1),b=a.n(m),y=a(515),p=a.n(y),g=a(98),O=a(97),d=a(344),j=a(320),S=a(321),E=a(43),h=a(345),v=a(343),w=a(83),P=a(27),k=a(517),M=a(528),T=a(544),C=a(526),_=a(607),F=a(29);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var D=function(e){var t=e.systemsFetchStatus,a=e.fetchSystems,n=e.systems,s=e.intl,r=Object(o.useState)([{title:s.formatMessage(F.a.name),transforms:[j.a]},{title:s.formatMessage(F.a.numberRuleHits),transforms:[j.a,Object(S.a)(15)]},{title:s.formatMessage(F.a.lastSeen),transforms:[j.a]}]),u=c()(r,1)[0],f=Object(o.useState)([]),m=c()(f,2),b=m[0],y=m[1],O=Object(o.useState)({}),w=c()(O,2),P=w[0],k=w[1],N=Object(o.useState)("-last_seen"),D=c()(N,2),x=D[0],H=D[1],A=Object(o.useState)(10),B=c()(A,2),J=B[0],R=B[1],I=Object(o.useState)(0),L=c()(I,2),V=L[0],q=L[1],z=n.meta?n.meta.count:0,G=Object(o.useState)(null),K=c()(G,2),Q=K[0],U=K[1],W=Object(_.a)(Q,800),X=Object(o.useCallback)((function(e,t,a){var n="".concat("asc"===a?"":"-").concat({0:"display_name",1:"hits",2:"last_seen"}[t]);k({index:t,direction:a}),H(n),q(0)}),[H,k,q]),Y=function(e){q(e*J-J)},Z=Object(o.useCallback)((function(){q(0)}),[]);Object(o.useEffect)((function(){null!==Q&&a(Q.length&&{display_name:Q,sort:x})}),[W]),Object(o.useEffect)((function(){a({offset:V,limit:J,sort:x})}),[a,J,V,x]),Object(o.useEffect)((function(){!b.length&&X(null,2,"desc")}),[X,b.length]),Object(o.useEffect)((function(){if(n.data)if(n.meta.count){var e=n.data.flatMap((function(e,t){return[{isOpen:!1,system:e,cells:[{title:i.a.createElement(g.Link,{key:t,to:"/rules/systems/".concat(e.system_uuid)},e.display_name)},{title:i.a.createElement("div",{key:t}," ",e.hits)},{title:i.a.createElement("div",{key:t},p()(e.last_seen).fromNow())}]}]}));y(e.asMutable())}else y([{cells:[{title:i.a.createElement(C.a,{icon:"none",title:s.formatMessage(F.a.systemTableNoHitsTitle),text:s.formatMessage(F.a.systemTableNoHitsEnabledRulesBody)}),props:{colSpan:5}}]}])}),[Z,s,n]);var $=[{label:s.formatMessage(F.a.name),filterValues:{key:"text-filter",onChange:function(e,t){return U(t)},value:Q}}];return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.PrimaryToolbar,{pagination:{itemCount:z,page:V/J+1,perPage:J,onSetPage:function(e,t){Y(t)},onPerPageSelect:function(e,t){R(t)},isCompact:!1},filterConfig:{items:$}}),"fulfilled"===t&&i.a.createElement(E.b,{"aria-label":"rule-table",sortBy:P,onSort:X,cells:u,rows:b},i.a.createElement(h.a,null),i.a.createElement(v.a,null)),"pending"===t&&i.a.createElement(M.a,null),"failed"===t&&i.a.createElement(T.a,{message:s.formatMessage(F.a.systemTableFetchError)}),i.a.createElement(l.TableToolbar,null,i.a.createElement(d.a,{itemCount:z,perPage:J,page:V/J+1,onSetPage:function(e,t){Y(t)},widgetId:"pagination-options-menu-bottom",variant:d.b.bottom})))};D.propTypes={fetchSystems:b.a.func,systemsFetchStatus:b.a.string,systems:b.a.object,addNotification:b.a.func,history:b.a.object,intl:b.a.any};t.default=Object(P.c)(f()(Object(O.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){s()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({systems:e.AdvisorStore.systems,systemsFetchStatus:e.AdvisorStore.systemsFetchStatus},t)}),(function(e){return{fetchSystems:function(t){return e(k.g(t))},addNotification:function(t){return e(Object(w.addNotification)(t))}}}))(D)))}}]);
//# sourceMappingURL=SystemsTable.js.map