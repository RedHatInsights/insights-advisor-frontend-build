"use strict";(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[573],{79930:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var a=r(87462),n=r(29439),o=r(4942),i=r(59303),l=r(75662),s=r(13877),c=r(93264),u=r.n(c),f=r(27577),m=r(97109),d=r(82041),g=r(66584),b=r(76341),p=r(46891),y=r(34702),v=r(66031),h=r(24130),P=r(87516),Z=r(71070),_=r(40609),E=r(30893),k=r(28672),S=r(8377),O=r(86896);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const j=function(){var e,t,r=(0,O.Z)(),w=(0,d.useDispatch)(),j=(0,l.useLocation)().search,x=(0,d.useSelector)((function(e){return e.filters.selectedTags})),C=(0,d.useSelector)((function(e){return e.filters.workloads})),X=(0,d.useSelector)((function(e){return e.filters.SID})),W=(0,d.useSelector)((function(e){return e.filters.pathState})),q=function(e){return w((0,k.lW)(e))},L={};(null==x?void 0:x.length)&&(L=M(M({},L),{tags:x.join(",")})),C&&(L=M(M({},L),(0,m.s0)(C,X)));var D,T=(0,S.Lv)(M(M({},(0,m.qW)(W)),L)),F=T.data,A=void 0===F?[]:F,N=T.isFetching,V=T.isLoading,B=T.isError,I=[{title:r.formatMessage(E.Z.pathway),transforms:[f.sortable,(0,f.cellWidth)(45)]},{title:r.formatMessage(E.Z.category)},{title:r.formatMessage(E.Z.systems),transforms:[f.sortable,(0,f.cellWidth)(10)]},{title:r.formatMessage(E.Z.reboot)},{title:r.formatMessage(E.Z.reclvl),transforms:[(0,f.cellWidth)(20),f.fitContent,(0,f.info)({tooltip:r.formatMessage(E.Z.reclvldetails),tooltipProps:{isContentLeftAligned:!0}})]}],R={0:"name",2:"impacted_systems_count"},H=(0,c.useState)({}),G=(0,n.Z)(H,2),K=G[0],Y=G[1],$=(0,c.useState)(!0),z=(0,n.Z)($,2),J=z[0],Q=z[1],U=(0,c.useState)((null==W?void 0:W.text)||""),ee=(0,n.Z)(U,2),te=ee[0],re=ee[1],ae=(0,_.Z)(te,i.$x),ne=function(e){var t=e*W.limit-W.limit;q(M(M({},W),{},{offset:t}))},oe=function(e){var t=M(M({},W),{},{offset:0});"text"===e&&re(""),delete t[e],q(t)},ie=function(e,t){t.length>0?q(M(M({},W),{},{offset:0},(0,o.Z)({},e,t))):oe(e)},le=[{label:r.formatMessage(E.Z.name).toLowerCase(),filterValues:{key:"text-filter",onChange:function(e,t){return re(t)},value:te,placeholder:r.formatMessage(E.Z.filterBy)}},{label:i.W2.category.title,type:i.W2.category.type,id:i.W2.category.urlParam,value:"checkbox-".concat(i.W2.category.urlParam),filterValues:{key:"".concat(i.W2.category.urlParam,"-filter"),onChange:function(e,t){return ie(i.W2.category.urlParam,t)},value:W.category,items:i.W2.category.values}},{label:i.dX.has_incident.title,type:i.dX.has_incident.type,id:i.dX.has_incident.urlParam,value:"checkbox-".concat(i.dX.has_incident.urlParam),filterValues:{key:"".concat(i.dX.has_incident.urlParam,"-filter"),onChange:function(e,t){return ie(i.dX.has_incident.urlParam,t)},value:W.has_incident,items:i.dX.has_incident.values}},{label:i.dX.reboot_required.title,type:i.dX.reboot_required.type,id:i.dX.reboot_required.urlParam,value:"checkbox-".concat(i.dX.reboot_required.urlParam),filterValues:{key:"".concat(i.dX.reboot_required.urlParam,"-filter"),onChange:function(e,t){return ie(i.dX.reboot_required.urlParam,t)},value:W.reboot_required,items:i.dX.reboot_required.values}}],se={deleteTitle:r.formatMessage(E.Z.resetFilters),filters:(D=M({},W),delete D.sort,delete D.offset,delete D.limit,(0,m.yK)(D,i.W2)),onDelete:function(e,t,r){r?(re(""),q({limit:W.limit,offset:W.offset})):t.map((function(e){var t=(0,o.Z)({},e.urlParam,Array.isArray(W[e.urlParam])?W[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");t[e.urlParam].length>0?q(M(M({},W),t)):oe(e.urlParam)}))}};return(0,c.useEffect)((function(){J||null===x||(0,m.Y4)(W,x)}),[W,x,C,X]),(0,c.useEffect)((function(){if(j&&J){var e=(0,m.yG)();delete e.tags,void 0===e.text?re(""):re(e.text),e.sort=void 0===e.sort?"-impacted_systems_count":e.sort[0],void 0===e.offset?e.offset=0:e.offset=Number(e.offset[0]),void 0===e.limit?e.limit=20:e.limit=Number(e.limit[0]),void 0!==e.reboot&&!Array.isArray(e.reboot)&&(e.reboot=["".concat(e.reboot)]),q(M(M({},W),e))}Q(!1)}),[]),(0,c.useEffect)((function(){if(void 0!==W.sort&&R){var e=W.sort,t=Number(Object.entries(R).find((function(t){return t[1]===e||"-".concat(t[1])===e}))[0]),r="-"===W.sort[0]?"desc":"asc";Y({index:t,direction:r})}}),[W.sort]),(0,c.useEffect)((function(){if(!J&&!V){var e=M({},W),t=te.length?{text:te}:{};delete e.text,q(M(M(M({},e),t),{},{offset:0}))}}),[ae]),u().createElement(u().Fragment,null,u().createElement(v.Z,{pagination:{itemCount:(null==A||null===(e=A.meta)||void 0===e?void 0:e.count)||0,page:W.offset/W.limit+1,perPage:Number(W.limit),onSetPage:function(e,t){ne(t)},onPerPageSelect:function(e,t){q(M(M({},W),{},{limit:t,offset:0}))},isCompact:!0},filterConfig:{items:le},activeFiltersConfig:se}),N?u().createElement(p.Z,null):B?u().createElement(b.Z,{message:r.formatMessage(E.Z.rulesTableFetchRulesError)}):u().createElement(f.Table,{"aria-label":"pathways-table",variant:f.TableVariant.compact,sortBy:K,onSort:function(e,t,r){var a="".concat("asc"===r?"":"-").concat(R[t]);Y({index:t,direction:r}),q(M(M({},W),{},{sort:a,offset:0}))},cells:I,rows:function(e){return 0===e.length?[{cells:[{title:u().createElement(y.Z,{icon:Z.ZP,title:r.formatMessage(E.Z.noResults),text:r.formatMessage(E.Z.adjustFilters)}),props:{colSpan:6}}]}]:e.flatMap((function(e,t){return[{cells:[{title:u().createElement("span",{key:t},u().createElement(l.Link,{key:t,to:"/recommendations/pathways/".concat(e.slug)}," ",e.name," "),e.has_incident&&u().createElement(P.Z,{rule:{tags:"incident"}}))},{title:u().createElement(g.Z,{key:t,labelList:e.categories})},{title:u().createElement("div",{key:t},"".concat(e.impacted_systems_count.toLocaleString()))},{title:u().createElement("span",{key:t},r.formatMessage(e.reboot_required?E.Z.required:E.Z.notRequired))},{title:u().createElement(h.Z,(0,a.Z)({key:t},e))}]}]}))}(null==A?void 0:A.data),isStickyHeader:!0},u().createElement(f.TableHeader,null),u().createElement(f.TableBody,null)),u().createElement(s.tl,{ouiaId:"page",itemCount:(null==A||null===(t=A.meta)||void 0===t?void 0:t.count)||0,page:W.offset/W.limit+1,perPage:Number(W.limit),onSetPage:function(e,t){ne(t)},onPerPageSelect:function(e,t){q(M(M({},W),{},{limit:t,offset:0}))},widgetId:"pagination-options-menu-bottom",variant:s.aM.bottom}))}}}]);
//# sourceMappingURL=../sourcemaps/PathwaysTable.414bfe8c148598a51cac88eb704b9fa6.js.map