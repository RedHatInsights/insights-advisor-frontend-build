"use strict";(self.webpackChunkadvisor=self.webpackChunkadvisor||[]).push([[8178],{95957:(e,t,r)=>{function n(e,t){var r=t&&t.cache?t.cache:l,n=t&&t.serializer?t.serializer:u;return(t&&t.strategy?t.strategy:o)(e,{cache:r,serializer:n})}function a(e,t,r,n){var a,c=null==(a=n)||"number"==typeof a||"boolean"==typeof a?n:r(n),i=t.get(c);return void 0===i&&(i=e.call(this,n),t.set(c,i)),i}function c(e,t,r){var n=Array.prototype.slice.call(arguments,3),a=r(n),c=t.get(a);return void 0===c&&(c=e.apply(this,n),t.set(a,c)),c}function i(e,t,r,n,a){return r.bind(t,e,n,a)}function o(e,t){return i(e,this,1===e.length?a:c,t.cache.create(),t.serializer)}r.d(t,{A:()=>f,Z:()=>n});var u=function(){return JSON.stringify(arguments)};function s(){this.cache=Object.create(null)}s.prototype.get=function(e){return this.cache[e]},s.prototype.set=function(e,t){this.cache[e]=t};var l={create:function(){return new s}},f={variadic:function(e,t){return i(e,this,c,t.cache.create(),t.serializer)},monadic:function(e,t){return i(e,this,a,t.cache.create(),t.serializer)}}},28412:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var n=r(54144),a=r(47605),c=r(71355),i=r(28216),o=r(93264),u=r.n(o),s=r(41131),l=r(85296);const f=function(){var e=(0,o.useMemo)((function(){return(0,s.b)()}),[]);return u().createElement(a.Pj,{locale:navigator.language.slice(0,2),messages:l},u().createElement(i.Provider,{store:e},u().createElement(c.NotificationsPortal,null),u().createElement(n.Z,null)))}}}]);