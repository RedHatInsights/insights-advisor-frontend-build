"use strict";(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[7960],{32203:(e,a,t)=>{t.d(a,{H:()=>c,Z:()=>o});var l=t(70655),s=t(93264),i=t(54918),n=t(38296),r=t(62472);const c=s.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),o=e=>{var{children:a=null,id:t="",className:d="",component:m="article",isHoverable:u=!1,isCompact:p=!1,isSelectable:f=!1,isSelectableRaised:h=!1,isSelected:b=!1,isDisabledRaised:g=!1,isFlat:C=!1,isExpanded:E=!1,isRounded:v=!1,isLarge:L=!1,isFullHeight:x=!1,isPlain:N=!1,ouiaId:y,ouiaSafe:_=!0,hasSelectableInput:I=!1,selectableInputAriaLabel:T,onSelectableInputChange:O=(()=>{})}=e,P=(0,l.__rest)(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const Z=m,S=(0,r.S$)(o.displayName,y,_),[w,R]=s.useState(""),[M,k]=s.useState();p&&L&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),L=!1);const A=s.useRef(!1);return s.useEffect((()=>{T?k({"aria-label":T}):w?k({"aria-labelledby":w}):I&&!A.current&&(k({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[I,T,w]),s.createElement(c.Provider,{value:{cardId:t,registerTitleId:e=>{R(e),A.current=!!e},isExpanded:E}},I&&s.createElement("input",Object.assign({className:"pf-screen-reader",id:`${t}-input`},M,{type:"checkbox",checked:b,onChange:e=>O(t,e),disabled:g,tabIndex:-1})),s.createElement(Z,Object.assign({id:t,className:(0,n.css)(i.default.card,p&&i.default.modifiers.compact,E&&i.default.modifiers.expanded,C&&i.default.modifiers.flat,v&&i.default.modifiers.rounded,L&&i.default.modifiers.displayLg,x&&i.default.modifiers.fullHeight,N&&i.default.modifiers.plain,g?(0,n.css)(i.default.modifiers.nonSelectableRaised):h?(0,n.css)(i.default.modifiers.selectableRaised,b&&i.default.modifiers.selectedRaised):f||u?(0,n.css)(i.default.modifiers.selectable,b&&i.default.modifiers.selected):"",d),tabIndex:f||h?"0":void 0},P,S),a))};o.displayName="Card"},62394:(e,a,t)=>{t.d(a,{e:()=>r});var l=t(70655),s=t(93264),i=t(54918),n=t(38296);const r=e=>{var{children:a=null,className:t="",component:r="div",isFilled:c=!0}=e,o=(0,l.__rest)(e,["children","className","component","isFilled"]);const d=r;return s.createElement(d,Object.assign({className:(0,n.css)(i.default.cardBody,!c&&i.default.modifiers.noFill,t)},o),a)};r.displayName="CardBody"},42744:(e,a,t)=>{t.d(a,{K:()=>c});var l=t(70655),s=t(93264),i=t(54918),n=t(38296),r=t(32203);const c=e=>{var{children:a=null,className:t=""}=e,c=(0,l.__rest)(e,["children","className"]);return s.createElement(r.H.Consumer,null,(({isExpanded:e})=>e?s.createElement("div",Object.assign({className:(0,n.css)(i.default.cardExpandableContent,t)},c),a):null))};c.displayName="CardExpandableContent"},49734:(e,a,t)=>{t.d(a,{e:()=>r});var l=t(70655),s=t(93264),i=t(54918),n=t(38296);const r=e=>{var{children:a=null,className:t="",component:r="div"}=e,c=(0,l.__rest)(e,["children","className","component"]);const o=r;return s.createElement(o,Object.assign({className:(0,n.css)(i.default.cardFooter,t)},c),a)};r.displayName="CardFooter"},70401:(e,a,t)=>{t.d(a,{O:()=>d});var l=t(70655),s=t(93264),i=t(38296),n=t(54918),r=t(32203),c=t(47173),o=t(93174);const d=e=>{var{children:a=null,className:t="",id:d,onExpand:m,toggleButtonProps:u,isToggleRightAligned:p}=e,f=(0,l.__rest)(e,["children","className","id","onExpand","toggleButtonProps","isToggleRightAligned"]);return s.createElement(r.H.Consumer,null,(({cardId:e})=>{const l=s.createElement("div",{className:(0,i.css)(n.default.cardHeaderToggle)},s.createElement(c.zx,Object.assign({variant:"plain",type:"button",onClick:a=>{m(a,e)}},u),s.createElement("span",{className:(0,i.css)(n.default.cardHeaderToggleIcon)},s.createElement(o.ZP,{"aria-hidden":"true"}))));return s.createElement("div",Object.assign({className:(0,i.css)(n.default.cardHeader,p&&n.default.modifiers.toggleRight,t),id:d},f),m&&!p&&l,a,m&&p&&l)}))};d.displayName="CardHeader"},70:(e,a,t)=>{t.d(a,{l:()=>c});var l=t(70655),s=t(93264),i=t(38296),n=t(54918),r=t(32203);const c=e=>{var{children:a=null,className:t="",component:c="div"}=e,o=(0,l.__rest)(e,["children","className","component"]);const{cardId:d,registerTitleId:m}=s.useContext(r.H),u=c,p=d?`${d}-title`:"";return s.useEffect((()=>(m(p),()=>m(""))),[m,p]),s.createElement(u,Object.assign({className:(0,i.css)(n.default.cardTitle,t),id:p||void 0},o),a)};c.displayName="CardTitle"},60485:(e,a,t)=>{t.d(a,{H:()=>l,D:()=>d});var l,s,i=t(70655),n=t(93264),r=t(38296),c=t(68374),o=t(62472);!function(e){e.md="md",e.lg="lg",e.xl="xl",e["2xl"]="2xl",e["3xl"]="3xl",e["4xl"]="4xl"}(l||(l={})),function(e){e.h1="2xl",e.h2="xl",e.h3="lg",e.h4="md",e.h5="md",e.h6="md"}(s||(s={}));const d=e=>{var{className:a="",children:t="",headingLevel:l,size:m=s[l],ouiaId:u,ouiaSafe:p=!0}=e,f=(0,i.__rest)(e,["className","children","headingLevel","size","ouiaId","ouiaSafe"]);const h=(0,o.S$)(d.displayName,u,p);return n.createElement(l,Object.assign({},h,f,{className:(0,r.css)(c.default.title,m&&c.default.modifiers[m],a)}),t)};d.displayName="Title"},42293:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),t(70655).__exportStar(t(23218),a)},26407:(e,a,t)=>{a.e=void 0;const l=t(70655),s=l.__importStar(t(93264)),i=l.__importDefault(t(72002)),n=l.__importDefault(t(83063)),r=t(38296),c=t(16396),o=t(42293),d=t(8045),m=l.__importDefault(t(77669)),u=t(23053),p=t(80997);class f extends s.Component{constructor(e){super(e),this.headingRef=s.createRef(),this.toggleCollapse=()=>{this.setState((e=>({isOpen:!e.isOpen,isTooltipVisible:Boolean(this.headingRef.current&&this.headingRef.current.offsetWidth<this.headingRef.current.scrollWidth)})))},this.state={isOpen:this.props.defaultIsOpen,isTooltipVisible:!1}}componentDidMount(){this.setState({isTooltipVisible:Boolean(this.headingRef.current&&this.headingRef.current.offsetWidth<this.headingRef.current.scrollWidth)})}renderLabel(e){const{categoryName:a,tooltipPosition:t}=this.props,{isTooltipVisible:l}=this.state;return l?s.createElement(d.Tooltip,{position:t,content:a},s.createElement("span",{tabIndex:0,ref:this.headingRef,className:r.css(i.default.labelGroupLabel)},s.createElement("span",{"aria-hidden":"true",id:e},a))):s.createElement("span",{ref:this.headingRef,className:r.css(i.default.labelGroupLabel),"aria-hidden":"true",id:e},a)}render(){const e=this.props,{categoryName:a,children:t,className:d,isClosable:f,isCompact:h,closeBtnAriaLabel:b,"aria-label":g,onClick:C,numLabels:E,expandedText:v,collapsedText:L,defaultIsOpen:x,tooltipPosition:N,isVertical:y,isEditable:_,hasEditableTextArea:I,editableTextAreaProps:T,addLabelControl:O}=e,P=l.__rest(e,["categoryName","children","className","isClosable","isCompact","closeBtnAriaLabel","aria-label","onClick","numLabels","expandedText","collapsedText","defaultIsOpen","tooltipPosition","isVertical","isEditable","hasEditableTextArea","editableTextAreaProps","addLabelControl"]),{isOpen:Z}=this.state,S=s.Children.count(t),w=u.fillTemplate(L,{remaining:s.Children.count(t)-E}),R=e=>{const l=Z?s.Children.toArray(t):s.Children.toArray(t).slice(0,E),u=s.createElement(s.Fragment,null,a&&this.renderLabel(e),s.createElement("ul",Object.assign({className:r.css(i.default.labelGroupList)},a&&{"aria-labelledby":e},!a&&{"aria-label":g},{role:"list"},P),l.map(((e,a)=>s.createElement("li",{className:r.css(i.default.labelGroupListItem),key:a},e))),S>E&&s.createElement("li",{className:r.css(i.default.labelGroupListItem)},s.createElement(o.Label,{isOverflowLabel:!0,onClick:this.toggleCollapse,className:r.css(h&&n.default.modifiers.compact)},Z?v:w)),O&&s.createElement("li",{className:r.css(i.default.labelGroupListItem)},O),_&&I&&s.createElement("li",{className:r.css(i.default.labelGroupListItem,i.default.modifiers.textarea)},s.createElement("textarea",Object.assign({className:r.css(i.default.labelGroupTextarea),rows:1,tabIndex:0},T))))),p=s.createElement("div",{className:r.css(i.default.labelGroupClose)},s.createElement(c.Button,{variant:"plain","aria-label":b,onClick:C,id:`remove_group_${e}`,"aria-labelledby":`remove_group_${e} ${e}`},s.createElement(m.default,{"aria-hidden":"true"})));return s.createElement("div",{className:r.css(i.default.labelGroup,d,a&&i.default.modifiers.category,y&&i.default.modifiers.vertical,_&&i.default.modifiers.editable)},s.createElement("div",{className:r.css(i.default.labelGroupMain)},u),f&&p)};return 0===S&&void 0===O?null:s.createElement(p.GenerateId,null,(e=>R(this.props.id||e)))}}a.e=f,f.displayName="LabelGroup",f.defaultProps={expandedText:"Show Less",collapsedText:"${remaining} more",categoryName:"",defaultIsOpen:!1,numLabels:3,isClosable:!1,isCompact:!1,onClick:e=>{},closeBtnAriaLabel:"Close label group",tooltipPosition:"top","aria-label":"Label group category",isVertical:!1,isEditable:!1,hasEditableTextArea:!1}},11306:(e,a,t)=>{t.d(a,{Ws:()=>s,LZ:()=>i,ZP:()=>n});var l=t(40400);const s={name:"ArrowRightIcon",height:512,width:448,svgPath:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",yOffset:0,xOffset:0},i=(0,l.IU)(s),n=i},63732:(e,a,t)=>{t.d(a,{hh:()=>s,ZK:()=>i,ZP:()=>n});var l=t(40400);const s={name:"AutomationIcon",height:1024,width:1024,svgPath:"M768,256 L768,257.4 C765.102556,256.827424 762.153196,256.559301 759.2,256.6 C705.189545,255.686899 652.247869,271.702281 607.8,302.4 C591.952568,312.712568 582.951533,330.814358 584.293158,349.674109 C585.634783,368.53386 597.107623,385.179201 614.255294,393.144598 C631.402965,401.109995 651.522926,399.14007 666.8,388 C693.450143,369.582634 725.210685,359.998506 757.6,360.6 C761.083449,360.639748 764.563612,360.372043 768,359.8 L768,360.2 C851.8,360.2 920,428.4 920,512.1 C919.932562,571.254743 885.622089,625.020813 832,650 L832,760.2 C942.4,731.8 1024,631.6 1024,512.3 C1024,370.6 909.4,256 768,256 M746.6,452 C731.4,445.8 718.4,448.4 707.8,459.8 L635.2,531.8 L619.2,547.8 L367.6,292.9 C329,260.9 304.6,256 256,256 C114.6,256 0,371.5 0,512.8 C0,654.1 114.6,768 256,768 C304,768 344.2,750.9 380,722.9 L379.4,722.5 L384.8,718.9 C400.216562,708.213968 408.692351,690.060567 406.986867,671.380284 C405.281384,652.700001 393.658366,636.381592 376.561578,628.663984 C359.46479,620.946375 339.538112,623.023033 324.4,634.1 C301.295896,650.587389 274.106741,660.41146 245.8,662.5 C163.2,661.4 104,595.8 104,512.8 C104,430.4 165.8,363.3 247.6,360.9 L252.2,360.9 C253,361.1 253.8,360.9 254.4,361.1 L254.8,361.1 C269.4,360.9 292.6,366.3 312.6,382.3 L546.6,620.6 L458.8,708.4 C447.4,719.6 444.8,732.2 451,746.8 C457.2,761.6 468.2,768 483.8,768 L732.6,768 C742.2,768 750.6,765.4 757.6,758.4 C764.417003,751.876224 768.25027,742.835499 768.200488,733.4 L768.200488,484.8 C768.200488,469.2 761,458.2 746.6,452",yOffset:0,xOffset:0},i=(0,l.IU)(s),n=i},15914:(e,a,t)=>{t.d(a,{CE:()=>s,FM:()=>i,ZP:()=>n});var l=t(40400);const s={name:"CubeIcon",height:512,width:512,svgPath:"M239.1 6.3l-208 78c-18.7 7-31.1 25-31.1 45v225.1c0 18.2 10.3 34.8 26.5 42.9l208 104c13.5 6.8 29.4 6.8 42.9 0l208-104c16.3-8.1 26.5-24.8 26.5-42.9V129.3c0-20-12.4-37.9-31.1-44.9l-208-78C262 2.2 250 2.2 239.1 6.3zM256 68.4l192 72v1.1l-192 78-192-78v-1.1l192-72zm32 356V275.5l160-65v133.9l-160 80z",yOffset:0,xOffset:0},i=(0,l.IU)(s),n=i},69507:(e,a,t)=>{t.d(a,{_g:()=>s,OX:()=>i,ZP:()=>n});var l=t(40400);const s={name:"PortIcon",height:1024,width:960,svgPath:"M385.2,430.2 C382.8,423.7 373.8,423.2 370.6,429.3 L264.8,631.8 C262,637.1 256.6,640 250.6,640 L0,640 L0,512 L177.9,512 C180.9,512 183.6,510.6 185,508 L377.4,139.7 C381.4,132 387.7,128 395.4,128 C403.1,128 410.8,133.9 413.9,141.9 L588.1,606.7 C590.5,613 599,613.7 602.5,608 L731.7,392.5 C734.6,387.7 739.8,384 745.4,384 L960,384 L960,512 L813.4,512 C810.6,512 808,514.2 806.5,516.6 L584.2,887.2 C581,892.5 576.4,896 570.2,896 C564,896 558,891.3 555.5,884.6 L385.2,430.2 Z",yOffset:0,xOffset:0},i=(0,l.IU)(s),n=i},77669:(e,a,t)=>{a.__esModule=!0,a.TimesCircleIconConfig={name:"TimesCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z",yOffset:0,xOffset:0},a.TimesCircleIcon=t(35183).createIcon(a.TimesCircleIconConfig),a.default=a.TimesCircleIcon},52837:(e,a,t)=>{t.d(a,{Z:()=>C});var l=t(63732),s=t(15914),i=t(26407),n=t(99332),r=t(69507),c=t(45697),o=t.n(c),d=t(93264),m=t.n(d),u=t(30893),p=t(86896),f=t(42293),h=function(e){var a=e.icon,t=e.text;return m().createElement(f.Label,{icon:a,variant:"outline",color:"blue",isCompact:!0},t)};h.propTypes={icon:o().object,text:o().bool};const b=h;var g=function(e){var a,t=e.labelList,c=(0,p.Z)(),o=(a=t.map((function(e){return e.id})),Object.entries(a.reduce((function(e,a){return e[a]=(e[a]||0)+1,e}),{})).sort((function(e,a){return a[1]-e[1]})));return m().createElement(i.e,{numLabels:1,isCompact:!0},o.map((function(e){return function(e){return[m().createElement(b,{icon:m().createElement(l.ZP,null),text:c.formatMessage(u.Z.availability)}),m().createElement(b,{icon:m().createElement(n.ZP,null),text:c.formatMessage(u.Z.security)}),m().createElement(b,{icon:m().createElement(s.ZP,null),text:c.formatMessage(u.Z.stability)}),m().createElement(b,{icon:m().createElement(r.ZP,null),text:c.formatMessage(u.Z.performance)})][e]}(Number(e[0]-1))})))};g.propTypes={labelList:o().array,isCompact:o().bool},g.defaultProps={isCompact:!0};const C=g},92383:(e,a,t)=>{t.r(a),t.d(a,{default:()=>O});var l=t(70885),s=t(32203),i=t(70401),n=t(70),r=t(42744),c=t(22938),o=t(93264),d=t.n(o),m=t(46891),u=t(34702),p=t(62394),f=t(49734),h=t(11306),b=t(52837),g=t(75662),C=t(52202),E=t(87516),v=t(30893),L=t(86896),x=function(e){var a=e.name,t=e.categories,l=e.impacted_systems_count,i=e.description,n=e.has_incident,r=e.reboot_required,o=e.slug,m=(0,L.Z)();return d().createElement(s.Z,{isFlat:!0,isPlain:!0,className:"adv-c-card-pathway adv__background--global-100"},d().createElement(p.e,{className:"body"},d().createElement(c.Text,{className:"pf-u-pb-sm pf-u-font-weight-bold"},a),d().createElement(b.Z,{key:a,labelList:t})," ",d().createElement(g.Link,{to:"/recommendations/pathways/systems/".concat(o),className:"pf-u-font-size-sm"},m.formatMessage(v.Z.topicCardSystemsaffected,{systems:l}))),d().createElement(p.e,{className:"body pf-u-font-size-sm"},i),d().createElement(p.e,{className:"body pf-u-font-size-sm"},n&&d().createElement(E.Z,{rule:{tags:"incident"},isCompact:!0})," ",(0,C.k)(r)),d().createElement(f.e,{className:"footer pf-u-font-size-sm"},d().createElement(g.Link,{to:"/recommendations/pathways/".concat(o)},"".concat(m.formatMessage(v.Z.viewPathway)," "),d().createElement(h.ZP,null))))},N=t(60485),y=t(45697),_=t.n(y),I=t(8377),T=function(){var e,a,t,p=(0,L.Z)(),f=(0,o.useState)(JSON.parse(localStorage.getItem("advisor_pathwayspanel_expanded")||"true")),h=(0,l.Z)(f,2),b=h[0],g=h[1],C=(0,I.Lv)({limit:3}),E=C.data,y=C.isLoading,_=C.isFetching,T=C.isError;return y?d().createElement(m.Z,null):d().createElement(s.Z,{className:"adv-c-card adv-c-card-pathways-panel",id:"adv-c-card-pathwayspanel",isExpanded:b},d().createElement(i.O,{onExpand:function(){g(!b),localStorage.setItem("advisor_pathwayspanel_expanded",!b)},toggleButtonProps:{id:"ins-c-advisor__card-title--pathwayspanel-toggle-button","aria-label":"Details","aria-labelledby":"ins-c-advisor__card-title--pathwayspanel toggle-button"}},d().createElement(n.l,null,d().createElement(N.D,{headingLevel:"h2",size:"lg"},p.formatMessage(v.Z.improveRecommended)))),d().createElement(r.K,null,_?d().createElement(m.Z,null):!T&&null!==(e=E.data)&&void 0!==e&&e.length?d().createElement(c.Grid,{md:1===(null===(a=E.data)||void 0===a?void 0:a.length)?8:2===(null===(t=E.data)||void 0===t?void 0:t.length)?6:4,sm:12},E.data.map((function(e){return d().createElement(c.GridItem,{key:e.name},d().createElement(x,e))}))):d().createElement(u.Z,{icon:"none",text:p.formatMessage(v.Z.noPathways)})))};T.propTypes={className:_().string};const O=T}}]);