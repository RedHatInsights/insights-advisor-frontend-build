(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1011:function(e,t,a){var r=a(623);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},i=a(7)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(623,(function(){var t=a(623);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)})),e.hot.dispose((function(){i()}))},1012:function(e,t,a){var r=a(624);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},i=a(7)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(624,(function(){var t=a(624);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)})),e.hot.dispose((function(){i()}))},1062:function(e,t,a){"use strict";a.r(t);var r=a(161),n=a.n(r),i=a(275),c=a.n(i),o=(a(1011),a(526)),l=a(174),s=a(236),u=a(184),d=a(245),m=a(145),f=a(146),p=a(60),b=a(2),g=a.n(b),h=a(328),E=a(44),y=a(354),v=a(351),O=a(162),j=a.n(O),x=a(277),w=a.n(x),C=(a(1012),a(322)),M=a(323),S=a(310),k=a(307),T=a(308),N=a(302),A=a(303),P=a(311),L=a(301),R=a(540),F=a(15),D=a(1),I=a.n(D),U=a(82),z=a(98),B=a(30),q=a(22),H=function(e){var t=e.handleModalToggle,a=e.intl,r=e.isModalOpen,n=e.topic,i=e.addNotification,o=e.fetchTopicsAdmin,l=Object(b.useState)(n.name||""),s=c()(l,2),u=s[0],d=s[1],f=Object(b.useState)(n.description||""),p=c()(f,2),h=p[0],E=p[1],y=Object(b.useState)(n.tag||""),v=c()(y,2),O=v[0],x=v[1],D=Object(b.useState)(n.enabled||!1),I=c()(D,2),U=I[0],z=I[1],B=Object(b.useState)(n.featured||!1),H=c()(B,2),_=H[0],G=H[1],J=Object(b.useState)(n.slug||void 0),X=c()(J,2),K=X[0],Q=X[1],V=function(){var e=w()(j.a.mark((function e(r){var l,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=r.type,e.prev=1,s={name:u,slug:K,tag:O,description:h,enabled:U,featured:_},"DELETE"!==l){e.next=8;break}return e.next=6,R.a.delete("".concat(F.BASE_URL,"/topic/").concat(K));case 6:e.next=15;break;case 8:if(!n.slug){e.next=13;break}return e.next=11,R.a.put("".concat(F.BASE_URL,"/topic/").concat(K),s,{});case 11:e.next=15;break;case 13:return e.next=15,R.a.post("".concat(F.BASE_URL,"/topic/"),{},s);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),i({variant:"danger",dismissable:!0,title:a.formatMessage(q.a.error),description:Object.entries(e.t0.response.data).map((function(e){var t=c()(e,2),a=t[0],r=t[1];return"".concat(a.toUpperCase(),":").concat(r," ")}))});case 20:return e.prev=20,t(!1),o(),e.finish(20);case 24:case"end":return e.stop()}}),e,null,[[1,17,20,24]])})));return function(t){return e.apply(this,arguments)}}(),W=function(e){n.slug?d(e):(d(e),Q(e.replace(/\s/g,"").toLowerCase()))},Y=g.a.createElement(C.a,{gutter:"sm",className:"split-override"},g.a.createElement(M.a,null,g.a.createElement(m.a,{key:"confirm",variant:"primary",onClick:function(){return V({type:"POST/PUT"})}},a.formatMessage(q.a.save))),g.a.createElement(M.a,null,g.a.createElement(m.a,{key:"cancel",variant:"secondary",onClick:function(){return t(!1)}},a.formatMessage(q.a.cancel))),g.a.createElement(M.a,{isFilled:!0}),g.a.createElement(M.a,null,g.a.createElement(m.a,{key:"delete",variant:"danger",isDisabled:!n.slug,onClick:function(){return V({type:"DELETE"})}},a.formatMessage(q.a.deleteTopic))));return g.a.createElement(S.a,{title:a.formatMessage(q.a.topicAdminTitle),isOpen:r,onClose:function(){return t(!1)},footer:Y,isFooterLeftAligned:!0,className:"modal-width-override"},g.a.createElement(k.a,null,g.a.createElement(T.a,{label:a.formatMessage(q.a.name),fieldId:"topic-form-name",className:"text-input-override"},g.a.createElement(N.a,{value:u,isRequired:!0,type:"text",id:"topic-form-name",name:"topic-form-name",onChange:function(e){return W(e)}})),g.a.createElement(T.a,{label:a.formatMessage(q.a.topicAddEditDescription),fieldId:"topic-form-description",helperText:a.formatMessage(q.a.topicAddEditDescriptionHelperText),className:"text-area-override"},g.a.createElement(A.b,{value:h,isRequired:!0,name:"topic-form-description",id:"topic-form-description",onChange:function(e){return E(e)}})),g.a.createElement(T.a,{isInline:!0,fieldId:"topic-form-labels"},g.a.createElement(T.a,{label:a.formatMessage(q.a.tag),fieldId:"topic-form-tag",helperText:a.formatMessage(q.a.topicAddEditTagHelperText),className:"text-input-override"},g.a.createElement(N.a,{value:O.replace(/\s/g,"").toLowerCase(),isRequired:!0,type:"text",id:"topic-form-tag",name:"topic-form-tag",onChange:function(e){return x(e.replace(/\s/g,"").toLowerCase())}})),g.a.createElement(T.a,{label:a.formatMessage(q.a.topicSlug),fieldId:"topic-form-name-2",helperText:"",className:"text-input-override"},g.a.createElement(N.a,{value:K||u.replace(/\s/g,"").toLowerCase(),isDisabled:n.slug,type:"text",id:"topic-form-name-2",name:"topic-form-name-2",onChange:function(e){return W(e)}}))),g.a.createElement(T.a,{label:a.formatMessage(q.a.status),fieldId:"topic-form-enabled"},g.a.createElement(P.a,{isChecked:!U,id:"disabled",label:a.formatMessage(q.a.topicAddEditDisabled),onChange:function(){return z(!U)},className:"radio-override"}),g.a.createElement(P.a,{isChecked:U,id:"enabled",label:a.formatMessage(q.a.topicAddEditEnabled),onChange:function(){return z(!U)},className:"radio-override"})),g.a.createElement(T.a,{label:a.formatMessage(q.a.featured),fieldId:"topic-form-featured"},g.a.createElement(L.a,{isChecked:_,label:a.formatMessage(q.a.topicAddEditFeatureBox),id:"checkbox-featured",name:"checkbox-featured","aria-label":"update-featured",onChange:function(){return G(!_)},className:"checkbox-override"}))))};H.propTypes={handleModalToggle:I.a.func,isModalOpen:I.a.bool,topic:I.a.object,intl:I.a.any,addNotification:I.a.func,fetchTopicsAdmin:I.a.func};var _=Object(B.c)(Object(z.connect)(null,(function(e){return{addNotification:function(t){return e(Object(U.addNotification)(t))},fetchTopicsAdmin:function(){return e(Object(o.k)())}}}))(H)),G=a(542),J=a(38),X=a.n(J),K=a(532),Q=a(533),V=a(276),W=a.n(V);function Y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var Z=function(e){var t=e.topicsFetchStatus,a=e.fetchTopicsAdmin,r=e.topics,n=e.intl,i=Object(b.useState)([{title:n.formatMessage(q.a.title),transforms:[h.a]},{title:n.formatMessage(q.a.tag),transforms:[h.a]},{title:n.formatMessage(q.a.topicSlug),transforms:[h.a]},{title:n.formatMessage(q.a.status),transforms:[h.a]},{title:n.formatMessage(q.a.featured),transforms:[h.a]},"",""]),o=c()(i,1)[0],O=Object(b.useState)([]),j=c()(O,2),x=j[0],w=j[1],C=Object(b.useState)({}),M=c()(C,2),S=M[0],k=M[1],T=Object(b.useState)(!1),N=c()(T,2),A=N[0],P=N[1],L=Object(b.useState)({}),R=c()(L,2),F=R[0],D=R[1],I=Object(b.useState)([]),U=c()(I,2),z=U[0],B=U[1],H=Object(b.useCallback)((function(e,t,a){var r={0:"name",1:"tag",2:"slug",3:"enabled",4:"featured"}[t];k({index:t,direction:a}),B(X.a.from(z.asMutable().sort((function(e,t){return"asc"===a?"enabled"===r||"featured"===r?e[r]>t[r]?-1:1:e[r]>t[r]?1:-1:"enabled"===r||"featured"===r?e[r]>t[r]?1:-1:e[r]>t[r]?-1:1}))))}),[k,B,z]),J=function(e){e?(D(e),P(!0)):P(!0)};return Object(b.useEffect)((function(){B(r)}),[r]),Object(b.useEffect)((function(){a()}),[a]),Object(b.useEffect)((function(){if(0===z.length)w([{cells:[{title:g.a.createElement(Q.a,{icon:"none",title:"",text:""}),props:{colSpan:7}}]}]);else{var e=z.flatMap((function(e,t){return[{isOpen:!1,rule:e,cells:[{title:g.a.createElement("span",{key:t}," ",e.name)},{title:g.a.createElement("span",{key:t}," ",e.tag)},{title:g.a.createElement("span",{key:t}," ",e.slug)},{title:g.a.createElement("span",null,e.enabled?g.a.createElement("span",null,g.a.createElement(l.b,{className:"success"})," ",n.formatMessage(q.a.enabled)):g.a.createElement("span",null,g.a.createElement(s.b,{className:"ban"})," ",n.formatMessage(q.a.disabled)))},{title:g.a.createElement("span",null,e.featured?g.a.createElement("span",null,g.a.createElement(u.b,null)," ",n.formatMessage(q.a.featured)):g.a.createElement("span",null))},"",{title:g.a.createElement(m.a,{variant:"link",onClick:function(){return J(e)}},g.a.createElement(d.b,null)," ",n.formatMessage(q.a.topicAdminEdit))}]}]}));w(e.asMutable())}}),[z,n]),g.a.createElement(g.a.Fragment,null,A&&g.a.createElement(_,{isModalOpen:A,handleModalToggle:P,topic:F}),g.a.createElement(p.PageHeader,null,g.a.createElement(f.a,{headingLevel:"h3",size:"2xl",className:"titlePaddingOverride"},n.formatMessage(q.a.topicAdminTitle))),g.a.createElement(p.Main,null,g.a.createElement(g.a.Fragment,null,g.a.createElement(p.PrimaryToolbar,{className:"toolbar-padding-override"},g.a.createElement(m.a,{variant:"primary",onClick:function(e){return J(e)}},n.formatMessage(q.a.topicAdminCreate))),"fulfilled"===t&&g.a.createElement(E.b,{"aria-label":"topics-admin-table",sortBy:S,onSort:H,cells:o,rows:x},g.a.createElement(y.a,null),g.a.createElement(v.a,null)),"pending"===t&&g.a.createElement(K.a,null),"failed"===t&&g.a.createElement(G.a,{message:n.formatMessage(q.a.systemTableFetchError)}),g.a.createElement(p.TableToolbar,null))))};Z.propTypes={fetchTopicsAdmin:I.a.func,topicsFetchStatus:I.a.string,topics:I.a.array,addNotification:I.a.func,history:I.a.object,intl:I.a.any};t.default=Object(B.c)(W()(Object(z.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({topics:e.AdvisorStore.topics,topicsFetchStatus:e.AdvisorStore.topicsFetchStatus},t)}),(function(e){return{fetchTopicsAdmin:function(){return e(o.k())},addNotification:function(t){return e(Object(U.addNotification)(t))}}}))(Z)))},532:function(e,t,a){"use strict";var r=a(2),n=a.n(r),i=a(296),c=a(297),o=a(538);t.a=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,null,n.a.createElement(c.a,null,n.a.createElement(o.a,null))))}},533:function(e,t,a){"use strict";var r=a(2),n=a.n(r),i=a(304),c=a(306),o=a(146),l=a(305),s=a(1),u=a.n(s),d=a(238),m=function(e){var t=e.className,a=e.children,r=e.icon,s=e.iconClass,u=e.iconStyle,d=e.size,m=e.text,f=e.title,p=e.variant;return n.a.createElement(i.a,{className:t,variant:p},"none"!==r&&n.a.createElement(c.a,{className:s,style:u,icon:r,size:d}),n.a.createElement(o.a,{headingLevel:"h5",size:"lg"},f),n.a.createElement(l.a,{style:{marginBottom:"16px"}},m),a)};m.propTypes={children:u.a.any,icon:u.a.any,iconClass:u.a.any,iconStyle:u.a.any,size:u.a.string,text:u.a.any,title:u.a.string,variant:u.a.any,className:u.a.string},m.defaultProps={icon:d.b,title:"",variant:i.b.full,size:"md"},t.a=m},538:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(2),n=function(){return(n=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};var i=function(){return Math.random().toString(36).substring(2)},c=function(e){var t=e.rtl,a=e.speed,c=e.interval,o=e.style,l=e.width,s=e.height,u=e.baseUrl,d=e.gradientRatio,m=e.animate,f=e.ariaLabel,p=e.children,b=e.className,g=e.uniquekey,h=e.primaryColor,E=e.primaryOpacity,y=e.secondaryColor,v=e.secondaryOpacity,O=e.preserveAspectRatio,j=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["rtl","speed","interval","style","width","height","baseUrl","gradientRatio","animate","ariaLabel","children","className","uniquekey","primaryColor","primaryOpacity","secondaryColor","secondaryOpacity","preserveAspectRatio"]),x=g?g+"-idClip":i(),w=g?g+"-idGradient":i(),C=t?{transform:"scaleX(-1)"}:{},M="0; "+c+"; 1",S=a+"s";return Object(r.createElement)("svg",n({role:"img",style:n(n({},o),C),className:b,"aria-label":f||null,viewBox:"0 0 "+l+" "+s,preserveAspectRatio:O},j),f?Object(r.createElement)("title",null,f):null,Object(r.createElement)("rect",{x:"0",y:"0",width:l,height:s,clipPath:"url("+u+"#"+x+")",style:{fill:"url("+u+"#"+w+")"}}),Object(r.createElement)("defs",null,Object(r.createElement)("clipPath",{id:x},p),Object(r.createElement)("linearGradient",{id:w},Object(r.createElement)("stop",{offset:"0%",stopColor:h,stopOpacity:E},m&&Object(r.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:M,dur:S,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"50%",stopColor:y,stopOpacity:v},m&&Object(r.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:M,dur:S,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"100%",stopColor:h,stopOpacity:E},m&&Object(r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:M,dur:S,repeatCount:"indefinite"})))))},o={animate:!0,ariaLabel:"Loading interface...",baseUrl:"",gradientRatio:2,height:130,interval:.25,preserveAspectRatio:"none",primaryColor:"#f0f0f0",primaryOpacity:1,rtl:!1,secondaryColor:"#e0e0e0",secondaryOpacity:1,speed:2,style:{},width:400},l=function(e){return Object(r.createElement)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:e.width,height:e.height})},s=function(e){var t=n(n({},o),e);return Object(r.createElement)(c,n({},t),e.children||Object(r.createElement)(l,n({},t)))},u=function(e){return Object(r.createElement)(s,n({},e),Object(r.createElement)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"10"}),Object(r.createElement)("rect",{x:"20",y:"20",rx:"3",ry:"3",width:"220",height:"10"}),Object(r.createElement)("rect",{x:"20",y:"40",rx:"3",ry:"3",width:"170",height:"10"}),Object(r.createElement)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"250",height:"10"}),Object(r.createElement)("rect",{x:"20",y:"80",rx:"3",ry:"3",width:"200",height:"10"}),Object(r.createElement)("rect",{x:"20",y:"100",rx:"3",ry:"3",width:"80",height:"10"}))}},542:function(e,t,a){"use strict";var r=a(2),n=a.n(r),i=a(296),c=a(299),o=a(297),l=a(239),s=a(1),u=a.n(s),d=function(e){var t=e.message;return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{className:"ins-empty-rule-cards"},n.a.createElement(c.a,null,n.a.createElement(l.b,{size:"lg"})),n.a.createElement(o.a,null,t)))};t.a=d,d.propTypes={message:u.a.string}},623:function(e,t,a){(e.exports=a(6)(!1)).push([e.i,".toolbar-padding-override{padding-left:0px}.success{color:var(--pf-global--success-color--100)}.ban{color:var(--pf-global--Color--200)}\n",""])},624:function(e,t,a){(e.exports=a(6)(!1)).push([e.i,".text-area-override{max-width:30em;min-height:8em;max-height:12em}.text-input-override{width:22em;display:inline}.radio-override{padding-left:5px}.checkbox-override{padding-left:5px}.split-override{width:100%}.modal-width-override{width:60%}\n",""])}}]);
//# sourceMappingURL=TopicAdmin.js.map