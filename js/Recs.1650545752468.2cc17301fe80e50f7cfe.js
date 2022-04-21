"use strict";(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[7649],{2095:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Card=t.CardContext=void 0;const a=n(70655),l=a.__importStar(n(93264)),i=a.__importDefault(n(62802)),r=n(38296),d=n(23053);t.CardContext=l.createContext({cardId:"",isExpanded:!1}),t.Card=e=>{var{children:n=null,id:o="",className:c="",component:s="article",isHoverable:u=!1,isCompact:m=!1,isSelectable:f=!1,isSelectableRaised:p=!1,isSelected:E=!1,isDisabledRaised:h=!1,isFlat:b=!1,isExpanded:C=!1,isRounded:y=!1,isLarge:_=!1,isFullHeight:v=!1,isPlain:R=!1,ouiaId:x,ouiaSafe:S=!0}=e,g=a.__rest(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe"]);const F=s,I=d.useOUIAProps(t.Card.displayName,x,S);return m&&_&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),_=!1),l.createElement(t.CardContext.Provider,{value:{cardId:o,isExpanded:C}},l.createElement(F,Object.assign({id:o,className:r.css(i.default.card,m&&i.default.modifiers.compact,C&&i.default.modifiers.expanded,b&&i.default.modifiers.flat,y&&i.default.modifiers.rounded,_&&i.default.modifiers.displayLg,v&&i.default.modifiers.fullHeight,R&&i.default.modifiers.plain,h?r.css(i.default.modifiers.nonSelectableRaised):p?r.css(i.default.modifiers.selectableRaised,E&&i.default.modifiers.selectedRaised):f||u?r.css(i.default.modifiers.selectable,E&&i.default.modifiers.selected):"",c),tabIndex:f||p?"0":void 0},g,I),n))},t.Card.displayName="Card"},85962:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CardBody=void 0;const a=n(70655),l=a.__importStar(n(93264)),i=a.__importDefault(n(62802)),r=n(38296);t.CardBody=e=>{var{children:t=null,className:n="",component:d="div",isFilled:o=!0}=e,c=a.__rest(e,["children","className","component","isFilled"]);const s=d;return l.createElement(s,Object.assign({className:r.css(i.default.cardBody,!o&&i.default.modifiers.noFill,n)},c),t)},t.CardBody.displayName="CardBody"},46891:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(2095),l=n(85962),i=n(24561),r=n(93264),d=n.n(r);const o=function(){return d().createElement(d().Fragment,null,d().createElement(a.Card,null,d().createElement(l.CardBody,null,d().createElement(i.aV,null))))}},51254:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var a=n(93264),l=n.n(a),i=n(75662),r=n(46891),d=(0,a.lazy)((function(){return Promise.all([n.e(3056),n.e(2792),n.e(8764),n.e(8045),n.e(8454),n.e(6842)]).then(n.bind(n,6340))})),o=(0,a.lazy)((function(){return Promise.all([n.e(6692),n.e(5659),n.e(6991),n.e(437),n.e(8454),n.e(2831),n.e(7847),n.e(2313)]).then(n.bind(n,56486))})),c=(0,a.lazy)((function(){return Promise.all([n.e(6692),n.e(7679),n.e(3056),n.e(2792),n.e(9421),n.e(8454),n.e(7847),n.e(1177)]).then(n.bind(n,89578))})),s=(0,a.lazy)((function(){return n.e(1198).then(n.bind(n,86967))})),u=(0,a.lazy)((function(){return n.e(5748).then(n.bind(n,49011))})),m=function(e){return l().createElement(a.Suspense,{fallback:l().createElement(r.Z,null)},e)};const f=function(){return l().createElement(l().Fragment,null,l().createElement(i.Switch,null,l().createElement(i.Route,{exact:!0,path:"/recommendations",component:function(){return m(l().createElement(d,null))}}),l().createElement(i.Route,{exact:!0,path:"/recommendations/by_id/:id",component:function(){return m(l().createElement(d,null))}}),l().createElement(i.Route,{exact:!0,path:"/recommendations/pathways",component:function(){return m(l().createElement(d,null))}}),l().createElement(i.Route,{exact:!0,path:"/recommendations/pathways/:id",component:function(){return m(l().createElement(c,null))}}),l().createElement(i.Route,{exact:!0,path:"/recommendations/:id",component:function(){return m(l().createElement(o,null))}}),l().createElement(i.Route,{exact:!0,path:"/recommendations/classic/:id/:classicId/",component:function(){return m(l().createElement(u,null))}}),l().createElement(i.Route,{path:"/recommendations/by_id/:id/:inventoryId/",component:function(){return m(l().createElement(s,null))}}),l().createElement(i.Route,{path:"/recommendations/:id/:inventoryId/",component:function(){return m(l().createElement(s,null))}}),l().createElement(i.Redirect,{path:"*",to:"/recommendations",push:!0})))}}}]);
//# sourceMappingURL=../sourcemaps/Recs.04997e39c14dc42bffaf2b3d55dd0eea.js.map