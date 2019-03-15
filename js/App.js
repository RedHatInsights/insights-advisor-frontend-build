!function(e){function t(t){for(var r,o,a=t[0],i=t[1],c=t[2],s=0,l=[];s<a.length;s++)o=a[s],I[o]&&l.push(I[o][0]),I[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(x&&x(t);l.length;)l.shift()();return k.push.apply(k,c||[]),n()}function n(){for(var e,t=0;t<k.length;t++){for(var n=k[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==I[a]&&(r=!1)}r&&(k.splice(t--,1),e=F(F.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!_[e]||!w[e])return;for(var n in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--g&&0===b&&j()}(e,t),r&&r(e,t)};var o,a=!0,i="795e2075c5e30405f950",c=1e4,s={},l=[],u=[];function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:D,apply:L,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:s[e]};return o=void 0,t}var p=[],f="idle";function h(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var v,m,y,g=0,b=0,E={},w={},_={};function O(e){return+e+""===e?+e:e}function D(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,h("check"),(t=c,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=F.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return h("idle"),null;w={},E={},_=e.c,y=e.h,h("prepare");var t=new Promise(function(e,t){v={resolve:e,reject:t}});for(var n in m={},I)S(n);return"prepare"===f&&0===b&&0===g&&j(),t});var t}function S(e){_[e]?(w[e]=!0,g++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=F.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):E[e]=!0}function j(){h("ready");var e=v;if(v=null,e)if(a)Promise.resolve().then(function(){return L(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(O(n));e.resolve(t)}}function L(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,o,a,c;function u(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=P[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var s=0;s<a.parents.length;s++){var l=a.parents[s],u=P[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),d(n[l],[i])):(delete n[l],t.push(l),r.push({chain:c.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},v=[],g={},b=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var E in m)if(Object.prototype.hasOwnProperty.call(m,E)){var w;c=O(E);var D=!1,S=!1,j=!1,L="";switch((w=m[E]?u(c):{type:"disposed",moduleId:E}).chain&&(L="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(D=new Error("Aborted because of self decline: "+w.moduleId+L));break;case"declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+L));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(w),t.ignoreUnaccepted||(D=new Error("Aborted because "+c+" is not accepted"+L));break;case"accepted":t.onAccepted&&t.onAccepted(w),S=!0;break;case"disposed":t.onDisposed&&t.onDisposed(w),j=!0;break;default:throw new Error("Unexception type "+w.type)}if(D)return h("abort"),Promise.reject(D);if(S)for(c in g[c]=m[c],d(v,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,c)&&(p[c]||(p[c]=[]),d(p[c],w.outdatedDependencies[c]));j&&(d(v,[w.moduleId]),g[c]=b)}var k,T=[];for(r=0;r<v.length;r++)c=v[r],P[c]&&P[c].hot._selfAccepted&&T.push({module:c,errorHandler:P[c].hot._selfAccepted});h("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete I[e]}(e)});for(var A,H,x=v.slice();x.length>0;)if(c=x.pop(),a=P[c]){var C={},M=a.hot._disposeHandlers;for(o=0;o<M.length;o++)(n=M[o])(C);for(s[c]=C,a.hot.active=!1,delete P[c],delete p[c],o=0;o<a.children.length;o++){var R=P[a.children[o]];R&&((k=R.parents.indexOf(c))>=0&&R.parents.splice(k,1))}}for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(a=P[c]))for(H=p[c],o=0;o<H.length;o++)A=H[o],(k=a.children.indexOf(A))>=0&&a.children.splice(k,1);for(c in h("apply"),i=y,g)Object.prototype.hasOwnProperty.call(g,c)&&(e[c]=g[c]);var N=null;for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(a=P[c])){H=p[c];var U=[];for(r=0;r<H.length;r++)if(A=H[r],n=a.hot._acceptedDependencies[A]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(H)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:H[r],error:e}),t.ignoreErrored||N||(N=e)}}}for(r=0;r<T.length;r++){var q=T[r];c=q.module,l=[c];try{F(c)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||N||(N=n),N||(N=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||N||(N=e)}}return N?(h("fail"),Promise.reject(N)):(h("idle"),new Promise(function(e){e(v)}))}var P={},I={5:0},k=[];function F(t){if(P[t])return P[t].exports;var n=P[t]={i:t,l:!1,exports:{},hot:d(t),parents:(u=l,l=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=P[e];if(!t)return F;var n=function(n){return t.hot.active?(P[n]?-1===P[n].parents.indexOf(e)&&P[n].parents.push(e):(l=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),F(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return F[e]},set:function(t){F[e]=t}}};for(var a in F)Object.prototype.hasOwnProperty.call(F,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===f&&h("prepare"),b++,F.e(e).then(t,function(e){throw t(),e});function t(){b--,"prepare"===f&&(E[e]||S(e),0===b&&0===g&&j())}},n.t=function(e,t){return 1&t&&(e=n(e)),F.t(e,-2&t)},n}(t)),n.l=!0,n.exports}F.e=function(e){var t=[],n=I[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=I[e]=[t,r]});t.push(n[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,F.nc&&a.setAttribute("nonce",F.nc),a.src=function(e){return F.p+"js/"+({0:"ActionsOverview~InventoryDetails~ListActions~ListRules",2:"ListActions~ListRules",3:"Actions",4:"ActionsOverview",6:"InventoryDetails",7:"ListActions",8:"ListRules",9:"Rules"}[e]||e)+".js"}(e),o=function(t){a.onerror=a.onload=null,clearTimeout(i);var n=I[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");c.type=r,c.request=o,n[1](c)}I[e]=void 0}};var i=setTimeout(function(){o({type:"timeout",target:a})},12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},F.m=e,F.c=P,F.d=function(e,t,n){F.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},F.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},F.t=function(e,t){if(1&t&&(e=F(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(F.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)F.d(n,r,function(t){return e[t]}.bind(null,r));return n},F.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return F.d(t,"a",t),t},F.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},F.p="/insights/platform/advisor/",F.oe=function(e){throw console.error(e),e},F.h=function(){return i};var T=window.webpackJsonp=window.webpackJsonp||[],A=T.push.bind(T);T.push=t,T=T.slice();for(var H=0;H<T.length;H++)t(T[H]);var x=A;k.push([169,10]),n()}({113:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"b",function(){return h});var r=n(57),o=n.n(r),a=n(69),i=n.n(a),c=n(35),s=n.n(c),l=n(23),u=n(127),d=n(39),p=s()({rule:{},ruleFetchStatus:"",rules:{},rulesFetchStatus:"",stats:{},statsFetchStatus:"",system:{},systemFetchStatus:"",systemtype:{},systemtypeFetchStatus:"",breadcrumbs:[],filters:{}}),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(l.l,"_PENDING"):return e.set("ruleFetchStatus","pending");case"".concat(l.l,"_FULFILLED"):return s.a.merge(e,{rule:t.payload,ruleFetchStatus:"fulfilled"});case"".concat(l.l,"_REJECTED"):return e.set("ruleFetchStatus","rejected");case"".concat(l.i,"_PENDING"):return e.set("rulesFetchStatus","pending");case"".concat(l.i,"_FULFILLED"):return s.a.merge(e,{rules:t.payload,rulesFetchStatus:"fulfilled"});case"".concat(l.i,"_REJECTED"):return e.set("rulesFetchStatus","rejected");case"".concat(l.n,"_PENDING"):return e.set("statsFetchStatus","pending");case"".concat(l.n,"_FULFILLED"):return s.a.merge(e,{stats:t.payload,statsFetchStatus:"fulfilled"});case"".concat(l.n,"_REJECTED"):return e.set("statsFetchStatus","rejected");case"".concat(l.q,"_PENDING"):return e.set("systemFetchStatus","pending");case"".concat(l.q,"_FULFILLED"):return s.a.merge(e,{system:t.payload,systemFetchStatus:"fulfilled"});case"".concat(l.q,"_REJECTED"):return e.set("systemFetchStatus","rejected");case"".concat(l.p,"_PENDING"):return e.set("systemtypeFetchStatus","pending");case"".concat(l.p,"_FULFILLED"):return s.a.merge(e,{systemtype:t.payload,systemtypeFetchStatus:"fulfilled"});case"".concat(l.p,"_REJECTED"):return e.set("systemFetchStatus","rejected");case l.b:return s.a.merge(e,{breadcrumbs:t.payload});case l.c:return s.a.merge(e,{filters:t.payload});default:return e}};function h(e){return Object(u.applyReducerHash)(i()({},"".concat(e.LOAD_ENTITY,"_FULFILLED"),v),{})}function v(e){return o()({},e,{loaded:!0,activeApps:[{title:"Configuration Assessment",name:"configuration_assessment",component:d.Advisor}]})}},136:function(e,t,n){var r=n(75);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(134)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(75,function(){var t=n(75);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)}),e.hot.dispose(function(){a()})},169:function(e,t,n){"use strict";n.r(t);var r,o=n(2),a=n.n(o),i=n(18),c=n.n(i),s=n(111),l=n(40),u=n(123),d=n(59),p=n(39),f=n(48),h=n(113);var v=n(57),m=n.n(v),y=n(51),g=n.n(y),b=n(52),E=n.n(b),w=n(53),_=n.n(w),O=n(54),D=n.n(O),S=n(55),j=n.n(S),L=n(1),P=n.n(L),I=n(112),k=n(128),F=n.n(k),T=n(129),A=n.n(T),H=n(61),x=n(115),C=n(73),M=n(130),R=n.n(M),N=Object(C.a)(function(){return n.e(3).then(n.bind(null,673))}),U=Object(C.a)(function(){return n.e(9).then(n.bind(null,674))}),q={actions:"/actions",rules:"/rules"},J=function(e){var t=e.component,n=e.rootClass,r=A()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.classList.add("page__".concat(n),"pf-l-page__main"),o.setAttribute("role","main"),a.a.createElement(H.a,F()({},r,{component:t}))};J.propTypes={component:P.a.func,rootClass:P.a.string};var G=function(e){var t,n=e.childProps.history;return t=q,R()(Object.values(t),function(e){return Object(I.a)(location.href,{path:"".concat(document.baseURI,"platform/advisor").concat(e)})})||n.push(q.actions),a.a.createElement(x.a,null,a.a.createElement(J,{path:q.actions,component:N,rootClass:"actions"}),a.a.createElement(J,{path:q.rules,component:U,rootClass:"rules"}))};G.propTypes={childProps:P.a.shape({history:P.a.shape({push:P.a.func})})};n(136);var B=function(e){function t(){return g()(this,t),_()(this,D()(t).apply(this,arguments))}return j()(t,e),E()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("advisor"),insights.chrome.navigation(Y()),this.appNav=insights.chrome.on("APP_NAVIGATION",function(t){Object(I.a)(location.href,{path:"".concat(document.baseURI,"platform/advisor/").concat(t.navId)})||e.props.history.push("/".concat(t.navId))}),this.buildNav=this.props.history.listen(function(){return insights.chrome.navigation(Y())})}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return a.a.createElement(G,{childProps:this.props})}}]),t}(o.Component);B.propTypes={history:P.a.object};var X=Object(p.routerParams)(Object(l.connect)(null,null)(B));function Y(){var e=window.location.pathname.split("/").slice(-1)[0];return[{title:"Actions",id:"actions"},{title:"Rules",id:"rules"}].map(function(t){return m()({},t,{active:t.id===e})})}c.a.render(a.a.createElement(l.Provider,{store:function(){for(var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.b,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(r=Object(p.getRegistry)({},[].concat(n,[u.a,Object(f.notificationsMiddleware)({errorDescriptionKey:"response.data"})]),e)).register({AdvisorStore:h.a}),r.register({notifications:f.notifications}),r}().getStore()},a.a.createElement(s.a,{basename:"/".concat("insights","/platform/advisor")},a.a.createElement(a.a.Fragment,null,a.a.createElement(f.NotificationsPortal,null),a.a.createElement(X,null)))),document.getElementById("root"))},23:function(e,t,n){"use strict";n.d(t,"l",function(){return r}),n.d(t,"i",function(){return o}),n.d(t,"q",function(){return a}),n.d(t,"p",function(){return i}),n.d(t,"n",function(){return c}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return l}),n.d(t,"a",function(){return u}),n.d(t,"j",function(){return d}),n.d(t,"o",function(){return p}),n.d(t,"r",function(){return f}),n.d(t,"k",function(){return h}),n.d(t,"m",function(){return v}),n.d(t,"d",function(){return m}),n.d(t,"g",function(){return y}),n.d(t,"e",function(){return g}),n.d(t,"f",function(){return b}),n.d(t,"h",function(){return E}),n.d(t,"s",function(){return w});var r="RULE_FETCH",o="RULES_FETCH",a="SYSTEM_FETCH",i="SYSTEMTYPE_FETCH",c="STATS_FETCH",s="BREADCRUMBS_SET",l="FILTERS_SET",u="/r/insights/platform/advisor/v1",d="".concat(u,"/rule/"),p="".concat(u,"/stats/"),f=("".concat(u,"/system/"),{rhel:105}),h={availability:1,security:2,stability:3,performance:4},v={"critical-risk":4,"high-risk":3,"medium-risk":2,"low-risk":1},m=[{type:"checkbox",title:"Total Risk",urlParam:"total_risk",values:[{label:"Critical",value:"4"},{label:"High",value:"3"},{label:"Medium",value:"2"},{label:"Low",value:"1"}]},{type:"checkbox",title:"Impact",urlParam:"impact",values:[{label:"Critical",value:"4"},{label:"High",value:"3"},{label:"Medium",value:"2"},{label:"Low",value:"1"}]},{type:"checkbox",title:"Likelihood",urlParam:"likelihood",values:[{label:"Critical",value:"4"},{label:"High",value:"3"},{label:"Medium",value:"2"},{label:"Low",value:"1"}]},{type:"checkbox",title:"Category",urlParam:"category",values:[{label:"Availability",value:"".concat(h.availability)},{label:"Performance",value:"".concat(h.performance)},{label:"Stability",value:"".concat(h.stability)},{label:"Security",value:"".concat(h.security)}]},{type:"radio",title:"Rule Status",urlParam:"reports_shown",values:[{label:"All",value:void 0},{label:"Enabled",value:!0},{label:"Disabled",value:!1}]}],y={1:"The change takes very little time to implement and there is minimal impact to system operations.",2:"Typically, these changes do not require that a system be taken offline.",3:"These will likely require an outage window.",4:"The change takes a significant amount of time and planning to execute, and will impact the system and business operations of the host due to downtime."},g={1:"Low",2:"Medium",3:"High",4:"Critcal"},b={1:"Low",2:"Medium",3:"High",4:"Critcal"},E={1:"Low",2:"Moderate",3:"Moderate",4:"High"},w={1:"Very Low",2:"Low",3:"Moderate",4:"High"}},73:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var r=n(70),o=n.n(r),a=n(80),i=n.n(a),c=n(51),s=n.n(c),l=n(52),u=n.n(l),d=n(53),p=n.n(d),f=n(54),h=n.n(f),v=n(55),m=n.n(v),y=n(2),g=n.n(y);function b(e){return function(t){function n(e){var t;return s()(this,n),(t=p()(this,h()(n).call(this,e))).state={component:null},t}return m()(n,t),u()(n,[{key:"componentDidMount",value:function(){var t=i()(o.a.mark(function t(){var n,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?g.a.createElement(e,this.props):g.a.createElement("div",null,"Loading...")}}]),n}(y.Component)}},75:function(e,t,n){(t=e.exports=n(71)(!1)).i(n(165),""),t.i(n(166),""),t.push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n",""])}});
//# sourceMappingURL=../sourcemaps/App.js.map