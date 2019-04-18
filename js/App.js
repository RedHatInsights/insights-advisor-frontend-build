!function(e){function t(t){for(var r,o,a=t[0],i=t[1],c=t[2],s=0,l=[];s<a.length;s++)o=a[s],F[o]&&l.push(F[o][0]),F[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(H&&H(t);l.length;)l.shift()();return I.push.apply(I,c||[]),n()}function n(){for(var e,t=0;t<I.length;t++){for(var n=I[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==F[a]&&(r=!1)}r&&(I.splice(t--,1),e=P(P.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!_[e]||!w[e])return;for(var n in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--g&&0===b&&C()}(e,t),r&&r(e,t)};var o,a=!0,i="d4e0b38ec49319076c71",c=1e4,s={},l=[],u=[];function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:D,apply:O,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:s[e]};return o=void 0,t}var p=[],f="idle";function h(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var v,m,y,g=0,b=0,E={},w={},_={};function S(e){return+e+""===e?+e:e}function D(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,h("check"),(t=c,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=P.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return h("idle"),null;w={},E={},_=e.c,y=e.h,h("prepare");var t=new Promise(function(e,t){v={resolve:e,reject:t}});for(var n in m={},F)L(n);return"prepare"===f&&0===b&&0===g&&C(),t});var t}function L(e){_[e]?(w[e]=!0,g++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=P.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):E[e]=!0}function C(){h("ready");var e=v;if(v=null,e)if(a)Promise.resolve().then(function(){return O(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(S(n));e.resolve(t)}}function O(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,o,a,c;function u(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=j[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var s=0;s<a.parents.length;s++){var l=a.parents[s],u=j[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),d(n[l],[i])):(delete n[l],t.push(l),r.push({chain:c.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},v=[],g={},b=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var E in m)if(Object.prototype.hasOwnProperty.call(m,E)){var w;c=S(E);var D=!1,L=!1,C=!1,O="";switch((w=m[E]?u(c):{type:"disposed",moduleId:E}).chain&&(O="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(D=new Error("Aborted because of self decline: "+w.moduleId+O));break;case"declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+O));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(w),t.ignoreUnaccepted||(D=new Error("Aborted because "+c+" is not accepted"+O));break;case"accepted":t.onAccepted&&t.onAccepted(w),L=!0;break;case"disposed":t.onDisposed&&t.onDisposed(w),C=!0;break;default:throw new Error("Unexception type "+w.type)}if(D)return h("abort"),Promise.reject(D);if(L)for(c in g[c]=m[c],d(v,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,c)&&(p[c]||(p[c]=[]),d(p[c],w.outdatedDependencies[c]));C&&(d(v,[w.moduleId]),g[c]=b)}var I,T=[];for(r=0;r<v.length;r++)c=v[r],j[c]&&j[c].hot._selfAccepted&&T.push({module:c,errorHandler:j[c].hot._selfAccepted});h("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete F[e]}(e)});for(var k,x,H=v.slice();H.length>0;)if(c=H.pop(),a=j[c]){var R={},M=a.hot._disposeHandlers;for(o=0;o<M.length;o++)(n=M[o])(R);for(s[c]=R,a.hot.active=!1,delete j[c],delete p[c],o=0;o<a.children.length;o++){var A=j[a.children[o]];A&&((I=A.parents.indexOf(c))>=0&&A.parents.splice(I,1))}}for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(a=j[c]))for(x=p[c],o=0;o<x.length;o++)k=x[o],(I=a.children.indexOf(k))>=0&&a.children.splice(I,1);for(c in h("apply"),i=y,g)Object.prototype.hasOwnProperty.call(g,c)&&(e[c]=g[c]);var N=null;for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(a=j[c])){x=p[c];var U=[];for(r=0;r<x.length;r++)if(k=x[r],n=a.hot._acceptedDependencies[k]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(x)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:x[r],error:e}),t.ignoreErrored||N||(N=e)}}}for(r=0;r<T.length;r++){var q=T[r];c=q.module,l=[c];try{P(c)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||N||(N=n),N||(N=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||N||(N=e)}}return N?(h("fail"),Promise.reject(N)):(h("idle"),new Promise(function(e){e(v)}))}var j={},F={5:0},I=[];function P(t){if(j[t])return j[t].exports;var n=j[t]={i:t,l:!1,exports:{},hot:d(t),parents:(u=l,l=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=j[e];if(!t)return P;var n=function(n){return t.hot.active?(j[n]?-1===j[n].parents.indexOf(e)&&j[n].parents.push(e):(l=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),P(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(t){P[e]=t}}};for(var a in P)Object.prototype.hasOwnProperty.call(P,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===f&&h("prepare"),b++,P.e(e).then(t,function(e){throw t(),e});function t(){b--,"prepare"===f&&(E[e]||L(e),0===b&&0===g&&C())}},n.t=function(e,t){return 1&t&&(e=n(e)),P.t(e,-2&t)},n}(t)),n.l=!0,n.exports}P.e=function(e){var t=[],n=F[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=F[e]=[t,r]});t.push(n[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,P.nc&&a.setAttribute("nonce",P.nc),a.src=function(e){return P.p+"js/"+({1:"Details~InventoryDetails~ListRules~Lists",2:"Details~InventoryDetails~Lists",3:"Details~ListRules~Lists",4:"ListRules~Overview",6:"Details",7:"InventoryDetails",8:"ListRules",9:"Lists",10:"Overview",11:"Rules"}[e]||e)+".js"}(e),o=function(t){a.onerror=a.onload=null,clearTimeout(i);var n=F[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");c.type=r,c.request=o,n[1](c)}F[e]=void 0}};var i=setTimeout(function(){o({type:"timeout",target:a})},12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},P.m=e,P.c=j,P.d=function(e,t,n){P.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},P.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.t=function(e,t){if(1&t&&(e=P(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(P.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)P.d(n,r,function(t){return e[t]}.bind(null,r));return n},P.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(t,"a",t),t},P.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},P.p="/apps/insights/",P.oe=function(e){throw console.error(e),e},P.h=function(){return i};var T=window.webpackJsonp=window.webpackJsonp||[],k=T.push.bind(T);T.push=t,T=T.slice();for(var x=0;x<T.length;x++)t(T[x]);var H=k;I.push([156,12]),n()}({106:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"b",function(){return h});var r=n(75),o=n.n(r),a=n(69),i=n.n(a),c=n(25),s=n.n(c),l=n(15),u=n(119),d=n(32),p=s()({rule:{},ruleFetchStatus:"",rules:{},rulesFetchStatus:"",statsRules:{},statsRulesFetchStatus:"",statsSystems:{},statsSystemsFetchStatus:"",system:{},systemFetchStatus:"",systemtype:{},systemtypeFetchStatus:"",breadcrumbs:[],filters:{}}),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(l.m,"_PENDING"):return e.set("ruleFetchStatus","pending");case"".concat(l.m,"_FULFILLED"):return s.a.merge(e,{rule:t.payload,ruleFetchStatus:"fulfilled"});case"".concat(l.m,"_REJECTED"):return e.set("ruleFetchStatus","rejected");case"".concat(l.j,"_PENDING"):return e.set("rulesFetchStatus","pending");case"".concat(l.j,"_FULFILLED"):return s.a.merge(e,{rules:t.payload,rulesFetchStatus:"fulfilled"});case"".concat(l.j,"_REJECTED"):return e.set("rulesFetchStatus","rejected");case"".concat(l.o,"_PENDING"):return e.set("statsRulesFetchStatus","pending");case"".concat(l.o,"_FULFILLED"):return s.a.merge(e,{statsRules:t.payload,statsRulesFetchStatus:"fulfilled"});case"".concat(l.o,"_REJECTED"):return e.set("statsRulesFetchStatus","rejected");case"".concat(l.q,"_PENDING"):return e.set("statsSystemsFetchStatus","pending");case"".concat(l.q,"_FULFILLED"):return s.a.merge(e,{statsSystems:t.payload,statsSystemsFetchStatus:"fulfilled"});case"".concat(l.q,"_REJECTED"):return e.set("statsSystemsFetchStatus","rejected");case"".concat(l.t,"_PENDING"):return e.set("systemFetchStatus","pending");case"".concat(l.t,"_FULFILLED"):return s.a.merge(e,{system:t.payload,systemFetchStatus:"fulfilled"});case"".concat(l.t,"_REJECTED"):return e.set("systemFetchStatus","rejected");case"".concat(l.s,"_PENDING"):return e.set("systemtypeFetchStatus","pending");case"".concat(l.s,"_FULFILLED"):return s.a.merge(e,{systemtype:t.payload,systemtypeFetchStatus:"fulfilled"});case"".concat(l.s,"_REJECTED"):return e.set("systemFetchStatus","rejected");case l.c:return s.a.merge(e,{breadcrumbs:t.payload});case l.d:return s.a.merge(e,{filters:t.payload});default:return e}};function h(e){return Object(u.applyReducerHash)(i()({},"".concat(e.LOAD_ENTITY,"_FULFILLED"),v),{})}function v(e){return o()({},e,{loaded:!0,activeApps:[{title:"Insights",name:"insights",component:d.Advisor}]})}},129:function(e,t,n){var r=n(73);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(124)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(73,function(){var t=n(73);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)}),e.hot.dispose(function(){a()})},15:function(e,t,n){"use strict";n.d(t,"m",function(){return a}),n.d(t,"j",function(){return i}),n.d(t,"t",function(){return c}),n.d(t,"s",function(){return s}),n.d(t,"o",function(){return l}),n.d(t,"q",function(){return u}),n.d(t,"c",function(){return d}),n.d(t,"d",function(){return p}),n.d(t,"b",function(){return f}),n.d(t,"k",function(){return h}),n.d(t,"p",function(){return v}),n.d(t,"r",function(){return m}),n.d(t,"u",function(){return y}),n.d(t,"l",function(){return g}),n.d(t,"n",function(){return b}),n.d(t,"e",function(){return E}),n.d(t,"h",function(){return w}),n.d(t,"f",function(){return _}),n.d(t,"g",function(){return S}),n.d(t,"i",function(){return D}),n.d(t,"v",function(){return L}),n.d(t,"a",function(){return C});var r=n(2),o=n.n(r),a="RULE_FETCH",i="RULES_FETCH",c="SYSTEM_FETCH",s="SYSTEMTYPE_FETCH",l="STATS_RULES_FETCH",u="STATS_SYSTEMS_FETCH",d="BREADCRUMBS_SET",p="FILTERS_SET",f="/api/insights/v1",h="".concat(f,"/rule/"),v="".concat(f,"/stats/rules/"),m="".concat(f,"/stats/systems/"),y={rhel:105,ocp:325},g={availability:1,security:2,stability:3,performance:4},b={"critical-risk":4,"high-risk":3,"medium-risk":2,"low-risk":1},E=[{type:"checkbox",title:"Total Risk",urlParam:"total_risk",values:[{label:"Critical",value:"4"},{label:"High",value:"3"},{label:"Medium",value:"2"},{label:"Low",value:"1"}]},{type:"checkbox",title:"Impact",urlParam:"impact",values:[{label:"Critical",value:"4"},{label:"High",value:"3"},{label:"Medium",value:"2"},{label:"Low",value:"1"}]},{type:"checkbox",title:"Likelihood",urlParam:"likelihood",values:[{label:"Critical",value:"4"},{label:"High",value:"3"},{label:"Medium",value:"2"},{label:"Low",value:"1"}]},{type:"checkbox",title:"Category",urlParam:"category",values:[{label:"Availability",value:"".concat(g.availability)},{label:"Performance",value:"".concat(g.performance)},{label:"Stability",value:"".concat(g.stability)},{label:"Security",value:"".concat(g.security)}]},{type:"radio",title:"Rule Status",urlParam:"reports_shown",values:[{label:"All",value:void 0},{label:"Enabled",value:!0},{label:"Disabled",value:!1}]}],w={1:"The change takes very little time to implement and there is minimal impact to system operations.",2:"Typically, these changes do not require that a system be taken offline.",3:"These will likely require an outage window.",4:"The change takes a significant amount of time and planning to execute, and will impact the system and business operations of the host due to downtime."},_={1:"Low",2:"Medium",3:"High",4:"Critical"},S={1:"Low",2:"Medium",3:"High",4:"Critical"},D={1:"Low",2:"Moderate",3:"Moderate",4:"High"},L={1:"Very Low",2:"Low",3:"Moderate",4:"High"},C=o.a.createElement("svg",{version:"1.1",id:"Layer_1",width:"18px",height:"18px",viewBox:"0 0 18 18"},o.a.createElement("path",{d:"M7.965,8.47125 L11.480625,11.25 L9.1575,5.50125 L7.965,8.47125 Z M12.6894375,13.483125 C12.605625,13.483125 12.5263125,13.46625 12.4531875,13.4325 C12.380625,13.39875 12.2900625,13.336875 12.200625,13.258125 L7.56,9.511875 L5.99625,13.415625 L4.6575,13.415625 L8.578125,3.96 C8.634375,3.830625 8.713125,3.735 8.814375,3.6675 C8.915625,3.605625 9.028125,3.571875 9.1575,3.571875 C9.275625,3.571875 9.3825,3.605625 9.48375,3.6675 C9.585,3.729375 9.658125,3.830625 9.703125,3.96 L13.291875,12.571875 C13.314375,12.628125 13.33125,12.684375 13.336875,12.729375 C13.3425,12.774375 13.348125,12.81375 13.348125,12.83625 C13.348125,13.021875 13.28625,13.179375 13.1563125,13.303125 C13.0275,13.426875 12.87,13.483125 12.6894375,13.483125 L12.6894375,13.483125 Z M9,0 C7.756875,0 6.586875,0.23625 5.495625,0.703125 C4.404375,1.17 3.4425,1.81125 2.626875,2.626875 C1.81125,3.4425 1.17,4.39875 0.703125,5.495625 C0.23625,6.5925 0,7.756875 0,9 C0,10.243125 0.23625,11.413125 0.703125,12.504375 C1.17,13.595625 1.81125,14.5575 2.626875,15.3675 C3.4425,16.1825625 4.39875,16.824375 5.49,17.29125 C6.58125,17.758125 7.756875,18 9,18 C10.243125,18 11.413125,17.76375 12.504375,17.296875 C13.595625,16.83 14.5575,16.18875 15.3675,15.373125 C16.1825625,14.5575 16.824375,13.60125 17.29125,12.51 C17.758125,11.41875 18,10.243125 18,9 C18,7.756875 17.76375,6.586875 17.296875,5.495625 C16.83,4.404375 16.18875,3.4425 15.373125,2.6325 C14.5575,1.816875 13.60125,1.175625 12.51,0.70875 C11.41875,0.241875 10.243125,0 9,0 L9,0 Z",className:"st0"}))},156:function(e,t,n){"use strict";n.r(t);var r,o=n(2),a=n.n(o),i=n(12),c=n.n(i),s=n(104),l=n(53),u=n(115),d=n(56),p=n(32),f=n(42),h=n(106);var v=n(47),m=n.n(v),y=n(48),g=n.n(y),b=n(49),E=n.n(b),w=n(50),_=n.n(w),S=n(51),D=n.n(S),L=n(1),C=n.n(L),O=n(105),j=n(120),F=n.n(j),I=n(121),P=n.n(I),T=n(62),k=n(111),x=n(113),H=n(71),R=Object(H.a)(function(){return Promise.all([n.e(4),n.e(10)]).then(n.bind(null,965))}),M=Object(H.a)(function(){return n.e(11).then(n.bind(null,966))}),A="/overview",N="/rules",U=function(e){var t=e.component,n=e.rootClass,r=P()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.setAttribute("role","main"),a.a.createElement(T.a,F()({},r,{component:t}))};U.propTypes={component:C.a.func,rootClass:C.a.string};var q=function(){return a.a.createElement(k.a,null,a.a.createElement(U,{path:A,component:R,rootClass:"overview/"}),a.a.createElement(U,{path:N,component:M,rootClass:"rules"}),a.a.createElement(x.a,{path:"*",to:"".concat(A),push:!0}))},J=(n(129),function(e){function t(){return m()(this,t),E()(this,_()(t).apply(this,arguments))}return D()(t,e),g()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("insights"),this.appNav=insights.chrome.on("APP_NAVIGATION",function(t){Object(O.a)(location.href,{path:"".concat(document.baseURI,"insights/").concat(t.navId)})||e.props.history.push("/".concat(t.navId))})}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return a.a.createElement(q,{childProps:this.props})}}]),t}(o.Component));J.propTypes={history:C.a.object};var G=Object(p.routerParams)(Object(l.b)(null,null)(J));var B=function(e){var t="/",n=e.split("/");return n.shift(),"beta"===n[0]&&(n.shift(),t="/beta/"),"".concat(t).concat(n[0])};c.a.render(a.a.createElement(l.a,{store:function(){for(var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.b,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(r=Object(p.getRegistry)({},[].concat(n,[u.a,Object(f.notificationsMiddleware)({errorDescriptionKey:"response.data"})]),e)).register({AdvisorStore:h.a}),r.register({notifications:f.notifications}),r}().getStore()},a.a.createElement(s.a,{basename:B(window.location.pathname)},a.a.createElement(a.a.Fragment,null,a.a.createElement(f.NotificationsPortal,null),a.a.createElement(G,null)))),document.getElementById("root"))},71:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var r=n(70),o=n.n(r),a=n(76),i=n.n(a),c=n(47),s=n.n(c),l=n(48),u=n.n(l),d=n(49),p=n.n(d),f=n(50),h=n.n(f),v=n(51),m=n.n(v),y=n(2),g=n.n(y);function b(e){return function(t){function n(e){var t;return s()(this,n),(t=p()(this,h()(n).call(this,e))).state={component:null},t}return m()(n,t),u()(n,[{key:"componentDidMount",value:function(){var t=i()(o.a.mark(function t(){var n,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?g.a.createElement(e,this.props):null}}]),n}(y.Component)}},73:function(e,t,n){(t=e.exports=n(68)(!1)).i(n(152),""),t.i(n(153),""),t.push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n",""])}});
//# sourceMappingURL=../sourcemaps/App.js.map