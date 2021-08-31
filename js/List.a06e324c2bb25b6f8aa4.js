(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[842],{93294:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>W});var r=a(29439),n=a(48716),s=a(39173),o=a(93264),l=a.n(o),c=a(90832),i=a(48099),m=a(29873),u=a(73685),f=a(4942),d=a(15861),g=a(87757),p=a.n(g),y=a(59303),Z=a(3968),E=a(1657),v=a(71094),b=a(93433),M=a(39138),h=a.n(M),O=a(45697),k=a.n(O),w=a(74093),x=a(30893),P=function(e){var t=e.statsSystems,a=e.statsReports,n=e.topActiveRec,s=e.intl,o=function(e,t){return Math.round(Number(e/t*100))},c=[{x:s.formatMessage(x.Z.critical),y:o(a.total_risk[4],a.total)},{x:s.formatMessage(x.Z.important),y:o(a.total_risk[3],a.total)},{x:s.formatMessage(x.Z.moderate),y:o(a.total_risk[2],a.total)},{x:s.formatMessage(x.Z.low),y:o(a.total_risk[1],a.total)}],i=[[s.formatMessage(x.Z.severity),s.formatMessage(x.Z.poundOfRecs)]].concat((0,b.Z)(Object.entries(a.total_risk).map((function(e){var t=(0,r.Z)(e,2),n=t[0],l=t[1];return[y.t0[n].props.children,s.formatMessage(x.Z.recNumAndPercentage,{count:l,total:o(l,a.total)})]})).reverse())),m=[{x:s.formatMessage(x.Z.availability),y:o(a.category.Availability,a.total)},{x:s.formatMessage(x.Z.performance),y:o(a.category.Performance,a.total)},{x:s.formatMessage(x.Z.security),y:o(a.category.Security,a.total)},{x:s.formatMessage(x.Z.stability),y:o(a.category.Stability,a.total)}],u=[[s.formatMessage(x.Z.category),s.formatMessage(x.Z.poundOfRecs)]].concat((0,b.Z)(Object.entries(a.category).map((function(e){var t=(0,r.Z)(e,2),n=t[0],l=t[1];return[n,s.formatMessage(x.Z.recNumAndPercentage,{count:l,total:o(l,a.total)})]})))),f=function(e){return l().createElement(w.xv,null,l().createElement(w.xv,{style:{fontWeight:700}}," ",e.description)," ",h()(e.summary,{length:280}))};return l().createElement(l().Fragment,{key:s.formatMessage(x.Z.insightsHeader)},l().createElement(Z.nv,null,s.formatMessage(x.Z.execReportHeader,{systems:l().createElement(w.xv,{style:{fontWeight:700}},s.formatMessage(x.Z.execReportHeaderSystems,{systems:t.total})),risks:l().createElement(w.xv,{style:{fontWeight:700}}," ",s.formatMessage(x.Z.execReportHeaderRisks,{risks:a.total}))})),l().createElement(Z.$0,{title:s.formatMessage(x.Z.severityHeader)},l().createElement(Z.sg,null,l().createElement(Z.iA,{withHeader:!0,rows:i})),l().createElement(Z.sg,null,l().createElement(Z.kL,{chartType:"pie",subTitle:s.formatMessage(x.Z.severityHeader),title:"100",data:c,colorSchema:"multi"}))),l().createElement(Z.$0,{title:s.formatMessage(x.Z.categoryHeader)},l().createElement(Z.sg,null,l().createElement(Z.iA,{withHeader:!0,rows:u})),l().createElement(Z.sg,null,l().createElement(Z.kL,{chartType:"pie",subTitle:s.formatMessage(x.Z.categoryHeader),title:"100",data:m}))),l().createElement(Z.$0,{title:s.formatMessage(x.Z.top3RulesHeader),withColumn:!1},n.data.map((function(e,t){return l().createElement(Z.s_,{key:t,description:f(e)},l().createElement(Z.Lv,{title:s.formatMessage(x.Z.systemsExposed)},"".concat(e.impacted_systems_count)),l().createElement(Z.Lv,{title:s.formatMessage(x.Z.totalRisk)},l().createElement(Z.Uc,{variant:e.total_risk})))}))))};P.propTypes={statsSystems:k().object,statsReports:k().object,topActiveRec:k().object,intl:k().any};const S=P;var j=a(86896);function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(Object(a),!0).forEach((function(t){(0,f.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const A=function(e){var t=e.isDisabled,a=(0,j.Z)(),n=(0,o.useState)(!1),s=(0,r.Z)(n,2),c=s[0],i=s[1],m=function(){var e=(0,d.Z)(p().mark((function e(){var t,n,s,o,l,c;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.t0=Promise,e.next=4,(0,v.dX)(y.Pl);case 4:return e.t1=e.sent.data,e.next=7,(0,v.dX)(y.AS);case 7:return e.t2=e.sent.data,e.next=10,(0,v.dX)(y.cJ,{},{limit:3,sort:"-total_risk,-impacted_count",impacting:!0});case 10:return e.t3=e.sent.data,e.t4=[e.t1,e.t2,e.t3],e.next=14,e.t0.all.call(e.t0,e.t4);case 14:return t=e.sent,n=(0,r.Z)(t,3),s=n[0],o=n[1],l=n[2],c=S({statsReports:o,statsSystems:s,topActiveRec:l,intl:a}),i(!1),e.abrupt("return",[c]);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.useMemo)((function(){return l().createElement(Z.o6,{groupName:a.formatMessage(x.Z.redHatInsights),label:c?a.formatMessage(x.Z.loading):a.formatMessage(x.Z.downloadExecutiveLabel),asyncFunction:m,buttonProps:R({variant:"link",icon:l().createElement(E.ZP,{className:"iconOverride"}),component:"a",className:"downloadButtonOverride",isAriaDisabled:t},c?{isDisabled:!0}:null),type:a.formatMessage(x.Z.insightsHeader),fileName:"Advisor-Executive-Report--".concat((new Date).toUTCString().replace(/ /g,"-"),".pdf")})}),[c])};var _=a(46891),N=a(86350),T=a(52202),D=a(16545),L=a(43707),C=(0,o.lazy)((function(){return Promise.all([a.e(410),a.e(252),a.e(736),a.e(341),a.e(533),a.e(893),a.e(584),a.e(921),a.e(609),a.e(384)]).then(a.bind(a,74560))})),z=(0,o.lazy)((function(){return Promise.all([a.e(410),a.e(341),a.e(584),a.e(609),a.e(573)]).then(a.bind(a,10793))})),F=(0,o.lazy)((function(){return Promise.all([a.e(410),a.e(584),a.e(960)]).then(a.bind(a,42910))})),K=function(){var e=(0,j.Z)(),t=(0,u.useLocation)().pathname,a=(0,u.useHistory)(),f=(0,L.T)("advisor",y.Gd.export);document.title=e.formatMessage(x.Z.documentTitle,{subnav:x.Z.recommendations.defaultMessage});var d=(0,o.useState)("/recommendations/pathways"===t?1:0),g=(0,r.Z)(d,2),p=g[0],Z=g[1];return l().createElement(l().Fragment,null,l().createElement(n.Z,{className:"ins-c-recommendations-header"},l().createElement(s.Z,{title:"".concat(e.formatMessage(x.Z.insightsHeader)," ").concat(e.formatMessage(x.Z.recommendations).toLowerCase())}),!f.isLoading&&l().createElement(D.u,{trigger:f.hasAccess?"":"mouseenter",content:e.formatMessage(x.Z.permsAction)},l().createElement(A,{isDisabled:!f.hasAccess}))),l().createElement(N.Z,null,l().createElement(o.Suspense,{fallback:l().createElement(_.Z,null)},l().createElement(F,null)),l().createElement(c.m,{className:"ins-c-tab-header",mountOnEnter:!0,unmountOnExit:!0,activeKey:p,onSelect:function(e,t){return function(e){Z(e),a.push(1===e?"/recommendations/pathways":"/recommendations")}(t)}},l().createElement(i.O,{eventKey:0,title:l().createElement(m.T,null,e.formatMessage(x.Z.recommendations))},l().createElement(o.Suspense,{fallback:l().createElement(_.Z,null)},l().createElement(C,null))),l().createElement(i.O,{eventKey:1,title:l().createElement(m.T,null,e.formatMessage(x.Z.pathways)," ",(0,T.b)(e.formatMessage(x.Z.recommendedPathways)))},l().createElement(o.Suspense,{fallback:l().createElement(_.Z,null)},l().createElement(z,null))))))};K.displayName="recommendations-list";const W=K},82728:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var r=a(48716),n=a(39173),s=a(93264),o=a.n(s),l=a(46891),c=a(86350),i=a(30893),m=a(86896),u=(0,s.lazy)((function(){return Promise.all([a.e(410),a.e(252),a.e(921),a.e(993)]).then(a.bind(a,40444))})),f=function(){var e=(0,m.Z)();return document.title=e.formatMessage(i.Z.documentTitle,{subnav:i.Z.systems.defaultMessage}),o().createElement(o().Fragment,null,o().createElement(r.Z,null,o().createElement(n.Z,{title:"".concat(e.formatMessage(i.Z.insightsHeader)," ").concat(e.formatMessage(i.Z.systems).toLowerCase())})),o().createElement(c.Z,null,o().createElement(s.Suspense,{fallback:o().createElement(l.Z,null)},o().createElement(u,null))))};f.displayName="systems-list";const d=f},42480:()=>{},19527:()=>{},69331:()=>{},69862:()=>{},40964:()=>{}}]);
//# sourceMappingURL=../sourcemaps/List.c8212ae5e518d2e572fe258e46c09123.js.map