(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{536:function(e,t,r){(e.exports=r(6)(!1)).push([e.i,"nav.pf-c-breadcrumb li{text-transform:capitalize}\n",""])},556:function(e,t,r){"use strict";var n=r(160),a=r.n(n),i=r(275),o=r.n(i),c=r(2),s=r.n(c),l=r(98),p=r(293),u=r(294),d=r(274),f=r.n(d),m=r(97),g=r(1),b=r.n(g),v=r(30),y=r(526),h=(r(557),r(22));function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var _=function(e){var t=e.current,r=e.fetchRule,n=e.match,a=e.ruleFetchStatus,i=e.rule,d=e.intl,f=Object(c.useState)([]),m=o()(f,2),g=m[0],b=m[1],v=Object(c.useState)(!1),y=o()(v,2),O=y[0],_=y[1],j=Object(c.useCallback)((function(){var e=[],t=n.url.split("/");e.push({title:t[1],navigate:"/".concat(t[1])}),"rules"===t[1]&&(t[1]+t[2]!=="rulessystems"?e.push({title:d.formatMessage(h.a.rules),navigate:"/rules"}):e.push({title:d.formatMessage(h.a.systems),navigate:"/rules/systems"})),void 0!==n.params.id&&void 0!==n.params.inventoryId&&e.push({title:i.description,navigate:"/".concat(n.url.split("/")[1],"/").concat(n.params.id)}),b(e)}),[d,n.params.id,n.params.inventoryId,n.url,i.description]);return Object(c.useEffect)((function(){var e=n.url.split("/");void 0!==n.params.inventoryId&&"systems"!==e[2]?r({rule_id:n.params.id}):j()}),[j,r,n.params.id,n.params.inventoryId,n.url]),Object(c.useEffect)((function(){"fulfilled"!==a||O||(_(!0),j())}),[j,a,O]),s.a.createElement(s.a.Fragment,null,("fulfilled"===a||g.length>0)&&s.a.createElement(p.a,null,g.map((function(e,t){return s.a.createElement(u.a,{key:t},s.a.createElement(l.Link,{to:e.navigate},e.title))})),s.a.createElement(u.a,{isActive:!0},t)),"pending"===a&&d.formatMessage(h.a.loading))};_.propTypes={current:b.a.string,fetchRule:b.a.func,match:b.a.object,rule:b.a.object,ruleFetchStatus:b.a.string,intl:b.a.any};t.a=Object(v.c)(f()(Object(m.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({rule:e.AdvisorStore.rule,ruleFetchStatus:e.AdvisorStore.ruleFetchStatus},t)}),(function(e){return{fetchRule:function(t){return e(y.b(t))}}}))(_)))},557:function(e,t,r){var n=r(536);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},i=r(7)(n,a);n.locals&&(e.exports=n.locals),e.hot.accept(536,(function(){var t=r(536);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)})),e.hot.dispose((function(){i()}))},611:function(e,t,r){(e.exports=r(6)(!1)).push([e.i,":root{--ins-color--orange: #ec7a08}.ins-empty-rule-cards div{text-align:center}.ins-c-rules-card .pf-c-card__header .pf-l-split__item:first-of-type{white-space:nowrap;margin-right:5px;margin-right:0.3125rem}.ins-c-rules-card .ins-l-icon-group__with-major{display:inline}.ins-c-rules-card .space-between{display:flex;justify-content:space-between}.ins-c-rules-card .pf-c-card__header div{font-weight:600}.ins-c-rules-card+.ins-c-rules-card{margin-top:var(--pf-global--spacer--xl)}.ins-c-rules-card a[disabled]{cursor:not-allowed;color:var(--pf-global--disabled-color--200)}.ins-c-rules-card a[disabled]:hover{text-decoration:none}.ins-c-inventory-advisor__card .ins-m-card__flat{box-shadow:none;border:1px solid #dcdcdc;border-radius:5px}.ins-c-inventory-advisor__card .pf-c-card__body svg{margin-right:5px;margin-right:0.3125rem}.ins-c-inventory-advisor__card pre{display:block;padding:10px;padding:0.59375rem;margin-top:5px;margin-top:0.3125rem;margin-bottom:10px;margin-bottom:0.625rem;color:#333;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}.ins-c-inventory-advisor__card pre code{white-space:pre-wrap}.ins-c-inventory-advisor__card ol{margin-top:10px;margin-top:0.625rem;margin-left:15px;margin-left:0.9375rem}.ins-c-inventory-advisor__card p+pre,.ins-c-inventory-advisor__card ul+pre{margin-bottom:20px;margin-bottom:1.25rem}.ins-c-inventory-advisor__card .pf-c-list{margin:5px 0px;margin:0.3125rem 0rem}.ins-c-inventory-advisor__card table{width:100%;margin-top:15px;margin-top:0.9375rem}.ins-c-inventory-advisor__card table tr{border-bottom:1px solid #ededed}.ins-c-inventory-advisor__card table th,.ins-c-inventory-advisor__card table td{padding:16px;padding:1rem}.ins-c-inventory-advisor__card table td{background:white !important}.ins-c-inventory-advisor__card table th{text-align:left !important}.batterySectionOverrides{margin-top:16px}.smallFontSizeOverride{font-size:var(--pf-global--FontSize--sm)}.successColorOverride{color:var(--pf-global--success-color--200)}.remediationButtonOverride{margin-top:-8px}.pf-c-check__label #battery_svg{height:1.25rem}:root{--ins-color--orange: #ec7a08}button:focus{outline:none}section.ins-l-content{padding:var(--pf-global--spacer--lg)}section.ins-l-button-group{margin:24px 0px;margin:1.5rem 0rem}section.ins-l-button-group>*{display:inline}section.ins-l-button-group *+*{margin-left:5px;margin-left:0.3125rem}section.ins-l-icon-group *+*{margin-left:10px}section.ins-l-icon-group__with-major *+*{margin-left:7.5px}section.ins-l-icon-group__with-major .ins-battery:last-of-type{padding-left:15px;border-left:2px solid #eaeaea}section.ins-l-icon-group__with-major .ins-battery:last-of-type span.label{font-weight:500;margin:0 10px}\n",""])},976:function(e,t,r){"use strict";r.r(t);var n=r(161),a=r.n(n),i=r(160),o=r.n(i),c=r(276),s=r.n(c),l=r(275),p=r.n(l),u=(r(977),r(371)),d=r(59),f=r(319),m=r(320),g=r(13),b=r(98),v=r(60),y=r(2),h=r.n(y),O=r(556),_=r(1),j=r.n(_),w=r(97),x=r(328),E=r(278),S=r(274),P=r.n(S);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=function(e){var t=e.entity,r=e.match,n=Object(y.useState)(),i=p()(n,2),o=i[0],c=i[1],l=Object(y.useState)(),_=p()(l,2),j=_[0],w=_[1],S=function(){var e=s()(a.a.mark((function e(){var t,r,n,i,o,s,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.loadInventory({react:h.a,reactRouterDom:b,reactCore:d,reactIcons:g,pfReactTable:u});case 2:t=e.sent,r=t.inventoryConnector,n=t.mergeWithDetail,i=t.INVENTORY_ACTION_TYPES,o=r(),s=o.InventoryDetailHead,l=o.AppInfo,Object(E.getRegistry)().register(D({},n(Object(x.b)(i)))),c((function(){return s})),w((function(){return l}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.useEffect)((function(){S()}),[]),h.a.createElement(h.a.Fragment,null,h.a.createElement(v.PageHeader,{className:"pf-m-light ins-inventory-detail"},t&&h.a.createElement(O.a,{current:t.display_name||t.id,match:r}),o&&h.a.createElement(o,{hideBack:!0})),h.a.createElement(v.Main,null,h.a.createElement(f.a,{gutter:"md"},h.a.createElement(m.a,{span:12},j&&h.a.createElement(j,null)))))};I.contextTypes={store:j.a.object},I.propTypes={history:j.a.object,entity:j.a.object,addAlert:j.a.func,match:j.a.any};t.default=P()(Object(w.connect)((function(e){var t=e.entityDetails,r=e.props;return D({entity:t&&t.entity},r)}),null)(I))},977:function(e,t,r){var n=r(611);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},i=r(7)(n,a);n.locals&&(e.exports=n.locals),e.hot.accept(611,(function(){var t=r(611);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)})),e.hot.dispose((function(){i()}))}}]);
//# sourceMappingURL=InventoryDetails.js.map