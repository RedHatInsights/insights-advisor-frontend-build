"use strict";(self.webpackChunkadvisor=self.webpackChunkadvisor||[]).push([[6473],{40400:(t,e,r)=>{r.d(e,{IU:()=>a,Jh:()=>n});var n,o=r(70655),l=r(93264);!function(t){t.sm="sm",t.md="md",t.lg="lg",t.xl="xl"}(n||(n={}));let c=0;function a({name:t,xOffset:e=0,yOffset:r=0,width:a,height:i,svgPath:u}){var s;return s=class extends l.Component{constructor(){super(...arguments),this.id="icon-title-"+c++}render(){const t=this.props,{size:c,color:s,title:f,noVerticalAlign:p}=t,h=(0,o._T)(t,["size","color","title","noVerticalAlign"]),y=Boolean(f),v=(t=>{switch(t){case n.sm:return"1em";case n.md:return"1.5em";case n.lg:return"2em";case n.xl:return"3em";default:return"1em"}})(c),b=-.125*Number.parseFloat(v),d=p?null:{verticalAlign:`${b}em`},m=[e,r,a,i].join(" ");return l.createElement("svg",Object.assign({style:d,fill:s,height:v,width:v,viewBox:m,"aria-labelledby":y?this.id:null,"aria-hidden":!y||null,role:"img"},h),y&&l.createElement("title",{id:this.id},f),l.createElement("path",{d:u}))}},s.displayName=t,s.defaultProps={color:"currentColor",size:n.sm,noVerticalAlign:!1},s}},76473:(t,e,r)=>{r.d(e,{TF:()=>l,Z1:()=>o,ZP:()=>c});var n=r(40400);const o={name:"CubesIcon",height:512,width:512,svgPath:"M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z",yOffset:0,xOffset:0},l=(0,n.IU)(o),c=l},70655:(t,e,r)=>{r.d(e,{Jh:()=>i,ZT:()=>o,_T:()=>c,ev:()=>f,fl:()=>s,mG:()=>a,pi:()=>l});var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)};function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var l=function(){return l=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},l.apply(this,arguments)};function c(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}function a(t,e,r,n){return new(r||(r=Promise))((function(o,l){function c(t){try{i(n.next(t))}catch(t){l(t)}}function a(t){try{i(n.throw(t))}catch(t){l(t)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(c,a)}i((n=n.apply(t,e||[])).next())}))}function i(t,e){var r,n,o,l,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return l={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function a(l){return function(a){return function(l){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,n&&(o=2&l[0]?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return c.label++,{value:l[1],done:!1};case 5:c.label++,n=l[1],l=[0];continue;case 7:l=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){c=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){c.label=l[1];break}if(6===l[0]&&c.label<o[1]){c.label=o[1],o=l;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(l);break}o[2]&&c.ops.pop(),c.trys.pop();continue}l=e.call(t,c)}catch(t){l=[6,t],n=0}finally{r=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,a])}}}function u(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,l=r.call(t),c=[];try{for(;(void 0===e||e-- >0)&&!(n=l.next()).done;)c.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=l.return)&&r.call(l)}finally{if(o)throw o.error}}return c}function s(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(u(arguments[e]));return t}function f(t,e,r){if(r||2===arguments.length)for(var n,o=0,l=e.length;o<l;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}Object.create,Object.create}}]);