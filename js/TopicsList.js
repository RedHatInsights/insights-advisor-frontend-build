(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1008:function(e,t,n){var a=n(627);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},c=n(5)(a,r);a.locals&&(e.exports=a.locals),e.hot.accept(627,(function(){var t=n(627);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,a=0;for(n in e){if(!t||e[n]!==t[n])return!1;a++}for(n in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");c(t)})),e.hot.dispose((function(){c()}))},1050:function(e,t,n){"use strict";n.r(t);var a=n(158),r=n.n(a),c=n(577),o=n.n(c),i=n(975),l=n.n(i),s=n(976),u=n.n(s),p=n(810),f=n.n(p),m=n(2),d=n.n(m),g=n(271),y=n.n(g),b=n(1),h=n.n(b),E=n(79),v=n(365),w=n(306),O=n(192),j=n(31),x=n(537),S=n(307),P=n(291),T=n(293),M=n(281),A=n(292),k=n(314),D=n(315),F=n(303),L=n(304),_=n(310),B=n(311),N=n(280),C=n(302),z=n(236),H=n(531),I=(n(1008),function(e){var t=e.topic,n=e.history,a=e.intl;return d.a.createElement(S.a,null,d.a.createElement(P.a,null,d.a.createElement(T.a,null,d.a.createElement(M.a,{headingLevel:"h3",size:"lg"},t.name," ")),d.a.createElement(A.a,null,d.a.createElement(k.a,{gutter:"md"},d.a.createElement(D.a,{className:"cardDescription"},d.a.createElement(F.a,null,d.a.createElement(L.a,{component:L.b.p},t.description.substring(0,150),t.description.length>150?"...":""))),d.a.createElement(D.a,null,d.a.createElement(F.a,null,d.a.createElement(L.a,{component:L.b.small},a.formatMessage(H.a.topicCardSystemsaffected,{systems:t.impacted_systems_count})))),d.a.createElement(D.a,null,d.a.createElement(_.a,{className:"nowrap"},d.a.createElement(B.a,null,d.a.createElement(N.a,{variant:"link",onClick:function(){n.push("/topics/".concat(t.slug,"/"))}},a.formatMessage(H.a.topicCardLearnMoreLink))),t.featured&&d.a.createElement(B.a,null,d.a.createElement(C.a,null," ",d.a.createElement(z.b,null)," ",a.formatMessage(H.a.featured)))))))))});I.propTypes={topic:h.a.object,history:h.a.object,intl:h.a.any};var J=Object(j.c)(y()(I)),R=n(546),q=n(550);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var K=function(e){var t=e.topics,n=e.topicsFetchStatus,a=e.fetchTopics,r=e.setBreadcrumbs,c=e.intl;Object(m.useEffect)((function(){r([{title:c.formatMessage(H.a.topicsTitle),navigate:"/topics"}]),a()}),[a,r]);var i,s,p;return d.a.createElement(d.a.Fragment,null,d.a.createElement(v.PageHeader,null,d.a.createElement(v.PageHeaderTitle,{title:c.formatMessage(H.a.topicsTitle)})),d.a.createElement(v.Main,null,d.a.createElement(d.a.Fragment,null,""===n||"pending"===n&&d.a.createElement(R.a,null),"fulfilled"===n&&t.length>0&&d.a.createElement(w.a,{gutter:"lg"},(i=f()(t,"featured"),s=l()(u()(i.false,["impacted_systems_count"])),p=l()(u()(i.true,(function(e){return e.impacted_systems_count}))),[].concat(o()(p),o()(s)).map((function(e){return d.a.createElement(J,{key:e.name,topic:e})})))),"failed"===n||"rejected"===n||"fulfilled"===n&&0===t.length&&d.a.createElement(q.a,{icon:O.b,title:c.formatMessage(H.a.topicsListNotopicsTitle),text:c.formatMessage(H.a.topicsListNotopicsBody)}))))};K.displayName="list-topics",K.propTypes={setBreadcrumbs:h.a.func,fetchTopics:h.a.func,topicsFetchStatus:h.a.string,topics:h.a.array,intl:h.a.any};t.default=Object(j.c)(y()(Object(E.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({topics:e.AdvisorStore.topics,topicsFetchStatus:e.AdvisorStore.topicsFetchStatus},t)}),(function(e){return{setBreadcrumbs:function(t){return e(x.h(t))},fetchTopics:function(){return e(x.g())}}}))(K)))},550:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(299),o=n(301),i=n(281),l=n(300),s=n(1),u=n.n(s),p=n(234),f=function(e){var t=e.children,n=e.icon,a=e.iconStyle,s=e.text,u=e.title,p=e.variant;return r.a.createElement(c.a,{variant:p},r.a.createElement(o.a,{style:a,icon:n,size:"lg"}),r.a.createElement(i.a,{headingLevel:"h5",size:"lg"},u),r.a.createElement(l.a,{style:{marginBottom:"16px"}},s),t)};f.propTypes={children:u.a.any,icon:u.a.any,iconStyle:u.a.any,text:u.a.any,title:u.a.string,variant:u.a.any},f.defaultProps={icon:p.b,title:"",variant:c.b.full},t.a=f},577:function(e,t,n){var a=n(592),r=n(593),c=n(594);e.exports=function(e){return a(e)||r(e)||c()}},592:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},593:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},594:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},627:function(e,t,n){(e.exports=n(4)(!1)).push([e.i,".pf-c-button.pf-m-link {\n  padding-left: 0px; }\n\n.pf-l-level.nowrap {\n  flex-wrap: nowrap; }\n\n.cardDescription {\n  height: 144px; }\n",""])},975:function(e,t){var n=Array.prototype.reverse;e.exports=function(e){return null==e?e:n.call(e)}},976:function(e,t,n){var a=n(578),r=n(800),c=n(553),o=n(589),i=c((function(e,t){if(null==e)return[];var n=t.length;return n>1&&o(e,t[0],t[1])?t=[]:n>2&&o(t[0],t[1],t[2])&&(t=[t[0]]),r(e,a(t,1),[])}));e.exports=i}}]);