"use strict";(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[177],{85881:(e,t,n)=>{n.d(t,{GB:()=>L,LS:()=>T,GV:()=>C});var r=n(32203),a=n(62394),c=n(49734),l=n(70),s=n(32576),o=n(3673),i=n(2370),u=n(26383),m=n(39727),f=n(50693),d=n(16475),p=n(56336),b=n(11306),g=n(66584),y=n(6497),E=n(4874),v=n(59303),h=n(75418),Z=n.n(h),O=n(52202),w=n(24130),k=n(87516),j=n(34348),P=n(72575),_=n(47265),M=n(69897),S=n(8135),D=n(30893),N=n(28186),x=n(86896),L=function(e){var t=(0,x.Z)(),n=e.name,l=e.categories,s=e.impacted_systems_count,o=e.description,i=e.has_incident,u=e.reboot_required,m=e.slug;return Z().createElement(r.Z,{isFlat:!0,isPlain:!0,className:"adv-c-card-pathway adv__background--global-100"},Z().createElement(a.e,{className:"body"},Z().createElement(p.Text,{className:"pf-u-pb-sm pf-u-font-weight-bold"},n),Z().createElement(g.Z,{key:n,labelList:l})," ",Z().createElement(E.Link,{to:"/recommendations/pathways/".concat(m)},t.formatMessage(D.Z.topicCardSystemsaffected,{systems:s}))),Z().createElement(a.e,{className:"body"},o),Z().createElement(a.e,{className:"body"},i&&Z().createElement(k.Z,{rule:{tags:"incident"}})," ",(0,O.k)(u)),Z().createElement(c.e,{className:"footer"},Z().createElement(E.Link,{to:"/recommendations/pathways/".concat(m)},"".concat(t.formatMessage(D.Z.viewPathway)," "),Z().createElement(b.ZP,null))))},T=function(e){var t,n=(0,x.Z)(),c=e.impacted_systems_count,p=e.incident_count,b=e.categories,g=e.critical_risk_count,y=e.high_risk_count,E=e.medium_risk_count,v=e.low_risk_count;return Z().createElement(r.Z,{isFlat:!0,isPlain:!0,className:"adv-c-card-pathway adv__background--global-100"},Z().createElement(l.l,null,n.formatMessage(D.Z.totalRiskPathway)),Z().createElement(a.e,{className:"body"},Z().createElement(f.r,null,Z().createElement(d.P,{span:6},Z().createElement("div",null,Z().createElement(s.k,{ariaDesc:"Total risk of recommendations",ariaTitle:"Total risk of recommendations",containerComponent:Z().createElement(o.H,{labels:function(e){var t=e.datum;return"".concat(t.name,": ").concat(t.y)},constrainToVisibleArea:!0}),height:300,width:300,padding:{bottom:30,left:35,right:20,top:10}},Z().createElement(i.C,null),Z().createElement(i.C,{dependentAxis:!0,showGrid:!0}),Z().createElement(u.G,null,Z().createElement(m.B,{style:{data:{fill:function(e){return e.datum.fill}}},data:[{name:"Critical",x:"Critical",y:g,fill:S.Z.value},{name:"Important",x:"Important",y,fill:M.Z.value},{name:"Moderate",x:"Moderate",y:E,fill:_.Z.value},{name:"Low",x:"Low",y:v,fill:P.Z.value}]}))))),Z().createElement(d.P,{span:6},n.formatMessage(D.Z.thisPathway,{category:(t=b,t.length>1?b.map((function(e){return e.name})).join(", "):t.name),systems:c,incidents:p,strong:function(e){return(0,N.f)(e)}})))))},C=function(e){var t=(0,x.Z)(),n=e.reboot_required,c=e.name,s=e.resolution_risk;return Z().createElement(r.Z,{isFlat:!0,isPlain:!0,className:"adv-c-card-pathway adv__background--global-100"},Z().createElement(l.l,null,t.formatMessage(D.Z.resolution)),Z().createElement(f.r,null,Z().createElement(d.P,{span:7},Z().createElement(a.e,{className:"body"},Z().createElement(y.Z,{text:v.MS[s.risk],value:s.risk,hideIcon:!0})),Z().createElement(a.e,{className:"body"},Z().createElement(j.Dx,{headingLevel:"h5",size:"md"},c)),Z().createElement(a.e,{className:"body"},t.formatMessage(D.Z.staticRemediationDesc)),Z().createElement(a.e,{className:"body"},(0,O.k)(n))),Z().createElement(d.P,{span:5},Z().createElement(l.l,null,t.formatMessage(D.Z.reclvl)),Z().createElement(w.Z,e))))}},58921:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(4942),a=n(15861),c=n(87757),l=n.n(c),s=n(53446),o=n(35240),i=n(59303),u=n(71094),m=n(97109);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e){var t={date:(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc"};return"Insights-Advisor_".concat(e,"--").concat(t.date)};const b=function(){var e=(0,a.Z)(l().mark((function e(t,n,r,a,c,f,b){var g,y,E;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g=(null==a?void 0:a.length)&&{tags:a},c&&(g=d(d({},g),(0,m.s0)(c,f))),b((0,s.addNotification)(i.LH.pending)),e.next=6,(0,u.dX)("".concat(i._n,"/export/").concat(t,".").concat("json"===n?"json":"csv"),{},d(d({},r),g)).then((function(e){return b((0,s.addNotification)(i.LH.success)),e})).catch((function(){return b((0,s.addNotification)(i.LH.error))}));case 6:y=e.sent.data,E="json"===n?JSON.stringify(y):y,(0,o.Sv)(E,p(t),n),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),"".concat(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n,r,a,c,l,s){return e.apply(this,arguments)}}()},66584:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(63732),a=n(15914),c=n(42293),l=n(26407),s=n(99332),o=n(69507),i=n(45697),u=n.n(i),m=n(75418),f=n.n(m),d=n(30893),p=n(86896),b=function(e){var t,n=e.labelList,i=(0,p.Z)(),u=(t=n.map((function(e){return e.id})),Object.entries(t.reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),{})).sort((function(e,t){return t[1]-e[1]}))),m=function(e,t){return f().createElement(c.Label,{icon:e,variant:"outline",color:"blue"},t)};return f().createElement(l.e,{numLabels:1},u.map((function(e){return function(e){return 1===e?m(f().createElement(r.ZP,null),i.formatMessage(d.Z.availability)):2===e?m(f().createElement(s.ZP,null),i.formatMessage(d.Z.security)):3===e?m(f().createElement(a.ZP,null),i.formatMessage(d.Z.stability)):4===e?m(f().createElement(o.ZP,null),i.formatMessage(d.Z.performance)):void 0}(Number(e[0]))})))};b.propTypes={labelList:u().array};const g=b},24130:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(42293),a=n(45697),c=n.n(a),l=n(75418),s=n.n(l),o=n(30893),i=n(86896),u=function(e){var t=(0,i.Z)(),n=e.recommendation_level,a=function(e,t,n){return s().createElement(r.Label,{color:n},"".concat(e," - ").concat(t,"%"))};return n>=80?a(t.formatMessage(o.Z.high),n,"red"):n<80&&n>=50?a(t.formatMessage(o.Z.medium),n,"orange"):a(t.formatMessage(o.Z.low),n,"blue")};u.propTypes={props:c().array};const m=u},44788:(e,t,n)=>{n.d(t,{Z:()=>M});var r=n(4942),a=n(15861),c=n(70885),l=n(87757),s=n.n(l),o=n(75418),i=n.n(o),u=n(59303),m=n(6202),f=n(32752),d=n(4853),p=n(23811),b=n(78826),g=n(71094),y=n(45697),E=n.n(y),v=n(12282),h=n(71355),Z=n(30893),O=n(28216),w=n(86896),k=n(77647);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){var t=e.handleModalToggle,n=e.isModalOpen,r=e.host,l=e.hosts,y=e.rule,E=e.afterFn,j=(0,w.Z)(),_=(0,O.useDispatch)(),M=function(e){return _((0,h.wN)(e))},S=(0,o.useState)(""),D=(0,c.Z)(S,2),N=D[0],x=D[1],L=(0,o.useState)(void 0!==r||l.length>0),T=(0,c.Z)(L,2),C=T[0],I=T[1],F=(0,k.om)(),R=(0,c.Z)(F,2),G=R[0],H=(R[1].isLoading,function(){var e=(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={systems:l,justification:N},e.prev=1,e.next=4,(0,g.SO)("".concat(u._n,"/rule/").concat(y.rule_id,"/ack_hosts/"),{},t);case 4:!C&&M({variant:"success",dismissable:!0,timeout:!0,title:j.formatMessage(Z.Z.recSuccessfullyDisabled)}),E&&E(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),M({variant:"danger",dismissable:!0,title:j.formatMessage(Z.Z.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}()),B=function(){var e=(0,a.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"!==y.rule_status||l.length){e.next=15;break}return n=C?{type:"HOST",options:{rule:y.rule_id,system_uuid:r.id,justification:N}}:{type:"RULE",options:P({rule_id:y.rule_id},N&&{justification:N})},e.prev=2,e.next=5,G(n).unwrap();case 5:M({variant:"success",timeout:!0,dismissable:!0,title:j.formatMessage(Z.Z.recSuccessfullyDisabled)}),x(""),E&&E(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),M({variant:"danger",dismissable:!0,title:j.formatMessage(Z.Z.error),description:"".concat(e.t0)});case 13:e.next=16;break;case 15:H();case 16:t(!1);case 17:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return i().createElement(b.u_,{variant:"small",title:j.formatMessage(Z.Z.disableRule),isOpen:n,onClose:function(){t(!1),x("")},actions:[i().createElement(m.Button,{key:"confirm",variant:"primary",onClick:function(){return B()},ouiaId:"confirm"},j.formatMessage(Z.Z.save)),i().createElement(m.Button,{key:"cancel",variant:"link",onClick:function(){t(!1),x("")},ouiaId:"cancel"},j.formatMessage(Z.Z.cancel))]},j.formatMessage(Z.Z.disableRuleBody),i().createElement(d.l,null,i().createElement(p.c,{fieldId:"blank-form"}),(void 0!==r||l.length>0)&&i().createElement(p.c,{fieldId:"disable-rule-one-system"},i().createElement(f.X,{isChecked:C,onChange:function(){I(!C)},label:l.length?j.formatMessage(Z.Z.disableRuleForSystems):j.formatMessage(Z.Z.disableRuleSingleSystem),id:"disable-rule-one-system",name:"disable-rule-one-system"})),i().createElement(p.c,{label:j.formatMessage(Z.Z.justificationNote),fieldId:"disable-rule-justification"},i().createElement(v.oi,{type:"text",id:"disable-rule-justification","aria-describedby":"disable-rule-justification",value:N,onChange:function(e){return x(e)},onKeyDown:function(e){return"Enter"===e.key&&(e.preventDefault(),B())}}))))};_.propTypes={isModalOpen:E().bool,host:E().object,handleModalToggle:E().func,rule:E().object,afterFn:E().func,hosts:E().array},_.defaultProps={isModalOpen:!1,handleModalToggle:function(){},system:void 0,rule:{},afterFn:function(){},host:void 0,hosts:[]};const M=_},89578:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var r=n(70885),a=n(4942),c=n(50693),l=n(16475),s=n(80123),o=n(39173),i=n(75418),u=n.n(i),m=n(85881),f=n(90832),d=n(48099),p=n(29873),b=n(28672),g=n(28216),y=n(75331),E=n(66584),v=n(62410),h=n(40771),Z=n(46891),O=n(14748),w=n(87516),k=n(30893),j=n(8377),P=n(86896),_=n(4874),M=n(97109);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=(0,i.lazy)((function(){return Promise.all([n.e(692),n.e(659),n.e(48),n.e(160),n.e(869),n.e(661),n.e(384)]).then(n.bind(n,82661))}));const x=function(){var e=(0,P.Z)(),t=(0,_.useParams)().id,n=(0,g.useDispatch)(),a=(0,g.useSelector)((function(e){return e.filters.selectedTags})),S=(0,g.useSelector)((function(e){return e.filters.workloads})),x=(0,g.useSelector)((function(e){return e.filters.SID})),L=(0,g.useSelector)((function(e){return e.filters.recState})),T=(0,g.useSelector)((function(e){return e.filters.sysState})),C={};(null==a?void 0:a.length)&&(C=D(D({},C),{tags:a.join(",")})),S&&(C=D(D({},C),(0,M.s0)(S,x)));var I=(0,j.fQ)(D(D({},C),{},{slug:t})),F=I.data,R=void 0===F?{}:F,G=I.isFetching,H=(0,i.useState)(0),B=(0,r.Z)(H,2),A=B[0],K=B[1];return(0,i.useEffect)((function(){var e=D({},L),r=D({},T),a={pathway:t,limit:20,offset:0};return n((0,b.hb)(D(D({},a),{},{sort:"category",impacting:!0}))),n((0,b.pu)(D({},a))),function(){n((0,b.hb)(e)),n((0,b.pu)(r))}}),[]),u().createElement(u().Fragment,null,G?u().createElement(Z.Z,null):u().createElement(u().Fragment,null,u().createElement(s.Z,{className:"adv-c-page__header"},u().createElement(y.Z,{ouiaId:"override",current:R.description||""}),u().createElement(E.Z,{labelList:R.categories}),u().createElement(o.Z,{title:u().createElement(u().Fragment,null,R.description,R.has_incident&&u().createElement(w.Z,{rule:{tags:"incident"}}))}),u().createElement("p",null,e.formatMessage(k.Z.rulesDetailsModifieddate,{date:u().createElement(v.Z,{date:new Date(R.publish_date),type:"onlyDate"})}))),u().createElement(O.Z,{className:"pf-u-pb-0"},u().createElement(c.r,{hasGutter:!0},u().createElement(l.P,{sm:12,md:6},u().createElement(m.LS,R)),u().createElement(l.P,{sm:12,md:6},u().createElement(m.GV,R))))),G&&u().createElement(Z.Z,null),u().createElement(O.Z,null,u().createElement(f.m,{className:"adv__background--global-100",mountOnEnter:!0,unmountOnExit:!0,activeKey:A,onSelect:function(e,t){return K(t)}},u().createElement(d.O,{eventKey:0,title:u().createElement(p.T,null,e.formatMessage(k.Z.recommendations))},G?u().createElement(Z.Z,null):u().createElement(i.Suspense,{fallback:u().createElement(Z.Z,null)},u().createElement(N,null))),u().createElement(d.O,{eventKey:1,title:u().createElement(p.T,null,e.formatMessage(k.Z.systems))},G?u().createElement(Z.Z,null):u().createElement(i.Suspense,{fallback:u().createElement(Z.Z,null)},u().createElement(h.Z,{tableProps:{canSelectAll:!1,isStickyHeader:!0},pathway:R,selectedTags:a,workloads:S,SID:x,showTags:!0}))))))}}}]);