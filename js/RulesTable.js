(window.webpackJsonp=window.webpackJsonp||[]).push([[11,4],{1034:function(e,t){},1053:function(e,t,a){var n=a(807);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(7)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(807,(function(){var t=a(807);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1054:function(e,t,a){var n=a(808);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(7)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(808,(function(){var t=a(808);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1055:function(e,t,a){"use strict";a(1056);var n=a(42),r=a(701),o=a.n(r),i=a(702),c=a(1),l=a.n(c),s=a(0),u=a.n(s),f=a(20),m=a(12),p=function(e){var t=e.intl,a=e.rule;return u.a.createElement(u.a.Fragment,null,-1!==a.tags.search("incident")&&u.a.createElement(n.Tooltip,{content:t.formatMessage(m.a.incidentTooltip),position:n.TooltipPosition.right},u.a.createElement(i.Label,{isCompact:!0,className:"incidentLabel"},t.formatMessage(m.a.incident))),!a.reports_shown&&u.a.createElement(n.Tooltip,{content:t.formatMessage(m.a.ruleIsDisabledTooltip),position:n.TooltipPosition.right},u.a.createElement(i.Label,{isCompact:!0,className:"disabledLabel"},u.a.createElement(o.a,{size:"sm"})," ",t.formatMessage(m.a.disabled))))};p.propTypes={intl:l.a.any,rule:l.a.object},t.a=Object(f.c)(p)},1056:function(e,t,a){var n=a(809);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(7)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(809,(function(){var t=a(809);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1057:function(e,t,a){"use strict";var n=a(106),r=a.n(n),o=a(146),i=a.n(o),c=a(226),l=a.n(c),s=a(225),u=a.n(s),f=a(0),m=a.n(f),p=a(31),d=a(296),E=a(295),g=a(750),b=a(749),y=a(9),h=a(34),v=a(315),_=a(228),T=a(698),O=a(714),S=a.n(O),k=a(1),R=a.n(k),I=a(52),C=a(92),A=a(20),j=a(12);function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var F=function(e){var t=e.fetchHostAcks,a=e.hostAcksFetchStatus,n=e.handleModalToggle,r=e.intl,o=e.isModalOpen,c=e.hostAcks,s=e.rule,g=e.afterFn,O=[r.formatMessage(j.a.systemName),r.formatMessage(j.a.justificationNote),r.formatMessage(j.a.dateDisabled),""],k=Object(f.useState)([]),R=u()(k,2),C=R[0],A=R[1],L=Object(f.useState)(!1),F=u()(L,2),w=F[0],P=F[1],M=function(){var e=l()(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete("".concat(y.BASE_URL,"/hostack/").concat(a.id,"/"));case 3:t({rule_id:s.rule_id,limit:s.hosts_acked_count}),P(!0),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),n(!1),Object(I.addNotification)({variant:"danger",dismissable:!0,title:r.formatMessage(j.a.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.useEffect)((function(){if(c.data){var e=c.data.map((function(e){return{cells:[e.display_name||e.system_uuid,e.justification||r.formatMessage(j.a.none),{title:m.a.createElement(v.DateFormat,{date:new Date(e.updated_at),type:"onlyDate"})},{title:m.a.createElement(h.Button,{key:e.system_uuid,isInline:!0,variant:"link",onClick:function(){return M(e)}},m.a.createElement(S.a,{size:"sm"}),"   ",r.formatMessage(j.a.enable))}]}})).asMutable();e.length||(g(),n(!1)),A(e)}}),[c]),Object(f.useEffect)((function(){t({rule_id:s.rule_id,limit:s.hosts_acked_count})}),[t,s.hosts_acked_count,s.rule_id]),m.a.createElement(T.Modal,{width:"50%",title:r.formatMessage(j.a.hostAckModalTitle),isOpen:o,onClose:function(){w&&g(),n(!1)},isFooterLeftAligned:!0},"fulfilled"===a&&m.a.createElement(p.b,{"aria-label":"host-ack-table",rows:C,cells:O},m.a.createElement(d.a,null),m.a.createElement(E.a,null)),"fulfilled"!==a&&m.a.createElement(p.b,{"aria-label":"host-ack-table",rows:[{cells:[{props:{colSpan:3},title:m.a.createElement(_.List,null)}]}],cells:O},m.a.createElement(d.a,null),m.a.createElement(E.a,null)))};F.propTypes={isModalOpen:R.a.bool,handleModalToggle:R.a.func,intl:R.a.any,rule:R.a.object,fetchHostAcks:R.a.func,hostAcks:R.a.object,hostAcksFetchStatus:R.a.string,addNotification:R.a.func,afterFn:R.a.func},F.defaultProps={isModalOpen:!1,handleModalToggle:function(){},rule:{},afterFn:function(){}};t.a=Object(A.c)(Object(C.connect)((function(e){var t=e.AdvisorStore,a=e.ownProps;return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({hostAcks:t.hostAcks,hostAcksFetchStatus:t.hostAcksFetchStatus},a)}),(function(e){return{setAck:function(t){return e(Object(g.j)(t))},fetchHostAcks:function(t){return e(Object(g.a)(t))},addNotification:function(t){return e(Object(I.addNotification)(t))}}}))(F))},1058:function(e,t,a){"use strict";var n=a(225),r=a.n(n),o=a(0);t.a=function(e,t){var a=Object(o.useState)(e),n=r()(a,2),i=n[0],c=n[1];return Object(o.useEffect)((function(){var a=setTimeout((function(){c(e)}),t);return function(){clearTimeout(a)}}),[t,e]),i}},1060:function(e,t,a){"use strict";var n=a(834),r=a.n(n),o=a(914),i=a.n(o),c=(a(915),a(9)),l=a(706),s=a(316),u=a(320),f=a(53),m=a(108),p=a(109),d=a(324),E=a.n(d),g=a(107),b=a(1),y=a.n(b),h=a(0),v=a.n(h),_=a(916),T=a.n(_),O=a(713),S=a(146),k=a.n(S),R=a(226),I=a.n(R),C=a(225),A=a.n(C),j=(a(1053),a(749)),L=a(34),F=a(712),w=a.n(F),P=a(710),M=a.n(P),x=a(711),G=a.n(x),N=a(325),H=a.n(N),D=a(20),B=a(12),U=function(e){var t=e.intl,a=e.rule,n=Object(h.useState)(a.rating),r=A()(n,2),o=r[0],i=r[1],l=Object(h.useState)(!1),s=A()(l,2),u=s[0],f=s[1],m=Object(h.useState)(t.formatMessage(B.a.feedbackThankyou)),p=A()(m,2),d=p[0],E=p[1],g=function(){var e=I()(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o===t?0:t,e.prev=1,e.next=4,j.a.post("".concat(c.BASE_URL,"/rating/"),{},{rule:a.rule_id,rating:n});case 4:i(n),f(!0),setTimeout((function(){return E("")}),3e3),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return v.a.createElement("span",{className:"ratingSpanOverride"},t.formatMessage(B.a.ruleHelpful),v.a.createElement(L.Button,{variant:"plain","aria-label":"thumbs-up",onClick:function(){return g(1)}},1===o?v.a.createElement(H.a,{className:"like",size:"sm"}):v.a.createElement(M.a,{size:"sm"})),v.a.createElement(L.Button,{variant:"plain","aria-label":"thumbs-down",onClick:function(){return g(-1)}},-1===o?v.a.createElement(G.a,{className:"dislike",size:"sm"}):v.a.createElement(w.a,{size:"sm"})),u&&d)};U.propTypes={intl:y.a.any,rule:y.a.object};var z=Object(D.c)(U),K=a(102),V=a(319),Y=(a(1054),function(e){return e.map((function(t,a){return v.a.createElement(v.a.Fragment,{key:a},t,a+1!==e.length&&v.a.createElement("strong",{className:"verticalDivider"}," | "))}))}),J=function(e){var t=e.children,a=e.rule,n=e.intl,o=e.topics,d=e.header,b=e.isDetailsPage,y=function(e){var t=e.resolution_set.find((function(e){return e.system_type===c.SYSTEM_TYPES.rhel||c.SYSTEM_TYPES.ocp}));return t?t.resolution_risk.risk:void 0}(a),h=function(){return o&&i()(o.map((function(e){return r()(e.tag.split(" "),a.tags.split(" ")).length&&v.a.createElement(v.a.Fragment,{key:e.slug},v.a.createElement(g.Link,{to:"/topics/".concat(e.slug)},"".concat(e.name)))})))},_=function(e,t){return"string"==typeof e&&Boolean(e)&&v.a.createElement("span",{className:t&&"genericOverride"},v.a.createElement(T.a,{source:e,escapeHtml:!1}))};return v.a.createElement(l.Split,{gutter:"sm"},v.a.createElement(l.SplitItem,null,v.a.createElement(s.Stack,{gutter:"sm"},d&&v.a.createElement(s.StackItem,null,d),v.a.createElement(s.StackItem,null,b?_(a.generic,!0):_(a.summary)),a.node_id&&v.a.createElement(s.StackItem,null,v.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://access.redhat.com/node/".concat(a.node_id)},n.formatMessage(B.a.knowledgebaseArticle)," ",v.a.createElement(E.a,{size:"sm"}))),o&&a.tags&&h().length>0&&v.a.createElement(s.StackItem,null,v.a.createElement(m.Card,{className:"topicsCard",isCompact:!0},v.a.createElement(p.CardBody,null,v.a.createElement("strong",null,n.formatMessage(B.a.topicRelatedToRule)),v.a.createElement("br",null),Y(h())))),b&&v.a.createElement(z,{rule:a}),!b&&a.impacted_systems_count>0&&v.a.createElement(s.StackItem,null,v.a.createElement(g.Link,{key:"".concat(a.rule_id,"-link"),to:"/recommendations/".concat(a.rule_id)},n.formatMessage(B.a.viewAffectedSystems,{systems:a.impacted_systems_count}))))),v.a.createElement(l.SplitItem,null,v.a.createElement(s.Stack,{gutter:"sm"},t&&v.a.createElement(s.StackItem,null,t),v.a.createElement(s.StackItem,null,v.a.createElement(s.Stack,null,v.a.createElement(s.StackItem,null,n.formatMessage(B.a.totalRisk)),v.a.createElement(s.StackItem,{className:"pf-u-display-inline-flex alignCenterOverride pf-u-pb-sm pf-u-pt-sm"},v.a.createElement("span",{className:"pf-u-display-inline-flex"},v.a.createElement(f.Battery,{label:"",severity:a.total_risk}),v.a.createElement("span",{className:"batteryTextMarginOverride pf-u-pl-sm ins-sev-clr-".concat(a.total_risk)},c.TOTAL_RISK_LABEL[a.total_risk]||n.formatMessage(B.a.undefined)))),v.a.createElement(s.StackItem,null,v.a.createElement(V.TextContent,null,v.a.createElement(u.Text,{component:u.TextVariants.small},n.formatMessage(B.a.rulesDetailsTotalriskBody,{likelihood:c.LIKELIHOOD_LABEL[a.likelihood]||n.formatMessage(B.a.undefined),impact:c.IMPACT_LABEL[a.impact.impact]||n.formatMessage(B.a.undefined),strong:function(e){return v.a.createElement("strong",null,e)}})))),v.a.createElement("hr",null),v.a.createElement(s.StackItem,null,n.formatMessage(B.a.riskofchange)),v.a.createElement(s.StackItem,{className:"pf-u-display-inline-flex alignCenterOverride pf-u-pb-sm pf-u-pt-sm"},v.a.createElement("span",{className:"pf-u-display-inline-flex"},v.a.createElement(K.Shield,{hasTooltip:!1,impact:y,size:"md",title:c.RISK_OF_CHANGE_LABEL[y]||n.formatMessage(B.a.undefined)}),v.a.createElement("span",{className:"label pf-u-pl-sm ins-sev-clr-".concat(y)},c.RISK_OF_CHANGE_LABEL[y]||n.formatMessage(B.a.undefined)))),v.a.createElement(s.StackItem,null,v.a.createElement(V.TextContent,null,v.a.createElement(u.Text,{component:u.TextVariants.small},c.RISK_OF_CHANGE_DESC[y]))))),a.reboot_required&&v.a.createElement(s.StackItem,null,v.a.createElement(O.Reboot,{red:!0})," "))))};J.propTypes={children:y.a.any,rule:y.a.object,intl:y.a.any,topics:y.a.array,header:y.a.any,isDetailsPage:y.a.bool};t.a=Object(D.c)(J)},1194:function(e,t,a){var n=a(870);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(7)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(870,(function(){var t=a(870);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1297:function(e,t,a){"use strict";a.r(t);var n=a(146),r=a.n(n),o=a(226),i=a.n(o),c=a(766),l=a.n(c),s=a(106),u=a.n(s),f=a(225),m=a.n(f),p=(a(1194),a(750)),d=a(9),E=a(151),g=a(0),b=a.n(g),y=a(316),h=a(255),v=a(256),_=a(31),T=a(296),O=a(295),S=a(42),k=a(818),R=a(749),I=a(323),C=a.n(I),A=a(53),j=a(701),L=a.n(j),F=a(34),w=a(233),P=a.n(w),M=a(315),x=a(883),G=a(833),N=a(107),H=a(783),D=a(699),B=a(819),U=a(321),z=a(1),K=a.n(z),V=a(1060),Y=a(1055),J=a(716),q=a(1057),W=a(52),Q=a(92),X=a(1058),Z=a(20),$=a(12),ee=a(227),te=a.n(ee);function ae(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ne(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(a),!0).forEach((function(t){u()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ae(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var re=function(e){var t=e.rules,a=e.filters,n=e.rulesFetchStatus,o=e.setFilters,c=e.fetchRules,s=e.addNotification,f=e.intl,p=e.selectedTags,I=Object(g.useState)([{title:f.formatMessage($.a.description),transforms:[h.a]},{title:f.formatMessage($.a.added),transforms:[h.a,Object(v.a)(15)]},{title:f.formatMessage($.a.totalRisk),transforms:[h.a,Object(v.a)(15)]},{title:f.formatMessage($.a.systems),transforms:[h.a]},{title:b.a.createElement(b.a.Fragment,null,b.a.createElement(C.a,{size:"md"})," ",f.formatMessage($.a.ansible)),transforms:[h.a],dataLabel:f.formatMessage($.a.ansible)}]),j=m()(I,1)[0],w=Object(g.useState)([]),z=m()(w,2),K=z[0],W=z[1],Q=Object(g.useState)({}),Z=m()(Q,2),ee=Z[0],te=Z[1],ae=Object(g.useState)(!0),re=m()(ae,2),oe=re[0],ie=re[1],ce=Object(g.useState)(""),le=m()(ce,2),se=le[0],ue=le[1],fe=Object(g.useState)(""),me=m()(fe,2),pe=me[0],de=me[1],Ee=Object(g.useState)(!1),ge=m()(Ee,2),be=ge[0],ye=ge[1],he=Object(g.useState)({}),ve=m()(he,2),_e=ve[0],Te=ve[1],Oe=Object(g.useState)(!1),Se=m()(Oe,2),ke=Se[0],Re=Se[1],Ie=Object(g.useState)({}),Ce=m()(Ie,2),Ae=Ce[0],je=Ce[1],Le=Object(X.a)(pe,600),Fe=t.meta?t.meta.count:0,we={1:"description",2:"publish_date",3:"total_risk",4:"impacted_count",5:"playbook_count"},Pe=Object(g.useCallback)((function(){var e=Object(k.d)(a,p);ue(e);var t=p.length&&{tags:p.join()};c(ne(ne({},Object(k.b)(a)),t))}),[c,a,p]),Me=function(e){var t=e*a.limit-a.limit;o(ne(ne({},a),{},{offset:t}))},xe=function(e){var t="undefined"===e?void 0:e;o(ne(ne({},a),{},{reports_shown:t,offset:0},"true"!==t&&{impacting:!1}))},Ge=function(){var e=i()(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=K[t].rule,e.prev=1,!a.reports_shown){e.next=7;break}Te(a),ye(!0),e.next=10;break;case 7:return e.next=9,R.a.delete("".concat(d.BASE_URL,"/ack/").concat(a.rule_id,"/"));case 9:Pe();case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),s({variant:"danger",dismissable:!0,title:a.reports_shown?f.formatMessage($.a.rulesTableHideReportsErrorDisabled):f.formatMessage($.a.rulesTableHideReportsErrorEnabled),description:"".concat(e.t0)});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();Object(g.useEffect)((function(){!oe&&null!==p&&Pe()}),[Pe,oe,a,p]),Object(g.useEffect)((function(){if(window.location.search&&oe){var e=Object(k.c)();delete e.tags,void 0===e.text?de(""):de(e.text),e.reports_shown=void 0===e.reports_shown||"undefined"===e.reports_shown[0]?void 0:e.reports_shown,e.sort=void 0===e.sort?"-total_risk":e.sort[0],void 0!==e.has_playbook&&!Array.isArray(e.has_playbook)&&(e.has_playbook=["".concat(e.has_playbook)]),void 0!==e.incident&&!Array.isArray(e.incident)&&(e.incident=["".concat(e.incident)]),void 0===e.offset?e.offset=0:e.offset=Number(e.offset[0]),void 0===e.limit?e.limit=10:e.limit=Number(e.limit[0]),o(ne(ne({},a),e))}ie(!1)}),[]),Object(g.useEffect)((function(){if(void 0!==a.sort){var e=Number(Object.entries(we).find((function(e){return e[1]===a.sort||"-".concat(e[1])===a.sort}))[0]),t="-"===a.sort[0]?"desc":"asc";te({index:e,direction:t})}}),[a.sort]),Object(g.useEffect)((function(){if(t.data)if(0===t.data.length)W([{cells:[{title:b.a.createElement(B.a,{icon:P.a,iconClass:"ansibleCheck",size:"md",title:f.formatMessage($.a.rulesTableNoRuleHitsTitle),text:a.reports_shown?f.formatMessage($.a.rulesTableNoRuleHitsEnabledRulesBody):f.formatMessage($.a.rulesTableNoRuleHitsAnyRulesBody)},a.reports_shown&&b.a.createElement(F.Button,{variant:"link",style:{paddingTop:24},onClick:function(){return xe("undefined")}},f.formatMessage($.a.rulesTableNoRuleHitsAddDisabledButton))),props:{colSpan:5}}]}]);else{var e=t.data.flatMap((function(e,t){return[{isOpen:!1,rule:e,cells:[{title:b.a.createElement("span",{key:t},b.a.createElement(Y.a,{rule:e}),b.a.createElement(N.Link,{key:t,to:"/recommendations/".concat(e.rule_id)}," ",e.description," "))},{title:b.a.createElement(M.DateFormat,{key:t,date:e.publish_date,variant:"relative"})},{title:b.a.createElement("div",{className:"pf-m-center",key:t},b.a.createElement(S.Tooltip,{key:t,position:S.TooltipPosition.bottom,content:f.formatMessage($.a.rulesDetailsTotalriskBody,{likelihood:d.LIKELIHOOD_LABEL[e.likelihood]||f.formatMessage($.a.undefined),impact:d.IMPACT_LABEL[e.impact.impact]||f.formatMessage($.a.undefined),strong:function(e){return b.a.createElement("strong",null,e)}})},b.a.createElement(A.Battery,{label:d.TOTAL_RISK_LABEL[e.total_risk]||f.formatMessage($.a.undefined),severity:e.total_risk})))},{title:b.a.createElement("div",{key:t}," ",e.reports_shown?"".concat(e.impacted_systems_count.toLocaleString()):f.formatMessage($.a.nA))},{title:b.a.createElement("div",{className:"pf-m-center ",key:t},e.playbook_count?b.a.createElement(P.a,{className:"ansibleCheck"}):f.formatMessage($.a.no))}]},{parent:2*t,fullWidth:!0,cells:[{title:b.a.createElement(D.Main,{className:"pf-m-light"},b.a.createElement(y.Stack,{gutter:"md"},e.hosts_acked_count?b.a.createElement(y.StackItem,null,b.a.createElement(L.a,{size:"sm"})," ",e.hosts_acked_count&&!e.impacted_systems_count?f.formatMessage($.a.ruleIsDisabledForAllSystems):f.formatMessage($.a.ruleIsDisabledForSystemsBody,{systems:e.hosts_acked_count}),"  ",b.a.createElement(F.Button,{isInline:!0,variant:"link",onClick:function(){je(e),Re(!0)}},f.formatMessage($.a.viewSystems))):b.a.createElement(b.a.Fragment,null),b.a.createElement(V.a,{rule:e})))}]}]}));W(e.asMutable())}}),[t]),Object(g.useEffect)((function(){if(!oe&&"pending"!==n){var e=ne({},a),t=pe.length?{text:pe}:{};delete e.text,o(ne(ne(ne({},e),t),{},{offset:0}))}}),[Le]);var Ne=function(e){var t=ne(ne({},a),{},{offset:0});"text"===e&&de(""),delete t[e],o(t)},He=function(e,t){t.length>0?o(ne(ne({},a),{},{offset:0},u()({},e,t))):Ne(e)},De=["",{label:f.formatMessage(a.impacting?$.a.rulesTableActionShow:$.a.rulesTableActionHide),onClick:function(){return e=!a.impacting,void o(ne(ne({},a),{},{impacting:e,offset:0}));var e}}],Be=[{label:f.formatMessage($.a.description).toLowerCase(),filterValues:{key:"text-filter",onChange:function(e,t){return de(t)},value:pe}},{label:d.FILTER_CATEGORIES.total_risk.title,type:d.FILTER_CATEGORIES.total_risk.type,id:d.FILTER_CATEGORIES.total_risk.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.total_risk.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.total_risk.urlParam,"-filter"),onChange:function(e,t){return He(d.FILTER_CATEGORIES.total_risk.urlParam,t)},value:a.total_risk,items:d.FILTER_CATEGORIES.total_risk.values}},{label:d.FILTER_CATEGORIES.res_risk.title,type:d.FILTER_CATEGORIES.res_risk.type,id:d.FILTER_CATEGORIES.res_risk.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.res_risk.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.res_risk.urlParam,"-filter"),onChange:function(e,t){return He(d.FILTER_CATEGORIES.res_risk.urlParam,t)},value:a.res_risk,items:d.FILTER_CATEGORIES.res_risk.values}},{label:d.FILTER_CATEGORIES.impact.title,type:d.FILTER_CATEGORIES.impact.type,id:d.FILTER_CATEGORIES.impact.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.impact.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.impact.urlParam,"-filter"),onChange:function(e,t){return He(d.FILTER_CATEGORIES.impact.urlParam,t)},value:a.impact,items:d.FILTER_CATEGORIES.impact.values}},{label:d.FILTER_CATEGORIES.likelihood.title,type:d.FILTER_CATEGORIES.likelihood.type,id:d.FILTER_CATEGORIES.likelihood.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.likelihood.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.likelihood.urlParam,"-filter"),onChange:function(e,t){return He(d.FILTER_CATEGORIES.likelihood.urlParam,t)},value:a.likelihood,items:d.FILTER_CATEGORIES.likelihood.values}},{label:d.FILTER_CATEGORIES.category.title,type:d.FILTER_CATEGORIES.category.type,id:d.FILTER_CATEGORIES.category.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.category.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.category.urlParam,"-filter"),onChange:function(e,t){return He(d.FILTER_CATEGORIES.category.urlParam,t)},value:a.category,items:d.FILTER_CATEGORIES.category.values}},{label:d.FILTER_CATEGORIES.incident.title,type:d.FILTER_CATEGORIES.incident.type,id:d.FILTER_CATEGORIES.incident.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.incident.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.incident.urlParam,"-filter"),onChange:function(e,t){return He(d.FILTER_CATEGORIES.incident.urlParam,t)},value:a.incident,items:d.FILTER_CATEGORIES.incident.values}},{label:d.FILTER_CATEGORIES.has_playbook.title,type:d.FILTER_CATEGORIES.has_playbook.type,id:d.FILTER_CATEGORIES.has_playbook.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.has_playbook.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.has_playbook.urlParam,"-filter"),onChange:function(e,t){return He(d.FILTER_CATEGORIES.has_playbook.urlParam,t)},value:a.has_playbook,items:d.FILTER_CATEGORIES.has_playbook.values}},{label:d.FILTER_CATEGORIES.reports_shown.title,type:d.FILTER_CATEGORIES.reports_shown.type,id:d.FILTER_CATEGORIES.reports_shown.urlParam,value:"radio-".concat(d.FILTER_CATEGORIES.reports_shown.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.reports_shown.urlParam,"-filter"),onChange:function(e,t){return xe(t)},value:void 0===a.reports_shown?"undefined":"".concat(a.reports_shown),items:d.FILTER_CATEGORIES.reports_shown.values}}],Ue={filters:function(){var e=ne({},a);delete e.impacting,delete e.topic,delete e.sort,delete e.offset,delete e.limit;var t=Object.entries(e);return t.length>0?t.map((function(e){if(d.FILTER_CATEGORIES[e[0]]){var t=d.FILTER_CATEGORIES[e[0]],a=Array.isArray(e[1])?e[1].map((function(e){var a=t.values.find((function(t){return t.value===String(e)}));return{name:a.text||a.label,value:e}})):[{name:t.values.find((function(t){return t.value===String(e[1])})).label,value:e[1]}];return{category:Object(k.a)(t.title),chips:a,urlParam:t.urlParam}}return{category:"Description",chips:[{name:e[1],value:e[1]}],urlParam:e[0]}})):[]}(),onDelete:function(e,t,n){n?(de(""),o(ne(ne({},a.topic&&{topic:a.topic}),{},{impacting:!0,reports_shown:"true",limit:a.limit,offset:a.offset}))):t.map((function(e){var t=u()({},e.urlParam,Array.isArray(a[e.urlParam])?a[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?o(ne(ne({},a),t)):Ne(e.urlParam)}))}};return b.a.createElement(b.a.Fragment,null,ke&&b.a.createElement(q.a,{handleModalToggle:function(e){return Re(e)},isModalOpen:ke,afterFn:function(){Pe()},rule:Ae}),be&&b.a.createElement(x.a,{handleModalToggle:ye,isModalOpen:be,rule:_e,afterFn:Pe}),b.a.createElement(U.PrimaryToolbar,{pagination:{itemCount:Fe,page:a.offset/a.limit+1,perPage:Number(a.limit),onSetPage:function(e,t){Me(t)},onPerPageSelect:function(e,t){o(ne(ne({},a),{},{limit:t,offset:0}))},isCompact:!1},exportConfig:{onSelect:function(e,t){return window.location="".concat(d.BASE_URL,"/export/hits.").concat("json"===t?"json":"csv","/").concat(se)},isDisabled:!a.impacting},actionsConfig:{actions:De},filterConfig:{items:Be},activeFiltersConfig:Ue}),"fulfilled"===n&&b.a.createElement(_.b,{"aria-label":"rule-table",actionResolver:function(e,t){var a=t.rowIndex,n=K[a].rule?K[a].rule:null;return a%2==0&&n?n&&n.reports_shown?[{title:f.formatMessage($.a.disableRule),onClick:function(e,t){return Ge(t)}}]:[{title:f.formatMessage($.a.enableRule),onClick:function(e,t){return Ge(t)}}]:null},onCollapse:function(e,t,a){var n=l()(K);n[t]=ne(ne({},n[t]),{},{isOpen:a}),W(n)},sortBy:ee,onSort:function(e,t,n){var r="".concat("asc"===n?"":"-").concat(we[t]);te({index:t,direction:n}),o(ne(ne({},a),{},{sort:r,offset:0}))},cells:j,rows:K},b.a.createElement(T.a,null),b.a.createElement(O.a,null)),"pending"===n&&b.a.createElement(H.a,null),"failed"===n&&b.a.createElement(G.a,{message:f.formatMessage($.a.rulesTableFetchRulesError)}),b.a.createElement(J.TableToolbar,null,b.a.createElement(E.Pagination,{itemCount:Fe,page:a.offset/a.limit+1,perPage:Number(a.limit),onSetPage:function(e,t){Me(t)},onPerPageSelect:function(e,t){o(ne(ne({},a),{},{limit:t,offset:0}))},widgetId:"pagination-options-menu-bottom",variant:E.PaginationVariant.bottom})))};re.propTypes={fetchRules:K.a.func,rulesFetchStatus:K.a.string,rules:K.a.object,filters:K.a.object,addNotification:K.a.func,setFilters:K.a.func,intl:K.a.any,selectedTags:K.a.array};t.default=Object(Z.c)(te()(Object(Q.connect)((function(e,t){return ne({rules:e.AdvisorStore.rules,rulesFetchStatus:e.AdvisorStore.rulesFetchStatus,filters:e.AdvisorStore.filters,selectedTags:e.AdvisorStore.selectedTags},t)}),(function(e){return{fetchRules:function(t){return e(p.d(t))},addNotification:function(t){return e(Object(W.addNotification)(t))},setFilters:function(t){return e(p.k(t))}}}))(re)))},750:function(e,t,a){"use strict";a.d(t,"d",(function(){return f})),a.d(t,"b",(function(){return m})),a.d(t,"e",(function(){return p})),a.d(t,"k",(function(){return d})),a.d(t,"h",(function(){return E})),a.d(t,"i",(function(){return g})),a.d(t,"g",(function(){return b})),a.d(t,"f",(function(){return y})),a.d(t,"c",(function(){return h})),a.d(t,"j",(function(){return v})),a.d(t,"a",(function(){return _})),a.d(t,"l",(function(){return T})),a.d(t,"n",(function(){return O})),a.d(t,"m",(function(){return S})),a.d(t,"o",(function(){return k}));var n=a(146),r=a.n(n),o=a(226),i=a.n(o),c=a(9),l=a(749),s=function(){var e=i()(r.a.mark((function e(t,a,n){var o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return e.next=4,l.a.get(t,a,n);case 4:return o=e.sent,e.abrupt("return",o.data);case 6:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),u=function(){var e=i()(r.a.mark((function e(t,a,n){var o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return e.next=4,l.a.post(t,a,n);case 4:return o=e.sent,e.abrupt("return",o.data);case 6:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),f=function(e){return{type:c.RULES_FETCH,payload:s(c.RULES_FETCH_URL,{},e)}},m=function(e){return{type:c.RULE_FETCH,payload:s("".concat(c.RULES_FETCH_URL).concat(e.rule_id,"/"),{},e.tags&&{tags:e.tags})}},p=function(e,t){return{type:c.SYSTEM_FETCH,payload:s("".concat(c.RULES_FETCH_URL).concat(encodeURI(e),"/systems"),{},t)}},d=function(e){return{type:c.FILTERS_SET,payload:e}},E=function(e){return{type:c.TOPICS_FETCH,payload:s(c.TOPICS_FETCH_URL,{},e)}},g=function(){return{type:c.TOPICS_FETCH,payload:s("".concat(c.TOPICS_FETCH_URL,"?show_disabled=true"))}},b=function(e){return{type:c.TOPIC_FETCH,payload:s("".concat(c.TOPICS_FETCH_URL).concat(e.topic_id,"/"))}},y=function(e){return{type:c.SYSTEMS_FETCH,payload:s(c.SYSTEMS_FETCH_URL,{},e)}},h=function(e){return{type:c.RULE_ACK_FETCH,payload:s("".concat(c.RULE_ACK_URL).concat(e.rule_id,"/"))}},v=function(e){return{type:c["".concat(e.type,"_ACK_SET")],payload:u(c["".concat(e.type,"_ACK_URL")],{},e.options)}},_=function(e){return{type:c.HOST_ACK_FETCH,payload:s("".concat(c.HOST_ACK_URL),{},e)}},T=function(e){return{type:c.FILTERS_SYSTEMS_SET,payload:e}},O=function(e){return{type:c.SELECTED_TAGS_SET,payload:e}},S=function(e){return{type:c.RULE_SET,payload:e}},k=function(e){return{type:c.SYSTEM_SET,payload:e}}},791:function(e,t,a){(t=a(6)(!1)).push([e.i,"hr{border:0.01rem solid #ccc;margin:var(--pf-global--spacer--md) 0 var(--pf-global--spacer--md) 0}.ins-sev-clr-1{color:var(--pf-global--Color--200)}.ins-sev-clr-2{color:var(--pf-global--warning-color--100)}.ins-sev-clr-3{color:var(--ins-color--orange)}.ins-sev-clr-4{color:var(--pf-global--danger-color--100)}.ansibleCol svg{vertical-align:text-bottom}.ansibleCheck{color:var(--pf-global--success-color--200)}.topicsCard{background-color:var(--pf-global--BackgroundColor--150);box-shadow:none;word-break:break-word}.alignCenterOverride{align-items:center}.batteryTextMarginOverride{padding-top:3px}.genericOverride p{margin-top:0;margin-bottom:var(--pf-global--spacer--md)}\n",""]),e.exports=t},807:function(e,t,a){(t=a(6)(!1)).push([e.i,".like{color:var(--pf-global--success-color--200)}.dislike{color:var(--pf-global--primary-color--100)}.ratingSpanOverride{font-size:var(--pf-global--FontSize--sm) !important}.ratingSpanOverride button{padding:8px}\n",""]),e.exports=t},808:function(e,t,a){(t=a(6)(!1)).push([e.i,".verticalDivider{color:var(--pf-global--BorderColor--100)}\n",""]),e.exports=t},809:function(e,t,a){(t=a(6)(!1)).push([e.i,".incidentLabel{background-color:var(--pf-global--danger-color--100) !important}.disabledLabel{background-color:var(--pf-global--Color--200) !important}.pf-c-label{margin-right:var(--pf-global--spacer--xs)}\n",""]),e.exports=t},818:function(e,t,a){"use strict";a.d(t,"d",(function(){return f})),a.d(t,"b",(function(){return m})),a.d(t,"c",(function(){return p})),a.d(t,"a",(function(){return d}));var n=a(106),r=a.n(n),o=a(225),i=a.n(o),c=a(766),l=a.n(c);function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f=function(e,t){var a=new URL(window.location),n="?".concat(Object.keys(e).map((function(t){return"".concat(t,"=").concat(Array.isArray(e[t])?e[t].join():e[t])})).join("&")),r=new URLSearchParams(n);return null!==t&&t.length?r.set("tags",t.join()):r.delete("tags"),window.history.replaceState(null,null,"".concat(a.origin).concat(a.pathname,"?").concat(r.toString())),"?".concat(n)},m=function(e){return Object.assign.apply(Object,[{}].concat(l()(Object.entries(e).map((function(e){var t=i()(e,2),a=t[0],n=t[1];return Array.isArray(n)?("true"===n[0]||"false"===n[0])&&n.length>1?null:r()({},a,n.join()):r()({},a,n)})))))},p=function(){var e=new URLSearchParams(window.location.search);return Array.from(e).reduce((function(e,t){var a=i()(t,2),n=a[0],o=a[1];return u(u({},e),{},r()({},n,"true"===o||"false"===o?JSON.parse(o):o.split(",")))}),{})},d=function(e){return e[0].toUpperCase()+e.substring(1)}},819:function(e,t,a){"use strict";var n=a(229),r=a(317),o=a.n(r),i=a(230),c=a(318),l=a(1),s=a.n(l),u=a(0),f=a.n(u),m=a(110),p=function(e){var t=e.className,a=e.children,r=e.icon,o=e.iconClass,l=e.iconStyle,s=e.size,u=e.text,p=e.title,d=e.variant;return f.a.createElement(n.EmptyState,{className:t,variant:d},"none"!==r&&f.a.createElement(c.EmptyStateIcon,{className:o,style:l,icon:r,size:s}),f.a.createElement(m.Title,{headingLevel:"h5",size:"lg"},p),f.a.createElement(i.EmptyStateBody,{style:{marginBottom:"16px"}},u),a)};p.propTypes={children:s.a.any,icon:s.a.any,iconClass:s.a.any,iconStyle:s.a.any,size:s.a.string,text:s.a.any,title:s.a.string,variant:s.a.any,className:s.a.string},p.defaultProps={icon:o.a,title:"",variant:n.EmptyStateVariant.full,size:"md"},t.a=p},833:function(e,t,a){"use strict";var n=a(108),r=a(109),o=a(148),i=a(705),c=a.n(i),l=a(0),s=a.n(l),u=a(1),f=a.n(u),m=function(e){var t=e.message;return s.a.createElement(s.a.Fragment,null,s.a.createElement(n.Card,{className:"ins-empty-rule-cards"},s.a.createElement(o.CardHeader,null,s.a.createElement(c.a,{size:"lg"})),s.a.createElement(r.CardBody,null,t)))};t.a=m,m.propTypes={message:f.a.string}},870:function(e,t,a){(t=a(6)(!1)).push([e.i,".pf-c-check__label #battery_svg{height:1.25rem}\n",""]),e.exports=t},883:function(e,t,a){"use strict";var n=a(146),r=a.n(n),o=a(106),i=a.n(o),c=a(226),l=a.n(c),s=a(225),u=a.n(s),f=a(0),m=a.n(f),p=a(750),d=a(749),E=a(9),g=a(34),b=a(322),y=a(703),h=a(704),v=a(698),_=a(1),T=a.n(_),O=a(231),S=a(52),k=a(92),R=a(20),I=a(12);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=function(e){var t=e.handleModalToggle,a=e.intl,n=e.isModalOpen,o=e.host,i=e.hosts,c=e.rule,s=e.afterFn,p=e.setAck,_=e.addNotification,T=e.setSystem,S=e.setRule,k=e.selectedTags,R=Object(f.useState)(""),C=u()(R,2),j=C[0],L=C[1],F=Object(f.useState)(void 0!==o||i.length>0),w=u()(F,2),P=w[0],M=w[1],x=function(){var e=l()(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={systems:i,justification:j},e.prev=1,e.next=4,d.a.post("".concat(E.BASE_URL,"/rule/").concat(c.rule_id,"/ack_hosts/"),{},t);case 4:n=e.sent,k.length>0?s&&s():(T({host_ids:n.data.host_ids}),S(A(A({},c),{},{hosts_acked_count:n.data.count+c.hosts_acked_count}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),_({variant:"danger",dismissable:!0,title:a.formatMessage(I.a.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=l()(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.reports_shown||i.length){e.next=8;break}return a=P?{type:"HOST",options:{rule:c.rule_id,system_uuid:o.id,justification:j}}:{type:"RULE",options:A({rule_id:c.rule_id},j&&{justification:j})},e.next=4,p(a);case 4:L(""),s&&s(),e.next=9;break;case 8:x();case 9:t(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return m.a.createElement(v.Modal,{isSmall:!0,title:a.formatMessage(I.a.disableRule),isOpen:n,onClose:function(){t(!1),L("")},onKeyPress:function(e){"Enter"===e.key&&G()},actions:[m.a.createElement(g.Button,{key:"confirm",variant:"primary",onClick:function(){return G()}},a.formatMessage(I.a.save)),m.a.createElement(g.Button,{key:"cancel",variant:"link",onClick:function(){t(!1),L("")}},a.formatMessage(I.a.cancel))],isFooterLeftAligned:!0},a.formatMessage(I.a.disableRuleBody),m.a.createElement(y.Form,null,m.a.createElement(h.FormGroup,{fieldId:"blank-form"}),(void 0!==o||i.length>0)&&m.a.createElement(h.FormGroup,{fieldId:"disable-rule-one-system"},m.a.createElement(b.Checkbox,{isChecked:P,onChange:function(){M(!P)},label:i.length?a.formatMessage(I.a.disableRuleForSystems):a.formatMessage(I.a.disableRuleSingleSystem),id:"disable-rule-one-system",name:"disable-rule-one-system"})),m.a.createElement(h.FormGroup,{label:a.formatMessage(I.a.justificationNote),fieldId:"disable-rule-justification"},m.a.createElement(O.TextInput,{type:"text",id:"disable-rule-justification",name:"disable-rule-justification","aria-describedby":"disable-rule-justification",value:j,onChange:function(e){L(e)}}))))};j.propTypes={isModalOpen:T.a.bool,host:T.a.object,handleModalToggle:T.a.func,intl:T.a.any,rule:T.a.object,afterFn:T.a.func,setAck:T.a.func,hosts:T.a.array,addNotification:T.a.func,setRule:T.a.func,setSystem:T.a.func,selectedTags:T.a.array},j.defaultProps={isModalOpen:!1,handleModalToggle:function(){},system:void 0,rule:{},afterFn:function(){},host:void 0,hosts:[]};t.a=Object(R.c)(Object(k.connect)((function(e){return{selectedTags:e.AdvisorStore.selectedTags}}),(function(e){return{addNotification:function(t){return e(Object(S.addNotification)(t))},setAck:function(t){return e(Object(p.j)(t))},setRule:function(t){return e(Object(p.m)(t))},setSystem:function(t){return e(Object(p.o)(t))}}}))(j))},915:function(e,t,a){var n=a(791);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(7)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(791,(function(){var t=a(791);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))}}]);
//# sourceMappingURL=RulesTable.js.map