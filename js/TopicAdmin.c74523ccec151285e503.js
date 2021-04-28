(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[1694],{80455:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>G});var n=a(28481),r=(a(46978),a(57149)),o=a(93264),i=a.n(o),l=a(59845),s=a(77121),c=a(92137),d=a(87757),u=a.n(d),m=(a(26964),a(92506)),f=a(71094),p=a(59303),g=a(6202),v=a(32752),E=a(4853),A=a(23811),h=a(78826),b=a(45697),C=a.n(b),Z=a(9568),x=a(85806),M=a(12282),k=a(71355),S=a(74806),T=a(30893),y=function(e){var t=e.handleModalToggle,a=e.intl,r=e.isModalOpen,l=e.topic,s=e.addNotification,d=e.fetchTopicsAdmin,b=(0,o.useState)(l.name||""),C=(0,n.Z)(b,2),k=C[0],S=C[1],y=(0,o.useState)(l.description||""),B=(0,n.Z)(y,2),w=B[0],I=B[1],N=(0,o.useState)(l.tag||""),D=(0,n.Z)(N,2),L=D[0],O=D[1],P=(0,o.useState)(l.enabled||!1),U=(0,n.Z)(P,2),F=U[0],R=U[1],_=(0,o.useState)(l.featured||!1),H=(0,n.Z)(_,2),j=H[0],q=H[1],K=(0,o.useState)(l.slug||void 0),G=(0,n.Z)(K,2),Q=G[0],Y=G[1],z=function(){var e=(0,c.Z)(u().mark((function e(r){var o,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=r.type,e.prev=1,i={name:k,slug:Q,tag:L,description:w,enabled:F,featured:j},"DELETE"!==o){e.next=8;break}return e.next=6,f.Z.delete("".concat(p.BASE_URL,"/topic/").concat(Q));case 6:e.next=15;break;case 8:if(!l.slug){e.next=13;break}return e.next=11,f.Z.put("".concat(p.BASE_URL,"/topic/").concat(Q,"/"),i);case 11:e.next=15;break;case 13:return e.next=15,f.Z.post("".concat(p.BASE_URL,"/topic/"),{},i);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),s({variant:"danger",dismissable:!0,title:a.formatMessage(T.Z.error),description:Object.entries(e.t0.response.data).map((function(e){var t=(0,n.Z)(e,2),a=t[0],r=t[1];return"".concat(a.toUpperCase(),":").concat(r," ")}))});case 20:return e.prev=20,t(!1),d(),e.finish(20);case 24:case"end":return e.stop()}}),e,null,[[1,17,20,24]])})));return function(t){return e.apply(this,arguments)}}(),J=function(e){l.slug?S(e):(S(e),Y(e.replace(/\s/g,"").toLowerCase()))},X=i().createElement(m.Split,{className:"split-override",hasGutter:!0},i().createElement(m.SplitItem,null,i().createElement(g.Button,{key:"confirm",variant:"primary",onClick:function(){return z({type:"POST/PUT"})},ouiaId:"confirm"},a.formatMessage(T.Z.save))),i().createElement(m.SplitItem,null,i().createElement(g.Button,{key:"cancel",variant:"secondary",onClick:function(){return t(!1)},ouiaId:"cancel"},a.formatMessage(T.Z.cancel))),i().createElement(m.SplitItem,{isFilled:!0}),i().createElement(m.SplitItem,null,i().createElement(g.Button,{key:"delete",ouiaId:"delete",variant:"danger",isDisabled:!l.slug,onClick:function(){return z({type:"DELETE"})}},a.formatMessage(T.Z.deleteTopic))));return i().createElement(h.u_,{title:a.formatMessage(T.Z.topicAdminTitle),isOpen:r,onClose:function(){return t(!1)},footer:X,className:"modal-width-override"},i().createElement(E.l,null,i().createElement(A.c,{label:a.formatMessage(T.Z.name),fieldId:"topic-form-name",className:"text-input-override"},i().createElement(M.oi,{value:k,isRequired:!0,type:"text",id:"topic-form-name",name:"topic-form-name",onChange:function(e){return J(e)}})),i().createElement(A.c,{label:a.formatMessage(T.Z.topicAddEditDescription),fieldId:"topic-form-description",helperText:a.formatMessage(T.Z.topicAddEditDescriptionHelperText),className:"text-area-override"},i().createElement(x.Kx,{value:w,isRequired:!0,name:"topic-form-description",id:"topic-form-description",onChange:function(e){return I(e)}})),i().createElement(A.c,{isInline:!0,fieldId:"topic-form-labels"},i().createElement(A.c,{label:a.formatMessage(T.Z.tag),fieldId:"topic-form-tag",helperText:a.formatMessage(T.Z.topicAddEditTagHelperText),className:"text-input-override"},i().createElement(M.oi,{value:L.replace(/\s/g,"").toLowerCase(),isRequired:!0,type:"text",id:"topic-form-tag",name:"topic-form-tag",onChange:function(e){return O(e.replace(/\s/g,"").toLowerCase())}})),i().createElement(A.c,{label:a.formatMessage(T.Z.topicSlug),fieldId:"topic-form-name-2",helperText:"",className:"text-input-override"},i().createElement(M.oi,{value:Q||k.replace(/\s/g,"").toLowerCase(),isDisabled:l.slug,type:"text",id:"topic-form-name-2",name:"topic-form-name-2",onChange:function(e){return J(e)}}))),i().createElement(A.c,{label:a.formatMessage(T.Z.status),fieldId:"topic-form-enabled"},i().createElement(Z.Y,{isChecked:!F,id:"disabled",label:a.formatMessage(T.Z.topicAddEditDisabled),onChange:function(){return R(!F)},className:"radio-override"}),i().createElement(Z.Y,{isChecked:F,id:"enabled",label:a.formatMessage(T.Z.topicAddEditEnabled),onChange:function(){return R(!F)},className:"radio-override"})),i().createElement(A.c,{label:a.formatMessage(T.Z.featured),fieldId:"topic-form-featured"},i().createElement(v.X,{isChecked:j,label:a.formatMessage(T.Z.topicAddEditFeatureBox),id:"checkbox-featured",name:"checkbox-featured","aria-label":"update-featured",onChange:function(){return q(!j)},className:"checkbox-override"}))))};y.propTypes={handleModalToggle:C().func,isModalOpen:C().bool,topic:C().object,intl:C().any,addNotification:C().func,fetchTopicsAdmin:C().func};const B=(0,S.ZP)((0,s.connect)(null,(function(e){return{addNotification:function(t){return e((0,k.wN)(t))},fetchTopicsAdmin:function(){return e((0,r.QK)())}}}))(y));var w=a(80516),I=a(35451),N=a(4145),D=a(76341),L=a(33042),O=a.n(L),P=a(46891),U=a(86350),F=a(34702),R=a(48716),_=a(57277),H=a(47668),j=a(32875),q=a(34348),K=a(86896);const G=function(){var e=(0,K.Z)(),t=(0,s.useDispatch)(),a=(0,s.useSelector)((function(e){return e.AdvisorStore.topics})),c=(0,s.useSelector)((function(e){return e.AdvisorStore.topicsFetchStatus})),d=(0,o.useState)([{title:e.formatMessage(T.Z.title),transforms:[l.sortable]},{title:e.formatMessage(T.Z.tag),transforms:[l.sortable]},{title:e.formatMessage(T.Z.topicSlug),transforms:[l.sortable]},{title:e.formatMessage(T.Z.status),transforms:[l.sortable]},{title:e.formatMessage(T.Z.featured),transforms:[l.sortable]},"",""]),u=(0,n.Z)(d,1)[0],m=(0,o.useState)([]),f=(0,n.Z)(m,2),p=f[0],v=f[1],E=(0,o.useState)({}),A=(0,n.Z)(E,2),h=A[0],b=A[1],C=(0,o.useState)(!1),Z=(0,n.Z)(C,2),x=Z[0],M=Z[1],k=(0,o.useState)({}),S=(0,n.Z)(k,2),y=S[0],L=S[1],G=(0,o.useState)([]),Q=(0,n.Z)(G,2),Y=Q[0],z=Q[1],J=(0,o.useCallback)((function(e,t,a){var n={0:"name",1:"tag",2:"slug",3:"enabled",4:"featured"}[t];b({index:t,direction:a}),z(O().from(Y.asMutable().sort((function(e,t){return"asc"===a?"enabled"===n||"featured"===n?e[n]>t[n]?-1:1:e[n]>t[n]?1:-1:"enabled"===n||"featured"===n?e[n]>t[n]?1:-1:e[n]>t[n]?-1:1}))))}),[b,z,Y]),X=function(e){e?(L(e),M(!0)):M(!0)};return(0,o.useEffect)((function(){z(a)}),[a]),(0,o.useEffect)((function(){t(r.QK())}),[t]),(0,o.useEffect)((function(){if(0===Y.length)v([{cells:[{title:i().createElement(F.Z,{icon:"none",title:"",text:""}),props:{colSpan:7}}]}]);else{var t=Y.flatMap((function(t,a){return[{isOpen:!1,rule:t,cells:[{title:i().createElement("span",{key:a}," ",t.name)},{title:i().createElement("span",{key:a}," ",t.tag)},{title:i().createElement("span",{key:a}," ",t.slug)},{title:i().createElement("span",null,t.enabled?i().createElement("span",null,i().createElement(I.default,{className:"success"})," ",e.formatMessage(T.Z.enabled)):i().createElement("span",null,i().createElement(w.ZP,{className:"ban"})," ",e.formatMessage(T.Z.disabled)))},{title:i().createElement("span",null,t.featured?i().createElement("span",null,i().createElement(H.ZP,null)," ",e.formatMessage(T.Z.featured)):i().createElement("span",null))},"",{title:i().createElement(g.Button,{ouiaId:"hide",variant:"link",onClick:function(){return X(t)}},i().createElement(N.ZP,null)," ",e.formatMessage(T.Z.topicAdminEdit))}]}]}));v(t.asMutable())}}),[Y,e]),i().createElement(i().Fragment,null,x&&i().createElement(B,{isModalOpen:x,handleModalToggle:M,topic:y}),i().createElement(R.Z,null,i().createElement(q.Dx,{headingLevel:"h3",size:"2xl",className:"titlePaddingOverride"},e.formatMessage(T.Z.topicAdminTitle))),i().createElement(U.Z,null,i().createElement(i().Fragment,null,i().createElement(_.Z,{className:"toolbar-padding-override"},i().createElement(g.Button,{variant:"primary",ouiaId:"adminCreate",onClick:function(e){return X(e)}},e.formatMessage(T.Z.topicAdminCreate))),"fulfilled"===c&&i().createElement(l.Table,{ouiaId:"adminTable","aria-label":"topics-admin-table",sortBy:h,onSort:J,cells:u,rows:p,isStickyHeader:!0},i().createElement(l.TableHeader,null),i().createElement(l.TableBody,null)),"pending"===c&&i().createElement(P.Z,null),"failed"===c&&i().createElement(D.Z,{message:e.formatMessage(T.Z.systemTableFetchError)}),i().createElement(j.Z,null))))}},43622:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var n=a(94015),r=a.n(n),o=a(23645),i=a.n(o)()(r());i.push([e.id,".advisor .text-area-override{max-width:30em;min-height:8em;max-height:12em}.advisor .text-input-override{width:22em;display:inline}.advisor .radio-override{padding-left:5px}.advisor .checkbox-override{padding-left:5px}.advisor .split-override{width:100%}.advisor .modal-width-override{width:60%}\n","",{version:3,sources:["webpack://./src/PresentationalComponents/Modals/_AddEditTopic.scss"],names:[],mappings:"AAAA,6BACoB,cAAc,CAAC,cAAc,CAAC,eAAe,CADjE,8BACuF,UAAU,CAAC,cAAc,CADhH,yBACiI,gBAAgB,CADjJ,4BACqK,gBAAgB,CADrL,yBACsM,UAAU,CADhN,+BACuO,SAAS",sourcesContent:[".advisor{\n.text-area-override{max-width:30em;min-height:8em;max-height:12em}.text-input-override{width:22em;display:inline}.radio-override{padding-left:5px}.checkbox-override{padding-left:5px}.split-override{width:100%}.modal-width-override{width:60%}\n\n}"],sourceRoot:""}]);const l=i},2982:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var n=a(94015),r=a.n(n),o=a(23645),i=a.n(o)()(r());i.push([e.id,".advisor .toolbar-padding-override{padding-left:0px}.advisor .success{color:var(--pf-global--success-color--100)}.advisor .ban{color:var(--pf-global--Color--200)}\n","",{version:3,sources:["webpack://./src/PresentationalComponents/TopicsAdminTable/_TopicsAdminTable.scss"],names:[],mappings:"AAAA,mCAC0B,gBAAgB,CAD1C,kBACoD,0CAA0C,CAD9F,cACoG,kCAAkC",sourcesContent:[".advisor{\n.toolbar-padding-override{padding-left:0px}.success{color:var(--pf-global--success-color--100)}.ban{color:var(--pf-global--Color--200)}\n\n}"],sourceRoot:""}]);const l=i},26964:(e,t,a)=>{"use strict";var n=a(93379),r=a.n(n),o=a(43622),i=r()(o.default,{insert:"head",singleton:!1});if(!o.default.locals||e.hot.invalidate){var l=o.default.locals;e.hot.accept(43622,(t=>{o=a(43622),function(e,t,a){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(l,o.default.locals)?(l=o.default.locals,i(o.default)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),o.default.locals},46978:(e,t,a)=>{"use strict";var n=a(93379),r=a.n(n),o=a(2982),i=r()(o.default,{insert:"head",singleton:!1});if(!o.default.locals||e.hot.invalidate){var l=o.default.locals;e.hot.accept(2982,(t=>{o=a(2982),function(e,t,a){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(l,o.default.locals)?(l=o.default.locals,i(o.default)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),o.default.locals}}]);
//# sourceMappingURL=../sourcemaps/TopicAdmin.4a10f0adeacb2dc059fd.js.map