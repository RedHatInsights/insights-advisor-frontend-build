(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{681:function(e,t,n){(e.exports=n(5)(!1)).push([e.i,".pf-c-tabs.insights-tabs{background-color:var(--pf-global--BackgroundColor--100);padding-left:var(--pf-c-page__main-section--md--PaddingLeft)}\n",""])},770:function(e,t,n){"use strict";n.r(t);var a=n(91),r=n.n(a),s=n(155),o=n.n(s),i=n(164),l=n.n(i),c=n(165),u=n.n(c),f=n(166),p=n.n(f),b=n(167),m=n.n(b),d=n(168),h=n.n(d),v=(n(771),n(497)),y=n(0),g=n.n(y),E=n(772),O=n(460),j=n(1),k=n.n(j),w=n(233),T=n(61),M=n(12),_=n(10),P=n(156),C=n.n(P),x=Object(T.a)((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(5),n.e(13)]).then(n.bind(null,696))})),S=Object(T.a)((function(){return Promise.all([n.e(0),n.e(2),n.e(5),n.e(14)]).then(n.bind(null,878))})),H=function(e){function t(){var e,n;l()(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=p()(this,(e=m()(t)).call.apply(e,[this].concat(r)))).state={activeTab:{},tabs:{rules:{title:n.props.intl.formatMessage(_.a.rules),to:"/rules",component:g.a.createElement(x,null)},systems:{title:n.props.intl.formatMessage(_.a.systems),to:"/rules/systems",component:g.a.createElement(S,null)}}},n.handleTabClick=function(e,t){var a=n.state.tabs[t];n.setState({activeTab:a}),n.props.history.push(a.to)},n.render=function(){var e=n.state,t=e.tabs,a=e.activeTab;return g.a.createElement(g.a.Fragment,null,g.a.createElement(v.PageHeader,null,g.a.createElement(v.PageHeaderTitle,{title:n.props.intl.formatMessage(_.a.rules)})),a.title&&g.a.createElement(w.Tabs,{mountOnEnter:!0,unmountOnExit:!0,className:"insights-tabs",activeKey:a.title.toLowerCase(),onSelect:n.handleTabClick,"aria-label":"Insights Tabs",variant:E.TabsVariant.nav},Object.entries(t).map((function(e){return g.a.createElement(E.Tab,{key:e[0],eventKey:e[0],title:e[1].title},g.a.createElement(O.Main,null,a.title===e[1].title&&e[1].component))}))))},n}var n;return h()(t,e),u()(t,[{key:"componentDidMount",value:(n=o()(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="systems"===location.pathname.slice(location.pathname.indexOf("insights/")).split("/")[2]?"systems":"rules",n=this.state.tabs[t],this.setState({activeTab:n});case 3:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})}]),t}(y.Component);H.displayName="insights-tabs",H.propTypes={location:k.a.object,history:k.a.object,intl:k.a.any},t.default=Object(M.c)(C()(H))},771:function(e,t,n){var a=n(681);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},s=n(7)(a,r);a.locals&&(e.exports=a.locals),e.hot.accept(681,(function(){var t=n(681);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,a=0;for(n in e){if(!t||e[n]!==t[n])return!1;a++}for(n in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");s(t)})),e.hot.dispose((function(){s()}))},772:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(241);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})}));var r=n(233);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})}));var s=n(255);Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})}))}}]);
//# sourceMappingURL=InsightsTabs.js.map