(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[8170],{2372:(e,t,n)=>{"use strict";n.d(t,{S:()=>r,$:()=>i});var r,a=n(70655),o=n(93264),l=n(62698),c=n(38296);!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(r||(r={}));const i=e=>{var{className:t="",size:n="xl","aria-valuetext":r="Loading...",isSVG:i=!1,diameter:s,"aria-label":u,"aria-labelledBy":d}=e,f=(0,a.__rest)(e,["className","size","aria-valuetext","isSVG","diameter","aria-label","aria-labelledBy"]);const p=i?"svg":"span";return o.createElement(p,Object.assign({className:(0,c.css)(l.default.spinner,l.default.modifiers[n],t),role:"progressbar","aria-valuetext":r},i&&{viewBox:"0 0 100 100"},s&&{style:{"--pf-c-spinner--diameter":s}},u&&{"aria-label":u},d&&{"aria-labelledBy":d},!u&&!d&&{"aria-label":"Contents"},f),i?o.createElement("circle",{className:l.default.spinnerPath,cx:"50",cy:"50",r:"45",fill:"none"}):o.createElement(o.Fragment,null,o.createElement("span",{className:(0,c.css)(l.default.spinnerClipper)}),o.createElement("span",{className:(0,c.css)(l.default.spinnerLeadBall)}),o.createElement("span",{className:(0,c.css)(l.default.spinnerTailBall)})))};i.displayName="Spinner"},52643:(e,t,n)=>{"use strict";n.d(t,{b:()=>c});var r=n(70655),a=n(93264),o=n(38296),l=n(66042);const c=e=>{var{children:t=null,className:n="",component:c="div"}=e,i=(0,r.__rest)(e,["children","className","component"]);const s=c;return a.createElement(s,Object.assign({className:(0,o.css)(l.default.bullseye,n)},i),t)};c.displayName="Bullseye"},23218:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Label=void 0;const r=n(70655),a=r.__importStar(n(93264)),o=n(93264),l=r.__importDefault(n(83063)),c=r.__importDefault(n(72002)),i=n(16396),s=n(8045),u=n(38296),d=r.__importDefault(n(33606)),f=n(23053),p={blue:l.default.modifiers.blue,cyan:l.default.modifiers.cyan,green:l.default.modifiers.green,orange:l.default.modifiers.orange,purple:l.default.modifiers.purple,red:l.default.modifiers.red,gold:l.default.modifiers.gold,grey:""};t.Label=e=>{var{children:t,className:n="",color:m="grey",variant:b="filled",isCompact:v=!1,isEditable:g=!1,editableProps:h,isTruncated:y=!1,tooltipPosition:x,icon:E,onClose:_,onEditCancel:j,onEditComplete:C,closeBtn:w,closeBtnAriaLabel:O,closeBtnProps:N,href:B,isOverflowLabel:I,render:T}=e,L=r.__rest(e,["children","className","color","variant","isCompact","isEditable","editableProps","isTruncated","tooltipPosition","icon","onClose","onEditCancel","onEditComplete","closeBtn","closeBtnAriaLabel","closeBtnProps","href","isOverflowLabel","render"]);const[P,k]=o.useState(!1),[D,S]=o.useState(t),R=a.useRef(),M=a.useRef();a.useEffect((()=>(document.addEventListener("mousedown",G),document.addEventListener("keydown",Z),()=>{document.removeEventListener("mousedown",G),document.removeEventListener("keydown",Z)})));const G=e=>{P&&M&&M.current&&!M.current.contains(e.target)&&(M.current.value&&C&&C(M.current.value),k(!1))},Z=e=>{var n,r;const a=e.key;if((P||R&&R.current&&R.current.contains(e.target))&&(!P||M&&M.current&&M.current.contains(e.target))&&(!P||"Enter"!==a&&"Tab"!==a||(e.preventDefault(),e.stopImmediatePropagation(),M.current.value&&C&&C(M.current.value),k(!1),null===(n=null==R?void 0:R.current)||void 0===n||n.focus()),P&&"Escape"===a&&(e.preventDefault(),e.stopImmediatePropagation(),M.current.value&&(M.current.value=t,j&&j(t)),k(!1),null===(r=null==R?void 0:R.current)||void 0===r||r.focus()),!P&&"Enter"===a)){e.preventDefault(),e.stopImmediatePropagation(),k(!0);const t=e.target,n=document.createRange(),r=window.getSelection();n.selectNodeContents(t),n.collapse(!1),r.removeAllRanges(),r.addRange(n)}},A=I?"button":"span",z=w||a.createElement(i.Button,Object.assign({type:"button",variant:"plain",onClick:_,"aria-label":O||`Close ${t}`},N),a.createElement(d.default,null)),F=a.createRef(),U=a.useRef(),[$,V]=a.useState(!1);f.useIsomorphicLayoutEffect((()=>{const e=g?R:F;P||V(e.current&&e.current.offsetWidth<e.current.scrollWidth)}),[P]);const W=a.createElement(a.Fragment,null,E&&a.createElement("span",{className:u.css(l.default.labelIcon)},E),y&&a.createElement("span",{ref:F,className:u.css(l.default.labelText)},t),!y&&t);a.useEffect((()=>{P&&M&&M.current&&M.current.focus()}),[M,P]);let q=a.createElement("span",{className:u.css(l.default.labelContent)},W);return B?q=a.createElement("a",{className:u.css(l.default.labelContent),href:B},W):g&&(q=a.createElement("button",Object.assign({ref:R,className:u.css(l.default.labelContent),onClick:e=>{k(!0),e.stopPropagation()}},h),W)),T?q=a.createElement(a.Fragment,null,$&&a.createElement(s.Tooltip,{reference:U,content:t,position:x}),T({className:l.default.labelContent,content:W,componentRef:U})):$&&(q=a.createElement(s.Tooltip,{content:t,position:x},q)),a.createElement(A,Object.assign({},L,{className:u.css(l.default.label,p[m],"outline"===b&&l.default.modifiers.outline,I&&l.default.modifiers.overflow,v&&l.default.modifiers.compact,g&&c.default.modifiers.editable,P&&l.default.modifiers.editableActive,n)}),!P&&q,!P&&_&&z,P&&a.createElement("input",Object.assign({className:u.css(l.default.labelContent),type:"text",id:"editable-input",ref:M,value:D,onChange:()=>{S(M.current.value)}},h)))},t.Label.displayName="Label"},16712:(e,t,n)=>{"use strict";n.d(t,{Fs:()=>a,Q2:()=>o,ZP:()=>l});var r=n(40400);const a={name:"AnsibeTowerIcon",height:390,width:390,svgPath:"M402.6,214.7c0,103.9-84.2,188.1-188.1,188.1c-103.9,0-188.1-84.2-188.1-188.1  c0-103.9,84.2-188.1,188.1-188.1C318.4,26.6,402.6,110.8,402.6,214.7z M304.1,289.3l-74.9-180.2c-2.1-5.2-6.4-7.9-11.6-7.9c-5.2,0-9.8,2.8-11.9,7.9l-82.2,197.7h28.1l32.5-81.5  l97.1,78.4c3.9,3.2,6.7,4.6,10.4,4.6c7.3,0,13.7-5.5,13.7-13.4C305.4,293.6,305,291.5,304.1,289.3z M217.7,141.5l48.7,120.2  l-73.5-57.9L217.7,141.5z",yOffset:20,xOffset:20},o=(0,r.IU)(a),l=o},83063:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r}),n(82014);const r={button:"pf-c-button",label:"pf-c-label",labelContent:"pf-c-label__content",labelIcon:"pf-c-label__icon",labelText:"pf-c-label__text",modifiers:{compact:"pf-m-compact",blue:"pf-m-blue",green:"pf-m-green",orange:"pf-m-orange",red:"pf-m-red",purple:"pf-m-purple",cyan:"pf-m-cyan",gold:"pf-m-gold",outline:"pf-m-outline",overflow:"pf-m-overflow",add:"pf-m-add",editable:"pf-m-editable",editableActive:"pf-m-editable-active"},themeDark:"pf-theme-dark"}},72002:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r}),n(21064);const r={button:"pf-c-button",labelGroup:"pf-c-label-group",labelGroupClose:"pf-c-label-group__close",labelGroupLabel:"pf-c-label-group__label",labelGroupList:"pf-c-label-group__list",labelGroupListItem:"pf-c-label-group__list-item",labelGroupMain:"pf-c-label-group__main",labelGroupTextarea:"pf-c-label-group__textarea",modifiers:{category:"pf-m-category",vertical:"pf-m-vertical",editable:"pf-m-editable",textarea:"pf-m-textarea"}}},66042:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r}),n(87234);const r={bullseye:"pf-l-bullseye"}},98132:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(87462),a=n(93264),o=n.n(a),l=n(45697),c=n.n(l),i=n(54025),s=n(52643),u=n(2372),d=n(45987),f=function(e){var t=e.component,n=(0,d.Z)(e,["component"]);return(0,a.useEffect)((function(){console.error("Unable to load remedaitions component. Failed to load ".concat(t,"."),n)}),[]),o().createElement("div",null,o().createElement("h1",null,"Unable to load remedaitions component"),o().createElement("h2",null,"Failed to load ",t),o().createElement("code",null,"More info can be found in browser console output."))};f.propTypes={component:c().string};const p=f;var m=function(e){return o().createElement(a.Suspense,{fallback:e.fallback},o().createElement(i.ScalprumComponent,(0,r.Z)({appName:"remediations",module:"./RemediationButton",scope:"remediations",ErrorComponent:o().createElement(p,(0,r.Z)({component:"RemediationButton"},e)),ref:e.innerRef},e)))};m.propTypes={fallback:c().node,innerRef:c().object};var b=o().forwardRef((function(e,t){return o().createElement(m,(0,r.Z)({innerRef:t},e))}));b.propTypes={fallback:c().node},b.defaultProps={fallback:o().createElement(s.b,{className:"pf-u-p-lg"},o().createElement(u.$,{size:"xl"}))};const v=b},62410:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(85893),a=n(93264),o=n.n(a),l=n(22938),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)},i=36e5,s=24*i,u=30*s,d=365*s,f=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},p=[{rightBound:1/0,description:function(e){return f(Math.round(e/d),"year")}},{rightBound:d,description:function(e){return f(Math.round(e/u),"month")}},{rightBound:u,description:function(e){return f(Math.round(e/s),"day")}},{rightBound:s,description:function(e){return f(Math.round(e/i),"hour")}},{rightBound:i,description:function(e){return f(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],m=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},b=function(e){return{exact:function(e){return m(e)+" UTC"},onlyDate:function(e){return m(e).slice(0,-6)},relative:function(e){return p.reduce((function(t,n){return n.rightBound>Date.now()-e.getTime()?n.description(Date.now()-e.getTime()):t}),m(e))},invalid:function(){return"Invalid date"}}[e]},v=function(e,t,n){return{exact:function(t){return b(e)(t)},onlyDate:function(t){return b(e)(t)},relative:function(a){return function(e,t,n,a){return void 0===a&&(a=""),(0,r.jsx)(l.Tooltip,c({},n,{content:(0,r.jsxs)("div",{children:[a,e]})},{children:t}))}(b("exact")(a),(0,r.jsx)("span",{children:b(e)(a)}),t,n)},invalid:function(){return"Invalid date"}}[e]};const g=function(e){var t=e.date,n=e.type,a=void 0===n?"relative":n,l=e.extraTitle,c=e.tooltipProps,i=t instanceof Date?t:new Date(t),s=null==t||"Invalid Date"===i.toString()?"invalid":a;return(0,r.jsx)(o().Fragment,{children:v(s,c,l)(i)})}},90693:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(85893),a=n(52017),o=n(22938),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},c={1:{icon:(0,r.jsx)(a.AngleDoubleDownIcon,{}),text:"Low",color:"blue"},2:{icon:(0,r.jsx)(a.EqualsIcon,{}),text:"Moderate",color:"gold"},3:{icon:(0,r.jsx)(a.AngleDoubleUpIcon,{}),text:"Important",color:"orange"},4:{icon:(0,r.jsx)(a.CriticalRiskIcon,{}),text:"Critical",color:"red"}};const i=function(e){var t=e.value,n=void 0===t?1:t,a=e.text,i=e.hideIcon,s=e.rest,u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["value","text","hideIcon","rest"]);return(0,r.jsx)(o.Label,l({},s,u,{color:c[n].color,icon:!i&&c[n].icon},{children:a||c[n].text}))}},87135:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(85893),a=n(22938),o=n(52017),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)};const c=function(e){var t=e.titleText,n=void 0===t?"This system isn’t connected to Insights yet":t,c=e.bodyText,i=void 0===c?"To get started, activate the Insights client for this system.":c,s=e.buttonText,u=void 0===s?"Learn how to activate the Insights client":s;return(0,r.jsxs)(a.EmptyState,{children:[(0,r.jsx)(a.EmptyStateIcon,{icon:o.DisconnectedIcon}),(0,r.jsx)(a.Title,l({headingLevel:"h5",size:"lg"},{children:n})),(0,r.jsx)(a.EmptyStateBody,{children:i}),(0,r.jsx)(a.Button,l({variant:"primary",component:"a",href:"http://access.redhat.com/products/cloud_management_services_for_rhel#getstarted",target:"_blank",rel:"noopener noreferrer",className:"pf-u-mt-lg"},{children:u}))]})}},47443:(e,t,n)=>{var r=n(42118);e.exports=function(e,t){return!(null==e||!e.length)&&r(e,t,0)>-1}},1196:e=>{e.exports=function(e,t,n){for(var r=-1,a=null==e?0:e.length;++r<a;)if(n(t,e[r]))return!0;return!1}},41848:e=>{e.exports=function(e,t,n,r){for(var a=e.length,o=n+(r?1:-1);r?o--:++o<a;)if(t(e[o],o,e))return o;return-1}},42118:(e,t,n)=>{var r=n(41848),a=n(62722),o=n(42351);e.exports=function(e,t,n){return t==t?o(e,t,n):r(e,a,n)}},62722:e=>{e.exports=function(e){return e!=e}},42351:e=>{e.exports=function(e,t,n){for(var r=n-1,a=e.length;++r<a;)if(e[r]===t)return r;return-1}}}]);