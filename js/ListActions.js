(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{588:function(e,t,a){var n=a(607),r=a(610),i=a(337),s=a(44),o=a(595);e.exports=function(e){return"function"==typeof e?e:null==e?i:"object"==typeof e?s(e)?r(e[0],e[1]):n(e):o(e)}},593:function(e,t,a){var n=a(74);e.exports=function(e){return e==e&&!n(e)}},594:function(e,t){e.exports=function(e,t){return function(a){return null!=a&&a[e]===t&&(void 0!==t||e in Object(a))}}},595:function(e,t,a){var n=a(612),r=a(613),i=a(340),s=a(162);e.exports=function(e){return i(e)?n(s(e)):r(e)}},601:function(e,t){e.exports=function(e){return function(t){return e(t)}}},606:function(e,t,a){var n=a(341),r=a(588),i=a(614),s=a(615),o=a(601),c=a(616),l=a(337);e.exports=function(e,t,a){var u=-1;t=n(t.length?t:[l],o(r));var m=i(e,function(e,a,r){return{criteria:n(t,function(t){return t(e)}),index:++u,value:e}});return s(m,function(e,t){return c(e,t,a)})}},607:function(e,t,a){var n=a(608),r=a(609),i=a(594);e.exports=function(e){var t=r(e);return 1==t.length&&t[0][2]?i(t[0][0],t[0][1]):function(a){return a===e||n(a,e,t)}}},608:function(e,t,a){var n=a(166),r=a(219),i=1,s=2;e.exports=function(e,t,a,o){var c=a.length,l=c,u=!o;if(null==e)return!l;for(e=Object(e);c--;){var m=a[c];if(u&&m[2]?m[1]!==e[m[0]]:!(m[0]in e))return!1}for(;++c<l;){var p=(m=a[c])[0],f=e[p],d=m[1];if(u&&m[2]){if(void 0===f&&!(p in e))return!1}else{var h=new n;if(o)var v=o(f,d,p,e,t,h);if(!(void 0===v?r(d,f,i|s,o,h):v))return!1}}return!0}},609:function(e,t,a){var n=a(593),r=a(218);e.exports=function(e){for(var t=r(e),a=t.length;a--;){var i=t[a],s=e[i];t[a]=[i,s,n(s)]}return t}},610:function(e,t,a){var n=a(219),r=a(611),i=a(351),s=a(340),o=a(593),c=a(594),l=a(162),u=1,m=2;e.exports=function(e,t){return s(e)&&o(t)?c(l(e),t):function(a){var s=r(a,e);return void 0===s&&s===t?i(a,e):n(t,s,u|m)}}},611:function(e,t,a){var n=a(339);e.exports=function(e,t,a){var r=null==e?void 0:n(e,t);return void 0===r?a:r}},612:function(e,t){e.exports=function(e){return function(t){return null==t?void 0:t[e]}}},613:function(e,t,a){var n=a(339);e.exports=function(e){return function(t){return n(t,e)}}},614:function(e,t){e.exports=function(e,t){for(var a=-1,n=null==e?0:e.length,r=Array(n);++a<n;)r[a]=t(e[a],a,e);return r}},615:function(e,t){e.exports=function(e,t){var a=e.length;for(e.sort(t);a--;)e[a]=e[a].value;return e}},616:function(e,t,a){var n=a(617);e.exports=function(e,t,a){for(var r=-1,i=e.criteria,s=t.criteria,o=i.length,c=a.length;++r<o;){var l=n(i[r],s[r]);if(l)return r>=c?l:l*("desc"==a[r]?-1:1)}return e.index-t.index}},617:function(e,t,a){var n=a(167);e.exports=function(e,t){if(e!==t){var a=void 0!==e,r=null===e,i=e==e,s=n(e),o=void 0!==t,c=null===t,l=t==t,u=n(t);if(!c&&!u&&!s&&e>t||s&&o&&l&&!c&&!u||r&&o&&l||!a&&l||!i)return 1;if(!r&&!s&&!u&&e<t||u&&a&&i&&!r&&!s||c&&a&&i||!o&&i||!l)return-1}return 0}},618:function(e,t,a){(e.exports=a(161)(!1)).push([e.i,"nav.pf-c-breadcrumb li {\n  text-transform: capitalize; }\n",""])},619:function(e,t,a){(e.exports=a(161)(!1)).push([e.i,"/* stylelint-enable */\n:root {\n  --ins-color--orange: #ec7a08; }\n\n.page__actions .actions__view--title {\n  text-transform: capitalize; }\n\n.page__actions .actions__view table.rules-table th:first-child {\n  width: 50%; }\n\n.page__actions .actions__view table.rules-table td {\n  padding: var(--pf-global--spacer--lg); }\n  .page__actions .actions__view table.rules-table td:not(:first-of-type) {\n    text-align: center; }\n\n.page__actions .actions__view table.rules-table tfoot tr td:first-child {\n  padding: 0; }\n\n.actions__description {\n  margin: var(--pf-global--spacer--xl) 0; }\n\n@media only screen and (min-width: 768px) {\n  .ins-l-icon-group__vertical > *:not(:first-child) {\n    margin-top: 5px;\n    margin-top: 0.3125rem; } }\n",""])},643:function(e,t,a){"use strict";var n=a(1),r=a.n(n),i=a(303),s=a(306),o=a(304),c=a(234),l=a(0),u=a.n(l),m=function(e){var t=e.message;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{className:"ins-empty-rule-cards"},r.a.createElement(s.a,null,r.a.createElement(c.a,{size:"lg"})),r.a.createElement(o.a,null,t)))};t.a=m,m.propTypes={message:u.a.string}},644:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(1),r=a.n(n),i=a(113),s=a(301),o=a(302),c=a(0),l=a.n(c);a(692);function u(e,t){var a=[];return void 0!==e.params.type&&(void 0!==t.breadcrumbs[0].navigate?a.push(t.breadcrumbs[0]):a.push({title:"Actions",navigate:"/actions"})),void 0!==e.params.id&&"Rules"!==a[0].title&&a.push({title:e.params.type.replace("-"," "),navigate:a[0].navigate+"/"+e.params.type}),a}var m=function(e){var t=e.items,a=e.current;return r.a.createElement(s.a,null,t.map(function(e,t){return r.a.createElement(o.a,{key:t},r.a.createElement(i.a,{to:e.navigate},e.title))}),r.a.createElement(o.a,{to:"",isActive:!0},a))};m.propTypes={items:l.a.array,current:l.a.string},t.b=m},645:function(e,t,a){var n=a(619);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},i=a(338)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(619,function(){var t=a(619);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)}),e.hot.dispose(function(){i()})},690:function(e,t,a){"use strict";a.r(t);var n=a(124),r=a.n(n),i=a(119),s=a.n(i),o=a(120),c=a.n(o),l=a(121),u=a.n(l),m=a(122),p=a.n(m),f=a(123),d=a.n(f),h=a(163),v=a.n(h),g=a(691),y=a.n(g),b=a(1),E=a.n(b),_=a(113),k=a(73),S=a(0),w=a.n(S),P=a(80),x=a(311),R=a(312),A=a(600),C=a(590),D=a(643),I=a(644),F=(a(645),function(e){function t(e){var a;return s()(this,t),(a=u()(this,p()(t).call(this,e))).state={summary:"",cols:["Rule","Likelihood","Impact","Total Risk","Systems","Ansible"],rows:[],sortBy:{},filters:{},itemsPerPage:10,page:1,things:[]},a.onSortChange=a.onSortChange.bind(v()(v()(a))),a.toggleCol=a.toggleCol.bind(v()(v()(a))),a.setPage=a.setPage.bind(v()(v()(a))),a.setPerPage=a.setPerPage.bind(v()(v()(a))),a}return d()(t,e),c()(t,[{key:"componentDidMount",value:function(){document.getElementById("root").classList.add("actions__view");var e={page_size:this.state.itemsPerPage,impacting:!0};if(this.props.match.params.type.includes("-risk")){var t={"critical-risk":4,"high-risk":3,"medium-risk":2,"low-risk":1}[this.props.match.params.type];this.setState({filters:{severity:t}}),e.severity=t}else this.setState({filters:{category:this.props.match.params.type}}),e.category=this.props.match.params.type;this.props.fetchRules(e)}},{key:"componentDidUpdate",value:function(e){var t=this;if(this.props.rules!==e.rules){var a=this.props.rules.results;this.setState({summary:this.props.rules.summary});var n=a.map(function(e,a){return{cells:[E.a.createElement(_.a,{key:a,to:"/actions/".concat(t.props.match.params.type,"/").concat(e.rule_id)},e.description),E.a.createElement(k.Battery,{key:a,label:"Likelihood",labelHidden:!0,severity:e.likelihood}),E.a.createElement(k.Battery,{key:a,label:"Impact",labelHidden:!0,severity:e.impact.impact}),E.a.createElement(k.Battery,{key:a,label:"Total Risk",labelHidden:!0,severity:e.severity}),E.a.createElement("div",{key:a},e.impacted_systems_count),E.a.createElement(k.Ansible,{key:a,unsupported:e.has_playbook})]}});this.setState({rows:n})}}},{key:"toggleCol",value:function(e,t,a){var n=this.state,i=n.rows,s=n.page,o=n.itemsPerPage;i[(1===s?0:s*o-o)+t].selected=a,this.setState(r()({},this.state,{rows:i}))}},{key:"onSortChange",value:function(e,t,a){var n=y()(this.state.rows,[function(e){return e.cells[t]}]);this.setState(r()({},this.state,{rows:k.SortDirection.up===a?n:n.reverse(),sortBy:{index:t,direction:a}}))}},{key:"setPage",value:function(e){this.setState(function(){return{page:e}}),this.props.fetchRules(r()({page:e,page_size:this.state.itemsPerPage},this.state.filters))}},{key:"setPerPage",value:function(e){this.setState(function(){return{itemsPerPage:e}}),this.props.fetchRules(r()({page_size:e},this.state.filters))}},{key:"parseUrlTitle",value:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split("-");return e.length>1?"".concat(e[0]," ").concat(e[1]," Actions"):"".concat(e)}},{key:"render",value:function(){var e=this.props,t=e.rulesFetchStatus,a=e.rules,n=e.breadcrumbs;return E.a.createElement(E.a.Fragment,null,E.a.createElement(k.PageHeader,null,E.a.createElement(I.b,{current:this.parseUrlTitle(this.props.match.params.type),items:Object(I.a)(this.props.match,{breadcrumbs:n})}),E.a.createElement(k.PageHeaderTitle,{className:"actions__view--title",title:this.parseUrlTitle(this.props.match.params.type)})),E.a.createElement(k.Main,null,E.a.createElement(x.a,{gutter:"md"},E.a.createElement(R.a,null,E.a.createElement("p",null,this.state.summary)),E.a.createElement(R.a,{className:"advisor-l-actions__filters"},"Filters"),"fulfilled"===t&&E.a.createElement(R.a,{className:"advisor-l-actions__table"},E.a.createElement(k.Table,{className:"rules-table",onItemSelect:this.toggleCol,hasCheckbox:!1,header:this.state.cols,sortBy:this.state.sortBy,rows:this.state.rows,onSort:this.onSortChange,footer:E.a.createElement(k.Pagination,{numberOfItems:a.count,onPerPageSelect:this.setPerPage,page:this.state.page,onSetPage:this.setPage,itemsPerPage:this.state.itemsPerPage})})),"pending"===t&&E.a.createElement(C.a,null),"failed"===t&&E.a.createElement(D.a,{message:"There was an error fetching rules list."}))))}}]),t}(b.Component));F.propTypes={breadcrumbs:w.a.array,fetchRules:w.a.func,match:w.a.any,rulesFetchStatus:w.a.string,rules:w.a.object};t.default=Object(k.routerParams)(Object(P.connect)(function(e,t){return r()({breadcrumbs:e.AdvisorStore.breadcrumbs,rules:e.AdvisorStore.rules,rulesFetchStatus:e.AdvisorStore.rulesFetchStatus},t)},function(e){return{fetchRules:function(t){return e(A.b(t))}}})(F))},691:function(e,t,a){var n=a(355),r=a(606),i=a(345),s=a(346),o=i(function(e,t){if(null==e)return[];var a=t.length;return a>1&&s(e,t[0],t[1])?t=[]:a>2&&s(t[0],t[1],t[2])&&(t=[t[0]]),r(e,n(t,1),[])});e.exports=o},692:function(e,t,a){var n=a(618);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},i=a(338)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(618,function(){var t=a(618);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)}),e.hot.dispose(function(){i()})},840:function(e,t,a){"use strict";a.r(t);var n,r=a(124),i=a.n(r),s=a(165),o=a.n(s),c=a(220),l=a.n(c),u=a(119),m=a.n(u),p=a(120),f=a.n(p),d=a(121),h=a.n(d),v=a(122),g=a.n(v),y=a(123),b=a.n(y),E=a(163),_=a.n(E),k=a(100),S=a.n(k),w=a(1),P=a.n(w),x=a(73),R=a(80),A=a(0),C=a.n(A),D=a(311),I=a(312),F=a(307),T=a(308),N=a(303),B=a(306),j=a(304),O=a(644),H=a(114),L=a(646),z=a.n(L),M=a(600),U=a(36),K=a(590),q=a(643),J=a(160),W=a(217),G=a(37),Q=a(143),V=Object(x.registry)()(n=function(e){function t(e){var a;return m()(this,t),(a=h()(this,g()(t).call(this,e))).state={Inventory:function(){return P.a.createElement(K.a,null)}},a.fetchInventory(),a}return b()(t,e),f()(t,[{key:"fetchInventory",value:function(){var e=l()(o.a.mark(function e(){var t,a,n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.items,e.next=3,insights.loadInventory({react:P.a,pfReact:{PaginationRow:Q.a},reactRouterDom:J,reactCore:W,reactIcons:G});case 3:a=e.sent,n=a.inventoryConnector,r=a.mergeWithEntities,this.getRegistry().register(i()({},r())),this.setState({Inventory:n().InventoryTable,items:t});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.Inventory,a=e.items;return P.a.createElement(t,{items:a})}}]),t}(P.a.Component))||n;V.propTypes={items:C.a.array};var X=V,Y=(a(645),a(636)),Z=function(e){function t(){var e,a;m()(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a=h()(this,(e=g()(t)).call.apply(e,[this].concat(r))),S()(_()(_()(a)),"state",{kbaDetails:{},kbaDetailsLoading:!1}),a}return b()(t,e),f()(t,[{key:"componentDidMount",value:function(){this.props.fetchRule({rule_id:this.props.match.params.id}),this.props.fetchSystem({rule_id:this.props.match.params.id})}},{key:"componentDidUpdate",value:function(){"fulfilled"!==this.props.ruleFetchStatus||this.state.kbaDetailsLoading||(this.setState({kbaDetailsLoading:!0}),this.fetchKbaDetails())}},{key:"fetchKbaDetails",value:function(){var e=l()(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y.a.get("/rs/search?q=id:".concat(this.props.rule.node_id));case 3:t=e.sent.data.response.docs[0],this.setState({kbaDetails:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.props.addNotification({variant:"danger",dismissable:!0,title:"",description:"KBA fetch failed."});case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"getSelectedItems",value:function(){return this.props.entities&&this.props.entities.loaded?this.props.entities.rows.filter(function(e){return e.selected}).map(function(e){return e.id}):[]}},{key:"remediationDataProvider",value:function(){return{issues:[{id:"advisor:".concat(this.props.match.params.id),description:this.props.rule.description}],systems:this.getSelectedItems()}}},{key:"onRemediationCreated",value:function(e){this.props.addNotification(e.getNotification())}},{key:"render",value:function(){var e=this.props,t=e.breadcrumbs,a=e.ruleFetchStatus,n=e.rule,r=e.systemFetchStatus,i=e.system,s=this.state.kbaDetails;return P.a.createElement(P.a.Fragment,null,P.a.createElement(x.PageHeader,null,P.a.createElement(O.b,{current:n.description||"",items:Object(O.a)(this.props.match,{breadcrumbs:t})}),P.a.createElement(x.PageHeaderTitle,{title:n.description||""})),P.a.createElement(x.Main,{className:"actions__list"},P.a.createElement(P.a.Fragment,null,"fulfilled"===a&&P.a.createElement(D.a,{gutter:"md"},P.a.createElement(I.a,null,P.a.createElement(F.a,{gutter:"md"},P.a.createElement(T.a,{md:8,sm:12},P.a.createElement(F.a,null,P.a.createElement(T.a,{className:"actions__description"},"string"==typeof n.summary&&Boolean(n.summary)&&P.a.createElement(z.a,{source:n.summary,escapeHtml:!1})),s.view_uri&&P.a.createElement(T.a,null,P.a.createElement("a",{href:s.view_uri},"Knowledgebase Article")),P.a.createElement(T.a,null,"Published: ","".concat(new Date(n.publish_date).toLocaleDateString())),P.a.createElement(T.a,null,"Tags: ","".concat(n.tags||"Not available")))),P.a.createElement(T.a,{md:4,sm:12},P.a.createElement(F.a,{gutter:"sm",className:"actions__detail"},P.a.createElement(T.a,{sm:12,md:12}," ",P.a.createElement(x.Ansible,{unsupported:n.has_playbook})," "),P.a.createElement(T.a,{sm:8,md:12},P.a.createElement(F.a,{className:"ins-l-icon-group__vertical",sm:4,md:12},P.a.createElement(T.a,null," ",P.a.createElement(x.Battery,{label:"Impact",severity:n.impact.impact})," "),P.a.createElement(T.a,null," ",P.a.createElement(x.Battery,{label:"Likelihood",severity:n.likelihood})," "),P.a.createElement(T.a,null," ",P.a.createElement(x.Battery,{label:"Total Risk",severity:n.severity})," "))),P.a.createElement(T.a,{sm:4,md:12},P.a.createElement(x.Battery,{label:"Risk Of Change",severity:n.resolution_set.find(function(e){return e.system_type===U.i.rhel}).resolution_risk.risk})),n.has_playbook&&P.a.createElement(T.a,null,P.a.createElement(x.RemediationButton,{isDisabled:0===this.getSelectedItems().length,dataProvider:this.remediationDataProvider,onRemediationCreated:this.onRemediationCreated})))))),P.a.createElement(I.a,null,P.a.createElement(N.a,null,P.a.createElement(B.a,null,P.a.createElement("strong",null,"Affected Hosts")),P.a.createElement(j.a,null,"fulfilled"===r&&P.a.createElement(X,{items:i.host_ids}),"pending"===r&&P.a.createElement(K.a,null))))),"pending"===a&&P.a.createElement(K.a,null),"failed"===a&&P.a.createElement(q.a,{message:"There was an error fetching rules list."}))))}}]),t}(w.Component);Z.propTypes={breadcrumbs:C.a.array,match:C.a.any,fetchRule:C.a.func,ruleFetchStatus:C.a.string,rule:C.a.object,fetchSystem:C.a.func,systemFetchStatus:C.a.string,system:C.a.object,entities:C.a.any,addNotification:C.a.func.isRequired};t.default=Object(x.routerParams)(Object(R.connect)(function(e,t){return i()({rule:e.AdvisorStore.rule,ruleFetchStatus:e.AdvisorStore.ruleFetchStatus,breadcrumbs:e.AdvisorStore.breadcrumbs,system:e.AdvisorStore.system,systemFetchStatus:e.AdvisorStore.systemFetchStatus,entities:e.entities},e,t)},function(e){return{fetchRule:function(t){return e(M.a(t))},fetchSystem:function(t){return e(M.d(t))},addNotification:function(t){return e(Object(H.addNotification)(t))}}})(Z))}}]);
//# sourceMappingURL=../sourcemaps/ListActions.js.map