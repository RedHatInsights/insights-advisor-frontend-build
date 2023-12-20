"use strict";(self.webpackChunkadvisor=self.webpackChunkadvisor||[]).push([[9400],{87999:(e,t,s)=>{s.d(t,{Z:()=>I});var n=s(70885),o=s(93264),i=s.n(o),a=s(28216),r=s(28672),l=s(55140),d=s(99332),c=s(34702),m=s(59303),u=s(62012),y=s(25870),p=(0,o.lazy)((function(){return Promise.all([s.e(3631),s.e(8895),s.e(836),s.e(4854),s.e(8797),s.e(7945),s.e(7887),s.e(8764),s.e(5836),s.e(7330),s.e(3307),s.e(7780),s.e(6310),s.e(8754),s.e(6390),s.e(2185),s.e(2811),s.e(8257),s.e(271),s.e(7413),s.e(2280),s.e(2217),s.e(7015),s.e(7009)]).then(s.bind(s,40528))})),h=(0,o.lazy)((function(){return Promise.all([s.e(3631),s.e(8895),s.e(836),s.e(4854),s.e(8797),s.e(8764),s.e(7330),s.e(6310),s.e(6390),s.e(2185),s.e(4792),s.e(4546)]).then(s.bind(s,40597))})),b=(0,o.lazy)((function(){return Promise.all([s.e(8895),s.e(7945),s.e(5836),s.e(7780),s.e(8754),s.e(6390),s.e(2811),s.e(6368),s.e(6816),s.e(7015),s.e(1177)]).then(s.bind(s,79364))})),f=(0,o.lazy)((function(){return Promise.all([s.e(3631),s.e(8895),s.e(836),s.e(4854),s.e(7945),s.e(7887),s.e(8764),s.e(5836),s.e(7330),s.e(7780),s.e(7623),s.e(271),s.e(4025),s.e(3815),s.e(1143)]).then(s.bind(s,81147))})),v=(0,o.lazy)((function(){return Promise.all([s.e(8895),s.e(7945),s.e(8764),s.e(2811),s.e(8257),s.e(9306),s.e(2280),s.e(2217),s.e(6842)]).then(s.bind(s,3443))})),g=(0,o.lazy)((function(){return Promise.all([s.e(3631),s.e(8895),s.e(836),s.e(4854),s.e(7945),s.e(7887),s.e(5836),s.e(271),s.e(7641)]).then(s.bind(s,37468))})),w=(0,o.lazy)((function(){return Promise.all([s.e(3631),s.e(8895),s.e(836),s.e(4854),s.e(8797),s.e(7945),s.e(7887),s.e(8764),s.e(5836),s.e(7330),s.e(3307),s.e(6310),s.e(6390),s.e(271),s.e(7413),s.e(4683)]).then(s.bind(s,95413))})),R=(0,o.lazy)((function(){return Promise.all([s.e(3631),s.e(8895),s.e(836),s.e(4854),s.e(8797),s.e(7945),s.e(7887),s.e(5836),s.e(271),s.e(1694)]).then(s.bind(s,90603))})),E=function(){return i().createElement(y.v,null,i().createElement(u.Routes,null,i().createElement(u.Route,{key:"Recommendations",path:"recommendations",element:i().createElement(p,null)}),i().createElement(u.Route,{key:"Recommendations Pathways",path:"recommendations/pathways",element:i().createElement(p,null)}),i().createElement(u.Route,{key:"Pathway details",path:"recommendations/pathways/:id",element:i().createElement(b,null)}),i().createElement(u.Route,{key:"Pathway details",path:"recommendations/pathways/systems/:id",element:i().createElement(b,null)}),i().createElement(u.Route,{key:"Pathway details",path:"recommendations/pathways/:id/manage-edge-inventory",element:i().createElement(b,{isImmutableTabOpen:!0})}),i().createElement(u.Route,{key:"Recommendation details",path:"recommendations/:id",element:i().createElement(h,null)}),i().createElement(u.Route,{key:"Recommendation details",path:"recommendations/:id/manage-edge-inventory",element:i().createElement(h,{isImmutableTabOpen:!0})}),i().createElement(u.Route,{key:"Inventory details",path:"recommendations/:id/:inventoryId/",element:i().createElement(f,null)}),i().createElement(u.Route,{key:"Inventory details",path:"recommendations/pathways/:id/:inventoryId/",element:i().createElement(f,null)}),i().createElement(u.Route,{key:"Inventory details",path:"recommendations/pathways/systems/:id/:inventoryId/",element:i().createElement(f,null)}),i().createElement(u.Route,{key:"Systems",path:"systems",element:i().createElement(v,null)}),i().createElement(u.Route,{key:"System detail",path:"systems/:inventoryId/",element:i().createElement(f,null)}),i().createElement(u.Route,{key:"Topics",path:"topics",element:i().createElement(g,null)}),i().createElement(u.Route,{key:"Topic details",path:"topics/:id",element:i().createElement(w,null)}),i().createElement(u.Route,{key:"Advisor",path:"*",element:i().createElement(u.Navigate,{replace:!0,to:"recommendations"})}),i().createElement(u.Route,{key:"TopicAdmin",path:"/topics/admin/manage",element:i().createElement(R,null)})))},k=s(30893),T=s(86896),S=s(43707);const I=function(){var e=(0,T.Z)(),t=(0,S.TE)("advisor",m.Gd.viewRecs),s=(0,a.useDispatch)(),u=(0,l.Z)();return(0,o.useEffect)((function(){var e;u.identifyApp("advisor"),null==u||null===(e=u.globalFilterScope)||void 0===e||e.call(u,"insights"),null!=u&&u.globalFilterScope&&u.on("GLOBAL_FILTER_UPDATE",(function(e){var t,o=e.data,i=(null==u||null===(t=u.mapGlobalFilter)||void 0===t?void 0:t.call(u,o,!1,!0))||[],l=(0,n.Z)(i,3),d=l[0],c=l[1],m=l[2];(0,a.batch)((function(){s((0,r.Ic)(d)),s((0,r.PG)(m)),s((0,r.c)(c))}))}))}),[]),!(null!=t&&t.isLoading)&&(null!=t&&t.hasAccess?i().createElement(E,null):i().createElement(c.Z,{variant:"large",icon:d.ZP,title:e.formatMessage(k.Z.permsTitle),text:e.formatMessage(k.Z.permsBody)}))}},77647:(e,t,s)=>{s.d(t,{jz:()=>i,om:()=>l,u7:()=>r,yr:()=>a});var n=s(71094),o=s(59303),i=(0,s(69009).LC)({reducerPath:"acks",baseQuery:(0,n.Qi)({baseUrl:o._n}),endpoints:function(e){return{getRecAcks:e.query({query:function(e){return{url:"/ack/".concat(e.ruleId,"/")}}}),getHostAcks:e.query({query:function(e){return{url:"/hostack/",options:e}},transformResponse:function(e){return e.data}}),setAck:e.mutation({query:function(e){return{url:"".concat("RULE"===e.type?"/ack/":"/hostack/"),options:e.options,method:"post"}}})}}}),a=i.useGetRecAcksQuery,r=i.useGetHostAcksQuery,l=i.useSetAckMutation},28672:(e,t,s)=>{s.d(t,{Ic:()=>m,PG:()=>c,ZP:()=>y,c:()=>u,hZ:()=>o,hb:()=>r,lW:()=>d,pu:()=>l});var n=s(85229),o={recState:{impacting:["true"],rule_status:"enabled",sort:"-total_risk",limit:20,offset:0},pathState:{sort:"-recommendation_level",limit:20,offset:0},sysState:{sort:"-last_seen",limit:20,offset:0},selectedTags:[],workloads:{},SID:[]},i=(0,n.oM)({name:"filters",initialState:o,reducers:{updateRecFilters:function(e,t){e.recState=t.payload},updateSysFilters:function(e,t){e.sysState=t.payload},updatePathFilters:function(e,t){e.pathState=t.payload},updateTags:function(e,t){e.selectedTags=t.payload},updateWorkloads:function(e,t){e.workloads=t.payload},updateSID:function(e,t){e.SID=t.payload}}}),a=i.actions,r=a.updateRecFilters,l=a.updateSysFilters,d=a.updatePathFilters,c=a.updateTags,m=a.updateWorkloads,u=a.updateSID;const y=i.reducer},8377:(e,t,s)=>{s.d(t,{Lv:()=>a,MJ:()=>i,fQ:()=>r});var n=s(71094),o=s(59303),i=(0,s(69009).LC)({reducerPath:"pathways",baseQuery:(0,n.Qi)({baseUrl:o._n}),keepUnusedDataFor:5,endpoints:function(e){return{getPathways:e.query({query:function(e){return{url:"/pathway/",options:e}}}),getPathway:e.query({query:function(e){return{url:"/pathway/".concat(e.slug,"/"),options:e}}}),getPathwayRules:e.query({query:function(e){return{url:"/pathway/".concat(e,"/rules/")}}}),getPathwaySystems:e.query({query:function(e){return{url:"/pathway/".concat(e,"/systems/")}}})}}}),a=i.useGetPathwaysQuery,r=i.useGetPathwayQuery;i.useGetPathwayRulesQuery,i.useGetPathwaySystemsQuery},75546:(e,t,s)=>{s.d(t,{Bs:()=>a,Fl:()=>i,m1:()=>r});var n=s(71094),o=s(59303),i=(0,s(69009).LC)({reducerPath:"recs",baseQuery:(0,n.Qi)({baseUrl:o._n}),keepUnusedDataFor:5,endpoints:function(e){return{getRecs:e.query({query:function(e){return{url:"/rule/",options:e}}}),getRec:e.query({query:function(e){return{url:"/rule/".concat(e.ruleId,"/"),options:e}}}),getRecSystems:e.query({query:function(e,t){return{url:"/rule/".concat(encodeURI(e.ruleId),"/systems/"),options:e,search:t}}})}}}),a=i.useGetRecsQuery,r=i.useGetRecQuery;i.useGetRecsystemsQuery},77187:(e,t,s)=>{s.d(t,{Fe:()=>a,Fn:()=>i,Yi:()=>r,zv:()=>l});var n=s(71094),o=s(59303),i=(0,s(69009).LC)({reducerPath:"topics",baseQuery:(0,n.Qi)({baseUrl:"".concat(o._n)}),endpoints:function(e){return{getTopics:e.query({query:function(e){return{url:"/topic/",options:e}}}),getTopicsAdmin:e.query({query:function(e){return{url:"/topic?show_disabled=true",options:e}}}),getTopic:e.query({query:function(e){return{url:"/topic/".concat(e.topicId,"/"),options:e}}})}}}),a=i.useGetTopicsQuery,r=i.useGetTopicQuery,l=i.useGetTopicsAdminQuery},46655:(e,t,s)=>{s.d(t,{A:()=>l,V:()=>r});var n=s(4942),o=s(2540);function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){(0,n.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function r(){return(0,o.Gg)((0,n.Z)({},"SELECT_ENTITIES",(function(e,t){var s=t.payload.selected;return a(a({},e),{},{rows:c(e.rows,s)})})))}function l(e){return(0,o.Gg)((0,n.Z)({},"".concat(e.LOAD_ENTITY,"_FULFILLED"),d),{})}function d(e){return a(a({},e),{},{loaded:!0})}var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(e||[]).map((function(e){return a(a({},e),{},{selected:t.includes(e.id)})}))}},41131:(e,t,s)=>{s.d(t,{b:()=>I,U:()=>A});var n,o=s(4942),i=s(85229),a=s(83105),r=s(46655),l=s(77647),d=s(8377),c=s(75546),m=s(59303),u=s(71094),y=(0,s(69009).LC)({reducerPath:"systems",baseQuery:(0,u.Qi)({baseUrl:m._n}),endpoints:function(e){return{getSystems:e.query({query:function(e){return{url:"/system/",options:e}}}),getSystem:e.query({query:function(e,t,s){return{url:"/rule/".concat(encodeURI(e),"/systems/"),options:t,search:s}}})}}}),p=(y.useGetSystemsQuery,y.useLazygetSystemsQuery,y.useGetSystemQuery,y.useLazygetSystemQuery,s(77187)),h=s(28672),b=s(94500),f=s.n(b),v=s(71355),g=s(83215),w=s(68573),R=s.n(w);function E(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function k(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?E(Object(s),!0).forEach((function(t){(0,o.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):E(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var T=(n={},(0,o.Z)(n,d.MJ.reducerPath,d.MJ.reducer),(0,o.Z)(n,c.Fl.reducerPath,c.Fl.reducer),(0,o.Z)(n,p.Fn.reducerPath,p.Fn.reducer),(0,o.Z)(n,y.reducerPath,y.reducer),(0,o.Z)(n,l.jz.reducerPath,l.jz.reducer),(0,o.Z)(n,"filters",h.ZP),(0,o.Z)(n,"notifications",g.ee),(0,o.Z)(n,"systemReducer",(0,r.V)([],{})),(0,o.Z)(n,"entitiesDetailsReducer",(0,r.A)({})),n),S=function(e){return e({serializableCheck:{ignoredActions:["LOAD_ENTITIES","LOAD_ENTITY","CLEAR_FILTERS","LOAD_ENTITY_FULFILLED"]},immutableCheck:{ignoredPaths:["entities"]}}).concat(R(),d.MJ.middleware,c.Fl.middleware,y.middleware,p.Fn.middleware,l.jz.middleware,(0,v.notificationsMiddleware)({errorTitleKey:["message"],errorDescriptionKey:["response.data.detail"]}),f())},I=function(){return(0,i.xC)({reducer:T,middleware:S,devTools:!0})},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.UY)(k(k({},T),e))}},91607:(e,t,s)=>{s.d(t,{y:()=>o});var n=s(65220),o=function(e){var t=(0,n.useFlagsStatus)().flagsReady,s=(0,n.useFlag)(e);return!!t&&s}},25870:(e,t,s)=>{s.d(t,{I:()=>g,v:()=>w});var n=s(70885),o=s(93264),i=s.n(o),a=s(52643),r=s(37619),l=s(22663),d=s(2443),c=s(45697),m=s.n(c),u=s(9669),y=s.n(u),p=s(53446),h=s(28216),b=s(86896),f=s(30893),v=s(91607),g=(0,o.createContext)({hasConventionalSystems:!0,hasEdgeDevices:!1}),w=function(e){var t=e.children,s=(0,b.Z)(),c=(0,h.useDispatch)(),m=(0,v.y)("advisor.edge_parity"),u=(0,o.useState)(!0),w=(0,n.Z)(u,2),R=w[0],E=w[1],k=(0,o.useState)(!0),T=(0,n.Z)(k,2),S=T[0],I=T[1];(0,o.useEffect)((function(){try{y().get("/api/inventory/v1/hosts?page=1&per_page=1&filter[system_profile][host_type]=nil").then((function(e){var t=e.data;E(t.total>0)})),y().get("/api/inventory/v1/hosts?page=1&per_page=1&filter[system_profile][host_type]=edge").then((function(e){var t=e.data;I(t.total>0)}))}catch(e){c((0,p.addNotification)({variant:"danger",dismissable:!0,title:s.formatMessage(f.Z.error),description:"".concat(e)}))}}),[]);var A=m&&S||R;return i().createElement(o.Suspense,{fallback:i().createElement(a.b,null,i().createElement(r.$,{size:"xl"}))},A?i().createElement(g.Provider,{value:{hasConventionalSystems:R,hasEdgeDevices:S}},t):i().createElement(o.Suspense,{fallback:i().createElement(a.b,null,i().createElement(r.$,{size:"xl"}))},i().createElement(l.Z,{appId:"advisor_zero_state",appName:"dashboard",module:"./AppZeroState",scope:"dashboard",ErrorComponent:i().createElement(d.Z,null),app:"Advisor"})))};w.propTypes={children:m().element,check:m().boolean}},85296:e=>{e.exports=JSON.parse('{"actions":"Actions","adjustFilters":"Adjust your filters and try again.","affectedSystems":"Affected systems","all":"All","ansibleSupportNo":"Manual","ansibleSupportYes":"Ansible playbook","availability":"Availability","byEnabling":"By enabling this recommendation, it will impact {systems, plural, one {# system} other {# systems}}.","cancel":"Cancel","category":"Category","categoryHeader":"Recently identified recommendations by category","countMore":"{count} more","countMoreTags":"{count} more tags available","critical":"Critical","cveAlert":"As of April 20th, 2020, all CVE recommendations previously shown in recommendations have moved over to the Vulnerability section of Red Hat Insights which provides additional capabilities for enhanced CVE identification and remediation.","cveAlertTitle":"CVE recommendations relocated","dateDisabled":"Date disabled","deleteTopic":"Delete topic","description":"Description","disableRule":"Disable recommendation","disableRuleBody":"This recommendation will not be shown in reports and dashboards.","disableRuleForSystems":"Disable recommendation for selected systems","disableRuleSingleSystem":"Disable only for this system","disabled":"Disabled","documentTitle":"{subnav} - Advisor | Red Hat Insights","downloadExecutiveLabel":"Download executive report","dueTo":"- Due to browser limitations, showing the first 1000 systems","enable":"Enable","enableRule":"Enable recommendation","enableRuleForSystems":"Enable this recommendation for all systems","enabled":"Enabled","error":"Error","execReportHeader":"This report is an executive summary of recommendations that may impact your Red Hat Enterprise Linux servers. Red Hat Advisor service is analyzing {systems} and has identified {risks} that impact 1 or more of these systems.","execReportHeaderRisks":"{risks, plural, one {# Risk} other {# Risks}}","execReportHeaderSystems":"{systems, plural, one {# RHEL system} other {# RHEL systems}}","exportCsv":"Export to CSV","exportData":"Export data","exportJson":"Export to JSON","exportPdf":"Export to PDF","featured":"Featured","feedbackThankYou":"Thank you for your feedback!","filterBy":"Filter by name","filterTagsInModal":"Filter tags","filtersApplied":"Filters applied:","firstImpacted":"First impacted","high":"High","hostAckModalTitle":"Recommendation has been disabled for:","impact":"Impact","impactDescription":"The impact of the problem would be {level} if it occurred.","impactLevel":"{level} impact","important":"Important","improveRecommended":"Recommended Pathways","incident":"Incident","incidentRules":"Incident","incidentSystems":"Incident systems","incidentTooltip":"Indicates configurations that are currently affecting your systems","incidents":"Incidents","insightsHeader":"Advisor","installClient":"Install the client on the RHEL system.","introLearnMoreButton":"Learn more about Insights with self-guided onboarding tours in the Resource Center.","invalidPathname":"Invalid pathname","inventoryIdNotFound":"No system found in inventory for the given Advisor ID","is":"is","is not":"is not","justificationNote":"Justification note","knowledgebasearticle":"Knowledgebase article","label":"Label","lastSeen":"Last seen","learnMore":"Learn more","likelihood":"Likelihood","likelihoodDescription":"The likelihood that this will be a problem is {level}.","likelihoodLevel":"{level} likelihood","loading":"Loading...","low":"Low","manual":"Manual","medium":"Medium","moderate":"Moderate","modified":"Modified","nA":"N/A","name":"Name","no":"No","noOverviewAvailable":"No overview available","noRecommendations":"None of your connected systems are affected by any known recommendations.","noResults":"No results found","noTags":"No tags","nohits.body":"The filter criteria matches no {item}. Try changing your filter settings.","nohits.title":"No matching {item} found","nonIncidentRules":"Non-incident","nonIncidentSystems":"Non-incident systems","none":"None","notAvailable":"N/A","notConnectedBody":"Activate the Insights client for this system to get started.","notConnectedButton":"Learn about the Insights client","notConnectedTitle":"This system is not yet connected to Insights","notRequired":"Not required","numberRuleHits":"Recommendations","oneOrMore":"1 or more","operatingSystem":"Operating system","os":"Os","overview":"Overview","overviewDashbarError":"Overview dashbar error","overview.actioncall.title":"Get started with Red Hat Insights","overview.actioncallnosystems.action":"Getting started documentation","overview.actioncallnosystems.body":"With predictive analytics, avoid problems and unplanned <break> </break> downtime in your Red Hat environment. Red Hat Insights is <break> </break> included with your Red Hat Enterprise Linux subscription","overview.categorychart.title":"Recommendations by category","overview.connectsystems.action":"Learn how to connect a system to Insights","overview.connectsystems.body":"Connect at least 10 systems to get a better awareness of issues and optimizations identified across your infastructure","overview.connectsystems.title":"Connect your first systems","overview.deploy.action":"Download Ansible Playbook","overview.deploy.body":"Get more out of Insights with more systems. Quickly connect systems with <linkansible> Ansible </linkansible> or <linkpuppet> Puppet </linkpuppet>","overview.deploy.title":"Deploy Insights at scale","overview.remediate.action":"Get started with Insights and Ansible Playbooks","overview.remediate.body":"Easily generate an Ansible playbook to quickly and effectively remediate Insights findings","overview.remediate.title":"Remediate Insights findings with Ansible","overview.severitychart.title":"Recommendations by severity","overview.systemInventory.OK":"All systes are up to date","overview.systemInventory.Removed":"{systems, plural, one {# system} other {# systems}} to be removed","overview.systemInventory.stale":"{systems, plural, one {# stale system} other {# stale systems}}","overview.systemInventory.title":"System inventory","overviewchart.nohits":"Your connected systems have no categorized recommendations.","pathways":"Pathways","pathwaysName":"Name","performance":"Performance","permsAction":"You do not have the required advisor permissions to perform this action","permsBody":"To view the content of this page, you must be granted permissions to use Advisor from your Organization Administrator.","permsTitle":"You do not have access to Advisor","playbook":"Playbook","poundOfRecs":"# of recommendations","readless":"Read less","readmore":"Read more","reboot":"Reboot","recNumAndPercentage":"{count} ({total}% of total)","recSuccessfullyDisabled":"Recommendation disabled","recSuccessfullyEnabled":"Recommendation enabled","reclvl":"Recommendation level","reclvldetails":"Indicates a recommendation\'s urgency on a scale of high (fix immediately) to low (fix when convenient). Recommendations levels are constantly re-calculated based on your infrastructure\'s number of applicable recommendations, associated risks and total number of impacted systems.","recommendation":"Recommendation","recommendations":"Recommendations","recommended":"Recommended","recommendedPathways":"Recommended pathways group multiple Advisor recommendations under common actions to power more efficient remediation.","redHatInsights":"Red Hat Insights","redhatDisabled":"Red Hat disabled","redhatDisabledRuleAlert":"We want you to focus on the more important risks to your systems. Red Hat disabled recommendations can be found under the Status filter.","redhatDisabledRuleAlertTitle":"Red Hat has proactively disabled certain low risk recommendations","registerSystem":"Register the system to Red Hat Insights.","remediate":"Remediate","remediation":"Remediation","required":"Required","resetFilters":"Reset filters","resolution":"Resolution","riskOfChange":"Risk of change","riskOfChangeLabel":"{level}","riskOfChangeText":"The risk of change is <strong>{ level }</strong>, because the change takes very little time to implement and there is minimal impact to system operations.","riskOfChangeTextFour":"The risk of change is <strong>high</strong>, because the change takes a significant amount of time and planning to execute, and will impact the system and business operations of the host due to downtime.","riskOfChangeTextOne":"The risk of change is <strong>very low</strong>, because the change takes very little time to implement and there is minimal impact to system operations.","riskOfChangeTextThree":"The risk of change is <strong>moderate</strong>, because the change will likely require an outage window.","riskOfChangeTextTwo":"The risk of change is <strong>low</strong>, because the change does not require that a system be taken offline.","rule":"Rule","ruleHelpful":"Is this recommendation helpful?","ruleIsDisabled":"Recommendation is disabled","ruleIsDisabledBody":"This recommendation was disabled and has no results.","ruleIsDisabledBodyWithJustification":"This recommendation has been disabled because {reason} and has no results.","ruleIsDisabledForAllSystems":"Recommendation is disabled for all systems","ruleIsDisabledForSystems":"Recommendation is disabled for some systems","ruleIsDisabledForSystemsBody":"Recommendation is disabled for {systems, plural, one {# system} other {# systems}}","ruleIsDisabledJustification":"This recommendation has been disabled for all systems for the following reason:","ruleIsDisabledTooltip":"Indicates this recommendation across all systems will not be shown in reports and dashboards.","rules":"Rules","rulesdetails.modifieddate":"Modified date: {date}","rulestable.action.hide":"Hide recommendations with no impacted systems","rulestable.action.hideDisabled":"Hide disabled recommendations","rulestable.action.show":"Show recommendations with no impacted systems","rulestable.action.showDisabled":"Show disabled recommendations","rulestable.fetchrules.error":"There was an error fetching recommendations list.","rulestable.filter.inputtext":"Find a recommendation...","rulestable.hidereports.errorenabling":"Enabling reports failed","rulestable.norulehits.adddisabledbutton":"Include disabled recommendations","rulestable.norulehits.enabledrulesbody":"None of your connected systems are affected by enabled recommendations.","rulestable.norulehits.enabledrulesbodysecondline":"To find more recommendations, expand your filter settings to include all recommendations.","rulestable.norulehits.title":"No recommendations","rulestable.norules.disabledrulesbody":"We haven\'t detected any issues with your connected systems.","rulestable.norules.disabledrulesbodysecondline":"None of your connected systems are affected by enabled recommendations, and you currently have no disabled recommendations.","rulestable.norules.redhatdisabledrulesbody":"This recommendation was disabled proactively by Red Hat and has no results.","save":"Save","search":"Search","security":"Security","selectAll":"Select all ({items} items)","selectNone":"Select none (0 items)","selectPage":"Select page ({items} items)","severity":"Severity","severityHeader":"Identified recommendations by severity","stability":"Stability","staticRemediationDesc":"To fully remediate all recommendations, there may be additional steps needed.","status":"Status","summarychart.item":"{numIssues} {name} affecting {affectedSystems} {affectedSystems, plural, one {system} other {systems}}","summarychart.itemnohits":"No {severity} hits.","summarychart.nohits":"Your connected systems have no recommendations.","sysTableCount":"This report identified {systems}.","system":"System","systemName":"System name","systemReboot":"System reboot <strong>{ status }</strong> required.","systems":"Systems","systemsExposed":"Systems exposed","systemtable.fetch.error":"There was an error fetching systems","tag":"Tag","tagsApplied":"Tags applied:","thisPathway":"This pathway is expected to improve <strong>{category}</strong> on <strong>{systems, plural, one {# system} other {# systems}}</strong> and resolve <strong>{incidents, plural, one {# incident} other {# incidents}}</strong>.","title":"Title","topThreeRulesHeader":"Top 3 recommendations in your infrastructure","topicAddEditDescription":"Description","topicAddEditDescriptionHelperText":"Shown to users to describe the topic","topicAddEditDisabled":"Disabled (not visible)","topicAddEditEnabled":"Enabled (visible)","topicAddEditFeatureBox":"Feature this topic","topicAddEditLabelHelperText":"Recommendations tagged with this tag will be added to the topic","topicAdminCreate":"Create new topic","topicAdminEdit":"Edit topic","topicAdminTitle":"Topic - administration","topicRelatedToRule":"Topics related to this recommendation","topiccard.systemsaffected":"{systems, plural, one {# system} other {# systems}} affected","topicdetails.nodetails.body":"There exist no further details for this topic.","topicdetails.nodetails.title":"No details for topic","topics":"Topics","topicslist.nohits.body":"To continue, edit your filter settings and search again.","topicslist.notopics.body":"Either no topics presently exist or there is an issue presenting them.","topicslist.notopics.title":"No topics","topicslug":"Slug","total hits":"Total hits","totalRisk":"Total risk","totalRiskPathway":"Total risk of pathway","undefined":"Undefined","veryLow":"Very Low","viewAffectedSystems":"View {systems, plural, one {the affected system} other {# affected systems}}","viewPathway":"View pathway","viewSystems":"View systems","yes":"Yes"}')}}]);
//# sourceMappingURL=../sourcemaps/9400.772e80a2b02b7c8fa830696adaa3eb00.js.map