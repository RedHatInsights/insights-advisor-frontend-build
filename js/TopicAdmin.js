(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1203:function(e,t,a){(t=a(6)(!1)).push([e.i,".toolbar-padding-override{padding-left:0px}.success{color:var(--pf-global--success-color--100)}.ban{color:var(--pf-global--Color--200)}\n",""]),e.exports=t},1204:function(e,t,a){(t=a(6)(!1)).push([e.i,".text-area-override{max-width:30em;min-height:8em;max-height:12em}.text-input-override{width:22em;display:inline}.radio-override{padding-left:5px}.checkbox-override{padding-left:5px}.split-override{width:100%}.modal-width-override{width:60%}\n",""]),e.exports=t},1612:function(e,t,a){var n=a(1203);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(7)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(1203,(function(){var t=a(1203);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1613:function(e,t,a){var n=a(1204);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(7)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(1204,(function(){var t=a(1204);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1616:function(e,t,a){"use strict";a.r(t);var n=a(105),r=a.n(n),o=a(226),i=a.n(o),c=(a(1612),a(757)),l=a(0),s=a.n(l),u=a(257),d=a(30),m=a(296),f=a(295),p=a(146),g=a.n(p),b=a(227),E=a.n(b),v=(a(1613),a(714)),h=a(756),y=a(9),x=a(33),O=a(332),S=a(711),M=a(712),j=a(706),T=a(1),C=a.n(T),k=a(347),w=a(740),A=a(232),N=a(51),F=a(91),I=a(20),P=a(12),B=function(e){var t=e.handleModalToggle,a=e.intl,n=e.isModalOpen,r=e.topic,o=e.addNotification,c=e.fetchTopicsAdmin,u=Object(l.useState)(r.name||""),d=i()(u,2),m=d[0],f=d[1],p=Object(l.useState)(r.description||""),b=i()(p,2),T=b[0],C=b[1],N=Object(l.useState)(r.tag||""),F=i()(N,2),I=F[0],B=F[1],L=Object(l.useState)(r.enabled||!1),D=i()(L,2),R=D[0],G=D[1],z=Object(l.useState)(r.featured||!1),H=i()(z,2),U=H[0],q=H[1],_=Object(l.useState)(r.slug||void 0),J=i()(_,2),V=J[0],K=J[1],Q=function(){var e=E()(g.a.mark((function e(n){var l,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=n.type,e.prev=1,s={name:m,slug:V,tag:I,description:T,enabled:R,featured:U},"DELETE"!==l){e.next=8;break}return e.next=6,h.a.delete("".concat(y.BASE_URL,"/topic/").concat(V));case 6:e.next=15;break;case 8:if(!r.slug){e.next=13;break}return e.next=11,h.a.put("".concat(y.BASE_URL,"/topic/").concat(V,"/"),s);case 11:e.next=15;break;case 13:return e.next=15,h.a.post("".concat(y.BASE_URL,"/topic/"),{},s);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),o({variant:"danger",dismissable:!0,title:a.formatMessage(P.a.error),description:Object.entries(e.t0.response.data).map((function(e){var t=i()(e,2),a=t[0],n=t[1];return"".concat(a.toUpperCase(),":").concat(n," ")}))});case 20:return e.prev=20,t(!1),c(),e.finish(20);case 24:case"end":return e.stop()}}),e,null,[[1,17,20,24]])})));return function(t){return e.apply(this,arguments)}}(),W=function(e){r.slug?f(e):(f(e),K(e.replace(/\s/g,"").toLowerCase()))},X=s.a.createElement(v.Split,{gutter:"sm",className:"split-override"},s.a.createElement(v.SplitItem,null,s.a.createElement(x.Button,{key:"confirm",variant:"primary",onClick:function(){return Q({type:"POST/PUT"})}},a.formatMessage(P.a.save))),s.a.createElement(v.SplitItem,null,s.a.createElement(x.Button,{key:"cancel",variant:"secondary",onClick:function(){return t(!1)}},a.formatMessage(P.a.cancel))),s.a.createElement(v.SplitItem,{isFilled:!0}),s.a.createElement(v.SplitItem,null,s.a.createElement(x.Button,{key:"delete",variant:"danger",isDisabled:!r.slug,onClick:function(){return Q({type:"DELETE"})}},a.formatMessage(P.a.deleteTopic))));return s.a.createElement(j.Modal,{title:a.formatMessage(P.a.topicAdminTitle),isOpen:n,onClose:function(){return t(!1)},footer:X,isFooterLeftAligned:!0,className:"modal-width-override"},s.a.createElement(S.Form,null,s.a.createElement(M.FormGroup,{label:a.formatMessage(P.a.name),fieldId:"topic-form-name",className:"text-input-override"},s.a.createElement(A.TextInput,{value:m,isRequired:!0,type:"text",id:"topic-form-name",name:"topic-form-name",onChange:function(e){return W(e)}})),s.a.createElement(M.FormGroup,{label:a.formatMessage(P.a.topicAddEditDescription),fieldId:"topic-form-description",helperText:a.formatMessage(P.a.topicAddEditDescriptionHelperText),className:"text-area-override"},s.a.createElement(w.TextArea,{value:T,isRequired:!0,name:"topic-form-description",id:"topic-form-description",onChange:function(e){return C(e)}})),s.a.createElement(M.FormGroup,{isInline:!0,fieldId:"topic-form-labels"},s.a.createElement(M.FormGroup,{label:a.formatMessage(P.a.tag),fieldId:"topic-form-tag",helperText:a.formatMessage(P.a.topicAddEditTagHelperText),className:"text-input-override"},s.a.createElement(A.TextInput,{value:I.replace(/\s/g,"").toLowerCase(),isRequired:!0,type:"text",id:"topic-form-tag",name:"topic-form-tag",onChange:function(e){return B(e.replace(/\s/g,"").toLowerCase())}})),s.a.createElement(M.FormGroup,{label:a.formatMessage(P.a.topicSlug),fieldId:"topic-form-name-2",helperText:"",className:"text-input-override"},s.a.createElement(A.TextInput,{value:V||m.replace(/\s/g,"").toLowerCase(),isDisabled:r.slug,type:"text",id:"topic-form-name-2",name:"topic-form-name-2",onChange:function(e){return W(e)}}))),s.a.createElement(M.FormGroup,{label:a.formatMessage(P.a.status),fieldId:"topic-form-enabled"},s.a.createElement(k.Radio,{isChecked:!R,id:"disabled",label:a.formatMessage(P.a.topicAddEditDisabled),onChange:function(){return G(!R)},className:"radio-override"}),s.a.createElement(k.Radio,{isChecked:R,id:"enabled",label:a.formatMessage(P.a.topicAddEditEnabled),onChange:function(){return G(!R)},className:"radio-override"})),s.a.createElement(M.FormGroup,{label:a.formatMessage(P.a.featured),fieldId:"topic-form-featured"},s.a.createElement(O.Checkbox,{isChecked:U,label:a.formatMessage(P.a.topicAddEditFeatureBox),id:"checkbox-featured",name:"checkbox-featured","aria-label":"update-featured",onChange:function(){return q(!U)},className:"checkbox-override"}))))};B.propTypes={handleModalToggle:C.a.func,isModalOpen:C.a.bool,topic:C.a.object,intl:C.a.any,addNotification:C.a.func,fetchTopicsAdmin:C.a.func};var L=Object(I.c)(Object(F.connect)(null,(function(e){return{addNotification:function(t){return e(Object(N.addNotification)(t))},fetchTopicsAdmin:function(){return e(Object(c.i)())}}}))(B)),D=a(741),R=a.n(D),G=a(234),z=a.n(G),H=a(742),U=a.n(H),q=a(840),_=a(17),J=a.n(_),V=a(790),K=a(707),Q=a(826),W=a(708),X=a(331),Y=a(723),Z=a.n(Y),$=a(724),ee=a(109),te=a(228),ae=a.n(te);function ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var re=function(e){var t=e.topicsFetchStatus,a=e.fetchTopicsAdmin,n=e.topics,r=e.intl,o=Object(l.useState)([{title:r.formatMessage(P.a.title),transforms:[u.a]},{title:r.formatMessage(P.a.tag),transforms:[u.a]},{title:r.formatMessage(P.a.topicSlug),transforms:[u.a]},{title:r.formatMessage(P.a.status),transforms:[u.a]},{title:r.formatMessage(P.a.featured),transforms:[u.a]},"",""]),c=i()(o,1)[0],p=Object(l.useState)([]),g=i()(p,2),b=g[0],E=g[1],v=Object(l.useState)({}),h=i()(v,2),y=h[0],O=h[1],S=Object(l.useState)(!1),M=i()(S,2),j=M[0],T=M[1],C=Object(l.useState)({}),k=i()(C,2),w=k[0],A=k[1],N=Object(l.useState)([]),F=i()(N,2),I=F[0],B=F[1],D=Object(l.useCallback)((function(e,t,a){var n={0:"name",1:"tag",2:"slug",3:"enabled",4:"featured"}[t];O({index:t,direction:a}),B(J.a.from(I.asMutable().sort((function(e,t){return"asc"===a?"enabled"===n||"featured"===n?e[n]>t[n]?-1:1:e[n]>t[n]?1:-1:"enabled"===n||"featured"===n?e[n]>t[n]?1:-1:e[n]>t[n]?-1:1}))))}),[O,B,I]),G=function(e){e?(A(e),T(!0)):T(!0)};return Object(l.useEffect)((function(){B(n)}),[n]),Object(l.useEffect)((function(){a()}),[a]),Object(l.useEffect)((function(){if(0===I.length)E([{cells:[{title:s.a.createElement(Q.a,{icon:"none",title:"",text:""}),props:{colSpan:7}}]}]);else{var e=I.flatMap((function(e,t){return[{isOpen:!1,rule:e,cells:[{title:s.a.createElement("span",{key:t}," ",e.name)},{title:s.a.createElement("span",{key:t}," ",e.tag)},{title:s.a.createElement("span",{key:t}," ",e.slug)},{title:s.a.createElement("span",null,e.enabled?s.a.createElement("span",null,s.a.createElement(z.a,{className:"success"})," ",r.formatMessage(P.a.enabled)):s.a.createElement("span",null,s.a.createElement(R.a,{className:"ban"})," ",r.formatMessage(P.a.disabled)))},{title:s.a.createElement("span",null,e.featured?s.a.createElement("span",null,s.a.createElement(Z.a,null)," ",r.formatMessage(P.a.featured)):s.a.createElement("span",null))},"",{title:s.a.createElement(x.Button,{variant:"link",onClick:function(){return G(e)}},s.a.createElement(U.a,null)," ",r.formatMessage(P.a.topicAdminEdit))}]}]}));E(e.asMutable())}}),[I,r]),s.a.createElement(s.a.Fragment,null,j&&s.a.createElement(L,{isModalOpen:j,handleModalToggle:T,topic:w}),s.a.createElement(W.PageHeader,null,s.a.createElement(ee.Title,{headingLevel:"h3",size:"2xl",className:"titlePaddingOverride"},r.formatMessage(P.a.topicAdminTitle))),s.a.createElement(K.Main,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(X.PrimaryToolbar,{className:"toolbar-padding-override"},s.a.createElement(x.Button,{variant:"primary",onClick:function(e){return G(e)}},r.formatMessage(P.a.topicAdminCreate))),"fulfilled"===t&&s.a.createElement(d.b,{"aria-label":"topics-admin-table",sortBy:y,onSort:D,cells:c,rows:b},s.a.createElement(m.a,null),s.a.createElement(f.a,null)),"pending"===t&&s.a.createElement(V.a,null),"failed"===t&&s.a.createElement(q.a,{message:r.formatMessage(P.a.systemTableFetchError)}),s.a.createElement($.TableToolbar,null))))};re.propTypes={fetchTopicsAdmin:C.a.func,topicsFetchStatus:C.a.string,topics:C.a.array,addNotification:C.a.func,history:C.a.object,intl:C.a.any};t.default=Object(I.c)(ae()(Object(F.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ne(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({topics:e.AdvisorStore.topics,topicsFetchStatus:e.AdvisorStore.topicsFetchStatus},t)}),(function(e){return{fetchTopicsAdmin:function(){return e(c.i())},addNotification:function(t){return e(Object(N.addNotification)(t))}}}))(re)))},756:function(e,t,a){"use strict";var n=a(878),r=a.n(n);t.a={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.a.get(e,{headers:t,params:a})},put:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.a.put(e,t,{headers:a})},post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.a.post(e,a,{headers:t})},delete:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.a.delete(e,t,{headers:a})}}},790:function(e,t,a){"use strict";var n=a(107),r=a(108),o=a(229),i=a(0),c=a.n(i);t.a=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(n.Card,null,c.a.createElement(r.CardBody,null,c.a.createElement(o.List,null))))}},826:function(e,t,a){"use strict";var n=a(230),r=a(327),o=a.n(r),i=a(231),c=a(328),l=a(1),s=a.n(l),u=a(0),d=a.n(u),m=a(109),f=function(e){var t=e.className,a=e.children,r=e.icon,o=e.iconClass,l=e.iconStyle,s=e.size,u=e.text,f=e.title,p=e.variant;return d.a.createElement(n.EmptyState,{className:t,variant:p},"none"!==r&&d.a.createElement(c.EmptyStateIcon,{className:o,style:l,icon:r,size:s}),d.a.createElement(m.Title,{headingLevel:"h5",size:"lg"},f),d.a.createElement(i.EmptyStateBody,{style:{marginBottom:"16px"}},u),a)};f.propTypes={children:s.a.any,icon:s.a.any,iconClass:s.a.any,iconStyle:s.a.any,size:s.a.string,text:s.a.any,title:s.a.string,variant:s.a.any,className:s.a.string},f.defaultProps={icon:o.a,title:"",variant:n.EmptyStateVariant.full,size:"md"},t.a=f}}]);
//# sourceMappingURL=TopicAdmin.js.map