"use strict";(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[5748],{77669:(e,t,n)=>{t.__esModule=!0,t.TimesCircleIconConfig={name:"TimesCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z",yOffset:0,xOffset:0},t.TimesCircleIcon=n(35183).createIcon(t.TimesCircleIconConfig),t.default=t.TimesCircleIcon},49011:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var c=n(15861),a=n(70885),r=n(87757),i=n.n(r),s=n(93264),o=n.n(s),l=n(71094),d=n(46891),u=n(34702),f=n(75662),m=n(77669),v=n(71355),h=n(30893),p=n(28216),g=n(86896);const w=function(){var e=(0,s.useState)("pending"),t=(0,a.Z)(e,2),n=t[0],r=t[1],w=(0,s.useState)(),C=(0,a.Z)(w,2),Z=C[0],I=C[1],k=(0,g.Z)(),E=(0,p.useDispatch)(),b=function(e){var t=e.split("/"),n=t.some((function(e){return"beta"===e}))?6:5;switch(null==t?void 0:t[3]){case"systems":return[null==t?void 0:t[n],"/systems"];case"recommendations":return[null==t?void 0:t[n+1],"/recommendations/".concat(null==t?void 0:t[n])];default:throw new Error(k.formatMessage(h.Z.invalidPathname))}};return(0,s.useEffect)((function(){(0,c.Z)(i().mark((function e(){var t,n,c,s,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=b(window.location.pathname),n=(0,a.Z)(t,2),c=n[0],s=n[1],e.next=4,(0,l.dX)("/api/inventory/v1/hosts?insights_id=".concat(c));case 4:o=e.sent.data.results[0].id,I("".concat(s,"/").concat(o)),r("fulfilled"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),E((0,v.addNotification)({variant:"danger",dismissable:!0,title:k.formatMessage(h.Z.error),description:"".concat(e.t0)})),r("rejected");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[I,r,k,E]),o().createElement(o().Fragment,null,"pending"===n&&o().createElement(d.Z,null),"fulfilled"===n&&o().createElement(f.Redirect,{to:Z}),"rejected"===n&&o().createElement(u.Z,{icon:m.default,title:k.formatMessage(h.Z.inventoryIdNotFound)}))}}}]);
//# sourceMappingURL=../sourcemaps/ClassicRedirect.3861c2e42c608f9fcb0f5f0d2259db97.js.map