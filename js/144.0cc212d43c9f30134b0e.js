(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[144],{44788:(e,t,n)=>{"use strict";n.d(t,{Z:()=>I});var a=n(96156),r=n(92137),s=n(28481),l=n(87757),c=n.n(l),o=n(57149),i=n(93264),u=n.n(i),m=n(71094),f=n(59303),d=n(6202),p=n(32752),g=n(4853),E=n(23811),b=n(78826),k=n(45697),h=n.n(k),y=n(12282),v=n(71355),Z=n(30893),_=n(88931),O=n(86896);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(e){var t=e.handleModalToggle,n=e.isModalOpen,a=e.host,l=e.hosts,k=e.rule,h=e.afterFn,S=(0,O.Z)(),j=(0,_.useDispatch)(),I=function(e){return j((0,v.wN)(e))},w=(0,i.useState)(""),P=(0,s.Z)(w,2),A=P[0],D=P[1],N=(0,i.useState)(void 0!==a||l.length>0),L=(0,s.Z)(N,2),T=L[0],x=L[1],C=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={systems:l,justification:A},e.prev=1,e.next=4,m.Z.post("".concat(f.BASE_URL,"/rule/").concat(k.rule_id,"/ack_hosts/"),{},t);case 4:!T&&I({variant:"success",dismissable:!0,timeout:!0,title:S.formatMessage(Z.Z.recSuccessfullyDisabledForSystem)}),h&&h(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),I({variant:"danger",dismissable:!0,title:S.formatMessage(Z.Z.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"!==k.rule_status||l.length){e.next=15;break}return n=T?{type:"HOST",options:{rule:k.rule_id,system_uuid:a.id,justification:A}}:{type:"RULE",options:M({rule_id:k.rule_id},A&&{justification:A})},e.prev=2,e.next=5,r=n,j(o.s1(r));case 5:I(T?{variant:"success",timeout:!0,dismissable:!0,title:S.formatMessage(Z.Z.recSuccessfullyDisabledForSystem)}:{variant:"success",timeout:!0,dismissable:!0,title:S.formatMessage(Z.Z.recSuccessfullyDisabled)}),D(""),h&&h(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),I({variant:"danger",dismissable:!0,title:S.formatMessage(Z.Z.error),description:"".concat(e.t0)});case 13:e.next=16;break;case 15:C();case 16:t(!1);case 17:case"end":return e.stop()}var r}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return u().createElement(b.u_,{variant:"small",title:S.formatMessage(Z.Z.disableRule),isOpen:n,onClose:function(){t(!1),D("")},actions:[u().createElement(d.Button,{key:"confirm",variant:"primary",onClick:function(){return R()},ouiaId:"confirm"},S.formatMessage(Z.Z.save)),u().createElement(d.Button,{key:"cancel",variant:"link",onClick:function(){t(!1),D("")},ouiaId:"cancel"},S.formatMessage(Z.Z.cancel))]},S.formatMessage(Z.Z.disableRuleBody),u().createElement(g.l,null,u().createElement(E.c,{fieldId:"blank-form"}),(void 0!==a||l.length>0)&&u().createElement(E.c,{fieldId:"disable-rule-one-system"},u().createElement(p.X,{isChecked:T,onChange:function(){x(!T)},label:l.length?S.formatMessage(Z.Z.disableRuleForSystems):S.formatMessage(Z.Z.disableRuleSingleSystem),id:"disable-rule-one-system",name:"disable-rule-one-system"})),u().createElement(E.c,{label:S.formatMessage(Z.Z.justificationNote),fieldId:"disable-rule-justification"},u().createElement(y.oi,{type:"text",id:"disable-rule-justification","aria-describedby":"disable-rule-justification",value:A,onChange:function(e){return D(e)},onKeyDown:function(e){return"Enter"===e.key&&(e.preventDefault(),R())}}))))};j.propTypes={isModalOpen:h().bool,host:h().object,handleModalToggle:h().func,rule:h().object,afterFn:h().func,hosts:h().array},j.defaultProps={isModalOpen:!1,handleModalToggle:function(){},system:void 0,rule:{},afterFn:function(){},host:void 0,hosts:[]};const I=j},95358:(e,t,n)=>{"use strict";n.d(t,{Z:()=>j});var a=n(96156),r=n(92137),s=n(28481),l=n(87757),c=n.n(l),o=n(93264),i=n.n(o),u=n(94550),m=n(57149),f=n(71094),d=n(59303),p=n(6202),g=n(62410),E=n(24561),b=n(78826),k=n(6234),h=n(45697),y=n.n(h),v=n(71355),Z=n(88931),_=n(74806),O=n(30893);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var M=function(e){var t=e.fetchHostAcks,n=e.hostAcksFetchStatus,a=e.handleModalToggle,l=e.intl,m=e.isModalOpen,h=e.hostAcks,y=e.rule,Z=e.afterFn,_=[l.formatMessage(O.Z.systemName),l.formatMessage(O.Z.justificationNote),l.formatMessage(O.Z.dateDisabled),""],S=(0,o.useState)([]),M=(0,s.Z)(S,2),j=M[0],I=M[1],w=(0,o.useState)(!1),P=(0,s.Z)(w,2),A=P[0],D=P[1],N=function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.delete("".concat(d.BASE_URL,"/hostack/").concat(n.id,"/"));case 3:t({rule_id:y.rule_id,limit:y.hosts_acked_count}),D(!0),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),a(!1),(0,v.wN)({variant:"danger",dismissable:!0,title:l.formatMessage(O.Z.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){if(h.data){var e=h.data.map((function(e){return{cells:[e.display_name||e.system_uuid,e.justification||l.formatMessage(O.Z.none),{title:i().createElement(g.Z,{date:new Date(e.updated_at),type:"onlyDate"})},{title:i().createElement(p.Button,{key:e.system_uuid,isInline:!0,variant:"link",onClick:function(){return N(e)}},i().createElement(k.ZP,{size:"sm"}),"  "," ",l.formatMessage(O.Z.enable))}]}})).asMutable();e.length||(Z(),a(!1)),I(e)}}),[h]),(0,o.useEffect)((function(){t({rule_id:y.rule_id,limit:y.hosts_acked_count})}),[t,y.hosts_acked_count,y.rule_id]),i().createElement(b.u_,{width:"50%",title:l.formatMessage(O.Z.hostAckModalTitle),isOpen:m,onClose:function(){A&&Z(),a(!1)}},"fulfilled"===n&&i().createElement(u.Table,{"aria-label":"host-ack-table",rows:j,cells:_},i().createElement(u.TableHeader,null),i().createElement(u.TableBody,null)),"fulfilled"!==n&&i().createElement(u.Table,{"aria-label":"host-ack-table",rows:[{cells:[{props:{colSpan:3},title:i().createElement(E.aV,null)}]}],cells:_},i().createElement(u.TableHeader,null),i().createElement(u.TableBody,null)))};M.propTypes={isModalOpen:y().bool,handleModalToggle:y().func,intl:y().any,rule:y().object,fetchHostAcks:y().func,hostAcks:y().object,hostAcksFetchStatus:y().string,addNotification:y().func,afterFn:y().func},M.defaultProps={isModalOpen:!1,handleModalToggle:function(){},rule:{},afterFn:function(){}};const j=(0,_.ZP)((0,Z.connect)((function(e){var t=e.AdvisorStore,n=e.ownProps;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hostAcks:t.hostAcks,hostAcksFetchStatus:t.hostAcksFetchStatus},n)}),(function(e){return{setAck:function(t){return e((0,m.s1)(t))},fetchHostAcks:function(t){return e((0,m.CM)(t))},addNotification:function(t){return e((0,v.wN)(t))}}}))(M))},87533:(e,t,n)=>{"use strict";n.d(t,{Z:()=>z});var a=n(25325),r=n.n(a),s=n(39693),l=n.n(s),c=n(59303),o=n(92506),i=n(88292),u=n(63540),m=n(50470),f=n(78216),d=n(16530),p=n(15206),g=n.n(p),E=n(52491),b=n(45697),k=n.n(b),h=n(93264),y=n.n(h),v=n(92137),Z=n(28481),_=n(87757),O=n.n(_),S=n(71094),M=n(6202),j=n(49580),I=n(11239),w=n(90502),P=n(61088),A=n(74806),D=n(30893),N=function(e){var t=e.intl,n=e.rule,a=(0,h.useState)(n.rating),r=(0,Z.Z)(a,2),s=r[0],l=r[1],o=(0,h.useState)(!1),i=(0,Z.Z)(o,2),u=i[0],m=i[1],f=(0,h.useState)(t.formatMessage(D.Z.feedbackThankyou)),d=(0,Z.Z)(f,2),p=d[0],g=d[1],E=function(){var e=(0,v.Z)(O().mark((function e(t){var a;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s===t?0:t,e.prev=1,e.next=4,S.Z.post("".concat(c.BASE_URL,"/rating/"),{},{rule:n.rule_id,rating:a});case 4:l(a),m(!0),setTimeout((function(){return g("")}),3e3),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return y().createElement("span",{className:"ratingSpanOverride"},t.formatMessage(D.Z.ruleHelpful),y().createElement(M.Button,{variant:"plain","aria-label":"thumbs-up",onClick:function(){return E(1)},ouiaId:"thumbsUp"},1===s?y().createElement(P.ZP,{className:"like",size:"sm"}):y().createElement(I.ZP,{size:"sm"})),y().createElement(M.Button,{variant:"plain","aria-label":"thumbs-down",onClick:function(){return E(-1)},ouiaId:"thumbsDown"},-1===s?y().createElement(w.ZP,{className:"dislike",size:"sm"}):y().createElement(j.ZP,{size:"sm"})),u&&p)};N.propTypes={intl:k().any,rule:k().object};const L=(0,A.ZP)(N);var T=n(24047),x=n(20018);var C=n(76388),R=n.n(C),B=n(1667),F=n.n(B),H=n(28186),q=function(e){var t,n=e.children,a=e.rule,s=e.resolutionRisk,p=e.intl,b=e.topics,k=e.header,h=e.isDetailsPage,v=function(){return b&&l()(b.map((function(e){return r()(e.tag.split(" "),a.tags.split(" ")).length&&y().createElement(y().Fragment,{key:e.slug},y().createElement(d.Link,{to:"/topics/".concat(e.slug)},"".concat(e.name)))})))},Z=function(e,t){return"string"==typeof e&&Boolean(e)&&y().createElement("span",{className:t&&"genericOverride"},y().createElement(g(),{rehypePlugins:[R(),F()]},e))};return y().createElement(o.Split,{className:"ins-c-rule-details__split",hasGutter:!0},y().createElement(o.SplitItem,null,y().createElement(i.Stack,{hasGutter:!0},k&&y().createElement(i.StackItem,null,k),y().createElement(i.StackItem,null,h?Z(a.generic,!0):Z(a.summary)),a.node_id&&y().createElement(i.StackItem,null,y().createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://access.redhat.com/node/".concat(a.node_id)},p.formatMessage(D.Z.knowledgebaseArticle)," ",y().createElement(m.ZP,{size:"sm"}))),b&&a.tags&&v().length>0&&y().createElement(i.StackItem,null,y().createElement("strong",null,p.formatMessage(D.Z.topicRelatedToRule)),y().createElement("br",null),(t=v()).map((function(e,n){return y().createElement(y().Fragment,{key:n},e,n+1!==t.length&&y().createElement("strong",{className:"verticalDivider"}," | "))}))),h&&y().createElement(L,{rule:a}),!h&&a.impacted_systems_count>0&&y().createElement(i.StackItem,null,y().createElement(d.Link,{key:"".concat(a.rule_id,"-link"),to:"/recommendations/".concat(a.rule_id)},p.formatMessage(D.Z.viewAffectedSystems,{systems:a.impacted_systems_count}))))),y().createElement(o.SplitItem,null,y().createElement(i.Stack,{gutter:"sm"},n&&y().createElement(i.StackItem,null,n),y().createElement(i.StackItem,null,y().createElement(i.Stack,{className:"ins-c-rule-details__stack"},y().createElement(i.StackItem,null,y().createElement("strong",null,p.formatMessage(D.Z.totalRisk))),y().createElement(i.StackItem,{className:"pf-u-display-inline-flex alignCenterOverride pf-u-pb-sm pf-u-pt-sm"},y().createElement("span",{className:"ins-c-rule-details__stackitem"},y().createElement("span",null,y().createElement(f.Z,{value:a.total_risk})),y().createElement(i.Stack,{hasGutter:!0,className:"description-stack-override"},y().createElement(i.StackItem,null,y().createElement(x.D,null,y().createElement(u.xv,{component:u.qO.p},p.formatMessage(D.Z.rulesDetailsTotalriskBody,{risk:c.TOTAL_RISK_LABEL_LOWER[a.total_risk]||p.formatMessage(D.Z.undefined),strong:function(e){return(0,H.f)(e)}})))),y().createElement(i.Stack,null,y().createElement(i.StackItem,null,y().createElement(T.c,{className:"severity-line",title:p.formatMessage(D.Z.likelihoodLevel,{level:c.LIKELIHOOD_LABEL[a.likelihood]}),value:a.likelihood,tooltipMessage:p.formatMessage(D.Z.likelihoodDescription,{level:c.LIKELIHOOD_LABEL_LOWER[a.likelihood]})})),y().createElement(i.StackItem,null,y().createElement(T.c,{className:"severity-line",title:p.formatMessage(D.Z.impactLevel,{level:c.IMPACT_LABEL[a.impact.impact]}),value:a.impact.impact,tooltipMessage:p.formatMessage(D.Z.impactDescription,{level:c.IMPACT_LABEL_LOWER[a.impact.impact]})})))))),y().createElement("hr",null),y().createElement(i.StackItem,null,y().createElement("strong",null,p.formatMessage(D.Z.riskofchange))),y().createElement(i.StackItem,{className:"pf-u-display-inline-flex alignCenterOverride pf-u-pb-sm pf-u-pt-sm"},y().createElement("span",{className:"ins-c-rule-details__stackitem"},y().createElement("span",null,y().createElement(f.Z,{text:c.RISK_OF_CHANGE_LABEL[s],value:s,hideIcon:!0})),y().createElement(i.Stack,{hasGutter:!0,className:"description-stack-override"},y().createElement(i.StackItem,null,y().createElement(x.D,null,y().createElement(u.xv,{component:u.qO.p},s?c.RISK_OF_CHANGE_DESC[s]:p.formatMessage(D.Z.undefined)))),y().createElement(i.StackItem,null,y().createElement("span",{className:"system-reboot-message"},y().createElement(E.ZP,{className:a.reboot_required?"reboot-required-icon":"no-reboot-required-icon"}),y().createElement(x.D,{className:"system-reboot-message__content"},y().createElement(u.xv,{component:u.qO.p},p.formatMessage(D.Z.systemReboot,{strong:function(e){return(0,H.f)(e)},status:a.reboot_required?p.formatMessage(D.Z.is):p.formatMessage(D.Z.isNot)})))))))))))))};q.propTypes={children:k().any,rule:k().object,resolutionRisk:k().number,intl:k().any,topics:k().array,header:k().any,isDetailsPage:k().bool};const z=(0,A.ZP)(q)}}]);
//# sourceMappingURL=../sourcemaps/144.ff24672f82adf08b60a4.js.map