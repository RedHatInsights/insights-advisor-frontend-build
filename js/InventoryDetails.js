(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{496:function(e,r,t){"use strict";var n=t(178),a=t.n(n),o=t(270),i=t.n(o),c=t(467),s=t(287),l=t(288),p=t(2),u=t.n(p),d=t(107),f=t(1),m=t.n(f),g=t(106),b=t(32),v=t(22),y=t(271),h=t.n(y);function _(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.charAt(0).toUpperCase()+e.toLowerCase().substr(1)},j=function(e){var r=e.current,t=e.fetchRule,n=e.match,a=e.ruleFetchStatus,o=e.rule,c=e.intl,f=Object(p.useState)([]),m=i()(f,2),g=m[0],b=m[1],y=Object(p.useState)(!1),h=i()(y,2),_=h[0],j=h[1],w=Object(p.useCallback)((function(){var e=[],r=n.url.split("/");e.push({title:O(r[1]),navigate:"/".concat(r[1])}),"rules"===r[1]&&(r[1]+r[2]!=="rulessystems"?e.push({title:c.formatMessage(v.a.rules),navigate:"/rules"}):e.push({title:c.formatMessage(v.a.systems),navigate:"/rules/systems"})),void 0!==n.params.id&&void 0!==n.params.inventoryId&&e.push({title:O(o.description),navigate:"/".concat(n.url.split("/")[1],"/").concat(n.params.id)}),b(e)}),[c,n.params.id,n.params.inventoryId,n.url,o.description]);return Object(p.useEffect)((function(){var e=n.url.split("/");void 0!==n.params.inventoryId&&"systems"!==e[2]?t({rule_id:n.params.id}):w()}),[w,t,n.params.id,n.params.inventoryId,n.url]),Object(p.useEffect)((function(){"fulfilled"!==a||_||(j(!0),w())}),[w,a,_]),u.a.createElement(u.a.Fragment,null,("fulfilled"===a||g.length>0)&&u.a.createElement(s.a,null,g.map((function(e,r){return u.a.createElement(l.a,{key:r},u.a.createElement(d.Link,{to:e.navigate},O(e.title)))})),u.a.createElement(l.a,{isActive:!0},O(r))),"pending"===a&&c.formatMessage(v.a.loading))};j.propTypes={current:m.a.string,fetchRule:m.a.func,match:m.a.object,rule:m.a.object,ruleFetchStatus:m.a.string,intl:m.a.any};r.a=Object(b.c)(h()(Object(g.connect)((function(e,r){return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?_(Object(t),!0).forEach((function(r){a()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({rule:e.AdvisorStore.rule,ruleFetchStatus:e.AdvisorStore.ruleFetchStatus},r)}),(function(e){return{fetchRule:function(r){return e(c.b(r))}}}))(j)))},549:function(e,r,t){(e.exports=t(6)(!1)).push([e.i,":root{--ins-color--orange: #ec7a08}.ins-empty-rule-cards div{text-align:center}.ins-c-rules-card .pf-c-card__header .pf-l-split__item:first-of-type{white-space:nowrap;margin-right:5px;margin-right:0.3125rem}.ins-c-rules-card .ins-l-icon-group__with-major{display:inline}.ins-c-rules-card .space-between{display:flex;justify-content:space-between}.ins-c-rules-card .pf-c-card__header div{font-weight:600}.ins-c-rules-card+.ins-c-rules-card{margin-top:var(--pf-global--spacer--xl)}.ins-c-rules-card a[disabled]{cursor:not-allowed;color:var(--pf-global--disabled-color--200)}.ins-c-rules-card a[disabled]:hover{text-decoration:none}.ins-c-inventory-advisor__card .ins-m-card__flat{box-shadow:none;border:1px solid #dcdcdc;border-radius:5px}.ins-c-inventory-advisor__card .pf-c-card__body svg{margin-right:5px;margin-right:0.3125rem}.ins-c-inventory-advisor__card pre{display:block;padding:10px;padding:0.59375rem;margin-top:5px;margin-top:0.3125rem;margin-bottom:10px;margin-bottom:0.625rem;color:#333;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}.ins-c-inventory-advisor__card pre code{white-space:pre-wrap}.ins-c-inventory-advisor__card ol{margin-top:10px;margin-top:0.625rem;margin-left:15px;margin-left:0.9375rem}.ins-c-inventory-advisor__card p+pre,.ins-c-inventory-advisor__card ul+pre{margin-bottom:20px;margin-bottom:1.25rem}.ins-c-inventory-advisor__card .pf-c-list{margin:5px 0px;margin:0.3125rem 0rem}.ins-c-inventory-advisor__card table{width:100%;margin-top:15px;margin-top:0.9375rem}.ins-c-inventory-advisor__card table tr{border-bottom:1px solid #ededed}.ins-c-inventory-advisor__card table th,.ins-c-inventory-advisor__card table td{padding:16px;padding:1rem}.ins-c-inventory-advisor__card table td{background:white !important}.ins-c-inventory-advisor__card table th{text-align:left !important}.batterySectionOverrides{margin-top:16px}.smallFontSizeOverride{font-size:var(--pf-global--FontSize--sm)}.successColorOverride{color:var(--pf-global--success-color--200)}.remediationButtonOverride{margin-top:-8px}.pf-c-check__label #battery_svg{height:1.25rem}.chartSpikeIconColor{color:var(--pf-global--primary-color--100)}.pf-c-clipboard-copy__group-copy{background-color:var(--pf-global--BackgroundColor--100)}.pf-l-stack{color:var(--pf-c-empty-state__body--Color)}.ins-c-insights__check{color:var(--pf-global--success-color--200)}.ins-c-background__default{color:var(--pf-global--BackgroundColor--100)}:root{--ins-color--orange: #ec7a08}button:focus{outline:none}section.ins-l-content{padding:var(--pf-global--spacer--lg)}section.ins-l-button-group{margin:24px 0px;margin:1.5rem 0rem}section.ins-l-button-group>*{display:inline}section.ins-l-button-group *+*{margin-left:5px;margin-left:0.3125rem}section.ins-l-icon-group *+*{margin-left:10px}section.ins-l-icon-group__with-major *+*{margin-left:7.5px}section.ins-l-icon-group__with-major .ins-battery:last-of-type{padding-left:15px;border-left:2px solid #eaeaea}section.ins-l-icon-group__with-major .ins-battery:last-of-type span.label{font-weight:500;margin:0 10px}\n",""])},919:function(e,r,t){"use strict";t.r(r);var n=t(179),a=t.n(n),o=t(178),i=t.n(o),c=t(272),s=t.n(c),l=t(270),p=t.n(l),u=(t(920),t(354)),d=t(176),f=t(312),m=t(313),g=t(105),b=t(107),v=t(65),y=t(2),h=t.n(y),_=t(496),O=t(1),j=t.n(O),w=t(106),x=t(321),k=t(273),E=t(271),S=t.n(E);function P(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function C(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?P(Object(t),!0).forEach((function(r){i()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var D=function(e){var r=e.entity,t=e.match,n=Object(y.useState)(),o=p()(n,2),i=o[0],c=o[1],l=Object(y.useState)(),O=p()(l,2),j=O[0],w=O[1],E=function(){var e=s()(a.a.mark((function e(){var r,t,n,o,i,s,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.loadInventory({react:h.a,reactRouterDom:b,reactCore:d,reactIcons:g,pfReactTable:u});case 2:r=e.sent,t=r.inventoryConnector,n=r.mergeWithDetail,o=r.INVENTORY_ACTION_TYPES,i=t(),s=i.InventoryDetailHead,l=i.AppInfo,Object(k.getRegistry)().register(C({},n(Object(x.b)(o)))),c((function(){return s})),w((function(){return l}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.useEffect)((function(){E()}),[]),h.a.createElement(h.a.Fragment,null,h.a.createElement(v.PageHeader,{className:"pf-m-light ins-inventory-detail"},r&&h.a.createElement(_.a,{current:r.display_name||r.id,match:t}),i&&h.a.createElement(i,{hideBack:!0})),h.a.createElement(v.Main,null,h.a.createElement(f.a,{gutter:"md"},h.a.createElement(m.a,{span:12},j&&h.a.createElement(j,null)))))};D.contextTypes={store:j.a.object},D.propTypes={history:j.a.object,entity:j.a.object,addAlert:j.a.func,match:j.a.any};r.default=S()(Object(w.connect)((function(e){var r=e.entityDetails,t=e.props;return C({entity:r&&r.entity},t)}),null)(D))},920:function(e,r,t){var n=t(549);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=t(7)(n,a);n.locals&&(e.exports=n.locals),e.hot.accept(549,(function(){var r=t(549);if("string"==typeof r&&(r=[[e.i,r,""]]),!function(e,r){var t,n=0;for(t in e){if(!r||e[t]!==r[t])return!1;n++}for(t in r)n--;return 0===n}(n.locals,r.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(r)})),e.hot.dispose((function(){o()}))}}]);
//# sourceMappingURL=InventoryDetails.js.map