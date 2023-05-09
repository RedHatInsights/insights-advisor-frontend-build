"use strict";(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[2205],{87999:(e,t,s)=>{s.d(t,{Z:()=>x});var o=s(70885),n=s(93264),i=s.n(n),a=s(28216),r=s(28672),l=s(75662),d=s(55140),c=s(99332),u=s(34702),m=s(59303),y=s(52643),p=s(37619),h=s(2443),b=s(9669),f=s.n(b),g=s(22663),v=(0,n.lazy)((function(){return Promise.all([s.e(7054),s.e(9098),s.e(4854),s.e(8941),s.e(5344),s.e(7887),s.e(8764),s.e(2177),s.e(7330),s.e(4739),s.e(5320),s.e(9004),s.e(3343),s.e(9763),s.e(2967),s.e(7814),s.e(3320),s.e(6696),s.e(4259),s.e(7115),s.e(2280),s.e(2217),s.e(7009)]).then(s.bind(s,69874))})),w=(0,n.lazy)((function(){return Promise.all([s.e(7054),s.e(9098),s.e(4854),s.e(8941),s.e(5344),s.e(8764),s.e(2177),s.e(7330),s.e(9004),s.e(9763),s.e(5865),s.e(4025),s.e(3269),s.e(4546)]).then(s.bind(s,64749))})),R=(0,n.lazy)((function(){return Promise.all([s.e(7054),s.e(8941),s.e(5344),s.e(2177),s.e(5320),s.e(3343),s.e(9763),s.e(2967),s.e(6696),s.e(3328),s.e(4025),s.e(3269),s.e(1177)]).then(s.bind(s,79364))})),T=(0,n.lazy)((function(){return Promise.all([s.e(7054),s.e(9098),s.e(4854),s.e(8941),s.e(5344),s.e(7887),s.e(8764),s.e(7330),s.e(5320),s.e(6435),s.e(6770),s.e(4259),s.e(4025),s.e(3815),s.e(9504)]).then(s.bind(s,81147))})),k=(0,n.lazy)((function(){return Promise.all([s.e(7054),s.e(5344),s.e(8764),s.e(9763),s.e(2967),s.e(7814),s.e(3320),s.e(4093),s.e(4025),s.e(2280),s.e(2217),s.e(6842)]).then(s.bind(s,15334))})),S=(0,n.lazy)((function(){return Promise.all([s.e(7054),s.e(9098),s.e(4854),s.e(5344),s.e(7887),s.e(4259),s.e(7641)]).then(s.bind(s,37468))})),I=(0,n.lazy)((function(){return Promise.all([s.e(7054),s.e(9098),s.e(4854),s.e(8941),s.e(5344),s.e(7887),s.e(8764),s.e(2177),s.e(7330),s.e(4739),s.e(9004),s.e(7359),s.e(4259),s.e(7115),s.e(4683)]).then(s.bind(s,11198))})),P=(0,n.lazy)((function(){return Promise.all([s.e(7054),s.e(9098),s.e(4854),s.e(8941),s.e(5344),s.e(7887),s.e(2177),s.e(4259),s.e(1694)]).then(s.bind(s,57710))})),E=(0,n.lazy)((function(){return Promise.all([s.e(7054),s.e(9098),s.e(4854),s.e(8941),s.e(5344),s.e(7887),s.e(2177),s.e(4259),s.e(1694)]).then(s.bind(s,57710))})),A=[{title:"Recommendations",path:"/recommendations",component:v},{title:"Recommendations Pathways",path:"/recommendations/pathways",component:v},{title:"Pathway details",path:"/recommendations/pathways/:id",component:R},{title:"Pathway details",path:"/recommendations/pathways/systems/:id",component:R},{title:"Recommendation details",path:"/recommendations/:id",component:w},{title:"Inventory details",path:"/recommendations/:id/:inventoryId/",component:T},{title:"Inventory details",path:"/recommendations/pathways/:id/:inventoryId/",component:T},{title:"Systems",path:"/systems",component:k},{title:"System detail",path:"/systems/:inventoryId/",component:T},{title:"Topics",path:"/topics",component:S},{title:"Topic details",path:"/topics/:id",component:I}],D=function(){var e=(0,n.useState)(!0),t=(0,o.Z)(e,2),s=t[0],a=t[1];return(0,n.useEffect)((function(){try{f().get("".concat("/api/inventory/v1/hosts","?page=1&per_page=1")).then((function(e){var t=e.data;a(t.total>0)}))}catch(e){console.log(e)}}),[s]),i().createElement(n.Suspense,{fallback:i().createElement(y.b,null,i().createElement(p.$,{size:"xl"}))},s?i().createElement(l.Switch,null,A.map((function(e){return i().createElement(l.Route,{key:e.title,path:e.path,exact:!0,component:e.component,rootClass:e.rootClass})})),i().createElement(E,{exact:!0,path:"/topics/admin/manage",component:function(){return i().createElement(P,null)}}),i().createElement(l.Redirect,{path:"*",to:"/recommendations"})):i().createElement(n.Suspense,{fallback:i().createElement(y.b,null,i().createElement(p.$,{size:"xl"}))},i().createElement(g.Z,{appId:"advisor_zero_state",appName:"dashboard",module:"./AppZeroState",scope:"dashboard",ErrorComponent:i().createElement(h.Z,null),app:"Advisor"})))},O=s(30893),L=s(86896),F=s(43707);const x=function(){var e=(0,L.Z)(),t=(0,l.useHistory)().push,s=(0,F.TE)("advisor",m.Gd.viewRecs),y=(0,a.useDispatch)(),p=(0,d.Z)();return(0,n.useEffect)((function(){var e;p.identifyApp("advisor"),null==p||null===(e=p.globalFilterScope)||void 0===e||e.call(p,"insights"),null!=p&&p.globalFilterScope&&p.on("GLOBAL_FILTER_UPDATE",(function(e){var t,s=e.data,n=(null==p||null===(t=p.mapGlobalFilter)||void 0===t?void 0:t.call(p,s,!1,!0))||[],i=(0,o.Z)(n,3),l=i[0],d=i[1],c=i[2];(0,a.batch)((function(){y((0,r.Ic)(l)),y((0,r.PG)(c)),y((0,r.c)(d))}))}));var s=p.on("APP_NAVIGATION",(function(e){e.domEvent&&t("/".concat(e.navId))}));return function(){return s()}}),[]),!(null!=s&&s.isLoading)&&(null!=s&&s.hasAccess?i().createElement(D,null):i().createElement(u.Z,{variant:"large",icon:c.ZP,title:e.formatMessage(O.Z.permsTitle),text:e.formatMessage(O.Z.permsBody)}))}},77647:(e,t,s)=>{s.d(t,{jz:()=>i,om:()=>l,u7:()=>r,yr:()=>a});var o=s(71094),n=s(59303),i=(0,s(69009).LC)({reducerPath:"acks",baseQuery:(0,o.Qi)({baseUrl:n._n}),endpoints:function(e){return{getRecAcks:e.query({query:function(e){return{url:"/ack/".concat(e.ruleId,"/")}}}),getHostAcks:e.query({query:function(e){return{url:"/hostack/",options:e}},transformResponse:function(e){return e.data}}),setAck:e.mutation({query:function(e){return{url:"".concat("RULE"===e.type?"/ack/":"/hostack/"),options:e.options,method:"post"}}})}}}),a=i.useGetRecAcksQuery,r=i.useGetHostAcksQuery,l=i.useSetAckMutation},28672:(e,t,s)=>{s.d(t,{Ic:()=>d,PG:()=>l,ZP:()=>u,c:()=>c,hb:()=>i,lW:()=>r,pu:()=>a});var o=(0,s(85229).oM)({name:"filters",initialState:{recState:{impacting:["true"],rule_status:"enabled",sort:"-total_risk",limit:20,offset:0},pathState:{sort:"-recommendation_level",limit:20,offset:0},sysState:{sort:"-last_seen",limit:20,offset:0},selectedTags:[],workloads:{},SID:[]},reducers:{updateRecFilters:function(e,t){e.recState=t.payload},updateSysFilters:function(e,t){e.sysState=t.payload},updatePathFilters:function(e,t){e.pathState=t.payload},updateTags:function(e,t){e.selectedTags=t.payload},updateWorkloads:function(e,t){e.workloads=t.payload},updateSID:function(e,t){e.SID=t.payload}}}),n=o.actions,i=n.updateRecFilters,a=n.updateSysFilters,r=n.updatePathFilters,l=n.updateTags,d=n.updateWorkloads,c=n.updateSID;const u=o.reducer},8377:(e,t,s)=>{s.d(t,{Lv:()=>a,MJ:()=>i,fQ:()=>r});var o=s(71094),n=s(59303),i=(0,s(69009).LC)({reducerPath:"pathways",baseQuery:(0,o.Qi)({baseUrl:n._n}),keepUnusedDataFor:5,endpoints:function(e){return{getPathways:e.query({query:function(e){return{url:"/pathway/",options:e}}}),getPathway:e.query({query:function(e){return{url:"/pathway/".concat(e.slug,"/"),options:e}}}),getPathwayRules:e.query({query:function(e){return{url:"/pathway/".concat(e,"/rules/")}}}),getPathwaySystems:e.query({query:function(e){return{url:"/pathway/".concat(e,"/systems/")}}})}}}),a=i.useGetPathwaysQuery,r=i.useGetPathwayQuery;i.useGetPathwayRulesQuery,i.useGetPathwaySystemsQuery},75546:(e,t,s)=>{s.d(t,{Bs:()=>a,Fl:()=>i,m1:()=>r});var o=s(71094),n=s(59303),i=(0,s(69009).LC)({reducerPath:"recs",baseQuery:(0,o.Qi)({baseUrl:n._n}),keepUnusedDataFor:5,endpoints:function(e){return{getRecs:e.query({query:function(e){return{url:"/rule/",options:e}}}),getRec:e.query({query:function(e){return{url:"/rule/".concat(e.ruleId,"/"),options:e}}}),getRecSystems:e.query({query:function(e,t){return{url:"/rule/".concat(encodeURI(e.ruleId),"/systems/"),options:e,search:t}}})}}}),a=i.useGetRecsQuery,r=i.useGetRecQuery;i.useGetRecsystemsQuery},77187:(e,t,s)=>{s.d(t,{Fe:()=>a,Fn:()=>i,Yi:()=>r,zv:()=>l});var o=s(71094),n=s(59303),i=(0,s(69009).LC)({reducerPath:"topics",baseQuery:(0,o.Qi)({baseUrl:"".concat(n._n)}),endpoints:function(e){return{getTopics:e.query({query:function(e){return{url:"/topic/",options:e}}}),getTopicsAdmin:e.query({query:function(e){return{url:"/topic?show_disabled=true",options:e}}}),getTopic:e.query({query:function(e){return{url:"/topic/".concat(e.topicId,"/"),options:e}}})}}}),a=i.useGetTopicsQuery,r=i.useGetTopicQuery,l=i.useGetTopicsAdminQuery},46655:(e,t,s)=>{s.d(t,{A:()=>l,V:()=>r});var o=s(4942),n=s(2540);function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){(0,o.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function r(){return(0,n.Gg)((0,o.Z)({},"SELECT_ENTITIES",(function(e,t){var s=t.payload.selected;return a(a({},e),{},{rows:c(e.rows,s)})})))}function l(e){return(0,n.Gg)((0,o.Z)({},"".concat(e.LOAD_ENTITY,"_FULFILLED"),d),{})}function d(e){return a(a({},e),{},{loaded:!0})}var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(e||[]).map((function(e){return a(a({},e),{},{selected:t.includes(e.id)})}))}},41131:(e,t,s)=>{s.d(t,{b:()=>P,U:()=>E});var o,n=s(4942),i=s(85229),a=s(83105),r=s(46655),l=s(77647),d=s(8377),c=s(75546),u=s(59303),m=s(71094),y=(0,s(69009).LC)({reducerPath:"systems",baseQuery:(0,m.Qi)({baseUrl:u._n}),endpoints:function(e){return{getSystems:e.query({query:function(e){return{url:"/system/",options:e}}}),getSystem:e.query({query:function(e,t,s){return{url:"/rule/".concat(encodeURI(e),"/systems/"),options:t,search:s}}})}}}),p=(y.useGetSystemsQuery,y.useLazygetSystemsQuery,y.useGetSystemQuery,y.useLazygetSystemQuery,s(77187)),h=s(28672),b=s(94500),f=s.n(b),g=s(71355),v=s(83215),w=s(68573),R=s.n(w);function T(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function k(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?T(Object(s),!0).forEach((function(t){(0,n.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):T(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var S=(o={},(0,n.Z)(o,d.MJ.reducerPath,d.MJ.reducer),(0,n.Z)(o,c.Fl.reducerPath,c.Fl.reducer),(0,n.Z)(o,p.Fn.reducerPath,p.Fn.reducer),(0,n.Z)(o,y.reducerPath,y.reducer),(0,n.Z)(o,l.jz.reducerPath,l.jz.reducer),(0,n.Z)(o,"filters",h.ZP),(0,n.Z)(o,"notifications",v.ee),(0,n.Z)(o,"systemReducer",(0,r.V)([],{})),(0,n.Z)(o,"entitiesDetailsReducer",(0,r.A)({})),o),I=function(e){return e({serializableCheck:{ignoredActions:["LOAD_ENTITIES","LOAD_ENTITY","CLEAR_FILTERS","LOAD_ENTITY_FULFILLED"]},immutableCheck:{ignoredPaths:["entities"]}}).concat(R(),d.MJ.middleware,c.Fl.middleware,y.middleware,p.Fn.middleware,l.jz.middleware,(0,g.notificationsMiddleware)({errorTitleKey:["message"],errorDescriptionKey:["response.data.detail"]}),f())},P=function(){return(0,i.xC)({reducer:S,middleware:I,devTools:!0})},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.UY)(k(k({},S),e))}},85296:e=>{e.exports=JSON.parse('{"actions":"Actions","adjustFilters":"Adjust your filters and try again.","affectedSystems":"Affected systems","all":"All","ansibleSupportNo":"Manual","ansibleSupportYes":"Ansible playbook","availability":"Availability","byEnabling":"By enabling this recommendation, it will impact {systems, plural, one {# system} other {# systems}}.","cancel":"Cancel","category":"Category","categoryHeader":"Recently identified recommendations by category","countMore":"{count} more","countMoreTags":"{count} more tags available","critical":"Critical","cveAlert":"As of April 20th, 2020, all CVE recommendations previously shown in recommendations have moved over to the Vulnerability section of Red Hat Insights which provides additional capabilities for enhanced CVE identification and remediation.","cveAlertTitle":"CVE recommendations relocated","dateDisabled":"Date disabled","deleteTopic":"Delete topic","description":"Description","disableRule":"Disable recommendation","disableRuleBody":"This recommendation will not be shown in reports and dashboards.","disableRuleForSystems":"Disable recommendation for selected systems","disableRuleSingleSystem":"Disable only for this system","disabled":"Disabled","documentTitle":"{subnav} - Advisor | Red Hat Insights","downloadExecutiveLabel":"Download executive report","dueTo":"- Due to browser limitations, showing the first 1000 systems","enable":"Enable","enableRule":"Enable recommendation","enableRuleForSystems":"Enable this recommendation for all systems","enabled":"Enabled","error":"Error","execReportHeader":"This report is an executive summary of recommendations that may impact your Red Hat Enterprise Linux servers. Red Hat Advisor service is analyzing {systems} and has identified {risks} that impact 1 or more of these systems.","execReportHeaderRisks":"{risks, plural, one {# Risk} other {# Risks}}","execReportHeaderSystems":"{systems, plural, one {# RHEL system} other {# RHEL systems}}","exportCsv":"Export to CSV","exportData":"Export data","exportJson":"Export to JSON","exportPdf":"Export to PDF","featured":"Featured","feedbackThankYou":"Thank you for your feedback!","filterBy":"Filter by name","filterTagsInModal":"Filter tags","filtersApplied":"Filters applied:","firstImpacted":"First impacted","high":"High","hostAckModalTitle":"Recommendation has been disabled for:","impact":"Impact","impactDescription":"The impact of the problem would be {level} if it occurred.","impactLevel":"{level} impact","important":"Important","improveRecommended":"Recommended Pathways","incident":"Incident","incidentRules":"Incident","incidentSystems":"Incident systems","incidentTooltip":"Indicates configurations that are currently affecting your systems","incidents":"Incidents","insightsHeader":"Advisor","installClient":"Install the client on the RHEL system.","introLearnMoreButton":"Learn more about Insights with self-guided onboarding tours in the Resource Center.","invalidPathname":"Invalid pathname","inventoryIdNotFound":"No system found in inventory for the given Advisor ID","is":"is","is not":"is not","justificationNote":"Justification note","knowledgebasearticle":"Knowledgebase article","label":"Label","lastSeen":"Last seen","learnMore":"Learn more","likelihood":"Likelihood","likelihoodDescription":"The likelihood that this will be a problem is {level}.","likelihoodLevel":"{level} likelihood","loading":"Loading...","low":"Low","manual":"Manual","medium":"Medium","moderate":"Moderate","modified":"Modified","nA":"N/A","name":"Name","no":"No","noPathways":"No pathways","noPathwaysAvailable":"No pathways available","noRecommendations":"None of your connected systems are affected by any known recommendations.","noResults":"No results found","noTags":"No tags","nohits.body":"The filter criteria matches no {item}. Try changing your filter settings.","nohits.title":"No matching {item} found","nonIncidentRules":"Non-incident","nonIncidentSystems":"Non-incident systems","none":"None","notAvailable":"N/A","notConnectedBody":"Activate the Insights client for this system to get started.","notConnectedButton":"Learn about the Insights client","notConnectedTitle":"This system is not yet connected to Insights","notRequired":"Not required","numberRuleHits":"Recommendations","oneOrMore":"1 or more","operatingSystem":"Operating system","os":"Os","overview":"Overview","overview.actioncall.title":"Get started with Red Hat Insights","overview.actioncallnosystems.action":"Getting started documentation","overview.actioncallnosystems.body":"With predictive analytics, avoid problems and unplanned <break> </break> downtime in your Red Hat environment. Red Hat Insights is <break> </break> included with your Red Hat Enterprise Linux subscription","overview.categorychart.title":"Recommendations by category","overview.connectsystems.action":"Learn how to connect a system to Insights","overview.connectsystems.body":"Connect at least 10 systems to get a better awareness of issues and optimizations identified across your infastructure","overview.connectsystems.title":"Connect your first systems","overview.deploy.action":"Download Ansible Playbook","overview.deploy.body":"Get more out of Insights with more systems. Quickly connect systems with <linkansible> Ansible </linkansible> or <linkpuppet> Puppet </linkpuppet>","overview.deploy.title":"Deploy Insights at scale","overview.remediate.action":"Get started with Insights and Ansible Playbooks","overview.remediate.body":"Easily generate an Ansible playbook to quickly and effectively remediate Insights findings","overview.remediate.title":"Remediate Insights findings with Ansible","overview.severitychart.title":"Recommendations by severity","overview.systemInventory.OK":"All systes are up to date","overview.systemInventory.Removed":"{systems, plural, one {# system} other {# systems}} to be removed","overview.systemInventory.stale":"{systems, plural, one {# stale system} other {# stale systems}}","overview.systemInventory.title":"System inventory","overviewchart.nohits":"Your connected systems have no categorized recommendations.","pathways":"Pathways","pathwaysName":"Name","pathwaysPanelError":"There was a problem processing the request. Please try again.","performance":"Performance","permsAction":"You do not have the required advisor permissions to perform this action","permsBody":"To view the content of this page, you must be granted permissions to use Advisor from your Organization Administrator.","permsTitle":"You do not have access to Advisor","playbook":"Playbook","poundOfRecs":"# of recommendations","readless":"Read less","readmore":"Read more","reboot":"Reboot","recNumAndPercentage":"{count} ({total}% of total)","recSuccessfullyDisabled":"Recommendation disabled","recSuccessfullyEnabled":"Recommendation enabled","reclvl":"Recommendation level","reclvldetails":"Indicates a recommendation\'s urgency on a scale of high (fix immediately) to low (fix when convenient). Recommendations levels are constantly re-calculated based on your infrastructure\'s number of applicable recommendations, associated risks and total number of impacted systems.","recommendation":"Recommendation","recommendations":"Recommendations","recommended":"Recommended","recommendedPathways":"Recommended pathways group multiple Advisor recommendations under common actions to power more efficient remediation.","redHatInsights":"Red Hat Insights","redhatDisabled":"Red Hat disabled","redhatDisabledRuleAlert":"We want you to focus on the more important risks to your systems. Red Hat disabled recommendations can be found under the Status filter.","redhatDisabledRuleAlertTitle":"Red Hat has proactively disabled certain low risk recommendations","registerSystem":"Register the system to Red Hat Insights.","remediate":"Remediate","remediation":"Remediation","required":"Required","resetFilters":"Reset filters","resolution":"Resolution","riskOfChange":"Risk of change","riskOfChangeLabel":"{level}","riskOfChangeText":"The risk of change is <strong>{ level }</strong>, because the change takes very little time to implement and there is minimal impact to system operations.","riskOfChangeTextFour":"The risk of change is <strong>high</strong>, because the change takes a significant amount of time and planning to execute, and will impact the system and business operations of the host due to downtime.","riskOfChangeTextOne":"The risk of change is <strong>very low</strong>, because the change takes very little time to implement and there is minimal impact to system operations.","riskOfChangeTextThree":"The risk of change is <strong>moderate</strong>, because the change will likely require an outage window.","riskOfChangeTextTwo":"The risk of change is <strong>low</strong>, because the change does not require that a system be taken offline.","rule":"Rule","ruleHelpful":"Is this recommendation helpful?","ruleIsDisabled":"Recommendation is disabled","ruleIsDisabledBody":"This recommendation was disabled and has no results.","ruleIsDisabledBodyWithJustification":"This recommendation has been disabled because {reason} and has no results.","ruleIsDisabledForAllSystems":"Recommendation is disabled for all systems","ruleIsDisabledForSystems":"Recommendation is disabled for some systems","ruleIsDisabledForSystemsBody":"Recommendation is disabled for {systems, plural, one {# system} other {# systems}}","ruleIsDisabledJustification":"This recommendation has been disabled for all systems for the following reason:","ruleIsDisabledTooltip":"Indicates this recommendation across all systems will not be shown in reports and dashboards.","rules":"Rules","rulesDetailsTotalRiskBody":"The total risk of this remediation is <strong>{risk}</strong>, based on the combination of likelihood and impact to remediate.","rulesdetails.modifieddate":"Modified date: {date}","rulestable.action.hide":"Hide recommendations with no impacted systems","rulestable.action.hideDisabled":"Hide disabled recommendations","rulestable.action.show":"Show recommendations with no impacted systems","rulestable.action.showDisabled":"Show disabled recommendations","rulestable.fetchrules.error":"There was an error fetching recommendations list.","rulestable.filter.inputtext":"Find a recommendation...","rulestable.hidereports.errorenabling":"Enabling reports failed","rulestable.norulehits.adddisabledbutton":"Include disabled recommendations","rulestable.norulehits.enabledrulesbody":"None of your connected systems are affected by enabled recommendations.","rulestable.norulehits.enabledrulesbodysecondline":"To find more recommendations, expand your filter settings to include all recommendations.","rulestable.norulehits.title":"No recommendations","rulestable.norules.disabledrulesbody":"We haven\'t detected any issues with your connected systems.","rulestable.norules.disabledrulesbodysecondline":"None of your connected systems are affected by enabled recommendations, and you currently have no disabled recommendations.","rulestable.norules.redhatdisabledrulesbody":"This recommendation was disabled proactively by Red Hat and has no results.","save":"Save","search":"Search","security":"Security","selectAll":"Select all ({items} items)","selectNone":"Select none (0 items)","selectPage":"Select page ({items} items)","severity":"Severity","severityHeader":"Identified recommendations by severity","stability":"Stability","staticRemediationDesc":"To fully remediate all recommendations, there may be additional steps needed.","status":"Status","summarychart.item":"{numIssues} {name} affecting {affectedSystems} {affectedSystems, plural, one {system} other {systems}}","summarychart.itemnohits":"No {severity} hits.","summarychart.nohits":"Your connected systems have no recommendations.","sysTableCount":"This report identified {systems}.","system":"System","systemName":"System name","systemReboot":"System reboot <strong>{ status }</strong> required.","systems":"Systems","systemsExposed":"Systems exposed","systemtable.fetch.error":"There was an error fetching systems","tag":"Tag","tagsApplied":"Tags applied:","thisPathway":"This pathway is expected to improve <strong>{category}</strong> on <strong>{systems, plural, one {# system} other {# systems}}</strong> and resolve <strong>{incidents, plural, one {# incident} other {# incidents}}</strong>.","title":"Title","topThreeRulesHeader":"Top 3 recommendations in your infrastructure","topicAddEditDescription":"Description","topicAddEditDescriptionHelperText":"Shown to users to describe the topic","topicAddEditDisabled":"Disabled (not visible)","topicAddEditEnabled":"Enabled (visible)","topicAddEditFeatureBox":"Feature this topic","topicAddEditLabelHelperText":"Recommendations tagged with this tag will be added to the topic","topicAdminCreate":"Create new topic","topicAdminEdit":"Edit topic","topicAdminTitle":"Topic - administration","topicRelatedToRule":"Topics related to this recommendation","topiccard.systemsaffected":"{systems, plural, one {# system} other {# systems}} affected","topicdetails.nodetails.body":"There exist no further details for this topic.","topicdetails.nodetails.title":"No details for topic","topics":"Topics","topicslist.nohits.body":"To continue, edit your filter settings and search again.","topicslist.notopics.body":"Either no topics presently exist or there is an issue presenting them.","topicslist.notopics.title":"No topics","topicslug":"Slug","total hits":"Total hits","totalRisk":"Total risk","totalRiskPathway":"Total risk of pathway","undefined":"Undefined","veryLow":"Very Low","viewAffectedSystems":"View {systems, plural, one {the affected system} other {# affected systems}}","viewPathway":"View pathway","viewSystems":"View systems","yes":"Yes"}')}}]);