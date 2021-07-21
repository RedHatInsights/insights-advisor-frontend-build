(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[842],{93294:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>L});var r=a(48716),s=a(39173),n=a(93264),o=a.n(n),c=a(96156),l=a(92137),i=a(28481),m=a(87757),u=a.n(m),f=a(59303),g=a(71094),d=a(3968),p=a(1657),y=a(85061),Z=a(39138),E=a.n(Z),v=a(45697),b=a.n(v),M=a(74093),h=a(30893),O=function(e){var t=e.statsSystems,a=e.statsReports,r=e.topActiveRec,s=e.intl,n=function(e,t){return Math.round(Number(e/t*100))},c=[{x:s.formatMessage(h.Z.critical),y:n(a.total_risk[4],a.total)},{x:s.formatMessage(h.Z.important),y:n(a.total_risk[3],a.total)},{x:s.formatMessage(h.Z.moderate),y:n(a.total_risk[2],a.total)},{x:s.formatMessage(h.Z.low),y:n(a.total_risk[1],a.total)}],l=[[s.formatMessage(h.Z.severity),s.formatMessage(h.Z.poundOfRecs)]].concat((0,y.Z)(Object.entries(a.total_risk).map((function(e){var t=(0,i.Z)(e,2),r=t[0],o=t[1];return[f.TOTAL_RISK_LABEL[r].props.children,s.formatMessage(h.Z.recNumAndPercentage,{count:o,total:n(o,a.total)})]})).reverse())),m=[{x:s.formatMessage(h.Z.availability),y:n(a.category.Availability,a.total)},{x:s.formatMessage(h.Z.performance),y:n(a.category.Performance,a.total)},{x:s.formatMessage(h.Z.security),y:n(a.category.Security,a.total)},{x:s.formatMessage(h.Z.stability),y:n(a.category.Stability,a.total)}],u=[[s.formatMessage(h.Z.category),s.formatMessage(h.Z.poundOfRecs)]].concat((0,y.Z)(Object.entries(a.category).map((function(e){var t=(0,i.Z)(e,2),r=t[0],o=t[1];return[r,s.formatMessage(h.Z.recNumAndPercentage,{count:o,total:n(o,a.total)})]})))),g=function(e){return o().createElement(M.xv,null,o().createElement(M.xv,{style:{fontWeight:700}}," ",e.description)," ",E()(e.summary,{length:280}))};return o().createElement(o().Fragment,{key:s.formatMessage(h.Z.insightsHeader)},o().createElement(d.nv,null,s.formatMessage(h.Z.execReportHeader,{systems:o().createElement(M.xv,{style:{fontWeight:700}},s.formatMessage(h.Z.execReportHeaderSystems,{systems:t.total})),risks:o().createElement(M.xv,{style:{fontWeight:700}}," ",s.formatMessage(h.Z.execReportHeaderRisks,{risks:a.total}))})),o().createElement(d.$0,{title:s.formatMessage(h.Z.severityHeader)},o().createElement(d.sg,null,o().createElement(d.iA,{withHeader:!0,rows:l})),o().createElement(d.sg,null,o().createElement(d.kL,{chartType:"pie",subTitle:s.formatMessage(h.Z.severityHeader),title:"100",data:c,colorSchema:"multi"}))),o().createElement(d.$0,{title:s.formatMessage(h.Z.categoryHeader)},o().createElement(d.sg,null,o().createElement(d.iA,{withHeader:!0,rows:u})),o().createElement(d.sg,null,o().createElement(d.kL,{chartType:"pie",subTitle:s.formatMessage(h.Z.categoryHeader),title:"100",data:m}))),o().createElement(d.$0,{title:s.formatMessage(h.Z.top3RulesHeader),withColumn:!1},r.data.map((function(e,t){return o().createElement(d.s_,{key:t,description:g(e)},o().createElement(d.Lv,{title:s.formatMessage(h.Z.systemsExposed)},"".concat(e.impacted_systems_count)),o().createElement(d.Lv,{title:s.formatMessage(h.Z.totalRisk)},o().createElement(d.Uc,{variant:e.total_risk})))}))))};O.propTypes={statsSystems:b().object,statsReports:b().object,topActiveRec:b().object,intl:b().any};const k=O;var x=a(86896);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(Object(a),!0).forEach((function(t){(0,c.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const _=function(e){var t=e.isDisabled,a=(0,x.Z)(),r=(0,n.useState)(!1),s=(0,i.Z)(r,2),c=s[0],m=s[1],y=function(){var e=(0,l.Z)(u().mark((function e(){var t,r,s,n,o,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.t0=Promise,e.next=4,g.Z.get(f.STATS_SYSTEMS_FETCH_URL);case 4:return e.t1=e.sent.data,e.next=7,g.Z.get(f.STATS_REPORTS_FETCH_URL);case 7:return e.t2=e.sent.data,e.next=10,g.Z.get(f.RULES_FETCH_URL,{},{limit:3,sort:"-total_risk,-impacted_count",impacting:!0});case 10:return e.t3=e.sent.data,e.t4=[e.t1,e.t2,e.t3],e.next=14,e.t0.all.call(e.t0,e.t4);case 14:return t=e.sent,r=(0,i.Z)(t,3),s=r[0],n=r[1],o=r[2],c=k({statsReports:n,statsSystems:s,topActiveRec:o,intl:a}),m(!1),e.abrupt("return",[c]);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,n.useMemo)((function(){return o().createElement(d.o6,{groupName:a.formatMessage(h.Z.redHatInsights),label:c?a.formatMessage(h.Z.loading):a.formatMessage(h.Z.downloadExecutiveLabel),asyncFunction:y,buttonProps:R({variant:"link",icon:o().createElement(p.ZP,{className:"iconOverride"}),component:"a",className:"downloadButtonOverride",isAriaDisabled:t},c?{isDisabled:!0}:null),type:a.formatMessage(h.Z.insightsHeader),fileName:"Advisor-Executive-Report--".concat((new Date).toUTCString().replace(/ /g,"-"),".pdf")})}),[c])};var w=a(46891),T=a(86350),H=a(35224),P=a(43707),A=(0,n.lazy)((function(){return Promise.all([a.e(410),a.e(252),a.e(736),a.e(808),a.e(341),a.e(144),a.e(921),a.e(384)]).then(a.bind(a,69655))})),j=function(){var e=(0,x.Z)(),t=(0,P.T)("advisor",f.PERMS.export);return document.title=e.formatMessage(h.Z.documentTitle,{subnav:h.Z.recommendations.defaultMessage}),o().createElement(o().Fragment,null,o().createElement(r.Z,{className:"ins-c-recommendations-header"},o().createElement(s.Z,{title:"".concat(e.formatMessage(h.Z.insightsHeader)," ").concat(e.formatMessage(h.Z.recommendations).toLowerCase())}),!t.isLoading&&o().createElement(H.u,{trigger:t.hasAccess?"":"mouseenter",content:e.formatMessage(h.Z.permsAction)},o().createElement(_,{isDisabled:!t.hasAccess}))),o().createElement(T.Z,null,o().createElement(n.Suspense,{fallback:o().createElement(w.Z,null)},o().createElement(A,null))))};j.displayName="recommendations-list";const L=j},82728:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>g});var r=a(48716),s=a(39173),n=a(93264),o=a.n(n),c=a(46891),l=a(86350),i=a(30893),m=a(86896),u=(0,n.lazy)((function(){return Promise.all([a.e(410),a.e(252),a.e(808),a.e(921),a.e(99),a.e(993)]).then(a.bind(a,40444))})),f=function(){var e=(0,m.Z)();return document.title=e.formatMessage(i.Z.documentTitle,{subnav:i.Z.systems.defaultMessage}),o().createElement(o().Fragment,null,o().createElement(r.Z,null,o().createElement(s.Z,{title:"".concat(e.formatMessage(i.Z.insightsHeader)," ").concat(e.formatMessage(i.Z.systems).toLowerCase())})),o().createElement(l.Z,null,o().createElement(n.Suspense,{fallback:o().createElement(c.Z,null)},o().createElement(u,null))))};f.displayName="systems-list";const g=f},19527:()=>{},69331:()=>{},69862:()=>{},40964:()=>{}}]);
//# sourceMappingURL=../sourcemaps/List.ff24672f82adf08b60a4.js.map