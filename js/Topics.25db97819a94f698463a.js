(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[645],{54947:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var r=n(22122),o=n(28481),c=n(81253),a=n(96156),u=n(93264),i=n.n(u),l=n(16530),s=n(46891),p=n(45697),f=n.n(p),d=["component"];function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=(0,u.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(641)]).then(n.bind(n,37468))})),h=(0,u.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(341),n.e(609),n.e(702),n.e(331),n.e(921),n.e(384),n.e(683)]).then(n.bind(n,11198))})),O=(0,u.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(341),n.e(694)]).then(n.bind(n,80455))})),E=function(e,t){var n=t.type,r=t.payload;return{setLoaded:y(y({},e),{},{loaded:!0,isInternal:r})}[n]},j=function(e){var t=e.component,n=(0,c.Z)(e,d),a=(0,u.useReducer)(E,{isInternal:!1,loaded:!1}),s=(0,o.Z)(a,2),p=s[0],f=s[1];return(0,u.useEffect)((function(){insights.chrome.auth.getUser().then((function(e){return f({type:"setLoaded",payload:e.identity.user.is_internal})}))}),[]),i().createElement(l.Route,(0,r.Z)({},n,{render:function(e){return p.loaded&&(p.isInternal?i().createElement(t,e):i().createElement(l.Redirect,{to:"/topics"}))}}))},P=function(e){return i().createElement(u.Suspense,{fallback:i().createElement(s.Z,null)},e)};j.propTypes={component:f().any};const g=function(){return i().createElement(l.Switch,null,i().createElement(l.Route,{exact:!0,path:"/topics",component:function(){return P(i().createElement(b,null))}}),i().createElement(l.Route,{exact:!0,path:"/topics/:id",component:function(){return P(i().createElement(h,null))}}),i().createElement(j,{exact:!0,path:"/topics/admin/manage",component:function(){return P(i().createElement(O,null))}}),i().createElement(l.Redirect,{path:"*",to:"/topics",push:!0}))}}}]);