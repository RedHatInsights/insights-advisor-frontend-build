(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[748],{49011:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w});var r=n(92137),a=n(28481),s=n(87757),c=n.n(s),o=n(93264),i=n.n(o),l=n(71094),u=n(46891),d=n(34702),f=n(16530),m=n(77669),v=n(71355),p=n(30893),h=n(88931),Z=n(86896);const w=function(){var e=(0,o.useState)("pending"),t=(0,a.Z)(e,2),n=t[0],s=t[1],w=(0,o.useState)(),g=(0,a.Z)(w,2),k=g[0],E=g[1],b=(0,Z.Z)(),y=(0,h.useDispatch)(),x=function(e){var t=e.split("/"),n=t.some((function(e){return"beta"===e}))?6:5;switch(null==t?void 0:t[3]){case"systems":return[null==t?void 0:t[n],"/systems"];case"recommendations":return[null==t?void 0:t[n+1],"/recommendations/".concat(null==t?void 0:t[n])];default:throw new Error(b.formatMessage(p.Z.invalidPathname))}};return(0,o.useEffect)((function(){(0,r.Z)(c().mark((function e(){var t,n,r,o,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=x(window.location.pathname),n=(0,a.Z)(t,2),r=n[0],o=n[1],e.next=4,l.Z.get("/api/inventory/v1/hosts?insights_id=".concat(r));case 4:i=e.sent.data.results[0].id,E("".concat(o,"/").concat(i)),s("fulfilled"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),y((0,v.wN)({variant:"danger",dismissable:!0,title:b.formatMessage(p.Z.error),description:"".concat(e.t0)})),s("rejected");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[E,s,b,y]),i().createElement(i().Fragment,null,"pending"===n&&i().createElement(u.Z,null),"fulfilled"===n&&i().createElement(f.Redirect,{to:k}),"rejected"===n&&i().createElement(d.Z,{icon:m.ZP,title:b.formatMessage(p.Z.inventoryIdNotFound)}))}}}]);
//# sourceMappingURL=../sourcemaps/ClassicRedirect.297682caf1bc61648d4d.js.map