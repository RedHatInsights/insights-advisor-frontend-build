(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1012:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r.n(n),i=r(271),c=r.n(i),o=r(365),l=r(281),s=r(302),u=r(303),f=r(304),p=r(79),d=r(1),m=r.n(d),v=r(236),b=r(192),g=r(31),h=r(537),O=r(573),E=r(817),y=r(546),j=r(551),S=r(531),w=(r(1013),function(e){var t=e.match,r=e.fetchTopic,i=e.setFilters,c=e.topic,p=e.topicFetchStatus,d=e.intl,m=e.filters;return Object(n.useEffect)((function(){void 0===m.topic&&i({impacting:!0,reports_shown:!0,topic:t.params.id})})),Object(n.useEffect)((function(){return r({topic_id:t.params.id}),function(){i({impacting:!0,reports_shown:!0})}}),[r,t.params.id,i]),a.a.createElement(a.a.Fragment,null,a.a.createElement(o.PageHeader,null,a.a.createElement(O.a,{current:c.name,match:t}),"fulfilled"===p&&a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,{size:"2xl",className:"titleOverride"},c.name,c.featured&&a.a.createElement(s.a,{className:"labelOverride"},a.a.createElement(v.b,null),d.formatMessage(S.a.featured))),a.a.createElement(u.a,{className:"textOverride"},a.a.createElement(f.a,{component:f.b.p},a.a.createElement(o.Truncate,{text:c.description,length:600,expandText:d.formatMessage(S.a.readmore),collapseText:d.formatMessage(S.a.readless),inline:!0})))),""===p||"pending"===p&&a.a.createElement(y.a,null)),a.a.createElement(o.Main,null,a.a.createElement(a.a.Fragment,null,""===p||"pending"===p||"fulfilled"===p&&a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,{headingLevel:"h3",size:"2xl",className:"titlePaddingOverride"}," Rules"),m.topic&&a.a.createElement(E.a,null)),"failed"===p||"rejected"===p&&a.a.createElement(j.a,{icon:b.b,title:d.formatMessage(S.a.topicDetailslNodetailsTitle),text:d.formatMessage(S.a.topicDetailslNodetailsBody)}))))});w.propTypes={match:m.a.any,fetchTopic:m.a.func,topic:m.a.object,topicFetchStatus:m.a.string,setFilters:m.a.func,intl:m.a.any,filters:m.a.object};t.default=Object(g.c)(c()(Object(p.connect)((function(e){return{topic:e.AdvisorStore.topic,topicFetchStatus:e.AdvisorStore.topicFetchStatus,filters:e.AdvisorStore.filters}}),(function(e){return{fetchTopic:function(t){return e(h.f(t))},setFilters:function(t){return e(h.i(t))}}}))(w)))},1013:function(e,t,r){var n=r(629);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},i=r(5)(n,a);n.locals&&(e.exports=n.locals),e.hot.accept(629,(function(){var t=r(629);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)})),e.hot.dispose((function(){i()}))},541:function(e,t,r){(e.exports=r(4)(!1)).push([e.i,"nav.pf-c-breadcrumb ol {\n  padding-left: 0;\n  margin-left: 0;\n  margin-top: 0; }\n\nnav.pf-c-breadcrumb li {\n  text-transform: capitalize;\n  margin-top: 0; }\n",""])},573:function(e,t,r){"use strict";var n=r(158),a=r.n(n),i=r(542),c=r.n(i),o=r(2),l=r.n(o),s=r(86),u=r(289),f=r(290),p=r(271),d=r.n(p),m=r(79),v=r(1),b=r.n(v),g=r(31),h=r(537),O=(r(574),r(531));function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var y=function(e){var t=e.breadcrumbs,r=e.current,n=e.fetchRule,a=e.match,i=e.ruleFetchStatus,p=e.rule,d=e.intl,m=Object(o.useState)([]),v=c()(m,2),b=v[0],g=v[1],h=Object(o.useState)(!1),E=c()(h,2),y=E[0],j=E[1],S=Object(o.useCallback)((function(){var e=[];if(void 0!==t[0])e.push(t[0]);else{var r=a.url.split("/")[1];e.push({title:r,navigate:"/".concat(r)})}if(void 0!==a.params.id&&void 0!==a.params.inventoryId){var n=p.description;e.push({title:n,navigate:"/".concat(a.url.split("/")[1],"/").concat(a.params.id)})}g(e)}),[t,a.params.id,a.params.inventoryId,a.url,p.description]);return Object(o.useEffect)((function(){void 0!==a.params.inventoryId?n({rule_id:a.params.id}):S()}),[S,n,a.params.id,a.params.inventoryId]),Object(o.useEffect)((function(){"fulfilled"!==i||y||(j(!0),S())}),[S,i,y]),l.a.createElement(l.a.Fragment,null,("fulfilled"===i||b.length>0)&&l.a.createElement(u.a,null,b.map((function(e,t){return l.a.createElement(f.a,{key:t},l.a.createElement(s.Link,{to:e.navigate},e.title))})),l.a.createElement(f.a,{isActive:!0},r)),"pending"===i&&d.formatMessage(O.a.loading))};y.propTypes={breadcrumbs:b.a.arrayOf(Object),current:b.a.string,fetchRule:b.a.func,match:b.a.object,rule:b.a.object,ruleFetchStatus:b.a.string,intl:b.a.any};t.a=Object(g.c)(d()(Object(m.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(r,!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({breadcrumbs:e.AdvisorStore.breadcrumbs,rule:e.AdvisorStore.rule,ruleFetchStatus:e.AdvisorStore.ruleFetchStatus},e,{},t)}),(function(e){return{fetchRule:function(t){return e(h.a(t))}}}))(y)))},574:function(e,t,r){var n=r(541);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},i=r(5)(n,a);n.locals&&(e.exports=n.locals),e.hot.accept(541,(function(){var t=r(541);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)})),e.hot.dispose((function(){i()}))},629:function(e,t,r){(e.exports=r(4)(!1)).push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\n.pf-c-label.labelOverride {\n  vertical-align: middle;\n  margin-left: 20px; }\n\n.textOverride {\n  margin-top: var(--pf-global--spacer--md); }\n",""])}}]);