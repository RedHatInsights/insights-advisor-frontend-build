!function(e){function t(t){for(var r,o,a=t[0],i=t[1],c=t[2],s=0,u=[];s<a.length;s++)o=a[s],I[o]&&u.push(I[o][0]),I[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(C&&C(t);u.length;)u.shift()();return A.push.apply(A,c||[]),n()}function n(){for(var e,t=0;t<A.length;t++){for(var n=A[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==I[a]&&(r=!1)}r&&(A.splice(t--,1),e=L(L.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!_[e])return;for(var n in _[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--g&&0===E&&j()}(e,t),r&&r(e,t)};var o,a=!0,i="d73cdce64d2e49376951",c=1e4,s={},u=[],l=[];function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:D,apply:F,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:s[e]};return o=void 0,t}var p=[],f="idle";function h(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var v,m,y,g=0,E=0,b={},_={},w={};function O(e){return+e+""===e?+e:e}function D(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,h("check"),(t=c,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=L.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return h("idle"),null;_={},b={},w=e.c,y=e.h,h("prepare");var t=new Promise(function(e,t){v={resolve:e,reject:t}});for(var n in m={},I)S(n);return"prepare"===f&&0===E&&0===g&&j(),t});var t}function S(e){w[e]?(_[e]=!0,g++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=L.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function j(){h("ready");var e=v;if(v=null,e)if(a)Promise.resolve().then(function(){return F(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(O(n));e.resolve(t)}}function F(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,o,a,c;function l(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=P[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var s=0;s<a.parents.length;s++){var u=a.parents[s],l=P[u];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([u]),moduleId:i,parentId:u};-1===t.indexOf(u)&&(l.hot._acceptedDependencies[i]?(n[u]||(n[u]=[]),d(n[u],[i])):(delete n[u],t.push(u),r.push({chain:c.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},v=[],g={},E=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var b in m)if(Object.prototype.hasOwnProperty.call(m,b)){var _;c=O(b);var D=!1,S=!1,j=!1,F="";switch((_=m[b]?l(c):{type:"disposed",moduleId:b}).chain&&(F="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(D=new Error("Aborted because of self decline: "+_.moduleId+F));break;case"declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+F));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(_),t.ignoreUnaccepted||(D=new Error("Aborted because "+c+" is not accepted"+F));break;case"accepted":t.onAccepted&&t.onAccepted(_),S=!0;break;case"disposed":t.onDisposed&&t.onDisposed(_),j=!0;break;default:throw new Error("Unexception type "+_.type)}if(D)return h("abort"),Promise.reject(D);if(S)for(c in g[c]=m[c],d(v,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,c)&&(p[c]||(p[c]=[]),d(p[c],_.outdatedDependencies[c]));j&&(d(v,[_.moduleId]),g[c]=E)}var A,T=[];for(r=0;r<v.length;r++)c=v[r],P[c]&&P[c].hot._selfAccepted&&T.push({module:c,errorHandler:P[c].hot._selfAccepted});h("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete I[e]}(e)});for(var x,H,C=v.slice();C.length>0;)if(c=C.pop(),a=P[c]){var k={},N=a.hot._disposeHandlers;for(o=0;o<N.length;o++)(n=N[o])(k);for(s[c]=k,a.hot.active=!1,delete P[c],delete p[c],o=0;o<a.children.length;o++){var R=P[a.children[o]];R&&((A=R.parents.indexOf(c))>=0&&R.parents.splice(A,1))}}for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(a=P[c]))for(H=p[c],o=0;o<H.length;o++)x=H[o],(A=a.children.indexOf(x))>=0&&a.children.splice(A,1);for(c in h("apply"),i=y,g)Object.prototype.hasOwnProperty.call(g,c)&&(e[c]=g[c]);var M=null;for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(a=P[c])){H=p[c];var U=[];for(r=0;r<H.length;r++)if(x=H[r],n=a.hot._acceptedDependencies[x]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(H)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:H[r],error:e}),t.ignoreErrored||M||(M=e)}}}for(r=0;r<T.length;r++){var J=T[r];c=J.module,u=[c];try{L(c)}catch(e){if("function"==typeof J.errorHandler)try{J.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||M||(M=n),M||(M=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||M||(M=e)}}return M?(h("fail"),Promise.reject(M)):(h("idle"),new Promise(function(e){e(v)}))}var P={},I={4:0},A=[];function L(t){if(P[t])return P[t].exports;var n=P[t]={i:t,l:!1,exports:{},hot:d(t),parents:(l=u,u=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=P[e];if(!t)return L;var n=function(n){return t.hot.active?(P[n]?-1===P[n].parents.indexOf(e)&&P[n].parents.push(e):(u=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),u=[]),L(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return L[e]},set:function(t){L[e]=t}}};for(var a in L)Object.prototype.hasOwnProperty.call(L,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===f&&h("prepare"),E++,L.e(e).then(t,function(e){throw t(),e});function t(){E--,"prepare"===f&&(b[e]||S(e),0===E&&0===g&&j())}},n.t=function(e,t){return 1&t&&(e=n(e)),L.t(e,-2&t)},n}(t)),n.l=!0,n.exports}L.e=function(e){var t=[],n=I[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=I[e]=[t,r]});t.push(n[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,L.nc&&a.setAttribute("nonce",L.nc),a.src=function(e){return L.p+"js/"+({0:"ActionsOverview~ListActions~ListRules",2:"Actions",3:"ActionsOverview",5:"InventoryDetails",6:"ListActions",7:"ListRules",8:"Rules"}[e]||e)+".js"}(e),o=function(t){a.onerror=a.onload=null,clearTimeout(i);var n=I[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");c.type=r,c.request=o,n[1](c)}I[e]=void 0}};var i=setTimeout(function(){o({type:"timeout",target:a})},12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},L.m=e,L.c=P,L.d=function(e,t,n){L.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},L.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},L.t=function(e,t){if(1&t&&(e=L(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(L.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)L.d(n,r,function(t){return e[t]}.bind(null,r));return n},L.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return L.d(t,"a",t),t},L.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},L.p="/insights/platform/advisor/",L.oe=function(e){throw console.error(e),e},L.h=function(){return i};var T=window.webpackJsonp=window.webpackJsonp||[],x=T.push.bind(T);T.push=t,T=T.slice();for(var H=0;H<T.length;H++)t(T[H]);var C=x;A.push([575,9]),n()}({180:function(e,t,n){"use strict";n.d(t,"a",function(){return E});var r=n(169),o=n.n(r),a=n(225),i=n.n(a),c=n(121),s=n.n(c),u=n(122),l=n.n(u),d=n(123),p=n.n(d),f=n(124),h=n.n(f),v=n(125),m=n.n(v),y=n(1),g=n.n(y);function E(e){return function(t){function n(e){var t;return s()(this,n),(t=p()(this,h()(n).call(this,e))).state={component:null},t}return m()(n,t),l()(n,[{key:"componentDidMount",value:function(){var t=i()(o.a.mark(function t(){var n,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?g.a.createElement(e,this.props):g.a.createElement("div",null,"Loading...")}}]),n}(y.Component)}},205:function(e,t,n){(t=e.exports=n(165)(!1)).i(n(571),""),t.i(n(572),""),t.push([e.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.chart-inline svg:not(:root) {\n  overflow: visible; }\n",""])},316:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"b",function(){return h});var r=n(126),o=n.n(r),a=n(100),i=n.n(a),c=n(72),s=n.n(c),u=n(38),l=n(336),d=n(74),p=s()({rule:{},ruleFetchStatus:"",rules:{},rulesFetchStatus:"",stats:{},statsFetchStatus:"",system:{},systemFetchStatus:"",systemtype:{},systemtypeFetchStatus:"",breadcrumbs:[]}),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(u.d,"_PENDING"):return e.set("ruleFetchStatus","pending");case"".concat(u.d,"_FULFILLED"):return s.a.merge(e,{rule:t.payload,ruleFetchStatus:"fulfilled"});case"".concat(u.d,"_REJECTED"):return e.set("ruleFetchStatus","rejected");case"".concat(u.b,"_PENDING"):return e.set("rulesFetchStatus","pending");case"".concat(u.b,"_FULFILLED"):return s.a.merge(e,{rules:t.payload,rulesFetchStatus:"fulfilled"});case"".concat(u.b,"_REJECTED"):return e.set("rulesFetchStatus","rejected");case"".concat(u.e,"_PENDING"):return e.set("statsFetchStatus","pending");case"".concat(u.e,"_FULFILLED"):return s.a.merge(e,{stats:t.payload,statsFetchStatus:"fulfilled"});case"".concat(u.e,"_REJECTED"):return e.set("statsFetchStatus","rejected");case"".concat(u.h,"_PENDING"):return e.set("systemFetchStatus","pending");case"".concat(u.h,"_FULFILLED"):return s.a.merge(e,{system:t.payload,systemFetchStatus:"fulfilled"});case"".concat(u.h,"_REJECTED"):return e.set("systemFetchStatus","rejected");case"".concat(u.g,"_PENDING"):return e.set("systemtypeFetchStatus","pending");case"".concat(u.g,"_FULFILLED"):return s.a.merge(e,{systemtype:t.payload,systemtypeFetchStatus:"fulfilled"});case"".concat(u.g,"_REJECTED"):return e.set("systemFetchStatus","rejected");case u.a:return s.a.merge(e,{breadcrumbs:t.payload});default:return e}};function h(e){return Object(l.applyReducerHash)(i()({},"".concat(e.LOAD_ENTITY,"_FULFILLED"),v),{})}function v(e){return o()({},e,{loaded:!0,activeApps:[{title:"Configuration Assessment",name:"configuration_assessment",component:d.Advisor},{title:"Vulnerabilities",name:"vulnerabilities",component:d.Vulnerabilities}]})}},359:function(e,t,n){var r=n(205);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(340)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(205,function(){var t=n(205);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)}),e.hot.dispose(function(){a()})},38:function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"h",function(){return a}),n.d(t,"g",function(){return i}),n.d(t,"e",function(){return c}),n.d(t,"a",function(){return s}),n.d(t,"c",function(){return l}),n.d(t,"f",function(){return d}),n.d(t,"i",function(){return p});var r="RULE_FETCH",o="RULES_FETCH",a="SYSTEM_FETCH",i="SYSTEMTYPE_FETCH",c="STATS_FETCH",s="BREADCRUMBS_SET",u="/r/insights/platform/advisor/v1",l="".concat(u,"/rule/"),d="".concat(u,"/stats/"),p=("".concat(u,"/system/"),{rhel:105})},575:function(e,t,n){"use strict";n.r(t);var r,o=n(1),a=n.n(o),i=n(15),c=n.n(i),s=n(303),u=n(82),l=n(338),d=n(145),p=n(74),f=n(116),h=n(316);var v=n(126),m=n.n(v),y=n(121),g=n.n(y),E=n(122),b=n.n(E),_=n(123),w=n.n(_),O=n(124),D=n.n(O),S=n(125),j=n.n(S),F=n(0),P=n.n(F),I=n(317),A=n.n(I),L=n(321),T=n(147),x=n(320),H=n(180),C=n(212),k=n.n(C),N=Object(H.a)(function(){return n.e(2).then(n.bind(null,839))}),R=Object(H.a)(function(){return n.e(8).then(n.bind(null,840))}),M={actions:"/actions",rules:"/rules"},U=function(e){var t=e.component,n=e.rootClass,r=A()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-l-page__main"),o.setAttribute("role","main"),a.a.createElement(t,r)};U.propTypes={component:P.a.func,rootClass:P.a.string};var J=function(e){var t=e.childProps.location.pathname;return a.a.createElement(L.a,null,a.a.createElement(U,{path:M.actions,component:N,rootClass:"actions"}),a.a.createElement(U,{path:M.rules,component:R,rootClass:"rules"}),a.a.createElement(T.a,{render:function(){return k()(M,function(e){return e===t})?null:a.a.createElement(x.a,{to:M.actions})}}))},q=(n(359),function(e){function t(){return g()(this,t),w()(this,D()(t).apply(this,arguments))}return j()(t,e),b()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("advisor"),insights.chrome.navigation(B()),this.appNav=insights.chrome.on("APP_NAVIGATION",function(t){return e.props.history.push("/".concat(t.navId))}),this.buildNav=this.props.history.listen(function(){return insights.chrome.navigation(B())})}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return a.a.createElement(J,{childProps:this.props})}}]),t}(o.Component));q.propTypes={history:P.a.object};var G=Object(p.routerParams)(Object(u.connect)(null,null)(q));function B(){var e=window.location.pathname.split("/").slice(-1)[0];return[{title:"Actions",id:"actions"},{title:"Rules",id:"rules"}].map(function(t){return m()({},t,{active:t.id===e})})}c.a.render(a.a.createElement(u.Provider,{store:function(){for(var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.b,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(r=Object(p.getRegistry)({},[].concat(n,[Object(l.a)(),Object(f.notificationsMiddleware)({errorDescriptionKey:"response.data"})]),e)).register({AdvisorStore:h.a}),r.register({notifications:f.notifications}),r}().getStore()},a.a.createElement(s.a,{basename:"/".concat("insights","/platform/advisor")},a.a.createElement(a.a.Fragment,null,a.a.createElement(f.NotificationsPortal,null),a.a.createElement(G,null)))),document.getElementById("root"))}});
//# sourceMappingURL=../sourcemaps/App.js.map