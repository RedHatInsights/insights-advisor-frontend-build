(window.webpackJsonp=window.webpackJsonp||[]).push([[19,4],{1130:function(t,n,e){(function(n){var e="object"==typeof n&&n&&n.Object===Object&&n;t.exports=e}).call(this,e(33))},1157:function(t,n){t.exports=function(){return!1}},1158:function(t,n){t.exports=function(){return!1}},1159:function(t,n,e){var r=e(1232),o=e(1233);t.exports=function(t,n){return null!=t&&o(t,n,r)}},1160:function(t,n){var e=/^(?:0|[1-9]\d*)$/;t.exports=function(t,n){var r=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&e.test(t))&&t>-1&&t%1==0&&t<n}},1164:function(t,n,e){var r=e(1130),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},1213:function(t,n,e){var r=e(851),o=e(886),a=e(1235),u=e(1236),i=e(891),c=e(1237),f=e(888);t.exports=function(t,n,e){var s=-1;n=r(n.length?n:[f],i(o));var l=a(t,(function(t,e,o){return{criteria:r(n,(function(n){return n(t)})),index:++s,value:t}}));return u(l,(function(t,n){return c(t,n,e)}))}},1214:function(t,n,e){var r=e(1215),o=e(1227),a=e(973);t.exports=function(t){var n=o(t);return 1==n.length&&n[0][2]?a(n[0][0],n[0][1]):function(e){return e===t||r(e,t,n)}}},1215:function(t,n,e){var r=e(970),o=e(945);t.exports=function(t,n,e,a){var u=e.length,i=u,c=!a;if(null==t)return!i;for(t=Object(t);u--;){var f=e[u];if(c&&f[2]?f[1]!==t[f[0]]:!(f[0]in t))return!1}for(;++u<i;){var s=(f=e[u])[0],l=t[s],p=f[1];if(c&&f[2]){if(void 0===l&&!(s in t))return!1}else{var v=new r;if(a)var d=a(l,p,s,t,n,v);if(!(void 0===d?o(p,l,3,a,v):d))return!1}}return!0}},1216:function(t,n){t.exports=function(){this.__data__=[],this.size=0}},1217:function(t,n,e){var r=e(887),o=Array.prototype.splice;t.exports=function(t){var n=this.__data__,e=r(n,t);return!(e<0)&&(e==n.length-1?n.pop():o.call(n,e,1),--this.size,!0)}},1218:function(t,n,e){var r=e(887);t.exports=function(t){var n=this.__data__,e=r(n,t);return e<0?void 0:n[e][1]}},1219:function(t,n,e){var r=e(887);t.exports=function(t){return r(this.__data__,t)>-1}},1220:function(t,n,e){var r=e(887);t.exports=function(t,n){var e=this.__data__,o=r(e,t);return o<0?(++this.size,e.push([t,n])):e[o][1]=n,this}},1221:function(t,n,e){var r=e(970),o=e(1222),a=e(1224),u=e(1225),i=e(971),c=e(832),f=e(1157),s=e(1158),l="[object Object]",p=Object.prototype.hasOwnProperty;t.exports=function(t,n,e,v,d,y){var g=c(t),h=c(n),m=g?"[object Array]":i(t),E=h?"[object Array]":i(n),b=(m="[object Arguments]"==m?l:m)==l,x=(E="[object Arguments]"==E?l:E)==l,_=m==E;if(_&&f(t)){if(!f(n))return!1;g=!0,b=!1}if(_&&!b)return y||(y=new r),g||s(t)?o(t,n,e,v,d,y):a(t,n,m,e,v,d,y);if(!(1&e)){var S=b&&p.call(t,"__wrapped__"),O=x&&p.call(n,"__wrapped__");if(S||O){var T=S?t.value():t,j=O?n.value():n;return y||(y=new r),d(T,j,e,v,y)}}return!!_&&(y||(y=new r),u(t,n,e,v,d,y))}},1222:function(t,n,e){var r=e(929),o=e(1223),a=e(930);t.exports=function(t,n,e,u,i,c){var f=1&e,s=t.length,l=n.length;if(s!=l&&!(f&&l>s))return!1;var p=c.get(t);if(p&&c.get(n))return p==n;var v=-1,d=!0,y=2&e?new r:void 0;for(c.set(t,n),c.set(n,t);++v<s;){var g=t[v],h=n[v];if(u)var m=f?u(h,g,v,n,t,c):u(g,h,v,t,n,c);if(void 0!==m){if(m)continue;d=!1;break}if(y){if(!o(n,(function(t,n){if(!a(y,n)&&(g===t||i(g,t,e,u,c)))return y.push(n)}))){d=!1;break}}else if(g!==h&&!i(g,h,e,u,c)){d=!1;break}}return c.delete(t),c.delete(n),d}},1223:function(t,n){t.exports=function(t,n){for(var e=-1,r=null==t?0:t.length;++e<r;)if(n(t[e],e,t))return!0;return!1}},1224:function(t,n){t.exports=function(t,n){return t===n||t!=t&&n!=n}},1225:function(t,n,e){var r=e(1226),o=Object.prototype.hasOwnProperty;t.exports=function(t,n,e,a,u,i){var c=1&e,f=r(t),s=f.length;if(s!=r(n).length&&!c)return!1;for(var l=s;l--;){var p=f[l];if(!(c?p in n:o.call(n,p)))return!1}var v=i.get(t);if(v&&i.get(n))return v==n;var d=!0;i.set(t,n),i.set(n,t);for(var y=c;++l<s;){var g=t[p=f[l]],h=n[p];if(a)var m=c?a(h,g,p,n,t,i):a(g,h,p,t,n,i);if(!(void 0===m?g===h||u(g,h,e,a,i):m)){d=!1;break}y||(y="constructor"==p)}if(d&&!y){var E=t.constructor,b=n.constructor;E==b||!("constructor"in t)||!("constructor"in n)||"function"==typeof E&&E instanceof E&&"function"==typeof b&&b instanceof b||(d=!1)}return i.delete(t),i.delete(n),d}},1226:function(t,n,e){var r=e(931)(Object.keys,Object);t.exports=r},1227:function(t,n,e){var r=e(972),o=e(880);t.exports=function(t){for(var n=o(t),e=n.length;e--;){var a=n[e],u=t[a];n[e]=[a,u,r(u)]}return n}},1228:function(t,n,e){var r=e(945),o=e(1229),a=e(1159),u=e(933),i=e(972),c=e(973),f=e(881);t.exports=function(t,n){return u(t)&&i(n)?c(f(t),n):function(e){var u=o(e,t);return void 0===u&&u===n?a(e,t):r(n,u,3)}}},1229:function(t,n,e){var r=e(947);t.exports=function(t,n,e){var o=null==t?void 0:r(t,n);return void 0===o?e:o}},1230:function(t,n,e){var r=e(1231),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,u=r((function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(o,(function(t,e,r,o){n.push(r?o.replace(a,"$1"):e||t)})),n}));t.exports=u},1231:function(t,n){t.exports=function(t){return t}},1232:function(t,n){t.exports=function(t,n){return null!=t&&n in Object(t)}},1233:function(t,n,e){var r=e(932),o=e(948),a=e(832),u=e(1160),i=e(949),c=e(881);t.exports=function(t,n,e){for(var f=-1,s=(n=r(n,t)).length,l=!1;++f<s;){var p=c(n[f]);if(!(l=null!=t&&e(t,p)))break;t=t[p]}return l||++f!=s?l:!!(s=null==t?0:t.length)&&i(s)&&u(p,s)&&(a(t)||o(t))}},1234:function(t,n,e){var r=e(947);t.exports=function(t){return function(n){return r(n,t)}}},1235:function(t,n){t.exports=function(t,n){for(var e=-1,r=null==t?0:t.length,o=Array(r);++e<r;)o[e]=n(t[e],e,t);return o}},1236:function(t,n){t.exports=function(t,n){var e=t.length;for(t.sort(n);e--;)t[e]=t[e].value;return t}},1237:function(t,n,e){var r=e(1238);t.exports=function(t,n,e){for(var o=-1,a=t.criteria,u=n.criteria,i=a.length,c=e.length;++o<i;){var f=r(a[o],u[o]);if(f)return o>=c?f:f*("desc"==e[o]?-1:1)}return t.index-n.index}},1238:function(t,n,e){var r=e(894);t.exports=function(t,n){if(t!==n){var e=void 0!==t,o=null===t,a=t==t,u=r(t),i=void 0!==n,c=null===n,f=n==n,s=r(n);if(!c&&!s&&!u&&t>n||u&&i&&f&&!c&&!s||o&&i&&f||!e&&f||!a)return 1;if(!o&&!u&&!s&&t<n||s&&e&&a&&!o&&!u||c&&e&&a||!i&&a||!f)return-1}return 0}},1242:function(t,n,e){var r=e(1243),o=e(1244);t.exports=function t(n,e,a,u,i){var c=-1,f=n.length;for(a||(a=o),i||(i=[]);++c<f;){var s=n[c];e>0&&a(s)?e>1?t(s,e-1,a,u,i):r(i,s):u||(i[i.length]=s)}return i}},1243:function(t,n){t.exports=function(t,n){for(var e=-1,r=n.length,o=t.length;++e<r;)t[o+e]=n[e];return t}},1244:function(t,n,e){var r=e(1245),o=e(948),a=e(832),u=r?r.isConcatSpreadable:void 0;t.exports=function(t){return a(t)||o(t)||!!(u&&t&&t[u])}},1245:function(t,n,e){var r=e(1164).Symbol;t.exports=r},1663:function(t,n,e){var r=e(1242),o=e(1213),a=e(896),u=e(976),i=a((function(t,n){if(null==t)return[];var e=n.length;return e>1&&u(t,n[0],n[1])?n=[]:e>2&&u(n[0],n[1],n[2])&&(n=[n[0]]),o(t,r(n,1),[])}));t.exports=i},1673:function(t,n,e){"use strict";e.r(n);var r=e(131),o=e.n(r),a=e(824),u=e(773),i=e(0),c=e.n(i),f=e(772),s=e(12),l=e.n(s),p=e(262),v=e.n(p),d=e(1663),y=e.n(d),g=e(300),h=e(39),m=e(341),E=e(340),b=e(182),x=e(132),_=e(845),S=e(884),O=e(373),T=e(269),j=e.n(T),C=e(789),w=e.n(C),L=e(379),F=e.n(L),H=e(63),P=e(26),R=e(11),U=e(264),M=e.n(U),k=function(t){var n=t.topics,e=t.topicsFetchStatus,r=t.intl,o=Object(i.useState)(""),a=v()(o,2),u=a[0],f=a[1],s=Object(i.useState)([{title:r.formatMessage(R.a.name),transforms:[g.a]},"",{title:r.formatMessage(R.a.featured),transforms:[g.a]},{title:r.formatMessage(R.a.affectedSystems),transforms:[g.a]}]),l=v()(s,1)[0],p=Object(i.useState)([]),d=v()(p,2),T=d[0],C=d[1],L=Object(i.useState)({index:2,direction:"desc"}),H=v()(L,2),P=H[0],U=H[1],M=function(t){return t.flatMap((function(t,n){return 0===u.length||t.name.toLowerCase().includes(u.toLowerCase())?[{topic:t,cells:[{title:c.a.createElement("span",{key:n},c.a.createElement(x.Link,{key:n,to:"/topics/".concat(t.slug)}," ",t.name," ")),props:{colSpan:2}},{title:c.a.createElement("span",{key:n}," ",t.featured&&c.a.createElement(b.Label,{color:"blue",icon:c.a.createElement(w.a,null)},r.formatMessage(R.a.featured))," ")},{title:c.a.createElement("span",{className:"pf-m-center",key:n}," ",t.impacted_systems_count,"                ")}]}]:[]}))},k=function(t,e,r){var o={0:y()(n,[function(t){return t.name}]),2:y()(n,[function(t){return t.featured}]),3:y()(n,[function(t){return t.impacted_systems_count}])},a=r===h.a.asc?o[e]:o[e].reverse();U({index:e,direction:r}),C(M(a))},A={filters:u.length?[{category:"Description",chips:[{name:u,value:u}]}]:[],onDelete:function(){f(""),U({})}};Object(i.useEffect)((function(){P.index?k(0,P.index,P.direction):C(M(n).asMutable())}),[n,u]);var I=[{label:r.formatMessage(R.a.name),filterValues:{key:"text-filter",onChange:function(t,n){f(n),U({})},value:u}}];return c.a.createElement(c.a.Fragment,null,""===e||"pending"===e&&c.a.createElement(_.a,null),"fulfilled"===e&&n.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement(O.PrimaryToolbar,{filterConfig:{items:I},activeFiltersConfig:A}),c.a.createElement(h.b,{"aria-label":"topics-table",sortBy:P,onSort:k,cells:l,rows:T},c.a.createElement(m.a,null),c.a.createElement(E.a,null),0===T.length&&"pending"!==e&&C([{cells:[{title:c.a.createElement(S.a,{icon:j.a,title:r.formatMessage(R.a.noHitsTitle,{item:r.formatMessage(R.a.topics).toLowerCase()}),text:r.formatMessage(R.a.noHitsBody,{item:r.formatMessage(R.a.topics).toLowerCase()})}),props:{colSpan:4}}]}]))),"failed"===e||"rejected"===e||"fulfilled"===e&&0===n.length&&c.a.createElement(S.a,{icon:F.a,title:r.formatMessage(R.a.topicsListNotopicsTitle),text:r.formatMessage(R.a.topicsListNotopicsBody)}))};k.propTypes={topics:l.a.array,topicsFetchStatus:l.a.string,intl:l.a.any};var A=Object(P.c)(M()(Object(H.connect)((function(t){return{topics:t.AdvisorStore.topics,topicsFetchStatus:t.AdvisorStore.topicsFetchStatus}}),null)(k))),I=e(139);function N(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}var D=Object(I.a)((function(){return Promise.all([e.e(0),e.e(1),e.e(5),e.e(23),e.e(15)]).then(e.bind(null,1175))})),B=function(t){var n=t.fetchTopics,e=t.intl,r=t.selectedTags;return Object(i.useEffect)((function(){var t=null!==r&&r.length&&{tags:r.join()};n(t)}),[n,r]),c.a.createElement(c.a.Fragment,null,c.a.createElement(D,null),c.a.createElement(u.PageHeader,null,c.a.createElement(u.PageHeaderTitle,{title:e.formatMessage(R.a.topics)})),c.a.createElement(f.Main,null,c.a.createElement(A,null)))};B.displayName="list-topics",B.propTypes={fetchTopics:l.a.func,intl:l.a.any,selectedTags:l.a.array};n.default=Object(P.c)(M()(Object(H.connect)((function(t,n){return function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?N(Object(e),!0).forEach((function(n){o()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):N(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({selectedTags:t.AdvisorStore.selectedTags},n)}),(function(t){return{fetchTopics:function(n){return t(a.h(n))}}}))(B)))},821:function(t,n,e){"use strict";var r=e(937),o=e.n(r);n.a={get:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return o.a.get(t,{headers:n,params:e})},put:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return o.a.put(t,n,{headers:e})},post:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return o.a.post(t,e,{headers:n})},delete:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return o.a.delete(t,n,{headers:e})}}},824:function(t,n,e){"use strict";e.d(n,"d",(function(){return l})),e.d(n,"b",(function(){return p})),e.d(n,"e",(function(){return v})),e.d(n,"k",(function(){return d})),e.d(n,"h",(function(){return y})),e.d(n,"i",(function(){return g})),e.d(n,"g",(function(){return h})),e.d(n,"f",(function(){return m})),e.d(n,"c",(function(){return E})),e.d(n,"j",(function(){return b})),e.d(n,"a",(function(){return x})),e.d(n,"l",(function(){return _})),e.d(n,"n",(function(){return S})),e.d(n,"m",(function(){return O})),e.d(n,"o",(function(){return T}));var r=e(180),o=e.n(r),a=e(263),u=e.n(a),i=e(10),c=e(821),f=function(){var t=u()(o.a.mark((function t(n,e,r){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,insights.chrome.auth.getUser();case 2:return t.next=4,c.a.get(n,e,r);case 4:return a=t.sent,t.abrupt("return",a.data);case 6:case"end":return t.stop()}}),t)})));return function(n,e,r){return t.apply(this,arguments)}}(),s=function(){var t=u()(o.a.mark((function t(n,e,r){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,insights.chrome.auth.getUser();case 2:return t.next=4,c.a.post(n,e,r);case 4:return a=t.sent,t.abrupt("return",a.data);case 6:case"end":return t.stop()}}),t)})));return function(n,e,r){return t.apply(this,arguments)}}(),l=function(t){return{type:i.RULES_FETCH,payload:f(i.RULES_FETCH_URL,{},t)}},p=function(t){return{type:i.RULE_FETCH,payload:f("".concat(i.RULES_FETCH_URL).concat(t.rule_id,"/"),{},t.tags&&{tags:t.tags})}},v=function(t,n){return{type:i.SYSTEM_FETCH,payload:f("".concat(i.RULES_FETCH_URL).concat(encodeURI(t),"/systems"),{},n)}},d=function(t){return{type:i.FILTERS_SET,payload:t}},y=function(t){return{type:i.TOPICS_FETCH,payload:f(i.TOPICS_FETCH_URL,{},t)}},g=function(){return{type:i.TOPICS_FETCH,payload:f("".concat(i.TOPICS_FETCH_URL,"?show_disabled=true"))}},h=function(t){return{type:i.TOPIC_FETCH,payload:f("".concat(i.TOPICS_FETCH_URL).concat(t.topic_id,"/"))}},m=function(t){return{type:i.SYSTEMS_FETCH,payload:f(i.SYSTEMS_FETCH_URL,{},t)}},E=function(t){return{type:i.RULE_ACK_FETCH,payload:f("".concat(i.RULE_ACK_URL).concat(t.rule_id,"/"))}},b=function(t){return{type:i["".concat(t.type,"_ACK_SET")],payload:s(i["".concat(t.type,"_ACK_URL")],{},t.options)}},x=function(t){return{type:i.HOST_ACK_FETCH,payload:f("".concat(i.HOST_ACK_URL),{},t)}},_=function(t){return{type:i.FILTERS_SYSTEMS_SET,payload:t}},S=function(t){return{type:i.SELECTED_TAGS_SET,payload:t}},O=function(t){return{type:i.RULE_SET,payload:t}},T=function(t){return{type:i.SYSTEM_SET,payload:t}}},845:function(t,n,e){"use strict";var r=e(133),o=e(134),a=e(266),u=e(0),i=e.n(u);n.a=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.Card,null,i.a.createElement(o.CardBody,null,i.a.createElement(a.List,null))))}},880:function(t,n,e){var r=e(931)(Object.keys,Object);t.exports=r},881:function(t,n,e){var r=e(894);t.exports=function(t){if("string"==typeof t||r(t))return t;var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}},884:function(t,n,e){"use strict";var r=e(183),o=e(369),a=e.n(o),u=e(184),i=e(370),c=e(12),f=e.n(c),s=e(0),l=e.n(s),p=e(136),v=function(t){var n=t.className,e=t.children,o=t.icon,a=t.iconClass,c=t.iconStyle,f=t.text,s=t.title,v=t.variant;return l.a.createElement(r.EmptyState,{className:n,variant:v},"none"!==o&&l.a.createElement(i.EmptyStateIcon,{className:a,style:c,icon:o}),l.a.createElement(p.Title,{headingLevel:"h5",size:"lg"},s),l.a.createElement(u.EmptyStateBody,{style:{marginBottom:"16px"}},f),e)};v.propTypes={children:f.a.any,icon:f.a.any,iconClass:f.a.any,iconStyle:f.a.any,text:f.a.any,title:f.a.string,variant:f.a.any,className:f.a.string},v.defaultProps={icon:a.a,title:"",variant:r.EmptyStateVariant.full},n.a=v},886:function(t,n,e){var r=e(1214),o=e(1228),a=e(888),u=e(832),i=e(974);t.exports=function(t){return"function"==typeof t?t:null==t?a:"object"==typeof t?u(t)?o(t[0],t[1]):r(t):i(t)}},887:function(t,n,e){var r=e(944);t.exports=function(t,n){for(var e=t.length;e--;)if(r(t[e][0],n))return e;return-1}},894:function(t,n){t.exports=function(){return!1}},931:function(t,n){t.exports=function(t,n){return function(e){return t(n(e))}}},932:function(t,n,e){var r=e(832),o=e(933),a=e(1230),u=e(956);t.exports=function(t,n){return r(t)?t:o(t,n)?[t]:a(u(t))}},933:function(t,n,e){var r=e(832),o=e(894),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/;t.exports=function(t,n){if(r(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!o(t))||(u.test(t)||!a.test(t)||null!=n&&t in Object(n))}},944:function(t,n){t.exports=function(t,n){return t===n||t!=t&&n!=n}},945:function(t,n,e){var r=e(1221),o=e(879);t.exports=function t(n,e,a,u,i){return n===e||(null==n||null==e||!o(n)&&!o(e)?n!=n&&e!=e:r(n,e,a,u,t,i))}},947:function(t,n,e){var r=e(932),o=e(881);t.exports=function(t,n){for(var e=0,a=(n=r(n,t)).length;null!=t&&e<a;)t=t[o(n[e++])];return e&&e==a?t:void 0}},948:function(t,n){t.exports=function(){return!1}},955:function(t,n){t.exports=function(t){return function(n){return null==n?void 0:n[t]}}},956:function(t,n){t.exports=function(t){return t}},970:function(t,n,e){var r=e(1216),o=e(1217),a=e(1218),u=e(1219),i=e(1220);function c(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=u,c.prototype.set=i,t.exports=c},971:function(t,n){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},972:function(t,n,e){var r=e(837);t.exports=function(t){return t==t&&!r(t)}},973:function(t,n){t.exports=function(t,n){return function(e){return null!=e&&(e[t]===n&&(void 0!==n||t in Object(e)))}}},974:function(t,n,e){var r=e(955),o=e(1234),a=e(933),u=e(881);t.exports=function(t){return a(t)?r(u(t)):o(t)}},976:function(t,n){t.exports=function(){return!1}}}]);
//# sourceMappingURL=TopicsList.js.map