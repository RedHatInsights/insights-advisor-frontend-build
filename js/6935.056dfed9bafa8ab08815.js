(self.webpackChunkadvisor=self.webpackChunkadvisor||[]).push([[6935],{58921:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(4942),a=r(15861),o=r(87757),i=r.n(o),s=r(53446),c=r(35240),u=r(59303),l=r(71094),f=r(97109);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(e){var t={date:(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc"};return"Insights-Advisor_".concat(e,"--").concat(t.date)};const v=function(){var e=(0,a.Z)(i().mark((function e(t,r,n,a,o,d,v,b){var g,y,h;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g=(null==a?void 0:a.length)&&{tags:a},o&&(g=p(p({},g),(0,f.s0)(o,d))),v((0,s.addNotification)(u.LH.pending)),e.next=6,(0,l.dX)("".concat(u._n,"/export/").concat(t,".").concat("json"===r?"json":"csv"),{},p(p(p({},n),g),b&&{display_name:b})).then((function(e){return v((0,s.addNotification)(u.LH.success)),e})).catch((function(){return v((0,s.addNotification)(u.LH.error))}));case 6:y=e.sent.data,h="json"===r?JSON.stringify(y):y,(0,c.Sv)(h,m(t),r),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),"".concat(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,r,n,a,o,i,s,c){return e.apply(this,arguments)}}()},92224:(e,t,r)=>{"use strict";r.d(t,{Z:()=>Q});var n=r(87462),a=r(15861),o=r(4942),i=r(70885),s=r(87757),c=r.n(s),u=r(59303),l=r(93264),f=r.n(l),d=r(75863),p=r(7732),m=r(46818),v=r(97109),b=r(28216),g=r(64016),y=r(92397),h=r(44788),O=r(71094),k=r(33739),j=r(45697),w=r.n(j),Z=r(98132),x=r(30893),P=r(71355),S=r(46655),_=r(41131),D=r(86896),E=r(58921),I=r(42982),T=r(13218),F=r.n(T),M=r(44908),C=r.n(M);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var U=function(e){return e.group||"default"},A=function(e){return function(t){return e?t||{}:{default:t||[]}}},L=function(e){var t=e;return Object.entries(e).forEach((function(e){var r=(0,i.Z)(e,2),n=r[0];void 0===r[1]&&delete t[n]})),t},W=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,n=U(r);return L(N(N({},t),{},(0,o.Z)({},n,(null===(e=r.items)||void 0===e?void 0:e.length)>0||F()(r.items)?r.items:void 0)))},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=U(t);return L(N(N({},e),{},(0,o.Z)({},r,t.reset?null==t?void 0:t.items:C()([null==t?void 0:t.item].concat((0,I.Z)(e[r]||[]))))))},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=U(t),n=(e[r]||[]).filter((function(e){return!t.item.includes(e)}));return L(N(N({},e),{},(0,o.Z)({},r,0===n.length?void 0:n)))},z=function(e,t){return(e[U(t)]||[]).includes(t.item)?J(e,t):X(e,t)},G=function(e,t){return A(Object.prototype.hasOwnProperty.call(!e,"default"))(null==t?void 0:t.preselected)},H=function(e){return A(Object.prototype.hasOwnProperty.call(!e,"default"))()};const B=function(e,t){return{set:W,select:X,deselect:J,toggle:z,reset:G,clear:H}[t.type](e,t)};var K=r(37619);const V=function(e){var t,r,n=e.total,o=void 0===n?0:n,s=e.onSelect,u=e.preselected,d=e.itemIdsInTable,p=e.itemIdsOnPage,m=e.identifier,v=void 0===m?"id":m,b=e.isLoading,g=!!s,y=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).withGroups,r=void 0!==t&&t,n=(0,l.useReducer)(B,e,A(r)),a=(0,i.Z)(n,2),o=a[0],s=a[1],c=function(e,t){return s({type:"set",group:t,items:e})},u=function(e,t){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?c(e,t):s({type:"select",group:t,item:e})},f=function(e,t){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?c(e,t):s({type:"deselect",group:t,item:e})};return{set:c,select:u,deselect:f,toggle:function(e,t){return s({type:"toggle",group:t,item:e})},reset:function(){return s({type:"reset",preselected:e})},clear:function(){return s({type:"clear"})},selection:r?o:o.default}}(u||[]),h=y.selection,O=y.set,k=y.select,j=y.deselect,w=y.clear,Z=(h||[]).length,x=p(),P=x.length||o,S=Z===o,_=0===Z,D=0===o,E=0!==(t=Z)&&(t===o||null),T=function(e,t){return 0!==e||t?t?f().createElement(f().Fragment,null,f().createElement(K.$,{size:"sm"}),"     ".concat(e," selected")):"".concat(e," selected"):null}(Z,b),F=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:t=e.sent,S?w():O(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){O(u)}),[JSON.stringify(u)]),g?{selectedIds:h,selectNone:function(){return w()},tableProps:{onSelect:o>0?function(e,t,r,n){return t?k(n[v]):j(n[v])}:void 0,canSelectAll:!1},toolbarProps:{bulkSelect:{toggleProps:T?{children:[T]}:null,isDisabled:D,items:[{title:"Select none",onClick:function(){return w()},props:{isDisabled:_}}].concat((0,I.Z)(p?[{title:"Select page (".concat(P," items)"),onClick:function(){var e,t,r=(null==h?void 0:h.length)>0?(e=h,t=x,Array.from(new Set([].concat((0,I.Z)(e),(0,I.Z)(t))))):x;k(r,void 0,!0)}}]:[]),(0,I.Z)(d?[{title:"".concat((r=S,r?"Unselect":"Select")," all (").concat(o," items)"),onClick:F}]:[])),checked:E,onSelect:(null==h?void 0:h.length)>0?w:F}}}:{}};function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var q=function(e){var t,r,s=e.tableProps,j=e.rule,w=e.afterDisableFn,I=e.pathway,T=e.selectedTags,F=e.workloads,M=e.SID,C=e.permsExport,R=e.exportTable,N=e.showTags,U=(0,b.useStore)(),A=(0,D.Z)(),L=(0,b.useDispatch)(),W=(0,l.useState)({limit:20,offset:0,sort:"-last_seen",name:"","filter[system_profile][host_type][nil]":!0}),X=(0,i.Z)(W,2),J=X[0],z=X[1],G=(0,l.useState)(),H=(0,i.Z)(G,2),B=H[0],Y=H[1],q=(0,l.useState)(0),Q=(0,i.Z)(q,2),ee=Q[0],te=Q[1],re=(0,b.useSelector)((function(e){return e.entities||{}})),ne=function(e){return L((0,P.addNotification)(e))},ae=(0,l.useState)(!1),oe=(0,i.Z)(ae,2),ie=oe[0],se=oe[1],ce=(0,l.useState)([]),ue=(0,i.Z)(ce,2),le=ue[0],fe=ue[1],de=(0,l.useState)({}),pe=(0,i.Z)(de,2),me=pe[0],ve=pe[1],be=(0,l.useState)({}),ge=(0,i.Z)(be,2),ye=ge[0],he=ge[1],Oe=(0,l.useState)(),ke=(0,i.Z)(Oe,2),je=ke[0],we=ke[1],Ze=(0,l.useState)(!1),xe=(0,i.Z)(Ze,2),Pe=xe[0],Se=xe[1],_e=(0,l.useState)(!0),De=(0,i.Z)(_e,2),Ee=De[0],Ie=De[1],Te=(0,l.useState)(-1),Fe=(0,i.Z)(Te,2),Me=Fe[0],Ce=Fe[1],Re=(0,g.uc)((function(e){var t=e.name,r=e.display_name,n=$($($({},e),t&&{name:t}),r&&{display_name:r});!I&&(0,v.Y4)(n,T)}),I,fe,te,Le,Y,B,j),Ne=V({total:ee,onSelect:function(){},itemIdsInTable:(0,g.vk)(B,ee,j,we),itemIdsOnPage:function(){return le||[]},identitfier:"system_uuid",isLoading:je}),Ue=Ne.tableProps,Ae=Ne.toolbarProps,Le=Ne.selectedIds,We=Ne.selectNone;(0,l.useEffect)((function(){L({type:"SELECT_ENTITIES",payload:{selected:Le}}),He()}),[Le]),(0,l.useEffect)((function(){I?Ge():ze()}),[]);var Xe,Je,ze=function(){var e=(0,a.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(Me<0)){e.next=14;break}return e.next=3,(0,O.dX)("".concat(u.cJ).concat(encodeURI(j.rule_id),"/"),{},{name:J.name});case 3:if(e.t1=t=e.sent,e.t0=null===e.t1,e.t0){e.next=7;break}e.t0=void 0===t;case 7:if(!e.t0){e.next=11;break}e.t2=void 0,e.next=12;break;case 11:e.t2=t.data.playbook_count;case 12:r=e.t2,Ce(r);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ge=function(){var e=(0,a.Z)(c().mark((function e(){var t,r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Pe){e.next=29;break}if(!I){e.next=29;break}return e.next=4,(0,O.dX)("".concat(u._n,"/pathway/").concat(encodeURI(I.slug),"/rules/"),{},{});case 4:if(e.t1=t=e.sent,e.t0=null===e.t1,e.t0){e.next=8;break}e.t0=void 0===t;case 8:if(!e.t0){e.next=12;break}e.t2=void 0,e.next=13;break;case 12:e.t2=t.data.data;case 13:return n=e.t2,e.next=16,(0,O.dX)("".concat(u._n,"/pathway/").concat(encodeURI(I.slug),"/reports/"),{},{});case 16:if(e.t4=r=e.sent,e.t3=null===e.t4,e.t3){e.next=20;break}e.t3=void 0===r;case 20:if(!e.t3){e.next=24;break}e.t5=void 0,e.next=25;break;case 24:e.t5=r.data.rules;case 25:a=e.t5,Se(!0),he(a),ve(n);case 29:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),He=function(){var e=!1,t=Object.keys(ye);if((null==Le?void 0:Le.length)<=0||void 0===Le)Ie(!0);else if(I)for(var r=function(r){var n=Le[r];if(e)return"break";t.forEach((function(t){if(ye[t].includes(n)){var r=ye[t];if(me.find((function(e){return e.rule_id=r})).resolution_set[0].has_playbook)return e=!0,Ie(!1)}}))},n=0;n<(null==Le?void 0:Le.length)&&"break"!==r(n);n++);else Me>0&&(null==Le?void 0:Le.length)>0&&Ie(!1)},Be=function(){var e=(0,a.Z)(c().mark((function e(){var t,r,n,a,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!I){e.next=30;break}return e.next=3,(0,O.dX)("".concat(u._n,"/pathway/").concat(encodeURI(I.slug),"/rules/"),{},{});case 3:if(e.t1=t=e.sent,e.t0=null===e.t1,e.t0){e.next=7;break}e.t0=void 0===t;case 7:if(!e.t0){e.next=11;break}e.t2=void 0,e.next=12;break;case 11:e.t2=t.data.data;case 12:return n=e.t2,e.next=15,(0,O.dX)("".concat(u._n,"/pathway/").concat(encodeURI(I.slug),"/reports/"),{},{});case 15:if(e.t4=r=e.sent,e.t3=null===e.t4,e.t3){e.next=19;break}e.t3=void 0===r;case 19:if(!e.t3){e.next=23;break}e.t5=void 0,e.next=24;break;case 23:e.t5=r.data.rules;case 24:return a=e.t5,o=[],n.forEach((function(e){var t=[];a[e.rule_id].forEach((function(e){Le.includes(e)&&t.push(e)})),t.length&&o.push({id:"advisor:".concat(e.rule_id),description:e.description,systems:t})})),e.abrupt("return",{issues:o});case 30:return e.abrupt("return",{issues:[{id:"advisor:".concat(j.rule_id),description:j.description}],systems:Le});case 31:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ke=function(e){se(e)},Ve=(0,l.useCallback)((function(e){var t=e.filter((function(e){return"updated"===e.key})),r=e.filter((function(e){return"display_name"===e.key})),n=e.filter((function(e){return"system_profile"===e.key})),a=e.filter((function(e){return"tags"===e.key})),o=e.filter((function(e){return"groups"===e.key}));r=$($({},r[0]),{},{transforms:[p.p,m.WT],props:{isStatic:!0}},j?{renderFunc:function(e,t){return f().createElement(y.Z,{className:"pf-u-font-size-lg",to:"/recommendations/".concat(j.rule_id,"/").concat(t,"?activeRule=true")},e)}}:{}),t=$($({},t[0]),{},{transforms:[m.WT]}),n=$($({},n[0]),{},{transforms:[m.WT]}),a=$({},a[0]);var i=[r,o=$($({},o[0]),{},{transforms:[m.WT]}),a,n,t];if(!I){var s={key:"impacted_date",title:"First Impacted",sortKey:"impacted_date",transforms:[m.WT],props:{width:15},renderFunc:t.renderFunc};i.push(s),t.props.width=15}return i}),[I,j]),Ye={deleteTitle:A.formatMessage(x.Z.resetFilters),filters:(Xe=$({},J),delete Xe.sort,delete Xe.offset,delete Xe.limit,(0,v.yK)(Xe,u.Ut)),onDelete:function(e,t,r){r?z({sort:J.sort,limit:J.limit,offset:J.offset}):t.map((function(e){var t,r,n=(0,o.Z)({},e.urlParam,Array.isArray(J[e.urlParam])?J[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");n[e.urlParam].length>0?z($($({},J),n)):(t=e.urlParam,delete(r=$($({},J),{},{offset:0}))[t],z(r))}))}};return f().createElement(f().Fragment,null,ie&&f().createElement(h.Z,{handleModalToggle:Ke,isModalOpen:ie,rule:j,afterFn:w,hosts:Le}),f().createElement(k.Z,(0,n.Z)({id:"tablesContainer",hasCheckbox:!0,initialLoading:!0,autoRefresh:!0,hideFilters:{all:!0,name:!1,tags:!N,operatingSystem:!1,hostGroupFilter:!1},activeFiltersConfig:Ye,columns:function(e){return Ve(e)},tableProps:$($({variant:d.B.compact},s),Ue),customFilters:{advisorFilters:J,selectedTags:T,workloads:F,SID:M},showTags:N,getEntities:Re,actionsConfig:(Je=[f().createElement(Z.Z,{key:"remediation-button",fallback:f().createElement(K.$,{size:"md"}),isDisabled:Ee,dataProvider:Be,onRemediationCreated:function(e){return function(e){We();try{e.remediation&&ne(e.getNotification())}catch(e){ne({variant:"danger",dismissable:!0,title:A.formatMessage(x.Z.error),description:"".concat(e)})}}(e)}},A.formatMessage(x.Z.remediate))],!I&&Je.push({label:A.formatMessage(x.Z.disableRuleForSystems),props:{isDisabled:0===(Le||[]).length},onClick:function(){return Ke(!0)}}),{actions:Je})},Ae,{onLoad:function(e){var t=e.mergeWithEntities,r=e.INVENTORY_ACTION_TYPES,n=e.mergeWithDetail;U.replaceReducer((0,_.U)($($({},t((0,S.V)([],r),{page:Number(J.offset/J.limit+1||1),perPage:Number(J.limit||20)})),n())))},exportConfig:C&&(r={label:A.formatMessage(x.Z.exportCsv)},(0,o.Z)(r,"label",A.formatMessage(x.Z.exportJson)),(0,o.Z)(r,"onSelect",(function(e,t){return(0,E.Z)(R,t,$({rule_id:j.rule_id},J),T,F,M,L)})),(0,o.Z)(r,"isDisabled",!C||0===(null==re||null===(t=re.rows)||void 0===t?void 0:t.length)),(0,o.Z)(r,"tooltipText",C?A.formatMessage(x.Z.exportData):A.formatMessage(x.Z.permsAction)),r)})))};q.propTypes={tableProps:w().any,rule:w().object,afterDisableFn:w().func,pathway:w().object,selectedTags:w().any,workloads:w().any,SID:w().any,permsExport:w().bool,exportTable:w().string,showTags:w().bool};const Q=q},64016:(e,t,r)=>{"use strict";r.d(t,{kx:()=>m,uc:()=>v,vk:()=>g});var n=r(42982),a=r(4942),o=r(15861),i=r(87757),s=r.n(i),c=r(71094),u=r(97109),l=r(59303),f=r(58016);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(){var e=(0,o.Z)(s().mark((function e(t){var r,n,a,o,i,u,d,m,v,b,g,y,h;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.per_page,o=t.page,i=t.advisorFilters,u=t.filters,d=t.workloads,m=t.SID,v=t.pathway,b=t.rule,g=t.selectedTags,y=t.sort,h=(0,f.JD)(i,o,a,y,v,u,g,d,m),!v){e.next=17;break}return e.next=5,(0,c.dX)("".concat(l.Vo),{},p(p({},h),{},{pathway:v.slug}));case 5:if(e.t2=r=e.sent,e.t1=null===e.t2,e.t1){e.next=9;break}e.t1=void 0===r;case 9:if(!e.t1){e.next=13;break}e.t3=void 0,e.next=14;break;case 13:e.t3=r.data;case 14:e.t0=e.t3,e.next=29;break;case 17:return e.next=19,(0,c.dX)("".concat(l.cJ).concat(encodeURI(b.rule_id),"/systems_detail/"),{},h);case 19:if(e.t5=n=e.sent,e.t4=null===e.t5,e.t4){e.next=23;break}e.t4=void 0===n;case 23:if(!e.t4){e.next=27;break}e.t6=void 0,e.next=28;break;case 27:e.t6=n.data;case 28:e.t0=e.t6;case 29:return e.abrupt("return",e.t0);case 30:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e,t,r,n,a,i,c,l){return function(){var c=(0,o.Z)(s().mark((function o(c,d,v,b){var g,y,h,O,k,j,w,Z,x,P,S,_,D,E;return s().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return g=d.per_page,y=d.page,h=d.orderBy,O=d.orderDirection,k=d.advisorFilters,j=d.filters,w=d.workloads,Z=d.SID,x=d.selectedTags,P=(0,f.Sn)(h,O),S=(0,f.JD)(k,y,g,P,t,j,x,w,Z),e(S),_=p(p({},d),{},{pathway:t,handleRefresh:e,rule:l,sort:P}),i(_),o.next=8,m(_);case 8:return D=o.sent,o.next=11,b(D.data.map((function(e){return e.system_uuid})),{per_page:g,hasItems:!0,fields:{system_profile:["operating_system"]}},v);case 11:return E=o.sent,r(D.data.map((function(e){return e.system_uuid}))),n(D.meta.count),o.abrupt("return",Promise.resolve({results:(0,u.E9)(D.data,E.results).map((function(e){return p(p({},e),{},{selected:null==a?void 0:a.includes(e.id)})})),total:D.meta.count}));case 15:case"end":return o.stop()}}),o)})));return function(e,t,r,n){return c.apply(this,arguments)}}()},b=function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100,o=arguments.length>4?arguments[4]:void 0,i=Math.ceil(t/a)||1;return Promise.all((0,n.Z)(new Array(i)).map((function(t,n){return e(p(p({},r),{},{page:n+1,per_page:a,rule:o}))})))},g=function(e,t,r,n){return(0,o.Z)(s().mark((function a(){var o,i;return s().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(!0),a.next=3,b(m,t,e,100,r);case 3:return a.next=5,a.sent.map((function(e){return e.data}));case 5:return o=a.sent,i=[].concat.apply([],o).map((function(e){return e.system_uuid})),n(!1),a.abrupt("return",i);case 9:case"end":return a.stop()}}),a)})))}},44788:(e,t,r)=>{"use strict";r.d(t,{Z:()=>_});var n=r(4942),a=r(15861),o=r(70885),i=r(87757),s=r.n(i),c=r(93264),u=r.n(c),l=r(59303),f=r(47173),d=r(93149),p=r(83115),m=r(59775),v=r(80236),b=r(71094),g=r(45697),y=r.n(g),h=r(92607),O=r(71355),k=r(30893),j=r(28216),w=r(86896),Z=r(77647);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S=function(e){var t=e.handleModalToggle,r=e.isModalOpen,n=e.host,i=e.hosts,g=e.rule,y=e.afterFn,x=(0,w.Z)(),S=(0,j.useDispatch)(),_=function(e){return S((0,O.addNotification)(e))},D=(0,c.useState)(""),E=(0,o.Z)(D,2),I=E[0],T=E[1],F=(0,c.useState)(void 0!==n||i.length>0),M=(0,o.Z)(F,2),C=M[0],R=M[1],N=(0,Z.om)(),U=(0,o.Z)(N,1)[0],A=function(){var e=(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={systems:i,justification:I},e.prev=1,e.next=4,(0,b.SO)("".concat(l._n,"/rule/").concat(g.rule_id,"/ack_hosts/"),{},t);case 4:!C&&_({variant:"success",dismissable:!0,timeout:!0,title:x.formatMessage(k.Z.recSuccessfullyDisabled)}),y&&y(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),_({variant:"danger",dismissable:!0,title:x.formatMessage(k.Z.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=(0,a.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"!==g.rule_status||i.length){e.next=15;break}return r=C?{type:"HOST",options:{rule:g.rule_id,system_uuid:n.id,justification:I}}:{type:"RULE",options:P({rule_id:g.rule_id},I&&{justification:I})},e.prev=2,e.next=5,U(r).unwrap();case 5:_({variant:"success",timeout:!0,dismissable:!0,title:x.formatMessage(k.Z.recSuccessfullyDisabled)}),T(""),y&&y(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),_({variant:"danger",dismissable:!0,title:x.formatMessage(k.Z.error),description:"".concat(e.t0)});case 13:e.next=16;break;case 15:A();case 16:t(!1);case 17:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return u().createElement(v.u,{variant:"small",title:x.formatMessage(k.Z.disableRule),isOpen:r,onClose:function(){t(!1),T("")},actions:[u().createElement(f.zx,{key:"confirm",variant:"primary",onClick:function(){return L()},ouiaId:"confirm"},x.formatMessage(k.Z.save)),u().createElement(f.zx,{key:"cancel",variant:"link",onClick:function(){t(!1),T("")},ouiaId:"cancel"},x.formatMessage(k.Z.cancel))]},x.formatMessage(k.Z.disableRuleBody),u().createElement(p.l,null,u().createElement(m.c,{fieldId:"blank-form"}),(void 0!==n||i.length>0)&&u().createElement(m.c,{fieldId:"disable-rule-one-system"},u().createElement(d.X,{isChecked:C,onChange:function(){R(!C)},label:i.length?x.formatMessage(k.Z.disableRuleForSystems):x.formatMessage(k.Z.disableRuleSingleSystem),id:"disable-rule-one-system",name:"disable-rule-one-system"})),u().createElement(m.c,{label:x.formatMessage(k.Z.justificationNote),fieldId:"disable-rule-justification"},u().createElement(h.oi,{type:"text",id:"disable-rule-justification","aria-describedby":"disable-rule-justification",value:I,onChange:function(e){return T(e)},onKeyDown:function(e){return"Enter"===e.key&&(e.preventDefault(),L())}}))))};S.propTypes={isModalOpen:y().bool,host:y().object,handleModalToggle:y().func,rule:y().object,afterFn:y().func,hosts:y().array},S.defaultProps={isModalOpen:!1,handleModalToggle:function(){},system:void 0,rule:{},afterFn:function(){},host:void 0,hosts:[]};const _=S},58016:(e,t,r)=>{"use strict";r.d(t,{JD:()=>u,Sn:()=>f,WW:()=>l});var n=r(4942),a=r(75472),o=r.n(a),i=r(97109);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e,t,r,n,a,o,s,u,l,f){var d,p,m;return c(c(c(c(c(c(c(c(c({},e),{},{limit:r,offset:t*r-r,sort:n},(null==o?void 0:o.hostnameOrId)&&!a&&!f&&{name:null==o?void 0:o.hostnameOrId}),(null==o?void 0:o.hostnameOrId)&&!a&&f&&{display_name:null==o?void 0:o.hostnameOrId}),o.hostnameOrId&&a&&{display_name:null==o?void 0:o.hostnameOrId}),(null===(d=o.osFilter)||void 0===d?void 0:d.length)>0&&{rhel_version:o.osFilter.map((function(e){return e.value})).join(",")}),(null==o||null===(p=o.hostGroupFilter)||void 0===p?void 0:p.length)&&{groups:o.hostGroupFilter.join(",")}),(null===(m=o.tagFilters)||void 0===m?void 0:m.length)&&(0,i.gh)(o.tagFilters)),u?(0,i.s0)(u,l):{}),(null==s?void 0:s.length)>0?{tags:s.join(",")}:{})},l=function(e,t,r){var n;return n=0===t?"name":2===t?"featured":"impacted_systems_count",o()(e,[function(e){return e[n]}],r)},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ASC";return"".concat("ASC"===t.toUpperCase()?"":"-").concat(("updated"===e?"last_seen":"operating_system"===e&&"rhel_version")||"groups"===e&&"group_name"||e)}},70347:()=>{},90479:()=>{},78752:()=>{},25238:()=>{},67761:()=>{},11177:()=>{}}]);
//# sourceMappingURL=../sourcemaps/6935.58a62684adbed7cb3dfe9f45fa4341bd.js.map