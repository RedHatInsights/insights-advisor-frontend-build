(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[1515],{94500:function(e,t,r){!function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function n(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,r){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function i(e,t){i.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function a(e,t){a.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function c(e,t,r){c.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function u(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function s(e){var t=void 0===e?"undefined":S(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,n,f,p,h){h=h||[];var d=(f=f||[]).slice(0);if(void 0!==p){if(n){if("function"==typeof n&&n(d,p))return;if("object"===(void 0===n?"undefined":S(n))){if(n.prefilter&&n.prefilter(d,p))return;if(n.normalize){var g=n.normalize(d,p,e,t);g&&(e=g[0],t=g[1])}}}d.push(p)}"regexp"===s(e)&&"regexp"===s(t)&&(e=e.toString(),t=t.toString());var v=void 0===e?"undefined":S(e),y=void 0===t?"undefined":S(t),b="undefined"!==v||h&&h[h.length-1].lhs&&h[h.length-1].lhs.hasOwnProperty(p),m="undefined"!==y||h&&h[h.length-1].rhs&&h[h.length-1].rhs.hasOwnProperty(p);if(!b&&m)r(new i(d,t));else if(!m&&b)r(new a(d,e));else if(s(e)!==s(t))r(new o(d,e,t));else if("date"===s(e)&&e-t!=0)r(new o(d,e,t));else if("object"===v&&null!==e&&null!==t)if(h.filter((function(t){return t.lhs===e})).length)e!==t&&r(new o(d,e,t));else{if(h.push({lhs:e,rhs:t}),Array.isArray(e)){var w;for(e.length,w=0;w<e.length;w++)w>=t.length?r(new c(d,w,new a(void 0,e[w]))):l(e[w],t[w],r,n,d,w,h);for(;w<t.length;)r(new c(d,w,new i(void 0,t[w++])))}else{var j=Object.keys(e),O=Object.keys(t);j.forEach((function(o,i){var a=O.indexOf(o);a>=0?(l(e[o],t[o],r,n,d,o,h),O=u(O,a)):l(e[o],void 0,r,n,d,o,h)})),O.forEach((function(e){l(void 0,t[e],r,n,d,e,h)}))}h.length=h.length-1}else e!==t&&("number"===v&&isNaN(e)&&isNaN(t)||r(new o(d,e,t)))}function f(e,t,r,n){return n=n||[],l(e,t,(function(e){e&&n.push(e)}),r),n.length?n:void 0}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e=u(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function h(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)void 0===n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":p(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function d(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":d(o[r.path[n]],r.index,r.item);break;case"D":case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":d(e[t],r.index,r.item);break;case"D":case"E":e[t]=r.lhs;break;case"N":e=u(e,t)}return e}function g(e){return"color: "+E[e].color+"; font-weight: bold"}function v(e,t,r,n){var o=f(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach((function(e){var t=e.kind,n=function(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}(e);r.log.apply(r,["%c "+E[t].text,g(t)].concat(k(n)))})):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function y(e,t,r,n){switch(void 0===e?"undefined":S(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,k(r)):e[n];case"function":return e(t);default:return e}}function b(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?function(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}(t):o,a=t.collapsed,c=t.colors,u=t.level,s=t.diff,l=void 0===t.titleFormatter;e.forEach((function(o,f){var p=o.started,h=o.startedTime,d=o.action,g=o.prevState,b=o.error,m=o.took,w=o.nextState,j=e[f+1];j&&(w=j.prevState,m=j.started-p);var O=n(d),x="function"==typeof a?a((function(){return w}),d,o):a,S=A(h),k=c.title?"color: "+c.title(O)+";":"",D=["color: gray; font-weight: lighter;"];D.push(k),t.timestamp&&D.push("color: gray; font-weight: lighter;"),t.duration&&D.push("color: gray; font-weight: lighter;");var E=i(O,S,m);try{x?c.title&&l?r.groupCollapsed.apply(r,["%c "+E].concat(D)):r.groupCollapsed(E):c.title&&l?r.group.apply(r,["%c "+E].concat(D)):r.group(E)}catch(e){r.log(E)}var P=y(u,O,[g],"prevState"),T=y(u,O,[O],"action"),_=y(u,O,[b,g],"error"),C=y(u,O,[w],"nextState");if(P)if(c.prevState){var I="color: "+c.prevState(g)+"; font-weight: bold";r[P]("%c prev state",I,g)}else r[P]("prev state",g);if(T)if(c.action){var M="color: "+c.action(O)+"; font-weight: bold";r[T]("%c action    ",M,O)}else r[T]("action    ",O);if(b&&_)if(c.error){var N="color: "+c.error(b,g)+"; font-weight: bold;";r[_]("%c error     ",N,b)}else r[_]("error     ",b);if(C)if(c.nextState){var F="color: "+c.nextState(w)+"; font-weight: bold";r[C]("%c next state",F,w)}else r[C]("next state",w);s&&v(g,w,r,x);try{r.groupEnd()}catch(e){r.log("—— log end ——")}}))}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},P,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,c=t.diffPredicate;if(void 0===r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(s){if("function"==typeof i&&!i(r,s))return e(s);var l={};u.push(l),l.started=x.now(),l.startedTime=new Date,l.prevState=n(r()),l.action=s;var f=void 0;if(a)try{f=e(s)}catch(e){l.error=o(e)}else f=e(s);l.took=x.now()-l.started,l.nextState=n(r());var p=t.diff&&"function"==typeof c?c(r,s):t.diff;if(b(u,Object.assign({},t,{diff:p})),u.length=0,l.error)throw l.error;return f}}}}var w,j,O=function(e,t){return function(e,t){return new Array(t+1).join(e)}("0",t-e.toString().length)+e},A=function(e){return O(e.getHours(),2)+":"+O(e.getMinutes(),2)+":"+O(e.getSeconds(),2)+"."+O(e.getMilliseconds(),3)},x="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},D=[];w="object"===(void 0===r.g?"undefined":S(r.g))&&r.g?r.g:"undefined"!=typeof window?window:{},(j=w.DeepDiff)&&D.push((function(){void 0!==j&&w.DeepDiff===f&&(w.DeepDiff=j,j=void 0)})),t(o,n),t(i,n),t(a,n),t(c,n),Object.defineProperties(f,{diff:{value:f,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:function(e,t,r){e&&t&&l(e,t,(function(n){r&&!r(e,t,n)||h(e,t,n)}))},enumerable:!0},applyChange:{value:h,enumerable:!0},revertChange:{value:function(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)void 0===i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":d(i[r.path[n]],r.index,r.item);break;case"D":case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}},enumerable:!0},isConflict:{value:function(){return void 0!==j},enumerable:!0},noConflict:{value:function(){return D&&(D.forEach((function(e){e()})),D=null),f},enumerable:!0}});var E={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},P={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?m()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=P,e.createLogger=m,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})}(t)},33042:(e,t,r)=>{var n;!function(){"use strict";var o=function e(t){var r,n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element"),o={use_static:!1};function i(e){var t=Object.getPrototypeOf(e);return t?Object.create(t):{}}function a(e,t,r){Object.defineProperty(e,t,{enumerable:!1,configurable:!1,writable:!1,value:r})}function c(e,t){a(e,t,(function(){throw new v("The "+t+" method cannot be invoked on an Immutable data structure.")}))}"object"!=typeof(r=t)||Array.isArray(r)||null===r||void 0!==t.use_static&&(o.use_static=Boolean(t.use_static));var u="__immutable_invariants_hold";function s(e){return"object"!=typeof e||null===e||Boolean(Object.getOwnPropertyDescriptor(e,u))}function l(e,t){return e===t||e!=e&&t!=t}function f(e){return!(null===e||"object"!=typeof e||Array.isArray(e)||e instanceof Date)}var p=["setPrototypeOf"],h=p.concat(["push","pop","sort","splice","shift","unshift","reverse"]),d=["keys"].concat(["map","filter","slice","concat","reduce","reduceRight"]),g=p.concat(["setDate","setFullYear","setHours","setMilliseconds","setMinutes","setMonth","setSeconds","setTime","setUTCDate","setUTCFullYear","setUTCHours","setUTCMilliseconds","setUTCMinutes","setUTCMonth","setUTCSeconds","setYear"]);function v(e){this.name="MyError",this.message=e,this.stack=(new Error).stack}function y(e,t){for(var r in a(e,u,!0),t)t.hasOwnProperty(r)&&c(e,t[r]);return Object.freeze(e),e}function b(e,t){var r=e[t];a(e,t,(function(){return G(r.apply(e,arguments))}))}function m(e,t,r){var n=r&&r.deep;if(e in this&&(n&&this[e]!==t&&f(t)&&f(this[e])&&(t=G.merge(this[e],t,{deep:!0,mode:"replace"})),l(this[e],t)))return this;var o=k.call(this);return o[e]=G(t),O(o)}v.prototype=new Error,v.prototype.constructor=Error;var w=G([]);function j(e,t,r){var n=e[0];if(1===e.length)return m.call(this,n,t,r);var o,i=e.slice(1),a=this[n];if("object"==typeof a&&null!==a)o=G.setIn(a,i,t);else{var c=i[0];o=""!==c&&isFinite(c)?j.call(w,i,t):F.call(N,i,t)}if(n in this&&a===o)return this;var u=k.call(this);return u[n]=o,O(u)}function O(e){for(var t in d)d.hasOwnProperty(t)&&b(e,d[t]);o.use_static||(a(e,"flatMap",x),a(e,"asObject",D),a(e,"asMutable",k),a(e,"set",m),a(e,"setIn",j),a(e,"update",U),a(e,"updateIn",B),a(e,"getIn",R));for(var r=0,n=e.length;r<n;r++)e[r]=G(e[r]);return y(e,h)}function A(){return new Date(this.getTime())}function x(e){if(0===arguments.length)return this;var t,r=[],n=this.length;for(t=0;t<n;t++){var o=e(this[t],t,this);Array.isArray(o)?r.push.apply(r,o):r.push(o)}return O(r)}function S(e){if(void 0===e&&0===arguments.length)return this;if("function"!=typeof e){var t=Array.isArray(e)?e.slice():Array.prototype.slice.call(arguments);t.forEach((function(e,t,r){"number"==typeof e&&(r[t]=e.toString())})),e=function(e,r){return-1!==t.indexOf(r)}}var r=i(this);for(var n in this)this.hasOwnProperty(n)&&!1===e(this[n],n)&&(r[n]=this[n]);return $(r)}function k(e){var t,r,n=[];if(e&&e.deep)for(t=0,r=this.length;t<r;t++)n.push(E(this[t]));else for(t=0,r=this.length;t<r;t++)n.push(this[t]);return n}function D(e){"function"!=typeof e&&(e=function(e){return e});var t,r={},n=this.length;for(t=0;t<n;t++){var o=e(this[t],t,this),i=o[0],a=o[1];r[i]=a}return $(r)}function E(e){return!e||"object"!=typeof e||!Object.getOwnPropertyDescriptor(e,u)||e instanceof Date?e:G.asMutable(e,{deep:!0})}function P(e,t){for(var r in e)Object.getOwnPropertyDescriptor(e,r)&&(t[r]=e[r]);return t}function T(e,t){if(0===arguments.length)return this;if(null===e||"object"!=typeof e)throw new TypeError("Immutable#merge can only be invoked with objects or arrays, not "+JSON.stringify(e));var r,n,o=Array.isArray(e),a=t&&t.deep,c=t&&t.mode||"merge",u=t&&t.merger;function s(e,n,o){var c,s=G(n[o]),p=u&&u(e[o],s,t),h=e[o];void 0===r&&void 0===p&&e.hasOwnProperty(o)&&l(s,h)||l(h,c=void 0!==p?p:a&&f(h)&&f(s)?G.merge(h,s,t):s)&&e.hasOwnProperty(o)||(void 0===r&&(r=P(e,i(e))),r[o]=c)}function p(e,t){for(var n in e)t.hasOwnProperty(n)||(void 0===r&&(r=P(e,i(e))),delete r[n])}if(o)for(var h=0,d=e.length;h<d;h++){var g=e[h];for(n in g)g.hasOwnProperty(n)&&s(void 0!==r?r:this,g,n)}else{for(n in e)Object.getOwnPropertyDescriptor(e,n)&&s(this,e,n);"replace"===c&&p(this,e)}return void 0===r?this:$(r)}function _(e,t){var r=t&&t.deep;if(0===arguments.length)return this;if(null===e||"object"!=typeof e)throw new TypeError("Immutable#replace can only be invoked with objects or arrays, not "+JSON.stringify(e));return G.merge(this,e,{deep:r,mode:"replace"})}var C,I,M,N=G({});function F(e,t,r){if(!Array.isArray(e)||0===e.length)throw new TypeError('The first argument to Immutable#setIn must be an array containing at least one "key" string.');var n=e[0];if(1===e.length)return L.call(this,n,t,r);var o,a=e.slice(1),c=this[n];if(o=this.hasOwnProperty(n)&&"object"==typeof c&&null!==c?G.setIn(c,a,t):F.call(N,a,t),this.hasOwnProperty(n)&&c===o)return this;var u=P(this,i(this));return u[n]=o,$(u)}function L(e,t,r){var n=r&&r.deep;if(this.hasOwnProperty(e)&&(n&&this[e]!==t&&f(t)&&f(this[e])&&(t=G.merge(this[e],t,{deep:!0,mode:"replace"})),l(this[e],t)))return this;var o=P(this,i(this));return o[e]=G(t),$(o)}function U(e,t){var r=Array.prototype.slice.call(arguments,2),n=this[e];return G.set(this,e,t.apply(n,[n].concat(r)))}function H(e,t){for(var r=0,n=t.length;null!=e&&r<n;r++)e=e[t[r]];return r&&r==n?e:void 0}function B(e,t){var r=Array.prototype.slice.call(arguments,2),n=H(this,e);return G.setIn(this,e,t.apply(n,[n].concat(r)))}function R(e,t){var r=H(this,e);return void 0===r?t:r}function z(e){var t,r=i(this);if(e&&e.deep)for(t in this)this.hasOwnProperty(t)&&(r[t]=E(this[t]));else for(t in this)this.hasOwnProperty(t)&&(r[t]=this[t]);return r}function Y(){return{}}function $(e){return o.use_static||(a(e,"merge",T),a(e,"replace",_),a(e,"without",S),a(e,"asMutable",z),a(e,"set",L),a(e,"setIn",F),a(e,"update",U),a(e,"updateIn",B),a(e,"getIn",R)),y(e,p)}function G(e,t,r){if(s(e)||function(e){return"object"==typeof e&&null!==e&&(60103===e.$$typeof||e.$$typeof===n)}(e)||function(e){return"undefined"!=typeof File&&e instanceof File}(e)||function(e){return"undefined"!=typeof Blob&&e instanceof Blob}(e)||function(e){return e instanceof Error}(e))return e;if(function(e){return"object"==typeof e&&"function"==typeof e.then}(e))return e.then(G);if(Array.isArray(e))return O(e.slice());if(e instanceof Date)return i=new Date(e.getTime()),o.use_static||a(i,"asMutable",A),y(i,g);var i,c=t&&t.prototype,u=(c&&c!==Object.prototype?function(){return Object.create(c)}:Y)();if(null==r&&(r=64),r<=0)throw new v("Attempt to construct Immutable from a deeply nested object was detected. Have you tried to wrap an object with circular references (e.g. React element)? See https://github.com/rtfeldman/seamless-immutable/wiki/Deeply-nested-object-was-detected for details.");for(var l in r-=1,e)Object.getOwnPropertyDescriptor(e,l)&&(u[l]=G(e[l],void 0,r));return $(u)}function J(e){return function(){var t=[].slice.call(arguments),r=t.shift();return e.apply(r,t)}}function K(e,t){return function(){var r=[].slice.call(arguments),n=r.shift();return Array.isArray(n)?t.apply(n,r):e.apply(n,r)}}return G.from=G,G.isImmutable=s,G.ImmutableError=v,G.merge=J(T),G.replace=J(_),G.without=J(S),G.asMutable=(C=z,I=k,M=A,function(){var e=[].slice.call(arguments),t=e.shift();return Array.isArray(t)?I.apply(t,e):t instanceof Date?M.apply(t,e):C.apply(t,e)}),G.set=K(L,m),G.setIn=K(F,j),G.update=J(U),G.updateIn=J(B),G.getIn=J(R),G.flatMap=J(x),G.asObject=J(D),o.use_static||(G.static=e({use_static:!0})),Object.freeze(G),G}();void 0===(n=function(){return o}.call(t,r,t,e))||(e.exports=n)}()}}]);
//# sourceMappingURL=../sourcemaps/1515.b275cc60a41889ece163.js.map