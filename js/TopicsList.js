(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1008:function(e,t,r){var a=r(614);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},c=r(7)(a,n);a.locals&&(e.exports=a.locals),e.hot.accept(614,(function(){var t=r(614);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,a=0;for(r in e){if(!t||e[r]!==t[r])return!1;a++}for(r in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");c(t)})),e.hot.dispose((function(){c()}))},1055:function(e,t,r){"use strict";r.r(t);var a=r(160),n=r.n(a),c=r(560),i=r.n(c),l=r(971),o=r.n(l),s=r(972),u=r.n(s),p=r(674),m=r.n(p),f=r(2),y=r.n(f),d=r(272),h=r.n(d),b=r(1),g=r.n(b),O=r(98),E=r(61),v=r(312),j=r(195),w=r(30),x=r(521),C=r(313),S=r(292),P=r(295),N=r(146),A=r(293),k=r(320),T=r(321),M=r(307),L=r(308),R=r(316),F=r(317),z=r(145),D=r(304),_=r(183),B=r(21),H=(r(1008),function(e){var t=e.topic,r=e.history,a=e.intl;return y.a.createElement(C.a,null,y.a.createElement(S.a,null,y.a.createElement(P.a,null,y.a.createElement(N.a,{headingLevel:"h3",size:"lg"},t.name," ")),y.a.createElement(A.a,null,y.a.createElement(k.a,{gutter:"md"},y.a.createElement(T.a,{className:"cardDescription"},y.a.createElement(M.a,null,y.a.createElement(L.a,{component:L.b.p},t.description.substring(0,150),t.description.length>150?"...":""))),y.a.createElement(T.a,null,y.a.createElement(M.a,null,y.a.createElement(L.a,{component:L.b.small},a.formatMessage(B.a.topicCardSystemsaffected,{systems:t.impacted_systems_count})))),y.a.createElement(T.a,null,y.a.createElement(R.a,{className:"nowrap"},y.a.createElement(F.a,null,y.a.createElement(z.a,{variant:"link",onClick:function(){r.push("/topics/".concat(t.slug,"/"))}},a.formatMessage(B.a.learnMore))),t.featured&&y.a.createElement(F.a,null,y.a.createElement(D.a,null," ",y.a.createElement(_.b,null)," ",a.formatMessage(B.a.featured)))))))))});H.propTypes={topic:g.a.object,history:g.a.object,intl:g.a.any};var I=Object(w.c)(h()(H)),U=r(530),q=r(531);function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var J=function(e){var t=e.topics,r=e.topicsFetchStatus,a=e.fetchTopics,n=e.intl;Object(f.useEffect)((function(){a()}),[a]);var c,l,s;return y.a.createElement(y.a.Fragment,null,y.a.createElement(E.PageHeader,null,y.a.createElement(E.PageHeaderTitle,{title:n.formatMessage(B.a.topics)})),y.a.createElement(E.Main,null,y.a.createElement(y.a.Fragment,null,""===r||"pending"===r&&y.a.createElement(U.a,null),"fulfilled"===r&&t.length>0&&y.a.createElement(v.a,{gutter:"lg"},(c=m()(t,"featured"),l=o()(u()(c.false,["impacted_systems_count"])),s=o()(u()(c.true,(function(e){return e.impacted_systems_count}))),[].concat(i()(s),i()(l)).map((function(e){return y.a.createElement(I,{key:e.name,topic:e})})))),"failed"===r||"rejected"===r||"fulfilled"===r&&0===t.length&&y.a.createElement(q.a,{icon:j.b,title:n.formatMessage(B.a.topicsListNotopicsTitle),text:n.formatMessage(B.a.topicsListNotopicsBody)}))))};J.displayName="list-topics",J.propTypes={fetchTopics:g.a.func,topicsFetchStatus:g.a.string,topics:g.a.array,intl:g.a.any};t.default=Object(w.c)(h()(Object(O.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({topics:e.AdvisorStore.topics,topicsFetchStatus:e.AdvisorStore.topicsFetchStatus},t)}),(function(e){return{fetchTopics:function(){return e(x.j())}}}))(J)))},530:function(e,t,r){"use strict";var a=r(2),n=r.n(a),c=r(292),i=r(293),l=r(533);t.a=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement(i.a,null,n.a.createElement(l.a,null))))}},531:function(e,t,r){"use strict";var a=r(2),n=r.n(a),c=r(299),i=r(301),l=r(146),o=r(300),s=r(1),u=r.n(s),p=r(236),m=function(e){var t=e.className,r=e.children,a=e.icon,s=e.iconClass,u=e.iconStyle,p=e.size,m=e.text,f=e.title,y=e.variant;return n.a.createElement(c.a,{className:t,variant:y},"none"!==a&&n.a.createElement(i.a,{className:s,style:u,icon:a,size:p}),n.a.createElement(l.a,{headingLevel:"h5",size:"lg"},f),n.a.createElement(o.a,{style:{marginBottom:"16px"}},m),r)};m.propTypes={children:u.a.any,icon:u.a.any,iconClass:u.a.any,iconStyle:u.a.any,size:u.a.string,text:u.a.any,title:u.a.string,variant:u.a.any,className:u.a.string},m.defaultProps={icon:p.b,title:"",variant:c.b.full,size:"md"},t.a=m},533:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var a=r(2),n=function(){return(n=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};var c=function(){return Math.random().toString(36).substring(2)},i=function(e){var t=e.rtl,r=e.speed,i=e.interval,l=e.style,o=e.width,s=e.height,u=e.baseUrl,p=e.gradientRatio,m=e.animate,f=e.ariaLabel,y=e.children,d=e.className,h=e.uniquekey,b=e.primaryColor,g=e.primaryOpacity,O=e.secondaryColor,E=e.secondaryOpacity,v=e.preserveAspectRatio,j=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["rtl","speed","interval","style","width","height","baseUrl","gradientRatio","animate","ariaLabel","children","className","uniquekey","primaryColor","primaryOpacity","secondaryColor","secondaryOpacity","preserveAspectRatio"]),w=h?h+"-idClip":c(),x=h?h+"-idGradient":c(),C=t?{transform:"scaleX(-1)"}:{},S="0; "+i+"; 1",P=r+"s";return Object(a.createElement)("svg",n({role:"img",style:n(n({},l),C),className:d,"aria-label":f||null,viewBox:"0 0 "+o+" "+s,preserveAspectRatio:v},j),f?Object(a.createElement)("title",null,f):null,Object(a.createElement)("rect",{x:"0",y:"0",width:o,height:s,clipPath:"url("+u+"#"+w+")",style:{fill:"url("+u+"#"+x+")"}}),Object(a.createElement)("defs",null,Object(a.createElement)("clipPath",{id:w},y),Object(a.createElement)("linearGradient",{id:x},Object(a.createElement)("stop",{offset:"0%",stopColor:b,stopOpacity:g},m&&Object(a.createElement)("animate",{attributeName:"offset",values:-p+"; "+-p+"; 1",keyTimes:S,dur:P,repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"50%",stopColor:O,stopOpacity:E},m&&Object(a.createElement)("animate",{attributeName:"offset",values:-p/2+"; "+-p/2+"; "+(1+p/2),keyTimes:S,dur:P,repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"100%",stopColor:b,stopOpacity:g},m&&Object(a.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+p),keyTimes:S,dur:P,repeatCount:"indefinite"})))))},l={animate:!0,ariaLabel:"Loading interface...",baseUrl:"",gradientRatio:2,height:130,interval:.25,preserveAspectRatio:"none",primaryColor:"#f0f0f0",primaryOpacity:1,rtl:!1,secondaryColor:"#e0e0e0",secondaryOpacity:1,speed:2,style:{},width:400},o=function(e){return Object(a.createElement)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:e.width,height:e.height})},s=function(e){var t=n(n({},l),e);return Object(a.createElement)(i,n({},t),e.children||Object(a.createElement)(o,n({},t)))},u=function(e){return Object(a.createElement)(s,n({},e),Object(a.createElement)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"10"}),Object(a.createElement)("rect",{x:"20",y:"20",rx:"3",ry:"3",width:"220",height:"10"}),Object(a.createElement)("rect",{x:"20",y:"40",rx:"3",ry:"3",width:"170",height:"10"}),Object(a.createElement)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"250",height:"10"}),Object(a.createElement)("rect",{x:"20",y:"80",rx:"3",ry:"3",width:"200",height:"10"}),Object(a.createElement)("rect",{x:"20",y:"100",rx:"3",ry:"3",width:"80",height:"10"}))}},560:function(e,t,r){var a=r(561),n=r(562),c=r(563);e.exports=function(e){return a(e)||n(e)||c()}},561:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},562:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},563:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},614:function(e,t,r){(e.exports=r(6)(!1)).push([e.i,".pf-c-button.pf-m-link{padding-left:0px}.pf-l-level.nowrap{flex-wrap:nowrap}.cardDescription{height:144px}\n",""])},971:function(e,t){var r=Array.prototype.reverse;e.exports=function(e){return null==e?e:r.call(e)}},972:function(e,t,r){var a=r(661),n=r(664),c=r(542),i=r(580),l=c((function(e,t){if(null==e)return[];var r=t.length;return r>1&&i(e,t[0],t[1])?t=[]:r>2&&i(t[0],t[1],t[2])&&(t=[t[0]]),n(e,a(t,1),[])}));e.exports=l}}]);
//# sourceMappingURL=TopicsList.js.map