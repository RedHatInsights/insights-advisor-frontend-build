(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1006:function(e,t,n){var a=n(612);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},c=n(7)(a,r);a.locals&&(e.exports=a.locals),e.hot.accept(612,(function(){var t=n(612);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,a=0;for(n in e){if(!t||e[n]!==t[n])return!1;a++}for(n in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");c(t)})),e.hot.dispose((function(){c()}))},1053:function(e,t,n){"use strict";n.r(t);var a=n(160),r=n.n(a),c=n(558),o=n.n(c),i=n(969),l=n.n(i),s=n(970),u=n.n(s),p=n(673),f=n.n(p),m=n(2),y=n.n(m),g=n(272),d=n.n(g),E=n(1),b=n.n(E),h=n(97),v=n(61),O=n(312),j=n(193),w=n(29),x=n(520),S=n(313),P=n(292),A=n(295),M=n(146),N=n(293),T=n(320),k=n(321),z=n(307),D=n(308),F=n(316),_=n(317),C=n(145),L=n(304),H=n(237),B=n(20),I=(n(1006),function(e){var t=e.topic,n=e.history,a=e.intl;return y.a.createElement(S.a,null,y.a.createElement(P.a,null,y.a.createElement(A.a,null,y.a.createElement(M.a,{headingLevel:"h3",size:"lg"},t.name," ")),y.a.createElement(N.a,null,y.a.createElement(T.a,{gutter:"md"},y.a.createElement(k.a,{className:"cardDescription"},y.a.createElement(z.a,null,y.a.createElement(D.a,{component:D.b.p},t.description.substring(0,150),t.description.length>150?"...":""))),y.a.createElement(k.a,null,y.a.createElement(z.a,null,y.a.createElement(D.a,{component:D.b.small},a.formatMessage(B.a.topicCardSystemsaffected,{systems:t.impacted_systems_count})))),y.a.createElement(k.a,null,y.a.createElement(F.a,{className:"nowrap"},y.a.createElement(_.a,null,y.a.createElement(C.a,{variant:"link",onClick:function(){n.push("/topics/".concat(t.slug,"/"))}},a.formatMessage(B.a.learnMore))),t.featured&&y.a.createElement(_.a,null,y.a.createElement(L.a,null," ",y.a.createElement(H.b,null)," ",a.formatMessage(B.a.featured)))))))))});I.propTypes={topic:b.a.object,history:b.a.object,intl:b.a.any};var J=Object(w.c)(d()(I)),R=n(531),q=n(529);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var K=function(e){var t=e.topics,n=e.topicsFetchStatus,a=e.fetchTopics,r=e.intl;Object(m.useEffect)((function(){a()}),[a]);var c,i,s;return y.a.createElement(y.a.Fragment,null,y.a.createElement(v.PageHeader,null,y.a.createElement(v.PageHeaderTitle,{title:r.formatMessage(B.a.topics)})),y.a.createElement(v.Main,null,y.a.createElement(y.a.Fragment,null,""===n||"pending"===n&&y.a.createElement(R.a,null),"fulfilled"===n&&t.length>0&&y.a.createElement(O.a,{gutter:"lg"},(c=f()(t,"featured"),i=l()(u()(c.false,["impacted_systems_count"])),s=l()(u()(c.true,(function(e){return e.impacted_systems_count}))),[].concat(o()(s),o()(i)).map((function(e){return y.a.createElement(J,{key:e.name,topic:e})})))),"failed"===n||"rejected"===n||"fulfilled"===n&&0===t.length&&y.a.createElement(q.a,{icon:j.b,title:r.formatMessage(B.a.topicsListNotopicsTitle),text:r.formatMessage(B.a.topicsListNotopicsBody)}))))};K.displayName="list-topics",K.propTypes={fetchTopics:b.a.func,topicsFetchStatus:b.a.string,topics:b.a.array,intl:b.a.any};t.default=Object(w.c)(d()(Object(h.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({topics:e.AdvisorStore.topics,topicsFetchStatus:e.AdvisorStore.topicsFetchStatus},t)}),(function(e){return{fetchTopics:function(){return e(x.j())}}}))(K)))},529:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(299),o=n(301),i=n(146),l=n(300),s=n(1),u=n.n(s),p=n(235),f=function(e){var t=e.className,n=e.children,a=e.icon,s=e.iconClass,u=e.iconStyle,p=e.size,f=e.text,m=e.title,y=e.variant;return r.a.createElement(c.a,{className:t,variant:y},"none"!==a&&r.a.createElement(o.a,{className:s,style:u,icon:a,size:p}),r.a.createElement(i.a,{headingLevel:"h5",size:"lg"},m),r.a.createElement(l.a,{style:{marginBottom:"16px"}},f),n)};f.propTypes={children:u.a.any,icon:u.a.any,iconClass:u.a.any,iconStyle:u.a.any,size:u.a.string,text:u.a.any,title:u.a.string,variant:u.a.any,className:u.a.string},f.defaultProps={icon:p.b,title:"",variant:c.b.full,size:"md"},t.a=f},558:function(e,t,n){var a=n(559),r=n(560),c=n(561);e.exports=function(e){return a(e)||r(e)||c()}},559:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},560:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},561:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},612:function(e,t,n){(e.exports=n(6)(!1)).push([e.i,".pf-c-button.pf-m-link{padding-left:0px}.pf-l-level.nowrap{flex-wrap:nowrap}.cardDescription{height:144px}\n",""])},969:function(e,t){var n=Array.prototype.reverse;e.exports=function(e){return null==e?e:n.call(e)}},970:function(e,t,n){var a=n(660),r=n(663),c=n(540),o=n(578),i=c((function(e,t){if(null==e)return[];var n=t.length;return n>1&&o(e,t[0],t[1])?t=[]:n>2&&o(t[0],t[1],t[2])&&(t=[t[0]]),r(e,a(t,1),[])}));e.exports=i}}]);
//# sourceMappingURL=TopicsList.js.map