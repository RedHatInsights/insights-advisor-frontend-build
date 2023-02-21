(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[1694],{21015:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardHeader=void 0;const r=a(70655),s=r.__importStar(a(93264)),n=a(38296),l=r.__importDefault(a(54918)),i=a(2095),o=a(16396),c=r.__importDefault(a(95511));t.CardHeader=e=>{var{children:t=null,className:a="",id:d,onExpand:u,toggleButtonProps:m,isToggleRightAligned:p}=e,f=r.__rest(e,["children","className","id","onExpand","toggleButtonProps","isToggleRightAligned"]);return s.createElement(i.CardContext.Consumer,null,(({cardId:e})=>{const r=s.createElement("div",{className:n.css(l.default.cardHeaderToggle)},s.createElement(o.Button,Object.assign({variant:"plain",type:"button",onClick:t=>{u(t,e)}},m),s.createElement("span",{className:n.css(l.default.cardHeaderToggleIcon)},s.createElement(c.default,{"aria-hidden":"true"}))));return s.createElement("div",Object.assign({className:n.css(l.default.cardHeader,p&&l.default.modifiers.toggleRight,a),id:d},f),u&&!p&&r,t,u&&p&&r)}))},t.CardHeader.displayName="CardHeader"},9568:(e,t,a)=>{"use strict";t.Y=void 0;const r=a(70655),s=r.__importStar(a(93264)),n=r.__importDefault(a(15466)),l=a(38296),i=a(23053);class o extends s.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e.currentTarget.checked,e)},e.label||e["aria-label"]||console.error("Radio:","Radio requires an aria-label to be specified"),this.state={ouiaStateId:i.getDefaultOUIAId(o.displayName)}}render(){const e=this.props,{"aria-label":t,checked:a,className:c,defaultChecked:d,isLabelWrapped:u,isLabelBeforeButton:m,isChecked:p,isDisabled:f,isValid:g,label:h,onChange:b,description:E,body:v,ouiaId:_,ouiaSafe:y=!0}=e,C=r.__rest(e,["aria-label","checked","className","defaultChecked","isLabelWrapped","isLabelBeforeButton","isChecked","isDisabled","isValid","label","onChange","description","body","ouiaId","ouiaSafe"]);C.id||console.error("Radio:","id is required to make input accessible");const Z=s.createElement("input",Object.assign({},C,{className:l.css(n.default.radioInput),type:"radio",onChange:this.handleChange,"aria-invalid":!g,disabled:f,checked:a||p},void 0===a&&{defaultChecked:d},!h&&{"aria-label":t},i.getOUIAProps(o.displayName,void 0!==_?_:this.state.ouiaStateId,y)));let x=null;h&&u?x=s.createElement("span",{className:l.css(n.default.radioLabel,f&&n.default.modifiers.disabled)},h):h&&(x=s.createElement("label",{className:l.css(n.default.radioLabel,f&&n.default.modifiers.disabled),htmlFor:C.id},h));const S=E?s.createElement("span",{className:l.css(n.default.radioDescription)},E):null,O=v?s.createElement("span",{className:l.css(n.default.radioBody)},v):null,I=m?s.createElement(s.Fragment,null,x,Z,S,O):s.createElement(s.Fragment,null,Z,x,S,O);return u?s.createElement("label",{className:l.css(n.default.radio,c),htmlFor:C.id},I):s.createElement("div",{className:l.css(n.default.radio,!h&&n.default.modifiers.standalone,c)},I)}}t.Y=o,o.displayName="Radio",o.defaultProps={className:"",isDisabled:!1,isValid:!0,onChange:()=>{}}},85806:(e,t,a)=>{"use strict";t.Kx=t.f=void 0;const r=a(70655),s=r.__importStar(a(93264)),n=r.__importDefault(a(12455)),l=r.__importDefault(a(60211)),i=a(38296),o=a(23053);var c;!function(e){e.horizontal="horizontal",e.vertical="vertical",e.both="both"}(c=t.f||(t.f={}));class d extends s.Component{constructor(e){super(e),this.inputRef=s.createRef(),this.setAutoHeight=e=>{e.style.setProperty(l.default.name,"inherit");const t=window.getComputedStyle(e),a=parseInt(t.getPropertyValue("border-top-width"))+parseInt(t.getPropertyValue("padding-top"))+e.scrollHeight+parseInt(t.getPropertyValue("padding-bottom"))+parseInt(t.getPropertyValue("border-bottom-width"));e.style.setProperty(l.default.name,`${a}px`)},this.handleChange=e=>{const t=e.currentTarget;this.props.autoResize&&o.canUseDOM&&this.setAutoHeight(t),this.props.onChange&&this.props.onChange(t.value,e)},e.id||e["aria-label"]||console.error("TextArea: TextArea requires either an id or aria-label to be specified")}componentDidMount(){const e=this.props.innerRef||this.inputRef;if(this.props.autoResize&&o.canUseDOM){const t=e.current;this.setAutoHeight(t)}}render(){const e=this.props,{className:t,value:a,validated:l,isRequired:d,isDisabled:u,isIconSprite:m,isReadOnly:p,resizeOrientation:f,innerRef:g,readOnly:h,disabled:b,autoResize:E,onChange:v}=e,_=r.__rest(e,["className","value","validated","isRequired","isDisabled","isIconSprite","isReadOnly","resizeOrientation","innerRef","readOnly","disabled","autoResize","onChange"]),y=`resize${o.capitalize(f)}`;return s.createElement("textarea",Object.assign({className:i.css(n.default.formControl,m&&n.default.modifiers.iconSprite,t,f!==c.both&&n.default.modifiers[y],l===o.ValidatedOptions.success&&n.default.modifiers.success,l===o.ValidatedOptions.warning&&n.default.modifiers.warning),onChange:this.handleChange},"string"!=typeof this.props.defaultValue&&{value:a},{"aria-invalid":l===o.ValidatedOptions.error,required:d,disabled:u||b,readOnly:p||h,ref:g||this.inputRef},_))}}d.displayName="TextArea",d.defaultProps={innerRef:s.createRef(),className:"",isRequired:!1,isDisabled:!1,isIconSprite:!1,validated:"default",resizeOrientation:"both","aria-label":null},t.Kx=s.forwardRef(((e,t)=>s.createElement(d,Object.assign({},e,{innerRef:t})))),t.Kx.displayName="TextArea"},36842:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Split=void 0;const r=a(70655),s=r.__importStar(a(93264)),n=r.__importDefault(a(89059)),l=a(38296);t.Split=e=>{var{hasGutter:t=!1,isWrappable:a=!1,className:i="",children:o=null,component:c="div"}=e,d=r.__rest(e,["hasGutter","isWrappable","className","children","component"]);const u=c;return s.createElement(u,Object.assign({},d,{className:l.css(n.default.split,t&&n.default.modifiers.gutter,a&&n.default.modifiers.wrap,i)}),o)},t.Split.displayName="Split"},21508:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SplitItem=void 0;const r=a(70655),s=r.__importStar(a(93264)),n=r.__importDefault(a(89059)),l=a(38296);t.SplitItem=e=>{var{isFilled:t=!1,className:a="",children:i=null}=e,o=r.__rest(e,["isFilled","className","children"]);return s.createElement("div",Object.assign({},o,{className:l.css(n.default.splitItem,t&&n.default.modifiers.fill,a)}),i)},t.SplitItem.displayName="SplitItem"},92506:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=a(70655);r.__exportStar(a(36842),t),r.__exportStar(a(21508),t)},80516:(e,t,a)=>{"use strict";t.Jk={name:"BanIcon",height:512,width:512,svgPath:"M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z",yOffset:0,xOffset:0},t.SC=a(35183).createIcon(t.Jk),t.ZP=t.SC},73755:(e,t,a)=>{"use strict";t.Fm={name:"EditAltIcon",height:1024,width:1024,svgPath:"M1024,187.9 C1024,207 1017.3,223.1 1004,236.4 L857.5,386.9 L638.8,168.4 L787.3,20.5 C800.3,6.83333333 816.5,0 835.9,0 C855,0 871.366667,6.83333333 885,20.5 L1004,138.9 C1017.3,152.9 1023.96667,169.233333 1024,187.9 Z M806.2,438.9 L219.4,1024 L0,1024 L0,804.6 L586.6,219.5 L806.2,438.9 Z M219.6,950.9 L292.9,877.8 L146.3,731.4 L73.2,804.5 L73.2,877.6 L146.3,877.6 L146.3,951 L219.6,950.9 Z",yOffset:0,xOffset:0},t.CL=a(35183).createIcon(t.Fm),t.ZP=t.CL},62965:(e,t,a)=>{"use strict";t.er={name:"FrownOpenIcon",height:512,width:496,svgPath:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM136 208c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm187.3 183.3c-31.2-9.6-59.4-15.3-75.3-15.3s-44.1 5.7-75.3 15.3c-11.5 3.5-22.5-6.3-20.5-18.1 7-40 60.1-61.2 95.8-61.2s88.8 21.3 95.8 61.2c2 11.9-9.1 21.6-20.5 18.1zM328 240c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z",yOffset:0,xOffset:0},t.mE=a(35183).createIcon(t.er),t.ZP=t.mE},47668:(e,t,a)=>{"use strict";t.Mu={name:"StarIcon",height:512,width:576,svgPath:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z",yOffset:0,xOffset:0},t.r7=a(35183).createIcon(t.Mu),t.ZP=t.r7},15466:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r}),a(99624);const r={modifiers:{standalone:"pf-m-standalone",disabled:"pf-m-disabled"},radio:"pf-c-radio",radioBody:"pf-c-radio__body",radioDescription:"pf-c-radio__description",radioInput:"pf-c-radio__input",radioLabel:"pf-c-radio__label"}},89059:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r}),a(16166);const r={modifiers:{wrap:"pf-m-wrap",fill:"pf-m-fill",gutter:"pf-m-gutter"},split:"pf-l-split",splitItem:"pf-l-split__item"}},60211:(e,t)=>{"use strict";t.__esModule=!0,t.c_form_control_textarea_Height={name:"--pf-c-form-control--textarea--Height",value:"auto",var:"var(--pf-c-form-control--textarea--Height)"},t.default=t.c_form_control_textarea_Height},46891:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var r=a(2095),s=a(85962),n=a(24561),l=a(93264),i=a.n(l);const o=function(){return i().createElement(r.Card,null,i().createElement(s.CardBody,null,i().createElement(n.aV,null)))}},57710:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Q});var r=a(42982),s=a(70885),n=a(93264),l=a.n(n),i=a(17855),o=a(15861),c=a(87757),d=a.n(c),u=a(71094),m=a(92506),p=a(59303),f=a(6202),g=a(32752),h=a(4853),b=a(23811),E=a(78826),v=a(45697),_=a.n(v),y=a(9568),C=a(85806),Z=a(12282),x=a(30893),S=a(71355),O=a(28216),I=a(86896),N=function(e){var t=e.handleModalToggleCallback,a=e.isModalOpen,r=e.topic,i=(0,I.Z)(),c=(0,O.useDispatch)(),v=function(e){return c((0,S.addNotification)(e))},_=(0,n.useState)(r.name||""),N=(0,s.Z)(_,2),M=N[0],k=N[1],L=(0,n.useState)(r.description||""),T=(0,s.Z)(L,2),P=T[0],R=T[1],w=(0,n.useState)(r.tag||""),D=(0,s.Z)(w,2),j=D[0],A=D[1],z=(0,n.useState)(r.enabled||!1),H=(0,s.Z)(z,2),B=H[0],F=H[1],V=(0,n.useState)(r.featured||!1),q=(0,s.Z)(V,2),U=q[0],K=q[1],W=(0,n.useState)(r.slug||void 0),Y=(0,s.Z)(W,2),G=Y[0],J=Y[1],$=function(){var e=(0,o.Z)(d().mark((function e(a){var n,l;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.type,e.prev=1,l={name:M,slug:G,tag:j,description:P,enabled:B,featured:U},"DELETE"!==n){e.next=8;break}return e.next=6,(0,u.Sp)("".concat(p._n,"/topic/").concat(G));case 6:e.next=15;break;case 8:if(!r.slug){e.next=13;break}return e.next=11,(0,u.qb)("".concat(p._n,"/topic/").concat(G,"/"),l);case 11:e.next=15;break;case 13:return e.next=15,(0,u.SO)("".concat(p._n,"/topic/"),{},l);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),v({variant:"danger",dismissable:!0,title:i.formatMessage(x.Z.error),description:Object.entries(e.t0.response.data).map((function(e){var t=(0,s.Z)(e,2),a=t[0],r=t[1];return"".concat(a.toUpperCase(),":").concat(r," ")}))});case 20:return e.prev=20,t(!1),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[1,17,20,23]])})));return function(t){return e.apply(this,arguments)}}(),X=function(e){r.slug?k(e):(k(e),J(e.replace(/\s/g,"").toLowerCase()))},Q=l().createElement(m.Split,{className:"split-override",hasGutter:!0},l().createElement(m.SplitItem,null,l().createElement(f.Button,{key:"confirm",variant:"primary",onClick:function(){return $({type:"POST/PUT"})},ouiaId:"confirm"},i.formatMessage(x.Z.save))),l().createElement(m.SplitItem,null,l().createElement(f.Button,{key:"cancel",variant:"secondary",onClick:function(){return t(!1)},ouiaId:"cancel"},i.formatMessage(x.Z.cancel))),l().createElement(m.SplitItem,{isFilled:!0}),l().createElement(m.SplitItem,null,l().createElement(f.Button,{key:"delete",ouiaId:"delete",variant:"danger",isDisabled:!r.slug,onClick:function(){return $({type:"DELETE"})}},i.formatMessage(x.Z.deleteTopic))));return l().createElement(E.u_,{title:i.formatMessage(x.Z.topicAdminTitle),isOpen:a,onClose:function(){return t(!1)},footer:Q,className:"modal-width-override"},l().createElement(h.l,null,l().createElement(b.c,{label:i.formatMessage(x.Z.name),fieldId:"topic-form-name",className:"text-input-override"},l().createElement(Z.oi,{value:M,isRequired:!0,type:"text",id:"topic-form-name",name:"topic-form-name",onChange:function(e){return X(e)}})),l().createElement(b.c,{label:i.formatMessage(x.Z.topicAddEditDescription),fieldId:"topic-form-description",helperText:i.formatMessage(x.Z.topicAddEditDescriptionHelperText),className:"text-area-override"},l().createElement(C.Kx,{value:P,isRequired:!0,name:"topic-form-description",id:"topic-form-description",onChange:function(e){return R(e)}})),l().createElement(b.c,{isInline:!0,fieldId:"topic-form-labels"},l().createElement(b.c,{label:i.formatMessage(x.Z.tag),fieldId:"topic-form-tag",helperText:i.formatMessage(x.Z.topicAddEditTagHelperText),className:"text-input-override"},l().createElement(Z.oi,{value:j.replace(/\s/g,"").toLowerCase(),isRequired:!0,type:"text",id:"topic-form-tag",name:"topic-form-tag",onChange:function(e){return A(e.replace(/\s/g,"").toLowerCase())}})),l().createElement(b.c,{label:i.formatMessage(x.Z.topicSlug),fieldId:"topic-form-name-2",helperText:"",className:"text-input-override"},l().createElement(Z.oi,{value:G||M.replace(/\s/g,"").toLowerCase(),isDisabled:r.slug,type:"text",id:"topic-form-name-2",name:"topic-form-name-2",onChange:function(e){return X(e)}}))),l().createElement(b.c,{label:i.formatMessage(x.Z.status),fieldId:"topic-form-enabled"},l().createElement(y.Y,{isChecked:!B,id:"disabled",label:i.formatMessage(x.Z.topicAddEditDisabled),onChange:function(){return F(!B)},className:"adv-c-radio"}),l().createElement(y.Y,{isChecked:B,id:"enabled",label:i.formatMessage(x.Z.topicAddEditEnabled),onChange:function(){return F(!B)},className:"adv-c-radio"})),l().createElement(b.c,{label:i.formatMessage(x.Z.featured),fieldId:"topic-form-featured"},l().createElement(g.X,{isChecked:U,label:i.formatMessage(x.Z.topicAddEditFeatureBox),id:"checkbox-featured",name:"checkbox-featured","aria-label":"update-featured",onChange:function(){return K(!U)},className:"adv-c-check"}))))};N.propTypes={handleModalToggleCallback:_().func,isModalOpen:_().bool,topic:_().object,intl:_().any};const M=N;var k=a(80516),L=a(35451),T=a(73755),P=a(2095),R=a(85962),w=a(21015),D=a(62965),j=function(e){var t=e.message;return l().createElement(P.Card,{className:"adv-c-card-empty-rule"},l().createElement(w.CardHeader,null,l().createElement(D.ZP,{size:"lg"})),l().createElement(R.CardBody,null,t))};const A=j;j.propTypes={message:_().string};var z=a(46891),H=a(34702),B=a(89376),F=a(7887),V=a(47668),q=a(85893),U=a(22938),K=a(94184),W=a.n(K),Y=function(){return Y=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var s in t=arguments[a])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},Y.apply(this,arguments)};function G(e){return"".concat(e,e>1||e<1?" Results":" Result")}const J=function(e){var t,a=e.isFooter,r=void 0!==a&&a,s=e.results,l=e.className,i=e.selected,o=e.children,c=e.ouiaId,d=e.ouiaSafe,u=void 0===d||d,m=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]])}return a}(e,["isFooter","results","className","selected","children","ouiaId","ouiaSafe"]),p=W()("ins-c-table__toolbar",((t={})["ins-m-footer"]=r,t),l),f="RHI/TableToolbar",g=(0,U.useOUIAId)(f,c,u);return(0,q.jsxs)(n.Fragment,{children:[(0,q.jsx)(U.Toolbar,Y({className:p,"data-ouia-component-type":f,"data-ouia-component-id":g,"data-ouia-safe":u},m,{children:o})),(s&&s>=0||i&&i>=0)&&(0,q.jsxs)("div",Y({className:"ins-c-table__toolbar-results"},{children:[s&&s>=0&&(0,q.jsxs)("span",Y({className:"ins-c-table__toolbar-results-count"},{children:[" ",G(s)," "]})),i&&i>=0&&(0,q.jsxs)("span",Y({className:"ins-c-table__toolbar-results-selected"},{children:[" ",i," Selected "]}))]}))]})};var $=a(34348),X=a(77187);const Q=function(){var e=(0,I.Z)(),t=(0,X.zv)(),a=t.data,o=void 0===a?[]:a,c=t.isLoading,d=t.isFetching,u=t.isError,m=t.refetch,p=(0,n.useState)([{title:e.formatMessage(x.Z.title),transforms:[i.sortable]},{title:e.formatMessage(x.Z.tag),transforms:[i.sortable]},{title:e.formatMessage(x.Z.topicSlug),transforms:[i.sortable]},{title:e.formatMessage(x.Z.status),transforms:[i.sortable]},{title:e.formatMessage(x.Z.featured),transforms:[i.sortable]},"",""]),g=(0,s.Z)(p,1)[0],h=(0,n.useState)([]),b=(0,s.Z)(h,2),E=b[0],v=b[1],_=(0,n.useState)({}),y=(0,s.Z)(_,2),C=y[0],Z=y[1],S=(0,n.useState)(!1),O=(0,s.Z)(S,2),N=O[0],P=O[1],R=(0,n.useState)({}),w=(0,s.Z)(R,2),D=w[0],j=w[1],q=(0,n.useState)([]),U=(0,s.Z)(q,2),K=U[0],W=U[1],Y=(0,n.useCallback)((function(e,t,a){var s={0:"name",1:"tag",2:"slug",3:"enabled",4:"featured"}[t],n=(0,r.Z)(K);Z({index:t,direction:a}),W(n.sort((function(e,t){return"asc"===a?"enabled"===s||"featured"===s?e[s]>t[s]?-1:1:e[s]>t[s]?1:-1:"enabled"===s||"featured"===s?e[s]>t[s]?1:-1:e[s]>t[s]?-1:1})))}),[Z,W,K]),G=function(e){e?(j(e),P(!0)):P(!0)};return(0,n.useEffect)((function(){W(o)}),[o]),(0,n.useEffect)((function(){if(0===K.length)v([{cells:[{title:l().createElement(H.Z,{icon:"none",title:"",text:""}),props:{colSpan:7}}]}]);else{var t=K.flatMap((function(t,a){return[{isOpen:!1,rule:t,cells:[{title:l().createElement("span",{key:a}," ",t.name)},{title:l().createElement("span",{key:a}," ",t.tag)},{title:l().createElement("span",{key:a}," ",t.slug)},{title:l().createElement("span",null,t.enabled?l().createElement("span",null,l().createElement(L.default,{className:"success"})," ",e.formatMessage(x.Z.enabled)):l().createElement("span",null,l().createElement(k.ZP,{className:"ban"})," ",e.formatMessage(x.Z.disabled)))},{title:l().createElement("span",null,t.featured?l().createElement("span",null,l().createElement(V.ZP,null)," ",e.formatMessage(x.Z.featured)):l().createElement("span",null))},"",{title:l().createElement(f.Button,{ouiaId:"hide",variant:"link",onClick:function(){return G(t)}},l().createElement(T.ZP,null)," ",e.formatMessage(x.Z.topicAdminEdit))}]}]}));v(t)}}),[K,e]),l().createElement(l().Fragment,null,N&&l().createElement(M,{isModalOpen:N,handleModalToggleCallback:function(e){P(e),m()},topic:D}),l().createElement(B.Z,null,l().createElement($.Dx,{headingLevel:"h3",size:"2xl",className:"titlePaddingOverride"},e.formatMessage(x.Z.topicAdminTitle))),l().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section"},l().createElement(l().Fragment,null,l().createElement(F.Z,{className:"toolbar-padding-override"},l().createElement(f.Button,{variant:"primary",ouiaId:"adminCreate",onClick:function(e){return G(e)}},e.formatMessage(x.Z.topicAdminCreate))),!c&&!d&&l().createElement(i.Table,{ouiaId:"adminTable","aria-label":"topics-admin-table",sortBy:C,onSort:Y,cells:g,rows:E,isStickyHeader:!0},l().createElement(i.TableHeader,null),l().createElement(i.TableBody,null)),d&&l().createElement(z.Z,null),u&&l().createElement(A,{message:e.formatMessage(x.Z.systemTableFetchError)}),l().createElement(J,null))))}},70347:()=>{},11452:()=>{},34946:()=>{},80598:()=>{},32857:()=>{},90479:()=>{},78752:()=>{},25238:()=>{},99624:()=>{},66822:()=>{},49854:()=>{},87234:()=>{},16166:()=>{},11177:()=>{}}]);