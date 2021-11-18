"use strict";(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[909],{40771:(e,t,r)=>{r.d(t,{Z:()=>T});var n=r(4942),a=r(15861),s=r(29439),o=r(87757),i=r.n(o),l=r(59303),c=r(93264),u=r.n(c),d=r(27577),f=r(97109),p=r(28216),m=r(61829),v=r(44788),b=r(71094),g=r(33739),h=r(46891),y=r(45697),_=r.n(y),k=r(98132),x=r(30893),w=r(71355),Z=r(46655),P=r(41131),O=r(86896),S=r(58921);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=function(e){var t,r,o,y,_,C,E,T=e.tableProps,j=e.rule,I=e.afterDisableFn,M=e.pathway,U=e.selectedTags,F=e.workloads,N=e.SID,A=e.permsExport,R=e.exportTable,V=(0,p.useStore)(),X=(0,O.Z)(),L=(0,p.useDispatch)(),Y=(0,c.useState)([]),J=(0,s.Z)(Y,2),W=J[0],z=J[1],B=(0,c.useState)({limit:20,offset:0,sort:"-last_seen",name:""}),K=(0,s.Z)(B,2),q=K[0],G=K[1],H=(0,p.useSelector)((function(e){return e.entities||{}})),Q=function(e,t){return L({type:"SELECT_ENTITY",payload:{id:e,selected:t}})},$=function(e){return L((0,w.wN)(e))},ee=(0,c.useState)(!1),te=(0,s.Z)(ee,2),re=te[0],ne=te[1],ae=(0,c.useState)(),se=(0,s.Z)(ae,2),oe=se[0],ie=se[1],le=function(){var e=(0,a.Z)(i().mark((function e(){var t,r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!M){e.next=17;break}return e.next=3,(0,b.dX)("".concat(l._n,"/pathway/").concat(encodeURI(M.slug),"/rules/"),{},{});case 3:if(e.t1=t=e.sent,e.t0=null===e.t1,e.t0){e.next=7;break}e.t0=void 0===t;case 7:if(!e.t0){e.next=11;break}e.t2=void 0,e.next=12;break;case 11:e.t2=t.data.data;case 12:return r=e.t2,n=r.map((function(e){return{id:"advisor:".concat(e.rule_id),description:e.description}})),e.abrupt("return",{issues:n,systems:W});case 17:return e.abrupt("return",{issues:[{id:"advisor:".concat(j.rule_id),description:j.description}],systems:W});case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(e){ne(e)},ue=function(){ie(!0),Q(0,!0)},de=function(){var e;return oe?ie(!1):z(null==H||null===(e=H.rows)||void 0===e?void 0:e.filter((function(e){return!0===e.selected})).map((function(e){return e.id})))},fe=function(e){var t=e.name,r=e.display_name,n=D(D(D({},e),t&&{name:t}),r&&{display_name:r});!M&&(0,f.Y4)(n,U)},pe=function(e){var t=D(D({},q),{},{offset:0});delete t[e],G(t)},me=[{label:l.Ut.rhel_version.title.toLowerCase(),type:l.Ut.rhel_version.type,id:l.Ut.rhel_version.urlParam,value:"checkbox-".concat(l.Ut.rhel_version.urlParam),filterValues:{key:"".concat(l.Ut.rhel_version.urlParam,"-filter"),onChange:function(e,t){!function(e,t){t.length>0?G(D(D({},q),{},{offset:0},(0,n.Z)({},e,t))):pe(e)}(l.Ut.rhel_version.urlParam,t)},value:q.rhel_version,items:l.Ut.rhel_version.values}}],ve={deleteTitle:X.formatMessage(x.Z.resetFilters),filters:(C=D({},q),delete C.sort,delete C.offset,delete C.limit,(0,f.yK)(C,l.Ut)),onDelete:function(e,t,r){r?G({sort:q.sort,limit:q.limit,offset:q.offset}):t.map((function(e){var t=(0,n.Z)({},e.urlParam,Array.isArray(q[e.urlParam])?q[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?G(D(D({},q),t)):pe(e.urlParam)}))}};return(0,c.useEffect)((function(){var e;(null==H||null===(e=H.rows)||void 0===e?void 0:e.length)&&de(H.rows)}),[null==H?void 0:H.rows]),u().createElement(u().Fragment,null,re&&u().createElement(v.Z,{handleModalToggle:ce,isModalOpen:re,rule:j,afterFn:I,hosts:W}),u().createElement(g.Z,{hasCheckbox:!0,initialLoading:!0,autoRefresh:!0,hideFilters:{all:!0,name:!1},filterConfig:{items:me},activeFiltersConfig:ve,columns:function(e){return function(e){var t=e.filter((function(e){return"updated"===e.key})),r=e.filter((function(e){return"display_name"===e.key})),n=e.filter((function(e){return"system_profile"===e.key}));return r=D(D({},r[0]),{},{transforms:[d.sortable,d.wrappable],props:{isStatic:!0}}),t=D(D({},t[0]),{},{transforms:[d.sortable,d.wrappable],props:{width:20}}),[r,n=D(D({},n[0]),{},{transforms:[d.wrappable]}),t]}(e)},tableProps:D({variant:d.TableVariant.compact},T),customFilters:{advisorFilters:q,selectedTags:U,workloads:F,SID:N},getEntities:function(){var e=(0,a.Z)(i().mark((function e(t,r,n,a){var s,o,c,u,d,p,m,v,g,h,y,_,k,x,w,Z,P;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p=r.per_page,m=r.page,v=r.orderBy,g=r.orderDirection,h=r.advisorFilters,y=r.selectedTags,_=r.workloads,k=r.SID,x="".concat("ASC"===g?"":"-").concat("updated"===v?"last_seen":v),w=D(D(D(D(D({},h),{},{limit:p,offset:m*p-p,sort:x},r.filters.hostnameOrId&&!M&&{name:null==r||null===(s=r.filters)||void 0===s?void 0:s.hostnameOrId}),r.filters.hostnameOrId&&M&&{display_name:null==r||null===(o=r.filters)||void 0===o?void 0:o.hostnameOrId}),(null==y?void 0:y.length)&&{tags:y}),Array.isArray(h.rhel_version)&&{rhel_version:null===(c=h.rhel_version)||void 0===c?void 0:c.join(",")}),_&&(w=D(D({},w),(0,f.s0)(_,k))),fe(w),!M){e.next=20;break}return e.next=8,(0,b.dX)("".concat(l.Vo),{},D(D({},w),{},{pathway:M.slug}));case 8:if(e.t2=u=e.sent,e.t1=null===e.t2,e.t1){e.next=12;break}e.t1=void 0===u;case 12:if(!e.t1){e.next=16;break}e.t3=void 0,e.next=17;break;case 16:e.t3=u.data;case 17:e.t0=e.t3,e.next=32;break;case 20:return e.next=22,(0,b.dX)("".concat(l.cJ).concat(encodeURI(j.rule_id),"/systems_detail/"),{},w);case 22:if(e.t5=d=e.sent,e.t4=null===e.t5,e.t4){e.next=26;break}e.t4=void 0===d;case 26:if(!e.t4){e.next=30;break}e.t6=void 0,e.next=31;break;case 30:e.t6=d.data;case 31:e.t0=e.t6;case 32:return Z=e.t0,e.next=35,a(Z.data.map((function(e){return e.system_uuid})),{page:m,per_page:p,hasItems:!0,fields:{system_profile:["operating_system"]}},n);case 35:return P=e.sent,e.abrupt("return",Promise.resolve({results:(0,f.E9)(Z.data,P.results),total:Z.meta.count}));case 37:case"end":return e.stop()}}),e)})));return function(t,r,n,a){return e.apply(this,arguments)}}(),dedicatedAction:u().createElement(k.Z,{key:"remediation-button",isDisabled:0===W.length||!M&&0===(null==j?void 0:j.playbook_count),dataProvider:le,onRemediationCreated:function(e){return function(e){Q(-1,!1);try{e.remediation&&$(e.getNotification())}catch(e){$({variant:"danger",dismissable:!0,title:X.formatMessage(x.Z.error),description:"".concat(e)})}}(e)}},u().createElement(m.ZP,{size:"sm",className:"ins-c-background__default"})," ",X.formatMessage(x.Z.remediate)),actionsConfig:{actions:["",{label:X.formatMessage(x.Z.disableRuleForSystems),props:{isDisabled:0===W.length},onClick:function(){return ce(!0)}}]},bulkSelect:{count:W.length,items:[{title:X.formatMessage(x.Z.selectNone),onClick:function(){Q(-1,!1)}},D({},(null==H||null===(t=H.rows)||void 0===t?void 0:t.length)>q.limit?{title:X.formatMessage(x.Z.selectPage,{items:q.limit}),onClick:function(){Q(0,!0)}}:{}),D({},(null==H||null===(r=H.rows)||void 0===r?void 0:r.length)>0?{title:X.formatMessage(x.Z.selectAll,{items:(null==H?void 0:H.total)||0}),onClick:(E=(0,a.Z)(i().mark((function e(){var t,r,n,a,s,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.error(M),!M){e.next=16;break}return e.next=4,(0,b.dX)("".concat(l.Vo),{},{pathway:M.slug,limit:M.impacted_systems_count});case 4:if(e.t2=t=e.sent,e.t1=null===e.t2,e.t1){e.next=8;break}e.t1=void 0===t;case 8:if(!e.t1){e.next=12;break}e.t3=void 0,e.next=13;break;case 12:e.t3=null===(r=t.data)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.map((function(e){return e.system_uuid}));case 13:e.t0=e.t3,e.next=28;break;case 16:return e.next=18,(0,b.dX)("".concat(l.cJ).concat(encodeURI(j.rule_id),"/systems/"),{},{name:q.name});case 18:if(e.t5=a=e.sent,e.t4=null===e.t5,e.t4){e.next=22;break}e.t4=void 0===a;case 22:if(!e.t4){e.next=26;break}e.t6=void 0,e.next=27;break;case 26:e.t6=null===(s=a.data)||void 0===s?void 0:s.host_ids;case 27:e.t0=e.t6;case 28:o=e.t0,console.error(o),z(o),ue();case 32:case"end":return e.stop()}}),e)}))),function(){return E.apply(this,arguments)})}:{})],checked:(W.length===(null==H||null===(o=H.rows)||void 0===o?void 0:o.length)||W.length===(null==H?void 0:H.total))&&(null==H?void 0:H.total)>0?1:W.length===q.limit?null:0,onSelect:function(){W.length>0?Q(-1,!1):ue(),de()}},fallback:h.Z,onLoad:function(e){var t=e.mergeWithEntities,r=e.INVENTORY_ACTION_TYPES,n=e.mergeWithDetail;V.replaceReducer((0,P.U)(D(D({},t((0,Z.V)([],r),{page:Number(q.offset/q.limit+1||1),perPage:Number(q.limit||20)})),n())))},exportConfig:A&&(_={label:X.formatMessage(x.Z.exportCsv)},(0,n.Z)(_,"label",X.formatMessage(x.Z.exportJson)),(0,n.Z)(_,"onSelect",(function(e,t){var r=H.rows.map((function(e){return{display_name:e.display_name,os:"".concat(e.system_profile.operating_system.name," ").concat(e.system_profile.operating_system.major,".").concat(e.system_profile.operating_system.minor),last_seen:e.last_seen}}));return(0,S.Z)(R,t,q,U,F,N,r)})),(0,n.Z)(_,"isDisabled",!A||0===(null==H||null===(y=H.rows)||void 0===y?void 0:y.length)),(0,n.Z)(_,"tooltipText",A?X.formatMessage(x.Z.exportData):X.formatMessage(x.Z.permsAction)),_)}))};E.propTypes={tableProps:_().any,rule:_().object,afterDisableFn:_().func,pathway:_().object,selectedTags:_().any,workloads:_().any,SID:_().any,permsExport:_().bool,exportTable:_().string};const T=E}}]);