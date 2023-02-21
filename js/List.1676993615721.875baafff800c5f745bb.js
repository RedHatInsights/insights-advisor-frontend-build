(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[6842],{2372:(e,t,r)=>{"use strict";r.d(t,{S:()=>a,$:()=>l});var a,n=r(70655),s=r(93264),o=r(62698),i=r(38296);!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(a||(a={}));const l=e=>{var{className:t="",size:r="xl","aria-valuetext":a="Loading...",isSVG:l=!1,diameter:c,"aria-label":u,"aria-labelledBy":d}=e,p=(0,n.__rest)(e,["className","size","aria-valuetext","isSVG","diameter","aria-label","aria-labelledBy"]);const f=l?"svg":"span";return s.createElement(f,Object.assign({className:(0,i.css)(o.default.spinner,o.default.modifiers[r],t),role:"progressbar","aria-valuetext":a},l&&{viewBox:"0 0 100 100"},c&&{style:{"--pf-c-spinner--diameter":c}},u&&{"aria-label":u},d&&{"aria-labelledBy":d},!u&&!d&&{"aria-label":"Contents"},p),l?s.createElement("circle",{className:o.default.spinnerPath,cx:"50",cy:"50",r:"45",fill:"none"}):s.createElement(s.Fragment,null,s.createElement("span",{className:(0,i.css)(o.default.spinnerClipper)}),s.createElement("span",{className:(0,i.css)(o.default.spinnerLeadBall)}),s.createElement("span",{className:(0,i.css)(o.default.spinnerTailBall)})))};l.displayName="Spinner"},52643:(e,t,r)=>{"use strict";r.d(t,{b:()=>i});var a=r(70655),n=r(93264),s=r(38296),o=r(66042);const i=e=>{var{children:t=null,className:r="",component:i="div"}=e,l=(0,a.__rest)(e,["children","className","component"]);const c=i;return n.createElement(c,Object.assign({className:(0,s.css)(o.default.bullseye,r)},l),t)};i.displayName="Bullseye"},2095:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Card=t.CardContext=void 0;const a=r(70655),n=a.__importStar(r(93264)),s=a.__importDefault(r(54918)),o=r(38296),i=r(23053);t.CardContext=n.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),t.Card=e=>{var{children:r=null,id:l="",className:c="",component:u="article",isHoverable:d=!1,isCompact:p=!1,isSelectable:f=!1,isSelectableRaised:m=!1,isSelected:y=!1,isDisabledRaised:g=!1,isFlat:v=!1,isExpanded:b=!1,isRounded:h=!1,isLarge:O=!1,isFullHeight:_=!1,isPlain:j=!1,ouiaId:x,ouiaSafe:w=!0,hasSelectableInput:P=!1,selectableInputAriaLabel:E,onSelectableInputChange:S=(()=>{})}=e,Z=a.__rest(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const C=u,k=i.useOUIAProps(t.Card.displayName,x,w),[N,T]=n.useState(""),[M,D]=n.useState();p&&O&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),O=!1);const I=n.useRef(!1);return n.useEffect((()=>{E?D({"aria-label":E}):N?D({"aria-labelledby":N}):P&&!I.current&&(D({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[P,E,N]),n.createElement(t.CardContext.Provider,{value:{cardId:l,registerTitleId:e=>{T(e),I.current=!!e},isExpanded:b}},P&&n.createElement("input",Object.assign({className:"pf-screen-reader",id:`${l}-input`},M,{type:"checkbox",checked:y,onChange:e=>S(l,e),disabled:g,tabIndex:-1})),n.createElement(C,Object.assign({id:l,className:o.css(s.default.card,p&&s.default.modifiers.compact,b&&s.default.modifiers.expanded,v&&s.default.modifiers.flat,h&&s.default.modifiers.rounded,O&&s.default.modifiers.displayLg,_&&s.default.modifiers.fullHeight,j&&s.default.modifiers.plain,g?o.css(s.default.modifiers.nonSelectableRaised):m?o.css(s.default.modifiers.selectableRaised,y&&s.default.modifiers.selectedRaised):f||d?o.css(s.default.modifiers.selectable,y&&s.default.modifiers.selected):"",c),tabIndex:f||m?"0":void 0},Z,k),r))},t.Card.displayName="Card"},85962:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardBody=void 0;const a=r(70655),n=a.__importStar(r(93264)),s=a.__importDefault(r(54918)),o=r(38296);t.CardBody=e=>{var{children:t=null,className:r="",component:i="div",isFilled:l=!0}=e,c=a.__rest(e,["children","className","component","isFilled"]);const u=i;return n.createElement(u,Object.assign({className:o.css(s.default.cardBody,!l&&s.default.modifiers.noFill,r)},c),t)},t.CardBody.displayName="CardBody"},54918:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a}),r(80598);const a={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},66042:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a}),r(87234);const a={bullseye:"pf-l-bullseye"}},71712:(e,t)=>{"use strict";t.tK={name:"--pf-global--link--Color",value:"#06c",var:"var(--pf-global--link--Color)"},t.ZP=t.tK},32412:(e,t)=>{"use strict";t._p={name:"--pf-global--spacer--md",value:"1rem",var:"var(--pf-global--spacer--md)"},t.ZP=t._p},67265:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(85893),n=r(93264);const s=function(e){var t=e.component,r=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["component"]);return(0,n.useEffect)((function(){console.error("Unable to load inventory component. Failed to load ".concat(t,"."),r)}),[]),(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Unable to load inventory component"}),(0,a.jsxs)("h2",{children:["Failed to load ",t]}),(0,a.jsx)("code",{children:"More info can be found in browser console output."})]})}},33739:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var a=r(85893),n=r(93264),s=r.n(n),o=r(45697),i=r.n(o),l=r(59823),c=r(75662),u=r(28216),d=r(22938),p=r(67265),f=r(94184),m=r.n(f),y=function(){return y=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},y.apply(this,arguments)},g=function(e){var t=(0,c.useHistory)(),r=(0,u.useStore)(),s=e.component;return(0,a.jsx)(s,y({className:m()(e.className,"inventory")},{children:(0,a.jsx)(n.Suspense,y({fallback:e.fallback},{children:(0,a.jsx)(l.ScalprumComponent,y({history:t,store:r,appName:"inventory",module:"./InventoryTable",scope:"inventory",ErrorComponent:(0,a.jsx)(p.Z,y({component:"InventoryDetailHead",history:t,store:r},e)),ref:e.innerRef},e))}))}))};g.propTypes={fallback:i().node,innerRef:i().object,component:i().string,className:i().string};var v=s().forwardRef((function(e,t){return(0,a.jsx)(g,y({innerRef:t},e))}));v.propTypes={fallback:i().node,component:i().string,className:i().string},v.defaultProps={fallback:(0,a.jsx)(d.Bullseye,y({className:"pf-u-p-lg"},{children:(0,a.jsx)(d.Spinner,{size:"xl"})})),component:"section"};const b=v},89376:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var a=r(85893),n=r(94184),s=r.n(n),o=r(93264);const i=r.n(o)().createContext("light");var l=function(){return l=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},l.apply(this,arguments)};const c=function(e){var t=e.className,r=e.children,n=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["className","children"]),o=s()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,a.jsx)(i.Consumer,{children:function(e){var t,i;void 0===e&&(e="light");var c=s()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((i={})["pf-m-light"]="light"===e,i));return(0,a.jsx)("section",l({},n,{className:"".concat(o," ").concat(c),"widget-type":"InsightsPageHeader"},{children:r}))}})}},58921:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var a=r(4942),n=r(15861),s=r(87757),o=r.n(s),i=r(53446),l=r(35240),c=r(59303),u=r(71094),d=r(97109);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(e){var t={date:(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc"};return"Insights-Advisor_".concat(e,"--").concat(t.date)};const y=function(){var e=(0,n.Z)(o().mark((function e(t,r,a,n,s,p,y){var g,v,b;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g=(null==n?void 0:n.length)&&{tags:n},s&&(g=f(f({},g),(0,d.s0)(s,p))),y((0,i.addNotification)(c.LH.pending)),e.next=6,(0,u.dX)("".concat(c._n,"/export/").concat(t,".").concat("json"===r?"json":"csv"),{},f(f({},a),g)).then((function(e){return y((0,i.addNotification)(c.LH.success)),e})).catch((function(){return y((0,i.addNotification)(c.LH.error))}));case 6:v=e.sent.data,b="json"===r?JSON.stringify(v):v,(0,l.Sv)(b,m(t),r),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),"".concat(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,r,a,n,s,o,i){return e.apply(this,arguments)}}()},87516:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var a=r(76004),n=r(23218),s=r(45697),o=r.n(s),i=r(93264),l=r.n(i),c=r(30893),u=r(86896),d=function(e){var t,r=e.rule,s=e.isCompact,o=e.noMargin,i=(0,u.Z)();return l().createElement(l().Fragment,null,-1!==(null==r||null===(t=r.tags)||void 0===t?void 0:t.search("incident"))&&l().createElement(a.Tooltip,{content:i.formatMessage(c.Z.incidentTooltip),position:a.TooltipPosition.right},l().createElement(n.Label,{color:"red",className:o?null:"adv-c-label-incident",isCompact:s},i.formatMessage(c.Z.incident))),"disabled"===(null==r?void 0:r.rule_status)&&l().createElement(a.Tooltip,{content:i.formatMessage(c.Z.ruleIsDisabledTooltip),position:a.TooltipPosition.right},l().createElement(n.Label,{color:"gray",isCompact:s},i.formatMessage(c.Z.disabled))),"rhdisabled"===(null==r?void 0:r.rule_status)&&l().createElement(a.Tooltip,{content:i.formatMessage(c.Z.ruleIsDisabledTooltip),position:a.TooltipPosition.right},l().createElement(n.Label,{color:"gray",isCompact:s},i.formatMessage(c.Z.redhatDisabled))))};d.propTypes={rule:o().object,isCompact:o().bool,noMargin:o().bool},d.defaultProps={isCompact:!0};const p=d},46891:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var a=r(2095),n=r(85962),s=r(24561),o=r(93264),i=r.n(o);const l=function(){return i().createElement(a.Card,null,i().createElement(n.CardBody,null,i().createElement(s.aV,null)))}},58016:(e,t,r)=>{"use strict";r.d(t,{J:()=>c,W:()=>u});var a=r(4942),n=r(75472),s=r.n(n),o=r(97109);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c=function(e,t,r,a,n,s,i,c,u,d){var p,f;return l(l(l(l(l(l(l(l({},e),{},{limit:r,offset:t*r-r,sort:a},(null==s?void 0:s.hostnameOrId)&&!n&&!d&&{name:null==s?void 0:s.hostnameOrId}),(null==s?void 0:s.hostnameOrId)&&!n&&d&&{display_name:null==s?void 0:s.hostnameOrId}),s.hostnameOrId&&n&&{display_name:null==s?void 0:s.hostnameOrId}),e.rhel_version&&{rhel_version:null===(p=e.rhel_version)||void 0===p?void 0:p.join(",")}),(null===(f=s.tagFilters)||void 0===f?void 0:f.length)&&(0,o.gh)(s.tagFilters)),c?(0,o.s0)(c,u):{}),(null==i?void 0:i.length)>0?{tags:i.join(",")}:{})},u=function(e,t,r){var a;return a=0===t?"name":2===t?"featured":"impacted_systems_count",s()(e,[function(e){return e[a]}],r)}},14689:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ae});var a=r(89376),n=r(39173),s=r(93264),o=r.n(s),i=r(15861),l=r(42982),c=r(4942),u=r(70885),d=r(87757),p=r.n(d),f=r(59303),m=r(17855),y=r(97109),g=r(28216),v=r(71094),b=r(33739),h=r(46891),O=r(23320),_=r(74093),j=r(45697),x=r.n(j),w=r(51634),P=r(39080),E=r(87119),S=r(75442),Z=r(23992),C=r(71712),k=r(32412),N=r(30893);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D=_.mM.create({bold:{fontWeight:Z.default.value},link:{color:C.ZP.value},text:{marginTop:k.ZP.value},nameColumn:{width:"220px"},header:{fontSize:9,color:S.ZP.value,paddingLeft:P.ZP.value,paddingBottom:w.ZP.value,paddingTop:E.ZP.value}}),I=function(e){var t=e.page,r=e.systems,a=e.intl,n=[{value:a.formatMessage(N.Z.name),style:D.nameColumn},{value:a.formatMessage(N.Z.recommendations),style:{width:"100px",textAlign:"center"}},{value:a.formatMessage(N.Z.critical),style:{width:"70px",textAlign:"center"}},{value:a.formatMessage(N.Z.important),style:{width:"70px",textAlign:"center"}},{value:a.formatMessage(N.Z.moderate),style:{width:"60px",textAlign:"center"}},{value:a.formatMessage(N.Z.low),style:{width:"90px",textAlign:"center"}},{value:a.formatMessage(N.Z.lastSeen),style:{marginLeft:"20px"}}],s=["hits","critical_hits","important_hits","moderate_hits","low_hits"],i=(0,l.Z)(r.map((function(e){var t=new Date(e.last_seen).toUTCString().split(" "),r=(0,u.Z)(t,5),a=r[1],n=r[2],i=r[3],c=r[4],d="".concat(a," ").concat(n," ").concat(i,", ").concat(c.split(":").slice(0,2).join(":")," UTC");return[o().createElement(_.xv,{key:e.system_uuid,style:D.nameColumn},o().createElement(_.rU,{style:D.link,src:"".concat(f.eR,"/insights/advisor/systems/").concat(e.system_uuid,"/")},e.display_name))].concat((0,l.Z)(s.map((function(t){return a=(r={style:{width:"10px"},value:e[t]}).value,n=r.style,o().createElement(_.xv,{style:n},a);var r,a,n}))),[o().createElement(_.xv,{key:e.last_seen,style:{width:"100px"}},"".concat(d))])})));return o().createElement(o().Fragment,{key:t},o().createElement(O.sg,null,o().createElement(O.iA,{withHeader:!0,rows:[n.map((function(e){return r=(t=e).value,a=t.style,o().createElement(_.xv,{style:M(M(M({},a),D.header),D.bold)},r);var t,r,a}))].concat((0,l.Z)(i))})))};I.propTypes={systems:x().object,page:x().number,intl:x().any};var F=function(e){var t=e.systemsTotal,r=e.systems,a=e.filters,n=e.tags,s=e.intl;return delete a.offset,delete a.limit,o().createElement(o().Fragment,{key:"".concat(s.formatMessage(N.Z.insightsHeader),": ").concat(s.formatMessage(N.Z.systems))},o().createElement(_.xv,{key:"sys-count",style:D.text},s.formatMessage(N.Z.sysTableCount,{systems:o().createElement(_.xv,{key:"sys-count-count",style:D.bold},s.formatMessage(N.Z.execReportHeaderSystems,{systems:t}),t>1e3&&s.formatMessage(N.Z.dueTo))})),o().createElement(_.xv,{key:"sys-filters",style:D.text},s.formatMessage(N.Z.filtersApplied)),o().createElement(_.xv,{key:"sys-filters-values",style:D.bold},Object.entries(a).map((function(e){return o().createElement(_.xv,{key:e},"".concat(e[0],": ").concat(e[1],"     "))}))),o().createElement(_.xv,{key:"sys-tags",style:D.text},s.formatMessage(N.Z.tagsApplied)),o().createElement(_.xv,{key:"sys-tags-values",style:D.bold},n?decodeURIComponent(n):s.formatMessage(N.Z.noTags)),o().createElement(O.$0,{key:"systems",title:"Systems"},o().createElement(I,{systems:r,intl:s})))};F.propTypes={systems:x().object,systemsTotal:x().number,filters:x().object,tags:x().array,intl:x().any};var U=r(86896);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R=function(e){var t=e.filters,r=(0,U.Z)(),a=(0,s.useState)(!1),n=(0,u.Z)(a,2),c=n[0],d=n[1],m=(0,g.useSelector)((function(e){var t=e.AdvisorStore;return null==t?void 0:t.selectedTags})),b=(0,g.useSelector)((function(e){var t=e.AdvisorStore;return null==t?void 0:t.workloads})),h=(0,g.useSelector)((function(e){var t=e.AdvisorStore;return null==t?void 0:t.SID})),_=function(){var e=(0,i.Z)(p().mark((function e(){var a,n,s,i;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),a=(null==m?void 0:m.length)&&{tags:m},b&&(a=A(A({},a),(0,y.s0)(b,h))),e.next=5,(0,v.dX)("".concat(f._n,"/export/systems/"),{},A(A({},t),a));case 5:return n=e.sent.data,s=F({systemsTotal:null==n?void 0:n.length,systems:n.slice(0,18),filters:t,tags:m,intl:r}),i=n.slice(18,982).reduce((function(e,t,r){var a=Math.floor(r/31);return!e[a]&&(e[a]=[]),e[a].push(t),e}),[]),d(!1),e.abrupt("return",[s].concat((0,l.Z)(i.map((function(e,t){return o().createElement(I,{key:t,page:t,systems:e,intl:r})})))));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o().createElement(O.o6,{groupName:r.formatMessage(N.Z.redHatInsights),allPagesHaveTitle:!1,label:c?r.formatMessage(N.Z.loading):r.formatMessage(N.Z.exportPdf),asyncFunction:_,buttonProps:A({variant:"",component:"button",className:"pf-c-dropdown__menu-item adv-c-dropdown-systems-pdf__menu-item"},c?{isDisabled:!0}:null),reportName:"".concat(r.formatMessage(N.Z.insightsHeader),":"),type:r.formatMessage(N.Z.systems),fileName:"Advisor_systems--".concat((new Date).toUTCString().replace(/ /g,"-"),".pdf"),size:[841.89,595.28]})};R.propTypes={filters:x().object,systemsCount:x().number};const H=R;var B=r(58921),V=r(46655),z=r(41131),G=r(28672),W=r(75662),Y=r(43707),J=r(22938);const K=function(){return o().createElement(J.Bullseye,null,o().createElement(J.EmptyState,{variant:J.EmptyStateVariant.full},o().createElement(J.Title,{headingLevel:"h2",size:"lg"},"No matching systems found"),o().createElement(J.EmptyStateBody,null,o().createElement(J.TextContent,null,o().createElement(J.Text,{component:J.TextVariants.p},"To continue, edit your filter settings and search again.")))))};var X=r(54025),$=r(87516),q=r(58016);function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const te=function(){var e,t=(0,U.Z)(),r=(0,g.useDispatch)(),a=(0,g.useStore)(),n=(0,X.useLoadModule)({appName:"inventory",scope:"inventory",module:"./OsFilterHelpers"}),d=(0,u.Z)(n,1)[0],O=(d=void 0===d?{}:d).toGroupSelectionValue,_=d.buildOSFilterConfig,j=(0,W.useLocation)().search,x=(0,g.useSelector)((function(e){return e.filters.selectedTags})),w=(0,g.useSelector)((function(e){return e.filters.workloads})),P=(0,g.useSelector)((function(e){return e.filters.SID})),E=(0,g.useSelector)((function(e){return e.filters.sysState})),S=(0,g.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.operatingSystems)||[]})),Z=function(e){return r((0,G.pu)(e))},C=(0,Y.TE)("advisor",f.Gd.export).hasAccess,k=(0,s.useState)(!0),T=(0,u.Z)(k,2),M=T[0],D=T[1],I=function(e){var t=ee(ee({},E),{},{offset:0});delete t[e],"hits"===e&&void 0===t.hits&&(t.hits=["yes"]),Z(t)},F=function(e,t){"hits"===e&&t.length>1&&t.includes("yes")&&t.shift();var r=e===f.Ut.rhel_version.urlParam?Object.values(t||{}).flatMap((function(e){return Object.keys(e)})):t;r.length>0?Z(ee(ee({},E),{},{offset:0},(0,c.Z)({},e,r))):I(e)},L=[{label:f.Ut.hits.title.toLowerCase(),type:f.Ut.hits.type,id:f.Ut.hits.urlParam,value:"checkbox-".concat(f.Ut.hits.urlParam),filterValues:{key:"".concat(f.Ut.hits.urlParam,"-filter"),onChange:function(e,t){return F(f.Ut.hits.urlParam,t)},value:E.hits,items:f.Ut.hits.values}},{label:f.Ut.incident.title.toLowerCase(),type:f.Ut.incident.type,id:f.Ut.incident.urlParam,value:"checkbox-".concat(f.Ut.incident.urlParam),filterValues:{key:"".concat(f.Ut.incident.urlParam,"-filter"),onChange:function(e,t){F(f.Ut.incident.urlParam,t)},value:E.incident,items:f.Ut.incident.values}}].concat((0,l.Z)(_?[_({label:f.Ut.rhel_version.title.toLowerCase(),type:f.Ut.rhel_version.type,id:f.Ut.rhel_version.urlParam,value:O(E.rhel_version||[]),onChange:function(e,t){return F(f.Ut.rhel_version.urlParam,t)}},S)]:[])),A={deleteTitle:t.formatMessage(N.Z.resetFilters),filters:(e=ee({},E),e.hits&&e.hits.includes("yes")&&delete e.hits,delete e.sort,delete e.offset,delete e.limit,(0,y.yK)(e,f.Ut)),onDelete:function(e,t,r){r?Z({sort:E.sort,limit:E.limit,offset:E.offset,hits:["all"],tags:x}):t.map((function(e){var t=(0,c.Z)({},e.urlParam,Array.isArray(E[e.urlParam])?E[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?Z(ee(ee({},E),t)):I(e.urlParam)}))}},R=function(e){var t=e.display_name,r=e.hits,a=ee(ee(ee({},e),t&&{display_name:t}),r&&{hits:r});(0,y.Y4)(a,x)},J=function(e){return[{title:e.formatMessage(N.Z.name),key:"display_name",transforms:[m.sortable,m.wrappable],props:{isStatic:!0},renderFunc:function(e,t,r){return o().createElement(o().Fragment,null,o().createElement(W.Link,{key:t,to:"/systems/".concat(r.system_uuid)},"".concat(r.display_name," ")),r.incident_hits>0&&o().createElement($.Z,{rule:{tags:"incident"}}))}},{key:"tags"},{key:"system_profile",transforms:[m.sortable,m.wrappable]},{title:e.formatMessage(N.Z.numberRuleHits),transforms:[m.sortable,m.wrappable],key:"hits"},{title:e.formatMessage(N.Z.critical),transforms:[m.sortable,m.wrappable],key:"critical_hits"},{title:e.formatMessage(N.Z.important),transforms:[m.sortable,m.wrappable],key:"important_hits"},{title:e.formatMessage(N.Z.moderate),transforms:[m.sortable,m.wrappable],key:"moderate_hits"},{title:e.formatMessage(N.Z.low),transforms:[m.sortable,m.wrappable],key:"low_hits"},{key:"updated",transforms:[m.sortable,m.wrappable],props:{width:20}}]}(t);return(0,s.useEffect)((function(){var e;if(j){var t=(0,y.yG)();t.tags=x,void 0!==t.sort&&(t.sort=t.sort[0]),void 0!==t.display_name&&(t.display_name=t.display_name[0]),void 0===t.hits&&(t.hits=["all"]),void 0===t.offset||isNaN(t.offset)?t.offset=0:t.offset=Number(t.offset[0]),void 0===t.limit||isNaN(t.limit)?t.limit=20:t.limit=Number(t.limit[0]),e=ee(ee({},E),t),void 0!==t.incident&&!Array.isArray(t.incident)&&(t.incident=["".concat(t.incident)]),Z(e)}else void 0!==E.limit&&void 0!==E.offset&&void 0!==E.hits||(e=ee(ee({},E),{},{offset:0,limit:20,hits:["all"],tags:x}),Z(e));D(!1),(0,y.Y4)(e,x)}),[x]),!M&&o().createElement(b.Z,{hideFilters:{all:!0,name:!1,tags:!1},initialLoading:!0,autoRefresh:!0,showTags:!0,disableDefaultColumns:!0,customFilters:{advisorFilters:E,workloads:w,SID:P,selectedTags:x},columns:function(e){return function(e){return J.map((function(t){var r=e.find((function(e){return e.key===t.key}));return ee(ee({},t),r)}))}(e)},onLoad:function(e){var t=e.mergeWithEntities,r=e.INVENTORY_ACTION_TYPES,n=e.mergeWithDetail;a.replaceReducer((0,z.U)(ee(ee({},t((0,V.V)([],r),{page:Number(E.offset/E.limit+1||1),perPage:Number(E.limit||20)})),n())))},getEntities:function(){var e=(0,i.Z)(p().mark((function e(t,r,a,n){var s,o,i,l,c,u,d,m,g,b,h,O,_;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.per_page,i=r.page,l=r.orderBy,c=r.orderDirection,u=r.advisorFilters,d=r.filters,m=r.workloads,g=r.SID,b="".concat("ASC"===c?"":"-").concat(("updated"===l?"last_seen":"operating_system"===l&&"rhel_version")||l),h=(0,q.J)(u,i,o,b,null,d,x,m,g,!0),e.next=5,(0,v.dX)(f.Vo,{},h);case 5:if(e.t1=s=e.sent,e.t0=null===e.t1,e.t0){e.next=9;break}e.t0=void 0===s;case 9:if(!e.t0){e.next=13;break}e.t2=void 0,e.next=14;break;case 13:e.t2=s.data;case 14:return O=e.t2,R(h),e.next=18,n(O.data.map((function(e){return e.system_uuid})),{per_page:o,hasItems:!0,fields:{system_profile:["operating_system"]}},a);case 18:return _=e.sent,e.abrupt("return",Promise.resolve({results:(0,y.E9)(O.data,_.results),total:O.meta.count}));case 20:case"end":return e.stop()}}),e)})));return function(t,r,a,n){return e.apply(this,arguments)}}(),tableProps:{isStickyHeader:!0,variant:m.TableVariant.compact},isFullView:!0,hasCheckbox:!1,filterConfig:{items:L},activeFiltersConfig:A,noSystemsTable:K,exportConfig:{onSelect:function(e,t){return(0,B.Z)("systems",t,E,x,w,P,r)},extraItems:[o().createElement("li",{key:"download-pd",role:"menuitem"},o().createElement(H,{filters:ee({},(0,y.qW)(E))}))],isDisabled:!C,tooltipText:C?t.formatMessage(N.Z.exportData):t.formatMessage(N.Z.permsAction)},fallback:h.Z})};var re=function(){var e=(0,U.Z)();return document.title=e.formatMessage(N.Z.documentTitle,{subnav:N.Z.systems.defaultMessage}),o().createElement(o().Fragment,null,o().createElement(a.Z,null,o().createElement(n.Z,{title:"".concat(e.formatMessage(N.Z.insightsHeader)," ").concat(e.formatMessage(N.Z.systems).toLowerCase())})),o().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section"},o().createElement(te,null)))};re.displayName="systems-list";const ae=re},85893:(e,t,r)=>{"use strict";e.exports=r(75251)},45467:()=>{},11452:()=>{},34946:()=>{},80598:()=>{},21064:()=>{},82014:()=>{},66822:()=>{},49854:()=>{},87234:()=>{},42480:()=>{},19527:()=>{},69331:()=>{},52361:()=>{},94616:()=>{}}]);