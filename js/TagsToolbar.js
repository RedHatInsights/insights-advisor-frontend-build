(window.webpackJsonp=window.webpackJsonp||[]).push([[15,4,6,24],{1118:function(t,e,n){var a=n(870);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=n(13)(a,r);a.locals&&(t.exports=a.locals),t.hot.accept(870,(function(){var e=n(870);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var n,a=0;for(n in t){if(!e||t[n]!==e[n])return!1;a++}for(n in e)a--;return 0===a}(a.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(e)})),t.hot.dispose((function(){o()}))},1166:function(t,e,n){"use strict";n.r(e);var a=n(264),r=n.n(a),o=n(179),c=n.n(o),s=n(262),i=n.n(s),u=n(129),l=n.n(u),p=n(261),f=n.n(p),d=(n(1118),n(0)),g=n.n(d),m=n(785),b=n(30),T=n(813),_=n(185),h=n(43),v=n(10),E=n(373),S=n(786),y=n(266),O=n.n(y),C=n(12),w=n.n(C),j=n(783),x=n(67),L=n(844),R=n(11),U=n(816),k=n(281),M=function(t){var e=t.toggleModal,n=t.fetchTags,a=t.selectedTags,r=t.setSelectedTags,o=t.totalTags,s=t.isOpen,u=Object(d.useState)(),l=f()(u,2),p=l[0],m=l[1],b=Object(d.useState)(!1),T=f()(b,2),_=T[0],h=T[1],E=Object(d.useState)([]),S=f()(E,2),y=S[0],C=S[1],w=Object(d.useState)(10),x=f()(w,2),U=x[0],M=x[1],I=Object(d.useState)(1),P=f()(I,2),F=P[0],H=P[1],A=Object(d.useState)(),N=f()(A,2),D=N[0],B=N[1],Y=Object(k.a)(),K=Object(L.a)(D,v.DEBOUNCE_DELAY);return Object(d.useEffect)((function(){i()(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return H(1),t.t0=m,t.next=4,n(U,1,null,D);case 4:t.t1=t.sent,(0,t.t0)(t.t1),h(!0);case 7:case"end":return t.stop()}}),t)})))()}),[K]),Object(d.useEffect)((function(){i()(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=m,t.next=3,n(U,F,null,K);case 3:t.t1=t.sent,(0,t.t0)(t.t1),h(!0);case 6:case"end":return t.stop()}}),t)})))()}),[U,F]),Object(d.useEffect)((function(){C(a.length?a.map((function(t){return{id:t,selected:!0}})):[])}),[a,C]),g.a.createElement(j.TagModal,O()({systemName:Y.formatMessage(R.a.insightsHeader).toLowerCase()},_&&{loaded:_,pagination:{perPage:U,page:F,count:o},rows:p.map((function(t){return{id:t.id,selected:y.find((function(e){return e.id===t.id})),cells:[t.key,t.value,t.namespace,t.count]}}))},{loaded:_,width:"auto",isOpen:s,toggleModal:function(){M(10),H(1),B(),C([]),e()},filters:[{label:Y.formatMessage(R.a.filterTagsInModal),placeholder:Y.formatMessage(R.a.filterTagsInModal),value:"tags-filter",filterValues:{key:"text-filter",onChange:function(t,e){return B(e)},value:D}}],onUpdateData:function(t){h(!1),M(t.perPage),H(t.page)},columns:[{title:Y.formatMessage(R.a.tagsModalName)},{title:Y.formatMessage(R.a.tagsModalValue)},{title:Y.formatMessage(R.a.tagsModalSources)},{title:Y.formatMessage(R.a.systems)}],selected:y,onSelect:function(t){return C(t.map((function(t){return{id:t.id,selected:!0}})))},onApply:function(){r(y.map((function(t){return t.id}))),C([])},tableProps:{canSelectAll:!1}}))};M.propTypes={toggleModal:w.a.func.isRequired,fetchTags:w.a.func.isRequired,totalTags:w.a.number.isRequired,isOpen:w.a.bool.isRequired,selectedTags:w.a.array,setSelectedTags:w.a.func};var I=Object(x.connect)((function(t){return{selectedTags:t.AdvisorStore.selectedTags}}),(function(t){return{setSelectedTags:function(e){return t(Object(U.n)(e))}}}))(M),P=n(268),F=n.n(P),H=n(784),A=n.n(H),N=n(180),D=n(68),B=n(892),Y=n.n(B),K=function(t){if(null!==t){var e=new URL(window.location),n=new URLSearchParams(e.search);t.length?n.set("tags",t.join()):n.delete("tags"),window.history.replaceState(null,null,"".concat(e.origin).concat(e.pathname).concat(n.toString().length?"?":"").concat(n.toString()))}};function V(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?V(Object(n),!0).forEach((function(e){l()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var G=function(t){var e=t.selectedTags,n=t.setSelectedTags,a=Object(k.a)(),o=Object(d.useState)(!1),s=f()(o,2),u=s[0],l=s[1],p=Object(d.useState)(),y=f()(p,2),O=y[0],C=y[1],w=Object(d.useState)([]),j=f()(w,2),x=j[0],U=j[1],M=Object(d.useState)(),P=f()(M,2),H=P[0],B=P[1],V=Object(d.useState)(),G=f()(V,2),J=G[0],z=G[1],W=Object(d.useState)(),Q=f()(W,2),X=Q[0],Z=Q[1],$=Object(L.a)(H,v.DEBOUNCE_DELAY),tt=Object(d.useState)(!1),et=f()(tt,2),nt=et[0],at=et[1],rt=function(t){return t.map((function(t){return t.namespace})).filter((function(t,e,n){return n.indexOf(t)===e})).map((function(e){return{source:e,data:t.filter((function(t){return t.namespace===e}))}}))},ot=function(t){var e=[];return t.map((function(t){var n=t.tag,a=n.namespace,r=n.key,o=n.value;e.push(q(q({},t.tag),{},{count:t.count,id:"".concat(a,"/").concat(encodeURIComponent(r),"=").concat(encodeURIComponent(o))}))})),e},ct=function(){var t=i()(c.a.mark((function t(r,o,s,i){var u,l,p;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=[],t.prev=1,""!==i&&i){t.next=8;break}return t.next=5,T.a.get("".concat(v.INV_BASE_URL,"/tags?per_page=").concat(r,"&page=").concat(o,"&registered_with=insights"));case 5:t.t0=t.sent,t.next=11;break;case 8:return t.next=10,T.a.get("".concat(v.INV_BASE_URL,"/tags?per_page=").concat(r,"&page=").concat(o,"&search=").concat(i.toLowerCase(),"&registered_with=insights"));case 10:t.t0=t.sent;case 11:l=t.t0,C(l.data.total),u=ot(l.data.results),null===s&&null===e&&n([]),s.length&&(p=Y()(s.split(","),e),K(p),n(p)),t.next=21;break;case 18:t.prev=18,t.t1=t.catch(1),Object(D.addNotification)({variant:"danger",dismissable:!0,title:a.formatMessage(R.a.error),description:"".concat(t.t1)});case 21:return t.abrupt("return",u);case 22:case"end":return t.stop()}}),t,null,[[1,18]])})));return function(e,n,a,r){return t.apply(this,arguments)}}();Object(d.useEffect)((function(){B("")}),[]),Object(d.useEffect)((function(){Z(x.flatMap((function(t){return t.data})).length)}),[x]),Object(d.useEffect)((function(){var t=new URL(window.location),e=new URLSearchParams(t.search);z(e.get("tags"))}),[e]),Object(d.useEffect)((function(){var t=new URL(window.location),e=new URLSearchParams(t.search);e.get("tags")===J?i()(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=U,t.t1=rt,t.next=4,ct(20,1,null,H);case 4:return t.t2=t.sent,t.t3=(0,t.t1)(t.t2),t.abrupt("return",(0,t.t0)(t.t3));case 7:case"end":return t.stop()}}),t)})))():i()(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=U,t.t1=rt,t.next=4,ct(20,1,e,H);case 4:return t.t2=t.sent,t.t3=(0,t.t1)(t.t2),t.abrupt("return",(0,t.t0)(t.t3));case 7:case"end":return t.stop()}}),t)})))()}),[$]),Object(d.useEffect)((function(){K(e)}),[window.location]);return null!==e&&g.a.createElement("div",{className:"tagsToolbarContainer"},g.a.createElement(I,{totalTags:O,toggleModal:function(){return at(!nt)},isOpen:nt,fetchTags:ct}),g.a.createElement(m.Select,{className:"dropDownOverride",variant:m.SelectVariant.checkbox,"aria-label":"Select Group Input",onToggle:function(t){B(""),l(t)},onSelect:function(t,a){var o=e.includes(a)?e.filter((function(t){return t!==a})):[].concat(r()(e),[a]);n(o),K(o)},selections:e,isOpen:u,placeholderText:g.a.createElement(g.a.Fragment,null,g.a.createElement(A.a,null)," ",x.length>0?g.a.createElement(g.a.Fragment,null,a.formatMessage(R.a.filterResults)," ",0===e.length&&a.formatMessage(R.a.allSystems)):a.formatMessage(R.a.noTags)),ariaLabelledBy:"select-group-input",isDisabled:0===x.length},g.a.createElement(S.InputGroup,{className:"tags-filter-group",value:""},g.a.createElement(N.TextInput,{"aria-label":"tags-filter-input",placeholder:a.formatMessage(R.a.filterTagsInToolbar),value:H,onChange:B}),g.a.createElement(F.a,{className:"tags-filter-search-icon"})),g.a.createElement(E.Divider,{key:"inline-filter-divider",value:""}),x.map((function(t,n){return g.a.createElement(m.SelectGroup,{key:"group".concat(n),label:t.source,value:""},t.data.map((function(t,n){return g.a.createElement("span",{key:n,className:"tags-select-group"},g.a.createElement(m.SelectOption,{value:t.id,isChecked:e.find((function(e){return e===t.id}))},g.a.createElement(b.Tooltip,{content:"".concat(decodeURIComponent(t.id)),position:b.TooltipPosition.right},g.a.createElement("span",null,"".concat(decodeURIComponent(t.key+"="+t.value))))),g.a.createElement(_.Badge,{className:"tags-select-badge"}," ",t.count," "))})))})),g.a.createElement(h.Button,{key:"manage all tags",value:"",variant:"link",onClick:function(){return at(!0)}},X>=20?a.formatMessage(R.a.countMoreTags,{count:O-X}):a.formatMessage(R.a.manageTags))))};G.propTypes={selectedTags:w.a.array,addNotification:w.a.func,intl:w.a.any,setSelectedTags:w.a.func,history:w.a.any};e.default=Object(x.connect)((function(t){return{selectedTags:t.AdvisorStore.selectedTags}}),(function(t){return{addNotification:function(e){return t(Object(D.addNotification)(e))},setSelectedTags:function(e){return t(Object(U.n)(e))}}}))(G)},816:function(t,e,n){"use strict";n.d(e,"d",(function(){return p})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return d})),n.d(e,"k",(function(){return g})),n.d(e,"h",(function(){return m})),n.d(e,"i",(function(){return b})),n.d(e,"g",(function(){return T})),n.d(e,"f",(function(){return _})),n.d(e,"c",(function(){return h})),n.d(e,"j",(function(){return v})),n.d(e,"a",(function(){return E})),n.d(e,"l",(function(){return S})),n.d(e,"n",(function(){return y})),n.d(e,"m",(function(){return O})),n.d(e,"o",(function(){return C}));var a=n(179),r=n.n(a),o=n(262),c=n.n(o),s=n(10),i=n(813),u=function(){var t=c()(r.a.mark((function t(e,n,a){var o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,insights.chrome.auth.getUser();case 2:return t.next=4,i.a.get(e,n,a);case 4:return o=t.sent,t.abrupt("return",o.data);case 6:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}(),l=function(){var t=c()(r.a.mark((function t(e,n,a){var o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,insights.chrome.auth.getUser();case 2:return t.next=4,i.a.post(e,n,a);case 4:return o=t.sent,t.abrupt("return",o.data);case 6:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}(),p=function(t){return{type:s.RULES_FETCH,payload:u(s.RULES_FETCH_URL,{},t)}},f=function(t){return{type:s.RULE_FETCH,payload:u("".concat(s.RULES_FETCH_URL).concat(t.rule_id,"/"),{},t.tags&&{tags:t.tags})}},d=function(t,e){return{type:s.SYSTEM_FETCH,payload:u("".concat(s.RULES_FETCH_URL).concat(encodeURI(t),"/systems"),{},e)}},g=function(t){return{type:s.FILTERS_SET,payload:t}},m=function(t){return{type:s.TOPICS_FETCH,payload:u(s.TOPICS_FETCH_URL,{},t)}},b=function(){return{type:s.TOPICS_FETCH,payload:u("".concat(s.TOPICS_FETCH_URL,"?show_disabled=true"))}},T=function(t){return{type:s.TOPIC_FETCH,payload:u("".concat(s.TOPICS_FETCH_URL).concat(t.topic_id,"/"))}},_=function(t){return{type:s.SYSTEMS_FETCH,payload:u(s.SYSTEMS_FETCH_URL,{},t)}},h=function(t){return{type:s.RULE_ACK_FETCH,payload:u("".concat(s.RULE_ACK_URL).concat(t.rule_id,"/"))}},v=function(t){return{type:s["".concat(t.type,"_ACK_SET")],payload:l(s["".concat(t.type,"_ACK_URL")],{},t.options)}},E=function(t){return{type:s.HOST_ACK_FETCH,payload:u("".concat(s.HOST_ACK_URL),{},t)}},S=function(t){return{type:s.FILTERS_SYSTEMS_SET,payload:t}},y=function(t){return{type:s.SELECTED_TAGS_SET,payload:t}},O=function(t){return{type:s.RULE_SET,payload:t}},C=function(t){return{type:s.SYSTEM_SET,payload:t}}},844:function(t,e,n){"use strict";var a=n(261),r=n.n(a),o=n(0);e.a=function(t,e){var n=Object(o.useState)(t),a=r()(n,2),c=a[0],s=a[1];return Object(o.useEffect)((function(){var n=setTimeout((function(){s(t)}),e);return function(){clearTimeout(n)}}),[e,t]),c}},870:function(t,e,n){(e=n(9)(!1)).push([t.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.tagsToolbarContainer{background-color:var(--pf-global--BackgroundColor--100);border-bottom:var(--pf-global--BorderWidth--sm) solid var(--pf-global--BorderColor--light-100)}.tagsToolbarContainer .pf-c-dropdown__menu{top:36px !important}.tagsToolbarContainer .dropDownOverride{padding-left:var(--pf-global--spacer--md)}.tagsToolbarContainer .dropDownOverride button::before{border:none !important}.tagsToolbarContainer .tags-filter-group{display:flex;padding:var(--pf-global--spacer--sm) 0 var(--pf-global--spacer--md) var(--pf-global--spacer--md)}.tagsToolbarContainer .tags-filter-group .tags-filter-search-icon{position:relative;left:-30px;left:-1.875rem;top:10px;top:.625rem}.tagsToolbarContainer .tags-select-group{display:flex}.tagsToolbarContainer .tags-select-group:hover{background-color:var(--pf-c-select__menu-item--hover--BackgroundColor)}.tagsToolbarContainer .tags-select-group .tags-select-badge{position:relative;margin-top:var(--pf-global--spacer--md);left:-15px;left:-.9375rem;bottom:8px;bottom:.5rem}.tagsToolbarContainer .pf-c-select__toggle{width:220px;font-size:small}.tagsToolbarContainer .pf-c-select__toggle.pf-m-disabled,.tagsToolbarContainer .pf-c-select__toggle:disabled{background-color:var(--pf-global--BackgroundColor--100)}.tagsToolbarContainer .pf-c-select__toggle.pf-m-disabled .pf-c-select__toggle-arrow,.tagsToolbarContainer .pf-c-select__toggle:disabled .pf-c-select__toggle-arrow{color:var(--pf-global--BackgroundColor--100)}.tagsToolbarContainer .pf-c-select{max-width:400px !important}.tagsToolbarContainer .pf-c-check__label{max-width:400px !important;width:400px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tagsListContainer .pf-c-data-list{border:none}.tagsListContainer .pf-c-data-list__item{border:none}.tagsListContainer .pf-c-data-list__item .pf-c-data-list__item-control{padding:8px 0 8px !important}.tagsListContainer .pf-c-data-list__item .pf-c-data-list__item-content{padding-bottom:8px !important}.tagsListContainer .pf-c-data-list__item .pf-c-data-list__item-content .pf-c-data-list__cell{padding-top:8px !important}\n",""]),t.exports=e}}]);
//# sourceMappingURL=TagsToolbar.js.map