(window.webpackJsonp=window.webpackJsonp||[]).push([[13,5],{1117:function(e,t,a){(t=a(5)(!1)).push([e.i,"hr{border:0.01rem solid #ccc;margin:var(--pf-global--spacer--md) 0 var(--pf-global--spacer--md) 0}.ins-c-rule-details__split{display:inline-flex;justify-content:space-around}.ins-c-rule-details__split .pf-l-split__item{position:relative}.ins-c-rule-details__stack{width:600px}.ins-c-rule-details__stack .ins-c-rule-details__stackitem{display:flex;justify-content:space-between;width:100%}.ins-c-rule-details__stack .ins-c-rule-details__stackitem .description-stack-override{width:452px}.ins-c-rule-details__stack .ins-c-rule-details__stackitem .description-stack-override .severity-line .ins-l-title{width:150px}.ins-c-rule-details__stack .ins-c-rule-details__stackitem .description-stack-override .severity-line .ins-l-title span{font-size:var(--pf-global-FontSize--md)}.system-reboot-message{display:inline-flex}.system-reboot-message .system-reboot-message__content{position:relative}.system-reboot-message .reboot-required-icon{margin-top:5px;margin-right:var(--pf-global--spacer--sm);color:var(--pf-global--palette--red-100)}.system-reboot-message .no-reboot-required-icon{margin-top:5px;margin-right:var(--pf-global--spacer--sm);color:var(--pf-global--palette--black-400)}.topicsCard{background-color:var(--pf-global--BackgroundColor--150);box-shadow:none;word-break:break-word}.alignCenterOverride{align-items:center;width:100%}.genericOverride p{margin-top:0;margin-bottom:var(--pf-global--spacer--md)}@media only screen and (max-width: 768px){.ins-c-center-text{text-align:left !important}.ins-c-rule-details__split{display:block}.ins-c-rule-details__split .pf-l-split__item{margin:var(--pf-global--spacer--md)}}\n",""]),e.exports=t},1118:function(e,t,a){(t=a(5)(!1)).push([e.i,".like{color:var(--pf-global--success-color--100)}.dislike{color:var(--pf-global--primary-color--100)}.ratingSpanOverride{font-size:var(--pf-global--FontSize--sm) !important}.ratingSpanOverride button{padding:8px}\n",""]),e.exports=t},1119:function(e,t,a){(t=a(5)(!1)).push([e.i,".verticalDivider{color:var(--pf-global--BorderColor--100)}\n",""]),e.exports=t},1120:function(e,t,a){(t=a(5)(!1)).push([e.i,".incidentLabel{background-color:#faeae8 !important}.pf-c-label{margin-right:var(--pf-global--spacer--xs)}\n",""]),e.exports=t},1125:function(e,t,a){"use strict";a.d(t,"e",(function(){return m})),a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return p})),a.d(t,"a",(function(){return E})),a.d(t,"d",(function(){return b})),a.d(t,"f",(function(){return g}));var r=a(232),n=a.n(r),o=a(303),s=a.n(o),l=a(424),i=a.n(l),c=a(427);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m=function(e,t,a){var r=new URL(window.location),n="".concat(Object.keys(e).map((function(t){return"".concat(t,"=").concat(Array.isArray(e[t])?e[t].join():e[t])})).join("&")),o=new URLSearchParams(n);return"undefined"===o.get("reports_shown")&&o.delete("reports_shown"),(null==a?void 0:a.SAP)?o.set("sap_system",!0):o.delete("sap_system"),(null==t?void 0:t.length)?o.set("tags",t):o.delete("tags"),window.history.replaceState(null,null,"".concat(r.origin).concat(r.pathname,"?").concat(o.toString())),"?".concat(n)},d=function(e){return Object.assign.apply(Object,[{}].concat(i()(Object.entries(e).map((function(e){var t=s()(e,2),a=t[0],r=t[1];return Array.isArray(r)?("true"===r[0]||"false"===r[0])&&r.length>1?null:n()({},a,r.join()):n()({},a,r)})))))},p=function(){var e=new URLSearchParams(window.location.search);return Array.from(e).reduce((function(e,t){var a=s()(t,2),r=a[0],o=a[1];return f(f({},e),{},n()({},r,"true"===o||"false"===o?JSON.parse(o):o.split(",")))}),{})},E=function(e){return Object.entries(e).reduce((function(e,t,a){var r=s()(t,2),n=r[0],o=r[1];return e+(0===a?"".concat(n,"=").concat(o):"&".concat(n,"=").concat(o))}),"")},b=function(e,t){var a=Object.entries(e);return a.length>0?a.reduce((function(e,a){if(t[a[0]]){var r=t[a[0]],n=Array.isArray(a[1])?a[1].map((function(e){var t=r.values.find((function(t){return t.value===String(e)}));return t?{name:t.text||t.label,value:e}:{name:e,value:e}})):[{name:r.values.find((function(e){return e.value===String(a[1])})).label,value:a[1]}];return[].concat(i()(e),[{category:(o=r.title,o[0].toUpperCase()+o.substring(1)),chips:n,urlParam:r.urlParam}])}return"text"===a[0]?[].concat(i()(e),[{category:"Name",chips:[{name:a[1],value:a[1]}],urlParam:a[0]}]):e;var o}),[]):[]},g=function(e,t){var a;return Object(c.generateFilter)({system_profile:f(f({},(null==e||null===(a=e.SAP)||void 0===a?void 0:a.isSelected)&&{sap_system:!0}),(null==t?void 0:t.length)>0&&{sap_sids:t})})}},1131:function(e,t,a){"use strict";var r=a(564),n=a(565),o=a(572),s=a(1041),l=a.n(s),i=a(1),c=a.n(i),u=a(12),f=a.n(u),m=function(e){var t=e.message;return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.Card,{className:"ins-empty-rule-cards"},c.a.createElement(o.CardHeader,null,c.a.createElement(l.a,{size:"lg"})),c.a.createElement(n.CardBody,null,t)))};t.a=m,m.propTypes={message:f.a.string}},1143:function(e,t,a){(t=a(5)(!1)).push([e.i,".ansibleCheck{color:var(--pf-global--success-color--100)}@media screen and (min-width: 884px){.ins-c-conditional-filter .ins-c-conditional-filter__group .pf-c-dropdown__toggle-text{min-width:150px !important}}.ins-c-center-text{text-align:center}.pf-c-table tr>:last-child{--pf-c-table--cell--PaddingRight: 0px}\n",""]),e.exports=t},1154:function(e,t,a){"use strict";var r=a(124),n=a.n(r),o=a(232),s=a.n(o),l=a(207),i=a.n(l),c=a(303),u=a.n(c),f=a(1),m=a.n(f),d=a(234),p=a(233),E=a(8),b=a(563),g=a(1039),v=a(1037),_=a(1038),h=a(1029),y=a(12),O=a.n(y),k=a(1040),T=a(152),S=a(103),R=a(58),I=a(22);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){s()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var C=function(e){var t=e.handleModalToggle,a=e.intl,r=e.isModalOpen,o=e.host,s=e.hosts,l=e.rule,c=e.afterFn,d=e.setAck,y=e.addNotification,O=e.setSystem,T=e.setRule,S=e.selectedTags,R=Object(f.useState)(""),j=u()(R,2),C=j[0],L=j[1],F=Object(f.useState)(void 0!==o||s.length>0),P=u()(F,2),M=P[0],w=P[1],x=function(){var e=i()(n.a.mark((function e(){var t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={systems:s,justification:C},e.prev=1,e.next=4,p.a.post("".concat(E.BASE_URL,"/rule/").concat(l.rule_id,"/ack_hosts/"),{},t);case 4:r=e.sent,S.length>0?c&&c():(O({host_ids:r.data.host_ids}),T(A(A({},l),{},{hosts_acked_count:r.data.count+l.hosts_acked_count}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),y({variant:"danger",dismissable:!0,title:a.formatMessage(I.a.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=i()(n.a.mark((function e(){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"!==l.rule_status||s.length){e.next=15;break}return r=M?{type:"HOST",options:{rule:l.rule_id,system_uuid:o.id,justification:C}}:{type:"RULE",options:A({rule_id:l.rule_id},C&&{justification:C})},e.prev=2,e.next=5,d(r);case 5:y({variant:"success",timeout:!0,dismissable:!0,title:a.formatMessage(I.a.ruleSuccessfullyDisabled)}),L(""),c&&c(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),y({variant:"danger",dismissable:!0,title:a.formatMessage(I.a.error),description:"".concat(e.t0)});case 13:e.next=16;break;case 15:x();case 16:t(!1);case 17:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return m.a.createElement(h.Modal,{variant:"small",title:a.formatMessage(I.a.disableRule),isOpen:r,onClose:function(){t(!1),L("")},actions:[m.a.createElement(b.Button,{key:"confirm",variant:"primary",onClick:function(){return G()}},a.formatMessage(I.a.save)),m.a.createElement(b.Button,{key:"cancel",variant:"link",onClick:function(){t(!1),L("")}},a.formatMessage(I.a.cancel))]},a.formatMessage(I.a.disableRuleBody),m.a.createElement(v.Form,null,m.a.createElement(_.FormGroup,{fieldId:"blank-form"}),(void 0!==o||s.length>0)&&m.a.createElement(_.FormGroup,{fieldId:"disable-rule-one-system"},m.a.createElement(g.Checkbox,{isChecked:M,onChange:function(){w(!M)},label:s.length?a.formatMessage(I.a.disableRuleForSystems):a.formatMessage(I.a.disableRuleSingleSystem),id:"disable-rule-one-system",name:"disable-rule-one-system"})),m.a.createElement(_.FormGroup,{label:a.formatMessage(I.a.justificationNote),fieldId:"disable-rule-justification"},m.a.createElement(k.TextInput,{type:"text",id:"disable-rule-justification","aria-describedby":"disable-rule-justification",value:C,onChange:function(e){return L(e)},onKeyDown:function(e){return"Enter"===e.key&&(e.preventDefault(),G())}}))))};C.propTypes={isModalOpen:O.a.bool,host:O.a.object,handleModalToggle:O.a.func,intl:O.a.any,rule:O.a.object,afterFn:O.a.func,setAck:O.a.func,hosts:O.a.array,addNotification:O.a.func,setRule:O.a.func,setSystem:O.a.func,selectedTags:O.a.array},C.defaultProps={isModalOpen:!1,handleModalToggle:function(){},system:void 0,rule:{},afterFn:function(){},host:void 0,hosts:[]};t.a=Object(R.c)(Object(S.connect)((function(e){return{selectedTags:e.AdvisorStore.selectedTags}}),(function(e){return{addNotification:function(t){return e(Object(T.addNotification)(t))},setAck:function(t){return e(Object(d.j)(t))},setRule:function(t){return e(Object(d.m)(t))},setSystem:function(t){return e(Object(d.p)(t))}}}))(C))},1178:function(e,t,a){var r=a(1117);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=a(7)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(1117,(function(){var t=a(1117);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1180:function(e,t,a){var r=a(1118);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=a(7)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(1118,(function(){var t=a(1118);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1181:function(e,t,a){var r=a(1119);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=a(7)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(1119,(function(){var t=a(1119);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1182:function(e,t,a){"use strict";a(1183);var r=a(570),n=a(1031),o=a(12),s=a.n(o),l=a(1),i=a.n(l),c=a(58),u=a(22),f=function(e){var t=e.intl,a=e.rule;return i.a.createElement(i.a.Fragment,null,-1!==a.tags.search("incident")&&i.a.createElement(r.Tooltip,{content:t.formatMessage(u.a.incidentTooltip),position:r.TooltipPosition.right},i.a.createElement(n.Label,{color:"red",className:"incidentLabel"},t.formatMessage(u.a.incident))),"disabled"===a.rule_status&&i.a.createElement(r.Tooltip,{content:t.formatMessage(u.a.ruleIsDisabledTooltip),position:r.TooltipPosition.right},i.a.createElement(n.Label,{color:"gray"},t.formatMessage(u.a.disabled))),"rhdisabled"===a.rule_status&&i.a.createElement(r.Tooltip,{content:t.formatMessage(u.a.ruleIsDisabledTooltip),position:r.TooltipPosition.right},i.a.createElement(n.Label,{color:"gray"},t.formatMessage(u.a.redhatDisabled))))};f.propTypes={intl:s.a.any,rule:s.a.object},t.a=Object(c.c)(f)},1183:function(e,t,a){var r=a(1120);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=a(7)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(1120,(function(){var t=a(1120);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1184:function(e,t,a){"use strict";var r=a(232),n=a.n(r),o=a(124),s=a.n(o),l=a(207),i=a.n(l),c=a(303),u=a.n(c),f=a(1),m=a.n(f),d=a(73),p=a(513),E=a(512),b=a(234),g=a(233),v=a(8),_=a(563),h=a(1032),y=a(425),O=a(1029),k=a(1061),T=a.n(k),S=a(12),R=a.n(S),I=a(152),j=a(103),A=a(58),C=a(22);function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var F=function(e){var t=e.fetchHostAcks,a=e.hostAcksFetchStatus,r=e.handleModalToggle,n=e.intl,o=e.isModalOpen,l=e.hostAcks,c=e.rule,b=e.afterFn,k=[n.formatMessage(C.a.systemName),n.formatMessage(C.a.justificationNote),n.formatMessage(C.a.dateDisabled),""],S=Object(f.useState)([]),R=u()(S,2),j=R[0],A=R[1],L=Object(f.useState)(!1),F=u()(L,2),P=F[0],M=F[1],w=function(){var e=i()(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.delete("".concat(v.BASE_URL,"/hostack/").concat(a.id,"/"));case 3:t({rule_id:c.rule_id,limit:c.hosts_acked_count}),M(!0),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),r(!1),Object(I.addNotification)({variant:"danger",dismissable:!0,title:n.formatMessage(C.a.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.useEffect)((function(){if(l.data){var e=l.data.map((function(e){return{cells:[e.display_name||e.system_uuid,e.justification||n.formatMessage(C.a.none),{title:m.a.createElement(h.DateFormat,{date:new Date(e.updated_at),type:"onlyDate"})},{title:m.a.createElement(_.Button,{key:e.system_uuid,isInline:!0,variant:"link",onClick:function(){return w(e)}},m.a.createElement(T.a,{size:"sm"}),"   ",n.formatMessage(C.a.enable))}]}})).asMutable();e.length||(b(),r(!1)),A(e)}}),[l]),Object(f.useEffect)((function(){t({rule_id:c.rule_id,limit:c.hosts_acked_count})}),[t,c.hosts_acked_count,c.rule_id]),m.a.createElement(O.Modal,{width:"50%",title:n.formatMessage(C.a.hostAckModalTitle),isOpen:o,onClose:function(){P&&b(),r(!1)}},"fulfilled"===a&&m.a.createElement(d.c,{"aria-label":"host-ack-table",rows:j,cells:k},m.a.createElement(p.a,null),m.a.createElement(E.a,null)),"fulfilled"!==a&&m.a.createElement(d.c,{"aria-label":"host-ack-table",rows:[{cells:[{props:{colSpan:3},title:m.a.createElement(y.List,null)}]}],cells:k},m.a.createElement(p.a,null),m.a.createElement(E.a,null)))};F.propTypes={isModalOpen:R.a.bool,handleModalToggle:R.a.func,intl:R.a.any,rule:R.a.object,fetchHostAcks:R.a.func,hostAcks:R.a.object,hostAcksFetchStatus:R.a.string,addNotification:R.a.func,afterFn:R.a.func},F.defaultProps={isModalOpen:!1,handleModalToggle:function(){},rule:{},afterFn:function(){}};t.a=Object(A.c)(Object(j.connect)((function(e){var t=e.AdvisorStore,a=e.ownProps;return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({hostAcks:t.hostAcks,hostAcksFetchStatus:t.hostAcksFetchStatus},a)}),(function(e){return{setAck:function(t){return e(Object(b.j)(t))},fetchHostAcks:function(t){return e(Object(b.a)(t))},addNotification:function(t){return e(Object(I.addNotification)(t))}}}))(F))},1185:function(e,t,a){"use strict";var r=a(303),n=a.n(r),o=a(1);t.a=function(e,t){var a=Object(o.useState)(e),r=n()(a,2),s=r[0],l=r[1];return Object(o.useEffect)((function(){var a=setTimeout((function(){l(e)}),t);return function(){clearTimeout(a)}}),[t,e]),s}},1186:function(e,t,a){"use strict";var r=a(124),n=a.n(r),o=a(207),s=a.n(o),l=a(233),i=a(8),c=a(427),u=function(e){var t={date:(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc"};return"Insights-Advisor_".concat(e,"--").concat(t.date)},f=function(){var e=s()(n.a.mark((function e(t,a,r){var o,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("".concat(i.BASE_URL,"/export/").concat(t,".").concat("json"===a?"json":"csv").concat(r));case 3:o=e.sent,s="json"===a?JSON.stringify(o.data):o.data,Object(c.downloadFile)(s,u(t),a),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),"".concat(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a,r){return e.apply(this,arguments)}}();t.a=f},1188:function(e,t,a){"use strict";var r=a(1300),n=a.n(r),o=a(1301),s=a.n(o),l=(a(1178),a(8)),i=a(1046),c=a(1034),u=a(1048),f=a(564),m=a(565),d=a(1059),p=a.n(d),E=a(1035),b=a(208),g=a(1060),v=a.n(g),_=a(12),h=a.n(_),y=a(1),O=a.n(y),k=a(1302),T=a.n(k),S=a(124),R=a.n(S),I=a(207),j=a.n(I),A=a(303),C=a.n(A),L=(a(1180),a(233)),F=a(563),P=a(1058),M=a.n(P),w=a(1056),x=a.n(w),G=a(1057),N=a.n(G),D=a(1055),B=a.n(D),H=a(58),V=a(22),z=function(e){var t=e.intl,a=e.rule,r=Object(y.useState)(a.rating),n=C()(r,2),o=n[0],s=n[1],i=Object(y.useState)(!1),c=C()(i,2),u=c[0],f=c[1],m=Object(y.useState)(t.formatMessage(V.a.feedbackThankyou)),d=C()(m,2),p=d[0],E=d[1],b=function(){var e=j()(R.a.mark((function e(t){var r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o===t?0:t,e.prev=1,e.next=4,L.a.post("".concat(l.BASE_URL,"/rating/"),{},{rule:a.rule_id,rating:r});case 4:s(r),f(!0),setTimeout((function(){return E("")}),3e3),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return O.a.createElement("span",{className:"ratingSpanOverride"},t.formatMessage(V.a.ruleHelpful),O.a.createElement(F.Button,{variant:"plain","aria-label":"thumbs-up",onClick:function(){return b(1)}},1===o?O.a.createElement(B.a,{className:"like",size:"sm"}):O.a.createElement(x.a,{size:"sm"})),O.a.createElement(F.Button,{variant:"plain","aria-label":"thumbs-down",onClick:function(){return b(-1)}},-1===o?O.a.createElement(N.a,{className:"dislike",size:"sm"}):O.a.createElement(M.a,{size:"sm"})),u&&p)};z.propTypes={intl:h.a.any,rule:h.a.object};var U=Object(H.c)(z),K=a(1066),q=a(1047),J=(a(1181),function(e){return e.map((function(t,a){return O.a.createElement(O.a.Fragment,{key:a},t,a+1!==e.length&&O.a.createElement("strong",{className:"verticalDivider"}," | "))}))}),W=a(209),Y=function(e){var t=e.children,a=e.rule,r=e.resolutionRisk,o=e.intl,d=e.topics,g=e.header,_=e.isDetailsPage,h=function(){return d&&s()(d.map((function(e){return n()(e.tag.split(" "),a.tags.split(" ")).length&&O.a.createElement(O.a.Fragment,{key:e.slug},O.a.createElement(b.Link,{to:"/topics/".concat(e.slug)},"".concat(e.name)))})))},y=function(e,t){return"string"==typeof e&&Boolean(e)&&O.a.createElement("span",{className:t&&"genericOverride"},O.a.createElement(T.a,{source:e,escapeHtml:!1}))};return O.a.createElement(i.Split,{className:"ins-c-rule-details__split",hasGutter:!0},O.a.createElement(i.SplitItem,null,O.a.createElement(c.Stack,{hasGutter:!0},g&&O.a.createElement(c.StackItem,null,g),O.a.createElement(c.StackItem,null,_?y(a.generic,!0):y(a.summary)),a.node_id&&O.a.createElement(c.StackItem,null,O.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://access.redhat.com/node/".concat(a.node_id)},o.formatMessage(V.a.knowledgebaseArticle)," ",O.a.createElement(p.a,{size:"sm"}))),d&&a.tags&&h().length>0&&O.a.createElement(c.StackItem,null,O.a.createElement(f.Card,{className:"topicsCard",isCompact:!0},O.a.createElement(m.CardBody,null,O.a.createElement("strong",null,o.formatMessage(V.a.topicRelatedToRule)),O.a.createElement("br",null),J(h())))),_&&O.a.createElement(U,{rule:a}),!_&&a.impacted_systems_count>0&&O.a.createElement(c.StackItem,null,O.a.createElement(b.Link,{key:"".concat(a.rule_id,"-link"),to:"/recommendations/".concat(a.rule_id)},o.formatMessage(V.a.viewAffectedSystems,{systems:a.impacted_systems_count}))))),O.a.createElement(i.SplitItem,null,O.a.createElement(c.Stack,{gutter:"sm"},t&&O.a.createElement(c.StackItem,null,t),O.a.createElement(c.StackItem,null,O.a.createElement(c.Stack,{className:"ins-c-rule-details__stack"},O.a.createElement(c.StackItem,null,O.a.createElement("strong",null,o.formatMessage(V.a.totalRisk))),O.a.createElement(c.StackItem,{className:"pf-u-display-inline-flex alignCenterOverride pf-u-pb-sm pf-u-pt-sm"},O.a.createElement("span",{className:"ins-c-rule-details__stackitem"},O.a.createElement("span",null,O.a.createElement(E.a,{value:a.total_risk})),O.a.createElement(c.Stack,{hasGutter:!0,className:"description-stack-override"},O.a.createElement(c.StackItem,null,O.a.createElement(q.TextContent,null,O.a.createElement(u.Text,{component:u.TextVariants.p},o.formatMessage(V.a.rulesDetailsTotalriskBody,{risk:l.TOTAL_RISK_LABEL_LOWER[a.total_risk]||o.formatMessage(V.a.undefined),strong:function(e){return Object(W.a)(e)}})))),O.a.createElement(c.Stack,null,O.a.createElement(c.StackItem,null,O.a.createElement(K.a,{className:"severity-line",title:o.formatMessage(V.a.likelihoodLevel,{level:l.LIKELIHOOD_LABEL[a.likelihood]}),value:a.likelihood,tooltipMessage:o.formatMessage(V.a.likelihoodDescription,{level:l.LIKELIHOOD_LABEL_LOWER[a.likelihood]})})),O.a.createElement(c.StackItem,null,O.a.createElement(K.a,{className:"severity-line",title:o.formatMessage(V.a.impactLevel,{level:l.IMPACT_LABEL[a.impact.impact]}),value:a.impact.impact,tooltipMessage:o.formatMessage(V.a.impactDescription,{level:l.IMPACT_LABEL_LOWER[a.impact.impact]})})))))),O.a.createElement("hr",null),O.a.createElement(c.StackItem,null,O.a.createElement("strong",null,o.formatMessage(V.a.riskofchange))),O.a.createElement(c.StackItem,{className:"pf-u-display-inline-flex alignCenterOverride pf-u-pb-sm pf-u-pt-sm"},O.a.createElement("span",{className:"ins-c-rule-details__stackitem"},O.a.createElement("span",null,O.a.createElement(E.a,{text:l.RISK_OF_CHANGE_LABEL[r],value:r,hideIcon:!0})),O.a.createElement(c.Stack,{hasGutter:!0,className:"description-stack-override"},O.a.createElement(c.StackItem,null,O.a.createElement(q.TextContent,null,O.a.createElement(u.Text,{component:u.TextVariants.p},r?l.RISK_OF_CHANGE_DESC[r]:o.formatMessage(V.a.undefined)))),O.a.createElement(c.StackItem,null,O.a.createElement("span",{className:"system-reboot-message"},O.a.createElement(v.a,{className:a.reboot_required?"reboot-required-icon":"no-reboot-required-icon"}),O.a.createElement(q.TextContent,{className:"system-reboot-message__content"},O.a.createElement(u.Text,{component:u.TextVariants.p},o.formatMessage(V.a.systemReboot,{strong:function(e){return Object(W.a)(e)},status:a.reboot_required?o.formatMessage(V.a.is):o.formatMessage(V.a.isNot)})))))))))))))};Y.propTypes={children:h.a.any,rule:h.a.object,resolutionRisk:h.a.number,intl:h.a.any,topics:h.a.array,header:h.a.any,isDetailsPage:h.a.bool};t.a=Object(H.c)(Y)},1319:function(e,t,a){var r=a(1143);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=a(7)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(1143,(function(){var t=a(1143);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1455:function(e,t,a){"use strict";a.r(t);var r=a(124),n=a.n(r),o=a(207),s=a.n(o),l=a(424),i=a.n(l),c=a(232),u=a.n(c),f=a(303),m=a.n(f),d=(a(1319),a(234)),p=a(8),E=a(1067),b=a(1),g=a.n(b),v=a(1034),_=a(465),h=a(466),y=a(155),O=a(73),k=a(513),T=a(512),S=a(570),R=a(1125),I=a(233),j=a(1054),A=a.n(j),C=a(1062),L=a.n(C),F=a(563),P=a(1065),M=a.n(P),w=a(1032),x=a(1154),G=a(1131),N=a(1035),D=a(208),B=a(1103),H=a(1027),V=a(1122),z=a(1049),U=a(12),K=a.n(U),q=a(1188),J=a(1182),W=a(1184),Y=a(152),Q=a(103),X=a(1185),Z=a(1186),$=a(58),ee=a(22),te=a(423),ae=a.n(te),re=a(209);function ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function oe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(a),!0).forEach((function(t){u()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ne(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var se=function(e){var t,a=e.rules,r=e.filters,o=e.rulesFetchStatus,l=e.setFilters,c=e.fetchRules,f=e.addNotification,d=e.intl,j=e.selectedTags,C=e.workloads,P=e.SID,U=Object(b.useState)([{title:d.formatMessage(ee.a.name),transforms:[_.a,Object(h.a)(45)]},{title:d.formatMessage(ee.a.added),transforms:[_.a,Object(h.a)(15)]},{title:d.formatMessage(ee.a.totalRisk),transforms:[_.a,Object(h.a)(15)]},{title:d.formatMessage(ee.a.riskofchange),transforms:[_.a,Object(h.a)(15)]},{title:d.formatMessage(ee.a.systems),transforms:[_.a,Object(h.a)(15)]},{title:g.a.createElement(g.a.Fragment,null,g.a.createElement(A.a,{size:"md"})," ",d.formatMessage(ee.a.ansible)),transforms:[_.a,Object(h.a)(15),y.b],dataLabel:d.formatMessage(ee.a.ansible)}]),K=m()(U,1)[0],Y=Object(b.useState)([]),Q=m()(Y,2),$=Q[0],te=Q[1],ae=Object(b.useState)({}),ne=m()(ae,2),se=ne[0],le=ne[1],ie=Object(b.useState)(!0),ce=m()(ie,2),ue=ce[0],fe=ce[1],me=Object(b.useState)(r.text||""),de=m()(me,2),pe=de[0],Ee=de[1],be=Object(b.useState)(!1),ge=m()(be,2),ve=ge[0],_e=ge[1],he=Object(b.useState)({}),ye=m()(he,2),Oe=ye[0],ke=ye[1],Te=Object(b.useState)(!1),Se=m()(Te,2),Re=Se[0],Ie=Se[1],je=Object(b.useState)({}),Ae=m()(je,2),Ce=Ae[0],Le=Ae[1],Fe=Object(X.a)(pe,p.DEBOUNCE_DELAY),Pe=a.meta?a.meta.count:0,Me={1:"description",2:"publish_date",3:"total_risk",4:"resolution_risk",5:"impacted_count",6:"playbook_count"},we=function(e){var t=e.resolution_set.find((function(e){return e.system_type===p.SYSTEM_TYPES.rhel||p.SYSTEM_TYPES.ocp}));return t?t.resolution_risk.risk:void 0},xe=Object(b.useCallback)((function(){Object(R.e)(r,j,C);var e=(null==j?void 0:j.length)&&{tags:j.map((function(e){return encodeURIComponent(e)}))};C&&(e=oe(oe({},e),Object(R.f)(C,P))),c(e.tags?{}:oe(oe({},Object(R.b)(r)),e),e.tags&&Object(R.a)(oe(oe({},Object(R.b)(r)),e)))}),[c,r,j,C,P]),Ge=function(e){var t=e*r.limit-r.limit;l(oe(oe({},r),{},{offset:t}))},Ne=function(e){l(oe(oe({},r),{},{rule_status:e,offset:0},"enabled"!==e&&{impacting:!1}))},De=function(){var e=s()(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=$[t].rule,e.prev=1,"enabled"!==a.rule_status){e.next=7;break}ke(a),_e(!0),e.next=17;break;case 7:return e.prev=7,e.next=10,I.a.delete("".concat(p.BASE_URL,"/ack/").concat(a.rule_id,"/"));case 10:f({variant:"success",timeout:!0,dismissable:!0,title:d.formatMessage(ee.a.ruleSuccessfullyEnabled)}),xe(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),f({variant:"danger",dismissable:!0,title:d.formatMessage(ee.a.error),description:"".concat(e.t0)});case 17:e.next=22;break;case 19:e.prev=19,e.t1=e.catch(1),f({variant:"danger",dismissable:!0,title:"enabled"===a.rule_status?d.formatMessage(ee.a.rulesTableHideReportsErrorDisabled):d.formatMessage(ee.a.rulesTableHideReportsErrorEnabled),description:"".concat(e.t1)});case 22:case"end":return e.stop()}}),e,null,[[1,19],[7,14]])})));return function(t){return e.apply(this,arguments)}}(),Be=function(e){switch(e){case"enabled":return ee.a.rulesTableNoRuleHitsEnabledRulesBody;case"disabled":return ee.a.rulesTableNoRuleHitsDisabledRulesBody;case"rhdisabled":return ee.a.rulesTableNoRuleHitsRedHatDisabledRulesBody;default:return ee.a.rulesTableNoRuleHitsAnyRulesBody}};Object(b.useEffect)((function(){!ue&&null!==j&&xe()}),[xe,ue,r,j]),Object(b.useEffect)((function(){if(window.location.search&&ue){var e=Object(R.c)();delete e.tags,delete e.sap_system,void 0===e.text?Ee(""):Ee(e.text),e.sort=void 0===e.sort?"-total_risk":e.sort[0],void 0!==e.has_playbook&&!Array.isArray(e.has_playbook)&&(e.has_playbook=["".concat(e.has_playbook)]),void 0!==e.incident&&!Array.isArray(e.incident)&&(e.incident=["".concat(e.incident)]),void 0===e.offset?e.offset=0:e.offset=Number(e.offset[0]),void 0===e.limit?e.limit=10:e.limit=Number(e.limit[0]),void 0!==e.reboot&&!Array.isArray(e.reboot)&&(e.reboot=["".concat(e.reboot)]),l(oe(oe({},r),e))}fe(!1)}),[]),Object(b.useEffect)((function(){if(void 0!==r.sort){var e=Number(Object.entries(Me).find((function(e){return e[1]===r.sort||"-".concat(e[1])===r.sort}))[0]),t="-"===r.sort[0]?"desc":"asc";le({index:e,direction:t})}}),[r.sort]),Object(b.useEffect)((function(){if(a.data)if(0===a.data.length)te([{cells:[{title:g.a.createElement(V.a,{icon:M.a,iconClass:"ansibleCheck",title:d.formatMessage(ee.a.rulesTableNoRuleHitsTitle),text:d.formatMessage(Be(r.rule_status))},"enabled"===r.rule_status&&g.a.createElement(F.Button,{variant:"link",style:{paddingTop:24},onClick:function(){return Ne("all")}},d.formatMessage(ee.a.rulesTableNoRuleHitsAddDisabledButton))),props:{colSpan:6}}]}]);else{var e=a.data.flatMap((function(e,t){return[{isOpen:!1,rule:e,cells:[{title:g.a.createElement("span",{key:t},g.a.createElement(J.a,{rule:e}),g.a.createElement(D.Link,{key:t,to:"/recommendations/".concat(e.rule_id)}," ",e.description," "))},{title:g.a.createElement(w.DateFormat,{key:t,date:e.publish_date,variant:"relative"})},{title:g.a.createElement("div",{key:t},g.a.createElement(S.Tooltip,{key:t,position:S.TooltipPosition.bottom,content:d.formatMessage(ee.a.rulesDetailsTotalriskBody,{risk:p.TOTAL_RISK_LABEL_LOWER[e.total_risk]||d.formatMessage(ee.a.undefined),strong:function(e){return Object(re.a)(e)}})},g.a.createElement(N.a,{value:e.total_risk})))},{title:g.a.createElement("div",{key:t},g.a.createElement(N.a,{text:p.RISK_OF_CHANGE_LABEL[we(e)],value:we(e),hideIcon:!0}),g.a.createElement("div",null))},{title:g.a.createElement("div",{key:t}," ","enabled"===e.rule_status?"".concat(e.impacted_systems_count.toLocaleString()):d.formatMessage(ee.a.nA))},{title:g.a.createElement("div",{className:"ins-c-center-text ",key:t},e.playbook_count?g.a.createElement(M.a,{className:"ansibleCheck"}):d.formatMessage(ee.a.no))}]},{parent:2*t,fullWidth:!0,cells:[{title:g.a.createElement(H.Main,{className:"pf-m-light"},g.a.createElement(v.Stack,{hasGutter:!0},e.hosts_acked_count?g.a.createElement(v.StackItem,null,g.a.createElement(L.a,{size:"sm"})," ",e.hosts_acked_count&&!e.impacted_systems_count?d.formatMessage(ee.a.ruleIsDisabledForAllSystems):d.formatMessage(ee.a.ruleIsDisabledForSystemsBody,{systems:e.hosts_acked_count}),"  ",g.a.createElement(F.Button,{isInline:!0,variant:"link",onClick:function(){Le(e),Ie(!0)}},d.formatMessage(ee.a.viewSystems))):g.a.createElement(g.a.Fragment,null),g.a.createElement(q.a,{rule:e,resolutionRisk:we(e)})))}]}]}));te(e.asMutable())}}),[a]),Object(b.useEffect)((function(){if(!ue&&"pending"!==o){var e=oe({},r),t=pe.length?{text:pe}:{};delete e.text,l(oe(oe(oe({},e),t),{},{offset:0}))}}),[Fe]);var He,Ve=function(e){var t=oe(oe({},r),{},{offset:0});"text"===e&&Ee(""),delete t[e],l(t)},ze=function(e,t){t.length>0?l(oe(oe({},r),{},{offset:0},u()({},e,t))):Ve(e)},Ue=["",{label:d.formatMessage(r.impacting?ee.a.rulesTableActionShow:ee.a.rulesTableActionHide),onClick:function(){return e=!r.impacting,void l(oe(oe({},r),{},{impacting:e,offset:0}));var e}}],Ke=[{label:d.formatMessage(ee.a.name).toLowerCase(),filterValues:{key:"text-filter",onChange:function(e,t){return Ee(t)},value:pe,placeholder:d.formatMessage(ee.a.search)}},{label:p.FILTER_CATEGORIES.total_risk.title,type:p.FILTER_CATEGORIES.total_risk.type,id:p.FILTER_CATEGORIES.total_risk.urlParam,value:"checkbox-".concat(p.FILTER_CATEGORIES.total_risk.urlParam),filterValues:{key:"".concat(p.FILTER_CATEGORIES.total_risk.urlParam,"-filter"),onChange:function(e,t){return ze(p.FILTER_CATEGORIES.total_risk.urlParam,t)},value:r.total_risk,items:p.FILTER_CATEGORIES.total_risk.values}},{label:p.FILTER_CATEGORIES.res_risk.title,type:p.FILTER_CATEGORIES.res_risk.type,id:p.FILTER_CATEGORIES.res_risk.urlParam,value:"checkbox-".concat(p.FILTER_CATEGORIES.res_risk.urlParam),filterValues:{key:"".concat(p.FILTER_CATEGORIES.res_risk.urlParam,"-filter"),onChange:function(e,t){return ze(p.FILTER_CATEGORIES.res_risk.urlParam,t)},value:r.res_risk,items:p.FILTER_CATEGORIES.res_risk.values}},{label:p.FILTER_CATEGORIES.impact.title,type:p.FILTER_CATEGORIES.impact.type,id:p.FILTER_CATEGORIES.impact.urlParam,value:"checkbox-".concat(p.FILTER_CATEGORIES.impact.urlParam),filterValues:{key:"".concat(p.FILTER_CATEGORIES.impact.urlParam,"-filter"),onChange:function(e,t){return ze(p.FILTER_CATEGORIES.impact.urlParam,t)},value:r.impact,items:p.FILTER_CATEGORIES.impact.values}},{label:p.FILTER_CATEGORIES.likelihood.title,type:p.FILTER_CATEGORIES.likelihood.type,id:p.FILTER_CATEGORIES.likelihood.urlParam,value:"checkbox-".concat(p.FILTER_CATEGORIES.likelihood.urlParam),filterValues:{key:"".concat(p.FILTER_CATEGORIES.likelihood.urlParam,"-filter"),onChange:function(e,t){return ze(p.FILTER_CATEGORIES.likelihood.urlParam,t)},value:r.likelihood,items:p.FILTER_CATEGORIES.likelihood.values}},{label:p.FILTER_CATEGORIES.category.title,type:p.FILTER_CATEGORIES.category.type,id:p.FILTER_CATEGORIES.category.urlParam,value:"checkbox-".concat(p.FILTER_CATEGORIES.category.urlParam),filterValues:{key:"".concat(p.FILTER_CATEGORIES.category.urlParam,"-filter"),onChange:function(e,t){return ze(p.FILTER_CATEGORIES.category.urlParam,t)},value:r.category,items:p.FILTER_CATEGORIES.category.values}},{label:p.FILTER_CATEGORIES.incident.title,type:p.FILTER_CATEGORIES.incident.type,id:p.FILTER_CATEGORIES.incident.urlParam,value:"checkbox-".concat(p.FILTER_CATEGORIES.incident.urlParam),filterValues:{key:"".concat(p.FILTER_CATEGORIES.incident.urlParam,"-filter"),onChange:function(e,t){return ze(p.FILTER_CATEGORIES.incident.urlParam,t)},value:r.incident,items:p.FILTER_CATEGORIES.incident.values}},{label:p.FILTER_CATEGORIES.has_playbook.title,type:p.FILTER_CATEGORIES.has_playbook.type,id:p.FILTER_CATEGORIES.has_playbook.urlParam,value:"checkbox-".concat(p.FILTER_CATEGORIES.has_playbook.urlParam),filterValues:{key:"".concat(p.FILTER_CATEGORIES.has_playbook.urlParam,"-filter"),onChange:function(e,t){return ze(p.FILTER_CATEGORIES.has_playbook.urlParam,t)},value:r.has_playbook,items:p.FILTER_CATEGORIES.has_playbook.values}},{label:p.FILTER_CATEGORIES.reboot.title,type:p.FILTER_CATEGORIES.reboot.type,id:p.FILTER_CATEGORIES.reboot.urlParam,value:"checkbox-".concat(p.FILTER_CATEGORIES.reboot.urlParam),filterValues:{key:"".concat(p.FILTER_CATEGORIES.reboot.urlParam,"-filter"),onChange:function(e,t){return ze(p.FILTER_CATEGORIES.reboot.urlParam,t)},value:r.reboot,items:p.FILTER_CATEGORIES.reboot.values}},{label:p.FILTER_CATEGORIES.rule_status.title,type:p.FILTER_CATEGORIES.rule_status.type,id:p.FILTER_CATEGORIES.rule_status.urlParam,value:"radio-".concat(p.FILTER_CATEGORIES.rule_status.urlParam),filterValues:{key:"".concat(p.FILTER_CATEGORIES.rule_status.urlParam,"-filter"),onChange:function(e,t){return Ne(t)},value:"".concat(r.rule_status),items:p.FILTER_CATEGORIES.rule_status.values}}],qe={filters:(He=oe({},r),delete He.impacting,delete He.topic,delete He.sort,delete He.offset,delete He.limit,Object(R.d)(He,p.FILTER_CATEGORIES)),onDelete:function(e,t,a){a?(Ee(""),l(oe(oe({},r.topic&&{topic:r.topic}),{},{impacting:!0,rule_status:"enabled",limit:r.limit,offset:r.offset}))):t.map((function(e){var t=u()({},e.urlParam,Array.isArray(r[e.urlParam])?r[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?l(oe(oe({},r),t)):Ve(e.urlParam)}))}};return g.a.createElement(g.a.Fragment,null,Re&&g.a.createElement(W.a,{handleModalToggle:function(e){return Ie(e)},isModalOpen:Re,afterFn:function(){xe()},rule:Ce}),ve&&g.a.createElement(x.a,{handleModalToggle:_e,isModalOpen:ve,rule:Oe,afterFn:xe}),g.a.createElement(z.PrimaryToolbar,{pagination:{itemCount:Pe,page:r.offset/r.limit+1,perPage:Number(r.limit),onSetPage:function(e,t){Ge(t)},onPerPageSelect:function(e,t){l(oe(oe({},r),{},{limit:t,offset:0}))},isCompact:!0},exportConfig:(t={label:d.formatMessage(ee.a.exportCsv)},u()(t,"label",d.formatMessage(ee.a.exportJson)),u()(t,"onSelect",(function(e,t){return Object(Z.a)("hits",t,Object(R.e)(r,j))})),u()(t,"isDisabled",!r.impacting),u()(t,"tooltipText",d.formatMessage(ee.a.exportData)),t),actionsConfig:{actions:Ue},filterConfig:{items:Ke},activeFiltersConfig:qe}),"fulfilled"===o&&g.a.createElement(O.c,{"aria-label":"rule-table",actionResolver:function(e,t){var a=t.rowIndex,r=$[a].rule?$[a].rule:null;return a%2==0&&r?r&&"enabled"===r.rule_status?[{title:d.formatMessage(ee.a.disableRule),onClick:function(e,t){return De(t)}}]:[{title:d.formatMessage(ee.a.enableRule),onClick:function(e,t){return De(t)}}]:null},onCollapse:function(e,t,a){var r=i()($);r[t]=oe(oe({},r[t]),{},{isOpen:a}),te(r)},sortBy:se,onSort:function(e,t,a){var n="".concat("asc"===a?"":"-").concat(Me[t]);le({index:t,direction:a}),l(oe(oe({},r),{},{sort:n,offset:0}))},cells:K,rows:$},g.a.createElement(k.a,null),g.a.createElement(T.a,null)),"pending"===o&&g.a.createElement(B.a,null),"failed"===o&&g.a.createElement(G.a,{message:d.formatMessage(ee.a.rulesTableFetchRulesError)}),g.a.createElement(E.Pagination,{itemCount:Pe,page:r.offset/r.limit+1,perPage:Number(r.limit),onSetPage:function(e,t){Ge(t)},onPerPageSelect:function(e,t){l(oe(oe({},r),{},{limit:t,offset:0}))},widgetId:"pagination-options-menu-bottom",variant:E.PaginationVariant.bottom}))};se.propTypes={fetchRules:K.a.func,rulesFetchStatus:K.a.string,rules:K.a.object,filters:K.a.object,addNotification:K.a.func,setFilters:K.a.func,intl:K.a.any,selectedTags:K.a.array,workloads:K.a.object,SID:K.a.Object};t.default=Object($.c)(ae()(Object(Q.connect)((function(e){var t=e.AdvisorStore,a=e.ownProps;return oe({rules:t.rules,rulesFetchStatus:t.rulesFetchStatus,filters:t.filters,selectedTags:t.selectedTags,workloads:t.workloads,SID:t.SID},a)}),(function(e){return{fetchRules:function(t,a){return e(d.d(t,a))},addNotification:function(t){return e(Object(Y.addNotification)(t))},setFilters:function(t){return e(d.k(t))}}}))(se)))}}]);
//# sourceMappingURL=RulesTable.df983c3ad754900806a2.js.map