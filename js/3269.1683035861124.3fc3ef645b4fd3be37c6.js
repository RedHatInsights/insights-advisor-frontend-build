(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[3269],{75331:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(70885),a=n(93264),o=n.n(a),i=n(64029),s=n(32835),c=n(75662),l=n(45697),u=n.n(l),f=n(30893),d=n(75546),p=n(86896),m=function(e){var t,n=e.current,l=(0,p.Z)(),u=null===(t=(0,c.useLocation)().pathname)||void 0===t?void 0:t.split("/"),m=(0,a.useState)([]),v=(0,r.Z)(m,2),b=v[0],g=v[1],y=!("recommendations"===u[1]&&4===u.length)||"pathways"===u[2],h=(0,d.m1)({ruleId:u[2]},{skip:y}),O=h.data,Z=h.isFetching;return(0,a.useEffect)((function(){var e;(e=[]).push({title:"".concat(l.formatMessage(f.Z.insightsHeader)," ").concat(u[1]),navigate:"/".concat(u[1])}),y||e.push({title:null==O?void 0:O.description,navigate:"/".concat(u[1],"/").concat(u[2])}),"pathways"===u[2]&&(e=[{title:"Advisor pathways",navigate:"/recommendations/pathways"}]),g(e)}),[O]),o().createElement(o().Fragment,null,!Z&&b.length>0?o().createElement(i.a,{ouiaId:"detail"},b.map((function(e,t){return o().createElement(s.g,{key:t},o().createElement(c.Link,{to:e.navigate},e.title))})),o().createElement(s.g,{isActive:!0},n)):l.formatMessage(f.Z.loading))};m.propTypes={current:u().string};const v=m},58921:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(4942),a=n(15861),o=n(87757),i=n.n(o),s=n(53446),c=n(35240),l=n(59303),u=n(71094),f=n(97109);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(e){var t={date:(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc"};return"Insights-Advisor_".concat(e,"--").concat(t.date)};const v=function(){var e=(0,a.Z)(i().mark((function e(t,n,r,a,o,d,v){var b,g,y;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b=(null==a?void 0:a.length)&&{tags:a},o&&(b=p(p({},b),(0,f.s0)(o,d))),v((0,s.addNotification)(l.LH.pending)),e.next=6,(0,u.dX)("".concat(l._n,"/export/").concat(t,".").concat("json"===n?"json":"csv"),{},p(p({},r),b)).then((function(e){return v((0,s.addNotification)(l.LH.success)),e})).catch((function(){return v((0,s.addNotification)(l.LH.error))}));case 6:g=e.sent.data,y="json"===n?JSON.stringify(g):g,(0,c.Sv)(y,m(t),n),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),"".concat(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n,r,a,o,i,s){return e.apply(this,arguments)}}()},84348:(e,t,n)=>{"use strict";n.d(t,{Z:()=>oe});var r=n(87462),a=n(42982),o=n(15861),i=n(4942),s=n(70885),c=n(87757),l=n.n(c),u=n(59303),f=n(93264),d=n.n(f),p=n(75863),m=n(7732),v=n(46818),b=n(97109),g=n(28216),y=n(71094),h=n(58016);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(){var e=(0,o.Z)(l().mark((function e(t){var n,r,a,o,i,s,c,f,d,p,m,v,b;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.per_page,o=t.page,i=t.advisorFilters,s=t.filters,c=t.workloads,f=t.SID,d=t.pathway,p=t.rule,m=t.selectedTags,v=t.sort,b=(0,h.J)(i,o,a,v,d,s,m,c,f),!d){e.next=17;break}return e.next=5,(0,y.dX)("".concat(u.Vo),{},Z(Z({},b),{},{pathway:d.slug}));case 5:if(e.t2=n=e.sent,e.t1=null===e.t2,e.t1){e.next=9;break}e.t1=void 0===n;case 9:if(!e.t1){e.next=13;break}e.t3=void 0,e.next=14;break;case 13:e.t3=n.data;case 14:e.t0=e.t3,e.next=29;break;case 17:return e.next=19,(0,y.dX)("".concat(u.cJ).concat(encodeURI(p.rule_id),"/systems_detail/"),{},b);case 19:if(e.t5=r=e.sent,e.t4=null===e.t5,e.t4){e.next=23;break}e.t4=void 0===r;case 23:if(!e.t4){e.next=27;break}e.t6=void 0,e.next=28;break;case 27:e.t6=r.data;case 28:e.t0=e.t6;case 29:return e.abrupt("return",e.t0);case 30:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100,o=arguments.length>4?arguments[4]:void 0,i=Math.ceil(t/r)||1;return Promise.all((0,a.Z)(new Array(i)).map((function(t,a){return e(Z(Z({},n),{},{page:a+1,per_page:r,rule:o}))})))},k=function(e,t,n,r){return(0,o.Z)(l().mark((function a(){var o,i;return l().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r(!0),a.next=3,j(w,t,e,100,n);case 3:return a.next=5,a.sent.map((function(e){return e.data}));case 5:return o=a.sent,i=[].concat.apply([],o).map((function(e){return e.system_uuid})),r(!1),a.abrupt("return",i);case 9:case"end":return a.stop()}}),a)})))},P=n(75662),x=n(44788),E=n(33739),_=n(45697),S=n.n(_),D=n(98132),M=n(30893),I=n(71355),T=n(46655),C=n(41131),F=n(86896),N=n(58921),R=n(13218),L=n.n(R),U=n(44908),A=n.n(U);function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W=function(e){return e.group||"default"},H=function(e){return function(t){return e?t||{}:{default:t||[]}}},V=function(e){var t=e;return Object.entries(e).forEach((function(e){var n=(0,s.Z)(e,2),r=n[0];void 0===n[1]&&delete t[r]})),t},z=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=W(n);return V(J(J({},t),{},(0,i.Z)({},r,(null===(e=n.items)||void 0===e?void 0:e.length)>0||L()(n.items)?n.items:void 0)))},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=W(t);return V(J(J({},e),{},(0,i.Z)({},n,t.reset?null==t?void 0:t.items:A()([null==t?void 0:t.item].concat((0,a.Z)(e[n]||[]))))))},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=W(t),r=(e[n]||[]).filter((function(e){return!t.item.includes(e)}));return V(J(J({},e),{},(0,i.Z)({},n,0===r.length?void 0:r)))},Y=function(e,t){return(e[W(t)]||[]).includes(t.item)?K(e,t):B(e,t)},G=function(e,t){return H(Object.prototype.hasOwnProperty.call(!e,"default"))(null==t?void 0:t.preselected)},$=function(e){return H(Object.prototype.hasOwnProperty.call(!e,"default"))()};const q=function(e,t){return{set:z,select:B,deselect:K,toggle:Y,reset:G,clear:$}[t.type](e,t)};var Q=n(37619);const ee=function(e){var t,n,r=e.total,i=void 0===r?0:r,c=e.onSelect,u=e.preselected,p=e.itemIdsInTable,m=e.itemIdsOnPage,v=e.identifier,b=void 0===v?"id":v,g=e.isLoading,y=!!c,h=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).withGroups,n=void 0!==t&&t,r=(0,f.useReducer)(q,e,H(n)),a=(0,s.Z)(r,2),o=a[0],i=a[1],c=function(e,t){return i({type:"set",group:t,items:e})},l=function(e,t){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?c(e,t):i({type:"select",group:t,item:e})},u=function(e,t){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?c(e,t):i({type:"deselect",group:t,item:e})};return{set:c,select:l,deselect:u,toggle:function(e,t){return i({type:"toggle",group:t,item:e})},reset:function(){return i({type:"reset",preselected:e})},clear:function(){return i({type:"clear"})},selection:n?o:o.default}}(u||[]),O=h.selection,Z=h.set,w=h.select,j=h.deselect,k=h.clear,P=(O||[]).length,x=m(),E=x.length||i,_=P===i,S=0===P,D=0===i,M=0!==(t=P)&&(t===i||null),I=function(e,t){return 0!==e||t?t?d().createElement(d().Fragment,null,d().createElement(Q.$,{size:"sm"}),"     ".concat(e," selected")):"".concat(e," selected"):null}(P,g),T=function(){var e=(0,o.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,_?k():Z(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,f.useEffect)((function(){Z(u)}),[JSON.stringify(u)]),y?{selectedIds:O,selectNone:function(){return k()},tableProps:{onSelect:i>0?function(e,t,n,r){return t?w(r[b]):j(r[b])}:void 0,canSelectAll:!1},toolbarProps:{bulkSelect:{toggleProps:I?{children:[I]}:null,isDisabled:D,items:[{title:"Select none",onClick:function(){return k()},props:{isDisabled:S}}].concat((0,a.Z)(m?[{title:"Select page (".concat(E," items)"),onClick:function(){var e,t,n=(null==O?void 0:O.length)>0?(e=O,t=x,Array.from(new Set([].concat((0,a.Z)(e),(0,a.Z)(t))))):x;w(n,void 0,!0)}}]:[]),(0,a.Z)(p?[{title:"".concat((n=_,n?"Unselect":"Select")," all (").concat(i," items)"),onClick:T}]:[])),checked:M,onSelect:(null==O?void 0:O.length)>0?k:T}}}:{}};var te=n(54025);function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ae=function(e){var t,n,c=e.tableProps,O=e.rule,j=e.afterDisableFn,_=e.pathway,S=e.selectedTags,R=e.workloads,L=e.SID,U=e.permsExport,A=e.exportTable,X=e.showTags,J=(0,g.useStore)(),W=(0,F.Z)(),H=(0,g.useDispatch)(),V=(0,f.useState)({limit:20,offset:0,sort:"-last_seen",name:""}),z=(0,s.Z)(V,2),B=z[0],K=z[1],Y=(0,f.useState)(),G=(0,s.Z)(Y,2),$=G[0],q=G[1],Q=(0,f.useState)(0),ne=(0,s.Z)(Q,2),ae=ne[0],oe=ne[1],ie=(0,g.useSelector)((function(e){return e.entities||{}})),se=function(e){return H((0,I.addNotification)(e))},ce=(0,f.useState)(!1),le=(0,s.Z)(ce,2),ue=le[0],fe=le[1],de=(0,f.useState)([]),pe=(0,s.Z)(de,2),me=pe[0],ve=pe[1],be=(0,f.useState)({}),ge=(0,s.Z)(be,2),ye=ge[0],he=ge[1],Oe=(0,f.useState)({}),Ze=(0,s.Z)(Oe,2),we=Ze[0],je=Ze[1],ke=(0,f.useState)(),Pe=(0,s.Z)(ke,2),xe=Pe[0],Ee=Pe[1],_e=(0,f.useState)(!1),Se=(0,s.Z)(_e,2),De=Se[0],Me=Se[1],Ie=(0,f.useState)(!0),Te=(0,s.Z)(Ie,2),Ce=Te[0],Fe=Te[1],Ne=(0,f.useState)(-1),Re=(0,s.Z)(Ne,2),Le=Re[0],Ue=Re[1],Ae=(0,te.useLoadModule)({appName:"inventory",scope:"inventory",module:"./OsFilterHelpers"}),Xe=(0,s.Z)(Ae,1)[0],Je=(Xe=void 0===Xe?{}:Xe).toGroupSelectionValue,We=Xe.buildOSFilterConfig,He=(0,g.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.operatingSystems)||[]})),Ve=function(e,t,n,r,a,i,s,c){return function(){var s=(0,o.Z)(l().mark((function o(s,u,f,d){var p,m,v,g,y,O,j,k,P,x,E,_,S,D;return l().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return p=u.per_page,m=u.page,v=u.orderBy,g=u.orderDirection,y=u.advisorFilters,O=u.filters,j=u.workloads,k=u.SID,P=u.selectedTags,x="operating_system"===v?"rhel_version":"".concat("ASC"===g?"":"-").concat("updated"===v?"last_seen":v),E=(0,h.J)(y,m,p,x,t,O,P,j,k),e(E),_=Z(Z({},u),{},{pathway:t,handleRefresh:e,rule:c,sort:x}),i(_),o.next=8,w(_);case 8:return S=o.sent,o.next=11,d(S.data.map((function(e){return e.system_uuid})),{per_page:p,hasItems:!0,fields:{system_profile:["operating_system"]}},f);case 11:return D=o.sent,n(S.data.map((function(e){return e.system_uuid}))),r(S.meta.count),o.abrupt("return",Promise.resolve({results:(0,b.E9)(S.data,D.results).map((function(e){return Z(Z({},e),{},{selected:null==a?void 0:a.includes(e.id)})})),total:S.meta.count}));case 15:case"end":return o.stop()}}),o)})));return function(e,t,n,r){return s.apply(this,arguments)}}()}((function(e){var t=e.name,n=e.display_name,r=re(re(re({},e),t&&{name:t}),n&&{display_name:n});!_&&(0,b.Y4)(r,S)}),_,ve,oe,Ye,q,0,O),ze=ee({total:ae,onSelect:function(){},itemIdsInTable:k($,ae,O,Ee),itemIdsOnPage:function(){return me||[]},identitfier:"system_uuid",isLoading:xe}),Be=ze.tableProps,Ke=ze.toolbarProps,Ye=ze.selectedIds,Ge=ze.selectNone;(0,f.useEffect)((function(){H({type:"SELECT_ENTITIES",payload:{selected:Ye}}),et()}),[Ye]),(0,f.useEffect)((function(){_?Qe():qe()}),[]);var $e,qe=function(){var e=(0,o.Z)(l().mark((function e(){var t,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(Le<0)){e.next=14;break}return e.next=3,(0,y.dX)("".concat(u.cJ).concat(encodeURI(O.rule_id),"/"),{},{name:B.name});case 3:if(e.t1=t=e.sent,e.t0=null===e.t1,e.t0){e.next=7;break}e.t0=void 0===t;case 7:if(!e.t0){e.next=11;break}e.t2=void 0,e.next=12;break;case 11:e.t2=t.data.playbook_count;case 12:n=e.t2,Ue(n);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Qe=function(){var e=(0,o.Z)(l().mark((function e(){var t,n,r,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(De){e.next=29;break}if(!_){e.next=29;break}return e.next=4,(0,y.dX)("".concat(u._n,"/pathway/").concat(encodeURI(_.slug),"/rules/"),{},{});case 4:if(e.t1=t=e.sent,e.t0=null===e.t1,e.t0){e.next=8;break}e.t0=void 0===t;case 8:if(!e.t0){e.next=12;break}e.t2=void 0,e.next=13;break;case 12:e.t2=t.data.data;case 13:return r=e.t2,e.next=16,(0,y.dX)("".concat(u._n,"/pathway/").concat(encodeURI(_.slug),"/reports/"),{},{});case 16:if(e.t4=n=e.sent,e.t3=null===e.t4,e.t3){e.next=20;break}e.t3=void 0===n;case 20:if(!e.t3){e.next=24;break}e.t5=void 0,e.next=25;break;case 24:e.t5=n.data.rules;case 25:a=e.t5,Me(!0),je(a),he(r);case 29:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),et=function(){var e=!1,t=Object.keys(we);if((null==Ye?void 0:Ye.length)<=0||void 0===Ye)Fe(!0);else if(_)for(var n=function(n){var r=Ye[n];if(e)return"break";t.forEach((function(t){if(we[t].includes(r)){var n=we[t];if(ye.find((function(e){return e.rule_id=n})).resolution_set[0].has_playbook)return e=!0,Fe(!1)}}))},r=0;r<(null==Ye?void 0:Ye.length)&&"break"!==n(r);r++);else Le>0&&(null==Ye?void 0:Ye.length)>0&&Fe(!1)},tt=function(){var e=(0,o.Z)(l().mark((function e(){var t,n,r,a,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!_){e.next=30;break}return e.next=3,(0,y.dX)("".concat(u._n,"/pathway/").concat(encodeURI(_.slug),"/rules/"),{},{});case 3:if(e.t1=t=e.sent,e.t0=null===e.t1,e.t0){e.next=7;break}e.t0=void 0===t;case 7:if(!e.t0){e.next=11;break}e.t2=void 0,e.next=12;break;case 11:e.t2=t.data.data;case 12:return r=e.t2,e.next=15,(0,y.dX)("".concat(u._n,"/pathway/").concat(encodeURI(_.slug),"/reports/"),{},{});case 15:if(e.t4=n=e.sent,e.t3=null===e.t4,e.t3){e.next=19;break}e.t3=void 0===n;case 19:if(!e.t3){e.next=23;break}e.t5=void 0,e.next=24;break;case 23:e.t5=n.data.rules;case 24:return a=e.t5,o=[],r.forEach((function(e){var t=[];a[e.rule_id].forEach((function(e){Ye.includes(e)&&t.push(e)})),t.length&&o.push({id:"advisor:".concat(e.rule_id),description:e.description,systems:t})})),e.abrupt("return",{issues:o});case 30:return e.abrupt("return",{issues:[{id:"advisor:".concat(O.rule_id),description:O.description}],systems:Ye});case 31:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),nt=function(e){fe(e)},rt=(0,f.useCallback)((function(e){var t=e.filter((function(e){return"updated"===e.key})),n=e.filter((function(e){return"display_name"===e.key})),r=e.filter((function(e){return"system_profile"===e.key})),a=e.filter((function(e){return"tags"===e.key}));n=re(re({},n[0]),{},{transforms:[m.p,v.WT],props:{isStatic:!0}},O?{renderFunc:function(e,t){return d().createElement(P.Link,{className:"pf-u-font-size-lg",to:"/recommendations/".concat(O.rule_id,"/").concat(t,"?activeRule=true")},e)}}:{}),t=re(re({},t[0]),{},{transforms:[m.p,v.WT],props:{width:20}}),r=re(re({},r[0]),{},{transforms:[v.WT],props:{isStatic:!0}});var o=[n,a=re({},a[0]),r,t];if(!_){var i={key:"impacted_date",title:"First Impacted",sortKey:"impacted_date",transforms:[m.p,v.WT],props:{width:15},renderFunc:t.renderFunc};o.push(i),t.props.width=15}return o}),[_,O]),at=function(e){var t=re(re({},B),{},{offset:0});delete t[e],K(t)},ot=(0,a.Z)(We?[We({label:u.Ut.rhel_version.title.toLowerCase(),type:u.Ut.rhel_version.type,id:u.Ut.rhel_version.urlParam,value:Je(B.rhel_version||[]),onChange:function(e,t){return r=t,void((a=(n=u.Ut.rhel_version.urlParam)===u.Ut.rhel_version.urlParam?Object.values(r||{}).flatMap((function(e){return Object.keys(e)})):r).length>0?K(re(re({},B),{},{offset:0},(0,i.Z)({},n,a))):at(n));var n,r,a}},He)]:[]),it={deleteTitle:W.formatMessage(M.Z.resetFilters),filters:($e=re({},B),delete $e.sort,delete $e.offset,delete $e.limit,(0,b.yK)($e,u.Ut)),onDelete:function(e,t,n){n?K({sort:B.sort,limit:B.limit,offset:B.offset}):t.map((function(e){var t=(0,i.Z)({},e.urlParam,Array.isArray(B[e.urlParam])?B[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?K(re(re({},B),t)):at(e.urlParam)}))}};return d().createElement(d().Fragment,null,ue&&d().createElement(x.Z,{handleModalToggle:nt,isModalOpen:ue,rule:O,afterFn:j,hosts:Ye}),d().createElement(E.Z,(0,r.Z)({id:"tablesContainer",hasCheckbox:!0,initialLoading:!0,autoRefresh:!0,hideFilters:{all:!0,name:!1,tags:!X},filterConfig:{items:ot},activeFiltersConfig:it,columns:function(e){return rt(e)},tableProps:re(re({variant:p.B.compact},c),Be),customFilters:{advisorFilters:B,selectedTags:S,workloads:R,SID:L},showTags:X,getEntities:Ve,dedicatedAction:d().createElement(D.Z,{key:"remediation-button",isDisabled:Ce,dataProvider:tt,onRemediationCreated:function(e){return function(e){Ge();try{e.remediation&&se(e.getNotification())}catch(e){se({variant:"danger",dismissable:!0,title:W.formatMessage(M.Z.error),description:"".concat(e)})}}(e)}},W.formatMessage(M.Z.remediate)),actionsConfig:{actions:["",{label:W.formatMessage(M.Z.disableRuleForSystems),props:{isDisabled:0===(Ye||[]).length},onClick:function(){return nt(!0)}}]}},Ke,{fallback:te.Spinner,onLoad:function(e){var t=e.mergeWithEntities,n=e.INVENTORY_ACTION_TYPES,r=e.mergeWithDetail;J.replaceReducer((0,C.U)(re(re({},t((0,T.V)([],n),{page:Number(B.offset/B.limit+1||1),perPage:Number(B.limit||20)})),r())))},exportConfig:U&&(n={label:W.formatMessage(M.Z.exportCsv)},(0,i.Z)(n,"label",W.formatMessage(M.Z.exportJson)),(0,i.Z)(n,"onSelect",(function(e,t){return(0,N.Z)(A,t,re({rule_id:O.rule_id},B),S,R,L,H)})),(0,i.Z)(n,"isDisabled",!U||0===(null==ie||null===(t=ie.rows)||void 0===t?void 0:t.length)),(0,i.Z)(n,"tooltipText",U?W.formatMessage(M.Z.exportData):W.formatMessage(M.Z.permsAction)),n)})))};ae.propTypes={tableProps:S().any,rule:S().object,afterDisableFn:S().func,pathway:S().object,selectedTags:S().any,workloads:S().any,SID:S().any,permsExport:S().bool,exportTable:S().string,showTags:S().bool};const oe=ae},52837:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(63732),a=n(15914),o=n(21947),i=n(99332),s=n(69507),c=n(45697),l=n.n(c),u=n(93264),f=n.n(u),d=n(30893),p=n(86896),m=n(69174),v=function(e){var t=e.icon,n=e.text;return f().createElement(m._,{icon:t,variant:"outline",color:"blue",isCompact:!0},n)};v.propTypes={icon:l().object,text:l().bool};const b=v;var g=function(e){var t,n=e.labelList,c=(0,p.Z)(),l=(t=n.map((function(e){return e.id})),Object.entries(t.reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),{})).sort((function(e,t){return t[1]-e[1]})));return f().createElement(o.e,{numLabels:1,isCompact:!0},l.map((function(e){return function(e){return[f().createElement(b,{icon:f().createElement(r.ZP,null),text:c.formatMessage(d.Z.availability)}),f().createElement(b,{icon:f().createElement(i.ZP,null),text:c.formatMessage(d.Z.security)}),f().createElement(b,{icon:f().createElement(a.ZP,null),text:c.formatMessage(d.Z.stability)}),f().createElement(b,{icon:f().createElement(s.ZP,null),text:c.formatMessage(d.Z.performance)})][e]}(Number(e[0]-1))})))};g.propTypes={labelList:l().array,isCompact:l().bool},g.defaultProps={isCompact:!0};const y=g},87516:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(75824),a=n(69174),o=n(45697),i=n.n(o),s=n(93264),c=n.n(s),l=n(30893),u=n(86896),f=function(e){var t,n=e.rule,o=e.isCompact,i=e.noMargin,s=(0,u.Z)();return c().createElement(c().Fragment,null,-1!==(null==n||null===(t=n.tags)||void 0===t?void 0:t.search("incident"))&&c().createElement(r.u,{content:s.formatMessage(l.Z.incidentTooltip),position:r.D.right},c().createElement(a._,{color:"red",className:i?null:"adv-c-label-incident",isCompact:o},s.formatMessage(l.Z.incident))),"disabled"===(null==n?void 0:n.rule_status)&&c().createElement(r.u,{content:s.formatMessage(l.Z.ruleIsDisabledTooltip),position:r.D.right},c().createElement(a._,{color:"gray",isCompact:o},s.formatMessage(l.Z.disabled))),"rhdisabled"===(null==n?void 0:n.rule_status)&&c().createElement(r.u,{content:s.formatMessage(l.Z.ruleIsDisabledTooltip),position:r.D.right},c().createElement(a._,{color:"gray",isCompact:o},s.formatMessage(l.Z.redhatDisabled))))};f.propTypes={rule:i().object,isCompact:i().bool,noMargin:i().bool},f.defaultProps={isCompact:!0};const d=f},46891:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(32203),a=n(62394),o=n(24561),i=n(93264),s=n.n(i);const c=function(){return s().createElement(r.Z,null,s().createElement(a.e,null,s().createElement(o.aV,null)))}},44788:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var r=n(4942),a=n(15861),o=n(70885),i=n(87757),s=n.n(i),c=n(93264),l=n.n(c),u=n(59303),f=n(47173),d=n(93149),p=n(83115),m=n(59775),v=n(80236),b=n(71094),g=n(45697),y=n.n(g),h=n(92607),O=n(71355),Z=n(30893),w=n(28216),j=n(86896),k=n(77647);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e){var t=e.handleModalToggle,n=e.isModalOpen,r=e.host,i=e.hosts,g=e.rule,y=e.afterFn,P=(0,j.Z)(),E=(0,w.useDispatch)(),_=function(e){return E((0,O.addNotification)(e))},S=(0,c.useState)(""),D=(0,o.Z)(S,2),M=D[0],I=D[1],T=(0,c.useState)(void 0!==r||i.length>0),C=(0,o.Z)(T,2),F=C[0],N=C[1],R=(0,k.om)(),L=(0,o.Z)(R,1)[0],U=function(){var e=(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={systems:i,justification:M},e.prev=1,e.next=4,(0,b.SO)("".concat(u._n,"/rule/").concat(g.rule_id,"/ack_hosts/"),{},t);case 4:!F&&_({variant:"success",dismissable:!0,timeout:!0,title:P.formatMessage(Z.Z.recSuccessfullyDisabled)}),y&&y(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),_({variant:"danger",dismissable:!0,title:P.formatMessage(Z.Z.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=(0,a.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"!==g.rule_status||i.length){e.next=15;break}return n=F?{type:"HOST",options:{rule:g.rule_id,system_uuid:r.id,justification:M}}:{type:"RULE",options:x({rule_id:g.rule_id},M&&{justification:M})},e.prev=2,e.next=5,L(n).unwrap();case 5:_({variant:"success",timeout:!0,dismissable:!0,title:P.formatMessage(Z.Z.recSuccessfullyDisabled)}),I(""),y&&y(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),_({variant:"danger",dismissable:!0,title:P.formatMessage(Z.Z.error),description:"".concat(e.t0)});case 13:e.next=16;break;case 15:U();case 16:t(!1);case 17:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return l().createElement(v.u,{variant:"small",title:P.formatMessage(Z.Z.disableRule),isOpen:n,onClose:function(){t(!1),I("")},actions:[l().createElement(f.zx,{key:"confirm",variant:"primary",onClick:function(){return A()},ouiaId:"confirm"},P.formatMessage(Z.Z.save)),l().createElement(f.zx,{key:"cancel",variant:"link",onClick:function(){t(!1),I("")},ouiaId:"cancel"},P.formatMessage(Z.Z.cancel))]},P.formatMessage(Z.Z.disableRuleBody),l().createElement(p.l,null,l().createElement(m.c,{fieldId:"blank-form"}),(void 0!==r||i.length>0)&&l().createElement(m.c,{fieldId:"disable-rule-one-system"},l().createElement(d.X,{isChecked:F,onChange:function(){N(!F)},label:i.length?P.formatMessage(Z.Z.disableRuleForSystems):P.formatMessage(Z.Z.disableRuleSingleSystem),id:"disable-rule-one-system",name:"disable-rule-one-system"})),l().createElement(m.c,{label:P.formatMessage(Z.Z.justificationNote),fieldId:"disable-rule-justification"},l().createElement(h.oi,{type:"text",id:"disable-rule-justification","aria-describedby":"disable-rule-justification",value:M,onChange:function(e){return I(e)},onKeyDown:function(e){return"Enter"===e.key&&(e.preventDefault(),A())}}))))};E.propTypes={isModalOpen:y().bool,host:y().object,handleModalToggle:y().func,rule:y().object,afterFn:y().func,hosts:y().array},E.defaultProps={isModalOpen:!1,handleModalToggle:function(){},system:void 0,rule:{},afterFn:function(){},host:void 0,hosts:[]};const _=E},58016:(e,t,n)=>{"use strict";n.d(t,{J:()=>l,W:()=>u});var r=n(4942),a=n(75472),o=n.n(a),i=n(97109);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function(e,t,n,r,a,o,s,l,u,f){var d,p;return c(c(c(c(c(c(c(c({},e),{},{limit:n,offset:t*n-n,sort:r},(null==o?void 0:o.hostnameOrId)&&!a&&!f&&{name:null==o?void 0:o.hostnameOrId}),(null==o?void 0:o.hostnameOrId)&&!a&&f&&{display_name:null==o?void 0:o.hostnameOrId}),o.hostnameOrId&&a&&{display_name:null==o?void 0:o.hostnameOrId}),e.rhel_version&&{rhel_version:null===(d=e.rhel_version)||void 0===d?void 0:d.join(",")}),(null===(p=o.tagFilters)||void 0===p?void 0:p.length)&&(0,i.gh)(o.tagFilters)),l?(0,i.s0)(l,u):{}),(null==s?void 0:s.length)>0?{tags:s.join(",")}:{})},u=function(e,t,n){var r;return r=0===t?"name":2===t?"featured":"impacted_systems_count",o()(e,[function(e){return e[r]}],n)}},45467:()=>{},70347:()=>{},11452:()=>{},58392:()=>{},34946:()=>{},80598:()=>{},32857:()=>{},90479:()=>{},78752:()=>{},21064:()=>{},82014:()=>{},25238:()=>{},67761:()=>{},49854:()=>{},11177:()=>{}}]);