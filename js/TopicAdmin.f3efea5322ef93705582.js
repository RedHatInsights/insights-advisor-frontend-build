(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[1694],{80455:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Q});var n=a(28481),r=(a(46978),a(57149)),l=a(93264),i=a.n(l),o=a(88678),s=a(88931),c=a(92137),d=a(87757),u=a.n(d),f=(a(26964),a(92506)),m=a(71094),p=a(59303),g=a(6202),E=a(32752),v=a(4853),b=a(23811),h=a(78826),Z=a(45697),x=a.n(Z),M=a(9568),k=a(85806),S=a(12282),C=a(71355),T=a(74806),y=a(30893),A=function(e){var t=e.handleModalToggle,a=e.intl,r=e.isModalOpen,o=e.topic,s=e.addNotification,d=e.fetchTopicsAdmin,Z=(0,l.useState)(o.name||""),x=(0,n.Z)(Z,2),C=x[0],T=x[1],A=(0,l.useState)(o.description||""),I=(0,n.Z)(A,2),N=I[0],w=I[1],B=(0,l.useState)(o.tag||""),L=(0,n.Z)(B,2),D=L[0],O=L[1],P=(0,l.useState)(o.enabled||!1),F=(0,n.Z)(P,2),R=F[0],_=F[1],U=(0,l.useState)(o.featured||!1),H=(0,n.Z)(U,2),q=H[0],K=H[1],j=(0,l.useState)(o.slug||void 0),Q=(0,n.Z)(j,2),Y=Q[0],z=Q[1],G=function(){var e=(0,c.Z)(u().mark((function e(r){var l,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=r.type,e.prev=1,i={name:C,slug:Y,tag:D,description:N,enabled:R,featured:q},"DELETE"!==l){e.next=8;break}return e.next=6,m.Z.delete("".concat(p.BASE_URL,"/topic/").concat(Y));case 6:e.next=15;break;case 8:if(!o.slug){e.next=13;break}return e.next=11,m.Z.put("".concat(p.BASE_URL,"/topic/").concat(Y,"/"),i);case 11:e.next=15;break;case 13:return e.next=15,m.Z.post("".concat(p.BASE_URL,"/topic/"),{},i);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),s({variant:"danger",dismissable:!0,title:a.formatMessage(y.Z.error),description:Object.entries(e.t0.response.data).map((function(e){var t=(0,n.Z)(e,2),a=t[0],r=t[1];return"".concat(a.toUpperCase(),":").concat(r," ")}))});case 20:return e.prev=20,t(!1),d(),e.finish(20);case 24:case"end":return e.stop()}}),e,null,[[1,17,20,24]])})));return function(t){return e.apply(this,arguments)}}(),X=function(e){o.slug?T(e):(T(e),z(e.replace(/\s/g,"").toLowerCase()))},J=i().createElement(f.Split,{className:"split-override",hasGutter:!0},i().createElement(f.SplitItem,null,i().createElement(g.Button,{key:"confirm",variant:"primary",onClick:function(){return G({type:"POST/PUT"})},ouiaId:"confirm"},a.formatMessage(y.Z.save))),i().createElement(f.SplitItem,null,i().createElement(g.Button,{key:"cancel",variant:"secondary",onClick:function(){return t(!1)},ouiaId:"cancel"},a.formatMessage(y.Z.cancel))),i().createElement(f.SplitItem,{isFilled:!0}),i().createElement(f.SplitItem,null,i().createElement(g.Button,{key:"delete",ouiaId:"delete",variant:"danger",isDisabled:!o.slug,onClick:function(){return G({type:"DELETE"})}},a.formatMessage(y.Z.deleteTopic))));return i().createElement(h.u_,{title:a.formatMessage(y.Z.topicAdminTitle),isOpen:r,onClose:function(){return t(!1)},footer:J,className:"modal-width-override"},i().createElement(v.l,null,i().createElement(b.c,{label:a.formatMessage(y.Z.name),fieldId:"topic-form-name",className:"text-input-override"},i().createElement(S.oi,{value:C,isRequired:!0,type:"text",id:"topic-form-name",name:"topic-form-name",onChange:function(e){return X(e)}})),i().createElement(b.c,{label:a.formatMessage(y.Z.topicAddEditDescription),fieldId:"topic-form-description",helperText:a.formatMessage(y.Z.topicAddEditDescriptionHelperText),className:"text-area-override"},i().createElement(k.Kx,{value:N,isRequired:!0,name:"topic-form-description",id:"topic-form-description",onChange:function(e){return w(e)}})),i().createElement(b.c,{isInline:!0,fieldId:"topic-form-labels"},i().createElement(b.c,{label:a.formatMessage(y.Z.tag),fieldId:"topic-form-tag",helperText:a.formatMessage(y.Z.topicAddEditTagHelperText),className:"text-input-override"},i().createElement(S.oi,{value:D.replace(/\s/g,"").toLowerCase(),isRequired:!0,type:"text",id:"topic-form-tag",name:"topic-form-tag",onChange:function(e){return O(e.replace(/\s/g,"").toLowerCase())}})),i().createElement(b.c,{label:a.formatMessage(y.Z.topicSlug),fieldId:"topic-form-name-2",helperText:"",className:"text-input-override"},i().createElement(S.oi,{value:Y||C.replace(/\s/g,"").toLowerCase(),isDisabled:o.slug,type:"text",id:"topic-form-name-2",name:"topic-form-name-2",onChange:function(e){return X(e)}}))),i().createElement(b.c,{label:a.formatMessage(y.Z.status),fieldId:"topic-form-enabled"},i().createElement(M.Y,{isChecked:!R,id:"disabled",label:a.formatMessage(y.Z.topicAddEditDisabled),onChange:function(){return _(!R)},className:"radio-override"}),i().createElement(M.Y,{isChecked:R,id:"enabled",label:a.formatMessage(y.Z.topicAddEditEnabled),onChange:function(){return _(!R)},className:"radio-override"})),i().createElement(b.c,{label:a.formatMessage(y.Z.featured),fieldId:"topic-form-featured"},i().createElement(E.X,{isChecked:q,label:a.formatMessage(y.Z.topicAddEditFeatureBox),id:"checkbox-featured",name:"checkbox-featured","aria-label":"update-featured",onChange:function(){return K(!q)},className:"checkbox-override"}))))};A.propTypes={handleModalToggle:x().func,isModalOpen:x().bool,topic:x().object,intl:x().any,addNotification:x().func,fetchTopicsAdmin:x().func};const I=(0,T.ZP)((0,s.connect)(null,(function(e){return{addNotification:function(t){return e((0,C.wN)(t))},fetchTopicsAdmin:function(){return e((0,r.QK)())}}}))(A));var N=a(80516),w=a(35451),B=a(4145),L=a(76341),D=a(33042),O=a.n(D),P=a(46891),F=a(86350),R=a(34702),_=a(48716),U=a(57277),H=a(47668),q=a(32875),K=a(34348),j=a(86896);const Q=function(){var e=(0,j.Z)(),t=(0,s.useDispatch)(),a=(0,s.useSelector)((function(e){return e.AdvisorStore.topics})),c=(0,s.useSelector)((function(e){return e.AdvisorStore.topicsFetchStatus})),d=(0,l.useState)([{title:e.formatMessage(y.Z.title),transforms:[o.sortable]},{title:e.formatMessage(y.Z.tag),transforms:[o.sortable]},{title:e.formatMessage(y.Z.topicSlug),transforms:[o.sortable]},{title:e.formatMessage(y.Z.status),transforms:[o.sortable]},{title:e.formatMessage(y.Z.featured),transforms:[o.sortable]},"",""]),u=(0,n.Z)(d,1)[0],f=(0,l.useState)([]),m=(0,n.Z)(f,2),p=m[0],E=m[1],v=(0,l.useState)({}),b=(0,n.Z)(v,2),h=b[0],Z=b[1],x=(0,l.useState)(!1),M=(0,n.Z)(x,2),k=M[0],S=M[1],C=(0,l.useState)({}),T=(0,n.Z)(C,2),A=T[0],D=T[1],Q=(0,l.useState)([]),Y=(0,n.Z)(Q,2),z=Y[0],G=Y[1],X=(0,l.useCallback)((function(e,t,a){var n={0:"name",1:"tag",2:"slug",3:"enabled",4:"featured"}[t];Z({index:t,direction:a}),G(O().from(z.asMutable().sort((function(e,t){return"asc"===a?"enabled"===n||"featured"===n?e[n]>t[n]?-1:1:e[n]>t[n]?1:-1:"enabled"===n||"featured"===n?e[n]>t[n]?1:-1:e[n]>t[n]?-1:1}))))}),[Z,G,z]),J=function(e){e?(D(e),S(!0)):S(!0)};return(0,l.useEffect)((function(){G(a)}),[a]),(0,l.useEffect)((function(){t(r.QK())}),[t]),(0,l.useEffect)((function(){if(0===z.length)E([{cells:[{title:i().createElement(R.Z,{icon:"none",title:"",text:""}),props:{colSpan:7}}]}]);else{var t=z.flatMap((function(t,a){return[{isOpen:!1,rule:t,cells:[{title:i().createElement("span",{key:a}," ",t.name)},{title:i().createElement("span",{key:a}," ",t.tag)},{title:i().createElement("span",{key:a}," ",t.slug)},{title:i().createElement("span",null,t.enabled?i().createElement("span",null,i().createElement(w.default,{className:"success"})," ",e.formatMessage(y.Z.enabled)):i().createElement("span",null,i().createElement(N.ZP,{className:"ban"})," ",e.formatMessage(y.Z.disabled)))},{title:i().createElement("span",null,t.featured?i().createElement("span",null,i().createElement(H.ZP,null)," ",e.formatMessage(y.Z.featured)):i().createElement("span",null))},"",{title:i().createElement(g.Button,{ouiaId:"hide",variant:"link",onClick:function(){return J(t)}},i().createElement(B.ZP,null)," ",e.formatMessage(y.Z.topicAdminEdit))}]}]}));E(t.asMutable())}}),[z,e]),i().createElement(i().Fragment,null,k&&i().createElement(I,{isModalOpen:k,handleModalToggle:S,topic:A}),i().createElement(_.Z,null,i().createElement(K.Dx,{headingLevel:"h3",size:"2xl",className:"titlePaddingOverride"},e.formatMessage(y.Z.topicAdminTitle))),i().createElement(F.Z,null,i().createElement(i().Fragment,null,i().createElement(U.Z,{className:"toolbar-padding-override"},i().createElement(g.Button,{variant:"primary",ouiaId:"adminCreate",onClick:function(e){return J(e)}},e.formatMessage(y.Z.topicAdminCreate))),"fulfilled"===c&&i().createElement(o.Table,{ouiaId:"adminTable","aria-label":"topics-admin-table",sortBy:h,onSort:X,cells:u,rows:p,isStickyHeader:!0},i().createElement(o.TableHeader,null),i().createElement(o.TableBody,null)),"pending"===c&&i().createElement(P.Z,null),"failed"===c&&i().createElement(L.Z,{message:e.formatMessage(y.Z.systemTableFetchError)}),i().createElement(q.Z,null))))}},43622:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var n=a(23645),r=a.n(n)()((function(e){return e[1]}));r.push([e.id,".advisor .text-area-override{max-width:30em;min-height:8em;max-height:12em}.advisor .text-input-override{width:22em;display:inline}.advisor .radio-override{padding-left:5px}.advisor .checkbox-override{padding-left:5px}.advisor .split-override{width:100%}.advisor .modal-width-override{width:60%}\n",""]);const l=r},2982:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var n=a(23645),r=a.n(n)()((function(e){return e[1]}));r.push([e.id,".advisor .toolbar-padding-override{padding-left:0px}.advisor .success{color:var(--pf-global--success-color--100)}.advisor .ban{color:var(--pf-global--Color--200)}\n",""]);const l=r},26964:(e,t,a)=>{"use strict";var n=a(93379),r=a.n(n),l=a(43622),i=r()(l.default,{insert:"head",singleton:!1});if(!l.default.locals||e.hot.invalidate){var o=l.default.locals;e.hot.accept(43622,(t=>{l=a(43622),function(e,t,a){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(o,l.default.locals)?(o=l.default.locals,i(l.default)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),l.default.locals},46978:(e,t,a)=>{"use strict";var n=a(93379),r=a.n(n),l=a(2982),i=r()(l.default,{insert:"head",singleton:!1});if(!l.default.locals||e.hot.invalidate){var o=l.default.locals;e.hot.accept(2982,(t=>{l=a(2982),function(e,t,a){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(o,l.default.locals)?(o=l.default.locals,i(l.default)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),l.default.locals}}]);