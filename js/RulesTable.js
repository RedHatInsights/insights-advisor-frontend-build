(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3,6],{1089:function(e,t){},1108:function(e,t,a){var n=a(861);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(7)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(861,(function(){var t=a(861);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1109:function(e,t,a){var n=a(862);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(7)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(862,(function(){var t=a(862);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1110:function(e,t,a){"use strict";a(1111);var n=a(53),r=a(757),o=a.n(r),i=a(759),c=a(1),l=a.n(c),s=a(0),u=a.n(s),f=a(21),m=a(13),p=function(e){var t=e.intl,a=e.rule;return u.a.createElement(u.a.Fragment,null,-1!==a.tags.search("incident")&&u.a.createElement(n.Tooltip,{content:t.formatMessage(m.a.incidentTooltip),position:n.TooltipPosition.right},u.a.createElement(i.Label,{isCompact:!0,className:"incidentLabel"},t.formatMessage(m.a.incident))),!a.reports_shown&&u.a.createElement(n.Tooltip,{content:t.formatMessage(m.a.ruleIsDisabledTooltip),position:n.TooltipPosition.right},u.a.createElement(i.Label,{isCompact:!0,className:"disabledLabel"},u.a.createElement(o.a,{size:"sm"})," ",t.formatMessage(m.a.disabled))))};p.propTypes={intl:l.a.any,rule:l.a.object},t.a=Object(f.c)(p)},1111:function(e,t,a){var n=a(863);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(7)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(863,(function(){var t=a(863);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1112:function(e,t,a){"use strict";var n=a(107),r=a.n(n),o=a(148),i=a.n(o),c=a(236),l=a.n(c),s=a(235),u=a.n(s),f=a(0),m=a.n(f),p=a(32),d=a(312),E=a(311),g=a(811),b=a(808),y=a(10),h=a(38),v=a(344),_=a(239),T=a(754),O=a(771),S=a.n(O),k=a(1),R=a.n(k),I=a(52),C=a(91),A=a(21),j=a(13);function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var F=function(e){var t=e.fetchHostAcks,a=e.hostAcksFetchStatus,n=e.handleModalToggle,r=e.intl,o=e.isModalOpen,c=e.hostAcks,s=e.rule,g=e.afterFn,O=[r.formatMessage(j.a.systemName),r.formatMessage(j.a.justificationNote),r.formatMessage(j.a.dateDisabled),""],k=Object(f.useState)([]),R=u()(k,2),C=R[0],A=R[1],L=Object(f.useState)(!1),F=u()(L,2),w=F[0],P=F[1],M=function(){var e=l()(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete("".concat(y.BASE_URL,"/hostack/").concat(a.id,"/"));case 3:t({rule_id:s.rule_id,limit:s.hosts_acked_count}),P(!0),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),n(!1),Object(I.addNotification)({variant:"danger",dismissable:!0,title:r.formatMessage(j.a.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.useEffect)((function(){if(c.data){var e=c.data.map((function(e){return{cells:[e.display_name||e.system_uuid,e.justification||r.formatMessage(j.a.none),{title:m.a.createElement(v.DateFormat,{date:new Date(e.updated_at),type:"onlyDate"})},{title:m.a.createElement(h.Button,{key:e.system_uuid,isInline:!0,variant:"link",onClick:function(){return M(e)}},m.a.createElement(S.a,{size:"sm"}),"   ",r.formatMessage(j.a.enable))}]}})).asMutable();e.length||(g(),n(!1)),A(e)}}),[c]),Object(f.useEffect)((function(){t({rule_id:s.rule_id,limit:s.hosts_acked_count})}),[t,s.hosts_acked_count,s.rule_id]),m.a.createElement(T.Modal,{width:"50%",title:r.formatMessage(j.a.hostAckModalTitle),isOpen:o,onClose:function(){w&&g(),n(!1)},isFooterLeftAligned:!0},"fulfilled"===a&&m.a.createElement(p.b,{"aria-label":"host-ack-table",rows:C,cells:O},m.a.createElement(d.a,null),m.a.createElement(E.a,null)),"fulfilled"!==a&&m.a.createElement(p.b,{"aria-label":"host-ack-table",rows:[{cells:[{props:{colSpan:3},title:m.a.createElement(_.List,null)}]}],cells:O},m.a.createElement(d.a,null),m.a.createElement(E.a,null)))};F.propTypes={isModalOpen:R.a.bool,handleModalToggle:R.a.func,intl:R.a.any,rule:R.a.object,fetchHostAcks:R.a.func,hostAcks:R.a.object,hostAcksFetchStatus:R.a.string,addNotification:R.a.func,afterFn:R.a.func},F.defaultProps={isModalOpen:!1,handleModalToggle:function(){},rule:{},afterFn:function(){}};t.a=Object(A.c)(Object(C.connect)((function(e){var t=e.AdvisorStore,a=e.ownProps;return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({hostAcks:t.hostAcks,hostAcksFetchStatus:t.hostAcksFetchStatus},a)}),(function(e){return{setAck:function(t){return e(Object(g.j)(t))},fetchHostAcks:function(t){return e(Object(g.a)(t))},addNotification:function(t){return e(Object(I.addNotification)(t))}}}))(F))},1113:function(e,t,a){"use strict";var n=a(148),r=a.n(n),o=a(236),i=a.n(o),c=a(808),l=a(10),s=a(247),u=function(e){var t={date:(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc"};return"Insights-Advisor_".concat(e,"--").concat(t.date)},f=function(){var e=i()(r.a.mark((function e(t,a,n){var o,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.get("".concat(l.BASE_URL,"/export/").concat(t,".").concat("json"===a?"json":"csv").concat(n));case 3:o=e.sent,i="json"===a?JSON.stringify(o.data):o.data,Object(s.downloadFile)(i,u(t),a),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),"".concat(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a,n){return e.apply(this,arguments)}}();t.a=f},1115:function(e,t,a){"use strict";var n=a(887),r=a.n(n),o=a(969),i=a.n(o),c=(a(970),a(10)),l=a(763),s=a(345),u=a(349),f=a(54),m=a(109),p=a(110),d=a(354),E=a.n(d),g=a(108),b=a(1),y=a.n(b),h=a(0),v=a.n(h),_=a(971),T=a.n(_),O=a(770),S=a(148),k=a.n(S),R=a(236),I=a.n(R),C=a(235),A=a.n(C),j=(a(1108),a(808)),L=a(38),F=a(769),w=a.n(F),P=a(767),M=a.n(P),x=a(768),G=a.n(x),N=a(356),D=a.n(N),H=a(21),B=a(13),U=function(e){var t=e.intl,a=e.rule,n=Object(h.useState)(a.rating),r=A()(n,2),o=r[0],i=r[1],l=Object(h.useState)(!1),s=A()(l,2),u=s[0],f=s[1],m=Object(h.useState)(t.formatMessage(B.a.feedbackThankyou)),p=A()(m,2),d=p[0],E=p[1],g=function(){var e=I()(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o===t?0:t,e.prev=1,e.next=4,j.a.post("".concat(c.BASE_URL,"/rating/"),{},{rule:a.rule_id,rating:n});case 4:i(n),f(!0),setTimeout((function(){return E("")}),3e3),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return v.a.createElement("span",{className:"ratingSpanOverride"},t.formatMessage(B.a.ruleHelpful),v.a.createElement(L.Button,{variant:"plain","aria-label":"thumbs-up",onClick:function(){return g(1)}},1===o?v.a.createElement(D.a,{className:"like",size:"sm"}):v.a.createElement(M.a,{size:"sm"})),v.a.createElement(L.Button,{variant:"plain","aria-label":"thumbs-down",onClick:function(){return g(-1)}},-1===o?v.a.createElement(G.a,{className:"dislike",size:"sm"}):v.a.createElement(w.a,{size:"sm"})),u&&d)};U.propTypes={intl:y.a.any,rule:y.a.object};var z=Object(H.c)(U),K=a(102),V=a(348),Y=(a(1109),function(e){return e.map((function(t,a){return v.a.createElement(v.a.Fragment,{key:a},t,a+1!==e.length&&v.a.createElement("strong",{className:"verticalDivider"}," | "))}))}),J=function(e){var t=e.children,a=e.rule,n=e.intl,o=e.topics,d=e.header,b=e.isDetailsPage,y=function(e){var t=e.resolution_set.find((function(e){return e.system_type===c.SYSTEM_TYPES.rhel||c.SYSTEM_TYPES.ocp}));return t?t.resolution_risk.risk:void 0}(a),h=function(){return o&&i()(o.map((function(e){return r()(e.tag.split(" "),a.tags.split(" ")).length&&v.a.createElement(v.a.Fragment,{key:e.slug},v.a.createElement(g.Link,{to:"/topics/".concat(e.slug)},"".concat(e.name)))})))},_=function(e,t){return"string"==typeof e&&Boolean(e)&&v.a.createElement("span",{className:t&&"genericOverride"},v.a.createElement(T.a,{source:e,escapeHtml:!1}))};return v.a.createElement(l.Split,{gutter:"sm"},v.a.createElement(l.SplitItem,null,v.a.createElement(s.Stack,{gutter:"sm"},d&&v.a.createElement(s.StackItem,null,d),v.a.createElement(s.StackItem,null,b?_(a.generic,!0):_(a.summary)),a.node_id&&v.a.createElement(s.StackItem,null,v.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://access.redhat.com/node/".concat(a.node_id)},n.formatMessage(B.a.knowledgebaseArticle)," ",v.a.createElement(E.a,{size:"sm"}))),o&&a.tags&&h().length>0&&v.a.createElement(s.StackItem,null,v.a.createElement(m.Card,{className:"topicsCard",isCompact:!0},v.a.createElement(p.CardBody,null,v.a.createElement("strong",null,n.formatMessage(B.a.topicRelatedToRule)),v.a.createElement("br",null),Y(h())))),b&&v.a.createElement(z,{rule:a}),!b&&a.impacted_systems_count>0&&v.a.createElement(s.StackItem,null,v.a.createElement(g.Link,{key:"".concat(a.rule_id,"-link"),to:"/recommendations/".concat(a.rule_id)},n.formatMessage(B.a.viewAffectedSystems,{systems:a.impacted_systems_count}))))),v.a.createElement(l.SplitItem,null,v.a.createElement(s.Stack,{gutter:"sm"},t&&v.a.createElement(s.StackItem,null,t),v.a.createElement(s.StackItem,null,v.a.createElement(s.Stack,null,v.a.createElement(s.StackItem,null,n.formatMessage(B.a.totalRisk)),v.a.createElement(s.StackItem,{className:"pf-u-display-inline-flex alignCenterOverride pf-u-pb-sm pf-u-pt-sm"},v.a.createElement("span",{className:"pf-u-display-inline-flex"},v.a.createElement(f.Battery,{label:"",severity:a.total_risk}),v.a.createElement("span",{className:"batteryTextMarginOverride pf-u-pl-sm ins-sev-clr-".concat(a.total_risk)},c.TOTAL_RISK_LABEL[a.total_risk]||n.formatMessage(B.a.undefined)))),v.a.createElement(s.StackItem,null,v.a.createElement(V.TextContent,null,v.a.createElement(u.Text,{component:u.TextVariants.small},n.formatMessage(B.a.rulesDetailsTotalriskBody,{likelihood:c.LIKELIHOOD_LABEL[a.likelihood]||n.formatMessage(B.a.undefined),impact:c.IMPACT_LABEL[a.impact.impact]||n.formatMessage(B.a.undefined),strong:function(e){return v.a.createElement("strong",null,e)}})))),v.a.createElement("hr",null),v.a.createElement(s.StackItem,null,n.formatMessage(B.a.riskofchange)),v.a.createElement(s.StackItem,{className:"pf-u-display-inline-flex alignCenterOverride pf-u-pb-sm pf-u-pt-sm"},v.a.createElement("span",{className:"pf-u-display-inline-flex"},v.a.createElement(K.Shield,{hasTooltip:!1,impact:y,size:"md",title:c.RISK_OF_CHANGE_LABEL[y]||n.formatMessage(B.a.undefined)}),v.a.createElement("span",{className:"label pf-u-pl-sm ins-sev-clr-".concat(y)},c.RISK_OF_CHANGE_LABEL[y]||n.formatMessage(B.a.undefined)))),v.a.createElement(s.StackItem,null,v.a.createElement(V.TextContent,null,v.a.createElement(u.Text,{component:u.TextVariants.small},c.RISK_OF_CHANGE_DESC[y]))))),a.reboot_required&&v.a.createElement(s.StackItem,null,v.a.createElement(O.Reboot,{red:!0})," "))))};J.propTypes={children:y.a.any,rule:y.a.object,intl:y.a.any,topics:y.a.array,header:y.a.any,isDetailsPage:y.a.bool};t.a=Object(H.c)(J)},1253:function(e,t,a){var n=a(923);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(7)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(923,(function(){var t=a(923);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1360:function(e,t,a){"use strict";a.r(t);var n=a(148),r=a.n(n),o=a(236),i=a.n(o),c=a(237),l=a.n(c),s=a(107),u=a.n(s),f=a(235),m=a.n(f),p=(a(1253),a(811)),d=a(10),E=a(153),g=a(0),b=a.n(g),y=a(345),h=a(269),v=a(270),_=a(32),T=a(312),O=a(311),S=a(53),k=a(869),R=a(808),I=a(353),C=a.n(I),A=a(54),j=a(757),L=a.n(j),F=a(38),w=a(244),P=a.n(w),M=a(344),x=a(941),G=a(876),N=a(108),D=a(832),H=a(755),B=a(870),U=a(350),z=a(1),K=a.n(z),V=a(1115),Y=a(1110),J=a(773),q=a(1112),W=a(52),Q=a(91),X=a(877),Z=a(1113),$=a(21),ee=a(13),te=a(238),ae=a.n(te);function ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function re(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(a),!0).forEach((function(t){u()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ne(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var oe=function(e){var t,a=e.rules,n=e.filters,o=e.rulesFetchStatus,c=e.setFilters,s=e.fetchRules,f=e.addNotification,p=e.intl,I=e.selectedTags,j=Object(g.useState)([{title:p.formatMessage(ee.a.description),transforms:[h.a]},{title:p.formatMessage(ee.a.added),transforms:[h.a,Object(v.a)(15)]},{title:p.formatMessage(ee.a.totalRisk),transforms:[h.a,Object(v.a)(15)]},{title:p.formatMessage(ee.a.systems),transforms:[h.a]},{title:b.a.createElement(b.a.Fragment,null,b.a.createElement(C.a,{size:"md"})," ",p.formatMessage(ee.a.ansible)),transforms:[h.a],dataLabel:p.formatMessage(ee.a.ansible)}]),w=m()(j,1)[0],z=Object(g.useState)([]),K=m()(z,2),W=K[0],Q=K[1],$=Object(g.useState)({}),te=m()($,2),ae=te[0],ne=te[1],oe=Object(g.useState)(!0),ie=m()(oe,2),ce=ie[0],le=ie[1],se=Object(g.useState)(n.text||""),ue=m()(se,2),fe=ue[0],me=ue[1],pe=Object(g.useState)(!1),de=m()(pe,2),Ee=de[0],ge=de[1],be=Object(g.useState)({}),ye=m()(be,2),he=ye[0],ve=ye[1],_e=Object(g.useState)(!1),Te=m()(_e,2),Oe=Te[0],Se=Te[1],ke=Object(g.useState)({}),Re=m()(ke,2),Ie=Re[0],Ce=Re[1],Ae=Object(X.a)(fe,d.DEBOUNCE_DELAY),je=a.meta?a.meta.count:0,Le={1:"description",2:"publish_date",3:"total_risk",4:"impacted_count",5:"playbook_count"},Fe=Object(g.useCallback)((function(){Object(k.e)(n,I);var e=I.length&&{tags:I.join()};s(re(re({},Object(k.b)(n)),e))}),[s,n,I]),we=function(e){var t=e*n.limit-n.limit;c(re(re({},n),{},{offset:t}))},Pe=function(e){var t="undefined"===e?void 0:e;c(re(re({},n),{},{reports_shown:t,offset:0},"true"!==t&&{impacting:!1}))},Me=function(){var e=i()(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=W[t].rule,e.prev=1,!a.reports_shown){e.next=7;break}ve(a),ge(!0),e.next=10;break;case 7:return e.next=9,R.a.delete("".concat(d.BASE_URL,"/ack/").concat(a.rule_id,"/"));case 9:Fe();case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),f({variant:"danger",dismissable:!0,title:a.reports_shown?p.formatMessage(ee.a.rulesTableHideReportsErrorDisabled):p.formatMessage(ee.a.rulesTableHideReportsErrorEnabled),description:"".concat(e.t0)});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();Object(g.useEffect)((function(){!ce&&null!==I&&Fe()}),[Fe,ce,n,I]),Object(g.useEffect)((function(){if(window.location.search&&ce){var e=Object(k.c)();delete e.tags,void 0===e.text?me(""):me(e.text),e.reports_shown=void 0===e.reports_shown||"undefined"===e.reports_shown[0]?void 0:e.reports_shown,e.sort=void 0===e.sort?"-total_risk":e.sort[0],void 0!==e.has_playbook&&!Array.isArray(e.has_playbook)&&(e.has_playbook=["".concat(e.has_playbook)]),void 0!==e.incident&&!Array.isArray(e.incident)&&(e.incident=["".concat(e.incident)]),void 0===e.offset?e.offset=0:e.offset=Number(e.offset[0]),void 0===e.limit?e.limit=10:e.limit=Number(e.limit[0]),void 0!==e.reboot&&!Array.isArray(e.reboot)&&(e.reboot=["".concat(e.reboot)]),c(re(re({},n),e))}le(!1)}),[]),Object(g.useEffect)((function(){if(void 0!==n.sort){var e=Number(Object.entries(Le).find((function(e){return e[1]===n.sort||"-".concat(e[1])===n.sort}))[0]),t="-"===n.sort[0]?"desc":"asc";ne({index:e,direction:t})}}),[n.sort]),Object(g.useEffect)((function(){if(a.data)if(0===a.data.length)Q([{cells:[{title:b.a.createElement(B.a,{icon:P.a,iconClass:"ansibleCheck",size:"md",title:p.formatMessage(ee.a.rulesTableNoRuleHitsTitle),text:n.reports_shown?p.formatMessage(ee.a.rulesTableNoRuleHitsEnabledRulesBody):p.formatMessage(ee.a.rulesTableNoRuleHitsAnyRulesBody)},n.reports_shown&&b.a.createElement(F.Button,{variant:"link",style:{paddingTop:24},onClick:function(){return Pe("undefined")}},p.formatMessage(ee.a.rulesTableNoRuleHitsAddDisabledButton))),props:{colSpan:5}}]}]);else{var e=a.data.flatMap((function(e,t){return[{isOpen:!1,rule:e,cells:[{title:b.a.createElement("span",{key:t},b.a.createElement(Y.a,{rule:e}),b.a.createElement(N.Link,{key:t,to:"/recommendations/".concat(e.rule_id)}," ",e.description," "))},{title:b.a.createElement(M.DateFormat,{key:t,date:e.publish_date,variant:"relative"})},{title:b.a.createElement("div",{className:"pf-m-center",key:t},b.a.createElement(S.Tooltip,{key:t,position:S.TooltipPosition.bottom,content:p.formatMessage(ee.a.rulesDetailsTotalriskBody,{likelihood:d.LIKELIHOOD_LABEL[e.likelihood]||p.formatMessage(ee.a.undefined),impact:d.IMPACT_LABEL[e.impact.impact]||p.formatMessage(ee.a.undefined),strong:function(e){return b.a.createElement("strong",null,e)}})},b.a.createElement(A.Battery,{label:d.TOTAL_RISK_LABEL[e.total_risk]||p.formatMessage(ee.a.undefined),severity:e.total_risk})))},{title:b.a.createElement("div",{key:t}," ",e.reports_shown?"".concat(e.impacted_systems_count.toLocaleString()):p.formatMessage(ee.a.nA))},{title:b.a.createElement("div",{className:"pf-m-center ",key:t},e.playbook_count?b.a.createElement(P.a,{className:"ansibleCheck"}):p.formatMessage(ee.a.no))}]},{parent:2*t,fullWidth:!0,cells:[{title:b.a.createElement(H.Main,{className:"pf-m-light"},b.a.createElement(y.Stack,{gutter:"md"},e.hosts_acked_count?b.a.createElement(y.StackItem,null,b.a.createElement(L.a,{size:"sm"})," ",e.hosts_acked_count&&!e.impacted_systems_count?p.formatMessage(ee.a.ruleIsDisabledForAllSystems):p.formatMessage(ee.a.ruleIsDisabledForSystemsBody,{systems:e.hosts_acked_count}),"  ",b.a.createElement(F.Button,{isInline:!0,variant:"link",onClick:function(){Ce(e),Se(!0)}},p.formatMessage(ee.a.viewSystems))):b.a.createElement(b.a.Fragment,null),b.a.createElement(V.a,{rule:e})))}]}]}));Q(e.asMutable())}}),[a]),Object(g.useEffect)((function(){if(!ce&&"pending"!==o){var e=re({},n),t=fe.length?{text:fe}:{};delete e.text,c(re(re(re({},e),t),{},{offset:0}))}}),[Ae]);var xe,Ge=function(e){var t=re(re({},n),{},{offset:0});"text"===e&&me(""),delete t[e],c(t)},Ne=function(e,t){t.length>0?c(re(re({},n),{},{offset:0},u()({},e,t))):Ge(e)},De=["",{label:p.formatMessage(n.impacting?ee.a.rulesTableActionShow:ee.a.rulesTableActionHide),onClick:function(){return e=!n.impacting,void c(re(re({},n),{},{impacting:e,offset:0}));var e}}],He=[{label:p.formatMessage(ee.a.recommendation).toLowerCase(),filterValues:{key:"text-filter",onChange:function(e,t){return me(t)},value:fe,placeholder:p.formatMessage(ee.a.search)}},{label:d.FILTER_CATEGORIES.total_risk.title,type:d.FILTER_CATEGORIES.total_risk.type,id:d.FILTER_CATEGORIES.total_risk.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.total_risk.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.total_risk.urlParam,"-filter"),onChange:function(e,t){return Ne(d.FILTER_CATEGORIES.total_risk.urlParam,t)},value:n.total_risk,items:d.FILTER_CATEGORIES.total_risk.values}},{label:d.FILTER_CATEGORIES.res_risk.title,type:d.FILTER_CATEGORIES.res_risk.type,id:d.FILTER_CATEGORIES.res_risk.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.res_risk.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.res_risk.urlParam,"-filter"),onChange:function(e,t){return Ne(d.FILTER_CATEGORIES.res_risk.urlParam,t)},value:n.res_risk,items:d.FILTER_CATEGORIES.res_risk.values}},{label:d.FILTER_CATEGORIES.impact.title,type:d.FILTER_CATEGORIES.impact.type,id:d.FILTER_CATEGORIES.impact.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.impact.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.impact.urlParam,"-filter"),onChange:function(e,t){return Ne(d.FILTER_CATEGORIES.impact.urlParam,t)},value:n.impact,items:d.FILTER_CATEGORIES.impact.values}},{label:d.FILTER_CATEGORIES.likelihood.title,type:d.FILTER_CATEGORIES.likelihood.type,id:d.FILTER_CATEGORIES.likelihood.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.likelihood.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.likelihood.urlParam,"-filter"),onChange:function(e,t){return Ne(d.FILTER_CATEGORIES.likelihood.urlParam,t)},value:n.likelihood,items:d.FILTER_CATEGORIES.likelihood.values}},{label:d.FILTER_CATEGORIES.category.title,type:d.FILTER_CATEGORIES.category.type,id:d.FILTER_CATEGORIES.category.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.category.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.category.urlParam,"-filter"),onChange:function(e,t){return Ne(d.FILTER_CATEGORIES.category.urlParam,t)},value:n.category,items:d.FILTER_CATEGORIES.category.values}},{label:d.FILTER_CATEGORIES.incident.title,type:d.FILTER_CATEGORIES.incident.type,id:d.FILTER_CATEGORIES.incident.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.incident.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.incident.urlParam,"-filter"),onChange:function(e,t){return Ne(d.FILTER_CATEGORIES.incident.urlParam,t)},value:n.incident,items:d.FILTER_CATEGORIES.incident.values}},{label:d.FILTER_CATEGORIES.has_playbook.title,type:d.FILTER_CATEGORIES.has_playbook.type,id:d.FILTER_CATEGORIES.has_playbook.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.has_playbook.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.has_playbook.urlParam,"-filter"),onChange:function(e,t){return Ne(d.FILTER_CATEGORIES.has_playbook.urlParam,t)},value:n.has_playbook,items:d.FILTER_CATEGORIES.has_playbook.values}},{label:d.FILTER_CATEGORIES.reboot.title,type:d.FILTER_CATEGORIES.reboot.type,id:d.FILTER_CATEGORIES.reboot.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.reboot.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.reboot.urlParam,"-filter"),onChange:function(e,t){return Ne(d.FILTER_CATEGORIES.reboot.urlParam,t)},value:n.reboot,items:d.FILTER_CATEGORIES.reboot.values}},{label:d.FILTER_CATEGORIES.reports_shown.title,type:d.FILTER_CATEGORIES.reports_shown.type,id:d.FILTER_CATEGORIES.reports_shown.urlParam,value:"radio-".concat(d.FILTER_CATEGORIES.reports_shown.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.reports_shown.urlParam,"-filter"),onChange:function(e,t){return Pe(t)},value:void 0===n.reports_shown?"undefined":"".concat(n.reports_shown),items:d.FILTER_CATEGORIES.reports_shown.values}}],Be={filters:(xe=re({},n),delete xe.impacting,delete xe.topic,delete xe.sort,delete xe.offset,delete xe.limit,Object(k.d)(xe,d.FILTER_CATEGORIES)),onDelete:function(e,t,a){a?(me(""),c(re(re({},n.topic&&{topic:n.topic}),{},{impacting:!0,reports_shown:"true",limit:n.limit,offset:n.offset}))):t.map((function(e){var t=u()({},e.urlParam,Array.isArray(n[e.urlParam])?n[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?c(re(re({},n),t)):Ge(e.urlParam)}))}};return b.a.createElement(b.a.Fragment,null,Oe&&b.a.createElement(q.a,{handleModalToggle:function(e){return Se(e)},isModalOpen:Oe,afterFn:function(){Fe()},rule:Ie}),Ee&&b.a.createElement(x.a,{handleModalToggle:ge,isModalOpen:Ee,rule:he,afterFn:Fe}),b.a.createElement(U.PrimaryToolbar,{pagination:{itemCount:je,page:n.offset/n.limit+1,perPage:Number(n.limit),onSetPage:function(e,t){we(t)},onPerPageSelect:function(e,t){c(re(re({},n),{},{limit:t,offset:0}))},isCompact:!1},exportConfig:(t={label:p.formatMessage(ee.a.exportCsv)},u()(t,"label",p.formatMessage(ee.a.exportJson)),u()(t,"onSelect",(function(e,t){return Object(Z.a)("hits",t,Object(k.e)(n,I))})),u()(t,"isDisabled",!n.impacting),t),actionsConfig:{actions:De},filterConfig:{items:He},activeFiltersConfig:Be}),"fulfilled"===o&&b.a.createElement(_.b,{"aria-label":"rule-table",actionResolver:function(e,t){var a=t.rowIndex,n=W[a].rule?W[a].rule:null;return a%2==0&&n?n&&n.reports_shown?[{title:p.formatMessage(ee.a.disableRule),onClick:function(e,t){return Me(t)}}]:[{title:p.formatMessage(ee.a.enableRule),onClick:function(e,t){return Me(t)}}]:null},onCollapse:function(e,t,a){var n=l()(W);n[t]=re(re({},n[t]),{},{isOpen:a}),Q(n)},sortBy:ae,onSort:function(e,t,a){var r="".concat("asc"===a?"":"-").concat(Le[t]);ne({index:t,direction:a}),c(re(re({},n),{},{sort:r,offset:0}))},cells:w,rows:W},b.a.createElement(T.a,null),b.a.createElement(O.a,null)),"pending"===o&&b.a.createElement(D.a,null),"failed"===o&&b.a.createElement(G.a,{message:p.formatMessage(ee.a.rulesTableFetchRulesError)}),b.a.createElement(J.TableToolbar,null,b.a.createElement(E.Pagination,{itemCount:je,page:n.offset/n.limit+1,perPage:Number(n.limit),onSetPage:function(e,t){we(t)},onPerPageSelect:function(e,t){c(re(re({},n),{},{limit:t,offset:0}))},widgetId:"pagination-options-menu-bottom",variant:E.PaginationVariant.bottom})))};oe.propTypes={fetchRules:K.a.func,rulesFetchStatus:K.a.string,rules:K.a.object,filters:K.a.object,addNotification:K.a.func,setFilters:K.a.func,intl:K.a.any,selectedTags:K.a.array};t.default=Object($.c)(ae()(Object(Q.connect)((function(e,t){return re({rules:e.AdvisorStore.rules,rulesFetchStatus:e.AdvisorStore.rulesFetchStatus,filters:e.AdvisorStore.filters,selectedTags:e.AdvisorStore.selectedTags},t)}),(function(e){return{fetchRules:function(t){return e(p.d(t))},addNotification:function(t){return e(Object(W.addNotification)(t))},setFilters:function(t){return e(p.k(t))}}}))(oe)))},811:function(e,t,a){"use strict";a.d(t,"d",(function(){return f})),a.d(t,"b",(function(){return m})),a.d(t,"e",(function(){return p})),a.d(t,"k",(function(){return d})),a.d(t,"h",(function(){return E})),a.d(t,"i",(function(){return g})),a.d(t,"g",(function(){return b})),a.d(t,"f",(function(){return y})),a.d(t,"c",(function(){return h})),a.d(t,"j",(function(){return v})),a.d(t,"a",(function(){return _})),a.d(t,"l",(function(){return T})),a.d(t,"n",(function(){return O})),a.d(t,"m",(function(){return S})),a.d(t,"o",(function(){return k}));var n=a(148),r=a.n(n),o=a(236),i=a.n(o),c=a(10),l=a(808),s=function(){var e=i()(r.a.mark((function e(t,a,n){var o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return e.next=4,l.a.get(t,a,n);case 4:return o=e.sent,e.abrupt("return",o.data);case 6:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),u=function(){var e=i()(r.a.mark((function e(t,a,n){var o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return e.next=4,l.a.post(t,a,n);case 4:return o=e.sent,e.abrupt("return",o.data);case 6:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),f=function(e){return{type:c.RULES_FETCH,payload:s(c.RULES_FETCH_URL,{},e)}},m=function(e){return{type:c.RULE_FETCH,payload:s("".concat(c.RULES_FETCH_URL).concat(e.rule_id,"/"),{},e.tags&&{tags:e.tags})}},p=function(e,t){return{type:c.SYSTEM_FETCH,payload:s("".concat(c.RULES_FETCH_URL).concat(encodeURI(e),"/systems"),{},t)}},d=function(e){return{type:c.FILTERS_SET,payload:e}},E=function(e){return{type:c.TOPICS_FETCH,payload:s(c.TOPICS_FETCH_URL,{},e)}},g=function(){return{type:c.TOPICS_FETCH,payload:s("".concat(c.TOPICS_FETCH_URL,"?show_disabled=true"))}},b=function(e){return{type:c.TOPIC_FETCH,payload:s("".concat(c.TOPICS_FETCH_URL).concat(e.topic_id,"/"))}},y=function(e){return{type:c.SYSTEMS_FETCH,payload:s(c.SYSTEMS_FETCH_URL,{},e)}},h=function(e){return{type:c.RULE_ACK_FETCH,payload:s("".concat(c.RULE_ACK_URL).concat(e.rule_id,"/"))}},v=function(e){return{type:c["".concat(e.type,"_ACK_SET")],payload:u(c["".concat(e.type,"_ACK_URL")],{},e.options)}},_=function(e){return{type:c.HOST_ACK_FETCH,payload:s("".concat(c.HOST_ACK_URL),{},e)}},T=function(e){return{type:c.FILTERS_SYSTEMS_SET,payload:e}},O=function(e){return{type:c.SELECTED_TAGS_SET,payload:e}},S=function(e){return{type:c.RULE_SET,payload:e}},k=function(e){return{type:c.SYSTEM_SET,payload:e}}},845:function(e,t,a){(t=a(5)(!1)).push([e.i,"hr{border:0.01rem solid #ccc;margin:var(--pf-global--spacer--md) 0 var(--pf-global--spacer--md) 0}.ins-sev-clr-1{color:var(--pf-global--Color--200)}.ins-sev-clr-2{color:var(--pf-global--warning-color--100)}.ins-sev-clr-3{color:var(--ins-color--orange)}.ins-sev-clr-4{color:var(--pf-global--danger-color--100)}.ansibleCol svg{vertical-align:text-bottom}.ansibleCheck{color:var(--pf-global--success-color--200)}.topicsCard{background-color:var(--pf-global--BackgroundColor--150);box-shadow:none;word-break:break-word}.alignCenterOverride{align-items:center}.batteryTextMarginOverride{padding-top:3px}.genericOverride p{margin-top:0;margin-bottom:var(--pf-global--spacer--md)}\n",""]),e.exports=t},861:function(e,t,a){(t=a(5)(!1)).push([e.i,".like{color:var(--pf-global--success-color--200)}.dislike{color:var(--pf-global--primary-color--100)}.ratingSpanOverride{font-size:var(--pf-global--FontSize--sm) !important}.ratingSpanOverride button{padding:8px}\n",""]),e.exports=t},862:function(e,t,a){(t=a(5)(!1)).push([e.i,".verticalDivider{color:var(--pf-global--BorderColor--100)}\n",""]),e.exports=t},863:function(e,t,a){(t=a(5)(!1)).push([e.i,".incidentLabel{background-color:var(--pf-global--danger-color--100) !important}.disabledLabel{background-color:var(--pf-global--Color--200) !important}.pf-c-label{margin-right:var(--pf-global--spacer--xs)}\n",""]),e.exports=t},869:function(e,t,a){"use strict";a.d(t,"e",(function(){return f})),a.d(t,"b",(function(){return m})),a.d(t,"c",(function(){return p})),a.d(t,"a",(function(){return d})),a.d(t,"d",(function(){return E}));var n=a(107),r=a.n(n),o=a(235),i=a.n(o),c=a(237),l=a.n(c);function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f=function(e,t){var a=new URL(window.location),n="".concat(Object.keys(e).map((function(t){return"".concat(t,"=").concat(Array.isArray(e[t])?e[t].join():e[t])})).join("&")),r=new URLSearchParams(n);return null!==t&&t.length?r.set("tags",t.join()):r.delete("tags"),window.history.replaceState(null,null,"".concat(a.origin).concat(a.pathname,"?").concat(r.toString())),"?".concat(n)},m=function(e){return Object.assign.apply(Object,[{}].concat(l()(Object.entries(e).map((function(e){var t=i()(e,2),a=t[0],n=t[1];return Array.isArray(n)?("true"===n[0]||"false"===n[0])&&n.length>1?null:r()({},a,n.join()):r()({},a,n)})))))},p=function(){var e=new URLSearchParams(window.location.search);return Array.from(e).reduce((function(e,t){var a=i()(t,2),n=a[0],o=a[1];return u(u({},e),{},r()({},n,"true"===o||"false"===o?JSON.parse(o):o.split(",")))}),{})},d=function(e){return e[0].toUpperCase()+e.substring(1)},E=function(e,t){var a=Object.entries(e);return a.length>0?a.map((function(e){if(t[e[0]]){var a=t[e[0]],n=Array.isArray(e[1])?e[1].map((function(e){var t=a.values.find((function(t){return t.value===String(e)}));return t?{name:t.text||t.label,value:e}:{name:e,value:e}})):[{name:a.values.find((function(t){return t.value===String(e[1])})).label,value:e[1]}];return{category:d(a.title),chips:n,urlParam:a.urlParam}}return{category:"Description",chips:[{name:e[1],value:e[1]}],urlParam:e[0]}})):[]}},870:function(e,t,a){"use strict";var n=a(241),r=a(346),o=a.n(r),i=a(242),c=a(347),l=a(1),s=a.n(l),u=a(0),f=a.n(u),m=a(111),p=function(e){var t=e.className,a=e.children,r=e.icon,o=e.iconClass,l=e.iconStyle,s=e.size,u=e.text,p=e.title,d=e.variant;return f.a.createElement(n.EmptyState,{className:t,variant:d},"none"!==r&&f.a.createElement(c.EmptyStateIcon,{className:o,style:l,icon:r,size:s}),f.a.createElement(m.Title,{headingLevel:"h5",size:"lg"},p),f.a.createElement(i.EmptyStateBody,{style:{marginBottom:"16px"}},u),a)};p.propTypes={children:s.a.any,icon:s.a.any,iconClass:s.a.any,iconStyle:s.a.any,size:s.a.string,text:s.a.any,title:s.a.string,variant:s.a.any,className:s.a.string},p.defaultProps={icon:o.a,title:"",variant:n.EmptyStateVariant.full,size:"md"},t.a=p},876:function(e,t,a){"use strict";var n=a(109),r=a(110),o=a(150),i=a(758),c=a.n(i),l=a(0),s=a.n(l),u=a(1),f=a.n(u),m=function(e){var t=e.message;return s.a.createElement(s.a.Fragment,null,s.a.createElement(n.Card,{className:"ins-empty-rule-cards"},s.a.createElement(o.CardHeader,null,s.a.createElement(c.a,{size:"lg"})),s.a.createElement(r.CardBody,null,t)))};t.a=m,m.propTypes={message:f.a.string}},877:function(e,t,a){"use strict";var n=a(235),r=a.n(n),o=a(0);t.a=function(e,t){var a=Object(o.useState)(e),n=r()(a,2),i=n[0],c=n[1];return Object(o.useEffect)((function(){var a=setTimeout((function(){c(e)}),t);return function(){clearTimeout(a)}}),[t,e]),i}},923:function(e,t,a){(t=a(5)(!1)).push([e.i,".pf-c-check__label #battery_svg{height:1.25rem}@media screen and (min-width: 884px){.ins-c-conditional-filter .ins-c-conditional-filter__group .pf-c-dropdown__toggle-text{min-width:150px !important}}\n",""]),e.exports=t},941:function(e,t,a){"use strict";var n=a(148),r=a.n(n),o=a(107),i=a.n(o),c=a(236),l=a.n(c),s=a(235),u=a.n(s),f=a(0),m=a.n(f),p=a(811),d=a(808),E=a(10),g=a(38),b=a(351),y=a(761),h=a(762),v=a(754),_=a(1),T=a.n(_),O=a(240),S=a(52),k=a(91),R=a(21),I=a(13);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=function(e){var t=e.handleModalToggle,a=e.intl,n=e.isModalOpen,o=e.host,i=e.hosts,c=e.rule,s=e.afterFn,p=e.setAck,_=e.addNotification,T=e.setSystem,S=e.setRule,k=e.selectedTags,R=Object(f.useState)(""),C=u()(R,2),j=C[0],L=C[1],F=Object(f.useState)(void 0!==o||i.length>0),w=u()(F,2),P=w[0],M=w[1],x=function(){var e=l()(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={systems:i,justification:j},e.prev=1,e.next=4,d.a.post("".concat(E.BASE_URL,"/rule/").concat(c.rule_id,"/ack_hosts/"),{},t);case 4:n=e.sent,k.length>0?s&&s():(T({host_ids:n.data.host_ids}),S(A(A({},c),{},{hosts_acked_count:n.data.count+c.hosts_acked_count}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),_({variant:"danger",dismissable:!0,title:a.formatMessage(I.a.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=l()(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.reports_shown||i.length){e.next=8;break}return a=P?{type:"HOST",options:{rule:c.rule_id,system_uuid:o.id,justification:j}}:{type:"RULE",options:A({rule_id:c.rule_id},j&&{justification:j})},e.next=4,p(a);case 4:L(""),s&&s(),e.next=9;break;case 8:x();case 9:t(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return m.a.createElement(v.Modal,{isSmall:!0,title:a.formatMessage(I.a.disableRule),isOpen:n,onClose:function(){t(!1),L("")},onKeyPress:function(e){"Enter"===e.key&&G()},actions:[m.a.createElement(g.Button,{key:"confirm",variant:"primary",onClick:function(){return G()}},a.formatMessage(I.a.save)),m.a.createElement(g.Button,{key:"cancel",variant:"link",onClick:function(){t(!1),L("")}},a.formatMessage(I.a.cancel))],isFooterLeftAligned:!0},a.formatMessage(I.a.disableRuleBody),m.a.createElement(y.Form,null,m.a.createElement(h.FormGroup,{fieldId:"blank-form"}),(void 0!==o||i.length>0)&&m.a.createElement(h.FormGroup,{fieldId:"disable-rule-one-system"},m.a.createElement(b.Checkbox,{isChecked:P,onChange:function(){M(!P)},label:i.length?a.formatMessage(I.a.disableRuleForSystems):a.formatMessage(I.a.disableRuleSingleSystem),id:"disable-rule-one-system",name:"disable-rule-one-system"})),m.a.createElement(h.FormGroup,{label:a.formatMessage(I.a.justificationNote),fieldId:"disable-rule-justification"},m.a.createElement(O.TextInput,{type:"text",id:"disable-rule-justification",name:"disable-rule-justification","aria-describedby":"disable-rule-justification",value:j,onChange:function(e){L(e)}}))))};j.propTypes={isModalOpen:T.a.bool,host:T.a.object,handleModalToggle:T.a.func,intl:T.a.any,rule:T.a.object,afterFn:T.a.func,setAck:T.a.func,hosts:T.a.array,addNotification:T.a.func,setRule:T.a.func,setSystem:T.a.func,selectedTags:T.a.array},j.defaultProps={isModalOpen:!1,handleModalToggle:function(){},system:void 0,rule:{},afterFn:function(){},host:void 0,hosts:[]};t.a=Object(R.c)(Object(k.connect)((function(e){return{selectedTags:e.AdvisorStore.selectedTags}}),(function(e){return{addNotification:function(t){return e(Object(S.addNotification)(t))},setAck:function(t){return e(Object(p.j)(t))},setRule:function(t){return e(Object(p.m)(t))},setSystem:function(t){return e(Object(p.o)(t))}}}))(j))},970:function(e,t,a){var n=a(845);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(7)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(845,(function(){var t=a(845);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))}}]);
//# sourceMappingURL=RulesTable.js.map