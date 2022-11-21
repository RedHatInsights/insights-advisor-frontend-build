(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[3645],{2095:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Card=t.CardContext=void 0;const r=a(70655),n=r.__importStar(a(93264)),l=r.__importDefault(a(54918)),d=a(38296),i=a(23053);t.CardContext=n.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),t.Card=e=>{var{children:a=null,id:c="",className:s="",component:o="article",isHoverable:p=!1,isCompact:u=!1,isSelectable:f=!1,isSelectableRaised:m=!1,isSelected:b=!1,isDisabledRaised:h=!1,isFlat:g=!1,isExpanded:y=!1,isRounded:_=!1,isLarge:C=!1,isFullHeight:v=!1,isPlain:E=!1,ouiaId:O,ouiaSafe:S=!0,hasSelectableInput:I=!1,selectableInputAriaLabel:R,onSelectableInputChange:x=(()=>{})}=e,j=r.__rest(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const P=o,w=i.useOUIAProps(t.Card.displayName,O,S),[k,D]=n.useState(""),[F,L]=n.useState();u&&C&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),C=!1);const N=n.useRef(!1);return n.useEffect((()=>{R?L({"aria-label":R}):k?L({"aria-labelledby":k}):I&&!N.current&&(L({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[I,R,k]),n.createElement(t.CardContext.Provider,{value:{cardId:c,registerTitleId:e=>{D(e),N.current=!!e},isExpanded:y}},I&&n.createElement("input",Object.assign({className:"pf-screen-reader",id:`${c}-input`},F,{type:"checkbox",checked:b,onChange:e=>x(c,e),disabled:h,tabIndex:-1})),n.createElement(P,Object.assign({id:c,className:d.css(l.default.card,u&&l.default.modifiers.compact,y&&l.default.modifiers.expanded,g&&l.default.modifiers.flat,_&&l.default.modifiers.rounded,C&&l.default.modifiers.displayLg,v&&l.default.modifiers.fullHeight,E&&l.default.modifiers.plain,h?d.css(l.default.modifiers.nonSelectableRaised):m?d.css(l.default.modifiers.selectableRaised,b&&l.default.modifiers.selectedRaised):f||p?d.css(l.default.modifiers.selectable,b&&l.default.modifiers.selected):"",s),tabIndex:f||m?"0":void 0},j,w),a))},t.Card.displayName="Card"},85962:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardBody=void 0;const r=a(70655),n=r.__importStar(a(93264)),l=r.__importDefault(a(54918)),d=a(38296);t.CardBody=e=>{var{children:t=null,className:a="",component:i="div",isFilled:c=!0}=e,s=r.__rest(e,["children","className","component","isFilled"]);const o=i;return n.createElement(o,Object.assign({className:d.css(l.default.cardBody,!c&&l.default.modifiers.noFill,a)},s),t)},t.CardBody.displayName="CardBody"},54918:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r}),a(80598);const r={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},46891:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var r=a(2095),n=a(85962),l=a(24561),d=a(93264),i=a.n(d);const c=function(){return i().createElement(r.Card,null,i().createElement(n.CardBody,null,i().createElement(l.aV,null)))}},54947:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>E});var r=a(87462),n=a(70885),l=a(45987),d=a(4942),i=a(93264),c=a.n(i),s=a(75662),o=a(46891),p=a(45697),u=a.n(p),f=["component"];function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){(0,d.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h=(0,i.lazy)((function(){return a.e(7641).then(a.bind(a,37468))})),g=(0,i.lazy)((function(){return Promise.all([a.e(3462),a.e(6692),a.e(6252),a.e(3486),a.e(3877),a.e(7120),a.e(3602),a.e(4683)]).then(a.bind(a,95413))})),y=(0,i.lazy)((function(){return Promise.all([a.e(6692),a.e(1694)]).then(a.bind(a,57710))})),_=function(e,t){var a=t.type,r=t.payload;return{setLoaded:b(b({},e),{},{loaded:!0,isInternal:r})}[a]},C=function(e){var t=e.component,a=(0,l.Z)(e,f),d=(0,i.useReducer)(_,{isInternal:!1,loaded:!1}),o=(0,n.Z)(d,2),p=o[0],u=o[1];return(0,i.useEffect)((function(){insights.chrome.auth.getUser().then((function(e){return u({type:"setLoaded",payload:e.identity.user.is_internal})}))}),[]),c().createElement(s.Route,(0,r.Z)({},a,{render:function(e){return p.loaded&&(p.isInternal?c().createElement(t,e):c().createElement(s.Redirect,{to:"/topics"}))}}))},v=function(e){return c().createElement(i.Suspense,{fallback:c().createElement(o.Z,null)},e)};C.propTypes={component:u().any};const E=function(){return c().createElement(s.Switch,null,c().createElement(s.Route,{exact:!0,path:"/topics",component:function(){return v(c().createElement(h,null))}}),c().createElement(s.Route,{exact:!0,path:"/topics/:id",component:function(){return v(c().createElement(g,null))}}),c().createElement(C,{exact:!0,path:"/topics/admin/manage",component:function(){return v(c().createElement(y,null))}}),c().createElement(s.Redirect,{path:"*",to:"/topics",push:!0}))}},80598:()=>{}}]);
//# sourceMappingURL=../sourcemaps/Topics.7a5aabc3d0ab339ad201c6a826e4a098.js.map