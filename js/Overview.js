(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{443:function(e,t,a){(e.exports=a(68)(!1)).push([e.i,"/* stylelint-enable */\n.pf-l-gallery {\n  --pf-l-gallery--m-gutter--GridGap: var(--pf-global--gutter);\n  --pf-l-gallery--GridTemplateColumns: repeat(auto-fill, minmax(250px, 1fr));\n  --pf-l-gallery--GridTemplateRows: auto;\n  display: grid;\n  grid-template-columns: var(--pf-l-gallery--GridTemplateColumns);\n  grid-template-rows: var(--pf-l-gallery--GridTemplateRows); }\n\n.pf-l-gallery.pf-m-gutter {\n  grid-gap: var(--pf-l-gallery--m-gutter--GridGap); }\n",""])},569:function(e,t,a){"use strict";var r=a(2),n=a.n(r),l=a(1),s=a.n(l);function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o={children:s.a.any,"":s.a.any},c=function(e){var t=e.children,a=i(e,["children"]);return n.a.createElement("div",a,t)};c.propTypes=o,c.defaultProps={children:null},t.a=c},642:function(e,t,a){"use strict";var r=a(2),n=a.n(r),l=a(1),s=a.n(l),i=a(967),o=(a(671),i.a.parse(".pf-l-gallery{--pf-l-gallery--m-gutter--GridGap:var(--pf-global--gutter);--pf-l-gallery--GridTemplateColumns:repeat(auto-fill, minmax(250px, 1fr));--pf-l-gallery--GridTemplateRows:auto;display:grid;grid-template-columns:var(--pf-l-gallery--GridTemplateColumns);grid-template-rows:var(--pf-l-gallery--GridTemplateRows);}.pf-l-gallery.pf-m-gutter{grid-gap:var(--pf-l-gallery--m-gutter--GridGap);}")),c=a(185);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m={children:s.a.any,className:s.a.string,gutter:s.a.oneOf(Object.keys(c.a)),"":s.a.any},f=function(e){var t=e.children,a=e.className,r=e.gutter,l=p(e,["children","className","gutter"]);return n.a.createElement("div",u({className:Object(i.b)(o.gallery,r&&Object(c.b)(o,r,o.modifiers.gutter),a)},l),t)};f.propTypes=m,f.defaultProps={children:null,className:"",gutter:null};t.a=f},648:function(e,t,a){"use strict";a.r(t);var r=a(75),n=a.n(r),l=a(70),s=a.n(l),i=a(76),o=a.n(i),c=a(47),u=a.n(c),p=a(48),m=a.n(p),f=a(49),d=a.n(f),y=a(50),g=a.n(y),h=a(126),v=a.n(h),b=a(51),S=a.n(b),w=a(69),E=a.n(w),O=a(2),R=a.n(O),j=a(71),x=a(1),G=a.n(x),P=a(53),k=a(642),T=a(569),F=a(566),A=a(409),H=a(32),I=a(14),N=a(191),C=a(229),M=(a(129),a(439)),_=a(103),B=Object(j.a)(function(){return a.e(14).then(a.bind(null,898))}),L=Object(j.a)(function(){return Promise.all([a.e(0),a.e(13)]).then(a.bind(null,957))}),z=function(e){function t(){var e,a;u()(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return a=d()(this,(e=g()(t)).call.apply(e,[this].concat(n))),E()(v()(a),"state",{total:-1,category:[]}),a}return S()(t,e),m()(t,[{key:"componentDidMount",value:function(){var e=o()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:this.props.fetchStatsRules(),this.props.fetchStatsSystems(),this.props.setBreadcrumbs([{title:"Overview",navigate:"/overview"}]);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){if(this.props.statsRules!==e.statsRules){var t=this.props.statsRules;this.setState({category:[t.category.Availability,t.category.Stability,t.category.Performance,t.category.Security]}),this.setState({total:t.total})}}},{key:"render",value:function(){var e=this.props,t=e.statsRulesFetchStatus,a=e.statsSystemsFetchStatus,r=e.statsRules,n=e.statsSystems,l=this.state,s=l.category,i=l.total;return R.a.createElement(R.a.Fragment,null,R.a.createElement(H.PageHeader,null,R.a.createElement(H.PageHeaderTitle,{title:"Overview"})),0!==i?R.a.createElement(R.a.Fragment,null,R.a.createElement(H.Main,{className:"pf-m-light"},R.a.createElement(k.a,{gutter:"lg"},R.a.createElement(T.a,null,R.a.createElement(F.a,{size:"lg",headingLevel:"h3"},"Rule hits by severity"),"fulfilled"===t&&"fulfilled"===a?R.a.createElement(B,{rulesTotalRisk:r.total_risk,reportsTotalRisk:n.total_risk}):R.a.createElement(C.a,null)),R.a.createElement(T.a,null,R.a.createElement(F.a,{size:"lg",headingLevel:"h3"},"Rule hits by category"),"fulfilled"===t?R.a.createElement(L,{category:s,className:"pf-u-mt-md"}):R.a.createElement(C.a,null)))),R.a.createElement(H.Main,null," ")):R.a.createElement(H.Main,null,R.a.createElement(M.a,{iconStyle:{color:I.p.value},icon:_.a,title:"Get started with Red Hat Insights",text:R.a.createElement("span",{key:"1"},"With predictive analytics, avoid problems and unplanned",R.a.createElement("br",null),"downtime in your Red Hat environment. Red Hat Insights is",R.a.createElement("br",null),"included with your Red Hat Enterprise Linux subscription")},R.a.createElement(A.c,{component:"a",href:"https://access.redhat.com/insights/getting-started/",target:"_blank",variant:"primary"},"Get started"))))}}]),t}(O.Component);z.propTypes={match:G.a.object,breadcrumbs:G.a.array,setBreadcrumbs:G.a.func,statsRulesFetchStatus:G.a.string,statsRules:G.a.object,fetchStatsRules:G.a.func,statsSystemsFetchStatus:G.a.string,statsSystems:G.a.object,fetchStatsSystems:G.a.func};t.default=Object(H.routerParams)(Object(P.b)(function(e,t){return n()({breadcrumbs:e.AdvisorStore.breadcrumbs,statsRules:e.AdvisorStore.statsRules,statsRulesFetchStatus:e.AdvisorStore.statsRulesFetchStatus,statsSystems:e.AdvisorStore.statsSystems,statsSystemsFetchStatus:e.AdvisorStore.statsSystemsFetchStatus},t)},function(e){return{fetchStatsRules:function(t){return e(N.c(t))},fetchStatsSystems:function(t){return e(N.d(t))},setBreadcrumbs:function(t){return e(N.f(t))}}})(z))},671:function(e,t,a){var r=a(443);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},l=a(124)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(443,function(){var t=a(443);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");l(t)}),e.hot.dispose(function(){l()})},965:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),l=a(111),s=a(62),i=a(32),o=a(71),c=Object(o.a)(function(){return Promise.resolve().then(a.bind(null,648))}),u=Object(o.a)(function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(6)]).then(a.bind(null,958))}),p=Object(o.a)(function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(9)]).then(a.bind(null,894))}),m=Object(o.a)(function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(7)]).then(a.bind(null,895))});t.default=Object(i.routerParams)(function(){return n.a.createElement(l.a,null,n.a.createElement(s.a,{exact:!0,path:"/overview",component:c}),n.a.createElement(s.a,{exact:!0,path:"/overview/:type",component:p}),n.a.createElement(s.a,{exact:!0,path:"/overview/by_id/:id",component:u}),n.a.createElement(s.a,{exact:!0,path:"/overview/:type/:id",component:u}),n.a.createElement(s.a,{path:"/overview/by_id/:id/:inventoryId/",component:m}),n.a.createElement(s.a,{path:"/overview/:type/:id/:inventoryId/",component:m}))})}}]);
//# sourceMappingURL=../sourcemaps/Overview.js.map