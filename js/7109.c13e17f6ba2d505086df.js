(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[7109],{97109:(e,r,n)=>{"use strict";n.d(r,{Y4:()=>s,qW:()=>l,yG:()=>f,gs:()=>p,yK:()=>v,s0:()=>d});var t=n(96156),a=n(28481),c=n(85061),o=n(35240);function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=new URL(window.location),t="".concat(Object.keys(e).map((function(r){return"".concat(r,"=").concat(Array.isArray(e[r])?e[r].join():e[r])})).join("&")),a=new URLSearchParams(t);return"undefined"===a.get("reports_shown")&&a.delete("reports_shown"),null!=r&&r.length?a.set("tags",r):a.delete("tags"),window.history.replaceState(null,null,"".concat(n.origin).concat(n.pathname,"?").concat(a.toString()).concat(window.location.hash)),"?".concat(t)},l=function(e){return Object.assign.apply(Object,[{}].concat((0,c.Z)(Object.entries(e).map((function(e){var r=(0,a.Z)(e,2),n=r[0],c=r[1];return Array.isArray(c)?("true"===c[0]||"false"===c[0])&&c.length>1?null:(0,t.Z)({},n,c.join()):(0,t.Z)({},n,c)})))))},f=function(){var e=new URLSearchParams(window.location.search);return Array.from(e).reduce((function(e,r){var n=(0,a.Z)(r,2),c=n[0],o=n[1];return u(u({},e),{},(0,t.Z)({},c,"true"===o||"false"===o?JSON.parse(o):o.split(",")))}),{})},p=function(e){return Object.entries(e).reduce((function(e,r,n){var t=(0,a.Z)(r,2),c=t[0],o=t[1];return e+(0===n?"".concat(c,"=").concat(o):"&".concat(c,"=").concat(o))}),"")},v=function(e,r){var n=Object.entries(e);return n.length>0?n.reduce((function(e,n){if(r[n[0]]){var t=r[n[0]],a=Array.isArray(n[1])?n[1].map((function(e){var r=t.values.find((function(r){return r.value===String(e)}));return r?{name:r.text||r.label,value:e}:{name:e,value:e}})):[{name:t.values.find((function(e){return e.value===String(n[1])})).label,value:n[1]}];return[].concat((0,c.Z)(e),[{category:(o=t.title,o[0].toUpperCase()+o.substring(1)),chips:a,urlParam:t.urlParam}])}return"text"===n[0]?[].concat((0,c.Z)(e),[{category:"Name",chips:[{name:n[1],value:n[1]}],urlParam:n[0]}]):e;var o}),[]):[]},d=function(e,r){var n;return(0,o.h3)({system_profile:u(u({},(null==e||null===(n=e.SAP)||void 0===n?void 0:n.isSelected)&&{sap_system:!0}),(null==r?void 0:r.length)>0&&{sap_sids:r})},void 0,{arrayEnhancer:"contains"})}}}]);
//# sourceMappingURL=../sourcemaps/7109.96cc21396c594c24328c.js.map