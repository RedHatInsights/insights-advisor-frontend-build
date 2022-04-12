"use strict";(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[993],{71712:(e,t)=>{t.tK={name:"--pf-global--link--Color",value:"#2b9af3",var:"var(--pf-global--link--Color)"},t.ZP=t.tK},32412:(e,t)=>{t._p={name:"--pf-global--spacer--md",value:"1rem",var:"var(--pf-global--spacer--md)"},t.ZP=t._p},67265:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(75418),a=r.n(n);const s=function(e){var t=e.component,r=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["component"]);return(0,n.useEffect)((function(){console.error("Unable to load inventory component. Failed to load ".concat(t,"."),r)}),[]),a().createElement("div",null,a().createElement("h1",null,"Unable to load inventory component"),a().createElement("h2",null,"Failed to load ",t),a().createElement("code",null,"More info can be found in browser console output."))}},33739:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(75418),a=r.n(n),s=r(45697),o=r.n(s),i=r(38106),l=r(4874),c=r(28216),u=r(56336),f=r(67265),m=r(94184),p=r.n(m),d=function(){return(d=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},y=function(e){var t=(0,l.useHistory)(),r=(0,c.useStore)(),s=e.component;return a().createElement(s,{className:p()(e.className,"inventory")},a().createElement(n.Suspense,{fallback:e.fallback},a().createElement(i.ScalprumComponent,d({history:t,store:r,appName:"inventory",module:"./InventoryTable",scope:"inventory",ErrorComponent:a().createElement(f.Z,d({component:"InventoryDetailHead",history:t,store:r},e)),ref:e.innerRef},e))))};y.propTypes={fallback:o().node,innerRef:o().object,component:o().string,className:o().string};var v=a().forwardRef((function(e,t){return a().createElement(y,d({innerRef:t},e))}));v.propTypes={fallback:o().node,component:o().string,className:o().string},v.defaultProps={fallback:a().createElement(u.Bullseye,{className:"pf-u-p-lg"},a().createElement(u.Spinner,{size:"xl"})),component:"section"};const g=v},58921:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(4942),a=r(15861),s=r(87757),o=r.n(s),i=r(53446),l=r(35240),c=r(59303),u=r(71094),f=r(97109);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t={date:(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc"};return"Insights-Advisor_".concat(e,"--").concat(t.date)};const y=function(){var e=(0,a.Z)(o().mark((function e(t,r,n,a,s,m,y){var v,g,b;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v=(null==a?void 0:a.length)&&{tags:a},s&&(v=p(p({},v),(0,f.s0)(s,m))),y((0,i.addNotification)(c.LH.pending)),e.next=6,(0,u.dX)("".concat(c._n,"/export/").concat(t,".").concat("json"===r?"json":"csv"),{},p(p({},n),v)).then((function(e){return y((0,i.addNotification)(c.LH.success)),e})).catch((function(){return y((0,i.addNotification)(c.LH.error))}));case 6:g=e.sent.data,b="json"===r?JSON.stringify(g):g,(0,l.Sv)(b,d(t),r),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),"".concat(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,r,n,a,s,o,i){return e.apply(this,arguments)}}()},49659:(e,t,r)=>{r.r(t),r.d(t,{default:()=>$});var n=r(15861),a=r(42982),s=r(4942),o=r(70885),i=r(87757),l=r.n(i),c=r(59303),u=r(75418),f=r.n(u),m=r(92609),p=r(97109),d=r(28216),y=r(71094),v=r(33739),g=r(46891),b=r(3968),h=r(74093),O=r(45697),w=r.n(O),P=r(51634),Z=r(39080),j=r(87119),k=r(75442),E=r(23992),x=r(71712),S=r(32412),_=r(30893);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D=h.mM.create({bold:{fontWeight:E.default.value},link:{color:x.ZP.value},text:{marginTop:S.ZP.value},nameColumn:{width:"220px"},header:{fontSize:9,color:k.ZP.value,paddingLeft:Z.ZP.value,paddingBottom:P.ZP.value,paddingTop:j.ZP.value}}),C=function(e){var t=e.page,r=e.systems,n=e.intl,s=[{value:n.formatMessage(_.Z.name),style:D.nameColumn},{value:n.formatMessage(_.Z.recommendations),style:{width:"100px",textAlign:"center"}},{value:n.formatMessage(_.Z.critical),style:{width:"70px",textAlign:"center"}},{value:n.formatMessage(_.Z.important),style:{width:"70px",textAlign:"center"}},{value:n.formatMessage(_.Z.moderate),style:{width:"60px",textAlign:"center"}},{value:n.formatMessage(_.Z.low),style:{width:"90px",textAlign:"center"}},{value:n.formatMessage(_.Z.lastSeen),style:{marginLeft:"20px"}}],i=["hits","critical_hits","important_hits","moderate_hits","low_hits"],l=(0,a.Z)(r.map((function(e){var t=new Date(e.last_seen).toUTCString().split(" "),r=(0,o.Z)(t,5),n=r[1],s=r[2],l=r[3],u=r[4],m="".concat(n," ").concat(s," ").concat(l,", ").concat(u.split(":").slice(0,2).join(":")," UTC");return[f().createElement(h.xv,{key:e.system_uuid,style:D.nameColumn},f().createElement(h.rU,{style:D.link,src:"".concat(c.eR,"/insights/advisor/systems/").concat(e.system_uuid,"/")},e.display_name))].concat((0,a.Z)(i.map((function(t){return n=(r={style:{width:"10px"},value:e[t]}).value,a=r.style,f().createElement(h.xv,{style:a},n);var r,n,a}))),[f().createElement(h.xv,{key:e.last_seen,style:{width:"100px"}},"".concat(m))])})));return f().createElement(f().Fragment,{key:t},f().createElement(b.sg,null,f().createElement(b.iA,{withHeader:!0,rows:[s.map((function(e){return r=(t=e).value,n=t.style,f().createElement(h.xv,{style:M(M(M({},n),D.header),D.bold)},r);var t,r,n}))].concat((0,a.Z)(l))})))};C.propTypes={systems:w().object,page:w().number,intl:w().any};var U=function(e){var t=e.systemsTotal,r=e.systems,n=e.filters,a=e.tags,s=e.intl;return delete n.offset,delete n.limit,f().createElement(f().Fragment,{key:"".concat(s.formatMessage(_.Z.insightsHeader),": ").concat(s.formatMessage(_.Z.systems))},f().createElement(h.xv,{key:"sys-count",style:D.text},s.formatMessage(_.Z.sysTableCount,{systems:f().createElement(h.xv,{key:"sys-count-count",style:D.bold},s.formatMessage(_.Z.execReportHeaderSystems,{systems:t}),t>1e3&&s.formatMessage(_.Z.dueTo))})),f().createElement(h.xv,{key:"sys-filters",style:D.text},s.formatMessage(_.Z.filtersApplied)),f().createElement(h.xv,{key:"sys-filters-values",style:D.bold},Object.entries(n).map((function(e){return f().createElement(h.xv,{key:e},"".concat(e[0],": ").concat(e[1],"     "))}))),f().createElement(h.xv,{key:"sys-tags",style:D.text},s.formatMessage(_.Z.tagsApplied)),f().createElement(h.xv,{key:"sys-tags-values",style:D.bold},a?decodeURIComponent(a):s.formatMessage(_.Z.noTags)),f().createElement(b.$0,{key:"systems",title:"Systems"},C({systems:r,intl:s})))};U.propTypes={systems:w().object,systemsTotal:w().number,filters:w().object,tags:w().array,intl:w().any};var N=r(86896);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=function(e){var t=e.filters,r=(0,N.Z)(),s=(0,u.useState)(!1),i=(0,o.Z)(s,2),m=i[0],v=i[1],g=(0,d.useSelector)((function(e){var t=e.AdvisorStore;return null==t?void 0:t.selectedTags})),h=(0,d.useSelector)((function(e){var t=e.AdvisorStore;return null==t?void 0:t.workloads})),O=(0,d.useSelector)((function(e){var t=e.AdvisorStore;return null==t?void 0:t.SID})),w=function(){var e=(0,n.Z)(l().mark((function e(){var n,s,o,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),n=(null==g?void 0:g.length)&&{tags:g},h&&(n=F(F({},n),(0,p.s0)(h,O))),e.next=5,(0,y.dX)("".concat(c._n,"/export/systems/"),{},F(F({},t),n));case 5:return s=e.sent.data,o=U({systemsTotal:null==s?void 0:s.length,systems:s.slice(0,18),filters:t,tags:g,intl:r}),i=s.slice(18,982).reduce((function(e,t,r){var n=Math.floor(r/31);return!e[n]&&(e[n]=[]),e[n].push(t),e}),[]),v(!1),e.abrupt("return",[o].concat((0,a.Z)(i.map((function(e,t){return C({page:t,systems:e,intl:r})})))));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.useMemo)((function(){return f().createElement(b.o6,{groupName:r.formatMessage(_.Z.redHatInsights),allPagesHaveTitle:!1,label:m?r.formatMessage(_.Z.loading):r.formatMessage(_.Z.exportPdf),asyncFunction:w,buttonProps:F({variant:"",component:"button",className:"pf-c-dropdown__menu-item adv-c-dropdown-systems-pdf__menu-item"},m?{isDisabled:!0}:null),reportName:"".concat(r.formatMessage(_.Z.insightsHeader),":"),type:r.formatMessage(_.Z.systems),fileName:"Advisor_systems--".concat((new Date).toUTCString().replace(/ /g,"-"),".pdf"),size:[841.89,595.28]})}),[m])};I.propTypes={filters:w().object,systemsCount:w().number};const H=I;var L=r(58921),R=r(46655),V=r(41131),B=r(28672),W=r(4874),z=r(43707),Y=r(56336);const G=function(){return f().createElement(Y.Bullseye,null,f().createElement(Y.EmptyState,{variant:Y.EmptyStateVariant.full},f().createElement(Y.Title,{headingLevel:"h2",size:"lg",style:{fontWeight:"bold"}},"No matching systems found"),f().createElement(Y.EmptyStateBody,null,f().createElement(Y.TextContent,null,f().createElement(Y.Text,{component:Y.TextVariants.p},"To continue, edit your filter settings and search again.")))))};var K=r(38106),X=r(87516);function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const $=function(){var e,t=(0,N.Z)(),r=(0,d.useDispatch)(),i=(0,d.useStore)(),b=(0,K.useLoadModule)({appName:"inventory",scope:"inventory",module:"./OsFilterHelpers"}),h=(0,o.Z)(b,1)[0],O=(h=void 0===h?{}:h).toGroupSelectionValue,w=h.buildOSFilterConfig,P=(0,W.useLocation)().search,Z=(0,d.useSelector)((function(e){return e.filters.selectedTags})),j=(0,d.useSelector)((function(e){return e.filters.workloads})),k=(0,d.useSelector)((function(e){return e.filters.SID})),E=(0,d.useSelector)((function(e){return e.filters.sysState})),x=function(e){return r((0,B.pu)(e))},S=(0,z.T)("advisor",c.Gd.export).hasAccess,T=(0,u.useState)(!0),M=(0,o.Z)(T,2),D=M[0],C=M[1],U=function(e){var t=J(J({},E),{},{offset:0});delete t[e],"hits"===e&&void 0===t.hits&&(t.hits=["yes"]),x(t)},A=function(e,t){"hits"===e&&t.length>1&&t.includes("yes")&&t.shift();var r=e===c.Ut.rhel_version.urlParam?Object.values(t||{}).flatMap((function(e){return Object.keys(e)})):t;r.length>0?x(J(J({},E),{},{offset:0},(0,s.Z)({},e,r))):U(e)},F=[{label:c.Ut.hits.title.toLowerCase(),type:c.Ut.hits.type,id:c.Ut.hits.urlParam,value:"checkbox-".concat(c.Ut.hits.urlParam),filterValues:{key:"".concat(c.Ut.hits.urlParam,"-filter"),onChange:function(e,t){return A(c.Ut.hits.urlParam,t)},value:E.hits,items:c.Ut.hits.values}},{label:c.Ut.incident.title.toLowerCase(),type:c.Ut.incident.type,id:c.Ut.incident.urlParam,value:"checkbox-".concat(c.Ut.incident.urlParam),filterValues:{key:"".concat(c.Ut.incident.urlParam,"-filter"),onChange:function(e,t){A(c.Ut.incident.urlParam,t)},value:E.incident,items:c.Ut.incident.values}}].concat((0,a.Z)(w?[w({label:c.Ut.rhel_version.title.toLowerCase(),type:c.Ut.rhel_version.type,id:c.Ut.rhel_version.urlParam,value:O(E.rhel_version||[]),onChange:function(e,t){return A(c.Ut.rhel_version.urlParam,t)}})]:[])),I={deleteTitle:t.formatMessage(_.Z.resetFilters),filters:(e=J({},E),e.hits&&e.hits.includes("yes")&&delete e.hits,delete e.sort,delete e.offset,delete e.limit,(0,p.yK)(e,c.Ut)),onDelete:function(e,t,r){r?x({sort:E.sort,limit:E.limit,offset:E.offset,hits:["all"]}):t.map((function(e){var t=(0,s.Z)({},e.urlParam,Array.isArray(E[e.urlParam])?E[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?x(J(J({},E),t)):U(e.urlParam)}))}},Y=function(e){var t=e.display_name,r=e.hits,n=J(J(J({},e),t&&{display_name:t}),r&&{hits:r});(0,p.Y4)(n,Z)},q=function(e){return[{title:e.formatMessage(_.Z.name),key:"display_name",transforms:[m.sortable,m.wrappable],props:{isStatic:!0},renderFunc:function(e,t,r){return f().createElement(f().Fragment,null,f().createElement(W.Link,{key:t,to:"/systems/".concat(r.system_uuid)},"".concat(r.display_name," ")),r.incident_hits>0&&f().createElement(X.Z,{rule:{tags:"incident"}}))}},{key:"tags"},{key:"system_profile",transforms:[m.sortable,m.wrappable]},{title:e.formatMessage(_.Z.numberRuleHits),transforms:[m.sortable,m.wrappable],key:"hits"},{title:e.formatMessage(_.Z.critical),transforms:[m.sortable,m.wrappable],key:"critical_hits"},{title:e.formatMessage(_.Z.important),transforms:[m.sortable,m.wrappable],key:"important_hits"},{title:e.formatMessage(_.Z.moderate),transforms:[m.sortable,m.wrappable],key:"moderate_hits"},{title:e.formatMessage(_.Z.low),transforms:[m.sortable,m.wrappable],key:"low_hits"},{key:"updated",transforms:[m.sortable,m.wrappable],props:{width:20}}]}(t);return(0,u.useEffect)((function(){var e;if(P){var t=(0,p.yG)();delete t.tags,void 0!==t.sort&&(t.sort=t.sort[0]),void 0!==t.display_name&&(t.display_name=t.display_name[0]),void 0===t.hits&&(t.hits=["all"]),void 0===t.offset||isNaN(t.offset)?t.offset=0:t.offset=Number(t.offset[0]),void 0===t.limit||isNaN(t.limit)?t.limit=20:t.limit=Number(t.limit[0]),e=J(J({},E),t),void 0!==t.incident&&!Array.isArray(t.incident)&&(t.incident=["".concat(t.incident)]),x(e)}else void 0!==E.limit&&void 0!==E.offset&&void 0!==E.hits||(e=J(J({},E),{},{offset:0,limit:20,hits:["all"]}),x(e));C(!1),(0,p.Y4)(e,Z)}),[]),!D&&f().createElement(v.Z,{hideFilters:{all:!0,name:!1,tags:!1},initialLoading:!0,autoRefresh:!0,showTags:!0,disableDefaultColumns:!0,customFilters:{advisorFilters:E,selectedTags:Z,workloads:j,SID:k},columns:function(e){return function(e){return q.map((function(t){var r=e.find((function(e){return e.key===t.key}));return J(J({},t),r)}))}(e)},onLoad:function(e){var t=e.mergeWithEntities,r=e.INVENTORY_ACTION_TYPES,n=e.mergeWithDetail;i.replaceReducer((0,V.U)(J(J({},t((0,R.V)([],r),{page:Number(E.offset/E.limit+1||1),perPage:Number(E.limit||20)})),n())))},getEntities:function(){var e=(0,n.Z)(l().mark((function e(t,r,n,a){var s,o,i,u,f,m,d,v,g,b,h,O,w,P,Z,j,k;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m=r.per_page,d=r.page,v=r.orderBy,g=r.orderDirection,b=r.advisorFilters,h=r.filters,O=r.workloads,w=r.SID,P="".concat("ASC"===g?"":"-").concat(("updated"===v?"last_seen":"system_profile"===v&&"rhel_version")||v),Z=J(J(J(J(J({},b),{},{limit:m,offset:d*m-m,sort:P},r.filters.hostnameOrId&&{display_name:null==r||null===(s=r.filters)||void 0===s?void 0:s.hostnameOrId}),Array.isArray(b.incident)&&{incident:null==b||null===(o=b.incident)||void 0===o?void 0:o.join(",")}),Array.isArray(b.rhel_version)&&{rhel_version:null===(i=b.rhel_version)||void 0===i?void 0:i.join(",")}),(null===(u=h.tagFilters)||void 0===u?void 0:u.length)&&(0,p.gh)(h.tagFilters)),O&&(Z=J(J({},Z),(0,p.s0)(O,w))),e.next=6,(0,y.dX)(c.Vo,{},Z);case 6:if(e.t1=f=e.sent,e.t0=null===e.t1,e.t0){e.next=10;break}e.t0=void 0===f;case 10:if(!e.t0){e.next=14;break}e.t2=void 0,e.next=15;break;case 14:e.t2=f.data;case 15:return j=e.t2,Y(Z),e.next=19,a(j.data.map((function(e){return e.system_uuid})),{page:d,per_page:m,hasItems:!0,fields:{system_profile:["operating_system"]}},n);case 19:return k=e.sent,e.abrupt("return",Promise.resolve({results:(0,p.E9)(j.data,k.results),total:j.meta.count}));case 21:case"end":return e.stop()}}),e)})));return function(t,r,n,a){return e.apply(this,arguments)}}(),tableProps:{isStickyHeader:!0,variant:m.TableVariant.compact},isFullView:!0,hasCheckbox:!1,filterConfig:{items:F},activeFiltersConfig:I,noSystemsTable:G,exportConfig:{onSelect:function(e,t){return(0,L.Z)("systems",t,E,Z,j,k,r)},extraItems:[f().createElement("li",{key:"download-pd",role:"menuitem"},f().createElement(H,{filters:J({},(0,p.qW)(E))}))],isDisabled:!S,tooltipText:S?t.formatMessage(_.Z.exportData):t.formatMessage(_.Z.permsAction)},fallback:g.Z})}}}]);