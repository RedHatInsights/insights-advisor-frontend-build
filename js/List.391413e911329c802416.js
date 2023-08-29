(self.webpackChunkadvisor=self.webpackChunkadvisor||[]).push([[6842],{68340:(e,t,r)=>{"use strict";r.d(t,{q:()=>n,x:()=>l});var n,s=r(70655),o=r(93264),a=r(38296),i=r(62873),c=r(62472);!function(e){e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.p="p",e.a="a",e.small="small",e.blockquote="blockquote",e.pre="pre"}(n||(n={}));const l=e=>{var{children:t=null,className:r="",component:u=n.p,isVisitedLink:f=!1,ouiaId:p,ouiaSafe:m=!0}=e,d=(0,s._T)(e,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const y=u,v=(0,c.S$)(l.displayName,p,m);return o.createElement(y,Object.assign({},v,d,{"data-pf-content":!0,className:(0,a.i)(f&&u===n.a&&i.Z.modifiers.visited,r)}),t)};l.displayName="Text"},68774:(e,t,r)=>{"use strict";r.d(t,{D:()=>i});var n=r(70655),s=r(93264),o=r(62873),a=r(38296);const i=e=>{var{children:t,className:r="",isVisited:i=!1}=e,c=(0,n._T)(e,["children","className","isVisited"]);return s.createElement("div",Object.assign({},c,{className:(0,a.i)(o.Z.content,i&&o.Z.modifiers.visited,r)}),t)};i.displayName="TextContent"},62873:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n}),r(10108);const n={content:"pf-c-content",modifiers:{visited:"pf-m-visited",plain:"pf-m-plain",overpassFont:"pf-m-overpass-font"}}},67265:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(85893),s=r(93264);const o=function(e){var t=e.component,r=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]])}return r}(e,["component"]);return(0,s.useEffect)((function(){console.error("Unable to load inventory component. Failed to load ".concat(t,"."),r)}),[]),(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"Unable to load inventory component"}),(0,n.jsxs)("h2",{children:["Failed to load ",t]}),(0,n.jsx)("code",{children:"More info can be found in browser console output."})]})}},33739:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(85893),s=r(93264),o=r.n(s),a=r(45697),i=r.n(a),c=r(59823),l=r(28216),u=r(35356),f=r(67265),p=r(94184),m=r.n(p),d=r(72126),y=function(){return y=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},y.apply(this,arguments)},v=function(e){var t=(0,l.useStore)(),r=e.component;return(0,n.jsx)(r,y({className:m()(e.className,"inventory")},{children:(0,n.jsx)(s.Suspense,y({fallback:e.fallback},{children:(0,n.jsx)(c.ScalprumComponent,y({history:e.history,store:t,appName:"inventory",module:"./InventoryTable",scope:"inventory",ErrorComponent:(0,n.jsx)(f.Z,y({component:"InventoryDetailHead"},e)),ref:e.innerRef},e))}))}))};v.propTypes={fallback:i().node,innerRef:i().object,component:i().string,className:i().string,history:i().object};var g=o().forwardRef((function(e,t){return(0,n.jsx)(v,y({innerRef:t},e))}));g.propTypes={fallback:i().node,component:i().string,className:i().string},g.defaultProps={fallback:(0,n.jsx)(u.Bullseye,y({className:"pf-u-p-lg"},{children:(0,n.jsx)(u.Spinner,{size:"xl"})})),component:"section"};const h=o().forwardRef((function(e,t){return(0,n.jsx)(d.Z,y({innerRef:t,Component:g},e))}))},72126:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(85893),s=r(93264),o=r.n(s),a=r(62012),i=r(55140),c=function(){return c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},c.apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]])}return r},u=function(e){var t=e.Component,r=l(e,["Component"]),s=a.useHistory();return(0,n.jsx)(t,c({history:s},r))},f=function(e){var t=e.Component,r=l(e,["Component"]),s=(0,i.Z)().chromeHistory;return(0,n.jsx)(t,c({history:s},r))};const p=o().forwardRef((function(e,t){var r=e.Component,o=l(e,["Component"]),i=(0,s.useMemo)((function(){return"function"==typeof a.useHistory?u:f}),[r,o]);return(0,n.jsx)(i,c({innerRef:t,Component:r},o))}))},58921:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(4942),s=r(15861),o=r(87757),a=r.n(o),i=r(53446),c=r(35240),l=r(59303),u=r(71094),f=r(97109);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t={date:(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc"};return"Insights-Advisor_".concat(e,"--").concat(t.date)};const y=function(){var e=(0,s.Z)(a().mark((function e(t,r,n,s,o,p,y,v){var g,h,b;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g=(null==s?void 0:s.length)&&{tags:s},o&&(g=m(m({},g),(0,f.s0)(o,p))),y((0,i.addNotification)(l.LH.pending)),e.next=6,(0,u.dX)("".concat(l._n,"/export/").concat(t,".").concat("json"===r?"json":"csv"),{},m(m(m({},n),g),v&&{display_name:v})).then((function(e){return y((0,i.addNotification)(l.LH.success)),e})).catch((function(){return y((0,i.addNotification)(l.LH.error))}));case 6:h=e.sent.data,b="json"===r?JSON.stringify(h):h,(0,c.Sv)(b,d(t),r),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),"".concat(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,r,n,s,o,a,i,c){return e.apply(this,arguments)}}()},87516:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(75824),s=r(69174),o=r(45697),a=r.n(o),i=r(93264),c=r.n(i),l=r(30893),u=r(86896),f=function(e){var t,r=e.rule,o=e.isCompact,a=e.noMargin,i=(0,u.Z)();return c().createElement(c().Fragment,null,-1!==(null==r||null===(t=r.tags)||void 0===t?void 0:t.search("incident"))&&c().createElement(n.u,{content:i.formatMessage(l.Z.incidentTooltip),position:n.D.right},c().createElement(s._,{color:"red",className:a?null:"adv-c-label-incident",isCompact:o},i.formatMessage(l.Z.incident))),"disabled"===(null==r?void 0:r.rule_status)&&c().createElement(n.u,{content:i.formatMessage(l.Z.ruleIsDisabledTooltip),position:n.D.right},c().createElement(s._,{color:"gray",isCompact:o},i.formatMessage(l.Z.disabled))),"rhdisabled"===(null==r?void 0:r.rule_status)&&c().createElement(n.u,{content:i.formatMessage(l.Z.ruleIsDisabledTooltip),position:n.D.right},c().createElement(s._,{color:"gray",isCompact:o},i.formatMessage(l.Z.redhatDisabled))))};f.propTypes={rule:a().object,isCompact:a().bool,noMargin:a().bool},f.defaultProps={isCompact:!0};const p=f},46891:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(32203),s=r(62394),o=r(24561),a=r(93264),i=r.n(a);const c=function(){return i().createElement(n.Z,null,i().createElement(s.e,null,i().createElement(o.aV,null)))}},58016:(e,t,r)=>{"use strict";r.d(t,{J:()=>l,W:()=>u});var n=r(4942),s=r(75472),o=r.n(s),a=r(97109);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=function(e,t,r,n,s,o,i,l,u,f){var p,m,d;return c(c(c(c(c(c(c(c(c({},e),{},{limit:r,offset:t*r-r,sort:n},(null==o?void 0:o.hostnameOrId)&&!s&&!f&&{name:null==o?void 0:o.hostnameOrId}),(null==o?void 0:o.hostnameOrId)&&!s&&f&&{display_name:null==o?void 0:o.hostnameOrId}),o.hostnameOrId&&s&&{display_name:null==o?void 0:o.hostnameOrId}),e.rhel_version&&{rhel_version:null===(p=e.rhel_version)||void 0===p?void 0:p.join(",")}),(null==o||null===(m=o.hostGroupFilter)||void 0===m?void 0:m.length)&&{groups:o.hostGroupFilter.join(",")}),(null===(d=o.tagFilters)||void 0===d?void 0:d.length)&&(0,a.gh)(o.tagFilters)),l?(0,a.s0)(l,u):{}),(null==i?void 0:i.length)>0?{tags:i.join(",")}:{})},u=function(e,t,r){var n;return n=0===t?"name":2===t?"featured":"impacted_systems_count",o()(e,[function(e){return e[n]}],r)}},45532:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>le});var n=r(89376),s=r(39173),o=r(93264),a=r.n(o),i=r(15861),c=r(45987),l=r(42982),u=r(4942),f=r(70885),p=r(87757),m=r.n(p),d=r(59303),y=r(75863),v=r(97109),g=r(28216),h=r(71094),b=r(33739),O=r(46891),j=r(17920),w=r(74093),Z=r(45697),P=r.n(Z);var x=r(30893);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=w.mM.create({bold:{fontWeight:"600"},link:{color:"#06c"},text:{marginTop:"1rem"},nameColumn:{width:"220px"},header:{fontSize:9,color:"#4f5255",paddingLeft:"0.5rem",paddingBottom:"0.5rem",paddingTop:"0.5rem"}}),S=function(e){var t=e.page,r=e.systems,n=e.intl,s=[{value:n.formatMessage(x.Z.name),style:_.nameColumn},{value:n.formatMessage(x.Z.recommendations),style:{width:"100px",textAlign:"center"}},{value:n.formatMessage(x.Z.critical),style:{width:"70px",textAlign:"center"}},{value:n.formatMessage(x.Z.important),style:{width:"70px",textAlign:"center"}},{value:n.formatMessage(x.Z.moderate),style:{width:"60px",textAlign:"center"}},{value:n.formatMessage(x.Z.low),style:{width:"90px",textAlign:"center"}},{value:n.formatMessage(x.Z.lastSeen),style:{marginLeft:"20px"}}],o=["hits","critical_hits","important_hits","moderate_hits","low_hits"],i=(0,l.Z)(r.map((function(e){var t=new Date(e.last_seen).toUTCString().split(" "),r=(0,f.Z)(t,5),n=r[1],s=r[2],i=r[3],c=r[4],u="".concat(n," ").concat(s," ").concat(i,", ").concat(c.split(":").slice(0,2).join(":")," UTC");return[a().createElement(w.xv,{key:e.system_uuid,style:_.nameColumn},a().createElement(w.rU,{style:_.link,src:"".concat(d.eR,"/insights/advisor/systems/").concat(e.system_uuid,"/")},e.display_name))].concat((0,l.Z)(o.map((function(t){return n=(r={style:{width:"10px"},value:e[t]}).value,s=r.style,a().createElement(w.xv,{style:s},n);var r,n,s}))),[a().createElement(w.xv,{key:e.last_seen,style:{width:"100px"}},"".concat(u))])})));return a().createElement(a().Fragment,{key:t},a().createElement(j.sg,null,a().createElement(j.iA,{withHeader:!0,rows:[s.map((function(e){return r=(t=e).value,n=t.style,a().createElement(w.xv,{style:k(k(k({},n),_.header),_.bold)},r);var t,r,n}))].concat((0,l.Z)(i))})))};S.propTypes={systems:P().object,page:P().number,intl:P().any};var D=function(e){var t=e.systemsTotal,r=e.systems,n=e.filters,s=e.tags,o=e.intl;return delete n.offset,delete n.limit,a().createElement(a().Fragment,{key:"".concat(o.formatMessage(x.Z.insightsHeader),": ").concat(o.formatMessage(x.Z.systems))},a().createElement(w.xv,{key:"sys-count",style:_.text},o.formatMessage(x.Z.sysTableCount,{systems:a().createElement(w.xv,{key:"sys-count-count",style:_.bold},o.formatMessage(x.Z.execReportHeaderSystems,{systems:t}),t>1e3&&o.formatMessage(x.Z.dueTo))})),a().createElement(w.xv,{key:"sys-filters",style:_.text},o.formatMessage(x.Z.filtersApplied)),a().createElement(w.xv,{key:"sys-filters-values",style:_.bold},Object.entries(n).map((function(e){return a().createElement(w.xv,{key:e},"".concat(e[0],": ").concat(e[1],"     "))}))),a().createElement(w.xv,{key:"sys-tags",style:_.text},o.formatMessage(x.Z.tagsApplied)),a().createElement(w.xv,{key:"sys-tags-values",style:_.bold},s?decodeURIComponent(s):o.formatMessage(x.Z.noTags)),a().createElement(j.$0,{key:"systems",title:"Systems"},a().createElement(S,{systems:r,intl:o})))};D.propTypes={systems:P().object,systemsTotal:P().number,filters:P().object,tags:P().array,intl:P().any};var T=r(86896);function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=function(e){var t=e.filters,r=(0,T.Z)(),n=(0,o.useState)(!1),s=(0,f.Z)(n,2),c=s[0],u=s[1],p=(0,g.useSelector)((function(e){var t=e.AdvisorStore;return null==t?void 0:t.selectedTags})),y=(0,g.useSelector)((function(e){var t=e.AdvisorStore;return null==t?void 0:t.workloads})),b=(0,g.useSelector)((function(e){var t=e.AdvisorStore;return null==t?void 0:t.SID})),O=function(){var e=(0,i.Z)(m().mark((function e(){var n,s,o,i;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),n=(null==p?void 0:p.length)&&{tags:p},y&&(n=C(C({},n),(0,v.s0)(y,b))),e.next=5,(0,h.dX)("".concat(d._n,"/export/systems/"),{},C(C({},t),n));case 5:return s=e.sent.data,o=D({systemsTotal:null==s?void 0:s.length,systems:s.slice(0,18),filters:t,tags:p,intl:r}),i=s.slice(18,982).reduce((function(e,t,r){var n=Math.floor(r/31);return!e[n]&&(e[n]=[]),e[n].push(t),e}),[]),u(!1),e.abrupt("return",[o].concat((0,l.Z)(i.map((function(e,t){return a().createElement(S,{key:t,page:t,systems:e,intl:r})})))));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a().createElement(j.o6,{groupName:r.formatMessage(x.Z.redHatInsights),allPagesHaveTitle:!1,label:c?r.formatMessage(x.Z.loading):r.formatMessage(x.Z.exportPdf),asyncFunction:O,buttonProps:C({variant:"",component:"button",className:"pf-c-dropdown__menu-item adv-c-dropdown-systems-pdf__menu-item"},c?{isDisabled:!0}:null),reportName:"".concat(r.formatMessage(x.Z.insightsHeader),":"),type:r.formatMessage(x.Z.systems),fileName:"Advisor_systems--".concat((new Date).toUTCString().replace(/ /g,"-"),".pdf"),size:[841.89,595.28]})};N.propTypes={filters:P().object,systemsCount:P().number};const U=N;var I=r(58921),F=r(46655),A=r(41131),H=r(28672),L=r(62012),R=r(43707),W=r(75106),V=r(9947),q=r(68340),B=r(68774),G=r(38779),z=r(52643);const Y=function(){return a().createElement(z.b,null,a().createElement(V.u,{variant:V.I.full},a().createElement(G.D,{headingLevel:"h2",size:"lg"},"No matching systems found"),a().createElement(W.B,null,a().createElement(B.D,null,a().createElement(q.x,{component:q.q.p},"To continue, edit your filter settings and search again.")))))};var J=r(54025),X=r(92397),$=r(7732),K=r(46818),Q=r(87516),ee=r(58016);function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ne=["tags"];function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const ae=function(){var e,t=(0,T.Z)(),r=(0,g.useDispatch)(),n=(0,g.useStore)(),s=(0,J.useLoadModule)({appName:"inventory",scope:"inventory",module:"./OsFilterHelpers"}),p=(0,f.Z)(s,1)[0],j=(p=void 0===p?{}:p).toGroupSelectionValue,w=p.buildOSFilterConfig,Z=(0,L.useLocation)().search,P=(0,g.useSelector)((function(e){return e.filters.selectedTags})),E=(0,g.useSelector)((function(e){return e.filters.workloads})),k=(0,g.useSelector)((function(e){return e.filters.SID})),_=(0,g.useSelector)((function(e){return e.filters.sysState})),S=(0,g.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.operatingSystems)||[]})),D=function(e){return r((0,H.pu)(e))},M=(0,R.TE)("advisor",d.Gd.export).hasAccess,C=(0,o.useState)(!0),N=(0,f.Z)(C,2),W=N[0],V=N[1],q=function(e){var t=oe(oe({},_),{},{offset:0});delete t[e],"hits"===e&&void 0===t.hits&&(t.hits=["yes"]),D(t)},B=function(e,t){"hits"===e&&t.length>1&&t.includes("yes")&&t.shift();var r=e===d.Ut.rhel_version.urlParam?Object.values(t||{}).flatMap((function(e){return Object.keys(e)})):t;r.length>0?D(oe(oe({},_),{},{offset:0},(0,u.Z)({},e,r))):q(e)},G=[{label:d.Ut.hits.title.toLowerCase(),type:d.Ut.hits.type,id:d.Ut.hits.urlParam,value:"checkbox-".concat(d.Ut.hits.urlParam),filterValues:{key:"".concat(d.Ut.hits.urlParam,"-filter"),onChange:function(e,t){return B(d.Ut.hits.urlParam,t)},value:_.hits,items:d.Ut.hits.values}},{label:d.Ut.incident.title.toLowerCase(),type:d.Ut.incident.type,id:d.Ut.incident.urlParam,value:"checkbox-".concat(d.Ut.incident.urlParam),filterValues:{key:"".concat(d.Ut.incident.urlParam,"-filter"),onChange:function(e,t){B(d.Ut.incident.urlParam,t)},value:_.incident,items:d.Ut.incident.values}}].concat((0,l.Z)(w?[w({label:d.Ut.rhel_version.title.toLowerCase(),type:d.Ut.rhel_version.type,id:d.Ut.rhel_version.urlParam,value:j(_.rhel_version||[]),onChange:function(e,t){return B(d.Ut.rhel_version.urlParam,t)}},S)]:[])),z={deleteTitle:t.formatMessage(x.Z.resetFilters),filters:(e=oe({},_),e.hits&&e.hits.includes("yes")&&delete e.hits,delete e.sort,delete e.offset,delete e.limit,(0,v.yK)(e,d.Ut)),onDelete:function(e,t,r){r?D({sort:_.sort,limit:_.limit,offset:_.offset,hits:["all"],tags:P}):t.map((function(e){var t=(0,u.Z)({},e.urlParam,Array.isArray(_[e.urlParam])?_[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?D(oe(oe({},_),t)):q(e.urlParam)}))}},te=function(e){var t=e.display_name,r=e.hits,n=oe(oe(oe({},e),t&&{display_name:t}),r&&{hits:r});(0,v.Y4)(n,P)},se=function(e){return[{title:e.formatMessage(x.Z.name),key:"display_name",transforms:[$.p,K.WT],props:{isStatic:!0},renderFunc:function(e,t,r){return a().createElement(a().Fragment,null,a().createElement(X.Z,{key:t,to:"/systems/".concat(r.system_uuid)},"".concat(r.display_name," ")),r.incident_hits>0&&a().createElement(Q.Z,{rule:{tags:"incident"}}))}},{key:"groups",requiresDefault:!0},{key:"tags"},{key:"system_profile",transforms:[$.p,K.WT]},{title:e.formatMessage(x.Z.numberRuleHits),transforms:[$.p,K.WT],key:"hits"},{title:e.formatMessage(x.Z.critical),transforms:[$.p,K.WT],key:"critical_hits"},{title:e.formatMessage(x.Z.important),transforms:[$.p,K.WT],key:"important_hits"},{title:e.formatMessage(x.Z.moderate),transforms:[$.p,K.WT],key:"moderate_hits"},{title:e.formatMessage(x.Z.low),transforms:[$.p,K.WT],key:"low_hits"},{key:"updated",transforms:[$.p,K.WT],props:{width:20}}]}(t);(0,o.useEffect)((function(){var e;if(Z){var t=(0,v.yG)();t.tags=P,void 0!==t.sort&&(t.sort=t.sort[0]),void 0!==t.display_name&&(t.display_name=t.display_name[0]),void 0===t.hits&&(t.hits=["all"]),void 0===t.offset||isNaN(t.offset)?t.offset=0:t.offset=Number(t.offset[0]),void 0===t.limit||isNaN(t.limit)?t.limit=20:t.limit=Number(t.limit[0]),e=oe(oe({},_),t),void 0!==t.incident&&!Array.isArray(t.incident)&&(t.incident=["".concat(t.incident)]),D(e)}else void 0!==_.limit&&void 0!==_.offset&&void 0!==_.hits||(e=oe(oe({},_),{},{offset:0,limit:20,hits:["all"],tags:P}),D(e));V(!1),(0,v.Y4)(e,P)}),[P]);var ae=(0,o.useMemo)((function(){var e=(0,v.qW)(_);return e.tags,(0,c.Z)(e,ne)}),[_]);return!W&&a().createElement(b.Z,{hideFilters:{all:!0,name:!1,tags:!1,hostGroupFilter:!1},initialLoading:!0,autoRefresh:!0,showTags:!0,disableDefaultColumns:!0,customFilters:{advisorFilters:_,workloads:E,SID:k,selectedTags:P},columns:function(e){return function(e,t){return t.map((function(t){var r=e.find((function(e){return e.key===t.key}));return t.requiresDefault&&void 0===r?void 0:re(re({},t),r)})).filter(Boolean)}(e,se)},onLoad:function(e){var t=e.mergeWithEntities,r=e.INVENTORY_ACTION_TYPES,s=e.mergeWithDetail;n.replaceReducer((0,A.U)(oe(oe({},t((0,F.V)([],r),{page:Number(_.offset/_.limit+1||1),perPage:Number(_.limit||20)})),s())))},getEntities:function(){var e=(0,i.Z)(m().mark((function e(t,r,n,s){var o,a,i,c,l,u,f,p,y,g,b,O,j;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.per_page,i=r.page,c=r.orderBy,l=r.orderDirection,u=r.advisorFilters,f=r.filters,p=r.workloads,y=r.SID,g="".concat("ASC"===l?"":"-").concat(("updated"===c?"last_seen":"operating_system"===c&&"rhel_version")||c),b=(0,ee.J)(u,i,a,g,null,f,P,p,y,!0),e.next=5,(0,h.dX)(d.Vo,{},b);case 5:if(e.t1=o=e.sent,e.t0=null===e.t1,e.t0){e.next=9;break}e.t0=void 0===o;case 9:if(!e.t0){e.next=13;break}e.t2=void 0,e.next=14;break;case 13:e.t2=o.data;case 14:return O=e.t2,te(b),e.next=18,s(O.data.map((function(e){return e.system_uuid})),{per_page:a,hasItems:!0,fields:{system_profile:["operating_system"]}},n);case 18:return j=e.sent,e.abrupt("return",Promise.resolve({results:(0,v.E9)(O.data,j.results),total:O.meta.count}));case 20:case"end":return e.stop()}}),e)})));return function(t,r,n,s){return e.apply(this,arguments)}}(),tableProps:{isStickyHeader:!0,variant:y.B.compact},isFullView:!0,hasCheckbox:!1,filterConfig:{items:G},activeFiltersConfig:z,noSystemsTable:Y,exportConfig:{onSelect:function(e,t){return(0,I.Z)("systems",t,_,P,E,k,r)},extraItems:[a().createElement("li",{key:"download-pd",role:"menuitem"},a().createElement(U,{filters:ae}))],isDisabled:!M,tooltipText:M?t.formatMessage(x.Z.exportData):t.formatMessage(x.Z.permsAction)},fallback:O.Z})};var ie=r(55140),ce=function(){var e=(0,T.Z)(),t=(0,ie.Z)();return(0,o.useEffect)((function(){t.updateDocumentTitle(e.formatMessage(x.Z.documentTitle,{subnav:x.Z.systems.defaultMessage}))}),[t,e]),a().createElement(a().Fragment,null,a().createElement(n.Z,null,a().createElement(s.Z,{title:"".concat(e.formatMessage(x.Z.insightsHeader)," ").concat(e.formatMessage(x.Z.systems).toLowerCase())})),a().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section"},a().createElement(ae,null)))};ce.displayName="systems-list";const le=ce},45467:()=>{},11452:()=>{},34946:()=>{},80598:()=>{},10108:()=>{},21064:()=>{},82014:()=>{},67761:()=>{},49854:()=>{},42480:()=>{},19527:()=>{},69331:()=>{},52361:()=>{},94616:()=>{}}]);
//# sourceMappingURL=../sourcemaps/List.a64754bbec0ec1237f1335b6c4752f42.js.map