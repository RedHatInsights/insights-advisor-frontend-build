(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[4683],{11198:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>B}),a(58399);var r=a(57149),l=a(93264),n=a.n(l),i=a(63540),o=a(75331),s=a(23218),c=a(46891),u=a(86350),d=a(34702),f=a(48716),m=a(45697),p=a.n(m),v=a(74560),g=a(47668),A=a(20018),h=a(77669),b=a(34348),E=a(67585),C=a(88931),Z=a(74806),x=a(30893),F=a(36873),O=function(e){var t=e.match,a=e.fetchTopic,r=e.setFilters,m=e.topic,p=e.topicFetchStatus,C=e.intl,Z=e.filters;return(0,l.useEffect)((function(){void 0===Z.topic&&r({impacting:!0,rule_status:"enabled",topic:t.params.id,sort:"-total_risk",limit:10,offset:0})})),(0,l.useEffect)((function(){return a({topic_id:t.params.id}),function(){r({impacting:!0,rule_status:"enabled",sort:"-total_risk",limit:10,offset:0})}}),[a,t.params.id,r]),(0,l.useEffect)((function(){if(m&&m.name){var e="".concat(m.name," - ").concat(x.Z.topics.defaultMessage);document.title=C.formatMessage(x.Z.documentTitle,{subnav:e})}}),[m]),n().createElement(n().Fragment,null,n().createElement(f.Z,null,n().createElement(o.Z,{current:m.name,match:t,ouiaId:"details"}),"fulfilled"===p&&n().createElement(n().Fragment,null,n().createElement(b.Dx,{headingLevel:"h3",size:"2xl",className:"titleOverride"},m.name,m.featured&&n().createElement(s._,{color:"blue",className:"labelOverride",icon:n().createElement(g.ZP,null)},C.formatMessage(x.Z.featured))),n().createElement(A.D,{className:"textOverride"},n().createElement(i.xv,{component:i.qO.p},n().createElement(E.Z,{text:m.description,length:600,expandText:C.formatMessage(x.Z.readmore),collapseText:C.formatMessage(x.Z.readless),inline:!0})))),""===p||"pending"===p&&n().createElement(c.Z,null)),n().createElement(u.Z,null,n().createElement(n().Fragment,null,""===p||"pending"===p||"fulfilled"===p&&n().createElement(n().Fragment,null,n().createElement(b.Dx,{headingLevel:"h3",size:"2xl",className:"titleOverride"},C.formatMessage(x.Z.recommendations)),Z.topic&&n().createElement(v.default,null)),"failed"===p||"rejected"===p&&n().createElement(d.Z,{icon:h.ZP,title:C.formatMessage(x.Z.topicDetailslNodetailsTitle),text:C.formatMessage(x.Z.topicDetailslNodetailsBody)}))))};O.propTypes={match:p().any,fetchTopic:p().func,topic:p().object,topicFetchStatus:p().string,setFilters:p().func,intl:p().any,filters:p().object};const B=(0,Z.ZP)((0,F.Z)((0,C.connect)((function(e){return{topic:e.AdvisorStore.topic,topicFetchStatus:e.AdvisorStore.topicFetchStatus,filters:e.AdvisorStore.filters}}),(function(e){return{fetchTopic:function(t){return e(r.F(t))},setFilters:function(t){return e(r.rr(t))}}}))(O)))},24914:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var r=a(94015),l=a.n(r),n=a(23645),i=a.n(n)()(l());i.push([e.id,".advisor :root{--ins-color--orange: #ec7a08}.advisor .pf-c-label.labelOverride{vertical-align:middle;margin-left:20px}.advisor .textOverride{margin-top:var(--pf-global--spacer--md)}.advisor .titleOverride{margin-bottom:var(--pf-global--spacer--lg)}\n","",{version:3,sources:["webpack://./src/SmartComponents/Topics/_Details.scss"],names:[],mappings:"AAAA,eACM,4BAAoB,CAD1B,mCAC6D,qBAAqB,CAAC,gBAAgB,CADnG,uBACkH,uCAAuC,CADzJ,wBACyK,0CAA0C",sourcesContent:[".advisor{\n:root{--ins-color--orange: #ec7a08}.pf-c-label.labelOverride{vertical-align:middle;margin-left:20px}.textOverride{margin-top:var(--pf-global--spacer--md)}.titleOverride{margin-bottom:var(--pf-global--spacer--lg)}\n\n}"],sourceRoot:""}]);const o=i},58399:(e,t,a)=>{"use strict";var r=a(93379),l=a.n(r),n=a(24914),i=l()(n.default,{insert:"head",singleton:!1});if(!n.default.locals||e.hot.invalidate){var o=n.default.locals;e.hot.accept(24914,(t=>{n=a(24914),function(e,t,a){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(o,n.default.locals)?(o=n.default.locals,i(n.default)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),n.default.locals}}]);
//# sourceMappingURL=../sourcemaps/TopicDetails.b275cc60a41889ece163.js.map