"use strict";(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[7649],{2095:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Card=t.CardContext=void 0;const n=a(70655),l=n.__importStar(a(93264)),r=n.__importDefault(a(54918)),d=a(38296),c=a(23053);t.CardContext=l.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),t.Card=e=>{var{children:a=null,id:i="",className:o="",component:s="article",isHoverable:u=!1,isCompact:m=!1,isSelectable:p=!1,isSelectableRaised:f=!1,isSelected:b=!1,isDisabledRaised:h=!1,isFlat:E=!1,isExpanded:g=!1,isRounded:_=!1,isLarge:C=!1,isFullHeight:y=!1,isPlain:v=!1,ouiaId:R,ouiaSafe:x=!0,hasSelectableInput:I=!1,selectableInputAriaLabel:S,onSelectableInputChange:F=(()=>{})}=e,N=n.__rest(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const w=s,H=c.useOUIAProps(t.Card.displayName,R,x),[P,L]=l.useState(""),[k,B]=l.useState();m&&C&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),C=!1);const O=l.useRef(!1);return l.useEffect((()=>{S?B({"aria-label":S}):P?B({"aria-labelledby":P}):I&&!O.current&&(B({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[I,S,P]),l.createElement(t.CardContext.Provider,{value:{cardId:i,registerTitleId:e=>{L(e),O.current=!!e},isExpanded:g}},I&&l.createElement("input",Object.assign({className:"pf-screen-reader",id:`${i}-input`},k,{type:"checkbox",checked:b,onChange:e=>F(i,e),disabled:h,tabIndex:-1})),l.createElement(w,Object.assign({id:i,className:d.css(r.default.card,m&&r.default.modifiers.compact,g&&r.default.modifiers.expanded,E&&r.default.modifiers.flat,_&&r.default.modifiers.rounded,C&&r.default.modifiers.displayLg,y&&r.default.modifiers.fullHeight,v&&r.default.modifiers.plain,h?d.css(r.default.modifiers.nonSelectableRaised):f?d.css(r.default.modifiers.selectableRaised,b&&r.default.modifiers.selectedRaised):p||u?d.css(r.default.modifiers.selectable,b&&r.default.modifiers.selected):"",o),tabIndex:p||f?"0":void 0},N,H),a))},t.Card.displayName="Card"},85962:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CardBody=void 0;const n=a(70655),l=n.__importStar(a(93264)),r=n.__importDefault(a(54918)),d=a(38296);t.CardBody=e=>{var{children:t=null,className:a="",component:c="div",isFilled:i=!0}=e,o=n.__rest(e,["children","className","component","isFilled"]);const s=c;return l.createElement(s,Object.assign({className:d.css(r.default.cardBody,!i&&r.default.modifiers.noFill,a)},o),t)},t.CardBody.displayName="CardBody"},54918:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n}),a.e(598).then(a.t.bind(a,80598,23));const n={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"}}},46891:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(2095),l=a(85962),r=a(24561),d=a(93264),c=a.n(d);const i=function(){return c().createElement(c().Fragment,null,c().createElement(n.Card,null,c().createElement(l.CardBody,null,c().createElement(r.aV,null))))}},51254:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=a(93264),l=a.n(n),r=a(75662),d=a(46891),c=(0,n.lazy)((function(){return Promise.all([a.e(3336),a.e(8307),a.e(1358),a.e(1580),a.e(6842)]).then(a.bind(a,93294))})),i=(0,n.lazy)((function(){return Promise.all([a.e(6692),a.e(6991),a.e(4474),a.e(753),a.e(2904),a.e(2313)]).then(a.bind(a,56486))})),o=(0,n.lazy)((function(){return Promise.all([a.e(6692),a.e(7679),a.e(3336),a.e(8237),a.e(8307),a.e(5452),a.e(4474),a.e(2904),a.e(1580),a.e(1177)]).then(a.bind(a,89578))})),s=(0,n.lazy)((function(){return a.e(1198).then(a.bind(a,86967))})),u=(0,n.lazy)((function(){return a.e(5748).then(a.bind(a,49011))})),m=function(e){var t=e.children;return l().createElement(n.Suspense,{fallback:l().createElement(d.Z,null)},t)};const p=function(){return l().createElement(l().Fragment,null,l().createElement(r.Switch,null,l().createElement(r.Route,{exact:!0,path:"/recommendations",component:function(){return l().createElement(m,null,l().createElement(c,null))}}),l().createElement(r.Route,{exact:!0,path:"/recommendations/by_id/:id",component:function(){return l().createElement(m,null,l().createElement(c,null))}}),l().createElement(r.Route,{exact:!0,path:"/recommendations/pathways",component:function(){return l().createElement(m,null,l().createElement(c,null))}}),l().createElement(r.Route,{exact:!0,path:"/recommendations/pathways/:id",component:function(){return l().createElement(m,null,l().createElement(o,null))}}),l().createElement(r.Route,{exact:!0,path:"/recommendations/pathways/systems/:id",component:function(){return l().createElement(m,null,l().createElement(o,null))}}),l().createElement(r.Route,{exact:!0,path:"/recommendations/:id",component:function(){return l().createElement(m,null,l().createElement(i,null))}}),l().createElement(r.Route,{exact:!0,path:"/recommendations/classic/:id/:classicId/",component:function(){return l().createElement(m,null,l().createElement(u,null))}}),l().createElement(r.Route,{path:"/recommendations/by_id/:id/:inventoryId/",component:function(){return l().createElement(m,null,l().createElement(s,null))}}),l().createElement(r.Route,{path:"/recommendations/:id/:inventoryId/",component:function(){return l().createElement(m,null,l().createElement(s,null)," ")}}),l().createElement(r.Redirect,{path:"*",to:"/recommendations",push:!0})))}}}]);
//# sourceMappingURL=../sourcemaps/Recs.e4a8eff7142382e13ab184b33b794ce9.js.map