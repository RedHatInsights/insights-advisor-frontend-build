(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[144],{44788:(e,t,n)=>{"use strict";n.d(t,{Z:()=>I});var a=n(96156),r=n(92137),s=n(28481),l=n(87757),c=n.n(l),i=n(57149),o=n(93264),u=n.n(o),m=n(71094),f=n(59303),d=n(6202),p=n(32752),g=n(4853),E=n(23811),k=n(78826),b=n(45697),h=n.n(b),y=n(12282),v=n(71355),Z=n(30893),_=n(88931),S=n(86896);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(e){var t=e.handleModalToggle,n=e.isModalOpen,a=e.host,l=e.hosts,b=e.rule,h=e.afterFn,O=(0,S.Z)(),j=(0,_.useDispatch)(),I=function(e){return j((0,v.wN)(e))},w=(0,o.useState)(""),P=(0,s.Z)(w,2),T=P[0],A=P[1],L=(0,o.useState)(void 0!==a||l.length>0),D=(0,s.Z)(L,2),N=D[0],x=D[1],C=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={systems:l,justification:T},e.prev=1,e.next=4,m.Z.post("".concat(f.BASE_URL,"/rule/").concat(b.rule_id,"/ack_hosts/"),{},t);case 4:!N&&I({variant:"success",dismissable:!0,timeout:!0,title:O.formatMessage(Z.Z.recSuccessfullyDisabledForSystem)}),h&&h(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),I({variant:"danger",dismissable:!0,title:O.formatMessage(Z.Z.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"!==b.rule_status||l.length){e.next=15;break}return n=N?{type:"HOST",options:{rule:b.rule_id,system_uuid:a.id,justification:T}}:{type:"RULE",options:M({rule_id:b.rule_id},T&&{justification:T})},e.prev=2,e.next=5,r=n,j(i.s1(r));case 5:I(N?{variant:"success",timeout:!0,dismissable:!0,title:O.formatMessage(Z.Z.recSuccessfullyDisabledForSystem)}:{variant:"success",timeout:!0,dismissable:!0,title:O.formatMessage(Z.Z.recSuccessfullyDisabled)}),A(""),h&&h(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),I({variant:"danger",dismissable:!0,title:O.formatMessage(Z.Z.error),description:"".concat(e.t0)});case 13:e.next=16;break;case 15:C();case 16:t(!1);case 17:case"end":return e.stop()}var r}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return u().createElement(k.u_,{variant:"small",title:O.formatMessage(Z.Z.disableRule),isOpen:n,onClose:function(){t(!1),A("")},actions:[u().createElement(d.Button,{key:"confirm",variant:"primary",onClick:function(){return B()},ouiaId:"confirm"},O.formatMessage(Z.Z.save)),u().createElement(d.Button,{key:"cancel",variant:"link",onClick:function(){t(!1),A("")},ouiaId:"cancel"},O.formatMessage(Z.Z.cancel))]},O.formatMessage(Z.Z.disableRuleBody),u().createElement(g.l,null,u().createElement(E.c,{fieldId:"blank-form"}),(void 0!==a||l.length>0)&&u().createElement(E.c,{fieldId:"disable-rule-one-system"},u().createElement(p.X,{isChecked:N,onChange:function(){x(!N)},label:l.length?O.formatMessage(Z.Z.disableRuleForSystems):O.formatMessage(Z.Z.disableRuleSingleSystem),id:"disable-rule-one-system",name:"disable-rule-one-system"})),u().createElement(E.c,{label:O.formatMessage(Z.Z.justificationNote),fieldId:"disable-rule-justification"},u().createElement(y.oi,{type:"text",id:"disable-rule-justification","aria-describedby":"disable-rule-justification",value:T,onChange:function(e){return A(e)},onKeyDown:function(e){return"Enter"===e.key&&(e.preventDefault(),B())}}))))};j.propTypes={isModalOpen:h().bool,host:h().object,handleModalToggle:h().func,rule:h().object,afterFn:h().func,hosts:h().array},j.defaultProps={isModalOpen:!1,handleModalToggle:function(){},system:void 0,rule:{},afterFn:function(){},host:void 0,hosts:[]};const I=j},95358:(e,t,n)=>{"use strict";n.d(t,{Z:()=>j});var a=n(96156),r=n(92137),s=n(28481),l=n(87757),c=n.n(l),i=n(93264),o=n.n(i),u=n(94550),m=n(57149),f=n(71094),d=n(59303),p=n(6202),g=n(62410),E=n(24561),k=n(78826),b=n(6234),h=n(45697),y=n.n(h),v=n(71355),Z=n(88931),_=n(74806),S=n(30893);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var M=function(e){var t=e.fetchHostAcks,n=e.hostAcksFetchStatus,a=e.handleModalToggle,l=e.intl,m=e.isModalOpen,h=e.hostAcks,y=e.rule,Z=e.afterFn,_=[l.formatMessage(S.Z.systemName),l.formatMessage(S.Z.justificationNote),l.formatMessage(S.Z.dateDisabled),""],O=(0,i.useState)([]),M=(0,s.Z)(O,2),j=M[0],I=M[1],w=(0,i.useState)(!1),P=(0,s.Z)(w,2),T=P[0],A=P[1],L=function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.delete("".concat(d.BASE_URL,"/hostack/").concat(n.id,"/"));case 3:t({rule_id:y.rule_id,limit:y.hosts_acked_count}),A(!0),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),a(!1),(0,v.wN)({variant:"danger",dismissable:!0,title:l.formatMessage(S.Z.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){if(h.data){var e=h.data.map((function(e){return{cells:[e.display_name||e.system_uuid,e.justification||l.formatMessage(S.Z.none),{title:o().createElement(g.Z,{date:new Date(e.updated_at),type:"onlyDate"})},{title:o().createElement(p.Button,{key:e.system_uuid,isInline:!0,variant:"link",onClick:function(){return L(e)}},o().createElement(b.ZP,{size:"sm"}),"  "," ",l.formatMessage(S.Z.enable))}]}})).asMutable();e.length||(Z(),a(!1)),I(e)}}),[h]),(0,i.useEffect)((function(){t({rule_id:y.rule_id,limit:y.hosts_acked_count})}),[t,y.hosts_acked_count,y.rule_id]),o().createElement(k.u_,{width:"50%",title:l.formatMessage(S.Z.hostAckModalTitle),isOpen:m,onClose:function(){T&&Z(),a(!1)}},"fulfilled"===n&&o().createElement(u.Table,{"aria-label":"host-ack-table",rows:j,cells:_},o().createElement(u.TableHeader,null),o().createElement(u.TableBody,null)),"fulfilled"!==n&&o().createElement(u.Table,{"aria-label":"host-ack-table",rows:[{cells:[{props:{colSpan:3},title:o().createElement(E.aV,null)}]}],cells:_},o().createElement(u.TableHeader,null),o().createElement(u.TableBody,null)))};M.propTypes={isModalOpen:y().bool,handleModalToggle:y().func,intl:y().any,rule:y().object,fetchHostAcks:y().func,hostAcks:y().object,hostAcksFetchStatus:y().string,addNotification:y().func,afterFn:y().func},M.defaultProps={isModalOpen:!1,handleModalToggle:function(){},rule:{},afterFn:function(){}};const j=(0,_.ZP)((0,Z.connect)((function(e){var t=e.AdvisorStore,n=e.ownProps;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hostAcks:t.hostAcks,hostAcksFetchStatus:t.hostAcksFetchStatus},n)}),(function(e){return{setAck:function(t){return e((0,m.s1)(t))},fetchHostAcks:function(t){return e((0,m.CM)(t))},addNotification:function(t){return e((0,v.wN)(t))}}}))(M))},87533:(e,t,n)=>{"use strict";n.d(t,{Z:()=>z});var a=n(25325),r=n.n(a),s=n(39693),l=n.n(s),c=n(59303),i=n(92506),o=n(88292),u=n(66197),m=n(50470),f=n(78216),d=n(16530),p=n(15206),g=n.n(p),E=n(45697),k=n.n(E),b=n(93264),h=n.n(b),y=n(52202),v=n(92137),Z=n(28481),_=n(87757),S=n.n(_),O=n(71094),M=n(6202),j=n(49580),I=n(11239),w=n(90502),P=n(61088),T=n(74806),A=n(30893),L=function(e){var t=e.intl,n=e.rule,a=(0,b.useState)(n.rating),r=(0,Z.Z)(a,2),s=r[0],l=r[1],i=(0,b.useState)(!1),o=(0,Z.Z)(i,2),u=o[0],m=o[1],f=(0,b.useState)(t.formatMessage(A.Z.feedbackThankyou)),d=(0,Z.Z)(f,2),p=d[0],g=d[1],E=function(){var e=(0,v.Z)(S().mark((function e(t){var a;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s===t?0:t,e.prev=1,e.next=4,O.Z.post("".concat(c.BASE_URL,"/rating/"),{},{rule:n.rule_id,rating:a});case 4:l(a),m(!0),setTimeout((function(){return g("")}),3e3),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return h().createElement("span",{className:"ratingSpanOverride"},t.formatMessage(A.Z.ruleHelpful),h().createElement(M.Button,{variant:"plain","aria-label":"thumbs-up",onClick:function(){return E(1)},ouiaId:"thumbsUp"},1===s?h().createElement(P.ZP,{className:"like",size:"sm"}):h().createElement(I.ZP,{size:"sm"})),h().createElement(M.Button,{variant:"plain","aria-label":"thumbs-down",onClick:function(){return E(-1)},ouiaId:"thumbsDown"},-1===s?h().createElement(w.ZP,{className:"dislike",size:"sm"}):h().createElement(j.ZP,{size:"sm"})),u&&p)};L.propTypes={intl:k().any,rule:k().object};const D=(0,T.ZP)(L);var N=n(24047);var x=n(76388),C=n.n(x),B=n(1667),R=n.n(B),F=n(28186),H=function(e){var t,n=e.children,a=e.rule,s=e.resolutionRisk,p=e.intl,E=e.topics,k=e.header,b=e.isDetailsPage,v=function(){return E&&l()(E.map((function(e){return r()(e.tag.split(" "),a.tags.split(" ")).length&&h().createElement(h().Fragment,{key:e.slug},h().createElement(d.Link,{to:"/topics/".concat(e.slug)},"".concat(e.name)))})))},Z=function(e,t){return"string"==typeof e&&Boolean(e)&&h().createElement("span",{className:t&&"genericOverride"},h().createElement(g(),{rehypePlugins:[C(),R()]},e))};return h().createElement(i.Split,{className:"ins-c-rule-details__split",hasGutter:!0},h().createElement(i.SplitItem,null,h().createElement(o.Stack,{hasGutter:!0},k&&h().createElement(o.StackItem,null,k),h().createElement(o.StackItem,null,b?Z(a.generic,!0):Z(a.summary)),a.node_id&&h().createElement(o.StackItem,null,h().createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://access.redhat.com/node/".concat(a.node_id)},p.formatMessage(A.Z.knowledgebaseArticle)," ",h().createElement(m.ZP,{size:"sm"}))),E&&a.tags&&v().length>0&&h().createElement(o.StackItem,null,h().createElement("strong",null,p.formatMessage(A.Z.topicRelatedToRule)),h().createElement("br",null),(t=v()).map((function(e,n){return h().createElement(h().Fragment,{key:n},e,n+1!==t.length&&h().createElement("strong",{className:"verticalDivider"}," | "))}))),b&&h().createElement(D,{rule:a}),!b&&a.impacted_systems_count>0&&h().createElement(o.StackItem,null,h().createElement(d.Link,{key:"".concat(a.rule_id,"-link"),to:"/recommendations/".concat(a.rule_id)},p.formatMessage(A.Z.viewAffectedSystems,{systems:a.impacted_systems_count}))))),h().createElement(i.SplitItem,null,h().createElement(o.Stack,{gutter:"sm"},n&&h().createElement(o.StackItem,null,n),h().createElement(o.StackItem,null,h().createElement(o.Stack,{className:"ins-c-rule-details__stack"},h().createElement(o.StackItem,null,h().createElement("strong",null,p.formatMessage(A.Z.totalRisk))),h().createElement(o.StackItem,{className:"pf-u-display-inline-flex alignCenterOverride pf-u-pb-sm pf-u-pt-sm"},h().createElement("span",{className:"ins-c-rule-details__stackitem"},h().createElement("span",null,h().createElement(f.Z,{value:a.total_risk})),h().createElement(o.Stack,{hasGutter:!0,className:"description-stack-override"},h().createElement(o.StackItem,null,h().createElement(u.TextContent,null,h().createElement(u.Text,{component:u.TextVariants.p},p.formatMessage(A.Z.rulesDetailsTotalriskBody,{risk:c.TOTAL_RISK_LABEL_LOWER[a.total_risk]||p.formatMessage(A.Z.undefined),strong:function(e){return(0,F.f)(e)}})))),h().createElement(o.Stack,null,h().createElement(o.StackItem,null,h().createElement(N.c,{className:"severity-line",title:p.formatMessage(A.Z.likelihoodLevel,{level:c.LIKELIHOOD_LABEL[a.likelihood]}),value:a.likelihood,tooltipMessage:p.formatMessage(A.Z.likelihoodDescription,{level:c.LIKELIHOOD_LABEL_LOWER[a.likelihood]})})),h().createElement(o.StackItem,null,h().createElement(N.c,{className:"severity-line",title:p.formatMessage(A.Z.impactLevel,{level:c.IMPACT_LABEL[a.impact.impact]}),value:a.impact.impact,tooltipMessage:p.formatMessage(A.Z.impactDescription,{level:c.IMPACT_LABEL_LOWER[a.impact.impact]})})))))),h().createElement("hr",null),h().createElement(o.StackItem,null,h().createElement("strong",null,p.formatMessage(A.Z.riskofchange))),h().createElement(o.StackItem,{className:"pf-u-display-inline-flex alignCenterOverride pf-u-pb-sm pf-u-pt-sm"},h().createElement("span",{className:"ins-c-rule-details__stackitem"},h().createElement("span",null,h().createElement(f.Z,{text:c.RISK_OF_CHANGE_LABEL[s],value:s,hideIcon:!0})),h().createElement(o.Stack,{hasGutter:!0,className:"description-stack-override"},h().createElement(o.StackItem,null,h().createElement(u.TextContent,null,h().createElement(u.Text,{component:u.TextVariants.p},s?c.RISK_OF_CHANGE_DESC[s]:p.formatMessage(A.Z.undefined)))),h().createElement(o.StackItem,null,(0,y.k)(a.reboot_required))))))))))};H.propTypes={children:k().any,rule:k().object,resolutionRisk:k().number,intl:k().any,topics:k().array,header:k().any,isDetailsPage:k().bool};const z=(0,T.ZP)(H)}}]);
//# sourceMappingURL=../sourcemaps/144.effef16e48394cfc0693.js.map