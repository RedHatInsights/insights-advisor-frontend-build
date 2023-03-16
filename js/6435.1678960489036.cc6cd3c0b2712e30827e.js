"use strict";(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[6435],{66435:(e,t,a)=>{a.d(t,{M5:()=>x,oo:()=>f,lY:()=>y});var o=a(70655),n=a(93264),i=a(2466),r=a(38296),l=a(46043),s=a(92607),d=a(41724),c=a(20941),p=a(93174),m=a(9003),h=a(47173);const u=e=>{var{onClick:t,id:a,textId:i,contentId:r,isExpanded:l=!1}=e,s=(0,o.__rest)(e,["onClick","id","textId","contentId","isExpanded"]);return n.createElement(h.zx,Object.assign({type:"button",variant:"control",onClick:t,id:a,"aria-labelledby":`${a} ${i}`,"aria-controls":`${a} ${r}`,"aria-expanded":l},s),l?n.createElement(m.ZP,{"aria-hidden":"true"}):n.createElement(p.ZP,{"aria-hidden":"true"}))};u.displayName="ClipboardCopyToggle";class v extends n.Component{constructor(e){super(e)}render(){const e=this.props,{className:t,children:a,onChange:l,isReadOnly:s,isCode:d}=e,c=(0,o.__rest)(e,["className","children","onChange","isReadOnly","isCode"]);return n.createElement("div",Object.assign({suppressContentEditableWarning:!0,className:(0,r.i)(i.Z.clipboardCopyExpandableContent,t),onInput:e=>l(e.target.innerText,e),contentEditable:!s},c),d?n.createElement("pre",null,a):a)}}v.displayName="ClipboardCopyExpanded",v.defaultProps={onChange:()=>{},className:"",isReadOnly:!1,isCode:!1};var b=a(62472);const y=(e,t)=>{navigator.clipboard.writeText(t.toString())};var f;!function(e){e.inline="inline",e.expansion="expansion",e.inlineCompact="inline-compact"}(f||(f={}));class x extends n.Component{constructor(e){super(e),this.timer=null,this.componentDidUpdate=(e,t)=>{e.children!==this.props.children&&this.updateText(this.props.children)},this.componentWillUnmount=()=>{this.timer&&window.clearTimeout(this.timer)},this.expandContent=e=>{this.setState((e=>({expanded:!e.expanded})))},this.updateText=e=>{this.setState({text:e}),this.props.onChange(e)},this.render=()=>{const e=this.props,{isExpanded:t,onChange:a,switchDelay:l,isReadOnly:p,isCode:m,isBlock:h,exitDelay:y,maxWidth:f,entryDelay:C,onCopy:g,hoverTip:E,clickTip:N,textAriaLabel:_,toggleAriaLabel:T,variant:D,position:S,className:O,additionalActions:k,ouiaId:w,ouiaSafe:I,removeFindDomNode:P}=e,W=(0,o.__rest)(e,["isExpanded","onChange","switchDelay","isReadOnly","isCode","isBlock","exitDelay","maxWidth","entryDelay","onCopy","hoverTip","clickTip","textAriaLabel","toggleAriaLabel","variant","position","className","additionalActions","ouiaId","ouiaSafe","removeFindDomNode"]);return n.createElement("div",Object.assign({className:(0,r.i)(i.Z.clipboardCopy,"inline-compact"===D&&i.Z.modifiers.inline,h&&i.Z.modifiers.block,this.state.expanded&&i.Z.modifiers.expanded,O)},W,(0,b.dp)(x.displayName,w,I)),"inline-compact"===D&&n.createElement(d.w,{prefix:""},(e=>n.createElement(n.Fragment,null,!m&&n.createElement("span",{className:(0,r.i)(i.Z.clipboardCopyText),id:`text-input-${e}`},this.state.text),m&&n.createElement("code",{className:(0,r.i)(i.Z.clipboardCopyText,i.Z.modifiers.code),id:`text-input-${e}`},this.state.text),n.createElement("span",{className:(0,r.i)(i.Z.clipboardCopyActions)},n.createElement("span",{className:(0,r.i)(i.Z.clipboardCopyActionsItem)},n.createElement(c.u,{variant:"plain",exitDelay:y,entryDelay:C,maxWidth:f,position:S,id:`copy-button-${e}`,textId:`text-input-${e}`,"aria-label":E,onClick:e=>{g(e,this.state.text),this.setState({copied:!0})},onTooltipHidden:()=>this.setState({copied:!1})},this.state.copied?N:E)),k&&k)))),"inline-compact"!==D&&n.createElement(d.w,{prefix:""},(e=>n.createElement(n.Fragment,null,n.createElement("div",{className:(0,r.i)(i.Z.clipboardCopyGroup)},"expansion"===D&&n.createElement(u,{isExpanded:this.state.expanded,onClick:this.expandContent,id:`toggle-${e}`,textId:`text-input-${e}`,contentId:`content-${e}`,"aria-label":T}),n.createElement(s.oi,{isReadOnly:p||this.state.expanded,onChange:this.updateText,value:this.state.text,id:`text-input-${e}`,"aria-label":_}),n.createElement(c.u,{exitDelay:y,entryDelay:C,maxWidth:f,position:S,id:`copy-button-${e}`,textId:`text-input-${e}`,"aria-label":E,onClick:e=>{g(e,this.state.text),this.setState({copied:!0})},onTooltipHidden:()=>this.setState({copied:!1}),removeFindDomNode:P},this.state.copied?N:E)),this.state.expanded&&n.createElement(v,{isReadOnly:p,isCode:m,id:`content-${e}`,onChange:this.updateText},this.state.text)))))},this.state={text:Array.isArray(this.props.children)?this.props.children.join(""):this.props.children,expanded:this.props.isExpanded,copied:!1},void 0!==this.props.switchDelay&&console.warn("ClipboardCopy: switchDelay prop has been deprecated. The tooltip message will switch back to the hover tip as soon as the tooltip is hidden.")}}x.displayName="ClipboardCopy",x.defaultProps={hoverTip:"Copy to clipboard",clickTip:"Successfully copied to clipboard!",isReadOnly:!1,isExpanded:!1,isCode:!1,variant:"inline",position:l.I.top,maxWidth:"150px",exitDelay:1500,entryDelay:300,onCopy:y,onChange:()=>{},textAriaLabel:"Copyable input",toggleAriaLabel:"Show content",additionalActions:null,ouiaSafe:!0,removeFindDomNode:!1}},20941:(e,t,a)=>{a.d(t,{u:()=>s});var o=a(70655),n=a(93264),i=a(44008),r=a(47173),l=a(75824);const s=e=>{var{onClick:t,exitDelay:a=0,entryDelay:s=300,maxWidth:d="100px",position:c="top","aria-label":p="Copyable input",id:m,textId:h,children:u,variant:v="control",onTooltipHidden:b=(()=>{}),removeFindDomNode:y=!1}=e,f=(0,o.__rest)(e,["onClick","exitDelay","entryDelay","maxWidth","position","aria-label","id","textId","children","variant","onTooltipHidden","removeFindDomNode"]);return n.createElement(l.u,{trigger:"mouseenter focus click",exitDelay:a,entryDelay:s,maxWidth:d,position:c,"aria-live":"polite",aria:"none",content:n.createElement("div",null,u),onTooltipHidden:b,removeFindDomNode:y},n.createElement(r.zx,Object.assign({type:"button",variant:v,onClick:t,"aria-label":p,id:m,"aria-labelledby":`${m} ${h}`},f),n.createElement(i.ZP,null)))};s.displayName="ClipboardCopyButton"},46043:(e,t,a)=>{a.d(t,{J:()=>K,I:()=>L});var o=a(70655),n=a(93264),i=a(1774);a(91993);const r="pf-m-no-padding",l="pf-m-width-auto",s="pf-m-top",d="pf-m-top-left",c="pf-m-top-right",p="pf-m-bottom",m="pf-m-bottom-left",h="pf-m-bottom-right",u="pf-m-left",v="pf-m-left-top",b="pf-m-left-bottom",y="pf-m-right",f="pf-m-right-top",x="pf-m-right-bottom",C="pf-m-danger",g="pf-m-warning",E="pf-m-success",N="pf-m-default",_="pf-m-info",T="pf-m-icon";var D=a(38296);const S=n.createContext({}),O=e=>{var{className:t=null,children:a}=e,i=(0,o.__rest)(e,["className","children"]);return n.createElement("div",Object.assign({className:(0,D.i)("pf-c-popover__content",t)},i),a)};O.displayName="PopoverContent";const k=e=>{var{children:t,id:a,className:i}=e,r=(0,o.__rest)(e,["children","id","className"]);return n.createElement("div",Object.assign({className:(0,D.i)("pf-c-popover__body",i),id:a},r),t)};k.displayName="PopoverBody";var w=a(38779);const I=e=>{var{children:t,className:a}=e,i=(0,o.__rest)(e,["children","className"]);return n.createElement("span",Object.assign({className:(0,D.i)("pf-c-popover__title-icon",a)},i),t)};I.displayName="PopoverHeaderIcon";const P=e=>{var{children:t,className:a}=e,i=(0,o.__rest)(e,["children","className"]);return n.createElement("span",Object.assign({className:(0,D.i)("pf-c-popover__title-text",a)},i),t)};P.displayName="PopoverHeaderText";const W=e=>{var{children:t,icon:a,className:i,titleHeadingLevel:r="h6",alertSeverityVariant:l,id:s,alertSeverityScreenReaderText:d}=e,c=(0,o.__rest)(e,["children","icon","className","titleHeadingLevel","alertSeverityVariant","id","alertSeverityScreenReaderText"]);const p=r;return a||l?n.createElement("header",Object.assign({className:(0,D.i)("pf-c-popover__header",i),id:s},c),n.createElement(p,{className:(0,D.i)("pf-c-popover__title",a&&T)},a&&n.createElement(I,null,a),l&&d&&n.createElement("span",{className:"pf-u-screen-reader"},d),n.createElement(P,null,t))):n.createElement(w.D,Object.assign({headingLevel:r,size:w.H.md,id:s,className:i},c),t)};W.displayName="PopoverHeader";const $=e=>{var{children:t,className:a=""}=e,i=(0,o.__rest)(e,["children","className"]);return n.createElement("footer",Object.assign({className:(0,D.i)("pf-c-popover__footer",a)},i),t)};$.displayName="PopoverFooter";var A=a(47173),F=a(24307);const H=e=>{var{onClose:t=(()=>{})}=e,a=(0,o.__rest)(e,["onClose"]);return n.createElement(A.zx,Object.assign({onClick:t,variant:"plain","aria-label":!0},a,{style:{pointerEvents:"auto"}}),n.createElement(F.ZP,null))};H.displayName="PopoverCloseButton";const Z=e=>{var{className:t=""}=e,a=(0,o.__rest)(e,["className"]);return n.createElement("div",Object.assign({className:(0,D.i)("pf-c-popover__arrow",t)},a))};Z.displayName="PopoverArrow";const R={name:"--pf-c-popover--MaxWidth",value:"none",var:"var(--pf-c-popover--MaxWidth)"},j={name:"--pf-c-popover--MinWidth",value:"auto",var:"var(--pf-c-popover--MinWidth)"};var L,B=a(73631),M=a(16438),V=a(80164);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(L||(L={}));const z={default:N,info:_,success:E,warning:g,danger:C},K=e=>{var{children:t,position:a="top",enableFlip:C=!0,className:g="",isVisible:E=null,shouldClose:N=(()=>null),shouldOpen:_=(()=>null),"aria-label":T="",bodyContent:w,headerContent:I=null,headerComponent:P="h6",headerIcon:A=null,alertSeverityVariant:F,alertSeverityScreenReaderText:L,footerContent:K=null,appendTo:U=(()=>document.body),hideOnOutsideClick:G=!0,onHide:J=(()=>null),onHidden:Y=(()=>null),onShow:q=(()=>null),onShown:Q=(()=>null),onMount:X=(()=>null),zIndex:ee=9999,minWidth:te=j&&j.value,maxWidth:ae=R&&R.value,closeBtnAriaLabel:oe="Close",showClose:ne=!0,distance:ie=25,flipBehavior:re=["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end"],animationDuration:le=300,id:se,withFocusTrap:de,boundary:ce,tippyProps:pe,reference:me,hasNoPadding:he=!1,hasAutoWidth:ue=!1,removeFindDomNode:ve=!1}=e,be=(0,o.__rest)(e,["children","position","enableFlip","className","isVisible","shouldClose","shouldOpen","aria-label","bodyContent","headerContent","headerComponent","headerIcon","alertSeverityVariant","alertSeverityScreenReaderText","footerContent","appendTo","hideOnOutsideClick","onHide","onHidden","onShow","onShown","onMount","zIndex","minWidth","maxWidth","closeBtnAriaLabel","showClose","distance","flipBehavior","animationDuration","id","withFocusTrap","boundary","tippyProps","reference","hasNoPadding","hasAutoWidth","removeFindDomNode"]);const ye=se||(0,V.Ki)(),fe=null!==E,[xe,Ce]=n.useState(!1),[ge,Ee]=n.useState(0),[Ne,_e]=n.useState(Boolean(de)),Te=n.useRef(null),De=n.useRef(null),Se=n.useRef(null);n.useEffect((()=>{X()}),[]),n.useEffect((()=>{fe&&(E?Oe():ke())}),[E,fe]);const Oe=e=>{q(),Te.current&&clearTimeout(Te.current),Se.current&&clearTimeout(Se.current),De.current=setTimeout((()=>{Ce(!0),Ee(1),!1!==de&&e&&_e(!0),Q()}),0)},ke=()=>{J(),De.current&&clearTimeout(De.current),Se.current=setTimeout((()=>{Ce(!1),Ee(0),_e(!1),Te.current=setTimeout((()=>{Y()}),le)}),0)},we={top:s,bottom:p,left:u,right:y,"top-start":d,"top-end":c,"bottom-start":m,"bottom-end":h,"left-start":v,"left-end":b,"right-start":f,"right-end":x},Ie=te!==j.value,Pe=ae!==R.value,We=n.createElement(B.i,Object.assign({active:Ne,focusTrapOptions:{returnFocusOnDeactivate:!0,clickOutsideDeactivates:!0,tabbableOptions:{displayCheck:"none"},fallbackFocus:()=>{let e=null;return document&&document.activeElement&&(e=document.activeElement),e}},preventScrollOnDeactivate:!0,className:(0,D.i)("pf-c-popover",F&&z[F],he&&r,ue&&l,g),role:"dialog","aria-modal":"true","aria-label":I?void 0:T,"aria-labelledby":I?`popover-${ye}-header`:void 0,"aria-describedby":`popover-${ye}-body`,onMouseDown:()=>{Ne&&_e(!1)},style:{minWidth:Ie?te:null,maxWidth:Pe?ae:null,opacity:ge,transition:(0,M.K)(le)}},be),n.createElement(Z,null),n.createElement(O,null,ne&&n.createElement(H,{onClose:e=>{e.stopPropagation(),fe?N(null,ke,e):ke()},"aria-label":oe}),I&&n.createElement(W,{id:`popover-${ye}-header`,icon:A,alertSeverityVariant:F,alertSeverityScreenReaderText:L||`${F} alert:`,titleHeadingLevel:P},"function"==typeof I?I(ke):I),n.createElement(k,{id:`popover-${ye}-body`},"function"==typeof w?w(ke):w),K&&n.createElement($,{id:`popover-${ye}-footer`},"function"==typeof K?K(ke):K)));return n.createElement(S.Provider,{value:{headerComponent:P}},n.createElement(M.r,{trigger:t,reference:me,popper:We,popperMatchesTriggerWidth:!1,appendTo:U,isVisible:xe,positionModifiers:we,distance:ie,placement:a,onTriggerClick:e=>{fe?xe?N(null,ke,e):_(Oe,e):xe?ke():Oe(!0)},onDocumentClick:(e,t,a)=>{if(G&&xe){if(a&&a.contains(e.target))return;fe?N(null,ke,e):ke()}},onDocumentKeyDown:e=>{e.key===i.yu.Escape&&xe&&(fe?N(null,ke,e):ke())},enableFlip:C,zIndex:ee,flipBehavior:re,removeFindDomNode:ve}))};K.displayName="Popover"},44008:(e,t,a)=>{a.d(t,{Fg:()=>n,TI:()=>i,ZP:()=>r});var o=a(40400);const n={name:"CopyIcon",height:512,width:448,svgPath:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z",yOffset:0,xOffset:0},i=(0,o.IU)(n),r=i},2466:(e,t,a)=>{a.d(t,{Z:()=>o}),a(37625);const o={button:"pf-c-button",clipboardCopy:"pf-c-clipboard-copy",clipboardCopyActions:"pf-c-clipboard-copy__actions",clipboardCopyActionsItem:"pf-c-clipboard-copy__actions-item",clipboardCopyExpandableContent:"pf-c-clipboard-copy__expandable-content",clipboardCopyGroup:"pf-c-clipboard-copy__group",clipboardCopyText:"pf-c-clipboard-copy__text",clipboardCopyToggleIcon:"pf-c-clipboard-copy__toggle-icon",modifiers:{expanded:"pf-m-expanded",inline:"pf-m-inline",block:"pf-m-block",code:"pf-m-code"},themeDark:"pf-theme-dark"}}}]);
//# sourceMappingURL=../sourcemaps/6435.1ebfb7da0d9416103ebf738394460952.js.map