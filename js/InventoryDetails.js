(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{526:function(e,t,r){(e.exports=r(6)(!1)).push([e.i,"nav.pf-c-breadcrumb li{text-transform:capitalize}\n",""])},545:function(e,t,r){"use strict";var n=r(159),a=r.n(n),i=r(270),o=r.n(i),c=r(2),s=r.n(c),l=r(97),p=r(287),u=r(288),d=r(269),f=r.n(d),m=r(96),g=r(1),v=r.n(g),b=r(27),y=r(519),h=(r(546),r(29));function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var O=function(e){var t=e.current,r=e.fetchRule,n=e.match,a=e.ruleFetchStatus,i=e.rule,d=e.intl,f=Object(c.useState)([]),m=o()(f,2),g=m[0],v=m[1],b=Object(c.useState)(!1),y=o()(b,2),_=y[0],O=y[1],w=Object(c.useCallback)((function(){var e=[],t=n.url.split("/");e.push({title:t[1],navigate:"/".concat(t[1])}),"rules"===t[1]&&(t[1]+t[2]!=="rulessystems"?e.push({title:d.formatMessage(h.a.rules),navigate:"/rules"}):e.push({title:d.formatMessage(h.a.systems),navigate:"/rules/systems"})),void 0!==n.params.id&&void 0!==n.params.inventoryId&&e.push({title:i.description,navigate:"/".concat(n.url.split("/")[1],"/").concat(n.params.id)}),v(e)}),[d,n.params.id,n.params.inventoryId,n.url,i.description]);return Object(c.useEffect)((function(){var e=n.url.split("/");void 0!==n.params.inventoryId&&"systems"!==e[2]?r({rule_id:n.params.id}):w()}),[w,r,n.params.id,n.params.inventoryId,n.url]),Object(c.useEffect)((function(){"fulfilled"!==a||_||(O(!0),w())}),[w,a,_]),s.a.createElement(s.a.Fragment,null,("fulfilled"===a||g.length>0)&&s.a.createElement(p.a,null,g.map((function(e,t){return s.a.createElement(u.a,{key:t},s.a.createElement(l.Link,{to:e.navigate},e.title))})),s.a.createElement(u.a,{isActive:!0},t)),"pending"===a&&d.formatMessage(h.a.loading))};O.propTypes={current:v.a.string,fetchRule:v.a.func,match:v.a.object,rule:v.a.object,ruleFetchStatus:v.a.string,intl:v.a.any};t.a=Object(b.c)(f()(Object(m.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({rule:e.AdvisorStore.rule,ruleFetchStatus:e.AdvisorStore.ruleFetchStatus},t)}),(function(e){return{fetchRule:function(t){return e(y.b(t))}}}))(O)))},546:function(e,t,r){var n=r(526);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},i=r(7)(n,a);n.locals&&(e.exports=n.locals),e.hot.accept(526,(function(){var t=r(526);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)})),e.hot.dispose((function(){i()}))},598:function(e,t,r){(e.exports=r(6)(!1)).push([e.i,":root{--ins-color--orange: #ec7a08}.ins-empty-rule-cards div{text-align:center}.ins-c-rules-card .pf-c-card__header .pf-l-split__item:first-of-type{white-space:nowrap;margin-right:5px;margin-right:0.3125rem}.ins-c-rules-card .ins-l-icon-group__with-major{display:inline}.ins-c-rules-card .space-between{display:flex;justify-content:space-between}.ins-c-rules-card .pf-c-card__header div{font-weight:600}.ins-c-rules-card+.ins-c-rules-card{margin-top:var(--pf-global--spacer--xl)}.ins-c-rules-card a[disabled]{cursor:not-allowed;color:var(--pf-global--disabled-color--200)}.ins-c-rules-card a[disabled]:hover{text-decoration:none}.ins-c-inventory-advisor__card .ins-m-card__flat{box-shadow:none;border:1px solid #dcdcdc;border-radius:5px}.ins-c-inventory-advisor__card .pf-c-card__body svg{margin-right:5px;margin-right:0.3125rem}.ins-c-inventory-advisor__card pre{display:block;padding:10px;padding:0.59375rem;margin-top:5px;margin-top:0.3125rem;margin-bottom:10px;margin-bottom:0.625rem;color:#333;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}.ins-c-inventory-advisor__card pre code{white-space:pre-wrap}.ins-c-inventory-advisor__card ol{margin-top:10px;margin-top:0.625rem;margin-left:15px;margin-left:0.9375rem}.ins-c-inventory-advisor__card p+pre,.ins-c-inventory-advisor__card ul+pre{margin-bottom:20px;margin-bottom:1.25rem}.ins-c-inventory-advisor__card .pf-c-list{margin:5px 0px;margin:0.3125rem 0rem}.ins-c-inventory-advisor__card table{width:100%;margin-top:15px;margin-top:0.9375rem}.ins-c-inventory-advisor__card table tr{border-bottom:1px solid #ededed}.ins-c-inventory-advisor__card table th,.ins-c-inventory-advisor__card table td{padding:16px;padding:1rem}.ins-c-inventory-advisor__card table td{background:white !important}.ins-c-inventory-advisor__card table th{text-align:left !important}.batterySectionOverrides{margin-top:16px}.smallFontSizeOverride{font-size:var(--pf-global--FontSize--sm)}.successColorOverride{color:var(--pf-global--success-color--200)}.remediationButtonOverride{margin-top:-8px}:root{--ins-color--orange: #ec7a08}button:focus{outline:none}section.ins-l-content{padding:var(--pf-global--spacer--lg)}section.ins-l-button-group{margin:24px 0px;margin:1.5rem 0rem}section.ins-l-button-group>*{display:inline}section.ins-l-button-group *+*{margin-left:5px;margin-left:0.3125rem}section.ins-l-icon-group *+*{margin-left:10px}section.ins-l-icon-group__with-major *+*{margin-left:7.5px}section.ins-l-icon-group__with-major .ins-battery:last-of-type{padding-left:15px;border-left:2px solid #eaeaea}section.ins-l-icon-group__with-major .ins-battery:last-of-type span.label{font-weight:500;margin:0 10px}\n",""])},956:function(e,t,r){"use strict";r.r(t);var n,a=r(160),i=r.n(a),o=r(159),c=r.n(o),s=r(271),l=r.n(s),p=r(272),u=r.n(p),d=r(273),f=r.n(d),m=r(274),g=r.n(m),v=r(275),b=r.n(v),y=r(276),h=r.n(y),_=r(2),O=r.n(_),w=r(97),j=r(59),x=r(310),E=r(311),S=r(11),k=r(364),D=r(1),I=r.n(D),P=r(96),A=r(269),R=r.n(A),C=r(278),F=r.n(C),M=r(363),T=r(321),N=r(545),z=r(530);r(957);function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var J=F()()(n=function(e){function t(){var e,r;u()(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(r=g()(this,(e=b()(t)).call.apply(e,[this].concat(a)))).state={InventoryDetails:function(){return O.a.createElement(z.a,null)}},r}var r;return h()(t,e),f()(t,[{key:"componentDidMount",value:function(){this.fetchInventoryDetails()}},{key:"fetchInventoryDetails",value:(r=l()(i.a.mark((function e(){var t,r,n,a,o,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.loadInventory({react:O.a,reactRouterDom:w,reactCore:j,reactIcons:S,pfReactTable:k});case 2:t=e.sent,r=t.inventoryConnector,n=t.mergeWithDetail,a=t.INVENTORY_ACTION_TYPES,o=r(),c=o.InventoryDetailHead,s=o.AppInfo,this.getRegistry().register(B({},n(Object(T.b)(a)))),this.setState({InventoryDetail:c,AppInfo:s});case 9:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"onNavigate",value:function(e){this.props.history.push("/".concat(e))}},{key:"render",value:function(){var e=this.state,t=e.InventoryDetail,r=e.AppInfo,n=this.props.entity;return O.a.createElement(O.a.Fragment,null,O.a.createElement(M.PageHeader,{className:"pf-m-light ins-inventory-detail"},n&&O.a.createElement(N.a,{current:n.display_name||n.id,match:this.props.match}),t&&O.a.createElement(t,{hideBack:!0})),O.a.createElement(M.Main,null,O.a.createElement(x.a,{gutter:"md"},O.a.createElement(E.a,{span:12},r&&O.a.createElement(r,null)))))}}]),t}(O.a.Component))||n;J.contextTypes={store:I.a.object},J.propTypes={history:I.a.object,entity:I.a.object,addAlert:I.a.func,match:I.a.any},t.default=R()(Object(P.connect)((function(e){return{entity:e.entityDetails&&e.entityDetails.entity}}),null)(J))},957:function(e,t,r){var n=r(598);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},i=r(7)(n,a);n.locals&&(e.exports=n.locals),e.hot.accept(598,(function(){var t=r(598);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)})),e.hot.dispose((function(){i()}))}}]);
//# sourceMappingURL=InventoryDetails.js.map