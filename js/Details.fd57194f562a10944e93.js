(self.webpackChunkadvisor_frontend=self.webpackChunkadvisor_frontend||[]).push([[313],{2622:(e,i,n)=>{"use strict";n.r(i),n.d(i,{default:()=>se});var t=n(92137),r=n(96156),a=n(28481),s=n(87757),l=n.n(s),o=n(57149),c=n(59303),_=n(56161),E=n(48716),d=n(39173),u=n(93264),C=n.n(u),V=n(97109),p=n(88931),m=n(71094),v=n(84785),f=n(75331),S=n(6202),g=n(96466),b=n(62410),h=n(44788),k=n(22910),O=n(96823),N=n(80765),R=n(76341),L=n(36001),P=n(42057),y=n(94550),D=n(61829),T=n(33739),I=n(46891),w=n(45697),A=n.n(w),U=n(84914),M=n(67336),Z=n(30893),x=n(71355),B=n(75989),F=n(86896);function K(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function W(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?K(Object(n),!0).forEach((function(i){(0,r.Z)(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}var G=function(e){var i,n,s,o,_,E=e.tableProps,d=e.rule,v=e.afterDisableFn,f=e.selectedTags,S=e.workloads,g=e.SID,b=(0,F.Z)(),k=(0,p.useDispatch)(),O=(0,u.useState)([]),N=(0,a.Z)(O,2),R=N[0],L=N[1],P=(0,u.useState)({limit:20,offset:0,sort:"-last_seen",name:""}),w=(0,a.Z)(P,2),A=w[0],K=w[1],G=(0,p.useSelector)((function(e){return e.entities||{}})),H=function(e,i){return k({type:"SELECT_ENTITY",payload:{id:e,selected:i}})},j=function(e){return k((0,x.wN)(e))},Y=(0,u.useState)(!1),z=(0,a.Z)(Y,2),q=z[0],J=z[1],X=(0,u.useState)(),Q=(0,a.Z)(X,2),$=Q[0],ee=Q[1],ie=function(e){J(e)},ne=function(){ee(!0),H(0,!0)},te=function(){var e;return $?ee(!1):L(null==G||null===(e=G.rows)||void 0===e?void 0:e.filter((function(e){return!0===e.selected})).map((function(e){return e.id})))},re=function(e){var i=e.name,n=W(W({},e),i&&{name:i});(0,V.Y4)(n,f)},ae=function(e){var i=W(W({},A),{},{offset:0});delete i[e],K(i)},se=[{label:c.SYSTEM_FILTER_CATEGORIES.rhel_version.title.toLowerCase(),type:c.SYSTEM_FILTER_CATEGORIES.rhel_version.type,id:c.SYSTEM_FILTER_CATEGORIES.rhel_version.urlParam,value:"checkbox-".concat(c.SYSTEM_FILTER_CATEGORIES.rhel_version.urlParam),filterValues:{key:"".concat(c.SYSTEM_FILTER_CATEGORIES.rhel_version.urlParam,"-filter"),onChange:function(e,i){!function(e,i){i.length>0?K(W(W({},A),{},{offset:0},(0,r.Z)({},e,i))):ae(e)}(c.SYSTEM_FILTER_CATEGORIES.rhel_version.urlParam,i)},value:A.rhel_version,items:c.SYSTEM_FILTER_CATEGORIES.rhel_version.values}}],le={deleteTitle:b.formatMessage(Z.Z.resetFilters),filters:(o=W({},A),delete o.sort,delete o.offset,delete o.limit,(0,V.yK)(o,c.SYSTEM_FILTER_CATEGORIES)),onDelete:function(e,i,n){n?K({sort:A.sort,limit:A.limit,offset:A.offset}):i.map((function(e){var i=(0,r.Z)({},e.urlParam,Array.isArray(A[e.urlParam])?A[e.urlParam].filter((function(i){return String(i)!==String(e.chips[0].value)})):"");i[e.urlParam].length>0?K(W(W({},A),i)):ae(e.urlParam)}))}};return(0,u.useEffect)((function(){var e;(null==G||null===(e=G.rows)||void 0===e?void 0:e.length)&&te(G.rows)}),[null==G?void 0:G.rows]),C().createElement(C().Fragment,null,q&&C().createElement(h.Z,{handleModalToggle:ie,isModalOpen:q,rule:d,afterFn:v,hosts:R}),C().createElement(T.Z,{hasCheckbox:!0,initialLoading:!0,autoRefresh:!0,hideFilters:{all:!0,name:!1},filterConfig:{items:se},activeFiltersConfig:le,columns:function(e){return function(e){var i=e.filter((function(e){return"updated"===e.key})),n=e.filter((function(e){return"display_name"===e.key})),t=e.filter((function(e){return"system_profile"===e.key}));return n=W(W({},n[0]),{},{transforms:[y.sortable,y.wrappable],props:{isStatic:!0}}),i=W(W({},i[0]),{},{transforms:[y.sortable,y.wrappable],props:{width:20}}),[n,t=W(W({},t[0]),{},{transforms:[y.wrappable]}),i]}(e)},tableProps:W({variant:y.TableVariant.compact},E),customFilters:{advisorFilters:A,selectedTags:f,workloads:S,SID:g},getEntities:function(){var e=(0,t.Z)(l().mark((function e(i,n,t,r){var a,s,o,_,E,u,C,p,v,f,S,g,b,h,k;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _=n.per_page,E=n.page,u=n.orderBy,C=n.orderDirection,p=n.advisorFilters,v=n.selectedTags,f=n.workloads,S=n.SID,g="".concat("ASC"===C?"":"-").concat("updated"===u?"last_seen":u),b=W(W(W(W({},p),{},{limit:_,offset:E*_-_,sort:g},n.filters.hostnameOrId&&{name:null==n||null===(a=n.filters)||void 0===a?void 0:a.hostnameOrId}),v.length&&{tags:v}),Array.isArray(p.rhel_version)&&{rhel_version:null===(s=p.rhel_version)||void 0===s?void 0:s.join(",")}),f&&(b=W(W({},b),(0,V.s0)(f,S))),re(b),e.next=7,m.Z.get("".concat(c.RULES_FETCH_URL).concat(encodeURI(d.rule_id),"/systems_detail/"),{},b);case 7:if(e.t1=o=e.sent,e.t0=null===e.t1,e.t0){e.next=11;break}e.t0=void 0===o;case 11:if(!e.t0){e.next=15;break}e.t2=void 0,e.next=16;break;case 15:e.t2=o.data;case 16:return h=e.t2,e.next=19,r(h.data.map((function(e){return e.system_uuid})),{page:E,per_page:_,hasItems:!0,fields:{system_profile:["operating_system"]}},t);case 19:return k=e.sent,e.abrupt("return",Promise.resolve({results:(0,V.E9)(h.data,k.results),total:h.meta.count}));case 21:case"end":return e.stop()}}),e)})));return function(i,n,t,r){return e.apply(this,arguments)}}(),dedicatedAction:C().createElement(U.Z,{key:"remediation-button",isDisabled:0===R.length||0===d.playbook_count,dataProvider:function(){return{issues:[{id:"advisor:".concat(d.rule_id),description:d.description}],systems:R}},onRemediationCreated:function(e){return function(e){H(-1,!1);try{e.remediation&&j(e.getNotification())}catch(e){j({variant:"danger",dismissable:!0,title:b.formatMessage(Z.Z.error),description:"".concat(e)})}}(e)}},C().createElement(D.ZP,{size:"sm",className:"ins-c-background__default"})," ",b.formatMessage(Z.Z.remediate)),actionsConfig:{actions:["",{label:b.formatMessage(Z.Z.disableRuleForSystems),props:{isDisabled:0===R.length},onClick:function(){return ie(!0)}}]},bulkSelect:{count:R.length,items:[{title:b.formatMessage(Z.Z.selectNone),onClick:function(){H(-1,!1)}},W({},(null==G||null===(i=G.rows)||void 0===i?void 0:i.length)>A.limit?{title:b.formatMessage(Z.Z.selectPage,{items:A.limit}),onClick:function(){H(0,!0)}}:{}),W({},(null==G||null===(n=G.rows)||void 0===n?void 0:n.length)>0?{title:b.formatMessage(Z.Z.selectAll,{items:(null==G?void 0:G.total)||0}),onClick:(_=(0,t.Z)(l().mark((function e(){var i,n,t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.Z.get("".concat(c.RULES_FETCH_URL).concat(encodeURI(d.rule_id),"/systems/"),{},{name:A.name});case 2:if(e.t1=i=e.sent,e.t0=null===e.t1,e.t0){e.next=6;break}e.t0=void 0===i;case 6:if(!e.t0){e.next=10;break}e.t2=void 0,e.next=11;break;case 10:e.t2=null===(n=i.data)||void 0===n?void 0:n.host_ids;case 11:t=e.t2,L(t),ne();case 14:case"end":return e.stop()}}),e)}))),function(){return _.apply(this,arguments)})}:{})],checked:(R.length===(null==G||null===(s=G.rows)||void 0===s?void 0:s.length)||R.length===(null==G?void 0:G.total))&&(null==G?void 0:G.total)>0?1:R.length===A.limit?null:0,onSelect:function(){R.length>0?H(-1,!1):ne(),te()}},fallback:I.Z,onLoad:function(e){var i=e.mergeWithEntities,n=e.INVENTORY_ACTION_TYPES,t=e.mergeWithDetail;(0,M.JH)().register(W(W({},i((0,B.Vy)([],n),{page:Number(A.offset/A.limit+1||1),perPage:Number(A.limit||20)})),t()))}}))};G.propTypes={tableProps:A().any,rule:A().object,afterDisableFn:A().func,selectedTags:A().any,workloads:A().any,SID:A().any};const H=G;var j=n(23218),Y=n(86350),z=n(34702),q=n(87533),J=n(83808),X=n(34348),Q=n(35224),$=n(95358),ee=[{rule_id:"CVE_2015_3456|VENOM_CVE_2015_3456",name:'CVE-2015-3456: "VENOM" QEMU privilege escalation',description:'CVE-2015-3456: "VENOM" QEMU privilege escalation',cves:["CVE-2015-3456"]},{rule_id:"CVE_2015_5600|OPENSSH_CVE_2015_5600",name:"CVE-2015-5600: OpenSSH vulnerable to password guessing attack",description:"CVE-2015-5600: OpenSSH vulnerable to password guessing attack",cves:["CVE-2015-5600"]},{rule_id:"CVE_2015_7181_2_3_nss_nspr|NSS_NSPR_CVE_2015_7181_2_3",name:"CVE-2015-7181, CVE-2015-7182, CVE-2015-7183: NSS/NSPR privilege escalation",description:"CVE-2015-7181, CVE-2015-7182, CVE-2015-7183: NSS/NSPR privilege escalation",cves:["CVE-2015-7181","CVE-2015-7182","CVE-2015-7183"]},{rule_id:"CVE_2015_7501_commons_collections|COMMONS_COLLECTIONS_CVE_2015_7501_IN_USE",name:"CVE-2015-7501: Java application server code execution",description:"CVE-2015-7501: Java application server code execution",cves:["CVE-2015-7501"]},{rule_id:"CVE_2015_7547_glibc|GLIBC_CVE_2015_7547",name:"CVE-2015-7547: libresolv code execution",description:"CVE-2015-7547: libresolv code execution",cves:["CVE-2015-7547"]},{rule_id:"CVE_2016_0728_kernel|KERNEL_CVE-2016-0728",name:"CVE-2016-0728: kernel privilege escalation in key management subsystem",description:"CVE-2016-0728: kernel privilege escalation in key management subsystem",cves:["CVE-2016-0728"]},{rule_id:"CVE_2016_0800_openssl_drown|OPENSSL_CVE_2016_0800_DROWN",name:'CVE-2016-0800: "DROWN" OpenSSL session decryption',description:'CVE-2016-0800: "DROWN" OpenSSL session decryption',cves:["CVE-2016-0800"]},{rule_id:"CVE_2016_0800_openssl_drown|OPENSSL_CVE_2016_0800_DROWN_INT_LISTENING",name:'CVE-2016-0800: "DROWN" OpenSSL session decryption',description:'CVE-2016-0800: "DROWN" OpenSSL session decryption with listening processes',cves:["CVE-2016-0800"]},{rule_id:"CVE_2016_0800_openssl_drown|OPENSSL_CVE_2016_0800_DROWN_LISTENING",name:'CVE-2016-0800: "DROWN" OpenSSL session decryption',description:'CVE-2016-0800: "DROWN" OpenSSL session decryption with externally available processes',cves:["CVE-2016-0800"]},{rule_id:"CVE_2016_0800_openssl_drown|OPENSSL_CVE_2016_0800_DROWN_USED",name:'CVE-2016-0800: "DROWN" OpenSSL session decryption',description:'CVE-2016-0800: "DROWN" OpenSSL session decryption with running services',cves:["CVE-2016-0800"]},{rule_id:"CVE_2016_0800_openssl_drown|OPENSSL_CVE_2016_0800_SPECIAL_DROWN",name:'CVE-2016-0800: "DROWN" OpenSSL session decryption',description:'CVE-2016-0800: "Special DROWN" OpenSSL very efficient session decryption',cves:["CVE-2016-0800"]},{rule_id:"CVE_2016_0800_openssl_drown|OPENSSL_CVE_2016_0800_SPECIAL_DROWN_LISTEN",name:'CVE-2016-0800: "DROWN" OpenSSL session decryption',description:'CVE-2016-0800: "Special DROWN" OpenSSL very efficient session decryption with listening processes',cves:["CVE-2016-0800"]},{rule_id:"CVE_2016_0800_openssl_drown|OPENSSL_CVE_2016_0800_SPECIAL_DROWN_URGENT",name:'CVE-2016-0800: "DROWN" OpenSSL session decryption',description:'CVE-2016-0800: "Special DROWN" OpenSSL very efficient session decryption with externally available processes',cves:["CVE-2016-0800"]},{rule_id:"CVE_2016_0800_openssl_drown|OPENSSL_CVE_2016_0800_SPECIAL_DROWN_USED",name:'CVE-2016-0800: "DROWN" OpenSSL session decryption',description:'CVE-2016-0800: "Special DROWN" OpenSSL very efficient session decryption with running services',cves:["CVE-2016-0800"]},{rule_id:"CVE_2016_2315_24_git|GIT_CVE_2016_2315_24",name:"CVE-2016-2315, CVE-2016-2324: Git code execution via crafted packfile",description:"CVE-2016-2315, CVE-2016-2324: Git code execution via crafted packfile",cves:["CVE-2016-2315","CVE-2016-2324"]},{rule_id:"CVE_2016_2315_24_git|GIT_DAEMON_CVE_2016_2315_24",name:"CVE-2016-2315, CVE-2016-2324: Git code execution via crafted packfile",description:"CVE-2016-2315, CVE-2016-2324: Git daemon remote code execution via crafted packfile",cves:["CVE-2016-2315","CVE-2016-2324"]},{rule_id:"CVE_2016_2776_bind|BIND_CVE_2016_2776",name:"CVE-2016-2776: BIND denial of service via crafted DNS request",description:"CVE-2016-2776: BIND denial of service via crafted DNS request",cves:["CVE-2016-2776"]},{rule_id:"CVE_2016_3714_imagemagick|IMAGEMAGICK_CVE_2016_3714",name:"CVE-2016-3714: ImageMagick code execution",description:"CVE-2016-3714: ImageMagick code execution",cves:["CVE-2016-3714"]},{rule_id:"CVE_2016_5195_kernel|KERNEL_CVE_2016_5195_2",name:"CVE-2016-5195: kernel privilege escalation via permission bypass",description:"CVE-2016-5195: kernel privilege escalation via permission bypass",cves:["CVE-2016-5195"]},{rule_id:"CVE_2016_5696_kernel|KERNEL_CVE_2016_5696_URGENT",name:"CVE-2016-5696: kernel man-in-the-middle via payload injection",description:"CVE-2016-5696: kernel man-in-the-middle via payload injection",cves:["CVE-2016-5696"]},{rule_id:"CVE_2016_5696_kernel|KERNEL_CVE_2016_5696_WARN_2",name:"CVE-2016-5696: kernel man-in-the-middle via payload injection",description:"CVE-2016-5696: kernel man-in-the-middle via payload injection with incomplete mitigation",cves:["CVE-2016-5696"]},{rule_id:"CVE_2016_9962_docker|CVE_2015_9962_DOCKER_LESS_SEVERE_2",name:"CVE-2016-9962: Docker privilege escalation via ptrace",description:"CVE-2016-9962: Docker privilege escalation via ptrace",cves:["CVE-2016-9962"]},{rule_id:"CVE_2016_9962_docker|CVE_2015_9962_DOCKER_MORE_SEVERE_2",name:"CVE-2016-9962: Docker privilege escalation via ptrace",description:"CVE-2016-9962: Docker efficient privilege escalation via ptrace with outdated package",cves:["CVE-2016-9962"]},{rule_id:"CVE_2017_1000250_bluez|BLUEZ_CVE_2017_1000250",name:"CVE-2017-1000250: bluez information disclosure",description:"CVE-2017-1000250: bluez information disclosure",cves:["CVE-2017-1000250"]},{rule_id:"CVE_2017_1000251_kernel_blueborne|KERNEL_CVE_2017_1000251_LOADED_DOS",name:'CVE-2017-1000251: "Blueborne" kernel code execution',description:'CVE-2017-1000251: "Blueborne" kernel denial of service with loaded modules',cves:["CVE-2017-1000251"]},{rule_id:"CVE_2017_1000251_kernel_blueborne|KERNEL_CVE_2017_1000251_LOADED_RCE",name:'CVE-2017-1000251: "Blueborne" kernel code execution',description:'CVE-2017-1000251: "Blueborne" kernel code execution with loaded modules',cves:["CVE-2017-1000251"]},{rule_id:"CVE_2017_1000251_kernel_blueborne|KERNEL_CVE_2017_1000251_POSSIBLE_DOS",name:'CVE-2017-1000251: "Blueborne" kernel code execution',description:'CVE-2017-1000251: "Blueborne" kernel denial of service',cves:["CVE-2017-1000251"]},{rule_id:"CVE_2017_1000251_kernel_blueborne|KERNEL_CVE_2017_1000251_POSSIBLE_RCE",name:'CVE-2017-1000251: "Blueborne" kernel code execution',description:'CVE-2017-1000251: "Blueborne" kernel code execution',cves:["CVE-2017-1000251"]},{rule_id:"CVE_2017_1000253_loadelf|KERNEL_CVE_2017_1000253_MITIGATION_INCOMPLETE",name:"CVE-2017-1000253: kernel privilege escalation via SUID PIE binaries",description:"CVE-2017-1000253: kernel privilege escalation via SUID PIE binaries with incomplete mitigation",cves:["CVE-2017-1000253"]},{rule_id:"CVE_2017_1000253_loadelf|KERNEL_CVE_2017_1000253_VULNERABLE",name:"CVE-2017-1000253: kernel privilege escalation via SUID PIE binaries",description:"CVE-2017-1000253: kernel privilege escalation via SUID PIE binaries",cves:["CVE-2017-1000253"]},{rule_id:"CVE_2017_1000366_glibc|CVE_2017_1000364_KERNEL_CVE_2017_1000366_GLIBC_EXPLOITABLE",name:"CVE-2017-1000364, CVE-2017-1000366: kernel, glibc privilege escalation",description:"CVE-2017-1000364, CVE-2017-1000366: kernel, glibc privilege escalation",cves:["CVE-2017-1000364","CVE-2017-1000366"]},{rule_id:"CVE_2017_1000368_sudo|CVE_2017_1000368_SUDO_2",name:"CVE-2017-1000368: sudo privilege escalation due to incomplete bugfix",description:"CVE-2017-1000368: sudo privilege escalation due to incomplete bugfix",cves:["CVE-2017-1000368"]},{rule_id:"CVE_2017_1000405_kernel|KERNEL_CVE_2017_1000405_VULNERABLE",name:"CVE-2017-1000405: kernel memory corruption",description:"CVE-2017-1000405: kernel memory corruption",cves:["CVE-2017-1000405"]},{rule_id:"CVE_2017_12616_tomcat|TOMCAT_CVE_2017_12616_2",name:"CVE-2017-12616: Tomcat information disclosure",description:"CVE-2017-12616: Tomcat information disclosure",cves:["CVE-2017-12616"]},{rule_id:"CVE_2017_12616_tomcat|TOMCAT_CVE_2017_12616_USED_2",name:"CVE-2017-12616: Tomcat information disclosure",description:"CVE-2017-12616: Tomcat information disclosure with running process",cves:["CVE-2017-12616"]},{rule_id:"CVE_2017_13077_wpa_supplicant|CVE_2017_13077_ERROR",name:"CVE-2017-13077: wpa_supplicant man-in-the-middle",description:"CVE-2017-13077: wpa_supplicant man-in-the-middle with active wifi",cves:["CVE-2017-13077"]},{rule_id:"CVE_2017_13077_wpa_supplicant|CVE_2017_13077_WARN",name:"CVE-2017-13077: wpa_supplicant man-in-the-middle",description:"CVE-2017-13077: wpa_supplicant man-in-the-middle",cves:["CVE-2017-13077"]},{rule_id:"CVE_2017_14491_dnsmasq|CVE_2017_14491_ERROR",name:"CVE-2017-14491: dnsmasq code execution",description:"CVE-2017-14491: dnsmasq code execution with listening processes",cves:["CVE-2017-14491"]},{rule_id:"CVE_2017_14491_dnsmasq|CVE_2017_14491_WARN",name:"CVE-2017-14491: dnsmasq code execution",description:"CVE-2017-14491: dnsmasq code execution",cves:["CVE-2017-14491"]},{rule_id:"CVE_2017_2636_kernel|KERNEL_CVE_2017_2636",name:"CVE-2017-2636: kernel privilege escalation",description:"CVE-2017-2636: kernel privilege escalation",cves:["CVE-2017-2636"]},{rule_id:"CVE_2017_5461_nss|CVE_2017_5461_NSS_2",name:"CVE-2017-5461: NSS code execution",description:"CVE-2017-5461: NSS code execution",cves:["CVE-2017-5461"]},{rule_id:"CVE_2017_5715_cpu_virt|VIRT_CVE_2017_5715_CPU_3_DRACUTKERNEL",name:'CVE-2017-5715: "Spectre" Virtualization side-channel',description:'CVE-2017-5715: "Spectre" Virtualization side-channel in dracut and kernel',cves:["CVE-2017-5715"]},{rule_id:"CVE_2017_5715_cpu_virt|VIRT_CVE_2017_5715_CPU_3_ONLYDRACUT",name:'CVE-2017-5715: "Spectre" Virtualization side-channel',description:'CVE-2017-5715: "Spectre" Virtualization side-channel in dracut',cves:["CVE-2017-5715"]},{rule_id:"CVE_2017_5715_cpu_virt|VIRT_CVE_2017_5715_CPU_3_ONLYVIRT",name:'CVE-2017-5715: "Spectre" Virtualization side-channel',description:'CVE-2017-5715: "Spectre" Virtualization side-channel',cves:["CVE-2017-5715"]},{rule_id:"CVE_2017_5715_cpu_virt|VIRT_CVE_2017_5715_CPU_3_VIRTKERNEL",name:'CVE-2017-5715: "Spectre" Virtualization side-channel',description:'CVE-2017-5715: "Spectre" Virtualization and kernel side-channel',cves:["CVE-2017-5715"]},{rule_id:"CVE_2017_5753_4_cpu_kernel|KERNEL_CVE_2017_5753_4_CPU_ERROR_3",name:'CVE-2017-5753, CVE-2017-5754: "Spectre/Meltdown" CPU side-channel',description:'CVE-2017-5753, CVE-2017-5754: "Spectre/Meltdown" CPU side-channel',cves:["CVE-2017-5753","CVE-2017-5754"]},{rule_id:"CVE_2017_6074_kernel|KERNEL_CVE_2017_6074",name:"CVE-2017-6074: kernel privilege escalation via DCCP module",description:"CVE-2017-6074: kernel privilege escalation via DCCP module",cves:["CVE-2017-6074"]},{rule_id:"CVE_2017_7184_kernel|KERNEL_CVE_2017_7184_EXPLOITABLE_2",name:"CVE-2017-7184: kernel privilege escalation via CAP_NET_ADMIN capability",description:"CVE-2017-7184: kernel privilege escalation via CAP_NET_ADMIN capability",cves:["CVE-2017-7184"]},{rule_id:"CVE_2017_7494_samba|SAMBA_CVE_2017_7494_2",name:"CVE-2017-7494: Samba code execution via writeable share",description:"CVE-2017-7494: Samba code execution via writeable share",cves:["CVE-2017-7494"]},{rule_id:"CVE_2017_8779_rpc|CVE_2017_8779_BUG",name:'CVE-2017-8779: "rpcbomb" rpcbind denial of service',description:'CVE-2017-8779: "rpcbomb" rpcbind crash with certain versions',cves:["CVE-2017-8779"]},{rule_id:"CVE_2017_8779_rpc|CVE_2017_8779_VULNERABLE",name:'CVE-2017-8779: "rpcbomb" rpcbind denial of service',description:'CVE-2017-8779: "rpcbomb" rpcbind denial of service',cves:["CVE-2017-8779"]},{rule_id:"CVE_2017_8779_rpc|CVE_2017_8779_WARN",name:'CVE-2017-8779: "rpcbomb" rpcbind denial of service',description:'CVE-2017-8779: "rpcbomb" rpcbind memory leak',cves:["CVE-2017-8779"]},{rule_id:"CVE_2018_1000115_memcached|CVE_2018_1000115",name:"CVE-2018-1000115: memcached spoofed traffic amplification",description:"CVE-2018-1000115: memcached spoofed traffic amplification",cves:["CVE-2018-1000115"]},{rule_id:"CVE_2018_1002105_kubernetes|CVE_2018_1002105_KUBERNETES",name:"CVE-2018-1002105: kubernetes privilege escalation",description:"CVE-2018-1002105: kubernetes privilege escalation",cves:["CVE-2018-1002105"]},{rule_id:"CVE_2018_1002105_kubernetes|CVE_2018_1002105_KUBERNETES_RUNNING",name:"CVE-2018-1002105: kubernetes privilege escalation",description:"CVE-2018-1002105: kubernetes privilege escalation with running service",cves:["CVE-2018-1002105"]},{rule_id:"CVE_2018_1002105_kubernetes|CVE_2018_1002105_KUBERNETES_WONTFIX",name:"CVE-2018-1002105: kubernetes privilege escalation",description:"CVE-2018-1002105: kubernetes privilege escalation (no fix available for this version)",cves:["CVE-2018-1002105"]},{rule_id:"CVE_2018_1002105_kubernetes|CVE_2018_1002105_KUBERNETES_WONTFIX_RUNNING",name:"CVE-2018-1002105: kubernetes privilege escalation",description:"CVE-2018-1002105: kubernetes privilege escalation with running service (no fix available for this version)",cves:["CVE-2018-1002105"]},{rule_id:"CVE_2018_1102_ose_sti_builder|OSE_STI_BUILDER_CVE_2018_1102",name:"CVE-2018-1102: OpenShift remote code execution via S2I build",description:"CVE-2018-1102: OpenShift remote code execution via S2I build",cves:["CVE-2018-1102"]},{rule_id:"CVE_2018_1111_dhcp|ERROR_CVE_2018_1111_DHCP_2",name:"CVE-2018-1111: NetworkManager code execution",description:"CVE-2018-1111: NetworkManager code execution with DHCP enabled",cves:["CVE-2018-1111"]},{rule_id:"CVE_2018_1111_dhcp|WARN_CVE_2018_1111_DHCP_2",name:"CVE-2018-1111: NetworkManager code execution",description:"CVE-2018-1111: NetworkManager code execution",cves:["CVE-2018-1111"]},{rule_id:"CVE_2018_1112_glusterfs|GLUSTERFS_CVE_2018_1112",name:"CVE-2018-1112: glusterfs unrestricted access",description:"CVE-2018-1112: glusterfs unrestricted access",cves:["CVE-2018-1112"]},{rule_id:"CVE_2018_12130_cpu_kernel|CVE_2018_12130_CPU_KERNEL_BAD_CMDLINE",name:'CVE-2018-12126, CVE-2018-12127, CVE-2018-12130, CVE-2019-11091: "MDS" CPU side-channel',description:'CVE-2018-12126, CVE-2018-12127, CVE-2018-12130, CVE-2019-11091: "MDS" CPU side-channel mitigation disabled',cves:["CVE-2018-12126","CVE-2018-12127","CVE-2018-12130","CVE-2019-11091"]},{rule_id:"CVE_2018_12130_cpu_kernel|CVE_2018_12130_CPU_KERNEL_NEED_UPDATE",name:'CVE-2018-12126, CVE-2018-12127, CVE-2018-12130, CVE-2019-11091: "MDS" CPU side-channel',description:'CVE-2018-12126, CVE-2018-12127, CVE-2018-12130, CVE-2019-11091: "MDS" CPU side-channel',cves:["CVE-2018-12126","CVE-2018-12127","CVE-2018-12130","CVE-2019-11091"]},{rule_id:"CVE_2018_12130_cpu_kernel|CVE_2018_12130_CPU_KERNEL_VULNERABLE_2",name:'CVE-2018-12126, CVE-2018-12127, CVE-2018-12130, CVE-2019-11091: "MDS" CPU side-channel',description:'CVE-2018-12126, CVE-2018-12127, CVE-2018-12130, CVE-2019-11091: "MDS" CPU side-channel reported by kernel',cves:["CVE-2018-12126","CVE-2018-12127","CVE-2018-12130","CVE-2019-11091"]},{rule_id:"CVE_2018_12207_cpu_kernel|CVE_2018_12207_CPU_KERNEL_CMDLINE",name:"CVE-2018-12207: CPU systemwide denial of service",description:"CVE-2018-12207: CPU systemwide denial of service mitigation disabled",cves:["CVE-2018-12207"]},{rule_id:"CVE_2018_12207_cpu_kernel|CVE_2018_12207_CPU_KERNEL_FOR_SURE",name:"CVE-2018-12207: CPU systemwide denial of service",description:"CVE-2018-12207: CPU systemwide denial of service",cves:["CVE-2018-12207"]},{rule_id:"CVE_2018_12207_cpu_kernel|CVE_2018_12207_CPU_KERNEL_FOR_SURE_CRITICAL",name:"CVE-2018-12207: CPU systemwide denial of service",description:"CVE-2018-12207: CPU systemwide denial of service with running hypervisor",cves:["CVE-2018-12207"]},{rule_id:"CVE_2018_14634_kernel|CVE_2018_14634_2",name:"CVE-2018-14634: kernel privilege escalation via SUID-root binary integer overflow",description:"CVE-2018-14634: kernel privilege escalation via SUID-root binary integer overflow",cves:["CVE-2018-14634"]},{rule_id:"CVE_2018_19788_polkit|CVE_2018_19788_POLKIT_UID_BAD",name:"CVE-2018-19788: PolicyKit authentication bypass",description:"CVE-2018-19788: PolicyKit authentication bypass with affected UID",cves:["CVE-2018-19788"]},{rule_id:"CVE_2018_3620_cpu_kernel|CVE_2018_3620_CPU_KERNEL_BAD_CMDLINE",name:'CVE-2018-3620: "L1TF" CPU side-channel',description:'CVE-2018-3620: "L1TF" CPU side-channel mitigation disabled',cves:["CVE-2018-3620"]},{rule_id:"CVE_2018_3620_cpu_kernel|CVE_2018_3620_CPU_KERNEL_NEED_UPDATE",name:'CVE-2018-3620: "L1TF" CPU side-channel',description:'CVE-2018-3620: "L1TF" CPU side-channel',cves:["CVE-2018-3620"]},{rule_id:"CVE_2018_3620_cpu_kernel|CVE_2018_3620_CPU_KERNEL_VULNERABLE_4",name:'CVE-2018-3620: "L1TF" CPU side-channel',description:'CVE-2018-3620: "L1TF" CPU side-channel reported by kernel',cves:["CVE-2018-3620"]},{rule_id:"CVE_2018_3639_cpu_kernel|CVE_2018_3639_CPU_BAD_CMDLINE_2",name:'CVE-2018-3639: "SSBD" CPU side-channel',description:'CVE-2018-3639: "SSBD" CPU side-channel mitigation disabled by command line',cves:["CVE-2018-3639"]},{rule_id:"CVE_2018_3639_cpu_kernel|CVE_2018_3639_CPU_BAD_KERNEL_2",name:'CVE-2018-3639: "SSBD" CPU side-channel',description:'CVE-2018-3639: "SSBD" CPU side-channel',cves:["CVE-2018-3639"]},{rule_id:"CVE_2018_3639_cpu_kernel|CVE_2018_3639_CPU_BAD_MICROCODE_2",name:'CVE-2018-3639: "SSBD" CPU side-channel',description:'CVE-2018-3639: "SSBD" CPU side-channel with outdated microcode',cves:["CVE-2018-3639"]},{rule_id:"CVE_2018_8897_kernel_popss|KERNEL_CVE_2018_8897_VULNERABLE_2",name:'CVE-2018-1087, CVE-2018-8897: "POPSS" kernel privilege escalation',description:'CVE-2018-1087, CVE-2018-8897: "POPSS" kernel privilege escalation',cves:["CVE-2018-1087","CVE-2018-8897"]},{rule_id:"CVE_2019_0155_gpu_kernel|CVE_2019_0155_GPU_KERNEL",name:"CVE-2019-0154, CVE-2019-0155: i915 GPU privilege escalation",description:"CVE-2019-0154, CVE-2019-0155: i915 GPU privilege escalation",cves:["CVE-2019-0154","CVE-2019-0155"]},{rule_id:"CVE_2019_11135_cpu_taa|CVE_2019_11135_CPU_TAA_BADCMD",name:'CVE-2019-11135: "TAA" kernel side-channel',description:'CVE-2019-11135: "TAA" kernel side-channel mitigation disabled',cves:["CVE-2019-11135"]},{rule_id:"CVE_2019_11135_cpu_taa|CVE_2019_11135_CPU_TAA_KERNEL",name:'CVE-2019-11135: "TAA" kernel side-channel',description:'CVE-2019-11135: "TAA" kernel side-channel',cves:["CVE-2019-11135"]},{rule_id:"CVE_2019_11135_cpu_taa|CVE_2019_11135_CPU_TAA_UCODE",name:'CVE-2019-11135: "TAA" kernel side-channel',description:'CVE-2019-11135: "TAA" kernel side-channel mitigation incomplete',cves:["CVE-2019-11135"]},{rule_id:"CVE_2019_1125_kernel|CVE_2019_1125_KERNEL_2",name:'CVE-2019-1125: "SWAPGS" CPU side-channel',description:'CVE-2019-1125: "SWAPGS" CPU side-channel',cves:["CVE-2019-1125"]},{rule_id:"CVE_2019_1125_kernel|CVE_2019_1125_KERNEL_BAD_CMDLINE_2",name:'CVE-2019-1125: "SWAPGS" CPU side-channel',description:'CVE-2019-1125: "SWAPGS" CPU side-channel mitigation disabled',cves:["CVE-2019-1125"]},{rule_id:"CVE_2019_11477_kernel|CVE_2019_11477_KERNEL",name:'CVE-2019-11477, CVE-2019-11478, CVE-2019-11479: "Sack Panic" kernel denial of service',description:'CVE-2019-11477, CVE-2019-11478, CVE-2019-11479: "Sack Panic" kernel denial of service',cves:["CVE-2019-11477","CVE-2019-11478","CVE-2019-11479"]},{rule_id:"CVE_2019_14835_kernel|CVE_2019_14835_KERNEL_VULN_BAD",name:"CVE-2019-14835: kernel privilege escalation during guest live migration",description:"CVE-2019-14835: kernel privilege escalation during guest live migration with virtualization",cves:["CVE-2019-14835"]},{rule_id:"CVE_2019_14835_kernel|CVE_2019_14835_KERNEL_VULN_NORMAL",name:"CVE-2019-14835: kernel privilege escalation during guest live migration",description:"CVE-2019-14835: kernel privilege escalation during guest live migration",cves:["CVE-2019-14835"]},{rule_id:"CVE_2019_5736_runc|CVE_2019_5736_RUNC",name:"CVE-2019-5736: runc privilege escalation",description:"CVE-2019-5736: runc privilege escalation",cves:["CVE-2019-5736"]},{rule_id:"CVEs_Top10_2015_flash_plugin|FLASH_CVES_TOP_10_2015",name:"Top 10 exploited vulnerabilities in 2015",description:"Top 10 exploited vulnerabilities in 2015",cves:["Top 10 exploited vulnerabilities in 2015"]},{rule_id:"CVEs_Top10_2016_flash_plugin|FLASH_CVES_TOP_10_2016",name:"Top 10 exploited vulnerabilities in 2016",description:"Top 10 exploited vulnerabilities in 2016",cves:["Top 10 exploited vulnerabilities in 2016"]},{rule_id:"CVEs_cgi_httpoxy|HTTPD_CVE_2016_5387_3",name:'CVE-2016-5387: "HTTPoxy" httpd man-in-the-middle',description:'CVE-2016-5387: "HTTPoxy" httpd man-in-the-middle',cves:["CVE-2016-5387"]},{rule_id:"CVEs_cgi_httpoxy|HTTPD_CVE_2016_5387_URGENT_3",name:'CVE-2016-5387: "HTTPoxy" httpd man-in-the-middle',description:'CVE-2016-5387: "HTTPoxy" httpd man-in-the-middle with listening processes',cves:["CVE-2016-5387"]},{rule_id:"CVEs_samba_badlock|SAMBA_CVE_2016_2118_CLIENT",name:'CVE-2016-2118: "Badlock" Samba man-in-the-middle',description:'CVE-2016-2118: "Badlock" Samba client man-in-the-middle',cves:["CVE-2016-2118"]},{rule_id:"CVEs_samba_badlock|SAMBA_CVE_2016_2118_SERVER",name:'CVE-2016-2118: "Badlock" Samba man-in-the-middle',description:'CVE-2016-2118: "Badlock" Samba server man-in-the-middle',cves:["CVE-2016-2118"]},{rule_id:"bash_injection|VULNERABLE_BASH_DETECTED",name:'CVE-2014-6271, CVE-2014-7169: "Shellshock" Bash privilege escalation',description:'CVE-2014-6271, CVE-2014-7169: "Shellshock" Bash privilege escalation',cves:["CVE-2014-6271","CVE-2014-7169"]},{rule_id:"hardening_httpd_ssl_pci_dss_poodle|HTTPD_POODLE_4",name:"Decreased security: httpd using deprecated TLS protocol",description:'CVE-2014-3566: "POODLE" SSLv3 man-in-the-middle',cves:["CVE-2014-3566"]},{rule_id:"heartbleed|HAS_HEARTBLEED",name:'CVE-2014-0160: "Heartbleed" OpenSSL information disclosure',description:'CVE-2014-0160: "Heartbleed" OpenSSL information disclosure',cves:["CVE-2014-0160"]},{rule_id:"heartbleed|HEARTBLEED_ACCESSIBLE",name:'CVE-2014-0160: "Heartbleed" OpenSSL information disclosure',description:'CVE-2014-0160: "Heartbleed" OpenSSL with listening processes information disclosure',cves:["CVE-2014-0160"]},{rule_id:"heartbleed|USING_HEARTBLEED_SO",name:'CVE-2014-0160: "Heartbleed" OpenSSL information disclosure',description:'CVE-2014-0160: "Heartbleed" OpenSSL with active processes information disclosure',cves:["CVE-2014-0160"]},{rule_id:"vsftpd_poodle|VSFTPD_POODLE",name:'CVE-2014-3566: "POODLE" vsftpd man-in-the-middle',description:'CVE-2014-3566: "POODLE" vsftpd man-in-the-middle',cves:["CVE-2014-3566"]}],ie=n(36873),ne=n(43707);function te(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function re(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?te(Object(n),!0).forEach((function(i){(0,r.Z)(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}var ae=function(e){var i=e.match,n=(0,F.Z)(),r=(0,p.useDispatch)(),s=(0,ne.T)("advisor",c.PERMS.disableRec).hasAccess,y=(0,u.useState)(!1),D=(0,a.Z)(y,2),T=D[0],w=D[1],A=(0,u.useState)(!1),U=(0,a.Z)(A,2),M=U[0],B=U[1],K=(0,u.useState)(void 0),W=(0,a.Z)(K,2),G=W[0],ie=W[1],te=(0,u.useState)(!1),ae=(0,a.Z)(te,2),se=ae[0],le=ae[1],oe=(0,u.useState)(!1),ce=(0,a.Z)(oe,2),_e=ce[0],Ee=ce[1],de=(0,p.useSelector)((function(e){return e.AdvisorStore.rule})),ue=(0,p.useSelector)((function(e){return e.AdvisorStore.ruleFetchStatus})),Ce=(0,p.useSelector)((function(e){return e.AdvisorStore.topics})),Ve=(0,p.useSelector)((function(e){return e.AdvisorStore.ruleAck})),pe=(0,p.useSelector)((function(e){return e.AdvisorStore.selectedTags})),me=(0,p.useSelector)((function(e){return e.AdvisorStore.workloads})),ve=(0,p.useSelector)((function(e){return e.AdvisorStore.SID})),fe=function(e){return r((0,x.wN)(e))},Se=(0,u.useCallback)((function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=function(e,i){return r(o.w1(e,i))},s=function(e,i,n){return r(o.Mq(e,i,n))},l=null!==pe&&pe.length&&{tags:pe.map((function(e){return encodeURIComponent(e)}))};me&&(l=re(re({},l),(0,V.s0)(me,ve))),t&&s(i.params.id,l.tags?{}:re(re({},l),e),l.tags&&(0,V.gs)(re(re({},l),e))),n&&a(l.tags?{rule_id:i.params.id}:re({rule_id:i.params.id},l),l.tags&&(0,V.gs)(l))}),[pe,me,ve,r,i.params.id]),ge=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;B(e),ie(i)},be=function(){var e=(0,t.Z)(l().mark((function e(i){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.Z.delete("".concat(c.BASE_URL,"/ack/").concat(i.rule_id,"/"));case 3:fe({variant:"success",timeout:!0,dismissable:!0,title:n.formatMessage(Z.Z.recSuccessfullyEnabled)}),Se(),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),ge(!1),fe({variant:"danger",dismissable:!0,title:n.formatMessage(Z.Z.error),description:"".concat(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(i){return e.apply(this,arguments)}}(),he=function(){var e=(0,t.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ie(void 0),Se();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ke=function(){var e=(0,t.Z)(l().mark((function e(){var i,t,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.Z.get("".concat(c.BASE_URL,"/hostack/"),{},{rule_id:de.rule_id,limit:de.hosts_acked_count});case 3:return t=e.sent.data,r={systems:null==t||null===(i=t.data)||void 0===i?void 0:i.map((function(e){return e.system_uuid}))},e.next=7,m.Z.post("".concat(c.BASE_URL,"/rule/").concat(de.rule_id,"/unack_hosts/"),{},r);case 7:Se(),fe({variant:"success",timeout:!0,dismissable:!0,title:n.formatMessage(Z.Z.recSuccessfullyEnabledForSystem)}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),fe({variant:"danger",dismissable:!0,title:n.formatMessage(Z.Z.error),description:"".concat(e.t0)});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){var e=ee&&ee.find((function(e){return e.rule_id===i.params.id}));e?window.location.href="".concat(c.UI_BASE,"/vulnerability/cves/").concat(e.cves[0].includes("CVE-")?"".concat(e.cves[0],"?security_rule=").concat(i.params.id):""):r(o.Qq()),Se({},!1)}),[]);var Oe=(0,u.useRef)(),Ne=(0,u.useRef)(),Re=(0,u.useRef)();return(0,u.useEffect)((function(){!_e||null===pe||JSON.stringify(Oe.current)===JSON.stringify(pe)&&JSON.stringify(Ne.current)===JSON.stringify(me)&&JSON.stringify(Re.current)===JSON.stringify(ve)||Se({},!1),Oe.current=pe,Ne.current=me,Re.current=ve}),[pe,me,ve,Se,_e]),(0,u.useEffect)((function(){var e;if("enabled"!==de.rule_status&&de.rule_id&&_e?(e={rule_id:de.rule_id},r(o.AR(e))):_e||(Se({},!0,!1),Ee(!0)),de&&de.description){var i="".concat(de.description," - ").concat(Z.Z.recommendations.defaultMessage);document.title=n.formatMessage(Z.Z.documentTitle,{subnav:i})}}),[de,de.rule_status,de.rule_id]),C().createElement(C().Fragment,null,se&&C().createElement($.Z,{handleModalToggle:function(e){return le(e)},isModalOpen:se,afterFn:Se,rule:de}),M&&C().createElement(h.Z,{handleModalToggle:ge,isModalOpen:M,rule:de,afterFn:he,host:G}),"fulfilled"===ue&&C().createElement(C().Fragment,null,C().createElement(E.Z,{className:"pageHeaderOverride"},C().createElement(f.Z,{ouiaId:"override",current:de.description||"",match:i})),C().createElement(Y.Z,{className:"pf-m-light pf-u-pt-sm"},C().createElement(q.Z,{resolutionRisk:function(e){var i,n=null==e||null===(i=e.resolution_set)||void 0===i?void 0:i.find((function(e){return e.system_type===c.SYSTEM_TYPES.rhel||c.SYSTEM_TYPES.ocp}));return n?n.resolution_risk.risk:void 0}(de),isDetailsPage:!0,rule:de,topics:Ce,header:C().createElement(C().Fragment,null,C().createElement(d.Z,{title:C().createElement(C().Fragment,null,C().createElement(J.Z,{rule:de}),de.description)}),C().createElement("p",null,n.formatMessage(Z.Z.rulesDetailsPubishdate,{date:C().createElement(b.Z,{date:new Date(de.publish_date),type:"onlyDate"})}),C().createElement(j._,{className:"categoryLabel",color:"blue"},de.category.name)))},C().createElement(L.k,null,C().createElement(P.B,{align:{default:"alignRight"}},C().createElement(Q.u,{trigger:s?"":"mouseenter",content:n.formatMessage(Z.Z.permsAction)},C().createElement(k.Dropdown,{className:"ins-c-rec-details__actions_dropdown",onSelect:function(){return w(!T)},position:"right",ouiaId:"actions",toggle:C().createElement(N.DropdownToggle,{isDisabled:!s,onToggle:function(e){return w(e)},toggleIndicator:g.default},n.formatMessage(Z.Z.actions)),isOpen:T,dropdownItems:de&&"enabled"===de.rule_status?[C().createElement(O.DropdownItem,{key:"link",ouiaId:"disable",onClick:function(){ge(!0)}},n.formatMessage(Z.Z.disableRule))]:[C().createElement(O.DropdownItem,{key:"link",ouiaId:"enable",onClick:function(){be(de)}},n.formatMessage(Z.Z.enableRule))]}))))))),"pending"===ue&&C().createElement(I.Z,null),C().createElement(Y.Z,null,C().createElement(C().Fragment,null,"fulfilled"===ue&&C().createElement(C().Fragment,null,(de.hosts_acked_count>0||"enabled"!==de.rule_status)&&C().createElement(_.Card,{className:"cardOverride"},C().createElement(_.CardHeader,null,C().createElement(X.Dx,{headingLevel:"h4",size:"xl"},C().createElement(v.ZP,{size:"sm"})," ",n.formatMessage(de.hosts_acked_count>0&&"enabled"===de.rule_status?Z.Z.ruleIsDisabledForSystems:Z.Z.ruleIsDisabled))),C().createElement(_.CardBody,null,de.hosts_acked_count>0&&"enabled"===de.rule_status?C().createElement(C().Fragment,null,n.formatMessage(Z.Z.ruleIsDisabledForSystemsBody,{systems:de.hosts_acked_count})," ",C().createElement(S.Button,{isInline:!0,variant:"link",onClick:function(){return le(!0)},ouiaId:"viewSystems"},n.formatMessage(Z.Z.viewSystems))):C().createElement(C().Fragment,null,n.formatMessage(Z.Z.ruleIsDisabledJustification),C().createElement("i",null,Ve.justification||n.formatMessage(Z.Z.none)),Ve.updated_at&&C().createElement("span",null," ",C().createElement(b.Z,{date:new Date(Ve.updated_at),type:"onlyDate"})))),C().createElement(_.CardFooter,null,de.hosts_acked_count>0&&"enabled"===de.rule_status?C().createElement(S.Button,{isInline:!0,variant:"link",onClick:function(){return ke()},ouiaId:"bulkHost"},n.formatMessage(Z.Z.enableRuleForSystems)):C().createElement(S.Button,{isInline:!0,variant:"link",onClick:function(){return be(de)},ouiaId:"rule"},n.formatMessage(Z.Z.enableRule)))),"enabled"===de.rule_status&&C().createElement(C().Fragment,null,C().createElement(X.Dx,{className:"titleOverride",headingLevel:"h3",size:"2xl"},n.formatMessage(Z.Z.affectedSystems)),C().createElement(H,{tableProps:{canSelectAll:!1,actionResolver:function(){return[{title:"Disable recommendation for system",onClick:function(e,i,n){return ge(!0,n)}}]},isStickyHeader:!0},rule:de,afterDisableFn:he,selectedTags:pe,workloads:me,SID:ve})),"enabled"!==de.rule_status&&C().createElement(z.Z,{icon:v.ZP,title:n.formatMessage(Z.Z.ruleIsDisabled),text:n.formatMessage(Z.Z.ruleIsDisabledBody)})),"pending"===ue&&C().createElement(I.Z,null),"failed"===ue&&C().createElement(R.Z,{message:n.formatMessage(Z.Z.rulesTableFetchRulesError)}))))};ae.propTypes={match:A().any};const se=(0,ie.Z)(ae)}}]);
//# sourceMappingURL=../sourcemaps/Details.b8493366455336c338e3.js.map