(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[331],{75331:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var a=n(28481),r=n(93264),i=n.n(r),c=n(88931),o=n(85991),s=n(49489),u=n(16530),l=n(45697),d=n.n(l),f=n(57149),g=n(30893),p=n(86896),m=function(e){var t,n=e.current,l=(0,p.Z)(),d=(0,c.useDispatch)(),m=(0,c.useSelector)((function(e){return e.AdvisorStore.rule})),v=(0,c.useSelector)((function(e){return e.AdvisorStore.ruleFetchStatus})),h=null===(t=(0,u.useLocation)().pathname)||void 0===t?void 0:t.split("/"),k=(0,r.useState)([]),E=(0,a.Z)(k,2),S=E[0],Z=E[1],b=(0,r.useCallback)((function(){var e=[];e.push({title:"".concat(l.formatMessage(g.Z.insightsHeader)," ").concat(h[1]),navigate:"/".concat(h[1])}),"recommendations"===h[1]&&4===h.length&&e.push({title:m.description,navigate:"/".concat(h[1],"/").concat(h[2])}),Z(e)}),[l,h,m.description]);return(0,r.useEffect)((function(){var e;"recommendations"===h[1]&&4===h.length?(e={rule_id:h[2]},d((0,f.w1)(e))):b()}),[]),(0,r.useEffect)((function(){"fulfilled"===v&&b()}),[b,v]),i().createElement(i().Fragment,null,("fulfilled"===v||S.length>0)&&i().createElement(o.a,{ouiaId:"detail"},S.map((function(e,t){return i().createElement(s.g,{key:t},i().createElement(u.Link,{to:e.navigate},e.title))})),i().createElement(s.g,{isActive:!0},n)),"pending"===v&&l.formatMessage(g.Z.loading))};m.propTypes={current:d().string};const v=m}}]);
//# sourceMappingURL=../sourcemaps/331.effef16e48394cfc0693.js.map