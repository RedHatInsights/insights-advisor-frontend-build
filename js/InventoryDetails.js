(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{444:function(e,r,t){(e.exports=t(6)(!1)).push([e.i,"nav.pf-c-breadcrumb li{text-transform:capitalize}\n",""])},464:function(e,r,t){"use strict";var n=t(155),a=t.n(n),o=t(258),i=t.n(o),c=t(2),s=t.n(c),l=t(98),p=t(276),u=t(277),d=t(259),f=t.n(d),m=t(97),g=t(1),b=t.n(g),v=t(30),y=t(434),h=(t(465),t(22));function _(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var O=function(e){var r=e.current,t=e.fetchRule,n=e.match,a=e.ruleFetchStatus,o=e.rule,d=e.intl,f=Object(c.useState)([]),m=i()(f,2),g=m[0],b=m[1],v=Object(c.useState)(!1),y=i()(v,2),_=y[0],O=y[1],j=Object(c.useCallback)((function(){var e=[],r=n.url.split("/");e.push({title:r[1],navigate:"/".concat(r[1])}),"rules"===r[1]&&(r[1]+r[2]!=="rulessystems"?e.push({title:d.formatMessage(h.a.rules),navigate:"/rules"}):e.push({title:d.formatMessage(h.a.systems),navigate:"/rules/systems"})),void 0!==n.params.id&&void 0!==n.params.inventoryId&&e.push({title:o.description,navigate:"/".concat(n.url.split("/")[1],"/").concat(n.params.id)}),b(e)}),[d,n.params.id,n.params.inventoryId,n.url,o.description]);return Object(c.useEffect)((function(){var e=n.url.split("/");void 0!==n.params.inventoryId&&"systems"!==e[2]?t({rule_id:n.params.id}):j()}),[j,t,n.params.id,n.params.inventoryId,n.url]),Object(c.useEffect)((function(){"fulfilled"!==a||_||(O(!0),j())}),[j,a,_]),s.a.createElement(s.a.Fragment,null,("fulfilled"===a||g.length>0)&&s.a.createElement(p.a,null,g.map((function(e,r){return s.a.createElement(u.a,{key:r},s.a.createElement(l.Link,{to:e.navigate},e.title))})),s.a.createElement(u.a,{isActive:!0},r)),"pending"===a&&d.formatMessage(h.a.loading))};O.propTypes={current:b.a.string,fetchRule:b.a.func,match:b.a.object,rule:b.a.object,ruleFetchStatus:b.a.string,intl:b.a.any};r.a=Object(v.c)(f()(Object(m.connect)((function(e,r){return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?_(Object(t),!0).forEach((function(r){a()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({rule:e.AdvisorStore.rule,ruleFetchStatus:e.AdvisorStore.ruleFetchStatus},r)}),(function(e){return{fetchRule:function(r){return e(y.b(r))}}}))(O)))},465:function(e,r,t){var n=t(444);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=t(7)(n,a);n.locals&&(e.exports=n.locals),e.hot.accept(444,(function(){var r=t(444);if("string"==typeof r&&(r=[[e.i,r,""]]),!function(e,r){var t,n=0;for(t in e){if(!r||e[t]!==r[t])return!1;n++}for(t in r)n--;return 0===n}(n.locals,r.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(r)})),e.hot.dispose((function(){o()}))},516:function(e,r,t){(e.exports=t(6)(!1)).push([e.i,":root{--ins-color--orange: #ec7a08}.ins-empty-rule-cards div{text-align:center}.ins-c-rules-card .pf-c-card__header .pf-l-split__item:first-of-type{white-space:nowrap;margin-right:5px;margin-right:0.3125rem}.ins-c-rules-card .ins-l-icon-group__with-major{display:inline}.ins-c-rules-card .space-between{display:flex;justify-content:space-between}.ins-c-rules-card .pf-c-card__header div{font-weight:600}.ins-c-rules-card+.ins-c-rules-card{margin-top:var(--pf-global--spacer--xl)}.ins-c-rules-card a[disabled]{cursor:not-allowed;color:var(--pf-global--disabled-color--200)}.ins-c-rules-card a[disabled]:hover{text-decoration:none}.ins-c-inventory-advisor__card .ins-m-card__flat{box-shadow:none;border:1px solid #dcdcdc;border-radius:5px}.ins-c-inventory-advisor__card .pf-c-card__body svg{margin-right:5px;margin-right:0.3125rem}.ins-c-inventory-advisor__card pre{display:block;padding:10px;padding:0.59375rem;margin-top:5px;margin-top:0.3125rem;margin-bottom:10px;margin-bottom:0.625rem;color:#333;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}.ins-c-inventory-advisor__card pre code{white-space:pre-wrap}.ins-c-inventory-advisor__card ol{margin-top:10px;margin-top:0.625rem;margin-left:15px;margin-left:0.9375rem}.ins-c-inventory-advisor__card p+pre,.ins-c-inventory-advisor__card ul+pre{margin-bottom:20px;margin-bottom:1.25rem}.ins-c-inventory-advisor__card .pf-c-list{margin:5px 0px;margin:0.3125rem 0rem}.ins-c-inventory-advisor__card table{width:100%;margin-top:15px;margin-top:0.9375rem}.ins-c-inventory-advisor__card table tr{border-bottom:1px solid #ededed}.ins-c-inventory-advisor__card table th,.ins-c-inventory-advisor__card table td{padding:16px;padding:1rem}.ins-c-inventory-advisor__card table td{background:white !important}.ins-c-inventory-advisor__card table th{text-align:left !important}.batterySectionOverrides{margin-top:16px}.smallFontSizeOverride{font-size:var(--pf-global--FontSize--sm)}.successColorOverride{color:var(--pf-global--success-color--200)}.remediationButtonOverride{margin-top:-8px}.pf-c-check__label #battery_svg{height:1.25rem}.chartSpikeIconColor{color:var(--pf-global--primary-color--100)}.pf-c-clipboard-copy__group-copy{background-color:var(--pf-global--BackgroundColor--100)}.pf-l-stack{color:var(--pf-c-empty-state__body--Color)}.ins-c-insights__check{color:var(--pf-global--success-color--200)}.ins-c-background__default{color:var(--pf-global--BackgroundColor--100)}:root{--ins-color--orange: #ec7a08}button:focus{outline:none}section.ins-l-content{padding:var(--pf-global--spacer--lg)}section.ins-l-button-group{margin:24px 0px;margin:1.5rem 0rem}section.ins-l-button-group>*{display:inline}section.ins-l-button-group *+*{margin-left:5px;margin-left:0.3125rem}section.ins-l-icon-group *+*{margin-left:10px}section.ins-l-icon-group__with-major *+*{margin-left:7.5px}section.ins-l-icon-group__with-major .ins-battery:last-of-type{padding-left:15px;border-left:2px solid #eaeaea}section.ins-l-icon-group__with-major .ins-battery:last-of-type span.label{font-weight:500;margin:0 10px}\n",""])},886:function(e,r,t){"use strict";t.r(r);var n=t(156),a=t.n(n),o=t(155),i=t.n(o),c=t(260),s=t.n(c),l=t(258),p=t.n(l),u=(t(887),t(335)),d=t(58),f=t(300),m=t(301),g=t(13),b=t(98),v=t(59),y=t(2),h=t.n(y),_=t(464),O=t(1),j=t.n(O),w=t(97),x=t(309),E=t(261),k=t(259),S=t.n(k);function P(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function I(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?P(Object(t),!0).forEach((function(r){i()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var D=function(e){var r=e.entity,t=e.match,n=Object(y.useState)(),o=p()(n,2),i=o[0],c=o[1],l=Object(y.useState)(),O=p()(l,2),j=O[0],w=O[1],k=function(){var e=s()(a.a.mark((function e(){var r,t,n,o,i,s,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.loadInventory({react:h.a,reactRouterDom:b,reactCore:d,reactIcons:g,pfReactTable:u});case 2:r=e.sent,t=r.inventoryConnector,n=r.mergeWithDetail,o=r.INVENTORY_ACTION_TYPES,i=t(),s=i.InventoryDetailHead,l=i.AppInfo,Object(E.getRegistry)().register(I({},n(Object(x.b)(o)))),c((function(){return s})),w((function(){return l}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.useEffect)((function(){k()}),[]),h.a.createElement(h.a.Fragment,null,h.a.createElement(v.PageHeader,{className:"pf-m-light ins-inventory-detail"},r&&h.a.createElement(_.a,{current:r.display_name||r.id,match:t}),i&&h.a.createElement(i,{hideBack:!0})),h.a.createElement(v.Main,null,h.a.createElement(f.a,{gutter:"md"},h.a.createElement(m.a,{span:12},j&&h.a.createElement(j,null)))))};D.contextTypes={store:j.a.object},D.propTypes={history:j.a.object,entity:j.a.object,addAlert:j.a.func,match:j.a.any};r.default=S()(Object(w.connect)((function(e){var r=e.entityDetails,t=e.props;return I({entity:r&&r.entity},t)}),null)(D))},887:function(e,r,t){var n=t(516);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=t(7)(n,a);n.locals&&(e.exports=n.locals),e.hot.accept(516,(function(){var r=t(516);if("string"==typeof r&&(r=[[e.i,r,""]]),!function(e,r){var t,n=0;for(t in e){if(!r||e[t]!==r[t])return!1;n++}for(t in r)n--;return 0===n}(n.locals,r.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(r)})),e.hot.dispose((function(){o()}))}}]);
//# sourceMappingURL=InventoryDetails.js.map