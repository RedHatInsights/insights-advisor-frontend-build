/*! For license information please see TopicAdmin.1655209919177.843a64aa6928d3292f8e.js.LICENSE.txt */
"use strict";(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[1694],{21015:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CardHeader=void 0;const r=a(70655),n=r.__importStar(a(93264)),o=a(38296),i=r.__importDefault(a(54918)),l=a(2095),s=a(16396),c=r.__importDefault(a(95511));t.CardHeader=e=>{var{children:t=null,className:a="",id:d,onExpand:u,toggleButtonProps:f,isToggleRightAligned:p}=e,m=r.__rest(e,["children","className","id","onExpand","toggleButtonProps","isToggleRightAligned"]);return n.createElement(l.CardContext.Consumer,null,(({cardId:e})=>{const r=n.createElement("div",{className:o.css(i.default.cardHeaderToggle)},n.createElement(s.Button,Object.assign({variant:"plain",type:"button",onClick:t=>{u(t,e)}},f),n.createElement("span",{className:o.css(i.default.cardHeaderToggleIcon)},n.createElement(c.default,{"aria-hidden":"true"}))));return n.createElement("div",Object.assign({className:o.css(i.default.cardHeader,p&&i.default.modifiers.toggleRight,a),id:d},m),u&&!p&&r,t,u&&p&&r)}))},t.CardHeader.displayName="CardHeader"},9568:(e,t,a)=>{t.Y=void 0;const r=a(70655),n=r.__importStar(a(93264)),o=r.__importDefault(a(15466)),i=a(38296),l=a(23053);class s extends n.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e.currentTarget.checked,e)},e.label||e["aria-label"]||console.error("Radio:","Radio requires an aria-label to be specified"),this.state={ouiaStateId:l.getDefaultOUIAId(s.displayName)}}render(){const e=this.props,{"aria-label":t,checked:a,className:c,defaultChecked:d,isLabelWrapped:u,isLabelBeforeButton:f,isChecked:p,isDisabled:m,isValid:h,label:g,onChange:v,description:y,body:b,ouiaId:E,ouiaSafe:_=!0}=e,O=r.__rest(e,["aria-label","checked","className","defaultChecked","isLabelWrapped","isLabelBeforeButton","isChecked","isDisabled","isValid","label","onChange","description","body","ouiaId","ouiaSafe"]);O.id||console.error("Radio:","id is required to make input accessible");const w=n.createElement("input",Object.assign({},O,{className:i.css(o.default.radioInput),type:"radio",onChange:this.handleChange,"aria-invalid":!h,disabled:m,checked:a||p},void 0===a&&{defaultChecked:d},!g&&{"aria-label":t},l.getOUIAProps(s.displayName,void 0!==E?E:this.state.ouiaStateId,_)));let x=null;g&&u?x=n.createElement("span",{className:i.css(o.default.radioLabel,m&&o.default.modifiers.disabled)},g):g&&(x=n.createElement("label",{className:i.css(o.default.radioLabel,m&&o.default.modifiers.disabled),htmlFor:O.id},g));const C=y?n.createElement("span",{className:i.css(o.default.radioDescription)},y):null,S=b?n.createElement("span",{className:i.css(o.default.radioBody)},b):null,Z=f?n.createElement(n.Fragment,null,x,w,C,S):n.createElement(n.Fragment,null,w,x,C,S);return u?n.createElement("label",{className:i.css(o.default.radio,c),htmlFor:O.id},Z):n.createElement("div",{className:i.css(o.default.radio,!g&&o.default.modifiers.standalone,c)},Z)}}t.Y=s,s.displayName="Radio",s.defaultProps={className:"",isDisabled:!1,isValid:!0,onChange:()=>{}}},85806:(e,t,a)=>{t.Kx=t.f=void 0;const r=a(70655),n=r.__importStar(a(93264)),o=r.__importDefault(a(12455)),i=r.__importDefault(a(60211)),l=a(38296),s=a(23053);var c;!function(e){e.horizontal="horizontal",e.vertical="vertical",e.both="both"}(c=t.f||(t.f={}));class d extends n.Component{constructor(e){super(e),this.handleChange=e=>{const t=e.currentTarget;if(this.props.autoResize&&s.canUseDOM){t.style.setProperty(i.default.name,"inherit");const e=window.getComputedStyle(t),a=parseInt(e.getPropertyValue("border-top-width"))+parseInt(e.getPropertyValue("padding-top"))+t.scrollHeight+parseInt(e.getPropertyValue("padding-bottom"))+parseInt(e.getPropertyValue("border-bottom-width"));t.style.setProperty(i.default.name,`${a}px`)}this.props.onChange&&this.props.onChange(t.value,e)},e.id||e["aria-label"]||console.error("TextArea: TextArea requires either an id or aria-label to be specified")}render(){const e=this.props,{className:t,value:a,validated:i,isRequired:d,isDisabled:u,isIconSprite:f,isReadOnly:p,resizeOrientation:m,innerRef:h,readOnly:g,disabled:v,autoResize:y,onChange:b}=e,E=r.__rest(e,["className","value","validated","isRequired","isDisabled","isIconSprite","isReadOnly","resizeOrientation","innerRef","readOnly","disabled","autoResize","onChange"]),_=`resize${s.capitalize(m)}`;return n.createElement("textarea",Object.assign({className:l.css(o.default.formControl,f&&o.default.modifiers.iconSprite,t,m!==c.both&&o.default.modifiers[_],i===s.ValidatedOptions.success&&o.default.modifiers.success,i===s.ValidatedOptions.warning&&o.default.modifiers.warning),onChange:this.handleChange},"string"!=typeof this.props.defaultValue&&{value:a},{"aria-invalid":i===s.ValidatedOptions.error,required:d,disabled:u||v,readOnly:p||g,ref:h},E))}}d.displayName="TextArea",d.defaultProps={innerRef:n.createRef(),className:"",isRequired:!1,isDisabled:!1,isIconSprite:!1,validated:"default",resizeOrientation:"both","aria-label":null},t.Kx=n.forwardRef(((e,t)=>n.createElement(d,Object.assign({},e,{innerRef:t})))),t.Kx.displayName="TextArea"},36842:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Split=void 0;const r=a(70655),n=r.__importStar(a(93264)),o=r.__importDefault(a(89059)),i=a(38296);t.Split=e=>{var{hasGutter:t=!1,isWrappable:a=!1,className:l="",children:s=null,component:c="div"}=e,d=r.__rest(e,["hasGutter","isWrappable","className","children","component"]);const u=c;return n.createElement(u,Object.assign({},d,{className:i.css(o.default.split,t&&o.default.modifiers.gutter,a&&o.default.modifiers.wrap,l)}),s)},t.Split.displayName="Split"},21508:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SplitItem=void 0;const r=a(70655),n=r.__importStar(a(93264)),o=r.__importDefault(a(89059)),i=a(38296);t.SplitItem=e=>{var{isFilled:t=!1,className:a="",children:l=null}=e,s=r.__rest(e,["isFilled","className","children"]);return n.createElement("div",Object.assign({},s,{className:i.css(o.default.splitItem,t&&o.default.modifiers.fill,a)}),l)},t.SplitItem.displayName="SplitItem"},92506:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=a(70655);r.__exportStar(a(36842),t),r.__exportStar(a(21508),t)},80516:(e,t,a)=>{t.Jk={name:"BanIcon",height:512,width:512,svgPath:"M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z",yOffset:0,xOffset:0},t.SC=a(35183).createIcon(t.Jk),t.ZP=t.SC},73755:(e,t,a)=>{t.Fm={name:"EditAltIcon",height:1024,width:1024,svgPath:"M1024,187.9 C1024,207 1017.3,223.1 1004,236.4 L857.5,386.9 L638.8,168.4 L787.3,20.5 C800.3,6.83333333 816.5,0 835.9,0 C855,0 871.366667,6.83333333 885,20.5 L1004,138.9 C1017.3,152.9 1023.96667,169.233333 1024,187.9 Z M806.2,438.9 L219.4,1024 L0,1024 L0,804.6 L586.6,219.5 L806.2,438.9 Z M219.6,950.9 L292.9,877.8 L146.3,731.4 L73.2,804.5 L73.2,877.6 L146.3,877.6 L146.3,951 L219.6,950.9 Z",yOffset:0,xOffset:0},t.CL=a(35183).createIcon(t.Fm),t.ZP=t.CL},62965:(e,t,a)=>{t.er={name:"FrownOpenIcon",height:512,width:496,svgPath:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM136 208c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm187.3 183.3c-31.2-9.6-59.4-15.3-75.3-15.3s-44.1 5.7-75.3 15.3c-11.5 3.5-22.5-6.3-20.5-18.1 7-40 60.1-61.2 95.8-61.2s88.8 21.3 95.8 61.2c2 11.9-9.1 21.6-20.5 18.1zM328 240c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z",yOffset:0,xOffset:0},t.mE=a(35183).createIcon(t.er),t.ZP=t.mE},47668:(e,t,a)=>{t.Mu={name:"StarIcon",height:512,width:576,svgPath:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z",yOffset:0,xOffset:0},t.r7=a(35183).createIcon(t.Mu),t.ZP=t.r7},15466:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r}),a.e(9624).then(a.t.bind(a,99624,23));const r={modifiers:{standalone:"pf-m-standalone",disabled:"pf-m-disabled"},radio:"pf-c-radio",radioBody:"pf-c-radio__body",radioDescription:"pf-c-radio__description",radioInput:"pf-c-radio__input",radioLabel:"pf-c-radio__label"}},89059:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r}),a.e(6166).then(a.t.bind(a,16166,23));const r={modifiers:{wrap:"pf-m-wrap",fill:"pf-m-fill",gutter:"pf-m-gutter"},split:"pf-l-split",splitItem:"pf-l-split__item"}},60211:(e,t)=>{t.__esModule=!0,t.c_form_control_textarea_Height={name:"--pf-c-form-control--textarea--Height",value:"auto",var:"var(--pf-c-form-control--textarea--Height)"},t.default=t.c_form_control_textarea_Height},53754:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(93264);const n=a.n(r)().createContext("light")},14748:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(93264),n=a.n(r),o=a(94184),i=a.n(o),l=a(28216),s=a(53754),c=function(){return c=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},c.apply(this,arguments)},d=function(e,t,a){if(a||2===arguments.length)for(var r,n=0,o=t.length;n<o;n++)!r&&n in t||(r||(r=Array.prototype.slice.call(t,0,n)),r[n]=t[n]);return e.concat(r||Array.prototype.slice.call(t))};const u=(0,l.connect)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))((function(e){var t=e.path,a=e.params,r=void 0===a?{}:a,o=e.children,l=e.className,u=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["path","params","children","className"]),f=function(){var e,a,n;if(null===(n=null===(a=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===a?void 0:a.$internal)||void 0===n?void 0:n.store){var o=window.insights.chrome.$internal.store.getState();if(t&&o)return t.split("/").reduce((function(e,t){var a,n;return 0===t.indexOf(":")?e.dynamic=c(c({},e.dynamic),((a={})["data-".concat((n=t.substr(1),n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=r[t.substr(1)],a)):e.staticPart=d(d([],e.staticPart,!0),""!==t?[t]:[],!0),e}),{staticPart:[o.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),p=f.dynamic,m=f.staticPart;return n().createElement(s.Z.Consumer,null,(function(e){var t;void 0===e&&(e="light");var a=i()(((t={})["pf-m-".concat(e)]="dark"===e,t));return{dark:n().createElement("section",c({},u,p,{"page-type":m.join("-"),className:"".concat(i()(l,"pf-l-page__main-section pf-c-page__main-section")," ").concat(a)}),n().Children.map(o,(function(e){return n().cloneElement(e,{className:"pf-m-dark"})}))),light:n().createElement("section",c({},u,p,{"page-type":m.join("-"),className:"".concat(i()(l,"pf-l-page__main-section pf-c-page__main-section"))}),o)}[e]}))}))},80123:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(93264),n=a.n(r),o=a(94184),i=a.n(o),l=a(53754),s=function(){return s=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s.apply(this,arguments)};const c=function(e){var t=e.className,a=e.children,r=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["className","children"]),o=i()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return n().createElement(l.Z.Consumer,null,(function(e){var t,l;void 0===e&&(e="light");var c=i()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((l={})["pf-m-light"]="light"===e,l));return n().createElement("section",s({},r,{className:"".concat(o," ").concat(c),"widget-type":"InsightsPageHeader"}),a)}))}},76341:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(2095),n=a(85962),o=a(21015),i=a(62965),l=a(93264),s=a.n(l),c=a(45697),d=function(e){var t=e.message;return s().createElement(s().Fragment,null,s().createElement(r.Card,{className:"adv-c-card-empty-rule"},s().createElement(o.CardHeader,null,s().createElement(i.ZP,{size:"lg"})),s().createElement(n.CardBody,null,t)))};const u=d;d.propTypes={message:a.n(c)().string}},58658:(e,t,a)=>{a.r(t),a.d(t,{default:()=>U});var r=a(42982),n=a(70885),o=a(93264),i=a.n(o),l=a(17855),s=a(71002),c=a(15861),d=a(71094),u=a(92506),f=a(59303),p=a(6202),m=a(32752),h=a(4853),g=a(23811),v=a(78826),y=a(45697),b=a.n(y),E=a(9568),_=a(85806),O=a(12282),w=a(30893),x=a(71355),C=a(28216),S=a(86896);function Z(){Z=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,a){return e[t]=a}}function c(e,t,a,r){var n=t&&t.prototype instanceof f?t:f,o=Object.create(n.prototype),i=new x(r||[]);return o._invoke=function(e,t,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return{value:void 0,done:!0}}for(a.method=n,a.arg=o;;){var i=a.delegate;if(i){var l=_(i,a);if(l){if(l===u)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var s=d(e,t,a);if("normal"===s.type){if(r=a.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(r="completed",a.method="throw",a.arg=s.arg)}}}(e,a,i),o}function d(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var u={};function f(){}function p(){}function m(){}var h={};l(h,n,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(C([])));v&&v!==t&&a.call(v,n)&&(h=v);var y=m.prototype=f.prototype=Object.create(h);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(n,o,i,l){var c=d(e[n],e,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==(0,s.Z)(f)&&a.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,l)}))}l(c.arg)}var n;this._invoke=function(e,a){function o(){return new t((function(t,n){r(e,a,t,n)}))}return n=n?n.then(o,o):o()}}function _(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=d(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function C(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=m,l(y,"constructor",m),l(m,"constructor",p),p.displayName=l(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var i=new E(c(t,a,r,n),o);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(y),l(y,i,"Generator"),l(y,n,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=C,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return i.type="throw",i.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),s=a.call(o,"finallyLoc");if(l&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),w(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;w(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:C(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}var N=function(e){var t=e.handleModalToggleCallback,a=e.isModalOpen,r=e.topic,l=(0,S.Z)(),s=(0,C.useDispatch)(),y=function(e){return s((0,x.addNotification)(e))},b=(0,o.useState)(r.name||""),N=(0,n.Z)(b,2),L=N[0],I=N[1],k=(0,o.useState)(r.description||""),P=(0,n.Z)(k,2),M=P[0],j=P[1],T=(0,o.useState)(r.tag||""),D=(0,n.Z)(T,2),R=D[0],A=D[1],F=(0,o.useState)(r.enabled||!1),z=(0,n.Z)(F,2),B=z[0],H=z[1],q=(0,o.useState)(r.featured||!1),G=(0,n.Z)(q,2),V=G[0],Y=G[1],$=(0,o.useState)(r.slug||void 0),U=(0,n.Z)($,2),K=U[0],W=U[1],J=function(){var e=(0,c.Z)(Z().mark((function e(a){var o,i;return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=a.type,e.prev=1,i={name:L,slug:K,tag:R,description:M,enabled:B,featured:V},"DELETE"!==o){e.next=8;break}return e.next=6,(0,d.Sp)("".concat(f._n,"/topic/").concat(K));case 6:e.next=15;break;case 8:if(!r.slug){e.next=13;break}return e.next=11,(0,d.qb)("".concat(f._n,"/topic/").concat(K,"/"),i);case 11:e.next=15;break;case 13:return e.next=15,(0,d.SO)("".concat(f._n,"/topic/"),{},i);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),y({variant:"danger",dismissable:!0,title:l.formatMessage(w.Z.error),description:Object.entries(e.t0.response.data).map((function(e){var t=(0,n.Z)(e,2),a=t[0],r=t[1];return"".concat(a.toUpperCase(),":").concat(r," ")}))});case 20:return e.prev=20,t(!1),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[1,17,20,23]])})));return function(t){return e.apply(this,arguments)}}(),X=function(e){r.slug?I(e):(I(e),W(e.replace(/\s/g,"").toLowerCase()))},Q=i().createElement(u.Split,{className:"split-override",hasGutter:!0},i().createElement(u.SplitItem,null,i().createElement(p.Button,{key:"confirm",variant:"primary",onClick:function(){return J({type:"POST/PUT"})},ouiaId:"confirm"},l.formatMessage(w.Z.save))),i().createElement(u.SplitItem,null,i().createElement(p.Button,{key:"cancel",variant:"secondary",onClick:function(){return t(!1)},ouiaId:"cancel"},l.formatMessage(w.Z.cancel))),i().createElement(u.SplitItem,{isFilled:!0}),i().createElement(u.SplitItem,null,i().createElement(p.Button,{key:"delete",ouiaId:"delete",variant:"danger",isDisabled:!r.slug,onClick:function(){return J({type:"DELETE"})}},l.formatMessage(w.Z.deleteTopic))));return i().createElement(v.u_,{title:l.formatMessage(w.Z.topicAdminTitle),isOpen:a,onClose:function(){return t(!1)},footer:Q,className:"modal-width-override"},i().createElement(h.l,null,i().createElement(g.c,{label:l.formatMessage(w.Z.name),fieldId:"topic-form-name",className:"text-input-override"},i().createElement(O.oi,{value:L,isRequired:!0,type:"text",id:"topic-form-name",name:"topic-form-name",onChange:function(e){return X(e)}})),i().createElement(g.c,{label:l.formatMessage(w.Z.topicAddEditDescription),fieldId:"topic-form-description",helperText:l.formatMessage(w.Z.topicAddEditDescriptionHelperText),className:"text-area-override"},i().createElement(_.Kx,{value:M,isRequired:!0,name:"topic-form-description",id:"topic-form-description",onChange:function(e){return j(e)}})),i().createElement(g.c,{isInline:!0,fieldId:"topic-form-labels"},i().createElement(g.c,{label:l.formatMessage(w.Z.tag),fieldId:"topic-form-tag",helperText:l.formatMessage(w.Z.topicAddEditTagHelperText),className:"text-input-override"},i().createElement(O.oi,{value:R.replace(/\s/g,"").toLowerCase(),isRequired:!0,type:"text",id:"topic-form-tag",name:"topic-form-tag",onChange:function(e){return A(e.replace(/\s/g,"").toLowerCase())}})),i().createElement(g.c,{label:l.formatMessage(w.Z.topicSlug),fieldId:"topic-form-name-2",helperText:"",className:"text-input-override"},i().createElement(O.oi,{value:K||L.replace(/\s/g,"").toLowerCase(),isDisabled:r.slug,type:"text",id:"topic-form-name-2",name:"topic-form-name-2",onChange:function(e){return X(e)}}))),i().createElement(g.c,{label:l.formatMessage(w.Z.status),fieldId:"topic-form-enabled"},i().createElement(E.Y,{isChecked:!B,id:"disabled",label:l.formatMessage(w.Z.topicAddEditDisabled),onChange:function(){return H(!B)},className:"adv-c-radio"}),i().createElement(E.Y,{isChecked:B,id:"enabled",label:l.formatMessage(w.Z.topicAddEditEnabled),onChange:function(){return H(!B)},className:"adv-c-radio"})),i().createElement(g.c,{label:l.formatMessage(w.Z.featured),fieldId:"topic-form-featured"},i().createElement(m.X,{isChecked:V,label:l.formatMessage(w.Z.topicAddEditFeatureBox),id:"checkbox-featured",name:"checkbox-featured","aria-label":"update-featured",onChange:function(){return Y(!V)},className:"adv-c-check"}))))};N.propTypes={handleModalToggleCallback:b().func,isModalOpen:b().bool,topic:b().object,intl:b().any};const L=N;var I=a(80516),k=a(35451),P=a(73755),M=a(76341),j=a(46891),T=a(14748),D=a(34702),R=a(80123),A=a(7887),F=a(47668),z=a(14938),B=a(62472),H=a(94184),q=a.n(H),G=function(){return G=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},G.apply(this,arguments)};const V=function(e){var t,a=e.isFooter,r=void 0!==a&&a,n=e.results,l=e.className,s=e.selected,c=e.children,d=e.ouiaId,u=e.ouiaSafe,f=void 0===u||u,p=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["isFooter","results","className","selected","children","ouiaId","ouiaSafe"]),m=q()("ins-c-table__toolbar",((t={})["ins-m-footer"]=r,t),l),h="RHI/TableToolbar",g=(0,B.Z1)(h,d,f);return i().createElement(o.Fragment,null,i().createElement(z.Toolbar,G({className:m,"data-ouia-component-type":h,"data-ouia-component-id":g,"data-ouia-safe":f},p),c),(n&&n>=0||s&&s>=0)&&i().createElement("div",{className:"ins-c-table__toolbar-results"},n&&n>=0&&i().createElement("span",{className:"ins-c-table__toolbar-results-count"}," ",function(e){return"".concat(e,e>1||e<1?" Results":" Result")}(n)," "),s&&s>=0&&i().createElement("span",{className:"ins-c-table__toolbar-results-selected"}," ",s," Selected ")))};var Y=a(34348),$=a(77187);const U=function(){var e=(0,S.Z)(),t=(0,$.zv)(),a=t.data,s=void 0===a?[]:a,c=t.isLoading,d=t.isFetching,u=t.isError,f=t.refetch,m=(0,o.useState)([{title:e.formatMessage(w.Z.title),transforms:[l.sortable]},{title:e.formatMessage(w.Z.tag),transforms:[l.sortable]},{title:e.formatMessage(w.Z.topicSlug),transforms:[l.sortable]},{title:e.formatMessage(w.Z.status),transforms:[l.sortable]},{title:e.formatMessage(w.Z.featured),transforms:[l.sortable]},"",""]),h=(0,n.Z)(m,1)[0],g=(0,o.useState)([]),v=(0,n.Z)(g,2),y=v[0],b=v[1],E=(0,o.useState)({}),_=(0,n.Z)(E,2),O=_[0],x=_[1],C=(0,o.useState)(!1),Z=(0,n.Z)(C,2),N=Z[0],z=Z[1],B=(0,o.useState)({}),H=(0,n.Z)(B,2),q=H[0],G=H[1],U=(0,o.useState)([]),K=(0,n.Z)(U,2),W=K[0],J=K[1],X=(0,o.useCallback)((function(e,t,a){var n={0:"name",1:"tag",2:"slug",3:"enabled",4:"featured"}[t],o=(0,r.Z)(W);x({index:t,direction:a}),J(o.sort((function(e,t){return"asc"===a?"enabled"===n||"featured"===n?e[n]>t[n]?-1:1:e[n]>t[n]?1:-1:"enabled"===n||"featured"===n?e[n]>t[n]?1:-1:e[n]>t[n]?-1:1})))}),[x,J,W]),Q=function(e){e?(G(e),z(!0)):z(!0)};return(0,o.useEffect)((function(){J(s)}),[s]),(0,o.useEffect)((function(){if(0===W.length)b([{cells:[{title:i().createElement(D.Z,{icon:"none",title:"",text:""}),props:{colSpan:7}}]}]);else{var t=W.flatMap((function(t,a){return[{isOpen:!1,rule:t,cells:[{title:i().createElement("span",{key:a}," ",t.name)},{title:i().createElement("span",{key:a}," ",t.tag)},{title:i().createElement("span",{key:a}," ",t.slug)},{title:i().createElement("span",null,t.enabled?i().createElement("span",null,i().createElement(k.default,{className:"success"})," ",e.formatMessage(w.Z.enabled)):i().createElement("span",null,i().createElement(I.ZP,{className:"ban"})," ",e.formatMessage(w.Z.disabled)))},{title:i().createElement("span",null,t.featured?i().createElement("span",null,i().createElement(F.ZP,null)," ",e.formatMessage(w.Z.featured)):i().createElement("span",null))},"",{title:i().createElement(p.Button,{ouiaId:"hide",variant:"link",onClick:function(){return Q(t)}},i().createElement(P.ZP,null)," ",e.formatMessage(w.Z.topicAdminEdit))}]}]}));b(t)}}),[W,e]),i().createElement(i().Fragment,null,N&&i().createElement(L,{isModalOpen:N,handleModalToggleCallback:function(e){z(e),f()},topic:q}),i().createElement(R.Z,null,i().createElement(Y.Dx,{headingLevel:"h3",size:"2xl",className:"titlePaddingOverride"},e.formatMessage(w.Z.topicAdminTitle))),i().createElement(T.Z,null,i().createElement(i().Fragment,null,i().createElement(A.Z,{className:"toolbar-padding-override"},i().createElement(p.Button,{variant:"primary",ouiaId:"adminCreate",onClick:function(e){return Q(e)}},e.formatMessage(w.Z.topicAdminCreate))),!c&&!d&&i().createElement(l.Table,{ouiaId:"adminTable","aria-label":"topics-admin-table",sortBy:O,onSort:X,cells:h,rows:y,isStickyHeader:!0},i().createElement(l.TableHeader,null),i().createElement(l.TableBody,null)),d&&i().createElement(j.Z,null),u&&i().createElement(M.Z,{message:e.formatMessage(w.Z.systemTableFetchError)}),i().createElement(V,null))))}}}]);