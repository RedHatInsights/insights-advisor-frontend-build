(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{496:function(e,t,r){(e.exports=r(5)(!1)).push([e.i,"nav.pf-c-breadcrumb ol {\n  padding-left: 0;\n  margin-left: 0;\n  margin-top: 0; }\n\nnav.pf-c-breadcrumb li {\n  text-transform: capitalize;\n  margin-top: 0; }\n",""])},520:function(e,t,r){"use strict";var n=r(140),a=r.n(n),c=r(498),i=r.n(c),o=r(2),l=r.n(o),s=r(73),u=r(265),f=r(266),p=r(252),m=r.n(p),d=r(67),b=r(1),g=r.n(b),v=r(336),h=r(490),O=(r(521),r(488));function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var j=function(e){var t=e.breadcrumbs,r=e.current,n=e.fetchRule,a=e.match,c=e.ruleFetchStatus,p=e.rule,m=e.intl,d=Object(o.useState)([]),b=i()(d,2),g=b[0],v=b[1],h=Object(o.useState)(!1),y=i()(h,2),j=y[0],E=y[1],w=Object(o.useCallback)(function(){var e=[];if(void 0!==t[0])e.push(t[0]);else{var r=a.url.split("/")[1];e.push({title:r,navigate:"/".concat(r)})}if(void 0!==a.params.id&&void 0!==a.params.inventoryId){var n=p.description;e.push({title:n,navigate:"/".concat(a.url.split("/")[1],"/").concat(a.params.id)})}v(e)},[t,a.params.id,a.params.inventoryId,a.url,p.description]);return Object(o.useEffect)(function(){void 0!==a.params.inventoryId?n({rule_id:a.params.id}):w()},[w,n,a.params.id,a.params.inventoryId]),Object(o.useEffect)(function(){"fulfilled"!==c||j||(E(!0),w())},[w,c,j]),l.a.createElement(l.a.Fragment,null,("fulfilled"===c||g.length>0)&&l.a.createElement(u.a,null,g.map(function(e,t){return l.a.createElement(f.a,{key:t},l.a.createElement(s.Link,{to:e.navigate},e.title))}),l.a.createElement(f.a,{isActive:!0},r)),"pending"===c&&m.formatMessage(O.a.loading))};j.propTypes={breadcrumbs:g.a.arrayOf(Object),current:g.a.string,fetchRule:g.a.func,match:g.a.object,rule:g.a.object,ruleFetchStatus:g.a.string,intl:g.a.any};t.a=Object(v.injectIntl)(m()(Object(d.connect)(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(r,!0).forEach(function(t){a()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({breadcrumbs:e.AdvisorStore.breadcrumbs,rule:e.AdvisorStore.rule,ruleFetchStatus:e.AdvisorStore.ruleFetchStatus},e,{},t)},function(e){return{fetchRule:function(t){return e(h.a(t))}}})(j)))},521:function(e,t,r){var n=r(496);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},c=r(6)(n,a);n.locals&&(e.exports=n.locals),e.hot.accept(496,function(){var t=r(496);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");c(t)}),e.hot.dispose(function(){c()})},577:function(e,t,r){(e.exports=r(5)(!1)).push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\n.pf-c-label.labelOverride {\n  vertical-align: middle;\n  margin-left: 20px; }\n\n.textOverride {\n  margin-top: var(--pf-global--spacer--md); }\n",""])},959:function(e,t,r){"use strict";r.r(t);var n=r(140),a=r.n(n),c=r(2),i=r.n(c),o=r(252),l=r.n(o),s=r(337),u=r(259),f=r(276),p=r(277),m=r(278),d=r(67),b=r(1),g=r.n(b),v=r(217),h=r(174),O=r(336),y=r(490),j=r(520),E=r(770),w=r(504),S=r(506),P=r(488);r(960);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var x=function(e){var t=e.match,r=e.fetchTopic,n=e.setFilters,a=e.topic,o=e.topicFetchStatus,l=e.intl;return Object(c.useEffect)(function(){return r({topic_id:t.params.id}),function(){n({impacting:!0,reports_shown:!0})}},[r,t.params.id,n]),i.a.createElement(i.a.Fragment,null,i.a.createElement(s.PageHeader,null,i.a.createElement(j.a,{current:a.name,match:t}),"fulfilled"===o&&i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{size:"2xl",className:"titleOverride"},a.name,a.featured&&i.a.createElement(f.a,{className:"labelOverride"},i.a.createElement(v.b,null),l.formatMessage(P.a.featured))),i.a.createElement(p.a,{className:"textOverride"},i.a.createElement(m.a,{component:m.b.p},i.a.createElement(s.Truncate,{text:a.description,length:600,expandText:l.formatMessage(P.a.readmore),collapseText:l.formatMessage(P.a.readless),inline:!0})))),""===o||"pending"===o&&i.a.createElement(w.a,null)),i.a.createElement(s.Main,null,i.a.createElement(i.a.Fragment,null,""===o||"pending"===o||"fulfilled"===o&&i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{headingLevel:"h3",size:"2xl",className:"titlePaddingOverride"}," Rules"),i.a.createElement(E.a,null)),"failed"===o||"rejected"===o&&i.a.createElement(S.a,{icon:h.b,title:l.formatMessage(P.a.topicDetailslNodetailsTitle),text:l.formatMessage(P.a.topicDetailslNodetailsBody)}))))};x.propTypes={match:g.a.any,fetchTopic:g.a.func,topic:g.a.object,topicFetchStatus:g.a.string,setFilters:g.a.func,intl:g.a.any};t.default=Object(O.injectIntl)(l()(Object(d.connect)(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(r,!0).forEach(function(t){a()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({topic:e.AdvisorStore.topic,topicFetchStatus:e.AdvisorStore.topicFetchStatus},e,{},t)},function(e){return{fetchTopic:function(t){return e(y.f(t))},setFilters:function(t){return e(y.i(t))}}})(x)))},960:function(e,t,r){var n=r(577);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},c=r(6)(n,a);n.locals&&(e.exports=n.locals),e.hot.accept(577,function(){var t=r(577);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");c(t)}),e.hot.dispose(function(){c()})}}]);