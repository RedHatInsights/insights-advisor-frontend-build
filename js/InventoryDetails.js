(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{497:function(n,e,t){var r=t(510),a=t(511),o=t(512);n.exports=function(n,e){return r(n)||a(n,e)||o()}},500:function(n,e,t){(n.exports=t(5)(!1)).push([n.i,"nav.pf-c-breadcrumb ol {\n  padding-left: 0;\n  margin-left: 0;\n  margin-top: 0; }\n\nnav.pf-c-breadcrumb li {\n  text-transform: capitalize;\n  margin-top: 0; }\n",""])},510:function(n,e){n.exports=function(n){if(Array.isArray(n))return n}},511:function(n,e){n.exports=function(n,e){var t=[],r=!0,a=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!e||t.length!==e);r=!0);}catch(n){a=!0,o=n}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return t}},512:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},550:function(n,e,t){"use strict";var r=t(141),a=t.n(r),o=t(497),i=t.n(o),c=t(2),s=t.n(c),l=t(93),p=t(255),u=t(256),d=t(233),f=t.n(d),m=t(68),v=t(1),g=t.n(v),b=t(495);t(551);function y(n,e){var t=Object.keys(n);return Object.getOwnPropertySymbols&&t.push.apply(t,Object.getOwnPropertySymbols(n)),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t}var h=function(n){var e=Object(c.useState)([]),t=i()(e,2),r=t[0],a=t[1],o=Object(c.useState)(!1),d=i()(o,2),f=d[0],m=d[1],v=n.breadcrumbs,g=n.current,b=n.fetchRule,y=n.match,h=n.ruleFetchStatus,_=n.rule,w=Object(c.useCallback)(function(){var n=[];if(void 0!==v[0])n.push(v[0]);else{var e=y.url.split("/")[1];n.push({title:e,navigate:"/".concat(e)})}if(void 0!==y.params.id&&void 0!==y.params.inventoryId){var t=_.description;n.push({title:t,navigate:"/".concat(y.url.split("/")[1],"/").concat(y.params.id)})}a(n)},[v,y.params.id,y.params.inventoryId,y.url,_.description]);return Object(c.useEffect)(function(){void 0!==y.params.inventoryId?b({rule_id:y.params.id}):w()},[w,b,y.params.id,y.params.inventoryId]),Object(c.useEffect)(function(){"fulfilled"!==h||f||(m(!0),w())},[w,h,f]),s.a.createElement(s.a.Fragment,null,("fulfilled"===h||r.length>0)&&s.a.createElement(p.a,null,r.map(function(n,e){return s.a.createElement(u.a,{key:e},s.a.createElement(l.a,{to:n.navigate},n.title))}),s.a.createElement(u.a,{isActive:!0},g)),"pending"===h&&"Loading...")};h.propTypes={breadcrumbs:g.a.arrayOf(Object),current:g.a.string,fetchRule:g.a.func,match:g.a.object,rule:g.a.object,ruleFetchStatus:g.a.string};e.a=f()(Object(m.connect)(function(n,e){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?y(t,!0).forEach(function(e){a()(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):y(t).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}({breadcrumbs:n.AdvisorStore.breadcrumbs,rule:n.AdvisorStore.rule,ruleFetchStatus:n.AdvisorStore.ruleFetchStatus},n,{},e)},function(n){return{fetchRule:function(e){return n(b.a(e))}}})(h))},551:function(n,e,t){var r=t(500);"string"==typeof r&&(r=[[n.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=t(6)(r,a);r.locals&&(n.exports=r.locals),n.hot.accept(500,function(){var e=t(500);if("string"==typeof e&&(e=[[n.i,e,""]]),!function(n,e){var t,r=0;for(t in n){if(!e||n[t]!==e[t])return!1;r++}for(t in e)r--;return 0===r}(r.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(e)}),n.hot.dispose(function(){o()})},553:function(n,e,t){(n.exports=t(5)(!1)).push([n.i,":root {\n  --ins-color--orange: #ec7a08; }\n\n.ins-empty-rule-cards div {\n  text-align: center; }\n\n.ins-c-rules-card .pf-c-card__header .pf-l-split__item:first-of-type {\n  white-space: nowrap;\n  margin-right: 5px;\n  margin-right: 0.3125rem; }\n\n.ins-c-rules-card .ins-l-icon-group__with-major {\n  display: inline; }\n\n.ins-c-rules-card .space-between {\n  display: flex;\n  justify-content: space-between; }\n\n.ins-c-rules-card .pf-c-card__header div {\n  font-weight: 600; }\n\n.ins-c-rules-card + .ins-c-rules-card {\n  margin-top: var(--pf-global--spacer--xl); }\n\n.ins-c-rules-card a[disabled] {\n  cursor: not-allowed;\n  color: var(--pf-global--disabled-color--200); }\n\n.ins-c-rules-card a[disabled]:hover {\n  text-decoration: none; }\n\n.ins-c-inventory-advisor__card .ins-m-card__flat {\n  box-shadow: none;\n  border: 1px solid #dcdcdc;\n  border-radius: 5px; }\n\n.ins-c-inventory-advisor__card .pf-c-card__body svg {\n  margin-right: 5px;\n  margin-right: 0.3125rem; }\n\n.ins-c-inventory-advisor__card pre {\n  display: block;\n  padding: 10px;\n  padding: 0.59375rem;\n  margin-top: 5px;\n  margin-top: 0.3125rem;\n  margin-bottom: 10px;\n  margin-bottom: 0.625rem;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px; }\n\n.ins-c-inventory-advisor__card pre code {\n  white-space: pre-wrap; }\n\n.ins-c-inventory-advisor__card ol {\n  margin-top: 10px;\n  margin-top: 0.625rem;\n  margin-left: 15px;\n  margin-left: 0.9375rem; }\n\n.ins-c-inventory-advisor__card p + pre, .ins-c-inventory-advisor__card ul + pre {\n  margin-bottom: 20px;\n  margin-bottom: 1.25rem; }\n\n.ins-c-inventory-advisor__card .pf-c-list {\n  margin: 5px 0px;\n  margin: 0.3125rem 0rem; }\n\n.ins-c-inventory-advisor__card table {\n  width: 100%;\n  margin-top: 15px;\n  margin-top: 0.9375rem; }\n\n.ins-c-inventory-advisor__card table tr {\n  border-bottom: 1px solid #ededed; }\n\n.ins-c-inventory-advisor__card table th, .ins-c-inventory-advisor__card table td {\n  padding: 16px;\n  padding: 1rem; }\n\n.ins-c-inventory-advisor__card table td {\n  background: white !important; }\n\n.ins-c-inventory-advisor__card table th {\n  text-align: left !important; }\n\n.batterySectionOverrides {\n  margin-top: 16px; }\n\n.smallFontSizeOverride {\n  font-size: var(--pf-global--FontSize--sm); }\n\n.successColorOverride {\n  color: var(--pf-global--success-color--200); }\n\n:root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\nsection.ins-l-content {\n  padding: var(--pf-global--spacer--lg); }\n\nsection.ins-l-button-group {\n  margin: 24px 0px;\n  margin: 1.5rem 0rem; }\n\nsection.ins-l-button-group > * {\n  display: inline; }\n\nsection.ins-l-button-group * + * {\n  margin-left: 5px;\n  margin-left: 0.3125rem; }\n\nsection.ins-l-icon-group * + * {\n  margin-left: 10px; }\n\nsection.ins-l-icon-group__with-major * + * {\n  margin-left: 7.5px; }\n\nsection.ins-l-icon-group__with-major .ins-battery:last-of-type {\n  padding-left: 15px;\n  border-left: 2px solid #eaeaea; }\n\nsection.ins-l-icon-group__with-major .ins-battery:last-of-type span.label {\n  font-weight: 500;\n  margin: 0 10px; }\n",""])},892:function(n,e,t){"use strict";t.r(e);var r,a=t(142),o=t.n(a),i=t(141),c=t.n(i),s=t(234),l=t.n(s),p=t(98),u=t.n(p),d=t(99),f=t.n(d),m=t(100),v=t.n(m),g=t(101),b=t.n(g),y=t(102),h=t.n(y),_=t(2),w=t.n(_),x=t(75),O=t(50),j=t(274),E=t(275),S=t(10),I=t(1),D=t.n(I),k=t(68),P=t(233),A=t.n(P),C=t(237),F=t.n(C),R=t(335),T=t(290),N=t(550),z=t(509);t(893);function H(n,e){var t=Object.keys(n);return Object.getOwnPropertySymbols&&t.push.apply(t,Object.getOwnPropertySymbols(n)),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t}function M(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?H(t,!0).forEach(function(e){c()(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):H(t).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}var J=F()()(r=function(n){function e(){var n,t;u()(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=v()(this,(n=b()(e)).call.apply(n,[this].concat(a)))).state={InventoryDetails:function(){return w.a.createElement(z.a,null)}},t}var t;return h()(e,n),f()(e,[{key:"componentDidMount",value:function(){this.fetchInventoryDetails()}},{key:"fetchInventoryDetails",value:(t=l()(o.a.mark(function n(){var e,t,r,a,i,c,s;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,insights.loadInventory({react:w.a,reactRouterDom:x,reactCore:O,reactIcons:S});case 2:e=n.sent,t=e.inventoryConnector,r=e.mergeWithDetail,a=e.INVENTORY_ACTION_TYPES,i=t(),c=i.InventoryDetailHead,s=i.AppInfo,this.getRegistry().register(M({},r(Object(T.b)(a)))),this.setState({InventoryDetail:c,AppInfo:s});case 9:case"end":return n.stop()}},n,this)})),function(){return t.apply(this,arguments)})},{key:"onNavigate",value:function(n){this.props.history.push("/".concat(n))}},{key:"render",value:function(){var n=this.state,e=n.InventoryDetail,t=n.AppInfo,r=this.props.entity;return w.a.createElement(w.a.Fragment,null,w.a.createElement(R.PageHeader,{className:"pf-m-light ins-inventory-detail"},r&&w.a.createElement(N.a,{current:r.display_name||r.id,match:this.props.match}),e&&w.a.createElement(e,{hideBack:!0})),w.a.createElement(R.Main,null,w.a.createElement(j.a,{gutter:"md"},w.a.createElement(E.a,{span:12},t&&w.a.createElement(t,null)))))}}]),e}(w.a.Component))||r;J.contextTypes={store:D.a.object},J.propTypes={history:D.a.object,entity:D.a.object,addAlert:D.a.func,match:D.a.any},e.default=A()(Object(k.connect)(function(n){return{entity:n.entityDetails&&n.entityDetails.entity}},null)(J))},893:function(n,e,t){var r=t(553);"string"==typeof r&&(r=[[n.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=t(6)(r,a);r.locals&&(n.exports=r.locals),n.hot.accept(553,function(){var e=t(553);if("string"==typeof e&&(e=[[n.i,e,""]]),!function(n,e){var t,r=0;for(t in n){if(!e||n[t]!==e[t])return!1;r++}for(t in e)r--;return 0===r}(r.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(e)}),n.hot.dispose(function(){o()})}}]);