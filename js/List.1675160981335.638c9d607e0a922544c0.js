(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[6842],{2095:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.Card=a.CardContext=void 0;const s=t(70655),r=s.__importStar(t(93264)),l=s.__importDefault(t(54918)),n=t(38296),i=t(23053);a.CardContext=r.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),a.Card=e=>{var{children:t=null,id:d="",className:c="",component:o="article",isHoverable:p=!1,isCompact:f=!1,isSelectable:u=!1,isSelectableRaised:m=!1,isSelected:g=!1,isDisabledRaised:b=!1,isFlat:h=!1,isExpanded:_=!1,isRounded:v=!1,isLarge:y=!1,isFullHeight:C=!1,isPlain:x=!1,ouiaId:I,ouiaSafe:O=!0,hasSelectableInput:S=!1,selectableInputAriaLabel:E,onSelectableInputChange:N=(()=>{})}=e,j=s.__rest(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const R=o,P=i.useOUIAProps(a.Card.displayName,I,O),[w,H]=r.useState(""),[F,Z]=r.useState();f&&y&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),y=!1);const k=r.useRef(!1);return r.useEffect((()=>{E?Z({"aria-label":E}):w?Z({"aria-labelledby":w}):S&&!k.current&&(Z({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[S,E,w]),r.createElement(a.CardContext.Provider,{value:{cardId:d,registerTitleId:e=>{H(e),k.current=!!e},isExpanded:_}},S&&r.createElement("input",Object.assign({className:"pf-screen-reader",id:`${d}-input`},F,{type:"checkbox",checked:g,onChange:e=>N(d,e),disabled:b,tabIndex:-1})),r.createElement(R,Object.assign({id:d,className:n.css(l.default.card,f&&l.default.modifiers.compact,_&&l.default.modifiers.expanded,h&&l.default.modifiers.flat,v&&l.default.modifiers.rounded,y&&l.default.modifiers.displayLg,C&&l.default.modifiers.fullHeight,x&&l.default.modifiers.plain,b?n.css(l.default.modifiers.nonSelectableRaised):m?n.css(l.default.modifiers.selectableRaised,g&&l.default.modifiers.selectedRaised):u||p?n.css(l.default.modifiers.selectable,g&&l.default.modifiers.selected):"",c),tabIndex:u||m?"0":void 0},j,P),t))},a.Card.displayName="Card"},85962:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.CardBody=void 0;const s=t(70655),r=s.__importStar(t(93264)),l=s.__importDefault(t(54918)),n=t(38296);a.CardBody=e=>{var{children:a=null,className:t="",component:i="div",isFilled:d=!0}=e,c=s.__rest(e,["children","className","component","isFilled"]);const o=i;return r.createElement(o,Object.assign({className:n.css(l.default.cardBody,!d&&l.default.modifiers.noFill,t)},c),a)},a.CardBody.displayName="CardBody"},54918:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>s}),t(80598);const s={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},89376:(e,a,t)=>{"use strict";t.d(a,{Z:()=>c});var s=t(85893),r=t(94184),l=t.n(r),n=t(93264);const i=t.n(n)().createContext("light");var d=function(){return d=Object.assign||function(e){for(var a,t=1,s=arguments.length;t<s;t++)for(var r in a=arguments[t])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e},d.apply(this,arguments)};const c=function(e){var a=e.className,t=e.children,r=function(e,a){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&a.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)a.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(t[s[r]]=e[s[r]])}return t}(e,["className","children"]),n=l()(a,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,s.jsx)(i.Consumer,{children:function(e){var a,i;void 0===e&&(e="light");var c=l()(((a={})["pf-m-".concat(e,"-200")]="dark"===e,a),((i={})["pf-m-light"]="light"===e,i));return(0,s.jsx)("section",d({},r,{className:"".concat(n," ").concat(c),"widget-type":"InsightsPageHeader"},{children:t}))}})}},39173:(e,a,t)=>{"use strict";t.d(a,{Z:()=>d});var s=t(85893),r=t(94184),l=t.n(r),n=t(22938),i=function(){return i=Object.assign||function(e){for(var a,t=1,s=arguments.length;t<s;t++)for(var r in a=arguments[t])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e},i.apply(this,arguments)};const d=function(e){var a=e.className,t=e.title,r=l()(a);return(0,s.jsx)(n.Title,i({headingLevel:"h1",size:"2xl",className:r,"widget-type":"InsightsPageHeaderTitle"},{children:t}))}},46891:(e,a,t)=>{"use strict";t.d(a,{Z:()=>d});var s=t(2095),r=t(85962),l=t(24561),n=t(93264),i=t.n(n);const d=function(){return i().createElement(s.Card,null,i().createElement(r.CardBody,null,i().createElement(l.aV,null)))}},82728:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>f});var s=t(89376),r=t(39173),l=t(93264),n=t.n(l),i=t(46891),d=t(30893),c=t(86896),o=(0,l.lazy)((function(){return Promise.all([t.e(6545),t.e(3328),t.e(2229),t.e(3320),t.e(4093),t.e(9823),t.e(2280),t.e(3993)]).then(t.bind(t,49659))})),p=function(){var e=(0,c.Z)();return document.title=e.formatMessage(d.Z.documentTitle,{subnav:d.Z.systems.defaultMessage}),n().createElement(n().Fragment,null,n().createElement(s.Z,null,n().createElement(r.Z,{title:"".concat(e.formatMessage(d.Z.insightsHeader)," ").concat(e.formatMessage(d.Z.systems).toLowerCase())})),n().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section"},n().createElement(l.Suspense,{fallback:n().createElement(i.Z,null)},n().createElement(o,null))))};p.displayName="systems-list";const f=p},80598:()=>{}}]);
//# sourceMappingURL=../sourcemaps/List.c99d7f8a5c197b088273ba7607606a3b.js.map