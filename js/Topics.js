(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1050:function(e,t,n){"use strict";n.r(t);var a=n(269),c=n.n(a),i=n(2),r=n.n(i),o=n(72),u=n(106),l=Object(u.a)((function(){return Promise.all([n.e(0),n.e(3),n.e(15)]).then(n.bind(null,1042))})),p=Object(u.a)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(13)]).then(n.bind(null,995))})),s=Object(u.a)((function(){return n.e(12).then(n.bind(null,998))}));t.default=function(){var e=Object(i.useState)({}),t=c()(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){insights.chrome.auth.getUser().then((function(e){return a(e.identity.internal)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(o.g,null,n&&r.a.createElement(o.d,{exact:!0,path:"/topics/admin/manage",component:s}),r.a.createElement(o.d,{exact:!0,path:"/topics",component:l}),r.a.createElement(o.d,{exact:!0,path:"/topics/:id",component:p}),r.a.createElement(o.c,{path:"*",to:"/topics",push:!0})))}}}]);
//# sourceMappingURL=Topics.js.map