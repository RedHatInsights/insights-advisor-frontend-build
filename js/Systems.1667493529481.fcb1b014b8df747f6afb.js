(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[6743],{2095:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.Card=a.CardContext=void 0;const l=t(70655),d=l.__importStar(t(93264)),s=l.__importDefault(t(54918)),r=t(38296),n=t(23053);a.CardContext=d.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),a.Card=e=>{var{children:t=null,id:i="",className:c="",component:o="article",isHoverable:u=!1,isCompact:f=!1,isSelectable:p=!1,isSelectableRaised:m=!1,isSelected:b=!1,isDisabledRaised:h=!1,isFlat:_=!1,isExpanded:g=!1,isRounded:C=!1,isLarge:y=!1,isFullHeight:v=!1,isPlain:E=!1,ouiaId:I,ouiaSafe:S=!0,hasSelectableInput:x=!1,selectableInputAriaLabel:R,onSelectableInputChange:F=(()=>{})}=e,N=l.__rest(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const k=o,H=n.useOUIAProps(a.Card.displayName,I,S),[L,P]=d.useState(""),[B,O]=d.useState();f&&y&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),y=!1);const w=d.useRef(!1);return d.useEffect((()=>{R?O({"aria-label":R}):L?O({"aria-labelledby":L}):x&&!w.current&&(O({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[x,R,L]),d.createElement(a.CardContext.Provider,{value:{cardId:i,registerTitleId:e=>{P(e),w.current=!!e},isExpanded:g}},x&&d.createElement("input",Object.assign({className:"pf-screen-reader",id:`${i}-input`},B,{type:"checkbox",checked:b,onChange:e=>F(i,e),disabled:h,tabIndex:-1})),d.createElement(k,Object.assign({id:i,className:r.css(s.default.card,f&&s.default.modifiers.compact,g&&s.default.modifiers.expanded,_&&s.default.modifiers.flat,C&&s.default.modifiers.rounded,y&&s.default.modifiers.displayLg,v&&s.default.modifiers.fullHeight,E&&s.default.modifiers.plain,h?r.css(s.default.modifiers.nonSelectableRaised):m?r.css(s.default.modifiers.selectableRaised,b&&s.default.modifiers.selectedRaised):p||u?r.css(s.default.modifiers.selectable,b&&s.default.modifiers.selected):"",c),tabIndex:p||m?"0":void 0},N,H),t))},a.Card.displayName="Card"},85962:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.CardBody=void 0;const l=t(70655),d=l.__importStar(t(93264)),s=l.__importDefault(t(54918)),r=t(38296);a.CardBody=e=>{var{children:a=null,className:t="",component:n="div",isFilled:i=!0}=e,c=l.__rest(e,["children","className","component","isFilled"]);const o=n;return d.createElement(o,Object.assign({className:r.css(s.default.cardBody,!i&&s.default.modifiers.noFill,t)},c),a)},a.CardBody.displayName="CardBody"},54918:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>l}),t(80598);const l={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},46891:(e,a,t)=>{"use strict";t.d(a,{Z:()=>i});var l=t(2095),d=t(85962),s=t(24561),r=t(93264),n=t.n(r);const i=function(){return n().createElement(l.Card,null,n().createElement(d.CardBody,null,n().createElement(s.aV,null)))}},49552:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>u});var l=t(93264),d=t.n(l),s=t(75662),r=t(46891),n=(0,l.lazy)((function(){return Promise.all([t.e(7890),t.e(2792),t.e(1358),t.e(1580),t.e(6842)]).then(t.bind(t,82728))})),i=(0,l.lazy)((function(){return Promise.all([t.e(9823),t.e(1198)]).then(t.bind(t,86967))})),c=(0,l.lazy)((function(){return t.e(5748).then(t.bind(t,49011))})),o=function(e){return d().createElement(l.Suspense,{fallback:d().createElement(r.Z,null)},e)};const u=function(){return d().createElement(d().Fragment,null,d().createElement(s.Switch,null,d().createElement(s.Route,{exact:!0,path:"/systems",component:function(){return o(d().createElement(n,null))}}),d().createElement(s.Route,{exact:!0,path:"/systems/:inventoryId/",component:function(){return o(d().createElement(i,null))}}),d().createElement(s.Route,{exact:!0,path:"/systems/classic/:classicId",component:function(){return o(d().createElement(c,null))}}),d().createElement(s.Redirect,{path:"*",to:"/systems",push:!0})))}},80598:()=>{}}]);