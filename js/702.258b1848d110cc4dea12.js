(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[702],{44788:(e,t,n)=>{"use strict";n.d(t,{Z:()=>I});var a=n(96156),r=n(92137),s=n(28481),l=n(87757),c=n.n(l),o=n(57149),i=n(93264),u=n.n(i),m=n(71094),f=n(59303),d=n(6202),p=n(32752),g=n(4853),E=n(23811),b=n(78826),h=n(45697),k=n.n(h),y=n(12282),v=n(71355),Z=n(30893),_=n(88931),M=n(86896);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(e){var t=e.handleModalToggle,n=e.isModalOpen,a=e.host,l=e.hosts,h=e.rule,k=e.afterFn,O=(0,M.Z)(),j=(0,_.useDispatch)(),I=function(e){return j((0,v.wN)(e))},P=(0,i.useState)(""),T=(0,s.Z)(P,2),w=T[0],D=T[1],A=(0,i.useState)(void 0!==a||l.length>0),N=(0,s.Z)(A,2),L=N[0],x=N[1],C=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={systems:l,justification:w},e.prev=1,e.next=4,m.Z.post("".concat(f.BASE_URL,"/rule/").concat(h.rule_id,"/ack_hosts/"),{},t);case 4:!L&&I({variant:"success",dismissable:!0,timeout:!0,title:O.formatMessage(Z.Z.recSuccessfullyDisabledForSystem)}),k&&k(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),I({variant:"danger",dismissable:!0,title:O.formatMessage(Z.Z.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"!==h.rule_status||l.length){e.next=15;break}return n=L?{type:"HOST",options:{rule:h.rule_id,system_uuid:a.id,justification:w}}:{type:"RULE",options:S({rule_id:h.rule_id},w&&{justification:w})},e.prev=2,e.next=5,r=n,j(o.s1(r));case 5:I(L?{variant:"success",timeout:!0,dismissable:!0,title:O.formatMessage(Z.Z.recSuccessfullyDisabledForSystem)}:{variant:"success",timeout:!0,dismissable:!0,title:O.formatMessage(Z.Z.recSuccessfullyDisabled)}),D(""),k&&k(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),I({variant:"danger",dismissable:!0,title:O.formatMessage(Z.Z.error),description:"".concat(e.t0)});case 13:e.next=16;break;case 15:C();case 16:t(!1);case 17:case"end":return e.stop()}var r}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return u().createElement(b.u_,{variant:"small",title:O.formatMessage(Z.Z.disableRule),isOpen:n,onClose:function(){t(!1),D("")},actions:[u().createElement(d.Button,{key:"confirm",variant:"primary",onClick:function(){return R()},ouiaId:"confirm"},O.formatMessage(Z.Z.save)),u().createElement(d.Button,{key:"cancel",variant:"link",onClick:function(){t(!1),D("")},ouiaId:"cancel"},O.formatMessage(Z.Z.cancel))]},O.formatMessage(Z.Z.disableRuleBody),u().createElement(g.l,null,u().createElement(E.c,{fieldId:"blank-form"}),(void 0!==a||l.length>0)&&u().createElement(E.c,{fieldId:"disable-rule-one-system"},u().createElement(p.X,{isChecked:L,onChange:function(){x(!L)},label:l.length?O.formatMessage(Z.Z.disableRuleForSystems):O.formatMessage(Z.Z.disableRuleSingleSystem),id:"disable-rule-one-system",name:"disable-rule-one-system"})),u().createElement(E.c,{label:O.formatMessage(Z.Z.justificationNote),fieldId:"disable-rule-justification"},u().createElement(y.oi,{type:"text",id:"disable-rule-justification","aria-describedby":"disable-rule-justification",value:w,onChange:function(e){return D(e)},onKeyDown:function(e){return"Enter"===e.key&&(e.preventDefault(),R())}}))))};j.propTypes={isModalOpen:k().bool,host:k().object,handleModalToggle:k().func,rule:k().object,afterFn:k().func,hosts:k().array},j.defaultProps={isModalOpen:!1,handleModalToggle:function(){},system:void 0,rule:{},afterFn:function(){},host:void 0,hosts:[]};const I=j},95358:(e,t,n)=>{"use strict";n.d(t,{Z:()=>j});var a=n(96156),r=n(92137),s=n(28481),l=n(87757),c=n.n(l),o=n(93264),i=n.n(o),u=n(9942),m=n(57149),f=n(71094),d=n(59303),p=n(6202),g=n(62410),E=n(24561),b=n(78826),h=n(6234),k=n(45697),y=n.n(k),v=n(71355),Z=n(88931),_=n(74806),M=n(30893);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var S=function(e){var t=e.fetchHostAcks,n=e.hostAcksFetchStatus,a=e.handleModalToggle,l=e.intl,m=e.isModalOpen,k=e.hostAcks,y=e.rule,Z=e.afterFn,_=[l.formatMessage(M.Z.systemName),l.formatMessage(M.Z.justificationNote),l.formatMessage(M.Z.dateDisabled),""],O=(0,o.useState)([]),S=(0,s.Z)(O,2),j=S[0],I=S[1],P=(0,o.useState)(!1),T=(0,s.Z)(P,2),w=T[0],D=T[1],A=function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.delete("".concat(d.BASE_URL,"/hostack/").concat(n.id,"/"));case 3:t({rule_id:y.rule_id,limit:y.hosts_acked_count}),D(!0),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),a(!1),(0,v.wN)({variant:"danger",dismissable:!0,title:l.formatMessage(M.Z.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){if(k.data){var e=k.data.map((function(e){return{cells:[e.display_name||e.system_uuid,e.justification||l.formatMessage(M.Z.none),{title:i().createElement(g.Z,{date:new Date(e.updated_at),type:"onlyDate"})},{title:i().createElement(p.Button,{key:e.system_uuid,isInline:!0,variant:"link",onClick:function(){return A(e)}},i().createElement(h.ZP,{size:"sm"}),"  "," ",l.formatMessage(M.Z.enable))}]}})).asMutable();e.length||(Z(),a(!1)),I(e)}}),[k]),(0,o.useEffect)((function(){t({rule_id:y.rule_id,limit:y.hosts_acked_count})}),[t,y.hosts_acked_count,y.rule_id]),i().createElement(b.u_,{width:"50%",title:l.formatMessage(M.Z.hostAckModalTitle),isOpen:m,onClose:function(){w&&Z(),a(!1)}},"fulfilled"===n&&i().createElement(u.Table,{"aria-label":"host-ack-table",rows:j,cells:_},i().createElement(u.TableHeader,null),i().createElement(u.TableBody,null)),"fulfilled"!==n&&i().createElement(u.Table,{"aria-label":"host-ack-table",rows:[{cells:[{props:{colSpan:3},title:i().createElement(E.aV,null)}]}],cells:_},i().createElement(u.TableHeader,null),i().createElement(u.TableBody,null)))};S.propTypes={isModalOpen:y().bool,handleModalToggle:y().func,intl:y().any,rule:y().object,fetchHostAcks:y().func,hostAcks:y().object,hostAcksFetchStatus:y().string,addNotification:y().func,afterFn:y().func},S.defaultProps={isModalOpen:!1,handleModalToggle:function(){},rule:{},afterFn:function(){}};const j=(0,_.ZP)((0,Z.connect)((function(e){var t=e.AdvisorStore,n=e.ownProps;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hostAcks:t.hostAcks,hostAcksFetchStatus:t.hostAcksFetchStatus},n)}),(function(e){return{setAck:function(t){return e((0,m.s1)(t))},fetchHostAcks:function(t){return e((0,m.CM)(t))},addNotification:function(t){return e((0,v.wN)(t))}}}))(S))},87533:(e,t,n)=>{"use strict";n.d(t,{Z:()=>z});var a=n(25325),r=n.n(a),s=n(39693),l=n.n(s),c=n(59303),o=n(92506),i=n(88292),u=n(63540),m=n(50470),f=n(78216),d=n(16530),p=n(15206),g=n.n(p),E=n(52491),b=n(45697),h=n.n(b),k=n(93264),y=n.n(k),v=n(92137),Z=n(28481),_=n(87757),M=n.n(_),O=n(71094),S=n(6202),j=n(49580),I=n(11239),P=n(90502),T=n(61088),w=n(74806),D=n(30893),A=function(e){var t=e.intl,n=e.rule,a=(0,k.useState)(n.rating),r=(0,Z.Z)(a,2),s=r[0],l=r[1],o=(0,k.useState)(!1),i=(0,Z.Z)(o,2),u=i[0],m=i[1],f=(0,k.useState)(t.formatMessage(D.Z.feedbackThankyou)),d=(0,Z.Z)(f,2),p=d[0],g=d[1],E=function(){var e=(0,v.Z)(M().mark((function e(t){var a;return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s===t?0:t,e.prev=1,e.next=4,O.Z.post("".concat(c.BASE_URL,"/rating/"),{},{rule:n.rule_id,rating:a});case 4:l(a),m(!0),setTimeout((function(){return g("")}),3e3),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return y().createElement("span",{className:"ratingSpanOverride"},t.formatMessage(D.Z.ruleHelpful),y().createElement(S.Button,{variant:"plain","aria-label":"thumbs-up",onClick:function(){return E(1)},ouiaId:"thumbsUp"},1===s?y().createElement(T.ZP,{className:"like",size:"sm"}):y().createElement(I.ZP,{size:"sm"})),y().createElement(S.Button,{variant:"plain","aria-label":"thumbs-down",onClick:function(){return E(-1)},ouiaId:"thumbsDown"},-1===s?y().createElement(P.ZP,{className:"dislike",size:"sm"}):y().createElement(j.ZP,{size:"sm"})),u&&p)};A.propTypes={intl:h().any,rule:h().object};const N=(0,w.ZP)(A);var L=n(24047),x=n(20018);var C=n(76388),R=n.n(C),B=n(1667),F=n.n(B),H=n(28186),q=function(e){var t,n=e.children,a=e.rule,s=e.resolutionRisk,p=e.intl,b=e.topics,h=e.header,k=e.isDetailsPage,v=function(){return b&&l()(b.map((function(e){return r()(e.tag.split(" "),a.tags.split(" ")).length&&y().createElement(y().Fragment,{key:e.slug},y().createElement(d.Link,{to:"/topics/".concat(e.slug)},"".concat(e.name)))})))},Z=function(e,t){return"string"==typeof e&&Boolean(e)&&y().createElement("span",{className:t&&"genericOverride"},y().createElement(g(),{rehypePlugins:[R(),F()]},e))};return y().createElement(o.Split,{className:"ins-c-rule-details__split",hasGutter:!0},y().createElement(o.SplitItem,null,y().createElement(i.Stack,{hasGutter:!0},h&&y().createElement(i.StackItem,null,h),y().createElement(i.StackItem,null,k?Z(a.generic,!0):Z(a.summary)),a.node_id&&y().createElement(i.StackItem,null,y().createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://access.redhat.com/node/".concat(a.node_id)},p.formatMessage(D.Z.knowledgebaseArticle)," ",y().createElement(m.ZP,{size:"sm"}))),b&&a.tags&&v().length>0&&y().createElement(i.StackItem,null,y().createElement("strong",null,p.formatMessage(D.Z.topicRelatedToRule)),y().createElement("br",null),(t=v()).map((function(e,n){return y().createElement(y().Fragment,{key:n},e,n+1!==t.length&&y().createElement("strong",{className:"verticalDivider"}," | "))}))),k&&y().createElement(N,{rule:a}),!k&&a.impacted_systems_count>0&&y().createElement(i.StackItem,null,y().createElement(d.Link,{key:"".concat(a.rule_id,"-link"),to:"/recommendations/".concat(a.rule_id)},p.formatMessage(D.Z.viewAffectedSystems,{systems:a.impacted_systems_count}))))),y().createElement(o.SplitItem,null,y().createElement(i.Stack,{gutter:"sm"},n&&y().createElement(i.StackItem,null,n),y().createElement(i.StackItem,null,y().createElement(i.Stack,{className:"ins-c-rule-details__stack"},y().createElement(i.StackItem,null,y().createElement("strong",null,p.formatMessage(D.Z.totalRisk))),y().createElement(i.StackItem,{className:"pf-u-display-inline-flex alignCenterOverride pf-u-pb-sm pf-u-pt-sm"},y().createElement("span",{className:"ins-c-rule-details__stackitem"},y().createElement("span",null,y().createElement(f.Z,{value:a.total_risk})),y().createElement(i.Stack,{hasGutter:!0,className:"description-stack-override"},y().createElement(i.StackItem,null,y().createElement(x.D,null,y().createElement(u.xv,{component:u.qO.p},p.formatMessage(D.Z.rulesDetailsTotalriskBody,{risk:c.TOTAL_RISK_LABEL_LOWER[a.total_risk]||p.formatMessage(D.Z.undefined),strong:function(e){return(0,H.f)(e)}})))),y().createElement(i.Stack,null,y().createElement(i.StackItem,null,y().createElement(L.c,{className:"severity-line",title:p.formatMessage(D.Z.likelihoodLevel,{level:c.LIKELIHOOD_LABEL[a.likelihood]}),value:a.likelihood,tooltipMessage:p.formatMessage(D.Z.likelihoodDescription,{level:c.LIKELIHOOD_LABEL_LOWER[a.likelihood]})})),y().createElement(i.StackItem,null,y().createElement(L.c,{className:"severity-line",title:p.formatMessage(D.Z.impactLevel,{level:c.IMPACT_LABEL[a.impact.impact]}),value:a.impact.impact,tooltipMessage:p.formatMessage(D.Z.impactDescription,{level:c.IMPACT_LABEL_LOWER[a.impact.impact]})})))))),y().createElement("hr",null),y().createElement(i.StackItem,null,y().createElement("strong",null,p.formatMessage(D.Z.riskofchange))),y().createElement(i.StackItem,{className:"pf-u-display-inline-flex alignCenterOverride pf-u-pb-sm pf-u-pt-sm"},y().createElement("span",{className:"ins-c-rule-details__stackitem"},y().createElement("span",null,y().createElement(f.Z,{text:c.RISK_OF_CHANGE_LABEL[s],value:s,hideIcon:!0})),y().createElement(i.Stack,{hasGutter:!0,className:"description-stack-override"},y().createElement(i.StackItem,null,y().createElement(x.D,null,y().createElement(u.xv,{component:u.qO.p},s?c.RISK_OF_CHANGE_DESC[s]:p.formatMessage(D.Z.undefined)))),y().createElement(i.StackItem,null,y().createElement("span",{className:"system-reboot-message"},y().createElement(E.ZP,{className:a.reboot_required?"reboot-required-icon":"no-reboot-required-icon"}),y().createElement(x.D,{className:"system-reboot-message__content"},y().createElement(u.xv,{component:u.qO.p},p.formatMessage(D.Z.systemReboot,{strong:function(e){return(0,H.f)(e)},status:a.reboot_required?p.formatMessage(D.Z.is):p.formatMessage(D.Z.isNot)})))))))))))))};q.propTypes={children:h().any,rule:h().object,resolutionRisk:h().number,intl:h().any,topics:h().array,header:h().any,isDetailsPage:h().bool};const z=(0,w.ZP)(q)},83808:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var a=n(76004),r=n(23218),s=n(45697),l=n.n(s),c=n(93264),o=n.n(c),i=n(74806),u=n(30893),m=function(e){var t=e.intl,n=e.rule;return o().createElement(o().Fragment,null,-1!==n.tags.search("incident")&&o().createElement(a.Tooltip,{content:t.formatMessage(u.Z.incidentTooltip),position:a.TooltipPosition.right},o().createElement(r._,{color:"red",className:"incidentLabel"},t.formatMessage(u.Z.incident))),"disabled"===n.rule_status&&o().createElement(a.Tooltip,{content:t.formatMessage(u.Z.ruleIsDisabledTooltip),position:a.TooltipPosition.right},o().createElement(r._,{color:"gray"},t.formatMessage(u.Z.disabled))),"rhdisabled"===n.rule_status&&o().createElement(a.Tooltip,{content:t.formatMessage(u.Z.ruleIsDisabledTooltip),position:a.TooltipPosition.right},o().createElement(r._,{color:"gray"},t.formatMessage(u.Z.redhatDisabled))))};m.propTypes={intl:l().any,rule:l().object};const f=(0,i.ZP)(m)}}]);
//# sourceMappingURL=../sourcemaps/702.e768a26f15077a897445.js.map