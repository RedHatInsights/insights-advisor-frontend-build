(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[683],{11198:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>S});var a=n(57149),l=n(93264),r=n.n(l),i=n(63540),c=n(75331),s=n(23218),o=n(46891),u=n(86350),m=n(34702),f=n(48716),d=n(45697),p=n.n(d),g=n(69655),E=n(47668),h=n(20018),Z=n(77669),v=n(34348),F=n(67585),x=n(88931),b=n(74806),M=n(30893),T=n(36873),_=function(e){var t=e.match,n=e.fetchTopic,a=e.setFilters,d=e.topic,p=e.topicFetchStatus,x=e.intl,b=e.filters;return(0,l.useEffect)((function(){void 0===b.topic&&a({impacting:!0,rule_status:"enabled",topic:t.params.id,sort:"-total_risk",limit:10,offset:0})})),(0,l.useEffect)((function(){return n({topic_id:t.params.id}),function(){a({impacting:!0,rule_status:"enabled",sort:"-total_risk",limit:10,offset:0})}}),[n,t.params.id,a]),(0,l.useEffect)((function(){if(d&&d.name){var e="".concat(d.name," - ").concat(M.Z.topics.defaultMessage);document.title=x.formatMessage(M.Z.documentTitle,{subnav:e})}}),[d]),r().createElement(r().Fragment,null,r().createElement(f.Z,null,r().createElement(c.Z,{current:d.name,match:t,ouiaId:"details"}),"fulfilled"===p&&r().createElement(r().Fragment,null,r().createElement(v.Dx,{headingLevel:"h3",size:"2xl",className:"titleOverride"},d.name,d.featured&&r().createElement(s._,{color:"blue",className:"labelOverride",icon:r().createElement(E.ZP,null)},x.formatMessage(M.Z.featured))),r().createElement(h.D,{className:"textOverride"},r().createElement(i.xv,{component:i.qO.p},r().createElement(F.Z,{text:d.description,length:600,expandText:x.formatMessage(M.Z.readmore),collapseText:x.formatMessage(M.Z.readless),inline:!0})))),""===p||"pending"===p&&r().createElement(o.Z,null)),r().createElement(u.Z,null,r().createElement(r().Fragment,null,""===p||"pending"===p||"fulfilled"===p&&r().createElement(r().Fragment,null,r().createElement(v.Dx,{headingLevel:"h3",size:"2xl",className:"titleOverride"},x.formatMessage(M.Z.recommendations)),b.topic&&r().createElement(g.default,null)),"failed"===p||"rejected"===p&&r().createElement(m.Z,{icon:Z.ZP,title:x.formatMessage(M.Z.topicDetailslNodetailsTitle),text:x.formatMessage(M.Z.topicDetailslNodetailsBody)}))))};_.propTypes={match:p().any,fetchTopic:p().func,topic:p().object,topicFetchStatus:p().string,setFilters:p().func,intl:p().any,filters:p().object};const S=(0,b.ZP)((0,T.Z)((0,x.connect)((function(e){return{topic:e.AdvisorStore.topic,topicFetchStatus:e.AdvisorStore.topicFetchStatus,filters:e.AdvisorStore.filters}}),(function(e){return{fetchTopic:function(t){return e(a.F(t))},setFilters:function(t){return e(a.rr(t))}}}))(_)))}}]);
//# sourceMappingURL=../sourcemaps/TopicDetails.07cca7a36f506c72953b.js.map