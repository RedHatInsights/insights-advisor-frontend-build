(window.webpackJsonp=window.webpackJsonp||[]).push([[19,3],{1108:function(t,n,e){(function(n){var e="object"==typeof n&&n&&n.Object===Object&&n;t.exports=e}).call(this,e(27))},1134:function(t,n){t.exports=function(){return!1}},1135:function(t,n){t.exports=function(){return!1}},1136:function(t,n,e){var r=e(1211),o=e(1212);t.exports=function(t,n){return null!=t&&o(t,n,r)}},1137:function(t,n){var e=/^(?:0|[1-9]\d*)$/;t.exports=function(t,n){var r=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&e.test(t))&&t>-1&&t%1==0&&t<n}},1141:function(t,n,e){var r=e(1108),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},1192:function(t,n,e){var r=e(829),o=e(863),a=e(1214),u=e(1215),i=e(869),c=e(1216),s=e(865);t.exports=function(t,n,e){var f=-1;n=r(n.length?n:[s],i(o));var l=a(t,(function(t,e,o){return{criteria:r(n,(function(n){return n(t)})),index:++f,value:t}}));return u(l,(function(t,n){return c(t,n,e)}))}},1193:function(t,n,e){var r=e(1194),o=e(1206),a=e(952);t.exports=function(t){var n=o(t);return 1==n.length&&n[0][2]?a(n[0][0],n[0][1]):function(e){return e===t||r(e,t,n)}}},1194:function(t,n,e){var r=e(949),o=e(923);t.exports=function(t,n,e,a){var u=e.length,i=u,c=!a;if(null==t)return!i;for(t=Object(t);u--;){var s=e[u];if(c&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++u<i;){var f=(s=e[u])[0],l=t[f],p=s[1];if(c&&s[2]){if(void 0===l&&!(f in t))return!1}else{var v=new r;if(a)var d=a(l,p,f,t,n,v);if(!(void 0===d?o(p,l,3,a,v):d))return!1}}return!0}},1195:function(t,n){t.exports=function(){this.__data__=[],this.size=0}},1196:function(t,n,e){var r=e(864),o=Array.prototype.splice;t.exports=function(t){var n=this.__data__,e=r(n,t);return!(e<0)&&(e==n.length-1?n.pop():o.call(n,e,1),--this.size,!0)}},1197:function(t,n,e){var r=e(864);t.exports=function(t){var n=this.__data__,e=r(n,t);return e<0?void 0:n[e][1]}},1198:function(t,n,e){var r=e(864);t.exports=function(t){return r(this.__data__,t)>-1}},1199:function(t,n,e){var r=e(864);t.exports=function(t,n){var e=this.__data__,o=r(e,t);return o<0?(++this.size,e.push([t,n])):e[o][1]=n,this}},1200:function(t,n,e){var r=e(949),o=e(1201),a=e(1203),u=e(1204),i=e(950),c=e(810),s=e(1134),f=e(1135),l="[object Object]",p=Object.prototype.hasOwnProperty;t.exports=function(t,n,e,v,d,y){var g=c(t),h=c(n),m=g?"[object Array]":i(t),E=h?"[object Array]":i(n),x=(m="[object Arguments]"==m?l:m)==l,_=(E="[object Arguments]"==E?l:E)==l,b=m==E;if(b&&s(t)){if(!s(n))return!1;g=!0,x=!1}if(b&&!x)return y||(y=new r),g||f(t)?o(t,n,e,v,d,y):a(t,n,m,e,v,d,y);if(!(1&e)){var S=x&&p.call(t,"__wrapped__"),O=_&&p.call(n,"__wrapped__");if(S||O){var T=S?t.value():t,j=O?n.value():n;return y||(y=new r),d(T,j,e,v,y)}}return!!b&&(y||(y=new r),u(t,n,e,v,d,y))}},1201:function(t,n,e){var r=e(907),o=e(1202),a=e(908);t.exports=function(t,n,e,u,i,c){var s=1&e,f=t.length,l=n.length;if(f!=l&&!(s&&l>f))return!1;var p=c.get(t);if(p&&c.get(n))return p==n;var v=-1,d=!0,y=2&e?new r:void 0;for(c.set(t,n),c.set(n,t);++v<f;){var g=t[v],h=n[v];if(u)var m=s?u(h,g,v,n,t,c):u(g,h,v,t,n,c);if(void 0!==m){if(m)continue;d=!1;break}if(y){if(!o(n,(function(t,n){if(!a(y,n)&&(g===t||i(g,t,e,u,c)))return y.push(n)}))){d=!1;break}}else if(g!==h&&!i(g,h,e,u,c)){d=!1;break}}return c.delete(t),c.delete(n),d}},1202:function(t,n){t.exports=function(t,n){for(var e=-1,r=null==t?0:t.length;++e<r;)if(n(t[e],e,t))return!0;return!1}},1203:function(t,n){t.exports=function(t,n){return t===n||t!=t&&n!=n}},1204:function(t,n,e){var r=e(1205),o=Object.prototype.hasOwnProperty;t.exports=function(t,n,e,a,u,i){var c=1&e,s=r(t),f=s.length;if(f!=r(n).length&&!c)return!1;for(var l=f;l--;){var p=s[l];if(!(c?p in n:o.call(n,p)))return!1}var v=i.get(t);if(v&&i.get(n))return v==n;var d=!0;i.set(t,n),i.set(n,t);for(var y=c;++l<f;){var g=t[p=s[l]],h=n[p];if(a)var m=c?a(h,g,p,n,t,i):a(g,h,p,t,n,i);if(!(void 0===m?g===h||u(g,h,e,a,i):m)){d=!1;break}y||(y="constructor"==p)}if(d&&!y){var E=t.constructor,x=n.constructor;E==x||!("constructor"in t)||!("constructor"in n)||"function"==typeof E&&E instanceof E&&"function"==typeof x&&x instanceof x||(d=!1)}return i.delete(t),i.delete(n),d}},1205:function(t,n,e){var r=e(909)(Object.keys,Object);t.exports=r},1206:function(t,n,e){var r=e(951),o=e(857);t.exports=function(t){for(var n=o(t),e=n.length;e--;){var a=n[e],u=t[a];n[e]=[a,u,r(u)]}return n}},1207:function(t,n,e){var r=e(923),o=e(1208),a=e(1136),u=e(911),i=e(951),c=e(952),s=e(858);t.exports=function(t,n){return u(t)&&i(n)?c(s(t),n):function(e){var u=o(e,t);return void 0===u&&u===n?a(e,t):r(n,u,3)}}},1208:function(t,n,e){var r=e(925);t.exports=function(t,n,e){var o=null==t?void 0:r(t,n);return void 0===o?e:o}},1209:function(t,n,e){var r=e(1210),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,u=r((function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(o,(function(t,e,r,o){n.push(r?o.replace(a,"$1"):e||t)})),n}));t.exports=u},1210:function(t,n){t.exports=function(t){return t}},1211:function(t,n){t.exports=function(t,n){return null!=t&&n in Object(t)}},1212:function(t,n,e){var r=e(910),o=e(927),a=e(810),u=e(1137),i=e(928),c=e(858);t.exports=function(t,n,e){for(var s=-1,f=(n=r(n,t)).length,l=!1;++s<f;){var p=c(n[s]);if(!(l=null!=t&&e(t,p)))break;t=t[p]}return l||++s!=f?l:!!(f=null==t?0:t.length)&&i(f)&&u(p,f)&&(a(t)||o(t))}},1213:function(t,n,e){var r=e(925);t.exports=function(t){return function(n){return r(n,t)}}},1214:function(t,n){t.exports=function(t,n){for(var e=-1,r=null==t?0:t.length,o=Array(r);++e<r;)o[e]=n(t[e],e,t);return o}},1215:function(t,n){t.exports=function(t,n){var e=t.length;for(t.sort(n);e--;)t[e]=t[e].value;return t}},1216:function(t,n,e){var r=e(1217);t.exports=function(t,n,e){for(var o=-1,a=t.criteria,u=n.criteria,i=a.length,c=e.length;++o<i;){var s=r(a[o],u[o]);if(s)return o>=c?s:s*("desc"==e[o]?-1:1)}return t.index-n.index}},1217:function(t,n,e){var r=e(926);t.exports=function(t,n){if(t!==n){var e=void 0!==t,o=null===t,a=t==t,u=r(t),i=void 0!==n,c=null===n,s=n==n,f=r(n);if(!c&&!f&&!u&&t>n||u&&i&&s&&!c&&!f||o&&i&&s||!e&&s||!a)return 1;if(!o&&!u&&!f&&t<n||f&&e&&a&&!o&&!u||c&&e&&a||!i&&a||!s)return-1}return 0}},1221:function(t,n,e){var r=e(1222),o=e(1223);t.exports=function t(n,e,a,u,i){var c=-1,s=n.length;for(a||(a=o),i||(i=[]);++c<s;){var f=n[c];e>0&&a(f)?e>1?t(f,e-1,a,u,i):r(i,f):u||(i[i.length]=f)}return i}},1222:function(t,n){t.exports=function(t,n){for(var e=-1,r=n.length,o=t.length;++e<r;)t[o+e]=n[e];return t}},1223:function(t,n,e){var r=e(1224),o=e(927),a=e(810),u=r?r.isConcatSpreadable:void 0;t.exports=function(t){return a(t)||o(t)||!!(u&&t&&t[u])}},1224:function(t,n,e){var r=e(1141).Symbol;t.exports=r},1644:function(t,n,e){var r=e(1221),o=e(1192),a=e(873),u=e(955),i=a((function(t,n){if(null==t)return[];var e=n.length;return e>1&&u(t,n[0],n[1])?n=[]:e>2&&u(n[0],n[1],n[2])&&(n=[n[0]]),o(t,r(n,1),[])}));t.exports=i},1654:function(t,n,e){"use strict";e.r(n);var r=e(106),o=e.n(r),a=e(802),u=e(750),i=e(0),c=e.n(i),s=e(749),f=e(1),l=e.n(f),p=e(235),v=e.n(p),d=e(1644),y=e.n(d),g=e(269),h=e(31),m=e(310),E=e(309),x=e(753),_=e(107),b=e(823),S=e(861),O=e(348),T=e(350),j=e.n(T),C=e(766),w=e.n(C),L=e(154),F=e.n(L),H=e(91),P=e(21),R=e(13),U=e(238),M=e.n(U),k=function(t){var n=t.topics,e=t.topicsFetchStatus,r=t.intl,o=Object(i.useState)(""),a=v()(o,2),u=a[0],s=a[1],f=Object(i.useState)([{title:r.formatMessage(R.a.name),transforms:[g.a]},"",{title:r.formatMessage(R.a.featured),transforms:[g.a]},{title:r.formatMessage(R.a.affectedSystems),transforms:[g.a]}]),l=v()(f,1)[0],p=Object(i.useState)([]),d=v()(p,2),T=d[0],C=d[1],L=Object(i.useState)({index:2,direction:"desc"}),H=v()(L,2),P=H[0],U=H[1],M=function(t){return t.flatMap((function(t,n){return 0===u.length||t.name.toLowerCase().includes(u.toLowerCase())?[{topic:t,cells:[{title:c.a.createElement("span",{key:n},c.a.createElement(_.Link,{key:n,to:"/topics/".concat(t.slug)}," ",t.name," ")),props:{colSpan:2}},{title:c.a.createElement("span",{key:n}," ",t.featured&&c.a.createElement(x.Label,null," ",c.a.createElement(w.a,null)," ",r.formatMessage(R.a.featured))," ")},{title:c.a.createElement("span",{className:"pf-m-center",key:n}," ",t.impacted_systems_count,"                ")}]}]:[]}))},k=function(t,e,r){var o={0:y()(n,[function(t){return t.name}]),2:y()(n,[function(t){return t.featured}]),3:y()(n,[function(t){return t.impacted_systems_count}])},a=r===h.a.asc?o[e]:o[e].reverse();U({index:e,direction:r}),C(M(a))},A={filters:u.length?[{category:"Description",chips:[{name:u,value:u}]}]:[],onDelete:function(){s(""),U({})}};Object(i.useEffect)((function(){P.index?k(0,P.index,P.direction):C(M(n).asMutable())}),[n,u]);var I=[{label:r.formatMessage(R.a.name),filterValues:{key:"text-filter",onChange:function(t,n){s(n),U({})},value:u}}];return c.a.createElement(c.a.Fragment,null,""===e||"pending"===e&&c.a.createElement(b.a,null),"fulfilled"===e&&n.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement(O.PrimaryToolbar,{filterConfig:{items:I},activeFiltersConfig:A}),c.a.createElement(h.b,{"aria-label":"topics-table",sortBy:P,onSort:k,cells:l,rows:T},c.a.createElement(m.a,null),c.a.createElement(E.a,null),0===T.length&&"pending"!==e&&C([{cells:[{title:c.a.createElement(S.a,{icon:j.a,title:r.formatMessage(R.a.noHitsTitle,{item:r.formatMessage(R.a.topics).toLowerCase()}),text:r.formatMessage(R.a.noHitsBody,{item:r.formatMessage(R.a.topics).toLowerCase()})}),props:{colSpan:4}}]}]))),"failed"===e||"rejected"===e||"fulfilled"===e&&0===n.length&&c.a.createElement(S.a,{icon:F.a,title:r.formatMessage(R.a.topicsListNotopicsTitle),text:r.formatMessage(R.a.topicsListNotopicsBody)}))};k.propTypes={topics:l.a.array,topicsFetchStatus:l.a.string,intl:l.a.any};var A=Object(P.c)(M()(Object(H.connect)((function(t){return{topics:t.AdvisorStore.topics,topicsFetchStatus:t.AdvisorStore.topicsFetchStatus}}),null)(k))),I=e(113);function z(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}var N=Object(I.a)((function(){return Promise.all([e.e(0),e.e(5),e.e(23),e.e(3),e.e(15)]).then(e.bind(null,1152))})),D=function(t){var n=t.fetchTopics,e=t.intl,r=t.selectedTags;return Object(i.useEffect)((function(){var t=null!==r&&r.length&&{tags:r.join()};n(t)}),[n,r]),c.a.createElement(c.a.Fragment,null,c.a.createElement(N,null),c.a.createElement(u.PageHeader,null,c.a.createElement(u.PageHeaderTitle,{title:e.formatMessage(R.a.topics)})),c.a.createElement(s.Main,null,c.a.createElement(A,null)))};D.displayName="list-topics",D.propTypes={fetchTopics:l.a.func,intl:l.a.any,selectedTags:l.a.array};n.default=Object(P.c)(M()(Object(H.connect)((function(t,n){return function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?z(Object(e),!0).forEach((function(n){o()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):z(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({selectedTags:t.AdvisorStore.selectedTags},n)}),(function(t){return{fetchTopics:function(n){return t(a.h(n))}}}))(D)))},799:function(t,n,e){"use strict";var r=e(915),o=e.n(r);n.a={get:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return o.a.get(t,{headers:n,params:e})},put:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return o.a.put(t,n,{headers:e})},post:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return o.a.post(t,e,{headers:n})},delete:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return o.a.delete(t,n,{headers:e})}}},802:function(t,n,e){"use strict";e.d(n,"d",(function(){return l})),e.d(n,"b",(function(){return p})),e.d(n,"e",(function(){return v})),e.d(n,"k",(function(){return d})),e.d(n,"h",(function(){return y})),e.d(n,"i",(function(){return g})),e.d(n,"g",(function(){return h})),e.d(n,"f",(function(){return m})),e.d(n,"c",(function(){return E})),e.d(n,"j",(function(){return x})),e.d(n,"a",(function(){return _})),e.d(n,"l",(function(){return b})),e.d(n,"n",(function(){return S})),e.d(n,"m",(function(){return O})),e.d(n,"o",(function(){return T}));var r=e(148),o=e.n(r),a=e(236),u=e.n(a),i=e(10),c=e(799),s=function(){var t=u()(o.a.mark((function t(n,e,r){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,insights.chrome.auth.getUser();case 2:return t.next=4,c.a.get(n,e,r);case 4:return a=t.sent,t.abrupt("return",a.data);case 6:case"end":return t.stop()}}),t)})));return function(n,e,r){return t.apply(this,arguments)}}(),f=function(){var t=u()(o.a.mark((function t(n,e,r){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,insights.chrome.auth.getUser();case 2:return t.next=4,c.a.post(n,e,r);case 4:return a=t.sent,t.abrupt("return",a.data);case 6:case"end":return t.stop()}}),t)})));return function(n,e,r){return t.apply(this,arguments)}}(),l=function(t){return{type:i.RULES_FETCH,payload:s(i.RULES_FETCH_URL,{},t)}},p=function(t){return{type:i.RULE_FETCH,payload:s("".concat(i.RULES_FETCH_URL).concat(t.rule_id,"/"),{},t.tags&&{tags:t.tags})}},v=function(t,n){return{type:i.SYSTEM_FETCH,payload:s("".concat(i.RULES_FETCH_URL).concat(encodeURI(t),"/systems"),{},n)}},d=function(t){return{type:i.FILTERS_SET,payload:t}},y=function(t){return{type:i.TOPICS_FETCH,payload:s(i.TOPICS_FETCH_URL,{},t)}},g=function(){return{type:i.TOPICS_FETCH,payload:s("".concat(i.TOPICS_FETCH_URL,"?show_disabled=true"))}},h=function(t){return{type:i.TOPIC_FETCH,payload:s("".concat(i.TOPICS_FETCH_URL).concat(t.topic_id,"/"))}},m=function(t){return{type:i.SYSTEMS_FETCH,payload:s(i.SYSTEMS_FETCH_URL,{},t)}},E=function(t){return{type:i.RULE_ACK_FETCH,payload:s("".concat(i.RULE_ACK_URL).concat(t.rule_id,"/"))}},x=function(t){return{type:i["".concat(t.type,"_ACK_SET")],payload:f(i["".concat(t.type,"_ACK_URL")],{},t.options)}},_=function(t){return{type:i.HOST_ACK_FETCH,payload:s("".concat(i.HOST_ACK_URL),{},t)}},b=function(t){return{type:i.FILTERS_SYSTEMS_SET,payload:t}},S=function(t){return{type:i.SELECTED_TAGS_SET,payload:t}},O=function(t){return{type:i.RULE_SET,payload:t}},T=function(t){return{type:i.SYSTEM_SET,payload:t}}},823:function(t,n,e){"use strict";var r=e(108),o=e(109),a=e(239),u=e(0),i=e.n(u);n.a=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.Card,null,i.a.createElement(o.CardBody,null,i.a.createElement(a.List,null))))}},857:function(t,n,e){var r=e(909)(Object.keys,Object);t.exports=r},858:function(t,n){t.exports=function(t){return t}},861:function(t,n,e){"use strict";var r=e(241),o=e(344),a=e.n(o),u=e(242),i=e(345),c=e(1),s=e.n(c),f=e(0),l=e.n(f),p=e(110),v=function(t){var n=t.className,e=t.children,o=t.icon,a=t.iconClass,c=t.iconStyle,s=t.size,f=t.text,v=t.title,d=t.variant;return l.a.createElement(r.EmptyState,{className:n,variant:d},"none"!==o&&l.a.createElement(i.EmptyStateIcon,{className:a,style:c,icon:o,size:s}),l.a.createElement(p.Title,{headingLevel:"h5",size:"lg"},v),l.a.createElement(u.EmptyStateBody,{style:{marginBottom:"16px"}},f),e)};v.propTypes={children:s.a.any,icon:s.a.any,iconClass:s.a.any,iconStyle:s.a.any,size:s.a.string,text:s.a.any,title:s.a.string,variant:s.a.any,className:s.a.string},v.defaultProps={icon:a.a,title:"",variant:r.EmptyStateVariant.full,size:"md"},n.a=v},863:function(t,n,e){var r=e(1193),o=e(1207),a=e(865),u=e(810),i=e(953);t.exports=function(t){return"function"==typeof t?t:null==t?a:"object"==typeof t?u(t)?o(t[0],t[1]):r(t):i(t)}},864:function(t,n,e){var r=e(922);t.exports=function(t,n){for(var e=t.length;e--;)if(r(t[e][0],n))return e;return-1}},909:function(t,n){t.exports=function(t,n){return function(e){return t(n(e))}}},910:function(t,n,e){var r=e(810),o=e(911),a=e(1209),u=e(935);t.exports=function(t,n){return r(t)?t:o(t,n)?[t]:a(u(t))}},911:function(t,n,e){var r=e(810),o=e(926),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/;t.exports=function(t,n){if(r(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!o(t))||(u.test(t)||!a.test(t)||null!=n&&t in Object(n))}},922:function(t,n){t.exports=function(t,n){return t===n||t!=t&&n!=n}},923:function(t,n,e){var r=e(1200),o=e(856);t.exports=function t(n,e,a,u,i){return n===e||(null==n||null==e||!o(n)&&!o(e)?n!=n&&e!=e:r(n,e,a,u,t,i))}},925:function(t,n,e){var r=e(910),o=e(858);t.exports=function(t,n){for(var e=0,a=(n=r(n,t)).length;null!=t&&e<a;)t=t[o(n[e++])];return e&&e==a?t:void 0}},926:function(t,n){t.exports=function(){return!1}},927:function(t,n){t.exports=function(){return!1}},934:function(t,n){t.exports=function(t){return function(n){return null==n?void 0:n[t]}}},935:function(t,n){t.exports=function(t){return t}},949:function(t,n,e){var r=e(1195),o=e(1196),a=e(1197),u=e(1198),i=e(1199);function c(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=u,c.prototype.set=i,t.exports=c},950:function(t,n){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},951:function(t,n,e){var r=e(815);t.exports=function(t){return t==t&&!r(t)}},952:function(t,n){t.exports=function(t,n){return function(e){return null!=e&&(e[t]===n&&(void 0!==n||t in Object(e)))}}},953:function(t,n,e){var r=e(934),o=e(1213),a=e(911),u=e(858);t.exports=function(t){return a(t)?r(u(t)):o(t)}},955:function(t,n){t.exports=function(){return!1}}}]);
//# sourceMappingURL=TopicsList.js.map