!function(e){function t(t){for(var r,o,a=t[0],i=t[1],c=t[2],s=0,l=[];s<a.length;s++)o=a[s],L[o]&&l.push(L[o][0]),L[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(H&&H(t);l.length;)l.shift()();return F.push.apply(F,c||[]),n()}function n(){for(var e,t=0;t<F.length;t++){for(var n=F[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==L[a]&&(r=!1)}r&&(F.splice(t--,1),e=A(A.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!_[e])return;for(var n in _[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--g&&0===b&&j()}(e,t),r&&r(e,t)};var o,a=!0,i="85e47300decd437df00c",c=1e4,s={},l=[],u=[];function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:D,apply:I,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:s[e]};return o=void 0,t}var p=[],f="idle";function h(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var v,m,y,g=0,b=0,E={},_={},w={};function O(e){return+e+""===e?+e:e}function D(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,h("check"),(t=c,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=A.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return h("idle"),null;_={},E={},w=e.c,y=e.h,h("prepare");var t=new Promise(function(e,t){v={resolve:e,reject:t}});for(var n in m={},L)S(n);return"prepare"===f&&0===b&&0===g&&j(),t});var t}function S(e){w[e]?(_[e]=!0,g++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=A.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):E[e]=!0}function j(){h("ready");var e=v;if(v=null,e)if(a)Promise.resolve().then(function(){return I(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(O(n));e.resolve(t)}}function I(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,o,a,c;function u(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=P[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var s=0;s<a.parents.length;s++){var l=a.parents[s],u=P[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),d(n[l],[i])):(delete n[l],t.push(l),r.push({chain:c.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},v=[],g={},b=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var E in m)if(Object.prototype.hasOwnProperty.call(m,E)){var _;c=O(E);var D=!1,S=!1,j=!1,I="";switch((_=m[E]?u(c):{type:"disposed",moduleId:E}).chain&&(I="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(D=new Error("Aborted because of self decline: "+_.moduleId+I));break;case"declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+I));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(_),t.ignoreUnaccepted||(D=new Error("Aborted because "+c+" is not accepted"+I));break;case"accepted":t.onAccepted&&t.onAccepted(_),S=!0;break;case"disposed":t.onDisposed&&t.onDisposed(_),j=!0;break;default:throw new Error("Unexception type "+_.type)}if(D)return h("abort"),Promise.reject(D);if(S)for(c in g[c]=m[c],d(v,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,c)&&(p[c]||(p[c]=[]),d(p[c],_.outdatedDependencies[c]));j&&(d(v,[_.moduleId]),g[c]=b)}var F,k=[];for(r=0;r<v.length;r++)c=v[r],P[c]&&P[c].hot._selfAccepted&&k.push({module:c,errorHandler:P[c].hot._selfAccepted});h("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete L[e]}(e)});for(var T,C,H=v.slice();H.length>0;)if(c=H.pop(),a=P[c]){var x={},R=a.hot._disposeHandlers;for(o=0;o<R.length;o++)(n=R[o])(x);for(s[c]=x,a.hot.active=!1,delete P[c],delete p[c],o=0;o<a.children.length;o++){var M=P[a.children[o]];M&&((F=M.parents.indexOf(c))>=0&&M.parents.splice(F,1))}}for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(a=P[c]))for(C=p[c],o=0;o<C.length;o++)T=C[o],(F=a.children.indexOf(T))>=0&&a.children.splice(F,1);for(c in h("apply"),i=y,g)Object.prototype.hasOwnProperty.call(g,c)&&(e[c]=g[c]);var N=null;for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(a=P[c])){C=p[c];var U=[];for(r=0;r<C.length;r++)if(T=C[r],n=a.hot._acceptedDependencies[T]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(C)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:C[r],error:e}),t.ignoreErrored||N||(N=e)}}}for(r=0;r<k.length;r++){var J=k[r];c=J.module,l=[c];try{A(c)}catch(e){if("function"==typeof J.errorHandler)try{J.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||N||(N=n),N||(N=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||N||(N=e)}}return N?(h("fail"),Promise.reject(N)):(h("idle"),new Promise(function(e){e(v)}))}var P={},L={6:0},F=[];function A(t){if(P[t])return P[t].exports;var n=P[t]={i:t,l:!1,exports:{},hot:d(t),parents:(u=l,l=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=P[e];if(!t)return A;var n=function(n){return t.hot.active?(P[n]?-1===P[n].parents.indexOf(e)&&P[n].parents.push(e):(l=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),A(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(t){A[e]=t}}};for(var a in A)Object.prototype.hasOwnProperty.call(A,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===f&&h("prepare"),b++,A.e(e).then(t,function(e){throw t(),e});function t(){b--,"prepare"===f&&(E[e]||S(e),0===b&&0===g&&j())}},n.t=function(e,t){return 1&t&&(e=n(e)),A.t(e,-2&t)},n}(t)),n.l=!0,n.exports}A.e=function(e){var t=[],n=L[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=L[e]=[t,r]});t.push(n[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,A.nc&&a.setAttribute("nonce",A.nc),a.src=function(e){return A.p+"js/"+({0:"ActionsOverview~InventoryDetails~ListActions~ListRules",1:"InventoryDetails~ListActions~ListRules",2:"InventoryDetails~ListActions",4:"Actions",5:"ActionsOverview",7:"InventoryDetails",8:"ListActions",9:"ListRules",10:"Rules"}[e]||e)+".js"}(e),o=function(t){a.onerror=a.onload=null,clearTimeout(i);var n=L[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");c.type=r,c.request=o,n[1](c)}L[e]=void 0}};var i=setTimeout(function(){o({type:"timeout",target:a})},12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},A.m=e,A.c=P,A.d=function(e,t,n){A.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},A.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,t){if(1&t&&(e=A(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(A.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)A.d(n,r,function(t){return e[t]}.bind(null,r));return n},A.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(t,"a",t),t},A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},A.p="/insightsbeta/platform/advisor/",A.oe=function(e){throw console.error(e),e},A.h=function(){return i};var k=window.webpackJsonp=window.webpackJsonp||[],T=k.push.bind(k);k.push=t,k=k.slice();for(var C=0;C<k.length;C++)t(k[C]);var H=T;F.push([561,11]),n()}({172:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var r=n(159),o=n.n(r),a=n(214),i=n.n(a),c=n(112),s=n.n(c),l=n(113),u=n.n(l),d=n(114),p=n.n(d),f=n(115),h=n.n(f),v=n(116),m=n.n(v),y=n(1),g=n.n(y);function b(e){return function(t){function n(e){var t;return s()(this,n),(t=p()(this,h()(n).call(this,e))).state={component:null},t}return m()(n,t),u()(n,[{key:"componentDidMount",value:function(){var t=i()(o.a.mark(function t(){var n,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?g.a.createElement(e,this.props):g.a.createElement("div",null,"Loading...")}}]),n}(y.Component)}},197:function(e,t,n){(t=e.exports=n(158)(!1)).i(n(557),""),t.i(n(558),""),t.push([e.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n\n.chart-inline svg:not(:root) {\n  overflow: visible; }\n",""])},296:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"b",function(){return h});var r=n(118),o=n.n(r),a=n(91),i=n.n(a),c=n(58),s=n.n(c),l=n(33),u=n(318),d=n(72),p=s()({rule:{},ruleFetchStatus:"",rules:{},rulesFetchStatus:"",stats:{},statsFetchStatus:"",system:{},systemFetchStatus:"",systemtype:{},systemtypeFetchStatus:"",breadcrumbs:[],filters:{}}),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(l.g,"_PENDING"):return e.set("ruleFetchStatus","pending");case"".concat(l.g,"_FULFILLED"):return s.a.merge(e,{rule:t.payload,ruleFetchStatus:"fulfilled"});case"".concat(l.g,"_REJECTED"):return e.set("ruleFetchStatus","rejected");case"".concat(l.d,"_PENDING"):return e.set("rulesFetchStatus","pending");case"".concat(l.d,"_FULFILLED"):return s.a.merge(e,{rules:t.payload,rulesFetchStatus:"fulfilled"});case"".concat(l.d,"_REJECTED"):return e.set("rulesFetchStatus","rejected");case"".concat(l.i,"_PENDING"):return e.set("statsFetchStatus","pending");case"".concat(l.i,"_FULFILLED"):return s.a.merge(e,{stats:t.payload,statsFetchStatus:"fulfilled"});case"".concat(l.i,"_REJECTED"):return e.set("statsFetchStatus","rejected");case"".concat(l.l,"_PENDING"):return e.set("systemFetchStatus","pending");case"".concat(l.l,"_FULFILLED"):return s.a.merge(e,{system:t.payload,systemFetchStatus:"fulfilled"});case"".concat(l.l,"_REJECTED"):return e.set("systemFetchStatus","rejected");case"".concat(l.k,"_PENDING"):return e.set("systemtypeFetchStatus","pending");case"".concat(l.k,"_FULFILLED"):return s.a.merge(e,{systemtype:t.payload,systemtypeFetchStatus:"fulfilled"});case"".concat(l.k,"_REJECTED"):return e.set("systemFetchStatus","rejected");case l.a:return s.a.merge(e,{breadcrumbs:t.payload});case l.b:return s.a.merge(e,{filters:t.payload});default:return e}};function h(e){return Object(u.applyReducerHash)(i()({},"".concat(e.LOAD_ENTITY,"_FULFILLED"),v),{})}function v(e){return o()({},e,{loaded:!0,activeApps:[{title:"Configuration Assessment",name:"configuration_assessment",component:d.Advisor}]})}},33:function(e,t,n){"use strict";n.d(t,"g",function(){return r}),n.d(t,"d",function(){return o}),n.d(t,"l",function(){return a}),n.d(t,"k",function(){return i}),n.d(t,"i",function(){return c}),n.d(t,"a",function(){return s}),n.d(t,"b",function(){return l}),n.d(t,"e",function(){return d}),n.d(t,"j",function(){return p}),n.d(t,"m",function(){return f}),n.d(t,"f",function(){return h}),n.d(t,"h",function(){return v}),n.d(t,"c",function(){return m});var r="RULE_FETCH",o="RULES_FETCH",a="SYSTEM_FETCH",i="SYSTEMTYPE_FETCH",c="STATS_FETCH",s="BREADCRUMBS_SET",l="FILTERS_SET",u="/r/insights/platform/advisor/v1",d="".concat(u,"/rule/"),p="".concat(u,"/stats/"),f=("".concat(u,"/system/"),{rhel:105}),h={availability:1,security:2,stability:3,performance:4},v={"critical-risk":4,"high-risk":3,"medium-risk":2,"low-risk":1},m=[{title:"Total Risk",urlParam:"total_risk",values:[{label:"Critical",value:"4"},{label:"High",value:"3"},{label:"Medium",value:"2"},{label:"Low",value:"1"}]},{title:"Impact",urlParam:"impact",values:[{label:"Critical",value:"4"},{label:"High",value:"3"},{label:"Medium",value:"2"},{label:"Low",value:"1"}]},{title:"Likelihood",urlParam:"likelihood",values:[{label:"Critical",value:"4"},{label:"High",value:"3"},{label:"Medium",value:"2"},{label:"Low",value:"1"}]},{title:"Category",urlParam:"category",values:[{label:"Availability",value:"".concat(h.availability)},{label:"Performance",value:"".concat(h.performance)},{label:"Stability",value:"".concat(h.stability)},{label:"Security",value:"".concat(h.security)}]}]},341:function(e,t,n){var r=n(197);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(320)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(197,function(){var t=n(197);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)}),e.hot.dispose(function(){a()})},561:function(e,t,n){"use strict";n.r(t);var r,o=n(1),a=n.n(o),i=n(16),c=n.n(i),s=n(294),l=n(73),u=n(305),d=n(119),p=n(72),f=n(108),h=n(296);var v=n(118),m=n.n(v),y=n(112),g=n.n(y),b=n(113),E=n.n(b),_=n(114),w=n.n(_),O=n(115),D=n.n(O),S=n(116),j=n.n(S),I=n(0),P=n.n(I),L=n(295),F=n(98),A=n.n(F),k=n(297),T=n.n(k),C=n(142),H=n(302),x=n(172),R=n(203),M=n.n(R),N=Object(x.a)(function(){return n.e(4).then(n.bind(null,907))}),U=Object(x.a)(function(){return n.e(10).then(n.bind(null,908))}),J={actions:"/actions",rules:"/rules"},q=function(e){var t=e.component,n=e.rootClass,r=T()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.classList.add("page__".concat(n),"pf-l-page__main"),o.setAttribute("role","main"),a.a.createElement(C.a,A()({},r,{component:t}))};q.propTypes={component:P.a.func,rootClass:P.a.string};var G=function(e){var t,n=e.childProps.history;return t=J,M()(Object.values(t),function(e){return Object(L.a)(location.href,{path:"".concat(document.baseURI,"platform/advisor").concat(e)})})||n.push(J.actions),a.a.createElement(H.a,null,a.a.createElement(q,{path:J.actions,component:N,rootClass:"actions"}),a.a.createElement(q,{path:J.rules,component:U,rootClass:"rules"}))};G.propTypes={childProps:P.a.shape({history:P.a.shape({push:P.a.func})})};n(341);var B=function(e){function t(){return g()(this,t),w()(this,D()(t).apply(this,arguments))}return j()(t,e),E()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("advisor"),insights.chrome.navigation(Y()),this.appNav=insights.chrome.on("APP_NAVIGATION",function(t){Object(L.a)(location.href,{path:"".concat(document.baseURI,"platform/advisor/").concat(t.navId)})||e.props.history.push("/".concat(t.navId))}),this.buildNav=this.props.history.listen(function(){return insights.chrome.navigation(Y())})}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return a.a.createElement(G,{childProps:this.props})}}]),t}(o.Component);B.propTypes={history:P.a.object};var X=Object(p.routerParams)(Object(l.connect)(null,null)(B));function Y(){var e=window.location.pathname.split("/").slice(-1)[0];return[{title:"Actions",id:"actions"},{title:"Rules",id:"rules"}].map(function(t){return m()({},t,{active:t.id===e})})}c.a.render(a.a.createElement(l.Provider,{store:function(){for(var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.b,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(r=Object(p.getRegistry)({},[].concat(n,[u.a,Object(f.notificationsMiddleware)({errorDescriptionKey:"response.data"})]),e)).register({AdvisorStore:h.a}),r.register({notifications:f.notifications}),r}().getStore()},a.a.createElement(s.a,{basename:"/".concat("insightsbeta","/platform/advisor")},a.a.createElement(a.a.Fragment,null,a.a.createElement(f.NotificationsPortal,null),a.a.createElement(X,null)))),document.getElementById("root"))}});
//# sourceMappingURL=../sourcemaps/App.js.map