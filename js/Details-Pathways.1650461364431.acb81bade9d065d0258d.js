(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[1177],{85991:(e,t,r)=>{"use strict";t.a=void 0;const n=r(70655),a=n.__importStar(r(93264)),c=n.__importDefault(r(74652)),o=r(38296),l=r(23053);t.a=e=>{var{children:r=null,className:s="","aria-label":i="Breadcrumb",ouiaId:u,ouiaSafe:m=!0}=e,d=n.__rest(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const f=l.useOUIAProps(t.a.displayName,u,m);return a.createElement("nav",Object.assign({},d,{"aria-label":i,className:o.css(c.default.breadcrumb,s)},f),a.createElement("ol",{className:c.default.breadcrumbList},a.Children.map(r,((e,t)=>{const r=t>0;return a.isValidElement(e)?a.cloneElement(e,{showDivider:r}):e}))))},t.a.displayName="Breadcrumb"},49489:(e,t,r)=>{"use strict";t.g=void 0;const n=r(70655),a=n.__importStar(r(93264)),c=n.__importDefault(r(95511)),o=n.__importDefault(r(74652)),l=r(38296);t.g=e=>{var{children:t=null,className:r="",to:s,isActive:i=!1,isDropdown:u=!1,showDivider:m,target:d,component:f="a",render:p}=e,b=n.__rest(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const y=f,g=i?"page":void 0,v=l.css(o.default.breadcrumbLink,i&&o.default.modifiers.current);return a.createElement("li",Object.assign({},b,{className:l.css(o.default.breadcrumbItem,r)}),m&&a.createElement("span",{className:o.default.breadcrumbItemDivider},a.createElement(c.default,null)),"button"===f&&a.createElement("button",{className:v,"aria-current":g,type:"button"},t),u&&a.createElement("span",{className:l.css(o.default.breadcrumbDropdown)},t),p&&p({className:v,ariaCurrent:g}),s&&!p&&a.createElement(y,{href:s,target:d,className:v,"aria-current":g},t),!s&&"button"!==f&&!u&&t)},t.g.displayName="BreadcrumbItem"},74652:(e,t,r)=>{"use strict";t.__esModule=!0,r(58392),t.default={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"}}},67265:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(93264),a=r.n(n);const c=function(e){var t=e.component,r=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["component"]);return(0,n.useEffect)((function(){console.error("Unable to load inventory component. Failed to load ".concat(t,"."),r)}),[]),a().createElement("div",null,a().createElement("h1",null,"Unable to load inventory component"),a().createElement("h2",null,"Failed to load ",t),a().createElement("code",null,"More info can be found in browser console output."))}},33739:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var n=r(93264),a=r.n(n),c=r(45697),o=r.n(c),l=r(54025),s=r(75662),i=r(28216),u=r(84669),m=r(67265),d=r(94184),f=r.n(d),p=function(){return(p=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},b=function(e){var t=(0,s.useHistory)(),r=(0,i.useStore)(),c=e.component;return a().createElement(c,{className:f()(e.className,"inventory")},a().createElement(n.Suspense,{fallback:e.fallback},a().createElement(l.ScalprumComponent,p({history:t,store:r,appName:"inventory",module:"./InventoryTable",scope:"inventory",ErrorComponent:a().createElement(m.Z,p({component:"InventoryDetailHead",history:t,store:r},e)),ref:e.innerRef},e))))};b.propTypes={fallback:o().node,innerRef:o().object,component:o().string,className:o().string};var y=a().forwardRef((function(e,t){return a().createElement(b,p({innerRef:t},e))}));y.propTypes={fallback:o().node,component:o().string,className:o().string},y.defaultProps={fallback:a().createElement(u.Bullseye,{className:"pf-u-p-lg"},a().createElement(u.Spinner,{size:"xl"})),component:"section"};const g=y},85881:(e,t,r)=>{"use strict";r.d(t,{GB:()=>I,LS:()=>L,GV:()=>T});var n=r(32203),a=r(62394),c=r(49734),o=r(70),l=r(32576),s=r(3673),i=r(2370),u=r(26383),m=r(39727),d=r(50693),f=r(16475),p=r(84669),b=r(11306),y=r(66584),g=r(6497),v=r(75662),E=r(59303),h=r(93264),Z=r.n(h),O=r(52202),_=r(24130),w=r(87516),j=r(34348),k=r(72575),P=r(47265),S=r(69897),N=r(8135),D=r(30893),M=r(28186),x=r(86896),I=function(e){var t=(0,x.Z)(),r=e.name,o=e.categories,l=e.impacted_systems_count,s=e.description,i=e.has_incident,u=e.reboot_required,m=e.slug;return Z().createElement(n.Z,{isFlat:!0,isPlain:!0,className:"adv-c-card-pathway adv__background--global-100"},Z().createElement(a.e,{className:"body"},Z().createElement(p.Text,{className:"pf-u-pb-sm pf-u-font-weight-bold"},r),Z().createElement(y.Z,{key:r,labelList:o})," ",Z().createElement(v.Link,{to:"/recommendations/pathways/".concat(m)},t.formatMessage(D.Z.topicCardSystemsaffected,{systems:l}))),Z().createElement(a.e,{className:"body"},s),Z().createElement(a.e,{className:"body"},i&&Z().createElement(w.Z,{rule:{tags:"incident"}})," ",(0,O.k)(u)),Z().createElement(c.e,{className:"footer"},Z().createElement(v.Link,{to:"/recommendations/pathways/".concat(m)},"".concat(t.formatMessage(D.Z.viewPathway)," "),Z().createElement(b.ZP,null))))},L=function(e){var t,r=(0,x.Z)(),c=e.impacted_systems_count,p=e.incident_count,b=e.categories,y=e.critical_risk_count,g=e.high_risk_count,v=e.medium_risk_count,E=e.low_risk_count;return Z().createElement(n.Z,{isFlat:!0,isPlain:!0,className:"adv-c-card-pathway adv__background--global-100"},Z().createElement(o.l,null,r.formatMessage(D.Z.totalRiskPathway)),Z().createElement(a.e,{className:"body"},Z().createElement(d.r,null,Z().createElement(f.P,{span:6},Z().createElement("div",null,Z().createElement(l.k,{ariaDesc:"Total risk of recommendations",ariaTitle:"Total risk of recommendations",containerComponent:Z().createElement(s.H,{labels:function(e){var t=e.datum;return"".concat(t.name,": ").concat(t.y)},constrainToVisibleArea:!0}),height:300,width:300,padding:{bottom:30,left:35,right:20,top:10}},Z().createElement(i.C,null),Z().createElement(i.C,{dependentAxis:!0,showGrid:!0}),Z().createElement(u.G,null,Z().createElement(m.B,{style:{data:{fill:function(e){return e.datum.fill}}},data:[{name:"Critical",x:"Critical",y,fill:N.Z.value},{name:"Important",x:"Important",y:g,fill:S.Z.value},{name:"Moderate",x:"Moderate",y:v,fill:P.Z.value},{name:"Low",x:"Low",y:E,fill:k.Z.value}]}))))),Z().createElement(f.P,{span:6},r.formatMessage(D.Z.thisPathway,{category:(t=b,t.length>1?b.map((function(e){return e.name})).join(", "):t.name),systems:c,incidents:p,strong:function(e){return(0,M.f)(e)}})))))},T=function(e){var t=(0,x.Z)(),r=e.reboot_required,c=e.name,l=e.resolution_risk;return Z().createElement(n.Z,{isFlat:!0,isPlain:!0,className:"adv-c-card-pathway adv__background--global-100"},Z().createElement(o.l,null,t.formatMessage(D.Z.resolution)),Z().createElement(d.r,null,Z().createElement(f.P,{span:7},Z().createElement(a.e,{className:"body"},Z().createElement(g.Z,{text:E.MS[l.risk],value:l.risk,hideIcon:!0})),Z().createElement(a.e,{className:"body"},Z().createElement(j.Dx,{headingLevel:"h5",size:"md"},c)),Z().createElement(a.e,{className:"body"},t.formatMessage(D.Z.staticRemediationDesc)),Z().createElement(a.e,{className:"body"},(0,O.k)(r))),Z().createElement(f.P,{span:5},Z().createElement(o.l,null,t.formatMessage(D.Z.reclvl)),Z().createElement(_.Z,e))))}},58921:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(4942),a=r(15861),c=r(87757),o=r.n(c),l=r(53446),s=r(35240),i=r(59303),u=r(71094),m=r(97109);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){var t={date:(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc"};return"Insights-Advisor_".concat(e,"--").concat(t.date)};const b=function(){var e=(0,a.Z)(o().mark((function e(t,r,n,a,c,d,b){var y,g,v;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y=(null==a?void 0:a.length)&&{tags:a},c&&(y=f(f({},y),(0,m.s0)(c,d))),b((0,l.addNotification)(i.LH.pending)),e.next=6,(0,u.dX)("".concat(i._n,"/export/").concat(t,".").concat("json"===r?"json":"csv"),{},f(f({},n),y)).then((function(e){return b((0,l.addNotification)(i.LH.success)),e})).catch((function(){return b((0,l.addNotification)(i.LH.error))}));case 6:g=e.sent.data,v="json"===r?JSON.stringify(g):g,(0,s.Sv)(v,p(t),r),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),"".concat(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,r,n,a,c,o,l){return e.apply(this,arguments)}}()},66584:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(63732),a=r(15914),c=r(42293),o=r(26407),l=r(99332),s=r(69507),i=r(45697),u=r.n(i),m=r(93264),d=r.n(m),f=r(30893),p=r(86896),b=function(e){var t,r=e.labelList,i=(0,p.Z)(),u=(t=r.map((function(e){return e.id})),Object.entries(t.reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),{})).sort((function(e,t){return t[1]-e[1]}))),m=function(e,t){return d().createElement(c.Label,{icon:e,variant:"outline",color:"blue"},t)};return d().createElement(o.e,{numLabels:1},u.map((function(e){return function(e){return 1===e?m(d().createElement(n.ZP,null),i.formatMessage(f.Z.availability)):2===e?m(d().createElement(l.ZP,null),i.formatMessage(f.Z.security)):3===e?m(d().createElement(a.ZP,null),i.formatMessage(f.Z.stability)):4===e?m(d().createElement(s.ZP,null),i.formatMessage(f.Z.performance)):void 0}(Number(e[0]))})))};b.propTypes={labelList:u().array};const y=b},24130:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(42293),a=r(45697),c=r.n(a),o=r(93264),l=r.n(o),s=r(30893),i=r(86896),u=function(e){var t=(0,i.Z)(),r=e.recommendation_level,a=function(e,t,r){return l().createElement(n.Label,{color:r},"".concat(e," - ").concat(t,"%"))};return r>=80?a(t.formatMessage(s.Z.high),r,"red"):r<80&&r>=50?a(t.formatMessage(s.Z.medium),r,"orange"):a(t.formatMessage(s.Z.low),r,"blue")};u.propTypes={props:c().array};const m=u},44788:(e,t,r)=>{"use strict";r.d(t,{Z:()=>S});var n=r(4942),a=r(15861),c=r(70885),o=r(87757),l=r.n(o),s=r(93264),i=r.n(s),u=r(59303),m=r(6202),d=r(32752),f=r(4853),p=r(23811),b=r(78826),y=r(71094),g=r(45697),v=r.n(g),E=r(12282),h=r(71355),Z=r(30893),O=r(28216),_=r(86896),w=r(77647);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=function(e){var t=e.handleModalToggle,r=e.isModalOpen,n=e.host,o=e.hosts,g=e.rule,v=e.afterFn,j=(0,_.Z)(),P=(0,O.useDispatch)(),S=function(e){return P((0,h.wN)(e))},N=(0,s.useState)(""),D=(0,c.Z)(N,2),M=D[0],x=D[1],I=(0,s.useState)(void 0!==n||o.length>0),L=(0,c.Z)(I,2),T=L[0],C=L[1],F=(0,w.om)(),R=(0,c.Z)(F,2),B=R[0],H=(R[1].isLoading,function(){var e=(0,a.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={systems:o,justification:M},e.prev=1,e.next=4,(0,y.SO)("".concat(u._n,"/rule/").concat(g.rule_id,"/ack_hosts/"),{},t);case 4:!T&&S({variant:"success",dismissable:!0,timeout:!0,title:j.formatMessage(Z.Z.recSuccessfullyDisabled)}),v&&v(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),S({variant:"danger",dismissable:!0,title:j.formatMessage(Z.Z.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}()),A=function(){var e=(0,a.Z)(l().mark((function e(){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"!==g.rule_status||o.length){e.next=15;break}return r=T?{type:"HOST",options:{rule:g.rule_id,system_uuid:n.id,justification:M}}:{type:"RULE",options:k({rule_id:g.rule_id},M&&{justification:M})},e.prev=2,e.next=5,B(r).unwrap();case 5:S({variant:"success",timeout:!0,dismissable:!0,title:j.formatMessage(Z.Z.recSuccessfullyDisabled)}),x(""),v&&v(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),S({variant:"danger",dismissable:!0,title:j.formatMessage(Z.Z.error),description:"".concat(e.t0)});case 13:e.next=16;break;case 15:H();case 16:t(!1);case 17:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return i().createElement(b.u_,{variant:"small",title:j.formatMessage(Z.Z.disableRule),isOpen:r,onClose:function(){t(!1),x("")},actions:[i().createElement(m.Button,{key:"confirm",variant:"primary",onClick:function(){return A()},ouiaId:"confirm"},j.formatMessage(Z.Z.save)),i().createElement(m.Button,{key:"cancel",variant:"link",onClick:function(){t(!1),x("")},ouiaId:"cancel"},j.formatMessage(Z.Z.cancel))]},j.formatMessage(Z.Z.disableRuleBody),i().createElement(f.l,null,i().createElement(p.c,{fieldId:"blank-form"}),(void 0!==n||o.length>0)&&i().createElement(p.c,{fieldId:"disable-rule-one-system"},i().createElement(d.X,{isChecked:T,onChange:function(){C(!T)},label:o.length?j.formatMessage(Z.Z.disableRuleForSystems):j.formatMessage(Z.Z.disableRuleSingleSystem),id:"disable-rule-one-system",name:"disable-rule-one-system"})),i().createElement(p.c,{label:j.formatMessage(Z.Z.justificationNote),fieldId:"disable-rule-justification"},i().createElement(E.oi,{type:"text",id:"disable-rule-justification","aria-describedby":"disable-rule-justification",value:M,onChange:function(e){return x(e)},onKeyDown:function(e){return"Enter"===e.key&&(e.preventDefault(),A())}}))))};P.propTypes={isModalOpen:v().bool,host:v().object,handleModalToggle:v().func,rule:v().object,afterFn:v().func,hosts:v().array},P.defaultProps={isModalOpen:!1,handleModalToggle:function(){},system:void 0,rule:{},afterFn:function(){},host:void 0,hosts:[]};const S=P},89578:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var n=r(70885),a=r(4942),c=r(50693),o=r(16475),l=r(80123),s=r(39173),i=r(93264),u=r.n(i),m=r(85881),d=r(90832),f=r(48099),p=r(29873),b=r(28672),y=r(28216),g=r(75331),v=r(66584),E=r(62410),h=r(40771),Z=r(46891),O=r(14748),_=r(87516),w=r(30893),j=r(8377),k=r(86896),P=r(75662),S=r(97109);function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var M=(0,i.lazy)((function(){return Promise.all([r.e(6692),r.e(5659),r.e(7048),r.e(1160),r.e(8508),r.e(3767),r.e(384)]).then(r.bind(r,82661))}));const x=function(){var e=(0,k.Z)(),t=(0,P.useParams)().id,r=(0,y.useDispatch)(),a=(0,y.useSelector)((function(e){return e.filters.selectedTags})),N=(0,y.useSelector)((function(e){return e.filters.workloads})),x=(0,y.useSelector)((function(e){return e.filters.SID})),I=(0,y.useSelector)((function(e){return e.filters.recState})),L=(0,y.useSelector)((function(e){return e.filters.sysState})),T={};(null==a?void 0:a.length)&&(T=D(D({},T),{tags:a.join(",")})),N&&(T=D(D({},T),(0,S.s0)(N,x)));var C=(0,j.fQ)(D(D({},T),{},{slug:t})),F=C.data,R=void 0===F?{}:F,B=C.isFetching,H=(0,i.useState)(0),A=(0,n.Z)(H,2),G=A[0],K=A[1];return(0,i.useEffect)((function(){var e=D({},I),n=D({},L),a={pathway:t,limit:20,offset:0};return r((0,b.hb)(D(D({},a),{},{sort:"category",impacting:!0}))),r((0,b.pu)(D({},a))),function(){r((0,b.hb)(e)),r((0,b.pu)(n))}}),[]),u().createElement(u().Fragment,null,B?u().createElement(Z.Z,null):u().createElement(u().Fragment,null,u().createElement(l.Z,{className:"adv-c-page__header"},u().createElement(g.Z,{ouiaId:"override",current:R.description||""}),u().createElement(v.Z,{labelList:R.categories}),u().createElement(s.Z,{title:u().createElement(u().Fragment,null,R.description,R.has_incident&&u().createElement(_.Z,{rule:{tags:"incident"}}))}),u().createElement("p",null,e.formatMessage(w.Z.rulesDetailsModifieddate,{date:u().createElement(E.Z,{date:new Date(R.publish_date),type:"onlyDate"})}))),u().createElement(O.Z,{className:"pf-u-pb-0"},u().createElement(c.r,{hasGutter:!0},u().createElement(o.P,{sm:12,md:6},u().createElement(m.LS,R)),u().createElement(o.P,{sm:12,md:6},u().createElement(m.GV,R))))),B&&u().createElement(Z.Z,null),u().createElement(O.Z,null,u().createElement(d.m,{className:"adv__background--global-100",mountOnEnter:!0,unmountOnExit:!0,activeKey:G,onSelect:function(e,t){return K(t)}},u().createElement(f.O,{eventKey:0,title:u().createElement(p.T,null,e.formatMessage(w.Z.recommendations))},B?u().createElement(Z.Z,null):u().createElement(i.Suspense,{fallback:u().createElement(Z.Z,null)},u().createElement(M,null))),u().createElement(f.O,{eventKey:1,title:u().createElement(p.T,null,e.formatMessage(w.Z.systems))},B?u().createElement(Z.Z,null):u().createElement(i.Suspense,{fallback:u().createElement(Z.Z,null)},u().createElement(h.Z,{tableProps:{canSelectAll:!1,isStickyHeader:!0},pathway:R,selectedTags:a,workloads:N,SID:x,showTags:!0}))))))}},70347:()=>{},32857:()=>{},90479:()=>{},78752:()=>{},25238:()=>{},56024:()=>{},43390:()=>{},72816:()=>{}}]);