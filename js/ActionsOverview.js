(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{184:function(t,n){t.exports=function(t){return t}},186:function(t,n,e){var r=e(197)(Object.keys,Object);t.exports=r},197:function(t,n){t.exports=function(t,n){return function(e){return t(n(e))}}},207:function(t,n){t.exports=function(t){return t}},233:function(t,n,e){var r=e(234)();t.exports=r},234:function(t,n){t.exports=function(t){return function(n,e,r){for(var a=-1,o=Object(n),u=r(n),c=u.length;c--;){var i=u[t?c:++a];if(!1===e(o[i],i,o))break}return n}}},286:function(t,n){t.exports=function(){return!1}},363:function(t,n,e){"use strict";e.r(n);var r=e(79),a=e.n(r),o=e(69),u=e.n(o),c=e(80),i=e.n(c),s=e(364),l=e.n(s),f=e(51),p=e.n(f),m=e(52),h=e.n(m),v=e(53),d=e.n(v),b=e(54),y=e.n(b),g=e(133),x=e.n(g),S=e(55),E=e.n(S),w=e(68),j=e.n(w),k=e(368),O=e.n(k),A=e(376),C=e.n(A),F=e(2),P=e.n(F),R=e(49),N=e(72),B=e(1),I=e.n(B),L=e(40),M=e(104),T=e(105),U=e(37),z=e(39),D=e(187),H=e(206),J=e(23),_=(e(136),Object(N.a)(function(){return e.e(13).then(e.bind(null,621))})),q=Object(N.a)(function(){return e.e(12).then(e.bind(null,622))}),G=Object(N.a)(function(){return e.e(14).then(e.bind(null,624))}),K=Object(N.a)(function(){return Promise.all([e.e(1),e.e(11)]).then(e.bind(null,664))}),Q=function(t){function n(){var t,e;p()(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=d()(this,(t=y()(n)).call.apply(t,[this].concat(a))),j()(x()(e),"state",{totalRisk:{},total:0,category:[]}),j()(x()(e),"summaryChart",function(t,n){return Object.entries(t).map(function(t){var e=l()(t,2),r=e[0],a=e[1],o=C()(J.m)[r],u=O()(o.split("-")[0]);return P.a.createElement(G,{key:r,condition:a,wrap:function(t){return P.a.createElement(R.a,{to:"/actions/".concat(o)},t)}},P.a.createElement(q,{name:u,numIssues:a,totalIssues:n}))})}),e}return E()(n,t),h()(n,[{key:"componentDidMount",value:function(){var t=i()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,insights.chrome.auth.getUser();case 2:this.props.fetchStats(),this.props.setBreadcrumbs([{title:"Overview",navigate:"/actions"}]);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(t){if(this.props.stats!==t.stats){var n=this.props.stats.rules;this.setState({totalRisk:n.total_risk}),this.setState({category:[n.category.Availability,n.category.Stability,n.category.Performance,n.category.Security]}),this.setState({total:n.total})}}},{key:"render",value:function(){var t=this.props.statsFetchStatus,n=this.state,e=n.totalRisk,r=n.category,a=n.total;return P.a.createElement(P.a.Fragment,null,P.a.createElement(z.PageHeader,null,P.a.createElement(z.PageHeaderTitle,{title:"Overview"})),P.a.createElement(z.Main,{className:"pf-m-light pf-u-box-shadow-md-bottom"},P.a.createElement(M.a,{gutter:"lg"},P.a.createElement(T.a,{className:"pf-u-pr-xl-on-xl pf-u-mr-xl-on-xl",xl:4,lg:4,md:8,sm:8},P.a.createElement(U.b,{size:"lg",headingLevel:"h3"},"Risk Summary"),"fulfilled"===t&&P.a.createElement(_,{className:"pf-u-mt-md"},this.summaryChart(e,a)),"pending"===t&&P.a.createElement(H.a,null)),P.a.createElement(T.a,{xl:6,lg:7,md:11,sm:8},P.a.createElement(U.b,{size:"lg",headingLevel:"h3"},"Rule hits by category"),"fulfilled"===t&&P.a.createElement(K,{category:r,className:"pf-u-mt-md"}),"pending"===t&&P.a.createElement(H.a,null)))),P.a.createElement(z.Main,null," "))}}]),n}(F.Component);Q.propTypes={match:I.a.object,breadcrumbs:I.a.array,fetchStats:I.a.func,setBreadcrumbs:I.a.func,statsFetchStatus:I.a.string,stats:I.a.object};n.default=Object(z.routerParams)(Object(L.connect)(function(t,n){return a()({breadcrumbs:t.AdvisorStore.breadcrumbs,stats:t.AdvisorStore.stats,statsFetchStatus:t.AdvisorStore.statsFetchStatus},n)},function(t){return{fetchStats:function(n){return t(D.c(n))},setBreadcrumbs:function(n){return t(D.e(n))}}})(Q))},364:function(t,n,e){var r=e(365),a=e(366),o=e(367);t.exports=function(t,n){return r(t)||a(t,n)||o()}},365:function(t,n){t.exports=function(t){if(Array.isArray(t))return t}},366:function(t,n){t.exports=function(t,n){var e=[],r=!0,a=!1,o=void 0;try{for(var u,c=t[Symbol.iterator]();!(r=(u=c.next()).done)&&(e.push(u.value),!n||e.length!==n);r=!0);}catch(t){a=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return e}},367:function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},368:function(t,n,e){var r=e(207),a=e(369);t.exports=function(t){return a(r(t).toLowerCase())}},369:function(t,n,e){var r=e(370)("toUpperCase");t.exports=r},370:function(t,n,e){var r=e(371),a=e(286),o=e(373),u=e(207);t.exports=function(t){return function(n){n=u(n);var e=a(n)?o(n):void 0,c=e?e[0]:n.charAt(0),i=e?r(e,1).join(""):n.slice(1);return c[t]()+i}}},371:function(t,n,e){var r=e(372);t.exports=function(t,n,e){var a=t.length;return e=void 0===e?a:e,!n&&e>=a?t:r(t,n,e)}},372:function(t,n){t.exports=function(t,n,e){var r=-1,a=t.length;n<0&&(n=-n>a?0:a+n),(e=e>a?a:e)<0&&(e+=a),a=n>e?0:e-n>>>0,n>>>=0;for(var o=Array(a);++r<a;)o[r]=t[r+n];return o}},373:function(t,n,e){var r=e(374),a=e(286),o=e(375);t.exports=function(t){return a(t)?o(t):r(t)}},374:function(t,n){t.exports=function(t){return t.split("")}},375:function(t,n){t.exports=function(t){return t.split("")}},376:function(t,n,e){var r=e(377),a=e(378),o=e(184),u=Object.prototype.toString,c=a(function(t,n,e){null!=n&&"function"!=typeof n.toString&&(n=u.call(n)),t[n]=e},r(o));t.exports=c},377:function(t,n){t.exports=function(t){return function(){return t}}},378:function(t,n,e){var r=e(379);t.exports=function(t,n){return function(e,a){return r(e,t,n(a),{})}}},379:function(t,n,e){var r=e(380);t.exports=function(t,n,e,a){return r(t,function(t,r,o){n(a,e(t),r,o)}),a}},380:function(t,n,e){var r=e(233),a=e(186);t.exports=function(t,n){return t&&r(t,n,a)}}}]);
//# sourceMappingURL=../sourcemaps/ActionsOverview.js.map