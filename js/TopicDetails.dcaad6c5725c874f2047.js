(self.webpackChunkadvisor=self.webpackChunkadvisor||[]).push([[4683,384],{64029:(e,t,r)=>{"use strict";r.d(t,{a:()=>s});var n=r(70655),a=r(93264),o=r(44303),i=r(38296),c=r(62472);const s=e=>{var{children:t=null,className:r="","aria-label":l="Breadcrumb",ouiaId:u,ouiaSafe:d=!0}=e,p=(0,n._T)(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const m=(0,c.S$)(s.displayName,u,d);return a.createElement("nav",Object.assign({},p,{"aria-label":l,className:(0,i.i)(o.Z.breadcrumb,r)},m),a.createElement("ol",{className:o.Z.breadcrumbList},a.Children.map(t,((e,t)=>{const r=t>0;return a.isValidElement(e)?a.cloneElement(e,{showDivider:r}):e}))))};s.displayName="Breadcrumb"},32835:(e,t,r)=>{"use strict";r.d(t,{g:()=>s});var n=r(70655),a=r(93264),o=r(93174),i=r(44303),c=r(38296);const s=e=>{var{children:t=null,className:r="",to:s,isActive:l=!1,isDropdown:u=!1,showDivider:d,target:p,component:m="a",render:f}=e,b=(0,n._T)(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const v=m,h=l?"page":void 0,g=(0,c.i)(i.Z.breadcrumbLink,l&&i.Z.modifiers.current);return a.createElement("li",Object.assign({},b,{className:(0,c.i)(i.Z.breadcrumbItem,r)}),d&&a.createElement("span",{className:i.Z.breadcrumbItemDivider},a.createElement(o.ZP,null)),"button"===m&&a.createElement("button",{className:g,"aria-current":h,type:"button"},t),u&&a.createElement("span",{className:(0,c.i)(i.Z.breadcrumbDropdown)},t),f&&f({className:g,ariaCurrent:h}),s&&!f&&a.createElement(v,{href:s,target:p,className:g,"aria-current":h},t),!s&&"button"!==m&&!u&&t)};s.displayName="BreadcrumbItem"},21947:(e,t,r)=>{"use strict";r.d(t,{e:()=>f});var n=r(70655),a=r(93264),o=r(72002),i=r(83063),c=r(38296),s=r(47173),l=r(69174),u=r(75824),d=r(72781),p=r(80164),m=r(41724);class f extends a.Component{constructor(e){super(e),this.headingRef=a.createRef(),this.toggleCollapse=()=>{this.setState((e=>({isOpen:!e.isOpen,isTooltipVisible:Boolean(this.headingRef.current&&this.headingRef.current.offsetWidth<this.headingRef.current.scrollWidth)})))},this.state={isOpen:this.props.defaultIsOpen,isTooltipVisible:!1}}componentDidMount(){this.setState({isTooltipVisible:Boolean(this.headingRef.current&&this.headingRef.current.offsetWidth<this.headingRef.current.scrollWidth)})}renderLabel(e){const{categoryName:t,tooltipPosition:r}=this.props,{isTooltipVisible:n}=this.state;return n?a.createElement(u.u,{position:r,content:t},a.createElement("span",{tabIndex:0,ref:this.headingRef,className:(0,c.i)(o.Z.labelGroupLabel)},a.createElement("span",{"aria-hidden":"true",id:e},t))):a.createElement("span",{ref:this.headingRef,className:(0,c.i)(o.Z.labelGroupLabel),"aria-hidden":"true",id:e},t)}render(){const e=this.props,{categoryName:t,children:r,className:u,isClosable:f,isCompact:b,closeBtnAriaLabel:v,"aria-label":h,onClick:g,numLabels:y,expandedText:j,collapsedText:x,defaultIsOpen:O,tooltipPosition:E,isVertical:Z,isEditable:C,hasEditableTextArea:w,editableTextAreaProps:L,addLabelControl:I}=e,N=(0,n._T)(e,["categoryName","children","className","isClosable","isCompact","closeBtnAriaLabel","aria-label","onClick","numLabels","expandedText","collapsedText","defaultIsOpen","tooltipPosition","isVertical","isEditable","hasEditableTextArea","editableTextAreaProps","addLabelControl"]),{isOpen:M}=this.state,P=a.Children.toArray(r),D=P.length,T=(0,p.tJ)(x,{remaining:D-y}),S=e=>{const r=M?P:P.slice(0,y),n=a.createElement(a.Fragment,null,t&&this.renderLabel(e),a.createElement("ul",Object.assign({className:(0,c.i)(o.Z.labelGroupList)},t&&{"aria-labelledby":e},!t&&{"aria-label":h},{role:"list"},N),r.map(((e,t)=>a.createElement("li",{className:(0,c.i)(o.Z.labelGroupListItem),key:t},e))),D>y&&a.createElement("li",{className:(0,c.i)(o.Z.labelGroupListItem)},a.createElement(l._,{isOverflowLabel:!0,onClick:this.toggleCollapse,className:(0,c.i)(b&&i.Z.modifiers.compact)},M?j:T)),I&&a.createElement("li",{className:(0,c.i)(o.Z.labelGroupListItem)},I),C&&w&&a.createElement("li",{className:(0,c.i)(o.Z.labelGroupListItem,o.Z.modifiers.textarea)},a.createElement("textarea",Object.assign({className:(0,c.i)(o.Z.labelGroupTextarea),rows:1,tabIndex:0},L))))),p=a.createElement("div",{className:(0,c.i)(o.Z.labelGroupClose)},a.createElement(s.zx,{variant:"plain","aria-label":v,onClick:g,id:`remove_group_${e}`,"aria-labelledby":`remove_group_${e} ${e}`},a.createElement(d.ZP,{"aria-hidden":"true"})));return a.createElement("div",{className:(0,c.i)(o.Z.labelGroup,u,t&&o.Z.modifiers.category,Z&&o.Z.modifiers.vertical,C&&o.Z.modifiers.editable)},a.createElement("div",{className:(0,c.i)(o.Z.labelGroupMain)},n),f&&p)};return 0===D&&void 0===I?null:a.createElement(m.w,null,(e=>S(this.props.id||e)))}}f.displayName="LabelGroup",f.defaultProps={expandedText:"Show Less",collapsedText:"${remaining} more",categoryName:"",defaultIsOpen:!1,numLabels:3,isClosable:!1,isCompact:!1,onClick:e=>{},closeBtnAriaLabel:"Close label group",tooltipPosition:"top","aria-label":"Label group category",isVertical:!1,isEditable:!1,hasEditableTextArea:!1}},68340:(e,t,r)=>{"use strict";r.d(t,{q:()=>n,x:()=>l});var n,a=r(70655),o=r(93264),i=r(38296),c=r(62873),s=r(62472);!function(e){e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.p="p",e.a="a",e.small="small",e.blockquote="blockquote",e.pre="pre"}(n||(n={}));const l=e=>{var{children:t=null,className:r="",component:u=n.p,isVisitedLink:d=!1,ouiaId:p,ouiaSafe:m=!0}=e,f=(0,a._T)(e,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const b=u,v=(0,s.S$)(l.displayName,p,m);return o.createElement(b,Object.assign({},v,f,{"data-pf-content":!0,className:(0,i.i)(d&&u===n.a&&c.Z.modifiers.visited,r)}),t)};l.displayName="Text"},68774:(e,t,r)=>{"use strict";r.d(t,{D:()=>c});var n=r(70655),a=r(93264),o=r(62873),i=r(38296);const c=e=>{var{children:t,className:r="",isVisited:c=!1}=e,s=(0,n._T)(e,["children","className","isVisited"]);return a.createElement("div",Object.assign({},s,{className:(0,i.i)(o.Z.content,c&&o.Z.modifiers.visited,r)}),t)};c.displayName="TextContent"},71973:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>i,fP:()=>o,gk:()=>a});var n=r(40400);const a={name:"AngleLeftIcon",height:512,width:256,svgPath:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",yOffset:0,xOffset:0},o=(0,n.IU)(a),i=o},63732:(e,t,r)=>{"use strict";r.d(t,{ZK:()=>o,ZP:()=>i,hh:()=>a});var n=r(40400);const a={name:"AutomationIcon",height:1024,width:1024,svgPath:"M768,256 L768,257.4 C765.102556,256.827424 762.153196,256.559301 759.2,256.6 C705.189545,255.686899 652.247869,271.702281 607.8,302.4 C591.952568,312.712568 582.951533,330.814358 584.293158,349.674109 C585.634783,368.53386 597.107623,385.179201 614.255294,393.144598 C631.402965,401.109995 651.522926,399.14007 666.8,388 C693.450143,369.582634 725.210685,359.998506 757.6,360.6 C761.083449,360.639748 764.563612,360.372043 768,359.8 L768,360.2 C851.8,360.2 920,428.4 920,512.1 C919.932562,571.254743 885.622089,625.020813 832,650 L832,760.2 C942.4,731.8 1024,631.6 1024,512.3 C1024,370.6 909.4,256 768,256 M746.6,452 C731.4,445.8 718.4,448.4 707.8,459.8 L635.2,531.8 L619.2,547.8 L367.6,292.9 C329,260.9 304.6,256 256,256 C114.6,256 0,371.5 0,512.8 C0,654.1 114.6,768 256,768 C304,768 344.2,750.9 380,722.9 L379.4,722.5 L384.8,718.9 C400.216562,708.213968 408.692351,690.060567 406.986867,671.380284 C405.281384,652.700001 393.658366,636.381592 376.561578,628.663984 C359.46479,620.946375 339.538112,623.023033 324.4,634.1 C301.295896,650.587389 274.106741,660.41146 245.8,662.5 C163.2,661.4 104,595.8 104,512.8 C104,430.4 165.8,363.3 247.6,360.9 L252.2,360.9 C253,361.1 253.8,360.9 254.4,361.1 L254.8,361.1 C269.4,360.9 292.6,366.3 312.6,382.3 L546.6,620.6 L458.8,708.4 C447.4,719.6 444.8,732.2 451,746.8 C457.2,761.6 468.2,768 483.8,768 L732.6,768 C742.2,768 750.6,765.4 757.6,758.4 C764.417003,751.876224 768.25027,742.835499 768.200488,733.4 L768.200488,484.8 C768.200488,469.2 761,458.2 746.6,452",yOffset:0,xOffset:0},o=(0,n.IU)(a),i=o},15914:(e,t,r)=>{"use strict";r.d(t,{CE:()=>a,FM:()=>o,ZP:()=>i});var n=r(40400);const a={name:"CubeIcon",height:512,width:512,svgPath:"M239.1 6.3l-208 78c-18.7 7-31.1 25-31.1 45v225.1c0 18.2 10.3 34.8 26.5 42.9l208 104c13.5 6.8 29.4 6.8 42.9 0l208-104c16.3-8.1 26.5-24.8 26.5-42.9V129.3c0-20-12.4-37.9-31.1-44.9l-208-78C262 2.2 250 2.2 239.1 6.3zM256 68.4l192 72v1.1l-192 78-192-78v-1.1l192-72zm32 356V275.5l160-65v133.9l-160 80z",yOffset:0,xOffset:0},o=(0,n.IU)(a),i=o},69507:(e,t,r)=>{"use strict";r.d(t,{OX:()=>o,ZP:()=>i,_g:()=>a});var n=r(40400);const a={name:"PortIcon",height:1024,width:960,svgPath:"M385.2,430.2 C382.8,423.7 373.8,423.2 370.6,429.3 L264.8,631.8 C262,637.1 256.6,640 250.6,640 L0,640 L0,512 L177.9,512 C180.9,512 183.6,510.6 185,508 L377.4,139.7 C381.4,132 387.7,128 395.4,128 C403.1,128 410.8,133.9 413.9,141.9 L588.1,606.7 C590.5,613 599,613.7 602.5,608 L731.7,392.5 C734.6,387.7 739.8,384 745.4,384 L960,384 L960,512 L813.4,512 C810.6,512 808,514.2 806.5,516.6 L584.2,887.2 C581,892.5 576.4,896 570.2,896 C564,896 558,891.3 555.5,884.6 L385.2,430.2 Z",yOffset:0,xOffset:0},o=(0,n.IU)(a),i=o},72781:(e,t,r)=>{"use strict";r.d(t,{B9:()=>a,ZP:()=>i,xD:()=>o});var n=r(40400);const a={name:"TimesCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z",yOffset:0,xOffset:0},o=(0,n.IU)(a),i=o},44303:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n}),r(58392);const n={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},62873:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n}),r(10108);const n={content:"pf-c-content",modifiers:{visited:"pf-m-visited",plain:"pf-m-plain",overpassFont:"pf-m-overpass-font"}}},62410:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(85893),a=r(93264),o=r.n(a),i=r(35356),c=function(){return c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)},s=36e5,l=24*s,u=30*l,d=365*l,p=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},m=[{rightBound:1/0,description:function(e){return p(Math.round(e/d),"year")}},{rightBound:d,description:function(e){return p(Math.round(e/u),"month")}},{rightBound:u,description:function(e){return p(Math.round(e/l),"day")}},{rightBound:l,description:function(e){return p(Math.round(e/s),"hour")}},{rightBound:s,description:function(e){return p(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],f=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},b=function(e){return{exact:function(e){return f(e)+" UTC"},onlyDate:function(e){return f(e).slice(0,-6)},relative:function(e){return m.reduce((function(t,r){return r.rightBound>Date.now()-e.getTime()?r.description(Date.now()-e.getTime()):t}),f(e))},invalid:function(){return"Invalid date"}}[e]},v=function(e,t,r){return{exact:function(t){return b(e)(t)},onlyDate:function(t){return b(e)(t)},relative:function(a){return function(e,t,r,a){return void 0===a&&(a=""),(0,n.jsx)(i.Tooltip,c({},r,{content:(0,n.jsxs)("div",{children:[a,e]})},{children:t}))}(b("exact")(a),(0,n.jsx)("span",{children:b(e)(a)}),t,r)},invalid:function(){return"Invalid date"}}[e]};const h=function(e){var t=e.date,r=e.type,a=void 0===r?"relative":r,i=e.extraTitle,c=e.tooltipProps,s=t instanceof Date?t:new Date(t),l=null==t||"Invalid Date"===s.toString()?"invalid":a;return(0,n.jsx)(o().Fragment,{children:v(l,c,i)(s)})}},90693:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(85893),a=r(56989),o=r(35356),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},c={1:{icon:(0,n.jsx)(a.AngleDoubleDownIcon,{}),text:"Low",color:"blue"},2:{icon:(0,n.jsx)(a.EqualsIcon,{}),text:"Moderate",color:"gold"},3:{icon:(0,n.jsx)(a.AngleDoubleUpIcon,{}),text:"Important",color:"orange"},4:{icon:(0,n.jsx)(a.CriticalRiskIcon,{}),text:"Critical",color:"red"}};const s=function(e){var t=e.value,r=void 0===t?1:t,a=e.text,s=e.hideIcon,l=e.rest,u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["value","text","hideIcon","rest"]);return(0,n.jsx)(o.Label,i({},l,u,{color:c[r].color,icon:!s&&c[r].icon},{children:a||c[r].text}))}},75331:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(70885),a=r(93264),o=r.n(a),i=r(64029),c=r(32835),s=r(45697),l=r.n(s),u=r(30893),d=r(75546),p=r(86896),m=r(62012),f=r(92397),b=function(e){var t,r=e.current,s=(0,p.Z)(),l=null===(t=(0,m.useLocation)().pathname)||void 0===t?void 0:t.split("/"),b=(0,a.useState)([]),v=(0,n.Z)(b,2),h=v[0],g=v[1],y=!("recommendations"===l[1]&&4===l.length)||"pathways"===l[2],j=(0,d.m1)({ruleId:l[2]},{skip:y}),x=j.data,O=j.isFetching;return(0,a.useEffect)((function(){var e;(e=[]).push({title:"".concat(s.formatMessage(u.Z.insightsHeader)," ").concat(l[3]),navigate:"/".concat(l[3])}),y||e.push({title:null==x?void 0:x.description,navigate:"/".concat(l[1],"/").concat(l[2])}),"pathways"===l[2]&&(e=[{title:"Advisor pathways",navigate:"/recommendations/pathways"}]),g(e)}),[x]),o().createElement(o().Fragment,null,!O&&h.length>0?o().createElement(i.a,{ouiaId:"detail"},h.map((function(e,t){return o().createElement(c.g,{key:t},o().createElement(f.Z,{to:e.navigate},e.title))})),o().createElement(c.g,{isActive:!0},r)):s.formatMessage(u.Z.loading))};b.propTypes={current:l().string};const v=b},58921:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(4942),a=r(15861),o=r(87757),i=r.n(o),c=r(53446),s=r(35240),l=r(59303),u=r(71094),d=r(97109);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e){var t={date:(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc"};return"Insights-Advisor_".concat(e,"--").concat(t.date)};const b=function(){var e=(0,a.Z)(i().mark((function e(t,r,n,a,o,p,b,v){var h,g,y;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h=(null==a?void 0:a.length)&&{tags:a},o&&(h=m(m({},h),(0,d.s0)(o,p))),b((0,c.addNotification)(l.LH.pending)),e.next=6,(0,u.dX)("".concat(l._n,"/export/").concat(t,".").concat("json"===r?"json":"csv"),{},m(m(m({},n),h),v&&{display_name:v})).then((function(e){return b((0,c.addNotification)(l.LH.success)),e})).catch((function(){return b((0,c.addNotification)(l.LH.error))}));case 6:g=e.sent.data,y="json"===r?JSON.stringify(g):g,(0,s.Sv)(y,f(t),r),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),"".concat(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,r,n,a,o,i,c,s){return e.apply(this,arguments)}}()},52837:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var n=r(63732),a=r(15914),o=r(21947),i=r(99332),c=r(69507),s=r(45697),l=r.n(s),u=r(93264),d=r.n(u),p=r(30893),m=r(86896),f=r(69174),b=function(e){var t=e.icon,r=e.text;return d().createElement(f._,{icon:t,variant:"outline",color:"blue",isCompact:!0},r)};b.propTypes={icon:l().object,text:l().bool};const v=b;var h=function(e){var t,r=e.labelList,s=(0,m.Z)(),l=(t=r.map((function(e){return e.id})),Object.entries(t.reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),{})).sort((function(e,t){return t[1]-e[1]})));return d().createElement(o.e,{numLabels:1,isCompact:!0},l.map((function(e){return function(e){return[d().createElement(v,{icon:d().createElement(n.ZP,null),text:s.formatMessage(p.Z.availability)}),d().createElement(v,{icon:d().createElement(i.ZP,null),text:s.formatMessage(p.Z.security)}),d().createElement(v,{icon:d().createElement(a.ZP,null),text:s.formatMessage(p.Z.stability)}),d().createElement(v,{icon:d().createElement(c.ZP,null),text:s.formatMessage(p.Z.performance)})][e]}(Number(e[0]-1))})))};h.propTypes={labelList:l().array,isCompact:l().bool},h.defaultProps={isCompact:!0};const g=h},87516:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(75824),a=r(69174),o=r(45697),i=r.n(o),c=r(93264),s=r.n(c),l=r(30893),u=r(86896),d=function(e){var t,r=e.rule,o=e.isCompact,i=e.noMargin,c=(0,u.Z)();return s().createElement(s().Fragment,null,-1!==(null==r||null===(t=r.tags)||void 0===t?void 0:t.search("incident"))&&s().createElement(n.u,{content:c.formatMessage(l.Z.incidentTooltip),position:n.D.right},s().createElement(a._,{color:"red",className:i?null:"adv-c-label-incident",isCompact:o},c.formatMessage(l.Z.incident))),"disabled"===(null==r?void 0:r.rule_status)&&s().createElement(n.u,{content:c.formatMessage(l.Z.ruleIsDisabledTooltip),position:n.D.right},s().createElement(a._,{color:"gray",isCompact:o},c.formatMessage(l.Z.disabled))),"rhdisabled"===(null==r?void 0:r.rule_status)&&s().createElement(n.u,{content:c.formatMessage(l.Z.ruleIsDisabledTooltip),position:n.D.right},s().createElement(a._,{color:"gray",isCompact:o},c.formatMessage(l.Z.redhatDisabled))))};d.propTypes={rule:i().object,isCompact:i().bool,noMargin:i().bool},d.defaultProps={isCompact:!0};const p=d},46891:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(32203),a=r(62394),o=r(24561),i=r(93264),c=r.n(i);const s=function(){return c().createElement(n.Z,null,c().createElement(a.e,null,c().createElement(o.aV,null)))}},44788:(e,t,r)=>{"use strict";r.d(t,{Z:()=>I});var n=r(4942),a=r(15861),o=r(70885),i=r(87757),c=r.n(i),s=r(93264),l=r.n(s),u=r(59303),d=r(47173),p=r(93149),m=r(83115),f=r(59775),b=r(80236),v=r(71094),h=r(45697),g=r.n(h),y=r(92607),j=r(71355),x=r(30893),O=r(28216),E=r(86896),Z=r(77647);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=function(e){var t=e.handleModalToggle,r=e.isModalOpen,n=e.host,i=e.hosts,h=e.rule,g=e.afterFn,C=(0,E.Z)(),L=(0,O.useDispatch)(),I=function(e){return L((0,j.addNotification)(e))},N=(0,s.useState)(""),M=(0,o.Z)(N,2),P=M[0],D=M[1],T=(0,s.useState)(void 0!==n||i.length>0),S=(0,o.Z)(T,2),k=S[0],_=S[1],A=(0,Z.om)(),B=(0,o.Z)(A,1)[0],F=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={systems:i,justification:P},e.prev=1,e.next=4,(0,v.SO)("".concat(u._n,"/rule/").concat(h.rule_id,"/ack_hosts/"),{},t);case 4:!k&&I({variant:"success",dismissable:!0,timeout:!0,title:C.formatMessage(x.Z.recSuccessfullyDisabled)}),g&&g(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),I({variant:"danger",dismissable:!0,title:C.formatMessage(x.Z.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=(0,a.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("enabled"!==h.rule_status||i.length){e.next=15;break}return r=k?{type:"HOST",options:{rule:h.rule_id,system_uuid:n.id,justification:P}}:{type:"RULE",options:w({rule_id:h.rule_id},P&&{justification:P})},e.prev=2,e.next=5,B(r).unwrap();case 5:I({variant:"success",timeout:!0,dismissable:!0,title:C.formatMessage(x.Z.recSuccessfullyDisabled)}),D(""),g&&g(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),I({variant:"danger",dismissable:!0,title:C.formatMessage(x.Z.error),description:"".concat(e.t0)});case 13:e.next=16;break;case 15:F();case 16:t(!1);case 17:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return l().createElement(b.u,{variant:"small",title:C.formatMessage(x.Z.disableRule),isOpen:r,onClose:function(){t(!1),D("")},actions:[l().createElement(d.zx,{key:"confirm",variant:"primary",onClick:function(){return R()},ouiaId:"confirm"},C.formatMessage(x.Z.save)),l().createElement(d.zx,{key:"cancel",variant:"link",onClick:function(){t(!1),D("")},ouiaId:"cancel"},C.formatMessage(x.Z.cancel))]},C.formatMessage(x.Z.disableRuleBody),l().createElement(m.l,null,l().createElement(f.c,{fieldId:"blank-form"}),(void 0!==n||i.length>0)&&l().createElement(f.c,{fieldId:"disable-rule-one-system"},l().createElement(p.X,{isChecked:k,onChange:function(){_(!k)},label:i.length?C.formatMessage(x.Z.disableRuleForSystems):C.formatMessage(x.Z.disableRuleSingleSystem),id:"disable-rule-one-system",name:"disable-rule-one-system"})),l().createElement(f.c,{label:C.formatMessage(x.Z.justificationNote),fieldId:"disable-rule-justification"},l().createElement(y.oi,{type:"text",id:"disable-rule-justification","aria-describedby":"disable-rule-justification",value:P,onChange:function(e){return D(e)},onKeyDown:function(e){return"Enter"===e.key&&(e.preventDefault(),R())}}))))};L.propTypes={isModalOpen:g().bool,host:g().object,handleModalToggle:g().func,rule:g().object,afterFn:g().func,hosts:g().array},L.defaultProps={isModalOpen:!1,handleModalToggle:function(){},system:void 0,rule:{},afterFn:function(){},host:void 0,hosts:[]};const I=L},95413:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>k});var n=r(4942),a=r(93264),o=r.n(a),i=r(68340),c=r(75331),s=r(69174),l=r(46891),u=r(34702),d=r(89376),p=r(82661),m=r(83668),f=r(68774),b=r(72781),v=r(38779),h=r(85893),g=r(94184),y=r.n(g),j=r(35356),x=r(91036),O=r.n(x),E=function(){return E=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},E.apply(this,arguments)};const Z=function(e){var t,r,n=e.text,i=void 0===n?"":n,c=e.length,s=void 0===c?150:c,l=e.expandText,u=void 0===l?"Read more":l,d=e.hideExpandText,p=void 0!==d&&d,m=e.expandOnMouseOver,f=void 0!==m&&m,b=e.collapseText,v=void 0===b?"Collapse":b,g=e.className,x=e.inline,Z=e.spaceBetween,C=y()("ins-c-truncate",g,((t={})["is-inline"]=x,t),((r={})["is-block"]=!x,r)),w=i.substring(0,s),L=i.length>s,I=(0,a.useState)(!1),N=I[0],M=I[1],P=function(e){e&&e.preventDefault(),M(!N)},D=(0,h.jsx)(j.Button,E({className:"ins-c-expand-button",variant:"link",onClick:P},{children:u})),T=(0,h.jsx)(j.Button,E({className:"ins-c-collapse-button",variant:"link",onClick:P},{children:v})),S=function(e){return{__html:O()(e)}}(!1===N?"".concat(w).concat(L?"...":""):i),k=f&&{onMouseEnter:function(){return M(!0)},onMouseLeave:function(){return M(!1)}};return x?(0,h.jsxs)(o().Fragment,{children:[(0,h.jsx)("span",E({className:C,"widget-type":"InsightsTruncateInline",dangerouslySetInnerHTML:S},k)),!p&&L&&(!1===N?D:T)]}):(0,h.jsxs)(j.Stack,E({className:C},{children:[(0,h.jsx)(j.StackItem,E({},k,{children:(0,h.jsx)("span",{"widget-type":"InsightsTruncateBlock",dangerouslySetInnerHTML:S})})),!p&&L&&(0,h.jsx)(j.StackItem,E({className:y()({"pf-u-mt-sm":Z})},{children:!1===N?D:T}))]}))};var C=r(30893),w=r(28672),L=r(28216),I=r(77187),N=r(86896),M=r(62012),P=r(97109),D=r(55140);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const k=function(){var e=(0,N.Z)(),t=(0,L.useDispatch)(),r=(0,L.useSelector)((function(e){return e.filters.selectedTags})),n=(0,L.useSelector)((function(e){return e.filters.workloads})),h=(0,L.useSelector)((function(e){return e.filters.SID})),g=(0,L.useSelector)((function(e){return e.filters.recState})),y=(0,M.useParams)().id,j=(null==r?void 0:r.length)&&{tags:r};n&&(j=S(S({},j),(0,P.s0)(n,h)));var x=(0,I.Yi)(S(S({},j),{topicId:y})),O=x.data,E=void 0===O?{}:O,T=x.isLoading,k=x.isFetching,_=x.isError;(0,a.useEffect)((function(){var e=S({},g);return t((0,w.hb)({impacting:!0,rule_status:"enabled",topic:y,sort:"-total_risk",limit:10,offset:0})),function(){return t((0,w.hb)(e))}}),[]);var A=(0,D.Z)();return(0,a.useEffect)((function(){if(E&&E.name){var t="".concat(E.name," - ").concat(C.Z.topics.defaultMessage);A.updateDocumentTitle(e.formatMessage(C.Z.documentTitle,{subnav:t}))}}),[A,e,E]),o().createElement(o().Fragment,null,o().createElement(d.Z,null,(null==E?void 0:E.name)&&o().createElement(c.Z,{current:null==E?void 0:E.name,ouiaId:"details"}),!k&&o().createElement(o().Fragment,null,o().createElement(v.D,{headingLevel:"h3",size:"2xl",className:"pf-u-mb-lg"},E.name,E.featured&&o().createElement(s._,{color:"blue",className:"adv-c-label pf-m-compact",icon:o().createElement(m.ZP,null)},e.formatMessage(C.Z.featured))),o().createElement(f.D,{className:"pf-u-mt-md"},o().createElement(i.x,{component:i.q.p},o().createElement(Z,{text:E.description,length:600,expandText:e.formatMessage(C.Z.readmore),collapseText:e.formatMessage(C.Z.readless),inline:!0})))),k||T&&o().createElement(l.Z,null)),o().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section"},o().createElement(o().Fragment,null,_?o().createElement(u.Z,{icon:b.ZP,title:e.formatMessage(C.Z.topicDetailslNodetailsTitle),text:e.formatMessage(C.Z.topicDetailslNodetailsBody)}):o().createElement(o().Fragment,null,o().createElement(v.D,{headingLevel:"h3",size:"2xl",className:"pf-u-mb-lg"},e.formatMessage(C.Z.recommendations)),o().createElement(p.default,null)))))}},77412:e=>{e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}},44037:(e,t,r)=>{var n=r(98363),a=r(3674);e.exports=function(e,t){return e&&n(t,a(t),e)}},63886:(e,t,r)=>{var n=r(98363),a=r(81704);e.exports=function(e,t){return e&&n(t,a(t),e)}},85990:(e,t,r)=>{var n=r(46384),a=r(77412),o=r(34865),i=r(44037),c=r(63886),s=r(64626),l=r(278),u=r(18805),d=r(1911),p=r(58234),m=r(46904),f=r(64160),b=r(43824),v=r(29148),h=r(38517),g=r(1469),y=r(44144),j=r(56688),x=r(13218),O=r(72928),E=r(3674),Z=r(81704),C="[object Arguments]",w="[object Function]",L="[object Object]",I={};I[C]=I["[object Array]"]=I["[object ArrayBuffer]"]=I["[object DataView]"]=I["[object Boolean]"]=I["[object Date]"]=I["[object Float32Array]"]=I["[object Float64Array]"]=I["[object Int8Array]"]=I["[object Int16Array]"]=I["[object Int32Array]"]=I["[object Map]"]=I["[object Number]"]=I[L]=I["[object RegExp]"]=I["[object Set]"]=I["[object String]"]=I["[object Symbol]"]=I["[object Uint8Array]"]=I["[object Uint8ClampedArray]"]=I["[object Uint16Array]"]=I["[object Uint32Array]"]=!0,I["[object Error]"]=I[w]=I["[object WeakMap]"]=!1,e.exports=function e(t,r,N,M,P,D){var T,S=1&r,k=2&r,_=4&r;if(N&&(T=P?N(t,M,P,D):N(t)),void 0!==T)return T;if(!x(t))return t;var A=g(t);if(A){if(T=b(t),!S)return l(t,T)}else{var B=f(t),F=B==w||"[object GeneratorFunction]"==B;if(y(t))return s(t,S);if(B==L||B==C||F&&!P){if(T=k||F?{}:h(t),!S)return k?d(t,c(T,t)):u(t,i(T,t))}else{if(!I[B])return P?t:{};T=v(t,B,S)}}D||(D=new n);var R=D.get(t);if(R)return R;D.set(t,T),O(t)?t.forEach((function(n){T.add(e(n,r,N,n,t,D))})):j(t)&&t.forEach((function(n,a){T.set(a,e(n,r,N,a,t,D))}));var U=A?void 0:(_?k?m:p:k?Z:E)(t);return a(U||t,(function(n,a){U&&(n=t[a=n]),o(T,a,e(n,r,N,a,t,D))})),T}},21078:(e,t,r)=>{var n=r(62488),a=r(37285);e.exports=function e(t,r,o,i,c){var s=-1,l=t.length;for(o||(o=a),c||(c=[]);++s<l;){var u=t[s];r>0&&o(u)?r>1?e(u,r-1,o,i,c):n(c,u):i||(c[c.length]=u)}return c}},25588:(e,t,r)=>{var n=r(64160),a=r(37005);e.exports=function(e){return a(e)&&"[object Map]"==n(e)}},29221:(e,t,r)=>{var n=r(64160),a=r(37005);e.exports=function(e){return a(e)&&"[object Set]"==n(e)}},57157:(e,t,r)=>{var n=r(74318);e.exports=function(e,t){var r=t?n(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}},93147:e=>{var t=/\w*$/;e.exports=function(e){var r=new e.constructor(e.source,t.exec(e));return r.lastIndex=e.lastIndex,r}},40419:(e,t,r)=>{var n=r(62705),a=n?n.prototype:void 0,o=a?a.valueOf:void 0;e.exports=function(e){return o?Object(o.call(e)):{}}},18805:(e,t,r)=>{var n=r(98363),a=r(99551);e.exports=function(e,t){return n(e,a(e),t)}},1911:(e,t,r)=>{var n=r(98363),a=r(51442);e.exports=function(e,t){return n(e,a(e),t)}},99021:(e,t,r)=>{var n=r(85564),a=r(45357),o=r(30061);e.exports=function(e){return o(a(e,void 0,n),e+"")}},46904:(e,t,r)=>{var n=r(68866),a=r(51442),o=r(81704);e.exports=function(e){return n(e,o,a)}},51442:(e,t,r)=>{var n=r(62488),a=r(85924),o=r(99551),i=r(70479),c=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)n(t,o(e)),e=a(e);return t}:i;e.exports=c},43824:e=>{var t=Object.prototype.hasOwnProperty;e.exports=function(e){var r=e.length,n=new e.constructor(r);return r&&"string"==typeof e[0]&&t.call(e,"index")&&(n.index=e.index,n.input=e.input),n}},29148:(e,t,r)=>{var n=r(74318),a=r(57157),o=r(93147),i=r(40419),c=r(77133);e.exports=function(e,t,r){var s=e.constructor;switch(t){case"[object ArrayBuffer]":return n(e);case"[object Boolean]":case"[object Date]":return new s(+e);case"[object DataView]":return a(e,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return c(e,r);case"[object Map]":case"[object Set]":return new s;case"[object Number]":case"[object String]":return new s(e);case"[object RegExp]":return o(e);case"[object Symbol]":return i(e)}}},37285:(e,t,r)=>{var n=r(62705),a=r(35694),o=r(1469),i=n?n.isConcatSpreadable:void 0;e.exports=function(e){return o(e)||a(e)||!!(i&&e&&e[i])}},85564:(e,t,r)=>{var n=r(21078);e.exports=function(e){return null!=e&&e.length?n(e,1):[]}},56688:(e,t,r)=>{var n=r(25588),a=r(7518),o=r(31167),i=o&&o.isMap,c=i?a(i):n;e.exports=c},72928:(e,t,r)=>{var n=r(29221),a=r(7518),o=r(31167),i=o&&o.isSet,c=i?a(i):n;e.exports=c},10928:e=>{e.exports=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}},45467:()=>{},70347:()=>{},11452:()=>{},58392:()=>{},34946:()=>{},80598:()=>{},32857:()=>{},10108:()=>{},90479:()=>{},78752:()=>{},21064:()=>{},82014:()=>{},25238:()=>{},67761:()=>{},49854:()=>{},11177:()=>{}}]);