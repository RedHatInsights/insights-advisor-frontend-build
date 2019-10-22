!function(e){function t(t){for(var s,r,n=t[0],i=t[1],o=t[2],l=0,c=[];l<n.length;l++)r=n[l],Object.prototype.hasOwnProperty.call(R,r)&&R[r]&&c.push(R[r][0]),R[r]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);for(x&&x(t);c.length;)c.shift()();return D.push.apply(D,o||[]),a()}function a(){for(var e,t=0;t<D.length;t++){for(var a=D[t],s=!0,r=1;r<a.length;r++){var n=a[r];0!==R[n]&&(s=!1)}s&&(D.splice(t--,1),e=_(_.s=a[0]))}return e}var s=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!O[e]||!M[e])return;for(var a in M[e]=!1,t)Object.prototype.hasOwnProperty.call(t,a)&&(y[a]=t[a]);0==--b&&0===v&&k()}(e,t),s&&s(e,t)};var r,n=!0,i="549427a941affb62d6b1",o=1e4,l={},c=[],d=[];function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,a){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var s=0;s<e.length;s++)t._acceptedDependencies[e[s]]=a||function(){};else t._acceptedDependencies[e]=a||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var a=0;a<e.length;a++)t._declinedDependencies[e[a]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var a=t._disposeHandlers.indexOf(e);a>=0&&t._disposeHandlers.splice(a,1)},check:E,apply:j,status:function(e){if(!e)return p;f.push(e)},addStatusHandler:function(e){f.push(e)},removeStatusHandler:function(e){var t=f.indexOf(e);t>=0&&f.splice(t,1)},data:l[e]};return r=void 0,t}var f=[],p="idle";function h(e){p=e;for(var t=0;t<f.length;t++)f[t].call(null,e)}var m,y,g,b=0,v=0,w={},M={},O={};function T(e){return+e+""===e?+e:e}function E(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return n=e,h("check"),(t=o,t=t||1e4,new Promise((function(e,a){if("undefined"==typeof XMLHttpRequest)return a(new Error("No browser support"));try{var s=new XMLHttpRequest,r=_.p+""+i+".hot-update.json";s.open("GET",r,!0),s.timeout=t,s.send(null)}catch(e){return a(e)}s.onreadystatechange=function(){if(4===s.readyState)if(0===s.status)a(new Error("Manifest request to "+r+" timed out."));else if(404===s.status)e();else if(200!==s.status&&304!==s.status)a(new Error("Manifest request to "+r+" failed."));else{try{var t=JSON.parse(s.responseText)}catch(e){return void a(e)}e(t)}}}))).then((function(e){if(!e)return h("idle"),null;M={},w={},O=e.c,g=e.h,h("prepare");var t=new Promise((function(e,t){m={resolve:e,reject:t}}));for(var a in y={},R)S(a);return"prepare"===p&&0===v&&0===b&&k(),t}));var t}function S(e){O[e]?(M[e]=!0,b++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=_.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):w[e]=!0}function k(){h("ready");var e=m;if(m=null,e)if(n)Promise.resolve().then((function(){return j(n)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var a in y)Object.prototype.hasOwnProperty.call(y,a)&&t.push(T(a));e.resolve(t)}}function j(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var a,s,r,n,o;function d(e){for(var t=[e],a={},s=t.map((function(e){return{chain:[e],id:e}}));s.length>0;){var r=s.pop(),i=r.id,o=r.chain;if((n=H[i])&&!n.hot._selfAccepted){if(n.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:i};if(n.hot._main)return{type:"unaccepted",chain:o,moduleId:i};for(var l=0;l<n.parents.length;l++){var c=n.parents[l],d=H[c];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:o.concat([c]),moduleId:i,parentId:c};-1===t.indexOf(c)&&(d.hot._acceptedDependencies[i]?(a[c]||(a[c]=[]),u(a[c],[i])):(delete a[c],t.push(c),s.push({chain:o.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:a}}function u(e,t){for(var a=0;a<t.length;a++){var s=t[a];-1===e.indexOf(s)&&e.push(s)}}t=t||{};var f={},m=[],b={},v=function(){console.warn("[HMR] unexpected require("+M.moduleId+") to disposed module")};for(var w in y)if(Object.prototype.hasOwnProperty.call(y,w)){var M;o=T(w);var E=!1,S=!1,k=!1,j="";switch((M=y[w]?d(o):{type:"disposed",moduleId:w}).chain&&(j="\nUpdate propagation: "+M.chain.join(" -> ")),M.type){case"self-declined":t.onDeclined&&t.onDeclined(M),t.ignoreDeclined||(E=new Error("Aborted because of self decline: "+M.moduleId+j));break;case"declined":t.onDeclined&&t.onDeclined(M),t.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+M.moduleId+" in "+M.parentId+j));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(M),t.ignoreUnaccepted||(E=new Error("Aborted because "+o+" is not accepted"+j));break;case"accepted":t.onAccepted&&t.onAccepted(M),S=!0;break;case"disposed":t.onDisposed&&t.onDisposed(M),k=!0;break;default:throw new Error("Unexception type "+M.type)}if(E)return h("abort"),Promise.reject(E);if(S)for(o in b[o]=y[o],u(m,M.outdatedModules),M.outdatedDependencies)Object.prototype.hasOwnProperty.call(M.outdatedDependencies,o)&&(f[o]||(f[o]=[]),u(f[o],M.outdatedDependencies[o]));k&&(u(m,[M.moduleId]),b[o]=v)}var D,I=[];for(s=0;s<m.length;s++)o=m[s],H[o]&&H[o].hot._selfAccepted&&b[o]!==v&&I.push({module:o,errorHandler:H[o].hot._selfAccepted});h("dispose"),Object.keys(O).forEach((function(e){!1===O[e]&&function(e){delete R[e]}(e)}));for(var C,F,x=m.slice();x.length>0;)if(o=x.pop(),n=H[o]){var P={},N=n.hot._disposeHandlers;for(r=0;r<N.length;r++)(a=N[r])(P);for(l[o]=P,n.hot.active=!1,delete H[o],delete f[o],r=0;r<n.children.length;r++){var A=H[n.children[r]];A&&((D=A.parents.indexOf(o))>=0&&A.parents.splice(D,1))}}for(o in f)if(Object.prototype.hasOwnProperty.call(f,o)&&(n=H[o]))for(F=f[o],r=0;r<F.length;r++)C=F[r],(D=n.children.indexOf(C))>=0&&n.children.splice(D,1);for(o in h("apply"),i=g,b)Object.prototype.hasOwnProperty.call(b,o)&&(e[o]=b[o]);var L=null;for(o in f)if(Object.prototype.hasOwnProperty.call(f,o)&&(n=H[o])){F=f[o];var U=[];for(s=0;s<F.length;s++)if(C=F[s],a=n.hot._acceptedDependencies[C]){if(-1!==U.indexOf(a))continue;U.push(a)}for(s=0;s<U.length;s++){a=U[s];try{a(F)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:o,dependencyId:F[s],error:e}),t.ignoreErrored||L||(L=e)}}}for(s=0;s<I.length;s++){var G=I[s];o=G.module,c=[o];try{_(o)}catch(e){if("function"==typeof G.errorHandler)try{G.errorHandler(e)}catch(a){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:o,error:a,originalError:e}),t.ignoreErrored||L||(L=a),L||(L=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:o,error:e}),t.ignoreErrored||L||(L=e)}}return L?(h("fail"),Promise.reject(L)):(h("idle"),new Promise((function(e){e(m)})))}var H={},R={4:0},D=[];function _(t){if(H[t])return H[t].exports;var a=H[t]={i:t,l:!1,exports:{},hot:u(t),parents:(d=c,c=[],d),children:[]};return e[t].call(a.exports,a,a.exports,function(e){var t=H[e];if(!t)return _;var a=function(a){return t.hot.active?(H[a]?-1===H[a].parents.indexOf(e)&&H[a].parents.push(e):(c=[e],r=a),-1===t.children.indexOf(a)&&t.children.push(a)):(console.warn("[HMR] unexpected require("+a+") from disposed module "+e),c=[]),_(a)},s=function(e){return{configurable:!0,enumerable:!0,get:function(){return _[e]},set:function(t){_[e]=t}}};for(var n in _)Object.prototype.hasOwnProperty.call(_,n)&&"e"!==n&&"t"!==n&&Object.defineProperty(a,n,s(n));return a.e=function(e){return"ready"===p&&h("prepare"),v++,_.e(e).then(t,(function(e){throw t(),e}));function t(){v--,"prepare"===p&&(w[e]||S(e),0===v&&0===b&&k())}},a.t=function(e,t){return 1&t&&(e=a(e)),_.t(e,-2&t)},a}(t)),a.l=!0,a.exports}_.e=function(e){var t=[],a=R[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,s){a=R[e]=[t,s]}));t.push(a[2]=s);var r,n=document.createElement("script");n.charset="utf-8",n.timeout=120,_.nc&&n.setAttribute("nonce",_.nc),n.src=function(e){return _.p+"js/"+({0:"Details~InsightsTabs~InventoryDetails~Overview~TopicDetails~TopicsList",1:"Details~RulesTAble~TopicDetails",2:"RulesTAble~SystemsTable~TopicDetails",5:"Details",6:"InsightsTabs",7:"InventoryDetails",8:"Overview",9:"Rules",10:"RulesTAble",11:"SystemsTable",12:"TopicDetails",13:"Topics",14:"TopicsList"}[e]||e)+".js"}(e);var i=new Error;r=function(t){n.onerror=n.onload=null,clearTimeout(o);var a=R[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",i.name="ChunkLoadError",i.type=s,i.request=r,a[1](i)}R[e]=void 0}};var o=setTimeout((function(){r({type:"timeout",target:n})}),12e4);n.onerror=n.onload=r,document.head.appendChild(n)}return Promise.all(t)},_.m=e,_.c=H,_.d=function(e,t,a){_.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},_.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.t=function(e,t){if(1&t&&(e=_(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(_.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)_.d(a,s,function(t){return e[t]}.bind(null,s));return a},_.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return _.d(t,"a",t),t},_.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},_.p="/apps/insights/",_.oe=function(e){throw console.error(e),e},_.h=function(){return i};var I=window.webpackJsonp=window.webpackJsonp||[],C=I.push.bind(I);I.push=t,I=I.slice();for(var F=0;F<I.length;F++)t(I[F]);var x=C;D.push([534,15]),a()}({10:function(e,t,a){"use strict";var s=a(270);t.a=Object(s.a)({rules:{id:"rules",defaultMessage:"Rules"},added:{id:"added",defaultMessage:"Added"},rule:{id:"rule",defaultMessage:"Rule"},totalRisk:{id:"totalRisk",defaultMessage:"Total risk"},systems:{id:"systems",defaultMessage:"Systems"},ansible:{id:"ansible",defaultMessage:"Ansible"},rulesTableHideReportsErrorDisabled:{id:"rulestable.hidereports.errordisabling",defaultMessage:"Disabling reports failed"},rulesTableHideReportsErrorEnabled:{id:"rulestable.hidereports.errorenabling",defaultMessage:"Enabling reports failed"},disableRule:{id:"disableRule",defaultMessage:"Disable rule"},enableRule:{id:"enableRule",defaultMessage:"Enable rule"},rulesTableNoRuleHitsTitle:{id:"rulestable.norulehits.title",defaultMessage:"No rule hits"},rulesTableNoRuleHitsEnabledRulesBody:{id:"rulestable.norulehits.enabledrulesbody",defaultMessage:"None of your connected systems are affected by enabled rules."},rulesTableNoRuleHitsAnyRulesBody:{id:"rulestable.norulehits.anyrulesbody",defaultMessage:"None of your connected systems are affected by any known rules."},rulesTableNoRuleHitsAddDisabledButton:{id:"rulestable.norulehits.adddisabledbutton",defaultMessage:"Include disabled rules"},disabled:{id:"disabled",defaultMessage:"Disabled"},nA:{id:"nA",defaultMessage:"N/A"},rulesTableFilterInputText:{id:"rulestable.filter.inputtext",defaultMessage:"Find a rule..."},rulesTableActionExportJson:{id:"rulestable.action.exportjson",defaultMessage:"Export as JSON"},rulesTableActionExportCsv:{id:"rulestable.action.exportcsv",defaultMessage:"Export as CSV"},rulesTableActionShowrulehits:{id:"rulestable.action.showrulehits",defaultMessage:"Show rules with hits"},rulesTableFetchRulesError:{id:"rulestable.fetchrules.error",defaultMessage:"There was an error fetching rules list."},loading:{id:"loading",defaultMessage:"Loading..."},summaryChartNoHits:{id:"summarychart.nohits",defaultMessage:"Your connected systems have no rule hits."},summaryChartItem:{id:"summarychart.item",defaultMessage:"{numIssues} {name} affecting {affectedSystems} {affectedSystems, plural, one {system} other {systems}}"},summaryChartItemNoHits:{id:"summarychart.itemnohits",defaultMessage:"No {severity} hits."},overviewChartNoHits:{id:"overviewchart.nohits",defaultMessage:"Your connected systems have no categorized rule hits."},totalHits:{id:"total hits",defaultMessage:"Total hits"},clearFilters:{id:"clearFilters",defaultMessage:"Clear filters"},knowledgebaseArticle:{id:"knowledgebasearticle",defaultMessage:"Knowledgebase article"},riskofchange:{id:"riskofchange",defaultMessage:"Risk of change"},rulesDetailsTotalriskBody:{id:"rulesdetails.totalriskbody",defaultMessage:"The <strong>likelihood</strong> that this will be a problem is\n        {likelihood}. The <strong>impact</strong> of the problem would be\n        {impact} if it occurred."},undefined:{id:"undefined",defaultMessage:"Undefined"},learnMore:{id:"learnMore",defaultMessage:"Learn more"},recommended:{id:"recommended",defaultMessage:"Recommended"},featured:{id:"featured",defaultMessage:"Featured"},topicCardSystemsaffected:{id:"topiccard.systemsaffected",defaultMessage:"{systems, plural, one {# system} other {# systems}} affected"},overview:{id:"overview",defaultMessage:"Overview"},overviewCategoryChartTitle:{id:"overview.categorychart.title",defaultMessage:"Rule hits by category"},overviewSeverityChartTitle:{id:"overview.severitychart.title",defaultMessage:"Rule hits by severity"},overviewActioncallTitle:{id:"overview.actioncall.title",defaultMessage:"Get started with Red Hat Insights"},overviewConnectsystemsTitle:{id:"overview.connectsystems.title",defaultMessage:"Connect your first systems"},overviewConnectsystemsBody:{id:"overview.connectsystems.body",defaultMessage:"Connect at least 10 systems to get a better\n        awareness of issues and optimizations\n        identified across your infastructure"},overviewConnectsystemsAction:{id:"overview.connectsystems.action",defaultMessage:"Learn how to connect a system to Insights"},overviewRemediateTitle:{id:"overview.remediate.title",defaultMessage:"Remediate Insights findings with Ansible"},overviewRemediateBody:{id:"overview.remediate.body",defaultMessage:"Easily generate an Ansible playbook to \n        quickly and effectively remediate Insights findings"},overviewRemediateAction:{id:"overview.remediate.action",defaultMessage:"Get started with Insights and Ansible Playbooks"},overviewDeployTitle:{id:"overview.deploy.title",defaultMessage:"Deploy Insights at scale"},overviewDeployBody:{id:"overview.deploy.body",defaultMessage:"Get more out of Insights with more systems.\n        Quickly connect systems with <linkansible> Ansible </linkansible>\n        or <linkpuppet> Puppet </linkpuppet>"},overviewDeployAction:{id:"overview.deploy.action",defaultMessage:"Download Ansible Playbook"},overviewActionCallNoSystemsBody:{id:"overview.actioncallnosystems.body",defaultMessage:"With predictive analytics, avoid problems and unplanned <break> </break>\n        downtime in your Red Hat environment. Red Hat Insights is <break> </break>\n        included with your Red Hat Enterprise Linux subscription"},overviewActionCallNoSystemsAction:{id:"overview.actioncallnosystems.action",defaultMessage:"Get started"},rulesDetailsPubishdate:{id:"rulesdetails.publishdate",defaultMessage:"Publish date: {date}"},affectedSystems:{id:"affectedSystems",defaultMessage:"Affected systems"},readmore:{id:"readmore",defaultMessage:"Read more"},readless:{id:"readless",defaultMessage:"Read less"},topicDetailslNodetailsTitle:{id:"topicdetails.nodetails.title",defaultMessage:"No details for topic"},topicDetailslNodetailsBody:{id:"topicdetails.nodetails.body",defaultMessage:"There exist no further details for this topic."},topics:{id:"topics",defaultMessage:"Topics"},topicsListNotopicsTitle:{id:"topicslist.notopics.title",defaultMessage:"There was an issue fetching topics"},topicsListNotopicsBody:{id:"topicslist.notopics.body",defaultMessage:"Either no topics presently exist or there is an issue presenting them."},remediate:{id:"remediate",defaultMessage:"Remediate"},selectAll:{id:"selectAll",defaultMessage:"Select all ({items} items)"},selectPage:{id:"selectPage",defaultMessage:"Select page ({items} items)"},selectNone:{id:"selectNone",defaultMessage:"Select none (0 items)"},topicRelatedToRule:{id:"topicRelatedToRule",defaultMessage:"Topics related to this rule"},name:{id:"name",defaultMessage:"Name"},numberRuleHits:{id:"numberRuleHits",defaultMessage:"Number of rule hits"},lastSeen:{id:"lastSeen",defaultMessage:"Last seen"},systemTableNoHitsTitle:{id:"systemtable.nohits.title",defaultMessage:"No matching systems found"},systemTableNoHitsEnabledRulesBody:{id:"systemtable.nohits.enabledrulesbody",defaultMessage:"The filter criteria matches no systems. Try changing your filter settings."},search:{id:"search",defaultMessage:"Search"},systemTableFetchError:{id:"systemtable.fetch.error",defaultMessage:"There was an error fetching systems."},low:{id:"low",defaultMessage:"Low"},moderate:{id:"moderate",defaultMessage:"Moderate"},important:{id:"important",defaultMessage:"Important"},critical:{id:"critical",defaultMessage:"Critical"},veryLow:{id:"veryLow",defaultMessage:"Very Low"},high:{id:"high",defaultMessage:"High"},availability:{id:"availability",defaultMessage:"Availability"},performance:{id:"performance",defaultMessage:"Performance"},stability:{id:"stability",defaultMessage:"Stability"},security:{id:"security",defaultMessage:"Security"},all:{id:"all",defaultMessage:"All"},enabled:{id:"enabled",defaultMessage:"Enabled"},impact:{id:"impact",defaultMessage:"Impact"},category:{id:"category",defaultMessage:"Category"},ruleStatus:{id:"ruleStatus",defaultMessage:"Rule Status"},likelihood:{id:"likelihood",defaultMessage:"Likelihood"},riskOfChangeTextOne:{id:"riskOfChangeTextOne",defaultMessage:"The change takes very little time to implement and there is minimal impact to system operations."},riskOfChangeTextTwo:{id:"riskOfChangeTextTwo",defaultMessage:"Typically, these changes do not require that a system be taken offline."},riskOfChangeTextThree:{id:"riskOfChangeTextThree",defaultMessage:"These will likely require an outage window."},riskOfChangeTextFour:{id:"riskOfChangeTextFour",defaultMessage:"The change takes a significant amount of time and planning to execute, and will impact the system and business operations of the host due to downtime."},no:{id:"no",defaultMessage:"No"}})},119:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var s=a(167),r=a.n(s),n=a(280),i=a.n(n),o=a(114),l=a.n(o),c=a(115),d=a.n(c),u=a(116),f=a.n(u),p=a(117),h=a.n(p),m=a(118),y=a.n(m),g=a(2),b=a.n(g);function v(e){return function(t){function a(e){var t;return l()(this,a),(t=f()(this,h()(a).call(this,e))).state={component:null},t}var s;return y()(a,t),d()(a,[{key:"componentDidMount",value:(s=i()(r.a.mark((function t(){var a,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:a=t.sent,s=a.default,this.setState({component:s});case 5:case"end":return t.stop()}}),t,this)}))),function(){return s.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?b.a.createElement(e,this.props):null}}]),a}(g.Component)}},20:function(e,t,a){"use strict";a.d(t,"l",(function(){return u})),a.d(t,"i",(function(){return f})),a.d(t,"u",(function(){return p})),a.d(t,"t",(function(){return h})),a.d(t,"n",(function(){return m})),a.d(t,"p",(function(){return y})),a.d(t,"b",(function(){return g})),a.d(t,"c",(function(){return b})),a.d(t,"y",(function(){return v})),a.d(t,"w",(function(){return w})),a.d(t,"r",(function(){return M})),a.d(t,"a",(function(){return O})),a.d(t,"j",(function(){return T})),a.d(t,"o",(function(){return E})),a.d(t,"q",(function(){return S})),a.d(t,"x",(function(){return k})),a.d(t,"s",(function(){return j})),a.d(t,"v",(function(){return H})),a.d(t,"k",(function(){return R})),a.d(t,"m",(function(){return D})),a.d(t,"d",(function(){return _})),a.d(t,"g",(function(){return I})),a.d(t,"e",(function(){return C})),a.d(t,"f",(function(){return F})),a.d(t,"h",(function(){return x})),a.d(t,"z",(function(){return P}));var s=a(8),r=a(146),n=a(9),i=a(10),o=Object(s.d)(),l=navigator.language,c=Object(r.a)({onError:console.log,locale:l},o),d={locale:l},u="RULE_FETCH",f="RULES_FETCH",p="SYSTEM_FETCH",h="SYSTEMTYPE_FETCH",m="STATS_RULES_FETCH",y="STATS_SYSTEMS_FETCH",g="BREADCRUMBS_SET",b="FILTERS_SET",v="TOPIC_FETCH",w="TOPICS_FETCH",M="SYSTEMS_FETCH",O="/api/insights/v1",T="".concat(O,"/rule/"),E="".concat(O,"/stats/rules/"),S="".concat(O,"/stats/systems/"),k="".concat(O,"/topic/"),j="".concat(O,"/system/"),H={rhel:105,ocp:325},R={availability:1,security:2,stability:3,performance:4},D={"critical-risk":4,"high-risk":3,"medium-risk":2,"low-risk":1},_=[{type:"checkbox",title:Object(n.intlHelper)(c.formatMessage(i.a.totalRisk),d),urlParam:"total_risk",values:[{label:Object(n.intlHelper)(c.formatMessage(i.a.critical),d),value:"4"},{label:Object(n.intlHelper)(c.formatMessage(i.a.important),d),value:"3"},{label:Object(n.intlHelper)(c.formatMessage(i.a.moderate),d),value:"2"},{label:Object(n.intlHelper)(c.formatMessage(i.a.low),d),value:"1"}]},{type:"checkbox",title:Object(n.intlHelper)(c.formatMessage(i.a.riskofchange),d),urlParam:"res_risk",values:[{label:Object(n.intlHelper)(c.formatMessage(i.a.high),d),value:"4"},{label:Object(n.intlHelper)(c.formatMessage(i.a.moderate),d),value:"3"},{label:Object(n.intlHelper)(c.formatMessage(i.a.low),d),value:"2"},{label:Object(n.intlHelper)(c.formatMessage(i.a.veryLow),d),value:"1"}]},{type:"checkbox",title:Object(n.intlHelper)(c.formatMessage(i.a.impact),d),urlParam:"impact",values:[{label:Object(n.intlHelper)(c.formatMessage(i.a.critical),d),value:"4"},{label:Object(n.intlHelper)(c.formatMessage(i.a.important),d),value:"3"},{label:Object(n.intlHelper)(c.formatMessage(i.a.moderate),d),value:"2"},{label:Object(n.intlHelper)(c.formatMessage(i.a.low),d),value:"1"}]},{type:"checkbox",title:Object(n.intlHelper)(c.formatMessage(i.a.likelihood),d),urlParam:"likelihood",values:[{label:Object(n.intlHelper)(c.formatMessage(i.a.critical),d),value:"4"},{label:Object(n.intlHelper)(c.formatMessage(i.a.important),d),value:"3"},{label:Object(n.intlHelper)(c.formatMessage(i.a.moderate),d),value:"2"},{label:Object(n.intlHelper)(c.formatMessage(i.a.low),d),value:"1"}]},{type:"checkbox",title:Object(n.intlHelper)(c.formatMessage(i.a.category),d),urlParam:"category",values:[{label:Object(n.intlHelper)(c.formatMessage(i.a.availability),d),value:"".concat(R.availability)},{label:Object(n.intlHelper)(c.formatMessage(i.a.performance),d),value:"".concat(R.performance)},{label:Object(n.intlHelper)(c.formatMessage(i.a.stability),d),value:"".concat(R.stability)},{label:Object(n.intlHelper)(c.formatMessage(i.a.security),d),value:"".concat(R.security)}]},{type:"radio",title:Object(n.intlHelper)(c.formatMessage(i.a.ruleStatus),d),urlParam:"reports_shown",values:[{label:Object(n.intlHelper)(c.formatMessage(i.a.all),d),value:void 0},{label:Object(n.intlHelper)(c.formatMessage(i.a.enabled),d),value:!0},{label:Object(n.intlHelper)(c.formatMessage(i.a.disabled),d),value:!1}]}],I={1:Object(n.intlHelper)(c.formatMessage(i.a.riskOfChangeTextOne),d),2:Object(n.intlHelper)(c.formatMessage(i.a.riskOfChangeTextTwo),d),3:Object(n.intlHelper)(c.formatMessage(i.a.riskOfChangeTextThree),d),4:Object(n.intlHelper)(c.formatMessage(i.a.riskOfChangeTextFour),d)},C={1:Object(n.intlHelper)(c.formatMessage(i.a.low),d),2:Object(n.intlHelper)(c.formatMessage(i.a.moderate),d),3:Object(n.intlHelper)(c.formatMessage(i.a.important),d),4:Object(n.intlHelper)(c.formatMessage(i.a.critical),d)},F={1:Object(n.intlHelper)(c.formatMessage(i.a.low),d),2:Object(n.intlHelper)(c.formatMessage(i.a.moderate),d),3:Object(n.intlHelper)(c.formatMessage(i.a.important),d),4:Object(n.intlHelper)(c.formatMessage(i.a.critical),d)},x={1:Object(n.intlHelper)(c.formatMessage(i.a.veryLow),d),2:Object(n.intlHelper)(c.formatMessage(i.a.low),d),3:Object(n.intlHelper)(c.formatMessage(i.a.moderate),d),4:Object(n.intlHelper)(c.formatMessage(i.a.high),d)},P={1:"Low",2:"Moderate",3:"Important",4:"Critical"}},265:function(e,t,a){(t=e.exports=a(4)(!1)).i(a(532),""),t.i(a(533),""),t.push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\nul.navigation-secondary {\n  margin-top: 20px; }\n  ul.navigation-secondary li {\n    cursor: pointer;\n    font-size: 15px;\n    width: 100%;\n    box-shadow: none;\n    padding: 5px 0;\n    color: #1d1d1d; }\n    ul.navigation-secondary li span {\n      margin-left: 50px; }\n    ul.navigation-secondary li:active, ul.navigation-secondary li.active {\n      background: #f5f5f5;\n      color: var(--pf-global--link--Color); }\n    ul.navigation-secondary li:hover {\n      color: var(--pf-global--link--Color); }\n",""])},331:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var s=a(166),r=a.n(s),n=a(54),i=a.n(n),o=a(20),l=a(365),c=a(366),d=a.n(c);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}var f=i()({rule:{},ruleFetchStatus:"",rules:{},rulesFetchStatus:"",statsRules:{},statsRulesFetchStatus:"",statsSystems:{},statsSystemsFetchStatus:"",system:{},systemFetchStatus:"",systemtype:{},systemtypeFetchStatus:"",breadcrumbs:[],filters:{impacting:!0,reports_shown:!0},topic:{},topicFetchStatus:"",topics:[],topicsFetchStatus:"",systems:{},systemsFetchStatus:""}),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(o.l,"_PENDING"):return e.set("ruleFetchStatus","pending");case"".concat(o.l,"_FULFILLED"):return i.a.merge(e,{rule:t.payload,ruleFetchStatus:"fulfilled"});case"".concat(o.l,"_REJECTED"):return e.set("ruleFetchStatus","rejected");case"".concat(o.i,"_PENDING"):return e.set("rulesFetchStatus","pending");case"".concat(o.i,"_FULFILLED"):return i.a.merge(e,{rules:t.payload,rulesFetchStatus:"fulfilled"});case"".concat(o.i,"_REJECTED"):return e.set("rulesFetchStatus","rejected");case"".concat(o.n,"_PENDING"):return e.set("statsRulesFetchStatus","pending");case"".concat(o.n,"_FULFILLED"):return i.a.merge(e,{statsRules:t.payload,statsRulesFetchStatus:"fulfilled"});case"".concat(o.n,"_REJECTED"):return e.set("statsRulesFetchStatus","rejected");case"".concat(o.p,"_PENDING"):return e.set("statsSystemsFetchStatus","pending");case"".concat(o.p,"_FULFILLED"):return i.a.merge(e,{statsSystems:t.payload,statsSystemsFetchStatus:"fulfilled"});case"".concat(o.p,"_REJECTED"):return e.set("statsSystemsFetchStatus","rejected");case"".concat(o.u,"_PENDING"):return e.set("systemFetchStatus","pending");case"".concat(o.u,"_FULFILLED"):return i.a.merge(e,{system:t.payload,systemFetchStatus:"fulfilled"});case"".concat(o.u,"_REJECTED"):return e.set("systemFetchStatus","rejected");case"".concat(o.t,"_PENDING"):return e.set("systemtypeFetchStatus","pending");case"".concat(o.t,"_FULFILLED"):return i.a.merge(e,{systemtype:t.payload,systemtypeFetchStatus:"fulfilled"});case"".concat(o.t,"_REJECTED"):return e.set("systemFetchStatus","rejected");case o.b:return i.a.merge(e,{breadcrumbs:t.payload});case o.c:return i.a.merge(e,{filters:t.payload});case"".concat(o.y,"_PENDING"):return e.set("topicFetchStatus","pending");case"".concat(o.y,"_FULFILLED"):return i.a.merge(e,{topic:t.payload,topicFetchStatus:"fulfilled"});case"".concat(o.y,"_REJECTED"):return e.set("topicFetchStatus","rejected");case"".concat(o.w,"_PENDING"):return e.set("topicsFetchStatus","pending");case"".concat(o.w,"_FULFILLED"):return i.a.merge(e,{topics:t.payload,topicsFetchStatus:"fulfilled"});case"".concat(o.w,"_REJECTED"):return e.set("topicsFetchStatus","rejected");case"".concat(o.r,"_PENDING"):return e.set("systemsFetchStatus","pending");case"".concat(o.r,"_FULFILLED"):return i.a.merge(e,{systems:t.payload,systemsFetchStatus:"fulfilled"});case"".concat(o.r,"_REJECTED"):return e.set("systemsFetchStatus","rejected");default:return e}};function h(e){return Object(l.applyReducerHash)(r()({},"".concat(e.LOAD_ENTITY,"_FULFILLED"),m),{})}function m(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(a,!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{loaded:!0,activeApps:[{title:"Insights",name:"insights",component:d.a}]})}},371:function(e){e.exports=JSON.parse('{"en":{"rules":"Rules","added":"Added","rule":"Rule","totalRisk":"Total risk","systems":"Systems","ansible":"Ansible","rulestable.hidereports.errordisabling":"Disabling reports failed","rulestable.hidereports.errorenabling":"Enabling reports failed","disableRule":"Disable rule","enableRule":"Enable rule","rulestable.norulehits.title":"No rule hits","rulestable.norulehits.enabledrulesbody":"None of your connected systems are affected by enabled rules.","rulestable.norulehits.anyrulesbody":"None of your connected systems are affected by any known rules.","rulestable.norulehits.adddisabledbutton":"Include disabled rules","disabled":"Disabled","nA":"N/A","rulestable.filter.inputtext":"Find a rule...","rulestable.action.exportjson":"Export as JSON","rulestable.action.exportcsv":"Export as CSV","rulestable.action.showrulehits":"Show rules with hits","rulestable.fetchrules.error":"There was an error fetching rules list.","loading":"Loading...","summarychart.nohits":"Your connected systems have no rule hits.","summarychart.item":"{numIssues} {name} affecting {affectedSystems} {affectedSystems, plural, one {system} other {systems}}","summarychart.itemnohits":"No {severity} hits.","overviewchart.nohits":"Your connected systems have no categorized rule hits.","total hits":"Total hits","clearFilters":"Clear filters","knowledgebasearticle":"Knowledgebase article","riskofchange":"Risk of change","rulesdetails.totalriskbody":"The <strong>likelihood</strong> that this will be a problem is\\n        {likelihood}. The <strong>impact</strong> of the problem would be\\n        {impact} if it occurred.","undefined":"Undefined","learnMore":"Learn more","recommended":"Recommended","featured":"Featured","topiccard.systemsaffected":"{systems, plural, one {# system} other {# systems}} affected","overview":"Overview","overview.categorychart.title":"Rule hits by category","overview.severitychart.title":"Rule hits by severity","overview.actioncall.title":"Get started with Red Hat Insights","overview.connectsystems.title":"Connect your first systems","overview.connectsystems.body":"Connect at least 10 systems to get a better\\n        awareness of issues and optimizations\\n        identified across your infastructure","overview.connectsystems.action":"Learn how to connect a system to Insights","overview.remediate.title":"Remediate Insights findings with Ansible","overview.remediate.body":"Easily generate an Ansible playbook to \\n        quickly and effectively remediate Insights findings","overview.remediate.action":"Get started with Insights and Ansible Playbooks","overview.deploy.title":"Deploy Insights at scale","overview.deploy.body":"Get more out of Insights with more systems.\\n        Quickly connect systems with <linkansible> Ansible </linkansible>\\n        or <linkpuppet> Puppet </linkpuppet>","overview.deploy.action":"Download Ansible Playbook","overview.actioncallnosystems.body":"With predictive analytics, avoid problems and unplanned <break> </break>\\n        downtime in your Red Hat environment. Red Hat Insights is <break> </break>\\n        included with your Red Hat Enterprise Linux subscription","overview.actioncallnosystems.action":"Get started","rulesdetails.publishdate":"Publish date: {date}","affectedSystems":"Affected systems","readmore":"Read more","readless":"Read less","topicdetails.nodetails.title":"No details for topic","topicdetails.nodetails.body":"There exist no further details for this topic.","topics":"Topics","topicslist.notopics.title":"There was an issue fetching topics","topicslist.notopics.body":"Either no topics presently exist or there is an issue presenting them.","remediate":"Remediate","selectAll":"Select all ({items} items)","selectPage":"Select page ({items} items)","selectNone":"Select none (0 items)","topicRelatedToRule":"Topics related to this rule","name":"Name","numberRuleHits":"Number of rule hits","lastSeen":"Last seen","systemtable.nohits.title":"No matching systems found","systemtable.nohits.enabledrulesbody":"The filter criteria matches no systems. Try changing your filter settings.","search":"Search","systemtable.fetch.error":"There was an error fetching systems.","low":"Low","moderate":"Moderate","important":"Important","critical":"Critical","veryLow":"Very Low","high":"High","availability":"Availability","performance":"Performance","stability":"Stability","security":"Security","all":"All","enabled":"Enabled","impact":"Impact","category":"Category","ruleStatus":"Rule Status","likelihood":"Likelihood","riskOfChangeTextOne":"The change takes very little time to implement and there is minimal impact to system operations.","riskOfChangeTextTwo":"Typically, these changes do not require that a system be taken offline.","riskOfChangeTextThree":"These will likely require an outage window.","riskOfChangeTextFour":"The change takes a significant amount of time and planning to execute, and will impact the system and business operations of the host due to downtime.","no":"No"}}')},377:function(e,t,a){var s=a(265);"string"==typeof s&&(s=[[e.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},n=a(6)(s,r);s.locals&&(e.exports=s.locals),e.hot.accept(265,(function(){var t=a(265);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,s=0;for(a in e){if(!t||e[a]!==t[a])return!1;s++}for(a in t)s--;return 0===s}(s.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");n(t)})),e.hot.dispose((function(){n()}))},484:function(e,t){},502:function(e,t){},503:function(e,t){},504:function(e,t){},519:function(e,t){},534:function(e,t,a){"use strict";a.r(t);var s,r=a(2),n=a.n(r),i=a(26),o=a.n(i),l=a(88),c=a(81),d=a(360),u=a(121),f=a(282),p=a(89),h=a(331);var m=a(114),y=a.n(m),g=a(115),b=a.n(g),v=a(116),w=a.n(v),M=a(117),O=a.n(M),T=a(118),E=a.n(T),S=a(1),k=a.n(S),j=a(279),H=a.n(j),R=a(80),D=a(369),_=a.n(D),I=a(370),C=a.n(I),F=a(119),x=Object(F.a)((function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,1070))})),P=Object(F.a)((function(){return a.e(9).then(a.bind(null,1071))})),N=[{title:"Overview",to:"/overview",rootClass:"Insights",component:x},{title:"Rules",to:"/rules",rootClass:"Insights",component:P},{title:"Topics",to:"/topics",rootClass:"Insights",component:Object(F.a)((function(){return a.e(13).then(a.bind(null,1072))}))},{title:"Systems",to:"/systems",rootClass:"Insights",component:P}],A=function(e){var t=e.component,a=e.rootClass,s=C()(e,["component","rootClass"]),r=document.getElementById("root");return r.removeAttribute("class"),r.classList.add("page__".concat(a),"pf-c-page__main"),r.setAttribute("role","main"),n.a.createElement(R.d,_()({},s,{component:t}))};A.propTypes={component:k.a.func,rootClass:k.a.string};var L=function(){return n.a.createElement(R.g,null,N.map((function(e){return n.a.createElement(A,{key:e.title,path:e.to,component:e.component,rootClass:e.rootClass})})),n.a.createElement(R.c,{path:"*",to:"".concat(N[0].to),push:!0}))},U=(a(377),function(e){function t(){return y()(this,t),w()(this,O()(t).apply(this,arguments))}return E()(t,e),b()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("insights"),this.appNav=insights.chrome.on("APP_NAVIGATION",(function(t){t.domEvent&&e.props.history.push("/".concat(t.navId)),-1!==location.pathname.indexOf(t.navId)||Object(R.j)(location.href,{path:"".concat(document.baseURI,"insights/").concat(t.navId)})||e.props.history.push("/".concat(t.navId))}))}},{key:"componentDidUpdate",value:function(e){if(this.props!==e){var t=location.pathname.slice(location.pathname.indexOf("insights/")).split("/")[1],a={topics:function(){insights.chrome.appNavClick({id:"topics"})},rules:function(){insights.chrome.appNavClick({id:"rules"})}};a[t]&&a[t]()}}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return n.a.createElement(L,{childProps:this.props})}}]),t}(r.Component));U.propTypes={location:k.a.object,history:k.a.object};var G=H()(Object(c.connect)(null,null)(U));var B=function(e){var t="/",a=e.split("/");return a.shift(),"beta"===a[0]&&(a.shift(),t="/beta/"),"".concat(t).concat(a[0])},J=a(9),q=a(371);o.a.render(n.a.createElement(J.IntlProvider,{locale:navigator.language,messages:q,onError:console.log},n.a.createElement(c.Provider,{store:function(){for(var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.b,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(s=Object(f.getRegistry)({},[].concat(a,[d.a,Object(p.notificationsMiddleware)({errorTitleKey:["message"],errorDescriptionKey:["response.data.detail"]})]),e)).register({AdvisorStore:h.a}),s.register({notifications:p.notifications}),s}().getStore()},n.a.createElement(l.BrowserRouter,{basename:B(window.location.pathname)},n.a.createElement(n.a.Fragment,null,n.a.createElement(p.NotificationsPortal,null),n.a.createElement(G,null))))),document.getElementById("root"))}});