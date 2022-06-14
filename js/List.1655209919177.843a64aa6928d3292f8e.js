/*! For license information please see List.1655209919177.843a64aa6928d3292f8e.js.LICENSE.txt */
(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[6842,5467,9477,3929],{52202:(e,t,r)=>{"use strict";r.d(t,{k:()=>y,b:()=>v});var n=r(66197),a=r(16545),o=r(82644),i=r(29558),s=r(91290),c=r(26076),l=r(93264),u=r.n(l),m=r(41580),f=r(30893),d=r(28186),h=(0,o.Sn)(),p=navigator.language.slice(0,2),g=(0,i.d)({onError:console.log,locale:p},h),y=function(e){return u().createElement("span",{className:"adv-system-reboot-message"},u().createElement(c.ZP,{className:e?"adv-c-icon-reboot-required":"adv-c-icon-no-reboot-required"}),u().createElement(n.TextContent,{className:"adv-c-text-system-reboot-message"},u().createElement(n.Text,{component:n.TextVariants.p},g.formatMessage(f.Z.systemReboot,{strong:function(e){return(0,d.fK)(e)},status:e?g.formatMessage(f.Z.is):g.formatMessage(f.Z.isNot)}))))},v=function(e){return u().createElement(a.u,{key:e,position:a.D.right,content:u().createElement("div",null,e)},u().createElement("span",{"aria-label":"Action"},u().createElement(s.ZP,{color:m.global_secondary_color_100.value})))}},93294:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>W});var n=r(70885),a=r(80123),o=r(39173),i=r(93264),s=r.n(i),c=r(14638),l=r(28883),u=r(29873),m=r(75662),f=r(71002),d=r(4942),h=r(15861),p=r(59303),g=r(23320),y=r(53446),v=r(1657),E=r(71094),b=r(42982),Z=r(39138),w=r.n(Z),x=r(45697),M=r.n(x),L=r(74093),O=r(30893),k=function(e){var t=e.statsSystems,r=e.statsReports,a=e.topActiveRec,o=e.intl,i=function(e,t){return Math.round(Number(e/t*100))},c=[{x:o.formatMessage(O.Z.critical),y:i(r.total_risk[4],r.total)},{x:o.formatMessage(O.Z.important),y:i(r.total_risk[3],r.total)},{x:o.formatMessage(O.Z.moderate),y:i(r.total_risk[2],r.total)},{x:o.formatMessage(O.Z.low),y:i(r.total_risk[1],r.total)}],l=[[o.formatMessage(O.Z.severity),o.formatMessage(O.Z.poundOfRecs)]].concat((0,b.Z)(Object.entries(r.total_risk).map((function(e){var t=(0,n.Z)(e,2),a=t[0],s=t[1];return[p.t0[a].props.children,o.formatMessage(O.Z.recNumAndPercentage,{count:s,total:i(s,r.total)})]})).reverse())),u=[{x:o.formatMessage(O.Z.availability),y:i(r.category.Availability,r.total)},{x:o.formatMessage(O.Z.performance),y:i(r.category.Performance,r.total)},{x:o.formatMessage(O.Z.security),y:i(r.category.Security,r.total)},{x:o.formatMessage(O.Z.stability),y:i(r.category.Stability,r.total)}],m=[[o.formatMessage(O.Z.category),o.formatMessage(O.Z.poundOfRecs)]].concat((0,b.Z)(Object.entries(r.category).map((function(e){var t=(0,n.Z)(e,2),a=t[0],s=t[1];return[a,o.formatMessage(O.Z.recNumAndPercentage,{count:s,total:i(s,r.total)})]})))),f=function(e){return s().createElement(L.xv,null,s().createElement(L.xv,{style:{fontWeight:700}}," ",e.description)," ",w()(e.summary,{length:280}))};return s().createElement(s().Fragment,{key:o.formatMessage(O.Z.insightsHeader)},s().createElement(g.nv,null,o.formatMessage(O.Z.execReportHeader,{systems:s().createElement(L.xv,{style:{fontWeight:700}},o.formatMessage(O.Z.execReportHeaderSystems,{systems:t.total})),risks:s().createElement(L.xv,{style:{fontWeight:700}}," ",o.formatMessage(O.Z.execReportHeaderRisks,{risks:r.total}))})),s().createElement(g.$0,{title:o.formatMessage(O.Z.severityHeader)},s().createElement(g.sg,null,s().createElement(g.iA,{withHeader:!0,rows:l})),s().createElement(g.sg,null,s().createElement(g.kL,{chartType:"pie",subTitle:o.formatMessage(O.Z.severityHeader),title:"100",data:c,colorSchema:"multi"}))),s().createElement(g.$0,{title:o.formatMessage(O.Z.categoryHeader)},s().createElement(g.sg,null,s().createElement(g.iA,{withHeader:!0,rows:m})),s().createElement(g.sg,null,s().createElement(g.kL,{chartType:"pie",subTitle:o.formatMessage(O.Z.categoryHeader),title:"100",data:u}))),s().createElement(g.$0,{title:o.formatMessage(O.Z.top3RulesHeader),withColumn:!1},a.data.map((function(e,t){return s().createElement(g.s_,{key:t,description:f(e)},s().createElement(g.Lv,{title:o.formatMessage(O.Z.systemsExposed)},"".concat(e.impacted_systems_count)),s().createElement(g.Lv,{title:o.formatMessage(O.Z.totalRisk)},s().createElement(g.Uc,{variant:e.total_risk})))}))))};k.propTypes={statsSystems:M().object,statsReports:M().object,topActiveRec:M().object,intl:M().any};const _=k;var j=r(86896),P=r(28216);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function H(){H=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),i=new M(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return{value:void 0,done:!0}}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var s=Z(i,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,i),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var u={};function m(){}function d(){}function h(){}var p={};s(p,a,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(L([])));y&&y!==t&&r.call(y,a)&&(p=y);var v=h.prototype=m.prototype=Object.create(p);function E(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function n(a,o,i,s){var c=l(e[a],e,o);if("throw"!==c.type){var u=c.arg,m=u.value;return m&&"object"==(0,f.Z)(m)&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,i,s)}),(function(e){n("throw",e,i,s)})):t.resolve(m).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,s)}))}s(c.arg)}var a;this._invoke=function(e,r){function o(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(o,o):o()}}function Z(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,Z(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=h,s(v,"constructor",h),s(h,"constructor",d),d.displayName=s(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,s(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},E(b.prototype),s(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new b(c(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(v),s(v,i,"Generator"),s(v,a,(function(){return this})),s(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}const T=function(e){var t=e.isDisabled,r=(0,j.Z)(),a=(0,P.useDispatch)(),o=(0,i.useState)(!1),c=(0,n.Z)(o,2),l=c[0],u=c[1],m=function(){var e=(0,h.Z)(H().mark((function e(){var t,o,i,s,c,l;return H().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),a((0,y.addNotification)(p.LH.pending)),e.prev=2,e.t0=Promise,e.next=6,(0,E.dX)(p.Pl);case 6:return e.t1=e.sent.data,e.next=9,(0,E.dX)(p.AS);case 9:return e.t2=e.sent.data,e.next=12,(0,E.dX)(p.cJ,{},{limit:3,sort:"-total_risk,-impacted_count",impacting:!0});case 12:return e.t3=e.sent.data,e.t4=[e.t1,e.t2,e.t3],e.next=16,e.t0.all.call(e.t0,e.t4);case 16:return t=e.sent,o=(0,n.Z)(t,3),i=o[0],s=o[1],c=o[2],l=_({statsReports:s,statsSystems:i,topActiveRec:c,intl:r}),u(!1),a((0,y.addNotification)(p.LH.success)),e.abrupt("return",[l]);case 27:return e.prev=27,e.t5=e.catch(2),u(!1),a((0,y.addNotification)(p.LH.error)),e.abrupt("return",[]);case 32:case"end":return e.stop()}}),e,null,[[2,27]])})));return function(){return e.apply(this,arguments)}}();return(0,i.useMemo)((function(){return s().createElement(g.o6,{groupName:r.formatMessage(O.Z.redHatInsights),label:l?r.formatMessage(O.Z.loading):r.formatMessage(O.Z.downloadExecutiveLabel),asyncFunction:m,buttonProps:N({variant:"link",icon:s().createElement(v.ZP,{className:"iconOverride"}),component:"a",className:"downloadButtonOverride",isAriaDisabled:t},l?{isDisabled:!0}:null),type:r.formatMessage(O.Z.insightsHeader),fileName:"Advisor-Executive-Report--".concat((new Date).toUTCString().replace(/ /g,"-"),".pdf")})}),[l])};var A=r(46891),R=r(14748),D=r(52202),F=r(16545),G=r(43707),C=(0,i.lazy)((function(){return Promise.all([r.e(6692),r.e(6991),r.e(4739),r.e(3877),r.e(4474),r.e(2661),r.e(384)]).then(r.bind(r,82661))})),z=(0,i.lazy)((function(){return Promise.all([r.e(6991),r.e(3877),r.e(9573)]).then(r.bind(r,79930))})),I=(0,i.lazy)((function(){return Promise.all([r.e(7679),r.e(6464),r.e(5452),r.e(7960)]).then(r.bind(r,42910))})),K=function(){var e=(0,j.Z)(),t=(0,m.useLocation)().pathname,r=(0,m.useHistory)(),f=(0,G.T)("advisor",p.Gd.export);document.title=e.formatMessage(O.Z.documentTitle,{subnav:O.Z.recommendations.defaultMessage});var d=(0,i.useState)("/recommendations/pathways"===t?1:0),h=(0,n.Z)(d,2),g=h[0],y=h[1];return s().createElement(s().Fragment,null,s().createElement(a.Z,{className:"adv-c-page-recommendations__header"},s().createElement(o.Z,{title:"".concat(e.formatMessage(O.Z.insightsHeader)," ").concat(e.formatMessage(O.Z.recommendations).toLowerCase())}),!f.isLoading&&s().createElement(F.u,{trigger:f.hasAccess?"":"mouseenter",content:e.formatMessage(O.Z.permsAction)},s().createElement(T,{isDisabled:!f.hasAccess}))),s().createElement(R.Z,null,insights.chrome.isBeta()?s().createElement(s().Fragment,null,s().createElement(i.Suspense,{fallback:s().createElement(A.Z,null)},s().createElement(I,null)),s().createElement(c.m,{className:"adv__background--global-100",mountOnEnter:!0,unmountOnExit:!0,activeKey:g,onSelect:function(e,t){return function(e){y(e),r.push(1===e?"/recommendations/pathways":"/recommendations")}(t)}},s().createElement(l.O,{eventKey:0,title:s().createElement(u.T,null,e.formatMessage(O.Z.recommendations))},s().createElement(i.Suspense,{fallback:s().createElement(A.Z,null)},s().createElement(C,null))),s().createElement(l.O,{eventKey:1,title:s().createElement(u.T,null,e.formatMessage(O.Z.pathways)," ",(0,D.b)(e.formatMessage(O.Z.recommendedPathways)))},s().createElement(i.Suspense,{fallback:s().createElement(A.Z,null)},s().createElement(z,null))))):s().createElement(i.Suspense,{fallback:s().createElement(A.Z,null)},s().createElement(C,null))))};K.displayName="recommendations-list";const W=K},82728:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=r(80123),a=r(39173),o=r(93264),i=r.n(o),s=r(46891),c=r(14748),l=r(30893),u=r(86896),m=(0,o.lazy)((function(){return r.e(3993).then(r.bind(r,49659))})),f=function(){var e=(0,u.Z)();return document.title=e.formatMessage(l.Z.documentTitle,{subnav:l.Z.systems.defaultMessage}),i().createElement(i().Fragment,null,i().createElement(n.Z,null,i().createElement(a.Z,{title:"".concat(e.formatMessage(l.Z.insightsHeader)," ").concat(e.formatMessage(l.Z.systems).toLowerCase())})),i().createElement(c.Z,null,i().createElement(o.Suspense,{fallback:i().createElement(s.Z,null)},i().createElement(m,null))))};f.displayName="systems-list";const d=f},45467:()=>{},42480:()=>{},19527:()=>{},69331:()=>{},52361:()=>{},94616:()=>{}}]);