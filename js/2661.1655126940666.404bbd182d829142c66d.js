/*! For license information please see 2661.1655126940666.404bbd182d829142c66d.js.LICENSE.txt */
"use strict";(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[2661],{76341:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(2095),a=r(85962),o=r(21015),i=r(62965),l=r(93264),c=r.n(l),s=r(45697),u=function(e){var t=e.message;return c().createElement(c().Fragment,null,c().createElement(n.Card,{className:"adv-c-card-empty-rule"},c().createElement(o.CardHeader,null,c().createElement(i.ZP,{size:"lg"})),c().createElement(a.CardBody,null,t)))};const f=u;u.propTypes={message:r.n(s)().string}},95358:(e,t,r)=>{r.d(t,{Z:()=>Z});var n=r(71002),a=r(15861),o=r(70885),i=r(93264),l=r.n(i),c=r(17855),s=r(59303),u=r(6202),f=r(62410),d=r(71094),h=r(24561),m=r(78826),p=r(6234),y=r(45697),v=r.n(y),g=r(30893),b=r(71355),k=r(28216),E=r(77647),w=r(86896);function _(){_=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var a=t&&t.prototype instanceof d?t:d,o=Object.create(a.prototype),i=new Z(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return{value:void 0,done:!0}}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var l=E(i,r);if(l){if(l===f)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,i),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var f={};function d(){}function h(){}function m(){}var p={};c(p,o,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(W([])));v&&v!==t&&r.call(v,o)&&(p=v);var g=m.prototype=d.prototype=Object.create(p);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function a(o,i,l,c){var s=u(e[o],e,i);if("throw"!==s.type){var f=s.arg,d=f.value;return d&&"object"==(0,n.Z)(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){a("next",e,l,c)}),(function(e){a("throw",e,l,c)})):t.resolve(d).then((function(e){f.value=e,l(f)}),(function(e){return a("throw",e,l,c)}))}c(s.arg)}var o;this._invoke=function(e,r){function n(){return new t((function(t,n){a(e,r,t,n)}))}return o=o?o.then(n,n):n()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function Z(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function W(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:P}}function P(){return{value:void 0,done:!0}}return h.prototype=m,c(g,"constructor",m),c(m,"constructor",h),h.displayName=c(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,l,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(k.prototype),c(k.prototype,i,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new k(s(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),c(g,l,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=W,Z.prototype={constructor:Z,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:W(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}var x=function(e){var t=e.handleModalToggle,r=e.isModalOpen,n=e.rule,y=e.afterFn,v=(0,w.Z)(),x=(0,k.useDispatch)(),Z=[v.formatMessage(g.Z.systemName),v.formatMessage(g.Z.justificationNote),v.formatMessage(g.Z.dateDisabled),""],W=(0,i.useState)([]),P=(0,o.Z)(W,2),L=P[0],S=P[1],O=(0,i.useState)(!1),M=(0,o.Z)(O,2),T=M[0],C=M[1],j=(0,E.u7)({rule_id:n.rule_id,limit:n.hosts_acked_count}),N=j.data,F=void 0===N?[]:N,D=j.isFetching,A=j.isLoading,G=j.refetch,I=function(){var e=(0,a.Z)(_().mark((function e(r){return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.Sp)("".concat(s._n,"/hostack/").concat(r.id,"/"));case 3:G(),C(!0),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),t(!1),n={variant:"danger",dismissable:!0,title:v.formatMessage(g.Z.error),description:"".concat(e.t0)},x((0,b.addNotification)(n));case 11:case"end":return e.stop()}var n}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){var e=null==F?void 0:F.map((function(e){return{cells:[e.display_name||e.system_uuid,e.justification||v.formatMessage(g.Z.none),{title:l().createElement(f.Z,{date:new Date(e.updated_at),type:"onlyDate"})},{title:l().createElement(u.Button,{key:e.system_uuid,isInline:!0,variant:"link",onClick:function(){return I(e)}},l().createElement(p.ZP,{size:"sm"})," ".concat(v.formatMessage(g.Z.enable)))}]}}));A||0!==F.length||(y(),t(!1)),S(e)}),[F]),l().createElement(m.u_,{width:"75%",title:v.formatMessage(g.Z.hostAckModalTitle),isOpen:r,onClose:function(){T&&y(),t(!1)}},D?l().createElement(c.Table,{"aria-label":"host-ack-table",rows:[{cells:[{props:{colSpan:3},title:l().createElement(h.aV,null)}]}],cells:Z},l().createElement(c.TableHeader,null),l().createElement(c.TableBody,null)):l().createElement(c.Table,{"aria-label":"host-ack-table",rows:L,cells:Z},l().createElement(c.TableHeader,null),l().createElement(c.TableBody,null)))};x.propTypes={isModalOpen:v().bool,handleModalToggle:v().func,rule:v().object,afterFn:v().func},x.defaultProps={isModalOpen:!1,handleModalToggle:function(){},rule:{},afterFn:function(){}};const Z=x},82661:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ee});var n=r(71002),a=r(15861),o=r(42982),i=r(4942),l=r(70885),c=r(59303),s=r(75662),u=r(13877),f=r(93264),d=r.n(f),h=r(88292),m=r(17855),p=r(76004),y=r(97109),v=r(28216),g=r(61829),b=r(84785),k=r(6202),E=r(66584),w=r(62410),_=r(71094),x=r(44788),Z=r(76341),W=r(72729),P=r(46891),L=r(14748),S=r(7887),O=r(46926),M=r(87516),T=r(95358),C=r(71355),j=r(40609),N=r(58921),F=r(30893),D=r(28186),A=r(28672),G=r(75546),I=r(86896),R=r(43707),V=r(14938),B=r(45697),H=r.n(B),Y=r(52017),z=r(44012),q=r(34702),K=function(e){var t=e.filters,r=e.toggleRulesDisabled,n=U()[t.rule_status]||U().default;return d().createElement(q.Z,{icon:Y.CheckCircleIcon,iconClass:"ansibleCheck",title:n.title,text:n.body},"enabled"===t.rule_status&&d().createElement(V.Button,{variant:"link",style:{paddingTop:24},onClick:function(){return r("all")}},d().createElement(z.Z,{id:"rulestable.norulehits.adddisabledbutton"})))};K.propTypes={filters:H().object,toggleRulesDisabled:H().func};const J=K;var U=function(){var e=d().createElement(z.Z,{id:"rulestable.norulehits.title"});return{enabled:{title:e,body:d().createElement(d().Fragment,null,d().createElement(V.Text,null,d().createElement(z.Z,{id:"rulestable.norulehits.enabledrulesbody"})),d().createElement(V.Text,null,d().createElement(z.Z,{id:"rulestable.norulehits.enabledrulesbodysecondline"})))},disabled:{title:e,body:d().createElement(d().Fragment,null,d().createElement(V.Text,null,d().createElement(z.Z,{id:"rulestable.norules.disabledrulesbody"})),d().createElement(V.Text,null,d().createElement(z.Z,{id:"rulestable.norules.disabledrulesbodysecondline"})))},rhdisabled:{title:e,body:d().createElement(V.Text,null,d().createElement(z.Z,{id:"rulestable.norules.redhatdisabledrulesbody"}))},default:{title:e,body:d().createElement(V.Text,null,d().createElement(z.Z,{id:"noRecommendations"}))}}};function $(){$=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var a=t&&t.prototype instanceof d?t:d,o=Object.create(a.prototype),i=new x(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return{value:void 0,done:!0}}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var l=E(i,r);if(l){if(l===f)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,i),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var f={};function d(){}function h(){}function m(){}var p={};c(p,o,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(Z([])));v&&v!==t&&r.call(v,o)&&(p=v);var g=m.prototype=d.prototype=Object.create(p);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function a(o,i,l,c){var s=u(e[o],e,i);if("throw"!==s.type){var f=s.arg,d=f.value;return d&&"object"==(0,n.Z)(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){a("next",e,l,c)}),(function(e){a("throw",e,l,c)})):t.resolve(d).then((function(e){f.value=e,l(f)}),(function(e){return a("throw",e,l,c)}))}c(s.arg)}var o;this._invoke=function(e,r){function n(){return new t((function(t,n){a(e,r,t,n)}))}return o=o?o.then(n,n):n()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function Z(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:W}}function W(){return{value:void 0,done:!0}}return h.prototype=m,c(g,"constructor",m),c(m,"constructor",h),h.displayName=c(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,l,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(k.prototype),c(k.prototype,i,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new k(s(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),c(g,l,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=Z,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;_(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:Z(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const ee=function(){var e,t,r=(0,I.Z)(),n=(0,v.useDispatch)(),V=(0,s.useLocation)().search,B=(0,R.T)("advisor",c.Gd.export).hasAccess,H=(0,R.T)("advisor",c.Gd.disableRec).hasAccess,Y=(0,f.useState)([{title:r.formatMessage(F.Z.name),transforms:[m.sortable,(0,m.cellWidth)(40)]},{title:r.formatMessage(F.Z.modified),transforms:[m.sortable,(0,m.cellWidth)(10)]},{title:r.formatMessage(F.Z.category),transforms:[m.sortable,(0,m.cellWidth)(10)]},{title:r.formatMessage(F.Z.totalRisk),transforms:[m.sortable,(0,m.cellWidth)(15)]},{title:r.formatMessage(F.Z.riskOfChange),transforms:[m.sortable,(0,m.cellWidth)(15)]},{title:r.formatMessage(F.Z.systems),transforms:[m.sortable,(0,m.cellWidth)(15)]},{title:r.formatMessage(F.Z.remediation),transforms:[m.sortable,(0,m.cellWidth)(15),m.fitContent]}]),z=(0,l.Z)(Y,1)[0],q=(0,v.useSelector)((function(e){return e.filters.selectedTags})),K=(0,v.useSelector)((function(e){return e.filters.workloads})),U=(0,v.useSelector)((function(e){return e.filters.SID})),Q=(0,v.useSelector)((function(e){return e.filters.recState})),ee=(0,f.useState)([]),te=(0,l.Z)(ee,2),re=te[0],ne=te[1],ae=(0,f.useState)({}),oe=(0,l.Z)(ae,2),ie=oe[0],le=oe[1],ce=(0,f.useState)(!0),se=(0,l.Z)(ce,2),ue=se[0],fe=se[1],de=(0,f.useState)((null==Q?void 0:Q.text)||""),he=(0,l.Z)(de,2),me=he[0],pe=he[1],ye=(0,f.useState)(!1),ve=(0,l.Z)(ye,2),ge=ve[0],be=ve[1],ke=(0,f.useState)({}),Ee=(0,l.Z)(ke,2),we=Ee[0],_e=Ee[1],xe=(0,f.useState)(!1),Ze=(0,l.Z)(xe,2),We=Ze[0],Pe=Ze[1],Le=(0,f.useState)({}),Se=(0,l.Z)(Le,2),Oe=Se[0],Me=Se[1],Te=(0,f.useState)(!1),Ce=(0,l.Z)(Te,2),je=Ce[0],Ne=Ce[1],Fe=function(e){return n((0,C.addNotification)(e))},De=function(e){return n((0,A.hb)(e))},Ae={};(null==q?void 0:q.length)&&(Ae=X(X({},Ae),{tags:q.join(",")})),K&&(Ae=X(X({},Ae),(0,y.s0)(K,U)));var Ge=(0,G.Bs)(X(X({},(0,y.qW)(Q)),Ae)),Ie=Ge.data,Re=void 0===Ie?[]:Ie,Ve=Ge.isFetching,Be=Ge.isLoading,He=Ge.isError,Ye=Ge.refetch,ze=(0,j.Z)(me,c.$x),qe=(null==Re||null===(e=Re.meta)||void 0===e?void 0:e.count)||0,Ke={1:"description",2:"publish_date",3:"category",4:"total_risk",5:"resolution_risk",6:"impacted_count",7:"playbook_count"};(0,f.useEffect)((function(){ue||null===q||(0,y.Y4)(Q,q)}),[Q,q,K,U]);var Je=function(e){var t=e*Q.limit-Q.limit;De(X(X({},Q),{},{offset:t}))},Ue=function(e){De(X(X({},Q),{},{rule_status:e,offset:0},"enabled"!==e&&{impacting:["false"]}))},$e=function(){var e=(0,a.Z)($().mark((function e(t){var n;return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=re[t].rule,e.prev=1,"enabled"!==n.rule_status){e.next=7;break}_e(n),be(!0),e.next=17;break;case 7:return e.prev=7,e.next=10,(0,_.Sp)("".concat(c._n,"/ack/").concat(n.rule_id,"/"));case 10:Fe({variant:"success",timeout:!0,dismissable:!0,title:r.formatMessage(F.Z.recSuccessfullyEnabled)}),Ye(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),Fe({variant:"danger",dismissable:!0,title:r.formatMessage(F.Z.error),description:"".concat(e.t0)});case 17:e.next=22;break;case 19:e.prev=19,e.t1=e.catch(1),Fe({variant:"danger",dismissable:!0,title:"enabled"===n.rule_status?r.formatMessage(F.Z.rulesTableHideReportsErrorDisabled):r.formatMessage(F.Z.rulesTableHideReportsErrorEnabled),description:"".concat(e.t1)});case 22:case"end":return e.stop()}}),e,null,[[1,19],[7,14]])})));return function(t){return e.apply(this,arguments)}}();(0,f.useEffect)((function(){if(V&&ue){var e=(0,y.yG)();delete e.tags,void 0===e.text?pe(""):pe(e.text),e.sort=void 0===e.sort?"-total_risk":e.sort[0],void 0!==e.has_playbook&&!Array.isArray(e.has_playbook)&&(e.has_playbook=["".concat(e.has_playbook)]),void 0!==e.incident&&!Array.isArray(e.incident)&&(e.incident=["".concat(e.incident)]),void 0===e.offset?e.offset=0:e.offset=Number(e.offset[0]),void 0===e.limit?e.limit=20:e.limit=Number(e.limit[0]),void 0!==e.reboot&&!Array.isArray(e.reboot)&&(e.reboot=["".concat(e.reboot)]),void 0!==e.impacting&&!Array.isArray(e.impacting)&&(e.impacting=["".concat(e.impacting)]),De(X(X({},Q),e))}fe(!1)}),[]),(0,f.useEffect)((function(){var e,t=null===(e=Object.entries(Ke))||void 0===e?void 0:e.find((function(e){return e[1]===Q.sort||"-".concat(e[1])===Q.sort}));if(void 0!==Q.sort&&t){var r="-"===Q.sort[0]?"desc":"asc";le({index:Number(t[0]),direction:r})}}),[Q.sort]),(0,f.useEffect)((function(){if(Re.data)if(0===Re.data.length)ne(function(e,t){return[{cells:[{title:d().createElement(J,{filters:e,toggleRulesDisabled:t}),props:{colSpan:6}}]}]}(Q,Ue));else{var e=Re.data.flatMap((function(e,t){return[{isOpen:je,rule:e,cells:[{title:d().createElement("span",{key:t},d().createElement(s.Link,{key:t,to:"/recommendations/".concat(e.rule_id)}," ",e.description," "),d().createElement(M.Z,{rule:e,isCompact:!0}))},{title:d().createElement(w.Z,{key:t,date:e.publish_date,variant:"relative"})},{title:d().createElement(E.Z,{key:t,labelList:[e.category],isCompact:!0})},{title:d().createElement("div",{key:t},d().createElement(p.Tooltip,{key:t,position:p.TooltipPosition.bottom,content:r.formatMessage(F.Z.rulesDetailsTotalRiskBody,{risk:c.Nq[e.total_risk]||r.formatMessage(F.Z.undefined),strong:function(e){return(0,D.fK)(e)}})},d().createElement(W.Z,{value:e.total_risk,isCompact:!0})))},{title:d().createElement("div",{key:t},d().createElement(W.Z,{text:c.MS[(0,y.EW)(e)],value:(0,y.EW)(e),hideIcon:!0,isCompact:!0}),d().createElement("div",null))},{title:"rhdisabled"===e.rule_status?d().createElement(p.Tooltip,{content:r.formatMessage(F.Z.byEnabling,{systems:e.impacted_systems_count})},d().createElement("span",null,r.formatMessage(F.Z.nA))):d().createElement("div",{key:t},"".concat(e.impacted_systems_count.toLocaleString()))},{title:d().createElement("div",{className:"ins-c-center-text ",key:t},e.playbook_count?d().createElement("span",null,d().createElement(g.ZP,{size:"sm"})," ",r.formatMessage(F.Z.playbook)):r.formatMessage(F.Z.manual))}]},{parent:2*t,fullWidth:!0,cells:[{title:d().createElement(L.Z,{className:"pf-m-light"},d().createElement(h.Stack,{hasGutter:!0},e.hosts_acked_count?d().createElement(h.StackItem,null,d().createElement(b.ZP,{size:"sm"})," ",e.hosts_acked_count&&!e.impacted_systems_count?r.formatMessage(F.Z.ruleIsDisabledForAllSystems):r.formatMessage(F.Z.ruleIsDisabledForSystemsBody,{systems:e.hosts_acked_count})," "," ",d().createElement(k.Button,{isInline:!0,variant:"link",ouiaId:"viewSystem",onClick:function(){Me(e),Pe(!0)}},r.formatMessage(F.Z.viewSystems))):d().createElement(d().Fragment,null),d().createElement(O.Ii,{messages:(0,D.k5)(r,O.TO,(0,D.jL)(r,e)),product:O.D1.rhel,rule:e,resolutionRisk:(0,y.EW)(e),resolutionRiskDesc:c.wY[(0,y.EW)(e)],isDetailsPage:!1,showViewAffected:!0,linkComponent:s.Link,knowledgebaseUrl:"https://access.redhat.com/node/".concat(e.node_id)})))}]}]}));ne(e)}}),[Re]),(0,f.useEffect)((function(){if(!ue&&!Be){var e=X({},Q),t=me.length?{text:me}:{};delete e.text,De(X(X(X({},e),t),{},{offset:0}))}}),[ze]);var Qe,Xe=function(e){var t=X(X({},Q),{},{offset:0});"text"===e&&pe(""),delete t[e],De(t)},et=function(e,t){t.length>0?De(X(X({},Q),{},{offset:0},(0,i.Z)({},e,t))):Xe(e)},tt=[{label:r.formatMessage(F.Z.name).toLowerCase(),filterValues:{key:"text-filter",onChange:function(e,t){return pe(t)},value:me,placeholder:r.formatMessage(F.Z.filterBy)}},{label:c.W2.total_risk.title,type:c.W2.total_risk.type,id:c.W2.total_risk.urlParam,value:"checkbox-".concat(c.W2.total_risk.urlParam),filterValues:{key:"".concat(c.W2.total_risk.urlParam,"-filter"),onChange:function(e,t){return et(c.W2.total_risk.urlParam,t)},value:Q.total_risk,items:c.W2.total_risk.values}},{label:c.W2.res_risk.title,type:c.W2.res_risk.type,id:c.W2.res_risk.urlParam,value:"checkbox-".concat(c.W2.res_risk.urlParam),filterValues:{key:"".concat(c.W2.res_risk.urlParam,"-filter"),onChange:function(e,t){return et(c.W2.res_risk.urlParam,t)},value:Q.res_risk,items:c.W2.res_risk.values}},{label:c.W2.impact.title,type:c.W2.impact.type,id:c.W2.impact.urlParam,value:"checkbox-".concat(c.W2.impact.urlParam),filterValues:{key:"".concat(c.W2.impact.urlParam,"-filter"),onChange:function(e,t){return et(c.W2.impact.urlParam,t)},value:Q.impact,items:c.W2.impact.values}},{label:c.W2.likelihood.title,type:c.W2.likelihood.type,id:c.W2.likelihood.urlParam,value:"checkbox-".concat(c.W2.likelihood.urlParam),filterValues:{key:"".concat(c.W2.likelihood.urlParam,"-filter"),onChange:function(e,t){return et(c.W2.likelihood.urlParam,t)},value:Q.likelihood,items:c.W2.likelihood.values}},{label:c.W2.category.title,type:c.W2.category.type,id:c.W2.category.urlParam,value:"checkbox-".concat(c.W2.category.urlParam),filterValues:{key:"".concat(c.W2.category.urlParam,"-filter"),onChange:function(e,t){return et(c.W2.category.urlParam,t)},value:Q.category,items:c.W2.category.values}},{label:c.W2.incident.title,type:c.W2.incident.type,id:c.W2.incident.urlParam,value:"checkbox-".concat(c.W2.incident.urlParam),filterValues:{key:"".concat(c.W2.incident.urlParam,"-filter"),onChange:function(e,t){return et(c.W2.incident.urlParam,t)},value:Q.incident,items:c.W2.incident.values}},{label:c.W2.has_playbook.title,type:c.W2.has_playbook.type,id:c.W2.has_playbook.urlParam,value:"checkbox-".concat(c.W2.has_playbook.urlParam),filterValues:{key:"".concat(c.W2.has_playbook.urlParam,"-filter"),onChange:function(e,t){return et(c.W2.has_playbook.urlParam,t)},value:Q.has_playbook,items:c.W2.has_playbook.values}},{label:c.W2.reboot.title,type:c.W2.reboot.type,id:c.W2.reboot.urlParam,value:"checkbox-".concat(c.W2.reboot.urlParam),filterValues:{key:"".concat(c.W2.reboot.urlParam,"-filter"),onChange:function(e,t){return et(c.W2.reboot.urlParam,t)},value:Q.reboot,items:c.W2.reboot.values}},{label:c.W2.rule_status.title,type:c.W2.rule_status.type,id:c.W2.rule_status.urlParam,value:"radio-".concat(c.W2.rule_status.urlParam),filterValues:{key:"".concat(c.W2.rule_status.urlParam,"-filter"),onChange:function(e,t){return Ue(t)},value:"".concat(Q.rule_status),items:c.W2.rule_status.values}},{label:c.W2.impacting.title,type:c.W2.impacting.type,id:c.W2.impacting.urlParam,value:"checkbox-".concat(c.W2.impacting.urlParam),filterValues:{key:"".concat(c.W2.impacting.urlParam,"-filter"),onChange:function(e,t){return et(c.W2.impacting.urlParam,t)},value:Q.impacting,items:c.W2.impacting.values}}],rt={deleteTitle:r.formatMessage(F.Z.resetFilters),filters:(Qe=X({},Q),delete Qe.topic,delete Qe.sort,delete Qe.offset,delete Qe.limit,(0,y.yK)(Qe,c.W2)),showDeleteButton:!0,onDelete:function(e,t,r){r?(pe(""),De(X(X({},Q.topic&&{topic:Q.topic}),{},{impacting:["true"],rule_status:"enabled",limit:Q.limit,offset:Q.offset,pathway:Q.pathway}))):t.map((function(e){var t=(0,i.Z)({},e.urlParam,Array.isArray(Q[e.urlParam])?Q[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?De(X(X({},Q),t)):Xe(e.urlParam)}))}};return d().createElement(d().Fragment,null,We&&d().createElement(T.Z,{handleModalToggle:function(e){return Pe(e)},isModalOpen:We,afterFn:function(){Ye()},rule:Oe}),ge&&d().createElement(x.Z,{handleModalToggle:be,isModalOpen:ge,rule:we,afterFn:Ye}),d().createElement(S.Z,{expandAll:{isAllExpanded:je,onClick:function(e,t){var r=(0,o.Z)(re);Ne(t),r.map((function(e,n){Object.prototype.hasOwnProperty.call(e,"isOpen")&&(r[n]=X(X({},e),{},{isOpen:t}))})),ne(r)}},pagination:{itemCount:qe,page:Q.offset/Q.limit+1,perPage:Number(Q.limit),onSetPage:function(e,t){Je(t)},onPerPageSelect:function(e,t){De(X(X({},Q),{},{limit:t,offset:0}))},isCompact:!0},exportConfig:(t={label:r.formatMessage(F.Z.exportCsv)},(0,i.Z)(t,"label",r.formatMessage(F.Z.exportJson)),(0,i.Z)(t,"onSelect",(function(e,t){return(0,N.Z)("hits",t,Q,q,K,U,n)})),(0,i.Z)(t,"isDisabled",!B),(0,i.Z)(t,"tooltipText",B?r.formatMessage(F.Z.exportData):r.formatMessage(F.Z.permsAction)),t),filterConfig:{items:tt},activeFiltersConfig:rt}),Ve?d().createElement(P.Z,null):He?d().createElement(Z.Z,{message:r.formatMessage(F.Z.rulesTableFetchRulesError)}):d().createElement(m.Table,{"aria-label":"rule-table",variant:m.TableVariant.compact,actionResolver:function(e,t){var n=t.rowIndex,a=re[n].rule?re[n].rule:null;return n%2==0&&a?a&&"enabled"===a.rule_status?[{title:r.formatMessage(F.Z.disableRule),onClick:function(e,t){return $e(t)}}]:[{title:r.formatMessage(F.Z.enableRule),onClick:function(e,t){return $e(t)}}]:null},onCollapse:function(e,t,r){var n=(0,o.Z)(re);n[t]=X(X({},n[t]),{},{isOpen:r}),ne(n)},sortBy:ie,onSort:function(e,t,r){var n="".concat("asc"===r?"":"-").concat(Ke[t]);le({index:t,direction:r}),De(X(X({},Q),{},{sort:n,offset:0}))},cells:z,rows:re,areActionsDisabled:function(){return!H},isStickyHeader:!0},d().createElement(m.TableHeader,null),d().createElement(m.TableBody,null)),d().createElement(u.tl,{ouiaId:"page",itemCount:qe,page:Q.offset/Q.limit+1,perPage:Number(Q.limit),onSetPage:function(e,t){Je(t)},onPerPageSelect:function(e,t){De(X(X({},Q),{},{limit:t,offset:0}))},widgetId:"pagination-options-menu-bottom",variant:u.aM.bottom}))}},40609:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(70885),a=r(93264);const o=function(e,t){var r=(0,a.useState)(e),o=(0,n.Z)(r,2),i=o[0],l=o[1];return(0,a.useEffect)((function(){var r=setTimeout((function(){l(e)}),t);return function(){clearTimeout(r)}}),[t,e]),i}}}]);
//# sourceMappingURL=../sourcemaps/2661.7e3182f26df25d47be7c9faa9580579c.js.map