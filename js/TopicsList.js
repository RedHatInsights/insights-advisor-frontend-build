(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{431:function(t,e,n){"use strict";var r=n(163),o=n(164),a=n(229),c=n(0),i=n.n(c);e.a=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.Card,null,i.a.createElement(o.CardBody,null,i.a.createElement(a.List,null))))}},434:function(t,e){var n=Array.isArray;t.exports=n},439:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".pf-c-label{--pf-c-label--PaddingTop: var(--pf-global--spacer--xs);--pf-c-label--PaddingRight: var(--pf-global--spacer--sm);--pf-c-label--PaddingBottom: var(--pf-global--spacer--xs);--pf-c-label--PaddingLeft: var(--pf-global--spacer--sm);--pf-c-label--BorderRadius: var(--pf-global--BorderRadius--sm);--pf-c-label--BackgroundColor: var(--pf-global--primary-color--100);--pf-c-label--Color: var(--pf-global--Color--light-100);--pf-c-label--FontSize: var(--pf-global--FontSize--sm);--pf-c-label--m-compact--FontSize: var(--pf-global--FontSize--xs);display:inline-block;padding:var(--pf-c-label--PaddingTop) var(--pf-c-label--PaddingRight) var(--pf-c-label--PaddingBottom) var(--pf-c-label--PaddingLeft);font-size:var(--pf-c-label--FontSize);color:var(--pf-c-label--Color);text-align:center;white-space:nowrap;background-color:var(--pf-c-label--BackgroundColor);border-radius:var(--pf-c-label--BorderRadius)}.pf-c-label.pf-m-compact{--pf-c-label--FontSize: var(--pf-c-label--m-compact--FontSize)}\n",""])},450:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},451:function(t,e){t.exports=function(t,e,n){for(var r=n-1,o=t.length;++r<o;)if(t[r]===e)return r;return-1}},452:function(t,e){t.exports=function(t){return t}},480:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Label=void 0;var r=u(n(1)),o=function(t){if(t&&t.__esModule)return t;var e=i();if(e&&e.has(t))return e.get(t);var n={};if(null!=t){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var a=r?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=t[o]}}n.default=t,e&&e.set(t,n);return n}(n(0)),a=u(n(524)),c=n(2);function i(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return i=function(){return t},t}function u(t){return t&&t.__esModule?t:{default:t}}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function f(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=function(t){var e=t.children,n=t.className,r=void 0===n?"":n,i=t.isCompact,u=void 0!==i&&i,s=f(t,["children","className","isCompact"]);return o.createElement("span",l({},s,{className:(0,c.css)(a.default.label,r,u&&a.default.modifiers.compact)}),e)};e.Label=s,s.propTypes={children:r.default.node.isRequired,className:r.default.string,isCompact:r.default.bool}},490:function(t,e,n){var r=n(434);t.exports=function(){if(!arguments.length)return[];var t=arguments[0];return r(t)?t:[t]}},491:function(t,e){t.exports=function(t){return function(e){return t(e)}}},492:function(t,e,n){var r=n(451);t.exports=function(t,e){return!!(null==t?0:t.length)&&r(t,e,0)>-1}},493:function(t,e,n){var r=n(452),o=n(494),a=n(496);t.exports=function(t,e){return a(o(t,e,r),t+"")}},494:function(t,e,n){var r=n(495),o=Math.max;t.exports=function(t,e,n){return e=o(void 0===e?t.length-1:e,0),function(){for(var a=arguments,c=-1,i=o(a.length-e,0),u=Array(i);++c<i;)u[c]=a[e+c];c=-1;for(var l=Array(e+1);++c<e;)l[c]=a[c];return l[e]=n(u),r(t,this,l)}}},495:function(t,e){t.exports=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}},496:function(t,e){t.exports=function(t){return t}},497:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},498:function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},499:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},524:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(525),e.default={label:"pf-c-label",modifiers:{compact:"pf-m-compact"}}},525:function(t,e,n){var r=n(439);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(7)(r,o);r.locals&&(t.exports=r.locals),t.hot.accept(439,(function(){var e=n(439);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var n,r=0;for(n in t){if(!e||t[n]!==e[n])return!1;r++}for(n in e)r--;return 0===r}(r.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(e)})),t.hot.dispose((function(){a()}))},526:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.StarIconConfig=void 0;var r,o=(r=n(6))&&r.__esModule?r:{default:r};var a={name:"StarIcon",height:512,width:576,svgPath:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z",yOffset:"",xOffset:"",transform:""};e.StarIconConfig=a;var c=(0,o.default)(a);e.default=c},533:function(t,e,n){var r=n(779);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},534:function(t,e){t.exports=function(t){return t}},691:function(t,e,n){var r=n(434),o=n(717),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!o(t))||(c.test(t)||!a.test(t)||null!=e&&t in Object(e))}},709:function(t,e){t.exports=function(){return!1}},710:function(t,e,n){var r=n(777),o=n(778),a=n(780),c=n(781),i=n(782);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=c,u.prototype.set=i,t.exports=u},711:function(t,e,n){var r=n(783),o=n(499);t.exports=function t(e,n,a,c,i){return e===n||(null==e||null==n||!o(e)&&!o(n)?e!=e&&n!=n:r(e,n,a,c,t,i))}},712:function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},713:function(t,e,n){var r=n(497);t.exports=function(t){return t==t&&!r(t)}},714:function(t,e){t.exports=function(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}}},715:function(t,e,n){var r=n(716),o=n(534);t.exports=function(t,e){for(var n=0,a=(e=r(e,t)).length;null!=t&&n<a;)t=t[o(e[n++])];return n&&n==a?t:void 0}},716:function(t,e,n){var r=n(434),o=n(691),a=n(796),c=n(798);t.exports=function(t,e){return r(t)?t:o(t,e)?[t]:a(c(t))}},717:function(t,e){t.exports=function(){return!1}},766:function(t,e,n){var r=n(767),o=n(773),a=n(493),c=n(810),i=a((function(t,e){if(null==t)return[];var n=e.length;return n>1&&c(t,e[0],e[1])?e=[]:n>2&&c(e[0],e[1],e[2])&&(e=[e[0]]),o(t,r(e,1),[])}));t.exports=i},767:function(t,e,n){var r=n(768),o=n(769);t.exports=function t(e,n,a,c,i){var u=-1,l=e.length;for(a||(a=o),i||(i=[]);++u<l;){var f=e[u];n>0&&a(f)?n>1?t(f,n-1,a,c,i):r(i,f):c||(i[i.length]=f)}return i}},768:function(t,e){t.exports=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}},769:function(t,e,n){var r=n(770),o=n(709),a=n(434),c=r?r.isConcatSpreadable:void 0;t.exports=function(t){return a(t)||o(t)||!!(c&&t&&t[c])}},770:function(t,e,n){var r=n(771).Symbol;t.exports=r},771:function(t,e,n){var r=n(772),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},772:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(38))},773:function(t,e,n){var r=n(450),o=n(774),a=n(806),c=n(807),i=n(491),u=n(808),l=n(452);t.exports=function(t,e,n){var f=-1;e=r(e.length?e:[l],i(o));var s=a(t,(function(t,n,o){return{criteria:r(e,(function(e){return e(t)})),index:++f,value:t}}));return c(s,(function(t,e){return u(t,e,n)}))}},774:function(t,e,n){var r=n(775),o=n(794),a=n(452),c=n(434),i=n(803);t.exports=function(t){return"function"==typeof t?t:null==t?a:"object"==typeof t?c(t)?o(t[0],t[1]):r(t):i(t)}},775:function(t,e,n){var r=n(776),o=n(792),a=n(714);t.exports=function(t){var e=o(t);return 1==e.length&&e[0][2]?a(e[0][0],e[0][1]):function(n){return n===t||r(n,t,e)}}},776:function(t,e,n){var r=n(710),o=n(711);t.exports=function(t,e,n,a){var c=n.length,i=c,u=!a;if(null==t)return!i;for(t=Object(t);c--;){var l=n[c];if(u&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++c<i;){var f=(l=n[c])[0],s=t[f],p=l[1];if(u&&l[2]){if(void 0===s&&!(f in t))return!1}else{var v=new r;if(a)var d=a(s,p,f,t,e,v);if(!(void 0===d?o(p,s,3,a,v):d))return!1}}return!0}},777:function(t,e){t.exports=function(){this.__data__=[],this.size=0}},778:function(t,e,n){var r=n(533),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():o.call(e,n,1),--this.size,!0)}},779:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},780:function(t,e,n){var r=n(533);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},781:function(t,e,n){var r=n(533);t.exports=function(t){return r(this.__data__,t)>-1}},782:function(t,e,n){var r=n(533);t.exports=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}},783:function(t,e,n){var r=n(710),o=n(784),a=n(786),c=n(787),i=n(789),u=n(434),l=n(790),f=n(791),s="[object Object]",p=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,v,d,b){var g=u(t),m=u(e),h=g?"[object Array]":i(t),y=m?"[object Array]":i(e),x=(h="[object Arguments]"==h?s:h)==s,O=(y="[object Arguments]"==y?s:y)==s,j=h==y;if(j&&l(t)){if(!l(e))return!1;g=!0,x=!1}if(j&&!x)return b||(b=new r),g||f(t)?o(t,e,n,v,d,b):a(t,e,h,n,v,d,b);if(!(1&n)){var _=x&&p.call(t,"__wrapped__"),w=O&&p.call(e,"__wrapped__");if(_||w){var P=_?t.value():t,S=w?e.value():e;return b||(b=new r),d(P,S,n,v,b)}}return!!j&&(b||(b=new r),c(t,e,n,v,d,b))}},784:function(t,e,n){var r=n(490),o=n(785),a=n(492);t.exports=function(t,e,n,c,i,u){var l=1&n,f=t.length,s=e.length;if(f!=s&&!(l&&s>f))return!1;var p=u.get(t);if(p&&u.get(e))return p==e;var v=-1,d=!0,b=2&n?new r:void 0;for(u.set(t,e),u.set(e,t);++v<f;){var g=t[v],m=e[v];if(c)var h=l?c(m,g,v,e,t,u):c(g,m,v,t,e,u);if(void 0!==h){if(h)continue;d=!1;break}if(b){if(!o(e,(function(t,e){if(!a(b,e)&&(g===t||i(g,t,n,c,u)))return b.push(e)}))){d=!1;break}}else if(g!==m&&!i(g,m,n,c,u)){d=!1;break}}return u.delete(t),u.delete(e),d}},785:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}},786:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},787:function(t,e,n){var r=n(788),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,a,c,i){var u=1&n,l=r(t),f=l.length;if(f!=r(e).length&&!u)return!1;for(var s=f;s--;){var p=l[s];if(!(u?p in e:o.call(e,p)))return!1}var v=i.get(t);if(v&&i.get(e))return v==e;var d=!0;i.set(t,e),i.set(e,t);for(var b=u;++s<f;){var g=t[p=l[s]],m=e[p];if(a)var h=u?a(m,g,p,e,t,i):a(g,m,p,t,e,i);if(!(void 0===h?g===m||c(g,m,n,a,i):h)){d=!1;break}b||(b="constructor"==p)}if(d&&!b){var y=t.constructor,x=e.constructor;y!=x&&"constructor"in t&&"constructor"in e&&!("function"==typeof y&&y instanceof y&&"function"==typeof x&&x instanceof x)&&(d=!1)}return i.delete(t),i.delete(e),d}},788:function(t,e,n){var r=n(712)(Object.keys,Object);t.exports=r},789:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},790:function(t,e){t.exports=function(){return!1}},791:function(t,e){t.exports=function(){return!1}},792:function(t,e,n){var r=n(713),o=n(793);t.exports=function(t){for(var e=o(t),n=e.length;n--;){var a=e[n],c=t[a];e[n]=[a,c,r(c)]}return e}},793:function(t,e,n){var r=n(712)(Object.keys,Object);t.exports=r},794:function(t,e,n){var r=n(711),o=n(795),a=n(799),c=n(691),i=n(713),u=n(714),l=n(534);t.exports=function(t,e){return c(t)&&i(e)?u(l(t),e):function(n){var c=o(n,t);return void 0===c&&c===e?a(n,t):r(e,c,3)}}},795:function(t,e,n){var r=n(715);t.exports=function(t,e,n){var o=null==t?void 0:r(t,e);return void 0===o?n:o}},796:function(t,e,n){var r=n(797),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,c=r((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,(function(t,n,r,o){e.push(r?o.replace(a,"$1"):n||t)})),e}));t.exports=c},797:function(t,e){t.exports=function(t){return t}},798:function(t,e){t.exports=function(t){return t}},799:function(t,e,n){var r=n(800),o=n(801);t.exports=function(t,e){return null!=t&&o(t,e,r)}},800:function(t,e){t.exports=function(t,e){return null!=t&&e in Object(t)}},801:function(t,e,n){var r=n(716),o=n(709),a=n(434),c=n(802),i=n(498),u=n(534);t.exports=function(t,e,n){for(var l=-1,f=(e=r(e,t)).length,s=!1;++l<f;){var p=u(e[l]);if(!(s=null!=t&&n(t,p)))break;t=t[p]}return s||++l!=f?s:!!(f=null==t?0:t.length)&&i(f)&&c(p,f)&&(a(t)||o(t))}},802:function(t,e){var n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&n.test(t))&&t>-1&&t%1==0&&t<e}},803:function(t,e,n){var r=n(804),o=n(805),a=n(691),c=n(534);t.exports=function(t){return a(t)?r(c(t)):o(t)}},804:function(t,e){t.exports=function(t){return function(e){return null==e?void 0:e[t]}}},805:function(t,e,n){var r=n(715);t.exports=function(t){return function(e){return r(e,t)}}},806:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},807:function(t,e){t.exports=function(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}},808:function(t,e,n){var r=n(809);t.exports=function(t,e,n){for(var o=-1,a=t.criteria,c=e.criteria,i=a.length,u=n.length;++o<i;){var l=r(a[o],c[o]);if(l)return o>=u?l:l*("desc"==n[o]?-1:1)}return t.index-e.index}},809:function(t,e,n){var r=n(717);t.exports=function(t,e){if(t!==e){var n=void 0!==t,o=null===t,a=t==t,c=r(t),i=void 0!==e,u=null===e,l=e==e,f=r(e);if(!u&&!f&&!c&&t>e||c&&i&&l&&!u&&!f||o&&i&&l||!n&&l||!a)return 1;if(!o&&!c&&!f&&t<e||f&&n&&a&&!o&&!c||u&&n&&a||!i&&a||!l)return-1}return 0}},810:function(t,e){t.exports=function(){return!1}},833:function(t,e,n){"use strict";n.r(e);var r=n(93),o=n.n(r),a=n(427),c=n(478),i=n(0),u=n.n(i),l=n(443),f=n(1),s=n.n(f),p=n(160),v=n.n(p),d=n(766),b=n.n(d),g=n(203),m=n(23),h=n(207),y=n(206),x=n(480),O=n(64),j=n(431),_=n(447),w=n(527),P=n(244),S=n.n(P),E=n(526),M=n.n(E),k=n(101),C=n.n(k),F=n(63),A=n(15),L=n(10),T=n(162),z=n.n(T),B=function(t){var e=t.topics,n=t.topicsFetchStatus,r=t.intl,o=Object(i.useState)(""),a=v()(o,2),c=a[0],l=a[1],f=Object(i.useState)([{title:r.formatMessage(L.a.name),transforms:[g.a]},"",{title:r.formatMessage(L.a.featured),transforms:[g.a]},{title:r.formatMessage(L.a.affectedSystems),transforms:[g.a]}]),s=v()(f,1)[0],p=Object(i.useState)([]),d=v()(p,2),P=d[0],E=d[1],k=Object(i.useState)({index:2,direction:"desc"}),F=v()(k,2),A=F[0],T=F[1],z=function(t){return t.flatMap((function(t,e){return 0===c.length||t.name.toLowerCase().includes(c.toLowerCase())?[{topic:t,cells:[{title:u.a.createElement("span",{key:e},u.a.createElement(O.Link,{key:e,to:"/topics/".concat(t.slug)}," ",t.name," ")),props:{colSpan:2}},{title:u.a.createElement("span",{key:e}," ",t.featured&&u.a.createElement(x.Label,null," ",u.a.createElement(M.a,null)," ",r.formatMessage(L.a.featured))," ")},{title:u.a.createElement("span",{className:"pf-m-center",key:e}," ",t.impacted_systems_count,"                ")}]}]:[]}))},B=function(t,n,r){var o={0:b()(e,[function(t){return t.name}]),2:b()(e,[function(t){return t.featured}]),3:b()(e,[function(t){return t.impacted_systems_count}])},a=r===m.a.asc?o[n]:o[n].reverse();T({index:n,direction:r}),E(z(a))},D={filters:c.length?[{category:"Description",chips:[{name:c,value:c}]}]:[],onDelete:function(){l(""),T({})}};Object(i.useEffect)((function(){A.index?B(0,A.index,A.direction):E(z(e).asMutable())}),[e,c]);var N=[{label:r.formatMessage(L.a.name),filterValues:{key:"text-filter",onChange:function(t,e){l(e),T({})},value:c}}];return(u.a.createElement(u.a.Fragment,null,""===n||"pending"===n&&u.a.createElement(j.a,null),"fulfilled"===n&&e.length>0&&u.a.createElement(u.a.Fragment,null,u.a.createElement(w.PrimaryToolbar,{filterConfig:{items:N},activeFiltersConfig:D}),u.a.createElement(m.b,{"aria-label":"topics-table",sortBy:A,onSort:B,cells:s,rows:P},u.a.createElement(h.a,null),u.a.createElement(y.a,null),0===P.length&&"pending"!==n&&E([{cells:[{title:u.a.createElement(_.a,{icon:S.a,title:r.formatMessage(L.a.noHitsTitle,{item:r.formatMessage(L.a.topics).toLowerCase()}),text:r.formatMessage(L.a.noHitsBody,{item:r.formatMessage(L.a.topics).toLowerCase()})}),props:{colSpan:4}}]}]))),"failed"===n||"rejected"===n||"fulfilled"===n&&0===e.length&&u.a.createElement(_.a,{icon:C.a,title:r.formatMessage(L.a.topicsListNotopicsTitle),text:r.formatMessage(L.a.topicsListNotopicsBody)})))};B.propTypes={topics:s.a.array,topicsFetchStatus:s.a.string,intl:s.a.any};var D=Object(A.c)(z()(Object(F.connect)((function(t){return{topics:t.AdvisorStore.topics,topicsFetchStatus:t.AdvisorStore.topicsFetchStatus}}),null)(B))),N=n(104);function R(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var H=Object(N.a)((function(){return Promise.all([n.e(0),n.e(2),n.e(5)]).then(n.bind(null,830))})),I=function(t){var e=t.fetchTopics,n=t.intl,r=t.selectedTags;return Object(i.useEffect)((function(){var t=r.length&&{tags:r.join()};e(t)}),[e,r]),u.a.createElement(u.a.Fragment,null,u.a.createElement(H,null),u.a.createElement(c.PageHeader,null,u.a.createElement(c.PageHeaderTitle,{title:n.formatMessage(L.a.topics)})),u.a.createElement(l.Main,null,u.a.createElement(D,null)))};I.displayName="list-topics",I.propTypes={fetchTopics:s.a.func,intl:s.a.any,selectedTags:s.a.array};e.default=Object(A.c)(z()(Object(F.connect)((function(t,e){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?R(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({selectedTags:t.AdvisorStore.selectedTags},e)}),(function(t){return{fetchTopics:function(e){return t(a.h(e))}}}))(I)))}}]);
//# sourceMappingURL=TopicsList.js.map