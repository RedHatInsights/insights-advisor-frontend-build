!function(e){function t(t){for(var r,o,a=t[0],i=t[1],c=t[2],s=0,l=[];s<a.length;s++)o=a[s],P[o]&&l.push(P[o][0]),P[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(x&&x(t);l.length;)l.shift()();return I.push.apply(I,c||[]),n()}function n(){for(var e,t=0;t<I.length;t++){for(var n=I[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==P[a]&&(r=!1)}r&&(I.splice(t--,1),e=T(T.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!_[e]||!w[e])return;for(var n in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--b&&0===g&&L()}(e,t),r&&r(e,t)};var o,a=!0,i="5ebb8169c0af821bb42a",c=1e4,s={},l=[],u=[];function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:D,apply:F,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:s[e]};return o=void 0,t}var p=[],f="idle";function h(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var v,m,y,b=0,g=0,E={},w={},_={};function S(e){return+e+""===e?+e:e}function D(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,h("check"),(t=c,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=T.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return h("idle"),null;w={},E={},_=e.c,y=e.h,h("prepare");var t=new Promise(function(e,t){v={resolve:e,reject:t}});for(var n in m={},P)O(n);return"prepare"===f&&0===g&&0===b&&L(),t});var t}function O(e){_[e]?(w[e]=!0,b++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=T.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):E[e]=!0}function L(){h("ready");var e=v;if(v=null,e)if(a)Promise.resolve().then(function(){return F(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(S(n));e.resolve(t)}}function F(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,o,a,c;function u(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=j[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var s=0;s<a.parents.length;s++){var l=a.parents[s],u=j[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),d(n[l],[i])):(delete n[l],t.push(l),r.push({chain:c.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},v=[],b={},g=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var E in m)if(Object.prototype.hasOwnProperty.call(m,E)){var w;c=S(E);var D=!1,O=!1,L=!1,F="";switch((w=m[E]?u(c):{type:"disposed",moduleId:E}).chain&&(F="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(D=new Error("Aborted because of self decline: "+w.moduleId+F));break;case"declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+F));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(w),t.ignoreUnaccepted||(D=new Error("Aborted because "+c+" is not accepted"+F));break;case"accepted":t.onAccepted&&t.onAccepted(w),O=!0;break;case"disposed":t.onDisposed&&t.onDisposed(w),L=!0;break;default:throw new Error("Unexception type "+w.type)}if(D)return h("abort"),Promise.reject(D);if(O)for(c in b[c]=m[c],d(v,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,c)&&(p[c]||(p[c]=[]),d(p[c],w.outdatedDependencies[c]));L&&(d(v,[w.moduleId]),b[c]=g)}var I,k=[];for(r=0;r<v.length;r++)c=v[r],j[c]&&j[c].hot._selfAccepted&&k.push({module:c,errorHandler:j[c].hot._selfAccepted});h("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete P[e]}(e)});for(var H,R,x=v.slice();x.length>0;)if(c=x.pop(),a=j[c]){var C={},A=a.hot._disposeHandlers;for(o=0;o<A.length;o++)(n=A[o])(C);for(s[c]=C,a.hot.active=!1,delete j[c],delete p[c],o=0;o<a.children.length;o++){var M=j[a.children[o]];M&&((I=M.parents.indexOf(c))>=0&&M.parents.splice(I,1))}}for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(a=j[c]))for(R=p[c],o=0;o<R.length;o++)H=R[o],(I=a.children.indexOf(H))>=0&&a.children.splice(I,1);for(c in h("apply"),i=y,b)Object.prototype.hasOwnProperty.call(b,c)&&(e[c]=b[c]);var N=null;for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(a=j[c])){R=p[c];var U=[];for(r=0;r<R.length;r++)if(H=R[r],n=a.hot._acceptedDependencies[H]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(R)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:R[r],error:e}),t.ignoreErrored||N||(N=e)}}}for(r=0;r<k.length;r++){var q=k[r];c=q.module,l=[c];try{T(c)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||N||(N=n),N||(N=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||N||(N=e)}}return N?(h("fail"),Promise.reject(N)):(h("idle"),new Promise(function(e){e(v)}))}var j={},P={4:0},I=[];function T(t){if(j[t])return j[t].exports;var n=j[t]={i:t,l:!1,exports:{},hot:d(t),parents:(u=l,l=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=j[e];if(!t)return T;var n=function(n){return t.hot.active?(j[n]?-1===j[n].parents.indexOf(e)&&j[n].parents.push(e):(l=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),T(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return T[e]},set:function(t){T[e]=t}}};for(var a in T)Object.prototype.hasOwnProperty.call(T,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===f&&h("prepare"),g++,T.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===f&&(E[e]||O(e),0===g&&0===b&&L())}},n.t=function(e,t){return 1&t&&(e=n(e)),T.t(e,-2&t)},n}(t)),n.l=!0,n.exports}T.e=function(e){var t=[],n=P[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=P[e]=[t,r]});t.push(n[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,T.nc&&a.setAttribute("nonce",T.nc),a.src=function(e){return T.p+"js/"+({0:"Details~ListRules~Lists",2:"ListRules~Lists",3:"ListRules~Overview",5:"Details",6:"InventoryDetails",7:"ListRules",8:"Lists",9:"Overview",10:"Rules"}[e]||e)+".js"}(e),o=function(t){a.onerror=a.onload=null,clearTimeout(i);var n=P[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");c.type=r,c.request=o,n[1](c)}P[e]=void 0}};var i=setTimeout(function(){o({type:"timeout",target:a})},12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},T.m=e,T.c=j,T.d=function(e,t,n){T.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},T.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},T.t=function(e,t){if(1&t&&(e=T(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(T.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)T.d(n,r,function(t){return e[t]}.bind(null,r));return n},T.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return T.d(t,"a",t),t},T.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},T.p="/apps/insights/",T.oe=function(e){throw console.error(e),e},T.h=function(){return i};var k=window.webpackJsonp=window.webpackJsonp||[],H=k.push.bind(k);k.push=t,k=k.slice();for(var R=0;R<k.length;R++)t(k[R]);var x=H;I.push([314,11]),n()}({145:function(e,t,n){(t=e.exports=n(7)(!1)).i(n(311),""),t.i(n(312),""),t.push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n",""])},21:function(e,t,n){"use strict";n.d(t,"l",function(){return r}),n.d(t,"i",function(){return o}),n.d(t,"s",function(){return a}),n.d(t,"r",function(){return i}),n.d(t,"n",function(){return c}),n.d(t,"p",function(){return s}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return u}),n.d(t,"a",function(){return d}),n.d(t,"j",function(){return p}),n.d(t,"o",function(){return f}),n.d(t,"q",function(){return h}),n.d(t,"t",function(){return v}),n.d(t,"k",function(){return m}),n.d(t,"m",function(){return y}),n.d(t,"d",function(){return b}),n.d(t,"g",function(){return g}),n.d(t,"e",function(){return E}),n.d(t,"f",function(){return w}),n.d(t,"h",function(){return _}),n.d(t,"u",function(){return S});var r="RULE_FETCH",o="RULES_FETCH",a="SYSTEM_FETCH",i="SYSTEMTYPE_FETCH",c="STATS_RULES_FETCH",s="STATS_SYSTEMS_FETCH",l="BREADCRUMBS_SET",u="FILTERS_SET",d="/api/insights/v1",p="".concat(d,"/rule/"),f="".concat(d,"/stats/rules/"),h="".concat(d,"/stats/systems/"),v={rhel:105,ocp:325},m={availability:1,security:2,stability:3,performance:4},y={"critical-risk":4,"high-risk":3,"medium-risk":2,"low-risk":1},b=[{type:"checkbox",title:"Total Risk",urlParam:"total_risk",values:[{label:"Critical",value:"4"},{label:"High",value:"3"},{label:"Medium",value:"2"},{label:"Low",value:"1"}]},{type:"checkbox",title:"Impact",urlParam:"impact",values:[{label:"Critical",value:"4"},{label:"High",value:"3"},{label:"Medium",value:"2"},{label:"Low",value:"1"}]},{type:"checkbox",title:"Likelihood",urlParam:"likelihood",values:[{label:"Critical",value:"4"},{label:"High",value:"3"},{label:"Medium",value:"2"},{label:"Low",value:"1"}]},{type:"checkbox",title:"Category",urlParam:"category",values:[{label:"Availability",value:"".concat(m.availability)},{label:"Performance",value:"".concat(m.performance)},{label:"Stability",value:"".concat(m.stability)},{label:"Security",value:"".concat(m.security)}]},{type:"radio",title:"Rule Status",urlParam:"reports_shown",values:[{label:"All",value:void 0},{label:"Enabled",value:!0},{label:"Disabled",value:!1}]}],g={1:"The change takes very little time to implement and there is minimal impact to system operations.",2:"Typically, these changes do not require that a system be taken offline.",3:"These will likely require an outage window.",4:"The change takes a significant amount of time and planning to execute, and will impact the system and business operations of the host due to downtime."},E={1:"Low",2:"Medium",3:"High",4:"Critical"},w={1:"Low",2:"Medium",3:"High",4:"Critical"},_={1:"Low",2:"Moderate",3:"Moderate",4:"High"},S={1:"Very Low",2:"Low",3:"Moderate",4:"High"}},210:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"b",function(){return h});var r=n(154),o=n.n(r),a=n(88),i=n.n(a),c=n(39),s=n.n(c),l=n(21),u=n(224),d=n(50),p=s()({rule:{},ruleFetchStatus:"",rules:{},rulesFetchStatus:"",statsRules:{},statsRulesFetchStatus:"",statsSystems:{},statsSystemsFetchStatus:"",system:{},systemFetchStatus:"",systemtype:{},systemtypeFetchStatus:"",breadcrumbs:[],filters:{}}),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(l.l,"_PENDING"):return e.set("ruleFetchStatus","pending");case"".concat(l.l,"_FULFILLED"):return s.a.merge(e,{rule:t.payload,ruleFetchStatus:"fulfilled"});case"".concat(l.l,"_REJECTED"):return e.set("ruleFetchStatus","rejected");case"".concat(l.i,"_PENDING"):return e.set("rulesFetchStatus","pending");case"".concat(l.i,"_FULFILLED"):return s.a.merge(e,{rules:t.payload,rulesFetchStatus:"fulfilled"});case"".concat(l.i,"_REJECTED"):return e.set("rulesFetchStatus","rejected");case"".concat(l.n,"_PENDING"):return e.set("statsRulesFetchStatus","pending");case"".concat(l.n,"_FULFILLED"):return s.a.merge(e,{statsRules:t.payload,statsRulesFetchStatus:"fulfilled"});case"".concat(l.n,"_REJECTED"):return e.set("statsRulesFetchStatus","rejected");case"".concat(l.p,"_PENDING"):return e.set("statsSystemsFetchStatus","pending");case"".concat(l.p,"_FULFILLED"):return s.a.merge(e,{statsSystems:t.payload,statsSystemsFetchStatus:"fulfilled"});case"".concat(l.p,"_REJECTED"):return e.set("statsSystemsFetchStatus","rejected");case"".concat(l.s,"_PENDING"):return e.set("systemFetchStatus","pending");case"".concat(l.s,"_FULFILLED"):return s.a.merge(e,{system:t.payload,systemFetchStatus:"fulfilled"});case"".concat(l.s,"_REJECTED"):return e.set("systemFetchStatus","rejected");case"".concat(l.r,"_PENDING"):return e.set("systemtypeFetchStatus","pending");case"".concat(l.r,"_FULFILLED"):return s.a.merge(e,{systemtype:t.payload,systemtypeFetchStatus:"fulfilled"});case"".concat(l.r,"_REJECTED"):return e.set("systemFetchStatus","rejected");case l.b:return s.a.merge(e,{breadcrumbs:t.payload});case l.c:return s.a.merge(e,{filters:t.payload});default:return e}};function h(e){return Object(u.applyReducerHash)(i()({},"".concat(e.LOAD_ENTITY,"_FULFILLED"),v),{})}function v(e){return o()({},e,{loaded:!0,activeApps:[{title:"Insights",name:"insights",component:d.Advisor}]})}},232:function(e,t,n){var r=n(145);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(8)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(145,function(){var t=n(145);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)}),e.hot.dispose(function(){a()})},314:function(e,t,n){"use strict";n.r(t);var r,o=n(2),a=n.n(o),i=n(20),c=n.n(i),s=n(208),l=n(51),u=n(220),d=n(73),p=n(50),f=n(61),h=n(210);var v=n(65),m=n.n(v),y=n(66),b=n.n(y),g=n(67),E=n.n(g),w=n(68),_=n.n(w),S=n(69),D=n.n(S),O=n(1),L=n.n(O),F=n(209),j=n(225),P=n.n(j),I=n(226),T=n.n(I),k=n(79),H=n(216),R=n(218),x=n(90),C=Object(x.a)(function(){return Promise.all([n.e(3),n.e(9)]).then(n.bind(null,954))}),A=Object(x.a)(function(){return n.e(10).then(n.bind(null,955))}),M="/overview",N="/rules",U=function(e){var t=e.component,n=e.rootClass,r=T()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.setAttribute("role","main"),a.a.createElement(k.a,P()({},r,{component:t}))};U.propTypes={component:L.a.func,rootClass:L.a.string};var q=function(){return a.a.createElement(H.a,null,a.a.createElement(U,{path:M,component:C,rootClass:"overview/"}),a.a.createElement(U,{path:N,component:A,rootClass:"rules"}),a.a.createElement(R.a,{path:"*",to:"".concat(M),push:!0}))},J=(n(232),function(e){function t(){return m()(this,t),E()(this,_()(t).apply(this,arguments))}return D()(t,e),b()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("insights"),this.appNav=insights.chrome.on("APP_NAVIGATION",function(t){Object(F.a)(location.href,{path:"".concat(document.baseURI,"insights/").concat(t.navId)})||e.props.history.push("/".concat(t.navId))})}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return a.a.createElement(q,{childProps:this.props})}}]),t}(o.Component));J.propTypes={history:L.a.object};var G=Object(p.routerParams)(Object(l.connect)(null,null)(J));var Y=function(e){var t="/",n=e.split("/");return n.shift(),"beta"===n[0]&&(n.shift(),t="/beta/"),"".concat(t).concat(n[0])};c.a.render(a.a.createElement(l.Provider,{store:function(){for(var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.b,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(r=Object(p.getRegistry)({},[].concat(n,[u.a,Object(f.notificationsMiddleware)({errorDescriptionKey:"response.data"})]),e)).register({AdvisorStore:h.a}),r.register({notifications:f.notifications}),r}().getStore()},a.a.createElement(s.a,{basename:Y(window.location.pathname)},a.a.createElement(a.a.Fragment,null,a.a.createElement(f.NotificationsPortal,null),a.a.createElement(G,null)))),document.getElementById("root"))},90:function(e,t,n){"use strict";n.d(t,"a",function(){return g});var r=n(89),o=n.n(r),a=n(155),i=n.n(a),c=n(65),s=n.n(c),l=n(66),u=n.n(l),d=n(67),p=n.n(d),f=n(68),h=n.n(f),v=n(69),m=n.n(v),y=n(2),b=n.n(y);function g(e){return function(t){function n(e){var t;return s()(this,n),(t=p()(this,h()(n).call(this,e))).state={component:null},t}return m()(n,t),u()(n,[{key:"componentDidMount",value:function(){var t=i()(o.a.mark(function t(){var n,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?b.a.createElement(e,this.props):null}}]),n}(y.Component)}}});
//# sourceMappingURL=../sourcemaps/App.js.map