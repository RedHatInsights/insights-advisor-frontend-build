(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1734:function(e,t,n){"use strict";n.r(t);var r=n(304),c=n.n(r),o=n(299),a=n.n(o),i=n(316),p=n.n(i),u=n(153),l=n.n(u),s=n(0),d=n.n(s),f=n(26),b=n(13),m=n.n(b),O=n(161);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=Object(O.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(19)]).then(n.bind(null,1723))})),w=Object(O.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(17)]).then(n.bind(null,1714))})),g=Object(O.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(16)]).then(n.bind(null,1724))})),E=function(e,t){var n=t.type,r=t.payload;return{setLoaded:h(h({},e),{},{loaded:!0,isInternal:r})}[n]},P=function(e){var t=e.component,n=p()(e,["component"]),r=Object(s.useReducer)(E,{isInternal:!1,loaded:!1}),o=a()(r,2),i=o[0],u=o[1];return Object(s.useEffect)((function(){insights.chrome.auth.getUser().then((function(e){return u({type:"setLoaded",payload:e.identity.user.is_internal})}))}),[]),d.a.createElement(f.d,c()({},n,{render:function(e){return i.loaded&&(i.isInternal?d.a.createElement(t,e):d.a.createElement(f.c,{to:"/topics"}))}}))};P.propTypes={component:m.a.any},t.default=function(){return d.a.createElement(f.g,null,d.a.createElement(f.d,{exact:!0,path:"/topics",component:j}),d.a.createElement(f.d,{exact:!0,path:"/topics/:id",component:w}),d.a.createElement(P,{exact:!0,path:"/topics/admin/manage",component:g}),d.a.createElement(f.c,{path:"*",to:"/topics",push:!0}))}}}]);
//# sourceMappingURL=Topics.js.map