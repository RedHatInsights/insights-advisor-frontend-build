(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{667:function(t,e,a){"use strict";a.r(e);var n=a(123),r=a.n(n),s=a(118),c=a.n(s),l=a(119),i=a.n(l),u=a(120),o=a.n(u),m=a(121),f=a.n(m),p=a(122),d=a.n(p),h=a(1),y=a.n(h),b=a(112),v=a(174),E=a(0),g=a.n(E),S=a(79),w=a(304),k=a(305),j=a(300),A=a(303),O=a(301),C=a(72),F=a(597),N=a(587),P=(a(355),Object(v.a)(function(){return a.e(14).then(a.bind(null,809))})),B=Object(v.a)(function(){return a.e(11).then(a.bind(null,810))}),H=Object(v.a)(function(){return a.e(13).then(a.bind(null,812))}),I=Object(v.a)(function(){return a.e(10).then(a.bind(null,833))}),M=function(t){function e(t){var a;return c()(this,e),(a=o()(this,f()(e).call(this,t))).state={severity:[],total:0,category:[],sevNames:["Low","Medium","High","Critical"]},a}return d()(e,t),i()(e,[{key:"componentDidMount",value:function(){this.props.fetchStats(),this.props.setBreadcrumbs([{title:"Actions",navigate:"/actions"}])}},{key:"componentDidUpdate",value:function(t){if(this.props.stats!==t.stats){var e=this.props.stats.rules;this.setState({severity:[e.severity.Info,e.severity.Warn,e.severity.Error,e.severity.Critical]}),this.setState({category:[e.category.Availability,e.category.Security,e.category.Stability,e.category.Performance]}),this.setState({total:e.total})}}},{key:"render",value:function(){var t=this,e=this.props.statsFetchStatus,a=this.state.severity.map(function(e,a){return y.a.createElement(H,{key:a,condition:e,wrap:function(e){return y.a.createElement(b.a,{to:"/actions/".concat(t.state.sevNames[a].toLowerCase(),"-risk")},e)}},y.a.createElement(B,{name:t.state.sevNames[a],numIssues:e,totalIssues:t.state.total}))});return y.a.createElement(y.a.Fragment,null,y.a.createElement(C.PageHeader,null,y.a.createElement(C.PageHeaderTitle,{title:"Actions"})),y.a.createElement(C.Main,null,y.a.createElement(w.a,{gutter:"md",xl:4,sm:6},y.a.createElement(k.a,null,y.a.createElement(j.a,{className:"pf-t-light  pf-m-opaque-100"},y.a.createElement(A.a,null,"Category Summary"),y.a.createElement(O.a,null,"fulfilled"===e&&y.a.createElement(I,{category:this.state.category}),"pending"===e&&y.a.createElement(N.a,null)))),y.a.createElement(k.a,null,y.a.createElement(j.a,{className:"pf-t-light  pf-m-opaque-100"},y.a.createElement(A.a,null,"Risk Summary"),y.a.createElement(O.a,null,"fulfilled"===e&&y.a.createElement(P,null,a),"pending"===e&&y.a.createElement(N.a,null)))))))}}]),e}(h.Component);M.propTypes={breadcrumbs:g.a.array,fetchStats:g.a.func,setBreadcrumbs:g.a.func,statsFetchStatus:g.a.string,stats:g.a.object};e.default=Object(C.routerParams)(Object(S.connect)(function(t,e){return r()({breadcrumbs:t.AdvisorStore.breadcrumbs,stats:t.AdvisorStore.stats,statsFetchStatus:t.AdvisorStore.statsFetchStatus},e)},function(t){return{fetchStats:function(e){return t(F.c(e))},setBreadcrumbs:function(e){return t(F.e(e))}}})(M))}}]);
//# sourceMappingURL=../sourcemaps/ActionsOverview.js.map