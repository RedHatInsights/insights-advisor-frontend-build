(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[3645],{12288:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>P});var r=n(94786),o=n(11102),c=n(60515),a=n(94949),u=n(97522),i=n.n(u),l=n(16530),s=n(82141),p=n(45697),f=n.n(p);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=(0,u.lazy)((function(){return Promise.all([n.e(6410),n.e(5252),n.e(6042),n.e(7641)]).then(n.bind(n,43147))})),b=(0,u.lazy)((function(){return Promise.all([n.e(6410),n.e(5252),n.e(9002),n.e(8909),n.e(6042),n.e(9900),n.e(2760),n.e(7054),n.e(3854),n.e(384),n.e(4683)]).then(n.bind(n,88084))})),h=(0,u.lazy)((function(){return Promise.all([n.e(6410),n.e(5252),n.e(9900),n.e(1694)]).then(n.bind(n,87585))})),O=function(e,t){var n=t.type,r=t.payload;return{setLoaded:m(m({},e),{},{loaded:!0,isInternal:r})}[n]},E=function(e){var t=e.component,n=(0,c.Z)(e,["component"]),a=(0,u.useReducer)(O,{isInternal:!1,loaded:!1}),s=(0,o.Z)(a,2),p=s[0],f=s[1];return(0,u.useEffect)((function(){insights.chrome.auth.getUser().then((function(e){return f({type:"setLoaded",payload:e.identity.user.is_internal})}))}),[]),i().createElement(l.Route,(0,r.Z)({},n,{render:function(e){return p.loaded&&(p.isInternal?i().createElement(t,e):i().createElement(l.Redirect,{to:"/topics"}))}}))},j=function(e){return i().createElement(u.Suspense,{fallback:i().createElement(s.Z,null)},e)};E.propTypes={component:f().any};const P=function(){return i().createElement(l.Switch,null,i().createElement(l.Route,{exact:!0,path:"/topics",component:function(){return j(i().createElement(y,null))}}),i().createElement(l.Route,{exact:!0,path:"/topics/:id",component:function(){return j(i().createElement(b,null))}}),i().createElement(E,{exact:!0,path:"/topics/admin/manage",component:function(){return j(i().createElement(h,null))}}),i().createElement(l.Redirect,{path:"*",to:"/topics",push:!0}))}}}]);
//# sourceMappingURL=Topics.02c99af8c4c67dd2d741.js.map