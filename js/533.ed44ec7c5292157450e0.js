"use strict";(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[533],{87533:(e,t,a)=>{a.d(t,{Z:()=>W});var n=a(4942),r=a(45987),l=a(25325),c=a.n(l),s=a(39693),i=a.n(s),o=a(59303),m=a(86896),u=a(29558),p=a(92506),E=a(88292),f=a(66197),k=a(50470),g=a(78216),d=a(16530),v=a(39563),_=a(45697),h=a.n(_),S=a(93264),Z=a.n(S),b=a(52202),y=a(15861),I=a(29439),O=a(87757),L=a.n(O),P=a(71094),M=a(6202),N=a(49580),T=a(11239),w=a(90502),A=a(61088),D=a(74806),j=a(30893),C=function(e){var t=e.intl,a=e.rule,n=(0,S.useState)(a.rating),r=(0,I.Z)(n,2),l=r[0],c=r[1],s=(0,S.useState)(!1),i=(0,I.Z)(s,2),m=i[0],u=i[1],p=(0,S.useState)(t.formatMessage(j.Z.feedbackThankyou)),E=(0,I.Z)(p,2),f=E[0],k=E[1],g=function(){var e=(0,y.Z)(L().mark((function e(t){var n;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l===t?0:t,e.prev=1,e.next=4,P.Z.post("".concat(o.BASE_URL,"/rating/"),{},{rule:a.rule_id,rating:n});case 4:c(n),u(!0),setTimeout((function(){return k("")}),3e3),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Z().createElement("span",{className:"ratingSpanOverride"},t.formatMessage(j.Z.ruleHelpful),Z().createElement(M.Button,{variant:"plain","aria-label":"thumbs-up",onClick:function(){return g(1)},ouiaId:"thumbsUp"},1===l?Z().createElement(A.ZP,{className:"like",size:"sm"}):Z().createElement(T.ZP,{size:"sm"})),Z().createElement(M.Button,{variant:"plain","aria-label":"thumbs-down",onClick:function(){return g(-1)},ouiaId:"thumbsDown"},-1===l?Z().createElement(w.ZP,{className:"dislike",size:"sm"}):Z().createElement(N.ZP,{size:"sm"})),m&&f)};C.propTypes={intl:h().any,rule:h().object};const x=(0,D.ZP)(C);var R=a(24047);var B=a(68770),G=a(66451),z=a(28186),F=["customItnl","intlProps"];function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var K=function(e){var t,a=e.children,n=e.rule,r=e.resolutionRisk,l=e.topics,s=e.header,u=e.isDetailsPage,_=(0,m.Z)(),h=function(){return l&&i()(l.map((function(e){return c()(e.tag.split(" "),n.tags.split(" ")).length&&Z().createElement(Z().Fragment,{key:e.slug},Z().createElement(d.Link,{to:"/topics/".concat(e.slug)},"".concat(e.name)))})))},S=function(e,t){return"string"==typeof e&&Boolean(e)&&Z().createElement("span",{className:t&&"genericOverride"},Z().createElement(v.Z,{rehypePlugins:[B.Z,G.Z]},e))};return Z().createElement(p.Split,{className:"ins-c-rule-details__split",hasGutter:!0},Z().createElement(p.SplitItem,null,Z().createElement(E.Stack,{hasGutter:!0},s&&Z().createElement(E.StackItem,null,s),Z().createElement(E.StackItem,null,u?S(n.generic,!0):S(n.summary)),n.node_id&&Z().createElement(E.StackItem,null,Z().createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://access.redhat.com/node/".concat(n.node_id)},_.formatMessage(j.Z.knowledgebaseArticle)," ",Z().createElement(k.ZP,{size:"sm"}))),l&&n.tags&&h().length>0&&Z().createElement(E.StackItem,null,Z().createElement("strong",null,_.formatMessage(j.Z.topicRelatedToRule)),Z().createElement("br",null),(t=h()).map((function(e,a){return Z().createElement(Z().Fragment,{key:a},e,a+1!==t.length&&Z().createElement("strong",{className:"verticalDivider"}," | "))}))),u&&Z().createElement(x,{rule:n}),!u&&n.impacted_systems_count>0&&Z().createElement(E.StackItem,null,Z().createElement(d.Link,{key:"".concat(n.rule_id,"-link"),to:"/recommendations/".concat(n.rule_id)},_.formatMessage(j.Z.viewAffectedSystems,{systems:n.impacted_systems_count}))))),Z().createElement(p.SplitItem,null,Z().createElement(E.Stack,{gutter:"sm"},a&&Z().createElement(E.StackItem,null,a),Z().createElement(E.StackItem,null,Z().createElement(E.Stack,{className:"ins-c-rule-details__stack"},Z().createElement(E.StackItem,null,Z().createElement("strong",null,_.formatMessage(j.Z.totalRisk))),Z().createElement(E.StackItem,{className:"pf-u-display-inline-flex alignCenterOverride pf-u-pb-sm pf-u-pt-sm"},Z().createElement("span",{className:"ins-c-rule-details__stackitem"},Z().createElement("span",null,Z().createElement(g.Z,{value:n.total_risk})),Z().createElement(E.Stack,{hasGutter:!0,className:"description-stack-override"},Z().createElement(E.StackItem,null,Z().createElement(f.TextContent,null,Z().createElement(f.Text,{component:f.TextVariants.p},_.formatMessage(j.Z.rulesDetailsTotalriskBody,{risk:o.TOTAL_RISK_LABEL_LOWER[n.total_risk]||_.formatMessage(j.Z.undefined),strong:function(e){return(0,z.f)(e)}})))),Z().createElement(E.Stack,null,Z().createElement(E.StackItem,null,Z().createElement(R.c,{className:"severity-line",title:_.formatMessage(j.Z.likelihoodLevel,{level:o.LIKELIHOOD_LABEL[n.likelihood]}),value:n.likelihood,tooltipMessage:_.formatMessage(j.Z.likelihoodDescription,{level:o.LIKELIHOOD_LABEL_LOWER[n.likelihood]})})),Z().createElement(E.StackItem,null,Z().createElement(R.c,{className:"severity-line",title:_.formatMessage(j.Z.impactLevel,{level:o.IMPACT_LABEL[n.impact.impact]}),value:n.impact.impact,tooltipMessage:_.formatMessage(j.Z.impactDescription,{level:o.IMPACT_LABEL_LOWER[n.impact.impact]})})))))),Z().createElement("hr",null),Z().createElement(E.StackItem,null,Z().createElement("strong",null,_.formatMessage(j.Z.riskofchange))),Z().createElement(E.StackItem,{className:"pf-u-display-inline-flex alignCenterOverride pf-u-pb-sm pf-u-pt-sm"},Z().createElement("span",{className:"ins-c-rule-details__stackitem"},Z().createElement("span",null,Z().createElement(g.Z,{text:o.RISK_OF_CHANGE_LABEL[r],value:r,hideIcon:!0})),Z().createElement(E.Stack,{hasGutter:!0,className:"description-stack-override"},Z().createElement(E.StackItem,null,Z().createElement(f.TextContent,null,Z().createElement(f.Text,{component:f.TextVariants.p},r?o.RISK_OF_CHANGE_DESC[r]:_.formatMessage(j.Z.undefined)))),Z().createElement(E.StackItem,null,(0,b.k)(n.reboot_required))))))))))};K.propTypes={children:h().any,rule:h().object,resolutionRisk:h().number,topics:h().array,header:h().any,isDetailsPage:h().bool};const W=function(e){var t=e.customItnl,a=e.intlProps,l=(0,r.Z)(e,F),c=t?u.Z:Z().Fragment;return Z().createElement(c,t&&function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({locale:navigator.language.slice(0,2),messages:j.Z,onError:console.log},a),Z().createElement(K,l))}}}]);
//# sourceMappingURL=../sourcemaps/533.d49f259a57b61bdfae24.js.map