(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[7598],{97109:(r,i,e)=>{"use strict";e.d(i,{Y4:()=>d,qW:()=>l,yG:()=>_,gs:()=>v,kC:()=>p,yK:()=>A,s0:()=>g});var n=e(96156),t=e(28481),o=e(85061),s=e(35240);function a(r,i){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable}))),e.push.apply(e,n)}return e}function c(r){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?a(Object(e),!0).forEach((function(i){(0,n.Z)(r,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(e,i))}))}return r}var d=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=new URL(window.location),n="".concat(Object.keys(r).map((function(i){return"".concat(i,"=").concat(Array.isArray(r[i])?r[i].join():r[i])})).join("&")),t=new URLSearchParams(n);return"undefined"===t.get("reports_shown")&&t.delete("reports_shown"),null!=i&&i.length?t.set("tags",i):t.delete("tags"),window.history.replaceState(null,null,"".concat(e.origin).concat(e.pathname,"?").concat(t.toString()).concat(window.location.hash)),"?".concat(n)},l=function(r){return Object.assign.apply(Object,[{}].concat((0,o.Z)(Object.entries(r).map((function(r){var i=(0,t.Z)(r,2),e=i[0],o=i[1];return Array.isArray(o)?("true"===o[0]||"false"===o[0])&&o.length>1?null:(0,n.Z)({},e,o.join()):(0,n.Z)({},e,o)})))))},_=function(){var r=new URLSearchParams(window.location.search);return Array.from(r).reduce((function(r,i){var e=(0,t.Z)(i,2),o=e[0],s=e[1];return c(c({},r),{},(0,n.Z)({},o,"true"===s||"false"===s?JSON.parse(s):s.split(",")))}),{})},v=function(r){return Object.entries(r).reduce((function(r,i,e){var n=(0,t.Z)(i,2),o=n[0],s=n[1];return r+(0===e?"".concat(o,"=").concat(s):"&".concat(o,"=").concat(s))}),"")},p=function(r){return r[0].toUpperCase()+r.substring(1)},A=function(r,i){var e=Object.entries(r);return e.length>0?e.reduce((function(r,e){if(i[e[0]]){var n=i[e[0]],t=Array.isArray(e[1])?e[1].map((function(r){var i=n.values.find((function(i){return i.value===String(r)}));return i?{name:i.text||i.label,value:r}:{name:r,value:r}})):[{name:n.values.find((function(r){return r.value===String(e[1])})).label,value:e[1]}];return[].concat((0,o.Z)(r),[{category:p(n.title),chips:t,urlParam:n.urlParam}])}return"text"===e[0]?[].concat((0,o.Z)(r),[{category:"Name",chips:[{name:e[1],value:e[1]}],urlParam:e[0]}]):r}),[]):[]},g=function(r,i){var e;return(0,s.h3)({system_profile:c(c({},(null==r||null===(e=r.SAP)||void 0===e?void 0:e.isSelected)&&{sap_system:!0}),(null==i?void 0:i.length)>0&&{sap_sids:i})},void 0,{arrayEnhancer:"contains"})}},71094:(r,i,e)=>{"use strict";e.d(i,{Z:()=>a});var n=e(80129),t=e.n(n),o=e(2027),s=e.n(o);const a={get:function(r){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return s().get(r,{headers:i,params:e,paramsSerializer:function(r){return t().stringify(r,{arrayFormat:"repeat"})}})},put:function(r){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return s().put(r,i,{headers:e})},post:function(r){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return s().post(r,e,{headers:i})},delete:function(r){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return s().delete(r,i,{headers:e})}}},28186:(r,i,e)=>{"use strict";e.d(i,{f:()=>o});var n=e(93264),t=e.n(n),o=function(r){return t().createElement("strong",null,r)}},22063:(r,i,e)=>{"use strict";e.r(i),e.d(i,{default:()=>a});var n=e(94015),t=e.n(n),o=e(23645),s=e.n(o)()(t());s.push([r.id,".advisor .ins-c-inventory-insights__report-details__override .ins-c-rules-card .pf-c-card__header .pf-l-split__item:first-of-type{white-space:nowrap;margin-right:5px;margin-right:.3125rem}.advisor .ins-c-inventory-insights__report-details__override .ins-c-rules-card .ins-l-icon-group__with-major{display:inline}.advisor .ins-c-inventory-insights__report-details__override .ins-c-rules-card .space-between{display:flex;justify-content:space-between}.advisor .ins-c-inventory-insights__report-details__override .ins-c-rules-card .pf-c-card__header div{font-weight:600}.advisor .ins-c-inventory-insights__report-details__override .ins-c-rules-card+.ins-c-rules-card{margin-top:var(--pf-global--spacer--xl)}.advisor .ins-c-inventory-insights__report-details__override .ins-c-rules-card a[disabled]{cursor:not-allowed;color:var(--pf-global--disabled-color--200)}.advisor .ins-c-inventory-insights__report-details__override .ins-c-rules-card a[disabled]:hover{text-decoration:none}.advisor .ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card .ins-m-card__flat{box-shadow:none;border:1px solid #dcdcdc;border-radius:5px}.advisor .ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card .pf-c-card__body svg{margin-right:5px;margin-right:.3125rem}.advisor .ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card pre{display:block;padding:10px;padding:.59375rem;margin-top:5px;margin-top:.3125rem;margin-bottom:10px;margin-bottom:.625rem;color:#333;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}.advisor .ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card pre code{white-space:pre-wrap}.advisor .ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card ol{margin-top:10px;margin-top:.625rem;margin-left:15px;margin-left:.9375rem}.advisor .ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card p+pre,.advisor .ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card ul+pre{margin-bottom:20px;margin-bottom:1.25rem}.advisor .ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card .pf-c-list{margin:5px 0px;margin:.3125rem 0rem;list-style:disc;padding-left:var(--pf-global--spacer--lg)}.advisor .ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card table{width:100%;margin-top:15px;margin-top:.9375rem}.advisor .ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card table tr{border-bottom:1px solid #ededed}.advisor .ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card table th,.advisor .ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card table td{padding:16px;padding:1rem}.advisor .ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card table td{background:white !important}.advisor .ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card table th{text-align:left !important}.advisor .ins-c-inventory-insights__report-details__override .ins-c-report-details-icon{margin-right:var(--pf-global--spacer--sm)}\n","",{version:3,sources:["webpack://./src/PresentationalComponents/ReportDetails/report-details.scss"],names:[],mappings:"AAAA,kIACyH,kBAAkB,CAAC,gBAAgB,CAAC,qBAAqB,CADlL,6GACuR,cAAc,CADrS,8FAC2X,YAAY,CAAC,6BAA6B,CADra,sGACmgB,eAAe,CADlhB,iGAC2mB,uCAAuC,CADlpB,2FACquB,kBAAkB,CAAC,2CAA2C,CADnyB,iGAC43B,oBAAoB,CADh5B,8GACs/B,eAAe,CAAC,wBAAwB,CAAC,iBAAiB,CADhjC,iHACypC,gBAAgB,CAAC,qBAAqB,CAD/rC,gGACuxC,aAAa,CAAC,YAAY,CAAC,iBAAiB,CAAC,cAAc,CAAC,mBAAmB,CAAC,kBAAkB,CAAC,qBAAqB,CAAC,UAAU,CAAC,oBAAoB,CAAC,oBAAoB,CAAC,wBAAwB,CAAC,qBAAqB,CAAC,iBAAiB,CADrgD,qGACkmD,oBAAoB,CADtnD,+FAC6sD,eAAe,CAAC,kBAAkB,CAAC,gBAAgB,CAAC,oBAAoB,CADrxD,qMACy8D,kBAAkB,CAAC,qBAAqB,CADj/D,uGACglE,cAAc,CAAC,oBAAoB,CAAC,eAAe,CAAC,yCAAyC,CAD7qE,kGACuwE,UAAU,CAAC,eAAe,CAAC,mBAAmB,CADrzE,qGACk5E,+BAA+B,CADj7E,0MAC0mF,YAAY,CAAC,YAAY,CADnoF,qGACguF,2BAA2B,CAD3vF,qGACw1F,0BAA0B,CADl3F,wFACk8F,yCAAyC",sourcesContent:[".advisor{\n.ins-c-inventory-insights__report-details__override .ins-c-rules-card .pf-c-card__header .pf-l-split__item:first-of-type{white-space:nowrap;margin-right:5px;margin-right:.3125rem}.ins-c-inventory-insights__report-details__override .ins-c-rules-card .ins-l-icon-group__with-major{display:inline}.ins-c-inventory-insights__report-details__override .ins-c-rules-card .space-between{display:flex;justify-content:space-between}.ins-c-inventory-insights__report-details__override .ins-c-rules-card .pf-c-card__header div{font-weight:600}.ins-c-inventory-insights__report-details__override .ins-c-rules-card+.ins-c-rules-card{margin-top:var(--pf-global--spacer--xl)}.ins-c-inventory-insights__report-details__override .ins-c-rules-card a[disabled]{cursor:not-allowed;color:var(--pf-global--disabled-color--200)}.ins-c-inventory-insights__report-details__override .ins-c-rules-card a[disabled]:hover{text-decoration:none}.ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card .ins-m-card__flat{box-shadow:none;border:1px solid #dcdcdc;border-radius:5px}.ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card .pf-c-card__body svg{margin-right:5px;margin-right:.3125rem}.ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card pre{display:block;padding:10px;padding:.59375rem;margin-top:5px;margin-top:.3125rem;margin-bottom:10px;margin-bottom:.625rem;color:#333;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}.ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card pre code{white-space:pre-wrap}.ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card ol{margin-top:10px;margin-top:.625rem;margin-left:15px;margin-left:.9375rem}.ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card p+pre,.ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card ul+pre{margin-bottom:20px;margin-bottom:1.25rem}.ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card .pf-c-list{margin:5px 0px;margin:.3125rem 0rem;list-style:disc;padding-left:var(--pf-global--spacer--lg)}.ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card table{width:100%;margin-top:15px;margin-top:.9375rem}.ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card table tr{border-bottom:1px solid #ededed}.ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card table th,.ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card table td{padding:16px;padding:1rem}.ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card table td{background:white !important}.ins-c-inventory-insights__report-details__override .ins-c-inventory-advisor__card table th{text-align:left !important}.ins-c-inventory-insights__report-details__override .ins-c-report-details-icon{margin-right:var(--pf-global--spacer--sm)}\n\n}"],sourceRoot:""}]);const a=s},91356:(r,i,e)=>{"use strict";e.r(i),e.d(i,{default:()=>a});var n=e(94015),t=e.n(n),o=e(23645),s=e.n(o)()(t());s.push([r.id,".advisor .ins-c-inventory-insights__overrides .ins-empty-rule-cards div{text-align:center}.advisor .ins-c-inventory-insights__overrides .successColorOverride{color:var(--pf-global--success-color--100)}.advisor .ins-c-inventory-insights__overrides .chartSpikeIconColor{color:var(--pf-global--primary-color--100)}.advisor .ins-c-inventory-insights__overrides .pf-c-clipboard-copy__group-copy{background-color:var(--pf-global--BackgroundColor--100)}.advisor .ins-c-inventory-insights__overrides .pf-l-stack{color:var(--pf-c-empty-state__body--Color)}.advisor .ins-c-inventory-insights__overrides .ins-c-insights__check{color:var(--pf-global--success-color--200)}.advisor .ins-c-inventory-insights__overrides .ins-c-background__default{color:var(--pf-global--BackgroundColor--100)}.advisor .ins-c-inventory-insights__overrides .ins-c-center-text{text-align:center}\n","",{version:3,sources:["webpack://./src/SmartComponents/SystemAdvisor/SystemAdvisor.scss"],names:[],mappings:"AAAA,wEAC+D,iBAAiB,CADhF,oEAC4I,0CAA0C,CADtL,mEACiP,0CAA0C,CAD3R,+EACkW,uDAAuD,CADzZ,0DAC2c,0CAA0C,CADrf,qEACkjB,0CAA0C,CAD5lB,yEAC6pB,4CAA4C,CADzsB,iEACkwB,iBAAiB",sourcesContent:[".advisor{\n.ins-c-inventory-insights__overrides .ins-empty-rule-cards div{text-align:center}.ins-c-inventory-insights__overrides .successColorOverride{color:var(--pf-global--success-color--100)}.ins-c-inventory-insights__overrides .chartSpikeIconColor{color:var(--pf-global--primary-color--100)}.ins-c-inventory-insights__overrides .pf-c-clipboard-copy__group-copy{background-color:var(--pf-global--BackgroundColor--100)}.ins-c-inventory-insights__overrides .pf-l-stack{color:var(--pf-c-empty-state__body--Color)}.ins-c-inventory-insights__overrides .ins-c-insights__check{color:var(--pf-global--success-color--200)}.ins-c-inventory-insights__overrides .ins-c-background__default{color:var(--pf-global--BackgroundColor--100)}.ins-c-inventory-insights__overrides .ins-c-center-text{text-align:center}\n\n}"],sourceRoot:""}]);const a=s},5151:(r,i,e)=>{"use strict";var n=e(93379),t=e.n(n),o=e(22063),s=t()(o.default,{insert:"head",singleton:!1});if(!o.default.locals||r.hot.invalidate){var a=o.default.locals;r.hot.accept(22063,(i=>{o=e(22063),function(r,i,e){if(!r&&i||r&&!i)return!1;var n;for(n in r)if(r[n]!==i[n])return!1;for(n in i)if(!r[n])return!1;return!0}(a,o.default.locals)?(a=o.default.locals,s(o.default)):r.hot.invalidate()}))}r.hot.dispose((function(){s()})),o.default.locals},55598:(r,i,e)=>{"use strict";var n=e(93379),t=e.n(n),o=e(91356),s=t()(o.default,{insert:"head",singleton:!1});if(!o.default.locals||r.hot.invalidate){var a=o.default.locals;r.hot.accept(91356,(i=>{o=e(91356),function(r,i,e){if(!r&&i||r&&!i)return!1;var n;for(n in r)if(r[n]!==i[n])return!1;for(n in i)if(!r[n])return!1;return!0}(a,o.default.locals)?(a=o.default.locals,s(o.default)):r.hot.invalidate()}))}r.hot.dispose((function(){s()})),o.default.locals},24654:()=>{},22868:()=>{},95574:()=>{},14777:()=>{},99830:()=>{},87414:()=>{}}]);
//# sourceMappingURL=../sourcemaps/7598.b2d7340a134a7cce7876.js.map