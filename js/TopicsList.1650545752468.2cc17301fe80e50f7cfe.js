(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[7641],{71070:(e,t,r)=>{"use strict";t.xQ={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},t.W1=r(35183).createIcon(t.xQ),t.ZP=t.W1},84675:(e,t,r)=>{"use strict";t.Mu={name:"StarIcon",height:512,width:576,svgPath:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z",yOffset:0,xOffset:0},t.r7=r(35183).createIcon(t.Mu),t.ZP=t.r7},77669:(e,t,r)=>{"use strict";t.__esModule=!0,t.TimesCircleIconConfig={name:"TimesCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z",yOffset:0,xOffset:0},t.TimesCircleIcon=r(35183).createIcon(t.TimesCircleIconConfig),t.default=t.TimesCircleIcon},53754:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(93264);const a=r.n(n)().createContext("light")},14748:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(93264),a=r.n(n),o=r(94184),c=r.n(o),i=r(28216),s=r(53754),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},u=function(e,t,r){if(r||2===arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))};const f=(0,i.connect)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))((function(e){var t=e.path,r=e.params,n=void 0===r?{}:r,o=e.children,i=e.className,f=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["path","params","children","className"]),p=function(){var e,r,a;if(null===(a=null===(r=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===r?void 0:r.$internal)||void 0===a?void 0:a.store){var o=window.insights.chrome.$internal.store.getState();if(t&&o)return t.split("/").reduce((function(e,t){var r,a;return 0===t.indexOf(":")?e.dynamic=l(l({},e.dynamic),((r={})["data-".concat((a=t.substr(1),a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=n[t.substr(1)],r)):e.staticPart=u(u([],e.staticPart,!0),""!==t?[t]:[],!0),e}),{staticPart:[o.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),m=p.dynamic,d=p.staticPart;return a().createElement(s.Z.Consumer,null,(function(e){var t;void 0===e&&(e="light");var r=c()(((t={})["pf-m-".concat(e)]="dark"===e,t));return{dark:a().createElement("section",l({},f,m,{"page-type":d.join("-"),className:"".concat(c()(i,"pf-l-page__main-section pf-c-page__main-section")," ").concat(r)}),a().Children.map(o,(function(e){return a().cloneElement(e,{className:"pf-m-dark"})}))),light:a().createElement("section",l({},f,m,{"page-type":d.join("-"),className:"".concat(c()(i,"pf-l-page__main-section pf-c-page__main-section"))}),o)}[e]}))}))},80123:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(93264),a=r.n(n),o=r(94184),c=r.n(o),i=r(53754),s=function(){return(s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};const l=function(e){var t=e.className,r=e.children,n=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["className","children"]),o=c()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return a().createElement(i.Z.Consumer,null,(function(e){var t,i;void 0===e&&(e="light");var l=c()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((i={})["pf-m-light"]="light"===e,i));return a().createElement("section",s({},n,{className:"".concat(o," ").concat(l),"widget-type":"InsightsPageHeader"}),r)}))}},39173:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(93264),a=r.n(n),o=r(94184),c=r.n(o),i=r(57262);const s=function(e){var t=e.className,r=e.title,n=c()(t);return a().createElement(i.Title,{headingLevel:"h1",size:"2xl",className:n,"widget-type":"InsightsPageHeaderTitle"},r)}},37468:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>I});var n=r(4942),a=r(80123),o=r(39173),c=r(14748),i=r(93264),s=r.n(i),l=r(70885),u=r(89734),f=r.n(u),p=r(30381),m=r(23218),d=r(75662),g=r(46891),v=r(34702),h=r(7887),y=r(45697),b=r.n(y),O=r(71070),w=r(84675),Z=r(77669),E=r(30893),x=r(86896),P=function(e){var t=e.props,r=(0,x.Z)(),n=(0,i.useState)(""),a=(0,l.Z)(n,2),o=a[0],c=a[1],u=t.data,y=t.isLoading,b=t.isFetching,P=t.isError,j=(0,i.useState)([{title:r.formatMessage(E.Z.name),transforms:[p.sortable]},"",{title:r.formatMessage(E.Z.featured),transforms:[p.sortable,p.wrappable]},{title:r.formatMessage(E.Z.affectedSystems),transforms:[p.sortable,p.wrappable]}]),C=(0,l.Z)(j,1)[0],S=(0,i.useState)([]),L=(0,l.Z)(S,2),M=L[0],_=L[1],k=(0,i.useState)({index:2,direction:"desc"}),I=(0,l.Z)(k,2),T=I[0],N=I[1],D=function(e){return e.flatMap((function(e,t){return 0===o.length||e.name.toLowerCase().includes(o.toLowerCase())?[{topic:e,cells:[{title:s().createElement("span",{key:t},s().createElement(d.Link,{key:t,to:"/topics/".concat(e.slug)}," ",e.name," ")),props:{colSpan:2}},{title:s().createElement("span",{key:t}," ",e.featured&&s().createElement(m.Label,{color:"blue",icon:s().createElement(w.ZP,null),isCompact:!0},r.formatMessage(E.Z.featured))," ")},{title:s().createElement("span",{className:"pf-m-center",key:t}," ",e.impacted_systems_count)}]}]:[]}))},F=function(e,t,r){var n={0:f()(u,[function(e){return e.name}]),2:f()(u,[function(e){return e.featured}]),3:f()(u,[function(e){return e.impacted_systems_count}])},a=r===p.SortByDirection.asc?n[t]:n[t].reverse();N({index:t,direction:r}),_(D(a))},H={filters:o.length?[{category:"Description",chips:[{name:o,value:o}]}]:[],onDelete:function(){c(""),N({})}};(0,i.useEffect)((function(){T.index?F(0,T.index,T.direction):_(D(u))}),[u,o]);var z=[{label:r.formatMessage(E.Z.name).toLowerCase(),filterValues:{key:"text-filter",onChange:function(e,t){c(t),N({})},value:o}}];return s().createElement(s().Fragment,null,y||b?s().createElement(g.Z,null):!b&&u.length>0?s().createElement(s().Fragment,null,s().createElement(h.Z,{filterConfig:{items:z},activeFiltersConfig:H}),s().createElement(p.Table,{"aria-label":"topics-table",sortBy:T,onSort:F,cells:C,rows:M,ouiaId:"topicTable",isStickyHeader:!0},s().createElement(p.TableHeader,null),s().createElement(p.TableBody,null),0===M.length&&!b&&_([{cells:[{title:s().createElement(v.Z,{icon:O.ZP,title:r.formatMessage(E.Z.noHitsTitle,{item:r.formatMessage(E.Z.topics).toLowerCase()}),text:r.formatMessage(E.Z.topicsListNoHitsBody)}),props:{colSpan:4}}]}]))):P&&s().createElement(v.Z,{icon:Z.default,title:r.formatMessage(E.Z.topicsListNotopicsTitle),text:r.formatMessage(E.Z.topicsListNotopicsBody)}))};P.propTypes={props:b().object,data:b().array,isLoading:b().bool,isFetching:b().bool,isError:b().bool};const j=P;var C=r(77187),S=r(28216),L=r(97109);function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k=function(){var e=(0,x.Z)(),t=(0,S.useSelector)((function(e){return e.filters.selectedTags})),r=(0,S.useSelector)((function(e){return e.filters.workloads})),n=(0,S.useSelector)((function(e){return e.filters.SID}));document.title=e.formatMessage(E.Z.documentTitle,{subnav:E.Z.topics.defaultMessage});var i=(null==t?void 0:t.length)&&{tags:t};r&&(i=_(_({},i),(0,L.s0)(r,n)));var l=(0,C.Fe)(i),u=l.data,f=void 0===u?[]:u,p=l.isLoading,m=l.isFetching,d=l.isError;return s().createElement(s().Fragment,null,s().createElement(a.Z,null,s().createElement(o.Z,{title:"".concat(e.formatMessage(E.Z.insightsHeader)," ").concat(e.formatMessage(E.Z.topics).toLowerCase())})),s().createElement(c.Z,null,s().createElement(j,{props:{data:f,isLoading:p,isFetching:m,isError:d}})))};k.displayName="list-topics";const I=k},89881:(e,t,r)=>{var n=r(47816),a=r(99291)(n);e.exports=a},21078:(e,t,r)=>{var n=r(62488),a=r(37285);e.exports=function e(t,r,o,c,i){var s=-1,l=t.length;for(o||(o=a),i||(i=[]);++s<l;){var u=t[s];r>0&&o(u)?r>1?e(u,r-1,o,c,i):n(i,u):c||(i[i.length]=u)}return i}},69199:(e,t,r)=>{var n=r(89881),a=r(98612);e.exports=function(e,t){var r=-1,o=a(e)?Array(e.length):[];return n(e,(function(e,n,a){o[++r]=t(e,n,a)})),o}},82689:(e,t,r)=>{var n=r(29932),a=r(97786),o=r(67206),c=r(69199),i=r(71131),s=r(7518),l=r(85022),u=r(6557),f=r(1469);e.exports=function(e,t,r){t=t.length?n(t,(function(e){return f(e)?function(t){return a(t,1===e.length?e[0]:e)}:e})):[u];var p=-1;t=n(t,s(o));var m=c(e,(function(e,r,a){return{criteria:n(t,(function(t){return t(e)})),index:++p,value:e}}));return i(m,(function(e,t){return l(e,t,r)}))}},71131:e=>{e.exports=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}},26393:(e,t,r)=>{var n=r(33448);e.exports=function(e,t){if(e!==t){var r=void 0!==e,a=null===e,o=e==e,c=n(e),i=void 0!==t,s=null===t,l=t==t,u=n(t);if(!s&&!u&&!c&&e>t||c&&i&&l&&!s&&!u||a&&i&&l||!r&&l||!o)return 1;if(!a&&!c&&!u&&e<t||u&&r&&o&&!a&&!c||s&&r&&o||!i&&o||!l)return-1}return 0}},85022:(e,t,r)=>{var n=r(26393);e.exports=function(e,t,r){for(var a=-1,o=e.criteria,c=t.criteria,i=o.length,s=r.length;++a<i;){var l=n(o[a],c[a]);if(l)return a>=s?l:l*("desc"==r[a]?-1:1)}return e.index-t.index}},99291:(e,t,r)=>{var n=r(98612);e.exports=function(e,t){return function(r,a){if(null==r)return r;if(!n(r))return e(r,a);for(var o=r.length,c=t?o:-1,i=Object(r);(t?c--:++c<o)&&!1!==a(i[c],c,i););return r}}},37285:(e,t,r)=>{var n=r(62705),a=r(35694),o=r(1469),c=n?n.isConcatSpreadable:void 0;e.exports=function(e){return o(e)||a(e)||!!(c&&e&&e[c])}},89734:(e,t,r)=>{var n=r(21078),a=r(82689),o=r(5976),c=r(16612),i=o((function(e,t){if(null==e)return[];var r=t.length;return r>1&&c(e,t[0],t[1])?t=[]:r>2&&c(t[0],t[1],t[2])&&(t=[t[0]]),a(e,n(t,1),[])}));e.exports=i}}]);
//# sourceMappingURL=../sourcemaps/TopicsList.11643decb516398c1ba67e18ba08097b.js.map