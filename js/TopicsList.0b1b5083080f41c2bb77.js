(self.webpackChunkadvisor=self.webpackChunkadvisor||[]).push([[7641],{69174:(e,t,r)=>{"use strict";r.d(t,{_:()=>d});var n=r(70655),o=r(93264),a=r(83063),c=r(72002),i=r(47173),l=r(75824),s=r(38296),u=r(24307),p=r(6551);const f={blue:a.Z.modifiers.blue,cyan:a.Z.modifiers.cyan,green:a.Z.modifiers.green,orange:a.Z.modifiers.orange,purple:a.Z.modifiers.purple,red:a.Z.modifiers.red,gold:a.Z.modifiers.gold,grey:""},d=e=>{var{children:t,className:r="",color:d="grey",variant:m="filled",isCompact:b=!1,isEditable:v=!1,editableProps:g,isTruncated:y=!1,tooltipPosition:h,icon:j,onClose:O,onEditCancel:x,onEditComplete:Z,closeBtn:E,closeBtnAriaLabel:w,closeBtnProps:P,href:_,isOverflowLabel:C,render:S}=e,I=(0,n._T)(e,["children","className","color","variant","isCompact","isEditable","editableProps","isTruncated","tooltipPosition","icon","onClose","onEditCancel","onEditComplete","closeBtn","closeBtnAriaLabel","closeBtnProps","href","isOverflowLabel","render"]);const[L,N]=(0,o.useState)(!1),[A,k]=(0,o.useState)(t),M=o.useRef(),D=o.useRef();o.useEffect((()=>(document.addEventListener("mousedown",F),document.addEventListener("keydown",T),()=>{document.removeEventListener("mousedown",F),document.removeEventListener("keydown",T)})));const F=e=>{L&&D&&D.current&&!D.current.contains(e.target)&&(D.current.value&&Z&&Z(e,D.current.value),N(!1))},T=e=>{var r,n;const o=e.key;if((L||M&&M.current&&M.current.contains(e.target))&&(!L||D&&D.current&&D.current.contains(e.target))&&(!L||"Enter"!==o&&"Tab"!==o||(e.preventDefault(),e.stopImmediatePropagation(),D.current.value&&Z&&Z(e,D.current.value),N(!1),null===(r=null==M?void 0:M.current)||void 0===r||r.focus()),L&&"Escape"===o&&(e.preventDefault(),e.stopImmediatePropagation(),D.current.value&&(D.current.value=t,x&&x(e,t)),N(!1),null===(n=null==M?void 0:M.current)||void 0===n||n.focus()),!L&&"Enter"===o)){e.preventDefault(),e.stopImmediatePropagation(),N(!0);const t=e.target,r=document.createRange(),n=window.getSelection();r.selectNodeContents(t),r.collapse(!1),n.removeAllRanges(),n.addRange(r)}},B=C?"button":"span",G=E||o.createElement(i.zx,Object.assign({type:"button",variant:"plain",onClick:O,"aria-label":w||`Close ${t}`},P),o.createElement(u.ZP,null)),R=o.createRef(),U=o.useRef(),[W,H]=o.useState(!1);(0,p.L)((()=>{const e=v?M:R;L||H(e.current&&e.current.offsetWidth<e.current.scrollWidth)}),[L]);const z=o.createElement(o.Fragment,null,j&&o.createElement("span",{className:(0,s.i)(a.Z.labelIcon)},j),y&&o.createElement("span",{ref:R,className:(0,s.i)(a.Z.labelText)},t),!y&&t);o.useEffect((()=>{L&&D&&D.current&&D.current.focus()}),[D,L]);let V=o.createElement("span",{className:(0,s.i)(a.Z.labelContent)},z);return _?V=o.createElement("a",{className:(0,s.i)(a.Z.labelContent),href:_},z):v&&(V=o.createElement("button",Object.assign({ref:M,className:(0,s.i)(a.Z.labelContent),onClick:e=>{N(!0),e.stopPropagation()}},g),z)),S?V=o.createElement(o.Fragment,null,W&&o.createElement(l.u,{reference:U,content:t,position:h}),S({className:a.Z.labelContent,content:z,componentRef:U})):W&&(V=o.createElement(l.u,{content:t,position:h},V)),o.createElement(B,Object.assign({},I,{className:(0,s.i)(a.Z.label,f[d],"outline"===m&&a.Z.modifiers.outline,C&&a.Z.modifiers.overflow,b&&a.Z.modifiers.compact,v&&c.Z.modifiers.editable,L&&a.Z.modifiers.editableActive,r)}),!L&&V,!L&&O&&G,L&&o.createElement("input",Object.assign({className:(0,s.i)(a.Z.labelContent),type:"text",id:"editable-input",ref:D,value:A,onChange:()=>{k(D.current.value)}},g)))};d.displayName="Label"},80810:(e,t,r)=>{"use strict";r.d(t,{W1:()=>a,ZP:()=>c,xQ:()=>o});var n=r(40400);const o={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},a=(0,n.IU)(o),c=a},72781:(e,t,r)=>{"use strict";r.d(t,{B9:()=>o,ZP:()=>c,xD:()=>a});var n=r(40400);const o={name:"TimesCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z",yOffset:0,xOffset:0},a=(0,n.IU)(o),c=a},83063:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n}),r(82014);const n={button:"pf-c-button",label:"pf-c-label",labelContent:"pf-c-label__content",labelIcon:"pf-c-label__icon",labelText:"pf-c-label__text",modifiers:{compact:"pf-m-compact",blue:"pf-m-blue",green:"pf-m-green",orange:"pf-m-orange",red:"pf-m-red",purple:"pf-m-purple",cyan:"pf-m-cyan",gold:"pf-m-gold",outline:"pf-m-outline",overflow:"pf-m-overflow",add:"pf-m-add",editable:"pf-m-editable",editableActive:"pf-m-editable-active"},themeDark:"pf-theme-dark"}},72002:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n}),r(21064);const n={button:"pf-c-button",labelGroup:"pf-c-label-group",labelGroupClose:"pf-c-label-group__close",labelGroupLabel:"pf-c-label-group__label",labelGroupList:"pf-c-label-group__list",labelGroupListItem:"pf-c-label-group__list-item",labelGroupMain:"pf-c-label-group__main",labelGroupTextarea:"pf-c-label-group__textarea",modifiers:{category:"pf-m-category",vertical:"pf-m-vertical",editable:"pf-m-editable",textarea:"pf-m-textarea"}}},46818:(e,t,r)=>{"use strict";r.d(t,{$G:()=>i,E0:()=>a,P8:()=>c,WT:()=>l,kZ:()=>o});var n=r(78632);const o=()=>({className:n.Z.modifiers.breakWord}),a=()=>({className:n.Z.modifiers.fitContent}),c=()=>({className:n.Z.modifiers.nowrap}),i=()=>({className:n.Z.modifiers.truncate}),l=()=>({className:n.Z.modifiers.wrap})},67230:function(e,t){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.buildInsightsPath=void 0,t.buildInsightsPath=function(e,t,n,o){var a=("object"==typeof n?n.pathname:n)||"",c=/^\//.test(a),i=o?"/preview":"",l=t||e.getApp(),s=c?[i,e.getBundle(),l,a.replace(/^\//,"")].join("/"):a;return"object"==typeof n?r(r({},n),{pathname:s}):s}},92397:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(85893),o=r(62012),a=r(55140),c=r(67230),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};const l=function(e){var t=e.to,r=e.app,l=e.preview,s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["to","app","preview"]),u=(0,a.Z)(),p=(0,c.buildInsightsPath)(u,r,t,l);return(0,n.jsx)(o.Link,i({to:p},s,{children:s.children}))}},89376:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(85893),o=r(94184),a=r.n(o),c=r(93264);const i=r.n(c)().createContext("light");var l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)};const s=function(e){var t=e.className,r=e.children,o=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["className","children"]),c=a()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,n.jsx)(i.Consumer,{children:function(e){var t,i;void 0===e&&(e="light");var s=a()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((i={})["pf-m-light"]="light"===e,i));return(0,n.jsx)("section",l({},o,{className:"".concat(c," ").concat(s),"widget-type":"InsightsPageHeader"},{children:r}))}})}},39173:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(85893),o=r(94184),a=r.n(o),c=r(35356),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};const l=function(e){var t=e.className,r=e.title,o=a()(t);return(0,n.jsx)(c.Title,i({headingLevel:"h1",size:"2xl",className:o,"widget-type":"InsightsPageHeaderTitle"},{children:r}))}},46891:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(32203),o=r(62394),a=r(24561),c=r(93264),i=r.n(c);const l=function(){return i().createElement(n.Z,null,i().createElement(o.e,null,i().createElement(a.aV,null)))}},58016:(e,t,r)=>{"use strict";r.d(t,{J:()=>s,W:()=>u});var n=r(4942),o=r(75472),a=r.n(o),c=r(97109);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=function(e,t,r,n,o,a,i,s,u,p){var f,d,m;return l(l(l(l(l(l(l(l(l({},e),{},{limit:r,offset:t*r-r,sort:n},(null==a?void 0:a.hostnameOrId)&&!o&&!p&&{name:null==a?void 0:a.hostnameOrId}),(null==a?void 0:a.hostnameOrId)&&!o&&p&&{display_name:null==a?void 0:a.hostnameOrId}),a.hostnameOrId&&o&&{display_name:null==a?void 0:a.hostnameOrId}),e.rhel_version&&{rhel_version:null===(f=e.rhel_version)||void 0===f?void 0:f.join(",")}),(null==a||null===(d=a.hostGroupFilter)||void 0===d?void 0:d.length)&&{groups:a.hostGroupFilter.join(",")}),(null===(m=a.tagFilters)||void 0===m?void 0:m.length)&&(0,c.gh)(a.tagFilters)),s?(0,c.s0)(s,u):{}),(null==i?void 0:i.length)>0?{tags:i.join(",")}:{})},u=function(e,t,r){var n;return n=0===t?"name":2===t?"featured":"impacted_systems_count",a()(e,[function(e){return e[n]}],r)}},37468:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>D});var n=r(4942),o=r(89376),a=r(39173),c=r(93264),i=r.n(c),l=r(70885),s=r(3351),u=r(22860),p=r(6934),f=r(7732),d=r(46818),m=r(69174),b=r(92397),v=r(46891),g=r(34702),y=r(7887),h=r(45697),j=r.n(h),O=r(80810),x=r(83668),Z=r(72781),E=r(30893),w=r(86896),P=r(58016),_=function(e){var t=e.props,r=(0,w.Z)(),n=(0,c.useState)(""),o=(0,l.Z)(n,2),a=o[0],h=o[1],j=t.data,_=t.isLoading,C=t.isFetching,S=t.isError,I=(0,c.useState)([{title:r.formatMessage(E.Z.name),transforms:[f.p]},"",{title:r.formatMessage(E.Z.featured),transforms:[f.p,d.WT]},{title:r.formatMessage(E.Z.affectedSystems),transforms:[f.p,d.WT]}]),L=(0,l.Z)(I,1)[0],N=(0,c.useState)([]),A=(0,l.Z)(N,2),k=A[0],M=A[1],D=(0,c.useState)({index:2,direction:"desc"}),F=(0,l.Z)(D,2),T=F[0],B=F[1],G=function(e){return e.flatMap((function(e,t){return 0===a.length||e.name.toLowerCase().includes(a.toLowerCase())?[{topic:e,cells:[{title:i().createElement("span",{key:t},i().createElement(b.Z,{key:t,to:"/topics/".concat(e.slug)}," ",e.name," ")),props:{colSpan:2}},{title:i().createElement("span",{key:t}," ",e.featured&&i().createElement(m._,{className:"pf-m-compact",color:"blue",icon:i().createElement(x.ZP,null)},r.formatMessage(E.Z.featured))," ")},{title:i().createElement("span",{className:"pf-m-center",key:t}," ",e.impacted_systems_count)}]}]:[]}))},R=function(e,t,r){B({index:t,direction:r}),M(G((0,P.W)(j,t,r)))},U={filters:a.length?[{category:"Description",chips:[{name:a,value:a}]}]:[],onDelete:function(){h(""),B({})}};(0,c.useEffect)((function(){T.index?R(0,T.index,T.direction):M(G(j))}),[j,a]);var W=[{label:r.formatMessage(E.Z.name).toLowerCase(),filterValues:{key:"text-filter",onChange:function(e,t){h(t),B({})},value:a}}];return i().createElement(i().Fragment,null,_||C?i().createElement(v.Z,null):!C&&j.length>0?i().createElement(i().Fragment,null,i().createElement(y.Z,{filterConfig:{items:W},activeFiltersConfig:U}),i().createElement(s.i,{"aria-label":"topics-table",sortBy:T,onSort:R,cells:L,rows:k,ouiaId:"topicTable",isStickyHeader:!0},i().createElement(p.x,null),i().createElement(u.R,null),0===k.length&&!C&&M([{cells:[{title:i().createElement(g.Z,{icon:O.ZP,title:r.formatMessage(E.Z.noHitsTitle,{item:r.formatMessage(E.Z.topics).toLowerCase()}),text:r.formatMessage(E.Z.topicsListNoHitsBody)}),props:{colSpan:4}}]}]))):S&&i().createElement(g.Z,{icon:Z.ZP,title:r.formatMessage(E.Z.topicsListNotopicsTitle),text:r.formatMessage(E.Z.topicsListNotopicsBody)}))};_.propTypes={props:j().object,data:j().array,isLoading:j().bool,isFetching:j().bool,isError:j().bool};const C=_;var S=r(77187),I=r(28216),L=r(97109),N=r(55140);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var M=function(){var e=(0,w.Z)(),t=(0,I.useSelector)((function(e){return e.filters.selectedTags})),r=(0,I.useSelector)((function(e){return e.filters.workloads})),n=(0,I.useSelector)((function(e){return e.filters.SID})),l=(0,N.Z)();(0,c.useEffect)((function(){l.updateDocumentTitle(e.formatMessage(E.Z.documentTitle,{subnav:E.Z.topics.defaultMessage}))}),[l,e]);var s=(null==t?void 0:t.length)&&{tags:t};r&&(s=k(k({},s),(0,L.s0)(r,n)));var u=(0,S.Fe)(s),p=u.data,f=void 0===p?[]:p,d=u.isLoading,m=u.isFetching,b=u.isError;return i().createElement(i().Fragment,null,i().createElement(o.Z,null,i().createElement(a.Z,{title:"".concat(e.formatMessage(E.Z.insightsHeader)," ").concat(e.formatMessage(E.Z.topics).toLowerCase())})),i().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section"},i().createElement(C,{props:{data:f,isLoading:d,isFetching:m,isError:b}})))};M.displayName="list-topics";const D=M},77412:e=>{e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}},44037:(e,t,r)=>{var n=r(98363),o=r(3674);e.exports=function(e,t){return e&&n(t,o(t),e)}},63886:(e,t,r)=>{var n=r(98363),o=r(81704);e.exports=function(e,t){return e&&n(t,o(t),e)}},85990:(e,t,r)=>{var n=r(46384),o=r(77412),a=r(34865),c=r(44037),i=r(63886),l=r(64626),s=r(278),u=r(18805),p=r(1911),f=r(58234),d=r(46904),m=r(64160),b=r(43824),v=r(29148),g=r(38517),y=r(1469),h=r(44144),j=r(56688),O=r(13218),x=r(72928),Z=r(3674),E=r(81704),w="[object Arguments]",P="[object Function]",_="[object Object]",C={};C[w]=C["[object Array]"]=C["[object ArrayBuffer]"]=C["[object DataView]"]=C["[object Boolean]"]=C["[object Date]"]=C["[object Float32Array]"]=C["[object Float64Array]"]=C["[object Int8Array]"]=C["[object Int16Array]"]=C["[object Int32Array]"]=C["[object Map]"]=C["[object Number]"]=C[_]=C["[object RegExp]"]=C["[object Set]"]=C["[object String]"]=C["[object Symbol]"]=C["[object Uint8Array]"]=C["[object Uint8ClampedArray]"]=C["[object Uint16Array]"]=C["[object Uint32Array]"]=!0,C["[object Error]"]=C[P]=C["[object WeakMap]"]=!1,e.exports=function e(t,r,S,I,L,N){var A,k=1&r,M=2&r,D=4&r;if(S&&(A=L?S(t,I,L,N):S(t)),void 0!==A)return A;if(!O(t))return t;var F=y(t);if(F){if(A=b(t),!k)return s(t,A)}else{var T=m(t),B=T==P||"[object GeneratorFunction]"==T;if(h(t))return l(t,k);if(T==_||T==w||B&&!L){if(A=M||B?{}:g(t),!k)return M?p(t,i(A,t)):u(t,c(A,t))}else{if(!C[T])return L?t:{};A=v(t,T,k)}}N||(N=new n);var G=N.get(t);if(G)return G;N.set(t,A),x(t)?t.forEach((function(n){A.add(e(n,r,S,n,t,N))})):j(t)&&t.forEach((function(n,o){A.set(o,e(n,r,S,o,t,N))}));var R=F?void 0:(D?M?d:f:M?E:Z)(t);return o(R||t,(function(n,o){R&&(n=t[o=n]),a(A,o,e(n,r,S,o,t,N))})),A}},89881:(e,t,r)=>{var n=r(47816),o=r(99291)(n);e.exports=o},21078:(e,t,r)=>{var n=r(62488),o=r(37285);e.exports=function e(t,r,a,c,i){var l=-1,s=t.length;for(a||(a=o),i||(i=[]);++l<s;){var u=t[l];r>0&&a(u)?r>1?e(u,r-1,a,c,i):n(i,u):c||(i[i.length]=u)}return i}},25588:(e,t,r)=>{var n=r(64160),o=r(37005);e.exports=function(e){return o(e)&&"[object Map]"==n(e)}},29221:(e,t,r)=>{var n=r(64160),o=r(37005);e.exports=function(e){return o(e)&&"[object Set]"==n(e)}},69199:(e,t,r)=>{var n=r(89881),o=r(98612);e.exports=function(e,t){var r=-1,a=o(e)?Array(e.length):[];return n(e,(function(e,n,o){a[++r]=t(e,n,o)})),a}},82689:(e,t,r)=>{var n=r(29932),o=r(97786),a=r(67206),c=r(69199),i=r(71131),l=r(7518),s=r(85022),u=r(6557),p=r(1469);e.exports=function(e,t,r){t=t.length?n(t,(function(e){return p(e)?function(t){return o(t,1===e.length?e[0]:e)}:e})):[u];var f=-1;t=n(t,l(a));var d=c(e,(function(e,r,o){return{criteria:n(t,(function(t){return t(e)})),index:++f,value:e}}));return i(d,(function(e,t){return s(e,t,r)}))}},71131:e=>{e.exports=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}},57157:(e,t,r)=>{var n=r(74318);e.exports=function(e,t){var r=t?n(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}},93147:e=>{var t=/\w*$/;e.exports=function(e){var r=new e.constructor(e.source,t.exec(e));return r.lastIndex=e.lastIndex,r}},40419:(e,t,r)=>{var n=r(62705),o=n?n.prototype:void 0,a=o?o.valueOf:void 0;e.exports=function(e){return a?Object(a.call(e)):{}}},26393:(e,t,r)=>{var n=r(33448);e.exports=function(e,t){if(e!==t){var r=void 0!==e,o=null===e,a=e==e,c=n(e),i=void 0!==t,l=null===t,s=t==t,u=n(t);if(!l&&!u&&!c&&e>t||c&&i&&s&&!l&&!u||o&&i&&s||!r&&s||!a)return 1;if(!o&&!c&&!u&&e<t||u&&r&&a&&!o&&!c||l&&r&&a||!i&&a||!s)return-1}return 0}},85022:(e,t,r)=>{var n=r(26393);e.exports=function(e,t,r){for(var o=-1,a=e.criteria,c=t.criteria,i=a.length,l=r.length;++o<i;){var s=n(a[o],c[o]);if(s)return o>=l?s:s*("desc"==r[o]?-1:1)}return e.index-t.index}},18805:(e,t,r)=>{var n=r(98363),o=r(99551);e.exports=function(e,t){return n(e,o(e),t)}},1911:(e,t,r)=>{var n=r(98363),o=r(51442);e.exports=function(e,t){return n(e,o(e),t)}},99291:(e,t,r)=>{var n=r(98612);e.exports=function(e,t){return function(r,o){if(null==r)return r;if(!n(r))return e(r,o);for(var a=r.length,c=t?a:-1,i=Object(r);(t?c--:++c<a)&&!1!==o(i[c],c,i););return r}}},99021:(e,t,r)=>{var n=r(85564),o=r(45357),a=r(30061);e.exports=function(e){return a(o(e,void 0,n),e+"")}},46904:(e,t,r)=>{var n=r(68866),o=r(51442),a=r(81704);e.exports=function(e){return n(e,a,o)}},51442:(e,t,r)=>{var n=r(62488),o=r(85924),a=r(99551),c=r(70479),i=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)n(t,a(e)),e=o(e);return t}:c;e.exports=i},43824:e=>{var t=Object.prototype.hasOwnProperty;e.exports=function(e){var r=e.length,n=new e.constructor(r);return r&&"string"==typeof e[0]&&t.call(e,"index")&&(n.index=e.index,n.input=e.input),n}},29148:(e,t,r)=>{var n=r(74318),o=r(57157),a=r(93147),c=r(40419),i=r(77133);e.exports=function(e,t,r){var l=e.constructor;switch(t){case"[object ArrayBuffer]":return n(e);case"[object Boolean]":case"[object Date]":return new l(+e);case"[object DataView]":return o(e,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return i(e,r);case"[object Map]":case"[object Set]":return new l;case"[object Number]":case"[object String]":return new l(e);case"[object RegExp]":return a(e);case"[object Symbol]":return c(e)}}},37285:(e,t,r)=>{var n=r(62705),o=r(35694),a=r(1469),c=n?n.isConcatSpreadable:void 0;e.exports=function(e){return a(e)||o(e)||!!(c&&e&&e[c])}},85564:(e,t,r)=>{var n=r(21078);e.exports=function(e){return null!=e&&e.length?n(e,1):[]}},56688:(e,t,r)=>{var n=r(25588),o=r(7518),a=r(31167),c=a&&a.isMap,i=c?o(c):n;e.exports=i},72928:(e,t,r)=>{var n=r(29221),o=r(7518),a=r(31167),c=a&&a.isSet,i=c?o(c):n;e.exports=i},10928:e=>{e.exports=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}},75472:(e,t,r)=>{var n=r(82689),o=r(1469);e.exports=function(e,t,r,a){return null==e?[]:(o(t)||(t=null==t?[]:[t]),o(r=a?void 0:r)||(r=null==r?[]:[r]),n(e,t,r))}},45467:()=>{},11452:()=>{},34946:()=>{},80598:()=>{},32857:()=>{},28992:()=>{},30187:()=>{},21626:()=>{},21064:()=>{},82014:()=>{},91993:()=>{},54994:()=>{},44690:()=>{},37494:()=>{},67761:()=>{},49854:()=>{}}]);
//# sourceMappingURL=../sourcemaps/TopicsList.216b82db956c11adf80166081ee49904.js.map