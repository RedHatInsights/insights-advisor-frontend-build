(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{490:function(e,t,r){(e.exports=r(5)(!1)).push([e.i,"nav.pf-c-breadcrumb ol {\n  padding-left: 0;\n  margin-left: 0;\n  margin-top: 0; }\n\nnav.pf-c-breadcrumb li {\n  text-transform: capitalize;\n  margin-top: 0; }\n",""])},514:function(e,t,r){"use strict";var n=r(139),a=r.n(n),c=r(492),i=r.n(c),o=r(2),l=r.n(o),s=r(71),u=r(263),p=r(264),f=r(250),d=r.n(f),m=r(66),b=r(1),v=r.n(b),h=r(484);r(515);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var O=function(e){var t=Object(o.useState)([]),r=i()(t,2),n=r[0],a=r[1],c=Object(o.useState)(!1),f=i()(c,2),d=f[0],m=f[1],b=e.breadcrumbs,v=e.current,h=e.fetchRule,g=e.match,O=e.ruleFetchStatus,y=e.rule,j=Object(o.useCallback)(function(){var e=[];if(void 0!==b[0])e.push(b[0]);else{var t=g.url.split("/")[1];e.push({title:t,navigate:"/".concat(t)})}if(void 0!==g.params.id&&void 0!==g.params.inventoryId){var r=y.description;e.push({title:r,navigate:"/".concat(g.url.split("/")[1],"/").concat(g.params.id)})}a(e)},[b,g.params.id,g.params.inventoryId,g.url,y.description]);return Object(o.useEffect)(function(){void 0!==g.params.inventoryId?h({rule_id:g.params.id}):j()},[j,h,g.params.id,g.params.inventoryId]),Object(o.useEffect)(function(){"fulfilled"!==O||d||(m(!0),j())},[j,O,d]),l.a.createElement(l.a.Fragment,null,("fulfilled"===O||n.length>0)&&l.a.createElement(u.a,null,n.map(function(e,t){return l.a.createElement(p.a,{key:t},l.a.createElement(s.Link,{to:e.navigate},e.title))}),l.a.createElement(p.a,{isActive:!0},v)),"pending"===O&&"Loading...")};O.propTypes={breadcrumbs:v.a.arrayOf(Object),current:v.a.string,fetchRule:v.a.func,match:v.a.object,rule:v.a.object,ruleFetchStatus:v.a.string};t.a=d()(Object(m.connect)(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(r,!0).forEach(function(t){a()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({breadcrumbs:e.AdvisorStore.breadcrumbs,rule:e.AdvisorStore.rule,ruleFetchStatus:e.AdvisorStore.ruleFetchStatus},e,{},t)},function(e){return{fetchRule:function(t){return e(h.a(t))}}})(O))},515:function(e,t,r){var n=r(490);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},c=r(6)(n,a);n.locals&&(e.exports=n.locals),e.hot.accept(490,function(){var t=r(490);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");c(t)}),e.hot.dispose(function(){c()})},572:function(e,t,r){(e.exports=r(5)(!1)).push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\n.pf-c-label.labelOverride {\n  vertical-align: middle;\n  margin-left: 20px; }\n\n.textOverride {\n  margin-top: var(--pf-global--spacer--md); }\n",""])},955:function(e,t,r){"use strict";r.r(t);var n=r(139),a=r.n(n),c=r(2),i=r.n(c),o=r(250),l=r.n(o),s=r(332),u=r(257),p=r(274),f=r(275),d=r(276),m=r(66),b=r(1),v=r.n(b),h=r(216),g=r(173),O=r(484),y=r(514),j=r(765),E=r(498),w=r(500);r(956);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var P=function(e){var t=e.match,r=e.fetchTopic,n=e.setFilters,a=e.topic,o=e.topicFetchStatus;return Object(c.useEffect)(function(){return r({topic_id:e.match.params.id}),function(){n({impacting:!0,reports_shown:!0})}},[r,e.match.params.id,n]),i.a.createElement(i.a.Fragment,null,i.a.createElement(s.PageHeader,null,i.a.createElement(y.a,{current:a.name,match:t}),"fulfilled"===o&&i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{size:"2xl",className:"titleOverride"},a.name,a.featured&&i.a.createElement(p.a,{className:"labelOverride"},i.a.createElement(h.b,null)," Recommended")),i.a.createElement(f.a,{className:"textOverride"},i.a.createElement(d.a,{component:d.b.p},i.a.createElement(s.Truncate,{text:a.description,length:600,expandText:"Read more",collapseText:"Read less",inline:!0})))),""===o||"pending"===o&&i.a.createElement(E.a,null)),i.a.createElement(s.Main,null,i.a.createElement(i.a.Fragment,null,""===o||"pending"===o||"fulfilled"===o&&i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{headingLevel:"h3",size:"2xl",className:"titlePaddingOverride"}," Rules"),i.a.createElement(j.a,null)),"failed"===o||"rejected"===o&&i.a.createElement(w.a,{icon:g.b,title:"No details for topic",text:"There exist no further details for this topic."}))))};P.propTypes={match:v.a.any,fetchTopic:v.a.func,topic:v.a.object,topicFetchStatus:v.a.string,setFilters:v.a.func};t.default=l()(Object(m.connect)(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(r,!0).forEach(function(t){a()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({topic:e.AdvisorStore.topic,topicFetchStatus:e.AdvisorStore.topicFetchStatus},e,{},t)},function(e){return{fetchTopic:function(t){return e(O.f(t))},setFilters:function(t){return e(O.i(t))}}})(P))},956:function(e,t,r){var n=r(572);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},c=r(6)(n,a);n.locals&&(e.exports=n.locals),e.hot.accept(572,function(){var t=r(572);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");c(t)}),e.hot.dispose(function(){c()})}}]);