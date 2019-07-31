!function(e){function t(t){for(var r,o,a=t[0],c=t[1],i=t[2],s=0,l=[];s<a.length;s++)o=a[s],k[o]&&l.push(k[o][0]),k[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(x&&x(t);l.length;)l.shift()();return F.push.apply(F,i||[]),n()}function n(){for(var e,t=0;t<F.length;t++){for(var n=F[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==k[a]&&(r=!1)}r&&(F.splice(t--,1),e=L(L.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!_[e]||!w[e])return;for(var n in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--b&&0===g&&j()}(e,t),r&&r(e,t)};var o,a=!0,c="c68c4d437531c0644c2f",i=1e4,s={},l=[],u=[];function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:S,apply:P,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:s[e]};return o=void 0,t}var p=[],f="idle";function h(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var v,m,y,b=0,g=0,E={},w={},_={};function O(e){return+e+""===e?+e:e}function S(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,h("check"),(t=i,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=L.p+""+c+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return h("idle"),null;w={},E={},_=e.c,y=e.h,h("prepare");var t=new Promise(function(e,t){v={resolve:e,reject:t}});for(var n in m={},k)D(n);return"prepare"===f&&0===g&&0===b&&j(),t});var t}function D(e){_[e]?(w[e]=!0,b++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=L.p+""+e+"."+c+".hot-update.js",document.head.appendChild(t)}(e)):E[e]=!0}function j(){h("ready");var e=v;if(v=null,e)if(a)Promise.resolve().then(function(){return P(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(O(n));e.resolve(t)}}function P(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,o,a,i;function u(e){for(var t=[e],n={},r=t.map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),c=o.id,i=o.chain;if((a=I[c])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:c};if(a.hot._main)return{type:"unaccepted",chain:i,moduleId:c};for(var s=0;s<a.parents.length;s++){var l=a.parents[s],u=I[l];if(u){if(u.hot._declinedDependencies[c])return{type:"declined",chain:i.concat([l]),moduleId:c,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[c]?(n[l]||(n[l]=[]),d(n[l],[c])):(delete n[l],t.push(l),r.push({chain:i.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},v=[],b={},g=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var E in m)if(Object.prototype.hasOwnProperty.call(m,E)){var w;i=O(E);var S=!1,D=!1,j=!1,P="";switch((w=m[E]?u(i):{type:"disposed",moduleId:E}).chain&&(P="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(S=new Error("Aborted because of self decline: "+w.moduleId+P));break;case"declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(S=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+P));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(w),t.ignoreUnaccepted||(S=new Error("Aborted because "+i+" is not accepted"+P));break;case"accepted":t.onAccepted&&t.onAccepted(w),D=!0;break;case"disposed":t.onDisposed&&t.onDisposed(w),j=!0;break;default:throw new Error("Unexception type "+w.type)}if(S)return h("abort"),Promise.reject(S);if(D)for(i in b[i]=m[i],d(v,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,i)&&(p[i]||(p[i]=[]),d(p[i],w.outdatedDependencies[i]));j&&(d(v,[w.moduleId]),b[i]=g)}var F,T=[];for(r=0;r<v.length;r++)i=v[r],I[i]&&I[i].hot._selfAccepted&&b[i]!==g&&T.push({module:i,errorHandler:I[i].hot._selfAccepted});h("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete k[e]}(e)});for(var C,R,x=v.slice();x.length>0;)if(i=x.pop(),a=I[i]){var H={},M=a.hot._disposeHandlers;for(o=0;o<M.length;o++)(n=M[o])(H);for(s[i]=H,a.hot.active=!1,delete I[i],delete p[i],o=0;o<a.children.length;o++){var A=I[a.children[o]];A&&((F=A.parents.indexOf(i))>=0&&A.parents.splice(F,1))}}for(i in p)if(Object.prototype.hasOwnProperty.call(p,i)&&(a=I[i]))for(R=p[i],o=0;o<R.length;o++)C=R[o],(F=a.children.indexOf(C))>=0&&a.children.splice(F,1);for(i in h("apply"),c=y,b)Object.prototype.hasOwnProperty.call(b,i)&&(e[i]=b[i]);var N=null;for(i in p)if(Object.prototype.hasOwnProperty.call(p,i)&&(a=I[i])){R=p[i];var U=[];for(r=0;r<R.length;r++)if(C=R[r],n=a.hot._acceptedDependencies[C]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(R)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:i,dependencyId:R[r],error:e}),t.ignoreErrored||N||(N=e)}}}for(r=0;r<T.length;r++){var q=T[r];i=q.module,l=[i];try{L(i)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:i,error:n,originalError:e}),t.ignoreErrored||N||(N=n),N||(N=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:i,error:e}),t.ignoreErrored||N||(N=e)}}return N?(h("fail"),Promise.reject(N)):(h("idle"),new Promise(function(e){e(v)}))}var I={},k={2:0},F=[];function L(t){if(I[t])return I[t].exports;var n=I[t]={i:t,l:!1,exports:{},hot:d(t),parents:(u=l,l=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=I[e];if(!t)return L;var n=function(n){return t.hot.active?(I[n]?-1===I[n].parents.indexOf(e)&&I[n].parents.push(e):(l=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),L(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return L[e]},set:function(t){L[e]=t}}};for(var a in L)Object.prototype.hasOwnProperty.call(L,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===f&&h("prepare"),g++,L.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===f&&(E[e]||D(e),0===g&&0===b&&j())}},n.t=function(e,t){return 1&t&&(e=n(e)),L.t(e,-2&t)},n}(t)),n.l=!0,n.exports}L.e=function(e){var t=[],n=k[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=k[e]=[t,r]});t.push(n[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,L.nc&&a.setAttribute("nonce",L.nc),a.src=function(e){return L.p+"js/"+({0:"Details~InventoryDetails~ListRules~Overview",1:"Details~ListRules",3:"Details",4:"InventoryDetails",5:"ListRules",6:"Overview",7:"Rules"}[e]||e)+".js"}(e);var c=new Error;o=function(t){a.onerror=a.onload=null,clearTimeout(i);var n=k[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}k[e]=void 0}};var i=setTimeout(function(){o({type:"timeout",target:a})},12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},L.m=e,L.c=I,L.d=function(e,t,n){L.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},L.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},L.t=function(e,t){if(1&t&&(e=L(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(L.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)L.d(n,r,function(t){return e[t]}.bind(null,r));return n},L.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return L.d(t,"a",t),t},L.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},L.p="/beta/apps/insights/",L.oe=function(e){throw console.error(e),e},L.h=function(){return c};var T=window.webpackJsonp=window.webpackJsonp||[],C=T.push.bind(T);T.push=t,T=T.slice();for(var R=0;R<T.length;R++)t(T[R]);var x=C;F.push([477,8]),n()}({139:function(e,t,n){"use strict";n.d(t,"a",function(){return g});var r=n(136),o=n.n(r),a=n(230),c=n.n(a),i=n(96),s=n.n(i),l=n(97),u=n.n(l),d=n(98),p=n.n(d),f=n(99),h=n.n(f),v=n(100),m=n.n(v),y=n(2),b=n.n(y);function g(e){return function(t){function n(e){var t;return s()(this,n),(t=p()(this,h()(n).call(this,e))).state={component:null},t}var r;return m()(n,t),u()(n,[{key:"componentDidMount",value:(r=c()(o.a.mark(function t(){var n,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?b.a.createElement(e,this.props):null}}]),n}(y.Component)}},206:function(e,t,n){(t=e.exports=n(5)(!1)).i(n(475),""),t.i(n(476),""),t.push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n",""])},25:function(e,t,n){"use strict";n.d(t,"l",function(){return r}),n.d(t,"i",function(){return o}),n.d(t,"s",function(){return a}),n.d(t,"r",function(){return c}),n.d(t,"n",function(){return i}),n.d(t,"p",function(){return s}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return u}),n.d(t,"a",function(){return d}),n.d(t,"j",function(){return p}),n.d(t,"o",function(){return f}),n.d(t,"q",function(){return h}),n.d(t,"t",function(){return v}),n.d(t,"k",function(){return m}),n.d(t,"m",function(){return y}),n.d(t,"d",function(){return b}),n.d(t,"g",function(){return g}),n.d(t,"e",function(){return E}),n.d(t,"f",function(){return w}),n.d(t,"h",function(){return _}),n.d(t,"u",function(){return O});var r="RULE_FETCH",o="RULES_FETCH",a="SYSTEM_FETCH",c="SYSTEMTYPE_FETCH",i="STATS_RULES_FETCH",s="STATS_SYSTEMS_FETCH",l="BREADCRUMBS_SET",u="FILTERS_SET",d="/api/insights/v1",p="".concat(d,"/rule/"),f="".concat(d,"/stats/rules/"),h="".concat(d,"/stats/systems/"),v={rhel:105,ocp:325},m={availability:1,security:2,stability:3,performance:4},y={"critical-risk":4,"high-risk":3,"medium-risk":2,"low-risk":1},b=[{type:"checkbox",title:"Total Risk",urlParam:"total_risk",values:[{label:"Critical",value:"4"},{label:"Important",value:"3"},{label:"Moderate",value:"2"},{label:"Low",value:"1"}]},{type:"checkbox",title:"Risk of Change",urlParam:"res_risk",values:[{label:"High",value:"4"},{label:"Moderate",value:"3"},{label:"Low",value:"2"},{label:"Very Low",value:"1"}]},{type:"checkbox",title:"Impact",urlParam:"impact",values:[{label:"Critical",value:"4"},{label:"Important",value:"3"},{label:"Moderate",value:"2"},{label:"Low",value:"1"}]},{type:"checkbox",title:"Likelihood",urlParam:"likelihood",values:[{label:"Critical",value:"4"},{label:"Important",value:"3"},{label:"Moderate",value:"2"},{label:"Low",value:"1"}]},{type:"checkbox",title:"Category",urlParam:"category",values:[{label:"Availability",value:"".concat(m.availability)},{label:"Performance",value:"".concat(m.performance)},{label:"Stability",value:"".concat(m.stability)},{label:"Security",value:"".concat(m.security)}]},{type:"radio",title:"Rule Status",urlParam:"reports_shown",values:[{label:"All",value:void 0},{label:"Enabled",value:!0},{label:"Disabled",value:!1}]}],g={1:"The change takes very little time to implement and there is minimal impact to system operations.",2:"Typically, these changes do not require that a system be taken offline.",3:"These will likely require an outage window.",4:"The change takes a significant amount of time and planning to execute, and will impact the system and business operations of the host due to downtime."},E={1:"Low",2:"Moderate",3:"Important",4:"Critical"},w={1:"Low",2:"Moderate",3:"Important",4:"Critical"},_={1:"Very Low",2:"Low",3:"Moderate",4:"High"},O={1:"Low",2:"Moderate",3:"Important",4:"Critical"}},286:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"b",function(){return h});var r=n(135),o=n.n(r),a=n(54),c=n.n(a),i=n(25),s=n(319),l=n(320),u=n.n(l);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var p=c()({rule:{},ruleFetchStatus:"",rules:{},rulesFetchStatus:"",statsRules:{},statsRulesFetchStatus:"",statsSystems:{},statsSystemsFetchStatus:"",system:{},systemFetchStatus:"",systemtype:{},systemtypeFetchStatus:"",breadcrumbs:[],filters:{impacting:!0,reports_shown:!0}}),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(i.l,"_PENDING"):return e.set("ruleFetchStatus","pending");case"".concat(i.l,"_FULFILLED"):return c.a.merge(e,{rule:t.payload,ruleFetchStatus:"fulfilled"});case"".concat(i.l,"_REJECTED"):return e.set("ruleFetchStatus","rejected");case"".concat(i.i,"_PENDING"):return e.set("rulesFetchStatus","pending");case"".concat(i.i,"_FULFILLED"):return c.a.merge(e,{rules:t.payload,rulesFetchStatus:"fulfilled"});case"".concat(i.i,"_REJECTED"):return e.set("rulesFetchStatus","rejected");case"".concat(i.n,"_PENDING"):return e.set("statsRulesFetchStatus","pending");case"".concat(i.n,"_FULFILLED"):return c.a.merge(e,{statsRules:t.payload,statsRulesFetchStatus:"fulfilled"});case"".concat(i.n,"_REJECTED"):return e.set("statsRulesFetchStatus","rejected");case"".concat(i.p,"_PENDING"):return e.set("statsSystemsFetchStatus","pending");case"".concat(i.p,"_FULFILLED"):return c.a.merge(e,{statsSystems:t.payload,statsSystemsFetchStatus:"fulfilled"});case"".concat(i.p,"_REJECTED"):return e.set("statsSystemsFetchStatus","rejected");case"".concat(i.s,"_PENDING"):return e.set("systemFetchStatus","pending");case"".concat(i.s,"_FULFILLED"):return c.a.merge(e,{system:t.payload,systemFetchStatus:"fulfilled"});case"".concat(i.s,"_REJECTED"):return e.set("systemFetchStatus","rejected");case"".concat(i.r,"_PENDING"):return e.set("systemtypeFetchStatus","pending");case"".concat(i.r,"_FULFILLED"):return c.a.merge(e,{systemtype:t.payload,systemtypeFetchStatus:"fulfilled"});case"".concat(i.r,"_REJECTED"):return e.set("systemFetchStatus","rejected");case i.b:return c.a.merge(e,{breadcrumbs:t.payload});case i.c:return c.a.merge(e,{filters:t.payload});default:return e}};function h(e){return Object(s.applyReducerHash)(o()({},"".concat(e.LOAD_ENTITY,"_FULFILLED"),v),{})}function v(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach(function(t){o()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{loaded:!0,activeApps:[{title:"Insights",name:"insights",component:u.a}]})}},331:function(e,t,n){var r=n(206);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(6)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(206,function(){var t=n(206);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)}),e.hot.dispose(function(){a()})},427:function(e,t){},445:function(e,t){},446:function(e,t){},447:function(e,t){},462:function(e,t){},477:function(e,t,n){"use strict";n.r(t);var r,o=n(2),a=n.n(o),c=n(26),i=n.n(c),s=n(69),l=n(68),u=n(314),d=n(102),p=n(232),f=n(80),h=n(286);var v=n(96),m=n.n(v),y=n(97),b=n.n(y),g=n(98),E=n.n(g),w=n(99),_=n.n(w),O=n(100),S=n.n(O),D=n(1),j=n.n(D),P=n(229),I=n.n(P),k=n(67),F=n(325),L=n.n(F),T=n(326),C=n.n(T),R=n(139),x=Object(R.a)(function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,968))}),H=Object(R.a)(function(){return n.e(7).then(n.bind(null,969))}),M="/overview",A="/rules",N=function(e){var t=e.component,n=e.rootClass,r=C()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.setAttribute("role","main"),a.a.createElement(k.d,L()({},r,{component:t}))};N.propTypes={component:j.a.func,rootClass:j.a.string};var U=function(){return a.a.createElement(k.g,null,a.a.createElement(N,{path:M,component:x,rootClass:"overview/"}),a.a.createElement(N,{path:A,component:H,rootClass:"rules"}),a.a.createElement(k.c,{path:"*",to:"".concat(M),push:!0}))},q=(n(331),function(e){function t(){return m()(this,t),E()(this,_()(t).apply(this,arguments))}return S()(t,e),b()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("insights"),this.appNav=insights.chrome.on("APP_NAVIGATION",function(t){Object(k.j)(location.href,{path:"".concat(document.baseURI,"insights/").concat(t.navId)})||e.props.history.push("/".concat(t.navId))})}},{key:"componentDidUpdate",value:function(e){this.props!==e&&("rules"===location.href.slice(location.href.indexOf("insights/")).split("/")[1]&&insights.chrome.appNavClick({id:"rules"}))}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return a.a.createElement(U,{childProps:this.props})}}]),t}(o.Component));q.propTypes={location:j.a.object,history:j.a.object};var J=I()(Object(l.connect)(null,null)(q));var G=function(e){var t="/",n=e.split("/");return n.shift(),"beta"===n[0]&&(n.shift(),t="/beta/"),"".concat(t).concat(n[0])};i.a.render(a.a.createElement(l.Provider,{store:function(){for(var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.b,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(r=Object(p.getRegistry)({},[].concat(n,[u.a,Object(f.notificationsMiddleware)({errorDescriptionKey:"response.data"})]),e)).register({AdvisorStore:h.a}),r.register({notifications:f.notifications}),r}().getStore()},a.a.createElement(s.BrowserRouter,{basename:G(window.location.pathname)},a.a.createElement(a.a.Fragment,null,a.a.createElement(f.NotificationsPortal,null),a.a.createElement(J,null)))),document.getElementById("root"))}});