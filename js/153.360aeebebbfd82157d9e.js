(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[153],{97109:(e,t,n)=>{"use strict";n.d(t,{Y4:()=>s,qW:()=>u,yG:()=>p,gs:()=>d,kC:()=>f,yK:()=>m,s0:()=>g,E9:()=>y});var r=n(96156),a=n(28481),o=n(85061),i=n(35240);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=new URL(window.location),r="".concat(Object.keys(e).map((function(t){return"".concat(t,"=").concat(Array.isArray(e[t])?e[t].join():e[t])})).join("&")),a=new URLSearchParams(r);return"undefined"===a.get("reports_shown")&&a.delete("reports_shown"),null!=t&&t.length?a.set("tags",t):a.delete("tags"),window.history.replaceState(null,null,"".concat(n.origin).concat(n.pathname,"?").concat(a.toString()).concat(window.location.hash)),"?".concat(r)},u=function(e){return Object.assign.apply(Object,[{}].concat((0,o.Z)(Object.entries(e).map((function(e){var t=(0,a.Z)(e,2),n=t[0],o=t[1];return Array.isArray(o)?("true"===o[0]||"false"===o[0])&&o.length>1?null:(0,r.Z)({},n,o.join()):(0,r.Z)({},n,o)})))))},p=function(){var e=new URLSearchParams(window.location.search);return Array.from(e).reduce((function(e,t){var n=(0,a.Z)(t,2),o=n[0],i=n[1];return l(l({},e),{},(0,r.Z)({},o,"true"===i||"false"===i?JSON.parse(i):i.split(",")))}),{})},d=function(e){return Object.entries(e).reduce((function(e,t,n){var r=(0,a.Z)(t,2),o=r[0],i=r[1];return e+(0===n?"".concat(o,"=").concat(i):"&".concat(o,"=").concat(i))}),"")},f=function(e){return e[0].toUpperCase()+e.substring(1)},m=function(e,t){var n=Object.entries(e);return n.length>0?n.reduce((function(e,n){if(t[n[0]]){var r=t[n[0]],a=Array.isArray(n[1])?n[1].map((function(e){var t=r.values.find((function(t){return t.value===String(e)}));return t?{name:t.text||t.label,value:e}:{name:e,value:e}})):[{name:r.values.find((function(e){return e.value===String(n[1])})).label,value:n[1]}];return[].concat((0,o.Z)(e),[{category:f(r.title),chips:a,urlParam:r.urlParam}])}return"text"===n[0]?[].concat((0,o.Z)(e),[{category:"Name",chips:[{name:n[1],value:n[1]}],urlParam:n[0]}]):e}),[]):[]},g=function(e,t){var n;return(0,i.h3)({system_profile:l(l({},(null==e||null===(n=e.SAP)||void 0===n?void 0:n.isSelected)&&{sap_system:!0}),(null==t?void 0:t.length)>0&&{sap_sids:t})},void 0,{arrayEnhancer:"contains"})},y=function(e,t){return e.map((function(e){return l(l({},t.find((function(t){return t.id===e.system_uuid&&t}))),e)}))}},34702:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(219),a=n(96733),o=n(74183),i=n(86728),c=n(45697),l=n.n(c),s=n(93264),u=n.n(s),p=n(34348),d=function(e){var t=e.className,n=e.children,a=e.icon,c=e.iconClass,l=e.iconStyle,s=e.text,d=e.title,f=e.variant;return u().createElement(r.ub,{className:t,variant:f},"none"!==a&&u().createElement(i.k,{className:c,style:l,icon:a}),u().createElement(p.Dx,{headingLevel:"h5",size:"lg"},d),u().createElement(o.B,{style:{marginBottom:"16px"}},s),n)};d.propTypes={children:l().any,icon:l().any,iconClass:l().any,iconStyle:l().any,text:l().any,title:l().string,variant:l().any,className:l().string},d.defaultProps={icon:a.ZP,title:"",variant:r.IQ.full};const f=d},83808:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(76004),a=n(23218),o=n(45697),i=n.n(o),c=n(93264),l=n.n(c),s=n(30893),u=n(86896),p=function(e){var t,n=e.rule,o=(0,u.Z)();return l().createElement(l().Fragment,null,-1!==(null==n||null===(t=n.tags)||void 0===t?void 0:t.search("incident"))&&l().createElement(r.Tooltip,{content:o.formatMessage(s.Z.incidentTooltip),position:r.TooltipPosition.right},l().createElement(a.Label,{color:"red",className:"incidentLabel"},o.formatMessage(s.Z.incident))),"disabled"===n.rule_status&&l().createElement(r.Tooltip,{content:o.formatMessage(s.Z.ruleIsDisabledTooltip),position:r.TooltipPosition.right},l().createElement(a.Label,{color:"gray"},o.formatMessage(s.Z.disabled))),"rhdisabled"===n.rule_status&&l().createElement(r.Tooltip,{content:o.formatMessage(s.Z.ruleIsDisabledTooltip),position:r.TooltipPosition.right},l().createElement(a.Label,{color:"gray"},o.formatMessage(s.Z.redhatDisabled))))};p.propTypes={rule:i().object};const d=p}}]);