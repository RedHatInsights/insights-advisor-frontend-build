(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1125:function(e,t,a){var n=a(877);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(13)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(877,(function(){var t=a(877);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1173:function(e,t,a){"use strict";a.r(t);var n=a(180),r=a.n(n),o=a(264),c=a.n(o),s=a(131),i=a.n(s),l=a(266),u=a.n(l),p=a(263),f=a.n(p),g=(a(1125),a(0)),d=a.n(g),m=a(791),b=a(30),v=a(820),O=a(186),h=a(44),w=a(10),j=a(374),y=a(792),T=a(268),_=a.n(T),S=a(12),C=a.n(S),x=a(789),E=a(66),k=a(851),M=a(11),P=a(823),D=a(282);function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var U=function(e){var t=e.toggleModal,a=e.fetchTags,n=e.selectedTags,o=e.setSelectedTags,s=e.isOpen,i=Object(g.useState)({}),l=f()(i,2),u=l[0],p=l[1],m=Object(g.useState)(!1),b=f()(m,2),v=b[0],O=b[1],h=Object(g.useState)([]),j=f()(h,2),y=j[0],T=j[1],S=Object(g.useState)(10),C=f()(S,2),E=C[0],P=C[1],R=Object(g.useState)(1),U=f()(R,2),I=U[0],N=U[1],B=Object(g.useState)(),A=f()(B,2),V=A[0],F=A[1],q=Object(D.a)(),G=Object(k.a)(V,w.DEBOUNCE_DELAY),J=Object(g.useMemo)((function(){return function(e){return{filters:e.map((function(e){return e.namespace})).filter((function(e,t,a){return a.indexOf(e)===t})).map((function(t){return{category:t,chips:e.filter((function(e){return e.namespace===t})).map((function(e){return{name:e.value,id:e.id,value:!0}})),urlParam:"tags"}}))}}(y)}),[y]),Y=u.total,z=u.data;Object(g.useEffect)((function(){c()(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(1),e.t0=p,e.next=4,a(E,1,null,V);case 4:e.t1=e.sent,(0,e.t0)(e.t1),O(!0);case 7:case"end":return e.stop()}}),e)})))()}),[G]),Object(g.useEffect)((function(){c()(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,a(E,I,null,G);case 3:e.t1=e.sent,(0,e.t0)(e.t1),O(!0);case 6:case"end":return e.stop()}}),e)})))()}),[E,I]);var H=function(){return n.length?n.map((function(e){return{id:e,namespace:e.split("/")[0],key:decodeURIComponent(e.split("/")[1].split("=")[0]),value:decodeURIComponent(e.split("/")[1].split("=")[1])}})):[]};Object(g.useEffect)((function(){T(H())}),[n,T]);return d.a.createElement(d.a.Fragment,null,z&&d.a.createElement(x.TagModal,_()({title:q.formatMessage(M.a.tagsCount,{count:Y})},v&&{loaded:v,pagination:{perPage:E,page:I,count:Y},rows:z.map((function(e){return L(L({},e),{},{selected:y.find((function(t){return t.id===e.id})),cells:[e.key,e.value,e.namespace,e.count]})}))},{loaded:v,width:"50%",isOpen:s,toggleModal:function(){P(10),N(1),F(),T(H()),t()},filters:[{label:q.formatMessage(M.a.filterTagsInModal),placeholder:q.formatMessage(M.a.filterTagsInModal),value:"tags-filter",filterValues:{key:"text-filter",onChange:function(e,t){return F(t)},value:V}}],onUpdateData:function(e){O(!1),P(e.perPage),N(e.page)},columns:[{title:q.formatMessage(M.a.tagsModalName)},{title:q.formatMessage(M.a.tagsModalValue)},{title:q.formatMessage(M.a.tagsModalSources)},{title:q.formatMessage(M.a.systems)}],selected:y,onSelect:function(e){return T(e.map((function(e){return{id:e.id,namespace:e.namespace,value:e.value,selected:!0}})))},onApply:function(){o(y.map((function(e){return e.id})))},tableProps:{canSelectAll:!1},primaryToolbarProps:{activeFiltersConfig:L(L({},J),{},{onDelete:function(e,t,a){if(a)T([]);else{var n=t.flatMap((function(e){return e.chips.map((function(e){return e.id}))}));T(y.filter((function(e){return n.filter((function(t){return t!==e.id})).length})))}}})}})))};U.propTypes={toggleModal:C.a.func.isRequired,fetchTags:C.a.func.isRequired,isOpen:C.a.bool.isRequired,selectedTags:C.a.array,setSelectedTags:C.a.func};var I=Object(E.connect)((function(e){return{selectedTags:e.AdvisorStore.selectedTags}}),(function(e){return{setSelectedTags:function(t){return e(Object(P.n)(t))}}}))(U),N=a(270),B=a.n(N),A=a(790),V=a.n(A),F=a(181),q=a(67),G=a(899),J=a.n(G),Y=function(e){if(null!==e){var t=new URL(window.location),a=new URLSearchParams(t.search);e.length?a.set("tags",e.join()):a.delete("tags"),window.history.replaceState(null,null,"".concat(t.origin).concat(t.pathname).concat(a.toString().length?"?":"").concat(a.toString()))}};function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var W=function(e){var t=e.selectedTags,a=e.setSelectedTags,n=Object(D.a)(),o=Object(g.useState)(!1),s=f()(o,2),i=s[0],l=s[1],p=Object(g.useState)({}),T=f()(p,2),_=T[0],S=T[1],C=Object(g.useState)(),x=f()(C,2),E=x[0],P=x[1],R=Object(g.useState)(),L=f()(R,2),U=L[0],N=L[1],A=Object(k.a)(E,w.DEBOUNCE_DELAY),G=Object(g.useState)(!1),z=f()(G,2),W=z[0],K=z[1],Q=_.total,X=_.count,Z=_.data,$=function(e){return{total:e.total,count:e.count,data:u()(new Set(e.data.map((function(e){return e.namespace})))).map((function(t){return{source:t,data:e.data.filter((function(e){return e.namespace===t}))}}))}},ee=function(e,t,a){return{total:t,count:a,data:e.map((function(e){var t=e.tag,a=t.namespace,n=t.key,r=t.value;return H(H({},e.tag),{},{count:e.count,id:"".concat(a,"/").concat(encodeURIComponent(n),"=").concat(encodeURIComponent(r))})}))}},te=function(){var e=c()(r.a.mark((function e(o,c,s,i){var l,u,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=[],e.prev=1,""!==i&&i){e.next=8;break}return e.next=5,v.a.get("".concat(w.INV_BASE_URL,"/tags?per_page=").concat(o,"&page=").concat(c,"&registered_with=insights"));case 5:e.t0=e.sent,e.next=11;break;case 8:return e.next=10,v.a.get("".concat(w.INV_BASE_URL,"/tags?per_page=").concat(o,"&page=").concat(c,"&search=").concat(i.toLowerCase(),"&registered_with=insights"));case 10:e.t0=e.sent;case 11:u=e.t0,l=ee(u.data.results,u.data.total,u.data.count),null===s&&null===t&&a([]),s.length&&(p=J()(s.split(","),t),Y(p),a(p)),e.next=20;break;case 17:e.prev=17,e.t1=e.catch(1),Object(q.addNotification)({variant:"danger",dismissable:!0,title:n.formatMessage(M.a.error),description:"".concat(e.t1)});case 20:return e.abrupt("return",l);case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t,a,n,r){return e.apply(this,arguments)}}();Object(g.useEffect)((function(){P("")}),[]),Object(g.useEffect)((function(){var e=new URL(window.location),t=new URLSearchParams(e.search);N(t.get("tags"))}),[t]),Object(g.useEffect)((function(){var e=new URL(window.location),t=new URLSearchParams(e.search);t.get("tags")===U?c()(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=S,e.t1=$,e.next=4,te(20,1,null,E);case 4:return e.t2=e.sent,e.t3=(0,e.t1)(e.t2),e.abrupt("return",(0,e.t0)(e.t3));case 7:case"end":return e.stop()}}),e)})))():c()(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=S,e.t1=$,e.next=4,te(20,1,t,E);case 4:return e.t2=e.sent,e.t3=(0,e.t1)(e.t2),e.abrupt("return",(0,e.t0)(e.t3));case 7:case"end":return e.stop()}}),e)})))()}),[A]),Object(g.useEffect)((function(){Y(t)}),[window.location]);return null!==t&&d.a.createElement("div",{className:"tagsToolbarContainer"},d.a.createElement(I,{toggleModal:function(){return K(!W)},isOpen:W,fetchTags:te}),Z&&d.a.createElement(m.Select,{className:"dropDownOverride",variant:m.SelectVariant.checkbox,"aria-label":"Select Group Input",onToggle:function(e){P(""),l(e)},onSelect:function(e,n){var r=t.includes(n)?t.filter((function(e){return e!==n})):[].concat(u()(t),[n]);a(r),Y(r)},selections:t,isOpen:i,placeholderText:d.a.createElement(d.a.Fragment,null,d.a.createElement(V.a,null)," ",Z&&Z.length>0?d.a.createElement(d.a.Fragment,null,n.formatMessage(M.a.filterResults)," ",0===t.length&&n.formatMessage(M.a.allSystems)):n.formatMessage(M.a.noTags)),ariaLabelledBy:"select-group-input",isDisabled:0===Z.length},d.a.createElement(y.InputGroup,{className:"tags-filter-group"},d.a.createElement(F.TextInput,{"aria-label":"tags-filter-input",placeholder:n.formatMessage(M.a.filterTagsInToolbar),value:E,onChange:P}),d.a.createElement(B.a,{className:"tags-filter-search-icon"})),d.a.createElement(j.Divider,{key:"inline-filter-divider"}),Z.map((function(e,a){return d.a.createElement(m.SelectGroup,{key:"group".concat(a),label:e.source},e.data.map((function(e,a){return d.a.createElement("span",{key:a,className:"tags-select-group"},d.a.createElement(m.SelectOption,{value:e.id,isChecked:t.find((function(t){return t===e.id}))},d.a.createElement(b.Tooltip,{content:"".concat(decodeURIComponent(e.id)),position:b.TooltipPosition.right},d.a.createElement("span",null,"".concat(decodeURIComponent(e.key+"="+e.value))))),d.a.createElement(O.Badge,{className:"tags-select-badge"}," ",e.count," "))})))})),d.a.createElement(h.Button,{key:"manage all tags",variant:"link",onClick:function(){return K(!0)}},X>=20?n.formatMessage(M.a.countMoreTags,{count:Q-X}):n.formatMessage(M.a.manageTags))))};W.propTypes={selectedTags:C.a.array,addNotification:C.a.func,intl:C.a.any,setSelectedTags:C.a.func,history:C.a.any};t.default=Object(E.connect)((function(e){return{selectedTags:e.AdvisorStore.selectedTags}}),(function(e){return{addNotification:function(t){return e(Object(q.addNotification)(t))},setSelectedTags:function(t){return e(Object(P.n)(t))}}}))(W)},877:function(e,t,a){(t=a(8)(!1)).push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.tagsToolbarContainer{background-color:var(--pf-global--BackgroundColor--100);border-bottom:var(--pf-global--BorderWidth--sm) solid var(--pf-global--BorderColor--light-100)}.tagsToolbarContainer .pf-c-dropdown__menu{top:36px !important}.tagsToolbarContainer .dropDownOverride{padding-left:var(--pf-global--spacer--md)}.tagsToolbarContainer .dropDownOverride button::before{border:none !important}.tagsToolbarContainer .tags-filter-group{display:flex;padding:var(--pf-global--spacer--sm) 0 var(--pf-global--spacer--md) var(--pf-global--spacer--md)}.tagsToolbarContainer .tags-filter-group .tags-filter-search-icon{position:relative;left:-30px;left:-1.875rem;top:10px;top:.625rem}.tagsToolbarContainer .tags-select-group{display:flex}.tagsToolbarContainer .tags-select-group:hover{background-color:var(--pf-c-select__menu-item--hover--BackgroundColor)}.tagsToolbarContainer .tags-select-group .tags-select-badge{position:relative;margin-top:var(--pf-global--spacer--md);left:-15px;left:-.9375rem;bottom:8px;bottom:.5rem}.tagsToolbarContainer .pf-c-select__toggle{width:220px;font-size:small}.tagsToolbarContainer .pf-c-select__toggle.pf-m-disabled,.tagsToolbarContainer .pf-c-select__toggle:disabled{background-color:var(--pf-global--BackgroundColor--100)}.tagsToolbarContainer .pf-c-select__toggle.pf-m-disabled .pf-c-select__toggle-arrow,.tagsToolbarContainer .pf-c-select__toggle:disabled .pf-c-select__toggle-arrow{color:var(--pf-global--BackgroundColor--100)}.tagsToolbarContainer .pf-c-select{max-width:400px !important}.tagsToolbarContainer .pf-c-check__label{max-width:400px !important;width:400px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tagsListContainer .pf-c-data-list{border:none}.tagsListContainer .pf-c-data-list__item{border:none}.tagsListContainer .pf-c-data-list__item .pf-c-data-list__item-control{padding:8px 0 8px !important}.tagsListContainer .pf-c-data-list__item .pf-c-data-list__item-content{padding-bottom:8px !important}.tagsListContainer .pf-c-data-list__item .pf-c-data-list__item-content .pf-c-data-list__cell{padding-top:8px !important}\n",""]),e.exports=t}}]);
//# sourceMappingURL=24.js.map