"use strict";(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[9400],{87999:(e,t,s)=>{s.d(t,{Z:()=>w});var o=s(70885),n=s(93264),i=s.n(n),r=s(28216),a=s(28672),l=s(75662),d=s(99332),c=s(34702),u=s(59303),m=s(22938),y=(0,n.lazy)((function(){return s.e(7649).then(s.bind(s,51254))})),h=(0,n.lazy)((function(){return s.e(6743).then(s.bind(s,49552))})),p=[{title:"Recommendations",path:"/recommendations:?",component:y},{title:"Recommendations",path:"/recommendations",component:y},{title:"Pathways",path:"/recommendations/pathways",component:y},{title:"Pathways",path:"/recommendations/pathways:?",component:y},{title:"Pathways",path:"/recommendations/pathways/systems:?",component:y},{title:"Systems",path:"/systems:?",component:h},{title:"Systems",path:"/systems",component:h},{title:"Topics",path:"/topics",component:(0,n.lazy)((function(){return s.e(3645).then(s.bind(s,54947))}))}],b=function(){return i().createElement(n.Suspense,{fallback:i().createElement(m.Bullseye,null,i().createElement(m.Spinner,{size:"xl"}))},i().createElement(l.Switch,null,p.map((function(e){return i().createElement(l.Route,{key:e.title,path:e.path,component:e.component,rootClass:e.rootClass})})),i().createElement(l.Redirect,{path:"/recommendations",to:"".concat(p[1].path),push:!0}),i().createElement(l.Redirect,{path:"*",to:"".concat(p[1].path),push:!0})))},f=s(30893),g=s(86896),v=s(43707);const w=function(){var e=(0,g.Z)(),t=(0,l.useHistory)().push,s=(0,v.TE)("advisor",u.Gd.viewRecs),m=(0,r.useDispatch)();return(0,n.useEffect)((function(){var e,s,n;insights.chrome.init(),insights.chrome.identifyApp("advisor"),null===(e=insights.chrome)||void 0===e||null===(s=e.globalFilterScope)||void 0===s||s.call(e,"insights"),null!==(n=insights.chrome)&&void 0!==n&&n.globalFilterScope&&insights.chrome.on("GLOBAL_FILTER_UPDATE",(function(e){var t,s,n=e.data,i=(null===(t=insights.chrome)||void 0===t||null===(s=t.mapGlobalFilter)||void 0===s?void 0:s.call(t,n,!1,!0))||[],l=(0,o.Z)(i,3),d=l[0],c=l[1],u=l[2];(0,r.batch)((function(){m((0,a.Ic)(d)),m((0,a.PG)(u)),m((0,a.c)(c))}))}));var i=insights.chrome.on("APP_NAVIGATION",(function(e){e.domEvent&&t("/".concat(e.navId))}));return function(){return i()}}),[]),!(null!=s&&s.isLoading)&&(null!=s&&s.hasAccess?i().createElement(b,null):i().createElement(c.Z,{variant:"large",icon:d.ZP,title:e.formatMessage(f.Z.permsTitle),text:e.formatMessage(f.Z.permsBody)}))}},77647:(e,t,s)=>{s.d(t,{jz:()=>i,yr:()=>r,u7:()=>a,om:()=>l});var o=s(71094),n=s(59303),i=(0,s(69009).LC)({reducerPath:"acks",baseQuery:(0,o.Qi)({baseUrl:n._n}),endpoints:function(e){return{getRecAcks:e.query({query:function(e){return{url:"/ack/".concat(e.ruleId,"/")}}}),getHostAcks:e.query({query:function(e){return{url:"/hostack/",options:e}},transformResponse:function(e){return e.data}}),setAck:e.mutation({query:function(e){return{url:"".concat("RULE"===e.type?"/ack/":"/hostack/"),options:e.options,method:"post"}}})}}}),r=i.useGetRecAcksQuery,a=i.useGetHostAcksQuery,l=i.useSetAckMutation},28672:(e,t,s)=>{s.d(t,{hb:()=>i,pu:()=>r,lW:()=>a,PG:()=>l,Ic:()=>d,c:()=>c,ZP:()=>u});var o=(0,s(85229).oM)({name:"filters",initialState:{recState:{impacting:["true"],rule_status:"enabled",sort:"-total_risk",limit:20,offset:0},pathState:{sort:"-recommendation_level",limit:20,offset:0},sysState:{sort:"-last_seen",limit:20,offset:0},selectedTags:[],workloads:{},SID:[]},reducers:{updateRecFilters:function(e,t){e.recState=t.payload},updateSysFilters:function(e,t){e.sysState=t.payload},updatePathFilters:function(e,t){e.pathState=t.payload},updateTags:function(e,t){e.selectedTags=t.payload},updateWorkloads:function(e,t){e.workloads=t.payload},updateSID:function(e,t){e.SID=t.payload}}}),n=o.actions,i=n.updateRecFilters,r=n.updateSysFilters,a=n.updatePathFilters,l=n.updateTags,d=n.updateWorkloads,c=n.updateSID;const u=o.reducer},8377:(e,t,s)=>{s.d(t,{MJ:()=>i,Lv:()=>r,fQ:()=>a});var o=s(71094),n=s(59303),i=(0,s(69009).LC)({reducerPath:"pathways",baseQuery:(0,o.Qi)({baseUrl:n._n}),keepUnusedDataFor:5,endpoints:function(e){return{getPathways:e.query({query:function(e){return{url:"/pathway/",options:e}}}),getPathway:e.query({query:function(e){return{url:"/pathway/".concat(e.slug,"/"),options:e}}}),getPathwayRules:e.query({query:function(e){return{url:"/pathway/".concat(e,"/rules/")}}}),getPathwaySystems:e.query({query:function(e){return{url:"/pathway/".concat(e,"/systems/")}}})}}}),r=i.useGetPathwaysQuery,a=i.useGetPathwayQuery;i.useGetPathwayRulesQuery,i.useGetPathwaySystemsQuery},75546:(e,t,s)=>{s.d(t,{Fl:()=>i,Bs:()=>r,m1:()=>a});var o=s(71094),n=s(59303),i=(0,s(69009).LC)({reducerPath:"recs",baseQuery:(0,o.Qi)({baseUrl:n._n}),keepUnusedDataFor:5,endpoints:function(e){return{getRecs:e.query({query:function(e){return{url:"/rule/",options:e}}}),getRec:e.query({query:function(e){return{url:"/rule/".concat(e.ruleId,"/"),options:e}}}),getRecSystems:e.query({query:function(e,t){return{url:"/rule/".concat(encodeURI(e.ruleId),"/systems/"),options:e,search:t}}})}}}),r=i.useGetRecsQuery,a=i.useGetRecQuery;i.useGetRecsystemsQuery},77187:(e,t,s)=>{s.d(t,{Fn:()=>i,Fe:()=>r,Yi:()=>a,zv:()=>l});var o=s(71094),n=s(59303),i=(0,s(69009).LC)({reducerPath:"topics",baseQuery:(0,o.Qi)({baseUrl:"".concat(n._n)}),endpoints:function(e){return{getTopics:e.query({query:function(e){return{url:"/topic/",options:e}}}),getTopicsAdmin:e.query({query:function(e){return{url:"/topic?show_disabled=true",options:e}}}),getTopic:e.query({query:function(e){return{url:"/topic/".concat(e.topicId,"/"),options:e}}})}}}),r=i.useGetTopicsQuery,a=i.useGetTopicQuery,l=i.useGetTopicsAdminQuery},43032:(e,t,s)=>{s.d(t,{A:()=>d,V:()=>l});var o=s(4942),n=s(61987),i=s(2540);function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){(0,o.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function l(){return(0,i.Gg)((0,o.Z)({},"SELECT_ENTITIES",(function(e,t){var s=t.payload.selected;return a(a({},e),{},{rows:u(e.rows,s)})})))}function d(e){return(0,i.Gg)((0,o.Z)({},"".concat(e.LOAD_ENTITY,"_FULFILLED"),c),{})}function c(e){return a(a({},e),{},{loaded:!0,activeApps:[{title:"Insights",name:"insights",component:n.Z}]})}var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(e||[]).map((function(e){return a(a({},e),{},{selected:t.includes(e.id)})}))}},41131:(e,t,s)=>{s.d(t,{b:()=>A,U:()=>P});var o,n=s(4942),i=s(85229),r=s(83105),a=s(43032),l=s(77647),d=s(8377),c=s(75546),u=s(59303),m=s(71094),y=(0,s(69009).LC)({reducerPath:"systems",baseQuery:(0,m.Qi)({baseUrl:u._n}),endpoints:function(e){return{getSystems:e.query({query:function(e){return{url:"/system/",options:e}}}),getSystem:e.query({query:function(e,t,s){return{url:"/rule/".concat(encodeURI(e),"/systems/"),options:t,search:s}}})}}}),h=(y.useGetSystemsQuery,y.useLazygetSystemsQuery,y.useGetSystemQuery,y.useLazygetSystemQuery,s(77187)),p=s(28672),b=s(94500),f=s.n(b),g=s(71355),v=s(83215),w=s(68573),R=s.n(w);function T(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function k(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?T(Object(s),!0).forEach((function(t){(0,n.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):T(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var S=(o={},(0,n.Z)(o,d.MJ.reducerPath,d.MJ.reducer),(0,n.Z)(o,c.Fl.reducerPath,c.Fl.reducer),(0,n.Z)(o,h.Fn.reducerPath,h.Fn.reducer),(0,n.Z)(o,y.reducerPath,y.reducer),(0,n.Z)(o,l.jz.reducerPath,l.jz.reducer),(0,n.Z)(o,"filters",p.ZP),(0,n.Z)(o,"notifications",v.ee),(0,n.Z)(o,"systemReducer",(0,a.V)([],{})),(0,n.Z)(o,"entitiesDetailsReducer",(0,a.A)({})),o),I=function(e){return e({serializableCheck:{ignoredActions:["LOAD_ENTITIES","LOAD_ENTITY","CLEAR_FILTERS","LOAD_ENTITY_FULFILLED"]},immutableCheck:{ignoredPaths:["entities"]}}).concat(R(),d.MJ.middleware,c.Fl.middleware,y.middleware,h.Fn.middleware,l.jz.middleware,(0,g.notificationsMiddleware)({errorTitleKey:["message"],errorDescriptionKey:["response.data.detail"]}),f())},A=function(){return(0,i.xC)({reducer:S,middleware:I,devTools:!0})},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.UY)(k(k({},S),e))}},85296:e=>{e.exports=JSON.parse('{"actions":"Actions","adjustFilters":"Adjust your filters and try again.","affectedSystems":"Affected systems","all":"All","ansibleSupportNo":"Manual","ansibleSupportYes":"Ansible playbook","availability":"Availability","byEnabling":"By enabling this recommendation, it will impact {systems, plural, one {# system} other {# systems}}.","cancel":"Cancel","category":"Category","categoryHeader":"Recently identified recommendations by category","countMore":"{count} more","countMoreTags":"{count} more tags available","critical":"Critical","cveAlert":"As of April 20th, 2020, all CVE recommendations previously shown in recommendations have moved over to the Vulnerability section of Red Hat Insights which provides additional capabilities for enhanced CVE identification and remediation.","cveAlertTitle":"CVE recommendations relocated","dateDisabled":"Date disabled","deleteTopic":"Delete topic","description":"Description","disableRule":"Disable recommendation","disableRuleBody":"This recommendation will not be shown in reports and dashboards.","disableRuleForSystems":"Disable recommendation for selected systems","disableRuleSingleSystem":"Disable only for this system","disabled":"Disabled","documentTitle":"{subnav} - Advisor | Red Hat Insights","downloadExecutiveLabel":"Download executive report","dueTo":"- Due to browser limitations, showing the first 1000 systems","enable":"Enable","enableRule":"Enable recommendation","enableRuleForSystems":"Enable this recommendation for all systems","enabled":"Enabled","error":"Error","execReportHeader":"This report is an executive summary of recommendations that may impact your Red Hat Enterprise Linux servers. Red Hat Advisor service is analyzing {systems} and has identified {risks} that impact 1 or more of these systems.","execReportHeaderRisks":"{risks, plural, one {# Risk} other {# Risks}}","execReportHeaderSystems":"{systems, plural, one {# RHEL system} other {# RHEL systems}}","exportCsv":"Export to CSV","exportData":"Export data","exportJson":"Export to JSON","exportPdf":"Export to PDF","featured":"Featured","feedbackThankYou":"Thank you for your feedback!","filterBy":"Filter by name","filterTagsInModal":"Filter tags","filtersApplied":"Filters applied:","firstImpacted":"First impacted","high":"High","hostAckModalTitle":"Recommendation has been disabled for:","impact":"Impact","impactDescription":"The impact of the problem would be {level} if it occurred.","impactLevel":"{level} impact","important":"Important","improveRecommended":"Recommended Pathways","incident":"Incident","incidentRules":"Incident","incidentSystems":"Incident systems","incidentTooltip":"Indicates configurations that are currently affecting your systems","incidents":"Incidents","insightsHeader":"Advisor","installClient":"Install the client on the RHEL system.","introLearnMoreButton":"Learn more about Insights with self-guided onboarding tours in the Resource Center.","invalidPathname":"Invalid pathname","inventoryIdNotFound":"No system found in inventory for the given Advisor ID","is":"is","is not":"is not","justificationNote":"Justification note","knowledgebasearticle":"Knowledgebase article","label":"Label","lastSeen":"Last seen","learnMore":"Learn more","likelihood":"Likelihood","likelihoodDescription":"The likelihood that this will be a problem is {level}.","likelihoodLevel":"{level} likelihood","loading":"Loading...","low":"Low","manual":"Manual","medium":"Medium","moderate":"Moderate","modified":"Modified","nA":"N/A","name":"Name","no":"No","noPathways":"No pathways","noPathwaysAvailable":"No pathways available","noRecommendations":"None of your connected systems are affected by any known recommendations.","noResults":"No results found","noTags":"No tags","nohits.body":"The filter criteria matches no {item}. Try changing your filter settings.","nohits.title":"No matching {item} found","nonIncidentRules":"Non-incident","nonIncidentSystems":"Non-incident systems","none":"None","notAvailable":"N/A","notConnectedBody":"Activate the Insights client for this system to get started.","notConnectedButton":"Learn about the Insights client","notConnectedTitle":"This system is not yet connected to Insights","notRequired":"Not required","numberRuleHits":"Recommendations","oneOrMore":"1 or more","operatingSystem":"Operating system","os":"Os","overview":"Overview","overview.actioncall.title":"Get started with Red Hat Insights","overview.actioncallnosystems.action":"Getting started documentation","overview.actioncallnosystems.body":"With predictive analytics, avoid problems and unplanned <break> </break> downtime in your Red Hat environment. Red Hat Insights is <break> </break> included with your Red Hat Enterprise Linux subscription","overview.categorychart.title":"Recommendations by category","overview.connectsystems.action":"Learn how to connect a system to Insights","overview.connectsystems.body":"Connect at least 10 systems to get a better awareness of issues and optimizations identified across your infastructure","overview.connectsystems.title":"Connect your first systems","overview.deploy.action":"Download Ansible Playbook","overview.deploy.body":"Get more out of Insights with more systems. Quickly connect systems with <linkansible> Ansible </linkansible> or <linkpuppet> Puppet </linkpuppet>","overview.deploy.title":"Deploy Insights at scale","overview.remediate.action":"Get started with Insights and Ansible Playbooks","overview.remediate.body":"Easily generate an Ansible playbook to quickly and effectively remediate Insights findings","overview.remediate.title":"Remediate Insights findings with Ansible","overview.severitychart.title":"Recommendations by severity","overview.systemInventory.OK":"All systes are up to date","overview.systemInventory.Removed":"{systems, plural, one {# system} other {# systems}} to be removed","overview.systemInventory.stale":"{systems, plural, one {# stale system} other {# stale systems}}","overview.systemInventory.title":"System inventory","overviewchart.nohits":"Your connected systems have no categorized recommendations.","pathways":"Pathways","pathwaysName":"Name","pathwaysPanelError":"There was a problem processing the request. Please try again.","performance":"Performance","permsAction":"You do not have the required advisor permissions to perform this action","permsBody":"To view the content of this page, you must be granted permissions to use Advisor from your Organization Administrator.","permsTitle":"You do not have access to Advisor","playbook":"Playbook","poundOfRecs":"# of recommendations","readless":"Read less","readmore":"Read more","reboot":"Reboot","recNumAndPercentage":"{count} ({total}% of total)","recSuccessfullyDisabled":"Recommendation disabled","recSuccessfullyEnabled":"Recommendation enabled","reclvl":"Recommendation level","reclvldetails":"Indicates a recommendation\'s urgency on a scale of high (fix immediately) to low (fix when convenient). Recommendations levels are constantly re-calculated based on your infrastructure\'s number of applicable recommendations, associated risks and total number of impacted systems.","recommendation":"Recommendation","recommendations":"Recommendations","recommended":"Recommended","recommendedPathways":"Recommended pathways group multiple Advisor recommendations under common actions to power more efficient remediation.","redHatInsights":"Red Hat Insights","redhatDisabled":"Red Hat disabled","redhatDisabledRuleAlert":"We want you to focus on the more important risks to your systems. Red Hat disabled recommendations can be found under the Status filter.","redhatDisabledRuleAlertTitle":"Red Hat has proactively disabled certain low risk recommendations","registerSystem":"Register the system to Red Hat Insights.","remediate":"Remediate","remediation":"Remediation","required":"Required","resetFilters":"Reset filters","resolution":"Resolution","riskOfChange":"Risk of change","riskOfChangeLabel":"{level}","riskOfChangeText":"The risk of change is <strong>{ level }</strong>, because the change takes very little time to implement and there is minimal impact to system operations.","riskOfChangeTextFour":"The risk of change is <strong>high</strong>, because the change takes a significant amount of time and planning to execute, and will impact the system and business operations of the host due to downtime.","riskOfChangeTextOne":"The risk of change is <strong>very low</strong>, because the change takes very little time to implement and there is minimal impact to system operations.","riskOfChangeTextThree":"The risk of change is <strong>moderate</strong>, because the change will likely require an outage window.","riskOfChangeTextTwo":"The risk of change is <strong>low</strong>, because the change does not require that a system be taken offline.","rule":"Rule","ruleHelpful":"Is this recommendation helpful?","ruleIsDisabled":"Recommendation is disabled","ruleIsDisabledBody":"This recommendation was disabled and has no results.","ruleIsDisabledBodyWithJustification":"This recommendation has been disabled because {reason} and has no results.","ruleIsDisabledForAllSystems":"Recommendation is disabled for all systems","ruleIsDisabledForSystems":"Recommendation is disabled for some systems","ruleIsDisabledForSystemsBody":"Recommendation is disabled for {systems, plural, one {# system} other {# systems}}","ruleIsDisabledJustification":"This recommendation has been disabled for all systems for the following reason:","ruleIsDisabledTooltip":"Indicates this recommendation across all systems will not be shown in reports and dashboards.","rules":"Rules","rulesDetailsTotalRiskBody":"The total risk of this remediation is <strong>{risk}</strong>, based on the combination of likelihood and impact to remediate.","rulesdetails.modifieddate":"Modified date: {date}","rulestable.action.hide":"Hide recommendations with no impacted systems","rulestable.action.hideDisabled":"Hide disabled recommendations","rulestable.action.show":"Show recommendations with no impacted systems","rulestable.action.showDisabled":"Show disabled recommendations","rulestable.fetchrules.error":"There was an error fetching recommendations list.","rulestable.filter.inputtext":"Find a recommendation...","rulestable.hidereports.errorenabling":"Enabling reports failed","rulestable.norulehits.adddisabledbutton":"Include disabled recommendations","rulestable.norulehits.enabledrulesbody":"None of your connected systems are affected by enabled recommendations.","rulestable.norulehits.enabledrulesbodysecondline":"To find more recommendations, expand your filter settings to include all recommendations.","rulestable.norulehits.title":"No recommendations","rulestable.norules.disabledrulesbody":"We haven\'t detected any issues with your connected systems.","rulestable.norules.disabledrulesbodysecondline":"None of your connected systems are affected by enabled recommendations, and you currently have no disabled recommendations.","rulestable.norules.redhatdisabledrulesbody":"This recommendation was disabled proactively by Red Hat and has no results.","save":"Save","search":"Search","security":"Security","selectAll":"Select all ({items} items)","selectNone":"Select none (0 items)","selectPage":"Select page ({items} items)","severity":"Severity","severityHeader":"Identified recommendations by severity","stability":"Stability","staticRemediationDesc":"To fully remediate all recommendations, there may be additional steps needed.","status":"Status","summarychart.item":"{numIssues} {name} affecting {affectedSystems} {affectedSystems, plural, one {system} other {systems}}","summarychart.itemnohits":"No {severity} hits.","summarychart.nohits":"Your connected systems have no recommendations.","sysTableCount":"This report identified {systems}.","system":"System","systemName":"System name","systemReboot":"System reboot <strong>{ status }</strong> required.","systems":"Systems","systemsExposed":"Systems exposed","systemtable.fetch.error":"There was an error fetching systems","tag":"Tag","tagsApplied":"Tags applied:","thisPathway":"This pathway is expected to improve <strong>{category}</strong> on <strong>{systems, plural, one {# system} other {# systems}}</strong> and resolve <strong>{incidents, plural, one {# incident} other {# incidents}}</strong>.","title":"Title","topThreeRulesHeader":"Top 3 recommendations in your infrastructure","topicAddEditDescription":"Description","topicAddEditDescriptionHelperText":"Shown to users to describe the topic","topicAddEditDisabled":"Disabled (not visible)","topicAddEditEnabled":"Enabled (visible)","topicAddEditFeatureBox":"Feature this topic","topicAddEditLabelHelperText":"Recommendations tagged with this tag will be added to the topic","topicAdminCreate":"Create new topic","topicAdminEdit":"Edit topic","topicAdminTitle":"Topic - administration","topicRelatedToRule":"Topics related to this recommendation","topiccard.systemsaffected":"{systems, plural, one {# system} other {# systems}} affected","topicdetails.nodetails.body":"There exist no further details for this topic.","topicdetails.nodetails.title":"No details for topic","topics":"Topics","topicslist.nohits.body":"To continue, edit your filter settings and search again.","topicslist.notopics.body":"Either no topics presently exist or there is an issue presenting them.","topicslist.notopics.title":"No topics","topicslug":"Slug","total hits":"Total hits","totalRisk":"Total risk","totalRiskPathway":"Total risk of pathway","undefined":"Undefined","veryLow":"Very Low","viewAffectedSystems":"View {systems, plural, one {the affected system} other {# affected systems}}","viewPathway":"View pathway","viewSystems":"View systems","yes":"Yes"}')}}]);