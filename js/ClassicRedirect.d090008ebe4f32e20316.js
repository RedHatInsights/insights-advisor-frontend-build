(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[5748],{77475:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>k});var a=n(87757),r=n.n(a),s=n(48926),c=n.n(s),i=n(63038),o=n.n(i),l=n(97522),u=n.n(l),d=n(37802),f=n(82141),m=n(75824),v=n(55399),p=n(77669),h=n(70892),g=n(18623),w=n(86588),Z=n(86896);const k=function(){var e=(0,l.useState)("pending"),t=o()(e,2),n=t[0],a=t[1],s=(0,l.useState)(),i=o()(s,2),k=i[0],E=i[1],b=(0,Z.Z)(),y=(0,w.useDispatch)(),x=function(e){var t=e.split("/"),n=t.some((function(e){return"beta"===e}))?6:5;switch(null==t?void 0:t[3]){case"systems":return[null==t?void 0:t[n],"/systems"];case"recommendations":return[null==t?void 0:t[n+1],"/recommendations/".concat(null==t?void 0:t[n])];default:throw new Error(b.formatMessage(g.Z.invalidPathname))}};return(0,l.useEffect)((function(){c()(r().mark((function e(){var t,n,s,c,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=x(window.location.pathname),n=o()(t,2),s=n[0],c=n[1],e.next=4,d.Z.get("/api/inventory/v1/hosts?insights_id=".concat(s));case 4:i=e.sent.data.results[0].id,E("".concat(c,"/").concat(i)),a("fulfilled"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),y((0,h.addNotification)({variant:"danger",dismissable:!0,title:b.formatMessage(g.Z.error),description:"".concat(e.t0)})),a("rejected");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[E,a,b,y]),u().createElement(u().Fragment,null,"pending"===n&&u().createElement(f.Z,null),"fulfilled"===n&&u().createElement(v.Redirect,{to:k}),"rejected"===n&&u().createElement(m.Z,{icon:p.ZP,title:b.formatMessage(g.Z.inventoryIdNotFound)}))}}}]);
//# sourceMappingURL=ClassicRedirect.d090008ebe4f32e20316.js.map