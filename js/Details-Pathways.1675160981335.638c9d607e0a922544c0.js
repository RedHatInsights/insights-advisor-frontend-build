(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[1177],{52202:(e,t,a)=>{"use strict";a.d(t,{k:()=>b,b:()=>h});var n=a(66197),r=a(16545),l=a(82644),s=a(29558),c=a(91290),o=a(26076),i=a(93264),m=a.n(i),u=a(41580),f=a(30893),d=a(28186),p=(0,l.Sn)(),E=navigator.language.slice(0,2),g=(0,s.d)({locale:E},p),b=function(e){return m().createElement("span",{className:"adv-system-reboot-message"},m().createElement(o.ZP,{className:e?"adv-c-icon-reboot-required":"adv-c-icon-no-reboot-required"}),m().createElement(n.TextContent,{className:"adv-c-text-system-reboot-message pf-u-font-size-sm"},m().createElement(n.Text,{component:n.TextVariants.p},g.formatMessage(f.Z.systemReboot,{strong:function(e){return(0,d.fK)(e)},status:e?g.formatMessage(f.Z.is):g.formatMessage(f.Z.isNot)}))))},h=function(e){return m().createElement(r.u,{key:e,position:r.D.right,content:m().createElement("div",null,e)},m().createElement("span",{"aria-label":"Action"},m().createElement(c.ZP,{color:u.global_secondary_color_100.value})))}},24130:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(42293),r=a(45697),l=a.n(r),s=a(93264),c=a.n(s),o=a(30893),i=a(86896),m=function(e){var t=e.recLvl,a=(e.isCompact,(0,i.Z)()),r=function(e,t,a){return c().createElement(n.Label,{color:a,isCompact:!0},"".concat(e," - ").concat(t,"%"))};return t>=80?r(a.formatMessage(o.Z.high),t,"red"):t<80&&t>=50?r(a.formatMessage(o.Z.medium),t,"orange"):r(a.formatMessage(o.Z.low),t,"blue")};m.propTypes={props:l().array},m.defaultProps={isCompact:!0};const u=m},79364:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>J});var n=a(70885),r=a(4942),l=a(50693),s=a(16475),c=a(89376),o=a(39173),i=a(93264),m=a.n(i),u=a(32203),f=a(70),d=a(62394),p=a(32576),E=a(3673),g=a(2370),b=a(26383),h=a(39727),v=a(72575),y=a(47265),Z=a(69897),w=a(8135),_=a(30893),k=a(28186),N=a(86896),P=function(e){var t,a,n=(0,N.Z)(),r=e.impacted_systems_count,c=e.incident_count,o=e.categories,i=e.critical_risk_count,P=e.high_risk_count,S=e.medium_risk_count,M=e.low_risk_count;return m().createElement(u.Z,{isFlat:!0,isPlain:!0,className:"adv-c-card-pathway adv__background--global-100 pf-u-h-100"},m().createElement(f.l,null,n.formatMessage(_.Z.totalRiskPathway)),m().createElement(d.e,{className:"body"},m().createElement(l.r,{hasGutter:!0},m().createElement(s.P,{span:6},m().createElement("div",null,m().createElement(p.k,{ariaDesc:"Total risk of recommendations",ariaTitle:"Total risk of recommendations",containerComponent:m().createElement(E.H,{labels:function(e){var t=e.datum;return"".concat(t.name,": ").concat(t.y)},constrainToVisibleArea:!0}),domainPadding:{x:[20,15]},height:150,width:300,padding:{bottom:30,left:45,right:10,top:10}},m().createElement(g.C,null),m().createElement(g.C,{dependentAxis:!0,showGrid:!0}),m().createElement(b.G,null,m().createElement(h.B,{barWidth:16,style:{data:{fill:function(e){return e.datum.fill}}},data:[{name:"Critical",x:"Critical",y:i,fill:w.Z.value},{name:"Important",x:"Important",y:P,fill:Z.Z.value},{name:"Moderate",x:"Moderate",y:S,fill:y.Z.value},{name:"Low",x:"Low",y:M,fill:v.Z.value}]}))))),m().createElement(s.P,{span:6,className:"pf-u-font-size-sm"},n.formatMessage(_.Z.thisPathway,{category:(t=o,t.length>1?o.map((function(e){return e.name})).join(", "):null===(a=t[0])||void 0===a?void 0:a.name),systems:r,incidents:c,strong:function(e){return(0,k.fK)(e)}})))))},S=a(90693),M=a(59303),O=a(52202),x=a(24130),C=function(e){var t=e.name,a=e.reboot_required,n=e.resolution_risk,r=e.recommendation_level,l=(0,N.Z)();return m().createElement(u.Z,{isFlat:!0,isPlain:!0,className:"adv-c-card-pathway adv__background--global-100 pf-u-h-100 flex-row"},m().createElement("div",{className:"flex-coloumn"},m().createElement(f.l,null,l.formatMessage(_.Z.resolution)),m().createElement("div",{className:"flex-row "},m().createElement("div",{className:"halfWidth"},m().createElement("p",{className:"pf-u-font-weight-bold pf-u-font-size-sm pf-u-pl-lg"},l.formatMessage(_.Z.remediation)),m().createElement("p",{className:"pf-u-font-size-sm pf-u-pl-lg"},t)),m().createElement(d.e,{className:" pf-u-pl-xl halfWidth"},m().createElement("p",{className:"pf-u-font-weight-bold pf-u-font-size-sm"},l.formatMessage(_.Z.riskOfChange)),m().createElement(S.Z,{text:M.MS[n.risk],value:n.risk,hideIcon:!0,isCompact:!0}))),m().createElement(d.e,{className:"body pf-u-font-size-sm"},l.formatMessage(_.Z.staticRemediationDesc)),m().createElement(d.e,{className:"body"},(0,O.k)(a))),m().createElement("div",{className:"pathwayRight pf-u-p-lg "},m().createElement("p",{className:"pf-u-font-weight-bold pf-u-font-size-sm"},l.formatMessage(_.Z.reclvl)),m().createElement("div",null,m().createElement(x.Z,{recLvl:r}))))},T=a(35262),j=a(28883),D=a(29873),z=a(28672),I=a(28216),q=a(75331),L=a(52837),F=a(62410),K=a(84348),A=a(46891),G=a(87516),R=a(8377),V=a(75662),W=a(97109);function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Q=(0,i.lazy)((function(){return Promise.all([a.e(5028),a.e(9241),a.e(3837),a.e(384)]).then(a.bind(a,82661))}));const J=function(){var e=(0,N.Z)(),t=(0,V.useParams)().id,a=(0,I.useDispatch)(),r=(0,I.useSelector)((function(e){return e.filters.selectedTags})),u=(0,I.useSelector)((function(e){return e.filters.workloads})),f=(0,I.useSelector)((function(e){return e.filters.SID})),d=(0,I.useSelector)((function(e){return e.filters.recState})),p=(0,I.useSelector)((function(e){return e.filters.sysState})),E={};(null==r?void 0:r.length)&&(E=H(H({},E),{tags:r.join(",")})),u&&(E=H(H({},E),(0,W.s0)(u,f)));var g=(0,R.fQ)(H(H({},E),{},{slug:t})),b=g.data,h=void 0===b?{}:b,v=g.isFetching,y=(0,V.useLocation)().pathname,Z=(0,i.useState)(y.includes("/recommendations/pathways/systems/")?1:0),w=(0,n.Z)(Z,2),k=w[0],S=w[1];return(0,i.useEffect)((function(){var e=H({},d),n=H({},p),r={pathway:t,limit:20,offset:0};return a((0,z.hb)(H(H({},r),{},{sort:"category",impacting:!0}))),a((0,z.pu)(H({},r))),y.includes("/recommendations/pathways/systems/")&&setTimeout((function(){var e;(e="#tablesContainer",new Promise((function(t){if(document.querySelector(e))return t(document.querySelector(e));var a=new MutationObserver((function(){document.querySelector(e)&&(t(document.querySelector(e)),a.disconnect())}))}))).then((function(){document.getElementById("tablesContainer").scrollIntoView({behavior:"smooth"})}))}),5e3),function(){a((0,z.hb)(e)),a((0,z.pu)(n))}}),[]),m().createElement(m().Fragment,null,v?m().createElement(A.Z,null):m().createElement(m().Fragment,null,m().createElement(c.Z,{className:"adv-c-page__header"},m().createElement(q.Z,{ouiaId:"override",current:h.name||""}),m().createElement(o.Z,{title:m().createElement(m().Fragment,null,h.name,h.has_incident&&m().createElement(G.Z,{rule:{tags:"incident"}}))}),m().createElement("p",{className:"pf-u-mb-lg"},e.formatMessage(_.Z.rulesDetailsModifieddate,{date:m().createElement(F.Z,{date:new Date(h.publish_date),type:"onlyDate"})}),m().createElement("span",{className:"pf-u-pl-sm"},m().createElement(L.Z,{labelList:h.categories}))),m().createElement("p",{className:"pf-u-mb-lg"},h.description)),m().createElement("section",{className:"pf-u-pb-0"},m().createElement(l.r,{hasGutter:!0},m().createElement(s.P,{sm:12,md:6},m().createElement(P,h)),m().createElement(s.P,{sm:12,md:6},m().createElement(C,h))))),v&&m().createElement(A.Z,null),m().createElement("section",null,m().createElement(T.m,{className:"adv__background--global-100",activeKey:k,onSelect:function(e,t){return S(t)}},m().createElement(j.O,{eventKey:0,title:m().createElement(D.T,null,e.formatMessage(_.Z.recommendations))},v?m().createElement(A.Z,null):m().createElement(i.Suspense,{fallback:m().createElement(A.Z,null)},m().createElement(Q,null))),m().createElement(j.O,{eventKey:1,title:m().createElement(D.T,null,e.formatMessage(_.Z.systems))},v?m().createElement(A.Z,null):m().createElement(i.Suspense,{fallback:m().createElement(A.Z,null)},m().createElement(K.Z,{tableProps:{canSelectAll:!1,isStickyHeader:!0},pathway:h,selectedTags:r,workloads:u,SID:f,showTags:!0}))))))}},10108:()=>{},98379:()=>{},56024:()=>{},43390:()=>{},72816:()=>{}}]);
//# sourceMappingURL=../sourcemaps/Details-Pathways.f529aaca87d0370165fea68c2a50b436.js.map