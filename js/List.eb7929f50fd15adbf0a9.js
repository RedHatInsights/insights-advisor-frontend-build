(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[6842],{93294:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>j});var r=a(92137),n=a(28481),s=a(87757),o=a.n(s),i=(a(94763),a(59303)),l=a(48716),c=a(39173),m=a(93264),d=a.n(m),u=a(71094),f=a(43547),p=a(56715),g=a(96156),v=(a(60565),a(94627)),A=a(1657),h=a(85061),y=a(39138),Z=a.n(y),b=a(45697),E=a.n(b),C=a(69891),M=a(30893),x=function(e){var t=e.statsSystems,a=e.statsReports,r=e.topActiveRec,s=e.intl,o=function(e,t){return Math.round(Number(e/t*100))},l=[{x:s.formatMessage(M.Z.critical),y:o(a.total_risk[4],a.total)},{x:s.formatMessage(M.Z.important),y:o(a.total_risk[3],a.total)},{x:s.formatMessage(M.Z.moderate),y:o(a.total_risk[2],a.total)},{x:s.formatMessage(M.Z.low),y:o(a.total_risk[1],a.total)}],c=[[s.formatMessage(M.Z.severity),s.formatMessage(M.Z.poundOfRecs)]].concat((0,h.Z)(Object.entries(a.total_risk).map((function(e){var t=(0,n.Z)(e,2),r=t[0],l=t[1];return[i.TOTAL_RISK_LABEL[r].props.children,s.formatMessage(M.Z.recNumAndPercentage,{count:l,total:o(l,a.total)})]})).reverse())),m=[{x:s.formatMessage(M.Z.availability),y:o(a.category.Availability,a.total)},{x:s.formatMessage(M.Z.performance),y:o(a.category.Performance,a.total)},{x:s.formatMessage(M.Z.security),y:o(a.category.Security,a.total)},{x:s.formatMessage(M.Z.stability),y:o(a.category.Stability,a.total)}],u=[[s.formatMessage(M.Z.category),s.formatMessage(M.Z.poundOfRecs)]].concat((0,h.Z)(Object.entries(a.category).map((function(e){var t=(0,n.Z)(e,2),r=t[0],i=t[1];return[r,s.formatMessage(M.Z.recNumAndPercentage,{count:i,total:o(i,a.total)})]})))),f=function(e){return d().createElement(C.xv,null,d().createElement(C.xv,{style:{fontWeight:700}}," ",e.description)," ",Z()(e.summary,{length:280}))};return d().createElement(d().Fragment,{key:s.formatMessage(M.Z.insightsHeader)},d().createElement(v.nv,null,s.formatMessage(M.Z.execReportHeader,{systems:d().createElement(C.xv,{style:{fontWeight:700}},s.formatMessage(M.Z.execReportHeaderSystems,{systems:t.total})),risks:d().createElement(C.xv,{style:{fontWeight:700}}," ",s.formatMessage(M.Z.execReportHeaderRisks,{risks:a.total}))})),d().createElement(v.$0,{title:s.formatMessage(M.Z.severityHeader)},d().createElement(v.sg,null,d().createElement(v.iA,{withHeader:!0,rows:c})),d().createElement(v.sg,null,d().createElement(v.kL,{chartType:"pie",subTitle:s.formatMessage(M.Z.severityHeader),title:"100",data:l,colorSchema:"multi"}))),d().createElement(v.$0,{title:s.formatMessage(M.Z.categoryHeader)},d().createElement(v.sg,null,d().createElement(v.iA,{withHeader:!0,rows:u})),d().createElement(v.sg,null,d().createElement(v.kL,{chartType:"pie",subTitle:s.formatMessage(M.Z.categoryHeader),title:"100",data:m}))),d().createElement(v.$0,{title:s.formatMessage(M.Z.top3RulesHeader),withColumn:!1},r.data.map((function(e,t){return d().createElement(v.s_,{key:t,description:f(e)},d().createElement(v.Lv,{title:s.formatMessage(M.Z.systemsExposed)},"".concat(e.impacted_systems_count)),d().createElement(v.Lv,{title:s.formatMessage(M.Z.totalRisk)},d().createElement(v.Uc,{variant:e.total_risk})))}))))};x.propTypes={statsSystems:E().object,statsReports:E().object,topActiveRec:E().object,intl:E().any};const w=x;var O=a(86896);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){(0,g.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const S=function(e){var t=e.isDisabled,a=(0,O.Z)(),s=(0,m.useState)(!1),l=(0,n.Z)(s,2),c=l[0],f=l[1],p=function(){var e=(0,r.Z)(o().mark((function e(){var t,r,s,l,c,m;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.t0=Promise,e.next=4,u.Z.get(i.STATS_SYSTEMS_FETCH_URL);case 4:return e.t1=e.sent.data,e.next=7,u.Z.get(i.STATS_REPORTS_FETCH_URL);case 7:return e.t2=e.sent.data,e.next=10,u.Z.get(i.RULES_FETCH_URL,{},{limit:3,sort:"-total_risk,-impacted_count",impacting:!0});case 10:return e.t3=e.sent.data,e.t4=[e.t1,e.t2,e.t3],e.next=14,e.t0.all.call(e.t0,e.t4);case 14:return t=e.sent,r=(0,n.Z)(t,3),s=r[0],l=r[1],c=r[2],m=w({statsReports:l,statsSystems:s,topActiveRec:c,intl:a}),f(!1),e.abrupt("return",[m]);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,m.useMemo)((function(){return d().createElement(v.o6,{groupName:a.formatMessage(M.Z.redHatInsights),label:c?a.formatMessage(M.Z.loading):a.formatMessage(M.Z.downloadExecutiveLabel),asyncFunction:p,buttonProps:R({variant:"link",icon:d().createElement(A.ZP,{className:"iconOverride"}),component:"a",className:"downloadButtonOverride",isAriaDisabled:t},c?{isDisabled:!0}:null),type:a.formatMessage(M.Z.insightsHeader),fileName:"Advisor-Executive-Report--".concat((new Date).toUTCString().replace(/ /g,"-"),".pdf")})}),[c])};var _=a(46891),D=a(86350),H=a(35224),T=a(43707),L=(0,m.lazy)((function(){return Promise.all([a.e(6410),a.e(5252),a.e(2619),a.e(7109),a.e(6341),a.e(609),a.e(8702),a.e(8921),a.e(384)]).then(a.bind(a,74560))})),P=function(){var e=(0,O.Z)(),t=(0,T.T)("advisor",i.PERMS.export),a=JSON.parse(localStorage.getItem("AdvisorRedHatDisabledRuleAlert")||"true"),s=(0,m.useState)(a),g=(0,n.Z)(s,2),v=g[0],A=g[1],h=(0,m.useState)(0),y=(0,n.Z)(h,2),Z=y[0],b=y[1];return document.title=e.formatMessage(M.Z.documentTitle,{subnav:M.Z.recommendations.defaultMessage}),(0,m.useEffect)((function(){a&&(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(i.RULES_FETCH_URL,"?rule_status=rhdisabled"));case 3:t=e.sent.data,b(t.meta.count),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),b(0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[a]),d().createElement(d().Fragment,null,d().createElement(l.Z,{className:"ins-c-recommendations-header"},d().createElement(c.Z,{title:"".concat(e.formatMessage(M.Z.insightsHeader)," ").concat(e.formatMessage(M.Z.recommendations).toLowerCase())}),!t.isLoading&&d().createElement(H.u,{trigger:t.hasAccess?"":"mouseenter",content:e.formatMessage(M.Z.permsAction)},d().createElement(S,{isDisabled:!t.hasAccess})),v&&Z>0&&d().createElement(f.b,{className:"alertOverride",variant:"warning",isInline:!0,title:e.formatMessage(M.Z.redhatDisabledRuleAlertTitle),actionClose:d().createElement(p.g,{onClose:function(){A(!1),localStorage.setItem("AdvisorRedHatDisabledRuleAlert","false")}})},e.formatMessage(M.Z.redhatDisabledRuleAlert))),d().createElement(D.Z,null,d().createElement(m.Suspense,{fallback:d().createElement(_.Z,null)},d().createElement(L,null))))};P.displayName="recommendations-list";const j=P},82728:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>f});var r=a(48716),n=a(39173),s=a(93264),o=a.n(s),i=a(46891),l=a(86350),c=a(30893),m=a(86896),d=(0,s.lazy)((function(){return Promise.all([a.e(6410),a.e(5252),a.e(5370),a.e(7109),a.e(6341),a.e(609),a.e(8921),a.e(3993)]).then(a.bind(a,40444))})),u=function(){var e=(0,m.Z)();return document.title=e.formatMessage(c.Z.documentTitle,{subnav:c.Z.systems.defaultMessage}),o().createElement(o().Fragment,null,o().createElement(r.Z,null,o().createElement(n.Z,{title:"".concat(e.formatMessage(c.Z.insightsHeader)," ").concat(e.formatMessage(c.Z.systems).toLowerCase())})),o().createElement(l.Z,null,o().createElement(s.Suspense,{fallback:o().createElement(i.Z,null)},o().createElement(d,null))))};u.displayName="systems-list";const f=u},24890:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var r=a(94015),n=a.n(r),s=a(23645),o=a.n(s)()(n());o.push([e.id,'.advisor .iconOverride{color:var("--pf-global--link--Color");margin-right:5px}.advisor .downloadButtonOverride{float:right}@media only screen and (max-width: 585px){.advisor .downloadButtonOverride{float:none;padding-left:0px}}\n',"",{version:3,sources:["webpack://./src/PresentationalComponents/ExecutiveReport/_Download.scss"],names:[],mappings:"AAAA,uBACc,qCAAqC,CAAC,gBAAgB,CADpE,iCAC6F,WAAW,CAAC,0CADzG,iCAC2K,UAAU,CAAC,gBAAgB,CAAE",sourcesContent:['.advisor{\n.iconOverride{color:var("--pf-global--link--Color");margin-right:5px}.downloadButtonOverride{float:right}@media only screen and (max-width: 585px){.downloadButtonOverride{float:none;padding-left:0px}}\n\n}'],sourceRoot:""}]);const i=o},46216:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var r=a(94015),n=a.n(r),s=a(23645),o=a.n(s)()(n());o.push([e.id,".advisor .ins-c-recommendations-header{width:auto}.advisor .ins-c-recommendations-header .pf-c-title{display:inline-block}.advisor .ins-c-recommendations-header .pf-c-button{line-height:var(--pf-global--LineHeight--sm)}.advisor .ins-c-recommendations-header .alertOverride{font-size:var(--pf-global--FontSize--md);margin-top:var(--pf-global--spacer--lg)}@media only screen and (max-width: 585px){.advisor .ins-c-recommendations-header .pf-c-title{display:block}.advisor .ins-c-recommendations-header .alertOverride{margin-top:var(--pf-global--spacer--sm)}}\n","",{version:3,sources:["webpack://./src/SmartComponents/Recs/List.scss"],names:[],mappings:"AAAA,uCAC8B,UAAU,CADxC,mDACmF,oBAAoB,CADvG,oDACmJ,4CAA4C,CAD/L,sDAC6O,wCAAwC,CAAC,uCAAuC,CAAC,0CAD9T,mDACkZ,aAAa,CAD/Z,sDAC6c,uCAAuC,CAAE",sourcesContent:[".advisor{\n.ins-c-recommendations-header{width:auto}.ins-c-recommendations-header .pf-c-title{display:inline-block}.ins-c-recommendations-header .pf-c-button{line-height:var(--pf-global--LineHeight--sm)}.ins-c-recommendations-header .alertOverride{font-size:var(--pf-global--FontSize--md);margin-top:var(--pf-global--spacer--lg)}@media only screen and (max-width: 585px){.ins-c-recommendations-header .pf-c-title{display:block}.ins-c-recommendations-header .alertOverride{margin-top:var(--pf-global--spacer--sm)}}\n\n}"],sourceRoot:""}]);const i=o},60565:(e,t,a)=>{"use strict";var r=a(93379),n=a.n(r),s=a(24890),o=n()(s.default,{insert:"head",singleton:!1});if(!s.default.locals||e.hot.invalidate){var i=s.default.locals;e.hot.accept(24890,(t=>{s=a(24890),function(e,t,a){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(i,s.default.locals)?(i=s.default.locals,o(s.default)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),s.default.locals},94763:(e,t,a)=>{"use strict";var r=a(93379),n=a.n(r),s=a(46216),o=n()(s.default,{insert:"head",singleton:!1});if(!s.default.locals||e.hot.invalidate){var i=s.default.locals;e.hot.accept(46216,(t=>{s=a(46216),function(e,t,a){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(i,s.default.locals)?(i=s.default.locals,o(s.default)):e.hot.invalidate()}))}e.hot.dispose((function(){o()})),s.default.locals},19527:()=>{},69331:()=>{},52361:()=>{},94616:()=>{}}]);
//# sourceMappingURL=../sourcemaps/List.95cff0211abbae5891b6.js.map