(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[331],{75331:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(96156),a=r(28481),c=r(57149),i=r(93264),u=r.n(i),o=r(85991),s=r(49489),l=r(16530),p=r(45697),f=r.n(p),d=r(88931),m=r(74806),v=r(30893),g=r(36873);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var b=function(e){var t=e.current,r=e.fetchRule,n=e.match,c=e.ruleFetchStatus,p=e.rule,f=e.intl,d=(0,i.useState)([]),m=(0,a.Z)(d,2),g=m[0],h=m[1],b=(0,i.useState)(!1),y=(0,a.Z)(b,2),O=y[0],j=y[1],S=(0,i.useCallback)((function(){var e=[],t=n.url.split("/");e.push({title:"".concat(f.formatMessage(v.Z.insightsHeader)," ").concat(t[1]),navigate:"/".concat(t[1])}),void 0!==n.params.id&&void 0!==n.params.inventoryId&&e.push({title:p.description,navigate:"/".concat(n.url.split("/")[1],"/").concat(n.params.id)}),h(e)}),[f,n.params.id,n.params.inventoryId,n.url,p.description]);return(0,i.useEffect)((function(){var e=n.url.split("/");void 0!==n.params.inventoryId&&"systems"!==e[1]?r({rule_id:n.params.id}):S()}),[S,r,n.params.id,n.params.inventoryId,n.url]),(0,i.useEffect)((function(){"fulfilled"!==c||O||(j(!0),S())}),[S,c,O]),u().createElement(u().Fragment,null,("fulfilled"===c||g.length>0)&&u().createElement(o.a,{ouiaId:"detail"},g.map((function(e,t){return u().createElement(s.g,{key:t},u().createElement(l.Link,{to:e.navigate},e.title))})),u().createElement(s.g,{isActive:!0},t)),"pending"===c&&f.formatMessage(v.Z.loading))};b.propTypes={current:f().string,fetchRule:f().func,match:f().object,rule:f().object,ruleFetchStatus:f().string,intl:f().any};const y=(0,m.ZP)((0,g.Z)((0,d.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({rule:e.AdvisorStore.rule,ruleFetchStatus:e.AdvisorStore.ruleFetchStatus},t)}),(function(e){return{fetchRule:function(t){return e(c.w1(t))}}}))(b)))}}]);
//# sourceMappingURL=../sourcemaps/331.e444da9648a6fcadad2a.js.map