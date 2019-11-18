!function(e){function t(t){for(var a,r,n=t[0],i=t[1],o=t[2],l=0,c=[];l<n.length;l++)r=n[l],Object.prototype.hasOwnProperty.call(I,r)&&I[r]&&c.push(I[r][0]),I[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(H&&H(t);c.length;)c.shift()();return _.push.apply(_,o||[]),s()}function s(){for(var e,t=0;t<_.length;t++){for(var s=_[t],a=!0,r=1;r<s.length;r++){var n=s[r];0!==I[n]&&(a=!1)}a&&(_.splice(t--,1),e=C(C.s=s[0]))}return e}var a=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!M[e]||!T[e])return;for(var s in T[e]=!1,t)Object.prototype.hasOwnProperty.call(t,s)&&(y[s]=t[s]);0==--g&&0===v&&O()}(e,t),a&&a(e,t)};var r,n=!0,i="84c6b2e40c487d97b052",o=1e4,l={},c=[],d=[];function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,s){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var a=0;a<e.length;a++)t._acceptedDependencies[e[a]]=s||function(){};else t._acceptedDependencies[e]=s||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var s=0;s<e.length;s++)t._declinedDependencies[e[s]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var s=t._disposeHandlers.indexOf(e);s>=0&&t._disposeHandlers.splice(s,1)},check:S,apply:D,status:function(e){if(!e)return p;f.push(e)},addStatusHandler:function(e){f.push(e)},removeStatusHandler:function(e){var t=f.indexOf(e);t>=0&&f.splice(t,1)},data:l[e]};return r=void 0,t}var f=[],p="idle";function h(e){p=e;for(var t=0;t<f.length;t++)f[t].call(null,e)}var m,y,b,g=0,v=0,w={},T={},M={};function E(e){return+e+""===e?+e:e}function S(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return n=e,h("check"),(t=o,t=t||1e4,new Promise((function(e,s){if("undefined"==typeof XMLHttpRequest)return s(new Error("No browser support"));try{var a=new XMLHttpRequest,r=C.p+""+i+".hot-update.json";a.open("GET",r,!0),a.timeout=t,a.send(null)}catch(e){return s(e)}a.onreadystatechange=function(){if(4===a.readyState)if(0===a.status)s(new Error("Manifest request to "+r+" timed out."));else if(404===a.status)e();else if(200!==a.status&&304!==a.status)s(new Error("Manifest request to "+r+" failed."));else{try{var t=JSON.parse(a.responseText)}catch(e){return void s(e)}e(t)}}}))).then((function(e){if(!e)return h("idle"),null;T={},w={},M=e.c,b=e.h,h("prepare");var t=new Promise((function(e,t){m={resolve:e,reject:t}}));for(var s in y={},I)k(s);return"prepare"===p&&0===v&&0===g&&O(),t}));var t}function k(e){M[e]?(T[e]=!0,g++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=C.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):w[e]=!0}function O(){h("ready");var e=m;if(m=null,e)if(n)Promise.resolve().then((function(){return D(n)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var s in y)Object.prototype.hasOwnProperty.call(y,s)&&t.push(E(s));e.resolve(t)}}function D(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var s,a,r,n,o;function d(e){for(var t=[e],s={},a=t.map((function(e){return{chain:[e],id:e}}));a.length>0;){var r=a.pop(),i=r.id,o=r.chain;if((n=R[i])&&!n.hot._selfAccepted){if(n.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:i};if(n.hot._main)return{type:"unaccepted",chain:o,moduleId:i};for(var l=0;l<n.parents.length;l++){var c=n.parents[l],d=R[c];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:o.concat([c]),moduleId:i,parentId:c};-1===t.indexOf(c)&&(d.hot._acceptedDependencies[i]?(s[c]||(s[c]=[]),u(s[c],[i])):(delete s[c],t.push(c),a.push({chain:o.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:s}}function u(e,t){for(var s=0;s<t.length;s++){var a=t[s];-1===e.indexOf(a)&&e.push(a)}}t=t||{};var f={},m=[],g={},v=function(){console.warn("[HMR] unexpected require("+T.moduleId+") to disposed module")};for(var w in y)if(Object.prototype.hasOwnProperty.call(y,w)){var T;o=E(w);var S=!1,k=!1,O=!1,D="";switch((T=y[w]?d(o):{type:"disposed",moduleId:w}).chain&&(D="\nUpdate propagation: "+T.chain.join(" -> ")),T.type){case"self-declined":t.onDeclined&&t.onDeclined(T),t.ignoreDeclined||(S=new Error("Aborted because of self decline: "+T.moduleId+D));break;case"declined":t.onDeclined&&t.onDeclined(T),t.ignoreDeclined||(S=new Error("Aborted because of declined dependency: "+T.moduleId+" in "+T.parentId+D));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(T),t.ignoreUnaccepted||(S=new Error("Aborted because "+o+" is not accepted"+D));break;case"accepted":t.onAccepted&&t.onAccepted(T),k=!0;break;case"disposed":t.onDisposed&&t.onDisposed(T),O=!0;break;default:throw new Error("Unexception type "+T.type)}if(S)return h("abort"),Promise.reject(S);if(k)for(o in g[o]=y[o],u(m,T.outdatedModules),T.outdatedDependencies)Object.prototype.hasOwnProperty.call(T.outdatedDependencies,o)&&(f[o]||(f[o]=[]),u(f[o],T.outdatedDependencies[o]));O&&(u(m,[T.moduleId]),g[o]=v)}var _,j=[];for(a=0;a<m.length;a++)o=m[a],R[o]&&R[o].hot._selfAccepted&&g[o]!==v&&j.push({module:o,errorHandler:R[o].hot._selfAccepted});h("dispose"),Object.keys(M).forEach((function(e){!1===M[e]&&function(e){delete I[e]}(e)}));for(var F,A,H=m.slice();H.length>0;)if(o=H.pop(),n=R[o]){var N={},L=n.hot._disposeHandlers;for(r=0;r<L.length;r++)(s=L[r])(N);for(l[o]=N,n.hot.active=!1,delete R[o],delete f[o],r=0;r<n.children.length;r++){var P=R[n.children[r]];P&&((_=P.parents.indexOf(o))>=0&&P.parents.splice(_,1))}}for(o in f)if(Object.prototype.hasOwnProperty.call(f,o)&&(n=R[o]))for(A=f[o],r=0;r<A.length;r++)F=A[r],(_=n.children.indexOf(F))>=0&&n.children.splice(_,1);for(o in h("apply"),i=b,g)Object.prototype.hasOwnProperty.call(g,o)&&(e[o]=g[o]);var x=null;for(o in f)if(Object.prototype.hasOwnProperty.call(f,o)&&(n=R[o])){A=f[o];var U=[];for(a=0;a<A.length;a++)if(F=A[a],s=n.hot._acceptedDependencies[F]){if(-1!==U.indexOf(s))continue;U.push(s)}for(a=0;a<U.length;a++){s=U[a];try{s(A)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:o,dependencyId:A[a],error:e}),t.ignoreErrored||x||(x=e)}}}for(a=0;a<j.length;a++){var J=j[a];o=J.module,c=[o];try{C(o)}catch(e){if("function"==typeof J.errorHandler)try{J.errorHandler(e)}catch(s){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:o,error:s,originalError:e}),t.ignoreErrored||x||(x=s),x||(x=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:o,error:e}),t.ignoreErrored||x||(x=e)}}return x?(h("fail"),Promise.reject(x)):(h("idle"),new Promise((function(e){e(m)})))}var R={},I={4:0},_=[];function C(t){if(R[t])return R[t].exports;var s=R[t]={i:t,l:!1,exports:{},hot:u(t),parents:(d=c,c=[],d),children:[]};return e[t].call(s.exports,s,s.exports,function(e){var t=R[e];if(!t)return C;var s=function(s){return t.hot.active?(R[s]?-1===R[s].parents.indexOf(e)&&R[s].parents.push(e):(c=[e],r=s),-1===t.children.indexOf(s)&&t.children.push(s)):(console.warn("[HMR] unexpected require("+s+") from disposed module "+e),c=[]),C(s)},a=function(e){return{configurable:!0,enumerable:!0,get:function(){return C[e]},set:function(t){C[e]=t}}};for(var n in C)Object.prototype.hasOwnProperty.call(C,n)&&"e"!==n&&"t"!==n&&Object.defineProperty(s,n,a(n));return s.e=function(e){return"ready"===p&&h("prepare"),v++,C.e(e).then(t,(function(e){throw t(),e}));function t(){v--,"prepare"===p&&(w[e]||k(e),0===v&&0===g&&O())}},s.t=function(e,t){return 1&t&&(e=s(e)),C.t(e,-2&t)},s}(t)),s.l=!0,s.exports}C.e=function(e){var t=[],s=I[e];if(0!==s)if(s)t.push(s[2]);else{var a=new Promise((function(t,a){s=I[e]=[t,a]}));t.push(s[2]=a);var r,n=document.createElement("script");n.charset="utf-8",n.timeout=120,C.nc&&n.setAttribute("nonce",C.nc),n.src=function(e){return C.p+"js/"+({0:"Details~InventoryDetails~Overview~RulesTAble~SystemsTable~TopicDetails~TopicsList",1:"Details~RulesTAble~TopicDetails",2:"RulesTAble~SystemsTable~TopicDetails",5:"Details",6:"InsightsTabs",7:"InventoryDetails",8:"Overview",9:"Rules",10:"RulesTAble",11:"SystemsTable",12:"TopicDetails",13:"Topics",14:"TopicsList"}[e]||e)+".js"}(e);var i=new Error;r=function(t){n.onerror=n.onload=null,clearTimeout(o);var s=I[e];if(0!==s){if(s){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",i.name="ChunkLoadError",i.type=a,i.request=r,s[1](i)}I[e]=void 0}};var o=setTimeout((function(){r({type:"timeout",target:n})}),12e4);n.onerror=n.onload=r,document.head.appendChild(n)}return Promise.all(t)},C.m=e,C.c=R,C.d=function(e,t,s){C.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},C.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},C.t=function(e,t){if(1&t&&(e=C(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(C.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)C.d(s,a,function(t){return e[t]}.bind(null,a));return s},C.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return C.d(t,"a",t),t},C.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},C.p="/beta/apps/insights/",C.oe=function(e){throw console.error(e),e},C.h=function(){return i};var j=window.webpackJsonp=window.webpackJsonp||[],F=j.push.bind(j);j.push=t,j=j.slice();for(var A=0;A<j.length;A++)t(j[A]);var H=F;_.push([510,15]),s()}({111:function(e,t,s){"use strict";s.d(t,"a",(function(){return v}));var a=s(165),r=s.n(a),n=s(273),i=s.n(n),o=s(106),l=s.n(o),c=s(107),d=s.n(c),u=s(108),f=s.n(u),p=s(109),h=s.n(p),m=s(110),y=s.n(m),b=s(2),g=s.n(b);function v(e){return function(t){function s(e){var t;return l()(this,s),(t=f()(this,h()(s).call(this,e))).state={component:null},t}var a;return y()(s,t),d()(s,[{key:"componentDidMount",value:(a=i()(r.a.mark((function t(){var s,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:s=t.sent,a=s.default,this.setState({component:a});case 5:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?g.a.createElement(e,this.props):null}}]),s}(b.Component)}},17:function(e,t,s){"use strict";s.d(t,"n",(function(){return u})),s.d(t,"h",(function(){return f})),s.d(t,"w",(function(){return p})),s.d(t,"v",(function(){return h})),s.d(t,"p",(function(){return m})),s.d(t,"r",(function(){return y})),s.d(t,"b",(function(){return b})),s.d(t,"A",(function(){return g})),s.d(t,"y",(function(){return v})),s.d(t,"t",(function(){return w})),s.d(t,"j",(function(){return T})),s.d(t,"l",(function(){return M})),s.d(t,"a",(function(){return E})),s.d(t,"i",(function(){return S})),s.d(t,"q",(function(){return k})),s.d(t,"s",(function(){return O})),s.d(t,"z",(function(){return D})),s.d(t,"u",(function(){return R})),s.d(t,"k",(function(){return I})),s.d(t,"x",(function(){return _})),s.d(t,"m",(function(){return C})),s.d(t,"o",(function(){return j})),s.d(t,"c",(function(){return F})),s.d(t,"f",(function(){return A})),s.d(t,"d",(function(){return H})),s.d(t,"e",(function(){return N})),s.d(t,"g",(function(){return L})),s.d(t,"B",(function(){return P}));var a=s(8),r=s(146),n=s(28),i=s(29),o=Object(a.d)(),l=navigator.language,c=Object(r.a)({onError:console.log,locale:l},o),d={locale:l},u="RULE_FETCH",f="RULES_FETCH",p="SYSTEM_FETCH",h="SYSTEMTYPE_FETCH",m="STATS_RULES_FETCH",y="STATS_SYSTEMS_FETCH",b="FILTERS_SET",g="TOPIC_FETCH",v="TOPICS_FETCH",w="SYSTEMS_FETCH",T="RULE_ACK_FETCH",M="RULE_ACK_SET",E="/api/insights/v1",S="".concat(E,"/rule/"),k="".concat(E,"/stats/rules/"),O="".concat(E,"/stats/systems/"),D="".concat(E,"/topic/"),R="".concat(E,"/system/"),I="".concat(E,"/ack/"),_={rhel:105,ocp:325},C={availability:1,security:2,stability:3,performance:4},j={"critical-risk":4,"high-risk":3,"medium-risk":2,"low-risk":1},F={total_risk:{type:"checkbox",title:"Total risk",urlParam:"total_risk",values:[{label:"Critical",value:"4"},{label:"Important",value:"3"},{label:"Moderate",value:"2"},{label:"Low",value:"1"}]},res_risk:{type:"checkbox",title:"Risk of change",urlParam:"res_risk",values:[{label:Object(n.intlHelper)(c.formatMessage(i.a.high),d),value:"4"},{label:"Moderate",value:"3"},{label:"Low",value:"2"},{label:"Very low",value:"1"}]},impact:{type:"checkbox",title:"Impact",urlParam:"impact",values:[{label:"Critical",value:"4"},{label:"Important",value:"3"},{label:"Moderate",value:"2"},{label:"Low",value:"1"}]},likelihood:{type:"checkbox",title:"Likelihood",urlParam:"likelihood",values:[{label:"Critical",value:"4"},{label:"Important",value:"3"},{label:"Moderate",value:"2"},{label:"Low",value:"1"}]},category:{type:"checkbox",title:"Category",urlParam:"category",values:[{label:"Availability",value:"".concat(C.availability)},{label:"Performance",value:"".concat(C.performance)},{label:"Stability",value:"".concat(C.stability)},{label:"Security",value:"".concat(C.security)}]},reports_shown:{type:"radio",title:"Rule status",urlParam:"reports_shown",values:[{label:"All",value:"undefined"},{label:"Enabled",value:"true"},{label:"Disabled",value:"false"}]}},A={1:Object(n.intlHelper)(c.formatMessage(i.a.riskOfChangeTextOne),d),2:Object(n.intlHelper)(c.formatMessage(i.a.riskOfChangeTextTwo),d),3:Object(n.intlHelper)(c.formatMessage(i.a.riskOfChangeTextThree),d),4:Object(n.intlHelper)(c.formatMessage(i.a.riskOfChangeTextFour),d)},H={1:Object(n.intlHelper)(c.formatMessage(i.a.low),d),2:Object(n.intlHelper)(c.formatMessage(i.a.moderate),d),3:Object(n.intlHelper)(c.formatMessage(i.a.important),d),4:Object(n.intlHelper)(c.formatMessage(i.a.critical),d)},N={1:Object(n.intlHelper)(c.formatMessage(i.a.low),d),2:Object(n.intlHelper)(c.formatMessage(i.a.moderate),d),3:Object(n.intlHelper)(c.formatMessage(i.a.important),d),4:Object(n.intlHelper)(c.formatMessage(i.a.critical),d)},L={1:Object(n.intlHelper)(c.formatMessage(i.a.veryLow),d),2:Object(n.intlHelper)(c.formatMessage(i.a.low),d),3:Object(n.intlHelper)(c.formatMessage(i.a.moderate),d),4:Object(n.intlHelper)(c.formatMessage(i.a.high),d)},P={1:"Low",2:"Moderate",3:"Important",4:"Critical"}},257:function(e,t,s){(t=e.exports=s(6)(!1)).i(s(508),""),t.i(s(509),""),t.push([e.i,":root{--ins-color--orange: #ec7a08}ul.navigation-secondary{margin-top:20px}ul.navigation-secondary li{cursor:pointer;font-size:15px;width:100%;box-shadow:none;padding:5px 0;color:#1d1d1d}ul.navigation-secondary li span{margin-left:50px}ul.navigation-secondary li:active,ul.navigation-secondary li.active{background:#f5f5f5;color:var(--pf-global--link--Color)}ul.navigation-secondary li:hover{color:var(--pf-global--link--Color)}\n",""])},29:function(e,t,s){"use strict";var a=s(262);t.a=Object(a.defineMessages)({rules:{id:"rules",defaultMessage:"Rules"},added:{id:"added",defaultMessage:"Added"},rule:{id:"rule",defaultMessage:"Rule"},totalRisk:{id:"totalRisk",defaultMessage:"Total risk"},systems:{id:"systems",defaultMessage:"Systems"},ansible:{id:"ansible",defaultMessage:"Ansible"},rulesTableHideReportsErrorDisabled:{id:"rulestable.hidereports.errordisabling",defaultMessage:"Disabling reports failed"},rulesTableHideReportsErrorEnabled:{id:"rulestable.hidereports.errorenabling",defaultMessage:"Enabling reports failed"},disableRule:{id:"disableRule",defaultMessage:"Disable rule"},disableRuleBody:{id:"disableRuleBody",defaultMessage:"Disabling a rule means that hits for this rule across all systems will not be shown in reports and dashboards."},disableRuleSingleSystem:{id:"disableRuleSingleSystem",defaultMessage:"Disable only for this system"},ruleIsDisabled:{id:"ruleIsDisabled",defaultMessage:"Rule is disabled"},ruleIsDisabledBody:{id:"ruleIsDisabledBody",defaultMessage:"This rule has been disabled and has no results."},ruleIsDisabledJustification:{id:"ruleIsDisabledJustification",defaultMessage:"This rule has been disabled for all systems for the following reason: "},justificatonNote:{id:"justificatonNote",defaultMessage:"Justification note"},enableRule:{id:"enableRule",defaultMessage:"Enable rule"},rulesTableNoRuleHitsTitle:{id:"rulestable.norulehits.title",defaultMessage:"No rule hits"},rulesTableNoRuleHitsEnabledRulesBody:{id:"rulestable.norulehits.enabledrulesbody",defaultMessage:"None of your connected systems are affected by enabled rules."},rulesTableNoRuleHitsAnyRulesBody:{id:"rulestable.norulehits.anyrulesbody",defaultMessage:"None of your connected systems are affected by any known rules."},rulesTableNoRuleHitsAddDisabledButton:{id:"rulestable.norulehits.adddisabledbutton",defaultMessage:"Include disabled rules"},disabled:{id:"disabled",defaultMessage:"Disabled"},nA:{id:"nA",defaultMessage:"N/A"},rulesTableFilterInputText:{id:"rulestable.filter.inputtext",defaultMessage:"Find a rule..."},rulesTableActionExportJson:{id:"rulestable.action.exportjson",defaultMessage:"Export as JSON"},rulesTableActionExportCsv:{id:"rulestable.action.exportcsv",defaultMessage:"Export as CSV"},rulesTableActionShow:{id:"rulestable.action.show",defaultMessage:"Show rules with no impacted systems"},rulesTableActionHide:{id:"rulestable.action.hide",defaultMessage:"Hide rules with no impacted systems"},rulesTableActionShowDisabled:{id:"rulestable.action.showDisabled",defaultMessage:"Show disabled rules"},rulesTableActionHideDisabled:{id:"rulestable.action.hideDisabled",defaultMessage:"Hide disabled rules"},rulesTableFetchRulesError:{id:"rulestable.fetchrules.error",defaultMessage:"There was an error fetching rules list."},loading:{id:"loading",defaultMessage:"Loading..."},summaryChartNoHits:{id:"summarychart.nohits",defaultMessage:"Your connected systems have no rule hits."},summaryChartItem:{id:"summarychart.item",defaultMessage:"{numIssues} {name} affecting {affectedSystems} {affectedSystems, plural, one {system} other {systems}}"},summaryChartItemNoHits:{id:"summarychart.itemnohits",defaultMessage:"No {severity} hits."},overviewChartNoHits:{id:"overviewchart.nohits",defaultMessage:"Your connected systems have no categorized rule hits."},totalHits:{id:"total hits",defaultMessage:"Total hits"},clearFilters:{id:"clearFilters",defaultMessage:"Clear filters"},knowledgebaseArticle:{id:"knowledgebasearticle",defaultMessage:"Knowledgebase article"},riskofchange:{id:"riskofchange",defaultMessage:"Risk of change"},rulesDetailsTotalriskBody:{id:"rulesdetails.totalriskbody",defaultMessage:"The <strong>likelihood</strong> that this will be a problem is\n        {likelihood}. The <strong>impact</strong> of the problem would be\n        {impact} if it occurred."},undefined:{id:"undefined",defaultMessage:"Undefined"},learnMore:{id:"learnMore",defaultMessage:"Learn more"},recommended:{id:"recommended",defaultMessage:"Recommended"},featured:{id:"featured",defaultMessage:"Featured"},topicCardSystemsaffected:{id:"topiccard.systemsaffected",defaultMessage:"{systems, plural, one {# system} other {# systems}} affected"},overview:{id:"overview",defaultMessage:"Overview"},overviewCategoryChartTitle:{id:"overview.categorychart.title",defaultMessage:"Rule hits by category"},overviewSeverityChartTitle:{id:"overview.severitychart.title",defaultMessage:"Rule hits by severity"},overviewActioncallTitle:{id:"overview.actioncall.title",defaultMessage:"Get started with Red Hat Insights"},overviewConnectsystemsTitle:{id:"overview.connectsystems.title",defaultMessage:"Connect your first systems"},overviewConnectsystemsBody:{id:"overview.connectsystems.body",defaultMessage:"Connect at least 10 systems to get a better\n        awareness of issues and optimizations\n        identified across your infastructure"},overviewConnectsystemsAction:{id:"overview.connectsystems.action",defaultMessage:"Learn how to connect a system to Insights"},overviewRemediateTitle:{id:"overview.remediate.title",defaultMessage:"Remediate Insights findings with Ansible"},overviewRemediateBody:{id:"overview.remediate.body",defaultMessage:"Easily generate an Ansible playbook to \n        quickly and effectively remediate Insights findings"},overviewRemediateAction:{id:"overview.remediate.action",defaultMessage:"Get started with Insights and Ansible Playbooks"},overviewDeployTitle:{id:"overview.deploy.title",defaultMessage:"Deploy Insights at scale"},overviewDeployBody:{id:"overview.deploy.body",defaultMessage:"Get more out of Insights with more systems.\n        Quickly connect systems with <linkansible> Ansible </linkansible>\n        or <linkpuppet> Puppet </linkpuppet>"},overviewDeployAction:{id:"overview.deploy.action",defaultMessage:"Download Ansible Playbook"},overviewActionCallNoSystemsBody:{id:"overview.actioncallnosystems.body",defaultMessage:"With predictive analytics, avoid problems and unplanned <break> </break>\n        downtime in your Red Hat environment. Red Hat Insights is <break> </break>\n        included with your Red Hat Enterprise Linux subscription"},overviewActionCallNoSystemsAction:{id:"overview.actioncallnosystems.action",defaultMessage:"Get started"},rulesDetailsPubishdate:{id:"rulesdetails.publishdate",defaultMessage:"Publish date: {date}"},affectedSystems:{id:"affectedSystems",defaultMessage:"Affected systems"},readmore:{id:"readmore",defaultMessage:"Read more"},readless:{id:"readless",defaultMessage:"Read less"},topicDetailslNodetailsTitle:{id:"topicdetails.nodetails.title",defaultMessage:"No details for topic"},topicDetailslNodetailsBody:{id:"topicdetails.nodetails.body",defaultMessage:"There exist no further details for this topic."},topics:{id:"topics",defaultMessage:"Topics"},topicsListNotopicsTitle:{id:"topicslist.notopics.title",defaultMessage:"There was an issue fetching topics"},topicsListNotopicsBody:{id:"topicslist.notopics.body",defaultMessage:"Either no topics presently exist or there is an issue presenting them."},remediate:{id:"remediate",defaultMessage:"Remediate"},selectAll:{id:"selectAll",defaultMessage:"Select all ({items} items)"},selectPage:{id:"selectPage",defaultMessage:"Select page ({items} items)"},selectNone:{id:"selectNone",defaultMessage:"Select none (0 items)"},topicRelatedToRule:{id:"topicRelatedToRule",defaultMessage:"Topics related to this rule"},name:{id:"name",defaultMessage:"Name"},numberRuleHits:{id:"numberRuleHits",defaultMessage:"Number of rule hits"},lastSeen:{id:"lastSeen",defaultMessage:"Last seen"},systemTableNoHitsTitle:{id:"systemtable.nohits.title",defaultMessage:"No matching systems found"},systemTableNoHitsEnabledRulesBody:{id:"systemtable.nohits.enabledrulesbody",defaultMessage:"The filter criteria matches no systems. Try changing your filter settings."},search:{id:"search",defaultMessage:"Search"},systemTableFetchError:{id:"systemtable.fetch.error",defaultMessage:"There was an error fetching systems."},low:{id:"low",defaultMessage:"Low"},moderate:{id:"moderate",defaultMessage:"Moderate"},important:{id:"important",defaultMessage:"Important"},critical:{id:"critical",defaultMessage:"Critical"},veryLow:{id:"veryLow",defaultMessage:"Very Low"},high:{id:"high",defaultMessage:"High"},availability:{id:"availability",defaultMessage:"Availability"},performance:{id:"performance",defaultMessage:"Performance"},stability:{id:"stability",defaultMessage:"Stability"},security:{id:"security",defaultMessage:"Security"},enabled:{id:"enabled",defaultMessage:"Enabled"},impact:{id:"impact",defaultMessage:"Impact"},category:{id:"category",defaultMessage:"Category"},likelihood:{id:"likelihood",defaultMessage:"Likelihood"},riskOfChangeTextOne:{id:"riskOfChangeTextOne",defaultMessage:"The change takes very little time to implement and there is minimal impact to system operations."},riskOfChangeTextTwo:{id:"riskOfChangeTextTwo",defaultMessage:"Typically, these changes do not require that a system be taken offline."},riskOfChangeTextThree:{id:"riskOfChangeTextThree",defaultMessage:"These will likely require an outage window."},riskOfChangeTextFour:{id:"riskOfChangeTextFour",defaultMessage:"The change takes a significant amount of time and planning to execute, and will impact the system and business operations of the host due to downtime."},no:{id:"no",defaultMessage:"No"},description:{id:"description",defaultMessage:"Description"},save:{id:"save",defaultMessage:"Save"},cancel:{id:"cancel",defaultMessage:"Cancel"},none:{id:"none",defaultMessage:"None"}})},318:function(e,t,s){"use strict";s.d(t,"a",(function(){return p})),s.d(t,"b",(function(){return h}));var a=s(164),r=s.n(a),n=s(17),i=s(352),o=s.n(i),l=s(42),c=s.n(l),d=s(355);function u(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}var f=c()({rule:{},ruleFetchStatus:"",rules:{},rulesFetchStatus:"",statsRules:{},statsRulesFetchStatus:"",statsSystems:{},statsSystemsFetchStatus:"",system:{},systemFetchStatus:"",systemtype:{},systemtypeFetchStatus:"",filters:{impacting:!0,reports_shown:"true"},topic:{},topicFetchStatus:"",topics:[],topicsFetchStatus:"",systems:{},systemsFetchStatus:"",ruleAck:{},ruleAckFetchStatus:""}),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(n.n,"_PENDING"):return e.set("ruleFetchStatus","pending");case"".concat(n.n,"_FULFILLED"):return c.a.merge(e,{rule:t.payload,ruleFetchStatus:"fulfilled"});case"".concat(n.n,"_REJECTED"):return e.set("ruleFetchStatus","rejected");case"".concat(n.h,"_PENDING"):return e.set("rulesFetchStatus","pending");case"".concat(n.h,"_FULFILLED"):return c.a.merge(e,{rules:t.payload,rulesFetchStatus:"fulfilled"});case"".concat(n.h,"_REJECTED"):return e.set("rulesFetchStatus","rejected");case"".concat(n.p,"_PENDING"):return e.set("statsRulesFetchStatus","pending");case"".concat(n.p,"_FULFILLED"):return c.a.merge(e,{statsRules:t.payload,statsRulesFetchStatus:"fulfilled"});case"".concat(n.p,"_REJECTED"):return e.set("statsRulesFetchStatus","rejected");case"".concat(n.r,"_PENDING"):return e.set("statsSystemsFetchStatus","pending");case"".concat(n.r,"_FULFILLED"):return c.a.merge(e,{statsSystems:t.payload,statsSystemsFetchStatus:"fulfilled"});case"".concat(n.r,"_REJECTED"):return e.set("statsSystemsFetchStatus","rejected");case"".concat(n.w,"_PENDING"):return e.set("systemFetchStatus","pending");case"".concat(n.w,"_FULFILLED"):return c.a.merge(e,{system:t.payload,systemFetchStatus:"fulfilled"});case"".concat(n.w,"_REJECTED"):return e.set("systemFetchStatus","rejected");case"".concat(n.v,"_PENDING"):return e.set("systemtypeFetchStatus","pending");case"".concat(n.v,"_FULFILLED"):return c.a.merge(e,{systemtype:t.payload,systemtypeFetchStatus:"fulfilled"});case"".concat(n.v,"_REJECTED"):return e.set("systemFetchStatus","rejected");case n.b:return c.a.merge(e,{filters:t.payload});case"".concat(n.A,"_PENDING"):return e.set("topicFetchStatus","pending");case"".concat(n.A,"_FULFILLED"):return c.a.merge(e,{topic:t.payload,topicFetchStatus:"fulfilled"});case"".concat(n.A,"_REJECTED"):return e.set("topicFetchStatus","rejected");case"".concat(n.y,"_PENDING"):return e.set("topicsFetchStatus","pending");case"".concat(n.y,"_FULFILLED"):return c.a.merge(e,{topics:t.payload,topicsFetchStatus:"fulfilled"});case"".concat(n.y,"_REJECTED"):return e.set("topicsFetchStatus","rejected");case"".concat(n.t,"_PENDING"):return e.set("systemsFetchStatus","pending");case"".concat(n.t,"_FULFILLED"):return c.a.merge(e,{systems:t.payload,systemsFetchStatus:"fulfilled"});case"".concat(n.t,"_REJECTED"):return e.set("systemsFetchStatus","rejected");case"".concat(n.j,"_PENDING"):return e.set("ruleAckFetchStatus","pending");case"".concat(n.j,"_FULFILLED"):return c.a.merge(e,{ruleAck:t.payload,ruleAckFetchStatus:"fulfilled"});case"".concat(n.j,"_REJECTED"):return e.set("ruleAckFetchStatus","rejected");case n.l:return c.a.merge(e,{ruleAck:t.payload});default:return e}};function h(e){return Object(d.applyReducerHash)(r()({},"".concat(e.LOAD_ENTITY,"_FULFILLED"),m),{})}function m(e){return function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?u(s,!0).forEach((function(t){r()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):u(s).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},e,{loaded:!0,activeApps:[{title:"Insights",name:"insights",component:o.a}]})}},358:function(e){e.exports=JSON.parse('{"en":{"rules":"Rules","added":"Added","rule":"Rule","totalRisk":"Total risk","systems":"Systems","ansible":"Ansible","rulestable.hidereports.errordisabling":"Disabling reports failed","rulestable.hidereports.errorenabling":"Enabling reports failed","disableRule":"Disable rule","disableRuleBody":"Disabling a rule means that hits for this rule across all systems will not be shown in reports and dashboards.","disableRuleSingleSystem":"Disable only for this system","ruleIsDisabled":"Rule is disabled","ruleIsDisabledBody":"This rule has been disabled and has no results.","ruleIsDisabledJustification":"This rule has been disabled for all systems for the following reason: ","justificatonNote":"Justification note","enableRule":"Enable rule","rulestable.norulehits.title":"No rule hits","rulestable.norulehits.enabledrulesbody":"None of your connected systems are affected by enabled rules.","rulestable.norulehits.anyrulesbody":"None of your connected systems are affected by any known rules.","rulestable.norulehits.adddisabledbutton":"Include disabled rules","disabled":"Disabled","nA":"N/A","rulestable.filter.inputtext":"Find a rule...","rulestable.action.exportjson":"Export as JSON","rulestable.action.exportcsv":"Export as CSV","rulestable.action.show":"Show rules with no impacted systems","rulestable.action.hide":"Hide rules with no impacted systems","rulestable.action.showDisabled":"Show disabled rules","rulestable.action.hideDisabled":"Hide disabled rules","rulestable.fetchrules.error":"There was an error fetching rules list.","loading":"Loading...","summarychart.nohits":"Your connected systems have no rule hits.","summarychart.item":"{numIssues} {name} affecting {affectedSystems} {affectedSystems, plural, one {system} other {systems}}","summarychart.itemnohits":"No {severity} hits.","overviewchart.nohits":"Your connected systems have no categorized rule hits.","total hits":"Total hits","clearFilters":"Clear filters","knowledgebasearticle":"Knowledgebase article","riskofchange":"Risk of change","rulesdetails.totalriskbody":"The <strong>likelihood</strong> that this will be a problem is\\n        {likelihood}. The <strong>impact</strong> of the problem would be\\n        {impact} if it occurred.","undefined":"Undefined","learnMore":"Learn more","recommended":"Recommended","featured":"Featured","topiccard.systemsaffected":"{systems, plural, one {# system} other {# systems}} affected","overview":"Overview","overview.categorychart.title":"Rule hits by category","overview.severitychart.title":"Rule hits by severity","overview.actioncall.title":"Get started with Red Hat Insights","overview.connectsystems.title":"Connect your first systems","overview.connectsystems.body":"Connect at least 10 systems to get a better\\n        awareness of issues and optimizations\\n        identified across your infastructure","overview.connectsystems.action":"Learn how to connect a system to Insights","overview.remediate.title":"Remediate Insights findings with Ansible","overview.remediate.body":"Easily generate an Ansible playbook to \\n        quickly and effectively remediate Insights findings","overview.remediate.action":"Get started with Insights and Ansible Playbooks","overview.deploy.title":"Deploy Insights at scale","overview.deploy.body":"Get more out of Insights with more systems.\\n        Quickly connect systems with <linkansible> Ansible </linkansible>\\n        or <linkpuppet> Puppet </linkpuppet>","overview.deploy.action":"Download Ansible Playbook","overview.actioncallnosystems.body":"With predictive analytics, avoid problems and unplanned <break> </break>\\n        downtime in your Red Hat environment. Red Hat Insights is <break> </break>\\n        included with your Red Hat Enterprise Linux subscription","overview.actioncallnosystems.action":"Get started","rulesdetails.publishdate":"Publish date: {date}","affectedSystems":"Affected systems","readmore":"Read more","readless":"Read less","topicdetails.nodetails.title":"No details for topic","topicdetails.nodetails.body":"There exist no further details for this topic.","topics":"Topics","topicslist.notopics.title":"There was an issue fetching topics","topicslist.notopics.body":"Either no topics presently exist or there is an issue presenting them.","remediate":"Remediate","selectAll":"Select all ({items} items)","selectPage":"Select page ({items} items)","selectNone":"Select none (0 items)","topicRelatedToRule":"Topics related to this rule","name":"Name","numberRuleHits":"Number of rule hits","lastSeen":"Last seen","systemtable.nohits.title":"No matching systems found","systemtable.nohits.enabledrulesbody":"The filter criteria matches no systems. Try changing your filter settings.","search":"Search","systemtable.fetch.error":"There was an error fetching systems.","low":"Low","moderate":"Moderate","important":"Important","critical":"Critical","veryLow":"Very Low","high":"High","availability":"Availability","performance":"Performance","stability":"Stability","security":"Security","enabled":"Enabled","impact":"Impact","category":"Category","likelihood":"Likelihood","riskOfChangeTextOne":"The change takes very little time to implement and there is minimal impact to system operations.","riskOfChangeTextTwo":"Typically, these changes do not require that a system be taken offline.","riskOfChangeTextThree":"These will likely require an outage window.","riskOfChangeTextFour":"The change takes a significant amount of time and planning to execute, and will impact the system and business operations of the host due to downtime.","no":"No","description":"Description","save":"Save","cancel":"Cancel","none":"None"}}')},363:function(e,t,s){var a=s(257);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},n=s(7)(a,r);a.locals&&(e.exports=a.locals),e.hot.accept(257,(function(){var t=s(257);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var s,a=0;for(s in e){if(!t||e[s]!==t[s])return!1;a++}for(s in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");n(t)})),e.hot.dispose((function(){n()}))},460:function(e,t){},478:function(e,t){},479:function(e,t){},480:function(e,t){},495:function(e,t){},510:function(e,t,s){"use strict";s.r(t);var a,r=s(2),n=s.n(r),i=s(30),o=s.n(i),l=s(84),c=s(75),d=s(347),u=s(148),f=s(275),p=s(85),h=s(318);var m=s(106),y=s.n(m),b=s(107),g=s.n(b),v=s(108),w=s.n(v),T=s(109),M=s.n(T),E=s(110),S=s.n(E),k=s(1),O=s.n(k),D=s(272),R=s.n(D),I=s(72),_=s(356),C=s.n(_),j=s(357),F=s.n(j),A=s(111),H=Object(A.a)((function(){return Promise.all([s.e(0),s.e(8)]).then(s.bind(null,1046))})),N=Object(A.a)((function(){return s.e(9).then(s.bind(null,1047))})),L=[{title:"Overview",to:"/overview",rootClass:"Insights",component:H},{title:"Rules",to:"/rules",rootClass:"Insights",component:N},{title:"Topics",to:"/topics",rootClass:"Insights",component:Object(A.a)((function(){return s.e(13).then(s.bind(null,1048))}))},{title:"Systems",to:"/systems",rootClass:"Insights",component:N}],P=function(e){var t=e.component,s=e.rootClass,a=F()(e,["component","rootClass"]),r=document.getElementById("root");return r.removeAttribute("class"),r.classList.add("page__".concat(s),"pf-c-page__main"),r.setAttribute("role","main"),n.a.createElement(I.d,C()({},a,{component:t}))};P.propTypes={component:O.a.func,rootClass:O.a.string};var x=function(){return n.a.createElement(I.g,null,L.map((function(e){return n.a.createElement(P,{key:e.title,path:e.to,component:e.component,rootClass:e.rootClass})})),n.a.createElement(I.c,{path:"*",to:"".concat(L[0].to),push:!0}))},U=(s(363),function(e){function t(){return y()(this,t),w()(this,M()(t).apply(this,arguments))}return S()(t,e),g()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("insights"),this.appNav=insights.chrome.on("APP_NAVIGATION",(function(t){t.domEvent&&e.props.history.push("/".concat(t.navId)),-1!==location.pathname.indexOf(t.navId)||Object(I.j)(location.href,{path:"".concat(document.baseURI,"insights/").concat(t.navId)})||e.props.history.push("/".concat(t.navId))}))}},{key:"componentDidUpdate",value:function(e){if(this.props!==e){var t=location.pathname.slice(location.pathname.indexOf("insights/")).split("/")[1],s={topics:function(){insights.chrome.appNavClick({id:"topics"})},rules:function(){insights.chrome.appNavClick({id:"rules"})}};s[t]&&s[t]()}}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return n.a.createElement(x,{childProps:this.props})}}]),t}(r.Component));U.propTypes={location:O.a.object,history:O.a.object};var J=R()(Object(c.connect)(null,null)(U));var B=function(e){var t="/",s=e.split("/");return s.shift(),"beta"===s[0]&&(s.shift(),t="/beta/"),"".concat(t).concat(s[0])},G=s(28),q=s(358);o.a.render(n.a.createElement(G.IntlProvider,{locale:navigator.language,messages:q,onError:console.log},n.a.createElement(c.Provider,{store:function(){for(var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.b,t=arguments.length,s=new Array(t),r=0;r<t;r++)s[r]=arguments[r];return(a=Object(f.getRegistry)({},[].concat(s,[d.a,Object(p.notificationsMiddleware)({errorTitleKey:["message"],errorDescriptionKey:["response.data.detail"]})]),e)).register({AdvisorStore:h.a}),a.register({notifications:p.notifications}),a}().getStore()},n.a.createElement(l.BrowserRouter,{basename:B(window.location.pathname)},n.a.createElement(n.a.Fragment,null,n.a.createElement(p.NotificationsPortal,null),n.a.createElement(J,null))))),document.getElementById("root"))}});
//# sourceMappingURL=App.js.map