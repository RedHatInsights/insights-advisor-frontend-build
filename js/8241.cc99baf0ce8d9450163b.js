(self.webpackChunkadvisor=self.webpackChunkadvisor||[]).push([[8241],{69174:(e,t,r)=>{"use strict";r.d(t,{_:()=>d});var n=r(70655),o=r(93264),a=r(83063),i=r(72002),l=r(47173),c=r(75824),s=r(38296),u=r(24307),p=r(6551);const f={blue:a.Z.modifiers.blue,cyan:a.Z.modifiers.cyan,green:a.Z.modifiers.green,orange:a.Z.modifiers.orange,purple:a.Z.modifiers.purple,red:a.Z.modifiers.red,gold:a.Z.modifiers.gold,grey:""},d=e=>{var{children:t,className:r="",color:d="grey",variant:m="filled",isCompact:b=!1,isEditable:v=!1,editableProps:g,isTruncated:h=!1,tooltipPosition:y,icon:O,onClose:x,onEditCancel:E,onEditComplete:w,closeBtn:_,closeBtnAriaLabel:Z,closeBtnProps:j,href:P,isOverflowLabel:C,render:N}=e,L=(0,n._T)(e,["children","className","color","variant","isCompact","isEditable","editableProps","isTruncated","tooltipPosition","icon","onClose","onEditCancel","onEditComplete","closeBtn","closeBtnAriaLabel","closeBtnProps","href","isOverflowLabel","render"]);const[T,k]=(0,o.useState)(!1),[I,R]=(0,o.useState)(t),S=o.useRef(),A=o.useRef();o.useEffect((()=>(document.addEventListener("mousedown",B),document.addEventListener("keydown",G),()=>{document.removeEventListener("mousedown",B),document.removeEventListener("keydown",G)})));const B=e=>{T&&A&&A.current&&!A.current.contains(e.target)&&(A.current.value&&w&&w(e,A.current.value),k(!1))},G=e=>{var r,n;const o=e.key;if((T||S&&S.current&&S.current.contains(e.target))&&(!T||A&&A.current&&A.current.contains(e.target))&&(!T||"Enter"!==o&&"Tab"!==o||(e.preventDefault(),e.stopImmediatePropagation(),A.current.value&&w&&w(e,A.current.value),k(!1),null===(r=null==S?void 0:S.current)||void 0===r||r.focus()),T&&"Escape"===o&&(e.preventDefault(),e.stopImmediatePropagation(),A.current.value&&(A.current.value=t,E&&E(e,t)),k(!1),null===(n=null==S?void 0:S.current)||void 0===n||n.focus()),!T&&"Enter"===o)){e.preventDefault(),e.stopImmediatePropagation(),k(!0);const t=e.target,r=document.createRange(),n=window.getSelection();r.selectNodeContents(t),r.collapse(!1),n.removeAllRanges(),n.addRange(r)}},D=C?"button":"span",M=_||o.createElement(l.zx,Object.assign({type:"button",variant:"plain",onClick:x,"aria-label":Z||`Close ${t}`},j),o.createElement(u.ZP,null)),W=o.createRef(),$=o.useRef(),[F,z]=o.useState(!1);(0,p.L)((()=>{const e=v?S:W;T||z(e.current&&e.current.offsetWidth<e.current.scrollWidth)}),[T]);const H=o.createElement(o.Fragment,null,O&&o.createElement("span",{className:(0,s.i)(a.Z.labelIcon)},O),h&&o.createElement("span",{ref:W,className:(0,s.i)(a.Z.labelText)},t),!h&&t);o.useEffect((()=>{T&&A&&A.current&&A.current.focus()}),[A,T]);let q=o.createElement("span",{className:(0,s.i)(a.Z.labelContent)},H);return P?q=o.createElement("a",{className:(0,s.i)(a.Z.labelContent),href:P},H):v&&(q=o.createElement("button",Object.assign({ref:S,className:(0,s.i)(a.Z.labelContent),onClick:e=>{k(!0),e.stopPropagation()}},g),H)),N?q=o.createElement(o.Fragment,null,F&&o.createElement(c.u,{reference:$,content:t,position:y}),N({className:a.Z.labelContent,content:H,componentRef:$})):F&&(q=o.createElement(c.u,{content:t,position:y},q)),o.createElement(D,Object.assign({},L,{className:(0,s.i)(a.Z.label,f[d],"outline"===m&&a.Z.modifiers.outline,C&&a.Z.modifiers.overflow,b&&a.Z.modifiers.compact,v&&i.Z.modifiers.editable,T&&a.Z.modifiers.editableActive,r)}),!T&&q,!T&&x&&M,T&&o.createElement("input",Object.assign({className:(0,s.i)(a.Z.labelContent),type:"text",id:"editable-input",ref:A,value:I,onChange:()=>{R(A.current.value)}},g)))};d.displayName="Label"},83063:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n}),r(82014);const n={button:"pf-c-button",label:"pf-c-label",labelContent:"pf-c-label__content",labelIcon:"pf-c-label__icon",labelText:"pf-c-label__text",modifiers:{compact:"pf-m-compact",blue:"pf-m-blue",green:"pf-m-green",orange:"pf-m-orange",red:"pf-m-red",purple:"pf-m-purple",cyan:"pf-m-cyan",gold:"pf-m-gold",outline:"pf-m-outline",overflow:"pf-m-overflow",add:"pf-m-add",editable:"pf-m-editable",editableActive:"pf-m-editable-active"},themeDark:"pf-theme-dark"}},72002:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n}),r(21064);const n={button:"pf-c-button",labelGroup:"pf-c-label-group",labelGroupClose:"pf-c-label-group__close",labelGroupLabel:"pf-c-label-group__label",labelGroupList:"pf-c-label-group__list",labelGroupListItem:"pf-c-label-group__list-item",labelGroupMain:"pf-c-label-group__main",labelGroupTextarea:"pf-c-label-group__textarea",modifiers:{category:"pf-m-category",vertical:"pf-m-vertical",editable:"pf-m-editable",textarea:"pf-m-textarea"}}},67230:function(e,t){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.buildInsightsPath=void 0,t.buildInsightsPath=function(e,t,n,o){var a=("object"==typeof n?n.pathname:n)||"",i=/^\//.test(a),l=o?"/preview":"",c=t||e.getApp(),s=i?[l,e.getBundle(),c,a.replace(/^\//,"")].join("/"):a;return"object"==typeof n?r(r({},n),{pathname:s}):s}},92397:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(85893),o=r(62012),a=r(55140),i=r(67230),l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)};const c=function(e){var t=e.to,r=e.app,c=e.preview,s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["to","app","preview"]),u=(0,a.Z)(),p=(0,i.buildInsightsPath)(u,r,t,c);return(0,n.jsx)(o.Link,l({to:p},s,{children:s.children}))}},89376:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(85893),o=r(94184),a=r.n(o),i=r(93264);const l=r.n(i)().createContext("light");var c=function(){return c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c.apply(this,arguments)};const s=function(e){var t=e.className,r=e.children,o=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["className","children"]),i=a()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,n.jsx)(l.Consumer,{children:function(e){var t,l;void 0===e&&(e="light");var s=a()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((l={})["pf-m-light"]="light"===e,l));return(0,n.jsx)("section",c({},o,{className:"".concat(i," ").concat(s),"widget-type":"InsightsPageHeader"},{children:r}))}})}},47443:(e,t,r)=>{var n=r(42118);e.exports=function(e,t){return!(null==e||!e.length)&&n(e,t,0)>-1}},1196:e=>{e.exports=function(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;)if(r(t,e[n]))return!0;return!1}},41848:e=>{e.exports=function(e,t,r,n){for(var o=e.length,a=r+(n?1:-1);n?a--:++a<o;)if(t(e[a],a,e))return a;return-1}},42118:(e,t,r)=>{var n=r(41848),o=r(62722),a=r(42351);e.exports=function(e,t,r){return t==t?a(e,t,r):n(e,o,r)}},62722:e=>{e.exports=function(e){return e!=e}},27561:(e,t,r)=>{var n=r(67990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(o,""):e}},42351:e=>{e.exports=function(e,t,r){for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}},67990:e=>{var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},23279:(e,t,r)=>{var n=r(13218),o=r(7771),a=r(14841),i=Math.max,l=Math.min;e.exports=function(e,t,r){var c,s,u,p,f,d,m=0,b=!1,v=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=c,n=s;return c=s=void 0,m=t,p=e.apply(n,r)}function y(e){return m=e,f=setTimeout(x,t),b?h(e):p}function O(e){var r=e-d;return void 0===d||r>=t||r<0||v&&e-m>=u}function x(){var e=o();if(O(e))return E(e);f=setTimeout(x,function(e){var r=t-(e-d);return v?l(r,u-(e-m)):r}(e))}function E(e){return f=void 0,g&&c?h(e):(c=s=void 0,p)}function w(){var e=o(),r=O(e);if(c=arguments,s=this,d=e,r){if(void 0===f)return y(d);if(v)return clearTimeout(f),f=setTimeout(x,t),h(d)}return void 0===f&&(f=setTimeout(x,t)),p}return t=a(t)||0,n(r)&&(b=!!r.leading,u=(v="maxWait"in r)?i(a(r.maxWait)||0,t):u,g="trailing"in r?!!r.trailing:g),w.cancel=function(){void 0!==f&&clearTimeout(f),m=0,c=d=s=f=void 0},w.flush=function(){return void 0===f?p:E(o())},w}},7771:(e,t,r)=>{var n=r(55639);e.exports=function(){return n.Date.now()}},14841:(e,t,r)=>{var n=r(27561),o=r(13218),a=r(33448),i=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=l.test(e);return r||c.test(e)?s(e.slice(2),r?2:8):i.test(e)?NaN:+e}}}]);
//# sourceMappingURL=../sourcemaps/8241.57c8923eb13b04ad9e8331b646c5f26b.js.map