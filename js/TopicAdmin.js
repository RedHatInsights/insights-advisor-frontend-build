(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1006:function(e,t,a){"use strict";var n=a(1121),r=a.n(n);t.a={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.a.get(e,{headers:t,params:a})},put:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.a.put(e,t,{headers:a})},post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.a.post(e,a,{headers:t})},delete:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.a.delete(e,t,{headers:a})}}},1030:function(e,t,a){"use strict";var n=a(272),r=a(273),o=a(428),i=a(0),c=a.n(i);t.a=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(n.Card,null,c.a.createElement(r.CardBody,null,c.a.createElement(o.List,null))))}},1068:function(e,t,a){"use strict";var n=a(430),r=a(557),o=a.n(r),i=a(431),c=a(558),l=a(8),s=a.n(l),u=a(0),d=a.n(u),m=a(274),p=function(e){var t=e.className,a=e.children,r=e.icon,o=e.iconClass,l=e.iconStyle,s=e.text,u=e.title,p=e.variant;return d.a.createElement(n.EmptyState,{className:t,variant:p},"none"!==r&&d.a.createElement(c.EmptyStateIcon,{className:o,style:l,icon:r}),d.a.createElement(m.Title,{headingLevel:"h5",size:"lg"},u),d.a.createElement(i.EmptyStateBody,{style:{marginBottom:"16px"}},s),a)};p.propTypes={children:s.a.any,icon:s.a.any,iconClass:s.a.any,iconStyle:s.a.any,text:s.a.any,title:s.a.string,variant:s.a.any,className:s.a.string},p.defaultProps={icon:o.a,title:"",variant:n.EmptyStateVariant.full},t.a=p},1074:function(e,t,a){"use strict";var n=a(272),r=a(273),o=a(432),i=a(961),c=a.n(i),l=a(0),s=a.n(l),u=a(8),d=a.n(u),m=function(e){var t=e.message;return s.a.createElement(s.a.Fragment,null,s.a.createElement(n.Card,{className:"ins-empty-rule-cards"},s.a.createElement(o.CardHeader,null,s.a.createElement(c.a,{size:"lg"})),s.a.createElement(r.CardBody,null,t)))};t.a=m,m.propTypes={message:d.a.string}},1453:function(e,t,a){(t=a(4)(!1)).push([e.i,".toolbar-padding-override{padding-left:0px}.success{color:var(--pf-global--success-color--100)}.ban{color:var(--pf-global--Color--200)}\n",""]),e.exports=t},1454:function(e,t,a){(t=a(4)(!1)).push([e.i,".text-area-override{max-width:30em;min-height:8em;max-height:12em}.text-input-override{width:22em;display:inline}.radio-override{padding-left:5px}.checkbox-override{padding-left:5px}.split-override{width:100%}.modal-width-override{width:60%}\n",""]),e.exports=t},1856:function(e,t,a){var n=a(1453);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(6)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(1453,(function(){var t=a(1453);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1857:function(e,t,a){var n=a(1454);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(6)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(1454,(function(){var t=a(1454);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1864:function(e,t,a){"use strict";a.r(t);var n=a(211),r=a.n(n),o=a(424),i=a.n(o),c=(a(1856),a(1009)),l=a(0),s=a.n(l),u=a(466),d=a(73),m=a(507),p=a(505),f=a(271),g=a.n(f),b=a(425),E=a.n(b),v=(a(1857),a(966)),h=a(1006),y=a(18),x=a(87),O=a(433),S=a(964),M=a(965),j=a(554),T=a(8),C=a.n(T),k=a(440),w=a(571),N=a(275),A=a(133),F=a(132),I=a(50),B=a(19),P=function(e){var t=e.handleModalToggle,a=e.intl,n=e.isModalOpen,r=e.topic,o=e.addNotification,c=e.fetchTopicsAdmin,u=Object(l.useState)(r.name||""),d=i()(u,2),m=d[0],p=d[1],f=Object(l.useState)(r.description||""),b=i()(f,2),T=b[0],C=b[1],A=Object(l.useState)(r.tag||""),F=i()(A,2),I=F[0],P=F[1],L=Object(l.useState)(r.enabled||!1),D=i()(L,2),R=D[0],G=D[1],H=Object(l.useState)(r.featured||!1),U=i()(H,2),q=U[0],z=U[1],_=Object(l.useState)(r.slug||void 0),J=i()(_,2),V=J[0],K=J[1],Q=function(){var e=E()(g.a.mark((function e(n){var l,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=n.type,e.prev=1,s={name:m,slug:V,tag:I,description:T,enabled:R,featured:q},"DELETE"!==l){e.next=8;break}return e.next=6,h.a.delete("".concat(y.BASE_URL,"/topic/").concat(V));case 6:e.next=15;break;case 8:if(!r.slug){e.next=13;break}return e.next=11,h.a.put("".concat(y.BASE_URL,"/topic/").concat(V,"/"),s);case 11:e.next=15;break;case 13:return e.next=15,h.a.post("".concat(y.BASE_URL,"/topic/"),{},s);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),o({variant:"danger",dismissable:!0,title:a.formatMessage(B.a.error),description:Object.entries(e.t0.response.data).map((function(e){var t=i()(e,2),a=t[0],n=t[1];return"".concat(a.toUpperCase(),":").concat(n," ")}))});case 20:return e.prev=20,t(!1),c(),e.finish(20);case 24:case"end":return e.stop()}}),e,null,[[1,17,20,24]])})));return function(t){return e.apply(this,arguments)}}(),W=function(e){r.slug?p(e):(p(e),K(e.replace(/\s/g,"").toLowerCase()))},X=s.a.createElement(v.Split,{className:"split-override",hasGutter:!0},s.a.createElement(v.SplitItem,null,s.a.createElement(x.Button,{key:"confirm",variant:"primary",onClick:function(){return Q({type:"POST/PUT"})}},a.formatMessage(B.a.save))),s.a.createElement(v.SplitItem,null,s.a.createElement(x.Button,{key:"cancel",variant:"secondary",onClick:function(){return t(!1)}},a.formatMessage(B.a.cancel))),s.a.createElement(v.SplitItem,{isFilled:!0}),s.a.createElement(v.SplitItem,null,s.a.createElement(x.Button,{key:"delete",variant:"danger",isDisabled:!r.slug,onClick:function(){return Q({type:"DELETE"})}},a.formatMessage(B.a.deleteTopic))));return s.a.createElement(j.Modal,{title:a.formatMessage(B.a.topicAdminTitle),isOpen:n,onClose:function(){return t(!1)},footer:X,className:"modal-width-override"},s.a.createElement(S.Form,null,s.a.createElement(M.FormGroup,{label:a.formatMessage(B.a.name),fieldId:"topic-form-name",className:"text-input-override"},s.a.createElement(N.TextInput,{value:m,isRequired:!0,type:"text",id:"topic-form-name",name:"topic-form-name",onChange:function(e){return W(e)}})),s.a.createElement(M.FormGroup,{label:a.formatMessage(B.a.topicAddEditDescription),fieldId:"topic-form-description",helperText:a.formatMessage(B.a.topicAddEditDescriptionHelperText),className:"text-area-override"},s.a.createElement(w.TextArea,{value:T,isRequired:!0,name:"topic-form-description",id:"topic-form-description",onChange:function(e){return C(e)}})),s.a.createElement(M.FormGroup,{isInline:!0,fieldId:"topic-form-labels"},s.a.createElement(M.FormGroup,{label:a.formatMessage(B.a.tag),fieldId:"topic-form-tag",helperText:a.formatMessage(B.a.topicAddEditTagHelperText),className:"text-input-override"},s.a.createElement(N.TextInput,{value:I.replace(/\s/g,"").toLowerCase(),isRequired:!0,type:"text",id:"topic-form-tag",name:"topic-form-tag",onChange:function(e){return P(e.replace(/\s/g,"").toLowerCase())}})),s.a.createElement(M.FormGroup,{label:a.formatMessage(B.a.topicSlug),fieldId:"topic-form-name-2",helperText:"",className:"text-input-override"},s.a.createElement(N.TextInput,{value:V||m.replace(/\s/g,"").toLowerCase(),isDisabled:r.slug,type:"text",id:"topic-form-name-2",name:"topic-form-name-2",onChange:function(e){return W(e)}}))),s.a.createElement(M.FormGroup,{label:a.formatMessage(B.a.status),fieldId:"topic-form-enabled"},s.a.createElement(k.Radio,{isChecked:!R,id:"disabled",label:a.formatMessage(B.a.topicAddEditDisabled),onChange:function(){return G(!R)},className:"radio-override"}),s.a.createElement(k.Radio,{isChecked:R,id:"enabled",label:a.formatMessage(B.a.topicAddEditEnabled),onChange:function(){return G(!R)},className:"radio-override"})),s.a.createElement(M.FormGroup,{label:a.formatMessage(B.a.featured),fieldId:"topic-form-featured"},s.a.createElement(O.Checkbox,{isChecked:q,label:a.formatMessage(B.a.topicAddEditFeatureBox),id:"checkbox-featured",name:"checkbox-featured","aria-label":"update-featured",onChange:function(){return z(!q)},className:"checkbox-override"}))))};P.propTypes={handleModalToggle:C.a.func,isModalOpen:C.a.bool,topic:C.a.object,intl:C.a.any,addNotification:C.a.func,fetchTopicsAdmin:C.a.func};var L=Object(I.c)(Object(F.connect)(null,(function(e){return{addNotification:function(t){return e(Object(A.addNotification)(t))},fetchTopicsAdmin:function(){return e(Object(c.i)())}}}))(P)),D=a(988),R=a.n(D),G=a(103),H=a.n(G),U=a(989),q=a.n(U),z=a(1074),_=a(46),J=a.n(_),V=a(1030),K=a(959),Q=a(1068),W=a(960),X=a(561),Y=a(436),Z=a.n(Y),$=a(990),ee=a(274),te=a(426),ae=a.n(te);function ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var re=function(e){var t=e.topicsFetchStatus,a=e.fetchTopicsAdmin,n=e.topics,r=e.intl,o=Object(l.useState)([{title:r.formatMessage(B.a.title),transforms:[u.a]},{title:r.formatMessage(B.a.tag),transforms:[u.a]},{title:r.formatMessage(B.a.topicSlug),transforms:[u.a]},{title:r.formatMessage(B.a.status),transforms:[u.a]},{title:r.formatMessage(B.a.featured),transforms:[u.a]},"",""]),c=i()(o,1)[0],f=Object(l.useState)([]),g=i()(f,2),b=g[0],E=g[1],v=Object(l.useState)({}),h=i()(v,2),y=h[0],O=h[1],S=Object(l.useState)(!1),M=i()(S,2),j=M[0],T=M[1],C=Object(l.useState)({}),k=i()(C,2),w=k[0],N=k[1],A=Object(l.useState)([]),F=i()(A,2),I=F[0],P=F[1],D=Object(l.useCallback)((function(e,t,a){var n={0:"name",1:"tag",2:"slug",3:"enabled",4:"featured"}[t];O({index:t,direction:a}),P(J.a.from(I.asMutable().sort((function(e,t){return"asc"===a?"enabled"===n||"featured"===n?e[n]>t[n]?-1:1:e[n]>t[n]?1:-1:"enabled"===n||"featured"===n?e[n]>t[n]?1:-1:e[n]>t[n]?-1:1}))))}),[O,P,I]),G=function(e){e?(N(e),T(!0)):T(!0)};return Object(l.useEffect)((function(){P(n)}),[n]),Object(l.useEffect)((function(){a()}),[a]),Object(l.useEffect)((function(){if(0===I.length)E([{cells:[{title:s.a.createElement(Q.a,{icon:"none",title:"",text:""}),props:{colSpan:7}}]}]);else{var e=I.flatMap((function(e,t){return[{isOpen:!1,rule:e,cells:[{title:s.a.createElement("span",{key:t}," ",e.name)},{title:s.a.createElement("span",{key:t}," ",e.tag)},{title:s.a.createElement("span",{key:t}," ",e.slug)},{title:s.a.createElement("span",null,e.enabled?s.a.createElement("span",null,s.a.createElement(H.a,{className:"success"})," ",r.formatMessage(B.a.enabled)):s.a.createElement("span",null,s.a.createElement(R.a,{className:"ban"})," ",r.formatMessage(B.a.disabled)))},{title:s.a.createElement("span",null,e.featured?s.a.createElement("span",null,s.a.createElement(Z.a,null)," ",r.formatMessage(B.a.featured)):s.a.createElement("span",null))},"",{title:s.a.createElement(x.Button,{variant:"link",onClick:function(){return G(e)}},s.a.createElement(q.a,null)," ",r.formatMessage(B.a.topicAdminEdit))}]}]}));E(e.asMutable())}}),[I,r]),s.a.createElement(s.a.Fragment,null,j&&s.a.createElement(L,{isModalOpen:j,handleModalToggle:T,topic:w}),s.a.createElement(W.PageHeader,null,s.a.createElement(ee.Title,{headingLevel:"h3",size:"2xl",className:"titlePaddingOverride"},r.formatMessage(B.a.topicAdminTitle))),s.a.createElement(K.Main,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(X.PrimaryToolbar,{className:"toolbar-padding-override"},s.a.createElement(x.Button,{variant:"primary",onClick:function(e){return G(e)}},r.formatMessage(B.a.topicAdminCreate))),"fulfilled"===t&&s.a.createElement(d.b,{"aria-label":"topics-admin-table",sortBy:y,onSort:D,cells:c,rows:b},s.a.createElement(m.a,null),s.a.createElement(p.a,null)),"pending"===t&&s.a.createElement(V.a,null),"failed"===t&&s.a.createElement(z.a,{message:r.formatMessage(B.a.systemTableFetchError)}),s.a.createElement($.TableToolbar,null))))};re.propTypes={fetchTopicsAdmin:C.a.func,topicsFetchStatus:C.a.string,topics:C.a.array,addNotification:C.a.func,history:C.a.object,intl:C.a.any};t.default=Object(I.c)(ae()(Object(F.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ne(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({topics:e.AdvisorStore.topics,topicsFetchStatus:e.AdvisorStore.topicsFetchStatus},t)}),(function(e){return{fetchTopicsAdmin:function(){return e(c.i())},addNotification:function(t){return e(Object(A.addNotification)(t))}}}))(re)))}}]);
//# sourceMappingURL=TopicAdmin.js.map