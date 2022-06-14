/*! For license information please see 2813.1655209919177.843a64aa6928d3292f8e.js.LICENSE.txt */
(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[2813,5467,9477,3929],{85991:(t,e,r)=>{"use strict";e.a=void 0;const n=r(70655),o=n.__importStar(r(93264)),a=n.__importDefault(r(44303)),i=r(38296),c=r(23053);e.a=t=>{var{children:r=null,className:s="","aria-label":l="Breadcrumb",ouiaId:u,ouiaSafe:f=!0}=t,d=n.__rest(t,["children","className","aria-label","ouiaId","ouiaSafe"]);const p=c.useOUIAProps(e.a.displayName,u,f);return o.createElement("nav",Object.assign({},d,{"aria-label":l,className:i.css(a.default.breadcrumb,s)},p),o.createElement("ol",{className:a.default.breadcrumbList},o.Children.map(r,((t,e)=>{const r=e>0;return o.isValidElement(t)?o.cloneElement(t,{showDivider:r}):t}))))},e.a.displayName="Breadcrumb"},49489:(t,e,r)=>{"use strict";e.g=void 0;const n=r(70655),o=n.__importStar(r(93264)),a=n.__importDefault(r(95511)),i=n.__importDefault(r(44303)),c=r(38296);e.g=t=>{var{children:e=null,className:r="",to:s,isActive:l=!1,isDropdown:u=!1,showDivider:f,target:d,component:p="a",render:h}=t,v=n.__rest(t,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const m=p,y=l?"page":void 0,g=c.css(i.default.breadcrumbLink,l&&i.default.modifiers.current);return o.createElement("li",Object.assign({},v,{className:c.css(i.default.breadcrumbItem,r)}),f&&o.createElement("span",{className:i.default.breadcrumbItemDivider},o.createElement(a.default,null)),"button"===p&&o.createElement("button",{className:g,"aria-current":y,type:"button"},e),u&&o.createElement("span",{className:c.css(i.default.breadcrumbDropdown)},e),h&&h({className:g,ariaCurrent:y}),s&&!h&&o.createElement(m,{href:s,target:d,className:g,"aria-current":y},e),!s&&"button"!==p&&!u&&e)},e.g.displayName="BreadcrumbItem"},44303:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>n}),r.e(8392).then(r.t.bind(r,58392,23));const n={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},67265:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a});var n=r(93264),o=r.n(n);const a=function(t){var e=t.component,r=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["component"]);return(0,n.useEffect)((function(){console.error("Unable to load inventory component. Failed to load ".concat(e,"."),r)}),[]),o().createElement("div",null,o().createElement("h1",null,"Unable to load inventory component"),o().createElement("h2",null,"Failed to load ",e),o().createElement("code",null,"More info can be found in browser console output."))}},33739:(t,e,r)=>{"use strict";r.d(e,{Z:()=>y});var n=r(93264),o=r.n(n),a=r(45697),i=r.n(a),c=r(54025),s=r(75662),l=r(28216),u=r(14938),f=r(67265),d=r(94184),p=r.n(d),h=function(){return h=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},h.apply(this,arguments)},v=function(t){var e=(0,s.useHistory)(),r=(0,l.useStore)(),a=t.component;return o().createElement(a,{className:p()(t.className,"inventory")},o().createElement(n.Suspense,{fallback:t.fallback},o().createElement(c.ScalprumComponent,h({history:e,store:r,appName:"inventory",module:"./InventoryTable",scope:"inventory",ErrorComponent:o().createElement(f.Z,h({component:"InventoryDetailHead",history:e,store:r},t)),ref:t.innerRef},t))))};v.propTypes={fallback:i().node,innerRef:i().object,component:i().string,className:i().string};var m=o().forwardRef((function(t,e){return o().createElement(v,h({innerRef:e},t))}));m.propTypes={fallback:i().node,component:i().string,className:i().string},m.defaultProps={fallback:o().createElement(u.Bullseye,{className:"pf-u-p-lg"},o().createElement(u.Spinner,{size:"xl"})),component:"section"};const y=m},75331:(t,e,r)=>{"use strict";r.d(e,{Z:()=>v});var n=r(70885),o=r(93264),a=r.n(o),i=r(85991),c=r(49489),s=r(75662),l=r(45697),u=r.n(l),f=r(30893),d=r(75546),p=r(86896),h=function(t){var e,r=t.current,l=(0,p.Z)(),u=null===(e=(0,s.useLocation)().pathname)||void 0===e?void 0:e.split("/"),h=(0,o.useState)([]),v=(0,n.Z)(h,2),m=v[0],y=v[1],g=!("recommendations"===u[1]&&4===u.length)||"pathways"===u[2],b=(0,d.m1)({ruleId:u[2]},{skip:g}),w=b.data,_=b.isFetching;return(0,o.useEffect)((function(){var t;(t=[]).push({title:"".concat(l.formatMessage(f.Z.insightsHeader)," ").concat(u[1]),navigate:"/".concat(u[1])}),g||t.push({title:null==w?void 0:w.description,navigate:"/".concat(u[1],"/").concat(u[2])}),"pathways"===u[2]&&(t=[{title:"Advisor pathways",navigate:"/recommendations/pathways"}]),y(t)}),[w]),a().createElement(a().Fragment,null,!_&&m.length>0?a().createElement(i.a,{ouiaId:"detail"},m.map((function(t,e){return a().createElement(c.g,{key:e},a().createElement(s.Link,{to:t.navigate},t.title))})),a().createElement(c.g,{isActive:!0},r)):l.formatMessage(f.Z.loading))};h.propTypes={current:u().string};const v=h},92224:(t,e,r)=>{"use strict";r.d(e,{Z:()=>Q});var n=r(71002),o=r(87462),a=r(4942),i=r(15861),c=r(70885),s=r(59303),l=r(93264),u=r.n(l),f=r(17855),d=r(97109),p=r(28216),h=r(44788),v=r(71094),m=r(33739),y=r(46891),g=r(45697),b=r.n(g),w=r(98132),_=r(30893),x=r(71355),E=r(46655),O=r(41131),k=r(86896),L=r(58921),j=r(42982),P=r(13218),S=r.n(P),Z=r(44908),N=r.n(Z);function I(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function D(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?I(Object(r),!0).forEach((function(e){(0,a.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var T=function(t){return t.group||"default"},F=function(t){return function(e){return t?e||{}:{default:e||[]}}},C=function(t){var e=t;return Object.entries(t).forEach((function(t){var r=(0,c.Z)(t,2),n=r[0];void 0===r[1]&&delete e[n]})),e},A=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,n=T(r);return C(D(D({},e),{},(0,a.Z)({},n,(null===(t=r.items)||void 0===t?void 0:t.length)>0||S()(r.items)?r.items:void 0)))},G=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,r=T(e);return C(D(D({},t),{},(0,a.Z)({},r,e.reset?null==e?void 0:e.items:N()([null==e?void 0:e.item].concat((0,j.Z)(t[r]||[]))))))},U=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,r=T(e),n=(t[r]||[]).filter((function(t){return!e.item.includes(t)}));return C(D(D({},t),{},(0,a.Z)({},r,0===n.length?void 0:n)))},R=function(t,e){return(t[T(e)]||[]).includes(e.item)?U(t,e):G(t,e)},M=function(t,e){return F(Object.prototype.hasOwnProperty.call(!t,"default"))(null==e?void 0:e.preselected)},V=function(t){return F(Object.prototype.hasOwnProperty.call(!t,"default"))()};const Y=function(t,e){return{set:A,select:G,deselect:U,toggle:R,reset:M,clear:V}[e.type](t,e)};var X=function(t){return t?"Unselect":"Select"},B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(null==t?void 0:t.filter((function(t){return e.includes(t)})).length)===t.length};function H(){H=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=_(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function d(){}function p(){}function h(){}var v={};s(v,a,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(k([])));y&&y!==e&&r.call(y,a)&&(v=y);var g=h.prototype=d.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(a,i,c,s){var l=u(t[a],t,i);if("throw"!==l.type){var f=l.arg,d=f.value;return d&&"object"==(0,n.Z)(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,c,s)}),(function(t){o("throw",t,c,s)})):e.resolve(d).then((function(t){f.value=t,c(f)}),(function(t){return o("throw",t,c,s)}))}s(l.arg)}var a;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=h,s(g,"constructor",h),s(h,"constructor",p),p.displayName=s(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,s(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(w.prototype),s(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(g),s(g,c,"Generator"),s(g,a,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}const J=function(t){var e,r=t.total,n=void 0===r?0:r,o=t.onSelect,a=t.preselected,s=t.itemIdsInTable,u=t.itemIdsOnPage,f=t.identifier,d=void 0===f?"id":f,p=!!o,h=function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).withGroups,r=void 0!==e&&e,n=(0,l.useReducer)(Y,t,F(r)),o=(0,c.Z)(n,2),a=o[0],i=o[1],s=function(t,e){return i({type:"set",group:e,items:t})},u=function(t,e){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?s(t,e):i({type:"select",group:e,item:t})},f=function(t,e){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?s(t,e):i({type:"deselect",group:e,item:t})};return{set:s,select:u,deselect:f,toggle:function(t,e){return i({type:"toggle",group:e,item:t})},reset:function(){return i({type:"reset",preselected:t})},clear:function(){return i({type:"clear"})},selection:r?a:a.default}}(a||[]),v=h.selection,m=h.set,y=h.select,g=h.deselect,b=h.clear,w=(v||[]).length,_=u(),x=_.length||n,E=w===n,O=0===w,k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return 0!==e.length&&B(t,e)}(_,v),L=0===n,P=0!==(e=w)&&(e===n||null),S=function(t,e){return"".concat(t," selected")}(w),Z=function(){var t,e,r=(null==v?void 0:v.length)>0?(t=v,e=_,Array.from(new Set([].concat((0,j.Z)(t),(0,j.Z)(e))))):_;k?g(_):y(r,void 0,!0)},N=function(){var t=(0,i.Z)(H().mark((function t(){var e;return H().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s();case 2:e=t.sent,E?b():m(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,l.useEffect)((function(){m(a)}),[JSON.stringify(a)]),p?{selectedIds:v,selectNone:function(){return b()},tableProps:{onSelect:n>0?function(t,e,r,n){return e?y(n[d]):g(n[d])}:void 0,canSelectAll:!1},toolbarProps:{bulkSelect:{toggleProps:{children:[S]},isDisabled:L,items:[{title:"Select none",onClick:function(){return b()},props:{isDisabled:O}}].concat((0,j.Z)(u?[{title:"".concat(X(k)," page (").concat(x," items)"),onClick:Z}]:[]),(0,j.Z)(s?[{title:"".concat(X(E)," all (").concat(n," items)"),onClick:N}]:[])),checked:P,onSelect:L?void 0:Z}}}:{}};function W(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function z(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?W(Object(r),!0).forEach((function(e){(0,a.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function K(){K=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=_(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function d(){}function p(){}function h(){}var v={};s(v,a,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(k([])));y&&y!==e&&r.call(y,a)&&(v=y);var g=h.prototype=d.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(a,i,c,s){var l=u(t[a],t,i);if("throw"!==l.type){var f=l.arg,d=f.value;return d&&"object"==(0,n.Z)(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,c,s)}),(function(t){o("throw",t,c,s)})):e.resolve(d).then((function(t){f.value=t,c(f)}),(function(t){return o("throw",t,c,s)}))}s(l.arg)}var a;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=h,s(g,"constructor",h),s(h,"constructor",p),p.displayName=s(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,s(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(w.prototype),s(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(g),s(g,c,"Generator"),s(g,a,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var q=function(t){var e,r,n=t.tableProps,g=t.rule,b=t.afterDisableFn,j=t.pathway,P=t.selectedTags,S=t.workloads,Z=t.SID,N=t.permsExport,I=t.exportTable,D=t.showTags,T=(0,p.useStore)(),F=(0,k.Z)(),C=(0,p.useDispatch)(),A=(0,l.useState)({limit:20,offset:0,sort:"-last_seen",name:""}),G=(0,c.Z)(A,2),U=G[0],R=G[1],M=(0,l.useState)(0),V=(0,c.Z)(M,2),Y=V[0],X=V[1],B=(0,p.useSelector)((function(t){return t.entities||{}})),H=function(t){return C((0,x.addNotification)(t))},W=(0,l.useState)(!1),q=(0,c.Z)(W,2),Q=q[0],$=q[1],tt=(0,l.useState)([]),et=(0,c.Z)(tt,2),rt=et[0],nt=et[1],ot=function(){var t=(0,i.Z)(K().mark((function t(){var e,r,n,o,a,i;return K().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!j){t.next=15;break}return t.next=3,(0,v.dX)("".concat(s.Vo),{},{pathway:j.slug,limit:j.impacted_systems_count});case 3:if(t.t2=e=t.sent,t.t1=null===t.t2,t.t1){t.next=7;break}t.t1=void 0===e;case 7:if(!t.t1){t.next=11;break}t.t3=void 0,t.next=12;break;case 11:t.t3=null===(r=e.data)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.map((function(t){return t.system_uuid}));case 12:t.t0=t.t3,t.next=27;break;case 15:return t.next=17,(0,v.dX)("".concat(s.cJ).concat(encodeURI(g.rule_id),"/systems/"),{},{name:U.name});case 17:if(t.t5=o=t.sent,t.t4=null===t.t5,t.t4){t.next=21;break}t.t4=void 0===o;case 21:if(!t.t4){t.next=25;break}t.t6=void 0,t.next=26;break;case 25:t.t6=null===(a=o.data)||void 0===a?void 0:a.host_ids;case 26:t.t0=t.t6;case 27:return i=t.t0,t.abrupt("return",i);case 29:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),at=J({total:Y,onSelect:function(){},itemIdsInTable:ot,itemIdsOnPage:function(){return rt||[]},identitfier:"system_uuid"}),it=at.tableProps,ct=at.toolbarProps,st=at.selectedIds,lt=at.selectNone;(0,l.useEffect)((function(){C({type:"SELECT_ENTITIES",payload:{selected:st}})}),[st]);var ut,ft=function(){var t=(0,i.Z)(K().mark((function t(){var e,r,n,o,a;return K().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!j){t.next=30;break}return t.next=3,(0,v.dX)("".concat(s._n,"/pathway/").concat(encodeURI(j.slug),"/rules/"),{},{});case 3:if(t.t1=e=t.sent,t.t0=null===t.t1,t.t0){t.next=7;break}t.t0=void 0===e;case 7:if(!t.t0){t.next=11;break}t.t2=void 0,t.next=12;break;case 11:t.t2=e.data.data;case 12:return n=t.t2,t.next=15,(0,v.dX)("".concat(s._n,"/pathway/").concat(encodeURI(j.slug),"/reports/"),{},{});case 15:if(t.t4=r=t.sent,t.t3=null===t.t4,t.t3){t.next=19;break}t.t3=void 0===r;case 19:if(!t.t3){t.next=23;break}t.t5=void 0,t.next=24;break;case 23:t.t5=r.data.rules;case 24:return o=t.t5,a=[],n.forEach((function(t){var e=[];o[t.rule_id].forEach((function(t){st.includes(t)&&e.push(t)})),e.length&&a.push({id:"advisor:".concat(t.rule_id),description:t.description,systems:e})})),t.abrupt("return",{issues:a});case 30:return t.abrupt("return",{issues:[{id:"advisor:".concat(g.rule_id),description:g.description}],systems:st});case 31:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),dt=function(t){$(t)},pt=function(t){var e=t.name,r=t.display_name,n=z(z(z({},t),e&&{name:e}),r&&{display_name:r});!j&&(0,d.Y4)(n,P)},ht=function(t){var e=z(z({},U),{},{offset:0});delete e[t],R(e)},vt=[{label:s.Ut.rhel_version.title.toLowerCase(),type:s.Ut.rhel_version.type,id:s.Ut.rhel_version.urlParam,value:"checkbox-".concat(s.Ut.rhel_version.urlParam),filterValues:{key:"".concat(s.Ut.rhel_version.urlParam,"-filter"),onChange:function(t,e){!function(t,e){e.length>0?R(z(z({},U),{},{offset:0},(0,a.Z)({},t,e))):ht(t)}(s.Ut.rhel_version.urlParam,e)},value:U.rhel_version,items:s.Ut.rhel_version.values}}],mt={deleteTitle:F.formatMessage(_.Z.resetFilters),filters:(ut=z({},U),delete ut.sort,delete ut.offset,delete ut.limit,(0,d.yK)(ut,s.Ut)),onDelete:function(t,e,r){r?R({sort:U.sort,limit:U.limit,offset:U.offset}):e.map((function(t){var e=(0,a.Z)({},t.urlParam,Array.isArray(U[t.urlParam])?U[t.urlParam].filter((function(e){return String(e)!==String(t.chips[0].value)})):"");e[t.urlParam].length>0?R(z(z({},U),e)):ht(t.urlParam)}))}};return u().createElement(u().Fragment,null,Q&&u().createElement(h.Z,{handleModalToggle:dt,isModalOpen:Q,rule:g,afterFn:b,hosts:st}),u().createElement(m.Z,(0,o.Z)({id:"tablesContainer",hasCheckbox:!0,initialLoading:!0,autoRefresh:!0,hideFilters:{all:!0,name:!1,tags:!D},filterConfig:{items:vt},activeFiltersConfig:mt,columns:function(t){return function(t){var e=t.filter((function(t){return"updated"===t.key})),r=t.filter((function(t){return"display_name"===t.key})),n=t.filter((function(t){return"system_profile"===t.key})),o=t.filter((function(t){return"tags"===t.key}));return r=z(z({},r[0]),{},{transforms:[f.sortable,f.wrappable],props:{isStatic:!0}}),e=z(z({},e[0]),{},{transforms:[f.sortable,f.wrappable],props:{width:20}}),n=z(z({},n[0]),{},{transforms:[f.wrappable]}),[r,o=z({},o[0]),n,e]}(t)},tableProps:z(z({variant:f.TableVariant.compact},n),it),customFilters:{advisorFilters:U,selectedTags:P,workloads:S,SID:Z},showTags:D,getEntities:function(){var t=(0,i.Z)(K().mark((function t(e,r,n,o){var a,i,c,l,u,f,p,h,m,y,b,w,_,x,E,O,k,L;return K().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(p=r.per_page,h=r.page,m=r.orderBy,y=r.orderDirection,b=r.advisorFilters,w=r.filters,_=r.workloads,x=r.SID,E="".concat("ASC"===y?"":"-").concat("updated"===m?"last_seen":m),O=z(z(z(z(z({},b),{},{limit:p,offset:h*p-p,sort:E},r.filters.hostnameOrId&&!j&&{name:null==r||null===(a=r.filters)||void 0===a?void 0:a.hostnameOrId}),r.filters.hostnameOrId&&j&&{display_name:null==r||null===(i=r.filters)||void 0===i?void 0:i.hostnameOrId}),Array.isArray(b.rhel_version)&&{rhel_version:null===(c=b.rhel_version)||void 0===c?void 0:c.join(",")}),(null===(l=w.tagFilters)||void 0===l?void 0:l.length)&&(0,d.gh)(w.tagFilters)),_&&(O=z(z({},O),(0,d.s0)(_,x))),pt(O),!j){t.next=20;break}return t.next=8,(0,v.dX)("".concat(s.Vo),{},z(z({},O),{},{pathway:j.slug}));case 8:if(t.t2=u=t.sent,t.t1=null===t.t2,t.t1){t.next=12;break}t.t1=void 0===u;case 12:if(!t.t1){t.next=16;break}t.t3=void 0,t.next=17;break;case 16:t.t3=u.data;case 17:t.t0=t.t3,t.next=32;break;case 20:return t.next=22,(0,v.dX)("".concat(s.cJ).concat(encodeURI(g.rule_id),"/systems_detail/"),{},O);case 22:if(t.t5=f=t.sent,t.t4=null===t.t5,t.t4){t.next=26;break}t.t4=void 0===f;case 26:if(!t.t4){t.next=30;break}t.t6=void 0,t.next=31;break;case 30:t.t6=f.data;case 31:t.t0=t.t6;case 32:return k=t.t0,t.next=35,o(k.data.map((function(t){return t.system_uuid})),{page:h,per_page:p,hasItems:!0,fields:{system_profile:["operating_system"]}},n);case 35:return L=t.sent,nt(k.data.map((function(t){return t.system_uuid}))),X(k.meta.count),t.abrupt("return",Promise.resolve({results:(0,d.E9)(k.data,L.results).map((function(t){return z(z({},t),{},{selected:null==st?void 0:st.includes(t.id)})})),total:k.meta.count}));case 39:case"end":return t.stop()}}),t)})));return function(e,r,n,o){return t.apply(this,arguments)}}(),dedicatedAction:u().createElement(w.Z,{key:"remediation-button",isDisabled:0===(st||[]).length||!j&&0===(null==g?void 0:g.playbook_count),dataProvider:ft,onRemediationCreated:function(t){return function(t){lt();try{t.remediation&&H(t.getNotification())}catch(t){H({variant:"danger",dismissable:!0,title:F.formatMessage(_.Z.error),description:"".concat(t)})}}(t)}},F.formatMessage(_.Z.remediate)),actionsConfig:{actions:["",{label:F.formatMessage(_.Z.disableRuleForSystems),props:{isDisabled:0===(st||[]).length},onClick:function(){return dt(!0)}}]}},ct,{fallback:y.Z,onLoad:function(t){var e=t.mergeWithEntities,r=t.INVENTORY_ACTION_TYPES,n=t.mergeWithDetail;T.replaceReducer((0,O.U)(z(z({},e((0,E.V)([],r),{page:Number(U.offset/U.limit+1||1),perPage:Number(U.limit||20)})),n())))},exportConfig:N&&(r={label:F.formatMessage(_.Z.exportCsv)},(0,a.Z)(r,"label",F.formatMessage(_.Z.exportJson)),(0,a.Z)(r,"onSelect",(function(t,e){return(0,L.Z)(I,e,z({rule_id:g.rule_id},U),P,S,Z,C)})),(0,a.Z)(r,"isDisabled",!N||0===(null==B||null===(e=B.rows)||void 0===e?void 0:e.length)),(0,a.Z)(r,"tooltipText",N?F.formatMessage(_.Z.exportData):F.formatMessage(_.Z.permsAction)),r)})))};q.propTypes={tableProps:b().any,rule:b().object,afterDisableFn:b().func,pathway:b().object,selectedTags:b().any,workloads:b().any,SID:b().any,permsExport:b().bool,exportTable:b().string,showTags:b().bool};const Q=q},45467:()=>{}}]);