(self.webpackChunkadvisor=self.webpackChunkadvisor||[]).push([[4634],{46818:(e,t,r)=>{"use strict";r.d(t,{$G:()=>s,E0:()=>o,P8:()=>i,WT:()=>u,kZ:()=>a});var n=r(78632);const a=()=>({className:n.Z.modifiers.breakWord}),o=()=>({className:n.Z.modifiers.fitContent}),i=()=>({className:n.Z.modifiers.nowrap}),s=()=>({className:n.Z.modifiers.truncate}),u=()=>({className:n.Z.modifiers.wrap})},64016:(e,t,r)=>{"use strict";r.d(t,{kx:()=>v,uc:()=>m,vk:()=>g});var n=r(42982),a=r(4942),o=r(15861),i=r(87757),s=r.n(i),u=r(71094),c=r(97109),l=r(59303),p=r(58016);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(){var e=(0,o.Z)(s().mark((function e(t){var r,n,a,o,i,c,f,v,m,y,g,b,O;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.per_page,o=t.page,i=t.advisorFilters,c=t.filters,f=t.workloads,v=t.SID,m=t.pathway,y=t.rule,g=t.selectedTags,b=t.sort,O=(0,p.J)(i,o,a,b,m,c,g,f,v),!m){e.next=17;break}return e.next=5,(0,u.dX)("".concat(l.Vo),{},d(d({},O),{},{pathway:m.slug}));case 5:if(e.t2=r=e.sent,e.t1=null===e.t2,e.t1){e.next=9;break}e.t1=void 0===r;case 9:if(!e.t1){e.next=13;break}e.t3=void 0,e.next=14;break;case 13:e.t3=r.data;case 14:e.t0=e.t3,e.next=29;break;case 17:return e.next=19,(0,u.dX)("".concat(l.cJ).concat(encodeURI(y.rule_id),"/systems_detail/"),{},O);case 19:if(e.t5=n=e.sent,e.t4=null===e.t5,e.t4){e.next=23;break}e.t4=void 0===n;case 23:if(!e.t4){e.next=27;break}e.t6=void 0,e.next=28;break;case 27:e.t6=n.data;case 28:e.t0=e.t6;case 29:return e.abrupt("return",e.t0);case 30:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e,t,r,n,a,i,u,l){return function(){var u=(0,o.Z)(s().mark((function o(u,f,m,y){var g,b,O,h,w,j,P,k,_,x,D,S,Z,E;return s().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return g=f.per_page,b=f.page,O=f.orderBy,h=f.orderDirection,w=f.advisorFilters,j=f.filters,P=f.workloads,k=f.SID,_=f.selectedTags,x="operating_system"===O?"rhel_version":"".concat("ASC"===h?"":"-").concat("updated"===O?"last_seen":O),D=(0,p.J)(w,b,g,x,t,j,_,P,k),e(D),S=d(d({},f),{},{pathway:t,handleRefresh:e,rule:l,sort:x}),i(S),o.next=8,v(S);case 8:return Z=o.sent,o.next=11,y(Z.data.map((function(e){return e.system_uuid})),{per_page:g,hasItems:!0,fields:{system_profile:["operating_system"]}},m);case 11:return E=o.sent,r(Z.data.map((function(e){return e.system_uuid}))),n(Z.meta.count),o.abrupt("return",Promise.resolve({results:(0,c.E9)(Z.data,E.results).map((function(e){return d(d({},e),{},{selected:null==a?void 0:a.includes(e.id)})})),total:Z.meta.count}));case 15:case"end":return o.stop()}}),o)})));return function(e,t,r,n){return u.apply(this,arguments)}}()},y=function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100,o=arguments.length>4?arguments[4]:void 0,i=Math.ceil(t/a)||1;return Promise.all((0,n.Z)(new Array(i)).map((function(t,n){return e(d(d({},r),{},{page:n+1,per_page:a,rule:o}))})))},g=function(e,t,r,n){return(0,o.Z)(s().mark((function a(){var o,i;return s().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(!0),a.next=3,y(v,t,e,100,r);case 3:return a.next=5,a.sent.map((function(e){return e.data}));case 5:return o=a.sent,i=[].concat.apply([],o).map((function(e){return e.system_uuid})),n(!1),a.abrupt("return",i);case 9:case"end":return a.stop()}}),a)})))}},58016:(e,t,r)=>{"use strict";r.d(t,{J:()=>c,W:()=>l});var n=r(4942),a=r(75472),o=r.n(a),i=r(97109);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c=function(e,t,r,n,a,o,s,c,l,p){var f,d,v;return u(u(u(u(u(u(u(u(u({},e),{},{limit:r,offset:t*r-r,sort:n},(null==o?void 0:o.hostnameOrId)&&!a&&!p&&{name:null==o?void 0:o.hostnameOrId}),(null==o?void 0:o.hostnameOrId)&&!a&&p&&{display_name:null==o?void 0:o.hostnameOrId}),o.hostnameOrId&&a&&{display_name:null==o?void 0:o.hostnameOrId}),(null===(f=o.osFilter)||void 0===f?void 0:f.length)>0&&{rhel_version:o.osFilter.map((function(e){return e.value})).join(",")}),(null==o||null===(d=o.hostGroupFilter)||void 0===d?void 0:d.length)&&{groups:o.hostGroupFilter.join(",")}),(null===(v=o.tagFilters)||void 0===v?void 0:v.length)&&(0,i.gh)(o.tagFilters)),c?(0,i.s0)(c,l):{}),(null==s?void 0:s.length)>0?{tags:s.join(",")}:{})},l=function(e,t,r){var n;return n=0===t?"name":2===t?"featured":"impacted_systems_count",o()(e,[function(e){return e[n]}],r)}},23278:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var n=r(87462),a=r(42982),o=r(4942),i=r(70885),s=r(93264),u=r.n(s),c=r(59303),l=r(7732),p=r(46818),f=r(97109),d=r(28216),v=r(15112),m=r(45697),y=r.n(m),g=r(30893),b=r(46655),O=r(41131),h=r(86896),w=r(22663),j=r(62012);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=function(e){var t,r=e.rule,m=e.pathway,y=e.selectedTags,P=e.handleModalToggle,_=e.isRecommendationDetail,x=(0,d.useStore)(),D=(0,h.Z)(),S=(0,j.useNavigate)(),Z=(0,s.useState)({limit:20,offset:0,sort:"-last_seen",name:""}),E=(0,i.Z)(Z,2),F=E[0],I=E[1],T=(0,v.U)((function(e){var t=e.name,r=e.display_name,n=k(k(k({},e),t&&{name:t}),r&&{display_name:r});!m&&(0,f.Y4)(n,y)}),m,r),N={deleteTitle:D.formatMessage(g.Z.resetFilters),filters:(t=k({},F),delete t.sort,delete t.offset,delete t.limit,(0,f.yK)(t,c.Ut)),onDelete:function(e,t,r){r?I({sort:F.sort,limit:F.limit,offset:F.offset}):t.map((function(e){var t,r,n=(0,o.Z)({},e.urlParam,Array.isArray(F[e.urlParam])?F[e.urlParam].filter((function(t){return String(t)!==String(e.chips[0].value)})):"");n[e.urlParam].length>0?I(k(k({},F),n)):(t=e.urlParam,delete(r=k(k({},F),{},{offset:0}))[t],I(r))}))}},A=(0,v.G)(P);return u().createElement(w.Z,(0,n.Z)({appName:"inventory",module:"./ImmutableDevices",fallback:u().createElement("div",null),store:x,onLoad:function(e){var t=e.mergeWithEntities,r=e.INVENTORY_ACTION_TYPES,n=e.mergeWithDetail;x.replaceReducer((0,O.U)(k(k({},t((0,b.V)([],r),{page:Number(F.offset/F.limit+1||1),perPage:Number(F.limit||20)})),n())))},key:"inventory",customFilters:{advisorFilters:k(k({},F),{},{"filter[system_profile][host_type]":"edge"})},getEntities:T,showActions:!1,hideFilters:{all:!0,name:!1,operatingSystem:!1,tags:!1},mergeAppColumns:function(e){var t=e.find((function(e){return"updated"===e.key})),r={key:"impacted_date",title:"First Impacted",sortKey:"impacted_date",transforms:[l.p,p.WT],props:{width:15},renderFunc:t.renderFunc};return e.find((function(e){return"system_profile"===e.key})).props={isStatic:!0},[].concat((0,a.Z)(e),[r])},activeFiltersConfig:N,onRowClick:function(e,t){S("/insights/inventory/".concat(t,"?appName=advisor"))}},_?{tableActions:A}:{}))};_.propTypes={tableProps:y().any,rule:y().object,afterDisableFn:y().func,pathway:y().object,selectedTags:y().any,workloads:y().any,SID:y().any,permsExport:y().bool,exportTable:y().string,showTags:y().bool,handleModalToggle:y().func,isRecommendationDetail:y().bool};const x=_},15112:(e,t,r)=>{"use strict";r.d(t,{G:()=>y,U:()=>m});var n=r(4942),a=r(15861),o=r(87757),i=r.n(o),s=r(58016),u=r(64016),c=r(97109),l=r(71094),p=r(59303),f=r(93264);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(e,t,r){return function(){var n=(0,a.Z)(i().mark((function n(a,o,f,d){var m,y,g,b,O,h,w,j,P,k,_,x,D,S,Z,E,F,I,T,N,A;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return y=o.per_page,g=o.page,b=o.orderBy,O=o.orderDirection,h=o.advisorFilters,w=o.filters,j=o.workloads,P=o.SID,k=o.selectedTags,_="operating_system"===b?"rhel_version":"".concat("ASC"===O?"":"-").concat("updated"===b?"last_seen":b),x=(0,s.J)(h,g,y,_,t,w,k,j,P),e(x),D=v(v({},o),{},{pathway:t,rule:r,sort:_}),n.next=7,(0,u.kx)(D);case 7:return S=n.sent,Z=null==S||null===(m=S.data)||void 0===m?void 0:m.map((function(e){return e.system_uuid})),n.next=11,d(Z,{per_page:y,hasItems:!0,fields:{system_profile:["operating_system"]}},f);case 11:if(E=n.sent,F=[],null==Z||!Z.length){n.next=19;break}return n.next=16,(0,l.SO)("".concat(p.pA,"/devices/devicesview"),{},{devices_uuid:Z});case 16:N=n.sent,A=N.data,F=null==A||null===(I=A.data)||void 0===I||null===(T=I.devices)||void 0===T?void 0:T.map((function(e){return v(v({},E.results.find((function(t){return e.DeviceUUID===t.id}))),e)}));case 19:return n.abrupt("return",Promise.resolve({results:(0,c.E9)(S.data,F),total:S.meta.count}));case 20:case"end":return n.stop()}}),n)})));return function(e,t,r,a){return n.apply(this,arguments)}}()},y=function(e){return(0,f.useCallback)((function(){return[{title:"Disable recommendation for system",onClick:function(t,r,n){return e(!0,n)}}]}),[])}},89881:(e,t,r)=>{var n=r(47816),a=r(99291)(n);e.exports=a},69199:(e,t,r)=>{var n=r(89881),a=r(98612);e.exports=function(e,t){var r=-1,o=a(e)?Array(e.length):[];return n(e,(function(e,n,a){o[++r]=t(e,n,a)})),o}},82689:(e,t,r)=>{var n=r(29932),a=r(97786),o=r(67206),i=r(69199),s=r(71131),u=r(7518),c=r(85022),l=r(6557),p=r(1469);e.exports=function(e,t,r){t=t.length?n(t,(function(e){return p(e)?function(t){return a(t,1===e.length?e[0]:e)}:e})):[l];var f=-1;t=n(t,u(o));var d=i(e,(function(e,r,a){return{criteria:n(t,(function(t){return t(e)})),index:++f,value:e}}));return s(d,(function(e,t){return c(e,t,r)}))}},71131:e=>{e.exports=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}},26393:(e,t,r)=>{var n=r(33448);e.exports=function(e,t){if(e!==t){var r=void 0!==e,a=null===e,o=e==e,i=n(e),s=void 0!==t,u=null===t,c=t==t,l=n(t);if(!u&&!l&&!i&&e>t||i&&s&&c&&!u&&!l||a&&s&&c||!r&&c||!o)return 1;if(!a&&!i&&!l&&e<t||l&&r&&o&&!a&&!i||u&&r&&o||!s&&o||!c)return-1}return 0}},85022:(e,t,r)=>{var n=r(26393);e.exports=function(e,t,r){for(var a=-1,o=e.criteria,i=t.criteria,s=o.length,u=r.length;++a<s;){var c=n(o[a],i[a]);if(c)return a>=u?c:c*("desc"==r[a]?-1:1)}return e.index-t.index}},99291:(e,t,r)=>{var n=r(98612);e.exports=function(e,t){return function(r,a){if(null==r)return r;if(!n(r))return e(r,a);for(var o=r.length,i=t?o:-1,s=Object(r);(t?i--:++i<o)&&!1!==a(s[i],i,s););return r}}},75472:(e,t,r)=>{var n=r(82689),a=r(1469);e.exports=function(e,t,r,o){return null==e?[]:(a(t)||(t=null==t?[]:[t]),a(r=o?void 0:r)||(r=null==r?[]:[r]),n(e,t,r))}}}]);
//# sourceMappingURL=../sourcemaps/ImmutableDevices.c87edc30afa6fd47bb403e76e2f18db9.js.map