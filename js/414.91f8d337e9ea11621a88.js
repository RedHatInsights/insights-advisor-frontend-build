(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[414],{31806:e=>{"use strict";e.exports=JSON.parse('{"en":{"rules":"Rules","recommendation":"Recommendation","recommendations":"Recommendations","added":"Added","rule":"Rule","totalRisk":"Total risk","systems":"Systems","system":"System","systemsExposed":"Systems exposed","ansible":"Ansible","rulestable.hidereports.errordisabling":"Disabling reports failed","rulestable.hidereports.errorenabling":"Enabling reports failed","disableRule":"Disable recommendation","disableRuleForSystems":"Disable recommendation for selected systems","disableRuleBody":"This recommendation will not be shown in reports and dashboards.","disableRuleSingleSystem":"Disable only for this system","ruleIsDisabled":"Recommendation is disabled","ruleSuccessfullyDisabled":"Recommendation successfully disabled","ruleSuccessfullyEnabled":"Recommendation successfully enabled","ruleIsDisabledTooltip":"Indicates this recommendation across all systems will not be shown in reports and dashboards.","ruleIsDisabledBody":"This recommendation has been disabled and has no results.","ruleIsDisabledJustification":"This recommendation has been disabled for all systems for the following reason: ","ruleIsDisabledForSystems":"Recommendation is disabled for some systems","ruleIsDisabledForAllSystems":"Recommendation is disabled for all systems","ruleIsDisabledForSystemsBody":"Recommendation is disabled for {systems, plural, one {# system} other {# systems}}","enableRuleForSystems":"Enable this recommendation for all systems","viewSystems":"View systems","justificationNote":"Justification note","enableRule":"Enable recommendation","rulestable.norulehits.title":"No recommendations","rulestable.norulehits.enabledrulesbody":"None of your connected systems are affected by enabled rules.","rulestable.norulehits.anyrulesbody":"None of your connected systems are affected by any known rules.","rulestable.norulehits.adddisabledbutton":"Include disabled recommendations","disabled":"Disabled","nA":"N/A","rulestable.filter.inputtext":"Find a rule...","exportJson":"Export to JSON","exportCsv":"Export to CSV","exportPdf":"Export to PDF","rulestable.action.show":"Show recommendations with no impacted systems","rulestable.action.hide":"Hide recommendations with no impacted systems","rulestable.action.showDisabled":"Show disabled recommendations","rulestable.action.hideDisabled":"Hide disabled recommendations","rulestable.fetchrules.error":"There was an error fetching recommendations list.","loading":"Loading...","summarychart.nohits":"Your connected systems have no recommendations.","summarychart.item":"{numIssues} {name} affecting {affectedSystems} {affectedSystems, plural, one {system} other {systems}}","summarychart.itemnohits":"No {severity} hits.","overviewchart.nohits":"Your connected systems have no categorized recommendations.","total hits":"Total hits","clearFilters":"Clear filters","filterResults":"Filter by tags:","filterTagsInToolbar":"Filter by tags","filterTagsInModal":"Filter tags","tagsModalName":"Name","tagsModalValue":"Value","tagsModalSources":"Tag Sources","allSystems":"All systems","knowledgebasearticle":"Knowledgebase article","riskofchange":"Risk of change","rulesdetails.totalriskbody":"The total risk of this remediation is <strong>{risk}</strong>,\\n                        based on the combination of likelihood and impact to remediate.","undefined":"Undefined","learnMore":"Learn more","countMore":"{count} more","countMoreTags":"{count} more tags available","recommended":"Recommended","featured":"Featured","status":"Status","label":"Label","topiccard.systemsaffected":"{systems, plural, one {# system} other {# systems}} affected","overview":"Overview","overview.categorychart.title":"Recommendations by category","overview.severitychart.title":"Recommendations by severity","overview.systemInventory.title":"System inventory","overview.systemInventory.stale":"{systems, plural, one {# stale system} other {# stale systems}}","overview.systemInventory.Removed":"{systems, plural, one {# system} other {# systems}} to be removed","overview.systemInventory.OK":"All systes are up to date","overview.actioncall.title":"Get started with Red Hat Insights","overview.connectsystems.title":"Connect your first systems","overview.connectsystems.body":"Connect at least 10 systems to get a better\\n        awareness of issues and optimizations\\n        identified across your infastructure","overview.connectsystems.action":"Learn how to connect a system to Insights","overview.remediate.title":"Remediate Insights findings with Ansible","overview.remediate.body":"Easily generate an Ansible playbook to \\n        quickly and effectively remediate Insights findings","overview.remediate.action":"Get started with Insights and Ansible Playbooks","overview.deploy.title":"Deploy Insights at scale","overview.deploy.body":"Get more out of Insights with more systems.\\n        Quickly connect systems with <linkansible> Ansible </linkansible>\\n        or <linkpuppet> Puppet </linkpuppet>","overview.deploy.action":"Download Ansible Playbook","overview.actioncallnosystems.body":"With predictive analytics, avoid problems and unplanned <break> </break>\\n        downtime in your Red Hat environment. Red Hat Insights is <break> </break>\\n        included with your Red Hat Enterprise Linux subscription","overview.actioncallnosystems.action":"Getting started documentation","installClient":"Install the client on the RHEL system.","registerSystem":"Register the system to Red Hat Insights.","rulesdetails.publishdate":"Publish date: {date}","affectedSystems":"Affected systems","readmore":"Read more","readless":"Read less","deleteTopic":"Delete topic","topicdetails.nodetails.title":"No details for topic","topicdetails.nodetails.body":"There exist no further details for this topic.","title":"Title","tag":"Tag","tagsCount":"Tags ({count})","noTags":"No tags available","manageTags":"Manage tags","topicAddEditDescription":"Description","topicAddEditDescriptionHelperText":"Shown to users to describe the topic","topicAddEditDisabled":"Disabled (not visible)","topicAddEditEnabled":"Enabled (visible)","topicAddEditFeatureBox":"Feature this topic","topicAddEditLabelHelperText":"Recommendations tagged with this tag will be added to the topic","topicAdminCreate":"Create new topic","topicAdminEdit":"Edit topic","topicAdminTitle":"Topic - administration","topics":"Topics","topicslug":"Slug","topicslist.notopics.title":"No topics","topicslist.notopics.body":"Either no topics presently exist or there is an issue presenting them.","remediate":"Remediate","selectAll":"Select all ({items} items)","selectPage":"Select page ({items} items)","selectNone":"Select none (0 items)","topicRelatedToRule":"Topics related to this recommendation","name":"Name","numberRuleHits":"Recommendations","lastSeen":"Last seen","nohits.title":"No matching {item} found","nohits.body":"The filter criteria matches no {item}. Try changing your filter settings.","search":"Search","systemtable.fetch.error":"There was an error fetching systems","low":"Low","moderate":"Moderate","important":"Important","critical":"Critical","veryLow":"Very Low","medium":"Medium","high":"High","availability":"Availability","performance":"Performance","stability":"Stability","security":"Security","enabled":"Enabled","impact":"Impact","impactLevel":"{level} impact","impactDescription":"The impact of the problem would be {level} if it occurred.","category":"Category","likelihood":"Likelihood","likelihoodLevel":"{level} likelihood","likelihoodDescription":"The likelihood that this will be a problem is {level}.","riskOfChangeTextOne":"The risk of change is <strong>very low</strong>, beacause the change takes very little time to implement and there is minimal impact to system operations.","riskOfChangeTextTwo":"The risk of change is <strong>low</strong>, because the change does not require that a system be taken offline.","riskOfChangeTextThree":"The risk of change is <strong>moderate</strong>, because the change will likely require an outage window.","riskOfChangeTextFour":"The risk of change is <strong>high</strong>, because the change takes a significant amount of time and planning to execute, and will impact the system and business operations of the host due to downtime.","no":"No","description":"Description","save":"Save","cancel":"Cancel","none":"None","is":"is","is not":"is not","dateDisabled":"Date disabled","hostAckModalTitle":"Recommendation has been disabled for:","systemName":"System name","systemReboot":"System reboot <strong>{ status }</strong> required.","enable":"Enable","error":"Error","viewAffectedSystems":"View {systems, plural, one {the affected system} other {# affected systems}}","ruleHelpful":"Is this recommendation helpful?","feedbackThankyou":"Thank you for your feedback!","all":"All","incidentRules":"Incident recommendations","nonIncidentRules":"Non-incident recommendations","incident":"Incident","incidentTooltip":"Indicates configurations that are currently affecting your systems","cveAlert":"As of April 20th, 2020, all CVE recommendations previously shown in recommendations have moved over to the Vulnerability section of Red Hat Insights which provides additional capabilities for enhanced CVE identification and remediation.","cveAlertTitle":"CVE recommendations relocated","downloadExecutiveLabel":"Download executive report","insightsHeader":"Advisor","execReportHeader":"This report is an executive summary of recommendations that may impact your Red Hat Enterprise Linux servers. Red Hat Advisor service is analyzing {systems} and has identified {risks} that impact 1 or more of these systems.","execReportHeaderSystems":"{systems, plural, one {# RHEL system} other {# RHEL systems}}","execReportHeaderRisks":"{risks, plural, one {# Risk} other {# Risks}}","sysTableCount":"This report identified {systems}.","filtersApplied":"Filters applied:","tagsApplied":"Tags applied:","recNumAndPercentage":"{count} ({total}% of total)","severity":"Severity","severityHeader":"Identified recommendations by severity","categoryHeader":"Recently identified recommendations by category","topThreeRulesHeader":"Top 3 recommendations in your infrastructure","poundOfRecs":"# of recommendations"}}')},87999:(e,t,s)=>{"use strict";s.d(t,{Z:()=>g});var n=s(28481),a=s(93264),o=s.n(a),r=s(88931),i=s(57149),c=s(16530),l=s(99332),d=s(34702),u=s(59303),m=s(58788),p=(0,a.lazy)((function(){return Promise.all([s.e(410),s.e(891),s.e(649)]).then(s.bind(s,51254))})),h=(0,a.lazy)((function(){return Promise.all([s.e(410),s.e(891),s.e(743)]).then(s.bind(s,49552))})),y=[{title:"Recommendations",path:"/recommendations:?",component:p},{title:"Recommendations",path:"/recommendations",component:p},{title:"Systems",path:"/systems:?",component:h},{title:"Systems",path:"/systems",component:h},{title:"Topics",path:"/topics",component:(0,a.lazy)((function(){return Promise.all([s.e(410),s.e(891),s.e(645)]).then(s.bind(s,54947))}))}],S=function(){return o().createElement(a.Suspense,{fallback:o().createElement(m.Bullseye,null,o().createElement(m.Spinner,{size:"xl"}))},o().createElement(c.Switch,null,y.map((function(e){return o().createElement(c.Route,{key:e.title,path:e.path,component:e.component,rootClass:e.rootClass})})),o().createElement(c.Redirect,{path:"/recommendations",to:"".concat(y[1].path),push:!0}),o().createElement(c.Redirect,{path:"*",to:"".concat(y[1].path),push:!0})))},E=s(30893),f=s(86896),T=s(43707);const g=function(){var e=(0,f.Z)(),t=(0,c.useHistory)().push,s=(0,c.useLocation)().pathname,m=(0,T.T)("advisor",u.PERMS.viewRecs),p=(0,a.useState)(!1),h=(0,n.Z)(p,2),y=h[0],g=h[1],b=(0,r.useDispatch)(),_=(0,a.useMemo)((function(){return{recommendations:function(e){insights.chrome.appNavClick({id:"recommendations",redirect:e})},systems:function(e){insights.chrome.appNavClick({id:"systems",redirect:e})},topics:function(e){insights.chrome.appNavClick({id:"topics",redirect:e})}}}),[]);return(0,a.useEffect)((function(){var e,a,o;insights.chrome.init(),insights.chrome.auth.getUser().then((function(){return g(!0)})),insights.chrome.identifyApp("advisor"),null===(e=insights.chrome)||void 0===e||null===(a=e.globalFilterScope)||void 0===a||a.call(e,"insights"),null!==(o=insights.chrome)&&void 0!==o&&o.globalFilterScope&&insights.chrome.on("GLOBAL_FILTER_UPDATE",(function(e){var t,s,a=e.data,o=(null===(t=insights.chrome)||void 0===t||null===(s=t.mapGlobalFilter)||void 0===s?void 0:s.call(t,a,!1,!0))||[],c=(0,n.Z)(o,3),l=c[0],d=c[1],u=c[2];(0,r.batch)((function(){b((0,i.e9)(l)),b((0,i.tF)(u)),b((0,i.TD)(d))}))}));var c=s.split("/")[1],l=insights.chrome.on("APP_NAVIGATION",(function(e){e.domEvent&&(t("/".concat(e.navId)),void 0!==_[c]?_[c](!0):_.recommendations)}));return function(){return l()}}),[]),(0,a.useEffect)((function(){var e=s.split("/")[1];insights&&insights.chrome&&e&&void 0!==_[e]&&_[e](!1)}),[_,s]),y&&!(null!=m&&m.isLoading)&&(null!=m&&m.hasAccess?o().createElement(S,null):o().createElement(d.Z,{variant:"large",icon:l.ZP,title:e.formatMessage(E.Z.permsTitle),text:e.formatMessage(E.Z.permsBody)}))}},57149:(e,t,s)=>{"use strict";s.d(t,{j:()=>u,w1:()=>m,Mq:()=>p,rr:()=>h,Qq:()=>y,QK:()=>S,F:()=>E,AR:()=>f,s1:()=>T,CM:()=>g,aw:()=>b,tF:()=>_,e9:()=>F,TD:()=>v});var n=s(92137),a=s(87757),o=s.n(a),r=s(59303),i=s(71094),c=function(){var e=(0,n.Z)(o().mark((function e(t,s,n,a){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:if(!a){e.next=8;break}return e.next=5,i.Z.get("".concat(t,"?").concat(a),s,n);case 5:e.t0=e.sent,e.next=11;break;case 8:return e.next=10,i.Z.get("".concat(t),s,n);case 10:e.t0=e.sent;case 11:return r=e.t0,e.abrupt("return",r.data);case 13:case"end":return e.stop()}}),e)})));return function(t,s,n,a){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(o().mark((function e(t,s,n){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return e.next=4,i.Z.post(t,s,n);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(t,s,n){return e.apply(this,arguments)}}(),d=[],u=function(e,t){return d.push(c(r.RULES_FETCH_URL,{},e,t&&t)),{type:r.RULES_FETCH,payload:Promise.all(d).then((function(e){return d=[],e.pop()}))}},m=function(e,t){return{type:r.RULE_FETCH,payload:c("".concat(r.RULES_FETCH_URL).concat(e.rule_id,"/"),{},e,t&&t)}},p=function(e,t,s){return{type:r.SYSTEM_FETCH,payload:c("".concat(r.RULES_FETCH_URL).concat(encodeURI(e),"/systems/"),{},t,s&&s)}},h=function(e){return{type:r.FILTERS_SET,payload:e}},y=function(e){return{type:r.TOPICS_FETCH,payload:c(r.TOPICS_FETCH_URL,{},e)}},S=function(){return{type:r.TOPICS_FETCH,payload:c("".concat(r.TOPICS_FETCH_URL,"?show_disabled=true"))}},E=function(e){return{type:r.TOPIC_FETCH,payload:c("".concat(r.TOPICS_FETCH_URL).concat(e.topic_id,"/"))}},f=function(e){return{type:r.RULE_ACK_FETCH,payload:c("".concat(r.RULE_ACK_URL).concat(e.rule_id,"/"))}},T=function(e){return{type:r["".concat(e.type,"_ACK_SET")],payload:l(r["".concat(e.type,"_ACK_URL")],{},e.options)}},g=function(e){return{type:r.HOST_ACK_FETCH,payload:c("".concat(r.HOST_ACK_URL),{},e)}},b=function(e){return{type:r.FILTERS_SYSTEMS_SET,payload:e}},_=function(e){return{type:r.SELECTED_TAGS_SET,payload:e}},F=function(e){return{type:r.WORKLOADS_SET,payload:e}},v=function(e){return{type:r.SID_SET,payload:e}}},75989:(e,t,s)=>{"use strict";s.d(t,{Y6:()=>m,Vy:()=>p,Ae:()=>h});var n=s(96156),a=s(59303),o=s(15910),r=s(33042),i=s.n(r),c=s(18546);function l(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function d(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?l(Object(s),!0).forEach((function(t){(0,n.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var u=i()({rule:{},ruleFetchStatus:"",rules:{},rulesFetchStatus:"",statsRules:{},statsRulesFetchStatus:"",statsSystems:{},statsSystemsFetchStatus:"",statsStaleHosts:{},statsStaleHostsFetchStatus:"",system:{},systemFetchStatus:"",systemtype:{},systemtypeFetchStatus:"",filters:{impacting:["true"],rule_status:"enabled",sort:"-total_risk",limit:20,offset:0},filtersSystems:{sort:"-last_seen",limit:20,offset:0},topic:{},topicFetchStatus:"",topics:[],topicsFetchStatus:"",systems:{},systemsFetchStatus:"",ruleAck:{},ruleAckFetchStatus:"",hostAcks:{},hostAcksFetchStatus:"",selectedTags:null,workloads:{},SID:[]}),m=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i()(e)||u,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case"".concat(a.RULE_FETCH,"_PENDING"):return t.set("ruleFetchStatus","pending");case"".concat(a.RULE_FETCH,"_FULFILLED"):return i().merge(t,{rule:s.payload,ruleFetchStatus:"fulfilled"});case"".concat(a.RULE_FETCH,"_REJECTED"):return t.set("ruleFetchStatus","rejected");case"".concat(a.RULES_FETCH,"_PENDING"):return t.set("rulesFetchStatus","pending");case"".concat(a.RULES_FETCH,"_FULFILLED"):return i().merge(t,{rules:s.payload,rulesFetchStatus:"fulfilled"});case"".concat(a.RULES_FETCH,"_REJECTED"):return t.set("rulesFetchStatus","rejected");case"".concat(a.STATS_RULES_FETCH,"_PENDING"):return t.set("statsRulesFetchStatus","pending");case"".concat(a.STATS_RULES_FETCH,"_FULFILLED"):return i().merge(t,{statsRules:s.payload,statsRulesFetchStatus:"fulfilled"});case"".concat(a.STATS_RULES_FETCH,"_REJECTED"):return t.set("statsRulesFetchStatus","rejected");case"".concat(a.STATS_SYSTEMS_FETCH,"_PENDING"):return t.set("statsSystemsFetchStatus","pending");case"".concat(a.STATS_SYSTEMS_FETCH,"_FULFILLED"):return i().merge(t,{statsSystems:s.payload,statsSystemsFetchStatus:"fulfilled"});case"".concat(a.STATS_SYSTEMS_FETCH,"_REJECTED"):return t.set("statsSystemsFetchStatus","rejected");case"".concat(a.STATS_STALEHOSTS_FETCH,"_PENDING"):return t.set("statsStaleHostsFetchStatus","pending");case"".concat(a.STATS_STALEHOSTS_FETCH,"_FULFILLED"):return i().merge(t,{statsStaleHosts:s.payload,statsStaleHostsFetchStatus:"fulfilled"});case"".concat(a.STATS_STALEHOSTS_FETCH,"_REJECTED"):return t.set("statsStaleHostsFetchStatus","rejected");case"".concat(a.SYSTEM_FETCH,"_PENDING"):return t.set("systemFetchStatus","pending");case"".concat(a.SYSTEM_FETCH,"_FULFILLED"):return i().merge(t,{system:s.payload,systemFetchStatus:"fulfilled"});case"".concat(a.SYSTEM_FETCH,"_REJECTED"):return t.set("systemFetchStatus","rejected");case"".concat(a.SYSTEMTYPE_FETCH,"_PENDING"):return t.set("systemtypeFetchStatus","pending");case"".concat(a.SYSTEMTYPE_FETCH,"_FULFILLED"):return i().merge(t,{systemtype:s.payload,systemtypeFetchStatus:"fulfilled"});case"".concat(a.SYSTEMTYPE_FETCH,"_REJECTED"):return t.set("systemFetchStatus","rejected");case a.FILTERS_SET:return i().merge(t,{filters:s.payload});case"".concat(a.TOPIC_FETCH,"_PENDING"):return t.set("topicFetchStatus","pending");case"".concat(a.TOPIC_FETCH,"_FULFILLED"):return i().merge(t,{topic:s.payload,topicFetchStatus:"fulfilled"});case"".concat(a.TOPIC_FETCH,"_REJECTED"):return t.set("topicFetchStatus","rejected");case"".concat(a.TOPICS_FETCH,"_PENDING"):return t.set("topicsFetchStatus","pending");case"".concat(a.TOPICS_FETCH,"_FULFILLED"):return i().merge(t,{topics:s.payload,topicsFetchStatus:"fulfilled"});case"".concat(a.TOPICS_FETCH,"_REJECTED"):return t.set("topicsFetchStatus","rejected");case"".concat(a.SYSTEMS_FETCH,"_PENDING"):return t.set("systemsFetchStatus","pending");case"".concat(a.SYSTEMS_FETCH,"_FULFILLED"):return i().merge(t,{systems:s.payload,systemsFetchStatus:"fulfilled"});case"".concat(a.SYSTEMS_FETCH,"_REJECTED"):return t.set("systemsFetchStatus","rejected");case"".concat(a.RULE_ACK_FETCH,"_PENDING"):return t.set("ruleAckFetchStatus","pending");case"".concat(a.RULE_ACK_FETCH,"_FULFILLED"):return i().merge(t,{ruleAck:s.payload,ruleAckFetchStatus:"fulfilled"});case"".concat(a.RULE_ACK_FETCH,"_REJECTED"):return t.set("ruleAckFetchStatus","rejected");case a.RULE_ACK_SET:return i().merge(t,{ruleAck:s.payload});case"".concat(a.HOST_ACK_FETCH,"_PENDING"):return t.set("hostAcksFetchStatus","pending");case"".concat(a.HOST_ACK_FETCH,"_FULFILLED"):return i().merge(t,{hostAcks:s.payload,hostAcksFetchStatus:"fulfilled"});case"".concat(a.HOST_ACK_FETCH,"_REJECTED"):return t.set("hostAcksFetchStatus","rejected");case a.FILTERS_SYSTEMS_SET:return i().merge(t,{filtersSystems:s.payload});case a.SELECTED_TAGS_SET:return i().merge(t,{selectedTags:s.payload});case a.RULE_SET:return i().merge(t,{rule:s.payload});case a.SYSTEM_SET:return i().merge(t,{system:s.payload});case a.WORKLOADS_SET:return i().merge(t,{workloads:s.payload});case a.SID_SET:return i().merge(t,{SID:s.payload});default:return t}}};function p(e,t){return(0,c.Gg)((0,n.Z)({},"".concat(t.LOAD_ENTITIES,"_FULFILLED"),(function(t){var s=t.columns[t.columns.length-1];return e[e.length-1]=d(d({},s),e[e.length-1]),d(d({},t),{},{columns:e.map((function(e){return d(d({},e),t.columns.find((function(t){var s=t.key;return e.key===s})))}))})})))}function h(e){return(0,c.Gg)((0,n.Z)({},"".concat(e.LOAD_ENTITY,"_FULFILLED"),y),{})}function y(e){return d(d({},e),{},{loaded:!0,activeApps:[{title:"Insights",name:"insights",component:o.default}]})}},61380:(e,t,s)=>{"use strict";s.d(t,{S1:()=>u});var n,a=s(71355),o=s(61919),r=s(75989),i=s(67336),c=s(68573),l=s.n(c),d=function(e){return function(t){return function(s){t(s);var n=e.getState().AdvisorStore;sessionStorage.setItem("AdvisorStore",JSON.stringify(n))}}};function u(){for(var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.compose,t=arguments.length,s=new Array(t),c=0;c<t;c++)s[c]=arguments[c];n=(0,i.JH)({},[].concat(s,[l(),(0,a.uv)({errorTitleKey:["message"],errorDescriptionKey:["response.data.detail"]}),d]),e);var u=JSON.parse(sessionStorage.getItem("AdvisorStore"));return n.register({AdvisorStore:(0,r.Y6)(u)}),n.register({notifications:a.N9}),n}}}]);
//# sourceMappingURL=../sourcemaps/414.d03e25ad7a1a15b48d08.js.map