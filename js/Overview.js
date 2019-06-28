(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{551:function(e,t,a){(e.exports=a(5)(!1)).push([e.i,".levelAlignOverride {\n  align-items: start; }\n\n.mainPaddingOverride {\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.levelItemPaddingOverride {\n  padding-bottom: 32px; }\n",""])},770:function(e,t,a){"use strict";a.r(t);var n=a(238),r=a.n(n),s=a(148),i=a.n(s),l=a(239),c=a.n(l),o=a(106),u=a.n(o),m=a(107),d=a.n(m),h=a(108),p=a.n(h),f=a(109),y=a.n(f),g=a(110),v=a.n(g),b=a(2),E=a.n(b),S=a(151),w=a(1),k=a.n(w),R=a(75),x=a(284),A=a(285),O=a(252),I=a(250),P=a(346),_=a(237),j=a.n(_),F=a(29),H=a(298),M=a(515),G=a(527),L=(a(349),a(603)),N=a(604),z=(a(788),Object(S.a)(function(){return a.e(12).then(a.bind(null,913))})),C=Object(S.a)(function(){return a.e(11).then(a.bind(null,996))}),D=function(e){function t(){var e,a;u()(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=p()(this,(e=y()(t)).call.apply(e,[this].concat(r)))).state={total:-1,category:[]},a}return v()(t,e),d()(t,[{key:"componentDidMount",value:function(){var e=c()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:this.props.fetchStatsRules(),this.props.fetchStatsSystems(),this.props.setBreadcrumbs([{title:"Overview",navigate:"/overview"}]);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){if(this.props.statsRules!==e.statsRules){var t=this.props.statsRules;this.setState({category:[t.category.Availability,t.category.Stability,t.category.Performance,t.category.Security]}),this.setState({total:t.total})}}},{key:"render",value:function(){var e=this.props,t=e.statsRulesFetchStatus,a=e.statsSystemsFetchStatus,n=e.statsRules,r=e.statsSystems,s=this.state,i=s.category,l=s.total;return E.a.createElement(E.a.Fragment,null,E.a.createElement(P.PageHeader,null,E.a.createElement(P.PageHeaderTitle,{title:"Overview"})),0!==l?E.a.createElement(E.a.Fragment,null,E.a.createElement(P.Main,{className:"pf-m-light mainPaddingOverride"},E.a.createElement(x.a,{className:"levelAlignOverride"},E.a.createElement(A.a,{className:"levelItemPaddingOverride"},E.a.createElement(O.a,{size:"lg",headingLevel:"h3"},"Rule hits by severity"),"fulfilled"===t&&"fulfilled"===a?E.a.createElement(z,{rulesTotalRisk:n.total_risk,reportsTotalRisk:r.total_risk}):E.a.createElement(G.a,null)),E.a.createElement(A.a,null,E.a.createElement(O.a,{size:"lg",headingLevel:"h3"},"Rule hits by category"),"fulfilled"===t?E.a.createElement(C,{category:i,className:"pf-u-mt-md"}):E.a.createElement(G.a,null)),E.a.createElement(A.a,null," "))),E.a.createElement(P.Main,null,E.a.createElement(P.Main,{className:"pf-m-light"},E.a.createElement(O.a,{size:"2xl",headingLevel:"h1"},"Get started with Red Hat Insights"),E.a.createElement(x.a,null,E.a.createElement(A.a,{style:{maxWidth:"400px"}},E.a.createElement(L.a,{iconStyle:{color:F.i.value},icon:function(){return N.d},title:"Connect your first systems",text:E.a.createElement("span",{key:"1"},"Connect at least 10 systems to get a better",E.a.createElement("br",null),"awareness of issues and optimizations",E.a.createElement("br",null),"identified across your infastructure")},E.a.createElement(I.a,{component:"a",href:"https://access.redhat.com/products/red-hat-insights#getstarted",target:"_blank",variant:"link"},"Learn how to connect a system to insights"))),E.a.createElement(A.a,{style:{maxWidth:"400px"}},E.a.createElement(L.a,{iconStyle:{color:F.i.value},icon:function(){return N.b},title:"Remediate Insights findings with Ansible",text:E.a.createElement("span",{key:"1"},"Easily generate an Ansible playbook to",E.a.createElement("br",null),"quickly and effectively remediate Insights ",E.a.createElement("br",null)," findings")},E.a.createElement(I.a,{component:"a",href:"https://cloud.redhat.com/insights/remediations",target:"_blank",variant:"link"},"Get started with Insights and Ansible Playbooks"))),E.a.createElement(A.a,{style:{maxWidth:"400px"}},E.a.createElement(L.a,{iconStyle:{color:F.i.value},icon:function(){return N.c},title:"Deploy Insights at scale",text:E.a.createElement("span",{key:"1"},"Get more out of Insights with more systems.",E.a.createElement("br",null),"Quickly connect systems with ",E.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://galaxy.ansible.com/redhatinsights/insights-client"},"Ansible")," ",E.a.createElement("br",null)," or",E.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://forge.puppetlabs.com/lphiri/access_insights_client"}," Puppet"))},E.a.createElement(I.a,{component:"a",href:"https://galaxy.ansible.com/redhatinsights/insights-client",target:"_blank",variant:"secondary"},"Download Ansible Playbook"))))))):E.a.createElement(P.Main,null,E.a.createElement(L.a,{iconStyle:{color:F.r.value},icon:H.a,title:"Get started with Red Hat Insights",text:E.a.createElement("span",{key:"1"},"With predictive analytics, avoid problems and unplanned",E.a.createElement("br",null),"downtime in your Red Hat environment. Red Hat Insights is",E.a.createElement("br",null),"included with your Red Hat Enterprise Linux subscription")},E.a.createElement(I.a,{component:"a",href:"https://access.redhat.com/insights/getting-started/",target:"_blank",variant:"primary"},"Get started"))))}}]),t}(b.Component);D.propTypes={match:k.a.object,breadcrumbs:k.a.array,setBreadcrumbs:k.a.func,statsRulesFetchStatus:k.a.string,statsRules:k.a.object,fetchStatsRules:k.a.func,statsSystemsFetchStatus:k.a.string,statsSystems:k.a.object,fetchStatsSystems:k.a.func};t.default=j()(Object(R.connect)(function(e,t){return r()({breadcrumbs:e.AdvisorStore.breadcrumbs,statsRules:e.AdvisorStore.statsRules,statsRulesFetchStatus:e.AdvisorStore.statsRulesFetchStatus,statsSystems:e.AdvisorStore.statsSystems,statsSystemsFetchStatus:e.AdvisorStore.statsSystemsFetchStatus},t)},function(e){return{fetchStatsRules:function(t){return e(M.c(t))},fetchStatsSystems:function(t){return e(M.d(t))},setBreadcrumbs:function(t){return e(M.f(t))}}})(D))},788:function(e,t,a){var n=a(551);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},s=a(6)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(551,function(){var t=a(551);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");s(t)}),e.hot.dispose(function(){s()})},999:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),s=a(329),i=a(124),l=a(237),c=a.n(l),o=a(151),u=Object(o.a)(function(){return Promise.resolve().then(a.bind(null,770))}),m=Object(o.a)(function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,997))}),d=Object(o.a)(function(){return Promise.all([a.e(0),a.e(1),a.e(7)]).then(a.bind(null,906))}),h=Object(o.a)(function(){return a.e(5).then(a.bind(null,910))});t.default=c()(function(){return r.a.createElement(s.a,null,r.a.createElement(i.a,{exact:!0,path:"/overview",component:u}),r.a.createElement(i.a,{exact:!0,path:"/overview/:type",component:d}),r.a.createElement(i.a,{exact:!0,path:"/overview/by_id/:id",component:m}),r.a.createElement(i.a,{exact:!0,path:"/overview/:type/:id",component:m}),r.a.createElement(i.a,{path:"/overview/by_id/:id/:inventoryId/",component:h}),r.a.createElement(i.a,{path:"/overview/:type/:id/:inventoryId/",component:h}))})}}]);