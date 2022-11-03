/*! For license information please see 8013.1667493529481.fcb1b014b8df747f6afb.js.LICENSE.txt */
(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[8013],{75331:(t,e,r)=>{"use strict";r.d(e,{Z:()=>v});var n=r(70885),o=r(93264),i=r.n(o),a=r(85991),c=r(49489),u=r(75662),s=r(45697),l=r.n(s),f=r(30893),h=r(75546),p=r(86896),d=function(t){var e,r=t.current,s=(0,p.Z)(),l=null===(e=(0,u.useLocation)().pathname)||void 0===e?void 0:e.split("/"),d=(0,o.useState)([]),v=(0,n.Z)(d,2),y=v[0],g=v[1],m=!("recommendations"===l[1]&&4===l.length)||"pathways"===l[2],w=(0,h.m1)({ruleId:l[2]},{skip:m}),b=w.data,x=w.isFetching;return(0,o.useEffect)((function(){var t;(t=[]).push({title:"".concat(s.formatMessage(f.Z.insightsHeader)," ").concat(l[1]),navigate:"/".concat(l[1])}),m||t.push({title:null==b?void 0:b.description,navigate:"/".concat(l[1],"/").concat(l[2])}),"pathways"===l[2]&&(t=[{title:"Advisor pathways",navigate:"/recommendations/pathways"}]),g(t)}),[b]),i().createElement(i().Fragment,null,!x&&y.length>0?i().createElement(a.a,{ouiaId:"detail"},y.map((function(t,e){return i().createElement(c.g,{key:e},i().createElement(u.Link,{to:t.navigate},t.title))})),i().createElement(c.g,{isActive:!0},r)):s.formatMessage(f.Z.loading))};d.propTypes={current:l().string};const v=d},84348:(t,e,r)=>{"use strict";r.d(e,{Z:()=>it});var n=r(71002),o=r(87462),i=r(42982),a=r(15861),c=r(4942),u=r(70885),s=r(59303),l=r(93264),f=r.n(l),h=r(17855),p=r(97109),d=r(28216),v=r(71094);function y(){y=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function h(){}function p(){}function d(){}var v={};u(v,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(L([])));m&&m!==e&&r.call(m,i)&&(v=m);var w=d.prototype=h.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(i,a,c,u){var s=l(t[i],t,a);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"==(0,n.Z)(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}}function O(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function L(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=d,u(w,"constructor",d),u(d,"constructor",p),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),u(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),u(w,c,"Generator"),u(w,i,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){(0,c.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var w=function(){var t=(0,a.Z)(y().mark((function t(e){var r,n,o,i,a,c,u,l,f,h,d,g,w;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.per_page,c=e.page,u=e.advisorFilters,l=e.filters,f=e.workloads,h=e.SID,d=e.pathway,g=e.rule,w=m(m(m(m(m({},u),{},{limit:a,offset:c*a-a,sort:u.sort},(null==l?void 0:l.hostnameOrId)&&!d&&{name:null==l?void 0:l.hostnameOrId}),l.hostnameOrId&&d&&{display_name:null==l?void 0:l.hostnameOrId}),Array.isArray(u.rhel_version)&&{rhel_version:null===(r=u.rhel_version)||void 0===r?void 0:r.join(",")}),(null===(n=l.tagFilters)||void 0===n?void 0:n.length)&&(0,p.gh)(l.tagFilters)),f&&(w=m(m({},w),(0,p.s0)(f,h))),!d){t.next=18;break}return t.next=6,(0,v.dX)("".concat(s.Vo),{},m(m({},w),{},{pathway:d.slug}));case 6:if(t.t2=o=t.sent,t.t1=null===t.t2,t.t1){t.next=10;break}t.t1=void 0===o;case 10:if(!t.t1){t.next=14;break}t.t3=void 0,t.next=15;break;case 14:t.t3=o.data;case 15:t.t0=t.t3,t.next=30;break;case 18:return t.next=20,(0,v.dX)("".concat(s.cJ).concat(encodeURI(g.rule_id),"/systems_detail/"),{},w);case 20:if(t.t5=i=t.sent,t.t4=null===t.t5,t.t4){t.next=24;break}t.t4=void 0===i;case 24:if(!t.t4){t.next=28;break}t.t6=void 0,t.next=29;break;case 28:t.t6=i.data;case 29:t.t0=t.t6;case 30:return t.abrupt("return",t.t0);case 31:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100,o=arguments.length>4?arguments[4]:void 0,a=Math.ceil(e/n)||1;return Promise.all((0,i.Z)(new Array(a)).map((function(e,i){return t(m(m({},r),{},{page:i+1,per_page:n,rule:o}))})))},x=function(t,e,r,n){return(0,a.Z)(y().mark((function o(){var i,a;return y().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n(!0),o.next=3,b(w,e,t,100,r);case 3:return o.next=5,o.sent.map((function(t){return t.data}));case 5:return i=o.sent,a=[].concat.apply([],i).map((function(t){return t.system_uuid})),n(!1),o.abrupt("return",a);case 9:case"end":return o.stop()}}),o)})))},O=r(75662),E=r(44788),_=r(33739),k=r(46891),L=r(45697),j=r.n(L),S=r(98132),P=r(30893),Z=r(71355),I=r(46655),F=r(41131),N=r(86896),T=r(58921),D=r(13218),G=r.n(D),A=r(44908),C=r.n(A);function M(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function R(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?M(Object(r),!0).forEach((function(e){(0,c.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var U=function(t){return t.group||"default"},Y=function(t){return function(e){return t?e||{}:{default:e||[]}}},X=function(t){var e=t;return Object.entries(t).forEach((function(t){var r=(0,u.Z)(t,2),n=r[0];void 0===r[1]&&delete e[n]})),e},V=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,n=U(r);return X(R(R({},e),{},(0,c.Z)({},n,(null===(t=r.items)||void 0===t?void 0:t.length)>0||G()(r.items)?r.items:void 0)))},J=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,r=U(e);return X(R(R({},t),{},(0,c.Z)({},r,e.reset?null==e?void 0:e.items:C()([null==e?void 0:e.item].concat((0,i.Z)(t[r]||[]))))))},z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,r=U(e),n=(t[r]||[]).filter((function(t){return!e.item.includes(t)}));return X(R(R({},t),{},(0,c.Z)({},r,0===n.length?void 0:n)))},H=function(t,e){return(t[U(e)]||[]).includes(e.item)?z(t,e):J(t,e)},K=function(t,e){return Y(Object.prototype.hasOwnProperty.call(!t,"default"))(null==e?void 0:e.preselected)},W=function(t){return Y(Object.prototype.hasOwnProperty.call(!t,"default"))()};const B=function(t,e){return{set:V,select:J,deselect:z,toggle:H,reset:K,clear:W}[e.type](t,e)};var q=r(22938);function Q(){Q=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function h(){}function p(){}function d(){}var v={};u(v,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(k([])));g&&g!==e&&r.call(g,i)&&(v=g);var m=d.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(i,a,c,u){var s=l(t[i],t,a);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"==(0,n.Z)(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=d,u(m,"constructor",d),u(d,"constructor",p),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},w(b.prototype),u(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(m),u(m,c,"Generator"),u(m,i,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}const $=function(t){var e,r,n=t.total,o=void 0===n?0:n,c=t.onSelect,s=t.preselected,h=t.itemIdsInTable,p=t.itemIdsOnPage,d=t.identifier,v=void 0===d?"id":d,y=t.isLoading,g=!!c,m=function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).withGroups,r=void 0!==e&&e,n=(0,l.useReducer)(B,t,Y(r)),o=(0,u.Z)(n,2),i=o[0],a=o[1],c=function(t,e){return a({type:"set",group:e,items:t})},s=function(t,e){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?c(t,e):a({type:"select",group:e,item:t})},f=function(t,e){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?c(t,e):a({type:"deselect",group:e,item:t})};return{set:c,select:s,deselect:f,toggle:function(t,e){return a({type:"toggle",group:e,item:t})},reset:function(){return a({type:"reset",preselected:t})},clear:function(){return a({type:"clear"})},selection:r?i:i.default}}(s||[]),w=m.selection,b=m.set,x=m.select,O=m.deselect,E=m.clear,_=(w||[]).length,k=p(),L=k.length||o,j=_===o,S=0===_,P=0===o,Z=0!==(e=_)&&(e===o||null),I=function(t,e){return 0!==t||e?e?f().createElement(f().Fragment,null,f().createElement(q.Spinner,{size:"sm"}),"     ".concat(t," selected")):"".concat(t," selected"):null}(_,y),F=function(){var t=(0,a.Z)(Q().mark((function t(){var e;return Q().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:e=t.sent,j?E():b(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,l.useEffect)((function(){b(s)}),[JSON.stringify(s)]),g?{selectedIds:w,selectNone:function(){return E()},tableProps:{onSelect:o>0?function(t,e,r,n){return e?x(n[v]):O(n[v])}:void 0,canSelectAll:!1},toolbarProps:{bulkSelect:{toggleProps:I?{children:[I]}:null,isDisabled:P,items:[{title:"Select none",onClick:function(){return E()},props:{isDisabled:S}}].concat((0,i.Z)(p?[{title:"Select page (".concat(L," items)"),onClick:function(){var t,e,r=(null==w?void 0:w.length)>0?(t=w,e=k,Array.from(new Set([].concat((0,i.Z)(t),(0,i.Z)(e))))):k;x(r,void 0,!0)}}]:[]),(0,i.Z)(h?[{title:"".concat((r=j,r?"Unselect":"Select")," all (").concat(o," items)"),onClick:F}]:[])),checked:Z,onSelect:(null==w?void 0:w.length)>0?E:F}}}:{}};var tt=r(54025);function et(){et=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function h(){}function p(){}function d(){}var v={};u(v,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(k([])));g&&g!==e&&r.call(g,i)&&(v=g);var m=d.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(i,a,c,u){var s=l(t[i],t,a);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"==(0,n.Z)(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=d,u(m,"constructor",d),u(d,"constructor",p),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},w(b.prototype),u(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(m),u(m,c,"Generator"),u(m,i,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function rt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function nt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?rt(Object(r),!0).forEach((function(e){(0,c.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):rt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var ot=function(t){var e,r,n=t.tableProps,g=t.rule,b=t.afterDisableFn,L=t.pathway,j=t.selectedTags,D=t.workloads,G=t.SID,A=t.permsExport,C=t.exportTable,M=t.showTags,R=(0,d.useStore)(),U=(0,N.Z)(),Y=(0,d.useDispatch)(),X=(0,l.useState)({limit:20,offset:0,sort:"-last_seen",name:""}),V=(0,u.Z)(X,2),J=V[0],z=V[1],H=(0,l.useState)(),K=(0,u.Z)(H,2),W=K[0],B=K[1],q=(0,l.useState)(0),Q=(0,u.Z)(q,2),rt=Q[0],ot=Q[1],it=(0,d.useSelector)((function(t){return t.entities||{}})),at=function(t){return Y((0,Z.addNotification)(t))},ct=(0,l.useState)(!1),ut=(0,u.Z)(ct,2),st=ut[0],lt=ut[1],ft=(0,l.useState)([]),ht=(0,u.Z)(ft,2),pt=ht[0],dt=ht[1],vt=(0,l.useState)({}),yt=(0,u.Z)(vt,2),gt=yt[0],mt=yt[1],wt=(0,l.useState)({}),bt=(0,u.Z)(wt,2),xt=bt[0],Ot=bt[1],Et=(0,l.useState)(),_t=(0,u.Z)(Et,2),kt=_t[0],Lt=_t[1],jt=(0,l.useState)(!1),St=(0,u.Z)(jt,2),Pt=St[0],Zt=St[1],It=(0,l.useState)(!0),Ft=(0,u.Z)(It,2),Nt=Ft[0],Tt=Ft[1],Dt=(0,l.useState)(-1),Gt=(0,u.Z)(Dt,2),At=Gt[0],Ct=Gt[1],Mt=(0,tt.useLoadModule)({appName:"inventory",scope:"inventory",module:"./OsFilterHelpers"}),Rt=(0,u.Z)(Mt,1)[0],Ut=(Rt=void 0===Rt?{}:Rt).toGroupSelectionValue,Yt=Rt.buildOSFilterConfig,Xt=(0,d.useSelector)((function(t){var e=t.entities;return(null==e?void 0:e.operatingSystems)||[]})),Vt=function(t,e,r,n,o,i,c,u,s){return function(){var c=(0,a.Z)(y().mark((function a(c,l,f,h){var d,v,g,b,x,O,E,_,k,L,j,S,P,Z,I,F,N,T;return y().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return O=l.per_page,E=l.page,_=l.orderBy,k=l.orderDirection,L=l.advisorFilters,j=l.filters,S=l.workloads,P=l.SID,Z="".concat("ASC"===k?"":"-").concat("updated"===_?"last_seen":_),I=m(m(m(m(m({},L),{},{limit:O,offset:E*O-O,sort:Z},(null==l||null===(d=l.filters)||void 0===d?void 0:d.hostnameOrId)&&!e&&{name:null==l||null===(v=l.filters)||void 0===v?void 0:v.hostnameOrId}),l.filters.hostnameOrId&&e&&{display_name:null==l||null===(g=l.filters)||void 0===g?void 0:g.hostnameOrId}),Array.isArray(L.rhel_version)&&{rhel_version:null===(b=L.rhel_version)||void 0===b?void 0:b.join(",")}),(null===(x=j.tagFilters)||void 0===x?void 0:x.length)&&(0,p.gh)(j.tagFilters)),S&&(I=m(m({},I),(0,p.s0)(S,P))),t(I),F=m(m({},l),{},{pathway:e,handleRefresh:t,rule:u}),i(F),s(m(m({},j),{},{sort:Z})),a.next=10,w(F);case 10:return N=a.sent,a.next=13,h(N.data.map((function(t){return t.system_uuid})),{page:E,per_page:O,hasItems:!0,fields:{system_profile:["operating_system"]}},f);case 13:return T=a.sent,r(N.data.map((function(t){return t.system_uuid}))),n(N.meta.count),a.abrupt("return",Promise.resolve({results:(0,p.E9)(N.data,T.results).map((function(t){return m(m({},t),{},{selected:null==o?void 0:o.includes(t.id)})})),total:N.meta.count}));case 17:case"end":return a.stop()}}),a)})));return function(t,e,r,n){return c.apply(this,arguments)}}()}((function(t){var e=t.name,r=t.display_name,n=nt(nt(nt({},t),e&&{name:e}),r&&{display_name:r});!L&&(0,p.Y4)(n,j)}),L,dt,ot,Kt,B,0,g,z),Jt=$({total:rt,onSelect:function(){},itemIdsInTable:x(W,rt,g,Lt),itemIdsOnPage:function(){return pt||[]},identitfier:"system_uuid",isLoading:kt}),zt=Jt.tableProps,Ht=Jt.toolbarProps,Kt=Jt.selectedIds,Wt=Jt.selectNone;(0,l.useEffect)((function(){Y({type:"SELECT_ENTITIES",payload:{selected:Kt}}),$t()}),[Kt]),(0,l.useEffect)((function(){L?Qt():qt()}),[]);var Bt,qt=function(){var t=(0,a.Z)(et().mark((function t(){var e,r;return et().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(At<0)){t.next=14;break}return t.next=3,(0,v.dX)("".concat(s.cJ).concat(encodeURI(g.rule_id),"/"),{},{name:J.name});case 3:if(t.t1=e=t.sent,t.t0=null===t.t1,t.t0){t.next=7;break}t.t0=void 0===e;case 7:if(!t.t0){t.next=11;break}t.t2=void 0,t.next=12;break;case 11:t.t2=e.data.playbook_count;case 12:r=t.t2,Ct(r);case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Qt=function(){var t=(0,a.Z)(et().mark((function t(){var e,r,n,o;return et().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Pt){t.next=29;break}if(!L){t.next=29;break}return t.next=4,(0,v.dX)("".concat(s._n,"/pathway/").concat(encodeURI(L.slug),"/rules/"),{},{});case 4:if(t.t1=e=t.sent,t.t0=null===t.t1,t.t0){t.next=8;break}t.t0=void 0===e;case 8:if(!t.t0){t.next=12;break}t.t2=void 0,t.next=13;break;case 12:t.t2=e.data.data;case 13:return n=t.t2,t.next=16,(0,v.dX)("".concat(s._n,"/pathway/").concat(encodeURI(L.slug),"/reports/"),{},{});case 16:if(t.t4=r=t.sent,t.t3=null===t.t4,t.t3){t.next=20;break}t.t3=void 0===r;case 20:if(!t.t3){t.next=24;break}t.t5=void 0,t.next=25;break;case 24:t.t5=r.data.rules;case 25:o=t.t5,Zt(!0),Ot(o),mt(n);case 29:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),$t=function(){var t=!1,e=Object.keys(xt);if((null==Kt?void 0:Kt.length)<=0||void 0===Kt)Tt(!0);else if(L)for(var r=function(r){var n=Kt[r];if(t)return"break";e.forEach((function(e){if(xt[e].includes(n)){var r=xt[e];if(gt.find((function(t){return t.rule_id=r})).resolution_set[0].has_playbook)return t=!0,Tt(!1)}}))},n=0;n<(null==Kt?void 0:Kt.length)&&"break"!==r(n);n++);else At>0&&(null==Kt?void 0:Kt.length)>0&&Tt(!1)},te=function(){var t=(0,a.Z)(et().mark((function t(){var e,r,n,o,i;return et().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!L){t.next=30;break}return t.next=3,(0,v.dX)("".concat(s._n,"/pathway/").concat(encodeURI(L.slug),"/rules/"),{},{});case 3:if(t.t1=e=t.sent,t.t0=null===t.t1,t.t0){t.next=7;break}t.t0=void 0===e;case 7:if(!t.t0){t.next=11;break}t.t2=void 0,t.next=12;break;case 11:t.t2=e.data.data;case 12:return n=t.t2,t.next=15,(0,v.dX)("".concat(s._n,"/pathway/").concat(encodeURI(L.slug),"/reports/"),{},{});case 15:if(t.t4=r=t.sent,t.t3=null===t.t4,t.t3){t.next=19;break}t.t3=void 0===r;case 19:if(!t.t3){t.next=23;break}t.t5=void 0,t.next=24;break;case 23:t.t5=r.data.rules;case 24:return o=t.t5,i=[],n.forEach((function(t){var e=[];o[t.rule_id].forEach((function(t){Kt.includes(t)&&e.push(t)})),e.length&&i.push({id:"advisor:".concat(t.rule_id),description:t.description,systems:e})})),t.abrupt("return",{issues:i});case 30:return t.abrupt("return",{issues:[{id:"advisor:".concat(g.rule_id),description:g.description}],systems:Kt});case 31:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ee=function(t){lt(t)},re=(0,l.useCallback)((function(t){var e=t.filter((function(t){return"updated"===t.key})),r=t.filter((function(t){return"display_name"===t.key})),n=t.filter((function(t){return"system_profile"===t.key})),o=t.filter((function(t){return"tags"===t.key}));r=nt(nt({},r[0]),{},{transforms:[h.sortable,h.wrappable],props:{isStatic:!0}},g?{renderFunc:function(t,e){return f().createElement(O.Link,{className:"pf-u-font-size-lg",to:"/recommendations/".concat(g.rule_id,"/").concat(e,"?activeRule=true")},t)}}:{}),e=nt(nt({},e[0]),{},{transforms:[h.sortable,h.wrappable],props:{width:20}}),n=nt(nt({},n[0]),{},{transforms:[h.wrappable],props:{isStatic:!0}});var i=[r,o=nt({},o[0]),n,e];if(!L){var a={key:"impacted_date",title:"First Impacted",sortKey:"impacted_date",transforms:[h.sortable,h.wrappable],props:{width:15},renderFunc:e.renderFunc};i.push(a),e.props.width=15}return i}),[L,g]),ne=function(t){var e=nt(nt({},J),{},{offset:0});delete e[t],z(e)},oe=(0,i.Z)(Yt?[Yt({label:s.Ut.rhel_version.title.toLowerCase(),type:s.Ut.rhel_version.type,id:s.Ut.rhel_version.urlParam,value:Ut(J.rhel_version||[]),onChange:function(t,e){return n=e,void((o=(r=s.Ut.rhel_version.urlParam)===s.Ut.rhel_version.urlParam?Object.values(n||{}).flatMap((function(t){return Object.keys(t)})):n).length>0?z(nt(nt({},J),{},{offset:0},(0,c.Z)({},r,o))):ne(r));var r,n,o}},Xt)]:[]),ie={deleteTitle:U.formatMessage(P.Z.resetFilters),filters:(Bt=nt({},J),delete Bt.sort,delete Bt.offset,delete Bt.limit,(0,p.yK)(Bt,s.Ut)),onDelete:function(t,e,r){r?z({sort:J.sort,limit:J.limit,offset:J.offset}):e.map((function(t){var e=(0,c.Z)({},t.urlParam,Array.isArray(J[t.urlParam])?J[t.urlParam].filter((function(e){return String(e)!==String(t.chips[0].value)})):"");e[t.urlParam].length>0?z(nt(nt({},J),e)):ne(t.urlParam)}))}};return f().createElement(f().Fragment,null,st&&f().createElement(E.Z,{handleModalToggle:ee,isModalOpen:st,rule:g,afterFn:b,hosts:Kt}),f().createElement(_.Z,(0,o.Z)({id:"tablesContainer",hasCheckbox:!0,initialLoading:!0,autoRefresh:!0,hideFilters:{all:!0,name:!1,tags:!M},filterConfig:{items:oe},activeFiltersConfig:ie,columns:function(t){return re(t)},tableProps:nt(nt({variant:h.TableVariant.compact},n),zt),customFilters:{advisorFilters:J,selectedTags:j,workloads:D,SID:G},showTags:M,getEntities:Vt,dedicatedAction:f().createElement(S.Z,{key:"remediation-button",isDisabled:Nt,dataProvider:te,onRemediationCreated:function(t){return function(t){Wt();try{t.remediation&&at(t.getNotification())}catch(t){at({variant:"danger",dismissable:!0,title:U.formatMessage(P.Z.error),description:"".concat(t)})}}(t)}},U.formatMessage(P.Z.remediate)),actionsConfig:{actions:["",{label:U.formatMessage(P.Z.disableRuleForSystems),props:{isDisabled:0===(Kt||[]).length},onClick:function(){return ee(!0)}}]}},Ht,{fallback:k.Z,onLoad:function(t){var e=t.mergeWithEntities,r=t.INVENTORY_ACTION_TYPES,n=t.mergeWithDetail;R.replaceReducer((0,F.U)(nt(nt({},e((0,I.V)([],r),{page:Number(J.offset/J.limit+1||1),perPage:Number(J.limit||20)})),n())))},exportConfig:A&&(r={label:U.formatMessage(P.Z.exportCsv)},(0,c.Z)(r,"label",U.formatMessage(P.Z.exportJson)),(0,c.Z)(r,"onSelect",(function(t,e){return(0,T.Z)(C,e,nt({rule_id:g.rule_id},J),j,D,G,Y)})),(0,c.Z)(r,"isDisabled",!A||0===(null==it||null===(e=it.rows)||void 0===e?void 0:e.length)),(0,c.Z)(r,"tooltipText",A?U.formatMessage(P.Z.exportData):U.formatMessage(P.Z.permsAction)),r)})))};ot.propTypes={tableProps:j().any,rule:j().object,afterDisableFn:j().func,pathway:j().object,selectedTags:j().any,workloads:j().any,SID:j().any,permsExport:j().bool,exportTable:j().string,showTags:j().bool};const it=ot},58392:()=>{},32857:()=>{}}]);