(window.webpackJsonp=window.webpackJsonp||[]).push([[15,6,24],{1149:function(e,t,a){"use strict";a.r(t);var n=a(237),r=a.n(n),o=a(148),l=a.n(o),c=a(236),i=a.n(c),s=a(235),g=a.n(s),u=(a(898),a(0)),p=a.n(u),d=a(356),f=a(52),m=a(796),b=a(10),h=a(38),v=a(353),O=a(773),w=a(106),y=a.n(w),C=a(748),T=a(1),E=a.n(T),j=a(152),_=a(151),L=a(355),S=a(771),k=a(769),D=a(767),M=a(770),x=a(768),P=a(91),I=a(21),R=a(13),B=a(799),N=function(e){if(null!==e){var t=new URL(window.location),a=new URLSearchParams(t.search);e.length?a.set("tags",e.join()):a.delete("tags"),window.history.replaceState(null,null,"".concat(t.origin).concat(t.pathname).concat(a.toString().length?"?":"").concat(a.toString()))}};function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var A=function(e){var t=e.setSelectedTags,a=e.selectedTags,n=e.showMoreCount,o=e.intl,l=e.tags,c=e.handleModalToggle,i=function(e,n){var o=a.indexOf(n.target.name)>-1?a.filter((function(e){return e!==n.target.name})):[].concat(r()(a),[n.target.name]);t(o),N(o)};return p.a.createElement(p.a.Fragment,null,!n&&p.a.createElement(_.ChipGroup,null,a.map((function(e){return p.a.createElement(j.Chip,{key:e,onClick:function(){return i(0,{target:{name:e}})}},decodeURIComponent(e))}))),p.a.createElement("div",{className:"tagsListContainer"},p.a.createElement(L.DataList,{"aria-label":"tag-list"},l.slice(0,n||l.length).map((function(e){return p.a.createElement(D.DataListItem,{"aria-labelledby":"tag-list-item",key:e},p.a.createElement(x.DataListItemRow,null,p.a.createElement(k.DataListCheck,{"aria-labelledby":"".concat(e,"-check"),name:e,onChange:i,checked:a.indexOf(e)>-1}),p.a.createElement(M.DataListItemCells,{dataListCells:[p.a.createElement(S.DataListCell,{key:"primary content"},"".concat(decodeURIComponent(e)))]})))})),0===l.length&&p.a.createElement(D.DataListItem,{"aria-labelledby":"tag-list-item-no-tags",key:"no-tags"},p.a.createElement(x.DataListItemRow,null,p.a.createElement(M.DataListItemCells,{dataListCells:[p.a.createElement(S.DataListCell,{key:"primary content"},o.formatMessage(R.a.noTags))]}))),n>0&&l.length>n&&p.a.createElement(D.DataListItem,{"aria-labelledby":"tag-list-item-show-more"},p.a.createElement(x.DataListItemRow,null,p.a.createElement(M.DataListItemCells,{dataListCells:[p.a.createElement(S.DataListCell,{key:"primary content"},p.a.createElement(h.Button,{key:"view all tags",variant:"link",onClick:function(){return c(!0)}},o.formatMessage(R.a.countMore,{count:l.length-n})))]}))))))};A.propTypes={setSelectedTags:E.a.func,selectedTags:E.a.array,tags:E.a.object.isRequired,showMoreCount:E.a.number,handleModalToggle:E.a.func.isRequired,intl:E.a.any,history:E.a.object},A.defaultProps={showMoreCount:0};var F=Object(I.c)(Object(P.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(Object(a),!0).forEach((function(t){y()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({selectedTags:e.AdvisorStore.selectedTags},t)}),(function(e){return{setSelectedTags:function(t){return e(Object(B.n)(t))}}}))(A));function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var q=function(e){var t=e.handleModalToggle,a=e.intl,n=e.selectedTags,r=e.isModalOpen,o=e.tags;return p.a.createElement(C.Modal,{width:"50%",title:a.formatMessage(R.a.tagsCount,{count:n.length}),isOpen:r,onClose:function(){t(!1)},isFooterLeftAligned:!0},p.a.createElement(F,{tags:o}))};q.propTypes={isModalOpen:E.a.bool,selectedTags:E.a.array,handleModalToggle:E.a.func,tags:E.a.array,intl:E.a.any},q.defaultProps={isModalOpen:!1,handleModalToggle:function(){}};var J=Object(I.c)(Object(P.connect)((function(e){var t=e.AdvisorStore,a=e.ownProps;return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(Object(a),!0).forEach((function(t){y()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({selectedTags:t.selectedTags},a)}))(q)),z=a(350),H=a.n(z),V=a(772),W=a.n(V),Y=a(240),K=a(51),Q=a(865),X=a(875),Z=a.n(X),$=a(255),ee=function(e){var t=e.selectedTags,a=e.setSelectedTags,n=Object($.a)(),o=Object(u.useState)(!1),c=g()(o,2),s=c[0],w=c[1],y=Object(u.useState)([]),C=g()(y,2),T=C[0],E=C[1],j=Object(u.useState)(""),_=g()(j,2),L=_[0],S=_[1],k=Object(Q.a)(L,b.DEBOUNCE_DELAY),D=Object(u.useState)(!1),M=g()(D,2),x=M[0],P=M[1],I=function(){var e=i()(l.a.mark((function e(r,o){var c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("".concat(b.BASE_URL,"/tag/"));case 3:c=e.sent,E(""!==o?c.data.tags.filter((function(e){return e.toLowerCase().includes(o.toLowerCase())})):c.data.tags),null===r&&null===t&&a([]),r.length&&(i=Z()(r.split(","),c.data.tags),N(i),a(i)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Object(K.addNotification)({variant:"danger",dismissable:!0,title:n.formatMessage(R.a.error),description:"".concat(e.t0)});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}();Object(u.useEffect)((function(){var e=new URL(window.location),t=new URLSearchParams(e.search);t=t.get("tags"),I(t,L)}),[k]),Object(u.useEffect)((function(){N(t)}),[window.location]);return null!==t&&p.a.createElement("div",{className:"tagsToolbarContainer"},p.a.createElement(J,{handleModalToggle:function(e){return P(e)},isModalOpen:x,tags:T}),p.a.createElement(d.Select,{className:"dropDownOverride",variant:d.SelectVariant.checkbox,"aria-label":"Select Group Input",onToggle:function(e){S(),w(e)},onSelect:function(e,n){var o=t.includes(n)?t.filter((function(e){return e!==n})):[].concat(r()(t),[n]);a(o),N(o)},selections:t,isExpanded:s,placeholderText:p.a.createElement(p.a.Fragment,null,p.a.createElement(W.a,null)," ",T.length>0?p.a.createElement(p.a.Fragment,null,n.formatMessage(R.a.filterResults)," ",0===t.length&&n.formatMessage(R.a.allSystems)):n.formatMessage(R.a.noTags)),ariaLabelledBy:"select-group-input",isDisabled:0===T.length},p.a.createElement(O.InputGroup,{className:"tags-filter-group"},p.a.createElement(Y.TextInput,{placeholder:n.formatMessage(R.a.filterTagsInToolbar),value:L,onChange:S}),p.a.createElement(H.a,{className:"tags-filter-search-icon"})),p.a.createElement(v.Divider,{key:"inline-filter-divider"}),T.slice(0,20).map((function(e){return p.a.createElement(d.SelectOption,{key:e,value:"".concat(e)},p.a.createElement(f.Tooltip,{content:"".concat(decodeURIComponent(e)),position:f.TooltipPosition.right},p.a.createElement("span",null,"".concat(decodeURIComponent(e)))))})),p.a.createElement(h.Button,{key:"manage all tags",variant:"link",onClick:function(e){return P(e)}},T.length>20?n.formatMessage(R.a.countMoreTags,{count:T.length-20}):n.formatMessage(R.a.manageTags))))};ee.propTypes={selectedTags:E.a.array,addNotification:E.a.func,intl:E.a.any,setSelectedTags:E.a.func,history:E.a.any};t.default=Object(P.connect)((function(e){return{selectedTags:e.AdvisorStore.selectedTags}}),(function(e){return{addNotification:function(t){return e(Object(K.addNotification)(t))},setSelectedTags:function(t){return e(Object(B.n)(t))}}}))(ee)},852:function(e,t,a){(t=a(5)(!1)).push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.tagsToolbarContainer{background-color:var(--pf-global--BackgroundColor--100);border-bottom:var(--pf-global--BorderWidth--sm) solid var(--pf-global--BorderColor--light-100)}.tagsToolbarContainer .pf-c-dropdown__menu{top:36px !important}.tagsToolbarContainer .dropDownOverride{padding-left:var(--pf-global--spacer--md)}.tagsToolbarContainer .dropDownOverride button::before{border:none !important}.tagsToolbarContainer .tags-filter-group{display:flex;padding:var(--pf-global--spacer--sm) var(--pf-global--spacer--md) var(--pf-global--spacer--md) var(--pf-global--spacer--md)}.tagsToolbarContainer .tags-filter-group .tags-filter-search-icon{position:relative;left:-30px;left:-1.875rem;top:10px;top:.625rem}.tagsToolbarContainer .pf-c-select__toggle{width:220px;font-size:small}.tagsToolbarContainer .pf-c-select__toggle.pf-m-disabled,.tagsToolbarContainer .pf-c-select__toggle:disabled{background-color:var(--pf-global--BackgroundColor--100)}.tagsToolbarContainer .pf-c-select__toggle.pf-m-disabled .pf-c-select__toggle-arrow,.tagsToolbarContainer .pf-c-select__toggle:disabled .pf-c-select__toggle-arrow{color:var(--pf-global--BackgroundColor--100)}.tagsToolbarContainer .pf-c-select{max-width:400px !important}.tagsToolbarContainer .pf-c-check__label{max-width:350px !important;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tagsListContainer .pf-c-data-list{border:none}.tagsListContainer .pf-c-data-list__item{border:none}.tagsListContainer .pf-c-data-list__item .pf-c-data-list__item-control{padding:8px 0 8px !important}.tagsListContainer .pf-c-data-list__item .pf-c-data-list__item-content{padding-bottom:8px !important}.tagsListContainer .pf-c-data-list__item .pf-c-data-list__item-content .pf-c-data-list__cell{padding-top:8px !important}\n",""]),e.exports=t},865:function(e,t,a){"use strict";var n=a(235),r=a.n(n),o=a(0);t.a=function(e,t){var a=Object(o.useState)(e),n=r()(a,2),l=n[0],c=n[1];return Object(o.useEffect)((function(){var a=setTimeout((function(){c(e)}),t);return function(){clearTimeout(a)}}),[t,e]),l}},898:function(e,t,a){var n=a(852);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(7)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(852,(function(){var t=a(852);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))}}]);
//# sourceMappingURL=TagsToolbar.js.map