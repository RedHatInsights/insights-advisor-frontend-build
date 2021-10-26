"use strict";(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[533],{87533:(e,t,n)=>{n.d(t,{Z:()=>L});var a=n(4942),r=n(45987),l=n(25325),s=n.n(l),c=n(39693),i=n.n(c),o=n(59303),m=n(86896),u=n(29558),p=n(92506),d=n(88292),g=n(66197),f=n(50470),k=n(78216),E=n(75662),h=n(39563),v=n(45697),b=n.n(v),S=n(93264),Z=n.n(S),y=n(52202),_=n(15861),I=n(29439),O=n(87757),M=n.n(O),P=n(6202),N=n(49580),w=n(11239),D=n(90502),R=n(61088),j=n(30893),C=function(e){var t=e.ruleId,n=e.ruleRating,a=e.updateRatingAction,r=(0,m.Z)(),l=(0,S.useState)(n),s=(0,I.Z)(l,2),c=s[0],i=s[1],o=(0,S.useState)(!1),u=(0,I.Z)(o,2),p=u[0],d=u[1],g=(0,S.useState)(r.formatMessage(j.Z.feedbackThankyou)),f=(0,I.Z)(g,2),k=f[0],E=f[1],h=function(){var e=(0,_.Z)(M().mark((function e(n){var r;return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c===n?0:n,e.prev=1,e.next=4,a(t,r);case 4:i(r),d(!0),setTimeout((function(){return E("")}),3e3),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Z().createElement("span",{className:"ratingSpanOverride"},r.formatMessage(j.Z.ruleHelpful),Z().createElement(P.Button,{variant:"plain","aria-label":"thumbs-up",onClick:function(){return h(1)},ouiaId:"thumbsUp"},1===c?Z().createElement(R.ZP,{className:"like",size:"sm"}):Z().createElement(w.ZP,{size:"sm"})),Z().createElement(P.Button,{variant:"plain","aria-label":"thumbs-down",onClick:function(){return h(-1)},ouiaId:"thumbsDown"},-1===c?Z().createElement(D.ZP,{className:"dislike",size:"sm"}):Z().createElement(N.ZP,{size:"sm"})),p&&k)};C.propTypes={ruleId:b().string.isRequired,ruleRating:b().number.isRequired,updateRatingAction:b().func.isRequired};const x=C;var T=n(24047);var F=n(68770),z=n(66451),A=n(28186),q=["customItnl","intlProps"];function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var G=function(e){var t,n=e.children,a=e.rule,r=e.resolutionRisk,l=e.topics,c=e.header,u=e.isDetailsPage,v=e.onFeedbackChanged,b=e.isOpenShift,S=e.riskOfChangeDesc,_=e.messageDescriptors,I=(0,m.Z)(),O=function(){return l&&i()(l.map((function(e){return s()(e.tag.split(" "),a.tags.split(" ")).length&&Z().createElement(Z().Fragment,{key:e.slug},Z().createElement(E.Link,{to:"/topics/".concat(e.slug)},"".concat(e.name)))})))},M=function(e,t){return"string"==typeof e&&Boolean(e)&&Z().createElement("span",{className:t&&"genericOverride"},Z().createElement(h.Z,{rehypePlugins:[F.Z,z.Z]},e))};return Z().createElement(p.Split,{className:"ins-c-rule-details__split",hasGutter:!0},Z().createElement(p.SplitItem,null,Z().createElement(d.Stack,{hasGutter:!0},c&&Z().createElement(d.StackItem,null,c),Z().createElement(d.StackItem,null,b&&M(a.generic,!0),!b&&(u?M(a.generic,!0):M(a.summary))),a.node_id&&Z().createElement(d.StackItem,null,Z().createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://access.redhat.com/node/".concat(a.node_id)},I.formatMessage(j.Z.knowledgebaseArticle)," ",Z().createElement(f.ZP,{size:"sm"}))),l&&a.tags&&O().length>0&&Z().createElement(d.StackItem,null,Z().createElement("strong",null,I.formatMessage(j.Z.topicRelatedToRule)),Z().createElement("br",null),(t=O()).map((function(e,n){return Z().createElement(Z().Fragment,{key:n},e,n+1!==t.length&&Z().createElement("strong",{className:"verticalDivider"}," | "))}))),u&&v&&Z().createElement(x,{ruleId:a.rule_id,ruleRating:a.rating,updateRatingAction:v}),!u&&(null==a?void 0:a[b?"impacted_clusters_count":"impacted_systems_count"])>0&&Z().createElement(d.StackItem,null,Z().createElement(E.Link,{key:"".concat(a.rule_id,"-link"),to:"/recommendations/".concat(a.rule_id)},b?I.formatMessage(_.viewAffectedClusters,{clusters:a.impacted_clusters_count}):I.formatMessage(j.Z.viewAffectedSystems,{systems:a.impacted_systems_count}))))),Z().createElement(p.SplitItem,null,Z().createElement(d.Stack,{gutter:"sm"},n&&Z().createElement(d.StackItem,null,n),Z().createElement(d.StackItem,null,Z().createElement(d.Stack,{className:"ins-c-rule-details__stack"},Z().createElement(d.StackItem,null,Z().createElement("strong",null,I.formatMessage(j.Z.totalRisk))),Z().createElement(d.StackItem,{className:"pf-u-display-inline-flex alignCenterOverride pf-u-pb-sm pf-u-pt-sm"},Z().createElement("span",{className:"ins-c-rule-details__stackitem"},Z().createElement("span",null,Z().createElement(k.Z,{value:a.total_risk})),Z().createElement(d.Stack,{hasGutter:!0,className:"description-stack-override"},Z().createElement(d.StackItem,null,Z().createElement(g.TextContent,null,Z().createElement(g.Text,{component:g.TextVariants.p},I.formatMessage(j.Z.rulesDetailsTotalriskBody,{risk:o.Nq[a.total_risk]||I.formatMessage(j.Z.undefined),strong:function(e){return(0,A.f)(e)}})))),Z().createElement(d.Stack,null,Z().createElement(d.StackItem,null,Z().createElement(T.c,{className:"severity-line",title:I.formatMessage(j.Z.likelihoodLevel,{level:o.FV[a.likelihood]}),value:a.likelihood,tooltipMessage:I.formatMessage(j.Z.likelihoodDescription,{level:o.gm[a.likelihood]})})),Z().createElement(d.StackItem,null,Z().createElement(T.c,{className:"severity-line",title:I.formatMessage(j.Z.impactLevel,{level:o.dz[a.impact.impact]}),value:a.impact.impact,tooltipMessage:I.formatMessage(j.Z.impactDescription,{level:o.rs[a.impact.impact]})})))))),r&&S&&Z().createElement(Z().Fragment,null,Z().createElement("hr",null),Z().createElement(d.StackItem,null,Z().createElement("strong",null,I.formatMessage(j.Z.riskofchange))),Z().createElement(d.StackItem,{className:"pf-u-display-inline-flex alignCenterOverride pf-u-pb-sm pf-u-pt-sm"},Z().createElement("span",{className:"ins-c-rule-details__stackitem"},Z().createElement("span",null,Z().createElement(k.Z,{text:o.MS[r],value:r,hideIcon:!0})),Z().createElement(d.Stack,{hasGutter:!0,className:"description-stack-override"},Z().createElement(d.StackItem,null,Z().createElement(g.TextContent,null,Z().createElement(g.Text,{component:g.TextVariants.p},r?S:I.formatMessage(j.Z.undefined)))),!b&&Z().createElement(d.StackItem,null,(0,y.k)(a.reboot_required)))))))))))};G.propTypes={children:b().any,rule:b().object,topics:b().array,header:b().any,isDetailsPage:b().bool,resolutionRisk:b().number,riskOfChangeDesc:b().string,onFeedbackChanged:b().func,isOpenShift:b().bool,messageDescriptors:b().object};const L=function(e){var t=e.customItnl,n=e.intlProps,l=(0,r.Z)(e,q),s=t?u.Z:Z().Fragment;return Z().createElement(s,t&&function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({locale:navigator.language.slice(0,2),messages:j.Z,onError:console.log},n),Z().createElement(G,l))}}}]);