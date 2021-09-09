"use strict";(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[838],{87999:(e,t,s)=>{s.d(t,{Z:()=>w});var o=s(29439),n=s(93264),i=s.n(n),r=s(82041),a=s(28672),l=s(75662),c=s(99332),d=s(34702),u=s(59303),m=s(84669),y=(0,n.lazy)((function(){return Promise.all([s.e(410),s.e(891),s.e(649)]).then(s.bind(s,51254))})),p=(0,n.lazy)((function(){return Promise.all([s.e(410),s.e(891),s.e(743)]).then(s.bind(s,49552))})),h=[{title:"Recommendations",path:"/recommendations:?",component:y},{title:"Recommendations",path:"/recommendations",component:y},{title:"Pathways",path:"/recommendations/pathways",component:y},{title:"Pathways",path:"/recommendations/pathways:?",component:y},{title:"Systems",path:"/systems:?",component:p},{title:"Systems",path:"/systems",component:p},{title:"Topics",path:"/topics",component:(0,n.lazy)((function(){return Promise.all([s.e(410),s.e(891),s.e(645)]).then(s.bind(s,54947))}))}],f=function(){return i().createElement(n.Suspense,{fallback:i().createElement(m.Bullseye,null,i().createElement(m.Spinner,{size:"xl"}))},i().createElement(l.Switch,null,h.map((function(e){return i().createElement(l.Route,{key:e.title,path:e.path,component:e.component,rootClass:e.rootClass})})),i().createElement(l.Redirect,{path:"/recommendations",to:"".concat(h[1].path),push:!0}),i().createElement(l.Redirect,{path:"*",to:"".concat(h[1].path),push:!0})))},b=s(30893),g=s(86896),v=s(43707);const w=function(){var e=(0,g.Z)(),t=(0,l.useHistory)().push,s=(0,l.useLocation)().pathname,m=(0,v.T)("advisor",u.Gd.viewRecs),y=(0,n.useState)(!1),p=(0,o.Z)(y,2),h=p[0],w=p[1],R=(0,r.useDispatch)(),S=(0,n.useMemo)((function(){return{recommendations:function(e){insights.chrome.appNavClick({id:"recommendations",redirect:e})},systems:function(e){insights.chrome.appNavClick({id:"systems",redirect:e})},topics:function(e){insights.chrome.appNavClick({id:"topics",redirect:e})}}}),[]);return(0,n.useEffect)((function(){var e,n,i;insights.chrome.init(),insights.chrome.auth.getUser().then((function(){return w(!0)})),insights.chrome.identifyApp("advisor"),null===(e=insights.chrome)||void 0===e||null===(n=e.globalFilterScope)||void 0===n||n.call(e,"insights"),null!==(i=insights.chrome)&&void 0!==i&&i.globalFilterScope&&insights.chrome.on("GLOBAL_FILTER_UPDATE",(function(e){var t,s,n=e.data,i=(null===(t=insights.chrome)||void 0===t||null===(s=t.mapGlobalFilter)||void 0===s?void 0:s.call(t,n,!1,!0))||[],l=(0,o.Z)(i,3),c=l[0],d=l[1],u=l[2];(0,r.batch)((function(){R((0,a.Ic)(c)),R((0,a.PG)(u)),R((0,a.c)(d))}))}));var l=s.split("/")[1],c=insights.chrome.on("APP_NAVIGATION",(function(e){e.domEvent&&(t("/".concat(e.navId)),void 0!==S[l]?S[l](!0):S.recommendations)}));return function(){return c()}}),[]),h&&!(null!=m&&m.isLoading)&&(null!=m&&m.hasAccess?i().createElement(f,null):i().createElement(d.Z,{variant:"large",icon:c.ZP,title:e.formatMessage(b.Z.permsTitle),text:e.formatMessage(b.Z.permsBody)}))}},77647:(e,t,s)=>{s.d(t,{jz:()=>i,yr:()=>r,u7:()=>a,om:()=>l});var o=s(71094),n=s(59303),i=(0,s(22105).LC)({reducerPath:"acks",baseQuery:(0,o.Qi)({baseUrl:n._n}),endpoints:function(e){return{getRecAcks:e.query({query:function(e){return{url:"/ack/".concat(e.ruleId,"/")}}}),getHostAcks:e.query({query:function(e){return{url:"/hostack/",options:e}},transformResponse:function(e){return e.data}}),setAck:e.mutation({query:function(e){return{url:"".concat("RULE"===e.type?"/ack/":"/hostack/"),options:e.options,method:"post"}}})}}}),r=i.useGetRecAcksQuery,a=i.useGetHostAcksQuery,l=i.useSetAckMutation},28672:(e,t,s)=>{s.d(t,{hb:()=>i,pu:()=>r,lW:()=>a,PG:()=>l,Ic:()=>c,c:()=>d,ZP:()=>u});var o=(0,s(24268).oM)({name:"filters",initialState:{recState:{impacting:["true"],rule_status:"enabled",sort:"-total_risk",limit:20,offset:0},pathState:{sort:"-impacted_systems_count",limit:20,offset:0},sysState:{sort:"-last_seen",limit:20,offset:0},selectedTags:null,workloads:{},SID:[]},reducers:{updateRecFilters:function(e,t){e.recState=t.payload},updateSysFilters:function(e,t){e.sysState=t.payload},updatePathFilters:function(e,t){e.pathState=t.payload},updateTags:function(e,t){e.selectedTags=t.payload},updateWorkloads:function(e,t){e.workloads=t.payload},updateSID:function(e,t){e.SID=t.payload}}}),n=o.actions,i=n.updateRecFilters,r=n.updateSysFilters,a=n.updatePathFilters,l=n.updateTags,c=n.updateWorkloads,d=n.updateSID;const u=o.reducer},8377:(e,t,s)=>{s.d(t,{MJ:()=>i,Lv:()=>r});var o=s(71094),n=s(59303),i=(0,s(22105).LC)({reducerPath:"pathways",baseQuery:(0,o.Qi)({baseUrl:n._n}),endpoints:function(e){return{getPathways:e.query({query:function(e){return{url:"/pathway/",options:e}}}),getPathway:e.query({query:function(e){return{url:"/pathway/".concat(e,"/")}}}),getPathwayRules:e.query({query:function(e){return{url:"/pathway/".concat(e,"/rules/")}}}),getPathwaySystems:e.query({query:function(e){return{url:"/pathway/".concat(e,"/systems/")}}})}}}),r=i.useGetPathwaysQuery;i.useGetPathwayQuery,i.useGetPathwayRulesQuery,i.useGetPathwaySystemsQuery},75546:(e,t,s)=>{s.d(t,{Fl:()=>i,Bs:()=>r,m1:()=>a});var o=s(71094),n=s(59303),i=(0,s(22105).LC)({reducerPath:"recs",baseQuery:(0,o.Qi)({baseUrl:n._n}),endpoints:function(e){return{getRecs:e.query({query:function(e){return{url:"/rule/",options:e}}}),getRec:e.query({query:function(e){return{url:"/rule/".concat(e.ruleId,"/"),options:e}}}),getRecSystems:e.query({query:function(e,t){return{url:"/rule/".concat(encodeURI(e.ruleId),"/systems/"),options:e,search:t}}})}}}),r=i.useGetRecsQuery,a=i.useGetRecQuery;i.useGetRecsystemsQuery},77187:(e,t,s)=>{s.d(t,{Fn:()=>i,Fe:()=>r,Yi:()=>a,zv:()=>l});var o=s(71094),n=s(59303),i=(0,s(22105).LC)({reducerPath:"topics",baseQuery:(0,o.Qi)({baseUrl:"".concat(n._n)}),endpoints:function(e){return{getTopics:e.query({query:function(e){return{url:"/topic/",options:e}}}),getTopicsAdmin:e.query({query:function(e){return{url:"/topic?show_disabled=true",options:e}}}),getTopic:e.query({query:function(e){return{url:"/topic/".concat(e.topicId,"/"),options:e}}})}}}),r=i.useGetTopicsQuery,a=i.useGetTopicQuery,l=i.useGetTopicsAdminQuery},46655:(e,t,s)=>{s.d(t,{V:()=>l,A:()=>c});var o=s(4942),n=s(99805),i=s(18546);function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){(0,o.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function l(e,t){return(0,i.Gg)((0,o.Z)({},"".concat(t.LOAD_ENTITIES,"_FULFILLED"),(function(t){var s=t.columns[t.columns.length-1];return e[e.length-1]=a(a({},s),e[e.length-1]),a(a({},t),{},{columns:e.map((function(e){return a(a({},e),t.columns.find((function(t){var s=t.key;return e.key===s})))}))})})))}function c(e){return(0,i.Gg)((0,o.Z)({},"".concat(e.LOAD_ENTITY,"_FULFILLED"),d),{})}function d(e){return a(a({},e),{},{loaded:!0,activeApps:[{title:"Insights",name:"insights",component:n.default}]})}},41131:(e,t,s)=>{s.d(t,{b:()=>P,U:()=>D});var o,n=s(4942),i=s(24268),r=s(49947),a=s(46655),l=s(77647),c=s(8377),d=s(75546),u=s(59303),m=s(71094),y=(0,s(22105).LC)({reducerPath:"systems",baseQuery:(0,m.Qi)({baseUrl:u._n}),endpoints:function(e){return{getSystems:e.query({query:function(e){return{url:"/system/",options:e}}}),getSystem:e.query({query:function(e,t,s){return{url:"/rule/".concat(encodeURI(e),"/systems/"),options:t,search:s}}})}}}),p=(y.useGetSystemsQuery,y.useLazygetSystemsQuery,y.useGetSystemQuery,y.useLazygetSystemQuery,s(77187)),h=s(28672),f=s(94500),b=s.n(f),g=s(71355),v=s(83215),w=s(68573),R=s.n(w),S=s(34155);function k(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function T(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?k(Object(s),!0).forEach((function(t){(0,n.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):k(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var I="production"!=(S&&S.env?"production":"development"),A=(o={},(0,n.Z)(o,c.MJ.reducerPath,c.MJ.reducer),(0,n.Z)(o,d.Fl.reducerPath,d.Fl.reducer),(0,n.Z)(o,p.Fn.reducerPath,p.Fn.reducer),(0,n.Z)(o,y.reducerPath,y.reducer),(0,n.Z)(o,l.jz.reducerPath,l.jz.reducer),(0,n.Z)(o,"filters",h.ZP),(0,n.Z)(o,"notifications",v.ee),(0,n.Z)(o,"systemReducer",(0,a.V)([],{})),(0,n.Z)(o,"entitiesDetailsReducer",(0,a.A)({})),o),E=function(e){return e({serializableCheck:{ignoredActions:["LOAD_ENTITIES","LOAD_ENTITY","CLEAR_FILTERS","LOAD_ENTITY_FULFILLED"]},immutableCheck:{ignoredPaths:["entities"]}}).concat(R(),c.MJ.middleware,d.Fl.middleware,y.middleware,p.Fn.middleware,l.jz.middleware,(0,g.uv)({errorTitleKey:["message"],errorDescriptionKey:["response.data.detail"]}),I&&b())},P=function(){return(0,i.xC)({reducer:A,middleware:E,devTools:I})},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.combineReducers)(T(T({},A),e))}},83130:e=>{e.exports=JSON.parse('{"en":{"actions":"Actions","added":"Added","adjustFilters":"Adjust your filters and try again.","affectedSystems":"Affected systems","all":"All","ansible":"Ansible","ansibleSupportNo":"No Ansible remediation support","ansibleSupportYes":"Ansible remediation support","availability":"Availability","byEnabling":"By enabling this recommendation, it will impact {systems, plural, one {# system} other {# systems}}.","cancel":"Cancel","category":"Category","categoryHeader":"Recently identified recommendations by category","countMore":"{count} more","countMoreTags":"{count} more tags available","critical":"Critical","cveAlert":"As of April 20th, 2020, all CVE recommendations previously shown in recommendations have moved over to the Vulnerability section of Red Hat Insights which provides additional capabilities for enhanced CVE identification and remediation.","cveAlertTitle":"CVE recommendations relocated","dateDisabled":"Date disabled","deleteTopic":"Delete topic","description":"Description","disableRule":"Disable recommendation","disableRuleBody":"This recommendation will not be shown in reports and dashboards.","disableRuleForSystems":"Disable recommendation for selected systems","disableRuleSingleSystem":"Disable only for this system","disabled":"Disabled","documentTitle":"{subnav} - Advisor | Red Hat Insights","downloadExecutiveLabel":"Download executive report","dueTo":"- Due to browser limitations, showing the first 1000 systems","enable":"Enable","enableRule":"Enable recommendation","enableRuleForSystems":"Enable this recommendation for all systems","enabled":"Enabled","error":"Error","execReportHeader":"This report is an executive summary of recommendations that may impact your Red Hat Enterprise Linux servers. Red Hat Advisor service is analyzing {systems} and has identified {risks} that impact 1 or more of these systems.","execReportHeaderRisks":"{risks, plural, one {# Risk} other {# Risks}}","execReportHeaderSystems":"{systems, plural, one {# RHEL system} other {# RHEL systems}}","exportCsv":"Export to CSV","exportData":"Export data","exportJson":"Export to JSON","exportPdf":"Export to PDF","featured":"Featured","feedbackThankyou":"Thank you for your feedback!","filterBy":"Filter by name","filterTagsInModal":"Filter tags","filtersApplied":"Filters applied:","high":"High","hostAckModalTitle":"Recommendation has been disabled for:","impact":"Impact","impactDescription":"The impact of the problem would be {level} if it occurred.","impactLevel":"{level} impact","important":"Important","improveRecommended":"Improve recommended pathways","incident":"Incident","incidentRules":"Incident recommendations","incidentSystems":"Incident systems","incidentTooltip":"Indicates configurations that are currently affecting your systems","incidents":"Incidents","insightsHeader":"Advisor","installClient":"Install the client on the RHEL system.","invalidPathname":"Invalid pathname","inventoryIdNotFound":"No system found in inventory for the given Advisor ID","is":"is","is not":"is not","justificationNote":"Justification note","knowledgebasearticle":"Knowledgebase article","label":"Label","lastSeen":"Last seen","learnMore":"Learn more","likelihood":"Likelihood","likelihoodDescription":"The likelihood that this will be a problem is {level}.","likelihoodLevel":"{level} likelihood","loading":"Loading...","low":"Low","medium":"Medium","moderate":"Moderate","nA":"N/A","name":"Name","no":"No","noPathways":"No pathways","noRecommendations":"None of your connected systems are affected by any known recommendations.","noResults":"No results found","nohits.body":"The filter criteria matches no {item}. Try changing your filter settings.","nohits.title":"No matching {item} found","nonIncidentRules":"Non-incident recommendations","nonIncidentSystems":"Non-incident systems","none":"None","notRequired":"Not required","numberRuleHits":"Recommendations","oneOrMore":"1 or more","operatingSystem":"Operating system","os":"Os","overview":"Overview","overview.actioncall.title":"Get started with Red Hat Insights","overview.actioncallnosystems.action":"Getting started documentation","overview.actioncallnosystems.body":"With predictive analytics, avoid problems and unplanned <break> </break> downtime in your Red Hat environment. Red Hat Insights is <break> </break> included with your Red Hat Enterprise Linux subscription","overview.categorychart.title":"Recommendations by category","overview.connectsystems.action":"Learn how to connect a system to Insights","overview.connectsystems.body":"Connect at least 10 systems to get a better awareness of issues and optimizations identified across your infastructure","overview.connectsystems.title":"Connect your first systems","overview.deploy.action":"Download Ansible Playbook","overview.deploy.body":"Get more out of Insights with more systems. Quickly connect systems with <linkansible> Ansible </linkansible> or <linkpuppet> Puppet </linkpuppet>","overview.deploy.title":"Deploy Insights at scale","overview.remediate.action":"Get started with Insights and Ansible Playbooks","overview.remediate.body":"Easily generate an Ansible playbook to quickly and effectively remediate Insights findings","overview.remediate.title":"Remediate Insights findings with Ansible","overview.severitychart.title":"Recommendations by severity","overview.systemInventory.OK":"All systes are up to date","overview.systemInventory.Removed":"{systems, plural, one {# system} other {# systems}} to be removed","overview.systemInventory.stale":"{systems, plural, one {# stale system} other {# stale systems}}","overview.systemInventory.title":"System inventory","overviewchart.nohits":"Your connected systems have no categorized recommendations.","pathway":"Pathway","pathways":"Pathways","performance":"Performance","permsAction":"You do not have the required advisor permissions to perform this action","permsBody":"To view the content of this page, you must be grated a minimum of advisor permissions from your Organization Administrator.","permsTitle":"You do not have access to Advisor","poundOfRecs":"# of recommendations","readless":"Read less","readmore":"Read more","reboot":"Reboot","recNumAndPercentage":"{count} ({total}% of total)","recSuccessfullyDisabled":"Recommendation successfully disabled","recSuccessfullyDisabledForSystem":"Recommendation successfully disabled for selected system(s)","recSuccessfullyEnabled":"Recommendation successfully enabled","recSuccessfullyEnabledForSystem":"Recommendation successfully enabled for selected system(s)","reclvl":"Recommendation level","reclvldetails":"Indicates a recommendation\'s urgency on a scale of high (fix immediately) to low (fix when convenient). Recommendations levels are constantly re-calculated based on your infrastructure\'s number of applicable recommendations, associated risks and total number of impacted systems.","recommendation":"Recommendation","recommendations":"Recommendations","recommended":"Recommended","recommendedPathways":"Recommended pathways group multiple Advisor recommendations under common actions to power more efficient remediation.","redHatInsights":"Red Hat Insights","redhatDisabled":"Red Hat disabled","redhatDisabledRuleAlert":"We want you to focus on the more important risks to your systems. Red Hat disabled recommendations can be found under the Status filter.","redhatDisabledRuleAlertTitle":"Red Hat has proactively disabled certain low risk recommendations","registerSystem":"Register the system to Red Hat Insights.","remediate":"Remediate","required":"Required","resetFilters":"Reset filters","riskOfChangeTextFour":"The risk of change is <strong>high</strong>, because the change takes a significant amount of time and planning to execute, and will impact the system and business operations of the host due to downtime.","riskOfChangeTextOne":"The risk of change is <strong>very low</strong>, because the change takes very little time to implement and there is minimal impact to system operations.","riskOfChangeTextThree":"The risk of change is <strong>moderate</strong>, because the change will likely require an outage window.","riskOfChangeTextTwo":"The risk of change is <strong>low</strong>, because the change does not require that a system be taken offline.","riskofchange":"Risk of change","rule":"Rule","ruleHelpful":"Is this recommendation helpful?","ruleIsDisabled":"Recommendation is disabled","ruleIsDisabledBody":"This recommendation has been disabled and has no results.","ruleIsDisabledForAllSystems":"Recommendation is disabled for all systems","ruleIsDisabledForSystems":"Recommendation is disabled for some systems","ruleIsDisabledForSystemsBody":"Recommendation is disabled for {systems, plural, one {# system} other {# systems}}","ruleIsDisabledJustification":"This recommendation has been disabled for all systems for the following reason:","ruleIsDisabledTooltip":"Indicates this recommendation across all systems will not be shown in reports and dashboards.","rules":"Rules","rulesdetails.publishdate":"Publish date: {date}","rulesdetails.totalriskbody":"The total risk of this remediation is <strong>{risk}</strong>, based on the combination of likelihood and impact to remediate.","rulestable.action.hide":"Hide recommendations with no impacted systems","rulestable.action.hideDisabled":"Hide disabled recommendations","rulestable.action.show":"Show recommendations with no impacted systems","rulestable.action.showDisabled":"Show disabled recommendations","rulestable.fetchrules.error":"There was an error fetching recommendations list.","rulestable.filter.inputtext":"Find a recommendation...","rulestable.hidereports.errorenabling":"Enabling reports failed","rulestable.norulehits.adddisabledbutton":"Include disabled recommendations","rulestable.norulehits.enabledrulesbody":"None of your connected systems are affected by enabled recommendations.","rulestable.norulehits.title":"No recommendations","rulestable.norules.disabledrulesbody":"Currently there are no disabled recommendations.","rulestable.norules.redhatdisabledrulesbody":"Currently there are no Red Hat disabled recommendations.","save":"Save","search":"Search","security":"Security","selectAll":"Select all ({items} items)","selectNone":"Select none (0 items)","selectPage":"Select page ({items} items)","severity":"Severity","severityHeader":"Identified recommendations by severity","stability":"Stability","status":"Status","summarychart.item":"{numIssues} {name} affecting {affectedSystems} {affectedSystems, plural, one {system} other {systems}}","summarychart.itemnohits":"No {severity} hits.","summarychart.nohits":"Your connected systems have no recommendations.","sysTableCount":"This report identified {systems}.","system":"System","systemName":"System name","systemReboot":"System reboot <strong>{ status }</strong> required.","systems":"Systems","systemsExposed":"Systems exposed","systemtable.fetch.error":"There was an error fetching systems","tag":"Tag","tagsApplied":"Tags applied:","title":"Title","topThreeRulesHeader":"Top 3 recommendations in your infrastructure","topicAddEditDescription":"Description","topicAddEditDescriptionHelperText":"Shown to users to describe the topic","topicAddEditDisabled":"Disabled (not visible)","topicAddEditEnabled":"Enabled (visible)","topicAddEditFeatureBox":"Feature this topic","topicAddEditLabelHelperText":"Recommendations tagged with this tag will be added to the topic","topicAdminCreate":"Create new topic","topicAdminEdit":"Edit topic","topicAdminTitle":"Topic - administration","topicRelatedToRule":"Topics related to this recommendation","topiccard.systemsaffected":"{systems, plural, one {# system} other {# systems}} affected","topicdetails.nodetails.body":"There exist no further details for this topic.","topicdetails.nodetails.title":"No details for topic","topics":"Topics","topicslist.notopics.body":"Either no topics presently exist or there is an issue presenting them.","topicslist.notopics.title":"No topics","topicslug":"Slug","total hits":"Total hits","totalRisk":"Total risk","undefined":"Undefined","veryLow":"Very Low","viewAffectedSystems":"View {systems, plural, one {the affected system} other {# affected systems}}","viewPathway":"View pathway","viewSystems":"View systems","yes":"Yes"}}')}}]);
//# sourceMappingURL=../sourcemaps/838.cfca7b850ae908219140cd5cfa0114a6.js.map