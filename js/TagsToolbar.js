(window.webpackJsonp=window.webpackJsonp||[]).push([[13,23],{1205:function(t,e,n){"use strict";n.r(e);var a=n(773),r=n.n(a),o=n(146),c=n.n(o),l=n(227),i=n.n(l),s=n(226),u=n.n(s),p=(n(864),n(0)),d=n.n(p),f=n(337),g=n(41),m=n(756),b=n(9),y=n(33),T=n(105),E=n.n(T),h=n(706),_=n(1),C=n.n(_),O=n(150),S=n(149),w=n(336),v=n(729),L=n(727),j=n(725),R=n(728),k=n(726),M=n(91),U=n(20),P=n(12),x=n(757),D=function(t){if(null!==t){var e=new URL(window.location),n=new URLSearchParams(e.search);t.length?n.set("tags",t.join()):n.delete("tags"),window.history.replaceState(null,null,"".concat(e.origin).concat(e.pathname).concat(n.toString().length?"?":"").concat(n.toString()))}};function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}var F=function(t){var e=t.setSelectedTags,n=t.selectedTags,a=t.showMoreCount,o=t.intl,c=t.tags,l=t.handleModalToggle,i=function(t,a){var o=n.indexOf(a.target.name)>-1?n.filter((function(t){return t!==a.target.name})):[].concat(r()(n),[a.target.name]);e(o),D(o)};return d.a.createElement(d.a.Fragment,null,!a&&d.a.createElement(S.ChipGroup,null,n.map((function(t){return d.a.createElement(O.Chip,{key:t,onClick:function(){return i(0,{target:{name:t}})}},decodeURIComponent(t))}))),d.a.createElement("div",{className:"tagsListContainer"},d.a.createElement(w.DataList,{"aria-label":"tag-list"},c.slice(0,a||c.length).map((function(t){return d.a.createElement(j.DataListItem,{"aria-labelledby":"tag-list-item",key:t},d.a.createElement(k.DataListItemRow,null,d.a.createElement(L.DataListCheck,{"aria-labelledby":"".concat(t,"-check"),name:t,onChange:i,checked:n.indexOf(t)>-1}),d.a.createElement(R.DataListItemCells,{dataListCells:[d.a.createElement(v.DataListCell,{key:"primary content"},"".concat(decodeURIComponent(t)))]})))})),0===c.length&&d.a.createElement(j.DataListItem,{"aria-labelledby":"tag-list-item-no-tags",key:"no-tags"},d.a.createElement(k.DataListItemRow,null,d.a.createElement(R.DataListItemCells,{dataListCells:[d.a.createElement(v.DataListCell,{key:"primary content"},o.formatMessage(P.a.noTags))]}))),a>0&&c.length>a&&d.a.createElement(j.DataListItem,{"aria-labelledby":"tag-list-item-show-more"},d.a.createElement(k.DataListItemRow,null,d.a.createElement(R.DataListItemCells,{dataListCells:[d.a.createElement(v.DataListCell,{key:"primary content"},d.a.createElement(y.Button,{key:"view all tags",variant:"link",onClick:function(){return l(!0)}},o.formatMessage(P.a.countMore,{count:c.length-a})))]}))))))};F.propTypes={setSelectedTags:C.a.func,selectedTags:C.a.array,tags:C.a.object.isRequired,showMoreCount:C.a.number,handleModalToggle:C.a.func.isRequired,intl:C.a.any,history:C.a.object},F.defaultProps={showMoreCount:0};var H=Object(U.c)(Object(M.connect)((function(t,e){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(Object(n),!0).forEach((function(e){E()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({selectedTags:t.AdvisorStore.selectedTags},e)}),(function(t){return{setSelectedTags:function(e){return t(Object(x.n)(e))}}}))(F));function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}var B=function(t){var e=t.handleModalToggle,n=t.intl,a=t.selectedTags,r=t.isModalOpen,o=t.tags;return d.a.createElement(h.Modal,{width:"50%",title:n.formatMessage(P.a.tagsCount,{count:a.length}),isOpen:r,onClose:function(){e(!1)},isFooterLeftAligned:!0},d.a.createElement(H,{tags:o}))};B.propTypes={isModalOpen:C.a.bool,selectedTags:C.a.array,handleModalToggle:C.a.func,tags:C.a.array,intl:C.a.any},B.defaultProps={isModalOpen:!1,handleModalToggle:function(){}};var N=Object(U.c)(Object(M.connect)((function(t){var e=t.AdvisorStore,n=t.ownProps;return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){E()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({selectedTags:e.selectedTags},n)}))(B)),K=n(730),Y=n.n(K),G=n(51),q=n(841),J=n.n(q),z=n(243),V=function(t){var e=t.selectedTags,n=t.setSelectedTags,a=Object(z.a)(),o=Object(p.useState)(!1),l=u()(o,2),s=l[0],T=l[1],E=Object(p.useState)([]),h=u()(E,2),_=h[0],C=h[1],O=Object(p.useState)(!1),S=u()(O,2),w=S[0],v=S[1];Object(p.useEffect)((function(){var t=new URL(window.location),r=new URLSearchParams(t.search);r=r.get("tags"),function(){var t=i()(c.a.mark((function t(){var o,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.get("".concat(b.BASE_URL,"/tag/"));case 3:o=t.sent,C(o.data.tags),null===r&&null===e&&n([]),r.length&&(l=J()(r.split(","),o.data.tags),D(l),n(l)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),Object(G.addNotification)({variant:"danger",dismissable:!0,title:a.formatMessage(P.a.error),description:"".concat(t.t0)});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}()()}),[]),Object(p.useEffect)((function(){D(e)}),[window.location]);return null!==e&&d.a.createElement("div",{className:"tagsToolbarContainer"},d.a.createElement(N,{handleModalToggle:function(t){return v(t)},isModalOpen:w,tags:_}),d.a.createElement(f.Select,{className:"dropDownOverride",variant:f.SelectVariant.checkbox,"aria-label":"Select Group Input",onToggle:function(t){return T(t)},onSelect:function(t,a){var o=e.includes(a)?e.filter((function(t){return t!==a})):[].concat(r()(e),[a]);n(o),D(o)},selections:e,isExpanded:s,placeholderText:d.a.createElement(d.a.Fragment,null,d.a.createElement(Y.a,null)," ",_.length>0?d.a.createElement(d.a.Fragment,null,a.formatMessage(P.a.filterResults)," ",0===e.length&&a.formatMessage(P.a.allSystems)):a.formatMessage(P.a.noTags)),ariaLabelledBy:"select-group-input",isDisabled:0===_.length},_.slice(0,20).map((function(t){return d.a.createElement(f.SelectOption,{key:t,value:"".concat(t)},d.a.createElement(g.Tooltip,{content:"".concat(decodeURIComponent(t)),position:g.TooltipPosition.right},d.a.createElement("span",null,"".concat(decodeURIComponent(t)))))})),_.length>20?d.a.createElement(y.Button,{key:"view all tags",variant:"link",onClick:function(t){return v(t)}},a.formatMessage(P.a.countMore,{count:_.length-20})):d.a.createElement(d.a.Fragment,null)))};V.propTypes={selectedTags:C.a.array,addNotification:C.a.func,intl:C.a.any,setSelectedTags:C.a.func,history:C.a.any};e.default=Object(M.connect)((function(t){return{selectedTags:t.AdvisorStore.selectedTags}}),(function(t){return{addNotification:function(e){return t(Object(G.addNotification)(e))},setSelectedTags:function(e){return t(Object(x.n)(e))}}}))(V)},757:function(t,e,n){"use strict";n.d(e,"d",(function(){return p})),n.d(e,"b",(function(){return d})),n.d(e,"e",(function(){return f})),n.d(e,"k",(function(){return g})),n.d(e,"h",(function(){return m})),n.d(e,"i",(function(){return b})),n.d(e,"g",(function(){return y})),n.d(e,"f",(function(){return T})),n.d(e,"c",(function(){return E})),n.d(e,"j",(function(){return h})),n.d(e,"a",(function(){return _})),n.d(e,"l",(function(){return C})),n.d(e,"n",(function(){return O})),n.d(e,"m",(function(){return S})),n.d(e,"o",(function(){return w}));var a=n(146),r=n.n(a),o=n(227),c=n.n(o),l=n(9),i=n(756),s=function(){var t=c()(r.a.mark((function t(e,n,a){var o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,insights.chrome.auth.getUser();case 2:return t.next=4,i.a.get(e,n,a);case 4:return o=t.sent,t.abrupt("return",o.data);case 6:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}(),u=function(){var t=c()(r.a.mark((function t(e,n,a){var o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,insights.chrome.auth.getUser();case 2:return t.next=4,i.a.post(e,n,a);case 4:return o=t.sent,t.abrupt("return",o.data);case 6:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}(),p=function(t){return{type:l.RULES_FETCH,payload:s(l.RULES_FETCH_URL,{},t)}},d=function(t){return{type:l.RULE_FETCH,payload:s("".concat(l.RULES_FETCH_URL).concat(t.rule_id,"/"),{},t.tags&&{tags:t.tags})}},f=function(t,e){return{type:l.SYSTEM_FETCH,payload:s("".concat(l.RULES_FETCH_URL).concat(encodeURI(t),"/systems"),{},e)}},g=function(t){return{type:l.FILTERS_SET,payload:t}},m=function(t){return{type:l.TOPICS_FETCH,payload:s(l.TOPICS_FETCH_URL,{},t)}},b=function(){return{type:l.TOPICS_FETCH,payload:s("".concat(l.TOPICS_FETCH_URL,"?show_disabled=true"))}},y=function(t){return{type:l.TOPIC_FETCH,payload:s("".concat(l.TOPICS_FETCH_URL).concat(t.topic_id,"/"))}},T=function(t){return{type:l.SYSTEMS_FETCH,payload:s(l.SYSTEMS_FETCH_URL,{},t)}},E=function(t){return{type:l.RULE_ACK_FETCH,payload:s("".concat(l.RULE_ACK_URL).concat(t.rule_id,"/"))}},h=function(t){return{type:l["".concat(t.type,"_ACK_SET")],payload:u(l["".concat(t.type,"_ACK_URL")],{},t.options)}},_=function(t){return{type:l.HOST_ACK_FETCH,payload:s("".concat(l.HOST_ACK_URL),{},t)}},C=function(t){return{type:l.FILTERS_SYSTEMS_SET,payload:t}},O=function(t){return{type:l.SELECTED_TAGS_SET,payload:t}},S=function(t){return{type:l.RULE_SET,payload:t}},w=function(t){return{type:l.SYSTEM_SET,payload:t}}},817:function(t,e,n){(e=n(6)(!1)).push([t.i,".tagsToolbarContainer{background-color:var(--pf-global--BackgroundColor--100);border-bottom:var(--pf-global--BorderWidth--sm) solid var(--pf-global--BorderColor--light-100)}.tagsToolbarContainer .pf-c-dropdown__menu{top:36px !important}.tagsToolbarContainer .dropDownOverride{padding-left:var(--pf-global--spacer--md)}.tagsToolbarContainer .dropDownOverride button::before{border:none !important}.tagsToolbarContainer .pf-c-select__toggle{width:220px;font-size:small}.tagsToolbarContainer .pf-c-select__toggle.pf-m-disabled,.tagsToolbarContainer .pf-c-select__toggle:disabled{background-color:var(--pf-global--BackgroundColor--100)}.tagsToolbarContainer .pf-c-select__toggle.pf-m-disabled .pf-c-select__toggle-arrow,.tagsToolbarContainer .pf-c-select__toggle:disabled .pf-c-select__toggle-arrow{color:var(--pf-global--BackgroundColor--100)}.tagsToolbarContainer .pf-c-select{max-width:400px !important}.tagsToolbarContainer .pf-c-check__label{max-width:350px !important;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tagsListContainer .pf-c-data-list{border:none}.tagsListContainer .pf-c-data-list__item{border:none}.tagsListContainer .pf-c-data-list__item .pf-c-data-list__item-control{padding:8px 0 8px !important}.tagsListContainer .pf-c-data-list__item .pf-c-data-list__item-content{padding-bottom:8px !important}.tagsListContainer .pf-c-data-list__item .pf-c-data-list__item-content .pf-c-data-list__cell{padding-top:8px !important}\n",""]),t.exports=e},864:function(t,e,n){var a=n(817);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=n(7)(a,r);a.locals&&(t.exports=a.locals),t.hot.accept(817,(function(){var e=n(817);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var n,a=0;for(n in t){if(!e||t[n]!==e[n])return!1;a++}for(n in e)a--;return 0===a}(a.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(e)})),t.hot.dispose((function(){o()}))}}]);
//# sourceMappingURL=TagsToolbar.js.map