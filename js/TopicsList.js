(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1017:function(e,t,n){var a=n(635);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},c=n(5)(a,r);a.locals&&(e.exports=a.locals),e.hot.accept(635,(function(){var t=n(635);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,a=0;for(n in e){if(!t||e[n]!==t[n])return!1;a++}for(n in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");c(t)})),e.hot.dispose((function(){c()}))},1061:function(e,t,n){"use strict";n.r(t);var a=n(166),r=n.n(a),c=n(572),o=n.n(c),i=n(984),l=n.n(i),s=n(985),u=n.n(s),p=n(692),f=n.n(p),m=n(2),g=n.n(m),d=n(279),y=n.n(d),E=n(1),b=n.n(E),h=n(81),v=n(371),w=n(315),O=n(200),j=n(33),x=n(537),S=n(316),P=n(299),M=n(301),A=n(289),T=n(300),k=n(323),F=n(324),D=n(312),_=n(313),B=n(319),L=n(320),N=n(288),z=n(310),C=n(243),H=n(10),I=(n(1017),function(e){var t=e.topic,n=e.history,a=e.intl;return g.a.createElement(S.a,null,g.a.createElement(P.a,null,g.a.createElement(M.a,null,g.a.createElement(A.a,{headingLevel:"h3",size:"lg"},t.name," ")),g.a.createElement(T.a,null,g.a.createElement(k.a,{gutter:"md"},g.a.createElement(F.a,{className:"cardDescription"},g.a.createElement(D.a,null,g.a.createElement(_.a,{component:_.b.p},t.description.substring(0,150),t.description.length>150?"...":""))),g.a.createElement(F.a,null,g.a.createElement(D.a,null,g.a.createElement(_.a,{component:_.b.small},a.formatMessage(H.a.topicCardSystemsaffected,{systems:t.impacted_systems_count})))),g.a.createElement(F.a,null,g.a.createElement(B.a,{className:"nowrap"},g.a.createElement(L.a,null,g.a.createElement(N.a,{variant:"link",onClick:function(){n.push("/topics/".concat(t.slug,"/"))}},a.formatMessage(H.a.learnMore))),t.featured&&g.a.createElement(L.a,null,g.a.createElement(z.a,null," ",g.a.createElement(C.b,null)," ",a.formatMessage(H.a.featured)))))))))});I.propTypes={topic:b.a.object,history:b.a.object,intl:b.a.any};var J=Object(j.c)(y()(I)),R=n(541),q=n(550);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var K=function(e){var t=e.topics,n=e.topicsFetchStatus,a=e.fetchTopics,r=e.setBreadcrumbs,c=e.intl;Object(m.useEffect)((function(){r([{title:c.formatMessage(H.a.topics),navigate:"/topics"}]),a()}),[a,r]);var i,s,p;return g.a.createElement(g.a.Fragment,null,g.a.createElement(v.PageHeader,null,g.a.createElement(v.PageHeaderTitle,{title:c.formatMessage(H.a.topics)})),g.a.createElement(v.Main,null,g.a.createElement(g.a.Fragment,null,""===n||"pending"===n&&g.a.createElement(R.a,null),"fulfilled"===n&&t.length>0&&g.a.createElement(w.a,{gutter:"lg"},(i=f()(t,"featured"),s=l()(u()(i.false,["impacted_systems_count"])),p=l()(u()(i.true,(function(e){return e.impacted_systems_count}))),[].concat(o()(p),o()(s)).map((function(e){return g.a.createElement(J,{key:e.name,topic:e})})))),"failed"===n||"rejected"===n||"fulfilled"===n&&0===t.length&&g.a.createElement(q.a,{icon:O.b,title:c.formatMessage(H.a.topicsListNotopicsTitle),text:c.formatMessage(H.a.topicsListNotopicsBody)}))))};K.displayName="list-topics",K.propTypes={setBreadcrumbs:b.a.func,fetchTopics:b.a.func,topicsFetchStatus:b.a.string,topics:b.a.array,intl:b.a.any};t.default=Object(j.c)(y()(Object(h.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({topics:e.AdvisorStore.topics,topicsFetchStatus:e.AdvisorStore.topicsFetchStatus},t)}),(function(e){return{setBreadcrumbs:function(t){return e(x.i(t))},fetchTopics:function(){return e(x.h())}}}))(K)))},541:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(299),o=n(300),i=n(372);t.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement(o.a,null,r.a.createElement(i.List,null))))}},550:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(307),o=n(309),i=n(289),l=n(308),s=n(1),u=n.n(s),p=n(241),f=function(e){var t=e.children,n=e.icon,a=e.iconStyle,s=e.text,u=e.title,p=e.variant;return r.a.createElement(c.a,{variant:p},"none"!==n&&r.a.createElement(o.a,{style:a,icon:n,size:"lg"}),r.a.createElement(i.a,{headingLevel:"h5",size:"lg"},u),r.a.createElement(l.a,{style:{marginBottom:"16px"}},s),t)};f.propTypes={children:u.a.any,icon:u.a.any,iconStyle:u.a.any,text:u.a.any,title:u.a.string,variant:u.a.any},f.defaultProps={icon:p.b,title:"",variant:c.b.full},t.a=f},572:function(e,t,n){var a=n(601),r=n(602),c=n(603);e.exports=function(e){return a(e)||r(e)||c()}},601:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},602:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},603:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},635:function(e,t,n){(e.exports=n(4)(!1)).push([e.i,".pf-c-button.pf-m-link {\n  padding-left: 0px; }\n\n.pf-l-level.nowrap {\n  flex-wrap: nowrap; }\n\n.cardDescription {\n  height: 144px; }\n",""])},984:function(e,t){var n=Array.prototype.reverse;e.exports=function(e){return null==e?e:n.call(e)}},985:function(e,t,n){var a=n(592),r=n(681),c=n(561),o=n(596),i=c((function(e,t){if(null==e)return[];var n=t.length;return n>1&&o(e,t[0],t[1])?t=[]:n>2&&o(t[0],t[1],t[2])&&(t=[t[0]]),r(e,a(t,1),[])}));e.exports=i}}]);