(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1050:function(e,t,a){"use strict";a.r(t);var n=a(160),s=a.n(n),r=a(273),c=a.n(r),o=a(520),i=a(348),l=a(61),u=a(2),f=a.n(u),m=a(324),b=a(325),p=a(43),y=a(349),g=a(347),O=a(550),d=a(98),j=a(529),S=a(530),h=a(1),E=a.n(h),v=a(83),w=a(97),P=a(617),k=a(29),M=a(20),C=a(518),T=a.n(C),F=a(272),_=a.n(F);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var N=function(e){var t=e.systemsFetchStatus,a=e.fetchSystems,n=e.systems,s=e.intl,r=Object(u.useState)([{title:s.formatMessage(M.a.name),transforms:[m.a]},{title:s.formatMessage(M.a.numberRuleHits),transforms:[m.a,Object(b.a)(15)]},{title:s.formatMessage(M.a.lastSeen),transforms:[m.a]}]),o=c()(r,1)[0],h=Object(u.useState)([]),E=c()(h,2),v=E[0],w=E[1],k=Object(u.useState)({}),C=c()(k,2),F=C[0],_=C[1],D=Object(u.useState)("-last_seen"),N=c()(D,2),x=N[0],H=N[1],A=Object(u.useState)(10),B=c()(A,2),J=B[0],R=B[1],I=Object(u.useState)(0),L=c()(I,2),V=L[0],q=L[1],z=n.meta?n.meta.count:0,G=Object(u.useState)(""),K=c()(G,2),Q=K[0],U=K[1],W=Object(P.a)(Q,800),X=Object(u.useCallback)((function(e,t,a){var n="".concat("asc"===a?"":"-").concat({0:"display_name",1:"hits",2:"last_seen"}[t]);_({index:t,direction:a}),H(n),q(0)}),[H,_,q]),Y=function(e){q(e*J-J)},Z=Object(u.useCallback)((function(){q(0)}),[]);Object(u.useEffect)((function(){a(Q.length&&{display_name:Q,sort:x})}),[W]),Object(u.useEffect)((function(){a({offset:V,limit:J,sort:x})}),[a,J,V,x]),Object(u.useEffect)((function(){!v.length&&X(null,2,"desc")}),[X,v.length]),Object(u.useEffect)((function(){if(n.data)if(n.meta.count){var e=n.data.flatMap((function(e,t){return[{isOpen:!1,system:e,cells:[{title:f.a.createElement(d.Link,{key:t,to:"/rules/systems/".concat(e.system_uuid)},e.display_name)},{title:f.a.createElement("div",{key:t}," ",e.hits)},{title:f.a.createElement("div",{key:t},T()(e.last_seen).fromNow())}]}]}));w(e.asMutable())}else w([{cells:[{title:f.a.createElement(S.a,{icon:"none",title:s.formatMessage(M.a.systemTableNoHitsTitle),text:s.formatMessage(M.a.systemTableNoHitsEnabledRulesBody)}),props:{colSpan:5}}]}])}),[Z,s,n]);var $=[{label:s.formatMessage(M.a.name),filterValues:{key:"text-filter",onChange:function(e,t){return U(t)},value:Q}}],ee={filters:Q.length>0&&[{category:"Description",chips:[{name:Q}]}]||[],onDelete:function(){return U("")}};return f.a.createElement(f.a.Fragment,null,f.a.createElement(l.PrimaryToolbar,{pagination:{itemCount:z,page:V/J+1,perPage:J,onSetPage:function(e,t){Y(t)},onPerPageSelect:function(e,t){R(t)},isCompact:!1},filterConfig:{items:$},activeFiltersConfig:ee}),"fulfilled"===t&&f.a.createElement(p.b,{"aria-label":"rule-table",sortBy:F,onSort:X,cells:o,rows:v},f.a.createElement(y.a,null),f.a.createElement(g.a,null)),"pending"===t&&f.a.createElement(j.a,null),"failed"===t&&f.a.createElement(O.a,{message:s.formatMessage(M.a.systemTableFetchError)}),f.a.createElement(l.TableToolbar,null,f.a.createElement(i.a,{itemCount:z,perPage:J,page:V/J+1,onSetPage:function(e,t){Y(t)},widgetId:"pagination-options-menu-bottom",variant:i.b.bottom})))};N.propTypes={fetchSystems:E.a.func,systemsFetchStatus:E.a.string,systems:E.a.object,addNotification:E.a.func,history:E.a.object,intl:E.a.any};t.default=Object(k.c)(_()(Object(w.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){s()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({systems:e.AdvisorStore.systems,systemsFetchStatus:e.AdvisorStore.systemsFetchStatus},t)}),(function(e){return{fetchSystems:function(t){return e(o.h(t))},addNotification:function(t){return e(Object(v.addNotification)(t))}}}))(N)))}}]);
//# sourceMappingURL=SystemsTable.js.map