(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{600:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".pf-c-tabs.insights-tabs {\n  background-color: var(--pf-global--BackgroundColor--100);\n  padding-left: var(--pf-c-page__main-section--md--PaddingLeft); }\n",""])},845:function(t,e,n){"use strict";n.r(e);var a=n(167),r=n.n(a),s=n(280),i=n.n(s),o=n(114),l=n.n(o),c=n(115),u=n.n(c),p=n(116),f=n.n(p),m=n(117),b=n.n(m),h=n(118),d=n.n(h),v=n(2),g=n.n(v),y=n(279),w=n.n(y),E=n(1),k=n.n(E),O=n(81),T=n(121),j=n(371),C=n(311),M=n(134),x=n(33),P=n(119),S=n(537),B=n(10),H=(n(846),Object(P.a)((function(){return Promise.all([n.e(2),n.e(1),n.e(10)]).then(n.bind(null,648))}))),A=Object(P.a)((function(){return Promise.all([n.e(2),n.e(11)]).then(n.bind(null,1059))})),I=function(t){function e(){var t,n;l()(this,e);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=f()(this,(t=b()(e)).call.apply(t,[this].concat(r)))).state={activeTab:{},tabs:{rules:{title:n.props.intl.formatMessage(B.a.rules),to:"/rules",component:g.a.createElement(H,null)},systems:{title:n.props.intl.formatMessage(B.a.systems),to:"/systems",component:g.a.createElement(A,null)}}},n.handleTabClick=function(t,e){var a=n.state.tabs[e];n.setState({activeTab:a}),n.props.history.push(a.to)},n.render=function(){var t=n.state,e=t.tabs,a=t.activeTab;return g.a.createElement(g.a.Fragment,null,g.a.createElement(j.PageHeader,null,g.a.createElement(j.PageHeaderTitle,{title:n.props.intl.formatMessage(B.a.rules)})),a.title&&g.a.createElement(C.a,{mountOnEnter:!0,unmountOnExit:!0,className:"insights-tabs",activeKey:a.title.toLowerCase(),onSelect:n.handleTabClick,"aria-label":"Insights Tabs",variant:C.b.nav},Object.entries(e).map((function(t){return g.a.createElement(M.a,{key:t[0],eventKey:t[0],title:t[1].title},g.a.createElement(j.Main,null,a.title===t[1].title&&t[1].component))}))))},n}var n;return d()(e,t),u()(e,[{key:"componentDidMount",value:(n=i()(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=location.pathname.slice(location.pathname.indexOf("insights/")).split("/")[1],n=this.state.tabs[e],this.props.setBreadcrumbs([{title:n.title,navigate:n.to}]),this.setState({activeTab:n});case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}]),e}(v.Component);I.displayName="insights-tabs",I.propTypes={setBreadcrumbs:k.a.func,location:k.a.object,history:k.a.object,intl:k.a.any};e.default=Object(x.c)(w()(Object(O.connect)(null,(function(t){return Object(T.a)({setBreadcrumbs:function(t){return S.i(t)}},t)}))(I)))},846:function(t,e,n){var a=n(600);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},s=n(5)(a,r);a.locals&&(t.exports=a.locals),t.hot.accept(600,(function(){var e=n(600);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var n,a=0;for(n in t){if(!e||t[n]!==e[n])return!1;a++}for(n in e)a--;return 0===a}(a.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");s(e)})),t.hot.dispose((function(){s()}))}}]);