(self.webpackChunkadvisor=self.webpackChunkadvisor||[]).push([[1177],{75331:(e,t,a)=>{"use strict";a.d(t,{Z:()=>b});var n=a(70885),r=a(93264),s=a.n(r),l=a(64029),c=a(32835),o=a(45697),i=a.n(o),u=a(30893),m=a(75546),f=a(86896),d=a(62012),p=a(92397),g=function(e){var t,a=e.current,o=(0,f.Z)(),i=null===(t=(0,d.useLocation)().pathname)||void 0===t?void 0:t.split("/"),g=(0,r.useState)([]),b=(0,n.Z)(g,2),E=b[0],v=b[1],y=!("recommendations"===i[1]&&4===i.length)||"pathways"===i[2],h=(0,m.m1)({ruleId:i[2]},{skip:y}),Z=h.data,M=h.isFetching;return(0,r.useEffect)((function(){var e;(e=[]).push({title:"".concat(o.formatMessage(u.Z.insightsHeader)," ").concat(i[3]),navigate:"/".concat(i[3])}),y||e.push({title:null==Z?void 0:Z.description,navigate:"/".concat(i[1],"/").concat(i[2])}),"pathways"===i[2]&&(e=[{title:"Advisor pathways",navigate:"/recommendations/pathways"}]),v(e)}),[Z]),s().createElement(s().Fragment,null,!M&&E.length>0?s().createElement(l.a,{ouiaId:"detail"},E.map((function(e,t){return s().createElement(c.g,{key:t},s().createElement(p.Z,{to:e.navigate},e.title))})),s().createElement(c.g,{isActive:!0},a)):o.formatMessage(u.Z.loading))};g.propTypes={current:i().string};const b=g},52202:(e,t,a)=>{"use strict";a.d(t,{b:()=>y,k:()=>v});var n=a(68774),r=a(68340),s=a(75824),l=a(82644),c=a(29558),o=a(91290),i=a(26076),u=a(93264),m=a.n(u),f=a(70546),d=a(30893),p=a(28186),g=(0,l.Sn)(),b=navigator.language.slice(0,2),E=(0,c.d)({locale:b},g),v=function(e){return m().createElement("span",{className:"adv-system-reboot-message"},m().createElement(i.ZP,{className:e?"adv-c-icon-reboot-required":"adv-c-icon-no-reboot-required"}),m().createElement(n.D,{className:"adv-c-text-system-reboot-message pf-u-font-size-sm"},m().createElement(r.x,{component:r.q.p},E.formatMessage(d.Z.systemReboot,{strong:function(e){return(0,p.fK)(e)},status:e?E.formatMessage(d.Z.is):E.formatMessage(d.Z.isNot)}))))},y=function(e){return m().createElement(s.u,{key:e,position:s.D.right,content:m().createElement("div",null,e)},m().createElement("span",{"aria-label":"Action"},m().createElement(o.ZP,{color:f.wb.value})))}},52837:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v});var n=a(63732),r=a(15914),s=a(21947),l=a(99332),c=a(69507),o=a(45697),i=a.n(o),u=a(93264),m=a.n(u),f=a(30893),d=a(86896),p=a(69174),g=function(e){var t=e.icon,a=e.text;return m().createElement(p._,{icon:t,variant:"outline",color:"blue",isCompact:!0},a)};g.propTypes={icon:i().object,text:i().bool};const b=g;var E=function(e){var t,a=e.labelList,o=(0,d.Z)(),i=(t=a.map((function(e){return e.id})),Object.entries(t.reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),{})).sort((function(e,t){return t[1]-e[1]})));return m().createElement(s.e,{numLabels:1,isCompact:!0},i.map((function(e){return function(e){return[m().createElement(b,{icon:m().createElement(n.ZP,null),text:o.formatMessage(f.Z.availability)}),m().createElement(b,{icon:m().createElement(l.ZP,null),text:o.formatMessage(f.Z.security)}),m().createElement(b,{icon:m().createElement(r.ZP,null),text:o.formatMessage(f.Z.stability)}),m().createElement(b,{icon:m().createElement(c.ZP,null),text:o.formatMessage(f.Z.performance)})][e]}(Number(e[0]-1))})))};E.propTypes={labelList:i().array,isCompact:i().bool},E.defaultProps={isCompact:!0};const v=E},44280:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(69174),r=a(45697),s=a.n(r),l=a(93264),c=a.n(l),o=a(30893),i=a(86896),u=function(e){var t=e.recLvl,a=(e.isCompact,(0,i.Z)()),r=function(e,t,a){return c().createElement(n._,{color:a,isCompact:!0},"".concat(e," - ").concat(t,"%"))};return t>=80?r(a.formatMessage(o.Z.high),t,"red"):t<80&&t>=50?r(a.formatMessage(o.Z.medium),t,"orange"):r(a.formatMessage(o.Z.low),t,"blue")};u.propTypes={props:s().array},u.defaultProps={isCompact:!0};const m=u},87516:(e,t,a)=>{"use strict";a.d(t,{Z:()=>f});var n=a(75824),r=a(69174),s=a(45697),l=a.n(s),c=a(93264),o=a.n(c),i=a(30893),u=a(86896),m=function(e){var t,a=e.rule,s=e.isCompact,l=e.noMargin,c=(0,u.Z)();return o().createElement(o().Fragment,null,-1!==(null==a||null===(t=a.tags)||void 0===t?void 0:t.search("incident"))&&o().createElement(n.u,{content:c.formatMessage(i.Z.incidentTooltip),position:n.D.right},o().createElement(r._,{color:"red",className:l?null:"adv-c-label-incident",isCompact:s},c.formatMessage(i.Z.incident))),"disabled"===(null==a?void 0:a.rule_status)&&o().createElement(n.u,{content:c.formatMessage(i.Z.ruleIsDisabledTooltip),position:n.D.right},o().createElement(r._,{color:"gray",isCompact:s},c.formatMessage(i.Z.disabled))),"rhdisabled"===(null==a?void 0:a.rule_status)&&o().createElement(n.u,{content:c.formatMessage(i.Z.ruleIsDisabledTooltip),position:n.D.right},o().createElement(r._,{color:"gray",isCompact:s},c.formatMessage(i.Z.redhatDisabled))))};m.propTypes={rule:l().object,isCompact:l().bool,noMargin:l().bool},m.defaultProps={isCompact:!0};const f=m},46891:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(32203),r=a(62394),s=a(24561),l=a(93264),c=a.n(l);const o=function(){return c().createElement(n.Z,null,c().createElement(r.e,null,c().createElement(s.aV,null)))}},44788:(e,t,a)=>{"use strict";a.d(t,{Z:()=>j});var n=a(4942),r=a(15861),s=a(70885),l=a(87757),c=a.n(l),o=a(93264),i=a.n(o),u=a(59303),m=a(47173),f=a(93149),d=a(83115),p=a(59775),g=a(80236),b=a(71094),E=a(45697),v=a.n(E),y=a(92607),h=a(71355),Z=a(30893),M=a(28216),w=a(86896),k=a(77647);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _=function(e){var t=e.handleModalToggle,a=e.isModalOpen,n=e.host,l=e.hosts,E=e.rule,v=e.afterFn,O=(0,w.Z)(),_=(0,M.useDispatch)(),j=function(e){return _((0,h.addNotification)(e))},S=(0,o.useState)(""),x=(0,s.Z)(S,2),C=x[0],D=x[1],N=(0,o.useState)(void 0!==n||l.length>0),T=(0,s.Z)(N,2),I=T[0],F=T[1],L=(0,k.om)(),z=(0,s.Z)(L,1)[0],R=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={systems:l,justification:C},e.prev=1,e.next=4,(0,b.SO)("".concat(u._n,"/rule/").concat(E.rule_id,"/ack_hosts/"),{},t);case 4:!I&&j({variant:"success",dismissable:!0,timeout:!0,title:O.formatMessage(Z.Z.recSuccessfullyDisabled)}),v&&v(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),j({variant:"danger",dismissable:!0,title:O.formatMessage(Z.Z.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=(0,r.Z)(c().mark((function e(){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"!==E.rule_status||l.length){e.next=15;break}return a=I?{type:"HOST",options:{rule:E.rule_id,system_uuid:n.id,justification:C}}:{type:"RULE",options:P({rule_id:E.rule_id},C&&{justification:C})},e.prev=2,e.next=5,z(a).unwrap();case 5:j({variant:"success",timeout:!0,dismissable:!0,title:O.formatMessage(Z.Z.recSuccessfullyDisabled)}),D(""),v&&v(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),j({variant:"danger",dismissable:!0,title:O.formatMessage(Z.Z.error),description:"".concat(e.t0)});case 13:e.next=16;break;case 15:R();case 16:t(!1);case 17:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return i().createElement(g.u,{variant:"small",title:O.formatMessage(Z.Z.disableRule),isOpen:a,onClose:function(){t(!1),D("")},actions:[i().createElement(m.zx,{key:"confirm",variant:"primary",onClick:function(){return q()},ouiaId:"confirm"},O.formatMessage(Z.Z.save)),i().createElement(m.zx,{key:"cancel",variant:"link",onClick:function(){t(!1),D("")},ouiaId:"cancel"},O.formatMessage(Z.Z.cancel))]},O.formatMessage(Z.Z.disableRuleBody),i().createElement(d.l,null,i().createElement(p.c,{fieldId:"blank-form"}),(void 0!==n||l.length>0)&&i().createElement(p.c,{fieldId:"disable-rule-one-system"},i().createElement(f.X,{isChecked:I,onChange:function(){F(!I)},label:l.length?O.formatMessage(Z.Z.disableRuleForSystems):O.formatMessage(Z.Z.disableRuleSingleSystem),id:"disable-rule-one-system",name:"disable-rule-one-system"})),i().createElement(p.c,{label:O.formatMessage(Z.Z.justificationNote),fieldId:"disable-rule-justification"},i().createElement(y.oi,{type:"text",id:"disable-rule-justification","aria-describedby":"disable-rule-justification",value:C,onChange:function(e){return D(e)},onKeyDown:function(e){return"Enter"===e.key&&(e.preventDefault(),q())}}))))};_.propTypes={isModalOpen:v().bool,host:v().object,handleModalToggle:v().func,rule:v().object,afterFn:v().func,hosts:v().array},_.defaultProps={isModalOpen:!1,handleModalToggle:function(){},system:void 0,rule:{},afterFn:function(){},host:void 0,hosts:[]};const j=_},79364:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>X});var n=a(70885),r=a(4942),s=a(50693),l=a(16475),c=a(89376),o=a(39173),i=a(93264),u=a.n(i),m=a(32203),f=a(70),d=a(62394),p=a(30157),g=a(21238),b=a(2370),E=a(26383),v=a(9940),y=a(72575),h=a(47265),Z=a(69897),M=a(8135),w=a(30893),k=a(28186),O=a(86896),P=function(e){var t,a,n=(0,O.Z)(),r=e.impacted_systems_count,c=e.incident_count,o=e.categories,i=e.critical_risk_count,P=e.high_risk_count,_=e.medium_risk_count,j=e.low_risk_count;return u().createElement(m.Z,{isFlat:!0,isPlain:!0,className:"adv-c-card-pathway adv__background--global-100 pf-u-h-100"},u().createElement(f.l,null,n.formatMessage(w.Z.totalRiskPathway)),u().createElement(d.e,{className:"body"},u().createElement(s.r,{hasGutter:!0},u().createElement(l.P,{span:6},u().createElement("div",null,u().createElement(p.k,{ariaDesc:"Total risk of recommendations",ariaTitle:"Total risk of recommendations",containerComponent:u().createElement(g.H,{labels:function(e){var t=e.datum;return"".concat(t.name,": ").concat(t.y)},constrainToVisibleArea:!0}),domainPadding:{x:[20,15]},height:150,width:300,padding:{bottom:30,left:45,right:10,top:10}},u().createElement(b.C,null),u().createElement(b.C,{dependentAxis:!0,showGrid:!0}),u().createElement(E.G,null,u().createElement(v.B,{barWidth:16,style:{data:{fill:function(e){return e.datum.fill}}},data:[{name:"Critical",x:"Critical",y:i,fill:M.Z.value},{name:"Important",x:"Important",y:P,fill:Z.Z.value},{name:"Moderate",x:"Moderate",y:_,fill:h.Z.value},{name:"Low",x:"Low",y:j,fill:y.Z.value}]}))))),u().createElement(l.P,{span:6,className:"pf-u-font-size-sm"},n.formatMessage(w.Z.thisPathway,{category:(t=o,t.length>1?o.map((function(e){return e.name})).join(", "):null===(a=t[0])||void 0===a?void 0:a.name),systems:r,incidents:c,strong:function(e){return(0,k.fK)(e)}})))))},_=a(90693),j=a(59303),S=a(52202),x=a(44280),C=function(e){var t=e.name,a=e.reboot_required,n=e.resolution_risk,r=e.recommendation_level,s=(0,O.Z)();return u().createElement(m.Z,{isFlat:!0,isPlain:!0,className:"adv-c-card-pathway adv__background--global-100 pf-u-h-100 flex-row"},u().createElement("div",{className:"flex-coloumn"},u().createElement(f.l,null,s.formatMessage(w.Z.resolution)),u().createElement("div",{className:"flex-row "},u().createElement("div",{className:"halfWidth"},u().createElement("p",{className:"pf-u-font-weight-bold pf-u-font-size-sm pf-u-pl-lg"},s.formatMessage(w.Z.remediation)),u().createElement("p",{className:"pf-u-font-size-sm pf-u-pl-lg"},t)),u().createElement(d.e,{className:" pf-u-pl-xl halfWidth"},u().createElement("p",{className:"pf-u-font-weight-bold pf-u-font-size-sm"},s.formatMessage(w.Z.riskOfChange)),u().createElement(_.Z,{text:j.MS[n.risk],value:n.risk,hideIcon:!0,isCompact:!0}))),u().createElement(d.e,{className:"body pf-u-font-size-sm"},s.formatMessage(w.Z.staticRemediationDesc)),u().createElement(d.e,{className:"body"},(0,S.k)(a))),u().createElement("div",{className:"pathwayRight pf-u-p-lg "},u().createElement("p",{className:"pf-u-font-weight-bold pf-u-font-size-sm"},s.formatMessage(w.Z.reclvl)),u().createElement("div",null,u().createElement(x.Z,{recLvl:r}))))},D=a(35262),N=a(28883),T=a(29873),I=a(28672),F=a(28216),L=a(75331),z=a(52837),R=a(62410),q=a(84348),A=a(46891),K=a(87516),G=a(8377),H=a(62012),B=a(97109),V=a(55140);function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var U=(0,i.lazy)((function(){return Promise.all([a.e(7527),a.e(4854),a.e(7887),a.e(8764),a.e(7330),a.e(4739),a.e(6310),a.e(271),a.e(2788),a.e(384)]).then(a.bind(a,82661))}));const X=function(){var e=(0,O.Z)(),t=(0,H.useParams)().id,a=(0,F.useDispatch)(),r=(0,F.useSelector)((function(e){return e.filters.selectedTags})),m=(0,F.useSelector)((function(e){return e.filters.workloads})),f=(0,F.useSelector)((function(e){return e.filters.SID})),d=(0,F.useSelector)((function(e){return e.filters.recState})),p=(0,F.useSelector)((function(e){return e.filters.sysState})),g={};(null==r?void 0:r.length)&&(g=Q(Q({},g),{tags:r.join(",")})),m&&(g=Q(Q({},g),(0,B.s0)(m,f)));var b=(0,G.fQ)(Q(Q({},g),{},{slug:t})),E=b.data,v=void 0===E?{}:E,y=b.isFetching,h=(0,H.useLocation)().pathname,Z=(0,i.useState)(h.includes("/recommendations/pathways/systems/")?1:0),M=(0,n.Z)(Z,2),k=M[0],_=M[1],j=(0,V.Z)();(0,i.useEffect)((function(){v&&!y&&j.updateDocumentTitle(e.formatMessage(w.Z.documentTitle,{subnav:"".concat(v.name," - ").concat(w.Z.pathways.defaultMessage)}))}),[j,e,v,h,y]);return(0,i.useEffect)((function(){var e=Q({},d),n=Q({},p),r={pathway:t,limit:20,offset:0};return a((0,I.hb)(Q(Q({},r),{},{sort:"category",impacting:!0}))),a((0,I.pu)(Q({},r))),h.includes("/recommendations/pathways/systems/")&&setTimeout((function(){var e;(e="#tablesContainer",new Promise((function(t){if(document.querySelector(e))return t(document.querySelector(e));var a=new MutationObserver((function(){document.querySelector(e)&&(t(document.querySelector(e)),a.disconnect())}))}))).then((function(){document.getElementById("tablesContainer").scrollIntoView({behavior:"smooth"})}))}),5e3),function(){a((0,I.hb)(e)),a((0,I.pu)(n))}}),[]),u().createElement(u().Fragment,null,y?u().createElement(A.Z,null):u().createElement(u().Fragment,null,u().createElement(c.Z,{className:"adv-c-page__header"},u().createElement(L.Z,{ouiaId:"override",current:v.name||""}),u().createElement(o.Z,{title:u().createElement(u().Fragment,null,v.name,v.has_incident&&u().createElement(K.Z,{rule:{tags:"incident"}}))}),u().createElement("p",{className:"pf-u-mb-lg"},e.formatMessage(w.Z.rulesDetailsModifieddate,{date:u().createElement(R.Z,{date:new Date(v.publish_date),type:"onlyDate"})}),u().createElement("span",{className:"pf-u-pl-sm"},u().createElement(z.Z,{labelList:v.categories}))),u().createElement("p",{className:"pf-u-mb-lg"},v.description)),u().createElement("section",{className:"pf-u-p-lg"},u().createElement(s.r,{hasGutter:!0},u().createElement(l.P,{sm:12,md:6},u().createElement(P,v)),u().createElement(l.P,{sm:12,md:6},u().createElement(C,v))))),y&&u().createElement(A.Z,null),u().createElement("section",{className:"pf-u-px-lg pf-u-pb-lg"},u().createElement(D.m,{className:"adv__background--global-100",activeKey:k,onSelect:function(e,t){return _(t)}},u().createElement(N.O,{eventKey:0,title:u().createElement(T.T,null,e.formatMessage(w.Z.recommendations))},y?u().createElement(A.Z,null):u().createElement(i.Suspense,{fallback:u().createElement(A.Z,null)},u().createElement(U,null))),u().createElement(N.O,{eventKey:1,title:u().createElement(T.T,null,e.formatMessage(w.Z.systems))},y?u().createElement(A.Z,null):u().createElement(i.Suspense,{fallback:u().createElement(A.Z,null)},u().createElement(q.Z,{tableProps:{canSelectAll:!1,isStickyHeader:!0},pathway:v,selectedTags:r,workloads:m,SID:f,showTags:!0}))))))}},45467:()=>{},70347:()=>{},11452:()=>{},58392:()=>{},34946:()=>{},80598:()=>{},32857:()=>{},10108:()=>{},90479:()=>{},78752:()=>{},21064:()=>{},82014:()=>{},98379:()=>{},25238:()=>{},56024:()=>{},67761:()=>{},43390:()=>{},49854:()=>{},72816:()=>{},11177:()=>{}}]);
//# sourceMappingURL=../sourcemaps/Details-Pathways.4464652c889b8ce595f08428769d411a.js.map