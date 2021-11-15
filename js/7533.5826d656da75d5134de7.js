"use strict";(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[7533],{87533:(e,t,a)=>{a.d(t,{Z:()=>W});var n=a(4942),r=a(45987),l=a(25325),s=a.n(l),c=a(39693),o=a.n(c),i=a(59303),m=a(86896),u=a(29558),p=a(92506),E=a(88292),f=a(63540),g=a(50470),d=a(78216),k=a(16530),v=a(39563),_=a(52491),b=a(45697),Z=a.n(b),h=a(93264),y=a.n(h),S=a(15861),O=a(29439),I=a(87757),L=a.n(I),P=a(71094),M=a(6202),N=a(49580),D=a(11239),w=a(90502),A=a(61088),j=a(74806),R=a(30893),B=function(e){var t=e.intl,a=e.rule,n=(0,h.useState)(a.rating),r=(0,O.Z)(n,2),l=r[0],s=r[1],c=(0,h.useState)(!1),o=(0,O.Z)(c,2),m=o[0],u=o[1],p=(0,h.useState)(t.formatMessage(R.Z.feedbackThankyou)),E=(0,O.Z)(p,2),f=E[0],g=E[1],d=function(){var e=(0,S.Z)(L().mark((function e(t){var n;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l===t?0:t,e.prev=1,e.next=4,P.Z.post("".concat(i.BASE_URL,"/rating/"),{},{rule:a.rule_id,rating:n});case 4:s(n),u(!0),setTimeout((function(){return g("")}),3e3),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return y().createElement("span",{className:"ratingSpanOverride"},t.formatMessage(R.Z.ruleHelpful),y().createElement(M.Button,{variant:"plain","aria-label":"thumbs-up",onClick:function(){return d(1)},ouiaId:"thumbsUp"},1===l?y().createElement(A.ZP,{className:"like",size:"sm"}):y().createElement(D.ZP,{size:"sm"})),y().createElement(M.Button,{variant:"plain","aria-label":"thumbs-down",onClick:function(){return d(-1)},ouiaId:"thumbsDown"},-1===l?y().createElement(w.ZP,{className:"dislike",size:"sm"}):y().createElement(N.ZP,{size:"sm"})),m&&f)};B.propTypes={intl:Z().any,rule:Z().object};const C=(0,j.ZP)(B);var T=a(24047),x=a(20018);var q=a(68770),G=a(66451),z=a(28186),F=["customItnl","intlProps"];function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var K=function(e){var t,a=e.children,n=e.rule,r=e.resolutionRisk,l=e.topics,c=e.header,u=e.isDetailsPage,b=(0,m.Z)(),Z=function(){return l&&o()(l.map((function(e){return s()(e.tag.split(" "),n.tags.split(" ")).length&&y().createElement(y().Fragment,{key:e.slug},y().createElement(k.Link,{to:"/topics/".concat(e.slug)},"".concat(e.name)))})))},h=function(e,t){return"string"==typeof e&&Boolean(e)&&y().createElement("span",{className:t&&"genericOverride"},y().createElement(v.Z,{rehypePlugins:[q.Z,G.Z]},e))};return y().createElement(p.Split,{className:"ins-c-rule-details__split",hasGutter:!0},y().createElement(p.SplitItem,null,y().createElement(E.Stack,{hasGutter:!0},c&&y().createElement(E.StackItem,null,c),y().createElement(E.StackItem,null,u?h(n.generic,!0):h(n.summary)),n.node_id&&y().createElement(E.StackItem,null,y().createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://access.redhat.com/node/".concat(n.node_id)},b.formatMessage(R.Z.knowledgebaseArticle)," ",y().createElement(g.ZP,{size:"sm"}))),l&&n.tags&&Z().length>0&&y().createElement(E.StackItem,null,y().createElement("strong",null,b.formatMessage(R.Z.topicRelatedToRule)),y().createElement("br",null),(t=Z()).map((function(e,a){return y().createElement(y().Fragment,{key:a},e,a+1!==t.length&&y().createElement("strong",{className:"verticalDivider"}," | "))}))),u&&y().createElement(C,{rule:n}),!u&&n.impacted_systems_count>0&&y().createElement(E.StackItem,null,y().createElement(k.Link,{key:"".concat(n.rule_id,"-link"),to:"/recommendations/".concat(n.rule_id)},b.formatMessage(R.Z.viewAffectedSystems,{systems:n.impacted_systems_count}))))),y().createElement(p.SplitItem,null,y().createElement(E.Stack,{gutter:"sm"},a&&y().createElement(E.StackItem,null,a),y().createElement(E.StackItem,null,y().createElement(E.Stack,{className:"ins-c-rule-details__stack"},y().createElement(E.StackItem,null,y().createElement("strong",null,b.formatMessage(R.Z.totalRisk))),y().createElement(E.StackItem,{className:"pf-u-display-inline-flex alignCenterOverride pf-u-pb-sm pf-u-pt-sm"},y().createElement("span",{className:"ins-c-rule-details__stackitem"},y().createElement("span",null,y().createElement(d.Z,{value:n.total_risk})),y().createElement(E.Stack,{hasGutter:!0,className:"description-stack-override"},y().createElement(E.StackItem,null,y().createElement(x.D,null,y().createElement(f.xv,{component:f.qO.p},b.formatMessage(R.Z.rulesDetailsTotalriskBody,{risk:i.TOTAL_RISK_LABEL_LOWER[n.total_risk]||b.formatMessage(R.Z.undefined),strong:function(e){return(0,z.f)(e)}})))),y().createElement(E.Stack,null,y().createElement(E.StackItem,null,y().createElement(T.c,{className:"severity-line",title:b.formatMessage(R.Z.likelihoodLevel,{level:i.LIKELIHOOD_LABEL[n.likelihood]}),value:n.likelihood,tooltipMessage:b.formatMessage(R.Z.likelihoodDescription,{level:i.LIKELIHOOD_LABEL_LOWER[n.likelihood]})})),y().createElement(E.StackItem,null,y().createElement(T.c,{className:"severity-line",title:b.formatMessage(R.Z.impactLevel,{level:i.IMPACT_LABEL[n.impact.impact]}),value:n.impact.impact,tooltipMessage:b.formatMessage(R.Z.impactDescription,{level:i.IMPACT_LABEL_LOWER[n.impact.impact]})})))))),y().createElement("hr",null),y().createElement(E.StackItem,null,y().createElement("strong",null,b.formatMessage(R.Z.riskofchange))),y().createElement(E.StackItem,{className:"pf-u-display-inline-flex alignCenterOverride pf-u-pb-sm pf-u-pt-sm"},y().createElement("span",{className:"ins-c-rule-details__stackitem"},y().createElement("span",null,y().createElement(d.Z,{text:i.RISK_OF_CHANGE_LABEL[r],value:r,hideIcon:!0})),y().createElement(E.Stack,{hasGutter:!0,className:"description-stack-override"},y().createElement(E.StackItem,null,y().createElement(x.D,null,y().createElement(f.xv,{component:f.qO.p},r?i.RISK_OF_CHANGE_DESC[r]:b.formatMessage(R.Z.undefined)))),y().createElement(E.StackItem,null,y().createElement("span",{className:"system-reboot-message"},y().createElement(_.ZP,{className:n.reboot_required?"reboot-required-icon":"no-reboot-required-icon"}),y().createElement(x.D,{className:"system-reboot-message__content"},y().createElement(f.xv,{component:f.qO.p},b.formatMessage(R.Z.systemReboot,{strong:function(e){return(0,z.f)(e)},status:n.reboot_required?b.formatMessage(R.Z.is):b.formatMessage(R.Z.isNot)})))))))))))))};K.propTypes={children:Z().any,rule:Z().object,resolutionRisk:Z().number,topics:Z().array,header:Z().any,isDetailsPage:Z().bool};const W=function(e){var t=e.customItnl,a=e.intlProps,l=(0,r.Z)(e,F),s=t?u.Z:y().Fragment;return y().createElement(s,t&&function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({locale:navigator.language.slice(0,2),messages:R.Z,onError:console.log},a),y().createElement(K,l))}}}]);