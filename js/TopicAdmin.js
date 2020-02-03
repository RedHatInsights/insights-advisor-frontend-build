(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1007:function(e,t,a){"use strict";a.r(t);var r=a(178),n=a.n(r),i=a(270),c=a.n(i),o=(a(956),a(467)),l=a(85),s=a(242),u=a(113),d=a(251),m=a(256),f=a(160),p=a(65),b=a(2),g=a.n(b),E=a(322),h=a(48),y=a(335),O=a(332),v=a(179),j=a.n(v),x=a(272),w=a.n(x),M=(a(957),a(316)),k=a(317),C=a(304),S=a(301),T=a(302),N=a(295),A=a(296),P=a(305),L=a(294),F=a(480),D=a(14),I=a(1),R=a.n(I),B=a(90),U=a(106),z=a(32),q=a(22),H=function(e){var t=e.handleModalToggle,a=e.intl,r=e.isModalOpen,n=e.topic,i=e.addNotification,o=e.fetchTopicsAdmin,l=Object(b.useState)(n.name||""),s=c()(l,2),u=s[0],d=s[1],f=Object(b.useState)(n.description||""),p=c()(f,2),E=p[0],h=p[1],y=Object(b.useState)(n.tag||""),O=c()(y,2),v=O[0],x=O[1],I=Object(b.useState)(n.enabled||!1),R=c()(I,2),B=R[0],U=R[1],z=Object(b.useState)(n.featured||!1),H=c()(z,2),_=H[0],J=H[1],K=Object(b.useState)(n.slug||void 0),G=c()(K,2),X=G[0],Q=G[1],V=function(){var e=w()(j.a.mark((function e(r){var l,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=r.type,e.prev=1,s={name:u,slug:X,tag:v,description:E,enabled:B,featured:_},"DELETE"!==l){e.next=8;break}return e.next=6,F.a.delete("".concat(D.BASE_URL,"/topic/").concat(X));case 6:e.next=15;break;case 8:if(!n.slug){e.next=13;break}return e.next=11,F.a.put("".concat(D.BASE_URL,"/topic/").concat(X,"/"),s);case 11:e.next=15;break;case 13:return e.next=15,F.a.post("".concat(D.BASE_URL,"/topic/"),{},s);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),i({variant:"danger",dismissable:!0,title:a.formatMessage(q.a.error),description:Object.entries(e.t0.response.data).map((function(e){var t=c()(e,2),a=t[0],r=t[1];return"".concat(a.toUpperCase(),":").concat(r," ")}))});case 20:return e.prev=20,t(!1),o(),e.finish(20);case 24:case"end":return e.stop()}}),e,null,[[1,17,20,24]])})));return function(t){return e.apply(this,arguments)}}(),W=function(e){n.slug?d(e):(d(e),Q(e.replace(/\s/g,"").toLowerCase()))},Y=g.a.createElement(M.a,{gutter:"sm",className:"split-override"},g.a.createElement(k.a,null,g.a.createElement(m.a,{key:"confirm",variant:"primary",onClick:function(){return V({type:"POST/PUT"})}},a.formatMessage(q.a.save))),g.a.createElement(k.a,null,g.a.createElement(m.a,{key:"cancel",variant:"secondary",onClick:function(){return t(!1)}},a.formatMessage(q.a.cancel))),g.a.createElement(k.a,{isFilled:!0}),g.a.createElement(k.a,null,g.a.createElement(m.a,{key:"delete",variant:"danger",isDisabled:!n.slug,onClick:function(){return V({type:"DELETE"})}},a.formatMessage(q.a.deleteTopic))));return g.a.createElement(C.a,{title:a.formatMessage(q.a.topicAdminTitle),isOpen:r,onClose:function(){return t(!1)},footer:Y,isFooterLeftAligned:!0,className:"modal-width-override"},g.a.createElement(S.a,null,g.a.createElement(T.a,{label:a.formatMessage(q.a.name),fieldId:"topic-form-name",className:"text-input-override"},g.a.createElement(N.a,{value:u,isRequired:!0,type:"text",id:"topic-form-name",name:"topic-form-name",onChange:function(e){return W(e)}})),g.a.createElement(T.a,{label:a.formatMessage(q.a.topicAddEditDescription),fieldId:"topic-form-description",helperText:a.formatMessage(q.a.topicAddEditDescriptionHelperText),className:"text-area-override"},g.a.createElement(A.b,{value:E,isRequired:!0,name:"topic-form-description",id:"topic-form-description",onChange:function(e){return h(e)}})),g.a.createElement(T.a,{isInline:!0,fieldId:"topic-form-labels"},g.a.createElement(T.a,{label:a.formatMessage(q.a.tag),fieldId:"topic-form-tag",helperText:a.formatMessage(q.a.topicAddEditTagHelperText),className:"text-input-override"},g.a.createElement(N.a,{value:v.replace(/\s/g,"").toLowerCase(),isRequired:!0,type:"text",id:"topic-form-tag",name:"topic-form-tag",onChange:function(e){return x(e.replace(/\s/g,"").toLowerCase())}})),g.a.createElement(T.a,{label:a.formatMessage(q.a.topicSlug),fieldId:"topic-form-name-2",helperText:"",className:"text-input-override"},g.a.createElement(N.a,{value:X||u.replace(/\s/g,"").toLowerCase(),isDisabled:n.slug,type:"text",id:"topic-form-name-2",name:"topic-form-name-2",onChange:function(e){return W(e)}}))),g.a.createElement(T.a,{label:a.formatMessage(q.a.status),fieldId:"topic-form-enabled"},g.a.createElement(P.a,{isChecked:!B,id:"disabled",label:a.formatMessage(q.a.topicAddEditDisabled),onChange:function(){return U(!B)},className:"radio-override"}),g.a.createElement(P.a,{isChecked:B,id:"enabled",label:a.formatMessage(q.a.topicAddEditEnabled),onChange:function(){return U(!B)},className:"radio-override"})),g.a.createElement(T.a,{label:a.formatMessage(q.a.featured),fieldId:"topic-form-featured"},g.a.createElement(L.a,{isChecked:_,label:a.formatMessage(q.a.topicAddEditFeatureBox),id:"checkbox-featured",name:"checkbox-featured","aria-label":"update-featured",onChange:function(){return J(!_)},className:"checkbox-override"}))))};H.propTypes={handleModalToggle:R.a.func,isModalOpen:R.a.bool,topic:R.a.object,intl:R.a.any,addNotification:R.a.func,fetchTopicsAdmin:R.a.func};var _=Object(z.c)(Object(U.connect)(null,(function(e){return{addNotification:function(t){return e(Object(B.addNotification)(t))},fetchTopicsAdmin:function(){return e(Object(o.k)())}}}))(H)),J=a(482),K=a(36),G=a.n(K),X=a(473),Q=a(474),V=a(271),W=a.n(V);function Y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var Z=function(e){var t=e.topicsFetchStatus,a=e.fetchTopicsAdmin,r=e.topics,n=e.intl,i=Object(b.useState)([{title:n.formatMessage(q.a.title),transforms:[E.a]},{title:n.formatMessage(q.a.tag),transforms:[E.a]},{title:n.formatMessage(q.a.topicSlug),transforms:[E.a]},{title:n.formatMessage(q.a.status),transforms:[E.a]},{title:n.formatMessage(q.a.featured),transforms:[E.a]},"",""]),o=c()(i,1)[0],v=Object(b.useState)([]),j=c()(v,2),x=j[0],w=j[1],M=Object(b.useState)({}),k=c()(M,2),C=k[0],S=k[1],T=Object(b.useState)(!1),N=c()(T,2),A=N[0],P=N[1],L=Object(b.useState)({}),F=c()(L,2),D=F[0],I=F[1],R=Object(b.useState)([]),B=c()(R,2),U=B[0],z=B[1],H=Object(b.useCallback)((function(e,t,a){var r={0:"name",1:"tag",2:"slug",3:"enabled",4:"featured"}[t];S({index:t,direction:a}),z(G.a.from(U.asMutable().sort((function(e,t){return"asc"===a?"enabled"===r||"featured"===r?e[r]>t[r]?-1:1:e[r]>t[r]?1:-1:"enabled"===r||"featured"===r?e[r]>t[r]?1:-1:e[r]>t[r]?-1:1}))))}),[S,z,U]),K=function(e){e?(I(e),P(!0)):P(!0)};return Object(b.useEffect)((function(){z(r)}),[r]),Object(b.useEffect)((function(){a()}),[a]),Object(b.useEffect)((function(){if(0===U.length)w([{cells:[{title:g.a.createElement(Q.a,{icon:"none",title:"",text:""}),props:{colSpan:7}}]}]);else{var e=U.flatMap((function(e,t){return[{isOpen:!1,rule:e,cells:[{title:g.a.createElement("span",{key:t}," ",e.name)},{title:g.a.createElement("span",{key:t}," ",e.tag)},{title:g.a.createElement("span",{key:t}," ",e.slug)},{title:g.a.createElement("span",null,e.enabled?g.a.createElement("span",null,g.a.createElement(l.b,{className:"success"})," ",n.formatMessage(q.a.enabled)):g.a.createElement("span",null,g.a.createElement(s.b,{className:"ban"})," ",n.formatMessage(q.a.disabled)))},{title:g.a.createElement("span",null,e.featured?g.a.createElement("span",null,g.a.createElement(u.b,null)," ",n.formatMessage(q.a.featured)):g.a.createElement("span",null))},"",{title:g.a.createElement(m.a,{variant:"link",onClick:function(){return K(e)}},g.a.createElement(d.b,null)," ",n.formatMessage(q.a.topicAdminEdit))}]}]}));w(e.asMutable())}}),[U,n]),g.a.createElement(g.a.Fragment,null,A&&g.a.createElement(_,{isModalOpen:A,handleModalToggle:P,topic:D}),g.a.createElement(p.PageHeader,null,g.a.createElement(f.a,{headingLevel:"h3",size:"2xl",className:"titlePaddingOverride"},n.formatMessage(q.a.topicAdminTitle))),g.a.createElement(p.Main,null,g.a.createElement(g.a.Fragment,null,g.a.createElement(p.PrimaryToolbar,{className:"toolbar-padding-override"},g.a.createElement(m.a,{variant:"primary",onClick:function(e){return K(e)}},n.formatMessage(q.a.topicAdminCreate))),"fulfilled"===t&&g.a.createElement(h.b,{"aria-label":"topics-admin-table",sortBy:C,onSort:H,cells:o,rows:x},g.a.createElement(y.a,null),g.a.createElement(O.a,null)),"pending"===t&&g.a.createElement(X.a,null),"failed"===t&&g.a.createElement(J.a,{message:n.formatMessage(q.a.systemTableFetchError)}),g.a.createElement(p.TableToolbar,null))))};Z.propTypes={fetchTopicsAdmin:R.a.func,topicsFetchStatus:R.a.string,topics:R.a.array,addNotification:R.a.func,history:R.a.object,intl:R.a.any};t.default=Object(z.c)(W()(Object(U.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({topics:e.AdvisorStore.topics,topicsFetchStatus:e.AdvisorStore.topicsFetchStatus},t)}),(function(e){return{fetchTopicsAdmin:function(){return e(o.k())},addNotification:function(t){return e(Object(B.addNotification)(t))}}}))(Z)))},473:function(e,t,a){"use strict";var r=a(2),n=a.n(r),i=a(289),c=a(290),o=a(478);t.a=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,null,n.a.createElement(c.a,null,n.a.createElement(o.a,null))))}},474:function(e,t,a){"use strict";var r=a(2),n=a.n(r),i=a(298),c=a(300),o=a(160),l=a(299),s=a(1),u=a.n(s),d=a(244),m=function(e){var t=e.className,a=e.children,r=e.icon,s=e.iconClass,u=e.iconStyle,d=e.size,m=e.text,f=e.title,p=e.variant;return n.a.createElement(i.a,{className:t,variant:p},"none"!==r&&n.a.createElement(c.a,{className:s,style:u,icon:r,size:d}),n.a.createElement(o.a,{headingLevel:"h5",size:"lg"},f),n.a.createElement(l.a,{style:{marginBottom:"16px"}},m),a)};m.propTypes={children:u.a.any,icon:u.a.any,iconClass:u.a.any,iconStyle:u.a.any,size:u.a.string,text:u.a.any,title:u.a.string,variant:u.a.any,className:u.a.string},m.defaultProps={icon:d.b,title:"",variant:i.b.full,size:"md"},t.a=m},478:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(2),n=function(){return(n=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};var i=function(e){var t=e.animate,a=e.backgroundColor,i=e.backgroundOpacity,c=e.baseUrl,o=e.children,l=e.foregroundColor,s=e.foregroundOpacity,u=e.gradientRatio,d=e.uniqueKey,m=e.interval,f=e.rtl,p=e.speed,b=e.style,g=e.title,E=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),h=d||Math.random().toString(36).substring(6),y=h+"-diff",O=h+"-animated-diff",v=h+"-aria",j=f?{transform:"scaleX(-1)"}:null,x="0; "+m+"; 1",w=p+"s";return Object(r.createElement)("svg",n({"aria-labelledby":v,role:"img",style:n(n({},b),j)},E),g?Object(r.createElement)("title",{id:v},g):null,Object(r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+c+"#"+y+")",style:{fill:"url("+c+"#"+O+")"}}),Object(r.createElement)("defs",{role:"presentation"},Object(r.createElement)("clipPath",{id:y},o),Object(r.createElement)("linearGradient",{id:O},Object(r.createElement)("stop",{offset:"0%",stopColor:a,stopOpacity:i},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:x,dur:w,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"50%",stopColor:l,stopOpacity:s},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:x,dur:w,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"100%",stopColor:a,stopOpacity:i},t&&Object(r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:x,dur:w,repeatCount:"indefinite"})))))};i.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var c=function(e){return e.children?Object(r.createElement)(i,n({},e)):Object(r.createElement)(o,n({},e))},o=function(e){return Object(r.createElement)(c,n({viewBox:"0 0 476 124"},e),Object(r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))},l=function(e){return Object(r.createElement)(c,n({viewBox:"0 0 400 110"},e),Object(r.createElement)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"10"}),Object(r.createElement)("rect",{x:"20",y:"20",rx:"3",ry:"3",width:"220",height:"10"}),Object(r.createElement)("rect",{x:"20",y:"40",rx:"3",ry:"3",width:"170",height:"10"}),Object(r.createElement)("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"250",height:"10"}),Object(r.createElement)("rect",{x:"20",y:"80",rx:"3",ry:"3",width:"200",height:"10"}),Object(r.createElement)("rect",{x:"20",y:"100",rx:"3",ry:"3",width:"80",height:"10"}))}},482:function(e,t,a){"use strict";var r=a(2),n=a.n(r),i=a(289),c=a(292),o=a(290),l=a(245),s=a(1),u=a.n(s),d=function(e){var t=e.message;return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{className:"ins-empty-rule-cards"},n.a.createElement(c.a,null,n.a.createElement(l.b,{size:"lg"})),n.a.createElement(o.a,null,t)))};t.a=d,d.propTypes={message:u.a.string}},562:function(e,t,a){(e.exports=a(6)(!1)).push([e.i,".toolbar-padding-override{padding-left:0px}.success{color:var(--pf-global--success-color--100)}.ban{color:var(--pf-global--Color--200)}\n",""])},563:function(e,t,a){(e.exports=a(6)(!1)).push([e.i,".text-area-override{max-width:30em;min-height:8em;max-height:12em}.text-input-override{width:22em;display:inline}.radio-override{padding-left:5px}.checkbox-override{padding-left:5px}.split-override{width:100%}.modal-width-override{width:60%}\n",""])},956:function(e,t,a){var r=a(562);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},i=a(7)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(562,(function(){var t=a(562);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)})),e.hot.dispose((function(){i()}))},957:function(e,t,a){var r=a(563);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},i=a(7)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(563,(function(){var t=a(563);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)})),e.hot.dispose((function(){i()}))}}]);
//# sourceMappingURL=TopicAdmin.js.map