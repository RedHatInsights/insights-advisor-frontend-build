(window.webpackJsonp=window.webpackJsonp||[]).push([[15,4,6,25],{1025:function(t,e,n){(e=n(4)(!1)).push([t.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.tagsToolbarContainer{background-color:var(--pf-global--BackgroundColor--100);border-bottom:var(--pf-global--BorderWidth--sm) solid var(--pf-global--BorderColor--light-100)}.tagsToolbarContainer .pf-c-dropdown__menu{top:36px !important}.tagsToolbarContainer .dropDownOverride{padding-left:var(--pf-global--spacer--md)}.tagsToolbarContainer .dropDownOverride button::before{border:none !important}.tagsToolbarContainer .tags-filter-group{display:flex;padding:var(--pf-global--spacer--sm) 0 var(--pf-global--spacer--md) var(--pf-global--spacer--md)}.tagsToolbarContainer .tags-filter-group .tags-filter-search-icon{position:relative;left:-30px;left:-1.875rem;top:10px;top:.625rem}.tagsToolbarContainer .tags-select-group{display:flex}.tagsToolbarContainer .tags-select-group:hover{background-color:var(--pf-c-select__menu-item--hover--BackgroundColor)}.tagsToolbarContainer .tags-select-group .tags-select-badge{position:relative;margin-top:var(--pf-global--spacer--md);left:-15px;left:-.9375rem;bottom:8px;bottom:.5rem}.tagsToolbarContainer .pf-c-select__toggle{width:220px;font-size:small}.tagsToolbarContainer .pf-c-select__toggle.pf-m-disabled,.tagsToolbarContainer .pf-c-select__toggle:disabled{background-color:var(--pf-global--BackgroundColor--100)}.tagsToolbarContainer .pf-c-select__toggle.pf-m-disabled .pf-c-select__toggle-arrow,.tagsToolbarContainer .pf-c-select__toggle:disabled .pf-c-select__toggle-arrow{color:var(--pf-global--BackgroundColor--100)}.tagsToolbarContainer .pf-c-select{max-width:400px !important}.tagsToolbarContainer .pf-c-check__label{max-width:400px !important;width:400px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tagsListContainer .pf-c-data-list{border:none}.tagsListContainer .pf-c-data-list__item{border:none}.tagsListContainer .pf-c-data-list__item .pf-c-data-list__item-control{padding:8px 0 8px !important}.tagsListContainer .pf-c-data-list__item .pf-c-data-list__item-content{padding-bottom:8px !important}.tagsListContainer .pf-c-data-list__item .pf-c-data-list__item-content .pf-c-data-list__cell{padding-top:8px !important}\n",""]),t.exports=e},1273:function(t,e,n){var a=n(1025);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=n(6)(a,r);a.locals&&(t.exports=a.locals),t.hot.accept(1025,(function(){var e=n(1025);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var n,a=0;for(n in t){if(!e||t[n]!==e[n])return!1;a++}for(n in e)a--;return 0===a}(a.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(e)})),t.hot.dispose((function(){o()}))},1322:function(t,e,n){"use strict";n.r(e);var a=n(263),r=n.n(a),o=n(386),c=n.n(o),i=n(203),s=n.n(i),u=n(388),l=n.n(u),p=n(385),f=n.n(p),d=(n(1273),n(0)),g=n.n(d),m=n(943),b=n(56),T=n(968),_=n(269),v=n(84),y=n(18),O=n(520),h=n(944),E=n(391),S=n.n(E),C=n(8),w=n.n(C),j=n(941),x=n(127),R=n(999),k=n(19),L=n(971),U=n(406);function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(Object(n),!0).forEach((function(e){s()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var I=function(t){var e=t.toggleModal,n=t.fetchTags,a=t.selectedTags,o=t.setSelectedTags,i=t.isOpen,s=Object(d.useState)({}),u=f()(s,2),l=u[0],p=u[1],m=Object(d.useState)(!1),b=f()(m,2),T=b[0],_=b[1],v=Object(d.useState)([]),O=f()(v,2),h=O[0],E=O[1],C=Object(d.useState)(10),w=f()(C,2),x=w[0],L=w[1],M=Object(d.useState)(1),I=f()(M,2),F=I[0],D=I[1],H=Object(d.useState)(),A=f()(H,2),N=A[0],B=A[1],Y=Object(U.a)(),K=Object(R.a)(N,y.DEBOUNCE_DELAY),V=Object(d.useMemo)((function(){return function(t){return{filters:t.map((function(t){return t.namespace})).filter((function(t,e,n){return n.indexOf(t)===e})).map((function(e){return{category:e,chips:t.filter((function(t){return t.namespace===e})).map((function(t){return{name:t.value,id:t.id,value:!0}})),urlParam:"tags"}}))}}(h)}),[h]),G=l.total,q=l.data;Object(d.useEffect)((function(){c()(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return D(1),t.t0=p,t.next=4,n(x,1,null,N);case 4:t.t1=t.sent,(0,t.t0)(t.t1),_(!0);case 7:case"end":return t.stop()}}),t)})))()}),[K]),Object(d.useEffect)((function(){c()(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=p,t.next=3,n(x,F,null,K);case 3:t.t1=t.sent,(0,t.t0)(t.t1),_(!0);case 6:case"end":return t.stop()}}),t)})))()}),[x,F]);var J=function(){return a.length?a.map((function(t){return{id:t,namespace:t.split("/")[0],key:decodeURIComponent(t.split("/")[1].split("=")[0]),value:decodeURIComponent(t.split("/")[1].split("=")[1])}})):[]};Object(d.useEffect)((function(){E(J())}),[a,E]);return g.a.createElement(g.a.Fragment,null,q&&g.a.createElement(j.TagModal,S()({title:Y.formatMessage(k.a.tagsCount,{count:G})},T&&{loaded:T,pagination:{perPage:x,page:F,count:G},rows:q.map((function(t){return P(P({},t),{},{selected:h.find((function(e){return e.id===t.id})),cells:[t.key,t.value,t.namespace,t.count]})}))},{loaded:T,width:"50%",isOpen:i,toggleModal:function(){L(10),D(1),B(),E(J()),e()},filters:[{label:Y.formatMessage(k.a.filterTagsInModal),placeholder:Y.formatMessage(k.a.filterTagsInModal),value:"tags-filter",filterValues:{key:"text-filter",onChange:function(t,e){return B(e)},value:N}}],onUpdateData:function(t){_(!1),L(t.perPage),D(t.page)},columns:[{title:Y.formatMessage(k.a.tagsModalName)},{title:Y.formatMessage(k.a.tagsModalValue)},{title:Y.formatMessage(k.a.tagsModalSources)},{title:Y.formatMessage(k.a.systems)}],selected:h,onSelect:function(t){return E(t.map((function(t){return{id:t.id,namespace:t.namespace,value:t.value,selected:!0}})))},onApply:function(){o(h.map((function(t){return t.id})))},tableProps:{canSelectAll:!1},primaryToolbarProps:{activeFiltersConfig:P(P({},V),{},{onDelete:function(t,e,n){if(n)E([]);else{var a=e.flatMap((function(t){return t.chips.map((function(t){return t.id}))}));E(h.filter((function(t){return a.filter((function(e){return e!==t.id})).length})))}}})}})))};I.propTypes={toggleModal:w.a.func.isRequired,fetchTags:w.a.func.isRequired,isOpen:w.a.bool.isRequired,selectedTags:w.a.array,setSelectedTags:w.a.func};var F=Object(x.connect)((function(t){return{selectedTags:t.AdvisorStore.selectedTags}}),(function(t){return{setSelectedTags:function(e){return t(Object(L.n)(e))}}}))(I),D=n(129),H=n.n(D),A=n(942),N=n.n(A),B=n(207),Y=n(128),K=n(1047),V=n.n(K),G=function(t){if(null!==t){var e=new URL(window.location),n=new URLSearchParams(e.search);t.length?n.set("tags",t.join()):n.delete("tags"),window.history.replaceState(null,null,"".concat(e.origin).concat(e.pathname).concat(n.toString().length?"?":"").concat(n.toString()))}};function q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?q(Object(n),!0).forEach((function(e){s()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var z=function(t){var e=t.selectedTags,n=t.setSelectedTags,a=Object(U.a)(),o=Object(d.useState)(!1),i=f()(o,2),s=i[0],u=i[1],p=Object(d.useState)({}),E=f()(p,2),S=E[0],C=E[1],w=Object(d.useState)(),j=f()(w,2),x=j[0],L=j[1],M=Object(d.useState)(),P=f()(M,2),I=P[0],D=P[1],A=Object(R.a)(x,y.DEBOUNCE_DELAY),K=Object(d.useState)(!1),q=f()(K,2),z=q[0],W=q[1],Q=S.total,X=S.count,Z=S.data,$=function(t){return{total:t.total,count:t.count,data:l()(new Set(t.data.map((function(t){return t.namespace})))).map((function(e){return{source:e,data:t.data.filter((function(t){return t.namespace===e}))}}))}},tt=function(t,e,n){return{total:e,count:n,data:t.map((function(t){var e=t.tag,n=e.namespace,a=e.key,r=e.value;return J(J({},t.tag),{},{count:t.count,id:"".concat(n,"/").concat(encodeURIComponent(a),"=").concat(encodeURIComponent(r))})}))}},et=function(){var t=c()(r.a.mark((function t(o,c,i,s){var u,l,p;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=[],t.prev=1,""!==s&&s){t.next=8;break}return t.next=5,T.a.get("".concat(y.INV_BASE_URL,"/tags?per_page=").concat(o,"&page=").concat(c,"&registered_with=insights"));case 5:t.t0=t.sent,t.next=11;break;case 8:return t.next=10,T.a.get("".concat(y.INV_BASE_URL,"/tags?per_page=").concat(o,"&page=").concat(c,"&search=").concat(s.toLowerCase(),"&registered_with=insights"));case 10:t.t0=t.sent;case 11:l=t.t0,u=tt(l.data.results,l.data.total,l.data.count),null===i&&null===e&&n([]),i.length&&(p=V()(i.split(","),e),G(p),n(p)),t.next=20;break;case 17:t.prev=17,t.t1=t.catch(1),Object(Y.addNotification)({variant:"danger",dismissable:!0,title:a.formatMessage(k.a.error),description:"".concat(t.t1)});case 20:return t.abrupt("return",u);case 21:case"end":return t.stop()}}),t,null,[[1,17]])})));return function(e,n,a,r){return t.apply(this,arguments)}}();Object(d.useEffect)((function(){L("")}),[]),Object(d.useEffect)((function(){var t=new URL(window.location),e=new URLSearchParams(t.search);D(e.get("tags"))}),[e]),Object(d.useEffect)((function(){var t=new URL(window.location),e=new URLSearchParams(t.search);e.get("tags")===I?c()(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=C,t.t1=$,t.next=4,et(20,1,null,x);case 4:return t.t2=t.sent,t.t3=(0,t.t1)(t.t2),t.abrupt("return",(0,t.t0)(t.t3));case 7:case"end":return t.stop()}}),t)})))():c()(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=C,t.t1=$,t.next=4,et(20,1,e,x);case 4:return t.t2=t.sent,t.t3=(0,t.t1)(t.t2),t.abrupt("return",(0,t.t0)(t.t3));case 7:case"end":return t.stop()}}),t)})))()}),[A]),Object(d.useEffect)((function(){G(e)}),[window.location]);return null!==e&&g.a.createElement("div",{className:"tagsToolbarContainer"},g.a.createElement(F,{toggleModal:function(){return W(!z)},isOpen:z,fetchTags:et}),Z&&g.a.createElement(m.Select,{className:"dropDownOverride",variant:m.SelectVariant.checkbox,"aria-label":"Select Group Input",onToggle:function(t){L(""),u(t)},onSelect:function(t,a){var r=e.includes(a)?e.filter((function(t){return t!==a})):[].concat(l()(e),[a]);n(r),G(r)},selections:e,isOpen:s,placeholderText:g.a.createElement(g.a.Fragment,null,g.a.createElement(N.a,null)," ",Z&&Z.length>0?g.a.createElement(g.a.Fragment,null,a.formatMessage(k.a.filterResults)," ",0===e.length&&a.formatMessage(k.a.allSystems)):a.formatMessage(k.a.noTags)),ariaLabelledBy:"select-group-input",isDisabled:0===Z.length},g.a.createElement(h.InputGroup,{className:"tags-filter-group"},g.a.createElement(B.TextInput,{"aria-label":"tags-filter-input",placeholder:a.formatMessage(k.a.filterTagsInToolbar),value:x,onChange:L}),g.a.createElement(H.a,{className:"tags-filter-search-icon"})),g.a.createElement(O.Divider,{key:"inline-filter-divider"}),Z.map((function(t,n){return g.a.createElement(m.SelectGroup,{key:"group".concat(n),label:t.source},t.data.map((function(t,n){return g.a.createElement("span",{key:n,className:"tags-select-group"},g.a.createElement(m.SelectOption,{value:t.id,isChecked:e.find((function(e){return e===t.id}))},g.a.createElement(b.Tooltip,{content:"".concat(decodeURIComponent(t.id)),position:b.TooltipPosition.right},g.a.createElement("span",null,"".concat(decodeURIComponent(t.key+"="+t.value))))),g.a.createElement(_.Badge,{className:"tags-select-badge"}," ",t.count," "))})))})),g.a.createElement(v.Button,{key:"manage all tags",variant:"link",onClick:function(){return W(!0)}},X>=20?a.formatMessage(k.a.countMoreTags,{count:Q-X}):a.formatMessage(k.a.manageTags))))};z.propTypes={selectedTags:w.a.array,addNotification:w.a.func,intl:w.a.any,setSelectedTags:w.a.func,history:w.a.any};e.default=Object(x.connect)((function(t){return{selectedTags:t.AdvisorStore.selectedTags}}),(function(t){return{addNotification:function(e){return t(Object(Y.addNotification)(e))},setSelectedTags:function(e){return t(Object(L.n)(e))}}}))(z)},971:function(t,e,n){"use strict";n.d(e,"d",(function(){return p})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return d})),n.d(e,"k",(function(){return g})),n.d(e,"h",(function(){return m})),n.d(e,"i",(function(){return b})),n.d(e,"g",(function(){return T})),n.d(e,"f",(function(){return _})),n.d(e,"c",(function(){return v})),n.d(e,"j",(function(){return y})),n.d(e,"a",(function(){return O})),n.d(e,"l",(function(){return h})),n.d(e,"n",(function(){return E})),n.d(e,"m",(function(){return S})),n.d(e,"o",(function(){return C}));var a=n(263),r=n.n(a),o=n(386),c=n.n(o),i=n(18),s=n(968),u=function(){var t=c()(r.a.mark((function t(e,n,a,o){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,insights.chrome.auth.getUser();case 2:if(!o){t.next=8;break}return t.next=5,s.a.get("".concat(e,"?").concat(o),n,a);case 5:t.t0=t.sent,t.next=11;break;case 8:return t.next=10,s.a.get("".concat(e),n,a);case 10:t.t0=t.sent;case 11:return c=t.t0,t.abrupt("return",c.data);case 13:case"end":return t.stop()}}),t)})));return function(e,n,a,r){return t.apply(this,arguments)}}(),l=function(){var t=c()(r.a.mark((function t(e,n,a){var o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,insights.chrome.auth.getUser();case 2:return t.next=4,s.a.post(e,n,a);case 4:return o=t.sent,t.abrupt("return",o.data);case 6:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}(),p=function(t,e){return{type:i.RULES_FETCH,payload:u(i.RULES_FETCH_URL,{},t,e&&e)}},f=function(t,e){return{type:i.RULE_FETCH,payload:u("".concat(i.RULES_FETCH_URL).concat(t.rule_id,"/"),{},t,e&&e)}},d=function(t,e,n){return{type:i.SYSTEM_FETCH,payload:u("".concat(i.RULES_FETCH_URL).concat(encodeURI(t),"/systems"),{},e,n&&n)}},g=function(t){return{type:i.FILTERS_SET,payload:t}},m=function(t){return{type:i.TOPICS_FETCH,payload:u(i.TOPICS_FETCH_URL,{},t)}},b=function(){return{type:i.TOPICS_FETCH,payload:u("".concat(i.TOPICS_FETCH_URL,"?show_disabled=true"))}},T=function(t){return{type:i.TOPIC_FETCH,payload:u("".concat(i.TOPICS_FETCH_URL).concat(t.topic_id,"/"))}},_=function(t){return{type:i.SYSTEMS_FETCH,payload:u(i.SYSTEMS_FETCH_URL,{},t)}},v=function(t){return{type:i.RULE_ACK_FETCH,payload:u("".concat(i.RULE_ACK_URL).concat(t.rule_id,"/"))}},y=function(t){return{type:i["".concat(t.type,"_ACK_SET")],payload:l(i["".concat(t.type,"_ACK_URL")],{},t.options)}},O=function(t){return{type:i.HOST_ACK_FETCH,payload:u("".concat(i.HOST_ACK_URL),{},t)}},h=function(t){return{type:i.FILTERS_SYSTEMS_SET,payload:t}},E=function(t){return{type:i.SELECTED_TAGS_SET,payload:t}},S=function(t){return{type:i.RULE_SET,payload:t}},C=function(t){return{type:i.SYSTEM_SET,payload:t}}},999:function(t,e,n){"use strict";var a=n(385),r=n.n(a),o=n(0);e.a=function(t,e){var n=Object(o.useState)(t),a=r()(n,2),c=a[0],i=a[1];return Object(o.useEffect)((function(){var n=setTimeout((function(){i(t)}),e);return function(){clearTimeout(n)}}),[e,t]),c}}}]);
//# sourceMappingURL=TagsToolbar.js.map