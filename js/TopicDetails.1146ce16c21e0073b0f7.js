(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[4683],{60774:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var r=a(94015),l=a.n(r),n=a(23645),i=a.n(n)()(l());i.push([e.id,":root{--ins-color--orange: #ec7a08}.pf-c-label.labelOverride{vertical-align:middle;margin-left:20px}.textOverride{margin-top:var(--pf-global--spacer--md)}.titleOverride{margin-bottom:var(--pf-global--spacer--lg)}\n","",{version:3,sources:["webpack://./src/SmartComponents/Topics/_Details.scss"],names:[],mappings:"AAAA,MAAM,4BAA4B,CAAC,0BAA0B,qBAAqB,CAAC,gBAAgB,CAAC,cAAc,uCAAuC,CAAC,eAAe,0CAA0C",sourcesContent:[":root{--ins-color--orange: #ec7a08}.pf-c-label.labelOverride{vertical-align:middle;margin-left:20px}.textOverride{margin-top:var(--pf-global--spacer--md)}.titleOverride{margin-bottom:var(--pf-global--spacer--lg)}\n"],sourceRoot:""}]);const c=i},88084:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>M}),a(74041);var r=a(64169),l=a(97522),n=a.n(l),i=a(63540),c=a(87054),o=a(23218),s=a(82141),u=a(86350),f=a(75824),d=a(48716),m=a(45697),p=a.n(m),g=a(72134),v=a(47668),A=a(20018),h=a(77669),b=a(34348),E=a(67585),Z=a(86588),C=a(74806),x=a(18623),F=a(36873),O=function(e){var t=e.match,a=e.fetchTopic,r=e.setFilters,m=e.topic,p=e.topicFetchStatus,Z=e.intl,C=e.filters;return(0,l.useEffect)((function(){void 0===C.topic&&r({impacting:!0,rule_status:"enabled",topic:t.params.id,sort:"-total_risk",limit:10,offset:0})})),(0,l.useEffect)((function(){return a({topic_id:t.params.id}),function(){r({impacting:!0,rule_status:"enabled",sort:"-total_risk",limit:10,offset:0})}}),[a,t.params.id,r]),(0,l.useEffect)((function(){if(m&&m.name){var e="".concat(m.name," - ").concat(x.Z.topics.defaultMessage);document.title=Z.formatMessage(x.Z.documentTitle,{subnav:e})}}),[m]),n().createElement(n().Fragment,null,n().createElement(d.Z,null,n().createElement(c.Z,{current:m.name,match:t,ouiaId:"details"}),"fulfilled"===p&&n().createElement(n().Fragment,null,n().createElement(b.Dx,{headingLevel:"h3",size:"2xl",className:"titleOverride"},m.name,m.featured&&n().createElement(o._,{color:"blue",className:"labelOverride",icon:n().createElement(v.ZP,null)},Z.formatMessage(x.Z.featured))),n().createElement(A.D,{className:"textOverride"},n().createElement(i.xv,{component:i.qO.p},n().createElement(E.Z,{text:m.description,length:600,expandText:Z.formatMessage(x.Z.readmore),collapseText:Z.formatMessage(x.Z.readless),inline:!0})))),""===p||"pending"===p&&n().createElement(s.Z,null)),n().createElement(u.Z,null,n().createElement(n().Fragment,null,""===p||"pending"===p||"fulfilled"===p&&n().createElement(n().Fragment,null,n().createElement(b.Dx,{headingLevel:"h3",size:"2xl",className:"titleOverride"},Z.formatMessage(x.Z.recommendations)),C.topic&&n().createElement(g.default,null)),"failed"===p||"rejected"===p&&n().createElement(f.Z,{icon:h.ZP,title:Z.formatMessage(x.Z.topicDetailslNodetailsTitle),text:Z.formatMessage(x.Z.topicDetailslNodetailsBody)}))))};O.propTypes={match:p().any,fetchTopic:p().func,topic:p().object,topicFetchStatus:p().string,setFilters:p().func,intl:p().any,filters:p().object};const M=(0,C.ZP)((0,F.Z)((0,Z.connect)((function(e){return{topic:e.AdvisorStore.topic,topicFetchStatus:e.AdvisorStore.topicFetchStatus,filters:e.AdvisorStore.filters}}),(function(e){return{fetchTopic:function(t){return e(r.F(t))},setFilters:function(t){return e(r.rr(t))}}}))(O)))},74041:(e,t,a)=>{"use strict";var r=a(93379),l=a.n(r),n=a(60774),i=l()(n.default,{insert:"head",singleton:!1});if(!n.default.locals||e.hot.invalidate){var c=n.default.locals;e.hot.accept(60774,(t=>{n=a(60774),function(e,t,a){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(c,n.default.locals)?(c=n.default.locals,i(n.default)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),n.default.locals}}]);
//# sourceMappingURL=TopicDetails.1146ce16c21e0073b0f7.js.map