(window.webpackJsonp=window.webpackJsonp||[]).push([[12,4,6],{1003:function(e,t,a){(t=a(6)(!1)).push([e.i,".like{color:var(--pf-global--success-color--100)}.dislike{color:var(--pf-global--primary-color--100)}.ratingSpanOverride{font-size:var(--pf-global--FontSize--sm) !important}.ratingSpanOverride button{padding:8px}\n",""]),e.exports=t},1004:function(e,t,a){(t=a(6)(!1)).push([e.i,".verticalDivider{color:var(--pf-global--BorderColor--100)}\n",""]),e.exports=t},1005:function(e,t,a){(t=a(6)(!1)).push([e.i,".incidentLabel{background-color:#faeae8 !important}.pf-c-label{margin-right:var(--pf-global--spacer--xs)}\n",""]),e.exports=t},1009:function(e,t,a){"use strict";var n=a(895),r=a(898),o=a.n(r),i=a(897),s=a(896),l=a(10),c=a.n(l),u=a(1),m=a.n(u),f=a(890),p=function(e){var t=e.className,a=e.children,r=e.icon,o=e.iconClass,l=e.iconStyle,c=e.text,u=e.title,p=e.variant;return m.a.createElement(n.EmptyState,{className:t,variant:p},"none"!==r&&m.a.createElement(s.EmptyStateIcon,{className:o,style:l,icon:r}),m.a.createElement(f.Title,{headingLevel:"h5",size:"lg"},u),m.a.createElement(i.EmptyStateBody,{style:{marginBottom:"16px"}},c),a)};p.propTypes={children:c.a.any,icon:c.a.any,iconClass:c.a.any,iconStyle:c.a.any,text:c.a.any,title:c.a.string,variant:c.a.any,className:c.a.string},p.defaultProps={icon:o.a,title:"",variant:n.EmptyStateVariant.full},t.a=p},1023:function(e,t,a){"use strict";var n=a(484),r=a(485),o=a(487),i=a(905),s=a.n(i),l=a(1),c=a.n(l),u=a(10),m=a.n(u),f=function(e){var t=e.message;return c.a.createElement(c.a.Fragment,null,c.a.createElement(n.Card,{className:"ins-empty-rule-cards"},c.a.createElement(o.CardHeader,null,c.a.createElement(s.a,{size:"lg"})),c.a.createElement(r.CardBody,null,t)))};t.a=f,f.propTypes={message:m.a.string}},1060:function(e,t,a){"use strict";a.d(t,"e",(function(){return m})),a.d(t,"b",(function(){return f})),a.d(t,"c",(function(){return p})),a.d(t,"a",(function(){return d})),a.d(t,"d",(function(){return E}));var n=a(196),r=a.n(n),o=a(364),i=a.n(o),s=a(368),l=a.n(s);function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m=function(e,t){var a=new URL(window.location),n="".concat(Object.keys(e).map((function(t){return"".concat(t,"=").concat(Array.isArray(e[t])?e[t].join():e[t])})).join("&")),r=new URLSearchParams(n);return"undefined"===r.get("reports_shown")&&r.delete("reports_shown"),null!==t&&t.length?r.set("tags",t.join()):r.delete("tags"),window.history.replaceState(null,null,"".concat(a.origin).concat(a.pathname,"?").concat(r.toString())),"?".concat(n)},f=function(e){return Object.assign.apply(Object,[{}].concat(l()(Object.entries(e).map((function(e){var t=i()(e,2),a=t[0],n=t[1];return Array.isArray(n)?("true"===n[0]||"false"===n[0])&&n.length>1?null:r()({},a,n.join()):r()({},a,n)})))))},p=function(){var e=new URLSearchParams(window.location.search);return Array.from(e).reduce((function(e,t){var a=i()(t,2),n=a[0],o=a[1];return u(u({},e),{},r()({},n,"true"===o||"false"===o?JSON.parse(o):o.split(",")))}),{})},d=function(e){return Object.entries(e).reduce((function(e,t,a){var n=i()(t,2),r=n[0],o=n[1];return e+(0===a?"".concat(r,"=").concat(o):"&".concat(r,"=").concat(o))}),"")},E=function(e,t){var a=Object.entries(e);return a.length>0?a.map((function(e){if(t[e[0]]){var a=t[e[0]],n=Array.isArray(e[1])?e[1].map((function(e){var t=a.values.find((function(t){return t.value===String(e)}));return t?{name:t.text||t.label,value:e}:{name:e,value:e}})):[{name:a.values.find((function(t){return t.value===String(e[1])})).label,value:e[1]}];return{category:(r=a.title,r[0].toUpperCase()+r.substring(1)),chips:n,urlParam:a.urlParam}}return{category:"Name",chips:[{name:e[1],value:e[1]}],urlParam:e[0]};var r})):[]}},1061:function(e,t,a){(t=a(6)(!1)).push([e.i,".ansibleCheck{color:var(--pf-global--success-color--100)}@media screen and (min-width: 884px){.ins-c-conditional-filter .ins-c-conditional-filter__group .pf-c-dropdown__toggle-text{min-width:150px !important}}.ins-c-center-text{text-align:center}.pf-c-table tr>:last-child{--pf-c-table--cell--PaddingRight: 0px}\n",""]),e.exports=t},1074:function(e,t,a){"use strict";var n=a(104),r=a.n(n),o=a(196),i=a.n(o),s=a(172),l=a.n(s),c=a(364),u=a.n(c),m=a(1),f=a.n(m),p=a(365),d=a(197),E=a(7),b=a(250),g=a(904),v=a(902),h=a(903),y=a(892),_=a(10),O=a.n(_),k=a(486),S=a(125),T=a(93),R=a(48),I=a(18);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var A=function(e){var t=e.handleModalToggle,a=e.intl,n=e.isModalOpen,o=e.host,i=e.hosts,s=e.rule,c=e.afterFn,p=e.setAck,_=e.addNotification,O=e.setSystem,S=e.setRule,T=e.selectedTags,R=Object(m.useState)(""),j=u()(R,2),A=j[0],w=j[1],L=Object(m.useState)(void 0!==o||i.length>0),F=u()(L,2),M=F[0],P=F[1],x=function(){var e=l()(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={systems:i,justification:A},e.prev=1,e.next=4,d.a.post("".concat(E.BASE_URL,"/rule/").concat(s.rule_id,"/ack_hosts/"),{},t);case 4:n=e.sent,T.length>0?c&&c():(O({host_ids:n.data.host_ids}),S(C(C({},s),{},{hosts_acked_count:n.data.count+s.hosts_acked_count}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),_({variant:"danger",dismissable:!0,title:a.formatMessage(I.a.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=l()(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s.reports_shown||i.length){e.next=15;break}return n=M?{type:"HOST",options:{rule:s.rule_id,system_uuid:o.id,justification:A}}:{type:"RULE",options:C({rule_id:s.rule_id},A&&{justification:A})},e.prev=2,e.next=5,p(n);case 5:_({variant:"success",timeout:!0,dismissable:!0,title:a.formatMessage(I.a.ruleSuccessfullyDisabled)}),w(""),c&&c(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),_({variant:"danger",dismissable:!0,title:a.formatMessage(I.a.error),description:"".concat(e.t0)});case 13:e.next=16;break;case 15:x();case 16:t(!1);case 17:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return f.a.createElement(y.Modal,{variant:"small",title:a.formatMessage(I.a.disableRule),isOpen:n,onClose:function(){t(!1),w("")},onKeyPress:function(e){return"Enter"===e.key&&G()},actions:[f.a.createElement(b.Button,{key:"confirm",variant:"primary",onClick:function(){return G()}},a.formatMessage(I.a.save)),f.a.createElement(b.Button,{key:"cancel",variant:"link",onClick:function(){t(!1),w("")}},a.formatMessage(I.a.cancel))]},a.formatMessage(I.a.disableRuleBody),f.a.createElement(v.Form,null,f.a.createElement(h.FormGroup,{fieldId:"blank-form"}),(void 0!==o||i.length>0)&&f.a.createElement(h.FormGroup,{fieldId:"disable-rule-one-system"},f.a.createElement(g.Checkbox,{isChecked:M,onChange:function(){P(!M)},label:i.length?a.formatMessage(I.a.disableRuleForSystems):a.formatMessage(I.a.disableRuleSingleSystem),id:"disable-rule-one-system",name:"disable-rule-one-system"})),f.a.createElement(h.FormGroup,{label:a.formatMessage(I.a.justificationNote),fieldId:"disable-rule-justification"},f.a.createElement(k.TextInput,{type:"text",id:"disable-rule-justification","aria-describedby":"disable-rule-justification",value:A,onChange:function(e){return w(e)}}))))};A.propTypes={isModalOpen:O.a.bool,host:O.a.object,handleModalToggle:O.a.func,intl:O.a.any,rule:O.a.object,afterFn:O.a.func,setAck:O.a.func,hosts:O.a.array,addNotification:O.a.func,setRule:O.a.func,setSystem:O.a.func,selectedTags:O.a.array},A.defaultProps={isModalOpen:!1,handleModalToggle:function(){},system:void 0,rule:{},afterFn:function(){},host:void 0,hosts:[]};t.a=Object(R.c)(Object(T.connect)((function(e){return{selectedTags:e.AdvisorStore.selectedTags}}),(function(e){return{addNotification:function(t){return e(Object(S.addNotification)(t))},setAck:function(t){return e(Object(p.j)(t))},setRule:function(t){return e(Object(p.m)(t))},setSystem:function(t){return e(Object(p.o)(t))}}}))(A))},1106:function(e,t,a){var n=a(987);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(8)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(987,(function(){var t=a(987);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1225:function(e,t){},1244:function(e,t,a){var n=a(1003);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(8)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(1003,(function(){var t=a(1003);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1245:function(e,t,a){var n=a(1004);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(8)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(1004,(function(){var t=a(1004);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1246:function(e,t,a){"use strict";a(1247);var n=a(117),r=a(893),o=a(10),i=a.n(o),s=a(1),l=a.n(s),c=a(48),u=a(18),m=function(e){var t=e.intl,a=e.rule;return l.a.createElement(l.a.Fragment,null,-1!==a.tags.search("incident")&&l.a.createElement(n.Tooltip,{content:t.formatMessage(u.a.incidentTooltip),position:n.TooltipPosition.right},l.a.createElement(r.Label,{color:"red",className:"incidentLabel"},t.formatMessage(u.a.incident))),!a.reports_shown&&l.a.createElement(n.Tooltip,{content:t.formatMessage(u.a.ruleIsDisabledTooltip),position:n.TooltipPosition.right},l.a.createElement(r.Label,{color:"gray"},t.formatMessage(u.a.disabled))))};m.propTypes={intl:i.a.any,rule:i.a.object},t.a=Object(c.c)(m)},1247:function(e,t,a){var n=a(1005);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(8)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(1005,(function(){var t=a(1005);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1248:function(e,t,a){"use strict";var n=a(196),r=a.n(n),o=a(104),i=a.n(o),s=a(172),l=a.n(s),c=a(364),u=a.n(c),m=a(1),f=a.n(m),p=a(74),d=a(435),E=a(433),b=a(365),g=a(197),v=a(7),h=a(250),y=a(894),_=a(369),O=a(892),k=a(920),S=a.n(k),T=a(10),R=a.n(T),I=a(125),j=a(93),C=a(48),A=a(18);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var L=function(e){var t=e.fetchHostAcks,a=e.hostAcksFetchStatus,n=e.handleModalToggle,r=e.intl,o=e.isModalOpen,s=e.hostAcks,c=e.rule,b=e.afterFn,k=[r.formatMessage(A.a.systemName),r.formatMessage(A.a.justificationNote),r.formatMessage(A.a.dateDisabled),""],T=Object(m.useState)([]),R=u()(T,2),j=R[0],C=R[1],w=Object(m.useState)(!1),L=u()(w,2),F=L[0],M=L[1],P=function(){var e=l()(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.delete("".concat(v.BASE_URL,"/hostack/").concat(a.id,"/"));case 3:t({rule_id:c.rule_id,limit:c.hosts_acked_count}),M(!0),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),n(!1),Object(I.addNotification)({variant:"danger",dismissable:!0,title:r.formatMessage(A.a.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.useEffect)((function(){if(s.data){var e=s.data.map((function(e){return{cells:[e.display_name||e.system_uuid,e.justification||r.formatMessage(A.a.none),{title:f.a.createElement(y.DateFormat,{date:new Date(e.updated_at),type:"onlyDate"})},{title:f.a.createElement(h.Button,{key:e.system_uuid,isInline:!0,variant:"link",onClick:function(){return P(e)}},f.a.createElement(S.a,{size:"sm"}),"   ",r.formatMessage(A.a.enable))}]}})).asMutable();e.length||(b(),n(!1)),C(e)}}),[s]),Object(m.useEffect)((function(){t({rule_id:c.rule_id,limit:c.hosts_acked_count})}),[t,c.hosts_acked_count,c.rule_id]),f.a.createElement(O.Modal,{width:"50%",title:r.formatMessage(A.a.hostAckModalTitle),isOpen:o,onClose:function(){F&&b(),n(!1)}},"fulfilled"===a&&f.a.createElement(p.b,{"aria-label":"host-ack-table",rows:j,cells:k},f.a.createElement(d.a,null),f.a.createElement(E.a,null)),"fulfilled"!==a&&f.a.createElement(p.b,{"aria-label":"host-ack-table",rows:[{cells:[{props:{colSpan:3},title:f.a.createElement(_.List,null)}]}],cells:k},f.a.createElement(d.a,null),f.a.createElement(E.a,null)))};L.propTypes={isModalOpen:R.a.bool,handleModalToggle:R.a.func,intl:R.a.any,rule:R.a.object,fetchHostAcks:R.a.func,hostAcks:R.a.object,hostAcksFetchStatus:R.a.string,addNotification:R.a.func,afterFn:R.a.func},L.defaultProps={isModalOpen:!1,handleModalToggle:function(){},rule:{},afterFn:function(){}};t.a=Object(C.c)(Object(j.connect)((function(e){var t=e.AdvisorStore,a=e.ownProps;return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({hostAcks:t.hostAcks,hostAcksFetchStatus:t.hostAcksFetchStatus},a)}),(function(e){return{setAck:function(t){return e(Object(b.j)(t))},fetchHostAcks:function(t){return e(Object(b.a)(t))},addNotification:function(t){return e(Object(I.addNotification)(t))}}}))(L))},1249:function(e,t,a){"use strict";var n=a(104),r=a.n(n),o=a(172),i=a.n(o),s=a(197),l=a(7),c=a(375),u=function(e){var t={date:(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc"};return"Insights-Advisor_".concat(e,"--").concat(t.date)},m=function(){var e=i()(r.a.mark((function e(t,a,n){var o,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("".concat(l.BASE_URL,"/export/").concat(t,".").concat("json"===a?"json":"csv").concat(n));case 3:o=e.sent,i="json"===a?JSON.stringify(o.data):o.data,Object(c.downloadFile)(i,u(t),a),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),"".concat(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a,n){return e.apply(this,arguments)}}();t.a=m},1252:function(e,t,a){"use strict";var n=a(1024),r=a.n(n),o=a(1105),i=a.n(o),s=(a(1106),a(7)),l=a(906),c=a(899),u=a(908),m=a(484),f=a(485),p=a(372),d=a.n(p),E=a(900),b=a(173),g=a(919),v=a.n(g),h=a(10),y=a.n(h),_=a(1),O=a.n(_),k=a(1107),S=a.n(k),T=a(104),R=a.n(T),I=a(172),j=a.n(I),C=a(364),A=a.n(C),w=(a(1244),a(197)),L=a(250),F=a(918),M=a.n(F),P=a(916),x=a.n(P),G=a(917),N=a.n(G),D=a(915),B=a.n(D),H=a(48),V=a(18),z=function(e){var t=e.intl,a=e.rule,n=Object(_.useState)(a.rating),r=A()(n,2),o=r[0],i=r[1],l=Object(_.useState)(!1),c=A()(l,2),u=c[0],m=c[1],f=Object(_.useState)(t.formatMessage(V.a.feedbackThankyou)),p=A()(f,2),d=p[0],E=p[1],b=function(){var e=j()(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o===t?0:t,e.prev=1,e.next=4,w.a.post("".concat(s.BASE_URL,"/rating/"),{},{rule:a.rule_id,rating:n});case 4:i(n),m(!0),setTimeout((function(){return E("")}),3e3),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return O.a.createElement("span",{className:"ratingSpanOverride"},t.formatMessage(V.a.ruleHelpful),O.a.createElement(L.Button,{variant:"plain","aria-label":"thumbs-up",onClick:function(){return b(1)}},1===o?O.a.createElement(B.a,{className:"like",size:"sm"}):O.a.createElement(x.a,{size:"sm"})),O.a.createElement(L.Button,{variant:"plain","aria-label":"thumbs-down",onClick:function(){return b(-1)}},-1===o?O.a.createElement(N.a,{className:"dislike",size:"sm"}):O.a.createElement(M.a,{size:"sm"})),u&&d)};z.propTypes={intl:y.a.any,rule:y.a.object};var U=Object(H.c)(z),K=a(927),q=a(907),J=(a(1245),function(e){return e.map((function(t,a){return O.a.createElement(O.a.Fragment,{key:a},t,a+1!==e.length&&O.a.createElement("strong",{className:"verticalDivider"}," | "))}))}),W=a(175),Y=function(e){var t=e.children,a=e.rule,n=e.resolutionRisk,o=e.intl,p=e.topics,g=e.header,h=e.isDetailsPage,y=function(){return p&&i()(p.map((function(e){return r()(e.tag.split(" "),a.tags.split(" ")).length&&O.a.createElement(O.a.Fragment,{key:e.slug},O.a.createElement(b.Link,{to:"/topics/".concat(e.slug)},"".concat(e.name)))})))},_=function(e,t){return"string"==typeof e&&Boolean(e)&&O.a.createElement("span",{className:t&&"genericOverride"},O.a.createElement(S.a,{source:e,escapeHtml:!1}))};return O.a.createElement(l.Split,{className:"ins-c-rule-details__split",hasGutter:!0},O.a.createElement(l.SplitItem,null,O.a.createElement(c.Stack,{hasGutter:!0},g&&O.a.createElement(c.StackItem,null,g),O.a.createElement(c.StackItem,null,h?_(a.generic,!0):_(a.summary)),a.node_id&&O.a.createElement(c.StackItem,null,O.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://access.redhat.com/node/".concat(a.node_id)},o.formatMessage(V.a.knowledgebaseArticle)," ",O.a.createElement(d.a,{size:"sm"}))),p&&a.tags&&y().length>0&&O.a.createElement(c.StackItem,null,O.a.createElement(m.Card,{className:"topicsCard",isCompact:!0},O.a.createElement(f.CardBody,null,O.a.createElement("strong",null,o.formatMessage(V.a.topicRelatedToRule)),O.a.createElement("br",null),J(y())))),h&&O.a.createElement(U,{rule:a}),!h&&a.impacted_systems_count>0&&O.a.createElement(c.StackItem,null,O.a.createElement(b.Link,{key:"".concat(a.rule_id,"-link"),to:"/recommendations/".concat(a.rule_id)},o.formatMessage(V.a.viewAffectedSystems,{systems:a.impacted_systems_count}))))),O.a.createElement(l.SplitItem,null,O.a.createElement(c.Stack,{gutter:"sm"},t&&O.a.createElement(c.StackItem,null,t),O.a.createElement(c.StackItem,null,O.a.createElement(c.Stack,{className:"ins-c-rule-details__stack"},O.a.createElement(c.StackItem,null,O.a.createElement("strong",null,o.formatMessage(V.a.totalRisk))),O.a.createElement(c.StackItem,{className:"pf-u-display-inline-flex alignCenterOverride pf-u-pb-sm pf-u-pt-sm"},O.a.createElement("span",{className:"ins-c-rule-details__stackitem"},O.a.createElement("span",null,O.a.createElement(E.a,{value:a.total_risk})),O.a.createElement(c.Stack,{hasGutter:!0,className:"description-stack-override"},O.a.createElement(c.StackItem,null,O.a.createElement(q.TextContent,null,O.a.createElement(u.Text,{component:u.TextVariants.p},o.formatMessage(V.a.rulesDetailsTotalriskBody,{risk:s.TOTAL_RISK_LABEL_LOWER[a.total_risk]||o.formatMessage(V.a.undefined),strong:function(e){return Object(W.a)(e)}})))),O.a.createElement(c.Stack,null,O.a.createElement(c.StackItem,null,O.a.createElement(K.a,{className:"severity-line",title:o.formatMessage(V.a.likelihoodLevel,{level:s.LIKELIHOOD_LABEL[a.likelihood]}),value:a.likelihood,tooltipMessage:o.formatMessage(V.a.likelihoodDescription,{level:s.LIKELIHOOD_LABEL_LOWER[a.likelihood]})})),O.a.createElement(c.StackItem,null,O.a.createElement(K.a,{className:"severity-line",title:o.formatMessage(V.a.impactLevel,{level:s.IMPACT_LABEL[a.impact.impact]}),value:a.impact.impact,tooltipMessage:o.formatMessage(V.a.impactDescription,{level:s.IMPACT_LABEL_LOWER[a.impact.impact]})})))))),O.a.createElement("hr",null),O.a.createElement(c.StackItem,null,O.a.createElement("strong",null,o.formatMessage(V.a.riskofchange))),O.a.createElement(c.StackItem,{className:"pf-u-display-inline-flex alignCenterOverride pf-u-pb-sm pf-u-pt-sm"},O.a.createElement("span",{className:"ins-c-rule-details__stackitem"},O.a.createElement("span",null,O.a.createElement(E.a,{text:s.RISK_OF_CHANGE_LABEL[n],value:n,hideIcon:!0})),O.a.createElement(c.Stack,{hasGutter:!0,className:"description-stack-override"},O.a.createElement(c.StackItem,null,O.a.createElement(q.TextContent,null,O.a.createElement(u.Text,{component:u.TextVariants.p},n?s.RISK_OF_CHANGE_DESC[n]:o.formatMessage(V.a.undefined)))),O.a.createElement(c.StackItem,null,O.a.createElement("span",{className:"system-reboot-message"},O.a.createElement(v.a,{className:a.reboot_required?"reboot-required-icon":"no-reboot-required-icon"}),O.a.createElement(q.TextContent,{className:"system-reboot-message__content"},O.a.createElement(u.Text,{component:u.TextVariants.p},o.formatMessage(V.a.systemReboot,{strong:function(e){return Object(W.a)(e)},status:a.reboot_required?o.formatMessage(V.a.is):o.formatMessage(V.a.isNot)})))))))))))))};Y.propTypes={children:y.a.any,rule:y.a.object,resolutionRisk:y.a.number,intl:y.a.any,topics:y.a.array,header:y.a.any,isDetailsPage:y.a.bool};t.a=Object(H.c)(Y)},1395:function(e,t,a){var n=a(1061);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(8)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(1061,(function(){var t=a(1061);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1496:function(e,t,a){"use strict";a.r(t);var n=a(104),r=a.n(n),o=a(172),i=a.n(o),s=a(368),l=a.n(s),c=a(196),u=a.n(c),m=a(364),f=a.n(m),p=(a(1395),a(365)),d=a(7),E=a(928),b=a(1),g=a.n(b),v=a(899),h=a(396),y=a(411),_=a(129),O=a(74),k=a(435),S=a(433),T=a(117),R=a(1060),I=a(197),j=a(914),C=a.n(j),A=a(921),w=a.n(A),L=a(250),F=a(127),M=a.n(F),P=a(894),x=a(1074),G=a(1023),N=a(900),D=a(173),B=a(968),H=a(889),V=a(1009),z=a(909),U=a(10),K=a.n(U),q=a(1252),J=a(1246),W=a(1248),Y=a(125),Q=a(93),X=a(981),Z=a(1249),$=a(48),ee=a(18),te=a(367),ae=a.n(te),ne=a(175);function re(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function oe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?re(Object(a),!0).forEach((function(t){u()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):re(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ie=function(e){var t,a=e.rules,n=e.filters,o=e.rulesFetchStatus,s=e.setFilters,c=e.fetchRules,m=e.addNotification,p=e.intl,j=e.selectedTags,A=Object(b.useState)([{title:p.formatMessage(ee.a.name),transforms:[h.a,Object(y.a)(45)]},{title:p.formatMessage(ee.a.added),transforms:[h.a,Object(y.a)(15)]},{title:p.formatMessage(ee.a.totalRisk),transforms:[h.a,Object(y.a)(15)]},{title:p.formatMessage(ee.a.riskofchange),transforms:[h.a,Object(y.a)(15)]},{title:p.formatMessage(ee.a.systems),transforms:[h.a,Object(y.a)(15)]},{title:g.a.createElement(g.a.Fragment,null,g.a.createElement(C.a,{size:"md"})," ",p.formatMessage(ee.a.ansible)),transforms:[h.a,Object(y.a)(15),_.b],dataLabel:p.formatMessage(ee.a.ansible)}]),F=f()(A,1)[0],U=Object(b.useState)([]),K=f()(U,2),Y=K[0],Q=K[1],$=Object(b.useState)({}),te=f()($,2),ae=te[0],re=te[1],ie=Object(b.useState)(!0),se=f()(ie,2),le=se[0],ce=se[1],ue=Object(b.useState)(n.text||""),me=f()(ue,2),fe=me[0],pe=me[1],de=Object(b.useState)(!1),Ee=f()(de,2),be=Ee[0],ge=Ee[1],ve=Object(b.useState)({}),he=f()(ve,2),ye=he[0],_e=he[1],Oe=Object(b.useState)(!1),ke=f()(Oe,2),Se=ke[0],Te=ke[1],Re=Object(b.useState)({}),Ie=f()(Re,2),je=Ie[0],Ce=Ie[1],Ae=Object(X.a)(fe,d.DEBOUNCE_DELAY),we=a.meta?a.meta.count:0,Le={1:"description",2:"publish_date",3:"total_risk",4:"resolution_risk",5:"impacted_count",6:"playbook_count"},Fe=function(e){var t=e.resolution_set.find((function(e){return e.system_type===d.SYSTEM_TYPES.rhel||d.SYSTEM_TYPES.ocp}));return t?t.resolution_risk.risk:void 0},Me=Object(b.useCallback)((function(){Object(R.e)(n,j);var e=j.length&&{tags:j.map((function(e){return encodeURIComponent(e)})).join("&tags=")};c(e.tags?{}:oe(oe({},Object(R.b)(n)),e),e.tags&&Object(R.a)(oe(oe({},Object(R.b)(n)),e)))}),[c,n,j]),Pe=function(e){var t=e*n.limit-n.limit;s(oe(oe({},n),{},{offset:t}))},xe=function(e){var t="undefined"===e?void 0:e;s(oe(oe({},n),{},{reports_shown:t,offset:0},"true"!==t&&{impacting:!1}))},Ge=function(){var e=i()(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Y[t].rule,e.prev=1,!a.reports_shown){e.next=7;break}_e(a),ge(!0),e.next=17;break;case 7:return e.prev=7,e.next=10,I.a.delete("".concat(d.BASE_URL,"/ack/").concat(a.rule_id,"/"));case 10:m({variant:"success",timeout:!0,dismissable:!0,title:p.formatMessage(ee.a.ruleSuccessfullyEnabled)}),Me(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),m({variant:"danger",dismissable:!0,title:p.formatMessage(ee.a.error),description:"".concat(e.t0)});case 17:e.next=22;break;case 19:e.prev=19,e.t1=e.catch(1),m({variant:"danger",dismissable:!0,title:a.reports_shown?p.formatMessage(ee.a.rulesTableHideReportsErrorDisabled):p.formatMessage(ee.a.rulesTableHideReportsErrorEnabled),description:"".concat(e.t1)});case 22:case"end":return e.stop()}}),e,null,[[1,19],[7,14]])})));return function(t){return e.apply(this,arguments)}}();Object(b.useEffect)((function(){!le&&null!==j&&Me()}),[Me,le,n,j]),Object(b.useEffect)((function(){if(window.location.search&&le){var e=Object(R.c)();delete e.tags,void 0===e.text?pe(""):pe(e.text),e.reports_shown=void 0===e.reports_shown||"undefined"===e.reports_shown[0]?void 0:e.reports_shown,e.sort=void 0===e.sort?"-total_risk":e.sort[0],void 0!==e.has_playbook&&!Array.isArray(e.has_playbook)&&(e.has_playbook=["".concat(e.has_playbook)]),void 0!==e.incident&&!Array.isArray(e.incident)&&(e.incident=["".concat(e.incident)]),void 0===e.offset?e.offset=0:e.offset=Number(e.offset[0]),void 0===e.limit?e.limit=10:e.limit=Number(e.limit[0]),void 0!==e.reboot&&!Array.isArray(e.reboot)&&(e.reboot=["".concat(e.reboot)]),s(oe(oe({},n),e))}ce(!1)}),[]),Object(b.useEffect)((function(){if(void 0!==n.sort){var e=Number(Object.entries(Le).find((function(e){return e[1]===n.sort||"-".concat(e[1])===n.sort}))[0]),t="-"===n.sort[0]?"desc":"asc";re({index:e,direction:t})}}),[n.sort]),Object(b.useEffect)((function(){if(a.data)if(0===a.data.length)Q([{cells:[{title:g.a.createElement(V.a,{icon:M.a,iconClass:"ansibleCheck",title:p.formatMessage(ee.a.rulesTableNoRuleHitsTitle),text:n.reports_shown?p.formatMessage(ee.a.rulesTableNoRuleHitsEnabledRulesBody):p.formatMessage(ee.a.rulesTableNoRuleHitsAnyRulesBody)},n.reports_shown&&g.a.createElement(L.Button,{variant:"link",style:{paddingTop:24},onClick:function(){return xe("undefined")}},p.formatMessage(ee.a.rulesTableNoRuleHitsAddDisabledButton))),props:{colSpan:6}}]}]);else{var e=a.data.flatMap((function(e,t){return[{isOpen:!1,rule:e,cells:[{title:g.a.createElement("span",{key:t},g.a.createElement(J.a,{rule:e}),g.a.createElement(D.Link,{key:t,to:"/recommendations/".concat(e.rule_id)}," ",e.description," "))},{title:g.a.createElement(P.DateFormat,{key:t,date:e.publish_date,variant:"relative"})},{title:g.a.createElement("div",{key:t},g.a.createElement(T.Tooltip,{key:t,position:T.TooltipPosition.bottom,content:p.formatMessage(ee.a.rulesDetailsTotalriskBody,{risk:d.TOTAL_RISK_LABEL_LOWER[e.total_risk]||p.formatMessage(ee.a.undefined),strong:function(e){return Object(ne.a)(e)}})},g.a.createElement(N.a,{value:e.total_risk})))},{title:g.a.createElement("div",{key:t},g.a.createElement(N.a,{text:d.RISK_OF_CHANGE_LABEL[Fe(e)],value:Fe(e),hideIcon:!0}),g.a.createElement("div",null))},{title:g.a.createElement("div",{key:t}," ",e.reports_shown?"".concat(e.impacted_systems_count.toLocaleString()):p.formatMessage(ee.a.nA))},{title:g.a.createElement("div",{className:"ins-c-center-text ",key:t},e.playbook_count?g.a.createElement(M.a,{className:"ansibleCheck"}):p.formatMessage(ee.a.no))}]},{parent:2*t,fullWidth:!0,cells:[{title:g.a.createElement(H.Main,{className:"pf-m-light"},g.a.createElement(v.Stack,{hasGutter:!0},e.hosts_acked_count?g.a.createElement(v.StackItem,null,g.a.createElement(w.a,{size:"sm"})," ",e.hosts_acked_count&&!e.impacted_systems_count?p.formatMessage(ee.a.ruleIsDisabledForAllSystems):p.formatMessage(ee.a.ruleIsDisabledForSystemsBody,{systems:e.hosts_acked_count}),"  ",g.a.createElement(L.Button,{isInline:!0,variant:"link",onClick:function(){Ce(e),Te(!0)}},p.formatMessage(ee.a.viewSystems))):g.a.createElement(g.a.Fragment,null),g.a.createElement(q.a,{rule:e,resolutionRisk:Fe(e)})))}]}]}));Q(e.asMutable())}}),[a]),Object(b.useEffect)((function(){if(!le&&"pending"!==o){var e=oe({},n),t=fe.length?{text:fe}:{};delete e.text,s(oe(oe(oe({},e),t),{},{offset:0}))}}),[Ae]);var Ne,De=function(e){var t=oe(oe({},n),{},{offset:0});"text"===e&&pe(""),delete t[e],s(t)},Be=function(e,t){t.length>0?s(oe(oe({},n),{},{offset:0},u()({},e,t))):De(e)},He=["",{label:p.formatMessage(n.impacting?ee.a.rulesTableActionShow:ee.a.rulesTableActionHide),onClick:function(){return e=!n.impacting,void s(oe(oe({},n),{},{impacting:e,offset:0}));var e}}],Ve=[{label:p.formatMessage(ee.a.name).toLowerCase(),filterValues:{key:"text-filter",onChange:function(e,t){return pe(t)},value:fe,placeholder:p.formatMessage(ee.a.search)}},{label:d.FILTER_CATEGORIES.total_risk.title,type:d.FILTER_CATEGORIES.total_risk.type,id:d.FILTER_CATEGORIES.total_risk.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.total_risk.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.total_risk.urlParam,"-filter"),onChange:function(e,t){return Be(d.FILTER_CATEGORIES.total_risk.urlParam,t)},value:n.total_risk,items:d.FILTER_CATEGORIES.total_risk.values}},{label:d.FILTER_CATEGORIES.res_risk.title,type:d.FILTER_CATEGORIES.res_risk.type,id:d.FILTER_CATEGORIES.res_risk.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.res_risk.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.res_risk.urlParam,"-filter"),onChange:function(e,t){return Be(d.FILTER_CATEGORIES.res_risk.urlParam,t)},value:n.res_risk,items:d.FILTER_CATEGORIES.res_risk.values}},{label:d.FILTER_CATEGORIES.impact.title,type:d.FILTER_CATEGORIES.impact.type,id:d.FILTER_CATEGORIES.impact.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.impact.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.impact.urlParam,"-filter"),onChange:function(e,t){return Be(d.FILTER_CATEGORIES.impact.urlParam,t)},value:n.impact,items:d.FILTER_CATEGORIES.impact.values}},{label:d.FILTER_CATEGORIES.likelihood.title,type:d.FILTER_CATEGORIES.likelihood.type,id:d.FILTER_CATEGORIES.likelihood.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.likelihood.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.likelihood.urlParam,"-filter"),onChange:function(e,t){return Be(d.FILTER_CATEGORIES.likelihood.urlParam,t)},value:n.likelihood,items:d.FILTER_CATEGORIES.likelihood.values}},{label:d.FILTER_CATEGORIES.category.title,type:d.FILTER_CATEGORIES.category.type,id:d.FILTER_CATEGORIES.category.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.category.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.category.urlParam,"-filter"),onChange:function(e,t){return Be(d.FILTER_CATEGORIES.category.urlParam,t)},value:n.category,items:d.FILTER_CATEGORIES.category.values}},{label:d.FILTER_CATEGORIES.incident.title,type:d.FILTER_CATEGORIES.incident.type,id:d.FILTER_CATEGORIES.incident.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.incident.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.incident.urlParam,"-filter"),onChange:function(e,t){return Be(d.FILTER_CATEGORIES.incident.urlParam,t)},value:n.incident,items:d.FILTER_CATEGORIES.incident.values}},{label:d.FILTER_CATEGORIES.has_playbook.title,type:d.FILTER_CATEGORIES.has_playbook.type,id:d.FILTER_CATEGORIES.has_playbook.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.has_playbook.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.has_playbook.urlParam,"-filter"),onChange:function(e,t){return Be(d.FILTER_CATEGORIES.has_playbook.urlParam,t)},value:n.has_playbook,items:d.FILTER_CATEGORIES.has_playbook.values}},{label:d.FILTER_CATEGORIES.reboot.title,type:d.FILTER_CATEGORIES.reboot.type,id:d.FILTER_CATEGORIES.reboot.urlParam,value:"checkbox-".concat(d.FILTER_CATEGORIES.reboot.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.reboot.urlParam,"-filter"),onChange:function(e,t){return Be(d.FILTER_CATEGORIES.reboot.urlParam,t)},value:n.reboot,items:d.FILTER_CATEGORIES.reboot.values}},{label:d.FILTER_CATEGORIES.reports_shown.title,type:d.FILTER_CATEGORIES.reports_shown.type,id:d.FILTER_CATEGORIES.reports_shown.urlParam,value:"radio-".concat(d.FILTER_CATEGORIES.reports_shown.urlParam),filterValues:{key:"".concat(d.FILTER_CATEGORIES.reports_shown.urlParam,"-filter"),onChange:function(e,t){return xe(t)},value:void 0===n.reports_shown?"undefined":"".concat(n.reports_shown),items:d.FILTER_CATEGORIES.reports_shown.values}}],ze={filters:(Ne=oe({},n),delete Ne.impacting,delete Ne.topic,delete Ne.sort,delete Ne.offset,delete Ne.limit,Object(R.d)(Ne,d.FILTER_CATEGORIES)),onDelete:function(e,t,a){a?(pe(""),s(oe(oe({},n.topic&&{topic:n.topic}),{},{impacting:!0,reports_shown:"true",limit:n.limit,offset:n.offset}))):t.map((function(e){var t=u()({},e.urlParam,Array.isArray(n[e.urlParam])?n[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?s(oe(oe({},n),t)):De(e.urlParam)}))}};return g.a.createElement(g.a.Fragment,null,Se&&g.a.createElement(W.a,{handleModalToggle:function(e){return Te(e)},isModalOpen:Se,afterFn:function(){Me()},rule:je}),be&&g.a.createElement(x.a,{handleModalToggle:ge,isModalOpen:be,rule:ye,afterFn:Me}),g.a.createElement(z.PrimaryToolbar,{pagination:{itemCount:we,page:n.offset/n.limit+1,perPage:Number(n.limit),onSetPage:function(e,t){Pe(t)},onPerPageSelect:function(e,t){s(oe(oe({},n),{},{limit:t,offset:0}))},isCompact:!0},exportConfig:(t={label:p.formatMessage(ee.a.exportCsv)},u()(t,"label",p.formatMessage(ee.a.exportJson)),u()(t,"onSelect",(function(e,t){return Object(Z.a)("hits",t,Object(R.e)(n,j))})),u()(t,"isDisabled",!n.impacting),u()(t,"tooltipText",p.formatMessage(ee.a.exportData)),t),actionsConfig:{actions:He},filterConfig:{items:Ve},activeFiltersConfig:ze}),"fulfilled"===o&&g.a.createElement(O.b,{"aria-label":"rule-table",actionResolver:function(e,t){var a=t.rowIndex,n=Y[a].rule?Y[a].rule:null;return a%2==0&&n?n&&n.reports_shown?[{title:p.formatMessage(ee.a.disableRule),onClick:function(e,t){return Ge(t)}}]:[{title:p.formatMessage(ee.a.enableRule),onClick:function(e,t){return Ge(t)}}]:null},onCollapse:function(e,t,a){var n=l()(Y);n[t]=oe(oe({},n[t]),{},{isOpen:a}),Q(n)},sortBy:ae,onSort:function(e,t,a){var r="".concat("asc"===a?"":"-").concat(Le[t]);re({index:t,direction:a}),s(oe(oe({},n),{},{sort:r,offset:0}))},cells:F,rows:Y},g.a.createElement(k.a,null),g.a.createElement(S.a,null)),"pending"===o&&g.a.createElement(B.a,null),"failed"===o&&g.a.createElement(G.a,{message:p.formatMessage(ee.a.rulesTableFetchRulesError)}),g.a.createElement(E.Pagination,{itemCount:we,page:n.offset/n.limit+1,perPage:Number(n.limit),onSetPage:function(e,t){Pe(t)},onPerPageSelect:function(e,t){s(oe(oe({},n),{},{limit:t,offset:0}))},widgetId:"pagination-options-menu-bottom",variant:E.PaginationVariant.bottom}))};ie.propTypes={fetchRules:K.a.func,rulesFetchStatus:K.a.string,rules:K.a.object,filters:K.a.object,addNotification:K.a.func,setFilters:K.a.func,intl:K.a.any,selectedTags:K.a.array};t.default=Object($.c)(ae()(Object(Q.connect)((function(e,t){return oe({rules:e.AdvisorStore.rules,rulesFetchStatus:e.AdvisorStore.rulesFetchStatus,filters:e.AdvisorStore.filters,selectedTags:e.AdvisorStore.selectedTags},t)}),(function(e){return{fetchRules:function(t,a){return e(p.d(t,a))},addNotification:function(t){return e(Object(Y.addNotification)(t))},setFilters:function(t){return e(p.k(t))}}}))(ie)))},981:function(e,t,a){"use strict";var n=a(364),r=a.n(n),o=a(1);t.a=function(e,t){var a=Object(o.useState)(e),n=r()(a,2),i=n[0],s=n[1];return Object(o.useEffect)((function(){var a=setTimeout((function(){s(e)}),t);return function(){clearTimeout(a)}}),[t,e]),i}},987:function(e,t,a){(t=a(6)(!1)).push([e.i,"hr{border:0.01rem solid #ccc;margin:var(--pf-global--spacer--md) 0 var(--pf-global--spacer--md) 0}.ins-c-rule-details__split{display:inline-flex;justify-content:space-around}.ins-c-rule-details__split .pf-l-split__item{position:relative}.ins-c-rule-details__stack{width:600px}.ins-c-rule-details__stack .ins-c-rule-details__stackitem{display:flex;justify-content:space-between;width:100%}.ins-c-rule-details__stack .ins-c-rule-details__stackitem .description-stack-override{width:452px}.ins-c-rule-details__stack .ins-c-rule-details__stackitem .description-stack-override .severity-line .ins-l-title{width:150px}.ins-c-rule-details__stack .ins-c-rule-details__stackitem .description-stack-override .severity-line .ins-l-title span{font-size:var(--pf-global-FontSize--md)}.system-reboot-message{display:inline-flex}.system-reboot-message .system-reboot-message__content{position:relative}.system-reboot-message .reboot-required-icon{margin-top:5px;margin-right:var(--pf-global--spacer--sm);color:var(--pf-global--palette--red-100)}.system-reboot-message .no-reboot-required-icon{margin-top:5px;margin-right:var(--pf-global--spacer--sm);color:var(--pf-global--palette--black-400)}.topicsCard{background-color:var(--pf-global--BackgroundColor--150);box-shadow:none;word-break:break-word}.alignCenterOverride{align-items:center;width:100%}.genericOverride p{margin-top:0;margin-bottom:var(--pf-global--spacer--md)}@media only screen and (max-width: 768px){.ins-c-center-text{text-align:left !important}.ins-c-rule-details__split{display:block}.ins-c-rule-details__split .pf-l-split__item{margin:var(--pf-global--spacer--md)}}\n",""]),e.exports=t}}]);
//# sourceMappingURL=RulesTable.js.map