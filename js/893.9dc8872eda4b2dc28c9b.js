(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[893],{44788:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var r=n(96156),a=n(92137),s=n(28481),o=n(87757),c=n.n(o),i=n(57149),l=n(93264),u=n.n(l),f=n(71094),d=n(59303),p=n(6202),m=n(32752),b=n(4853),h=n(23811),y=n(78826),g=n(45697),v=n.n(g),k=n(12282),O=n(71355),Z=n(30893),j=n(88931),M=n(86896);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){var t=e.handleModalToggle,n=e.isModalOpen,r=e.host,o=e.hosts,g=e.rule,v=e.afterFn,E=(0,M.Z)(),_=(0,j.useDispatch)(),S=function(e){return _((0,O.wN)(e))},P=(0,l.useState)(""),D=(0,s.Z)(P,2),A=D[0],T=D[1],F=(0,l.useState)(void 0!==r||o.length>0),x=(0,s.Z)(F,2),C=x[0],B=x[1],N=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={systems:o,justification:A},e.prev=1,e.next=4,f.Z.post("".concat(d.BASE_URL,"/rule/").concat(g.rule_id,"/ack_hosts/"),{},t);case 4:!C&&S({variant:"success",dismissable:!0,timeout:!0,title:E.formatMessage(Z.Z.recSuccessfullyDisabledForSystem)}),v&&v(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),S({variant:"danger",dismissable:!0,title:E.formatMessage(Z.Z.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=(0,a.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"!==g.rule_status||o.length){e.next=15;break}return n=C?{type:"HOST",options:{rule:g.rule_id,system_uuid:r.id,justification:A}}:{type:"RULE",options:w({rule_id:g.rule_id},A&&{justification:A})},e.prev=2,e.next=5,a=n,_(i.s1(a));case 5:S(C?{variant:"success",timeout:!0,dismissable:!0,title:E.formatMessage(Z.Z.recSuccessfullyDisabledForSystem)}:{variant:"success",timeout:!0,dismissable:!0,title:E.formatMessage(Z.Z.recSuccessfullyDisabled)}),T(""),v&&v(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),S({variant:"danger",dismissable:!0,title:E.formatMessage(Z.Z.error),description:"".concat(e.t0)});case 13:e.next=16;break;case 15:N();case 16:t(!1);case 17:case"end":return e.stop()}var a}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return u().createElement(y.u_,{variant:"small",title:E.formatMessage(Z.Z.disableRule),isOpen:n,onClose:function(){t(!1),T("")},actions:[u().createElement(p.Button,{key:"confirm",variant:"primary",onClick:function(){return R()},ouiaId:"confirm"},E.formatMessage(Z.Z.save)),u().createElement(p.Button,{key:"cancel",variant:"link",onClick:function(){t(!1),T("")},ouiaId:"cancel"},E.formatMessage(Z.Z.cancel))]},E.formatMessage(Z.Z.disableRuleBody),u().createElement(b.l,null,u().createElement(h.c,{fieldId:"blank-form"}),(void 0!==r||o.length>0)&&u().createElement(h.c,{fieldId:"disable-rule-one-system"},u().createElement(m.X,{isChecked:C,onChange:function(){B(!C)},label:o.length?E.formatMessage(Z.Z.disableRuleForSystems):E.formatMessage(Z.Z.disableRuleSingleSystem),id:"disable-rule-one-system",name:"disable-rule-one-system"})),u().createElement(h.c,{label:E.formatMessage(Z.Z.justificationNote),fieldId:"disable-rule-justification"},u().createElement(k.oi,{type:"text",id:"disable-rule-justification","aria-describedby":"disable-rule-justification",value:A,onChange:function(e){return T(e)},onKeyDown:function(e){return"Enter"===e.key&&(e.preventDefault(),R())}}))))};_.propTypes={isModalOpen:v().bool,host:v().object,handleModalToggle:v().func,rule:v().object,afterFn:v().func,hosts:v().array},_.defaultProps={isModalOpen:!1,handleModalToggle:function(){},system:void 0,rule:{},afterFn:function(){},host:void 0,hosts:[]};const S=_},95358:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var r=n(96156),a=n(92137),s=n(28481),o=n(87757),c=n.n(o),i=n(93264),l=n.n(i),u=n(94550),f=n(57149),d=n(71094),p=n(59303),m=n(6202),b=n(62410),h=n(24561),y=n(78826),g=n(6234),v=n(45697),k=n.n(v),O=n(71355),Z=n(88931),j=n(74806),M=n(30893);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var w=function(e){var t=e.fetchHostAcks,n=e.hostAcksFetchStatus,r=e.handleModalToggle,o=e.intl,f=e.isModalOpen,v=e.hostAcks,k=e.rule,Z=e.afterFn,j=[o.formatMessage(M.Z.systemName),o.formatMessage(M.Z.justificationNote),o.formatMessage(M.Z.dateDisabled),""],E=(0,i.useState)([]),w=(0,s.Z)(E,2),_=w[0],S=w[1],P=(0,i.useState)(!1),D=(0,s.Z)(P,2),A=D[0],T=D[1],F=function(){var e=(0,a.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.delete("".concat(p.BASE_URL,"/hostack/").concat(n.id,"/"));case 3:t({rule_id:k.rule_id,limit:k.hosts_acked_count}),T(!0),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),r(!1),(0,O.wN)({variant:"danger",dismissable:!0,title:o.formatMessage(M.Z.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){if(v.data){var e=v.data.map((function(e){return{cells:[e.display_name||e.system_uuid,e.justification||o.formatMessage(M.Z.none),{title:l().createElement(b.Z,{date:new Date(e.updated_at),type:"onlyDate"})},{title:l().createElement(m.Button,{key:e.system_uuid,isInline:!0,variant:"link",onClick:function(){return F(e)}},l().createElement(g.ZP,{size:"sm"}),"  "," ",o.formatMessage(M.Z.enable))}]}})).asMutable();e.length||(Z(),r(!1)),S(e)}}),[v]),(0,i.useEffect)((function(){t({rule_id:k.rule_id,limit:k.hosts_acked_count})}),[t,k.hosts_acked_count,k.rule_id]),l().createElement(y.u_,{width:"50%",title:o.formatMessage(M.Z.hostAckModalTitle),isOpen:f,onClose:function(){A&&Z(),r(!1)}},"fulfilled"===n&&l().createElement(u.Table,{"aria-label":"host-ack-table",rows:_,cells:j},l().createElement(u.TableHeader,null),l().createElement(u.TableBody,null)),"fulfilled"!==n&&l().createElement(u.Table,{"aria-label":"host-ack-table",rows:[{cells:[{props:{colSpan:3},title:l().createElement(h.aV,null)}]}],cells:j},l().createElement(u.TableHeader,null),l().createElement(u.TableBody,null)))};w.propTypes={isModalOpen:k().bool,handleModalToggle:k().func,intl:k().any,rule:k().object,fetchHostAcks:k().func,hostAcks:k().object,hostAcksFetchStatus:k().string,addNotification:k().func,afterFn:k().func},w.defaultProps={isModalOpen:!1,handleModalToggle:function(){},rule:{},afterFn:function(){}};const _=(0,j.ZP)((0,Z.connect)((function(e){var t=e.AdvisorStore,n=e.ownProps;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hostAcks:t.hostAcks,hostAcksFetchStatus:t.hostAcksFetchStatus},n)}),(function(e){return{setAck:function(t){return e((0,f.s1)(t))},fetchHostAcks:function(t){return e((0,f.CM)(t))},addNotification:function(t){return e((0,O.wN)(t))}}}))(w))}}]);
//# sourceMappingURL=../sourcemaps/893.33973f48dcb87f3d326c.js.map