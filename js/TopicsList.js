(window.webpackJsonp=window.webpackJsonp||[]).push([[19,4],{1152:function(t,n,e){(function(n){var e="object"==typeof n&&n&&n.Object===Object&&n;t.exports=e}).call(this,e(31))},1178:function(t,n){t.exports=function(){return!1}},1179:function(t,n){t.exports=function(){return!1}},1180:function(t,n,e){var r=e(1255),o=e(1256);t.exports=function(t,n){return null!=t&&o(t,n,r)}},1181:function(t,n){var e=/^(?:0|[1-9]\d*)$/;t.exports=function(t,n){var r=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&e.test(t))&&t>-1&&t%1==0&&t<n}},1185:function(t,n,e){var r=e(1152),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},1236:function(t,n,e){var r=e(873),o=e(908),a=e(1258),u=e(1259),c=e(913),i=e(1260),s=e(910);t.exports=function(t,n,e){var f=-1;n=r(n.length?n:[s],c(o));var l=a(t,(function(t,e,o){return{criteria:r(n,(function(n){return n(t)})),index:++f,value:t}}));return u(l,(function(t,n){return i(t,n,e)}))}},1237:function(t,n,e){var r=e(1238),o=e(1250),a=e(995);t.exports=function(t){var n=o(t);return 1==n.length&&n[0][2]?a(n[0][0],n[0][1]):function(e){return e===t||r(e,t,n)}}},1238:function(t,n,e){var r=e(992),o=e(966);t.exports=function(t,n,e,a){var u=e.length,c=u,i=!a;if(null==t)return!c;for(t=Object(t);u--;){var s=e[u];if(i&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++u<c;){var f=(s=e[u])[0],l=t[f],p=s[1];if(i&&s[2]){if(void 0===l&&!(f in t))return!1}else{var v=new r;if(a)var d=a(l,p,f,t,n,v);if(!(void 0===d?o(p,l,3,a,v):d))return!1}}return!0}},1239:function(t,n){t.exports=function(){this.__data__=[],this.size=0}},1240:function(t,n,e){var r=e(909),o=Array.prototype.splice;t.exports=function(t){var n=this.__data__,e=r(n,t);return!(e<0)&&(e==n.length-1?n.pop():o.call(n,e,1),--this.size,!0)}},1241:function(t,n,e){var r=e(909);t.exports=function(t){var n=this.__data__,e=r(n,t);return e<0?void 0:n[e][1]}},1242:function(t,n,e){var r=e(909);t.exports=function(t){return r(this.__data__,t)>-1}},1243:function(t,n,e){var r=e(909);t.exports=function(t,n){var e=this.__data__,o=r(e,t);return o<0?(++this.size,e.push([t,n])):e[o][1]=n,this}},1244:function(t,n,e){var r=e(992),o=e(1245),a=e(1247),u=e(1248),c=e(993),i=e(854),s=e(1178),f=e(1179),l="[object Object]",p=Object.prototype.hasOwnProperty;t.exports=function(t,n,e,v,d,y){var g=i(t),h=i(n),m=g?"[object Array]":c(t),E=h?"[object Array]":c(n),b=(m="[object Arguments]"==m?l:m)==l,x=(E="[object Arguments]"==E?l:E)==l,_=m==E;if(_&&s(t)){if(!s(n))return!1;g=!0,b=!1}if(_&&!b)return y||(y=new r),g||f(t)?o(t,n,e,v,d,y):a(t,n,m,e,v,d,y);if(!(1&e)){var S=b&&p.call(t,"__wrapped__"),O=x&&p.call(n,"__wrapped__");if(S||O){var T=S?t.value():t,j=O?n.value():n;return y||(y=new r),d(T,j,e,v,y)}}return!!_&&(y||(y=new r),u(t,n,e,v,d,y))}},1245:function(t,n,e){var r=e(950),o=e(1246),a=e(951);t.exports=function(t,n,e,u,c,i){var s=1&e,f=t.length,l=n.length;if(f!=l&&!(s&&l>f))return!1;var p=i.get(t);if(p&&i.get(n))return p==n;var v=-1,d=!0,y=2&e?new r:void 0;for(i.set(t,n),i.set(n,t);++v<f;){var g=t[v],h=n[v];if(u)var m=s?u(h,g,v,n,t,i):u(g,h,v,t,n,i);if(void 0!==m){if(m)continue;d=!1;break}if(y){if(!o(n,(function(t,n){if(!a(y,n)&&(g===t||c(g,t,e,u,i)))return y.push(n)}))){d=!1;break}}else if(g!==h&&!c(g,h,e,u,i)){d=!1;break}}return i.delete(t),i.delete(n),d}},1246:function(t,n){t.exports=function(t,n){for(var e=-1,r=null==t?0:t.length;++e<r;)if(n(t[e],e,t))return!0;return!1}},1247:function(t,n){t.exports=function(t,n){return t===n||t!=t&&n!=n}},1248:function(t,n,e){var r=e(1249),o=Object.prototype.hasOwnProperty;t.exports=function(t,n,e,a,u,c){var i=1&e,s=r(t),f=s.length;if(f!=r(n).length&&!i)return!1;for(var l=f;l--;){var p=s[l];if(!(i?p in n:o.call(n,p)))return!1}var v=c.get(t);if(v&&c.get(n))return v==n;var d=!0;c.set(t,n),c.set(n,t);for(var y=i;++l<f;){var g=t[p=s[l]],h=n[p];if(a)var m=i?a(h,g,p,n,t,c):a(g,h,p,t,n,c);if(!(void 0===m?g===h||u(g,h,e,a,c):m)){d=!1;break}y||(y="constructor"==p)}if(d&&!y){var E=t.constructor,b=n.constructor;E==b||!("constructor"in t)||!("constructor"in n)||"function"==typeof E&&E instanceof E&&"function"==typeof b&&b instanceof b||(d=!1)}return c.delete(t),c.delete(n),d}},1249:function(t,n,e){var r=e(952)(Object.keys,Object);t.exports=r},1250:function(t,n,e){var r=e(994),o=e(902);t.exports=function(t){for(var n=o(t),e=n.length;e--;){var a=n[e],u=t[a];n[e]=[a,u,r(u)]}return n}},1251:function(t,n,e){var r=e(966),o=e(1252),a=e(1180),u=e(954),c=e(994),i=e(995),s=e(903);t.exports=function(t,n){return u(t)&&c(n)?i(s(t),n):function(e){var u=o(e,t);return void 0===u&&u===n?a(e,t):r(n,u,3)}}},1252:function(t,n,e){var r=e(968);t.exports=function(t,n,e){var o=null==t?void 0:r(t,n);return void 0===o?e:o}},1253:function(t,n,e){var r=e(1254),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,u=r((function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(o,(function(t,e,r,o){n.push(r?o.replace(a,"$1"):e||t)})),n}));t.exports=u},1254:function(t,n){t.exports=function(t){return t}},1255:function(t,n){t.exports=function(t,n){return null!=t&&n in Object(t)}},1256:function(t,n,e){var r=e(953),o=e(970),a=e(854),u=e(1181),c=e(971),i=e(903);t.exports=function(t,n,e){for(var s=-1,f=(n=r(n,t)).length,l=!1;++s<f;){var p=i(n[s]);if(!(l=null!=t&&e(t,p)))break;t=t[p]}return l||++s!=f?l:!!(f=null==t?0:t.length)&&c(f)&&u(p,f)&&(a(t)||o(t))}},1257:function(t,n,e){var r=e(968);t.exports=function(t){return function(n){return r(n,t)}}},1258:function(t,n){t.exports=function(t,n){for(var e=-1,r=null==t?0:t.length,o=Array(r);++e<r;)o[e]=n(t[e],e,t);return o}},1259:function(t,n){t.exports=function(t,n){var e=t.length;for(t.sort(n);e--;)t[e]=t[e].value;return t}},1260:function(t,n,e){var r=e(1261);t.exports=function(t,n,e){for(var o=-1,a=t.criteria,u=n.criteria,c=a.length,i=e.length;++o<c;){var s=r(a[o],u[o]);if(s)return o>=i?s:s*("desc"==e[o]?-1:1)}return t.index-n.index}},1261:function(t,n,e){var r=e(969);t.exports=function(t,n){if(t!==n){var e=void 0!==t,o=null===t,a=t==t,u=r(t),c=void 0!==n,i=null===n,s=n==n,f=r(n);if(!i&&!f&&!u&&t>n||u&&c&&s&&!i&&!f||o&&c&&s||!e&&s||!a)return 1;if(!o&&!u&&!f&&t<n||f&&e&&a&&!o&&!u||i&&e&&a||!c&&a||!s)return-1}return 0}},1265:function(t,n,e){var r=e(1266),o=e(1267);t.exports=function t(n,e,a,u,c){var i=-1,s=n.length;for(a||(a=o),c||(c=[]);++i<s;){var f=n[i];e>0&&a(f)?e>1?t(f,e-1,a,u,c):r(c,f):u||(c[c.length]=f)}return c}},1266:function(t,n){t.exports=function(t,n){for(var e=-1,r=n.length,o=t.length;++e<r;)t[o+e]=n[e];return t}},1267:function(t,n,e){var r=e(1268),o=e(970),a=e(854),u=r?r.isConcatSpreadable:void 0;t.exports=function(t){return a(t)||o(t)||!!(u&&t&&t[u])}},1268:function(t,n,e){var r=e(1185).Symbol;t.exports=r},1689:function(t,n,e){var r=e(1265),o=e(1236),a=e(917),u=e(998),c=a((function(t,n){if(null==t)return[];var e=n.length;return e>1&&u(t,n[0],n[1])?n=[]:e>2&&u(n[0],n[1],n[2])&&(n=[n[0]]),o(t,r(n,1),[])}));t.exports=c},1698:function(t,n,e){"use strict";e.r(n);var r=e(129),o=e.n(r),a=e(846),u=e(790),c=e(0),i=e.n(c),s=e(789),f=e(13),l=e.n(f),p=e(267),v=e.n(p),d=e(1689),y=e.n(d),g=e(307),h=e(38),m=e(345),E=e(344),b=e(186),x=e(130),_=e(867),S=e(906),O=e(381),T=e(274),j=e.n(T),C=e(806),w=e.n(C),L=e(141),F=e.n(L),H=e(67),P=e(26),R=e(12),U=e(269),M=e.n(U),k=function(t){var n=t.topics,e=t.topicsFetchStatus,r=t.intl,o=Object(c.useState)(""),a=v()(o,2),u=a[0],s=a[1],f=Object(c.useState)([{title:r.formatMessage(R.a.name),transforms:[g.a]},"",{title:r.formatMessage(R.a.featured),transforms:[g.a]},{title:r.formatMessage(R.a.affectedSystems),transforms:[g.a]}]),l=v()(f,1)[0],p=Object(c.useState)([]),d=v()(p,2),T=d[0],C=d[1],L=Object(c.useState)({index:2,direction:"desc"}),H=v()(L,2),P=H[0],U=H[1],M=function(t){return t.flatMap((function(t,n){return 0===u.length||t.name.toLowerCase().includes(u.toLowerCase())?[{topic:t,cells:[{title:i.a.createElement("span",{key:n},i.a.createElement(x.Link,{key:n,to:"/topics/".concat(t.slug)}," ",t.name," ")),props:{colSpan:2}},{title:i.a.createElement("span",{key:n}," ",t.featured&&i.a.createElement(b.Label,{color:"blue",icon:i.a.createElement(w.a,null)},r.formatMessage(R.a.featured))," ")},{title:i.a.createElement("span",{className:"pf-m-center",key:n}," ",t.impacted_systems_count,"                ")}]}]:[]}))},k=function(t,e,r){var o={0:y()(n,[function(t){return t.name}]),2:y()(n,[function(t){return t.featured}]),3:y()(n,[function(t){return t.impacted_systems_count}])},a=r===h.a.asc?o[e]:o[e].reverse();U({index:e,direction:r}),C(M(a))},A={filters:u.length?[{category:"Description",chips:[{name:u,value:u}]}]:[],onDelete:function(){s(""),U({})}};Object(c.useEffect)((function(){P.index?k(0,P.index,P.direction):C(M(n).asMutable())}),[n,u]);var I=[{label:r.formatMessage(R.a.name),filterValues:{key:"text-filter",onChange:function(t,n){s(n),U({})},value:u}}];return i.a.createElement(i.a.Fragment,null,""===e||"pending"===e&&i.a.createElement(_.a,null),"fulfilled"===e&&n.length>0&&i.a.createElement(i.a.Fragment,null,i.a.createElement(O.PrimaryToolbar,{filterConfig:{items:I},activeFiltersConfig:A}),i.a.createElement(h.b,{"aria-label":"topics-table",sortBy:P,onSort:k,cells:l,rows:T},i.a.createElement(m.a,null),i.a.createElement(E.a,null),0===T.length&&"pending"!==e&&C([{cells:[{title:i.a.createElement(S.a,{icon:j.a,title:r.formatMessage(R.a.noHitsTitle,{item:r.formatMessage(R.a.topics).toLowerCase()}),text:r.formatMessage(R.a.noHitsBody,{item:r.formatMessage(R.a.topics).toLowerCase()})}),props:{colSpan:4}}]}]))),"failed"===e||"rejected"===e||"fulfilled"===e&&0===n.length&&i.a.createElement(S.a,{icon:F.a,title:r.formatMessage(R.a.topicsListNotopicsTitle),text:r.formatMessage(R.a.topicsListNotopicsBody)}))};k.propTypes={topics:l.a.array,topicsFetchStatus:l.a.string,intl:l.a.any};var A=Object(P.c)(M()(Object(H.connect)((function(t){return{topics:t.AdvisorStore.topics,topicsFetchStatus:t.AdvisorStore.topicsFetchStatus}}),null)(k))),I=e(137);function N(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}var D=Object(I.a)((function(){return Promise.all([e.e(0),e.e(1),e.e(5),e.e(23),e.e(15)]).then(e.bind(null,1196))})),B=function(t){var n=t.fetchTopics,e=t.intl,r=t.selectedTags;return Object(c.useEffect)((function(){var t=null!==r&&r.length&&{tags:r.join()};n(t)}),[n,r]),i.a.createElement(i.a.Fragment,null,i.a.createElement(D,null),i.a.createElement(u.PageHeader,null,i.a.createElement(u.PageHeaderTitle,{title:e.formatMessage(R.a.topics)})),i.a.createElement(s.Main,null,i.a.createElement(A,null)))};B.displayName="list-topics",B.propTypes={fetchTopics:l.a.func,intl:l.a.any,selectedTags:l.a.array};n.default=Object(P.c)(M()(Object(H.connect)((function(t,n){return function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?N(Object(e),!0).forEach((function(n){o()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):N(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({selectedTags:t.AdvisorStore.selectedTags},n)}),(function(t){return{fetchTopics:function(n){return t(a.h(n))}}}))(B)))},843:function(t,n,e){"use strict";var r=e(958),o=e.n(r);n.a={get:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return o.a.get(t,{headers:n,params:e})},put:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return o.a.put(t,n,{headers:e})},post:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return o.a.post(t,e,{headers:n})},delete:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return o.a.delete(t,n,{headers:e})}}},846:function(t,n,e){"use strict";e.d(n,"d",(function(){return l})),e.d(n,"b",(function(){return p})),e.d(n,"e",(function(){return v})),e.d(n,"k",(function(){return d})),e.d(n,"h",(function(){return y})),e.d(n,"i",(function(){return g})),e.d(n,"g",(function(){return h})),e.d(n,"f",(function(){return m})),e.d(n,"c",(function(){return E})),e.d(n,"j",(function(){return b})),e.d(n,"a",(function(){return x})),e.d(n,"l",(function(){return _})),e.d(n,"n",(function(){return S})),e.d(n,"m",(function(){return O})),e.d(n,"o",(function(){return T}));var r=e(181),o=e.n(r),a=e(268),u=e.n(a),c=e(11),i=e(843),s=function(){var t=u()(o.a.mark((function t(n,e,r){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,insights.chrome.auth.getUser();case 2:return t.next=4,i.a.get(n,e,r);case 4:return a=t.sent,t.abrupt("return",a.data);case 6:case"end":return t.stop()}}),t)})));return function(n,e,r){return t.apply(this,arguments)}}(),f=function(){var t=u()(o.a.mark((function t(n,e,r){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,insights.chrome.auth.getUser();case 2:return t.next=4,i.a.post(n,e,r);case 4:return a=t.sent,t.abrupt("return",a.data);case 6:case"end":return t.stop()}}),t)})));return function(n,e,r){return t.apply(this,arguments)}}(),l=function(t){return{type:c.RULES_FETCH,payload:s(c.RULES_FETCH_URL,{},t)}},p=function(t){return{type:c.RULE_FETCH,payload:s("".concat(c.RULES_FETCH_URL).concat(t.rule_id,"/"),{},t.tags&&{tags:t.tags})}},v=function(t,n){return{type:c.SYSTEM_FETCH,payload:s("".concat(c.RULES_FETCH_URL).concat(encodeURI(t),"/systems"),{},n)}},d=function(t){return{type:c.FILTERS_SET,payload:t}},y=function(t){return{type:c.TOPICS_FETCH,payload:s(c.TOPICS_FETCH_URL,{},t)}},g=function(){return{type:c.TOPICS_FETCH,payload:s("".concat(c.TOPICS_FETCH_URL,"?show_disabled=true"))}},h=function(t){return{type:c.TOPIC_FETCH,payload:s("".concat(c.TOPICS_FETCH_URL).concat(t.topic_id,"/"))}},m=function(t){return{type:c.SYSTEMS_FETCH,payload:s(c.SYSTEMS_FETCH_URL,{},t)}},E=function(t){return{type:c.RULE_ACK_FETCH,payload:s("".concat(c.RULE_ACK_URL).concat(t.rule_id,"/"))}},b=function(t){return{type:c["".concat(t.type,"_ACK_SET")],payload:f(c["".concat(t.type,"_ACK_URL")],{},t.options)}},x=function(t){return{type:c.HOST_ACK_FETCH,payload:s("".concat(c.HOST_ACK_URL),{},t)}},_=function(t){return{type:c.FILTERS_SYSTEMS_SET,payload:t}},S=function(t){return{type:c.SELECTED_TAGS_SET,payload:t}},O=function(t){return{type:c.RULE_SET,payload:t}},T=function(t){return{type:c.SYSTEM_SET,payload:t}}},867:function(t,n,e){"use strict";var r=e(131),o=e(132),a=e(271),u=e(0),c=e.n(u);n.a=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.Card,null,c.a.createElement(o.CardBody,null,c.a.createElement(a.List,null))))}},902:function(t,n,e){var r=e(952)(Object.keys,Object);t.exports=r},903:function(t,n){t.exports=function(t){return t}},906:function(t,n,e){"use strict";var r=e(183),o=e(377),a=e.n(o),u=e(184),c=e(378),i=e(13),s=e.n(i),f=e(0),l=e.n(f),p=e(134),v=function(t){var n=t.className,e=t.children,o=t.icon,a=t.iconClass,i=t.iconStyle,s=t.text,f=t.title,v=t.variant;return l.a.createElement(r.EmptyState,{className:n,variant:v},"none"!==o&&l.a.createElement(c.EmptyStateIcon,{className:a,style:i,icon:o}),l.a.createElement(p.Title,{headingLevel:"h5",size:"lg"},f),l.a.createElement(u.EmptyStateBody,{style:{marginBottom:"16px"}},s),e)};v.propTypes={children:s.a.any,icon:s.a.any,iconClass:s.a.any,iconStyle:s.a.any,text:s.a.any,title:s.a.string,variant:s.a.any,className:s.a.string},v.defaultProps={icon:a.a,title:"",variant:r.EmptyStateVariant.full},n.a=v},908:function(t,n,e){var r=e(1237),o=e(1251),a=e(910),u=e(854),c=e(996);t.exports=function(t){return"function"==typeof t?t:null==t?a:"object"==typeof t?u(t)?o(t[0],t[1]):r(t):c(t)}},909:function(t,n,e){var r=e(965);t.exports=function(t,n){for(var e=t.length;e--;)if(r(t[e][0],n))return e;return-1}},952:function(t,n){t.exports=function(t,n){return function(e){return t(n(e))}}},953:function(t,n,e){var r=e(854),o=e(954),a=e(1253),u=e(978);t.exports=function(t,n){return r(t)?t:o(t,n)?[t]:a(u(t))}},954:function(t,n,e){var r=e(854),o=e(969),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/;t.exports=function(t,n){if(r(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!o(t))||(u.test(t)||!a.test(t)||null!=n&&t in Object(n))}},965:function(t,n){t.exports=function(t,n){return t===n||t!=t&&n!=n}},966:function(t,n,e){var r=e(1244),o=e(901);t.exports=function t(n,e,a,u,c){return n===e||(null==n||null==e||!o(n)&&!o(e)?n!=n&&e!=e:r(n,e,a,u,t,c))}},968:function(t,n,e){var r=e(953),o=e(903);t.exports=function(t,n){for(var e=0,a=(n=r(n,t)).length;null!=t&&e<a;)t=t[o(n[e++])];return e&&e==a?t:void 0}},969:function(t,n){t.exports=function(){return!1}},970:function(t,n){t.exports=function(){return!1}},977:function(t,n){t.exports=function(t){return function(n){return null==n?void 0:n[t]}}},978:function(t,n){t.exports=function(t){return t}},992:function(t,n,e){var r=e(1239),o=e(1240),a=e(1241),u=e(1242),c=e(1243);function i(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}i.prototype.clear=r,i.prototype.delete=o,i.prototype.get=a,i.prototype.has=u,i.prototype.set=c,t.exports=i},993:function(t,n){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},994:function(t,n,e){var r=e(859);t.exports=function(t){return t==t&&!r(t)}},995:function(t,n){t.exports=function(t,n){return function(e){return null!=e&&(e[t]===n&&(void 0!==n||t in Object(e)))}}},996:function(t,n,e){var r=e(977),o=e(1257),a=e(954),u=e(903);t.exports=function(t){return a(t)?r(u(t)):o(t)}},998:function(t,n){t.exports=function(){return!1}}}]);
//# sourceMappingURL=TopicsList.js.map