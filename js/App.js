!function(e){function t(t){for(var r,o,a=t[0],i=t[1],s=t[2],c=0,l=[];c<a.length;c++)o=a[c],Object.prototype.hasOwnProperty.call(P,o)&&P[o]&&l.push(P[o][0]),P[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(x&&x(t);l.length;)l.shift()();return F.push.apply(F,s||[]),n()}function n(){for(var e,t=0;t<F.length;t++){for(var n=F[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==P[a]&&(r=!1)}r&&(F.splice(t--,1),e=j(j.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!S[e]||!E[e])return;for(var n in E[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0==--b&&0===g&&k()}(e,t),r&&r(e,t)};var o,a=!0,i="88e9041b147989410c96",s=1e4,c={},l=[],u=[];function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:D,apply:I,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:c[e]};return o=void 0,t}var p=[],f="idle";function h(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var m,y,v,b=0,g=0,w={},E={},S={};function _(e){return+e+""===e?+e:e}function D(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,h("check"),(t=s,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=j.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return h("idle"),null;E={},w={},S=e.c,v=e.h,h("prepare");var t=new Promise((function(e,t){m={resolve:e,reject:t}}));for(var n in y={},P)O(n);return"prepare"===f&&0===g&&0===b&&k(),t}));var t}function O(e){S[e]?(E[e]=!0,b++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=j.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):w[e]=!0}function k(){h("ready");var e=m;if(m=null,e)if(a)Promise.resolve().then((function(){return I(a)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(_(n));e.resolve(t)}}function I(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,o,a,s;function u(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),i=o.id,s=o.chain;if((a=T[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var c=0;c<a.parents.length;c++){var l=a.parents[c],u=T[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),d(n[l],[i])):(delete n[l],t.push(l),r.push({chain:s.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},m=[],b={},g=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var w in y)if(Object.prototype.hasOwnProperty.call(y,w)){var E;s=_(w);var D=!1,O=!1,k=!1,I="";switch((E=y[w]?u(s):{type:"disposed",moduleId:w}).chain&&(I="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(D=new Error("Aborted because of self decline: "+E.moduleId+I));break;case"declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+I));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(E),t.ignoreUnaccepted||(D=new Error("Aborted because "+s+" is not accepted"+I));break;case"accepted":t.onAccepted&&t.onAccepted(E),O=!0;break;case"disposed":t.onDisposed&&t.onDisposed(E),k=!0;break;default:throw new Error("Unexception type "+E.type)}if(D)return h("abort"),Promise.reject(D);if(O)for(s in b[s]=y[s],d(m,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,s)&&(p[s]||(p[s]=[]),d(p[s],E.outdatedDependencies[s]));k&&(d(m,[E.moduleId]),b[s]=g)}var F,L=[];for(r=0;r<m.length;r++)s=m[r],T[s]&&T[s].hot._selfAccepted&&b[s]!==g&&L.push({module:s,errorHandler:T[s].hot._selfAccepted});h("dispose"),Object.keys(S).forEach((function(e){!1===S[e]&&function(e){delete P[e]}(e)}));for(var R,C,x=m.slice();x.length>0;)if(s=x.pop(),a=T[s]){var A={},N=a.hot._disposeHandlers;for(o=0;o<N.length;o++)(n=N[o])(A);for(c[s]=A,a.hot.active=!1,delete T[s],delete p[s],o=0;o<a.children.length;o++){var H=T[a.children[o]];H&&((F=H.parents.indexOf(s))>=0&&H.parents.splice(F,1))}}for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(a=T[s]))for(C=p[s],o=0;o<C.length;o++)R=C[o],(F=a.children.indexOf(R))>=0&&a.children.splice(F,1);for(s in h("apply"),i=v,b)Object.prototype.hasOwnProperty.call(b,s)&&(e[s]=b[s]);var M=null;for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(a=T[s])){C=p[s];var U=[];for(r=0;r<C.length;r++)if(R=C[r],n=a.hot._acceptedDependencies[R]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(C)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:C[r],error:e}),t.ignoreErrored||M||(M=e)}}}for(r=0;r<L.length;r++){var G=L[r];s=G.module,l=[s];try{j(s)}catch(e){if("function"==typeof G.errorHandler)try{G.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),t.ignoreErrored||M||(M=n),M||(M=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||M||(M=e)}}return M?(h("fail"),Promise.reject(M)):(h("idle"),new Promise((function(e){e(m)})))}var T={},P={4:0},F=[];function j(t){if(T[t])return T[t].exports;var n=T[t]={i:t,l:!1,exports:{},hot:d(t),parents:(u=l,l=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=T[e];if(!t)return j;var n=function(n){return t.hot.active?(T[n]?-1===T[n].parents.indexOf(e)&&T[n].parents.push(e):(l=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),j(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return j[e]},set:function(t){j[e]=t}}};for(var a in j)Object.prototype.hasOwnProperty.call(j,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===f&&h("prepare"),g++,j.e(e).then(t,(function(e){throw t(),e}));function t(){g--,"prepare"===f&&(w[e]||O(e),0===g&&0===b&&k())}},n.t=function(e,t){return 1&t&&(e=n(e)),j.t(e,-2&t)},n}(t)),n.l=!0,n.exports}j.e=function(e){var t=[],n=P[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=P[e]=[t,r]}));t.push(n[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,j.nc&&a.setAttribute("nonce",j.nc),a.src=function(e){return j.p+"js/"+({0:"Details~InventoryDetails~ListRules~Overview~TopicDetails~TopicsList",1:"Details~ListRules~TopicDetails",2:"ListRules~TopicDetails",5:"Details",6:"InventoryDetails",7:"ListRules",8:"Overview",9:"Rules",10:"TopicDetails",11:"Topics",12:"TopicsList"}[e]||e)+".js"}(e);var i=new Error;o=function(t){a.onerror=a.onload=null,clearTimeout(s);var n=P[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,n[1](i)}P[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},j.m=e,j.c=T,j.d=function(e,t,n){j.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},j.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},j.t=function(e,t){if(1&t&&(e=j(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(j.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)j.d(n,r,function(t){return e[t]}.bind(null,r));return n},j.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return j.d(t,"a",t),t},j.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},j.p="/apps/insights/",j.oe=function(e){throw console.error(e),e},j.h=function(){return i};var L=window.webpackJsonp=window.webpackJsonp||[],R=L.push.bind(L);L.push=t,L=L.slice();for(var C=0;C<L.length;C++)t(L[C]);var x=R;F.push([526,13]),n()}({115:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n(159),o=n.n(r),a=n(272),i=n.n(a),s=n(109),c=n.n(s),l=n(110),u=n.n(l),d=n(111),p=n.n(d),f=n(112),h=n.n(f),m=n(113),y=n.n(m),v=n(2),b=n.n(v);function g(e){return function(t){function n(e){var t;return c()(this,n),(t=p()(this,h()(n).call(this,e))).state={component:null},t}var r;return y()(n,t),u()(n,[{key:"componentDidMount",value:(r=i()(o.a.mark((function t(){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?b.a.createElement(e,this.props):null}}]),n}(v.Component)}},20:function(e,t,n){"use strict";n.d(t,"l",(function(){return r})),n.d(t,"i",(function(){return o})),n.d(t,"s",(function(){return a})),n.d(t,"r",(function(){return i})),n.d(t,"n",(function(){return s})),n.d(t,"p",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"w",(function(){return d})),n.d(t,"u",(function(){return p})),n.d(t,"a",(function(){return f})),n.d(t,"j",(function(){return h})),n.d(t,"o",(function(){return m})),n.d(t,"q",(function(){return y})),n.d(t,"v",(function(){return v})),n.d(t,"t",(function(){return b})),n.d(t,"k",(function(){return g})),n.d(t,"m",(function(){return w})),n.d(t,"d",(function(){return E})),n.d(t,"g",(function(){return S})),n.d(t,"e",(function(){return _})),n.d(t,"f",(function(){return D})),n.d(t,"h",(function(){return O})),n.d(t,"x",(function(){return k}));var r="RULE_FETCH",o="RULES_FETCH",a="SYSTEM_FETCH",i="SYSTEMTYPE_FETCH",s="STATS_RULES_FETCH",c="STATS_SYSTEMS_FETCH",l="BREADCRUMBS_SET",u="FILTERS_SET",d="TOPIC_FETCH",p="TOPICS_FETCH",f="/api/insights/v1",h="".concat(f,"/rule/"),m="".concat(f,"/stats/rules/"),y="".concat(f,"/stats/systems/"),v="".concat(f,"/topic/"),b={rhel:105,ocp:325},g={availability:1,security:2,stability:3,performance:4},w={"critical-risk":4,"high-risk":3,"medium-risk":2,"low-risk":1},E=[{type:"checkbox",title:"Total Risk",urlParam:"total_risk",values:[{label:"Critical",value:"4"},{label:"Important",value:"3"},{label:"Moderate",value:"2"},{label:"Low",value:"1"}]},{type:"checkbox",title:"Risk of Change",urlParam:"res_risk",values:[{label:"High",value:"4"},{label:"Moderate",value:"3"},{label:"Low",value:"2"},{label:"Very Low",value:"1"}]},{type:"checkbox",title:"Impact",urlParam:"impact",values:[{label:"Critical",value:"4"},{label:"Important",value:"3"},{label:"Moderate",value:"2"},{label:"Low",value:"1"}]},{type:"checkbox",title:"Likelihood",urlParam:"likelihood",values:[{label:"Critical",value:"4"},{label:"Important",value:"3"},{label:"Moderate",value:"2"},{label:"Low",value:"1"}]},{type:"checkbox",title:"Category",urlParam:"category",values:[{label:"Availability",value:"".concat(g.availability)},{label:"Performance",value:"".concat(g.performance)},{label:"Stability",value:"".concat(g.stability)},{label:"Security",value:"".concat(g.security)}]},{type:"radio",title:"Rule Status",urlParam:"reports_shown",values:[{label:"All",value:void 0},{label:"Enabled",value:!0},{label:"Disabled",value:!1}]}],S={1:"The change takes very little time to implement and there is minimal impact to system operations.",2:"Typically, these changes do not require that a system be taken offline.",3:"These will likely require an outage window.",4:"The change takes a significant amount of time and planning to execute, and will impact the system and business operations of the host due to downtime."},_={1:"Low",2:"Moderate",3:"Important",4:"Critical"},D={1:"Low",2:"Moderate",3:"Important",4:"Critical"},O={1:"Very Low",2:"Low",3:"Moderate",4:"High"},k={1:"Low",2:"Moderate",3:"Important",4:"Critical"}},258:function(e,t,n){(t=e.exports=n(4)(!1)).i(n(524),""),t.i(n(525),""),t.push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n",""])},320:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return h}));var r=n(158),o=n.n(r),a=n(58),i=n.n(a),s=n(20),c=n(355),l=n(356),u=n.n(l);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var p=i()({rule:{},ruleFetchStatus:"",rules:{},rulesFetchStatus:"",statsRules:{},statsRulesFetchStatus:"",statsSystems:{},statsSystemsFetchStatus:"",system:{},systemFetchStatus:"",systemtype:{},systemtypeFetchStatus:"",breadcrumbs:[],filters:{impacting:!0,reports_shown:!0},topic:{},topicFetchStatus:"",topics:[],topicsFetchStatus:""}),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(s.l,"_PENDING"):return e.set("ruleFetchStatus","pending");case"".concat(s.l,"_FULFILLED"):return i.a.merge(e,{rule:t.payload,ruleFetchStatus:"fulfilled"});case"".concat(s.l,"_REJECTED"):return e.set("ruleFetchStatus","rejected");case"".concat(s.i,"_PENDING"):return e.set("rulesFetchStatus","pending");case"".concat(s.i,"_FULFILLED"):return i.a.merge(e,{rules:t.payload,rulesFetchStatus:"fulfilled"});case"".concat(s.i,"_REJECTED"):return e.set("rulesFetchStatus","rejected");case"".concat(s.n,"_PENDING"):return e.set("statsRulesFetchStatus","pending");case"".concat(s.n,"_FULFILLED"):return i.a.merge(e,{statsRules:t.payload,statsRulesFetchStatus:"fulfilled"});case"".concat(s.n,"_REJECTED"):return e.set("statsRulesFetchStatus","rejected");case"".concat(s.p,"_PENDING"):return e.set("statsSystemsFetchStatus","pending");case"".concat(s.p,"_FULFILLED"):return i.a.merge(e,{statsSystems:t.payload,statsSystemsFetchStatus:"fulfilled"});case"".concat(s.p,"_REJECTED"):return e.set("statsSystemsFetchStatus","rejected");case"".concat(s.s,"_PENDING"):return e.set("systemFetchStatus","pending");case"".concat(s.s,"_FULFILLED"):return i.a.merge(e,{system:t.payload,systemFetchStatus:"fulfilled"});case"".concat(s.s,"_REJECTED"):return e.set("systemFetchStatus","rejected");case"".concat(s.r,"_PENDING"):return e.set("systemtypeFetchStatus","pending");case"".concat(s.r,"_FULFILLED"):return i.a.merge(e,{systemtype:t.payload,systemtypeFetchStatus:"fulfilled"});case"".concat(s.r,"_REJECTED"):return e.set("systemFetchStatus","rejected");case s.b:return i.a.merge(e,{breadcrumbs:t.payload});case s.c:return i.a.merge(e,{filters:t.payload});case"".concat(s.w,"_PENDING"):return e.set("topicFetchStatus","pending");case"".concat(s.w,"_FULFILLED"):return i.a.merge(e,{topic:t.payload,topicFetchStatus:"fulfilled"});case"".concat(s.w,"_REJECTED"):return e.set("topicFetchStatus","rejected");case"".concat(s.u,"_PENDING"):return e.set("topicsFetchStatus","pending");case"".concat(s.u,"_FULFILLED"):return i.a.merge(e,{topics:t.payload,topicsFetchStatus:"fulfilled"});case"".concat(s.u,"_REJECTED"):return e.set("topicsFetchStatus","rejected");default:return e}};function h(e){return Object(c.applyReducerHash)(o()({},"".concat(e.LOAD_ENTITY,"_FULFILLED"),m),{})}function m(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{loaded:!0,activeApps:[{title:"Insights",name:"insights",component:u.a}]})}},362:function(e){e.exports=JSON.parse('{"en":{"title.rules":"Rules","rulestable.columntitle.added":"Added","rulestable.columntitle.rule":"Rule","rulestable.columntitle.totalrisk":"Total Risk","rulestable.columntitle.systems":"Systems","rulestable.columntitle.ansible":"Ansible","rulestable.hidereports.errordisabling":"Disabling reports failed","rulestable.hidereports.errorenabling":"Enabling reports failed","rulestable.action.disablerule":"Disable Rule","rulestable.action.enablerule":"Enable Rule","rulestable.norulehits.title":"No rule hits","rulestable.norulehits.enabledrulesbody":"None of your connected systems are affected by enabled rules.","rulestable.norulehits.anyrulesbody":"None of your connected systems are affected by any known rules.","rulestable.norulehits.adddisabledbutton":"Include disabled rules","disabled":"Disabled","notapplicable":"N/A","rulestable.filter.inputtext":"Find a rule...","rulestable.action.exportjson":"Export as JSON","rulestable.action.exportcsv":"Export as CSV","rulestable.action.showrulehits":"Show rules with hits","rulestable.fetchrules.error":"There was an error fetching rules list.","loading":"Loading...","summarychart.nohits":"Your connected systems have no rule hits.","summarychart.item":"{numIssues} {name} affecting {affectedSystems} {affectedSystems, plural, one {system} other {systems}}","summarychart.itemnohits":"No {severity} hits.","overviewchart.nohits":"Your connected systems have no categorized rule hits.","overviewchart.totalhits":"Total Hits","filter.chips.clearall":"Clear filters","knowledgebasearticle":"Knowledgebase Article","riskofchange":"Risk of Change","rulesdetails.totalriskbody":"The <strong>likelihood</strong> that this will be a problem is\\n        {likelihood}. The <strong>impact</strong> of the problem would be\\n        {impact} if it occurred.","rulesdetails.riskofchangebody":"Clear filters","undefined":"Undefined","topiccard.learnmorelink":"Learn more","recommended":"Recommended","featured":"Featured","topiccard.systemsaffected":"{systems} {systems, plural, one {system} other {systems}} affected","overview":"Overview","overview.categorychart.title":"Rule hits by category","overview.severitychart.title":"Rule hits by severity","overview.actioncall.title":"Get started with Red Hat Insights","overview.connectsystems.title":"Connect your first systems","overview.connectsystems.body":"Connect at least 10 systems to get a better\\n        awareness of issues and optimizations\\n        identified across your infastructure","overview.connectsystems.action":"Learn how to connect a system to insights","overview.remediate.title":"Remediate Insights findings with Ansible","overview.remediate.body":"Easily generate an Ansible playbook to \\n        quickly and effectively remediate Insights findings","overview.remediate.action":"Get started with Insights and Ansible Playbooks","overview.deploy.title":"Deploy Insights at scale","overview.deploy.body":"Get more out of Insights with more systems.\\n        Quickly connect systems with <linkansible> Ansible </linkansible>\\n        or <linkpuppet> Puppet </linkpuppet>","overview.deploy.action":"Download Ansible Playbook","overview.actioncallnosystems.body":"With predictive analytics, avoid problems and unplanned <break> </break>\\n        downtime in your Red Hat environment. Red Hat Insights is <break> </break>\\n        included with your Red Hat Enterprise Linux subscription","overview.actioncallnosystems.action":"Get started","rulesdetails.publishdate":"Publish Date: {date}","affectedSystems":"Affected systems","readmore":"Read more","readless":"Read less","topicdetails.nodetails.title":"No details for topic","topicdetails.nodetails.body":"There exist no further details for this topic.","title.topics":"Topics","topicslist.notopics.title":"There was an issue fetching topics","topicslist.notopics.body":"Either no topics presently exist or there is an issue presenting them.","remediate":"Remediate","selectAll":"Select all ({items} items)","selectPage":"Select page ({items} items)","selectNone":"Select none (0 items)","topicRelatedToRule":"Topics related to this rule:"}}')},369:function(e,t,n){var r=n(258);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(5)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(258,(function(){var t=n(258);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)})),e.hot.dispose((function(){a()}))},476:function(e,t){},494:function(e,t){},495:function(e,t){},496:function(e,t){},511:function(e,t){},526:function(e,t,n){"use strict";n.r(t);var r,o=n(2),a=n.n(o),i=n(24),s=n.n(i),c=n(86),l=n(79),u=n(350),d=n(118),p=n(274),f=n(91),h=n(320);var m=n(109),y=n.n(m),v=n(110),b=n.n(v),g=n(111),w=n.n(g),E=n(112),S=n.n(E),_=n(113),D=n.n(_),O=n(1),k=n.n(O),I=n(271),T=n.n(I),P=n(78),F=n(359),j=n.n(F),L=n(360),R=n.n(L),C=n(115),x=Object(C.a)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,1058))})),A=Object(C.a)((function(){return n.e(9).then(n.bind(null,1059))})),N=Object(C.a)((function(){return n.e(11).then(n.bind(null,1060))})),H="/overview",M="/rules",U="/topics",G=function(e){var t=e.component,n=e.rootClass,r=R()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.setAttribute("role","main"),a.a.createElement(P.d,j()({},r,{component:t}))};G.propTypes={component:k.a.func,rootClass:k.a.string};var J=function(){return a.a.createElement(P.g,null,a.a.createElement(G,{path:H,component:x,rootClass:"overview/"}),a.a.createElement(G,{path:M,component:A,rootClass:"rules"}),a.a.createElement(G,{path:U,component:N,rootClass:"topics"}),a.a.createElement(P.c,{path:"*",to:"".concat(H),push:!0}))},q=(n(369),function(e){function t(){return y()(this,t),w()(this,S()(t).apply(this,arguments))}return D()(t,e),b()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("insights"),this.appNav=insights.chrome.on("APP_NAVIGATION",(function(t){t.domEvent&&e.props.history.push("/".concat(t.navId)),-1!==location.pathname.indexOf(t.navId)||Object(P.j)(location.href,{path:"".concat(document.baseURI,"insights/").concat(t.navId)})||e.props.history.push("/".concat(t.navId))}))}},{key:"componentDidUpdate",value:function(e){if(this.props!==e){var t=location.pathname.slice(location.pathname.indexOf("insights/")).split("/")[1],n={topics:function(){insights.chrome.appNavClick({id:"topics"})},rules:function(){insights.chrome.appNavClick({id:"rules"})}};n[t]&&n[t]()}}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return a.a.createElement(J,{childProps:this.props})}}]),t}(o.Component));q.propTypes={location:k.a.object,history:k.a.object};var Y=T()(Object(l.connect)(null,null)(q));var B=function(e){var t="/",n=e.split("/");return n.shift(),"beta"===n[0]&&(n.shift(),t="/beta/"),"".concat(t).concat(n[0])},V=n(361),X=n(362);s.a.render(a.a.createElement(V.IntlProvider,{locale:navigator.language,messages:X,onError:console.log},a.a.createElement(l.Provider,{store:function(){for(var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.b,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(r=Object(p.getRegistry)({},[].concat(n,[u.a,Object(f.notificationsMiddleware)({errorTitleKey:["message"],errorDescriptionKey:["response.data.detail"]})]),e)).register({AdvisorStore:h.a}),r.register({notifications:f.notifications}),r}().getStore()},a.a.createElement(c.BrowserRouter,{basename:B(window.location.pathname)},a.a.createElement(a.a.Fragment,null,a.a.createElement(f.NotificationsPortal,null),a.a.createElement(Y,null))))),document.getElementById("root"))}});