"use strict";(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[3056],{28883:(e,t,n)=>{n.d(t,{O:()=>m});var s=n(70655),a=n(93264),l=n(36912),i=n(62472);const o=e=>{var{children:t,tabContentRef:n,ouiaId:l,parentInnerRef:r,ouiaSafe:d}=e,c=(0,s.__rest)(e,["children","tabContentRef","ouiaId","parentInnerRef","ouiaSafe"]);const p=c.href?"a":"button";return a.createElement(p,Object.assign({ref:r},(0,i.dp)(o.displayName,l,d),c),t)};o.displayName="TabButton";var r=n(10962),d=n(38296),c=n(16545);const p=e=>{var{title:t,eventKey:n,tabContentRef:i,id:p,tabContentId:m,className:f="",ouiaId:b,isDisabled:u,isAriaDisabled:h,inoperableEvents:x=["onClick","onKeyPress"],href:g,innerRef:v,tooltip:O}=e,y=(0,s.__rest)(e,["title","eventKey","tabContentRef","id","tabContentId","className","ouiaId","isDisabled","isAriaDisabled","inoperableEvents","href","innerRef","tooltip"]);const S=x.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:e=>{e.preventDefault()}})),{}),{mountOnEnter:E,localActiveKey:_,unmountOnExit:L,uniqueId:I,handleTabClick:K}=a.useContext(r.RL);let T=m?`${m}`:`pf-tab-section-${n}-${p||I}`;(E||L)&&n!==_&&(T=void 0);const N=Boolean(!g),C=a.createElement(o,Object.assign({parentInnerRef:v,className:(0,d.css)(l.Z.tabsLink,u&&g&&l.Z.modifiers.disabled,h&&l.Z.modifiers.ariaDisabled),disabled:N?u:null,"aria-disabled":u||h,tabIndex:u?N?null:-1:h?null:void 0,onClick:e=>K(e,n,i)},h?S:null,{id:`pf-tab-${n}-${p||I}`,"aria-controls":T,tabContentRef:i,ouiaId:b,href:g},y),t);return a.createElement("li",{className:(0,d.css)(l.Z.tabsItem,n===_&&l.Z.modifiers.current,f)},O?a.createElement(c.u,Object.assign({},O.props),C):C)},m=a.forwardRef(((e,t)=>a.createElement(p,Object.assign({innerRef:t},e))));m.displayName="Tab"},79770:(e,t,n)=>{n.d(t,{I:()=>p});var s=n(70655),a=n(93264),l=n(57110),i=n(38296),o=n(62472),r=n(10962);const d={default:"",light300:l.Z.modifiers.light_300},c=e=>{var{id:t,activeKey:n,"aria-label":l,child:c,children:p,className:m,eventKey:f,innerRef:b,ouiaId:u,ouiaSafe:h}=e,x=(0,s.__rest)(e,["id","activeKey","aria-label","child","children","className","eventKey","innerRef","ouiaId","ouiaSafe"]);if(p||c){let e;return e=l?null:p?`pf-tab-${f}-${t}`:`pf-tab-${c.props.eventKey}-${t}`,a.createElement(r.y1,null,(({variant:s})=>a.createElement("section",Object.assign({ref:b,hidden:p?null:c.props.eventKey!==n,className:p?(0,i.css)("pf-c-tab-content",m,d[s]):(0,i.css)("pf-c-tab-content",c.props.className,d[s]),id:p?t:`pf-tab-section-${c.props.eventKey}-${t}`,"aria-label":l,"aria-labelledby":e,role:"tabpanel",tabIndex:0},(0,o.dp)("TabContent",u,h),x),p||c.props.children)))}return null},p=a.forwardRef(((e,t)=>a.createElement(c,Object.assign({},e,{innerRef:t}))))},29873:(e,t,n)=>{n.d(t,{T:()=>o});var s=n(70655),a=n(93264),l=n(38296),i=n(36912);const o=e=>{var{children:t,className:n=""}=e,o=(0,s.__rest)(e,["children","className"]);return a.createElement("span",Object.assign({className:(0,l.css)(i.Z.tabsItemText,n)},o),t)};o.displayName="TabTitleText"},14638:(e,t,n)=>{n.d(t,{n:()=>s,m:()=>g});var s,a=n(70655),l=n(93264),i=n(36912),o=n(83318),r=n(38296),d=n(71973),c=n(93174),p=n(80164),m=n(79770),f=n(10962),b=n(47173),u=n(62472),h=n(41724);!function(e){e.div="div",e.nav="nav"}(s||(s={}));const x={default:"",light300:i.Z.modifiers.colorSchemeLight_300};class g extends l.Component{constructor(e){super(e),this.tabList=l.createRef(),this.scrollTimeout=null,this.handleScrollButtons=()=>{clearTimeout(this.scrollTimeout),this.scrollTimeout=setTimeout((()=>{const e=this.tabList.current;let t=!0,n=!0,s=!1;if(e&&!this.props.isVertical){const a=!(0,p.Zd)(e,e.firstChild,!1),l=!(0,p.Zd)(e,e.lastChild,!1);s=a||l,t=!a,n=!l}this.setState({showScrollButtons:s,disableLeftScrollButton:t,disableRightScrollButton:n})}),100)},this.scrollLeft=()=>{if(this.tabList.current){const e=this.tabList.current,t=Array.from(e.children);let n,s,a;for(a=0;a<t.length&&!n;a++)(0,p.Zd)(e,t[a],!1)&&(n=t[a],s=t[a-1]);s&&(e.scrollLeft-=s.scrollWidth)}},this.scrollRight=()=>{if(this.tabList.current){const e=this.tabList.current,t=Array.from(e.children);let n,s;for(let a=t.length-1;a>=0&&!n;a--)(0,p.Zd)(e,t[a],!1)&&(n=t[a],s=t[a+1]);s&&(e.scrollLeft+=s.scrollWidth)}},this.state={showScrollButtons:!1,disableLeftScrollButton:!0,disableRightScrollButton:!0,shownKeys:void 0!==this.props.defaultActiveKey?[this.props.defaultActiveKey]:[this.props.activeKey],uncontrolledActiveKey:this.props.defaultActiveKey,uncontrolledIsExpandedLocal:this.props.defaultIsExpanded,ouiaStateId:(0,u.ql)(g.displayName)},this.props.isVertical&&void 0!==this.props.expandable&&(this.props.toggleAriaLabel||this.props.toggleText||console.error("Tabs:","toggleAriaLabel or the toggleText prop is required to make the toggle button accessible"))}handleTabClick(e,t,n){const{shownKeys:s}=this.state,{onSelect:a,defaultActiveKey:i}=this.props;void 0!==i?this.setState({uncontrolledActiveKey:t}):a(e,t),n&&(l.Children.toArray(this.props.children).map((e=>e)).filter((e=>e.props&&e.props.tabContentRef&&e.props.tabContentRef.current)).forEach((e=>e.props.tabContentRef.current.hidden=!0)),n.current&&(n.current.hidden=!1)),this.props.mountOnEnter&&this.setState({shownKeys:s.concat(t)})}componentDidMount(){this.props.isVertical||(p.Nq&&window.addEventListener("resize",this.handleScrollButtons,!1),this.handleScrollButtons())}componentWillUnmount(){this.props.isVertical||p.Nq&&window.removeEventListener("resize",this.handleScrollButtons,!1),clearTimeout(this.scrollTimeout)}componentDidUpdate(e){const{activeKey:t,mountOnEnter:n}=this.props,{shownKeys:s}=this.state;e.activeKey!==t&&n&&s.indexOf(t)<0&&this.setState({shownKeys:s.concat(t)})}render(){const e=this.props,{className:t,children:n,activeKey:v,defaultActiveKey:O,id:y,isFilled:S,isSecondary:E,isVertical:_,isBox:L,leftScrollAriaLabel:I,rightScrollAriaLabel:K,"aria-label":T,component:N,ouiaId:C,ouiaSafe:Z,mountOnEnter:A,unmountOnExit:B,usePageInsets:R,inset:w,variant:k,expandable:$,isExpanded:M,defaultIsExpanded:X,toggleText:j,toggleAriaLabel:D,onToggle:P}=e,q=(0,a.__rest)(e,["className","children","activeKey","defaultActiveKey","id","isFilled","isSecondary","isVertical","isBox","leftScrollAriaLabel","rightScrollAriaLabel","aria-label","component","ouiaId","ouiaSafe","mountOnEnter","unmountOnExit","usePageInsets","inset","variant","expandable","isExpanded","defaultIsExpanded","toggleText","toggleAriaLabel","onToggle"]),{showScrollButtons:V,disableLeftScrollButton:z,disableRightScrollButton:F,shownKeys:W,uncontrolledActiveKey:U,uncontrolledIsExpandedLocal:G}=this.state,H=l.Children.toArray(n).filter(Boolean).filter((e=>!e.props.isHidden)),J=y||(0,p.Ki)(),Q=N===s.nav?"nav":"div",Y=void 0!==O?U:v,ee=void 0!==X?G:M,te=e=>{void 0===M?this.setState({uncontrolledIsExpandedLocal:e}):P(e)};return l.createElement(f.c_,{value:{variant:k,mountOnEnter:A,unmountOnExit:B,localActiveKey:Y,uniqueId:J,handleTabClick:(...e)=>this.handleTabClick(...e)}},l.createElement(Q,Object.assign({"aria-label":T,className:(0,r.css)(i.Z.tabs,S&&i.Z.modifiers.fill,E&&i.Z.modifiers.secondary,_&&i.Z.modifiers.vertical,_&&$&&(0,p.wt)($,i.Z),_&&$&&ee&&i.Z.modifiers.expanded,L&&i.Z.modifiers.box,V&&!_&&i.Z.modifiers.scrollable,R&&i.Z.modifiers.pageInsets,(0,p.wt)(w,i.Z),x[k],t)},(0,u.dp)(g.displayName,void 0!==C?C:this.state.ouiaStateId,Z),{id:y&&y},q),$&&_&&l.createElement(h.w,null,(e=>l.createElement("div",{className:(0,r.css)(i.Z.tabsToggle)},l.createElement("div",{className:(0,r.css)(i.Z.tabsToggleButton)},l.createElement(b.zx,{onClick:()=>te(!ee),variant:"plain","aria-label":D,"aria-expanded":ee,id:`${e}-button`,"aria-labelledby":`${e}-text ${e}-button`},l.createElement("span",{className:(0,r.css)(i.Z.tabsToggleIcon)},l.createElement(c.ZP,{"arian-hidden":"true"})),j&&l.createElement("span",{className:(0,r.css)("pf-c-tabs__toggle-text"),id:`${e}-text`},j)))))),l.createElement("button",{className:(0,r.css)(i.Z.tabsScrollButton,E&&o.default.modifiers.secondary),"aria-label":I,onClick:this.scrollLeft,disabled:z,"aria-hidden":z},l.createElement(d.ZP,null)),l.createElement("ul",{className:(0,r.css)(i.Z.tabsList),ref:this.tabList,onScroll:this.handleScrollButtons},H),l.createElement("button",{className:(0,r.css)(i.Z.tabsScrollButton,E&&o.default.modifiers.secondary),"aria-label":K,onClick:this.scrollRight,disabled:F,"aria-hidden":F},l.createElement(c.ZP,null))),H.filter((e=>e.props.children&&!(B&&e.props.eventKey!==Y)&&!(A&&-1===W.indexOf(e.props.eventKey)))).map(((e,t)=>l.createElement(m.I,{key:t,activeKey:Y,child:e,id:e.props.id||J,ouiaId:e.props.ouiaId}))))}}g.displayName="Tabs",g.defaultProps={activeKey:0,onSelect:()=>{},isFilled:!1,isSecondary:!1,isVertical:!1,isBox:!1,leftScrollAriaLabel:"Scroll left",rightScrollAriaLabel:"Scroll right",component:s.div,mountOnEnter:!1,unmountOnExit:!1,ouiaSafe:!0,variant:"default",onToggle:e=>{}}},10962:(e,t,n)=>{n.d(t,{RL:()=>s,c_:()=>a,y1:()=>l});const s=n(93264).createContext({variant:"default",mountOnEnter:!1,unmountOnExit:!1,localActiveKey:"",uniqueId:"",handleTabClick:()=>null}),a=s.Provider,l=s.Consumer},41724:(e,t,n)=>{n.d(t,{w:()=>l});var s=n(93264);let a=0;class l extends s.Component{constructor(){super(...arguments),this.id=`${this.props.prefix}${a++}`}render(){return this.props.children(this.id)}}l.displayName="GenerateId",l.defaultProps={prefix:"pf-random-id-"}},57110:(e,t,n)=>{n(56024),t.Z={modifiers:{light_300:"pf-m-light-300",padding:"pf-m-padding"},tabContent:"pf-c-tab-content",tabContentBody:"pf-c-tab-content__body"}},36912:(e,t,n)=>{n(43390),t.Z={button:"pf-c-button",modifiers:{fill:"pf-m-fill",scrollable:"pf-m-scrollable",secondary:"pf-m-secondary",noBorderBottom:"pf-m-no-border-bottom",box:"pf-m-box",vertical:"pf-m-vertical",current:"pf-m-current",colorSchemeLight_300:"pf-m-color-scheme--light-300",expandable:"pf-m-expandable",nonExpandable:"pf-m-non-expandable",expandableOnSm:"pf-m-expandable-on-sm",nonExpandableOnSm:"pf-m-non-expandable-on-sm",expandableOnMd:"pf-m-expandable-on-md",nonExpandableOnMd:"pf-m-non-expandable-on-md",expandableOnLg:"pf-m-expandable-on-lg",nonExpandableOnLg:"pf-m-non-expandable-on-lg",expandableOnXl:"pf-m-expandable-on-xl",nonExpandableOnXl:"pf-m-non-expandable-on-xl",expandableOn_2xl:"pf-m-expandable-on-2xl",nonExpandableOn_2xl:"pf-m-non-expandable-on-2xl",expanded:"pf-m-expanded",pageInsets:"pf-m-page-insets",disabled:"pf-m-disabled",ariaDisabled:"pf-m-aria-disabled",insetNone:"pf-m-inset-none",insetSm:"pf-m-inset-sm",insetMd:"pf-m-inset-md",insetLg:"pf-m-inset-lg",insetXl:"pf-m-inset-xl",inset_2xl:"pf-m-inset-2xl",insetNoneOnSm:"pf-m-inset-none-on-sm",insetSmOnSm:"pf-m-inset-sm-on-sm",insetMdOnSm:"pf-m-inset-md-on-sm",insetLgOnSm:"pf-m-inset-lg-on-sm",insetXlOnSm:"pf-m-inset-xl-on-sm",inset_2xlOnSm:"pf-m-inset-2xl-on-sm",insetNoneOnMd:"pf-m-inset-none-on-md",insetSmOnMd:"pf-m-inset-sm-on-md",insetMdOnMd:"pf-m-inset-md-on-md",insetLgOnMd:"pf-m-inset-lg-on-md",insetXlOnMd:"pf-m-inset-xl-on-md",inset_2xlOnMd:"pf-m-inset-2xl-on-md",insetNoneOnLg:"pf-m-inset-none-on-lg",insetSmOnLg:"pf-m-inset-sm-on-lg",insetMdOnLg:"pf-m-inset-md-on-lg",insetLgOnLg:"pf-m-inset-lg-on-lg",insetXlOnLg:"pf-m-inset-xl-on-lg",inset_2xlOnLg:"pf-m-inset-2xl-on-lg",insetNoneOnXl:"pf-m-inset-none-on-xl",insetSmOnXl:"pf-m-inset-sm-on-xl",insetMdOnXl:"pf-m-inset-md-on-xl",insetLgOnXl:"pf-m-inset-lg-on-xl",insetXlOnXl:"pf-m-inset-xl-on-xl",inset_2xlOnXl:"pf-m-inset-2xl-on-xl",insetNoneOn_2xl:"pf-m-inset-none-on-2xl",insetSmOn_2xl:"pf-m-inset-sm-on-2xl",insetMdOn_2xl:"pf-m-inset-md-on-2xl",insetLgOn_2xl:"pf-m-inset-lg-on-2xl",insetXlOn_2xl:"pf-m-inset-xl-on-2xl",inset_2xlOn_2xl:"pf-m-inset-2xl-on-2xl"},tabs:"pf-c-tabs",tabsItem:"pf-c-tabs__item",tabsItemIcon:"pf-c-tabs__item-icon",tabsItemText:"pf-c-tabs__item-text",tabsLink:"pf-c-tabs__link",tabsList:"pf-c-tabs__list",tabsScrollButton:"pf-c-tabs__scroll-button",tabsToggle:"pf-c-tabs__toggle",tabsToggleButton:"pf-c-tabs__toggle-button",tabsToggleIcon:"pf-c-tabs__toggle-icon",tabsToggleText:"pf-c-tabs__toggle-text"}}}]);