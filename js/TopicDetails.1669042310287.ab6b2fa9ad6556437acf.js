(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[4683,384],{85991:(e,t,n)=>{"use strict";t.a=void 0;const r=n(70655),a=r.__importStar(n(93264)),i=r.__importDefault(n(44303)),c=n(38296),o=n(23053);t.a=e=>{var{children:n=null,className:s="","aria-label":l="Breadcrumb",ouiaId:u,ouiaSafe:m=!0}=e,d=r.__rest(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const p=o.useOUIAProps(t.a.displayName,u,m);return a.createElement("nav",Object.assign({},d,{"aria-label":l,className:c.css(i.default.breadcrumb,s)},p),a.createElement("ol",{className:i.default.breadcrumbList},a.Children.map(n,((e,t)=>{const n=t>0;return a.isValidElement(e)?a.cloneElement(e,{showDivider:n}):e}))))},t.a.displayName="Breadcrumb"},49489:(e,t,n)=>{"use strict";t.g=void 0;const r=n(70655),a=r.__importStar(n(93264)),i=r.__importDefault(n(95511)),c=r.__importDefault(n(44303)),o=n(38296);t.g=e=>{var{children:t=null,className:n="",to:s,isActive:l=!1,isDropdown:u=!1,showDivider:m,target:d,component:p="a",render:f}=e,v=r.__rest(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const g=p,b=l?"page":void 0,h=o.css(c.default.breadcrumbLink,l&&c.default.modifiers.current);return a.createElement("li",Object.assign({},v,{className:o.css(c.default.breadcrumbItem,n)}),m&&a.createElement("span",{className:c.default.breadcrumbItemDivider},a.createElement(i.default,null)),"button"===p&&a.createElement("button",{className:h,"aria-current":b,type:"button"},t),u&&a.createElement("span",{className:o.css(c.default.breadcrumbDropdown)},t),f&&f({className:h,ariaCurrent:b}),s&&!f&&a.createElement(g,{href:s,target:d,className:h,"aria-current":b},t),!s&&"button"!==p&&!u&&t)},t.g.displayName="BreadcrumbItem"},63540:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Text=t.TextVariants=void 0;const r=n(70655),a=r.__importStar(n(93264)),i=n(38296),c=r.__importDefault(n(62873)),o=n(23053);var s;!function(e){e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.p="p",e.a="a",e.small="small",e.blockquote="blockquote",e.pre="pre"}(s=t.TextVariants||(t.TextVariants={})),t.Text=e=>{var{children:n=null,className:l="",component:u=s.p,isVisitedLink:m=!1,ouiaId:d,ouiaSafe:p=!0}=e,f=r.__rest(e,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const v=u,g=o.useOUIAProps(t.Text.displayName,d,p);return a.createElement(v,Object.assign({},g,f,{"data-pf-content":!0,className:i.css(m&&u===s.a&&c.default.modifiers.visited,l)}),n)},t.Text.displayName="Text"},20018:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextContent=void 0;const r=n(70655),a=r.__importStar(n(93264)),i=r.__importDefault(n(62873)),c=n(38296);t.TextContent=e=>{var{children:t=null,className:n="",isVisited:o=!1}=e,s=r.__rest(e,["children","className","isVisited"]);return a.createElement("div",Object.assign({},s,{className:c.css(i.default.content,o&&i.default.modifiers.visited,n)}),t)},t.TextContent.displayName="TextContent"},47668:(e,t,n)=>{"use strict";t.Mu={name:"StarIcon",height:512,width:576,svgPath:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z",yOffset:0,xOffset:0},t.r7=n(35183).createIcon(t.Mu),t.ZP=t.r7},44303:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r}),n(58392);const r={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},62873:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r}),n(10108);const r={content:"pf-c-content",modifiers:{visited:"pf-m-visited",overpassFont:"pf-m-overpass-font"}}},53754:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(93264);const a=n.n(r)().createContext("light")},14748:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(93264),a=n.n(r),i=n(94184),c=n.n(i),o=n(28216),s=n(53754),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},u=function(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))};const m=(0,o.connect)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))((function(e){var t=e.path,n=e.params,r=void 0===n?{}:n,i=e.children,o=e.className,m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["path","params","children","className"]),d=function(){var e,n,a;if(null===(a=null===(n=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===n?void 0:n.$internal)||void 0===a?void 0:a.store){var i=window.insights.chrome.$internal.store.getState();if(t&&i)return t.split("/").reduce((function(e,t){var n,a;return 0===t.indexOf(":")?e.dynamic=l(l({},e.dynamic),((n={})["data-".concat((a=t.substr(1),a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=r[t.substr(1)],n)):e.staticPart=u(u([],e.staticPart,!0),""!==t?[t]:[],!0),e}),{staticPart:[i.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),p=d.dynamic,f=d.staticPart;return a().createElement(s.Z.Consumer,null,(function(e){var t;void 0===e&&(e="light");var n=c()(((t={})["pf-m-".concat(e)]="dark"===e,t));return{dark:a().createElement("section",l({},m,p,{"page-type":f.join("-"),className:"".concat(c()(o,"pf-l-page__main-section pf-c-page__main-section")," ").concat(n)}),a().Children.map(i,(function(e){return a().cloneElement(e,{className:"pf-m-dark"})}))),light:a().createElement("section",l({},m,p,{"page-type":f.join("-"),className:"".concat(c()(o,"pf-l-page__main-section pf-c-page__main-section"))}),i)}[e]}))}))},80123:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(93264),a=n.n(r),i=n(94184),c=n.n(i),o=n(53754),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},s.apply(this,arguments)};const l=function(e){var t=e.className,n=e.children,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["className","children"]),i=c()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return a().createElement(o.Z.Consumer,null,(function(e){var t,o;void 0===e&&(e="light");var l=c()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((o={})["pf-m-light"]="light"===e,o));return a().createElement("section",s({},r,{className:"".concat(i," ").concat(l),"widget-type":"InsightsPageHeader"}),n)}))}},75331:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(70885),a=n(93264),i=n.n(a),c=n(85991),o=n(49489),s=n(75662),l=n(45697),u=n.n(l),m=n(30893),d=n(75546),p=n(86896),f=function(e){var t,n=e.current,l=(0,p.Z)(),u=null===(t=(0,s.useLocation)().pathname)||void 0===t?void 0:t.split("/"),f=(0,a.useState)([]),v=(0,r.Z)(f,2),g=v[0],b=v[1],h=!("recommendations"===u[1]&&4===u.length)||"pathways"===u[2],y=(0,d.m1)({ruleId:u[2]},{skip:h}),_=y.data,E=y.isFetching;return(0,a.useEffect)((function(){var e;(e=[]).push({title:"".concat(l.formatMessage(m.Z.insightsHeader)," ").concat(u[1]),navigate:"/".concat(u[1])}),h||e.push({title:null==_?void 0:_.description,navigate:"/".concat(u[1],"/").concat(u[2])}),"pathways"===u[2]&&(e=[{title:"Advisor pathways",navigate:"/recommendations/pathways"}]),b(e)}),[_]),i().createElement(i().Fragment,null,!E&&g.length>0?i().createElement(c.a,{ouiaId:"detail"},g.map((function(e,t){return i().createElement(o.g,{key:t},i().createElement(s.Link,{to:e.navigate},e.title))})),i().createElement(o.g,{isActive:!0},n)):l.formatMessage(m.Z.loading))};f.propTypes={current:u().string};const v=f},95413:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>M});var r=n(4942),a=n(93264),i=n.n(a),c=n(63540),o=n(75331),s=n(23218),l=n(46891),u=n(14748),m=n(34702),d=n(80123),p=n(65790),f=n(47668),v=n(20018),g=n(77669),b=n(34348),h=n(94184),y=n.n(h),_=n(22938),E=n(91036),O=n.n(E),w=function(){return w=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},w.apply(this,arguments)};const x=function(e){var t,n,r=e.text,c=void 0===r?"":r,o=e.length,s=void 0===o?150:o,l=e.expandText,u=void 0===l?"Read more":l,m=e.hideExpandText,d=void 0!==m&&m,p=e.expandOnMouseOver,f=void 0!==p&&p,v=e.collapseText,g=void 0===v?"Collapse":v,b=e.className,h=e.inline,E=e.spaceBetween,x=y()("ins-c-truncate",b,((t={})["is-inline"]=h,t),((n={})["is-block"]=!h,n)),N=c.substring(0,s),T=c.length>s,j=(0,a.useState)(!1),k=j[0],P=j[1],I=function(e){e&&e.preventDefault(),P(!k)},S=i().createElement(_.Button,{className:"ins-c-expand-button",variant:"link",onClick:I},u),D=i().createElement(_.Button,{className:"ins-c-collapse-button",variant:"link",onClick:I},g),Z=function(e){return{__html:O()(e)}}(!1===k?"".concat(N).concat(T?"...":""):c),M=f&&{onMouseEnter:function(){return P(!0)},onMouseLeave:function(){return P(!1)}};return h?i().createElement(i().Fragment,null,i().createElement("span",w({className:x,"widget-type":"InsightsTruncateInline",dangerouslySetInnerHTML:Z},M)),!d&&T&&(!1===k?S:D)):i().createElement(_.Stack,{className:x},i().createElement(_.StackItem,w({},M),i().createElement("span",{"widget-type":"InsightsTruncateBlock",dangerouslySetInnerHTML:Z})),!d&&T&&i().createElement(_.StackItem,{className:y()({"pf-u-mt-sm":E})},!1===k?S:D))};var N=n(30893),T=n(28672),j=n(28216),k=n(77187),P=n(86896),I=n(75662),S=n(97109);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const M=function(){var e=(0,P.Z)(),t=(0,j.useDispatch)(),n=(0,j.useSelector)((function(e){return e.filters.selectedTags})),r=(0,j.useSelector)((function(e){return e.filters.workloads})),h=(0,j.useSelector)((function(e){return e.filters.SID})),y=(0,j.useSelector)((function(e){return e.filters.recState})),_=(0,I.useParams)().id,E=(null==n?void 0:n.length)&&{tags:n};r&&(E=Z(Z({},E),(0,S.s0)(r,h)));var O=(0,k.Yi)(Z(Z({},E),{topicId:_})),w=O.data,D=void 0===w?{}:w,M=O.isLoading,L=O.isFetching,C=O.isError;return(0,a.useEffect)((function(){var e=Z({},y);return t((0,T.hb)({impacting:!0,rule_status:"enabled",topic:_,sort:"-total_risk",limit:10,offset:0})),function(){return t((0,T.hb)(e))}}),[]),(0,a.useEffect)((function(){if(D&&D.name){var t="".concat(D.name," - ").concat(N.Z.topics.defaultMessage);document.title=e.formatMessage(N.Z.documentTitle,{subnav:t})}}),[D]),i().createElement(i().Fragment,null,i().createElement(d.Z,null,(null==D?void 0:D.name)&&i().createElement(o.Z,{current:null==D?void 0:D.name,ouiaId:"details"}),!L&&i().createElement(i().Fragment,null,i().createElement(b.Dx,{headingLevel:"h3",size:"2xl",className:"pf-u-mb-lg"},D.name,D.featured&&i().createElement(s.Label,{color:"blue",className:"adv-c-label pf-m-compact",icon:i().createElement(f.ZP,null)},e.formatMessage(N.Z.featured))),i().createElement(v.TextContent,{className:"pf-u-mt-md"},i().createElement(c.Text,{component:c.TextVariants.p},i().createElement(x,{text:D.description,length:600,expandText:e.formatMessage(N.Z.readmore),collapseText:e.formatMessage(N.Z.readless),inline:!0})))),L||M&&i().createElement(l.Z,null)),i().createElement(u.Z,null,i().createElement(i().Fragment,null,C?i().createElement(m.Z,{icon:g.default,title:e.formatMessage(N.Z.topicDetailslNodetailsTitle),text:e.formatMessage(N.Z.topicDetailslNodetailsBody)}):i().createElement(i().Fragment,null,i().createElement(b.Dx,{headingLevel:"h3",size:"2xl",className:"pf-u-mb-lg"},e.formatMessage(N.Z.recommendations)),i().createElement(p.default,null)))))}},27561:(e,t,n)=>{var r=n(67990),a=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(a,""):e}},67990:e=>{var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:(e,t,n)=>{var r=n(13218),a=n(7771),i=n(14841),c=Math.max,o=Math.min;e.exports=function(e,t,n){var s,l,u,m,d,p,f=0,v=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=s,r=l;return s=l=void 0,f=t,m=e.apply(r,n)}function y(e){return f=e,d=setTimeout(E,t),v?h(e):m}function _(e){var n=e-p;return void 0===p||n>=t||n<0||g&&e-f>=u}function E(){var e=a();if(_(e))return O(e);d=setTimeout(E,function(e){var n=t-(e-p);return g?o(n,u-(e-f)):n}(e))}function O(e){return d=void 0,b&&s?h(e):(s=l=void 0,m)}function w(){var e=a(),n=_(e);if(s=arguments,l=this,p=e,n){if(void 0===d)return y(p);if(g)return clearTimeout(d),d=setTimeout(E,t),h(p)}return void 0===d&&(d=setTimeout(E,t)),m}return t=i(t)||0,r(n)&&(v=!!n.leading,u=(g="maxWait"in n)?c(i(n.maxWait)||0,t):u,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==d&&clearTimeout(d),f=0,s=p=l=d=void 0},w.flush=function(){return void 0===d?m:O(a())},w}},7771:(e,t,n)=>{var r=n(55639);e.exports=function(){return r.Date.now()}},14841:(e,t,n)=>{var r=n(27561),a=n(13218),i=n(33448),c=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=o.test(e);return n||s.test(e)?l(e.slice(2),n?2:8):c.test(e)?NaN:+e}},45467:()=>{},58392:()=>{},32857:()=>{},10108:()=>{}}]);