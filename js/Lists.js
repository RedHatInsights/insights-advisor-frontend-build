(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{505:function(t,e,a){(t.exports=a(5)(!1)).push([t.i,"nav.pf-c-breadcrumb ol {\n  padding-left: 0;\n  margin-left: 0;\n  margin-top: 0; }\n\nnav.pf-c-breadcrumb li {\n  text-transform: capitalize;\n  margin-top: 0; }\n",""])},518:function(t,e,a){"use strict";var r=a(231),n=a.n(r),i=a(103),s=a.n(i),c=a(104),o=a.n(c),l=a(105),p=a.n(l),u=a(106),h=a.n(u),m=a(107),d=a.n(m),f=a(2),v=a.n(f),y=a(99),g=a(253),b=a(254),S=a(232),k=a.n(S),w=a(74),F=a(508),E=a(1),A=a.n(E),O=(a(519),function(t){function e(){var t,a;s()(this,e);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=p()(this,(t=h()(e)).call.apply(t,[this].concat(n)))).state={items:[],ruleDescriptionLoaded:!1},a.getReadableType=function(t){return t.indexOf("-")>-1?"".concat(t.replace("-"," ")," Overview"):t},a}return d()(e,t),o()(e,[{key:"componentDidMount",value:function(){void 0!==this.props.match.params.inventoryId?this.props.fetchRule({rule_id:this.props.match.params.id}):this.buildBreadcrumbs()}},{key:"componentDidUpdate",value:function(){"fulfilled"!==this.props.ruleFetchStatus||this.state.ruleDescriptionLoaded||(this.setState({ruleDescriptionLoaded:!0}),this.buildBreadcrumbs())}},{key:"buildBreadcrumbs",value:function(){var t=this.props,e=t.breadcrumbs,a=t.match,r=[];if(void 0!==a.params.type)if(void 0!==e[0])r.push(e[0]);else{var n=a.url.split("/")[1];r.push({title:n,navigate:"/".concat(n)})}if(void 0!==a.params.type&&void 0!==a.params.id&&"Rules"!==r[0].title){var i=this.getReadableType(a.params.type);r.push({title:i,navigate:"".concat(r[0].navigate,"/").concat(a.params.type)})}if(void 0!==a.params.id&&void 0!==a.params.inventoryId){var s=this.props.rule.description;void 0!==r[1]?r.push({title:s,navigate:"".concat(r[1].navigate,"/").concat(a.params.id)}):r.push({title:s,navigate:"/".concat(a.url.split("/")[1],"/").concat(a.params.type,"/").concat(a.params.id)})}this.setState({items:r})}},{key:"render",value:function(){var t=this.props.ruleFetchStatus,e=this.state.items;return v.a.createElement(v.a.Fragment,null,("fulfilled"===t||e.length>0)&&v.a.createElement(g.a,null,e.map(function(t,e){return v.a.createElement(b.a,{key:e},v.a.createElement(y.a,{to:t.navigate},t.title))}),v.a.createElement(b.a,{isActive:!0},this.props.current)),"pending"===t&&"Loading...")}}]),e}(v.a.Component));O.propTypes={breadcrumbs:A.a.arrayOf(Object),current:A.a.string,fetchRule:A.a.func,match:A.a.object,rule:A.a.object,ruleFetchStatus:A.a.string};e.a=k()(Object(w.connect)(function(t,e){return n()({breadcrumbs:t.AdvisorStore.breadcrumbs,rule:t.AdvisorStore.rule,ruleFetchStatus:t.AdvisorStore.ruleFetchStatus},t,e)},function(t){return{fetchRule:function(e){return t(F.a(e))}}})(O))},519:function(t,e,a){var r=a(505);"string"==typeof r&&(r=[[t.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},i=a(6)(r,n);r.locals&&(t.exports=r.locals),t.hot.accept(505,function(){var e=a(505);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var a,r=0;for(a in t){if(!e||t[a]!==e[a])return!1;r++}for(a in e)r--;return 0===r}(r.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(e)}),t.hot.dispose(function(){i()})},894:function(t,e,a){"use strict";a.r(e);var r=a(144),n=a.n(r),i=a(233),s=a.n(i),c=a(103),o=a.n(c),l=a(104),p=a.n(l),u=a(105),h=a.n(u),m=a(106),d=a.n(m),f=a(107),v=a.n(f),y=a(2),g=a.n(y),b=a(338),S=a(1),k=a.n(S),w=a(143),F=a(518),E=a(28),A=a(757),O=function(t){function e(){var t,a;o()(this,e);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=h()(this,(t=d()(e)).call.apply(t,[this].concat(n)))).state={urlFilters:{}},a.parseUrlTitle=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split("-");return t.length>1?"".concat(Object(w.capitalize)(t[0])," ").concat(Object(w.capitalize)(t[1])," Actions"):"".concat(Object(w.capitalize)(t[0]))},a}return v()(e,t),p()(e,[{key:"componentDidMount",value:function(){var t=s()(n.a.mark(function t(){var e;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.props.match.params.type.includes("-risk")?(e=E.m[this.props.match.params.type],this.setState({urlFilters:{total_risk:"".concat(e)}})):this.setState({urlFilters:{category:"".concat(E.k[this.props.match.params.type])}});case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.urlFilters;return g.a.createElement(g.a.Fragment,null,g.a.createElement(b.PageHeader,null,g.a.createElement(F.a,{current:this.parseUrlTitle(this.props.match.params.type),match:this.props.match}),g.a.createElement(b.PageHeaderTitle,{title:this.parseUrlTitle(this.props.match.params.type)})),g.a.createElement(A.a,{externalFilters:t}))}}]),e}(y.Component);O.propTypes={match:k.a.any},e.default=O}}]);