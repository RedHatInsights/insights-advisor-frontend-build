(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1101:function(e,t,a){var n=a(853);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(9)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(853,(function(){var t=a(853);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},1149:function(e,t,a){"use strict";a.r(t);var n=a(253),r=a.n(n),o=a(170),c=a.n(o),s=a(251),i=a.n(s),l=a(121),u=a.n(l),p=a(250),f=a.n(p),g=(a(1101),a(0)),d=a.n(g),m=a(764),b=a(39),h=a(796),v=a(175),O=a(45),w=a(10),T=a(365),_=a(765),j=a(255),S=a.n(j),C=a(16),x=a.n(C),E=a(762),y=a(100),k=a(827),M=a(14),L=a(799),R=a(270),N=function(e){var t=e.toggleModal,a=e.fetchTags,n=e.selectedTags,r=e.setSelectedTags,o=e.totalTags,s=e.isOpen,l=Object(g.useState)(),u=f()(l,2),p=u[0],m=u[1],b=Object(g.useState)(!1),h=f()(b,2),v=h[0],O=h[1],T=Object(g.useState)([]),_=f()(T,2),j=_[0],C=_[1],x=Object(g.useState)(10),y=f()(x,2),L=y[0],N=y[1],P=Object(g.useState)(1),D=f()(P,2),U=D[0],B=D[1],I=Object(g.useState)(),A=f()(I,2),V=A[0],q=A[1],G=Object(R.a)(),F=Object(k.a)(V,w.DEBOUNCE_DELAY);return Object(g.useEffect)((function(){i()(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(1),e.t0=m,e.next=4,a(L,1,null,V);case 4:e.t1=e.sent,(0,e.t0)(e.t1),O(!0);case 7:case"end":return e.stop()}}),e)})))()}),[F]),Object(g.useEffect)((function(){i()(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,a(L,U,null,F);case 3:e.t1=e.sent,(0,e.t0)(e.t1),O(!0);case 6:case"end":return e.stop()}}),e)})))()}),[L,U]),Object(g.useEffect)((function(){C(n.length?n.map((function(e){return{id:e,selected:!0}})):[])}),[n,C]),d.a.createElement(E.TagModal,S()({systemName:G.formatMessage(M.a.insightsHeader).toLowerCase()},v&&{loaded:v,pagination:{perPage:L,page:U,count:o},rows:p.map((function(e){return{id:e.id,selected:j.find((function(t){return t.id===e.id})),cells:[e.key,e.value,e.namespace,e.count]}}))},{loaded:v,width:"auto",isOpen:s,toggleModal:function(){N(10),B(1),q(),C([]),t()},filters:[{label:G.formatMessage(M.a.filterTagsInModal),placeholder:G.formatMessage(M.a.filterTagsInModal),value:"tags-filter",filterValues:{key:"text-filter",onChange:function(e,t){return q(t)},value:V}}],onUpdateData:function(e){O(!1),N(e.perPage),B(e.page)},columns:[{title:G.formatMessage(M.a.tagsModalName)},{title:G.formatMessage(M.a.tagsModalValue)},{title:G.formatMessage(M.a.tagsModalSources)},{title:G.formatMessage(M.a.systems)}],selected:j,onSelect:function(e){return C(e.map((function(e){return{id:e.id,selected:!0}})))},onApply:function(){r(j.map((function(e){return e.id}))),C([])},tableProps:{canSelectAll:!1}}))};N.propTypes={toggleModal:x.a.func.isRequired,fetchTags:x.a.func.isRequired,totalTags:x.a.number.isRequired,isOpen:x.a.bool.isRequired,selectedTags:x.a.array,setSelectedTags:x.a.func};var P=Object(y.connect)((function(e){return{selectedTags:e.AdvisorStore.selectedTags}}),(function(e){return{setSelectedTags:function(t){return e(Object(L.n)(t))}}}))(N),D=a(257),U=a.n(D),B=a(763),I=a.n(B),A=a(171),V=a(62),q=a(875),G=a.n(q),F=function(e){if(null!==e){var t=new URL(window.location),a=new URLSearchParams(t.search);e.length?a.set("tags",e.join()):a.delete("tags"),window.history.replaceState(null,null,"".concat(t.origin).concat(t.pathname).concat(a.toString().length?"?":"").concat(a.toString()))}};function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(Object(a),!0).forEach((function(t){u()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Y=function(e){var t=e.selectedTags,a=e.setSelectedTags,n=Object(R.a)(),o=Object(g.useState)(!1),s=f()(o,2),l=s[0],u=s[1],p=Object(g.useState)(),j=f()(p,2),S=j[0],C=j[1],x=Object(g.useState)([]),E=f()(x,2),y=E[0],L=E[1],N=Object(g.useState)(),D=f()(N,2),B=D[0],q=D[1],H=Object(g.useState)(),Y=f()(H,2),z=Y[0],W=Y[1],K=Object(g.useState)(),Q=f()(K,2),X=Q[0],Z=Q[1],$=Object(k.a)(B,w.DEBOUNCE_DELAY),ee=Object(g.useState)(!1),te=f()(ee,2),ae=te[0],ne=te[1],re=function(e){return e.map((function(e){return e.namespace})).filter((function(e,t,a){return a.indexOf(e)===t})).map((function(t){return{source:t,data:e.filter((function(e){return e.namespace===t}))}}))},oe=function(e){var t=[];return e.map((function(e){var a=e.tag,n=a.namespace,r=a.key,o=a.value;t.push(J(J({},e.tag),{},{count:e.count,id:"".concat(n,"/").concat(encodeURIComponent(r),"=").concat(encodeURIComponent(o))}))})),t},ce=function(){var e=i()(c.a.mark((function e(r,o,s,i){var l,u,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=[],e.prev=1,""!==i&&i){e.next=8;break}return e.next=5,h.a.get("".concat(w.INV_BASE_URL,"/tags?per_page=").concat(r,"&page=").concat(o,"&registered_with=insights"));case 5:e.t0=e.sent,e.next=11;break;case 8:return e.next=10,h.a.get("".concat(w.INV_BASE_URL,"/tags?per_page=").concat(r,"&page=").concat(o,"&search=").concat(i.toLowerCase(),"&registered_with=insights"));case 10:e.t0=e.sent;case 11:u=e.t0,C(u.data.total),l=oe(u.data.results),null===s&&null===t&&a([]),s.length&&(p=G()(s.split(","),t),F(p),a(p)),e.next=21;break;case 18:e.prev=18,e.t1=e.catch(1),Object(V.addNotification)({variant:"danger",dismissable:!0,title:n.formatMessage(M.a.error),description:"".concat(e.t1)});case 21:return e.abrupt("return",l);case 22:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t,a,n,r){return e.apply(this,arguments)}}();Object(g.useEffect)((function(){q("")}),[]),Object(g.useEffect)((function(){Z(y.flatMap((function(e){return e.data})).length)}),[y]),Object(g.useEffect)((function(){var e=new URL(window.location),t=new URLSearchParams(e.search);W(t.get("tags"))}),[t]),Object(g.useEffect)((function(){var e=new URL(window.location),t=new URLSearchParams(e.search);t.get("tags")===z?i()(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=L,e.t1=re,e.next=4,ce(20,1,null,B);case 4:return e.t2=e.sent,e.t3=(0,e.t1)(e.t2),e.abrupt("return",(0,e.t0)(e.t3));case 7:case"end":return e.stop()}}),e)})))():i()(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=L,e.t1=re,e.next=4,ce(20,1,t,B);case 4:return e.t2=e.sent,e.t3=(0,e.t1)(e.t2),e.abrupt("return",(0,e.t0)(e.t3));case 7:case"end":return e.stop()}}),e)})))()}),[$]),Object(g.useEffect)((function(){F(t)}),[window.location]);return null!==t&&d.a.createElement("div",{className:"tagsToolbarContainer"},d.a.createElement(P,{totalTags:S,toggleModal:function(){return ne(!ae)},isOpen:ae,fetchTags:ce}),d.a.createElement(m.Select,{className:"dropDownOverride",variant:m.SelectVariant.checkbox,"aria-label":"Select Group Input",onToggle:function(e){q(""),u(e)},onSelect:function(e,n){var o=t.includes(n)?t.filter((function(e){return e!==n})):[].concat(r()(t),[n]);a(o),F(o)},selections:t,isOpen:l,placeholderText:d.a.createElement(d.a.Fragment,null,d.a.createElement(I.a,null)," ",y.length>0?d.a.createElement(d.a.Fragment,null,n.formatMessage(M.a.filterResults)," ",0===t.length&&n.formatMessage(M.a.allSystems)):n.formatMessage(M.a.noTags)),ariaLabelledBy:"select-group-input",isDisabled:0===y.length},d.a.createElement(_.InputGroup,{className:"tags-filter-group"},d.a.createElement(A.TextInput,{"aria-label":"tags-filter-input",placeholder:n.formatMessage(M.a.filterTagsInToolbar),value:B,onChange:q}),d.a.createElement(U.a,{className:"tags-filter-search-icon"})),d.a.createElement(T.Divider,{key:"inline-filter-divider"}),y.map((function(e,a){return d.a.createElement(m.SelectGroup,{key:"group".concat(a),label:e.source},e.data.map((function(e,a){return d.a.createElement("span",{key:a,className:"tags-select-group"},d.a.createElement(m.SelectOption,{value:e.id,isChecked:t.find((function(t){return t===e.id}))},d.a.createElement(b.Tooltip,{content:"".concat(e.id),position:b.TooltipPosition.right},d.a.createElement("span",null,"".concat(decodeURIComponent(e.value))))),d.a.createElement(v.Badge,{className:"tags-select-badge"}," ",e.count," "))})))})),d.a.createElement(O.Button,{key:"manage all tags",variant:"link",onClick:function(){return ne(!0)}},X>=20?n.formatMessage(M.a.countMoreTags,{count:S-X}):n.formatMessage(M.a.manageTags))))};Y.propTypes={selectedTags:x.a.array,addNotification:x.a.func,intl:x.a.any,setSelectedTags:x.a.func,history:x.a.any};t.default=Object(y.connect)((function(e){return{selectedTags:e.AdvisorStore.selectedTags}}),(function(e){return{addNotification:function(t){return e(Object(V.addNotification)(t))},setSelectedTags:function(t){return e(Object(L.n)(t))}}}))(Y)},853:function(e,t,a){(t=a(7)(!1)).push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.tagsToolbarContainer{background-color:var(--pf-global--BackgroundColor--100);border-bottom:var(--pf-global--BorderWidth--sm) solid var(--pf-global--BorderColor--light-100)}.tagsToolbarContainer .pf-c-dropdown__menu{top:36px !important}.tagsToolbarContainer .dropDownOverride{padding-left:var(--pf-global--spacer--md)}.tagsToolbarContainer .dropDownOverride button::before{border:none !important}.tagsToolbarContainer .tags-filter-group{display:flex;padding:var(--pf-global--spacer--sm) 0 var(--pf-global--spacer--md) var(--pf-global--spacer--md)}.tagsToolbarContainer .tags-filter-group .tags-filter-search-icon{position:relative;left:-30px;left:-1.875rem;top:10px;top:.625rem}.tagsToolbarContainer .tags-select-group{display:flex}.tagsToolbarContainer .tags-select-group:hover{background-color:var(--pf-c-select__menu-item--hover--BackgroundColor)}.tagsToolbarContainer .tags-select-group .tags-select-badge{position:relative;margin-top:var(--pf-global--spacer--md);left:-15px;left:-.9375rem;bottom:8px;bottom:.5rem}.tagsToolbarContainer .pf-c-select__toggle{width:220px;font-size:small}.tagsToolbarContainer .pf-c-select__toggle.pf-m-disabled,.tagsToolbarContainer .pf-c-select__toggle:disabled{background-color:var(--pf-global--BackgroundColor--100)}.tagsToolbarContainer .pf-c-select__toggle.pf-m-disabled .pf-c-select__toggle-arrow,.tagsToolbarContainer .pf-c-select__toggle:disabled .pf-c-select__toggle-arrow{color:var(--pf-global--BackgroundColor--100)}.tagsToolbarContainer .pf-c-select{max-width:400px !important}.tagsToolbarContainer .pf-c-check__label{max-width:350px !important;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tagsListContainer .pf-c-data-list{border:none}.tagsListContainer .pf-c-data-list__item{border:none}.tagsListContainer .pf-c-data-list__item .pf-c-data-list__item-control{padding:8px 0 8px !important}.tagsListContainer .pf-c-data-list__item .pf-c-data-list__item-content{padding-bottom:8px !important}.tagsListContainer .pf-c-data-list__item .pf-c-data-list__item-content .pf-c-data-list__cell{padding-top:8px !important}\n",""]),e.exports=t}}]);
//# sourceMappingURL=24.js.map