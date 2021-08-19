(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[997],{59303:(e,t,s)=>{"use strict";s.r(t),s.d(t,{RULE_FETCH:()=>p,RULES_FETCH:()=>f,SYSTEM_FETCH:()=>g,SYSTEMTYPE_FETCH:()=>b,STATS_RULES_FETCH:()=>y,STATS_SYSTEMS_FETCH:()=>h,STATS_STALEHOSTS_FETCH:()=>v,STATS_REPORTS_FETCH:()=>M,FILTERS_SET:()=>T,TOPIC_FETCH:()=>S,TOPICS_FETCH:()=>E,SYSTEMS_FETCH:()=>R,RULE_ACK_FETCH:()=>w,RULE_ACK_SET:()=>A,HOST_ACK_FETCH:()=>H,HOST_ACK_SET:()=>L,FILTERS_SYSTEMS_SET:()=>k,SELECTED_TAGS_SET:()=>x,RULE_SET:()=>_,SYSTEM_SET:()=>C,WORKLOADS_SET:()=>I,SID_SET:()=>F,BASE_URI:()=>D,BASE_URL:()=>O,INV_BASE_URL:()=>Z,RULES_FETCH_URL:()=>Q,STATS_RULES_FETCH_URL:()=>N,STATS_SYSTEMS_FETCH_URL:()=>U,STATS_REPORTS_FETCH_URL:()=>B,STATS_STALEHOSTS_FETCH_URL:()=>P,TOPICS_FETCH_URL:()=>Y,SYSTEMS_FETCH_URL:()=>K,RULE_ACK_URL:()=>q,HOST_ACK_URL:()=>G,UI_BASE:()=>V,SYSTEM_TYPES:()=>J,DEBOUNCE_DELAY:()=>W,RULE_CATEGORIES:()=>z,SEVERITY_MAP:()=>j,RISK_OF_CHANGE_DESC:()=>X,IMPACT_LABEL:()=>$,IMPACT_LABEL_LOWER:()=>ee,LIKELIHOOD_LABEL:()=>te,LIKELIHOOD_LABEL_LOWER:()=>se,RISK_OF_CHANGE_LABEL:()=>ie,TOTAL_RISK_LABEL:()=>ae,TOTAL_RISK_LABEL_LOWER:()=>oe,FILTER_CATEGORIES:()=>de,SYSTEM_FILTER_CATEGORIES:()=>le,PERMS:()=>re});var i=s(85061),a=s(82644),o=s(29558),d=s(16354),l=s(30893),r=s(28186),n=(0,a.Sn)(),c=navigator.language.slice(0,2),u=(0,o.d)({onError:console.log,locale:c},n),m={locale:c},p="RULE_FETCH",f="RULES_FETCH",g="SYSTEM_FETCH",b="SYSTEMTYPE_FETCH",y="STATS_RULES_FETCH",h="STATS_SYSTEMS_FETCH",v="STATS_STALEHOSTS_FETCH",M="STATS_REPORTS_FETCH",T="FILTERS_SET",S="TOPIC_FETCH",E="TOPICS_FETCH",R="SYSTEMS_FETCH",w="RULE_ACK_FETCH",A="RULE_ACK_SET",H="HOST_ACK_FETCH",L="HOST_ACK_SET",k="FILTERS_SYSTEMS_SET",x="SELECTED_TAGS_SET",_="RULE_SET",C="SYSTEM_SET",I="WORKLOADS_SET",F="SID_SET",D=document.baseURI,O="/api/insights/v1",Z="/api/inventory/v1",Q="".concat(O,"/rule/"),N="".concat(O,"/stats/rules/"),U="".concat(O,"/stats/systems/"),B="".concat(O,"/stats/reports/"),P="".concat(O,"/stats/stale_hosts/"),Y="".concat(O,"/topic/"),K="".concat(O,"/system/"),q="".concat(O,"/ack/"),G="".concat(O,"/hostack/"),V="./insights",J={rhel:105,ocp:325},W=600,z={availability:1,security:2,stability:3,performance:4},j={"critical-risk":4,"high-risk":3,"medium-risk":2,"low-risk":1},X={1:(0,d.oQ)(u.formatMessage(l.Z.riskOfChangeTextOne,{strong:function(e){return(0,r.f)(e)}}),m),2:(0,d.oQ)(u.formatMessage(l.Z.riskOfChangeTextTwo,{strong:function(e){return(0,r.f)(e)}}),m),3:(0,d.oQ)(u.formatMessage(l.Z.riskOfChangeTextThree,{strong:function(e){return(0,r.f)(e)}}),m),4:(0,d.oQ)(u.formatMessage(l.Z.riskOfChangeTextFour,{strong:function(e){return(0,r.f)(e)}}),m)},$={1:(0,d.oQ)(u.formatMessage(l.Z.low),m),2:(0,d.oQ)(u.formatMessage(l.Z.medium),m),3:(0,d.oQ)(u.formatMessage(l.Z.high),m),4:(0,d.oQ)(u.formatMessage(l.Z.critical),m)},ee={1:(0,d.oQ)(u.formatMessage(l.Z.low).toLowerCase(),m),2:(0,d.oQ)(u.formatMessage(l.Z.medium).toLowerCase(),m),3:(0,d.oQ)(u.formatMessage(l.Z.high).toLowerCase(),m),4:(0,d.oQ)(u.formatMessage(l.Z.critical).toLowerCase(),m)},te={1:(0,d.oQ)(u.formatMessage(l.Z.low),m),2:(0,d.oQ)(u.formatMessage(l.Z.medium),m),3:(0,d.oQ)(u.formatMessage(l.Z.high),m),4:(0,d.oQ)(u.formatMessage(l.Z.critical),m)},se={1:(0,d.oQ)(u.formatMessage(l.Z.low).toLowerCase(),m),2:(0,d.oQ)(u.formatMessage(l.Z.medium).toLowerCase(),m),3:(0,d.oQ)(u.formatMessage(l.Z.high).toLowerCase(),m),4:(0,d.oQ)(u.formatMessage(l.Z.critical).toLowerCase(),m)},ie={1:(0,d.oQ)(u.formatMessage(l.Z.veryLow),m),2:(0,d.oQ)(u.formatMessage(l.Z.low),m),3:(0,d.oQ)(u.formatMessage(l.Z.moderate),m),4:(0,d.oQ)(u.formatMessage(l.Z.high),m)},ae={1:(0,d.oQ)(u.formatMessage(l.Z.low),m),2:(0,d.oQ)(u.formatMessage(l.Z.moderate),m),3:(0,d.oQ)(u.formatMessage(l.Z.important),m),4:(0,d.oQ)(u.formatMessage(l.Z.critical),m)},oe={1:(0,d.oQ)(u.formatMessage(l.Z.low).toLowerCase(),m),2:(0,d.oQ)(u.formatMessage(l.Z.moderate).toLowerCase(),m),3:(0,d.oQ)(u.formatMessage(l.Z.important).toLowerCase(),m),4:(0,d.oQ)(u.formatMessage(l.Z.critical).toLowerCase(),m)},de={total_risk:{type:"checkbox",title:"total risk",urlParam:"total_risk",values:[{label:ae[4],value:"4"},{label:ae[3],value:"3"},{label:ae[2],value:"2"},{label:ae[1],value:"1"}]},res_risk:{type:"checkbox",title:"risk of change",urlParam:"res_risk",values:[{label:ie[4],value:"4"},{label:ie[3],value:"3"},{label:ie[2],value:"2"},{label:ie[1],value:"1"}]},impact:{type:"checkbox",title:"impact",urlParam:"impact",values:[{label:$[4],value:"4"},{label:$[3],value:"3"},{label:$[2],value:"2"},{label:$[1],value:"1"}]},likelihood:{type:"checkbox",title:"likelihood",urlParam:"likelihood",values:[{label:te[4],value:"4"},{label:te[3],value:"3"},{label:te[2],value:"2"},{label:te[1],value:"1"}]},category:{type:"checkbox",title:"category",urlParam:"category",values:[{label:(0,d.oQ)(u.formatMessage(l.Z.availability),m),value:"".concat(z.availability)},{label:(0,d.oQ)(u.formatMessage(l.Z.performance),m),value:"".concat(z.performance)},{label:(0,d.oQ)(u.formatMessage(l.Z.stability),m),value:"".concat(z.stability)},{label:(0,d.oQ)(u.formatMessage(l.Z.security),m),value:"".concat(z.security)}]},incident:{type:"checkbox",title:"incidents",urlParam:"incident",values:[{label:(0,d.oQ)(u.formatMessage(l.Z.incidentRules),m),value:"true"},{label:(0,d.oQ)(u.formatMessage(l.Z.nonIncidentRules),m),value:"false"}]},has_playbook:{type:"checkbox",title:"ansible support",urlParam:"has_playbook",values:[{label:(0,d.oQ)(u.formatMessage(l.Z.ansibleSupportYes),m),text:(0,d.oQ)(u.formatMessage(l.Z.ansibleSupportYes),m),value:"true"},{label:(0,d.oQ)(u.formatMessage(l.Z.ansibleSupportNo),m),text:(0,d.oQ)(u.formatMessage(l.Z.ansibleSupportNo),m),value:"false"}]},reboot:{type:"checkbox",title:"reboot required",urlParam:"reboot",values:[{label:(0,d.oQ)(u.formatMessage(l.Z.required),m),text:(0,d.oQ)(u.formatMessage(l.Z.required),m),value:"true"},{label:(0,d.oQ)(u.formatMessage(l.Z.notRequired),m),text:(0,d.oQ)(u.formatMessage(l.Z.notRequired),m),value:"false"}]},rule_status:{type:"radio",title:"status",urlParam:"rule_status",values:[{label:(0,d.oQ)(u.formatMessage(l.Z.all),m),value:"all"},{label:(0,d.oQ)(u.formatMessage(l.Z.enabled),m),value:"enabled"},{label:(0,d.oQ)(u.formatMessage(l.Z.disabled),m),value:"disabled"},{label:(0,d.oQ)(u.formatMessage(l.Z.redhatDisabled),m),value:"rhdisabled"}]},impacting:{type:"checkbox",title:"systems impacted",urlParam:"impacting",values:[{label:(0,d.oQ)(u.formatMessage(l.Z.oneOrMore),m),text:(0,d.oQ)(u.formatMessage(l.Z.oneOrMore),m),value:"true"},{label:(0,d.oQ)(u.formatMessage(l.Z.none),m),text:(0,d.oQ)(u.formatMessage(l.Z.none),m),value:"false"}]}},le={hits:{type:"checkbox",title:"Total Risk",urlParam:"hits",values:[{label:"All systems",text:"All systems",value:"all"}].concat((0,i.Z)(de.total_risk.values))},incident:{type:"checkbox",title:"Incidents",urlParam:"incident",values:[{label:(0,d.oQ)(u.formatMessage(l.Z.incidentSystems),m),value:"true"},{label:(0,d.oQ)(u.formatMessage(l.Z.nonIncidentSystems),m),value:"false"}]},rhel_version:{type:"checkbox",title:"Operating system",urlParam:"rhel_version",values:[{label:"RHEL 8.4",value:"8.4"},{label:"RHEL 8.3",value:"8.3"},{label:"RHEL 8.2",value:"8.2"},{label:"RHEL 8.1",value:"8.1"},{label:"RHEL 8.0",value:"8.0"},{label:"RHEL 7.9",value:"7.9"},{label:"RHEL 7.8",value:"7.8"},{label:"RHEL 7.7",value:"7.7"},{label:"RHEL 7.6",value:"7.6"},{label:"RHEL 7.5",value:"7.5"},{label:"RHEL 7.4",value:"7.4"},{label:"RHEL 7.3",value:"7.3"},{label:"RHEL 7.2",value:"7.2"},{label:"RHEL 7.1",value:"7.1"},{label:"RHEL 7.0",value:"7.0"},{label:"RHEL 6.10",value:"6.10"},{label:"RHEL 6.9",value:"6.9"},{label:"RHEL 6.8",value:"6.8"},{label:"RHEL 6.7",value:"6.7"},{label:"RHEL 6.6",value:"6.6"},{label:"RHEL 6.5",value:"6.5"},{label:"RHEL 6.4",value:"6.4"},{label:"RHEL 6.3",value:"6.3"},{label:"RHEL 6.2",value:"6.2"},{label:"RHEL 6.1",value:"6.1"},{label:"RHEL 6.0",value:"6.0"}]}},re={export:["advisor:*:*","advisor:exports:read"],disableRec:["advisor:*:*","advisor:disable-recommendations:write"],viewRecs:["advisor:*:*","advisor:recommendation-results:read"]}},30893:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});const i=(0,s(50049).vU)({documentTitle:{id:"documentTitle",description:"The title of the page as it appears in the browser tab",defaultMessage:"{subnav} - Advisor | Red Hat Insights"},rules:{id:"rules",description:"Used as a title",defaultMessage:"Rules"},redHatInsights:{id:"redHatInsights",description:"Used as a title",defaultMessage:"Red Hat Insights"},recommendation:{id:"recommendation",description:"Recommendation",defaultMessage:"Recommendation"},recommendations:{id:"recommendations",description:"Used as a title",defaultMessage:"Recommendations"},added:{id:"added",description:"Recommendation table column title",defaultMessage:"Added"},rule:{id:"rule",description:"Recommendation table column title",defaultMessage:"Rule"},totalRisk:{id:"totalRisk",description:"Recommendation table column title, recommendationdetails label",defaultMessage:"Total risk"},systems:{id:"systems",description:"Systems title used in recommendation table column and systems tab header",defaultMessage:"Systems"},system:{id:"system",description:"System",defaultMessage:"System"},systemsExposed:{id:"systemsExposed",description:"Systems title used in exec report",defaultMessage:"Systems exposed"},ansible:{id:"ansible",description:"Recommendation table column title",defaultMessage:"Ansible"},rulesTableHideReportsErrorEnabled:{id:"rulestable.hidereports.errorenabling",description:"Recommendation table, hide reports action, error for enabling reporting on a recommendation",defaultMessage:"Enabling reports failed"},disableRule:{id:"disableRule",description:"Recommendation table, action text for disabling reporting of a recommendation",defaultMessage:"Disable recommendation"},disableRuleForSystems:{id:"disableRuleForSystems",description:"Recommendationdetail system table, action text for disabling reporting of a recommendationfor a system",defaultMessage:"Disable recommendation for selected systems"},disableRuleBody:{id:"disableRuleBody",description:"Explaining the action of disabling a recommendation",defaultMessage:"This recommendation will not be shown in reports and dashboards."},disableRuleSingleSystem:{id:"disableRuleSingleSystem",description:"Explaining the action of disabling a recommendationfor a single system",defaultMessage:"Disable only for this system"},ruleIsDisabled:{id:"ruleIsDisabled",description:"Exclaiming that the recommendationis disabled",defaultMessage:"Recommendation is disabled"},recSuccessfullyDisabledForSystem:{id:"recSuccessfullyDisabledForSystem",description:"Explaining that the rec was disabled successfully for systems",defaultMessage:"Recommendation successfully disabled for selected system(s)"},recSuccessfullyEnabledForSystem:{id:"recSuccessfullyEnabledForSystem",description:"Explaining that the rec was disabled successfully for systems",defaultMessage:"Recommendation successfully enabled for selected system(s)"},recSuccessfullyDisabled:{id:"recSuccessfullyDisabled",description:"Explaining that the rec was disabled successfully",defaultMessage:"Recommendation successfully disabled"},recSuccessfullyEnabled:{id:"recSuccessfullyEnabled",description:"Explaining that the rule was enabled successfully",defaultMessage:"Recommendation successfully enabled"},ruleIsDisabledTooltip:{id:"ruleIsDisabledTooltip",description:"Disabled badge tooltip explaining the meaning of a disabled recommendation",defaultMessage:"Indicates this recommendation across all systems will not be shown in reports and dashboards."},ruleIsDisabledBody:{id:"ruleIsDisabledBody",description:"Explaining that the recommendationis disabled",defaultMessage:"This recommendation has been disabled and has no results."},ruleIsDisabledJustification:{id:"ruleIsDisabledJustification",description:"Explaining that the recommendationis disabled with following justification",defaultMessage:"This recommendation has been disabled for all systems for the following reason: "},ruleIsDisabledForSystems:{id:"ruleIsDisabledForSystems",description:"Exclaiming that the recommendationis disabled for systems",defaultMessage:"Recommendation is disabled for some systems"},ruleIsDisabledForAllSystems:{id:"ruleIsDisabledForAllSystems",description:"Exclaiming that the recommendationis disabled for all systems",defaultMessage:"Recommendation is disabled for all systems"},ruleIsDisabledForSystemsBody:{id:"ruleIsDisabledForSystemsBody",description:"Exclaiming that the recommendationis disabled for systems (system count)",defaultMessage:"Recommendation is disabled for {systems, plural, one {# system} other {# systems}}"},enableRuleForSystems:{id:"enableRuleForSystems",description:"Enable this recommendationfor all systems",defaultMessage:"Enable this recommendation for all systems"},viewSystems:{id:"viewSystems",description:"View systems",defaultMessage:"View systems"},justificationNote:{id:"justificationNote",description:"Justification note",defaultMessage:"Justification note"},enableRule:{id:"enableRule",description:"Recommendation table, action text for enabling reporting of a recommendation",defaultMessage:"Enable recommendation"},rulesTableNoRuleHitsTitle:{id:"rulestable.norulehits.title",description:"Recommendation table, no recommendations message, title",defaultMessage:"No recommendations"},rulesTableNoRuleHitsEnabledRulesBody:{id:"rulestable.norulehits.enabledrulesbody",description:"Recommendation table, no recommendations message for enabled rules, body",defaultMessage:"None of your connected systems are affected by enabled recommendations."},noRecommendations:{id:"noRecommendations",description:"Recommendation table, no recommendations message for any known rules, body",defaultMessage:"None of your connected systems are affected by any known recommendations."},rulesTableNoRuleHitsDisabledRulesBody:{id:"rulestable.norules.disabledrulesbody",description:"Recommendation table, no recommendations message for any disabled rules, body",defaultMessage:"Currently there are no disabled recommendations."},rulesTableNoRuleHitsRedHatDisabledRulesBody:{id:"rulestable.norules.redhatdisabledrulesbody",description:"Recommendation table, no recommendations message for any Red Hat disabled rules, body",defaultMessage:"Currently there are no Red Hat disabled recommendations."},rulesTableNoRuleHitsAddDisabledButton:{id:"rulestable.norulehits.adddisabledbutton",description:"Recommendation table, no recommendations message for any enabled rules, include disabled recommendations button",defaultMessage:"Include disabled recommendations"},disabled:{id:"disabled",description:"Disabled",defaultMessage:"Disabled"},redhatDisabled:{id:"redhatDisabled",description:"Red Hat disabled",defaultMessage:"Red Hat disabled"},nA:{id:"nA",description:"Abreviated as N/A, text equivelent, not applicable",defaultMessage:"N/A"},rulesTableFilterInputText:{id:"rulestable.filter.inputtext",description:"Search text placeholder for recommendation table",defaultMessage:"Find a recommendation..."},exportData:{id:"exportData",description:"Describes function of export icon",defaultMessage:"Export data"},exportJson:{id:"exportJson",description:"Button text to export/download recommendation table data as json",defaultMessage:"Export to JSON"},exportCsv:{id:"exportCsv",description:"Button text to export/download recommendation table data as csv",defaultMessage:"Export to CSV"},exportPdf:{id:"exportPdf",description:"Button text to export/download data as pdf",defaultMessage:"Export to PDF"},rulesTableActionShow:{id:"rulestable.action.show",description:"Label for action show all recommendationsincluding those that affect systems",defaultMessage:"Show recommendations with no impacted systems"},rulesTableActionHide:{id:"rulestable.action.hide",description:"Label for action show only recommendationsthat affect systems",defaultMessage:"Hide recommendations with no impacted systems"},rulesTableActionShowDisabled:{id:"rulestable.action.showDisabled",description:"Label for action show all recommendationsincluding those that are disabled",defaultMessage:"Show disabled recommendations"},rulesTableActionHideDisabled:{id:"rulestable.action.hideDisabled",description:"Label for action show only recommendationsthat are enabled",defaultMessage:"Hide disabled recommendations"},rulesTableFetchRulesError:{id:"rulestable.fetchrules.error",description:"Recommendation table, fetch rules, error message",defaultMessage:"There was an error fetching recommendations list."},loading:{id:"loading",description:"Loading text",defaultMessage:"Loading..."},summaryChartNoHits:{id:"summarychart.nohits",description:"The no hits text for the summary chart",defaultMessage:"Your connected systems have no recommendations."},summaryChartItem:{id:"summarychart.item",description:"Text for each summary chart item of varying severity",defaultMessage:"{numIssues} {name} affecting {affectedSystems} {affectedSystems, plural, one {system} other {systems}}"},summaryChartItemNoHits:{id:"summarychart.itemnohits",description:"Text for each summary chart item of varying severity that has no hits",defaultMessage:"No {severity} hits."},overviewChartNoHits:{id:"overviewchart.nohits",description:"The no hits text for the overview chart",defaultMessage:"Your connected systems have no categorized recommendations."},totalHits:{id:"total hits",description:"The total hits label for the overview donut chart",defaultMessage:"Total hits"},resetFilters:{id:"resetFilters",description:"Filter action, reset all filter chips",defaultMessage:"Reset filters"},filterBy:{id:"filterBy",description:"Filter by name",defaultMessage:"Filter by name"},filterTagsInModal:{id:"filterTagsInModal",description:"Filter text input, for ManageTags Modal",defaultMessage:"Filter tags"},knowledgebaseArticle:{id:"knowledgebasearticle",description:"Knowledgebase article",defaultMessage:"Knowledgebase article"},riskofchange:{id:"riskofchange",description:"Risk of Change",defaultMessage:"Risk of change"},rulesDetailsTotalriskBody:{id:"rulesdetails.totalriskbody",description:"Text explaining the total risk value of this recommendation",defaultMessage:"The total risk of this remediation is <strong>{risk}</strong>,\n                        based on the combination of likelihood and impact to remediate."},undefined:{id:"undefined",description:"Undefined",defaultMessage:"Undefined"},learnMore:{id:"learnMore",description:"Topic card, link to topic details page",defaultMessage:"Learn more"},countMore:{id:"countMore",description:"Accepts a count of items, appends the text more",defaultMessage:"{count} more"},countMoreTags:{id:"countMoreTags",description:"Accepts a count of additional taks available",defaultMessage:"{count} more tags available"},recommended:{id:"recommended",description:"Recommended",defaultMessage:"Recommended"},featured:{id:"featured",description:"Featured",defaultMessage:"Featured"},status:{id:"status",description:"Status",defaultMessage:"Status"},label:{id:"label",description:"Label",defaultMessage:"Label"},topicCardSystemsaffected:{id:"topiccard.systemsaffected",description:"Topic card, systems affected text",defaultMessage:"{systems, plural, one {# system} other {# systems}} affected"},overview:{id:"overview",description:"Overview",defaultMessage:"Overview"},overviewCategoryChartTitle:{id:"overview.categorychart.title",description:"Overview Category donut chart title",defaultMessage:"Recommendations by category"},overviewSeverityChartTitle:{id:"overview.severitychart.title",description:"Overview severity chart title",defaultMessage:"Recommendations by severity"},overviewSystemInventory:{id:"overview.systemInventory.title",description:"Overview system inventory chart title",defaultMessage:"System inventory"},overviewSystemInventoryStale:{id:"overview.systemInventory.stale",description:"Overview system inventory chart stale systems",defaultMessage:"{systems, plural, one {# stale system} other {# stale systems}}"},overviewSystemInventoryRemoved:{id:"overview.systemInventory.Removed",description:"Overview system inventory chart systems to be removed",defaultMessage:"{systems, plural, one {# system} other {# systems}} to be removed"},overviewSystemInventoryOK:{id:"overview.systemInventory.OK",description:"Overview system inventory chart systems OK",defaultMessage:"All systes are up to date"},overviewActioncallTitle:{id:"overview.actioncall.title",description:"Overview, call to action title",defaultMessage:"Get started with Red Hat Insights"},overviewConnectsystemsTitle:{id:"overview.connectsystems.title",description:"Overview, title for connecting first systems",defaultMessage:"Connect your first systems"},overviewConnectsystemsBody:{id:"overview.connectsystems.body",description:"Overview, body for connecting first systems",defaultMessage:"Connect at least 10 systems to get a better awareness of issues and optimizations identified across your infastructure"},overviewConnectsystemsAction:{id:"overview.connectsystems.action",description:"Overview, action link for connecting first systems",defaultMessage:"Learn how to connect a system to Insights"},overviewRemediateTitle:{id:"overview.remediate.title",description:"Overview, title for remediate",defaultMessage:"Remediate Insights findings with Ansible"},overviewRemediateBody:{id:"overview.remediate.body",description:"Overview, body for remediate",defaultMessage:"Easily generate an Ansible playbook to \n        quickly and effectively remediate Insights findings"},overviewRemediateAction:{id:"overview.remediate.action",description:"Overview, action link for remediate",defaultMessage:"Get started with Insights and Ansible Playbooks"},overviewDeployTitle:{id:"overview.deploy.title",description:"Overview, title for deploy",defaultMessage:"Deploy Insights at scale"},overviewDeployBody:{id:"overview.deploy.body",description:"Overview, body for deploy",defaultMessage:"Get more out of Insights with more systems.\n        Quickly connect systems with <linkansible> Ansible </linkansible>\n        or <linkpuppet> Puppet </linkpuppet>"},overviewDeployAction:{id:"overview.deploy.action",description:"Overview, action link for deploy",defaultMessage:"Download Ansible Playbook"},overviewActionCallNoSystemsBody:{id:"overview.actioncallnosystems.body",description:"Overview, action call body when there are no systems",defaultMessage:"With predictive analytics, avoid problems and unplanned <break> </break>\n        downtime in your Red Hat environment. Red Hat Insights is <break> </break>\n        included with your Red Hat Enterprise Linux subscription"},overviewActionCallNoSystemsAction:{id:"overview.actioncallnosystems.action",description:"Overview, action call link for when there are no systems",defaultMessage:"Getting started documentation"},installClient:{id:"installClient",description:"Install the client on the RHEL system",defaultMessage:"Install the client on the RHEL system."},registerSystem:{id:"registerSystem",description:"Register the system to Red Hat Insights",defaultMessage:"Register the system to Red Hat Insights."},rulesDetailsPubishdate:{id:"rulesdetails.publishdate",description:"Recommendationsdetails, publish date",defaultMessage:"Publish date: {date}"},affectedSystems:{id:"affectedSystems",description:"Affected systems",defaultMessage:"Affected systems"},readmore:{id:"readmore",description:"Read more",defaultMessage:"Read more"},readless:{id:"readless",description:"Read less",defaultMessage:"Read less"},deleteTopic:{id:"deleteTopic",description:"Used for Button in Edit Topic Modal",defaultMessage:"Delete topic"},topicDetailslNodetailsTitle:{id:"topicdetails.nodetails.title",description:"Topic details, title when none are present or exist",defaultMessage:"No details for topic"},topicDetailslNodetailsBody:{id:"topicdetails.nodetails.body",description:"Topic details, body when none are present or exist",defaultMessage:"There exist no further details for this topic."},title:{id:"title",description:"Used in the topics admin table title column, identifying display title of a topic",defaultMessage:"Title"},tag:{id:"tag",description:"Used in the topics admin table tag column, identifying display tag for a topic",defaultMessage:"Tag"},topicAddEditDescription:{id:"topicAddEditDescription",description:"description header for TopicAddEdit Modal",defaultMessage:"Description"},topicAddEditDescriptionHelperText:{id:"topicAddEditDescriptionHelperText",description:"helper text for description text area on TopicAddEdit Modal",defaultMessage:"Shown to users to describe the topic"},topicAddEditDisabled:{id:"topicAddEditDisabled",description:"Disabled label in TopicAddEdit radio buttons",defaultMessage:"Disabled (not visible)"},topicAddEditEnabled:{id:"topicAddEditEnabled",description:"Enabled label in TopicAddEdit radio buttons",defaultMessage:"Enabled (visible)"},topicAddEditFeatureBox:{id:"topicAddEditFeatureBox",description:"label for feature checkbox in TopicAddEdit Modal",defaultMessage:"Feature this topic"},topicAddEditTagHelperText:{id:"topicAddEditLabelHelperText",description:"helper text for tag text input in TopicAddEdit Modal",defaultMessage:"Recommendations tagged with this tag will be added to the topic"},topicAdminCreate:{id:"topicAdminCreate",description:"Create Label",defaultMessage:"Create new topic"},topicAdminEdit:{id:"topicAdminEdit",description:"Edit Label",defaultMessage:"Edit topic"},topicAdminTitle:{id:"topicAdminTitle",description:"The title for the Topic Admin page",defaultMessage:"Topic - administration"},topics:{id:"topics",description:"Topics Title",defaultMessage:"Topics"},topicSlug:{id:"topicslug",description:"Used in the topics admin table slug column, identifying display slug for a topic",defaultMessage:"Slug"},topicsListNotopicsTitle:{id:"topicslist.notopics.title",description:"Topics list, no topics title",defaultMessage:"No topics"},topicsListNotopicsBody:{id:"topicslist.notopics.body",description:"Topics list, no topics body",defaultMessage:"Either no topics presently exist or there is an issue presenting them."},remediate:{id:"remediate",description:"Remediate",defaultMessage:"Remediate"},selectAll:{id:"selectAll",description:"Action, Bulk select all items in a table with number",defaultMessage:"Select all ({items} items)"},selectPage:{id:"selectPage",description:"Action, Bulk select all visible items in table, with number",defaultMessage:"Select page ({items} items)"},selectNone:{id:"selectNone",description:"Action, Bulk deselect all",defaultMessage:"Select none (0 items)"},topicRelatedToRule:{id:"topicRelatedToRule",description:"Identifying the list of topics that include this recommendation",defaultMessage:"Topics related to this recommendation"},name:{id:"name",description:"Used in the system table title column, identifying display name of a system",defaultMessage:"Name"},numberRuleHits:{id:"numberRuleHits",description:"Used in the system table title column, number of recommendations per system",defaultMessage:"Recommendations"},lastSeen:{id:"lastSeen",description:"Used in the system table title column, the last time a system has checked in",defaultMessage:"Last seen"},noHitsTitle:{id:"nohits.title",description:"No hits message, title",defaultMessage:"No matching {item} found"},noHitsBody:{id:"nohits.body",description:"No hits messags, body",defaultMessage:"The filter criteria matches no {item}. Try changing your filter settings."},search:{id:"search",description:"Commonly used in text input search fields ",defaultMessage:"Search"},systemTableFetchError:{id:"systemtable.fetch.error",description:"System table, fetch , error message",defaultMessage:"There was an error fetching systems"},low:{id:"low",description:"Filter value",defaultMessage:"Low"},moderate:{id:"moderate",description:"Filter value",defaultMessage:"Moderate"},important:{id:"important",description:"Filter value",defaultMessage:"Important"},critical:{id:"critical",description:"Filter value",defaultMessage:"Critical"},veryLow:{id:"veryLow",description:"Filter value",defaultMessage:"Very Low"},medium:{id:"medium",description:"Filter value",defaultMessage:"Medium"},high:{id:"high",description:"Filter value",defaultMessage:"High"},availability:{id:"availability",description:"Filter value",defaultMessage:"Availability"},performance:{id:"performance",description:"Filter value",defaultMessage:"Performance"},stability:{id:"stability",description:"Filter value",defaultMessage:"Stability"},security:{id:"security",description:"Filter value",defaultMessage:"Security"},enabled:{id:"enabled",description:"Filter value",defaultMessage:"Enabled"},impact:{id:"impact",description:"Filter title",defaultMessage:"Impact"},impactLevel:{id:"impactLevel",description:"Describes the impact level of a rule",defaultMessage:"{level} impact"},impactDescription:{id:"impactDescription",description:"Used in the SeverityLine tooltip to describe the impact of a rule",defaultMessage:"The impact of the problem would be {level} if it occurred."},category:{id:"category",description:"Filter title",defaultMessage:"Category"},likelihood:{id:"likelihood",description:"Filter title",defaultMessage:"Likelihood"},likelihoodLevel:{id:"likelihoodLevel",description:"Describes the likelihood of a rule",defaultMessage:"{level} likelihood"},likelihoodDescription:{id:"likelihoodDescription",description:"Used in the SeverityLine tooltip to describe the likelihood of a rule",defaultMessage:"The likelihood that this will be a problem is {level}."},riskOfChangeTextOne:{id:"riskOfChangeTextOne",description:"Risk of change text explaining a value one",defaultMessage:"The risk of change is <strong>very low</strong>, because the change takes very little time to implement and there is minimal impact to system operations."},riskOfChangeTextTwo:{id:"riskOfChangeTextTwo",description:"Risk of change text explaining a value two",defaultMessage:"The risk of change is <strong>low</strong>, because the change does not require that a system be taken offline."},riskOfChangeTextThree:{id:"riskOfChangeTextThree",description:"Risk of change text explaining a value three",defaultMessage:"The risk of change is <strong>moderate</strong>, because the change will likely require an outage window."},riskOfChangeTextFour:{id:"riskOfChangeTextFour",description:"Risk of change text explaining a value four",defaultMessage:"The risk of change is <strong>high</strong>, because the change takes a significant amount of time and planning to execute, and will impact the system and business operations of the host due to downtime."},no:{id:"no",description:"Used to signal no ansible playbook",defaultMessage:"No"},description:{id:"description",description:"Description",defaultMessage:"Description"},save:{id:"save",description:"Save",defaultMessage:"Save"},cancel:{id:"cancel",description:"Cancel",defaultMessage:"Cancel"},none:{id:"none",description:"None",defaultMessage:"None"},is:{id:"is",description:"is",defaultMessage:"is"},isNot:{id:"is not",description:"is not",defaultMessage:"is not"},dateDisabled:{id:"dateDisabled",description:"Date disabled",defaultMessage:"Date disabled"},hostAckModalTitle:{id:"hostAckModalTitle",description:"Title for host ack table modal",defaultMessage:"Recommendation has been disabled for:"},systemName:{id:"systemName",description:"System name",defaultMessage:"System name"},systemReboot:{id:"systemReboot",description:"Says remediation does requires system reboot",defaultMessage:"System reboot <strong>{ status }</strong> required."},enable:{id:"enable",description:"Enable",defaultMessage:"Enable"},error:{id:"error",description:"Error",defaultMessage:"Error"},viewAffectedSystems:{id:"viewAffectedSystems",description:"Link text to view all hosts that are affected by a recommendation",defaultMessage:"View {systems, plural, one {the affected system} other {# affected systems}}"},ruleHelpful:{id:"ruleHelpful",description:"Asking the user if they find a recommendation helpful",defaultMessage:"Is this recommendation helpful?"},feedbackThankyou:{id:"feedbackThankyou",description:"Thanking user for feedback",defaultMessage:"Thank you for your feedback!"},all:{id:"all",description:"All",defaultMessage:"All"},os:{id:"os",description:"Operating system",defaultMessage:"Os"},operatingSystem:{id:"operatingSystem",description:"Operating system",defaultMessage:"Operating system"},incidentRules:{id:"incidentRules",description:"Recommendationswith incidents",defaultMessage:"Incident recommendations"},nonIncidentRules:{id:"nonIncidentRules",description:"Recommendationswith no incidents",defaultMessage:"Non-incident recommendations"},incidentSystems:{id:"incidentSystems",description:"Systems with incidents",defaultMessage:"Incident systems"},nonIncidentSystems:{id:"nonIncidentSystems",description:"Systems with no incidents",defaultMessage:"Non-incident systems"},incidents:{id:"incidents",description:"Incidents",defaultMessage:"Incidents"},incident:{id:"incident",description:"Incident",defaultMessage:"Incident"},incidentTooltip:{id:"incidentTooltip",description:"Incident badge tooltip text",defaultMessage:"Indicates configurations that are currently affecting your systems"},cveAlert:{id:"cveAlert",description:"Cve alert body",defaultMessage:"As of April 20th, 2020, all CVE recommendations previously shown in recommendations have moved over to the Vulnerability section of Red Hat Insights which provides additional capabilities for enhanced CVE identification and remediation."},cveAlertTitle:{id:"cveAlertTitle",description:"Cve alert title",defaultMessage:"CVE recommendations relocated"},downloadExecutiveLabel:{id:"downloadExecutiveLabel",description:"Label given to link for downloading exec report",defaultMessage:"Download executive report"},insightsHeader:{id:"insightsHeader",description:"Type value for Executive Reports Download Button",defaultMessage:"Advisor"},execReportHeader:{id:"execReportHeader",description:"Header in the Executive Report describing the number of systems and risk analyzed",defaultMessage:"This report is an executive summary of recommendations that may impact your Red Hat Enterprise Linux servers. Red Hat Advisor service is analyzing {systems} and has identified {risks} that impact 1 or more of these systems."},execReportHeaderSystems:{id:"execReportHeaderSystems",description:"System part of the exec report header",defaultMessage:"{systems, plural, one {# RHEL system} other {# RHEL systems}}"},execReportHeaderRisks:{id:"execReportHeaderRisks",description:"Risk part of the exec report header",defaultMessage:"{risks, plural, one {# Risk} other {# Risks}}"},sysTableCount:{id:"sysTableCount",description:"Systable pdf report",defaultMessage:"This report identified {systems}."},filtersApplied:{id:"filtersApplied",description:"Systable pdf report",defaultMessage:"Filters applied:"},tagsApplied:{id:"tagsApplied",description:"Systable pdf report",defaultMessage:"Tags applied:"},recNumAndPercentage:{id:"recNumAndPercentage",description:"Given number and total displays percentage",defaultMessage:"{count} ({total}% of total)"},severity:{id:"severity",description:"Severity",defaultMessage:"Severity"},severityHeader:{id:"severityHeader",description:"Header for Severity Section of Exec Report",defaultMessage:"Identified recommendations by severity"},categoryHeader:{id:"categoryHeader",description:"Header for Category Section of Exec Report",defaultMessage:"Recently identified recommendations by category"},top3RulesHeader:{id:"topThreeRulesHeader",description:"Header for Top 3 section of Exec Report",defaultMessage:"Top 3 recommendations in your infrastructure"},poundOfRecs:{id:"poundOfRecs",description:"# of recommendations",defaultMessage:"# of recommendations"},redhatDisabledRuleAlert:{id:"redhatDisabledRuleAlert",description:"Red Hat disabled rule alert body",defaultMessage:"We want you to focus on the more important risks to your systems.  Red Hat disabled recommendations can be found under the Status filter."},redhatDisabledRuleAlertTitle:{id:"redhatDisabledRuleAlertTitle",description:"Red Hat disabled rule alert title",defaultMessage:"Red Hat has proactively disabled certain low risk recommendations"},inventoryIdNotFound:{id:"inventoryIdNotFound",description:"Thrown as error when classic id does not correspond to an inventory id",defaultMessage:"No system found in inventory for the given Advisor ID"},invalidPathname:{id:"invalidPathname",description:"Message thrown when classic redirect receives invalid path",defaultMessage:"Invalid pathname"},permsTitle:{id:"permsTitle",description:"You do not have access to Advisor",defaultMessage:"You do not have access to Advisor"},permsBody:{id:"permsBody",description:"To view the content",defaultMessage:"To view the content of this page, you must be grated a minimum of advisor permissions from your Organization Administrator."},permsAction:{id:"permsAction",description:"You do not have the required advisor permissions to perform this action",defaultMessage:"You do not have the required advisor permissions to perform this action"},oneOrMore:{id:"oneOrMore",description:"1 or more",defaultMessage:"1 or more"},ansibleSupportYes:{id:"ansibleSupportYes",description:"Ansible remediation support",defaultMessage:"Ansible remediation support"},ansibleSupportNo:{id:"ansibleSupportNo",description:"No Ansible remediation support",defaultMessage:"No Ansible remediation support"},yes:{id:"yes",description:"yes",defaultMessage:"Yes"},actions:{id:"actions",description:"actions",defaultMessage:"Actions"},dueTo:{id:"dueTo",description:"Due to browser limitations, showing the first 1000 systems",defaultMessage:" - Due to browser limitations, showing the first 1000 systems"},byEnabling:{id:"byEnabling",description:"By enabling this recommendation",defaultMessage:"By enabling this recommendation, it will impact {systems, plural, one {# system} other {# systems}}."},required:{id:"required",description:"Required",defaultMessage:"Required"},notRequired:{id:"notRequired",description:"Not required",defaultMessage:"Not required"}})},71094:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var i=s(80129),a=s.n(i),o=s(9669),d=s.n(o);const l={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return d().get(e,{headers:t,params:s,paramsSerializer:function(e){return a().stringify(e,{arrayFormat:"repeat"})}})},put:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return d().put(e,t,{headers:s})},post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return d().post(e,s,{headers:t})},delete:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return d().delete(e,t,{headers:s})}}},28186:(e,t,s)=>{"use strict";s.d(t,{f:()=>o});var i=s(93264),a=s.n(i),o=function(e){return a().createElement("strong",null,e)}},24654:()=>{}}]);