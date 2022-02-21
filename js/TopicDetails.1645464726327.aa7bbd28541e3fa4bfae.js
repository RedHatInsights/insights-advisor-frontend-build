(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[4683],{75331:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(70885),a=n(93264),o=n.n(a),l=n(85991),s=n(49489),c=n(75662),i=n(45697),u=n.n(i),m=n(30893),f=n(75546),d=n(86896),g=function(e){var t,n=e.current,i=(0,d.Z)(),u=null===(t=(0,c.useLocation)().pathname)||void 0===t?void 0:t.split("/"),g=(0,a.useState)([]),p=(0,r.Z)(g,2),v=p[0],E=p[1],b=!("recommendations"===u[1]&&4===u.length)||"pathways"===u[2],h=(0,f.m1)({ruleId:u[2]},{skip:b}),Z=h.data,y=h.isFetching;return(0,a.useEffect)((function(){var e;(e=[]).push({title:"".concat(i.formatMessage(m.Z.insightsHeader)," ").concat(u[1]),navigate:"/".concat(u[1])}),b||e.push({title:null==Z?void 0:Z.description,navigate:"/".concat(u[1],"/").concat(u[2])}),"pathways"===u[2]&&(e=[{title:"Advisor pathways",navigate:"/recommendations/pathways"}]),E(e)}),[Z]),o().createElement(o().Fragment,null,!y&&v.length>0?o().createElement(l.a,{ouiaId:"detail"},v.map((function(e,t){return o().createElement(s.g,{key:t},o().createElement(c.Link,{to:e.navigate},e.title))})),o().createElement(s.g,{isActive:!0},n)):i.formatMessage(m.Z.loading))};g.propTypes={current:u().string};const p=g},52202:(e,t,n)=>{"use strict";n.d(t,{k:()=>E,b:()=>b});var r=n(66197),a=n(16545),o=n(82644),l=n(29558),s=n(91290),c=n(26076),i=n(93264),u=n.n(i),m=n(14498),f=n(30893),d=n(28186),g=(0,o.Sn)(),p=navigator.language.slice(0,2),v=(0,l.d)({onError:console.log,locale:p},g),E=function(e){return u().createElement("span",{className:"system-reboot-message"},u().createElement(c.ZP,{className:e?"reboot-required-icon":"no-reboot-required-icon"}),u().createElement(r.TextContent,{className:"system-reboot-message__content"},u().createElement(r.Text,{component:r.TextVariants.p},v.formatMessage(f.Z.systemReboot,{strong:function(e){return(0,d.f)(e)},status:e?v.formatMessage(f.Z.is):v.formatMessage(f.Z.isNot)}))))},b=function(e){return u().createElement(a.u,{key:e,position:a.D.right,content:u().createElement("div",null,e)},u().createElement("span",{"aria-label":"Action"},u().createElement(s.ZP,{color:m.global_info_color_100.value})))}},11198:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>T});var r=n(4942),a=n(93264),o=n.n(a),l=n(63540),s=n(75331),c=n(23218),i=n(46891),u=n(86350),m=n(34702),f=n(48716),d=n(82661),g=n(47668),p=n(20018),v=n(77669),E=n(34348),b=n(67585),h=n(30893),Z=n(28672),y=n(28216),O=n(77187),x=n(86896),w=n(75662),M=n(97109);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const T=function(){var e=(0,x.Z)(),t=(0,y.useDispatch)(),n=(0,y.useSelector)((function(e){return e.filters.selectedTags})),r=(0,y.useSelector)((function(e){return e.filters.workloads})),k=(0,y.useSelector)((function(e){return e.filters.SID})),T=(0,y.useSelector)((function(e){return e.filters.recState})),j=(0,w.useParams)().id,D=(null==n?void 0:n.length)&&{tags:n};r&&(D=P(P({},D),(0,M.s0)(r,k)));var N=(0,O.Yi)(P(P({},D),{topicId:j})),S=N.data,_=void 0===S?{}:S,F=N.isLoading,L=N.isFetching,I=N.isError;return(0,a.useEffect)((function(){var e=P({},T);return t((0,Z.hb)({impacting:!0,rule_status:"enabled",topic:j,sort:"-total_risk",limit:10,offset:0})),function(){return t((0,Z.hb)(e))}}),[]),(0,a.useEffect)((function(){if(_&&_.name){var t="".concat(_.name," - ").concat(h.Z.topics.defaultMessage);document.title=e.formatMessage(h.Z.documentTitle,{subnav:t})}}),[_]),o().createElement(o().Fragment,null,o().createElement(f.Z,null,(null==_?void 0:_.name)&&o().createElement(s.Z,{current:null==_?void 0:_.name,ouiaId:"details"}),!L&&o().createElement(o().Fragment,null,o().createElement(E.Dx,{headingLevel:"h3",size:"2xl",className:"titleOverride"},_.name,_.featured&&o().createElement(c.Label,{color:"blue",className:"labelOverride",icon:o().createElement(g.ZP,null)},e.formatMessage(h.Z.featured))),o().createElement(p.TextContent,{className:"textOverride"},o().createElement(l.Text,{component:l.TextVariants.p},o().createElement(b.Z,{text:_.description,length:600,expandText:e.formatMessage(h.Z.readmore),collapseText:e.formatMessage(h.Z.readless),inline:!0})))),L||F&&o().createElement(i.Z,null)),o().createElement(u.Z,null,o().createElement(o().Fragment,null,I?o().createElement(m.Z,{icon:v.default,title:e.formatMessage(h.Z.topicDetailslNodetailsTitle),text:e.formatMessage(h.Z.topicDetailslNodetailsBody)}):o().createElement(o().Fragment,null,o().createElement(E.Dx,{headingLevel:"h3",size:"2xl",className:"titleOverride"},e.formatMessage(h.Z.recommendations)),o().createElement(d.default,null)))))}},58392:()=>{},22868:()=>{},95574:()=>{},14777:()=>{},99830:()=>{},70209:()=>{},87414:()=>{}}]);
//# sourceMappingURL=../sourcemaps/TopicDetails.c36bee11c7f2a3e268660e865bd350dd.js.map