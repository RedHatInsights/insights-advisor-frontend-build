(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{516:function(t,e,r){var n=r(526),a=r(527),o=r(528);t.exports=function(t,e){return n(t)||a(t,e)||o()}},519:function(t,e,r){(t.exports=r(6)(!1)).push([t.i,"nav.pf-c-breadcrumb li{text-transform:capitalize}\n",""])},526:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},527:function(t,e){t.exports=function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){a=!0,o=t}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}},528:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},541:function(t,e,r){"use strict";var n=r(164),a=r.n(n),o=r(516),i=r.n(o),c=r(2),s=r.n(c),l=r(84),p=r(283),u=r(284),d=r(271),f=r.n(d),m=r(75),g=r(1),v=r.n(g),y=r(27),b=r(515),h=(r(542),r(29));function _(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var w=function(t){var e=t.current,r=t.fetchRule,n=t.match,a=t.ruleFetchStatus,o=t.rule,d=t.intl,f=Object(c.useState)([]),m=i()(f,2),g=m[0],v=m[1],y=Object(c.useState)(!1),b=i()(y,2),_=b[0],w=b[1],O=Object(c.useCallback)((function(){var t=[],e=n.url.split("/");t.push({title:e[1],navigate:"/".concat(e[1])}),"rules"===e[1]&&(e[1]+e[2]!=="rulessystems"?t.push({title:d.formatMessage(h.a.rules),navigate:"/rules"}):t.push({title:d.formatMessage(h.a.systems),navigate:"/rules/systems"})),void 0!==n.params.id&&void 0!==n.params.inventoryId&&t.push({title:o.description,navigate:"/".concat(n.url.split("/")[1],"/").concat(n.params.id)}),v(t)}),[d,n.params.id,n.params.inventoryId,n.url,o.description]);return Object(c.useEffect)((function(){var t=n.url.split("/");void 0!==n.params.inventoryId&&"systems"!==t[2]?r({rule_id:n.params.id}):O()}),[O,r,n.params.id,n.params.inventoryId,n.url]),Object(c.useEffect)((function(){"fulfilled"!==a||_||(w(!0),O())}),[O,a,_]),s.a.createElement(s.a.Fragment,null,("fulfilled"===a||g.length>0)&&s.a.createElement(p.a,null,g.map((function(t,e){return s.a.createElement(u.a,{key:e},s.a.createElement(l.Link,{to:t.navigate},t.title))})),s.a.createElement(u.a,{isActive:!0},e)),"pending"===a&&d.formatMessage(h.a.loading))};w.propTypes={current:v.a.string,fetchRule:v.a.func,match:v.a.object,rule:v.a.object,ruleFetchStatus:v.a.string,intl:v.a.any};e.a=Object(y.c)(f()(Object(m.connect)((function(t,e){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_(r,!0).forEach((function(e){a()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({rule:t.AdvisorStore.rule,ruleFetchStatus:t.AdvisorStore.ruleFetchStatus},e)}),(function(t){return{fetchRule:function(e){return t(b.a(e))}}}))(w)))},542:function(t,e,r){var n=r(519);"string"==typeof n&&(n=[[t.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=r(7)(n,a);n.locals&&(t.exports=n.locals),t.hot.accept(519,(function(){var e=r(519);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var r,n=0;for(r in t){if(!e||t[r]!==e[r])return!1;n++}for(r in e)n--;return 0===n}(n.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(e)})),t.hot.dispose((function(){o()}))},595:function(t,e,r){(t.exports=r(6)(!1)).push([t.i,":root{--ins-color--orange: #ec7a08}.ins-empty-rule-cards div{text-align:center}.ins-c-rules-card .pf-c-card__header .pf-l-split__item:first-of-type{white-space:nowrap;margin-right:5px;margin-right:0.3125rem}.ins-c-rules-card .ins-l-icon-group__with-major{display:inline}.ins-c-rules-card .space-between{display:flex;justify-content:space-between}.ins-c-rules-card .pf-c-card__header div{font-weight:600}.ins-c-rules-card+.ins-c-rules-card{margin-top:var(--pf-global--spacer--xl)}.ins-c-rules-card a[disabled]{cursor:not-allowed;color:var(--pf-global--disabled-color--200)}.ins-c-rules-card a[disabled]:hover{text-decoration:none}.ins-c-inventory-advisor__card .ins-m-card__flat{box-shadow:none;border:1px solid #dcdcdc;border-radius:5px}.ins-c-inventory-advisor__card .pf-c-card__body svg{margin-right:5px;margin-right:0.3125rem}.ins-c-inventory-advisor__card pre{display:block;padding:10px;padding:0.59375rem;margin-top:5px;margin-top:0.3125rem;margin-bottom:10px;margin-bottom:0.625rem;color:#333;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}.ins-c-inventory-advisor__card pre code{white-space:pre-wrap}.ins-c-inventory-advisor__card ol{margin-top:10px;margin-top:0.625rem;margin-left:15px;margin-left:0.9375rem}.ins-c-inventory-advisor__card p+pre,.ins-c-inventory-advisor__card ul+pre{margin-bottom:20px;margin-bottom:1.25rem}.ins-c-inventory-advisor__card .pf-c-list{margin:5px 0px;margin:0.3125rem 0rem}.ins-c-inventory-advisor__card table{width:100%;margin-top:15px;margin-top:0.9375rem}.ins-c-inventory-advisor__card table tr{border-bottom:1px solid #ededed}.ins-c-inventory-advisor__card table th,.ins-c-inventory-advisor__card table td{padding:16px;padding:1rem}.ins-c-inventory-advisor__card table td{background:white !important}.ins-c-inventory-advisor__card table th{text-align:left !important}.batterySectionOverrides{margin-top:16px}.smallFontSizeOverride{font-size:var(--pf-global--FontSize--sm)}.successColorOverride{color:var(--pf-global--success-color--200)}.remediationButtonOverride{margin-top:-8px}:root{--ins-color--orange: #ec7a08}button:focus{outline:none}section.ins-l-content{padding:var(--pf-global--spacer--lg)}section.ins-l-button-group{margin:24px 0px;margin:1.5rem 0rem}section.ins-l-button-group>*{display:inline}section.ins-l-button-group *+*{margin-left:5px;margin-left:0.3125rem}section.ins-l-icon-group *+*{margin-left:10px}section.ins-l-icon-group__with-major *+*{margin-left:7.5px}section.ins-l-icon-group__with-major .ins-battery:last-of-type{padding-left:15px;border-left:2px solid #eaeaea}section.ins-l-icon-group__with-major .ins-battery:last-of-type span.label{font-weight:500;margin:0 10px}\n",""])},953:function(t,e,r){"use strict";r.r(e);var n,a=r(165),o=r.n(a),i=r(164),c=r.n(i),s=r(272),l=r.n(s),p=r(106),u=r.n(p),d=r(107),f=r.n(d),m=r(108),g=r.n(m),v=r(109),y=r.n(v),b=r(110),h=r.n(b),_=r(2),w=r.n(_),O=r(84),x=r(59),j=r(305),E=r(306),S=r(11),I=r(359),k=r(1),D=r.n(k),P=r(75),A=r(271),R=r.n(A),C=r(274),F=r.n(C),T=r(358),M=r(316),N=r(541),z=r(522);r(954);function H(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function B(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?H(r,!0).forEach((function(e){c()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):H(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var J=F()()(n=function(t){function e(){var t,r;u()(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=g()(this,(t=y()(e)).call.apply(t,[this].concat(a)))).state={InventoryDetails:function(){return w.a.createElement(z.a,null)}},r}var r;return h()(e,t),f()(e,[{key:"componentDidMount",value:function(){this.fetchInventoryDetails()}},{key:"fetchInventoryDetails",value:(r=l()(o.a.mark((function t(){var e,r,n,a,i,c,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,insights.loadInventory({react:w.a,reactRouterDom:O,reactCore:x,reactIcons:S,pfReactTable:I});case 2:e=t.sent,r=e.inventoryConnector,n=e.mergeWithDetail,a=e.INVENTORY_ACTION_TYPES,i=r(),c=i.InventoryDetailHead,s=i.AppInfo,this.getRegistry().register(B({},n(Object(M.b)(a)))),this.setState({InventoryDetail:c,AppInfo:s});case 9:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"onNavigate",value:function(t){this.props.history.push("/".concat(t))}},{key:"render",value:function(){var t=this.state,e=t.InventoryDetail,r=t.AppInfo,n=this.props.entity;return w.a.createElement(w.a.Fragment,null,w.a.createElement(T.PageHeader,{className:"pf-m-light ins-inventory-detail"},n&&w.a.createElement(N.a,{current:n.display_name||n.id,match:this.props.match}),e&&w.a.createElement(e,{hideBack:!0})),w.a.createElement(T.Main,null,w.a.createElement(j.a,{gutter:"md"},w.a.createElement(E.a,{span:12},r&&w.a.createElement(r,null)))))}}]),e}(w.a.Component))||n;J.contextTypes={store:D.a.object},J.propTypes={history:D.a.object,entity:D.a.object,addAlert:D.a.func,match:D.a.any},e.default=R()(Object(P.connect)((function(t){return{entity:t.entityDetails&&t.entityDetails.entity}}),null)(J))},954:function(t,e,r){var n=r(595);"string"==typeof n&&(n=[[t.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=r(7)(n,a);n.locals&&(t.exports=n.locals),t.hot.accept(595,(function(){var e=r(595);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var r,n=0;for(r in t){if(!e||t[r]!==e[r])return!1;n++}for(r in e)n--;return 0===n}(n.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(e)})),t.hot.dispose((function(){o()}))}}]);
//# sourceMappingURL=InventoryDetails.js.map