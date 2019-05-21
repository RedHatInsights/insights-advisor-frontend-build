(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{534:function(e,t,a){(e.exports=a(6)(!1)).push([e.i,".levelAlignOverride {\n  align-items: start; }\n\n.mainPaddingOverride {\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.levelItemPaddingOverride {\n  padding-bottom: 32px; }\n",""])},732:function(e,t,a){"use strict";a.r(t);var n=a(185),r=a.n(n),s=a(103),i=a.n(s),l=a(187),c=a.n(l),o=a(66),u=a.n(o),m=a(67),h=a.n(m),d=a(68),p=a.n(d),f=a(69),y=a.n(f),g=a(297),v=a.n(g),b=a(70),E=a.n(b),S=a(102),w=a.n(S),k=a(2),R=a.n(k),x=a(105),A=a(1),O=a.n(A),I=a(44),P=a(281),_=a(234),j=a(203),F=a(62),H=a(298),M=a(186),G=a.n(M),L=a(19),N=a(245),z=a(511),C=a(518),D=(a(321),a(571)),T=a(572),W=(a(751),Object(x.a)(function(){return a.e(12).then(a.bind(null,874))})),B=Object(x.a)(function(){return a.e(11).then(a.bind(null,933))}),J=function(e){function t(){var e,a;u()(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return a=p()(this,(e=y()(t)).call.apply(e,[this].concat(r))),w()(v()(a),"state",{total:-1,category:[]}),a}return E()(t,e),h()(t,[{key:"componentDidMount",value:function(){var e=c()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:this.props.fetchStatsRules(),this.props.fetchStatsSystems(),this.props.setBreadcrumbs([{title:"Overview",navigate:"/overview"}]);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){if(this.props.statsRules!==e.statsRules){var t=this.props.statsRules;this.setState({category:[t.category.Availability,t.category.Stability,t.category.Performance,t.category.Security]}),this.setState({total:t.total})}}},{key:"render",value:function(){var e=this.props,t=e.statsRulesFetchStatus,a=e.statsSystemsFetchStatus,n=e.statsRules,r=e.statsSystems,s=this.state,i=s.category,l=s.total;return R.a.createElement(R.a.Fragment,null,R.a.createElement(H.PageHeader,null,R.a.createElement(H.PageHeaderTitle,{title:"Overview"})),0!==l?R.a.createElement(R.a.Fragment,null,R.a.createElement(H.Main,{className:"pf-m-light mainPaddingOverride"},R.a.createElement(P.a,{className:"levelAlignOverride"},R.a.createElement(_.a,{className:"levelItemPaddingOverride"},R.a.createElement(j.a,{size:"lg",headingLevel:"h3"},"Rule hits by severity"),"fulfilled"===t&&"fulfilled"===a?R.a.createElement(W,{rulesTotalRisk:n.total_risk,reportsTotalRisk:r.total_risk}):R.a.createElement(C.a,null)),R.a.createElement(_.a,null,R.a.createElement(j.a,{size:"lg",headingLevel:"h3"},"Rule hits by category"),"fulfilled"===t?R.a.createElement(B,{category:i,className:"pf-u-mt-md"}):R.a.createElement(C.a,null)),R.a.createElement(_.a,null," "))),R.a.createElement(H.Main,null,R.a.createElement(H.Main,{className:"pf-m-light"},R.a.createElement(j.a,{size:"2xl",headingLevel:"h1"},"Get started with Red Hat Insights"),R.a.createElement(P.a,null,R.a.createElement(_.a,{style:{maxWidth:"400px"}},R.a.createElement(D.a,{iconStyle:{color:L.h.value},icon:function(){return T.d},title:"Connect your first systems",text:R.a.createElement("span",{key:"1"},"Connect at least 10 systems to get a better",R.a.createElement("br",null),"awareness of issues and optimizations",R.a.createElement("br",null),"identified across your infastructure")},R.a.createElement(F.c,{component:"a",href:"https://access.redhat.com/products/red-hat-insights#getstarted",target:"_blank",variant:"link"},"Learn how to connect a system to insights"))),R.a.createElement(_.a,{style:{maxWidth:"400px"}},R.a.createElement(D.a,{iconStyle:{color:L.h.value},icon:function(){return T.b},title:"Remediate Insights findings with Ansible",text:R.a.createElement("span",{key:"1"},"Easily generate an Ansible playbook to",R.a.createElement("br",null),"quickly and effectively remediate Insights ",R.a.createElement("br",null)," findings")},R.a.createElement(F.c,{component:"a",href:"https://cloud.redhat.com/insights/remediations",target:"_blank",variant:"link"},"Get started with Insights and Ansible Playbooks"))),R.a.createElement(_.a,{style:{maxWidth:"400px"}},R.a.createElement(D.a,{iconStyle:{color:L.h.value},icon:function(){return T.c},title:"Deploy Insights at scale",text:R.a.createElement("span",{key:"1"},"Get more out of Insights with more systems.",R.a.createElement("br",null),"Quickly connect systems with ",R.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://galaxy.ansible.com/redhatinsights/insights-client"},"Ansible")," ",R.a.createElement("br",null)," or",R.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://forge.puppetlabs.com/lphiri/access_insights_client"}," Puppet"))},R.a.createElement(F.c,{component:"a",href:"https://galaxy.ansible.com/redhatinsights/insights-client",target:"_blank",variant:"secondary"},"Download Ansible Playbook"))))))):R.a.createElement(H.Main,null,R.a.createElement(D.a,{iconStyle:{color:L.p.value},icon:N.a,title:"Get started with Red Hat Insights",text:R.a.createElement("span",{key:"1"},"With predictive analytics, avoid problems and unplanned",R.a.createElement("br",null),"downtime in your Red Hat environment. Red Hat Insights is",R.a.createElement("br",null),"included with your Red Hat Enterprise Linux subscription")},R.a.createElement(F.c,{component:"a",href:"https://access.redhat.com/insights/getting-started/",target:"_blank",variant:"primary"},"Get started"))))}}]),t}(k.Component);J.propTypes={match:O.a.object,breadcrumbs:O.a.array,setBreadcrumbs:O.a.func,statsRulesFetchStatus:O.a.string,statsRules:O.a.object,fetchStatsRules:O.a.func,statsSystemsFetchStatus:O.a.string,statsSystems:O.a.object,fetchStatsSystems:O.a.func};t.default=G()(Object(I.connect)(function(e,t){return r()({breadcrumbs:e.AdvisorStore.breadcrumbs,statsRules:e.AdvisorStore.statsRules,statsRulesFetchStatus:e.AdvisorStore.statsRulesFetchStatus,statsSystems:e.AdvisorStore.statsSystems,statsSystemsFetchStatus:e.AdvisorStore.statsSystemsFetchStatus},t)},function(e){return{fetchStatsRules:function(t){return e(z.c(t))},fetchStatsSystems:function(t){return e(z.d(t))},setBreadcrumbs:function(t){return e(z.f(t))}}})(J))},751:function(e,t,a){var n=a(534);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},s=a(7)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(534,function(){var t=a(534);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");s(t)}),e.hot.dispose(function(){s()})},937:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),s=a(285),i=a(92),l=a(186),c=a.n(l),o=a(105),u=Object(o.a)(function(){return Promise.resolve().then(a.bind(null,732))}),m=Object(o.a)(function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,934))}),h=Object(o.a)(function(){return Promise.all([a.e(0),a.e(1),a.e(7)]).then(a.bind(null,868))}),d=Object(o.a)(function(){return a.e(5).then(a.bind(null,871))});t.default=c()(function(){return r.a.createElement(s.a,null,r.a.createElement(i.a,{exact:!0,path:"/overview",component:u}),r.a.createElement(i.a,{exact:!0,path:"/overview/:type",component:h}),r.a.createElement(i.a,{exact:!0,path:"/overview/by_id/:id",component:m}),r.a.createElement(i.a,{exact:!0,path:"/overview/:type/:id",component:m}),r.a.createElement(i.a,{path:"/overview/by_id/:id/:inventoryId/",component:d}),r.a.createElement(i.a,{path:"/overview/:type/:id/:inventoryId/",component:d}))})}}]);
//# sourceMappingURL=../sourcemaps/Overview.js.map