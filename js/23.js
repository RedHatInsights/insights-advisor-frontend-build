(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1206:function(e,t,a){"use strict";a.r(t);var n=a(773),r=a.n(n),o=a(146),l=a.n(o),c=a(227),i=a.n(c),s=a(226),g=a.n(s),d=(a(864),a(0)),u=a.n(d),p=a(337),f=a(41),m=a(756),b=a(9),h=a(33),O=a(105),w=a.n(O),y=a(706),v=a(1),C=a.n(v),T=a(150),E=a(149),j=a(336),_=a(729),k=a(727),L=a(725),S=a(728),D=a(726),M=a(91),P=a(20),x=a(12),R=a(757),I=function(e){if(null!==e){var t=new URL(window.location),a=new URLSearchParams(t.search);e.length?a.set("tags",e.join()):a.delete("tags"),window.history.replaceState(null,null,"".concat(t.origin).concat(t.pathname).concat(a.toString().length?"?":"").concat(a.toString()))}};function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var U=function(e){var t=e.setSelectedTags,a=e.selectedTags,n=e.showMoreCount,o=e.intl,l=e.tags,c=e.handleModalToggle,i=function(e,n){var o=a.indexOf(n.target.name)>-1?a.filter((function(e){return e!==n.target.name})):[].concat(r()(a),[n.target.name]);t(o),I(o)};return u.a.createElement(u.a.Fragment,null,!n&&u.a.createElement(E.ChipGroup,null,a.map((function(e){return u.a.createElement(T.Chip,{key:e,onClick:function(){return i(0,{target:{name:e}})}},decodeURIComponent(e))}))),u.a.createElement("div",{className:"tagsListContainer"},u.a.createElement(j.DataList,{"aria-label":"tag-list"},l.slice(0,n||l.length).map((function(e){return u.a.createElement(L.DataListItem,{"aria-labelledby":"tag-list-item",key:e},u.a.createElement(D.DataListItemRow,null,u.a.createElement(k.DataListCheck,{"aria-labelledby":"".concat(e,"-check"),name:e,onChange:i,checked:a.indexOf(e)>-1}),u.a.createElement(S.DataListItemCells,{dataListCells:[u.a.createElement(_.DataListCell,{key:"primary content"},"".concat(decodeURIComponent(e)))]})))})),0===l.length&&u.a.createElement(L.DataListItem,{"aria-labelledby":"tag-list-item-no-tags",key:"no-tags"},u.a.createElement(D.DataListItemRow,null,u.a.createElement(S.DataListItemCells,{dataListCells:[u.a.createElement(_.DataListCell,{key:"primary content"},o.formatMessage(x.a.noTags))]}))),n>0&&l.length>n&&u.a.createElement(L.DataListItem,{"aria-labelledby":"tag-list-item-show-more"},u.a.createElement(D.DataListItemRow,null,u.a.createElement(S.DataListItemCells,{dataListCells:[u.a.createElement(_.DataListCell,{key:"primary content"},u.a.createElement(h.Button,{key:"view all tags",variant:"link",onClick:function(){return c(!0)}},o.formatMessage(x.a.countMore,{count:l.length-n})))]}))))))};U.propTypes={setSelectedTags:C.a.func,selectedTags:C.a.array,tags:C.a.object.isRequired,showMoreCount:C.a.number,handleModalToggle:C.a.func.isRequired,intl:C.a.any,history:C.a.object},U.defaultProps={showMoreCount:0};var N=Object(P.c)(Object(M.connect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(Object(a),!0).forEach((function(t){w()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({selectedTags:e.AdvisorStore.selectedTags},t)}),(function(e){return{setSelectedTags:function(t){return e(Object(R.n)(t))}}}))(U));function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var F=function(e){var t=e.handleModalToggle,a=e.intl,n=e.selectedTags,r=e.isModalOpen,o=e.tags;return u.a.createElement(y.Modal,{width:"50%",title:a.formatMessage(x.a.tagsCount,{count:n.length}),isOpen:r,onClose:function(){t(!1)},isFooterLeftAligned:!0},u.a.createElement(N,{tags:o}))};F.propTypes={isModalOpen:C.a.bool,selectedTags:C.a.array,handleModalToggle:C.a.func,tags:C.a.array,intl:C.a.any},F.defaultProps={isModalOpen:!1,handleModalToggle:function(){}};var q=Object(P.c)(Object(M.connect)((function(e){var t=e.AdvisorStore,a=e.ownProps;return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(Object(a),!0).forEach((function(t){w()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({selectedTags:t.selectedTags},a)}))(F)),G=a(730),J=a.n(G),z=a(51),H=a(841),V=a.n(H),W=a(244),K=function(e){var t=e.selectedTags,a=e.setSelectedTags,n=Object(W.a)(),o=Object(d.useState)(!1),c=g()(o,2),s=c[0],O=c[1],w=Object(d.useState)([]),y=g()(w,2),v=y[0],C=y[1],T=Object(d.useState)(!1),E=g()(T,2),j=E[0],_=E[1];Object(d.useEffect)((function(){var e=new URL(window.location),r=new URLSearchParams(e.search);r=r.get("tags"),function(){var e=i()(l.a.mark((function e(){var o,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("".concat(b.BASE_URL,"/tag/"));case 3:o=e.sent,C(o.data.tags),null===r&&null===t&&a([]),r.length&&(c=V()(r.split(","),o.data.tags),I(c),a(c)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Object(z.addNotification)({variant:"danger",dismissable:!0,title:n.formatMessage(x.a.error),description:"".concat(e.t0)});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(d.useEffect)((function(){I(t)}),[window.location]);return null!==t&&u.a.createElement("div",{className:"tagsToolbarContainer"},u.a.createElement(q,{handleModalToggle:function(e){return _(e)},isModalOpen:j,tags:v}),u.a.createElement(p.Select,{className:"dropDownOverride",variant:p.SelectVariant.checkbox,"aria-label":"Select Group Input",onToggle:function(e){return O(e)},onSelect:function(e,n){var o=t.includes(n)?t.filter((function(e){return e!==n})):[].concat(r()(t),[n]);a(o),I(o)},selections:t,isExpanded:s,placeholderText:u.a.createElement(u.a.Fragment,null,u.a.createElement(J.a,null)," ",v.length>0?u.a.createElement(u.a.Fragment,null,n.formatMessage(x.a.filterResults)," ",0===t.length&&n.formatMessage(x.a.allSystems)):n.formatMessage(x.a.noTags)),ariaLabelledBy:"select-group-input",isDisabled:0===v.length},v.slice(0,20).map((function(e){return u.a.createElement(p.SelectOption,{key:e,value:"".concat(e)},u.a.createElement(f.Tooltip,{content:"".concat(decodeURIComponent(e)),position:f.TooltipPosition.right},u.a.createElement("span",null,"".concat(decodeURIComponent(e)))))})),v.length>20?u.a.createElement(h.Button,{key:"view all tags",variant:"link",onClick:function(e){return _(e)}},n.formatMessage(x.a.countMore,{count:v.length-20})):u.a.createElement(u.a.Fragment,null)))};K.propTypes={selectedTags:C.a.array,addNotification:C.a.func,intl:C.a.any,setSelectedTags:C.a.func,history:C.a.any};t.default=Object(M.connect)((function(e){return{selectedTags:e.AdvisorStore.selectedTags}}),(function(e){return{addNotification:function(t){return e(Object(z.addNotification)(t))},setSelectedTags:function(t){return e(Object(R.n)(t))}}}))(K)},817:function(e,t,a){(t=a(6)(!1)).push([e.i,".tagsToolbarContainer{background-color:var(--pf-global--BackgroundColor--100);border-bottom:var(--pf-global--BorderWidth--sm) solid var(--pf-global--BorderColor--light-100)}.tagsToolbarContainer .pf-c-dropdown__menu{top:36px !important}.tagsToolbarContainer .dropDownOverride{padding-left:var(--pf-global--spacer--md)}.tagsToolbarContainer .dropDownOverride button::before{border:none !important}.tagsToolbarContainer .pf-c-select__toggle{width:220px;font-size:small}.tagsToolbarContainer .pf-c-select__toggle.pf-m-disabled,.tagsToolbarContainer .pf-c-select__toggle:disabled{background-color:var(--pf-global--BackgroundColor--100)}.tagsToolbarContainer .pf-c-select__toggle.pf-m-disabled .pf-c-select__toggle-arrow,.tagsToolbarContainer .pf-c-select__toggle:disabled .pf-c-select__toggle-arrow{color:var(--pf-global--BackgroundColor--100)}.tagsToolbarContainer .pf-c-select{max-width:400px !important}.tagsToolbarContainer .pf-c-check__label{max-width:350px !important;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tagsListContainer .pf-c-data-list{border:none}.tagsListContainer .pf-c-data-list__item{border:none}.tagsListContainer .pf-c-data-list__item .pf-c-data-list__item-control{padding:8px 0 8px !important}.tagsListContainer .pf-c-data-list__item .pf-c-data-list__item-content{padding-bottom:8px !important}.tagsListContainer .pf-c-data-list__item .pf-c-data-list__item-content .pf-c-data-list__cell{padding-top:8px !important}\n",""]),e.exports=t},864:function(e,t,a){var n=a(817);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(7)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(817,(function(){var t=a(817);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))}}]);
//# sourceMappingURL=23.js.map