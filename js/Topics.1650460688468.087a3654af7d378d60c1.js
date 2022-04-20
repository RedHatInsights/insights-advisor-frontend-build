"use strict";(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[3645],{2095:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Card=t.CardContext=void 0;const r=n(70655),a=r.__importStar(n(93264)),i=r.__importDefault(n(62802)),o=n(38296),l=n(23053);t.CardContext=a.createContext({cardId:"",isExpanded:!1}),t.Card=e=>{var{children:n=null,id:d="",className:c="",component:s="article",isHoverable:u=!1,isCompact:m=!1,isSelectable:p=!1,isSelected:f=!1,isFlat:y=!1,isExpanded:b=!1,isRounded:h=!1,isLarge:E=!1,isFullHeight:C=!1,isPlain:v=!1,ouiaId:O,ouiaSafe:g=!0}=e,_=r.__rest(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelected","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe"]);const P=s,j=l.useOUIAProps(t.Card.displayName,O,g);return m&&E&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),E=!1),a.createElement(t.CardContext.Provider,{value:{cardId:d,isExpanded:b}},a.createElement(P,Object.assign({id:d,className:o.css(i.default.card,u&&i.default.modifiers.hoverable,m&&i.default.modifiers.compact,p&&i.default.modifiers.selectable,f&&p&&i.default.modifiers.selected,b&&i.default.modifiers.expanded,y&&i.default.modifiers.flat,h&&i.default.modifiers.rounded,E&&i.default.modifiers.displayLg,C&&i.default.modifiers.fullHeight,v&&i.default.modifiers.plain,c),tabIndex:p?"0":void 0},_,j),n))},t.Card.displayName="Card"},85962:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CardBody=void 0;const r=n(70655),a=r.__importStar(n(93264)),i=r.__importDefault(n(62802)),o=n(38296);t.CardBody=e=>{var{children:t=null,className:n="",component:l="div",isFilled:d=!0}=e,c=r.__rest(e,["children","className","component","isFilled"]);const s=l;return a.createElement(s,Object.assign({className:o.css(i.default.cardBody,!d&&i.default.modifiers.noFill,n)},c),t)},t.CardBody.displayName="CardBody"},46891:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(2095),a=n(85962),i=n(24561),o=n(93264),l=n.n(o);const d=function(){return l().createElement(l().Fragment,null,l().createElement(r.Card,null,l().createElement(a.CardBody,null,l().createElement(i.aV,null))))}},54947:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(87462),a=n(70885),i=n(45987),o=n(4942),l=n(93264),d=n.n(l),c=n(75662),s=n(46891),u=n(45697),m=n.n(u),p=["component"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=(0,l.lazy)((function(){return n.e(7641).then(n.bind(n,37468))})),h=(0,l.lazy)((function(){return Promise.all([n.e(6692),n.e(5659),n.e(7048),n.e(1160),n.e(8764),n.e(5574),n.e(4498),n.e(8508),n.e(3767),n.e(4683)]).then(n.bind(n,11198))})),E=(0,l.lazy)((function(){return Promise.all([n.e(6692),n.e(1694)]).then(n.bind(n,58658))})),C=function(e,t){var n=t.type,r=t.payload;return{setLoaded:y(y({},e),{},{loaded:!0,isInternal:r})}[n]},v=function(e){var t=e.component,n=(0,i.Z)(e,p),o=(0,l.useReducer)(C,{isInternal:!1,loaded:!1}),s=(0,a.Z)(o,2),u=s[0],m=s[1];return(0,l.useEffect)((function(){insights.chrome.auth.getUser().then((function(e){return m({type:"setLoaded",payload:e.identity.user.is_internal})}))}),[]),d().createElement(c.Route,(0,r.Z)({},n,{render:function(e){return u.loaded&&(u.isInternal?d().createElement(t,e):d().createElement(c.Redirect,{to:"/topics"}))}}))},O=function(e){return d().createElement(l.Suspense,{fallback:d().createElement(s.Z,null)},e)};v.propTypes={component:m().any};const g=function(){return d().createElement(c.Switch,null,d().createElement(c.Route,{exact:!0,path:"/topics",component:function(){return O(d().createElement(b,null))}}),d().createElement(c.Route,{exact:!0,path:"/topics/:id",component:function(){return O(d().createElement(h,null))}}),d().createElement(v,{exact:!0,path:"/topics/admin/manage",component:function(){return O(d().createElement(E,null))}}),d().createElement(c.Redirect,{path:"*",to:"/topics",push:!0}))}}}]);