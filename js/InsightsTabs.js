(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{582:function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".pf-c-tabs.insights-tabs{background-color:var(--pf-global--BackgroundColor--100);padding-left:var(--pf-c-page__main-section--md--PaddingLeft)}\n",""])},829:function(t,e,n){"use strict";n.r(e);var a=n(161),s=n.n(a),r=n(274),i=n.n(r),o=n(277),l=n.n(o),c=n(278),u=n.n(c),p=n(279),m=n.n(p),f=n(280),b=n.n(f),h=n(281),d=n.n(h),v=n(2),g=n.n(v),y=n(272),w=n.n(y),E=n(1),k=n.n(E),T=n(61),O=n(350),j=n(306),C=n(30),M=n(109),x=n(21),P=(n(830),Object(M.a)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(10)]).then(n.bind(null,616))}))),S=Object(M.a)((function(){return Promise.all([n.e(0),n.e(2),n.e(11)]).then(n.bind(null,1050))})),H=function(t){function e(){var t,n;l()(this,e);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=m()(this,(t=b()(e)).call.apply(t,[this].concat(s)))).state={activeTab:{},tabs:{rules:{title:n.props.intl.formatMessage(x.a.rules),to:"/rules",component:g.a.createElement(P,null)},systems:{title:n.props.intl.formatMessage(x.a.systems),to:"/rules/systems",component:g.a.createElement(S,null)}}},n.handleTabClick=function(t,e){var a=n.state.tabs[e];n.setState({activeTab:a}),n.props.history.push(a.to)},n.render=function(){var t=n.state,e=t.tabs,a=t.activeTab;return g.a.createElement(g.a.Fragment,null,g.a.createElement(T.PageHeader,null,g.a.createElement(T.PageHeaderTitle,{title:n.props.intl.formatMessage(x.a.rules)})),a.title&&g.a.createElement(O.a,{mountOnEnter:!0,unmountOnExit:!0,className:"insights-tabs",activeKey:a.title.toLowerCase(),onSelect:n.handleTabClick,"aria-label":"Insights Tabs",variant:O.b.nav},Object.entries(e).map((function(t){return g.a.createElement(j.a,{key:t[0],eventKey:t[0],title:t[1].title},g.a.createElement(T.Main,null,a.title===t[1].title&&t[1].component))}))))},n}var n;return d()(e,t),u()(e,[{key:"componentDidMount",value:(n=i()(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e="systems"===location.pathname.slice(location.pathname.indexOf("insights/")).split("/")[2]?"systems":"rules",n=this.state.tabs[e],this.setState({activeTab:n});case 3:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}]),e}(v.Component);H.displayName="insights-tabs",H.propTypes={location:k.a.object,history:k.a.object,intl:k.a.any},e.default=Object(C.c)(w()(H))},830:function(t,e,n){var a=n(582);"string"==typeof a&&(a=[[t.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0},r=n(7)(a,s);a.locals&&(t.exports=a.locals),t.hot.accept(582,(function(){var e=n(582);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var n,a=0;for(n in t){if(!e||t[n]!==e[n])return!1;a++}for(n in e)a--;return 0===a}(a.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");r(e)})),t.hot.dispose((function(){r()}))}}]);
//# sourceMappingURL=InsightsTabs.js.map